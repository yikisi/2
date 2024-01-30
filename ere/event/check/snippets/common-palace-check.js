const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceInfo = require('#/data/race/model/race-info');
const { race_infos, race_enum } = require('#/data/race/race-const');

/** @param {number} chara_id */
function common_palace_check(chara_id) {
  if (era.get(`relation:${chara_id}:0`) <= 0) {
    era.get('flag:极端粉丝').push(chara_id);
  } else {
    /** @type {Record<string,{race:number,rank:number}>} */
    const races = era.get(`cflag:${chara_id}:育成成绩`);
    let g1_count = 0,
      g2_count = 0,
      other_count = 0;
    Object.values(races).forEach((e) => {
      const info = race_infos[e.race];
      if (info.race_class === RaceInfo.class_enum.G1) {
        g1_count += e.rank <= 5;
      } else if (info.race_class === RaceInfo.class_enum.G2) {
        g2_count += e.rank <= 3;
      } else if (e.race !== race_enum.begin_race) {
        other_count += e.rank === 1;
      }
    });
    if (!g1_count && g2_count < 3 && other_count < 5) {
      era.get('flag:极端粉丝').push(chara_id);
    }
  }
}

module.exports = common_palace_check;
