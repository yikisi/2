const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_date_obj } = require('#/data/date-indicator');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedBase {
  get #kojo() {
    return i18n().kojo[this.id].basement;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  welcome() {
    this.#kojo['welcome'](this.#dict);
  }

  async flatter(supporter) {
    await this.#kojo['flatter']({
      ...this.#dict,
      Y_CALL_119: sys_get_callname(0, this.id),
    });
  }

  async strike_success() {
    await this.#kojo['strike_success'](
      generate_dictionary(this.id, { uma: !0 }),
    );
  }

  async strike_fail() {
    await this.#kojo['strike_fail'](this.#dict);
  }

  async battle_success() {}

  async battle_escape() {
    await this.#kojo['battle_escape'](generate_dictionary(this.id));
  }

  async battle_prison() {
    await this.#kojo['battle_prison'](this.#dict);
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    if (!out_of_prison) {
      this.#kojo['find_escape']({ ...this.#dict, is_back });
    } else {
      super.find_escape(out_of_prison, s_level_up, is_back);
    }
  }

  get_up() {
    this.#kojo['get_up']({
      ...this.#dict,
      b_start: LifeEventMarks.get_marks(this.id).b_start,
    });
  }

  back_basement() {
    const life_marks = LifeEventMarks.get_marks(this.id);
    this.#kojo['back_basement']({
      ...this.#dict,
      b_start: life_marks.b_start,
    });
    if (life_marks.b_start) {
      update_kiss_exp(get_date_obj(), this.id, 0);
    }
  }

  start_fixing() {
    this.#kojo['start_fixing'](this.#dict);
  }

  out() {
    this.#kojo['out'](this.#dict);
  }

  async ask_release_agree() {
    await this.#kojo['ask_release_agree'](this.#dict);
  }

  async ask_release_reject() {
    await this.#kojo['ask_release_reject'](generate_dictionary(this.id));
  }

  async ask_time() {
    await this.#kojo['ask_time'](this.#dict);
  }
};
