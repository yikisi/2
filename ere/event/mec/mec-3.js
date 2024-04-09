const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const check_stages = require('#/data/event/check-stages');
const { race_infos, race_enum } = require('#/data/race/race-const');

const handlers = {};

handlers[check_stages.mec_action_debuff] = handlers[
  check_stages.mec_pressure_buff
] = () => 0.1 * era.get('status:3:腿伤');

handlers[check_stages.mec_callname_customize] = () => {
  if (era.get('relation:3:0') > 375) {
    era.set('callname:3:0', '训\\练/员');
  } else {
    era.set('callname:3:0', '训练员');
  }
};

handlers[check_stages.mec_maxbase_buff] = () => -200 * era.get('status:3:腿伤');

handlers[check_stages.mec_race_cloth] = () => {
  if (
    !era.get('status:3:腿伤') ||
    era.get('cflag:3:育成回合计时') !==
      race_infos[race_enum.arim_kin].date + 95 ||
    era.get('flag:当前赛事') !== race_enum.arim_kin
  ) {
    throw new Error();
  }
  return ['帝王2'];
};

handlers[check_stages.mec_status] = () => {
  if (era.get('status:3:腿伤')) {
    return [
      {
        color: buff_colors[3],
        content: '腿伤！',
        fontWeight: 'bold',
        key: '腿伤',
      },
    ];
  }
  return [];
};

handlers[check_stages.mec_train_buff] = () => -20 * era.get('status:3:腿伤');

/**
 * @param {number} stage_id
 * @param extra_flag
 */
module.exports = (stage_id, extra_flag) => {
  if (!handlers[stage_id]) {
    throw new Error('unsupported stage!');
  }
  return handlers[stage_id](extra_flag);
};
