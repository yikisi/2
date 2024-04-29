const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedMec {
  set_foreign_debuff(before_race, loc) {
    super.set_foreign_debuff(before_race, loc);
    if (loc !== location_enum.paris) {
      super.set_foreign_debuff(before_race, loc);
    }
    era.set('status:206:水土不服', 2 - era.get('talent:206:身体素质'));
    before_race && era.set('status:206:客场作战', 2);
  }
};
