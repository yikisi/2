const era = require('#/era-electron');

const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const {
  sys_change_motivation,
  sys_get_billings,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { skill_sets, skills_dict } = require('#/data/race/skill/skill-const');
const {
  attr_enum,
  base_attr_list,
  fumble_result,
} = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  async out_shopping(flash, me, callname, hook, extra, ebj) {
    if (ebj?.arg !== 'black_treasure') {
      return;
    }
    if (era.get('flag:当前互动角色') > 0 || !sys_check_awake(37)) {
      add_event(hook.hook, ebj);
      await era.printAndWait(i18n().kojo[this.id].notify_black_treasure(flash));
      await era.clear(1);
      return;
    }
    EventMarks.get(0).sub(event_hooks.out_shopping);
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'os_black_treasure',
          flash,
          me,
          callname,
        )
      )[0] === 1
    ) {
      era.println();
      sys_change_motivation(37, -1) && (await era.waitAnyKey());
    } else {
      sys_change_money(-50);
      sys_get_billings().push({ creditor: 37, repay: 25, timer: 2 });
    }
    return true;
  }

  async out_start(flash, me, callname, hook, extra, ebj) {
    if (era.get('flag:当前互动角色') !== 37) {
      add_event(hook.hook, ebj);
      return;
    }
    if (ebj?.arg !== 95 + 6) {
      return;
    }
    era.set('cflag:37:节日事件标记', 0);
    await print_title_with_kojo(this.#kojo, 'os_95_6', flash, me, callname);
    sys_like_chara(37, 0, 100) && (await era.waitAnyKey());
    return true;
  }

  async race_end(flash, me, callname, hook, extra) {
    let key = '';
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:37:育成回合计时') < 48 && extra.rank === 1) {
          key = 'begin_race_win';
        }
        break;
      case race_enum.sats_sho:
        if (extra.rank <= 5) {
          key = 'sats_sho_end';
        }
        break;
      case race_enum.toky_yus:
        if (extra.rank === 1) {
          key = 'toky_yus_win';
        }
        break;
      case race_enum.japa_cup:
        if (era.get('cflag:37:育成回合计时') < 96) {
          key = extra.rank === 1 ? 'japa_cup_win_c' : 'japa_cup_lose_c';
        }
        break;
      case race_enum.arim_kin:
        if (era.get('cflag:37:育成回合计时') < 96) {
          key = extra.rank === 1 ? 'arim_kin_win_c' : 'arim_kin_lose_c';
        }
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:37:育成回合计时') > 96 && extra.rank === 1) {
          key = 'tenn_sho_win_s';
          new FlashEduMarks().finish = 1;
        }
        break;
      default:
        return await super.race_end(flash, me, callname, hook, extra);
    }
    if (!key) {
      return await super.race_end(flash, me, callname, hook, extra);
    }
    await print_title_with_kojo(this.#kojo, key, flash, ...args);
  }

  async race_start(flash, me, callname, hook, extra) {
    let key = '';
    /** @type {[]} */
    let args = [me, callname];
    switch (extra.race) {
      case race_enum.begin_race:
        if (era.get('cflag:37:育成回合计时') < 48) {
          key = 'before_begin_race';
        }
        break;
      case race_enum.keis_hai:
        key = 'before_keis_hai';
        break;
      case race_enum.sats_sho:
        key = 'before_sats_sho';
        args.push(
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.keis_hai,
            1,
            1,
          ),
        );
        break;
      case race_enum.toky_yus:
        key = 'before_toky_yus';
        break;
      case race_enum.kiku_sho:
        key = 'before_kiku_sho';
        break;
      case race_enum.japa_cup:
        if (era.get('cflag:37:育成回合计时') < 96) {
          key = 'before_japa_cup_c';
        }
        break;
      case race_enum.arim_kin:
        key =
          era.get('cflag:37:育成回合计时') < 96
            ? 'before_arim_kin_c'
            : 'before_arim_kin_s';
        break;
      case race_enum.sank_hai:
        key = 'before_sank_hai';
        break;
      case race_enum.tenn_spr:
        key = 'before_tenn_spr';
        break;
      case race_enum.tenn_sho:
        if (era.get('cflag:37:育成回合计时') > 96) {
          key = 'before_tenn_sho_s';
        }
        break;
      default:
        return await super.race_start(flash, me, callname, hook, extra);
    }
    if (!key) {
      return await super.race_start(flash, me, callname, hook, extra);
    }
    await print_title_with_kojo(this.#kojo, key, flash, ...args);
  }

  async train_fail(flash, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return await super.train_fail(flash, me, callname, hook, extra);
    }
    extra.args = extra.fumble ? fumble_result.fumble : fumble_result.fail;
    const fail_again = Math.random() < extra.args.ratio.fail_again;
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          extra.fumble ? 'train_fumble' : 'train_fail',
          flash,
          me,
          fail_again,
        )
      )[0] === 1
    ) {
      hook.arg = 0;
    } else if (fail_again) {
      hook.arg = -1;
    } else {
      hook.arg = 1;
    }
  }

  async train_success(flash, me, callname, hook, extra) {
    if (Math.random() < 0.2 * extra.stamina_ratio) {
      const edu_marks = new FlashEduMarks();
      if (
        extra.train === attr_enum.speed &&
        era.get('cflag:49:育成回合计时') < 3 * 48 &&
        edu_marks.train_with_festa > 0
      ) {
        hook.arg =
          (
            await print_title_with_kojo(
              this.#kojo,
              'ts_add',
              flash,
              get_chara_talk(49),
              me,
            )
          )[0] === 1;
        edu_marks.train_with_festa = 0;
      } else {
        return await super.train_success(flash, me, callname, hook, extra);
      }
    } else if (
      era.get(`status:37:发胖`) > 0 &&
      Math.random() < 0.1 * extra.stamina_ratio
    ) {
      await this.#kojo.train_in_fat(flash);
      era.set(`status:37:发胖`, 0);
      era.set(`base:37:体重偏差`, 2000);
    }
  }

  async week_end(flash, me, callname, hook, extra, ebj) {
    let wait = false;
    switch (ebj?.arg) {
      case 47 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_47_32',
          flash,
          me,
          callname,
          {
            ...di18n.kojo.get_titled_content(this.id, 'distracted'),
            color: buff_colors[0],
          },
        );
        era.set('status:37:分心', 0);
        break;
      case 95 + 32:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'we_95_32',
          flash,
          me,
          callname,
        );
    }
    wait && (await era.waitAnyKey());
  }

  async week_start(flash, me, callname, hook, extra, ebj) {
    let wait = false;
    let temp;
    switch (ebj?.arg) {
      case 47 + 1:
        era.set('cflag:37:节日事件标记', 0);
        wait = all_reward_in_event(this.id, {
          ...((
            await print_title_with_kojo(
              this.#kojo,
              'ws_47_1',
              flash,
              me,
              callname,
            )
          )[0] === 1
            ? {
                attr: base_attr_list.map(() => 10),
              }
            : { pt: 70 }),
          base: [400],
        });
        break;
      case 47 + 13:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_13',
          flash,
          me,
          callname,
          {
            ...di18n.kojo.get_titled_content(this.id, 'weak'),
            color: buff_colors[0],
          },
        );
        era.set('status:37:虚弱', 1);
        all_reward_in_event(this.id, { motivation: -1 });
        wait = true;
        break;
      case 47 + 16:
        await print_title_with_kojo(this.#kojo, 'ws_47_16', flash, me, {
          ...di18n.kojo.get_titled_content(this.id, 'weak'),
          color: buff_colors[0],
        });
        if (era.get('status:37:虚弱') > 0) {
          era.set('status:37:虚弱', 0);
          all_reward_in_event(this.id, { motivation: 1 });
          wait = true;
        }
        break;
      case 47 + 17:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_17',
          flash,
          get_chara_talk(17),
          get_chara_talk(57),
          me,
          sys_get_colored_callname(this.id, 17),
          sys_get_colored_callname(this.id, 57),
        );
        break;
      case 47 + 28:
        temp = [get_chara_talk(57), sys_get_chara_pseudo(this.id)];
        temp[2] = new PseudoUma(
          57,
          temp[0].name,
          temp[0].color,
          2,
          new Array(5).fill(1200),
          get_random_value(2, 3),
          [0, 2, 6, 6],
          [0, 5, 6, 6],
          [6, 0],
          skill_sets[1105703].map((e) => skills_dict[e]),
        );
        await print_title_with_kojo(this.#kojo, 'ws_47_18', flash, temp[0], me);
        await simulation_game_in_event(temp[1], [temp[2]], race_enum.toky_yus);
        await this.#kojo.ws_47_18_end(flash, temp[0], me, temp[1].rank.curr);
        break;
      case 47 + 21:
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_21',
          flash,
          me,
          callname,
          check_aim_race(RaceHistory.get(37).get(), race_enum.toky_yus, 1, 1),
          {
            ...di18n.kojo.get_titled_content(this.id, 'distracted'),
            color: buff_colors[0],
          },
        );
        era.set('status:37:分心', 1);
        sys_hurt_uma(37, 1);
        wait = true;
        break;
      case 47 + 23:
        await print_title_with_kojo(this.#kojo, 'ws_47_23', flash, me);
        break;
      case 47 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(
          this.#kojo,
          'ws_47_29',
          flash,
          me,
          callname,
        );
        wait = sys_like_chara(this.id, 0, 30);
        break;
      case 95 + 1:
        era.set('cflag:37:节日事件标记', 0);
        if (
          (
            await print_title_with_kojo(
              this.#kojo,
              'ws_95_1',
              flash,
              get_chara_talk(5),
              me,
              callname,
              {
                ...di18n.kojo.get_titled_content(this.id, 'duty'),
                color: flash.color,
              },
            )
          )[0] === 1
        ) {
          wait = all_reward_in_event(this.id, {
            attr: base_attr_list.map(() => 20),
            base: [500],
          });
        } else {
          era.set('status:37:必行之事', 1);
          all_reward_in_event(this.id, { base: [500] });
          wait = true;
        }
        break;
      case 95 + 14:
        era.set('cflag:37:节日事件标记', 0);
        await print_title_with_kojo(
          this.#kojo,
          'ws_95_14',
          flash,
          get_chara_talk(7),
          get_chara_talk(49),
          me,
        );
        break;
      case 95 + 23:
        await print_title_with_kojo(this.#kojo, 'ws_95_23', flash, me);
        era.println();
        sys_hurt_uma(37, 1);
        wait = true;
        temp = sys_reg_race(37).curr;
        if (temp.race === race_enum.takz_kin) {
          temp.race = temp.week = -1;
        }
        break;
      case 95 + 29:
        if (this.summer_non_beach) {
          add_event(hook.hook, ebj);
          return;
        }
        await print_title_with_kojo(this.#kojo, 'ws_95_29', flash, me);
        break;
      default:
        return await super.week_start(flash, me, callname, extra, hook, ebj);
    }
    wait && (await era.waitAnyKey());
  }
};
