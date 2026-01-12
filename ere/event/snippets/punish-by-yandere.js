const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_random_value } = require('#/utils/value-utils');

const { no_yandere_punish } = require('#/data/event/event-hooks');
const yandere_list = require('#/data/event/yandere-list');

async function punish_by_yandere(cid, hook) {
  if (cid > 0 && !no_yandere_punish[hook]) {
    let wait = yandere_list.get().reduce((p, e) => {
      if (
        e !== cid &&
        era.get(`love:${e}`) >= 50 &&
        sys_check_yandere(e, (y) => y > 0) &&
        era.get(`cflag:${e}:成长阶段`) >= 2
      ) {
        const yandere = era.get(`talent:${e}:病娇`);
        return (
          sys_like_chara(
            e,
            0,
            -get_random_value(10, 20) * (5 * yandere - 4),
            yandere === 2,
          ) || p
        );
      }
      return p;
    }, false);
    if (wait) {
      await era.waitAnyKey();
    }
  }
}

module.exports = punish_by_yandere;
