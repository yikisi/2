/**
 * @file 目白善信 - 爱慕
 * @author KUN
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_change_lust,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_ero_page = require('#/page/page-ero');

const kojo = require('#/event/love/love-64.kojo');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const PamaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-64');
const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedLove {
  get #dict() {
    const ret = {};
    const pama = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    ret['代表色'] = pama.color;
    ret['你'] = me.name;
    ret['她'] = pama.sex;
    ret['少女'] = pama.teen_sex_title;
    ret['称呼'] = sys_get_callname(this.id, 0);
    ret['女'] = pama.phy_sex_title[0];
    ret['马娘'] = pama.uma_sex_title;
    return ret;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async distance(pama, me, callname, stage, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    new PamaLifeMarks().love_24 = 2;
    await print_name_and_show_kojo('距离感', pama, kojo, this.#dict);
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async happy(pama, me, callname, stage, extra_flag, event_object) {
    if (sys_check_awake(this.id) === sys_check_awake(0)) {
      add_event(stage, event_object);
      return;
    }
    await print_name_and_show_kojo('喜悦', pama, kojo, this.#dict);
  }

  async 49(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code === 1 || me.sex_code === 0) {
      return await super['49'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const dict = this.#dict;
    const helios = get_chara_talk(65);
    dict['太阳神色'] = helios.color;
    dict['太阳神称呼善信'] = sys_get_callname(65, this.id);
    const ret = await print_name_and_show_kojo('温度', pama, kojo, dict);
    if (ret[1] === 2) {
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
      era.set(`cflag:${this.id}:爱慕暂拒`, 49);
    }
  }

  async 74(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code === 1 || me.sex_code === 0) {
      return await super['74'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const ret = await print_name_and_show_kojo('承诺', pama, kojo, this.#dict);
    if (ret.at(-1) === 2) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 74);
      await punish_rejecting_love(this.id);
    }
  }

  async 89(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code === 1 && me.sex_code === 1) {
      return await super['89'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const dict = this.#dict;
    dict['姐妹'] = pama.siblings_sex_title;
    const ret = await print_name_and_show_kojo('暖阳', pama, kojo, dict);
    if (ret[0] === 2) {
      await sys_love_uma_in_event(this.id);
      begin_and_init_ero(0, this.id);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(this.id, part_enum.mouth),
        false,
      );
      if (ret[1] === 1) {
        await print_ero_page(this.id, true);
        await end_ero_and_show_result(true);
      } else {
        end_ero_and_train();
      }
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 89);
    }
  }

  async 99(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code !== 0 || me.sex_code === 0) {
      return await super['99'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const dict = this.#dict;
    dict['ACE色'] = get_chara_talk(104).color;
    dict['ACE称呼善信'] = sys_get_callname(104, this.id);
    const ret = await print_name_and_show_kojo('锁', pama, kojo, dict);
    if (ret[0] === 2) {
      await sys_love_uma_in_event(this.id);
      begin_and_init_ero(this.id);
      await quick_make_love(
        new EroParticipant(this.id, part_enum.hand),
        new EroParticipant(this.id, part_enum.virgin),
        false,
      );
      if (ret[3] === 1) {
        await masturbate(this.id);
        sys_change_lust(this.id, -1000);
      } else {
        set_palam_to_max(this.id, part_enum.virgin);
        sys_change_lust(this.id, 1000);
      }
      if (sys_change_motivation(this.id, ret[3] === 1 ? 1 : -1)) {
        await era.waitAnyKey();
      }
      end_ero_and_train();
    } else {
      era.set(`cflag:${this.id}:爱慕暂拒`, 99);
    }
  }

  /** @param {CharaTalk} pama */
  async here(pama) {
    await print_name_and_show_kojo('在这里也可以哦', pama, kojo, this.#dict);
    begin_and_init_ero(0, this.id);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(this.id, part_enum.virgin),
      false,
    );
    await quick_make_love(
      new EroParticipant(this.id, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(this.id, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
  }

  /** @param {CharaTalk} pama */
  async escape(pama) {
    const dict = this.#dict;
    dict['自称'] = era.get('callname:64:64');
    const ret = await print_name_and_show_kojo(
      '和你一同逃去天涯海角',
      pama,
      kojo,
      dict,
    );
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    const l_cache = era.get('flag:当前位置');
    let loc = -1;
    if (era.get(`love:${this.id}`) >= 75) {
      if (ret[1] === 1 && ret[5] === 2) {
        if (ret[8] === 1) {
          loc = location_enum.atrium;
        } else {
          loc = location_enum.love_hotel;
        }
      } else if (ret[1] === 2 && ret[3] === 2) {
        loc = location_enum.office;
      }
    }
    if (loc >= 0) {
      era.set('flag:当前位置', loc);
      await quick_into_sex(this.id);
      if (loc !== location_enum.office) {
        await kojo['情人节外出马跳结束'](dict);
      } else {
        await kojo['情人节办公室马跳结束'](dict);
      }
    }
    era.set('flag:当前位置', l_cache);
  }
};
