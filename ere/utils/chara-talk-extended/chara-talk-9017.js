const CharaTalk = require('#/utils/chara-talk');

const EduEventMarks = require('#/data/event/edu-event-marks');

module.exports = class extends CharaTalk {
  constructor() {
    super(9017);
    if (new EduEventMarks(17).get('emperor')) {
      this.set_color(require('#/data/chara-colors')[17][0]);
    }
  }
};
