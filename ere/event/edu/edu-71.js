/**
 * @file 目白阿尔丹 - 育成
 * @author 洛洛
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-71.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const CharaTalk = require('#/utils/chara-talk');

const { get_chara_color } = require('#/data/chara-colors');
const ArdanEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-71');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedEdu {
  get #dict() {
    const o = {};
    o['代表色'] = get_chara_color(this.id);
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      o['她'] = '他';
      o['马娘'] = '马郎';
      o['姐姐'] = '兄长';
    } else {
      o['她'] = '她';
      o['马娘'] = '马娘';
      o['姐姐'] = '姐姐';
    }
    o['你'] = era.get('callname:0:-2');
    o['称呼'] = sys_get_callname(this.id, 0);
    return o;
  }

  get #cdict() {
    const o = this.#dict;
    CharaTalk.init_chara(69);
    o['阿尔丹称呼千代王'] = sys_get_callname(this.id, 69);
    CharaTalk.init_chara(72);
    o['阿尔丹称呼八重无敌'] = sys_get_callname(this.id, 72);
    return o;
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async beginning(ardan, me, callname, hook, extra_flag, event_object) {
    await print_name_and_show_kojo('起始的画笔', ardan, kojo, this.#dict);
    add_event(hook.hook, event_object.set_arg('beginning2'));
    if (
      all_reward_in_event(this.id, {
        attr: [0, 0, 0, 10],
        relation: 20,
        love: 2,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} ardan */
  async beginning2(ardan) {
    let wait_flag;
    if (
      (
        await print_name_and_show_kojo(
          '出道赛前的努力',
          ardan,
          kojo,
          this.#dict,
        )
      )[1] === 1
    ) {
      wait_flag = all_reward_in_event(this.id, {
        attr: [10, 10],
        relation: 20,
        love: 2,
      });
    } else {
      wait_flag = all_reward_in_event(this.id, {
        attr: [10],
        relation: -10,
      });
    }
    if (wait_flag) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} ardan
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async gap(ardan, me, callname, hook, extra_flag, event_object) {
    add_event(event_hooks.out_start, event_object.set_arg('together'));
    const dict = this.#dict;
    if (era.get('cflag:0:性别') === 1) {
      dict['先生'] = '先生';
    } else {
      dict['先生'] = '小姐';
    }
    if (era.get(`cflag:${this.id}:性别`) === 1) {
      dict['小姐'] = '少爷';
    } else {
      dict['小姐'] = '小姐';
    }
    await print_name_and_show_kojo('初更的夹缝中', ardan, kojo, dict);
    if (
      all_reward_in_event(this.id, {
        attr: [0, 0, 0, 5],
        love: 1,
        relation: 10,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} ardan */
  async together(ardan) {
    await print_name_and_show_kojo('一起同行的未来', ardan, kojo, this.#dict);
    new ArdanEduMarks().sick = 0;
    if (
      all_reward_in_event(this.id, {
        attr: [0, 0, 0, 15],
        motivation: 1,
        relation: 50,
        love: 5,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} ardan */
  async tie(ardan) {
    let wait_flag;
    if (
      (
        await print_name_and_show_kojo(
          '见证我们的羁绊',
          ardan,
          kojo,
          this.#cdict,
        )
      ).at(-1) === 1
    ) {
      wait_flag = all_reward_in_event(this.id, {
        relation: 20,
        love: 2,
        attr: new Array(5).fill(5),
        pt: 30,
      });
    } else {
      wait_flag = all_reward_in_event(this.id, {
        attr: new Array(5).fill(3),
        pt: 15,
      });
    }
    if (wait_flag) {
      await era.waitAnyKey();
    }
  }

  async train_fail(ardan, me, callname, hook, extra_flag) {
    const event_marks = new ArdanEduMarks();
    event_marks.train_fail++;
    return await super.train_fail(ardan, me, callname, hook, extra_flag);
  }

  async race_start(ardan, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let name;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (edu_weeks === 23) {
          name = '出道赛赛前';
          if ((await kojo[name](this.#dict))[0] === 1) {
            extra_flag.motivation_change = 1;
            extra_flag.love_change = 1;
          } else {
            extra_flag.motivation_change = 1;
          }
        }
        break;
      case race_enum.sats_sho:
        name = '皋月赏赛前';
        await kojo[name](this.#dict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.aoba_sho:
        name = '青叶赏赛前';
        await kojo[name](this.#dict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.toky_yus:
        name = '日本德比赛前';
        await kojo[name](this.#dict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.kiku_sho:
        name = '菊花赏赛前';
        await kojo[name](this.#dict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.tenn_sho:
        if (edu_weeks < 96) {
          name = '经典年天皇赏秋赛前';
        } else {
          name = '资深年天皇赏秋赛前';
        }
        await kojo[name](this.#dict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.sank_hai:
        name = '大阪杯赛前';
        await kojo[name](this.#cdict);
        extra_flag.relation_change = 10;
        extra_flag.motivation_change = 1;
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          name = '宝冢纪念赛前';
          await kojo[name](this.#dict);
          extra_flag.relation_change = 10;
          extra_flag.motivation_change = 1;
        }
        break;
      case race_enum.main_oka:
        if (edu_weeks > 96) {
          name = '每日王冠赛前';
          await kojo[name](this.#dict);
          extra_flag.relation_change = 10;
          extra_flag.motivation_change = 1;
        }
        break;
    }
    if (name === undefined) {
      name = '通用赛前';
      await kojo[name](this.#dict);
      extra_flag.relation_change = 10;
    }
  }

  async race_end(ardan, me, callname, hook, extra_flag) {
    const edu_marks = new ArdanEduMarks();
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    let name;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (extra_flag.rank === 1) {
          name = '出道赛赛后';
          await kojo[name](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.pt_change = 60;
          extra_flag.relation_change = 20;
          extra_flag.love_change = 2;
          edu_marks.sick = 1;
          add_event(
            event_hooks.out_start,
            new EventObject(this.id, cb_enum.edu).set_arg('gap'),
          );
        }
        break;
      case race_enum.sats_sho:
        if (extra_flag.rank === 1) {
          name = '皋月赏1着';
          await kojo[name](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.relation_change = 20;
          extra_flag.love_change = 2;
          extra_flag.pt_change = 60;
        } else if (extra_flag.rank <= 5) {
          name = '皋月赏入着';
          await kojo[name](this.#dict);
          extra_flag.attr_change = new Array(5).fill(3);
          extra_flag.relation_change = 10;
          extra_flag.love_change = 1;
          extra_flag.pt_change = 30;
        }
        break;
      case race_enum.aoba_sho:
        if (extra_flag.rank <= 5) {
          name = '青叶赏赛后';
          await kojo[name](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.relation_change = 10;
          extra_flag.love_change = 1;
          extra_flag.pt_change = 60;
          add_event(
            event_hooks.week_start,
            new EventObject(this.id, cb_enum.edu).set_arg('tie'),
          );
        }
        break;
      case race_enum.toky_yus:
        if (extra_flag.rank === 1) {
          name = '日本德比1着';
          await kojo[name](this.#cdict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.relation_change = 30;
          extra_flag.love_change = 3;
          extra_flag.pt_change = 60;
        } else if (extra_flag.rank <= 5) {
          name = '日本德比入着';
          await kojo[name](this.#cdict);
          extra_flag.attr_change = new Array(5).fill(3);
          extra_flag.relation_change = 10;
          extra_flag.love_change = 1;
          extra_flag.pt_change = 30;
        }
        if (era.get(`talent:${this.id}:身体素质`) === -1) {
          era.print([ardan.get_colored_name(), ' 不再 [体弱多病] 了……']);
          era.set(`talent:${this.id}:身体素质`, 0);
        }
        if (era.get(`talent:${this.id}:痛苦感受`) !== -1) {
          era.print([ardan.get_colored_name(), ' 变得 [坚强] 了……']);
          era.set(`talent:${this.id}:痛苦感受`, -1);
        }
        break;
      case race_enum.kiku_sho:
        if (extra_flag.rank === 1) {
          name = '菊花赏1着';
          await kojo[name](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.relation_change = 20;
          extra_flag.love_change = 2;
          extra_flag.pt_change = 60;
        } else if (extra_flag.rank <= 5) {
          name = '菊花赏入着';
          await kojo[name](this.#dict);
          extra_flag.attr_change = new Array(5).fill(3);
          extra_flag.relation_change = 10;
          extra_flag.love_change = 1;
          extra_flag.pt_change = 30;
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks < 96) {
          if (extra_flag.rank === 1) {
            name = '经典年天皇赏秋1着';
            await kojo[name](this.#dict);
            extra_flag.attr_change = new Array(5).fill(5);
            extra_flag.relation_change = 20;
            extra_flag.love_change = 2;
            extra_flag.pt_change = 60;
          } else if (extra_flag.rank <= 3) {
            name = '经典年天皇赏秋前三';
            await kojo[name](this.#dict);
            extra_flag.attr_change = new Array(5).fill(3);
            extra_flag.relation_change = 10;
            extra_flag.love_change = 1;
            extra_flag.pt_change = 30;
          }
        } else if (extra_flag.rank === 1) {
          name = '资深年天皇赏秋赛后';
          await kojo[name](this.#dict);
          extra_flag.attr_change = new Array(5).fill(30);
          extra_flag.relation_change = 50;
          extra_flag.love_change = 5;
          extra_flag.pt_change = 150;
        }
        break;
      case race_enum.sank_hai:
        if (extra_flag.rank <= 3) {
          name = '大阪杯赛后';
          await kojo[name](this.#cdict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.relation_change = 20;
          extra_flag.love_change = 2;
          extra_flag.pt_change = 60;
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96 && extra_flag.rank <= 3) {
          name = '宝冢纪念赛后';
          await kojo[name](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.relation_change = 20;
          extra_flag.love_change = 2;
          extra_flag.pt_change = 60;
        }
        break;
      case race_enum.main_oka:
        if (edu_weeks > 96 && extra_flag.rank <= 3) {
          name = '每日王冠赛后';
          await kojo[name](this.#dict);
          extra_flag.attr_change = new Array(5).fill(5);
          extra_flag.relation_change = 20;
          extra_flag.love_change = 2;
          extra_flag.pt_change = 60;
        }
        break;
    }
    if (name === undefined) {
      if (extra_flag.rank === 1) {
        name = '通用1着';
        extra_flag.attr_change = new Array(5).fill(3);
        extra_flag.relation_change = 10;
        extra_flag.love_change = 1;
        extra_flag.pt_change = 30;
      } else {
        name = '通用非1着';
        extra_flag.attr_change = new Array(5).fill(2);
        extra_flag.relation_change = 0;
        extra_flag.pt_change = 15;
      }
      await kojo[name](this.#dict);
    }
  }
};
