module.exports = class extends (
  require('#/i18n/zh-CN/kojo/102100-Tamamo-Cross/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/xx-XX/kojo/102100-Tamamo-Cross/rec-21.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/xx-XX/kojo/102100-Tamamo-Cross/daily-21.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/xx-XX/kojo/102100-Tamamo-Cross/edu-21.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/xx-XX/kojo/102100-Tamamo-Cross/love-21.kojo');
  /** @type {KojoFile} */
  ero = require('#/i18n/xx-XX/kojo/102100-Tamamo-Cross/ero-21.kojo');

  // 经典年三月前 二场OP以上比赛 1着 2次
  aim_desc_1 = '经典年 3 月前 OP 以上比赛 1 着';
  // 资深年前 四场G3以上比赛 1着 4次
  aim_desc_2 = '资深年前 G3 以上比赛 1 着';

  flash = '闪光';
  flash_desc = '白色闪电，开放参与所有比赛';

  lightning = '雷殛';
  lightning_desc =
    '电流衰弱；训练效果-20%，体力精力上限-200，消耗+10%，压力获取+10%';

  thundercloud = '雷云';
  thundercloud_desc = '山雨欲来，目前只能参与 OP 级比赛';

  pilot = '先导';
  pilot_desc = '雷光初成，目前只能参与 OP-G3 级比赛';

  spartan = '斯巴达式';
  spartan_desc = '训练效果+20%，体力精力消耗+5%';

  uma_first = '马娘优先';
  uma_first_desc = '每回合自动提高干劲，体力精力消耗-10%';

  report_tenn_spr = (tama) => [
    {
      color: tama.color,
      content: '名副其实的白色闪电照亮全场，谁还敢瞧不起我！',
    },
    tama,
    {
      color: tama.color,
      content: '！',
    },
  ];
};
