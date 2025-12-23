const { get } = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const Edu67_1 = require('#/event/edu/edu-events-67-1/entrypoint');

module.exports = class extends CustomizedEdu {
  /** @type {CustomizedEdu[]} */
  instances;

  /** @param {number} cid */
  constructor(cid) {
    super(cid);
    this.instances = [new Edu67_1(cid)];
  }

  get_this() {
    // CFLAGNAME:70 = 多口上
    return this.instances[get(`cflag:${this.id}:70`) || 0];
  }
};
