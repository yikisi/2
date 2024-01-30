const next_turn = require('#/system/ero/calc-sex/next-turn');
const sys_do_sex = require('#/system/ero/sys-calc-ero');

/**
 * sex and show juels
 * @param {EroParticipant} attacker
 * @param {EroParticipant} defender
 * @param {boolean} [output]
 */
async function quick_make_love(attacker, defender, output) {
  sys_do_sex(attacker, defender);
  await next_turn(output);
}

module.exports = quick_make_love;
