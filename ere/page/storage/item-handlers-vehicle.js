const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { vehicle_names } = require('#/data/move-const');

async function single_vehicle(item) {
  const equipped = era.get('flag:单人载具');
  const item_name = vehicle_names[item - 750 + 1];
  if (equipped === item - 750 + 1) {
    const ret = await select_yes_or_no(
      `现在正以 ${item_name} 作为单人载具！要解除装备吗？`,
    );
    if (ret) {
      await era.printAndWait(`取消装备了 ${item_name}……`);
      era.set('flag:单人载具', 0);
    }
  } else {
    const ret = await select_yes_or_no(
      equipped
        ? `现在正以 ${vehicle_names[equipped]} 作为单人载具！要换用 ${item_name} 吗？`
        : `要装备 ${item_name} 吗`,
    );
    if (ret) {
      await era.printAndWait(`装备了 ${item_name} 作为单人载具……`);
      era.set('flag:单人载具', item - 750 + 1);
    }
  }
}

async function multiple_vehicle(item) {
  const equipped = era.get('flag:多人载具');
  const item_name = vehicle_names[item - 750 + 1];
  if (equipped === item - 750 + 1) {
    const ret = await select_yes_or_no(
      `现在与他人外出时乘坐 ${item_name}！要解除装备吗？`,
    );
    if (ret) {
      await era.printAndWait(`取消装备了 ${item_name}……`);
      era.set('flag:多人载具', 0);
    }
  } else {
    const ret = await select_yes_or_no(
      equipped
        ? `现在与他人外出时乘坐 ${vehicle_names[equipped]}！要换用 ${item_name} 吗？`
        : `以后要乘 ${item_name} 与其他人外出吗？`,
    );
    if (ret) {
      await era.printAndWait(`装备了 ${item_name} 作为多人载具……`);
      era.set('flag:多人载具', item - 750 + 1);
    }
  }
}

/** @param {Record<string,function>} handlers */
module.exports = (handlers) => {
  new Array(3)
    .fill(0)
    .forEach((_, i) => (handlers[750 + i] = () => single_vehicle(750 + i)));

  new Array(4)
    .fill(0)
    .forEach((_, i) => (handlers[753 + i] = () => multiple_vehicle(753 + i)));
};
