const era = require('#/era-electron');

const di18n = require('#/i18n/extended-def');

function date_indicator() {
  // FLAGNAME:1 - 3 = 当前年 - 当前周
  return di18n.get_date_indicator(
    era.get('flag:1'),
    era.get('flag:2'),
    era.get('flag:3'),
  );
}

date_indicator.get_date = () =>
  di18n.get_date(era.get('flag:1'), era.get('flag:2'), era.get('flag:3'));

module.exports = date_indicator;
