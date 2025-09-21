const CustomizedLove = require('#/event/love/love-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const CommonKojoFactory = require('#/event/factory-common');

/** @type {Record<string,CustomizedLove>} */
const cons_dict = {};

const current = new Date().getTime();

cons_dict[3] = require('#/event/love/love-3');
cons_dict[4] = require('#/event/love/love-4');
cons_dict[6] = require('#/event/love/love-6');
cons_dict[7] = require('#/event/love/love-7');
cons_dict[13] = require('#/event/love/love-13');
cons_dict[17] = require('#/event/love/love-17');
cons_dict[19] = require('#/event/love/love-19');
cons_dict[21] = require('#/event/love/love-21');
cons_dict[24] = require('#/event/love/love-24');
cons_dict[25] = require('#/event/love/love-25');
cons_dict[30] = require('#/event/love/love-30');
cons_dict[32] = require('#/event/love/love-32');
cons_dict[37] = require('#/event/love/love-37');
cons_dict[46] = require('#/event/love/love-46');
cons_dict[52] = require('#/event/love/love-52');
cons_dict[56] = require('#/event/love/love-56');
cons_dict[60] = require('#/event/love/love-60');
cons_dict[64] = require('#/event/love/love-64');
cons_dict[68] = require('#/event/love/love-68');
cons_dict[71] = require('#/event/love/love-71');
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
   * @param {number} chara_id
   * @param {number} stage
   * @param {*} extra_flag
   * @param {EventObject} event_object
   */
  async run_custom_love(chara_id, stage, extra_flag, event_object) {
    const ret = await this.get(chara_id).run(stage, extra_flag, event_object);
    await punish_by_yandere(chara_id, stage);
    return ret;
  }
}

const love_factory = new LoveFactory();
love_factory.run_custom_love = love_factory.run_custom_love.bind(love_factory);

module.exports = love_factory;
