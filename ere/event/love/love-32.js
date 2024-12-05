/**
 * @file 爱丽速子 - 爱慕
 *
 * @author 幽白書
 * @author 黑奴一号 无名黑奴（修订）
 */
const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const girl_friend_accept = require('#/event/love/love-events-32/girl-friend-accept');
const girl_friend_betray = require('#/event/love/love-events-32/girl-friend-betray');
const girl_friend_reject = require('#/event/love/love-events-32/girl-friend-reject');
const half_life = require('#/event/love/love-events-32/half-life');
const Love32Base = require('#/event/love/love-events-32/until-fuck-buddy');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

module.exports = class extends Love32Base {
  async 74(tachyon, me, callname) {
    await print_event_name('女巫的自白', tachyon);
    await tachyon.say_and_wait([
      callname,
      '，在喝今天的药之前，我要和你说个故事',
    ]);
    era.println();
    await era.printAndWait([
      '今天 ',
      me.get_colored_name(),
      ' 一如既往来到了 ',
      tachyon.get_colored_name(),
      ' 的实验室，',
      tachyon.sex,
      '一如既往的接过便当然后递给 ',
      me.get_colored_name(),
      ' 今天的药水，',
    ]);
    await era.printAndWait('彷佛一种以物易物的交易行动一般');
    era.println();
    await era.printAndWait([
      '但在 ',
      me.get_colored_name(),
      ' 正要喝下药物时，',
      tachyon.get_colored_name(),
      ' 阻止了 ',
      me.get_colored_name(),
      ' 的行动',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 疑惑的看着',
      tachyon.sex,
      '，却看',
      tachyon.sex,
      '十分认真的回望着 ',
      me.get_colored_name(),
    ]);
    era.println();
    await era.printAndWait('…………那种眼神，彷佛带着赌上生命的觉悟一般');
    era.println();
    await tachyon.say_and_wait([
      callname,
      '，不知道你有没有听过一个叫做人鱼公主的童话故事',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '没等 ',
      me.get_colored_name(),
      ' 回答，彷佛一开始就不打算让 ',
      me.get_colored_name(),
      ' 回答一般，接着说了下去',
    ]);
    await era.printAndWait(
      '……然而，这却是有别于以往安徒生童话中人鱼公主的，另类的故事',
    );
    era.println();
    await tachyon.say_and_wait(
      '从前从前，有位生活在海底的人鱼公主，她从小就渴望着拥有双腿，希望能够在地面上，尽情的奔跑',
    );
    await tachyon.say_and_wait(
      '然而，生活在海里的她，只有腰部以下的那条鱼尾巴，别说跑步了，就连站立都没有办法',
    );
    era.println();
    await era.printAndWait('她自嘲般的看了看自己的双腿……');
    await era.printAndWait('如玻璃般脆弱的双腿，纵使能够站立，纵使能够奔跑，');
    await era.printAndWait('一跑就坏的双腿，比起鱼尾又好到哪里去了？');
    era.println();
    await tachyon.say_and_wait(
      '公主没有遇见女巫，她也不想将自己的双腿交付在不可信任的女巫手上，',
    );
    await tachyon.say_and_wait(
      '她想要的，是真正属于自己的双腿，所以她，自己开始学习巫术',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 的双手一摆，手上不知从哪里又变出了两个试管来，彷佛魔术，又彷佛……巫术一般',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '公主相信，只要一直努力，总有一天她也能获得属于自己的双腿，',
    );
    await tachyon.say_and_wait(
      '到时候就能尽情奔跑了，再也不用惧怕任何的东西，直到有一天……',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 的口气忽然变得有些飘渺，彷佛陷于一场梦境之中',
    ]);
    era.println();
    await tachyon.say_and_wait('她遇见了一个人');
    await tachyon.say_and_wait(
      '那个人不是王子，只是名潜水员而已，他不是落入海里需要援救的王子',
    );
    await tachyon.say_and_wait(
      '而是在出海时偶然看见了到海面上收集数据的公主，而一不小心被塞壬迷住',
    );
    await tachyon.say_and_wait(
      '投入海中，自愿帮助实验的普通人类，让我们姑且称他为——豚鼠君吧',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 说到这里，忽然发出了咯咯的笑声，彷佛想到了什么笑话一般',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '公主一开始对豚鼠君，并没有任何的感情，只是觉得来了个有趣的实验对象，',
    );
    await tachyon.say_and_wait(
      '用他进行了许多的实验，包括但不限于增值、发光、分身、变性………呵呵',
    );
    await tachyon.say_and_wait('然而，天真的公主以为，受到改变的只有豚鼠君，');
    await tachyon.say_and_wait(
      '却忘记了一个最重要的基本定理————反应，是相互的，',
    );
    await tachyon.say_and_wait('无论是化学还是人际关系，都是如此');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 叹了口气，眼神却带有无比的眷恋及怀念，彷佛仍沉溺于梦境一般',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '豚鼠君带着公主，以实验的名义看了许许多多的事物，',
    );
    await tachyon.say_and_wait(
      '他们跟着一角鲸一起围猎感到了生物的弱肉强食，他们看着蓝鲸死亡坠落海底，体会了生老病死的意义，',
    );
    await tachyon.say_and_wait(
      '他们看着海豚求偶交配的画面，两人都不禁面红耳赤',
    );
    await tachyon.say_and_wait(
      '渐渐的，公主理解了，实验以外的世界，原来是如此美丽',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '娓娓道来，叙述了一幅幅或美丽，或壮丽的画面，',
    ]);
    await era.printAndWait(
      '语气依旧轻柔，但此时却带上了细丝般的不舍———彷佛，美梦将醒',
    );
    era.println();
    await tachyon.say_and_wait('然后，终于，有一天');
    await tachyon.say_and_wait('公主发现，自己再也无法专注于实验了');
    await tachyon.say_and_wait(
      '每次她想静下心来研究时，比起研究会获得的成果，',
    );
    await tachyon.say_and_wait('她更期待的却是听见新研究时豚鼠君的表情。');
    await tachyon.say_and_wait(
      '每次她想到海面收集数据时，比起海面上看见的那些人类，',
    );
    await tachyon.say_and_wait('她更想见的却是在海底等着她的豚鼠君。');
    await tachyon.say_and_wait(
      '每次她想制作新药物的时候，比起药物带来的效果，',
    );
    await tachyon.say_and_wait('她更期待的却是豚鼠君喝下药物的反应');
    era.println();
    await era.printAndWait([
      '终于，',
      tachyon.get_colored_name(),
      ' 的表情恢复了清醒，彷佛总算，从一场美梦中醒了过来一般',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '她开始感到害怕，害怕有一天，自己会完全沉溺于与豚鼠君共度的时光，',
    );
    await tachyon.say_and_wait(
      '害怕有一天……获得双腿这个目标，都会变成区区一句空话而已',
    );
    await tachyon.say_and_wait(
      '那样的话，那样的她，便只是一名普通的科学家，却再也做不了一名研究者了……',
    );
    era.println();
    await tachyon.say_and_wait('这个时候，女巫出现了');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 从椅子上站起身，走向了 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      '的手，盖上了 ',
      me.get_colored_name(),
      ' 的手……却并非紧握，',
      tachyon.sex,
      '抚摸着的，是握在 ',
      me.get_colored_name(),
      ' 手中的那管试管',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '原来，从头到尾，女巫就存在于公主的心中，女巫就是公主！',
    );
    await tachyon.say_and_wait(
      '代表着内心理智面的女巫告诉公主，现在这一切的源头就是那只豚鼠，只要他不在，一切就能恢复原状了',
    );
    await tachyon.say_and_wait(
      '如果那只豚鼠离开……不，离开还不够，不能留下悬念……',
    );
    await tachyon.say_and_wait(
      '只要，让那只豚鼠『消失』，公主就能变回原状，变回原本那个专注于实验的公主',
    );
    era.println();
    await tachyon.say_and_wait(
      '…………没错，只是『变回原状』，无论是谁也无法保证，',
    );
    await tachyon.say_and_wait(
      '变回原状后公主究竟能否透过实验获得双腿，但唯一能够知道的就是『有这种可能性』',
    );
    await tachyon.say_and_wait(
      '相反的，要是继续和豚鼠君在一起的话……这种可能性，',
    );
    await tachyon.say_and_wait(
      '就再也不可能找回了，女巫说完了这些后，将一种药物，透过公主之手制作了出来',
    );
    await tachyon.say_and_wait(
      '她告诉公主，只要和平常一样，让豚鼠喝下这种药，',
    );
    await tachyon.say_and_wait('一切就能结束了，她们就能回到原来的生活了');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 说到这，从 ',
      me.get_colored_name(),
      ' 的手中再度将药剂抽出',
    ]);
    era.println();
    await tachyon.say_and_wait('但是……');
    era.println();
    await era.printAndWait('那只握着药剂的手忽然有些颤抖');
    era.println();
    await tachyon.say_and_wait('胆怯的公主，将一切都告诉了豚鼠君');
    await tachyon.say_and_wait('……这不是因为爱情、不是因为怜悯、不是因为不忍');
    await tachyon.say_and_wait('而是，胆怯，怯弱，懦弱');
    await tachyon.say_and_wait(
      '不要觉得，公主是什么善良之人，说到底，女巫只是她内心的一面，她的本质就是那个冷酷而无情的女巫',
    );
    await tachyon.say_and_wait(
      '如此说出口的公主，她的目的…………只是，不想承担责任而已',
    );
    era.println();
    await era.printAndWait([
      '然后，',
      tachyon.get_colored_name(),
      ' 再一次将手上的药举起',
    ]);
    era.println();
    await tachyon.say_and_wait('不想背负起杀掉自己所爱之人的罪刑');
    await tachyon.say_and_wait('不想担负起手刃自己眷恋之人的责任');
    await tachyon.say_and_wait(
      '希望……那个即将被其抹消的豚鼠，能够为了公主自我牺牲的自私',
    );
    era.println();
    await era.printAndWait('药水再次递出');
    await era.printAndWait([
      me.get_colored_name(),
      ' 看不见低着头的 ',
      tachyon.get_colored_name(),
      '，脸上现在究竟是何种表情',
    ]);
    await era.printAndWait('是在哭泣吗？因为所爱之人的死？');
    await era.printAndWait('是在嘲笑吗？因为捆绑自己的锁链即将被拆除？');
    await era.printAndWait([
      me.get_colored_name(),
      ' 只是默默的，静待对方说完',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '所以……',
      callname,
      '，请为这名自私自利的研究者做出选择吧',
    ]);
    era.println();
    await era.printAndWait([
      '此时',
      tachyon.sex,
      '所说的，确实，是无比自私的话语',
    ]);
    await era.printAndWait('希望对方能够为自己牺牲');
    await era.printAndWait('而且还是为了一个「可能性」，甚至并非是绝对');
    await era.printAndWait(
      '换句话说，也就是「你必须为了我而死，但就算你死了我也不知道自己能不能成功」这样，真的，不负责任的话语',
    );
    era.println();
    era.print(['因此，', me.get_colored_name(), ' 选择…………']);
    era.printButton('不喝（升级关系）', 1);
    era.printButton('喝（暂不升级）', 2);
    era.printButton('让速子将药喝下去【！】', 3);
    era.print(
      [
        '【警告，若选择此选项，与 ',
        tachyon.get_colored_name(),
        ' 的关系将无法挽回！特雷森学园不会原谅抛弃担当的行为！】',
      ],
      {
        color: buff_colors[3],
        offset: 1,
        width: 23,
      },
    );
    switch (await era.input()) {
      case 1:
        await girl_friend_accept(tachyon, me, callname);
        break;
      case 2:
        await girl_friend_reject(tachyon, me, callname, new TachyonLifeMarks());
        break;
      case 3:
        await girl_friend_betray(tachyon, me, callname, new TachyonLifeMarks());
    }
  }

  async 89(tachyon, me, callname) {
    await print_event_name('Now or Forever', tachyon);
    await tachyon.say_and_wait([callname, '～～']);
    await tachyon.say_and_wait([callname, '～～～？']);
    await tachyon.say_and_wait([callname, '！！']);
    await tachyon.say_and_wait([
      callname.substring(0, 1),
      '…………啊，',
      callname,
      '今天好像不在来着',
    ]);
    await tachyon.say_and_wait([
      '咕……但这药不趁新鲜试药效就没了啊，没办法了，',
      sys_get_colored_callname(32, 25),
      '～～',
    ]);
    await tachyon.say_and_wait([
      '…………欸，',
      sys_get_colored_callname(32, 25),
      '也不在吗！？',
    ]);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 在实验室里装傻般说道',
    ]);
    await tachyon.print_and_wait([
      '只可惜，实验室里没有任何能够吐槽',
      tachyon.sex,
      '的人在',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      ' 也就算了……',
      sys_get_colored_callname(32, 25),
      ' 怎么也不在啊……或者 ',
      sys_get_colored_callname(32, 94),
      '……',
      sys_get_colored_callname(32, 36),
      '……',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '仔细想想，不仅仅是 ',
      get_chara_talk(25).get_colored_name(),
    ]);
    await tachyon.print_and_wait([
      get_chara_talk(94).get_colored_name(),
      '、',
      get_chara_talk(36).get_colored_name(),
      '、',
      get_chara_talk(19).get_colored_name(),
      '，甚至自己疼爱的后辈 ',
      get_chara_talk(9).get_colored_name(),
      ' 最近都很少见到了',
    ]);
    await tachyon.print_and_wait([
      '其原因……聪明的 ',
      tachyon.get_colored_name(),
      '，凭着',
      tachyon.sex,
      '的惊世智慧，以及超我的客观判断力，自然能够轻松的猜出来',
    ]);
    await tachyon.print_and_wait('没错……');
    era.println();
    await tachyon.say_and_wait([
      '……果然，是因为我一直在谈 ',
      callname,
      ' 的事吧',
    ]);
    era.println();
    await tachyon.print_and_wait(
      '其实，也不只是谈自己那昵称为豚鼠的爱人的事，或者更准确来说，是与爱人之间的情事，直白一点来讲那便是，秀恩爱',
    );
    if (era.get('exp:32:性爱次数')) {
      await tachyon.print_and_wait([
        '如果说这样的话题只停留在情话及暧昧感情等级的话，那么想必身边人，最起码 ',
        get_chara_talk(9).get_colored_name(),
        ' 及 ',
        get_chara_talk(19).get_colored_name(),
        ' 绝对会很乐意一听的吧，',
      ]);
      await tachyon.print_and_wait([
        '但话题往往总是会进入到床事间的部分，这也怪不得一听见类似话题就满脸通红的',
        tachyon.sex,
        '们了',
      ]);
    }
    era.println();
    await tachyon.print_and_wait([
      '连 ',
      get_chara_talk(25).get_colored_name(),
      ' 都忍不住发问',
    ]);
    await tachyon.print_and_wait('为什么要这样一刻不停的炫耀着感情');
    era.println();
    await tachyon.say_and_wait('……可是，就是忍不住嘛');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 在无人的空间内喃喃说道',
    ]);
    era.println();
    await tachyon.print_and_wait('与心爱之人接吻的喜悦');
    await tachyon.print_and_wait('与宿命之人相拥的热情');
    await tachyon.print_and_wait('与良缘之人缠绵的温存');
    await tachyon.print_and_wait('与相守之人眷恋的爱意');
    era.println();
    await tachyon.print_and_wait('这些感情，这些话语，要是不对人倾诉的话');
    await tachyon.print_and_wait('自己就要被这庞大的热量从内而外的烧尽了');
    era.println();
    await tachyon.print_and_wait('好喜欢');
    await tachyon.print_and_wait('好可爱');
    await tachyon.print_and_wait('好帅气');
    await tachyon.print_and_wait('好迷人');
    await tachyon.print_and_wait('好英俊');
    await tachyon.print_and_wait('好潇洒');
    await tachyon.print_and_wait('好色气');
    await tachyon.print_and_wait('好魔性');
    era.println();
    await tachyon.print_and_wait([
      '任何的形容词套用在',
      me.sex,
      '身上都不为过',
    ]);
    await tachyon.print_and_wait([
      '对于理智的 ',
      tachyon.get_colored_name(),
      ' 而言，痴迷于恋爱这无疑是件愚蠢的事',
    ]);
    await tachyon.print_and_wait(
      '事实上，内心里也一直有个声音在耻笑着，耻笑露出如此蠢样的自己',
    );
    await tachyon.print_and_wait('但是……');
    era.println();
    await tachyon.print_and_wait('如果说理智就是要抛弃这样的感情');
    await tachyon.print_and_wait(['如果说客观就是要降低对', me.sex, '的爱情']);
    era.println();
    await tachyon.print_and_wait('那么，自己宁愿放弃理智');
    await tachyon.print_and_wait('化作在情欲的火焰中舞蹈的小丑');
    era.println();
    await tachyon.say_and_wait('啊啊……我，一定是疯了吧');
    era.println();
    await tachyon.print_and_wait('没有错');
    await tachyon.print_and_wait('这样的自己一定是疯了');
    await tachyon.print_and_wait(
      '即便不提以前的自己，跟一般意义上社会的情侣相比，自己的爱也达到了一种疯癫的程度',
    );
    await tachyon.print_and_wait('但是，疯不疯的，不是早就有了定数了吗');
    era.println();
    await tachyon.print_and_wait([
      '全世界都知道，',
      tachyon.get_colored_name(),
      ' 是一名疯狂的',
      tachyon.get_uma_sex_title(),
    ]);
    await tachyon.print_and_wait([
      '但是 ',
      tachyon.get_colored_name(),
      ' 不在乎全世界',
    ]);
    await tachyon.print_and_wait([
      me.sex,
      '知道，',
      tachyon.get_colored_name(),
      ' 是这样的',
      tachyon.get_uma_sex_title(),
    ]);
    await tachyon.print_and_wait([
      '而 ',
      tachyon.get_colored_name(),
      ' 只在乎',
      me.sex,
    ]);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      ' 只害怕一件事，那就是自己会被',
      me.sex,
      '讨厌',
    ]);
    await tachyon.print_and_wait(['自己的行径与', me.sex, '般配吗？']);
    await tachyon.print_and_wait(['自己的爱意', me.sex, '会喜欢吗？']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '，是能够与',
      me.sex,
      '共同扶持，一起走下去的人吗',
    ]);
    era.println();
    await tachyon.print_and_wait('啊啊，说到底也就是这么回事而已');
    era.println();
    await tachyon.print_and_wait('燃烧的爱是耀眼的，也是稍纵即逝的');
    await tachyon.print_and_wait('那样的爱，是不持续的');
    await tachyon.print_and_wait('现在的自己，不过就是困于火光之中的飞蛾');
    era.println();
    await tachyon.print_and_wait('想要');
    await tachyon.print_and_wait('想要');
    await tachyon.print_and_wait('想要恒久的爱，想要永恒的爱');
    await tachyon.print_and_wait('想要钻石一般，永恒且闪耀的爱');
    await tachyon.print_and_wait(['想要理所当然陪伴在', me.sex, '身旁的爱']);
    era.println();
    await tachyon.print_and_wait('但是，这样的自己真的可以吗');
    await tachyon.print_and_wait('真的是能够托付一生的对象吗？');
    await tachyon.print_and_wait([me.sex, '愿意承诺，永远爱着这样的自己吗']);
    await tachyon.print_and_wait(['自己有办法，永远爱着这样的', me.sex, '吗']);
    era.println();
    tachyon.say('我……');
    era.printButton('选择永恒', 1);
    era.printButton('继续燃烧', 2);
    if ((await era.input()) === 1) {
      await tachyon.print_and_wait(['与', me.sex, '并肩']);
      await tachyon.print_and_wait(['与', me.sex, '携手']);
      await tachyon.print_and_wait(['与', me.sex, '建立家庭']);
      await tachyon.print_and_wait(['与', me.sex, '产下生命']);
      era.println();
      await tachyon.print_and_wait('想要……安定，且平稳的爱');
      await tachyon.print_and_wait('答案简单的自己都吓了一跳');
      era.println();
      await tachyon.print_and_wait([
        '下班回家后，看见已经在家门口等待着自己的',
        me.sex,
      ]);
      await tachyon.print_and_wait([
        '如果是自己提早下班，就准备好料理等待',
        me.sex,
        '的归来',
      ]);
      await tachyon.print_and_wait([
        '虽然自己并不擅长料理，但为了',
        me.sex,
        '，',
        tachyon.get_colored_name(),
        ' 愿意将曾经发誓奉献于研究的双手用于炒菜煮饭',
      ]);
      await tachyon.print_and_wait('假日两人一起出门，去哪里都可以');
      await tachyon.print_and_wait(
        '公园、家具行，又或者实验用具店、化工药品店',
      );
      await tachyon.print_and_wait([
        '和',
        me.sex,
        '因为沙发的摆放位置这种芝麻蒜皮小事而吵架',
      ]);
      await tachyon.print_and_wait(
        '直到晚上都不肯承认错误的别扭的两人，最后因为不知谁主动的一个温暖的拥抱而重新言归于好',
      );
      await tachyon.print_and_wait([
        '在新居落成的当天，一定会很累吧，哪怕是',
        tachyon.get_uma_sex_title(),
        '的体力大概也会支撑不住',
      ]);
      await tachyon.print_and_wait([
        '明明想要在好不容易落成的新家里好好温存，结果却直接倒在',
        me.sex,
        '怀中就这么睡着了',
      ]);
      if (tachyon.sex_code - 1 && me.sex_code === 1) {
        await tachyon.print_and_wait('怀孕的那天，他绝对会很惊喜吧');
        await tachyon.print_and_wait(
          '但是不能这么突然的告诉他，不然他到时候放出的强光会被邻居责怪扰民的',
        );
        await tachyon.print_and_wait('找个好时机，在白天吃早餐的时候');
        await tachyon.print_and_wait(
          '用若无其事的口气说出「亲爱的，你要当爸爸了♡」',
        );
        await tachyon.print_and_wait('到时候的他会是什么表情呢？');
        await tachyon.print_and_wait(
          '想要在孩子出生后，带着孩子一起看我们的照片',
        );
        await tachyon.print_and_wait('看当年的我是怎么被原实验体给迷住的');

        await tachyon.print_and_wait(
          '大概，孩子一定会觉得爸爸很可怜吧，被妈妈这样欺负',
        );
        await tachyon.print_and_wait('不过在床上被欺负的都是妈妈就是了♡');
        await tachyon.print_and_wait(
          '想在孩子长大成家后，安慰在被窝里默默哭泣的他',
        );
        await tachyon.print_and_wait(
          '……或许是反过来也说不定呢，说不定，我其实会是个意外疼爱孩子的母亲',
        );
        era.println();
      }
      await tachyon.print_and_wait([
        '不是因为有趣所以才选择与',
        me.sex,
        '在一起',
      ]);
      await tachyon.print_and_wait([
        '而是与',
        me.sex,
        '在一起的每一天都如此有趣',
      ]);
      await tachyon.print_and_wait('哪怕是这样无聊平淡的日常');
      await tachyon.print_and_wait([
        '只要一想到陪在身边的人是',
        me.sex,
        '，就不禁感到无比的期待了',
      ]);
      era.println();
      await me.say_and_wait('速子！听说你找我，有什么事吗？');
      era.println();
      await tachyon.print_and_wait('是哪个好心人通知的吗？还是心有灵犀？');
      await tachyon.print_and_wait('那都无所谓');
      await tachyon.print_and_wait('好好思考吧，该怎么说出口呢？');
      await tachyon.print_and_wait('嗯……就这样吧');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，我在想，我们是不是……也该踏入下个阶段了？',
      ]);
      await tachyon.print_and_wait('说出口的瞬间仿佛听见了，教堂的钟声');
      await sys_love_uma_in_event(32);
    } else {
      await tachyon.print_and_wait('永恒……吗？');
      era.println();
      await tachyon.print_and_wait('不知道');
      await tachyon.print_and_wait('不敢想');
      era.println();
      await tachyon.print_and_wait('自己有办法成为那样的陪伴者吗');
      await tachyon.print_and_wait([
        '有办法陪伴着',
        me.sex,
        '度过一辈子的时光吗',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '说到底，',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.get_phy_sex_title(),
        '，真的有办法成为那样的陪伴者，那样的伴侣，那样的……',
      ]);
      await tachyon.print_and_wait('爱人吗？');
      era.println();
      await tachyon.print_and_wait('不会做饭的自己');
      await tachyon.print_and_wait('沉浸于自我的自己');
      await tachyon.print_and_wait('性格懒散的自己');
      await tachyon.print_and_wait('没有耐心的自己');
      era.println();
      await tachyon.print_and_wait('现在或许还能接受吧');
      await tachyon.print_and_wait('那未来呢');
      await tachyon.print_and_wait('十年后呢？');
      await tachyon.print_and_wait('二十年后呢？');
      await tachyon.print_and_wait('六十年、七十年后呢？');
      era.println();
      await tachyon.print_and_wait('这样的感情，真的有办法永恒下去吗？');
      era.println();
      await tachyon.print_and_wait('不知道');
      await tachyon.print_and_wait('不敢想');
      era.println();
      await me.say_and_wait('速子！听说你找我，有什么事吗？');
      era.println();
      await tachyon.print_and_wait(
        '是哪个多事的人通知的吗？还是不凑巧的心有灵犀',
      );
      await tachyon.print_and_wait('……那都无所谓');
      await tachyon.print_and_wait('压抑吧，冷藏吧，封印吧');
      await tachyon.print_and_wait('将自己的可笑想法封印');
      era.println();
      await tachyon.say_and_wait('……没什么');
      era.println();
      await tachyon.print_and_wait(
        '让这名为爱情的熊熊火焰，继续以自己的担忧及不安为燃料燃烧下去',
      );
      await tachyon.print_and_wait(
        '这大概就是优柔寡断的自己必须承受的永恒责罚吧',
      );
      era.drawLine();
      await tachyon.print_and_wait([
        me.get_colored_name(),
        ' 摇了摇头，将内心的奇怪想法飘散，毫无犹豫的踏出了门外',
      ]);
      era.set('cflag:32:爱慕暂拒', 89);
    }
  }

  async 99(tachyon, me, callname) {
    await half_life(tachyon, me, callname);
  }
};
