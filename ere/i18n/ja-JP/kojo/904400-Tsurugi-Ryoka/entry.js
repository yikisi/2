module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904400-Tsurugi-Ryoka/entry')
) {
  photographer = '光を追う者';
  photographer_desc = (buff) =>
    buff
      ? 'チームメンバーの気力消費によるストレス解消が効きやすく、ストレス取得-20%。'
      : 'チームメンバーの気力消費によるストレス解消が効きやすい。';
};
