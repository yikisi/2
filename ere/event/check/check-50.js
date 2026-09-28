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
const { buff_colors } = require('#/data/color-const');
const TaishinEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-50');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const TaishinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-50');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');

const aims = [
  [race_enum.hope_sta, 0, 1, 0b10],
  [race_enum.sats_sho, 1, 3, 0b11],
  [race_enum.toky_yus, 1, 3, 0b11],
  [race_enum.kiku_sho, 1, 20, 0b11],
  [race_enum.nikk_sho, 2, 3, 4],
  [race_enum.tenn_spr, 2, 3, 0b11],
  [race_enum.tenn_sho, 2, 1, 0b11],
  [race_enum.arim_kin, 2, 1, 0b11],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 0b11;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class extends CustomizedCheck {
  check_after_race(extra) {
    if (
      extra.race === race_enum.begin_race &&
      era.get(`cflag:${this.id}:育成回合计时`) < 47 &&
      extra.rank === 1
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.edu, true).set_arg('disturbance'),
      );
    } else if (extra.race === race_enum.kiku_sho) {
      if (extra.rank === 1) {
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.edu).set_arg('frog'),
        );
      } else {
        era.set('flag:强制BE', this.id);
      }
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get(),
      ret = [];
    if (
      check_aim_race(races, race_enum.sats_sho, 1, 1, (e) => e.st === 3) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1, (e) => e.st === 3) &&
      era.get(`base:${this.id}:根性`) >= 1200
    ) {
      ret.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    return ret;
  }

  check_lay_on_hands() {
    const edu_marks = new TaishinEduMarks();
    if (edu_marks.debuff > 0) {
      edu_marks.debuff = 0;
      era.print(
        i18n().kojo[this.id].notify_remove_debuff(get_chara_talk(this.id), {
          ...di18n.kojo.get_titled_content(this.id, 'debuff'),
          color: buff_colors[3],
        }),
      );
    }
  }

  check_love_events() {
    const love = era.get(`love:${this.id}`);
    const ebj_l = new EventObject(this.id, cb_enum.love).set_arg([love]);
    if (love === 49) {
      if (era.get(`cflag:${this.id}:育成回合计时`) <= 47 + 44) {
        era.print(i18n().kojo[this.id].notify_love_event_50);
      } else {
        add_event(event_hooks.out_start, ebj_l);
      }
    } else if (love === 74) {
      add_event(event_hooks.out_start, ebj_l);
    } else if (love === 99 && era.get(`cflag:${this.id}:殿堂`) > 0) {
      add_event(event_hooks.out_start, ebj_l.set_arg([love, true]));
    } else {
      super.check_love_events();
    }
  }

  check_next_week() {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (edu_weeks < 3 * 48) {
      const edu_marks = new TaishinEduMarks(this.id);
      const race_history = RaceHistory.get(this.id);
      const ebj = new EventObject(this.id, cb_enum.edu);
      const ebj_s = new EventObject(this.id, cb_enum.edu, true);
      const love = era.get(`love:${this.id}`);
      if (love >= 24) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'dinner',
          event_hooks.week_end,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'pet_head',
          event_hooks.week_start,
          ebj,
        );
      }
      if (
        race_history
          .get_values()
          .filter(
            (r) =>
              race_infos[r.race].race_class === class_enum.G1 && r.rank === 1,
          ).length >= 2
      ) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'famous',
          event_hooks.week_start,
          ebj,
        );
      }
      if (edu_marks.debuff > 0 && !era.get(`status:${this.id}:伤病`)) {
        edu_marks.debuff = 0;
        era.print(
          i18n().kojo[this.id].notify_remove_debuff(get_chara_talk(this.id), {
            ...di18n.kojo.get_titled_content(this.id, 'debuff'),
            color: buff_colors[3],
          }),
        );
      }
      const life_marks = new TaishinLifeMarks();
      if (love >= 50 && !life_marks.aquarium) {
        life_marks.aquarium = 1;
        add_event(
          event_hooks.out_start,
          new EventObject(this.id, cb_enum.love).set_arg([49]),
        );
      }
      switch (edu_weeks) {
        // 7/1
        case 24:
          if (race_history.check_begin()) {
            add_event(event_hooks.week_start, ebj_s.set_arg('chasing'));
          }
          break;
        // 9/3
        case 34:
          add_event(event_hooks.week_start, ebj_s.set_arg('dream_3_crowns'));
          break;
        // 2/1/1
        case 47 + 1:
          add_event(event_hooks.week_start, ebj_s.set_arg('new_year_c'));
          break;
        // 2/3/3
        case 47 + 11:
          add_event(event_hooks.week_start, ebj_s.set_arg('contestants'));
          break;
        // 2/8/1
        case 47 + 29:
          add_event(event_hooks.week_start, ebj_s.set_arg('summer_start_c'));
          break;
        // 2/8/4
        case 47 + 32:
          add_event(event_hooks.week_end, ebj_s.set_arg('summer_end_c'));
          break;
        // 2/9/1
        case 47 + 33:
          add_event(event_hooks.week_start, ebj_s.set_arg('choice'));
          break;
        // 2/9/2
        case 47 + 34:
          if (!edu_marks.debuff) {
            edu_marks.debuff = 1;
          }
          break;
        // 2/10/4
        case 47 + 40:
          if (edu_marks.debuff > 0) {
            edu_marks.debuff = 0;
            era.print(
              i18n().kojo[this.id].notify_remove_debuff(
                get_chara_color(this.id),
                {
                  ...di18n.kojo.get_titled_content(this.id, 'debuff'),
                  color: buff_colors[3],
                },
              ),
            );
          }
          if (edu_marks.choice > 0) {
            add_event(event_hooks.week_end, ebj_s.set_arg('carefree'));
          }
          break;
        // 2/11/1
        case 47 + 41:
          if (!edu_marks.choice) {
            if (race_history.get_result(47 + 40)?.race !== race_enum.kiku_sho) {
              era.set('flag:强制BE', this.id);
            } else if (!era.get('flag:强制BE')) {
              edu_marks.frog = 1;
              const reg = sys_reg_race(this.id);
              if (reg.curr.race !== -1) {
                reg.curr.race =
                  reg.curr.week =
                  reg.last.race =
                  reg.last.week =
                    -1;
              }
              add_event(event_hooks.week_start, ebj_s.set_arg('short_rest'));
            }
          }
          break;
        case 47 + 43:
          if (!edu_marks.choice) {
            add_event(event_hooks.week_end, ebj_s.set_arg('back_home'));
            era.set(`cflag:${this.id}:招募状态`, recruit_flags.temporary_leave);
          }
          break;
        case 47 + 45:
          edu_marks.frog = 0;
          if (
            era.get(`cflag:${this.id}:招募状态`) ===
            recruit_flags.temporary_leave
          ) {
            era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
            add_event(event_hooks.week_start, ebj_s.set_arg('letter'));
            edu_marks.new_goal = 1;
          }
          if (era.get('love:50') === 49) {
            era.set(`cflag:${this.id}:爱慕暂拒`, 49);
          }
          break;
        case 47 + 48:
          add_event(event_hooks.week_start, ebj_s.set_arg('christmas_c'));
          break;
        case 95 + 1:
          add_event(event_hooks.out_start, ebj_s.set_arg('new_year_s'));
          break;
        case 95 + 6:
          add_event(event_hooks.week_start, ebj_s.set_arg('valentine_s'));
          break;
        case 95 + 40:
          add_event(event_hooks.week_start, ebj_s.set_arg('halloween_s'));
          break;
        case 95 + 48:
          add_event(event_hooks.week_end, ebj_s.set_arg('christmas_s'));
      }
      if (edu_weeks !== 47 + 40 || !edu_marks.choice) {
        check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
      }
    }
  }

  check_palace_and_get_aims() {
    const edu_marks = new TaishinEduMarks();
    edu_marks.debuff = 0;
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims.forEach(([race, year, rank]) =>
      buffer.push(check_aim_and_get_entry(races, race, year, rank)),
    );
    return buffer;
  }
};
