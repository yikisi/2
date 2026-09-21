const era = require('#/era-electron');

const next_turn = require('#/system/ero/calc-sex/next-turn');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const sys_do_sex = require('#/system/ero/sys-calc-ero');
const { remove_item } = require('#/system/ero/sys-calc-ero-item');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedDaily = require('#/event/daily/daily-common');
const { i_pama_yandere } = require('#/event/snippets/106400');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const PamaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-64');
const { location_enum } = require('#/data/locations');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedDaily {
  get #kojo() {
    return i18n().kojo[this.id].daily;
  }

  get #dict() {
    return {
      ...generate_dictionary(this.id, { call: !0, uma: !0, teen: !0 }),
      half_life: +i_pama_yandere(),
      SELF_CALL: sys_get_callname(this.id, this.id),
    };
  }

  good_morning() {
    this.select();
  }

  select() {
    const life_marks = new PamaEduMarks();
    if (life_marks.b_escape > 0) {
      life_marks.b_escape = 0;
      this.#kojo['select_escape'](this.#dict);
    } else {
      get_chara_talk(65);
      this.#kojo['select']({
        ...this.#dict,
        CALL_65: sys_get_callname(this.id, 65),
      });
    }
  }

  async office_study() {
    await this.#kojo['office_study'](this.#dict);
  }

  async office_prepare() {
    await this.#kojo['office_prepare'](this.#dict);
  }

  async talk() {
    await this.#kojo['talk']({
      ...this.#dict,
      CALL_59: sys_get_callname(this.id, 59),
      CALL_65: sys_get_callname(this.id, 65),
      CALL_71: sys_get_callname(this.id, 71),
      CALL_74: sys_get_callname(this.id, 74),
      CALL_86: sys_get_callname(this.id, 86),
    });
  }

  async office_gift() {
    await this.#kojo['office_gift'](this.#dict);
  }

  async office_cook() {
    await this.#kojo['office_cook'](this.#dict);
  }

  async office_rest() {
    await this.#kojo['office_rest'](this.#dict);
  }

  async office_game() {
    get_chara_talk(27);
    await this.#kojo['office_game']({
      ...this.#dict,
      CALL_27: sys_get_callname(this.id, 27),
    });
  }

  async school_atrium(hook) {
    const edu_marks = new PamaEduMarks();
    if (
      era.get(`love:${this.id}`) >= 50 &&
      era.get('item:肛塞') > 0 &&
      era.get(`cflag:${this.id}:肠道内精液`) > 0 &&
      !edu_marks.snails
    ) {
      edu_marks.snails = 1;
      const ret = await print_title_with_kojo(
        this.#kojo,
        'tree_hollow_snails',
        get_chara_talk(this.id),
        this.#dict,
      );
      begin_and_init_ero(0, this.id);
      sys_do_sex(
        new EroParticipant(0, part_enum.item),
        new EroParticipant(this.id, part_enum.anal),
        item_enum.butt_plug,
      );
      await next_turn(false);
      if (ret[0] === 2) {
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(this.id, part_enum.virgin),
          false,
        );
      }
      set_palam_to_max(this.id, part_enum.virgin);
      remove_item(this.id, part_enum.anal);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand, -0.5),
        new EroParticipant(this.id, part_enum.anal),
        false,
      );
      end_ero_and_train();
      hook.override = true;
      return;
    }
    return super.school_atrium(hook);
  }

  async s_a_tree_hollow() {
    await this.#kojo['s_a_tree_hollow'](this.#dict);
  }

  async s_a_dating() {
    await this.#kojo['s_a_dating'](this.#dict);
  }

  async s_r_lunch(pama, me) {
    const dict = this.#dict;
    const life_marks = new PamaLifeMarks();
    if (era.get(`love:${this.id}`) >= 50 && !life_marks.love_rooftop) {
      life_marks.love_rooftop = 1;
      dict.check = 1;
    }
    if (
      (await this.#kojo['s_r_lunch'](dict))[0] === 2 &&
      sys_love_uma(this.id, 1)
    ) {
      await era.waitAnyKey();
    }
  }

  async o_r_fishing() {
    await this.#kojo['o_r_fishing'](this.#dict);
  }

  async o_r_walking() {
    await this.#kojo['o_r_walking'](this.#dict);
  }

  async o_s_arcade() {
    await this.#kojo['o_s_arcade']({
      ...this.#dict,
      SIBLINGS: get_chara_talk(this.id).siblings_sex_title,
    });
  }

  async o_s_drawing() {
    await this.#kojo['o_s_drawing'](this.#dict);
  }

  async o_s_ktv() {
    await this.#kojo['o_s_ktv'](this.#dict);
  }

  async o_s_movie() {
    get_chara_talk(71);
    await this.#kojo['o_s_movie']({
      ...this.#dict,
      CALL_71: sys_get_callname(this.id, 71),
    });
  }

  async o_c_pray(_, __, dice) {
    await this.#kojo['o_c_pray']({ ...this.#dict, dice });
  }

  async o_s_restaurant() {
    await this.#kojo['o_s_restaurant'](this.#dict);
  }

  async o_s_dating() {
    await this.#kojo['o_s_dating'](this.#dict);
  }

  async o_s_shopping() {
    await this.#kojo['o_s_shopping'](this.#dict);
  }

  async good_night(hook) {
    const love = era.get(`love:${this.id}`);
    const lust = era.get(`base:${this.id}:性欲`);
    if (i_pama_yandere() && love >= 95 && lust >= lust_border.absent_mind) {
      new PamaEduMarks().only_you++;
      const ret = await print_title_with_kojo(
        i18n().kojo[this.id].love,
        'nega_dis',
        get_chara_talk(this.id),
        {
          ...generate_dictionary(this.id, { uma: !0, your_name: !0 }),
          SELF_CALL: sys_get_callname(this.id, this.id),
        },
      );
      if (ret[0] === 1) {
        const item = '弗隆' + (love === 100 ? 'P' : 'K');
        hook.arg = 1;
        switch (ret[3]) {
          case 1:
            era.set(`status:0:${item}`, 1);
            break;
          case 2:
            era.set(`status:${this.id}:${item}`, 1);
            hook.arg = 2;
        }
      }
      return;
    }
    const check = get_custom_check(this.id).is_want_make_love();
    if (
      i_pama_yandere() &&
      era.get('cflag:0:性别') === 1 &&
      era.get(`cflag:${this.id}:性别`) !== 1 &&
      lust >= lust_border.itch &&
      check > 0
    ) {
      new PamaEduMarks().only_you++;
      hook.override = true;
      begin_and_init_ero(0, this.id);
      set_palam_to_max(0, part_enum.penis);
      era.set(
        `param:${this.id}:阴道快感`,
        era.get(`tcvar:${this.id}:阴道快感上限`) / 2,
      );
      await quick_make_love(
        new EroParticipant(this.id, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
      );
      await quick_make_love(
        new EroParticipant(this.id, part_enum.hand),
        new EroParticipant(0, part_enum.penis),
      );
      if (
        (
          await print_title_with_kojo(
            i18n().kojo[this.id].love,
            'come_for_you',
            get_chara_talk(this.id),
            this.#dict,
          )
        )['select'] === 1
      ) {
        await quick_into_sex(this.id);
      } else {
        await quick_into_sex(this.id, this.id, true);
      }
      await end_ero_and_show_result();
      await i18n().kojo[this.id].love['come_fy_end'](this.#dict);
      return;
    }
    return super.good_night(hook);
  }

  async good_night_sex(_, __, check) {
    return (
      (await this.#kojo['good_night_sex']({ ...this.#dict, check }))[0] === 1
    );
  }

  good_night_normal() {
    this.#kojo['good_night_normal'](this.#dict);
  }

  async cl_palace(pama, me) {
    if (era.get(`cflag:${this.id}:殿堂`) > 0) {
      return await super.cl_palace(pama, me);
    }
    await print_title_with_kojo(this.#kojo, 'cl_palace', pama, this.#dict);
  }

  async cl_fans(pama) {
    if (era.get(`cflag:${this.id}:育成回合计时`) < 3 * 48) {
      const bourbon = get_chara_talk(26);
      await print_title_with_kojo(this.#kojo, 'cl_fans_in_edu', pama, {
        ...this.#dict,
        BOURBON: bourbon.name,
        COLOR_26: bourbon.color,
      });
    } else {
      await print_title_with_kojo(this.#kojo, 'cl_fans', pama, this.#dict);
    }
  }

  async cl_temple_fair(pama, me, hook) {
    if (!(era.get(`cflag:${this.id}:育成回合计时`) < 3 * 48)) {
      return await super.cl_temple_fair(pama, me);
    }
    const ret = await print_title_with_kojo(
      this.#kojo,
      'cl_temple_fair',
      pama,
      this.#dict,
    );
    let relation = 0;
    let love = 0;
    let base = [];
    let pt = 0;
    if (ret[0] === 1) {
      hook.override = true;
      relation = 10;
      love = 2;
      if (ret[1] === 1) {
        base = [100];
      } else {
        pt = 35;
      }
      switch (ret.at(-1)) {
        case 1:
          relation += 10;
          break;
        case 2:
          love += 2;
          break;
        case 3:
          sys_change_lust(this.id, get_random_value(800, 1200));
      }
      if (all_reward_in_event(this.id, { relation, love, base, pt })) {
        await era.waitAnyKey();
      }
    }
    era.set(`cflag:${this.id}:节日事件标记`, 0);
  }

  async cl_halloween(pama) {
    await print_title_with_kojo(this.#kojo, 'cl_halloween', pama, this.#dict);
  }

  async cl_christmas(pama) {
    const nature = get_chara_talk(60);
    const tannhauser = get_chara_talk(62);
    const helios = get_chara_talk(65);
    const turbo = get_chara_talk(66);
    if (
      (
        await print_title_with_kojo(this.#kojo, 'cl_christmas', pama, {
          ...this.#dict,
          COLOR_60: nature.color,
          COLOR_62: tannhauser.color,
          COLOR_65: helios.color,
          COLOR_66: turbo.color,
          HELIOS: helios.name,
          NATURE: nature.name,
          TANNHAUSER: tannhauser.name,
          TURBO: turbo.name,
        })
      )[6] === 1
    ) {
      const cache = era.get('flag:当前位置');
      era.set('flag:当前位置', location_enum.home);
      await quick_into_sex(this.id);
      era.set('flag:当前位置', cache);
      await this.#kojo['cl_christmas_sex_end'](this.#dict);
    }
  }

  async load_talk() {
    await this.#kojo['load_talk'](this.#dict);
  }

  async basement_end() {
    const pama = get_chara_talk(this.id);
    if (i_pama_yandere()) {
      await print_title_with_kojo.ending(
        i18n().kojo[this.id].love,
        'endless_escape',
        pama,
        this.#dict,
      );
    } else if (era.get(`love:${this.id}`) >= 75) {
      await print_title_with_kojo.ending(
        this.#kojo,
        'basement_end',
        pama,
        this.#dict,
      );
    } else {
      return await super.basement_end();
    }
  }

  async slave_end() {
    const pama = get_chara_talk(this.id);
    if (i_pama_yandere()) {
      await print_title_with_kojo.ending(
        i18n().kojo[this.id].love,
        'endless_escape',
        pama,
        this.#dict,
      );
    } else if (era.get(`love:${this.id}`) >= 75) {
      await print_title_with_kojo.ending(
        this.#kojo,
        'slave_end',
        pama,
        this.#dict,
      );
    } else {
      return await super.slave_end();
    }
  }
};
