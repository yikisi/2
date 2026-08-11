const CustomizedDaily = require('#/event/daily/daily-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
// const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const event_hooks = require('#/data/event/event-hooks');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return { ...generate_dictionary(this.id, { call: !0 }), eh: event_hooks };
  }

  good_morning() {
    this.#kojo['good_morning'](this.#dict);
  }

  select() {
    this.#kojo['select'](this.#dict);
  }
};
