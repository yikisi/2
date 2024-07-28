const { get, set } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { buff_colors } = require('#/data/color-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedMec {
  is_race_register_enabled() {
    return !new TachyonEduMarks().plan_b;
  }

  is_train_enabled() {
    const edu_marks = new TachyonEduMarks();
    return !edu_marks.train_stop && !edu_marks.glass_leg;
  }

  set_callname() {
    if (get('cflag:32:招募状态') !== recruit_flags.yes) {
      return super.set_callname();
    }
    set('callname:32:0', '豚鼠君');
  }

  get_status() {
    const edu_marks = new TachyonEduMarks(),
      ret_list = [];
    if (edu_marks.uma_limit) {
      ret_list.push({
        color: buff_colors[1],
        content: '马娘的极限',
        title:
          '马娘的极限，但不是赛马娘爱丽速子的极限；仅限比赛时，全属性极大幅度提升',
      });
    }
    if (edu_marks.limited) {
      ret_list.push({
        color: buff_colors[1],
        content: '止步于极限的光子',
        title:
          '明亮、炙热、耀眼、但也就这样了：这就是赛马娘爱丽速子的极限；训练效果+50%',
      });
    }
    return ret_list;
  }

  get_train_buff() {
    return new TachyonEduMarks().limited * 50;
  }

  set_pseudo_uma(uma) {
    if (new TachyonEduMarks().uma_limit) {
      uma.attr_buffs.forEach((l, i) => {
        const val = 1200 - uma.attrs[i];
        if (val > 0) {
          l.push(`+${val}[马娘的极限]`);
        }
      });
    }
  }
};
