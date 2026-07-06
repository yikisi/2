const era = require('#/era-electron');

const CustomizedEro = require('#/event/ero/ero-common');

const { ero_hook_tags, ero_hooks } = require('#/data/event/ero-hooks');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  set_preference(attacker_parts, defender_parts) {
    defender_parts[ero_hook_tags.tongue] = 1;
  }

  filter_in_rape() {
    if (era.get('flag:惩戒力度') >= 2) {
      return (e) =>
        e === ero_hooks.force_blow_job ||
        e === ero_hooks.force_deep_blow_job ||
        e === ero_hooks.force_hand_and_blow_job ||
        e === ero_hooks.fuck_tit_and_mouth ||
        e === ero_hooks.sixty_nine ||
        e === ero_hooks.spit_roast ||
        e === ero_hooks.spit_roast_anal_sex;
    }
    return super.filter_in_rape();
  }
};
