const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const { get_date_obj } = require('#/data/date-indicator');
const RiceEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-30');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async office_rest(rice, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 30) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj.arg !== 'letter') {
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'or_letter',
      rice,
      me,
      callname,
      sys_get_callname(this.id, this.id),
    );
    sys_change_motivation(30, 1) && (await era.waitAnyKey());
    return true;
  }

  async office_study(rice, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 30) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj.arg !== 'dance') {
      return;
    }
    let wait = false;
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'os_dance',
          rice,
          me,
          callname,
          sys_get_callname(this.id, this.id),
        )
      )[0] === 1
    ) {
      wait = all_reward_in_event(this.id, { attr: [0, 10, 0, 10] });
    } else {
      wait = all_reward_in_event(this.id, {
        attr: { [attr_enum.intelligence]: 10 },
        pt: 10,
      });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_church(rice, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 30) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj.arg !== 95 + 1) {
      return;
    }
    era.set('cflag:30:节日事件标记', 0);
    let wait;
    switch (
      (
        await print_title_with_kojo(
          this.#kojo,
          'oc_95_1',
          rice,
          me,
          callname,
          sys_get_callname(this.id, this.id),
          race_infos[race_enum.tenn_spr].get_colored_name(),
        )
      )[0]
    ) {
      case 1:
        wait = all_reward_in_event(this.id, { attr: [0, 20], relation: 5 });
        era.set('status:30:伤病', Math.floor(era.get('status:30:伤病') / 2));
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 5),
          love: 2,
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { pt: 30 });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(rice, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj.arg !== 95 + 21) {
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'os_95_21',
      rice,
      get_chara_talk(301),
      me,
      callname,
      sys_get_callname(this.id, this.id),
      sys_get_colored_callname(301, this.id),
      race_infos[race_enum.takz_kin].get_colored_name(),
    );
    if (all_reward_in_event(this.id, { attr: { [attr_enum.toughness]: 5 } })) {
      await era.waitAnyKey();
    }
    return true;
  }

  async race_end(rice, me, callname, hook, extra) {
    let key;
    let args = [me, callname, sys_get_callname(this.id, this.id)];
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1 && era.get('cflag:30:育成回合计时') < 48) {
          if (
            (
              await print_title_with_kojo(
                this.#kojo,
                'begin_race_win',
                rice,
                get_chara_talk(26),
                me,
                callname,
                args[2],
                sys_get_colored_callname(this.id, 26),
                race_infos[race_enum.sprg_sta].get_colored_name(),
              )
            )[0] === 1
          ) {
            extra.relation_change = 5;
          } else {
            extra.love_change = 1;
          }
          extra.attr_change = gacha(base_attr_list, 3).reduce((p, c) => {
            p[c] = 3;
            return p;
          }, {});
          extra.pt_change = 30;
          return;
        }
        break;
      case race_enum.sprg_sta:
        if (extra.rank === 1) {
          key = 'sprg_sta_win';
        } else {
          key = 'sprg_sta_lose';
          args.unshift(get_chara_talk(26));
        }
        extra.attr_change = base_attr_list.map(() => 3);
        extra.pt_change = 35;
        break;
      case race_enum.toky_yus:
        if (extra.rank === 1) {
          key = 'toky_yus_win';
          args = [
            get_chara_talk(26),
            ...args,
            race_infos[race_enum.kiku_sho].get_colored_name(),
          ];
          extra.attr_change = base_attr_list.map(() => 3);
        } else {
          key = 'toky_yus_lose';
          extra.attr_change = base_attr_list.map(() => 2);
        }
        extra.pt_change = 45;
        break;
      case race_enum.kiku_sho:
        if (extra.rank === 1) {
          key = 'kiku_sho_win';
          args = [
            get_chara_talk(26),
            ...args,
            sys_get_colored_callname(this.id, 26),
            sys_get_colored_callname(26, this.id),
            race_infos[race_enum.kiku_sho].get_colored_name(),
          ];
          extra.attr_change = base_attr_list.map(() => 3);
        } else {
          key = 'kiku_sho_lose';
          extra.attr_change = base_attr_list.map(() => 2);
        }
        extra.pt_change = 45;
        break;
      case race_enum.nikk_sho:
        if (extra.rank <= 5) {
          key = 'nikk_sho_end';
          args = [
            get_chara_talk(47),
            ...args,
            sys_get_colored_callname(47, this.id),
          ];
          extra.attr_change = gacha(base_attr_list, 4).reduce((p, c) => {
            p[c] = 3;
            return p;
          }, {});
          extra.pt_change = 30;
        }
        break;
      case race_enum.tenn_spr:
        if (extra.rank === 1) {
          key = 'tenn_spr_win';
          args = [
            get_chara_talk(13),
            get_chara_talk(26),
            get_chara_talk(47),
            get_chara_talk(52),
            ...args,
            sys_get_colored_callname(this.id, 13),
            sys_get_colored_callname(this.id, 52),
            sys_get_colored_callname(13, this.id),
            sys_get_colored_callname(26, this.id),
            sys_get_colored_callname(26, 47),
            sys_get_colored_callname(47, 26),
            sys_get_colored_callname(52, this.id),
            race_infos[race_enum.tenn_spr].get_colored_name(),
            race_infos[race_enum.takz_kin].get_colored_name(),
          ];
          extra.attr_change = base_attr_list.map(() => 3);
          extra.pt_change = 45;
        }
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:30:育成回合计时') > 96) {
          if (extra.rank === 1) {
            key = 'takz_kin_win_s';
            args = [
              ...args,
              sys_get_colored_callname(this.id, 13),
              sys_get_colored_callname(this.id, 26),
              race_infos[race_enum.takz_kin].get_colored_name(),
              race_infos[race_enum.arim_kin].get_colored_name(),
            ];
            extra.attr_change = base_attr_list.map(() => 3);
          } else {
            key = 'takz_kin_lose_s';
            extra.attr_change = base_attr_list.map(() => 2);
          }
          extra.pt_change = 45;
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:30:育成回合计时') > 96 && extra.rank === 1) {
          key = 'arim_kin_win_s';
        }
    }
    if (!key) {
      if (extra.rank === 1) {
        const edu_marks = new RiceEduMarks();
        if (!edu_marks.love && era.get('love:30') >= 75) {
          edu_marks.love = 1;
          key = 'race_end_love';
          update_kiss_exp(get_date_obj(), 0, this.id);
        } else {
          key = 'race_end_win';
        }
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else {
        key = 'race_end_lose';
      }
    }
    await print_title_with_kojo(this.#kojo, key, rice, ...args);
  }

  async race_start(rice, me, callname, hook, extra) {
    const self_name = sys_get_callname(this.id, this.id);
    if (Math.random() < 0.1) {
      await print_title_with_kojo(
        this.#kojo,
        'race_start_moti_add',
        rice,
        me,
        callname,
        self_name,
      );
      extra.motivation_change = 1;
    } else {
      await print_title_with_kojo(
        this.#kojo,
        'race_start',
        rice,
        me,
        callname,
        self_name,
      );
    }
  }

  async school_atrium(rice, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 30) {
      add_event(event_hooks.school_atrium, ebj);
      return;
    }
    const self_name = sys_get_callname(this.id, this.id);
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 46:
        await print_title_with_kojo(
          this.#kojo,
          'sa_47_46',
          rice,
          get_chara_talk(26),
          me,
          callname,
          self_name,
          sys_get_colored_callname(this.id, 26),
          sys_get_colored_callname(26, this.id),
          race_infos[race_enum.kiku_sho].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 5 },
        });
        break;
      case 'teach':
        await print_title_with_kojo(
          this.#kojo,
          'sa_teach',
          rice,
          get_chara_talk(47),
          me,
          callname,
          sys_get_callname(this.id, this.id),
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.intelligence]: 10 },
          pt: 10,
        });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async train(attr) {
    await this.#kojo.train(get_chara_talk(this.id));
  }

  async train_fail(rice, me, callname, hook, extra) {
    await this.#kojo.train_fail(get_chara_talk(this.id));
    return await super.train_fail(rice, me, callname, hook, extra);
  }

  train_success_content(rice, me, callname, hook, extra) {
    this.#kojo.ts_content(rice, di18n.n_attr[extra.train]);
  }

  async train_success_add(rice, me, callname, hook, extra) {
    await print_title_with_kojo(
      this.#kojo,
      'ts_add',
      rice,
      me,
      callname,
      sys_get_callname(this.id, this.id),
    );
    return true;
  }

  async week_end(rice, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 15:
        await print_title_with_kojo(
          this.#kojo,
          'we_15',
          rice,
          get_chara_talk(41),
          me,
          sys_get_colored_callname(41, this.id),
          race_infos[race_enum.tenn_spr].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, { attr: [0, 5] });
        break;
      case 47 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_47_32',
          rice,
          get_chara_talk(52),
          me,
          sys_get_colored_callname(52, this.id),
        );
        wait = all_reward_in_event(this.id, {
          attr: gacha(base_attr_list, 3).reduce((p, c) => {
            p[c] = 5;
            return p;
          }, {}),
        });
        break;
      case 95 + 14:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_14',
          rice,
          get_chara_talk(26),
          get_chara_talk(47),
          me,
          callname,
          sys_get_callname(this.id, this.id),
          sys_get_colored_callname(this.id, 26),
          sys_get_colored_callname(this.id, 47),
          sys_get_colored_callname(26, this.id),
          sys_get_colored_callname(47, 0),
          sys_get_colored_callname(47, this.id),
          race_infos[race_enum.tenn_spr].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 10 },
        });
        break;
      case 95 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_32',
          rice,
          me,
          callname,
          sys_get_callname(this.id, this.id),
        );
        wait = all_reward_in_event(this.id, {
          attr: gacha(base_attr_list, 3).reduce((p, c) => {
            p[c] = 5;
            return [];
          }, {}),
        });
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(rice, me, callname, hook, extra, ebj) {
    const self_name = sys_get_callname(this.id, this.id);
    let wait = false;
    switch (ebj?.arg) {
      case 'beginning':
        await print_title_with_kojo(
          this.#kojo,
          'ws_beginning',
          rice,
          get_chara_talk(26),
          me,
          self_name,
        );
        break;
      case 47 + 1:
        era.set('cflag:30:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              rice,
              get_chara_talk(26),
              get_chara_talk(41),
              get_chara_talk(52),
              me,
              callname,
              self_name,
              sys_get_colored_callname(this.id, 52),
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.toughness]: 10 },
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.endurance]: 10 },
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 20 });
        }
        break;
      case 47 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(
                this.#kojo,
                'ws_47_29',
                rice,
                get_chara_talk(26),
                get_chara_talk(52),
                me,
                callname,
                self_name,
                sys_get_colored_callname(this.id, 52),
                sys_get_colored_callname(52, this.id),
              )
            )[0] === 1
              ? { [attr_enum.strength]: 10 }
              : { [attr_enum.toughness]: 10 },
        });
        break;
      case 95 + 6:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_6',
          rice,
          me,
          callname,
          self_name,
        );
        era.set('cflag:30:节日事件标记', 0);
        era.add('item:情人节巧克力', 1);
        break;
      case 95 + 14:
        era.set('cflag:30:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_14',
          rice,
          get_chara_talk(13),
          get_chara_talk(26),
          get_chara_talk(47),
          get_chara_talk(52),
          me,
          callname,
          self_name,
          sys_get_colored_callname(47, this.id),
          sys_get_colored_callname(52, this.id),
        );
        break;
      case 95 + 24:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_24',
          rice,
          get_chara_talk(301),
          get_chara_talk(302),
          me,
          callname,
          self_name,
          sys_get_colored_callname(302, 301),
          race_infos[race_enum.takz_kin].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, { attr: [0, 10] });
        break;
      case 95 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(this.#kojo, 'ws_95_29', rice);
        break;
      case 95 + 41:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_41',
          rice,
          me,
          callname,
          self_name,
        );
        wait = all_reward_in_event(this.id, { pt: 30, motivation: 1 });
        break;
      case 95 + 48:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_48',
          rice,
          get_chara_talk(13),
          get_chara_talk(26),
          me,
          callname,
          self_name,
          sys_get_colored_callname(26, this.id),
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        break;
      case 'palace':
        await CustomizedEdu.common_palace(rice, me);
        era.drawLine();
        era.set('flag:当前位置', location_enum.gate);
        await print_title_with_kojo(
          this.#kojo,
          'ws_palace',
          rice,
          me,
          callname,
          self_name,
        );
        era.set('flag:当前位置', location_enum.office);
        break;
      case 'stay':
        await print_title_with_kojo(this.#kojo, 'ws_stay', rice, me, callname);
    }
    wait && (await era.waitAnyKey());
  }
};
