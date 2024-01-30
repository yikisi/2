const era = require('#/era-electron');

const { get_action_base_check } = require('#/system/ero/sys-calc-ero-status');
const sys_call_mec = require('#/system/script/sys-call-mec');

const check_stages = require('#/data/event/check-stages');

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
 * @param {number} chara_id
 * @param {number} supporter
 * @param {number} action
 * @returns {number}
 */
function sys_check_ero_allowed(chara_id, supporter, action) {
  const handler = handlers[action];
  let ret = 0;
  if (handler) {
    ret =
      handler(chara_id, supporter) +
      get_action_base_check(chara_id) +
      Math.max(era.get(`base:${chara_id}:性欲`) - 5000, 0) / 200 -
      7.5 * Math.max(era.get('flag:惩戒力度') - 1, 0);
  }
  ret +=
    sys_call_mec(chara_id, check_stages.mec_ero_check, {
      action,
    }) || 0;
  return ret;
}

module.exports = sys_check_ero_allowed;
