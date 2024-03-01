const { location_enum } = require('#/data/locations');
const { track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const track2location = {};
track2location[track_enum.longchamp] =
  track2location[track_enum.chantilly] =
  track2location[track_enum.st_cloud] =
    { lan: '法', loc: location_enum.paris };
track2location[track_enum.bashang] = {
  lan: '粤',
  loc: location_enum.guangzhou,
};
track2location[track_enum.shatin] = {
  lan: '粤',
  loc: location_enum.hongkong,
};

module.exports = {
  foreign_race_list: Object.values(race_enum).filter(
    (e) => race_infos[e].track >= track_enum.longchamp,
  ),
  track2location,
};
