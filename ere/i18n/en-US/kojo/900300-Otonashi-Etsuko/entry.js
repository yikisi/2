module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900300-Otonashi-Etsuko/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/900300-Otonashi-Etsuko/rec-303.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/en-US/kojo/900300-Otonashi-Etsuko/love-303.kojo');

  reporter = 'Dedicated Reporter';
  reporter_desc = (buff) =>
    `Reputation gains +${buff}%; reputation losses -${buff}%.`;

  npc_func = 'Grant More Access (Recruit)';
};
