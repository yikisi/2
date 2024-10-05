const { get } = require('#/era-electron');

const common_cons = require('#/event/rec/rec-common');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const recruit_flags = require('#/data/event/recruit-flags');

/** @type {Record<string,CustomizedRecruit>} */
const cons_dict = {};
/** @type {Record<string,CustomizedRecruit>} */
const obj_dict = {};

const current = new Date().getTime();

cons_dict[3] = require('#/event/rec/rec-3');
cons_dict[7] = require('#/event/rec/rec-7');
cons_dict[17] = require('#/event/rec/rec-17');
cons_dict[19] = require('#/event/rec/rec-19');
cons_dict[24] = require('#/event/rec/rec-24');
cons_dict[25] = require('#/event/rec/rec-25');
cons_dict[30] = require('#/event/rec/rec-30');
cons_dict[32] = require('#/event/rec/rec-32');
cons_dict[37] = require('#/event/rec/rec-37');
cons_dict[52] = require('#/event/rec/rec-52');
cons_dict[56] = require('#/event/rec/rec-56');
cons_dict[60] = require('#/event/rec/rec-60');
cons_dict[67] = require('#/event/rec/rec-67');
cons_dict[68] = require('#/event/rec/rec-68');
cons_dict[85] = require('#/event/rec/rec-85');
cons_dict[100] = require('#/event/rec/rec-100');
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

console.log(
  '[rec-factory.js] constructor dictionary init done!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} chara_id
   * @returns {boolean}
   */
  check_rec_script(chara_id) {
    return cons_dict[chara_id] !== undefined;
  },
  /**
   * @param {number} chara_id
   * @param {number} stage
   * @param {EventObject} [event_object]
   * @returns {Promise<boolean|void>}
   */
  get_custom_rec(chara_id, stage, event_object) {
    if (!obj_dict[chara_id]) {
      obj_dict[chara_id] = new (cons_dict[chara_id] || common_cons)(chara_id);
    }
    return obj_dict[chara_id].recruit(stage, event_object).then((r) => {
      if (get(`cflag:${chara_id}:招募状态`) === recruit_flags.yes) {
        return obj_dict[chara_id]
          .recruit_result()
          .then(() => punish_by_yandere(chara_id, stage))
          .then(() => r);
      }
      return r;
    });
  },
};
