const era = require('#/era-electron');

const Edu106799 = require('#/event/edu/edu-67/edu-67-99');
const CustomizedEdu = require('#/event/edu/edu-common');

module.exports = class extends CustomizedEdu {
  /** @type {Record<number,CustomizedEdu>} */
  instances;

  /** @param {number} cid */
  constructor(cid) {
    super(cid);
    this.instances = { 99: new Edu106799(cid) };
  }

  get this() {
    let ret = this.instances[era.get(`cflag:${this.id}:多口上`)];
    if (!ret) {
      ret = this.instances[era.set(`cflag:${this.id}:多口上`, 99)];
    }
    return ret;
  }
};
