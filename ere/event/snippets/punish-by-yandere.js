const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_random_value } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { no_yandere_punish } = require('#/data/event/event-hooks');
const YandereList = require('#/data/event/yandere-list');

async function punish_by_yandere(chara_id, hook) {
  if (chara_id && !no_yandere_punish[hook]) {
    let wait_flag = new YandereList().get().reduce((p, e) => {
      const inmon = CharaInmon.get(e);
      if (
        e !== chara_id &&
        era.get(`love:${e}`) >= 50 &&
        !inmon.on(plugin_enum.no_yand) &&
        !inmon.on(plugin_enum.ntr)
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
