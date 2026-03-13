const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const {
  japa_cup_common,
  takz_kin_common,
} = require('#/event/edu/edu-events-67-1/snippets');
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
  let wait_flag = false;
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
    wait_flag = sys_like_chara(67, 0, 25);
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
    await takz_kin_common(daiya, me, kita);
    era.println();
    wait_flag = sys_like_chara(67, 0, 25);
    wait_flag = sys_like_chara(68, 0, 25) || wait_flag;
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
    wait_flag = sys_like_chara(67, 0, 25);
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
      `观众C「让${daiya.sex}们见识『帝王』的威严吧！东海帝王！！」`,
    );
    await daiya.say_and_wait('……两边的声援声势也算是旗鼓相当吧……');
    await era.printAndWait(
      `${daiya.sex}们本就是拥有大量热情粉丝的两人。这次的「日本杯』也比往年更加热闹。`,
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
      `小北和帝王，${kita.sex}们明明都是参加过『日本杯』拥有经历优势的……`,
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
    await japa_cup_common(daiya, me, kita, teio);
    era.println();
    wait_flag = sys_like_chara(67, 0, 25);
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
    wait_flag = sys_like_chara(67, 0, 25);
  }
  wait_flag && (await era.waitAnyKey());
};
