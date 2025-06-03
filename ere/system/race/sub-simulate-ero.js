const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { damage_buff, secretion_amount } = require('#/data/ero/orgasm-const');
const { frame_rate, race_event_enum } = require('#/data/race/race-sim-const');

const param_base = 10000 / (60 * frame_rate);

const item_reports = [
  '（唔嗯嗯嗯嗯嗯……）',
  '（呃呃呃呃呃嗯唔唔……）',
  '（啊哦嗯嗯嗯嗯……）',
];

/**
 * @param {PseudoUma[]} list_chara
 * @param {string} timer_record
 * @param {number} timer
 * @param {[]} events
 * @param {[]} reports
 */
function sub_simulate_ero(list_chara, timer_record, timer, events, reports) {
  for (const uma of list_chara) {
    uma.race.conditionParams.milk = 0;
    const { index_chara: cid } = uma;
    let orgasm = 0;
    let stamina_times = 0;
    if (uma.ero.item) {
      if (era.get(`equip:${cid}:胸部`) > 0) {
        uma.ero.param.breast += param_base * (1 + uma.ero.buff.breast);
      }
      if (era.get(`equip:${cid}:阴茎`) > 0) {
        uma.ero.param.penis += param_base * (1 + uma.ero.buff.penis);
      }
      if (era.get(`equip:${cid}:阴蒂`) > 0) {
        uma.ero.param.clitoris += param_base * (1 + uma.ero.buff.clitoris);
      }
      if (era.get(`equip:${cid}:阴道`) > 0) {
        uma.ero.param.virgin += param_base * (1 + uma.ero.buff.virgin);
      }
      if (era.get(`equip:${cid}:肛门`) > 0) {
        uma.ero.param.anal += param_base * (1 + uma.ero.buff.anal);
      }
      let tmp;
      orgasm += tmp = Math.floor(uma.ero.param.breast / 10000);
      uma.ero.param.breast %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.breast);
      if (tmp > 0 && era.get(`talent:${cid}:泌乳`) > 0) {
        uma.race.conditionParams.milk = 1;
        era.add(
          `exp:${cid}:喷奶量`,
          get_random_value(...secretion_amount.breast),
        );
      }
      era.add(`exp:${cid}:胸部高潮次数`, tmp);

      orgasm += tmp = Math.floor(uma.ero.param.anal / 10000);
      uma.ero.param.anal %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.anal);
      era.add(`exp:${cid}:肛门高潮次数`, tmp);

      orgasm += tmp = Math.floor(uma.ero.param.clitoris / 10000);
      uma.ero.param.clitoris %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.clitoris);
      era.add(`exp:${cid}:外阴高潮次数`, tmp);
      era.add(
        `exp:${cid}:爱液分泌量`,
        Math.floor(get_random_value(...secretion_amount.virgin) / 2),
      );

      uma.ero.main.forEach((p) => (uma.ero.param[p] += orgasm * 1000));

      orgasm += tmp = Math.floor(uma.ero.param.penis / 10000);
      uma.ero.param.penis %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.penis);
      era.add(`exp:${cid}:阴茎高潮次数`, tmp);
      era.add(`exp:${cid}:射精量`, get_random_value(...secretion_amount.penis));

      orgasm += tmp = Math.floor(uma.ero.param.virgin / 10000);
      uma.ero.param.virgin %= 10000;
      stamina_times += tmp * (1 + uma.ero.cost.virgin);
      era.add(`exp:${cid}:阴道高潮次数`, tmp);
      era.add(
        `exp:${cid}:爱液分泌量`,
        get_random_value(...secretion_amount.virgin),
      );
    } else if (uma.ero.param.sex >= 10000) {
      stamina_times = orgasm = Math.floor(uma.ero.param.sex / 10000);
      uma.ero.param.sex %= 10000;
    }
    if (orgasm > 0) {
      orgasm = Math.min(orgasm, 6);
      uma.race.conditionParams.orgasm = 1;
      events.push({ e: race_event_enum.orgasm, u: uma });
      uma.race.staminaCost *=
        1 +
        stamina_times *
          (1 - damage_buff + damage_buff * orgasm + uma.ero.cost.sex);
      if (era.get('flag:道具影响') !== 0) {
        uma.race.velocityReal -= 0.1;
      }
    } else {
      uma.race.conditionParams.orgasm = 0;
      if (uma.ero.item && timer % 15 === 0) {
        const chara = get_chara_talk(cid);
        reports.unshift({
          config: { align: 'left' },
          content: [
            timer_record,
            ' ',
            chara.get_colored_name(),
            { content: get_random_entry(item_reports), color: chara.color },
          ],
          timer,
          type: 'text',
        });
      }
    }
  }
}

module.exports = sub_simulate_ero;
