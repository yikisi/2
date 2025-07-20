const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { vehicle_enum, vehicle_names } = require('#/data/move-const');

/**
 * @param {number} item
 * @param {number} [vehicle]
 */
async function single_vehicle(item, vehicle = item - 60 + 1) {
  const equipped = era.get('flag:单人载具');
  const item_name = vehicle_names[vehicle];
  if (equipped === vehicle) {
    const ret = await select_yes_or_no(
      `现在正以【${item_name}】作为单人载具！要解除装备吗？`,
    );
    if (ret) {
      await era.printAndWait(`取消装备了【${item_name}】`);
      era.set('flag:单人载具', 0);
    }
  } else {
    const ret = await select_yes_or_no(
      equipped > 0
        ? `现在正以【${vehicle_names[equipped]}】作为单人载具！要换用【${item_name}】吗？`
        : `要装备【${item_name}】吗`,
    );
    if (ret) {
      await era.printAndWait(`装备了【${item_name}】作为单人载具`);
      era.set('flag:单人载具', vehicle);
    }
  }
}

/**
 * @param {number} item
 * @param {number} [vehicle]
 */
async function multiple_vehicle(item, vehicle = item - 60 + 1) {
  const equipped = era.get('flag:多人载具');
  const item_name = vehicle_names[vehicle];
  if (equipped === vehicle) {
    const ret = await select_yes_or_no(
      `现在与他人外出时乘坐【${item_name}】！要解除装备吗？`,
    );
    if (ret) {
      await era.printAndWait(`取消装备了【${item_name}】`);
      era.set('flag:多人载具', 0);
    }
  } else {
    const ret = await select_yes_or_no(
      equipped > 0
        ? `现在与他人外出时乘坐【${vehicle_names[equipped]}】！要换用【${item_name}】吗？`
        : `以后要乘【${item_name}】与其他人外出吗？`,
    );
    if (ret) {
      await era.printAndWait(`装备了【${item_name}】作为多人载具`);
      era.set('flag:多人载具', vehicle);
    }
  }
}

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  new Array(3)
    .fill(0)
    .forEach((_, i) => (handlers[i + 60] = () => single_vehicle(i + 60)));

  new Array(4)
    .fill(0)
    .forEach((_, i) => (handlers[i + 63] = () => multiple_vehicle(i + 63)));

  handlers[112] = () => single_vehicle(112, vehicle_enum.gold_ship);
  handlers[113] = () => multiple_vehicle(113, vehicle_enum.pama);
};
