const { get } = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  /**
   * @param {CharaTalk} may
   * @param {CharaTalk} me
   * @param _
   * @param {HookArg} hook
   * @param __
   * @param {EventObject} ebj
   */
  async welcome(may, me, _, hook, __, ebj) {
    // CFLAGNAME:45 = 位置
    if (get('cflag:0:45') > 0) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(i18n().kojo[this.id].recruit, 'welcome', may, {
      ...generate_dictionary(this.id, {
        phy: !0,
        uma: !0,
      }),
      A_NAME: get_chara_talk(301).name,
      CHARA_ACTUAL: may.actual_name,
      who_am_i: new MayLifeMarks().who_am_i,
    });
  }
};
