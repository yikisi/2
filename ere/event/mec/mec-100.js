const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const get_display_name = require('#/utils/calc-display-name');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  set_callname() {
    era.set(
      'callname:100:0',
      i18n().name.chan_template.replace(
        '%NAME%',
        get_display_name(era.get('callname:0:-1')),
      ),
    );
  }
};
