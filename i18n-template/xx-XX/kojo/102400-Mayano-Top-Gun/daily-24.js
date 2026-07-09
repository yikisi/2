/**
 * @file 摩耶重炮 - 日常
 * @author 黑奴二号
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

module.exports = {
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
   */
  good_morning(maya, callname, call_3) {
    const buffer = [];
    if (era.get('base:24:体力') === era.get('maxbase:24:体力')) {
      if (era.get('relation:24:0') > 75) {
        buffer.push(
          () => maya.say('叮当叮当──♪人家来叫你起床啰～🌟'),
          () =>
            maya.say([
              '早安！耶嘿嘿～因为一早就想让 ',
              callname,
              ' 看到，所以就飞奔过来了！',
            ]),
        );
      } else {
        buffer.push(
          () => maya.say('早安──！今天人家也要充满活力地起飞！'),
          () =>
            maya.say([
              callname,
              '，早安！你该不会是～正在找人家吧？耶嘿嘿，在这里啦～♪',
            ]),
        );
      }
    } else if (era.get('status:24:熬夜')) {
      if (era.get('relation:24:0') > 75) {
        buffer.push(() =>
          maya.say('呼啊……今天为了做便当所以很早起……耶嘿嘿，好好期待中午吧♪」'),
        );
      } else {
        buffer.push(() =>
          maya.say([
            '呼啊……昨天跟 ',
            call_3,
            ' 一起熬夜了～虽然很想睡觉，但觉得自己有点像大人的感觉……',
          ]),
        );
      }
    } else if (era.get('relation:24:0') > 75) {
      buffer.push(
        () =>
          maya.say(
            '嗳嗳！要来做训练吗？人家随时都能跟你走喔🌟走向幸福长久的未来！',
          ),
        () => maya.say(['锁定目标🌟用 ', callname, ' 的笑容补充今天的动力～♪']),
      );
    } else {
      buffer.push(
        () =>
          maya.say([
            callname,
            '～！我们今天要做什么训练啊？我随时都能紧急起飞哦！',
          ]),
        () =>
          maya.say([
            '走吧，',
            callname,
            '！今天也要起飞去寻找令人期待、闪闪发亮的事情哦！',
          ]),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async talk(maya, callname) {
    const buffer = [];
    switch (era.get('cflag:24:干劲')) {
      case -2:
        buffer.push(
          () =>
            maya.say_and_wait(
              '奇怪……？怎么身体好像不听使唤……？人家这是怎么了啊……？',
            ),
          () => maya.say_and_wait('嗯嗯～？精神好像有种急遽下降的感觉……？'),
        );
        break;
      case -1:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait(
                '人家会努力的，所以等一下要给我奖励唷？不然好像提不太起劲……',
              ),
            () =>
              maya.say_and_wait(
                '不用担心！人家常常突然就状态转好的！所以状态稍微不好也没问题的！',
              ),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait('唔唔……好像状态不太好的感觉。人家快要坠机了～'),
            () =>
              maya.say_and_wait(
                '我现在不想要努力了啦！不管谁来说什么！不想做的事情就是不想做──！',
              ),
          );
        }
        break;
      case 0:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                '跟 ',
                callname,
                ' 一起训练就会很开心！所以就会有想要努力的感觉哦！',
              ]),
            () =>
              maya.say_and_wait([
                '不可以让人家感觉到腻哦？虽然我觉得跟 ',
                callname,
                ' 在一起是不会腻的。',
              ]),
          );
        } else {
          buffer.push(
            () => maya.say_and_wait('准备OK！！Maya随时都可以起飞哦'),
            () =>
              maya.say_and_wait(
                '视线良好！静待指令！准备好下达指示了吗？我随时都可以起飞了哦！',
              ),
          );
        }
        break;
      case 1:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                callname,
                '！你不觉得人家现在看起来很闪闪发亮吗？耶嘿嘿♪',
              ]),
            () => maya.say_and_wait('人家会努力的～！做得好要记得称赞我哦🌟'),
          );
        } else {
          buffer.push(
            () => maya.say_and_wait('能不能找到什么令人兴奋的事情来做呢～♪'),
            () =>
              maya.say_and_wait(
                '嗯嗯嗯！身体很轻很灵活！人家感觉可以跑很远喔～！',
              ),
          );
        }
        break;
      case 2:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                '只要是和 ',
                callname,
                ' 一起，做什么好像都会很有趣呢！我还是第一次有这种感觉！',
              ]),
            () =>
              maya.say_and_wait([
                '人家一定会成为闪闪发亮的成熟赛',
                maya.uma_sex_title,
                '！所以请你要在最近的地方看着人家喔！',
              ]),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait(
                '什么样的训练都尽管来吧！我会咻～地一下就做完的！',
              ),
            () =>
              maya.say_and_wait(
                '人家的状态不断上升中喔！感觉能有非常闪闪发亮的表现！',
              ),
          );
        }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maya 摩耶重炮 */
  async s_a_tree_hollow(maya) {
    await maya.say_and_wait([
      '人家可是成熟的',
      maya.get_colored_name(),
      '，才，才不会哭的？',
    ]);
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async s_a_dating(maya, callname) {
    await maya.say_and_wait([
      '去约会吧！人家要和 ',
      callname,
      ' 成为学园里最般配的情侣！',
    ]);
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async s_r_lunch(maya, callname) {
    await maya.say_and_wait(['Maya给 ', callname, ' 做了便当哦，来一起吃吧！']);
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   * @param {boolean|undefined} fish_success 钓鱼是否成功，当且仅当是钓鱼的时候才有值
   */
  async out_river(maya, you, callname, fish_success) {
    if (fish_success !== void 0) {
      await era.printAndWait([
        '和 ',
        maya.get_colored_name(),
        ' 一起去了河边钓鱼。',
      ]);
      await maya.say_and_wait([
        '和 ',
        callname,
        ' 一起钓鱼约会……感觉像是成熟的大人才会做的事呢～咻～',
      ]);
      if (fish_success) {
        await maya.say_and_wait('Maya明白了！只要这样做……啊！上钩了！');
        await era.printAndWait([
          maya.get_colored_name(),
          ' 似乎很快掌握了诀窍。',
        ]);
      } else {
        await maya.say_and_wait('啊啊……好无聊啊……为什么这么久还没有鱼上钩呢？');
        await era.printAndWait([
          '由于缺乏耐心，',
          maya.get_colored_name(),
          ' 并没有什么收获。',
        ]);
      }
      return;
    }
    const buffer = [
      async () => {
        await maya.say_and_wait([
          callname,
          '，你要点什么～？人家要点温度选更热，再加上蜂蜜鲜奶油的客制特调……',
        ]);
        era.printButton('你在说什么？', 1);
        await era.input();
        await maya.say_and_wait(
          '饮料啦！真是的，要走在这条路上的话，手上就一定要拿一杯咖啡才行！',
        );
        await maya.say_and_wait([
          '走过这条路之后，我再把我的咖啡给 ',
          callname,
          '♪',
        ]);
        await maya.say_and_wait([callname, '！摆个好看的姿势！']);
        await maya.say_and_wait('三、二、一！');
        await maya.say_and_wait('……');
      },
      async () => {
        await maya.say_and_wait(
          '河堤感觉像飞机的跑道一样……在上面奔跑的话，好像要起飞一样～',
        );
        await maya.say_and_wait([callname, '，来追我吧🌟']);
        era.printButton('小心不要摔下来哦', 1);
        await era.input();
        await maya.say_and_wait([
          '没关系啦，我相信 ',
          callname,
          ' 会接住我的！',
        ]);
        await era.printAndWait([
          '之后，',
          you.get_colored_name(),
          ' 继续和 ',
          maya.get_colored_name(),
          ' 约会……',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async out_shopping(maya, you, callname) {
    const ret = [];
    era.print('一起前往商店街的哪里呢？');
    era.printButton('去唱卡拉OK吧', 1);
    era.printButton('去街机厅吧', 2);
    era.printButton('去购物吧', 3);
    ret.push(await era.input());
    switch (ret[0]) {
      case 1:
        await era.printAndWait([
          '与 ',
          maya.get_colored_name(),
          ' 一同去了卡拉OK……',
        ]);
        await maya.say_and_wait(['今天一定要用我的歌声迷住 ', callname, '！']);
        await maya.say_and_wait('怎么样，有感受到Maya的魅力吗？');
        era.printButton('「很可爱！」', 1);
        era.printButton('「很性感！」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait([
            '唔……！难道 ',
            callname,
            ' 认为这样的歌曲对人家来说还太早了！？',
          ]);
          era.printButton('「并没有那个意思哦。」', 1);
          await era.input();
          await maya.say_and_wait('嗯嗯……也就是说，人家的魅力不只是性感而已！');
          await era.printAndWait([
            '虽然好像有点误会，不过 ',
            maya.get_colored_name(),
            ' 的心情变得很好。',
          ]);
        } else {
          await maya.say_and_wait([
            '好耶～♪我就知道 ',
            callname,
            ' 会这么说！',
          ]);
          await maya.say_and_wait([callname, ' 真的是超级爱人家耶～♪']);
        }
        await era.printAndWait([
          '与 ',
          maya.get_colored_name(),
          ' 一起度过了一段愉快的时光。',
        ]);
        break;
      case 2:
        await era.printAndWait([
          '与 ',
          maya.get_colored_name(),
          ' 一同去了街机厅……',
        ]);
        await maya.say_and_wait(['哇～～～！', callname, '，快看快看！']);
        await maya.say_and_wait('你看，那个玩偶──');
        await era.printAndWait([
          you.get_colored_name(),
          ' 往 ',
          maya.get_colored_name(),
          ' 指示的方向看去，那里摆了一台里面装着赛',
          maya.uma_sex_title,
          '主题玩偶的夹娃娃机。',
        ]);
        await maya.say_and_wait('那个是嘚嘚玩偶吧！超可爱的～我好想要～！');
        await maya.say_and_wait('不过，我零用钱快花光了……');
        await era.printAndWait([
          '原本双眼还闪闪发亮的 ',
          maya.get_colored_name(),
          ' 顿时失落了起来。',
        ]);
        era.printButton('「我来夹给你吧？」', 1);
        await era.input();
        await maya.say_and_wait('真的吗！？那人家会在旁边加油的！！');
        await maya.say_and_wait(['上啊上啊，加油加油！', callname, '♪']);
        ret.push(get_random_value(0, 2));
        switch (ret[1]) {
          case 0:
            await maya.say_and_wait('呜，好可惜～就差那么一点了……！');
            era.printButton('「抱歉啊……」', 1);
            await era.input();
            await maya.say_and_wait(['哇，别放在心上，', callname, '！！']);
            await maya.say_and_wait('你为了人家那么努力，我很开心了！');
            await era.printAndWait([
              '虽然什么都没夹到，不过 ',
              maya.get_colored_name(),
              ' 还是很开心。',
            ]);
            break;
          case 1:
            await maya.say_and_wait(['太棒了！', callname, '，谢谢你！']);
            await maya.say_and_wait([
              '看到 ',
              callname,
              ' 在夹娃娃时那认真的样子，让我忍不住心动了一下……♪',
            ]);
            await maya.say_and_wait([
              '嘿嘿，要装饰在哪里呢～？这可是我和 ',
              callname,
              ' 的回忆，好犹豫哦！',
            ]);
            await era.printAndWait([maya.get_colored_name(), ' 似乎很开心。']);
            break;
          case 2:
            await maya.say_and_wait('哇～好可爱～！而且这么多只！好厉害！！');
            await maya.say_and_wait([
              '嘿嘿，都要感谢 ',
              callname,
              ' 为了帮我而这么地努力。',
            ]);
            await maya.say_and_wait('人家啊，现在超……开心的！！');
            await maya.say_and_wait([
              '我会把这些玩偶当成 ',
              callname,
              '，每天抱紧紧的！',
            ]);
            await era.printAndWait([
              maya.get_colored_name(),
              ' 似乎非常开心。',
            ]);
        }
        break;
      case 3:
        await era.printAndWait([
          '与 ',
          maya.get_colored_name(),
          ' 一同去逛商店……',
        ]);
        if (Math.random() < 0.5) {
          await maya.say_and_wait(
            '咦～好可爱～♪这个不会太成熟吗？可是有点反差会不会更可爱啊？',
          );
          await maya.say_and_wait([
            '这种时候……',
            callname,
            '！陪Maya一起伤脑筋吧～！',
          ]);
          await maya.say_and_wait('现在正在打折♪我要买很多可爱的衣服～♪');
          await maya.say_and_wait(
            '然后然后，就开始犹豫了啦～！因为这个月的零用钱有点吃紧！',
          );
          await maya.say_and_wait(
            '这件在重点设计上有搭配最新配件，可说是技巧性穿搭！',
          );
          await maya.say_and_wait(
            '而这件是可爱却又具有机动性，服饰店的姐姐说这件的实用性超猛！',
          );
          await maya.say_and_wait([
            '呐，',
            callname,
            '！你觉得哪件比较适合Maya～？',
          ]);
          era.printButton('「有最新技巧的穿搭！」', 1);
          era.printButton('「具机动性的实用穿搭！」', 2);
          if ((await era.input()) === 1) {
            await maya.say_and_wait(
              '就是啊～！Maya也是这么想的！还是得走在流行的最前端才行呢♪',
            );
            await maya.say_and_wait('店员～不好意思～！');
            await maya.say_and_wait([
              '感觉人家距离成为成熟的',
              maya.phy_sex_title,
              '又更近了一步……！',
            ]);
          } else {
            await maya.say_and_wait(
              '我懂～！机动性高就比较不容易累，出去玩的时候就能更尽兴了呢♪',
            );
            await maya.say_and_wait('就决定是这件了！好──去买吧♪');
            await maya.say_and_wait([
              '好啦，',
              callname,
              '，出发！今天的约会可还没有结束哦？',
            ]);
          }
        } else {
          await maya.say_and_wait(
            '咦～是卖点心的地方耶！Maya有好多想尝试的零食呢！',
          );
          era.printButton('「注意体重，只能选一样哦。」', 1);
          await era.input();
          await maya.say_and_wait('呣……好吧……到底要选哪个好～！？');
          await maya.say_and_wait(
            '要选季节限定！全新口味的『刺激成瘾胡萝卜脆片』吗～？',
          );
          await maya.say_and_wait(
            '还是要选Maya个人推荐必买的『超甜甜巧克力』呢？',
          );
          await maya.say_and_wait([
            '唔唔～选不出来啦～',
            callname,
            '，你来帮人家选吧！',
          ]);
          era.printButton('「挑战新口味！」', 1);
          era.printButton('「必买的最棒！」', 2);
          if ((await era.input()) === 1) {
            await maya.say_and_wait(
              '对吧对吧！缺乏刺激可不行呢♪虽然我很怕辣，但还是挑战一下吧！',
            );
            await era.printAndWait([
              '虽然最后 ',
              maya.get_colored_name(),
              ' 被辣的满脸通红，但还是努力把零食吃完了。',
            ]);
          } else {
            await maya.say_and_wait('这样啊～果然选择点心时安定感很重要对吧。');
            await maya.say_and_wait(
              '毕竟要是吃到不喜欢的会很失望嘛！好──那我就决定选这个了！',
            );
            await maya.say_and_wait([
              '我们一起分着吃吧！',
              callname,
              '，啊————',
            ]);
            await era.printAndWait([
              '和名字相同，',
              maya.get_colored_name(),
              ' 挑选的巧克力非常的甜。',
            ]);
          }
        }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   * @param {0|1|2} result 抽签结果，数字越大好感奖励越多
   * @param {boolean} rm_debuff 是否去除训练 debuff
   */
  async out_church(maya, callname, result, rm_debuff) {
    await maya.say_and_wait([
      '听说这里求姻缘的签很有名♪',
      callname,
      '，我们也来求吧！——',
    ]);
    await maya.say_and_wait(
      '虽然就算不求神问卜，我们也很登对🌟……不过感觉能让人心动！',
    );
    await era.printAndWait([
      '为了满足 ',
      maya.get_colored_name(),
      ' 的希望，决定抽「姻缘签」了。',
    ]);
    await maya.say_and_wait('抽到签了吗？给人家看给人家看！');
    switch (result) {
      case 0:
        await maya.say_and_wait('未来……会有进展？');
        await maya.say_and_wait('咦……Maya的努力，完全没传达到吗？');
        break;
      case 1:
        await maya.say_and_wait('感……感情还算好……！？');
        await maya.say_and_wait('还算……还算……还算是……算怎样……？');
        break;
      case 2:
        await maya.say_and_wait('……哇！！『热恋一直线』！！真是太棒了～♪');
        await maya.say_and_wait('嘿嘿嘿～～连神明都认可我们吗～～～');
    }
    if (rm_debuff) {
      era.println();
      await era.printAndWait([
        maya.get_colored_name(),
        ' 的训练似乎更加顺利了……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 摩耶重炮对玩家的称呼
   */
  async out_station(maya, you, callname) {
    const buffer = [];
    era.print('一起前往车站做什么呢？');
    era.printButton('吃饭', 1);
    era.printButton('约会', 2);
    era.printButton('看电影', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await maya.say_and_wait(['约会，约会🌟', callname, '，我们要去哪🎵']);
        buffer.push(
          async () => {
            await maya.say_and_wait('啊哇哇哇哇哇……');
            await maya.say_and_wait('Maya……Maya是成熟的大人了，一定能吃完的！');
            await era.printAndWait([
              '和 ',
              maya.get_colored_name(),
              ' 一起品尝了中华料理，虽然',
              maya.sex,
              '不擅长吃辣，但还是挑战了传说中的麻婆豆腐……',
            ]);
          },
          async () => {
            await maya.say_and_wait([callname, '，来喂我吃嘛！啊……']);
            await era.printAndWait([
              '和 ',
              maya.get_colored_name(),
              ' 一起去了家庭餐厅，朴素的菜肴也让两人吃的很开心。',
            ]);
          },
          async () => {
            await maya.say_and_wait('难……难道这就是传说中的烛光晚餐！');
            await maya.say_and_wait('Maya今天终于要迈上大人的阶梯了吗？');
            await era.printAndWait([
              '和 ',
              maya.get_colored_name(),
              ' 一起去了西餐厅，优雅的氛围让',
              maya.sex,
              '的心里小鹿乱撞。',
            ]);
          },
        );
        await get_random_entry(buffer)();
        break;
      case 2:
        if (Math.random() < 0.5) {
          await era.printAndWait([
            '和 ',
            maya.get_colored_name(),
            ' 约好在车站见面。',
          ]);
          await maya.say_and_wait([
            callname,
            ' 来了来了～！那我们一起去约会吧♪',
          ]);
          await maya.say_and_wait(
            '嗳，像这样约定见面，不觉得很有……情侣的感觉吗？',
          );
          await maya.say_and_wait(
            '开玩笑的啦！有心跳加速吗？开始在意人家了对吧？',
          );
          await maya.say_and_wait('用大人的魅力动摇人心作战』非常成功呢🌟');
          await era.printAndWait([
            '虽然不太想承认，但 ',
            you.get_colored_name(),
            ' 或许真的被 ',
            maya.get_colored_name(),
            ' 迷住了也说不定。',
          ]);
        } else {
          await era.printAndWait([
            '和 ',
            maya.get_colored_name(),
            ' 在车站旁的大街上散步。',
          ]);
          await maya.say_and_wait('哇……今天街上的人好多……');
          await maya.say_and_wait([callname, '，为了避免走散，我们来牵手吧！']);
          await maya.say_and_wait(
            '嘿嘿……像这样牵手一起散步，有没有情侣的感觉呢♪',
          );
          await era.printAndWait([
            '虽然在旁人看来，或许更像成人在带孩子吧……但无论如何，',
            maya.get_colored_name(),
            ' 开心就好。',
          ]);
        }
        break;
      case 3:
        await era.printAndWait([
          '和 ',
          maya.get_colored_name(),
          ' 一起去看了新上映的电影。',
        ]);
        if (Math.random() < 0.5) {
          await maya.say_and_wait([
            callname,
            ' ',
            callname,
            '！刚才你看到了吗！',
          ]);
          await maya.say_and_wait('是飞机耶！还是Maya的爸爸驾驶的！');
          await maya.say_and_wait('总有一天Maya也要在蓝天上翱翔🌟');
          await maya.say_and_wait(['所以 ', callname, ' 一定要跟住我哦？']);
          await era.printAndWait([
            '不知是不是偶然，似乎正好碰到了 ',
            maya.get_colored_name(),
            ' 的父亲出演的动作片，',
            maya.get_colored_name(),
            ' 非常开心。',
          ]);
        } else {
          await maya.say_and_wait(
            '犯人果然是那个人啊！Maya可是一开始就猜到了！',
          );
          await maya.say_and_wait([
            '怎么样，Maya很聪明吧♪',
            callname,
            ' 再夸夸我也可以哦？',
          ]);
          await era.printAndWait([
            '虽然 ',
            maya.get_colored_name(),
            ' 猜到了结果，但似乎也有好好的享受到乐趣？',
          ]);
        }
    }
    return ret;
  },
};
