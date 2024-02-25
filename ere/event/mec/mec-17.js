const era = require('#/era-electron');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const { buff_colors } = require('#/data/color-const');
const check_stages = require('#/data/event/check-stages');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');

const handlers = {};

handlers[check_stages.mec_race_buff] = () =>
  2 * era.get('status:17:皇帝') -
  5 * era.get('status:17:自毁') -
  8 * era.get('status:17:神经衰弱') * !new LunaEduMarks().emperor;

handlers[check_stages.mec_status] = () => {
  const ret_list = [];
  era.get('status:17:自毁') &&
    ret_list.push({ color: color_17[0], content: '自毁' });
  era.get('status:17:迷恋') &&
    ret_list.push({ color: color_17[0], content: '迷恋' });
  era.get('status:17:皇帝') &&
    ret_list.push({ color: color_17[1], content: '皇帝' });
  era.get('status:17:心术') &&
    ret_list.push({ color: color_17[1], content: '心术' });
  let debuff_count = era.get('status:17:精神损伤');
  if (debuff_count) {
    ret_list.push({
      color: buff_colors[0],
      content: `精神损伤${debuff_count === 1 ? '' : `(${debuff_count})`}`,
      key: '精神损伤',
    });
  }
  era.get('status:17:神经衰弱') &&
    ret_list.push({
      color: buff_colors[3],
      content: '神经衰弱！',
      fontWeight: 'bold',
      key: '神经衰弱',
    });
  return ret_list;
};

handlers[check_stages.mec_success_rate] = () =>
  5 * (era.get('status:17:皇帝') - era.get('status:17:自毁'));

handlers[check_stages.mec_train_buff] = () => {
  let train_buff = era.get('status:17:精神损伤');
  if (train_buff) {
    if (new LunaEduMarks().emperor) {
      train_buff *= 3;
    } else {
      train_buff *= -5;
    }
  }
  train_buff += 4 * era.get('status:17:皇帝') - 8 * era.get('status:17:自毁');
  return train_buff;
};

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
