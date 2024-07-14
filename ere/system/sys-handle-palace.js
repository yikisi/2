const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const sys_count_juels = require('#/system/chara/sys-count-juels');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_custom_check } = require('#/event/check/check-factory');
const { remove_edu_events } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaSkills = require('#/data/chara-skills');
const {
  attr_change_colors,
  buff_colors,
  sex_colors,
} = require('#/data/color-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');
const { adaptability_names, attr_names } = require('#/data/train-const');

/** @param {number} chara_id */
function sys_handle_palace(chara_id) {
  era.set(`cflag:${chara_id}:殿堂`, 1);
  era.add(`cflag:${chara_id}:育成次数`, 1);
  const chara = get_chara_talk(chara_id);
  const miss_count = remove_edu_events(chara_id)[chara_id] || 0;
  /** @type {*[]} */
  const buffer = [
    { content: [chara.get_colored_name(), ' 的育成结束了……'], type: 'text' },
  ];
  const aim_check = get_custom_check(chara_id).check_palace_and_get_aims();
  let aim_punish_count = 0,
    aim_count = 0;
  if (aim_check.length) {
    aim_check.forEach((e) => {
      aim_punish_count += 1 - e.check;
      aim_count += e.check === 1;
    });
    buffer.push(
      {
        content: [
          chara.get_colored_name(),
          ' 的育成目标完成情况：',
          aim_count === aim_check.length
            ? {
                color: attr_change_colors.up,
                content: '完成！',
                fontWeight: 'bold',
              }
            : {
                color: attr_change_colors.down,
                content: `${aim_count}/${aim_check.length}`,
              },
        ],
        type: 'text',
      },
      ...aim_check.map((e) => {
        return {
          config: { color: e.color, offset: 1, width: 23 },
          content: e.content,
          type: 'text',
        };
      }),
    );
  }
  if (miss_count) {
    buffer.push({
      content: [
        '错过了 ',
        chara.get_colored_name(),
        ' 的 ',
        {
          content: miss_count.toString(),
          color: buff_colors[3],
        },
        ' 个育成事件……',
      ],
      type: 'text',
    });
  }
  const titles =
    get_custom_check(chara_id).check_and_get_titles(!aim_punish_count);
  const races = new RaceHistory(chara_id).get_entries();
  let g1_count = 0,
    pop_g1_count = 0;
  races.forEach((e) => {
    if (race_infos[e.race].race_class === class_enum.G1) {
      g1_count++;
      if (e.pop === 1) {
        pop_g1_count++;
      }
    }
  });
  if (races.length >= 30) {
    titles.push({ n: '铁马娘子', c: buff_colors[1] });
    g1_count && titles.push({ n: '黄金旅程', c: buff_colors[1] });
  }
  if (
    era.get(`talent:${chara_id}:童贞`) === vp_status_enum.virgin &&
    era.get(`talent:${chara_id}:处女`) === vp_status_enum.virgin
  ) {
    titles.push({ n: '纯净之魂', c: sex_colors[1] });
    pop_g1_count >= 2 && titles.push({ n: '完美偶像', c: sex_colors[0] });
  }
  era.printMultiColumns(buffer);
  sys_add_titles(chara_id, ...titles);
  era.set(`cflag:${chara_id}:干劲`, 0);
  sys_like_chara(chara_id, 0, -(miss_count + aim_punish_count) * 100);
  sys_like_chara(302, 0, -aim_punish_count * 20);
  era.println();
  const attr_list = attr_names.map((e) => era.get(`base:${chara_id}:${e}`)),
    adapt_list = adaptability_names.map((e) =>
      era.get(`cflag:${chara_id}:${e}适性`),
    ),
    { blue, pink, white } = sys_count_juels(
      chara_id,
      attr_list,
      adapt_list,
      aim_count / aim_check.length,
    );
  era.set(`juel:${chara_id}:粉`, Math.floor(pink));
  era.set(`juel:${chara_id}:蓝`, Math.floor(blue));
  era.set(`juel:${chara_id}:白`, Math.floor(white));
  const genes = new CharaAvailableGenes(chara_id);
  genes.clear();
  adapt_list.forEach((e, i) => {
    if (e === 6) {
      genes.add(100000 + i);
    } else if (e === 7) {
      genes.add(100000 + i, 2);
    }
  });
  attr_list.forEach((e, i) => {
    if (e >= 800) {
      genes.add(200000 + i * 10);
    }
    if (e >= 1200) {
      genes.add(200001 + i * 10);
    }
    if (e >= 1500) {
      genes.add(200002 + i * 10);
    }
    if (e >= 1800) {
      genes.add(200003 + i * 10);
    }
  });
  new CharaSkills(chara_id)
    .get()
    .filter((e) => e - 100000 < 100000)
    .forEach((e) => genes.add(e + 800000));
  const gene_a = era.get(`cflag:${chara_id}:继承方1`);
  if (gene_a) {
    era.set(`cflag:${gene_a}:被继承`, 0);
    era.set(`cflag:${era.get(`cflag:${chara_id}:继承方2`)}:被继承`, 0);
  }
}

module.exports = sys_handle_palace;
