const { get } = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');
const Check67_1 = require('#/event/check/check-scripts-67/check-67-1');

module.exports = class extends CustomizedCheck {
  /** @type {CustomizedCheck[]} */
  instances;

  constructor(cid) {
    super(cid);
    this.instances = [new Check67_1(cid)];
  }

  get_this() {
    return this.instances[get(`cflag:${this.id}:多口上`)];
  }
};
