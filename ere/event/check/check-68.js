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
const crazy_fans = require('#/data/event/crazy-fans');
const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};

aim_races[race_enum.begin_race] = 2;

aim_races[get_aim_race_index(race_enum.stli_kin, 1)] = 2;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = -2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = -2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 2;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 2;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = -2;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

module.exports = class extends CustomizedCheck {
  check_after_punish(level) {
    if (level === 1 || level === 3) {
      add_event(event_hooks.week_start, new EventObject(68, cb_enum.daily));
    }
  }

  check_after_race(extra_flag) {
    if (
      extra_flag.rank === 1 &&
      race_infos[extra_flag.race].race_class === class_enum.G1
    ) {
      new KitaEduMarks().g1_count++;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(68).get(),
      titles = [];
    if (
      (check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
        check_aim_race(races, race_enum.tenn_sho, 1, 1)) ||
      (check_aim_race(races, race_enum.tenn_sho, 2, 1) &&
        (check_aim_race(races, race_enum.takz_kin, 1, 1) ||
          check_aim_race(races, race_enum.takz_kin, 2, 1)) &&
        check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
        new KitaEduMarks().g1_count >= 7)
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return titles;
  }

  check_next_week() {
    const event_marks = new KitaEduMarks(),
      event_obj = new EventObject(68, cb_enum.edu),
      edu_weeks = era.get('cflag:68:育成回合计时');
    if (edu_weeks < 3 * 48) {
      const event_obj_special = new EventObject(68, cb_enum.edu, true).set_arg(
        edu_weeks,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'kitasan_touch',
        event_hooks.back_school,
        event_obj,
      );
      switch (edu_weeks) {
        case 38: // 优秀素质登场
        case 47 + 7: // 家人是很重要的
        case 47 + 29: // 夏季合宿
        case 47 + 48: // 圣诞夜的晚餐
        case 95 + 6: // 略微有些破碎的甜酒味
        case 95 + 29: // 合宿开始
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 42: // 悠闲的午后时光
          add_event(event_hooks.school_atrium, event_obj_special);
          break;
        case 47 + 1: // 新年的抱负
          add_event(event_hooks.out_church, event_obj_special);
          break;
        case 47 + 10: // 没有恶意的小小恶作剧
          if (event_marks.classical_valentine === 1) {
            add_event(event_hooks.week_start, event_obj_special);
          }
          break;
        case 47 + 11: // 稳健的支持与皋月阴云
          if (
            era.get('cflag:3:招募状态') === recruit_flags.yes &&
            era.get('cflag:3:育成回合计时') >= 96
          ) {
            add_event(event_hooks.week_start, event_obj_special);
          }
          break;
        case 47 + 32: // 合宿结束
        case 95 + 32: // 合宿结束
        case 95 + 48: // 与北部玄驹的酒吧生活
          add_event(event_hooks.week_end, event_obj_special);
          break;
        case 95 + 1: // 新年拜访
          add_event(event_hooks.week_start, event_obj_special);
          add_event(event_hooks.out_start, event_obj_special);
          break;
        case 95 + 10: // 奖励
          if (
            event_marks.senior_valentine === 1 &&
            era.get('love:68') >= 75 &&
            era.get('exp:68:受虐高潮次数') >= 10
          ) {
            add_event(event_hooks.week_end, event_obj_special);
          }
          break;
        case 95 + 14: //粉丝感谢祭！
          add_event(event_hooks.out_shopping, event_obj_special);
      }
      check_and_register_aim_race(68, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, event_obj.set_arg('palace'));
    }
  }

  check_palace_and_get_aims() {
    if (
      RaceHistory.get(68)
        .get_values()
        .filter((e) => e.rank === 1 && e.race !== race_enum.begin_race).length <
      4
    ) {
      new KitaEduMarks().crazy_fan++;
      crazy_fans.push(68);
    } else {
      add_event(
        event_hooks.week_end,
        new EventObject(68, cb_enum.edu, true).set_arg(144),
      );
      add_event(
        event_hooks.out_start,
        new EventObject(68, cb_enum.edu, true).set_arg('hot_spring_event'),
      );
    }
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(68).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.stli_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 16));
    return buffer;
  }
};
