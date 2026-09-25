const era = require('#/era-electron');

const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  check_pregnant_unprotect,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_change_weight } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const {
  check_high_relation,
  get_inner_urara,
} = require('#/event/snippets/105200');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');

const { get_date_obj } = require('#/data/date-indicator');
const crazy_fans = require('#/data/event/crazy-fans');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
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

  async back_school(urara, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 'teach':
        if (
          era.get('flag:当前互动角色') !== 52 ||
          extra.loc !== location_enum.shopping
        ) {
          add_event(event_hooks.back_school, ebj);
          return;
        }
        EventMarks.get(52).sub(event_hooks.out_shopping);
        await print_title_with_kojo(
          this.#kojo,
          'bs_teach',
          urara,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: {
            [attr_enum.toughness]: 10,
          },
          motivation: 1,
        });
        break;
      case 'dance':
        if (era.get('flag:当前互动角色') > 0) {
          await era.printAndWait(i18n().kojo[this.id].notify_bs_dance(urara));
          add_event(event_hooks.back_school, ebj);
          return;
        }
        EventMarks.get(0).sub(event_hooks.back_school);
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'bs_dance',
                urara,
                me,
                callname,
              )
            )[0] === 1
              ? { [attr_enum.speed]: 10 }
              : { [attr_enum.intelligence]: 10 },
          motivation: 1,
        });
        break;
      case 'stair':
        if (extra.loc !== location_enum.chairman) {
          await era.printAndWait(i18n().kojo[this.id].notify_bs_stair);
          add_event(event_hooks.back_school, ebj);
          return true;
        }
        EventMarks.get(0).sub(event_hooks.school_chairman);
        await print_title_with_kojo(
          this.#kojo,
          'bs_stair',
          urara,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.intelligence]: 20 },
          base: [-100],
          motivation: -1,
        });
        break;
      case 'mother':
        if (extra.loc !== location_enum.chairman) {
          await era.printAndWait(i18n().kojo[this.id].notify_bs_mother);
          add_event(event_hooks.back_school, ebj);
          return true;
        }
        EventMarks.get(0).sub(event_hooks.school_chairman);
        await print_title_with_kojo(
          this.#kojo,
          'bs_mother',
          urara,
          get_inner_urara(),
          me,
          callname,
          era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2,
        );
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(5),
          pt: 100,
          motivation: 1,
        });
        break;
      case 'challenge':
        if (era.get('flag:当前互动角色') > 0) {
          await era.printAndWait(i18n().kojo[this.id].notify_bs_challenge);
          add_event(event_hooks.back_school, ebj);
          return true;
        }
        EventMarks.get(0).sub(event_hooks.back_school);
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'bs_challenge',
              urara,
              get_chara_talk(1),
              get_chara_talk(11),
              me,
              callname,
              sys_get_colored_callname(this.id, 1),
              sys_get_colored_callname(this.id, 11),
              sys_get_colored_callname(11, 0),
              sys_get_colored_callname(11, 1),
              sys_get_colored_callname(11, this.id),
            )
          )[0] === 1
        ) {
          wait = all_reward_in_event(this.id, { pt: 5, base: [100] });
        } else {
          sys_change_weight(0, 100);
          sys_change_weight(52, 100);
          wait = all_reward_in_event(this.id, { pt: 10, base: [300] });
          wait = sys_like_chara(11, 52, 100) || wait;
          wait = sys_like_chara(52, 11, 50) || wait;
        }
        break;
      case 'farthest':
        if (
          era.get('flag:当前互动角色') !== 52 ||
          (extra.loc !== location_enum.river &&
            extra.loc !== location_enum.church &&
            extra.loc !== location_enum.shopping &&
            extra.loc !== location_enum.station &&
            extra.loc !== location_enum.mejiro)
        ) {
          await era.printAndWait(
            i18n().kojo[this.id].notify_back_school_event(urara, me),
          );
          add_event(event_hooks.back_school, ebj);
          return true;
        }
        wait = all_reward_in_event(
          this.id,
          (
            await print_title_with_kojo(
              this.#kojo,
              'bs_farthest',
              urara,
              me,
              callname,
            )
          )[0] === 1
            ? { pt: 30 }
            : { attr: { [attr_enum.endurance]: 10 } },
        );
        break;
      case 'park':
        if (
          era.get('flag:当前互动角色') !== 52 ||
          extra.loc !== location_enum.shopping
        ) {
          await era.printAndWait(
            i18n().kojo[this.id].notify_bs_park(urara, me),
          );
          add_event(event_hooks.back_school, ebj);
          return true;
        }
        EventMarks.get(52).sub(event_hooks.out_shopping);
        wait = all_reward_in_event(this.id, {
          attr: (
            await print_title_with_kojo(
              this.#kojo,
              'bs_park',
              urara,
              me,
              callname,
            )
          )[0]
            ? { [attr_enum.speed]: 10 }
            : { [attr_enum.strength]: 10 },
        });
        break;
      case 'forget':
        if (
          era.get('flag:当前互动角色') !== 52 ||
          (extra.loc !== location_enum.river &&
            extra.loc !== location_enum.church &&
            extra.loc !== location_enum.shopping &&
            extra.loc !== location_enum.station &&
            extra.loc !== location_enum.mejiro)
        ) {
          await era.printAndWait(
            i18n().kojo[this.id].notify_back_school_event(urara, me),
          );
          add_event(event_hooks.back_school, ebj);
          return true;
        }
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'bs_forget',
                urara,
                me,
                callname,
              )
            )[0] === 1
              ? { [attr_enum.toughness]: 10 }
              : { [attr_enum.endurance]: 10 },
        });
    }
    wait && (await era.waitAnyKey());
  }

  async crazy_fan_end() {
    const race_history = RaceHistory.get(this.id);
    await print_title_with_kojo.ending(
      this.#kojo,
      'be_crazy_fan',
      get_chara_talk(this.id),
      get_inner_urara(),
      get_chara_talk(0),
      sys_get_colored_callname(this.id, 0),
      race_history.check_begin(),
      race_history.get_result(47 + 48)?.race === race_enum.arim_kin,
    );
  }

  async office_prepare(urara, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 52) {
      add_event(hook.hook, ebj);
      return false;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 'fans_letr':
        await print_title_with_kojo(
          this.#kojo,
          'op_fans_letr',
          urara,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, { pt: 30, motivation: 1 });
        break;
      case 'race_clothe':
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'op_race_clothe',
                urara,
                me,
                callname,
              )
            )[0] === 1
              ? { [attr_enum.speed]: 10 }
              : { [attr_enum.strength]: 10 },
        });
        break;
    }
    wait && (await era.waitAnyKey());
  }

  async out_church(urara, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 52) {
      add_event(hook.hook, ebj);
      return false;
    }
    if (ebj?.arg !== 95 + 1) {
      return false;
    }
    era.set('cflag:52:节日事件标记', 0);
    const [rel_input, attr_input, ad_input] = await print_title_with_kojo(
      this.#kojo,
      'oc_95_1',
      urara,
      get_inner_urara(),
      me,
      callname,
    );
    const attr = new Array(5).fill(0);
    let pt = 0;
    switch (attr_input) {
      case 1:
        attr[attr_enum.endurance] = 30;
        break;
      case 2:
        attr.fill(5);
        break;
      case 3:
        pt = 35;
    }
    if (ad_input === 1) {
      new UraraEduMarks().dad++;
    } else {
      new UraraEduMarks().gad++;
    }
    if (
      all_reward_in_event(this.id, {
        attr,
        pt,
        ...(rel_input === 1 ? { relation: 20 } : { love: 5 }),
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  async out_shopping(urara, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 52) {
      add_event(hook.hook, ebj);
      return false;
    }
    const edu_marks = new UraraEduMarks();
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 34:
        wait = all_reward_in_event(this.id, {
          attr: {
            [attr_enum.toughness]: 5,
            [attr_enum.intelligence]: 5,
          },
          ...((
            await print_title_with_kojo(
              this.#kojo,
              'os_34',
              urara,
              get_inner_urara(),
              me,
              callname,
              check_high_relation(),
            )
          )[0] === 1
            ? { relation: 20 }
            : { love: 5 }),
        });
        edu_marks.fan_buff += 5;
        break;
      case 47 + 12:
        temp = new Array(5).fill(0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'os_47_12',
              urara,
              get_chara_talk(60),
              get_inner_urara(),
              me,
              callname,
              sys_get_colored_callname(this.id, 61),
            )
          )[0]
        ) {
          case 1:
            edu_marks.dad++;
            break;
          case 2:
            edu_marks.gad++;
            break;
          case 3:
            era.set(
              'talent:52:练习X手',
              Math.min(era.get('talent:52:练习X手') + 1, 2),
            );
            temp.fill(2);
        }
        temp[attr_enum.toughness] += 5;
        temp[
          get_random_entry(
            base_attr_list.filter((e) => e !== attr_enum.toughness),
          )
        ] += 5;
        edu_marks.fan_buff += 5;
        wait = all_reward_in_event(this.id, { attr: temp, motivation: 1 });
        break;
      case 47 + 27:
        edu_marks.fan_buff += 5;
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(3),
          pt: 20,
          ...((
            await print_title_with_kojo(
              this.#kojo,
              'os_47_27',
              urara,
              get_inner_urara(),
              me,
              callname,
              sys_get_colored_callname(this.id, 61),
              check_high_relation(),
            )
          )[0] === 1
            ? { relation: 10 }
            : { love: 2 }),
        });
        break;
      case 95 + 14:
        era.set('cflag:52:节日事件标记', 0);
        edu_marks.fan_buff += 5;
        wait = all_reward_in_event(
          this.id,
          (
            await print_title_with_kojo(
              this.#kojo,
              'os_95_14',
              urara,
              get_inner_urara(),
              me,
              callname,
              RaceHistory.get(this.id).get_result(47 + 48)?.race ===
                race_enum.arim_kin,
            )
          )[0] === 1
            ? { relation: 10 }
            : { love: 2 },
        );
        break;
      case 95 + 15:
        temp = RaceHistory.get(this.id);
        wait = all_reward_in_event(this.id, {
          attr: [0, 5, 0, 5],
          ...((
            await print_title_with_kojo(
              this.#kojo,
              'os_95_15',
              urara,
              get_inner_urara(),
              me,
              callname,
              temp.get_result(47 + 48) !== void 0,
              temp.get_result(95 + 7)?.race === race_enum.febr_sta &&
                temp.get_result(95 + 7).rank,
              race_infos[race_enum.arim_kin].get_colored_name(),
              race_infos[race_enum.febr_sta].get_colored_name(),
            )
          )[0] === 1
            ? { relation: 20 }
            : { love: 5 }),
        });
        break;
      case 'food':
        await print_title_with_kojo(this.#kojo, 'os_food', urara, me, callname);
        wait = all_reward_in_event(this.id, { motivation: 1 });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_start(urara, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') > 0) {
      await era.printAndWait(i18n().kojo[this.id].notify_os_all_like(urara));
      add_event(hook.hook, ebj);
      return false;
    }
    if (ebj.arg !== 'all_like') {
      return false;
    }
    EventMarks.get(0).sub(event_hooks.out_start);
    await print_title_with_kojo(this.#kojo, 'os_all_like', urara, me, callname);
    return true;
  }

  async race_end(urara, me, callname, hook, extra) {
    let key;
    let temp;
    /** @type {[]} */
    let args = [get_inner_urara(), me, callname, check_high_relation()];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:52:育成回合计时') === 23) {
          if (extra.rank === 1) {
            key = 'begin_race_win_first';
            extra.relation_change = 50;
          } else {
            key = 'begin_race_lose_first';
          }
        } else {
          if (extra.rank === 1) {
            key = 'begin_race_win';
          } else {
            crazy_fans.push(52);
          }
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:52:育成回合计时') < 96) {
          await print_event_name(
            this.#kojo.arim_kin_end_c.title(get_inner_urara()),
            urara,
          );
          await this.#kojo.arim_kin_end_c(
            urara,
            get_inner_urara(),
            me,
            callname,
            extra.rank,
          );
          update_kiss_exp(get_date_obj(), this.id, 0);
          return;
        }
        break;
      case race_enum.negi_sta:
        temp = RaceHistory.get(this.id);
        args = [
          args[0],
          me,
          Math.min(
            ...temp
              .get_values()
              .filter((r) => race_infos[r.race].race_class === class_enum.G1)
              .map((e) => e.rank),
          ),
          temp.get_result(47 + 48)?.race === race_enum.arim_kin &&
            temp.get_result(47 + 48).rank,
          race_infos[race_enum.arim_kin].get_colored_name(),
        ];
        extra.pt_change = 37;
        if (extra.rank === 1) {
          key = 'negi_sta_win';
          args.splice(2, 0, callname);
          extra.attr_change = new Array(5).fill(3);
          extra.relation_change = 50;
        } else {
          key = 'negi_sta_lose';
          extra.attr_change = gacha(base_attr_list, 4).reduce((p, c) => {
            p[c] = 2;
            return p;
          }, {});
        }
        break;
      case race_enum.febr_sta:
        extra.pt_change = 45;
        if (extra.rank === 1) {
          key = 'febr_sta_win';
          extra.attr_change = new Array(5).fill(3);
          extra.relation_change = 50;
        } else {
          key = 'febr_sta_lose';
          extra.attr_change = new Array(5)
            .fill(1)
            .map((e) => e + (Math.random() > 0.5));
        }
        args = [
          get_inner_urara(),
          me,
          callname,
          check_high_relation(),
          RaceHistory.get(this.id).get_result(47 + 48)?.race ===
            race_enum.arim_kin,
          race_infos[race_enum.arim_kin].get_colored_name(),
          race_infos[race_enum.elm_sta].get_colored_name(),
        ];
        break;
      case race_enum.elm_sta:
        if (era.get('cflag:52:育成回合计时') > 96) {
          if (extra.rank === 1) {
            extra.attr_change = new Array(5).fill(3);
            extra.pt_change = 45;
            key = 'elm_sta_win_s';
          } else {
            extra.attr_change = new Array(5)
              .fill(1)
              .map((e) => e + (Math.random() < 0.5));
            extra.pt_change = 30;
            key = 'elm_sta_lose_s';
          }
        }
        break;
      case race_enum.jbc_cls:
        if (era.get('cflag:52:育成回合计时') > 96) {
          extra.attr_change = new Array(5).fill(3);
          extra.pt_change = 45;
          extra.skill_change = [201002];
          if (extra.rank === 1) {
            key = 'jbc_cls_win_s';
          } else {
            key = 'jbc_cls_lose_s';
            crazy_fans.push(52);
          }
        }
    }
    if (!key) {
      if (extra.rank === 1) {
        key = 'race_end_win';
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
        args.push(extra.rank);
      } else if (extra.rank <= 10) {
        key = 'race_end_10';
      } else {
        key = 'race_end_lose';
      }
      args = [me, callname, extra.rank];
    }
    await print_title_with_kojo(this.#kojo, key, urara, ...args);
  }

  async race_start(urara, me, callname, hook, extra) {
    let key;
    let temp;
    /** @type {[]} */
    let args = [get_inner_urara(), me, callname, check_high_relation()];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:52:育成回合计时') === 23) {
          key = 'before_begin_race_first';
        } else {
          key = 'before_begin_race';
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:52:育成回合计时') < 96) {
          hook.override = true;
          key = 'before_arim_kin_c';
          args.push(
            Math.min(
              ...RaceHistory.get(52)
                .get_values()
                .filter((e) => race_infos[e.race].race_class <= class_enum.G3)
                .map((e) => e.rank),
            ),
            race_infos[race_enum.arim_kin].get_colored_name(),
          );
        } else {
          key = 'before_arim_kin_s';
        }
        break;
      case race_enum.negi_sta:
        key = 'before_negi_sta';
        temp = RaceHistory.get(this.id);
        args = [
          args[0],
          me,
          callname,
          temp
            .get_values()
            .some((r) => race_infos[r.race].race_class <= class_enum.G3),
          temp.get_result(47 + 48)?.race === race_enum.arim_kin &&
            temp.get_result(47 + 48).rank,
          race_infos[race_enum.arim_kin].get_colored_name(),
          race_infos[race_enum.negi_sta].get_colored_name(),
        ];
        break;
      case race_enum.febr_sta:
        key = 'before_febr_sta';
        break;
      case race_enum.elm_sta:
        if (era.get('cflag:52:育成回合计时') > 96) {
          key = 'before_elm_sta_s';
        }
        break;
      case race_enum.jbc_cls:
        if (era.get('cflag:52:育成回合计时') > 96) {
          key = 'before_jbc_cls_s';
          args = [
            args[0],
            me,
            callname,
            RaceHistory.get(this.id).get_result(47 + 48)?.race ===
              race_enum.arim_kin,
            new UraraEduMarks().fans,
          ];
        }
    }
    if (!key) {
      if (era.get('cflag:52:干劲') === 2 && Math.random() < 0.5) {
        key = 'race_start_high_moti';
        args = [me, callname];
      } else {
        key = 'race_start';
        args = [callname];
      }
    }
    await print_title_with_kojo(this.#kojo, key, urara, ...args);
  }

  async school_atrium(urara, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 'vs':
        if (era.get('flag:当前互动角色') > 0) {
          await era.printAndWait(i18n().kojo[this.id].notify_sa_vs);
          add_event(event_hooks.school_atrium, ebj);
          return true;
        }
        EventMarks.get(0).sub(event_hooks.school_atrium);
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'sa_vs',
                urara,
                get_chara_talk(1),
                get_chara_talk(20),
                me,
                callname,
                sys_get_colored_callname(this.id, 1),
                sys_get_colored_callname(20, 0),
              )
            )[0] === 1
              ? { [attr_enum.intelligence]: 10 }
              : { [attr_enum.strength]: 10 },
        });
        wait = sys_like_chara(1, 52, 100) || wait;
        wait = sys_like_chara(20, 52, 100) || wait;
        wait = sys_like_chara(52, 1, 50) || wait;
        wait = sys_like_chara(52, 20, 50) || wait;
        break;
      case 'lost_found':
        if (era.get('flag:当前互动角色') !== 52) {
          add_event(event_hooks.school_atrium, ebj);
          return true;
        }
        wait = all_reward_in_event(
          this.id,
          (
            await print_title_with_kojo(
              this.#kojo,
              'sa_lost_found',
              urara,
              get_chara_talk(30),
              me,
              callname,
              sys_get_colored_callname(this.id, 30),
              sys_get_colored_callname(30, 0),
              sys_get_colored_callname(30, this.id),
            )
          )[0] === 1
            ? { attr: [0, 0, 0, 20], base: [-100] }
            : { attr: [0, 10] },
        );
        break;
      case 'interview':
        if (era.get('flag:当前互动角色') !== 52) {
          add_event(event_hooks.school_atrium, ebj);
          return true;
        }
        wait = all_reward_in_event(this.id, {
          attr: (await print_title_with_kojo(
            this.#kojo,
            'sa_interview',
            urara,
            get_chara_talk(30),
            get_chara_talk(301),
            me,
            callname,
            sys_get_colored_callname(this.id, 30),
            sys_get_callname(30, 0),
            sys_get_colored_callname(30, this.id),
          ))
            ? { [attr_enum.strength]: 20 }
            : { [attr_enum.endurance]: 20 },
        });
        wait = sys_like_chara(52, 30, 100) || wait;
        wait = sys_like_chara(30, 52, 100) || wait;
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async train(attr) {
    await this.#kojo.train(
      get_chara_talk(this.id),
      sys_get_callname(this.id, 0),
    );
  }

  async train_fail(urara, me, callname, hook, extra) {
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    const fail_again = Math.random() < extra.args.ratio.fail_again;
    this.#kojo.tf_message(urara, callname, extra.train);
    if (extra.train !== attr_enum.intelligence) {
      era.println();
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            extra.fumble ? 'train_fumble' : 'train_fail',
            urara,
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
  }

  async train_success_add(urara, me, callname, hook, extra) {
    return (
      (
        await print_title_with_kojo(
          this.#kojo,
          'ts_add',
          urara,
          get_chara_talk(15),
          me,
          callname,
          sys_get_colored_callname(this.id, 15),
          sys_get_colored_callname(15, 0),
        )
      )[0] === 1
    );
  }

  async week_end(urara, me, callname, hook, extra, ebj) {
    const edu_marks = new UraraEduMarks();
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 'after_begin':
        wait = all_reward_in_event(
          this.id,
          (
            await print_title_with_kojo(
              this.#kojo,
              'we_after_begin',
              urara,
              get_inner_urara(),
              me,
              callname,
            )
          )[0] === 1
            ? { relation: 20 }
            : { love: 5 },
        );
        add_event(event_hooks.week_start, ebj);
        break;
      case 47:
        temp = await print_title_with_kojo(
          this.#kojo,
          'we_47',
          urara,
          get_inner_urara(),
          me,
          callname,
          sys_get_colored_callname(this.id, 30),
          sys_get_colored_callname(this.id, 61),
          check_high_relation(),
        );
        if (temp[0] === 1) {
          edu_marks.gad++;
        } else {
          edu_marks.dad++;
        }
        sys_change_weight(this.id, 20);
        sys_change_weight(0, 20);
        wait = all_reward_in_event(this.id, {
          base: [400],
          ...(temp[1] === 1 ? { relation: 20 } : { love: 5 }),
        });
        wait = all_reward_in_event(0, { base: [400] }) || wait;
        break;
      case 47 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:52:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        temp = await print_title_with_kojo(
          this.#kojo,
          'we_47_29',
          urara,
          get_inner_urara(),
          get_chara_talk(30),
          me,
          callname,
          sys_get_colored_callname(this.id, 30),
          sys_get_colored_callname(this.id, 61),
          sys_get_colored_callname(30, 0),
          sys_get_colored_callname(30, this.id),
          check_high_relation(),
        );
        wait = all_reward_in_event(this.id, {
          attr: {
            ...(temp[0] === 1
              ? { [attr_enum.intelligence]: 10 }
              : { [attr_enum.speed]: 10 }),
            ...(temp[1] === 1
              ? { [attr_enum.strength]: 10 }
              : { [attr_enum.endurance]: 10 }),
          },
        });
        break;
      case 47 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:52:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        [temp] = await print_title_with_kojo(
          this.#kojo,
          'we_47_32',
          urara,
          get_inner_urara(),
          me,
          callname,
          check_high_relation(),
          get_sex_acceptable(this.id) >= 0 && check_pregnant_unprotect(0),
        );
        if (temp === 3) {
          if (era.get('flag:惩戒力度') >= 2 && urara.sex_code === 0) {
            era.set('status:52:弗隆K', 1);
          }
          await quick_into_sex(this.id);
        }
        await this.#kojo.we_47_32_after_sex(
          urara,
          get_inner_urara(),
          me,
          temp === 3,
        );
        wait = all_reward_in_event(this.id, {
          attr: gacha(base_attr_list, 3).reduce((p, c) => {
            p[c] = 5;
            return p;
          }, {}),
          relation: temp !== 2 ? 10 : 0,
          love: temp >= 2 ? 2 : 0,
        });
        break;
      case 47 + 48:
        era.set('cflag:52:节日事件标记', 0);
        if (RaceHistory.get(this.id).get_result(47 + 48)) {
          await this.#kojo.we_47_48_or_else(get_inner_urara(), me);
          return;
        }
        await print_event_name(
          this.#kojo.we_47_48.title(get_inner_urara()),
          urara,
        );
        await this.#kojo.we_47_48(
          urara,
          get_inner_urara(),
          me,
          callname,
          sys_get_colored_callname(this.id, 30),
          edu_marks.fans,
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        break;
      case 95 + 19:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_19',
          urara,
          get_inner_urara(),
          get_chara_talk(30),
          get_chara_talk(61),
          me,
          callname,
          sys_get_colored_callname(this.id, 30),
          sys_get_colored_callname(this.id, 61),
          sys_get_colored_callname(30, this.id),
          sys_get_colored_callname(61, 0),
          sys_get_colored_callname(61, this.id),
        );
        wait = get_attr_and_print_in_event(52, [0, 0, 0, 5, 5], 0);
        wait = sys_like_chara(30, 52, 100) || wait;
        wait = sys_like_chara(61, 52, 100) || wait;
        wait = sys_like_chara(52, 30, 50) || wait;
        wait = sys_like_chara(52, 61, 50) || wait;
        break;
      case 95 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:52:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        [temp] = await print_title_with_kojo(
          this.#kojo,
          'we_95_32',
          urara,
          get_inner_urara(),
          me,
          callname,
          check_high_relation(),
          get_sex_acceptable(this.id) >= 0 && check_pregnant_unprotect(0),
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        if (temp === 1) {
          await quick_into_sex(this.id);
        }
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(5),
          ...(temp === 1 ? { love: 5 } : { relation: 20 }),
        });
        break;
      case 95 + 46:
        if (edu_marks.loop > 0) {
          const attr_cache = new Array(5)
            .fill(0)
            .map((_, i) => era.get(`base:52:${5 + i}`));
          // CFLAGNAME:40 = 干劲
          const motivation_cache = era.get('cflag:52:40');
          if (await era.loadData(52)) {
            CustomizedEdu.load_game();
          }
          attr_cache.forEach((e, i) => era.set(`base:52:${5 + i}`, e));
          era.set('cflag:52:40', motivation_cache);
          new UraraEduMarks().loop--;
          add_event(event_hooks.week_start, ebj);
          return true;
        }
        break;
      case 95 + 47:
        temp = get_inner_urara();
        await print_event_name(this.#kojo.we_95_47.title(urara, temp), urara);
        temp = await this.#kojo.we_95_47(
          urara,
          temp,
          me,
          callname,
          check_high_relation(),
          RaceHistory.get(this.id).get_result(47 + 48)?.race ===
            race_enum.arim_kin,
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        switch (temp[0]) {
          case 2:
            edu_marks.gad++;
            break;
          case 3:
            edu_marks.dad++;
        }
        wait = all_reward_in_event(this.id, {
          attr: temp[0] === 1 ? new Array(5).fill(5) : void 0,
          ...(temp[1] === 1 ? { love: 2 } : { relation: 10 }),
        });
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(urara, me, callname, hook, extra, ebj) {
    const edu_marks = new UraraEduMarks();
    let temp;
    let wait = false;
    switch (ebj?.arg) {
      case 'after_begin':
        await print_title_with_kojo(
          this.#kojo,
          'ws_after_begin',
          urara,
          get_inner_urara(),
          me,
          callname,
          {
            spe: get_chara_talk(1),
            sp_call_u: sys_get_colored_callname(1, this.id),
            opera: get_chara_talk(15),
            sky: get_chara_talk(20),
            callname_20: sys_get_colored_callname(20, 0),
            sk_call_u: sys_get_colored_callname(20, this.id),
            rice: get_chara_talk(30),
            ri_call_u: sys_get_colored_callname(30, this.id),
            doto: get_chara_talk(58),
            d_call_u: sys_get_colored_callname(58, this.id),
            halo: get_chara_talk(61),
            h_call_u: sys_get_colored_callname(61, this.id),
            road: get_chara_talk(77),
            ro_call_u: sys_get_colored_callname(77, this.id),
          },
        );
        wait = all_reward_in_event(this.id, {
          attr: {
            [attr_enum.strength]: 5,
            [attr_enum.toughness]: 5,
          },
        });
        break;
      case 47 + 1:
        era.set('cflag:52:节日事件标记', 0);
        temp = await print_title_with_kojo(
          this.#kojo,
          'ws_47_1',
          urara,
          get_inner_urara(),
          get_chara_talk(15),
          me,
          callname,
          sys_get_colored_callname(this.id, 15),
          sys_get_colored_callname(this.id, 30),
          sys_get_colored_callname(this.id, 61),
          sys_get_colored_callname(this.id, 77),
          check_high_relation(),
        );
        switch (temp[0]) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.toughness]: 10 },
              ...(temp[1] === 1 ? { relation: 20 } : { love: 5 }),
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.endurance]: 10 },
              ...(temp[1] === 1 ? { relation: 20 } : { love: 5 }),
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, {
              pt: 20,
              ...(temp[1] === 1 ? { relation: 20 } : { love: 5 }),
            });
        }
        break;
      case 47 + 6:
        era.add('item:情人节巧克力', 1);
        era.set('cflag:52:节日事件标记', 0);
        wait = all_reward_in_event(
          this.id,
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_6',
              urara,
              get_inner_urara(),
              me,
              callname,
              check_high_relation(),
            )
          )[0] === 1
            ? { relation: 20 }
            : { love: 5 },
        );
        break;
      case 47 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:52:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        edu_marks.summer1 = 1;
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_29',
          urara,
          get_inner_urara(),
          me,
          callname,
          check_high_relation(),
        );
        break;
      case 47 + 43:
        temp = await print_title_with_kojo(
          this.#kojo,
          'ws_47_43',
          urara,
          get_inner_urara(),
          me,
          callname,
          edu_marks.summer1 > 0,
          edu_marks.fans,
          Math.min(
            ...RaceHistory.get(this.id)
              .get_values()
              .filter((e) => race_infos[e.race].race_class <= class_enum.G3)
              .map((e) => e.rank),
          ),
          race_infos[race_enum.negi_sta].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(3),
          relation: temp[0] === 1 ? 15 : 0,
          love: temp[0] === 2 ? 3 : 0,
        });
        if (temp[1] === 1) {
          edu_marks.dad++;
        } else {
          edu_marks.gad++;
        }
        break;
      case 95 + 6:
        temp = await print_title_with_kojo(
          this.#kojo,
          'ws_95_6',
          urara,
          get_inner_urara(),
          me,
          callname,
          check_high_relation(),
        );
        if (era.get('love:52') >= 50) {
          update_kiss_exp(get_date_obj(), this.id, 0);
          if (temp[0] === 1) {
            await quick_into_sex(this.id);
          }
        }
        wait = all_reward_in_event(this.id, {
          base: [2000],
          ...(temp[0] === 1 ? { love: 5 } : { relation: 20 }),
        });
        wait = all_reward_in_event(0, { base: [2000] }) || wait;
        era.set('cflag:52:节日事件标记', 0);
        era.add('item:情人节巧克力', 1);
        break;
      case 95 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:52:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_29',
          urara,
          get_inner_urara(),
          me,
          callname,
          check_high_relation(),
        );
        break;
      case 95 + 46:
        switch (edu_marks.loop) {
          case 2:
            await print_event_name(
              this.#kojo.ws_95_46_1.title(get_inner_urara()),
              urara,
            );
            await this.#kojo.ws_95_46_1(
              urara,
              get_inner_urara(),
              me,
              callname,
              check_high_relation(),
            );
            await era.saveData(52);
            add_event(event_hooks.week_end, ebj);
            break;
          case 1:
            await print_title_with_kojo(
              this.#kojo,
              'ws_95_46_2',
              urara,
              get_inner_urara(),
              me,
              callname,
            );
            await era.saveData(52);
            add_event(event_hooks.week_end, ebj);
            break;
          case 0: {
            const inner_urara = get_inner_urara();
            await print_event_name(
              this.#kojo['ws_95_46_3'].title(urara),
              urara,
            );
            await this.#kojo['ws_95_46_3'](urara, inner_urara, me, callname);
            const pesudo = sys_get_chara_pseudo(52);
            const p = new PseudoUma(
              -1,
              i18n().name[105202],
              inner_urara.color,
              pesudo.motivation,
              new Array(5)
                .fill(0)
                .map((_, i) => Math.min(era.get(`base:52:${5 + i}`), 1200)),
              pesudo.style,
              [...pesudo.adapt_style_list],
              [...pesudo.adapt_distance_list],
              [...pesudo.adapt_ground_list],
              pesudo.list_skill.map((e) => e.data),
            );
            p.legend = true;
            await simulation_game_in_event(pesudo, [p], race_enum.arim_kin);
            if (pesudo.rank.curr === 1) {
              await this.#kojo.ws_95_46_3_win(
                urara,
                inner_urara,
                get_chara_talk(26),
                get_chara_talk(30),
                me,
                callname,
              );
              await era.rmData(52);
              wait = all_reward_in_event(this.id, {
                attr: {
                  [get_random_entry(base_attr_list)]: 10,
                },
                pt: 45,
                motivation: 1,
              });
              edu_marks.sbuff = 1;
              era.println();
              await era.printAndWait(
                i18n().kojo[this.id].notify_break_loop(urara),
              );
            } else {
              edu_marks.loop = 2;
              await era.saveData(52);
              add_event(event_hooks.week_end, ebj);
            }
          }
        }
        break;
      case 143 + 1:
        await print_title_with_kojo(
          this.#kojo,
          'ws_143_1',
          urara,
          get_inner_urara(),
          me,
          callname,
          RaceHistory.get(this.id).get_result(95 + 48)?.race ===
            race_enum.arim_kin &&
            RaceHistory.get(this.id).get_result(95 + 48).rank,
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, { relation: 20, love: 5 });
        break;
      case 'ticket':
        await print_title_with_kojo(
          this.#kojo,
          'ws_ticket',
          urara,
          get_inner_urara(),
          me,
          callname,
          check_high_relation(),
          era
            .getAddedCharacters()
            .some(
              (cid) =>
                era.get(`cflag:${cid}:父方角色`) === this.id ||
                era.get(`cflag:${cid}:母方角色`) === this.id,
            ),
        );
        break;
      default:
        return await super.week_start(urara, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
