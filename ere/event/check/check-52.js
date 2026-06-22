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
const { get_abbr_number } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');
const race2fans_reward = require('#/data/race/fans-rewards');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n, lan } = require('#/i18n/selector');

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

  check_after_race(extra) {
    let reward = 0;
    switch (race_infos[extra.race].race_class) {
      case RaceInfo.class_enum.G1:
        reward = get_fans_reward(race2fans_reward[extra.race], extra.rank);
        break;
      case RaceInfo.class_enum.G2:
        reward = get_fans_reward(6000, extra.rank);
        break;
      case RaceInfo.class_enum.G3:
        reward = get_fans_reward(4000, extra.rank);
        break;
      case RaceInfo.class_enum.OP:
        reward = get_fans_reward(2500, extra.rank);
        break;
      case RaceInfo.class_enum['Pre-OP']:
        reward = get_fans_reward(1000, extra.rank);
        break;
      case RaceInfo.class_enum.Spe:
        if (extra.rank === 1) {
          reward = 1000;
        }
    }
    const edu_marks = new UraraEduMarks();
    reward *= (100 + edu_marks.fan_buff) / 100;
    edu_marks.fans += reward || 7000;
    if (reward) {
      era.print(
        i18n().kojo[this.id].notify_fan_reward(get_chara_talk(this.id), {
          ...get_abbr_number(reward),
          color: attr_change_colors.up,
          fontWeight: 'bold',
        }),
      );
    }
  }

  check_and_get_titles(aim_check) {
    const c = get_chara_color(52),
      titles = [];
    const races = RaceHistory.get(52).get();
    if (new UraraEduMarks().fans >= 250000) {
      titles.push({
        c,
        n: '105201',
      });
    }
    if (check_aim_race(races, race_enum.arim_kin, 2, 1)) {
      titles.push({
        c,
        n: '105202',
      });
      if (check_aim_race(races, race_enum.arim_kin, 1, 1)) {
        titles.push({
          c,
          n: '105203',
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
      const ebj = new EventObject(52, cb_enum.edu);
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'teach',
        event_hooks.back_school,
        ebj,
        () => EventMarks.get(52).add(event_hooks.out_shopping),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'dance',
        event_hooks.back_school,
        ebj,
        () => EventMarks.get(0).add(event_hooks.back_school),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'fans_letr',
        event_hooks.office_prepare,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'all_like',
        event_hooks.out_start,
        ebj,
        () => EventMarks.get(0).add(event_hooks.out_start),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'food',
        event_hooks.out_shopping,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'stair',
        event_hooks.back_school,
        ebj,
        () => EventMarks.get(0).add(event_hooks.school_chairman),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'mother',
        event_hooks.back_school,
        ebj,
        () => EventMarks.get(0).add(event_hooks.school_chairman),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'vs',
        event_hooks.school_atrium,
        ebj,
        () => EventMarks.get(0).add(event_hooks.school_atrium),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'lost_found',
        event_hooks.school_atrium,
        ebj,
      );
      if (era.get('cstr:52:决胜服') !== -1) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'race_clothe',
          event_hooks.office_prepare,
          ebj,
        );
      }
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'interview',
        event_hooks.school_atrium,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'challenge',
        event_hooks.back_school,
        ebj,
        () => EventMarks.get(0).add(event_hooks.back_school),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'farthest',
        event_hooks.back_school,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'park',
        event_hooks.back_school,
        ebj,
        () => EventMarks.get(52).add(event_hooks.out_shopping),
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'forget',
        event_hooks.back_school,
        ebj,
      );
      const ebj_s = new EventObject(52, cb_enum.edu, true).set_arg(edu_weeks);
      switch (edu_weeks) {
        case 34: // 9月第三周 大家最喜欢的笑容？
        case 47 + 12: // 经典年3月4周 商店街的偶像！
        case 95 + 14: // 资深年4月2周 粉丝感谢祭！
        case 95 + 15: // 资深年4月3周 后援会•暴走！
          add_event(event_hooks.out_shopping, ebj_s);
          break;
        case 47: // 12月第四周 圣诞节后 意外的年末相谈！
        case 47 + 32: // 经典年8月4周 夏合宿（经典年）结束
        case 47 + 48: // 经典年12月4周 「她」的话语、「她」的名字
        case 95 + 19: // 资深年5月3周 「深夜的聊天记录」
        case 95 + 32: // 资深年8月4周 夏合宿（资深年）结束
        case 95 + 47: // 资深年12月3周 「她们」的礼物
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 47 + 1: // 经典年1月1周 新年的抱负
        case 47 + 6: // 经典年2月2周 突袭的心意！
        case 95 + 6: // 资深年2月2周 心意突袭！II！
        case 95 + 29: // 资深年8月1周 夏合宿（资深年）开始
        case 95 + 46: // 资深年12月2周 三周循环
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 47 + 27: // 经典年7月3周 应援会！？
          edu_marks.fans1 = edu_marks.fans;
          if (edu_marks.fans1 >= 5000) {
            add_event(event_hooks.out_shopping, ebj_s);
          }
          break;
        case 47 + 29: // 经典年8月1周 夏合宿（经典年）开始/夏合宿（经典年）途中
          add_event(event_hooks.week_start, ebj_s);
          add_event(event_hooks.week_end, ebj_s.copy());
          break;
        case 47 + 43: // 经典年11月3周 「改变」&「选择」
          edu_marks.fans2 = edu_marks.fans;
          if (edu_marks.fans2 >= 9000) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 95 + 1: // 资深年1月1周 新年参拜
          edu_marks.fans3 = edu_marks.fans;
          add_event(event_hooks.out_church, ebj_s);
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
    const _lan = lan();
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
      content: i18n().kojo[this.id].achieve_track_aim_template.replace(
        '%COUNT%',
        fans.toLocaleString(),
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push({
      check: Number(fans1 >= 5000),
      color: fans1 >= 5000 ? attr_change_colors.up : attr_change_colors.down,
      current: Object(fans1).toLocaleString(_lan),
      desc: i18n().kojo[this.id].edu_aim_1,
      mark:
        fans1 >= 5000
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: Object(5000).toLocaleString(_lan),
    });
    buffer.push({
      check: Number(fans2 >= 9000),
      color: fans2 >= 9000 ? attr_change_colors.up : attr_change_colors.down,
      current: Object(fans2).toLocaleString(_lan),
      desc: i18n().kojo[this.id].edu_aim_2,
      mark:
        fans2 >= 9000
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: Object(9000).toLocaleString(_lan),
    });
    buffer.push({
      check: Number(fans3 >= 12000),
      color: fans3 >= 12000 ? attr_change_colors.up : attr_change_colors.down,
      current: Object(fans3).toLocaleString(_lan),
      desc: i18n().kojo[this.id].edu_aim_3,
      mark:
        fans3 >= 12000
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: Object(12000).toLocaleString(_lan),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.negi_sta, 2, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.febr_sta, 2, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.elm_sta, 2, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_spr, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 20));
    return buffer;
  }

  // 中山之樱
  get_personal_achieve() {
    return '105202';
  }

  get_personal_titles() {
    return ['105201', '105202', '105203'];
  }
};
