const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

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
    await this.#kojo.ask_release_reject(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  back_basement() {
    if (new TachyonEduMarks().plan_b || !new TachyonLifeMarks().b_start) {
      return super.back_basement();
    }
    this.welcome();
  }

  async battle_prison() {
    await this.#kojo.battle_prison(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  find_escape() {
    this.#kojo.find_escape(get_chara_talk(this.id), get_chara_talk(0));
  }

  get_up() {
    if (new TachyonEduMarks().plan_b || !new TachyonLifeMarks().b_start) {
      return super.get_up();
    }
    this.welcome();
  }

  async strike_fail() {
    await this.#kojo.strike_fail(get_chara_talk(this.id));
  }

  async strike_success() {
    await this.#kojo.strike_success(get_chara_talk(this.id), get_chara_talk(0));
  }

  welcome() {
    if (new TachyonEduMarks().plan_b) {
      return super.welcome();
    }
    this.#kojo.welcome(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }
};
