const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');

const AgEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-19');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const check_aim_race = require('#/event/snippets/check-aim-race');
const { get_random_value } = require('#/utils/value-utils');

const chara_talk = new CharaTalk(19);

const me = get_chara_talk(0);

/** @type {Record<string,function(HookArg,Record<string,any>,EventObject):Promise<boolean|void>>} */
const handlers = {};

handlers[event_hooks.week_start] = async () => {
  const event_marks = new AgEduMarks(),
    chara58_talk = get_chara_talk(58),
    chara61_talk = get_chara_talk(61),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:19:育成回合计时');
  if (edu_weeks === 43) {
    await print_event_name(`观看英里冠军杯`, chara_talk);
    await era.printAndWait(
      `虽然数码目前还只是出道第一年，即使想要参加比赛，选择的空间也不多，但是对于其他${chara_talk.get_uma_sex_title()}而言，最近是最为忙碌的一段时间。`,
    );
    await era.printAndWait(`这次你和数码来观看的比赛是英里冠军杯。`);
    await era.printAndWait(
      `在这场比赛里，${
        chara_talk.name
      }的激推${chara_talk.get_uma_sex_title()}之一——圣王光环也会出赛。`,
    );
    await chara_talk.say_and_wait(`训练员！这边这边！`);
    await era.printAndWait(`抢到好位置的数码向你招手，你尽量挤了进去。`);
    await chara_talk.say_and_wait(`快要开始了哦！是圣王哦！`);
    await era.printAndWait(`然后……`);
    await say_by_passer_by(
      `解说`,
      `接着之后的是圣王光环！从外道赶上，圣王光环是第二名！`,
    );
    await era.printAndWait(
      `解说「接着之后的是圣王光环！从外道赶上，圣王光环是第二名！」`,
    );
    await era.printAndWait(`第二名啊，对于圣王光环最近的战绩来说很不错了。`);
    await chara61_talk.say_and_wait(
      `全国各地的我的粉丝啊，虽然没能获胜我很遗憾，但是……`,
    );
    await chara61_talk.say_and_wait(
      `我必将突破束缚，接下来也将继续走在短距离、英里赛道路上，这就是king我新的路线哟！哦！吼吼吼！`,
    );
    await chara_talk.say_and_wait(
      `唔噢噢噢哦哦……真是，万分的感动！敢于选择新路线，这是需要多大的勇气，多大的觉悟！`,
    );
    await era.printAndWait(`数码感动得痛哭流涕，跟你说起圣王光环的经历。`);
    await era.printAndWait(
      `圣王光环原本是想要证明自己的才能，所以一直专注于经典赛事的${chara_talk.get_uma_sex_title()}，但是今年${
        chara_talk.sex
      }改变了路线，重新定下了目标。`,
    );
    await chara_talk.say_and_wait(
      `无论是哪一种路线，都是可以证明自己的强大的啊！`,
    );
    await era.printAndWait(
      `在数码出道后，数码的想法跟之前也有了很大的区别，更能从一个选手的角度去体会赛场上赛场后的种种了。`,
    );
    await era.printAndWait(
      `正因为期待着圣王的努力能得到回报，数码才会来看现场比赛，在圣王终于苦尽甘来的时候，${chara_talk.sex}哭得比在场的每个人都响。`,
    );
    await era.printAndWait(`\n在回去的路上——`);
    await era.printAndWait(
      `学校旁边的小河边，发现了一个低头奔跑在河边泥地的${chara_talk.get_uma_sex_title()}。`,
    );
    await chara_talk.say_and_wait(`哦哦哦！是名将怒涛啊……`);
    await era.printAndWait(`名将怒涛看起来有点失落，训练还在这里训练……`);
    await era.printAndWait(`嗯……名将怒涛是不是一直都是这样来着？`);
    await era.printAndWait(
      `怒涛最近成绩不佳，作为训练员的你很清楚，${chara_talk.sex}还未到本格化时期，但是${chara_talk.sex}本身好像并没有察觉到。`,
    );
    await chara_talk.say_and_wait(
      `本格化……如果自己不知道的话，果然还是比较痛苦……`,
    );
    await chara_talk.say_and_wait(
      `以前我大概只能看到怒涛的努力吧，但是现在我……`,
    );
    await chara_talk.say_and_wait(`至少，知道这件事能安心很多啊……`);
    await me.say_and_wait(`怎么了，不打算上去对${chara_talk.sex}说一下吗？`);
    await chara_talk.say_and_wait(
      `诶？喂喂喂……我可是一介粉丝啊？粉丝也不能向偶像提意见的啊！会被经纪人请出去的！`,
    );
    await era.printAndWait(`数码很想要帮忙，却又觉得自己是不是太过逾越了。`);
    await chara_talk.say_and_wait(
      `用一个现实点的例子就是，就好像你看到一间经营不善的面馆，然后安慰店主只是时机未到吗？！`,
    );
    await me.say_and_wait(
      `不不不，这个的确是有根据的……再说了，数码，你还只是把自己当作粉丝吗？`,
    );
    await era.printAndWait(
      `你提醒数码，数码已经不再是粉丝，也是作为一名选手站在了赛场上。`,
    );
    await chara_talk.say_and_wait(
      `啊，嗯，倒也……虽然我的确出了道，但是怒涛和我之间的横沟可是跨越不了的啊……`,
    );
    await me.say_and_wait(
      `你与${chara_talk.sex}，与${chara_talk.sex}们的差距，比你想象中的小哦！`,
    );
    await me.say_and_wait(
      `正是你每日的观察，才能看到怒涛所面临的问题，但也就是因此，你把自己置身事外了，觉得自己并不是其中的一员。`,
    );
    await era.printAndWait(`数码低下了头。`);
    await chara_talk.say_and_wait(
      `唔唔……虽然是这样，但是你现在要我上去跟偶像交流，我还是有点……`,
    );
    await chara_talk.say_and_wait(`总感觉，自己有了不得了的想法……`);
    await era.printAndWait(`数码最终还是决定了，想要帮助名将怒涛。`);
    await era.printAndWait(
      `${chara_talk.sex}跃下岸堤的栅栏，一个滑坡，直接出现在了怒涛面前，这种登场方式，真的是厉害啊。`,
    );
    await chara_talk.say_and_wait(`那那那那那个！怒涛桑！稍微说一下可以吗？`);
    await chara58_talk.say_and_wait(`诶诶诶诶，什什什么？`);
    await chara_talk.say_and_wait(`本格化，知道吗！`);
    await chara58_talk.say_and_wait(`诶诶诶？那是什么？`);
    await chara_talk.say_and_wait(`所谓本格化，就是……`);
    await era.printAndWait(`就在岸边看着，应该问题不大吧？`);
    await chara_talk.say_and_wait(`还有就是本格化的时间，大概都在……`);
    await era.printAndWait(`嗯，讲得还挺详细的嘛。`);
    await chara_talk.say_and_wait(
      `对了对了，要是想要趁这本格化时间要锻炼的话，要注意脚步的……`,
    );
    await era.printAndWait(`哦哦，是连训练员资格考试都没过多涉及的内容。`);
    await chara_talk.say_and_wait(
      `……在本格化时期前的一段时间内，并不是说锻炼是白费的，`,
    );
    await chara_talk.say_and_wait(
      `如果此时能加紧锻炼大腿肌的话，能在本格化期间瞬间哗地一下成长噢！`,
    );
    await era.printAndWait(
      `不对，这已经都涉及到最近的研究了吧，你记得这个内容还是前不久刊登在《训练员月刊》里面的研究……`,
    );
    await era.printAndWait(`\n在后面回到训练室时……`);
    await chara_talk.say_and_wait(
      `哇哇哇哇！搞砸了啊！是现实中，在眼睛里成像的怒涛桑……一不小心就……`,
    );
    await era.printAndWait(
      `事实上名将怒涛虽然后面听得云里雾里的，但是在岸边都能看得到，${chara_talk.sex}已经恢复了元气。`,
    );
    await era.printAndWait(`数码肯定也是知道的。`);
    await chara_talk.say_and_wait(
      `但是，怒涛${chara_talk.sex}不是觉得收获挺大的吗？`,
    );
    await era.printAndWait(`……数码只是捂着胸口。`);
    await era.printAndWait(`第一次与推的偶像这样对话，想必数码压力很大。`);
    await era.printAndWait(
      `……不过数码那连环机关枪的语速，${chara_talk.sex}该不会事实上是挺不妙的人吧？`,
    );
  } else if (edu_weeks === 47 + 1) {
    await print_event_name(`第二年新年抱负`, chara_talk);
    await era.printAndWait(
      `新的一年，${
        chara_talk.name
      }迎来了对于${chara_talk.get_uma_sex_title()}来说至关重要的经典年。`,
    );
    await era.printAndWait(
      `虽然${
        chara_talk.sex
      }好像还停留在对于可以切身接近经典年${chara_talk.get_uma_sex_title()}而激动。`,
    );
    await chara_talk.say_and_wait(`新年快乐！训练员！`);
    await era.printAndWait(`数码简单地对你道了新年。`);
    await era.printAndWait('一大早就来到了训练室，真是勤勉啊。');
    await chara_talk.say_and_wait(`年底过得怎么样呢？有在cm上买到几本好书吗？`);
    await me.say_and_wait(`诶？cm？书？`);
    await chara_talk.say_and_wait(
      `啊……嗯，如果没有的话就忘记我说的话吧，只是数码的一些胡言乱语罢了。`,
    );
    await chara_talk.say_and_wait(
      `不过！今年的比赛！可就有得聊了！经典年的比赛可是多如繁星啊！`,
    );
    await era.printAndWait(
      '的确，数码可以参加经典级比赛了，选择相比去年就多得多了，大多数的G1比赛，都是要到经典年才能参加。',
    );
    await chara_talk.say_and_wait(
      `啊，突然想起了去年，我还是太过得意忘形了，似乎都忘记了自己的初心，说好的要当合格的${chara_talk.get_uma_sex_title()}粉丝呢？！`,
    );
    await era.printAndWait(
      `数码似乎是对上次${chara_talk.sex}与怒涛的谈话仍有郁结……`,
    );
    era.println();
    await chara_talk.say_and_wait(
      `\n所以说！今年，我要再次回归起点！再次成为粉丝！以其为原则！`,
    );
    await era.printAndWait(
      `不过目前来看，也还没有办法，数码想要认识到的话，还得……`,
    );
    await chara_talk.say_and_wait(
      `训练员！你可以给我一些建议吗！应该如何应援？`,
    );
    await era.printAndWait(`\n你的选择是：`);
    era.printButton(`侍奉${chara_talk.get_uma_sex_title()}酱`, 1);
    era.printButton(`读书`, 2);
    era.printButton(`从模仿中学习`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await me.say_and_wait(
        `像平时那样，侍奉${chara_talk.get_uma_sex_title()}酱不挺不错吗？`,
      );
      await chara_talk.say_and_wait(
        `哦哦哦！很好的建议呢，说到这个，感觉最近无论是比赛什么的还是交流什么的一直都有在冒犯${chara_talk.get_uma_sex_title()}酱呢……`,
      );
      await chara_talk.say_and_wait(
        `所以！的确是个回归起点的时候！是时候把圣地净化一遍了！`,
      );
      await era.printAndWait(`净化？！`);
      await era.printAndWait(`原来只是将赛场打理一遍，还好还好。`);
      await era.printAndWait(
        `打理后恰好是大和赤骥第一个到达草地，看着大和在草地上爽快地奔跑，数码觉得自己也充满了干劲。`,
      );
      get_attr_and_print_in_event(19, [10, 0, 0, 0, 0], 0);
    } else if (ret === 2) {
      await me.say_and_wait(`既然这样的话，读一下你说的买到的书如何？`);
      await chara_talk.say_and_wait(
        `诶！这个确实……虽然都挺短的，再次回顾一下也无妨！`,
      );
      await chara_talk.say_and_wait(
        `摄入各种各样${chara_talk.get_uma_sex_title()}酱的能量，这样在新的一年才有能量持续冲刺啊！`,
      );
      await era.printAndWait(
        `就这样，数码今天回到了宿舍看书，等再次看到数码带着满脸沉浸的表情，你知道${chara_talk.sex}休息得很不错。`,
      );
      sys_change_attr_and_print(19, '体力', 200);
    } else {
      await me.say_and_wait(
        `模仿一下其他${chara_talk.get_uma_sex_title()}，从中学得技能如何？`,
      );
      await chara_talk.say_and_wait(
        `的确！模仿推们学习技能！这正是吾辈的任务所在！`,
      );
      await chara_talk.say_and_wait(`哦哦哦！哦？`);
      await era.printAndWait(
        `来到训练场上的看台，回忆之前在台上观察着${chara_talk.get_uma_sex_title()}的技能……`,
      );
      await chara_talk.say_and_wait(`接下来请看！帝王舞步！`);
      await era.printAndWait(
        `哦哦哦，是著名的那个帝王舞步！通过高幅度高抬腿的动作来达到增长步幅的技能！`,
      );
      await era.printAndWait(`哦哦哦，本尊貌似也到了。`);
      await era.printAndWait(`东海帝王？何时到的？`);
      await chara_talk.say_and_wait(`呜哇哇哇！我不是故意要冒犯的！`);
      await era.printAndWait(`数码！凋零！`);
      await era.printAndWait(`不过之后数码倒是从帝王那里真的学到了技巧。`);
      get_attr_and_print_in_event(19, [0, 0, 0, 0, 0], 20);
    }
  } else if (edu_weeks === 47 + 24) {
    await print_event_name(`宝冢纪念`, chara_talk);
    await era.printAndWait(`这天，就是好歌剧和名将怒涛的初次对决。`);
    await chara_talk.say_and_wait(
      `啊啊，无法避免的一天，果然还是来了！大脑，已经停不下来了！`,
    );
    await chara_talk.say_and_wait(`怎么，要全身插满应援棒去应援吗？！`);
    await chara_talk.say_and_wait(`呜哇哇哇！我不是故意要冒犯的！`);
    era.printButton(`不不，这样会被保安请出去的吧。`, 1);
    await era.input();
    await era.printAndWait('就这样来到了阪神赛场，好歌剧和名将怒涛的激斗啊…');
    await era.printAndWait(
      '好歌剧的实力你比较清楚，但名将怒涛居然也能到这种地步……',
    );
    await era.printAndWait(
      `最后甚至还是并列冲线，好歌剧仅仅略胜名将怒涛一筹。`,
    );
    await era.printAndWait(
      `是什么原因，仅仅的本格化也暂且带不来这心境的转化……`,
    );
    await era.printAndWait(`是数码让${chara_talk.sex}变成这样的吗……`);
    await era.printAndWait(
      `该说数码真是厉害吗……瞄了一眼数码，诶，${chara_talk.sex}果然还是着迷地摇头晃脑。`,
    );
    await chara_talk.say_and_wait(`诶哇哇哇哇……`);
    await chara_talk.say_and_wait(`唔姆……`);
    await chara_talk.say_and_wait(`刚才，那是什么……那个光辉？`);
    await chara_talk.say_and_wait(`我甚至已经……在刚才都脱离了尊这一念头……`);
    await chara_talk.say_and_wait(
      `是因为是歌剧和怒涛吗……是因为${chara_talk.sex}们是特别的吗？`,
    );
    await era.printAndWait(
      `就这样，即使数码仍未能明白其中本意，接力棒还是递给了数码，接下来就是数码在日本泥地达比的舞台了。`,
    );
  } else if (edu_weeks === 47 + 29) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      await print_event_name('夏季合宿', chara_talk);
      await era.printAndWait(
        `夏合宿！是一年中最重要的活动！这一段时间是${chara_talk.get_uma_sex_title()}们进步的大好时机！作为训练员的你，自然也特别重视这次活动。`,
      );
      await era.printAndWait(
        `看着数码笑到眼睛眯起来的样子，看起来${chara_talk.sex}也十分期待，干劲满满了。`,
      );
      await chara_talk.say_and_wait(
        `夏天……没错，说到夏天就想到沙滩，想到游戏，想到活动……`,
      );
      await chara_talk.say_and_wait(`然后说到夏天最大的活动，就是……comic……`);
      await me.say_and_wait(`祭典吗？`);
      await chara_talk.say_and_wait(`诶！`);
      await era.printAndWait(`突然被你打断的数码变得支支吾吾了起来。`);
      await chara_talk.say_and_wait(`啊……突然想起还有，日本泥地达比呢！`);
      await era.printAndWait(
        `哦哦哦，的确，这次夏合宿期间，数码还要去参加一次比赛。`,
      );
      await chara_talk.say_and_wait(
        `现在不是往年一样，作为应援一方的，要行动起来才行了呢。`,
      );
      await chara_talk.say_and_wait(
        `加油，数码碳，这个夏天，就是要确认${chara_talk.get_uma_sex_title()}酱们尊能源的根源，还有……`,
      );
      await chara_talk.say_and_wait(`在空闲时间把本画完！`);
      await era.printAndWait(
        `气势十足，看着数码这么精神，你的担心已经消失了。`,
      );
      await era.printAndWait(
        `看来数码已经把时间都分配好了呢，想必这次的夏合宿会相当忙碌吧。`,
      );
    }
  } else if (edu_weeks === 47 + 30) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      await print_event_name('夏季合宿', chara_talk);
      await chara_talk.say_and_wait(
        `库哇……果然还是被胜利冲晕了头脑，我居然，我居然想要成为这神圣的存在……`,
      );
      await era.printAndWait(
        `该说是三分钟热度还是什么的吗……数码又有点开始打退堂鼓了，不不不，应该只是说说而已吧……`,
      );
      await era.printAndWait(
        `本来在沙滩上训练的数码，突然停下来跟你说了这番话。`,
      );
      await era.printAndWait(
        `明明，当时正在热头时，还预定了英里冠军杯的比赛的……`,
      );
      await me.say_and_wait(
        `诶呀，数码啊，在这么长的时间我也逐渐明白了你的个性，但是你也……`,
      );
      await chara_talk.say_and_wait(
        `呜呜呜，我明白的啊！正因为我明白的，所以我才如此……`,
      );
      await era.printAndWait(`感觉像是打起皮球来了……`);
      await era.printAndWait(
        `正看着数码还在小折腾，无意间看到了圣王光环在沙滩那边站着看着海。`,
      );
      await era.printAndWait(
        `圣王光环，数码在以前就十分推的${chara_talk.get_uma_sex_title()}，当时的英里冠军杯数码和你还一起去看了来着。`,
      );
      await era.printAndWait(`最近${chara_talk.sex}的战绩，也逐渐有点……微妙。`);
      await era.printAndWait(
        `数码也注意到了圣王，身为粉丝，${chara_talk.sex}的情绪也有点低落。`,
      );
      await me.say_and_wait(`要不，帮圣王打一下气如何？`);
      await chara_talk.say_and_wait(
        `嗯……身为粉丝，帮助偶像打气也是一个道理……好！决定了，先把手头的原稿放下！`,
      );
      await me.say_and_wait(`原稿？什么原稿？`);
      await chara_talk.say_and_wait(`本子的原稿。`);
      await me.say_and_wait(`什么的本子？`);
      await chara_talk.say_and_wait(`就是普通同人志的本子啊。`);
      await era.printAndWait(`听不懂了……`);
      await chara_talk.say_and_wait(
        `我本来是准备想要在最近的漫展上销售圣王的同人志，向大家宣传圣王的好的……`,
      );
      await chara61_talk.say_as_unknown_and_wait(
        `圣王的同人志吗，这种事情本人都没听说过啊。`,
      );
      await chara_talk.say_and_wait(
        `啊，这种让本人知道可是禁忌哦，当然不能让圣王……咻哇！圣王桑？！`,
      );
      await era.printAndWait(`主人公从同人志里跑出来了。`);
      await chara_talk.say_and_wait(`刚刚都是开玩笑的！都是我无聊的妄想罢了！`);
      await chara61_talk.say_and_wait(
        `不过，谢谢了，也多亏了你，啊哈哈哈哈！King的魅力也是一流啊！`,
      );
      await chara61_talk.say_and_wait(
        `事实上，我想问的是，数码，你是要出赛今年的『英里冠军杯』吧？`,
      );
      await chara_talk.say_and_wait(
        `诶？是的！因为被您在去年的比赛所感动，所以我也想要尽可能接近您……但是……为什么圣王桑你……`,
      );
      await chara61_talk.say_and_wait(`因为我也会出赛。`);
      await era.printAndWait(
        `圣王光环在英里冠军杯也会出场，并且还会和数码同台竞技。`,
      );
      await chara_talk.say_and_wait(`！`);
      await era.printAndWait(`数码的脸上突然蒙上了一层阴影。`);
      await era.printAndWait(
        `数码明白，在长时间的职业生涯里，圣王光环已经从巅峰期逐渐下滑到了低谷。`,
      );
      await chara_talk.say_and_wait(
        `那个，圣王桑……虽然我说这话有点厚颜无耻……我，会为你应援的。`,
      );
      await chara_talk.say_and_wait(
        `那个……就算是对手，想推的心情也是一样强烈的……`,
      );
      await era.printAndWait(
        `面对此种情况，数码心情复杂，跟偶像同台竞技，本来就是梦寐以求的，但是，如果面对的偶像早已开始衰退呢？`,
      );
      await me.say_and_wait(`数码！`);
      await chara_talk.say_and_wait(`！`);
      await era.printAndWait(`数码略有无辜地看向了你。`);
      await me.say_and_wait(
        `数码，你应该明白的才对，在赛场上的${chara_talk.get_uma_sex_title()}——`,
      );
      await chara61_talk.say_and_wait(
        `训练员，很抱歉打断你，数码，我有一个提案。`,
      );
      await chara61_talk.say_and_wait(
        `数码，在这个合宿结束的时候，我们一起来一场比赛吧。`,
      );
      await chara_talk.say_and_wait(`哈？！唔噢？跟偶像一起什么的，做不到的……`);
      await me.say_and_wait(`圣王……十分感谢你。`);
      await chara61_talk.say_and_wait(
        `没问题，作为一流的${chara_talk.get_uma_sex_title()}自然要回馈一流的粉丝——啊哈哈哈哈！`,
      );
      await era.printAndWait(
        `圣王光环看出了数码的困惑，${chara_talk.sex}邀请数码一起跑步。`,
      );
      await era.printAndWait(
        `于是，在接下来仅剩的夏合宿中，数码将要在最后和圣王一同进行一场模拟比赛。`,
      );
    } else if (edu_weeks === 47 + 37) {
      await print_event_name('一流的条件', chara_talk);
      await era.printAndWait(
        `在数码向着英里冠军杯前进的同时，圣王光环也在同时做出努力。`,
      );
      await era.printAndWait(
        `速度锦标赛，短距离G1比赛，理论上应该是圣王的优势……`,
      );
      await era.printAndWait(`——第七名`);
      await era.printAndWait(`连入着都没有。`);
      await era.printAndWait(`赛后不久，数码就来到圣王面前。`);
      await chara61_talk.say_and_wait(
        `你来看了呢，数码桑，不要管我——本来是想这样说的，但既然是你，就给你和我待在一起的权利吧。`,
      );
      await chara_talk.say_and_wait(
        `那个……虽然最终没能到达，但圣王桑的美妙，再次让我钦佩不已。`,
      );
      await chara_talk.say_and_wait(`锐利的眼神，散发的品格，华丽的过弯！`);
      await chara61_talk.say_and_wait(`……仅此而已吗？`);
      await chara_talk.say_and_wait(`诶？`);
      await chara61_talk.say_and_wait(`觉得我是一流的理由，仅此而已吗？`);
      await era.printAndWait(`数码接着再说了很多，但是……`);
      await chara61_talk.say_and_wait(
        `……为了成为一流，有一件比什么都重要的东西……`,
      );
      await era.printAndWait(`赛后的赛场，人都差不多走光了。`);
      await era.printAndWait(`圣王，走到了赛道的起跑线，做出了起跑姿势。`);
      await chara61_talk.say_and_wait(`机会难得，接下来要和我一起跑吗？`);
      era.drawLine();
      await era.printAndWait(`毕竟是刚刚才比赛后，能显然看出圣王的乏力。`);
      await chara61_talk.say_and_wait(`哈……哈……咳……呵呵呵……真是，难看啊。`);
      await chara61_talk.say_and_wait(
        `数码，现在的我怎么样，无论是锐利的眼神，品格还是华丽，全都没有了。`,
      );
      await chara61_talk.say_and_wait(`没有留下任何一流证据的我，还是一流吗？`);
      await chara_talk.say_and_wait(`这……那是……`);
      await chara61_talk.say_and_wait(`不过，即使是这样的我——`);
      await era.printAndWait(
        `在比赛中看到的锐利的眼神，再一次出现在了现在的圣王身上。`,
      );
      await chara61_talk.say_and_wait(`再比一场的话，会怎么样？`);
      await chara61_talk.say_and_wait(`如果不行，明天再比一场，会怎么样？`);
      await chara61_talk.say_and_wait(
        `就算明天失败了，后天再来一次，又会怎样？`,
      );
      await chara61_talk.say_and_wait(
        `数码！你看看，现在的我，真的什么都不剩了？`,
      );
      await chara_talk.say_and_wait(`！`);
      await chara_talk.say_and_wait(
        `还有留下来的！就像开拓的罗盘，万年的寒冰，不会改变！`,
      );
      await chara61_talk.say_and_wait(
        `——不屈的执念。就算被打垮也不会屈服的心。`,
      );
      await chara61_talk.say_and_wait(`只有这一份，谁都无法从我这里拿走。`);
      await chara61_talk.say_and_wait(
        `这正是，我这个King，身为永远的一流的原因哟！`,
      );
      await era.printAndWait(
        `即便实力衰退，但是，圣王光环那「一流」的精神，不屈的意志，从来没有衰减。`,
      );
      await chara_talk.say_and_wait(`哦哦哦……圣王……！`);
      await era.printAndWait(`即便遍体鳞伤，圣王的姿态还是如此美丽。`);
      await chara61_talk.say_and_wait(
        `我向你做出约定，我在『英里冠军杯』会回到之前的状态！`,
      );
      await chara61_talk.say_and_wait(
        `如果要同情我，不使出全力的话，也太过于失礼了。`,
      );
      await chara_talk.say_and_wait(`是，我明白了。一流的碎片……我收下了。`);
      await chara_talk.say_and_wait(`不过，在这个时候，请允许我说一句话……`);
      await chara_talk.say_and_wait(`您果然是……女神……`);
    } else if (edu_weeks === 95 + 6) {
      await print_event_name('情人节', chara_talk);
      await era.printAndWait(
        `一大早到达训练室的数码，其所带的是——一叠巧克力。`,
      );
      await era.printAndWait(`为什么要用叠作为量词？！`);
      await chara_talk.say_and_wait(
        `这是我的心血之作！我将我所能想到的各位${chara_talk.get_uma_sex_title()}的特征，都融入了这份巧克力！`,
      );
      await era.printAndWait(
        `看着这一盒盒巧克力叠成的高塔，难道，里面的每颗巧克力，都是不同的吗？！`,
      );
      await chara_talk.say_and_wait(`那么，来祭祀吧！`);
      await era.printAndWait(`什么，哪里来的神龛？！`);
      await era.printAndWait(
        `数码把巧克力全摆在神龛前，先是念念有词，接着还带着一些奇怪的搓手动作。`,
      );
      await chara_talk.say_and_wait(`好了，可以了！三女神应该收到了我的请求。`);
      await era.printAndWait(`既然是拜的三女神，为什么不去庭院呢？！`);
      await chara_talk.say_and_wait(`训练员，接下来就一起吃吧，可不能浪费哦。`);
      era.printButton(`居然是能吃的吗？！`, 1);
      await era.input();
      await chara_talk.say_and_wait(
        `当然啦，只要有这份心意就可以了，而且浪费食物也是一种亵渎啊！`,
      );
      await chara_talk.say_and_wait(`接下来就一边吃着一边谈吧！`);
      await chara_talk.say_and_wait(
        `呜呜呜，我真是幸运啊，居然能遇到能一起讨论${chara_talk.get_uma_sex_title()}的同志……`,
      );
      await chara_talk.say_and_wait(
        `来来来，训练员，聊一下最近最推的${chara_talk.get_uma_sex_title()}……是谁呀？`,
      );
      await era.printAndWait(`那还用问？`);
      era.printButton(`好，给你巧克力。`, 1);
      await era.input();
      await era.printAndWait(`从冰箱里，拿出巧克力……`);
      await chara_talk.say_and_wait(`哦哦哦，是我啊。`);
      await chara_talk.say_and_wait(`噫诶诶诶诶？不是，居然是巧克力？`);
      await chara_talk.say_and_wait(
        `这，这是何等的博爱？！居然，有人会想要推如此小众的${chara_talk.get_uma_sex_title()}？`,
      );
      await me.say_and_wait(
        `说什么呢，我可是你的训练员……还有，你居然觉得你很小众……吗？马推的粉丝数，不低的来吧？`,
      );
      await era.printAndWait(`被这么一说的数码，却突然变得支支吾吾了起来。`);
      await chara_talk.say_and_wait(
        `那是……事实上我的马推，在出道前，粉丝就不少来着，因为之前一直都有在做……同人志……`,
      );
      await era.printAndWait(
        `诶？好像的确是听说过，数码在出道前就在某些方面挺出名来着……`,
      );
      await chara_talk.say_and_wait(
        `不过！训练员的这种精神，这，才是宅中之鉴！如果是和你的话，哪怕十年，还是多久，感觉都可以一起过情人节！`,
      );
      await era.printAndWait(`和数码边说边聊，度过了一个吵闹的情人节。`);
      era.set('cflag:19:节日事件标记', 0);
    } else if (edu_weeks === 95 + 14) {
      await print_event_name('粉丝感谢祭', chara_talk);
      await chara_talk.say_and_wait(
        `数码，属于${chara_talk.name}的节日，终于来了！哇哇哇，看看这周围的景色，简直就是粉丝的天堂……`,
      );
      await era.printAndWait(
        `粉丝感谢祭呢……顾名思义，就是作为具有偶像属性的赛${chara_talk.get_uma_sex_title()}回馈应援粉丝的活动。`,
      );
      await era.printAndWait(`说是这么说，事实上感觉也有点像校园祭。`);
      await era.printAndWait(`不过，数码，今年所担当的角色，可不仅是粉丝啊！`);
      await me.say_and_wait(`事实上，数码，你在今天，可是被应援的一方哦！`);
      await chara_talk.say_and_wait(`库呀！`);
      await chara_talk.say_and_wait(`不不不，就我这种人……`);
      await era.printAndWait(
        `摆出一脸「不可能」表情的数码，要说是以前的话那的确如此……`,
      );
      await me.say_and_wait(
        `在那么多场比赛中取得出色成绩的你，倒也要有点自觉了吧，虽然你说你的马推粉丝有之前的因素……但是新粉丝，可不少啊。`,
      );
      await era.printAndWait(
        `像是被戳到痛点的数码双手投降，看来应该有所准备了。`,
      );
      await era.printAndWait(`接着便是来到了签名会的数码。`);
      await era.printAndWait(
        `一开始数码还有点不适应，不过之后的${chara_talk.sex}……`,
      );
      await chara_talk.say_and_wait(`好好，有在色纸上好好地签上名字了哦！`);
      await era.printAndWait(`甚至都做到了让每一个粉丝都笑着排队？！`);
      await chara_talk.say_and_wait(
        `因为之前一直都是作为推的那一方的人嘛……所以当然能猜出来粉丝们的心情。`,
      );
      await chara_talk.say_and_wait(
        `还有，训练员，待会能让我优化一下这个会场吗，只要拿到许可的话，就能让你看看数码的主办方之魂哦！`,
      );
      await era.printAndWait(
        `向工作人员拿到许可后，数码立刻在各个会场都扫荡了一遍，还把各种各样的活动都优化得很好？！`,
      );
      await era.printAndWait(
        `之后因为传到了鲁道夫的耳里，由${
          chara_talk.sex
        }亲自带领很多${chara_talk.get_uma_sex_title()}过来感谢时……`,
      );
      await chara_talk.say_and_wait(`怎么回事，我成为被推的一天了？！`);
      await era.printAndWait(`激动晕倒的数码终于结束了今天的奋斗。`);
      era.set('cflag:19:节日事件标记', 0);
    } else if (edu_weeks === 95 + 17) {
      await print_event_name('第三年nhk', chara_talk);
      await era.printAndWait(
        `与数码一同来观看去年${chara_talk.name}奋斗过的nhk英里杯。`,
      );
      await era.printAndWait(
        `最近来数码也关注起了后辈，其中最引起${chara_talk.sex}注意的——`,
      );
      await era.printAndWait(
        `也是今年nhk英里杯取得胜利的是，最近很火的新人——黑船。`,
      );
      await chara_talk.say_and_wait(
        `唔噢噢噢，大幅的步伐，修长的玉腿！我，我已经！`,
      );
      await chara_talk.say_and_wait(
        `黑船，${chara_talk.sex}，${chara_talk.sex}跑过在我奔跑过的草地啊！`,
      );
      await chara_talk.say_and_wait(`感觉，内心中的感觉要迸发出来了！`);
      await era.printAndWait(`接着数码立刻跑到了栅栏边……`);
      await chara_talk.say_and_wait(
        `黑船桑！加油啊！无论之后会遇到什么，前辈们都会帮助你的！`,
      );
      await era.printAndWait(`数码，从去年的nhk英里赛以来经历了很多，`);
      await era.printAndWait(
        `过去一年，再次看到有新世代出现，这蹄迹的延续，想必让数码感慨万千吧。`,
      );
      await era.printAndWait(`回到这里的数码，开始再次介绍起来了黑船……`);
      await era.printAndWait(
        `\n因为在对多种场地的适应性上，黑船都与数码很像，这也让数码带有一种亲切感。`,
      );
      await era.printAndWait(
        `数码已经从单纯地仰慕偶像的人，变到可以成为前辈关怀后辈的人了。`,
      );
    } else if (event_marks.yuusha_fight === 4 && edu_weeks === 95 + 46) {
      event_marks.yuusha_fight++;
      await print_event_name('勇者挑战', chara_talk);
      await era.printAndWait(
        `终于，数码赶在夏合宿前参加了诸多大型比赛，想必也终于积累了足够的经验。`,
      );
      await era.printAndWait(
        `跟着数码回忆了一下之前的比赛，又是许多的相遇啊。`,
      );
      await chara_talk.say_and_wait(
        `好！这下是时候了！虎牢关之战！该向歌剧和怒涛发出挑战书了！`,
      );
      await chara_talk.say_and_wait(`嗯……稍等，该选哪项比赛比较好？`);
      await era.printAndWait(
        `这么说确实，歌剧和怒涛赛场适性的话，泥地适性都比较差，距离适性的话，则是英里适性比较差。`,
      );
      await era.printAndWait(`而数码在长距离适性也不佳……`);
      await me.say_and_wait(
        `要真是说要挑战的话，果然还是黄金的草地中距离比赛啊。`,
      );
      await era.printAndWait(`不过，这……`);
      await chara_talk.say_and_wait(
        `的确……我也不想将${chara_talk.sex}们拉到我身边的泥塘……果然还得是堂堂正正地比一场。`,
      );
      await era.printAndWait(
        `和现在已经不仅仅是自称霸王的好歌剧还有紧随其后的名将怒涛，在黄金距离竞赛……`,
      );
      await me.say_and_wait(`天皇赏秋，这是最合适的比赛了。`);
      await era.printAndWait(`数码会在这场比赛上吃不到一点优势的。`);
      await chara_talk.say_and_wait(
        `对！就是这个！东京2000米草地赛道，没有比这更合适的了！`,
      );
      await me.say_and_wait(`真的可以吗？`);
      await chara_talk.say_and_wait(`吼诶？什么意思？`);
      await me.say_and_wait(`会相当吃力的哦？`);
      await era.printAndWait(`即使是数码，面对这种情况，也有点哑口无言。`);
      await chara_talk.say_and_wait(
        `……啊，天性如此啊，就好像玩游戏不愿意开最低难度，不愿意穿赠送的dlc强力装备差不多……`,
      );
      await chara_talk.say_and_wait(`还有，我，想要看到最棒的奔跑！`);
      await chara_talk.say_and_wait(`所以，你一定能奉陪我吧！`);
      await me.say_and_wait(`当然！`);
      await era.printAndWait(`数码本是如此啊。`);
    } else if (edu_weeks === 95 + 29) {
      if (era.get('flag:当前位置') === location_enum.beach) {
        await print_event_name('夏季合宿开始', chara_talk);
        await chara_talk.say_and_wait(
          `唔咕咕，今年，就今年这一次……没时间了啊！得停下来了！`,
        );
        await era.printAndWait(
          `夏合宿一开始就看到了抱头痛鸣的数码，该怎么说呢，看得多数码的你也逐渐明白，数码${chara_talk.sex}也有制作同人志的兴趣。`,
        );
        await era.printAndWait(
          `${chara_talk.sex}会将${chara_talk.sex}制作的同人志放到漫展上向别人传教，真是相当地热爱呢。`,
        );
        await era.printAndWait(`而且，最近的一次大型漫展，就在夏合宿期间。`);
        await chara_talk.say_and_wait(
          `天皇赏秋！这个夏天，就不出圣王新刊了，要为比赛倾尽全力！`,
        );
        await era.printAndWait(
          `看起来数码也相当地看重这次与好歌剧还有名将怒涛的对决，那么这次夏合宿，也一定不会让人担心了。`,
        );
        await chara61_talk.say_and_wait(`啊啦，那我就暂时看不到了呢`);
        await chara_talk.say_and_wait(`咻诶！圣王桑！`);
        await chara61_talk.say_and_wait(
          `比起那个，数码，你今年要参加天皇赏秋吧。`,
        );
        await chara_talk.say_and_wait(
          `是，是的……毕竟已经被圣王桑锻炼过了，无论是身体还是意志……终于，到了可以和歌剧怒涛决战的时候了！`,
        );
        await chara61_talk.say_and_wait(
          `那么，天皇赏秋，就是三个——不，四个人的对决了呢。`,
        );
        await chara_talk.say_and_wait(
          `诶？还有其他，被评为有实力的${chara_talk.get_uma_sex_title()}酱吗？`,
        );
        await chara61_talk.say_and_wait(`今年的nhk英里赛，你应该去看了吧？`);
        await chara_talk.say_and_wait(
          `那当然，因为我可是${chara_talk.name}！啊哈哈哈……难道说……`,
        );
        await era.printAndWait(`事实上，你前几天也听到有传言了，那就是……`);
        await chara61_talk.say_and_wait(
          `黑船，${chara_talk.sex}要参加今年的天皇赏秋。`,
        );
        await era.printAndWait(
          `黑船……就是拿下今年NHK的那位${chara_talk.get_uma_sex_title()}，具有着可怕的脚步。`,
        );
        await era.printAndWait(`${chara_talk.sex}也要参加这场比赛啊。`);
      }
    } else if (edu_weeks === 95 + 48) {
      const chara17_talk = get_chara_talk(17);
      await print_event_name('圣诞节', chara_talk);
      await era.printAndWait(
        `特雷森对于圣诞节的自由活动通常都是比较支持的，毕竟这对于${chara_talk.get_uma_sex_title()}来说也是一个特殊日子。`,
      );
      await era.printAndWait(
        `在校外之余，为了给一些特立独行的${chara_talk.get_uma_sex_title()}一些光照，学校内部也举办了大型活动。`,
      );
      await era.printAndWait(
        `和数码穿梭在各个活动现场蹭吃蹭喝，一起游玩各种游戏，还有就是和数码一起激烈讨论。`,
      );
      await era.printAndWait(`突然，鲁道夫以及一行人出现在了你的面前。`);
      await chara_talk.say_and_wait(`呜哇哇，是太吵闹了吗？`);
      await chara17_talk.say_and_wait(`不用太过担心，倒不如说是奖励。`);
      await era.printAndWait(
        `接着，${chara_talk.sex}从背后拿出一个大型礼盒，递给了数码……`,
      );
      await chara_talk.say_and_wait(`这是……`);
      await era.printAndWait(`数码打开了礼盒，然后里面装的是——`);
      await era.printAndWait(
        `一叠色纸……里面密密麻麻地写满了各种各样的……名字？`,
      );
      await chara_talk.say_and_wait(`不，这个，这个是……！签名啊！`);
      await era.printAndWait(
        `签名！定睛一看，这里面，包含了很多熟悉的${chara_talk.get_uma_sex_title()}的亲笔签名？！`,
      );
      await chara_talk.say_and_wait(
        `啊啊啊啊……这就算是单买，都要多少马币呢……我的存款，还有多少来着……`,
      );
      await chara17_talk.say_and_wait(
        `这是这段时间以来，接受过数码帮助或者鼓舞的各位${chara_talk.get_uma_sex_title()}的谢意，而且，作为学生会长，我也非常感谢你对学校的宣传……`,
      );
      await chara17_talk.say_and_wait(
        `而且，数码你的爱好……也有点独特，所以我募集了所有喜欢数码你的${chara_talk.get_uma_sex_title()}，为你准备了这份礼物。`,
      );
      await era.printAndWait(`收到这份大礼，数码${chara_talk.sex}……`);
      await chara_talk.say_and_wait(`啊哇啊哇……难道这就是……推人着恒被推吗……`);
      await say_by_passer_by(`众人`, `节日快乐！${chara_talk.name}`);
      await chara_talk.say_and_wait(`训练员！训练员！这……`);
      await era.printAndWait(`立刻尊晕地靠在了你身上。`);
      await era.printAndWait(
        `意外地互换了位置的数码，在今天也享受到了被推的快乐。`,
      );
    } else if (event_marks.yuusha === 1) {
      event_marks.yuusha++;
      await print_event_name('世界的旅人', chara_talk);
      await era.printAndWait(
        `是全收集类玩家吗，数码在这场游戏肯定能得到技能吧！`,
      );
      await era.printAndWait(`数码仍在继续挑战，为之后去海外远征而努力。`);
      await era.printAndWait(
        `不仅是为了胜利，也是为了和同志一起，去遇见更多的${chara_talk.get_uma_sex_title()}。`,
      );
      await era.printAndWait(`在为了先行考察，并没有太多人知道的航班……`);
      await era.printAndWait(`准备启程前……`);
      await era.printAndWait(`诶呀呀，来了不少熟人啊。`);
      await era.printAndWait(`圣王、歌剧、怒涛、速子……还有黑船？`);
      await era.printAndWait(
        `本来就是暂时离开，适应一下海外环境，倒不如说是旅游？`,
      );
      await era.printAndWait(`结果还来了这么多人告别吗？`);
      await era.printAndWait(`数码，真的了不起啊。`);
      await chara_talk.say_and_wait(
        `不过，我等不了了！异域的邂逅，我要和同志一起，想要和世界各地的${chara_talk.get_uma_sex_title()}们相遇啊！`,
      );
      await era.printAndWait(
        `世界的旅人，${chara_talk.name}，现在仍在奔跑中。`,
      );
    }
  }
};

handlers[event_hooks.week_end] = async () => {
  const me = get_chara_talk(0),
    chara61_talk = get_chara_talk(61),
    edu_weeks = era.get('cflag:19:育成回合计时');
  if (edu_weeks === 47 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      await print_event_name(`夏合宿结束`, chara_talk);
      await chara_talk.say_and_wait(`嘿嘿……呼……感谢赐予的对决……`);
      await era.printAndWait(`在夏合宿的最后，就是预定的数码和圣王的对决……`);
      await era.printAndWait(`不过，看起来有点……随意吗？`);
      await chara61_talk.say_and_wait(
        `哈……呼……数码，你的脚步，相当地踌躇呢，怎么了？`,
      );
      await chara_talk.say_and_wait(
        `呀，不……该说是一直都在吃着闪光弹吗，还是被空气中携带的尊窒息了吗……`,
      );
      await chara_talk.say_and_wait(
        `以前我都是作为观众那一方的……居然想要追上什么的，太得意忘形啦……`,
      );
      await chara_talk.say_and_wait(
        `我也是最近，才有那种『认真去跑』觉悟的普通底层人而已……`,
      );
      await chara61_talk.say_and_wait(
        `啊啦，看起来相当地没自信啊。不过，真仅此而已吗？训练员，数码的实力，你应该知道的吧？`,
      );
      await me.say_and_wait(`要是在现在的沙地的话，数码是不会输的。`);
      await era.printAndWait(`数码${chara_talk.sex}仍在在意现在的圣王。`);
      await chara_talk.say_and_wait(`圣王……现在……和原来相差甚远……是吧……`);
      await chara_talk.say_and_wait(
        `今年春天，在『高松宫纪念』上的胜利，然后就……流利的跑姿，身体的跃动感，该说都没这次比赛的实力了吗……`,
      );
      await chara_talk.say_and_wait(
        `我知道的，正因为每次都扶着栅栏探出身子去看的啊。`,
      );
      await chara_talk.say_and_wait(
        `现在的圣王桑有多么痛苦，因为我也出道了，所以我也能……知道了一些……`,
      );
      await era.printAndWait(
        `成为选手后的数码，比起以前，所能触碰到的都更多了，像这样的感情也是。`,
      );
      await chara61_talk.say_and_wait(`所以才没心情吗……这样啊，哼……数码你……`);
      await chara61_talk.say_and_wait(`是笨蛋啊。`);
      await chara_talk.say_and_wait(`诶？`);
      await era.printAndWait(`意外之外的话语让数码吃了一惊。`);
      await chara61_talk.say_and_wait(`笨蛋，还是大笨蛋。`);
      await chara61_talk.say_and_wait(`你看着很了解我，但还啥都不懂呢。`);
      await era.printAndWait(`严厉的话语，却带着温柔的声音。`);
      await chara61_talk.say_and_wait(
        `那个，数码，你对我这个${chara_talk.get_uma_sex_title()}，很感兴趣吧？`,
      );
      await chara_talk.say_and_wait(`！是的！`);
      await chara61_talk.say_and_wait(
        `这样吧，在合宿结束后，我赐予你和我一起训练的权利！`,
      );
      await chara61_talk.say_and_wait(
        `让你看看，圣王光环是怎样的${chara_talk.get_uma_sex_title()}！`,
      );
      await chara_talk.say_and_wait(`请务必！`);
      await chara_talk.say_and_wait(
        `太过于光荣连尾巴都弹跳起来了！数码居然要和那个女神一起！`,
      );
      await era.printAndWait(`在夏天的末尾，数码和憧憬的马娘建立了联系。`);
    }
  }
  if (edu_weeks === 95 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      await print_event_name(`第三年夏合宿结束`, chara_talk);
      await era.printAndWait(
        `在这次的夏合宿，数码真的是特别努力了，你从来没见过如此认真的数码。`,
      );
      await era.printAndWait(
        `与前辈歌剧怒涛的约定，与后辈黑船的对决，两个因素使现在数码的状况前所未有地好！`,
      );
      await chara_talk.say_and_wait(
        `训练员，我感觉到了，这种感觉，就像是被所有人加持了的勇者！这样一来，就能和${chara_talk.sex}们对决了！`,
      );
      await me.say_and_wait(`能赢吗？`);
      await chara_talk.say_and_wait(
        `说实话，只有不安！那三位，无论是谁感觉我都没有获胜的把握……`,
      );
      await chara_talk.say_and_wait(
        `所以，我能做到的只有凭借一直以来的丰富多样的经验了！`,
      );
      await era.printAndWait(
        `无论立在前面的墙壁有多高，${chara_talk.name}都没有迷茫。`,
      );
      await era.printAndWait(`但是，在那天夜里……`);
      await era.printAndWait(`却传来了黑船无法参赛的消息。`);
      await era.printAndWait(
        `数码那天晚上，把你叫了出来，在深夜的海滩上，垂着头一言不语。`,
      );
      await era.printAndWait(`等过了很久，数码才开口——`);
      await chara_talk.say_and_wait(`训练员……你说，这种事情，是真实存在的吗？`);
      await era.printAndWait(
        `骨折、粉丝数、投票数、抽选、避战……各种原因所造成的不出赛，数码都见过。`,
      );
      await era.printAndWait(
        `但是，因为参赛名额意外不够用，这种情况，数码第一次遇见。`,
      );
      await chara_talk.say_and_wait(
        `因为是比赛，所以绝对会有胜利的笑容以及失败的泪水。`,
      );
      await chara_talk.say_and_wait(
        `但是，在泪水的前方，必定存在着感动，正因如此，${chara_talk.get_uma_sex_title()}们才能在又一个赛场上再次碰撞。`,
      );
      await chara_talk.say_and_wait(
        `……但是……如果，连跑都不能跑的话，那又怎么说……`,
      );
      await era.printAndWait(`明明准备好了所有，却不能参赛。`);
      await chara_talk.say_and_wait(
        `如果是因为我的出赛……${chara_talk.sex}的梦想就此被摘下的话……`,
      );
      await era.printAndWait(`数码十分沮丧，已经产生了退却心理。`);
      await me.say_and_wait(`你难道要说自己不参加天皇赏秋吗？！`);
      await chara_talk.say_and_wait(`那……没那回事。`);
      await chara_talk.say_and_wait(
        `就算是我，就算是我，也有着和歌剧和怒涛的约定啊……`,
      );
      await era.printAndWait(`数码明白，${chara_talk.sex}什么都不能改变。`);
      await era.printAndWait(
        `因为喜欢${chara_talk.get_uma_sex_title()}，所以那位${chara_talk.get_uma_sex_title()}的遭遇，才会像水草一样缠上${
          chara_talk.sex
        }的脚。`,
      );
      await era.printAndWait(`不过，如果就这样的话……`);
      await me.say_and_wait(`相信${chara_talk.sex}吧，于此同时，我也相信你。`);
      await chara_talk.say_and_wait(
        `这是……这是什么意思？相信${chara_talk.sex}……？`,
      );
      await me.say_and_wait(
        `黑船${chara_talk.sex}的脚步不会停下，${chara_talk.sex}，还有明年，今年的天皇赏秋，${chara_talk.sex}的确是不能参加了没错……`,
      );
      await me.say_and_wait(
        `但是你觉得${chara_talk.sex}会就此一蹶不振，然后就此退役吗？`,
      );
      await chara_talk.say_and_wait(`！那……那肯定不会。`);
      await era.printAndWait(
        `出色的${chara_talk.get_uma_sex_title()}，不会因为这些挫折所击倒。`,
      );
      await me.say_and_wait(`给出你最好的答卷，这就是对黑船最好的帮助。`);
      await chara_talk.say_and_wait(
        `……${chara_talk.get_uma_sex_title()}酱们，在痛苦中最后抓住的东西，在历经了那几位后，我知道了，那是无与伦比的事物。`,
      );
      await chara_talk.say_and_wait(
        `所有带来的悲伤，即使是那份悔恨，都会成为明天的力量！我明白了！毕竟正是亲自感受过了啊！`,
      );
      await chara_talk.say_and_wait(
        `所以我，我才能打心底里说出，${chara_talk.get_uma_sex_title()}太棒了啊！`,
      );
      await era.printAndWait(`数码站起身跑到海边——`);
      await chara_talk.say_and_wait(
        `${chara_talk.get_uma_sex_title()}，无论是怎样的苦难，都能用不屈的意志，全都，弹飞啊啊啊啊啊！！！！！`,
      );
      await chara_talk.say_and_wait(
        `无论是我，还是${chara_talk.sex}！都绝对能过跨越啊！！！！`,
      );
      await chara_talk.say_and_wait(`……啊啊啊……`);
      await era.printAndWait(`尽情呼喊后，数码回过神来。`);
      await me.say_and_wait(`看来，数码你，已经得到答案了。`);
      await chara_talk.say_and_wait(
        `……我，我也不能停在这里，一定，一定要把从圣王那里拿到的珍贵的东西，展示给${chara_talk.sex}！`,
      );
      await chara_talk.say_and_wait(
        `我，我一定要参加天皇赏秋，而且，而且！一定要拿到，压倒性胜利！`,
      );
      await chara_talk.say_and_wait(
        `让${chara_talk.sex}，为了明年这番比赛能够追上我，拼尽全力！`,
      );
      await chara_talk.say_and_wait(`绝对！绝对要！`);
      await chara_talk.say_and_wait(
        `而且，要把我至今为止所有邂逅的${chara_talk.get_uma_sex_title()}的感情，全部倾倒出去！`,
      );
      await chara_talk.say_and_wait(`这就是，我的责任！`);
      await era.printAndWait(`要获胜，而且是要大胜，才能断绝黑船最后的遗憾。`);
      await era.printAndWait(`这就是数码给予自己的责任。`);
    }
  }
};

/**
 * @param hook
 * @param {RaceStartParams} extra_flag
 */
handlers[event_hooks.race_start] = async (hook, extra_flag) => {
  const chara15_talk = get_chara_talk(15),
    chara58_talk = get_chara_talk(58),
    chara61_talk = get_chara_talk(61),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:19:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('出道战开始！', chara_talk);
    await chara_talk.say_and_wait(
      `嗯哼，能听到吗？我是${chara_talk.name}，正值新叶萌发之时，各位大家过得好吗？我现在正站在出道战的亮相圈里，在周围的则是……`,
    );
    await chara_talk.say_and_wait(
      `数码……数码……在${chara_talk.get_uma_sex_title()}酱的周边……倒不如说就在${chara_talk.get_uma_sex_title()}酱里面！`,
    );
    await chara_talk.say_and_wait(
      `已经要……萌死了……训练员！能看到吗！这周边的${chara_talk.get_uma_sex_title()}酱们！`,
    );
    await era.printAndWait(
      `看得到，周围的${chara_talk.get_uma_sex_title()}有些都紧张地发抖了，有些眼神在发光，但其中最特别的是……`,
    );
    await era.printAndWait(
      `托着脸颊正用一种近乎让人感到危险的眼神，欣赏着这一切的——${chara_talk.name}。`,
    );
    await chara_talk.say_and_wait(
      `吸溜溜，我想说的是${chara_talk.sex}们还能到什么地步啊！尊力检测仪都已经爆表了，而我，居然能够混入其中！`,
    );
    await chara_talk.say_and_wait(`哈～要，尊死了……数码……就要变成灰了……`);
    await me.say_and_wait(`现在可是要比赛了哦！`);
    await chara_talk.say_and_wait(`哇！对啊！现在不是升天的场合！`);
    await chara_talk.say_and_wait(
      `现在的我，也是和${chara_talk.get_uma_sex_title()}酱们肩并肩的存在，绝不能让我的存在使${
        chara_talk.sex
      }们蒙上阴影！`,
    );
    await chara_talk.say_and_wait(
      `我会努力的！能量充足，检查完备！尊力机能100%运作！`,
    );
    await chara_talk.say_and_wait(
      `数码的眼睛就是底片，要把${chara_talk.get_uma_sex_title()}酱们所有的笑容与泪水全都印在里面！`,
    );
    await era.printAndWait(`${chara_talk.name}，怀抱着觉悟，走向了赛场。`);
  } else if (extra_flag.race === race_enum.hyac_sta) {
    await print_event_name('风信子杯开始！', chara_talk);
    await era.printAndWait(
      `在前一段时间里，日经新春杯中，名将怒涛拿到了第二名。`,
    );
    await era.printAndWait(
      `本来只是想要在地下通道祝贺怒涛的数码，还为之前的逾越头疼的数码，却意外地收获了怒涛的感谢。`,
    );
    await era.printAndWait(
      `明明是违背了一般粉丝的决定，却逐渐开花结果了，这让数码逐渐无法理解了。`,
    );
    await era.printAndWait(
      `而解决问题的方式，就是比赛，今天的这场比赛，就是之前就已经预定的比赛。`,
    );
    await era.printAndWait(`作为一场op赛，连g3都不是的小比赛。`);
    await era.printAndWait(
      `在亮相圈里，数码死死地盯着其他的${chara_talk.get_uma_sex_title()}。`,
    );
    await era.printAndWait(
      `数码的双手化作爪子在空中舞动，瞳孔里饱含着「美味」的含义……`,
    );
    era.printButton(`数码你可不要扑上去了哦。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`不，本来之前也没有扑过吧。`);
    await chara_talk.say_and_wait(`说到这里，训练员，总感觉好奇怪啊。`);
    await chara_talk.say_and_wait(
      `感觉好像，气氛特别的严峻，但是其中所包含的尊味，又没有变化……`,
    );
    await era.printAndWait(
      `数码发现，每个${chara_talk.get_uma_sex_title()}表情上都写满了严阵以待，这股情感让数码欲罢不能，但气氛又不容数码像以往那样说出口。`,
    );
    await chara_talk.say_and_wait(
      `在这里面，应该是有更为纯粹的事物，使得${chara_talk.get_uma_sex_title()}为何为尊……`,
    );
    await me.say_and_wait(`你想，触碰它？`);
    await chara_talk.say_and_wait(`诶！这样也太失敬了！`);
    await chara_talk.say_and_wait(
      `不过，我想，尽量在比起以前更为接近的位置观察……`,
    );
    await era.printAndWait(
      `数码依旧还是把自己当成观众，但是，${chara_talk.sex}的眼神却比以往发生了一丝变化。`,
    );
  } else if (extra_flag.race === race_enum.nhk_cup) {
    await print_event_name('nhk英里杯开始！', chara_talk);
    await chara_talk.say_and_wait(`噢噢噢噢噢噢噢！果然，很不一样啊！`);
    await era.printAndWait(`G1赛场，超过十万观众的比赛……`);
    await era.printAndWait(
      `即使是经常观看，站在亮相圈所带来的感觉还是十分新鲜。`,
    );
    await era.printAndWait(
      `十万观众所带来的气氛足够震撼，但真正的大头，是选手的……`,
    );
    await chara_talk.say_and_wait(
      `怎怎怎怎么回事！这股气息，这股如同领域般的压迫力！`,
    );
    await chara_talk.say_and_wait(`糟糕！赛高！简直可以说是尊高！`);
    await me.say_and_wait(`很兴奋是吧！那就正是在状态上啊！`);
    await chara_talk.say_and_wait(`已经，已经什么都想不了了，大脑，已经……`);
    await chara_talk.say_and_wait(
      `美丽，恐怖，感觉这分辨率都要达到4K了，现在连站在这里都有点难……`,
    );
    await chara_talk.say_and_wait(
      `不过，我要搞明白，${chara_talk.get_uma_sex_title()}酱的尊的奥妙！`,
    );
    await chara_talk.say_and_wait(`就算……我会尊得幻化成灰……哈？！`);
    await era.printAndWait(`怎么了，数码说着说着突然一个哆嗦。`);
    await era.printAndWait(`数码环视了一下，然后……`);
    await chara_talk.say_and_wait(`感觉好像有人在盯着我？`);
    await era.printAndWait(
      `选手的话，你看得很清楚，并没有盯着数码的人，那应该就是从观众席传过来的。`,
    );
    await chara_talk.say_and_wait(`是吗，我居然，也在推中，做着被推的梦吗……`);
    await chara_talk.say_and_wait(`不能在这样轻浮了！`);
    await era.printAndWait(
      `如此重大的比赛，想必${chara_talk.name}也能激发${chara_talk.sex}的素质吧。`,
    );
  } else if (extra_flag.race === race_enum.japa_dir) {
    await print_event_name('泥地德比开始！', chara_talk);
    await chara_talk.say_and_wait(
      `我还没注意到，${chara_talk.get_uma_sex_title()}酱们的尊能源的根源，那一定是无比珍贵之物……`,
      true,
    );
    await chara_talk.say_and_wait(
      `大井……夜晚……泥地……在这少来的异乡赛道，在这特殊的赛场，也许，就存在着我想要找到的秘密……`,
      true,
    );
    era.drawLine();
    await chara_talk.say_and_wait(
      `『日本泥地达比』，总感觉这场比赛的氛围很独特呢。`,
    );
    await me.say_and_wait(`JG1赛事……这种类型赛事总会带有很多的偏见。`);
    await chara_talk.say_and_wait(
      `即使如此，这场赛事带来的炙热气息，就像夏日的太阳……`,
    );
    await chara_talk.say_and_wait(
      `无论是赛道、景色、还是草地泥地都不一样，就算如此也好……`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}酱的心情，都是一样的吧？`,
    );
    await era.printAndWait(
      `没错，无论是g1还是g3、重赏还是公开赛、草地还是泥地、中央还是地方……`,
    );
    await me.say_and_wait(`都一样的。`);
    await me.say_and_wait(
      `这场比赛过后，你就经历了所有类型比赛了，肯定能明白为何一样吧。`,
    );
    await era.printAndWait(
      `${chara_talk.name}，或许早就明白了，${chara_talk.sex}只是需要求证而已，就通过这场比赛。`,
    );
    await chara_talk.say_and_wait(
      `现在！就和大井的泥地${chara_talk.get_uma_sex_title()}酱一起，找到答案！`,
    );
  } else if (extra_flag.race === race_enum.mile_cha) {
    await print_event_name('英里冠军赛开始！', chara_talk);
    await era.printAndWait(
      `圣王光环，数码出道前就已经一直仰望的${chara_talk.get_uma_sex_title()}，现在，数码终于能够和${
        chara_talk.sex
      }站在了一起。`,
    );
    await era.printAndWait(
      `亮相圈上的圣王，一扫之前的颓势，气场高涨，简直就像是回到了巅峰时期。`,
    );
    await chara61_talk.say_and_wait(
      `怎么样？数码，今天的我，是不是耀眼得眼睛都要花了？`,
    );
    await chara_talk.say_and_wait(
      `是！无比耀眼！不过……脊梁还是没有今年春天的挺直……`,
    );
    await chara61_talk.say_and_wait(
      `啊哈……还真瞒不过你呢，没想到这你都能察觉出来。`,
    );
    await chara61_talk.say_and_wait(`数码，你喜欢我到什么程度？`);
    await chara_talk.say_and_wait(`在这推得要比马里亚纳海沟还要深！`);
    await era.printAndWait(
      `圣王和数码有说有笑，在这里，能看出${chara_talk.sex}们一定能给出一场无法述说的比赛。`,
    );
    await chara_talk.say_and_wait(
      `你真正的想法，我想要在今天的比赛里，弄明白！`,
    );
    await chara61_talk.say_and_wait(
      `真正的一流，就用你的全身心来理解吧！数码！`,
    );
  } else if (extra_flag.race === race_enum.tenn_sho) {
    await print_event_name('秋季天皇赏开始！', chara_talk);
    await era.printAndWait(`终于到了，天皇赏秋当天。`);
    await era.printAndWait(`在亮相圈中，数码与熟悉的那两位碰面了。`);
    await chara_talk.say_and_wait(`请多关照！歌剧，怒涛。`);
    await chara58_talk.say_and_wait(`这边才是！请多关照了，数码！`);
    await era.printAndWait(
      `时隔三年，数码也终于能够在自己的推面前正常地交流了。`,
    );
    await chara15_talk.say_and_wait(
      `啊哈哈哈，你们这是在发名片吗？不过，身为霸王的我，其闪耀的自身，就已经表明了我的一切！不需要任何介绍！`,
    );
    await chara15_talk.say_and_wait(`数码君，欢迎来到我的加冕典礼！`);
    await chara15_talk.say_and_wait(
      `你的努力，我都看在眼里，我不得不承认你也到达了我们的身后。`,
    );
    await chara15_talk.say_and_wait(
      `但身后终究是身后！数码君，在这草地上，你还赢不了我，身为『世纪末霸王』，驱驰于中距离草场的我！`,
    );
    await chara_talk.say_and_wait(`的确……如你所言，在硬实力上，我还比不过你……`);
    await chara_talk.say_and_wait(`但是，我的技巧，在草地与泥地的技巧……`);
    await era.printAndWait(
      `是的，在这场草地比赛中，双刀流的数码，其优势在……只要在等一会，就会明了。`,
    );
    await era.printAndWait(`滴答……滴答……`);
    await era.printAndWait(`哗啦……哗啦……`);
    await era.printAndWait(`一开始仅是一点，紧接着便遍及全部！`);
    await era.printAndWait(`是的，重马场，这次的天皇赏秋，是重马场啊！`);
    await chara_talk.say_and_wait(
      `这是……${chara_talk.get_uma_sex_title()}酱的泪雨吗……不，是我遇见的所有${chara_talk.get_uma_sex_title()}酱的喜极而泣，是庆祝我的胜利的雨啊！`,
    );
    await chara15_talk.say_and_wait(
      `……雨吗……先说明，我可是擅长重马场的喔，霸王无论场况如何，都能适应！`,
    );
    await chara58_talk.say_and_wait(`啊哇哇哇……是雨啊啊啊……`);
    await era.printAndWait(
      `好歌剧是擅长重马场，但是，数码，${chara_talk.sex}可不仅是擅长啊！`,
    );
    await era.printAndWait(`数码可是字面意思地在泥潭上跑过的，面对这种情况……`);
    await era.printAndWait(`仅有赢的可能。`);
  } else {
    const sex_mark = era.get('mark:19:淫纹');
    if (sex_mark >= 1) {
      await chara_talk.say_and_wait(
        `数码碳的决胜服好像是露肚子的来着？！遭了遭了，要藏吗？怎么藏？藏得了吗？`,
      );
    } else {
      switch (
        get_random_value(
          0,
          1 +
            check_aim_race(new RaceHistory(19).get(), race_enum.japa_dir, 1, 3),
        )
      ) {
        case 0:
          await chara_talk.say_and_wait(
            `胜券在握的${chara_talk.get_uma_sex_title()}酱，紧绷的${chara_talk.get_uma_sex_title()}酱，还是看似不在乎实则认真的${chara_talk.get_uma_sex_title()}酱……呼……嘿……`,
          );
          break;
        case 1:
          await chara_talk.say_and_wait(
            `不不不，再怎么想我这种${chara_talk.get_uma_sex_title()}上赛场还是很奇怪吧？`,
          );
          break;
        case 2:
          await chara_talk.say_and_wait(
            `我要，作为一名选手，跑出不负于对手的比赛。`,
          );
      }
    }
  }
};

/**
 * @param hook
 * @param {RaceEndParams} extra_flag
 */
handlers[event_hooks.race_end] = async (hook, extra_flag) => {
  const chara61_talk = get_chara_talk(61),
    chara58_talk = get_chara_talk(58),
    chara15_talk = get_chara_talk(15),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:19:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战胜利', chara_talk);
    await era.printAndWait(
      `出道战，数码在这场比赛中出色地拿到了第一名，然后……`,
    );
    await era.printAndWait(
      `本来以为会看到会尊成灰的数码，像平时一样释放${chara_talk.sex}的爱意，没想到看起来${chara_talk.sex}居然安静下来了，${chara_talk.sex}也有这种时候啊……`,
    );
    await chara_talk.say_and_wait(`……是原点，也是顶点……`);
    await chara_talk.say_and_wait(
      `初次的出闸，无法把控的时间节点，相互纠缠的玉足……`,
    );
    await chara_talk.say_and_wait(
      `汗水四溅，因为焦急而一片空白的大脑，但是伴随着观众的欢呼声消失，留下来的只有揭示板上的结果……`,
    );
    await era.printAndWait(`数码，居然能这样描绘出确切的情感啊。`);
    await chara_talk.say_and_wait(
      `太！太感动了！无论什么都令人不禁落泪，对吧！对吧！`,
    );
    era.printButton(`对呢，初次的比赛，出道赛，恭喜了。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `啊啊啊，奔跑的时候，数码被其他${chara_talk.get_uma_sex_title()}酱的情感冲击得乱七八糟，数码我……`,
    );
    await chara_talk.say_and_wait(
      `我真的是，小看了出道战！出道战，谁都是赢家呢！谁都是！`,
    );
    await chara_talk.say_and_wait(
      `被夹杂着如此丰富的情感，无论是谁，都会收获满满吧？`,
    );
    await era.printAndWait(
      `数码，真的很开心，无论是在比赛中的步伐，还是比赛后的感想，都传达出${chara_talk.sex}对比赛的喜爱。`,
    );
    await chara_talk.say_and_wait(
      `训练员，今天的比赛只是入门吧！接下来还有很多比赛吧！还会遇到更多的${chara_talk.get_uma_sex_title()}酱吧！`,
    );
    await me.say_and_wait(
      `对，前面，还有很多${chara_talk.get_uma_sex_title()}在等着你。`,
    );
    await chara_talk.say_and_wait(
      `太棒了！我跨过了乐园的门槛，真的不小心就跨过去了！一直以为那是我不应涉及的领域！`,
    );
    await chara_talk.say_and_wait(
      `下一次，我想要再看到这样的${chara_talk.get_uma_sex_title()}酱们！`,
    );
    await me.say_and_wait(`那么，下一次跑草地比赛怎么样呢？`);
    await chara_talk.say_and_wait(
      `嗯？诶，这次是泥地，下次就草地吗……对不起，是我有些得意忘形了，因为太开心，脑海里的都跑到九霄云外了。`,
    );
    await chara_talk.say_and_wait(
      `我还想再跑一次泥地比赛，再感受一次这种气氛！`,
    );
    await era.printAndWait(`商量过后，你们决定下一次比赛是：新年的风信子杯`);
  } else if (
    extra_flag.race === race_enum.hyac_sta &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('风信子胜利', chara_talk);
    await era.printAndWait(`数码果然还是漂亮地到达了终点，该说是毫无悬念吗……`);
    await chara_talk.say_and_wait(`呼……哈……数码我，做到了……`);
    await chara_talk.say_and_wait(
      `冲过了终点，然后，见证到了，${chara_talk.get_uma_sex_title()}酱们的光辉！`,
    );
    await chara_talk.say_and_wait(
      `该说是果然还是有点意外呢！我本以为是${chara_talk.get_uma_sex_title()}酱们这种奔跑的觉悟很尊……`,
    );
    await chara_talk.say_and_wait(
      `但恐怕${chara_talk.get_uma_sex_title()}酱们对比赛所寄托的愿望更深……只要我再继续比赛，那一定能知道${
        chara_talk.sex
      }们耀眼的原因！`,
    );
    await chara_talk.say_and_wait(`再接着以这种不干扰的主义推下去吧！`);
    await say_by_passer_by(`???`, `呜呜呜……呜……`);
    await say_by_passer_by(`???`, `唔啊啊啊啊啊！`);
    await era.printAndWait(
      `从不远处传来了某个${chara_talk.get_uma_sex_title()}的痛哭。`,
    );
    await chara_talk.say_and_wait(
      `那个${chara_talk.get_uma_sex_title()}，我记得是刚才……`,
    );
    await era.printAndWait(
      `如果没记错的话，${chara_talk.sex}刚好是第六名，恰好在揭示板外。`,
    );
    await say_by_passer_by(
      `???`,
      `揭示板……连揭示板都没能……重赏又怎么有可能……！`,
    );
    await era.printAndWait(
      `一直以来都看着${chara_talk.get_uma_sex_title()}的数码，现在却完全不敢再继续注视了，扭开视角转过身来。`,
    );
    await era.printAndWait(
      `在穿过地下通道时，数码一直都回避着其他${chara_talk.get_uma_sex_title()}，不是以往的保持距离，而是刻意避开不看。`,
    );
    await chara_talk.say_and_wait(`……`);
    await era.printAndWait(
      `即使如此，前面还是看到了两个${chara_talk.get_uma_sex_title()}，是刚才第二第三的${chara_talk.get_uma_sex_title()}啊。`,
    );
    await era.printAndWait(`数码正准备避开，然后……`);
    await say_by_passer_by(`马娘A`, `呜呜呜……`);
    await say_by_passer_by(`马娘B`, `不是不是，第二名了哦？你哭什么啊？`);
    await say_by_passer_by(
      `马娘A`,
      `明明，明明，是与前辈你的对决的……一直以来都想着，能与你比胜负，然后，超越你……`,
    );
    await say_by_passer_by(
      `马娘B`,
      `那不是达到了吗？你啊，真的很强啊，我也差不多要成老骨头了噢～`,
    );
    await say_by_passer_by(
      `马娘A`,
      `……我一直都以为……我只要胜过前辈……我就能……但是，她真的，很强……伸出手都无法……`,
    );
    await say_by_passer_by(`马娘B`, `钻石君主！你努力了吧！全力以赴了吧！`);
    await say_by_passer_by(`钻石君主`, `但是……`);
    await say_by_passer_by(
      `马娘B`,
      `不管你我的成绩如何，闪耀系列赛还是会一直持续下去，它可不会等我们！`,
    );
    await say_by_passer_by(`马娘B`, `但是……`);
    await say_by_passer_by(`马娘B`, `但是……`);
    await say_by_passer_by(
      `马娘B`,
      `你比我强，而且，你还有潜力，你以后，一定会挑战重赏吧！一定会挑战G1吧！`,
    );
    await say_by_passer_by(`钻石君主`, `让她们刮目相看吧！`);
    await say_by_passer_by(`钻石君主`, `胜者舞台，能一起去吧？`);
    await era.printAndWait(`马娘B抬起了手，擦了她同伴的眼泪。`);
    await say_by_passer_by(`钻石君主`, `！`);
    await era.printAndWait(`她使劲地吸了下流下的鼻涕，狠狠地点了头。`);
    await era.printAndWait(
      `\n看着${chara_talk.sex}们拉着手远去，数码这次，再也无法说出任何「磕到了」的话。`,
    );
    await chara_talk.say_and_wait(`……`);
    await me.say_and_wait(`数码，还好吗？`);
    await chara_talk.say_and_wait(`骗人的……不干涉什么的……`);
    await chara_talk.say_and_wait(`这种事情，根本不可能。`);
    await chara_talk.say_and_wait(
      `只要参赛，那就一定会有胜者，一定会有败者……就算输了也很尊，全部都是胜者什么的，真亏我说得出这种话啊……`,
    );
    era.printButton(
      `正是登上赛场，所建立的联系，才会让你们如此之尊，这不是你一直以来就知道的吗？`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `数码在此次比赛，似乎是能窥探到了一些${chara_talk.get_uma_sex_title()}为何尊，为何伟大的奥秘了。`,
    );
    await era.printAndWait(
      `但是${chara_talk.sex}又突然认识到了${chara_talk.sex}作为一个对手，却把自己当成一个观众，还无情地夺走了冠军。`,
    );
    await era.printAndWait(`这是十分失敬的。`);
    await era.printAndWait(`所以数码，在胜者舞台后，回到训练室时……`);
    await chara_talk.say_and_wait(
      `训练员，我想要聊一下关于之后的事情，我要说一些不像我自己的话了，可以吗？？`,
    );
    await me.say_and_wait(`当然。`);
    await chara_talk.say_and_wait(`我觉得，不论如何，我都要参加……G1赛事。`);
    await chara_talk.say_and_wait(
      `感觉，对在场的所有你们，都是犯下了需要在炙热铁板上土下座的失礼`,
    );
    await chara_talk.say_and_wait(
      `既然如此，那就不得不去做了，参赛，战胜G1，然后让其他人觉得，数码很强。`,
    );
    await era.printAndWait(
      `想要证明，证明${chara_talk.sex}真的是足够强大的，为了给所有输给${
        chara_talk.sex
      }的${chara_talk.get_uma_sex_title()}一个交代。`,
    );
    await chara_talk.say_and_wait(
      `还有，想要确定一下，${chara_talk.get_uma_sex_title()}酱们到底是如何面对G1比赛的！`,
    );
    await era.printAndWait(
      `想要证明，证明${chara_talk.sex}真的是足够强大的，为了给所有输给${
        chara_talk.sex
      }的${chara_talk.get_uma_sex_title()}一个交代。`,
    );
    await chara_talk.say_and_wait(
      `还有，想要确定一下，${chara_talk.get_uma_sex_title()}酱们到底是如何面对G1比赛的！`,
    );
    await era.printAndWait(
      `数码与你，将下一次比赛，定在了五月前半的nhk英里杯。`,
    );
    await chara_talk.say_and_wait(
      `我要，出赛，然后——带着${chara_talk.sex}们的份一起！`,
    );
    await era.printAndWait(
      `偶然的事件，但并不是偶然的结果，胜利与失败，其所蕴含的悲哀——推动了${chara_talk.name}的未来。`,
    );
  } else if (
    extra_flag.race === race_enum.nhk_cup &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('nhk英里杯胜利', chara_talk);
    await say_by_passer_by(
      `解说`,
      `是${chara_talk.name}！${chara_talk.name}！她给我们展示了无论是草地还是泥地，都不在她的话下！`,
    );
    await era.printAndWait(`冲过终点的数码，连脚步都有点踉踉跄跄了。`);
    await chara_talk.say_and_wait(
      `哈……呼……好……没有一点残余能量了……连推的余力都没了……用了，全力……！`,
    );
    await chara_talk.say_and_wait(`啊啊啊，阳光……好耀眼……天空……好……遥远……`);
    await chara_talk.say_and_wait(`啊……这就是……`);
    await era.printAndWait(`（咚！）`);
    await era.printAndWait(`数码倒下了！`);
    era.drawLine();
    await era.printAndWait(
      `幸好，经过了赶来医生的判断，数码只是运动过度了，休息一下就好。`,
    );
    await era.printAndWait(
      `在这一次，数码真正地用出了全力，跟以往不同，这次的数码，背负了作为选手的信念。`,
    );
    await era.printAndWait(`所以，在用尽全力后，数码激动地倒下了。`);
    await era.printAndWait(
      `你背着数码，回到了休息室，然后……发现了两个熟悉的身影，是好歌剧还有名将怒涛。`,
    );
    await chara15_talk.say_and_wait(`数码君？振作一点！`);
    await me.say_and_wait(`没事，${chara_talk.sex}休息一下就好。`);
    await era.printAndWait(`在说着的过程中，把数码躺着放在了休息室的沙发上。`);
    await era.printAndWait(`没过多久，数码就睁开了双眼。`);
    await chara_talk.say_and_wait(`嗯……嗯……诶？！`);
    await chara_talk.say_and_wait(`歌剧和怒涛？！你们怎么？`);
    await me.say_and_wait(
      `${chara_talk.sex}们非常担心你，所以也来到了休息室来看望你……倒不如说是一开始就在休息室里面了。`,
    );
    await chara15_talk.say_and_wait(`怎么这么突然？`);
    await chara15_talk.say_and_wait(
      `不是突然！是怒涛，说有一位能在各种舞台回旋的舞者，为了欣赏新的演员的诞生，所以，我来了。`,
    );
    await chara58_talk.say_and_wait(
      `唔唔唔，我非常感谢数码你的开导！因此，在这场比赛我也来给你加油了！`,
    );
    await chara15_talk.say_and_wait(
      `我们在比赛前就一直隐藏我霸王的气息，装作一般路过的观众来研究你！`,
    );
    await chara58_talk.say_and_wait(
      `因为怕我这种人在亮相圈搭话会影响到你……所以……`,
    );
    await chara_talk.say_and_wait(
      `不不不！怎么会影响呢，倒不如说是我的荣幸……原来一开始的异样感是这样啊。`,
    );
    await chara_talk.say_and_wait(
      `还有，我逐渐明白了，歌剧和怒涛啊，为什么这么耀眼华丽……`,
    );
    await chara_talk.say_and_wait(`终于……稍微……能接近了一些……`);
    await chara15_talk.say_and_wait(
      `哈哈哈！是吗？不过，果然还是因为我的华丽可是天生的啊！`,
    );
    await era.printAndWait(
      `好歌剧相当欣赏数码，而怒涛则是感谢数码对${chara_talk.sex}的鼓舞。`,
    );
    await me.say_and_wait(`你们应该来到这里，应该还有其他想说的吧？`);
    await era.printAndWait(`接着，${chara_talk.sex}们宣布了……`);
    await chara15_talk.say_and_wait(
      `我和怒涛，在接下来的宝冢纪念要进行初次的共演！`,
    );
    await chara58_talk.say_and_wait(
      `我，我终于也能出战G1了，虽然，只是在一个无人在意的角落……`,
    );
    await chara_talk.say_and_wait(
      `！初次的revue，我明白了！这下不得不去看了！`,
    );
    await chara15_talk.say_and_wait(
      `不过，你也应该有对应的节目吧？向我们展示你的全能才能！`,
    );
    await chara15_talk.say_and_wait(
      `你还未在泥地G1胜利过，没有这个的话，还不完整，是吧？`,
    );
    await me.say_and_wait(
      `接下来比较合适的泥地G1，是夏合宿期间的日本泥地达比。`,
    );
    await chara15_talk.say_and_wait(
      `不愧是训练员！那么，${chara_talk.name}，你要接受我们的邀请吗？`,
    );
    await chara_talk.say_and_wait(`我接受了！`);
    await era.printAndWait(
      `所以${chara_talk.sex}们做出约定，歌剧和怒涛在宝冢纪念中给予最盛大的比赛，而数码要在日本泥地达比中也要展示${chara_talk.sex}身为全能选手的本领。`,
    );
  } else if (
    extra_flag.race === race_enum.japa_dir &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('泥地德比胜利', chara_talk);
    await chara_talk.say_and_wait(
      `在这场比赛，与先前的草地比赛不同却又相同。`,
      true,
    );
    await chara_talk.say_and_wait(`唔噢噢噢噢噢噢噢！！！！`, true);
    await chara_talk.say_and_wait(
      `扬起的沙尘……看不清……但是感觉光辉……透过来了……`,
      true,
    );
    await chara_talk.say_and_wait(
      `即使是完全不同的赛道……她们都始终拥有着不渝的光辉……`,
      true,
    );
    await chara_talk.say_and_wait(`不能在这里，辜负她们的心啊！！！！`, true);
    await chara_talk.say_and_wait(`哈啊啊啊啊啊啊啊！`, true);
    era.drawLine();
    await era.printAndWait(
      `完赛了，数码真的很出色，在这场环境完全不同的赛道，也能取得这样优秀的成绩。`,
    );
    await me.say_and_wait(`感觉怎么样？`);
    await era.printAndWait(`数码，带着与以前完全不同的，认真的表情。`);
    await chara_talk.say_and_wait(`数码，${chara_talk.name}，我懂了。`);
    await me.say_and_wait(`嗯。`);
    await chara_talk.say_and_wait(
      `从儿时开始，就一直让我入迷的${chara_talk.get_uma_sex_title()}酱的尊……`,
    );
    await chara_talk.say_and_wait(
      `我知道了，在今天跑完『日本泥地达比』后，明白了。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}酱，可爱。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}酱，很尊。`,
    );
    await chara_talk.say_and_wait(
      `那么，${chara_talk.sex}们为何而可爱？${chara_talk.sex}们的哪里让我觉得伟大、无可救药地吸引着我？`,
    );
    await chara_talk.say_and_wait(
      `今天终于明白了，我喜欢的是你们『奋不顾身地为自己的梦想而拼搏』的样子啊！`,
    );
    await era.printAndWait(
      `咚咚咚地跺着脚，表达出数码${chara_talk.sex}终于明白的喜悦。`,
    );
    await chara_talk.say_and_wait(
      `明白了后，真想穿越回去暴揍过去以为『只有中央的草地G1才是特别的』我！`,
    );
    await me.say_and_wait(`哈哈，简直就是定番的感想啊。`);
    await chara_talk.say_and_wait(
      `喂喂喂，你早就知道的吧，${chara_talk.get_uma_sex_title()}酱们一直都是一样的。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.sex}们真的有想要的东西，想要成为的人，以那为目标，在拼命的努力着。`,
    );
    await era.printAndWait(
      `这种人，无论放在哪里，都是耀眼的，何况放在一起比赛呢？`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.sex}们全力互相联系，互相帮助……时而为同一个胜利斗争，但又不惧怕斗争，一直都在看着前方。`,
    );
    await chara_talk.say_and_wait(`在一切都尘埃落定后，一起贴贴！`);
    await me.say_and_wait(`嘛，又是定番剧情呢。`);
    await chara_talk.say_and_wait(`正是这种定番剧情，我的灵魂才会如此震撼啊！`);
    await chara_talk.say_and_wait(
      `虽然在出道之前一直都自以为是……但结果今天才……`,
    );
    await chara_talk.say_and_wait(`啊哇哇哇，真是……`);
    await chara_talk.say_and_wait(
      `歌剧和怒涛的那次比赛，现在回过头来，也总算懂了。`,
    );
    await era.printAndWait(`歌剧和怒涛的对决在宝冢上的光辉，让数码无比羡慕。`);
    await era.printAndWait(`而现在，数码终于也能够触碰到这束光芒。`);
    await chara_talk.say_and_wait(
      `如果在这样下去的话……不行！数码啊！要开始动起来！`,
    );
    await chara_talk.say_and_wait(
      `即使是我的话，我能做好觉悟，怀着纯粹的心情站在闸门前的话！`,
    );
    await chara_talk.say_and_wait(
      `训练员……我……即使是我……也能成为，这样的存在吗？！`,
    );
    era.printButton(`当然能！`, 1);
    await era.input();
    await era.printAndWait(`数码终于，在此刻，成为一名真正的选手。`);
  } else if (
    extra_flag.race === race_enum.mile_cha &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('英里冠军赛胜利', chara_talk);
    await era.printAndWait(
      `从最底层爬上来的圣王光环，数码将${chara_talk.sex}的生存战略从头到尾都看到了最后。`,
    );
    await chara61_talk.say_and_wait(
      `怎么样，数码桑？和我一起跑了这场重要比赛，理解了吧？`,
    );
    await chara61_talk.say_and_wait(
      `圣王光环是一个怎么样的${chara_talk.get_uma_sex_title()}。`,
    );
    await chara_talk.say_and_wait(`是……是的……`);
    await era.printAndWait(
      `被圣王光环教导了「${chara_talk.get_uma_sex_title()}为何物」的数码，在夺下英里冠军杯的胜利后泣不成声。`,
    );
    await era.printAndWait(
      `圣王光环的存在就是如此让${chara_talk.sex}深受感动。`,
    );
    await chara61_talk.say_and_wait(`怎么了？一直在哭，可是说不出来的哦。`);
    await chara_talk.say_and_wait(`全身……都沐浴到了光辉……`);
    await chara_talk.say_and_wait(
      `然后，我明白了，作为${chara_talk.get_uma_sex_title()}而活，意味着什么。`,
    );
    await chara_talk.say_and_wait(
      `不屈的奔跑中寄宿着灵魂！本能！无论准备是否完全，始终贯彻一流的气概！`,
    );
    await chara_talk.say_and_wait(
      `之前的我一直都无法理解，不过现在我明白了，只要奔跑就行！就连丧气话，也要边跑边说！`,
    );
    await chara_talk.say_and_wait(
      `我现在，更喜欢${chara_talk.get_uma_sex_title()}了！`,
    );
    await chara61_talk.say_and_wait(
      `呵呵，你真是喜欢${chara_talk.get_uma_sex_title()}呢。`,
    );
    await chara61_talk.say_and_wait(
      `数码，和更多${chara_talk.get_uma_sex_title()}比赛吧！吸收一切，然后……`,
    );
    await chara61_talk.say_and_wait(
      `成为真正的全能选手吧！毕竟，你就是你最喜欢的${chara_talk.get_uma_sex_title()}的一员啊！`,
    );
    await era.printAndWait(
      `圣王光环在最后，给予了数码祝福，愿数码在今后与更多${chara_talk.get_uma_sex_title()}对决，成为真正的「全能跑者」`,
    );
    era.drawLine({ content: '在地下通道时……' });
    await chara_talk.say_and_wait(
      `训练员，我的同志啊，我从圣王那里获得了无比珍贵的事物。`,
    );
    await chara_talk.say_and_wait(
      `需要和更多${chara_talk.get_uma_sex_title()}比赛，我需要做什么呢……`,
    );
    await era.printAndWait(`既然如此，不妨就……`);
    await era.printAndWait(`和数码决定了，接下来参加更多的G1赛事。`);
    await chara_talk.say_and_wait(
      `对的对的，还有，然后在之后，我要向歌剧和怒涛发起挑战！`,
    );
    await era.printAndWait(
      `一直以来仅是仰慕的数码，现在终于也能鼓起勇气，向以前的偶像发起挑战。`,
    );
  } else if (
    extra_flag.race === race_enum.tenn_sho &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('秋季天皇赏胜利', chara_talk);
    await era.printAndWait(`咚咚咚咚——`);
    await era.printAndWait(
      `在低沉的脚步声，你们逐渐逼近观众席，此时，意外地跑在外道的是——`,
    );
    await say_by_passer_by(
      `解说`,
      `${chara_talk.name}！是${chara_talk.name}！在雨中，在一片狼籍的草地上，从马群中钻了出来，选择了最好的道路！然后——！`,
    );
    await say_by_passer_by(
      `解说`,
      `冲线！用不可思议的跑法征服了天皇赏秋的是——${chara_talk.name}！`,
    );
    await era.printAndWait(
      `数码一直以来所积累的知识、技能以及情感，给予了数码这次最好的条件。`,
    );
    await era.printAndWait(
      `${chara_talk.sex}在泥泞的草地上，简直像是回到了老家一样，无论是道路选择还是最终加速，作为训练员的你也完全找不出任何不足之处。`,
    );
    await era.printAndWait(`数码不可动摇地拿下了胜利。`);
    await chara_talk.say_and_wait(`\n嘿嘿……咳咳咳……啊哈哈哈……`);
    await chara_talk.say_and_wait(`是，我的胜利吧。`);
    await era.printAndWait(`是的，是你的胜利，数码。`);
    await era.printAndWait(`数码转过身来，面向观众席。`);
    await chara_talk.say_and_wait(`唔噢噢噢噢噢噢噢噢噢噢噢噢噢！`);
    await say_by_passer_by(`观众席`, `唔噢噢噢噢噢噢噢噢噢噢噢噢噢！`);
    await chara_talk.say_and_wait(`嘿哇啊啊啊啊啊啊啊啊啊啊！`);
    await say_by_passer_by(`观众席`, `嘿哇啊啊啊啊啊啊啊啊啊啊！`);
    await chara_talk.say_and_wait(`噫！嘿！哦！噢噢噢噢噢噢！`);
    await say_by_passer_by(`观众席`, `噫！嘿！哦！噢噢噢噢噢噢！`);
    await era.printAndWait(`哈哈哈哈，喊得喉咙都有点哑了。`);
    await era.printAndWait(`而且跟一般的喊名字不同，该说真有数码的特色吗。`);
    await era.printAndWait(`大张着手跑到你跟前，隔着栏杆将你抱了起来。`);
    await chara_talk.say_and_wait(`训练员！未知的，是未知的景色啊！`);
    await chara_talk.say_and_wait(
      `在台上感受Call的力量！这感觉真的是绝无伦比啊！`,
    );
    await me.say_and_wait(`是啊！这是独属于数码你的Call，独一无二的Call！`);
    await chara_talk.say_and_wait(`黑船……我把胜利，从那两人夺过来了哦……`);
    await era.printAndWait(
      `无论${chara_talk.sex}是怀着悔恨还是悲伤，看到这场比赛，${chara_talk.sex}，想必也会感到解脱了吧。`,
    );
    await chara_talk.say_and_wait(
      `仅凭我自己，是无法做到的——我一直以来，都这么认为。所以我向推寄托了愿望……`,
    );
    await chara_talk.say_and_wait(`但是……`);
    era.printButton(`我的第一位推，就是你噢！`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `啊哈哈哈，诶嘿嘿嘿……训练员，居然现在说这话，可真是……我要，我要……`,
    );
    await chara_talk.say_and_wait(
      `给给给！给你杀必死！对对对，就是粉丝服务！训练员，想要我尾巴上的毛吗！`,
    );
    await era.printAndWait(
      `看起来数码已经高兴得已经在开始说有点意味不明的话了。`,
    );
    era.printButton(`到领奖台吧，大家在等着呢。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`哦哦哦，如此傲慢无礼，我差点忘了！`);
    await era.printAndWait(
      `一把把你从栅栏一边搬运过来，数码跟你来到了领奖台。`,
    );
    await chara_talk.say_and_wait(
      `\n多多多多，多谢！我是${
        chara_talk.name
      }！说到底我只不过是一个喜欢${chara_talk.get_uma_sex_title()}酱的……`,
    );
    await chara_talk.say_and_wait(
      `我只不过是追着${chara_talk.get_uma_sex_title()}酱的屁股……哦不，是尾巴，才来到这里的……`,
    );
    await chara_talk.say_and_wait(
      `能懂吗！这份感动！？我最一开始，甚至不能说是普通的${chara_talk.get_uma_sex_title()}酱，只是一个粉丝而已诶！`,
    );
    await chara_talk.say_and_wait(
      `但是，我能混杂在这份闪耀中，在这个尊景中，能在最前方冲线，真的是……感激不尽……`,
    );
    await chara_talk.say_and_wait(
      `之所以能够获胜，一定不是我自己的成果了，是与所有邂逅的人的结晶，`,
    );
    await chara_talk.say_and_wait(
      `一路以来的${chara_talk.get_uma_sex_title()}酱，最一开始认为自己不该会有的粉丝，还有训练员！`,
    );
    await chara_talk.say_and_wait(`今天，是大家让我拿下了胜利。`);
    await chara_talk.say_and_wait(`感激……真的是，非常，感激……`);
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}酱们，比起身为在粉丝的时候所想的${chara_talk.get_uma_sex_title()}酱……要耀眼百倍，千倍……`,
    );
    await era.printAndWait(`说着说着，数码已经开始介绍起了比赛的选手了。`);
    await chara_talk.say_and_wait(
      `看到了吗！英姿飒爽的短发，在猛然冲刺时的摇曳……`,
    );
    await chara_talk.say_and_wait(`那伴随着脚步晃动的包……`);
    await chara_talk.say_and_wait(
      `有，今天不能在场的黑船，如果能的话，总有一天，一定要一起跑在泥地上……`,
    );
    era.println();
    await era.printAndWait(`打开了话匣子，数码还在聊的时候……`);
    await say_by_passer_by(
      `工作人员`,
      `爱丽数码的训练员，很抱歉在这兴头上打断……胜者舞台……`,
    );
    await era.printAndWait(
      `啊啊啊啊，低头对着数码说几声，${chara_talk.sex}好像完全没注意到。`,
    );
    await era.printAndWait(`看来只能强行拉走了。`);
    await chara_talk.say_and_wait(`喂喂喂，训练员？`);
    await chara_talk.say_and_wait(`等等，至少请让我再说一句，我再说一句吧——`);
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}真是——太——棒——啦——！！！！`,
    );
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜', chara_talk);
    await chara_talk.say_and_wait(`咔哇哇哇哇！每个孩子都闪耀着最尊的光辉啊！`);
    await era.printAndWait(
      `赛后的数码精神得完全不像经历了一场大赛，一如既往地展现了${chara_talk.sex}的热情。`,
    );
    await chara_talk.say_and_wait(
      `能和${chara_talk.get_uma_sex_title()}酱一起比赛……真的是非常开心……！`,
    );
    await chara_talk.say_and_wait(`而且，还拿到了第一！真的要满含感激地收下！`);
    era.printButton(`你是最闪耀的哦！`, 1);
    era.printButton(`下次的比赛也要加油噢！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        `诶？这这这，怎可能？！这么多${chara_talk.get_uma_sex_title()}，我就只是像空气一般的存在……居然看着我吗？`,
      );
      await era.printAndWait(`这份娇羞也是见多了。`);
      await me.say_and_wait(`这不当然，你可是我的爱马啊！`);
      await chara_talk.say_and_wait(`呜呜呜……`);
      await chara_talk.say_and_wait(`被夸奖真的是难以平静下来呢……`);
      await era.printAndWait(`也当然每一次看都不厌。`);
    } else {
      await chara_talk.say_and_wait(
        `好！为了下次比赛也要照这个劲头，我要变得更强！Power！`,
      );
      await chara_talk.say_and_wait(
        `变得更强大，然后在更激烈的比赛中看到更加闪耀的${chara_talk.get_uma_sex_title()}酱！`,
      );
      await era.printAndWait(`就是这个势头！继续加油吧！`);
      await chara_talk.say_and_wait(`诶！诶！姆！`);
    }
  } else if (extra_flag.rank <= 5) {
    //通用比赛入着
    await print_event_name('竞赛上榜', chara_talk);
    await chara_talk.say_and_wait(
      `唔姆唔姆，原来如此，你们的闪耀，还是有点难以接近……`,
    );
    await era.printAndWait('没能获胜的数码，在赛后也没表现出太大的失落……');
    await chara_talk.say_and_wait(`呜……果然，我还是不该作为粉丝出现在这里的……`);
    await era.printAndWait(`喂喂喂。`);
    era.printButton(
      `这次，有没有欣赏到${chara_talk.get_uma_sex_title()}啊？`,
      1,
    );
    era.printButton(`下次争取在最前方欣赏${chara_talk.sex}们吧！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait('诶！对诶！数码，可！');
      await me.say_and_wait('(这是什么意思？)');
    } else {
      await chara_talk.say_and_wait(
        '没能获胜的数码，在赛后也没表现出太大的失落……',
      );
      await era.printAndWait('总之，数码打起了精神！');
    }
  } else {
    throw new Error();
  }
};

handlers[event_hooks.out_church] = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 19) {
    add_event(event_hooks.out_church, event_object);
    return;
  }
  const chara32_talk = get_chara_talk(32),
    chara46_talk = get_chara_talk(46),
    chara36_talk = get_chara_talk(36),
    edu_weeks = era.get('cflag:19:育成回合计时');
  if (edu_weeks === 95 + 1) {
    await print_event_name('新年参拜', chara_talk);
    await chara_talk.say_and_wait(
      `神啊！今年就不用什么周边了，请给我劲敌就好！`,
    );
    await era.printAndWait(
      `天呐！居然让数码说出这番话，${chara_talk.sex}受到了什么刺激？！`,
    );
    await me.say_and_wait(`数码？为什么突然说这个？`);
    await era.printAndWait(
      `数码告诉你，在之前一段时间，歌剧明白指出，数码，缺少劲敌。`,
    );
    await chara_talk.say_and_wait(
      `唔，就如之前好歌剧的说法，我目前还不够强大的原因是……`,
    );
    await era.printAndWait(`劲敌。`);
    await era.printAndWait(
      `数码缺少劲敌，作为一名训练员，你清楚竞争对手可以给${chara_talk.get_uma_sex_title()}带来多少动力和鼓舞。`,
    );
    await era.printAndWait(
      `但是数码的情况又过于特殊，${
        chara_talk.sex
      }所具备的那种特性，那种对${chara_talk.get_uma_sex_title()}纯粹的喜欢也能给${
        chara_talk.sex
      }带来与竞争对手相似的效果。`,
    );
    await era.printAndWait(`数码真的需要劲敌吗？`);
    await chara_talk.say_and_wait(
      `唔唔唔，以前因为不想过分干涉，所以别说什么劲敌了，数码在赛场上跟对手都没怎么交流，现在后果来了吗……`,
    );
    await era.printAndWait(
      `不过趁这次机会让数码跟其他${chara_talk.get_uma_sex_title()}交涉一下也挺好。`,
    );
    await me.say_and_wait(`那就去寻找劲敌吧！`);
    await era.printAndWait(`所以……`);
    await chara36_talk.say_and_wait(`哈？劲敌？早点歇吧。`);
    await chara_talk.say_and_wait(`等等的说！正好是同期，这不是恰好吗`);
    await chara36_talk.say_and_wait(
      `那个啊，数码，其他的我不好说，我觉得至少我不合适，就这样。`,
    );
    era.drawLine();
    await chara46_talk.say_and_wait(`诶？劲敌吗？感觉不太符合偶像的形象呢～`);
    await chara_talk.say_and_wait(
      `不不不，偶像里面，不都是有一个那种对手，然后在互相对决的过程中又互相帮助的感觉吗？`,
    );
    await chara46_talk.say_and_wait(
      `啊哈哈，飞鹰子好像只能做个${chara_talk.get_uma_sex_title()}小偶像呢，不适合那种……不过，十分感谢数码碳的邀请！`,
    );
    era.drawLine();
    await chara32_talk.say_and_wait(
      `哼哼……劲敌吗……但数码你作为一个研究对象，不对吧，不符合我的理念！`,
    );
    await chara_talk.say_and_wait(`……这样吗。`);
    await era.printAndWait(
      `被各种原因拒绝了几次的数码，即使是${chara_talk.sex}，耳朵都有点耷拉了。`,
    );
    await chara32_talk.say_and_wait(
      `不要这么消沉嘛，数码君，还有你，训练员君，你应该清楚的吧？能成为数码劲敌的人选。`,
    );
    await era.printAndWait(
      `用其独特的眼睛盯着你，爱丽速子抬了下下巴朝你示意。`,
    );
    await chara_talk.say_and_wait(
      `诶诶诶！训练员，你知道吗？能成为我劲敌的人选？`,
    );
    await me.say_and_wait(`的确如此。`);
    await chara_talk.say_and_wait(`那为什么不一开始就告诉我？`);
    await era.printAndWait(`数码急的都快要往你身上锤了。`);
    await chara32_talk.say_and_wait(
      `看起来，那人也有自己的打量，数码君，接下来就是无趣的解答了，再见。`,
    );
    await era.printAndWait(`速子看了下场面，很识趣地离开了现场。`);
    await me.say_and_wait(
      `事实上，一方面是在你开始找才知道的，另一方面，我也有想要去了解的地方……`,
    );
    await me.say_and_wait(`所以，最终我得出的结论就是：你的劲敌，就是大家！`);
    await chara_talk.say_and_wait(
      `大家……！也就是说DD箱推都可以吗？！等等，也就是之前的……`,
    );
    await era.printAndWait(
      `是的，是在看到今天数码在找的人才想到的，数码找的人既有擅长草地，也有擅长泥地的${chara_talk.get_uma_sex_title()}，就如一开始的那般……`,
    );
    await me.say_and_wait(`只选一个什么的，是做不到的。`);
    await me.say_and_wait(
      `无论选谁，都不会有像数码那般，可以在两种赛道上奔跑的选手，但是，如果是……`,
    );
    await chara_talk.say_and_wait(`大家……`);
    await me.say_and_wait(`对的。`);
    await chara_talk.say_and_wait(`哈哈哈哈，没想到，又是大家呢。`);
    await chara_talk.say_and_wait(
      `圣王的话，『和更多${chara_talk.get_uma_sex_title()}一起比赛』我一定能够达成！`,
    );
    await chara_talk.say_and_wait(
      `大家作为劲敌，这么一想，还挺贪心的……我可以从大家那里获得什么呢？`,
    );
    await era.printAndWait(`\n你决定：`);
    era.printButton(`养分`, 1);
    era.printButton(`友情力量`, 2);
    era.printButton(`多样性`, 3);
    const ret = await era.input();
    if (ret === 1) {
      await me.say_and_wait(`要说的话，那就是养分吧`);
      await chara_talk.say_and_wait(
        `对的！${chara_talk.get_uma_sex_title()}酱们，各自的美味之处，每次都给予我元气！`,
      );
      await chara_talk.say_and_wait(
        `每天，都有新鲜的口粮！没有比这更好的燃料了！`,
      );
      await era.printAndWait(
        `在之后${chara_talk.get_uma_sex_title()}们一定会给数码带来更多的活力吧。`,
      );
      await era.printAndWait(
        [
          { content: `${chara_talk.name} 的 ` },
          ...sys_change_attr_and_print(19, '体力', 200),
        ],
        { isList: true },
      );
    } else if (ret === 2) {
      await me.say_and_wait(`没错，就是友情！POWER！`);
      await chara_talk.say_and_wait(
        `哦吼吼，只要每个${chara_talk.get_uma_sex_title()}酱们给我一点力量，我就是无敌的！`,
      );
      await chara_talk.say_and_wait(
        `哼哼，唔哈哈哈，只是想想，就已经感到全身充满了力量了！`,
      );
      await era.printAndWait(
        `与那个每人给一马币还是有点不一样的，数码肯定能从${chara_talk.get_uma_sex_title()}处得到力量，变得更强。`,
      );
      get_attr_and_print_in_event(19, [5, 5, 5, 5, 5], 0);
    } else {
      await me.say_and_wait(`多样性，没错吧！`);
      await chara_talk.say_and_wait(
        `当然！${chara_talk.get_uma_sex_title()}酱的奔跑，其多样性，不仅仅是平日所描定的跑法所能框定的！`,
      );
      await chara_talk.say_and_wait(
        `就像收集UMAMO图鉴那样，全部都记录下来吧！`,
      );
      await era.printAndWait(
        `是全收集类玩家吗，数码在这场游戏肯定能得到技能吧！`,
      );
      get_attr_and_print_in_event(19, [0, 0, 0, 0, 0], 30);
    }
  }
  era.set('cflag:19:节日事件标记', 0);
};

/**
 *
 * 爱丽数码的育成事件
 *
 * @author 片手虾好评发售中！
 *
 * @param {HookArg} hook
 * @param {Record<string,any>} extra_flag
 * @param {EventObject} event_object
 * @returns {Promise<*>}
 */
module.exports = async (hook, extra_flag, event_object) => {
  if (!handlers[hook.hook]) {
    throw new Error('');
  }
  return await handlers[hook.hook](hook, extra_flag, event_object);
};
