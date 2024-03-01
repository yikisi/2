const era = require('#/era-electron');

const {
  sys_check_race_ready,
  sys_check_awake,
} = require('#/system/sys-calc-chara-param');

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
          !era.get(`cflag:${chara_id}:种族`) ||
          (chara_id &&
            cur_weeks - era.get(`cflag:${chara_id}:育成回合计时`) >= 48 * 3),
        width: 6,
      },
      content: '登记出走',
      type: 'button',
    };
  },
};
