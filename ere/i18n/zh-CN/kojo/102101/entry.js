class I18nKojo102101 {
  flash = '闪光';
  flash_desc = '白色闪电，开放参与所有比赛';

  lightning = '雷殛';
  lightning_desc =
    '电流衰弱；训练效果-20%，体力精力上限-200，消耗+10%，压力获取+10%';

  thundercloud = '雷云';
  thundercloud_desc = '山雨欲来，目前只能参与OP级比赛';

  pilot = '先导';
  pilot_desc = '雷光初成，目前只能参与OP-G3级比赛';

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
}

module.exports = I18nKojo102101;
