const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_random_value } = require('#/utils/value-utils');

const { no_yandere_punish } = require('#/data/event/event-hooks');
const YandereList = require('#/data/event/yandere-list');

async function punish_by_yandere(chara_id, hook) {
  if (chara_id && !no_yandere_punish[hook]) {
    let wait_flag = new YandereList().get().reduce((p, e) => {
      if (
        e !== chara_id &&
        era.get(`love:${e}`) >= 50 &&
        sys_check_yandere(e, (y) => y > 0)
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
    wait_flag && (await era.waitAnyKey());
  }
}

module.exports = punish_by_yandere;
