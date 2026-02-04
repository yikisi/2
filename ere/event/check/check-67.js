const CustomizedCheck = require('#/event/check/check-common');
const Check67_1 = require('#/event/check/check-scripts-67/check-67-1');

module.exports = class extends CustomizedCheck {
  constructor(cid) {
    super(cid);
    this.instances = [new Check67_1(cid)];
  }
};
