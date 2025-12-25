const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      if (era.get(`love:${this.d}`) >= 90) {
        era.set(`callname:${this.id}:0`, 'dear');
      } else {
        era.set(`callname:${this.id}:0`, 'trainer74');
      }
    }
  }
};
