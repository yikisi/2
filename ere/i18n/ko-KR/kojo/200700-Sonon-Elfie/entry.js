module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200700-Sonon-Elfie/entry')
) {
  uaf_star = 'U.A.F.의 별';
  uaf_star_desc = (buff, you) =>
    buff
      ? `팀원의 체중 감량 속도가 빨라지며, ${you}의 체력·기력 상한+200.`
      : '팀원의 체중 감량 속도가 빨라진다.';
};
