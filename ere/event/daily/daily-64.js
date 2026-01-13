/**
 * @file 目白善信 - 日常
 * @author KUN
 */
const era = require('#/era-electron');

const next_turn = require('#/system/ero/calc-sex/next-turn');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const sys_do_sex = require('#/system/ero/sys-calc-ero');
const { remove_item } = require('#/system/ero/sys-calc-ero-item');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { get_custom_check } = require('#/event/check/check-factory');
const kojo = require('#/event/daily/daily-64.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const l_kojo = require('#/event/love/love-64.kojo');
const { i_pama_yandere } = require('#/event/snippets/64');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { item_enum } = require('#/data/ero/item-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const PamaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-64');
const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const dict = {};
    const pama = get_chara_talk(this.id);
    dict['称呼'] = sys_get_callname(this.id, 0);
    dict['代表色'] = pama.color;
    dict['小姐'] = pama.adult_sex_title;
    dict['她'] = pama.sex;
    dict['姐妹'] = pama.siblings_sex_title;
    dict['马娘'] = pama.uma_sex_title;
    const me = get_chara_talk(0);
    dict.T = me.name;
    dict['T称呼善信'] = sys_get_callname(0, this.id);
    dict.half_life = +i_pama_yandere();
    return dict;
  }

  good_morning() {
    this.select();
  }

  select() {
    const life_marks = new PamaEduMarks();
    const dict = this.#dict;
    if (life_marks.b_escape > 0) {
      life_marks.b_escape = 0;
      kojo['地下室逃脱'](dict);
    } else {
      get_chara_talk(65);
      dict['善信称呼太阳神'] = sys_get_callname(this.id, 65);
      kojo['主界面'](dict);
    }
  }

  async office_study() {
    await kojo['指导学习'](this.#dict);
  }

  async office_cook() {
    await kojo['加餐'](this.#dict);
  }

  async office_prepare() {
    await kojo['赛前准备'](this.#dict);
  }

  async office_rest() {
    await kojo['小憩'](this.#dict);
  }

  async talk() {
    const dict = this.#dict;
    get_chara_talk(59);
    dict['善信称呼多伯'] = sys_get_callname(this.id, 59);
    get_chara_talk(65);
    dict['善信称呼太阳神'] = sys_get_callname(this.id, 65);
    get_chara_talk(71);
    dict['善信称呼阿尔丹'] = sys_get_callname(this.id, 71);
    get_chara_talk(74);
    dict['善信称呼光明'] = sys_get_callname(this.id, 74);
    get_chara_talk(86);
    dict['善信称呼高峰'] = sys_get_callname(this.id, 86);
    await kojo['聊天'](dict);
  }

  async office_game() {
    const dict = this.#dict;
    get_chara_talk(27);
    dict['善信称呼莱恩'] = sys_get_callname(this.id, 27);
    await kojo['玩游戏'](dict);
  }

  async office_gift() {
    await kojo['送礼物'](this.#dict);
  }

  async school_atrium(hook) {
    const edu_marks = new PamaEduMarks();
    if (
      era.get(`love:${this.id}`) >= 50 &&
      era.get('item:肛塞') > 0 &&
      era.get(`cflag:${this.id}:肠道内精液`) > 0 &&
      !edu_marks.snails
    ) {
      edu_marks.snails = 1;
      const pama = get_chara_talk(this.id);
      const ret = await print_name_and_show_kojo(
        '要变成蜗牛了///',
        get_chara_talk(this.id),
        kojo,
        {
          代表色: pama.color,
          T: era.get(`callname:${this.id}:-2`),
          她: pama.sex,
          少女: pama.teen_sex_title,
          称呼: sys_get_callname(this.id, 0),
        },
      );
      begin_and_init_ero(0, this.id);
      sys_do_sex(
        new EroParticipant(0, part_enum.item),
        new EroParticipant(this.id, part_enum.anal),
        item_enum.butt_plug,
      );
      await next_turn(false);
      if (ret[0] === 2) {
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(this.id, part_enum.virgin),
          false,
        );
      }
      set_palam_to_max(this.id, part_enum.virgin);
      remove_item(this.id, part_enum.anal);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand, -0.5),
        new EroParticipant(this.id, part_enum.anal),
        false,
      );
      end_ero_and_train();
      hook.override = true;
      return;
    }
    if ((hook.arg = !(await select_action_in_atrium()))) {
      await kojo['枯树洞'](this.#dict);
    } else {
      await kojo['中庭约会'](this.#dict);
    }
  }

  async school_rooftop() {
    const dict = this.#dict;
    const life_marks = new PamaLifeMarks();
    if (era.get(`love:${this.id}`) >= 50 && !life_marks.love_rooftop) {
      life_marks.love_rooftop = 1;
      dict.check = 1;
    }
    if ((await kojo['天台'](dict))[0] === 2 && sys_love_uma(this.id, 1)) {
      await era.waitAnyKey();
    }
  }

  async out_river(hook, extra) {
    if ((hook.arg = await select_action_around_river()) > 0) {
      await kojo['散步'](this.#dict);
    } else {
      await kojo['钓鱼'](this.#dict);
      extra.jpy = get_random_value(0, 5);
    }
  }

  async out_shopping(hook) {
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    const dict = this.#dict;
    switch (temp) {
      case 0:
        await kojo['街机厅'](dict);
        break;
      case 1:
        await kojo['抽奖'](dict);
        break;
      case 2:
        await kojo['卡拉OK'](dict);
        break;
      case 3:
        dict['善信称呼阿尔丹'] = sys_get_callname(this.id, 71);
        await kojo['电影'](dict);
    }
  }

  async out_church() {
    const dict = this.#dict;
    dict.dice = +(Math.random() < 0.5);
    await kojo['神社'](dict);
  }

  async out_station(hook) {
    switch ((hook.arg = await select_action_in_station(this.id))) {
      case 0:
        await kojo['车站吃饭'](this.#dict);
        break;
      case 1:
        await kojo['车站约会'](this.#dict);
        break;
      case 2:
        await kojo['商店'](this.#dict);
    }
  }

  async good_night(hook) {
    const love = era.get(`love:${this.id}`);
    const lust = era.get(`base:${this.id}:性欲`);
    if (i_pama_yandere() && love >= 95 && lust >= lust_border.absent_mind) {
      new PamaEduMarks().only_you++;
      const ret = await print_name_and_show_kojo(
        '负距离的我们',
        get_chara_talk(this.id),
        l_kojo,
        {
          ...this.#dict,
          玩家名: era.get('callname:0:-1'),
          自称: sys_get_callname(this.id, this.id),
        },
      );
      if (ret[0] === 1) {
        const item = '弗隆' + (love === 100 ? 'P' : 'K');
        hook.arg = 1;
        switch (ret[3]) {
          case 1:
            era.set(`status:0:${item}`, 1);
            break;
          case 2:
            era.set(`status:${this.id}:${item}`, 1);
            hook.arg = 2;
        }
      }
      return;
    }
    const check = get_custom_check(this.id).is_want_make_love();
    if (
      i_pama_yandere() &&
      era.get('cflag:0:性别') === 1 &&
      era.get(`cflag:${this.id}:性别`) !== 1 &&
      lust >= lust_border.itch &&
      check > 0
    ) {
      new PamaEduMarks().only_you++;
      hook.arg = (
        await print_name_and_show_kojo(
          '入夜，我为你而来',
          get_chara_talk(this.id),
          l_kojo,
          this.#dict,
        )
      )[0];
      return;
    }
    if (check > 0) {
      const ret = await kojo['晚安求爱']({ check, ...this.#dict });
      if (ret[0] === 1) {
        hook.arg = 1;
      } else if (ret[0] === 2) {
        if (check === 2) {
          hook.arg = 2;
        } else {
          hook.arg = 0;
        }
      }
    } else {
      kojo['晚安'](this.#dict);
    }
  }

  async load_talk() {
    await kojo['读档对话'](this.#dict);
  }

  async celebration(hook) {
    const pama = get_chara_talk(this.id);
    const dict = this.#dict;
    let temp;
    let relation;
    let love;
    let base;
    let pt;
    switch (era.get('flag:当前回合数') % 48) {
      case 9:
        if (era.get(`cflag:${this.id}:殿堂`) > 0) {
          return await super.celebration(hook);
        }
        await print_name_and_show_kojo('殿堂周', pama, kojo, dict);
        break;
      case 14:
        await print_event_name('粉丝感谢祭', pama);
        if (era.get(`cflag:${this.id}:育成回合计时`) < 3 * 48) {
          dict['波旁色'] = get_chara_talk(26).color;
          await kojo['育成中粉丝感谢祭'](dict);
        } else {
          dict['自称'] = era.get('callname:64:64');
          await kojo['已育成粉丝感谢祭'](dict);
        }
        break;
      case 30:
        if (!(era.get(`cflag:${this.id}:育成回合计时`) < 3 * 48)) {
          return await super.celebration(hook);
        }
        era.set(`cflag:${this.id}:节日事件标记`, 0);
        dict['自称'] = era.get('callname:64:64');
        temp = await print_name_and_show_kojo('庙会', pama, kojo, dict);
        if (temp[0] === 1) {
          hook.override = true;
          relation = 10;
          love = 2;
          if (temp[1] === 1) {
            base = [100];
          } else {
            pt = 35;
          }
          switch (temp[temp.length - 1]) {
            case 1:
              relation += 10;
              break;
            case 2:
              love += 2;
              break;
            case 3:
              sys_change_lust(this.id, get_random_value(800, 1200));
          }
          if (all_reward_in_event(this.id, { relation, love, base, pt })) {
            await era.waitAnyKey();
          }
        }
        break;
      case 40:
        await print_name_and_show_kojo('万圣节', pama, kojo, dict);
        break;
      case 48:
        dict['内恰色'] = get_chara_talk(60).color;
        dict['双涡轮色'] = get_chara_talk(66).color;
        dict['诗歌剧色'] = get_chara_talk(62).color;
        if (
          (await print_name_and_show_kojo('圣诞节', pama, kojo, dict))[6] === 1
        ) {
          const cache = era.get('flag:当前位置');
          era.set('flag:当前位置', location_enum.home);
          await quick_into_sex(this.id);
          era.set('flag:当前位置', cache);
        }
        break;
      default:
        return await super.celebration(hook);
    }
  }

  async basement_end() {
    const pama = get_chara_talk(this.id);
    let name;
    if (i_pama_yandere()) {
      name = '无终的逃亡';
      await l_kojo[name](this.#dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else if (era.get(`love:${this.id}`) >= 75) {
      name = '明日再会';
      await kojo[name](this.#dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else {
      return await super.basement_end();
    }
  }

  async slave_end() {
    const pama = get_chara_talk(this.id);
    let name;
    if (i_pama_yandere()) {
      name = '无终的逃亡';
      await l_kojo[name](this.#dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else if (era.get(`love:${this.id}`) >= 75) {
      name = '迷途终点';
      await kojo[name](this.#dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else {
      return await super.slave_end();
    }
  }
};
