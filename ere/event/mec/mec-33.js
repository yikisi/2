const CustomizedMec = require('#/event/mec/mec-common');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_race_finish_report(uma, race_id) {
    const ret = super.get_race_finish_report(uma, race_id);
    if (ret) {
      return ret;
    }
    return i18n().kojo[this.id].report_common_win(uma.get_colored_name());
  }
};
