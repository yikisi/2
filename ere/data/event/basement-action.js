class BasementAction {
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
