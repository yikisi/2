module.exports = class extends (
  require('#/i18n/zh-CN/kojo/200400-Montjeu/entry')
) {
  get_visit_notification(montjeu) {
    return [
      '【中央へ交流に来る ',
      {
        color: montjeu.color,
        content: `フランスの伝説的な${montjeu.uma_sex_title}`,
      },
      ' がいるらしい。応接室で出会えるかもしれない】',
    ];
  }
};
