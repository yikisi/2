const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async back_school(nature, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 60) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'see_fish') {
      return false;
    }
    await print_title_with_kojo(
      this.#kojo,
      'see_fish',
      nature,
      me,
      callname,
      sys_get_callname(this.id, this.id),
    );
    all_reward_in_event(this.id, { attr: [0, 0, 0, 10, 10], pt: 20 }) &&
      (await era.waitAnyKey());
    return true;
  }

  async out_shopping(nature, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 60) {
      add_event(hook.hook, event_object);
      return;
    }
    const self_call = sys_get_callname(this.id, this.id);
    let wait = false;
    switch (event_object?.arg) {
      case 'hard_work_trainer':
        await print_event_name(
          this.#kojo.hard_work_trainer.title(self_call),
          nature,
        );
        if (
          (
            await this.#kojo.hard_work_trainer(nature, me, callname, self_call)
          )[0] === 1
        ) {
          era.println();
          wait = sys_like_chara(60, 0, 50);
        } else {
          sys_change_lust(0, lust_from_palam);
          sys_change_lust(60, lust_from_palam);
          await quick_into_sex(60);
        }
        break;
      case 'grass_baseball':
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'grass_baseball',
              nature,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: [0, 20],
              motivation: 1,
              pt: 20,
              skills: [202121],
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: [0, 20, 20],
              pt: 20,
              skills: [202121],
            });
            break;
          case 3:
            sys_change_lust(0, lust_from_palam);
            sys_change_lust(60, lust_from_palam);
            // 拉拉队服
            await quick_into_sex(60);
        }
        break;
      default:
        return false;
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_start(nature, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 60) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_arg = event_object?.arg;
    if (event_arg !== 95 + 10) {
      return false;
    }
    await print_title_with_kojo(
      this.#kojo,
      'o_s_95_10',
      nature,
      get_chara_talk(13),
      get_chara_talk(27),
      me,
    );
    if (all_reward_in_event(this.id, { attr: [0, 5, 0, 5] })) {
      await era.waitAnyKey();
    }
    return true;
  }

  async race_end(nature, me, callname, hook, extra) {
    const edu_weeks = era.get('cflag:60:育成回合计时');
    const self_call = sys_get_callname(this.id, this.id);
    let _default = true;
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1 && edu_weeks < 48) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'begin_race',
            nature,
            me,
            callname,
            self_call,
          );
          extra.relation_change = 50;
        }
        break;
      case race_enum.waka_sta:
        _default = false;
        if (extra.rank === 1) {
          await print_title_with_kojo(
            this.#kojo,
            'waka_sta_win',
            nature,
            get_chara_talk(3),
            me,
          );
        } else {
          await print_title_with_kojo(
            this.#kojo,
            'waka_sta_lose',
            nature,
            get_chara_talk(3),
            me,
            callname,
            self_call,
          );
        }
        break;
      case race_enum.koku_kin:
        if (edu_weeks < 95 && extra.rank <= 5) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'koku_kin',
            nature,
            me,
            callname,
          );
          extra.relation_change = 50;
        }
        break;
      case race_enum.kiku_sho:
        if (extra.rank <= 5) {
          _default = false;
          await print_title_with_kojo(this.#kojo, 'kiku_sho', nature, me);
          if (era.get('love:60') >= 75) {
            sys_change_lust(0, lust_from_palam);
            sys_change_lust(60, lust_from_palam);
            // 决胜服
            await quick_into_sex(60);
          } else {
            extra.relation_change = 50;
          }
        }
        break;
      case race_enum.arim_kin:
        if (extra.rank === 1) {
          _default = false;
          if (edu_weeks < 96) {
            await print_title_with_kojo(
              this.#kojo,
              'arim_kin_classical',
              nature,
              me,
            );
            if (era.get('love:60') >= 75) {
              sys_change_lust(0, lust_from_palam);
              sys_change_lust(60, lust_from_palam);
              // 决胜服
              await quick_into_sex(60);
            } else {
              extra.relation_change = 50;
            }
          } else {
            await print_title_with_kojo(
              this.#kojo,
              'arim_kin_senior',
              nature,
              get_chara_talk(3),
              callname,
            );
            extra.relation_change = 50;
          }
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96 && extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'takz_kin',
            nature,
            get_chara_talk(13),
            get_chara_talk(27),
            me,
          );
          if (era.get('love:60') >= 75) {
            sys_change_lust(0, lust_from_palam);
            sys_change_lust(60, lust_from_palam);
            // 决胜服
            await quick_into_sex(60);
          } else {
            extra.relation_change = 50;
          }
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && extra.rank <= 5) {
          _default = false;
          await print_title_with_kojo(
            this.#kojo,
            'tenn_sho',
            nature,
            callname,
            self_call,
          );
          if (era.get('love:60') >= 75) {
            sys_change_lust(0, lust_from_palam);
            sys_change_lust(60, lust_from_palam);
            // 决胜服
            await quick_into_sex(60);
          } else {
            extra.relation_change = 50;
          }
        }
        break;
      case race_enum.chun_hai:
        if (edu_weeks > 96 && extra.rank === 1) {
          _default = false;
          await print_title_with_kojo(this.#kojo, 'chun_hai', nature);
          extra.relation_change = 50;
        }
    }
    if (_default) {
      if (extra.rank === 1) {
        await print_title_with_kojo(this.#kojo, 'race_win', nature, callname);
      } else {
        return await super.race_end(nature, me, callname, hook, extra);
      }
    }
  }

  async school_atrium(nature, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 60) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_arg = event_object?.arg;
    const self_call = sys_get_callname(this.id, this.id);
    let wait = false;
    if (event_arg === 47 + 33) {
      await print_title_with_kojo(
        this.#kojo,
        's_a_47_33',
        nature,
        me,
        callname,
        self_call,
      );
      wait = all_reward_in_event(this.id, { skills: [200512], attr: [20, 20] });
    } else if (event_arg === 47 + 42) {
      await print_title_with_kojo(
        this.#kojo,
        's_a_47_42',
        nature,
        get_chara_talk(3),
        get_chara_talk(17),
        get_chara_talk(24),
        me,
        callname,
      );
      wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 0, 5] });
    } else if (event_arg === 95 + 42) {
      await print_title_with_kojo(
        this.#kojo,
        's_a_95_42',
        nature,
        me,
        callname,
        Object.values(era.get('cflag:60:育成成绩'))
          .filter((e) => e.race !== race_enum.begin_race)
          .map((e) => race_infos[e.race].name),
      );
      wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 5] });
    } else {
      return false;
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async week_end(nature, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg;
    if (event_arg !== 47 + 32 && event_arg !== 95 + 32) {
      return;
    }
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:60:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_title_with_kojo(this.#kojo, 'we_se', nature, callname);
    era.println();
    sys_like_chara(60, 0, 50) && (await era.waitAnyKey());
  }

  async week_start(nature, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg;
    const self_call = sys_get_callname(this.id, this.id);
    let wait = false;
    if (event_arg === 47 + 1 || event_arg === 95 + 1) {
      switch (
        (
          await print_title_with_kojo(
            this.#kojo,
            'ws_ny',
            nature,
            callname,
            self_call,
          )
        )[0]
      ) {
        case 1:
          wait = all_reward_in_event(this.id, { base: [300] });
          break;
        case 2:
          wait = all_reward_in_event(this.id, { attr: new Array(5).fill(10) });
          break;
        case 3:
          wait = all_reward_in_event(this.id, { pt: 70 });
          break;
        case 4:
          await quick_into_sex(this.id);
      }
      era.set('cflag:60:节日事件标记', 0);
    } else if (event_arg === 47 + 29) {
      if (
        era.get('cflag:0:位置') !== location_enum.beach ||
        era.get('cflag:60:位置') !== era.get('cflag:0:位置')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_title_with_kojo(this.#kojo, 'ws_ss_1', nature, me);
      wait = all_reward_in_event(this.id, {
        attr: new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 10 : 0)),
        pt: 30,
      });
    } else if (event_arg === 95 + 29) {
      if (
        era.get('cflag:0:位置') !== location_enum.beach ||
        era.get('cflag:60:位置') !== era.get('cflag:0:位置')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_title_with_kojo(this.#kojo, 'ws_ss_2', nature);
      wait = all_reward_in_event(this.id, {
        attr: new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 5 : 0)),
      });
    } else {
      return await super.week_start(
        nature,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    wait && (await era.waitAnyKey());
  }
};
