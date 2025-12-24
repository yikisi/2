const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');

const CharaTitles = require('#/data/chara-titles');
const { class_enum, track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.hans_fil, 0)] = 4;
aim_races[get_aim_race_index(race_enum.oka_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.yush_him, 1)] = 4;
aim_races[get_aim_race_index(race_enum.quee_sta, 1)] = 4;
aim_races[get_aim_race_index(race_enum.shuk_sho, 1)] = 4;
aim_races[get_aim_race_index(race_enum.sank_hai, 2)] = 4;
aim_races[get_aim_race_index(race_enum.vict_mile, 2)] = 4;
aim_races[get_aim_race_index(race_enum.eliz_cup, 2)] = 4;
aim_races[get_aim_race_index(race_enum.japa_cup, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  () => {},
  (_, race_list) =>
    race_list.findIndex(
      (e) =>
        race_infos[e.race].race_class <= class_enum.G3 &&
        race_infos[e.race].track === track_enum.morioka &&
        e.rank === 1,
    ) !== -1 &&
    CharaTitles.get(29)
      .get()
      .findIndex(
        (t) => t.n === 'r_3crown_f' || t.n === i18n('zh-CN').title.r_3crown_f,
      ) !== -1,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.hans_fil, 0, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.oka_sho, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.yush_him, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.quee_sta, 1, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.shuk_sho, 1, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.sank_hai, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.vict_mile, 2, 3));
    buffer.push(check_aim_and_get_entry(races, race_enum.eliz_cup, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.japa_cup, 2, 1));
  },
);
