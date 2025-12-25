const { get, set } = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const { get_random_value } = require('#/utils/value-utils');

const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const { vehicle_enum } = require('#/data/move-const');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    // CFLAGNAME:90 = 模版角色
    if (!is_reset && get('cflag:0:90') !== 7) {
      new GoldShipEduMarks().carrot = get_random_value(1, 4);
    }
    // ITEMNAME:112 = 小金船号
    set('item:112', 0);
    // FLAGNAME:45 = 单人载具
    if (get('flag:45') === vehicle_enum.gold_ship) {
      set('flag:45', 0);
    }
  }
};
