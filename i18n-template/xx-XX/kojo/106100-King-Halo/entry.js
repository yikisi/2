module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106100-King-Halo/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/106100-King-Halo/rec-61.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/106100-King-Halo/daily-61.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/106100-King-Halo/edu-61.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/106100-King-Halo/love-61.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/xx-XX/kojo/106100-King-Halo/ero-61.kojo');

  gu_mild = '自暴自弃·轻';
  gu_mild_desc =
    '我算什么一流……干劲上限下降二阶段。\n短距离、英里赛事获胜后消失，失败后加重。如果在三年结束时还是这个状态的话……';

  gu_moderate = '自暴自弃·中';
  gu_moderate_desc =
    '我什么都没有了……干劲上限下降三阶段。\n短距离、英里赛事获胜后减轻，失败后加重。如果在三年结束时还是这个状态的话……';

  gu_serve = '自暴自弃·重';
  gu_serve_desc =
    '求求你，让这一切结束吧！干劲上限下降四阶段。\n短距离、英里赛事获胜后减轻，失败后……如果在三年结束时还是这个状态的话……';
};
