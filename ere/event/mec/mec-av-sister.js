const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    era.set(
      `callname:${this.id}:33`,
      era.get('cflag:33:性别') - 1 ? '姐姐' : '哥哥',
    );
    if (!era.get(`cflag:${this.id}:父方角色`)) {
      era.set(`callname:${this.id}:0`, '哥哥');
    } else if (!era.get(`cflag:${this.id}:母方角色`)) {
      era.set(`callname:${this.id}:0`, '姐姐');
    } else {
      throw new Error();
    }
  }
};
