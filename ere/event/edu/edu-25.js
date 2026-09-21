const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum, race_infos } = require('#/data/race/race-const');

const { location_enum } = require('#/data/locations');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const RaceHistory = require('#/data/race/model/race-history');

const { i18n } = require('#/i18n/selector');

function check_tachyon_plan_b() {
  return (
    era.get('cflag:32:育成回合计时') < 3 * 48 && new TachyonEduMarks().plan_b
  );
}

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async back_school(coffee, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 25) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 'our_taste') {
      return;
    }
    const edu_marks = new CoffeeEduMarks();
    edu_marks.our_taste = 1;
    await print_title_with_kojo(
      this.#kojo,
      'bs_our_taste',
      coffee,
      me,
      callname,
    );
    if (
      all_reward_in_event(this.id, {
        attr: new Array(5).fill(10),
        relation: 25,
        love: 5,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  async crazy_fan_end() {
    await print_title_with_kojo.ending(
      this.#kojo,
      'be_crazy_fan',
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }

  async out_church(coffee, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 25) {
      add_event(event_hooks.out_start, ebj);
      return;
    }
    if (ebj.arg !== 95 + 1) {
      return;
    }
    era.set('cflag:25:节日事件标记', 0);

    let wait;
    switch (
      (
        await print_title_with_kojo(
          this.#kojo,
          'oc_95_1',
          coffee,
          get_chara_talk(32),
          me,
          callname,
          sys_get_colored_callname(this.id, 32),
          check_tachyon_plan_b(),
          race_infos[race_enum.kiku_sho].get_colored_name(),
          race_infos[race_enum.arim_kin].get_colored_name(),
          race_infos[race_enum.tenn_spr].get_colored_name(),
        )
      )[0]
    ) {
      case 1:
        wait = all_reward_in_event(this.id, { base: [500], relation: 25 });
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(10),
          relation: 25,
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { pt: 35, relation: 25 });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async race_end(coffee, me, callname, hook, extra) {
    let key;
    /** @type {[]} */
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1 && era.get('cflag:25:育成回合计时') < 48) {
          key = 'begin_race_win';
          extra.relation_change = 15;
          extra.pt_change = 30;
          add_event(
            event_hooks.back_school,
            new EventObject(25, cb_enum.edu).set_arg('our_taste'),
          );
        }
        break;
      case race_enum.hoch_sho:
        if (extra.rank === 1) {
          key = 'hoch_sho_win';
          args = [
            get_chara_talk(32),
            me,
            callname,
            sys_get_colored_callname(32, 0),
            sys_get_colored_callname(32, this.id),
            extra.contestants.some((u) => u.index_chara === 32),
            race_infos[race_enum.hoch_sho].get_colored_name(),
            race_infos[race_enum.sats_sho].get_colored_name(),
            race_infos[race_enum.toky_yus].get_colored_name(),
            race_infos[race_enum.stli_kin].get_colored_name(),
            race_infos[race_enum.kiku_sho].get_colored_name(),
          ];
          extra.attr_change = new Array(5).fill(10);
          extra.attr_change[get_random_value(0, 4)] = 0;
          extra.pt_change = 35;
          extra.relation_change = 25;
          extra.love_change = 3;
        }
        break;
      case race_enum.toky_yus:
        if (extra.rank === 1) {
          key = 'toky_yus_win';
          args = [me, race_infos[race_enum.toky_yus].get_colored_name()];
          extra.attr_change = { [get_random_value(0, 4)]: 20 };
          extra.base_change = [-250];
          extra.pt_change = 45;
          extra.relation_change = 25;
          extra.love_change = 3;
        }
        break;
      case race_enum.stli_kin:
        if (extra.rank === 1) {
          key = 'stli_kin_win';
          args.push(race_infos[race_enum.kiku_sho].get_colored_name());
          extra.attr_change = new Array(5).fill(6);
          extra.attr_change[get_random_value(0, 4)] = 0;
          extra.pt_change = 35;
          extra.relation_change = 20;
        }
        break;
      case race_enum.kiku_sho:
        if (extra.rank === 1) {
          key = 'kiku_sho_win';
          args = [
            get_chara_talk(32),
            me,
            callname,
            sys_get_colored_callname(this.id, 32),
            sys_get_colored_callname(32, this.id),
            check_tachyon_plan_b(),
            race_infos[race_enum.kiku_sho].get_colored_name(),
            race_infos[race_enum.japa_cup].get_colored_name(),
            race_infos[race_enum.arim_kin].get_colored_name(),
          ];
          extra.attr_change = new Array(5).fill(6);
          extra.relation_change = 25;
          extra.love_change = 3;
        }
        break;
      case race_enum.arim_kin:
        if (extra.rank === 1) {
          if (era.get('cflag:25:育成回合计时') <= 96) {
            key = 'arim_kin_win_c';
            args = [
              me,
              callname,
              race_infos[race_enum.kiku_sho].get_colored_name(),
              race_infos[race_enum.arim_kin].get_colored_name(),
              race_infos[race_enum.tenn_spr].get_colored_name(),
            ];
            extra.attr_change = new Array(5).fill(10);
            extra.pt_change = 45;
          } else {
            key = 'arim_kin_win_s';
            extra.attr_change = new Array(5).fill(10);
            extra.pt_change = 45;
            extra.relation_change = 30;
            extra.love_change = 5;
          }
        }
        break;
      case race_enum.tenn_spr:
        if (extra.rank === 1) {
          key = 'tenn_spr_win';
          args = [
            get_chara_talk(32),
            me,
            callname,
            sys_get_colored_callname(this.id, 32),
            new CoffeeEduMarks().horse > 0,
            check_tachyon_plan_b(),
            race_infos[race_enum.tenn_spr].get_colored_name(),
            race_infos[race_enum.takz_kin].get_colored_name(),
          ];
        }
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:25:育成回合计时') > 96 && extra.rank === 1) {
          key = 'takz_kin_win_s';
          args = [
            get_chara_talk(32),
            me,
            callname,
            sys_get_colored_callname(this.id, 32),
            sys_get_colored_callname(32, this.id),
            check_tachyon_plan_b(),
            race_infos[race_enum.takz_kin].get_colored_name(),
            race_infos[race_enum.prix_lat].get_colored_name(),
            race_infos[race_enum.japa_cup].get_colored_name(),
          ];
          extra.attr_change = new Array(5).fill(6);
          extra.pt_change = 45;
          extra.relation_change = 25;
          extra.love_change = 3;
        }
        break;
      case race_enum.japa_cup:
        if (era.get('cflag:25:育成回合计时') > 96 && extra.rank === 1) {
          key = 'japa_cup_win_s';
          args = [
            me,
            callname,
            race_infos[race_enum.japa_cup].get_colored_name(),
            race_infos[race_enum.arim_kin].get_colored_name(),
          ];
          extra.attr_change = new Array(5).fill(10);
          extra.pt_change = 45;
          extra.relation_change = 20;
          extra.love_change = 3;
        }
    }
    if (!key) {
      if (extra.rank === 1) {
        key = 'race_end_win';
      } else if (extra.rank <= 5) {
        key = 'race_end_5';
      } else {
        key = 'race_end_lose';
      }
      args = [callname];
    }
    await print_title_with_kojo(this.#kojo, key, coffee, ...args);
  }

  async race_start(coffee, me, callname, hook, extra) {
    let key;
    /** @type {[]} */
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:25:育成回合计时') < 48) {
          key = 'before_begin_race';
        }
        break;
      case race_enum.hoch_sho:
        key = 'before_hoch_sho';
        args = [
          me,
          sys_get_colored_callname(this.id, 32),
          extra.contestants.some((u) => u.index_chara === 32),
          race_infos[race_enum.hoch_sho].get_colored_name(),
        ];
        break;
      case race_enum.toky_yus:
        key = 'before_toky_yus';
        args.push(race_infos[race_enum.toky_yus].get_colored_name());
        break;
      case race_enum.stli_kin:
        key = 'before_stli_kin';
        args = [
          get_chara_talk(32),
          me,
          sys_get_colored_callname(32, this.id),
          check_tachyon_plan_b(),
          race_infos[race_enum.kiku_sho].get_colored_name(),
        ];
        break;
      case race_enum.kiku_sho:
        key = 'before_kiku_sho';
        args = [
          get_chara_talk(32),
          me,
          callname,
          check_tachyon_plan_b(),
          race_infos[race_enum.sats_sho].get_colored_name(),
          race_infos[race_enum.toky_yus].get_colored_name(),
          race_infos[race_enum.kiku_sho].get_colored_name(),
        ];
        break;
      case race_enum.arim_kin:
        args = [
          me,
          callname,
          race_infos[race_enum.arim_kin].get_colored_name(),
        ];
        if (era.get('cflag:25:育成回合计时') <= 96) {
          key = 'before_arim_kin_c';
        } else {
          await print_title_with_kojo(
            this.#kojo,
            'before_arim_kin_s',
            coffee,
            ...args,
          );
          if (check_tachyon_plan_b()) {
            era.drawLine();
            await print_title_with_kojo(
              i18n().kojo[32].edu,
              'before_arim_kin_b',
              get_chara_talk(32),
              coffee,
              me,
              sys_get_colored_callname(32, 0),
              sys_get_colored_callname(32, this.id),
              callname,
              sys_get_colored_callname(this.id, 32),
              race_infos[race_enum.arim_kin].get_colored_name(),
            );
          }
          return;
        }
        break;
      case race_enum.tenn_spr:
        key = 'before_tenn_spr';
        args = [
          get_chara_talk(32),
          me,
          sys_get_colored_callname(this.id, 32),
          sys_get_colored_callname(32, 0),
          sys_get_colored_callname(32, this.id),
          check_tachyon_plan_b(),
          race_infos[race_enum.tenn_spr].get_colored_name(),
        ];
        break;
      case race_enum.takz_kin:
        if (era.get('cflag:25:育成回合计时') > 96) {
          key = 'before_takz_kin_s';
          args = [
            get_chara_talk(32),
            me,
            sys_get_colored_callname(32, this.id),
            check_tachyon_plan_b(),
            race_infos[race_enum.takz_kin].get_colored_name(),
            race_infos[race_enum.prix_lat].get_colored_name(),
          ];
        }
        break;
      case race_enum.japa_cup:
        if (era.get('cflag:25:育成回合计时') > 96) {
          key = 'before_japa_cup_s';
          args = [
            me,
            callname,
            sys_get_colored_callname(this.id, 32),
            check_tachyon_plan_b(),
            race_infos[race_enum.prix_lat].get_colored_name(),
            race_infos[race_enum.japa_cup].get_colored_name(),
          ];
        }
    }
    if (key) {
      await print_title_with_kojo(this.#kojo, key, coffee, ...args);
    } else {
      await super.race_start(coffee, me, callname, hook, extra);
    }
  }

  async week_end(coffee, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 31:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:25:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'we_47_31',
              coffee,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.strength]: 20 },
              relation: 25,
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.toughness]: 20 },
              relation: 25,
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { relation: 25 });
            new CoffeeEduMarks().horse = 1;
        }
        break;
      case 47 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:25:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_47_32',
          coffee,
          get_chara_talk(32),
          me,
          callname,
          sys_get_colored_callname(32, 0),
          sys_get_colored_callname(32, this.id),
          new CoffeeEduMarks().horse > 0,
          check_tachyon_plan_b(),
        );
        wait = all_reward_in_event(this.id, {
          attr: gacha(base_attr_list, 3).reduce((p, c) => {
            p[c] = 10;
            return p;
          }, new Array(5).fill(0)),
          love: 3,
          pt: 35,
          relation: 20,
        });
        break;
      case 95 + 32:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:25:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_32',
          coffee,
          me,
          new CoffeeEduMarks().horse > 0,
          race_infos[race_enum.japa_cup].get_colored_name(),
        );
        all_reward_in_event(this.id, {
          attr: gacha(base_attr_list, 3).reduce((p, c) => {
            p[c] = 10;
            return p;
          }, new Array(5).fill(0)),
          relation: 20,
          love: 3,
        });
        break;
      case 'scared':
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              ebj.arg,
              coffee,
              me,
              callname,
            )
          )[0] === 1
        ) {
          wait = all_reward_in_event(this.id, {
            base: [0, era.get('maxbase:0:精力') * 0.3],
            love: get_random_value(1, 5),
          });
        } else {
          wait = all_reward_in_event(this.id, { attr: [20] });
        }
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(coffee, me, callname, hook, extra, ebj) {
    const races = RaceHistory.get(this.id).get();
    let wait = false;
    switch (ebj?.arg) {
      case 'beginning':
        await print_title_with_kojo(
          this.#kojo,
          ebj.arg,
          coffee,
          get_chara_talk(32),
          me,
          callname,
          sys_get_colored_callname(this.id, 32),
          sys_get_colored_callname(32, 0),
          sys_get_colored_callname(32, this.id),
        );
        break;
      case 28:
        await print_title_with_kojo(this.#kojo, 'ws_28', coffee, me, callname);
        wait = all_reward_in_event(this.id, {
          attr: [0, 10],
          motivation: -1,
          relation: 25,
          love: 3,
        });
        break;
      case 47 + 1:
        era.set('cflag:25:节日事件标记', 0);
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              coffee,
              me,
              callname,
            )
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, { attr: [0, 20] });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { base: [400] });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 20 });
        }
        break;
      case 47 + 6:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_6',
          coffee,
          get_chara_talk(32),
          me,
          callname,
          sys_get_colored_callname(this.id, 32),
          race_infos[race_enum.hoch_sho].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, {
          attr: new Array(5).fill(6),
          pt: 20,
          relation: 15,
        });
        break;
      case 47 + 17:
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_17',
              coffee,
              me,
              callname,
              race_infos[race_enum.toky_yus].get_colored_name(),
            )
          )[0] === 1
        ) {
          new CoffeeEduMarks().toky_yus = -1;
        }
        wait = all_reward_in_event(this.id, { attr: [0, 10], relation: 20 });
        break;
      case 47 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:25:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_29',
          coffee,
          get_chara_talk(32),
          me,
          callname,
          sys_get_colored_callname(32, 0),
          sys_get_colored_callname(32, this.id),
        );
        break;
      case 47 + 30:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:25:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_30',
          coffee,
          get_chara_talk(32),
          me,
          sys_get_colored_callname(this.id, 32),
          sys_get_colored_callname(32, this.id),
        );
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.intelligence]: 10 },
        });
        break;
      case 95 + 19:
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_19',
          coffee,
          get_chara_talk(32),
          me,
          callname,
          sys_get_colored_callname(32, this.id),
          new CoffeeEduMarks().horse > 0,
          check_tachyon_plan_b(),
          race_infos[race_enum.takz_kin].get_colored_name(),
          race_infos[race_enum.prix_lat].get_colored_name(),
        );
        wait = all_reward_in_event(this.id, { attr: [0, 10], motivation: -1 });
        break;
      case 95 + 29:
        if (
          era.get('cflag:0:位置') !== location_enum.beach ||
          era.get('cflag:25:位置') !== era.get('cflag:0:位置')
        ) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_29',
          coffee,
          me,
          race_infos[race_enum.japa_cup].get_colored_name(),
          race_infos[race_enum.arim_kin].get_colored_name(),
        );
        break;
      case 143 + 1:
        await print_title_with_kojo(
          this.#kojo,
          'ws_143_1',
          coffee,
          me,
          callname,
        );
        break;
      case 'palace':
        await CustomizedEdu.common_palace(coffee, me);
        if (
          check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
          check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
          check_aim_race(races, race_enum.arim_kin, 2, 1) &&
          era.get('relation:25:0') > 375 &&
          era.get('love:25') >= 75
        ) {
          era.drawLine();
          era.set('flag:当前位置', location_enum.gate);
          await print_title_with_kojo(
            this.#kojo,
            ebj.arg,
            coffee,
            me,
            callname,
          );
          era.set('flag:当前位置', location_enum.office);
        } else {
          await CustomizedEdu.common_palace_relation(coffee, me);
        }
    }
    wait && (await era.waitAnyKey());
  }
};
