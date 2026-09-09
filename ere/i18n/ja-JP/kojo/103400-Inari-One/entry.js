module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103400-Inari-One/entry')
) {
  report_tenn_spr = (inari) => [
    {
      color: inari.color,
      content: '稲荷大神、通る！',
    },
    inari.get_colored_name(),
    {
      color: inari.color,
      content: ' は極めた走りで、天下無双の実力を見せつけた！',
    },
  ];
};
