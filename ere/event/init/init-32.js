const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

module.exports = (is_reset) => {
  if (!is_reset) {
    new TachyonLifeMarks().first = 2;
  }
};
