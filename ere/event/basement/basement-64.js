const CustomizedBase = require('#/event/basement/basement-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedBase {
  get #kojo() {
    return i18n().kojo[this.id].basement;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async ask_time() {
    await this.#kojo['ask_time'](this.#dict);
  }

  async ask_release_agree() {
    await this.#kojo['ask_release_agree'](this.#dict);
  }

  async ask_release_reject() {
    await this.#kojo['ask_release_reject'](this.#dict);
  }

  back_basement() {
    this.#kojo['back_basement']({
      ...this.#dict,
      start: LifeEventMarks.get_marks(this.id).b_start,
    });
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

  get_basement_info(can_strike) {
    if (can_strike) {
      return super.get_basement_info(can_strike);
    }
    return i18n().kojo[this.id].get_basement_info(
      get_chara_talk(this.id),
      get_chara_talk(0),
      LifeEventMarks.get_marks(this.id).b_s_level,
    );
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    if (!is_back) {
      return super.find_escape(out_of_prison, s_level_up, is_back);
    }
    this.#kojo['find_escape'](this.#dict);
  }

  async flatter() {
    await this.#kojo['flatter'](this.#dict);
  }

  start_fixing() {
    this.#kojo['start_fixing'](this.#dict);
  }

  welcome() {
    this.#kojo['welcome'](this.#dict);
  }
};
