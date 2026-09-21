const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const AgEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-19');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  select() {
    if (!sys_check_awake(this.id)) {
      return super.select();
    }
    this.#kojo.select(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 13),
    );
  }

  good_morning() {
    this.#kojo.good_morning(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async talk() {
    if (!sys_check_awake(19)) {
      return await super.talk();
    }
    await this.#kojo.talk(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_gift() {
    await this.#kojo.office_gift(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async office_cook() {
    await this.#kojo.office_cook(get_chara_talk(this.id));
  }

  async office_study() {
    await this.#kojo.office_study(get_chara_talk(this.id));
  }

  async office_rest() {
    await this.#kojo.office_rest(get_chara_talk(this.id));
  }

  async office_game() {
    await this.#kojo.office_game(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async s_a_tree_hollow(digital) {
    await this.#kojo.s_a_tree_hollow(digital);
  }

  async s_a_dating(digital) {
    await this.#kojo.s_a_dating(digital, sys_get_colored_callname(this.id, 0));
  }

  async s_r_lunch() {
    await this.#kojo.s_r_lunch(
      get_chara_talk(this.id),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async o_r_fishing(digital) {
    await this.#kojo.o_r_fishing(
      digital,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 20),
    );
  }

  async o_r_walking(digital) {
    await this.#kojo.o_r_walking(
      digital,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 8),
      sys_get_colored_callname(this.id, 9),
      sys_get_colored_callname(this.id, 46),
      sys_get_colored_callname(this.id, 58),
    );
  }

  async out_river(hook, extra) {
    const edu_marks = new AgEduMarks();
    if (!edu_marks.catch_fish) {
      edu_marks.catch_fish = 1;
      hook.override = true;
      const ret = await print_title_with_kojo(
        this.#kojo,
        'big_fish',
        get_chara_talk(this.id),
        get_chara_talk(1),
        get_chara_talk(20),
        get_chara_talk(0),
        sys_get_colored_callname(this.id, 0),
        sys_get_colored_callname(this.id, 20),
        sys_get_colored_callname(20, 0),
        sys_get_colored_callname(20, 1),
        sys_get_colored_callname(20, this.id),
      );
      era.println();
      let wait;
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        if (ret[0] === 1) {
          wait = sys_like_chara(20, 0, 40);
        } else {
          wait = sys_like_chara(19, 0, 40);
        }
      } else if (ret[0] === 1) {
        wait = sys_like_chara(19, 0, 40);
      } else {
        wait = sys_love_uma(19, 5);
      }
      wait = sys_like_chara(19, 20, 100) || wait;
      wait = sys_like_chara(20, 19, 100) || wait;
      if (wait) {
        await era.waitAnyKey();
      }
      return true;
    }
    return await super.out_river(hook, extra);
  }

  async o_s_arcade(digital) {
    await this.#kojo.o_s_arcade(digital, sys_get_colored_callname(this.id, 46));
  }

  async o_s_drawing(digital) {
    await this.#kojo.o_s_drawing(
      digital,
      sys_get_colored_callname(this.id, 32),
    );
  }

  async o_s_ktv(digital) {
    await this.#kojo.o_s_ktv(digital, sys_get_colored_callname(this.id, 0));
  }

  async o_s_movie(digital) {
    await this.#kojo.o_s_movie(digital);
  }

  async o_c_pray(digital, me) {
    await print_title_with_kojo(
      this.#kojo,
      'o_c_pray',
      digital,
      me,
      sys_get_colored_callname(this.id, 0),
      sys_get_colored_callname(this.id, 98),
    );
  }

  async o_s_restaurant(digital) {
    await this.#kojo.o_s_restaurant(digital);
  }

  async o_s_dating(digital) {
    await this.#kojo.o_s_dating(digital, sys_get_colored_callname(this.id, 0));
  }

  async o_s_shopping(digital) {
    await this.#kojo.o_s_shopping(
      digital,
      sys_get_colored_callname(this.id, 25),
      sys_get_colored_callname(this.id, 33),
    );
  }
};
