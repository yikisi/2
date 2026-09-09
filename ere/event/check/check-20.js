const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CustomizedCheck = require('#/event/check/check-common');
const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_color } = require('#/data/chara-colors');
const SkyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-20');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

const aims = [
  [race_enum.hoch_sho, 1, 3, 4],
  [race_enum.sats_sho, 1, 3, 4],
  [race_enum.toky_yus, 1, 3, 4],
  [race_enum.kiku_sho, 1, 1, 4],
  [race_enum.arim_kin, 1, 5, 4],
  [race_enum.nikk_sho, 2, 3, 4],
  [race_enum.tenn_spr, 2, 3, 4],
  [race_enum.sapp_kin, 2, 1, 4],
  [race_enum.tenn_sho, 2, 1, 4],

  [race_enum.sapp_kin, 1, 1, -4],
  [race_enum.tenn_sho, 1, 1, -4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = class extends CustomizedCheck {
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
    edu_marks.action = 0;
    super.check_next_week();
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
};
