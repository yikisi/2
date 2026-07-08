const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set('callname:61:0', 'trainer');
    }
  }

  is_anger_for_unfaithful(partners) {
    return !(partners.includes(52) && era.get('love:52') >= 75);
  }
};
