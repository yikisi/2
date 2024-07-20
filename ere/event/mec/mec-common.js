const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

class CustomizedMec {
  /** @type {number} */
  id;

  constructor(chara_id) {
    this.id = chara_id;
  }

  init_love() {
    era.set(
      `love:${this.id}`,
      era.get(`cflag:${this.id}:种族`) ? era.get('flag:马娘初始爱慕') : 0,
    );
  }

  is_able_to_be_selected() {
    return true;
  }

  is_able_to_show_growth() {
    return era.get(`cflag:${this.id}:种族`) > 0;
  }

  is_anger_for_unfaithful() {
    return true;
  }

  is_race_register_enabled() {
    return true;
  }

  is_train_enabled() {
    return true;
  }

  get_action_debuff() {
    return 0;
  }

  /**
   * @param {number} action
   * @returns {number}
   */
  // eslint-disable-next-line no-unused-vars
  get_ero_check(action) {
    return 0;
  }

  get_love_buff() {
    return 0;
  }

  get_love_limit() {
    return 0;
  }

  get_maxbase_buff() {
    return 0;
  }

  get_motivation_limit() {
    return 0;
  }

  get_pressure_buff() {
    return 0;
  }

  /** @returns {string[]} */
  get_race_cloth() {
    const base = era.get(`cstr:${this.id}:头像`),
      ret = [];
    let temp;
    if ((temp = era.get(`cstr:${this.id}:决胜服`)) === -1) {
      return [`${base}_运`, base, 'default'];
    } else if (temp === 0) {
      const holiday = (era.get('flag:当前回合数') - 1) % 48;
      switch (holiday) {
        case 0:
          ret.push(`${base}_春`);
          break;
        case 5:
          ret.push(`${base}_婚`);
          break;
        case 13:
          ret.push(`${base}_仆`, `${base}_应援`, `${base}_礼`, `${base}_游`);
          break;
        case 28:
        case 30:
        case 31:
          ret.push(`${base}_泳`, `${base}_夏`);
          break;
        case 29:
          ret.push(`${base}_江户`);
          break;
        case 39:
          ret.push(`${base}_万圣`);
          break;
        case 47:
          ret.push(`${base}_圣诞`);
      }
    } else {
      ret.push(`${base}${temp}`);
    }
    ret.push(base, `${base}_运`, 'default');
    return ret;
  }

  /**
   * @param {RaceInfo} info
   * @returns {{id:number,buff:number}[]}
   */
  // eslint-disable-next-line no-unused-vars
  get_race_contestants(info) {
    return [];
  }

  get_relation_buff() {
    return 0;
  }

  get_sex_acceptable() {
    return 0;
  }

  /** @returns {({[color]:string,content:string,[fontWeight]:string,[key]:string,[title]:string}|string)[]} */
  get_status() {
    return [];
  }

  get_success_rate_buff() {
    return 0;
  }

  /** @returns {({[color]:string,content:string,[fontWeight]:string,[key]:string,[title]:string}|string)[]} */
  get_talents() {
    return [];
  }

  get_train_buff() {
    return 0;
  }

  set_callname_from_src() {
    const my_src_chara = era.get('cflag:0:模版角色');
    if (my_src_chara > 0 && era.get(`callname:${this.id}`)[my_src_chara]) {
      era.set(
        `callname:${this.id}:0`,
        era.get(`callname:${this.id}:${my_src_chara}`),
      );
      return true;
    }
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      let callname;
      if (!era.get(`cflag:${this.id}:父方角色`)) {
        callname = '爸爸';
      } else if (!era.get(`cflag:${this.id}:母方角色`)) {
        callname = '妈妈';
      } else {
        callname = '训练员' + get_chara_talk(0).get_adult_sex_title();
      }
      era.set(`callname:${this.id}:0`, callname);
    }
  }

  /**
   * @param {boolean} before_race
   * @param {number} loc
   */
  // eslint-disable-next-line no-unused-vars
  set_foreign_debuff(before_race, loc) {
    era.set(
      `status:${this.id}:水土不服`,
      4 - era.get(`talent:${this.id}:身体素质`),
    );
    if (before_race) {
      era.set(
        `status:${this.id}:客场作战`,
        4 + era.get(`talent:${this.id}:自信程度`),
      );
    }
  }

  set_my_name() {
    if (
      era.get(`callname:${this.id}:${this.id}`) ===
      era.get(`callname:${this.id}:-2`)
    ) {
      era.set(`callname:${this.id}:${this.id}`, '我');
    }
  }

  /** @returns {number} */
  set_my_sex() {
    return era.set(`cflag:${this.id}:性别`, era.get('flag:角色性别'));
  }

  /** @param {PseudoUma} uma */
  // eslint-disable-next-line no-unused-vars
  set_pseudo_uma(uma) {}
}

module.exports = CustomizedMec;
