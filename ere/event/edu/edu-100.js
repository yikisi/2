const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { race_enum } = require('#/data/race/race-const');

const handlers = {};

handlers[event_hooks.week_start] = async () => {
  const acute = get_chara_talk(100),
    callname = sys_get_callname(100, 0),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:100:育成回合计时');
  if (edu_weeks === 47 + 1) {
    await print_event_name('新年的抱负', acute);
    era.println();
    await era.printAndWait(
      '元旦时分，与奇锐骏一同待在训练员室内，一面看着电视，一面等待着新年的到来。',
    );
    await acute.say_and_wait('呼呼呼～被炉里暖呼呼的呢～');
    await era.printAndWait(
      '坐在被炉中的奇锐骏，一边撕着橘子上的白条，一边漫不经心的说着。',
    );
    await acute.say_and_wait(`啊，对了。${me.actual_name}～可以问一件事吗？`);
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
    await acute.say_and_wait(`因此呢，${callname}。你觉得，我该怎么做好呢？`);
    era.println();
    era.printButton('「去努力学习年轻人的文化吧！」', 1);
    era.printButton('「先把这些事丢在一边吧？」', 2);
    era.printButton(
      '「想些更有趣的话题来吸引同龄人的注意成为同龄人的翘楚吧！」',
      3,
    );
    const ret = await era.input();

    if (ret === 1) {
      await acute.say_and_wait('学习年轻人的文化吗……原来如此呢。');
      await acute.say_and_wait('那么首先，就用手机去查查看当下的流行。');
      await acute.say_and_wait('D.A.N.G.X.I.A.D.E.L.I.U.X.U……打错字了，删除——');
      await acute.say_and_wait('啊，不小心删多了……那就重来——');
      await era.printAndWait(
        '一面用食指敲击着手机，一面小声的念出打出的字母。',
      );
      await era.printAndWait('远远地望过去，实在是感觉怪可爱的。');
      await acute.say_and_wait('D.A.N.G.X.I.A.D.E.L.I.U.X.I.N.G——回车');
      await acute.say_and_wait('………………');
      await acute.say_and_wait('唔噜？页面怎么没有动呢？');
      await era.printAndWait('虽然不知道奇锐骏对手机的操作。');
      await era.printAndWait('但从一旁听来，看来是把回车错当做确认键了吧。');
      await era.printAndWait(
        '看来【学习年轻人文化】对奇锐骏来说，仍是任重道远啊——',
      );
      get_attr_and_print_in_event(100, [0, 0, 0, 25, 0], 0);
    } else if (ret === 2) {
      await acute.say_and_wait('先把这些事丢在一边……吗？');
      await acute.say_and_wait(
        '嗯……说来也是呢。既然是新年的话——得要好好休息才是呢。',
      );
      await acute.say_and_wait(`那么——给，${callname}。`);
      await era.printAndWait(
        '慢条斯理的奇锐骏，将手中已去处了白条的橘子撇成了两半后，递了过来。',
      );
      await era.printAndWait('从中掰下一块，塞进嘴里——');
      era.printButton('「——————————————」', 1);
      await era.input();
      await era.printAndWait('酸死了啊！！！！');
      await era.printAndWait(
        '一旁，看着自己因酸味而扭曲了面容的奇锐骏，不由自主的笑出了声来。',
      );
      await era.printAndWait('在笑声之中，度过了一个酸味十足的新年——');
      era.println();
      const to_print = sys_change_attr_and_print(100, '体力', 200);
      to_print.length &&
        (await era.printAndWait(
          [
            { content: `${acute.name} 的 ` },
            ...sys_change_attr_and_print(100, '体力', 200),
          ],
          { isList: true },
        ));
    } else {
      await acute.say_and_wait('成为同龄人的翘楚？');
      await era.printAndWait('奇锐骏似乎有点没有听明白。');
      await acute.say_and_wait(
        '虽然不是很明白……但也就是说，是要努力寻找话题的意思吗？',
      );
      await acute.say_and_wait('努力的寻找话题……话题——');
      await acute.say_and_wait(
        '啊，想到了。新年节庆炖菜的制作方法——用这个当做话题的话，一定能把千分变得融洽的……哎嘿嘿。',
      );
      await era.printAndWait('奇锐骏温和得笑着。');
      await era.printAndWait(
        '而与此同时，厨房内的炖在炉前的美食，发出了欢腾的声音——',
      );
      era.println();
      get_attr_and_print_in_event(100, [], 20);
    }
    await era.waitAnyKey();
  } else if (edu_weeks === 47 + 6) {
    await print_event_name('世纪初最强拳人节', acute);
    const chara48_talk = get_chara_talk(48);
    era.println();
    await era.printAndWait(
      '春来秋去，自成为奇锐骏的训练员以来，也已到了第二年。',
    );
    await era.printAndWait(
      '元旦的氛围尚未离去，去年年末来商店街买东西时偶然蹩见的圣诞树又一次挂上了新的装饰，摆在商店街的入口。',
    );
    await era.printAndWait(
      '在不远处眺望着圣诞树上的礼盒，正奇怪这到底是什么节日的装饰，掐着手指算了算时间，这才想起来，过几天就是情人节的日子了。',
    );
    await era.printAndWait(`……嘛，是跟${sys_get_callname(0, 0)}无关的节日。`);
    await era.printAndWait(
      `对于生活在特雷森高墙中的${sys_get_callname(
        0,
        0,
      )}而言，平日里的生活就是与前途无量的新人${acute.get_uma_sex_title()}进行着日复一日不间断的训练，自然也没有充足的时间，在高墙外与同龄的女孩子谈酸酸甜甜的恋爱了。`,
    );
    await era.printAndWait(
      `虽然听说现在受欢迎的训练员偶尔也会在情人节收到担当${acute.get_uma_sex_title()}的友情巧克力……`,
    );
    await era.printAndWait(
      `但不管怎么想，奇锐骏都不像是那种会过情人节的年轻系${acute.get_uma_sex_title()}啊——`,
    );
    await era.printAndWait('………………');
    await era.printAndWait('…………');
    era.printButton('「嗯？」', 1);
    await era.input();
    await era.printAndWait(
      '在商店街采购训练用品时，偶然间在商店街的入口看见了正巧经过的「奇锐骏」与「东瀛佐敦」。',
    );
    await era.printAndWait('两人有说有笑的并排走在街上，也不知在聊些什么。');
    await era.printAndWait('看方向，似乎是打算去「车站」附近——');
    await era.printAndWait('…………要不跟上去看看吧？');
    await era.printAndWait('不知为何，隐隐总有会发生什么预感的。');
    await era.printAndWait(
      '提着刚买的两斤特价鸡胸肉和蛋白粉，偷偷的跟在了自己的担当学生身后。',
    );
    await era.printAndWait('………………');
    await era.printAndWait(
      `……是错觉吗？总感觉路边的警察看${sys_get_callname(
        0,
        0,
      )}的眼神似乎有点不太正常。`,
    );
    await era.printAndWait('…………');
    await era.printAndWait('……');
    await chara48_talk.say_and_wait('就是这个！锐骏同学——你看，完全玩不了嘛！');
    await acute.say_and_wait('……『拳击机』？');
    await era.printAndWait(
      '车站边的游戏中心，奇锐骏与东瀛佐敦两人正围着一台新的拳击机。',
    );
    await chara48_talk.say_and_wait(
      `对，就是这个游戏中心新推出的，新设了『${acute.get_uma_sex_title()}』级别拳击机。`,
    );
    await chara48_talk.say_and_wait(
      `只要能在『${acute.get_uma_sex_title()}』级别里取得高分的话，就能够拿到奖品——`,
    );
    await chara48_talk.say_and_wait(
      '但我之前来的时候打了好几次，不仅没有高分，而且数值都一动不动的——一定是坏掉了才会这样吧！',
    );
    await acute.say_and_wait('……『拳击机』？');
    await era.printAndWait(
      '摸着自己的侧脸，奇锐骏打量起了眼前从未见过的机器。',
    );
    await chara48_talk.say_and_wait('真是糟糕……我还想要奖品里的美甲套餐呢。');
    await acute.say_and_wait(
      '阿拉阿拉……原来是这样啊，所以你才这么不甘嘛，唔姆唔姆——',
    );
    await acute.say_and_wait('小佐敦，你可以再试一次吗？我在旁边帮你看看哦～');
    await chara48_talk.say_and_wait(
      '没问题，这次可是要认真上了。你稍微走远一点哦。',
    );
    await chara48_talk.say_and_wait('预备——');
    await era.printAndWait('╲！砰～！╱');
    await chara48_talk.say_and_wait(
      '——呼，你看！打完了，这排名动都不动，很明显是机器坏掉了嘛。',
    );
    await acute.say_and_wait('嗯……原来如此呢。');
    await era.printAndWait('站在一旁的奇锐骏，似乎看出了些许门道。');
    await acute.say_and_wait('接下来照我说的，再试一次吧，小佐敦。');
    await acute.say_and_wait(
      '首先呢，不要把拇指塞进拳头里，不然的话你会像刚才那样下意识保护指甲而用不上力。',
    );
    await acute.say_and_wait(
      '接下来是你的站位，出拳时要把另一边的腿放在前面，然后再侧身——',
    );
    await chara48_talk.say_and_wait('啊、阿勒？……是这样吗？');
    await acute.say_and_wait(
      '对、对……然后呢，膝盖放松、夹住腋窝。出拳时手臂和肩膀保持平行线，注意下半身的重心，创造出【黄金矩形】，然后呢——',
    );
    await acute.say_and_wait('然后用尽全力，打出去！……试试看吧？');
    await chara48_talk.say_and_wait(
      '欸？唔……是这样吗？……真的可以吗，锐骏同学？',
    );
    await acute.say_and_wait(
      '只管相信就好哦，小佐敦。只要能摆出黄金矩形的姿势，就一定能做到的啦。',
    );
    await chara48_talk.say_and_wait('唔……尽然你这么说的话……预备——');
    await era.printAndWait('╲！！！砰～！！！╱');
    await era.printAndWait('*～叮～*');
    await era.printAndWait('*～恭喜你已获得了奖品～*');
    await chara48_talk.say_and_wait('欸！？不是吧？真的出奖品了？');
    await chara48_talk.say_and_wait(
      '我明明只是听了锐骏同学说的调整了一下姿势……而且现在手臂还有一种麻麻的感觉——',
    );
    await chara48_talk.say_and_wait('锐骏同学，你也太厉害了吧！');
    await acute.say_and_wait(
      '赫赫……可能是因为我对拳击啊，稍～微有那么一点点的经验吧？',
    );
    await acute.say_and_wait(
      '以前还在打拳的时候呢，曾经被人称为『右直拳的小锐』哦？',
    );
    await acute.say_and_wait(
      '（嘛……虽然再打败南O四天王后后来被改称为了『传奇』了呢。）',
    );
    await chara48_talk.say_and_wait(
      '唉～～～～！那锐骏同学来的话，肯定能拿到更多的奖品吧？',
    );
    await acute.say_and_wait('啊哈哈……这个嘛——');
    await era.printAndWait('……老实说的话，其实并不试试来着。');
    await era.printAndWait(
      '毕竟不打拳已经好多年了，自己早就已经找不回当初的巅峰状态了来着。',
    );
    await era.printAndWait(
      '用这台机器测试的话，不管测试的结果如何，恐怕都会因找不回曾经巅峰时的感觉而遗憾吧？',
    );
    await era.printAndWait(
      '伸出手来，正想要推脱——却恰好看到了墙上的奖品一栏。',
    );
    await acute.say_and_wait('（咕噜姆……三等奖，巧克力慕斯特大蛋糕？）');
    await acute.say_and_wait(`（说起来，情人节快要到了呢。${callname}那边——）`);
    await acute.say_and_wait('…………');
    await acute.say_and_wait(
      '唔，我明白了，那就来试试看吧。小佐敦，往旁边站一点哦？',
    );
    await era.printAndWait('本应推脱的右手化为了拳头，这使奇锐骏充满了决心。');
    await chara48_talk.say_and_wait('好耶！');
    await acute.say_and_wait('（咕噜姆……好好想一想过去的感觉。）');
    await acute.say_and_wait(
      '（回想起来……以前在埃及对战O奥的时候，自己的眼睛被对方遮住的时候，自己所挥出的一拳——）',
    );
    await acute.say_and_wait('立点支点作用点……立点支点作用点——哈！！！');
    await era.printAndWait('╲╲╲！！！！！！！！砰！！！！！！！！╱╱╱');
    await era.printAndWait(
      '伴随着奇锐骏的一击，四面飘起了不知从何而来的巨大烟尘。',
    );
    await era.printAndWait('*～叮～*');
    await era.printAndWait(
      '*～故障、故障、故障——请立刻联系工作人员进行处理～*',
    );
    await acute.say_and_wait('啊……阿拉？这是把机器给打坏了吗……');
    await acute.say_and_wait('太久没有打拳，果然生疏了啊——');
    await chara48_talk.say_and_wait('………………不是吧。');
    await era.printAndWait(
      '东瀛佐敦目瞪口呆得，望着被这仅仅一击就彻底形变的机器陷入了深深沉思。',
    );
    await era.printAndWait(
      '很快，这座城市的地下拳术界，崭新的传说即将就此诞生——',
    );
    await era.printAndWait('………………');
    await era.printAndWait('…………');
    await era.printAndWait('……');

    await acute.print_and_wait(
      '是夜，推脱了游戏厅3000胡萝卜宝石一等奖的奇锐骏，带着巧克力慕斯特大蛋糕来到了训练员室。',
    );
    await acute.print_and_wait(
      '把蛋糕放在被炉上，躲在一旁的礼物盒中，特意关上了灯。',
    );
    await acute.say_and_wait(
      '（听小佐敦说的，年轻人喜欢的惊喜派对……应该就是这样吧？）',
    );
    await acute.say_and_wait(
      `（为此还特意穿上了小佐敦穿的……决胜服？等${callname}回来了之后呢，就跳出来，吓他一跳，什么的……`,
    );
    await acute.say_and_wait(
      '（欸嘿嘿……仔细想想的话，还真不像是我会做的事情呢。）',
    );
    await acute.print_and_wait(
      `为什么要给${callname}这样的情人节惊喜呢？说实话奇锐骏自己也不明白。`,
    );
    await acute.print_and_wait(
      `只是在拳击机的奖品名单上，看到巧克力慕斯特大蛋糕的时候，脑海里不由自主的浮现出了给${callname}一个惊喜的场景。`,
    );
    await acute.print_and_wait(
      `还记得第一次在天台上看见偷偷流泪的${callname}的时候，还觉得他会是被哪家姑娘抛弃了后躲起来一个人哭的小孩子呢。`,
    );
    await acute.print_and_wait(
      `结果一转眼，自己自成为${callname}的担当${acute.get_uma_sex_title()}以来，都已经过了整整一年了呢。`,
    );
    await acute.say_and_wait('（……一整年啊，时间过的可真快呢。）');
    await acute.say_and_wait(
      `（本以为，作为赛${acute.get_uma_sex_title()}在特雷森学院，会进行很枯燥的训练呢……没想到意外的还不赖呢。）`,
    );
    await acute.print_and_wait(
      `闭上眼睛，脑海里渐渐浮现起了${callname}的模样。`,
    );
    await acute.print_and_wait('懦弱、倒霉、患得患失，还隐隐有些小孩子气。');
    await acute.print_and_wait(
      '可却又温柔、善良、行动力强，意外的很有男子气概。',
    );
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
    await acute.print_and_wait(
      `等${callname}回来吧——等他回来，给他一个大大的惊喜——`,
    );
    await acute.say_and_wait('可是——');
    await acute.say_and_wait('——……');
    await acute.say_and_wait('……');
    await acute.print_and_wait('话停在嘴边，却说不出口。');
    await acute.print_and_wait(
      '不明白自己这股烦躁到底是什么的奇锐骏，卷缩在黑暗的被炉之中。',
    );
    await acute.print_and_wait('只有自己能听见，自己那砰砰不停的心跳。');
    await acute.print_and_wait('………………');
    await acute.print_and_wait('…………');
    await acute.print_and_wait('……');
    await acute.print_and_wait(`今天的${callname}，回来得格外晚。`);
    await era.printAndWait('……');
    await era.printAndWait('…………');
    await era.printAndWait('………………');
    await era.printAndWait('与此同时，特雷森外的警局——');
    era.printButton(
      `「警察同志，请你一定要相信我。我真的就只是担心自己担当的${acute.get_uma_sex_title()}，而在后面偷偷的跟着${
        acute.sex
      }而已。我真的不是尾行痴汉！」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `警察：「少来！别以为我不知道，现在的痴汉都对当下最火的赛${acute.get_uma_sex_title()}们有性幻想。对外都宣称自己是特雷森的训练员。光这周，我就已经抓了八个自称训练员、三个自称老师、还有一个自称医学博士的尾行痴汉了。」`,
    );
    era.printButton(
      '「我跟他们真的不一样！我有正经的工作，也有伟大的理想——」',
      1,
    );
    await era.input();
    await era.printAndWait(
      '警察：「那又怎样？隔壁牢房还有两个说自己是要在除夕夜街头放飞理想的有志青年，实际上不还是无证经营烟花炮竹的小贩？」',
    );
    era.printButton(
      '「警察同志，我真的不是——算了，换一种说法吧。我求你放了我吧，警察同志，我跟你说——我在目白家有人。」',
      1,
    );
    await era.input();
    await era.printAndWait(
      '警察：「哈？你想威胁我？我长那么大了还没人敢威胁我——我还真就不怕了！你目白家有人是伐？我还真就告诉你，这件警察局——就是目白家开的！」',
    );
    era.printButton(
      '「……哈？目白家还真的连警局都扩建了业务啊？呜啊，不管是谁都好，快放我出去啊！我是冤枉的！！！」',
      1,
    );
    await era.input();
    await era.printAndWait('………………');
    await era.printAndWait('…………');
    await era.printAndWait('……');
    await era.printAndWait(
      `后来，骏川${acute.get_adult_sex_title()}半夜巡逻的时候路过了当地的派出所，听到了${sys_get_callname(
        0,
        0,
      )}的救命声后，终于把${sys_get_callname(0, 0)}救了出去。`,
    );
    await era.printAndWait(
      `在听说自己是因为「尾随${acute.get_uma_sex_title()}」而进的监狱后，被骏川${acute.get_adult_sex_title()}狠狠的白了一眼。`,
    );
    await era.printAndWait(
      `回来的路上拼命的向骏川${acute.get_adult_sex_title()}解释自己真的不是尾行痴汉。并出于诚意请${
        acute.sex
      }来自己的休息室里吃宵夜。`,
    );
    await era.printAndWait(
      '结果在自己的房间里看到了巨大的巧克力慕斯蛋糕，和躺在一个巨大礼物盒里不知为何穿着格外暴露得圣诞老人（决胜）服的睡着了的奇锐骏。',
    );
    await era.printAndWait(`骏川${acute.get_adult_sex_title()}：「………………」`);
    era.printButton('「………………」', 1);
    await era.input();
    era.printButton('「我说我是被动的你相信吗？」', 1);
    await era.input();
    await era.printAndWait('……');
    await era.printAndWait('…………');
    await era.printAndWait('………………');
    await era.printAndWait('后来，被打了个全麻倒立插在了庭院里。');
    await era.printAndWait('并被罚了三个月的薪水后了事。');
    await era.printAndWait(
      `自那之后，理事长、骏川${acute.get_adult_sex_title()}，奇锐骏看${sys_get_callname(
        0,
        0,
      )}的眼神都有些变化。`,
    );
    await era.printAndWait('希望是好的变化吧……哈哈。（望天）');
    era.println();
    get_attr_and_print_in_event(100, [0, 0, 10, 0, 0], 10);
    get_attr_and_print_in_event(0, [0, 0, 0, 1, 0], 0);
    await era.waitAnyKey();
  } else if (edu_weeks === 95 + 1) {
    await print_event_name('新春的贺礼', acute);
    era.println();
    await era.printAndWait(
      '第三年的春节，今年依旧是与奇锐骏在休息室内一起度过的。',
    );
    await acute.say_and_wait(
      `新年快乐哦，${callname}～。我烤了很多年糕哦，要一起来吃吗？`,
    );
    await era.printAndWait(
      `轻车熟路的从厨房内端着托盘走出的奇锐骏，看上去比${sys_get_callname(
        0,
        0,
      )}更像是这间训练员休息室的主人。`,
    );
    await era.printAndWait(
      '而与端着托盘的奇锐骏形成鲜明对比的，是自休息日以来几乎与被炉融为一体的懒散得自己。',
    );
    await era.printAndWait(
      `……先说好，${sys_get_callname(
        0,
        0,
      )}这可不是在偷懒，而是在充分利用自己的休息时间。`,
    );
    await era.printAndWait(
      '平常的日子，基本都被各种训练和比赛场地考察的日常所挤满了，哪怕少有的能够自由活动休息的时间，也主要是与奇锐骏一起活动。',
    );
    await era.printAndWait(
      '虽然跟奇锐骏一起活动不算是疲惫的工作啦……但不管怎么说，因此而挤占了自己少有的休息时间也是事实。',
    );
    await era.printAndWait(
      '工作日每天晚上结束训练回到家里时总是累得倒在床上就睡，第二天睡醒后就立刻与奇锐骏进行训练，就这样日复一日的进行着好似永无止尽的训练。',
    );
    await era.printAndWait(
      '即便是一周难得的休息日，一但看向洗衣机里那堆得犹如小山般高的散发着臭味的换洗衣物时和休息室里那乱七八糟得好似怎么做也做不完的家务，自己的心情就会伴随着只剩下四个小时浮于天空中的太阳般一同沉入阴影之中。',
    );
    await era.printAndWait(
      '坦白的说，如果不是因为奇锐骏会为自己置办三餐的话，搞不好自己连怎么吃饭都会忘掉了吧……',
    );
    await acute.say_and_wait(`${callname}，张嘴，啊～～～`);
    era.printButton('「啊——唔。」', 1);
    await era.input();
    await era.printAndWait(
      '一口咬下奇锐骏递来的烤年糕，炽热而甜蜜的味道瞬间于口中扩散。',
    );
    await acute.say_and_wait(
      `姆姆～干得很好呢，${callname}——接下来要自己吃了哦？`,
    );
    await era.printAndWait(
      '满脸宠溺之色的奇锐骏，就这样将盛有年糕的碗筷递给了自己。',
    );
    await era.printAndWait('随后又站起身来，哼着欢快的小调，走向了阳台——');
    await acute.say_and_wait('接下来是洗衣服～洗衣服～～～');
    await era.printAndWait('………………');
    await era.printAndWait('怎么有种莫名的负罪感？');
    await era.printAndWait(
      `让自己担当${acute.get_uma_sex_title()}把自己打扫卫生洗衣服做饭，然后自己躺在被炉里插科打诨……`,
    );
    await era.printAndWait('……嘶，这是不是有些猥琐啊？');
    await era.printAndWait('不对，这也太猥琐了。');
    await era.printAndWait('得做些什么才行——');
    era.println();
    era.printButton('「去帮厨吧！」', 1);
    era.printButton('「自己的衣服自己洗！」', 2);
    era.printButton('「给奇锐骏揉揉肩吧！」', 3);
    const ret = await era.input();

    if (ret === 1) {
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
      get_attr_and_print_in_event(100, new Array(5).fill(5), 0);
    } else if (ret === 2) {
      await era.printAndWait(
        '不管怎么说，也不能让奇锐骏一个人把所有的家务活都做了。',
      );
      await era.printAndWait('站起身来，挺身走向了阳台。');
      await acute.say_and_wait('嗅————');
      await era.printAndWait('…………嗯？');
      await era.printAndWait('意外看见了奇锐骏正闻着自己昨天刚换下来的衬衫。');
      era.printButton('「额……奇锐骏？」', 1);
      await era.input();
      await acute.say_and_wait(`啊……是${callname}啊～`);
      await era.printAndWait(
        '就像是稀松平常般，奇锐骏将捂在鼻子上的衬衫取了下来。',
      );
      await acute.say_and_wait(`有什么事吗，${callname}？`);
      era.printButton('「那个……我的衬衫怎么了吗？」', 1);
      await era.input();
      await acute.say_and_wait(
        `啊……你说这个啊。我刚刚一时兴起所以闻了一下呢——很有男人味哦，${callname}。`,
      );
      era.printButton('「………………」', 1);
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait('姑且把奇锐骏赶出了天台。');
      await era.printAndWait(
        '洗衣机内的衣服咕噜咕噜得转，回想起刚刚奇锐骏闻着衬衫的场景，不知为何心中有些荡漾。',
      );
      await era.printAndWait('………………');
      await era.printAndWait('还是过会儿再回房间里好了。');
      era.println();
      get_attr_and_print_in_event(100, [], 35);
    } else {
      await era.printAndWait(
        '在奇锐骏洗完衣服回房间后，姑且把奇锐骏请进了被炉里。',
      );
      await acute.say_and_wait(`咕噜姆？有什么事吗，${callname}？`);
      await era.printAndWait(
        '奇锐骏抬起头，一脸不解的望向了此刻正站在其身后的自己。',
      );
      await era.printAndWait(
        `然而就在此时，${sys_get_callname(
          0,
          0,
        )}那罪恶的双手向奇锐骏的身上探出——`,
      );
      await era.printAndWait('——轻轻一捏。');
      await acute.say_and_wait('啊？❤️');
      await era.printAndWait('小手轻轻的揉捏，奇锐骏的尾巴几乎转瞬间绷直。');
      await era.printAndWait('……原来如此，这里是奇锐骏的敏感带吗？');
      await acute.say_and_wait(`那，那个❤️……${callname}……你这是？`);
      era.printButton(
        '「不要动，奇锐骏。你都忙这么久了，我帮你按摩放松一下吧。」',
        1,
      );
      await era.input();
      await acute.say_and_wait('但、但是那里……啊❤️～');
      await era.printAndWait('稍稍一捏，求饶般的娇媚便从奇锐骏的口中叫出。');
      await era.printAndWait(
        '每每一用力，奇锐骏便会不由自主的嚷出这一个字的短语。',
      );
      await era.printAndWait('不知为何，有一种莫名的兴奋感与背德感。');
      await era.printAndWait(
        '就这样，在仅有两人的休息室内，与奇锐骏按摩按了个爽。',
      );
      era.println();
      const to_print = sys_change_attr_and_print(100, '体力', 300);
      to_print.length &&
        (await era.printAndWait(
          [
            { content: `${acute.name} 的 ` },
            ...sys_change_attr_and_print(100, '体力', 300),
          ],
          { isList: true },
        ));
    }
    await era.waitAnyKey();
  } else if (edu_weeks === 95 + 6) {
    await print_event_name('拳人节·特大号追加超量叠放无敌燃烧版', acute);
    const chara19_talk = get_chara_talk(19);
    const chara48_talk = get_chara_talk(48);
    const chara49_talk = get_chara_talk(49);
    era.println();
    await era.printAndWait('春去秋来，今年已是与奇锐骏相遇的第三年了。');
    await era.printAndWait(
      '冬雪消融，春影仍在。掰弄手指掐算时日，情人节的日子又一次迫在眉睫。',
    );
    await era.printAndWait(
      `见识了去年的鸡飞蛋打、放飞理想后，今年，${sys_get_callname(
        0,
        0,
      )}与奇锐骏都各自成长了许多。`,
    );
    await era.printAndWait(
      `正因如此，情人节当天的傍晚，结束了日常的训练以后。${sys_get_callname(
        0,
        0,
      )}与奇锐骏轻车熟路的来到了自己的休息室。`,
    );
    await era.printAndWait('打开电源，坐在一起，各自将下身探入床炉之中——');
    era.printButton('「呜啊～～～❤️」', 1);
    await era.input();
    await acute.say_and_wait('啊哈哈～真暖和呢❤️。');
    await era.printAndWait(
      `早已习惯了各自存在的${sys_get_callname(0, 0)}和${
        acute.name
      }，相互依偎着，坐在床炉之前。`,
    );
    era.printButton(
      '「一想到这一周结束了，就要把床炉收起来了什么的……感觉好遗憾啊。」',
      1,
    );
    await era.input();
    await acute.say_and_wait(
      '呼呼呼……毕竟很快气温就要升上去了呢。如果不赶紧收其床炉的话，可是会生出痱子的哦？',
    );
    era.printButton('「唉～～～就不能再晚一点收嘛？」', 1);
    await era.input();
    await acute.say_and_wait(
      `不行哦？要是${callname}变成床炉废人的话，我可是也是会一起颓废的啦～`,
    );
    era.printButton('「唔……拿自己来施压，这算使诈吧？」', 1);
    await era.input();
    await acute.say_and_wait(`吼吼吼……${callname}哦，可不要怪我卑鄙——`);
    era.printButton('「明明去年你还躲在里面睡着了来着……」', 1);
    await era.input();
    await acute.say_and_wait('阿拉啦……我可什么都听不见哦？');
    await era.printAndWait(
      '在冬雪尚未消融之季，刚刚结束训练回到休息室的二人。就这样相处于床炉之中，一面插科打诨、一面透发着各自的汗水。',
    );
    await acute.say_and_wait('嗯……不过呢，果然还是得先洗个澡呢。');
    await era.printAndWait('一面如是说着，奇锐骏从床炉中挣脱，站起了身来。');
    await acute.say_and_wait(
      `那我先去烧热水了哦，${callname}。记得烧好了后早点来洗哦？`,
    );
    await era.printAndWait(
      '虽然很想告知奇锐骏，如今的科技进步已使得人们不再需要专门去进行烧洗澡水的工序。',
    );
    await era.printAndWait(
      `但奇锐骏似乎还是很钟爱这样的发言——当然，似乎也没有纠正${acute.sex}的必要。`,
    );
    era.printButton('「了解——一路顺风～」', 1);
    await era.input();
    await acute.say_and_wait('还有呢——巧克力放在冰箱里了，记得吃哦？');
    era.printButton('「了解了解～放心吧，我知道啦。」', 1);
    await era.input();
    await era.printAndWait(
      '漫不经心得挥手回应，或许这不太雅观，但对于安心的对象而言，总能暴露出自己最慵懒的一面。',
    );
    await era.printAndWait(
      '奇锐骏缓缓得走向了洗浴室，关上门、传出了咔哒的声响。',
    );
    await era.printAndWait('坐在床炉前，眼神不由自主得瞟向了洗浴室——');
    era.drawLine({ content: '【咔哒、咔哒——】' });
    era.drawLine({ content: '【哗哗哗～～～～】' });
    await era.printAndWait('水声从门缝中传出……');
    era.printButton('「…………」', 1);
    await era.input();
    era.printButton('「………（真是一点防备都没有啊。）」', 1);
    await era.input();
    await era.printAndWait('要不……去看看？');
    await era.printAndWait(
      '从床炉中艰难得爬出，以匍匐的姿态，行邪恶隐秘之事。',
    );
    await era.printAndWait(
      '穿越客厅，爬过客厅前的走廊，来到另一侧的洗浴室前。',
    );
    await era.printAndWait(
      '滴答的水声，正从面前的门缝中传来。仅需轻轻一推，便能遥望山峰的光彩。',
    );
    era.printButton('「当然，这可不是什么变态的行径。」', 1);
    await era.input();
    era.printButton('「只不过奇锐骏每次洗澡，都会洗三十分钟。」', 1);
    await era.input();
    era.printButton('「要我等三十分钟的话，那句只能乖乖的等了。」', 1);
    await era.input();
    era.printButton(
      '「不过要等三十分钟的话，为什么不能在奇锐骏所在的洗浴室门前等呢？」',
      1,
    );
    await era.input();
    era.printButton(
      '「这段时间里，因为门没关紧，所以为了帮着关门而不小心看见洗浴室内的情况想必也是很合理的吧～」',
      1,
    );
    await era.input();
    era.printButton('「噢———！」', 1);
    await era.input();
    await era.printAndWait('却见那仙境之中，云雾缥缈。');
    await era.printAndWait(
      '银河水自天上而来，流双峰、过平湖、入浅葱，终归入那大江流。',
    );
    await era.printAndWait(
      '自古仁者好乐山，白皙之谷、玉粉之峰，白雾飞云渡，唯有苦心人，敢登峰。',
    );
    await era.printAndWait(
      '从来智者喜流水、灰丝发下银河流，滴答玉石化琼髓。唯有真缘人，可品度。',
    );
    await era.printAndWait(
      '此间仙人景，唯得偷光人，平视业以佳、仰望欲更好。怎是一字好得了？',
    );
    era.printButton('「NICE～～～～！」', 1);
    await era.input();
    era.printButton('「那么，靠近一点、再靠近一点……」', 1);
    await era.input();
    await era.printAndWait(
      '然而，就在这时，却听嘎登一声，休息室的大门被打开了——',
    );
    await era.printAndWait(
      `骏川${acute.get_adult_sex_title()}：「${
        me.actual_name
      }在吗？这儿有一份你的快件……」`,
    );
    await era.printAndWait(
      `大门前，正趴在洗浴室门前的自己，被骏川${acute.get_adult_sex_title()}一览无余。`,
    );
    await era.printAndWait(`骏川${acute.get_adult_sex_title()}：「………………」`);
    era.drawLine({ content: '【哗啦啦啦啦啦～】' });
    era.printButton('「………………」', 1);
    await era.input();
    era.drawLine({ content: '【哗啦啦啦啦啦～】' });
    era.printButton(
      `「等等，骏川${acute.get_adult_sex_title()}，请听我解释。」`,
      1,
    );
    await era.input();
    era.printButton('「那什么，其实，我这是在……」', 1);
    await era.input();
    era.printButton('「凿壁偷——」', 1);
    await era.input();
    era.drawLine({ content: '【啪！！！！！】' });
    await era.printAndWait('清澈而干脆的声音，响彻在整个特雷森之上——');
    await era.printAndWait('……');
    await era.printAndWait('…………');
    await era.printAndWait('………………');
    await era.printAndWait(
      '三十分钟后，裹着浴袍的奇锐骏，缓步从洗浴室里走出。',
    );
    await acute.say_and_wait(
      `阿拉啦……${callname}，你坐在客厅里等了我三十分钟吗？真了不起呢——`,
    );
    await acute.say_and_wait('不过……你右脸上的这个红印是？');
    era.printButton('「……被蚊子咬的。」', 1);
    await era.input();
    await acute.say_and_wait('那鼻子上的青斑？');
    era.printButton('「……被大号蚊子咬的。」', 1);
    await era.input();
    await acute.say_and_wait('那你头顶上的这个褐红色的液体……是？');
    era.printButton('「……被特大号蚊子咬的。」', 1);
    await era.input();
    await acute.say_and_wait('哦……原来这个季节也有这么大个蚊子啊——');
    await era.printAndWait(
      '若有所思着的奇锐骏，就这样优哉游哉的走到了冰箱边，取出了一件物品。',
    );
    await acute.say_and_wait(
      '那么……为了表扬今天也很听话、很努力，做了一个乖孩子的训练员。给，这是我昨天做的巧克力哦。',
    );
    era.printButton('「……在说这些之前，先把衣服穿上可以吗？」', 1);
    await era.input();
    await era.printAndWait(
      `${sys_get_callname(
        0,
        0,
      )}倒也不是没有品赏浴袍的余情，只不过是自己刚刚被骏川${acute.get_adult_sex_title()}点了「如果再多看一眼裸体就会七窍流血爆体而亡」的穴位。`,
    );
    await era.printAndWait(
      '出于自己的性命着想，还是让奇锐骏尽早的穿上衣服比较好——',
    );
    await acute.say_and_wait(
      '年末礼物？不、不是啦，今天不是情人节吗？是互相送巧克力的日子呢……',
    );
    era.printButton(
      '「不……为什么突然像galgame一样自顾自地推进话题了啊？而且哪有女主角身披浴袍送情人节巧克力的戏码啊？」',
      1,
    );
    await era.input();
    await acute.say_and_wait(
      '咕噜噜？怎么啦，是不喜欢巧克力吗？那这里还有果冻套装……',
    );
    era.printButton('「唔……倒也不是不喜欢——」', 1);
    await era.input();
    await era.printAndWait('……可恶，这已经算得上是诱惑了吧？');
    await era.printAndWait(
      '在训练员休息室里洗澡，还穿着浴袍在训练员身前晃动，这完全可以算作是「诱惑」了吧？',
    );
    await era.printAndWait(
      `还是说是「那种」吗？「那种」？${sys_get_callname(
        0,
        0,
      )}愿意≠${sys_get_callname(0, 0)}同意之类的情况……`,
    );
    await era.printAndWait(
      `可恶……如果不是因为一时鬼迷心窍被骏川${acute.get_adult_sex_title()}点了穴道的话，${sys_get_callname(
        0,
        0,
      )}现在必须立刻马上变身红色形态召唤无尽战神……`,
    );
    await era.printAndWait('…………');
    await era.printAndWait('算了，邪念什么的，还是先点到为止吧。');
    era.printButton('「其实……我也有一样东西要送给你来着。」', 1);
    await era.input();
    await acute.say_and_wait('唔噜姆？');
    era.printButton(
      '「去年的情人节，我也收到了你送的巧克力了不是吗？嘛，虽然是略带惊吓的形式就是了……」',
      1,
    );
    await era.input();
    era.printButton(
      '「本来的话呢，去年的白色情人节自己就应该回礼来着——只不过一直不知道该送些什么。」',
      1,
    );
    await era.input();
    era.printButton(
      '「虽然想过送巧克力来回礼……但你一向不喜欢甜食。可送别的东西，又好像不太适合这个节日……」',
      1,
    );
    await era.input();
    era.printButton(
      '「去年就是因为这个原因，外加上当时比较忙碌的比赛日程。所以就把回礼的事给耽搁了……」',
      1,
    );
    await era.input();
    era.printButton(
      '「所以今年，姑且提前准备好了礼物——那么，祝你节日快乐，奇锐骏。」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `说罢，${sys_get_callname(
        0,
        0,
      )}将藏在窗帘后的一捧花束取出，赠与了奇锐骏。`,
    );
    await acute.say_and_wait('啊……');
    era.printButton(
      '「啊哈哈……这是中山庆典给我的建议啦。虽然跟情人节有点不太契合就是了……怎样，喜欢吗？」',
      1,
    );
    await era.input();
    await acute.say_and_wait('……');
    era.printButton('「……奇锐骏？」', 1);
    await era.input();
    await acute.say_and_wait('……');
    await era.printAndWait('不知为何，手捧着花束的奇锐骏直接僵在了原地。');
    await era.printAndWait(
      '无论如何搭话，也没有太大的回应，就这样等了三十秒左右——',
    );
    await acute.say_and_wait('呜……哇……啊……啊啊啊啊啊！！！');
    await acute.say_and_wait('不得了、不得了啦啊！！！！');
    await era.printAndWait('奇锐骏手捧着花束，就这样直接冲出了休息室。');
    await era.printAndWait('……当然，是穿着浴衣。');
    await era.printAndWait('………………');
    era.drawLine({ content: '【～特雷森学院·校舍～】' });
    await acute.say_and_wait('小佐敦，小佐敦，不得了啦啊！～');
    await chara48_talk.say_and_wait(
      '怎么啦，奇锐骏——呜啊，你怎么穿着浴衣啊！？',
    );
    await era.printAndWait('………………');
    era.drawLine({ content: '【～特雷森学院·中庭～】' });

    await acute.say_and_wait('小中山，小中山，不得了啦啊！～');
    await chara49_talk.say_and_wait(
      `浴袍?……这个花束，是我推荐给${me.actual_name}当给奇锐骏的情人节礼物……原来如此。看来传说中的拳术师，很快就要隐退了啊——`,
    );
    await era.printAndWait('………………');
    era.drawLine({ content: '特雷森学院·楼道' });
    await acute.say_and_wait('小数码，小数码，不得了啦啊！～');
    await chara19_talk.say_and_wait(
      '唉唉唉！？穿着浴袍在楼道里乱跑的奇锐骏！？虽然这个也很尊！但这一幕难道说是！？',
    );
    await era.printAndWait('………………');
    era.drawLine({ content: '特雷森学院·天台' });
    await era.printAndWait('拖着残缺的身躯，终于在天台上追上了浴袍的倩影。');
    await acute.say_and_wait(
      `${callname[0]}……${callname}，我…我…该怎么做啊？我有点不知如何是好了。`,
    );
    era.printButton('「总之……先回休息室换上衣服吧？」', 1);
    await era.input();
    await acute.say_and_wait(`哎嘿嘿……抱歉呢，${callname}。`);
    await acute.say_and_wait(
      '只是啊，在收到这么漂亮的花之后啊，感觉自己的心里也暖和起来了呢……啊，啊，啊啊啊……',
    );
    era.printButton('「即便如此，也不是穿着浴袍在学院里狂奔的理由啦……」', 1);
    await era.input();
    await era.printAndWait('……呼，不过倒也还好。');
    await era.printAndWait(
      `毕竟看${acute.sex}这幅样子，应该也不是不喜欢${sys_get_callname(
        0,
        0,
      )}送的厉害，只是单纯因为收到了平时没收到的礼物，而受到了一点小小的震撼。`,
    );
    await era.printAndWait(
      `或许是因为给人的印象很朴素，所以应该没多少人送${acute.sex}花吧？`,
    );
    await acute.say_and_wait(`谢谢呢……${callname}。`);
    await acute.say_and_wait(
      '没想到我竟然能收到这么漂亮的礼物呢，我会好好保管的。',
    );
    await acute.say_and_wait(
      '嗯…那么相对的回应……唔，好像有点不太对呢。按理说的话，受到礼物后表示感谢是对的，但这次是送出了礼物后然后又收到的回礼的情况呢～',
    );
    await acute.say_and_wait(`唔……总之，太谢谢你了哦，${callname}。`);
    era.printButton('「啊哈哈……你喜欢就好呢。」', 1);
    await era.input();
    await era.printAndWait(
      `天台之上，身穿浴袍的${
        acute.sex
      }与头顶正冒着褐红色液体的${sys_get_callname(0, 0)}，互相表达着谢意。`,
    );
    await era.printAndWait(
      `毫无疑问，这恐怕会将是${sys_get_callname(
        0,
        0,
      )}人生当中${sys_get_callname(0, 0)}印象最深的情人节了吧。`,
    );
    await era.printAndWait(
      '总感觉跟奇锐骏待在一起的话，就经常会遇上这种意料之外的惊喜呢——',
    );
    await era.printAndWait('………………');
    await era.printAndWait('…………');
    await era.printAndWait('……');
    era.drawLine({ content: '特雷森学院·地下审讯室' });
    await era.printAndWait(
      `骏川${acute.get_adult_sex_title()}：「最近收到群众举报。」`,
    );
    await era.printAndWait(
      `骏川${acute.get_adult_sex_title()}：「说奇锐骏的训练员捧着花束向奇锐骏求婚，然后强迫奇锐骏穿着浴袍在校内狂奔以表示爱意。」`,
    );
    await era.printAndWait(
      `骏川${acute.get_adult_sex_title()}：「有这回事吗，${me.actual_name}」`,
    );
    era.printButton('「………………」', 1);
    await era.input();
    await era.printAndWait(
      `${sys_get_callname(0, 0)}的肉身……已化为了，燃尽的灰——`,
    );
    await era.waitAnyKey();
  } else if (edu_weeks === 95 + 14) {
    const chara39_talk = get_chara_talk(39);
    const chara40_talk = get_chara_talk(40);
    const chara70_talk = get_chara_talk(70);
    const chara72_talk = get_chara_talk(72);
    await print_event_name('粉丝感谢会', acute);
    era.println();
    await era.printAndWait(
      '粉丝感谢会，这是一个邀请粉丝们前往特雷森游玩的运动祭典。',
    );
    await era.printAndWait('而奇锐骏在这场活动中挑战的运动项目是——');
    await acute.say_and_wait(
      '其实啊，我以前也有打过哦？嗯……我没记错的话，姿势应该是这样的——唔姆唔姆。',
    );
    await era.printAndWait(
      `——传统项目「高尔夫」，真没想到${acute.sex}以前竟然还玩过。`,
    );
    await acute.say_and_wait(
      `咕噜姆……话说啊，${callname}。我要瞄准的球门——是在哪里呢？`,
    );
    await era.printAndWait(
      `……${sys_get_callname(
        0,
        0,
      )}赌十个胡萝卜宝石，奇锐骏肯定是把高尔夫当足球玩了。`,
    );
    await era.printAndWait('也就是说，奇锐骏果然不会打高尔夫。');
    await era.printAndWait('于是，在这之后……');
    await era.printAndWait('————');
    await acute.say_and_wait('呼呼，果然还得是这个项目更适合我呢——拳击。');
    await acute.say_and_wait(
      '……咕噜姆？仔细一看的话，拳击两个字前面还写着其他的字呢——【花样拳击】？',
    );
    era.printButton('「啊，是拳击风格的体操赛吧。」', 1);
    await era.input();
    await era.printAndWait(
      '并不需要真的对打，而是只需要摆出足够唬人的拳击姿势，表现出【动作的美感】与【持久力】然后交给评委打分的比赛——',
    );
    await era.printAndWait(
      `……想想也是，都是打底有接近十万人左右粉丝的${acute.get_uma_sex_title()}偶像。要是真在特雷森打起拳击的话，搞不好现场的粉丝能把特雷森直接变成全武行了吧。`,
    );
    await acute.say_and_wait(
      `姆姆姆……真是可惜呢。明明${callname}很喜欢看女人打拳击呢——`,
    );
    era.printButton(
      `「啊哈哈……奇锐骏，这话千万别当着骏川${acute.get_adult_sex_title()}的面说，我会死的。」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `……纠正一下，${sys_get_callname(
        0,
        0,
      )}可没有站在演讲台上用望远镜看一大群人在体育馆里打的血流满地的癖好。`,
    );
    await era.printAndWait(
      `${sys_get_callname(
        0,
        0,
      )}只是喜欢看${acute.get_uma_sex_title()}们互相揪头发撕指甲的模样而已。`,
    );
    await era.printAndWait('——仅此而已。');
    await era.printAndWait(
      '在为自己的怪癖开拓的同时，花样拳击的选手们已经开始了比赛——',
    );
    await era.printAndWait('…………');
    await chara70_talk.say_and_wait(
      '哈，花样拳击吗。直接来几招赛法斗就可以了吧。',
    );
    await era.printAndWait('一方，是精通法式防身术「赛法斗」的天狼星象征——');
    await chara40_talk.say_and_wait(
      '曾经，为了健身美体的我，曾经在遥远的东方学习过一段时间的拳术。」',
    );
    await chara40_talk.say_and_wait('1.2……直拳、直拳、摆拳！');
    await era.printAndWait('另一方，是既是学生也是模特的超级黄金城。');
    await era.printAndWait('而裁判对这场大道之战给出的裁决是——');
    await era.printAndWait('裁判：「到此为止了！两位，可以退下了。」');
    await acute.say_and_wait('都没能进决赛？这是为什么？');
    await era.printAndWait(
      '裁判：「在【花样拳击】的比赛过程中，天狼星同学加入了踢腿的动作差点踢掉了我的墨镜。」',
    );
    await era.printAndWait(
      '裁判：「而黄金城同学则是在【花样拳击】的比赛过程中，时不时在动作的间隙下望向镜头摆POSS像是在用嘲讽技一样。」',
    );
    await chara40_talk.say_and_wait(
      '什！——一个不小心职业习惯就……看来这个运动项目也不简单啊。',
    );
    await era.printAndWait('……你这是什么职业的职业习惯啊？');
    await era.printAndWait('而与此同时，旁边的比赛发出了巨大的声响——');
    await chara39_talk.say_and_wait('哈、哇、碴、阿——哒！');
    await era.printAndWait('——pi～ke～peng～～～！——');
    await era.printAndWait(
      '    裁判：「川上公主失去资格！在比赛过程中飞起一脚直接把栏杆踹烂是不可以的违规行为啊！」',
    );
    await era.printAndWait('…………');
    await era.printAndWait('夹着头发的中年妇女粉丝：「孩子他爸，看见了吗？」');
    await era.printAndWait(
      '穿着病人服的中年男性粉丝：「看到了，正宗佛O无影脚，咸的不行。」',
    );
    await era.printAndWait('隔壁小米粥友的年轻粉丝：「咸脚？有多咸？」');
    await era.printAndWait(
      '黑色高级刀疤脸刀疤脸粉丝：「北部家的女儿？……呵，好一套通背拳。拳风都刮到车上了。」',
    );
    await era.printAndWait(
      '开车来的白衣看热闹粉丝：「车？我车呢！？我放这那么大的车呢！？我新提的车啊！怎么就剩个后视镜了！？」',
    );
    await era.printAndWait(
      `叼着烟坐在新提的缺了后视镜车里的大头中年男粉丝：「我算是看明白了，特雷森的${acute.get_uma_sex_title()}，各个身怀绝技啊——」`,
    );
    await era.printAndWait('…………');
    await era.printAndWait(
      '在不得不感慨世界之大无奇不有的特雷森花样拳击比赛场地上，',
    );
    await era.printAndWait('一边欣赏着各种人类未解之谜的比赛过程的同时，');
    await era.printAndWait('奇锐骏平稳得一路取胜，终于来到了决赛的现场——');
    await era.printAndWait('…………');
    await chara72_talk.say_and_wait('奇骏同学，请多指教。');
    await chara72_talk.say_and_wait(
      `能与传说中的拳术大师的${acute.get_uma_sex_title()}过招，这实在令我非常的振奋。`,
    );
    await acute.say_and_wait(
      '哦哦哦～八重同学，请多指教了哦？你的站姿还是一如既往的耀眼呢～',
    );
    await era.printAndWait(
      '面对着恭敬行礼的八重无敌，奇锐骏一如往常得散漫得回应——',
    );
    await era.printAndWait('……等会儿，传说中的拳术大师？那是什么？');
    await chara72_talk.say_and_wait('那么……八重古武术，烦请见教。');
    await era.printAndWait('精通古武术的八重无敌，又是一礼。');
    await era.printAndWait(
      '出拳的动作堪称是完美，呼吸的节奏也毫无破绽可言，就连裸露的腋下也清晰可见，再各个方面都堪称完美。',
    );
    await era.printAndWait('面对这样的敌人，奇锐骏依旧是一副游刃有余的态度。');
    await era.printAndWait('随着一声哨响，两人便开始了比赛——');
    await era.printAndWait('…………');
    await chara72_talk.say_and_wait('嗯——哈！喝！');
    await era.printAndWait('决赛的开场，是由八重无敌的急迫突进。');
    await era.printAndWait('激进的拳风、猛烈的突击，犹如暴风骤雨般的拳击。');
    await era.printAndWait(
      '每一拳都刚猛无敌，几乎舍弃了一切拳法的搏击套路，完全由力速兼具的正击来撕开对方的搏击方式。',
    );
    await era.printAndWait(
      '扎着辫子的黝黑大汉：「少O拳法！——毫无疑问的，这就是少O拳法！」',
    );
    era.printButton(
      '「……（旁边这个黑不溜秋长得像是棕色倭瓜的解说员到底是从哪来的？）」',
      1,
    );
    await era.input();
    await chara72_talk.say_and_wait(
      '啊！！一心不乱！只要能坚持到最后！只要在这赛场上站在最后，这场比赛就是我的胜利！！！',
    );
    await era.printAndWait(
      '一击、两击、三击……八重无敌持续不断的攻击还在继续下去。',
    );
    await era.printAndWait(
      '从常理上来说的话，这样刚猛的攻击一定非常消耗精力的才对。',
    );
    await era.printAndWait('换言之，只要奇锐骏撑到对方精疲力竭的时候就——');
    await era.printAndWait('黝黑大汉：「不，没用的。」');
    era.printButton('「……唉？」', 1);
    await era.input();
    await era.printAndWait(
      `身边的黝黑大汉，就像是会读心一般，否定了${sys_get_callname(
        0,
        0,
      )}心中所给出的观点。`,
    );
    await era.printAndWait(
      '黝黑大汉：「仔细听，对方呼吸的节奏——没有一丝的紊乱！」',
    );
    era.printButton('「……（不，这谁听的出来啊！？）」', 1);
    await era.input();
    await era.printAndWait(
      '黝黑大汉：「没错，这股特殊的呼吸节奏……是西O僧侣所使用的的特殊呼吸法。」',
    );
    await era.printAndWait(
      '黝黑大汉：「为了克服高原反应，而通过调节自己的呼吸频率来使得氧气对自己身体的每一寸肌肉都得以最大程度的利用。」',
    );
    await era.printAndWait(
      '黝黑大汉：「传说呼吸法的最强者，不仅能够使得肉体的年龄返老还童。就连身处于数倍重力影响下的拔数千米高的高原，都可以随心所欲的挥出至高至强的一拳——」',
    );
    era.printButton('「………………………………」', 1);
    await era.input();
    era.printButton('「SO？」', 1);
    await era.input();
    await era.printAndWait('黝黑大汉：「你还不明白吗？」');
    await era.printAndWait(
      `黝黑大汉一脸不可置信的望着${sys_get_callname(0, 0)}。`,
    );
    await era.printAndWait(
      '……到底是谁给了他普通人也能拥有各种武术各种专业名词作为常识的自信啊？',
    );
    await era.printAndWait(
      '黝黑大汉：「如果只是这·种·程·度的攻击频率，使用呼吸法的八重无敌，就算再打上三天三夜也不会觉得累吧。」',
    );
    era.printButton('「……嗯哼？」', 1);
    await era.input();
    await era.printAndWait(
      `黝黑大汉：「……不，三天三夜也只是人☆类这种生物的极限而已——如果是赛${acute.get_uma_sex_title()}的话，能够坚持的时间只会更久了吧。」`,
    );
    await era.printAndWait(
      `黝黑大汉：「面对精通古武术的${acute.get_uma_sex_title()}八重无敌，传说中得拳术家的奇锐骏到底该如何应对呢？奇锐骏到底要用什么办法，才能突破八重无敌的呼吸法连打呢？哈……如此精湛的场面，气功与拳功自O山大会的百年后最终决战……真是越来越令人期待了啊。」`,
    );
    era.printButton('「……………………」', 1);
    await era.input();
    era.printButton('「（现在回去做晚饭还来得及吗？）」', 1);
    await era.input();
    await era.printAndWait('…………');
    await acute.say_and_wait('一…二…三…四！（*挥拳）');
    await acute.say_and_wait(
      '（真不愧是八重同学啊……如此熟练得使用着呼吸法，在挥舞出了这么多次拳头后，就连汗都没有流下一滴——）',
    );
    await acute.say_and_wait(
      `（想要在这种攻势下一直坚持下去非常的艰难——但不管怎么说，我可是拳击手父亲的${
        acute.sex_code - 1 ? '女儿' : '儿子'
      }！）`,
    );
    await acute.say_and_wait('二…二…三…四！（*挥拳）');
    await era.printAndWait(
      '即便实在对方的呼吸连打之下，凭借坚强毅力的奇锐骏，在防守过程中依旧不落下风！',
    );
    await era.printAndWait(
      '而面对无论如何进攻都看不见破绽的奇锐骏，八重无敌的攻势开始变得愈发的轻躁——',
    );
    await era.printAndWait(
      '……继续下去的话，或许能等到八重无敌露出破绽，随后一击制敌？',
    );
    await acute.say_and_wait('（唔……可现在肉体已经到极限了——这样下去的话……）');
    era.printButton(
      '「加油啊！奇锐骏!肉已经炖在锅里了！等你赢了我们回去一起吃土豆炖肉！」',
      1,
    );
    await era.input();
    await acute.say_and_wait(`（${callname}……${callname}正在为我加油——）`);
    await acute.say_and_wait(`（呼——可不能让${callname}看到我丢人的一面啊。）`);
    await acute.say_and_wait(
      '（既然已经无法继续坚持下去的话……那么就把一切都堵在这一击……！）',
    );
    await acute.say_and_wait(
      '呜啊啊！！！燃烧热血，直到最后一刻。接下吧，我的最后一击！！！',
    );
    await era.printAndWait('就在这一刻，奇锐骏放弃了自己的守势。');
    await era.printAndWait('脚后一撤，尾巴随之一抖——');
    await era.printAndWait('一切都灌注在这一击之中！');
    await era.printAndWait('……………………');
    await era.printAndWait('…………');
    await era.printAndWait('……');
    //todo 【分歧点：检测奇锐骏粉丝数是否大于七万人。若低于七万人，则进入失败A文本路线。若高于七万人，则进入成功B文本路线】
    if (era.get('cflag:100:结局计数') > 3) {
      await era.printAndWait(
        '奇锐骏，传说中的拳术师，拼上一切的冠绝天下的柔拳。',
      );
      await era.printAndWait(
        '就在那一瞬之间，绕过了八重无敌刚绝天下的刚拳——直插入那满载肌肉的腹部！',
      );
      await era.printAndWait(`是的，${acute.sex}远不如刚拳般刚烈。`);
      await era.printAndWait(`是的，${acute.sex}远不似刚拳般勇猛。`);
      await era.printAndWait('是的，这柔软的一击并不能够取胜。');
      await era.printAndWait(
        '或许，宛如大树般坚韧，犹如柳叶般柔软的柔拳，注定了不似刚拳般耀眼。',
      );
      await era.printAndWait('但只有这一击，便足够了。');
      await era.printAndWait('想要击败金刚不坏的刚勇——');
      await era.printAndWait('只需这一击，便·足·够·了。');
      await chara72_talk.say_and_wait('啊！库——（呼、呼吸的节奏！？）');
      await era.printAndWait('裁判：「逼、逼、逼——」');
      await era.printAndWait('黝黑大汉：「逼出来了！」');
      await era.printAndWait('是的，人们已经看出来了。');
      await era.printAndWait('就在奇锐骏的柔拳，击中八重无敌腹部的那一刻。');
      await era.printAndWait('八重无敌那近乎完美的呼吸法——便已出现了破绽！');
      await chara72_talk.say_and_wait(
        '（咕……破坏我的呼吸，这才是你的目的吗？）',
      );
      await chara72_talk.say_and_wait(
        '（瞄准我进攻停歇的节奏，寻找我呼吸的间隔。在我唤气的那一瞬间，朝向我的腹部刺出打断我节奏的柔拳——何等恐怖如斯的观察力。）',
      );
      await chara72_talk.say_and_wait(
        '（传说中的拳法家、奇迹时代中的传奇，即便年岁的侵蚀已使你的拳术不似当年般充满魄劲。岁月所给予你的智慧与身为不屈者的坚毅，反而使得你得以跃入新的境界之中了吗——）',
      );
      await chara72_talk.say_and_wait('（——奇锐骏同学！）');
      await acute.say_and_wait('哼……才不会给你喘息的机会呢！');
      await acute.say_and_wait(
        '看好了，八重无敌同学——我的字典里，才没有『结束』这个词啦！！！',
      );
      await era.printAndWait('即便已经站不稳，');
      await era.printAndWait('即便眼睛已经什么都看不见了，');
      await era.printAndWait('即便腿犹如千斤般沉重的发颤。');
      await era.printAndWait(
        '但武术界传说的拳师——绝不会被区区这种程度的困难所阻！',
      );
      await era.printAndWait(
        '或许，只需要短暂得喘息，八重无敌便可以重新找回呼吸的节奏。',
      );
      await era.printAndWait(
        '或许，只需要进攻的节奏稍缓，无敌的刚拳便可以重返无尽得攻势。',
      );
      await era.printAndWait(
        '或许，对于新时代的翘楚——八重无敌可以犯无数次的错误。而旧时代的传说——奇锐骏，只要犯下了一次错误就将败下阵来。',
      );
      await era.printAndWait('——但是，那又怎样呢？');
      await era.printAndWait('既然「犯了一次错误就将败下阵来」，那么——');
      era.drawLine({
        content: '【只·要·一·次·错·都·不·犯·不·就·好·了·吗？】',
        fontSize: '3rem',
      });
      await era.printAndWait(
        '暴雨梨花般的柔拳，永不停歇的柔拳，坚毅勇绝的柔拳——',
      );
      await acute.say_and_wait('我的柔拳，还远远没有结束呢！！！！');
      await era.printAndWait('——————');
      await era.printAndWait('————');
      await era.printAndWait('——');
      await era.printAndWait('黄昏下的擂台之上，站立的胜者唯有一人。');
      await era.printAndWait('裁判：「到此为止、胜负已分！」');
      await era.printAndWait(
        '裁判：「特雷森第83界天下第一花样拳击比赛，最终的胜者是——」',
      );
      await era.printAndWait('裁判：「奇锐骏同学！」');
      await era.printAndWait(
        '决赛的擂台上，双眼模糊的奇锐骏，高高的举起了自己的右拳。',
      );
      await era.printAndWait('擂台下，雷鸣般的掌声为胜者带来了荣耀与喝彩。');
      await era.printAndWait('黝黑大汉：「赢了、赢了！！！」');
      await era.printAndWait(
        '黝黑大汉：「即便岁月飞逝，传说中的拳术家之拳，早已不负当年的魄力。」',
      );
      await era.printAndWait(
        `黝黑大汉：「但是${acute.sex}仍然战胜了自己、战胜了年岁的侵蚀，用至绝至速的柔拳，战胜了刚绝无敌的刚拳！」`,
      );
      await era.printAndWait(
        `黝黑大汉：「奇锐骏！奇锐骏！！！${acute.sex}终于彻彻底底的站在了武术界的顶点！」`,
      );
      await era.printAndWait(
        `黝黑大汉：「${acute.sex}战胜了时间！！！！！！」`,
      );
      await era.printAndWait('舞台下，兴奋的观众们激动的相拥。');
      await era.printAndWait(
        '泪水与感动盛满了整个会场。就连裁判也在偷偷得拭去感动的眼泪。',
      );
      await era.printAndWait('在这一刻——擂台之上的武者。');
      await era.printAndWait('那高高举起的拳头，已成为武术界真正的永恒传说。');
      await era.printAndWait('………………');
      await era.printAndWait('…………');
      await era.printAndWait('……');
      await era.printAndWait(
        `黄昏之际，人潮散去之时。背着已经没有力气的奇锐骏，${sys_get_callname(
          0,
          0,
        )}和${acute.name}二人踏上了回家的道路。`,
      );
      await acute.say_and_wait('欸嘿嘿……真没想到自己能赢呢。');
      await era.printAndWait(
        '倚在自己背上，即便浑身无力已经无法动弹了。奇锐骏却仍旧温和而散漫得，汇报着今日的胜果。',
      );
      era.printButton(
        '「哈哈……是呢，真是惊险呢。我跟那个像是窝瓜一样的大汉，在擂台下可是实实在在的捏了把汗呢。」',
        1,
      );
      await era.input();
      await acute.say_and_wait('唉～～～是吗～？');
      await era.printAndWait(
        '兴许是格外开心的原因，奇锐骏的里难得出现了轻佻的语气。',
      );
      await acute.say_and_wait(
        `可我记得——${callname}，你应该对拳击没多大兴趣吧？`,
      );
      era.printButton('「哈哈……那是另外一回事啦。」', 1);
      await era.input();
      await era.printAndWait(
        `略显尴尬的笑出了两声。${sys_get_callname(
          0,
          0,
        )}特意的偏着头将视线望向远处黄昏的太阳，好不跟身后这总能看穿${sys_get_callname(
          0,
          0,
        )}心事的${acute.get_uma_sex_title()}对上眼。`,
      );
      era.printButton('「老实说……一开始，我确实对拳击没什么兴趣啦。」', 1);
      await era.input();
      await acute.say_and_wait('嗯～——听你这样说的话，现在是改观了吗？');
      era.printButton('「是呢，改观了。」', 1);
      await era.input();
      await era.printAndWait('毫不犹豫的承认了这一点。');
      await era.printAndWait(
        `……${sys_get_callname(
          0,
          0,
        )}得承认，最初的时候，确实是对拳击比赛有所偏见。`,
      );
      await era.printAndWait(
        '毕竟印象里，这种互相攻击的比赛，总会跟【野蛮】这两个字挂上钩吧。',
      );
      await era.printAndWait(
        '但这内心深处所隐藏着的小小偏见，在这样一场感动的比赛之后，早已化作烟消云散。',
      );
      await era.printAndWait('擂台上那坚持不懈的身姿，还要那高高举起的右拳。');
      await era.printAndWait('对于懦弱的自己，恐怕是此生难忘吧。');
      await era.printAndWait('毕竟，那实在是太过【闪耀】了。');
      await acute.say_and_wait('嗯～哼～……');
      await era.printAndWait(
        '趴在肩上的奇锐骏，也不知道在想些什么。忽地哼起了欢快的小区。',
      );
      await acute.say_and_wait(`呐，${callname}。`);
      era.printButton('「怎么啦，奇锐骏？」', 1);
      await era.input();
      await acute.say_and_wait(
        '我是说啊——如果呢……如果，我要是输了的话呢。你要怎么办呢？',
      );
      era.printButton('「……输了吗？」', 1);
      await era.input();
      await era.printAndWait('皱起眉毛，这可真是一个刁钻古怪的问题。');
      await era.printAndWait('奇锐骏会输吗？');
      await era.printAndWait('这个念头，对于自己而言确实一刻也没有出现过。');
      await era.printAndWait(
        '但既然这是一个问题的话——答案，总归是需要好好考虑一下的。',
      );
      era.printButton(
        '「……就算是输了的话，也是不要紧的。这种事情，是不会击垮奇锐骏的。」',
        1,
      );
      await era.input();
      await acute.say_and_wait('……唔姆？为什么呢？');
      await era.printAndWait(
        `奇锐骏饶有兴致得问着——${acute.sex}似乎对这个问题的答案格外有兴趣。`,
      );
      era.printButton(
        '「因为啊——就算是失败了。只要之后爬起来，不就可以了吗？」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `黄昏下，空无一人的中庭。背着奇锐骏的${sys_get_callname(
          0,
          0,
        )}，停在了枯树洞的旁边。`,
      );
      await era.printAndWait('是啊，失败了。但那又怎么样呢？');
      await era.printAndWait('只不过是【这次】失败了而已。');
      await era.printAndWait('只要【下次】赢回来，就好了。');
      await era.printAndWait(
        `即便是【100】次的失败者，但只要能【赢回来】——${acute.sex}就仍然会是最后的赢家。`,
      );
      await era.printAndWait('这是一个非常浅显的道路。');
      await era.printAndWait(
        `——可与此同时，这也是奇锐骏所教会${sys_get_callname(0, 0)}的道理。`,
      );
      await era.printAndWait(
        `黄昏下，如同做了错事害怕被惩罚的少年，${sys_get_callname(
          0,
          0,
        )}悄悄地回过头，想要探查长辈的「面色」。`,
      );
      await era.printAndWait('可回过头去，却发现——原来奇锐骏也在望着自己。');
      await era.printAndWait(
        '深色的眼眸、夹杂着清晨的「露珠」，闪烁着生命的光泽——',
      );
      await era.printAndWait('恍惚间，心脏砰砰得跳动。');
      await acute.say_and_wait('……');
      await acute.say_and_wait(`…………啊，那个，${callname}。`);
      await acute.say_and_wait('已经……可以放我下来咯？');
      era.printButton('「啊——马、马上，我马上就放你下来——」', 1);
      await era.input();
      await era.printAndWait('忽然间的手忙脚乱。');
      await era.printAndWait('犹如被长辈抓现行的调皮鬼一般。');
      await era.printAndWait('蹲下身，奇锐骏的脚尖轻轻得触碰到了地面。');
      await era.printAndWait('咕噜噜——忽然间转了个圈。');
      await era.printAndWait(
        `回过身，却发现奇锐骏背对着自己——看不见${acute.sex}的脸。`,
      );
      await acute.say_and_wait(`……抱歉啦，${callname}，其实我跟你撒了个慌。`);
      await era.printAndWait('燥热的心，砰砰得跳动。');
      await acute.say_and_wait(
        '其实啊……比赛之后呢。我还是有那么一点点的精力得啦……走回休息室，其实是没问题的。',
      );
      await era.printAndWait(
        '明明是临近夜晚的黄昏，身体却如沸腾的岩浆般滚热。',
      );
      await acute.say_and_wait('所以说啊，那个……');
      await era.printAndWait(
        `${acute.sex}回过身，秀丽的长发随之一转。那挑染的白丝，如月光般动人——`,
      );
      await acute.say_and_wait(
        `虽然……你大概已经听我——或者是其他的${acute.get_uma_sex_title()}，说过很多次了吧？`,
      );
      await era.printAndWait('羞红的脸颊，散发着炽热的蒸汽。');
      await acute.say_and_wait('但是，我果然是喜欢你的——训练员君。');
      await era.printAndWait(
        '黄昏之下，骄傲的神情与傲气的话语，回荡在这空无一人的中庭之间。',
      );
      await era.printAndWait(
        `奇锐骏的脸早已羞红一片——可${acute.sex}的眼神，却坚定得注视着自己。`,
      );
      await era.printAndWait('……奇怪吗？');
      await era.printAndWait('一点都不。');
      await era.printAndWait('为什么呢？');
      await era.printAndWait('因为这正是，那个自己所认识的奇锐骏。');
      await era.printAndWait('那个温和、勇敢，却又坚毅不屈，');
      await era.printAndWait('在平静的外表下，燃烧着炽热之心的奇锐骏。');
      era.printButton('「……」', 1);
      await era.input();
      era.printButton('「…………」', 1);
      await era.input();
      era.printButton('「………………哈哈。」', 1);
      await era.input();
      await era.printAndWait('没由头的笑出了声来。');
      await era.printAndWait('……奇怪吗？');
      await era.printAndWait('一点都不。');
      await era.printAndWait('为什么呢？');
      await era.printAndWait('因为这正是，那个奇锐骏所认识的训练员。');
      await era.printAndWait('………………');
      await era.printAndWait('…………');
      await era.printAndWait('……');
      await era.printAndWait('黄昏下，二人无话。');
      await era.printAndWait('小步走回了家（训练员休息室。）');
      await era.printAndWait('炉灶前的土豆终于熟了。');
      await era.printAndWait(`奇锐骏将它盛出来，${me.actual_name}负责去碗。`);
      await era.printAndWait('配上牛肉，一起拌饭。');
      await era.printAndWait('啊呜啊呜，吞进肚中。');
      era.add('cflag:100:结局计数', 1);
    } else {
      await era.printAndWait('裁判：「到此为止了！」');
      await era.printAndWait(
        '裁判：「特雷森第83界天下第一花样拳击比赛，最终的胜者是——」',
      );
      await era.printAndWait('裁判：「八重无敌同学！」');
      await era.printAndWait(
        '黝黑大汉：「奇锐骏同学的最后一击，直击腹部以打乱八重同学呼吸节奏的拳法可谓是奇迹之拳……」',
      );
      await era.printAndWait(
        '黝黑大汉：「但真是可惜啊，最强的柔拳，仍然无法战争最强的刚拳——」',
      );
      await era.printAndWait(
        '黝黑大汉：「如果早十年，那位传说中的拳师，身体的刚劲仍未散去之时。那冠绝的一击，应该就能终结这场比赛的吧。」',
      );
      await era.printAndWait(
        '黝黑大汉：「唉……年岁。真是一切武术师的大敌啊。」',
      );
      await era.printAndWait('擂台之下，负责解说的黝黑大汉，流下了他的泪水。');
      await era.printAndWait('而另一边，在擂台之上——');
      await acute.say_and_wait(`小……${callname}……`);
      await era.printAndWait(
        '擂台之上，汗水化作蒸汽鹏飞之刻，奇锐骏的眼中充盈起了泪水。',
      );
      await acute.say_and_wait(
        '呜～～～我已经……燃尽了呢。化作了……雪白色的灰——',
      );
      await era.printAndWait('失去了力气的奇锐骏，无力的瘫倒在了擂台之上。');
      await era.printAndWait('——而与此同时的，是观众们雷鸣般的掌声——');
      await era.printAndWait('就这样，奇锐骏在掌声之中走下了帷幕。');
      await era.printAndWait('旧时代的传奇，终究要为新时代的传说所让步——');
      await era.printAndWait('……………………');
      await era.printAndWait('…………');
      await era.printAndWait('……');
      await era.printAndWait(
        `黄昏之际，人潮散去之时。背着已经没有力气的奇锐骏，${sys_get_callname(
          0,
          0,
        )}和${acute.name}二人踏上了回家的道路。`,
      );
      await acute.say_and_wait(`唔～～让${callname}看到了失败的一面了啊——`);
      await era.printAndWait(
        '倚在自己背上，即便浑身无力已经无法动弹了。奇锐骏仍旧嘟起小嘴，对今日的决赛念念不忘。',
      );
      era.printButton(
        '「嘛——最后的那一击我和在场的观众都看到了哦？大家都很为你感动呢。」',
        1,
      );
      await era.input();
      await acute.say_and_wait('可是啊……输了还是输了啊。');
      era.printButton('「哈哈……是啊，确实输了啊。」', 1);
      await era.input();
      await era.printAndWait('擂台上的胜负就是如此的无情。');
      await era.printAndWait(
        '有了赢家，就一定会有输家。胜者风光无限，而败者只能狼狈退场。',
      );
      await era.printAndWait(
        '身体也好、状态也好、运气也好。如果不能在比赛场上发挥百分百的全力赢得胜利，那么即便再好看的训练成绩也没有意义吧。',
      );
      await era.printAndWait(
        '这个世界本就是唯结果论的。擂台是这样，比赛也是这样。',
      );
      await era.printAndWait('……只不过——');
      era.printButton('「既然现在输了，那就在下一场上赢回来吧。」', 1);
      await era.input();
      await acute.say_and_wait(`……${callname}？`);
      era.printButton(
        '「所以说啊——即便现在输了，只要在下一把上赢回来就好。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '即便这个世界是唯结果论的，但也不代表每个人只有【一次机会】。',
      );
      await era.printAndWait('是啊，失败了。但那又怎么样呢？');
      await era.printAndWait('只不过是【这次】失败了而已。');
      await era.printAndWait('只要【下次】赢回来，就好了。');
      await era.printAndWait(
        `即便是【100】次的失败者，但只要能【赢回来】——${acute.sex}就仍然会是最后的赢家。`,
      );
      await era.printAndWait(
        '掂了掂身后的奇锐骏，离家（训练员休息室）只剩下几步路了。',
      );
      await era.printAndWait(
        `回过头望向奇锐骏——却发现此刻奇锐骏也在望着${sys_get_callname(0, 0)}。`,
      );
      await era.printAndWait('只不过，这一次奇锐骏的眼神似乎与以往不同。');
      await era.printAndWait('——该要如何用语言去形容呢？');
      await era.printAndWait('不再散漫、不再温柔……');
      await era.printAndWait(
        '而是夹杂着惊奇的温和、相比于温柔却又更加的柔弱。',
      );
      await era.printAndWait(
        '深色的眼眸、夹杂着清晨的「露珠」，闪烁着生命的光泽——',
      );
      await era.printAndWait(
        `不知怎的，望着背上「初次所见」的「柔弱${acute.get_teen_sex_title()}」，心脏便砰砰的跳动。`,
      );
      await era.printAndWait(
        '跳动、跳动——以至于一口赤红色的勇气，涌上了咽喉。',
      );
      era.printButton('「……哈哈。」', 1);
      await era.input();
      await era.printAndWait('不由得笑出了声来。');
      await acute.say_and_wait('……你笑什么啦？');
      era.printButton('「我笑……我笑我锅里炖着的肉。」', 1);
      await era.input();
      await era.printAndWait(
        `说罢，${sys_get_callname(0, 0)}回过头，眼前是黄昏下的走廊。`,
      );
      await acute.say_and_wait('……这有什么好笑的啊。');
      await era.printAndWait('嘟着嘴，宛若处子般的奇锐骏，依靠在了肩上。');
      await era.printAndWait('……其实，体力已经恢复了。');
      await era.printAndWait(
        `至少这么几步路，依靠身为${acute.get_uma_sex_title()}的毅力，还是可以轻松地走过去的。`,
      );
      await era.printAndWait('……但是。');
      await era.printAndWait('但是……');
      await era.printAndWait('既然就剩了这么几步路的话。');
      await era.printAndWait(`让${callname}背着自己走一程……也是可以的吧？`);
      await era.printAndWait('--------');
      await acute.say_and_wait('………………');
      await acute.say_and_wait('（心中的，这种悸动……');
      await acute.say_and_wait(`（果然，我对${callname}……他——）`);
      await era.printAndWait('--------');
      await era.printAndWait('就这样，夹杂着咸味的粉丝感谢祭。');
      await era.printAndWait('在晚上的一顿似乎有点太咸了的土豆炖肉之中，');
      await era.printAndWait('画上了帷幕——');
      get_attr_and_print_in_event(100, [], 25);
      get_attr_and_print_in_event(0, [0, 0, 5, 10, 0], 0);
    }
    await era.waitAnyKey();
  } else if (Math.random() < 0.2 && era.get('status:52:熬夜') === 1) {
    era.println();
    await print_event_name('在奇锐骏的膝枕上', acute);
    await era.printAndWait('兴许是未能好好休息的缘故，今早总觉得睡眼惺忪。');
    await era.printAndWait('真糟糕，马上就是训练的时间了；');
    await era.printAndWait([
      '作为一名成熟的训练员，可不能让 ',
      me.get_colored_name(),
      ' 看到懒散的这一面——',
    ]);
    await acute.say_and_wait(`${callname}？`);
    await era.printAndWait('——！？');
    await acute.say_and_wait('待喘息之际，已然出现身后。');
    era.printButton('「奇、奇锐骏！？何时来的？」', 1);
    await era.waitAnyKey();
    await acute.say_and_wait(
      `很早就来了哦？只是${callname}看起来很累，所以一直没打扰哦～`,
    );
    await era.printAndWait(
      `温和的话语下隐藏着无声的气息，身着红色运动服的${acute.get_teen_sex_title}随即坐在白百合花旁的阶梯。`,
    );
    await acute.say_and_wait(
      `离训练开始还有一段时间……来休息一下吧，${callname}`,
    );
    await era.printAndWait(
      '她一面拍着膝上的天府之地，一面招舞着右手诱我堕入幸福之所。',
    );
    await era.printAndWait('……一开始，我是拒绝的。');
    await era.printAndWait('但那里真的很幸福……还散发着薄荷味的清香。');
    await era.printAndWait('我或许有意得在避开她的视线，');
    await era.printAndWait('但温暖的手掌已经附上了我的发梢。');
    await era.printAndWait('随后，轻吟的歌尔在我耳边回荡——');
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        await acute.say_and_wait('风来啦～雨来啦～雷公背着鼓来了～');
        await acute.say_and_wait('你敲敲～我敲敲～敲得雷公弯了腰～');
        await acute.say_and_wait('你砸砸～我砸砸～砸得雷公龇了牙～');
        break;
      case 1:
        await acute.say_and_wait('大大大～小小小～');
        await acute.say_and_wait('一二三四五六七～');
        await acute.say_and_wait('大大大～小小小～');
        await acute.say_and_wait('哆唻咪发嗦啦西～');
        break;
      case 2:
        await acute.say_and_wait('想快点告诉你多想天天在一起～');
        await acute.say_and_wait('研究十万个为什么的问题～');
        await acute.say_and_wait('快点告诉你明白一些大道理～');
        await acute.say_and_wait('朋友之间最看重是情谊～');
        await acute.say_and_wait('我的心放在你那里～');
        break;
      case 3:
        await acute.say_and_wait('月亮～在白莲花般的云朵里～穿行～');
        await acute.say_and_wait('晚风吹来一阵阵快乐的歌声～');
        break;
    }
    await era.printAndWait('……………………');
    await era.printAndWait('那并非是多么好听的歌谣，');
    await era.printAndWait('硬要说的话，可能歌唱者还多少有些不着调。');
    await era.printAndWait('但是……躺在膝枕之上，听着这样的歌谣，');
    await era.printAndWait('总会感到由衷的安心——');
    sys_change_attr_and_print(0, '体力', 30);
    get_attr_and_print_in_event(100, [0, 0, 0, 10, 0], 0);
  }
};

handlers[event_hooks.race_start] = async (hook, extra_flag) => {
  const acute = get_chara_talk(100),
    callname = sys_get_callname(100, 0),
    edu_weeks = era.get('cflag:100:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('不安', acute);
    await era.printAndWait('六月，奇锐骏的出道战。');
    await era.printAndWait(
      `赛场是在札幌附近的一所小型会场，作为参赛方，${sys_get_callname(0, 0)}和${
        acute.name
      }提前一天就抵达了赛场。`,
    );
    await era.printAndWait('………………');
    await era.printAndWait('不安。');
    await era.printAndWait('极度的不安。');
    await era.printAndWait(
      '如果要用比喻的话，那大概就是如同登月的阿波罗17号返回地球舱室中发现地面上凭空出现了一根螺丝丁程度的不安。',
    );
    await era.printAndWait(
      '夜里难以入睡，即便只是靠在床上，也能时不时听到自己躁动不安的心跳。',
    );
    await era.printAndWait('……所实话，真的能成功吗？');
    await era.printAndWait('自己担当的奇锐骏，真的能在这场比赛中成功胜出吗？');
    await era.printAndWait('紧紧握着的手心，下意识得流着汗……');
    await acute.say_and_wait('……');
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait('回过身，奇锐骏就站在自己的身后。');
    await era.printAndWait(
      '下意识得将满是手汗的双臂背过身，样子像极了做了坏事的小孩子。',
    );
    await acute.say_and_wait(`没关系的哦，${callname}。`);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait('那是如同太阳般温暖的微笑，');
    await era.printAndWait(
      '可看到这一幕的自己，却不知为何心生着不知名的罪恶。',
    );
    await acute.say_and_wait(`你已经很努力了哦，${callname}。`);
    await acute.say_and_wait('剩下的，交给我就好。');
    await era.printAndWait(
      `拍了拍${sys_get_callname(
        0,
        0,
      )}的肩膀，奇锐骏没有回头，凛然的背影，朝向通道的出口走去——`,
    );
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait('那是何等凛然的背影。');
    await era.printAndWait('遥望着巍峨的背影，心中不由得浮现出惭愧之情——');
  }
};

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number}} extra_flag
 */
handlers[event_hooks.race_end] = async (hook, extra_flag) => {
  const acute = get_chara_talk(100),
    callname = sys_get_callname(100, 0),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:100:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    if (extra_flag.rank === 1) {
      await era.printAndWait('天边的玄鸟环绕在赛场之上，');
      await era.printAndWait('它们述说、传递、叙述、表达，');
      await era.printAndWait('传述着凛然的身姿，得到了凯旋的回应——');
      await era.printAndWait('小型的赛场、不足百人的观众，');
      await era.printAndWait('喝彩之声或许没有那般的鼎沸。');
      await era.printAndWait(
        '但昂扬凛然的身姿，足以在一人的心中留下难以忘怀的印记。',
      );
      await era.printAndWait('赛场之上，奇锐骏屹立在当之无愧的中心。');
      await era.printAndWait('那凛然的身姿上，是一如既往的温和的笑颜。');
      await era.printAndWait(
        `金色的光辉之下，${acute.sex}高高举起了自己的拳头。`,
      );
      await era.printAndWait('——那是何等的光辉。');
      await era.printAndWait(
        `在直视着神圣的一瞬，${sys_get_callname(0, 0)}于恍惚间失了神。`,
      );
      await era.printAndWait(`而在恍惚之间，${acute.sex}已结束了胜利的仪式，`);
      await era.printAndWait('垫着脚尖，奇锐骏就这样走了过来——');
      era.printButton('「——」', 1);
      await era.input();
      await era.printAndWait(
        `${sys_get_callname(0, 0)}长开口，想要称贺${acute.sex}的胜利。`,
      );
      era.printButton('「……啊、啊——」', 1);
      await era.input();
      await era.printAndWait('可真当自己张开口，却不由得为之哑然。');
      await era.printAndWait(
        `而正当${sys_get_callname(0, 0)}自责于，自己竟然如此失态的同时，`,
      );
      await era.printAndWait(`却是${acute.sex}先开了口。`);
      await acute.say_and_wait('姆呼呼……真是辛苦你啦，小（·训练家名）');
      await era.printAndWait(`——${acute.sex}开口了，`);
      await era.printAndWait(`${acute.sex}开口说的第一句话是，`);
      await era.printAndWait(`向失败的${sys_get_callname(0, 0)}致谢。`);
      era.printButton('「————」', 1);
      await era.input();
      await era.printAndWait(
        `${sys_get_callname(
          0,
          0,
        )}哑然在了原地，四周瞬间凄清，唯有那使${sys_get_callname(
          0,
          0,
        )}感情热浪涌上了心尖。`,
      );
      await era.printAndWait('手指止不住的颤抖——');
      await acute.say_and_wait(`……${callname}？怎么了？突然不舒服了吗？`);
      era.printButton('「不，没有——我很好。」', 1);
      await era.input();
      await era.printAndWait(
        `强忍着心中喷涌出的情、按压住指与眉中渗出的水，${sys_get_callname(
          0,
          0,
        )}尽力整理着自己的狼狈。`,
      );
      era.printButton('「什么事，都没有——放心吧，奇锐骏。」', 1);
      await era.input();
      await era.printAndWait(
        `这是那一天，${sys_get_callname(0, 0)}对奇锐骏所说的最后一句话。`,
      );
      await era.printAndWait('………………');
      await era.printAndWait('马院历·20XX年。');
      await era.printAndWait(
        `这是一度失败的训练者，被担当的${acute.get_uma_sex_title()}捡回家的第一年。`,
      );
      await era.printAndWait(
        '而在这一年的六月，一场普通的出道战后，一度失败的训练者，下定了一个决心。',
      );
      await era.printAndWait(
        `${me.sex}决定，让自己的担当${acute.get_uma_sex_title()}，`,
      );
      await era.printAndWait('步入真正的殿堂——');
      era.set('cflag:100:结局计数', 1);
    } else {
      await era.printAndWait('围棋圈内有一个成语，叫做「棋差一着」，');
      await era.printAndWait('这句成语的下一句话，叫做「满盘皆输」。');
      await era.printAndWait('用来形容当下所发生的事情，或许是再适合不过了。');
      await era.printAndWait(
        '凛然的身躯即便丰盈而美丽，棋差一着却也是不可违逆的事实。',
      );
      await era.printAndWait(
        '计分板所彰显的事实之下，一切对失败的辩解都显得像是在抵赖。',
      );
      await era.printAndWait(
        `奇锐骏缓缓得离开了赛场，而掌声与喝彩此刻并不属于${sys_get_callname(
          0,
          0,
        )}和${acute.name}。`,
      );
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `看着奇锐骏略带沮丧的身影，${sys_get_callname(0, 0)}总想要说些什么——`,
      );
      await acute.say_and_wait(`没事的哦，${callname}`);
      await era.printAndWait('……');
      await era.printAndWait('尚未开口，反倒是听到了来自对方的安慰。');
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(`${sys_get_callname(0, 0)}实不知道此时该做什么，`);
      await era.printAndWait('只觉得一种冰凉，从头顶冷到了脚尖。');
      await era.printAndWait(
        `${sys_get_callname(0, 0)}呆愣在原地，不知所措、静静地看着奇锐骏走远。`,
      );
      await era.printAndWait('…………………');
      await era.printAndWait('……………');
      await era.printAndWait('………');
      await era.printAndWait('瞬间不足以成为训练的喜悦，');
      await era.printAndWait('世人只相信胜负的那一瞬间——');
      era.set('cflag:100:结局计数', -1);
    }
  }
  //todo 每一场育成目标的比赛，获得第一名，则结局点数+1；若并非第一名，则结局点数-1
};

handlers[event_hooks.edu_end] = async () => {
  const acute = get_chara_talk(100),
    callname = sys_get_callname(100, 0),
    me = get_chara_talk(0);
  if (era.get('cflag:100:结局计数') > 9) {
    await print_event_name('----结局：【誓言】----', acute);
    await era.printAndWait('与奇锐骏相识的第四年，一月，');
    await era.printAndWait('气温虽然有所回升，但地面仍然湿冷。');
    await era.printAndWait('这是奇锐骏步入殿堂后的第三天。');
    await era.printAndWait(
      `也是${sys_get_callname(0, 0)}和${acute.name}来到北海道度假的第一天。`,
    );
    era.drawLine({ content: '【北海道 民俗旅馆】' });
    await acute.say_and_wait('呜啊～我还是第一次看到活着的帝王蟹啊——');
    await era.printAndWait('面对着桌前的盛宴，奇锐骏由衷得发出着盛叹。');
    await era.printAndWait(`呵，得亏${sys_get_callname(0, 0)}早有准备。`);
    await era.printAndWait(
      `没错，早在度假度假开始之前。名为${me.actual_name}的训练员，就已经熬夜彻读民俗旅馆的宣传手册，通篇背诵下了三千字的《北海道生存美食指南》——`,
    );
    era.printButton(
      '「哼哼～奇锐骏，你知道吗？其实帝王蟹，并不是一种螃蟹，而是一种寄居蟹——」',
      1,
    );
    await era.input();
    await acute.say_and_wait('唔姆唔姆～');
    era.printButton(
      '「而餐桌上人们常吃的帝王蟹啊，主要分为四种。而我们吃的，就是当地的特产花咲蟹——」',
      1,
    );
    await era.input();
    await acute.say_and_wait('咕噜咕噜～');
    era.printButton('「而要说花咲蟹的话，就不得不说她的三吃和六种说法——」', 1);
    await era.input();
    await acute.say_and_wait('哎嘿——啊哈哈～');
    era.printButton('「……我说，奇锐骏。你又在听我说话吗？」', 1);
    await era.input();
    await acute.say_and_wait('有哦～');
    await era.printAndWait(`${acute.sex}一面说着，一面忙碌着手中的工作——`);
    await acute.say_and_wait('你刚刚是在说，帝王蟹的四种写法对吧～');
    era.printButton('「完·全·不·是！」', 1);
    await era.input();
    await era.printAndWait('别把美食介绍说成像是某个哀怨可怜人的名言成吗？');
    await acute.say_and_wait('啊哈哈～我是觉得手头上的活，还是挺有趣的啦。');
    await era.printAndWait('循声望去，却见奇锐骏的手中，持着一把金色的蟹剪。');
    await era.printAndWait(
      '沿着边缘剪开蟹腿的壳，然后在关节处环绕上一圈。这样就能够一面持着蟹爪，一面最大程度品味着蟹肉。',
    );
    await era.printAndWait(
      '预订的这家民俗旅店里招待的帝王蟹，通常情况下都是处理好才端上来的。像这样让客人自行处理的蟹腿，还真是挺少见的。',
    );
    await era.printAndWait('……不会是店大欺客吧？');
    await acute.say_and_wait('是我自己要求的啦。');
    await acute.say_and_wait(
      '像是这样用小剪子一点点箭蟹壳的，让我有点怀念在老家学的手工课呢……',
    );
    await era.printAndWait(
      '清澈的眼眸缓缓睁大、手持蟹剪的小手微微摆动。嘎吱嘎吱的声响，蟹壳的碎片残落在桌面之上。',
    );
    await era.printAndWait(
      '未过多时，一根晶莹剔透的蟹肉棒，出现在了奇锐骏的手中。',
    );
    await acute.say_and_wait(`呐，${callname}。`);
    era.printButton('「嗯？」', 1);
    await era.input();
    await acute.say_and_wait('来，啊～');
    await era.printAndWait(
      `在如同母亲般的温柔声下，一根蟹肉棒已近在${sys_get_callname(
        0,
        0,
      )}的脸前。`,
    );
    era.printButton('「我说啊，奇锐骏……」', 1);
    await era.input();
    await acute.say_and_wait('啊～');
    era.printButton('「这里毕竟是公众场合……」', 1);
    await era.input();
    await acute.say_and_wait('啊～');
    era.printButton('「那什么，自己动手丰衣足食……」', 1);
    await era.input();
    await acute.say_and_wait('啊～');
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait(
      '——在不张口的话，这根蟹肉棒恐怕就要抵在我的鼻子上了！',
    );
    await era.printAndWait(
      '张开口，朝向那硕大笔挺、散发着硕红光泽蟹肉棒，轻轻地咬下一口。',
    );
    await era.printAndWait(
      '紧实的口感，滚热的汁液，还有独属于海洋生物所有的咸味，还有该说是真不愧是高级食材吗的高级感——',
    );
    era.printButton('「唔……这个，真好吃哦。」', 1);
    await era.input();
    era.printButton('「呐，奇锐骏，你也来尝一口——」', 1);
    await era.input();
    await acute.say_and_wait('啊，等一会儿哦～');
    await era.printAndWait('品味了不错的美食，正想要将手中的美食进行分享。');
    await era.printAndWait(
      '却发现一旁的奇锐骏，却饶有兴趣的使用着蟹剪，摆弄着下一个蟹腿。',
    );
    era.printButton('「…………」', 1);
    await era.input();
    await era.printAndWait('看了看刚被塞进嘴里的蟹肉棒。');
    await acute.say_and_wait('嗯哼哼～哼哼哼～');
    await era.printAndWait('又看了看在吃饭时间却还在摆弄着手艺活的奇锐骏。');
    await era.printAndWait('一只手取下蟹肉棒，这使我一时充满了未知的决心。');
    era.printButton('「呐，奇锐骏。」', 1);
    await era.input();
    await acute.say_and_wait(`怎么啦，${callname}？`);
    era.printButton('「现在是吃饭时间对吧？」', 1);
    await era.input();
    await acute.say_and_wait('是啊。～');
    era.printButton('「所以说啊……」', 1);
    await era.input();
    await era.printAndWait(
      `随后，一只手探在了${acute.sex}的身前，阻断了奇锐骏的手艺。`,
    );
    await era.printAndWait(
      `深色的眼眸一时间的闪烁，这只突然探入其胸前的世界的右手，显然吸引了${acute.sex}的注意。`,
    );
    await era.printAndWait(
      '而随后，这只闯入的手，一如伊甸园中那蛇，勾住了奇锐骏的下颚。',
    );
    await era.printAndWait('为之偏转，随后两眸相见。');
    await era.printAndWait(
      '或是被这突然的遭遇所吓住了，奇锐骏也不反抗，只是呆愣在原地。洁白的脸颊，渐染上粉红的踪迹，真分不清是喜悦，还是烦情。',
    );
    await acute.say_and_wait(`那、那个……${callname}……？`);
    await era.printAndWait(
      '这声音好似迟疑、好似惊异，七分的不解下，夹杂着三分的欣奇。',
    );
    await era.printAndWait(
      '已然迈出的手指，不会撤离，微妙的眼神之中，燃烧着前进的雄心。',
    );
    await era.printAndWait('前哨的任务早已完成，接下来的内容，才是正戏。');
    era.printButton('「呐，奇锐骏～。」', 1);
    await era.input();
    await acute.say_and_wait('嗯❤️……');
    era.printButton('「现在是吃饭的时间，对吧？」', 1);
    await era.input();
    await acute.say_and_wait('……嗯？');
    era.printButton('「所以说啊……」', 1);
    await era.input();
    await era.printAndWait('微笑的表情，反衬着大（蟹）肉棒的倒影。');
    await era.printAndWait('掌握之间，是温和的面容，分寸之地，是凶恶的巨兽——');
    await era.printAndWait('就是现在，孤独的勇士！');
    era.printButton('「给我好好吃吃蟹肉棒啊！！！！」', 1);
    await era.input();
    await era.printAndWait('硕大的长矛，在这一瞬之间，冲进了奇锐骏的口中。');
    await acute.say_and_wait('咕！？');
    await acute.say_and_wait('唔、姆、噜……');
    await acute.say_and_wait('…………');
    await acute.say_and_wait('……❤️');
    await era.printAndWait('——————');
    await era.printAndWait('——不得不说，');
    await era.printAndWait('这真是一场极好的宴会。');
    await era.printAndWait('……');
    await era.printAndWait('…………');
    await era.printAndWait('………………');
    await era.printAndWait('这是与奇锐骏相识的第四年的第一月，');
    await era.printAndWait('这是奇锐骏步入殿堂后的第三天。');
    await era.printAndWait(
      '在理事长的慷慨解囊下，我们来到了北海道的一家民俗旅店度假。',
    );
    await era.printAndWait(
      '……嘛，虽然在我看来的话，这样的旅馆对于自己来说，实在有些太过奢侈了。',
    );
    await era.printAndWait('——夜已深了。');
    await era.printAndWait('本想着泡个温泉后，早早的在被窝中进入梦乡。');
    await era.printAndWait('可辗转反侧，却难以入眠。');
    await era.printAndWait(
      '掀开被子，望向窗外的明月，莫名的惆怅涌上了自己的心头。',
    );
    await era.printAndWait('回过头，望见着的是奇锐骏安详的睡脸。');
    await era.printAndWait('………………');
    await era.printAndWait('趁着夜色，踮起脚尖，');
    await era.printAndWait('轻轻地、轻轻地，拉开房门。');
    await era.printAndWait('步入那无边的深夜。');
    await era.printAndWait('………………');
    await era.printAndWait('夜晚，总是漆黑。');
    await era.printAndWait('漆黑的好似能吞没人的一切。');
    await era.printAndWait('可淡淡的星与月，尚能留下萤火般的微光。');
    await era.printAndWait('予以人暂得以偷生的方向，与足以继续向前的希望。');
    await era.printAndWait('一月北海道的夜晚，四面依旧冷清。');
    await era.printAndWait('但恰是这冷清，能激得人清醒。');
    await era.printAndWait('宴会不错、床铺很软、暖气充足，');
    await era.printAndWait('可这一切总像是浮华的虚影，梦幻泡影。');
    await era.printAndWait('——是啊，自己还是太过软弱。');
    await era.printAndWait('想要向前，那唯有更进一步「精进」——');
    await era.printAndWait(`？？？：「你还没睡啊，${callname}。」`, {
      color: acute.color,
    });
    await era.printAndWait('身后传来了早已熟悉的声音。');
    await era.printAndWait('身体因冰冷而抖擞，可精神却因凄寒而彻清。');
    era.printButton('「我还以为你睡着了呢，奇锐骏。」', 1);
    await era.input();
    await acute.say_and_wait('在你入睡之前，我一直都醒着哦。');
    await era.printAndWait(
      '身后略过一个身影，那是一颗留着深灰色长发的跳动之心。',
    );
    await era.printAndWait(
      `${acute.sex}的步伐总比我更快，于是更近于池塘、更近于明月。`,
    );
    await acute.say_and_wait('我还以为，你会在今天的宴会上告诉我呢。');
    era.printButton('「……」', 1);
    await era.input();
    era.printButton('「你是说……什么呢？」', 1);
    await era.input();
    await acute.say_and_wait('是去法国的事情哦，训练员桑。');
    await acute.say_and_wait(
      `你已经接受了法国赛${acute.get_uma_sex_title()}届的邀请、去巴黎深造。然后三天之后，就会一个人坐上去巴黎的飞机，对吧？`,
    );
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait(`${acute.sex}说的，毫无疑问，是不加遮掩的事实。`);
    await acute.say_and_wait('……为什么，不肯告诉我呢？');
    await era.printAndWait('深灰色的背影，述说着冷淡的词句。');
    era.printButton('「……我并不是想要瞒你，奇锐骏。」', 1);
    await era.input();
    era.printButton('「只是，不知道该如何告诉你而已。」', 1);
    await era.input();
    era.printButton(
      `「如果，要在赛${acute.get_uma_sex_title()}届更进一步的话。现在的我，恐怕并没有真正的资格，站在你的身边吧。」`,
      1,
    );
    await era.input();
    era.printButton('「可我……想要真正有资格的，站在你的身边。」', 1);
    await era.input();
    await acute.say_and_wait('所以……你打算去巴黎，进修三年？');
    era.printButton('「……没错。」', 1);
    await era.input();
    await acute.say_and_wait('所以……你打算去巴黎，进修三年？');
    await era.printAndWait('寒风之中，沉默的应语。');
    await era.printAndWait('无可奈何的冷漠，独自坚持的无情。');
    await era.printAndWait('明月之下，寒风微拂、林声依旧。');
    await era.printAndWait('深灰色的背影，悄悄地昂头。');
    await acute.say_and_wait(`……你知道『凯旋门赏』吗，${callname}？`);
    era.printButton('「你说，法国赛马届的最高奖赛？」', 1);
    await era.input();
    await acute.say_and_wait(
      `是呢，就是那个每年我们这边都会选出『最强${acute.get_uma_sex_title()}』孤身过海、前往巴黎所参加的比赛呢。`,
    );
    await acute.say_and_wait('虽然今年，可能没有这个机会了。');
    await acute.say_and_wait('但是啊，如果是明年的话——');
    era.printButton('「……你是说？」', 1);
    await era.input();
    await acute.say_and_wait('我是说……');
    await era.printAndWait('月光之下，深灰的身影回转，');
    await era.printAndWait('凛然的身姿之下，燃烧着的是前进的雄心。');
    await era.printAndWait(
      '这是三分的迟疑、七分的惊奇，好似是一场遗憾，好似无上欣喜。',
    );
    await era.printAndWait(
      '那是苏格拉底的麦穗，震耳欲隆，却又几近高尚者的温柔。',
    );
    await era.printAndWait(
      `月光之下，星光璀璨，灰色的${acute.get_teen_sex_title()}，许下了${
        acute.sex
      }的诺言。`,
    );
    await acute.say_and_wait('既然你要去巴黎的话，那么我也会跟过去。');
    await acute.say_and_wait('再给我一年时间吧，训练员。');
    await acute.say_and_wait('我一定会，把你追回来。');
    await acute.say_and_wait(`${me.actual_name}——`);
    await era.printAndWait('………………');
    await era.printAndWait('…………');
    await era.printAndWait('……');
    await era.printAndWait('北海道的故事，暂时告一段落。');
    await era.printAndWait('而未来的故事，还有很长、很长——');
  } else {
    await print_event_name('----结局·【起点】----', acute);
    await era.printAndWait('与奇锐骏相识的第四年，一月，');
    await era.printAndWait('气温虽然有所回升，但地面仍然湿冷。');
    await era.printAndWait('这是奇锐骏步入殿堂后的第六天。');
    await era.printAndWait(
      `也是曾一度相濡以沫的${sys_get_callname(0, 0)}和${
        acute.name
      }，即将分离的第一年。`,
    );
    era.drawLine({ content: '【东京 国际机场】' });
    era.printButton('「送到这里就行了。」', 1);
    await era.input();
    era.printButton(
      `「谢谢你们一路陪我到这，骏川${acute.get_adult_sex_title()}，理事长。」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `骏川${acute.get_adult_sex_title()}：「啊哈哈——这么多年的，这么客气做什么。」`,
    );
    await era.printAndWait(
      `北方风味：「同意！${me.actual_name}，早就是我们特雷森学院的家人了。」`,
    );
    await era.printAndWait(
      `机场的登机口前，${sys_get_callname(
        0,
        0,
      )}与骏川${acute.get_adult_sex_title()}、理事长，做着最后的寒暄。`,
    );
    await era.printAndWait(
      `骏川${acute.get_adult_sex_title()}：「不过啊……真没想到，你竟然真的接受了法国那边的邀请啊。」`,
    );
    await era.printAndWait(
      '北方风味：「惊讶！听到这个消息的时候，我震惊的萝卜都掉在地上了。」',
    );
    era.printButton('「哈哈……可能这样做确实不太像我的风格吧。」', 1);
    await era.input();
    await era.printAndWait(
      `一手揉着后脑勺，面对着骏川${acute.get_adult_sex_title()}与理事长，自己不由得尴尬的笑出了声。`,
    );
    era.printButton('「其实……我也是最近才下的决心。」', 1);
    await era.input();
    era.printButton(
      '「在成为奇锐骏训练员的这三年里，我意识到了自己离真正优秀的训练员，还差的太远了。」',
      1,
    );
    await era.input();
    era.printButton(
      '「能够处变不惊的心理素质也好、能够准确把握宽严程度来设计的训练计划也好，」',
      1,
    );
    await era.input();
    era.printButton(
      '「现在的我，离一位『优秀的训练员』，恐怕还差得很远吧。」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `骏川${acute.get_adult_sex_title()}：「所以，你决定接受法国赛马届的邀约，去巴黎深研一段时间？」`,
    );
    era.printButton(
      '「是啊——不过就像你们知道的那个我一样。如果只靠我自己的话，是不可能有背井离乡胆量的。」',
      1,
    );
    await era.input();
    era.printButton('「事实上……是奇锐骏，帮助我下定的决心。」', 1);
    await era.input();
    era.printButton(
      '「即便我是如此无能且失格的训练员，奇锐骏也依旧坚强着，凭借着自己的努力以及小小的运气，成功的步入殿堂之中了，不是吗？」',
      1,
    );
    await era.input();
    era.printButton('「所以啊，我想——自己或许也应该努努力。」', 1);
    await era.input();
    era.printButton(
      '「我想……让自己真正有资格，作为一名训练员、站在奇锐骏的身边。」',
      1,
    );
    await era.input();
    await era.printAndWait(`骏川${acute.get_adult_sex_title()}：「这样吗……」`);
    await era.printAndWait(
      '北方风味：「无悔！既然这是你做出的决定，那么我们当然会无条件支持你的。」',
    );
    await era.printAndWait(
      `骏川${acute.get_adult_sex_title()}：「不过……奇锐骏${
        acute.sex
      }今天为什么没有来送行呢？」`,
    );
    era.printButton(
      `「这个吗……其实，去法国的事，其实我到现在还瞒着${acute.sex}。」`,
      1,
    );
    await era.input();
    await era.printAndWait('北方风味：「惊讶！?你现在还瞒着奇锐骏！？」');
    era.printButton(`「哈哈……其实，我有给${acute.sex}留信。」`, 1);
    await era.input();
    era.printButton('「其实，我也不知道这样做是对还是错。」', 1);
    await era.input();
    era.printButton(
      `「只不过如果真的要跟${acute.sex}离开的话……果然，还是一个人偷偷地、像丧家犬一样溜走……要更好呢。」`,
      1,
    );
    await era.input();
    era.drawLine({ content: '【嘣、嘣、嘣、嘣～】' });
    era.drawLine({ content: '【请前往巴黎的旅客请注意～】' });
    era.drawLine({ content: '【您乘坐的QR5201次航班现在开始登机～】' });
    era.printButton(
      `「看来时间已经到了——骏川${acute.get_adult_sex_title()}、理事长。」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `骏川${acute.get_adult_sex_title()}：「一路顺风，${me.actual_name}。」`,
    );
    await era.printAndWait('北方风味：「宏图！学成后，记得早日归来！」');
    era.printButton('「谢谢。那么——」', 1);
    await era.input();
    era.printButton('「我们三年后见。」', 1);
    await era.input();
    await era.printAndWait('………………');
    await era.printAndWait('平淡无奇的排队，了无生趣的检票。');
    await era.printAndWait('从二楼登下电梯，走入大厅，');
    await era.printAndWait('这一切说不上有趣，更不值一提。');
    await era.printAndWait(
      '恍惚间，有些口渴。习惯性的探出手，试图从挎包中取出解渴的萝卜干。',
    );
    await era.printAndWait(
      `可翻找了一遍，这才想起来，其实，${sys_get_callname(
        0,
        0,
      )}出门从没有备食物的习惯。`,
    );
    era.printButton('「……」', 1);
    await era.input();
    era.printButton('「……哈哈——」', 1);
    await era.input();
    era.printButton('「我啊，到底是有多长的时间，没有一个人出远门了呢？」', 1);
    await era.input();
    await era.printAndWait('川急的人流中间，没有回应。');
    await era.printAndWait('不由自主的抬起了头。回望向登机口。');
    await era.printAndWait('那儿盆景依旧，来回着数个人影。');
    era.drawLine({ content: '【……要是奇锐骏在那的话，该有多好啊？】' });
    await era.printAndWait('脑海中不由得想到，');
    await era.printAndWait('而随之，便是自己温和得自嘲。');
    era.printButton('「（事到如今……这是在想什么呢。）」', 1);
    await era.input();
    era.printButton(
      `「（${me.actual_name}啊，${me.actual_name}，你怎能如此的懦弱）」`,
      1,
    );
    await era.input();
    await era.printAndWait('自嘲的苦笑，飘散于天际，随人海所吞没。');
    await era.printAndWait('坚定好精神。');
    await era.printAndWait(`${sys_get_callname(0, 0)}踏出了「最初」的一步——`);
    await era.printAndWait('……');
    await era.printAndWait('…………');
    await era.printAndWait('…………………');
    await era.printAndWait('盆景之下，玻璃之旁。');
    await era.printAndWait(
      `一个${acute.get_child_sex_title()}，静静地坐在这里。`,
    );
    await era.printAndWait(
      `人们常说${acute.get_child_sex_title()}平静、温和，以至于有些老态龙钟。`,
    );
    await era.printAndWait(
      `其实，${acute.get_child_sex_title()}并不像人们口中所说的那样，总是平静与温和。`,
    );
    await era.printAndWait(
      `${acute.sex}也如常人一般，会感到压力，感到难受，感到无处诉说的悲凉，感到撕心裂肺的痛苦。`,
    );
    await era.printAndWait(`只不过——${acute.sex}并不喜欢将这些私密与人述说。`);
    await era.printAndWait(`${acute.sex}更喜欢，一个人偷偷地藏起来。`);
    await era.printAndWait('藏在一个「没有人发现」的地方。');
    await era.printAndWait('在那里，轻轻地坐下来。');
    await era.printAndWait('就像「一开始」那样——');
    await era.printAndWait(
      `头戴绿色帽子的${acute.get_phy_sex_title()}：「——不去跟他告别吗？」`,
    );
    await era.printAndWait(
      `身旁，好心的${acute.get_phy_sex_title()}，直立在${acute.sex}的侧方。`,
    );
    await era.printAndWait(
      `${acute.get_child_sex_title()}：「不，不用……这样就好。」`,
    );
    await era.printAndWait(
      `头戴绿色帽子的${acute.get_phy_sex_title()}：「是吗……」`,
    );
    await era.printAndWait('眺望向台下的人流，凝练出男孩的背影。');
    await era.printAndWait(
      `不知怎得，${acute.get_phy_sex_title()}不由自主的叹了声气。`,
    );
    await era.printAndWait(
      `头戴绿色帽子的${acute.get_phy_sex_title()}：「这家伙，真是个蠢蛋呢——」`,
    );
    await era.printAndWait(
      `${acute.get_child_sex_title()}：「你是说，${callname}吗？」`,
    );
    await era.printAndWait(
      `头戴绿色帽子的${acute.get_phy_sex_title()}：「除了他以外，还能有谁呢？」`,
    );
    await era.printAndWait(
      `说罢，${acute.get_phy_sex_title()}的帽子为之一抖，隐藏着的秘密呼之欲出。`,
    );
    era.drawLine({ content: '【难道，我就不是了吗？】' });
    await era.printAndWait(
      `${acute.get_child_sex_title()}将心中涌出的这句话，咽回到自己的口中。`,
    );
    await era.printAndWait('毕竟，男孩总是不擅长隐瞒。');
    await era.printAndWait('不习于网络的空间，却又没有现实的余地。');
    await era.printAndWait(
      `来往的邮寄、NOK的劝诱，总是在送达特雷森后，经由${acute.get_child_sex_title()}所转递。`,
    );
    await era.printAndWait('——从一开始，二人之间就不存在任何的秘密。');
    await era.printAndWait(
      `头戴绿色帽子的${acute.get_phy_sex_title()}：「……现在还来得及哦？」`,
    );
    await era.printAndWait(`${acute.get_phy_sex_title()}似乎有些担心。`);
    await era.printAndWait(
      `头戴绿色帽子的${acute.get_phy_sex_title()}：「「如果要见最后一面的话——」`,
    );
    await era.printAndWait(`${acute.get_child_sex_title()}：「不用了。」`);
    await era.printAndWait(
      `${acute.get_child_sex_title()}坐在原地，斩钉截铁。`,
    );
    await era.printAndWait(`躁动的内心，总于使${acute.sex}鼓足了勇气。`);
    await era.printAndWait(
      `面向${acute.get_child_sex_title()}，一向懦弱的${acute.get_child_sex_title()}，终于吐露出了自己的心声——`,
    );
    await era.printAndWait(
      `${acute.get_child_sex_title()}：「笨蛋的话——这里，还有一个。」`,
    );
    await era.printAndWait(
      `这一刻，步向殿堂的${acute.get_child_sex_title()}，`,
    );
    await era.printAndWait('第一次，拥有了「勇气」。');
    await era.printAndWait('………………');
    await era.printAndWait('…………');
    await era.printAndWait('……');
    await era.printAndWait('飞行的铁鸟，轰鸣得奏响。');
    await era.printAndWait('而在铁穹中的人们，不曾听到它的离音。');
    await era.printAndWait('望向天空的浮云，奇锐骏拆封手中的信函。');
    await era.printAndWait('里面，是粉色有些稍硬的卡纸。');
    await era.printAndWait('上面写满了潦草的字迹。');
    await era.printAndWait('（以下内容请用灰色字体）');
    await era.printAndWait('「奇锐骏，敬启。」');
    await era.printAndWait(
      '「在你看到这封信的时候，我应该已经坐上了前往巴黎的飞机。」',
    );
    await era.printAndWait(
      '「请原谅我的不辞而别。因为我实在不知该以什么样的表情，去向你告知我的离开。」',
    );
    await era.printAndWait(
      '「作为你的训练员，我们一同经过了漫长而有趣的三年。」',
    );
    await era.printAndWait('「这三年里，我们共同创造了许许多多的回忆。」');
    await era.printAndWait('「懦弱的我也在这段时间里，一度接受着你的帮助。」');
    await era.printAndWait(
      '「许是出于幸运，又必然出于你无时无刻的努力，这三年的历练，终于使我们步入了殿堂。」',
    );
    await era.printAndWait('「但也正因此，让我意识到——我还有太多需要学习。」');
    await era.printAndWait(
      '「于是，我决定接受法国方面的邀请。到国外更为进步的赛马届进修学习。」',
    );
    await era.printAndWait(
      '「很遗憾，在进修的这三年里，我不再能担任你的训练员了。」',
    );
    await era.printAndWait(
      '「但如果可以——三年之后，若你仍在赛马届活动。请将那时你的担当训练员的职位，空余给在下。」',
    );
    await era.printAndWait(
      '「请原谅我的私心——但也因这份私心，这三年里，我将刻苦的努力。」',
    );
    await era.printAndWait('「无论如何，我都将以你为目标。」');
    await era.printAndWait('「以作为真正能站在你身边的训练员，而为之努力。」');
    await era.printAndWait('「以上，即颂坤安。」');
    await era.printAndWait(`「${me.actual_name}」`);
    await era.printAndWait('……');
    await era.printAndWait('…………');
    await era.printAndWait('…………………');
    await acute.say_and_wait('……');
    await acute.say_and_wait('我们啊——');
    await acute.say_and_wait('——都是，不折不扣的，大蠢蛋呢。');
    await era.printAndWait('浩瀚的天穹之下，唯剩下，两者的凛然。');
  }
  //todo 殿堂商店特殊物品
};

/**
 * 奇锐骏的育成事件
 *
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 *
 * @param {HookArg} hook
 * @param {*} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('unsupported stage!');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
