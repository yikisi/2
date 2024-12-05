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
   * @param extra_flag
   */
  async run(attacker, defender, hook, extra_flag) {
    const hook_key = ero_hooks.keys[hook.hook];
    let aim, aim_handler;
    if (hook.hook < ero_hooks.pet_ear) {
      aim = this.communications;
      aim_handler = this.communications[hook_key];
    } else if (hook.hook < ero_hooks.missionary) {
      aim = this.making_outs;
      aim_handler = this.making_outs[hook_key];
    } else if (hook.hook < ero_hooks.insult) {
      aim = this.fucking;
      aim_handler = this.fucking[hook_key];
    } else if (hook.hook < ero_hooks.ask_supporter_prepare_virgin) {
      aim = this.sm;
      aim_handler = this.sm[hook_key];
    } else if (hook.hook < ero_hooks.use_lubricating_fluid) {
      aim = this.orgy;
      aim_handler = this.orgy.run;
    } else {
      aim = this.items;
      aim_handler = this.items[hook_key];
    }
    return await aim_handler.call(aim, attacker, defender, hook, extra_flag);
  }
}

module.exports = EroCommandLines;
