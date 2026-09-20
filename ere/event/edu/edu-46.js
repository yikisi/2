const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async race_start(falcon, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let _default = true;
    switch (extra.race) {
      case race_enum.begin_race:
        if (edu_weeks < 48) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'before_begin_race',
            falcon,
            me,
            callname,
          );
        }
        break;
      case race_enum.sats_sho:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'before_sats_sho',
          falcon,
          me,
          callname,
        );
        break;
      case race_enum.japa_dir:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'before_japa_dir',
          falcon,
          get_chara_talk(301),
          me,
          callname,
        );
        break;
      case race_enum.jbc_cls:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          edu_weeks < 96 ? 'before_jbc_cls_c' : 'before_jbc_cls_s',
          falcon,
          me,
          callname,
        );
        break;
      case race_enum.toky_dai:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          edu_weeks < 96 ? 'before_toky_dai_c' : 'before_toky_dai_s',
          falcon,
          me,
          callname,
        );
        break;
      case race_enum.febr_sta:
        _default = false;
        await print_title_with_kojo(this.#kojo, 'before_febr_sta', falcon);
        break;
      case race_enum.teio_sho:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'before_teio_sho',
          falcon,
          me,
          callname,
        );
        break;
      case race_enum.cham_cup:
        if (edu_weeks > 96) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'before_cham_cup_s',
            falcon,
            me,
          );
        }
    }
    if (_default) {
      return await super.race_start(falcon, me, callname, hook, extra);
    }
  }

  async race_end(falcon, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let _default = true;
    switch (extra.race) {
      case race_enum.begin_race:
        if (edu_weeks < 48 && extra.rank === 1) {
          await print_title_with_kojo(
            this.#kojo,
            'begin_race_win',
            falcon,
            me,
            callname,
          );
        }
        break;
      case race_enum.sats_sho:
        _default = false;
        if (extra.rank === 1) {
          await print_title_with_kojo(
            this.#kojo,
            'sats_sho_win',
            falcon,
            get_chara_talk(2),
            me,
            callname,
          );
        } else {
          await print_title_with_kojo(this.#kojo, 'sats_sho_lose', falcon, me);
        }
        break;
      case race_enum.japa_dir:
        if (extra.rank === 1) {
          await print_title_with_kojo(
            this.#kojo,
            'japa_dir_win',
            falcon,
            me,
            callname,
          );
        }
        break;
      case race_enum.jbc_cls:
        if (extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            edu_weeks < 96 ? 'jbc_cls_win_c' : 'jbc_cls_win_s',
            falcon,
            me,
            callname,
          );
        }
        break;
      case race_enum.toky_dai:
        if (extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            edu_weeks < 96 ? 'toky_dai_win_c' : 'toky_dai_win_s',
            falcon,
            me,
            callname,
          );
        }
        break;
      case race_enum.febr_sta:
        if (extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'febr_sta_win',
            falcon,
            me,
            callname,
          );
        }
        break;
      case race_enum.teio_sho:
        _default = false;
        await print_title_with_kojo(
          this.#kojo,
          'teio_sho_win',
          falcon,
          get_chara_talk(4),
          me,
          callname,
        );
        break;
      case race_enum.cham_cup:
        if (edu_weeks > 96 && extra.rank === 1) {
          await print_title_with_kojo(
            this.#kojo,
            'cham_cup_win_s',
            falcon,
            me,
            callname,
          );
        }
    }
    if (_default) {
      return await super.race_end(falcon, me, callname, hook, extra);
    }
  }

  async week_start(falcon, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 'next_beginning':
        await print_title_with_kojo(this.#kojo, ebj.arg, falcon, me, callname);
        break;
      case 9:
        await print_title_with_kojo(
          this.#kojo,
          'ws_9',
          falcon,
          get_chara_talk(301),
          me,
          callname,
        );
        break;
      case 18:
        await print_title_with_kojo(this.#kojo, 'ws_18', falcon, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(10),
          pt: 10,
        });
        break;
      case 24:
        await print_title_with_kojo(this.#kojo, 'ws_24', falcon, me, callname);
        wait = all_reward_in_event(this.id, { attr: [0, 0, 10] });
        break;
      case 30:
        await print_title_with_kojo(this.#kojo, 'ws_30', falcon, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(10),
          pt: 10,
        });
        break;
      case 40:
        await print_title_with_kojo(this.#kojo, 'ws_40', falcon, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(10),
          pt: 10,
        });
        break;
      case 47 + 1:
        era.set('cflag:46:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              falcon,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: new Array(5).fill(10),
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { pt: 100 });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { base: [600] });
        }
        break;
      case 47 + 6:
        era.set('cflag:46:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_6',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 9:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_9',
          falcon,
          get_chara_talk(2),
          me,
          callname,
        );
        break;
      case 47 + 15:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_15',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:0:位置') !== era.get('cflag:46:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_29',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 30:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:0:位置') !== era.get('cflag:46:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        era.set('cflag:46:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_30',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 40:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_40',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 41:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_41',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 42:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_42',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 48:
        era.set('cflag:46:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_48',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 6:
        era.set('cflag:46:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_6',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 9:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_9',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 14:
        era.set('cflag:46:节日事件标记', 0);
        await print_title_with_kojo(this.#kojo, 'ws_95_14', falcon, me);
        break;
      case 95 + 18:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_18',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 29:
        if (
          era.get('cflag:46:位置') !== location_enum.beach ||
          era.get('cflag:46:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(event_hooks.week_start, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_29',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 30:
        if (
          era.get('cflag:46:位置') !== location_enum.beach ||
          era.get('cflag:46:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(event_hooks.week_start, ebj);
          return;
        }
        era.set('cflag:46:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_30',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 48:
        era.set('cflag:46:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_48',
          falcon,
          me,
          callname,
        );
        break;
      default:
        return await super.week_start(falcon, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }

  async week_end(falcon, me, callname, hook, extra, ebj) {
    let wait;
    switch (ebj?.arg) {
      case 'beginning':
        await print_title_with_kojo(
          this.#kojo,
          ebj.arg,
          falcon,
          get_chara_talk(37),
          me,
          sys_get_callname(37, 0),
        );
        add_event(event_hooks.week_start, ebj.set_arg('next_beginning'));
        break;
      case 34:
        await print_title_with_kojo(this.#kojo, 'we_34', falcon, me);
        break;
      case 47 + 15:
        await print_title_with_kojo(
          this.#kojo,
          'we_47_15',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 21:
        await print_title_with_kojo(
          this.#kojo,
          'we_47_21',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:0:位置') !== era.get('cflag:46:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_47_32',
          falcon,
          me,
          callname,
        );
        break;
      case 47 + 39:
        await print_title_with_kojo(this.#kojo, 'we_47_39', falcon, me);
        break;
      case 95 + 10:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_10',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 17:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_17',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 23:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_23',
          falcon,
          get_chara_talk(4),
          me,
          callname,
          sys_get_callname(4, 0),
        );
        break;
      case 95 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:0:位置') !== era.get('cflag:46:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_32',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 37:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_37',
          falcon,
          get_chara_talk(301),
          me,
          callname,
        );
        break;
      case 95 + 38:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_38',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 40:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_40',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 45:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_45',
          falcon,
          me,
          callname,
        );
        break;
      case 95 + 47:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_47',
          falcon,
          me,
          callname,
        );
    }
    wait && (await era.waitAnyKey());
  }

  train_success_content(falcon, me, callname, hook, extra) {
    this.#kojo.get_ts_content(falcon, di18n.n_attr[extra.train]);
  }

  async train_success_add(falcon, me, callname, hook, extra) {
    return (
      (
        await print_title_with_kojo(this.#kojo, 'ts_add', falcon, me, callname)
      )[0] === 1
    );
  }

  async train_fail(falcon, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return;
    }
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    const key = extra.fumble ? 'train_fumble' : 'train_fail';
    const fail_again = Math.random() < extra.args.ratio.fail_again;
    const [ret] = await print_title_with_kojo(
      this.#kojo,
      key,
      falcon,
      me,
      callname,
      fail_again,
    );
    if (ret === 1) {
      hook.arg = 0;
    } else if (fail_again) {
      hook.arg = -1;
    } else {
      hook.arg = 1;
    }
  }

  async out_start(falcon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 46) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'idol_ice_cream') {
      return;
    }
    await print_title_with_kojo(this.#kojo, ebj.arg, falcon, me, callname);
    return true;
  }

  async office_study(falcon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 46) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'deadline_fight') {
      return;
    }
    await print_title_with_kojo(this.#kojo, ebj.arg, falcon, me, callname);
    return true;
  }

  async out_river(falcon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 46) {
      add_event(event_hooks.out_river, ebj);
      return;
    }
    if (ebj?.arg !== 'loneliness_girl') {
      return;
    }
    await print_title_with_kojo(this.#kojo, ebj.arg, falcon, me, callname);
    return true;
  }

  async out_station(falcon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 46) {
      add_event(event_hooks.out_station, ebj);
      return;
    }
    if (ebj?.arg !== 'shine_girl') {
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      ebj.arg,
      falcon,
      get_chara_talk(4),
      me,
      sys_get_callname(4, 0),
    );
    return true;
  }

  async out_shopping(falcon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 46) {
      add_event(event_hooks.out_shopping, ebj);
      return;
    }
    if (ebj?.arg !== 'curiosity_girl') {
      return;
    }
    await print_title_with_kojo(this.#kojo, ebj.arg, falcon, me, callname);
    return true;
  }

  async school_rooftop(falcon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 46) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'rooftop_idol') {
      return;
    }
    await print_title_with_kojo(this.#kojo, ebj.arg, falcon, me);
    return true;
  }

  async school_atrium(falcon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 46) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'petrichor_girl') {
      return;
    }
    await print_event_name(this.#kojo.petrichor_girl.title(falcon), falcon);
    await this.#kojo.petrichor_girl(falcon, me, callname);
    return true;
  }

  async crazy_fan_end() {
    await print_title_with_kojo(
      this.#kojo,
      'be_crazy_fan',
      get_chara_talk(this.id),
      get_chara_talk(0),
      sys_get_callname(this.id, 0),
    );
  }

  async out_church(falcon, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 46) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 95 + 1) {
      return;
    }
    let wait = false;
    era.set('cflag:46:节日事件标记', 0);
    switch (
      (await print_title_with_kojo(this.#kojo, 'oc_95_1', falcon, me))[0]
    ) {
      case 1:
        wait = all_reward_in_event(this.id, { base: [600] });
        break;
      case 2:
        wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { attr: [0, 0, 10], pt: 100 });
    }
    wait && (await era.waitAnyKey());
    return true;
  }
};
