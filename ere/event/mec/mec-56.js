const { buff_colors } = require('#/data/color-const');
const era = require('#/era-electron');
const CustomizedMec = require('#/event/mec/mec-common');

/**
 * 待兼福来 -
 *
 * @author Alex
 *

 */

module.exports = class extends CustomizedMec {
  set_callname() {
    era.set('callname:56:0', '命定之人');
  }

  get_status() {
    const ret = [];

    if (era.get('status:56:运势依赖')) {
      ret.push({ color: buff_colors[1], content: '运势依赖' });
    }
    if (era.get('status:56:大吉')) {
      ret.push({ color: buff_colors[1], content: '大吉' });
    }
    if (era.get('status:56:中吉')) {
      ret.push({ color: buff_colors[1], content: '中吉' });
    }
    if (era.get('status:56:小吉')) {
      ret.push({ color: buff_colors[1], content: '小吉' });
    }
    if (era.get('status:56:凶')) {
      ret.push({ color: buff_colors[3], content: '凶' });
    }
    if (era.get('status:56:创伤后应激障碍')) {
      ret.push({ color: buff_colors[3], content: '创伤后应激障碍' });
    }
    if (era.get('status:56:稳定')) {
      ret.push({ color: buff_colors[1], content: '稳定' });
    }
    return ret;
  }
  /**
    "运势依赖":"今天的运势是什么呢？",
  "大吉": "灵力满溢！训练成功率+10% 所有训练效果+5% 好感获取+10% 参赛时属性+5% ",
  "中吉": "好运气呢！训练成功率+5% 所有训练效果+5% 参赛时属性+3%",
  "小吉": "总之不坏！训练成功率+5% 参赛时属性+1%",
  "凶": "这个时候去安慰福来的话？训练成功率-10% 所有训练效果-10% 参赛时属性-10% 好感获取+20%",
  "创伤后应激障碍":"不得不去面对的阴影。训练成功率-10% 所有训练效果-10% 参赛时属性-10% 干劲上限-3",
  "稳定":"训练员在身边的话，毫无疑问的是大吉呢！训练成功率+10% 所有训练效果+5% 好感获取+10% 参赛时属性+5%"

   */

  get_motivation_limit() {
    return -3 * era.get('status:56:创伤后应激障碍');
  }

  get_success_rate_buff() {
    return (
      10 * era.get('status:56:大吉') +
      5 * era.get('status:56:中吉') +
      5 * era.get('status:56:小吉') -
      10 * era.get('status:56:凶') -
      10 * era.get('status:56:创伤后应激障碍') +
      10 * era.get('status:56:稳定')
    );
  }

  get_train_buff() {
    return (
      5 * era.get('status:56:大吉') +
      5 * era.get('status:56:中吉') -
      10 * era.get('status:56:创伤后应激障碍') +
      5 * era.get('status:56:稳定') -
      10 * era.get('status:56:凶')
    );
  }
  get_relation_buff() {
    return (
      5 * era.get('status:56:大吉') +
      10 * era.get('status:56:凶') +
      5 * era.get('status:56:稳定')
    );
  }

  set_pseudo_uma(uma) {
    if (era.get('status:56:创伤后应激障碍')) {
      uma.attr_buffs.forEach((l) => l.push('-5%[创伤后应激障碍]'));
    }
    if (era.get('status:56:大吉')) {
      uma.attr_buffs.forEach((l) => l.push('+5%[大吉]'));
    }
    if (era.get('status:56:中吉')) {
      uma.attr_buffs.forEach((l) => l.push('+3%[中吉]'));
    }
    if (era.get('status:56:小吉')) {
      uma.attr_buffs.forEach((l) => l.push('+1%[小吉]'));
    }
    if (era.get('status:56:凶')) {
      uma.attr_buffs.forEach((l) => l.push('-5%[凶]'));
    }
    if (era.get('status:56:稳定')) {
      uma.attr_buffs.forEach((l) => l.push('+5%[稳定]'));
    }
  }
};
