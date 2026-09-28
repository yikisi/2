const era = require('#/era-electron');

const { sys_change_weight } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const HaloEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-61');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0, uma: !0 });
  }

  async train(attr) {
    await this.#kojo['train'](this.#dict);
  }

  train_success_content(halo, me, callname, hook, extra) {
    this.#kojo['ts_content'](this.#dict);
  }

  async train_success_add(halo, me, callname, hook, extra) {
    return (
      (await print_title_with_kojo(this.#kojo, 'ts_add', halo, this.#dict))[
        'train'
      ] === 1
    );
  }

  async train_fail(halo, me, callname, hook, extra) {
    if (sys_check_remote(this.id) || extra.train === attr_enum.intelligence) {
      return await super.train_fail(halo, me, callname, hook, extra);
    }
    hook.arg = 0;
    await print_title_with_kojo(this.#kojo, 'train_fail', halo, this.#dict);
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_cloudy(halo, me, callname, hook, extra, ebj) {
    await print_title_with_kojo(this.#kojo, 'ws_cloudy', halo, this.#dict);
    add_event(hook.hook, ebj.set_arg('ws_golden_gen'));
  }

  /** @param {CharaTalk} halo */
  async ws_golden_gen(halo) {
    const spe = get_chara_talk(1);
    const sky = get_chara_talk(20);
    await print_title_with_kojo(this.#kojo, 'ws_golden_gen', halo, {
      ...this.#dict,
      CHARA_FULL: halo.actual_name_with_title,
      SPE: spe.name,
      COLOR_1: spe.color,
      SKY: sky.name,
      COLOR_20: sky.color,
    });
  }

  /** @param {CharaTalk} halo */
  async ws_first_class_day(halo) {
    await print_title_with_kojo(
      this.#kojo,
      'ws_first_class_day',
      halo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: 20 })) {
      await era.waitAnyKey();
    }
  }
  /** @param {CharaTalk} halo */
  async ws_race_clothe(halo) {
    await print_title_with_kojo(this.#kojo, 'ws_race_clothe', halo, this.#dict);
    if (all_reward_in_event(this.id, { motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} halo */
  async ws_new_year_c(halo) {
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    let wait;
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'ws_new_year_c',
          halo,
          this.#dict,
        )
      )['select'] === 1
    ) {
      wait = all_reward_in_event(this.id, { relation: 10, pt: 30 });
    } else {
      wait = all_reward_in_event(this.id, { love: 2, attr: [20] });
    }
    wait && (await era.waitAnyKey());
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_summer_start_c(halo, me, callname, hook, extra, ebj) {
    if (this.summer_non_beach) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'ws_summer_start_c',
      halo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { attr: base_attr_list.map(() => 5) })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_temple_fair_c(halo, me, callname, hook, extra, ebj) {
    if (this.summer_non_beach) {
      add_event(hook.hook, ebj);
      return;
    }
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    await print_title_with_kojo(
      this.#kojo,
      'ws_temple_fair_c',
      halo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { attr: [0, 20] })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_summer_end_c(halo, me, callname, hook, extra, ebj) {
    if (this.summer_non_beach) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'ws_summer_end_c',
      halo,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        attr: [0, 5],
        pt: 20,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} halo */
  async ws_determination(halo) {
    await print_title_with_kojo(
      this.#kojo,
      'ws_determination',
      halo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: 20 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} halo */
  async ws_the_way(halo) {
    await print_title_with_kojo(this.#kojo, 'ws_the_way', halo, this.#dict);
    if (all_reward_in_event(this.id, { relation: 10, motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} halo */
  async ws_break(halo) {
    await print_title_with_kojo(this.#kojo, 'ws_break', halo, this.#dict);
    if (all_reward_in_event(this.id, { motivation: -2 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async oc_new_year_s(halo, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, ebj);
      return;
    }
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    await print_title_with_kojo(this.#kojo, 'oc_new_year_s', halo, this.#dict);
    if (all_reward_in_event(this.id, { relation: 20, motivation: 1, pt: 40 })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} halo */
  async ws_special_letter(halo) {
    await print_title_with_kojo(this.#kojo, 'ws_special_letter', halo, {
      ...this.#dict,
      MINORU: get_chara_talk(301).name,
      CHARA_FULL: halo.actual_name_with_title,
    });
    if (all_reward_in_event(this.id, { relation: 20 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_crisis(halo, me, callname, hook, extra, ebj) {
    await print_title_with_kojo(this.#kojo, 'ws_crisis', halo, {
      ...this.#dict,
      MINORU: get_chara_talk(301).name,
      TASTE: get_chara_talk(302).name,
    });
    add_event(event_hooks.out_station, ebj.set_arg('os_give_up'));
    EventMarks.get(0).add(event_hooks.out_station);
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async os_give_up(halo, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') > 0) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'os_give_up', halo, this.#dict);
    EventMarks.get(0).sub(event_hooks.out_station);
    era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
    new HaloEduMarks().give_up = 1 + (era.get(`love:${this.id}`) < 75);
    if (all_reward_in_event(this.id, { relation: 20, motivation: 1, pt: 40 })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} halo */
  async ws_legend(halo) {
    await print_title_with_kojo(this.#kojo, 'ws_legend', halo, this.#dict);
    if (all_reward_in_event(this.id, { relation: 20 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_temple_fair_s(halo, me, callname, hook, extra, ebj) {
    if (this.summer_non_beach) {
      add_event(hook.hook, ebj);
      return;
    }
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    await print_title_with_kojo(this.#kojo, 'ws_temple_fair_s', halo, {
      ...this.#dict,
      COLOR_20: get_chara_talk(20).color,
    });
    if (all_reward_in_event(this.id, { love: 1 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_summer_end_s(halo, me, callname, hook, extra, ebj) {
    if (this.summer_non_beach) {
      add_event(hook.hook, ebj);
      return;
    }
    const spe = get_chara_talk(1);
    const sky = get_chara_talk(20);
    await print_title_with_kojo(this.#kojo, 'ws_summer_end_s', halo, {
      ...this.#dict,
      SPE: spe.name,
      COLOR_1: spe.color,
      SKY: sky.name,
      COLOR_20: sky.color,
    });
    if (
      all_reward_in_event(this.id, {
        attr: [0, 5],
        pt: 20,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} halo */
  async ws_breaking_dawn(halo) {
    await print_title_with_kojo(
      this.#kojo,
      'ws_breaking_dawn',
      halo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: 20 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} halo */
  async ws_until_end(halo) {
    await print_title_with_kojo(this.#kojo, 'ws_until_end', halo, this.#dict);
    if (all_reward_in_event(this.id, { relation: 20 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} halo */
  async ws_dawn(halo) {
    await print_title_with_kojo(this.#kojo, 'ws_dawn', halo, this.#dict);
    if (all_reward_in_event(this.id, { relation: 20, love: 3 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   */
  async palace(halo, me) {
    await CustomizedEdu.common_palace(halo, me);
    era.drawLine();
    era.set('flag:当前位置', location_enum.gate);
    if (era.get(`love:${this.id}`) >= 90) {
      await print_title_with_kojo(
        this.#kojo,
        'ge_love',
        halo,
        generate_dictionary(this.id, { sir: !0, uma: !0, your_sex: !0 }),
      );
    } else {
      await print_title_with_kojo(this.#kojo, 'normal_end', halo, this.#dict);
    }
    era.set('flag:当前位置', location_enum.office);
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ramen(halo, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, ebj);
      return;
    }
    new HaloEduMarks().ramen = 2;
    await print_title_with_kojo(this.#kojo, 'os_ramen', halo, this.#dict);
    if (all_reward_in_event(this.id, { attr: { [attr_enum.toughness]: 10 } })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async for_king(halo, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait;
    if (
      (
        await print_title_with_kojo(this.#kojo, 'os_for_king', halo, this.#dict)
      )['select'] === 1
    ) {
      wait = all_reward_in_event(this.id, {
        base: [era.get(`maxbase:${this.id}:体力`) / 10],
      });
      sys_change_weight(this.id, 50);
    } else {
      wait = all_reward_in_event(this.id, {
        base: [(3 * era.get(`maxbase:${this.id}:体力`)) / 10],
      });
      sys_change_weight(this.id, 200);
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  /** @param {CharaTalk} halo */
  async fc_train(halo) {
    const urara = get_chara_talk(52);
    let wait;
    switch (
      (
        await print_title_with_kojo(this.#kojo, 'ws_fc_train', halo, {
          ...this.#dict,
          URARA: urara.name,
          COLOR_52: urara.color,
          CALLNAME_52: sys_get_callname(52, 0),
        })
      )['select']
    ) {
      case 1:
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.endurance]: 15 },
        });
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.strength]: 15 },
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 15 },
        });
        break;
      case 4:
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.intelligence]: 15 },
        });
        break;
      case 5:
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.speed]: 15 },
          relation: -5,
        });
    }
    wait && (await era.waitAnyKey());
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async auto_graph(halo, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'os_auto_graph', halo, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.intelligence]: 10 },
        relation: 10,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} halo */
  async laugh(halo) {
    await print_title_with_kojo(this.#kojo, 'ws_laugh', halo, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.intelligence]: -10, [attr_enum.toughness]: 20 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} halo
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async art_exhibit(halo, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'os_art_exhibit', halo, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.intelligence]: 5 },
        relation: 20,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  async race_start(halo, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const history = RaceHistory.get(this.id).get();
    let key;
    let dict = this.#dict;
    let temp;
    switch (extra.race) {
      case race_enum.begin_race:
        if (edu_weeks === 23) {
          key = 'before_begin_race';
        }
        break;
      case race_enum.hope_sta:
        key = 'before_hope_sta';
        break;
      case race_enum.sats_sho:
        temp = get_chara_talk(20);
        key = 'before_sats_sho';
        dict.SKY = temp.name;
        dict.COLOR_20 = temp.color;
        break;
      case race_enum.toky_yus:
        temp = get_chara_talk(1);
        key = 'before_toky_yus';
        dict.SPE = temp.name;
        dict.COLOR_1 = temp.color;
        break;
      case race_enum.kiku_sho:
        key = 'before_kiku_sho';
        break;
      case race_enum.takm_kin:
        key = 'before_takm_kin';
        break;
      case race_enum.sprt_sta:
        if (
          edu_weeks > 96 &&
          check_aim_race(history, race_enum.takm_kin, 2, 1)
        ) {
          key = 'before_sprt_sta_s';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && !new HaloEduMarks().give_up) {
          key = 'before_tenn_sho_s';
          const spe = get_chara_talk(1);
          const sky = get_chara_talk(20);
          dict = {
            ...dict,
            SPE: spe.name,
            COLOR_1: spe.color,
            SKY: sky.name,
            COLOR_20: sky.color,
          };
        }
        break;
      case race_enum.arim_kin:
        if (
          edu_weeks > 96 &&
          !new HaloEduMarks().give_up &&
          check_aim_race(history, race_enum.tenn_sho, 2, 1)
        ) {
          key = 'before_arim_kin_s';
          const spe = get_chara_talk(1);
          const grass = get_chara_talk(11);
          const condor = get_chara_talk(14);
          const sky = get_chara_talk(20);
          dict = {
            ...dict,
            SPE: spe.name,
            COLOR_1: spe.color,
            GRASS: grass.name,
            COLOR_11: grass.color,
            CONDOR: condor.name,
            COLOR_14: condor.color,
            SKY: sky.name,
            COLOR_20: sky.color,
          };
        }
    }
    if (!key) {
      key = 'race_start';
    }
    await print_title_with_kojo(this.#kojo, key, halo, dict);
  }

  async race_end(halo, me, callname, hook, extra) {
    const edu_marks = new HaloEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const history = RaceHistory.get(this.id).get();
    let key;
    let dict = this.#dict;
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1) {
          key = 'begin_race_win';
        }
        break;
      case race_enum.hope_sta:
        if (extra.rank === 1) {
          key = 'hope_sta_win';
        } else if (extra.rank <= 5) {
          key = 'hope_sta_5';
        } else {
          key = 'hope_sta_lose';
        }
        break;
      case race_enum.sats_sho:
        if (extra.rank === 1) {
          key = 'sats_sho_win';
        } else {
          key = 'sats_sho_lose';
        }
        break;
      case race_enum.toky_yus:
        if (extra.rank === 1) {
          key = 'toky_yus_win';
        } else {
          key = 'toky_yus_lose';
        }
        break;
      case race_enum.kiku_sho:
        if (extra.rank === 1) {
          key = 'kiku_sho_win';
        } else {
          key = 'kiku_sho_lose';
        }
        break;
      case race_enum.takm_kin:
        if (extra.rank === 1) {
          key = 'takm_kin_win';
        } else {
          key = 'takm_kin_lose';
          era.set(`cflag:${this.id}:招募状态`, recruit_flags.temporary_leave);
        }
        break;
      case race_enum.yasu_kin:
        if (
          edu_weeks > 96 &&
          extra.rank === 1 &&
          check_aim_race(history, race_enum.takm_kin, 2, 1)
        ) {
          key = 'yasu_kin_win_s';
          dict = generate_dictionary(this.id, { sir: !0 });
        }
        break;
      case race_enum.sprt_sta:
        if (
          edu_weeks > 96 &&
          check_aim_race(history, race_enum.takm_kin, 2, 1)
        ) {
          if (extra.rank === 1) {
            key = 'sprt_sta_win_s';
          } else {
            key = 'sprt_sta_lose_s';
          }
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && !edu_marks.give_up) {
          key = 'tenn_sho_end_s';
          const spe = get_chara_talk(1);
          const sky = get_chara_talk(20);
          dict = {
            ...dict,
            SPE: spe.name,
            COLOR_1: spe.color,
            SKY: sky.name,
            COLOR_20: sky.color,
          };
        }
        break;
      case race_enum.arim_kin:
        if (
          edu_weeks > 96 &&
          !edu_marks.give_up &&
          check_aim_race(history, race_enum.tenn_sho, 2, 1)
        ) {
          key = extra.rank === 1 ? 'arim_kin_win_s' : 'arim_kin_lose_s';
          const spe = get_chara_talk(1);
          const grass = get_chara_talk(11);
          const condor = get_chara_talk(14);
          const sky = get_chara_talk(20);
          dict = {
            ...dict,
            SPE: spe.name,
            COLOR_1: spe.color,
            GRASS: grass.name,
            COLOR_11: grass.color,
            CONDOR: condor.name,
            COLOR_14: condor.color,
            SKY: sky.name,
            COLOR_20: sky.color,
          };
        }
    }
    if (!key) {
      if (edu_marks.give_up === -1) {
        edu_marks.give_up = 0;
        key = 'race_end_rise_again';
      } else if (extra.rank === 1) {
        key = 'race_end_win';
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else {
        key = 'race_end_lose';
      }
    }
    await print_title_with_kojo(this.#kojo, key, halo, dict);
    if (edu_marks.give_up === -1) {
      await print_title_with_kojo(
        this.#kojo,
        'race_end_rise_again',
        halo,
        dict,
      );
      edu_marks.give_up = 0;
    }
  }

  async crazy_fan_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'be_force',
      get_chara_talk(this.id),
      generate_dictionary(this.id, { uma: !0, your_name: !0 }),
    );
  }
};
