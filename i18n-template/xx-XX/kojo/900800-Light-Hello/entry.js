module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900800-Light-Hello/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/900800-Light-Hello/rec-308.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/900800-Light-Hello/edu-308.kojo');

  dreamer = '梦之开拓者';
  dreamer_desc = (buff) =>
    buff
      ? '队伍成员参加大舞台赛事时声望奖励+100%，自身及后裔参赛时+200%。'
      : '自身及后裔参加大舞台赛事时声望奖励+100%。';

  dreamer_junior = '梦之继承者';
  dreamer_junior_desc = (buff) => `参加大舞台比赛时声望奖励+${buff}%。`;
};
