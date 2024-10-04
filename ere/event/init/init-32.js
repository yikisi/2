const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/**
 * @param {function(number,number?)} init_chara
 * @param {boolean} [is_reset]
 */
module.exports = (init_chara, is_reset) => {
  if (!is_reset) {
    init_chara(25);
    new TachyonLifeMarks().first = 2;
  }
};
