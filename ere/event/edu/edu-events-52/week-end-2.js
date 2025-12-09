const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { attr_enum } = require('#/data/train-const');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47] = async (urara, me, in_urara, callname, edu_marks) => {
    await print_event_name('意外的年末相谈！', urara);
    await in_urara.say_as_unknown_and_wait([
      '今天的乌拉拉早早地来到了空无一人的训练室，独自一人的',
      urara.sex,
      '是有什么心事吗？',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '至于',
      urara.sex,
      '想要向训练员',
      me.get_adult_sex_title(),
      '（您）咨询什么，就请亲自去聆听吧。',
    ]);
    era.drawLine();
    await era.printAndWait([
      '独自走在节后的街道上，',
      me.get_colored_name(),
      ' 偶尔停下来揉揉发酸的指节，一路跌跌撞撞地回到了特雷森。',
    ]);
    await era.printAndWait(
      '被残留的节日氛围与依旧热情的商店街邻里裹挟着，拿到手的东西又一次严重超额了。',
    );
    await era.printAndWait([
      '如果有 ',
      urara.get_colored_name(),
      ' 在就好了。就算负重会只多不少，但至少回来的时候心情上也会好些吧。',
    ]);
    await era.printAndWait([
      '无奈地搓着僵硬的手，',
      me.get_colored_name(),
      ' 推开了训练员室的门，但想象中无人的清冷却并没有到来。',
    ]);
    await era.printAndWait(
      '先来的人已经打开了室内的暖炉与照明，前几天还没来得及收起的圣诞装饰也在闪闪发光。',
    );
    await era.printAndWait(
      '穿着毛茸茸的冬衣，粉色的小动物正在暖光的包围下欢快地收拾着屋子。',
    );
    await era.printAndWait([
      '而看见推门而入的 ',
      me.get_colored_name(),
      '，等候多时的小',
      urara.get_uma_sex_title(),
      '从沙发上俏皮的坐起，对',
      urara.sex,
      '的训练员眨着樱粉色的眼睛。',
    ]);
    await urara.say_and_wait([
      callname,
      ' 原来去商店街了啊！快进来吧，外面还很冷的！',
    ]);
    await era.printAndWait(
      '意想不到的惊喜。上一秒还挂念着自己的担当，下一秒就真出现了。',
    );

    era.printButton('「哦……哦！」', 1);
    await era.input();

    await era.printAndWait([
      '回应着跑过来帮忙收拾东西的小',
      urara.get_uma_sex_title(),
      '，',
      me.get_colored_name(),
      ' 似乎察觉了有哪里不对。',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 会来收拾训练室并不意外，但另一方面比起耐心等人',
      urara.sex,
      '也更喜欢主动出击一些。',
    ]);
    await era.printAndWait([
      '而从进屋前就摆在桌上的饮料与堆成小山的饼干也不难看出，这次的小',
      urara.get_uma_sex_title(),
      '的确是在专门等 ',
      me.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '难道',
      urara.sex,
      '也想和 ',
      me.get_colored_name(),
      ' 过圣诞节？可是 ',
      urara.get_colored_name(),
      ' 想的话肯定节日当天就找过来了，这是准备什么？',
    ]);
    await urara.say_and_wait([
      callname,
      '，在发什么呆呢！屋子已经收拾好了，快点坐下吧！',
    ]);
    await era.printAndWait([
      '打断了 ',
      me.get_colored_name(),
      ' 的思考，小',
      urara.get_uma_sex_title(),
      '把发呆的客人按在椅子上，将桌上的那盘饼干小山推到 ',
      me.get_colored_name(),
      ' 面前。',
    ]);
    await era.printAndWait([
      '眼前这些造型奇特的曲奇，虽然仅保留着基础的辨识度，但却散发着节日促销品不会有的自然香气。',
    ]);

    era.printButton('「嗯……这个是？」', 1);
    await era.input();

    await urara.say_and_wait([
      '这是小兔子！这是小猫咪！这是胡萝卜！这是……',
      sys_get_colored_callname(52, 61),
      ' 和 ',
      sys_get_colored_callname(52, 30),
      '？算了，不重要呢！',
    ]);
    await era.printAndWait([
      '面对 ',
      me.get_colored_name(),
      ' 一语双关的发问，',
      urara.get_colored_name(),
      ' 想了想后，决定先回答那个比较具象的问题。',
    ]);
    await era.printAndWait([
      '好像还混进了不得了的东西，不过倒也正如 ',
      urara.get_colored_name(),
      ' 所说，这不是重点。',
    ]);
    await era.printAndWait([
      '在担当的樱瞳期待的注视下，',
      me.get_colored_name(),
      ' 挑起盘中的一块成色比较好曲奇放进了嘴中。',
    ]);
    await urara.say_and_wait([
      '嘿嘿～这些都是我做的哦！大家的份我都已经送出去了，所以这些都是 ',
      callname,
      ' 的！',
    ]);
    await urara.say_and_wait([
      callname,
      '，乌拉拉做的饼干好吃吗？有什么感想吗？',
    ]);
    await era.printAndWait([
      '随着带有奶香的甜味在味蕾上逐渐涂抹均匀，不由自主地，',
      me.get_colored_name(),
      ' 将手伸向了盘中的下一块。',
    ]);
    await era.printAndWait([
      '这个相当好吃。哪怕造型难以辨认，作为饼干本身也绝对不输 ',
      me.get_colored_name(),
      ' 最近尝过的任何一种手工礼品。',
    ]);
    await era.printAndWait([
      '唯一的问题，恐怕只有 ',
      urara.get_colored_name(),
      ' 不输于商店街的各位的热情吧——这做得也太多了。',
    ]);
    await era.printAndWait([
      '将第二块饼干轻轻咽下，',
      me.get_colored_name(),
      ' 对认真等待着的小',
      urara.get_uma_sex_title(),
      '半开玩笑地给出了自己的最高评价。',
    ]);

    era.printButton(
      '「能做出这个味道，乌拉拉以后一定能成为一位好妻子吧。」',
      1,
    );
    await era.input();

    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait(
        '诶？啊、诶？嗯！乌拉拉以后会成为一个好妻子的！',
      );
      await urara.say_and_wait([
        '所以 ',
        callname,
        ' 以后也会成为一个好丈夫的！诶嘿嘿～嘿嘿……呜……',
      ]);
      await era.printAndWait([
        '因害羞折起耳朵，随着逐渐走低的尾音，',
        urara.get_colored_name(),
        ' 本就娇小的身体肉眼可见的又缩了一圈。',
      ]);
      await urara.say_and_wait(
        '就算我不太懂，但妈妈说过，开这样的玩笑，要考虑到对方会认真的可能性哦……？',
      );
      await era.printAndWait([
        '从饼干小山后探出半张紧张又通红的小脸，',
        urara.get_colored_name(),
        ' 三分无措七分羞涩的说道。',
      ]);
      await era.printAndWait('……真的是不明白吗？');
    } else {
      await urara.say_and_wait(['诶？', callname, '！这样的说法可不行哦！']);
      await urara.say_and_wait(
        '虽然不太明白，但是妈妈告诉过我，这样的玩笑不可以随便开！',
      );
      await era.printAndWait([
        '尽管嘴上说着不明白，可 ',
        urara.get_colored_name(),
        ' 的身体却很诚实的将羞红的脸藏在了曲奇山的背面。',
      ]);
      await urara.say_and_wait([
        callname,
        ' 该不会对很多人说过这样的话吧？不可以哦！大家当真了就不好了!',
      ]);
      await era.printAndWait([
        '仿佛在责备不检点的大人，从遮挡后探出的一对粉色耳套正慌乱地对 ',
        me.get_colored_name(),
        ' 指指点点着。',
      ]);
      await era.printAndWait('……这不是很懂吗？');
    }
    era.println();
    await era.printAndWait([
      '不过等下，刚才是不是说错话了……不对！这是在对 ',
      urara.get_colored_name(),
      ' 说什么呢？！',
    ]);
    await era.printAndWait([
      '收到了担当意料之外的冲击性回复，',
      me.get_colored_name(),
      ' 在产生了一丝奇妙的欣喜的同时，也稍微被自己的发言恶心到了。',
    ]);
    await era.printAndWait([
      '今天的 ',
      urara.get_colored_name(),
      ' 本来就够奇怪了，自己竟然还在开这么直球的奇怪玩笑，这不是把话聊死了吗？',
    ]);
    await era.printAndWait([
      '然而就在 ',
      me.get_colored_name(),
      ' 为自己的轻率而发愁时，坐在桌对面的 ',
      urara.get_colored_name(),
      ' 却主动拿起了桌上的一块饼干。',
    ]);
    await urara.say_and_wait([
      '对了，',
      callname,
      '，是因为什么才成为的训练员呢？',
    ]);
    await era.printAndWait([
      '此刻 ',
      me.get_colored_name(),
      ' 有点想反问为何是这个话题，不过既然提问人是小 ',
      urara.get_colored_name(),
      '，那倒也没必要急着翻答案。',
    ]);
    await era.printAndWait([
      '就算现在遇见不清不楚的事，以后也总有机会明白其中的用意，跟 ',
      urara.get_colored_name(),
      ' 相处总会这样。',
    ]);

    era.printButton(
      '「不过我先确认一下，兴趣和热情，应该不是乌拉拉想听的吧？」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '我不会怀疑 ',
      callname,
      ' 的心情的，但我想知道 ',
      callname,
      ' 想得到什么！',
    ]);
    await era.printAndWait([
      '不问梦想问欲望啊，',
      urara.get_colored_name(),
      ' 原来是这么锐利的人吗？现在的小',
      urara.get_uma_sex_title(),
      '真是不容小觑。',
    ]);
    await era.printAndWait([
      '要跟成长时节的青春',
      urara.get_teen_sex_title(),
      '讲大人充斥着世俗欲望的故事啊，嗯……',
    ]);
    await era.printAndWait([
      '简单整理了思路，像叹息般深吸一口气，',
      me.get_colored_name(),
      ' 在 ',
      urara.get_colored_name(),
      ' 清澈的注视下慢慢吐出了第一个字。',
    ]);

    era.drawLine({ content: '讲故事时间' });
    await era.printAndWait(
      '没什么特别的，回到最初，那个人想要的东西很单纯，稳定的工作、工资，或者说钱？',
    );
    await era.printAndWait([
      me.sex,
      '只是在后来选择的时候，走了专攻的方向里，那个最稳定又多金的职业罢了。',
    ]);
    await era.printAndWait(
      '至少在当时，或者现在也有？这个职业在大众认知中是十分优秀的，而那个人恰好有些天赋。',
    );
    await urara.say_and_wait('是这样啊，是因为家里缺钱吗？');
    await era.printAndWait(
      '没有哦，那个人出身并不贫寒，也没有生活所迫和巨大外部压力，只不过……',
    );
    await era.printAndWait(
      '不过是曾经几度路过琳琅满目的橱窗，却没机会买下哪怕一件自己想要的东西，仅此而已。',
    );
    await era.printAndWait([
      '所以，嗯……说到底只是缺乏安全感和满足感吧，',
      me.sex,
      '或许，是想借此驱散缠绕自过去的不安罢了。',
    ]);
    await urara.say_and_wait('可是那个人最后也实现愿望了呦？');
    await era.printAndWait([
      '但是那个人很缺乏志气嘛。',
      me.sex,
      '为了走到现在这一步费了很大功夫，中途好几次都差点放弃。',
    ]);
    await era.printAndWait([
      '是三女神的眷顾？又或者',
      me.sex,
      '胆小到不敢放弃自己？',
    ]);
    await era.printAndWait(
      '结果呢，一路上跌跌撞撞的那个人还是凭此进入了中央，有惊无险过头了啊。',
    );
    await urara.say_and_wait('那……那个人现在的想法呢？');
    await era.printAndWait(
      '这个职业很好哦？包吃包住，福利待遇社会地位都不错，虽然薪资入账有点奇怪，但也满足了。',
    );
    await urara.say_and_wait('嗯嗯！也就是说，那个人也拿到一着了对吧！');
    await era.printAndWait([
      '以前的话，或许会说没有吧。不过现在，',
      me.sex,
      '大概马上就能找到了自己想要的一着了——',
    ]);
    era.drawLine();

    await me.say_and_wait(
      '而且这还多亏了那个人现在有了一位特别的担当啊。',
      true,
    );
    await era.printAndWait([
      '没能将结语说出口，',
      me.get_colored_name(),
      ' 苦笑着结束了对过往的叙述。抬起头来，预想中的嫌弃、怜悯、不解……',
    ]);
    await era.printAndWait([
      '通通没有出现。',
      urara.get_colored_name(),
      ' 没有流露出任何平日里的倾向，',
      urara.sex,
      '只是在很认真的听着 ',
      me.get_colored_name(),
      ' 的故事。',
    ]);
    await era.printAndWait([
      '但这下可衰了，就算看不出表情，',
      urara.sex,
      '也一定在思考自己的训练员竟是如此婆妈油腻的大人吧……',
    ]);
    await urara.say_and_wait([
      '嗯！乌拉拉知道了！',
      callname,
      ' 很清爽呢！就像占领地球只为看风景的反派boss那样！',
    ]);
    await me.say_and_wait(
      '……啊？清爽？！反派boss又什么啊？乌拉拉，你的训练员虽然不是很懂，但是也不是很明白哦——',
      true,
    );
    await era.printAndWait([
      '可惜的是，没能给进行着反复愣住的 ',
      me.get_colored_name(),
      ' 以直接解答，',
      urara.get_colored_name(),
      ' 只是在开心地笑着。',
    ]);
    await era.printAndWait([
      '并没有对因过往变得抽象的大人表露出嫌弃、怜悯与不解，只是纯粹的、因重要的某人而开心的笑容。',
    ]);
    await urara.say_and_wait([
      '哼哼～',
      callname,
      ' 通过了解『乌拉拉』帮助了我，今天乌拉拉也更多了解了『',
      callname,
      '』！',
    ]);
    await urara.say_and_wait([
      '这样乌拉拉也知道了，一些很难懂的事情，要怎样讲 ',
      callname,
      ' 听才能明白呢！',
    ]);
    await era.printAndWait([
      '看着小马娘高兴的笑容，',
      me.get_colored_name(),
      ' 终于明白了。什么嘛，胡思乱想的大人可真是笨蛋。',
    ]);

    era.printButton(
      '「乌拉拉，下次还想要知道什么的话，就直接问吧，你的训练员不会藏着掖着的。」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '但是这样的奔跑步调很棒哦！就像 ',
      sys_get_colored_callname(52, 30),
      ' 的故事书一样！',
    ]);
    await era.printAndWait([
      '这孩子莫非真的是天使？斟酌着小担当似乎的带着深意的话语，',
      me.get_colored_name(),
      ' 将手伸向了盘中的下一块饼干。',
    ]);
    await era.printAndWait([
      '与 ',
      me.get_colored_name(),
      ' 一同顿了顿，',
      urara.get_colored_name(),
      ' 像是终于鼓起了勇气般再次抬头看向了 ',
      me.get_colored_name(),
      '。',
    ]);
    await urara.say_and_wait([
      callname,
      '，最近我梦到了一位虽然很像乌拉拉，但却很孤单的',
      urara.get_uma_sex_title(),
      '。',
    ]);
    await urara.say_and_wait([
      '梦里的',
      urara.sex,
      '并没有在奔跑，离大家也都有一段距离，所以乌拉拉想要去邀请',
      urara.sex,
      '。',
    ]);
    await urara.say_and_wait([
      '但是，',
      urara.sex,
      '的笑容真的很悲伤，一次又一次的远离着我，最后彻底消失不见了。',
    ]);
    await urara.say_and_wait([
      '明明相貌都是相同的，乌拉拉难受的话可以哭出来，',
      urara.sex,
      '却只会那样一言不发的笑。',
    ]);
    await era.printAndWait([
      '低头看着自己的双手，虽然笑容还勉强留在脸上，',
      urara.get_colored_name(),
      ' 的耳朵却已经失落地垂了下来。',
    ]);
    await urara.say_and_wait([
      '我无论如何都不想让',
      urara.sex,
      '继续孤零零的，但是',
      urara.sex,
      '好像只觉得那样就好了……',
    ]);
    await urara.say_and_wait([
      '在觉得很无力的时候……',
      callname,
      ' 会怎么做呢？',
    ]);

    await in_urara.say_as_unknown_and_wait([
      '……真是突然又关键的咨询，那训练员',
      me.get_adult_sex_title(),
      '（您）的意见是？',
    ]);
    era.printButton(
      '「我想想……不管有多难，向着自己希望的方向前进吧。」（草地适性提升）',
      1,
    );
    era.printButton(
      '「嗯……学会享受当下的困境，其实也是一种幸福哦？」（中&长距离适性提升）',
      2,
    );
    if ((await era.input()) === 1) {
      await urara.say_and_wait([
        '可是这样做，要是',
        urara.sex,
        '变得更加伤心的话……',
      ]);
      await me.say_and_wait(
        '或许乌拉拉现在还不能认同，但在某处或多或少的与人发生争执是没法避免的哦？',
      );
      await me.say_and_wait([
        '而且乌拉拉不是还没向那位',
        urara.get_uma_sex_title(),
        '传达出自己的心声吗？既然还没开始，也用不着害怕。',
      ]);
      await era.printAndWait([
        '就和 ',
        urara.get_colored_name(),
        ' 的日常一样，整理好心情，接下来大胆的去前进就好。',
      ]);
      await era.printAndWait([
        '从盘中挑出一块似乎在微笑的「',
        sys_get_colored_callname(52, 61),
        '」的饼干，',
        me.get_colored_name(),
        ' 笑着将其塞进了 ',
        urara.get_colored_name(),
        ' 的小嘴中。',
      ]);
      await era.printAndWait([
        '慢慢地将 ',
        me.get_colored_name(),
        ' 的话语同饼干一起咀嚼，想起了什么的 ',
        urara.get_colored_name(),
        ' 眼神也渐明快起来——',
      ]);
      edu_marks.gad++;
    } else {
      await urara.say_and_wait('当下的困境……？');
      await me.say_and_wait(
        '乌拉拉第一次在交朋友上受挫了，但是解开困境之后，回过头来除成长外也会感到开心吧。',
      );
      await me.say_and_wait(
        '而且乌拉拉绝对不想就这么放弃吧？乌拉拉的目标是希望大家变得开心不是吗？',
      );
      await era.printAndWait([
        '就像 ',
        urara.get_colored_name(),
        ' 前进的步调，只要咬紧牙关，烦恼也能让人会心一笑。',
      ]);
      await era.printAndWait([
        '从盘中挑出一块脸颊似乎鼓鼓的「',
        sys_get_colored_callname(52, 30),
        '」的饼干，',
        me.get_colored_name(),
        ' 笑着将其放在了 ',
        urara.get_colored_name(),
        ' 的手心里。',
      ]);
      await era.printAndWait([
        '若有所思的看着手心里的饼干，',
        urara.get_colored_name(),
        ' 像是明白了什么般笑着将其放进了嘴中——',
      ]);
      edu_marks.dad++;
    }
    era.println();
    await era.printAndWait([
      '看来，小',
      urara.get_uma_sex_title(),
      '已经在心中想好答案了。满意对 ',
      urara.get_colored_name(),
      ' 点点头，',
      me.get_colored_name(),
      ' 将目光重新放回了桌面。',
    ]);
    await era.printAndWait(
      '随着时间的推进，就连中间那座心灵隔阂般的点心山，也在两人的互相倾诉中不知不觉消失了。',
    );
    await era.printAndWait([
      '但正因如此，现在的时间也不早了，与 ',
      me.get_colored_name(),
      ' 同时意识到这点的 ',
      urara.get_colored_name(),
      ' 也向 ',
      me.get_colored_name(),
      ' 肩后的挂钟投去了视线。',
    ]);
    await urara.say_and_wait([callname, '，接下来……啊！已经这个时间了！']);
    await era.printAndWait([
      '撇了眼表，嗯，已经到「宿舍门禁赏」的时间了。看到 ',
      me.get_colored_name(),
      ' 伸直腰板，',
      urara.get_colored_name(),
      ' 也心领神会的站了起来。',
    ]);
    await era.printAndWait([
      '但就在准备离开训练员室后跑起来之前，',
      urara.get_colored_name(),
      ' 有些恋恋不舍的插入了分开前的最后一个问题。',
    ]);
    await urara.say_and_wait([
      '对了！',
      callname,
      '，接下来就是新年了！我们也可以像今晚这样吗？',
    ]);
    await urara.say_and_wait([
      '我还会准备很多点心的！所以那个时候，',
      callname,
      ' 还有时间和我也一起玩吗？',
    ]);

    era.printButton('「只要乌拉拉想的话，那就是随时都可以啊！」', 1);
    await era.input();

    await era.printAndWait([
      '在两人一起热闹的冲进冷风前，',
      me.get_colored_name(),
      ' 满足地向 ',
      urara.get_colored_name(),
      ' 笑着回应道。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '但是如果下次，乌拉拉准备的点心能更适量一些，就更完美了吧……',
    );
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait(
      '能够更加了解您，今天的乌拉拉很满足呢，也再次感谢您的耐心。',
    );
    await in_urara.say_as_unknown_and_wait(
      '但既然乌拉拉已经安心了，那接下来我还想请您保持解答我的一个问题。',
    );

    await in_urara.say_as_unknown_and_wait(
      '所以，上面那些钱什么的发言，是您的真心话，或者说是您的真话吗？',
    );
    era.printButton(
      '「是真的——这么说的话，庸俗还是会惹人生气啊。」（好感+20）',
      1,
    );
    era.printButton(
      '「至少我选择了，没有变成自己最讨厌的……大人？」（爱慕+10）',
      2,
    );
    const ret = await era.input();
    await in_urara.say_as_unknown_and_wait(
      '是吗？那我们的关系也到此为止了——开玩笑的，我不那么讨厌您。',
    );
    await in_urara.say_as_unknown_and_wait([
      '嗯，是『讨厌』。我讨厌大部分人类与',
      urara.get_uma_sex_title(),
      '，只是没那么讨厌您罢了，至少您足够真诚。',
    ]);
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait(
      '哈啊……您注意到了吧，现在的乌拉拉身上，正展现着不可思议的能力。',
    );
    await in_urara.say_as_unknown_and_wait([
      urara.get_uma_sex_title(),
      '身上的未解之谜多如繁星，或许也只有三女神能说清乌拉拉身上有怎么的加护。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '我不喜欢没有根据的奇迹，信任来历不明的希望也只会让人受伤。',
    );
    await in_urara.say_as_unknown_and_wait(
      '不是泼冷水，而是我曾经也……抱歉，并非想要隐瞒，只是天方夜谭要从哪讲起呢……',
    );
    await in_urara.say_as_unknown_and_wait(
      '但是您的确正引导着担当的未来，所以，也请您尽量为自己的选择负起责任。',
    );
    await in_urara.say_as_unknown_and_wait([
      '而那位孤独的',
      urara.get_uma_sex_title(),
      '……我想，乖僻的',
      urara.sex,
      '应该一个人也没关系吧。',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '……会习惯的，总会习惯的，一切的一切……',
    );
    era.println();
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(
        52,
        undefined,
        0,
        JSON.parse('{"体力":400}'),
        true,
      ) || wait_flag;
    sys_change_weight(52, 20);
    sys_change_attr_and_print(0, attr_enum.hp, 400);
    sys_change_weight(0, 20);
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};
