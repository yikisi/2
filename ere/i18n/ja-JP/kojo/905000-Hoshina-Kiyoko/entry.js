module.exports = class extends (
  require('#/i18n/zh-CN/kojo/905000-Hoshina-Kiyoko/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/905000-Hoshina-Kiyoko/daily-350.kojo');

  npc_func = '秘湯療養';

  buff = '療養は奇跡を生む';
  buff_desc = (buff) =>
    buff
      ? 'より十分なやる気で秘湯を整え、最大連続利用回数+1、効力の回復速度とストレス解消を上げ、療養後に受けた者のトレーニング補正を上げる。'
      : '十分なやる気で秘湯を整え、最大連続利用回数+1、効力の回復速度とストレス解消を上げる。';
};
