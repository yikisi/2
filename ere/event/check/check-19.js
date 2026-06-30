const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { attr_change_colors } = require('#/data/color-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const AgEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-19');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const AgLifeMarks = require('#/data/event/life-event-marks/life-event-marks-19');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 0b11;
aim_races[get_aim_race_index(race_enum.hyac_sta, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.nhk_cup, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.japa_dir, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.mile_cha, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 0b11;
aim_races[get_aim_race_index(race_enum.febr_sta, 2)] = -4;
aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = -4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = -4;
aim_races[get_aim_race_index(race_enum.yasu_kin, 1)] = -4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const edu_marks = new AgEduMarks();
    if (
      extra_flag.edu_weeks >= 96 &&
      extra_flag.edu_weeks <= 95 + 24 &&
      extra_flag.rank <= 3 &&
      race_infos[extra_flag.race].race_class === class_enum.G1 &&
      edu_marks.yuusha_fight < 3
    ) {
      edu_marks.yuusha_fight++;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(19).get(),
      titles = [];
    if (
      check_aim_race(races, race_enum.japa_dir, 1, 1) &&
      check_aim_race(races, race_enum.febr_sta, 2, 1) &&
      (check_aim_race(races, race_enum.tenn_sho, 1, 1) ||
        check_aim_race(races, race_enum.tenn_sho, 2, 1)) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1) &&
      (check_aim_race(races, race_enum.mile_cha, 1, 1) ||
        check_aim_race(races, race_enum.mile_cha, 2, 1)) &&
      (check_aim_race(races, race_enum.yasu_kin, 1, 1) ||
        check_aim_race(races, race_enum.yasu_kin, 2, 1))
    ) {
      titles.push({
        c: get_chara_color(19),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(19, 1);
    }
    return titles;
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:19:育成回合计时');
    if (era.get('cflag:19:招募状态') === recruit_flags.yes) {
      const life_marks = new AgLifeMarks();
      const love = era.get('love:19');
      const relation = era.get('relation:19:0');
      if (!life_marks.shine && (relation > 75 || love >= 10)) {
        life_marks.shine = 1;
        add_event(
          event_hooks.week_start,
          new EventObject(19, cb_enum.love).set_arg('shine'),
        );
      } else if (!life_marks.univ && (relation > 225 || love >= 25)) {
        life_marks.univ = 1;
        add_event(
          event_hooks.week_start,
          new EventObject(19, cb_enum.love).set_arg('univ'),
        );
      } else if (!life_marks.oshi && (relation > 375 || love >= 40)) {
        life_marks.oshi = 1;
        add_event(
          event_hooks.week_start,
          new EventObject(19, cb_enum.love).set_arg('oshi'),
        );
      }
    }
    if (edu_weeks < 3 * 48) {
      const edu_marks = new AgEduMarks();
      const ebj_s = new EventObject(19, cb_enum.edu, true).set_arg(edu_weeks);
      let temp;
      switch (edu_weeks) {
        case 42: // 观战英里冠军赛
        case 47 + 32: // 合宿结束
        case 47 + 37: // 一流的条件
        case 95 + 17: // 观战NHK英里杯
        case 95 + 32: // 资深年夏季合宿结束
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 47 + 1: // 新年的抱负
        case 95 + 6: // 情人节
        case 95 + 14: // 粉丝感谢祭
        case 95 + 29: // 资深年夏季合宿
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 95 + 48: // 圣诞节
          add_event(event_hooks.week_start, ebj_s);
          temp = RaceHistory.get(19).get();
          if (
            check_aim_race(temp, race_enum.hyac_sta, 1) &&
            (!check_aim_race(temp, race_enum.hyac_sta, 1, 1) ||
              !check_aim_race(temp, race_enum.nhk_cup, 1, 1) ||
              !check_aim_race(temp, race_enum.japa_dir, 1, 1) ||
              !check_aim_race(temp, race_enum.mile_cha, 1, 1) ||
              !check_aim_race(temp, race_enum.tenn_sho, 2, 1))
          ) {
            add_event(event_hooks.week_end, ebj_s);
          }
          break;
        case 47 + 24: // 观战宝冢纪念
          if (sys_reg_race(19).curr.race !== race_enum.takz_kin) {
            add_event(event_hooks.week_end, ebj_s);
          }
          break;
        case 47 + 29: // 夏季合宿 + 夏合宿途中
          add_event(event_hooks.week_start, ebj_s);
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 95 + 1: // 初诣
          add_event(event_hooks.out_church, ebj_s);
          break;
        case 95 + 23: // 勇者挑战
          if (edu_marks.yuusha_fight === 3) {
            add_event(event_hooks.week_end, ebj_s);
          }
          break;
      }
      check_and_register_aim_race(19, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(19, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  check_palace_and_get_aims() {
    const my_marks = new MyEduMarks();
    if (my_marks.nice_weekend === 0) {
      my_marks.nice_weekend = get_random_value(2, 4) + 1;
    }
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(19).get(),
      { yuusha_fight } = new AgEduMarks();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hyac_sta, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.nhk_cup, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_dir, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.mile_cha, 1, 1));
    buffer.push({
      check: Math.min(yuusha_fight, 3) - 2,
      color:
        yuusha_fight >= 3 ? attr_change_colors.up : attr_change_colors.down,
      current: yuusha_fight.toString(),
      desc: i18n()
        .detail.edu_aim_desc_template.replace('%EDUTIME%', di18n.n_edu[2])
        .replace('%RACE%', i18n().kojo[this.id].aim_desc),
      g1: true,
      mark:
        yuusha_fight >= 3
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '3'),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    return buffer;
  }

  is_aim_race(race, edu_weeks, rank) {
    switch (race) {
      case race_enum.mile_cha:
        if (
          era.get('cflag:19:育成回合计时') >= 96 &&
          !check_aim_race(RaceHistory.get(19).get(), race, 1, 1)
        ) {
          return -4;
        }
        break;
      case race_enum.yasu_kin:
        if (!check_aim_race(RaceHistory.get(19).get(), race, 1, 1)) {
          return -4;
        } else {
          return 0;
        }
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }
};
