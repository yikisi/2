const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedMec {
  set_foreign_debuff(before_race, loc) {
    if (loc !== location_enum.paris) {
      return super.set_foreign_debuff(before_race, loc);
    }
    era.set('status:204:水土不服', 2 - era.get('talent:204:身体素质'));
  }
};
