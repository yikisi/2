const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    era.set(
      'callname:19:0',
      era.get('relation:19:0') > 375 ? '同志' : '训练员',
    );
  }
};
