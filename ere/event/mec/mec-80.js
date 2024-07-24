const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:80:0', '训练酱');
    }
  }
};
