const era = require('#/era-electron');

const { location_enum } = require('#/data/locations');

// /**
//  * @param {number} chara_id
//  * @param {function(number,number,number):Promise} save_and_next_week
//  * @param {{after_select:boolean,homepage:boolean,week_start:boolean}} flags
//  */
module.exports = async function () {
  era.drawLine();
  await era.printAndWait('TEST');
  await era.printAndWait('在地下室了……等待主人的雷普吧');
  await era.printAndWait('JUMP TO OFFICE');
  era.set('flag:地下室之主', 0);
  era.set('flag:当前位置', location_enum.office);
};
