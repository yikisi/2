const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  set_callname() {
    era.set(
      'callname:100:0',
      i18n().name.chan_template.replace('%NAME%', era.get('callname:0:-1')),
    );
  }
};
