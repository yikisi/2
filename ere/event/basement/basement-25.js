const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { lust_border } = require('#/data/ero/orgasm-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const CoffeeLifeMarks = require('#/data/event/life-event-marks/life-event-marks-25');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedBase {
  get #kojo() {
    return i18n().kojo[this.id].basement;
  }

  async ask_release_agree() {
    await this.#kojo.ask_release_agree(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async ask_release_reject() {
    const life_marks = new CoffeeLifeMarks();
    await this.#kojo.ask_release_reject(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      !life_marks.ask_release_reject,
    );
    life_marks.ask_release_reject = 1;
  }

  async ask_time(date, hours, minutes) {
    await this.#kojo.ask_time(
      get_chara_talk(this.id),
      CustomizedBase.get_cur_time(hours, minutes),
    );
  }

  async battle_escape() {
    await this.#kojo.battle_escape(get_chara_talk(0));
  }

  async battle_fail() {
    await this.#kojo.battle_fail(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async battle_prison() {
    await this.#kojo.battle_prison(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
    if (era.get('base:25:性欲') < lust_border.absent_mind) {
      era.add(
        'base:25:性欲',
        lust_border.absent_mind - era.get('base:25:性欲'),
      );
    }
  }

  async battle_success() {
    await this.#kojo.battle_success(get_chara_talk(this.id), get_chara_talk(0));
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    this.#kojo.find_escape(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      is_back,
    );
  }

  async flatter(sup) {
    await this.#kojo.flatter(get_chara_talk(this.id), get_chara_talk(0));
  }

  async rescue_battle_success(owner_id) {
    if (owner_id !== 32 || !new TachyonEduMarks().plan_b) {
      return super.rescue_battle_success(owner_id);
    }
    await this.#kojo.rescue_from_tachyon(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 32),
    );
  }

  async strike_fail() {
    await this.#kojo.strike_fail(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async strike_success() {
    await this.#kojo.strike_success(get_chara_talk(this.id), get_chara_talk(0));
  }

  welcome() {
    this.#kojo.welcome(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }
};
