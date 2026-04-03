const {
  add,
  get,
  getAddedCharacters,
  input,
  print,
  printAndWait,
  printInColRows,
  println,
  replaceInColRows,
  set,
  waitAnyKey,
} = require('#/era-electron');

const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const check_team_limit = require('#/system/chara/sys-check-team-limit');
const sys_get_random_uma_god = require('#/system/chara/sys-get-random-uma-god');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const sys_rape_in_sleeping = require('#/system/ero/sys-rape-in-sleeping');
const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_motivation,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');
const { reset_chara } = require('#/system/sys-init-chara');

const print_ero_page = require('#/page/page-ero');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedEdu = require('#/event/edu/edu-common');
const { run_custom_ero } = require('#/event/ero/ero-factory');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const get_display_name = require('#/utils/calc-display-name');
const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_extremum_entry, get_random_entry } = require('#/utils/list-utils');
const { get_abbr_number, get_random_value } = require('#/utils/value-utils');

const { money_color } = require('#/data/color-const');
const { item_enum } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const { ero_hooks } = require('#/data/event/ero-hooks');
const event_hooks = require('#/data/event/event-hooks');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { max_chara_id } = require('#/data/other-const');
const { attr_enum } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().timon.random_events;
  }

  /** @param {CharaTalk} me */
  async second_chance(me) {
    const team_limit = -check_team_limit();
    let second_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter(
      (cid) =>
        cid > 0 &&
        get(`cflag:${cid}:种族`) > 0 &&
        get(`cflag:${cid}:可再次育成`) > 0,
    );
    if (second_list.length === 0 || team_limit <= 0) {
      return;
    }
    await print_event_name(i18n().timon.others.sc_event_name, me);
    const { yes: yes_button, no: no_button } =
      i18n().timon.others.get_sc_buttons();
    await i18n().timon.others.sc_event_former(me);
    const second_dict = {};
    let second_count = 0,
      flag_print = true,
      flag_select = true;
    while (flag_select) {
      (flag_print ? printInColRows : replaceInColRows)(
        {
          columns: [
            {
              type: 'divider',
              config: {
                content: i18n().timon.others.sc_limit_template.replace(
                  '%LIMIT%',
                  team_limit.toString(),
                ),
              },
            },
            ...second_list.map((cid) => ({
              accelerator: cid,
              config: {
                align: 'center',
                buttonType: second_dict[cid] ? 'warning' : 'info',
                disabled: get(`cflag:${cid}:被继承`) > 0,
                width: 8,
              },
              content: (get(`cflag:${cid}:被继承`) > 0
                ? i18n().timon.others.sc_name_inherited_template
                : i18n().timon.others.sc_name_template
              ).replace('%NAME%', get_display_name(get(`callname:${cid}:-1`))),
              type: 'button',
            })),
          ],
          config: { horizontalAlign: 'space-evenly' },
        },
        [
          {
            accelerator: 1001,
            config: {
              align: 'center',
              disabled: second_count === 0 || second_count > team_limit,
              width: 12,
            },
            content: yes_button,
            type: 'button',
          },
          {
            accelerator: 1002,
            config: { align: 'center', width: 12 },
            content: no_button,
            type: 'button',
          },
        ],
      );
      flag_print = false;
      const ret = await input({ hideInput: true });
      if (ret === 1001) {
        flag_select = false;
      } else if (ret === 1002) {
        Object.keys(second_dict).forEach((k) => delete second_dict[k]);
        flag_select = false;
      } else {
        if ((second_dict[ret] = !second_dict[ret])) {
          second_count++;
        } else {
          second_count--;
        }
      }
    }
    second_list = Object.entries(second_dict)
      .filter((e) => e[1])
      .map((e) => Number(e[0]));
    if (second_list.length > 0) {
      println();
      await i18n().timon.others.sc_event_latter(me);
      second_list.forEach((cid) => {
        // CFLAGNAME:48 = 育成回合计时
        set(`cflag:${cid}:48`, 'x');
        // CFLAGNAME:49 = 育成次数
        if (get(`cflag:${cid}:49`) === 7) {
          global_achievement.chan_mor = 1;
        }
        reset_chara(cid);
        get_custom_check(cid).check_second_chance();
      });
    }
    // FLAGNAME:32 = 初见重复育成
    set('flag:32', 2);
  }

  async god_coin(me) {
    const cur_weeks = get('flag:当前回合数');
    const next_year = Math.floor((cur_weeks + 47) / 48) * 48;
    new MyEduMarks().god = next_year + get_random_value(13, 40) - cur_weeks;
    const dice = Math.random();
    const god = sys_get_random_uma_god();
    await print_title_with_kojo(this.#kojo, 'god_coin', me, dice, god);
    if (dice < 0.4 && god) {
      println();
      sys_like_chara(god, 0, get_random_value(10, 20)) && (await waitAnyKey());
    } else if (dice < 0.7) {
      const cur_chara = get('flag:当前互动角色');
      if (
        get(`cflag:${cur_chara}:育成回合计时`) < 3 * 48 ||
        (cur_chara === 0 && get('cflag:0:种族') > 0)
      ) {
        get_attr_and_print_in_event(
          cur_chara,
          [0, 0, 0, 0, 3],
          get_random_value(0, 10),
        ) && (await waitAnyKey());
      }
    } else if (dice >= 0.9) {
      sys_change_money(50);
    }
    return true;
  }

  async experiment(me) {
    new MyEduMarks().experiment = get_random_value(36, 60);
    const is_endu_med = Math.random() < 0.5;
    let wait_flag;
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'experiment',
          me,
          get_chara_talk(400),
          get_chara_talk(25),
          is_endu_med,
        )
      )[0] === 1
    ) {
      get_chara_talk(32);
      if (is_endu_med) {
        wait_flag = get_attr_and_print_in_event(
          0,
          [0, get_random_value(1, 10)],
          0,
        );
      } else {
        wait_flag = get_attr_and_print_in_event(0, [], 0, [50]);
      }
      wait_flag = sys_like_chara(32, 0, get_random_value(5, 15)) || wait_flag;
    } else {
      wait_flag = get_attr_and_print_in_event(
        0,
        [0, 0, 0, 0, 8],
        get_random_value(0, 10),
      );
      wait_flag = sys_like_chara(25, 0, get_random_value(5, 15)) || wait_flag;
    }
    wait_flag && (await waitAnyKey());
  }

  /** @param {CharaTalk} me */
  async custom(me) {
    new MyEduMarks().custom = get_random_value(24, 48);
    if ((await print_title_with_kojo(this.#kojo, 'custom', me))[0] === 1) {
      add('flag:当前马币', -50);
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes)
        .filter((e) => get(`cflag:${e}:育成回合计时`) < 3 * 48)
        .forEach((e) =>
          sys_change_attr_and_print(
            e,
            attr_enum.hp,
            get(`maxbase:${e}:体力`) * 0.15,
          ),
        );
    }
  }

  /** @param {CharaTalk} me */
  async trainer_race(me) {
    new MyEduMarks().trainer_race = get_random_value(24, 48);
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'trainer_race',
          me,
          get_chara_talk(304),
        )
      )[0] === 1
    ) {
      println();
      sys_change_attr_and_print(0, attr_enum.hp, -get('maxbase:0:体力') * 0.25);
      sys_change_attr_and_print(0, attr_enum.tp, -get('maxbase:0:精力') * 0.25);
      const item = get_random_entry([
        ...new Array(8).fill(0).map((_, i) => i),
        ...new Array(7).fill(0).map((_, i) => i + 10),
      ]);
      print(di18n.tb_item.notify(item));
      add(`item:${item}`, 1);
      sys_like_chara(305, 0, get_random_value(0, 10));
      await waitAnyKey();
    }
  }

  /** @param {CharaTalk} me */
  async bankruptcy(me) {
    await print_title_with_kojo(this.#kojo, 'bankruptcy', me);
  }

  /** @param {CharaTalk} me */
  async reject(me) {
    await print_title_with_kojo(this.#kojo, 'reject', me);
    sys_change_fame(-10);
  }

  /** @param {CharaTalk} me */
  async work_over(me) {
    new MyEduMarks().work_over = get_random_value(12, 36);
    await print_title_with_kojo(this.#kojo, 'work_over', me);
    if (get_attr_and_print_in_event(0, [], 0, [-50])) {
      await waitAnyKey();
    }
  }

  /** @param {CharaTalk} me */
  async sick(me) {
    new MyEduMarks().sick = get_random_value(36, 60);
    if ((await print_title_with_kojo(this.#kojo, 'sick', me))[0] === 1) {
      sys_change_money(get_random_value(10, 20));
      get_attr_and_print_in_event(0, [], 0, [-50]) && (await waitAnyKey());
    } else {
      sys_like_chara(305, 0, get_random_value(0, 10)) && (await waitAnyKey());
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async breakfast(me, _me, _call, hook, _extra, event_object) {
    const cid = get_random_entry(
      getAddedCharacters().filter(
        (cid) =>
          cid > 0 &&
          get(`cflag:${cid}:种族`) > 0 &&
          get(`cflag:${cid}:招募状态`) === recruit_flags.yes &&
          get(`love:${cid}`) >= 50 &&
          !sys_check_remote(cid),
      ),
    );
    if (!cid || get('flag:当前位置') !== location_enum.office) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'breakfast',
      get_chara_talk(cid),
      me,
    );
    sys_change_lust(cid, 1600);
    set('flag:当前互动角色', cid);
    println();
    if (sys_love_uma(cid, 1)) {
      await waitAnyKey();
    }
    add_event(hook.hook, event_object.set_arg('privacy_1'));
  }

  /** @param {CharaTalk} me */
  async wind_welcome(me) {
    const god_id = sys_get_random_uma_god();
    const in_team_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter(
      (cid) =>
        get(`cflag:${cid}:种族`) > 0 &&
        get(`cflag:${cid}:育成回合计时`) < 3 * 48,
    );
    const cur_week = get('flag:当前回合数');
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'wind_welcome',
          me,
          god_id > 0 &&
            in_team_list.some(
              (cid) => sys_reg_race(cid).curr.week === cur_week,
            ),
        )
      )[0] === 1
    ) {
      if (
        in_team_list.reduce((p, c) => sys_change_motivation(c, 1) || p, false)
      ) {
        await waitAnyKey();
      }
    } else if (sys_like_chara(god_id, 0, 50)) {
      await waitAnyKey();
    }
  }

  /** @param {CharaTalk} me */
  async chocolate(me) {
    const max = get_extremum_entry(
      [
        [
          36,
          get('cflag:36:招募状态') === recruit_flags.yes ? get('love:36') : -1,
        ],
        [
          80,
          get('cflag:80:招募状态') === recruit_flags.yes ? get('love:80') : -1,
        ],
        [
          119,
          get('cflag:119:招募状态') === recruit_flags.yes
            ? get('love:119')
            : -1,
        ],
      ],
      (e) => e[1],
    );
    if (
      (
        await print_title_with_kojo(this.#kojo, 'chocolate', me, max[0], max[1])
      )[0] === 1
    ) {
      get_attr_and_print_in_event(0, [], 0, [50, 50]) && (await waitAnyKey());
    } else if (max.max[1] !== -1) {
      if (max.max[1] < 60) {
        sys_like_chara(max.max[0], 0, 20, false) && (await waitAnyKey());
      } else {
        sys_change_lust(max.max[0], 2000);
      }
    }
  }

  async sakura_regret() {
    const my_marks = new MyEduMarks();
    const cid = get_random_entry(my_marks.pity || []);
    if (cid !== undefined) {
      await print_title_with_kojo(
        this.#kojo,
        'sakura_regret',
        get_chara_talk(cid),
        sys_get_colored_callname(cid, 0),
      );
      sys_change_motivation(cid, -2) && (await waitAnyKey());
    }
  }

  /** @param {CharaTalk} me */
  async nice_weekend(me) {
    const my_marks = new MyEduMarks();
    const cid = get_random_entry(
      [19, 59].filter((e) => get(`cflag:${e}:殿堂`) > 0 && sys_check_awake(e)),
    );
    if (cid !== void 0 && get('cflag:0:位置') === 0) {
      my_marks.nice_weekend = 0;
      const love = get(`love:${cid}`);
      const relation = get(`relation:${cid}:0`);
      const ret = await print_title_with_kojo(
        this.#kojo,
        'nice_weekend',
        get_chara_talk(cid),
        me,
        sys_get_colored_callname(cid, 0),
      );
      if (ret[0] === 1) {
        if (love >= 50 && love * (get('flag:极端行为限制') || 1) >= relation) {
          if (ret[1] === 1) {
            get_attr_and_print_in_event(0, [], 0, [
              -get('maxbase:0:体力') * 0.2,
              -get('maxbase:0:精力') * 0.2,
            ]) && (await waitAnyKey());
            set('status:0:马跳S', 1);
            await sys_rape_in_sleeping(cid);
            set('status:0:马跳S', 0);
          } else {
            set('base:0:体力', Math.floor(get('base:0:体力') / 2));
            set('base:0:精力', Math.floor(get('base:0:精力') / 2));
            set(`base:${cid}:体力`, Math.floor(get(`base:${cid}:体力`) / 2));
            set(`base:${cid}:精力`, Math.floor(get(`base:${cid}:精力`) / 2));
            await quick_into_sex(cid);
          }
        } else {
          if (love >= 50) {
            add('flag:当前马币', 150);
          }
          if (relation >= 550) {
            add('item:浓缩咖啡', 5);
          }
        }
      }
    }
  }

  /** @param {CharaTalk} me */
  async big_sale(me) {
    const edu_list = sys_filter_chara(
      'cflag',
      '招募状态',
      recruit_flags.yes,
    ).filter(
      (cid) =>
        cid > 0 &&
        cid < max_chara_id &&
        get(`cflag:${cid}:育成回合计时`) < 3 * 48,
    );
    let ret = (
      await print_title_with_kojo(
        this.#kojo,
        'big_sale',
        me,
        get('flag:角色性别') === 1 ? i18n().name.uma_boy : i18n().name.uma_girl,
        !edu_list.length || get('flag:当前马币') < 10,
      )
    )[0];
    if (ret !== 6) {
      const attr = new Array(5).fill(0);
      attr[ret - 1] = 20;
      sys_change_money(-10);
      if (
        edu_list.reduce(
          (p, cid) => all_reward_in_event(cid, { attr }) || p,
          false,
        )
      ) {
        await waitAnyKey();
      }
    }
    new MyEduMarks().big_sale = get_random_value(10, 15);
    return true;
  }

  /** @param {CharaTalk} me */
  async justice(me) {
    const minoru = get_chara_talk(301);
    const { min } = get_extremum_entry(
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
        (cid) =>
          cid > 0 &&
          cid < max_chara_id &&
          get(`cflag:${cid}:成长阶段`) >= 2 &&
          get(`cflag:${cid}:种族`) > 0,
      ),
      (cid) =>
        get(`relation:${cid}:0`) -
        get(`love:${cid}`) * (get('flag:极端行为限制') || 1),
    );
    switch (
      (
        await print_title_with_kojo(
          this.#kojo,
          'justice',
          me,
          min === 301 ? new CharaTalk(301) : get_chara_talk(min),
          minoru,
          minoru.sex_code === 1 ? i18n().name[900112] : i18n().name[900111],
        )
      )[0]
    ) {
      case 1:
        add('flag:当前马币', 100);
        break;
      case 2:
        println();
        print(di18n.tb_item.notify(31));
        add('item:马跳Z', 1);
        break;
      case 3:
        add('maxbase:0:精力', 100);
        if (all_reward_in_event(0, { base: [0, 200] })) {
          await waitAnyKey();
        }
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async strange_day(me, _me, _call, hook, _extra, event_object) {
    const target =
      get('cflag:32:招募状态') === recruit_flags.yes
        ? get_chara_talk(32)
        : get_chara_talk(
            get_random_entry(
              sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
                (e) => e > 0 && e !== 32 && get(`cflag:${e}:成长阶段`) >= 2,
              ),
            ),
          );
    await print_title_with_kojo(
      this.#kojo,
      'strange_day',
      me,
      target,
      target.id !== 32 && get_chara_talk(32),
      sys_check_npc_working(301) && target.id !== 301 && get_chara_talk(301),
      target.id !== 58 && get_chara_talk(58),
      target.id !== 24 && get_chara_talk(24),
      target.id !== 20 && get_chara_talk(20),
    );
    const item = get_random_entry([
      ...new Array(8).fill(0).map((_, i) => i),
      ...new Array(7).fill(0).map((_, i) => i + 10),
    ]);
    println();
    await printAndWait(di18n.tb_item.notify(item));
    add(`item:${item}`, 1);
    if (get('flag:极端行为限制') > 0) {
      add_event(hook.hook, event_object.set_arg('strange_day2'));
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async strange_day2(me, _me, _call, hook, _extra, event_object) {
    const tachyon = get_chara_talk(32);
    const target_id = get_random_entry(
      sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
        (e) =>
          e > 0 &&
          e !== 32 &&
          get(`cflag:${e}:种族`) > 0 &&
          get(`exp:${e}:睡奸次数`) > 0,
      ),
    );
    const is_tachyon_in_team = get('cflag:32:招募状态') === recruit_flags.yes;
    if (
      (is_tachyon_in_team && new TachyonLifeMarks().cook === 0) ||
      target_id === void 0
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const med_list = get('itemkeys').filter(
      (e) => e < 25 && get(`itemprice:${e}`) >= 500,
    );
    const final_list = [];
    let total = 5;
    for (let i = 0; i < med_list.length; ++i) {
      const iid = med_list[i];
      const count =
        i === med_list.length - 1 ? total : get_random_value(0, total);
      if (count > 0) {
        total -= count;
        final_list.push([iid, count]);
      }
    }
    await print_title_with_kojo(
      this.#kojo,
      'strange_day2',
      me,
      get_chara_talk(target_id),
      tachyon,
      sys_get_colored_callname(target_id, 0),
      sys_get_colored_callname(32, 0),
      final_list.map(([iid, count]) => `${__(`tb_item.${iid}`)} × ${count}`),
    );
    if (is_tachyon_in_team) {
      sys_like_chara(32, 0, get_random_value(100, 150));
      add_jewel_reward(32, 10, 200);
    } else {
      final_list.forEach(([iid, count]) => add(`item:${iid}`, count));
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_1(me, _me, _call, hook, _extra, event_object) {
    const cid = get_random_entry(
      getAddedCharacters().filter(
        (e) =>
          e > 0 &&
          get(`cflag:${e}:招募状态`) === recruit_flags.yes &&
          get(`love:${e}`) >= 70 &&
          get(`cflag:${e}:种族`) &&
          !sys_check_remote(e),
      ),
    );
    if (
      !cid ||
      get('flag:当前位置') !== location_enum.office ||
      get('item:鲜榨人奶') + get('item:鲜榨马奶') === 0
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    new MyEduMarks().milk_buyer = cid;
    const money = Math.floor(
      (get('item:鲜榨人奶') * get('itemprice:鲜榨人奶') +
        get('item:鲜榨马奶') * get('itemprice:鲜榨马奶')) *
        1.2,
    );
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'privacy_1',
          me,
          money > 0 && {
            ...get_abbr_number(money),
            color: money_color,
          },
        )
      )[0] === 1
    ) {
      add('flag:当前马币', money);
      set('item:鲜榨马奶', 0);
      set('item:鲜榨人奶', 0);
      add_event(hook.hook, event_object.set_arg('privacy_2_1'));
    } else {
      add_event(hook.hook, event_object.set_arg('privacy_2_2'));
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_2_1(me, _me, _call, hook, _extra, event_object) {
    const cid = new MyEduMarks().milk_buyer;
    if (
      sys_check_remote(cid) ||
      get('flag:当前位置') !== location_enum.office
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_title_with_kojo(
      this.#kojo,
      'privacy_2_1',
      me,
      get_chara_talk(cid),
    );
    add_event(event_hooks.week_end, event_object.set_arg('privacy_3'));
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_2_2(me, _me, _call, hook, _extra, event_object) {
    const cid = new MyEduMarks().milk_buyer;
    if (
      sys_check_remote(cid) ||
      get('flag:当前位置') !== location_enum.office ||
      get('item:鲜榨人奶') + get('item:鲜榨马奶') === 0
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const money = Math.floor(
      (get('item:鲜榨人奶') * get('itemprice:鲜榨人奶') +
        get('item:鲜榨马奶') * get('itemprice:鲜榨马奶')) *
        1.2,
    );
    if (
      (
        await print_title_with_kojo(
          this.#kojo,
          'privacy_2_2',
          me,
          money > 0 && { ...get_abbr_number(money), color: money_color },
        )
      )[0] === 1
    ) {
      add('flag:当前马币', money);
      set('item:鲜榨马奶', 0);
      set('item:鲜榨人奶', 0);
      add_event(hook.hook, event_object.set_arg('privacy_2_1'));
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async privacy_3(me, _me, _call, hook, _extra, event_object) {
    const my_marks = new MyEduMarks();
    const cid = my_marks.milk_buyer;
    if (
      sys_check_remote(cid) ||
      get('cflag:0:位置') !== 0 ||
      get('flag:当前位置') === location_enum.basement ||
      !sys_check_awake(0) ||
      !sys_check_awake(cid) ||
      get('flag:床伴') > 0 ||
      !check_pregnant_unprotect(0) ||
      !check_pregnant_unprotect(cid)
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const chara = get_chara_talk(cid);
    const ret = await print_title_with_kojo(
      this.#kojo,
      'privacy_3',
      me,
      get_chara_talk(cid),
      sys_get_colored_callname(cid, 0),
    );
    if (ret[0] === 1) {
      if (ret[1] === 1) {
        sys_like_chara(chara.id, 0, 25) && (await waitAnyKey());
      } else {
        set('flag:床伴', chara.id);
      }
    } else if (get('talent:0:泌乳') === 3 || get('flag:惩戒力度') === 3) {
      if (get('flag:惩戒力度') === 3) {
        begin_and_init_ero(0, cid);
        set('tflag:强奸', set('tflag:主导权', cid));
        set(`tcvar:${cid}:孕袋卖奶`, 1);
        await print_ero_page(cid, true);
        await end_ero_and_show_result();
      } else {
        begin_and_init_ero(0, cid);
        set('tflag:强奸', set('tflag:主导权', cid));
        if (get('talent:0:乳头类型') === 2) {
          set('tcvar:0:乳突', 1);
        }
        await run_custom_ero(cid, ero_hooks.use_item, {
          item: item_enum.milk_pump,
          part: part_enum.breast,
        });
        await print_ero_page(cid, true);
        await end_ero_and_show_result();
      }
    } else if (get('flag:惩戒力度') < 3) {
      sys_change_lust(cid, get_random_value(400, 800));
    }
    my_marks.milk_buyer = 0;
  }
};
