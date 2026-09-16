const era = require('#/era-electron');

const {
  sys_change_lust,
  sys_get_billings,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const CustomizedEvent = require('#/event/event-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

class CustomizedDaily extends CustomizedEvent {
  good_morning() {
    i18n().timon.daily.good_morning(
      get_chara_talk(this.id),
      get_chara_talk(0),
      get_chara_talk(301),
    );
  }

  select() {
    i18n().timon.daily.select(
      get_chara_talk(this.id),
      get_chara_talk(0),
      !sys_check_awake(this.id),
    );
  }

  /** @param {HookArg} hook */
  async good_night(hook) {
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const c_awake = sys_check_awake(this.id);
    const m_awake = sys_check_awake(0);
    if (c_awake && m_awake) {
      const check = get_custom_check(this.id).is_want_make_love();
      if (check > 0) {
        if (await this.good_night_sex(chara, me, check)) {
          hook.arg = 1;
        } else if (check === 2) {
          hook.arg = 2;
        } else {
          hook.arg = 0;
        }
        return;
      }
    }
    this.good_night_normal(chara, me, c_awake, m_awake);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {number} check
   * @return {Promise<boolean>}
   */
  async good_night_sex(chara, me, check) {
    if (
      await select_yes_or_no(
        i18n().timon.daily.get_gn_sex_message(chara, me),
        i18n().timon.daily.gn_sex_yes,
        i18n().timon.daily.gn_sex_no,
      )
    ) {
      await i18n().timon.daily.gn_sex_accept(chara, me);
      return true;
    } else if (check === 2) {
      await i18n().timon.daily.gn_sex_force(
        chara,
        me,
        sys_get_colored_callname(this.id, 0),
      );
    } else {
      await i18n().timon.daily.gn_sex_reject(chara);
    }
    return false;
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {boolean} c_awake
   * @param {boolean} m_awake
   */
  good_night_normal(chara, me, c_awake, m_awake) {
    i18n().timon.daily.good_night_normal(chara, me, c_awake, m_awake);
  }

  /** @param {0|1|2} stage */
  async growth(stage) {}

  async office_study() {
    await (
      era.get('flag:惩戒力度') >= 2 && Math.random() < 0.5
        ? i18n().timon.pregnant_slave.office_study
        : i18n().timon.daily.office_study
    )(get_chara_talk(this.id), get_chara_talk(0));
  }

  async office_prepare() {
    await i18n().timon.daily.office_prepare(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async talk() {
    await i18n().timon.daily.talk(
      get_chara_talk(this.id),
      get_chara_talk(0),
      !sys_check_awake(this.id),
    );
  }

  async office_gift() {
    await i18n().timon.daily.office_gift(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async office_cook() {
    await i18n().timon.daily.office_cook(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async office_rest() {
    await i18n().timon.daily.office_rest(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async office_game() {
    await i18n().timon.daily.office_game(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async borrow_money() {
    const money_list = [0, 1500, 5000, 10000];
    const time_list = [0, 1, 3, 6];
    const billing = sys_get_billings()[0];
    era.printInColRows(
      [{ content: i18n().timon.daily.bm_money_message, type: 'text' }],
      {
        columns: [
          i18n().ui_no,
          ...money_list.slice(1).map((m) => di18n.get_money_content(m)),
        ].map((e, i) => ({
          accelerator: i,
          config: { align: 'center', width: 6 },
          content: e,
          type: 'button',
        })),
      },
    );
    let amount = money_list[await era.input()];
    if (amount > 0) {
      era.printInColRows(
        [{ content: i18n().timon.daily.bm_time_message, type: 'text' }],
        {
          columns: [
            i18n().ui_no,
            ...time_list.slice(1).map((m) => di18n.get_multi_month(m)),
          ].map((e, i) => {
            return {
              accelerator: i,
              config: { align: 'center', width: 6 },
              content: e,
              type: 'button',
            };
          }),
        },
      );
      let time = await era.input();
      time = (time - 1) * 12 + (time === 1) * 4;
      if (time > 0) {
        let love_buff = era.get(`love:${this.id}`);
        if (love_buff > 75) {
          love_buff = (love_buff - 75) / 25;
        } else {
          love_buff = 0;
        }
        const repay = Math.ceil(
          (amount * (1 + 0.0125 * (1 - love_buff) * time)) / time,
        );
        if (
          await select_yes_or_no(
            i18n().timon.daily.get_bm_confirm_message(amount, time, repay),
          )
        ) {
          sys_change_money(amount);
          billing.creditor = this.id;
          billing.repay = -repay;
          billing.timer = time;
          await i18n().timon.daily.bm_confirm(
            get_chara_talk(this.id),
            get_chara_talk(0),
            amount,
          );
        }
      }
    }
  }

  /** @param {HookArg} hook */
  async school_atrium(hook) {
    let h;
    if ((hook.arg = (await select_action_in_atrium()) === 0)) {
      h = this.s_a_tree_hollow;
    } else {
      h = this.s_a_dating;
    }
    await h.call(this, get_chara_talk(this.id), get_chara_talk(0), hook);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async s_a_tree_hollow(chara, me, hook) {
    await (
      era.get('flag:惩戒力度') >= 2 && Math.random() < 0.5
        ? i18n().timon.pregnant_slave.s_a_tree_hollow
        : i18n().timon.daily.s_a_tree_hollow
    )(chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async s_a_dating(chara, me, hook) {
    await (
      era.get('flag:惩戒力度') >= 2 && Math.random() < 0.5
        ? i18n().timon.pregnant_slave.s_a_dating
        : i18n().timon.daily.s_a_dating
    )(chara, me);
  }

  /** @param {HookArg} hook */
  async school_rooftop(hook) {
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    if (
      // TALENTNAME:0 = 情感活动
      (era.get(`talent:${this.id}:0`) === 1 ||
        // TALENTNAME:1 = 自信程度
        era.get(`talent:${this.id}:1`) === 1) &&
      era.get(`love:${this.id}`) >= 75 &&
      // BASENAME:10 = 性欲
      Math.random() < 0.05 + era.get(`base:${this.id}:10`) / 20000
    ) {
      hook.override = true;
      // STATUSNAME:35 = 马跳Z
      era.set('status:0:35', 1);
      era.set(`status:${this.id}:35`, 1);
      if (
        (
          await print_title_with_kojo(
            i18n().timon.random_events,
            'sr_strange_lunch',
            chara,
            me,
            sys_get_colored_callname(this.id, 0),
          )
        )[0] === 1
      ) {
        await quick_into_sex(this.id);
      } else {
        sys_change_lust(this.id, 1500);
      }
      return;
    }
    if (await this.s_r_lunch(chara, me)) {
      hook.override = true;
      if (
        all_reward_in_event(this.id, {
          motivation: +(Math.random() < 0.5),
          relation: get_random_value(15, 25),
        })
      ) {
        await era.waitAnyKey();
      }
    }
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @returns {Promise<boolean|void>}
   */
  async s_r_lunch(chara, me) {
    // FLAGNAME:35 = 惩戒力度
    const is_sex = era.get('flag:35') >= 2 && Math.random() < 0.5;
    await (
      is_sex
        ? i18n().timon.pregnant_slave.school_rooftop
        : i18n().timon.daily.s_r_lunch
    )(chara, me);
    return is_sex;
  }

  /**
   * @param {HookArg} hook
   * @param {{[jpy]:number}} extra_flag
   * @returns {Promise}
   */
  async out_river(hook, extra_flag) {
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    hook.arg = (await select_action_around_river()) > 0;
    if (!hook.arg) {
      extra_flag.jpy = get_random_value(0, 5);
      await this.o_r_fishing(chara, me, hook, extra_flag);
    } else {
      if (
        era.get(`love:${this.id}`) >= 50 &&
        // TALENTNAME:0 = 情感活动
        (era.get(`talent:${this.id}:0`) === 1 ||
          // TALENTNAME:1 = 自信程度
          era.get(`talent:${this.id}:1`) === 1 ||
          // TALENTNAME:3 = 恐惧感受
          era.get(`talent:${this.id}:3`) === 1 ||
          // TALENTNAME:4 = 羞耻忍耐
          era.get(`talent:${this.id}:4`) === 1 ||
          // TALENTNAME:8 = 未来期望
          era.get(`talent:${this.id}:8`) === 1) &&
        Math.random() < era.get(`love:${this.id}`) / 2000
      ) {
        hook.override = true;
        let relation = 0;
        let love = 0;
        if (
          (
            await print_title_with_kojo(
              i18n().timon.random_events,
              'or_riverside_walk',
              chara,
              me,
            )
          )[0] === 1
        ) {
          relation = 10;
        } else {
          love = 1;
        }
        if (all_reward_in_event(this.id, { relation, love })) {
          await era.waitAnyKey();
        }
        return;
      }
      await this.o_r_walking(chara, me, hook, extra_flag);
    }
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   * @param {{[jpy]:number}} extra
   */
  async o_r_fishing(chara, me, hook, extra) {
    await i18n().timon.daily.o_r_fishing(chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async o_r_walking(chara, me) {
    await i18n().timon.daily.o_r_walking(chara, me);
  }

  /** @param {HookArg} hook */
  async out_shopping(hook) {
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const temp = await select_action_in_shopping_street();
    let h;
    switch (temp) {
      case 0:
        h = this.o_s_arcade;
        break;
      case 1:
        h = this.o_s_drawing;
        break;
      case 2:
        h = this.o_s_ktv;
        break;
      case 3:
        if (
          era.get(`love:${this.id}`) >= 70 &&
          // TALENTNAME:1 = 自信程度
          (era.get(`talent:${this.id}:1`) === 1 ||
            // TALENTNAME:3 = 恐惧感受
            era.get(`talent:${this.id}:3`) === 1 ||
            // TALENTNAME:4 = 羞耻忍耐
            era.get(`talent:${this.id}:4`) === 1 ||
            // TALENTNAME:6 = 反抗意愿
            era.get(`talent:${this.id}:6`) === -1 ||
            // TALENTNAME:7 = 坦率程度
            era.get(`talent:${this.id}:7`) === -1 ||
            // TALENTNAME:11 = 社交态度
            era.get(`talent:${this.id}:11`) === 1 ||
            // TALENTNAME:20 = 捉摸不透
            era.get(`talent:${this.id}:20`) > 0) &&
          Math.random() < era.get(`love:${this.id}`) / 2000
        ) {
          hook.override = true;
          let motivation = 0;
          let relation = 0;
          let love = 0;
          if (
            (
              await print_title_with_kojo(
                i18n().timon.random_events,
                'os_is_movie_right',
                chara,
                me,
                sys_get_colored_callname(this.id, 0),
              )
            )[0] === 1
          ) {
            motivation = 1;
            relation = 20;
          } else {
            motivation = 2;
            love = 1;
            // FLAGNAME:4 = 当前位置
            era.set('flag:4', location_enum.love_hotel);
            await quick_into_sex(this.id);
          }
          if (all_reward_in_event(this.id, { love, motivation, relation })) {
            await era.waitAnyKey();
          }
          return;
        }
        h = this.o_s_movie;
    }
    if (h) {
      await h.call(this, chara, me, hook);
    }
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async o_s_arcade(chara, me, hook) {
    await i18n().timon.daily.o_s_arcade(chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async o_s_drawing(chara, me, hook) {
    await i18n().timon.daily.o_s_drawing(chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async o_s_ktv(chara, me, hook) {
    await i18n().timon.daily.o_s_ktv(chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async o_s_movie(chara, me, hook) {
    await i18n().timon.daily.o_s_movie(chara, me);
  }

  /** @param {HookArg} hook */
  async out_church(hook) {
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    let dice = Math.random();
    // 玩家独行的情况下，大成功结果修正
    // 提高好感和性欲修正成获得马币
    if (dice < 0.05 && this.id === 0 && dice >= 0.01 && dice < 0.03) {
      dice = 0.04;
    }
    await this.o_c_pray(chara, me, dice, hook);
    if (dice < 0.05) {
      await i18n().timon.daily.oc_great_luck(chara, dice);
      if (dice < 0.0001 && era.get('flag:强奸抵抗') === 1) {
        era.set('flag:强奸抵抗', '');
      } else if (dice < 0.01) {
        const item = get_random_entry([0, 1, 2, 3, 12]);
        era.add(`item:${item}`, 1);
        await era.printAndWait(di18n.tb_item.notify(item));
      } else if (dice < 0.02) {
        sys_like_chara(this.id, 0, 20) && (await era.waitAnyKey());
      } else if (dice < 0.03 && chara.sex_code !== 1) {
        sys_change_lust(this.id, 1500);
      } else {
        era.add('flag:当前马币', 150);
      }
    }
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {number} dice
   * @param {HookArg} hook
   */
  async o_c_pray(chara, me, dice, hook) {
    await i18n().timon.daily.o_c_pray(chara, me, dice);
  }

  /** @param {HookArg} hook */
  async out_station(hook) {
    hook.arg = await select_action_in_station(this.id);
    let h;
    switch (hook.arg) {
      case 0:
        h = this.o_s_restaurant;
        break;
      case 1:
        h = this.o_s_dating;
        break;
      case 2:
        h = this.o_s_shopping;
    }
    if (h) {
      await h.call(this, get_chara_talk(this.id), get_chara_talk(0), hook);
    }
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async o_s_restaurant(chara, me, hook) {
    await i18n().timon.daily.o_s_restaurant(chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async o_s_dating(chara, me, hook) {
    await i18n().timon.daily.o_s_dating(chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async o_s_shopping(chara, me, hook) {
    await i18n().timon.daily.o_s_shopping(chara, me);
  }

  /** @param {HookArg} hook */
  async celebration(hook) {
    let h;
    switch (era.get('flag:当前回合数') % 48) {
      case 1:
        h = this.cl_new_year;
        break;
      case 6:
        h = this.cl_valentine;
        break;
      case 9:
        h = this.cl_palace;
        break;
      case 14:
        h = this.cl_fans;
        break;
      case 30:
        h = this.cl_temple_fair;
        break;
      case 40:
        h = this.cl_halloween;
        break;
      case 0:
        h = this.cl_christmas;
    }
    if (h) {
      await h.call(this, get_chara_talk(this.id), get_chara_talk(0), hook);
    }
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async cl_new_year(chara, me, hook) {
    await print_title_with_kojo(i18n().timon.daily, 'cl_new_year', chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async cl_valentine(chara, me, hook) {
    await print_title_with_kojo(i18n().timon.daily, 'cl_valentine', chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async cl_palace(chara, me) {
    await print_title_with_kojo(i18n().timon.daily, 'cl_palace', chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async cl_fans(chara, me, hook) {
    await print_title_with_kojo(i18n().timon.daily, 'cl_fans', chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async cl_temple_fair(chara, me, hook) {
    await print_title_with_kojo(
      i18n().timon.daily,
      'cl_temple_fair',
      chara,
      me,
    );
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async cl_halloween(chara, me, hook) {
    await print_title_with_kojo(i18n().timon.daily, 'cl_halloween', chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {HookArg} hook
   */
  async cl_christmas(chara, me, hook) {
    await print_title_with_kojo(i18n().timon.daily, 'cl_christmas', chara, me);
  }

  /** @param {HookArg} hook */
  async birthday(hook) {
    let h;
    if (sys_check_remote(this.id)) {
      h = this.birthday_remote;
    } else {
      h = this.birthday_normal;
    }
    await h.call(this, get_chara_talk(this.id), get_chara_talk(0));
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async birthday_remote(chara, me) {
    await i18n().timon.daily.birthday_remote(chara, me);
  }

  /**
   * @protected
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  async birthday_normal(chara, me) {
    await i18n().timon.daily.birthday_normal(chara, me);
  }

  async load_talk() {
    await i18n().timon.daily.load_talk(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  /** @param {boolean} hentai */
  async end_talk(hentai) {}

  async slave_end() {
    await print_title_with_kojo.ending(
      i18n().timon.ending,
      'slave_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async basement_end() {
    await print_title_with_kojo.ending(
      i18n().timon.ending,
      'basement_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async week_start(hook, extra_flag, event_object) {}

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async week_end(hook, extra_flag, event_object) {}

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async run(hook, extra_flag, event_object) {
    if (this[event_hooks.keys[hook.hook]] !== undefined) {
      return await this[event_hooks.keys[hook.hook]].call(
        this,
        hook,
        extra_flag,
        event_object,
      );
    }
  }
}

module.exports = CustomizedDaily;
