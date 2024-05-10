const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

class CustomizedMec {
  constructor(chara_id) {
    this.chara_id = chara_id;
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
    const base = era.get(`cstr:${this.chara_id}:头像`);
    let temp;
    if ((temp = era.get(`cstr:${this.chara_id}:决胜服`)) === -1) {
      return [`${base}_运`, base, 'default'];
    }
    return [`${base}${temp}`, base, `${base}_运`, 'default'];
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

  set_callname() {
    let callname;
    if (!era.get(`cflag:${this.chara_id}:父方角色`)) {
      callname = '爸爸';
    } else if (!era.get(`cflag:${this.chara_id}:母方角色`)) {
      callname = '妈妈';
    } else {
      callname = '训练员' + get_chara_talk(0).get_adult_sex_title();
    }
    era.set(`callname:${this.chara_id}:0`, callname);
  }

  /**
   * @param {boolean} before_race
   * @param {number} loc
   */
  // eslint-disable-next-line no-unused-vars
  set_foreign_debuff(before_race, loc) {
    era.set(
      `status:${this.chara_id}:水土不服`,
      4 - era.get(`talent:${this.chara_id}:身体素质`),
    );
    if (before_race) {
      era.set(
        `status:${this.chara_id}:客场作战`,
        4 + era.get(`talent:${this.chara_id}:自信程度`),
      );
    }
  }

  set_my_name() {
    if (
      era.get(`callname:${this.chara_id}:${this.chara_id}`) ===
      era.get(`callname:${this.chara_id}:-2`)
    ) {
      era.set(`callname:${this.chara_id}:${this.chara_id}`, '我');
    }
  }

  /** @param {PseudoUma} uma */
  // eslint-disable-next-line no-unused-vars
  set_pseudo_uma(uma) {}
}

module.exports = CustomizedMec;
