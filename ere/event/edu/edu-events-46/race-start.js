const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');
const CharaTalk = require('#/utils/chara-talk');
/**
 * @param {HookArg} hook
 * @param {RaceStartParams} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const callname = sys_get_callname(46, 0),
    falcon = new CharaTalk(46),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:46:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name(`首次试镜！`, falcon);
    await era.printAndWait(`河边草地\n`);
    await falcon.say_and_wait(
      `目标是！Top idol的${falcon.uma_sex_title}偶像——${falcon.name}，现在要正式出道了⭐`,
    );
    await say_by_passer_by(`粉丝们`, `飞鹰子终于要出道了吗！`);
    await falcon.say_and_wait(
      `没错！为了这一天飞鹰子一直在努力！虽然飞鹰子也想让大家稍微忍耐一下……`,
    );
    await falcon.say_and_wait(`因为飞鹰子也和大家一样激动到直冲云霄的地步了♪`);
    await say_by_passer_by(`粉丝们`, `就趁着这种气势一直向前冲吧！`);
    await falcon.say_and_wait(
      `飞鹰子会从比赛开始一直闪耀到演出结束的呦⭐……好兴奋啊！真是不可思议的感觉，心跳不停的dokidoki回应着我……`,
    );
    await falcon.say_and_wait(`约好了哟，各位请在观众席上观看飞鹰子的演出⭐`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(`\n准备室\n`);
    await falcon.say_and_wait(`缎带……ok！背后的号码牌……无误！`);
    await era.printAndWait(
      `站在等身镜前的${falcon.name}反复检查着自己的模样。`,
    );
    await falcon.say_and_wait(
      `为了一直支持自己的大家……飞鹰子一定会赢的！`,
      true,
    );
    await falcon.say_and_wait(`飞鹰子！加油！`);
    await era.printAndWait(`${falcon.name}将握紧了拳头的右手高高举起。`);
    era.printButton(`把赛场想象成舞台就好了`, 1);
    await era.input();
    await era.printAndWait(
      `在一旁等待着的${callname} 看着初次参与出道战的${falcon.name}。`,
    );
    await me.say_and_wait(`我相信飞鹰子一定会胜利！`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}也是！`);
    await era.printAndWait(`${callname} 感受到${falcon.name}双手的微微颤动。`);
    await falcon.say_and_wait(
      `粉丝们的大家会坐在哪里等待着飞鹰子呢♪闪耀着的飞鹰子一定会把胜利带给大家⭐`,
    );
    await era.printAndWait(
      `不是安慰，而是${falcon.name}对这段时间训练成果的确信。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}就在观众席上好好看着飞鹰子精彩的表现吧♪`,
    );
    await falcon.say_and_wait(`……而且，飞鹰子还有一个不能输的理由！`, true);
    // 与训练员无关，仅仅只是无法承担恐惧的结果
    await falcon.say_and_wait(
      `消沉的想法就此打住！飞鹰子的顶级偶像之路就从这里起步！`,
      true,
    );
    await falcon.say_and_wait(
      `闪耀的${falcon.get_uma_sex_title()}偶像——${falcon.name}！接下来会让观众席上所有人眼睛不眨的注视着飞鹰子！`,
    );
    await era.printAndWait(`${falcon.name}走向了赛场。`);
  } else if (extra_flag.race === race_enum.sats_sho && edu_weeks < 95) {
    await print_event_name(`闪耀在皋月赏的飞鹰子`, falcon);
    await era.printAndWait(`在新闻发布会上向记者宣布参加皋月赏后。`);
    await era.printAndWait(
      `虽然也有对于${falcon.name}是否能在非适应性的赛场上获胜的疑虑，不过更多的还是活跃在沙地的${falcon.name}会展示出什么样的活力的期待。`,
    );
    await era.printAndWait(`准备室中`);
    await falcon.say_and_wait(`哼哼♪这样的话飞鹰子就准备完成了！`);
    await era.printAndWait(`${falcon.name}在等身镜前再次确认了一遍决胜服，`);
    await falcon.say_and_wait(`训练员${me.get_adult_sex_title()}觉得怎么样？`);
    era.printButton(`真是耀眼！`, 1);
    await era.input();
    await falcon.say_and_wait(`就这样把所有粉丝的目光全部——夺过来！`);
    await falcon.say_and_wait(`……说起来，这也是飞鹰子第一次穿上这身决胜服呢……`);
    await era.printAndWait(
      `${falcon.name}突然不好意思地移开了与${callname} 对视的目光。`,
    );
    await falcon.say_and_wait(`……没什么⭐`);
    await era.printAndWait(`然后像是掩饰什么一样，捂着嘴笑了起来。`);
    await falcon.say_and_wait(`这次真的要出发了！`);
    await era.printAndWait(`${falcon.name}握住了门把手，将要打开。`);
    era.printButton(
      `就像夺走我的目光一样，将赛场上所有人的目光全部夺去吧！`,
      1,
    );
    await era.input();
    await falcon.say_and_wait(`⭐`);
    await era.printAndWait(`${falcon.name}眨了眨眼，然后关上了准备室的大门。`);
  } else if (extra_flag.race === race_enum.japa_dir && edu_weeks < 95) {
    await print_event_name(`莫名的焦躁感`, falcon);
    await falcon.say_and_wait(`……嗯——`);
    await era.printAndWait(
      `${callname} 走进准备室，看见情绪稍稍低落的${falcon.name}。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，这次比赛会有很多人来看吗？`,
    );
    await me.say_and_wait(
      `因为飞鹰子在皋月赏参赛的缘故，现在草地的观众们也知道在泥地赛道努力闪耀的${falcon.name}了。`,
    );
    await falcon.say_and_wait(`比起草地的赛道来说……`);
    await me.say_and_wait(
      `虽然还是不足，不过在飞鹰子的努力下，泥地也慢慢有了人气。`,
    );
    await falcon.say_and_wait(`这样吗。`);
    await falcon.say_and_wait(`飞鹰子说不定真的可以带动泥地比赛呢！`);
    await era.printAndWait(`努力最终还是会有结果的。`);
    era.printButton(`而且，大家都期待着飞鹰子登场！`, 1);
    await era.input();
    await falcon.say_and_wait(
      `……没错！为了在观众席上欢呼着的粉丝们，飞鹰子就这样一口气冲到终点！`,
    );
    await falcon.say_and_wait(
      `……训练员${me.get_adult_sex_title()}，距离比赛开始还有多久？`,
    );
    await era.printAndWait(
      `${callname} 将手机递给了${falcon.name}，屏幕上显示的时间距离比赛开始还有半个小时。`,
    );
    await falcon.say_and_wait(`既然这样的话！`);
    await era.printAndWait(`${falcon.name}从带来的包裹中取出了厚厚一沓海报。`);
    await falcon.say_and_wait(
      `在比赛开始之前，让住在附近的大家认识到飞鹰子吧！`,
    );
    await era.printAndWait(
      `还没等${callname} 开口答复，${falcon.name}就拉着${callname} 的手腕向外跑去。`,
    );
    await falcon.say_and_wait(`飞鹰子！加油！`);
    await era.printAndWait(
      `之后，${falcon.name}作为参赛${falcon.get_uma_sex_title()}在比赛开始前还在演出而小小的成为了话题。`,
    );
    await era.printAndWait(
      `不久后，手纲小姐恐怖的笑容以及下个月的工资让${callname} 保证不会再发生这种事情了。`,
    );
  } else if (extra_flag.race === race_enum.jbc_cls && edu_weeks < 95) {
    await print_event_name(`焦躁开端`, falcon);
    await era.printAndWait(`JBC经典赛，往年来说观众数不会超过两万`);
    await era.printAndWait(`然而`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，我们必须在比赛开始之前将这打传单发完！`,
    );
    await era.printAndWait(`在飞鹰子的努力之下，来往的粉丝显得络绎不绝？！`);
    await me.say_and_wait(`如果是飞鹰子的话，说不定真的可以？`);
    await era.printAndWait(
      `即使是一直担心着飞鹰子身体健康的${callname} ，心里似乎也开始不切实际的期待着。`,
    );
    await say_by_passer_by(`路人A`, `欸？这附近还有比赛？`);
    await say_by_passer_by(`路人B`, `泥地比赛？没啥兴……${falcon.name}会参加？`);
    await say_by_passer_by(
      `路人C`,
      `${falcon.name}？就是在马推上成为话题的那个？`,
    );
    await say_by_passer_by(`路人A`, `等等我。`);
    await era.printAndWait(`不知不觉间，传单被抢购一空。`);
    await falcon.say_and_wait(`飞鹰子说不定比想象中还要受欢迎呢……`);
    await falcon.say_and_wait(`以前要发完这么多至少要一个上午才行。`);
    await era.printAndWait(`虽是这么说，${falcon.name}的笑容几乎收不住。`);
    await falcon.say_and_wait(
      `说不定飞鹰子已经成为了比想象中还要受欢迎的人了呢。`,
    );
    await me.say_and_wait(`大家都看好${callname} 呢。`);
    await falcon.say_and_wait(`是啊，为了一直支持着飞鹰子的大家们。`);
    await falcon.say_and_wait(`飞鹰子要以2000%的努力取得冠军！`);
    await era.printAndWait(`一股无形的气浪包裹着${falcon.name}。`);
    await falcon.say_and_wait(`事不宜迟现在就出发吧！`);
    await me.say_and_wait(`比赛还没开始。`);
    await era.printAndWait(`话还没说完，${falcon.name}便挂断了视频。`);
    await falcon.say_and_wait(
      `接下来，要让训练员${me.get_adult_sex_title()}大吃一惊！`,
    );
    await era.printAndWait(`${falcon.name}下定了决心，向赛马场跑去。`);
  } else if (extra_flag.race === race_enum.toky_dai && edu_weeks <= 95) {
    await print_event_name(`${falcon.name}`, falcon);
    await era.printAndWait(
      `重振旗鼓的${falcon.name}决定稍微放缓一点自己的脚步前行。`,
    );
    await era.printAndWait(`等待着一直苦苦寻找自己的粉丝们。`);
    await era.printAndWait(`训练室`);
    await me.say_and_wait(`接下来的话，就期待着飞鹰子的努力了。`);
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}接下来也要在观众席上看着飞鹰子的成长吧。`,
    );
    await era.printAndWait(`实际上，这位${falcon.teen_sex_title}意外的坚强。`);
    await era.printAndWait(
      `重新思考之后，将大部分的日程取消掉，集中于少数的事情之上。`,
    );
    await era.printAndWait(
      `重新找到方向并开始踏踏实实前进到现在也不过一个月左右。`,
    );
    await falcon.say_and_wait(
      `训练员${me.get_adult_sex_title()}，可以帮我调整一下左边的发饰吗？`,
    );
    await era.printAndWait(
      `看着全身镜中的${falcon.teen_sex_title}重新回到了正常状态后，一种说不出的高兴油然而生。`,
    );
    await falcon.say_and_wait(`虽然作为东京大赏，永远也无法与有马相比，不过——`);
    await era.printAndWait(`前来观看的游客们已经远远超越了往年的人数。`);
    await falcon.say_and_wait(`至少，作为蒲公英来说，飞鹰子很幸福哦♪`);
    await era.printAndWait(`${falcon.name}轻轻关上了准备室的大门。`);
  } else if (extra_flag.race === race_enum.febr_sta && edu_weeks > 95) {
    await print_event_name(`前辈与后辈（一）`, falcon);
    await falcon.say_and_wait(
      `希望大家能来赛场看朝着顶级偶像前进的飞鹰子的赛跑♪`,
    );
    await falcon.say_and_wait(`飞鹰子的话，一定会把最棒的比赛带给大家⭐`);
    await era.printAndWait(
      `在比赛前分发传单似乎已经成了${callname} 们之间的默契。`,
    );
    await era.printAndWait(`${falcon.get_uma_sex_title()}「是，是飞鹰子吗？」`);
    await era.printAndWait(
      `似乎是从地方特雷森来的${falcon.get_uma_sex_title()}注意到了${
        falcon.name
      }。`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()}「飞鹰子前辈！我也打算作为偶像在泥地出道！」`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()}「看到了${callname} 在东京大赏奔跑的样受到了鼓舞，所以我也希望能成为带给人们希望的偶像！」`,
    );
    await era.printAndWait(
      `带着崇拜的眼神看着${falcon.name}的${falcon.get_uma_sex_title()}。`,
    );
    await falcon.say_and_wait(`……飞鹰子`, true);
    await falcon.say_and_wait(
      `飞鹰子一定会把那份想要成为偶像最初的感受传达到${callname} 身上的！`,
    );
    await era.printAndWait(`带着复杂情感的飞鹰子走向了赛场。`);
  } else if (extra_flag.race === race_enum.teio_sho && edu_weeks > 95) {
    await print_event_name(`帝王赏前的准备`, falcon);
    await era.printAndWait(
      `${falcon.name}即将挑战帝王赏的消息传遍了整个马推。`,
    );
    await era.printAndWait(
      `被飞鹰子的奔跑与歌唱所吸引的人在开闸购票时就将票抢购一空。`,
    );
    await era.printAndWait(
      `与其说是泥地选择了${falcon.name}，不如说是${falcon.name}成就了泥地。`,
    );
    await era.printAndWait(`休息室里`);
    await falcon.say_and_wait(`……飞鹰子还是有点紧张呢`);
    await era.printAndWait(
      `与以往不同，${falcon.name}面对即将开始的比赛出现了迷茫。`,
    );
    await falcon.say_and_wait(
      `如果失误的话，不知道支持着的粉丝和后辈们会不会对我失望。`,
    );
    await me.say_and_wait(
      `作为飞鹰子粉丝同时也是${falcon.name}的训练员，我相信`,
    );
    await me.say_and_wait(`飞鹰子一定没问题的！`);
    await falcon.say_and_wait(
      `如果是训练员${me.get_adult_sex_title()}的话，飞鹰子会努力的！`,
    );
    await era.printAndWait(`${me.actual_name}看了一眼时间，差不多该出发了。`);
    await me.say_and_wait(`那么，接下来就等着${callname} 的好消息了，飞鹰子！`);
    await falcon.say_and_wait(
      `好！接下来就让后辈${falcon.get_uma_sex_title()}看看作为前辈的偶像是怎么做的！`,
    );
    await era.printAndWait(`作为前辈偶像的飞鹰子走向了赛场。`);
  } else if (extra_flag.race === race_enum.jbc_cls && edu_weeks > 95) {
    await print_event_name(`育马场经典赛·偶像的第一步`, falcon);
    await era.printAndWait(`作为偶像之路上的一个考验，育马场经典赛开始了。`);
    await era.printAndWait(
      `听说${falcon.name}将要参加的消息传来，经典赛的观众数立刻增加一大截。`,
    );
    await era.printAndWait(`已经能与一些冷门的草地G1相比了。`);
    await era.printAndWait(`而对于飞鹰子来说。`);
    await falcon.say_and_wait(
      `对于飞鹰子这样的普通${falcon.get_uma_sex_title()}来说，到面前为止的胜利全部都是奇迹般的出现。`,
    );
    await falcon.say_and_wait(`即使是这样，飞鹰子依然希望能继续闪耀下去。`);
    await me.say_and_wait(
      `那么，接下来就放手去做吧。飞鹰子，按照自己的想法描绘这副画卷！`,
    );
    await me.say_and_wait(
      `顶级${falcon.get_uma_sex_title()}偶像是由自己定义的！`,
    );
    await era.printAndWait(
      `即使是在准备室中，外面震耳欲聋的呼喊声也隐隐约约传了进来。`,
    );
    await falcon.say_and_wait(`即使是这样，飞鹰子依然希望能继续闪耀下去。`);
    await falcon.say_and_wait(`接下来要好好看着飞鹰子闪耀的样子！`);
    await era.printAndWait(`尚显稚嫩的偶像走向了赛场。`);
  } else if (extra_flag.race === race_enum.cham_cup && edu_weeks > 95) {
    await print_event_name(`冠军杯·泥泞的顶级偶像！`, falcon);
    await era.printAndWait(`其二，冠军杯开始了。`);
    await era.printAndWait(`经过经典赛的准备之后，接下来面对的是冠军杯。`);
    await era.printAndWait(
      `与之前费尽心思发放传单不同，得知${falcon.name}即将参战的粉丝们自发购买了座位。`,
    );
    await falcon.say_and_wait(`飞鹰子比想要之中还要受欢迎呢。`);
    await era.printAndWait(`不如说外面的骚动声隐隐传来了巨大的压迫感。`);
    await me.say_and_wait(`强打着精神出来的吗？`);
    await era.printAndWait(`微微颤动的双手，面对无形之间的压力，飞鹰子的话。`);
    await falcon.say_and_wait(`接下来的比赛，飞鹰子也会加油的！`);
    await me.say_and_wait(`祝${callname} 武运昌隆……如果不舒服的话来找我。`);
    await era.printAndWait(`稍微停顿之后，${falcon.name}打开了准备室的门。`);
    await era.printAndWait(
      `在震耳欲聋的欢呼声之中，${falcon.name}走上了赛场。`,
    );
  } else if (extra_flag.race === race_enum.toky_dai && edu_weeks > 95) {
    //（恋心高于责任）东京大赏结束，前往胜者舞台的间隙期间，${falcon.name}再次认识了自己（我对自己所做的决定毫无后悔，如果重新在做选择的话，我也会选择这条道路）
    //（责任大于恋心）东京大赏结束，前往胜者舞台的间隙期间，${falcon.name}再次认识了自己（我对自己所做的决定毫无后悔，如果重新在做选择的话，我也会选择这条道路）
    await print_event_name(`东京大赏典·the biggest stage`, falcon);
    falcon.print(`这一天的到来，比想象之中还要快。`);
    falcon.print(`辛苦的汗水，努力的价值，都将在这一刻显露出来。`);
    falcon.print(
      `为了追逐作为顶级偶像的目标，为了那些支持着我的粉丝们，一直努力到现在。`,
    );
    falcon.print(`明明是这样的，但我一直无法说服自己。`);
    falcon.print(`内心深处一直传来的声音一直在询问我，这样做是对的吗？`);
    falcon.print(`胸口好疼，像是被揪住了心脏一样。`);
    falcon.print(`我不知道答案。`);
    falcon.print(`但我隐隐有种感觉，最后的答案，将在此展现。`);
    era.printButton(`差不多该出发了，飞鹰子。`, 1);
    await era.input();
    await falcon.say_and_wait(`……出发吧，为了追寻那份答案。`);
    await era.printAndWait(
      `被混杂着沙粒的风吹得几乎睁不开眼睛的${callname} ，恍惚间将走向赛场的${falcon.name}与初次见面时的${falcon.teen_sex_title}重合在了一起。`,
    );
  }
};
