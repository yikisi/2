/**
 * @file 育成地文
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry, join_list } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} races
   * @param {PrintedSpan} wins
   * @param {PrintedSpan} reward
   * @param {PrintedSpan[]} race_names
   */
  get_result_list(chara, races, wins, reward, race_names) {
    const ret = [];
    ret.push([
      chara.get_colored_name(),
      '，生涯 ',
      races,
      ' 战 ',
      wins,
      ' 胜，总赏金达到 ',
      reward,
      ' 马币',
    ]);
    if (race_names.length > 0) {
      ret.push([
        '主胜鞍：',
        ...join_list(race_names.slice(0, 5), ' '),
        race_names.length > 5 ? '……' : '',
      ]);
    }
    return ret;
  },
  on_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait(
        `每年一月，URA赛${chara.uma_sex_title}殿堂就会开始针对退役马娘进行票选。`,
      );
      era.println();
      await era.printAndWait(
        `而到了三月，生涯功成名就，且在严格票选中脱颖而出的赛${chara.uma_sex_title}将会登上殿堂，并获得《显彰赛${chara.uma_sex_title}》此一至高无上的荣誉。`,
      );
      era.println();
      await era.printAndWait([
        '而 ',
        you.get_colored_name(),
        ' 的爱马 ',
        chara.get_colored_name(),
        '——',
      ]);
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        `随着以${chara.sex}为蓝本的铜像揭幕，`,
        ...title,
        chara.get_colored_name(),
        ' 的传奇故事将会永远留在殿堂之中……',
      ]);
    };
    f.title = '登上殿堂宝座';
    return f;
  })(),
  under_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait('很遗憾未能入选殿堂。');
      era.println();
      await era.printAndWait(
        '但你们也仍然为竭尽全力达到的成果感到骄傲，并且相信后来者能站在自己的肩上爬向更高的顶点。',
      );
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        ...title,
        chara.get_colored_name(),
        ' 的传奇故事将会永远被世人所传颂……',
      ]);
    };
    f.title = '殿堂宝座之下';
    return f;
  })(),
  pl_future: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} can_sex
     */
    const f = async (chara, you, can_sex) => {
      await era.printAndWait([
        '时光如白驹过隙，与 ',
        chara.get_colored_name(),
        ' 相伴已逾数载，再过一段日子，你们马上就要展开新的篇章',
      ]);
      era.println();
      if (era.get(`love:${chara.id}`) >= 75) {
        await era.printAndWait('你们在熟悉的训练员室里恩爱地亲热起来。');
        await era.printAndWait(
          '两位小情人沉浸在幸福的二人世界，仿佛能把俗世的琐事都抛进虚空之中。',
        );
        era.println();
        await era.printAndWait('我是世界之王！——杰克 · 道森', {
          align: 'center',
        });
      } else if (can_sex) {
        await era.printAndWait('你们在熟悉的训练员室里热烈地拥吻。');
        await era.printAndWait(
          '情欲的气息充斥整个房间，只有娇声与肉体碰撞的声音不住回荡。',
        );
        era.println();
        await era.printAndWait('食色，性也。——孟子', { align: 'center' });
      } else {
        await era.printAndWait(
          '你们在熟悉的训练员室里相谈甚欢，又不禁为无可避免的别离伤感。',
        );
        await era.printAndWait(
          '人生难得相逢，正是因为可能失去才会让珍惜眼前人如此重要。',
        );
        era.println();
        await era.printAndWait('一期一会之心，唯见茶之相中。——千利休', {
          align: 'center',
        });
      }
    };
    f.title = '之后，面向未来';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} attr
   */
  async train(chara, you, attr) {
    const chara_name = chara.get_colored_name();
    if (!chara.id) {
      chara_name.content = '自己';
    }
    switch (attr) {
      case attr_enum.speed:
        await era.printAndWait([
          '为了提高速度，',
          you.get_colored_name(),
          ' 安排 ',
          chara_name,
          ' 进行跑步训练……',
        ]);
        break;
      case attr_enum.endurance:
        await era.printAndWait([
          '为了提高耐力，',
          you.get_colored_name(),
          ' 安排 ',
          chara_name,
          ' 进行游泳训练……',
        ]);
        break;
      case attr_enum.strength:
        await era.printAndWait([
          '为了提高力量，',
          you.get_colored_name(),
          ' 安排 ',
          chara_name,
          ' 进行重量训练……',
        ]);
        break;
      case attr_enum.toughness:
        await era.printAndWait([
          '为了锻炼根性，',
          you.get_colored_name(),
          ' 安排 ',
          chara_name,
          ' 进行上坡训练……',
        ]);
        break;
      case attr_enum.intelligence:
        await era.printAndWait([
          '为了提高比赛触觉，',
          you.get_colored_name(),
          ' 安排 ',
          chara_name,
          ' 研究比赛录像……',
        ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  ts_info(chara) {
    era.print([chara.get_colored_name(), ' 的训练顺利结束了！']);
  },
  ts_add: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        ' 似乎意犹未尽的样子，是想自主训练吗？',
      ]);
      era.printButton('许可！', 1);
      era.printButton('会超出计划的……', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 默许了 ',
          chara.get_colored_name(),
          ` 的自主训练，并称赞了${chara.sex}的干劲`,
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 出言禁止了 ',
          chara.get_colored_name(),
          ' 的自主训练，并叮嘱要好好休息',
        ]);
      }
      return ret;
    };
    f.title = '热血的追加训练！';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {number} attr
   * @param {boolean} is_fumble
   */
  async tf_info(chara, attr, is_fumble) {
    if (attr === attr_enum.intelligence) {
      await era.printAndWait([
        '不好！',
        chara.get_colored_name(),
        ` 看${is_fumble ? '昏过去' : '睡'}了！`,
      ]);
    } else {
      const buffer = [];
      switch (attr) {
        case attr_enum.speed:
          buffer.push('滑倒了', '滚到地上了', '没力气了');
          break;
        case attr_enum.endurance:
          buffer.push('抽筋了');
          break;
        case attr_enum.strength:
          buffer.push('被泥巴糊眼睛上了', '摔倒了', '被沙袋反击了');
          break;
        case attr_enum.toughness:
          buffer.push('没力气了', '闪着腰了', '滚下去了');
      }
      await era.printAndWait([
        '不好！',
        chara.get_colored_name(),
        ' ',
        get_random_entry(buffer),
        '！',
      ]);
    }
  },
  train_fail: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([chara.get_colored_name(), ' 训练失败了……']);
      era.println();
      era.print('该怎么办呢？');
      era.println();
      era.printButton('「先在这休养一阵子吧。」', 1);
      era.printButton('「来检讨一下吧！」', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = '在训练室……';
    return f;
  })(),
  train_fumble: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([chara.get_colored_name(), ' 训练失败了……']);
      era.println();
      era.print('该怎么办呢？');
      era.println();
      era.printButton('「要好好休息！」', 1);
      era.printButton('「用毅力克服！」', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = '在保健室……';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {number} debuff
   */
  tf_change_debuff(chara, debuff) {
    if (debuff > 0) {
      era.print(['【', chara.get_colored_name(), ' 感觉在练习上越来越轻松】']);
    } else {
      era.print(['【', chara.get_colored_name(), ' 感觉在练习上越来越吃力】']);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_success
   */
  async foreign_study(chara, you, is_success) {
    if (!chara.id) {
      await era.printAndWait([
        '为了能进行基本的外语交流，',
        you.get_colored_name(),
        ' 在酒店房间学习……',
      ]);
    } else {
      await era.printAndWait([
        '为了能进行基本的外语交流，',
        you.get_colored_name(),
        ' 安排 ',
        chara.get_colored_name(),
        ' 在酒店房间学习……',
      ]);
    }
    if (is_success) {
      await era.printAndWait('临急抱佛脚，起效了！');
    } else {
      await era.printAndWait(['不好！', chara.get_colored_name(), ' 看睡了！']);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   */
  fs_learn_language(chara, language) {
    era.print([chara.get_colored_name(), ' 学会了 ', language, '！']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   * @param {PrintedSpan} new_level
   */
  fs_update_language(chara, language, new_level) {
    era.print([
      chara.get_colored_name(),
      ' 的 ',
      language,
      ' 更加熟练了，现在是 ',
      new_level,
      '！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_rest(chara, you) {
    await era.printAndWait([
      '为了恢复状态，',
      you.get_colored_name(),
      ' 订购了当地理疗服务，在酒店调理修养……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 的身体素质似乎逐渐恢复了！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_train(chara, you) {
    await era.printAndWait([
      '为了习惯当地赛场，',
      you.get_colored_name(),
      ' 安排在训练场进行适应训练……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 似乎渐渐习惯当地赛道的质感了！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {string} loc_name
   */
  async foreign_travel(chara, you, loc_name) {
    await era.printAndWait([
      '为了放松心情，',
      you.get_colored_name(),
      ...(chara.id > 0 ? [' 和 ', chara.get_colored_name()] : [' 独自']),
      ' 在',
      loc_name,
      '观光……',
    ]);
    await era.printAndWait('虽然花了不少钱，但还是值得的！');
  },
  race_start: (() => {
    /**
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {number} item
     * @param {boolean} do_sex
     */
    const f = async (chara, you, item, do_sex) => {
      if (!item) {
        /** @author 雞雞 */
        const buffer = [
          async () => await you.say_and_wait('尽全力就好！'),
          async () => await you.say_and_wait('跑出自己的气势来！'),
        ];
        await get_random_entry(buffer)();
      } else {
        /** @author 黑奴队长 */
        await era.printAndWait([
          you.get_colored_name(),
          ' 亲手给 ',
          chara.get_colored_name(),
          ' 装上了一些「特殊装备」。',
        ]);
        switch (item) {
          case 4:
            await era.printAndWait([
              chara.get_colored_name(),
              ' 娇俏地白了 ',
              you.get_colored_name(),
              ' 一眼，将你们的小秘密隐藏在衣服之下，转身向起跑线走去……',
            ]);
            break;
          case 3:
            await era.printAndWait([
              chara.get_colored_name(),
              ' 顺服地穿好衣服，小腹处透衣的粉光与媚眼交相辉映……',
            ]);
            break;
          case 2:
            await era.printAndWait([
              chara.get_colored_name(),
              ' 慢慢穿好衣服，以更好地将玩具固定在自己的身上……',
            ]);
            break;
          case 1:
            await era.printAndWait([
              chara.get_colored_name(),
              ' 偷偷抬眼看了一下 ',
              you.get_colored_name(),
              ' 的表情，随后低下头去，默默忍受着刺激……',
            ]);
        }
      }
    };
    f.title = '竞赛之前';
    return f;
  })(),
  race_end_item_win: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 迎接面色潮红的 ',
        chara.get_colored_name(),
        ' 走进休息室。',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' 一进休息室就发出一声解放似的呻吟，',
        you.get_colored_name(),
        ' 连忙关上门并关掉所有性玩具。',
      ]);
      await era.printAndWait([
        '之后，',
        you.get_colored_name(),
        ' 向在怀中摩擦着身体的 ',
        chara.get_colored_name(),
        ' 承诺一定会好好抚慰',
        chara.sex,
        '，这才避免了白日宣淫。',
      ]);
    };
    f.title = '情绪高涨的胜利';
    return f;
  })(),
  race_end_item_lose: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 迎接垂头丧气的 ',
        chara.get_colored_name(),
        ' 走进休息室，',
      ]);
      await era.printAndWait([chara.get_colored_name(), ' 沮丧地委顿在地。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 识趣地关上了性玩具，轻声安慰。',
      ]);
    };
    f.title = '意料之中的败北';
    return f;
  })(),
  race_end_win: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5 ? '太棒了！' : '往更高的目标迈进吧！',
      );
    };
    f.title = '竞赛获胜';
    return f;
  })(),
  race_end_5: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5 ? '今天的表现也很好！' : '绝对不能输给她们！',
      );
    };
    f.title = '竞赛上榜';
    return f;
  })(),
  race_end_10: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5 ? '下次表现一定更好！' : '沮丧也不是办法！',
      );
    };
    f.title = '竞赛败北';
    return f;
  })(),
  race_end_lose: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5 ? '总有一天绝对会赢！' : '你愿意就这样丢脸下去？',
      );
    };
    f.title = '下次不会输了！';
    return f;
  })(),
  summer_start: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '说到夏天就是泳装与海滩，当然，',
        chara.get_colored_name(),
        ' 与 ',
        you.get_colored_name(),
        ' 来到海边休假的同时也没有落下训练。',
      ]);
    };
    f.title = '夏季合宿';
    return f;
  })(),
};
