const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const BrightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-74');
const { location_enum } = require('#/data/locations');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async 49(bright, me, callname, stage, extra, ebj) {
    if (
      (await print_title_with_kojo(this.#kojo, '49', bright, this.#dict))[
        'update'
      ] === 1
    ) {
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
      // CFLAGNAME:46 = 爱慕暂拒
      era.set(`cflag:${this.id}:46`, 49);
    }
  }

  async 74(bright, me, callname, stage, extra, ebj) {
    const dober = get_chara_talk(59);
    await print_title_with_kojo(this.#kojo, '74', bright, {
      ...this.#dict,
      D_NAME: dober.name,
      D_COLOR: dober.color,
    });
    await sys_love_uma_in_event(this.id);
  }

  async 89(bright, me, callname, stage, extra, ebj) {
    if (
      (await print_title_with_kojo(this.#kojo, '89', bright, this.#dict))[
        'update'
      ] === 1
    ) {
      begin_and_init_ero(0, this.id);
      await print_ero_page(this.id, true);
      await end_ero_and_show_result(true);
      await this.#kojo['89_sex'](this.#dict);
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
      // CFLAGNAME:46 = 爱慕暂拒
      era.set(`cflag:${this.id}:46`, 89);
    }
  }

  async 99(bright, me, callname, stage, extra, ebj) {
    if (stage === event_hooks.week_end) {
      await print_title_with_kojo(this.#kojo, '99_1', bright, this.#dict);
      add_event(event_hooks.week_start, ebj);
    } else {
      if (
        (
          await print_title_with_kojo(this.#kojo, '99_2', bright, {
            ...this.#dict,
            CHARA_FULL: bright.actual_name_with_title,
          })
        )['sex'] === 2
      ) {
        begin_and_init_ero(0, this.id);
        await print_ero_page(this.id, true);
        await end_ero_and_show_result(true);
        await this.#kojo['99_sex'](this.#dict);
      }
      get_custom_mec(this.id).set_callname();
      await sys_love_uma_in_event(this.id);
    }
  }

  /** @param {CharaTalk} bright */
  async small_party(bright) {
    const dober = get_chara_talk(59);
    await print_title_with_kojo(this.#kojo, 'small_party', bright, {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      D_COLOR: dober.color,
      D_NAME: dober.name,
    });
    let wait = all_reward_in_event(this.id, { relation: 50 });
    wait = all_reward_in_event(59, { relation: 50 }) || wait;
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} bright
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async all_along(bright, me, callname, stage, extra, event_object) {
    // FLAGNAME:5 = 当前互动角色
    if (era.get('flag:5') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    const dict = this.#dict;
    const ret = (
      await print_title_with_kojo(this.#kojo, 'all_along', bright, dict)
    )['sex'];
    if (ret > 0) {
      begin_and_init_ero(0, this.id);
      if (ret === 2) {
        // TFLAGNAME:7 = 主导权
        era.set('tflag:7', this.id);
      }
      await print_ero_page(this.id, true);
      await end_ero_and_show_result(true);
      await this.#kojo['all_along_sex'](dict);
    }
    return true;
  }

  /**
   * @param {CharaTalk} bright
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async miss_tram(bright, me, callname, stage, extra, event_object) {
    if (era.get('flag:5') > 0 && era.get('flag:5') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    const pama = get_chara_talk(64);
    const dict = {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      CALLNAME_64: sys_get_callname(64, 0),
      CALL_64: sys_get_callname(this.id, 64),
      P_COLOR: pama.color,
      P_NAME: pama.name,
      YOUNGER_SISTER: bright.younger_sibling_sex_title,
    };
    const ret = (
      await print_title_with_kojo(this.#kojo, 'miss_tram', bright, dict)
    )['sex'];
    if (ret > 0) {
      // FLAGNAME:4 = 当前位置
      const curr_loc = era.get('flag:4');
      era.set('flag:4', location_enum.love_hotel);
      begin_and_init_ero(0, 64, this.id);
      if (ret === 1) {
        // TFLAGNAME:7 = 主导权
        era.set('tflag:7', this.id);
        era.set('tflag:6', 64);
        await print_ero_page(this.id, true);
      } else {
        era.set('tflag:6', this.id);
        await print_ero_page(64, true);
      }
      await end_ero_and_show_result(true);
      await this.#kojo['miss_tram_sex'](dict);
      era.set('flag:4', curr_loc);
    }
    return true;
  }

  /** @param {CharaTalk} bright */
  async dear_sister(bright) {
    const dober = get_chara_talk(59);
    const dict = {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      CALL_59: sys_get_callname(this.id, 59),
      CHARA_FULL: bright.actual_name_with_title,
      D_COLOR: dober.color,
      D_NAME: dober.name,
      YOUNGER_SISTER: bright.younger_sibling_sex_title,
    };
    if (
      (await print_title_with_kojo(this.#kojo, 'dear_sister', bright, dict))[
        'sex'
      ] === 1
    ) {
      begin_and_init_ero(0, 59, this.id);
      era.set('tflag:6', this.id);
      await print_ero_page(59, true);
      await end_ero_and_show_result(true);
    }
  }

  /** @param {CharaTalk} bright */
  async the_fruit(bright) {
    // CFLAGNAME:56 = 节日事件标记
    era.set(`cflag:${this.id}:56`, 0);
    await print_title_with_kojo(this.#kojo, 'the_fruit', bright, this.#dict);
    if (all_reward_in_event(this.id, { relation: 30 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} bright
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async know_us(bright, me, callname, stage, extra, event_object) {
    if (era.get('flag:5') > 0 && era.get('flag:5') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    new BrightLifeMarks().know_us = 2;
    await print_title_with_kojo(this.#kojo, 'know_us', bright, {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      ELDER_SISTER: bright.elder_sibling_sex_title,
    });
    return true;
  }

  /** @param {CharaTalk} bright */
  async dear_elder_sister(bright) {
    const ryan = get_chara_talk(27);
    const dict = {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      CALLNAME_27: sys_get_callname(27, 0),
      CALL_27: sys_get_callname(this.id, 27),
      R_COLOR: ryan.color,
      R_NAME: ryan.name,
      YOU_CALL_27: sys_get_callname(0, 27),
    };
    const ret = (
      await print_title_with_kojo(this.#kojo, 'dear_elder_sister', bright, dict)
    )['sex'];
    begin_and_init_ero(0, 27, this.id);
    if (ret === 1) {
      era.set('tflag:7', this.id);
      era.set('tflag:6', 27);
      await print_ero_page(this.id, true);
    } else {
      era.set('tflag:6', this.id);
      await print_ero_page(27, true);
    }
    await end_ero_and_show_result(true);
    await this.#kojo['dear_elder_sister_sex'](dict);
  }
};
