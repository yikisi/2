const CustomizedEro = require('#/event/ero/ero-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  get #kojo() {
    return i18n().kojo[this.id].ero;
  }

  async ero_start(h) {
    await this.#kojo['ero_start'](
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }
};
