const I18nKojo100600 = require('#/i18n/zh-CN/kojo/100600-Oguri-Cap/entry');

module.exports = class extends I18nKojo100600 {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/rec-6.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/daily-6.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/edu-6.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/100600-Oguri-Cap/love-6.kojo');

  aim_desc = '1〜6月のG1で3着以内';

  cinderella = 'シンデレラ';
  cinderella_desc =
    'ターン開始時、ストレスがうつ以下まで自動で下がり、やる気が不調以上まで自動で上がる。';
  latecomer = '遅れてきた者';
  latecomer_desc =
    '育成はクラシック級から始まり、クラシック三冠（皐月賞、日本ダービー、菊花賞）には出走できない。';
  transfer = (timer) => `転入生 (${timer})`;
  transfer_desc = (timer) => `${timer} ターンの間、トレーニング効果+100%。`;

  report_arim_kin(oguri) {
    return [
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      { color: oguri.color, content: ' 一着！' },
      oguri,
      {
        color: oguri.color,
        content: ' 一着！右手を高く掲げた勝者、スーパーウマ娘 ',
      },
      oguri,
      { color: oguri.color, content: '！' },
    ];
  }

  palace_race = '擬・日本ダービー';
};
