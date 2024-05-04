const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    era.set('callname:100:0', '小' + era.get('callname:0:-1'));
  }
};
