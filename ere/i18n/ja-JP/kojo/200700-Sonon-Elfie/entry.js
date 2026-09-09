module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200700-Sonon-Elfie/entry')
) {
  uaf_star = 'U.A.F.の星';
  uaf_star_desc = (buff, you) =>
    buff
      ? `チームメンバーの減量速度が上がる。${you} の体力・気力上限+200。`
      : 'チームメンバーの減量速度が上がる。';
};
