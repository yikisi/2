const era = require('#/era-electron');

const {
  check_pregnant_unprotect,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const {
  sys_change_lust,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const CustomizedEvent = require('#/event/event-common');
const { check_sub_slavery } = require('#/event/snippets/check-slavery');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number, get_random_value } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const { buff_colors, money_color } = require('#/data/color-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { class_enum } = require('#/data/race/model/race-info');
const {
  race_enum,
  race_infos,
  race_rewards,
} = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

class CustomizedEdu extends CustomizedEvent {
  /** @type {function} */
  static load_game;
  static common_event_count = 0;

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  static async common_palace(chara, me) {
    const { check, count, buffer } = CustomizedEdu.get_palace_info(chara);
    const titles = CharaTitles.get(chara.id).get();
    const in_palace =
      check >= 6 ||
      (check >= 4 &&
        titles.some(
          (t) =>
            t.n === 'r_3crown_c' ||
            t.n === 'r_3crown_f' ||
            t.n === 'r_3crown_m' ||
            t.n === 'r_3crown_d' ||
            t.n === 'r_3crown_a',
        )) ||
      (check >= 3 &&
        titles.some(
          (t) =>
            t.n === 'r_3crown_ci' ||
            t.n === 'r_3crown_fi' ||
            t.n === 'r_3crown_mi' ||
            t.n === 'r_3crown_di' ||
            t.n === 'r_3crown_ai' ||
            t.n === 'r_6crown',
        ));
    let title = CharaTitles.get(chara.id).get_colored_curr_title();
    title = title ? [title, ' '] : [];
    const fame_reward =
      (count.g1 * race_rewards[class_enum.G1].r01.fame) / 2 +
      (count.g2 * race_rewards[class_enum.G2].r01.fame) / 2 +
      (count.g3 * race_rewards[class_enum.G3].r05.fame) / 2;
    await print_title_with_kojo(
      i18n().timon.edu,
      in_palace ? 'on_palace' : 'under_palace',
      chara,
      me,
      buffer,
      title,
    );
    if (in_palace) {
      // CFLAGNAME:47 = 殿堂
      era.add(`cflag:${chara.id}:47`, 1);
      era.println();
      sys_like_chara(302, 0, fame_reward / 5 + 20) && (await era.waitAnyKey());
      sys_like_chara(301, 0, 100) && (await era.waitAnyKey());
    } else {
      era.println();
      sys_like_chara(302, 0, fame_reward / 5) && (await era.waitAnyKey());
    }
    sys_change_fame(fame_reward);
    // CFLAGNAME:50 = 可再次育成
    era.set(`cflag:${chara.id}:50`, 1);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  static async common_palace_relation(chara, me) {
    if (
      era.get(`love:${chara.id}`) >= 50 ||
      era.get(`relation:${chara.id}:0`) > 0
    ) {
      era.drawLine();
      // FLAGNAME:4 = 当前位置
      era.set('flag:4', location_enum.gate);
      await print_title_with_kojo(
        i18n().timon.edu,
        'pl_future',
        chara,
        me,
        get_sex_acceptable(chara.id) >= 0 && check_pregnant_unprotect(0),
      );
      era.set('flag:4', location_enum.office);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @returns {{count:{g1:number,g2:number,g3:number},check:number,buffer:*[]}}
   */
  static get_palace_info(chara) {
    const races = RaceHistory.get(chara.id).get_entries();
    const main_races = [];
    let total_prize = 0;
    let champions = 0;
    let check = 0;
    let g1_count = 0;
    let g2_count = 0;
    let g3_count = 0;
    races
      .sort(
        (a, b) =>
          race_infos[a.race].race_class - race_infos[b.race].race_class ||
          b.weeks - a.weeks,
      )
      .forEach((e) => {
        const info = race_infos[e.race];
        if (e.rank === 1) {
          champions++;
          e.race !== race_enum.begin_race && main_races.push(e.race);
          check += info.race_class === RaceInfo.class_enum.G1;
        }
        if (e.rank <= 5) {
          g1_count += (info.race_class === RaceInfo.class_enum.G1) / e.rank;
          g2_count += (info.race_class === RaceInfo.class_enum.G2) / e.rank;
          g3_count += (info.race_class === RaceInfo.class_enum.G3) / e.rank;
          total_prize += info.prize * RaceInfo.prize_ratios[e.rank - 1];
        }
      });
    return {
      buffer: i18n().timon.edu.get_result_list(
        chara,
        {
          content: races.length.toLocaleString(),
          color: buff_colors[1],
          fontWeight: 'bold',
        },
        {
          content: champions.toString(),
          color: champions ? buff_colors[1] : '',
          fontWeight: 'bold',
        },
        {
          ...get_abbr_number(Math.floor(total_prize)),
          color: money_color,
        },
        main_races
          .slice(0, 6)
          .map((r) => race_infos[r].get_colored_name_with_class()),
      ),
      check,
      count: {
        g1: g1_count,
        g2: g2_count,
        g3: g3_count,
      },
    };
  }

  /**
   * @param {CharaTalk} chara
   * @param {number} attr
   * @param {boolean} is_fumble
   */
  static async print_fail_info_in_train(chara, attr, is_fumble) {
    await i18n().timon.edu.tf_info(chara, attr, is_fumble);
  }

  /**
   * @param {number} attr
   * @returns {Promise<boolean|void>}
   */
  async train(attr) {
    await i18n().timon.edu.train(
      get_chara_talk(this.id),
      get_chara_talk(0),
      attr,
    );
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainSuccessParams} extra
   * @returns {Promise<TrainSuccessParams|void>}
   */
  async train_success(chara, me, callname, hook, extra) {
    // FLAGNAME:4 = 当前位置
    const cur_location = era.get('flag:4');
    this.train_success_content(chara, me, callname, hook, extra);
    era.println();
    if (this.id === 0) {
      return;
    }
    if (
      !era.get(`status:${this.id}:摸鱼`) &&
      Math.random() < 0.2 * extra.stamina_ratio
    ) {
      if (sys_check_remote(this.id)) {
        hook.arg = true;
      } else {
        await era.waitAnyKey();
        hook.arg = await this.train_success_add(
          chara,
          me,
          callname,
          hook,
          extra,
        );
        era.println();
      }
    } else if (
      extra.train !== attr_enum.intelligence &&
      !sys_check_remote(this.id)
    ) {
      if (
        era.get(`love:${this.id}`) >= 50 &&
        // BASENAME:10 = 性欲
        era.get(`base:${this.id}:10`) >= lust_border.itch &&
        Math.random() <
          (0.2 * era.get(`base:${this.id}:10`)) / lust_border.want_sex
      ) {
        await era.waitAnyKey();
        if (await this.train_success_sex(chara, me, callname, hook, extra)) {
          era.set('flag:4', location_enum.restroom);
          await quick_into_sex(this.id);
          era.set('flag:4', cur_location);
        } else {
          sys_change_lust(this.id, get_random_value(500, 1500));
        }
      } else if (Math.random() < 0.02) {
        await era.waitAnyKey();
        const want_sex =
          era.get(`love:${this.id}`) >= 50 &&
          get_sex_acceptable(this.id) >= 0 &&
          check_pregnant_unprotect(0);
        if (
          (
            await print_title_with_kojo(
              i18n().timon.random_events,
              'ts_shower',
              chara,
              me,
              want_sex,
            )
          )[0] === 1
        ) {
          if (want_sex) {
            era.set('flag:4', location_enum.restroom);
            await quick_into_sex(this.id);
            era.set('flag:4', cur_location);
            extra.relation_change = 5;
          } else {
            sys_change_motivation(this.id, -1) && (await era.waitAnyKey());
            extra.relation_change = -5;
          }
        } else {
          sys_change_lust(this.id, get_random_value(500, 1500));
        }
      }
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainSuccessParams} extra
   */
  train_success_content(chara, me, callname, hook, extra) {
    i18n().timon.edu.ts_info(chara);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainSuccessParams} extra
   * @returns {Promise<boolean>}
   */
  async train_success_add(chara, me, callname, hook, extra) {
    return (
      (
        await print_title_with_kojo(i18n().timon.edu, 'ts_add', chara, me)
      )[0] === 1
    );
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainSuccessParams} extra
   * @returns {Promise<boolean>}
   */
  async train_success_sex(chara, me, callname, hook, extra) {
    return (
      (
        await print_title_with_kojo(i18n().timon.random_events, 'ts_sex', chara)
      )[0] === 1
    );
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainFailParams} extra
   */
  async train_fail(chara, me, callname, hook, extra) {
    await CustomizedEdu.print_fail_info_in_train(
      chara,
      extra.train,
      extra.fumble,
    );
    era.println();
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    if (extra.train !== attr_enum.intelligence) {
      const key = extra.fumble ? 'train_fumble' : 'train_fail';
      if (
        (await print_title_with_kojo(i18n().timon.edu, key, chara, me))[0] === 1
      ) {
        hook.arg = 0;
      } else if (Math.random() < extra.args.ratio.fail_again) {
        hook.arg = -1;
      } else {
        hook.arg = 1;
      }
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{lan:number}} extra_flag
   */
  async foreign_study(chara, me, callname, hook, extra_flag) {
    const abl = era.get(`abl:${this.id}:${extra_flag.lan}`);
    hook.arg =
      abl === 5 ||
      Math.random() <
        (5 - abl) / 5 + (era.get(`abl:0:${extra_flag.lan}`) > abl) / 2;
    await i18n().timon.edu.foreign_study(chara, me, hook.arg);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async foreign_rest(chara, me, callname) {
    await i18n().timon.edu.foreign_rest(chara, me);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async foreign_train(chara, me, callname) {
    await i18n().timon.edu.foreign_train(chara, me);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   * @returns {Promise<boolean|void>}
   */
  async foreign_travel(chara, me, callname, hook, extra, event_object) {
    await i18n().timon.edu.foreign_travel(
      chara,
      me,
      i18n().location[location_enum.keys[era.get('flag:4')]],
    );
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async office_study(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async office_prepare(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async office_cook(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async office_rest(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async office_game(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async school_clinic(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async school_god(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async school_atrium(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async school_rooftop(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async school_chairman(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async out_start(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async out_river(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async out_shopping(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async out_church(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async out_station(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async out_mejiro(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async back_school(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async celebration(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean|void>}
   */
  async week_start(chara, me, callname, hook, extra_flag, event_object) {
    switch (event_object?.arg) {
      case 47 + 29:
      case 95 + 29:
        if (CustomizedEdu.common_event_count === 0) {
          return;
        }
        CustomizedEdu.common_event_count--;
        await print_title_with_kojo(
          i18n().timon.edu,
          'summer_start',
          chara,
          me,
        );
        break;
      case 143 + 9:
      case 'palace':
        await CustomizedEdu.common_palace(chara, me);
        await CustomizedEdu.common_palace_relation(chara, me);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async week_end(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {RaceStartParams} extra
   */
  async race_start(chara, me, callname, hook, extra) {
    let item = 0;
    let do_sex = false;
    if (extra.pseudo.race.conditionParams.item === 1) {
      item = check_sub_slavery(this.id, get_sex_acceptable(this.id));
      // FLAGNAME:35 = 惩戒力度
    } else if (era.get('flag:35') >= 2 && (do_sex = Math.random() < 0.5)) {
      extra.motivation_change = 1;
    }
    await print_title_with_kojo(
      !item && do_sex ? i18n().timon.pregnant_slave : i18n().timon.edu,
      'race_start',
      chara,
      me,
      item,
      do_sex,
    );
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {RaceEndParams} extra
   */
  async race_end(chara, me, callname, hook, extra) {
    let key;
    if (extra.pseudo.race.conditionParams.item === 1) {
      key = extra.rank === 1 ? 'race_end_item_win' : 'race_end_item_lose';
    } else if (extra.rank === 1) {
      key = 'race_end_win';
    } else if (extra.rank <= 5) {
      key = 'race_end_5';
    } else if (extra.rank <= 10) {
      key = 'race_end_10';
    } else {
      key = 'race_end_lose';
    }
    await print_title_with_kojo(i18n().timon.edu, key, chara, me);
  }

  async crazy_fan_end() {
    await print_title_with_kojo.ending(
      i18n().timon.ending,
      'crazy_fan_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  /**
   * 检查夏合宿事件时是否不位于海边或处于远程状态
   * @returns {boolean}
   */
  get summer_non_beach() {
    return (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get(`cflag:${this.id}:位置`) !== era.get('cflag:0:位置')
    );
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async run(hook, extra_flag, event_object) {
    let handler = this[event_object?.arg];
    if (handler === undefined) {
      handler = this[event_hooks.keys[hook.hook]];
    }
    if (handler !== undefined) {
      return await handler.call(
        this,
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_callname(this.id, 0),
        hook,
        extra_flag,
        event_object,
      );
    }
  }
}

module.exports = CustomizedEdu;
