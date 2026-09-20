const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
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

  async back_school(kita, me, callname, hook, extra, ebj) {
    const cur_chara = era.get('flag:当前互动角色');
    if (cur_chara > 0 && cur_chara !== 68) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'kitasan_touch') {
      return;
    }
    await print_title_with_kojo(this.#kojo, ebj.arg, kita, me, callname);
    era.println();
    sys_like_chara(68, 0, 100) && (await era.waitAnyKey());
  }

  async crazy_fan_end() {
    const kita = get_chara_talk(68);
    const me = get_chara_talk(0);
    const callname = sys_get_callname(this.id, 0);
    if (new KitaEduMarks().crazy_fan) {
      await print_title_with_kojo.ending(
        this.#kojo,
        'be_back_home',
        kita,
        me,
        callname,
      );
    } else if (era.get('love:68') < 75 && era.get('relation:68:0') > 75) {
      await this.#kojo.be_hello(kita, me, callname);
      await print_event_name(
        [
          {
            content: this.#kojo.be_hello.title(callname),
            color: buff_colors[3],
          },
        ],
        kita,
        void 0,
        6,
      );
    } else {
      return await super.crazy_fan_end();
    }
  }

  async out_church(kita, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg === 47 + 1) {
      return;
    }
    if (era.get('flag:当前互动角色') !== 68) {
      add_event(hook.hook, event_object);
      return;
    }
    let wait = false;
    switch (
      (
        await print_title_with_kojo(this.#kojo, 'oc_47_1', kita, me, callname)
      )[0]
    ) {
      case 1:
        wait = all_reward_in_event(this.id, { attr: [25] });
        break;
      case 2:
        wait = all_reward_in_event(this.id, { attr: [0, 20] });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { pt: 50 });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(kita, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 68) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 95 + 14) {
      return;
    }
    await print_title_with_kojo(this.#kojo, 'os_95_14', kita, me);
    all_reward_in_event(68, {
      attr: { [attr_enum.intelligence]: 10 },
      pt: 10,
    }) && (await era.waitAnyKey());
    era.set('cflag:68:节日事件标记', 0);
    return true;
  }

  async out_start(kita, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 68) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 95 + 1:
        await print_title_with_kojo(this.#kojo, 'os_95_1', kita, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(5),
          base: [300],
          pt: 35,
        });
        break;
      case 'hot_spring_event':
        await print_title_with_kojo(
          this.#kojo,
          ebj.arg,
          kita,
          me,
          callname,
          new KitaEduMarks().hot_spring > 0,
        );
        era.println();
        wait = sys_like_chara(68, 0, 50);
        break;
      default:
        return;
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async race_end(kita, me, callname, hook, extra) {
    const edu_weeks = era.get('cflag:68:育成回合计时');
    const races = RaceHistory.get(this.id).get();
    let key;
    let args = [me, callname];
    if (extra.rank === 1) {
      extra.attr_change = new Array(5).fill(0);
      switch (extra.race) {
        case race_enum.begin_race:
          if (edu_weeks === 23) {
            key = 'begin_race_win';
            gacha(base_attr_list, 3).forEach((e) => (extra.attr_change[e] = 3));
          } else {
            key = 'begin_race_win_after';
            extra.motivation_change = 1;
            extra.attr_change[get_random_entry(base_attr_list)] = 5;
          }
          break;
        case race_enum.sats_sho:
          key = 'sats_sho_win';
          extra.attr_change[get_random_entry(base_attr_list)] = 10;
          extra.pt_change = 10;
          break;
        case race_enum.toky_yus:
          key = 'toky_yus_win';
          args = [get_chara_talk(41), me, callname];
          extra.attr_change[get_random_entry(base_attr_list)] = 10;
          extra.pt_change = 10;
          break;
        case race_enum.stli_kin:
          key = 'stli_kin_win';
          args = [get_chara_talk(67), me, callname];
          extra.relation_change = 10;
          extra.attr_change[get_random_entry(base_attr_list)] = 10;
          extra.pt_change = 10;
          break;
        case race_enum.kiku_sho:
          if (
            check_aim_race(races, race_enum.sats_sho, 1, 1) &&
            check_aim_race(races, race_enum.toky_yus, 1, 1)
          ) {
            key = 'three_crowns';
            extra.attr_change.fill(5);
            extra.pt_change = 20;
          } else {
            key = 'kiku_sho_win';
            extra.attr_change.fill(3);
            extra.pt_change = 10;
          }
          break;
        case race_enum.arim_kin:
          if (edu_weeks < 96) {
            key = 'arim_kin_c';
            args = [get_chara_talk(67), me, callname];
            extra.attr_change[get_random_entry(base_attr_list)] = 10;
            extra.pt_change = 10;
          } else {
            key = 'arim_kin_s';
            extra.attr_change.fill(3);
            extra.pt_change = 15;
          }
          break;
        case race_enum.sank_hai:
          key = 'sank_hai';
          extra.attr_change.fill(3);
          extra.pt_change = 10;
          break;
        case race_enum.tenn_spr:
          key = 'tenn_spr';
          args = [get_chara_talk(18), me, callname];
          extra.attr_change.fill(3);
          extra.pt_change = 15;
          break;
        case race_enum.takz_kin:
          if (edu_weeks > 96) {
            key = 'takz_kin_s';
            extra.attr_change.fill(3);
            extra.pt_change = 15;
          }
          break;
        case race_enum.tenn_sho:
          if (edu_weeks > 96) {
            key = 'tenn_sho_s';
            extra.attr_change.fill(3);
            extra.pt_change = 15;
          }
          break;
        case race_enum.japa_cup:
          if (edu_weeks > 96) {
            key = 'japa_cup_s';
            extra.attr_change.fill(3);
            extra.pt_change = 15;
          }
      }
    }
    if (!key) {
      if (extra.rank === 1) {
        key = 'race_win';
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else if (extra.rank <= 10) {
        key = 'race_end_10';
      } else {
        key = 'race_lose';
      }
    }
    await print_title_with_kojo(this.#kojo, key, kita, ...args);
  }

  async school_atrium(kita, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 68) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 42) {
      return false;
    }
    await print_title_with_kojo(this.#kojo, 'sa_42', kita, me, callname);
    all_reward_in_event(this.id, { attr: { [attr_enum.intelligence]: 5 } }) &&
      (await era.waitAnyKey());
    return true;
  }

  async train_fail(kita, me, callname, hook, extra) {
    await CustomizedEdu.print_fail_info_in_train(
      kita,
      extra.train,
      extra.fumble,
    );
    if (extra.train !== attr_enum.intelligence) {
      extra['args'] = extra.fumble ? fumble_result.fumble : fumble_result.fail;
      await print_title_with_kojo(
        this.#kojo,
        extra.fumble ? 'train_fumble' : 'train_fail',
        kita,
        me,
        callname,
      );
      hook.arg = 0;
    }
  }

  async train_success_add(kita, me, callname, hook, extra) {
    return (
      (await print_title_with_kojo(this.#kojo, 'ts_add', kita, callname))[0] ===
      1
    );
  }

  async week_end(kita, me, callname, hook, extra, ebj) {
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 'beginning':
        await print_title_with_kojo(
          this.#kojo,
          'we_beginning',
          kita,
          me,
          callname,
        );
        add_event(event_hooks.week_start, ebj);
        temp = new Array(5).fill(0);
        gacha(base_attr_list, 3).forEach((e) => (temp[e] = 5));
        wait = all_reward_in_event(this.id, { attr: temp });
        break;
      case 47 + 32:
      case 95 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:68:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(this.#kojo, 'we_summer_end', kita, me);
        temp = new Array(5).fill(0);
        gacha(base_attr_list, 3).forEach((e) => (temp[e] = 5));
        wait = all_reward_in_event(this.id, { attr: temp });
        break;
      case 95 + 10:
        new KitaEduMarks().senior_valentine++;
        await print_title_with_kojo(this.#kojo, 'we_95_10', kita, me);
        begin_and_init_ero(0, 68);
        era.set('palam:68:受虐快感', era.get('tcvar:68:受虐快感上限'));
        await masturbate(this.id);
        end_ero_and_train(false);
        sys_like_chara(68, 0, 5, true, 5);
        add_jewel_reward(68, [8, 10, 13], [100, 100, 50]);
        wait = true;
        break;
      case 95 + 48:
        await print_title_with_kojo(this.#kojo, 'we_95_48', kita, me, callname);
        wait = sys_like_chara(this.id, 0, 50);
        break;
      case 144:
        if (era.get('love:68') === 100 && era.get('relation:68:0') > 375) {
          await print_title_with_kojo(
            this.#kojo,
            'ge_wife_end',
            kita,
            me,
            callname,
          );
        } else if (era.get('love:68') >= 75 && era.get('relation:68:0') > 225) {
          await print_title_with_kojo(
            this.#kojo,
            'ge_love_end',
            kita,
            me,
            callname,
          );
        }
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(kita, me, callname, hook, extra, ebj) {
    const edu_marks = new KitaEduMarks();
    let wait = false;
    switch (ebj?.arg) {
      case 'beginning':
        await print_event_name(this.#kojo.ws_beginning.title(kita), kita);
        await this.#kojo.ws_beginning(kita, me, callname);
        wait = all_reward_in_event(this.id, { attr: [5, 0, 5] });
        break;
      case 38:
        await print_title_with_kojo(
          this.#kojo,
          'ws_38',
          kita,
          get_chara_talk(60),
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 10 },
        });
        break;
      case 47 + 7:
        await print_title_with_kojo(this.#kojo, 'ws_47_7', kita, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.strength]: 5 },
        });
        break;
      case 47 + 10:
        await print_title_with_kojo(this.#kojo, 'ws_47_10', kita, me, callname);
        wait = sys_like_chara(this.id, 0, 5, !0, 1);
        break;
      case 47 + 11:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_11',
          kita,
          get_chara_talk(3),
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(3),
          pt: 20,
        });
        break;
      case 47 + 29:
      case 95 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:68:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return false;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_summer_start',
          kita,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, { attr: [0, 0, 10, 10] });
        break;
      case 47 + 48:
        era.set('cflag:68:节日事件标记', 0);
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_48',
              kita,
              me,
              callname,
            )
          )[0] === 1
        ) {
          wait = sys_like_chara(this.id, 0, 10);
        } else {
          wait = sys_like_chara(this.id, 0, 5, !0, 2);
        }
        break;
      case 95 + 1:
        era.set('cflag:68:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_1',
          kita,
          get_chara_talk(301),
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 95 + 6:
        await print_title_with_kojo(this.#kojo, 'ws_95_6', kita, me, callname);
        wait = sys_like_chara(68, 0, 100);
        edu_marks.senior_valentine++;
        era.set('cflag:68:节日事件标记', 0);
        break;
      default:
        return await super.week_start(kita, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
