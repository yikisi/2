const action_type_enum = {
  action_end: 0,
  back_basement: 0,
  get_up: 0,
  outside: 0,
  rescue: 0,
};
Object.keys(action_type_enum).forEach((k, i) => (action_type_enum[k] = i));

class BasementAction {
  static action_type_enum = action_type_enum;
  static create_from_object(obj) {
    return new BasementAction(obj.chara_id, obj.timer, obj.type);
  }

  /**
   * @param {number} chara_id
   * @param {number} timer
   * @param {number} type
   */
  constructor(chara_id, timer, type) {
    this.chara_id = chara_id;
    this.timer = timer;
    this.type = type;
  }
}

module.exports = BasementAction;
