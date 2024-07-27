const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_money } = require('#/system/sys-calc-flag');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[7];
const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  const event_arg = event_object?.arg,
    gold_ship = get_chara_talk(7),
    me = get_chara_talk(0);
  if (event_arg === 47 + 1) {
    await print_event_name(
      [{ color: chara_colors[1], content: '新年的抱负' }],
      gold_ship,
    );
    await era.printAndWait(
      `新的一年，新的开始，希望 ${gold_ship.name} 的活跃能更上一层楼。${me.name} 是如此想的。`,
    );
    await era.printAndWait(
      `而 ${me.name} 心中所想的对象则向 ${me.name} 双手合十，只听两掌相击后啪的一响。`,
    );
    await gold_ship.say_and_wait(
      '新年谢谢你了嘞——新的一年……去年的我也变成今年的我了。',
    );
    await era.printAndWait(
      `${me.name} 点点头，对${gold_ship.sex}技术上正确的言论表示同意。`,
    );
    await gold_ship.say_and_wait('不过话说回来啊，我寻思这个可是个大奇迹哦。');
    await gold_ship.say_and_wait(
      '假如没有地球、没有宇宙的话……我就不会存在了。',
    );
    await era.printAndWait(
      `${gold_ship.sex} 又一次朝 ${me.name} 合掌，${me.name} 希望 ${gold_ship.sex} 不要再来一次凑个事不过三。`,
    );
    await gold_ship.say_and_wait(
      '所以我打算今年一整年都用来对各种各样的东西感恩。',
    );
    await gold_ship.say_and_wait('感谢地球，感谢宇宙，感谢我眼前的你。');
    await gold_ship.say_and_wait(
      '接下来请听我一曲『恭祝新年～跨越寒冬，向春而行～』',
    );
    await era.printAndWait(
      `${gold_ship.name} 开始演唱起了演歌风的神秘曲目，${gold_ship.sex} 悠扬悦耳的歌声在训练员室内不住回荡。`,
    );
    await era.printAndWait(
      `哪怕是不加上配乐的清唱，也足以让 ${me.name} 感受到歌中盈满的真情实意。`,
    );
    await era.printAndWait(`一曲唱毕，${me.name} 忍不住鼓起掌。`);
    await gold_ship.say_and_wait('谢谢，谢谢，山顶的朋友你们好！');
    await era.printAndWait('偶像歌手一脸高兴，朝不存在的观众挥手致意。');
    era.println();

    era.printButton('「说起来……」', 1);
    await era.input();

    await gold_ship.say_and_wait('嗯？怎么啦？你也要对我表达点什么吗？');
    await era.printAndWait(
      `${gold_ship.name} 摆出了期待的神情，腰上的尾巴也像扫帚一样用力地来回挥舞。`,
    );
    era.println();

    era.printButton('「今年的经典级比赛，你可要好好拿出成绩哦。」', 1);
    await era.input();

    await gold_ship.say_and_wait(
      '什么嘛？经典？我今年倒是想秀一把激烈无比的吉他solo技术啦，不过逆个潮流拉小提琴好像也可以有哦。',
    );
    era.println();

    era.print('「说什么呢，我的意思是……」');
    era.printButton('「努力锻炼长距离能力吧！」（耐力+40）', 1);
    era.printButton('「现在就来想想吧！」（智力+40）', 2);
    era.printButton('「搞一波巨蛋巡回演唱会吧！」（技能点数+50）', 3);
    const ret = await era.input();

    if (ret === 1) {
      await gold_ship.say_and_wait('原来如此，是要锻炼耐力来应付长时间演奏！');
      await era.printAndWait(
        `不是这样的。${me.name} 摇头，但她已经沉浸进自己的世界里了。`,
      );
      await gold_ship.say_and_wait(
        '我day到了！确实，经典音乐的话，时长长的曲目甚至能达到10小时呢！',
      );
      await gold_ship.say_and_wait(
        '好嘞！不论是10小时还是20小时都给我放马娘过来吧！',
      );
      await era.printAndWait(
        `不是这样的。${me.name} 还没能来得及解释经典赛与经典音乐的区别，${gold_ship.sex} 就一溜烟地准备乐器去了。`,
      );
      await era.printAndWait('唉，事到如今只好随机应变了。');
      era.println();
      get_attr_and_print_in_event(7, [0, 40, 0, 0, 0], 0) &&
        (await era.waitAnyKey());
    } else if (ret === 2) {
      await gold_ship.say_and_wait(
        '原来如此，是要尊重乐队成员的意见吗！这个可以有。',
      );
      await gold_ship.say_and_wait(
        '毕竟很多时候导致乐队解散的原因正是音乐路线上的分歧啊。',
      );
      await gold_ship.say_and_wait('好吧，我就陪你聊爆……！来！我们对拳！');
      await era.printAndWait(
        '之后你们物理上打成了一片，然后在训练员室大被同眠了。',
      );
      await era.printAndWait('睡得还挺香的。');
      era.println();
      get_attr_and_print_in_event(7, [0, 0, 0, 0, 40], 0) &&
        (await era.waitAnyKey());
    } else {
      await gold_ship.say_and_wait('喂喂……巨蛋巡回！？');
      await gold_ship.say_and_wait(
        '你这梦想真是远大无比啊！！我……燃起来了！！',
      );
      await gold_ship.say_and_wait(
        '好！！我们现在就开演吧！！既然要办演唱会，那就要以第一名为目标啊！！！',
      );
      await era.printAndWait('在那之后，你们艰苦练习了一阵子。');
      await era.printAndWait(
        '两人在学校举办的小型露天演唱会竟然获得了不错的评价。',
      );
      await era.printAndWait('所以赛跑呢？');
      era.println();
      get_attr_and_print_in_event(7, undefined, 50) && (await era.waitAnyKey());
    }
    era.set('cflag:7:节日事件标记', 0);
  } else if (event_arg === 47 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:7:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name(
      [{ color: chara_colors[1], content: '夏季合宿' }],
      gold_ship,
    );
    await era.printAndWait(
      '夏季合宿，对赛马娘而言是一段寓教于乐的时光。每逢暑假，绝大部份的特雷森学生都会来到海边享受阳光、海滩，以及可能的一点点地狱式锻炼。',
    );
    await era.printAndWait(
      `而理所当然的，每到了这种时候，${me.name} 那位特立独行的爱马 ${gold_ship.name} 都会特别来劲。`,
    );
    era.println();

    await gold_ship.say_and_wait(
      '哦哦哦哦哦！说到夏天就是大海啊！让我们一起朝海边出发啦！！！',
    );
    await gold_ship.say_and_wait('Zzzzzzz……');
    era.println();

    await era.printAndWait(
      `${me.name} 看着在大巴上睡得像头死猪一样的 ${gold_ship.name}，心想这家伙的干劲真是和 ${gold_ship.sex} 本人一样来无影去无踪。`,
    );
    era.println();

    era.printButton('「起床啦！！！太阳晒屁股了！！！」', 1);
    await era.input();

    await gold_ship.say_and_wait(
      '呜哇～吓死我了！我刚才梦到了自己在大巴上等着去海滩合宿呢！你要怎么赔啊！',
    );
    era.println();

    await era.printAndWait(
      `${me.name} 没好气地用拇指指向窗外示意你们已经到了，注意到这点的 ${gold_ship.name} 马上兴高采烈地一绷一跳地下了车。`,
    );
    era.println();

    await era.printAndWait(
      `你们渡过了几天不错的假期，训练也十分充实。但今天已经到了训练的时间，${gold_ship.name} 还是没有出现。为了寻找 ${gold_ship.sex} 的踪影，你来到了海边。`,
    );
    era.println();

    await era.printAndWait('然后——');
    era.println();

    await gold_ship.say_and_wait(
      '哎走过路过不要错过哟～好吃的炒面大平卖哟～！！',
    );
    await gold_ship.say_and_wait('有甜酸苦辣～就跟人生一样哟～！！');
    era.println();

    era.printButton('「为什么跑这里卖炒面来了啊……！！」', 1);
    await era.input();

    await era.printAndWait(
      `${me.name} 气匆匆地走到摊子前面想要质问这个摸鱼的家伙。`,
    );
    era.println();

    await gold_ship.say_and_wait('啊～这不训练员吗～你要特辣的对吧？');
    era.println();

    era.printButton('「我是来叫你去训练的啊。」', 1);
    await era.input();

    await gold_ship.say_and_wait(
      '哎呀～我这不是在给店主大叔代班吗～人家腰酸背疼的，你忍心让大叔在大太阳下烤一天吗？',
    );
    await gold_ship.say_and_wait(
      '所以今天我一定要把这些面都卖完！不然的话大叔的腰就治不好了！',
    );
    era.println();

    await era.printAndWait(
      `${me.name} 知道以 ${gold_ship.sex} 说一不二的性格是劝不动的，于是只好无奈地点了一盘甜酸味的炒面，坐到旁边的太阳椅上边吃边监视 ${gold_ship.name} 以防 ${gold_ship.sex} 又一次失踪。`,
    );
    era.println();

    const changed_attrs = {};
    gacha(Object.values(attr_enum), 3).forEach(
      (e) => (changed_attrs[e] = true),
    );
    const change_list = new Array(5).fill(3);
    gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 8));
    get_attr_and_print_in_event(7, change_list, 45) && (await era.waitAnyKey());
  } else if (event_arg === 47 + 41) {
    const opera = get_chara_talk(15);
    await print_event_name(
      [{ color: chara_colors[1], content: '目标巴黎时装周编' }],
      gold_ship,
    );

    await era.printAndWait('黄金船要在有马纪念上与荣进闪耀交锋——');
    era.println();

    await era.printAndWait(
      '诚然，荣进闪耀本身就是一位强敌……但在有马纪念的舞台上，所有选手都是实力雄厚的强者！',
    );
    era.println();

    era.printButton('（得把阿船抓起来好好训练才行……）', 1);
    await era.input();

    await era.printAndWait(
      `没错，就在这个节骨眼上，${
        me.name
      } 可爱又迷人的负责赛${gold_ship.get_uma_sex_title()}黄金船又不知道跑哪去了。那家伙一边意气风发地从 ${
        me.name
      } 的跟前大步走过，一边在嘴里说着什么「哦嗬嗬嗬嗬！为了站到赛马娘的顶点所须的是压倒性的『美』……！！」，然后一溜烟地跑掉了。`,
    );
    era.println();

    await era.printAndWait(
      `${
        me.name
      } 连忙跟上，却偶尔撞见了一位以自身的美学为傲的${opera.get_uma_sex_title()}……`,
    );
    era.println();

    await gold_ship.say_and_wait('你是……！');
    await opera.say_and_wait(
      '没错！我就是美的化身！被神明宠爱着的光之子！好——',
    );
    await gold_ship.say_and_wait(
      '好歌剧——！！哼，我黄金船大人可是能轻松登上巴黎时装周的存在！',
    );
    await opera.say_and_wait(
      '咕，竟然抢我台词……！不愧是黄金船，连一刻都不能轻敌！那么关于我们哪个到底更美，就在这里决一高下吧！',
    );
    era.println();
    await era.printAndWait(
      `然后，两位赛${opera.get_uma_sex_title()}就在 ${
        me.name
      } 的注视下进行了整整四小时的走秀对决……！二人乐在其中倒也罢了，为什么要把 ${
        me.name
      } 拉进来，这是何等的无慈悲！`,
    );
    era.println();

    get_attr_and_print_in_event(7, [0, 5, 0, 0, 0], 0) &&
      (await era.waitAnyKey());
  } else if (event_arg === 95 + 3) {
    const winning_ticket = get_chara_talk(35);
    await print_event_name(
      [{ color: chara_colors[1], content: '目标社会人编' }],
      gold_ship,
    );

    await era.printAndWait('年复年始，资深级的比赛已经开始了。');
    await era.printAndWait(
      `很快，天皇赏与宝塚记念等重大赛事也会迫近 ${me.get_couple_title()}。`,
    );
    era.println();

    await era.printAndWait('然而，黄金船还没有来到训练员室。');
    era.println();

    await era.printAndWait(`${me.name} 按下怒气在学园内四处搜索——`);
    era.println();

    await gold_ship.say_and_wait(
      `奖券藏，我跟你讲啊，后生${gold_ship
        .get_child_sex_title()
        .substring(0, 1)}最重要的就系所谓的社会人力啊。`,
    );
    await winning_ticket.say_and_wait('人力公司？');
    await winning_ticket.say_and_wait(
      '不不，我的意思是能顺利融入社会、按规定迅速行动、不给周遭的人带来麻烦的《社会人・力》！',
    );
    await winning_ticket.say_and_wait(
      '《社会人点力》！听起来很厉害的样子啊……！！',
    );
    era.println();

    era.printButton('（那你的《社会人点力》可是完全不及格啊黄金船——！！）', 1);
    await era.input();

    await gold_ship.say_and_wait(
      '虽然不知道为什么要把《社会人・力》读成《社会人点力》，但就让我们来测试一下我们的《社会人点力》吧！',
    );
    await gold_ship.say_and_wait('那边的偷窥狂魔训练员，你也跟我们来！');
    era.println();

    await era.printAndWait(
      `说罢，黄金船和胜利奖券就风风火火地冲出了校园，${me.name} 只能气喘吁吁地连忙跟上。`,
    );
    era.println();

    await era.printAndWait(
      '在那之后，黄金船二人在电车上保持安静以彰显自己的《社会人点力》的尝试在开始15秒后以失败告终了。',
    );
    era.println();

    get_attr_and_print_in_event(7, [0, 0, 0, 5, 0], 0) &&
      (await era.waitAnyKey());
  } else if (event_arg === 95 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:7:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name(
      [{ color: chara_colors[1], content: '夏季合宿' }],
      gold_ship,
    );

    await gold_ship.say_and_wait('夏天啦！到海边啦！穿泳装啦！');
    era.println();

    await era.printAndWait('二人一起在海滩上漫步着……');
    await era.printAndWait(
      `${gold_ship.name} 在炎炎夏日下精神爽利，而 ${me.name} 只觉得汗流浃背。`,
    );
    era.println();

    era.printButton('「今年的夏天总觉得比往年的还热啊……！」', 1);
    await era.input();

    await gold_ship.say_and_wait('觉得热不会脱衣服吗？');
    era.println();

    await era.printAndWait(
      `${me.name} 闻言，双眼登时瞪得比铜铃还大，猛地指向了全身上下除了泳装不着片缕的自己。${me.name} 又突出双指，先指向自己的双眼然后又指向 ${gold_ship.name} 的。`,
    );
    era.println();

    await era.printAndWait('「好啦好啦，开个玩笑——」');
    await era.printAndWait('「我们去吃冰吧，吃冰！把体温降下来！」');

    era.printButton('「行，我去买吧。」（马币-5，好感度+10，爱慕+5）', 1);
    await era.input();

    await era.printAndWait(
      `${me.name} 让 ${gold_ship.name} 独自留在海滩上，自己快步前往小吃摊买刨冰去了，然后回程的时候——`,
    );

    era.drawLine();
    await era.printAndWait(
      `路人A「哎呀？这位${
        gold_ship.sex_code - 1 ? '小姐' : '小哥'
      }自己一个人吗？」`,
    );
    await era.printAndWait(
      `路人B「要不要跟${gold_ship.sex_code - 1 ? '哥哥' : '姐姐'}我玩玩呀？」`,
    );
    era.println();

    await gold_ship.print_and_wait(
      `${gold_ship.name} 仍然站在原地，但显然美貌如花的人总是能惹来狂蜂浪蝶。只见数个不怀好意的家伙把${gold_ship.sex}团团围住，不住骚扰着。哪怕面对这种场合，${gold_ship.name} 仍然在努力尝试敷衍打发对方，丝毫不见平常威风八面的面貌……`,
    );
    era.println();

    await gold_ship.print_and_wait(
      `这样啊……那家伙是成名${gold_ship.get_uma_sex_title()}，这种场合不好发作……`,
    );
    era.println();

    await gold_ship.print_and_wait(
      `虽然 ${gold_ship.name} 表面上十分自我任性，但实际上比谁都要明白「社会性」这种东西。`,
    );
    era.println();

    era.printButton(
      `「喂，在对别人的${gold_ship.sex_code - 1 ? '女人' : '男人'}干什么呢？」`,
      1,
    );
    await era.input();

    await era.printAndWait(
      `${me.actual_name} 语毕，在场的数人都惊异地看向了${me.sex}。`,
    );
    era.println();

    await gold_ship.say_and_wait('达令～你来啦～');
    era.println();

    if (era.get('love:7') >= 75) {
      await gold_ship.print_and_wait(
        `${gold_ship.name} 见机便旋即挤开混混们，挥舞双手向 ${me.actual_name} 跑去一把抱住，献上了热情的深吻。包括 ${me.actual_name} 在内的众人都被吓了一跳，但 ${me.actual_name} 旋即给出了回应——双方的舌头在嘴中互相搅动探索，分享对对方的渴求与激情……至于那些小混混眼见搭讪不成，只好骂骂咧咧地离开了。`,
      );
    } else {
      await gold_ship.print_and_wait(
        `${gold_ship.name} 见机便旋即挤开混混们，挥舞双手向 ${me.actual_name} 跑去一把抱住，然后轻吻了 ${me.actual_name} 的脸颊——这一吻的在脸上留下了润唇膏的冰冷，但在 ${me.actual_name} 狂跳的心里刻下了激情的印记。`,
      );
    }

    era.drawLine();
    await era.printAndWait(
      `事件告一段落，${me.name} 与黄金船一起坐在阳伞下享受刨冰带来的清凉。`,
    );
    era.println();

    await gold_ship.say_and_wait('呼，真是好险啊～阿船我差点就要被拐走咯～');
    await gold_ship.say_and_wait('谢谢你，阿训♡');
    await gold_ship.say_and_wait('话说……原来我算是『你的女人』吗？');

    await era.printAndWait(
      `${gold_ship.name} 露出狡黠的神情靠到 ${me.name} 的肩上，不论 ${me.name} 怎么解释都置若罔闻……这件事，恐怕会被${gold_ship.sex}吹上十年吧……`,
    );
    era.println();
    sys_change_money(-5, 7);
    sys_like_chara(7, 0, 10, true, 5) && (await era.waitAnyKey());
  } else if (event_arg === 'eden') {
    new GoldShipEduMarks().keywords++;
    const your_callname = era.get('callname:7:0');
    const taste = get_chara_talk(302);
    await print_event_name(
      [{ color: chara_colors[1], content: '通往伊甸园之路' }],
      gold_ship,
    );

    await era.printAndWait(
      `晩冬寒风冻彻骨，午时真相显径路……${me.name} 与黄金船携带着四条线索纸条前往最终的目的地。`,
    );
    era.println();
    await gold_ship.say_and_wait(
      '在命运的邂逅前，我的右手也被漆黑的暗影诅咒刺激得生痛……',
    );
    era.println();

    era.printButton('「但这是你不能回避的命运，勇敢前进吧！」', 1);
    await era.input();

    await gold_ship.say_and_wait(
      '那当然了，哪怕是神明也无法阻止我前往那个地方了！',
    );
    await gold_ship.say_and_wait(
      `准备好了吗，${your_callname}？那就是我们的终点！`,
    );
    era.println();

    era.printButton('「哼，不用你操心！我们走！」', 1);
    await era.input();

    await era.printAndWait(
      `幽暗，这是 ${me.get_couple_title()} 对这个地方的第一印象。`,
    );
    await era.printAndWait(
      `寒冷，则是这个地方对 ${me.get_couple_title()} 发起的第一波攻击。`,
    );
    era.println();
    await era.printAndWait(
      `在几乎伸手不见五指的洞窟中，唯有一点光线似在引导着 ${me.get_couple_title()} 不断前进。`,
    );
    era.println();
    await era.printAndWait(
      '一旁的众多奇异生物并不理会你们，十分自在地悠哉游哉着。',
    );
    era.println();
    await gold_ship.say_and_wait('这里就是……纸条说的地方。');
    await gold_ship.say_and_wait('『Shu』、『an』、『izu』。');
    era.println();

    era.printButton('「最后一个是『gu』！」', 1);
    await era.input();

    await gold_ship.say_and_wait(
      '所以答案已经显而易见了……是『Shuizuguan』，就是水族馆啊！',
    );
    await gold_ship.say_and_wait('没想到，伊甸园竟然就在这种地方……');
    era.println();
    await era.printAndWait(
      '就在这个时候，一个身影从旁出现！那个小小的身影一边鼓掌，一边发出高昂的笑声。',
    );
    era.println();
    await taste.say_and_wait('很好！竟然能通过『伊甸计划』来到这里！');
    await taste.say_and_wait('感动！训练员你的支持也是决不可少！');
    await gold_ship.say_and_wait('你是特雷森的教父？！为什么会在这里！');
    await gold_ship.say_and_wait(`${your_callname}！你难道已经知道了？！`);
    era.println();

    era.printButton(
      '「从第三条线索的时候就猜到了，包括地点和幕后的藏镜人。」',
      1,
    );
    await era.input();

    await gold_ship.say_and_wait('什么？！那你倒是跟我说啊！');
    await taste.say_and_wait('好玩！那样就不有趣了！');
    await taste.say_and_wait('说明！所谓的『伊甸计划』就是……！');
    era.println();
    await era.printAndWait(
      `原来，「伊甸计划」是为了让热情奔放但时常把心思放到其他地方的 ${gold_ship.name} 能专心地挑战闪耀系列赛而制定的计划。`,
    );
    era.println();
    await era.printAndWait(
      '通过「伊甸计划」，以各种线索和秘传之书来挑起黄金船的好奇心，从而达到计划目标。',
    );
    era.println();
    await era.printAndWait(
      `对 ${taste.name} 而言，所谓的「伊甸园」就是赛马娘生涯中最重要的闪耀系列赛。`,
    );
    era.println();
    await taste.say_and_wait('就是这样！');
    await gold_ship.say_and_wait(
      '原来如此！那在我梦里出现的声音也是你们干的好事吗？',
    );
    await taste.say_and_wait('咦？');
    await gold_ship.say_and_wait('咦？');
    era.println();

    era.printButton('「咦？」', 1);
    await era.input();

    await taste.say_and_wait(
      '惊愕！我们除了找同学为你准备纸条和秘传之书外，应该没有动用到隐藏的黑科技啊！',
    );
    await taste.say_and_wait('啊这个不能说，你们忘掉。');
    await gold_ship.say_and_wait('难不成，真的是小金船体内的第二人格诞生？！');
    era.println();

    era.printButton('「那种东西有一个就够了！」', 1);
    await era.input();

    await era.printAndWait(
      `就这样，${me.get_couple_title()} 的三年旅途在欢笑嬉闹与莫名其妙中告一段落了。`,
    );

    era.drawLine();
    await era.printAndWait(
      `晚上，${me.name} 与 ${gold_ship.name} 来到海边躺在沙滩上，享受着咸咸的海风吹在脸上的感觉。`,
    );
    era.println();

    era.printButton('「……谢谢你，黄金船。」', 1);
    await era.input();

    await gold_ship.say_and_wait('嗯？怎么这么唐突……啊，已经睡着了？');
    await gold_ship.say_and_wait('真是的，真是既可靠又不可靠的家伙。');
    await gold_ship.say_and_wait(
      '在这三年间被我折腾得够辛苦的你竟然还没有提出辞呈。',
    );
    await gold_ship.say_and_wait(
      '时而严肃，时而愿意与我一起胡闹。有时候我都会觉得自己是不是做得过分了，结果你都没有特地摆出大人的模样阻止我。',
    );
    await gold_ship.say_and_wait('你知道吗？理事长说『伊甸园』是闪耀系列赛。');
    await gold_ship.say_and_wait(
      '但我的『伊甸园』不是什么特雷森，也不是什么闪耀系列赛啊……',
    );
    await gold_ship.say_and_wait('……');
    await gold_ship.say_and_wait('啾♡');
    era.println();

    if (era.get('love:7') >= 50) {
      era.printButton('「睁开双眼。」', 1);
    }
    era.printButton('「假装睡着。」', 2);
    const ret = await era.input();

    if (ret === 1) {
      await gold_ship.say_and_wait('呜哦，竟然醒过来了？！');
      await gold_ship.say_and_wait('不，从一开始就没睡吗！夏亚，你算计我！');

      await quick_into_sex(7);

      await gold_ship.say_and_wait('哈啊……哈啊……好骗……');
      await gold_ship.say_and_wait('……你这……混蛋……');
      era.println();

      era.printButton('「哼哼，被欺负的感觉怎么样？」', 1);
      await era.input();

      await gold_ship.say_and_wait('你……少算了一件事……');
      await gold_ship.say_and_wait('训练员是、敌不过马娘的！');
      era.println();

      era.printButton('「什么！」', 1);
      await era.input();

      await gold_ship.say_and_wait('以后也不会让你离开的哦♡');
      era.println();
      await era.printAndWait(
        `看来，${me.name} 被小金船骑在脸上的生活还要持续很久很久……`,
      );
    } else {
      await gold_ship.say_and_wait('以后也不会让你离开的哦♡');
      era.println();
      await era.printAndWait(
        `看来，${me.name} 被小金船使来唤去的生活还要持续很久很久……`,
      );
    }
    sys_like_chara(7, 0, 200) && (await era.waitAnyKey());
  } else if (event_arg === 'carrot') {
    await print_event_name('拔萝卜之鬼', gold_ship);
    await era.printAndWait([
      '在学校里被一头芦毛的诡异',
      gold_ship.get_uma_sex_title(),
      '拦住了。',
    ]);
    await gold_ship.say_and_wait(
      '唏！那边那位训练员！要不要跟小金船一起到海边拔萝卜啊！',
    );
    await era.printAndWait(
      '原来是问题儿童黄金船……而且海边哪有什么萝卜可以拔啊？',
    );
    era.printButton('「你要拔，那便拔！」（马币+20）', 1);
    era.printButton('「总觉得有点可疑……」（体力+100）', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        '竟然从沙滩里挖出来了散发着彩虹色光芒，而且看起来像是宝石的萝卜？！',
      );
      sys_change_money(20);
    } else {
      await era.printAndWait(
        '得到了普通的萝卜……等下长在海边真的算普通吗！？总之先拿回去给午饭加餐了。',
      );
      sys_change_attr_and_print(0, '体力', 100);
    }
  } else {
    throw new Error();
  }
};
