module.exports = class extends (
  require('#/i18n/zh-CN/kojo/104400-Sweep-Tosho/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/rec-44.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/daily-44.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/edu-44.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/love-44.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/ja-JP/kojo/104400-Sweep-Tosho/ero-44.kojo');

  agreement = '大魔法使いの約束';
  agreement_desc =
    'どうやら大事な約束らしい。約束を守るため、やる気が上がっている。';

  cuckold = '「魔法癖」';
  cuckold_desc = '「なんで、なんで魔法癖って呼んじゃいけないの！」';

  report_takz_kin_s = (sweep) => [
    sweep,
    '、',
    sweep,
    'ですか？！！！',
    '強豪たちの壁を越えて、',
    sweep,
    ' が宝塚記念を制しました！',
    'この衝撃的な勝利こそ、『奇跡』の証明です！！',
  ];
  report_eliz_cup_s = (sweep) => [
    sweep,
    '！',
    sweep,
    'です！',
    '実力者たちを打ち破り、優勝！ 本当に強い！',
    'この衝撃、もしかして本当に『魔法』！？',
  ];
};
