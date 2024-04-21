const era = require('#/era-electron');

const sys_call_mec = require('#/system/script/sys-call-mec');
const {
  sys_check_awake,
  sys_check_race_ready,
} = require('#/system/sys-calc-chara-param');

const check_stages = require('#/data/event/check-stages');

module.exports = {
  /**
   * @param {number} chara_id
   * @param {number} race_weeks
   * @param {number} cur_weeks
   */
  generate_race_button(chara_id, race_weeks, cur_weeks) {
    if (race_weeks === cur_weeks) {
      return {
        accelerator: 102,
        config: {
          buttonType: 'danger',
          disabled: !sys_check_race_ready(chara_id) || !sys_check_awake(0),
          width: 6,
        },
        content: '出走比赛',
        type: 'button',
      };
    }
    return {
      accelerator: 102,
      config: {
        disabled:
          !sys_call_mec(chara_id, check_stages.mec_race_register_enabled) &&
          (!era.get(`cflag:${chara_id}:种族`) ||
            (chara_id &&
              (Number(era.get(`cflag:${chara_id}:育成回合计时`)) || 200) >=
                48 * 3)),
        width: 6,
      },
      content: '登记出走',
      type: 'button',
    };
  },
};
