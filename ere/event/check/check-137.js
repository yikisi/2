const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { attr_change_colors } = require('#/data/color-const');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const aims = [
  [race_enum.kiku_sho, 1, 1, 4],
  [race_enum.takz_kin, 2, 3, 4],
  [race_enum.kyot_dai, 2, 1, 4],
  [race_enum.tenn_sho, 2, 1, 4],
  [race_enum.japa_cup, 2, 2, 4],
  [race_enum.arim_kin, 2, 1, 4],
];
const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aims.forEach((a) => (aim_races[get_aim_race_index(a[0], a[1])] = a[3]));

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (races) =>
    check_aim_race(races, race_enum.kiku_sho, 1, 1, (r) => r.st === 2) &&
    check_aim_race(races, race_enum.japa_cup, 2, 1, (r) => r.st === 0),
  aim_races,
  function (buffer, races) {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    const check = +Object.entries(races).some(
      ([t, r]) =>
        Number(t) <= 47 + 26 &&
        race_infos[r.race].race_class <= class_enum.G3 &&
        r.rank === 1,
    );
    buffer.push({
      champion: true,
      check,
      color: check > 0 ? attr_change_colors.up : attr_change_colors.down,
      current: check.toString(),
      desc: i18n()
        .detail.edu_aim_desc_template.replace('%EDUTIME%', di18n.n_edu[1])
        .replace('%RACE%', i18n().kojo[this.id].aim_desc),
      mark:
        check > 0
          ? i18n().detail.edu_aim_mark_done
          : i18n().detail.edu_aim_mark_no,
      require: i18n().detail.edu_aim_require_template.replace('%REQUIRE%', '1'),
    });
    aims.forEach(([race, year, rank]) =>
      buffer.push(check_aim_and_get_entry(races, race, year, rank)),
    );
  },
);
