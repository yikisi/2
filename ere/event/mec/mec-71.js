const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const CharaTalk = require('#/utils/chara-talk');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      if (era.get(`love:${this.id}`) >= 75) {
        era.set(`callname:${this.id}:0`, '亲爱的');
      } else {
        era.set(
          `callname:${this.id}:0`,
          '训练员' + CharaTalk.me.get_adult_sex_title(),
        );
      }
    }
  }
};
