const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const {
  get_luna_talk_tools,
  i_emperor,
  normal_end,
} = require('#/event/snippets/101700');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 2;
aim_races[get_aim_race_index(race_enum.saud_cup, 0)] = 2;

aim_races[get_aim_race_index(race_enum.sats_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.toky_yus, 1)] = 2;
aim_races[get_aim_race_index(race_enum.kiku_sho, 1)] = 2;
aim_races[get_aim_race_index(race_enum.japa_cup, 1)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 1)] = 0b01;

aim_races[get_aim_race_index(race_enum.tenn_spr, 2)] = 0b100;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 3;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 0b10;

const edu_weeks_kiku_sho = 48 + race_infos[race_enum.kiku_sho].date;
module.exports = class extends CustomizedCheck {
  check_after_race(extra_flag) {
    const edu_marks = new LunaEduMarks();
    if (extra_flag.rank !== 1 && extra_flag.edu_weeks < edu_weeks_kiku_sho) {
      edu_marks.title_check = 1;
    }
    if (
      extra_flag.rank === 1 &&
      ((extra_flag.race === race_enum.arim_kin &&
        era.get('cflag:17:育成回合计时') < 96) ||
        extra_flag.race === race_enum.tenn_spr)
    ) {
      CustomizedCheck.love_uma(edu_marks.emperor ? 9017 : 17, 4);
    }
  }

  check_and_get_titles(aim_check) {
    const races = RaceHistory.get(17).get(),
      is_invisible =
        check_aim_race(races, race_enum.sats_sho, 1, 1) &&
        check_aim_race(races, race_enum.toky_yus, 1, 1) &&
        check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
        check_aim_race(races, race_enum.arim_kin, 1, 1) &&
        check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
        check_aim_race(races, race_enum.arim_kin, 2, 1) &&
        (check_aim_race(races, race_enum.japa_cup, 1, 1) ||
          check_aim_race(races, race_enum.japa_cup, 2, 1)),
      titles = [];
    if (is_invisible && !new LunaEduMarks().title_check) {
      titles.push({
        c: get_chara_color(this.id),
        n: this.get_personal_titles()[0],
      });
      aim_check && sys_personal_achievement.set(17, 1);
    }
    return titles;
  }

  check_next_week() {
    const edu_weeks = era.get('cflag:17:育成回合计时');
    const ebj = new EventObject(17, cb_enum.edu).set_arg(edu_weeks);
    const ebj_s = new EventObject(17, cb_enum.edu, true).set_arg(edu_weeks);
    if (edu_weeks < 3 * 48) {
      add_event(event_hooks.week_start, ebj);
      if (
        edu_weeks === 47 + 41 &&
        check_aim_race(RaceHistory.get(17).get(), race_enum.kiku_sho, 1, 1)
      ) {
        add_event(event_hooks.week_end, ebj_s);
      } else if (edu_weeks === 95 + 1) {
        add_event(event_hooks.out_church, ebj_s);
      } else if (edu_weeks === 95 + 10) {
        add_event(event_hooks.week_end, ebj_s);
      }
      check_and_register_aim_race(17, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 1) {
      const edu_marks = new LunaEduMarks();
      if (!edu_marks.good_end) {
        const luna = get_luna_talk_tools();
        // 没跑有马或者没触发赛后事件，直接按NE计算
        normal_end(
          edu_marks,
          !era.get(`status:${luna.id}:神经衰弱`) &&
            era.get(`love:${luna.id}`) >= 90,
        );
      }
    } else if (edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, ebj);
    }
  }

  get_aim_races() {
    return aim_races;
  }

  get_edu_aims() {
    const buffer = [],
      races = RaceHistory.get(17).get();

    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.saud_cup, 0, 5));

    buffer.push(check_aim_and_get_entry(races, race_enum.sats_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.toky_yus, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.kiku_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 1, 3));

    buffer.push(check_aim_and_get_entry(races, race_enum.tenn_spr, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 2));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 1));

    return buffer;
  }

  get_personal_action() {
    if (
      era.get('cflag:17:育成回合计时') < 48 * 3 - 1 &&
      era.get('cflag:17:位置') === 0 &&
      era.get('cflag:0:位置') === 0
    ) {
      return {
        name: i18n().kojo[this.id].pa_button,
        handle: () => {
          const edu_marks = new LunaEduMarks();
          edu_marks.want_emperor = 1 - edu_marks.want_emperor;
          const { luna, emperor } = get_luna_talk_tools();
          const chara = get_chara_talk(17);
          era.print(
            (edu_marks.want_emperor === edu_marks.emperor
              ? i18n().kojo[this.id].pa_notify_keep
              : i18n().kojo[this.id].pa_notify_transform)(
              chara,
              luna.id === this.id ? emperor : luna,
            ),
          );
        },
      };
    }
    return {};
  }

  is_aim_race(race, edu_weeks, rank) {
    const ret = super.is_aim_race(race, edu_weeks, rank);
    if (!ret && era.get('flag:当前赛事') > 0) {
      const event_marks = new LunaEduMarks();
      if (
        rank !== undefined &&
        rank <= 5 &&
        rank > 1 &&
        !event_marks.faith_collapse
      ) {
        return ret | 0b10;
      } else if (
        i_emperor() &&
        race_infos[race].race_class === class_enum.G1 &&
        era.get('status:9017:神经衰弱') > 0 &&
        !event_marks.fall_into_hell
      ) {
        return ret | 0b01;
      }
    }
    return ret;
  }
};
