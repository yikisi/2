const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_color } = require('#/data/chara-colors');
const MayaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-24');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const MayaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-24');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 3;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 3;
aim_races[get_aim_race_index(race_enum.hans_dai, 2)] = 3;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 3;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 3;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const event_marks = new MayaEduMarks();
    if (
      extra_flag.rank === 1 &&
      race_infos[extra_flag.race].race_class === class_enum.G1
    ) {
      event_marks.st_check |= 1 << extra_flag.st;
    }
  }

  check_and_get_titles(aim_check) {
    const event_marks = new MayaEduMarks(),
      titles = [];
    if (event_marks.st_check === 0b1111) {
      titles.push({
        c: get_chara_color(24),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(24, 1);
    }
    return titles;
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:24:育成回合计时'),
      life_marks = new MayaLifeMarks();
    if (
      era.get('cflag:24:招募状态') === recruit_flags.yes &&
      era.get('love:24') >= 25 &&
      !life_marks._24
    ) {
      life_marks._24 = 1;
      add_event(
        event_hooks.week_end,
        new EventObject(24, cb_enum.love).set_arg(24),
      );
    }
    if (edu_weeks < 3 * 48) {
      const edu_marks = new MayaEduMarks();
      const ebj = new EventObject(24, cb_enum.edu);
      const ebj_s = new EventObject(24, cb_enum.edu, true).set_arg(edu_weeks);
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'adv_game',
        event_hooks.school_atrium,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'star_wish',
        event_hooks.school_atrium,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'sweet_present',
        event_hooks.school_atrium,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'dokidoki_live',
        event_hooks.back_school,
        ebj,
      );
      if (edu_marks.dokidoki_live === 2) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'excited_live',
          event_hooks.back_school,
          ebj,
        );
      }
      if (edu_marks.excited_live === 2) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'kirakira_kessin',
          event_hooks.out_start,
          ebj,
        );
      }
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'taisecu_hito',
        event_hooks.back_school,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'race_lesson',
        event_hooks.back_school,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'model_secret',
        event_hooks.office_study,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'maya_reading',
        event_hooks.office_study,
        ebj,
      );
      if (
        race_infos[sys_reg_race(24).curr.race]?.race_class === class_enum.G1
      ) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'maya_takeoff',
          event_hooks.office_study,
          ebj,
        );
      }

      if (
        edu_weeks ===
        RaceHistory.get(24)
          .get_entries()
          .findLast((e) => e.race === race_enum.begin_race)?.weeks +
          4
      ) {
        add_event(event_hooks.week_start, ebj_s.copy().set_arg('date'));
      }

      switch (edu_weeks) {
        case 16: // 我想闪闪发亮！
        case 47 + 1: // 新年的抱负
        case 47 + 3: // 锁定目标
        case 47 + 29: // 夏季合宿（经典年）
        case 47 + 30: // 代码：燃烧！
        case 47 + 31: // 祭典
        case 95 + 4: // 青春的闪耀
        case 95 + 6: // 情人节
        case 95 + 14: // 粉丝感谢祭
        case 95 + 20: // 迈向夕阳
        case 95 + 29: // 夏季合宿（资深年）
        case 95 + 48: // 圣诞节
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 47 + 32: // 夏季合宿（经典年）结束
        case 95 + 32: // 夏季合宿（资深年）结束
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 95 + 1: // 新年参拜
          add_event(event_hooks.out_church, ebj_s);
          break;
        case 95 + 2: // 抽奖试手气
          add_event(event_hooks.out_start, ebj_s);
      }
      check_and_register_aim_race(24, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(24, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(24).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_dai, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }
};
