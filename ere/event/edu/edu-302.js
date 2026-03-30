const { add, get, println, waitAnyKey } = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_get_billings,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const print_event_name = require('#/event/snippets/print-event-name');

const CustomizedEdu = require('#/event/edu/edu-common');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  /** @param {CharaTalk} taste */
  async annoyance1(taste) {
    new TasteLifeMarks().annoyance = -get_random_value(5, 12);
    EventMarks.get(0).sub(event_hooks.school_chairman);
    const h = i18n().timon.random_events.chairman_annoyance1;
    await print_event_name(
      h.title.replace('%TEEN%', taste.teen_sex_title),
      taste,
    );
    if ((await h(taste))[0] === 1) {
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes)
        .filter((e) => get(`cflag:${e}:育成回合计时`) < 3 * 48)
        .forEach((e) => add(`exp:${e}:技能点数`, 10));
      sys_get_billings().push({ creditor: 302, repay: -10, timer: 4 });
      println();
      sys_like_chara(302, 0, get_random_value(10, 20)) && (await waitAnyKey());
    }
    return true;
  }

  /** @param {CharaTalk} taste */
  async annoyance2(taste) {
    EventMarks.get(0).sub(event_hooks.school_chairman);
    const h = i18n().timon.random_events.chairman_annoyance2;
    await print_event_name(
      h.title.replace('%TEEN%', taste.teen_sex_title),
      taste,
    );
    if ((await h(taste))[0] === 1) {
      println();
      sys_change_attr_and_print(0, attr_enum.tp, -50);
      sys_like_chara(302, 0, get_random_value(40, 60)) && (await waitAnyKey());
    }
    return true;
  }
};
