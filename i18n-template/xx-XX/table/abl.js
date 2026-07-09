module.exports = class extends require('#/i18n/zh-CN/table/abl') {
  lv_template = 'Lv.%LEVEL%';
  // 这里使用 getter，使 template 和 bordered_template 能正确使用当前语言库的 lv_template
  get template() {
    return `%ABL% ${this.lv_template}`;
  }
  get bordered_template() {
    return `[%ABL%] ${this.lv_template}`;
  }

  5 = '粤语';
  6 = '英语';
  7 = '法语';

  10 = '接吻技巧';
  11 = '口交技巧';
  12 = '乳交技巧';
  13 = '手交技巧';
  14 = '足交技巧';
  15 = '身体技巧';
  16 = '性交技巧';
  17 = '肛交技巧';
  18 = '插入技巧';
  19 = '施虐技巧';

  20 = '口腔掌握';
  21 = '胸部掌握';
  22 = '身体掌握';
  23 = '外阴掌握';
  24 = '阴道掌握';
  25 = '肛门掌握';
  26 = '阴茎掌握';
  27 = '受虐掌握';

  30 = '口腔耐性';
  31 = '胸部耐性';
  32 = '身体耐性';
  33 = '外阴耐性';
  34 = '阴道耐性';
  35 = '肛门耐性';
  36 = '阴茎耐性';
  37 = '受虐耐性';

  40 = '甜言蜜语';
};
