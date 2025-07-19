const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const { buff_colors } = require('#/data/color-const');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const LegendUmaFilter = require('#/data/race/model/legend-uma-filter');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  init_love() {
    era.set('love:17', 40 + era.get('flag:马娘初始爱慕'));
  }

  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.hoch_sho:
      case race_enum.sats_sho:
        return [new LegendUmaSelector(65, 1.05)];
      case race_enum.toky_yus:
        return [
          new LegendUmaSelector(57, 1.05),
          new LegendUmaSelector(104, 1.05),
        ];
      case race_enum.arim_kin:
        if (era.get(`cflag:${this.id}:育成回合计时`) < 96) {
          return [
            new LegendUmaSelector(57, 1.05),
            new LegendUmaSelector(104, 1.05),
          ];
        }
        return [
          new LegendUmaFilter(
            '美浦神赞',
            1.05,
            (e) =>
              e.adapt_ground[0] >= 6 &&
              e.adapt_distance[3] >= 6 &&
              e.adapt_style[2] >= 6,
          ).set_image('麦昆_半身'),
        ];
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(57, 1.05)];
      case race_enum.takz_kin:
        if (era.get('cflag:17:育成回合计时') >= 96) {
          return [new LegendUmaSelector(70, 1.05)];
        }
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:17:育成回合计时') >= 96) {
          return [
            new LegendUmaFilter(
              '疾驰戴拿',
              1.05,
              (e) =>
                e.adapt_ground[0] >= 6 &&
                e.adapt_distance[2] >= 5 &&
                e.adapt_style[3] >= 6,
            ).set_image('老爹_半身'),
            new LegendUmaSelector(78, 1.05),
          ];
        }
        break;
      case race_enum.japa_cup:
        if (era.get('cflag:17:育成回合计时') >= 96) {
          return [
            new LegendUmaFilter(
              '疾驰戴拿',
              1.05,
              (e) =>
                e.adapt_ground[0] >= 6 &&
                e.adapt_distance[2] >= 5 &&
                e.adapt_style[3] >= 6,
            ).set_image('老爹_半身'),
            new LegendUmaSelector(6, 1.05),
          ];
        }
    }
    return super.get_race_contestants(info);
  }

  get_love_buff() {
    return 20 * era.get('status:17:迷恋');
  }

  get_love_limit() {
    if (era.get('status:17:心术') > 0) {
      return 40;
    }
    return super.get_love_limit();
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
      ret_list.push({
        color: color_17[0],
        content: '自毁',
        title:
          '对宿命的抗拒使其陷入自我毁灭；训练成功率-5%，训练效果-8%，参赛时属性-5%',
      });
    era.get('status:17:迷恋') &&
      ret_list.push({
        color: color_17[0],
        content: '迷恋',
        title: '对你的汹涌心意已无法再遮掩与克制；初始爱慕+40，爱慕获取+20%',
      });
    era.get('status:17:皇帝') &&
      ret_list.push({
        color: color_17[1],
        content: '皇帝',
        title:
          '君临于此处，跪下；训练成功率+5%，训练效果+4%，参赛时属性+2%，每七回合以此形态活动获得一层[精神损伤]',
      });
    era.get('status:17:心术') &&
      ret_list.push({
        color: color_17[1],
        content: '心术',
        title: '不必揣度，只需臣服；好感获取-20%，爱慕上限为40',
      });
    let debuff_count = era.get('status:17:精神损伤');
    if (debuff_count) {
      ret_list.push({
        color: buff_colors[0],
        content: `精神损伤${debuff_count === 1 ? '' : `(${debuff_count})`}`,
        title: `露娜训练效果-${debuff_count * 5}%，皇帝训练效果+${debuff_count * 3}%；6层[精神损伤]获得[神经衰弱]`,
      });
    }
    era.get('status:17:神经衰弱') &&
      ret_list.push({
        color: buff_colors[3],
        content: '神经衰弱！',
        fontWeight: 'bold',
        title: '已无可挽回……露娜参赛时属性-8%',
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
