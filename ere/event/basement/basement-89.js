const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedBase = require('#/event/basement/basement-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const basement_owners = require('#/data/event/basement-owners');
const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedBase {
  get #kojo() {
    return i18n().kojo[this.id].basement;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0 });
  }

  async ask_release_agree() {
    const another = basement_owners.get().filter((e) => e !== 89)[0] ?? 0;
    if (
      era.get('exp:89:监禁次数') === 1 &&
      !new GrandLifeMarks().b_find_escape
    ) {
      await this.#kojo['ask_release_agree_first']({
        ...generate_dictionary(this.id, { call: !0, child: !0, teen: !0 }),
        another,
        leave_together:
          era.get('relation:89:0') >= 200 &&
          new GrandLifeMarks().b_flatter >= 3,
        CALL_89: sys_get_callname(this.id, 89),
      });
    } else {
      await this.#kojo['ask_release_agree'](
        generate_dictionary(this.id, { call: !0, teen: !0 }),
      );
    }
  }

  async ask_release_reject() {
    const life_marks = new GrandLifeMarks();
    if (era.get('exp:89:监禁次数') === 1 && life_marks.b_ask_release < 4) {
      await this.#kojo['ask_release_reject_first']({
        ...generate_dictionary(this.id, { call: !0, teen: !0, uma: !0 }),
        ask_time: ++life_marks.b_ask_release,
      });
    } else {
      await this.#kojo['ask_release_reject'](
        generate_dictionary(this.id, { call: !0, teen: !0 }),
      );
    }
  }

  async ask_time(date, hours, minutes) {
    await this.#kojo['ask_time']({
      ...this.#dict,
      TIME: CustomizedBase.get_cur_time(hours, minutes),
    });
  }

  back_basement() {
    this.#kojo['back_basement']({
      ...generate_dictionary(this.id, {
        call: !0,
        teen: !0,
        uma: !0,
      }),
      start: new GrandLifeMarks().b_start,
    });
  }

  async battle_escape() {
    await this.#kojo['battle_escape']({
      ...generate_dictionary(this.id, {
        call: !0,
        child: !0,
        teen: !0,
        uma: !0,
      }),
      CALL_89: sys_get_callname(this.id, 89),
    });
  }

  async battle_fail() {
    const life_marks = new GrandLifeMarks();
    if (++life_marks.b_battle >= 10 && !life_marks.b_battle_fail) {
      life_marks.b_battle_fail = 1;
    }
    await this.#kojo['battle_fail']({
      ...generate_dictionary(this.id, { call: !0, uma: !0 }),
      time: life_marks.b_battle,
    });
  }

  async battle_prison() {
    await this.#kojo['battle_prison'](
      generate_dictionary(this.id, { call: !0, uma: !0 }),
    );
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    new GrandLifeMarks().b_find_escape = 1;
    if (is_back && out_of_prison) {
      this.#kojo['find_escape_out']({
        ...generate_dictionary(this.id, { call: !0, uma: !0 }),
        CALL_89: sys_get_callname(this.id, 89),
      });
    } else {
      this.#kojo['find_escape'](
        generate_dictionary(this.id, { call: !0, child: !0, uma: !0 }),
      );
    }
  }

  first_time() {
    this.#kojo['first_time'](this.#dict);
  }

  async flatter(sup) {
    const life_marks = new GrandLifeMarks();
    const no_escape_check =
      era.get('exp:89:监禁次数') === 1 && life_marks.b_find_escape === 0;
    if (life_marks.b_strike) {
      life_marks.b_strike = 0;
      await this.#kojo['flatter_after_strike'](this.#dict);
      sys_like_chara(89, 0, 30, false);
    } else if (life_marks.b_battle_fail === 1) {
      life_marks.b_battle_fail++;
      await this.#kojo['flatter_after_battle'](
        generate_dictionary(this.id, { call: !0, teen: !0 }),
      );
    } else if (no_escape_check && life_marks.b_flatter === 0) {
      await this.#kojo['flatter_no_escape_first'](
        generate_dictionary(this.id, { call: !0, uma: !0 }),
      );
      life_marks.b_flatter++;
    } else if (
      no_escape_check &&
      life_marks.b_flatter === 1 &&
      life_marks.b_ask_release === 4
    ) {
      await this.#kojo['flatter_no_escape_second'](this.#dict);
      life_marks.b_flatter++;
    } else if (no_escape_check && life_marks.b_flatter === 2) {
      await this.#kojo['flatter_no_escape_third'](this.#dict);
      life_marks.b_flatter++;
    } else {
      await this.#kojo['flatter'](this.#dict);
    }
  }

  get_basement_info(can_strike) {
    return i18n().kojo[this.id].get_basement_info(
      get_chara_talk(this.id),
      get_chara_talk(0),
      can_strike,
      sys_check_awake(this.id),
      new GrandLifeMarks().b_s_level,
    );
  }

  get_up() {
    this.#kojo['get_up'](this.#dict);
  }

  handle_escape() {
    const life_marks = new GrandLifeMarks();
    life_marks.b_find_escape =
      life_marks.b_flatter =
      life_marks.b_ask_release =
      life_marks.b_battle =
      life_marks.b_strike =
      life_marks.b_battle_fail =
        0;
  }

  out() {
    this.#kojo['out'](generate_dictionary(this.id, { call: !0, teen: !0 }));
  }

  async strike_fail() {
    new GrandLifeMarks().b_strike = 1;
    await this.#kojo['strike_fail'](
      generate_dictionary(this.id, { call: !0, teen: !0, uma: !0 }),
    );
  }

  async strike_success() {
    await this.#kojo['strike_success'](
      generate_dictionary(this.id, { call: !0, child: !0 }),
    );
  }

  welcome() {
    this.#kojo['welcome'](this.#dict);
  }
};
