const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedBase {
  get #kojo() {
    return i18n().kojo[this.id].basement;
  }

  async ask_release_agree() {
    await this.#kojo.ask_release_agree(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async ask_release_reject() {
    await this.#kojo.ask_release_reject(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async ask_time(date, hours, minutes) {
    await this.#kojo.ask_time(
      get_chara_talk(this.id),
      get_chara_talk(0),
      CustomizedBase.get_cur_time(hours, minutes, true),
      LifeEventMarks.get_marks(this.id).b_s_level,
    );
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    if (is_back) {
      this.#kojo.find_escape(get_chara_talk(this.id), get_chara_talk(0));
    } else {
      super.find_escape(out_of_prison, s_level_up, is_back);
    }
  }
};
