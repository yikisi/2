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

date_indicator.get_date = (
  year = era.get('flag:1'),
  month = era.get('flag:2'),
  week = era.get('flag:3'),
) => di18n.get_date(year, month, week);

date_indicator.get_date_obj = () => ({
  y: era.get('flag:1').toString(),
  m: era.get('flag:2').toString(),
  w: era.get('flag:3').toString(),
});

module.exports = date_indicator;
