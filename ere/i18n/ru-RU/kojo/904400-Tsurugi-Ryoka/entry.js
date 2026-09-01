module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904400-Tsurugi-Ryoka/entry')
) {
  photographer = '光影捕手';
  photographer_desc = (buff) =>
    buff
      ? '队伍成员消耗精力减压效果提高，压力值获取-20%。'
      : '队伍成员消耗精力减压效果提高。';
};
