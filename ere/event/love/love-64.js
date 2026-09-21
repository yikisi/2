const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_change_lust,
  sys_change_motivation,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_ero_page = require('#/page/page-ero');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const event_hooks = require('#/data/event/event-hooks');
const PamaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-64');
const { location_enum } = require('#/data/locations');
const { vehicle_enum } = require('#/data/move-const');
const RaceHistory = require('#/data/race/model/race-history');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  get #dict() {
    return generate_dictionary(this.id, {
      call: !0,
      teen: !0,
      uma: !0,
      your_name: !0,
    });
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async distance(pama, me, callname, stage, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    new PamaLifeMarks().love_24 = 2;
    await print_title_with_kojo(this.#kojo, 'distance', pama, this.#dict);
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async happy(pama, me, callname, stage, extra_flag, event_object) {
    if (sys_check_awake(this.id) && sys_check_awake(0)) {
      add_event(stage, event_object);
      await this.#kojo['pre-happy'](this.#dict);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'happy', pama, this.#dict);
  }

  async 49(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code === 1 || me.sex_code === 0) {
      return await super['49'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const helios = get_chara_talk(65);
    const ret = await print_title_with_kojo(this.#kojo, '49', pama, {
      ...this.#dict,
      '65_CALL': sys_get_callname(65, this.id),
      COLOR_65: helios.color,
      HELIOS: helios.name,
    });
    if (ret['update'] === 2) {
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
      era.set(`cflag:${this.id}:爱慕暂拒`, 49);
    }
  }

  async 74(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code === 1 || me.sex_code === 0) {
      return await super['74'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const ret = await print_title_with_kojo(this.#kojo, '74', pama, this.#dict);
    if (ret['update'] === 2) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 74);
      await punish_rejecting_love(this.id);
    }
  }

  async 89(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code === 1 && me.sex_code === 1) {
      return await super['89'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const ret = await print_title_with_kojo(this.#kojo, '89', pama, {
      ...this.#dict,
      SIBLINGS: pama.siblings_sex_title,
    });
    if (ret['update'] === 2) {
      await sys_love_uma_in_event(this.id);
      begin_and_init_ero(0, this.id);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(this.id, part_enum.mouth),
        false,
      );
      if (ret['sex'] === 1) {
        await print_ero_page(this.id, true);
        await end_ero_and_show_result(true);
      } else {
        end_ero_and_train();
      }
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
    }
  }

  async 99(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code !== 0 || me.sex_code === 0) {
      return await super['99'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const ace = get_chara_talk(104);
    const ret = await print_title_with_kojo(this.#kojo, '99', pama, {
      ...this.#dict,
      '104_CALL': sys_get_callname(104, this.id),
      ACE: ace.name,
      COLOR_104: ace.color,
    });
    if (ret['update'] === 2) {
      await sys_love_uma_in_event(this.id);
      begin_and_init_ero(this.id);
      await quick_make_love(
        new EroParticipant(this.id, part_enum.hand),
        new EroParticipant(this.id, part_enum.virgin),
        false,
      );
      if (ret['orgasm'] === 1) {
        await masturbate(this.id);
        sys_change_lust(this.id, -1000);
      } else {
        set_palam_to_max(this.id, part_enum.virgin);
        sys_change_lust(this.id, 1000);
      }
      if (sys_change_motivation(this.id, ret[3] === 1 ? 1 : -1)) {
        await era.waitAnyKey();
      }
      end_ero_and_train();
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 99);
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async here(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'here', pama, this.#dict);
    new PamaEduMarks().movie_job = 0;
    begin_and_init_ero(0, this.id);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(this.id, part_enum.virgin),
      false,
    );
    await quick_make_love(
      new EroParticipant(this.id, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(this.id, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
    sys_change_lust(this.id, get_random_value(500, 1000));
    return true;
  }

  /** @param {CharaTalk} pama */
  async escape(pama) {
    const ret = print_title_with_kojo(this.#kojo, 'escape', pama, {
      ...this.#dict,
      SELF_CALL: sys_get_callname(this.id, this.id),
    });
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    const l_cache = era.get('flag:当前位置');
    let loc = -1;
    if (era.get(`love:${this.id}`) >= 75) {
      if (ret['out'] === 1 && ret['special'] === 2) {
        if (ret['location'] === 1) {
          loc = location_enum.atrium;
        } else {
          loc = location_enum.love_hotel;
        }
      } else if (ret['out'] === 2 && ret['special'] === 2) {
        loc = location_enum.office;
      }
    }
    if (loc >= 0) {
      era.set('flag:当前位置', loc);
      await quick_into_sex(this.id);
      switch (loc) {
        case location_enum.office:
          await this.#kojo['valentine_out_after_sex'](this.#dict);
          break;
        case location_enum.atrium:
          await this.#kojo['valentine_office_after_sex'](this.#dict);
      }
    }
    era.set('flag:当前位置', l_cache);
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async trust(pama, me, callname, stage, extra, event_object) {
    if (
      RaceHistory.get(this.id)
        .get_entries()
        .some((r) => r.weeks >= 96) ||
      era.get(`cflag:${this.id}:育成回合计时`) >= 3 * 48
    ) {
      return;
    }
    if (era.get(`cflag:${this.id}:自主训练`) === 0) {
      add_event(stage, event_object);
      return;
    }
    const ace = get_chara_talk(104);
    await print_title_with_kojo(this.#kojo, 'trust', pama, {
      ...this.#dict,
      ACE: ace.name,
      COLOR_104: ace.color,
    });
    if (!era.get(`talent:${this.id}:病娇`)) {
      era.set(`talent:${this.id}:病娇`, 1);
    }
    global_achievement.c_pama1 = 1;
    add_event(event_hooks.week_start, event_object.set_arg('is_you'));
  }

  /** @param {CharaTalk} pama */
  async is_you(pama) {
    await print_title_with_kojo(this.#kojo, 'is_you', pama, this.#dict);
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async wait_or(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('flag:当前互动角色') > 0 &&
      era.get('flag:当前互动角色') !== this.id
    ) {
      await this.#kojo['pre-rooftop'](this.#dict);
      add_event(stage, event_object);
      await era.clear(1);
      return;
    }
    let title;
    if (new PamaEduMarks().only_you > 3) {
      title = this.#kojo['rooftop_3'].title;
    } else {
      title = this.#kojo['rooftop'].title;
    }
    await print_event_name(title, pama);
    await this.#kojo['rooftop_event']({
      ...this.#dict,
      SELF_CALL: sys_get_callname(this.id, this.id),
    });
    if (all_reward_in_event(this.id, { relation: get_random_value(50, 100) })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async s_feeling(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      await pama.print_and_wait(i18n().kojo[this.id].notify_rooftop(pama));
      add_event(stage, event_object);
      await era.clear(1);
      return;
    }
    new PamaEduMarks().only_you++;
    if (
      (
        await print_title_with_kojo(this.#kojo, 's_feeling', pama, {
          ...this.#dict,
          SELF_CALL: sys_get_callname(this.id, this.id),
        })
      )['select'] === 2
    ) {
      const cache = era.get('flag:当前位置');
      era.set('flag:当前位置', location_enum.love_hotel);
      await quick_into_sex(this.id, this.id, true);
      await this.#kojo['s_feeling_end'](this.#dict);
      era.set('flag:当前位置', cache);
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async nap(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(stage, event_object);
      await this.#kojo['pre-nap'](this.#dict);
      await era.clear(1);
      return;
    }
    const ret = await print_title_with_kojo(
      this.#kojo,
      'nap',
      pama,
      this.#dict,
    );
    let relation = 0;
    let love;
    switch (ret['select']) {
      case 1:
        relation = 10;
        break;
      case 2:
        love = 2;
        break;
      case 3:
        if (ret['sex'] === 1) {
          sys_change_lust(this.id, 1000);
        } else {
          await quick_into_sex(this.id, this.id, ret[7] === 2);
          await this.#kojo['nap_end'](this.#dict);
        }
    }
    if (all_reward_in_event(this.id, { love, relation })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async leisure(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(stage, event_object);
      await this.#kojo['pre-leisure'](this.#dict);
      await era.clear(1);
      return;
    }
    const ret = await print_title_with_kojo(this.#kojo, 'leisure', pama, {
      ...this.#dict,
      SELF_CALL: sys_get_callname(this.id, this.id),
    });
    if (ret['sex'] === 3 && ret['sex2'] === 1) {
      await quick_into_sex(this.id);
    }
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async cinema(pama, me, callname, stage, extra, event_object) {
    const ardan = get_chara_talk(71);
    const dict = {
      ...this.#dict,
      ARDAN: ardan.name,
      COLOR_71: ardan.color,
    };
    if (
      era.get('flag:当前互动角色') !== this.id ||
      era.get('cflag:71:位置') !== era.get(`cflag:${this.id}:位置`)
    ) {
      add_event(stage, event_object);
      await this.#kojo['pre-cinema'](dict);
      await era.clear(1);
      return;
    }
    const ret = await print_title_with_kojo(this.#kojo, 'cinema', pama, dict);
    let lover = 0;
    const cache = era.get('flag:当前位置');
    era.set('flag:当前位置', location_enum.love_hotel);
    if (ret['movie'] === 1) {
      if (ret['sex'] === 2) {
        lover = this.id;
      }
    } else {
      lover = 71;
    }
    if (lover > 0) {
      let supporter;
      let master = 0;
      if (lover === 71) {
        supporter = this.id;
        master = 71;
      } else {
        supporter = 71;
      }
      await quick_into_sex.quick_into_3p(lover, supporter, master);
      await this.#kojo['movie_end'](dict);
    }
    era.set('flag:当前位置', cache);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async delicious(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'delicious', pama, this.#dict);
    let wait = all_reward_in_event(this.id, {
      base: [200],
    });
    wait =
      all_reward_in_event(0, {
        base: [200],
      }) || wait;
    sys_change_weight(this.id, get_random_value(10, 20));
    sys_change_weight(0, get_random_value(10, 20));
    if (wait) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async rest(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'rest', pama, this.#dict);
    await quick_into_sex(this.id);
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async travel(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('flag:当前互动角色') !== this.id ||
      era.get('flag:多人载具') !== vehicle_enum.pama
    ) {
      add_event(stage, event_object);
      await this.#kojo['pre-travel'](this.#dict);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'travel', pama, this.#dict);
    const cache = era.get('flag:当前位置');
    era.set('flag:当前位置', location_enum.river);
    await quick_into_sex(this.id);
    era.set('flag:当前位置', cache);
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async joke(pama, me, callname, stage, extra, event_object) {
    if (
      era.get(`status:${this.id}:沉睡`) > 0 ||
      era.get(`status:${this.id}:马跳S`) > 0
    ) {
      add_event(stage, event_object);
      await this.#kojo['pre-joke'](this.#dict);
      return;
    }
    const ace = get_chara_talk(104);
    await print_title_with_kojo(this.#kojo, 'joke', pama, {
      ...this.#dict,
      ACE: ace.name,
      COLOR_104: ace.color,
    });
    add_event(stage, event_object.set_arg('not_joke'));
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async not_joke(pama, me, callname, hook, extra, event_object) {
    const ret = await print_title_with_kojo(this.#kojo, 'not_joke', pama, {
      ...this.#dict,
      SELF_CALL: sys_get_callname(this.id, this.id),
    });
    if (ret['sex'] === 1) {
      await quick_into_sex(this.id);
      await this.#kojo['not_joke_end'](this.#dict);
    } else {
      add_event(event_hooks.week_start, event_object.set_arg('end_joke'));
    }
  }

  /** @param {CharaTalk} pama */
  async end_joke(pama) {
    await print_title_with_kojo(this.#kojo, 'end_joke', pama, this.#dict);
    if (all_reward_in_event(this.id, { relation: 0, love: 4 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async concern(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('cflag:0:位置') !== era.get(`cflag:${this.id}:位置`) ||
      era.get('cflag:0:位置') !== era.get('cflag:27:位置')
    ) {
      add_event(stage, event_object);
      return;
    }
    const ryan = get_chara_talk(27);
    const dict = {
      ...this.#dict,
      CALLNAME_27: sys_get_callname(27, 0),
      COLOR_27: ryan.color,
      RYAN: ryan.name,
    };
    let lover = this.id;
    let supporter;
    let master = 0;
    switch (
      (await print_title_with_kojo(this.#kojo, 'concern', pama, dict))['sex']
    ) {
      case 1:
        lover = 27;
        supporter = this.id;
        break;
      case 2:
        supporter = 27;
        break;
      case 3:
        supporter = 27;
        master = this.id;
    }
    await quick_into_sex.quick_into_3p(lover, supporter, master);
    await this.#kojo['concern_end'](dict);
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async dessert(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('cflag:0:位置') !== era.get(`cflag:${this.id}:位置`) ||
      era.get('cflag:0:位置') !== era.get('cflag:13:位置')
    ) {
      add_event(stage, event_object);
      return;
    }
    const mcqueen = get_chara_talk(13);
    const dict = {
      ...this.#dict,
      CALLNAME_13: sys_get_callname(13, 0),
      COLOR_13: mcqueen.color,
      MCQUEEN: mcqueen.name,
    };
    let master = 0;
    if (
      (await print_title_with_kojo(this.#kojo, 'dessert', pama, dict))[
        'sex'
      ] === 2
    ) {
      master = 13;
    }
    await quick_into_sex.quick_into_3p(13, this.id, master);
    await this.#kojo['dessert_end'](dict);
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async party(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('flag:当前互动角色') !== this.id ||
      era.get('cflag:0:位置') !== era.get(`cflag:${this.id}:位置`) ||
      era.get('cflag:0:位置') !== era.get('cflag:65:位置')
    ) {
      add_event(stage, event_object);
      return;
    }
    const helios = get_chara_talk(65);
    const dict = {
      ...this.#dict,
      CALLNAME_65: sys_get_callname(65, 0),
      COLOR_65: helios.color,
      HELIOS: helios.name,
    };
    let master = 0;
    if (
      (await print_title_with_kojo(this.#kojo, 'party', pama, dict))['sex'] ===
      2
    ) {
      master = this.id;
    }
    await quick_into_sex.quick_into_3p(this.id, 65, master);
    await this.#kojo['party_end'](dict);
    return true;
  }
};
