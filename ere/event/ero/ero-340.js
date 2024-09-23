/**
 * @file 达利阿拉伯 - 调教
 *
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @type {Record<string, function(hook:HookArg,extra_flag:*):Promise<*>>} */
const handlers = {};

/**
 * @param _
 * @param {{father_id:number,mother_id:number,shown:boolean}} extra_flag
 */
handlers[ero_hooks.cum_in_womb] = async (
  _,
  { father_id, mother_id, shown },
) => {
  if (!shown) {
    return;
  }
  if (father_id || !sys_check_awake(mother_id)) {
    throw new Error();
  }
  const god = get_chara_talk(mother_id);
  await era.printAndWait([
    '在感到温热的精液充盈子宫后，',
    god.get_colored_name(),
    ' 露出了玩味的表情……',
  ]);
};

/**
 * @param {HookArg} hook
 * @param extra_flag
 */
module.exports = async (hook, extra_flag) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported hook!');
  }
  return await handlers[hook.hook](hook, extra_flag);
};
