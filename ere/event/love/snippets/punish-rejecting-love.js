const era = require('#/era-electron');

const { sys_change_pressure } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_random_value } = require('#/utils/value-utils');

async function punish_rejecting_love(chara_id) {
  era.println();
  sys_like_chara(
    chara_id,
    0,
    -get_random_value(100, 200 + 100 * era.get(`talent:${chara_id}:病娇`)),
  ) && (await era.waitAnyKey());
  sys_change_pressure(
    chara_id,
    get_random_value(1000, 2500 - 1000 * era.get(`talent:${chara_id}:病娇`)),
  );
}

module.exports = punish_rejecting_love;
