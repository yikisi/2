const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const ArdanLifeMarks = require('#/data/event/life-event-marks/life-event-marks-71');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async bearing(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    new ArdanLifeMarks().love_1 = 2;
    await print_title_with_kojo(this.#kojo, 'bearing', ardan, {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      YOUNG_LADY:
        ardan.sex_code === 1
          ? i18n().name.young_master
          : i18n().name.young_lady,
    });
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async theater(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'theater', ardan, {
      ...this.#dict,
      CALL_86: sys_get_callname(this.id, 86),
    });
  }

  async 49(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    if (
      (await print_title_with_kojo(this.#kojo, '49', ardan, this.#dict))[
        'update'
      ] === 1
    ) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 49);
      await punish_rejecting_love(this.id);
    }
  }

  async 74(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          '74',
          ardan,
          generate_dictionary(this.id, { call: !0, your_sex: !0 }),
        )
      )['update'] === 1
    ) {
      await sys_love_uma_in_event(this.id);
      get_custom_mec(this.id).set_callname();
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 74);
      await punish_rejecting_love(this.id);
    }
  }

  async 89(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    if (
      (await print_title_with_kojo(this.#kojo, '89', ardan, this.#dict))[
        'update'
      ] === 1
    ) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
      await punish_rejecting_love(this.id);
    }
  }

  async 99(ardan, me, callname, stage, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(stage, event_object);
      return;
    }
    const h = this.#kojo['99'];
    await print_event_name(h.title.replace('%SEX%', ardan.sex), ardan);
    if ((await h(this.#dict))['update'] === 1) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 99);
      await punish_rejecting_love(this.id);
    }
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async travel(ardan, me, callname, stage, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    if (
      (await print_title_with_kojo(this.#kojo, 'travel', ardan, this.#dict))[
        'select'
      ] === 2
    ) {
      add_event(stage, event_object);
      return;
    }
    era.println();
    add_jewel_reward(this.id, 10, 500);
    return true;
  }
};
