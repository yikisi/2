const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const { say_by_passer_by } = require('#/utils/chara-talk');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const AgEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-19');
const { location_enum } = require('#/data/locations');

const chara_talk = new CharaTalk(19);

module.exports = async function () {
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
      await say_by_passer_by(
        `？？？`,
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
        `即便实力衰退，但是，圣王光环那“一流”的精神，不屈的意志，从来没有衰减。`,
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
        `摆出一脸“不可能”表情的数码，要说是以前的话那的确如此……`,
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
