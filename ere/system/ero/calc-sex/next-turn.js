const era = require('#/era-electron');

const update_marks = require('#/system/ero/calc-sex/update-marks');
const { update_juels } = require('#/system/ero/sys-calc-juel');
const check_orgasm = require('#/system/ero/sys-calc-orgasm');
const { update_juel_buff } = require('#/system/ero/sys-prepare-ero');

/**
 * next turn and show juels
 * @param {boolean} [shown=true]
 */
async function next_turn(shown = true) {
  era.add('tflag:回合', 1);
  const chara_list = era.getCharactersInTrain();
  await check_orgasm(shown, ...chara_list);
  if (shown) {
    era.println();
  }
  update_juels(shown, ...chara_list);
  if (await update_marks(shown, ...chara_list)) {
    update_juel_buff(...chara_list);
  }
}

module.exports = next_turn;
