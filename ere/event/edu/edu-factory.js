const CustomizedEdu = require('#/event/edu/edu-common');
const edu_result = require('#/event/edu/edu-result');
const CommonKojoFactory = require('#/event/factory-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const HookArg = require('#/data/event/hook-arg');

/** @type {Record<string,CustomizedEdu>} */
const cons_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[0] = require('#/event/edu/edu-0');
cons_dict[2] = require('#/event/edu/edu-2');
cons_dict[3] = require('#/event/edu/edu-3');
cons_dict[4] = require('#/event/edu/edu-4');
cons_dict[6] = require('#/event/edu/edu-6');
cons_dict[7] = require('#/event/edu/edu-7');
cons_dict[13] = require('#/event/edu/edu-13');
cons_dict[17] = require('#/event/edu/edu-17');
cons_dict[19] = require('#/event/edu/edu-19');
cons_dict[20] = require('#/event/edu/edu-20');
cons_dict[21] = require('#/event/edu/edu-21');
cons_dict[24] = require('#/event/edu/edu-24');
cons_dict[25] = require('#/event/edu/edu-25');
cons_dict[30] = require('#/event/edu/edu-30');
cons_dict[32] = require('#/event/edu/edu-32');
cons_dict[33] = require('#/event/edu/edu-33');
cons_dict[37] = require('#/event/edu/edu-37');
cons_dict[44] = require('#/event/edu/edu-44');
cons_dict[46] = require('#/event/edu/edu-46');
cons_dict[49] = require('#/event/edu/edu-49');
cons_dict[50] = require('#/event/edu/edu-50');
cons_dict[52] = require('#/event/edu/edu-52');
cons_dict[56] = require('#/event/edu/edu-56');
cons_dict[60] = require('#/event/edu/edu-60');
cons_dict[61] = require('#/event/edu/edu-61');
cons_dict[64] = require('#/event/edu/edu-64');
cons_dict[67] = require('#/event/edu/edu-67');
cons_dict[68] = require('#/event/edu/edu-68');
cons_dict[71] = require('#/event/edu/edu-71');
cons_dict[74] = require('#/event/edu/edu-74');
cons_dict[85] = require('#/event/edu/edu-85');
cons_dict[100] = require('#/event/edu/edu-100');
cons_dict[201] = require('#/event/edu/edu-201');
cons_dict[205] = require('#/event/edu/edu-205');
cons_dict[301] = require('#/event/edu/edu-301');
cons_dict[302] = require('#/event/edu/edu-302');
cons_dict[303] = require('#/event/edu/edu-303');
cons_dict[304] = require('#/event/edu/edu-304');
cons_dict[306] = require('#/event/edu/edu-306');
cons_dict[308] = require('#/event/edu/edu-308');
cons_dict[343] = require('#/event/edu/edu-343');
cons_dict[400] = require('#/event/edu/edu-400');
// GENERATED END

console.log(
  '角色育成口上注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class EduFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedEdu);
  }

  /**
   * @param {number} cid
   * @returns {CustomizedEdu}
   */
  get_custom_edu(cid) {
    return this.get(cid);
  }

  /**
   * @param {number} chara_id
   * @param {number} stage
   * @param {*} [extra_flag]
   * @param {EventObject} [event_object]
   */
  async run_custom_edu(chara_id, stage, extra_flag, event_object) {
    const hook = new HookArg(stage),
      _extra = extra_flag || {};
    let ret = await this.get(chara_id).run(hook, _extra, event_object);
    if (!hook.override) {
      ret = (await edu_result(chara_id, hook, _extra)) || ret;
    }
    await punish_by_yandere(chara_id, stage);
    return ret;
  }
}

const edu_factory = new EduFactory();
edu_factory.get_custom_edu = edu_factory.get_custom_edu.bind(edu_factory);
edu_factory.run_custom_edu = edu_factory.run_custom_edu.bind(edu_factory);

module.exports = edu_factory;
