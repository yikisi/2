const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');

const print_ero_page = require('#/page/page-ero');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { get_skill_list, part_enum } = require('#/data/ero/part-const');
const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_filtered_talents } = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const {
  attr_enum,
  base_attr_list,
  fumble_result,
} = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/** @param {RaceEndParams} extra  */
function fill_common_rewards(extra) {
  extra.attr_change = new Array(5);
  if (extra.rank === 1) {
    extra.attr_change.fill(10);
    extra.pt_change = 50;
    extra.relation_change = 10;
    extra.love_change = 1;
  } else if (extra.rank === 2) {
    extra.attr_change.fill(5);
    extra.pt_change = 40;
    extra.relation_change = 10;
  } else if (extra.rank === 3) {
    extra.attr_change.fill(3);
    extra.pt_change = 25;
    extra.relation_change = 5;
  } else if (extra.rank <= 5) {
    extra.attr_change.fill(1);
    extra.pt_change = 10;
  }
}

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async back_school(teio, me, callname, hook, extra, ebj) {
    if (ebj?.arg !== 'broken') {
      return false;
    }
    await print_title_with_kojo(
      this.#kojo,
      'bs_broken',
      teio,
      me,
      i18n().kojo[this.id].notify_leg_hurt(get_chara_talk(this.id), {
        ...di18n.kojo.get_titled_content(this.id, 'hurt'),
        color: buff_colors[3],
      }),
    );
    era.println();
    sys_like_chara(3, 0, 10, true, 1);
    get_attr_and_print_in_event(3, new Array(3).fill(-50), 0, [
      100 *
        (RaceHistory.get(3).get_result(race_infos[race_enum.tenn_spr].date + 95)
          ?.rank ===
          1) -
        200,
      -200,
    ]);
    era.set('talent:3:自信程度', 1);
    era.set('talent:3:淫乱', 1);
    era.set('talent:3:身体素质', 0);
    era.set('status:3:腿伤', 1);
    await era.waitAnyKey();
  }

  async crazy_fan_end() {
    if (!era.get('status:3:腿伤')) {
      return await super.crazy_fan_end();
    }
    if (era.get('cflag:3:招募状态') === recruit_flags.yes) {
      await print_title_with_kojo.ending(
        this.#kojo,
        'be_dead',
        get_chara_talk(this.id),
        get_chara_talk(68),
        get_chara_talk(0),
        sys_get_colored_callname(68, this.id),
      );
      await this.#kojo.be_dead_end();
    } else {
      await print_title_with_kojo.ending(
        this.#kojo,
        'be_normal',
        get_chara_talk(this.id),
        get_chara_talk(0),
      );
    }
  }

  async office_prepare(teio, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 3) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    if (ebj?.arg !== 'rehabilitation') {
      return false;
    }
    const time_change = get_random_value(0, 50);
    if (
      (
        await print_title_with_kojo(this.#kojo, 'op_rehabilitation', teio, me)
      )[0] === 1
    ) {
      wait = get_attr_and_print_in_event(3, [0, 15, 0, 15, 15], 0, [
        0,
        time_change,
      ]);
    } else {
      wait = all_reward_in_event(this.id, {
        attr: [15, 0, 15],
        base: [0, time_change],
        motivation: 1,
        relation: 5,
      });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async office_rest(teio, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 3) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 47 + 25) {
      return false;
    }
    const time_change = get_random_value(0, 50);
    let wait = false;
    switch (
      (await print_title_with_kojo(this.#kojo, 'or_47_25', teio, me))[0]
    ) {
      case 1:
        wait = all_reward_in_event(this.id, {
          base: [get_random_value(50, 100), time_change],
          pt: 30,
          relation: 5,
        });
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          attr: [0, 20, 0, 20],
          base: [0, time_change],
          pt: 30,
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, {
          attr: [20, 0, 20, 0, 20],
          base: [0, time_change],
          love: 1,
        });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(teio, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 3) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 'honey_power':
        switch (
          (
            await print_title_with_kojo(this.#kojo, 'os_honey_power', teio, me)
          )[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.intelligence]: 20 },
              relation: 5,
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { attr: [0, 15, 0, 15] });
            break;
          case 3:
            wait = all_reward_in_event(this.id, {
              attr: [15, 0, 15],
              love: 1,
            });
        }
        break;
      case 'uma_shopping':
        await print_event_name(this.#kojo.os_uma_shopping.title(teio), teio);
        if ((await this.#kojo.os_uma_shopping(teio, me))[0] === 1) {
          wait = all_reward_in_event(this.id, {
            attr: [20, 0, 20, 20, 0],
            base: [200],
            relation: 10,
          });
        } else {
          wait = all_reward_in_event(this.id, {
            attr: [0, 20, 0, 0, 30],
            relation: 5,
          });
        }
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async out_start(teio, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 3) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 'famous_in_famous':
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'os_famous_in_famous',
              teio,
              me,
            )
          )[0] === 1
        ) {
          wait = all_reward_in_event(this.id, {
            attr: { [attr_enum.intelligence]: 30 },
            pt: 10,
            relation: 5,
          });
        } else {
          wait = all_reward_in_event(this.id, {
            attr: gacha(base_attr_list, 3).reduce((p, c) => {
              p[c] = 15;
              return p;
            }, {}),
            pt: 10,
            relation: 5,
          });
        }
        break;
      case 'lets_go_together':
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'os_lets_go_together',
              teio,
              me,
            )
          )[0] === 1
        ) {
          wait = all_reward_in_event(this.id, { attr: [0, 15], relation: 5 });
        } else {
          wait = all_reward_in_event(this.id, {
            attr: [0, 0, 0, 15],
            relation: 5,
          });
        }
        break;
      case 'dance_or_kongfu':
        switch (
          (
            await print_title_with_kojo(
              this.#kojo,
              'os_dance_or_kongfu',
              teio,
              me,
            )
          )[0]
        ) {
          case 1:
            wait = get_attr_and_print_in_event(3, [0, 0, 20, 20, 0], 15);
            break;
          case 2:
            wait = get_attr_and_print_in_event(3, [30], 15, [200]);
            break;
          case 3:
            wait = get_attr_and_print_in_event(3, [15, 20, 0, 0, 30], 30);
        }
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async race_end(teio, me, callname, hook, extra) {
    let key = '';
    let args = [me, callname];
    let temp;
    switch (extra.race) {
      case race_enum.begin_race:
        if (extra.rank === 1) {
          key = 'begin_race_win';
          extra.attr_change = [0, 0, 0, 0, 3];
          extra.pt_change = 30;
          extra.relation_change = 5;
          extra.love_change = 1;
        }
        break;
      case race_enum.waka_sta:
        if (extra.rank === 1) {
          key = 'waka_sta_win';
          temp = 15;
          extra.pt_change = 30;
          extra.relation_change = 5;
          extra.love_change = 1;
        } else if (extra.rank === 2) {
          temp = 10;
          extra.pt_change = 20;
          extra.relation_change = 3;
          extra.love_change = 1;
        } else if (extra.rank === 3) {
          temp = 5;
          extra.pt_change = 10;
          extra.relation_change = 2;
        }
        extra.attr_change = [0, 0, 0, temp, 0];
        break;
      case race_enum.sats_sho:
        if (extra.rank <= 5) {
          key = 'sats_sho_5';
          fill_common_rewards(extra);
          extra.attr_change[attr_enum.endurance] += 15;
          extra.attr_change[attr_enum.toughness] += 5;
        }
        break;
      case race_enum.toky_yus:
        if (extra.rank <= 5) {
          key = 'toky_yus_5';
          fill_common_rewards(extra);
          if (
            extra.rank === 1 &&
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.sats_sho,
              1,
              1,
            )
          ) {
            extra.pt_change += 20;
            extra.relation_change = (extra.relation_change || 0) + 10;
            extra.love_change = (extra.love_change || 0) + 1;
          }
        }
        break;
      case race_enum.kiku_sho:
        if (extra.rank === 1) {
          key = 'kiku_sho_win';
          fill_common_rewards(extra);
          const race_history = RaceHistory.get(this.id).get();
          if (
            extra.rank === 1 &&
            check_aim_race(race_history, race_enum.sats_sho, 1, 1) &&
            check_aim_race(race_history, race_enum.toky_yus, 1, 1)
          ) {
            extra.attr_change[attr_enum.strength] += 15;
            extra.pt_change += 30;
            extra.relation_change = (extra.relation_change || 0) + 20;
            extra.love_change = (extra.love_change || 0) + 2;
          }
        }
        break;
      case race_enum.tenn_spr:
        if (extra.rank === 1) {
          extra.pt_change = 100;
        }
        break;
      case race_enum.japa_cup:
        if (
          era.get('cflag:3:育成回合计时') > 96 &&
          extra.rank === 1 &&
          era.get('status:3:腿伤') > 0
        ) {
          key = 'japa_cup_win_h_s';
          extra.pt_change = 20;
          extra.relation_change = 12;
          extra.love_change = 1;
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:3:育成回合计时') > 96 && extra.rank === 1) {
          key =
            era.get('status:3:腿伤') > 0
              ? 'arim_kin_win_h_s'
              : 'arim_kin_win_g_s';
          extra.relation_change = 20;
          extra.love_change = 2;
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
    }
    await print_title_with_kojo(this.#kojo, key, teio, ...args);
  }

  async race_start(teio, me, callname, hook, extra) {
    if (
      extra.race === race_enum.arim_kin &&
      era.get('cflag:3:育成回合计时') >= 96
    ) {
      await print_title_with_kojo(
        this.#kojo,
        era.get('status:3:腿伤') > 0
          ? 'before_arim_kin_h_s'
          : 'before_arim_kin_g_s',
        teio,
        me,
      );
    } else {
      return await super.race_start(teio, me, callname, hook, extra);
    }
  }

  async school_atrium(teio, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 3) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 5:
        switch (
          (await print_title_with_kojo(this.#kojo, 'sa_47_5', teio, me))[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, { base: [150] });
            break;
          case 2:
            wait = all_reward_in_event(this.id, { attr: [20] });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { attr: [0, 0, 20] });
        }
        break;
      case 95 + 20:
        await print_title_with_kojo(this.#kojo, 'sa_95_20_h', teio, me);
        if (
          all_reward_in_event(this.id, {
            attr: [0, 0, 0, 20, 15],
            base: [150],
            relation: 10,
          })
        ) {
          await era.waitAnyKey();
        }
        return false;
      case 95 + 25:
        await print_title_with_kojo(this.#kojo, 'sa_95_25', teio, me);
        wait = all_reward_in_event(this.id, {
          attr: [35, 0, 35],
          base: [350],
          love: 1,
          relation: 10,
        });
        break;
      case 'the_days_together':
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'sa_the_days_together',
              teio,
              me,
            )
          )[0] === 1
        ) {
          wait = all_reward_in_event(this.id, {
            attr: base_attr_list.map(() => 5),
            relation: 10,
          });
        } else {
          wait = all_reward_in_event(this.id, {
            attr: gacha(base_attr_list, 2).reduce((p, c) => {
              p[c] = 10;
              return p;
            }, {}),
            motivation: 1,
            love: 1,
          });
        }
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async school_rooftop(teio, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 3) {
      add_event(hook.hook, ebj);
      return;
    }
    let wait = false;
    if (ebj?.arg !== 'wing_and_sky') {
      return false;
    }
    if (
      (
        await print_title_with_kojo(this.#kojo, 'sr_wing_and_sky', teio, me)
      )[0] === 1
    ) {
      wait = all_reward_in_event(this.id, {
        attr: [20, 20, 0, 0, 20],
        base: [200],
        love: 1,
      });
    } else {
      wait = all_reward_in_event(this.id, {
        attr: [15, 0, 20, 20, 0],
        relation: 5,
      });
    }
    wait && (await era.waitAnyKey());
    return true;
  }

  async train_fail(teio, me, callname, hook, extra) {
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    if (extra.train === attr_enum.intelligence) {
      await this.#kojo.train_fail_intel(teio, me);
    } else {
      await this.#kojo.train_fail(teio, me);
      hook.arg = 0;
    }
  }

  async week_end(teio, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 95 + 17:
        if (
          (
            await print_title_with_kojo(this.#kojo, 'we_95_17_h', teio, me)
          )[0] === 2
        ) {
          new TeioEduMarks().abandon_disabled = 1;

          begin_and_init_ero(0, 3);
          await quick_make_love(
            new EroParticipant(0, part_enum.mouth),
            new EroParticipant(3, part_enum.mouth),
            false,
          );
          if (teio.sex_code !== 1) {
            set_palam_to_max(3, part_enum.virgin);
          } else {
            set_palam_to_max(3, part_enum.penis);
          }
          await quick_make_love(
            new EroParticipant(0, part_enum.hand),
            new EroParticipant(3, part_enum.breast),
            false,
          );
          await print_ero_page(3, true);
          await end_ero_and_show_result();

          await this.#kojo.we_95_17_h_sex_end(teio, me);

          get_skill_list(teio.sex_code).forEach((aid) =>
            era.set(`abl:3:${aid}`, Math.min(era.get(`abl:3:${aid}`) + 1, 5)),
          );
          get_filtered_talents(teio.sex_code, 60)
            .filter((tid) => era.get(`talent:3:${tid}`) < 1)
            .forEach((tid) => era.set(`talent:3:${tid}`, 1));
          sys_like_chara(3, 0, 12, true, 1) && (await era.waitAnyKey());
        }
        break;
      case 143 + 5:
        await print_title_with_kojo(this.#kojo, 'we_143_5_h', teio, me);
        era.set('status:3:腿伤', 0);
        if (era.get('talent:3:自信程度') === 1) {
          era.set('talent:3:自信程度', 0);
        }
        sys_like_chara(this.id, 0, 20, true, 2);
        wait = true;
        break;
      case 'palace':
        await CustomizedEdu.common_palace(teio, me);
        await CustomizedEdu.common_palace_relation(teio, me);
        era.println();
        await (
          new TeioEduMarks().give_up > 0
            ? this.#kojo.ws_palace_g
            : this.#kojo.ws_palace_h
        )(teio);
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(teio, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 1:
        era.set('cflag:3:节日事件标记', 0);
        switch (
          (await print_title_with_kojo(this.#kojo, 'ws_47_1', teio, me))[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.toughness]: 20 },
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
      case 47 + 12:
        await print_title_with_kojo(this.#kojo, 'ws_47_12', teio, me);
        wait = all_reward_in_event(this.id, {
          attr: [15, 0, 0, 10],
          relation: 5,
        });
        break;
      case 95 + 5:
        if (
          (await print_title_with_kojo(this.#kojo, 'ws_95_5', teio, me))[0] ===
          1
        ) {
          wait = all_reward_in_event(this.id, {
            attr: base_attr_list.map(() => 5),
            pt: 20,
            skills: [100039],
          });
          new TeioEduMarks().give_up = 1;
        } else {
          wait = all_reward_in_event(this.id, {
            base: [-150, -50],
            love: 1,
            relation: 10,
          });
        }
        break;
      case 95 + 14:
        era.set('cflag:3:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          new TeioEduMarks().give_up > 0 ? 'ws_95_14_g' : 'ws_95_14_h',
          teio,
          me,
        );
        break;
      case 95 + 17:
        if (
          (
            await print_title_with_kojo(this.#kojo, 'ws_95_17_h', teio, me)
          )[0] === 2 &&
          era.get('love:3') >= 75
        ) {
          add_event(event_hooks.week_end, ebj);
        }
        break;
      case 95 + 19:
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_95_19_h',
              teio,
              me,
              new TeioEduMarks().abandon_disabled > 0,
            )
          )[0] === 1
        ) {
          era.set('flag:强制BE', 3);
          era.set('cflag:3:招募状态', recruit_flags.no);
        } else {
          sys_change_fame(10);
          sys_change_money(300);
        }
        break;
      default:
        return await super.week_start(teio, me, callname, hook, extra, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
