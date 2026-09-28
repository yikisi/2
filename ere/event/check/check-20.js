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
const CharaTitles = require('#/data/chara-titles');
const SkyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-20');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aims = [
  [race_enum.hoch_sho, 1, 3, 0b11],
  [race_enum.sats_sho, 1, 3, 0b11],
  [race_enum.toky_yus, 1, 3, 0b11],
  [race_enum.kiku_sho, 1, 1, 0b11],
  [race_enum.arim_kin, 1, 5, 0b11],
  [race_enum.nikk_sho, 2, 3, 0b11],
  [race_enum.tenn_spr, 2, 3, 0b11],
  [race_enum.sapp_kin, 2, 1, 0b11],
  [race_enum.tenn_sho, 2, 1, 0b11],

  [race_enum.sapp_kin, 1, 1, -4],
  [race_enum.tenn_sho, 1, 1, -4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class extends CustomizedCheck {
  check_after_race(extra) {
    if (
      extra.race === race_enum.arim_kin &&
      era.get(`cflag:${this.id}:育成回合计时`) < 3 * 48
    ) {
      new SkyEduMarks().jess = 1;
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(this.id).get();
    const ret = [];
    if (
      (check_aim_race(races, race_enum.sapp_kin, 1, 1, (r) => r.st === 3) &&
        check_aim_race(races, race_enum.sapp_kin, 2, 1, (r) => r.st === 3)) ||
      (check_aim_race(races, race_enum.tenn_sho, 1, 1, (r) => r.st === 2) &&
        check_aim_race(races, race_enum.tenn_sho, 2, 1, (r) => r.st === 2))
    ) {
      ret.push({ c: get_chara_color(this.id), n: '102002' });
      aim_check && sys_personal_achievement.set(this.id, 1);
    }
    if (aim_check) {
      ret.push({ c: get_chara_color(this.id), n: '102001' });
    }
    return ret;
  }

  check_next_week() {
    const edu_marks = new SkyEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    edu_marks.action = 0;
    const ebj = new EventObject(this.id, cb_enum.edu);
    if (era.get(`cflag:${this.id}:招募状态`) === recruit_flags.yes) {
      if (
        era.get(`status:0:生日`) > 0 &&
        era.get(`relation:${this.id}:0`) > 225
      ) {
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.daily).set_arg('ws_happy_birthday'),
        );
      }
      if (edu_marks.jess > 0 && era.get(`status:${this.id}:摸鱼`) > 0) {
        era.set(`status:${this.id}:摸鱼`, 0);
      }
      if (edu_weeks >= 16) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_next_time',
          event_hooks.week_start,
          ebj,
        );
      }
      if (edu_weeks >= 40) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_punish',
          event_hooks.week_start,
          ebj,
        );
      }
      if (edu_weeks >= 32) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_hidden_menu',
          event_hooks.week_start,
          ebj,
        );
      }
      if (edu_weeks >= 40) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_punish',
          event_hooks.week_start,
          ebj,
        );
      }
      if (edu_weeks >= 47 + 33) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_party',
          event_hooks.week_start,
          ebj,
        );
      }
      if (edu_weeks >= 95 + 17) {
        check_and_add_event(
          edu_marks,
          edu_weeks,
          'ws_ramen',
          event_hooks.week_start,
          ebj,
        );
      }
      if (edu_marks.o_s_dating >= 3 && !edu_marks.sword_vs_shield) {
        edu_marks.sword_vs_shield = 1;
        add_event(event_hooks.week_end, ebj.set_arg('we_sword_vs_shield_1'));
      }
      if (edu_marks.o_s_dating >= 5 && edu_marks.sword_vs_shield === 2) {
        edu_marks.sword_vs_shield = 3;
        add_event(event_hooks.week_end, ebj.set_arg('we_sword_vs_shield_2'));
      }
      if (edu_marks.ws_party === 2 && edu_marks.o_s_dating === 5) {
        edu_marks.o_s_dating = 6;
      }
    }
    if (edu_weeks < 3 * 48 && !edu_marks.soft_be) {
      if (era.get(`status:${this.id}:摸鱼`) > 0 && edu_weeks >= 12) {
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.edu).set_arg('ws_indolent'),
        );
      }
      edu_marks.radiant = Math.max(edu_marks.radiant - 2, 0);
      const ebj_s = new EventObject(this.id, cb_enum.edu, true);
      switch (edu_weeks) {
        case 47 + 5:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_47_5'));
          break;
        case 47 + 41:
          if (
            CharaTitles.get(this.id)
              .get()
              .some((t) => t.n === 'r_3crown_c')
          ) {
            add_event(event_hooks.week_start, ebj_s.set_arg('ws_triple_crown'));
          }
          if (
            !check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.kiku_sho,
              1,
              1,
            )
          ) {
            era.set(`cflag:${this.id}:招募状态`, recruit_flags.temporary_leave);
            add_event(event_hooks.week_end, ebj_s.set_arg('soft_be'));
          }
          break;
        case 47 + 42:
          if (
            !check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.kiku_sho,
              1,
              1,
            )
          ) {
            era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
            edu_marks.soft_be = 1;
            edu_marks.radiant = edu_marks.easy_go = 0;
          }
          break;
        case 47 + 48:
          add_event(event_hooks.week_start, ebj_s.set_arg('ws_47_48'));
          break;
        case 95 + 5:
          add_event(
            event_hooks.week_start,
            ebj
              .copy()
              .set_arg(
                check_aim_race(
                  RaceHistory.get(this.id).get(),
                  race_enum.arim_kin,
                  1,
                  1,
                )
                  ? 'ws_cloud_mot_aw'
                  : 'ws_lost_al',
              ),
          );
      }
      check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
    } else if (edu_weeks === 143 + 9) {
      add_event(
        event_hooks.week_start,
        new EventObject(this.id, cb_enum.edu).set_arg('palace'),
      );
    }
  }

  check_palace_and_get_aims() {
    const edu_marks = new SkyEduMarks();
    edu_marks.radiant = edu_marks.easy_go = 0;
    return super.check_palace_and_get_aims();
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    aims.forEach(
      ([race, year, rank, mark]) =>
        mark > 0 &&
        buffer.push(check_aim_and_get_entry(races, race, year, rank)),
    );
    return buffer;
  }

  get_personal_achieve() {
    return '102002';
  }

  get_personal_titles() {
    return ['102001', '102002'];
  }

  is_aim_race(race, edu_weeks, rank) {
    if (rank && rank !== 1) {
      if (race === race_enum.sapp_kin || race === race_enum.tenn_sho) {
        return 0;
      }
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }
};
