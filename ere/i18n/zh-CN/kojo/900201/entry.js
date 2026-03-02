class I18nKojo900201 {
  /** @type {KojoFile} */
  recruit = require('#/i18n/zh-CN/kojo/900201/rec-302.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/zh-CN/kojo/900201/daily-302.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/zh-CN/kojo/900201/edu-302.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/zh-CN/kojo/900201/love-302.kojo');

  chairman = '我系你上司';
  chairman_desc =
    '作为理事长的权利是无限的；通过学园指名招募马娘的声望消耗-25%。';

  npc_talk = '「闲 谈！无聊了来找你玩！」';
  npc_sex = '「做 爱！我想操你！」';
  npc_out = '「约 会！一起出去走走吧！」';
  get_npc_celebration = (celebration) => `「庆 贺！${celebration} 快乐！」`;
  npc_func = '「抗 议！训练场没有想训的爱马！」';
  npc_bye = '「再 会！走了走了！」';

  e_sorrows_of_young_chairman_p1_template = '%TEEN%理事长的烦恼之一';
  e_sorrows_of_young_chairman_p2_template = '%TEEN%理事长的烦恼之二';
}

module.exports = I18nKojo900201;
