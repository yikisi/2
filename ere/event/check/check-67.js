const era = require('#/era-electron');
const Check106799 = require('#/event/check/check-67/check-67-99');
const CustomizedCheck = require('#/event/check/check-common');

module.exports = class extends CustomizedCheck {
  /** @type {Record<number,CustomizedCheck>} */
  instances;

  constructor(cid) {
    super(cid);
    this.instances = { 99: new Check106799(cid) };
  }

  get this() {
    let ret = this.instances[era.get(`cflag:${this.id}:多口上`)];
    if (!ret) {
      ret = this.instances[era.set(`cflag:${this.id}:多口上`, 99) ?? 99];
    }
    return ret;
  }
};
