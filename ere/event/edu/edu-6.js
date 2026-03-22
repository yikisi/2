const era = require('#/era-electron');

const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const OguriEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-6');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { location_enum } = require('#/data/locations');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { base_attr_list } = require('#/data/train-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #kojo() {
    return i18n().kojo[this.id].edu;
  }

  get #dict() {
    return generate_dictionary(this.id, { uma: !0, your_name: !0 });
  }

  /** @param {CharaTalk} oguri */
  async beginning(oguri) {
    await print_title_with_kojo(this.#kojo, 'beginning', oguri, this.#dict);
    new OguriEduMarks().train_buff = 6;
  }

  /** @param {CharaTalk} oguri */
  async new_year(oguri) {
    // CFLAGNAME:56 = 节日事件标记
    era.set(`cflag:${this.id}:56`, 0);
    let wait = false;
    switch (
      (await print_title_with_kojo(this.#kojo, 'new_year', oguri, this.#dict))[
        'choice'
      ]
    ) {
      case 1:
        wait = all_reward_in_event(this.id, { attr: [0, 10] });
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          base: [era.get(`maxbase:${this.id}:0`) * 0.1],
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { pt: 20 });
    }
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async food(oguri) {
    let wait =
      (await print_title_with_kojo(this.#kojo, 'food', oguri, this.#dict))[
        'choice'
      ] === 1;
    era.println();
    if (wait) {
      wait = sys_like_chara(this.id, 0, 10);
    } else {
      wait = sys_love_uma(this.id, 2);
    }
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async valentine(oguri) {
    // CFLAGNAME:56 = 节日事件标记
    era.set(`cflag:${this.id}:56`, 0);
    await print_title_with_kojo(this.#kojo, 'valentine', oguri, this.#dict);
    era.println();
    // ITEMNAME:100 = 情人节巧克力
    era.print(di18n.tb_item.notify(100));
    era.add('item:100', 1);
    await era.waitAnyKey();
  }

  /** @param {CharaTalk} oguri */
  async worry(oguri) {
    await print_title_with_kojo(this.#kojo, 'worry', oguri, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: gacha(base_attr_list, 3).reduce(
          (p, c) => {
            p[c] = 10;
            return p;
          },
          [0, 0, 0, 0, 0],
        ),
        relation: 10,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async emperor(oguri) {
    await print_title_with_kojo(this.#kojo, 'emperor', oguri, {
      ...this.#dict,
      L_COLOR: get_chara_talk(17).color,
    });
    if (all_reward_in_event(this.id, { motivation: 1, relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async sea(oguri, me, callname, hook, extra_flag, event_object) {
    if (
      // CFLAGNAME:45 = 位置
      era.get(`cflag:${this.id}:45`) !== location_enum.beach ||
      era.get('cflag:0:45') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'sea', oguri, {
      ...this.#dict,
      T_COLOR: get_chara_talk(21).color,
    });
    if (all_reward_in_event(this.id, { pt: 20, relation: 10, motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async back_home1(oguri, me, callname, hook, extra_flag, event_object) {
    await print_title_with_kojo(this.#kojo, 'back_home1', oguri, this.#dict);
    if (all_reward_in_event(this.id, { love: 2, motivation: 1 })) {
      await era.waitAnyKey();
    }
    add_event(event_hooks.week_start, event_object.set_arg('back_home2'));
  }

  /** @param {CharaTalk} oguri */
  async back_home2(oguri) {
    await print_title_with_kojo(this.#kojo, 'back_home2', oguri, this.#dict);
    if (all_reward_in_event(this.id, { relation: 15, love: 2 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async four_clock(oguri) {
    if (new OguriEduMarks().aim_check < 2) {
      return;
    }
    await print_title_with_kojo(this.#kojo, 'four_clock', oguri, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50, false, 5)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async sea2(oguri, me, callname, hook, extra_flag, event_object) {
    if (
      // CFLAGNAME:45 = 位置
      era.get(`cflag:${this.id}:45`) !== location_enum.beach ||
      era.get('cflag:0:45') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_title_with_kojo(this.#kojo, 'sea2', oguri, this.#dict);
    if (all_reward_in_event(this.id, { pt: 20, relation: 10, motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async elephant(oguri) {
    await print_title_with_kojo(this.#kojo, 'elephant', oguri, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   */
  async palace(oguri, me) {
    await CustomizedEdu.common_palace(oguri, me);
    // CFLAGNAME:49 = 育成次数
    if (era.get(`cflag:${this.id}:49`) === 1) {
      const dict = {
        ...this.#dict,
        G_COLOR: get_chara_color(40),
        L_COLOR: get_chara_color(17),
        CB_COLOR: get_chara_color(57),
        CH_COLOR: get_chara_color(69),
        SI_COLOR: get_chara_color(70),
        ST_COLOR: '#ff45b5',
      };
      era.drawLine();
      await print_title_with_kojo(this.#kojo, 'palace_start', oguri, dict);
      const uma = sys_get_chara_pseudo(this.id);
      uma.motivation = 2;
      await simulation_game_in_event(
        uma,
        [17, 57, 70, 69, 21, 72].map((e) => new LegendUmaSelector(e)),
        race_enum.toky_yus,
        i18n().kojo[this.id].palace_race,
      );
      era.drawLine();
      await print_title_with_kojo(this.#kojo, 'palace_end', oguri, dict);
    } else {
      await CustomizedEdu.common_palace_relation(oguri, me);
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async nightmare(oguri, me, callname, hook, extra_flag, event_object) {
    await print_title_with_kojo(this.#kojo, 'nightmare', oguri, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
    add_event(event_hooks.week_start, event_object.set_arg('awake'));
  }

  /** @param {CharaTalk} oguri */
  async awake(oguri) {
    await print_title_with_kojo(this.#kojo, 'awake', oguri, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async truth(oguri) {
    await print_title_with_kojo(this.#kojo, 'truth', oguri, this.#dict);
    era.println();
    if (
      [this.id, 340, 341, 342].reduce(
        (p, c) => sys_like_chara(c, 0, 50) || p,
        false,
      )
    ) {
      await era.waitAnyKey();
    }
    new OguriEduMarks().god = 1;
  }

  /** @param {CharaTalk} oguri */
  async prepare(oguri) {
    await print_title_with_kojo(this.#kojo, 'prepare', oguri, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
  }

  async race_start(oguri, me, callname, hook, extra_flag) {
    // CFLAGNAME:48 = 育成回合计时
    const edu_weeks = era.get(`cflag:${this.id}:48`);
    let key;
    switch (extra_flag.race) {
      case race_enum.nhk_cup:
        key = 'nhk_cup';
        break;
      case race_enum.sats_sho:
        key = 'sats_sho';
        break;
      case race_enum.toky_yus:
        if (
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.sats_sho,
            1,
            1,
          )
        ) {
          key = 'toky_yus';
        }
        break;
      case race_enum.kiku_sho:
        if (new OguriEduMarks().god === 1) {
          await print_title_with_kojo(this.#kojo, 'kiku_sho', oguri, {
            ...this.#dict,
            D_COLOR: get_chara_color(340),
            G_COLOR: get_chara_color(341),
            B_COLOR: get_chara_color(342),
          });
          return;
        }
        break;
      case race_enum.mile_cha:
        if (edu_weeks < 96) {
          key = 'mile_cha';
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          key = 'arim_kin_1';
        } else {
          key = 'arim_kin_final';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          key = 'tenn_sho';
        }
    }
    if (key !== undefined) {
      await print_title_with_kojo(this.#kojo, key, oguri, {
        ...this.#dict,
        T_COLOR: get_chara_talk(21).color,
        // 藤正进行曲（Fujimasa March）
        F_COLOR: '#2ad5d5',
      });
    } else {
      await super.race_start(oguri, me, callname, hook, extra_flag);
    }
  }

  async race_end(oguri, me, callname, hook, extra) {
    // CFLAGNAME:48 = 育成回合计时
    const edu_weeks = era.get(`cflag:${this.id}:48`);
    let key;
    switch (extra.race) {
      case race_enum.nhk_cup:
        if (extra.rank <= 5) {
          key = 'nhk_cup_win';
        }
        break;
      case race_enum.sats_sho:
        if (extra.rank === 1) {
          key = 'sats_sho_win';
        }
        break;
      case race_enum.toky_yus:
        if (
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.sats_sho,
            1,
            1,
          ) &&
          extra.rank === 1
        ) {
          key = 'toky_yus_win';
          add_event(
            event_hooks.school_god,
            new EventObject(this.id, cb_enum.edu).set_arg('truth'),
          );
        }
        break;
      case race_enum.kiku_sho:
        if (new OguriEduMarks().god === 1 && extra.rank === 1) {
          key = 'kiku_sho_win';
        }
        break;
      case race_enum.mile_cha:
        if (edu_weeks < 96 && extra.rank <= 3) {
          key = 'mile_cha_win';
          extra.relation_change = 15;
          add_event(
            event_hooks.week_end,
            new EventObject(this.id, cb_enum.edu).set_arg('back_home1'),
          );
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96 && extra.rank <= 3) {
          const dict = {
            ...this.#dict,
            mvp: extra.contestants.find((e) => e.rank.curr === 1).index_chara,
            sex:
              era.get('love:6') >= 50 &&
              era.get('exp:6:25') > era.get('exp:6:26'),
          };
          await print_title_with_kojo(this.#kojo, 'arim_kin_win', oguri, dict);
          if (dict.sex) {
            await quick_into_sex(this.id);
          }
          return;
        } else if (edu_weeks > 96 && extra.rank === 1) {
          key = 'arim_kin_final_win';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && extra.rank === 1) {
          key = 'tenn_sho_win';
        }
    }
    if (key !== undefined) {
      await print_title_with_kojo(this.#kojo, key, oguri, {
        ...this.#dict,
        RANK: extra.rank.toString(),
      });
    } else {
      await super.race_end(oguri, me, callname, hook, extra);
    }
  }
};
