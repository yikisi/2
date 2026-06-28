const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 3;

aim_races[get_aim_race_index(race_enum.keis_hai, 1)] = 1;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 3;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 3;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = -3;
aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = -4;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 3;

aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 1;
aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 1;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 3;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = -4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 1;

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(37).get(),
      titles = [];
    if (
      (check_aim_race(races, race_enum.japa_cup, 1, 1, (e) => e.st === 2) ||
        check_aim_race(races, race_enum.japa_cup, 2, 1, (e) => e.st === 2)) &&
      (check_aim_race(races, race_enum.tenn_sho, 1, 1, (e) => e.st === 2) ||
        check_aim_race(races, race_enum.tenn_sho, 2, 1, (e) => e.st === 2))
    ) {
      titles.push({
        c: get_chara_color(37),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(37, 1);
    }
    return titles;
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:37:育成回合计时');
    if (edu_weeks < 3 * 48) {
      const edu_marks = new FlashEduMarks();
      const ebj = new EventObject(37, cb_enum.edu);
      const ebj_s = new EventObject(37, cb_enum.edu, true).set_arg(edu_weeks);
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'black_treasure',
        event_hooks.out_shopping,
        ebj,
        () => EventMarks.get(0).add(event_hooks.out_shopping),
      );

      let temp;
      switch (edu_weeks) {
        case 47 + 1: // 新年的抱负
        case 47 + 16: // 经验之谈 · 一
        case 47 + 17: // 经验之谈 · 二
        case 47 + 18: // 经验之谈 · 三
        case 47 + 23: // 两难之择 · 二
        case 47 + 29: // 交心之谈 · 一
        case 95 + 1: // 初诣
        case 95 + 14: // 粉丝感谢祭
        case 95 + 23: // 未来之事 · 一
        case 95 + 29: // 未来之事 · 二
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 47 + 13: // 突如之灾
          if (
            check_aim_race(RaceHistory.get(37).get(), race_enum.keis_hai, 1, 5)
          ) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 47 + 21: // 两难之择 · 一
          era.set('status:37:荣耀德比', 0);
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 47 + 32: // 交心之谈 · 二
        case 95 + 32:
          add_event(event_hooks.week_end, ebj_s);
          break;
        case 95 + 6: // 遇见之花
          if (era.get(`relation:37:0`) > 225) {
            add_event(event_hooks.out_start, ebj_s);
          }
          break;
        case 95 + 24:
          if ((temp = sys_reg_race(37)).curr.race === race_enum.takz_kin) {
            temp.curr = temp.last = {
              race: -1,
              week: -1,
            };
          }
      }
      check_and_register_aim_race(37, aim_races, edu_weeks);
      const reg = sys_reg_race(37).curr;
      if (
        reg.race === race_enum.toky_yus &&
        reg.week === era.get('flag:当前回合数')
      ) {
        era.set('status:37:荣耀德比', 1);
      }
    } else if (edu_weeks === 143 + 1) {
      era.set('status:37:必行之事', 0);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(37, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(37).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.keis_hai, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 1, 18));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 16));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 16));
    return buffer;
  }

  get_aim_races() {
    return aim_races;
  }
};
