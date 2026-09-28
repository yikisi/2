const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const SkyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-20');
const event_hooks = require('#/data/event/event-hooks');
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
    return generate_dictionary(this.id, { uma: !0 });
  }

  get #marks() {
    return new SkyEduMarks();
  }

  async train(attr) {
    this.#marks.action = event_hooks.train;
    if (era.get(`cflag:${this.id}:育成回合计时`) < 3 * 48) {
      this.#marks.easy_go = Math.min(this.#marks.easy_go + 1, 10);
    }
    return await super.train(attr);
  }

  async train_success(sky, me, callname, hook, extra) {
    extra.pt_change = (extra.pt_change || 0) + new SkyEduMarks().radiant;
    return await super.train_success(sky, me, callname, hook, extra);
  }

  async train_success_add(sky, me, callname, hook, extra) {
    return (
      (
        await print_title_with_kojo(this.#kojo, 'ts_add', sky, this.#dict)
      )[0] === 1
    );
  }

  /**
   * @param {CharaTalk} sky
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_find_you(sky, me, callname, hook, extra, ebj) {
    await print_title_with_kojo(this.#kojo, 'ws_find_you', sky, this.#dict);
    add_event(event_hooks.week_end, ebj.set_arg('we_free_cloud'));
    era.set(`cflag:${this.id}:招募状态`, recruit_flags.temporary_leave);
    if (era.get('flag:当前互动角色') === this.id) {
      era.set('flag:当前互动角色', 0);
    }
  }

  /**
   * @param {CharaTalk} sky
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async we_free_cloud(sky, me, callname, hook, extra, ebj) {
    await print_title_with_kojo(this.#kojo, 'we_free_cloud', sky, this.#dict);
    add_event(event_hooks.week_start, ebj.set_arg('ws_cloud_wind'));
  }

  /** @param {CharaTalk} sky */
  async ws_cloud_wind(sky) {
    const flower = get_chara_talk(51);
    const dict = { ...this.#dict, FLOWER: flower.name, COLOR_51: flower.color };
    await print_title_with_kojo(
      this.#kojo,
      era.get(`cflag:${flower.id}:招募状态`) === recruit_flags.yes &&
        era.get(`relation:${flower.id}:0`) > 75
        ? 'ws_cloud_wind_flw'
        : 'ws_cloud_wind_no_flw',
      sky,
      dict,
    );
    era.set(`cflag:${this.id}:招募状态`, recruit_flags.yes);
    if (!era.get('flag:当前互动角色')) {
      era.set('flag:当前互动角色', this.id);
    }
  }

  /** @param {CharaTalk} sky */
  async ws_47_5(sky) {
    await print_title_with_kojo(this.#kojo, 'ws_47_5', sky, this.#dict);
    if (sys_like_chara(this.id, 0, 20)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} sky
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_triple_crown(sky, me, callname, hook, extra, ebj) {
    const spe = get_chara_talk(1);
    const grass = get_chara_talk(11);
    const condor = get_chara_talk(14);
    const flower = get_chara_talk(51);
    const urara = get_chara_talk(52);
    const halo = get_chara_talk(61);
    await print_title_with_kojo(this.#kojo, 'ws_triple_crown', sky, {
      ...this.#dict,
      SPE: spe.name,
      COLO_1: spe.color,
      GRASS: grass.name,
      COLOR_11: grass.color,
      CONDOR: condor.name,
      COLOR_14: condor.color,
      FLOWER: flower.name,
      COLOR_51: flower.color,
      URARA: urara.name,
      COLOR_52: urara.color,
      HALO: halo.name,
      COLOR_61: halo.color,
    });
    if (all_reward_in_event(this.id, { attr: base_attr_list.map(() => 5) })) {
      await era.waitAnyKey();
    }
    add_event(event_hooks.week_end, ebj.set_arg('we_old_money'));
  }

  /** @param {CharaTalk} sky */
  async we_old_money(sky) {
    await print_title_with_kojo(this.#kojo, 'we_old_money', sky, this.#dict);
  }

  /** @param {CharaTalk} sky */
  async soft_be(sky) {
    await print_title_with_kojo(this.#kojo, 'soft_be', sky, this.#dict);
  }

  /** @param {CharaTalk} sky */
  async ws_47_48(sky) {
    await print_title_with_kojo(this.#kojo, 'ws_47_48', sky, this.#dict);
  }

  /**
   * @param {CharaTalk} sky
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_cloud_mot_aw(sky, me, callname, hook, extra, ebj) {
    await print_title_with_kojo(this.#kojo, 'ws_cloud_mot_aw', sky, this.#dict);
    add_event(event_hooks.school_rooftop, ebj.set_arg('sr_cloud_mot_aw'));
  }

  /**
   * @param {CharaTalk} sky
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async sr_cloud_mot_aw(sky, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, ebj);
      return false;
    }
    await print_title_with_kojo(this.#kojo, 'sr_cloud_mot_aw', sky, this.#dict);
    add_event(event_hooks.school_rooftop, ebj.set_arg('we_cloud_mot_aw'));
    return true;
  }

  /** @param {CharaTalk} sky */
  async we_cloud_mot_aw(sky) {
    await print_title_with_kojo(this.#kojo, 'we_cloud_mot_aw', sky, this.#dict);
    if (all_reward_in_event(this.id, { relation: 50, love: 2 })) {
      await era.waitAnyKey();
    }
    this.#marks.jess = 0;
  }

  /** @param {CharaTalk} sky */
  async ws_lost_al(sky) {
    await print_title_with_kojo(
      this.#kojo,
      'ws_lost_al',
      sky,
      generate_dictionary(this.id, { uma: !0, your_sex: !0 }),
    );
    this.#marks.jess = 0;
    if (all_reward_in_event(this.id, { relation: 50, love: 2 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} sky
   * @param {CharaTalk} me
   */
  async palace(sky, me) {
    await CustomizedEdu.common_palace(sky, me);
    era.set('flag:当前位置', location_enum.gate);
    if (!this.#marks.soft_be) {
      era.drawLine();
      let key;
      if (
        get_custom_check(this.id)
          .get_edu_aims()
          .every((e) => e.check === 1)
      ) {
        key = 'perfect_ending';
      } else {
        key = 'normal_ending';
      }
      await print_title_with_kojo(this.#kojo, key, sky, this.#dict);
    } else {
      await CustomizedEdu.common_palace_relation(sky, me);
    }
    era.set('flag:当前位置', location_enum.office);
  }

  /** @param {CharaTalk} sky */
  async ws_indolent(sky) {
    const is_find_sky =
      Math.random() < era.get(`cflag:${this.id}:育成回合计时`) >= 47 + 5
        ? 0.8
        : 0.5;
    let wait;
    if (is_find_sky) {
      await print_title_with_kojo(
        this.#kojo,
        'ws_lazy_find_you',
        sky,
        this.#dict,
      );
      wait = all_reward_in_event(this.id, {
        attr: base_attr_list.map(() => 3),
        relation: 10,
      });
      era.set(`status:${this.id}:摸鱼`, 0);
    } else {
      await print_title_with_kojo(
        this.#kojo,
        'ws_cannot_find',
        sky,
        this.#dict,
      );
      wait = all_reward_in_event(this.id, { pt: 10 });
      wait = all_reward_in_event(0, { base: [-200] }) || wait;
    }
    wait && (await era.waitAnyKey());
  }

  /** @param {CharaTalk} sky */
  async ws_next_time(sky) {
    const halo = get_chara_talk(61);
    await print_title_with_kojo(this.#kojo, 'ws_next_time', sky, {
      ...this.#dict,
      HALO: halo.name,
      COLOR_61: halo.color,
    });
    if (all_reward_in_event(this.id, { pt: 40 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sky */
  async ws_hidden_menu(sky) {
    const spe = get_chara_talk(1);
    await print_title_with_kojo(this.#kojo, 'ws_hidden_menu', sky, {
      ...this.#dict,
      SPE: spe.name,
      COLOR_1: spe.color,
    });
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.endurance]: 30, [attr_enum.toughness]: 30 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sky */
  async ws_punish(sky) {
    await print_title_with_kojo(
      this.#kojo,
      'ws_punish',
      sky,
      generate_dictionary(this.id, { uma: !0, your_sex: !0 }),
    );
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.intelligence]: 30 },
        pt: 30,
        relation: 50,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sky */
  async ws_party(sky) {
    const grass = get_chara_talk(11);
    const halo = get_chara_talk(61);
    await print_title_with_kojo(this.#kojo, 'ws_party', sky, {
      ...this.#dict,
      GRASS: grass.name,
      COLOR_11: grass.color,
      HALO: halo.name,
      COLOR_61: halo.color,
    });
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.toughness]: 20 },
        pt: 40,
      })
    ) {
      await era.waitAnyKey();
    }
    this.#marks.ws_party = 2;
  }

  /** @param {CharaTalk} sky */
  async ws_ramen(sky) {
    const spe = get_chara_talk(1);
    const condor = get_chara_talk(14);
    await print_title_with_kojo(this.#kojo, 'ws_ramen', sky, {
      ...this.#dict,
      SPE: spe.name,
      COLOR_1: spe.color,
      CONDOR: condor.name,
      COLOR_14: condor.color,
    });
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.toughness]: 30 },
        pt: 30,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sky */
  async we_sword_vs_shield_1(sky) {
    await print_title_with_kojo(
      this.#kojo,
      'we_sword_vs_shield_1',
      sky,
      this.#dict,
    );
  }

  /** @param {CharaTalk} sky */
  async we_sword_vs_shield_2(sky) {
    const luna = get_chara_talk(17);
    const halo = get_chara_talk(61);
    await print_title_with_kojo(this.#kojo, 'we_sword_vs_shield_2', sky, {
      ...this.#dict,
      LUNA: luna.name,
      COLOR_17: luna.color,
      HALO: halo.name,
      COLOR_61: halo.color,
      CHARA_FULL: sky.actual_name_with_title,
    });
  }

  async race_start(sky, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let key;
    const dict = this.#dict;
    switch (extra.race) {
      case race_enum.begin_race:
        key = 'before_begin_race';
        break;
      case race_enum.hoch_sho:
        key = 'before_hoch_sho';
        break;
      case race_enum.sats_sho:
        {
          const grass = get_chara_talk(11);
          const condor = get_chara_talk(14);
          dict.GRASS = grass.name;
          dict.COLOR_11 = grass.color;
          dict.CONDOR = condor.name;
          dict.COLOR_14 = condor.color;
          key = check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.hoch_sho,
            1,
            1,
          )
            ? 'before_sats_sho_hw'
            : 'before_sats_sho_hl';
        }
        break;
      case race_enum.toky_yus:
        key = 'before_toky_yus';
        break;
      case race_enum.kiku_sho:
        key = 'before_kiku_sho';
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          key = 'before_arim_kin_c';
        }
        break;
      case race_enum.nikk_sho:
        key = 'before_nikk_sho';
        break;
      case race_enum.tenn_spr:
        {
          const flower = get_chara_talk(51);
          dict.FLOWER = flower.name;
          dict.COLOR_51 = flower.color;
          key = 'before_tenn_spr';
        }
        break;
      case race_enum.sapp_kin:
        if (edu_weeks > 96) {
          key = 'before_sapp_kin_s';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          key = 'before_tenn_sho_s';
        }
    }
    if (!key) {
      key = 'race_start';
    }
    await print_title_with_kojo(this.#kojo, key, sky, dict);
  }

  async race_end(sky, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let key;
    const dict = this.#dict;
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1) {
          key = 'begin_race_win';
        }
        break;
      case race_enum.hoch_sho:
        key = extra.rank === 1 ? 'hoch_sho_win' : 'hoch_sho_lose';
        break;
      case race_enum.sats_sho:
        {
          const grass = get_chara_talk(11);
          const condor = get_chara_talk(14);
          dict.GRASS = grass.name;
          dict.COLOR_11 = grass.color;
          dict.CONDOR = condor.name;
          dict.COLOR_14 = condor.color;
          key = extra.rank === 1 ? 'sats_sho_win' : 'sats_sho_lose';
        }
        break;
      case race_enum.toky_yus:
        key = extra.rank === 1 ? 'toky_yus_win' : 'toky_yus_lose';
        break;
      case race_enum.kiku_sho:
        key = extra.rank === 1 ? 'kiku_sho_win' : 'kiku_sho_lose';
        dict.RANK = extra.rank.toString();
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          key = extra.rank === 1 ? 'arim_kin_win_c' : 'arim_kin_lose_c';
        }
        break;
      case race_enum.nikk_sho:
        key = extra.rank === 1 ? 'nikk_sho_win' : 'nikk_sho_lose';
        break;
      case race_enum.tenn_spr:
        {
          const flower = get_chara_talk(51);
          dict.FLOWER = flower.name;
          dict.COLOR_51 = flower.color;
          key = 'tenn_spr_end';
        }
        break;
      case race_enum.sapp_kin:
        if (edu_weeks > 96 && extra.rank === 1) {
          key = 'sapp_kin_win_s';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && extra.rank === 1) {
          key = 'tenn_sho_win_s';
          const spe = get_chara_talk(1);
          dict.SPE = spe.name;
          dict.COLOR_1 = spe.color;
        }
    }
    if (!key) {
      if (extra.rank === 1) {
        key = 'race_end_win';
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else {
        key = 'race_end_lose';
      }
    }
    await print_title_with_kojo(this.#kojo, key, sky, dict);
  }
};
