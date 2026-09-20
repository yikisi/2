const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const yandere_list = require('#/data/event/yandere-list');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  /**
   * @param {CharaTalk} ss
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async sugar_or_milk(ss, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 400) {
      add_event(hook.hook, ebj);
      return;
    }
    const [ret] = await print_title_with_kojo(
      this.#kojo,
      'sugar_or_milk',
      ss,
      me,
      sys_get_colored_callname(this.id, 25),
    );
    if (
      all_reward_in_event(this.id, {
        attr: ret === 1 ? [0, 20] : [0, 0, 0, 0, 20],
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} ss
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async play_dice(ss, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 400) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait;
    if (
      (
        await print_title_with_kojo(this.#kojo, 'play_dice', ss, me, callname)
      )[0] === 1
    ) {
      wait = all_reward_in_event(this.id, { attr: [0, 10, 0, 0, 10] });
    } else {
      wait = all_reward_in_event(this.id, { attr: [10], pt: 20 });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_church(ss, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 400) {
      add_event(hook.hook, ebj);
      return;
    }
    let ret = true;
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 1:
        await print_title_with_kojo(
          this.#kojo,
          'ws_ny_1',
          ss,
          get_chara_talk(25),
          me,
          callname,
        );
        era.set('cflag:400:节日事件标记', 0);
        wait = all_reward_in_event(this.id, {
          attr: [0, 0, 0, 15, 0],
          base: [300],
          relation: 40,
        });
        break;
      case 95 + 1:
        await print_title_with_kojo(this.#kojo, 'ws_ny_2', ss, me, callname);
        era.set('cflag:400:节日事件标记', 0);
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(5),
          base: [300],
          relation: 20,
        });
        break;
      default:
        ret = false;
    }
    wait && (await era.waitAnyKey());
    return ret;
  }

  async race_end(ss, me, callname, hook, extra) {
    if (extra.rank === 1) {
      let _default = false;
      switch (extra.race) {
        case race_enum.begin_race:
          extra.attr_change = new Array(5).fill(0);
          if (era.get('cflag:400:育成回合计时') === 23) {
            await print_title_with_kojo(
              this.#kojo,
              'perfect_beginning',
              ss,
              me,
              callname,
            );
            gacha(base_attr_list, 3).forEach((e) => (extra.attr_change[e] = 5));
            extra.pt_change = 30;
          } else {
            await print_title_with_kojo(this.#kojo, 'good_beginning', ss);
            gacha(base_attr_list, 2).forEach((e) => (extra.attr_change[e] = 3));
          }
          break;
        case race_enum.kent_der:
          await print_title_with_kojo(
            this.#kojo,
            'kent_der_win',
            ss,
            get_chara_talk(25),
            me,
            callname,
            race_infos[race_enum.prea_sta].get_colored_name(),
            race_infos[race_enum.belm_sta].get_colored_name(),
          );
          extra.attr_change = new Array(5).fill(0);
          gacha(base_attr_list, 3).forEach((e) => (extra.attr_change[e] = 10));
          break;
        case race_enum.prea_sta:
          if (
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.kent_der,
              1,
              1,
            )
          ) {
            await print_title_with_kojo(
              this.#kojo,
              'double_crowns',
              ss,
              me,
              callname,
              race_infos[race_enum.belm_sta].get_colored_name(),
            );
            extra.attr_change = new Array(5).fill(0);
            gacha(base_attr_list, 3).forEach(
              (e) => (extra.attr_change[e] = 10),
            );
            extra.relation_change = 30;
          } else {
            _default = true;
          }
          break;
        case race_enum.belm_sta:
          if (
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.kent_der,
              1,
              1,
            ) &&
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.prea_sta,
              1,
              1,
            )
          ) {
            await print_title_with_kojo(this.#kojo, 'triple_crowns', ss, me);
            extra.attr_change = new Array(5).fill(10);
            extra.motivation_change = 1;
            extra.pt_change = 45;
          } else {
            _default = true;
          }
          break;
        case race_enum.arim_kin:
          if (era.get('cflag:400:育成回合计时') < 96) {
            await print_title_with_kojo(
              this.#kojo,
              'arim_kin_classical',
              ss,
              me,
              callname,
            );
            extra.relation_change = 50;
          } else {
            await print_title_with_kojo(
              this.#kojo,
              'arim_kin_senior',
              ss,
              me,
              callname,
            );
            extra.relation_change = 100;
          }
          break;
        case race_enum.tenn_spr:
          await print_title_with_kojo(
            this.#kojo,
            'tenn_spr_win',
            ss,
            get_chara_talk(25),
            me,
            callname,
            sys_get_callname(0, this.id),
          );
          extra.attr_change = [0, 20];
          extra.pt_change = 1;
          extra.relation_change = 50;
          break;
        case race_enum.tenn_sho:
          if (
            era.get('cflag:400:育成回合计时') > 96 &&
            check_aim_race(RaceHistory.get(400).get(), race_enum.tenn_spr, 2, 1)
          ) {
            await print_title_with_kojo(
              this.#kojo,
              'tenn_sho_win',
              ss,
              me,
              callname,
            );
            extra.attr_change = new Array(5).fill(5);
          } else {
            _default = true;
          }
          break;
        default:
          _default = true;
      }
      if (_default) {
        await print_title_with_kojo(this.#kojo, 'race_end_win', ss, me);
      }
    } else {
      if (extra.rank <= 5) {
        await print_title_with_kojo(this.#kojo, 'race_end_5', ss, me);
      } else if (extra.rank <= 10) {
        await print_title_with_kojo(
          this.#kojo,
          'race_end_lose',
          ss,
          me,
          callname,
        );
      } else {
        return await super.race_end(ss, me, callname, hook, extra);
      }
    }
  }

  /**
   * @param {CharaTalk} ss
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} ebj
   */
  async enjoy_cat(ss, me, callname, hook, extra, ebj) {
    const curr = era.get('flag:当前互动角色');
    if (curr > 0 && curr !== 400) {
      add_event(hook.hook, ebj);
      return;
    }
    const [ret] = await print_title_with_kojo(
      this.#kojo,
      'enjoy_cat',
      ss,
      me,
      callname,
    );
    if (
      all_reward_in_event(this.id, {
        attr: ret === 1 ? [0, 0, 0, 10, 10] : [0, 10, 10],
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  async week_end(ss, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 'we_beginning':
        await print_title_with_kojo(
          this.#kojo,
          'we_beginning',
          ss,
          me,
          callname,
        );
        break;
      case 47 + 24:
        if (
          era.get('cflag:0:位置') !== location_enum.new_york ||
          era.get('cflag:400:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
        } else {
          if (
            (
              await print_title_with_kojo(
                this.#kojo,
                'we_before_prea_sta',
                ss,
                me,
                callname,
              )
            )[0] === 1
          ) {
            yandere_list.push(this.id);
            wait = all_reward_in_event(this.id, {
              motivation: 1,
              relation: 50,
            });
          } else {
            wait = all_reward_in_event(this.id, {
              motivation: -1,
              relation: 20,
            });
          }
        }
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(ss, me, callname, hook, extra, ebj) {
    const race_history = RaceHistory.get(this.id).get();
    let wait = false;
    switch (ebj?.arg) {
      case 'beginning':
        await print_title_with_kojo(
          this.#kojo,
          'ws_beginning',
          ss,
          me,
          callname,
        );
        wait = all_reward_in_event(this.id, { attr: [0, 5, 0, 5, 0] });
        break;
      case 31:
        await print_title_with_kojo(this.#kojo, 'ws_31', ss, me, callname);
        wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 10, 0] });
        break;
      case 39:
        await print_title_with_kojo(this.#kojo, 'ws_39', ss, me, callname);
        wait = all_reward_in_event(this.id, { attr: [0, 0, 0, 10, 0] });
        break;
      case 47:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47',
          ss,
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
        );
        wait = all_reward_in_event(this.id, { attr: [5, 0, 5] });
        break;
      case 47 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:400:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
        } else {
          await print_title_with_kojo(
            this.#kojo,
            'ws_ss_1',
            ss,
            get_chara_talk(25),
            me,
            callname,
            check_aim_race(race_history, race_enum.kent_der, 1, 1) +
              check_aim_race(race_history, race_enum.prea_sta, 1, 1) +
              check_aim_race(race_history, race_enum.belm_sta, 1, 1),
          );
          wait = all_reward_in_event(this.id, {
            attr: new Array(5).fill(3),
            pt: 30,
          });
        }
        break;
      case 47 + 48:
        await print_title_with_kojo(
          this.#kojo,
          'ws_christmas',
          ss,
          get_chara_talk(25),
          me,
          callname,
        );
        era.set('cflag:400:节日事件标记', 0);
        wait = all_reward_in_event(this.id, { attr: [0, 10], base: [200] });
        break;
      case 95 + 13:
        await print_title_with_kojo(
          this.#kojo,
          'ws_rainy',
          ss,
          get_chara_talk(25),
          me,
          callname,
          sys_get_colored_callname(this.id, 25),
        );
        break;
      case 95 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:400:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
        } else {
          await print_title_with_kojo(this.#kojo, 'ws_ss_2', ss, me);
        }
        break;
      default:
        return await super.week_start(ss, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
