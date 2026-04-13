const { location_enum } = require('#/data/locations');
const { track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

// ABLNAME:5 - 7 = 粤语 - 法语
/** @type {Record<string,{con:string,lan:number,loc:number}>} */
const track2location = {
  [track_enum.shatin]: {
    con: 'c_china',
    lan: 5,
    loc: location_enum.hongkong,
  },
  [track_enum.bashang]: {
    con: 'c_china',
    lan: 5,
    loc: location_enum.guangzhou,
  },
  [track_enum.shatin]: {
    con: 'c_china',
    lan: 5,
    loc: location_enum.hongkong,
  },
  [track_enum.meydan]: {
    con: 'c_arab',
    lan: 6,
    loc: location_enum.dubai,
  },
};
track2location[track_enum.kentucky] =
  track2location[track_enum.baltimore] =
  track2location[track_enum.new_york] =
  track2location[track_enum.santa_anita] =
  track2location[track_enum.del_mar] =
    { con: 'c_america', lan: 6, loc: location_enum.new_york };
track2location[track_enum.longchamp] =
  track2location[track_enum.chantilly] =
  track2location[track_enum.st_cloud] =
    { con: 'c_france', lan: 7, loc: location_enum.paris };

module.exports = {
  foreign_race_list: Object.values(race_enum).filter(
    (r) => race_infos[r].track >= track_enum.longchamp,
  ),
  track2location,
  location2language: {
    [location_enum.hongkong]: 5,
    [location_enum.guangzhou]: 5,
    [location_enum.dubai]: 6,
    [location_enum.new_york]: 6,
    [location_enum.paris]: 7,
  },
};
