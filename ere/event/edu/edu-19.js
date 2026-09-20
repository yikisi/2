const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { base_attr_list } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

function get_diamond_lord() {
  const diamond_lord = new CharaTalk(0, '#cdaa7d');
  diamond_lord.name = i18n().name.digital_npc;
  return diamond_lord;
}

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async out_church(digital, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 19) {
      add_event(event_hooks.out_church, ebj);
      return;
    }
    if (ebj.arg !== 95 + 1) {
      return;
    }
    era.set('cflag:19:节日事件标记', 0);
    let wait = false;
    switch (
      (
        await print_title_with_kojo(
          this.#kojo,
          'oc_95_1',
          digital,
          get_chara_talk(15),
          get_chara_talk(32),
          get_chara_talk(36),
          get_chara_talk(46),
          me,
          callname,
          sys_get_colored_callname(this.id, 15),
          sys_get_colored_callname(this.id, 61),
          sys_get_colored_callname(32, 0),
          sys_get_colored_callname(32, this.id),
          sys_get_colored_callname(36, this.id),
          sys_get_colored_callname(46, this.id),
        )
      )[0]
    ) {
      case 1:
        wait = all_reward_in_event(this.id, { attr: [0, 20] });
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          attr: base_attr_list.map(() => 5),
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { pt: 30 });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async race_end(digital, me, callname, hook, extra) {
    let key = '';
    /** @type {[]} */
    let args = [me, callname];
    if (extra.rank === 1) {
      switch (extra.race) {
        case race_enum.begin_race:
          if (era.get('cflag:19:育成回合计时') < 48) {
            key = 'begin_race_win';
            args.push(race_infos[race_enum.hyac_sta].get_colored_name());
          }
          break;
        case race_enum.hyac_sta:
          key = 'hyac_sta_win';
          args = [
            get_diamond_lord(),
            me,
            callname,
            race_infos[race_enum.hyac_sta].get_colored_name(),
          ];
          break;
        case race_enum.nhk_cup:
          key = 'nhk_cup_win';
          args = [
            get_chara_talk(15),
            get_chara_talk(58),
            me,
            sys_get_colored_callname(this.id, 15),
            sys_get_colored_callname(this.id, 58),
            sys_get_colored_callname(15, 0),
            sys_get_colored_callname(15, this.id),
            sys_get_colored_callname(15, 58),
            sys_get_colored_callname(58, this.id),
            race_infos[race_enum.takz_kin].get_colored_name(),
            race_infos[race_enum.japa_dir].get_colored_name(),
          ];
          break;
        case race_enum.japa_dir:
          key = 'japa_dir_win';
          args = [
            get_chara_talk(15),
            get_chara_talk(58),
            me,
            callname,
            sys_get_colored_callname(this.id, 15),
            sys_get_colored_callname(this.id, 58),
            race_infos[race_enum.japa_dir].get_colored_name(),
          ];
          break;
        case race_enum.mile_cha:
          if (era.get(`cflag:${this.id}:育成回合计时`) < 96) {
            key = 'mile_cha_win_c';
            args = [
              get_chara_talk(61),
              me,
              callname,
              sys_get_colored_callname(this.id, 15),
              sys_get_colored_callname(this.id, 18),
              sys_get_colored_callname(this.id, 61),
              sys_get_colored_callname(61, this.id),
              race_infos[race_enum.mile_cha].get_colored_name(),
            ];
          }
          break;
        case race_enum.tenn_sho:
          if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
            key = 'tenn_sho_win_s';
            args = [
              me,
              callname,
              race_infos[race_enum.tenn_sho].get_colored_name(),
            ];
          }
      }
    }
    if (!key) {
      if (extra.rank === 1) {
        key = 'race_end_win';
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else {
        return await super.race_end(digital, me, callname, hook, extra);
      }
    }
    await print_title_with_kojo(this.#kojo, key, digital, ...args);
  }

  async race_start(digital, me, callname, hook, extra) {
    const race_history = RaceHistory.get(this.id);
    let key = '';
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:19:育成回合计时') < 48) {
          key = 'before_begin_race';
        }
        break;
      case race_enum.hyac_sta:
        key = 'before_hyac_sta';
        args = [
          get_chara_talk(58),
          me,
          callname,
          race_infos[race_enum.nikk_hai].get_colored_name(),
        ];
        break;
      case race_enum.nhk_cup:
        key = 'before_nhk_cup';
        break;
      case race_enum.japa_dir:
        key = 'before_japa_dir';
        args = [me, race_infos[race_enum.japa_dir].get_colored_name()];
        break;
      case race_enum.mile_cha:
        if (era.get(`cflag:${this.id}:育成回合计时`) < 96) {
          key = 'before_mile_cha_c';
          args = [get_chara_talk(61), sys_get_colored_callname(61, this.id)];
        }
        break;
      case race_enum.tenn_sho:
        if (era.get(`cflag:${this.id}:育成回合计时`) > 96) {
          key = 'before_tenn_sho_s';
          args = [
            get_chara_talk(15),
            get_chara_talk(58),
            sys_get_colored_callname(this.id, 15),
            sys_get_colored_callname(this.id, 58),
            sys_get_colored_callname(15, this.id),
            sys_get_colored_callname(58, this.id),
            race_infos[race_enum.tenn_sho].get_colored_name(),
          ];
        }
    }
    if (!key) {
      return await this.#kojo.race_start(
        digital,
        race_history.get_result(47 + 26)?.race === race_enum.japa_dir
          ? race_history.get_result(47 + 26).rank
          : void 0,
      );
    }
    await print_title_with_kojo(this.#kojo, key, digital, ...args);
  }

  async week_end(digital, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 42:
        await print_title_with_kojo(
          this.#kojo,
          'we_42',
          digital,
          get_chara_talk(58),
          get_chara_talk(61),
          me,
          callname,
          sys_get_colored_callname(this.id, 58),
          sys_get_colored_callname(this.id, 61),
          race_infos[race_enum.mile_cha].get_colored_name(),
        );
        break;
      case 47 + 24:
        await print_title_with_kojo(
          this.#kojo,
          'we_47_24',
          digital,
          get_chara_talk(15),
          get_chara_talk(58),
          me,
          sys_get_colored_callname(this.id, 15),
          sys_get_colored_callname(this.id, 58),
          race_infos[race_enum.japa_dir].get_colored_name(),
        );
        break;
      case 47 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_47_29',
          digital,
          get_chara_talk(61),
          me,
          sys_get_colored_callname(this.id, 61),
          sys_get_colored_callname(61, 0),
          sys_get_colored_callname(61, this.id),
          race_infos[race_enum.mile_cha].get_colored_name(),
        );
        break;
      case 47 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return false;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_47_32',
          digital,
          get_chara_talk(61),
          me,
          sys_get_colored_callname(this.id, 61),
          sys_get_colored_callname(61, 0),
          sys_get_colored_callname(61, this.id),
          race_infos[race_enum.takm_kin].get_colored_name(),
        );
        break;
      case 47 + 37:
        await print_title_with_kojo(
          this.#kojo,
          'we_47_37',
          digital,
          get_chara_talk(61),
          sys_get_colored_callname(this.id, 61),
          sys_get_colored_callname(61, this.id),
          race_infos[race_enum.sprt_sta].get_colored_name(),
          race_infos[race_enum.mile_cha].get_colored_name(),
        );
        break;
      case 95 + 17:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_17',
          digital,
          race_infos[race_enum.nhk_cup].get_colored_name(),
        );
        break;
      case 95 + 23:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_23',
          digital,
          get_chara_talk(15),
          get_chara_talk(58),
          me,
          sys_get_colored_callname(this.id, 15),
          sys_get_colored_callname(this.id, 58),
          race_infos[race_enum.tenn_sho].get_colored_name(),
        );
        break;
      case 95 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_32',
          digital,
          get_chara_talk(15),
          get_chara_talk(58),
          me,
          callname,
          sys_get_colored_callname(this.id, 15),
          sys_get_colored_callname(this.id, 58),
          sys_get_colored_callname(this.id, 61),
          race_infos[race_enum.tenn_sho].get_colored_name(),
        );
        break;
      case 95 + 48:
        await print_title_with_kojo(
          this.#kojo,
          'we_95_48',
          digital,
          get_chara_talk(59),
          get_chara_talk(83),
          get_diamond_lord(),
          me,
          callname,
          sys_get_colored_callname(this.id, 59),
          sys_get_colored_callname(59, this.id),
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(digital, me, callname, hook, extra, ebj) {
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 47 + 1:
        era.set('cflag:19:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              digital,
              get_chara_talk(3),
              get_chara_talk(9),
              get_chara_talk(58),
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, { attr: [10] });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { attr: [0, 10] });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 20 });
        }
        break;
      case 47 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return false;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_29',
          digital,
          me,
          race_infos[race_enum.japa_dir].get_colored_name(),
          race_infos[race_enum.mile_cha].get_colored_name(),
        );
        break;
      case 95 + 6:
        era.set('cflag:19:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_6',
          digital,
          me,
          callname,
        );
        era.print(di18n.tb_item.notify(100));
        era.add('item:情人节巧克力', 1);
        break;
      case 95 + 14:
        era.set('cflag:19:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_14',
          digital,
          get_chara_talk(17),
          me,
          callname,
        );
        break;
      case 95 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_29',
          digital,
          get_chara_talk(61),
          me,
          sys_get_colored_callname(this.id, 15),
          sys_get_colored_callname(this.id, 58),
          sys_get_colored_callname(this.id, 61),
          sys_get_colored_callname(61, this.id),
          race_infos[race_enum.nhk_cup].get_colored_name(),
          race_infos[race_enum.tenn_sho].get_colored_name(),
        );
        break;
      case 95 + 48:
        era.set('cflag:19:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_48',
          digital,
          get_chara_talk(17),
          me,
          callname,
          sys_get_colored_callname(17, this.id),
        );
        break;
      case 'palace':
        await CustomizedEdu.common_palace(digital, me);
        temp = RaceHistory.get(this.id).get();
        if (
          check_aim_race(temp, race_enum.hyac_sta, 1, 1) &&
          check_aim_race(temp, race_enum.nhk_cup, 1, 1) &&
          check_aim_race(temp, race_enum.japa_dir, 1, 1) &&
          check_aim_race(temp, race_enum.mile_cha, 1, 1) &&
          check_aim_race(temp, race_enum.tenn_sho, 2, 1)
        ) {
          era.drawLine();
          era.set('flag:当前位置', location_enum.gate);
          await print_title_with_kojo(
            this.#kojo,
            'ws_palace',
            digital,
            get_chara_talk(15),
            get_chara_talk(32),
            get_chara_talk(58),
            get_chara_talk(61),
          );
          era.set('flag:当前位置', location_enum.office);
        } else {
          await CustomizedEdu.common_palace_relation(digital, me);
        }
    }
    wait && (await era.waitAnyKey());
  }
};
