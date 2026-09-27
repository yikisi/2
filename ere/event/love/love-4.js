const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const { add_event } = require('#/event/queue');

const { get_date_obj } = require('#/data/date-indicator');
const event_hooks = require('#/data/event/event-hooks');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(zensky, me, callname, stage, extra, ebj) {
    await this.#kojo[49](
      zensky,
      me,
      callname,
      sys_get_colored_callname(this.id, 24),
      sys_get_colored_callname(this.id, 301),
      sys_get_callname(0, this.id),
    );
    await sys_love_uma_in_event(this.id);
  }

  async 74(zensky, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await this.#kojo['74-1'](
        zensky,
        me,
        callname,
        sys_get_colored_callname(this.id, 301),
      );
      await sys_love_uma_in_event(4);
      add_event(event_hooks.back_school, event_object);
    } else if (stage === event_hooks.back_school) {
      if (
        (await this.#kojo['74-2'](
          zensky,
          me,
          callname,
          sys_get_colored_callname(0, this.id),
        )) === 1
      ) {
        update_kiss_exp(get_date_obj(), 0, this.id);
        await sys_love_uma_in_event(this.id);
      } else {
        era.set('cflag:4:爱慕暂拒', 74);
      }
    }
  }

  async 89(zensky, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await this.#kojo['89-1'](
        zensky,
        me,
        callname,
        sys_get_colored_callname(this.id, 301),
      );
      add_event(event_hooks.week_start, event_object);
    } else if (stage === event_hooks.week_start) {
      if (
        (await this.#kojo['89-2'](
          zensky,
          me,
          callname,
          sys_get_colored_callname(0, this.id),
        )) === 1
      ) {
        era.set('cflag:4:爱慕暂拒', 89);
      } else {
        await sys_love_uma_in_event(this.id);
      }
    }
  }

  async 99(zensky, me, callname) {
    await this.#kojo['99'](zensky, me, callname, sys_get_callname(0, this.id));
    await sys_love_uma_in_event(4);
  }
};
