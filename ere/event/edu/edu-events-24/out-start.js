const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 2] = async (maya, me, callname, flags) => {
    await print_event_name('抽奖试手气！', maya);
    await era.printAndWait([
      '某天傍晚，',
      me.get_couple_title(),
      ' 经过商店街的时候──',
    ]);
    await maya.say_and_wait(['欸欸，', callname, '。那边好像有什么活动！']);
    await say_by_passer_by_and_wait(
      '商店街人员',
      '看过来看过来，现正举办新春大抽奖～！特等奖可是『温泉旅游券』！',
    );
    await say_by_passer_by_and_wait(
      '商店街人员',
      '一等奖是『上等胡萝卜肉排汉堡』，二等奖是『一筐胡萝卜』，三等奖则是『一根胡萝卜』！',
    );
    await say_by_passer_by_and_wait(
      '商店街人员',
      '那边的两位！约会完回去的路上，要不要试试两人的爱呢？',
    );
    await maya.say_and_wait('呀☆我要我要♪');
    era.printButton('「立刻就决定了呢」', 1);
    await era.input();
    await maya.say_and_wait('因为感觉很好玩嘛！而、且、啊……');
    await maya.say_and_wait('我们这么相爱，一定会抽到特等奖的！对吧，对吧♪');
    await era.printAndWait('……可是运气跟爱之间好像没什么关连性。');
    await era.printAndWait([
      '敌不过 ',
      maya.get_colored_name(),
      ' 的气势，我在商店街买了东西，准备挑战抽奖。',
    ]);
    await maya.say_and_wait([callname, '！我们拿到一张抽奖券！机会只有一次！']);
    await maya.say_and_wait('唔～拜托拜托，一定要中特等奖……！');
    await era.printAndWait([
      me.get_couple_title(),
      ' 两个人一边祈祷，一起握住握把转动抽奖机。',
    ]);
    await era.printAndWait('结果是──');
    switch (get_random_value(0, 9)) {
      case 0:
        await say_by_passer_by_and_wait(
          '商店街人员',
          '天啊！恭喜────！！抽到特等奖『温泉旅游券』了～～～～！！',
        );
        await era.printAndWait('获得了【温泉旅游券】。');
        await maya.say_and_wait('太棒了～～！！任务达成～！');
        era.printButton('「太好了！」', 1);
        await era.input();
        await maya.say_and_wait('嗯！那么，立刻朝向温泉起飞☆');
        era.printButton('什么都还没准备哦！？」', 1);
        await era.input();
        await maya.say_and_wait('咦～？准备～？');
        await era.printAndWait('如果现在就出发的话，不只要准备行李而已。');
        await era.printAndWait('应该要等到调整好之后的比赛和训练再去──');
        era.printButton('「这也是为你好」', 1);
        await era.input();
        await maya.say_and_wait('为我好？');
        era.printButton('「因为我想实现你的目标」', 1);
        await era.input();
        await maya.say_and_wait('啊──');
        await maya.say_and_wait('哼哼。人家啊，已经决定好今年的目标了♪');
        await maya.say_and_wait([
          '我一定要超越',
          maya.sex,
          '……超越拿出全力的 ',
          sys_get_colored_callname(24, 16),
          '！',
        ]);
        await maya.say_and_wait(['……谢谢你。', callname, '。']);
        await maya.say_and_wait(
          '好，决定了！那么，等人家的目标达成后我们再去吧！',
        );
        await maya.say_and_wait('这样的话你就愿意陪我去吗？');
        era.printButton('「当然愿意！」', 1);
        await era.input();
        await maya.say_and_wait('嘿嘿，太棒了！就这么决定了！');
        await maya.say_and_wait('到时候要尽情放松，尽情享受哦！');
        await era.printAndWait([
          me.get_couple_title(),
          ' 两个人一起期待着，使用温泉旅游券那天的到来。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          new Array(5).fill(10),
          0,
          JSON.parse('{"体力":300}'),
        );
        flags.wait_flag = sys_change_motivation(24, 2) || flags.wait_flag;
        break;
      case 1:
        await say_by_passer_by_and_wait(
          '商店街人员',
          '恭喜抽到一等奖～！奖品是『上等胡萝卜汉堡排』！',
        );
        await era.printAndWait('获得了【上等胡萝卜汉堡排】。');
        await maya.say_and_wait('哇！是一等奖！好棒！！');
        await maya.say_and_wait('啊，不是温泉旅游券～！！');
        era.printButton('「但抽到一等奖哦！」', 1);
        await era.input();
        await maya.say_and_wait([
          '可是可是～人家想和 ',
          callname,
          ' 来趟热恋旅行的说……',
        ]);
        await maya.say_and_wait([
          '唔唔唔……靠汉堡排会抓不住 ',
          callname,
          ' 的心啦。',
        ]);
        era.printButton('「……你确定吗？」', 1);
        await era.input();
        await maya.say_and_wait('咦？难道不是吗？');
        era.printButton('「其实我肚子很饿！」', 1);
        await era.input();
        await maya.say_and_wait('真的吗！？那么那么，人家的汉堡排可以给你哦！');
        await maya.say_and_wait('……嘿嘿，怎么样？有没有更喜欢人家了？');
        era.printButton('「好像有！」', 1);
        await era.input();
        await maya.say_and_wait('太好了！');
        await say_by_passer_by_and_wait(
          '商店街人员',
          '哈哈，你们感情真好！好，那我多送你们一个汉堡排吧！你们要一起吃啊！',
        );
        await maya.say_and_wait('哇！！谢谢叔叔！');
        await maya.say_and_wait(
          '嘿嘿，他说我们感情很好～！感觉我们更相爱了呢♪',
        );
        await era.printAndWait([
          '那天晚上，',
          me.get_colored_name(),
          ' 和 ',
          maya.get_colored_name(),
          ' 一起吃了上等胡萝卜汉堡排。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          new Array(5).fill(10),
          0,
          JSON.parse('{"体力":300}'),
        );
        flags.wait_flag = sys_change_motivation(24, 2) || flags.wait_flag;
        break;
      case 2:
      case 3:
      case 4:
        await say_by_passer_by_and_wait(
          '商店街人员',
          '二等奖～！！奖品是『一筐胡萝卜』！',
        );
        await era.printAndWait('获得了【一筐胡萝卜】。');
        await maya.say_and_wait('哇！？满满的胡萝卜～！？');
        await say_by_passer_by_and_wait(
          '商店街人员',
          '嗯！把那篮子里的胡萝卜全都带走吧！',
        );
        await era.printAndWait(
          '──在商店街人员指着的方向，放着一个装着满满胡萝卜的大篮子。',
        );
        await maya.say_and_wait('……人家吃得完吗。');
        era.printButton('「我也会帮忙的」', 1);
        await era.input();
        await maya.say_and_wait(['咦！真的吗！？那就和 ', callname, ' 一起──']);
        await maya.say_and_wait('……啊！？人家想到一个点子了！');
        await maya.say_and_wait([
          '我问你哦，',
          callname,
          '。可以把这些胡萝卜放在你的房间吗？',
        ]);
        await maya.say_and_wait([
          '人家是和 ',
          sys_get_colored_callname(24, 3),
          ' 共用一间房间，房间太小可能放不下！所以说，可以吗！？',
        ]);
        era.printButton('「是可以啦……」', 1);
        await era.input();
        await maya.say_and_wait('太好了！');
        await maya.say_and_wait(
          '那从明天开始，人家会去你房间，帮你做一堆胡萝卜料理哦♪',
        );
        era.printButton('「咦！？」', 1);
        await era.input();
        await maya.say_and_wait('嘿嘿，要用我亲手做的料理掳获你的心～♪');
        await era.printAndWait([
          '──这天之后，',
          maya.get_colored_name(),
          ' 突击 ',
          me.get_colored_name(),
          ' 房间的次数增加了……',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          [],
          0,
          JSON.parse('{"体力":300}'),
        );
        flags.wait_flag = sys_change_motivation(24, 1) || flags.wait_flag;
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        await say_by_passer_by_and_wait(
          '商店街人员',
          '三等奖～！奖品是『一根胡萝卜』！',
        );
        await era.printAndWait('获得了【一根胡萝卜】。');
        await maya.say_and_wait('咦～！？骗人的吧！');
        await maya.say_and_wait('叔叔，你是把特等奖看成其他奖了吧？对不对～？');
        await say_by_passer_by_and_wait('商店街人员', '嗯……是三等奖没错。');
        await maya.say_and_wait(['唔！和 ', callname, ' 去温泉旅行的计划……']);
        await maya.say_and_wait('而且居然才一根胡萝卜……');
        era.printButton('「跟你的发色一样，是很有精神的颜色呢」', 1);
        await era.input();
        await maya.say_and_wait('……！');
        await maya.say_and_wait([
          '哈哈，',
          callname,
          '，你真的一直只想着人家的事情～！',
        ]);
        await maya.say_and_wait(
          '居然说胡萝卜的颜色是我的发色。这种事情根本没办法立刻想到啦！',
        );
        await maya.say_and_wait('……嘿嘿嘿♪');
        await era.printAndWait([
          maya.get_colored_name(),
          ' 的脸上露出了灿烂的笑容。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          [],
          0,
          JSON.parse('{"体力":200}'),
        );
        break;
      case 9:
        await say_by_passer_by_and_wait(
          '商店街人员',
          '很可惜，没抽中！参加奖是『卫生纸』哦～',
        );
        await era.printAndWait('获得了【卫生纸】。');
        await maya.say_and_wait('咦────！？');
        await maya.say_and_wait('我还以为一定会抽中的！因为因为～！');
        await maya.say_and_wait([
          '人家和 ',
          callname,
          ' 可是这么恩爱耶？对不对？',
        ]);
        await era.printAndWait([
          '再说一次，运气跟爱之间应该没有关连性。',
          me.get_colored_name(),
          ' 安抚着闹脾气的 ',
          maya.get_colored_name(),
          '，回到了学园……',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          24,
          [],
          0,
          JSON.parse('{"体力":300}'),
        );
        flags.wait_flag = sys_change_motivation(24, -1) || flags.wait_flag;
    }
  };

  handlers.kirakira_kessin = async (maya, me, callname, flags) => {
    await print_event_name('摩耶重炮的耀眼☆决心！', maya);
    await era.printAndWait([
      '开始直播的 ',
      maya.get_colored_name(),
      ' 靠着与生俱来的魅力，成为了知名直播主。',
    ]);
    await era.printAndWait([
      '但是不知道为什么，',
      maya.sex,
      '好像不再直播了。今天也像这样整天都外出──',
    ]);
    era.printButton('「……你不直播了吗？」', 1);
    await era.input();
    await maya.say_and_wait('那个……我已经腻了！出去玩比较开心！');
    await maya.say_and_wait('能被大家称赞是很高兴，不过我觉得已经够了！');
    era.printButton('「你明明直播得很开心的说」', 1);
    await era.input();
    await maya.say_and_wait('好、好了啦！不要再聊直播的事了！');
    await maya.say_and_wait('人家还得去买今天开卖的杂志，该走了！');
    await era.printAndWait([
      maya.get_colored_name(),
      ' 不由分说地结束话题，头也不回地走掉了。',
    ]);
    era.printButton('「不过，果然好令人在意……」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 打开',
      maya.sex,
      '的直播存档，看能不能找出什么线索──',
    ]);
    era.printButton('「批评我的留言变多了啊……」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 之前有帮忙',
      maya.sex,
      '拍摄过，自从那次之后，就有越来越多嫉妒 ',
      me.get_colored_name(),
      ' 的留言。',
    ]);
    await era.printAndWait([
      maya.get_colored_name(),
      ' 可能是看了那些留言，导致情绪低落吧。',
    ]);
    era.printButton(`「得跟 ${sys_get_callname(0, 24)} 聊聊……」`, 1);
    await era.input();
    await era.printAndWait([
      maya.sex,
      '可能会去的地方很多，',
      me.get_colored_name(),
      ' 决定一个一个找起。',
    ]);
    await maya.say_and_wait(['哇，', callname, '！？']);
    era.printButton('「总算找到你了……！」', 1);
    await era.input();
    await maya.say_and_wait('难道……你一直在找人家吗？');
    era.printButton('「因为我知道你不直播的原因了」', 1);
    await era.input();
    await maya.say_and_wait('不、不用再谈这件事了啦。原因就是人家刚才说的……');
    era.printButton('「谢谢你顾虑我」（速度&耐力+10）', 1);
    era.printButton('「我完全没把批评留言放在心上哦」（力量+20）', 2);
    era.printButton('「放弃直播太可惜了」（智力+20）', 3);
    switch (await era.input()) {
      case 1:
        await era.printAndWait([
          me.get_colored_name(),
          ' 告诉',
          maya.sex,
          ' ',
          me.get_colored_name(),
          ' 看了对 ',
          me.get_colored_name(),
          ' 的批评留言，并感谢',
          maya.sex,
          '的温柔体贴──',
        ]);
        await maya.say_and_wait('才、才不是呢！人家是真的觉得腻了！');
        await maya.say_and_wait(
          '不再直播之后，才发现人家真正发光发热的地方果然是在赛场上！',
        );
        await maya.say_and_wait([
          '之后人家也会继续待在 ',
          callname,
          ' 的身边，参加一堆竞赛，跑出好成绩──',
        ]);
        await maya.say_and_wait('让更多人迷上我，比现在要来得多～！');
        era.printButton(`「${sys_get_callname(0, 24)}……」`, 1);
        await era.input();
        await maya.say_and_wait('真、真是的～！不要摆出那种表情啦！');
        await maya.say_and_wait([
          '只要和 ',
          callname,
          ' 在一起，不管做什么都很开心！',
        ]);
        await era.printAndWait([
          '听了 ',
          maya.get_colored_name(),
          ' 说的话，',
          me.get_colored_name(),
          ' 默默地点头。',
        ]);
        await era.printAndWait([
          '因为 ',
          me.get_colored_name(),
          ' 发现，不需要刻意去戳破',
          maya.sex,
          '为 ',
          me.get_colored_name(),
          ' 撒的善意谎言。',
        ]);
        await era.printAndWait([
          '相对的，',
          me.get_colored_name(),
          ' 会以训练员的身份，实现',
          maya.sex,
          '的心愿，帮助',
          maya.sex,
          '闪闪发亮──',
        ]);
        era.printButton('「我一定会让你幸福的！」', 1);
        await era.input();
        await maya.say_and_wait('咦！？');
        await maya.say_and_wait([callname, '！刚才那句话是……！？']);
        era.printButton(
          '「我会让你成为比谁都耀眼的赛' + maya.get_uma_sex_title() + '！」',
          1,
        );
        await era.input();
        await maya.say_and_wait('啊……什么嘛，原来是这个意思啊。');
        await maya.say_and_wait('那人家也要来发誓！');
        await maya.say_and_wait([
          '人家一定会成为比星星还要耀眼的',
          era.get('cflag:24:性别') === 1 ? '绅士' : '淑女',
          '的！',
        ]);
        await maya.say_and_wait(['──跟 ', callname, ' 一起☆']);
        flags.wait_flag = get_attr_and_print_in_event(24, [10, 10], 0);
        break;
      case 2:
        await era.printAndWait([
          '所以希望',
          maya.sex,
          '能像之前那样继续直播，',
          me.get_colored_name(),
          ' 这么告诉',
          maya.sex,
          '后──',
        ]);
        await maya.say_and_wait('人家很在意！');
        await maya.say_and_wait([
          '我很不开心！也很不甘心！',
          callname,
          ' 明明总是那么努力！',
        ]);
        await maya.say_and_wait([
          '不管是训练还是拍摄，',
          callname,
          ' 一直都帮助人家──',
        ]);
        await maya.say_and_wait('可是却因为我的错……明明是因为我的关系……');
        await maya.say_and_wait([
          callname,
          ' 你这大笨蛋！要多责备人家啦～～～～～！！',
        ]);
        await maya.say_and_wait('……呜。');
        era.printButton('「真对不起」', 1);
        await era.input();
        await maya.say_and_wait('呜呜～就是这一点……');
        await maya.say_and_wait([
          '虽然我很喜欢 ',
          callname,
          ' 对人温柔这点，但温柔过头的时候只要对着人家就好了！',
        ]);
        await maya.say_and_wait(
          '对『碍事』和『滚啦』这些留言，可以尽情发脾气没关系！',
        );
        era.printButton('「我这人碍不碍事就由比赛来判断吧」', 1);
        await era.input();
        await maya.say_and_wait([callname, '……']);
        await maya.say_and_wait('……受不了！真拿你没辄！');
        await maya.say_and_wait([
          '没问题。为了温柔的 ',
          callname,
          '，人家会拿下胜利的！',
        ]);
        await maya.say_and_wait('然后给大家一个好看！');
        await era.printAndWait([
          me.get_colored_name(),
          ' 点了点头，抬头望向夜空，仿佛在预示 ',
          me.get_couple_title(),
          ' 的未来一般，满天的星星在闪烁着。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 20], 0);
        break;
      case 3:
        await era.printAndWait([
          me.get_colored_name(),
          ' 有看到对 ',
          me.get_colored_name(),
          ' 的批评留言，但因为这样就放弃直播太可惜了。',
        ]);
        await era.printAndWait([
          '「大家不是都看你的直播都看得很开心吗」，',
          me.get_colored_name(),
          ' 跟',
          maya.sex,
          '这样说之后──',
        ]);
        await maya.say_and_wait([
          '是没有错，但人家讨厌他们对 ',
          callname,
          ' 说过分的话……',
        ]);
        era.printButton('「只要传达出现在的心情，一定能得到理解的」', 1);
        await era.input();
        await maya.say_and_wait('……我知道了。人家会再和大家说一次的。');
        await maya.say_and_wait('那个……大家，好久不见了。欢迎收看Maya频道。');
        await say_by_passer_by_and_wait('观众A', 'Maya！？是本人！？');
        await say_by_passer_by_and_wait('观众B', '见不到你让我好寂寞！');
        await say_by_passer_by_and_wait('观众C', '你看起来没什么精神耶。');
        await maya.say_and_wait('嘿嘿，对不起。我今天有事情想告诉大家──');
        await era.printAndWait([
          '讲到这边，',
          maya.get_colored_name(),
          ' 低下头来。',
          maya.sex,
          '应该很烦恼该怎么开口吧。',
        ]);
        era.printButton(`（${sys_get_callname(0, 24)}，加油啊……！）`, 1);
        await era.input();
        await maya.say_and_wait(
          '……我直播的时候很开心。大家愿意看我直播，我也很高兴。',
        );
        await maya.say_and_wait([
          '可是啊，看到那些对 ',
          callname,
          ' 不好的留言，人家觉得很难过。',
        ]);
        await maya.say_and_wait([
          '因为人家和 ',
          callname,
          ' 都是想着『要赢得比赛～！』而一直在努力着……',
        ]);
        await maya.say_and_wait(
          '我希望大家可以帮我们加油，但大家是不是不喜欢……没有在玩耍的人家？',
        );
        await say_by_passer_by_and_wait('观众D', '超喜欢的！！');
        await say_by_passer_by_and_wait('观众E', 'Maya，真抱歉。');
        await say_by_passer_by_and_wait('观众F', '说得有点太过火了……');
        await maya.say_and_wait('太好了……不过，Maya频道要暂时跟大家说再见了。');
        era.printButton('「咦！？」', 1);
        await era.input();
        await maya.say_and_wait(
          '我在休息时间练习跑步时，发现到了！人家最能闪闪发亮的地方是在赛场上。',
        );
        await maya.say_and_wait(
          '虽然会有点寂寞……不过人家想让大家看到更棒的我！',
        );
        await say_by_passer_by_and_wait('观众G', '真的要说再见了？');
        await say_by_passer_by_and_wait('观众H', '这太难受了……');
        await maya.say_and_wait('大家……');
        await say_by_passer_by_and_wait('观众I', '我会帮Maya加油的。');
        await say_by_passer_by_and_wait('观众J', '我也是！');
        await say_by_passer_by_and_wait('观众K', 'Maya，我会去看你的！');
        await maya.say_and_wait(
          '嗯！比赛的时候随时都能见面！人家也会在赛场上等着大家的！',
        );
        await era.printAndWait(
          '在后来举办的模拟赛上，来现场加油的粉丝比平常还要多。',
        );
        flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 0, 20], 0);
    }
  };
};
