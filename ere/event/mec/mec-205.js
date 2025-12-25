const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:205:0', 'trainer');
    }
  }

  set_foreign_debuff(before_race, loc) {
    if (loc !== location_enum.paris) {
      return super.set_foreign_debuff(before_race, loc);
    }
    era.set('status:205:水土不服', 2 - era.get('talent:205:身体素质'));
  }
};
