const era = require('#/era-electron');

const sys_call_check = require('#/system/script/sys-call-check');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { remove_edu_events } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { distinct_list } = require('#/utils/list-utils');

const {
  buff_colors,
  attr_change_colors,
  sex_colors,
} = require('#/data/color-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const check_stages = require('#/data/event/check-stages');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const edu_weeks_kiku_sho = 48 + race_infos[race_enum.kiku_sho].date,
  edu_weeks_shuk_sho = 48 + race_infos[race_enum.shuk_sho].date;

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
  const aim_check = sys_call_check(chara_id, check_stages.palace_check);
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
  const titles = era.get(`cstr:${chara_id}:称号`),
    title_count = titles.length;
  sys_call_check(chara_id, check_stages.title_check, {
    aim_check: !aim_punish_count,
    titles,
  });
  /** @type {Record<string,{pop:number,race:number,rank:number}>} */
  const races = era.get(`cflag:${chara_id}:育成成绩`);
  let invincible_1 = true,
    invincible_2 = true,
    cup_1 = 0,
    cup_2 = 0,
    cup_3 = 0,
    g1_count = 0,
    pop_g1_count = 0;
  Object.entries(races).forEach((e) => {
    const edu_weeks = Number(e[0]),
      { race, rank } = e[1];
    if (rank === 1) {
      switch (race) {
        case race_enum.sats_sho:
          cup_1++;
          break;
        case race_enum.oka_sho:
          cup_1 += 2;
          break;
        case race_enum.toky_yus:
          cup_2++;
          break;
        case race_enum.yush_him:
          cup_2 += 2;
          break;
        case race_enum.kiku_sho:
          cup_3++;
          break;
        case race_enum.shuk_sho:
          cup_3 += 2;
          break;
        default:
          if (race_infos[race].race_class === class_enum.G1) {
            g1_count++;
            if (e[1].pop === 1) {
              pop_g1_count++;
            }
          }
      }
    } else {
      if (edu_weeks < edu_weeks_kiku_sho) {
        invincible_1 = false;
      }
      if (edu_weeks < edu_weeks_shuk_sho) {
        invincible_2 = false;
      }
    }
  });
  if (cup_1 & 1 && cup_2 & 1 && cup_3 & 1) {
    titles.push({ n: '三冠', c: buff_colors[1] });
    invincible_1 && titles.push({ n: '无败三冠', c: buff_colors[1] });
  }
  if (cup_1 & 2 && cup_2 & 2 && cup_3 & 2) {
    titles.push({ n: '三宝冠', c: buff_colors[1] });
    invincible_2 && titles.push({ n: '无败三宝冠', c: buff_colors[1] });
  }
  if (cup_1 === cup_2 && cup_2 === cup_3 && cup_3 === 3) {
    titles.push({ n: '极限六冠', c: buff_colors[1] });
    if (invincible_1 && invincible_2) {
      titles.push({ n: '无败六冠', c: buff_colors[1] });
    }
  }
  if (cup_1 && cup_2 && cup_3 && (cup_1 !== cup_2 || cup_2 !== cup_3)) {
    titles.push({ n: '变则三冠', c: buff_colors[1] });
    if ((cup_3 & 1 && invincible_1) || (cup_3 & 2 && invincible_2)) {
      titles.push({ n: '无败变则三冠', c: buff_colors[1] });
    }
  }
  if (Object.keys(races).length >= 30) {
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
  if (
    era.set(
      `cstr:${chara_id}:称号`,
      distinct_list(titles, (e) => e.n),
    ).length > title_count
  ) {
    buffer.push({
      content: [chara.get_colored_name(), ' 获得了新称号！'],
      type: 'text',
    });
  }
  era.printMultiColumns(buffer);
  era.set(`cflag:${chara_id}:干劲`, 0);
  sys_like_chara(chara_id, 0, -(miss_count + aim_punish_count) * 100);
  era.println();
}

module.exports = sys_handle_palace;
