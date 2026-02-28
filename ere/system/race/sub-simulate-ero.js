const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { item_enum } = require('#/data/ero/item-const');
const { damage_buff, secretion_amount } = require('#/data/ero/orgasm-const');
const { frame_rate, race_event_enum } = require('#/data/race/race-sim-const');

const { i18n } = require('#/i18n/selector');

const param_base = 10000 / (60 * frame_rate);

/** @type {{[f]:function(PseudoUma):boolean,c:string}[]} */
let item_reports;

/** @type {{[f]:function(PseudoUma):boolean,c:string}[]} */
let orgasm_reports;

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
    let s_times = 0;
    if (uma.race.conditionParams.item === 1) {
      ['breast', 'penis', 'clitoris', 'virgin', 'anal'].forEach(
        (p) => (uma.ero.param[p] += param_base * (1 + uma.ero.buff[p])),
      );
      let tmp;
      orgasm += tmp = Math.floor(uma.ero.param.breast / 10000);
      uma.ero.param.breast %= 10000;
      s_times += tmp * (1 + uma.ero.cost.breast);
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
      s_times += tmp * (1 + uma.ero.cost.anal);
      era.add(`exp:${cid}:肛门高潮次数`, tmp);

      orgasm += tmp = Math.floor(uma.ero.param.clitoris / 10000);
      uma.ero.param.clitoris %= 10000;
      s_times += tmp * (1 + uma.ero.cost.clitoris);
      era.add(`exp:${cid}:外阴高潮次数`, tmp);
      era.add(
        `exp:${cid}:爱液分泌量`,
        Math.floor(get_random_value(...secretion_amount.virgin) / 2),
      );

      uma.ero.main.forEach((p) => (uma.ero.param[p] += orgasm * 1000));

      orgasm += tmp = Math.floor(uma.ero.param.penis / 10000);
      uma.ero.param.penis %= 10000;
      s_times += tmp * (1 + uma.ero.cost.penis);
      era.add(`exp:${cid}:阴茎高潮次数`, tmp);
      era.add(`exp:${cid}:射精量`, get_random_value(...secretion_amount.penis));

      orgasm += tmp = Math.floor(uma.ero.param.virgin / 10000);
      uma.ero.param.virgin %= 10000;
      s_times += tmp * (1 + uma.ero.cost.virgin);
      era.add(`exp:${cid}:阴道高潮次数`, tmp);
      era.add(
        `exp:${cid}:爱液分泌量`,
        get_random_value(...secretion_amount.virgin),
      );
    } else if (uma.ero.param.sex >= 10000) {
      s_times = orgasm = Math.floor(uma.ero.param.sex / 10000);
      uma.ero.param.sex %= 10000;
    }
    uma.ero.orgasm += orgasm;
    if (orgasm > 0) {
      orgasm = Math.min(orgasm, 6);
      uma.race.conditionParams.orgasm = 1;
      events.push({ e: race_event_enum.orgasm, u: uma });
      uma.race.staminaCost *=
        1 +
        s_times * (1 - damage_buff + damage_buff * orgasm + uma.ero.cost.sex);
      if (era.get('flag:道具影响') !== 0) {
        uma.race.velocityReal -= 0.025;
      }
    } else {
      uma.race.conditionParams.orgasm = 0;
    }
    if (
      cid >= 0 &&
      !uma.legend &&
      (orgasm > 0 || (uma.race.conditionParams.item > 0 && timer % 15 === 0))
    ) {
      const chara = get_chara_talk(cid);
      reports.unshift({
        config: { align: 'left' },
        content: [
          timer_record,
          ' ',
          chara.id > 0 ? chara.get_colored_name() : '',
          {
            content: get_random_entry(
              (orgasm > 0 ? orgasm_reports : item_reports).filter(
                (e) => !e.f || e.f(uma),
              ),
            ).c,
            color: chara.color,
          },
        ],
        timer,
        type: 'text',
      });
    }
  }
}

module.exports = sub_simulate_ero;
module.exports.init = () => {
  /** @type {{[f]:function(PseudoUma):boolean,c:string}[]} */
  item_reports = [
    ...i18n().timon.race.ero_common_reports.map((c) => ({ c })),
    ...i18n().timon.race.ero_team_reports.map((c) => ({
      f: (u) => u.index_chara > 0,
      c,
    })),
    ...i18n().timon.race.ero_breast_reports.map((c) => ({
      f: (u) => u.ero.item.breast > 0,
      c,
    })),
    ...i18n().timon.race.ero_penis_reports.map((c) => ({
      f: (u) => u.ero.item.penis > 0,
      c,
    })),
    ...i18n().timon.race.ero_clitoris_reports.map((c) => ({
      f: (u) => u.ero.item.clitoris > 0,
      c,
    })),
    ...i18n().timon.race.ero_vagina_reports.map((c) => ({
      f: (u) => u.ero.item.virgin > 0,
      c,
    })),
    ...i18n().timon.race.ero_vagina_dildo_reports.map((c) => ({
      f: (u) => u.ero.item.virgin === item_enum.dildo,
      c,
    })),
    ...i18n().timon.race.ero_anal_reports.map((c) => ({
      f: (u) => u.ero.item.anal > 0,
      c,
    })),
    ...i18n().timon.race.ero_tail_reports.map((c) => ({
      f: (u) =>
        u.ero.item.anal === item_enum.anal_beads ||
        u.ero.item.anal === item_enum.dildo,
      c,
    })),
    ...i18n().timon.race.ero_in_body_reports.map((c) => ({
      f: (u) => u.ero.item.virgin > 0 || u.ero.item.anal > 0,
      c,
    })),
    ...i18n().timon.race.ero_multi_item_reports.map((c) => ({
      f: (u) => Object.values(u.ero.item).reduce((p, c) => p + (c > 0), 0) >= 2,
      c,
    })),
  ].map((o) => ({
    f: o.f,
    c: `${i18n().tk_think_border[0]}${o.c}${i18n().tk_think_border[1]}`,
  }));

  orgasm_reports = [
    ...i18n().timon.race.orgasm_common_reports.map((c) => ({ c })),
    ...i18n().timon.race.orgasm_breast_reports.map((c) => ({
      f: (u) => u.ero.item.breast > 0,
      c,
    })),
    ...i18n().timon.race.orgasm_penis_reports.map((c) => ({
      f: (u) => u.ero.item.penis > 0,
      c,
    })),
    ...i18n().timon.race.orgasm_clitoris_reports.map((c) => ({
      f: (u) => u.ero.item.clitoris > 0,
      c,
    })),
    ...i18n().timon.race.orgasm_vagina_reports.map((c) => ({
      f: (u) => u.ero.item.virgin > 0,
      c,
    })),
    ...i18n().timon.race.orgasm_vagina_dildo_reports.map((c) => ({
      f: (u) => u.ero.item.virgin === item_enum.dildo,
      c,
    })),
    ...i18n().timon.race.orgasm_anal_reports.map((c) => ({
      f: (u) => u.ero.item.anal > 0,
      c,
    })),
    ...i18n().timon.race.orgasm_bv_reports.map((c) => ({
      f: (u) => u.ero.item.breast > 0 && u.ero.item.virgin > 0,
      c,
    })),
    ...i18n().timon.race.orgasm_va_reports.map((c) => ({
      f: (u) =>
        u.ero.item.virgin === item_enum.dildo &&
        (u.ero.item.anal === item_enum.dildo ||
          u.ero.item.anal === item_enum.butt_plug),
      c,
    })),
  ].map((o) => ({
    f: o.f,
    c: `${i18n().tk_think_border[0]}${o.c}${i18n().tk_think_border[1]}`,
  }));
};
