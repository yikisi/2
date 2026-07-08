const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (era.get('relation:19:0') > 375) {
      era.set('callname:19:0', ['comrade', 'trainer']);
    } else if (!this.set_callname_from_src()) {
      era.set('callname:19:0', 'trainer');
    }
  }
};
