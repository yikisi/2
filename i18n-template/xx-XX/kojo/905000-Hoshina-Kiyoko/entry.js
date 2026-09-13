module.exports = class extends (
  require('#/i18n/zh-CN/kojo/905000-Hoshina-Kiyoko/entry')
) {
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/905000-Hoshina-Kiyoko/daily-350.kojo');

  npc_func = '秘汤疗养';

  buff = '疗养创造奇迹';
  buff_desc = (buff) =>
    buff
      ? '以更充足的干劲打理秘汤，增加 1 次最大连续使用次数，提高效力恢复速度和消解压力效果，并在疗养后提高受疗养者的训练加成。'
      : '以充足的干劲打理秘汤，增加 1 次最大连续使用次数，提高效力恢复速度和消解压力效果。';
};
