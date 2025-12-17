/**
 * @file 目白善信 - 育成
 * @author KUN
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-64.kojo');
const Edu64Base = require('#/event/edu/edu-events-64/base');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends Edu64Base {
  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async rain(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') > 0) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        '【单独出行时的某个雨天，说不定会有意想不到的相遇】',
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    await print_name_and_show_kojo('即使被大雨淋湿', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async important_place(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        [
          '【',
          pama.get_colored_name(),
          ' 之前在这里参加过自由赛……要再带',
          pama.sex,
          '来看看吗】',
        ],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    const attr = [0, 0, 0, 0, 0];
    if (
      (
        await print_name_and_show_kojo(
          '因为是重要的地方',
          pama,
          kojo,
          this.dict,
        )
      )[2] === 1
    ) {
      attr[attr_enum.speed] = 10;
    } else {
      attr[attr_enum.intelligence] = 10;
    }
    if (all_reward_in_event(this.id, { attr })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async golf(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        ['【最近 ', pama.get_colored_name(), ' 训练后总是急着来商店街】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    await print_name_and_show_kojo('绕远路的一杆进洞', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async lottery(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前月') !== 1) {
      return;
    }
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        ['【和 ', pama.get_colored_name(), ' 去抽奖吧！】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    const dict = this.dict;
    dict.dice = get_random_value(1, 4);
    const ret = await print_name_and_show_kojo('抽奖活动！', pama, kojo, dict);
    let base;
    const attr = new Array(5).fill(0);
    let relation = 0;
    let love;
    switch (dict.dice) {
      case 1:
        base = [200];
        break;
      case 2:
        attr.fill(5);
        break;
      case 3:
        attr.fill(10);
        if (ret[0] === 1) {
          relation = 20;
        } else {
          love = 4;
        }
        break;
      case 4:
        new PamaEduMarks().hot_spring = 1;
    }
    if (
      all_reward_in_event(this.id, {
        attr,
        base,
        love,
        relation,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async hot_spring(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前月') !== 12) {
      return;
    }
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        ['【和 ', pama.get_colored_name(), ' 去泡温泉吧！】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    new PamaEduMarks().hot_spring++;
    const dict = this.dict;
    dict['他'] = get_chara_talk(0).sex;
    dict['太阳神色'] = get_chara_talk(65).color;
    const ret = await print_name_and_show_kojo('温泉旅行', pama, kojo, dict);
    let love;
    if (ret[1] === 2) {
      love = 6;
    }
    let wait = all_reward_in_event(this.id, { love });
    if (ret[1] === 2) {
      wait = sys_like_chara(this.id, 65, 50) || wait;
      wait = sys_like_chara(65, this.id, 50) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} pama */
  async lunch_break(pama) {
    await print_name_and_show_kojo('错过午休时间', pama, kojo, this.dict);
    if (
      all_reward_in_event(this.id, {
        base: [-50],
        motivation: -1,
        relation: 0,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async dis_talent(pama) {
    const ret = await print_name_and_show_kojo('距离感的天才', pama, kojo, {
      ...this.dict,
      大进色: get_chara_talk(50).color,
      白仁色: get_chara_talk(16).color,
    });
    let relation = 0;
    let love;
    if (ret[2] === 1) {
      relation = 10;
    } else {
      love = 2;
    }
    if (
      all_reward_in_event(this.id, {
        relation,
        love,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async choice(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        ['【和 ', pama.get_colored_name(), ' 去买东西吧！】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    const dict = this.dict;
    dict['光明色'] = get_chara_talk(74).color;
    dict['多伯色'] = get_chara_talk(59).color;
    const ret = await print_name_and_show_kojo('终极选择！', pama, kojo, dict);
    let aim;
    const attr = [0];
    if (ret[0] === 1) {
      aim = 59;
    } else {
      aim = 74;
    }
    if (era.get(`cflag:${aim}:招募状态`) === recruit_flags.yes) {
      attr[0] = 25;
    } else {
      attr[0] = 15;
    }
    let wait = all_reward_in_event(this.id, { attr });
    if (era.get(`cflag:${aim}:招募状态`) === recruit_flags.yes) {
      wait = sys_like_chara(aim, this.id, 25) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} pama */
  async confused(pama) {
    const dict = this.dict;
    dict['太阳神色'] = get_chara_talk(65).color;
    dict['太阳神称呼T'] = sys_get_callname(65, 0);
    dict['太阳神称呼善信'] = sys_get_callname(65, this.id);
    await print_name_and_show_kojo('迷茫的恋爱心', pama, kojo, dict);
  }

  /** @param {CharaTalk} pama */
  async a_step(pama) {
    const dict = this.dict;
    dict['阿尔丹色'] = get_chara_talk(71).color;
    await print_name_and_show_kojo('向前迈出的一步', pama, kojo, dict);
  }
};
