module.exports = class extends (
  require('#/i18n/zh-CN/kojo/100600-Oguri-Cap/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/100600-Oguri-Cap/rec-6.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/100600-Oguri-Cap/daily-6.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/100600-Oguri-Cap/edu-6.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/100600-Oguri-Cap/love-6.kojo');

  // 资深年 1-6月 G1 比赛 3着以内 2次
  aim_desc = '1-6月 G1 比赛 3着以内';

  cinderella = '灰姑娘';
  cinderella_desc =
    '回合开始时压力自动下降到抑郁以下，干劲自动上升到较差以上。';
  latecomer = '迟到者';
  latecomer_desc =
    '育成从经典年开始，无法出赛经典三冠（皋月赏、日本德比、菊花赏）。';
  transfer = (timer) => `转学生 (${timer})`;
  transfer_desc = (timer) => `${timer} 回合内训练效果+100%。`;

  report_arim_kin(oguri) {
    return [
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！高举右手的胜者，正是超级赛马娘 ' },
      oguri,
      { color: oguri.color, content: '！' },
    ];
  }

  palace_race = '拟・日本德比';
};
