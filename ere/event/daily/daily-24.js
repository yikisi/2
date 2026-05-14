const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const CustomizedDaily = require('#/event/daily/daily-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 3),
    );
  }

  async talk() {
    if (
      !(
        sys_check_awake(this.id) &&
        era.get(`cflag:${this.id}:育成回合计时`) < 3 * 48
      )
    ) {
      return await super.talk();
    }
    await this.#kojo.talk(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async s_a_tree_hollow(maya, me, hook) {
    await this.#kojo.s_a_tree_hollow(maya);
  }

  async s_a_dating(maya, me, hook) {
    await this.#kojo.s_a_dating(maya, sys_get_colored_callname(this.id, 0));
  }

  async s_r_lunch(hook) {
    await this.#kojo.s_r_lunch(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async out_river(hook, extra) {
    hook.override = true;
    let fish_success = void 0;
    if (Math.random() * 3 < 1) {
      fish_success = Math.random() < 0.5;
    }
    await this.#kojo.out_river(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      fish_success,
    );
    let relation;
    if (fish_success === void 0) {
      relation = get_random_value(10, 20);
    } else if (fish_success) {
      relation = get_random_value(20, 30);
    } else {
      relation = get_random_value(5, 10);
    }
    if (all_reward_in_event(this.id, { motivation: 1, relation })) {
      await era.waitAnyKey();
    }
  }

  async out_church(hook) {
    hook.override = true;
    const result = get_random_value(0, 2);
    const rm_debuff = era.get('status:24:练习X手') < 0 && Math.random() < 0.8;
    await this.#kojo.out_church(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
      result,
      rm_debuff,
    );
    let relation = 0;
    switch (result) {
      case 0:
        relation = get_random_value(5, 10);
        break;
      case 1:
        relation = get_random_value(10, 20);
        break;
      case 2:
        relation = get_random_value(20, 30);
    }
    if (all_reward_in_event(this.id, { motivation: 1, relation })) {
      await era.waitAnyKey();
    }
  }

  async out_shopping(hook) {
    hook.override = true;
    sys_change_money(-5);
    const ret = await this.#kojo.out_shopping(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
    let motivation = 0;
    let relation = 0;
    switch (ret[0]) {
      case 1:
        motivation = 2;
        relation = get_random_value(0, 10);
        break;
      case 2:
        switch (ret[1]) {
          case 0:
            motivation = 1;
            relation = get_random_value(0, 10);
            break;
          case 1:
            motivation = 1;
            relation = get_random_value(10, 20);
            sys_change_money(5);
            break;
          case 2:
            motivation = 2;
            get_random_value(20, 30);
            sys_change_money(5);
        }
        break;
      case 3:
        motivation = 1;
        relation = get_random_value(10, 20);
    }
    if (all_reward_in_event(this.id, { motivation, relation })) {
      await era.waitAnyKey();
    }
  }

  async out_station(hook) {
    hook.override = true;
    sys_change_money(-5);
    const ret = await this.#kojo.out_station(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
    let wait = false;
    switch (ret) {
      case 1:
        wait = all_reward_in_event(this.id, {
          base: [get_random_value(0, 50)], //角色体力加0-50
          relation: get_random_value(0, 10), //好感上升随机0-10
        });
        break;
      case 2:
        wait = sys_like_chara(this.id, 0, get_random_value(20, 30));
        break;
      case 3:
        wait = all_reward_in_event(this.id, {
          base: [get_random_value(0, 50)], // 角色体力加0-50
          relation: get_random_value(0, 10), // 好感上升随机0-10
        });
        wait =
          all_reward_in_event(0, {
            base: [get_random_value(0, 30)], // 玩家体力随机回复0-30
          }) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
  }
};
