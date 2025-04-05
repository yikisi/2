const era = require('#/era-electron');

const {
  sys_check_act_disabled,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

class MejiroCity {
  constructor() {
    era.get('flag:目白城变量') || era.set('flag:目白城变量', {});
  }

  /** @returns {Record<string,any>} */
  get obj() {
    return era.get('flag:目白城变量');
  }

  /**
   * @param {number} chara_id
   * @param {{stamina:number,time:number}} player_base
   * @param {{stamina:number,time:number}} chara_base
   * @returns {{s:number,d:boolean,l:number,n:string}[]}
   */
  get_positions(chara_id, player_base, chara_base) {
    let m_disabled = sys_check_act_disabled(
        sys_get_move_cost(location_enum.station, chara_id),
        player_base,
        chara_base,
      ),
      m_title = '';
    if (m_disabled) {
      m_title = '体力精力不足';
    }
    if (era.get(`love:${chara_id}`) < 75) {
      m_disabled = true;
      if (m_title) {
        m_title += '；';
      }
      m_title += '关系并未达到如此程度……';
    }
    return [
      {
        d: sys_check_act_disabled(
          sys_get_move_cost(location_enum.river, chara_id),
          player_base,
          chara_base,
        ),
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
          ),
        l: location_enum.shopping,
        n: '商店街',
        s: event_hooks.out_shopping,
      },
      {
        d: sys_check_act_disabled(
          sys_get_move_cost(location_enum.church, chara_id),
          player_base,
          chara_base,
        ),
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
          ),
        l: location_enum.station,
        n: '车站',
        s: event_hooks.out_station,
      },
      {
        d: m_disabled,
        l: location_enum.mejiro,
        n: '目白城',
        s: event_hooks.out_mejiro,
        t: m_title,
      },
    ];
  }
}

module.exports = MejiroCity;
