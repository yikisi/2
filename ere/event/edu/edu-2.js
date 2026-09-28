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
const check_aim_race = require('#/event/snippets/check-aim-race');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const SuzukaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-2');
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
    return generate_dictionary(this.id, { call: !0 });
  }

  async train(attr) {
    await this.#kojo['train'](this.#dict);
  }

  train_success_content(suzuka, me, callname, hook, extra) {
    this.#kojo['train_success'](this.#dict);
  }

  async train_fail(suzuka, me, callname, hook, extra) {
    await this.#kojo['train_fail'](this.#dict);
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    hook.arg = 0;
  }

  async train_success_add(suzuka, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return false;
    }
    return (await this.#kojo['train_additional'](this.#dict))['train'] === 1;
  }

  /** @param {CharaTalk} suzuka */
  async begin_race_miss(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'begin_race_miss',
      suzuka,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: -20 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async new_year_classical(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'new_year_classical',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    if (all_reward_in_event(this.id, { relation: 10 })) {
      await era.waitAnyKey();
    }
    // CFLAGNAME:56 = 节日事件标记
    era.set(`cflag:${this.id}:56`, 0);
  }

  /** @param {CharaTalk} suzuka */
  async race_clothe(suzuka) {
    const attr = new Array(5).fill(0);
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'race_clothe',
          suzuka,
          this.#dict,
        )
      )['attr'] === 1
    ) {
      attr[attr_enum.strength] = 20;
    } else {
      attr[attr_enum.toughness] = 20;
    }
    if (all_reward_in_event(this.id, { attr, relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async secret_base(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'secret_base',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    if (all_reward_in_event(this.id, { motivation: 1, relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} suzuka
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async turn_overcast(suzuka, me, callname, hook, extra, ebj) {
    let hoch_sho = RaceHistory.get(this.id).get_result(47 + 9);
    if (hoch_sho?.race === race_enum.hoch_sho) {
      hoch_sho = hoch_sho.rank;
    } else {
      hoch_sho = void 0;
    }
    let motivation = 0;
    if (hoch_sho === 1) {
      new SuzukaEduMarks().debuff = 2;
    } else if (hoch_sho > 1) {
      motivation = -1;
    } else {
      motivation = -2;
    }
    let ret = false;
    if (
      // CFLAGNAME:45 = 位置
      era.get(`cflag:${this.id}:45`) !== location_enum.beach ||
      era.get('cflag:0:45') !== location_enum.beach
    ) {
      add_event(hook.hook, ebj);
    } else {
      await print_title_with_kojo(this.#kojo, 'turn_overcast', suzuka, {
        ...generate_dictionary(this.id, { call: !0, uma: !0 }),
        hoch_sho,
      });
      ret = true;
      // CFLAGNAME:56 = 节日事件标记
      era.set(`cflag:${this.id}:56`, 0);
    }
    if (all_reward_in_event(this.id, { motivation, relation: -5 })) {
      await era.waitAnyKey();
    }
    return ret;
  }

  /**
   * @param {CharaTalk} suzuka
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async turn_cloudy(suzuka, me, callname, hook, extra, ebj) {
    let hoch_sho = RaceHistory.get(this.id).get_result(47 + 9);
    if (hoch_sho?.race === race_enum.hoch_sho) {
      hoch_sho = hoch_sho.rank;
    } else {
      hoch_sho = void 0;
    }
    let motivation = 0;
    if (hoch_sho === 1) {
      new SuzukaEduMarks().debuff = 1;
    } else if (hoch_sho > 1) {
      motivation = 1;
    }
    if (
      // CFLAGNAME:45 = 位置
      era.get(`cflag:${this.id}:45`) !== location_enum.beach ||
      era.get('cflag:0:45') !== location_enum.beach
    ) {
      add_event(hook.hook, ebj);
    } else {
      await print_title_with_kojo(this.#kojo, 'turn_cloudy', suzuka, {
        ...generate_dictionary(this.id, { call: !0, uma: !0 }),
        hoch_sho,
      });
    }
    if (all_reward_in_event(this.id, { motivation, relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async kobe_hai_lose(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'kobe_hai_lose',
      suzuka,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: -20 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async first_step(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'first_step',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    if (all_reward_in_event(this.id, { relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async new_year_senior(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'new_year_senior',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    // CFLAGNAME:56 = 节日事件标记
    era.set(`cflag:${this.id}:56`, 0);
    new SuzukaEduMarks().debuff = 0;
    if (all_reward_in_event(this.id, { relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async kink_sho_miss(suzuka) {
    await print_title_with_kojo(this.#kojo, 'kink_sho_miss', suzuka, {
      ...this.#dict,
      T_NAME: get_chara_talk(301).name,
    });
    if (all_reward_in_event(this.id, { relation: -20 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async second_step(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'second_step',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    if (all_reward_in_event(this.id, { relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} suzuka
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async summer_end(suzuka, me, callname, hook, extra, ebj) {
    if (
      // CFLAGNAME:45 = 位置
      era.get(`cflag:${this.id}:45`) !== location_enum.beach ||
      era.get('cflag:0:45') !== location_enum.beach
    ) {
      add_event(hook.hook, ebj);
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'summer_end',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    if (all_reward_in_event(this.id, { relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async curse(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'curse',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }

  /** @param {CharaTalk} suzuka */
  async bad_omen(suzuka) {
    const dict = generate_dictionary(this.id, { call: !0, uma: !0 });
    await print_title_with_kojo(this.#kojo, 'bad_omen', suzuka, dict);
    era.drawLine();
    const edu_marks = new SuzukaEduMarks();
    edu_marks.choice = (
      await print_title_with_kojo(this.#kojo, 'choice', suzuka, dict)
    )['choice'];
    if (edu_marks.choice >= 2) {
      let relation = -100;
      if (edu_marks.choice === 3) {
        relation = -50;
      }
      if (all_reward_in_event(this.id, { relation })) {
        await era.waitAnyKey();
      }
    }
  }

  /** @param {CharaTalk} suzuka */
  async wing_clipped(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'wing_clipped',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    // CFLAGNAME:66 = 招募状态
    era.set(`cflag:${this.id}:66`, recruit_flags.temporary_leave);
    // FLAGNAME:5 = 当前互动角色
    if (era.get('flag:5') === 2) {
      era.set('flag:5', 0);
    }
  }

  /** @param {CharaTalk} suzuka */
  async tenn_sho_miss(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'tenn_sho_miss',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    if (era.get(`love:${this.id}`) >= 75) {
      begin_and_init_ero(0, this.id);
      era.set('tflag:7', this.id);
      await print_ero_page(this.id, true);
      await end_ero_and_show_result(true);
      if (all_reward_in_event(this.id, { relation: 5 })) {
        await era.waitAnyKey();
      }
    } else {
      if (all_reward_in_event(this.id, { relation: -20 })) {
        await era.waitAnyKey();
      }
    }
  }

  /** @param {CharaTalk} suzuka */
  async third_step_win(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'third_step_win',
      suzuka,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async third_step_lose(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'third_step_lose',
      suzuka,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: -5 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async third_step_miss(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'third_step_miss',
      suzuka,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: 5 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async ending(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'ending',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }

  /** @param {CharaTalk} suzuka */
  async christmas(suzuka) {
    await print_title_with_kojo(this.#kojo, 'christmas', suzuka, this.#dict);
    // CFLAGNAME:56 = 节日事件标记
    era.set(`cflag:${this.id}:56`, 0);
    if (all_reward_in_event(this.id, { relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async hope(suzuka) {
    await print_title_with_kojo(this.#kojo, 'hope', suzuka, this.#dict);
    // CFLAGNAME:56 = 节日事件标记
    era.set(`cflag:${this.id}:56`, 0);
    if (all_reward_in_event(this.id, { relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async edu_ending(suzuka) {
    const edu_marks = new SuzukaEduMarks();
    const count = RaceHistory.get(this.id)
      .get_values()
      .filter((r) => r.rank !== 1).length;
    let key;
    let dict;
    if (count === 0) {
      key = 'invincible';
      dict = generate_dictionary(this.id, { uma: !0, your_name: !0 });
    } else if (!edu_marks.debuff && count <= 2) {
      key = 'better_ending';
      dict = generate_dictionary(this.id, { uma: !0 });
    } else if (edu_marks.debuff >= 3 && count <= 1) {
      key = 'good_ending';
      dict = generate_dictionary(this.id);
    } else {
      key = 'normal_ending';
      dict = generate_dictionary(this.id, { uma: !0 });
    }
    if (era.get(`cflag:${this.id}:66`) === recruit_flags.temporary_leave) {
      era.set(`cflag:${this.id}:66`, recruit_flags.yes);
      edu_marks.debuff = 3;
    }
    await print_title_with_kojo(this.#kojo, key, suzuka, dict);
    if (all_reward_in_event(this.id, { relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} suzuka */
  async run_together(suzuka) {
    await print_title_with_kojo(
      this.#kojo,
      'run_together',
      suzuka,
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
    if (all_reward_in_event(this.id, { attr: [5, 0, 0, 15] })) {
      await era.waitAnyKey();
    }
  }

  async race_start(suzuka, me, callname, hook, extra) {
    let key = '';
    const dict = generate_dictionary(this.id, { call: !0, uma: !0 });
    if (era.get(`cflag:${this.id}:48`) > 96) {
      if (extra.race === race_enum.takz_kin) {
        const grass = get_chara_talk(11);
        dict.G_COLOR = grass.color;
        if (extra.contestants.some((u) => u.index_chara === 11)) {
          dict.G_NAME =
            era.get('cflag:11:66') !== 1 ? grass.name : dict.UMA + 'G';
        }
        const groove = get_chara_talk(18);
        dict.A_COLOR = groove.color;
        if (extra.contestants.some((u) => u.index_chara === 18)) {
          dict.A_NAME = groove.name;
          dict.CALL_18 = sys_get_callname(this.id, 18);
        } else {
          dict.A_NAME = dict.UMA + 'A';
          dict.CALL_18 = i18n().name.classmate_template.replace('%NAME%', 'A');
        }
        key = 'takz_kin';
      } else if (extra.race === race_enum.tenn_sho) {
        key = 'tenn_sho';
      }
    }
    if (key) {
      await print_title_with_kojo(this.#kojo, key, suzuka, dict);
    } else {
      await this.#kojo['race_start'](dict);
    }
  }

  async race_end(suzuka, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:48`);
    let key = '';
    const dict = generate_dictionary(this.id, { call: !0, uma: !0 });
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1) {
          key = 'begin_race_win';
        } else if (edu_weeks === 23) {
          key = 'begin_race_lose';
        }
        break;
      case race_enum.kobe_hai:
        if (extra.rank <= 5) {
          dict.rank = extra.rank;
          key = 'kobe_hai_end';
          new SuzukaEduMarks().debuff = 0;
          if (extra.rank === 1) {
            extra.motivation_change = 1;
          }
        } else {
          key = 'kobe_hai_lose';
        }
        break;
      case race_enum.kink_sho:
        if (extra.rank <= 3) {
          key = 'kink_sho_3';
        } else {
          key = 'kink_sho_4';
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          if (extra.rank <= 3) {
            const grass = get_chara_talk(11);
            const groove = get_chara_talk(18);
            dict.G_COLOR = grass.color;
            dict.A_COLOR = groove.color;
            dict.G_NAME = extra.contestants.some((u) => u.index_chara === 11)
              ? grass.name
              : dict.UMA + 'G';
            dict.A_NAME = extra.contestants.some((u) => u.index_chara === 18)
              ? groove.name
              : dict.UMA + 'A';
            dict['11_CALL'] = sys_get_callname(11, this.id);
            key = extra.rank === 1 ? 'takz_kin_win' : 'takz_kin_3';
          } else {
            key = 'takz_kin_lose';
          }
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          if (extra.rank === 1) {
            dict.YOUR_SEX = me.sex;
            key = 'tenn_sho_win';
          } else {
            key = 'tenn_sho_lose';
          }
        }
    }
    if (key) {
      await print_title_with_kojo(this.#kojo, key, suzuka, dict);
    } else {
      dict.rank = extra.rank;
      await this.#kojo['race_end'](dict);
    }
  }

  async crazy_fan_end() {
    const history = RaceHistory.get(this.id).get();
    if (
      (!check_aim_race(history, race_enum.takz_kin, 2) ||
        !check_aim_race(history, race_enum.kink_sho, 2)) &&
      new SuzukaEduMarks().debuff >= 3
    ) {
      await print_title_with_kojo.ending(
        this.#kojo,
        'crazy_fan',
        get_chara_talk(this.id),
        this.#dict,
      );
    } else {
      await super.crazy_fan_end();
    }
  }
};
