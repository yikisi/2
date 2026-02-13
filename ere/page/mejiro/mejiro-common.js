const era = require('#/era-electron');

const {
  sys_check_act_disabled,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

const dict = {};

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
   * @returns {{[a]:number,s:number,d:boolean,l:number,n:string,[t]:string}[]}
   */
  get_positions(cid, p_base, c_base) {
    let m_disabled;
    let m_title = [];
    if (!c_base) {
      m_disabled = true;
      m_title.push('目白城不欢迎独身的旅客……');
    } else {
      if (
        (m_disabled = sys_check_act_disabled(
          sys_get_move_cost(location_enum.station, cid),
          p_base,
          c_base,
        )) > 0
      ) {
        if ((m_disabled & 0b1) > 0 || (m_disabled & 0b100) > 0) {
          m_title.push('体力不足');
        }
        if ((m_disabled & 0b10) > 0 || (m_disabled & 0b1000) > 0) {
          m_title.push('精力不足');
        }
        m_disabled = true;
      }
      if (era.get(`love:${cid}`) < 75) {
        m_disabled = true;
        m_title.push('关系并未达到如此程度');
      }
    }
    return [
      {
        d:
          sys_check_act_disabled(
            sys_get_move_cost(location_enum.river, cid),
            p_base,
            c_base,
          ) > 0,
        l: location_enum.river,
        n: '河堤',
        s: event_hooks.out_river,
      },
      {
        d:
          era.get('flag:当前马币') < 10 ||
          sys_check_act_disabled(
            sys_get_move_cost(location_enum.shopping, cid),
            p_base,
            c_base,
          ) > 0,
        l: location_enum.shopping,
        n: '商店街',
        s: event_hooks.out_shopping,
      },
      {
        d:
          sys_check_act_disabled(
            sys_get_move_cost(location_enum.church, cid),
            p_base,
            c_base,
          ) > 0,
        l: location_enum.church,
        n: '神社',
        s: event_hooks.out_church,
      },
      {
        d:
          era.get('flag:当前马币') < 10 ||
          sys_check_act_disabled(
            sys_get_move_cost(location_enum.station, cid),
            p_base,
            c_base,
          ) > 0,
        l: location_enum.station,
        n: '车站',
        s: event_hooks.out_station,
      },
      {
        d: m_disabled,
        l: location_enum.mejiro,
        n: '目白城',
        s: event_hooks.out_mejiro,
        t: m_title.length > 0 ? m_title.join('\n') : void 0,
      },
    ];
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
