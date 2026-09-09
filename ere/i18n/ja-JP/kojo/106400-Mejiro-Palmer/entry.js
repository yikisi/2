module.exports = class extends (
  require('#/i18n/zh-CN/kojo/106400-Mejiro-Palmer/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/rec-64.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/daily-64.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/edu-64.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/love-64.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/ero-64.kojo');
  /** @type {KojoFile} */
  basement = require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/base-64.kojo');

  aim_desc = 'クラシック級 6月第2週まで G3以上のレース 1着';

  dependence = '依存心';
  dependence_desc = 'あなただけが……';

  get_basement_info(pama, you, security_level) {
    switch (security_level) {
      case 1:
        return [
          pama.get_colored_name(),
          ' は静かに ',
          you.get_colored_name(),
          ' のそばに座っている。だが、',
          you.get_colored_name(),
          ' がこちらを見る目を、不安げに避けている……',
        ];
      case 2:
        return [
          pama.get_colored_name(),
          ' は不安そうに ',
          you.get_colored_name(),
          ' の顔を見ている。それでも、手を離すつもりはないらしい……',
        ];
      case 3:
        return [
          pama.get_colored_name(),
          ' は相変わらず ',
          you.get_colored_name(),
          ' を見つめ、曖昧に微笑んでいる……',
        ];
      case 4:
        return [
          pama.get_colored_name(),
          ' の顔には、ふわりとした笑みが浮かんでいる。視線を逸らす気配はない……',
        ];
      case 5:
        return [
          '静かな待ち時間。絶え間ない視線。そして……',
          pama.get_colored_name(),
          ' の、悪意のない微笑み……',
        ];
    }
    return [];
  }
};
