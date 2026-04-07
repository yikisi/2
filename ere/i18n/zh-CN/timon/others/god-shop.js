/**
 * @file 三女神祈祷 - 系统提示
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
} = require('#/era-electron');

const { money_color } = require('#/data/color-const');

module.exports = {
  /**
   * 三女神像，不同气性随行角色的反应
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   * @param {number} chara_chara 角色的气性，可能是被淫纹扭曲过的结果
   * @returns {TextContent}
   */
  get_chara_react(chara, you, chara_chara) {
    switch (chara_chara) {
      case 1:
      case 3:
        return [
          '一旁的 ',
          chara.get_colored_name(),
          ' 笑容中充满自信，对 ',
          you.get_colored_name(),
          ' 抛来信任的目光。',
        ];
      case -1:
      case 0:
      case 2:
        return [
          '一旁的 ',
          chara.get_colored_name(),
          ' 认真盯着三女神像，随后将目光移回 ',
          you.get_colored_name(),
          ' 身上，似乎在等待 ',
          you.get_colored_name(),
          ' 做些什么。',
        ];
      case -3:
      case -2:
        return [
          '一旁的 ',
          chara.get_colored_name(),
          ' 静静摇晃着尾巴，等待 ',
          you.get_colored_name(),
          ' 的下一步行动。',
        ];
    }
  },
  /**
   * 到达三女神像，祈祷前
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} god 三女神其中之一
   * @param {CharaTalk} you 玩家
   * @param {boolean} has_prayed 是否已经祈祷过
   * @param {TextContent} chara_react 随行角色的反应
   */
  start(chara, god, you, has_prayed, chara_react) {
    if (chara.id > 0) {
      if (has_prayed) {
        god.say_as_unknown('……');
        print('三女神像的上面传来了谜一样的气息……');
        print([
          '有谁在注视着 ',
          you.get_colored_name(),
          ' 与 ',
          chara.get_colored_name(),
          '……',
        ]);
      } else {
        print([
          you.get_colored_name(),
          ' 和 ',
          chara.get_colored_name(),
          ' 一同来到了三女神像前。',
        ]);
        print(chara_react);
      }
    } else if (has_prayed) {
      god.say_as_unknown('……');
      print('三女神像的上面传来了谜一样的气息……');
      print(['有谁在注视着 ', you.get_colored_name(), '……']);
    } else {
      print([you.get_colored_name(), ' 独自一人来到了三女神像面前。']);
      print('庄严肃穆的三女神像肩上，瓶中之水源源不断流淌出来。');
      god.say_as_unknown('……');
    }
  },
  bt_pray_honour_buff: '祈祷变得有名（1,000 声望）',
  bt_pray_money_buff: '祈祷变得有钱（500 声望）',
  bt_pray_money: '祈祷马上有钱（50+ 声望）',
  bt_pray_your_power: '祈祷变得更强（200 声望）',
  get_bt_pray_over_limit: (name) => `祈祷 ${name} 突破极限（50-500 声望）`,
  bt_pray_self_over_limit: '祈祷突破极限（50-500 声望）',
  get_bt_pray_heal: (name) => `祈祷 ${name} 恢复健康（800 声望）`,
  bt_pray_self_heal: '祈祷恢复健康（800 声望）',
  /**
   * 祈祷声望加成
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马郎 or 马娘
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_honour_buff(you, uma, finish_cb) {
    print('（这是我渴望的吗？）\n脑海中，不知为何闪过这样的念头……');
    printButton(
      `是的（声望获取+${get('global:声望加成')}%->${get('global:声望加成') + 1}%）`,
      1,
    );
    printButton('也许并不是……', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait('在脑海中想象着被众人簇拥称赞的场景……');
      await finish_cb();
      println();
      const honour = get('flag:当前声望');
      if (honour >= 2000) {
        await printAndWait([
          you.get_colored_name(),
          ' 打开手机，叹息自己的声望没能走出日本，走向世界。',
        ]);
      } else if (honour >= 1000) {
        await printAndWait([
          you.get_colored_name(),
          ' 打开手机，叹息自己的名声并没有给自己直接带来更多好的生源。',
        ]);
      } else if (honour >= 500) {
        await printAndWait([
          you.get_colored_name(),
          ' 打开手机，叹息着除去挚友和家人没有什么人对自己抱有真正关注的事实。',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 打开手机，叹息着自己除去挚友和家人外寥寥无几的联系人。',
        ]);
      }
      await printAndWait('这么想着时，手机突然收到陌生人发来的信息。');
      await printAndWait([
        '是对 ',
        you.get_colored_name(),
        ' 如何培养赛',
        uma,
        '感兴趣，想要看到 ',
        you.get_colored_name(),
        ' 所培养赛',
        uma,
        '成绩的人发来的。',
      ]);
      await printAndWait('之后，收到了比以前更多这样的消息……');
    }
    return ret;
  },
  /**
   * 祈祷金钱加成
   * @param {CharaTalk} you 玩家
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_money_buff(you, finish_cb) {
    print('（这是我渴望的吗？）\n脑海中，不知为何闪过这样的念头……');
    printButton(
      `是的（马币获取+${get('global:金钱加成')}%->${get('global:金钱加成') + 1}%）`,
      1,
    );
    printButton('也许并不是……', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        you.get_colored_name(),
        ' 在脑海中想象自己的储蓄罐日积月累逐渐沉重的样子……',
      ]);
      await finish_cb();
      println();
      await printAndWait(
        '不知为何，脑袋里冒出了自己工资和分成的数字，隐隐感觉好像数值比以前高了的样子。',
      );
      await printAndWait(
        '明明特雷森方面的工资一直以来都这么高，应该是错觉吧……',
      );
    }
    return ret;
  },
  /**
   * 祈祷金钱
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马郎 or 马娘
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_money(you, uma, finish_cb) {
    print('（那么，大概想要多少呢？）\n脑海中，突然闪过这样的问题……');
    const honour = get('flag:当前声望');
    printButton('250 马币就好了……（50 声望）', 1, { disabled: honour <= 50 });
    printButton('500 马币就好了……（100 声望）', 2, { disabled: honour <= 100 });
    printButton('750 马币就好了……（150 声望）', 3, { disabled: honour <= 150 });
    printButton('1,000 马币就好了……（200 声望）', 4, {
      disabled: honour <= 200,
    });
    printButton('还是算了', 99);
    const ret = await input();
    switch (ret) {
      case 1:
      case 2:
        await printAndWait([
          you.get_colored_name(),
          ' 在脑海中想象着自己拿着钱给',
          uma,
          '购买训练器材的场景……',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          '不久，',
          you.get_colored_name(),
          ' 收到学园方面的消息，不知为何被认为教导赛',
          uma,
          '的方式很可能导致受伤。',
        ]);
        await printAndWait([
          '随后，发来了 ',
          (250 * ret).toString(),
          ' 马币，要求 ',
          you.get_colored_name(),
          ' 用这些钱对自己的训练方式进行整改……',
        ]);
        break;
      case 3:
      case 4:
        await printAndWait([
          you.get_colored_name(),
          ' 在脑海中想象着自己徜徉于金钱海洋的场景……',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          '不久，',
          you.get_colored_name(),
          ' 收到学园方面的消息，说要对 ',
          you.get_colored_name(),
          ' 进行特别补贴，发来了 ',
          (250 * ret).toString(),
          ' 马币。',
        ]);
        await printAndWait([
          '但前提是，',
          you.get_colored_name(),
          ' 作为特雷森学院的训练员，不能再引发奇怪的传闻……',
        ]);
    }
    return ret;
  },
  /**
   * 祈祷金钱
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} god 三女神其中之一
   * @param {string} uma 马郎 or 马娘
   * @param {boolean[]} disabled_list 一项属性是否满了
   * @param {number} random_select 选择随机属性的情况，实际选中的属性
   * @param {function:Promise} pray_cb 祈祷自己变强之后的通用反应
   * @param {function:Promise} finish_cb 祈祷后的反应
   * @returns {Promise<[number,number]>} 返回两个值，第一个是玩家的选择，第二个是实际选择的属性
   */
  async pray_your_power(
    you,
    god,
    uma,
    disabled_list,
    random_select,
    pray_cb,
    finish_cb,
  ) {
    print('（哪方面，最需要提升呢？）');
    print('脑海中冒出了这样的疑问……');
    printButton('速度（+80）', 0, { disabled: disabled_list[0] });
    printButton('耐力（+80）', 1, { disabled: disabled_list[1] });
    printButton('力量（+80）', 2, { disabled: disabled_list[2] });
    printButton('根性（+80）', 3, { disabled: disabled_list[3] });
    printButton('智力（+80）', 4, { disabled: disabled_list[4] });
    printButton('都有待提升啊……（随机属性+100）', 5);
    printButton('已经没有要提升的了', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] <= 5) {
      switch (ret[0]) {
        // 速度
        case 0:
          await printAndWait([
            '想象着自己一边和慢跑的担当赛',
            uma,
            '并走，一边进行指导的场景……',
          ]);
          break;
        // 耐力
        case 1:
          await printAndWait(['想象着自己孜孜不倦教导赛', uma, '们的场景……']);
          break;
        // 力量
        case 2:
          await printAndWait([
            '想象着自己帮助担当赛',
            uma,
            '在拔河比赛中取得冠军的场景……',
          ]);
          break;
        // 根性
        case 3:
          await printAndWait([
            '想象着自己声嘶力竭为担当赛',
            uma,
            '加油呐喊的样子……',
          ]);
          break;
        // 智力
        case 4:
          await printAndWait([
            '想象着自己为担当赛',
            uma,
            '制定一份又一份完美训练计划的场景……',
          ]);
          break;
        // 随机属性
        case 5:
          await printAndWait(['脑海里冒出担当赛', uma, '安慰自己的场景……']);
          ret[1] = random_select;
      }
      await pray_cb();
      println();
      await finish_cb();
      switch (ret[1]) {
        // 速度
        case 0:
          await printAndWait([
            '温暖余韵仍留存于脑海，',
            you.get_colored_name(),
            ' 感到身体变得更加轻盈……',
          ]);
          break;
        // 耐力
        case 1:
          await printAndWait([
            '温暖余韵仍留存于脑海，',
            you.get_colored_name(),
            ' 感到呼吸变得更加平缓……',
          ]);
          break;
        // 力量
        case 2:
          await printAndWait([
            '温暖余韵仍留存于脑海，',
            you.get_colored_name(),
            ' 感到肌肉变得更加充实……',
          ]);
          break;
        // 根性
        case 3:
          await printAndWait([
            '温暖余韵仍留存于脑海，',
            you.get_colored_name(),
            ' 感到一股热浪在心底涌流……',
          ]);
          break;
        // 智力
        case 4:
          await printAndWait([
            '温暖余韵仍留存于脑海，',
            you.get_colored_name(),
            ' 感到头脑变得异常清晰……',
          ]);
      }
    } else {
      await god.say_as_unknown_and_wait('继续努力吧……');
      await printAndWait('似乎听到了这样的声音。');
      println();
      await finish_cb();
      await printAndWait('三女神像依然静静矗立着……');
    }
    return ret;
  },
  /**
   * 祈祷突破极限
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马郎 or 马娘
   * @param {string} limited 到达上限的属性数量
   * @param {string} cost 声望消耗
   */
  async pray_over_limit(chara, you, uma, limited, cost) {
    print([
      '（对于 ',
      limited,
      ' 项能力都强大到极致的 ',
      chara.get_colored_name(),
      '，真的要如此追求进一步的极限吗？）',
      { isBr: 1 },
      '脑海中冒出了这样的问题……',
    ]);
    printButton(`同意（${cost} 声望，训练加成-10%）`, 1);
    printButton('或许可以暂缓脚步', 2);
    const ret = await input();
    if (ret === 1) {
      if (chara.id > 0) {
        await printAndWait([
          '想象着身边赛',
          chara.uma_sex_title,
          '不断超越前人，在赛场上打破纪录的场景……',
        ]);
        await printAndWait([
          '祈祷完毕后，和身边的 ',
          chara.get_colored_name(),
          ' 不约而同睁开了眼睛。',
        ]);
        println();
        await printAndWait([
          '睁开眼睛的 ',
          you.get_colored_name(),
          '，明显察觉到身边 ',
          chara.get_colored_name(),
          ' 一举一动表现出的新发展潜力！',
        ]);
      } else {
        await printAndWait(
          '想象着自己挑灯夜战，拟出一份又一份崭新训练书的样子……',
        );
        await printAndWait([
          '在一片黑暗中，隐隐有光芒涌动，缓缓流入 ',
          you.get_colored_name(),
          ' 的身体！',
        ]);
        println();
        await printAndWait('祈祷完毕后，缓缓睁开眼睛……');
        await printAndWait([
          '温暖余韵仍留存于脑海，',
          you.get_colored_name(),
          ' 对自己能够进一步成长的事实有了确信。',
        ]);
      }
    } else if (chara.id > 0) {
      await printAndWait([
        '回忆着身边 ',
        chara.get_colored_name(),
        ' 每日踏实训练的场景……',
      ]);
      await printAndWait([
        '祈祷完毕后，',
        you.get_colored_name(),
        ' 和身边的 ',
        chara.get_colored_name(),
        ' 不约而同睁开了眼睛。',
      ]);
    } else {
      await printAndWait(['回忆着自己和赛', uma, '们度过的无数日夜……']);
      await printAndWait('祈祷完毕后，缓缓睁开眼睛。');
    }
    return ret;
  },
  /**
   * 祈祷恢复健康
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} god 三女神其中之一
   * @param {CharaTalk} you 玩家
   * @param {string} uma 马郎 or 马娘
   * @param {TextContent} chara_react 随行角色的反应
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_heal(chara, god, you, uma, chara_react, finish_cb) {
    print([
      '（果然，最希望的还是……）',
      { isBr: true },
      you.get_colored_name(),
      ' 担忧着 ',
      chara.get_colored_name(),
      ' 的健康……',
    ]);
    printButton('如果，祈祷会有用的话……', 1);
    printButton('比起祈祷，果然还是更需要其他努力吧', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        '想象着 ',
        chara.get_colored_name(),
        ' 重新变得健康而充满活力的样子……',
      ]);
      await printAndWait([
        '祈祷完毕后，',
        you.get_colored_name(),
        ' 睁开了眼睛。',
      ]);
      println();
      if (chara.id > 0) {
        await printAndWait([
          '感受着充满活力的身体，',
          you.get_colored_name(),
          ' 不禁有点疑惑自己来三女神像前是要做什么？',
        ]);
      } else {
        await printAndWait(chara_react);
        println();
        await printAndWait([
          '方才带着饱含活力的 ',
          chara.get_colored_name(),
          ' 来到三女神像面前的 ',
          you.get_colored_name(),
          '，到底是要干什么呢？',
        ]);
        await printAndWait([you.get_colored_name(), ' 思考着下一步的行动。']);
      }
    } else {
      await printAndWait([
        '想象着 ',
        chara.get_colored_name(),
        ' 经过休息后状况愈加恢复的样子……',
      ]);
      println();
      await god.say_as_unknown_and_wait('你能……做到的……');
      await printAndWait('似乎听见这样的声音。');
      println();
      await finish_cb();
      println();
      await printAndWait('三女神像依然静静矗立着……');
    }
    return ret;
  },
  /**
   * 祈祷恢复健康，但是本来就很健康
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   * @param {function:Promise} finish_cb 祈祷后的反应
   */
  async pray_heal_no_need(chara, you, finish_cb) {
    await printAndWait([
      '祈祷着女神大人能够继续保佑 ',
      chara.get_colored_name(),
      ' 的健康……',
    ]);
    println();
    await finish_cb();
    println();
    await printAndWait('三女神像依然静静矗立着……');
  },
  /**
   * 通用祈祷前的行为
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   */
  common_start_pray(chara, you) {
    if (chara.id > 0) {
      print([
        '在 ',
        you.get_colored_name(),
        ' 的指示下，',
        chara.get_colored_name(),
        ' 一同闭上眼，在三女神像前默默祈祷着……',
      ]);
    } else {
      print([you.get_colored_name(), ' 独自一人在三女神像前默默祈祷着……']);
    }
  },
  /**
   * 通用祈祷后的反应
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   */
  async common_finish_pray(chara, you) {
    if (chara.id > 0) {
      await printAndWait([
        '祈祷完毕后，',
        you.get_colored_name(),
        ' 和身边的 ',
        chara.get_colored_name(),
        ' 不约而同睁开了眼睛。',
      ]);
    } else {
      await printAndWait([
        '祈祷完毕后，',
        you.get_colored_name(),
        ' 缓缓睁开眼睛。',
      ]);
    }
  },
  /**
   * 祈祷自己变强之后的通用反应
   * @param {CharaTalk} you 玩家
   */
  async common_pray_your_power(you) {
    await printAndWait([
      '在一片黑暗中，隐隐有光芒涌动，缓缓流入 ',
      you.get_colored_name(),
      ' 的身体！',
    ]);
  },
  /** 祈祷某项选择放弃之后会祈祷和平 */
  async common_pray_peace() {
    await printAndWait('祈祷着特雷森学院的平安……');
  },
  /**
   * 离开三女神像
   * @param {CharaTalk} chara 随行角色，如果 id 是 0 表示无角色随行
   * @param {CharaTalk} you 玩家
   * @param {boolean} has_prayed 是否已经祈祷过
   */
  async leave(chara, you, has_prayed) {
    if (chara.id > 0) {
      if (has_prayed) {
        await printAndWait([
          chara.get_colored_name(),
          ' 和 ',
          you.get_colored_name(),
          ' 一同离开三女神像。',
        ]);
      } else {
        await printAndWait([
          '对着三女神像简单做了礼拜后，',
          chara.get_colored_name(),
          ' 和 ',
          you.get_colored_name(),
          ' 一同离开三女神像。',
        ]);
      }
    } else if (has_prayed) {
      await printAndWait([you.get_colored_name(), ' 回头走向训练室的方向。']);
    } else {
      await printAndWait([
        '对着三女神像简单做了礼拜后，',
        you.get_colored_name(),
        ' 回头走向训练室的方向。',
      ]);
    }
  },
  /**
   * 到三女神像前，但是三女神已经受肉
   * @param {CharaTalk} you 玩家
   * @param {CharaTalk} god 某一个已受肉的女神
   */
  async start_with_no_god(you, god) {
    await printAndWait('三女神像静静矗立着……');
    if (typeof god === 'object') {
      await printAndWait([you.get_colored_name(), ' 突然听到背后有人打招呼……']);
      await printAndWait([
        '回过头才发现 ',
        god.get_colored_name(),
        ' 不知何时已站到了 ',
        you.get_colored_name(),
        ' 身后……',
      ]);
    }
  },
  /**
   * 以下是三女神受肉之后，向肉体三女神祈祷的文本
   * <br>三女神受肉之后就不用去女神像了
   */
  bt_pray: '向女神祈祷',
  pray_select: '要祈祷什么？',
  /**
   * 向肉体三女神祈祷声望加成
   * @returns {Promise<number>}
   */
  async handle_pray_honour_buff() {
    print('确定吗？');
    printButton(
      `确定（声望获取+${get('global:声望加成')}%->${get('global:声望加成') + 1}%）`,
      1,
    );
    printButton('还是算了', 2);
    return await input();
  },
  /**
   * 向肉体三女神祈祷金钱加成
   * @returns {Promise<number>}
   */
  async handle_pray_money_buff() {
    print('确定吗？');
    printButton(
      `确定（马币获取+${get('global:金钱加成')}%->${get('global:金钱加成') + 1}%）`,
      1,
    );
    printButton('还是算了', 2);
    return await input();
  },
  /**
   * 向肉体三女神祈祷变强
   * @param {boolean[]} disabled_list 一项属性是否满了
   * @param {number} random_select 选择随机属性的情况，实际选中的属性
   * @returns {Promise<[number,number]>}
   */
  async handle_pray_your_power(disabled_list, random_select) {
    print('想获得什么属性呢？');
    printButton('速度（+80）', 0, { disabled: disabled_list[0] });
    printButton('耐力（+80）', 1, { disabled: disabled_list[1] });
    printButton('力量（+80）', 2, { disabled: disabled_list[2] });
    printButton('根性（+80）', 3, { disabled: disabled_list[3] });
    printButton('智力（+80）', 4, { disabled: disabled_list[4] });
    printButton('随便什么都可以！（随机属性+100）', 5);
    printButton('还是算了', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] === 5) {
      ret[1] = random_select;
    }
    return ret;
  },
  select_target: '请选择目标',
  no_targets: '没有满足条件的目标',
  get_target_entry_over_limit: (name, cost) =>
    `${name}（-${cost} 声望，训练加成-10%）`,
  get_target_entry_heal: (name, cost) => `${name}（${cost} 声望）`,
  /**
   * 祈祷突破极限
   * @param {CharaTalk} chara
   */
  handle_pray_over_limit(chara) {
    print([chara.get_colored_name(), ' 似乎突破了极限']);
  },
  /**
   * 祈祷结束
   * @param {CharaTalk} god 三女神之一
   * @param {CharaTalk} you 玩家
   * @param {boolean} has_prayed 是否进行过祈祷
   */
  handle_pray_end(god, you, has_prayed) {
    if (has_prayed) {
      print([
        god.get_colored_name(),
        ' 满足了 ',
        you.get_colored_name(),
        ' 的愿望',
      ]);
    } else {
      print([
        you.get_colored_name(),
        ' 放弃了向 ',
        god.get_colored_name(),
        ' 祈祷……',
      ]);
    }
  },
  /**
   * 三女神受肉后，借钱会变成祈祷发财
   * @param {CharaTalk} god 三女神之一
   * @param {CharaTalk} you 玩家
   */
  async borrow_money(god, you) {
    const honour = get('flag:当前声望');
    if (honour < 50) {
      return await printAndWait('声望不足');
    }
    print('想要多少马币？');
    printButton('400 马币（50 声望）', 1);
    printButton('800 马币（100 声望）', 2, { disabled: honour < 100 });
    printButton('1200 马币（150 声望）', 2, { disabled: honour < 150 });
    printButton('1600 马币（200 声望）', 2, { disabled: honour < 200 });
    printButton('还是算了', 99);
    const ret = await input();
    if (ret === 99) {
      await printAndWait([
        you.get_colored_name(),
        ' 放弃了向 ',
        god.get_colored_name(),
        ' 祈祷马币……',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' 收到了特雷森补发 ',
        { color: money_color, content: (400 * ret).toLocaleString() },
        ' 马币额外补贴的通知……但是似乎被那条消息鄙视了……',
      ]);
    }
    return ret;
  },
};
