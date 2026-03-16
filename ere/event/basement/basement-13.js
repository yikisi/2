const CustomizedBase = require('#/event/basement/basement-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedBase {
  get #kojo() {
    return i18n().kojo[this.id].basement;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async ask_release_agree() {
    await this.#kojo['ask_release_agree'](this.#dict);
  }

  async ask_release_reject() {
    await this.#kojo['ask_release_reject'](this.#dict);
  }

  async ask_time() {
    await this.#kojo['ask_time'](this.#dict);
  }

  back_basement() {
    this.#kojo['back_basement'](this.#dict);
  }

  async battle_escape() {
    await this.#kojo['battle_escape'](this.#dict);
  }

  async battle_fail() {
    await this.#kojo['battle_fail'](this.#dict);
  }

  async battle_prison() {
    await this.#kojo['battle_prison'](this.#dict);
  }

  async battle_success() {
    await this.#kojo['battle_success'](this.#dict);
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    if (!out_of_prison || !is_back) {
      return super.find_escape(out_of_prison, s_level_up, is_back);
    }
    this.#kojo['find_escape'](this.#dict);
  }

  out() {
    this.#kojo['out'](this.#dict);
  }

  async strike_success() {
    await this.#kojo['battle_success'](this.#dict);
  }

  welcome() {
    this.#kojo['welcome'](
      generate_dictionary(this.id, {
        call: !0,
        uma: !0,
      }),
    );
  }
};
