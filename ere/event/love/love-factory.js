const CustomizedLove = require('#/event/love/love-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const CommonKojoFactory = require('#/event/factory-common');

/** @type {Record<string,CustomizedLove>} */
const cons_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[2] = require('#/event/love/love-2');
cons_dict[3] = require('#/event/love/love-3');
cons_dict[4] = require('#/event/love/love-4');
cons_dict[6] = require('#/event/love/love-6');
cons_dict[7] = require('#/event/love/love-7');
cons_dict[13] = require('#/event/love/love-13');
cons_dict[17] = require('#/event/love/love-17');
cons_dict[19] = require('#/event/love/love-19');
cons_dict[20] = require('#/event/love/love-20');
cons_dict[21] = require('#/event/love/love-21');
cons_dict[24] = require('#/event/love/love-24');
cons_dict[25] = require('#/event/love/love-25');
cons_dict[30] = require('#/event/love/love-30');
cons_dict[32] = require('#/event/love/love-32');
cons_dict[37] = require('#/event/love/love-37');
cons_dict[44] = require('#/event/love/love-44');
cons_dict[46] = require('#/event/love/love-46');
cons_dict[50] = require('#/event/love/love-50');
cons_dict[52] = require('#/event/love/love-52');
cons_dict[56] = require('#/event/love/love-56');
cons_dict[60] = require('#/event/love/love-60');
cons_dict[61] = require('#/event/love/love-61');
cons_dict[64] = require('#/event/love/love-64');
cons_dict[68] = require('#/event/love/love-68');
cons_dict[71] = require('#/event/love/love-71');
cons_dict[74] = require('#/event/love/love-74');
cons_dict[85] = require('#/event/love/love-85');
cons_dict[100] = require('#/event/love/love-100');
cons_dict[205] = require('#/event/love/love-205');
cons_dict[301] = require('#/event/love/love-301');
cons_dict[302] = require('#/event/love/love-302');
cons_dict[340] = require('#/event/love/love-340');
cons_dict[341] = require('#/event/love/love-341');
cons_dict[342] = require('#/event/love/love-342');
cons_dict[343] = require('#/event/love/love-343');
cons_dict[400] = require('#/event/love/love-400');
// GENERATED END

console.log(
  '角色爱慕口上注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class LoveFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedLove);
  }

  /**
   * @param {number} cid
   * @param {number} stage
   * @param {*} extra
   * @param {EventObject} ebj
   */
  async run_custom_love(cid, stage, extra, ebj) {
    const ret = await this.get(cid).run(stage, extra, ebj);
    await punish_by_yandere(cid, stage);
    return ret;
  }
}

const love_factory = new LoveFactory();
love_factory.run_custom_love = love_factory.run_custom_love.bind(love_factory);

module.exports = love_factory;
