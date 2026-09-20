const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const BrightEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-74');
const { location_enum } = require('#/data/locations');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async train(attr) {
    await this.#kojo.train(this.#dict);
  }

  /** @param {CharaTalk} bright */
  async at_my_side(bright) {
    await print_title_with_kojo(this.#kojo, 'at_my_side', bright, {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      CALL_13: sys_get_callname(this.id, 13),
      CALL_27: sys_get_callname(this.id, 27),
      CALL_64: sys_get_callname(this.id, 64),
      ELDER_SISTER: bright.elder_sibling_sex_title,
    });
    return true;
  }

  /**
   * @param {CharaTalk} bright
   * @param {CharaTalk} me
   */
  async mejiro_tea(bright, me) {
    let relation;
    let love = 0;
    const mcqueen = get_chara_talk(13);
    const ryan = get_chara_talk(27);
    new BrightEduMarks().main++;
    if (
      (
        await print_title_with_kojo(this.#kojo, 'mejiro_tea', bright, {
          ...generate_dictionary(this.id, { call: !0, uma: !0 }),
          CALL_13: sys_get_callname(this.id, 13),
          CALL_27: sys_get_callname(this.id, 27),
          ELDER_SISTER: bright.elder_sibling_sex_title,
          M_COLOR: mcqueen.color,
          M_NAME: mcqueen.name,
          R_COLOR: ryan.color,
          R_NAME: ryan.name,
          SIR: me.adult_sex_title,
          YOUNG_LADY:
            bright.sex_code === 1
              ? i18n().name.young_master
              : i18n().name.young_lady,
        })
      )['relation'] === 1
    ) {
      relation = 8;
    } else {
      relation = 4;
      love = 1;
    }
    if (all_reward_in_event(this.id, { relation, love })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} bright
   * @param {CharaTalk} me
   */
  async inherit(bright, me) {
    const ryan = get_chara_talk(27);
    new BrightEduMarks().main++;
    await print_title_with_kojo(this.#kojo, 'inherit', bright, {
      ...this.#dict,
      CALL_27: sys_get_callname(this.id, 27),
      ELDER_SISTER: bright.elder_sibling_sex_title,
      R_COLOR: ryan.color,
      R_NAME: ryan.name,
      SIR: me.adult_sex_title,
      YOUNGER_SISTER: bright.younger_sibling_sex_title,
    });
    if (all_reward_in_event(this.id, { relation: 20 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} bright */
  async my_way(bright) {
    new BrightEduMarks().main++;
    await print_title_with_kojo(this.#kojo, 'my_way', bright, {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      ELDER_SISTER: bright.elder_sibling_sex_title,
    });
    if (all_reward_in_event(this.id, { relation: 15 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} bright */
  async light(bright) {
    new BrightEduMarks().main++;
    await print_title_with_kojo(this.#kojo, 'light', bright, {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      CHARA_FULL: bright.actual_name_with_title,
    });
    if (all_reward_in_event(this.id, { relation: 20 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} bright */
  async for_tenn_spr(bright) {
    new BrightEduMarks().main++;
    let relation = 0;
    let love = 0;
    const ret = (
      await print_title_with_kojo(
        this.#kojo,
        'for_tenn_spr',
        bright,
        this.#dict,
      )
    )['relation'];
    if (ret === 1) {
      relation = 15;
    } else if (ret === 2) {
      love = 2;
    }
    if (all_reward_in_event(this.id, { love, relation })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} bright */
  async mejiro_name(bright) {
    new BrightEduMarks().main++;
    let relation = 0;
    let love = 0;
    const ret = (
      await print_title_with_kojo(this.#kojo, 'mejiro_name', bright, {
        ...this.#dict,
        ELDER_SISTER: bright.elder_sibling_sex_title,
      })
    )['relation'];
    if (ret === 1) {
      relation = 20;
    } else if (ret === 2) {
      love = 3;
    }
    if (all_reward_in_event(this.id, { love, relation })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} bright */
  async accel_era(bright) {
    await print_title_with_kojo(
      this.#kojo,
      'accel_era',
      bright,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    if (all_reward_in_event(this.id, { relation: 50 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} bright
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async hot_spring_ticket(bright, me, callname, hook, extra, event_object) {
    if (era.get('flag:5') !== this.id) {
      add_event(hook.hook, event_object);
      return;
    }
    // CFLAGNAME:56 = 节日事件标记
    era.set(`cflag:${this.id}:56`, 0);
    await print_title_with_kojo(
      this.#kojo,
      'hot_spring_ticket',
      bright,
      this.#dict,
    );
    new BrightEduMarks().hot_spring = 1;
    return true;
  }

  /**
   * @param {CharaTalk} bright
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async hot_spring(bright, me, callname, hook, extra, event_object) {
    if (era.get('flag:5') !== this.id) {
      add_event(hook.hook, event_object);
      return;
    }
    const dict = { ...this.#dict, YOUR_NAME: me.actual_name };
    await print_title_with_kojo(this.#kojo, 'hot_spring', bright, dict);
    // FLAGNAME:4 = 当前位置
    const curr_loc = era.get('flag:4');
    era.set('flag:4', location_enum.hot_spring);
    begin_and_init_ero(0, this.id);
    await print_ero_page(this.id, true);
    await end_ero_and_show_result(true);
    await this.#kojo['hot_spring_sex'](dict);
    era.set('flag:4', curr_loc);
    if (all_reward_in_event(this.id, { love: 2 })) {
      await era.waitAnyKey();
    }
    if (era.get(`love:${this.id}`) >= 90) {
      era.drawLine();
      await print_title_with_kojo(this.#kojo, 'wish', bright, dict);
      if (all_reward_in_event(this.id, { relation: 50 })) {
        await era.waitAnyKey();
      }
    }
    return true;
  }

  /** @param {CharaTalk} bright */
  async where_is_time(bright) {
    await print_title_with_kojo(
      this.#kojo,
      'where_is_time',
      bright,
      this.#dict,
    );
    // STATUSNAME:0 = 练习X手
    era.set(`status:${this.id}:0`, 0);
    if (all_reward_in_event(this.id, { attr: [0, 10, 0, 0, 10] })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} bright */
  async sleep(bright) {
    await print_title_with_kojo(this.#kojo, 'sleep', bright, this.#dict);
    // STATUSNAME:1 = 熬夜
    era.set('status:0:1', 0);
  }

  async race_start(bright, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:48`);
    let key;
    let dict;
    switch (extra.race) {
      case race_enum.begin_race:
        if (edu_weeks === 23) {
          key = 'begin_race';
          dict = this.#dict;
        }
        break;
      case race_enum.hope_sta:
        key = 'hope_sta';
        dict = this.#dict;
        break;
      case race_enum.sats_sho:
        key = 'sats_sho';
        dict = {
          ...generate_dictionary(this.id, { call: !0, uma: !0 }),
          ELDER_SISTER: bright.elder_sibling_sex_title,
        };
        break;
      case race_enum.toky_yus:
        key = 'toky_yus';
        dict = this.#dict;
        break;
      case race_enum.kiku_sho:
        key = 'kiku_sho';
        dict = { ...this.#dict, CALL_13: sys_get_callname(this.id, 13) };
        break;
      case race_enum.stay_sta:
        if (edu_weeks < 96) {
          key = 'stay_sta';
          dict = this.#dict;
        }
        break;
      case race_enum.tenn_spr:
        key = 'tenn_spr';
        {
          const mcqueen = get_chara_talk(13);
          const ryan = get_chara_talk(27);
          const pama = get_chara_talk(64);
          dict = {
            ...this.#dict,
            CALL_13: sys_get_callname(this.id, 13),
            CALL_27: sys_get_callname(this.id, 27),
            CALL_64: sys_get_callname(this.id, 64),
            ELDER_SISTER: bright.elder_sibling_sex_title,
            M_COLOR: mcqueen.color,
            M_NAME: mcqueen.name,
            P_COLOR: pama.color,
            P_NAME: pama.name,
            R_COLOR: ryan.color,
            R_NAME: ryan.name,
          };
        }
        break;
      case race_enum.takz_kin:
        if (
          edu_weeks >= 96 &&
          extra.contestants.some((u) => u.index_chara === 59)
        ) {
          const dober = get_chara_talk(59);
          key = 'takz_kin';
          dict = {
            ...generate_dictionary(this.id, { uma: !0 }),
            D_COLOR: dober.color,
            D_NAME: dober.name,
          };
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          key = 'tenn_sho';
          dict = this.#dict;
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks > 96) {
          const mcqueen = get_chara_talk(13);
          const ryan = get_chara_talk(27);
          const dober = get_chara_talk(59);
          const pama = get_chara_talk(64);
          key = 'arim_kin';
          dict = {
            ...this.#dict,
            D_COLOR: dober.color,
            D_NAME: dober.name,
            ELDER_SISTER: bright.elder_sibling_sex_title,
            M_COLOR: mcqueen.color,
            M_NAME: mcqueen.name,
            P_COLOR: pama.color,
            P_NAME: pama.name,
            R_COLOR: ryan.color,
            R_NAME: ryan.name,
          };
        }
    }
    if (key === void 0) {
      await super.race_start(bright, me, callname, hook, extra);
    } else {
      await this.#kojo[key](dict);
    }
  }

  async race_end(bright, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:48`);
    let key;
    let dict;
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1) {
          key = 'begin_race_end';
          dict = { ...this.#dict, CALL_27: sys_get_callname(this.id, 27) };
        }
        break;
      case race_enum.hope_sta:
        dict = generate_dictionary(this.id);
        if (extra.rank === 1) {
          key = 'hope_sta_win';
        } else {
          key = 'hope_sta_lose';
        }
        break;
      case race_enum.sats_sho:
        if (extra.rank === 1) {
          key = 'sats_sho_win';
          dict = this.#dict;
        } else {
          key = 'sats_sho_lose';
          dict = {
            ...this.#dict,
            ELDER_SISTER: bright.elder_sibling_sex_title,
          };
        }
        break;
      case race_enum.toky_yus:
        dict = this.#dict;
        if (extra.rank === 1) {
          key = 'toky_yus_win';
        } else {
          key = 'toky_yus_lose';
        }
        break;
      case race_enum.kiku_sho:
        dict = this.#dict;
        if (extra.rank === 1) {
          key = 'kiku_sho_win';
          dict = {
            ...dict,
            CALL_13: sys_get_callname(this.id, 13),
            ELDER_SISTER: bright.elder_sibling_sex_title,
          };
        } else {
          key = 'kiku_sho_lose';
        }
        break;
      case race_enum.tenn_spr:
        if (extra.rank === 1) {
          key = 'tenn_spr_win';
          dict = { ...this.#dict, SIBLINGS: bright.siblings_sex_title };
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && extra.rank === 1) {
          key = 'tenn_sho_win';
          dict = {
            ...generate_dictionary(this.id),
            ELDER_SISTER: bright.elder_sibling_sex_title,
          };
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks > 96 && extra.rank === 1) {
          dict = this.#dict;
          const ret = (await this.#kojo['arim_kin_win'](dict))['sex'];
          if (ret === 1) {
            extra.love_change = 5;
          } else if (ret === 2) {
            begin_and_init_ero(0, this.id);
            await print_ero_page(this.id, true);
            await end_ero_and_show_result(true);
            await this.#kojo['arim_kin_sex'](dict);
          }
          return;
        }
    }
    if (key === void 0) {
      await super.race_end(bright, me, callname, hook, extra);
    } else {
      await this.#kojo[key](dict);
    }
  }
};
