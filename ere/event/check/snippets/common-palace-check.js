const era = require('#/era-electron');

const { sys_push_crazy_fan } = require('#/system/sys-calc-flag');

const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {number} chara_id */
function common_palace_check(chara_id) {
  if (era.get(`relation:${chara_id}:0`) <= 0) {
    sys_push_crazy_fan(chara_id);
  } else {
    let g1_count = 0,
      g2_count = 0,
      other_count = 0;
    new RaceHistory(chara_id).get_values().forEach((e) => {
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
      sys_push_crazy_fan(chara_id);
    }
  }
}

module.exports = common_palace_check;
