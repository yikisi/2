const era = require('#/era-electron');

const MecChild = require('#/event/mec/mec-child');

module.exports = class extends MecChild {
  set_callname() {
    // CFLAGNAME:15 - 16 = 父方角色 - 母方角色
    const father = era.get(`cflag:${this.id}:15`);
    const mother = era.get(`cflag:${this.id}:16`);
    if (father + mother === 33 && father * mother === 0) {
      if (father === 0) {
        era.set(`callname:${this.id}:0`, 'elder_brother');
      } else {
        era.set(`callname:${this.id}:0`, 'elder_sister');
      }
      // CFLAGNAME:0 = 性别
      if (era.get('cflag:33:0') === 1) {
        era.set(`callname:${this.id}:33`, 'elder_brother');
      } else {
        era.set(`callname:${this.id}:33`, 'elder_sister');
      }
    } else {
      return super.set_callname();
    }
  }
};
