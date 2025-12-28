/**
 * @file 小栗帽 - 育成
 * @author 雞雞
 */
const era = require('#/era-electron');

const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-6.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const { chara_colors, get_chara_color } = require('#/data/chara-colors');
const OguriEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-6');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { location_enum } = require('#/data/locations');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEdu {
  get #dict() {
    const o = {};
    const oguri = get_chara_talk(this.id);
    o['代表色'] = oguri.color;
    o['她'] = oguri.sex;
    o['马娘'] = oguri.get_uma_sex_title();
    const me = get_chara_talk(0);
    o['你'] = me.name;
    o['玩家本名'] = me.actual_name;
    return o;
  }

  /** @param {CharaTalk} oguri */
  async beginning(oguri) {
    await print_name_and_show_kojo('万事起头难', oguri, kojo, this.#dict);
    new OguriEduMarks().train_buff = 6;
  }

  /** @param {CharaTalk} oguri */
  async new_year(oguri) {
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    const ret = await print_name_and_show_kojo('新年', oguri, kojo, this.#dict);
    let wait = false;
    switch (ret[2]) {
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
      (
        await print_name_and_show_kojo(
          '在世界中心呼唤饭的野兽',
          oguri,
          kojo,
          this.#dict,
        )
      )[1] === 1;
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
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    await print_name_and_show_kojo('情人节', oguri, kojo, this.#dict);
    era.println();
    // ITEMNAME:100 = 情人节巧克力
    era.print(i18n().item.notify(100));
    era.add('item:100', 1);
    await era.waitAnyKey();
  }

  /** @param {CharaTalk} oguri */
  async worry(oguri) {
    await print_name_and_show_kojo('隐忧', oguri, kojo, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: gacha(Object.values(attr_enum), 3).reduce(
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
    const dict = this.#dict;
    dict['皇帝色'] = chara_colors[17][1];
    dict['露娜色'] = chara_colors[17][0];
    await print_name_and_show_kojo('山高皇帝远', oguri, kojo, dict);
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
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const dict = this.#dict;
    dict['小玉色'] = get_chara_talk(21).color;
    await print_name_and_show_kojo('不甘之海', oguri, kojo, dict);
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
    await print_name_and_show_kojo(
      '鲜红色的手帕（上）',
      oguri,
      kojo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { love: 2, motivation: 1 })) {
      await era.waitAnyKey();
    }
    add_event(event_hooks.week_start, event_object.set_arg('back_home2'));
  }

  /** @param {CharaTalk} oguri */
  async back_home2(oguri) {
    await print_name_and_show_kojo(
      '鲜红色的手帕（下）',
      oguri,
      kojo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: 15, love: 2 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async four_clock(oguri) {
    if (new OguriEduMarks().aim_check < 2) {
      return;
    }
    await print_name_and_show_kojo('凌晨四点的特雷森', oguri, kojo, this.#dict);
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
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo(
      '奇迹白星也会落到地上',
      oguri,
      kojo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { pt: 20, relation: 10, motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async elephant(oguri) {
    await print_name_and_show_kojo(
      '把房间里的大象抛出窗外',
      oguri,
      kojo,
      this.#dict,
    );
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
    if (era.get(`cflag:${this.id}:育成次数`) === 1) {
      const dict = this.#dict;
      dict['千代王色'] = get_chara_color(69);
      dict['千明色'] = get_chara_color(57);
      dict['天狼星色'] = get_chara_color(70);
      dict['星王色'] = '#ff45b5';
      dict['露娜色'] = get_chara_color(17);
      dict['黄金城色'] = get_chara_color(40);
      era.drawLine();
      await print_name_and_show_kojo('致优骏们（上）', oguri, kojo, dict);
      const uma = sys_get_chara_pseudo(this.id);
      uma.motivation = 2;
      await simulation_game_in_event(
        uma,
        [17, 57, 70, 69, 21, 72].map((e) => new LegendUmaSelector(e)),
        race_enum.toky_yus,
        '拟・日本德比',
      );
      era.drawLine();
      await print_name_and_show_kojo('致优骏们（下）', oguri, kojo, dict);
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
    await print_name_and_show_kojo('噩梦', oguri, kojo, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
    add_event(event_hooks.week_start, event_object.set_arg('awake'));
  }

  /** @param {CharaTalk} oguri */
  async awake(oguri) {
    await print_name_and_show_kojo('苏醒', oguri, kojo, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async truth(oguri) {
    await print_name_and_show_kojo('真实', oguri, kojo, this.#dict);
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
    await print_name_and_show_kojo('疾速备战', oguri, kojo, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
  }

  async race_start(oguri, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let name;
    switch (extra_flag.race) {
      case race_enum.nhk_cup:
        name = '决战一里（上）';
        break;
      case race_enum.sats_sho:
        await print_event_name('皋月', oguri);
        await kojo['皋月前'](this.#dict);
        return;
      case race_enum.toky_yus:
        if (
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.sats_sho,
            1,
            1,
          )
        ) {
          await print_event_name('优骏', oguri);
          await kojo['优骏前'](this.#dict);
          return;
        }
        break;
      case race_enum.kiku_sho:
        if (new OguriEduMarks().god === 1) {
          name = '菊花';
        }
        break;
      case race_enum.mile_cha:
        if (edu_weeks < 96) {
          name = '打铁趁热（上）';
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          name = '小栗森巴（上）';
        } else {
          name = '小栗帽：终局之战（上）';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          name = '别样的记者（上）';
        }
    }
    if (name !== undefined) {
      const dict = this.#dict;
      dict['小玉色'] = get_chara_talk(21).color;
      dict['藤正色'] = '#2ad5d5';
      await print_name_and_show_kojo(name, oguri, kojo, dict);
    } else {
      await super.race_start(oguri, me, callname, hook, extra_flag);
    }
  }

  async race_end(oguri, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let name;
    switch (extra_flag.race) {
      case race_enum.nhk_cup:
        if (extra_flag.rank <= 5) {
          name = '决战一里（下）';
        }
        break;
      case race_enum.sats_sho:
        if (extra_flag.rank === 1) {
          await print_event_name('皋月', oguri);
          await kojo['皋月后'](this.#dict);
          return;
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
          extra_flag.rank === 1
        ) {
          await print_event_name('优骏', oguri);
          await kojo['优骏后'](this.#dict);
          add_event(
            event_hooks.school_god,
            new EventObject(this.id, cb_enum.edu).set_arg('truth'),
          );
          return;
        }
        break;
      case race_enum.kiku_sho:
        if (new OguriEduMarks().god === 1 && extra_flag.rank === 1) {
          name = '幻梦';
        }
        break;
      case race_enum.mile_cha:
        if (edu_weeks < 96 && extra_flag.rank <= 3) {
          name = '打铁趁热（下）';
          extra_flag.relation_change = 15;
          add_event(
            event_hooks.week_end,
            new EventObject(this.id, cb_enum.edu).set_arg('back_home1'),
          );
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96 && extra_flag.rank <= 3) {
          const dict = {
            mvp: extra_flag.contestants.find((e) => e.rank.curr === 1)
              .index_chara,
            ...this.#dict,
          };
          if (
            (
              await print_name_and_show_kojo(
                '小栗森巴（下）',
                oguri,
                kojo,
                dict,
              )
            )[1] === 1
          ) {
            await quick_into_sex(this.id);
          }
          return;
        } else if (edu_weeks > 96 && extra_flag.rank === 1) {
          name = '小栗帽：终局之战（下）';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          name = '别样的记者（下）';
        }
    }
    if (name !== undefined) {
      const dict = this.#dict;
      dict['名次'] = extra_flag.rank;
      await print_name_and_show_kojo(name, oguri, kojo, dict);
    } else {
      await super.race_end(oguri, me, callname, hook, extra_flag);
    }
  }
};
