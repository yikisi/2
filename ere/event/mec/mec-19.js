const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (era.get('relation:19:0') > 375) {
      era.set('callname:19:0', ['同志', '训练员']);
    } else {
      era.set('callname:19:0', '训练员');
    }
  }
};
