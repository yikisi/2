const era = require('#/era-electron');

const { update_kiss_exp } = require('#/system/ero/sys-calc-ero-exp');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const {
  get_luna_talk_tools,
  good_end,
  handle_debuff,
  i_emperor,
  normal_end,
  transform,
} = require('#/event/snippets/101700');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_random_entry } = require('#/utils/list-utils');

const { get_date_obj } = require('#/data/date-indicator');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum, base_attr_list } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async out_church(chara, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(event_hooks.out_church, ebj);
      return;
    }
    if (ebj?.arg !== 95 + 1) {
      return;
    }
    const attr_change = base_attr_list.map(() => 0);
    let pt_change = 0;
    switch (
      (
        await print_title_with_kojo(
          this.#kojo,
          'oc_95_1',
          get_luna_talk_tools().luna,
          me,
        )
      )[0]
    ) {
      case 1:
        attr_change[attr_enum.endurance] = 20;
        break;
      case 2:
        attr_change.fill(5);
        break;
      case 3:
        pt_change = 35;
    }
    if (era.get('status:17:神经衰弱') > 0) {
      attr_change[attr_enum.endurance] += 10;
    }
    if (get_attr_and_print_in_event(17, attr_change, pt_change)) {
      await era.waitAnyKey();
    }
    era.set('cflag:17:节日事件标记', 0);
    return true;
  }

  async race_end(chara17, me, callname, hook, extra) {
    const { emperor, luna } = get_luna_talk_tools();
    const edu_marks = new LunaEduMarks();
    const race_history = RaceHistory.get(this.id).get();
    let wait = false;
    if (extra.rank === 1) {
      hook.override = true;
      if (
        extra.race === race_enum.begin_race &&
        era.get('cflag:17:育成回合计时') < 48
      ) {
        await print_title_with_kojo(this.#kojo, 'begin_race_win', luna, me);
        wait = all_reward_in_event(luna.id, { love: 2 });
      } else if (extra.race === race_enum.saud_cup) {
        const [ret] = await print_title_with_kojo(
          this.#kojo,
          'saud_cup_win',
          chara17,
          me,
          i_emperor(),
        );
        wait = all_reward_in_event(luna.id, { love: 2 });
        if (ret === 2) {
          wait = all_reward_in_event(emperor.id, { pt: 50 }) || wait;
        }
      } else if (extra.race === race_enum.sats_sho) {
        await print_title_with_kojo(
          this.#kojo,
          'sats_sho_win',
          chara17,
          luna,
          me,
          i_emperor(),
        );
        wait = all_reward_in_event(luna.id, { love: 2 });
      } else if (
        extra.race === race_enum.toky_yus &&
        check_aim_race(race_history, race_enum.sats_sho, 1, 1)
      ) {
        await print_title_with_kojo(
          this.#kojo,
          're_double_crowns',
          chara17,
          me,
          i_emperor(),
        );
        all_reward_in_event(luna.id, { love: 2 });
        wait = true;
        era.set('status:17:领域', 1);
      } else if (
        extra.race === race_enum.kiku_sho &&
        check_aim_race(race_history, race_enum.sats_sho, 1, 1) &&
        check_aim_race(race_history, race_enum.toky_yus, 1, 1)
      ) {
        await print_title_with_kojo(
          this.#kojo,
          're_triple_crowns',
          chara17,
          emperor,
          me,
          i_emperor(),
        );
        wait = all_reward_in_event(this.id, {
          attr: { [get_random_entry(base_attr_list)]: 15 },
        });
      } else if (
        extra.race === race_enum.japa_cup &&
        era.get(`cflag:${this.id}:育成回合计时`) > 96
      ) {
        await print_title_with_kojo(
          this.#kojo,
          'japa_cup_win_s',
          chara17,
          luna,
          emperor,
          me,
          i_emperor(),
        );
        wait = all_reward_in_event(luna.id, { love: 2 });
      } else if (
        extra.race === race_enum.arim_kin &&
        era.get(`cflag:${this.id}:育成回合计时`) > 96
      ) {
        edu_marks.good_end =
          (extra.rank === 1 && !era.get(`status:17:神经衰弱`)) + 1;
        await print_title_with_kojo(
          this.#kojo,
          edu_marks.good_end === 2 ? 'arim_kin_win_s_ge' : 'arim_kin_win_s_be',
          chara17,
          luna,
          emperor,
          me,
          i_emperor(),
        );
        era.drawLine();
        if (edu_marks.good_end === 2) {
          era.set(
            `callname:${luna.id}:-1`,
            era.set(`callname:${luna.id}:-2`, '101701'),
          );
          await print_event_name(this.#kojo.re_good_end.title(emperor), luna);
          era.set(
            `callname:${luna.id}:-1`,
            era.set(`callname:${luna.id}:-2`, '101702'),
          );
          await this.#kojo.re_good_end(chara17, luna, emperor, me);
          wait = all_reward_in_event(luna.id, { relation: 800, love: 10 });
          good_end(edu_marks);
          update_kiss_exp(get_date_obj(), 0, this.id);
        } else {
          const luna_end =
            !era.get(`status:${luna.id}:神经衰弱`) &&
            era.get(`love:${luna.id}`) >= 90;
          if (luna_end) {
            await print_title_with_kojo(
              this.#kojo,
              're_bad_end_luna',
              luna,
              emperor,
              chara17,
              me,
            );
          } else {
            await print_title_with_kojo(
              this.#kojo,
              're_bad_end_emperor',
              emperor,
              luna,
              chara17,
              me,
            );
          }
          normal_end(edu_marks, luna_end);
        }
      } else {
        hook.override = false;
        await print_title_with_kojo(
          this.#kojo,
          'race_end_win',
          chara17,
          me,
          i_emperor(),
        );
      }
    } else if (extra.rank <= 5 && !edu_marks.faith_collapse) {
      edu_marks.faith_collapse = 1;
      await print_event_name(
        [{ color: emperor.color, content: this.#kojo.faith_collapse.title }],
        chara17,
      );
      if ((await this.#kojo.faith_collapse(luna, me))[0] === 2) {
        await handle_debuff(edu_marks, luna.id);
      }
    } else {
      return await super.race_end(chara17, me, callname, hook, extra);
    }
    wait && (await era.waitAnyKey());
  }

  async race_start(chara17, me, callname, hook, extra) {
    const { emperor, luna } = get_luna_talk_tools();
    const edu_marks = new LunaEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    if (extra.race === race_enum.arim_kin && edu_weeks < 96) {
      await print_title_with_kojo(
        this.#kojo,
        'before_arim_kin_c',
        chara17,
        me,
        i_emperor(),
      );
    } else if (extra.race === race_enum.japa_cup && edu_weeks > 96) {
      await print_event_name(
        [{ color: emperor.color, content: this.#kojo.before_japa_cup_s.title }],
        chara17,
      );
      await this.#kojo.before_japa_cup_s(chara17, me, i_emperor());
    } else if (
      i_emperor() &&
      race_infos[extra.race].race_class === class_enum.G1 &&
      era.get(`status:${luna.id}:神经衰弱`) > 0 &&
      !edu_marks.fall_into_hell
    ) {
      edu_marks.fall_into_hell = 1;
      await print_event_name(
        [{ color: emperor.color, content: this.#kojo.fall_into_hell.title }],
        chara17,
      );
      await this.#kojo.fall_into_hell(luna, emperor, me);
    } else {
      return await super.race_start(chara17, me, callname, hook, extra);
    }
  }

  async train_success(chara17, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return await super.train_success(chara17, me, callname, hook, extra);
    }
    const { luna, emperor } = get_luna_talk_tools();
    const edu_marks = new LunaEduMarks();
    i18n().timon.edu.ts_info(chara17);
    // 经典年五月第一周
    if (era.get('cflag:17:育成回合计时') === 47 + 17 && !edu_marks.dissonance) {
      edu_marks.dissonance = 1;
      era.println();
      await print_event_name(
        [{ color: emperor.color, content: this.#kojo.ts_47_17.title }],
        chara17,
      );
      await this.#kojo.ts_47_17(
        chara17,
        me,
        i_emperor(),
        race_infos[race_enum.sats_sho].get_colored_name(),
        race_infos[race_enum.toky_yus].get_colored_name(),
      );
      await handle_debuff(edu_marks, luna.id);
      hook.override = true;
      extra.pt_change = 5;
      return extra;
    } else if (
      !era.get(`status:${this.id}:摸鱼`) &&
      Math.random() < 0.2 * extra.stamina_ratio
    ) {
      if (sys_check_remote(this.id)) {
        hook.arg = true;
      } else {
        await era.waitAnyKey();
        hook.arg =
          (
            await print_title_with_kojo(
              this.#kojo,
              'ts_add',
              chara17,
              me,
              i_emperor(),
            )
          )[0] === 1;
      }
    }
  }

  async week_end(_chara, me, callname, hook, extra, ebj) {
    const edu_marks = new LunaEduMarks(),
      { luna, emperor } = get_luna_talk_tools();
    let wait = false;
    if (ebj?.arg === 47 + 41) {
      await print_event_name(
        [{ color: emperor.color, content: this.#kojo.we_47_41.title }],
        luna,
      );
      await this.#kojo.we_47_41(luna, me);
      wait = all_reward_in_event(this.id, {
        base: [
          // BASENAME:0 = 体力
          -era.get('maxbase:17:0') / 2,
          // BASENAME:1 = 精力
          -era.get('maxbase:17:1') / 2,
        ],
      });
    } else if (ebj?.arg === 95 + 10) {
      // 资深年三月二周
      await print_event_name(
        [{ color: emperor.color, content: this.#kojo.we_95_10.title }],
        luna,
      );
      await this.#kojo.we_95_10(luna, me);
      wait = all_reward_in_event(this.id, {
        attr: { [attr_enum.intelligence]: 5 },
      });
      await handle_debuff(edu_marks, luna.id);
    } else if (ebj?.arg === 'wax_and_wane') {
      await print_title_with_kojo(this.#kojo, 'we_wax_and_wane', luna, me);
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(chara, me, callname, hook, extra, ebj) {
    const { luna, emperor } = get_luna_talk_tools();
    const edu_marks = new LunaEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const r_his = RaceHistory.get(this.id);
    let wait = false;
    let trans_aim;
    let allow_trans = true;
    let draw_line = true;
    switch (edu_weeks) {
      case 41 + 1:
        era.set('cflag:17:节日事件标记', 0);
        allow_trans = false;
        trans_aim = 0;
        switch (
          (await print_title_with_kojo(this.#kojo, 'ws_47_1', luna, me))[0]
        ) {
          case 1:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.intelligence]: 40 },
            });
            break;
          case 2:
            wait = all_reward_in_event(this.id, {
              attr: { [attr_enum.endurance]: 40 },
            });
            break;
          case 3:
            wait = all_reward_in_event(this.id, { pt: 80 });
        }
        break;
      case 47 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        allow_trans = false;
        trans_aim = 0;
        wait = all_reward_in_event(this.id, {
          attr:
            (
              await print_title_with_kojo(this.#kojo, 'ws_47_29', luna, me)
            )[0] === 1
              ? { [attr_enum.strength]: 10 }
              : { [attr_enum.toughness]: 10 },
        });
        break;
      case 95 + 1:
        allow_trans = false;
        trans_aim = 0;
        draw_line = false;
        break;
      case 95 + 4:
        allow_trans = false;
        trans_aim = 0;
        await print_title_with_kojo(this.#kojo, 'ws_95_4', luna, me);
        wait = all_reward_in_event(this.id, {
          attr: { [attr_enum.toughness]: 5 },
        });
        break;
      case 95 + 14:
        era.set('cflag:17:节日事件标记', 0);
        await print_event_name(
          [{ color: emperor.color, content: this.#kojo.ws_95_14.title }],
          luna,
        );
        await this.#kojo.ws_95_14(luna, me);
        edu_marks.a_stones_throw++;
        edu_marks.just_luna = 3;
        if (era.get(`status:${luna.id}:精神损伤`) < 4) {
          wait = all_reward_in_event(this.id, {
            attr: { [attr_enum.intelligence]: 5 },
          });
        } else {
          edu_marks.just_luna += 3;
        }
        break;
      case 95 + 16:
        await print_event_name(
          [{ color: emperor.color, content: this.#kojo.ws_95_16.title }],
          luna,
        );
        await this.#kojo.ws_95_16(luna, me);
        if (!edu_marks.just_luna) {
          allow_trans = false;
          trans_aim = 1;
        }
        break;
      case 143 + 9:
        await CustomizedEdu.common_palace(chara, me);
        await CustomizedEdu.common_palace_relation(chara, me);
        era.println();
        await this.#kojo.ws_palace(
          chara,
          edu_marks.good_end === 2,
          i_emperor(),
        );
        return;
      default:
        draw_line = false;
    }
    wait && (await era.waitAnyKey());
    draw_line && era.drawLine();
    if (edu_marks.just_luna > 0) {
      --edu_marks.just_luna;
      allow_trans = false;
      trans_aim = 0;
    }
    if (allow_trans) {
      trans_aim = edu_marks.want_emperor;
    }
    if (trans_aim !== edu_marks.emperor) {
      await print_event_name(
        this.#kojo.ws_transform.title,
        trans_aim > 0 ? emperor : luna,
      );
      await this.#kojo.ws_transform(luna, emperor, me, trans_aim > 0);
    }
    let punish = [0, false];
    if (edu_marks > 48 && edu_weeks < 96) {
      for (const r of [
        race_enum.sats_sho,
        race_enum.toky_yus,
        race_enum.kiku_sho,
        race_enum.arim_kin,
      ]) {
        if (edu_weeks === 47 + race_infos[r].date + 1) {
          const result = r_his.get_result(edu_weeks - 1);
          if (result.race !== r || result.rank !== 1) {
            punish = [r, result.race === r];
          }
          break;
        }
      }
    } else if (edu_weeks > 96) {
      for (const r of [race_enum.tenn_spr, race_enum.japa_cup]) {
        if (edu_weeks === 95 + race_infos[r].date + 1) {
          const result = r_his.get_result(edu_weeks - 1);
          if (result.race !== r || result.rank !== 1) {
            punish = [r, result.race === r];
          }
          break;
        }
      }
    }
    if (punish[0] > 0) {
      (punish[1]
        ? i18n().kojo[this.id].notify_punish_for_important
        : i18n().kojo[this.id].notify_punish_for_avoid)(
        emperor,
        race_infos[punish[0]].get_colored_name(),
      );
      if (sys_like_chara(emperor.id, 0, -50)) {
        await era.waitAnyKey();
      }
    }
    const total_punish =
      (trans_aim > 0 && ++edu_marks.break_down % 7 === 0) + (punish[0] > 0);
    if (total_punish > 0) {
      await handle_debuff(edu_marks, luna.id, total_punish);
    }
    if (edu_marks.a_stones_throw === 1) {
      edu_marks.a_stones_throw++;
      await print_event_name(
        [{ color: emperor.color, content: this.#kojo.ws_a_stones_throw.title }],
        luna,
      );
      await this.#kojo.ws_a_stones_throw(luna, me);
    }
    if (trans_aim !== edu_marks.emperor) {
      transform(edu_marks);
    }
  }
};
