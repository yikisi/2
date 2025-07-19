const era = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const check_and_register_aim_race = require('#/event/check/snippets/check-and-register-aim-race');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

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
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 2;

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
    const edu_weeks = era.get('cflag:17:育成回合计时'),
      edu_object = new EventObject(17, cb_enum.edu).set_arg(edu_weeks),
      edu_object_spe = new EventObject(17, cb_enum.edu, true).set_arg(
        edu_weeks,
      );
    if (edu_weeks < 3 * 48) {
      add_event(event_hooks.week_start, edu_object);
      if (
        edu_weeks === 47 + 41 &&
        check_aim_race(RaceHistory.get(17).get(), race_enum.kiku_sho, 1, 1)
      ) {
        add_event(event_hooks.week_end, edu_object_spe);
      } else if (edu_weeks === 95 + 1) {
        add_event(
          event_hooks.out_church,
          new EventObject(17, cb_enum.edu, true),
        );
      } else if (edu_weeks === 95 + 10) {
        add_event(event_hooks.week_end, edu_object_spe);
      }
      check_and_register_aim_race(17, aim_races, edu_weeks);
    } else if (edu_weeks === 143 + 1 || edu_weeks === 143 + 9) {
      add_event(event_hooks.week_start, edu_object);
    }
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
        name: '日月交替',
        handle() {
          const event_marks = new LunaEduMarks();
          event_marks.want_emperor = 1 - event_marks.want_emperor;
          const { luna, emperor } = event_marks.emperor
              ? { luna: 9017, emperor: 17 }
              : { luna: 17, emperor: 9017 },
            aim_talk = get_chara_talk(
              event_marks.want_emperor ? emperor : luna,
            ),
            chara = get_chara_talk(17);
          era.print(
            event_marks.want_emperor === event_marks.emperor
              ? [
                  '下周 ',
                  chara.get_colored_name(),
                  ' 将尝试保持 ',
                  aim_talk.get_colored_name(),
                  ' 形态……',
                ]
              : [
                  '下周 ',
                  chara.get_colored_name(),
                  ' 将尝试转换为 ',
                  aim_talk.get_colored_name(),
                  ' 形态……',
                ],
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
        return 2;
      } else if (
        event_marks.emperor &&
        race_infos[race].race_class === class_enum.G1 &&
        era.get('status:9017:神经衰弱') &&
        !event_marks.fall_into_hell
      ) {
        return 1;
      }
    }
    return ret;
  }
};
