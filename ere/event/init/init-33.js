const { get_random_value } = require('#/utils/value-utils');

const VegaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-33');

module.exports = (is_reset) => {
  if (!is_reset) {
    new VegaEduMarks().meteor = get_random_value(1, 4);
  }
};
