const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      if (era.get(`love:${this.id}`) >= 90) {
        era.set(`callname:${this.id}:0`, '亲爱的');
      } else {
        era.set(`callname:${this.id}:0`, '训练员大人');
      }
    }
  }
};
