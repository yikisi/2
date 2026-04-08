const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const ArdanLifeMarks = require('#/data/event/life-event-marks/life-event-marks-71');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return generate_dictionary(this.id, { call: !0, uma: !0 });
  }

  #get_callname(id) {
    get_chara_talk(id);
    return sys_get_callname(this.id, id);
  }

  good_morning() {
    if (era.get('status:0:生日') > 0) {
      this.#kojo['select_in_birthday'](this.#dict);
    } else {
      this.#kojo['good_morning'](this.#dict);
    }
  }

  select() {
    if (era.get('status:0:生日') > 0) {
      this.#kojo['select_in_birthday'](this.#dict);
    } else {
      this.#kojo['select'](this.#dict);
    }
  }

  good_night_normal() {
    this.#kojo['good_night_normal'](this.#dict);
  }

  async talk() {
    await this.#kojo['talk']({
      ...this.#dict,
      CALL_21: this.#get_callname(21),
      CALL_32: this.#get_callname(32),
      CALL_6: this.#get_callname(6),
      CALL_64: this.#get_callname(64),
      CALL_69: this.#get_callname(69),
      CALL_72: this.#get_callname(72),
      CALL_86: this.#get_callname(86),
    });
  }

  async office_gift() {
    await this.#kojo['office_gift'](this.#dict);
  }

  async o_c_pray() {
    await this.#kojo['o_c_pray'](this.#dict);
  }

  async o_r_fishing() {
    await this.#kojo['o_r_fishing'](this.#dict);
  }

  async o_r_walking() {
    await this.#kojo['o_r_walking'](this.#dict);
  }

  async o_s_arcade() {
    await this.kojo['o_s_arcade'](this.#dict);
  }

  async o_s_drawing() {
    await this.kojo['o_s_drawing'](this.#dict);
  }

  async o_s_ktv() {
    await this.kojo['o_s_ktv'](this.#dict);
  }

  async o_s_movie() {
    await this.kojo['o_s_movie'](this.#dict);
  }

  async o_s_restaurant() {
    await this.kojo['o_s_restaurant'](this.#dict);
  }

  async o_s_dating() {
    await this.kojo['o_s_dating'](this.#dict);
  }

  async o_s_shopping() {
    await this.kojo['o_s_shopping'](this.#dict);
  }

  async s_a_tree_hollow() {
    await this.#kojo['s_a_tree_hollow'](this.#dict);
  }

  async s_a_dating() {
    await this.#kojo['s_a_dating'](this.#dict);
  }

  async school_rooftop() {
    await this.#kojo['school_rooftop'](this.#dict);
  }

  async office_cook() {
    await this.#kojo['office_cook'](this.#dict);
  }

  async office_study() {
    await this.#kojo['office_study'](this.#dict);
  }

  async office_rest() {
    await this.#kojo['office_rest'](this.#dict);
  }

  async office_game() {
    await this.#kojo['office_game'](this.#dict);
  }

  async cl_new_year() {
    await print_title_with_kojo(
      this.#kojo,
      'cl_new_year',
      get_chara_talk(this.id),
      this.#dict,
    );
  }

  async cl_valentine() {
    await print_title_with_kojo(
      this.#kojo,
      'cl_valentine',
      get_chara_talk(this.id),
      this.#dict,
    );
  }

  async cl_fans() {
    await print_title_with_kojo(
      this.#kojo,
      'cl_fans',
      get_chara_talk(this.id),
      this.#dict,
    );
  }

  async cl_temple_fair() {
    await print_title_with_kojo(
      this.#kojo,
      'cl_temple_fair',
      get_chara_talk(this.id),
      this.#dict,
    );
  }

  async cl_halloween() {
    await this.#kojo['cl_halloween'](this.#dict);
    await print_title_with_kojo(
      this.#kojo,
      'cl_christmas',
      get_chara_talk(this.id),
      this.#dict,
    );
  }

  async cl_christmas() {
    await print_title_with_kojo(
      this.#kojo,
      'cl_christmas',
      get_chara_talk(this.id),
      this.#dict,
    );
  }

  async birthday() {
    const life_marks = new ArdanLifeMarks();
    let key;
    if (era.get(`love:${this.id}`) === 100 && !life_marks.birthday) {
      life_marks.birthday = 1;
      key = 'birthday_dependence';
    } else {
      key = 'birthday';
    }
    await print_title_with_kojo(
      this.#kojo,
      key,
      get_chara_talk(this.id),
      this.#dict,
    );
  }
};
