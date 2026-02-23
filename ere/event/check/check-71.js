const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const ArdanEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-71');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const ArdanLifeMarks = require('#/data/event/life-event-marks/life-event-marks-71');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 0b11;
aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = -1;
aim_races[get_aim_race_index(race_enum.aoba_sho, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = -1;
aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 0b11;
aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 0b11;
aim_races[get_aim_race_index(race_enum.takz_kin, 2)] = 0b11;
aim_races[get_aim_race_index(race_enum.main_oka, 2)] = 0b11;
aim_races[get_aim_race_index(race_enum.tenn_sho, 2)] = 0b11;

module.exports = class extends CustomizedCheck {
  check_after_race() {
    const event_marks = new ArdanEduMarks();
    if (era.get(`cflag:${this.id}:干劲`) !== 2) {
      event_marks.motivation_count++;
    }
  }

  check_and_get_titles(aim_check) {
    const edu_marks = new ArdanEduMarks(),
      races = new RaceHistory(this.id).get(),
      titles = [];
    if (
      !edu_marks.motivation_count &&
      !edu_marks.train_fail &&
      check_aim_race(races, race_enum.toky_yus, 1, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 1, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 2, 1)
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
    if (era.get(`cflag:${this.id}:招募状态`) === recruit_flags.yes) {
      const life_marks = new ArdanLifeMarks();
      if (era.get('flag:回合爱慕惩罚') === 0) {
        const love = era.get(`love:${this.id}`);
        if (!life_marks.love_1 && love >= 1) {
          life_marks.love_1 = 1;
          add_event(
            event_hooks.week_end,
            new EventObject(this.id, cb_enum.love).set_arg('bearing'),
          );
        } else if (
          life_marks.love_1 === 2 &&
          !life_marks.love_25 &&
          love >= 25
        ) {
          life_marks.love_25 = 1;
          add_event(
            event_hooks.week_end,
            new EventObject(this.id, cb_enum.love).set_arg('theater'),
          );
        }
      }
    }
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (edu_weeks < 3 * 48) {
      if (edu_weeks === 47 + 20) {
        add_event(
          event_hooks.week_end,
          new EventObject(this.id, cb_enum.edu, true).set_arg('separate_way'),
        );
      }
      check_and_register_aim_race(this.id, this.get_aim_races(), edu_weeks);
    } else {
      super.check_next_week();
    }
  }

  check_palace_and_get_aims() {
    const life_marks = new ArdanLifeMarks();
    if (era.get(`love:${this.id}`) >= 90 && !life_marks.travel) {
      life_marks.travel = 1;
      add_event(
        event_hooks.out_start,
        new EventObject(this.id, cb_enum.love).set_arg('travel'),
      );
    }
    return super.check_palace_and_get_aims();
  }

  is_aim_race(race, edu_weeks, rank) {
    if (rank !== undefined) {
      switch (race) {
        case race_enum.begin_race:
          if (rank !== 1) {
            return 0;
          }
          break;
        case race_enum.sats_sho:
          if (rank > 5) {
            return 0;
          }
          break;
        case race_enum.aoba_sho:
          if (rank > 5) {
            return 0;
          }
          break;
        case race_enum.toky_yus:
          if (rank > 5) {
            return 0;
          }
          break;
        case race_enum.kiku_sho:
          if (rank > 5) {
            return 0;
          }
          break;
        case race_enum.tenn_sho:
          if (edu_weeks < 96) {
            if (rank > 3) {
              return 0;
            }
          } else if (rank > 1) {
            return 0;
          }
          break;
        case race_enum.sank_hai:
          if (rank > 3) {
            return 0;
          }
          break;
        case race_enum.takz_kin:
          if (rank > 3) {
            return 0;
          }
          break;
        case race_enum.main_oka:
          if (rank > 3) {
            return 0;
          }
      }
    }
    return super.is_aim_race(race, edu_weeks, rank);
  }

  get_aim_races() {
    if (new ArdanEduMarks().kiku_sho > 0) {
      aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 0b11;
      aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = -1;
    } else {
      aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = -1;
      aim_races[get_aim_race_index(race_enum.tenn_sho, 1)] = 0b11;
    }
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [];
    const races = RaceHistory.get(this.id).get();
    const edu_marks = new ArdanEduMarks();
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template_1.replace(
        '%COUNT%',
        edu_marks.train_fail.toString(),
      ),
    });
    buffer.push({
      content: i18n().kojo[this.id].achieve_track_aim_template_2.replace(
        '%COUNT%',
        edu_marks.motivation_count.toString(),
      ),
    });
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.aoba_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(
      check_aim_and_get_entry(
        races,
        edu_marks.kiku_sho > 0 ? race_enum.kiku_sho : race_enum.tenn_sho,
        1,
        3,
      ),
    );
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.takz_kin, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.main_oka, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_sho, 2, 3));
    return buffer;
  }
};
