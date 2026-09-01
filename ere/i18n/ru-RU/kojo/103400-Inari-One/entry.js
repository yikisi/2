module.exports = class extends (
  require('#/i18n/zh-CN/kojo/103400-Inari-One/entry')
) {
  report_tenn_spr = (inari) => [
    {
      color: inari.color,
      content: '稻荷大神要通过了！',
    },
    inari,
    {
      color: inari.color,
      content: ' 用精萃至极的跑法为我们展现了天下无双的实力！',
    },
  ];
};
