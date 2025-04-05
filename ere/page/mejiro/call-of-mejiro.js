const MejiroCity = require('#/page/mejiro/mejiro-common');

class CallOfMejiro extends MejiroCity {
  /**
   * 被呼唤的伴侣
   * @returns {number}
   */
  get called() {
    return this.obj.called || 0;
  }

  /**
   * 被呼唤的伴侣ID
   * @param {number} v
   */
  set called(v) {
    if (!v) {
      delete this.obj.called;
    } else {
      this.obj.called = v;
    }
  }

  /**
   * 伴侣的SAN值
   * @returns {number}
   */
  get san() {
    return this.obj.san || 0;
  }

  /**
   * 伴侣的SAN值
   * @param {number} v
   */
  set san(v) {
    if (!v) {
      delete this.obj.san;
    } else {
      this.obj.san = v;
    }
  }
}

module.exports = CallOfMejiro;
