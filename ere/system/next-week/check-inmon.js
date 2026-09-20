const era = require('#/era-electron');

const sys_count_juels = require('#/system/chara/sys-count-juels');
const global_achievement = require('#/system/global/sys-calc-achievement');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const { slavery_enum } = require('#/data/ero/mark-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { gene_type_colors } = require('#/data/race/model/uma-gene');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

/** @param {number[]} in_team_list */
function check_inmon(in_team_list) {
  const milk_list = [[], []];
  const jewel_list = [];

  for (const id of in_team_list) {
    const inmon = CharaInmon.get(id);
    switch (inmon.slave) {
      case slavery_enum.milk:
        milk_list[era.get(`cflag:${id}:种族`)].push(id);
        break;
      case slavery_enum.inherit:
        jewel_list.push(id);
    }
    // 淫纹「忠贞不二」：恢复最大值
    if (inmon.on(plugin_enum.rel_lock)) {
      era.set(`relation:${id}:0`, 600);
    }
  }

  if (
    milk_list[0].length > 0 ||
    milk_list[1].length > 0 ||
    jewel_list.length > 0
  ) {
    era.drawLine();
    for (let i = 0; i < 2; ++i) {
      // 人奶 45，马奶 46
      const milk_item = 45 + i;
      if (milk_list[1 - i].length > 0) {
        const buffer = [];
        milk_list[1 - i].forEach((id) => {
          if (buffer.length > 0) {
            buffer.push(i18n().ui_comma);
          }
          buffer.push(get_chara_talk(id).get_colored_name());
        });
        buffer[buffer.findLastIndex((e) => e === i18n().ui_comma)] =
          i18n().ui_conjunction;
        era.print(
          i18n().timon.get_it_nt_inmon_milk_slave(
            di18n.tb_mark.s_options[slavery_enum.milk],
            buffer,
            __(`tb_item.${milk_item}`),
          ),
        );
        era.add(`item:${milk_item}`, milk_list[1 - i].length);
      }
    }
    if (milk_list[0].length + milk_list[1].length >= 6) {
      global_achievement.slav_mil = 1;
    }
    let j_count = 0;
    for (const id of jewel_list) {
      // CFLAGNAME:48 = 育成回合计时
      const edu_phase = era.get(`cflag:${id}:48`);
      let jid;
      let val;
      if (edu_phase < 3 * 48) {
        const { pink, blue, white } = sys_count_juels(
          id,
          Math.floor(edu_phase / 48) / 3,
        );
        const jewels = [pink, blue, white];
        // PARAMNAME:20 - 22 = 粉 - 白
        jid = (get_random_entry(
          Object.entries(jewels).filter((e) => e[1] > 0),
        ) || [get_random_value(0, 2)])[0];
        val = Math.max(Math.floor(jewels[jid] / 10), 1);
        jid = +jid + 20;
      } else {
        jid = get_random_value(20, 22);
        val = Math.floor(
          era.get(`jewel:${id}:${jid}`) * get_random_value(0.08, 0.12, true),
        );
      }
      era.add(`jewel:0:${jid}`, val);
      j_count += val;
      era.print(
        i18n().timon.get_it_nt_inmon_inhert_slave(
          di18n.tb_mark.s_options[slavery_enum.inherit],
          get_chara_talk(id),
          {
            content: i18n()
              .tb_param.jewel_with_count.replace(
                '%JEWEL%',
                __(`tb_param.jewel${jid}`),
              )
              .replace('%COUNT%', val.toString()),
            color: gene_type_colors[jid - 20],
          },
        ),
      );
    }
    if (j_count >= 100) {
      global_achievement.slav_inh = 1;
    }
  }
}

module.exports = check_inmon;
