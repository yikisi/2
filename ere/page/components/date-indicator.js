const era = require('#/era-electron');

function date_indicator() {
  return [
    { content: era.get('flag:当前年'), fontWeight: 'bold' },
    ' 年 ',
    { content: era.get('flag:当前月'), fontWeight: 'bold' },
    ' 月 第 ',
    { content: era.get('flag:当前周'), fontWeight: 'bold' },
    ' 周',
  ];
}

module.exports = date_indicator;
