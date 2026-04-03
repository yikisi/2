const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 24(maya, me, callname) {
    await this.#kojo[24](maya, callname);
  }

  async 49(maya, me, callname) {
    await this.#kojo[49](maya, callname);
    await sys_love_uma_in_event(24);
  }

  async 74(maya, me, callname) {
    if (
      (await this.#kojo[74](
        maya,
        get_chara_talk(17),
        get_chara_talk(18),
        me,
        callname,
        sys_get_colored_callname(18, 0),
        sys_get_colored_callname(this.id, 5),
        sys_get_colored_callname(this.id, 18),
      )) === 1
    ) {
      await sys_love_uma_in_event(24);
    } else {
      era.set('cflag:24:爱慕暂拒', 74);
    }
  }

  async 89(maya, me, callname) {
    if (
      (await this.#kojo[89](
        maya,
        get_chara_talk(30),
        me,
        callname,
        sys_get_colored_callname(this.id, 30),
        sys_get_callname(30, 30),
        sys_get_colored_callname(30, this.id),
      )) === 1
    ) {
      await sys_love_uma_in_event(24);
    } else {
      era.set('cflag:24:爱慕暂拒', 89);
      await punish_rejecting_love(24);
    }
  }
};
