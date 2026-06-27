const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const AcuteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-100');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};

aim_races[race_enum.begin_race] = 3;
aim_races[get_aim_race_index(race_enum.japa_dir, 1)] = 4;
aim_races[get_aim_race_index(race_enum.siri_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.toky_dai, 1)] = 4;
aim_races[get_aim_race_index(race_enum.kawa_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.kash_kin, 2)] = 4;
aim_races[get_aim_race_index(race_enum.teio_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.jbc_cls, 2)] = 4;
aim_races[get_aim_race_index(race_enum.cham_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.toky_dai, 2)] = 4;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    if (extra_flag.aim_race) {
      new AcuteEduMarks().ending += 2 * (extra_flag.rank === 1) - 1;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(100).get(),
      titles = [];
    if (
      check_aim_race(races, race_enum.toky_dai, 1, 1) &&
      check_aim_race(races, race_enum.kash_kin, 2, 1) &&
      check_aim_race(races, race_enum.teio_sho, 2, 1) &&
      check_aim_race(races, race_enum.jbc_cls, 2, 1) &&
      era.get('base:100:根性') >= 1200
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(100, 1);
    }
    return titles;
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:100:育成回合计时'),
      life_marks = new AcuteLifeMarks();
    if (
      era.get('cflag:100:招募状态') === recruit_flags.yes &&
      era.get('status:0:熬夜') &&
      era.get('cflag:0:位置') === era.get('cflag:100:位置') &&
      !life_marks.leg
    ) {
      add_event(
        event_hooks.week_start,
        new EventObject(100, cb_enum.edu, true).set_arg('leg'),
      );
    }
    if (life_marks.leg > 0) {
      --life_marks.leg;
    }
    if (edu_weeks < 3 * 48) {
      switch (edu_weeks) {
        case 5: // 超究极武神极巨化以下略 · 巧克力慕斯蛋糕
        case 47: // 赌局与爱与飞行
        case 47 + 1: // 新年的抱负
        case 47 + 6: // 世纪初最强拳人节
        case 95 + 1: // 新春的贺礼
        case 95 + 6: // 拳人节 · 特大号追加超量叠放无敌燃烧版
        case 95 + 14: // 粉丝感谢会
          add_event(
            event_hooks.week_start,
            new EventObject(100, cb_enum.edu, true).set_arg(edu_weeks),
          );
      }
      check_and_register_aim_race(100, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(100, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(100).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_dir, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.siri_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kawa_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kash_kin, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.teio_sho, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.jbc_cls, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.cham_cup, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_dai, 2, 1));
    return buffer;
  }
};
