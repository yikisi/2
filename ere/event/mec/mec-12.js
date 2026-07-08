const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(
        `callname:${this.id}:0`,
        era.get('cflag:0:0') === 1 ? 'trainer12' : 'trainer',
      );
    }
  }
};
