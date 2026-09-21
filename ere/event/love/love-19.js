const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const AgLifeMarks = require('#/data/event/life-event-marks/life-event-marks-19');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(digital, me, callname) {
    await print_title_with_kojo(
      this.#kojo,
      '49',
      digital,
      get_chara_talk(32),
      me,
      callname,
      sys_get_colored_callname(this.id, 32),
      sys_get_colored_callname(32, this.id),
    );
    await sys_love_uma_in_event(this.id);
  }

  async 74(digital, me, callname) {
    const life_marks = new AgLifeMarks();
    if (life_marks.again_74) {
      if (
        (
          await print_title_with_kojo(this.#kojo, '74-after', digital, me)
        )[0] === 1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        era.set('cflag:19:爱慕暂拒', 74);
        await punish_rejecting_love(this.id);
      }
    } else {
      life_marks.again_74 = 1;
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '74-first',
            digital,
            me,
            callname,
          )
        )[0] === 1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        era.set('cflag:19:爱慕暂拒', 74);
        await punish_rejecting_love(this.id);
      }
    }
  }

  async 89(digital, me, callname) {
    const life_marks = new AgLifeMarks();
    const child =
      digital.sex_code === 1 ? i18n().name.son : i18n().name.daughter;
    const parent = digital.sex_code === 1 ? i18n().name.mom : i18n().name.dad;
    if (life_marks.again_89) {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '89-after',
            digital,
            me,
            callname,
            child,
          )
        )[0] === 1
      ) {
        await sys_love_uma_in_event(19);
      } else {
        era.set('cflag:19:爱慕暂拒', 89);
        await punish_rejecting_love(19);
      }
    } else {
      life_marks.again_89 = 1;
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '89-first',
            digital,
            get_chara_talk(13),
            get_chara_talk(25),
            get_chara_talk(32),
            get_chara_talk(89),
            get_chara_talk(99),
            me,
            callname,
            sys_get_colored_callname(0, this.id),
            child,
            parent,
          )
        )[0] === 1
      ) {
        await sys_love_uma_in_event(19);
      } else {
        await punish_rejecting_love(19);
        era.set('cflag:19:爱慕暂拒', 89);
      }
    }
  }

  async 99(digital, me, callname) {
    await print_title_with_kojo(
      this.#kojo,
      '99',
      digital,
      me,
      callname,
      sys_get_colored_callname(0, this.id),
      digital.sex_code === 1 ? i18n().name.son : i18n().name.daughter,
    );
    await sys_love_uma_in_event(this.id);
    await quick_into_sex(this.id);
  }

  async oshi(digital, me, callname) {
    await print_title_with_kojo(
      this.#kojo,
      'oshi',
      digital,
      get_chara_talk(3),
      get_chara_talk(13),
      get_chara_talk(15),
      get_chara_talk(58),
      get_chara_talk(64),
      get_chara_talk(65),
      get_chara_talk(302),
      me,
      callname,
      sys_get_colored_callname(0, this.id),
    );
  }

  async shine(digital, me, callname) {
    await print_title_with_kojo(this.#kojo, 'shine', digital, me, callname);
  }

  async univ(digital, me, callname) {
    await print_title_with_kojo(
      this.#kojo,
      'univ',
      digital,
      me,
      callname,
      sys_get_callname(this.id, this.id),
      sys_get_colored_callname(this.id, 52),
    );
  }
};
