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
const { adaptability_names, attr_names } = require('#/data/train-const');

/** @param {number} cid */
function sys_handle_palace(cid) {
  era.set(`cflag:${cid}:殿堂`, 1);
  era.add(`cflag:${cid}:育成次数`, 1);
  const chara = get_chara_talk(cid);
  const miss_count = remove_edu_events(cid)[cid] || 0;
  /** @type {*[]} */
  const buffer = [
    {
      content: ['【', chara.get_colored_name(), ' 的育成结束了】'],
      type: 'text',
    },
  ];
  const aim_check = get_custom_check(cid).check_palace_and_get_aims();
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
    titles.push({ n: '铁马娘子', c: buff_colors[1] });
    g1_count && titles.push({ n: '黄金旅程', c: buff_colors[1] });
  }
  if (
    g1_count >= 10 &&
    races.findIndex((e) => e.pop !== 1 || e.rank !== 1) === -1
  ) {
    titles.push({ n: '傲视一切', c: adaptability_colors.at(-2) });
  }
  if (races.length >= 101) {
    titles.push({ n: '苛己执着', c: adaptability_colors.at(-2) });
    if (races.findIndex((e) => e.rank !== 1) === -1) {
      titles.push({ n: '百战百胜', c: adaptability_colors.at(-1) });
    }
  }
  if (
    era.get(`talent:${cid}:童贞`) === vp_status_enum.virgin &&
    era.get(`talent:${cid}:处女`) === vp_status_enum.virgin
  ) {
    titles.push({ n: '纯净之魂', c: sex_colors[1] });
    pop_g1_count >= 2 && titles.push({ n: '完美偶像', c: sex_colors[0] });
  }
  era.printMultiColumns(buffer);
  sys_add_titles(cid, ...titles);
  era.set(`cflag:${cid}:干劲`, 0);
  sys_like_chara(cid, 0, -(miss_count + aim_punish_count) * 100);
  sys_like_chara(302, 0, -aim_punish_count * 20);
  era.println();
  const attr_list = attr_names.map((e) => era.get(`base:${cid}:${e}`)),
    adapt_list = adaptability_names.map((e) =>
      era.get(`cflag:${cid}:${e}适性`),
    ),
    { blue, pink, white } = sys_count_juels(
      cid,
      1,
      attr_list,
      adapt_list,
      aim_count / aim_check.length,
    ),
    score_times = Math.max(
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
