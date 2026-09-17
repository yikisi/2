module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904900-Tucker-Bryne/entry')
) {
  buff = 'Investment Advisor';
  buff_desc = (buff) =>
    buff > 0
      ? 'Invests the supplied funds to generate substantial weekly returns.'
      : 'Invests the supplied funds to generate steady weekly returns.';

  npc_func = 'Manage Investments';
};
