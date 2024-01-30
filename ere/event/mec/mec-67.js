const era = require('#/era-electron');

const check_stages = require('#/data/event/check-stages');
const { race_enum } = require('#/data/race/race-const');

const handlers = {};

handlers[check_stages.mec_race_cloth] = () => {
  if (era.get('flag:当前赛事') !== race_enum.prix_lat) {
    throw new Error();
  }
  return ['光钻2'];
};

/**
 * @param {number} stage_id
 * @param extra_flag
 */
module.exports = (stage_id, extra_flag) => {
  if (!handlers[stage_id]) {
    throw new Error('unsupported stage!');
  }
  return handlers[stage_id](extra_flag);
};
