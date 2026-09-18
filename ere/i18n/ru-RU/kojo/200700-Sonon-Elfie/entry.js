module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200700-Sonon-Elfie/entry')
) {
  uaf_star = 'U.A.F.之星';
  uaf_star_desc = (buff, you) =>
    buff
      ? `队伍成员减肥速度加快，${you} 的体力&精力上限+200。`
      : '队伍成员减肥速度加快。';
};
