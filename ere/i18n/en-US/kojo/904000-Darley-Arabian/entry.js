module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904000-Darley-Arabian/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/en-US/kojo/904000-Darley-Arabian/rec-340.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/en-US/kojo/904000-Darley-Arabian/love-340.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/en-US/kojo/904000-Darley-Arabian/ero-340.kojo');

  buff = 'Hope';
  buff_desc = (buff) =>
    `Team members' Speed and Power training effectiveness +${buff}%.`;

  bt_pray = '「Oh, Goddess, please help me...」';
};
