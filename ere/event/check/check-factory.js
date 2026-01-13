const CustomizedCheck = require('#/event/check/check-common');
const CommonKojoFactory = require('#/event/factory-common');

const cons_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[0] = require('#/event/check/check-0');
cons_dict[1] = require('#/event/check/check-1');
cons_dict[2] = require('#/event/check/check-2');
cons_dict[3] = require('#/event/check/check-3');
cons_dict[4] = require('#/event/check/check-4');
cons_dict[5] = require('#/event/check/check-5');
cons_dict[6] = require('#/event/check/check-6');
cons_dict[7] = require('#/event/check/check-7');
cons_dict[8] = require('#/event/check/check-8');
cons_dict[9] = require('#/event/check/check-9');
cons_dict[10] = require('#/event/check/check-10');
cons_dict[11] = require('#/event/check/check-11');
cons_dict[12] = require('#/event/check/check-12');
cons_dict[13] = require('#/event/check/check-13');
cons_dict[14] = require('#/event/check/check-14');
cons_dict[15] = require('#/event/check/check-15');
cons_dict[16] = require('#/event/check/check-16');
cons_dict[17] = require('#/event/check/check-17');
cons_dict[18] = require('#/event/check/check-18');
cons_dict[19] = require('#/event/check/check-19');
cons_dict[20] = require('#/event/check/check-20');
cons_dict[21] = require('#/event/check/check-21');
cons_dict[22] = require('#/event/check/check-22');
cons_dict[23] = require('#/event/check/check-23');
cons_dict[24] = require('#/event/check/check-24');
cons_dict[25] = require('#/event/check/check-25');
cons_dict[26] = require('#/event/check/check-26');
cons_dict[27] = require('#/event/check/check-27');
cons_dict[28] = require('#/event/check/check-28');
cons_dict[29] = require('#/event/check/check-29');
cons_dict[30] = require('#/event/check/check-30');
cons_dict[31] = require('#/event/check/check-31');
cons_dict[32] = require('#/event/check/check-32');
cons_dict[33] = require('#/event/check/check-33');
cons_dict[34] = require('#/event/check/check-34');
cons_dict[35] = require('#/event/check/check-35');
cons_dict[36] = require('#/event/check/check-36');
cons_dict[37] = require('#/event/check/check-37');
cons_dict[38] = require('#/event/check/check-38');
cons_dict[39] = require('#/event/check/check-39');
cons_dict[40] = require('#/event/check/check-40');
cons_dict[41] = require('#/event/check/check-41');
cons_dict[42] = require('#/event/check/check-42');
cons_dict[43] = require('#/event/check/check-43');
cons_dict[44] = require('#/event/check/check-44');
cons_dict[45] = require('#/event/check/check-45');
cons_dict[46] = require('#/event/check/check-46');
cons_dict[47] = require('#/event/check/check-47');
cons_dict[48] = require('#/event/check/check-48');
cons_dict[49] = require('#/event/check/check-49');
cons_dict[50] = require('#/event/check/check-50');
cons_dict[51] = require('#/event/check/check-51');
cons_dict[52] = require('#/event/check/check-52');
cons_dict[53] = require('#/event/check/check-53');
cons_dict[54] = require('#/event/check/check-54');
cons_dict[55] = require('#/event/check/check-55');
cons_dict[56] = require('#/event/check/check-56');
cons_dict[57] = require('#/event/check/check-57');
cons_dict[58] = require('#/event/check/check-58');
cons_dict[59] = require('#/event/check/check-59');
cons_dict[60] = require('#/event/check/check-60');
cons_dict[61] = require('#/event/check/check-61');
cons_dict[62] = require('#/event/check/check-62');
cons_dict[63] = require('#/event/check/check-63');
cons_dict[64] = require('#/event/check/check-64');
cons_dict[65] = require('#/event/check/check-65');
cons_dict[66] = require('#/event/check/check-66');
cons_dict[67] = require('#/event/check/check-67');
cons_dict[68] = require('#/event/check/check-68');
cons_dict[69] = require('#/event/check/check-69');
cons_dict[70] = require('#/event/check/check-70');
cons_dict[71] = require('#/event/check/check-71');
cons_dict[72] = require('#/event/check/check-72');
cons_dict[73] = require('#/event/check/check-73');
cons_dict[74] = require('#/event/check/check-74');
cons_dict[76] = require('#/event/check/check-76');
cons_dict[77] = require('#/event/check/check-77');
cons_dict[78] = require('#/event/check/check-78');
cons_dict[79] = require('#/event/check/check-79');
cons_dict[80] = require('#/event/check/check-80');
cons_dict[81] = require('#/event/check/check-81');
cons_dict[82] = require('#/event/check/check-82');
cons_dict[83] = require('#/event/check/check-83');
cons_dict[84] = require('#/event/check/check-84');
cons_dict[85] = require('#/event/check/check-85');
cons_dict[86] = require('#/event/check/check-86');
cons_dict[87] = require('#/event/check/check-87');
cons_dict[88] = require('#/event/check/check-88');
cons_dict[89] = require('#/event/check/check-89');
cons_dict[90] = require('#/event/check/check-90');
cons_dict[91] = require('#/event/check/check-91');
cons_dict[92] = require('#/event/check/check-92');
cons_dict[93] = require('#/event/check/check-93');
cons_dict[94] = require('#/event/check/check-94');
cons_dict[95] = require('#/event/check/check-95');
cons_dict[96] = require('#/event/check/check-96');
cons_dict[97] = require('#/event/check/check-97');
cons_dict[98] = require('#/event/check/check-98');
cons_dict[99] = require('#/event/check/check-99');
cons_dict[100] = require('#/event/check/check-100');
cons_dict[102] = require('#/event/check/check-102');
cons_dict[104] = require('#/event/check/check-104');
cons_dict[105] = require('#/event/check/check-105');
cons_dict[106] = require('#/event/check/check-106');
cons_dict[107] = require('#/event/check/check-107');
cons_dict[108] = require('#/event/check/check-108');
cons_dict[109] = require('#/event/check/check-109');
cons_dict[110] = require('#/event/check/check-110');
cons_dict[111] = require('#/event/check/check-111');
cons_dict[113] = require('#/event/check/check-113');
cons_dict[114] = require('#/event/check/check-114');
cons_dict[115] = require('#/event/check/check-115');
cons_dict[116] = require('#/event/check/check-116');
cons_dict[117] = require('#/event/check/check-117');
cons_dict[119] = require('#/event/check/check-119');
cons_dict[120] = require('#/event/check/check-120');
cons_dict[121] = require('#/event/check/check-121');
cons_dict[124] = require('#/event/check/check-124');
cons_dict[127] = require('#/event/check/check-127');
cons_dict[131] = require('#/event/check/check-131');
cons_dict[132] = require('#/event/check/check-132');
cons_dict[133] = require('#/event/check/check-133');
cons_dict[135] = require('#/event/check/check-135');
cons_dict[201] = require('#/event/check/check-201');
cons_dict[202] = require('#/event/check/check-202');
cons_dict[203] = require('#/event/check/check-203');
cons_dict[204] = require('#/event/check/check-204');
cons_dict[205] = require('#/event/check/check-205');
cons_dict[206] = require('#/event/check/check-206');
cons_dict[207] = require('#/event/check/check-207');
cons_dict[301] = require('#/event/check/check-301');
cons_dict[302] = require('#/event/check/check-302');
cons_dict[303] = require('#/event/check/check-303');
cons_dict[304] = require('#/event/check/check-304');
cons_dict[305] = require('#/event/check/check-305');
cons_dict[306] = require('#/event/check/check-306');
cons_dict[308] = require('#/event/check/check-308');
cons_dict[343] = require('#/event/check/check-343');
cons_dict[344] = require('#/event/check/check-344');
cons_dict[345] = require('#/event/check/check-345');
cons_dict[346] = require('#/event/check/check-346');
cons_dict[347] = require('#/event/check/check-347');
cons_dict[348] = require('#/event/check/check-348');
cons_dict[349] = require('#/event/check/check-349');
cons_dict[400] = require('#/event/check/check-400');
cons_dict['emperor'] = require('#/event/check/check-emperor');
cons_dict[340] =
  cons_dict[341] =
  cons_dict[342] =
    require('#/event/check/check-god');
// GENERATED END

console.log(
  '角色检查脚本注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class CheckFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedCheck);
  }

  /**
   * @param {number} id
   * @returns {CustomizedCheck}
   */
  get_custom_check(id) {
    return this.get(id);
  }
}

const check_factory = new CheckFactory();
check_factory.get_custom_check =
  check_factory.get_custom_check.bind(check_factory);

module.exports = check_factory;
