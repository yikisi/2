const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  check_pregnant_unprotect,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_change_lust,
  sys_change_motivation,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const print_ero_page = require('#/page/page-ero');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { get_date_obj } = require('#/data/date-indicator');
const CharaInmon = require('#/data/ero/chara-inmon');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const {
  attr_enum,
  base_attr_list,
  fumble_result,
} = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async crazy_fan_end() {
    const tachyon = get_chara_talk(32);
    const me = get_chara_talk(0);
    if (era.get('flag:强制BE') === this.id) {
      await print_title_with_kojo.ending(this.#kojo, 'be_betray', tachyon, me);
    }
    await print_title_with_kojo.ending(
      this.#kojo,
      'be_crazy_fan',
      tachyon,
      me,
      sys_get_colored_callname(this.id, 25),
      new TachyonEduMarks().plan_b > 0,
    );
  }

  async out_shopping(tachyon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 32) {
      add_event(hook.hook, ebj);
      return;
    }
    const dice = get_random_value(1, 5);
    await print_title_with_kojo(
      this.#kojo,
      'os_95_3',
      tachyon,
      me,
      callname,
      sys_get_colored_callname(this.id, 25),
      era.get(`relation:${this.id}:0`),
      era.get(`love:${this.id}`),
      dice,
      new TachyonEduMarks().plan_b > 0,
      new TachyonLifeMarks().cook,
    );
    let wait = false;
    switch (dice) {
      case 1:
        wait = all_reward_in_event(this.id, { motivation: -1 });
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          base: [era.get('maxbase:32:0') * 0.2],
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, {
          base: [era.get('maxbase:32:0') * 0.2],
          motivation: 1,
        });
        break;
      case 4:
        wait = all_reward_in_event(this.id, {
          base: [era.get('maxbase:32:0') * 0.3],
          motivation: 1,
        });
        break;
      case 5:
        if (era.get(`love:${this.id}`) >= 75) {
          update_kiss_exp(get_date_obj(), this.id, 0);
        }
        wait = all_reward_in_event(this.id, {
          base: [era.get('maxbase:32:0') * 0.3],
          motivation: 1,
        });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_start(tachyon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 32) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'hot_spring') {
      return;
    }
    const edu_marks = new TachyonEduMarks();
    if (edu_marks.plan_b > 0) {
      await print_title_with_kojo(
        this.#kojo,
        'hot_spring_b',
        tachyon,
        get_chara_talk(25),
        me,
        callname,
        era.get('love:32'),
        check_aim_race(
          RaceHistory.get(this.id).get(),
          race_enum.prix_lat,
          2,
          1,
        ),
        edu_marks.chris,
      );
      begin_and_init_ero(0, 32);
      era.set('tcvar:0:发情', 1);
      era.set('tcvar:32:发情', 1);
      update_ero_status(0, 32);
      era.set('flag:当前位置', location_enum.hot_spring);
      await print_ero_page(32, true);
      era.set('flag:当前位置', location_enum.gate);
      await end_ero_and_show_result(true);
      await this.#kojo.hot_spring_b_sex_end(tachyon, me);
    } else {
      await print_title_with_kojo(
        this.#kojo,
        'hot_spring_a',
        tachyon,
        get_chara_talk(25),
        me,
        callname,
        era.get('love:32'),
      );
    }
    era.set('item:用途不明的眼镜', 1);
    return true;
  }

  async race_end(tachyon, me, callname, hook, extra) {
    const edu_marks = new TachyonEduMarks();
    const relation = era.get(`relation:${this.id}:0`);
    const love = era.get(`love:${this.id}`);
    let key = undefined;
    /** @type {[]} */
    let args = [me, callname, relation, love];
    let temp;
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1 && era.get('cflag:32:育成回合计时') === 23) {
          key = 'begin_race_win';
          extra.attr_change = new Array(5).fill(0);
          if (relation > 225) {
            gacha(base_attr_list, 3).forEach((e) => (extra.attr_change[e] = 3));
          } else {
            sys_change_fame(-5);
            gacha(base_attr_list, 3).forEach((e) => (extra.attr_change[e] = 6));
          }
        }
        break;
      case race_enum.hope_sta:
        if (extra.rank === 1) {
          key = 'hope_sta_win';
          args = [me, race_infos[extra.race].get_colored_name()];
        } else {
          key = 'hope_sta_lose';
          if (relation > 225) {
            extra.attr_change = [0, 0, 3, 0, 0];
          }
        }
        break;
      case race_enum.hoch_sho:
        if (extra.rank === 1) {
          key = 'hoch_sho_win';
          args = [
            me,
            callname,
            love,
            race_infos[race_enum.hoch_sho].get_colored_name(),
            race_infos[race_enum.sats_sho].get_colored_name(),
          ];
          extra.attr_change = { [attr_enum.intelligence]: 5 };
        }
        break;
      case race_enum.sats_sho:
        if (extra.rank === 1) {
          await print_event_name(
            this.#kojo.sats_sho_win.title(tachyon),
            tachyon,
          );
          await this.#kojo.sats_sho_win(
            tachyon,
            me,
            callname,
            race_infos[race_enum.sats_sho].get_colored_name(),
            race_infos[race_enum.toky_yus].get_colored_name(),
          );
          extra.attr_change = { [attr_enum.strength]: 5 };
          return;
        }
        break;
      case race_enum.toky_yus:
        if (extra.rank === 1) {
          key = 'toky_yus_win';
          args = [
            me,
            sys_get_colored_callname(this.id, 25),
            sys_get_colored_callname(this.id, 94),
          ];
        }
        break;
      case race_enum.kiku_sho:
        temp = RaceHistory.get(this.id);
        args = [
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          sys_get_colored_callname(25, 0),
          sys_get_colored_callname(25, this.id),
          love,
          extra.contestants.some((u) => u.index_chara === 25),
        ];
        extra.attr_change = [0, 10];
        if (extra.rank === 1) {
          key = 'kiku_sho_win';
          args.push(
            check_aim_race(temp.get(), race_enum.sats_sho, 1, 1) &&
              check_aim_race(temp.get(), race_enum.toky_yus, 1, 1),
            temp.get_values().every((e) => e.rank === 1),
          );
        } else {
          key = 'kiku_sho_lose';
        }
        break;
      case race_enum.sank_hai:
        if (extra.rank === 1) {
          key = 'sank_hai_win';
          extra.attr_change = [10];
        }
        break;
      case race_enum.tenn_spr:
        if (
          edu_marks.plan_b > 0 &&
          extra.contestants.some((u) => u.index_chara === 25)
        ) {
          key = 'tenn_spr_end';
          args = [
            get_chara_talk(25),
            me,
            callname,
            sys_get_colored_callname(this.id, 25),
            love,
            extra.rank === 1,
          ];
          extra.motivation_change = -1;
        }
        break;
      case race_enum.takz_kin:
        if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
          if (edu_marks.plan_b > 0) {
            if (extra.contestants.some((u) => u.index_chara === 25)) {
              key = 'takz_kin_end_b';
              args = [
                get_chara_talk(25),
                me,
                callname,
                sys_get_colored_callname(this.id, 25),
              ];
            }
          } else if (extra.rank === 1) {
            key = 'takz_kin_win_a';
            extra.attr_change = [0, 10];
            extra.pt_change = 10;
          }
        }
        break;
      case race_enum.prix_lat:
        if (
          edu_marks.plan_b > 0 &&
          era.get('cflag:32:育成回合计时') > 96 &&
          extra.rank === 1 &&
          extra.contestants.every((u) => u.index_chara !== 25)
        ) {
          key = 'prix_lat_win_b';
          args = [get_chara_talk(25), me, callname];
          extra.love_change = 10;
          sys_change_fame(-20);
          sys_hurt_uma(32, 1);
          era.set('cflag:32:殿堂', 1);
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:32:育成回合计时') > 96) {
          key = 'arim_kin_end_a';
          args = [
            get_chara_talk(25),
            me,
            callname,
            sys_get_colored_callname(this.id, 25),
            check_aim_race(RaceHistory.get(25).get(), race_enum.kiku_sho, 1, 1),
          ];
          add_event(
            event_hooks.week_end,
            new EventObject(this.id, cb_enum.edu).set_arg('ending'),
          );
        }
    }
    if (key) {
      await print_title_with_kojo(this.#kojo, key, tachyon, ...args);
    } else if (extra.rank === 1) {
      let do_sex =
        !edu_marks.race_sex &&
        era.get('love:32') >= 75 &&
        tachyon.sex_code !== 1 &&
        me.sex_code > 0 &&
        get_custom_check(this.id).is_want_make_love();
      if (do_sex) {
        edu_marks.race_sex = 1;
      }
      await print_title_with_kojo(
        this.#kojo,
        'race_end_win',
        tachyon,
        me,
        callname,
        do_sex,
      );
    } else {
      await super.race_end(tachyon, me, callname, hook, extra);
    }
  }

  async race_start(tachyon, me, callname, hook, extra) {
    const relation = era.get(`relation:${this.id}:0`);
    const love = era.get(`love:${this.id}`);
    let key = undefined;
    let args = [me, callname, relation, love];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:32:育成回合计时') === 23) {
          key = 'before_begin_race';
        }
        break;
      case race_enum.hope_sta:
        key = 'before_hope_sta';
        args = [
          me,
          callname,
          race_infos[race_enum.hope_sta].get_colored_name(),
        ];
        break;
      case race_enum.hoch_sho:
        key = 'before_hoch_sho';
        args = [
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          extra.contestants.some((u) => u.index_chara === 25),
        ];
        break;
      case race_enum.sats_sho:
        key = 'before_sats_sho';
        break;
      case race_enum.toky_yus:
        key = 'before_toky_yus';
        args = [me, callname, sys_get_colored_callname(this.id, 94)];
        break;
      case race_enum.kiku_sho:
        if (relation <= 225) {
          key = 'before_kiku_sho_low_rel';
        } else {
          key = 'before_kiku_sho_high_rel';
          args = [
            me,
            callname,
            sys_get_colored_callname(this.id, 25),
            extra.contestants.some((u) => u.index_chara === 25),
          ];
        }
        break;
      case race_enum.sank_hai:
        key = 'before_sank_hai';
        args = [
          me,
          callname,
          sys_get_colored_callname(this.id, 5),
          love,
          extra.contestants.some((u) => u.index_chara === 25),
        ];
        if (love >= 75 && tachyon.sex_code !== 1 && me.sex_code > 0) {
          begin_and_init_ero(0, 32);
          if (
            era.get(`cflag:${this.id}:妊娠阶段`) ===
              1 << pregnant_stage_enum.no &&
            !era.get(`cflag:${this.id}:经期`) &&
            !era.get(`status:${this.id}:短效避孕药`) &&
            !era.get(`status:${this.id}:长效避孕药`) &&
            !CharaInmon.get(this.id).on(plugin_enum.no_preg)
          ) {
            era.set(`status:${this.id}:短效避孕药`, 1);
          }
          set_palam_to_max(0, part_enum.penis);
          set_palam_to_max(32, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(32, part_enum.virgin),
            false,
          );
          end_ero_and_train();
        }
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:32:育成回合计时') > 96) {
          if (new TachyonEduMarks().plan_b > 0) {
            key = 'before_takz_kin_b';
          } else {
            key = 'before_takz_kin_a';
          }
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:32:育成回合计时') > 96) {
          if (new TachyonEduMarks().plan_b > 0) {
            key = 'before_arim_kin_b';
            args = [
              get_chara_talk(25),
              me,
              callname,
              sys_get_colored_callname(this.id, 25),
              sys_get_callname(25, 0),
              sys_get_colored_callname(25, this.id),
              race_infos[race_enum.arim_kin].get_colored_name(),
            ];
          } else {
            key = 'before_arim_kin_a';
            args = [
              get_chara_talk(25),
              me,
              callname,
              sys_get_colored_callname(this.id, 25),
            ];
          }
        }
    }
    if (key) {
      await print_title_with_kojo(this.#kojo, key, tachyon, ...args);
    } else {
      return await super.race_start(tachyon, me, callname, hook, extra);
    }
  }

  async train(attr) {
    if (attr === attr_enum.intelligence) {
      return await super.train(attr);
    }
    const tachyon = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const callname = sys_get_callname(this.id, 0);
    const rel = era.get('relation:32:0');
    const love = era.get('love:32');
    const moti = era.get('cflag:32:干劲');
    const stmn_rat = era.get('base:32:体力') / era.get('maxbase:32:体力');
    const edu_marks = new TachyonEduMarks();
    if (love >= 75 && rel > 75 && stmn_rat > 0.45 && Math.random() < 0.3) {
      if (moti >= 0) {
        await this.#kojo.train_kiss(tachyon, callname);
        update_kiss_exp(get_date_obj(), this.id, 0);
      } else if ((await this.#kojo.train_sex(tachyon, me)) === 1) {
        await quick_into_sex(this.id);
        return true;
      }
    } else if (
      rel > 225 &&
      moti >= 0 &&
      stmn_rat <= 0.45 &&
      !edu_marks.help_tyr &&
      Math.random() < 0.25
    ) {
      edu_marks.help_tyr = 1;
      await print_title_with_kojo(
        this.#kojo,
        'tr_help_tyr',
        tachyon,
        get_chara_talk(25),
        me,
        callname,
        sys_get_colored_callname(25, this.id),
      );
    } else if (
      moti < 0 &&
      stmn_rat < 0.45 &&
      me.sex_code === 1 &&
      tachyon.sex_code !== 1
    ) {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            'tr_incm_cmb',
            tachyon,
            me,
            callname,
          )
        )[0] === 1
      ) {
        add_jewel_reward(32, 10, 100);
        sys_like_chara(32, 0, -10);
        await era.waitAnyKey();
      } else {
        edu_marks.train_stop = 1;
        era.println();
        sys_change_motivation(32, 1) && (await era.waitAnyKey());
        return true;
      }
    } else {
      await this.#kojo.train(
        tachyon,
        me,
        callname,
        sys_get_colored_callname(this.id, 25),
        rel,
        love,
        moti,
        stmn_rat,
      );
    }
  }

  async train_fail(tachyon, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      await CustomizedEdu.print_fail_info_in_train(
        tachyon,
        extra.train,
        extra.fumble,
      );
      return;
    }
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    const edu_marks = new TachyonEduMarks();
    const fail_again = Math.random() < extra.args.ratio.fail_again;
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'train_fail',
          tachyon,
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          edu_marks.plan_b > 0,
          sys_reg_race(this.id).curr.race === race_enum.toky_yus,
          edu_marks.train_fail,
          fail_again,
        )
      )[0] === 1
    ) {
      if (era.get('love:32') >= 50) {
        edu_marks.train_fail = Math.min(edu_marks.train_fail + 1, 4);
      }
      hook.arg = 0;
    } else if (fail_again) {
      hook.arg = -1;
    } else {
      hook.arg = 1;
    }
  }

  async train_success(tachyon, me, callname, hook, extra) {
    await this.#kojo.train_success(
      tachyon,
      me,
      callname,
      sys_get_colored_callname(this.id, 25),
      extra.stamina_ratio,
      new TachyonEduMarks().plan_b > 0,
    );
    era.println();
    if (
      !sys_check_remote(this.id) &&
      !era.get('status:32:摸鱼') &&
      Math.random() < extra.stamina_ratio * 0.2
    ) {
      hook.arg =
        (
          await print_title_with_kojo(
            this.#kojo,
            era.get('relation:32:0') > 225
              ? 'ts_add_high_rel'
              : 'ts_add_low_rel',
            tachyon,
            me,
            callname,
          )
        )[0] === 1;
    }
  }

  async week_end(tachyon, me, callname, hook, extra, ebj) {
    const edu_marks = new TachyonEduMarks();
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 'beginning':
        await print_title_with_kojo(this.#kojo, ebj.arg, tachyon, me);
        era.set('callname:32:0', 'trainer32');
        if (era.get('cflag:25:招募状态') !== recruit_flags.yes) {
          era.set('callname:25:0', `trainer25t${+(me.sex_code !== 1)}`);
        }
        break;
      case 47 + 23:
        await print_title_with_kojo(this.#kojo, 'we_47_23', tachyon, me);
        wait = all_reward_in_event(this.id, { attr: [20] });
        break;
      case 'triple_crowns':
        await print_title_with_kojo(
          this.#kojo,
          'we_triple_crowns',
          tachyon,
          get_chara_talk(25),
          get_chara_talk(94),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          era.get('relation:32:0'),
          era.get('love:32'),
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 20 },
        });
        break;
      case 'limited_tachyon':
        await print_title_with_kojo(
          this.#kojo,
          'we_limited_tachyon',
          tachyon,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
        );
        edu_marks.glass_leg = 0;
        edu_marks.limited = 1;
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 47 + 47:
        await print_title_with_kojo(
          this.#kojo,
          'we_b_47_47',
          tachyon,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          sys_reg_race(25).curr.race === race_enum.arim_kin,
        );
        break;
      case 95 + 15:
        await print_title_with_kojo(
          this.#kojo,
          'we_b_95_15',
          tachyon,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          sys_get_callname(25, 0),
        );
        wait = all_reward_in_event(this.id, { pt: 20 });
        break;
      case 95 + 18:
        edu_marks.tenn_spr = 0;
        await print_title_with_kojo(
          this.#kojo,
          'we_b_95_18',
          tachyon,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          era.get('relation:32:0'),
          era.get('love:32'),
        );
        wait = all_reward_in_event(this.id, { motivation: 1, pt: 20 });
        break;
      case 95 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return false;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_a_95_32',
          tachyon,
          me,
          callname,
          era.get('relation:32:0'),
          era.get('love:32'),
          race_infos[race_enum.kobe_hai].get_colored_name(),
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        break;
      case 95 + 35:
        await print_title_with_kojo(
          this.#kojo,
          'we_a_95_35',
          tachyon,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, { pt: 10 });
        break;
      case 95 + 36:
        await print_title_with_kojo(
          this.#kojo,
          'we_b_95_36',
          tachyon,
          me,
          callname,
          race_infos[race_enum.prix_lat].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(5) });
        break;
      case 95 + 43:
        await print_title_with_kojo(
          this.#kojo,
          'we_a_95_43',
          tachyon,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          sys_get_colored_callname(25, 0),
          sys_get_colored_callname(25, this.id),
          era.get('relation:32:0'),
          era.get('love:32'),
          RaceHistory.get(this.id)
            .get_values()
            .every((r) => r.rank === 1),
          edu_marks.beat_c > 0,
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 5 },
          pt: 10,
        });
        break;
      case 'cf_japa_cup':
        await print_title_with_kojo(
          this.#kojo,
          'we_b_cf_japa_cup',
          tachyon,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
        );
        break;
      case 'ending':
        temp = [
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          sys_get_colored_callname(25, 0),
          sys_get_colored_callname(25, this.id),
          era.get('relation:32:0'),
          era.get('love:32'),
        ];
        if (edu_marks.plan_b > 0) {
          await print_event_name(
            this.#kojo.ending_b.title(tachyon, ...temp),
            tachyon,
          );
          await this.#kojo.ending_b(tachyon, ...temp);
        } else {
          await print_title_with_kojo(this.#kojo, 'ending_a', tachyon, ...temp);
        }
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(tachyon, me, callname, hook, extra, ebj) {
    const edu_marks = new TachyonEduMarks();
    const relation = era.get(`relation:${this.id}:0`);
    const love = era.get(`love:${this.id}`);
    let wait = false;
    let temp;
    let args = [me, callname, relation, love];
    switch (ebj?.arg) {
      case 'try_drug':
        temp = [
          get_random_value(1, 5),
          era.get('exp:32:性爱次数') > 0 &&
            era.get('relation:32:0') > 225 &&
            get_sex_acceptable(this.id) >= 0 &&
            check_pregnant_unprotect(0),
        ];
        await print_title_with_kojo(
          this.#kojo,
          ebj.arg,
          tachyon,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          temp[0],
          temp[1],
        );
        switch (temp[0]) {
          case 1:
            wait = all_reward_in_event(this.id, { attr: [5], motivation: -1 });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { attr: [0, 5] });
            break;
          case 3:
            wait = all_reward_in_event(this.id, {
              attr: [0, 0, 5],
              motivation: 1,
            });
            break;
          case 4:
            if (temp[1]) {
              await quick_into_sex(32);
            } else {
              wait = all_reward_in_event(this.id, {
                attr: { [attr_enum.toughness]: 10 },
                love: 5,
              });
              wait =
                all_reward_in_event(0, {
                  attr: { [attr_enum.toughness]: 10 },
                }) || wait;
            }
            break;
          case 5:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.intelligence]: 5 },
            });
        }
        break;
      case 15:
        await print_title_with_kojo(this.#kojo, 'ws_15', tachyon, ...args);
        if (
          love >= 50 &&
          relation > 225 &&
          tachyon.sex_code !== 1 &&
          me.sex_code > 0
        ) {
          await quick_into_sex(this.id);
        }
        break;
      case 36:
        await print_title_with_kojo(
          this.#kojo,
          'ws_36',
          tachyon,
          get_chara_talk(94),
          me,
          callname,
          relation,
          love,
          race_infos[race_enum.hope_sta].get_colored_name(),
        );
        break;
      case 47 + 1:
        era.set('cflag:32:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              tachyon,
              me,
              callname,
              relation,
              check_aim_race(
                RaceHistory.get(this.id).get(),
                race_enum.hope_sta,
                0,
                1,
              ),
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, { attr: new Array(5).fill(5) });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { pt: 20 });
            break;
          case 3:
            wait = all_reward_in_event(this.id, {
              attr: [0, 20],
              motivation: -1,
            });
        }
        break;
      case 47 + 5:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_5',
          tachyon,
          me,
          callname,
          relation,
          race_infos[race_enum.hope_sta].get_colored_name(),
          race_infos[race_enum.hoch_sho].get_colored_name(),
          race_infos[race_enum.sats_sho].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, { attr: [10] });
        break;
      case 47 + 25:
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_a_or_b',
              tachyon,
              get_chara_talk(9),
              get_chara_talk(25),
              me,
              callname,
              sys_get_colored_callname(this.id, 25),
            )
          )[0] === 1
        ) {
          await this.#kojo.ws_a_advanced(tachyon, me, callname, relation, love);
          await print_event_name(this.#kojo.ws_a_advanced.title, tachyon);
          edu_marks.uma_limit = 0;
          sys_change_fame(-20);
        } else {
          await this.#kojo.ws_b_betray(
            tachyon,
            get_chara_talk(25),
            me,
            callname,
            sys_get_colored_callname(this.id, 25),
            relation,
          );
          await print_event_name(this.#kojo.ws_b_betray.title, tachyon);
          edu_marks.plan_b = 1;
          edu_marks.glass_leg = 1;
          edu_marks.uma_limit = 0;
        }
        break;
      case 47 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return false;
        }
        if (
          (
            await print_title_with_kojo(this.#kojo, 'ws_a_47_29', tachyon, me)
          )[0] === 1
        ) {
          wait = sys_change_motivation(this.id, -1);
        } else {
          sys_change_fame(-20);
        }
        break;
      case 47 + 31:
        if (
          this.summer_non_beach ||
          (edu_marks.plan_b > 0 &&
            era.get('cflag:25:位置') !== era.get('cflag:0:位置'))
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        if (edu_marks.plan_b > 0) {
          await print_title_with_kojo(
            this.#kojo,
            'ws_b_47_31',
            tachyon,
            get_chara_talk(25),
            me,
            callname,
            sys_get_colored_callname(this.id, 25),
            relation,
          );
          wait = all_reward_in_event(this.id, { attr: [10] });
        } else {
          switch (
            (
              await print_title_with_kojo(
                this.#kojo,
                'ws_a_47_31',
                tachyon,
                me,
                callname,
              )
            )[0]
          ) {
            case 1:
              wait = all_reward_in_event(this.id, { attr: [0, 0, 10, 10] });
              wait = all_reward_in_event(0, {
                attr: [0, 0, 10, 10],
                base: [-200],
              });
              break;
            case 2:
              wait = all_reward_in_event(this.id, { attr: [0, 10, 10] });
              wait = all_reward_in_event(0, {
                attr: [0, 10, 10],
                base: [-200],
              });
              break;
            case 3:
              wait = all_reward_in_event(this.id, { attr: [10, 0, 0, 0, 10] });
              wait = all_reward_in_event(0, {
                attr: [10, 0, 0, 0, 10],
                base: [-400],
              });
          }
        }
        break;
      case 47 + 40:
        await print_title_with_kojo(
          this.#kojo,
          'ws_b_47_40',
          tachyon,
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          sys_reg_race(25).curr.race === race_enum.kiku_sho,
        );
        break;
      case 47 + 41:
        await print_title_with_kojo(
          this.#kojo,
          'ws_a_47_41',
          tachyon,
          me,
          callname,
        );
        break;
      case 95 + 1:
        era.set('cflag:32:节日事件标记', 0);
        switch (
          (edu_marks.plan_b > 0
            ? await print_title_with_kojo(
                this.#kojo,
                'ws_b_95_1',
                tachyon,
                get_chara_talk(25),
                me,
                callname,
                sys_get_colored_callname(this.id, 25),
                relation,
              )
            : await print_title_with_kojo(
                this.#kojo,
                'ws_a_95_1',
                tachyon,
                me,
                callname,
                sys_get_colored_callname(this.id, 9),
                sys_get_colored_callname(this.id, 25),
                relation,
                love,
                new TachyonLifeMarks().cook,
              ))[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              base: [era.get('maxbase:32:体力') * 0.2],
            });
            break;
          case 2:
            all_reward_in_event(this.id, {
              attr: { [get_random_entry(base_attr_list)]: 20 },
            });
            break;
          case 3:
            all_reward_in_event(this.id, { pt: 30 });
        }
        break;
      case 95 + 6:
        era.set('cflag:32:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_6',
          tachyon,
          me,
          callname,
          relation,
          love,
        );
        if (love >= 75) {
          begin_and_init_ero(0, 32);
          await quick_make_love(
            new EroParticipant(32, part_enum.mouth),
            new EroParticipant(0, part_enum.mouth),
            false,
          );
          await print_ero_page(32, true);
          await end_ero_and_show_result();
        } else if (
          love >= 50 &&
          era.get('exp:0:性爱次数') > era.get('exp:0:睡奸次数')
        ) {
          begin_and_init_ero(0, 32);
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(32, part_enum.breast),
            false,
          );
          end_ero_and_train();
        }
        new TachyonLifeMarks().choco = 1;
        break;
      case 95 + 14:
        era.set('cflag:32:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          edu_marks.plan_b > 0 ? 'ws_b_95_14' : 'ws_a_95_14',
          tachyon,
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
        );
        wait = edu_marks.plan_b > 0 && sys_change_motivation(this.id, 1);
        break;
      case 95 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return false;
        }
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_95_29',
              tachyon,
              me,
              callname,
              relation,
              love,
              edu_marks.plan_b > 0,
              race_infos[race_enum.prix_lat].get_colored_name(),
              race_infos[race_enum.arim_kin].get_colored_name(),
            )
          )[0] === 1
        ) {
          begin_and_init_ero(0, 32);
          set_palam_to_max(32, part_enum.breast);
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(32, part_enum.breast),
            false,
          );
          set_palam_to_max(32, part_enum.masochism);
          await quick_make_love(
            new EroParticipant(0, part_enum.abuse),
            new EroParticipant(32, part_enum.masochism),
            false,
          );
          end_ero_and_train(true);
        }
        break;
      case 95 + 31:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return false;
        }
        if (edu_marks.plan_b > 0) {
          await print_title_with_kojo(
            this.#kojo,
            'ws_b_95_31',
            tachyon,
            get_chara_talk(25),
            me,
            callname,
            sys_get_colored_callname(this.id, 25),
            love,
            race_infos[race_enum.tenn_spr].get_colored_name(),
            race_infos[race_enum.takz_kin].get_colored_name(),
            race_infos[race_enum.prix_lat].get_colored_name(),
          );
          wait = all_reward_in_event(this.id, {
            attr: {
              [attr_enum.toughness]: 20,
              [attr_enum.intelligence]: 10,
            },
            love: 5,
          });
        } else {
          await print_title_with_kojo(
            this.#kojo,
            'ws_a_95_31',
            tachyon,
            me,
            callname,
            sys_get_colored_callname(this.id, 2),
            love,
          );
          wait = all_reward_in_event(this.id, {
            attr: {
              [attr_enum.toughness]: 5,
              [attr_enum.intelligence]: 10,
            },
          });
        }
        break;
      case 95 + 35:
        if (
          era.get('cflag:0:位置') !== location_enum.paris ||
          era.get('cflag:32:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        if (era.get('cflag:25:位置') === location_enum.paris) {
          return false;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_b_95_35',
          tachyon,
          get_chara_talk(25),
          me,
          sys_get_colored_callname(this.id, 25),
        );
        wait = all_reward_in_event(this.id, { relation: 100, love: 10 });
        break;
      case 95 + 37:
        if (
          era.get('cflag:0:位置') !== location_enum.paris ||
          era.get('cflag:32:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        if (era.get('cflag:25:位置') === location_enum.paris) {
          return false;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_b_95_37',
          tachyon,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          sys_get_colored_callname(25, 0),
          sys_get_colored_callname(25, this.id),
        );
        wait = all_reward_in_event(this.id, { attr: [5, 5] });
        break;
      case 95 + 39:
        if (edu_marks.plan_b > 0) {
          await print_title_with_kojo(
            this.#kojo,
            'ws_b_95_39',
            tachyon,
            get_chara_talk(25),
            me,
            callname,
            sys_get_colored_callname(this.id, 25),
            sys_get_colored_callname(25, 0),
            sys_get_colored_callname(25, this.id),
            relation,
            love,
            race_infos[race_enum.prix_lat].get_colored_name(),
          );
        } else {
          await print_title_with_kojo(
            this.#kojo,
            'ws_a_95_39',
            tachyon,
            get_chara_talk(25),
            me,
            callname,
            sys_get_colored_callname(this.id, 25),
            relation,
            love,
          );
        }
        break;
      case 95 + 47:
        await print_title_with_kojo(
          this.#kojo,
          'ws_b_95_47',
          tachyon,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
          love,
        );
        if (love < 75) {
          era.set('love:32', 75);
        }
        break;
      case 95 + 48:
        era.set('cflag:32:节日事件标记', 0);
        if (edu_marks.plan_b > 0) {
          edu_marks.chris = (
            await print_title_with_kojo(
              this.#kojo,
              'ws_b_95_48',
              tachyon,
              get_chara_talk(25),
              get_chara_talk(33),
              me,
              callname,
              sys_get_colored_callname(this.id, 25),
              sys_get_callname(25, 0),
              check_aim_race(
                RaceHistory.get(this.id).get(),
                race_enum.prix_lat,
                2,
                1,
              ),
            )
          )[0];
          wait = all_reward_in_event(
            this.id,
            edu_marks.chris >= 2
              ? { love: 5, relation: -20 }
              : { love: 10, relation: 100 },
          );
        } else {
          if (
            (
              await print_title_with_kojo(
                this.#kojo,
                'ws_a_95_48',
                tachyon,
                me,
                callname,
                relation,
                love,
              )
            )[0] === 1 &&
            love < 75 &&
            love >= 50
          ) {
            update_kiss_exp(get_date_obj(), this.id, 0);
          }
          wait = all_reward_in_event(this.id, {
            base: [era.get('maxbase:32:0') * 0.4],
            relation: 100,
          });
        }
        break;
      case 'palace':
        await CustomizedEdu.common_palace(tachyon, me);
        if (era.get('item:用途不明的眼镜') > 0) {
          era.drawLine();
          era.set('flag:当前位置', location_enum.gate);
          if (edu_marks.plan_b > 0) {
            await print_title_with_kojo(
              this.#kojo,
              'palace_b',
              tachyon,
              me,
              callname,
            );
          } else {
            await print_title_with_kojo(
              this.#kojo,
              'palace_a',
              tachyon,
              get_chara_talk(25),
              me,
              callname,
            );
          }
          era.set('flag:当前位置', location_enum.office);
        } else {
          await CustomizedEdu.common_palace_relation(tachyon, me);
        }
        break;
      case 'second_chance':
        await print_title_with_kojo(
          this.#kojo,
          ebj.arg,
          tachyon,
          me,
          callname,
          era.get('love:32'),
        );
        break;
      case 'drug_notice':
        {
          edu_marks.drug_notice = get_random_value(12, 36);
          const dice = Math.random();
          let effect;
          if (dice < 0.1) {
            effect = 0;
          } else if (dice < 0.5) {
            effect = 1;
          } else if (dice < 0.9 && era.get('flag:角色性别') === 1) {
            effect = 2;
          } else {
            effect = 3;
          }
          const in_team_list = sys_filter_chara(
            'cflag',
            '招募状态',
            recruit_flags.yes,
          );
          const ret = await print_title_with_kojo(
            i18n().timon.random_events,
            'drug_notice',
            tachyon,
            me,
            effect,
          );
          if (ret[0] === 1) {
            switch (effect) {
              case 0:
                in_team_list
                  .filter((e) => era.get(`cflag:${e}:育成回合计时`) < 3 * 48)
                  .forEach((e) =>
                    era.set(
                      `talent:${e}:练习X手`,
                      Math.min(era.get(`talent:${e}:练习X手`) + 1, 2),
                    ),
                  );
                break;
              case 1:
                in_team_list.forEach((e) => era.set(`status:${e}:健康茶`, 1));
                break;
              case 2:
                in_team_list.forEach(
                  (e) =>
                    era.get(`talent:${e}:泌乳`) === 0 &&
                    era.set(`talent:${e}:泌乳`, 2),
                );
                break;
              case 3:
                in_team_list.forEach((e) =>
                  sys_change_lust(e, get_random_value(500, 1500)),
                );
            }
          }
        }
        break;
      default:
        return await super.week_start(tachyon, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
