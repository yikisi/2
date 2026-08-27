const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { lust_border } = require('#/data/ero/orgasm-const');
const event_hooks = require('#/data/event/event-hooks');
const yandere_list = require('#/data/event/yandere-list');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(gold_ship, me, callname) {
    if (
      (
        await print_title_with_kojo(this.#kojo, '49', gold_ship, me, callname)
      )[0] === 1
    ) {
      await sys_love_uma_in_event(7);
    } else {
      era.set('cflag:7:爱慕暂拒', 49);
    }
  }

  async 74(gold_ship, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '74-1',
            gold_ship,
            me,
            callname,
          )
        )[0] === 1
      ) {
        add_event(event_hooks.week_start, event_object);
      } else {
        era.set('cflag:7:爱慕暂拒', 74);
      }
    } else if (stage === event_hooks.week_start) {
      if (
        era.get(`cflag:${this.id}:位置`) !== era.get('cflag:0:位置') ||
        era.get('cflag:0:位置') > 0
      ) {
        add_event(stage, event_object);
        return;
      }
      await print_title_with_kojo(
        this.#kojo,
        '74-2-start',
        gold_ship,
        me,
        callname,
      );
      await quick_into_sex(this.id, this.id, true);
      const ret = await this.#kojo['74-2-end'](gold_ship, me, callname);
      if (ret[0] === 1) {
        era.println();
        if (ret[1] === 1) {
          add_jewel_reward(7, 10, 100);
        } else {
          add_jewel_reward(7, 7, 100);
        }
        await sys_love_uma_in_event(7);
        era.set('flag:当前互动角色', 7);
        add_event(
          event_hooks.back_school,
          event_object.set_arg('golden_ship_attack'),
        );
      } else {
        era.set('cflag:7:爱慕暂拒', 74);
        await punish_rejecting_love(7);
      }
    }
  }

  /**
   * @param {CharaTalk} gold_ship
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async golden_ship_attack(gold_ship, me, callname) {
    const ret = await print_title_with_kojo(
      this.#kojo,
      'golden_ship_attack',
      gold_ship,
      me,
      callname,
    );
    all_reward_in_event(this.id, {
      attr: [
        30 - ret[2] * 20 + 30 - ret[3] * 20,
        30 - ret[0] * 20 + 30 - ret[1] * 20,
        ret[2] * 20 - 30 + ret[3] * 20 - 30,
        0,
        ret[0] * 20 - 30 + ret[1] * 20 - 30,
      ],
      skills: [201151],
      motivation: ret[4] === 3 ? 3 : -3,
    });
    if (ret[3] === 1) {
      era.set('talent:7:喜欢责骂', 1);
      era.set('talent:7:喜欢痛苦', 1);
    } else {
      era.set('talent:7:抖S', 1);
    }
    if (ret[4] !== 3) {
      yandere_list.push(7);
    }
    if (ret[1] === 2) {
      era.set(
        'base:7:性欲',
        Math.max(lust_border.want_sex, era.get('base:7:性欲')),
      );
    }
    await era.waitAnyKey();
    return true;
  }
};
