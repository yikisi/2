const era = require('#/era-electron');

const CustomizedDaily = require('#/event/daily/daily-common');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const TaishinEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-50');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  good_morning() {
    const edu_marks = new TaishinEduMarks();
    if (edu_marks.after_recruit > 0) {
      edu_marks.after_recruit = 0;
      this.#kojo.select_after_recruit(this.#dict);
    } else {
      super.good_morning();
    }
  }

  select() {
    const edu_marks = new TaishinEduMarks();
    if (edu_marks.after_recruit > 0) {
      edu_marks.after_recruit = 0;
      this.#kojo.select_after_recruit(this.#dict);
    } else {
      super.select();
    }
  }

  async office_study() {
    await this.#kojo.office_study(this.#dict);
  }

  async office_prepare() {
    await this.#kojo.office_prepare(this.#dict);
  }

  async talk() {
    await this.#kojo.talk(this.#dict);
  }

  async office_rest() {
    await this.#kojo.office_rest(this.#dict);
  }

  async office_game() {
    await this.#kojo.office_game(this.#dict);
  }

  async s_a_tree_hollow(taishin, me, hook) {
    await this.#kojo.s_a_tree_hollow(this.#dict);
  }

  async s_a_dating(taishin, me, hook) {
    await this.#kojo.s_a_dating(this.#dict);
  }

  async school_rooftop(hook) {
    await this.#kojo.school_rooftop(this.#dict);
  }

  async o_r_fishing(taishin, me, hook, extra) {
    await this.#kojo.o_r_fishing(this.#dict);
  }

  async o_r_walking(taishin, me) {
    await this.#kojo.o_r_walking(this.#dict);
  }

  async o_s_arcade(taishin, me, hook) {
    await this.#kojo.o_s_arcade(this.#dict);
  }

  async o_s_drawing(taishin, me, hook) {
    hook.override = true;
    const edu_marks = new TaishinEduMarks();
    let wait = false;
    let dice = Math.random();
    if (dice < 0.05 && !edu_marks.hot_spring) {
      dice = 0;
      edu_marks.hot_spring = 1;
    } else if (dice < 0.1) {
      dice = 1;
    } else if (dice < 0.25) {
      dice = 2;
    } else if (dice < 0.6) {
      dice = 3;
    } else {
      dice = 4;
    }
    await this.#kojo.o_s_drawing({ ...this.#dict, dice });
    switch (dice) {
      case 0:
        wait = all_reward_in_event(this.id, {
          motivation: 2,
          love: 5,
          relation: 50,
        });
        break;
      case 1:
        wait = all_reward_in_event(this.id, { base: [200], motivation: 1 });
        wait = all_reward_in_event(0, { base: [200] }) || wait;
        break;
      case 2:
        wait = all_reward_in_event(this.id, { base: [100], motivation: 1 });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { base: [100] });
        break;
      case 4:
        wait = all_reward_in_event(this.id, { motivation: -1 });
    }
    wait && (await era.waitAnyKey());
  }

  async o_s_ktv(taishin, me, hook) {
    await this.#kojo.o_s_ktv(this.#dict);
  }

  async o_s_movie(taishin, me, hook) {
    await this.#kojo.o_s_movie(
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }

  async o_s_restaurant(taishin, me, hook) {
    if (era.get(`love:${this.id}`) >= 50) {
      await this.#kojo.o_s_restaurant(this.#dict);
    } else {
      await super.o_s_restaurant(taishin, me, hook);
    }
  }
};
