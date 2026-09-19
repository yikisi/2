module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904400-Tsurugi-Ryoka/entry')
) {
  photographer = 'Light Chaser';
  photographer_desc = (buff) =>
    buff
      ? 'Spending energy relieves more stress for team members; stress gains -20%.'
      : 'Spending energy relieves more stress for team members.';
};
