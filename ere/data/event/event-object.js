class EventObject {
  chara_id;
  type;
  special;
  arg;

  /**
   * @param {number} chara_id
   * @param {number} type
   * @param {boolean} [special]
   */
  constructor(chara_id, type, special) {
    this.chara_id = chara_id;
    this.type = type;
    this.special = special;
  }

  set_arg(arg) {
    this.arg = arg;
    return this;
  }
}

module.exports = EventObject;
