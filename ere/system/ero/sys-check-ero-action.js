const era = require('#/era-electron');

const { get_action_base_check } = require('#/system/ero/sys-calc-ero-status');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const current = new Date().getTime();

/** @type {Record<string,function(number,number):number>} */
const handlers = {};

[
  require('#/system/ero/action-checker/check-communications'),
  require('#/system/ero/action-checker/check-pettings'),
  require('#/system/ero/action-checker/check-fuckings'),
  require('#/system/ero/action-checker/check-sm-items'),
].forEach((f) => f(handlers));

console.log(
  '[sys-check-ero-action.js] ero action checkers init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * @param {number} id
 * @param {number} supporter
 * @param {number} action
 * @returns {number}
 */
function sys_check_ero_allowed(id, supporter, action) {
  const slave = era.get(`mark:${id}:淫纹`);
  if (slave > 0) {
    return slave * 10 - 9;
  }
  const handler = handlers[action];
  let ret = 0;
  if (handler) {
    ret =
      handler(id, supporter) +
      get_action_base_check(id) +
      Math.max(era.get(`base:${id}:性欲`) - 5000, 0) / 200 -
      7.5 * Math.max(era.get('flag:惩戒力度') - 1, 0);
  }
  ret += get_custom_mec(id).get_ero_check(action) || 0;
  return ret;
}

module.exports = sys_check_ero_allowed;
