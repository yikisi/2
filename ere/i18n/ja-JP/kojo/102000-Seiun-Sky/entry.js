module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102000-Seiun-Sky/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/rec-20.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/daily-20.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/edu-20.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/love-20.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/102000-Seiun-Sky/ero-20.kojo');

  radiant = (c) => `艶やか${c > 1 ? `(${c})` : ''}`;
  radiant_desc = (c) =>
    `体力・気力上限+${50 * c}（1層につき+50）、トレーニングで得るスキルPt+${c}（1層につき+1）。最大10層。毎週2層減る。`;

  easy_go = (c) => `自由気まま${c > 1 ? `(${c})` : ''}`;
  easy_go_desc = (c) =>
    `体力・気力消費-${5 * c}%（1層につき-5%）、トレーニング効果-${5 * c}%（1層につき-5%）。最大10層。トレーニング／勉強以外の行動で1層減り、小休憩と釣りでは2層減る。`;

  jess = '見えない枷';
  jess_desc = 'トレーニング効果+100%、体力・気力消費+100%。サボらない。';

  soft_be = '永遠の自由';
  soft_be_desc = 'もう頑張らなくていい。トレーニングも出走もできない。';
};
