class I18nKojo904301 {
  /** @type {KojoFile} */
  recruit = require('#/i18n/zh-CN/kojo/904301/rec-343.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/zh-CN/kojo/904301/love-343.kojo');

  dream_chaser = '梦之追逐者';
  dream_chaser_desc = (buff) =>
    buff
      ? '队伍成员海外远征的负面影响减半。'
      : '队伍成员海外远征的负面影响减轻。';
}

module.exports = I18nKojo904301;
