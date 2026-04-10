const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} handlers */
module.exports = (handlers) => {
  handlers.adventure_game = async (maya, me, callname, flags) => {
    await print_event_name('摩耶重炮的紧张刺激☆试胆游戏！', maya);
    const teio = get_chara_talk(3);
    await era.printAndWait([
      '过了门禁时间，鸦雀无声的校内。当 ',
      me.get_colored_name(),
      ' 回训练员室拿忘记的东西的途中──',
    ]);
    await maya.say_and_wait(['啊！是 ', callname, '！还真巧耶♪']);
    era.printButton('「这么晚了怎么还在这？」', 1);
    await era.input();
    await maya.say_and_wait('我们啊～是来看幽灵的☆');
    await maya.say_and_wait(
      '我们看电视上的灵异节目，结果讲到学园里也有灵异事件──',
    );
    await teio.say_and_wait([
      '怎、怎么想都是骗人的，但是 ',
      sys_get_colored_callname(3, 24),
      ' 却不相信……',
    ]);
    era.printButton('「已经过了门禁时间，快回去吧」', 1);
    await era.input();
    await teio.say_and_wait(
      '对、对对对对吧！？在意的地方都去过了，我已经觉得够了！',
    );
    await maya.say_and_wait('咦～！？那再去一个地方就好～！人家想去训练员室！');
    await maya.say_and_wait([
      '很久很久以前，有一位赛',
      maya.uma_sex_title,
      '在决胜服送到的前一天遭遇车祸身亡了……',
    ]);
    await maya.say_and_wait([
      maya.sex,
      '的幽灵会出现在晚上的训练员室，并且悲叹地问道『我的决胜服在哪……』！',
    ]);
    await teio.say_and_wait('咿────！？');
    await teio.say_and_wait('哇，呃……这、这一定是捏造出来的！');
    await maya.say_and_wait(['咦，又不一定！', callname, '，带我们去嘛～！']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 敌不过打死不退的摩耶重炮，三个人一起前往了训练员室。',
    ]);
    await maya.say_and_wait('喂～幽灵～！你在哪～？');
    await teio.say_and_wait([
      '不用呼唤',
      maya.sex,
      '吧！万一真的出现怎么办啦～！',
    ]);
    await era.printAndWait(
      '为了找连一次都没穿过的决胜服，而在此徘徊的幽灵吗……',
    );

    era.printButton('「那个幽灵一定很遗憾吧」（力量+20）', 1);
    era.printButton('「在摩耶重炮等人的身后……」（根性+20）', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '你们讲到那个幽灵一定很想穿上决胜服，在赛场上奔驰──',
      ]);
      await maya.say_and_wait(['对啊。', maya.sex, '一定很喜欢跑步吧……']);
      await maya.say_and_wait([
        '如果我是',
        maya.sex,
        '，一定也会因为感到孤单和遗憾而跑来这里！',
      ]);
      era.printButton('「真想弥补' + maya.sex + '的遗憾啊」', 1);
      await era.input();
      await maya.say_and_wait('嗯……');
      await maya.say_and_wait('对了！人家要连同幽灵的分一起跑！');
      await maya.say_and_wait(
        '为了无法参赛的幽灵，我要参加一堆比赛跑出好成绩♪',
      );
      await era.printAndWait('（嘎哒嘎哒）');
      await teio.say_and_wait('咿！？窗户突然发出声音了！！');
      era.printButton('「' + maya.sex + '可能是想向我们道谢」', 1);
      await era.input();
      await teio.say_and_wait(
        '呜呜呜～！讨厌，我们快回去啦～！要是被附身怎么办～！！',
      );
      await maya.say_and_wait('咦？跟幽灵当朋友感觉就很有趣♪');
      await maya.say_and_wait('对不对，幽灵☆');
      await maya.say_and_wait('好！幽灵，人家会加油的！');
      await era.printAndWait([
        maya.get_colored_name(),
        ' 轻快地奔跑着，就像背后吹着顺风一样。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 20], 0);
    } else {
      await teio.say_and_wait('呀啊啊啊！！有鬼～～～～～！！');
      await teio.say_and_wait('哇啊啊啊！！救～命～啊～！！');
      era.printButton('「追上去吧！」', 1);
      await era.input();
      await maya.say_and_wait('好、好的！');
      await era.printAndWait([
        '你们急忙追着 ',
        teio.get_colored_name(),
        '，不过却彻底跟丢了。',
      ]);
      await maya.say_and_wait([
        sys_get_colored_callname(24, 3),
        ' ',
        maya.sex,
        '其实很怕幽灵呢……',
      ]);
      era.printButton('「' + maya.sex + '跑去哪了？」', 1);
      await era.input();
      await maya.say_and_wait('嗯……至少不会经过又暗又恐怖的地方吧？');
      await maya.say_and_wait('那答案就简单了！走吧！');
      await era.printAndWait([
        me.get_colored_name(),
        ' 跟在知道 ',
        teio.get_colored_name(),
        ' 行经路线的 ',
        maya.get_colored_name(),
        ' 身后──',
      ]);
      await maya.say_and_wait([
        '太好了！找到你了，',
        sys_get_colored_callname(24, 3),
        '！！',
      ]);
      await teio.say_and_wait('……………………');
      era.printButton('「对不起，刚才吓唬你」', 1);
      await era.input();
      await era.printAndWait([
        '带着不知道为什么沉默的 ',
        teio.get_colored_name(),
        '，你们三人一起回去了。',
      ]);
      era.drawLine();
      await maya.say_and_wait(['呼啊～', callname, '，早安～']);
      await maya.say_and_wait('结果，昨天没能遇到幽灵呢～真没意思。');
      await teio.say_and_wait('没遇到才好！真是的，我很担心你耶！？');
      await teio.say_and_wait('你都一直不回房间，手机也打不通！');
      await maya.say_and_wait([
        '咦？',
        sys_get_colored_callname(24, 3),
        '，你是跟我们一起回去的，对吧？',
      ]);
      await teio.say_and_wait('咦？我自己一个人回来的。');
      await maya.say_and_wait([
        '……那昨天在我们身边的 ',
        sys_get_colored_callname(24, 3),
        ' 是──',
      ]);
      await say_by_passer_by_and_wait('2人', '咦～～～～～！？');
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers.star_wish = async (maya, me, callname, flags) => {
    await print_event_name('向星星许愿', maya);
    const sunday = get_chara_talk(55);
    era.println();
    await era.printAndWait([
      '在和 ',
      me.get_colored_name(),
      ' 一起回去的路上，',
      maya.sex,
      '说有想去的地方，所以你们就来到了这里……',
    ]);
    era.printButton('「你有东西忘在校舍吗？」', 1);
    await era.input();
    await maya.say_and_wait([
      '没有！听我说听我说，我今天从 ',
      sys_get_colored_callname(24, 55),
      ' 那听到一个很厉害的传闻～！',
    ]);
    await sunday.used_to_say_and_wait(
      '在星空照耀下，顶楼上怦然心动的两人能够获得幸福',
    );
    await maya.say_and_wait('呀☆好浪漫，太美好了！');
    await maya.say_and_wait('对不对？对不对？一定会很有趣的，一起去嘛！');
    era.printButton('「真拿你没办法」', 1);
    await era.input();
    await maya.say_and_wait(['太好了！这下就能和 ', callname, '……嘿嘿！']);
    await maya.say_and_wait('啊，对了！就是啊，途中被别人发现的话就会失败！');
    await maya.say_and_wait('有收到吗？');
    era.printButton('「收到！」', 1);
    await era.input();
    await maya.say_and_wait('很好！那么，开启匿踪模式……起飞☆');
    await maya.say_and_wait('──队长机联络各部队！没有发现敌机踪影……结束！');
    await maya.say_and_wait('嘿嘿！这样的话就能『咻──！』地前往顶楼了……');
    await era.printAndWait('（啪哒啪哒……啪哒啪哒……！）');
    await maya.say_and_wait(['……！！', callname, '，刚才那是……']);
    era.printButton('「是脚步声」', 1);
    await era.input();
    await maya.say_and_wait('而且……是不是往这边来了！？怎、怎么办！');
    era.printButton('「躲起来等对方走掉吧」（智力+20）', 1);
    era.printButton('「往顶楼冲刺！」（速度+20）', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait('好、好的！那就在那间教室──');
      await era.printAndWait('（……哒哒哒……哒哒……）');
      await maya.say_and_wait('……嘿嘿，像是在玩躲猫猫，开始觉得刺激了♪');
      era.printButton('「小声一点！」', 1);
      await era.input();
      await maya.say_and_wait('啊哇哇！这样不行这样不行！要小声一点，嘘……');
      await maya.say_and_wait(
        ['呵呵……', callname, ' 的睫毛有点卷卷的，好可爱♪'],
        true,
      );
      await maya.say_and_wait('而且感觉……比平常还……帅……', true);
      await maya.say_and_wait('……呼哇……呼哇哇。', true);
      era.printButton('「摩耶重炮？」', 1);
      await era.input();
      await maya.say_and_wait('……啊～～不行了────！！');
      await sunday.say_and_wait([
        '哇☆吓我一跳！',
        maya.get_colored_name(),
        ' 也把东西忘在教室吗？？',
      ]);
      await maya.say_and_wait([
        '什、什么？',
        sys_get_colored_callname(24, 55),
        '！？',
      ]);
      era.printButton('「被发现了呢」', 1);
      await era.input();
      await maya.say_and_wait('啊────！！对耶！刚才太紧张都忘记了～～！');
      await sunday.say_and_wait('这样啊！你有用那个魔法？？但是但是……');
      await sunday.say_and_wait('心脏有噗通噗通跳的话就很美丽了☆对吧★');
      await maya.say_and_wait('唔…………或许确实是这样。就算不用魔法……');
      era.printButton('「什么意思？」', 1);
      await era.input();
      await maya.say_and_wait(
        '啊哇哇！！没事，什么事都没有！反正都失败了，我们早点回去吧！！',
      );
      await era.printAndWait(
        '在摩耶重炮的催促下，我没搞懂魔法的真正用意就回去了……',
      );
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 0, 20], 0);
    } else {
      await maya.say_and_wait('这样啊！只要跑掉，不被发现就好了！');
      await maya.say_and_wait(['那么 ', callname, '！手伸出来。']);
      era.printButton('「咦？」', 1);
      await era.input();
      await maya.say_and_wait('因为人家跑得比较快嘛！好啦好啦，快点，快一点！');
      await era.printAndWait([
        '被逐渐逼近的脚步声催促，',
        maya.get_colored_name(),
        ' 牵住了 ',
        me.get_colored_name(),
        ' 的手──',
      ]);
      await maya.say_and_wait([callname, '，加油加油！还差一点──！']);
      await maya.say_and_wait(['抵达！！太棒了，', callname, '！']);
      era.printButton('「太、太好了……」', 1);
      await era.input();
      await maya.say_and_wait('最后在这边看星星……');
      await maya.say_and_wait(['哇……！', callname, '，天空！快看天空！！']);
      await maya.say_and_wait('好壮观，超壮观的！夜空原来这么耀眼吗！？');
      era.printButton('「我们的努力有了回报呢！」', 1);
      await era.input();
      await maya.say_and_wait(
        '这样啊……没错！星星会这么漂亮，可能也是因为我们很努力！',
      );
      await maya.say_and_wait('……好！那差不多该回去了！');
      era.printButton('「已经要回去了吗？」', 1);
      await era.input();
      await era.printAndWait(
        '如果照传闻所说的，必须要「在星空照耀下的顶楼上怦然心动」才行……',
      );
      await maya.say_and_wait('嗯！要回去了！因为人家刚才知道了。');
      await maya.say_and_wait('就算不做任何事，我们……');
      await maya.say_and_wait('总、总之！事情就是这样！所以早点回去吧？');
      await era.printAndWait([
        me.get_colored_name(),
        ' 露出微笑看着害羞的 ',
        maya.get_colored_name(),
        '……在满天星空照耀下，你们一起回去了。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    }
  };

  handlers.sweet_present = async (maya, me, callname, flags) => {
    await print_event_name('送给你甜蜜的心意♪', maya);
    const flower = get_chara_talk(51);
    const hishi = get_chara_talk(28);
    era.println();
    await era.printAndWait('当我经过食堂的时候──');
    await maya.say_and_wait('今天要来努力做点心哦～♪还请两位多多指教！');
    await flower.say_and_wait('好的……♪做为指导老师，我会尽最大的努力的。');
    await hishi.say_and_wait('我也很擅长做点心哦～来做又大又美味的点心吧～♪');
    era.printButton('「在食堂做点心？」', 1);
    await era.input();
    await maya.say_and_wait(['啊，是 ', callname, '～！']);
    await maya.say_and_wait([
      '那个啊，我想做点心感谢 ',
      callname,
      ' 平日的指导！',
    ]);
    await maya.say_and_wait([
      '我跟厨房的阿姨这么说之后，',
      maya.sex,
      '就说我可以用这里的厨房♪',
    ]);
    await maya.say_and_wait([
      '只要做出美味的蛋糕，就能让 ',
      callname,
      ' 的心──',
    ]);
    era.printButton('「我的心？」', 1);
    await era.input();
    await maya.say_and_wait([
      '没、没什么！不介意的话就看我做吧，',
      callname,
      '♪',
    ]);
    await flower.say_and_wait('接着加入白砂糖并搅拌……');
    await maya.say_and_wait('嗯嗯～♪');
    await era.printAndWait([
      maya.get_colored_name(),
      ' 面对不熟悉的料理陷入苦战，不过看起来非常开心。',
    ]);
    era.printButton(`「加油啊，${sys_get_callname(0, 24)}！」（耐力+20）`, 1);
    era.printButton('「我也来做好了」（智力+20）', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '看着',
        maya.sex,
        '卖力的样子，',
        me.get_colored_name(),
        ' 不禁为',
        maya.sex,
        '加油打气。',
      ]);
      await era.printAndWait('──同时，肚子也因为太饿，发出很大的声音。');
      await hishi.say_and_wait('啊哈哈♪就快做好了所以再等一下哦～');
      await flower.say_and_wait(
        '那个，这里有刚刚趁着空档做的马林糖……要吃一个吗？',
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 感激地收下了 ',
        flower.get_colored_name(),
        ' 和 ',
        hishi.get_colored_name(),
        ' 做的马林糖。',
      ]);
      era.printButton('「真好吃！是我喜欢的味道哦！」', 1);
      await era.input();
      await flower.say_and_wait('真、真的吗？太好了……有合你的胃口。');
      await maya.say_and_wait('哼！！');
      await maya.say_and_wait(
        '好吃……喜欢的味道……这些明明是人家想听到的话！',
        true,
      );
      await maya.say_and_wait('既然这样……', true);
      await maya.say_and_wait([
        sys_get_colored_callname(24, 51),
        '、',
        sys_get_colored_callname(24, 28),
        '！人家要自己一个人做蛋糕！',
      ]);
      await hishi.say_and_wait('咦？你可以吗～？');
      await maya.say_and_wait([
        '完全没问题！人家可是最懂 ',
        callname,
        ' 的喜好！',
      ]);
      await maya.say_and_wait(
        [
          '为了赢过',
          maya.couple_title,
          '两个，人家一定要靠自己做出更厉害的料理！',
        ],
        true,
      );
      await maya.say_and_wait('呜、呜呜呜～');
      await era.printAndWait([
        maya.get_colored_name(),
        ' 的蛋糕虽然做好了，但是颜色和形状实在难以形容……',
      ]);
      await maya.say_and_wait([
        '味道应该很合你的胃口！我有参考 ',
        callname,
        ' 喜欢吃的食物！',
      ]);
      await maya.say_and_wait('还加入了人家满满的爱……你不吃吗？');
      await era.printAndWait([
        me.get_colored_name(),
        ' 下定决心，把 ',
        maya.get_colored_name(),
        ' 做的蛋糕放进嘴里──',
      ]);
      era.printButton('「真、真好吃！」', 1);
      await era.input();
      await maya.say_and_wait('真的吗！？');
      await maya.say_and_wait([
        '真的很好吃吗！？是 ',
        callname,
        ' 喜欢的味道吗！？',
      ]);
      era.printButton(`「嗯，${sys_get_callname(0, 24)} 真有一套！」`, 1);
      await era.input();
      await maya.say_and_wait('哇～♪好棒，太棒了～～～～～！！');
      await era.printAndWait([
        '做的料理得到称赞的 ',
        maya.get_colored_name(),
        '，在那之后心情一直很好，笑眯眯地完成了训练。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
    } else {
      await era.printAndWait([
        '看着',
        maya.couple_title,
        '下厨的样子，连 ',
        me.get_colored_name(),
        ' 自己也想动手做了。',
        me.get_colored_name(),
        ' 这么告诉',
        maya.couple_title,
        '之后──',
      ]);
      await flower.say_and_wait(
        '呃，有兴趣的话要一起做吗？我可以告诉你步骤……！',
      );
      await maya.say_and_wait([
        '慢着慢着！',
        callname,
        ' 要看人家做料理啦～！',
      ]);
      era.printButton('「我也想向你表达感谢」', 1);
      await era.input();
      await maya.say_and_wait([callname, '……！']);
      await maya.say_and_wait('收到☆要是这样，我非常欢迎♪');
      await hishi.say_and_wait('大家一起相亲相爱做料理～能让点心变得更美味哦♪');
      await era.printAndWait(
        '经过一番努力总算把蛋糕做好了，不过稍微有点焦掉……',
      );
      await maya.say_and_wait(['哇～！', callname, ' 送我蛋糕～♪']);
      await maya.say_and_wait('我吃我吃……啊唔！');
      await maya.say_and_wait('有、有一点苦，不过这就是大人的味道吧♪');
      era.printButton('「只是烧焦而已！不用吃没关系！」', 1);
      await era.input();
      await maya.say_and_wait('不要～！');
      await maya.say_and_wait([
        '人家要一点都不剩，把 ',
        callname,
        ' 的心意吃光！',
      ]);
      await maya.say_and_wait(['所以 ', callname, '，你也吃人家做的蛋糕吧。']);
      await maya.say_and_wait('来～♪');
      await maya.say_and_wait('嘿嘿～！有收到我感谢的心意吗？');
      era.printButton('「当然有！」', 1);
      await era.input();
      await maya.say_and_wait('太好了～♪');
      await flower.say_and_wait('居、居然靠那么近……在一旁看得都脸红心跳了！');
      await hishi.say_and_wait('好棒，好棒。可喜可贺，可喜可贺～♪');
      await era.printAndWait([
        '在两位朋友的帮助下，',
        maya.get_colored_name(),
        ' 的点心做得非常成功。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 0, 20], 0);
    }
  };
};
