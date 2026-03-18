const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CustomizedEvent = require('#/event/event-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const event_hooks = require('#/data/event/event-hooks');

const { i18n } = require('#/i18n/selector');

class CustomizedLove extends CustomizedEvent {
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 49(chara, me, callname, stage, extra_flag, event_object) {
    await print_title_with_kojo(i18n().timon.love, '49', chara, me);
    await sys_love_uma_in_event(this.id);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 74(chara, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      if (
        (
          await print_title_with_kojo(i18n().timon.love, '74-1', chara, me)
        )[0] === 1
      ) {
        add_event(event_hooks.back_school, event_object);
      } else {
        // CFLAGNAME:46 = 爱慕暂拒
        era.set(`cflag:${this.id}:46`, 74);
      }
    } else if (stage === event_hooks.back_school) {
      // FLAGNAME:5 = 当前互动角色
      const cur_chara = era.get('flag:5');
      if (cur_chara && cur_chara !== this.id) {
        add_event(event_hooks.back_school, event_object);
        return;
      }
      if (
        (
          await print_title_with_kojo(i18n().timon.love, '74-2', chara, me)
        )[0] === 1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        era.set(`cflag:${this.id}:46`, 74);
        await punish_rejecting_love(this.id);
      }
      era.set('flag:5', this.id);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 89(chara, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_title_with_kojo(i18n().timon.love, '89-1', chara, me);
      add_event(event_hooks.week_start, event_object);
    } else if (stage === event_hooks.week_start) {
      if (era.get(`cflag:${this.id}:位置`) !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
        return;
      }
      if (
        (
          await print_title_with_kojo(i18n().timon.love, '89-2', chara, me)
        )[0] === 1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        era.set(`cflag:${this.id}:46`, 89);
        await punish_rejecting_love(this.id);
      }
      era.set('flag:5', this.id);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 99(chara, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_title_with_kojo(i18n().timon.love, '99-1', chara, me);
      add_event(event_hooks.week_start, event_object);
      await sys_love_uma_in_event(this.id);
    } else if (stage === event_hooks.week_start) {
      if (era.get(`cflag:${this.id}:位置`) !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
        return;
      }
      await print_title_with_kojo(i18n().timon.love, '99-2', chara, me);
      era.set('flag:5', this.id);
      era.println();
      add_jewel_reward(this.id, 10, 300);
      await era.waitAnyKey();
    }
  }

  /** @protected */
  async common_result() {
    // FLAGNAME:113 = 回合爱慕惩罚
    if (!era.get('flag:113')) {
      const love = era.get(`love:${this.id}`);
      if (love >= 74) {
        era.printButton(i18n().timon.love.update_yes, 1);
        era.printButton(i18n().timon.love.update_no, 2);
        if ((await era.input()) === 2) {
          era.set(`cflag:${this.id}:46`, love);
          await punish_rejecting_love(this.id);
          return;
        }
      }
      await sys_love_uma_in_event(this.id);
    }
  }

  /**
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async run(stage, extra_flag, event_object) {
    let handler =
      this[
        Array.isArray(event_object.arg) ? event_object.arg[0] : event_object.arg
      ];
    if (handler !== undefined) {
      return await handler.call(
        this,
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_callname(this.id, 0),
        stage,
        extra_flag,
        event_object,
      );
    }
  }
}

module.exports = CustomizedLove;
