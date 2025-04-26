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

  get_want_sex_buff() {
    return false;
  }

  get_rape_buff() {
    return 0;
  }

  /**
   * 修改外出口上
   * @param {number} chara_id
   * @param {{stamina:number,time:number}} player_base
   * @param {{stamina:number,time:number}} chara_base
   * @returns {{s:number,d:boolean,l:number,n:string,[t]:string}[]}
   */
  get_positions(chara_id, player_base, chara_base) {
    let m_disabled,
      m_title = [];
    if (chara_base === undefined) {
      m_disabled = true;
      m_title.push('目白城不欢迎独身的旅客……');
    } else {
      if (
        (m_disabled = sys_check_act_disabled(
          sys_get_move_cost(location_enum.station, chara_id),
          player_base,
          chara_base,
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
      if (era.get(`love:${chara_id}`) < 75) {
        m_disabled = true;
        m_title.push('关系并未达到如此程度……');
      }
    }
    return [
      {
        d:
          sys_check_act_disabled(
            sys_get_move_cost(location_enum.river, chara_id),
            player_base,
            chara_base,
          ) > 0,
        l: location_enum.river,
        n: '河堤',
        s: event_hooks.out_river,
      },
      {
        d:
          era.get('flag:当前马币') < 10 ||
          sys_check_act_disabled(
            sys_get_move_cost(location_enum.shopping, chara_id),
            player_base,
            chara_base,
          ) > 0,
        l: location_enum.shopping,
        n: '商店街',
        s: event_hooks.out_shopping,
      },
      {
        d:
          sys_check_act_disabled(
            sys_get_move_cost(location_enum.church, chara_id),
            player_base,
            chara_base,
          ) > 0,
        l: location_enum.church,
        n: '神社',
        s: event_hooks.out_church,
      },
      {
        d:
          era.get('flag:当前马币') < 10 ||
          sys_check_act_disabled(
            sys_get_move_cost(location_enum.station, chara_id),
            player_base,
            chara_base,
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
        t: m_title.length > 0 ? m_title.join('\n') : undefined,
      },
    ];
  }

  /**
   * 目白城本体
   * @param {number} chara_id 同行者
   */
  // eslint-disable-next-line no-unused-vars
  async page(chara_id) {}

  /** 过回合的处理内容 */
  async next_week() {}
}

module.exports = MejiroCity;
