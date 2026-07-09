module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904900-Tucker-Bryne/entry')
) {
  buff = '投资顾问';
  buff_desc = (buff) =>
    buff > 0
      ? '使用提供的资金进行投资，每周获得可观收益。'
      : '使用提供的资金进行投资，每周获得一定收益。';

  npc_func = '投资理财';
};
