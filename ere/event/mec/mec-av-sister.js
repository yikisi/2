const era = require('#/era-electron');

const MecChild = require('#/event/mec/mec-child');

module.exports = class extends MecChild {
  set_callname() {
    const father = era.get(`cflag:${this.id}:父方角色`),
      mother = era.get(`cflag:${this.id}:母方角色`);
    if (father + mother === 33 && father * mother === 0) {
      era.set(
        `callname:${this.id}:33`,
        era.get('cflag:33:性别') === 1 ? '哥哥' : '姐姐',
      );
      era.set(`callname:${this.id}:0`, father === 0 ? '哥哥' : '姐姐');
    } else {
      return super.set_callname();
    }
  }
};
