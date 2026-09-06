module.exports = class extends (
  require('#/i18n/zh-CN/kojo/905000-Hoshina-Kiyoko/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/en-US/kojo/905000-Hoshina-Kiyoko/daily-350.kojo');

  npc_func = 'Secluded Hot Spring Therapy';

  buff = 'Miracle Therapy';
  buff_desc = (buff) =>
    buff
      ? 'Manage the hot spring with extra drive: adds +1 max consecutive use, speeds up recovery rate and stress relief, and grants bonus training effectiveness to bathers afterwards.'
      : 'Manage the hot spring with high drive: adds +1 max consecutive use, speeds up recovery rate, and improves stress relief.';
};
