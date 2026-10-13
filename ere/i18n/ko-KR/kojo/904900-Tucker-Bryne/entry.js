module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904900-Tucker-Bryne/entry')
) {
  buff = '투자 고문';
  buff_desc = (buff) =>
    buff
      ? '맡겨 둔 자금으로 투자하여 매주 상당한 수익을 얻는다.'
      : '맡겨 둔 자금으로 투자하여 매주 일정한 수익을 얻는다.';

  npc_func = '투자';
};
