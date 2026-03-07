const I18nStatus = require('#/i18n/zh-CN/table/status');

module.exports = class extends I18nStatus {
  n_status = '状態';

  train_debuff = '練習ベタ';
  train_buff_1 = '練習上手○';
  train_buff_2 = '練習上手◎';

  pg_resume = (t) => `産後(${t})`;
  pg_prebirth = '臨月';
  pg_normal = '妊娠';

  1 = '夜ふかし気味';
  2 = 'なまけ癖';
  3 = '太り気味';
  4 = '片頭痛';
  5 = (t) => `傷病(${t})`;
  6 = (t) => `疲れた(${t})`;

  30 = '生理';
};
