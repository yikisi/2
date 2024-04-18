const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const { attr_names, fumble_result } = require('#/data/train-const');
const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_random_value } = require('#/utils/value-utils');

/** @type {Record<string,function(HookArg,*,EventObject):Promise<*>>}*/
const handlers = {};

handlers[
  event_hooks.week_start
] = require('#/event/edu/edu-events-32/week-start');
handlers[event_hooks.week_end] = require('#/event/edu/edu-events-32/week-end');
handlers[
  event_hooks.race_start
] = require('#/event/edu/edu-events-32/race-start');
handlers[event_hooks.race_end] = require('#/event/edu/edu-events-32/race-end');

handlers[
  event_hooks.crazy_fan_end
] = require('#/event/edu/edu-events-32/crazy-fan-end');

handlers[event_hooks.train] = async function () {
  const love = era.get('love:32'),
    motivation = era.get('cflag:32:干劲'),
    relation = era.get('relation:32:0');
  const tachyon = get_chara_talk(32);
  if (love < 75) {
    if (relation < 75) {
      //todo 干劲不调、绝不调
      if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        await print_event_name(`燃烧不完全`, tachyon);
        era.println();
        await tachyon.say_and_wait(`今天的目标……是……`);
        era.println();
        await era.printAndWait(`你忧心的看着爱丽速子的模样`);
        await era.printAndWait(
          `今天的她依然在尝试着为了突破极限而进行的实验，也可以称之为，训练`,
        );
        await era.printAndWait(
          `倘若她的体力充足，只是状态不好，那你必然会狠下心来将其推向实验吧，因为有时严厉的举止也是必要的`,
        );
        await era.printAndWait(
          `倘若她的体力不足，但状态出奇良好，那你在思考过后也会尝试让她继续进行锻炼吧，`,
        );
        await era.printAndWait(
          `毕竟就如前辈训练员们说过的，贴近马娘的心灵才是身为训练员最重要的工作`,
        );
        await era.printAndWait(`但是……`);
        era.println();
        await era.printAndWait(
          `对于体力明显不支，状态也心不在焉的她，你真的能够狠下心来吗？`,
        );
        era.printButton(`……继续吧`, 1);
        era.printButton(`……休息吧`, 2);
        const ret1 = await era.input();
        if (ret1 === 1) {
          await era.printAndWait(
            `为了爱丽速子的目标及梦想……以及，自己的一点点私心`,
          );
          await era.printAndWait(`你看着速子现在的模样`);
          await era.printAndWait(
            `从被汗水浸湿的运动服透出的雪白肌肤，与奔跑时沾在衣服上的泥点，`,
          );
          await era.printAndWait(
            `形成了显著的对比，紧紧贴合的运动服更凸显了她的姣好身材`,
          );
          await era.printAndWait(
            `圆润的胸部及臀部，加上因疲惫而发出的喘息和泛红的脸颊，明明只是训练，却不住使人产生遐想`,
          );
          await era.printAndWait(
            `要是能够将那不停弹跳的圆球当成自己的东西在手里尽情揉捏的话`,
          );
          await era.printAndWait(
            `要是能用唇舌堵住那张平常总对自己爱搭不理的小嘴，使其只能发出娇嫩喘息的话`,
          );
          await era.printAndWait(
            `这样的想法，以一名训练员，以一名成熟的大人来说，绝对是不应允许的行为吧`,
          );
          await era.printAndWait(
            `但是，以身为男性的立场而言，内心的欲望却不允许你提出反对`,
          );
          await era.printAndWait(
            `虽然犹豫，虽然不舍，但你还是装作没发现她的不适，让她继续训练`,
          );
          await era.printAndWait(
            `……不知是不是发现了你内心的龌龊，又或者只是对训练的继续感到不满，爱丽速子没说什么，却瞪了你一眼`,
          );
          //todo 爱丽速子 的 好感度 -10
        }
        await era.printAndWait(`身为训练员，不合理的过度训练也是应该避免的`);
        await era.printAndWait(`你在爱丽速子跑完一圈后，马上喊了停`);
        era.println();
        await tachyon.say_and_wait(
          `……结束？实验才刚开始不是吗，还有很多今天要完成的对比实……实验……啊……`,
        );
        await era.printAndWait(
          `她的强硬话语只说了一半便坚持不下去，忍不住发出了低吟`,
        );
        await era.printAndWait(
          `谁能想得到呢，只是轻轻按压了下小腿内侧，往来如此强硬的小嘴竟然会发出如此诱人的声音`,
        );
        await era.printAndWait(
          `当然，你的按压并没有神奇到能让人立即发春，这一切的主因还是在速子自己`,
        );
        await era.printAndWait(
          `你扶着已经瘫软的速子，轻轻按压她已经有些发肿的小腿`,
        );
        era.println();
        await tachyon.say_and_wait(`……嗯……呀……这样……不行……住手……啊嗯……`);
        era.println();
        await era.printAndWait(`她的小嘴不住发出令人沉醉的娇吟`);
        await era.printAndWait(
          `雪白的肌肤已经有些红肿，每次按压着不同的地方，她都会发出令人遐想的声音，`,
        );
        await era.printAndWait(
          `彷佛你在做的这些并非是健全的按摩，而是某些更邪恶，下流的行为`,
        );
        await era.printAndWait(
          `在神圣的赛场上做这样的事情，当然不免会引起他人的关注，`,
        );
        await era.printAndWait(
          `不知不觉间，一些还在锻炼的小马娘们也被速子的娇吟吸引过来`,
        );
        era.println();
        await tachyon.say_and_wait(`等…豚鼠…咿…不可以……有人……啊啊～～♡`);
        era.println();
        await era.printAndWait(`你置若罔闻的按压着`);
        await era.printAndWait(
          `速子的腿，比你想象中的还要娇嫩纤细，轻轻握在手里的感觉使你有了一种掌握了她的生杀大权的错觉`,
        );
        await era.printAndWait(
          `要是能在床上，看着她不甘却还是忍不住发出呻吟的模样，抓着她的双腿将其分开，那带来的征服感想必是胜过世间一切的吧`,
        );
        era.println();
        await tachyon.say_and_wait(`……！那边不可以！`);
        era.println();
        await era.printAndWait(`不知不觉间，有些起劲的你向上摸到了大腿`);
        await era.printAndWait(`速子用力将双腿抽回时的力道唤醒了你的理智，`);
        await era.printAndWait(
          `提醒你眼前的少女，实际上是力量大过于成年男性三倍的马娘`,
        );
        await era.printAndWait(`你连忙向她道歉`);
        era.println();
        await tachyon.say_and_wait(
          `……我，我知道了……今天，就先到这里吧……我，我需要休息一下……`,
        );
        await era.printAndWait(
          `速子语速飞快的说完这些后便起身要回到实验室，但随即便被失力感导致瘫软在你怀中`,
        );
        await era.printAndWait(
          `此时你们二人看上去的模样哪里像是正常训练中的训练员及马娘，`,
        );
        await era.printAndWait(
          `倒不如说是扑在男友怀中的撒娇女友，及温柔的将她拥在怀中的男伴`,
        );
        await era.printAndWait(
          `被他人所惧的疯狂科学家，此时却小鸟依人的靠在你怀里`,
        );
        await era.printAndWait(`对此你忍不住产生了一种自豪及骄傲感`);
        era.println();
        await tachyon.say_and_wait(`……带我回实验室，现在，马上`);
        era.println();
        await era.printAndWait(`但随即，科学家的瞪视却使你变回了听话的豚鼠`);
        await era.printAndWait(
          `于是，你们两人在周围马娘们的半是佩服半是羡慕的目光中，缓缓走回了实验室`,
        );
        //todo 本轮禁止训练 爱丽速子的状态 上升
      } else if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`那么，开始实验吧。`);
              break;
            case 1:
              await tachyon.say_and_wait(
                `快点，去准备纪录实验数据，不要分心了。`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`哼……`);
              await era.printAndWait(
                `速子没有说话，但你看得出她身上满溢的干劲。`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `你在慢什么，还不快去准备纪录实验数据，敢出什么差错我剥了你的皮。`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `方向发生错误了吗……为什么……明明体力充沛，却完全没有能够超越极限的自信……。`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`……最近你提出的实验，越来越无趣了啊`);
              await era.printAndWait(`速子用危险的眼神看着你。`);
              break;
          }
        }
      } else if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`……开始实验吧。`);
              await tachyon.say_and_wait(
                `累？没这回事，我有预感，这一次，这一次一定能够突破瓶颈……`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(`必须更快……咕……身体无法……动弹……。`);
              break;
            case 2:
              await tachyon.say_and_wait(
                `开什么玩笑……突破极限的首要条件就是抵达极限。`,
              );
              await tachyon.say_and_wait(
                `还要更快，要是连极限都无法抵达……那还谈什么超越极限……！`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`今天的目标……是……`);
              break;
            case 1:
              await tachyon.say_and_wait(
                `方向发生错误了吗……为什么……明明体力充沛，却完全没有能够超越极限的自信……。`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`……最近你提出的实验，越来越无趣了啊`);
              await era.printAndWait(`速子用危险的眼神看着你。`);
              break;
          }
        }
      }
    } else if (relation < 225 && relation > 75) {
      if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`豚鼠君！开始我们的研究吧！`);
              break;
            case 1:
              await tachyon.say_and_wait(
                `状态绝佳！今天绝对能跑出堪比普朗克时间的纪录出来！`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `直到超越光速！直到抵达可能性的彼方！`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`……无趣啊`);
              await era.printAndWait(`爱丽速子喃喃自语道。`);
              break;
            case 1:
              await tachyon.say_and_wait(
                `豚鼠君……我认为实验的灵感是很重要的，成功虽说是99%的努力加上1%的灵感，`,
              );
              await tachyon.say_and_wait(
                `但没有1%的灵感无论努力了99%还是99.99%都是一样毫无用处，你明白我的意思吗？`,
              );
              await tachyon.say_and_wait(
                `不，我不是为了翘掉训练才这么说的，这只是在陈述一件事实，`,
              );
              await tachyon.say_and_wait(
                `但既然你提到了这个话题，那我们也可以顺带代入进去来看，所以今天的训练……`,
              );
              await era.printAndWait(`你摇了摇头`);
              await tachyon.say_and_wait(`切`);
              await era.printAndWait(`爱丽速子啧了一声`);
              break;
            case 2:
              await tachyon.say_and_wait(
                `训练？今天的实验都还没做完不是吗？唉……罢了，等我做完实验之后就去`,
              );
              await era.printAndWait(
                `最后，在速子来训练前你等了足足三个小时，直到太阳下山她才出现在训练场上`,
              );
              break;
          }
        }
      } else if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `哈啊哈啊……体力？没问题，今天一定能够突破……哈啊，哈啊……`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `直到极限……在体力的极限才能见到真正的突破！`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `理性在告诉我自己需要休息了，但感性却怎么也不想停下来……真是幸福的烦恼啊，哈哈哈！`,
              );
              break;
          }
        }
      }
    } else if (relation < 525 && relation > 225) {
      if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 1)) {
            case 0:
              await tachyon.say_and_wait(
                `快快快！时间不等人的！今天的实验数据起码可以水五篇论文！接下来两个月的研究经费都可以不用愁了！`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `训练？没问题，但是有个条件，豚鼠君，今天你也来一起并跑吧？`,
              );
              await tachyon.say_and_wait(
                `没问题没问题，现在你的身体素质如果短时间爆发已经能够跑出不输给马娘的速度了……`,
              );
              await tachyon.say_and_wait(
                `没问题没问题，嗯，短时间的话，大概……五秒内？`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `训练？又是跑操场啊……我说，豚鼠君，能不能来点更有趣的训练啊？`,
              );
              await tachyon.say_and_wait(
                `比如……药剂俄罗斯轮盘赛？先各喝五管随机效果的药然后开始比赛？`,
              );
              await tachyon.say_and_wait(
                `先找到能够配合的马娘？茶座君……欸，不行吗？`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `我说啊豚鼠君，我们冷静分析，这样每天锻炼的效率真的会比研究高吗？`,
              );
              await tachyon.say_and_wait(
                `什么？我的特殊事件触发一次也就+5，哪来的自信跟锻炼比的？`,
              );
              await tachyon.say_and_wait(
                `不是，等等，豚鼠君你在说什么……我怎么听不懂……`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `欸……训练好麻烦，要跑你自己上去跑不就好了`,
              );
              await tachyon.say_and_wait(
                `乖孩子什么的……我说豚鼠君，你不会是把我当成小孩子了吧？`,
              );
              await tachyon.say_and_wait(
                `不过嘛……偶尔去跑一下也不是什么坏事，大概。`,
              );
              break;
          }
        }
      } else if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        switch (get_random_value(0, 2)) {
          case 0:
            await tachyon.say_and_wait(
              `豚鼠君……我看见光了……再努力，再努力一定能追上……就在前面……`,
            );
            break;
          case 1:
            await tachyon.say_and_wait(`豚鼠君…给我……药……快点……我快撑不住了…`);
            await tachyon.say_and_wait(
              `啊，没错没错，就是这个就是这个，没有这个我怎么活啊……`,
            );
            await tachyon.say_and_wait(
              `嗯？说话方式很奇怪？不就是普通的营养剂而已吗？有什么奇怪的？像嗑多了？只有脑袋里都塞了那种东西的人才会想歪啦`,
            );
            break;
          case 2:
            await tachyon.say_and_wait(`……呼`);
            await tachyon.say_and_wait(`双腿？没问题`);
            await tachyon.say_and_wait(
              `再说，就算出了问题也无妨吧，毕竟就算双腿再也无法奔跑，你也会跟着我的吧？`,
            );
            await tachyon.say_and_wait(
              `虽然是实话，但还是不想看到受伤？哎呀呀，那该怎么办呢～～`,
            );
            break;
        }
      }
    }
  } else if (love > 90) {
    if (relation > 75) {
      if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `走吧走吧，豚鼠君～～快点开始我们今天的实验吧`,
              );
              await tachyon.say_and_wait(`……还是说，要我喊你，亲爱的❤`);
              break;
            case 1:
              await tachyon.say_and_wait(`豚鼠君～～今天的训练可不能马虎哦`);
              await tachyon.say_and_wait(
                `为什么？真是……连最基础的生物常识都不懂吗`,
              );
              await tachyon.say_and_wait(
                `母体的锻炼不足，可是会影响到后代的健康的❤`,
              );
              await tachyon.say_and_wait(
                `为了备孕，可千万不能手下留情哦，孩子他爸❤`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `状态很好？呵呵，只要和豚鼠君在一起，无论哪一天我的状态都是一样好哦`,
              );
              await tachyon.say_and_wait(`……当然，其他方面的状态也是❤`);
              break;
          }
        }
      }
    }
  } else if (love > 75) {
    if (relation > 75) {
      if (era.get('base:32:体力') > era.get('maxbase:32:体力') * 0.8) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(`豚鼠君……我在思考一件事`);
              await tachyon.say_and_wait(
                `最近训练的时候，只要一想到豚鼠君你在看着我，就觉得特别有动力`,
              );
              await tachyon.say_and_wait(
                `嗯……爱情的影响吗，是个不错的研究课题，下次来试试不同爱情表现的变量下会导致的训练结果差别吧`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `豚鼠君，今天我这么难得的有干劲想训练，对这样的爱马，你不觉得应该有些什么奖励才对呢`,
              );
              await tachyon.say_and_wait(
                `……训练结束？我说，我可等不了那么久啊`,
              );
              await tachyon.say_and_wait(`唔……咕啾……啾噜……啾啵……啾……啾咕`);
              await tachyon.say_and_wait(
                `呼……姑且算你及格了，剩下的，训练结束之后再继续吧❤`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(
                `有种说法，训练员就是将马娘『驯服』的存在，因此驯服的驯才是马字旁，也因此驯和训的读音如此相近`,
              );
              await tachyon.say_and_wait(
                `如果是这样的话，那么把这样的我给驯服了的训练员君，今天希望我做些什么呢❤`,
              );
              break;
          }
        } else {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `欸欸～～居然要强迫状态不好的爱人利用身体来取悦自己吗？`,
              );
              await tachyon.say_and_wait(
                `……豚鼠君，真没想到你居然是这种人呢……哭哭……`,
              );
              await tachyon.say_and_wait(
                `啧啧，只是玩笑而已，何必认真呢……不过要是你想玩过分一点的玩法，我也不介意哦❤`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(
                `训练？不如好好做实验……今天的实验都没做完呢，急什么`,
              );
              await tachyon.say_and_wait(
                `嗯？不客气了？呵呵，有什么办法就用上来吧，我拭目以待`,
              );
              await tachyon.say_and_wait(
                `等……公主抱什么的……这也太让人害羞了……`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`训练？嗯……喝了今天的药再说吧`);
              await tachyon.say_and_wait(
                `全身发热？意识模糊？没事没事，这是正常现象`,
              );
              await tachyon.say_and_wait(`嗯哼……时间应该差不多了，`);
              await tachyon.say_and_wait(
                `那么，今天的药是引动雌性激素雄性激素皮质醇生长激素加压素达到平均以上水平的药物，或者通俗一点来讲的话，就是媚药哦❤`,
              );
              await tachyon.say_and_wait(`训练什么的，等结束之后再说吧❤`);
              // todo 无钢之意志
              await era.printAndWait(
                `在速子的诱惑下，你将她扑倒在实验室里的小床里……`,
              );
              // todo 上床，本次事件跳过

              // todo 存在钢之意志
              era.printButton(`别闹了，快点去训练`, 1);
              await era.input();
              await era.printAndWait(`你靠着学习到的钢之意志撑住了诱惑`);
              await tachyon.say_and_wait(`这也可以的吗！？`);
              await era.printAndWait(
                `你不顾吐槽的速子，把她硬抱到了训练场上。`,
              );
              break;
          }
        }
      } else if (era.get('base:32:体力') < era.get('maxbase:32:体力') * 0.45) {
        if (motivation >= 0) {
          switch (get_random_value(0, 2)) {
            case 0:
              await tachyon.say_and_wait(
                `呼……偶尔认真的流流汗也不错啊，休息？现在状态这么好，休息也太可惜了。`,
              );
              await tachyon.say_and_wait(
                `等，豚鼠君，你在做什么……不要闻啊……现在很臭的……`,
              );
              await tachyon.say_and_wait(
                `我，我知道了……我回去休息，所以别闻了……`,
              );
              await tachyon.say_and_wait(
                `什么叫可以继续啊！？豚鼠君，你……真的是变态啊`,
              );
              await tachyon.say_and_wait(
                `真是，不过会因此而感到兴奋的我，绝对也是变态无误了❤`,
              );
              break;
            case 1:
              await tachyon.say_and_wait(`体力不支，需要休息？`);
              await tachyon.say_and_wait(
                `……那还不是因为某人前几天……我的腰到现在都还在痛……`,
              );
              await tachyon.say_and_wait(
                `喂！……真是，腰还在痛只是比喻啦……大惊小怪的……就那么担心我吗❤`,
              );
              break;
            case 2:
              await tachyon.say_and_wait(`哈啊……哈啊……`);
              await tachyon.say_and_wait(
                `没什么，耐力用尽什么的，还早得很呢！`,
              );
              await tachyon.say_and_wait(
                `不过……要是真的受不了了，就麻烦你帮我补充『精』力了，豚鼠君❤`,
              );
              break;
          }
        }
        /*
        //todo 每个回合20%机率触发5选一
        await tachyon.say_and_wait(`哦呀，豚鼠君，来得正好，这是今天的药`);
        era.println();
        await era.printAndWait(
          `爱丽速子递了瓶发出(深/浅)(红/橙/黄/绿/蓝/靛/紫/灰/银/金)/七彩 的药水给你`,
        );
        era.println();
        await era.printAndWait(`你二话不说喝下药水`);
        switch (get_random_value(0, 4)) {
          case 0:
            await era.printAndWait(`你喝下药水后忽然感觉喉咙很痒`);
            await era.printAndWait(`忍不住想咳嗽，没想到一咳出来的却是火星`);
            era.println();
            await tachyon.say_and_wait(`哦呀哦呀，看来龙息药水的效果很好啊`);
            era.println();
            await era.printAndWait(
              `速子一脸高兴的记录着实验数据，却没预料到接下的后果，咳出的火星落到了她身旁的实验纪录上`,
            );
            era.println();
            await tachyon.say_and_wait(
              `怎么…………有股烧焦味……………我的实验数据！！？？`,
            );
            era.println();
            await era.printAndWait(
              `她连忙开始挽救那些还没烧着的实验纪录，你想上前帮忙，但喉咙实在痒的不行`,
            );
            era.println();
            await tachyon.say_and_wait(`咳咳！！`);
            era.println();
            await era.printAndWait(
              `在药效消失前，速子只是不停的跑来跑去抢救着资料`,
            );
            //todo 速子的速度 增加 5 速子的心情，下降1级
            break;
          case 1:
            era.println();
            await era.printAndWait(
              `你喝下药水后感觉眼睛看出去的世界忽然变得清楚了许多，`,
            );
            await era.printAndWait(
              `但你不禁开始怀疑那是不是迷幻药一类的东西，因为你的眼前开始看见了一些奇怪的东西`,
            );
            era.println();
            await tachyon.say_and_wait(
              `哦？看来有什么效果的样子？这是我根据茶座君说的看见另一个世界的感觉制造出来的灵视药剂`,
            );
            era.println();
            await era.printAndWait(
              `她到底做了什么出来！这已经跨越正常化学领域了吧！？`,
            );
            era.println();
            await tachyon.say_and_wait(
              `顺便，要是你现在能看见的话，帮我看看我身上吧`,
            );
            era.println();
            await era.printAndWait(`你听见这句话，下意识看向了速子`);
            await era.printAndWait(`随即，你的意识瞬间停止了运作`);
            era.println();
            await tachyon.say_and_wait(
              `昨天缠着茶座君的时候好像不小心把她惹毛了，从昨天回来之后就觉得身体好沉重……`,
            );
            era.println();
            await era.printAndWait(
              `你看见，有某个黑影用双手压在了爱丽速子的肩上`,
            );
            await era.printAndWait(
              `黑影似乎察觉到了你的视线，伸出手指在可能是脸的部分比了一个嘘的手势`,
            );
            await era.printAndWait(`接下来，你感觉自己什么也说不出口了`);
            era.println();
            await tachyon.say_and_wait(
              `………奇怪，真的没什么吗，为什么感觉身体这么重`,
            );
            era.println();
            await era.printAndWait(
              `速子没注意到你的不对，喃喃自语说完后走出了房间`,
            );
            await era.printAndWait(
              `此时你才总算能够大口呼吸，那个黑影，到底是什么………`,
            );
            era.println();
            await era.printAndWait(
              `顺带一提，隔天速子就恢复正常了，看来或许只是茶座的稍加惩戒而已吧`,
            );
            //todo 速子的耐力 增加了5
            break;
          case 2:
            await era.printAndWait(`你喝下药后忽然感觉身体无比僵硬`);
            await era.printAndWait(
              `你惊恐的发现现在的自己全身上下除了嘴和脑袋其他所有地方都无法动弹了`,
            );
            era.println();
            await tachyon.say_and_wait(
              `哎呀………原本是想做能够增强身体抗打击力的药剂，结果变成类似石化的效果了吗………`,
            );
            era.println();
            await era.printAndWait(`你没有功夫理会速子的实验后感想`);
            await era.printAndWait(`妳的心情十分着急`);
            await era.printAndWait(`拼命想移动身体却动弹不得`);
            await era.printAndWait(
              `接下来还有一场关于训练场时间分配的会议，要是今天没法出席之后一个月训练场都没得使用了`,
            );
            await era.printAndWait(`你将事情的严重性告诉了速子`);
            await era.printAndWait(`她也感到大事不妙`);
            era.println();
            await tachyon.say_and_wait(
              `要是没法上训练场怎么确认我药剂的效果！？`,
            );
            era.println();
            await era.printAndWait(
              `总之，姑且不论原因为何，现在的当要之急是把你送到会议室去`,
            );
            await era.printAndWait(`速子努力将你抬起，要送到会议室去`);
            await era.printAndWait(
              `不知为何喝下了药剂后你的身子变得特别沉重，就连速子用马娘的力气想将你托起都耗费了好大一番功夫`,
            );
            await era.printAndWait(
              `最后好不容易，总算将你抬到会议室，并且为了被人发现不对，速子在旁全程陪同参加会议`,
            );
            era.println();
            await era.printAndWait(
              `在那天之后，不知为何学园里开始流传起速子和你的绯闻`,
            );
            await say_by_passer_by(`路人马娘A`, `据说是用公主抱抱去参加会议的`);
            await say_by_passer_by(
              `路人训练员A`,
              `会议上也全程陪同，帮忙端茶递水，完全就是贤内助的模样`,
            );
            await say_by_passer_by(
              `路人马娘B`,
              `没想到那个爱丽速子也恋爱了啊…………`,
            );
            era.println();
            await era.printAndWait(`……………为什么会产生这样的绯闻呢`);
            await era.printAndWait(
              `以及，为什么听到这样的绯闻后，速子的脸仿佛有点红的样子`,
            );
            //todo 速子的力量 增加了5
            // 速子的心情 提升了1级
            break;
          case 3:
            await era.printAndWait(
              `药水在你喝下之前便爆出了粉色的浓雾，将你和速子包裹在雾中`,
            );
            era.println();
            await tachyon.say_and_wait(`咳咳！怎么回事！？`);
            era.println();
            await era.printAndWait(
              `你摇头表示自己不知道，说到底连药的效果是什么都不知道的你怎么可能会知道这是怎么回事`,
            );
            era.println();
            await tachyon.say_and_wait(
              `明明只是普通的精力药而已……算了，先把窗户跟门打开让雾气散掉`,
            );
            era.println();
            await era.printAndWait(`速子连忙到窗前想要开窗散气，然而`);
            era.println();
            await tachyon.say_and_wait(`咕，身体提不起劲……！`);
            era.println();
            await era.printAndWait(
              `这段期间，你一直端坐在椅子上，哪都没去，这并非是因为你内心的余裕，`,
            );
            await era.printAndWait(
              `而是因为你下半身的兄弟已经高高立起/下面已经泛滥成灾`,
            );
            await era.printAndWait(
              `你想起了速子说的精力药，一般而言的精力药指的……都是针对那方面的药吧`,
            );
            await era.printAndWait(
              `为什么速子会做那样的药，你的内心感到疑惑，但现在不是思考这些的时候了，因为……`,
            );
            era.println();
            await tachyon.say_and_wait(`豚鼠君……我的身体……好热……`);
            era.println();
            await era.printAndWait(
              `爱丽速子用变成爱心状的双眼看着你，眼中流露出一丝恐慌，以及更多的情欲`,
            );
            await era.printAndWait(`看见她的模样，你……`);
            // todo 若速子未有过性经验或者好感<225、爱慕<75
            era.println();
            await era.printAndWait(`不行，她是你的负责马娘，你不能做这种事`);
            await era.printAndWait(
              `你冷静的拒绝了她，幸好，速子看上去也维持着一定的冷静`,
            );
            era.println();
            await tachyon.say_and_wait(
              `没事的……这个药的药效最多也就一个小时……只要撑过一个小时就……`,
            );
            await era.printAndWait(
              `你们没有再多说什么，你和瘫软着身子坐在地上的她默默的等待时间过去`,
            );
            era.println();
            await era.printAndWait(
              `你拼命的忍耐着，但目光还是忍不住移向了速子的方向`,
            );
            era.println();
            await era.printAndWait(
              `速子的全身大汗淋漓——想来你也应是如此——由于白大褂遮掩的关系，衣服并未透出什么不该吐露的东西`,
            );
            era.println();
            await era.printAndWait(
              `然而，终究百密一疏，原本大上一号的白大褂，却在汗水的湿润下呈现出了十分贴合速子身材的曲线，`,
            );
            await era.printAndWait(
              `从圆润的股丰及丰内深邃的沟槽，到胸前不算太大却十分坚挺的山峰，都清晰的描绘在你的眼中`,
            );
            era.println();
            await tachyon.say_and_wait(`豚鼠君……`);
            era.println();
            await era.printAndWait(
              `速子似乎注意到你的视线了，有些责怪的喊了一声，`,
            );
            await era.printAndWait(
              `但在情欲的感染下这一声豚鼠君都带上了娇媚的色彩，你连忙道歉了一声后收回视线`,
            );
            era.println();
            await era.printAndWait(`忍耐，忍耐，忍耐`);
            await era.printAndWait(
              `总算，药效逐渐消退，速子艰难的站起身来，抛了句今天就到这里后仓皇的离开了训练员室……`,
            );
            await era.printAndWait(
              `你晃了晃头，希望将今天发生的这些摇出脑袋，但速子那姣好的身材依然留存于你的脑海中，无法忘怀……`,
            );
            era.println();
            await era.printAndWait(
              `顺带一提，事后你问了速子，得知了那种精力药是供应给校内某秘密商店的，`,
            );
            await era.printAndWait(
              `据说这才是她研究资金的主要来源，要是在校园里多逛逛的话说不定能找到……？`,
            );
            // todo 速子的根性+10 训练员的根性+10(?)
            // 速子的爱慕值+5
            break;
          case 4:
            await era.printAndWait(
              `你喝下药剂后，全身忽然发出了光芒，你感到有些惊恐，却发现速子依然一幅兴奋的样子`,
            );
            era.println();
            await tachyon.say_and_wait(`快，把衣服脱了`);
            era.println();
            await era.printAndWait(`这个家伙在说什么！？`);
            await era.printAndWait(
              `是变态吗！？是特雷森最近流行的女骚扰犯吗！？`,
            );
            await era.printAndWait(
              `你连忙抓紧了自己的衣服，但人类终究还是敌不过马娘的力量，在长达三秒的挣扎后，你的衣服在拉扯间被撕了开来`,
            );
            era.println();
            await era.printAndWait(
              `无力抵抗的你闭上了双眼，无法反抗那就只能享受了，来吧，别怜惜我是朵娇花！`,
            );
            era.println();
            await tachyon.say_and_wait(`…………原来如此，原来如此`);
            era.println();
            await era.printAndWait(
              `等待了许久都没有等到你所期待发生的那种事，你瞧瞧睁开了眼睛，`,
            );
            await era.printAndWait(
              `却看到速子正盯着你的身体念念有词，一边在记录本上写着什么`,
            );
            era.println();
            await era.printAndWait(
              `你将视线移回自己身上，发现自己的身体确实正发着光，但发光的部位都有着一定的规律性，看上去就好像…………`,
            );
            era.println();
            await tachyon.say_and_wait(
              `原来人类的身体具体是这样运作的……但是……和马娘之间的区别…………`,
            );
            era.println();
            await era.printAndWait(
              `你听见速子喃喃自语的声音后察觉，这依然是为了探讨马娘的奥秘而展开的实验`,
            );
            await era.printAndWait(`你不禁为自己肤浅的想法感到有些不好意思`);
            era.println();
            await tachyon.say_and_wait(
              `好，今天就先观察到这吧，我先回去做实验了，豚鼠君你记得把衣服穿上！`,
            );
            era.println();
            await era.printAndWait(
              `速子纪录完后飞快的离开了训练员室，留下你一个人在训练员室里`,
            );
            await era.printAndWait(
              `你看着地上已经不能称作是衣服的那堆碎片，心想着到底是该趁着夜色漆黑跑回家，还是麻烦同事帮你拿件衣服过来`,
            );
            //todo 速子的智力 增加了5
            break;
        }*/
      }
    }
  }
};

/**
 * @param {HookArg} hook
 * @param {{train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_success] = async (hook, extra_flag) => {
  const tachyon = get_chara_talk(32);
  era.print(
    `${tachyon.name} 的 ${attr_names[extra_flag.train]} 训练顺利成功了……`,
  );
  if (Math.random() < 0.9 * extra_flag.stamina_ratio) {
    const me = get_chara_talk(0);
    await print_event_name('额外的自主训练', tachyon);

    await era.printAndWait(`在${tachyon.name}的训练结束后。`);

    await tachyon.say_and_wait(
      `喂喂，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，待会有空吗？`,
    );

    await tachyon.say_and_wait(
      '我在雨天兜风的时候，在这种天气跑步应该会很开心。',
    );

    await tachyon.say_and_wait(
      '溅起的水花、雨中朦胧的视野……这种时候好像可以感受到别具一格的风。',
    );

    await tachyon.say_and_wait(
      '今天我不是跑得非常有干劲吗！我觉得就这样结束练习有点可惜呢♪',
    );

    await tachyon.say_and_wait(`在雨中奔跑感觉也不错哦♪`);

    await tachyon.say_and_wait(`这种程度的雨，跟晨浴差不多吧。`);

    await tachyon.say_and_wait('不过现在应该说是傍晚浴才对吧……？');

    await tachyon.say_and_wait('我的身体还火热得不得了啊。');

    await tachyon.say_and_wait(
      `说不定现在才是我发挥作用的时候？${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }又是怎么想的呢？`,
    );
    era.printButton('「我知道了，那就跑吧。」', 1);
    era.printButton('「还是先不跑吧！」', 2);
    hook.arg = (await era.input()) === 1;
    if (hook.arg) {
      await tachyon.say_and_wait(
        `就是这样！我今天要跑一整晚哦。呵呵，天空好像也很高兴呢。`,
      );

      await tachyon.say_and_wait(`那就出发吧，走向风的世界。`);
      await era.printAndWait('于是额外训练，就在雨中不断持续下去了。');
    } else {
      await tachyon.say_and_wait('哎呀，真可惜。');
      await tachyon.say_and_wait('难得有这种机会的……！');
      await tachyon.say_and_wait(
        '不过这也是没办法的事情呢。毕竟体力的保存也很重要嘛……！',
      );
      await tachyon.say_and_wait('而且害训练员感冒的话，那就伤脑筋了呢。');
      await tachyon.say_and_wait(
        `虽然讨价还价也不好，不过${me.name}陪我去雨里兜风吧，就我们两个哦♪`,
      );
      era.println();
      await era.printAndWait(
        `雨天兜风虽然让我们精疲力尽，不过${tachyon.name}却似乎十分享受。`,
      );
    }
    era.println();
  }
};

/**
 * @param {HookArg} hook
 * @param {{fumble:boolean,train:number,stamina_ratio:number}} extra_flag
 */
handlers[event_hooks.train_fail] = async (hook, extra_flag) => {
  const love = era.get('love:32'),
    relation = era.get('relation:32:0'),
    tachyon = get_chara_talk(32);
  extra_flag['args'] = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  if (extra_flag.fumble) {
    await print_event_name('严禁逞强！', tachyon);
    /* todo 德比前一周
    await chara_talk.say_and_wait(`这样的话，还是放弃吧`);
    await chara_talk.say_and_wait(`没关系的，因为有备用计画……`);
    await chara_talk.say_and_wait(`虽然不甘心，但……`, true);
    await me.say_and_wait(`速子！没事吧！`);
    await chara_talk.say_and_wait(`……为什么这么着急呢`);
    await chara_talk.say_and_wait(
      `如果，真的没有相信我的梦想的人那也罢了`,
      true,
    );
    await chara_talk.say_and_wait(`但是……只有他，他的期待……`, true);
    await chara_talk.say_and_wait(
      `算了，再努力看看吧……看看这具身体，还能支撑到哪一步为止`,
    );
*/
    /* todo 德比后
    await me.say_and_wait(`速子！没事吧！`);
    await chara_talk.say_and_wait(`……不能啊`);
    await chara_talk.say_and_wait(`已经不能回头了`);
    chara_talk.print(`他的支持，让我走到了这一步`);
    chara_talk.print(`要是自己现在抽身，那可真是天大的笑话了`);
    chara_talk.print(`为了相信我的人……再坚持下去吧`);
  */
    /* todo PlanB 第二年十二月后
      await me.say_and_wait(`这样的话，还是放弃吧`);
      await chara_talk.say_and_wait(`反正，茶座君也已经成长起来了不是吗？`);
      await chara_talk.say_and_wait(`虽然很遗憾，但……`);
      await me.say_and_wait(`速子！没事吧！`);
      await chara_talk.say_and_wait(`……为什么这么着急呢`);
      await chara_talk.say_and_wait(
        `如果，真的没有相信我的梦想的人那也罢了`,
        true,
      );
      await chara_talk.say_and_wait(`但是……只有他，他的期待……`, true);
      await chara_talk.say_and_wait(
        `算了，再努力看看吧……看看这具身体，还能支撑到哪一步为止`,
      );
  */
    await tachyon.say_and_wait(`好痛`);
    await tachyon.say_and_wait(`好可怕`);
    await tachyon.say_and_wait(`果然……我的极限就是……`);
  } else {
    if (love > 50) {
      await print_event_name('保重身体！', tachyon);
      switch (get_random_value(0, 1)) {
        case 0:
          await tachyon.say_and_wait(`嗯～～豚鼠君，来帮我按摩一下～～`);
          await tachyon.say_and_wait(`要……那种按摩哦❤`);
          break;
        case 1:
          await tachyon.say_and_wait(`好痛……豚鼠君`);
          await tachyon.say_and_wait(`不，脚应该没事……`);
          await tachyon.say_and_wait(`但是，某人的下半身有没有事就不知道了`);
          await tachyon.say_and_wait(
            `为什么在看到我脱袜子时，忽然弯下腰了呢❤`,
          );
          await tachyon.say_and_wait(`要是有伤就不好了……让我看看吧❤`);
          break;
      }
    } else if (relation < 225) {
      await print_event_name('保重身体！', tachyon);
      switch (get_random_value(0, 2)) {
        case 0:
          await tachyon.say_and_wait(`咕……还是太勉强了吗？`);
          break;
        case 1:
          await tachyon.say_and_wait(`腿……无法动弹`);
          await tachyon.say_and_wait(`实验失败了啊……`);
          break;
        case 2:
          await tachyon.say_and_wait(`我的极限……就只有这样了吗`);
          break;
      }
    } else if (relation < 525) {
      await print_event_name('保重身体！', tachyon);
      switch (get_random_value(0, 2)) {
        case 0:
          await tachyon.say_and_wait(`豚鼠君……好痛……`);
          break;
        case 1:
          await tachyon.say_and_wait(
            `……没有关系，只是一时失败而已……重头再来实验……`,
          );
          break;
        case 2:
          await tachyon.say_and_wait(`咕嘶……豚鼠君……我，我没事。`);
          await tachyon.say_and_wait(`只要，休息一下……哈啊。`);
          break;
      }
    } else if (relation > 525) {
      await print_event_name('保重身体！', tachyon);
      switch (get_random_value(0, 2)) {
        case 0:
          await tachyon.say_and_wait(`起不来了……豚鼠君，背我～～`);
          break;
        case 1:
          await tachyon.say_and_wait(`腿好重……豚鼠君，回去帮我按摩一下……`);
          break;
        case 2:
          await tachyon.say_and_wait(
            `哼哼，区区一次实验失败而已，你不会以为这样就能把我击倒了吧，豚鼠君`,
          );
          break;
      }
    }
  }
};

handlers[event_hooks.out_start] = async (hook, event_object) => {
  if (era.get('flag:当前互动角色') !== 32) {
    add_event(hook.hook, event_object);
    return;
  }
  const love = era.get('love:32'),
    tachyon = get_chara_talk(32),
    event_marks = new TachyonEduMarks();
  if (event_marks.different_opinion === 1) {
    event_marks.different_opinion++;
    await print_event_name(`拆台`, tachyon);
    await era.printAndWait(`今天是你和速子一起出门约会的日子`);
    await era.printAndWait(
      `据说今天的商店街有魔术游行，所以原本是希望带${tachyon.sex}来顺便看看热闹的`,
    );
    await era.printAndWait(`然而……`);
    era.println();
    await tachyon.say_and_wait(`那个魔术棒在他袖子里`);
    await tachyon.say_and_wait(`那只鸽子前面都藏在夹层里，没什么大不了的`);
    await tachyon.say_and_wait(
      `不过是镁的氧化燃烧而已，在实验室我也能做给你看`,
    );
    era.println();
    await era.printAndWait(
      `每次魔术的手法都会瞬间被速子用不大不小，但却足以让人听清的音量揭穿`,
    );
    await era.printAndWait(
      `如果说是觉得无聊也就算了，偏偏每次说完后都会热烈的盯着你，仿佛希望得到夸奖一般`,
    );
    await era.printAndWait(
      `是什么想要得到夸奖的小狗吗……你将脑袋里浮现的画面甩出脑袋`,
    );
    await era.printAndWait(
      `总之，在瞪视着自己二人的魔术师受不了冲下台打人前先带着速子离开吧`,
    );
    era.println();
    await tachyon.say_and_wait(`欸～～这么快就要走了吗？`);
    era.println();
    await era.printAndWait(`然而，速子似乎还有些不满意`);
    await era.printAndWait(
      `得先找点什么东西来转移${tachyon.sex}的注意力才行……有了！`,
    );
    era.printButton(`变色蔬菜汁？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `你故作讶异的唸出外面摊位的主打品，希望能转移速子的注意力`,
    );
    await era.printAndWait(
      `只见摊贩老板将手上的紫色液体倒入杯子，瞬间液体变成了红色`,
    );
    await era.printAndWait(`……这不是中学课本酸碱反应的紫色甘蓝菜汁吗`);
    await era.printAndWait(`不管了，为了吸引速子的注意力，只能装一下了`);
    era.printButton(`看起来好厉害！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(
      `果不其然，你夸张的声调成功将速子从魔术表演上拉了回来`,
    );
    await tachyon.say_and_wait(`………………`);
    era.println();
    await era.printAndWait(`速子盯着甘蓝菜汁变色的模样，心中似乎在思考些什么`);
    await era.printAndWait(`奇怪，难道速子没看过吗？`);
    await era.printAndWait(
      `……不，再怎么说也不会吧，毕竟这算是最基础的酸碱指示剂才对，速子不可能不知道`,
    );
    await era.printAndWait(`但假如，${tachyon.sex}真的没接触过的话……`);
    era.printButton(`看起来好神奇……的样子？`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`不行，想不到有什么能够夸奖的话了`);
    await era.printAndWait(`但速子的注意力看起来也完全转移过来了`);
    await era.printAndWait(`这样的话应该就没有问题……`);
    era.println();
    await tachyon.say_and_wait(`…………这种东西`);
    era.println();
    await era.printAndWait(`欸`);
    era.println();
    await tachyon.say_and_wait(`…………你宁愿夸奖这种东西，也不愿意夸我吗？`);
    era.println();
    await era.printAndWait(`速子生气了`);
    await era.printAndWait(`虽然不知道原因是什么，但速子明显的生气了`);
    era.println();
    await tachyon.say_and_wait(`明明要更多颜色的药甚至发光的我都能做出来的……`);
    era.println();
    await era.printAndWait(`速子莫名其妙的哭了`);
    await era.printAndWait(`你只能慌忙的安慰起${tachyon.sex}`);
    era.println();
    await era.printAndWait(`隔天，速子做了包含256RGB色彩的药剂出来`);
    await era.printAndWait(`……到底是怎么做到把256种颜色在同种药剂里分割排列的`);
    await era.printAndWait(`豚鼠君不禁感到了疑惑`);
  } else if (event_marks.hot_spring_event === 1) {
    event_marks.hot_spring_event++;
    if (event_marks.plan_b === 0) {
      await print_event_name(`薛定鄂的超光速粒子`, tachyon);
      await tachyon.say_and_wait(`对了，这么说起来，还有这个东西啊……`);
      await tachyon.say_and_wait(
        `感觉浪费了也不好，怎么样，豚鼠君？要一起去吗？`,
      );
      era.println();
      await era.printAndWait(`在偶然整理实验室时`);
      await era.printAndWait(`你们发现了被藏在某个角落的信封袋`);
      if (love > 75) {
        await era.printAndWait(`嗯……？`);
        await era.printAndWait(`不知道为什么，总觉得违和感十分重`);
        await era.printAndWait(`你仔细观察了一下，随即发现端倪`);
        await era.printAndWait(
          `明明是大扫除时被发现的，信封看起来却完全没有任何褶皱痕迹，甚至感觉还被人好好的收藏着`,
        );
        await era.printAndWait(`联想到是速子『找』出来的，你大致猜到了真相`);
        era.println();
        await tachyon.say_and_wait(`嗯？豚鼠君？怎么了吗？`);
        era.println();
        await era.printAndWait(`……还是别说出来吧`);
        await era.printAndWait(
          `不然，速子恼羞成怒事小，问题在${tachyon.sex}恼羞成怒之后晚上自己绝对不会好受`,
        );
      }
      era.println();
      await era.printAndWait(
        `你们来到的温泉旅店，就商店街的活动标准来看，算是相当豪华的场所`,
      );
      await era.printAndWait(`独间的温泉池，日式的标准客房，甚至还有怀石料理`);
      await era.printAndWait(
        `不如说……一般商店街的抽奖真的会准备如此豪华的大奖吗？`,
      );
      await era.printAndWait(
        `难不成……其实一开始就是有人安排过的，只是借这个机会提供给${tachyon.get_uma_sex_title()}和训练员？`,
      );
      era.println();
      await era.printAndWait(`你坐在温泉池内，胡思乱想着一些无边无际的事情`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？我进去了哦～～`);
      era.println();
      await era.printAndWait(
        `忽然，负责${tachyon.get_uma_sex_title()}在门外的呼喊将你的神智唤回`,
      );
      await era.printAndWait(`你下意识的回答了请便后才想起现在自己正在泡汤`);
      await era.printAndWait(`现在要遮挡自己已经来不及了—————`);
      await era.printAndWait(
        `你连忙将身体完全缩进了温泉中，希望能靠着温泉的雾气稍微遮蔽一些不该被看到的部位`,
      );
      //todo if 已和速子有性经验
      await tachyon.say_and_wait(
        `豚鼠君—————怎么这么害羞的缩着身体呢？明明都已经看过那么多次了`,
      );
      //todo if 还未和速子有过性经验
      await tachyon.say_and_wait(
        `豚鼠君—————怎么这么害羞的缩着身体呢？明明实验的时候都全看光过了`,
      );
      era.println();
      await era.printAndWait(`虽然这么说，但速子的语气其实也有些拘谨`);
      await era.printAndWait(`与光着身子的你不同，速子的身上围了一层浴巾`);
      await era.printAndWait(`${tachyon.sex}自顾自的进了温泉，朝着你靠了过来`);
      await era.printAndWait(`随后坐在你的身旁，一脸放松的依偎着你`);
      era.println();
      await tachyon.say_and_wait(`总算……URA也结束了啊`);
      await tachyon.say_and_wait(`偶尔，像这样放松一下也不错呢`);
      era.println();
      await era.printAndWait(`${tachyon.sex}满足的叹了口气`);
      await era.printAndWait(
        `仿佛刚完成了一件大案子的社畜，在酒会上猛灌了口啤酒后吐出的那口气一般`,
      );
      await era.printAndWait(
        `说不清到底是解放感，成就感，可能……还有淡淡的，自己都找不到原因的失落感？`,
      );
      await era.printAndWait(`回想这三年，你和速子确实一起达到了许多成就`);
      await era.printAndWait(`三冠的道路，对情感的研究课题，与茶座的激战……`);
      await era.printAndWait(`还有更多更多，值得一提，或者不值一提`);
      await era.printAndWait(`这三年的重量，让你不由得也和速子一样吐出了叹息`);
      era.println();
      await era.printAndWait(
        `接下来的时间，你们二人谁也没说话，只是互相依偎着`,
      );
      await era.printAndWait(
        `此时的你才发觉，身旁的${tachyon.sex}身体是如此娇小`,
      );
      await era.printAndWait(
        `此时不是什么天才${tachyon.get_uma_sex_title()}，也不是疯狂科学家`,
      );
      await era.printAndWait(
        `${tachyon.sex}也不过是一名普通的${tachyon.get_teen_sex_title}而已`,
      );
      era.println();
      await era.printAndWait(`热烟缭绕的温泉中，静静享受着片刻宁静的两人`);
      await era.printAndWait(
        `对熟知麻烦制造者${tachyon.name}，以及助纣为虐的其负责训练员的人来说，这想必是难以置信的画面吧`,
      );
      await era.printAndWait(`但此时，两人便是如此沉浸于此`);
      era.drawLine();
      await tachyon.say_and_wait(`豚鼠君，你知道，薛定鄂的猫吗？`);
      era.println();
      await era.printAndWait(`忽然，速子打破了这份沉默`);
      await era.printAndWait(`薛定鄂的猫……？`);
      era.printButton(`不知道`, 1);
      era.printButton(`知道`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(
          `薛定鄂的猫，最早是薛定鄂用以反驳量子力学而提出的假想实验，`,
        );
        await tachyon.say_and_wait(
          `令人讽刺的是，现在却变成了用以诠释量子力学的最佳代表`,
        );
        await tachyon.say_and_wait(
          `简单来说，就是将放射性物质、会被放射线触发的毒气开关，以及猫放在完全隔绝外界的箱子中`,
        );
        await tachyon.say_and_wait(
          `没有人知道放射性物质何时会衰变生成放射线，`,
        );
        await tachyon.say_and_wait(
          `换言之，没有人知道开关究竟会不会触发，在打开箱子前，猫会同时处于死亡和生存的叠加状态`,
        );
      } else {
        await tachyon.say_and_wait(
          `关于这个实验，如今各种学派都有各自的想法，但万变不离其宗的……你知道，这个实验中最重要的是什么吗？`,
        );
      }
      era.printButton(`……猫？`, 1);
      era.printButton(`……毒气？`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(
        `哈哈，确实，要是没有这些的话实验根本是无法成立的……不过，都不对哦`,
      );
      era.println();
      await era.printAndWait(
        `忽然，速子从温泉里站起身来，面对着你，与你双目相对`,
      );
      await era.printAndWait(`那酒红色的眼眸如久酿的蜜泉一般，令人沉醉`);
      await era.printAndWait(
        `忽然你有些好奇，这样的${tachyon.sex}也曾经评价过自己拥有一双疯狂的眼睛`,
      );
      await era.printAndWait(
        `那么现在，从${tachyon.sex}的眼眸中看见的又是什么呢？`,
      );
      era.println();
      await tachyon.say_and_wait(`答案是—————『观测者』`);
      await tachyon.say_and_wait(
        `无论猫是死是活，这都只是『可能』，是无限接近，却无法定型的可能性`,
      );
      await tachyon.say_and_wait(
        `只有在加入了观测后，可能性才能彻底定型，化为无论生死的结果`,
      );
      era.println();
      await era.printAndWait(`换言之`);
      await era.printAndWait(
        `${tachyon.name}伸出手，好似想要触碰你的眼睛，却又有些颤抖，怕一不小心伤害到你`,
      );
      await era.printAndWait(
        `你主动抓住了${tachyon.sex}的手，缓慢，却稳当的朝着自己的双眼靠近`,
      );
      era.println();
      await tachyon.say_and_wait(`你，就是我的观测者`);
      await tachyon.say_and_wait(`是将${tachyon.name}的可能性固定的人`);
      await tachyon.say_and_wait(`是决定了此刻的${tachyon.name}的人`);
      await tachyon.say_and_wait(
        `在这场实验中，你才是研究者，而我，不过是被你放进箱子里的猫而已`,
      );
      era.println();
      await era.printAndWait(`轻轻的，碰到了`);
      await era.printAndWait(`没什么特殊的感觉，除了眼珠被触碰的刺痛感`);
      await era.printAndWait(`但速子仿佛这样就满足了一般，主动收回了手`);
      era.println();
      await tachyon.say_and_wait(`今后的实验……还请多多指教`);
      await tachyon.say_and_wait(`我亲爱的，教授君`);
      await tachyon.say_and_wait(`等会出去，不要忘记我给你准备的礼物哦`);
      era.println();
      await era.printAndWait(`说完后，速子便先上了岸`);
      era.println();
      await tachyon.say_and_wait(
        `对了，今天的药我加在冰镇牛奶里了，要记得喝哦`,
      );
      era.println();
      await era.printAndWait(
        `…………最起码，会帮自己准备冰牛奶，这也算是一种成长吗？`,
      );
      await era.printAndWait(
        `你一边思考着近似于被PUA的人会有的想法，一边决定在温泉里再多泡一会`,
      );
      //todo 结束后获得道具，[用途不明的眼镜]
    } else {
      await print_event_name(`其他的可能性`, tachyon);
      await tachyon.say_and_wait(`对了，这么说起来，还有这个东西啊……`);
      await tachyon.say_and_wait(
        `感觉浪费了也不好，怎么样，豚鼠君？要一起去吗？`,
      );
      era.println();
      await era.printAndWait(`在偶然整理实验室时`);
      await era.printAndWait(`你们发现了被藏在某个角落的信封袋`);
      if (love > 75) {
        await era.printAndWait(`嗯……？`);
        await era.printAndWait(`不知道为什么，总觉得违和感十分重`);
        await era.printAndWait(`你仔细观察了一下，随即发现端倪`);
        await era.printAndWait(
          `明明是大扫除时被发现的，信封看起来却完全没有任何褶皱痕迹，甚至感觉还被人好好的收藏着`,
        );
        await era.printAndWait(`联想到是速子『找』出来的，你大致猜到了真相`);
        era.println();
        await tachyon.say_and_wait(`嗯？豚鼠君？怎么了吗？`);
        era.println();
        await era.printAndWait(`……还是别说出来吧`);
        await era.printAndWait(
          `不然，速子恼羞成怒事小，问题在${tachyon.sex}恼羞成怒之后晚上自己绝对不会好受`,
        );
      }
      era.println();
      await era.printAndWait(`正好，现在该忙的事也差不多忙完了`);
      await era.printAndWait(`茶座的URA总决赛也已经结束`);
      await era.printAndWait(`有机会就一起去吧`);
      era.drawLine();
      await era.printAndWait(`坐了将近十多个小时的车后`);
      await era.printAndWait(`你和速子总算抵达了温泉旅馆`);
      era.println();
      await tachyon.say_and_wait(`呼……总算到了啊`);
      await tachyon.say_and_wait(`我说……我们真的没走错吧`);
      era.printButton(`……地图写的确实是这里没错`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`也不免你们会有些迟疑`);
      await era.printAndWait(
        `此处两人所在的地方，是称之为原始森林也不为过的深山`,
      );
      await era.printAndWait(`这种地方，真的会有温泉吗……`);
      era.println();
      await tachyon.say_and_wait(
        `我找找……等一下，为什么这里连讯号都没有啊！？`,
      );
      era.println();
      await era.printAndWait(`你掏出手机来看，深山裏确实毫无讯号`);
      await era.printAndWait(`这下……可不妙了`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……要不，我们回去吧`);
      era.println();
      await era.printAndWait(`正当你也想着打退堂鼓的时候`);
      await era.printAndWait(`在拨开一层树丛，出现在眼前的赫然是一座温泉旅馆`);
      era.drawLine();
      await era.printAndWait(`你和速子在前台登记入住后，你便马上进了露天温泉`);
      await era.printAndWait(
        `在还未完全回暖的冬天，坐了十几个小时的车后又跋山涉水，真的把人累坏了`,
      );
      await era.printAndWait(
        `但在深山也不是没有好处，整间旅馆除了自己两人外就没有其他的客人了，可以说是一人独占整间旅馆的状态`,
      );
      await era.printAndWait(`因此，此时泡的温泉格外使人舒畅`);
      era.println();
      era.printButton(`……嗯？`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`这时更衣室的门帘响起了有人的声音`);
      await era.printAndWait(`嗯？才说完没人的，结果就有其他人来了吗？`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？你在里面吗？`);
      era.println();
      await era.printAndWait(`……啊？`);
      era.printButton(`速……速子！？`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`哦哦，你在啊，那么我就直接进来了`);
      era.println();
      await era.printAndWait(
        `说完后，${tachyon.sex}不等你回应便推开了更衣间的门走了进来`,
      );
      await era.printAndWait(
        `……看见${tachyon.sex}身上裹着浴巾的模样，你的心中不知是庆幸还是失望`,
      );
      era.println();
      await tachyon.say_and_wait(
        `哈哈哈！那种表情，你以为我会光着身体进来吗？`,
      );
      await tachyon.say_and_wait(`再怎么说那种常识我也还是有的`);
      era.println();
      await era.printAndWait(
        `虽然语气上仿佛在逗自己玩，但你总觉得${tachyon.sex}似乎有些什么话想说`,
      );
      era.println();
      await tachyon.say_and_wait(
        `我刚刚和柜台的老板娘聊了会……${tachyon.sex}啊，完全不知道我是谁`,
      );
      await tachyon.say_and_wait(
        `或者说不知道赛${tachyon.get_uma_sex_title()}${tachyon.name}是谁`,
      );
      era.println();
      await era.printAndWait(`仿佛怕你误会，速子连忙补充了一句`);
      await era.printAndWait(
        `认不出速子或许可以理解，毕竟不是每个人都对${tachyon.get_uma_sex_title()}的比赛热衷到记得每一名选手的模样`,
      );
      await era.printAndWait(
        `但不认识赛${tachyon.get_uma_sex_title()}的${
          tachyon.name
        }……不认识拿下了世界最高峰，凯旋门赏冠军的${tachyon.get_uma_sex_title()}，在这个世界上确实稀奇`,
      );
      await era.printAndWait(
        `但想想这里是如此偏远的旅馆，忽然又觉得大概也算正常了`,
      );
      era.println();
      await tachyon.say_and_wait(
        `说真的，挺令人吃惊啊……居然会有人真的，完全不知道，不认识……`,
      );
      era.println();
      await era.printAndWait(`你等着速子继续说下去`);
      await era.printAndWait(
        `虽然确实也让你震惊了一下，但${
          tachyon.name
        }也不是那种好名利的${tachyon.get_uma_sex_title()}，名声这种东西更可以说是${
          tachyon.sex
        }最不在乎的东西之一了`,
      );
      await era.printAndWait(`特别提出这个，想必是有什么其他的理由吧`);
      //todo  圣诞节选择选项2较多
      era.println();
      await tachyon.say_and_wait(`你还记得圣诞节那天的事吗？`);
      era.println();
      await era.printAndWait(`圣诞节……你想起了那间小居酒屋`);
      await era.printAndWait(`赛场的世界好像真的与其毫无相干`);
      await era.printAndWait(`没有比赛，这些人的人生也一样在运转着`);
      await era.printAndWait(`此时此刻，恰如彼时彼刻`);
      await era.printAndWait(`……当时自己对速子提出的可能性是拒绝的`);
      await era.printAndWait(
        `因为当时的${tachyon.sex}只是为了逃避而选择离开赛场`,
      );
      await era.printAndWait(`那，现在呢？`);
      await era.printAndWait(`你默默等待着速子将话说完`);
      era.println();
      await era.printAndWait(`坐在岸边的${tachyon.sex}不发一语`);
      await era.printAndWait(`在月光下看起来是无比的寂静，宛如身处画中`);
      await era.printAndWait(
        `这是但凡认识${tachyon.sex}，认识${
          tachyon.name
        }这名${tachyon.get_uma_sex_title()}的人都难以想像的`,
      );
      await era.printAndWait(`${tachyon.name}，竟然会与宁静这个词如此般配`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……那天的回答，你还没给我吧`);
      await tachyon.say_and_wait(`这样的可能性，是可以存在的吗？`);
      await tachyon.say_and_wait(
        `不停追寻可能性的科学家，某天忽然觉得累了，没有任何契机，`,
      );
      await tachyon.say_and_wait(
        `只是觉得差不多够了，接下来的道路，交给后来的人吧……`,
      );
      await tachyon.say_and_wait(`只想与自己重视的，重视自己的人一起生活……`);
      await tachyon.say_and_wait(
        `你不觉得，对这种人而言……这样的地方，就很适合吗？`,
      );
      era.println();
      await era.printAndWait(`没有人认识${tachyon.name}的地方`);
      await era.printAndWait(`不需要继续探索可能性`);
      await era.printAndWait(
        `可以停下来歇歇脚，或者……就这么在此过着平安喜乐的生活`,
      );
      await era.printAndWait(`这样的可能性……`);
      era.printButton(`听起来……挺不错的`, 1);
      era.printButton(`或许……再思考看看吧`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……呵呵`);
      era.println();
      await era.printAndWait(`对你的回答，速子没有多说什么`);
      await era.printAndWait(
        `${tachyon.sex}用脚滑绕着水面，在水上荡出层层水波`,
      );
      await era.printAndWait(`忽然，风起，你听见整个森林又活了起来`);
      await era.printAndWait(`树叶沙沙落下，夜晚安眠的鸟雀被惊醒呱呱乱飞`);
      await era.printAndWait(
        `夜晚的寂静，仿佛因为${tachyon.sex}这一时的搅乱而被瞬间打破`,
      );
      era.println();
      await era.printAndWait(`这样的${tachyon.sex}，真的能过上那样的生活吗？`);
      await era.printAndWait(
        `想到无论能与不能会带来的可能性，让你忽然有些兴奋`,
      );
      await era.printAndWait(
        `不过，无论能与不能，自己都必然陪伴着${tachyon.sex}，直到最后的吧`,
      );
      // todo 圣诞节选择选项1较多
      era.println();
      await tachyon.say_and_wait(`这个地方，很安静呢`);
      era.println();
      await era.printAndWait(
        `……除了风声，以及温泉水的声音外，就没有任何其他人声的温泉旅馆`,
      );
      await era.printAndWait(
        `过于寂静的环境在其他时刻或许会让人有些恐惧，但有了速子陪伴，这样的空间其实也不是无法忍受`,
      );
      era.println();
      await tachyon.say_and_wait(`而且，也很大`);
      era.println();
      await era.printAndWait(
        `……毕竟是温泉旅馆，虽然现在只有自己两人，但原本设计来容纳数百名游客的旅馆，大也是当然的`,
      );
      era.println();
      await tachyon.say_and_wait(`而且，没什么人`);
      era.println();
      await era.printAndWait(`……毕竟在这样的深山里啊`);
      await era.printAndWait(
        `一连说了许多没头没脑的话，导致你越发无法理解速子到底想说什么`,
      );
      era.println();
      era.println();
      await tachyon.say_and_wait(
        `如此广大，宁静，祥和的地方……应该也容得下一名凯旋门赏${tachyon.get_uma_sex_title()}和${
          tachyon.sex
        }的训练员吧`,
      );
      await tachyon.say_and_wait(
        `像这样……无人认识，安静平和的生活……也是一种可能性吗？`,
      );
      era.println();
      await era.printAndWait(`${tachyon.get_uma_sex_title()}的可能性`);
      await era.printAndWait(`这是速子总放在口上的话`);
      await era.printAndWait(
        `但${tachyon.get_uma_sex_title()}是无法一辈子奔跑的`,
      );
      await era.printAndWait(
        `就算是赛${tachyon.get_uma_sex_title()}，也终会走上离开赛场，离开对速度的追求的道路`,
      );
      era.println();
      await era.printAndWait(`那么，这种可能性能否共用在速子身上呢？`);
      await era.printAndWait(`对速子而言，会有这样的可能性吗？`);
      await era.printAndWait(`成为茶楼老板的速子`);
      await era.printAndWait(`走上科研道路成为科学家的速子`);
      await era.printAndWait(
        `作为普通的学生，继续升学，成为大学生而后进入社会变成上班族的速子`,
      );
      await era.printAndWait(
        `${tachyon.sex}也会有吗，像正常人一样，离开赛场，过着自己的生活的日子`,
      );
      era.println();
      await tachyon.say_and_wait(`……豚鼠君，你愿意跟着我吗？`);
      await tachyon.say_and_wait(`如果……我选择了这种可能性的话`);
      era.println();
      await tachyon.say_and_wait(`……豚鼠君，你愿意跟着我吗？`);
      await tachyon.say_and_wait(`如果……我选择了这种可能性的话`);
      era.println();
      await era.printAndWait(
        `和速子一起，过着与比赛无关，与${tachyon.get_uma_sex_title()}的速度无关的平淡，祥和的日常`,
      );
      await era.printAndWait(`那样的生活，想必会十分美好吧`);
      await era.printAndWait(`就算是平淡的生活，只要有速子在，就绝对不会无聊`);
      era.printButton(`听起来……挺不错的`, 1);
      era.printButton(`或许……再思考看看吧`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……呵呵`);
      era.println();
      await era.printAndWait(`对你的回答，速子没有多说什么`);
      await era.printAndWait(
        `${tachyon.sex}用脚滑绕着水面，在水上荡出层层水波`,
      );
      await era.printAndWait(`忽然，风起，你听见整个森林又活了起来`);
      await era.printAndWait(`树叶沙沙落下，夜晚安眠的鸟雀被惊醒呱呱乱飞`);
      await era.printAndWait(
        `夜晚的寂静，仿佛因为${tachyon.sex}这一时的搅乱而被瞬间打破`,
      );
      era.println();
      await era.printAndWait(`这样的${tachyon.sex}，真的能过上那样的生活吗？`);
      await era.printAndWait(
        `想到无论能与不能会带来的可能性，让你忽然有些兴奋`,
      );
      await era.printAndWait(
        `不过，无论能与不能，自己都必然陪伴着${tachyon.sex}，直到最后的吧`,
      );
      era.println();
      await tachyon.say_and_wait(`话说`);
      era.println();
      await era.printAndWait(`在周围的环境恢复冬夜的宁静及吵杂后`);
      await era.printAndWait(`速子仿佛忽然想起一般开口说道`);
      await era.printAndWait(
        `一边说着，一边悄悄将浴巾的下摆卷了起来，直到接近大腿根部`,
      );
      era.println();
      await tachyon.say_and_wait(`虽然包了浴巾比较抱歉……`);
      await tachyon.say_and_wait(`但是，下面确实是没穿的哦……要看看吗？`);
      era.println();
      await era.printAndWait(
        `速子用玩味的眼神看着你，手上慢慢的将浴巾打结的部分悄悄揭开`,
      );
      await era.printAndWait(`你看见了浴巾下若隐若现，似乎有些潮湿的缝隙`);
      await era.printAndWait(`……大概，是温泉水吧`);
      await era.printAndWait(
        `虽然知道速子明明还没进入温泉，但你还是决定这么骗自己`,
      );
      era.printButton(`在温泉里，不太好吧……`, 1);
      era.printButton(`要不，等到回房间……？`, 2);
      await era.input();
      await tachyon.say_and_wait(
        `我已经确认过了……这几天只有我们有预定住宿，所以就算在这里做什么都不会有关系`,
      );
      await tachyon.say_and_wait(
        `除此之外……因为不会有人来，所以就算你想反抗，也是没用的哦♡`,
      );
      await tachyon.say_and_wait(`放宽心，好好享受吧`);
      era.println();
      await era.printAndWait(
        `不知何时脱下浴巾，赤裸着身子进入温泉的速子趴在了你的身上，将那在进入温泉前就已经完全湿透的粉嫩缝隙对准了粗棒……`,
      );
      await era.printAndWait(`云雨过后，速子先一步出了温泉`);
      await era.printAndWait(
        `你看着${tachyon.sex}满足的摸着稍微有些变大的肚子的模样，以及顺着大腿流出，`,
      );
      await era.printAndWait(`不知是温泉水还是其他什么东西的透明液体，`);
      await era.printAndWait(
        `还有从一字型变成了双唇模样，唇间还留着刚偷吃完的白浆的穴口`,
      );
      await era.printAndWait(`胯下又一次硬了起来`);
      await era.printAndWait(
        `${tachyon.sex}仿佛察觉到了一般，稍稍扭动了一下屁股`,
      );
      await era.printAndWait(`看来回房之后，又会是一场恶战啊……`);
      await era.printAndWait(`在大战前，你望着天空，享受战前最后的宁静`);
    }
  }
};
handlers[event_hooks.out_church] = async () => {
  const event_marks = new TachyonEduMarks(),
    love = era.get('love:32'),
    relation = era.get('relation:32:0'),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:32:育成回合计时');
  const tachyon = get_chara_talk(32);
  if (event_marks.deities_possible === 1) {
    event_marks.deities_possible++;
    await print_event_name(`神明捕捉行动`, tachyon);
    await era.printAndWait(`今天，你与速子一起前往神社时……`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君！还不快点！要是让『神明大人』等急了就不好了！`,
    );
    era.println();
    await era.printAndWait(`速子兴奋的跑上神社阶梯回头喊道`);
    await era.printAndWait(
      `姑且不论以人类之身追上${tachyon.get_uma_sex_title()}的可能性，除了物理上的不可能外，`,
    );
    await era.printAndWait(
      `在精神上你也死命的想要拒绝接下来的行为，但在爱马的任性要求下，你依然只能露出苦笑勉强跟上`,
    );
    era.println();
    await era.printAndWait(`事情的起因……说来复杂，却也简单`);
    await era.printAndWait(`一言以蔽之`);
    era.println();
    await tachyon.say_and_wait(
      `豚鼠君，你知道的吧，我一向是不相信什么灵魂鬼神的存在的，`,
    );
    await tachyon.say_and_wait(
      `但是，在未经确认前便加以否认这也不符合研究者应有的态度`,
    );
    await me.say_and_wait(`嗯嗯`);
    await tachyon.say_and_wait(`但是要如何验证呢，从以前其实就一直有种说法，`);
    await tachyon.say_and_wait(`所谓的鬼神，其实就是自然界游离的能量团而已，`);
    await tachyon.say_and_wait(
      `虽然这样的说法有失偏颇，但确实能够以此为基础去进行验证`,
    );
    await me.say_and_wait(`嗯嗯`);
    era.println();
    await tachyon.say_and_wait(
      `所以，如此如此这般这般，我们去神社捕捉神明吧！`,
    );
    await me.say_and_wait(`嗯……嗯？`);
    era.println();
    await era.printAndWait(
      `如果说真的有这么一种一般人类无法感知无法察觉的东西存在，`,
    );
    await era.printAndWait(`那他的存在本身必然也需要能量，`);
    await era.printAndWait(
      `因此初步选择能够探测到不正常的能量消耗地方为探测基准，`,
    );
    await era.printAndWait(`但都市内乱七八糟的干扰太多，`);
    await era.printAndWait(
      `相比之下，要想探查的话最好当然就是地处偏远的神社了，`,
    );
    await era.printAndWait(
      `除此之外，既然称之为神，那么能量的等级必然也跟一般的鬼魂不同，`,
    );
    await era.printAndWait(
      `要是连在神社都补捉不到所谓神明，那么基本就可以认定这种东西是不可能存在的………`,
    );
    era.println();
    await era.printAndWait(`总而言之，大致上就是出于如此不敬的原因，`);
    await era.printAndWait(`你们今日来到了偏远地方无人经过的神社`);
    await era.printAndWait(
      `南无三，还请三女神大人有大量，别计较这种小事情了，万分拜托，阿弥陀佛，阿门`,
    );
    era.println();
    await era.printAndWait(`带着万分不情愿的心情，你总算爬上了神社`);
    await era.printAndWait(
      `在你的以死相逼的恳求下，速子心不甘情不愿的答应了在开始使用${tachyon.sex}手上那莫名其妙的能量探测器之前先参拜一次表示敬意`,
    );
    era.println();
    await era.printAndWait(`于是你们双手合十，朝着神社敬拜……`);
    await tachyon.say_and_wait(`好啦！那么废话不多说就让我们开始……`);
    era.println();
    await era.printAndWait(
      `参拜完的瞬间，速子便拿起了${tachyon.sex}放在一旁的能量探测器对准了神社的方向开始探测`,
    );
    await era.printAndWait(
      `你只能苦笑着站在一旁祈祷神明大人有大量不要跟小孩子计较了`,
    );
    era.println();
    switch (get_random_value(0, 1)) {
      case 0:
        await tachyon.say_and_wait(
          `嗯嗯……嗯嗯……！等一下！豚鼠君！你过来看，这里好像有………`,
        );
        era.println();
        await era.printAndWait(
          `你听见速子的呼喊声急忙跑了过去，却发现${tachyon.sex}在探测到某个地方后就忽然不动了`,
        );
        await era.printAndWait(
          `你连忙上去拍${tachyon.sex}的肩膀确认是否没事，${tachyon.sex}却忽然将你扑倒在地`,
        );
        era.println();
        await era.printAndWait(
          `${tachyon.sex}将你的双手按倒在地，你面朝天，看着压在自己身上的速子，`,
        );
        await era.printAndWait(
          `${tachyon.sex}的眼神冷酷，但在冷酷之下彷佛又藏着一丝狂热，`,
        );
        await era.printAndWait(`像是捕捉到猎物，正要开始进食的猫科动物一般`);
        era.println();
        await me.say_and_wait(
          `这下真的遭天谴了吗……不是，为什么受天谴的是我不是${tachyon.sex}啊！？`,
          true,
        );
        era.println();
        await era.printAndWait(`万般话语也陷入了无力的无奈`);
        await era.printAndWait(`你只能眼睁睁看着${tachyon.sex}的下一步动作`);
        era.println();
        await era.printAndWait(
          `在确认你已经失去反抗的意志后，${tachyon.sex}松开了一只手，解开你的衬衫上衣`,
        );
        era.println();
        await era.printAndWait(`啊啊，这样要训练员失格了啊，你心中无奈的想着`);
        await era.printAndWait(`${tachyon.sex}拉开了你的上衣，然后……`);
        era.println();
        await tachyon.say_and_wait(`喵～～～`);
        era.println();
        await era.printAndWait(
          `${tachyon.sex}发出了小猫一般的叫声，像猫一样钻进你的怀中，发出舒服的咕噜声`,
        );
        await era.printAndWait(
          `当然，即便动作再像猫，依然改变不了${
            tachyon.sex
          }的身体是${tachyon.get_uma_sex_title()}身体的事实，`,
        );
        await era.printAndWait(`虽然想象小猫一样钻进衬衫，但就你所看见的，`);
        await era.printAndWait(
          `${tachyon.sex}的行为不过是在解开上衣后便躺在你赤裸的胸板上磨蹭`,
        );
        era.println();
        await tachyon.say_and_wait(`喵～～喵呜～喵`);
        era.println();
        await era.printAndWait(
          `似乎对这样的接触有些不满意，${tachyon.sex}换了个方式，拉起了你的双手，使你的双手重迭在${tachyon.sex}的肚子上`,
        );
        await era.printAndWait(
          `你想趁机起身，但察觉到你的动作后用力压下的重量使你再次无法动弹`,
        );
        await era.printAndWait(
          `你只能继续任由${tachyon.sex}将你的手摆成了拥抱的姿势`,
        );
        await era.printAndWait(
          `${tachyon.sex}在固定完你手的姿势后，便翻了个身，脸颊平贴在你的胸膛上，发出了满足的声音`,
        );
        era.printButton(`……速子？`, 1);
        await era.input();
        era.println();
        await era.printAndWait(
          `这只小猫没有做出回答，渐渐的，${tachyon.sex}的呼吸趋于平缓，然后……`,
        );
        era.println();
        await tachyon.say_and_wait(`zzz……喵……zzz……`);
        era.println();
        await era.printAndWait(`就这么躺在你的胸膛上睡着了`);
        await era.printAndWait(`现在的你倒是能够将${tachyon.sex}挣脱，但……`);
        era.println();
        await era.printAndWait(`现在速子的模样明显的很不正常`);
        await era.printAndWait(`但是无论如何，前面都被折腾成这样了`);
        await era.printAndWait(
          `睡着的现在，让自己稍稍收点补偿应该，也没关系吧？`,
        );
        era.println();
        await era.printAndWait(
          `你轻轻松开了抱住${tachyon.sex}的臂弯，将一只手伸向了上方…………`,
        );
        era.println();
        await era.printAndWait(
          `好软，好舒服……原来如此，这就是${tachyon.get_uma_sex_title()}的………`,
        );
        era.println();
        await era.printAndWait(`耳朵啊`);
        era.println();
        await era.printAndWait(
          `你轻轻抚摸着这只小猫的头，不时搓揉头顶上垂下的耳朵，柔软却富有弹性的毛茸茸触感使你忍不住一摸再摸`,
        );
        era.println();
        await tachyon.say_and_wait(`喵呀……咕噜……喵喵`);
        era.println();
        await era.printAndWait(
          `梦中的小猫也发出了可爱的声音，彷佛在鼓励着你继续动作`,
        );
        await era.printAndWait(`不妙啊……这种软绵绵的触感……要沦陷了………`);
        era.println();
        await era.printAndWait(`不知不觉，你也陷入了梦乡…………`);
        era.drawLine();
        await tachyon.say_and_wait(`啊啊啊啊啊！！！我的仪器啊啊啊啊啊！！！`);
        era.println();
        await era.printAndWait(`你看着发出悲鸣的速子，露出苦笑`);
        await era.printAndWait(
          `先前不知道发生了什么事，你们忽然就在神社里昏过去了，再次醒来时速子发现${tachyon.sex}花了大钱(貌似)买的仪器就这么不动了`,
        );
        await era.printAndWait(
          `奇怪的是，两人的记忆都只停留在参拜的瞬间，参拜后发生了什么竟然一点印象都没有，`,
        );
        await era.printAndWait(
          `不过不知为何，你感觉身体一阵舒畅，彷佛在昏迷前做了什么抒发压力的举动`,
        );
        await era.printAndWait(
          `……你忽然想起醒来时发现上衣扣子被全数解开的事情，在昏迷前到底发生了甚么呢`,
        );
        await era.printAndWait(`……果然，鬼神什么的还是多少信一些吧`);
        era.println();
        await era.printAndWait(`你带着速子离开了神社`);
        break;
      case 1:
        era.println();
        await era.printAndWait(
          `你看着他拿着探测器在神社内戳来戳去，也不知道这样到底有没有效`,
        );
        era.drawLine();
        era.println();
        await tachyon.say_and_wait(`…………果然，什么也没有啊`);
        era.println();
        await era.printAndWait(`速子一脸失望的说道`);
        await era.printAndWait(
          `你也不明白${tachyon.sex}为什么会如此失望，证明了鬼神的不存在不应该是对${tachyon.sex}而言的好事吗？`,
        );
        await era.printAndWait(`在不明所以中，你们就这么下了山回去了`);
        break;
    }
  } else if (edu_weeks === 95 + 1 && event_marks.plan_b === 0) {
    await print_event_name('三期目标和最终完成度确认', tachyon);
    // todo PlanA
    await era.printAndWait(`今年，就是与${tachyon.name}的古典年了`);
    await era.printAndWait(
      `今年两人的目标……虽然先前没有明说，但果然，要以最强为目标的话，那两场比赛就是绝不可少的`,
    );
    await era.printAndWait(
      `【宝冢纪念】和【有马纪念】啊……除此之外，【大阪杯】若是有机会的话也想参加`,
    );
    era.println();
    await era.printAndWait(
      `能够赢下这三场比赛的话，应该就能抵达所谓${tachyon.get_uma_sex_title()}的极限了吧`,
    );
    await era.printAndWait(
      `但是，速子的目标不只在此，${tachyon.sex}的目标是……超越极限`,
    );
    await era.printAndWait(`所以除了比赛之外，研究上的协助也不能忘了……`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君，来的这么早啊？`);
    era.println();
    await era.printAndWait(`不知不觉，说好了今天一起来参拜的速子也已经到了`);
    era.printButton(
      `那当然！今年的古典战线，还有其他各式各样的事情……要许的愿太多了！`,
      1,
    );
    await era.input();
    if (relation < 0) {
      await tachyon.say_and_wait(
        `呵，怪力乱神的东西都当成宝，想那种事还不如专心想想怎么帮助我的实验吧`,
      );
    } else if (relation < 225 && relation > 0) {
      await tachyon.say_and_wait(
        `呵呵，虽然我不相信这种怪力乱神的东西，但姑且还是接受你的好意了`,
      );
    } else if (relation > 225) {
      await tachyon.say_and_wait(`是吗？那么，你的愿望必然会被实现`);
    }
    era.println();
    await era.printAndWait(`听见速子的口气，你有些意外`);
    await era.printAndWait(
      `原本以为对这种迷信的事${tachyon.sex}大概就算不是嗤之以鼻，也不会认真对待吧`,
    );
    await era.printAndWait(
      `然而${tachyon.sex}的口气听起来却仿佛打从心底确信如此`,
    );
    era.printButton(`速子……？`, 1);
    era.printButton(`你不是不信这些吗？`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `当然了，比起神明什么的，我更信任手上的研究……但是，比起研究，我更加信任的，是你`,
    );
    era.println();
    await era.printAndWait(`准确来说，是你做出的努力`);
    await era.printAndWait(`${tachyon.sex}补充道`);
    era.println();
    await tachyon.say_and_wait(
      `你这一年所做的努力，必然能够受到回报，如果神明不给，那么就由我来给`,
    );
    era.println();
    await era.printAndWait(`速子自信满满的说道。`);
    await me.say_and_wait(`取代神明的功能吗？`), true;
    await era.printAndWait(
      `真像速子会说的话啊，不过……在神社里还是别这样讲比较好吧`,
    );
    if (love > 50 && love < 75) {
      await tachyon.say_and_wait(`其他的愿望……比如呢？`);
      era.println();
      await era.printAndWait(`速子饶有兴致的看着你`);
      era.printButton(`希望……和速子的关系变得更好`, 1);
      era.printButton(`希望……与其他担当的关系变得更好`, 2);
      era.printButton(`希望……丝之歌今年能出！`, 3);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(`呵呵，我相信，一定会的❤`);
      } else if (ret1 === 2) {
        await tachyon.say_and_wait(
          `……特别讲其他担当故意想惹我生气？可惜，我是不会上这种当的`,
        );
        era.println();
        await era.printAndWait(`虽然这么说，但速子还是不高兴的鼓起了脸颊`);
      } else {
        await tachyon.say_and_wait(
          `欸……那是什么东西……圣巢？空洞骑士？……原来豚鼠君你这么喜欢游戏吗？`,
        );
      }
    } else if (love > 75) {
      await tachyon.say_and_wait(`这样啊……那么，有没有什么想向我许的愿呢？❤`);
      era.println();
      await era.printAndWait(`速子用魅惑的眼神，带着暗示意味的询问你`);
      await era.printAndWait(`自己有没有什么，这一年希望能对速子做的事……`);
      era.printButton(`希望能跟速子更多的sex`, 1);
      era.printButton(`希望速子的身体更加敏感`, 2);
      era.printButton(`希望被速子踩`, 3);
      era.printButton(`希望速子认真训练`, 4);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(`……色鬼，想做的话，回去再说吧`);
        era.println();
        await era.printAndWait(`速子靠在你耳边轻声说道`);
      } else if (ret1 === 2) {
        await tachyon.say_and_wait(
          `这个嘛……吃药的话倒是很简单就能达到了，不过，还是希望豚鼠君你能透过自己的手来让我变成你喜欢的样子呢❤`,
        );
        era.println();
        await era.printAndWait(`速子爬在你肩上，惬意的说着`);
      } else if (ret1 === 3) {
        await tachyon.say_and_wait(`居然许这种愿望…果然是变态啊，豚鼠君`);
        era.println();
        await era.printAndWait(
          `虽然嘴上这样说着，但速子却悄悄脱下了鞋，露出黑丝包裹的足底`,
        );
        await era.printAndWait(`今天为了参拜走了一整天，被酿窖入味的黑丝`);
        era.println();
        await tachyon.say_and_wait(`想要……被这样的双足踩吗?`);
        await tachyon.say_and_wait(
          `想被压在脸上，让肺部被我足底的肮脏空气灌满吗?`,
        );
        await tachyon.say_and_wait(
          `想要被踩着肉棒，直到整根肉棒都被我的足臭和你的先走汁弄得哪怕十米内都能闻到上面的气味吗?`,
        );
        era.println();
        await era.printAndWait(`你狂热的望着速子，答案不言自喻`);
        era.println();
        await tachyon.say_and_wait(`……色鬼，想做的话，回去再说吧`);
        era.println();
        await era.printAndWait(`速子靠在你耳边轻声说道`);
      } else {
        await tachyon.say_and_wait(`……不解风情的家伙`);
        era.println();
        await era.printAndWait(`速子无趣的切了一声`);
      }
    }
    era.drawLine();
    await era.printAndWait(
      `虽然过年的神社十分热闹，你们还是很快就结束了参拜的过程`,
    );
    await era.printAndWait(`结束参拜后，你和速子讨论了今年度的计画`);
    era.println();
    await tachyon.say_and_wait(`嗯……就像十一月那时谈论过的一样，没有问题`);
    era.println();
    await era.printAndWait(
      `比赛的事情简单的就过去了，接下来，才是今天的重头戏`,
    );
    // todo if 全属性1200
    era.println();
    await tachyon.say_and_wait(
      `极限……在我们的努力之下，我可以大胆说出现在的自己已经到达了极限……${tachyon.get_uma_sex_title()}的极限`,
    );
    // todo if 尚未1200
    era.println();
    await tachyon.say_and_wait(
      `极限……虽然目前还没达到，但坚持实验下去迟早能够达到，所以不成问题`,
    );
    era.println();
    await tachyon.say_and_wait(`唯一的问题是……跨越极限`);
    await tachyon.say_and_wait(`而关于这个……现在的我，没有任何头绪`);
    era.println();
    await era.printAndWait(
      `明明说的是毫无头绪，但速子眼神中的骄傲却让人觉得仿佛${tachyon.sex}刚说出的是已经想出黎曼猜想的解法一般的话语`,
    );
    era.printButton(`毫无头绪……听起来真不妙呢`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`这下没办法了呢`);
    await era.printAndWait(`真的毫无头绪的话`);
    era.println();
    await era.printAndWait(`明明应该是十分令人烦恼的事，心情却感觉十分平和`);
    await era.printAndWait(`毫无头绪，那么，就得寻找头绪了吧`);
    era.printButton(`那么速子，试试看把精力投注在比赛上吧？`, 1);
    era.printButton(
      `${tachyon.get_uma_sex_title()}的极限，果然还是必须在赛场上才能突破吧`,
      2,
    );
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `……有一定道理，但我怎么觉得，这是豚鼠君你在满足自己的私欲呢`,
    );
    era.printButton(`毕竟速子说过，会让我看见更宽广的世界不是吗？`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `呵呵，说的也是啊，那么继续吧，我们新一年的研究！`,
    );
    era.println();
    await era.printAndWait(`那么，在开始研究前……`);
    era.printButton(`先吃年糕吧`, 1);
    era.printButton(`马上去训练吧`, 2);
    era.printButton(`回去研究吧`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`你们回到了速子的实验室`);
      await era.printAndWait(`而后，你们做的第一件事……`);
      era.println();
      await tachyon.say_and_wait(
        `……虽然由我来这么说有点不对吧，但我们……明明才刚说了那样的话，现在却在干嘛啊`,
      );
      era.println();
      await era.printAndWait(`以前学生进行理科实验用的教室`);
      await era.printAndWait(
        `现在正被你用于进行热能释放及测量糯米合成物燃点的实验`,
      );
      await era.printAndWait(
        `你和速子围坐在作为实验仪器的烤炉边，享受着火炉的温暖`,
      );
      await era.printAndWait(
        `洒水器？那种东西在以前被速子用来于校园内散布大规模药剂实验时就已经被学生会下令强制拆除以免让速子有接触机会了`,
      );
      era.printButton(`差不多烤好了哦`, 1);
      era.printButton(`那，速子不吃吗？`, 2);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`当然吃`);
      await era.printAndWait(
        `速子接过了你烤好的糯米合成物——年糕，立马咬了下去，然后，不出你所料的……`,
      );
      era.println();
      await tachyon.say_and_wait(`好烫！……呼呼`);
      // todo  If 没有做过料理or做料理次数<10
      await tachyon.say_and_wait(`……没想到你做的还挺好吃的，出乎意料了`);
      // todo If 已做过料理
      era.println();
      await tachyon.say_and_wait(`好烫……不过好吃，不愧是经过我锻炼的豚鼠`);
      era.println();
      await me.say_and_wait(`为什么好像是自己的功劳一样啊……`);
      era.println();
      await era.printAndWait(
        `不管怎么样，不管是实验研究，还是训练及比赛对策，改天做都行`,
      );
      await era.printAndWait(`难得的新年，还是好好享受一下这份平静吧`);
      era.println();
      await tachyon.say_and_wait(`速子笑了，然后轻轻咬了口年糕`);
      await era.printAndWait(
        `最近不知道为什么，只要提到『明天』、『以后』，速子的心情就会忽然转好`,
      );
      await era.printAndWait(`感到好奇的你，忍不住发问了`);
      era.println();
      await tachyon.say_and_wait(`……豚鼠君，我的脚……`);
      // todo 体力+30%
    } else if (ret1 === 2) {
      await era.printAndWait(
        `为了把握速子难得有干劲的时间，你立马和${tachyon.sex}一起到了训练场`,
      );
      await era.printAndWait(
        `看见${tachyon.sex}在训练场上奔驰的模样，尽管已经是见过无数次的光景，你还是忍不住陷入了沉迷`,
      );
      await era.printAndWait(`如光一般灿烂，如光一般眩目……如光一般，永恒`);
      await era.printAndWait(`以前那种奔跑起来时的虚幻感，不知何时已经不见`);
      await era.printAndWait(`失去了不安，剩下的是最纯粹的光`);
      await era.printAndWait(`你更深一层的陷入沉醉`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君？……豚鼠君！`);
      era.println();
      await era.printAndWait(
        `不知不觉，连${tachyon.sex}已经结束训练回到你身边都没能发觉`,
      );
      era.println();
      await tachyon.say_and_wait(`在看我训练的时候还敢发呆……好胆子啊……`);
      era.println();
      await era.printAndWait(`你连忙和${tachyon.sex}解释了自己感受到的不同`);
      era.println();
      await tachyon.say_and_wait(`……是吗`);
      await tachyon.say_and_wait(`其实……我自己也有一种奇怪的感觉`);
      await tachyon.say_and_wait(`感觉在菊花赏后……我的腿……有种怪怪的感觉`);
      // todo 全属性+10
    } else {
      await tachyon.say_and_wait(
        `豚鼠君，那根试管拿过来，不要晃到了，要是洒出来大概能把地板融化到一楼`,
      );
      await tachyon.say_and_wait(
        `豚鼠君，我现在手上有点忙，帮我点一下酒精灯然后把旁边那管药剂倒到坩埚煮到沸腾`,
      );
      await tachyon.say_and_wait(
        `然后是……好，把这些染成咖啡色，放进茶座的咖啡粉……豚鼠君！你拿走干什么！`,
      );
      await tachyon.say_and_wait(
        `戴一下口罩，等下的烟雾会有严重的昏睡效果，要是不好好做好防护的话大概能昏到周末吧`,
      );
      await tachyon.say_and_wait(
        `这个……往里面再加点苹果汁和砂糖……药剂？不是，这是等一下赤骥君来要给${tachyon.sex}的饮料`,
      );
      era.println();
      await era.printAndWait(
        `你们参拜完后便回到了速子的实验室，今天的速子状态无比的好`,
      );
      await era.printAndWait(
        `不停的下达指令，除去某些太过奇怪的指令外，你也完成了大部分${tachyon.sex}交代的事，但……`,
      );
      era.println();
      await tachyon.say_and_wait(`没成功啊……啧，再多加点`);
      await tachyon.say_and_wait(`今天以内……必须做完二十二次临床测试`);
      era.println();
      await era.printAndWait(`一如既往急躁的实验效率，加上极佳的实验状态`);
      await era.printAndWait(`结果就是需要做的事情成倍的增加`);
      era.printButton(`速子，不能休息一下吗`, 1);
      era.printButton(`不用这么急吧，明天再做也可以……`, 2);
      await era.input();
      await tachyon.say_and_wait(`明天什么……`);
      era.println();
      await era.printAndWait(`想要训斥的话语说到一半忽然停下`);
      await era.printAndWait(`速子仿佛被按了暂停键一般停下了手上的动作`);
      await era.printAndWait(
        `手上的药管眼看就要流出到地上，你慌忙上去稳住了那管据说只要一滴就能腐蚀到一楼的药剂`,
      );
      era.printButton(`速子！怎么了……！`, 1);
      era.printButton(`怎么忽然停住了！`, 2);
      await era.input();
      await tachyon.say_and_wait(`…………哈哈`);
      era.println();
      await era.printAndWait(`速子忽然笑了起来`);
      era.printButton(`脑子……终于坏掉了吗`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`……等会再跟你算帐，豚鼠君……我只是在想`);
      era.println();
      await era.printAndWait(`想什么？`);
      era.println();
      await tachyon.say_and_wait(`……我们真的，看见明天了呢`);
      await era.printAndWait(`明天？`);
      await era.printAndWait(`到底在说什么，难道真的是脑袋撞到了吗？`);
      await era.printAndWait(
        `还是什么，天才跟疯子只有一线之隔所以速子终于疯了吗？`,
      );
      era.println();
      await tachyon.say_and_wait(
        `总觉得你在想什么很失礼的事啊……就像你说的，明天再做，也不迟呢，呵呵`,
      );
      await tachyon.say_and_wait(`毕竟，接下来还有很多明天吧`);
      era.printButton(`不管怎么样，明天总会到来的吧`, 1);
      era.printButton(`别想那么多了，总之明天再继续吧`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await tachyon.say_and_wait(`是啊，不过……这么美好的明天真的……是第一次`);
        await era.printAndWait(`速子喃喃说着什么听不懂的话`);
      } else {
        await tachyon.say_and_wait(`呵呵，当然，明天再继续吧，嗯，明天`);
        era.println();
        await era.printAndWait(`哪怕被你扫了兴速子还是一副高兴的模样`);
        era.println();
        await era.printAndWait(
          `不知道为什么，听到『明天』之后，速子的心情忽然变得很开心的样子`,
        );
        await era.printAndWait(`感到好奇的你，忍不住发问了`);
        era.println();
      }
      //todo pt+30
    }
    await tachyon.say_and_wait(`……豚鼠君，我的脚……`);
    era.printButton(`怎么了！`, 1);
    era.printButton(`有哪里不对吗！`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `……呵呵，别那么紧张，我是想说，我的脚……在菊花赏之后，感觉忽然稳定了许多`,
    );
    era.println();
    await era.printAndWait(`稳定了许多，这……不是好事吗？`);
    await era.printAndWait(`欸，意思是，现在应该恭喜吗？`);
    await era.printAndWait(
      `展开过度突然的话题，使你陷入迷茫，不理解${tachyon.sex}忽然提到这个的原因`,
    );
    era.println();
    await tachyon.say_and_wait(
      `……这是我人生中第一次，可以抛弃对腿脚的担心专注于一件事上……`,
    );
    await tachyon.say_and_wait(
      `就仿佛，可以理所当然的一直跑下去，哪怕跑到天涯海角`,
    );
    await tachyon.say_and_wait(
      `所以……只要一想到明天，未来……这种对一般人来说最理所当然的事，我也会有种……`,
    );
    await tachyon.say_and_wait(
      `怎么说呢……按你说的，我确实表现出了喜悦的感情来，`,
    );
    await tachyon.say_and_wait(`不过，是因为能够专心于研究的喜悦吗？`);
    await tachyon.say_and_wait(`……唔，好像又不太是……值得探讨`);
    era.println();
    await era.printAndWait(`听到这，你忽然灵光一闪`);
    era.printButton(`难道，不是因为可以毫无顾虑的跑步了吗？`, 1);
    era.printButton(`难道，不是因为可以自由自在的跑步了吗？`, 2);
    await era.input();
    await tachyon.say_and_wait(
      `唔……豚鼠君，我的意思不就是这样吗？我不理解你再说一次的理由`,
    );
    era.printButton(`不是实验，而是跑步本身`, 1);
    await era.input();
    era.println();
    await tachyon.say_and_wait(
      `……你的意思是，我是因为喜欢跑步，可以自由自在的跑步了，所以感到高兴？`,
    );
    era.println();
    await era.printAndWait(`啊……果然，速子的话应该很难接受的吧`);
    await era.printAndWait(`毕竟要承认纯粹理智的自己喜欢某种东西……`);
    await tachyon.say_and_wait(`这……`);
    era.println();
    await era.printAndWait(`这？`);
    era.println();
    await tachyon.say_and_wait(`这不是很有趣的可能性吗！`);
    era.println();
    await era.printAndWait(`…………欸？`);
    era.println();
    await tachyon.say_and_wait(
      `对跑步本身感兴趣……感觉，是个很有意思的课题啊！豚鼠君！接下来的研究就决定是这个了！`,
    );
    era.println();
    await era.printAndWait(`研，研究什么？`);
    era.println();
    await tachyon.say_and_wait(`那还用说！当然是对跑步的『喜欢』了！`);
    era.println();
    await era.printAndWait(`研究……喜欢？`);
    await era.printAndWait(`没等你回过神来，兴奋中的速子继续说道`);
    era.println();
    await tachyon.say_and_wait(
      `我有一种预感……突破极限的可能性，就在这个上了！接下来的目标就定为研究这个吧！`,
    );
    era.println();
    await era.printAndWait(`听速子这么说，你也冷静了下来，开始思考利弊`);
    await era.printAndWait(`如果是真的，那么无论如何也要帮助速子达成目标`);
    await era.printAndWait(
      `如果只是错觉的话……那么速子开始享受起跑步，这本身对你而言也不是什么坏事`,
    );
    await era.printAndWait(
      `为了研究而跑和为了自己喜欢而跑，怎么想都是后者更好吧`,
    );
    era.println();
    await era.printAndWait(
      `所以，除了某个难题外，可以说这是百利而无一害的决定……`,
    );
    await era.printAndWait(`思考清楚后，你对速子点了点头`);
    era.printButton(`就以这个为目标吧！`, 1);
    await era.input();
    era.println();
    await era.printAndWait(`百利而无一害的决定，只要除去最大的难题`);
    await era.printAndWait(`那么，究竟该如何研究『感情』呢？加油吧，豚鼠！`);
  } else {
    if (!(edu_weeks === 95 + 1 && event_marks.plan_b === 1)) {
      return;
    }
    await print_event_name(`下定决心的新年`, tachyon);
    await era.printAndWait(`新年`);
    await era.printAndWait(`本该是除旧岁，迎新年的喜庆日子`);
    await era.printAndWait(
      `到神社参拜，也象征着洗去去年的一切，迎接新年的到来`,
    );
    era.println();
    await era.printAndWait(`然而……孽缘往往，是难以洗净的`);
    await era.printAndWait(`无论是与谁，在什么地点，哪怕神社也不例外`);
    await era.printAndWait(`会如影随形，死缠烂打跟在身边，令人厌恶的存在`);
    await era.printAndWait(`没错，所谓的孽缘即是————`);
    era.println();
    await tachyon.say_and_wait(`哦呀，豚鼠君……真巧啊`);
    era.printButton(`速…速子！`, 1);
    era.printButton(`先不说这个了，快跑！`, 2);
    await era.input();
    await tachyon.say_and_wait(`啊，等……`);
    await era.printAndWait(
      `没等速子回应，你便拉着${tachyon.sex}往神社里钻，很快便消失在了人群之中`,
    );
    await say_by_passer_by(`记者A`, `咕……没逮到`);
    await say_by_passer_by(`记者B`, `没想到没发着光的时候这么难找……`);
    era.println();
    await say_by_passer_by(`记者C`, `……在这边堵着，千万不能漏掉了`);
    era.println();
    await era.printAndWait(
      `你拉着速子躲在人群中，确认没有拿着摄影机的记者追上来才放下了心来`,
    );
    await era.printAndWait(
      `速子在有马纪念后的忽然宣布复归，对媒体而言可以说是最让人注目的焦点了`,
    );
    await era.printAndWait(`但由于担心速子的状况，你拒绝了一切关于此事的采访`);
    await era.printAndWait(`却没想到他们直接追上门来……！`);
    era.println();
    await tachyon.say_and_wait(`……豚鼠君`);
    era.println();
    await era.printAndWait(`这时你才想起，你刚刚没想太多就抓着速子跑了起来……`);
    era.println();
    era.printButton(`速子，腿没事吧！`, 1);
    await era.input();
    await era.printAndWait(`……没什么，只是，有点吓到了，呵呵`);
    await era.printAndWait(
      `毕竟还是${tachyon.get_uma_sex_title()}，哪怕是腿脚不便的${tachyon.get_uma_sex_title()}身体素质比起人类还是强上许多，更何况还是今年要回归赛场的前G1${tachyon.get_uma_sex_title()}了`,
    );
    era.println();
    await me.say_and_wait(`……是啊，回归赛场`, true);
    era.printButton(`速子`, 1);
    era.printButton(`今年的赛程……`, 2);
    await era.input();
    era.println();
    await tachyon.say_and_wait(`那当然……是和茶座一样了，这不用我多说吧`);
    era.println();
    await era.printAndWait(`果然如此`);
    await era.printAndWait(`你点了点头`);
    await era.printAndWait(
      `${
        tachyon.name
      }离开赛场，以及离开赛场的原因，都是为了曼城茶座———你的另一名负责${tachyon.get_uma_sex_title()}`,
    );
    await era.printAndWait(
      `那么，在有限能够选择的比赛中，当然必须要以茶座参加的比赛为优先…………`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君？怎么了吗？`);
    era.println();
    await era.printAndWait(`心中还是忍不住想起`);
    await era.printAndWait(`夏日集训时速子脸上的表情`);
    await era.printAndWait(`菊花赏后速子的眼神`);
    await era.printAndWait(`有马前……速子下定决心时的神情`);
    era.println();
    await tachyon.say_and_wait(`豚鼠君？`);
    era.println();
    await era.printAndWait(
      `你这才发现速子正盯着你似乎有些时间了，连忙回过神来问怎么了`,
    );
    era.println();
    await tachyon.say_and_wait(`……没什么，只是快轮到我们了`);
    era.println();
    await era.printAndWait(
      `${tachyon.sex}指着神社，然后你才发现，你们匆忙跑入的，是本舍前祈求神明保佑的长列`,
    );
    era.printButton(`速子你不是不信这些吗？`, 1);
    await era.input();
    await era.printAndWait(`话一出口你便感觉坏事`);
    if (relation < 0) {
      await tachyon.say_and_wait(`……哦，真看不出来，你原来还会在乎我的意愿啊`);
      era.println();
      await era.printAndWait(`果不其然，遭到了${tachyon.sex}的冷嘲热讽`);
    } else if (relation > 0 && relation < 225) {
      era.println();
      await tachyon.say_and_wait(`……不是你把我拉过来的吗？`);
      era.println();
      await era.printAndWait(`这么说起来，似乎还没跟速子解释过……`);
      await era.printAndWait(`你连忙说了记者的事情`);
      await era.printAndWait(
        `听完后${tachyon.sex}没有过多的反应，只说了句这样啊`,
      );
    } else if (relation > 225 && relation < 525) {
      await tachyon.say_and_wait(
        `虽然不信……但我姑且当成你的心意吧，再说不是你先把我拉过来的吗？`,
      );
      era.println();
      await era.printAndWait(`这么说起来，似乎还没跟速子解释过……`);
      await era.printAndWait(`你连忙说了记者的事情`);
      await era.printAndWait(`听完后${tachyon.sex}露出了有些抱歉的眼神`);
    } else if (relation > 525) {
      await tachyon.say_and_wait(`我相信的不是神，而是将我带到这里的你`);
      era.println();
      await era.printAndWait(`速子忽然说了些令人羞耻的内容`);
      await era.printAndWait(`这么说起来，似乎还没跟速子解释过……`);
      await era.printAndWait(`你连忙说了记者的事情`);
      await tachyon.say_and_wait(`呵，一群庸碌的蚊蝇而已，也敢质疑我们？`);
      await era.printAndWait(`速子不屑的笑了声`);
    }
    await era.printAndWait(`对话的途中，你们已经排到了队伍最前方`);
    await era.printAndWait(`你望着眼前的神像`);
    await era.printAndWait(`那么……该许什么愿呢`);
    era.println();
    await era.printAndWait(`你思考了许多，想了许多要许的愿望`);
    await era.printAndWait(`双手合十，向神明祈祷`);
    await era.printAndWait(`希望速子的双腿不要有事，健康跑完`);
    await era.printAndWait(`希望速子的比赛可以一如往常的精彩`);
    await era.printAndWait(`希望……茶座的训练也能平安进行`);
    era.println();
    await era.printAndWait(`结束祈祷，你抬头看向一旁的速子`);
    await era.printAndWait(
      `${tachyon.sex}早就已经结束了敷衍的祈祷，正等待着你`,
    );
    await era.printAndWait(
      `你们两人离开人群，小心的避开了还不死心的记者回到学园`,
    );
    era.println();
    await tachyon.say_and_wait(`那么……你都祈祷了什么？`);
    era.println();
    await era.printAndWait(`不知为何，速子很好奇的样子`);
    await era.printAndWait(`你告诉${tachyon.sex}……`);
    era.printButton(`速子的健康`, 1);
    era.printButton(`速子的比赛`, 2);
    era.printButton(`茶座的训练`, 3);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await era.printAndWait(
        `你告诉${tachyon.sex}，你祈祷了${tachyon.sex}的双腿健康`,
      );
      if (relation < 225) {
        await tachyon.say_and_wait(`……无聊的愿望`);
        await tachyon.say_and_wait(
          `如果只求身体健康……那我不回归赛场不就好了吗？`,
        );
        await tachyon.say_and_wait(
          `都已经决定抛弃一切了，还许这种愿……豚鼠君你的觉悟不足啊`,
        );
        era.println();
        await era.printAndWait(`速子的回复十分辛辣`);
        await era.printAndWait(`听起来仿佛对你说的愿望打从心底嗤之以鼻`);
        era.println();
      }
      //  todo 体力+30%
      else if (relation > 225) {
        era.println();
        await tachyon.say_and_wait(`……身体健康啊`);
        await tachyon.say_and_wait(`不，没什么，只是……呵呵`);
        await tachyon.say_and_wait(`是啊，要是能够健康的跑完就好了`);
        era.println();
        await era.printAndWait(`速子轻描淡写的说着`);
        await era.printAndWait(`仿佛这只是一场普通的谈天——也确实如此——而已`);
        era.println();
      }
      await era.printAndWait(`但是你没有看漏`);
      await era.printAndWait(`在说出愿望的同时，速子眼神中绽放出的希望和渴望`);
      await era.printAndWait(`……可是，看见了又能怎么办呢？`);
      await era.printAndWait(
        `追寻那种可能的道路，在几个月前就已经被你亲手封上`,
      );
      await era.printAndWait(
        `现在的你与${tachyon.sex}，只是在朝着自毁的道路狂奔而已`,
      );
      era.println();
      await era.printAndWait(`所以只能献上祈祷`);
      await era.printAndWait(`至少，在这最后的时间里`);
      await era.printAndWait(`${tachyon.sex}能免于痛苦，免于伤病`);
      era.println();
      await tachyon.say_and_wait(`……没什么事，我就回去了`);
      era.printButton(`注意休息`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`${tachyon.sex}挥了挥手，表示知道了`);
    } else if (ret2 === 2) {
      await era.printAndWait(
        `你告诉${tachyon.sex}，你祈祷了${tachyon.sex}和茶座的比赛顺利`,
      );
      era.println();
      await tachyon.say_and_wait(`哈哈，这不是不错的愿望吗？`);
      await tachyon.say_and_wait(
        `茶座已经证明了${tachyon.sex}的可能性……接下来，该轮到我了`,
      );
      await tachyon.say_and_wait(
        `明明说着要成为${tachyon.sex}的垫脚石，我可不能原地踏步啊，不然，充其量也就是鹅卵石而已了`,
      );
      era.println();
      await me.say_and_wait(`虽然速子口口声声说着为了茶座`);
      await era.printAndWait(`但你依然没有错过……`);
      await era.printAndWait(`在提起比赛时，速子眼中闪过的斗志`);
      await era.printAndWait(`果然，速子还是渴望回到赛场的吧`);
      await era.printAndWait(`……但是，渴望又能怎么办呢`);
      await era.printAndWait(
        `追寻那种可能的道路，在几个月前就已经被你亲手封上`,
      );
      await era.printAndWait(
        `现在的你与${tachyon.sex}，只是在朝着自毁的道路狂奔而已`,
      );
      era.println();
      await era.printAndWait(`所以只能献上祈祷`);
      await era.printAndWait(`至少，在这最后的时间里`);
      await era.printAndWait(
        `希望在剩下的时间中，${tachyon.sex}能尽情享受，那样的时光`,
      );
      era.println();
      await tachyon.say_and_wait(`呵呵，为了你的期待，得马上开始训练了啊`);
      era.println();
      await era.printAndWait(`速子开心的朝着训练场走去`);
      era.printButton(`……训练小心`, 1);
      await era.input();
      era.println();
      await era.printAndWait(`${tachyon.sex}挥了挥手表示知道了`);
      // todo 随机属性 +10
    } else {
      await era.printAndWait(`你告诉${tachyon.sex}，你祈祷了茶座的训练顺利`);
      era.println();
      await tachyon.say_and_wait(`……嗯`);
      await tachyon.say_and_wait(
        `当然了……毕竟我们做的，都是为了茶座能够更加，并且超越极限啊`,
      );
      await tachyon.say_and_wait(
        `要是${tachyon.sex}的训练出现问题，那么……一切就白费了`,
      );
      await tachyon.say_and_wait(
        `所以这个才是重中之重……你能够不忘优先顺序，我很高兴`,
      );
      era.println();
      await era.printAndWait(`虽然速子口口声声说着为了茶座`);
      await era.printAndWait(
        `但你依然没有错过……提起茶座时${tachyon.sex}眼神中的落寞`,
      );
      await era.printAndWait(`果然，自己不该提起茶座的吧`);
      await era.printAndWait(
        `现在，身为${tachyon.name}的训练员时的自己，应该要为了${tachyon.sex}而想才对吧`,
      );
      await era.printAndWait(
        `但……为${tachyon.sex}着想的权利早在几个月前就已经被自己抛弃了`,
      );
      await era.printAndWait(
        `现在的你和${tachyon.sex}，只是在朝着自毁的道路狂奔而已`,
      );
      era.println();
      await era.printAndWait(`因此只能献上祈祷`);
      await era.printAndWait(`希望能够保障一切的外在因素`);
      await era.printAndWait(
        `满足${tachyon.sex}，满足${tachyon.name}的『遗愿』`,
      );
      era.println();
      await tachyon.say_and_wait(
        `呵呵，为了你的期待，接下来我也不能输啊，必须让自己恢复到足以与茶座站上同个舞台才行`,
      );
      era.println();
      await era.printAndWait(`速子淡淡的说完，朝着实验室走去`);
      era.printButton(`……实验小心`, 1);
      await era.input();
      await era.printAndWait(`${tachyon.sex}挥了挥手表示知道了`);
      // todo pt+30
    }
  }
};
handlers[event_hooks.office_study] = async () => {
  const tachyon = get_chara_talk(32),
    event_marks = new TachyonEduMarks();
  if (event_marks.explore_reward === 1) {
    event_marks.explore_reward++;
    await print_event_name(`实验的报酬`, tachyon);
    era.println();
    await era.printAndWait(`总算结束了……`);
    await era.printAndWait(`你伸了个懒腰，忍不住感慨`);
    await era.printAndWait(`最近速子的实验越来越多，也越来越复杂及麻烦`);
    await era.printAndWait(
      `虽说危险度没那么高，但加上训练员的本职工作后忙碌程度甚至让你有些怀念那些危险的实验了`,
    );
    era.println();
    await tachyon.say_and_wait(`辛苦了，豚鼠君……`);
    await tachyon.say_and_wait(`放心吧，之后会好好给你奖励的`);
    era.println();
    await era.printAndWait(`奖励……？`);
    await era.printAndWait(
      `虽然不知道具体是什么，但奖励这个词还是激励了疲累的你`,
    );
    era.println();
    await era.printAndWait(`在收拾完实验器材后`);
    era.println();
    await tachyon.say_and_wait(`那么……作为奖励，就让我来帮你处理一下吧`);
    await tachyon.say_and_wait(`几天下来，积累的东西❤`);
    era.println();
    await era.printAndWait(`……欸？`);
    era.println();
    await tachyon.say_and_wait(`这种反应……难道，要拒绝吗？`);
    await tachyon.say_and_wait(`明明，都是恋人了不是吗？`);
    era.println();
    await era.printAndWait(`送到眼前的肉，哪有不吃的道理！`);
    await era.printAndWait(
      `再说……这几天由于实验的关系，确实也都没怎么发泄欲望……`,
    );
    await era.printAndWait(
      `这样的话，让自己的恋人来帮忙……应该也不是什么过分的事吧`,
    );
    era.println();
    await era.printAndWait(`鬼使神差下，你脱下了裤子`);
    era.println();
    await tachyon.say_and_wait(`嘶……`);
    era.println();
    await era.printAndWait(
      `虽然没有动画里甚至冒出蒸气那么夸张，但闷了一天的肉棒，依然散发出了足以挑逗起任何${tachyon.get_uma_sex_title()}性欲的气味来`,
    );
    await era.printAndWait(`速子紧紧盯着眼前的肉棒，移不开视线`);
    era.println();
    await tachyon.say_and_wait(`不行……忍不住了……❤`);
    era.println();
    await era.printAndWait(
      `你差点都忘记了，这几天由于实验导致欲望积累的，可不只你一人而已`,
    );
    await era.printAndWait(`一直在身旁做着实验的速子想必也是如此`);
    await era.printAndWait(`这么说来……比起奖励，果然只是找理由……`);
    era.println();
    await era.printAndWait(`想到这，你的心中忍不住起了坏心眼`);
    await era.printAndWait(
      `看见你掏出肉棒后就不再动作的模样，速子心急的看着你`,
    );
    era.println();
    await tachyon.say_and_wait(`豚鼠君……再等什么呢，快点，进来`);
    era.println();
    await era.printAndWait(
      `速子撅起双唇，唇间的粉舌前后移动着，尝试勾起你的情欲`,
    );
    await era.printAndWait(
      `但你依然没有做出反应，明白了你的意图的速子露出了哀怨的神情`,
    );
    era.println();
    await tachyon.say_and_wait(`……真过分`);
    era.println();
    await era.printAndWait(`速子蹲在地上，仿佛恳求一般仰视着高高翘起的肉棒`);
    era.println();
    await tachyon.say_and_wait(
      `求你了，豚鼠君……让我啾啵啾啵的……好好品尝……豚鼠君的肉棒……❤`,
    );
    era.println();
    await era.printAndWait(
      `见到你总算慢慢靠前了，速子猴急的将鼻子贴近了肉棒，深深的猛闻了几下`,
    );
    await era.printAndWait(`不老实的手咕啾咕啾的抠弄着蜜穴，发出呻吟`);
    await era.printAndWait(
      `在理性与感性都认可的这名雄性面前，身为雌性的自己只能跪在地上臣服`,
    );
    era.println();
    await tachyon.say_and_wait(`嘶……哈……嘶……`);
    await tachyon.say_and_wait(`肉棒……肉棒的味道`);
    await tachyon.say_and_wait(`请……让我再多闻闻……豚鼠君的……肉棒……`);
    await tachyon.say_and_wait(`鼻腔里面……全都是……雄性的味道`);
    era.println();
    await era.printAndWait(`你握着满是先走汁的肉棒`);
    await era.printAndWait(
      `恶作剧的来回磨蹭着不知何时已经跪在自己面前的速子的鼻尖`,
    );
    await era.printAndWait(`仿佛在做标记般，将汁液和气味涂满了速子的鼻子`);
    era.println();
    await tachyon.say_and_wait(
      `过分……要是……闻到这种味道……不就真的……回不去了……`,
    );
    era.println();
    await era.printAndWait(`不喜欢的话，那就算了？`);
    await era.printAndWait(
      `你作势要抽身而去，却看速子亦步亦趋的跟随着，其中鼻子完全没离开过肉棒哪怕一厘米的距离`,
    );
    era.println();
    await tachyon.say_and_wait(`光是味道……就要去了……`);
    era.println();
    await era.printAndWait(`仿佛担心又一次的恶作剧`);
    await era.printAndWait(`速子反过来用鼻尖不停刮蹭着你的龟头尖端`);
    await era.printAndWait(`仿佛要牢记这股味道一般，用力嗅着肉棒的臭味`);
    era.println();
    await tachyon.say_and_wait(`不行……受不了了……`);
    await tachyon.say_and_wait(`请让我含……求求，让我舔`);
    era.println();
    await era.printAndWait(`想要快一点舔到`);
    await era.printAndWait(`想要获得被允许吸吮肉棒的资格`);
    await era.printAndWait(`看着爱人的肉棒摆在自己眼前`);
    await era.printAndWait(`享受着气味的速子还是按耐不住，咽下口水`);
    era.println();
    await tachyon.say_and_wait(`咕啾`);
    await tachyon.say_and_wait(`嗯啾噜噜噜……啾噜……啾咕……`);
    era.println();
    await era.printAndWait(`还没得到许可，速子就已经吮吸起了肉棒`);
    await era.printAndWait(
      `你也松了口气，要是再继续下去，忍不住的就要换成你了`,
    );
    era.println();
    await era.printAndWait(`速子大大张开嘴，一口气将肉棒吞至根部`);
    await era.printAndWait(`不断上下吸弄，发出了下流的水声`);
    era.println();
    await tachyon.say_and_wait(`好吃……好美味……`);
    await tachyon.say_and_wait(`肉棒……豚鼠君臭臭的肉棒❤❤`);
    era.println();
    await era.printAndWait(`从根部到龟头，完整的包覆吸吮`);
    await era.printAndWait(
      `像涂唇膏一般，想毫无保留的将肉棒的味道蹭在自己口中`,
    );
    era.println();
    await era.printAndWait(`傍晚时分，大多数人已经回到家中或者宿舍的时间`);
    await era.printAndWait(
      `实验室中，回荡着无比淫糜的水声，是故意发出的，还是已经拼命到没有功夫去在意声音了？`,
    );
    await era.printAndWait(
      `对你的渴求，对肉棒的渴求，或许还有想要做出如此淫贱行为的背德感`,
    );
    await era.printAndWait(
      `对你的渴求，对肉棒的渴求，或许还有想要做出如此淫贱行为的背德感`,
    );
    await era.printAndWait(
      `一边服侍肉棒，一边摇晃的屁股也在不停摩擦着地板和手指，期望获得慰藉`,
    );
    await era.printAndWait(`但是……最美味的，果然还是口中的肉棒`);
    await era.printAndWait(`带着爱意的服侍，无声的说明着速子对眼前肉棒的癡迷`);
    await era.printAndWait(
      `倘若让${tachyon.sex}现在发誓一辈子作为肉棒的奴隶而活，或许${tachyon.sex}都会答应吧`,
    );
    era.println();
    await era.printAndWait(`忽然，你拍了拍速子的头`);
    await era.printAndWait(`听话的${tachyon.sex}马上察觉到了意思`);
    era.println();
    await tachyon.say_and_wait(
      `进来……请射进来……在我的嘴穴里……全部……喝下去❤❤`,
    );
    era.println();
    await era.printAndWait(`${tachyon.sex}马上更贴近的含吮着你的肉棒`);
    await era.printAndWait(`终于，白浆在口中爆发`);
    era.println();
    await tachyon.say_and_wait(`啾……咕啾………噗哈`);
    await tachyon.say_and_wait(`哈啊……哈……嗯……啾……`);
    era.println();
    await era.printAndWait(`速子慢慢咀嚼着射在口中的精液`);
    await era.printAndWait(`故意发出咕啾的咀嚼声后，将精液全部喝了下去`);
    await era.printAndWait(`随即，为了使残留的精液能被一滴不剩的喝干`);
    await era.printAndWait(`速子又一次含住了垂下的肉棒，不停啜吸着，打扫肉棒`);
    await era.printAndWait(
      `看见${tachyon.sex}如此癡迷的模样，你的下体不自觉的又硬了起来`,
    );
    era.println();
    await tachyon.say_and_wait(`下次实验还要拜托你哦，豚鼠君`);
    await tachyon.say_and_wait(`……当然，还会有奖励的`);
    await tachyon.say_and_wait(`你不会拒绝吧……亲爱的❤`);
    era.println();
    await era.printAndWait(
      `看着${tachyon.sex}媚眼如丝的模样，你选择再一次堵住那张不断对自己发号施令的小嘴`,
    );
  } else if (event_marks.explore_reward1 === 1) {
    event_marks.explore_reward1++;
    await print_event_name(`实验的奖励2`, tachyon);
    era.println();
    await tachyon.say_and_wait(`豚鼠君～今天的实验也辛苦了`);
    await tachyon.say_and_wait(`那么……需要奖励吗♡`);
    era.printButton(`来吧`, 1);
    era.printButton(`不……有点累了，还是先休息吧`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      era.println();
      await era.printAndWait(`滋啾滋啾`);
      await era.printAndWait(`实验室裏满是下流的声响`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……豚鼠君♡`);
      await tachyon.say_and_wait(`快点……填满我的骚穴♡`);
      await tachyon.say_and_wait(
        `好好调教这个……在实验途中就开始不停流水的淫穴`,
      );
      await era.printAndWait(`肉棒插入前就已经完全湿透的小穴将肉棒紧紧包裹`);
      await era.printAndWait(
        `每一下顶弄爱液都会飞溅而出，桌面和地板都染上了速子的腥臭穴汁`,
      );
      era.println();
      await tachyon.say_and_wait(`呜……好用力♡`);
      await tachyon.say_and_wait(`稍微…稍微慢一点……♡`);
      await tachyon.say_and_wait(`声音……啊嗯♡`);
      era.println();
      await era.printAndWait(`都这样勾引了还希望自己能慢一点？`);
      await era.printAndWait(`你用力拍打着速子的屁股`);
      await era.printAndWait(`不管不顾的加快了速度`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……豚鼠君♡`);
      await tachyon.say_and_wait(`啊♡嗯啊♡啊♡啊啊♡`);
      await tachyon.say_and_wait(`豚鼠君……给我♡给我更多♡`);
      era.println();
      await era.printAndWait(
        `渐入佳境后，腰甚至脱离了你的掌控，自行加快了速度`,
      );
      await era.printAndWait(
        `如此主动的缠绕使你的兴奋程度也更上层楼，渴望将眼前雌性的身体，任凭雄性本能操控着身体`,
      );
      era.println();
      await tachyon.say_and_wait(`好棒♡豚鼠君的肉棒♡好厉害♡`);
      era.println();
      await era.printAndWait(`肉体碰撞的声音更加响亮`);
      await era.printAndWait(`整个实验室中充斥着淫猥的气味及声音`);
      era.println();
      await tachyon.say_and_wait(`又……又更大了♡`);
      await tachyon.say_and_wait(
        `要射了吗……在，在里面出来♡好想要……豚鼠君的小宝宝♡`,
      );
      await tachyon.say_and_wait(`喜欢……最喜欢被豚鼠君内射了♡`);
      await tachyon.say_and_wait(
        `在小穴里面……尽情的出来……想生下豚鼠君的孩子♡想给豚鼠君生一窝小豚鼠♡`,
      );
      era.println();
      await era.printAndWait(`听见速子的话，你更不管不顾的加快加深`);
      await era.printAndWait(
        `哪怕是${tachyon.get_uma_sex_title()}的身体都只能娓娓配合着你的动作来回`,
      );
      await era.printAndWait(`你捏住前面不停晃动的两点尖端，用力向下拉`);
      era.println();
      await tachyon.say_and_wait(`齁喔喔喔喔喔喔♡`);
      await tachyon.say_and_wait(`去，去了♡要被扯着奶头去了♡`);
      era.println();
      await era.printAndWait(`咚咕，嘟咕，咻噜噜噜♡`);
      await era.printAndWait(`最后，最深入的插抽了几下后，精关彻底放开`);
      await era.printAndWait(`白浆灌满了速子的小穴`);
      await era.printAndWait(`被白浆灌入的瞬间，速子也全身痉挛着达到了巅峰`);
      era.println();
      await tachyon.say_and_wait(`好几天没能品尝到的……豚鼠君的肉棒♡欸嘿嘿♡`);
      await tachyon.say_and_wait(`好棒……豚鼠君的……好唔唔♡`);
      era.println();
      await era.printAndWait(`自以为已经结束的速子，感叹的话才说到一半`);
      await era.printAndWait(`便被你的肉棒再度堵住了嘴`);
      era.println();
      await tachyon.say_and_wait(`啾……啾啾♡`);
      era.println();
      await era.printAndWait(`速子顺从的帮你清理着肉棒`);
      await era.printAndWait(
        `满是自己淫汁和豚鼠君精液的肉棒，对速子而言现在哪怕将豚鼠君的便当摆在面前，${tachyon.sex}大概都会优先选择肉棒`,
      );
      era.println();
      await tachyon.say_and_wait(`下次实验……一样拜托你了♡啾♡啾啵♡`);
      await tachyon.say_and_wait(`唔！唔啾♡啾噜♡`);
      era.println();
      await era.printAndWait(
        `听见速子变着法子说出的”下次再来做吧”，你的肉棒又硬了起来`,
      );
      await era.printAndWait(
        `勾引的眼前${tachyon.get_uma_sex_title()}再度露出雌性的表情`,
      );
    } else {
      await era.printAndWait(`今天太累了，还是改天吧`);
      await era.printAndWait(`速子不满的望着你，却没有说什么`);
      await era.printAndWait(
        `毕竟这几天无论是你还是${tachyon.sex}都已经累的不行这也是事实`,
      );
      await era.printAndWait(
        `不过……给人奖励的人露出这样的臭脸，不就搞不清楚到底谁才是“被奖励”的那方了吗？`,
      );
    }
  } else if (event_marks.explore_reward2 === 1) {
    event_marks.explore_reward2++;
    await print_event_name(`实验的奖励3`, tachyon);
    await tachyon.say_and_wait(`豚鼠君～今天的实验也辛苦了`);
    await tachyon.say_and_wait(`那么……需要奖励吗♡`);
    era.printButton(`来吧`, 1);
    era.printButton(`不……有点累了，还是先休息吧`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`果然，不应该是这个洞口的吧？`);
      await era.printAndWait(`明明下面的骚穴也痒的不行`);
      await era.printAndWait(`为什么插的却是那种地方`);
      await era.printAndWait(`而且还是这种……这种姿势`);
      era.println();
      await era.printAndWait(`紧紧的后穴，包裹着豚鼠君的粗壮肉棒`);
      await era.printAndWait(
        `比起小穴，皱折更多的菊穴在给予豚鼠君更多快感的同时，也给自己带来了小穴两倍的快感`,
      );
      await era.printAndWait(
        `这点来讲，对于满足性欲的条件来说，或许确实比小穴更好用……但是……`,
      );
      era.println();
      await tachyon.say_and_wait(
        `这种像小狗一样的姿势……再加上这个穴……这不就是真正的小狗吗♡`,
        true,
      );
      era.println();
      await era.printAndWait(`但是……仔细想想似乎也不是不行♡`);
      await era.printAndWait(`豚鼠君是自己专属的豚鼠君`);
      await era.printAndWait(`${tachyon.name}是豚鼠君专属的小母狗`);
      await era.printAndWait(
        `这么一想，自己的身体仿佛马上就无缝代入角色了一般，开始高兴的摇晃着尾巴，讨着主人欢心`,
      );
      era.println();
      await era.printAndWait(
        `好像感觉到了身下人的胡思乱想，你拍了速子的屁股提醒${tachyon.sex}专心`,
      );
      await era.printAndWait(
        `但已经完全代入角色的速子却更用力的摇晃起屁股，夹紧了自己的屁穴`,
      );
      await era.printAndWait(`突如其来的攻击，使得你一时精关失守`);
      await era.printAndWait(
        `你按住了速子的腰，在屁穴里将积累了几天的精液全部排泄一空`,
      );
      await era.printAndWait(
        `胯下的速子在这个时候，也仿佛想将自己的幸福传达给主人的母狗一般`,
      );
      await era.printAndWait(`欢快的排出小便表露自己此时的心情`);
      await era.printAndWait(
        `然而你还没来得及做出表示，就迎来了第二个重量级的冲击`,
      );
      era.println();
      await tachyon.say_and_wait(`汪……汪汪♡`);
      await era.printAndWait(
        `看见你脸上迷惑的表情后，速子才仿佛忽然回过神自己都做了什么`,
      );
      await era.printAndWait(`脸颊瞬间通红`);
      era.println();
      await tachyon.say_and_wait(`豚鼠君……不是，我……没有……不是你想的那样……`);
      era.println();
      await era.printAndWait(`虽然不知道发生了什么，但先装作无事发生吧`);
    } else {
      await era.printAndWait(`今天太累了，还是改天吧`);
      await era.printAndWait(`速子不满的望着你，却没有说什么`);
      await era.printAndWait(
        `毕竟这几天无论是你还是${tachyon.sex}都已经累的不行这也是事实`,
      );
      await era.printAndWait(
        `不过……给人奖励的人露出这样的臭脸，不就搞不清楚到底谁才是“被奖励”的那方了吗？`,
      );
    }
  }
};

/**
 * 速子的日常事件，id=32
 *
 * @author 名贵易碎电子盆栽孕袋女士
 * @author 黑奴队长（修订） 黑奴一号
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
