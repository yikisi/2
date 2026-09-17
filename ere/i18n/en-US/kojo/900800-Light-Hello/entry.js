module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900800-Light-Hello/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/900800-Light-Hello/rec-308.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/en-US/kojo/900800-Light-Hello/edu-308.kojo');

  dreamer = 'Dream Pioneer';
  dreamer_desc = (buff) =>
    buff
      ? 'Reputation rewards +100% when team members compete in Grand Live races, or +200% when self or descendants compete.'
      : 'Reputation rewards +100% when self or descendants compete in Grand Live races.';

  dreamer_junior = 'Heir to the Dream';
  dreamer_junior_desc = (buff) =>
    `Reputation rewards from Grand Live races +${buff}%.`;
};
