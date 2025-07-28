const { ero_hooks } = require('#/data/event/ero-hooks');

class EroCommandLines {
  /** @type {CustomizedEro} */
  root;
  /** @type {EroCommunications} */
  communications;
  /** @type {EroMakingOuts} */
  making_outs;
  /** @type {EroFucking} */
  fucking;
  /** @type {EroSm} */
  sm;
  /** @type {EroOrgy} */
  orgy;
  /** @type {EroItems} */
  items;

  /** @param {CustomizedEro} root */
  constructor(root) {
    this.root = root;
  }

  get id() {
    return this.root.id;
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra
   * @param [this_param]
   */
  async run(attacker, defender, hook, extra, this_param) {
    const hook_key = ero_hooks.keys[hook.hook];
    let aim, aim_handler;
    if (hook.hook < ero_hooks.pet_ear) {
      aim = this.communications.get_this(this_param);
      aim_handler = aim[hook_key];
    } else if (hook.hook < ero_hooks.missionary) {
      aim = this.making_outs.get_this(this_param);
      aim_handler = aim[hook_key];
    } else if (hook.hook < ero_hooks.insult) {
      aim = this.fucking.get_this(this_param);
      aim_handler = aim[hook_key];
    } else if (hook.hook < ero_hooks.ask_supporter_prepare_virgin) {
      aim = this.sm.get_this(this_param);
      aim_handler = aim[hook_key];
    } else if (hook.hook < ero_hooks.use_lubricating_fluid) {
      aim = this.orgy.get_this(this_param);
      aim_handler = aim.run;
    } else {
      aim = this.items.get_this(this_param);
      aim_handler = aim[hook_key];
    }
    return await aim_handler.call(aim, attacker, defender, hook, extra);
  }
}

module.exports = EroCommandLines;
