const { get } = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const { get_random_value } = require('#/utils/value-utils');

const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset && get('cflag:0:模版角色') !== 7) {
      new GoldShipEduMarks().carrot = get_random_value(1, 4);
    }
  }
};
