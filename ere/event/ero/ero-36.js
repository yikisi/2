const era = require('#/era-electron');

const CustomizedEro = require('#/event/ero/ero-common');

const { ero_hook_tags, ero_hooks } = require('#/data/event/ero-hooks');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  set_preference(attacker_parts, defender_parts) {
    defender_parts[ero_hook_tags.anal] = 1;
  }

  filter_in_rape() {
    if (era.get('flag:惩戒力度') >= 2) {
      return (e) =>
        e >= ero_hooks.missionary_anal_sex && e <= ero_hooks.stimulate_womb;
    }
    return super.filter_in_rape();
  }
};
