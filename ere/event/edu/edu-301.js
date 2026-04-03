const { println, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} me
   */
  async shadow(minoru, me) {
    const life_marks = new TokinoLifeMarks();
    await print_title_with_kojo(
      i18n().timon.random_events,
      'shadow_minoru',
      minoru,
      get_chara_talk(10),
      me,
      life_marks.who_am_i >= 1,
    );
    println();
    let wait_flag = sys_like_chara(10, 0, get_random_value(5, 15));
    wait_flag = sys_like_chara(301, 0, get_random_value(5, 15)) || wait_flag;
    wait_flag && (await waitAnyKey());
    life_marks.shadow = get_random_value(36, 60);
  }
};
