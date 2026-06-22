const era = require('#/era-electron');

const Rec106799 = require('#/event/rec/rec-67/rec-67-99');
const CustomizedRecruit = require('#/event/rec/rec-common');

module.exports = class extends CustomizedRecruit {
  /** @type {Record<number,CustomizedRecruit>} */
  instances;

  constructor(cid) {
    super(cid);
    this.instances = { 99: new Rec106799(cid) };
  }

  get this() {
    let ret = this.instances[era.get(`cflag:${this.id}:多口上`)];
    if (!ret) {
      ret = this.instances[era.set(`cflag:${this.id}:多口上`, 99)];
    }
    return ret;
  }
};
