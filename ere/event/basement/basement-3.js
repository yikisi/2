const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TeioLifeMarks = require('#/data/event/life-event-marks/life-event-marks-3');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedBase {
  get #kojo() {
    return i18n().kojo[this.id].basement;
  }

  async ask_release_agree() {
    if (
      (await this.#kojo.ask_release_agree(
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_colored_callname(this.id, 0),
      )) === 2
    ) {
      new TeioLifeMarks().release_agree = 1;
    }
  }

  async ask_release_reject() {
    await this.#kojo.ask_release_reject(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async ask_time(date, hours, minutes) {
    await this.#kojo.ask_time(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      new TeioLifeMarks().b_s_level,
      CustomizedBase.get_cur_time(hours, minutes),
    );
  }

  async battle_escape() {
    await this.#kojo.battle_escape(get_chara_talk(this.id), get_chara_talk(0));
  }

  async battle_fail() {
    await this.#kojo.battle_fail(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async battle_prison() {
    await this.#kojo.battle_prison(get_chara_talk(this.id), get_chara_talk(0));
  }

  async battle_success() {
    await this.#kojo.battle_success(get_chara_talk(this.id), get_chara_talk(0));
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    const life_marks = new TeioLifeMarks();
    if (
      !out_of_prison ||
      !is_back ||
      life_marks.b_s_level < 3 - era.get('status:3:腿伤')
    ) {
      return super.find_escape(out_of_prison, s_level_up, is_back);
    }
    this.#kojo.find_escape(get_chara_talk(this.id), get_chara_talk(0));
  }

  first_time() {
    const team_list = sys_filter_chara(
        'cflag',
        '招募状态',
        recruit_flags.yes,
      ).filter((e) => e > 0 && e !== 3),
      highest_love = Math.max(...team_list.map((e) => era.get(`love:${e}`)));
    let another_lover = get_random_entry(
      team_list.filter(
        (e) =>
          era.get(`love:${e}`) === highest_love &&
          (era.get(`relation:3:${e}`) <= 375 ||
            era.get(`relation:${e}:3`) <= 75),
      ),
    );
    if (!another_lover) {
      another_lover = 304;
    }
    this.#kojo.first_time(get_chara_talk(another_lover), get_chara_talk(0));
    new TeioLifeMarks().b_start = 0;
  }

  async flatter() {
    await this.#kojo.flatter(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async strike_fail() {
    await this.#kojo.strike_fail(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  async strike_success() {
    await this.#kojo.strike_success(
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
    );
  }

  welcome() {
    this.first_time();
  }
};
