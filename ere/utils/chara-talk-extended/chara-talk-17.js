const CharaTalk = require('#/utils/chara-talk');

const { chara_colors } = require('#/data/chara-colors');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');

module.exports = class extends CharaTalk {
  constructor() {
    super(17);
    if (new LunaEduMarks().emperor) {
      this.set_color(chara_colors[17][1]);
    }
  }
};
