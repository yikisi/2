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
  adaptability_colors,
  attr_change_colors,
  buff_colors,
  sex_colors,
} = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { get_chara_score } = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

/** @param {number} cid */
function sys_handle_palace(cid) {
  // CFLAGNAME:47 = 殿堂
  era.set(`cflag:${cid}:47`, 1);
  // CFLAGNAME:49 = 育成次数
  era.add(`cflag:${cid}:49`, 1);
  const chara = get_chara_talk(cid);
  const miss_count = remove_edu_events(cid)[cid] || 0;
  /** @type {*[]} */
  const buffer = [
    {
      content: i18n().get_ui_edu_end(chara.get_colored_name()),
      type: 'text',
    },
  ];
  const aim_check = get_custom_check(cid)
    .check_palace_and_get_aims()
    .filter(({ content }) => !content);
  let aim_punish_count = 0,
    aim_count = 0;
  if (aim_check.length) {
    aim_check.forEach((e) => {
      aim_punish_count += 1 - e.check;
      aim_count += e.check === 1;
    });
    const aim_template = i18n().detail.edu_aim_template;
    buffer.push(
      {
        content: [
          ...i18n().get_ui_edu_aim_summary_header(chara.get_colored_name()),
          aim_count === aim_check.length
            ? {
                color: attr_change_colors.up,
                content: i18n().edu_aim_done,
                fontWeight: 'bold',
              }
            : {
                color: attr_change_colors.down,
                content: `${aim_count}/${aim_check.length}`,
              },
        ],
        type: 'text',
      },
      ...aim_check.map(({ color, current, desc, mark, require }) => ({
        config: { color, offset: 1, width: 23 },
        content: aim_template
          .replace('%DESC%', desc)
          .replace('%CURRENT%', current)
          .replace('%REQUIRE%', require)
          .replace('%MARK%', mark),
        type: 'text',
      })),
    );
  }
  if (miss_count) {
    buffer.push({
      content: i18n().get_ui_edu_ignore_aim(chara.get_colored_name(), {
        content: miss_count.toString(),
        color: buff_colors[3],
      }),
      type: 'text',
    });
  }
  const titles = get_custom_check(cid).check_and_get_titles(!aim_punish_count);
  const races = RaceHistory.get(cid).get_entries();
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
    titles.push({ n: 'e_30', c: buff_colors[1] });
    g1_count && titles.push({ n: 'e_30g', c: buff_colors[1] });
  }
  if (
    g1_count >= 10 &&
    races.findIndex((e) => e.pop !== 1 || e.rank !== 1) === -1
  ) {
    titles.push({ n: 'e_above_all', c: adaptability_colors.at(-2) });
  }
  if (races.length >= 101) {
    titles.push({ n: 'e_100', c: adaptability_colors.at(-2) });
    if (races.findIndex((e) => e.rank !== 1) === -1) {
      titles.push({ c: adaptability_colors.at(-1), n: 'e_100w', wins: 1 });
    }
  }
  const pv = era.get(`talent:${cid}:童贞`);
  const vv = era.get(`talent:${cid}:处女`);
  if (pv === vp_status_enum.virgin && vv === vp_status_enum.virgin) {
    titles.push({ n: 'e_virgin_1', c: sex_colors[1] });
    pop_g1_count >= 2 && titles.push({ n: 'e_virgin_2', c: sex_colors[0] });
  } else if (pv === vp_status_enum.virgin && vv === vp_status_enum.reborn) {
    titles.push({ n: 'e_virgin_r1', c: sex_colors[1] });
    pop_g1_count >= 2 && titles.push({ n: 'e_virgin_r2', c: sex_colors[0] });
  }
  era.printMultiColumns(buffer);
  sys_add_titles(cid, ...titles);
  era.set(`cflag:${cid}:干劲`, 0);
  sys_like_chara(cid, 0, -(miss_count + aim_punish_count) * 100);
  sys_like_chara(302, 0, -aim_punish_count * 20);
  era.println();
  // BASENAME:5 - 9 = 速度 - 智力
  const attr_list = new Array(5)
    .fill(0)
    .map((_, i) => era.get(`base:${cid}:${5 + i}`));
  const adapt_list = new Array(10)
    .fill(0)
    // CFLAGNAME:30 - 39 = 草地适性 - 追马适性
    .map((_, i) => era.get(`cflag:${cid}:${30 + i}`));
  const { blue, pink, white } = sys_count_juels(
    cid,
    1,
    attr_list,
    adapt_list,
    aim_count / aim_check.length,
  );
  const score_times = Math.max(
    2 ** ((get_chara_score(cid, true) - 20000) / 20000),
    1,
  );
  era.set(`juel:${cid}:粉`, Math.floor(Math.min(pink * score_times, 200)));
  era.set(`juel:${cid}:蓝`, Math.floor(Math.min(blue * score_times, 268)));
  era.set(`juel:${cid}:白`, Math.floor(Math.min(white * score_times, 256)));
  const genes = new CharaAvailableGenes(cid);
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
  CharaSkills.get(cid)
    .get()
    .filter((e) => e < 200000)
    .forEach((e) => genes.add(e + 800000));
  const gene_a = era.get(`cflag:${cid}:继承方1`);
  if (gene_a > 0) {
    era.set(`cflag:${gene_a}:被继承`, 0);
    era.set(`cflag:${era.get(`cflag:${cid}:继承方2`)}:被继承`, 0);
  }
  const tid = era.get(`cflag:${cid}:照看`);
  if (tid > 0) {
    era.set(`cflag:${tid}:照看`, 0);
    era.set(`cflag:${cid}:照看`, 0);
  }
  if (get_chara_score(cid).charAt(0) >= 'S') {
    era.set(
      'flag:初见重复育成',
      Number(era.get('flag:初见重复育成') || !era.get('flag:初见重复育成')),
    );
  }
  era.set(`cflag:${cid}:自主训练`, 0);
  const inmon = CharaInmon.get(cid);
  [plugin_enum.sex_1, plugin_enum.sex_2].forEach((p) => {
    if (inmon.on(p)) {
      inmon.set(p, 0);
    }
  });
}

module.exports = sys_handle_palace;
