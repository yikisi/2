const CustomizedEdu = require('#/event/edu/edu-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const SkyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-20');
const event_hooks = require('#/data/event/event-hooks');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return generate_dictionary(this.id);
  }

  get #marks() {
    return new SkyEduMarks();
  }

  async train(attr) {
    this.#marks.action = event_hooks.train;
    return await super.train(attr);
  }

  async train_success_add(sky, me, callname, hook, extra) {
    return (
      (
        await print_title_with_kojo(this.#kojo, 'ts_add', sky, this.#dict)
      )[0] === 1
    );
  }

  async race_start(sky, me, callname, hook, extra) {
    let key;
    const dict = this.#dict;
    if (!key) {
      key = 'race_start';
    }
    await print_title_with_kojo(this.#kojo, key, sky, dict);
  }

  async race_end(sky, me, callname, hook, extra) {
    let key;
    const dict = this.#dict;
    if (!key) {
      if (extra.rank === 1) {
        key = 'race_end_win';
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else {
        key = 'race_end_lose';
      }
    }
    await print_title_with_kojo(this.#kojo, key, sky, dict);
  }
};
