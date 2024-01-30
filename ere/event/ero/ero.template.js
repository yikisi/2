const era = require('#/era-electron');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @type {Record<string, function(hook:HookArg,extra_flag:*):Promise<*>>} */
const handlers = {};

/**
 * 调教事件模版，调教口上写在这里
 * <br>需要命名为ero-(角色id).js才会发挥作用
 * <br>如果想写多人口上有更复杂的用法，问开发者吧
 *
 * @param {HookArg} hook 对应的调教事件钩子，比如是选择了亲吻还是摸胸，具体见eroHooks和钩子的注释
 * <br>一般而言调教事件钩子的口上只需要输出相应文本，或者按需求对因子进行加加减减
 * <br>一些特殊的钩子需要更复杂的处理，比如睡奸就需要手动开启和结束调教，这个问开发者吧
 * <br>如果想自己处理指令影响，而不是使用通用处理（ero-result.js），设置hook.override为true即可
 * <br>可以通过era.get('tflag:主导权')检查当前是谁在主导，以此来区分是主控在点心该角色还是该角色在点心主控
 * @param {any} extra_flag 调教事件钩子传入的额外参数，不同钩子可能传入不同的参数，比如宝宝出生事件就会传入孩子的id
 * @returns {Promise<any>} 返回值，不同的钩子需要不同类型的返回值，比如宝宝出生事件会返回给宝宝取的名字
 */
module.exports = async function (hook, extra_flag) {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported hook!');
  }
  return await handlers[hook.hook](hook, extra_flag);
};
