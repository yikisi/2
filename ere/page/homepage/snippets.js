const era = require('#/era-electron');

const {
  sys_check_awake,
  sys_check_race_ready,
} = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');

const { i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {number} cid
   * @param {number} race_week
   * @param {number} cur_weeks
   */
  generate_race_button(cid, race_week, cur_weeks) {
    if (race_week === cur_weeks) {
      return {
        accelerator: 102,
        config: {
          buttonType: 'danger',
          disabled: !sys_check_race_ready(cid) || !sys_check_awake(0),
          width: 6,
        },
        content: i18n().ui_goto_race,
        type: 'button',
      };
    }
    // CFLAGNAME:48 = 育成回合计时
    const edu_weeks = era.get(`cflag:${cid}:48`);
    return {
      accelerator: 102,
      config: {
        buttonType: EventMarks.get(0).check(event_hooks.register_race)
          ? 'danger'
          : 'warning',
        disabled:
          !get_custom_mec(cid).is_race_register_enabled() ||
          // CFLAGNAME:1 = 种族
          !era.get(`cflag:${cid}:1`) ||
          (cid > 0 &&
            (typeof edu_weeks !== 'number' ||
              era.get(`cflag:${cid}:48`) >= 48 * 3)),
        width: 6,
      },
      content: i18n().ui_register_race,
      type: 'button',
    };
  },
};
