module.exports = class extends (
  require('#/i18n/zh-CN/kojo/104400-Sweep-Tosho/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/104400-Sweep-Tosho/rec-44.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/104400-Sweep-Tosho/daily-44.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/104400-Sweep-Tosho/edu-44.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/104400-Sweep-Tosho/love-44.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/xx-XX/kojo/104400-Sweep-Tosho/ero-44.kojo');
  // GENERATED END

  agreement = '大魔法师的约定';
  agreement_desc = '似乎是某个重要的约定。为了遵守约定而干劲高亢。';

  cuckold = '「魔法癖」';
  cuckold_desc = '「为什么，为什么不能叫魔法癖！」';

  report_takz_kin_s = (sweep) => [
    sweep,
    '，是 ',
    sweep,
    ' 吗？！！！',
    '超过了一众强者的壁垒，是 ',
    sweep,
    ' 拿下了宝冢纪念！',
    '这份无比震撼的胜利，无疑是『奇迹』的证明！！',
  ];
  report_eliz_cup_s = (sweep) => [
    sweep,
    '！是 ',
    sweep,
    '！',
    '击败了一众实力派，夺得了冠军！真是太强了！',
    '这强大的冲击，难不成，真的是『魔法』！？',
  ];
};
