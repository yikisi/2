const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  check_pregnant_unprotect,
  get_sex_acceptable,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const { set_luck_result } = require('#/event/snippets/105600');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { get_date_obj } = require('#/data/date-indicator');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const FukukitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { max_chara_id } = require('#/data/other-const');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
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

  async celebration(kitaru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 56) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 143) {
      return;
    }
    const race_history = RaceHistory.get(this.id);
    era.set('cflag:56:节日事件标记', 0);
    if (
      new FukukitaruEduMarks().begin_race_end === 10 &&
      check_aim_race(race_history.get(), race_enum.arim_kin, 2, 1)
    ) {
      // 有马纪念胜利
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            'cl_after_arim_kin_s',
            kitaru,
            me,
            callname,
            get_sex_acceptable(this.id) && check_pregnant_unprotect(0),
          )
        )[0] === 2
      ) {
        if (
          !era.get('status:56:短效避孕药') &&
          !era.get('status:56:长效避孕药') &&
          !era.get('status:0:经期') &&
          era.get('cflag:56:妊娠回合计时') === 0
        ) {
          era.set('status:56:短效避孕药', 1);
        }
        begin_and_init_ero(0, 56);
        set_palam_to_max(56, part_enum.virgin);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(56, part_enum.virgin),
          false,
        );
        set_palam_to_max(
          56,
          kitaru.sex_code > 0 ? part_enum.virgin : part_enum.clitoris,
        );
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(
            56,
            kitaru.sex_code ? part_enum.virgin : part_enum.clitoris,
          ),
          false,
        );
        set_palam_to_max(56, part_enum.virgin);
        await quick_make_love(
          new EroParticipant(0, part_enum.penis),
          new EroParticipant(56, part_enum.virgin),
          false,
        );
        set_palam_to_max(0, part_enum.penis);
        set_palam_to_max(56, part_enum.virgin);
        await quick_make_love(
          new EroParticipant(0, part_enum.penis),
          new EroParticipant(56, part_enum.virgin),
          false,
        );
        end_ero_and_train();
      }
    } else if (!race_history.get_result(95 + 48)) {
      // 未参加有马纪念
      await print_title_with_kojo(
        this.#kojo,
        'cl_before_arim_kin_s',
        kitaru,
        me,
        callname,
      );
    } else {
      return;
    }
    return true;
  }

  async crazy_fan_end() {
    if (era.get('flag:强制BE') !== 56) {
      return await super.crazy_fan_end();
    }
    await print_title_with_kojo.ending(
      this.#kojo,
      'be_force',
      get_chara_talk(56),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async office_cook(kitaru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 56) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'miso_fortune') {
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'oc_miso_fortune',
      kitaru,
      me,
      callname,
    );
    if (all_reward_in_event(this.id, { skills: [201442] })) {
      await era.waitAnyKey();
    }
    return true;
  }

  async office_game(kitaru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 56) {
      add_event(hook.hook, ebj);
      return;
    }
    const edu_marks = new FukukitaruEduMarks();
    let wait = false;
    switch (ebj?.arg) {
      case 'fortune_game_duel_1':
        edu_marks.game_times = 5;
        await print_title_with_kojo(
          this.#kojo,
          'og_fortune_game_duel_1',
          kitaru,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, { skills: [201432] });
        break;
      case 'fortune_game_duel_2':
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'og_fortune_game_duel_2',
              kitaru,
              me,
              callname,
            )
          )[0] === 1
        ) {
          begin_and_init_ero(0, this.id);
          set_palam_to_max(0, part_enum.penis);
          set_palam_to_max(this.id, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(this.id, part_enum.virgin),
            false,
          );
          end_ero_and_train();
          wait = all_reward_in_event(this.id, { skills: [201431] });
        }
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async office_study(kitaru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 56) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 'god_study':
        await print_title_with_kojo(
          this.#kojo,
          'os_god_study',
          kitaru,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, { pt: 10 });
        break;
      case 'luck_name':
        wait = all_reward_in_event(
          this.id,
          (
            await print_title_with_kojo(
              this.#kojo,
              'os_luck_name',
              kitaru,
              me,
              callname,
            )
          )[0] === 1
            ? { pt: 10 }
            : { attr: base_attr_list.map(() => 3), motivation: -1 },
        );
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_start(kitaru, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 56) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'hot_line') {
      return;
    }
    const [ret] = await print_title_with_kojo(
      this.#kojo,
      'os_hot_line',
      kitaru,
      me,
      callname,
    );
    let wait = false;
    if (ret === 1) {
      wait = all_reward_in_event(this.id, { skills: [201542] });
    } else if (ret === 2) {
      wait = all_reward_in_event(this.id, { skills: [201222] });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async race_end(kitaru, me, callname, hook, extra) {
    const edu_marks = new FukukitaruEduMarks();
    let key;
    /** @type {[]} */
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:56:育成回合计时') < 48 && extra.rank === 1) {
          key = 'begin_race_win';
        }
        break;
      case race_enum.aoba_sho:
        key = 'aoba_sho_end';
        args.push(extra.rank);
        era.set('status:56:PTSD', 1);
        era.set('status:56:凶', 1);
        era.set('cflag:56:干劲', -2);
        era.set('status:56:大吉', 0);
        era.set('status:56:小吉', 0);
        era.set('status:56:中吉', 0);
        break;
      case race_enum.toky_yus:
        key = 'toky_yus_end';
        era.set('status:56:PTSD', 0);
        era.set('status:56:凶', 0);
        era.set('status:56:大吉', 1);
        era.set('cflag:56:干劲', 2);
        break;
      case race_enum.kobe_hai:
        if (extra.rank === 1) {
          key = 'kobe_hai_win';
        }
        break;
      case race_enum.kiku_sho:
        if (extra.rank === 1) {
          key = 'kiku_sho_win';
          args.push(
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.kobe_hai,
              1,
              1,
            ),
          );
          if (era.get('love:56') >= 50) {
            update_kiss_exp(get_date_obj(), 0, this.id);
          }
        }
        break;
      case race_enum.kink_sho:
        if (
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.kiku_sho,
            1,
            1,
          )
        ) {
          if (extra.rank === 1) {
            key = 'kink_sho_win';
          } else {
            key = 'kink_sho_lose';
          }
          era.set('status:56:PTSD', 1);
          era.set('status:56:凶', 1);
          era.set('cflag:56:干劲', -2);
          era.set('status:56:大吉', 0);
          era.set('status:56:小吉', 0);
          era.set('status:56:中吉', 0);
        }
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:56:育成回合计时') > 96 && extra.rank === 1) {
          if (
            (
              await print_title_with_kojo(
                this.#kojo,
                'takz_kin_win_s',
                kitaru,
                me,
                callname,
                edu_marks.kink_shoKISS > 0,
              )
            )[0] === 1
          ) {
            begin_and_init_ero(0, this.id);
            set_palam_to_max(0, part_enum.penis);
            set_palam_to_max(this.id, part_enum.virgin);
            await quick_make_love(
              new EroParticipant(0, part_enum.penis),
              new EroParticipant(this.id, part_enum.virgin),
              false,
            );
            end_ero_and_train();
          }
          return;
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:56:育成回合计时') > 96 && extra.rank === 1) {
          key = 'arim_kin_win_s';
        }
    }
    if (!key) {
      if (extra.rank === 1) {
        if (edu_marks.tattoo === 1) {
          edu_marks.tattoo = 2;
          await print_title_with_kojo(
            this.#kojo,
            'race_end_sex',
            kitaru,
            me,
            callname,
          );
          era.set('flag:当前位置', location_enum.restroom);
          await quick_into_sex(56);
          return;
        } else {
          key = 'race_end_win';
        }
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else {
        key = 'race_end_lose';
      }
    }
    await print_title_with_kojo(this.#kojo, key, kitaru, ...args);
  }

  async race_start(kitaru, me, callname, hook, extra) {
    const edu_marks = new FukukitaruEduMarks();
    let key;
    /** @type {[]} */
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:56:育成回合计时') < 48) {
          key = 'before_begin_race';
        }
        break;
      case race_enum.aoba_sho:
        key = 'before_aoba_sho';
        break;
      case race_enum.toky_yus:
        key = 'before_toky_yus';
        break;
      case race_enum.kobe_hai:
        key = 'before_kobe_hai';
        args.push(sys_get_colored_callname(this.id, 5));
        break;
      case race_enum.kiku_sho:
        key = 'before_kiku_sho';
        break;
      case race_enum.kink_sho:
        key = 'before_kink_sho';
        if (era.get('love:56') >= 75) {
          update_kiss_exp(get_date_obj(), 0, this.id);
          edu_marks.kink_shoKISS = 1;
        }
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:56:育成回合计时') > 96) {
          key = 'before_takz_kin_s';
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:56:育成回合计时') > 96) {
          key = 'before_arim_kin_s';
        }
    }
    if (!key) {
      if (
        era.get('mark:56:淫纹') &&
        !edu_marks.tattoo &&
        kitaru.sex_code !== 1 &&
        me.sex_code > 0
      ) {
        edu_marks.tattoo = 1;
        key = 'race_start_sex';
        const cache = [era.get('base:56:体力'), era.get('base:56:精力')];
        begin_and_init_ero(0, this.id);
        set_palam_to_max(0, part_enum.penis);
        set_palam_to_max(this.id, part_enum.virgin);
        await quick_make_love(
          new EroParticipant(this.id, part_enum.mouth),
          new EroParticipant(0, part_enum.penis),
          false,
        );
        end_ero_and_train();
        era.set('base:56:体力', cache[0]);
        era.set('base:56:精力', cache[1]);
        extra.attr_change = [0, 10];
      } else {
        key = 'race_start';
        args = [me, callname, edu_marks.begin_race_end];
      }
    }
    await print_title_with_kojo(this.#kojo, key, kitaru, ...args);
  }

  async train_fail(kitaru, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return await super.train_fail(kitaru, me, callname, hook, extra);
    }
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    const edu_marks = new FukukitaruEduMarks();
    if (
      me.sex_code > 0 &&
      kitaru.sex_code !== 1 &&
      !edu_marks.fortune_train_fail &&
      era.get('love:56') >= 75
    ) {
      edu_marks.fortune_train_fail = 1;
      const [ret] = await print_title_with_kojo(
        this.#kojo,
        'first_train_fail',
        kitaru,
        me,
        callname,
      );
      if (ret === 2) {
        hook.arg = 1;
        if (!era.get('talent:56:神之足')) {
          era.set('talent:56:神之足', 1);
        }
      } else if (ret === 3) {
        await quick_into_sex(this.id);
        hook.arg = 1;
      }
    } else {
      const fail_again = Math.random() < extra.args.ratio.fail_again;
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            extra.fumble ? 'train_fumble' : 'train_fail',
            kitaru,
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

  async train_success(kitaru, me, callname, hook, { train }) {
    const luck_train = new FukukitaruEduMarks().luck_train === train + 1;
    await this.#kojo.train_success(kitaru, luck_train);
    if (luck_train) {
      let luck_add = base_attr_list.map(() => 1);
      // random 0 -15
      get_attr_and_print_in_event(56, luck_add, 0);
    }
  }

  async week_end(kitaru, me, callname, hook, extra, ebj) {
    if (ebj?.arg !== 143 + 1) {
      return;
    }
    await print_title_with_kojo(this.#kojo, 'we_143_1', kitaru, me, callname);
  }

  async week_start(kitaru, me, callname, hook, extra, ebj) {
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 'fortune_week':
        if (!era.get('status:56:运势依赖')) {
          return;
        }
        if (era.get('status:56:PTSD') === 1) {
          temp = 3;
        } else {
          temp = get_random_value(0, 3);
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_fortune_week',
          kitaru,
          temp,
        );
        set_luck_result(temp);
        break;
      case 'beginning':
        await print_event_name(this.#kojo.ws_beginning.title(kitaru), kitaru);
        await this.#kojo.ws_beginning(kitaru, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
        });
        break;
      case 14:
        await print_title_with_kojo(this.#kojo, 'ws_14', kitaru, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
        });
        break;
      case 28:
        await print_title_with_kojo(this.#kojo, 'ws_28', kitaru, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
          skills: [200791],
        });
        break;
      case 35:
        await print_title_with_kojo(
          this.#kojo,
          'ws_35',
          kitaru,
          get_chara_talk(62),
          me,
          callname,
          sys_get_colored_callname(62, 0),
        );
        wait = all_reward_in_event(this.id, { pt: 30 });
        break;
      case 38:
        await print_title_with_kojo(this.#kojo, 'ws_38', kitaru, me, callname);
        wait = all_reward_in_event(this.id, { pt: 30 });
        break;
      case 42:
        await print_title_with_kojo(this.#kojo, 'ws_42', kitaru, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
          skills: [200831],
          motivation: -3,
        });
        break;
      case 47 + 1:
        era.set('cflag:56:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              kitaru,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: base_attr_list.map(() => 7),
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { attr: [30] });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 40 });
        }
        break;
      case 47 + 5:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_5',
          kitaru,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
        });
        break;
      case 47 + 18:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_18',
          kitaru,
          get_chara_talk(2),
          me,
          callname,
          sys_get_colored_callname(2, 0),
          sys_get_colored_callname(2, this.id),
          sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
            (cid) => cid > 0 && cid < max_chara_id,
          ).length,
        );
        wait = all_reward_in_event(this.id, { attr: [7, 0, 7, 7] });
        break;
      case 47 + 21:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_21',
          kitaru,
          me,
          callname,
          check_aim_race(RaceHistory.get(this.id).get(), race_enum.toky_yus, 1),
        );
        wait = all_reward_in_event(this.id, { pt: 20 });
        break;
      case 47 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:56:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_event_name(this.#kojo.ws_47_29.title, kitaru);
        await this.#kojo.ws_47_29(kitaru, me);
        break;
      case 47 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:56:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        temp = [
          await print_title_with_kojo(
            this.#kojo,
            'ws_47_32',
            kitaru,
            me,
            callname,
          ),
          { attr: base_attr_list.map(() => 0), pt: 0 },
        ];
        if (temp[0][0] === 1) {
          temp[1].attr[0] = 25;
        } else {
          temp[1].pt = 20;
        }
        if (era.get('love:56') >= 50) {
          update_kiss_exp(get_date_obj(), this.id, 0);
        }
        if (temp[0][1] === 1) {
          await quick_into_sex(this.id);
        } else if (temp[0][1] === 2) {
          temp[1].attr.map((e) => e + 1);
        }
        wait = all_reward_in_event(this.id, temp[1]);
        break;
      case 47 + 39:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_39',
          kitaru,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
          skills: [200841],
        });
        break;
      case 47 + 41:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_41',
          kitaru,
          get_chara_talk(2),
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
        });
        break;
      case 95 + 1:
        era.set('cflag:56:节日事件标记', 0);
        temp = [
          await print_title_with_kojo(
            this.#kojo,
            'ws_95_1',
            kitaru,
            me,
            callname,
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.kiku_sho,
              1,
              1,
            ),
          ),
          { attr: base_attr_list.map(() => 0), pt: 0 },
        ];
        switch (temp[0][0]) {
          case 1:
            temp[1].attr.fill(7);
            break;
          case 2:
            temp[1].attr[2] = 30;
            break;
          case 3:
            temp[1].pt = 30;
        }
        if (temp[0][1] === 1) {
          temp[1].relation = 5;
          temp[1].love = 3;
        } else if (temp[0][1] === 2) {
          begin_and_init_ero(0, 56);
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(56, part_enum.mouth),
            false,
          );
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(56, part_enum.breast),
            false,
          );
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(
              56,
              kitaru.sex_code ? part_enum.virgin : part_enum.clitoris,
            ),
            false,
          );
          set_palam_to_max(this.id, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(56, part_enum.virgin),
            false,
          );
          era.set('status:56:短效避孕药', 1);
          set_palam_to_max(0, part_enum.penis);
          set_palam_to_max(this.id, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(56, part_enum.virgin),
            false,
          );
          end_ero_and_train();
        }
        wait = all_reward_in_event(this.id, temp[1]);
        break;
      case 95 + 6:
        era.set('cflag:56:节日事件标记', 0);
        temp = await print_title_with_kojo(
          this.#kojo,
          'ws_95_6',
          kitaru,
          me,
          callname,
          sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
            (cid) => cid > 0 && cid < max_chara_id,
          ).length,
        );
        if (temp[0] === 1) {
          era.set('flag:当前位置', location_enum.home);
          await quick_into_sex(this.id);
        } else {
          wait = all_reward_in_event(this.id, { base: [300] });
          wait = all_reward_in_event(0, { base: [300] }) || wait;
        }
        break;
      case 95 + 11:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_11',
          kitaru,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
          motivation: -3,
          skills: [200851],
        });
        break;
      case 95 + 12:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_12',
          kitaru,
          get_chara_talk(2),
          get_chara_talk(62),
          get_chara_talk(74),
          me,
          callname,
          sys_get_colored_callname(2, 0),
          sys_get_colored_callname(74, this.id),
        );
        era.set('status:56:PTSD', 0);
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 7),
        });
        break;
      case 95 + 14:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_14',
          kitaru,
          me,
          callname,
        );
        era.set('cflag:56:节日事件标记', 0);
        era.set('status:56:运势依赖', 0);
        era.set('status:56:大吉', 0);
        era.set('status:56:中吉', 0);
        era.set('status:56:小吉', 0);
        era.set('status:56:凶', 0);
        break;
      case 95 + 25:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_25',
          kitaru,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
        });
        break;
      case 95 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:56:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_event_name(this.#kojo.ws_95_29.title, kitaru);
        await this.#kojo.ws_47_29(kitaru, me);
        break;
      case 95 + 31:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:56:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_95_31',
              kitaru,
              me,
              callname,
              sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
                (cid) => cid > 0 && cid < max_chara_id,
              ).length,
            )
          )[0] === 1
        ) {
          era.set('status:56:稳定', 1);
          wait = all_reward_in_event(this.id, {
            attr: base_attr_list.map(() => 3),
          });
        }
        break;
      case 95 + 37:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_37',
          kitaru,
          me,
          callname,
        );
        if (era.get('talent:0:自信程度') === 1) {
          era.set('talent:56:自信程度', 0);
        }
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
        });
        break;
      case 143 + 1:
        await print_title_with_kojo(
          this.#kojo,
          'ws_143_1',
          kitaru,
          get_chara_talk(58),
          me,
          callname,
          sys_get_colored_callname(this.id, 58),
        );
        break;
      case 'palace':
        await CustomizedEdu.common_palace(kitaru, me);
        if (
          new FukukitaruEduMarks().good_end === 1 &&
          era.get('love:56') >= 75 &&
          era.get('cflag:56:殿堂') === 2
        ) {
          // 并且进殿堂
          era.drawLine();
          await print_title_with_kojo(
            this.#kojo,
            'ws_palace',
            kitaru,
            me,
            callname,
          );
        }
        break;
      default:
        return await super.week_start(kitaru, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
