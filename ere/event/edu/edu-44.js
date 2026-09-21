const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const {
  fill_moho_in_dict,
  reset_no_action,
} = require('#/event/snippets/104400');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const SweepEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-44');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return fill_moho_in_dict(
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }

  get #marks() {
    return new SweepEduMarks();
  }

  async train(attr) {
    reset_no_action();
    await this.#kojo['train'](this.#dict);
  }

  async train_success_add(sweep, me, callname, hook, extra) {
    return (await this.#kojo['ts_add'](this.#dict))[0] === 1;
  }

  /**
   * @param {CharaTalk} sweep
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async we_blue_enchan_tress(sweep, me, callname, hook, extra, ebj) {
    await print_title_with_kojo(
      this.#kojo,
      'we_blue_enchan_tress',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.endurance]: 5, [attr_enum.intelligence]: 5 },
      })
    ) {
      await era.waitAnyKey();
    }
    add_event(event_hooks.week_start, ebj.set_arg('ws_yellow_orchid'));
  }

  /** @param {CharaTalk} sweep */
  async ws_yellow_orchid(sweep) {
    await print_title_with_kojo(
      this.#kojo,
      'ws_yellow_orchid',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.endurance]: 5, [attr_enum.toughness]: 5 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_new_year_c(sweep) {
    const dict = this.#dict;
    await print_title_with_kojo(this.#kojo, 'ws_new_year_c', sweep, dict);
    dict.reject = 0;
    let ret;
    while (ret !== 1) {
      ret = (await this.#kojo['ws_ny_sub_select'](dict))[0];
      if (ret !== 1) {
        await this.#kojo['ws_ny_sub_reject'](dict);
        dict.reject++;
      }
    }
    const op = {};
    switch ((await this.#kojo['ws_ny_sub_option'](dict))['select']) {
      case 1:
        op.attr = base_attr_list.map(() => 20);
        break;
      case 2:
        op.pt = 100;
        break;
      case 3:
        op.base = [400];
    }
    if (all_reward_in_event(this.id, op)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async we_new_turn(sweep) {
    await print_title_with_kojo(this.#kojo, 'we_new_turn', sweep, this.#dict);
  }

  /** @param {CharaTalk} sweep */
  async ws_valentine_c(sweep) {
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    await print_title_with_kojo(
      this.#kojo,
      'ws_valentine_c',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        relation: 20,
        love: 1,
        motivation: 1,
        pt: 50,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} sweep
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_summer_start_c(sweep, me, callname, hook, extra, ebj) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== era.get(`cflag:${this.id}:位置`)
    ) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'ws_summer_start_c',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.speed]: 5, [attr_enum.intelligence]: 5 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} sweep
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async we_summer_end_c(sweep, me, callname, hook, extra, ebj) {
    if (era.get(`cflag:${this.id}:位置`) !== location_enum.beach) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'we_summer_end_c',
      sweep,
      this.#dict,
    );
    this.#marks.agreement = 1;
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.strength]: 5, [attr_enum.toughness]: 5 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_truth(sweep) {
    await print_title_with_kojo(this.#kojo, 'ws_truth', sweep, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.endurance]: 5, [attr_enum.toughness]: 5 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async we_asphodel(sweep) {
    if (era.get('flag:强制BE') > 0) {
      return;
    }
    const zob_zoy = get_chara_talk(47);
    await print_title_with_kojo(this.#kojo, 'we_asphodel', sweep, {
      ZOB_ZOY: zob_zoy.name,
      COLOR_47: zob_zoy.color,
      ...this.#dict,
    });
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.endurance]: 5, [attr_enum.toughness]: 5 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_new_year_s(sweep) {
    const op = {};
    switch (
      (
        await print_title_with_kojo(
          this.#kojo,
          'ws_new_year_s',
          sweep,
          this.#dict,
        )
      )['select']
    ) {
      case 1:
        op.attr = base_attr_list.map(() => 30);
        break;
      case 2:
        op.pt = 100;
        break;
      case 3:
        op.base = [800];
    }
    if (all_reward_in_event(this.id, op)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async we_magic_stage(sweep) {
    await print_title_with_kojo(
      this.#kojo,
      'we_magic_stage',
      sweep,
      this.#dict,
    );
  }

  /** @param {CharaTalk} sweep */
  async ws_magic_dream(sweep) {
    const dict = this.#dict;
    if (
      check_aim_race(RaceHistory.get(this.id).get(), race_enum.takz_kin, 2, 1)
    ) {
      await print_title_with_kojo(this.#kojo, 'ws_magic_dream_w', sweep, dict);
      era.setToBottom();
      this.#kojo['ws_md_w_1'](dict);
      await era.waitAnyKey();
      era.setToBottom();
      await this.#kojo['ws_md_w_1_end'](dict);
      this.#kojo['ws_md_w_2'](dict);
      await era.waitAnyKey();
      era.setToBottom();
      await this.#kojo['ws_md_w_2_end'](dict);
      this.#kojo['ws_md_w_3'](dict);
      await era.waitAnyKey();
      era.setToBottom();
      await this.#kojo['ws_md_w_3_end'](dict);
    } else {
      await print_title_with_kojo(this.#kojo, 'ws_magic_dream_l', sweep, dict);
      era.setToBottom();
      this.#kojo['ws_md_w_1'](dict);
      await era.waitAnyKey();
      era.setToBottom();
      await this.#kojo['ws_md_l'](dict);
    }
    if (
      all_reward_in_event(this.id, {
        attr: base_attr_list.map(() => 5),
        pt: 100,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} sweep
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_summer_start_s(sweep, me, callname, hook, extra, ebj) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== era.get(`cflag:${this.id}:位置`)
    ) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'ws_summer_start_s',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.speed]: 5, [attr_enum.intelligence]: 5 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_christmas_s(sweep) {
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    await print_title_with_kojo(
      this.#kojo,
      'ws_christmas_s',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        relation: 30,
        motivation: 1,
        pt: 50,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} sweep
   * @param {CharaTalk} me
   */
  async palace(sweep, me) {
    await CustomizedEdu.common_palace(sweep, me);
    era.drawLine();
    const dict = this.#dict;
    if (
      RaceHistory.get(this.id)
        .get_values()
        .filter(
          (r) =>
            r.rank === 1 && race_infos[r.race].race_class === class_enum.G1,
        ).length >= 3
    ) {
      const fuji = get_chara_talk(5);
      const zob_zoy = get_chara_talk(47);
      await print_title_with_kojo(
        this.#kojo,
        'ending_forever_eyebright',
        sweep,
        {
          FUJI: fuji.name,
          COLOR_5: fuji.color,
          ZOB_ZOY: zob_zoy.name,
          COLOR_47: zob_zoy.color,
          ...dict,
        },
      );
    } else {
      await print_event_name(
        this.#kojo['ending_majo_journey'].title.replace('%MAJO%', dict.MAJO),
        sweep,
      );
      const stay = get_chara_talk(135);
      await this.#kojo['ending_majo_journey']({
        STAY: stay.name,
        COLOR_135: stay.color,
        ...dict,
      });
    }
  }

  async race_start(sweep, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let key = '';
    let temp;
    let dict = this.#dict;
    switch (extra.race) {
      case race_enum.begin_race:
        key = 'rs_begin_race';
        break;
      case race_enum.hans_fil:
        key = 'rs_hans_fil';
        break;
      case race_enum.oka_sho:
        key = 'rs_oka_sho';
        extra.pseudo.attrs[attr_enum.intelligence] *= 1.05;
        break;
      case race_enum.yush_him:
        await print_title_with_kojo(this.#kojo, 'rs_yush_him', sweep, dict);
        dict.decorate = 0;
        while (temp !== 2) {
          temp = (await this.#kojo['rs_yh_select'](dict))[0];
          if (temp === 1) {
            dict.decorate++;
          }
        }
        extra.pseudo.attrs[attr_enum.strength] *= 1.05;
        return;
      case race_enum.shuk_sho:
        key = 'rs_shuk_sho';
        extra.pseudo.attrs[attr_enum.speed] *= 1.05;
        break;
      case race_enum.eliz_cup:
        if (edu_weeks < 96) {
          key = 'rs_eliz_cup_c';
          extra.pseudo.attrs[attr_enum.toughness] *= 1.05;
        } else {
          key = 'rs_eliz_cup_s';
          base_attr_list.forEach((a) => (extra.pseudo.attrs[a] *= 1.2));
        }
        break;
      case race_enum.yasu_kin:
        if (edu_weeks > 96) {
          key = 'rs_yasu_kin_s';
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          key = 'rs_takz_kin_s';
          dict.ZOB_ZOY = get_chara_talk(47).name;
          base_attr_list.forEach(
            (a) =>
              (extra.pseudo.attrs[a] *=
                a === attr_enum.toughness ? 1.15 : 1.05),
          );
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          const zob_zoy = get_chara_talk(47);
          dict.ZOB_ZOY = zob_zoy.name;
          key = 'rs_tenn_sho_s';
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks > 96) {
          key = 'rs_arim_kin_s';
        }
    }
    if (!key) {
      key = 'rs_common';
    }
    await print_title_with_kojo(this.#kojo, key, sweep, dict);
  }

  async race_end(sweep, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let key = '';
    let dict = this.#dict;
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1) {
          key = 're_begin_race_win';
          const fuji = get_chara_talk(5);
          dict = {
            FUJI: fuji.name,
            COLOR_5: fuji.color,
            ...dict,
          };
        } else {
          key = 're_begin_race_lose';
        }
        break;
      case race_enum.hans_fil:
        key = extra.rank === 1 ? 're_hans_fil_win' : 're_hans_fil_lose';
        break;
      case race_enum.oka_sho:
        key = extra.rank === 1 ? 're_oka_sho_win' : 're_oka_sho_lose';
        break;
      case race_enum.yush_him:
        key = extra.rank === 1 ? 're_yush_him_win' : 're_yush_him_lose';
        break;
      case race_enum.shuk_sho:
        key = extra.rank === 1 ? 're_shuk_sho_win' : 're_shuk_sho_lose';
        break;
      case race_enum.eliz_cup:
        if (edu_weeks < 96) {
          if (extra.rank === 1) {
            key = 're_eliz_cup_win_c';
          } else {
            const { be } = await print_title_with_kojo(
              this.#kojo,
              're_eliz_cup_lose_c',
              sweep,
              dict,
            );
            if (be === 3) {
              era.set('flag:强制BE', this.id);
            }
            return;
          }
        } else {
          key = extra.rank === 1 ? 're_eliz_cup_win_s' : 're_eliz_cup_lose_s';
        }
        break;
      case race_enum.yasu_kin:
        if (edu_weeks > 96) {
          key = extra.rank === 1 ? 're_yasu_kin_win_s' : 're_yasu_kin_lose_s';
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          key = extra.rank === 1 ? 're_takz_kin_win_s' : 're_takz_kin_lose_s';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          key = extra.rank === 1 ? 're_tenn_sho_win_s' : 're_tenn_sho_lose_s';
        }
    }
    if (!key) {
      key = extra.rank === 1 ? 're_win' : 're_lose';
    }
    await print_title_with_kojo(this.#kojo, key, sweep, dict);
  }

  async crazy_fan_end() {
    if (era.get('flag:强制BE') === this.id) {
      await print_title_with_kojo.ending(
        this.#kojo,
        'be_dream_end',
        get_chara_talk(this.id),
        this.#dict,
      );
    } else {
      await print_title_with_kojo.ending(
        this.#kojo,
        'be_dull_dream',
        get_chara_talk(this.id),
        generate_dictionary(this.id, { call: !0, title: !0, uma: !0 }),
      );
    }
  }

  /** @param {CharaTalk} sweep */
  async we_slave_and_master(sweep) {
    await print_title_with_kojo(
      this.#kojo,
      'we_slave_and_master',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        relation: get_random_value(30, 50),
        attr: [5, 5],
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_phalaenopsis(sweep) {
    await print_title_with_kojo(
      this.#kojo,
      'ws_phalaenopsis',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        relation: get_random_value(30, 50),
        attr: { [attr_enum.endurance]: 5, [attr_enum.toughness]: 5 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_witch_potion(sweep) {
    await print_title_with_kojo(this.#kojo, 'ws_witch_potion', sweep, {
      CALL_5: sys_get_callname(this.id, 5),
      ...this.#dict,
    });
    let wait = all_reward_in_event(this.id, {
      relation: get_random_value(20, 30),
    });
    wait = all_reward_in_event(0, { base: [100, 200] }) || wait;
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async we_sweet_carrot(sweep) {
    await print_title_with_kojo(
      this.#kojo,
      'we_sweet_carrot',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.intelligence]: 10 },
        relation: get_random_value(20, 30),
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async we_in_school(sweep) {
    const dict = this.#dict;
    await print_title_with_kojo(this.#kojo, 'we_in_school', sweep, dict);
    let r;
    while (r !== 3) {
      r = (await this.#kojo['wis_loop'](dict))[0];
    }
    if (
      all_reward_in_event(this.id, {
        skills: [201481],
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} sweep
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async og_phantom_thief(sweep, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, ebj);
      return;
    }
    const fuji = get_chara_talk(5);
    const maya = get_chara_talk(24);
    const zob_zoy = get_chara_talk(47);
    const kita = get_chara_talk(68);
    await print_title_with_kojo(this.#kojo, 'og_phantom_thief', sweep, {
      FUJI: fuji.name,
      COLOR_5: fuji.color,
      MAYA: maya.name,
      COLOR_24: maya.color,
      ZOB_ZOY: zob_zoy.name,
      COLOR_47: zob_zoy.color,
      KITA: kita.name,
      COLOR_68: kita.color,
      ...this.#dict,
    });
    if (
      all_reward_in_event(this.id, {
        relation: get_random_value(20, 30),
        pt: 20,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} sweep */
  async ws_magic_origin(sweep) {
    await print_title_with_kojo(
      this.#kojo,
      'ws_magic_origin',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        relation: get_random_value(20, 30),
        pt: 20,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_paper_plane(sweep) {
    await print_title_with_kojo(
      this.#kojo,
      'ws_paper_plane',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        attr: { [attr_enum.endurance]: 5, [attr_enum.intelligence]: 5 },
        pt: 50,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async we_buttercup(sweep) {
    await print_title_with_kojo(this.#kojo, 'we_buttercup', sweep, this.#dict);
    if (
      all_reward_in_event(this.id, {
        relation: get_random_value(20, 30),
        attr: { [attr_enum.speed]: 5, [attr_enum.endurance]: 5 },
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} sweep
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async ws_night_shade(sweep, me, callname, hook, extra, ebj) {
    await print_title_with_kojo(this.#kojo, 'ws_night_shade', sweep, {
      FUJI: get_chara_talk(5).name,
      ...this.#dict,
    });
    add_event(event_hooks.week_end, ebj.set_arg('we_gypsonphila'));
  }

  /** @param {CharaTalk} sweep */
  async we_gypsonphila(sweep) {
    await print_title_with_kojo(
      this.#kojo,
      'we_gypsonphila',
      sweep,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        skills: [201511],
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_strange_day(sweep) {
    const sky = get_chara_talk(20);
    const maya = get_chara_talk(24);
    const tachyon = get_chara_talk(32);
    const dotou = get_chara_talk(58);
    const minoru = get_chara_talk(301);
    await print_title_with_kojo(this.#kojo, 'ws_strange_day', sweep, {
      SKY: sky.name,
      COLOR_20: sky.color,
      MAYA: maya.name,
      COLOR_24: maya.color,
      TACHYON: tachyon.name,
      COLOR_32: tachyon.color,
      DOTOU: dotou.name,
      COLOR_58: dotou.color,
      MINORU: minoru.name,
      COLOR_301: minoru.color,
      ...this.#dict,
    });
    if (
      all_reward_in_event(this.id, {
        relation: get_random_value(20, 30),
        pt: 50,
        base: [600, 600],
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_branches(sweep) {
    const curren = get_chara_talk(38);
    const orfevre = get_chara_talk(115);
    const journey = get_chara_talk(119);
    const durandal = get_chara_talk(121);
    await print_title_with_kojo(this.#kojo, 'ws_branches', sweep, {
      CURREN: curren.name,
      COLOR_38: curren.color,
      CALLNAME_38: sys_get_callname(38, 0),
      ORFEVRE: orfevre.name,
      COLOR_115: orfevre.color,
      JOURNEY: journey.name,
      COLOR_119: journey.color,
      DURANDAL: durandal.name,
      COLOR_121: durandal.color,
      ...this.#dict,
    });
    if (
      [38, this.id, 115, 119, 121].reduce(
        (p, c) => sys_change_motivation(c) || p,
        false,
      )
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_mother(sweep) {
    const curren = get_chara_talk(38);
    const orfevre = get_chara_talk(115);
    const journey = get_chara_talk(119);
    const durandal = get_chara_talk(121);
    await print_title_with_kojo(this.#kojo, 'ws_mother', sweep, {
      CURREN: curren.name,
      COLOR_38: curren.color,
      ORFEVRE: orfevre.name,
      COLOR_115: orfevre.color,
      JOURNEY: journey.name,
      COLOR_119: journey.color,
      DURANDAL: durandal.name,
      COLOR_121: durandal.color,
      ...this.#dict,
    });
    let wait = all_reward_in_event(this.id, { relation: 50, motivation: 1 });
    wait = sys_like_chara(this.id, 38, 50) || wait;
    wait = all_reward_in_event(38, { relation: 50, motivation: 1 }) || wait;
    wait = sys_like_chara(38, this.id, 50) || wait;
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} sweep */
  async ws_tea_party(sweep) {
    const sil = get_chara_talk(97);
    await print_title_with_kojo(this.#kojo, 'ws_tea_party', sweep, {
      SIL: sil.name,
      COLOR_97: sil.color,
      ...this.#dict,
    });
    let wait = all_reward_in_event(this.id, { relation: 75, motivation: 1 });
    wait = sys_like_chara(this.id, 97, 75) || wait;
    wait = all_reward_in_event(97, { relation: 75, motivation: 1 }) || wait;
    wait = sys_like_chara(97, this.id, 75) || wait;
    if (wait) {
      await era.waitAnyKey();
    }
  }
};
