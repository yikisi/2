const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} daiya
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (daiya, me, hook, event_object) => {
  const edu_weeks = era.get('cflag:67:育成回合计时'),
    races = era.get('cflag:67:育成成绩');
  let wait = false;
  if (edu_weeks === 47 + 32) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:67:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_event_name('夏季集训（经典年）结束', daiya);
    await era.printAndWait('夏季集训最后一天。里见光钻似乎在思考着什么。');
    era.printButton('「怎么了吗？」', 1);
    await era.input();
    await daiya.say_and_wait('……我正在想今后的事情。');
    await daiya.say_and_wait(
      '距离『菊花赏』还有大概两个月的时间……这段时间内我能成长多少呢？',
    );
    await daiya.say_and_wait(
      '我觉得自己的实力还没有到可以完全不被魔咒影响的程度。',
    );
    era.printButton('「还有两个月的时间」', 1);
    await era.input();
    await era.printAndWait(
      '夏季集训主要是以基础训练为中心。针对「菊花赏』该做的正式调整是接下来才要做的事情。',
    );
    await daiya.say_and_wait(
      '……说得也是。我也明白训练不会立刻见效，但还是忍不住会觉得着急。',
    );
    await daiya.say_and_wait(
      '我不应该这么容易受到影响才对！我不会输给魔咒的！绝对！一定会破除魔咒给你看！',
    );
    await daiya.say_and_wait(
      '嗯！我心态调整好了！为了『菊花赏』，我会更加努力的！',
    );
    await era.printAndWait(
      `要在「菊花赏」取胜的决心已经大到甚至会让${daiya.sex}焦虑的程度了吧。`,
    );
    await era.printAndWait(
      '然而──似乎是有点用力过头了的感觉。希望这样不会导致坏的结果……',
    );
    era.println();
    wait = sys_like_chara(67, 0, 25);
  } else if (edu_weeks === 95 + 24) {
    if (check_aim_race(races, race_enum.takz_kin, 2)) {
      return false;
    }
    await print_event_name('那是唯一的光芒', daiya);
    const kita = get_chara_talk(68);
    await era.printAndWait([
      `${me.name} 和里见光钻一起，来观战北部玄驹出赛的 `,
      race_infos[race_enum.takz_kin].get_colored_name(),
      '。',
    ]);
    await daiya.say_and_wait([
      '可以依照计划顺利参加 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '，小北真的是很坚韧呢。',
    ]);
    await era.printAndWait([
      '其实这次 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 的粉丝票选结果，里见光钻也是有获得参赛资格的。',
    ]);
    await era.printAndWait([
      '只是受到 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ` 激战过后的影响，让${daiya.sex}累积了相当大的疲劳，保险起见，才选择放弃这次的参赛机会。`,
    ]);
    await era.printAndWait(
      `北部玄驹刚跟${daiya.sex}跑完一样的比赛，却仍旧能够继续参加这场比赛，真的是非常坚韧。──我本来是这么想的，但……`,
    );
    await era.printAndWait(
      '实况「痛苦啊！北部玄驹！前进不了、前进不了！发挥不出平常的力道！！」',
    );
    await era.printAndWait(
      '实况「──北部玄驹落败！！北部玄驹被淹没在后方选手群中！」',
    );
    await daiya.say_and_wait('……小北……');
    await kita.say_and_wait('………………唔。');
    await era.printAndWait(
      '观众A「喂，北部这是怎么了啊……今天的状态很不好吗……？」',
    );
    await era.printAndWait(
      '观众B「不知道为什么『宝冢纪念』会输耶。明明就没有什么会输的理由啊……」',
    );
    await era.printAndWait(
      `观众C「这才不是北部真正的实力！！${kita.sex}下次一定会赢的！没错吧？北部！」`,
    );

    await kita.say_and_wait('…………唔！');
    await daiya.say_and_wait('小北！！');
    await era.printAndWait(
      '北部玄驹今天的表现少了平时的利落感。没能正常发挥实力的原因应该是──',
    );
    await daiya.say_and_wait('呼、呼…………小北。');
    await kita.say_and_wait('观、观众们说的话……我真的没办法再继续听下去了……');
    await kita.say_and_wait('虽然是我自己表现得不好，这我都知道……');
    await kita.say_and_wait('……唔……可是…………');
    await kita.say_and_wait('是我让他们失望了────！！');
    await kita.say_and_wait('呜哇啊啊啊啊啊啊啊啊啊啊啊！');
    await daiya.say_and_wait('……小北……');
    await daiya.say_and_wait(
      '……小北，你今天根本不是在绝佳的状态下比赛的吧……？',
    );
    await kita.say_and_wait('嗯……呜……今天不知道为什么……很怪……觉得身体很重……');
    await kita.say_and_wait(
      '明知道应该要加快步调了，可是……呜，脚却……越来越出不了力气……！',
    );
    await kita.say_and_wait('……我明明已经很努力了……');
    await kita.say_and_wait(
      '……『宝冢纪念』……呜呜……得到粉丝票选第一名……我真的好开心……！',
    );
    await kita.say_and_wait(
      '想说一定不能辜负大家的期望……所以我真的真的非常努力了！！',
    );
    await kita.say_and_wait('为什么会是这样！？');
    await daiya.say_and_wait(
      '我想……会不会是因为身体其实还很疲劳？我之前也因为『天皇赏（春）』留下了疲劳。',
    );
    await era.printAndWait(
      `经过「天皇赏（春）』的激战，北部玄驹的身体也累积了疲劳。${kita.sex}本人却没有发现。`,
    );
    await era.printAndWait(
      `${kita.sex}因为不想辜负大家的期望，所以没有感觉到疲劳，但疲劳却也没有消失，反而是在${kita.sex}身体里慢慢累积。`,
    );
    await daiya.say_and_wait('你就是不小心努力过头了……这很像小北的作风。');
    await kita.say_and_wait('……我其实很疲劳……？怎么会……可是……');
    await kita.say_and_wait(
      '我居然会没发现自己身体的疲劳……居然因为这样辜负了大家的期望……',
    );
    await kita.say_and_wait('好不甘心……我真的好不甘心……！');
    await daiya.say_and_wait(
      '──没事的。小北不小心努力过头的这件事情，粉丝一定都能明白的。',
    );
    await daiya.say_and_wait(
      '毕竟他们都是一直守护着努力的小北，从小北身上获得鼓励的人呀。',
    );
    await kita.say_and_wait(
      '……可是，大家特地把票投给我，我却这样搞砸了……大家一定对我很失望的……',
    );
    await daiya.say_and_wait('……因为辜负了期望，所以就不会再支持你了吗……？');
    await kita.say_and_wait(
      '嗯……因为，原本不受瞩目的我会开始受到大家的注意，也是因为一直跑赢比赛的关系……',
    );
    await kita.say_and_wait('因为一直跑赢比赛，支持我的人才变多的！');
    await kita.say_and_wait(
      `要是没有跑赢比赛的话，我就只是个不被注意的普通赛${daiya.uma_sex_title}……`,
    );
    await kita.say_and_wait(
      '我也不像小钻有厉害的尾段加速能力，我没有那样的武器，就是一个只知道努力、很平凡的……',
    );
    await daiya.say_and_wait('这就是小北让人觉得了不起的地方呀。');
    await kita.say_and_wait('咦……？');
    await daiya.say_and_wait(
      '能够坚定不移地努力这点。我想大家不就是因为看到你这点，所以才想会要支持你的吧。',
    );
    await daiya.say_and_wait(
      '我觉得大家是因为看到小北这一路以来都非常努力的模样，才会对小北产生深厚感情的。',
    );
    await era.printAndWait(
      `刚观战完的男性观众A「就是因为北部玄驹每次都非常卖力地奔跑，才让我忍不住想为${kita.sex}加油的。真的就是非常坚定不移的模样。」`,
    );
    await era.printAndWait(
      `刚观战完的男性观众B「我懂我懂！因为${kita.sex}本身也没什么特别亮眼的地方，就是很普通、很接近我们的感觉。」`,
    );
    await era.printAndWait(
      `刚观战完的男性观众B「所以反而更希望${kita.sex}能够跑赢！就像是看到自己获得成就的感觉！」`,
    );
    await daiya.say_and_wait(
      '观众们说如果小北跑赢的话，就如同自己的事情一般开心喔。',
    );
    await daiya.say_and_wait(
      '『因为北部很努力，所以我也能继续努力。』……小北跟我不一样，是像这样得到大家支持的。',
    );
    await daiya.say_and_wait('有时候，我也会有点羡慕这样的小北呢。');
    await kita.say_and_wait('啊……');
    await era.printAndWait(
      '观众A「也就是『春季资深三冠』了吧！一定要拿下啊，北部！！」',
    );
    await era.printAndWait('观众A「北部──！一定要为去年雪耻啊！！」');
    await daiya.say_and_wait(
      '让观众感同身受地支持你，这真的是非常了不起的事情。',
    );
    await daiya.say_and_wait(
      '粉丝们不只是喜欢你实力坚强，而是真正地爱着你的本质。',
    );
    await daiya.say_and_wait('所以，没事的。');
    await kita.say_and_wait('小钻……');
    await daiya.say_and_wait(
      '虽然今天可能真的让大家失望了，但粉丝们一定还对小北充满『期待』的。',
    );
    await kita.say_and_wait('……期待……');
    await daiya.say_and_wait('我也很期待喔。');
    await kita.say_and_wait('…………');
    await daiya.say_and_wait('……因为我相信小北能做到的。');
    era.drawLine();
    await era.printAndWait(`从地下道出来后，里见光钻就像在思索着什么般。`);
    await daiya.say_and_wait('……训练员，你想要看见什么样的我呢？');
    era.printButton('「嗯……？什么意思？」', 1);
    await era.input();
    await era.printAndWait(`${me.name} 因为没听懂意思而反问${daiya.sex}。`);
    await daiya.say_and_wait(
      '我刚刚一直在想，如果大家是因为能从小北身上看到自己而支持她，那支持我的人又是因为什么呢？',
    );
    await daiya.say_and_wait(
      `身为『知名赛${daiya.uma_sex_title}』的贡献……小北${
        kita.sex
      }已经做到带给大家笑容的这个贡献了。`,
    );
    await daiya.say_and_wait('而我却连该做些什么都还没有想到……');
    await daiya.say_and_wait(
      `为了赛${daiya.uma_sex_title}界的发展，我所该做的事情……`,
    );
    await daiya.say_and_wait(
      `身为一个赛${daiya.uma_sex_title}，我的表现能带给大家的究竟是什么……`,
    );
    await era.printAndWait(
      `大家在里见光钻身上所追求的事情。${daiya.sex}的表现能带给粉丝什么梦想。`,
    );
    await era.printAndWait(
      `每一位「知名赛${daiya.uma_sex_title}」都各自能带给大家不一样的梦想。`,
    );
    era.printButton('「我从你身上能感受到『可能性』」', 1);
    await era.input();
    await daiya.say_and_wait('可能性……');
    await era.printAndWait(
      `深藏着坚定不可动摇意志的${daiya.sex}，给人一种甚至能颠覆不可能的能量。`,
    );
    await era.printAndWait(
      `成功克服了里见家长年所困魔咒的${daiya.sex}，给人一种，或许${daiya.sex}有可能做到任何事的感觉。`,
    );
    await daiya.say_and_wait('原来如此……谢谢你。');
    await daiya.say_and_wait('……我会再自己好好想一想的……');
    await era.printAndWait(
      `里见光钻又再次陷入沉思。为了不打扰${
        daiya.sex
      }的思绪，你们就这样静静地走向车站。`,
    );
    era.println();
    wait = sys_like_chara(67, 0, 25);
    wait = sys_like_chara(68, 0, 25) || wait;
  } else if (edu_weeks === 95 + 32) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:67:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_event_name('夏季集训（资深年）结束', daiya);
    const kita = get_chara_talk(68);
    const dictus = get_chara_talk(63);
    await daiya.say_and_wait('呼、呼、呼……！');
    await daiya.say_and_wait(
      '这……对脚的负担相当大呢……但步伐的确感觉更扎实了。',
    );
    await daiya.say_and_wait('我一定要练好这个跑法才行……！');
    await daiya.say_and_wait('再一趟……！');
    await daiya.say_and_wait('喝啊啊啊啊啊啊啊！！');
    await dictus.say_and_wait(
      `……训练员。虽然我这样可能有点多管闲事，但${daiya.sex}这样真的没问题吗……？`,
    );
    await dictus.say_and_wait(
      '有点用力过度，甚至是太靠蛮力的感觉。这样已经不像是里见的风格了。',
    );
    era.printButton('「是啊……」', 1);
    await era.input();
    await era.printAndWait(
      '为了之后和目白麦昆的「天皇赏（秋）』，以及考量到今后可能往国外发展，开始进行增强跑步力道的训练。',
    );
    await era.printAndWait(
      '然而，却发生了预料之外的状况。里见光钻的跑法开始变得混乱不堪。',
    );
    await era.printAndWait('已经演变成施力不平衡的跑法。');
    await dictus.say_and_wait(
      '也许是因为跑在沙滩上的关系吧，希望这个情况只是暂时的。',
    );
    await era.printAndWait(
      '希望真的是像生野狄杜斯所说的……总之还是暂时先观察一阵子看看吧。',
    );
    await era.printAndWait('不知不觉间，夏季集训来到了最后一天。');
    await daiya.say_and_wait('小北，回程的巴士我们坐一起吧♪');
    await kita.say_and_wait('我行李都已经拿去放好了！走吧！');
    await kita.say_and_wait('……嗯？小钻？');
    await daiya.say_and_wait('……呼…………呼…………');
    await kita.say_and_wait('睡着了啊……');
    await daiya.say_and_wait('唔……我要跑得更有力道……');
    await kita.say_and_wait('呵呵，集训时的小钻真的很努力。');
    await kita.say_and_wait('……晚安，小钻。');
    era.println();
    wait = sys_like_chara(67, 0, 25);
  } else if (edu_weeks === 95 + 44) {
    if (check_aim_race(races, race_enum.japa_cup, 2)) {
      return false;
    }
    await print_event_name('挑战、开拓', daiya);
    const kita = get_chara_talk(68);
    const teio = get_chara_talk(3);
    await era.printAndWait([
      `${me.name} 和里见光钻一起来观战 `,
      race_infos[race_enum.japa_cup].get_colored_name(),
      '。',
    ]);
    await kita.say_and_wait('帝王……！我真的要跟崇拜的帝王一起……！');
    await teio.say_and_wait(
      '你要是一直这样静不下心来的话，比赛的时候就要遭殃啰，小北。',
    );
    await teio.say_and_wait(
      `今天还有从国外邀请来参赛的赛${daiya.uma_sex_title}。是一场充满不确定因素的比赛……`,
    );
    await teio.say_and_wait('但无论对手是谁，帝王大人我都会击溃她们的！！');
    await kita.say_and_wait('我不会被击溃的！我……会跑赢帝王的！！');
    await daiya.say_and_wait('太好了！小北没有在气势上输掉呢！');
    await era.printAndWait('观众A「北部，加油喔！！要超越你的憧憬啊！」');
    await era.printAndWait(
      '观众B「超越『帝王』吧！我们的北部一定能做到的！！」',
    );
    await era.printAndWait(
      `观众C「让${daiya.couple_title}见识『帝王』的威严吧！东海帝王！！」`,
    );
    await daiya.say_and_wait('……两边的声援声势也算是旗鼓相当吧……');
    await era.printAndWait(
      `${daiya.couple_title}本就是拥有大量热情粉丝的两人。这次的「日本杯』也比往年更加热闹。`,
    );
    await daiya.say_and_wait('小北……加油──！');
    await era.printAndWait(
      '实况「哎呀，东海帝王！从这里一口气追了上来！已经紧紧跟在北部玄驹的后方了！」',
    );
    await daiya.say_and_wait(
      '咦……！？好快……！平时的帝王应该不会在这时候加速才对……！',
    );
    await era.printAndWait('东海帝王非常果敢地紧跟在北部玄驹的背后。');
    await era.printAndWait('这是东海帝王难得一见的进攻方式。');
    await teio.say_and_wait('喝啊啊啊啊啊啊啊！');
    await kita.say_and_wait('唔……啊啊啊啊啊啊啊！');
    await daiya.say_and_wait('小北也跟着加速了……不，不对。这是……！');
    await era.printAndWait(
      '北部玄驹在东海帝王的施压下，虽然一度加快了步调，却又慢慢地调整回原本的节奏。',
    );
    await era.printAndWait('东海帝王和北部玄驹之间，展开了非常激烈的攻防战。');
    await daiya.say_and_wait(
      `小北和帝王，${kita.couple_title}明明都是参加过『日本杯』拥有经历优势的……`,
    );
    await daiya.say_and_wait(
      '却没有局限于专注自己的跑法，反而是积极展开攻势……！',
    );
    await daiya.say_and_wait('……这样的状况如果换作是我……');
    await era.printAndWait(
      '里见光钻看着比赛的进展，似乎开始自己模拟后续可能会发生的状况。',
    );
    await era.printAndWait(
      '实况「东海帝王不停加速！北部玄驹有办法领先到最后吗？还是会被东海帝王反超吗──」',
    );
    await era.printAndWait('观众「哇啊啊啊啊啊啊啊啊啊！」');
    await kita.say_and_wait(
      '吓死我了……！没想到帝王居然会那么紧迫盯人地展开攻势……',
    );
    await teio.say_and_wait('你说什么啊，要是太保守的话，立刻就输掉比赛了！');
    await teio.say_and_wait(
      '我无时无刻都不会忘记挑战的心。为的是要更上一层楼！',
    );
    await teio.say_and_wait(
      '所以『有马纪念』我也一样会以挑战者的身份，挑战小钻跟小北的！',
    );

    await teio.say_and_wait('做好觉悟吧！！');
    await daiya.say_and_wait('──唔！是！！');
    await kita.say_and_wait('好！！我一定会用心迎战的！');
    await daiya.say_and_wait(
      `无时无刻不忘挑战的心……这就是帝王${
        teio.sex
      }身为『知名赛${daiya.uma_sex_title}』的做法……`,
    );
    await daiya.say_and_wait(
      '麦昆是接受挑战的身份，帝王则是挑战者的身份。',
      true,
    );
    await daiya.say_and_wait('那我……', true);
    await daiya.say_and_wait(
      '里见家首次的G1胜利……挑战魔咒、破除魔咒、赢得胜利。',
      true,
    );
    await daiya.say_and_wait(
      '追上小北，在梦寐以求的闪耀系列赛的舞台进行比赛。',
      true,
    );
    await daiya.say_and_wait('最适合我的做法是……！', true);
    await daiya.say_and_wait('……训练员。');
    await era.printAndWait(
      '一阵沉默过后，开口的里见光钻露出了下定决心的表情。',
    );
    await daiya.say_and_wait('我决定今后也要不停地挑战下去。');
    era.printButton('「不停地挑战……？」', 1);
    await era.input();
    await daiya.say_and_wait(
      '是的。一直以来我都在挑战各种事情，像是阻挠里见家的魔咒，还有挑战小北。',
    );
    await daiya.say_and_wait(
      `所以，我想我身为一个『知名赛${daiya.uma_sex_title}』，继续挑战各种事物，是不是就是最适合我的做法呢。`,
    );
    await daiya.say_and_wait(
      '就像我挑战麦昆和帝王，在里见家的历史上开启一个新的篇章一样。',
    );
    await daiya.say_and_wait(
      `我想要挑战各种事物，为里见家和赛${daiya.uma_sex_title}界开拓新的历史。`,
    );
    await daiya.say_and_wait(
      '当我这么一想的同时，我才再次发现到，我想要挑战国外的比赛这件事。',
    );
    await daiya.say_and_wait(
      '不单只是为了让大家感受到可能性，而是为了实现我自己的心愿。',
    );
    await daiya.say_and_wait(
      `想要在历史悠久的国外竞赛中取得胜利，把里见的名字刻划在赛${daiya.uma_sex_title}界的历史中。`,
    );
    await daiya.say_and_wait(
      `然后，为里见家和日本赛${daiya.uma_sex_title}开拓新的历史──`,
    );
    await daiya.say_and_wait(
      `我想，这就是我能为赛${daiya.uma_sex_title}界所作的贡献吧。`,
    );
    era.printButton('「你找到自己的答案了呢」', 1);
    await era.input();
    await daiya.say_and_wait('是的！');
    await daiya.say_and_wait(
      `身为『知名赛${daiya.uma_sex_title}』的里见光钻所该有的模样……我已经确定自己的目标了。`,
    );
    await daiya.say_and_wait(
      `我要在『有马纪念』获胜，正式加入『知名赛${daiya.uma_sex_title}』的行列！`,
    );
    era.println();
    wait = sys_like_chara(67, 0, 25);
  } else if (edu_weeks === 95 + 48) {
    if (
      !check_aim_race(races, race_enum.tenn_sho, 2, 1) ||
      !check_aim_race(races, race_enum.japa_cup, 2, 1) ||
      !check_aim_race(races, race_enum.arim_kin, 2, 1)
    ) {
      return false;
    }
    await print_event_name('跟着憧憬一起', daiya);
    const mcqueen = get_chara_talk(13);
    await era.printAndWait([
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '、',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '，以及',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '。',
    ]);
    await era.printAndWait(
      '里见光钻全数赢得了胜利，顺利达成了「秋季资深三冠』！',
    );
    await daiya.say_and_wait('──寄出。这样就全都回信完了吧。');
    era.printButton('「感觉会是一场盛大的活动呢」', 1);
    await era.input();
    await era.printAndWait(
      '据说里见集团的相关设施准备要举办里见光钻的「秋季资深三冠纪念活动』。',
    );
    await daiya.say_and_wait(
      '是的。我的『秋季资深三冠』纪念活动──我刚才就是在回信告诉大家我也会尽全力协助举办。',
    );
    await daiya.say_and_wait(
      '应该今天就会在咖啡厅推出『秋季资深三冠圣代』了吧。所以我打算先过去打声招呼。',
    );
    await daiya.say_and_wait('如果训练员刚好有空的话，要不要一起去呢？');
    era.printButton('「我跟你一起去吧！」', 1);
    await era.input();
    await daiya.say_and_wait('嘿嘿嘿，太好了♪那我们就出发吧。');
    await mcqueen.say_and_wait('哎呀，里见。我正好要去找你呢。');
    await daiya.say_and_wait('麦昆！找我有什么事吗？');
    await mcqueen.say_and_wait('嗯，我想说要帮你庆祝一下……你正在忙吗？');
    await daiya.say_and_wait('其实我们正在去里见集团咖啡厅的路上……');
    await daiya.say_and_wait(
      '啊！如果不嫌弃的话，麦昆要不要也一起去吃『秋季资深三冠圣代』呢？',
    );
    await mcqueen.say_and_wait('圣代！？');
    await daiya.say_and_wait(
      '没错，因为要推出纪念我达成『秋季资深三冠』的限定圣代，所以我打算去打个招呼顺便试吃。',
    );
    await mcqueen.say_and_wait(
      '限定的……！这、这样啊。既然这么难得，那我就跟你们一起去吧。',
    );
    await mcqueen.say_and_wait(
      '我再次郑重地……祝贺两位，恭喜你们达成『秋季资深三冠』。',
    );
    await mcqueen.say_and_wait(
      '这是击败了我和帝王，还有北部所赢得的『秋季资深三冠』。',
    );
    await mcqueen.say_and_wait(
      `不单只是光钻个人的成就，也算是里见家在赛${daiya.uma_sex_title}界所留下的辉煌成绩。`,
    );
    await mcqueen.say_and_wait('……你真的非常努力呢，光钻。');
    await daiya.say_and_wait('……！谢……谢谢你！！');
    await mcqueen.say_and_wait(
      '呵呵，虽然我是用前辈的姿态恭喜你，但其实我们的立场是一样的。',
    );
    await mcqueen.say_and_wait(
      `我们身为彼此的对手，且同样是背负家族名声的赛${daiya.uma_sex_title}。今后也要继续互相切磋琢磨喔。`,
    );
    await daiya.say_and_wait('好的！我会继续精进自己的！');
    await daiya.say_and_wait('虽然我还有很多事情需要继续向麦昆学习，但……');
    await daiya.say_and_wait('我也应该要自己多加尝试，并继续摸索才对呢。');
    await daiya.say_and_wait('我也会把身为里见家代表的自觉深深烙印在心中的！');
    await mcqueen.say_and_wait(
      '是啊。不过，有什么烦恼的时候就来找我商量吧。毕竟我们也是同学嘛。',
    );
    await daiya.say_and_wait('哇……麦昆……！');
    await daiya.say_and_wait('你真的好棒喔……是我永远崇拜的人……！');
    await mcqueen.say_and_wait(
      '呵呵，我深感光荣喔。但今后也将会出现，崇拜着里见的人吧。',
    );
    await mcqueen.say_and_wait('再来就换你做一个好的前辈了。');
    await daiya.say_and_wait(
      '好的。希望我可以像麦昆当初帮助我那样，也成为别人的助力……',
    );
    await mcqueen.say_and_wait('你一定没问题的。对吧？训练员。');
    era.printButton('「是啊！一定没问题的！」', 1);
    await era.input();
    await daiya.say_and_wait('你们两位……谢谢你们！嘿嘿嘿，我好开心喔……♪');
    await daiya.say_and_wait(
      '啊，圣代都开始融化了！我们赶快吃吧！麦昆也请尽情享用吧。',
    );
    await era.printAndWait(
      '目白麦昆所说的话，对里见光钻来说是比什么都来得更值得开心的祝贺！',
    );
    era.println();
    wait = sys_like_chara(67, 0, 25);
  }
  wait && (await era.waitAnyKey());
};
