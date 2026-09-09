module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106100-King-Halo/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/106100-King-Halo/rec-61.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/106100-King-Halo/daily-61.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/106100-King-Halo/edu-61.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/106100-King-Halo/love-61.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/106100-King-Halo/ero-61.kojo');

  gu_mild = '自暴自棄・軽';
  gu_mild_desc =
    '私は、一流の何なの……やる気上限が2段階下がる。\n短距離・マイルで勝つと消える。負けると重くなる。三年の終わりに、まだこの状態なら……';

  gu_moderate = '自暴自棄・中';
  gu_moderate_desc =
    'もう、何も残っていない……やる気上限が3段階下がる。\n短距離・マイルで勝つと軽くなる。負けると重くなる。三年の終わりに、まだこの状態なら……';

  gu_serve = '自暴自棄・重';
  gu_serve_desc =
    'お願い、もう終わらせて！やる気上限が4段階下がる。\n短距離・マイルで勝つと軽くなる。負けたら……三年の終わりに、まだこの状態なら……';
};
