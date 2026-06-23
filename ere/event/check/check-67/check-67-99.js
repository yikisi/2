const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const DaiyaEduMarks99 = require('#/data/event/edu-event-marks/edu-event-marks-67-99');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 3;

aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 3;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 3;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 3;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 3;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = -1;
aim_races[get_aim_race_index(race_enum.kyot_dai, 2)] = 3;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 3;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

module.exports = class extends CustomizedCheck {
  check_after_race(extra) {
    const edu_marks = new DaiyaEduMarks99();
    if (
      extra.race === race_enum.begin_race &&
      era.get('cflag:67:育成回合计时') < 48 &&
      extra.rank === 1
    ) {
      add_event(
        event_hooks.week_start,
        new EventObject(67, cb_enum.edu).set_arg('after_begin'),
      );
    } else if (race_infos[extra.race].race_class === class_enum.G1) {
      if (!edu_marks.run_g1) {
        edu_marks.run_g1 = 1;
      }
      if (!edu_marks.win_g1 && extra.rank === 1) {
        edu_marks.win_g1 = 1;
        add_event(
          event_hooks.out_start,
          new EventObject(67, cb_enum.edu).set_arg('win_g1'),
        );
      }
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(67).get(),
      titles = [];
    if (
      (check_aim_race(races, race_enum.prix_lat, 1, 1) ||
        check_aim_race(races, race_enum.prix_lat, 2, 1)) &&
      check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      check_aim_race(races, race_enum.japa_cup, 2, 1) &&
      check_aim_race(races, race_enum.arim_kin, 1, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1)
    ) {
      titles.push({
        c: get_chara_color(67),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(67, 1);
    }
    return titles;
  }

  check_next_week() {
    const ebj = new EventObject(67, cb_enum.edu);
    const edu_weeks = era.get('cflag:67:育成回合计时');
    if (edu_weeks < 3 * 48) {
      const edu_marks = new DaiyaEduMarks99();
      const ebj_s = new EventObject(67, cb_enum.edu, true);
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'sos',
        event_hooks.school_atrium,
        ebj,
      );
      if (era.get('cflag:67:性别') !== 1) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'sweepy5',
          event_hooks.school_atrium,
          ebj,
        );
      }
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'high_dream',
        event_hooks.school_atrium,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'chase',
        event_hooks.school_atrium,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'diamond_cotton',
        event_hooks.out_start,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'high_place',
        event_hooks.out_start,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'fresh',
        event_hooks.out_start,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'heartbeat_excite',
        event_hooks.out_start,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'dance_practice',
        event_hooks.office_study,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'banned_coffee',
        event_hooks.office_cook,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'satono_uma',
        event_hooks.out_start,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'street_adv',
        event_hooks.back_school,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'shopping',
        event_hooks.back_school,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'in_colorful',
        event_hooks.back_school,
        ebj,
      );

      switch (edu_weeks) {
        case 39: // 现在还太遥远
        case 47 + 1: // 新年抱负
        case 47 + 29: // 夏季集训（经典年）开始！
        case 47 + 31: // 夏季集训（经典年）途中
        case 47 + 34: // 困住我的东西
        case 95 + 6: // 情人节
        case 95 + 14: // 粉丝感谢祭
        case 95 + 29: // 夏季集训（资深年）开始！
        case 95 + 33: // 遥远的前方，持续追逐
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 47 + 32: // 夏季集训（经典年）结束
        case 95 + 24: // 那是唯一的光芒：仅限未出战资深年宝冢纪念
        case 95 + 32: // 夏季集训（资深年）结束
        case 95 + 44: // 挑战、开拓：仅限未出战资深年日本杯
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 95 + 1: // 资深年新年参拜
          add_event(event_hooks.out_start, ebj_s);
          break;
        case 95 + 2: // 抽奖试手气！
          add_event(event_hooks.out_shopping, ebj_s);
          break;
        case 95 + 48:
          // 圣诞节
          add_event(event_hooks.week_start, ebj_s);
          // 跟着憧憬一起
          add_event(event_hooks.week_end, ebj_s);
      }
      check_and_register_aim_race(67, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, ebj.set_arg('palace'));
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(67).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kyot_dai, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
