class ICustomizedEdu {
  /** @param {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }

  get_this() {
    return this;
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async back_school(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async celebration(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async office_cook(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async office_game(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async office_prepare(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async office_rest(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async office_study(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async out_church(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async out_mejiro(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async out_river(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async out_shopping(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async out_start(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async out_station(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async school_atrium(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async school_chairman(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async school_clinic(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async school_god(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async school_rooftop(chara, me, callname, hook, extra_flag, event_object) {}
}

module.exports = ICustomizedEdu;
