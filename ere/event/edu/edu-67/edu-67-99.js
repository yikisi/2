const era = require('#/era-electron');

const { sys_change_weight } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const DaiyaEduMarks99 = require('#/data/event/edu-event-marks/edu-event-marks-67-99');
const event_hooks = require('#/data/event/event-hooks');
const { attr_enum, fumble_result } = require('#/data/train-const');

const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id][99].edu;
  }

  async back_school(daiya, me, callname, hook, extra, ebj) {
    if (
      era.get('flag:当前互动角色') !== 67 ||
      era.get('flag:当前位置') !== location_enum.gate
    ) {
      if (era.get('flag:当前互动角色') === 67) {
        await era.printAndWait(i18n().kojo[this.id][99].notify_bs_event(daiya));
      }
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 'street_adv':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'bs_street_adv',
                daiya,
                get_chara_talk(48),
                me,
              )
            )[0] === 1
              ? { [attr_enum.intelligence]: 20 }
              : { [attr_enum.strength]: 20 },
        });
        break;
      case 'shopping':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'bs_shopping',
                daiya,
                get_chara_talk(7),
                get_chara_talk(14),
                get_chara_talk(25),
                get_chara_talk(49),
                get_chara_talk(70),
                me,
              )
            )[0] === 1
              ? { [attr_enum.endurance]: 20 }
              : { [attr_enum.toughness]: 20 },
        });
        break;
      case 'in_colorful':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'bs_in_colorful',
                daiya,
                get_chara_talk(24),
                get_chara_talk(45),
                me,
              )
            )[0] === 1
              ? { [attr_enum.speed]: 20 }
              : { [attr_enum.toughness]: 20 },
        });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async office_cook(daiya, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 67) {
      add_event(event_hooks.office_cook, ebj);
      return;
    }
    if (ebj?.arg !== 'banned_coffee') {
      return;
    }
    let wait;
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'oc_banned_coffee',
          daiya,
          get_chara_talk(25),
        )
      )[0] === 1
    ) {
      wait = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
    } else {
      wait = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async office_study(daiya, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 67) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'dance_practice') {
      return;
    }
    let wait;
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'os_dance_practice',
          daiya,
          get_chara_talk(3),
          me,
        )
      )[0] === 1
    ) {
      wait = get_attr_and_print_in_event(67, [20, 0, 0, 0, 0], 0);
    } else {
      wait = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(daiya, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 67) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 95 + 2) {
      return;
    }
    let wait = false;
    let result;
    let dice = Math.random();
    dice -= 0.1;
    if (dice < 0) {
      result = 0;
    } else {
      dice -= 0.1;
      if (dice < 0) {
        result = 1;
      } else {
        dice -= 0.4;
        if (dice < 0) {
          result = 2;
        } else {
          dice -= 0.3;
          if (dice < 0) {
            result = 3;
          } else {
            result = 4;
          }
        }
      }
    }
    await print_title_with_kojo(this.#kojo, 'os_95_2', daiya, me, result);
    switch (result) {
      case 0:
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(10),
          base: [300],
          motivation: 2,
        });
        break;
      case 1:
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(8),
          base: [200],
          motivation: 2,
        });
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          base: [200],
          motivation: 1,
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { base: [200] });
        break;
      case 4:
        wait = all_reward_in_event(this.id, { base: [200], motivation: -1 });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_start(daiya, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 67) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 'win_g1':
        await print_title_with_kojo(
          this.#kojo,
          'os_win_g1',
          daiya,
          get_chara_talk(68),
          me,
        );
        break;
      case 95 + 1:
        era.set('cflag:67:节日事件标记', 0);
        switch (
          (await print_title_with_kojo(this.#kojo, 'os_95_1', daiya, me))[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, { base: [300] });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: new Array(5).fill(10),
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 70 });
        }
        break;
      case 'diamond_cotton':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'os_diamond_cotton',
                daiya,
                me,
              )
            )[0] === 1
              ? { [attr_enum.toughness]: 20 }
              : { [attr_enum.endurance]: 20 },
        });
        break;
      case 'high_place':
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'os_high_place',
              daiya,
              get_chara_talk(7),
              get_chara_talk(13),
              me,
            )
          )[0] === 1
        ) {
          wait = all_reward_in_event(this.id, { base: [100] });
        } else {
          sys_change_weight(67, 50);
          wait = all_reward_in_event(this.id, { base: [300] });
        }
        break;
      case 'fresh':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'os_fresh',
                daiya,
                get_chara_talk(68),
              )
            )[0] === 1
              ? { [attr_enum.speed]: 20 }
              : { [attr_enum.endurance]: 20 },
        });
        break;
      case 'heartbeat_excite':
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'os_heartbeat_excite',
              daiya,
              me,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.endurance]: 20 },
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.toughness]: 20 },
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.intelligence]: 20 },
            });
        }
        break;
      case 'satono_uma':
        await print_event_name(this.#kojo.os_satono_uma.title(daiya), daiya);
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await this.#kojo.os_satono_uma(
                daiya,
                get_chara_talk(27),
                get_chara_talk(74),
                me,
              )
            )[0] === 1
              ? { [attr_enum.intelligence]: 20 }
              : [0, 10, 10],
        });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async race_end(daiya, me, callname, hook, extra) {
    let key;
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:67:育成回合计时') < 48 && extra.rank === 1) {
          key = 'begin_race_win';
        }
        break;
      case race_enum.sats_sho:
        key = 'sats_sho_end';
        args = [
          me,
          callname,
          extra.rank,
          race_infos[race_enum.sats_sho].get_colored_name(),
        ];
        break;
      case race_enum.toky_yus:
        key = 'toky_yus_end';
        args = [
          get_chara_talk(303),
          me,
          extra.rank,
          race_infos[race_enum.tenn_spr].get_colored_name(),
          race_infos[race_enum.takz_kin].get_colored_name(),
        ];
        break;
      case race_enum.kiku_sho:
        key = 'kiku_sho_end';
        args = [
          get_chara_talk(68),
          me,
          extra.rank,
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
          race_infos[race_enum.arim_kin].get_colored_name(),
        ];
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:67:育成回合计时') < 96) {
          key = 'arim_kin_end_c';
          args = [
            get_chara_talk(68),
            get_chara_talk(303),
            me,
            extra.rank,
            race_infos[race_enum.sats_sho].get_colored_name(),
            race_infos[race_enum.arim_kin].get_colored_name(),
            race_infos[race_enum.sank_hai].get_colored_name(),
          ];
        } else if (extra.rank === 1) {
          key = 'arim_kin_win_s';
          args = [get_chara_talk(3), get_chara_talk(13), get_chara_talk(68)];
        }
        break;
      case race_enum.sank_hai:
        key = 'sank_hai_end';
        args = [
          get_chara_talk(3),
          get_chara_talk(13),
          get_chara_talk(68),
          me,
          extra.rank,
          race_infos[race_enum.tenn_spr].get_colored_name(),
        ];
        break;
      case race_enum.tenn_spr:
        key = 'tenn_spr_end';
        args = [
          get_chara_talk(3),
          get_chara_talk(13),
          get_chara_talk(68),
          me,
          extra.rank,
          race_infos[race_enum.takz_kin].get_colored_name(),
          race_infos[race_enum.kyot_dai].get_colored_name(),
          race_infos[race_enum.tenn_sho].get_colored_name(),
          race_infos[race_enum.japa_cup].get_colored_name(),
        ];
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:67:育成回合计时') > 96 && extra.rank === 1) {
          key = 'takz_kin_win_s';
          args = [get_chara_talk(68), me];
        }
        break;
      case race_enum.kyot_dai:
        if (era.get('cflag:67:育成回合计时') > 96 && extra.rank === 1) {
          key = 'kyot_dai_win_s';
          args = [get_chara_talk(13), me];
        }
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:67:育成回合计时') > 96 && extra.rank === 1) {
          key = 'tenn_sho_win_s';
          args = [
            get_chara_talk(3),
            get_chara_talk(13),
            get_chara_talk(68),
            me,
            race_infos[race_enum.tenn_sho].get_colored_name(),
            race_infos[race_enum.arim_kin].get_colored_name(),
          ];
        }
        break;
      case race_enum.japa_cup:
        if (era.get('cflag:67:育成回合计时') > 96 && extra.rank === 1) {
          key = 'japa_cup_win_s';
          args = [
            get_chara_talk(3),
            get_chara_talk(68),
            me,
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
    await print_title_with_kojo(this.#kojo, key, daiya, ...args);
  }

  async race_start(daiya, me, callname, hook, extra) {
    const edu_marks = new DaiyaEduMarks99();
    let key;
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:67:育成回合计时') > 48) {
          key = 'before_begin_race';
          args = [get_chara_talk(13), me];
        }
        break;
      case race_enum.sats_sho:
        key = 'before_sats_sho';
        args = [me, !edu_marks.run_g1];
        break;
      case race_enum.toky_yus:
        key = 'before_toky_yus';
        args = [
          me,
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
        ];
        break;
      case race_enum.kiku_sho:
        key = 'before_kiku_sho';
        args = [
          get_chara_talk(68),
          me,
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
        ];
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:67:育成回合计时') < 96) {
          key = 'before_arim_kin_c';
          args = [get_chara_talk(68)];
        } else {
          key = 'before_arim_kin_s';
          args = [get_chara_talk(68)];
        }
        break;
      case race_enum.sank_hai:
        key = 'before_sank_hai';
        args = [get_chara_talk(68), me];
        break;
      case race_enum.tenn_spr:
        key = 'before_tenn_spr';
        args = [get_chara_talk(3), get_chara_talk(13)];
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:67:育成回合计时') > 96) {
          key = 'before_takz_kin_s';
          args = [get_chara_talk(68)];
        }
        break;
      case race_enum.kyot_dai:
        if (era.get('cflag:67:育成回合计时') > 96) {
          key = 'before_kyot_dai_s';
        }
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:67:育成回合计时') > 96) {
          key = 'before_tenn_sho_s';
          args = [get_chara_talk(68), me];
        }
        break;
      case race_enum.japa_cup:
        if (era.get('cflag:67:育成回合计时') > 96) {
          key = 'before_japa_cup_s';
          args = [get_chara_talk(3), get_chara_talk(68)];
        }
    }
    if (!key) {
      if (
        race_infos[extra.race].race_class === class_enum.G1 &&
        !edu_marks.run_g1
      ) {
        key = 'before_g1';
      } else if (
        Math.random() <
        (0.6 * era.get('base:67:体力')) / era.get('maxbase:67:体力')
      ) {
        key = 'race_start_low_sta';
      } else {
        return await super.race_start(daiya, me, callname, hook, extra);
      }
    }
    await print_title_with_kojo(this.#kojo, key, daiya, ...args);
  }

  async school_atrium(daiya, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 67) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 'sos':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'sa_sos',
                daiya,
                get_chara_talk(13),
                me,
              )
            )[0] === 1
              ? { [attr_enum.endurance]: 20 }
              : { [attr_enum.strength]: 20 },
        });
        break;
      case 'sweepy5':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'sa_sweepy5',
                daiya,
                get_chara_talk(32),
                get_chara_talk(44),
                get_chara_talk(68),
                me,
              )
            )[0] === 1
              ? { [attr_enum.speed]: 20 }
              : { [attr_enum.strength]: 20 },
        });
        break;
      case 'high_dream':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'sa_high_dream',
                daiya,
                get_chara_talk(7),
                me,
              )
            )[0] === 1
              ? { [attr_enum.strength]: 20 }
              : { [attr_enum.intelligence]: 20 },
        });
        break;
      case 'chase':
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'sa_chase',
              daiya,
              get_chara_talk(7),
              get_chara_talk(13),
              me,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.toughness]: 20 },
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.intelligence]: 20 },
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.strength]: 20 },
            });
        }
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async train_fail(daiya, me, callname, hook, extra) {
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    const fail_again = Math.random() < extra['args'].ratio.fail_again;
    await CustomizedEdu.print_fail_info_in_train(
      daiya,
      extra.train,
      extra.fumble,
    );
    if (extra.train !== attr_enum.intelligence) {
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            extra.fumble ? 'train_fumble' : 'train_fail',
            daiya,
            me,
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
  }

  async train_success_add(daiya, me, callname, hook, extra) {
    return (
      (
        await print_title_with_kojo(
          this.#kojo,
          'ts_add',
          daiya,
          get_chara_talk(68),
          me,
          callname,
          sys_get_colored_callname(this.id, 68),
        )
      )[0] === 1
    );
  }

  async week_end(daiya, me, callname, hook, extra, ebj) {
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 47 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:67:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(this.#kojo, 'we_47_32', daiya);
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
        break;
      case 95 + 24:
        if (
          check_aim_race(RaceHistory.get(this.id).get(), race_enum.takz_kin, 2)
        ) {
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_24',
          daiya,
          get_chara_talk(68),
          me,
          race_infos[race_enum.tenn_spr].get_colored_name(),
          race_infos[race_enum.takz_kin].get_colored_name(),
        );
        era.println();
        wait = sys_like_chara(67, 0, 25);
        wait = sys_like_chara(68, 0, 25) || wait;
        break;
      case 95 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:67:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_32',
          daiya,
          get_chara_talk(63),
          get_chara_talk(68),
        );
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
        break;
      case 95 + 44:
        if (
          check_aim_race(RaceHistory.get(this.id).get(), race_enum.japa_cup, 2)
        ) {
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_44',
          daiya,
          get_chara_talk(3),
          get_chara_talk(68),
          me,
          race_infos[race_enum.japa_cup].get_colored_name(),
        );
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
        break;
      case 95 + 48:
        temp = RaceHistory.get(this.id).get();
        if (
          !check_aim_race(temp, race_enum.tenn_sho, 2, 1) ||
          !check_aim_race(temp, race_enum.japa_cup, 2, 1) ||
          !check_aim_race(temp, race_enum.arim_kin, 2, 1)
        ) {
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_48',
          daiya,
          get_chara_talk(13),
          race_infos[race_enum.tenn_sho].get_colored_name(),
          race_infos[race_enum.japa_cup].get_colored_name(),
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(daiya, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 'after_begin':
        await print_title_with_kojo(
          this.#kojo,
          'ws_after_begin',
          daiya,
          get_chara_talk(68),
          me,
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
          race_infos[race_enum.kiku_sho].get_colored_name(),
        );
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
        break;
      case 39:
        await print_title_with_kojo(
          this.#kojo,
          'ws_39',
          daiya,
          get_chara_talk(60),
          get_chara_talk(63),
          get_chara_talk(64),
          me,
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
        );
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
        break;
      case 47 + 1:
        era.set('cflag:67:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              daiya,
              get_chara_talk(68),
              me,
              callname,
              sys_get_colored_callname(68, 0),
              sys_get_colored_callname(68, this.id),
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.endurance]: 20 },
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              base: [200],
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 30 });
        }
        break;
      case 47 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:67:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_29',
          daiya,
          get_chara_talk(68),
        );
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
        break;
      case 47 + 31:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:67:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'ws_47_31',
                daiya,
                get_chara_talk(60),
                get_chara_talk(62),
                get_chara_talk(63),
                get_chara_talk(64),
                get_chara_talk(65),
                get_chara_talk(66),
                get_chara_talk(68),
                me,
              )
            )[0] === 1
              ? { [attr_enum.endurance]: 20 }
              : { [attr_enum.strength]: 20 },
        });
        break;
      case 47 + 34:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_34',
          daiya,
          get_chara_talk(13),
          me,
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
          race_infos[race_enum.kiku_sho].get_colored_name(),
          race_infos[race_enum.tenn_spr].get_colored_name(),
        );
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
        break;
      case 95 + 6:
        era.set('cflag:67:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_95_6', daiya, me);
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
        break;
      case 95 + 14:
        era.set('cflag:67:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_14',
          daiya,
          get_chara_talk(7),
          get_chara_talk(14),
          get_chara_talk(25),
          get_chara_talk(49),
          get_chara_talk(70),
          me,
        );
        era.println();
        wait = sys_like_chara(this.id, 0, 25);
        break;
      case 95 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:67:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_29',
          daiya,
          get_chara_talk(68),
          me,
          race_infos[race_enum.tenn_spr].get_colored_name(),
          race_infos[race_enum.takz_kin].get_colored_name(),
          race_infos[race_enum.japa_cup].get_colored_name(),
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        era.println();
        wait = sys_like_chara(67, 0, 25);
        break;
      case 95 + 33:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_33',
          daiya,
          get_chara_talk(68),
          me,
          race_infos[race_enum.takz_kin].get_colored_name(),
          race_infos[race_enum.kyot_dai].get_colored_name(),
          race_infos[race_enum.tenn_sho].get_colored_name(),
        );
        era.println();
        wait = sys_like_chara(67, 0, 25);
        break;
      case 95 + 48:
        era.set('cflag:67:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_48',
          daiya,
          get_chara_talk(60),
          get_chara_talk(62),
          get_chara_talk(63),
          get_chara_talk(64),
          get_chara_talk(65),
          get_chara_talk(66),
          get_chara_talk(68),
          me,
        );
        era.println();
        wait = sys_like_chara(67, 0, 25);
        break;
      default:
        return await super.week_start(daiya, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
