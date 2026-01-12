const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');

/** @type {string[]} */
const ero_action_names = [];
/** @type {EroHookTag[]} */
const ero_tagged_hooks = [];
/** @type {Record<string,boolean>} */
const ero_derive_check = {};

const current = new Date().getTime();

[
  require('#/data/event/tag-actions/tag-communications'),
  require('#/data/event/tag-actions/tag-pettings'),
  require('#/data/event/tag-actions/tag-fuckings'),
  require('#/data/event/tag-actions/tag-sm'),
  require('#/data/event/tag-actions/tag-orgy'),
  require('#/data/event/tag-actions/tag-items'),
].forEach((f) => f(ero_action_names, ero_tagged_hooks, ero_derive_check));

console.log(
  '调教指令注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

/**
 * 色色事件用的钩子，表明是哪个调教行为，在调用口上脚本时会作为参数传入<br/>
 * 也包括和色色相关的事件，包括发现怀孕或者孩子出生<br/>
 * 如果搞不明白可以看钩子的注释、ero-common.js 等通用口上和 ero-result.js 这个通用处理流程
 */
module.exports = {
  ero_derive_check,
  ero_action_names,
  ero_hook_tags: ero_action_tags,
  ero_hooks: ero_actions,
  ero_tagged_hooks,
  ero_actions: Object.keys(ero_action_names).map((e) => Number(e)),
};
