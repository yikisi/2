const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const { get_mother } = require('#/event/snippets/108500');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const CharaSkills = require('#/data/chara-skills');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const RubyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-85');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async crazy_fan_end() {
    if (
      (
        await print_title_with_kojo.ending(
          this.#kojo,
          'be_ntr',
          get_chara_talk(85),
          get_chara_talk(0),
          sys_get_callname(this.id, 0),
        )
      )[0] > 0
    ) {
      await era.clear();
      era.drawLine();
      return await super.crazy_fan_end();
    }
  }

  async office_study(ruby, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'rest_day') {
      return;
    }
    await print_title_with_kojo(this.#kojo, 'os_rest_day', ruby, me);
    return true;
  }

  async out_church(ruby, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 47 + 1:
        era.set('cflag:85:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'oc_47_1',
              ruby,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.speed]: 20 },
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.endurance]: 20 },
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 20 });
        }
        break;
      case 95 + 1:
        era.set('cflag:85:节日事件标记', 0);
        temp = await print_title_with_kojo(
          this.#kojo,
          'oc_95_1',
          ruby,
          get_chara_talk(65),
          me,
          callname,
        );
        switch (temp[0]) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.speed]: 20 },
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.endurance]: 20 },
              ...(temp[1] === 1 ? { relation: -5, love: 1 } : { relation: 5 }),
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 20 });
        }
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(ruby, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'shopping_together') {
      return;
    }
    await print_title_with_kojo(this.#kojo, 'os_shopping_together', ruby, me);
    if (
      era.get('relation:85:0') > 150 &&
      all_reward_in_event(this.id, { relation: 30, love: 5 })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  async out_start(ruby, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'hot_spring_event') {
      return;
    }
    const edu_marks = new RubyEduMarks();

    await print_title_with_kojo(
      this.#kojo,
      'os_hot_spring_event',
      ruby,
      me,
      callname,
      edu_marks.hot_spring > 0,
      Math.floor((edu_marks.hot_spring - 96) / 4),
    );
    const cache = era.get('flag:当前位置');
    era.set('flag:当前位置', location_enum.hot_spring);
    await quick_into_sex(this.id);
    era.set('flag:当前位置', cache);
    return true;
  }

  async out_station(ruby, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, ebj);
      return;
    }
    switch (ebj?.arg) {
      case 'wait_station':
        await print_title_with_kojo(this.#kojo, 'os_wait_station', ruby, me);
        break;
      case 'station':
        await print_title_with_kojo(this.#kojo, 'os_station', ruby, me);
    }
    return true;
  }

  async race_end(ruby, me, callname, hook, extra) {
    let key;
    /** @type {[]} */
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:85:育成回合计时') < 48 && extra.rank === 1) {
          const ret = await print_title_with_kojo(
            this.#kojo,
            'begin_race_win',
            ruby,
            me,
            race_infos[race_enum.hoch_rev].get_colored_name(),
            race_infos[race_enum.oka_sho].get_colored_name(),
            race_infos[race_enum.takz_kin].get_colored_name(),
            race_infos[race_enum.arim_kin].get_colored_name(),
          );
          extra.relation_change = extra.love_change = 0;
          for (const s of ret) {
            if (s === 2) {
              extra.relation_change -= 5;
              extra.love_change++;
            }
          }
        }
        break;
      case race_enum.hoch_rev:
        if (extra.rank === 1) {
          key = 'hoch_rev_win';
          args = [callname, race_infos[race_enum.oka_sho].get_colored_name()];
          extra.attr_change = new Array(5).fill(3);
          extra.attr_change[get_random_value(0, 4)] = 0;
          extra.pt_change = 35;
        }
        break;
      case race_enum.oka_sho:
        if (extra.rank === 1) {
          key = 'oka_sho_win';
          args = [race_infos[race_enum.yush_him].get_colored_name()];
          extra.attr_change = new Array(5).fill(3);
          extra.pt_change = 45;
        }
        break;
      case race_enum.yush_him:
        extra.attr_change = new Array(5).fill(3);
        extra.pt_change = 45;
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              extra.rank === 1 ? 'yush_him_win' : 'yush_him_lose',
              ruby,
              me,
              callname,
              race_infos[race_enum.rose_sta].get_colored_name(),
              race_infos[race_enum.shuk_sho].get_colored_name(),
            )
          )[0] === 1
        ) {
          extra.relation_change = 3;
        } else {
          extra.love_change = 1;
        }
        return;
      case race_enum.rose_sta:
        if (extra.rank === 1) {
          const ret = await print_title_with_kojo(
            this.#kojo,
            'rose_sta_win',
            ruby,
            me,
            callname,
            race_infos[race_enum.shuk_sho].get_colored_name(),
            race_infos[race_enum.takm_kin].get_colored_name(),
            race_infos[race_enum.eliz_cup].get_colored_name(),
          );
          extra.relation_change = 0;
          if (ret[0] === 2) {
            extra.relation_change = 3;
          }
          if (ret[1] === 2) {
            extra.relation_change = -3;
            extra.love_change = 1;
          }
          extra.attr_change = new Array(5).fill(3);
          extra.attr_change[get_random_value(0, 4)] = 0;
          extra.pt_change = 35;
          return;
        }
        break;
      case race_enum.takm_kin:
        if (extra.rank === 1) {
          key = 'takm_kin_win';
          extra.attr_change = new Array(5).fill(3);
          extra.pt_change = 45;
          extra.skill_change = [
            !CharaSkills.get(this.id).get().includes(200672) ? 200672 : 200671,
          ];
        }
        break;
      case race_enum.yasu_kin:
        if (era.get(`cflag:${this.id}:育成回合计时`) > 96 && extra.rank === 1) {
          key = 'yasu_kin_win_s';
          args.push(race_infos[race_enum.sprt_sta].get_colored_name());
          extra.attr_change = new Array(5).fill(3);
          extra.pt_change = 45;
          extra.skill_change = [
            !CharaSkills.get(this.id).get().includes(201382) ? 201382 : 201381,
          ];
        }
        break;
      case race_enum.sprt_sta:
        if (era.get('cflag:85:育成回合计时') > 96 && extra.rank === 1) {
          key = 'sprt_sta_win_s';
          args = [
            get_chara_talk(93),
            me,
            callname,
            sys_get_colored_callname(this.id, 93),
            sys_get_colored_callname(93, this.id),
            race_infos[race_enum.swan_sta].get_colored_name(),
          ];
          extra.attr_change = new Array(5).fill(3);
          extra.pt_change = 45;
        }
        break;
      case race_enum.swan_sta:
        if (era.get('cflag:85:育成回合计时') > 96 && extra.rank === 1) {
          key = 'swan_sta_win_s';
          args = [
            get_chara_talk(93),
            sys_get_colored_callname(this.id, 93),
            race_infos[race_enum.mile_cha].get_colored_name(),
          ];
          extra.attr_change = new Array(5).fill(20);
          extra.base_change = [-150];
          extra.pt_change = 120;
          extra.skill_change = [
            !CharaSkills.get(85).get().includes(200962) ? 200962 : 200961,
            !CharaSkills.get(85).get().includes(200972) ? 200972 : 200971,
          ];
        }
        break;
      case race_enum.mile_cha:
        if (era.get('cflag:85:育成回合计时') > 96 && extra.rank === 1) {
          key = 'mile_cha_win_s';
          args = [get_mother()];
          extra.attr_change = new Array(5).fill(3);
          extra.pt_change = 45;
          extra.skill_change = [
            !CharaSkills.get(85).get().includes(200612) ? 200612 : 200611,
            !CharaSkills.get(85).get().includes(201032) ? 201032 : 201031,
            !CharaSkills.get(85).get().includes(201042) ? 201042 : 201041,
          ];
        }
    }
    if (!key) {
      return await super.race_end(ruby, me, callname, hook, extra);
    }
    await print_title_with_kojo(this.#kojo, key, ruby, ...args);
  }

  async race_start(ruby, me, callname, hook, extra) {
    let key;
    /** @type {[]} */
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:85:育成回合计时') < 48) {
          const ret = await print_title_with_kojo(
            this.#kojo,
            'before_begin_race',
            ruby,
            me,
          );
          extra.relation_change = 0;
          extra.love_change = 0;
          if (ret[0] === 2) {
            extra.relation_change += 3;
          }
          if (ret[1] === 2) {
            extra.love_change++;
          }
          if (ret[2] === 2) {
            extra.relation_change += 3;
            extra.love_change++;
            if (ret[3] === 2) {
              extra.relation_change += 3;
              extra.love_change++;
            }
          }
          return;
        }
        break;
      case race_enum.sprt_sta:
        if (era.get('cflag:85:育成回合计时') > 96) {
          key = 'before_sprt_sta_s';
          args = [
            get_chara_talk(93),
            me,
            sys_get_colored_callname(this.id, 93),
            sys_get_colored_callname(93, this.id),
          ];
        }
        break;
      case race_enum.swan_sta:
        if (era.get('cflag:85:育成回合计时') > 96) {
          key = 'before_swan_sta_s';
          args = [
            get_chara_talk(93),
            sys_get_colored_callname(93, this.id),
            race_infos[race_enum.swan_sta].get_colored_name(),
          ];
        }
    }
    if (!key) {
      return await super.race_start(ruby, me, callname, hook, extra);
    }
    await print_title_with_kojo(this.#kojo, key, ruby, ...args);
  }

  async week_end(ruby, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(this.#kojo, 'we_47_32', ruby, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: gacha(base_attr_list, 3).reduce((p, c) => {
            p[c] = 5;
            return p;
          }, {}),
        });
        break;
      case 95 + 30:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'we_95_30',
              ruby,
              me,
              callname,
            )
          )[0] === 2
        ) {
          const pregnant_cache = era.get('cflag:85:妊娠阶段');
          begin_and_init_ero(0, 85);
          set_palam_to_max(0, part_enum.penis);
          set_palam_to_max(85, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(85, part_enum.virgin),
            false,
          );
          end_ero_and_train();
          era.set('cflag:85:妊娠阶段', pregnant_cache);
        }
        break;
      case 95 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_32',
          ruby,
          me,
          sys_get_colored_callname(this.id, 93),
        );
        wait = all_reward_in_event(this.id, {
          attr: gacha(base_attr_list, 3).reduce((p, c) => {
            p[c] = 5;
            return p;
          }, {}),
        });
        break;
      default:
        return await super.week_end(ruby, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(ruby, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 35:
        wait = all_reward_in_event(this.id, {
          attr: [0, 0, 5],
          relation:
            (
              await print_title_with_kojo(
                this.#kojo,
                'ws_35',
                ruby,
                get_mother(),
                me,
                callname,
              )
            )[0] === 1
              ? 3
              : 5,
        });
        break;
      case 47:
        wait = all_reward_in_event(this.id, {
          attr: [5],
          ...((
            await print_title_with_kojo(this.#kojo, 'ws_47', ruby, me, callname)
          )[0] === 2
            ? { relation: 5, love: 1 }
            : {}),
        });
        break;
      case 47 + 19:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_19',
          ruby,
          me,
          callname,
          race_infos[race_enum.yush_him].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, { attr: [0, 5] });
        break;
      case 47 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        wait = all_reward_in_event(
          this.id,
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_29',
              ruby,
              me,
              race_infos[race_enum.yush_him].get_colored_name(),
              race_infos[race_enum.shuk_sho].get_colored_name(),
            )
          )[0] === 1
            ? { attr: [0, 0, 10], relation: 5 }
            : { attr: [0, 0, 0, 10] },
        );
        break;
      case 95 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_95_29',
              ruby,
              get_chara_talk(83),
              me,
              callname,
              sys_get_colored_callname(this.id, 93),
              sys_get_colored_callname(93, this.id),
            )
          )[0] === 1
        ) {
          begin_and_init_ero(0, 85);
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(85, part_enum.breast),
            false,
          );
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(85, part_enum.breast),
            false,
          );
          end_ero_and_train();
        }
        break;
      case 95 + 43:
        await print_title_with_kojo(this.#kojo, 'ws_95_43', ruby, me);
        wait = all_reward_in_event(this.id, { attr: [5, 0, 5] });
        break;
      case 'rose_master':
        wait = all_reward_in_event(
          this.id,
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_rose_master',
              ruby,
              me,
              callname,
            )
          )[0] === 1
            ? { relation: 5 }
            : { love: 2 },
        );
        break;
      default:
        return await super.week_start(ruby, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
