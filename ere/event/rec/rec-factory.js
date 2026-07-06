const { get } = require('#/era-electron');

const CommonKojoFactory = require('#/event/factory-common');
const CustomizedRec = require('#/event/rec/rec-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const recruit_flags = require('#/data/event/recruit-flags');

/** @type {Record<string,CustomizedRecruit>} */
const cons_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[1] = require('#/event/rec/rec-1');
cons_dict[2] = require('#/event/rec/rec-2');
cons_dict[3] = require('#/event/rec/rec-3');
cons_dict[4] = require('#/event/rec/rec-4');
cons_dict[6] = require('#/event/rec/rec-6');
cons_dict[7] = require('#/event/rec/rec-7');
cons_dict[13] = require('#/event/rec/rec-13');
cons_dict[17] = require('#/event/rec/rec-17');
cons_dict[19] = require('#/event/rec/rec-19');
cons_dict[20] = require('#/event/rec/rec-20');
cons_dict[21] = require('#/event/rec/rec-21');
cons_dict[24] = require('#/event/rec/rec-24');
cons_dict[25] = require('#/event/rec/rec-25');
cons_dict[30] = require('#/event/rec/rec-30');
cons_dict[32] = require('#/event/rec/rec-32');
cons_dict[36] = require('#/event/rec/rec-36');
cons_dict[37] = require('#/event/rec/rec-37');
cons_dict[44] = require('#/event/rec/rec-44');
cons_dict[46] = require('#/event/rec/rec-46');
cons_dict[47] = require('#/event/rec/rec-47');
cons_dict[50] = require('#/event/rec/rec-50');
cons_dict[52] = require('#/event/rec/rec-52');
cons_dict[56] = require('#/event/rec/rec-56');
cons_dict[60] = require('#/event/rec/rec-60');
cons_dict[61] = require('#/event/rec/rec-61');
cons_dict[64] = require('#/event/rec/rec-64');
cons_dict[67] = require('#/event/rec/rec-67');
cons_dict[68] = require('#/event/rec/rec-68');
cons_dict[71] = require('#/event/rec/rec-71');
cons_dict[74] = require('#/event/rec/rec-74');
cons_dict[85] = require('#/event/rec/rec-85');
cons_dict[89] = require('#/event/rec/rec-89');
cons_dict[100] = require('#/event/rec/rec-100');
cons_dict[116] = require('#/event/rec/rec-116');
cons_dict[119] = require('#/event/rec/rec-119');
cons_dict[201] = require('#/event/rec/rec-201');
cons_dict[202] = require('#/event/rec/rec-202');
cons_dict[203] = require('#/event/rec/rec-203');
cons_dict[205] = require('#/event/rec/rec-205');
cons_dict[303] = require('#/event/rec/rec-303');
cons_dict[304] = require('#/event/rec/rec-304');
cons_dict[306] = require('#/event/rec/rec-306');
cons_dict[308] = require('#/event/rec/rec-308');
cons_dict[340] = require('#/event/rec/rec-340');
cons_dict[341] = require('#/event/rec/rec-341');
cons_dict[342] = require('#/event/rec/rec-342');
cons_dict[343] = require('#/event/rec/rec-343');
cons_dict[400] = require('#/event/rec/rec-400');
// GENERATED END

console.log(
  '角色招募口上注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class RecFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedRec);
  }

  /**
   * @param {number} cid
   * @param {number} stage
   * @param [_]
   * @param {EventObject} [ebj]
   * @returns {Promise<boolean|void>}
   */
  run_custom_rec(cid, stage, _, ebj) {
    const kojo = this.get(cid);
    return kojo.recruit(stage, ebj).then((r) => {
      // CFLAGNAME:66 = 招募状态
      if (get(`cflag:${cid}:66`) === recruit_flags.yes) {
        return kojo
          .recruit_result()
          .then(() => punish_by_yandere(cid, stage))
          .then(() => r);
      }
      return r;
    });
  }
}

const rec_factory = new RecFactory();
rec_factory.run_custom_rec = rec_factory.run_custom_rec.bind(rec_factory);

module.exports = rec_factory;
