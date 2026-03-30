const { get } = require('#/era-electron');

const LoveGod = require('#/event/love/love-god');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { get_skin } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends LoveGod {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(god) {
    await print_title_with_kojo(
      this.#kojo,
      '49',
      god,
      generate_dictionary.generate_common_dict(),
    );
    await super[49]();
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  async 50(god, me) {
    await this.handle50(
      god,
      me,
      (
        await print_title_with_kojo(this.#kojo, '50', god, {
          _g: true,
          FUCKMEBUTTON:
            get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo > 0
              ? i18n().timon.bt_god_love_event_preg_me
              : i18n().timon.bt_god_love_event_fuck_me,
          YOU: me.name,
          YOURPHY: me.phy_sex_title,
          YOURSEX: me.sex,
          YOURSKIN: get_skin(0),
        })
      )['selected'],
    );
  }

  async after_sex_50() {
    await i18n().kojo[this.id].love.after_sex_50();
  }
};
