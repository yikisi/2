const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const { i_pama_yandere } = require('#/event/snippets/106400');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return {
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      SELF_CALL: sys_get_callname(this.id, this.id),
    };
  }

  async train() {
    await this.#kojo['train'](this.#dict);
  }

  async train_success_add(pama, me, callname, hook) {
    hook.arg =
      (await print_title_with_kojo(this.#kojo, 'ts_add', pama, this.#dict))[
        'select'
      ] === 1;
  }

  async train_fail(pama, me, callname, hook, extra_flag) {
    if (extra_flag.train === attr_enum.intelligence) {
      return await super.train_fail(pama, me, callname, hook, extra_flag);
    }
    await CustomizedEdu.print_fail_info_in_train(
      pama,
      extra_flag.train,
      extra_flag.fumble,
    );
    era.println();
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    await print_title_with_kojo(this.#kojo, 'train_fail', pama, this.#dict);
  }

  /** @param {CharaTalk} pama */
  async beginning(pama) {
    await print_title_with_kojo(this.#kojo, 'beginning', pama, this.#dict);
    if (all_reward_in_event(this.id, { relation: get_random_value(25, 75) })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async rumor(pama) {
    await print_title_with_kojo(this.#kojo, 'rumor', pama, this.#dict);
    if (all_reward_in_event(this.id, { motivation: -1 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async strange(pama) {
    await print_title_with_kojo(this.#kojo, 'strange', pama, this.#dict);
    if (all_reward_in_event(this.id, { motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async free_race(pama, me, callname, hook, extra, event_object) {
    await print_title_with_kojo(this.#kojo, 'free_race', pama, this.#dict);
    if (all_reward_in_event(this.id, { pt: 10 })) {
      await era.waitAnyKey();
    }
    event_object.special = false;
    add_event(
      event_hooks.out_shopping,
      event_object.set_arg('important_place'),
    );
  }

  /** @param {CharaTalk} pama */
  async mejiro(pama) {
    await print_title_with_kojo(this.#kojo, 'mejiro', pama, this.#dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async new_year_1(pama) {
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    const ret = await print_title_with_kojo(
      this.#kojo,
      'new_year_1',
      pama,
      this.#dict,
    );
    let attr;
    let base;
    let pt;
    let relation = 0;
    let love;
    switch (ret['select']) {
      case 1:
        attr = [20];
        break;
      case 2:
        base = [100];
        break;
      case 3:
        pt = 20;
        if (ret[6] === 1) {
          relation = 10;
        } else {
          love = 2;
        }
    }
    if (all_reward_in_event(this.id, { attr, base, love, pt, relation })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async how(pama) {
    let relation = 0;
    let love;
    if (
      (await print_title_with_kojo(this.#kojo, 'how', pama, this.#dict))[
        'select'
      ] === 1
    ) {
      relation = 10;
    } else {
      love = 2;
    }
    if (all_reward_in_event(this.id, { relation, love })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async sister(pama) {
    let h;
    if (
      check_aim_race(RaceHistory.get(this.id).get(), race_enum.sats_sho, 1, 1)
    ) {
      h = this.#kojo['sisters'];
    } else {
      h = this.#kojo['sisters_1crown'];
    }
    await print_event_name(
      h.title.replace('%SISTERS%', pama.siblings_sex_title),
      pama,
    );
    await h(this.#dict);
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async hometown(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'hometown', pama, this.#dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_start_1(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const helios = get_chara_talk(65);
    await print_title_with_kojo(this.#kojo, 'summer_start_1', pama, {
      ...generate_dictionary(this.id, { teen: !0, uma: !0 }),
      '65_CALL': sys_get_callname(65, this.id),
      COLOR_65: helios.color,
      HELIOS: helios.name,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_middle_1(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const helios = get_chara_talk(65);
    const ret = await print_title_with_kojo(
      this.#kojo,
      'summer_middle_1',
      pama,
      {
        ...this.#dict,
        '65_CALL': sys_get_callname(65, this.id),
        COLOR_65: helios.color,
        HELIOS: helios.name,
      },
    );
    const attr = [0, 0, 0, 0, 0];
    if (ret['select'] === 1) {
      attr[attr_enum.strength] = 10;
    } else {
      attr[attr_enum.toughness] = 10;
    }
    let wait = all_reward_in_event(this.id, { attr });
    if (era.get('cflag:65:招募状态') === recruit_flags.yes) {
      wait = sys_like_chara(this.id, 65, 30) || wait;
      wait = sys_like_chara(65, this.id, 30) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_end_1(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const mcqueen = get_chara_talk(13);
    await print_title_with_kojo(this.#kojo, 'summer_end_1', pama, {
      ...this.#dict,
      COLOR_13: mcqueen.color,
      MCQUEEN: mcqueen.name,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async triple_crown(pama) {
    await print_title_with_kojo(this.#kojo, 'triple_crown', pama, this.#dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} pama */
  async new_year_2(pama) {
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    const maru = get_chara_talk(4);
    const sirius = get_chara_talk(70);
    const ret = await print_title_with_kojo(this.#kojo, 'new_year_2', pama, {
      ...this.#dict,
      COLOR_4: maru.color,
      COLOR_70: sirius.color,
      MARU: maru.name,
      SIRIUS: sirius.name,
    });
    let attr;
    let base;
    let pt;
    switch (ret['select']) {
      case 1:
        base = [200];
        break;
      case 2:
        attr = new Array(5).fill(8);
        break;
      case 3:
        pt = 35;
    }
    if (all_reward_in_event(this.id, { attr, base, pt })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_start_2(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const dictus = get_chara_talk(63);
    const helios = get_chara_talk(65);
    await print_title_with_kojo(this.#kojo, 'summer_start_2', pama, {
      ...this.#dict,
      DICTUS: dictus.name,
      COLOR_63: dictus.color,
      HELIOS: helios.name,
      COLOR_65: helios.color,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_middle_2(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'summer_middle_2',
          pama,
          generate_dictionary(this.id, {
            call: !0,
            your_name: !0,
            your_sex: !0,
          }),
        )
      )['sex'] === 1
    ) {
      sys_change_lust(this.id, 500);
    } else {
      await quick_into_sex(this.id);
      await this.#kojo['summer_sex_end'](this.#dict);
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async walk(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'walk', pama, this.#dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_end_2(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const dictus = get_chara_talk(63);
    const helios = get_chara_talk(65);
    await print_title_with_kojo(this.#kojo, 'summer_end_2', pama, {
      ...this.#dict,
      '65_CALL': sys_get_callname(65, this.id),
      COLOR_63: dictus.color,
      COLOR_65: helios.color,
      DICTUS: dictus.name,
      HELIOS: helios.name,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async christmas_party(pama) {
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'christmas_party',
          pama,
          this.#dict,
        )
      )['sex'] === 2
    ) {
      await quick_into_sex(this.id);
      await this.#kojo['party_sex_end'](this.#dict);
    }
  }

  /** @param {CharaTalk} pama */
  async winner(pama) {
    const luna = get_chara_talk(17);
    const bourbon = get_chara_talk(26);
    await print_title_with_kojo(this.#kojo, 'winner', pama, {
      ...this.#dict,
      BOURBON: bourbon.name,
      COLOR_26: bourbon.color,
      LUNA: luna.name,
      COLOR_17: luna.color,
    });
  }

  /** @param {CharaTalk} pama */
  async sports_car(pama) {
    const minoru = get_chara_talk(301);
    const taste = get_chara_talk(302);
    await print_title_with_kojo(this.#kojo, 'sports_car', pama, {
      ...this.#dict,
      COLOR_301: minoru.color,
      COLOR_302: taste.color,
      MINORU: minoru.name,
      TASTE: taste.name,
    });
    era.set('item:善信号', 1);
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async rain(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') > 0) {
      add_event(hook.hook, event_object);
      await this.#kojo['rain_notify'](this.#dict);
      await era.clear(1);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'rain', pama, this.#dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async important_place(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await this.#kojo['important_place_notify'](this.#dict);
      await era.clear(1);
      return;
    }
    const attr = [0, 0, 0, 0, 0];
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'important_place',
          pama,
          this.#dict,
        )
      )['select'] === 1
    ) {
      attr[attr_enum.speed] = 10;
    } else {
      attr[attr_enum.intelligence] = 10;
    }
    if (all_reward_in_event(this.id, { attr })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async golf(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await this.#kojo['golf_notify'](this.#dict);
      await era.clear(1);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'golf', pama, this.#dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async lottery(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前月') !== 1) {
      return;
    }
    const dict = this.#dict;
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await this.#kojo['lottery_notify'](dict);
      await era.clear(1);
      return;
    }
    dict.dice = get_random_value(1, 4);
    const ret = await print_title_with_kojo(this.#kojo, 'lottery', pama, dict);
    let base;
    const attr = new Array(5).fill(0);
    let relation = 0;
    let love;
    switch (dict.dice) {
      case 1:
        base = [200];
        break;
      case 2:
        attr.fill(5);
        break;
      case 3:
        attr.fill(10);
        if (ret[0] === 1) {
          relation = 20;
        } else {
          love = 4;
        }
        break;
      case 4:
        new PamaEduMarks().hot_spring = 1;
    }
    if (
      all_reward_in_event(this.id, {
        attr,
        base,
        love,
        relation,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async hot_spring(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前月') !== 12) {
      return;
    }
    const dict = generate_dictionary(this.id, { your_sex: !0 });
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await this.#kojo['hot_spring_notify'](dict);
      await era.clear(1);
      return;
    }
    new PamaEduMarks().hot_spring++;
    const helios = get_chara_talk(65);
    dict.COLOR_65 = helios.color;
    dict.HELIOS = helios.name;
    const ret = await print_title_with_kojo(
      this.#kojo,
      'hot_spring',
      pama,
      dict,
    );
    let love = 0;
    if (ret['select'] === 2) {
      love = 6;
    }
    let wait = all_reward_in_event(this.id, { love });
    if (ret['select'] === 2) {
      wait = sys_like_chara(this.id, 65, 50) || wait;
      wait = sys_like_chara(65, this.id, 50) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} pama */
  async lunch_break(pama) {
    await print_title_with_kojo(this.#kojo, 'lunch_break', pama, this.#dict);
    if (
      all_reward_in_event(this.id, {
        base: [-50],
        motivation: -1,
        relation: 0,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async dis_talent(pama) {
    const brian = get_chara_talk(16);
    const taishin = get_chara_talk(50);
    let relation = 0;
    let love;
    if (
      (
        await print_title_with_kojo(this.#kojo, 'dis_talent', pama, {
          ...this.#dict,
          BRIAN: brian.name,
          COLOR_16: brian.color,
          COLOR_50: taishin.color,
          TAISHIN: taishin.name,
        })
      )['select'] === 1
    ) {
      relation = 10;
    } else {
      love = 2;
    }
    if (
      all_reward_in_event(this.id, {
        relation,
        love,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async choice(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await pama.print_and_wait(i18n().kojo[this.id].notify_go_shopping(pama));
      await era.clear(1);
      return;
    }
    const dober = get_chara_talk(59);
    const bright = get_chara_talk(74);
    const ret = await print_title_with_kojo(this.#kojo, 'choice', pama, {
      ...this.#dict,
      BRIGHT: bright.name,
      COLOR_59: dober.color,
      COLOR_74: bright.color,
      DOBER: dober.name,
    });
    let aim;
    const attr = [0];
    if (ret['select'] === 1) {
      aim = 59;
    } else {
      aim = 74;
    }
    if (era.get(`cflag:${aim}:招募状态`) === recruit_flags.yes) {
      attr[0] = 25;
    } else {
      attr[0] = 15;
    }
    let wait = all_reward_in_event(this.id, { attr });
    if (era.get(`cflag:${aim}:招募状态`) === recruit_flags.yes) {
      wait = sys_like_chara(aim, this.id, 25) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} pama */
  async confused(pama) {
    const helios = get_chara_talk(65);
    await print_title_with_kojo(this.#kojo, 'confused', pama, {
      ...this.#dict,
      HELIOS: helios.name,
      COLOR_65: helios.color,
      CALLNAME_65: sys_get_callname(65, 0),
      '65_CALL': sys_get_callname(65, this.id),
    });
  }

  /** @param {CharaTalk} pama */
  async a_step(pama) {
    const ardan = get_chara_talk(71);
    await print_title_with_kojo(this.#kojo, 'a_step', pama, {
      ...this.#dict,
      ARDAN: ardan.name,
      COLOR_71: ardan.color,
    });
  }

  async race_start(pama, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const dict = this.#dict;
    let key;
    switch (extra.race) {
      case race_enum.begin_race:
        key = 'begin_race';
        break;
      case race_enum.sats_sho:
        key = 'sats_sho';
        break;
      case race_enum.toky_yus:
        key = 'toky_yus';
        break;
      case race_enum.hako_kin:
        key = 'hako_kin';
        break;
      case race_enum.kiku_sho:
        if (
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.sats_sho,
            1,
            1,
          ) &&
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.toky_yus,
            1,
            1,
          )
        ) {
          key = 'kiku_sho_2crown';
        } else {
          key = 'kiku_sho';
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          key = 'classical_arim_kin';
        } else {
          key = 'senior_arim_kin';
        }
        break;
      case race_enum.nikk_hai:
        key = 'nikk_hai';
        break;
      case race_enum.tenn_spr:
        key = 'tenn_spr';
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          key = 'takz_kin';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          dict.YOURSEX = get_chara_talk(0).sex;
          key = i_pama_yandere() ? 'tenn_sho_yandere' : 'tenn_sho';
        }
    }
    if (key !== undefined) {
      await print_title_with_kojo(this.#kojo, key, pama, dict);
    } else {
      await print_title_with_kojo(this.#kojo, 'race_start', pama, dict);
    }
  }

  async race_end(pama, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const dict = this.#dict;
    let key;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (extra_flag.rank === 1) {
          key = 'begin_race_win';
        }
        break;
      case race_enum.sats_sho:
        if (extra_flag.rank === 1) {
          key = 'sats_sho_win';
        } else {
          key = 'sats_sho_lose';
        }
        break;
      case race_enum.toky_yus:
        if (extra_flag.rank === 1) {
          key = 'toky_yus_win';
        } else {
          key = 'toky_yus_lose';
        }
        break;
      case race_enum.hako_kin:
        if (extra_flag.rank === 1 && edu_weeks < 96) {
          key = 'hako_kin_win';
          add_event(
            event_hooks.out_start,
            new EventObject(this.id, cb_enum.edu, true).set_arg('hometown'),
          );
        }
        break;
      case race_enum.kiku_sho:
        if (extra_flag.rank === 1) {
          key = 'kiku_sho_win';
          if (
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.sats_sho,
              1,
              1,
            ) &&
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.toky_yus,
              1,
              1,
            )
          ) {
            add_event(
              event_hooks.week_end,
              new EventObject(this.id, cb_enum.edu, true).set_arg(
                'triple_crown',
              ),
            );
          }
        } else {
          key = 'kiku_sho_lose';
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          if (extra_flag.rank === 1) {
            key = 'c_arim_kin_win';
            extra_flag.skill_change = [202051];
          } else {
            key = 'c_arim_kin_lose';
          }
        } else if (extra_flag.rank === 1) {
          const helios = get_chara_talk(65);
          dict.COLOR_65 = helios.color;
          dict.HELIOS = helios.name;
          dict['65_CALL'] = sys_get_callname(65, this.id);
          if (era.get(`cstr:${this.id}:决胜服`) === '') {
            key = 's_arim_kin_win_clothe1';
            if (
              (await print_title_with_kojo(this.#kojo, key, pama, dict))[
                'sex'
              ] === 1
            ) {
              await quick_into_sex(this.id);
            }
            return;
          } else {
            key = 's_arim_kin_win_clothe46';
            if (era.get(`love:${this.id}`) >= 50) {
              if (
                (await print_title_with_kojo(this.#kojo, key, pama, dict))[
                  'hug'
                ] === 1
              ) {
                await quick_into_sex(this.id);
                dict.YOURSEX = era.get('callname:0:-1');
                await this.#kojo['ak_c46_hug_sex_end'](dict);
              } else {
                await quick_into_sex(this.id);
                await this.#kojo['ak_c46_kiss_sex_end'](dict);
              }
              return;
            }
          }
        }
        break;
      case race_enum.nikk_hai:
        if (extra_flag.rank === 1) {
          key = 'nikk_hai_win';
        }
        break;
      case race_enum.tenn_spr:
        if (extra_flag.rank === 1) {
          key = 'tenn_spr_win';
          extra_flag.relation_change = 0;
          if (
            (
              await print_title_with_kojo(
                this.#kojo,
                key,
                pama,
                generate_dictionary(this.id, { your_name: !0 }),
              )
            )['select'] === 2
          ) {
            extra_flag.relation_change = 10;
          }
          return;
        } else {
          key = 'tenn_spr_lose';
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          key = 'takz_kin_win';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          if (extra_flag.rank === 1) {
            key = 'tenn_sho_win';
          } else {
            key = 'tenn_sho_lose';
          }
        }
    }
    if (key !== undefined) {
      await print_title_with_kojo(this.#kojo, key, pama, dict);
    } else if (extra_flag.rank === 1) {
      await print_title_with_kojo(this.#kojo, 'race_end_win', pama, dict);
    } else {
      await print_title_with_kojo(this.#kojo, 'race_end_lose', pama, dict);
    }
  }

  async crazy_fan_end() {
    const pama = get_chara_talk(this.id);
    if (i_pama_yandere()) {
      await print_title_with_kojo.ending(
        i18n().kojo[this.id].love,
        'endless_escape',
        pama,
        generate_dictionary(this.id),
      );
    } else if (era.get(`love:${this.id}`) >= 75) {
      await print_title_with_kojo.ending(
        this.#kojo,
        'crazy_fan_end',
        pama,
        this.#dict,
      );
    } else {
      return await super.slave_end();
    }
  }
};
