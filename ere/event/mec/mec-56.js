const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const CharaTalk = require('#/utils/chara-talk');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors, motivation_colors } = require('#/data/color-const');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!super.set_callname_from_src()) {
      if (era.get('love:56') < 75) {
        return super.set_callname();
      }
      era.set('callname:56:0', [
        '命定之人',
        `训练员${CharaTalk.me.get_adult_sex_title()}`,
      ]);
    }
  }

  get_status(show_train_buff) {
    const ret = [];
    if (show_train_buff) {
      if (era.get('status:56:运势依赖')) {
        ret.push({
          color: get_chara_color(56),
          content: '运势依赖',
          title: '今天的运势是什么呢？',
        });
      }
      if (era.get('status:56:大吉')) {
        ret.push({
          color: motivation_colors.at(-1),
          content: '大吉',
          title:
            '灵力满溢！训练成功率+10%，所有训练效果+5%，好感获取+10%，参赛时属性+5%',
        });
      }
      if (era.get('status:56:中吉')) {
        ret.push({
          color: motivation_colors.at(-2),
          content: '中吉',
          title: '好运气呢！训练成功率+5%，所有训练效果+5%，参赛时属性+3%',
        });
      }
      if (era.get('status:56:小吉')) {
        ret.push({
          color: motivation_colors.at(-3),
          content: '小吉',
          title: '总之不坏！训练成功率+5%，参赛时属性+1%',
        });
      }
      if (era.get('status:56:凶')) {
        ret.push({
          color: motivation_colors.at(-4),
          content: '凶',
          title:
            '这个时候去安慰福来的话？训练成功率-10%，所有训练效果-10%，参赛时属性-10%，好感获取+20%',
        });
      }
      if (era.get('status:56:PTSD')) {
        ret.push({
          color: buff_colors[3],
          content: 'PTSD',
          title:
            '不得不去面对的阴影。训练成功率-10%，所有训练效果-10%，参赛时属性-10%，干劲上限-3',
        });
      }
      if (era.get('status:56:稳定')) {
        ret.push({
          color: buff_colors[1],
          content: '稳定',
          title:
            '训练员在身边的话，毫无疑问的是大吉呢！训练成功率+10%，所有训练效果+5%，好感获取+10%，参赛时属性+5%',
        });
      }
    }
    return ret;
  }

  get_motivation_limit() {
    return -3 * era.get('status:56:PTSD');
  }

  get_success_rate_buff() {
    return (
      10 * era.get('status:56:大吉') +
      5 * era.get('status:56:中吉') +
      5 * era.get('status:56:小吉') -
      10 * era.get('status:56:凶') -
      10 * era.get('status:56:PTSD') +
      10 * era.get('status:56:稳定')
    );
  }

  get_train_buff() {
    return (
      5 * era.get('status:56:大吉') +
      5 * era.get('status:56:中吉') -
      10 * era.get('status:56:PTSD') +
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
    if (era.get('status:56:PTSD')) {
      uma.attr_buffs.forEach((l) => l.push('-5%[PTSD]'));
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
