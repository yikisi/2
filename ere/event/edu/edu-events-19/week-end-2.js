const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  diamond_lord,
  say_by_diamond_lord,
} = require('#/event/edu/edu-events-19/snippets');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 32] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach &&
      era.get('cflag:0:位置') !== era.get('cflag:19:位置')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('第三年夏合宿结束', digital);
    await era.printAndWait([
      '在这次的夏合宿，',
      digital.get_colored_name(),
      ' 真的是特别努力了，',
      me.get_colored_name(),
      ' 从来没见过如此认真的 ',
      digital.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '与前辈 ',
      get_chara_talk(15).get_colored_name(),
      ' ',
      get_chara_talk(58).get_colored_name(),
      ' 的约定，与后辈黑船的对决，两个因素使现在 ',
      digital.get_colored_name(),
      ' 的状况前所未有地好！',
    ]);
    await digital.say_and_wait([
      callname,
      '，我感觉到了，这种感觉，就像是被所有人加持了的勇者！这样一来，就能和',
      digital.sex,
      '们对决了！',
    ]);
    await me.say_and_wait('能赢吗？');
    await digital.say_and_wait(
      '说实话，只有不安！那三位，无论是谁感觉我都没有获胜的把握……',
    );
    await digital.say_and_wait(
      '所以，我能做到的只有凭借一直以来的丰富多样的经验了！',
    );
    await era.printAndWait([
      '无论立在前面的墙壁有多高，',
      digital.get_colored_name(),
      ' 都没有迷茫。',
    ]);
    await era.printAndWait('但是，在那天夜里……');
    await era.printAndWait('却传来了黑船无法参赛的消息。');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 那天晚上，把 ',
      me.get_colored_name(),
      ' 叫了出来，在深夜的海滩上，垂着头一言不语。',
    ]);
    await era.printAndWait([
      '等过了很久，',
      digital.get_colored_name(),
      ' 才开口——',
    ]);
    await digital.say_and_wait([
      callname,
      '……你说，这种事情，是真实存在的吗？',
    ]);
    await era.printAndWait([
      '骨折、粉丝数、投票数、抽选、避战……各种原因所造成的不出赛，',
      digital.get_colored_name(),
      ' 都见过。',
    ]);
    await era.printAndWait([
      '但是，因为参赛名额意外不够用，这种情况，',
      digital.get_colored_name(),
      ' 第一次遇见。',
    ]);
    await digital.say_and_wait(
      '因为是比赛，所以绝对会有胜利的笑容以及失败的泪水。',
    );
    await digital.say_and_wait([
      '但是，在泪水的前方，必定存在着感动，正因如此，',
      digital.get_uma_sex_title(),
      '们才能在又一个赛场上再次碰撞。',
    ]);
    await digital.say_and_wait('……但是……如果，连跑都不能跑的话，那又怎么说……');
    await era.printAndWait('明明准备好了所有，却不能参赛。');
    await digital.say_and_wait([
      '如果是因为我的出赛……',
      digital.sex,
      '的梦想就此被摘下的话……',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 十分沮丧，已经产生了退却心理。',
    ]);
    await me.say_and_wait([
      '你难道要说自己不参加 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ' 吗？！',
    ]);
    await digital.say_and_wait('那……没那回事。');
    await digital.say_and_wait([
      '就算是我，就算是我，也有着和 ',
      sys_get_colored_callname(19, 15),
      ' 和 ',
      sys_get_colored_callname(19, 58),
      ' 的约定啊……',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 明白，',
      digital.sex,
      '什么都不能改变。',
    ]);
    await era.printAndWait([
      '因为喜欢',
      digital.get_uma_sex_title(),
      '，所以那位',
      digital.get_uma_sex_title(),
      '的遭遇，才会像水草一样缠上',
      digital.sex,
      '的脚。',
    ]);
    await era.printAndWait('不过，如果就这样的话……');
    await me.say_and_wait(['相信', digital.sex, '吧，于此同时，我也相信你。']);
    await digital.say_and_wait([
      '这是……这是什么意思？相信',
      digital.sex,
      '……？',
    ]);
    await me.say_and_wait([
      '黑船',
      digital.sex,
      '的脚步不会停下，',
      digital.sex,
      '，还有明年，今年的 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '，',
      digital.sex,
      '的确是不能参加了没错……',
    ]);
    await me.say_and_wait([
      '但是你觉得',
      digital.sex,
      '会就此一蹶不振，然后就此退役吗？',
    ]);
    await digital.say_and_wait('！那……那肯定不会。');
    await era.printAndWait([
      '出色的',
      digital.get_uma_sex_title(),
      '，不会因为这些挫折所击倒。',
    ]);
    await me.say_and_wait('给出你最好的答卷，这就是对黑船最好的帮助。');
    await digital.say_and_wait([
      '……',
      digital.get_uma_sex_title(),
      '酱们，在痛苦中最后抓住的东西，在历经了那几位后，我知道了，那是无与伦比的事物。',
    ]);
    await digital.say_and_wait(
      '所有带来的悲伤，即使是那份悔恨，都会成为明天的力量！我明白了！毕竟正是亲自感受过了啊！',
    );
    await digital.say_and_wait([
      '所以我，我才能打心底里说出，',
      digital.get_uma_sex_title(),
      '太棒了啊！',
    ]);
    await era.printAndWait([digital.get_colored_name(), ' 站起身跑到海边——']);
    await digital.say_and_wait([
      digital.get_uma_sex_title(),
      '，无论是怎样的苦难，都能用不屈的意志，全都，弹飞啊啊啊啊啊！！！！！',
    ]);
    await digital.say_and_wait([
      '无论是我，还是',
      digital.sex,
      '！都绝对能过跨越啊！！！！',
    ]);
    await digital.say_and_wait('……啊啊啊……');
    await era.printAndWait([
      '尽情呼喊后，',
      digital.get_colored_name(),
      ' 回过神来。',
    ]);
    await me.say_and_wait('看来，数码你，已经得到答案了。');
    await digital.say_and_wait([
      '……我，我也不能停在这里，一定，一定要把从 ',
      sys_get_colored_callname(19, 61),
      ' 那里拿到的珍贵的东西，展示给',
      digital.sex,
      '！',
    ]);
    await digital.say_and_wait([
      '我，我一定要参加 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '，而且，而且！一定要拿到，压倒性胜利！',
    ]);
    await digital.say_and_wait([
      '让',
      digital.sex,
      '，为了明年这番比赛能够追上我，拼尽全力！',
    ]);
    await digital.say_and_wait('绝对！绝对要！');
    await digital.say_and_wait([
      '而且，要把我至今为止所有邂逅的',
      digital.get_uma_sex_title(),
      '的感情，全部倾倒出去！',
    ]);
    await digital.say_and_wait('这就是，我的责任！');
    await era.printAndWait('要获胜，而且是要大胜，才能断绝黑船最后的遗憾。');
    await era.printAndWait([
      '这就是 ',
      digital.get_colored_name(),
      ' 给予自己的责任。',
    ]);
  };

  handlers[95 + 48] = async (digital, me, callname) => {
    await print_event_name(
      ['只是作为普通的', digital.get_uma_sex_title(), digital.sex],
      digital,
    );
    const dober = get_chara_talk(59);
    await era.printAndWait([
      '在冷霜飞舞十二月的最后几天，虽然仍留着不久前观看 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 的热情，见证了 ',
      get_chara_talk(83).get_colored_name(),
      ' 的漂亮冲线，',
      digital.get_colored_name(),
      ' 还是立刻投身于CM的准备之中。',
    ]);
    await era.printAndWait('即使作为摊主，能够提前进场布置，但……');
    await era.printAndWait('还是不禁感叹，就算只有摊主，都还是很多人啊。');
    await era.printAndWait([
      '看着一条狞狰的长蛇不断向展览中心扭去，不知还得多久轮到 ',
      me.get_couple_title(),
      '。',
    ]);
    await digital.say_and_wait([
      '哼哼哼，',
      callname,
      '，你是没坐过普通观众那一桌，到时候，整个东京国际展览中心的门前门后都是扔不进萝卜的浪潮！',
    ]);
    await era.printAndWait([
      '……幸好 ',
      digital.get_colored_name(),
      ' 作为摊主，能够一起走提前通道。',
    ]);
    await era.printAndWait([
      '眼见 ',
      digital.get_colored_name(),
      ' 背着一个特制有特多挂钩的大背包，挂着各种小摆件，小挂饰……',
    ]);
    await era.printAndWait('听说里面还带有一叠挂轴……');
    era.printButton('「那个，数码，这些，不会都是你一个人做的吧？」', 1);
    await era.input();
    await era.printAndWait([
      '哗啦哗啦，随着 ',
      digital.get_colored_name(),
      ' 的转身，一堆挂饰上的金属互相碰撞，发出了锐耳的响声。',
    ]);
    await digital.say_and_wait([
      '嗯……',
      callname,
      ' 是对我的工作量感到惊奇吗？事实上，这上面有不少是再版的，也就是数码以前的成果。',
    ]);
    await era.printAndWait('以前，以前吗……');
    await digital.say_and_wait([
      '自从出道以来，数码我的成果其实减少了不少，基本上出展只会出一两本小薄本了，还有缺席的时候……',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 转回身，盯着巨大的东京国际展览中心。',
    ]);
    await digital.say_and_wait(['或许……之后就会恢复正常速度吧。']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 明白 ',
      digital.get_colored_name(),
      ' 的话，也明白 ',
      digital.get_colored_name(),
      ' 为何会如此……颓废……吗？',
    ]);
    await era.printAndWait([
      '看着 ',
      digital.get_colored_name(),
      ' 因早起略无精神的眼神，',
      me.get_colored_name(),
      ' 回想起了……',
    ]);
    await era.printAndWait('那是在一场泥地赛，下着雨。');
    await era.printAndWait([
      '夹杂着些许小雨的寒风狠狠地灌进 ',
      me.get_colored_name(),
      ' 的雨衣。',
    ]);
    await era.printAndWait([
      '想必，',
      digital.get_colored_name(),
      ' 也觉得很冷吧。',
    ]);
    await era.printAndWait([
      '在赛道上的 ',
      digital.get_colored_name(),
      '，沾满泥泞，原本马卡龙色的决胜服都染上了些许灰色。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 没有看到揭示板上的成绩，',
      me.get_colored_name(),
      ' 只能看到 ',
      digital.get_colored_name(),
      ' 正在抬着头，看着那揭示板。',
    ]);
    era.drawLine();
    await era.printAndWait([
      '队伍其实也没有想象中那么长，一不留神其实就进到了会场。',
    ]);
    await era.printAndWait([
      '艰难地穿插来到',
      digital.get_uma_sex_title(),
      '专区，里面有几个正在布置的摊主看到 ',
      digital.get_colored_name(),
      ' 都远远地朝 ',
      digital.get_colored_name(),
      ' 挥了挥手。',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 看起来在这里名气不小啊。',
    ]);
    await digital.say_and_wait('哦哦哦噢？');
    await era.printAndWait([
      '嗯？伴随着 ',
      digital.get_colored_name(),
      ' 的眼光看过去，是一个带着口罩，带着帽子，穿比较多衣服稍显臃肿的……',
      digital.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait([
      '虽然穿的是那种普通的帽子，从帽子被略微顶起的形状也可以大致猜出是',
      digital.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait([
      '而且事实上，大家大致上都知道',
      digital.sex,
      '是……',
    ]);
    await digital.say_and_wait([
      '多……',
      { color: dober.color, content: '白目老师', fontWeight: 'bold' },
      '！这一次你也有出新刊吗？！三本新刊多谢！',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 来到多伯……嗯，是 ',
      {
        color: dober.color,
        content: '白目老师',
        fontWeight: 'bold',
      },
      ' 的摊位，立刻预订了三本。',
    ]);
    await era.printAndWait([
      '而多伯……算了，',
      {
        color: dober.color,
        content: '多伯老师',
        fontWeight: 'bold',
      },
      ' 也鬼祟地左右扫视，确认其他人都（有意识地）避开眼色后……',
    ]);
    await era.printAndWait([
      '悄悄地拿起放在背包里精致包装好的某物递给了激动的 ',
      digital.get_colored_name(),
      '。',
    ]);
    await era.printAndWait('伴随着各种各样的交换后，即将迎来的是……');
    await era.printAndWait('CM的正式开幕！');
    await era.printAndWait(
      '无论看过多少次仍会让人感叹，人类还是太多了，地球还是太小了。',
    );
    await me.say_as_unknown_and_wait('噢噢噢噢噢噢！');
    await era.printAndWait(
      '从入闸处传来各种人群心灵的呐喊，冲在最前头的人类径直跑到大热门区域，快到摊位时又礼貌地缓慢停下递出纸币收下珍贵的战利品。',
    );
    await era.printAndWait('前头继续涌出人群，接着赶到现场的是……');
    await era.printAndWait(
      ['？？？「诶诶！', sys_get_colored_callname(59, 19), '！我来了！」'],
      {
        color: diamond_lord.color,
      },
    );
    await era.printAndWait([
      '远处从人群窜出来一个栗毛',
      digital.get_uma_sex_title(),
      '，凭借着',
      digital.get_uma_sex_title(),
      '的脚力立刻就来到 ',
      digital.get_colored_name(),
      ' 的面前。',
    ]);
    await digital.say_and_wait(['惯例的新刊请收好～']);
    await era.printAndWait([
      '接过新刊的',
      digital.get_uma_sex_title(),
      '一路小跳着离场了，第一位顾客，但接下来的是……',
    ]);
    era.printButton('「数码……虽说我对你的知名度也略有耳闻……」', 1);
    await era.input();
    await era.printAndWait(
      '要……要忙不过来了，正拿起包内卷好的挂画，又要清点接过的现金……',
    );
    await era.printAndWait(
      '别问为什么没有电子支付，手机自从进场后就静静地躺在口袋里，再也没有发出任何声响。',
    );
    await era.printAndWait([
      '经过了一段不断的忙活后，终于，可以摆上「已告罄」的牌子。',
    ]);
    era.println();
    await era.printAndWait([
      '正和 ',
      digital.get_colored_name(),
      ' 讨论着要不要去看一下URA官方馆区的时候，',
      {
        color: dober.color,
        content: '多伯老师',
        fontWeight: 'bold',
      },
      ' 过来告别了。',
    ]);
    await dober.say_and_wait([
      sys_get_colored_callname(59, 19),
      '，虽然本来想邀请你一起逛一下馆区的，实在可惜，我得在此告别了。在此祝你能够创作出更优秀的作品。',
    ]);
    await digital.say_and_wait('诶诶欸，承蒙关照！我势必会拼死创作的！');
    await digital.say_and_wait(
      '因为出道后对作品有所懈怠，不过请放心，我在这之后会调整回来的!',
    );
    await dober.say_and_wait(['！']);
    await era.printAndWait([
      '隔着口罩，即使只看那眼睛，也能察觉到 ',
      dober.get_colored_name(),
      ' 激烈的情绪变化。',
    ]);
    await era.printAndWait([
      digital.sex,
      '握紧拳头，摘下了伪装用的帽子和口罩。',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 愣住了，',
      digital.sex,
      '不知道为什么 ',
      dober.get_colored_name(),
      ' 突然这么气愤。',
    ]);
    await digital.say_and_wait([
      '白……',
      sys_get_colored_callname(19, 59),
      '……？',
    ]);
    await era.printAndWait([
      dober.get_colored_name(),
      ' 从挎包中抽出 ',
      digital.get_colored_name(),
      ' 的同人志，放回了 ',
      digital.get_colored_name(),
      ' 的摊位。',
    ]);
    await dober.say_and_wait(['这本，我本来还想回去看的，抱歉。']);
    await era.printAndWait([
      dober.get_colored_name(),
      ' 头也不回地走了，连 ',
      digital.get_colored_name(),
      ' 的挽留都没看。',
    ]);
    await digital.say_and_wait(['……']);
    await era.printAndWait([
      digital.get_colored_name(),
      ' 低着头，望着那本自己精致包装过的同人志。',
    ]);
    await era.printAndWait(
      ['？？？「那个……', sys_get_colored_callname(59, 19), '？」'],
      {
        color: diamond_lord.color,
      },
    );
    await era.printAndWait([
      '是最开始赶到摊位的栗毛',
      digital.get_uma_sex_title(),
      '，',
      digital.sex,
      '也拿着一大包战利品，看起来也是来问候一下的。',
    ]);
    await digital.say_and_wait(['抱歉让你见丑了，', diamond_lord, '。我……']);
    await digital.say_and_wait([
      '我想问一下，作为粉丝，想要看到更多老师的作品，不是……正常的吗？',
    ]);
    await say_by_diamond_lord('是的……不过……');
    await era.printAndWait([
      '名为 ',
      diamond_lord,
      ' 的',
      digital.get_uma_sex_title(),
      ' ',
      digital.sex,
      '……直接就坐在地上，翻找那个硕大的背包，从中拿出来了一本厚书。',
    ]);
    await era.printAndWait('然后一打开才发现，这是外裹了厚保护封皮的同人志。');
    await say_by_diamond_lord('这本，是你在出道第一年那个时候出的同人志……');
    await say_by_diamond_lord(
      '那时候我还不是你的粉丝，这本，还是我在其他人手里高价买下来的……',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      ' 抿着嘴唇，一言不发。',
    ]);
    await say_by_diamond_lord([
      '即使是高价买下来，但却是我觉得买得最值的一本，',
      sys_get_colored_callname(59, 19),
      ' 知道是为什么吗。',
    ]);
    await say_by_diamond_lord([
      '这一本，描绘的是一个初出牛犊的',
      digital.get_uma_sex_title(),
      '的比赛，除了一贯的对',
      digital.get_uma_sex_title(),
      '的爱以外，里面，还有一些不一样的东西。',
    ]);
    await say_by_diamond_lord(
      '我另一个想说的事情是，我是在那场与你的比赛成为你的粉丝的……之后，你的每一次比赛我都有去看。',
    );
    await era.printAndWait([
      diamond_lord,
      ' 再次把那本同人志视若珍宝地再次用厚封皮包裹起来放进背包，接着',
      digital.sex,
      '背起背包，走了。',
    ]);
    era.drawLine();
    await era.printAndWait([
      digital.get_colored_name(),
      ' 出神地看着在场外Cos知名',
      digital.get_uma_sex_title(),
      '跳舞的Coser。',
    ]);
    await era.printAndWait([
      digital.sex,
      '们有些是带着假耳的普通',
      digital.get_phy_sex_title(),
      '，也有一些是直接戴上Cos耳套的',
      digital.get_uma_sex_title(),
      '。',
    ]);
    await era.printAndWait([
      '眼见着',
      digital.sex,
      '们翩翩起舞，',
      digital.get_colored_name(),
      '……',
    ]);
    await digital.say_and_wait([callname, '，为什么？']);
    era.printButton('「是想问多伯还是君主？」', 1);
    await era.input();
    await digital.say_and_wait('……都是。');
    era.printButton(
      `「数码你啊，是能在赛场中飞驰的赛${digital.get_uma_sex_title()}吧？`,
      1,
    );
    await era.input();
    await era.printAndWait([
      digital.get_colored_name(),
      ' 对这牛头不搭马嘴的提问停顿了一下，摇了摇头。',
    ]);
    await me.say_and_wait([
      '我要谢谢多伯和君主，是',
      digital.sex,
      '们让我这个 ',
      callname,
      ' 想起来了。',
    ]);
    era.println();
    await era.printAndWait([
      '那个在赛道中虽然很变态，紧紧盯着其他',
      digital.get_uma_sex_title(),
      '的 ',
      digital.get_colored_name(),
      '……',
    ]);
    await me.say_and_wait([
      '如果你不是赛',
      digital.get_uma_sex_title(),
      '的话，那我，你的粉丝们，看到的数码又是谁呢？',
    ]);
    await digital.say_and_wait(['那个数码……只是还没认清现状的数码……']);
    era.println();
    await era.printAndWait([
      '即使前面就是终点线，依旧如此的 ',
      digital.get_colored_name(),
      '……',
    ]);
    await me.say_and_wait([
      '只要踏进赛场，你就成为赛',
      digital.get_uma_sex_title(),
      '了，你就是被粉丝们所应援的存在了啊！',
    ]);
    await digital.say_and_wait(['只要……踏进赛场？']);
    await me.say_and_wait([
      '对！身为粉丝的你不是最清楚不过了吗！在赛场上的每一个',
      digital.get_uma_sex_title(),
      '，无论表现如何，都是如此啊！',
    ]);
    era.println();
    await era.printAndWait([
      '即使一片泥泞，也要奋力向前的 ',
      digital.get_colored_name(),
      '……',
    ]);
    era.printButton('「你早已，成为粉丝拥护着的存在了啊！」', 1);
    await era.input();
    await digital.say_and_wait('！');
    await era.printAndWait([
      digital.get_colored_name(),
      ' 听到这句话后，浑身一震。',
    ]);
    era.printButton('「粉丝服务，明白吗！」', 1);
    await era.input();
    await digital.say_and_wait('明白！');
    era.println();
    await era.printAndWait([digital.get_colored_name(), '，真的是……']);
    await digital.say_and_wait([
      '唔噢噢噢噢噢噢，可不能辜负粉丝们的期待啊……啊哈哈哈……',
    ]);
    era.println();
    await era.printAndWait([digital.get_uma_sex_title(), '啊。']);
    await digital.say_and_wait('我还是，再努力一下好了。');
    await era.printAndWait(
      '眉毛低垂，眼神浑浊，还带着泪光，甚至可以说是苦笑。',
    );
    await era.printAndWait('不过这个笑容，必定能让粉丝感动地留下眼泪……');
    await era.printAndWait('啊，看不清了……');
  };
};
