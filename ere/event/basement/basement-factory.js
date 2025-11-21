const CustomizedBase = require('#/event/basement/basement-common');
const CommonKojoFactory = require('#/event/factory-common');

const cons_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[3] = require('#/event/basement/basement-3');
cons_dict[7] = require('#/event/basement/basement-7');
cons_dict[13] = require('#/event/basement/basement-13');
cons_dict[25] = require('#/event/basement/basement-25');
cons_dict[32] = require('#/event/basement/basement-32');
cons_dict[52] = require('#/event/basement/basement-52');
cons_dict[64] = require('#/event/basement/basement-64');
cons_dict[89] = require('#/event/basement/basement-89');
cons_dict[119] = require('#/event/basement/basement-119');
// GENERATED END

console.log(
  '角色地下室口上注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class BasementFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedBase);
  }

  /**
   * @param {number} id
   * @returns {CustomizedBase}
   */
  get_custom_basement(id) {
    return this.get(id);
  }
}

const basement_factory = new BasementFactory();
basement_factory.get_custom_basement =
  basement_factory.get_custom_basement.bind(basement_factory);

module.exports = basement_factory;
