const { get, println, waitAnyKey } = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_random_value } = require('#/utils/value-utils');

const VegaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-33');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  static CHECK = false;

  /**
   * @param {CharaTalk} vega
   * @param {CharaTalk} me
   * */
  async meteor(vega, me) {
    const good_event = Math.random() < 0.5;
    if (
      (
        await print_title_with_kojo(
          i18n().timon.random_events,
          'av_meteor',
          vega,
          me,
          good_event,
        )
      )[0] === 1
    ) {
      const edu_list = sys_filter_chara(
        'cflag',
        '招募状态',
        recruit_flags.yes,
      ).filter((cid) => cid > 0 && get(`cflag:${cid}:育成回合计时`) < 3 * 48);
      let wait_flag;
      println();
      if (good_event) {
        wait_flag = edu_list.reduce(
          (p, c) => sys_change_motivation(c, 1) || p,
          false,
        );
      } else {
        wait_flag = edu_list.reduce(
          (p, c) => sys_change_motivation(c, -1) || p,
          false,
        );
      }
      wait_flag && (await waitAnyKey());
    }
    new VegaEduMarks().meteor = get_random_value(24, 48);
  }
};
