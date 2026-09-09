module.exports = class extends (
  require('#/i18n/zh-CN/kojo/904900-Tucker-Bryne/entry')
) {
  buff = '投資顧問';
  buff_desc = (buff) =>
    buff
      ? '預けた資金で投資し、毎週かなりの収益を得る。'
      : '預けた資金で投資し、毎週一定の収益を得る。';

  npc_func = '投資・運用';
};
