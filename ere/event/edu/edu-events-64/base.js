const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-64.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const l_kojo = require('#/event/love/love-64.kojo');
const { add_event, cb_enum } = require('#/event/queue');
const { i_pama_yandere } = require('#/event/snippets/64');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

class Edu64Base extends CustomizedEdu {
  /** @returns {Record<string,any>} */
  get dict() {
    const o = {};
    const pama = get_chara_talk(this.id);
    o['代表色'] = pama.color;
    o['称呼'] = sys_get_callname(this.id, 0);
    o.T = era.get('callname:0:-2');
    o['自称'] = sys_get_callname(this.id, this.id);
    o['马娘'] = pama.uma_sex_title;
    o['她'] = pama.sex;
    return o;
  }

  async train() {
    await kojo['训练'](this.dict);
  }

  async train_success_add(pama, me, callname, hook) {
    hook.arg =
      (await print_name_and_show_kojo('加练', pama, kojo, this.dict))[0] === 1;
  }

  async train_fail(pama, me, callname, hook, extra_flag) {
    if (extra_flag.train === attr_enum.intelligence) {
      return await super.train_fail(pama, me, callname, hook, extra_flag);
    }
    await CustomizedEdu.print_fail_info_in_train(
      pama,
      extra_flag.train,
      extra_flag.fumble,
    );
    era.println();
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    await print_event_name('在保健室', pama);
    await kojo['训练失败'](this.dict);
  }

  /** @param {CharaTalk} pama */
  async beginning(pama) {
    await print_name_and_show_kojo('目白善信登场！', pama, kojo, this.dict);
    if (all_reward_in_event(this.id, { relation: get_random_value(25, 75) })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async rumor(pama) {
    await print_name_and_show_kojo('小小的流言', pama, kojo, this.dict);
    if (all_reward_in_event(this.id, { motivation: -1 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async strange(pama) {
    await print_name_and_show_kojo('微妙的空间', pama, kojo, this.dict);
    if (all_reward_in_event(this.id, { motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async free_race(pama, me, callname, hook, extra, event_object) {
    await print_name_and_show_kojo('要来自由赛吗？', pama, kojo, this.dict);
    if (all_reward_in_event(this.id, { pt: 10 })) {
      await era.waitAnyKey();
    }
    event_object.special = false;
    add_event(
      event_hooks.out_shopping,
      event_object.set_arg('important_place'),
    );
  }

  /** @param {CharaTalk} pama */
  async mejiro(pama) {
    await print_name_and_show_kojo('名为目白的重压', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async new_year_1(pama) {
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    const ret = await print_name_and_show_kojo(
      '新年抱负',
      pama,
      kojo,
      this.dict,
    );
    let attr;
    let base;
    let pt;
    let relation = 0;
    let love;
    switch (ret[4]) {
      case 1:
        attr = [20];
        break;
      case 2:
        base = [100];
        break;
      case 3:
        pt = 20;
        if (ret[6] === 1) {
          relation = 10;
        } else {
          love = 2;
        }
    }
    if (all_reward_in_event(this.id, { attr, base, love, pt, relation })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async how(pama) {
    let relation = 0;
    let love;
    if (
      (
        await print_name_and_show_kojo(
          '三冠要怎么办啊！？',
          pama,
          kojo,
          this.dict,
        )
      )[5] === 1
    ) {
      relation = 10;
    } else {
      love = 2;
    }
    if (all_reward_in_event(this.id, { relation, love })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async sister(pama) {
    await print_event_name(pama.siblings_sex_title + '亦是对手', pama);
    if (
      check_aim_race(RaceHistory.get(this.id).get(), race_enum.sats_sho, 1, 1)
    ) {
      await kojo['姐妹亦是对手一冠'](this.dict);
    } else {
      await kojo['姐妹亦是对手'](this.dict);
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async hometown(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:当前互动角色') !== this.id) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo('故乡时光', pama, kojo, this.dict);
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
  async summer_start_1(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const helios = get_chara_talk(65);
    await print_name_and_show_kojo('夏季合宿（经典年）开始', pama, kojo, {
      ...this.dict,
      太阳神色: helios.color,
      太阳神称呼善信: sys_get_callname(65, this.id),
      少女: pama.teen_sex_title,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_middle_1(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const ret = await print_name_and_show_kojo(
      '夏季合宿（经典年）途中',
      pama,
      kojo,
      {
        ...this.dict,
        太阳神色: get_chara_talk(65).color,
        太阳神称呼善信: sys_get_callname(65, this.id),
      },
    );
    const attr = [0, 0, 0, 0, 0];
    if (ret[1] === 1) {
      attr[attr_enum.strength] = 10;
    } else {
      attr[attr_enum.toughness] = 10;
    }
    let wait = all_reward_in_event(this.id, { attr });
    if (era.get('cflag:65:招募状态') === recruit_flags.yes) {
      wait = sys_like_chara(this.id, 65, 30) || wait;
      wait = sys_like_chara(65, this.id, 30) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_end_1(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const mcqueen = get_chara_talk(64);
    await print_name_and_show_kojo('夏季合宿（经典年）结束', pama, kojo, {
      ...this.dict,
      麦昆色: mcqueen.color,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async triple_crown(pama) {
    await print_name_and_show_kojo('三冠达成！', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} pama */
  async new_year_2(pama) {
    era.set(`cflag:${this.id}:节日事件标记`, 0);
    const ret = await print_name_and_show_kojo('新年参拜', pama, kojo, {
      ...this.dict,
      丸善色: get_chara_talk(4).color,
      天狼星色: get_chara_talk(70).color,
    });
    let attr;
    let base;
    let pt;
    switch (ret[3]) {
      case 1:
        base = [200];
        break;
      case 2:
        attr = new Array(5).fill(8);
        break;
      case 3:
        pt = 35;
    }
    if (all_reward_in_event(this.id, { attr, base, pt })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_start_2(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo('夏季合宿（资深年）开始', pama, kojo, {
      ...this.dict,
      太阳神色: get_chara_talk(65).color,
      狄杜斯色: get_chara_talk(63).color,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_middle_2(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    if (
      (
        await print_name_and_show_kojo('夏日的小小意外', pama, kojo, {
          ...this.dict,
          他: get_chara_talk(0).sex,
          玩家本名: get_chara_talk(0).actual_name,
        })
      )[4] === 1
    ) {
      sys_change_lust(this.id, 500);
    } else {
      await quick_into_sex(this.id);
      await kojo['涂防晒油马跳结束'](this.dict);
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async walk(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo('海边的散步时光', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_end_2(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:位置`) !== location_enum.beach ||
      era.get('cflag:0:位置') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo('夏季合宿（资深年）结束', pama, kojo, {
      ...this.dict,
      狄杜斯色: get_chara_talk(63).color,
      太阳神色: get_chara_talk(65).color,
      太阳神称呼善信: sys_get_callname(65, this.id),
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async christmas_party(pama) {
    const ret = await print_name_and_show_kojo(
      '目白的圣诞晚会',
      pama,
      kojo,
      this.dict,
    );
    if (ret[1] === 2) {
      await quick_into_sex(this.id);
      await kojo['圣诞晚会马跳后续'](this.dict);
    }
  }

  /** @param {CharaTalk} pama */
  async winner(pama) {
    await print_name_and_show_kojo('头抬得太高了啦！', pama, kojo, {
      ...this.dict,
      波旁色: get_chara_talk(26).color,
      露娜色: get_chara_talk(17).color,
    });
  }

  /** @param {CharaTalk} pama */
  async sports_car(pama) {
    const tokino = get_chara_talk(301);
    const chairman = get_chara_talk(302);
    await print_name_and_show_kojo('震惊！跑车是礼物！', pama, kojo, {
      ...this.dict,
      理事长色: chairman.color,
      秋川弥生: chairman.name,
      绿帽色: tokino.color,
      骏川缰绳: tokino.name,
    });
    era.set('item:善信号', 1);
  }

  async race_start(pama, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const dict = this.dict;
    let name;
    switch (extra.race) {
      case race_enum.begin_race:
        name = '赛事开场';
        break;
      case race_enum.sats_sho:
        name = '迎向皋月赏！';
        break;
      case race_enum.toky_yus:
        name = '迎向日本德比！';
        break;
      case race_enum.hako_kin:
        name = '前往函馆纪念！';
        break;
      case race_enum.kiku_sho:
        await print_event_name('迎向菊花赏', pama);
        if (
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.sats_sho,
            1,
            1,
          ) &&
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.toky_yus,
            1,
            1,
          )
        ) {
          await kojo['迎向菊花赏两冠'](dict);
        } else {
          await kojo['迎向菊花赏'](dict);
        }
        return;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          name = '迎向有马纪念';
        } else {
          name = '准备就绪？开始逃跑！';
        }
        break;
      case race_enum.nikk_hai:
        name = '转换心情！';
        break;
      case race_enum.tenn_spr:
        name = '不只是目白！';
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          name = '总之先相信！';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          dict['他'] = get_chara_talk(0).sex;
          name = i_pama_yandere()
            ? '属于我的跑法和属于我的……'
            : '就用属于我的跑法！';
        }
    }
    if (name !== undefined) {
      await print_name_and_show_kojo(name, pama, kojo, dict);
    } else {
      await print_event_name('竞赛之前', pama);
      await kojo['通用赛前'](dict);
    }
  }

  async race_end(pama, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:育成回合计时`);
    const dict = this.dict;
    let name;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (extra_flag.rank === 1) {
          name = '逃亡者的开幕！';
        }
        break;
      case race_enum.sats_sho:
        if (extra_flag.rank === 1) {
          name = '总之先拿一冠！';
        } else {
          name = '输了也没关系！';
        }
        break;
      case race_enum.toky_yus:
        if (extra_flag.rank === 1) {
          name = '幸运的逃跑者';
        } else {
          name = '运气稍微……';
        }
        break;
      case race_enum.hako_kin:
        if (extra_flag.rank === 1 && edu_weeks < 96) {
          name = '观光准备';
          add_event(
            event_hooks.out_start,
            new EventObject(this.id, cb_enum.edu, true).set_arg('hometown'),
          );
        }
        break;
      case race_enum.kiku_sho:
        if (extra_flag.rank === 1) {
          name = '逃跑者归来！';
          if (
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.sats_sho,
              1,
              1,
            ) &&
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.toky_yus,
              1,
              1,
            )
          ) {
            add_event(
              event_hooks.week_end,
              new EventObject(this.id, cb_enum.edu, true).set_arg(
                'triple_crown',
              ),
            );
          }
        } else {
          name = '一点悄悄话……';
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          if (extra_flag.rank === 1) {
            name = '有马纪念的超级逃亡者！';
            extra_flag.skill_change = [202051];
          } else {
            name = '稍显遗憾的逃亡表演';
          }
        } else if (extra_flag.rank === 1) {
          dict['太阳神色'] = get_chara_talk(65).color;
          dict['太阳神称呼善信'] = sys_get_callname(65, this.id);
          if (era.get(`cstr:${this.id}:决胜服`) === '') {
            name = '这就是我热血沸腾的跑法啊！';
            if (
              (await print_name_and_show_kojo(name, pama, kojo, dict))[3] === 1
            ) {
              await quick_into_sex(this.id);
            }
            return;
          } else {
            name = '逃跑的终点，就在这里';
            if (era.get(`love:${this.id}`) >= 50) {
              if (
                (await print_name_and_show_kojo(name, pama, kojo, dict))[5] ===
                1
              ) {
                await quick_into_sex(this.id);
                dict['玩家本名'] = era.get('callname:0:-1');
                await kojo['圣诞有马拥抱马跳后续'](dict);
              } else {
                await quick_into_sex(this.id);
                await kojo['圣诞有马接吻马跳后续'](dict);
              }
              return;
            }
          }
        }
        break;
      case race_enum.nikk_hai:
        if (extra_flag.rank === 1) {
          name = '全新的每一天！';
        }
        break;
      case race_enum.tenn_spr:
        if (extra_flag.rank === 1) {
          name = '是领放的胜利！';
          extra_flag.relation_change = 0;
          if (era.get(`love:${this.id}`) >= 75) {
            dict['玩家本名'] = era.get('callname:0:-1');
            if (
              (await print_name_and_show_kojo(name, pama, kojo, dict))[2] === 2
            ) {
              extra_flag.relation_change = 10;
            }
            return;
          }
        } else {
          name = '不是主角也无所谓！';
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          name = '虽然有点难过但无所谓！';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          if (extra_flag.rank === 1) {
            name = '呀呼！全身泥泞也完全无所谓啦！';
          } else {
            name = '啊哈，好像是稍微有点不甘呢';
          }
        }
    }
    if (name !== undefined) {
      await print_name_and_show_kojo(name, pama, kojo, dict);
    } else if (extra_flag.rank === 1) {
      await print_event_name('竞赛获胜', pama);
      await kojo['通用胜利'](this.dict);
    } else {
      await print_event_name('竞赛败北', pama);
      await kojo['通用失败'](this.dict);
    }
  }

  async crazy_fan_end() {
    const pama = get_chara_talk(this.id);
    let name;
    if (i_pama_yandere()) {
      name = '无终的逃亡';
      await l_kojo[name](this.dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else if (era.get(`love:${this.id}`) >= 75) {
      name = '无力逃亡';
      await kojo[name](this.dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else {
      return await super.slave_end();
    }
  }
}

module.exports = Edu64Base;
