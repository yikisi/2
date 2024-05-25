const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (acute, me, callname, flags) => {
    era.set('cflag:100:节日事件标记', 0);
    await print_event_name('新年的抱负', acute);
    await era.printAndWait([
      '元旦时分，与 ',
      acute.get_colored_name(),
      ' 一同待在训练员室内，一面看着电视，一面等待着新年的到来。',
    ]);
    await acute.say_and_wait('呼呼呼～被炉里暖呼呼的呢～');
    await era.printAndWait([
      '坐在被炉中的 ',
      acute.get_colored_name(),
      '，一边撕着橘子上的白条，一边漫不经心的说着。',
    ]);
    await acute.say_and_wait(['啊，对了。', callname, '～可以问一件事吗？']);
    era.printButton('「嗯？怎么了吗？」', 1);
    await era.input();
    await acute.say_and_wait(
      '其实啊……最近跟同龄人聊天的时候呢，感觉自己不太懂得如何跟年轻人交流呢。',
    );
    await acute.say_and_wait(
      '喜欢的东西啊，经常散步的地点啊，还有最近喜欢听的音乐——什么的呢。感觉自己很多话题都跟现在的年轻人对不上呢。',
    );
    await acute.say_and_wait(
      '所以说啊……等新年了之后呢。想要让自己在同龄人眼里发生翻天覆地的转变来着……',
    );
    await acute.say_and_wait([
      '因此呢，',
      callname,
      '。你觉得，我该怎么做好呢？',
    ]);
    era.println();
    era.printButton('「去努力学习年轻人的文化吧！」（根性+25）', 1);
    era.printButton('「先把这些事丢在一边吧？」（耐力+20）', 2);
    era.printButton(
      '「想些更有趣的话题来吸引同龄人的注意成为同龄人的翘楚吧！」（技能点数+20）',
      3,
    );
    switch (await era.input()) {
      case 1:
        await acute.say_and_wait('学习年轻人的文化吗……原来如此呢。');
        await acute.say_and_wait('那么首先，就用手机去查查看当下的流行。');
        await acute.say_and_wait(
          'D.A.N.G.X.I.A.D.E.L.I.U.X.U……打错字了，删除——',
        );
        await acute.say_and_wait('啊，不小心删多了……那就重来——');
        await era.printAndWait(
          '一面用食指敲击着手机，一面小声的念出打出的字母。',
        );
        await era.printAndWait('远远地望过去，实在是感觉怪可爱的。');
        await acute.say_and_wait('D.A.N.G.X.I.A.D.E.L.I.U.X.I.N.G——回车');
        await acute.say_and_wait('………………');
        await acute.say_and_wait('唔噜？页面怎么没有动呢？');
        await era.printAndWait([
          '虽然不知道 ',
          acute.get_colored_name(),
          ' 对手机的操作。',
        ]);
        await era.printAndWait('但从一旁听来，看来是把回车错当做确认键了吧。');
        await era.printAndWait([
          '看来【学习年轻人文化】对 ',
          acute.get_colored_name(),
          ' 来说，仍是任重道远啊——',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(100, [0, 0, 0, 25], 0);
        break;
      case 2:
        await acute.say_and_wait('先把这些事丢在一边……吗？');
        await acute.say_and_wait(
          '嗯……说来也是呢。既然是新年的话——得要好好休息才是呢。',
        );
        await acute.say_and_wait(['那么——给，', callname, '。']);
        await era.printAndWait([
          '慢条斯理的 ',
          acute.get_colored_name(),
          '，将手中已去处了白条的橘子撇成了两半后，递了过来。',
        ]);
        await era.printAndWait('从中掰下一块，塞进嘴里——');
        era.printButton('「——————————————」', 1);
        await era.input();
        await era.printAndWait('酸死了啊！！！！');
        await era.printAndWait([
          '一旁，看着 ',
          me.get_colored_name(),
          ' 因酸味而扭曲了面容的 ',
          acute.get_colored_name(),
          '，不由自主的笑出了声来。',
        ]);
        await era.printAndWait('在笑声之中，度过了一个酸味十足的新年——');
        flags.wait_flag = get_attr_and_print_in_event(100, [0, 20], 0);
        break;
      case 3:
        await acute.say_and_wait('成为同龄人的翘楚？');
        await era.printAndWait([
          acute.get_colored_name(),
          ' 似乎有点没有听明白。',
        ]);
        await acute.say_and_wait(
          '虽然不是很明白……但也就是说，是要努力寻找话题的意思吗？',
        );
        await acute.say_and_wait('努力的寻找话题……话题——');
        await acute.say_and_wait(
          '啊，想到了。新年节庆炖菜的制作方法——用这个当做话题的话，一定能把气氛变得融洽的……哎嘿嘿。',
        );
        await era.printAndWait([acute.get_colored_name(), ' 温和得笑着。']);
        await era.printAndWait(
          '而与此同时，厨房内的炖在炉前的美食，发出了欢腾的声音——',
        );
        flags.wait_flag = get_attr_and_print_in_event(100, undefined, 20);
    }
  };

  handlers[47 + 6] = async (acute, me, callname, flags) => {
    const a_call_j = sys_get_colored_callname(100, 48),
      j_call_a = sys_get_colored_callname(48, 100),
      jordan = get_chara_talk(48);
    era.set('cflag:100:节日事件标记', 0);
    await print_event_name('世纪初最强拳人节', acute);
    await era.printAndWait([
      '春来秋去，自成为 ',
      acute.get_colored_name(),
      ' 的训练员以来，也已到了第二年。',
    ]);
    await era.printAndWait(
      '元旦的氛围尚未离去，去年年末来商店街买东西时偶然蹩见的圣诞树又一次挂上了新的装饰，摆在商店街的入口。',
    );
    await era.printAndWait(
      '在不远处眺望着圣诞树上的礼盒，正奇怪这到底是什么节日的装饰，掐着手指算了算时间，这才想起来，过几天就是情人节的日子了。',
    );
    await era.printAndWait([
      '……嘛，是跟 ',
      me.get_colored_name(),
      ' 无关的节日。',
    ]);
    await era.printAndWait([
      '对于生活在特雷森高墙中的 ',
      me.get_colored_name(),
      ' 而言，平日里的生活就是与前途无量的新人',
      acute.get_uma_sex_title(),
      '进行着日复一日不间断的训练，自然也没有充足的时间，在高墙外与同龄的异性谈酸酸甜甜的恋爱了。',
    ]);
    await era.printAndWait([
      '虽然听说现在受欢迎的训练员偶尔也会在情人节收到担当',
      acute.get_uma_sex_title(),
      '的友情巧克力……',
    ]);
    await era.printAndWait([
      '但不管怎么想，',
      acute.get_colored_name(),
      ' 都不像是那种会过情人节的年轻系',
      acute.get_uma_sex_title(),
      '啊——',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait('…………');
    era.printButton('「嗯？」', 1);
    await era.input();
    await era.printAndWait([
      '在商店街采购训练用品时，偶然间在商店街的入口看见了正巧经过的「',
      acute.get_colored_name(),
      '」与「',
      jordan.get_colored_name(),
      '」。',
    ]);
    await era.printAndWait('两人有说有笑的并排走在街上，也不知在聊些什么。');
    await era.printAndWait('看方向，似乎是打算去「车站」附近——');
    await era.printAndWait('…………要不跟上去看看吧？');
    await era.printAndWait('不知为何，隐隐总有会发生什么预感的。');
    await era.printAndWait(
      '提着刚买的两斤特价鸡胸肉和蛋白粉，偷偷的跟在了自己的担当学生身后。',
    );
    await era.printAndWait('……');
    await era.printAndWait([
      '……是错觉吗？总感觉路边的警察看 ',
      me.get_colored_name(),
      ' 的眼神似乎有点不太正常。',
    ]);
    era.drawLine();
    await jordan.say_and_wait([
      '就是这个！',
      j_call_a,
      '——你看，完全玩不了嘛！',
    ]);
    await acute.say_and_wait('……『拳击机』？');
    await acute.print_and_wait([
      '车站边的游戏中心，',
      acute.get_colored_name(),
      ' 与 ',
      jordan.get_colored_name(),
      ' 两人正围着一台新的拳击机。',
    ]);
    await jordan.say_and_wait([
      '对，就是这个游戏中心新推出的，新设了『',
      acute.get_uma_sex_title(),
      '』级别拳击机。',
    ]);
    await jordan.say_and_wait([
      '只要能在『',
      acute.get_uma_sex_title(),
      '』级别里取得高分的话，就能够拿到奖品——',
    ]);
    await jordan.say_and_wait(
      '但我之前来的时候打了好几次，不仅没有高分，而且数值都一动不动的——一定是坏掉了才会这样吧！',
    );
    await acute.say_and_wait('……『拳击机』？');
    await acute.print_and_wait([
      '摸着自己的侧脸，',
      acute.get_colored_name(),
      ' 打量起了眼前从未见过的机器。',
    ]);
    await jordan.say_and_wait('真是糟糕……我还想要奖品里的美甲套餐呢。');
    await acute.say_and_wait(
      '阿拉阿拉……原来是这样啊，所以你才这么不甘嘛，唔姆唔姆——',
    );
    await acute.say_and_wait([
      a_call_j,
      '，你可以再试一次吗？我在旁边帮你看看哦～',
    ]);
    await jordan.say_and_wait('没问题，这次可是要认真上了。你稍微走远一点哦。');
    await jordan.say_and_wait('预备——');
    await acute.print_and_wait('╲！砰～！╱');
    await jordan.say_and_wait(
      '——呼，你看！打完了，这排名动都不动，很明显是机器坏掉了嘛。',
    );
    await acute.say_and_wait('嗯……原来如此呢。');
    await era.printAndWait([
      '站在一旁的 ',
      acute.get_colored_name(),
      '，似乎看出了些许门道。',
    ]);
    await acute.say_and_wait(['接下来照我说的，再试一次吧，', a_call_j, '。']);
    await acute.say_and_wait(
      '首先呢，不要把拇指塞进拳头里，不然的话你会像刚才那样下意识保护指甲而用不上力。',
    );
    await acute.say_and_wait(
      '接下来是你的站位，出拳时要把另一边的腿放在前面，然后再侧身——',
    );
    await jordan.say_and_wait('啊、阿勒？……是这样吗？');
    await acute.say_and_wait(
      '对、对……然后呢，膝盖放松、夹住腋窝。出拳时手臂和肩膀保持平行线，注意下半身的重心，创造出【黄金矩形】，然后呢——',
    );
    await acute.say_and_wait('然后用尽全力，打出去！……试试看吧？');
    await jordan.say_and_wait([
      '欸？唔……是这样吗？……真的可以吗，',
      j_call_a,
      '？',
    ]);
    await acute.say_and_wait([
      '只管相信就好哦，',
      a_call_j,
      '。只要能摆出黄金矩形的姿势，就一定能做到的啦。',
    ]);
    await jordan.say_and_wait('唔……尽然你这么说的话……预备——');
    await era.printAndWait('╲！！！砰～！！！╱');
    await era.printAndWait('*～叮～*');
    await era.printAndWait('*～恭喜你已获得了奖品～*');
    await jordan.say_and_wait('欸！？不是吧？真的出奖品了？');
    await jordan.say_and_wait([
      '我明明只是听了 ',
      j_call_a,
      ' 说的调整了一下姿势……而且现在手臂还有一种麻麻的感觉——',
    ]);
    await jordan.say_and_wait([j_call_a, '，你也太厉害了吧！']);
    await acute.say_and_wait(
      '赫赫……可能是因为我对拳击啊，稍～微有那么一点点的经验吧？',
    );
    await acute.say_and_wait(
      '以前还在打拳的时候呢，曾经被人称为『右直拳的小锐』哦？',
    );
    await acute.say_and_wait(
      '嘛……虽然再打败南O四天王后后来被改称为了『传奇』了呢。',
      true,
    );
    await jordan.say_and_wait([
      '唉～～～～！那 ',
      j_call_a,
      ' 来的话，肯定能拿到更多的奖品吧？',
    ]);
    await acute.say_and_wait('啊哈哈……这个嘛——');
    await acute.print_and_wait('……老实说的话，其实并不想试试来着。');
    await acute.print_and_wait(
      '毕竟不打拳已经好多年了，自己早就已经找不回当初的巅峰状态了来着。',
    );
    await acute.print_and_wait(
      '用这台机器测试的话，不管测试的结果如何，恐怕都会因找不回曾经巅峰时的感觉而遗憾吧？',
    );
    await acute.print_and_wait(
      '伸出手来，正想要推脱——却恰好看到了墙上的奖品一栏。',
    );
    await acute.say_and_wait('咕噜姆……三等奖，巧克力慕斯特大蛋糕？', true);
    await acute.say_and_wait(
      ['说起来，情人节快要到了呢。', callname, ' 那边——'],
      true,
    );
    await acute.say_and_wait('…………');
    await acute.say_and_wait([
      '唔，我明白了，那就来试试看吧。',
      a_call_j,
      '，往旁边站一点哦？',
    ]);
    await acute.print_and_wait([
      '本应推脱的右手化为了拳头，这使 ',
      acute.get_colored_name(),
      ' 充满了决心。',
    ]);
    await jordan.say_and_wait('好耶！');
    await acute.say_and_wait('咕噜姆……好好想一想过去的感觉。', true);
    await acute.say_and_wait(
      '回想起来……以前在埃及对战O奥的时候，自己的眼睛被对方遮住的时候，自己所挥出的一拳——',
      true,
    );
    await acute.say_and_wait('立点支点作用点……立点支点作用点——哈！！！');
    await era.printAndWait('╲╲╲！！！！！！！！砰！！！！！！！！╱╱╱');
    await acute.print_and_wait([
      '伴随着 ',
      acute.get_colored_name(),
      ' 的一击，四面飘起了不知从何而来的巨大烟尘。',
    ]);
    await era.printAndWait('*～叮～*');
    await era.printAndWait(
      '*～故障、故障、故障——请立刻联系工作人员进行处理～*',
    );
    await acute.say_and_wait('啊……阿拉？这是把机器给打坏了吗……');
    await acute.say_and_wait('太久没有打拳，果然生疏了啊——');
    await jordan.say_and_wait('………………不是吧。');
    await acute.print_and_wait([
      jordan.get_colored_name(),
      ' 目瞪口呆得，望着被这仅仅一击就彻底形变的机器陷入了深深沉思。',
    ]);
    await acute.print_and_wait(
      '很快，这座城市的地下拳术界，崭新的传说即将就此诞生——',
    );
    era.drawLine();
    await acute.print_and_wait([
      '是夜，推脱了游戏厅3000胡萝卜宝石一等奖的 ',
      acute.get_colored_name(),
      '，带着巧克力慕斯特大蛋糕来到了训练员室。',
    ]);
    await acute.print_and_wait(
      '把蛋糕放在被炉上，躲在一旁的礼物盒中，特意关上了灯。',
    );
    await acute.say_and_wait(
      ['听 ', a_call_j, ' 说的，年轻人喜欢的惊喜派对……应该就是这样吧？'],
      true,
    );
    await acute.say_and_wait(
      [
        '为此还特意穿上了 ',
        a_call_j,
        ' 穿的……决胜服？等 ',
        callname,
        ' 回来了之后呢，就跳出来，吓他一跳，什么的……',
      ],
      true,
    );
    await acute.say_and_wait(
      '欸嘿嘿……仔细想想的话，还真不像是我会做的事情呢。',
      true,
    );
    await acute.print_and_wait([
      '为什么要给 ',
      callname,
      ' 这样的情人节惊喜呢？说实话 ',
      acute.get_colored_name(),
      ' 自己也不明白。',
    ]);
    await acute.print_and_wait([
      '只是在拳击机的奖品名单上，看到巧克力慕斯特大蛋糕的时候，脑海里不由自主的浮现出了给 ',
      callname,
      ' 一个惊喜的场景。',
    ]);
    await acute.print_and_wait([
      '还记得第一次在天台上看见偷偷流泪的 ',
      callname,
      ' 的时候，还觉得',
      me.sex,
      '会是被异性抛弃了后躲起来一个人哭的小孩子呢。',
    ]);
    await acute.print_and_wait([
      '结果一转眼，自己自成为 ',
      callname,
      ' 的担当',
      acute.get_uma_sex_title(),
      '以来，都已经过了整整一年了呢。',
    ]);
    await acute.say_and_wait('……一整年啊，时间过的可真快呢。', true);
    await acute.say_and_wait(
      [
        '本以为，作为赛',
        acute.get_uma_sex_title(),
        '在特雷森学园，会进行很枯燥的训练呢……没想到意外的还不赖呢。',
      ],
      true,
    );
    await acute.print_and_wait([
      '闭上眼睛，脑海里渐渐浮现起了 ',
      callname,
      ' 的模样。',
    ]);
    await acute.print_and_wait('懦弱、倒霉、患得患失，还隐隐有些小孩子气。');
    await acute.print_and_wait('可却又温柔、善良、行动力强，意外的很有气概。');
    await acute.print_and_wait('自己，就是与这样的人共度了一整年的时光。');
    await acute.print_and_wait('而往后，还有两年的时间……');
    await acute.print_and_wait(
      '如果往后的两年，也会像这共同度过的一年这样，转瞬间便流逝了呢？',
    );
    await acute.say_and_wait('…………');
    await acute.print_and_wait('不知为何，一想到这里，就不由得有些烦躁。');
    await acute.print_and_wait(
      '摇了摇头，告诉自己——「还有两年的时间呢，不用焦急。」',
    );
    await acute.print_and_wait([
      '等 ',
      callname,
      ' 回来吧——等他回来，给他一个大大的惊喜——',
    ]);
    await acute.say_and_wait('可是——');
    await acute.say_and_wait('——……');
    await acute.say_and_wait('……');
    await acute.print_and_wait('话停在嘴边，却说不出口。');
    await acute.print_and_wait([
      '不明白自己这股烦躁到底是什么的 ',
      acute.get_colored_name(),
      '，卷缩在黑暗的被炉之中。',
    ]);
    await acute.print_and_wait('只有自己能听见，自己那砰砰不停的心跳。');
    await acute.print_and_wait('………………');
    await acute.print_and_wait('…………');
    await acute.print_and_wait('……');
    await acute.print_and_wait(['今天的 ', callname, '，回来得格外晚。']);
    era.drawLine({ content: '特雷森外的警局' });
    era.printButton(
      `「警察先生，请你一定要相信我。我真的就只是担心自己担当的${acute.get_uma_sex_title()}，而在后面偷偷的跟着${acute.sex}而已。我真的不是尾行痴汉！」`,
      1,
    );
    await era.input();
    await say_by_passer_by_and_wait('警察', [
      '少来！别以为我不知道，现在的痴汉都对当下最火的赛',
      acute.get_uma_sex_title(),
      '们有性幻想。对外都宣称自己是特雷森的训练员。光这周，我就已经抓了八个自称训练员、三个自称老师、还有一个自称医学博士的尾行痴汉了。',
    ]);
    era.printButton(
      '「我跟他们真的不一样！我有正经的工作，也有伟大的理想——」',
      1,
    );
    await era.input();
    await say_by_passer_by_and_wait(
      '警察',
      '那又怎样？隔壁牢房还有两个说自己是要在除夕夜街头放飞理想的有志青年，实际上不还是无证经营烟花炮竹的小贩？',
    );
    era.printButton(
      '「警察先生，我真的不是——算了，换一种说法吧。我求你放了我吧，警察同志，我跟你说——我在目白家有人。」',
      1,
    );
    await era.input();
    await say_by_passer_by_and_wait(
      '警察',
      '哈？你想威胁我？我长那么大了还没人敢威胁我——我还真就不怕了！你目白家有人是伐？我还真就告诉你，这件警察局——就是目白家开的！',
    );
    era.printButton(
      '「……哈？目白家还真的连警局都扩建了业务啊？呜啊，不管是谁都好，快放我出去啊！我是冤枉的！！！」',
      1,
    );
    await era.input();
    era.drawLine();

    const tokino = get_chara_talk(301);
    await era.printAndWait([
      '后来，',
      tokino.get_colored_name(),
      ' 巡逻的时候路过了当地的派出所，听到了 ',
      me.get_colored_name(),
      ' 的救命声后，终于把 ',
      me.get_colored_name(),
      ' 救了出去。',
    ]);
    await era.printAndWait([
      '在听说自己是因为「尾随',
      acute.get_uma_sex_title(),
      '」而进的监狱后，被 ',
      tokino.get_colored_name(),
      ' 狠狠的白了一眼。',
    ]);
    await era.printAndWait([
      '回来的路上拼命的向 ',
      tokino.get_colored_name(),
      ' 解释自己真的不是尾行痴汉。并出于诚意请',
      acute.sex,
      '来自己的休息室里吃宵夜。',
    ]);
    await era.printAndWait([
      '结果在自己的房间里看到了巨大的巧克力慕斯蛋糕，和躺在一个巨大礼物盒里不知为何穿着格外暴露得圣诞老人（决胜）服的睡着了的 ',
      acute.get_colored_name(),
      '。',
    ]);
    await tokino.say_and_wait('………………');
    era.printButton('「………………」', 1);
    await era.input();
    era.printButton('「我说我是被动的你信吗？」', 1);
    await era.input();
    era.drawLine();
    await era.printAndWait('后来，被打了个全麻倒立插在了庭院里。');
    await era.printAndWait('并被罚了三个月的薪水后了事。');
    await era.printAndWait([
      '自那之后，',
      get_chara_talk(302).get_colored_name(),
      '、',
      tokino.get_colored_name(),
      '，',
      acute.get_colored_name(),
      ' 看 ',
      me.get_colored_name(),
      ' 的眼神都有些变化。',
    ]);
    await era.printAndWait('希望是好的变化吧……哈哈。（望天）');
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      100,
      [0, 0, 10],
      30,
      undefined,
      true,
    );
    flags.wait_flag =
      get_attr_and_print_in_event(0, [0, 0, 0, 1], 0, undefined, true) ||
      flags.wait_flag;
  };

  handlers[95 + 1] = async (acute, me, callname, flags) => {
    era.set('cflag:100:节日事件标记', 0);
    await print_event_name('新春的贺礼', acute);
    await era.printAndWait([
      '第三年的春节，依旧是与 ',
      acute.get_colored_name(),
      ' 在休息室内一起度过的。',
    ]);
    await acute.say_and_wait([
      '新年快乐哦，',
      callname,
      '～。我烤了很多年糕哦，要一起来吃吗？',
    ]);
    await era.printAndWait([
      '轻车熟路的从厨房内端着托盘走出的 ',
      acute.get_colored_name(),
      '，看上去比 ',
      me.get_colored_name(),
      ' 更像是这间训练员休息室的主人。',
    ]);
    await era.printAndWait([
      '而与端着托盘的 ',
      acute.get_colored_name(),
      ' 形成鲜明对比的，是自休息日以来几乎与被炉融为一体的懒散得自己。',
    ]);
    await era.printAndWait([
      '……先说好，',
      me.get_colored_name(),
      ' 这可不是在偷懒，而是在充分利用自己的休息时间。',
    ]);
    await era.printAndWait([
      '平常的日子，基本都被各种训练和比赛场地考察的日常所挤满了，哪怕少有的能够自由活动休息的时间，也主要是与 ',
      acute.get_colored_name(),
      ' 一起活动。',
    ]);
    await era.printAndWait([
      '虽然跟 ',
      acute.get_colored_name(),
      ' 一起活动不算是疲惫的工作啦……但不管怎么说，因此而挤占了自己少有的休息时间也是事实。',
    ]);
    await era.printAndWait([
      '工作日每天晚上结束训练回到家里时总是累得倒在床上就睡，第二天睡醒后就立刻与 ',
      acute.get_colored_name(),
      ' 进行训练，就这样日复一日的进行着好似永无止尽的训练。',
    ]);
    await era.printAndWait(
      '即便是一周难得的休息日，一但看向洗衣机里那堆得犹如小山般高的散发着臭味的换洗衣物时和休息室里那乱七八糟得好似怎么做也做不完的家务，自己的心情就会伴随着只剩下四个小时浮于天空中的太阳般一同沉入阴影之中。',
    );
    await era.printAndWait([
      '坦白的说，如果不是因为 ',
      acute.get_colored_name(),
      ' 会为自己置办三餐的话，搞不好自己连怎么吃饭都会忘掉了吧……',
    ]);
    await acute.say_and_wait([callname, '，张嘴，啊～～～']);
    era.printButton('「啊——唔。」', 1);
    await era.input();
    await era.printAndWait([
      '一口咬下 ',
      acute.get_colored_name(),
      ' 递来的烤年糕，炽热而甜蜜的味道瞬间于口中扩散。',
    ]);
    await acute.say_and_wait([
      '姆姆～干得很好呢，',
      callname,
      '——接下来要自己吃了哦？',
    ]);
    await era.printAndWait([
      '满脸宠溺之色的 ',
      acute.get_colored_name(),
      '，就这样将盛有年糕的碗筷递给了自己。',
    ]);
    await era.printAndWait('随后又站起身来，哼着欢快的小调，走向了阳台——');
    await acute.say_and_wait('接下来是洗衣服～洗衣服～～～');
    await era.printAndWait('………………');
    await era.printAndWait('怎么有种莫名的负罪感？');
    await era.printAndWait([
      '让自己担当',
      acute.get_uma_sex_title(),
      '把自己打扫卫生洗衣服做饭，然后自己躺在被炉里插科打诨……',
    ]);
    await era.printAndWait('……嘶，这是不是有些猥琐啊？');
    await era.printAndWait('不对，这也太猥琐了。');
    await era.printAndWait('得做些什么才行——');
    era.println();
    era.printButton('「去帮厨吧！」（全属性+5）', 1);
    era.printButton('「自己的衣服自己洗！」（技能点数+35）', 2);
    era.printButton(`「给 ${acute.name} 揉揉肩吧！」（耐力+30）`, 3);
    switch (await era.input()) {
      case 1:
        await era.printAndWait(
          '虽然懒洋洋的感觉非常的幸福，但自己也不能沉迷于其中了。',
        );
        await era.printAndWait('——好，决定了！');
        await era.printAndWait('站起身来，挺身走向了厨房。');
        await era.printAndWait(
          '至少今年的晚餐与过年吃的小菜，还是由自己来做吧。',
        );
        await era.printAndWait('那么首先，先把冰冻的饺子化开……');
        await era.printAndWait('………………');
        flags.wait_flag = get_attr_and_print_in_event(
          100,
          new Array(5).fill(5),
          0,
        );
        break;
      case 2:
        await era.printAndWait([
          '不管怎么说，也不能让 ',
          acute.get_colored_name(),
          ' 一个人把所有的家务活都做了。',
        ]);
        await era.printAndWait('站起身来，挺身走向了阳台。');
        await acute.say_and_wait('嗅————');
        await era.printAndWait('…………嗯？');
        await era.printAndWait([
          '意外看见了 ',
          acute.get_colored_name(),
          ' 正闻着自己昨天刚换下来的衬衫。',
        ]);
        era.printButton(`「额……${acute.name}？」`, 1);
        await era.input();
        await acute.say_and_wait(['啊……是 ', callname, ' 啊～']);
        await era.printAndWait([
          '就像是稀松平常般，',
          acute.get_colored_name(),
          ' 将捂在鼻子上的衬衫取了下来。',
        ]);
        await acute.say_and_wait(['有什么事吗，', callname, '？']);
        era.printButton('「那个……我的衬衫怎么了吗？」', 1);
        await era.input();
        await acute.say_and_wait([
          '啊……你说这个啊。我刚刚一时兴起所以闻了一下呢——很有男人味哦，',
          callname,
          '。',
        ]);
        era.printButton('「………………」', 1);
        await era.input();
        await era.printAndWait('…………');
        await era.printAndWait([
          '姑且把 ',
          acute.get_colored_name(),
          ' 赶出了天台。',
        ]);
        await era.printAndWait([
          '洗衣机内的衣服咕噜咕噜得转，回想起刚刚 ',
          acute.get_colored_name(),
          ' 闻着衬衫的场景，不知为何心中有些荡漾。',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('还是过会儿再回房间里好了。');
        flags.wait_flag = get_attr_and_print_in_event(100, [], 35);
        break;
      case 3:
        await era.printAndWait([
          '在 ',
          acute.get_colored_name(),
          ' 洗完衣服回房间后，姑且把 ',
          acute.get_colored_name(),
          ' 请进了被炉里。',
        ]);
        await acute.say_and_wait(['咕噜姆？有什么事吗，', callname, '？']);
        await era.printAndWait([
          acute.get_colored_name(),
          ' 抬起头，一脸不解的望向了此刻正站在其身后的自己。',
        ]);
        await era.printAndWait([
          '然而就在此时，',
          me.get_colored_name(),
          ' 那罪恶的双手向 ',
          acute.get_colored_name(),
          ' 的身上探出——',
        ]);
        await era.printAndWait('——轻轻一捏。');
        await acute.say_and_wait('啊？❤️');
        await era.printAndWait([
          '小手轻轻的揉捏，',
          acute.get_colored_name(),
          ' 的尾巴几乎转瞬间绷直。',
        ]);
        await era.printAndWait([
          '……原来如此，这里是 ',
          acute.get_colored_name(),
          ' 的敏感带吗？',
        ]);
        await acute.say_and_wait(['那，那个❤️……', callname, '……你这是？']);
        era.printButton(
          `「不要动，${acute.name}。你都忙这么久了，我帮你按摩放松一下吧。」`,
          1,
        );
        await era.input();
        await acute.say_and_wait('但、但是那里……啊❤️～');
        await era.printAndWait([
          '稍稍一捏，求饶般的娇媚便从 ',
          acute.get_colored_name(),
          ' 的口中叫出。',
        ]);
        await era.printAndWait([
          '每每一用力，',
          acute.get_colored_name(),
          ' 便会不由自主的嚷出这一个字的短语。',
        ]);
        await era.printAndWait('不知为何，有一种莫名的兴奋感与背德感。');
        await era.printAndWait([
          '就这样，在仅有两人的休息室内，与 ',
          acute.get_colored_name(),
          ' 按摩按了个爽。',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(100, [0, 30], 0);
    }
  };
};
