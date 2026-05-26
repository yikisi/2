const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    if (race_id === race_enum.tenn_spr) {
      return i18n().kojo[this.id].report_tenn_spr(uma.get_colored_name());
    }
    return super.get_race_finish_report(uma, race_id);
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(`callname:${this.id}:0`, 'danna');
    }
  }
};
