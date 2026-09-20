module.exports = class extends (
  require('#/i18n/zh-CN/kojo/900800-Light-Hello/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/900800-Light-Hello/rec-308.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/900800-Light-Hello/edu-308.kojo');

  dreamer = '夢の開拓者';
  dreamer_desc = (buff) =>
    buff
      ? 'チームメンバーが大舞台に出走したときの名声報酬+100%。自身と子孫は+200%。'
      : '自身と子孫が大舞台に出走したときの名声報酬+100%。';

  dreamer_junior = '夢の継承者';
  dreamer_junior_desc = (buff) => `大舞台出走時の名声報酬+${buff}%。`;
};
