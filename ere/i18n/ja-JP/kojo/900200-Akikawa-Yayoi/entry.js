module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900200-Akikawa-Yayoi/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900200-Akikawa-Yayoi/rec-302.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/900200-Akikawa-Yayoi/daily-302.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/900200-Akikawa-Yayoi/love-302.kojo');

  chairman = 'わたくしが上司よ';
  chairman_desc = '理事長の権限は無限。学園指名でのウマ娘募集の名声消費-25%。';

  npc_talk = '「雑 談！暇なら遊びに来なさい！」';
  npc_sex = '「情 事！わたくしが犯してあげる！」';
  npc_out = '「お 出 かけ！一緒に歩きましょう！」';
  get_npc_celebration = (celebration) =>
    `「祝 賀！${celebration}、おめでとう！」`;
  npc_func = '「抗 議！トレしたい愛馬がいない！」';
  npc_bye = '「再 会！行ってくるわよ！」';
};
