const MejiroCity = require('#/page/mejiro/mejiro-common');

class CallOfMejiro extends MejiroCity {
  /**
   * 被呼唤的伴侣
   * @returns {number}
   */
  get called() {
    return this.var.called || 0;
  }

  /**
   * 被呼唤的伴侣ID
   * @param {number} v
   */
  set called(v) {
    if (!v) {
      delete this.var.called;
    } else {
      this.var.called = v;
    }
  }

  /**
   * 伴侣的SAN值
   * @returns {number}
   */
  get san() {
    return this.var.san || 0;
  }

  /**
   * 伴侣的SAN值
   * @param {number} v
   */
  set san(v) {
    if (!v) {
      delete this.var.san;
    } else {
      this.var.san = v;
    }
  }
}

module.exports = CallOfMejiro;
