const { set } = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const check_stages = require('#/data/event/check-stages');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

const handlers = {};

handlers[check_stages.mec_callname_customize] = () => {
  set('callname:32:0', '豚鼠君');
};

/** @param {PseudoUma} uma */
handlers[check_stages.mec_race_customize] = (uma) => {
  if (new TachyonEduMarks().uma_limit) {
    uma.attr_buffs.forEach((l, i) => {
      const val = 1200 - uma.attrs[i];
      if (val > 0) {
        l.push(`+${val}[马娘的极限]`);
      }
    });
  }
};

handlers[check_stages.mec_race_register_enabled] = () =>
  !new TachyonEduMarks().plan_b;

handlers[check_stages.mec_status] = () => {
  const edu_marks = new TachyonEduMarks(),
    ret_list = [];
  if (edu_marks.uma_limit) {
    ret_list.push({ color: buff_colors[1], content: '马娘的极限' });
  }
  if (edu_marks.limited) {
    ret_list.push({ color: buff_colors[1], content: '止步于极限的光子' });
  }
  return ret_list;
};

handlers[check_stages.mec_train_buff] = () =>
  new TachyonEduMarks().limited * 50;

handlers[check_stages.mec_train_enabled] = () => {
  const edu_marks = new TachyonEduMarks();
  return !edu_marks.train_stop && !edu_marks.glass_leg;
};

/**
 * @param {number} stage
 * @param {Record<string,*>} extra_flag
 */
module.exports = (stage, extra_flag) => {
  if (!handlers[stage]) {
    throw new Error();
  }
  return handlers[stage](extra_flag);
};
