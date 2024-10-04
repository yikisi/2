const { get } = require('#/era-electron');

const { get_random_value } = require('#/utils/value-utils');

const VegaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-33');

/**
 * @param {function(number,number?)} init_chara
 * @param {boolean} [is_reset]
 */
module.exports = (init_chara, is_reset) => {
  if (!is_reset && get('cflag:0:模版角色') !== 33) {
    new VegaEduMarks().meteor = get_random_value(1, 4);
  }
};
