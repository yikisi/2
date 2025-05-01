/**
 * @file 育成地文
 * @author 雞雞
 * @author 幽白書
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const {
  sys_change_lust,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const ICustomizedEdu = require('#/event/edu/snippets/edu-interface');
const print_fail_info_in_train = require('#/event/edu/snippets/print-fail-info-in-train');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const { buff_colors, money_color } = require('#/data/color-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum, location_name } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { class_enum } = require('#/data/race/model/race-info');
const {
  race_enum,
  race_infos,
  race_rewards,
} = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

class CustomizedEdu extends ICustomizedEdu {
  static common_event_count = 0;

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  static async common_palace(chara, me) {
    const { check, count, buffer } = CustomizedEdu.get_palace_info(chara),
      titles = new CharaTitles(chara.id).get();
    if (
      check >= 6 ||
      (check >= 4 &&
        titles.findIndex(
          (e) =>
            e.n.endsWith('三冠') || e.n.endsWith('三宝冠') || e.n === '美国梦',
        ) !== -1) ||
      (check >= 3 &&
        titles.findIndex(
          (e) =>
            e.n.startsWith('无败三') ||
            e.n.startsWith('无败泥') ||
            e.n === '无暇美国梦',
        ) !== -1)
    ) {
      await print_event_name('登上殿堂宝座', chara);
      await era.printAndWait(
        `每年一月，URA赛${chara.get_uma_sex_title()}殿堂就会开始针对退役马娘进行票选。`,
      );
      era.println();
      await era.printAndWait(
        `而到了三月，生涯功成名就，且在严格票选中脱颖而出的赛${chara.get_uma_sex_title()}将会登上殿堂，并获得《显彰赛${chara.get_uma_sex_title()}》此一至高无上的荣誉。`,
      );
      era.println();
      await era.printAndWait([
        '而 ',
        me.get_colored_name(),
        ' 的爱马 ',
        chara.get_colored_name(),
        '——',
      ]);
      era.add(`cflag:${chara.id}:殿堂`, 1);
    } else {
      await print_event_name('殿堂宝座之下', chara);

      await era.printAndWait('很遗憾未能入选殿堂。');
      era.println();
      await era.printAndWait([
        '但 ',
        me.get_couple_title(),
        ' 也仍然为竭尽全力达到的成果感到骄傲，并且相信后来者能站在自己的肩上爬向更高的顶点。',
      ]);
    }
    era.println();
    for (const seg of buffer) {
      await era.printAndWait(seg);
    }
    era.println();
    const title = new CharaTitles(chara.id).get_colored_curr_title(),
      fame_reward =
        (count.g1 * race_rewards[class_enum.G1].r01.fame) / 2 +
        (count.g2 * race_rewards[class_enum.G2].r01.fame) / 2 +
        (count.g3 * race_rewards[class_enum.G3].r05.fame) / 2;
    if (check >= 6) {
      await era.printAndWait([
        `随着以${chara.sex}为蓝本的铜像揭幕，`,
        ...(title ? [title, ' '] : []),
        chara.get_colored_name(),
        ` 的传奇故事将会永远留在殿堂之中……`,
      ]);
      era.println();
      sys_like_chara(302, 0, fame_reward / 5 + 20) && (await era.waitAnyKey());
      sys_like_chara(301, 0, 100) && (await era.waitAnyKey());
    } else {
      await era.printAndWait([
        ...(title ? [title, ' '] : []),
        chara.get_colored_name(),
        ` 的传奇故事将会永远被世人所传颂……`,
      ]);
      era.println();
      sys_like_chara(302, 0, fame_reward / 5) && (await era.waitAnyKey());
    }
    sys_change_fame(fame_reward);
    era.set(`cflag:${chara.id}:可再次育成`, 1);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  static async common_palace_relation(chara, me) {
    const love = era.get(`love:${chara.id}`);
    if (love >= 50 || era.get(`relation:${chara.id}:0`) > 0) {
      era.drawLine();
      era.set('flag:当前位置', location_enum.gate);
      await print_event_name('之后，面向未来', chara);
      era.set('flag:当前位置', location_enum.office);
      await era.printAndWait([
        '时光如白驹过隙，与 ',
        chara.get_colored_name(),
        ' 相伴已逾数载，再过一段日子，',
        me.get_couple_title(),
        ' 马上就要展开新的篇章',
      ]);
      era.println();
      if (love >= 75) {
        await era.printAndWait([
          me.get_couple_title(),
          ' 在熟悉的训练员室里恩爱地亲热起来。',
        ]);
        await era.printAndWait(
          '两位小情人沉浸在幸福的二人世界，仿佛能把俗世的琐事都抛进虚空之中。',
        );
        era.println();
        await era.printAndWait('我是世界之王！——杰克 · 道森', {
          align: 'center',
        });
      } else if (love >= 50) {
        await era.printAndWait([
          me.get_couple_title(),
          ' 在熟悉的训练员室里热烈地拥吻。',
        ]);
        await era.printAndWait(
          '情欲的气息充斥整个房间，只有娇声与肉体碰撞的声音不住回荡。',
        );
        era.println();
        await era.printAndWait('食色，性也。——孟子', { align: 'center' });
      } else {
        await era.printAndWait([
          me.get_couple_title(),
          ' 在熟悉的训练员室里相谈甚欢，又不禁为无可避免的别离伤感。',
        ]);
        await era.printAndWait(
          '人生难得相逢，正是因为可能失去才会让珍惜眼前人如此重要。',
        );
        era.println();
        await era.printAndWait('一期一会之心，唯见茶之相中。——千利休', {
          align: 'center',
        });
      }
    }
  }

  /** @param {CharaTalk} chara */
  static get_chara_name(chara) {
    const name = chara.get_colored_name();
    if (chara.id === 0) {
      name.content = '自己';
    }
    return name;
  }

  /**
   * @param {CharaTalk} chara
   * @returns {{count:{g1:number,g2:number,g3:number},check:number,buffer:*[]}}
   */
  static get_palace_info(chara) {
    const races = new RaceHistory(chara.id).get_entries(),
      main_races = [],
      ret_buffer = [];
    let total_prize = 0,
      champions = 0,
      check = 0,
      g1_count = 0,
      g2_count = 0,
      g3_count = 0;
    races
      .sort(
        (a, b) =>
          race_infos[a.race].race_class - race_infos[b.race].race_class ||
          b.weeks - a.weeks,
      )
      .forEach((e) => {
        const info = race_infos[e.race];
        if (e.rank === 1) {
          champions++;
          e.race !== race_enum.begin_race && main_races.push(e.race);
          check += info.race_class === RaceInfo.class_enum.G1;
        }
        if (e.rank <= 5) {
          g1_count += (info.race_class === RaceInfo.class_enum.G1) / e.rank;
          g2_count += (info.race_class === RaceInfo.class_enum.G2) / e.rank;
          g3_count += (info.race_class === RaceInfo.class_enum.G3) / e.rank;
          total_prize += info.prize * RaceInfo.prize_ratios[e.rank - 1];
        }
      });
    ret_buffer.push([
      chara.get_colored_name(),
      '，生涯 ',
      {
        content: races.length.toLocaleString(),
        color: buff_colors[1],
        fontWeight: 'bold',
      },
      ' 战 ',
      {
        content: champions,
        color: champions ? buff_colors[1] : '',
        fontWeight: 'bold',
      },
      ' 胜，总赏金达到 ',
      { color: money_color, content: Math.floor(total_prize).toLocaleString() },
      ' 马币',
    ]);
    if (main_races.length) {
      ret_buffer.push([
        '主胜鞍：',
        ...main_races.slice(0, 5).map((e, i) => {
          const ret = race_infos[e].get_colored_name_with_class();
          i > 0 && (ret.content = ' ' + ret.content);
          return ret;
        }),
        main_races.length > 5 ? '……' : '',
      ]);
    }
    return {
      buffer: ret_buffer,
      check,
      count: {
        g1: g1_count,
        g2: g2_count,
        g3: g3_count,
      },
    };
  }

  /**
   * @param {CharaTalk} chara
   * @param {number} attr
   * @param {boolean} is_fumble
   */
  static async print_fail_info_in_train(chara, attr, is_fumble) {
    await print_fail_info_in_train(chara, attr, is_fumble);
  }

  /** @author 雞雞 */
  async crazy_fan_end() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait(
      era.get(`relation:${this.id}:0`) < 0
        ? [
            '不管是参赛还是接受采访，',
            me.get_colored_name(),
            ' 和担当的紧张关系有目共睹，质疑这种紧张关系影响了担当发展的声音一直没有停息。校方对 ',
            me.get_couple_title(),
            ' 的组合开始失去耐心……但有些人比他们更缺乏耐性。',
          ]
        : [
            '或许是 ',
            me.get_colored_name(),
            ' 过于懈怠，又或许是负责',
            chara.get_uma_sex_title(),
            '的天赋不足，胜利与 ',
            me.get_couple_title(),
            ' 始终遥遥无期。校方对 ',
            me.get_couple_title(),
            ' 的组合开始失去耐心……但有些人比他们更缺乏耐性。',
          ],
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait(
      [
        me.get_colored_name(),
        ' 手上提着要送给 ',
        chara.get_colored_name(),
        ' 的蜂蜜蛋糕独自走在大雨的路上，只听身后传来一阵急促的脚步声，然后便是后腰钻心的痛楚。',
      ],
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait(
      [
        me.get_colored_name(),
        ' 被推倒在地，身后来人不断刺向你的背部，直到 ',
        me.get_colored_name(),
        ' 一动也不动。',
      ],
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait(
      '包裹着蛋糕盒的塑料袋被雨点猛烈地敲打着、敲打着、敲打着……',
      {
        offset: 6,
        width: 12,
      },
    );
    await era.printAndWait('被愤怒的粉丝报复，迎来了结局……', {
      offset: 6,
      width: 12,
    });
    await print_event_name(
      [{ content: '粉丝袭击', color: buff_colors[3] }],
      chara,
      undefined,
      6,
    );
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  // eslint-disable-next-line no-unused-vars
  async foreign_rest(chara, me, callname) {
    const chara_name = CustomizedEdu.get_chara_name(chara);
    await era.printAndWait([
      '为了恢复状态，',
      me.get_colored_name(),
      ' 订购了当地理疗服务，安排 ',
      chara_name,
      ' 在酒店调理修养……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 的身体素质似乎逐渐恢复了！',
    ]);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{lan:string}} extra_flag
   */
  async foreign_study(chara, me, callname, hook, extra_flag) {
    const chara_name = CustomizedEdu.get_chara_name(chara);
    await era.printAndWait([
      '为了能进行基本的外语交流，',
      me.get_colored_name(),
      ' 安排 ',
      chara_name,
      ' 在酒店房间学习……',
    ]);
    const abl = era.get(`abl:${this.id}:${extra_flag.lan}语`);
    hook.arg =
      abl === 5 ||
      Math.random() <
        (5 - abl) / 5 + (era.get(`abl:0:${extra_flag.lan}语`) > abl) / 2;
    if (hook.arg) {
      await era.printAndWait('临急抱佛脚，起效了！');
    } else {
      await era.printAndWait(['不好！', chara.get_colored_name(), ' 看睡了！']);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  // eslint-disable-next-line no-unused-vars
  async foreign_train(chara, me, callname) {
    const chara_name = CustomizedEdu.get_chara_name(chara);
    await era.printAndWait([
      '为了习惯当地赛场，',
      me.get_colored_name(),
      ' 安排 ',
      chara_name,
      ' 在训练场进行适应训练……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 似乎渐渐习惯当地赛道的质感了！',
    ]);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  // eslint-disable-next-line no-unused-vars
  async foreign_travel(chara, me, callname, hook, extra_flag, event_object) {
    await era.printAndWait([
      '为了放松心情，',
      me.get_colored_name(),
      ...(chara.id > 0 ? [' 和 ', chara.get_colored_name()] : [' 独自']),
      ' 在',
      location_name[era.get('flag:当前位置')],
      '观光……',
    ]);
    await era.printAndWait('虽然花了不少钱，但还是值得的！');
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {RaceEndParams} extra_flag
   */
  // eslint-disable-next-line no-unused-vars
  async race_end(chara, me, callname, hook, extra_flag) {
    if (extra_flag.rank === 1) {
      await print_event_name('竞赛获胜', chara);
      await get_chara_talk(0).say_and_wait(
        Math.random() < 0.5 ? '太棒了！' : '往更高的目标迈进吧！',
      );
    } else if (extra_flag.rank <= 5) {
      await print_event_name('竞赛上榜', chara);
      await get_chara_talk(0).say_and_wait(
        Math.random() < 0.5 ? '今天的表现也很好！' : '绝对不能输给她们！',
      );
    } else if (extra_flag.rank <= 10) {
      await print_event_name('竞赛败北', chara);
      await get_chara_talk(0).say_and_wait(
        Math.random() < 0.5 ? '下次表现一定更好！' : '沮丧也不是办法！',
      );
    } else {
      await print_event_name('下次不会输了！', chara);
      await get_chara_talk(0).say_and_wait(
        Math.random() < 0.5 ? '总有一天绝对会赢！' : '你愿意就这样丢脸下去？',
      );
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {RaceStartParams} extra_flag
   */
  // eslint-disable-next-line no-unused-vars
  async race_start(chara, me, callname, hook, extra_flag) {
    await print_event_name('竞赛之前', chara);
    await get_chara_talk(0).say_and_wait(
      Math.random() < 0.5 ? '尽全力就好！' : '跑出自己的气势来！',
    );
  }

  /**
   * @author 雞雞
   * @param {number} attr
   * @returns {Promise}
   */
  async train(attr) {
    const chara = get_chara_talk(this.id).get_colored_name();
    if (this.id === 0) {
      chara.content = '自己';
    }
    switch (attr) {
      case attr_enum.speed:
        await era.printAndWait([
          '为了提高速度，',
          get_chara_talk(0).get_colored_name(),
          ' 安排 ',
          chara,
          ' 进行跑步训练……',
        ]);
        break;
      case attr_enum.endurance:
        await era.printAndWait([
          '为了提高耐力，',
          get_chara_talk(0).get_colored_name(),
          ' 安排 ',
          chara,
          ' 进行游泳训练……',
        ]);
        break;
      case attr_enum.strength:
        await era.printAndWait([
          '为了提高力量，',
          get_chara_talk(0).get_colored_name(),
          ' 安排 ',
          chara,
          ' 进行重量训练……',
        ]);
        break;
      case attr_enum.toughness:
        await era.printAndWait([
          '为了锻炼根性，',
          get_chara_talk(0).get_colored_name(),
          ' 安排 ',
          chara,
          ' 进行上坡训练……',
        ]);
        break;
      case attr_enum.intelligence:
        await era.printAndWait([
          '为了提高比赛触觉，',
          get_chara_talk(0).get_colored_name(),
          ' 安排 ',
          chara,
          ' 研究比赛录像……',
        ]);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainFailParams} extra_flag
   */
  async train_fail(chara, me, callname, hook, extra_flag) {
    await CustomizedEdu.print_fail_info_in_train(
      chara,
      extra_flag.train,
      extra_flag.fumble,
    );
    const chara_talk = get_chara_talk(this.id);
    era.println();
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.train !== attr_enum.intelligence) {
      await print_event_name(
        extra_flag.fumble ? '在保健室……' : '在训练室……',
        chara_talk,
      );

      await era.printAndWait([chara_talk.get_colored_name(), ' 训练失败了……']);
      era.println();
      era.print('该怎么办呢？');
      era.println();

      if (extra_flag.fumble) {
        era.printButton('「要好好休息！」', 1);
        era.printButton('「用毅力克服！」', 2);
      } else {
        era.printButton('「先在这休养一阵子吧。」', 1);
        era.printButton('「来检讨一下吧！」', 2);
      }
      if ((await era.input()) === 1) {
        hook.arg = 0;
      } else if (Math.random() < extra_flag['args'].ratio.fail_again) {
        hook.arg = -1;
      } else {
        hook.arg = 1;
      }
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainSuccessParams} extra_flag
   * @returns {Promise<TrainSuccessParams|void>}
   */
  async train_success(chara, me, callname, hook, extra_flag) {
    const cur_location = era.get('flag:当前位置');
    era.print([chara.get_colored_name(), ' 的训练顺利结束了！']);
    era.println();
    if (this.id === 0) {
      return;
    }
    if (
      !era.get(`status:${this.id}:摸鱼`) &&
      Math.random() < 0.2 * extra_flag.stamina_ratio
    ) {
      if (sys_check_remote(this.id)) {
        hook.arg = true;
      } else {
        /** @author 雞雞 */
        await era.waitAnyKey();
        await print_event_name('热血的追加训练！', chara);
        if (
          await select_yes_or_no(
            [chara.get_colored_name(), ' 似乎意犹未尽的样子，是想自主训练吗？'],
            '许可！',
            '会超出计划的……',
          )
        ) {
          await era.printAndWait([
            me.get_colored_name(),
            ' 默许了 ',
            chara.get_colored_name(),
            ` 的自主训练，并称赞了${chara.sex}的干劲`,
          ]);
          hook.arg = true;
        } else {
          await era.printAndWait([
            me.get_colored_name(),
            ' 出言禁止了 ',
            chara.get_colored_name(),
            ' 的自主训练，并叮嘱要好好休息',
          ]);
          hook.arg = false;
        }
      }
    } else if (
      extra_flag.attr !== attr_enum.intelligence &&
      !sys_check_remote(this.id)
    ) {
      if (
        era.get(`love:${this.id}`) >= 50 &&
        era.get(`base:${this.id}:性欲`) >= lust_border.itch &&
        Math.random() <
          (0.2 * era.get(`base:${this.id}:性欲`)) / lust_border.want_sex
      ) {
        /** @author 雞雞 */
        await era.waitAnyKey();
        await print_event_name('训练后的性欲高涨', chara);
        await era.printAndWait([
          '一天的训练结束后，',
          chara.get_colored_name(),
          ' 的样子好像有点奇怪……',
        ]);
        await era.printAndWait(
          '面色潮红，在双腿间流下的不明液体与汗液混在一起，散发出一股淫靡的味道。',
        );
        era.printButton('「这也是训练员的义务……」', 1);
        era.printButton('「总之先去医务室吧！」', 2);
        if ((await era.input()) === 1) {
          era.set('flag:当前位置', location_enum.restroom);
          await quick_into_sex(this.id);
          era.set('flag:当前位置', cur_location);
        } else {
          sys_change_lust(this.id, get_random_value(500, 1500));
        }
      } else if (Math.random() < 0.02) {
        /** @author 幽白書 */
        await era.waitAnyKey();
        await print_event_name('淋浴间内', chara);
        await era.printAndWait([
          '嗯？',
          chara.get_colored_name(),
          ' 还没来吗？',
        ]);
        await era.printAndWait('正好，趁现在先沖个澡吧！');
        era.println();
        await era.printAndWait([
          '打开门，映入眼帘的是身无寸缕的 ',
          chara.get_colored_name(),
          '……',
        ]);
        era.printButton('「哦，要一起洗澡吗？」', 1);
        era.printButton('「不好意思打扰了！」', 2);
        if ((await era.input()) === 1) {
          if (era.get(`love:${this.id}`) >= 50 && get_sex_acceptable(this.id)) {
            await era.printAndWait('对方兴致盎然的答应了。');
            await era.printAndWait([
              me.get_couple_title(),
              ' 互相给对方擦了背。',
            ]);
            await era.printAndWait([
              '结束洗浴后，',
              chara.sex,
              '带着不甚满足的眼光看向 ',
              me.get_colored_name(),
              '……',
            ]);
            era.set('flag:当前位置', location_enum.restroom);
            await quick_into_sex(this.id);
            era.set('flag:当前位置', cur_location);
            extra_flag.relation_change = 5;
          } else {
            await chara.say_and_wait('笨蛋，在想什么啊你！');
            await era.printAndWait([me.get_colored_name(), ' 被赶了出去……']);
            sys_change_motivation(this.id, -1) && (await era.waitAnyKey());
            extra_flag.relation_change = -5;
          }
        } else {
          await me.say_and_wait('不好意思打扰了！');
          await era.printAndWait([
            me.get_colored_name(),
            ' 大喊一声跑了出去。',
          ]);
          await era.printAndWait([
            '没过多久，冲好澡的 ',
            chara.get_colored_name(),
            ' 红着脸走了出来。',
          ]);
          sys_change_lust(this.id, get_random_value(500, 1500));
        }
      }
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  // eslint-disable-next-line no-unused-vars
  async week_end(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async week_start(chara, me, callname, hook, extra_flag, event_object) {
    switch (event_object?.arg) {
      case 47 + 29:
      case 95 + 29:
        if (CustomizedEdu.common_event_count === 0) {
          return;
        }
        CustomizedEdu.common_event_count--;
        await print_event_name('夏季合宿', chara);
        await era.printAndWait([
          '说到夏天就是泳装与海滩，当然，',
          chara.get_colored_name(),
          ' 与 ',
          me.get_colored_name(),
          ' 来到海边休假的同时也没有落下训练。',
        ]);
        break;
      case 143 + 9:
      case 'palace':
        await CustomizedEdu.common_palace(chara, me);
        await CustomizedEdu.common_palace_relation(chara, me);
    }
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async run(hook, extra_flag, event_object) {
    let handler = this[event_object?.arg];
    if (handler === undefined) {
      handler = this[event_hooks.keys[hook.hook]];
    }
    if (handler !== undefined) {
      return await handler.call(
        this,
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_callname(this.id, 0),
        hook,
        extra_flag,
        event_object,
      );
    }
  }
}

module.exports = CustomizedEdu;
