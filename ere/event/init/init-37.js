const CustomizedInit = require('#/event/init/customized-init');

const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');

module.exports = class extends CustomizedInit {
  init() {
    new FlashEduMarks().train_with_festa = 1;
  }
};
