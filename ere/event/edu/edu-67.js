/**
 * @file 里见光钻 - 育成
 *
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 无名黑奴（修订）
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const Edu67UntilSchoolAtrium = require('#/event/edu/edu-events-67/school-atrium');
const daiya_week_end = require('#/event/edu/edu-events-67/week-end');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const DaiyaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-67');
const event_hooks = require('#/data/event/event-hooks');
const { attr_enum, attr_names, fumble_result } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,{wait:boolean}):Promise<void>>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-67/week-start-1')(week_start_handlers);
require('#/event/edu/edu-events-67/week-start-2')(week_start_handlers);
require('#/event/edu/edu-events-67/week-start-3')(week_start_handlers);

const race_end_handlers = {};

require('#/event/edu/edu-events-67/race-end-1')(race_end_handlers);
require('#/event/edu/edu-events-67/race-end-2')(race_end_handlers);

module.exports = class extends Edu67UntilSchoolAtrium {
  async office_cook(daiya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 67) {
      add_event(event_hooks.office_cook, event_object);
      return;
    }
    const edu_marks = new DaiyaEduMarks();
    if (edu_marks.banned_coffee !== 1) {
      return;
    }
    const coffee = get_chara_talk(25);
    let wait_flag;
    edu_marks.banned_coffee++;
    await print_event_name('禁忌特调', daiya);
    await era.printAndWait(
      '「想要学会怎么煮出好喝的咖啡」。曼城茶座答应了要帮里见光钻实现这个心愿。',
    );
    await daiya.say_and_wait('今天要麻烦多多指教了！');
    era.printButton('「麻烦你了！」', 1);
    await era.input();
    await coffee.say_and_wait('是，请多指教……一起煮出好喝的咖啡吧。');
    await coffee.say_and_wait(
      '咖啡会因出产的农园不同而味道不同……品种跟生长环境也有很大的影响。',
    );
    await coffee.say_and_wait(
      '找到自己喜欢的豆子也是乐趣之一……请试着选选看吧……',
    );
    await daiya.say_and_wait('有这么多……！不知道该怎么选才好呢。');
    await coffee.say_and_wait(
      '这种时候……可以选择尝试特调。未知的世界……能煮出只属于你的一杯咖啡。',
    );
    await daiya.say_and_wait('未知的世界……听起来好棒喔！那我要挑战特调看看！');
    await daiya.say_and_wait(
      '洪都拉斯……巧克力的香气跟百香果的风味……这个也要！',
    );
    await coffee.say_and_wait('这样就十种了……那个，还是先这样就差不多了──');
    await coffee.say_and_wait(
      '……咦？可能会诞生新的口味？这么说……是没有错，可是……',
    );
    await daiya.say_and_wait('好──这个也要……啊，还有这个！');
    await daiya.say_and_wait('呵呵……我自己煮的自制特调♪我要喝了。');
    await era.printAndWait([
      { color: daiya.color, content: '两', fontWeight: 'bold' },
      { color: coffee.color, content: '人', fontWeight: 'bold' },
      '「',
      { color: daiya.color, content: '咕噜' },
      '、',
      { color: coffee.color, content: '咕噜' },
      '……」',
    ]);
    await daiya.say_and_wait(
      '唔唔……苦味跟酸味在拉扯着。我不太喜欢这种味道呢……！',
    );
    era.printButton('「这算是失败了吧……」', 1);
    await era.input();
    await coffee.say_and_wait(
      '……豆子的种类越多，味道就会越复杂。这应该是豆子各自的自我主张……太强烈了。',
    );
    await daiya.say_and_wait('原来如此……嗯──要让味道不会互相拉扯的话……');
    await daiya.say_and_wait(
      '啊！是有这个办法没错！我知道一个可以让味道好好相处的好帮手！',
    );
    await daiya.say_and_wait('你看！是种满蔬菜的田！');
    await daiya.say_and_wait(
      '蔬菜经常被大家用来跟各种东西炒在一起，或是炖在一起，对吧？',
    );
    await daiya.say_and_wait(
      '甚至也有用蔬菜煎出来的茶叶，所以我就想到，说不定它也能中和咖啡豆之间的味道呢！',
    );
    era.printButton('「我觉得还是算了吧……」', 1);
    await era.input();
    await coffee.say_and_wait('……我赞成里见的说法。');
    await coffee.say_and_wait(
      '这完全颠覆了咖啡本身的概念……打破常识的做法，是我从没有想到过的……',
    );
    await daiya.say_and_wait('咖啡……！');
    await coffee.say_and_wait(
      '我想，这么做一定能诞生出很有趣的咖啡……『朋友』……也是这么认为的。',
    );
    await daiya.say_and_wait(
      '嘿嘿嘿，对吧！我自己也想像不到会是怎样的咖啡呢。',
    );
    await daiya.say_and_wait(
      '所以才更想要挑战看看……就算结果会是不好喝的咖啡也没关系……！',
    );
    era.printButton('「在那之前要不要先把基础给学好？」', 1);
    era.printButton('「一直挑战到煮出好喝咖啡为止吧！」', 2);
    let ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('原来如此……意思是要先打好基础吧。');
      await daiya.say_and_wait(
        '知道了……那就先把基础概念都学好，冒险就等之后再来做吧。',
      );
      await daiya.say_and_wait(
        '……好，再来只要加入热水就完成了！啊……可是，要是也加入这个豆子的话──',
      );
      await coffee.say_and_wait('那个，食谱上是……');
      await daiya.say_and_wait('──对耶！要照着食谱做才对……！');
      await era.printAndWait(
        '里见光钻忍住了自己的好奇心，成功煮出了美味的咖啡！',
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
    } else {
      await daiya.say_and_wait('没问题！敬请期待吧！');
      await coffee.say_and_wait(
        '加了蔬菜的咖啡……完成了呢。加了菠菜、青椒等……颜色很绿呢。',
      );
      await daiya.say_and_wait('闻起来也是浓浓的菜味……我、我要喝了！');
      await era.printAndWait([
        { color: daiya.color, content: '两', fontWeight: 'bold' },
        { color: coffee.color, content: '人', fontWeight: 'bold' },
        '「',
        { color: daiya.color, content: '咕噜' },
        '、',
        { color: coffee.color, content: '咕噜' },
        '……」',
      ]);
      await daiya.say_and_wait('这个……不好喝呢……！啊哈、啊哈哈哈！');
      await coffee.say_and_wait('……是啊……呵呵。');
      await era.printAndWait('虽然味道不怎么样，却是能带来欢笑的一杯咖啡！');
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async office_study(daiya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 67) {
      add_event(hook.hook, event_object);
      return;
    }
    const edu_marks = new DaiyaEduMarks();
    if (edu_marks.dance_practice !== 1) {
      return;
    }
    const teio = get_chara_talk(3);
    let wait_flag;
    edu_marks.dance_practice++;
    await print_event_name('舞蹈练习', daiya);

    await era.printAndWait(
      `因为里见光钻希望 ${me.name} 能帮${daiya.sex}看一下，所以 ${me.name} 正在陪${daiya.sex}做舞蹈练习。`,
    );
    await daiya.say_and_wait('像这样，再这样……然后再来是这样──');
    await daiya.say_and_wait(
      '……唔唔唔，感觉不太对。舞技精湛的人绝对不会跳成这样。',
    );
    await daiya.say_and_wait('应该要更有气势地──');
    await daiya.say_and_wait('……哇哇！');
    era.printButton('「你没事吧！？」', 1);
    await era.input();
    await daiya.say_and_wait('没事，真不好意思……');
    await era.printAndWait('不知为何，里见光钻跳舞的时候有种瞎忙一场的感觉。');
    era.printButton('「你有什么烦恼吗？」', 1);
    await era.input();
    await daiya.say_and_wait('……');
    await daiya.say_and_wait('就是……小北她不是很会唱歌吗？');
    await daiya.say_and_wait(
      '虽然我也很努力在练习，但那实在不是一朝一夕可以达到的等级。',
    );
    await daiya.say_and_wait(
      '所以，我才会想说，至少在舞步这个部分要达到能够自豪的水准。',
    );
    era.printButton('「重新审视一下基础的部分好了」', 1);
    era.printButton('「干脆用北部玄驹的歌来跳舞？」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait(
        '是呀，小北能把歌唱得那么好，一定也是有打好基础的关系。',
      );
      await daiya.say_and_wait(
        '我也从基础的舞步开始重新练习，慢慢一点一点累积经验的话──',
      );
      await teio.print_and_wait('？？？「什么什么？在讲舞步的事情吗──？」');
      await daiya.say_and_wait('哇啊，帝王！？……刚才的对话都被你听见了吗？');
      await teio.say_and_wait('嗯，你提到了基础的舞步什么的，对吧？');
      await teio.say_and_wait(
        '哼哼──说到舞步，就该是我出场的时候啦！我也可以教教你哦～？',
      );
      await daiya.say_and_wait(
        '确实说到舞步会直接联想到帝王没错，但帝王是小北也很尊敬的人。',
        true,
      );
      await daiya.say_and_wait(
        '如果只有我一个人被教到，感觉有点过意不去呢……',
        true,
      );
      await daiya.say_and_wait(
        '──不对，现在不是客气的时候了。我已经下定决心要把舞练好了！',
        true,
      );
      await daiya.say_and_wait('帝王，可以的话，可以请你教教我吗？只不过──');
      await teio.say_and_wait('不过？');
      await daiya.say_and_wait(
        '……我不希望让小北知道这件事。这样像是我一个人独占了帝王一样，感觉对她很不好意思。',
      );
      await teio.say_and_wait(
        '原来是这样喔！也就是小钻跟我之间的秘密啰。嘻嘻嘻，了解！',
      );
      await era.printAndWait(
        '经过东海帝王的指导后，里见光钻的动作变得比原本轻柔了。',
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [20, 0, 0, 0, 0], 0);
    } else {
      await daiya.say_and_wait('哎呀，跳小北的歌吗……？这我倒是没有想过！');
      await daiya.say_and_wait(
        '不过，我觉得应该不错呢。这样会更让我有不能输给小北歌声的感觉！',
      );
      await daiya.say_and_wait('那就──');
      await daiya.say_and_wait('……！', true);
      await daiya.say_and_wait('小北的歌声非常强而有力，又充满跃动感……', true);
      await daiya.say_and_wait('或许我欠缺的就是这种力道也不一定……！', true);
      await daiya.say_and_wait(
        '好，我也要更有力道一点！！再用力一点、再更用力一点──！！',
        true,
      );
      await daiya.say_and_wait(
        '奇怪？感觉越跳越充满热情……这种感觉好愉快喔！！',
        true,
      );
      await era.printAndWait('里见光钻自言自语着，跳了好一阵子的舞。');
      await era.printAndWait(
        `虽然有点让人担心……但${daiya.sex}的舞步感觉变得非常地利落！`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(daiya, me, callname, hook, extra_flag, event_object) {
    if (
      era.get('flag:当前互动角色') !== 67 ||
      era.get('cflag:67:育成回合计时') !== 95 + 2
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    let wait_flag = false;
    await print_event_name('抽奖试手气！', daiya);
    await era.printAndWait(`回程路上，${me.name} 和里见光钻经过商店街时──`);
    await era.printAndWait(
      '商店街人员「看过来看过来，现正举办新春大抽奖～！特等奖可是『温泉旅游券』！」',
    );
    await era.printAndWait(
      '商店街人员「一等奖是『特等胡萝卜汉堡排』，二等奖是『一整堆胡萝卜』，三等奖则是『一根胡萝卜』！」',
    );
    await era.printAndWait(
      '商店街人员「来喔来喔，是好玩的抽奖活动喔！任何人都可以来抽喔～！」',
    );
    await daiya.say_and_wait('哇啊，在办抽奖呢！');
    await daiya.say_and_wait(
      '那个是……手转的抽奖机！抽奖还是要用这种的最有感觉了！',
    );
    era.printButton('「有什么特别讲究的原因吗？」', 1);
    await era.input();
    await daiya.say_and_wait(
      '因为手转的抽奖机要自己动手转动，所以就能调整力道跟速度不是吗？',
    );
    await daiya.say_and_wait(
      '有一种凭自己的力量去掌握好运的感觉，就是这种感觉很好！',
    );
    era.printButton('「要抽看看吗？」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name} 想起买东西的时候有得到一张抽奖券，便问${daiya.sex}要不要尝试。`,
    );
    await daiya.say_and_wait('我想抽！！我一定会抽到特等奖的！');
    await daiya.say_and_wait('嘿呀～～！！');
    await era.printAndWait('里见光钻用非常惊人的气势转动了抽奖机的把手！');
    await era.printAndWait('结果是──');
    const gacha = get_random_value(0, 9);
    if (gacha === 0) {
      await era.printAndWait(
        '商店街人员「天啊！恭喜────！！抽到特等奖『温泉旅游券』了～～～～！！」',
      );
      await era.printAndWait('获得了「温泉旅游券」。');
      await daiya.say_and_wait(
        '成……成功了～～！！特等奖！是特等奖喔，训练员！！',
      );
      await daiya.say_and_wait(
        '你看吧？对吧？我说得没错对吧?好运就是要用气势去争取的！！',
      );
      era.printButton('「嗯，你真厉害呢……！」', 1);
      await era.input();
      await era.printAndWait(
        `没想到真的如${daiya.sex}所说的抽到了特等奖，真的有种凭气势赢得好运的感觉。`,
      );
      await daiya.say_and_wait('呵呵呵，感觉今年会是美好的一年呢♪');
      era.printButton('「你就和北部一起去泡温泉吧」', 1);
      await era.input();
      await daiya.say_and_wait('不，我要给训练员。因为抽奖券是训练员的嘛。');
      await daiya.say_and_wait('能体验到抽奖我就已经很满足了！');
      era.printButton('「可是抽中的人是你呀……」', 1);
      await era.input();
      await daiya.say_and_wait('不然，就我跟训练员一起去吧。');
      await daiya.say_and_wait(
        '就当作是慰劳之旅。嗯，这样比较好！就这么决定了！',
      );
      await daiya.say_and_wait(
        '等闪耀系列赛最初的三年告一段落的时候，我们再一起去这趟慰劳之旅吧！结束一个阶段就是该好好庆祝才对！',
      );
      await daiya.say_and_wait('而且，有奖励的话，做事也会更起劲吧？');
      era.printButton('「是呀」', 1);
      await era.input();
      await daiya.say_and_wait('那就这么决定了！约好了喔！');
      await era.printAndWait(
        `${me.get_couple_title()} 约好要在资深级这一年留下满意的成绩。完成之后再一起使用这张旅游券。`,
      );
      era.println();
      wait_flag = sys_change_motivation(67, 2) || wait_flag;
      wait_flag = get_attr_and_print_in_event(
        67,
        new Array(5).fill(10),
        0,
        JSON.parse('{"体力":300}'),
      );
    } else if (gacha === 9) {
      await era.printAndWait(
        '商店街人员「很可惜，没抽中！参加奖是『卫生纸』喔～」',
      );
      await era.printAndWait('获得了「卫生纸」。');
      await daiya.say_and_wait('…………没抽中吗…………？');
      await daiya.say_and_wait('…………一次。');
      await daiya.say_and_wait('我要再抽一次！');
      await daiya.say_and_wait(
        '我绝不接受没抽中这个结果！我一定要颠覆这个结果！！',
      );
      await era.printAndWait('商店街人员「呃……请问你还有抽奖券吗？」');
      await daiya.say_and_wait('没有，要在哪里购买呢？');
      await era.printAndWait(
        '商店街人员「我们没有在贩卖抽奖券耶～因为在商店街买东西就可以得到──」',
      );
      await daiya.say_and_wait('只要买东西就可以得到了是吗！？那我去买了！');
      era.printButton('「等一下！先冷静下来吧！？」', 1);
      await era.input();
      await daiya.say_and_wait(
        `请不要阻止我！！身为里见家的赛${daiya.get_uma_sex_title()}，我绝不能逃避这个困难！`,
      );
      await era.printAndWait(
        `看来是${daiya.sex}对抗厄运的决心被点燃了，就像${daiya.sex}执着于破除魔咒一样。──不对，也有可能只是单纯不服气而已……`,
      );
      await daiya.say_and_wait('我的钱包就在……啊！？');
      await era.printAndWait(
        `这天，里见光钻似乎把钱包放在宿舍忘了带出门。多亏如此，才浇熄了${daiya.sex}想继续拼抽奖的念头。`,
      );
      era.println();
      wait_flag = sys_change_motivation(67, -1) || wait_flag;
      wait_flag = get_attr_and_print_in_event(
        67,
        undefined,
        0,
        JSON.parse('{"体力":300}'),
      );
    } else if (gacha === 1) {
      await era.printAndWait(
        '商店街人员「恭喜抽到一等奖～！奖品是『特等胡萝卜汉堡排』！」',
      );
      await era.printAndWait('获得了「特等胡萝卜汉堡排」。');
      await daiya.say_and_wait('哎呀，胡萝卜汉堡排……！');
      await daiya.say_and_wait(
        '这个豪迈的造型还真是不错。在我家吃胡萝卜的时候都会是切好的，所以我一直很期待能体验到这样的外食经验呢♪',
      );
      await daiya.say_and_wait('我可以在这根胡萝卜立着的状态下把它吃干净喔！');
      era.printButton('「从头到尾都立着！？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是呀♪首先要从胡萝卜上面的……实际吃给你看应该比较快。训练员，我们就一起吃吧！',
      );
      await daiya.say_and_wait('呵呵呵，让你见识一下……光钻的秘技！');
      await era.printAndWait(
        '里见光钻优雅地用着刀叉，在完全不弄倒胡萝卜的状态下，慢慢地吃着汉堡排。',
      );
      await daiya.say_and_wait('……感谢招待。不愧是特等的料理，真的很好吃！');
      era.printButton('「你的刀法真是太厉害了……！」', 1);
      await era.input();
      await daiya.say_and_wait(
        '嘿嘿嘿……因为我以前听说有吃胡萝卜汉堡排的时候，胡萝卜倒下的方位会充满不幸的魔咒。',
      );
      await daiya.say_and_wait(
        '所以就想着，不让胡萝卜倒下就不会有不幸的方位，才练成了这样的技术喔。',
      );
      era.printButton('「你是为了破除魔咒练的？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '是呀，每个人看到的时候都会很惊讶，还能当作一个聊天的话题呢。训练员要不要也试试看？',
      );
      await era.printAndWait(
        `后来，里见光钻传授 ${me.name} ${daiya.sex}的秘技，让 ${me.name} 学会了不让胡萝卜倒下的吃法！`,
      );
      era.println();
      wait_flag = sys_change_motivation(67, 2) || wait_flag;
      wait_flag = get_attr_and_print_in_event(
        67,
        new Array(5).fill(10),
        0,
        JSON.parse('{"体力":300}'),
      );
    } else if (gacha < 5) {
      await era.printAndWait(
        '商店街人员「二等奖～！！奖品是『一整堆胡萝卜』！」',
      );
      await era.printAndWait('获得了「一整堆胡萝卜」。');
      await daiya.say_and_wait('哇啊～得到了好多的胡萝卜呀♪');
      await daiya.say_and_wait('训练员，你带回去吧。毕竟抽奖券是训练员的嘛。');
      era.printButton('「这么多我哪吃得完！」', 1);
      await era.input();
      await daiya.say_and_wait('哎呀……不然就分给宿舍的大家好了。');
      await daiya.say_and_wait(
        '就这样直接吃也很无趣，做成料理之后再分给大家吧♪',
      );
      era.printButton('「你打算做什么呢？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '其实我一直有个想要做做看的料理……那就是胡萝卜鲷鱼烧！！',
      );
      await daiya.say_and_wait(
        '在鲷鱼烧里面加入大家最喜欢的胡萝卜当内馅。再加醋腌胡萝卜丝提味。',
      );
      await daiya.say_and_wait(
        '饼皮里面也加胡萝卜……再加一些胡萝卜片进去！就会变成橘色的可爱鲷鱼烧喔♪',
      );
      await daiya.say_and_wait(
        '然后再插一根完整的胡萝卜在上面！就像胡萝卜汉堡排那样！！',
      );
      era.printButton('「真、真是新潮的作法……」', 1);
      await era.input();
      await daiya.say_and_wait(
        '训练员也这么觉得吗？成功的话，我打算让它成为集团饮食部的新菜色呢♪',
      );
      await era.printAndWait(
        `因为这道料理新潮到让 ${me.name} 觉得不放心，所以 ${me.name} 提出要帮忙一起做。`,
      );
      await era.printAndWait(
        `隔天──里见光钻向 ${me.name} 报告，栗东宿舍的大家非常喜欢「胡萝卜鲷鱼烧」的事情。`,
      );
      era.println();
      wait_flag = sys_change_motivation(67, 1);
      wait_flag =
        get_attr_and_print_in_event(
          67,
          undefined,
          0,
          JSON.parse('{"体力":200}'),
        ) || wait_flag;
    } else {
      await era.printAndWait('商店街人员「三等奖～！奖品是『一根胡萝卜』！」');
      await era.printAndWait('获得了「一根胡萝卜」。');
      await daiya.say_and_wait(
        '一根……真的很抱歉，训练员。枉费你宝贵的抽奖券……',
      );
      await daiya.say_and_wait('应该是我的气势不够……');
      era.printButton('「那就吃这根胡萝卜补充精神吧！」', 1);
      await era.input();
      await daiya.say_and_wait('咦……？真的要给我吃吗……？');
      era.printButton('「你就吃吧！」', 1);
      await era.input();
      await daiya.say_and_wait('要把就这么唯一一根的珍贵胡萝卜给我……谢谢你。');
      await daiya.say_and_wait('…………呵呵。');
      await daiya.say_and_wait(
        '训练员送给我的胡萝卜……世界上唯一一根的只属于我的胡萝卜……',
      );
      await daiya.say_and_wait('吃起来一定是世界第一的美味吧♪');
      await era.printAndWait(
        '里见光钻开心比什么都重要。──但商店街的人却因为世界第一的美味这句话而倍感压力。',
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(
          67,
          undefined,
          0,
          JSON.parse('{"体力":200}'),
        ) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async race_end(daiya, me, callname, hook, extra_flag) {
    const edu_marks = new DaiyaEduMarks(),
      edu_weeks = era.get('cflag:67:育成回合计时');
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        daiya,
        me,
        edu_weeks,
        extra_flag,
        edu_marks,
      ))
    ) {
      if (extra_flag.rank === 1) {
        await print_event_name('竞赛获胜！', daiya);
        await daiya.say_and_wait(
          '成功了！我成功了！你有看到我的表现吗？训练员！',
        );
        await daiya.say_and_wait(
          '我完全发挥了现有的所有实力……我觉得我跑出了最好的表现！',
        );
        era.printButton('「真的跑出了最棒的表现哟！」', 1);
        era.printButton('「保持这个感觉继续向前进！」', 2);
        const ret = await era.input();
        if (ret === 1) {
          await daiya.say_and_wait(
            '哇啊……！谢谢你！能听到训练员这么说，我……！',
          );
          await daiya.say_and_wait(
            '呵呵……那我下一次一定要跑出更耀眼的表现！这是我和训练员之间的约定喔！',
          );
        } else {
          await daiya.say_and_wait('是！朝梦想直直前进……！');
          await daiya.say_and_wait(
            '呵呵，现在我有一种，好像伸手就能触及的感觉呢。',
          );
        }
      } else if (extra_flag.rank <= 5) {
        await print_event_name('竞赛上榜', daiya);
        await daiya.say_and_wait('上榜……总算是没有给里见家丢脸的成绩。');
        await daiya.say_and_wait('不过，距离获胜……还差了一步呢。');
        era.printButton('「已经是很棒的结果了」', 1);
        era.printButton('「把这次经验活用在下次比赛吧！」', 2);
        const ret = await era.input();
        if (ret === 1) {
          await daiya.say_and_wait('呵呵，谢谢夸奖♪');
          await daiya.say_and_wait(
            '可是，我的梦想不只是这样而已。我要变得更强更强……！',
          );
        } else {
          await daiya.say_and_wait('嗯！我们一起同心协力，下次一定要赢！');
          await daiya.say_and_wait(
            '回学园之后就要开始作战会议了呢！一定要彻底找出我现在的弱点！',
          );
        }
      } else if (extra_flag.rank <= 10) {
        await print_event_name('竞赛败北', daiya);
        await daiya.say_and_wait('…………这就是我现在的实力……');
        await daiya.say_and_wait('……很抱歉。我辜负了你的期望。');
        await daiya.say_and_wait(
          '实力、步调的预测都失误……看来我还有很多课题要完成呢。',
        );
        era.printButton('「我们一起解决吧」', 1);
        era.printButton('「一起朝目标重新出发吧」', 2);
        const ret = await era.input();
        if (ret === 1) {
          await daiya.say_and_wait('好的！就要再麻烦你了！训练员！');
          await daiya.say_and_wait(
            '一定要不停锻炼、不停锻炼……下一次一定要跑出最耀眼灿烂的表现！',
          );
        } else {
          await daiya.say_and_wait(
            '嗯嗯，这是当然的！我还没有丢失该实现的梦想呢。',
          );
          await daiya.say_and_wait('为了实现梦想……一定要再次精进自己！');
        }
      } else if (extra_flag.rank > 10) {
        await print_event_name('下次不会输了！', daiya);
        await daiya.say_and_wait('……没能做到。没能跑赢。我又输了……');
        await daiya.say_and_wait(
          '我辜负了好多人的期望。父亲、母亲、里见家的所有人……还有训练员也是。',
        );
        await daiya.say_and_wait(
          '……我会抱持着从零开始的心态努力的。如果之前的努力都还不够，那我就要更努力、更努力……所以──',
        );
        era.printButton('「不用这么焦急」', 1);
        era.printButton('「一起两人三脚向前冲刺！」', 1);
        const ret = await era.input();
        if (ret === 1) {
          await daiya.say_and_wait(
            '没关系的！为了下次一定能跑赢，无论是什么样的训练，我都一定能完成的……！',
          );
          era.printButton('「那就先深呼吸吧」', 1);
          await era.input();
          await daiya.say_and_wait('是！');
          await daiya.say_and_wait('吸……吐……！吸……吐……');
          era.printButton('「……冷静下来了吗？」', 1);
          await era.input();
          await daiya.say_and_wait('……啊！是、是。');
          era.printButton('「不要逞强，继续往前迈进吧」', 1);
          await era.input();
          await daiya.say_and_wait('训练员……！……嗯！');
          await daiya.say_and_wait(
            '嗯！无论多少次，我都会重新爬起来的……！我想要和你一起努力！',
          );
        } else {
          await daiya.say_and_wait('那么……总之现在需要一条可以缠脚的布呢！');
          await daiya.say_and_wait('我现在就去找！');
          await era.printAndWait(
            '……虽然『两人三脚』不过就只是比喻而已，但似乎让她打起了精神。再继续一起努力吧──',
          );
        }
      }
    }
  }

  async train_fail(daiya, me, callname, hook, extra_flag) {
    extra_flag['args'] = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    await this.print_fail_info_in_train(extra_flag.train, extra_flag.fumble);
    if (extra_flag.train !== attr_enum.intelligence) {
      if (extra_flag.fumble) {
        await print_event_name('严禁逞强！', daiya);
        await era.printAndWait([
          '里见光钻在训练中受伤了，所以 ',
          me.get_colored_name(),
          ` 赶紧带${daiya.sex}来到保健室。`,
        ]);
        await daiya.say_and_wait('好痛……！');
        await daiya.say_and_wait(
          '只是稍微动一下而已就……看来伤势可能比我想像的还要严重……',
        );
        era.printButton('「休息一阵子吧」', 1);
        await era.input();
        await daiya.say_and_wait(
          '可是……一直静养休息的话，感觉会离梦想越来越遥远的。',
        );
        await daiya.say_and_wait(
          '现在最恰当的选择或许是休息没有错，但是我……我想要克服这个难关，让自己有更大的进步……！',
        );
        await daiya.say_and_wait(
          '我一定会克服疼痛的问题给你看的……可不可以就让我继续做训练呢？',
        );
        era.printButton('「我不会让你勉强自己的」', 1);
        era.printButton('「……知道了，我就相信你吧」', 2);
        hook.arg = (await era.input()) === 1;
        if (hook.arg) {
          await daiya.say_and_wait(
            '可是，在我休养的时候，比赛中的其他对手们都会更加进步──',
          );
          era.printButton('「你一定能追过她们的」', 1);
          await era.input();
          await daiya.say_and_wait('……我知道了。凡事都不能过于心急，对吧？');
          await daiya.say_and_wait(
            '虽然心情上会觉得很不甘心，但这份心情就等伤势复原后再用在训练上吧。',
          );
          await era.printAndWait(
            '里见光钻在处理完伤势后，一脸遗憾地回宿舍了。',
          );
          hook.arg = 0;
        } else if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await daiya.say_and_wait('谢谢！那我们回到赛道上吧。');
          await daiya.say_and_wait('──没事的，就这点小伤而已……！', true);
          await daiya.say_and_wait('唔！？', true);
          await daiya.say_and_wait('…………！');
          era.printButton('「你没事吧！？」', 1);
          await era.input();
          await daiya.say_and_wait('──看来是我想得太天真了。真的很抱歉……');
          await era.printAndWait(
            `因为逞强的关系，反而让${daiya.sex}的伤势恶化，延长了复原所需要的时间。`,
          );
          hook.arg = -1;
        } else {
          await daiya.say_and_wait('──这点程度的疼痛我还忍得住！', true);
          await daiya.say_and_wait(
            '再来就是小心不要造成太大的负担，一步一步……慢慢地去完成！',
            true,
          );
          await daiya.say_and_wait('……呀啊啊啊啊啊啊！');
          await daiya.say_and_wait(
            '呼、呼……！呵呵，我成功完成训练了……！我没有败给疼痛……！',
          );
          await era.printAndWait(
            '里见光钻用强烈的克己之心，在注意不给伤势造成负担的状况下，顺利完成了训练。',
          );
          hook.arg = 1;
        }
      } else {
        await print_event_name('保重身体！', daiya);

        await era.printAndWait([
          me.get_colored_name(),
          ' 把受伤的里见光钻带来保健室。',
        ]);
        await daiya.say_and_wait('训练员，谢谢你这么照顾我。');
        await daiya.say_and_wait('可是……我还是觉得这点伤势是可以继续训练的。');
        await daiya.say_and_wait(
          '伤势也已经做过紧急处理了，现在是不是可以做一点……训练了呢？',
        );
        era.printButton('「大意是很危险的哟」', 1);
        era.printButton('「不然就谨慎一点训练看看好了」', 2);
        hook.arg = (await era.input()) === 1;
        if (hook.arg) {
          await daiya.say_and_wait(
            '可是我几乎都不觉得痛了呀。只要小心一点就不会有问题的……！',
          );
          era.printButton('「还是在伤势恶化之前打消念头吧」', 1);
          await era.input();
          await daiya.say_and_wait(
            '……说得也是呢。轻伤也是有可能不小心变成重伤的。',
          );
          await daiya.say_and_wait('真抱歉……那我今天就先回去好好静养了。');
          await era.printAndWait(
            `里见光钻因为充满干劲，所以相对地也就对不能训练感到很失望，但${daiya.sex}还是乖乖地回宿舍休息了。`,
          );
          hook.arg = 0;
        } else if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await daiya.say_and_wait('嗯！我想把今天的训练内容全都做完！');
          await era.printAndWait([
            me.get_colored_name(),
            ` 选择尊重里见光钻的想法，让${daiya.sex}继续训练，但──`,
          ]);
          await daiya.say_and_wait('……呼……呼……');
          era.printButton('「……果然还是会痛的吧？」', 1);
          await era.input();
          await daiya.say_and_wait('……唔！？');
          await daiya.say_and_wait(
            '……是的，其实还是会痛……很抱歉，是我想得太天真了……',
          );
          await era.printAndWait([
            '这次 ',
            me.get_colored_name(),
            ' 决定立刻中止训练，让里见光钻好好地休养。',
          ]);
          hook.arg = -1;
        } else {
          await daiya.say_and_wait('……呼！这样就做完了！');
          era.printButton('「受伤的地方没事吗？」', 1);
          await era.input();
          await daiya.say_and_wait('没事！你看！');
          await daiya.say_and_wait(
            '看来做一些轻微的运动还是没问题的呢！呵呵，真是太好了！',
          );
          await era.printAndWait([
            '虽然 ',
            me.get_colored_name(),
            ` 很不放心，但${daiya.sex}看起来确实没有不适。可见伤势的确是非常轻微的。`,
          ]);
          hook.arg = 1;
        }
      }
    }
  }

  async train_success(daiya, me, callname, hook, extra_flag) {
    era.print(
      `${daiya.name} 的 ${attr_names[extra_flag.train]} 训练顺利成功了……`,
    );
    if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
      era.println();
      await print_event_name('额外的自主训练', daiya);
      const chara68_talk = get_chara_talk(68);
      await era.printAndWait('结束了一整天的训练后──');
      await daiya.say_and_wait('辛苦了，训练员。今天也谢谢你的指导。');
      await daiya.say_and_wait('……啊。');
      await era.printAndWait(
        '我追着里见光钻的视线看过去……看到了正在努力做训练的北部玄驹。',
      );
      await chara68_talk.say_and_wait(
        '呼、呼……！还不够还不够！我要再多跑一圈！',
      );
      await daiya.say_and_wait(
        '……那个，不好意思。我还是决定要做额外训练了，可以吗？',
      );
      era.printButton('「还是不要太过勉强……」', 1);
      await era.input();
      await daiya.say_and_wait('……其实我昨天才刚看过小北比赛的影片──');
      await daiya.say_and_wait(
        '小北现在的表现真的变得越来越快，实力越来越坚强了……',
      );
      await daiya.say_and_wait(
        '虽然我承认是真的有点心急没错，但是……更多的是想要奔跑的冲动！',
      );
      await daiya.say_and_wait('有种斗志被燃起的感觉！所以……拜托了！');
      era.printButton('「那就来跑吧！」', 1);
      era.printButton('「这股斗志还是留着明天再用吧」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await daiya.say_and_wait(`嘿嘿，不愧是训练员！`);
        await daiya.say_and_wait('谢谢！那我也去跑步了！');
        await daiya.say_and_wait('──小北。我……不会输给你的！');
        await era.printAndWait(
          '于是，里见光钻就这样怀抱着对对手的斗志，完成了她的额外训练。',
        );
        era.println();
      } else {
        await daiya.say_and_wait(
          '留着明天再用吗……？唔唔，可是我没有自信自己一定忍得住……！',
        );
        era.printButton('「把斗志储蓄下来，最后再一次爆发吧」', 1);
        await era.input();
        await daiya.say_and_wait(
          '……我明白了。那就这么说好了哦。明天一定要让我彻底训练……！',
        );
        await daiya.say_and_wait(
          '……对了！不然我们现在就回训练员室一起看比赛的影片吧！',
        );
        await daiya.say_and_wait(
          '这样的话，心里的那股冲动就会越来越高昂，明天一定就能非常地努力了！',
        );
        era.printButton('「那我们就一起看吧！」', 1);
        await era.input();
        await daiya.say_and_wait('嗯♪');
        await era.printAndWait(
          '于是，在里见光钻热情的解说下，我们一起看完了以北部玄驹为重点的比赛影片。',
        );
        era.println();
      }
      era.println();
    }
  }

  async week_end(daiya, me, callname, hook, extra_flag, event_object) {
    return await daiya_week_end(daiya, me, hook, event_object);
  }

  async week_start(daiya, me, callname, hook, extra_flag, event_object) {
    const edu_marks = new DaiyaEduMarks(),
      edu_weeks = era.get('cflag:67:育成回合计时'),
      flags = { wait: false };
    if (week_start_handlers[edu_weeks]) {
      await week_start_handlers[edu_weeks](daiya, me, flags, () =>
        add_event(hook.hook, event_object),
      );
    } else if (edu_marks.after_begin === 1) {
      edu_marks.after_begin++;
      await week_start_handlers[-1](daiya, me, flags);
    } else {
      return await super.week_start(
        daiya,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    flags.wait && (await era.waitAnyKey());
  }
};
