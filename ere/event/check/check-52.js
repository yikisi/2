const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const race2fans_reward = [];
race2fans_reward[race_enum.oka_sho] = 10500;
race2fans_reward[race_enum.sats_sho] = 11000;
race2fans_reward[race_enum.toky_yus] = 20000;
race2fans_reward[race_enum.yush_him] = 11000;
race2fans_reward[race_enum.nhk_cup] = 10500;
race2fans_reward[race_enum.takz_kin] = 15000;
race2fans_reward[race_enum.yasu_kin] = 13000;
race2fans_reward[race_enum.japa_dir] = 6500;
race2fans_reward[race_enum.sprt_sta] = 13000;
race2fans_reward[race_enum.shuk_sho] = 10000;
race2fans_reward[race_enum.kiku_sho] = 12000;
race2fans_reward[race_enum.tenn_sho] = 15000;
race2fans_reward[race_enum.mile_cha] = 11000;
race2fans_reward[race_enum.japa_cup] = 30000;
race2fans_reward[race_enum.eliz_cup] = 10500;
race2fans_reward[race_enum.jbc_cls] = 8000;
race2fans_reward[race_enum.jbc_spr] = 7000;
race2fans_reward[race_enum.arim_kin] = 30000;
race2fans_reward[race_enum.toky_dai] = 8000;
race2fans_reward[race_enum.cham_cup] = 10000;
race2fans_reward[race_enum.febr_sta] = 10000;
race2fans_reward[race_enum.kawa_kin] = 7000;
race2fans_reward[race_enum.takm_kin] = 13000;
race2fans_reward[race_enum.sank_hai] = 13500;
race2fans_reward[race_enum.tenn_spr] = 15000;
race2fans_reward[race_enum.vict_mile] = 10500;
race2fans_reward[race_enum.kash_kin] = 8000;
race2fans_reward[race_enum.teio_sho] = 7000;
race2fans_reward[race_enum.hope_sta] = 7000;
race2fans_reward[race_enum.hans_fil] = 6500;
race2fans_reward[race_enum.asah_sta] = 7000;
race2fans_reward[race_enum.toky_der] = 7000;
race2fans_reward[race_enum.hane_hai] = 7000;
race2fans_reward[race_enum.jbc_lad] = 6100;
race2fans_reward[race_enum.zeni_you] = 6200;
race2fans_reward[race_enum.mile_nbh] = 6000;

race2fans_reward[race_enum.prix_dia] = 28000;
race2fans_reward[race_enum.prix_lat] = 32000;
race2fans_reward[race_enum.chn_frt] = 30000;
race2fans_reward[race_enum.hk_spr] = 20000;
race2fans_reward[race_enum.hk_mil] = 25000;
race2fans_reward[race_enum.hk_cup] = 30000;
race2fans_reward[race_enum.hk_vas] = 25000;
race2fans_reward[race_enum.kent_der] = 31000;
race2fans_reward[race_enum.prea_sta] = 31000;
race2fans_reward[race_enum.belm_sta] = 31000;
race2fans_reward[race_enum.usa_oks] = 20000;

race2fans_reward[race_enum.duba_cup] = 27000;
race2fans_reward[race_enum.duba_sha] = 27000;
race2fans_reward[race_enum.duba_cls] = 27000;
race2fans_reward[race_enum.duba_tur] = 27000;
race2fans_reward[race_enum.alqu_spr] = 27000;

Object.values(race_enum)
  .filter(
    (e) =>
      race_infos[e].race_class === RaceInfo.class_enum.G1 &&
      !race2fans_reward[e],
  )
  .map((e) => console.log(`[check-52.js] miss! ${race_infos[e].name_zh}`));

/**
 * @param {number} reward
 * @param {number} rank
 * @returns {number}
 */
function get_fans_reward(reward, rank) {
  if (rank === 1) {
    return reward;
  } else if (rank <= 5) {
    return (reward * (6 - rank)) / 10;
  } else if (rank <= 10) {
    return 500;
  } else {
    return 100;
  }
}

const aim_races = {};
aim_races[race_enum.begin_race] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = -1;
aim_races[get_aim_race_index(race_enum.negi_sta, 2)] = 3;
aim_races[get_aim_race_index(race_enum.febr_sta, 2)] = 3;
aim_races[get_aim_race_index(race_enum.elm_sta, 2)] = 3;
aim_races[get_aim_race_index(race_enum.jbc_spr, 2)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 1;

module.exports = class extends CustomizedCheck {
  check_after_punish(level) {
    if (level === 1) {
      add_event(
        event_hooks.week_start,
        new EventObject(52, cb_enum.daily).set_arg({
          punish: level,
        }),
      );
    }
  }

  check_after_race(extra_flag) {
    let reward = 0;
    switch (race_infos[extra_flag.race].race_class) {
      case RaceInfo.class_enum.G1:
        reward = get_fans_reward(
          race2fans_reward[extra_flag.race],
          extra_flag.rank,
        );
        break;
      case RaceInfo.class_enum.G2:
        reward = get_fans_reward(6000, extra_flag.rank);
        break;
      case RaceInfo.class_enum.G3:
        reward = get_fans_reward(4000, extra_flag.rank);
        break;
      case RaceInfo.class_enum.OP:
        reward = get_fans_reward(2500, extra_flag.rank);
        break;
      case RaceInfo.class_enum['Pre-OP']:
        reward = get_fans_reward(1000, extra_flag.rank);
        break;
      case RaceInfo.class_enum.Spe:
        if (extra_flag.rank === 1) {
          reward = 1000;
        }
    }
    const edu_marks = new UraraEduMarks();
    reward *= (100 + edu_marks.fan_buff) / 100;
    edu_marks.fans += reward || 7000;
    if (reward) {
      era.print([
        get_chara_talk(52).get_colored_name(),
        ' 的粉丝数增长了 ',
        {
          color: attr_change_colors.up,
          content: reward.toLocaleString(),
          fontWeight: 'bold',
        },
        '！',
      ]);
    }
  }

  check_and_get_titles(aim_check) {
    const c = get_chara_color(52),
      titles = [];
    const races = RaceHistory.get(52).get();
    if (new UraraEduMarks().fans >= 250000) {
      titles.push({
        c,
        n: '乌拉拉加油',
      });
    }
    if (check_aim_race(races, race_enum.arim_kin, 2, 1)) {
      titles.push({
        c,
        n: '中山之樱',
      });
      if (check_aim_race(races, race_enum.arim_kin, 1, 1)) {
        titles.push({
          c,
          n: '跨越世界',
        });
      }
      aim_check && sys_personal_achievement.set(52, 1);
    }
    return titles;
  }

  check_love_events() {
    const love = era.get('love:52');
    if (love === 99) {
      add_event(
        event_hooks.week_start,
        new EventObject(52, cb_enum.love).set_arg([love]),
      );
    } else {
      add_event(
        event_hooks.week_end,
        new EventObject(52, cb_enum.love).set_arg([love]),
      );
    }
  }

  check_next_week() {
    if (!era.get('talent:52:泌乳') && era.get('talent:52:乳房尺寸') > 0) {
      era.set('talent:52:泌乳', 3);
    }
    const edu_marks = new UraraEduMarks(),
      edu_weeks = era.get('cflag:52:育成回合计时');
    if (edu_weeks < 3 * 48) {
      const event_obj = new EventObject(52, cb_enum.edu);
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'teach',
        event_hooks.back_school,
        event_obj,
        () => EventMarks.get(52).add(event_hooks.out_shopping),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'dance',
        event_hooks.back_school,
        event_obj,
        () => EventMarks.get(0).add(event_hooks.back_school),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'fans_letr',
        event_hooks.office_prepare,
        event_obj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'all_like',
        event_hooks.out_start,
        event_obj,
        () => EventMarks.get(0).add(event_hooks.out_start),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'food',
        event_hooks.out_shopping,
        event_obj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'stair',
        event_hooks.back_school,
        event_obj,
        () => EventMarks.get(0).add(event_hooks.school_chairman),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'mother',
        event_hooks.back_school,
        event_obj,
        () => EventMarks.get(0).add(event_hooks.school_chairman),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'vs',
        event_hooks.school_atrium,
        event_obj,
        () => EventMarks.get(0).add(event_hooks.school_atrium),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'lost_found',
        event_hooks.school_atrium,
        event_obj,
      );
      if (era.get('cstr:52:决胜服') !== -1) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'race_clothe',
          event_hooks.office_prepare,
          event_obj,
        );
      }
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'interview',
        event_hooks.school_atrium,
        event_obj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'challenge',
        event_hooks.back_school,
        event_obj,
        () => EventMarks.get(0).add(event_hooks.back_school),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'farthest',
        event_hooks.back_school,
        event_obj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'park',
        event_hooks.back_school,
        event_obj,
        () => EventMarks.get(52).add(event_hooks.out_shopping),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'forget',
        event_hooks.back_school,
        event_obj,
      );
      const event_object_special = new EventObject(
        52,
        cb_enum.edu,
        true,
      ).set_arg(edu_weeks);
      switch (edu_weeks) {
        case 34: // 9月第三周 大家最喜欢的笑容？
        case 47 + 12: // 经典年3月4周 商店街的偶像！
        case 95 + 14: // 资深年4月2周 粉丝感谢祭！
        case 95 + 15: // 资深年4月3周 后援会•暴走！
          add_event(event_hooks.out_shopping, event_object_special);
          break;
        case 47: // 12月第四周 圣诞节后 意外的年末相谈！
        case 47 + 32: // 经典年8月4周 夏合宿（经典年）结束
        case 47 + 48: // 经典年12月4周 「她」的话语、「她」的名字
        case 95 + 19: // 资深年5月3周 「深夜的聊天室记录」
        case 95 + 32: // 资深年8月4周 夏合宿（资深年）结束
        case 95 + 47: // 资深年12月3周 「她们」的礼物
          add_event(event_hooks.week_end, event_object_special);
          break;
        case 47 + 1: // 经典年1月1周 新年的抱负
        case 47 + 6: // 经典年2月2周 突袭的心意！
        case 95 + 6: // 资深年2月2周 心意突袭！II！
        case 95 + 29: // 资深年8月1周 夏合宿（资深年）开始
        case 95 + 46: // 资深年12月2周 三周循环
          add_event(event_hooks.week_start, event_object_special);
          break;
        case 47 + 27: // 经典年7月3周 应援会！？
          edu_marks.fans1 = edu_marks.fans;
          if (edu_marks.fans1 >= 5000) {
            add_event(event_hooks.out_shopping, event_object_special);
          }
          break;
        case 47 + 29: // 经典年8月1周 夏合宿（经典年）开始/夏合宿（经典年）途中
          add_event(event_hooks.week_start, event_object_special);
          add_event(event_hooks.week_end, event_object_special.copy());
          break;
        case 47 + 43: // 经典年11月3周 「改变」&「选择」
          edu_marks.fans2 = edu_marks.fans;
          if (edu_marks.fans2 >= 9000) {
            add_event(event_hooks.week_start, event_object_special);
          }
          break;
        case 95 + 1: // 资深年1月1周 新年参拜
          edu_marks.fans3 = edu_marks.fans;
          add_event(event_hooks.out_church, event_object_special);
          break;
        case 95 + 42:
          edu_marks.loop = 2;
      }
      check_and_register_aim_race(52, aim_races);
    } else if (edu_weeks === 143 + 1) {
      if (
        RaceHistory.get(52).get_result(95 + 48)?.race === race_enum.arim_kin
      ) {
        add_event(
          event_hooks.week_start,
          new EventObject(52, cb_enum.edu).set_arg(143 + 1),
        );
      }
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(52, cb_enum.edu).set_arg('palace'),
      );
    } else if (edu_marks.ticket === 1) {
      edu_marks.ticket++;
      if (era.get('cflag:52:性别') - 1) {
        add_event(
          event_hooks.week_start,
          new EventObject(52, cb_enum.edu).set_arg('ticket'),
        );
      }
    }
    if (era.get('cflag:52:招募状态') === recruit_flags.yes) {
      const life_marks = new UraraLifeMarks(),
        love = era.get('love:52');
      if (!life_marks.fuck_buddy && love >= 50) {
        add_event(
          event_hooks.week_start,
          new EventObject(52, cb_enum.love).set_arg(50),
        );
      }
      if (!life_marks.girl_friend && love >= 75) {
        add_event(
          event_hooks.week_start,
          new EventObject(52, cb_enum.love).set_arg(75),
        );
      }
      if (
        !life_marks.infidelity &&
        ((love >= 90 &&
          (era.get('cflag:30:招募状态') === recruit_flags.yes &&
            era.get('love:30')) >= 75) ||
          (era.get('cflag:61:招募状态') === recruit_flags.yes &&
            era.get('love:61')) >= 75)
      ) {
        add_event(
          event_hooks.week_start,
          new EventObject(52, cb_enum.love).set_arg(90),
        );
      }
      if (
        !life_marks.want_you &&
        era.get('relation:52:0') < era.get('love:52') * 6
      ) {
        add_event(
          event_hooks.week_start,
          new EventObject(52, cb_enum.love).set_arg(101),
        );
      }
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      edu_weeks = era.get('cflag:52:育成回合计时'),
      races = RaceHistory.get(52).get();
    let { fans, fans1, fans2, fans3 } = new UraraEduMarks();
    if (edu_weeks < 47 + 27) {
      fans1 = fans;
    }
    if (edu_weeks < 47 + 43) {
      fans2 = fans;
    }
    if (edu_weeks < 96) {
      fans3 = fans;
    }
    buffer.push({
      check: 1,
      color: undefined,
      content: `粉丝数：${fans.toLocaleString()}`,
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push({
      check: Number(fans1 >= 5000),
      color: fans1 >= 5000 ? attr_change_colors.up : attr_change_colors.down,
      content: `经典年7月第3周前 粉丝数 ${fans1.toLocaleString()}/5,000 ${
        fans1 >= 5000 ? '✔' : '✘'
      }`,
    });
    buffer.push({
      check: Number(fans2 >= 9000),
      color: fans2 >= 9000 ? attr_change_colors.up : attr_change_colors.down,
      content: `经典年11月第3周前 粉丝数 ${fans2.toLocaleString()}/9,000 ${
        fans2 >= 9000 ? '✔' : '✘'
      }`,
    });
    buffer.push({
      check: Number(fans3 >= 12000),
      color: fans3 >= 12000 ? attr_change_colors.up : attr_change_colors.down,
      content: `资深年1月第1周前 粉丝数 ${fans3.toLocaleString()}/12,000 ${
        fans3 >= 12000 ? '✔' : '✘'
      }`,
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.negi_sta, 2, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.febr_sta, 2, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.elm_sta, 2, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_spr, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 16));
    return buffer;
  }

  get_personal_titles() {
    return ['乌拉拉加油', '中山之樱', '跨越世界'];
  }
};
