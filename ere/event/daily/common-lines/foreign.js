const era = require('#/era-electron');

const event_hooks = require('#/data/event/event-hooks');

/** @param {Record<string,function(number,HookArg,*):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[event_hooks.foreign_study] = async () => {};

  handlers[event_hooks.foreign_rest] = async () => {};

  handlers[event_hooks.foreign_train] = async () => {};

  handlers[event_hooks.foreign_travel] = async () => {};
};
