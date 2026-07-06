const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEro = require('#/event/ero/ero-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} lover
 * @returns {boolean}
 */
function check_mejiro(lover) {
  return (
    lover === 13 ||
    lover === 27 ||
    lover === 59 ||
    lover === 64 ||
    lover === 71 ||
    lover === 86
  );
}

module.exports = class extends CustomizedEro {
  static CHECK = false;

  get #kojo() {
    return i18n().kojo[this.id].ero;
  }

  async join_3p(lover) {
    if (check_mejiro(lover)) {
      return (
        (
          await this.#kojo['join_3p']({
            CALL_LOVER: sys_get_callname(this.id, lover),
            LOVER: get_chara_talk(lover).name,
            ...generate_dictionary(this.id, { call: !0 }),
          })
        )['accept'] === 1
      );
    }
    return await super.join_3p(lover);
  }

  async join_3p_accept(lover) {
    if (check_mejiro(lover)) {
      const lover_talk = get_chara_talk(lover);
      return this.#kojo['join_3p_accept']({
        L_COLOR: lover_talk.color,
        LOVER: lover_talk.name,
        ...generate_dictionary(this.id),
      });
    }
    await super.join_3p_accept(lover);
  }

  async join_3p_force(lover) {
    if (check_mejiro(lover)) {
      const lover_talk = get_chara_talk(lover);
      return this.#kojo['join_3p_force']({
        LOVER: lover_talk.name,
        L_CALLNAME: sys_get_callname(lover, 0),
        L_COLOR: lover_talk.color,
        ...generate_dictionary(this.id),
      });
    }
    await super.join_3p_force(lover);
  }

  async join_3p_reject(lover) {
    if (check_mejiro(lover)) {
      const lover_talk = get_chara_talk(lover);
      return this.#kojo['join_3p_reject']({
        LOVER: lover_talk.name,
        L_COLOR: lover_talk.color,
        ...generate_dictionary(this.id),
      });
    }
    await super.join_3p_reject(lover);
  }
};
