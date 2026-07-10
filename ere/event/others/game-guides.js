const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');

const { __, i18n } = require('#/i18n/selector');

class GameGuides {
  /** @returns {Record<string,1>} */
  get #obj() {
    return era.get('flag:新手教学') || era.set('flag:新手教学', {});
  }

  /**
   * @param {string} con
   * @returns {boolean}
   */
  check(con) {
    const obj = this.#obj;
    if (obj[con] > 0) {
      delete obj[con];
      return true;
    }
    return false;
  }

  init() {
    this.#obj[this.game_start.name] = 1;
    this.#obj[this.office_sex.name] = 1;
  }

  async game_start() {
    if (this.check(this.game_start.name)) {
      await i18n().timon.game_guides.game_start(
        get_chara_talk(301),
        get_chara_talk(0),
        Object.keys(era.get('global:saves')).length === 0,
      );
      EventMarks.get(0).add(event_hooks.recruit);
      this.#obj[this.recruit.name] = 1;
    }
  }

  async recruit() {
    if (this.check(this.recruit.name)) {
      await i18n().timon.game_guides.recruit(
        get_chara_talk(301),
        get_chara_talk(0),
      );
      EventMarks.get(0).sub(event_hooks.recruit);
      this.#obj[this.recruit_end.name] = 1;
    }
  }

  async recruit_end() {
    if (this.check(this.recruit_end.name)) {
      await i18n().timon.game_guides.recruit_end(
        get_chara_talk(301),
        get_chara_talk(0),
        sys_filter_chara('cflag', '招募状态', recruit_flags.yes).length > 1,
      );
      EventMarks.get(0).add(event_hooks.train);
      this.#obj[this.office_train.name] = 1;
    }
  }

  async office_train() {
    if (this.check(this.office_train.name)) {
      await i18n().timon.game_guides.office_train(
        get_chara_talk(301),
        get_chara_talk(0),
      );
      EventMarks.get(0).sub(event_hooks.train).add(event_hooks.register_race);
      this.#obj[this.office_register.name] = 1;
    }
  }

  async office_register() {
    if (this.check(this.office_register.name)) {
      await i18n().timon.game_guides.office_register(
        get_chara_talk(301),
        get_chara_talk(0),
      );
      EventMarks.get(0)
        .sub(event_hooks.register_race)
        .add(event_hooks.school_trainer_office);
      this.#obj[this.school_trainer_office.name] = 1;
    }
  }

  async school_trainer_office() {
    if (this.check(this.school_trainer_office.name)) {
      await i18n().timon.game_guides.school_trainer_office(
        get_chara_talk(301),
        get_chara_talk(0),
      );
      EventMarks.get(0)
        .sub(event_hooks.school_trainer_office)
        .add(event_hooks.school_clinic);
      this.#obj[this.school_clinic.name] = 1;
      return true;
    }
  }

  async school_clinic() {
    if (this.check(this.school_clinic.name)) {
      await i18n().timon.game_guides.school_clinic(
        get_chara_talk(301),
        sys_get_colored_callname(301, 305),
      );
      EventMarks.get(0)
        .sub(event_hooks.school_clinic)
        .add(event_hooks.school_god);
      this.#obj[this.school_god.name] = 1;
      return true;
    }
  }

  async school_god() {
    if (this.check(this.school_god.name)) {
      await i18n().timon.game_guides.school_god(
        get_chara_talk(301),
        get_chara_talk(0),
      );
      EventMarks.get(0)
        .sub(event_hooks.school_god)
        .add(event_hooks.school_atrium);
      this.#obj[this.school_atrium.name] = 1;
      return true;
    }
  }

  async school_atrium() {
    if (this.check(this.school_atrium.name)) {
      await i18n().timon.game_guides.school_atrium(
        get_chara_talk(301),
        get_chara_talk(0),
      );
      EventMarks.get(0)
        .sub(event_hooks.school_atrium)
        .add(event_hooks.school_rooftop);
      this.#obj[this.school_rooftop.name] = 1;
      return true;
    }
  }

  async school_rooftop() {
    if (this.check(this.school_rooftop.name)) {
      await i18n().timon.game_guides.school_rooftop(get_chara_talk(301));
      EventMarks.get(0)
        .sub(event_hooks.school_rooftop)
        .add(event_hooks.school_chairman);
      this.#obj[this.school_chairman.name] = 1;
      return true;
    }
  }

  async school_chairman() {
    if (this.check(this.school_chairman.name)) {
      await i18n().timon.game_guides.school_chairman(
        get_chara_talk(301),
        get_chara_talk(0),
        {
          color: get_chara_color(302),
          content: __('name.900211'),
          fontWeight: 'bold',
        },
      );
      EventMarks.get(0)
        .sub(event_hooks.school_chairman)
        .add(event_hooks.school_visitors);
      this.#obj[this.school_visitors.name] = 1;
      return true;
    }
  }

  async school_visitors() {
    if (this.check(this.school_visitors.name)) {
      await i18n().timon.game_guides.school_visitors(
        get_chara_talk(301),
        get_chara_talk(0),
      );
      EventMarks.get(0)
        .sub(event_hooks.school_visitors)
        .add(event_hooks.out_start);
      this.#obj[this.out.name] = 1;
      return true;
    }
  }

  async out() {
    if (this.check(this.out.name)) {
      await i18n().timon.game_guides.out(
        get_chara_talk(301),
        get_chara_talk(0),
      );
      delete this.#obj[this.office_sex.name];
      era.drawLine();
      EventMarks.get(0).sub(event_hooks.out_start);
    }
  }

  async office_sex() {
    if (this.check(this.office_sex.name)) {
      await i18n().timon.game_guides.office_sex(
        get_chara_talk(301),
        get_chara_talk(0),
      );
      return true;
    }
  }
}

const game_guides = new GameGuides();

module.exports = game_guides;
