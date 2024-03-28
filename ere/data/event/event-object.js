class EventObject {
  /** @type {number} */
  chara_id;
  /** @type {number} */
  type;
  /** @type {boolean} */
  special;
  arg;

  static create_from_object(_obj) {
    if (_obj instanceof EventObject) {
      return _obj;
    }
    return new EventObject(_obj.chara_id, _obj.type, _obj.special).set_arg(
      _obj.arg,
    );
  }

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

  copy() {
    return new EventObject(this.chara_id, this.type, this.special).set_arg(
      this.arg,
    );
  }

  set_arg(arg) {
    this.arg = arg;
    return this;
  }
}

module.exports = EventObject;
