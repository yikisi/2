const era = require('#/era-electron');

const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const MayaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-24');
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

  async back_school(maya, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 24) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 'dokidoki_live':
        new MayaEduMarks().dokidoki_live = 2;
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'bs_dokidoki_live',
                maya,
                get_chara_talk(55),
                me,
                callname,
                sys_get_colored_callname(this.id, 3),
                sys_get_colored_callname(this.id, 55),
              )
            )[0] === 1
              ? { [attr_enum.endurance]: 10, [attr_enum.strength]: 10 }
              : { [attr_enum.toughness]: 20 },
        });
        break;
      case 'excited_live':
        new MayaEduMarks().excited_live = 2;
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'bs_excited_live',
                maya,
                me,
                callname,
              )
            )[0] === 1
              ? { [attr_enum.speed]: 20 }
              : { [attr_enum.toughness]: 20 },
        });
        break;
      case 'taisecu_hito':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'bs_taisecu_hito',
                maya,
                get_chara_talk(5),
                me,
                callname,
                sys_get_colored_callname(this.id, 5),
              )
            )[0] === 1
              ? { [attr_enum.speed]: 20 }
              : { [attr_enum.toughness]: 20 },
        });
        break;
      case 'race_lesson':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'bs_race_lesson',
                maya,
                get_chara_talk(52),
                callname,
                sys_get_colored_callname(this.id, 52),
                sys_get_colored_callname(52, 0),
                sys_get_colored_callname(52, this.id),
              )
            )[0] === 1
              ? { [attr_enum.endurance]: 20 }
              : { [attr_enum.strength]: 20 },
        });
    }
    wait && (await era.waitAnyKey());
  }

  async office_study(maya, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 'model_secret':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'os_model_secret',
                maya,
                get_chara_talk(29),
                get_chara_talk(40),
                me,
                callname,
                sys_get_colored_callname(this.id, 29),
                sys_get_colored_callname(this.id, 40),
                sys_get_colored_callname(29, 40),
                sys_get_colored_callname(40, this.id),
                sys_get_colored_callname(40, 29),
              )
            )[0] === 1
              ? { [attr_enum.endurance]: 20 }
              : { [attr_enum.speed]: 20 },
        });
        break;
      case 'maya_reading':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'os_maya_reading',
                maya,
                me,
                callname,
              )
            )[0] === 1
              ? { [attr_enum.strength]: 10, [attr_enum.toughness]: 10 }
              : { [attr_enum.intelligence]: 20 },
        });
        break;
      case 'maya_takeoff':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'os_maya_takeoff',
                maya,
                me,
                callname,
              )
            )[0] === 1
              ? { [attr_enum.speed]: 20 }
              : { [attr_enum.endurance]: 20 },
        });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_church(maya, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 24) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 95 + 1) {
      return;
    }
    let wait = false;
    era.set('cflag:24:节日事件标记', 0);
    switch (
      (
        await print_title_with_kojo(
          this.#kojo,
          'oc_95_1',
          maya,
          me,
          callname,
          sys_get_colored_callname(this.id, 16),
        )
      )[0]
    ) {
      case 1:
        wait = all_reward_in_event(this.id, { base: [300] });
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 10),
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { pt: 70 });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_start(maya, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 24) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 95 + 2:
        temp = get_random_value(0, 9);
        await print_title_with_kojo(
          this.#kojo,
          'os_95_2',
          maya,
          me,
          callname,
          sys_get_colored_callname(this.id, 3),
          sys_get_colored_callname(this.id, 16),
          temp,
        );
        switch (temp) {
          case 0:
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: base_attr_list.map(() => 10),
              base: [300],
              motivation: 2,
            });
            break;
          case 2:
          case 3:
          case 4:
            wait = all_reward_in_event(this.id, { base: [300], motivation: 1 });
            break;
          case 5:
          case 6:
          case 7:
          case 8:
            wait = all_reward_in_event(this.id, { base: [200] });
            break;
          case 9:
            wait = all_reward_in_event(this.id, {
              base: [200],
              motivation: -1,
            });
        }
        break;
      case 'kirakira_kessin':
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'os_kirakira_kessin',
              maya,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, { attr: [10, 10] });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { attr: [0, 0, 20] });
            break;
          case 3:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.intelligence]: 20 },
            });
        }
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async race_end(maya, me, callname, hook, extra) {
    let key;
    /** @type {[]} */
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:24:育成回合计时') < 48 && extra.rank === 1) {
          key = 'begin_race_win';
        }
        break;
      case race_enum.kiku_sho:
        key = 'kiku_sho_win';
        args = [
          get_chara_talk(12),
          get_chara_talk(16),
          get_chara_talk(303),
          me,
          callname,
          sys_get_colored_callname(this.id, 16),
          race_infos[race_enum.kiku_sho].get_colored_name(),
          race_infos[race_enum.arim_kin].get_colored_name(),
        ];
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:24:育成回合计时') < 96) {
          if (extra.rank === 1) {
            key = 'arim_kin_win_c';
          } else {
            key = 'arim_kin_lose_c';
          }
          args = [
            get_chara_talk(12),
            get_chara_talk(16),
            me,
            callname,
            sys_get_colored_callname(this.id, 16),
            sys_get_colored_callname(12, this.id),
            race_infos[race_enum.arim_kin].get_colored_name(),
            race_infos[race_enum.hans_dai].get_colored_name(),
          ];
        } else if (extra.rank === 1) {
          key = 'arim_kin_win_s';
          args = [
            get_chara_talk(16),
            get_chara_talk(17),
            me,
            callname,
            sys_get_colored_callname(this.id, 16),
            sys_get_colored_callname(17, 16),
          ];
        }
        break;
      case race_enum.hans_dai:
        key = extra.rank === 1 ? 'hans_dai_win' : 'hans_dai_lose';
        args = [
          get_chara_talk(12),
          get_chara_talk(16),
          callname,
          sys_get_colored_callname(this.id, 12),
          sys_get_colored_callname(this.id, 16),
          sys_get_colored_callname(12, this.id),
          race_infos[race_enum.hans_dai].get_colored_name(),
          race_infos[race_enum.tenn_spr].get_colored_name(),
        ];
        break;
      case race_enum.tenn_spr:
        key = extra.rank === 1 ? 'tenn_spr_win' : 'tenn_spr_lose';
        args = [
          get_chara_talk(12),
          get_chara_talk(16),
          callname,
          sys_get_colored_callname(this.id, 12),
          sys_get_colored_callname(this.id, 16),
          sys_get_colored_callname(12, this.id),
          race_infos[race_enum.arim_kin].get_colored_name(),
        ];
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:24:育成回合计时') > 96 && extra.rank === 1) {
          key = 'takz_kin_win_s';
          args = [get_chara_talk(12), get_chara_talk(16), callname];
        }
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:24:育成回合计时') > 96 && extra.rank === 1) {
          key = 'tenn_sho_win_s';
          args = [
            get_chara_talk(3),
            get_chara_talk(16),
            get_chara_talk(17),
            callname,
            sys_get_colored_callname(3, this.id),
            sys_get_colored_callname(16, 17),
            sys_get_colored_callname(17, 16),
            race_infos[race_enum.arim_kin].get_colored_name(),
          ];
        }
    }
    if (!key) {
      if (extra.rank === 1) {
        key = 'race_end_win';
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else if (extra.rank <= 10) {
        key = 'race_end_10';
      } else {
        key = 'race_end_lose';
      }
    }
    await print_title_with_kojo(this.#kojo, key, maya, ...args);
  }

  async race_start(maya, me, callname, hook, extra) {
    let key;
    /** @type {[]} */
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:24:育成回合计时') < 48) {
          key = 'before_begin_race';
        }
        break;
      case race_enum.kiku_sho:
        key = 'before_kiku_sho';
        args.push(race_infos[race_enum.kiku_sho].get_colored_name());
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:24:育成回合计时') < 96) {
          key = 'before_arim_kin_c';
          args = [
            get_chara_talk(12),
            get_chara_talk(16),
            callname,
            sys_get_colored_callname(16, 12),
            race_infos[race_enum.arim_kin].get_colored_name(),
          ];
        } else {
          key = 'before_arim_kin_s';
          args = [
            get_chara_talk(16),
            callname,
            sys_get_colored_callname(this.id, 16),
            sys_get_colored_callname(16, this.id),
            race_infos[race_enum.arim_kin].get_colored_name(),
          ];
        }
        break;
      case race_enum.hans_dai:
        key = 'before_hans_dai';
        args = [
          get_chara_talk(16),
          me,
          callname,
          sys_get_colored_callname(this.id, 16),
          race_infos[race_enum.hans_dai].get_colored_name(),
        ];
        break;
      case race_enum.tenn_spr:
        key = 'before_tenn_spr';
        args = [
          get_chara_talk(3),
          get_chara_talk(12),
          get_chara_talk(16),
          me,
          callname,
          sys_get_colored_callname(this.id, 3),
          sys_get_colored_callname(3, 12),
          sys_get_colored_callname(3, 16),
          sys_get_colored_callname(3, this.id),
          sys_get_colored_callname(12, 0),
          race_infos[race_enum.hans_dai].get_colored_name(),
          race_infos[race_enum.tenn_spr].get_colored_name(),
          race_infos[race_enum.arim_kin].get_colored_name(),
        ];
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:24:育成回合计时') > 96) {
          key = 'before_takz_kin_s';
          args = [
            get_chara_talk(12),
            get_chara_talk(16),
            sys_get_colored_callname(this.id, 16),
            sys_get_colored_callname(12, this.id),
            race_infos[race_enum.takz_kin].get_colored_name(),
          ];
        }
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:24:育成回合计时') > 96) {
          key = 'before_tenn_sho_s';
          args = [
            get_chara_talk(3),
            get_chara_talk(12),
            callname,
            sys_get_colored_callname(this.id, 3),
            sys_get_colored_callname(3, 12),
            sys_get_colored_callname(3, this.id),
            sys_get_colored_callname(12, this.id),
            race_infos[race_enum.tenn_sho].get_colored_name(),
            race_infos[race_enum.arim_kin].get_colored_name(),
          ];
        }
    }
    if (!key) {
      if (
        Math.random() <
        (0.6 * era.get('base:24:体力')) / era.get('maxbase:24:体力')
      ) {
        key = 'race_start_low_sta';
      } else {
        return await super.race_start(maya, me, callname, hook, extra);
      }
    }
    await print_title_with_kojo(this.#kojo, key, maya, ...args);
  }

  async school_atrium(maya, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 24) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 'adv_game':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'sa_adv_game',
                maya,
                get_chara_talk(3),
                me,
                callname,
                sys_get_colored_callname(this.id, 3),
                sys_get_colored_callname(3, this.id),
              )
            )[0] === 1
              ? { [attr_enum.strength]: 20 }
              : { [attr_enum.toughness]: 20 },
        });
        break;
      case 'star_wish':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'sa_star_wish',
                maya,
                get_chara_talk(55),
                me,
                callname,
                sys_get_colored_callname(this.id, 55),
              )
            )[0] === 1
              ? { [attr_enum.intelligence]: 20 }
              : { [attr_enum.speed]: 20 },
        });
        break;
      case 'sweet_present':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'sa_sweet_present',
                maya,
                get_chara_talk(28),
                get_chara_talk(51),
                me,
                callname,
                sys_get_colored_callname(this.id, 28),
                sys_get_colored_callname(this.id, 51),
              )
            )[0] === 1
              ? { [attr_enum.endurance]: 20 }
              : { [attr_enum.intelligence]: 20 },
        });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async train_fail(maya, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return await super.train_fail(maya, me, callname, hook, extra);
    }
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    const fail_again = Math.random() < extra.args.ratio.fail_again;
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          extra.fumble ? 'train_fumble' : 'train_fail',
          maya,
          me,
          callname,
          fail_again,
        )
      )[0] === 1
    ) {
      hook.arg = 0;
    } else if (fail_again) {
      hook.arg = -1;
    } else {
      hook.arg = 1;
    }
  }

  async train_success_add(maya, me, callname, hook, extra) {
    return (
      (
        await print_title_with_kojo(
          this.#kojo,
          'ts_add',
          maya,
          get_chara_talk(3),
          me,
          callname,
          sys_get_colored_callname(this.id, 3),
          sys_get_colored_callname(this.id, 17),
          sys_get_colored_callname(3, 17),
          sys_get_colored_callname(3, this.id),
        )
      )[0] === 1
    );
  }

  async week_end(maya, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return true;
        }
        await print_title_with_kojo(this.#kojo, 'we_47_32', maya, me, callname);
        break;
      case 95 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return true;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_32',
          maya,
          get_chara_talk(16),
          me,
          callname,
        );
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(maya, me, callname, hook, extra, ebj) {
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 16:
        await print_title_with_kojo(this.#kojo, 'ws_16', maya, me, callname);
        break;
      case 'date':
        await print_title_with_kojo(this.#kojo, 'ws_date', maya, me, callname);
        break;
      case 47 + 1:
        era.set('cflag:24:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              maya,
              me,
              callname,
              sys_get_colored_callname(this.id, 5),
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, { attr: [0, 20] });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { base: [400] });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 40 });
        }
        break;
      case 47 + 3:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_3',
          maya,
          get_chara_talk(3),
          get_chara_talk(16),
          get_chara_talk(17),
          me,
          callname,
          sys_get_colored_callname(this.id, 3),
          sys_get_colored_callname(this.id, 16),
          sys_get_colored_callname(3, 0),
          sys_get_colored_callname(3, this.id),
          sys_get_colored_callname(17, 3),
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
          race_infos[race_enum.kiku_sho].get_colored_name(),
        );
        break;
      case 47 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return true;
        }
        await print_title_with_kojo(this.#kojo, 'ws_47_29', maya, me, callname);
        break;
      case 47 + 30:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return true;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_30',
          maya,
          get_chara_talk(16),
          me,
          callname,
          sys_get_colored_callname(this.id, 16),
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
          race_infos[race_enum.kiku_sho].get_colored_name(),
        );
        break;
      case 47 + 31:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return true;
        }
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'ws_47_31',
                maya,
                get_chara_talk(55),
                get_chara_talk(60),
                me,
                callname,
                sys_get_colored_callname(this.id, 55),
                sys_get_colored_callname(this.id, 60),
                sys_get_colored_callname(55, this.id),
                sys_get_colored_callname(55, 60),
                sys_get_colored_callname(60, 55),
                race_infos[race_enum.kiku_sho].get_colored_name(),
              )
            )[0] === 1
              ? { [attr_enum.strength]: 20 }
              : { [attr_enum.toughness]: 20 },
        });
        break;
      case 95 + 4:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_4',
          maya,
          get_chara_talk(3),
          get_chara_talk(12),
          get_chara_talk(16),
          get_chara_talk(60),
          me,
          callname,
          sys_get_colored_callname(this.id, 12),
          sys_get_colored_callname(3, this.id),
          sys_get_colored_callname(12, 0),
          sys_get_colored_callname(12, this.id),
          sys_get_colored_callname(60, 12),
          RaceHistory.get(this.id).get_result(47 + 48)?.race ===
            race_enum.arim_kin,
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        break;
      case 95 + 6:
        era.set('cflag:24:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_6',
          maya,
          get_chara_talk(29),
          me,
          callname,
          sys_get_colored_callname(this.id, 29),
          sys_get_colored_callname(29, this.id),
        );
        break;
      case 95 + 14:
        era.set('cflag:24:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_14',
          maya,
          get_chara_talk(6),
          get_chara_talk(12),
          get_chara_talk(40),
          get_chara_talk(46),
          me,
          callname,
          sys_get_colored_callname(this.id, 12),
        );
        temp = sys_get_chara_pseudo(this.id);
        await simulation_game_in_event(
          temp,
          void 0,
          race_enum.siri_sta,
          i18n().cl_fans,
        );
        await this.#kojo.ws_95_14_end(
          maya,
          get_chara_talk(12),
          get_chara_talk(46),
          me,
          callname,
          sys_get_colored_callname(this.id, 12),
          sys_get_colored_callname(12, 0),
          sys_get_colored_callname(12, this.id),
          temp.rank.curr,
        );
        break;
      case 95 + 20:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_20',
          maya,
          get_chara_talk(3),
          get_chara_talk(12),
          get_chara_talk(16),
          callname,
          sys_get_colored_callname(3, 12),
          sys_get_colored_callname(3, this.id),
          sys_get_colored_callname(12, this.id),
          race_infos[race_enum.takz_kin].get_colored_name(),
          race_infos[race_enum.tenn_sho].get_colored_name(),
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        break;
      case 95 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return true;
        }
        await print_title_with_kojo(this.#kojo, 'ws_95_29', maya, callname);
        break;
      case 95 + 48:
        era.set('cflag:24:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_48',
          maya,
          me,
          callname,
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        break;
      default:
        return await super.week_start(maya, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
