const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const {
  sys_change_pressure,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const CharaSkills = require('#/data/chara-skills');
const CharaTitles = require('#/data/chara-titles');
const { buff_colors } = require('#/data/color-const');
const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 2;

aim_races[get_aim_race_index(race_enum.waka_sta, 1)] = 2;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 2;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 2;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 3;

module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const event_marks = new TeioEduMarks();
    if (extra_flag.rank !== 1) {
      event_marks.perfect_check = 1;
      if (extra_flag.edu_weeks < race_infos[race_enum.toky_yus].date + 48) {
        event_marks.normal_check = 1;
      }
    }
    if (era.get('status:3:腿伤')) {
      if (extra_flag.rank > 1) {
        sys_change_fame(-5);
      }
      if (extra_flag.rank > 5) {
        sys_change_fame(-5);
        sys_change_pressure(3, 2000);
      }
    } else if (
      era.get('cflag:3:育成回合计时') >= 96 &&
      extra_flag.race === race_enum.tenn_spr
    ) {
      add_event(
        event_hooks.back_school,
        new EventObject(3, cb_enum.edu, true).set_arg('broken'),
      );
    } else if (extra_flag.race === race_enum.toky_yus) {
      sys_hurt_uma(3, 3);
    }
  }

  check_love_events() {
    const love = era.get('love:3'),
      love_event = new EventObject(3, cb_enum.love);
    switch (love) {
      case 49:
      case 89:
        add_event(event_hooks.week_end, love_event);
        break;
      case 74:
      case 99:
        add_event(event_hooks.week_start, love_event);
    }
  }

  check_next_week() {
    const event_marks = new TeioEduMarks(),
      edu_weeks = era.get('cflag:3:育成回合计时'),
      event_obj = new EventObject(3, cb_enum.edu).set_arg(edu_weeks);
    if (edu_weeks < 3 * 48) {
      const event_obj_special = new EventObject(3, cb_enum.edu, true).set_arg(
        edu_weeks,
      );
      let temp;
      check_and_add_event(
        event_marks,
        edu_weeks,
        'lets_go_together',
        event_hooks.out_start,
        event_obj,
      );
      check_and_add_event(
        event_marks,
        edu_weeks,
        'dance_or_kongfu',
        event_hooks.out_start,
        event_obj,
      );
      if (edu_weeks >= 48) {
        check_and_add_event(
          event_marks,
          edu_weeks,
          'honey_power',
          event_hooks.out_shopping,
          event_obj,
        );
        check_and_add_event(
          event_marks,
          edu_weeks,
          'wing_and_sky',
          event_hooks.school_rooftop,
          event_obj,
        );
      }
      era.get('status:3:腿伤') &&
        check_and_add_event(
          event_marks,
          edu_weeks,
          'rehabilitation',
          event_hooks.office_prepare,
          event_obj,
        );
      if (edu_weeks >= 96) {
        check_and_add_event(
          event_marks,
          edu_weeks,
          'the_days_together',
          event_hooks.school_atrium,
          event_obj,
        );
        check_and_add_event(
          event_marks,
          edu_weeks,
          'uma_shopping',
          event_hooks.out_shopping,
          event_obj,
        );
      }
      switch (edu_weeks) {
        case 47 + 1: // 新年
        case 47 + 12: // 记者招待会
        case 95 + 5: // 天皇赏春前 · 放弃
        case 95 + 14: //粉丝感谢祭
          add_event(event_hooks.week_start, event_obj_special);
          break;
        case 95 + 17: // 腿伤发布会
          !event_marks.give_up &&
            add_event(event_hooks.week_start, event_obj_special);
          break;
        case 95 + 19: // 交涉
          if (
            !event_marks.give_up &&
            new RaceHistory(3)
              .get_entries()
              .filter((e) => e.weeks >= 48 && e.weeks < 96 && e.rank === 1)
              .length >= 3
          ) {
            add_event(event_hooks.week_start, event_obj_special);
          }
          break;
        case 95 + 20: // 回归
          !event_marks.give_up &&
            add_event(event_hooks.school_atrium, event_obj_special);
          break;
        case 95 + 25: // 春之帝王
          if (
            new RaceHistory(3)
              .get_entries()
              .filter(
                (e) =>
                  e.weeks > race_infos[race_enum.tenn_spr].date + 95 &&
                  race_infos[e.race].race_class === RaceInfo.class_enum.G1 &&
                  e.rank === 1,
              ).length
          ) {
            event_marks.spring_teio++;
            add_event(event_hooks.school_atrium, event_obj_special);
          }
          break;
        case 95 + race_infos[race_enum.tenn_spr].date + 1:
          if (
            !event_marks.give_up &&
            new RaceHistory(3).get_result(
              95 + race_infos[race_enum.tenn_spr].date,
            )?.race === race_enum.tenn_spr &&
            !era.get('status:3:腿伤')
          ) {
            era.set('talent:3:自信程度', 1);
            era.set('talent:3:淫乱', 1);
            era.set('talent:3:身体素质', 0);
            era.set('status:3:腿伤', 1);
            era.print([
              get_chara_talk(3).get_colored_name(),
              ' 罹患了 ',
              {
                color: buff_colors[3],
                content: '[腿伤]',
              },
              '……',
            ]);
          }
          break;
        case 95 + 48:
          if (
            era.get('status:3:腿伤') &&
            sys_reg_race(3).curr.race === race_enum.arim_kin
          ) {
            new CharaSkills(3).add(110031);
          }
          break;
        case 47 + 5: // 所以，衣服是怎样啦！
          add_event(event_hooks.school_atrium, event_obj_special);
          break;
        case 47 + 25: // 定时刷新的小兽
          add_event(event_hooks.office_rest, event_obj_special);
      }

      check_and_register_aim_race(3, aim_races, edu_weeks);
      // 选择放弃，春天皇赏强制避战
      if (
        edu_weeks === 95 + race_infos[race_enum.tenn_spr].date &&
        (temp = sys_reg_race(3)).curr.race === race_enum.tenn_spr &&
        event_marks.give_up === 1
      ) {
        temp.curr = temp.last = {
          race: -1,
          week: -1,
        };
      }
      if (!event_marks.famous_in_famous && edu_weeks >= 96) {
        if (
          new CharaTitles(3).get().findIndex((e) => e.n.endsWith('三冠')) !== -1
        ) {
          event_marks.famous_in_famous++;
          add_event(event_hooks.out_start, event_obj);
        } else {
          event_marks.famous_in_famous = -1;
        }
      }
    } else if (edu_weeks === 143 + 5 && event_marks.good_end === 1) {
      add_event(event_hooks.week_end, event_obj);
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, event_obj);
    }
  }

  check_palace_and_get_aims() {
    if (era.get('status:3:腿伤')) {
      const races = new RaceHistory(3).get();
      if (
        check_aim_race(races, race_enum.japa_cup, 2, 1) &&
        check_aim_race(races, race_enum.arim_kin, 2, 1)
      ) {
        new TeioEduMarks().good_end++;
      } else {
        era.set('flag:强制BE', 3);
      }
    }
    return super.check_palace_and_get_aims();
  }

  get_edu_aims() {
    const buffer = [],
      races = new RaceHistory(3).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));

    buffer.push(check_aim_and_get_entry(races, race_enum.waka_sta, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));

    if (!new TeioEduMarks().give_up) {
      buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    }
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));
    return buffer;
  }

  check_and_get_titles(aim_check) {
    const event_marks = new TeioEduMarks(),
      races = new RaceHistory(3).get(),
      titles = [];
    let normal_title_check =
      check_aim_race(races, race_enum.sats_sho, 1, 1) &&
      check_aim_race(races, race_enum.toky_yus, 1, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1);
    const perfect_title_check =
        normal_title_check &&
        !event_marks.perfect_check &&
        check_aim_race(races, race_enum.kiku_sho, 1, 1),
      unyielding_title_check =
        normal_title_check &&
        check_aim_race(races, race_enum.japa_cup, 2, 1) &&
        era.get('status:3:腿伤');
    normal_title_check &&= !event_marks.normal_check;
    const c = get_chara_color(3);
    if (unyielding_title_check) {
      titles.push({
        c,
        n: '不屈帝王',
      });
      aim_check && sys_personal_achievement.set(3, 1);
    }
    perfect_title_check &&
      titles.push({
        c,
        n: '无瑕帝王',
      });
    normal_title_check &&
      titles.push({
        c,
        n: '帝王',
      });
    event_marks.perfect_check = 0;
    event_marks.normal_check = 0;
    return titles;
  }

  get_aim_races() {
    return aim_races;
  }

  get_personal_titles() {
    return ['帝王', '无瑕帝王', '不屈帝王'];
  }
};
