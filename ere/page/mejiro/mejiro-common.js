const era = require('#/era-electron');

const {
  sys_check_act_disabled,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { get_love_info } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

const loc_characters = require('#/data/event/loc-characters');
const moon_well = require('#/data/event/moon-well');
const recruit_flags = require('#/data/event/recruit-flags');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

const dict = {};

/**
 * @typedef LocationButton
 * @property {number} [a] accelerator
 * @property {string} [c] button type (color)
 * @property {boolean} d disabled
 * @property {number} [e] hook
 * @property {number} l location
 * @property {string} [n] button content
 * @property {string} [t] tip
 */

class MejiroCity {
  /** @returns {MejiroCity} */
  static instance() {
    era.get('flag:目白城变量') || era.set('flag:目白城变量', {});
    return dict[era.get('flag:目白城风格')];
  }

  static register(k, v) {
    dict[k] = v;
  }

  /** @returns {Record<string,any>} */
  get var() {
    return era.get('flag:目白城变量');
  }

  /**
   * @param {number} cid
   * @returns {boolean}
   */
  get_want_sex_buff(cid) {
    return false;
  }

  /**
   * @param {number} cid
   * @returns {number}
   */
  get_rape_buff(cid) {
    return 0;
  }

  /**
   * 修改外出口上
   * @param {number} cid
   * @param {{stamina:number,time:number}} p_base
   * @param {{stamina:number,time:number}} c_base
   * @returns {LocationButton[]}
   */
  get_positions(cid, p_base, c_base) {
    const ret = [];
    const marks = EventMarks.get(cid);
    const p_marks = !cid ? marks : EventMarks.get(0);
    // uma yuan
    const umy = era.get('flag:当前马币');
    let temp;
    temp = sys_get_move_cost(location_enum.river, cid);
    temp.mark = sys_check_act_disabled(temp, p_base, c_base);
    ret.push({
      c:
        marks.check(event_hooks.out_river, event_hooks.back_school) ||
        p_marks.check(event_hooks.out_river)
          ? 'danger'
          : 'warning',
      d: temp.mark > 0,
      e: event_hooks.out_river,
      l: location_enum.river,
      t: di18n.get_loc_tips(
        marks.check(event_hooks.back_school),
        marks.check(event_hooks.out_river) ||
          p_marks.check(event_hooks.out_river),
        0,
        0,
        temp,
      ),
    });

    temp = sys_get_move_cost(location_enum.shopping, cid);
    temp.mark = sys_check_act_disabled(temp, p_base, c_base);
    ret.push({
      c:
        marks.check(event_hooks.out_shopping, event_hooks.back_school) ||
        p_marks.check(event_hooks.out_shopping)
          ? 'danger'
          : 'warning',
      d: umy < 10 || temp.mark > 0,
      e: event_hooks.out_shopping,
      l: location_enum.shopping,
      t: di18n.get_loc_tips(
        marks.check(event_hooks.back_school),
        marks.check(event_hooks.out_shopping) ||
          p_marks.check(event_hooks.out_shopping),
        0,
        0,
        temp,
        umy < 10 && i18n().ui_cost_money_tip_template.replace('%MONEY%', '10'),
      ),
    });

    temp = sys_get_move_cost(location_enum.church, cid);
    temp.mark = sys_check_act_disabled(temp, p_base, c_base);
    ret.push({
      c:
        marks.check(event_hooks.out_church, event_hooks.back_school) ||
        p_marks.check(event_hooks.out_church)
          ? 'danger'
          : 'warning',
      d: temp.mark > 0,
      e: event_hooks.out_church,
      l: location_enum.church,
      t: di18n.get_loc_tips(
        marks.check(event_hooks.back_school),
        marks.check(event_hooks.out_church) ||
          p_marks.check(event_hooks.out_church),
        0,
        0,
        temp,
      ),
    });

    temp = sys_get_move_cost(location_enum.station, cid);
    temp.mark = sys_check_act_disabled(temp, p_base, c_base);
    ret.push({
      c:
        marks.check(event_hooks.out_station, event_hooks.back_school) ||
        p_marks.check(event_hooks.out_station)
          ? 'danger'
          : 'warning',
      d: umy < 10 || temp.mark > 0,
      e: event_hooks.out_station,
      l: location_enum.station,
      t: di18n.get_loc_tips(
        marks.check(event_hooks.back_school),
        marks.check(event_hooks.out_station) ||
          p_marks.check(event_hooks.out_station),
        0,
        0,
        temp,
        umy < 10 && i18n().ui_cost_money_tip_template.replace('%MONEY%', '10'),
      ),
    });

    temp = sys_get_move_cost(location_enum.moon_well, cid);
    temp.mark = sys_check_act_disabled(temp, p_base, c_base);
    ret.push({
      d:
        (umy < moon_well.cost &&
          era.get('cflag:350:招募状态') !== recruit_flags.yes &&
          era.get('cflag:351:招募状态') !== recruit_flags.yes) ||
        !loc_characters.get(location_enum.moon_well).length ||
        temp.mark > 0,
      l: location_enum.moon_well,
      t: di18n.get_act_tip(
        false,
        temp,
        !loc_characters.get(location_enum.moon_well).length &&
          i18n().ui_moon_well_close_tip,
        umy < moon_well.cost &&
          era.get('cflag:350:招募状态') !== recruit_flags.yes &&
          era.get('cflag:351:招募状态') !== recruit_flags.yes &&
          i18n().ui_cost_money_tip_template.replace(
            '%MONEY%',
            moon_well.cost.toString(),
          ),
      ),
    });

    temp = sys_get_move_cost(location_enum.mejiro, cid);
    temp.mark = sys_check_act_disabled(temp, p_base, c_base);
    ret.push({
      d: temp.mark > 0 || !cid || era.get(`love:${cid}`) < 75,
      l: location_enum.mejiro,
      t: di18n.get_act_tip(
        false,
        temp,
        !cid && i18n().ui_mejiro_city_alone_tip,
        cid > 0 &&
          era.get(`love:${cid}`) < 75 &&
          i18n()
            .ui_mejiro_city_love_tip_template.replace(
              '%REQUIRE%',
              i18n().love_4,
            )
            .replace('%CURRENT%', get_love_info(cid).mark()),
      ),
    });
    return ret;
  }

  /**
   * 目白城本体
   * @param {number} cid 同行者
   */
  async page(cid) {}

  /** 过回合的处理内容 */
  async next_week() {}
}

module.exports = MejiroCity;
