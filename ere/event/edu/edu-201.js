const { println, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_random_value } = require('#/utils/value-utils');

const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  async all_round(meek) {
    await print_title_with_kojo(
      i18n().timon.random_events,
      'all_round_meek',
      meek,
    );
    println();
    let wait_flag = get_attr_and_print_in_event(
      0,
      [0, 0, 0, 0, 3],
      get_random_value(0, 10),
      void 0,
      true,
    );
    wait_flag = sys_like_chara(201, 0, get_random_value(5, 15)) || wait_flag;
    wait_flag && (await waitAnyKey());
    new MeekEduMarks().all_round = get_random_value(36, 60);
  }
};
