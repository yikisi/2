const { get_random_value } = require('#/utils/value-utils');

const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');

module.exports = (is_reset) => {
  if (!is_reset) {
    new GoldShipEduMarks().carrot = get_random_value(1, 4);
  }
};
