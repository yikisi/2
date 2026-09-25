const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_pressure } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_change_money } = require('#/system/sys-calc-flag');

const print_ero_page = require('#/page/page-ero');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const color_7 = require('#/data/chara-colors').chara_colors[7];
const { get_date_obj } = require('#/data/date-indicator');
const { lust_border } = require('#/data/ero/orgasm-const');
const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async crazy_fan_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'crazy_fan_end',
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async out_church(gs, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 7) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj.arg !== 95 + 1) {
      return;
    }
    era.set('cflag:7:节日事件标记', 0);
    await print_event_name(
      [{ color: color_7[1], content: this.#kojo.oc_95_1.title }],
      gs,
    );
    await this.#kojo.oc_95_1(gs, me);
    if (all_reward_in_event(this.id, { relation: 10, motivation: 1 })) {
      await era.waitAnyKey();
    }
    sys_change_pressure(7, -2500);
    return true;
  }

  async out_start(gs, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 7) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'golden_ship_date') {
      return;
    }
    let wait;
    await print_event_name(
      [{ color: color_7[1], content: this.#kojo.os_golden_ship_date.title }],
      gs,
    );
    if ((await this.#kojo.os_golden_ship_date(gs, me, callname))[0] === 1) {
      wait = all_reward_in_event(this.id, { attr: [0, 20] });
    } else {
      wait = all_reward_in_event(this.id, { attr: [0, 0, 20] });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async race_end(gs, me, callname, hook, extra) {
    let key;
    let args = [me, callname];
    if (extra.rank === 1) {
      switch (extra.race) {
        case race_enum.begin_race:
          if (era.get(`cflag:${this.id}:育成回合计时`) < 48) {
            key = 'begin_race_win';
            extra.attr_change = gacha(base_attr_list, 3).reduce((p, c) => {
              p[c] = 3;
              return p;
            }, {});
            extra.pt_change = 30;
          }
          break;
        case race_enum.hope_sta:
          extra.relation_change = 0;
          extra.love_change = 0;
          await print_event_name(
            [{ color: color_7[1], content: this.#kojo.hope_sta_win.title }],
            gs,
          );
          for (const s of await this.#kojo.hope_sta_win(gs, me)) {
            if (s === 1) {
              extra.love_change += 2;
            } else {
              extra.relation_change += 10;
            }
          }
          extra.attr_change = base_attr_list.map(() => 3);
          extra.pt_change = 45;
          return;
        case race_enum.sats_sho:
          key = 'sats_sho_win';
          extra.attr_change = [0, 0, 3];
          break;
        case race_enum.kiku_sho:
          key = 'kiku_sho_win';
          args = [get_chara_talk(37), me];
          extra.attr_change = base_attr_list.map(() => 3);
          extra.pt_change = 45;
          break;
        case race_enum.arim_kin:
          if (era.get(`cflag:${this.id}:育成回合计时`) < 96) {
            key = 'arim_kin_win_c';
            extra.attr_change = base_attr_list.map(() => 3);
            extra.pt_change = 45;
            args = [get_chara_talk(37), me];
          } else {
            key = 'arim_kin_win_s';
            new GoldShipEduMarks().keywords++;
            extra.attr_change = base_attr_list.map(() => 3);
            extra.pt_change = 45;
            args = [get_chara_talk(37), get_chara_talk(48), me, callname];
          }
          break;
        case race_enum.tenn_spr:
          key = 'tenn_spr_win';
          args = [get_chara_talk(37), me];
          new GoldShipEduMarks().keywords++;
          extra.attr_change = base_attr_list.map(() => 3);
          extra.pt_change = 45;
          break;
        case race_enum.takz_kin:
          if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
            await print_event_name(
              [
                {
                  color: color_7[1],
                  content: this.#kojo.takz_kin_win_s.title,
                },
              ],
              gs,
            );
            const bad_result = Math.random() < 0.2;
            const ret =
              (await this.#kojo.takz_kin_win_s(
                gs,
                get_chara_talk(37),
                get_chara_talk(48),
                me,
                callname,
                check_aim_race(
                  RaceHistory.get(this.id).get(),
                  race_enum.takz_kin,
                  1,
                  1,
                ),
                bad_result,
              )) ?? [];
            if (ret[0] === 1) {
              extra.attr_change = new Array(5).fill(3);
              extra.attr_change[attr_enum.strength] += 15;
              extra.pt_change = 45;
              extra.motivation_change = 1;
            } else if (ret[0] === 2) {
              if (bad_result) {
                extra.attr_change = new Array(5).fill(3);
                extra.pt_change = 45;
                extra.motivation_change = 1;
                extra.skill_change = [200433];
              } else {
                extra.attr_change = new Array(5).fill(8);
                extra.pt_change = 75;
                extra.motivation_change = 1;
              }
            }
            new GoldShipEduMarks().keywords++;
            return;
          }
          break;
        case race_enum.tenn_sho:
          if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
            key = 'tenn_sho_win_s';
            new GoldShipEduMarks().keywords++;
            extra.attr_change = [3, 13, 3, 3, 3];
            extra.pt_change = 45;
            args = [get_chara_talk(48), me];
          }
      }
    } else {
      return await super.race_end(gs, me, callname, hook, extra);
    }
    if (!key) {
      key = 'race_end_win';
    }
    await print_event_name(
      [{ color: color_7[1], content: this.#kojo[key].title }],
      gs,
    );
    await this.#kojo[key](gs, ...args);
  }

  async school_atrium(gs, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 7) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 3:
        await print_event_name(
          [{ color: color_7[1], content: this.#kojo.sa_47_3.title }],
          gs,
        );
        await this.#kojo.sa_47_3(
          gs,
          new CharaTalk(this.id, color_7[1]),
          get_chara_talk(45),
          me,
        );
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 3),
          pt: 45,
        });
        break;
      case 95 + 41:
        await print_event_name(
          [{ color: color_7[1], content: this.#kojo.sa_95_41.title }],
          gs,
        );
        if ((await this.#kojo.sa_95_41(gs, get_chara_talk(49), me))[0] === 2) {
          era.set(
            'base:7:性欲',
            Math.max(era.get('base:7:性欲'), lust_border.itch),
          );
          era.set(
            'base:49:性欲',
            Math.max(era.get('base:49:性欲'), lust_border.itch),
          );
          begin_and_init_ero(0, 7, 49);
          await print_ero_page(7, true);
          await end_ero_and_show_result(true);
        }
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 5 },
        });
        break;
      case 'heroine_red':
        await print_event_name(
          [{ color: color_7[1], content: this.#kojo.sa_heroine_red.title }],
          gs,
        );
        if ((await this.#kojo.sa_heroine_red(gs, me))[0] === 1) {
          wait = all_reward_in_event(this.id, {
            attr: { [attr_enum.intelligence]: 20 },
          });
        } else {
          wait = all_reward_in_event(this.id, {
            attr: { [attr_enum.toughness]: 20 },
          });
        }
        break;
      case 'sudden_look_back':
        await print_event_name(
          [
            {
              color: color_7[1],
              content: this.#kojo.sa_sudden_look_back.title,
            },
          ],
          gs,
        );
        if ((await this.#kojo.sa_sudden_look_back(gs, me))[0] === 1) {
          wait = all_reward_in_event(this.id, {
            attr: { [attr_enum.endurance]: 10, [attr_enum.intelligence]: 10 },
          });
        } else {
          wait = all_reward_in_event(this.id, { attr: [20] });
        }
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async school_rooftop(gs, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 7) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'shoubu') {
      return;
    }
    let wait = false;
    await print_event_name(
      [{ color: color_7[1], content: this.#kojo.sr_shoubu.title }],
      gs,
    );
    const success = Math.random() < 0.8;
    const ret = await this.#kojo.sr_shoubu(
      gs,
      get_chara_talk(49),
      me,
      sys_get_colored_callname(this.id, 49),
      success,
    );
    if (ret[0] === 3) {
      era.set(
        'base:49:性欲',
        Math.max(era.get('base:49:性欲'), lust_border.absent_mind),
      );
      begin_and_init_ero(0, 7, 49);
      await print_ero_page(49, true);
      await end_ero_and_show_result(true);
    } else if (ret[1] === 1) {
      wait = all_reward_in_event(this.id, { base: [100] });
    } else if (Math.random() < 0.5) {
      wait = all_reward_in_event(this.id, { skills: [200142], pt: 60 });
    } else {
      wait = all_reward_in_event(this.id, { pt: 15 });
      era.set('status:7:摸鱼', 1);
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async train_success_add(gs, me, callname, hook, extra) {
    await print_event_name(
      [{ color: color_7[1], content: this.#kojo.ts_add.title }],
      gs,
    );
    return (await this.#kojo.ts_add(gs, me, callname))[0] === 1;
  }

  async week_start(gs, me, callname, hook, extra, ebj) {
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 47 + 1:
        era.set('cflag:7:节日事件标记', 0);
        await print_event_name(
          [{ color: color_7[1], content: this.#kojo.ws_47_1.title }],
          gs,
        );
        switch ((await this.#kojo.ws_47_1(gs, me))[0]) {
          case 1:
            wait = all_reward_in_event(this.id, { attr: [0, 40] });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.intelligence]: 40 },
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 50 });
        }
        break;
      case 47 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_event_name(
          [{ color: color_7[1], content: this.#kojo.ws_47_29.title }],
          gs,
        );
        await this.#kojo.ws_47_29(gs, me);
        temp = base_attr_list.map(() => 3);
        gacha(base_attr_list, 3).forEach((a) => (temp[a] = 8));
        wait = all_reward_in_event(this.id, { attr: temp, pt: 45 });
        break;
      case 47 + 41:
        await print_event_name(
          [{ color: color_7[1], content: this.#kojo.ws_47_41.title }],
          gs,
        );
        await this.#kojo.ws_47_41(gs, get_chara_talk(15), me);
        wait = all_reward_in_event(this.id, { attr: [0, 5] });
        break;
      case 95 + 3:
        await print_event_name(
          [{ color: color_7[1], content: this.#kojo.ws_95_3.title }],
          gs,
        );
        await this.#kojo.ws_95_3(gs, get_chara_talk(35), me);
        wait = all_reward_in_event(this.id, {
          attr: {
            [attr_enum.toughness]: 5,
          },
        });
        break;
      case 95 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_event_name(
          [{ color: color_7[1], content: this.#kojo.ws_95_29.title }],
          gs,
        );
        await this.#kojo.ws_95_29(gs, me, callname);
        sys_change_money(-5, this.id);
        wait = all_reward_in_event(this.id, { relation: 10, love: 2 });
        if (era.get('love:7') >= 75) {
          update_kiss_exp(get_date_obj(), this.id, 0);
        }
        break;
      case 'eden':
        new GoldShipEduMarks().keywords++;
        await print_event_name(
          [{ color: color_7[1], content: this.#kojo.ws_eden.title }],
          gs,
        );
        if (
          (
            await this.#kojo.ws_eden(gs, get_chara_talk(302), me, callname)
          )[0] === 1
        ) {
          await quick_into_sex(this.id);
          await this.#kojo.ws_eden_sex_end(gs, me);
        }
        wait = all_reward_in_event(this.id, { relation: 200 });
        break;
      case 'hoverboard':
        await print_title_with_kojo(this.#kojo, 'hoverboard', gs, me);
        era.set('item:小金船号', 1);
        break;
      case 'carrot':
        if (
          (
            await print_title_with_kojo(
              i18n().timon.random_events,
              'gs_carrot',
              gs,
            )
          )[0] === 1
        ) {
          sys_change_money(20);
        } else {
          wait = all_reward_in_event(0, { base: [100] });
        }
        break;
      default:
        return await super.week_start(gs, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
