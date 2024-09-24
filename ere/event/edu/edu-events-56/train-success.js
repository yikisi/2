const era = require('#/era-electron');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');

/**
 * @param _
 * @param {TrainSuccessParams} extra_flag
 */
module.exports = async (_, extra_flag) => {
  const kitaru = get_chara_talk(56);
  const edu_marks = new FukuEventMarks();

  era.print([kitaru.get_colored_name(), ' 的训练顺利结束了！']);
  era.println();

  if (extra_flag.train + 1 === edu_marks.luck_train) {
    // add to the train
    await kitaru.say_and_wait('是契合运势的选择呢！');
    let luck_add = [1, 1, 1, 1, 1];
    // luck_add[extra_flag.train] = Math.floor(Math.random() * 16 + 5);
    // random 0 -15
    get_attr_and_print_in_event(56, luck_add, 0);
  }
};
