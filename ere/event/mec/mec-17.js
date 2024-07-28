const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const { buff_colors } = require('#/data/color-const');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  init_love() {
    era.set('love:17', 40 + era.get('flag:马娘初始爱慕'));
  }

  get_love_buff() {
    return 20 * era.get('status:17:迷恋');
  }

  get_love_limit() {
    return era.get('status:17:心术') ? 40 : 0;
  }

  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.kiku_sho) {
      return [
        {
          color: uma.color,
          content: '红色的大朵鲜花在京都的阴云下盛放！',
        },
      ];
    }
    return super.get_race_finish_report(uma, race_id);
  }

  get_relation_buff() {
    return -20 * era.get('status:17:心术');
  }

  get_status() {
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
  }

  get_success_rate_buff() {
    return 5 * (era.get('status:17:皇帝') - era.get('status:17:自毁'));
  }

  get_train_buff() {
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
  }

  set_pseudo_uma(uma) {
    const emperor = era.get('status:17:皇帝'),
      self_destruct = era.get('status:17:自毁'),
      debuff = era.get('status:17:神经衰弱') * !new LunaEduMarks().emperor;
    if (emperor) {
      uma.attr_buffs.forEach((l) => l.push('+2%[皇帝]'));
    }
    if (self_destruct) {
      uma.attr_buffs.forEach((l) => l.push('-5%[自毁]'));
    }
    if (debuff) {
      uma.attr_buffs.forEach((l) =>
        l.push(`-${8 * debuff}%[神经衰弱(${debuff})]`),
      );
    }
  }
};
