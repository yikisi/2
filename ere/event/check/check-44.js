const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const SweepEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-44');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const SweepLifeMarks = require('#/data/event/life-event-marks/life-event-marks-44');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const check_and_add_event = require('#/event/check/snippets/check-and-add-event');

const aims = [
  [race_enum.hans_fil, 0, 5, 0b11],
  [race_enum.oka_sho, 1, 5, 0b11],
  [race_enum.yush_him, 1, 5, 0b11],
  [race_enum.shuk_sho, 1, 1, 0b11],
  [race_enum.eliz_cup, 1, 3, 0b11],
  [race_enum.yasu_kin, 2, 3, 0b11],
  [race_enum.takz_kin, 2, 1, 0b11],
  [race_enum.tenn_sho, 2, 3, 0b11],
  [race_enum.eliz_cup, 2, 1, 0b11],

  [race_enum.tuli_sho, 1, 1, -4],
  [race_enum.arim_kin, 2, 1, -3],
];
const aim_races = { [race_enum.begin_race]: 0b11 };
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class extends CustomizedCheck {
  check_after_race(extra) {
    if (
      extra.race === race_enum.eliz_cup &&
      era.get(`cflag:${this.id}:育成回合计时`) < 96
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.edu).set_arg('we_asphodel'),
      );
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get();
    const titles = [];
    if (
      check_aim_race(races, race_enum.tuli_sho, 1, 1, (e) => e.st === 3) &&
      check_aim_race(races, race_enum.shuk_sho, 1, 1, (e) => e.st === 3) &&
      check_aim_race(races, race_enum.takz_kin, 2, 1, (e) => e.st >= 2) &&
      check_aim_race(races, race_enum.eliz_cup, 2, 1, (e) => e.st >= 2) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1, (e) => e.st >= 2)
    ) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      if (aim_check) {
        sys_personal_achievement.set(this.id, 1);
      }
    }
    return titles;
  }

  check_after_betrayed(partners, is_aware) {
    const edu_marks = new SweepEduMarks();
    if (
      is_aware &&
      era.get(`love:${this.id}`) >= 75 &&
      ++edu_marks.betrayed === 3
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.love).set_arg('get_cuckold'),
      );
    }
  }

  check_next_week() {
    const edu_marks = new SweepEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const ebj = new EventObject(this.id, cb_enum.edu);
    if (era.get(`cflag:${this.id}:招募状态`) === recruit_flags.yes) {
      const life_marks = new SweepLifeMarks();
      if (life_marks.no_action > 0 && !--life_marks.no_action) {
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.daily).set_arg('no_action_check'),
        );
      }
      if (
        [38, 115, 119, 121].every(
          (cid) => era.get(`cflag:${cid}:招募状态`) === recruit_flags.yes,
        )
      ) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_branches',
          event_hooks.week_start,
          ebj,
        );
      }
      const added_list = era.getAddedCharacters();
      if (
        era.get('cflag:38:招募状态') === recruit_flags.yes &&
        added_list.includes(115) &&
        added_list.includes(119) &&
        added_list.includes(121)
      ) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_mother',
          event_hooks.week_start,
          ebj,
        );
      }
    }
    if (edu_weeks < 3 * 48) {
      const ebj_s = new EventObject(this.id, cb_enum.edu, true);
      if (edu_weeks >= 12) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'we_slave_and_master',
          event_hooks.week_end,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_phalaenopsis',
          event_hooks.week_start,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_witch_potion',
          event_hooks.week_start,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'we_sweet_carrot',
          event_hooks.week_end,
          ebj,
        );
      }
      if (edu_weeks >= 48) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'we_in_school',
          event_hooks.week_end,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'og_phantom_thief',
          event_hooks.office_game,
          ebj,
        );
        if (era.get('cflag:97:招募状态') === recruit_flags.yes) {
          check_and_add_event(
            edu_marks,
            edu_weeks,
            'ws_tea_party',
            event_hooks.week_start,
            ebj,
          );
        }
      }
      if (edu_weeks > 47 + 42) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_magic_origin',
          event_hooks.week_start,
          ebj,
        );
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_paper_plane',
          event_hooks.week_start,
          ebj,
        );
      }
      if (edu_weeks > 95 + 25) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'we_buttercup',
          event_hooks.week_end,
          ebj,
        );
        if (era.get(`mark:${this.id}:淫纹`) > 0) {
          check_and_add_event(
            edu_marks,
            edu_weeks,
            'ws_night_shade',
            event_hooks.week_start,
            ebj,
          );
        }
      }
      check_and_add_event(
        edu_marks,
        edu_weeks,
        'ws_strange_day',
        event_hooks.week_start,
        ebj,
      );
      switch (edu_weeks) {
        case 47 + 1:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_new_year_c'));
          add_event(event_hooks.week_end, ebj_s.copy().set_arg('we_new_turn'));
          break;
        case 47 + 6:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_valentine_c'));
          break;
        case 47 + 29:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_summer_start_c'));
          break;
        case 47 + 32:
          add_event(event_hooks.week_end, ebj_s.set_arg('we_summer_end_c'));
          break;
        case 47 + 40:
          if (
            RaceHistory.get(this.id).get_result(47 + 39)?.race ===
            race_enum.shuk_sho
          ) {
            add_event(event_hooks.week_start, ebj_s.set_arg('ws_truth'));
          }
          break;
        case 47 + 43:
          edu_marks.agreement = 0;
          break;
        case 95 + 1:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_new_year_s'));
          add_event(
            event_hooks.week_end,
            ebj_s.copy().set_arg('we_magic_stage'),
          );
          break;
        case 95 + 25:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_magic_dream'));
          break;
        case 95 + 29:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_summer_start_s'));
          break;
        case 95 + 48:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_christmas_s'));
      }
      if (edu_marks.agreement > 0) {
        sys_change_motivation(this.id, 4);
      }
      check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, ebj.copy().set_arg('palace'));
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const races = RaceHistory.get(this.id).get();
    return [
      check_aim_and_get_entry(races, race_enum.begin_race),
      ...aims
        .filter((a) => a[3] > 0)
        .map(([race, year, rank]) =>
          check_aim_and_get_entry(races, race, year, rank),
        ),
    ];
  }
};
