const era = require('#/era-electron');

const check_stages = require('#/data/event/check-stages');
const { location_enum } = require('#/data/locations');

const handlers = {};

/** @param {{loc:number}} extra_flag */
handlers[check_stages.mec_foreign_debuff] = (extra_flag) => {
  if (extra_flag.loc !== location_enum.paris) {
    throw new Error();
  }
  era.set('status:206:水土不服', 2 - era.get('talent:206:身体素质'));
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
