const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

/** @param {string} name */
function print_ero_gif(name) {
  sys_check_awake(0) &&
    era.printWholeImage(name, {
      width: 8,
    });
}

module.exports = print_ero_gif;
