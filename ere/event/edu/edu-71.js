const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const ArdanEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-71');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0, uma: !0 });
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async beginning(ardan, me, callname, hook, extra_flag, event_object) {
    await print_title_with_kojo(this.#kojo, 'beginning', ardan, this.#dict);
    add_event(hook.hook, event_object.set_arg('beginning2'));
    if (
      all_reward_in_event(this.id, {
        attr: [0, 0, 0, 10],
        relation: 20,
        love: 2,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} ardan */
  async beginning2(ardan) {
    let wait_flag;
    if (
      (
        await print_title_with_kojo(this.#kojo, 'beginning2', ardan, this.#dict)
      )['select'] === 1
    ) {
      wait_flag = all_reward_in_event(this.id, {
        attr: [10, 10],
        relation: 20,
        love: 2,
      });
    } else {
      wait_flag = all_reward_in_event(this.id, {
        attr: [10],
        relation: -10,
      });
    }
    if (wait_flag) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async gap(ardan, me, callname, hook, extra_flag, event_object) {
    add_event(event_hooks.out_start, event_object.set_arg('together'));
    await print_title_with_kojo(this.#kojo, 'gap', ardan, {
      ...generate_dictionary(this.id, { call: !0, sir: !0 }),
      YOUNG_LADY:
        ardan.sex_code === 1
          ? i18n().name.young_master
          : i18n().name.young_lady,
    });
    if (
      all_reward_in_event(this.id, {
        attr: [0, 0, 0, 5],
        love: 1,
        relation: 10,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} ardan */
  async together(ardan) {
    await print_title_with_kojo(this.#kojo, 'together', ardan, this.#dict);
    new ArdanEduMarks().sick = 0;
    if (
      all_reward_in_event(this.id, {
        attr: [0, 0, 0, 15],
        motivation: 1,
        relation: 50,
        love: 5,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} ardan */
  async tie(ardan) {
    let wait_flag;
    if (
      (
        await print_title_with_kojo(this.#kojo, 'ws_tie', ardan, {
          ...this.#dict,
          CALL_69: sys_get_colored_callname(this.id, 69).content,
          CALL_72: sys_get_colored_callname(this.id, 72).content,
        })
      )['select'] === 1
    ) {
      wait_flag = all_reward_in_event(this.id, {
        relation: 20,
        love: 2,
        attr: new Array(5).fill(5),
        pt: 30,
      });
    } else {
      wait_flag = all_reward_in_event(this.id, {
        attr: new Array(5).fill(3),
        pt: 15,
      });
    }
    if (wait_flag) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} ardan */
  async separate_way(ardan) {
    if (
      (
        await print_title_with_kojo(this.#kojo, 'separate_way', ardan, {
          ...this.#dict,
          CALL_69: sys_get_colored_callname(this.id, 69).content,
          CALL_72: sys_get_colored_callname(this.id, 72).content,
        })
      )['select'] === 1
    ) {
      new ArdanEduMarks().kiku_sho = 1;
    }
    if (
      all_reward_in_event(this.id, {
        relation: 10,
        love: 1,
        attr: new Array(5).fill(3),
        pt: 30,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  async train_fail(ardan, me, callname, hook, extra_flag) {
    new ArdanEduMarks().train_fail++;
    return await super.train_fail(ardan, me, callname, hook, extra_flag);
  }

  async race_start(ardan, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    extra_flag.relation_change = 0;
    let key;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (edu_weeks === 23) {
          key = 'begin_race';
          if ((await this.#kojo[key](this.#dict))['select'] === 1) {
            extra_flag.love_change = 2;
          } else {
            extra_flag.relation_change = 10;
          }
          extra_flag.motivation_change = 1;
        }
        break;
      case race_enum.sats_sho:
        key = 'sats_sho';
        await this.#kojo[key](this.#dict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.aoba_sho:
        key = 'aoba_sho';
        await this.#kojo[key](this.#dict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.toky_yus:
        key = 'toky_yus';
        await this.#kojo[key](this.#dict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.kiku_sho:
        key = 'kiku_sho';
        await this.#kojo[key]({
          ...this.#dict,
          ELDER_SISTER: ardan.elder_sibling_sex_title,
        });
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.tenn_sho:
        if (edu_weeks < 96) {
          key = 'classical_tenn_sho';
        } else {
          key = 'senior_tenn_sho';
        }
        await this.#kojo[key](this.#dict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.sank_hai:
        key = 'sank_hai';
        await this.#kojo[key]({
          ...this.#dict,
          CALL_69: sys_get_colored_callname(this.id, 69).content,
          CALL_72: sys_get_colored_callname(this.id, 72).content,
        });
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          key = 'takz_kin';
          await this.#kojo[key](this.#dict);
          extra_flag.relation_change = 10;
          extra_flag.motivation_change = 1;
        }
        break;
      case race_enum.main_oka:
        if (edu_weeks > 96) {
          key = 'main_oka';
          await this.#kojo[key](this.#dict);
          extra_flag.relation_change = 10;
          extra_flag.motivation_change = 1;
        }
        break;
    }
    if (key === undefined) {
      key = 'race_start';
      await this.#kojo[key](this.#dict);
      extra_flag.relation_change = 10;
    }
  }

  async race_end(ardan, me, callname, hook, extra_flag) {
    const edu_marks = new ArdanEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let key;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (extra_flag.rank === 1) {
          key = 'begin_race_win';
          await this.#kojo[key](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.pt_change = 60;
          edu_marks.sick = 1;
          add_event(
            event_hooks.out_start,
            new EventObject(this.id, cb_enum.edu).set_arg('gap'),
          );
        }
        break;
      case race_enum.sats_sho:
        if (extra_flag.rank === 1) {
          key = 'sats_sho_win';
          await this.#kojo[key](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.pt_change = 60;
        } else if (extra_flag.rank <= 5) {
          key = 'sats_sho_5';
          await this.#kojo[key](this.#dict);
          extra_flag.attr_change = new Array(5).fill(3);
          extra_flag.pt_change = 30;
        }
        break;
      case race_enum.aoba_sho:
        if (extra_flag.rank <= 5) {
          await this.#kojo[(key = 'aoba_sho_5')](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.pt_change = 60;
          add_event(
            event_hooks.week_start,
            new EventObject(this.id, cb_enum.edu).set_arg('tie'),
          );
        }
        break;
      case race_enum.toky_yus:
        if (extra_flag.rank === 1) {
          key = 'toky_yus_win';
          await this.#kojo[key]({
            ...this.#dict,
            CALL_69: sys_get_colored_callname(this.id, 69).content,
            CALL_72: sys_get_colored_callname(this.id, 72).content,
          });
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.pt_change = 60;
        } else if (extra_flag.rank <= 5) {
          key = 'toky_yus_5';
          await this.#kojo[key]({
            ...this.#dict,
            CALL_69: sys_get_colored_callname(this.id, 69).content,
            CALL_72: sys_get_colored_callname(this.id, 72).content,
          });
          extra_flag.attr_change = new Array(5).fill(3);
          extra_flag.pt_change = 30;
        }
        era.println();
        if (era.get(`talent:${this.id}:身体素质`) === -1) {
          era.set(`talent:${this.id}:身体素质`, 0);
        }
        if (era.get(`talent:${this.id}:痛苦感受`) !== -1) {
          era.set(`talent:${this.id}:痛苦感受`, -1);
        }
        break;
      case race_enum.kiku_sho:
        if (extra_flag.rank === 1) {
          key = 'kiku_sho_win';
          await this.#kojo[key](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.pt_change = 60;
        } else if (extra_flag.rank <= 5) {
          key = 'kiku_sho_5';
          await this.#kojo[key](this.#dict);
          extra_flag.attr_change = new Array(5).fill(3);
          extra_flag.pt_change = 30;
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks < 96) {
          if (extra_flag.rank === 1) {
            key = 'classical_tenn_sho_win';
            await this.#kojo[key](this.#dict);
            extra_flag.attr_change = new Array(5).fill(5);
            extra_flag.pt_change = 60;
          } else if (extra_flag.rank <= 3) {
            key = 'classical_tenn_sho_3';
            await this.#kojo[key](this.#dict);
            extra_flag.attr_change = new Array(5).fill(3);
            extra_flag.pt_change = 30;
          }
        } else if (extra_flag.rank === 1) {
          key = 'senior_tenn_sho_win';
          await this.#kojo[key](this.#dict);
          extra_flag.attr_change = new Array(5).fill(30);
          extra_flag.pt_change = 150;
        }
        break;
      case race_enum.sank_hai:
        if (extra_flag.rank <= 3) {
          key = 'sank_hai_3';
          await this.#kojo[key]({
            ...this.#dict,
            CALL_69: sys_get_colored_callname(this.id, 69).content,
            CALL_72: sys_get_colored_callname(this.id, 72).content,
          });
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.pt_change = 60;
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96 && extra_flag.rank <= 3) {
          key = 'takz_kin_3';
          await this.#kojo[key](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.pt_change = 60;
        }
        break;
      case race_enum.main_oka:
        if (edu_weeks > 96 && extra_flag.rank <= 3) {
          key = 'main_oka_3';
          await this.#kojo[key](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.pt_change = 60;
        }
        break;
    }
    if (key === undefined) {
      if (extra_flag.rank === 1) {
        key = 'race_end_win';
        extra_flag.attr_change = new Array(5).fill(3);
        extra_flag.pt_change = 30;
      } else {
        key = 'race_end_lose';
        extra_flag.attr_change = new Array(5).fill(2);
        extra_flag.pt_change = 15;
      }
      extra_flag.relation_change = 10;
      await this.#kojo[key](this.#dict);
    } else {
      extra_flag.relation_change = 10;
      extra_flag.love_change = extra_flag.rank === 1 ? 2 : 1;
    }
  }
};
