module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200600-Dancing-Brave/entry')
) {
  get_rec_enable_notification(brave) {
    return [
      '【中央へ交流に来た ',
      { color: brave.color, content: '優秀なフランスの幼駒' },
      ' がいるらしい。トレーニング場で出会えるかもしれない】',
    ];
  }
};
