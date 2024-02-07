const { buff_colors } = require('#/data/color-const');
const check_stages = require('#/data/event/check-stages');
const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');

const handlers = {};

handlers[check_stages.mec_action_debuff] = () => 0.2 * new MaEduMarks().mygo;

handlers[check_stages.mec_motivation] = () => -2 * new MaEduMarks().mygo;

handlers[check_stages.mec_status] = () => {
  if (new MaEduMarks().mygo) {
    return [
      {
        color: buff_colors[3],
        content: '迷茫',
        fontWeight: 'bold',
      },
    ];
  }
  return [];
};

handlers[check_stages.mec_train_buff] = () => -15 * new MaEduMarks().mygo;

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
