const CharaTalk = require('#/utils/chara-talk');

const luna_colors = require('#/data/chara-colors').chara_colors[17];
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');

module.exports = class extends CharaTalk {
  get color() {
    if (new LunaEduMarks().emperor > 0) {
      return luna_colors[0];
    }
    return luna_colors[1];
  }
};
