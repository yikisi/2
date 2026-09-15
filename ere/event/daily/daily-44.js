const CustomizedDaily = require('#/event/daily/daily-common');
const {
  fill_moho_in_dict,
  reset_no_action,
} = require('#/event/snippets/104400');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const event_hooks = require('#/data/event/event-hooks');
const SweepLifeMarks = require('#/data/event/life-event-marks/life-event-marks-44');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return fill_moho_in_dict(
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }

  async good_night_sex(sweep, me, check) {
    return (await this.#kojo['good_night_sex'](this.#dict))['sex'] === 1;
  }

  async week_end(hook, extra, ebj) {
    if (ebj?.arg === 'no_action_check') {
      const life_marks = new SweepLifeMarks();
      if (!life_marks.no_action) {
        await this.#kojo['ws_no_action_2_weeks'](this.#dict);
        life_marks.no_action = 2;
      }
    }
  }

  async end_talk(hentai) {
    await this.#kojo['end_talk']({ hentai, ...this.#dict });
  }

  async run(hook, extra, ebj) {
    if (
      hook.hook !== event_hooks.week_start &&
      hook.hook !== event_hooks.week_end &&
      hook.hook !== event_hooks.select &&
      hook.hook !== event_hooks.good_morning &&
      hook.hook !== event_hooks.good_night
    ) {
      reset_no_action();
    }
    return super.run(hook, extra, ebj);
  }
};
