module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102000-Seiun-Sky/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/102000-Seiun-Sky/rec-20.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/102000-Seiun-Sky/daily-20.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/102000-Seiun-Sky/edu-20.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/102000-Seiun-Sky/love-20.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/xx-XX/kojo/102000-Seiun-Sky/ero-20.kojo');

  radiant = (c) => `容光焕发${c > 1 ? `(${c})` : ''}`;
  radiant_desc = (c) =>
    `体力精力上限+${50 * c}（每层+50），训练获得的技能点数+${c}（每层+1），最高 10 层，每周减少两层。`;

  easy_go = (c) => `自由散漫${c > 1 ? `(${c})` : ''}`;
  easy_go_desc = (c) =>
    `体力精力消耗-${5 * c}%（每层-5%），训练效果-${5 * c}%（每层-5%），最高 10 层，进行非训练/学习类活动时减少一层，小憩和钓鱼时减少二层。`;

  jess = '无形的枷锁';
  jess_desc = '训练效果+100%，体力精力消耗+100%，不会摸鱼。';

  soft_be = '永恒的自由';
  soft_be_desc = '已经不用再努力了；无法训练和参赛。';
};
