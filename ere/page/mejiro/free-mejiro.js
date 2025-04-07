const MejiroCity = require('#/page/mejiro/mejiro-common');

class FreeMejiro extends MejiroCity {
  constructor() {
    super();
    MejiroCity.register(0, this);
  }
}

new FreeMejiro();

module.exports = {};
