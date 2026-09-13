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
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const { buff_colors } = require('#/data/color-const');
const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const TeioLifeMarks = require('#/data/event/life-event-marks/life-event-marks-3');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

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
    if (era.get(`status:${this.id}:腿伤`) > 0) {
      if (extra_flag.rank > 1) {
        if (
          extra_flag.race === race_enum.japa_cup ||
          extra_flag.race === race_enum.arim_kin
        ) {
          era.set('flag:强制BE', this.id);
        } else {
          sys_change_fame(-5);
          if (extra_flag.rank > 5) {
            sys_change_fame(-5);
            sys_change_pressure(this.id, 2000);
          }
        }
      }
    } else if (
      era.get(`cflag:${this.id}:育成回合计时`) >= 96 &&
      extra_flag.race === race_enum.tenn_spr
    ) {
      add_event(
        event_hooks.back_school,
        new EventObject(this.id, cb_enum.edu, true).set_arg('broken'),
      );
    } else if (extra_flag.race === race_enum.toky_yus) {
      sys_hurt_uma(this.id, 3);
    }
  }

  check_and_get_titles(aim_check) {
    const edu_marks = new TeioEduMarks();
    const races = RaceHistory.get(this.id).get();
    const titles = [];
    let c_normal =
      check_aim_race(races, race_enum.sats_sho, 1, 1) &&
      check_aim_race(races, race_enum.toky_yus, 1, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1);
    const c_perfect =
      c_normal &&
      !edu_marks.perfect_check &&
      check_aim_race(races, race_enum.kiku_sho, 1, 1);
    const c_unyielding =
      c_normal &&
      check_aim_race(races, race_enum.japa_cup, 2, 1) &&
      era.get(`status:${this.id}:腿伤`) > 0;
    c_normal &&= !edu_marks.normal_check;
    const c = get_chara_color(3);
    if (c_unyielding) {
      titles.push({
        c,
        n: this.get_personal_titles()[2],
      });
      aim_check && sys_personal_achievement.set(3, 1);
    }
    c_perfect &&
      titles.push({
        c,
        n: this.get_personal_titles()[1],
      });
    c_normal &&
      titles.push({
        c,
        n: this.get_personal_titles()[0],
      });
    edu_marks.perfect_check = 0;
    edu_marks.normal_check = 0;
    return titles;
  }

  check_love_events() {
    const love = era.get(`love:${this.id}`),
      love_event = new EventObject(3, cb_enum.love).set_arg([love]);
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
    const edu_marks = new TeioEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const ebj = new EventObject(this.id, cb_enum.edu).set_arg(edu_weeks);
    if (edu_weeks < 3 * 48) {
      const ebj_s = new EventObject(this.id, cb_enum.edu, true).set_arg(
        edu_weeks,
      );
      let temp;
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'lets_go_together',
        event_hooks.out_start,
        ebj,
      );
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'dance_or_kongfu',
        event_hooks.out_start,
        ebj,
      );
      if (edu_weeks >= 48) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'honey_power',
          event_hooks.out_shopping,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'wing_and_sky',
          event_hooks.school_rooftop,
          ebj,
        );
      }
      if (era.get(`status:${this.id}:腿伤`) > 0) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'rehabilitation',
          event_hooks.office_prepare,
          ebj,
        );
      }
      if (edu_weeks >= 96) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'the_days_together',
          event_hooks.school_atrium,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'uma_shopping',
          event_hooks.out_shopping,
          ebj,
        );
      }
      switch (edu_weeks) {
        case 47 + 1: // 新年
        case 47 + 12: // 记者招待会
        case 95 + 5: // 天皇赏春前 · 放弃
        case 95 + 14: //粉丝感谢祭
          add_event(event_hooks.week_start, ebj_s);
          break;
        case 95 + 17: // 腿伤发布会
          if (!edu_marks.give_up) {
            add_event(event_hooks.week_start, ebj_s);
            if (
              RaceHistory.get(3).get_result(95 + 16)?.race ===
                race_enum.tenn_spr &&
              !era.get(`status:${this.id}:腿伤`)
            ) {
              era.set(`talent:${this.id}:自信程度`, 1);
              era.set(`talent:${this.id}:淫乱`, 1);
              era.set(`talent:${this.id}:身体素质`, 0);
              era.set(`status:${this.id}:腿伤`, 1);
              era.print(
                i18n().kojo[this.id].notify_leg_hurt(get_chara_talk(this.id), {
                  ...di18n.kojo.get_titled_content(this.id, 'hurt'),
                  color: buff_colors[3],
                }),
              );
            }
          }
          break;
        case 95 + 19: // 交涉
          if (
            !edu_marks.give_up &&
            RaceHistory.get(3)
              .get_entries()
              .filter((e) => e.weeks >= 48 && e.weeks < 96 && e.rank === 1)
              .length >= 3
          ) {
            add_event(event_hooks.week_start, ebj_s);
          }
          break;
        case 95 + 20: // 回归
          !edu_marks.give_up && add_event(event_hooks.school_atrium, ebj_s);
          break;
        case 95 + 25: // 春之帝王
          if (
            RaceHistory.get(3)
              .get_entries()
              .some(
                (r) =>
                  r.weeks > race_infos[race_enum.tenn_spr].date + 95 &&
                  race_infos[r.race].race_class === RaceInfo.class_enum.G1 &&
                  r.rank === 1,
              )
          ) {
            edu_marks.spring_teio++;
            add_event(event_hooks.school_atrium, ebj_s);
          }
          break;
        case 95 + 48:
          if (
            era.get(`status:${this.id}:腿伤`) > 0 &&
            sys_reg_race(this.id).curr.race === race_enum.arim_kin
          ) {
            get_skills_and_print_in_event(this.id, [110031]);
          }
          break;
        case 47 + 5: // 所以，衣服是怎样啦！
          add_event(event_hooks.school_atrium, ebj_s);
          break;
        case 47 + 25: // 定时刷新的小兽
          add_event(event_hooks.office_rest, ebj_s);
      }

      check_and_register_aim_race(this.id, aim_races, edu_weeks);
      // 选择放弃，春天皇赏强制避战
      if (
        edu_weeks === 95 + race_infos[race_enum.tenn_spr].date &&
        (temp = sys_reg_race(this.id)).curr.race === race_enum.tenn_spr &&
        edu_marks.give_up === 1
      ) {
        temp.curr = temp.last = {
          race: -1,
          week: -1,
        };
      }
      if (!edu_marks.famous_in_famous && edu_weeks >= 96) {
        const titles = CharaTitles.get(this.id).get();
        if (titles.some((t) => t.n === 'r_3crown_c')) {
          edu_marks.famous_in_famous++;
          add_event(
            event_hooks.out_start,
            ebj.copy().set_arg('famous_in_famous'),
          );
        } else {
          edu_marks.famous_in_famous = -1;
        }
      }
    } else if (edu_weeks === 143 + 5 && edu_marks.good_end === 1) {
      add_event(event_hooks.week_end, ebj);
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, ebj.copy().set_arg('palace'));
    }
  }

  check_palace_and_get_aims() {
    if (era.get(`status:${this.id}:腿伤`) > 0) {
      const races = RaceHistory.get(this.id).get();
      if (
        check_aim_race(races, race_enum.japa_cup, 2, 1) &&
        check_aim_race(races, race_enum.arim_kin, 2, 1)
      ) {
        new TeioEduMarks().good_end++;
      } else {
        era.set('flag:强制BE', this.id);
      }
    }
    return super.check_palace_and_get_aims();
  }

  is_prison() {
    if (new TeioLifeMarks().release_agree) {
      return false;
    }
    return super.is_prison();
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(this.id).get();
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

  get_aim_races() {
    return aim_races;
  }

  // 不屈帝王
  get_personal_achieve() {
    return '100303';
  }

  get_personal_titles() {
    return ['100301', '100302', '100303'];
  }
};
