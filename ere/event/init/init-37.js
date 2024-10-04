const CustomizedInit = require('#/event/init/customized-init');

const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');

module.exports = class extends CustomizedInit {
  // eslint-disable-next-line no-unused-vars
  init(init_chara, is_reset) {
    new FlashEduMarks().train_with_festa = 1;
  }
};
