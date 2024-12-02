const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  get_sex_acceptable() {
    if (era.get('love:85') <= 75) {
      return -25;
    }
    return 10;
  }

  get_ero_check() {
    return this.get_sex_acceptable();
  }
};
