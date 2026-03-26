const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const { get_date_obj } = require('#/data/date-indicator');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedBase {
  get #kojo() {
    return i18n().kojo[this.id].basement;
  }

  async ask_release_agree() {
    await this.#kojo.ask_release_agree(
      get_chara_talk(this.id),
      get_chara_talk(this.id, chara_colors[1]),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async ask_release_reject() {
    await this.#kojo.ask_release_reject(
      get_chara_talk(this.id, chara_colors[1]),
      get_chara_talk(0),
    );
  }

  async ask_time(date, hours, minutes) {
    await this.#kojo.ask_time(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
      CustomizedBase.get_cur_time(hours, minutes),
    );
  }

  back_basement() {
    if (!LifeEventMarks.get_marks(this.id).b_start) {
      return super.back_basement();
    }
    this.#kojo.back_basement(
      get_chara_talk(this.id),
      get_chara_talk(this.id, chara_colors[1]),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async battle_escape() {
    await this.#kojo.battle_escape(
      get_chara_talk(this.id),
      get_chara_talk(this.id, chara_colors[1]),
      get_chara_talk(0),
    );
  }

  async battle_prison() {
    await this.#kojo.battle_prison(
      get_chara_talk(this.id),
      get_chara_talk(this.id, chara_colors[1]),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    this.#kojo.find_escape(
      get_chara_talk(this.id),
      get_chara_talk(this.id, chara_colors[1]),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      is_back,
    );
  }

  async flatter(sup) {
    era.println();
    await this.#kojo.flatter(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  get_up() {
    if (!LifeEventMarks.get_marks(this.id).b_start) {
      return super.get_up();
    }
    this.#kojo.get_up(
      get_chara_talk(this.id),
      get_chara_talk(this.id, chara_colors[1]),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
    update_kiss_exp(get_date_obj(), this.id, 0);
  }

  async strike_fail() {
    await this.#kojo.strike_fail(
      get_chara_talk(this.id, chara_colors[1]),
      get_chara_talk(0),
    );
  }

  async strike_success() {
    await this.#kojo.strike_success(
      get_chara_talk(this.id, chara_colors[1]),
      get_chara_talk(0),
    );
  }

  welcome() {
    if (era.get('exp:52:监禁次数') > 1) {
      this.#kojo.welcome(
        get_chara_talk(this.id),
        get_chara_talk(this.id, chara_colors[1]),
        get_chara_talk(0),
        sys_get_colored_callname(this.id, 0),
      );
    }
  }
};
