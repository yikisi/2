const CustomizedInit = require('#/event/init/customized-init');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

module.exports = class extends CustomizedInit {
  init(init_chara, is_reset) {
    if (!is_reset) {
      init_chara(25);
      new TachyonLifeMarks().first = 2;
    }
  }
};
