const era = require('#/era-electron');

const MecNpc = require('#/event/mec/mec-npc');

const { location_enum } = require('#/data/locations');

module.exports = class extends MecNpc {
  set_foreign_debuff(before_race, loc) {
    if (loc !== location_enum.paris) {
      return super.set_foreign_debuff(before_race, loc);
    }
    era.set('status:204:水土不服', 2 - era.get('talent:204:身体素质'));
  }
};
