const MecChild = require('#/event/mec/mec-child');
const CustomizedMec = require('#/event/mec/mec-common');

const CommonKojoFactory = require('#/event/factory-common');

const cons_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[0] = require('#/event/mec/mec-0');
cons_dict[2] = require('#/event/mec/mec-2');
cons_dict[3] = require('#/event/mec/mec-3');
cons_dict[4] = require('#/event/mec/mec-4');
cons_dict[6] = require('#/event/mec/mec-6');
cons_dict[7] = require('#/event/mec/mec-7');
cons_dict[12] = require('#/event/mec/mec-12');
cons_dict[13] = require('#/event/mec/mec-13');
cons_dict[17] = require('#/event/mec/mec-17');
cons_dict[19] = require('#/event/mec/mec-19');
cons_dict[20] = require('#/event/mec/mec-20');
cons_dict[21] = require('#/event/mec/mec-21');
cons_dict[24] = require('#/event/mec/mec-24');
cons_dict[25] = require('#/event/mec/mec-25');
cons_dict[30] = require('#/event/mec/mec-30');
cons_dict[32] = require('#/event/mec/mec-32');
cons_dict[33] = require('#/event/mec/mec-33');
cons_dict[34] = require('#/event/mec/mec-34');
cons_dict[37] = require('#/event/mec/mec-37');
cons_dict[38] = require('#/event/mec/mec-38');
cons_dict[40] = require('#/event/mec/mec-40');
cons_dict[44] = require('#/event/mec/mec-44');
cons_dict[48] = require('#/event/mec/mec-48');
cons_dict[50] = require('#/event/mec/mec-50');
cons_dict[52] = require('#/event/mec/mec-52');
cons_dict[56] = require('#/event/mec/mec-56');
cons_dict[61] = require('#/event/mec/mec-61');
cons_dict[64] = require('#/event/mec/mec-64');
cons_dict[65] = require('#/event/mec/mec-65');
cons_dict[67] = require('#/event/mec/mec-67');
cons_dict[68] = require('#/event/mec/mec-68');
cons_dict[71] = require('#/event/mec/mec-71');
cons_dict[74] = require('#/event/mec/mec-74');
cons_dict[80] = require('#/event/mec/mec-80');
cons_dict[85] = require('#/event/mec/mec-85');
cons_dict[86] = require('#/event/mec/mec-86');
cons_dict[90] = require('#/event/mec/mec-90');
cons_dict[91] = require('#/event/mec/mec-91');
cons_dict[100] = require('#/event/mec/mec-100');
cons_dict[121] = require('#/event/mec/mec-121');
cons_dict[204] = require('#/event/mec/mec-204');
cons_dict[205] = require('#/event/mec/mec-205');
cons_dict[206] = require('#/event/mec/mec-206');
cons_dict[207] = require('#/event/mec/mec-207');
cons_dict[301] = require('#/event/mec/mec-301');
cons_dict[302] = require('#/event/mec/mec-302');
cons_dict[303] = require('#/event/mec/mec-303');
cons_dict[304] = require('#/event/mec/mec-304');
cons_dict[305] = require('#/event/mec/mec-305');
cons_dict[306] = require('#/event/mec/mec-306');
cons_dict[308] = require('#/event/mec/mec-308');
cons_dict[340] = require('#/event/mec/mec-340');
cons_dict[341] = require('#/event/mec/mec-341');
cons_dict[342] = require('#/event/mec/mec-342');
cons_dict[343] = require('#/event/mec/mec-343');
cons_dict[344] = require('#/event/mec/mec-344');
cons_dict[345] = require('#/event/mec/mec-345');
cons_dict[346] = require('#/event/mec/mec-346');
cons_dict[347] = require('#/event/mec/mec-347');
cons_dict[348] = require('#/event/mec/mec-348');
cons_dict[349] = require('#/event/mec/mec-349');
cons_dict[350] = require('#/event/mec/mec-350');
cons_dict[351] = require('#/event/mec/mec-351');
cons_dict[400] = require('#/event/mec/mec-400');
cons_dict['av-sister'] = require('#/event/mec/mec-av-sister');
cons_dict['emperor'] = require('#/event/mec/mec-emperor');
// GENERATED END
cons_dict[201] =
  cons_dict[202] =
  cons_dict[203] =
    require('#/event/mec/mec-uma-npc');

console.log(
  '角色机制脚本注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class MechanismFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedMec, MecChild);
  }

  /**
   * @param {number} cid
   * @returns {CustomizedMec}
   */
  get_custom_mec(cid) {
    return this.get(cid);
  }
}

const mec_factory = new MechanismFactory();

CustomizedMec.get_custom_mec = mec_factory.get_custom_mec =
  mec_factory.get_custom_mec.bind(mec_factory);

module.exports = mec_factory;
