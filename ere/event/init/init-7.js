const { get, set } = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const { get_random_value } = require('#/utils/value-utils');

const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const { vehicle_enum } = require('#/data/move-const');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset && get('cflag:0:模版角色') !== 7) {
      new GoldShipEduMarks().carrot = get_random_value(1, 4);
    }
    set('item:小金船号', 0);
    if (get('flag:单人载具') === vehicle_enum.gold_ship) {
      set('flag:单人载具', 0);
    }
  }
};
