const era = require('#/era-electron');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');

/** @type {Record<string,function(stage_id:HookArg,extra_flag:*):Promise<boolean|void>>} */
const handlers = {};

handlers[
  event_hooks.week_start
] = require('#/event/daily/daily-events-32/punishment');

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
handlers[event_hooks.good_morning] = async function () {
  const tachyon = get_chara_talk(32),
    buffer = [];
  buffer.push([
    [
      '你来了啊，那就顺便把门口那三袋垃圾丢了吧……帮助实验？需要你的时候自然会叫你。',
    ],
    `速子似乎正忙着实验的样子。`,
  ]);
  /*// todo 反发三概率触发
  era.println();
  await era.printAndWait(`忽然,速子吻住了你`);
  await era.printAndWait(
    `一股热流,在你们的口间传递,被两人饮下 热流顺着你的喉咙向下`,
  );
  await era.printAndWait(`热流流过的地方瞬间产生了灼烧感`);
  era.println();
  await tachyon.say_and_wait(`痛吗?豚鼠君`);
  await tachyon.say_and_wait(
    `我也好痛......虽然是我自己做的药,但没 想到威力居然这么强啊`,
  );
  era.println();
  await era.printAndWait(`速子脸上带笑,眼神中却没有笑意`);
  era.println();
  await tachyon.say_and_wait(`我不会责怪你......毕竟,是被骗的人自己 不好`);
  await tachyon.say_and_wait(`这是对你,同时也是对我识人不清的惩罚`);
  await tachyon.say_and_wait(
    `也不会要求你离开......虽然很不想承认, 但即便发生了这样的事,我也还是不希望你离开 我`,
  );
  await tachyon.say_and_wait(
    `所以,我亲爱的豚鼠君......接下来的余·生,请让我们一起互相折磨下去吧?`,
  );*/
  const entry = get_random_entry(buffer);
  entry[0].forEach((e) => tachyon.say(e));
  era.print(entry[1]);
};

handlers[event_hooks.talk] = async function () {
  const love = era.get('love:32'),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32),
    relation = era.get('relation:32:0');
  if (relation < 75) {
    switch (get_random_value(0, 9)) {
      case 0:
        await tachyon.say_and_wait(
          `来，这次的药………「味道很怪」？你似乎忘了，你只是一只实验动物而已，哪有实验动物嫌弃药物味道的道理？`,
        );
        break;
      case 1:
        await tachyon.say_and_wait(
          `极限……马娘……腿……不，果然还是不行……豚鼠君？你在这里站多久了？`,
        );
        await era.printAndWait(`速子似乎在思考着什么。`);
        break;
      case 2:
        await tachyon.say_and_wait(
          `曼城茶座？嗯，她是个很有趣的观察对象，而且万一……不，没什么，忘了我说的话吧。`,
        );
        break;
      case 3:
        await tachyon.say_and_wait(`衣服……？啊，好像三天没洗澡了吧……`);
        await tachyon.say_and_wait(
          `这跟你有什么关系，有那个时间浪费不如多花点时间在实验上……`,
        );
        await tachyon.say_and_wait(
          `够了，你只是豚鼠而已，我做什么与你没有关系。`,
        );
        break;
      case 4:
        await era.printAndWait(`你看见爱丽速子正在用搅拌机打今天的午餐。`);
        await tachyon.say_and_wait(
          `食物？没有必要，无论是人或者马娘，只需要补充最基础的营养值就够了，多余的追求味道不过是白费工夫。`,
        );
        break;
      case 5:
        await tachyon.say_and_wait(
          `你不过是区区豚鼠而已，努力在协助我实验的同时讨我欢心吧，这样或许我还能在你没有价值的时候大发慈悲。`,
        );
        break;
      case 6:
        await era.printAndWait(`有什么话快说，别浪费我实验的时间。`);
        break;
      case 7:
        await tachyon.say_and_wait(`呼……`);
        await era.printAndWait(
          `爱丽速子叹了口气，心情似乎很不好的样子，最好还是别上去打扰她吧……`,
        );
        break;
      case 8:
        await tachyon.say_and_wait(`哼哼哼～～哼哼～～`);
        await era.printAndWait(
          `爱丽速子心情好像很好的样子，但看见她手上拿着的散发出危险墨绿色光芒的药剂，你决定还是不去打扰她的好心情了。`,
        );
        break;
      /* TODO 闲聊次数过多时
      await tachyon.say_and_wait(`……豚鼠君，你今天的实验报告写完了吗？`);
           await tachyon.say_and_wait(`有功夫在这里聊天不如先去把该做的事做完吧`);
 */
    }
  } else if (relation >= 75 && relation < 150) {
    switch (get_random_value(0, 8)) {
      case 0:
        await tachyon.say_and_wait(
          `豚鼠君，今天的药……想逃？哼哼，你怎么会觉得自己有办法从马娘的手中逃脱呢？`,
        );
        break;
      case 1:
        await tachyon.say_and_wait(
          `马娘的极限……冲刺……进化……生存……人类补完计划……腐败的社会……救赎……重生……跳脱封闭的现况……`,
        );
        await tachyon.say_and_wait(`啊，我明白了，一切的真相都在埃及啊。`);
        await era.printAndWait(
          `……速子忽然在说什么奇怪的东西，还是不要去打扰她吧。`,
        );
        break;
      case 2:
        await tachyon.say_and_wait(
          `啊……来得正好，帮我洗下我的白大褂吧，前几天实验弄脏了…………`,
        );
        await tachyon.say_and_wait(
          `为什么不马上给？那不是忘记了吗？再说没第一时间发现应该是你身为豚鼠的失责吧？`,
        );
        break;
      case 3:
        await tachyon.say_and_wait(
          `食物？……我的观点还是没有改变，食物不过是为了补充营养而存在的，没有在此之上或在此之下的价值……`,
        );
        await tachyon.say_and_wait(
          `不过，也是吧，最近我确实开始期待起这段时间了……`,
        );
        await tachyon.say_and_wait(
          `不，别想太多了，只是为了好好让你知道天高地厚而已，那次羞辱我的罪可没这么容易赎清，要是你愿意每天给我试药的话倒也不是不能考虑……`,
        );
        await me.say_and_wait(`那不就和现在一样吗？`);
        await tachyon.say_and_wait(
          `这么说好像也是……等等，每天……不，没什么，忘了我说的，现在，立刻，马上。`,
        );
        break;
      case 4:
        await tachyon.say_and_wait(
          `最近做的饭……还行吧，不过可以考虑加点甜……不，没什么`,
        );
        break;
      case 5:
        await tachyon.say_and_wait(`啊，赤骥……“上次的饼干和饮料非常感谢”？`);
        await tachyon.say_and_wait(
          `没什么，你喜欢的话我这里还有，再来找我拿吧…………`,
        );
        await tachyon.say_and_wait(
          `你那是什么表情，再怎么说我也不会给可爱的后辈塞那种东西的`,
        );
        break;
      case 6:
        await tachyon.say_and_wait(`哼哼～～哼哼哼～～`);
        await tachyon.say_and_wait(`十只豚鼠出门玩～掉进海湾剩九只～`);
        await tachyon.say_and_wait(`摔进火山剩八只～宝穴迷路剩七只～`);
        await tachyon.say_and_wait(`卷入怒涛剩六只～神鹰袭击剩五只～`);
        await tachyon.say_and_wait(`吃饭撑死剩四只～攀登高峰剩三只～`);
        await tachyon.say_and_wait(`涡轮爆炸剩两只～咖啡过量剩一只～`);
        await tachyon.say_and_wait(`孤独豚鼠吱吱吱～喝下药剂爆炸啦～～`);
        await era.printAndWait(
          `你听见速子正在哼着什么怪歌……虽然听不懂歌词内容，但你觉得还是不要靠近这时的她比较好。`,
        );
        break;
      // TODO 料理次数相关
      //做料理次数<5
      case 7:
        await tachyon.say_and_wait(
          `豚鼠君，要是没什么事做的话不如去钻研你的料理技术如何，早日做出人能下口的菜来吧`,
        );
        break;
      //做料理次数>5
      case 8:
        await tachyon.say_and_wait(
          `豚鼠君，真的没事的话去把实验器具都清洗一遍吧，或者去洗我的实验服，再不然去丢垃圾，不是有很多你能做的事吗？别在这里发呆了`,
        );
        break;
    }
    /*满足好感度>150时闲聊次数过多：
    await tachyon.say_and_wait(
      `豚鼠君，虽然我不介意和你多聊点，但你应该还有其他该做的事吧？`,
    );*/
  } else if (relation > 150 && relation < 225) {
    switch (get_random_value(0, 8)) {
      case 0:
        await tachyon.say_and_wait(
          `豚鼠君！今天的药你要选择右边这瓶绿色的，还是左边这瓶红色的呢`,
        );
        await tachyon.say_and_wait(
          `都不要？我就知道，果然是第三选择的彩虹色对吧！`,
        );
        break;
      case 1:
        await tachyon.say_and_wait(`豚鼠君……明天的便当`);
        era.println();
        await era.printAndWait(`你尝试告诉速子明天是假日`);
        era.println();
        await tachyon.say_and_wait(
          `欸……豚鼠君啊，就算是休息日，人也不能不吃饭的哦`,
        );
        await era.printAndWait(`她用一种担忧的眼神看着你`);
        await me.say_and_wait(`…………`);
        era.println();
        await era.printAndWait(
          `你忽然理解了，这个情况说什么都是没用的，只能答应了给她做便当`,
        );
        break;
      case 2:
        await tachyon.say_and_wait(`豚鼠君～～今天的衣服也拜托了`);
        await tachyon.say_and_wait(
          `哈？自己洗？你以为我的时间是大风吹来的吗？`,
        );
        await tachyon.say_and_wait(`再说，这不也是对你的福利吗～～`);
        await tachyon.say_and_wait(`这可是我穿过的贴身衣物啊～～`);
        await tachyon.say_and_wait(`好臭！？喂！也太失礼了！`);
        break;
      case 3:
        await tachyon.say_and_wait(`哈？都不去上课成绩会不会有问题？`);
        await tachyon.say_and_wait(
          `豚鼠君啊，你要知道，应试教育是为了将庸人教育成才，这种东西对天生之才的我而言当然是没有必要的`,
        );
        await tachyon.say_and_wait(
          `“所以考试不去也没关系吗？” ？你在说什么呢，豚鼠君，考试不是明天吗……今天！？`,
        );
        break;
      case 4:
        await tachyon.say_and_wait(`豚鼠君～～要喝什么饮料吗？`);
        era.println();
        await era.printAndWait(`速子忽然带着满脸的坏笑问你道`);
        await era.printAndWait(`无事献殷勤，非奸即盗`);
        await era.printAndWait(`话虽如此，直接拒绝一定会让她恼羞成怒吧`);
        era.println();
        await tachyon.say_and_wait(`怎么样，要喝什么？`);
        era.println();
        await era.printAndWait(`该怎么办呢……`);
        era.printButton(`红茶`, 1);
        era.printButton(`咖啡`, 2);
        era.printButton(`沙士`, 3);
        era.printButton(`不喝`, 4);
        // eslint-disable-next-line no-case-declarations
        const ret1 = await era.input();
        if (ret1 === 1) {
          await era.printAndWait(`果然还是王道系的红茶吧`);
          await era.printAndWait(
            `速子点了点头，彷佛在说就知道你会选这个一样，从背后掏出已经加好料的红茶`,
          );
          era.drawLine();
          await era.printAndWait(`…………你看着药粉都没完全化开的红茶，满脸黑线`);
          era.println();
          await tachyon.say_and_wait(
            `怎么了，豚鼠君？这可是我亲手泡的茶，快喝吧`,
          );
          era.println();
          await era.printAndWait(
            `……罢了，早在选红茶的时候你就已经知道一定是这种发展了不是吗`,
          );
          await era.printAndWait(`你一口喝干了红茶`);
          await era.printAndWait(`嗯，美味又爽口`);
          await era.printAndWait(`啪搭`);
          await era.printAndWait(`这是你不省人事摔在桌上的声音`);
        } else if (ret1 === 2) {
          await era.printAndWait(`还是咖啡吧，最近工作比较忙喝的比较多`);
          //todo If 队伍里有曼城茶座
          await era.printAndWait(`还是咖啡吧，最近经常喝茶座泡的咖啡`);
          era.println();
          await tachyon.say_and_wait(`怎么喝那种苦的要死跟泥水一样的饮料啊`);
          era.println();
          await era.printAndWait(`给我向曼城茶座道歉啊喂`);
          era.println();
          await tachyon.say_and_wait(`算了，要喝就喝吧`);
          era.println();
          await era.printAndWait(`速子无可奈何的从背后掏出已经准备好的饮料`);
          era.drawLine();
          await era.printAndWait(
            `你看着眼前药粉都没化开的深红色液体，心里第一次感到槽点太多导致吐槽不出口的感受`,
          );
          era.println();
          await era.printAndWait(`首先……咖啡？`);
          await tachyon.say_and_wait(`……咖啡因很多，就当是咖啡吧`);
          await tachyon.say_and_wait(`…………`);
          await me.say_and_wait(`…………`);
          era.println();
          await era.printAndWait(`你们两人相顾无言，你认命的喝下了饮料`);
          await era.printAndWait(`啪搭`);
          await era.printAndWait(`这是你不省人事摔在桌上的声音`);
        } else if (ret1 === 3) {
          await era.printAndWait(`沙士吧，虽然小众但确实好喝`);
          era.println();
          await tachyon.say_and_wait(`欸……你怎么喜欢那种奇怪口味的饮料`);
          era.println();
          await era.printAndWait(`我就喜欢，不行吗？`);
          era.println();
          await tachyon.say_and_wait(
            `………不是，那饮料闻起来喝起来就像药，那换句话说你直接喝我的药不就好了`,
          );
          era.println();
          await era.printAndWait(`！？`);
          await era.printAndWait(`看起来她似乎完全不打算装了`);
          await era.printAndWait(
            `把加了药的红茶放到一旁后，直接从白大褂里掏出荧光色的药剂`,
          );
          await era.printAndWait(`你象征性的抵抗了两下，随即便被迫一口干了`);
          await era.printAndWait(`啪搭`);
          await era.printAndWait(`这是你不省人事摔在桌上的声音`);
          era.drawLine();
          await era.printAndWait(
            `话说，这药喝起来也不像药味啊，为什么是亲子丼的味道啊！？`,
          );
        } else {
          await era.printAndWait(
            `你拒绝了，哪怕抵抗是徒劳的，你也要做出自己的反抗`,
          );
          era.println();
          await era.printAndWait(
            `这才是，这才是，人类的觉悟啊啊啊啊啊啊啊啊啊`,
          );
          era.println();
          await tachyon.say_and_wait(`吵死了`);
          era.println();
          await era.printAndWait(
            `然而，觉悟并没有帮助你爆发小宇宙，人类再怎么样也是胜不过马娘的，五秒后你便被按住了脸，强迫张开口被灌下液体`,
          );
          era.println();
          await tachyon.say_and_wait(`早知道这样还省事点`);
          await era.printAndWait(`啪搭`);
          await era.printAndWait(`这是你不省人事摔在桌上的声音`);
        }
        break;
      case 5:
        await era.printAndWait(`速子忽然反常的一言不发将身体靠在你身上`);
        era.println();
        await tachyon.say_and_wait(`豚鼠君，怎么了吗？`);
        era.println();
        await era.printAndWait(`没什么`);
        await era.printAndWait(`在你回答之后，她继续靠在你身上`);
        await era.printAndWait(`两人之间没有对话，就这样无言的度过了一段时间`);
        break;
      case 6:
        await era.printAndWait(
          `豚鼠君？来的正好，快帮我把这些东西誊写到防燃的特殊纸上！`,
        );
        await era.printAndWait(
          `茶座那家伙！不过就是拿她做了次实验，居然威胁要把我的实验资料全烧了！`,
        );
        await era.printAndWait(
          `还好我好说歹说让她留到下午三点再烧，再这之前得快点誊上去才行！`,
        );
        era.println();
        await era.printAndWait(`你急急忙忙的被速子赶上桌开始加入誊写作业`);
        await era.printAndWait(
          `但你内心涌现一个疑惑，一般情况要烧真的会这样事先提醒吗……？`,
        );
        era.println();
        await era.printAndWait(
          `果不其然，下午三点后，研究资料并没有燃烧起来，实验室一如既往的和平，`,
        );
        await era.printAndWait(
          `受到伤害的只有花了半天时间誊写了一屋子研究资料的你和速子的手`,
        );
        break;
      case 7:
        await tachyon.say_and_wait(`大和那孩子……不是挺可爱的吗？`);
        await tachyon.say_and_wait(
          `不知道为什么看到她的时候总有种类似于父性一般的感情涌现`,
        );
        era.println();
        await era.printAndWait(`难道不是母性吗？`);
        era.println();
        await tachyon.say_and_wait(
          `不是……这种感觉很难说明，等你变成马娘大概就能懂了吧`,
        );
        era.println();
        await era.printAndWait(`不要说的好像我总有一天会变成马娘一样啊！？`);
        break;
      case 8:
        await tachyon.say_and_wait(`sky君真是个好孩子啊……`);
        era.println();
        await era.printAndWait(`嗯？原来速子和sky认识吗`);
        era.println();
        await tachyon.say_and_wait(`不……我说的和你说的大概不是同个sky君`);
        era.println();
        await era.printAndWait(`你歪着头看向速子，学园里还有其他sky吗`);
        era.println();
        await tachyon.say_and_wait(`……不，算了，豚鼠君，当我没说吧`);
        break;
    }
  } else if (relation > 225 && love < 50) {
    switch (get_random_value(0, 6)) {
      case 0:
        await tachyon.say_and_wait(`豚鼠君……`);
        era.println();
        await era.printAndWait(`嗯？`);
        await era.printAndWait(`你听见速子似乎在喊你的样子，于是回头一看`);
        era.println();
        await tachyon.say_and_wait(`没什么，叫着玩的`);
        era.println();
        await era.printAndWait(`于是你转回头去继续做自己的事`);
        era.println();
        await tachyon.say_and_wait(`豚鼠君`);
        await tachyon.say_and_wait(`豚鼠君`);
        await tachyon.say_and_wait(`豚鼠君`);
        era.println();
        await tachyon.say_and_wait(`（玩家名）君`);
        await era.printAndWait(`！？`);
        await era.printAndWait(`你忽然回过头来，眼前却是速子一如往常的笑容`);
        await era.printAndWait(`彷佛刚刚什么也没发生过一般`);
        break;
      case 1:
        await tachyon.say_and_wait(`豚鼠君……`);
        era.println();
        await era.printAndWait(`速子靠在你的背后发出了撒娇般的低语`);
        await era.printAndWait(`然而你却没有任何一点的脸红心动`);
        await era.printAndWait(`上次因此上当转过头来就被灌了一瓶药剂`);
        await era.printAndWait(`这次无论怎么喊自己都绝对不会回过头来的`);
        era.println();
        await tachyon.say_and_wait(`豚鼠君……`);
        await tachyon.say_and_wait(`豚鼠君……❤`);
        await tachyon.say_and_wait(`豚鼠君❤`);
        await tachyon.say_and_wait(`豚鼠君❤`);
        era.println();
        await era.printAndWait(`不知为何，她的口气越来越暧昧黏稠`);
        await era.printAndWait(`不敢回头的你只能忍着内心的焦灼继续端坐原地`);
        era.println();
        await tachyon.say_and_wait(`…………笨蛋`);
        era.println();
        await era.printAndWait(
          `听见她最后一声轻哼，你终于没忍住，还是转过了头来`,
        );
        await era.printAndWait(`然后……`);
        era.println();
        await era.printAndWait(`咕咚`);
        await era.printAndWait(`爱丽速子的手上，拿着一个空的试管`);
        await era.printAndWait(
          `试管里的东西？在刚刚你回头的那个瞬间便已经全部塞入你的嘴里了`,
        );
        era.println();
        await tachyon.say_and_wait(`真是……这次居然这么顽强啊`);
        era.println();
        await era.printAndWait(`药效发作，这次似乎是有麻痹效果的药物`);
        await era.printAndWait(`你努力撑着回过头来，眼前是一脸得意的速子`);
        await era.printAndWait(
          `原本想说出口的抱怨话语，却在看见她那微红脸庞的瞬间消失的烟消云散`,
        );
        era.println();
        await era.printAndWait(`果然，还是敌不过她啊`);
        await era.printAndWait(`带着这样的感想，你陷入了黑暗之中`);
        break;
      case 2:
        await era.printAndWait(`速子似乎正在做实验的样子`);
        await era.printAndWait(`你盯着她姣好的侧脸，忽然兴起了恶作剧的念头`);
        era.printButton(`爱丽速子`, 1);
        await era.input();
        era.println();
        await era.printAndWait(`你轻声说道`);
        await era.printAndWait(
          `她的背影忽然抖了一下，却没有回过头，仍然装作没事的做着实验`,
        );
        era.println();
        await era.printAndWait(`看到这一幕更加激起了你的童心`);
        era.println();
        await me.say_and_wait(`爱丽速子`);
        await me.say_and_wait(`爱丽速子`);
        await me.say_and_wait(`爱丽速子`);
        await me.say_and_wait(`爱丽速子`);
        era.println();
        await era.printAndWait(`你试着换了许多不同声调`);
        await era.printAndWait(`每次喊出口，她的身体就会抖的比前一次还长`);
        await era.printAndWait(`你从侧面看见了她的脸庞也变得越来越红`);
        era.println();
        await era.printAndWait(`看见她脸颊绯红的模样，你也不由得害羞了起来`);
        await era.printAndWait(`但这个时候心中的欲望也不允许自己停下了`);
        await era.printAndWait(`你不停喊着，声音越发轻柔`);
        await era.printAndWait(
          `渐渐的，原本恶作剧的心已经消失，现在的你只是想看见她更加害羞，更加少女的模样`,
        );
        era.println();
        await era.printAndWait(`…………爱丽速子？少女？`);
        await era.printAndWait(`明明应该极不称对的两个词，现在却如此贴合`);
        await era.printAndWait(`就这样，不断的持续着`);
        await era.printAndWait(`一方的不断呼喊，和另一方的故作不知`);
        era.drawLine();
        await era.printAndWait(`忽然，她的脸色从红润变成了苍白`);
        await era.printAndWait(
          `一直盯着她的你马上注意到了这点，顺着她的视线看去`,
        );
        era.println();
        await era.printAndWait(
          `视线尽头是她手上拿着的，画了三角形危险标志的药物`,
        );
        await era.printAndWait(`如今药瓶已经完全空荡`);
        await era.printAndWait(`似乎是在加入的时候由于手抖一次全加进去了`);
        await era.printAndWait(`而她手上，加入了过多危险药品的那管试管……`);
        await era.printAndWait(
          `液面正以肉眼可见的速度向上膨发，直至溢出试管外，比这更致命的是冒出的蒸气，`,
        );
        await era.printAndWait(
          `以无法想象是那么小一管试管能够喷出的量充溢室内，往室外飘出`,
        );
        era.println();
        await era.printAndWait(`此时，她终于回过头来了`);
        await era.printAndWait(
          `你看见她脸上再度变得红润，这次你很确定这并非是害羞`,
        );
        await era.printAndWait(`而是……………`);
        era.println();
        await tachyon.say_and_wait(`豚鼠君！！！！！！！！！！！！！！`);
        await era.printAndWait(`【来自学园的通知】`);
        await era.printAndWait(`下午，爱丽速子，药剂，完毕`);
        break;
      case 3:
        await tachyon.say_and_wait(`哦呀，豚鼠君，怎么忽然来找我聊天？`);
        await tachyon.say_and_wait(`呵呵，只是忽然心血来潮吗？`);
        await tachyon.say_and_wait(
          `不然还能有什么其他目的？不，没什么，只是我觉得对事物抱有好奇心是件好事而已`,
        );
        await tachyon.say_and_wait(
          `包括对口上的探索也是，你说对吧，屏幕那边的豚鼠君？`,
        );
        await tachyon.say_and_wait(`我在说什么？呵呵，谁知道呢`);
        break;
      case 4:
        await tachyon.say_and_wait(`啊啊，豚鼠君小心！`);
        await tachyon.say_and_wait(`呼，都怪你忽然跟我搭话，差点把药洒出来了`);
        await tachyon.say_and_wait(`什么药？呵呵，还记得之前搜集的你的dna吗？`);
        await tachyon.say_and_wait(
          `这是能让闻到的人都疯狂迷恋上你的药哦……嗯？忽然开始后悔没洒出来了？……色鬼`,
        );
        await tachyon.say_and_wait(
          `开玩笑的，其实是以那人的dna为基础的针对性毒药……`,
        );
        await tachyon.say_and_wait(
          `哪怕只是闻到蒸气都能让你的鼻道产生病变制造癌细胞……`,
        );
        await tachyon.say_and_wait(
          `喂喂，不用吓成那样吧，哈哈，反正没洒出来就好`,
        );
        await tachyon.say_and_wait(`嗯？到底哪个才是真的……这就任君想象了～～`);
        break;
      case 5:
        await tachyon.say_and_wait(`豚鼠君……今天的衣服……`);
        await tachyon.say_and_wait(
          `然后，那个，我想了想，让你帮我洗衣服姑且不论，内衣裤也洗果然还是有点过份了`,
        );
        await tachyon.say_and_wait(
          `……不，都说了不是味道的问题了，再说一点也不臭啊！`,
        );
        break;
      case 6:
        await tachyon.say_and_wait(
          `事到如今，我似乎已经完全习惯你做的便当了啊`,
        );
        await tachyon.say_and_wait(
          `呵呵，现在要是哪天吃不到你的便当我反而会感到不自在了`,
        );
        await tachyon.say_and_wait(`这样的生活……继续维持下去……`);
        await tachyon.say_and_wait(`呵呵，对研究者而言，维持可不是什么好话啊`);
        await tachyon.say_and_wait(`只想着维持是无法出现突破的……`);
        await tachyon.say_and_wait(`没错……但是……`);
        await tachyon.say_and_wait(
          `为什么呢，我忽然觉得，现在的生活维持下去也不错……`,
        );
        await tachyon.say_and_wait(`为什么呢……`);
        break;
    }
  } else if (relation > 375 && love <= 50) {
    //todo 状态为不调、绝不调
    if (love === 100) {
      await tachyon.say_and_wait(`豚鼠君，我累了，借我躺下`);
      era.printButton(`同意`, 1);
      era.printButton(`拒绝`, 2);
      await era.input();
      era.println();
      await era.printAndWait(
        `还没等你内心做出选项，速子便已经躺在你的膝盖上了`,
      );
      era.printButton(`喂，速子`, 1);
      await era.input();
      era.println();
      await tachyon.say_and_wait(`ZZZ`);
      era.println();
      await era.printAndWait(`好快！？`);
      await era.printAndWait(`为了不惊醒她，你只能乖乖维持着原来的姿势不动了`);
      await era.printAndWait(
        `等她醒来之后还是得好好说一下才行，添麻烦的事姑且不论，随便躺在异性的膝盖上也太没危机感了`,
      );
      era.println();
      await tachyon.say_and_wait(`唔嗯……`);
      era.println();
      await era.printAndWait(
        `似乎睡的有些不安稳的她翻了个身，而你心中的数落在看见她的正脸时顿时化为乌有`,
      );
      await era.printAndWait(
        `她眼角的黑眼圈，倒头就睡的疲惫感，一再显示了她睡眠状况的不安稳`,
      );
      await era.printAndWait(
        `仔细想想，最近她似乎因为研究瓶颈总是没能好好入睡`,
      );
      await era.printAndWait(
        `唯一使人欣喜的，是躺在你的膝盖上时，她舒展的眉间`,
      );
      await era.printAndWait(
        `……要是这样能让她好睡一些的话，偶尔这么做一次大概也无妨吧`,
      );
      //todo 速子的状态 上升1级
    }
    switch (get_random_value(0, 1)) {
      case 0:
        await era.printAndWait(`哦，来了啊豚鼠君`);
        await era.printAndWait(`今天的实验……嗯？怎么了`);
        await era.printAndWait(`靠的太近了？是吗？我倒是觉得刚刚好来着`);
        await era.printAndWait(`还是说，你害羞了？`);
        break;
      case 1:
        await tachyon.say_and_wait(`豚鼠君，来得正好`);
        await tachyon.say_and_wait(`帮我试试今天的新药吧`);
        era.println();
        await era.printAndWait(
          `你习以为常的喝下了今天的药……嗯？怎么感觉像红茶`,
        );
        await era.printAndWait(
          `你疑惑的看着自己手上的试管，是散发着可疑的光芒，一看就知道是爱丽速子出品的药物，但为什么……`,
        );
        era.println();
        await tachyon.say_and_wait(`感觉如何？`);
        era.println();
        await era.printAndWait(
          `在疑惑中被问到感想，你下意识的对红茶的口味做出了评价`,
        );
        await era.printAndWait(
          `回答完后你才回忆起这是药而不是红茶，完蛋，这下要被狠狠批评了……`,
        );
        era.println();
        await tachyon.say_and_wait(
          `……香味不够，太甜，还有颜色……是吗？嗯……很有参考价值的回答……`,
        );
        era.println();
        await era.printAndWait(`欸？这样就过关了吗？`);
        era.println();
        await tachyon.say_and_wait(
          `……对了，你的身体素质现在也有所上升，所以以后每天喝的药追加一剂吧，`,
        );
        await tachyon.say_and_wait(
          `除了原来的药以外，再多加这种药剂……之后我会好好改良到你都无法挑剔的口味出来的`,
        );
        era.printButton(`难道说……`, 1);
        era.printButton(`……难道说……`, 2);
        // eslint-disable-next-line no-case-declarations
        const ret1 = await era.input();
        if (ret1 === 1) {
          await era.printAndWait(`红茶的味道`);
          await era.printAndWait(`对口味的考察及改良`);
          await era.printAndWait(`换句话说，就是这样吧`);
          era.println();
          await era.printAndWait(
            `仔细想想，虽然太甜，但除了香味，那管“药剂”忽略外表不看……`,
          );
          await era.printAndWait(
            `不，虽然说很疑惑她到底是如何连泡红茶都能泡出那种颜色的，`,
          );
          await era.printAndWait(
            `但仔细想想那不就是她平常最喜欢的红茶的口味吗？`,
          );
          era.println();
          await tachyon.say_and_wait(`好好期待着吧！`);
          era.println();
          await era.printAndWait(`速子似乎有些不服气的说道`);
          await era.printAndWait(
            `此时你忽然想起，当初自己做便当给她，被挑剔的一文不值时，似乎也是像这样不服气的`,
          );
          await era.printAndWait(`仔细想想，当初的她是怎么回答的？`);
          era.printButton(`我会好好期待着的，研究者君`, 1);
          await era.input();
          era.println();
          await tachyon.say_and_wait(
            `你听见速子小声的自言自语，忍不住露出笑容`,
          );
        } else {
          await era.printAndWait(`红茶的味道`);
          await era.printAndWait(`对口味的考察及改良`);
          await era.printAndWait(`换句话说，就是这样吧`);
          era.println();
          await era.printAndWait(
            `事到如今，她终于不满足于拿自己来试药，已经要将魔爪伸向其他人了！`,
          );
          await era.printAndWait(
            `现在就在尝试做出红茶味道的药剂来，要是让她找到连颜色都变成红茶色的方法那还得了！`,
          );
          era.printButton(`速子！`, 1);
          await era.input();
          era.println();
          await era.printAndWait(`你忍不住大喊出声`);
          era.println();
          await tachyon.say_and_wait(`豚，豚鼠君？做什么……`);
          era.printButton(`无论是什么药都可以，尽管来吧！`, 1);
          era.printButton(`只有一件事妳一定要答应我`, 2);
          await era.input();
          era.println();
          await tachyon.say_and_wait(
            `欸……不是，豚鼠君……你，你是不是搞错了什么……`,
          );
          await era.printAndWait(`速子尝试想说什么，但被你无情的打断了`);
          await era.printAndWait(
            `没有错……无论如何，只有这件事是绝对必须，一定要趁着现在说出口的`,
          );
          era.printButton(`只有我，才是妳永远，唯一的(实)豚(验)鼠(品)`, 1);
          await era.input();
          era.println();
          await era.printAndWait(`没错……刚刚的味道已经无比接近红茶了`);
          await era.printAndWait(
            `万一，要是她真的混在给他人的饮料或者更糟，饮用水里的话……那后果不堪设想`,
          );
          await era.printAndWait(
            `因此必须在这里强调自己的身份，让她放弃将其他人当作实验品的狂想才行`,
          );
          era.println();
          await tachyon.say_and_wait(`……你……果然搞错…………但是……呜……`);
          era.println();
          await era.printAndWait(
            `不知为何，速子狼狈的转过身去，你在她转身前看见了她通红的脸`,
          );
          era.println();
          await tachyon.say_and_wait(
            `……我的豚鼠至始至终就只有你一只……反正你就是每天给我来试药就对了！身为豚鼠闭嘴乖乖吃药才是你的本职吧！`,
          );
          era.println();
          await era.printAndWait(
            `速子气冲冲的离开了，留下了实验室里的残局让你一个人收拾`,
          );
          era.println();
          await era.printAndWait(`……究竟是为什么生气呢？你百思不得其解`);
          await era.printAndWait(
            `不过……要是她找到其他的实验者的话，不知为何，在当下瞬间你的胸口真因这种可能性而缩紧了一些`,
          );
          await era.printAndWait(
            `在听见她说自己的豚鼠只有自己时，那种紧张感又消失的烟消云散了`,
          );
          era.println();
          await era.printAndWait(`该不会……自己已经药物成瘾了吧`);
          await era.printAndWait(`你慌忙摇了摇头甩掉这种可怕的可能性`);
        }
        break;
    }
  }
};

handlers[event_hooks.out_church] = async function () {
  const tachyon = get_chara_talk(32);
  switch (get_random_value(0, 2)) {
    case 0:
      await tachyon.say_and_wait(
        `我说神明什么的，真的存在吗？不，我知道三女神，但……说到底，三女神也就是掌握了更强悍能力的凡…`,
      );
      await era.printAndWait(`你连忙堵住了速子的嘴.`);
      break;
    case 1:
      await tachyon.say_and_wait(
        `喂喂，豚鼠君，比起神明，我们还是快回去实验吧`,
      );
      break;
    case 2:
      await tachyon.say_and_wait(
        `大吉还是大凶？无妨，那种事不是神明决定，而是我自己造就的`,
      );
      break;
    // TODO plan B
    // 1 “……神明啊”
    // 速子无趣的看着神社，不知道在想些什么
    // 2 “如果…神明，那我……”
    // 速子喃喃自语着
  }
};

handlers[event_hooks.out_river] = async function (hook) {
  const ret = await select_action_around_river(),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  hook.arg = !!ret;
  if (ret === 0) {
    switch (get_random_value(0, 1)) {
      case 0: //钓鱼
        await tachyon.say_and_wait(`哦呀哦呀，钓上来的就当成明天的便当材料吧`);
        break;
      case 1:
        await tachyon.say_and_wait(
          `咕……为什麽钓不上来啊……豚鼠君，我说要是这些鱼要是“不小心”喝了水里的“不明物质”死了浮上来，这应该也能算我钓到的吧？不行吗？`,
        );
        break;
    }
  } else {
    switch (get_random_value(0, 1)) {
      case 0: //散步
        await tachyon.say_and_wait(
          `豚鼠君，你要是不快点跟上的话，明天的药加倍哦`,
        );
        break;
      // TODO 還沒有進入過速子的店鋪
      // await tachyon.say_and_wait(`对了，这个地方，之前摆摊的时候……不，什么也没有，没事`);
      case 1:
        await tachyon.say_and_wait(`豚鼠君！你看！是鸭子！`);
        await tachyon.say_and_wait(`还有那个！是蝴蝶欸！`);
        await tachyon.say_and_wait(`这里风景好漂亮啊！`);
        await era.printAndWait(`你无奈的看着在河堤边上到处乱跑的爱丽速子，`);
        await era.printAndWait(
          `天真烂漫的神情，比起速子倒不如说更像春乌拉拉、樱花进王等马娘，甚至眼睛里的百叶窗都彷佛变成了樱花的花瓣`,
        );

        await era.printAndWait(`事情的起因，一如往常的是因为速子的药剂`);
        await tachyon.say_and_wait(`能够以智力降低为代价提高速度的药`);
        await era.printAndWait(
          `听起来是完全不合算的一种药，却被速子毫无犹豫的喝了下去`,
        );
        await era.printAndWait(
          `其结果，速子轻松赢下了与茶座宝穴等人的模拟赛，但代价……`,
        );
        await tachyon.say_and_wait(`豚鼠君豚鼠君！你看！蜗牛爬的好慢啊！`);
        await era.printAndWait(
          `怎么说呢，这也算是一种让大脑放松的行为吧，你只能继续盯着速子，不让现在过于天真的她碰上意外……或者被人所骗`,
        );
        era.drawLine();
        await era.printAndWait(
          `玩了一天后，总算速子似乎也累了，走起路来都有些摇摇晃晃`,
        );
        await era.printAndWait(`她对着你张开手`);
        await tachyon.say_and_wait(`豚鼠君～～背背～～`);
        await era.printAndWait(
          `你背起了尽情玩了一天的超光速公主，看来她真的是累了，一趴上你的背便直接睡了过去`,
        );
        await era.printAndWait(
          `这一天折腾的自己也是够累了，回去非要好好休息才行`,
        );
        await tachyon.say_and_wait(`豚鼠君……谢谢……`);
        await me.say_and_wait(`……`);
        era.printButton(`或许，偶尔这样一天也不是什么坏事也说不定？`, 1);
        await era.input();
        break;
    }
  }
};

handlers[event_hooks.slave_end] = async function () {
  const me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  tachyon.name = '???';
  await print_event_name(`金钱的代价`, tachyon);
  await era.printAndWait(
    `你拿着一瓶喝到一半的威士忌，摇摇晃晃的走出第五间酒吧`,
  );
  await era.printAndWait(`夜色依旧漆黑，糜烂的夜晚还在继续`);
  era.println();
  await era.printAndWait(`结束了……那么，接下来该去哪里好？`);
  await era.printAndWait(`东倒西歪的走在路上，还带着浑身的酒气`);
  await era.printAndWait(
    `任何路人看见都会捂着鼻远去的姿态，也是你努力想要营造出的模样`,
  );
  era.println();
  await era.printAndWait(`二、三、五………二十三、二十九 `);
  await era.printAndWait(`你在脑海中默数着`);
  await era.printAndWait(
    `这不是什么透过计算质数来让自己冷静下来，而是今天一晚你喝掉的酒的量`,
  );
  await era.printAndWait(`总计金额……七位……还是八位数？`);
  await era.printAndWait(`令人惊愕的数字，却只是你一个晚上喝的酒的价格`);
  await era.printAndWait(
    `在最高档的酒吧，以只挑贵的不挑好的的心态将店内扫荡一空所造就出的就是这样一个对普通人而言想都不敢想的数字`,
  );
  era.println();
  await era.printAndWait(`然而……`);
  await era.printAndWait(`没用，一点用都没有`);
  await era.printAndWait(
    `无论价格，无论度数，今天喝的任何酒，除了让你多上了几次厕所外，可以说是毫无作用`,
  );
  await era.printAndWait(`意识清晰的不能更清晰，清晰的让你回忆起两天前的事`);
  era.println();
  await tachyon.say_and_wait(`借钱？`);
  await tachyon.say_and_wait(`可以啊，豚鼠君`);
  await tachyon.say_and_wait(
    `不过老规矩，你知道的吧……今天的实验，是关于神经抑制剂排除的实验`,
  );
  await tachyon.say_and_wait(`那么，让我们开始实验吧`);
  era.println();
  await era.printAndWait(`你将威士忌直接对口吹`);
  await era.printAndWait(`一口便足以使正常人醉醺的烈酒，却使你的脑袋更加清晰`);
  await era.printAndWait(
    `如果说借酒浇愁是想透过酒精来麻痹神经逃避现实，那么就连麻痹神经也不被允许的自己，想必是世界上最痛苦的醉汉了吧`,
  );
  era.println();
  await era.printAndWait(`繁华的夜之街，最不缺少的就是像自己一样的醉汉`);
  await era.printAndWait(
    `看着那些人东倒西歪的身影，你发自内心的产生了由衷的羡慕`,
  );
  era.println();
  await era.printAndWait(`走着走着，眼前忽然闪起的亮光使你不由得眯起双眼`);
  await era.printAndWait(
    `晃人双眼的不只灯光，更是那珠光十色的装潢以及无数一夜致富的梦想`,
  );
  await era.printAndWait(`赌和酒，酒和赌，两者从古至今便是不分家的`);
  await era.printAndWait(
    `一醉方休的酒豪们，在酒酣耳热之际，到赌场摸上两把似乎也早就是例行事项了`,
  );
  era.println();
  await era.printAndWait(
    `然而，一副醉鬼模样的你却连眼神都没转向赌场，只是笔直地望着前方`,
  );
  await era.printAndWait(`不是嫌弃赌场赌的东西太过小家子气———`);
  await era.printAndWait(
    `据说这里的赌场甚至还有对马娘比赛下注这种一旦曝光便注定再也干不下去的营业`,
  );
  await era.printAndWait(
    `更不是因为你有多么的洁身自好——说到底在这种时间徘徊在这种街道的人，再干净又能干净到哪去呢`,
  );
  era.println();
  await era.printAndWait(`你又灌了口酒，回想起过去的事`);
  era.println();
  await tachyon.say_and_wait(`借钱？`);
  await tachyon.say_and_wait(`可以啊，豚鼠君`);
  await tachyon.say_and_wait(
    `不过老规矩，你知道的吧……今天的实验，是关于大脑奖励机制的调整与抑制`,
  );
  await tachyon.say_and_wait(`那么，让我们开始实验吧`);
  era.println();
  await era.printAndWait(`哪怕赢下了超越一般上班族年薪的钱`);
  await era.printAndWait(`哪怕一夕之间输掉一栋海景别墅`);
  await era.printAndWait(`也不会有任何感情波动，甚至没办法让眉间产生皱折`);
  await era.printAndWait(`这种情况下的赌博，到底有什么好玩的呢？`);
  era.println();
  await era.printAndWait(`仿佛整个赌场只有自己一人被孤立世外`);
  await era.printAndWait(`不能理解过去的自己为何沉迷于此`);
  await era.printAndWait(`不，能够理解，但做不到的事就是做不到`);
  await era.printAndWait(`就像已经清醒的人是无法回到梦境的一样`);
  era.println();
  await say_by_passer_by(
    `站街少女`,
    `先生，看您一个人好像很寂寞的样子……有没有兴趣，一起度过春宵一刻呢♡`,
  );
  era.println();
  await era.printAndWait(
    `不知不觉，灯红酒绿的赌场也已经被甩在身后，走入红灯区的你，迎来了风尘女子的温柔乡`,
  );
  await era.printAndWait(
    `要是能就这么沉溺于她们的肢体间，那想必会是无比幸福的事吧……`,
  );
  era.println();
  await tachyon.say_and_wait(`借钱？`);
  await tachyon.say_and_wait(`可以啊，豚鼠君`);
  await tachyon.say_and_wait(`不过老规矩……`);
  era.println();
  await era.printAndWait(`啊啊`);
  await era.printAndWait(`你回绝了少女的邀请`);
  await era.printAndWait(`毫无反应`);
  await era.printAndWait(
    `原本应该很对自己胃口的女孩子，现在却连让身体产生一丝丝的反应都做不到`,
  );
  era.println();
  await era.printAndWait(`不知不觉间，你已经走出了这条街道`);
  await era.printAndWait(
    `偌大的夜之街，繁华的夜之都，却找不到任何能够请你产生欲望的东西`,
  );
  await era.printAndWait(`曾经感兴趣过的那些`);
  await era.printAndWait(`美食、烟酒、赌博、美色……`);
  await era.printAndWait(`曾经让自己沉溺，用来麻痹神经的那些`);
  await era.printAndWait(`如今却只能使神经变得更为清醒`);
  era.println();
  await era.printAndWait(`够了，已经够了`);
  await era.printAndWait(
    `无论什么都好，只要能让自己沉醉，只要能够放弃思考，无论什么都好`,
  );
  await era.printAndWait(`从来都不知道，原来理智是这么的使人癫狂`);
  await era.printAndWait(`暴力、痛楚、血液、伤痕`);
  await era.printAndWait(`哪怕是这些，都无法给自己带来更大的刺激`);
  await era.printAndWait(`这些又是在哪一次的实验中被自己卖掉的？`);
  await era.printAndWait(`已经忘了，那种事也不重要了`);
  era.println();
  await era.printAndWait(`仿佛人格解体一般，急迫的寻求刺激，却怎么也无法获得`);
  await era.printAndWait(
    `再这样下去……会崩溃的，神经也好，身体也好，一定会迎来崩溃，断裂`,
  );
  await era.printAndWait(`所以在这之前，无论是什么都好……`);
  await era.printAndWait(`无论，是什么都好……`);
  await tachyon.say_and_wait(`豚鼠君？你怎么在这里`);
  await tachyon.say_and_wait(`……哎呀，真是狼狈的模样啊`);
  await tachyon.say_and_wait(
    `怎么了，是没钱买酒了？还是没钱下注被赌场赶出来了……又或者，是看上哪个女孩子了？`,
  );
  await tachyon.say_and_wait(`需要……更多钱吗？`);
  era.println();
  await era.printAndWait(`你愣愣的望着对方`);
  await era.printAndWait(`仿佛恶魔的低语，在你耳旁细语如棉`);
  await era.printAndWait(`钱`);
  await era.printAndWait(`还要钱`);
  await era.printAndWait(`还要更多钱`);
  await era.printAndWait(`必须要借更多钱`);
  era.println();
  await era.printAndWait(`………………………为什么？`);
  await era.printAndWait(`为什么想要钱？`);
  await era.printAndWait(`为什么要借钱？`);
  await era.printAndWait(`为了买酒？`);
  await era.printAndWait(`为了赌博？`);
  await era.printAndWait(`为了玩女人？`);
  await era.printAndWait(`为什么？`);
  await era.printAndWait(`为什么？`);
  era.println();
  await era.printAndWait(`无论是什么都可以`);
  await era.printAndWait(`无论做什么都可以`);
  await era.printAndWait(`快想啊`);
  await era.printAndWait(`该怎么做，才能放弃思考`);
  await era.printAndWait(`该怎么做，才能让自己的脑袋彻底麻痹`);
  era.println();
  await era.printAndWait(`啊啊……`);
  await era.printAndWait(`啊啊！`);
  await era.printAndWait(`有了`);
  await era.printAndWait(`有了有了有了有了有了有了有了有了有了有了`);
  era.println();
  await me.say_and_wait(`……可以，借我钱吗？`);
  await tachyon.say_and_wait(`当然好了……不过，豚鼠君，你借钱要做什么呢？`);
  era.println();
  await era.printAndWait(`对方留下的唯一漏洞`);
  await era.printAndWait(`给自己留下的最后仁慈`);
  await era.printAndWait(`布局？阴谋？算计？`);
  await era.printAndWait(`那些东西已经不重要了`);
  era.println();
  await me.say_and_wait(`速子……可以用这些钱……请妳陪我共度一晚吗？`);
  era.println();
  await era.printAndWait(`说出口的瞬间，紧绷到极限的弹簧终于松开`);
  await era.printAndWait(`啊啊……`);
  await era.printAndWait(`只有想着对方，脑袋才能获得喘息`);
  await era.printAndWait(`只有念着对方，内心才能获得麻痹`);
  await era.printAndWait(`为什么以前的自己都没发现`);
  await era.printAndWait(`为什么要一直借钱去做那种毫无意义的事情`);
  await era.printAndWait(`明明，明明内心唯一的安宁就在这里`);
  era.println();
  await era.printAndWait(`想要和速子一起吃饭`);
  await era.printAndWait(`想要和速子一起兜风`);
  await era.printAndWait(`想要和速子一起看夜景`);
  await era.printAndWait(`想要和速子一起入住情侣酒店`);
  await era.printAndWait(`想要彻底，从里到外，完全变成速子的模样`);
  await era.printAndWait(`越是想着这些，心中就越是轻松，越是舒服`);
  era.println();
  await tachyon.say_and_wait(`呵呵……好孩子，好孩子`);
  era.println();
  await era.printAndWait(`于是，（玩家名）获得了真正的幸福`);
};

handlers[event_hooks.out_shopping] = async function (hook) {
  const tachyon = get_chara_talk(32);
  hook.arg = await select_action_in_shopping_street();
  switch (hook.arg) {
    case 0:
      switch (get_random_value(0, 2)) {
        case 0:
          await tachyon.say_and_wait(
            `欸？为什么豚鼠君你这么会夹娃娃啊？干劲还有白蓝回……不，抱歉，我不太明白你在说什么`,
          );
          break;
        case 1:
          await tachyon.say_and_wait(
            `哦呀，居然有我的娃娃吗？……看起来比本人可爱？等等，豚鼠君，你这句话是什么意思，给我说清楚了`,
          );
          break;
        case 2:
          await tachyon.say_and_wait(`啧……一定要这样露出笑容吗？`);
          await tachyon.say_and_wait(
            `不，不是我太难搞，是这个大头贴活动本身就有太多不合理之处了吧！…………唉，好吧，3、2、1 Cheese`,
          );
          break;
      }
      break;
    case 1:
      switch (get_random_value(0, 2)) {
        case 0:
          await tachyon.say_and_wait(
            ` 抽奖……比起运气这种不牢靠的东西，不是自己靠金钱或其余力量来获得奖品会更为正当吗？`,
          );
          break;
        case 1:
          await tachyon.say_and_wait(
            `欸～～这种可操作性这么高的盲盒抽奖你也要玩吗？`,
          );
          await tachyon.say_and_wait(
            `豚鼠君？……不，我没什么意见，不过以防万一……能够确认那个抽奖箱里是不是真的有大奖吗？`,
          );
          break;
        case 2:
          await tachyon.say_and_wait(
            `抽奖啊，那我准备一下………好了，来吧。嗯？怎么忽然戴眼镜？`,
          );
          await tachyon.say_and_wait(
            `没什么，这只是能够看穿箱子的透视眼镜而已。还是说，你真的觉得我有可能相信运气这种完全不牢靠的东西？`,
          );
          break;
      }
      break;
    case 2:
      switch (get_random_value(0, 3)) {
        case 0:
          await tachyon.say_and_wait(
            `Winning the soul～～……哼哼，怎么样，豚鼠君？`,
          );
          await tachyon.say_and_wait(
            `我的歌喉还不错吧？……什么？想听NEXT FRONTIER？或者Special Record？`,
          );
          await tachyon.say_and_wait(`……豚鼠君，你是故意的吗？`);
          break;
        case 1:
          await tachyon.say_and_wait(
            `Выходила на берег Катюша,На высокий берег, на крутой……`,
          );
          await tachyon.say_and_wait(
            `明明我应该不会俄语才对，不知道为什么唱歌的时候就彷佛忽然看得懂一般……`,
          );
          await tachyon.say_and_wait(`果然是这样吧，生而知之也是天才的烦恼啊`);
          break;
        case 2:
          await tachyon.say_and_wait(`哦？豚鼠君，你唱的这不是挺不错的吗……`);
          await tachyon.say_and_wait(
            `不过能不能麻烦你唱到副歌的时候别那么激动呢？`,
          );
          await tachyon.say_and_wait(
            `每次你一激动整个包厢里就会亮到完全看不见任何东西了，真亏你这样还能看清屏幕上的歌词啊……`,
          );
          break;
        case 3:
          await tachyon.say_and_wait(
            `欸……为什么你还能配合歌曲氛围变换颜色的，怎么还有七彩霓虹版的……`,
          );
          await tachyon.say_and_wait(
            `不是，我是发明者我怎么不知道自己做的药还有这功能？好可怕……`,
          );
          break;
      }
      break;
    case 3:
      await tachyon.say_and_wait(`……这电影院……外观还挺漂亮的啊……`);
      era.printButton(`……`, 1);
      await era.input();
      await tachyon.say_and_wait(`喂，你倒是说些什么啊……`);
      await tachyon.say_and_wait(
        `因为同伴发出的光太亮了导致不被允许进入电影院什么的，就连本爱丽速子都是第一次碰到啊……`,
      );
      await tachyon.say_and_wait(`说点啥吧，比如道歉什么的”`);
      era.printButton(`明明是你害得我变成这样的啊！？`, 1);
      await era.input();
      await era.printAndWait(`最后两人开开心心的在实验室里看NetFlOx了。`);
  }
};

handlers[event_hooks.out_station] = async function (hook) {
  const me = get_chara_talk(0);
  const tachyon = get_chara_talk(32);
  hook.arg = await select_action_in_station(32);
  switch (hook.arg) {
    // TODO 做便当次数>10
    case 0:
      await tachyon.say_and_wait(
        `……难吃，全是料理包预制菜，调味全靠香精和化学药剂，你是嫌平常喝的药还不够多吗？竟然让我吃这种东西`,
      );
      await era.printAndWait(
        `菜一上来就被速子从头批评到尾，原本想说带她出来散散心的，这下不是让她心情更差了吗。`,
      );
      await tachyon.say_and_wait(`不过……这个甜点倒是不错`);
      await era.printAndWait(`欸……那个甜到牙痛的布丁？`);
      await me.say_and_wait(`真的假的`, true);
      await era.printAndWait(`你似乎有些察觉速子的口味了`);
      // TODO 做便当次数>10:
      switch (get_random_value(0, 3)) {
        case 0:
          await tachyon.say_and_wait(
            ` 我说豚鼠君……你带我出来吃饭我是挺感激的，但特意出来吃做的连你都不如的菜到底有什么意义？`,
          );
          await era.printAndWait(`速子困惑的看着你`);
          await tachyon.say_and_wait(`不过……这个甜点倒是不错`);
          await era.printAndWait(`欸……那个甜到牙痛的布丁？`);
          await me.say_and_wait(`真的假的`, true);
          await era.printAndWait(`你似乎有些察觉速子的口味了`);
          break;
        case 1:
          await tachyon.say_and_wait(`味道不错，不过比起豚鼠君做的总觉得……`);
          await tachyon.say_and_wait(`缺了些什么……嗯，没错，不够甜`);
          era.println();
          await tachyon.say_and_wait(
            `什么叫再吃糖要糖尿病了，别担心别担心，马娘的代谢能力会想办法的`,
          );
          break;
        case 2:
          await era.printAndWait(
            `红烧肉、糖醋排骨、和果子、加满致死量砂糖的红茶，最后收尾是蜂蜜布丁`,
          );
          await tachyon.say_and_wait(`豚鼠君？你不吃吗？`);
          era.printButton(`……看着就牙痛，还是算了`, 1);
          await era.input();
          await me.say_and_wait(`……看着就牙痛，还是算了`, true);
          break;
      }
      break;
    case 1:
      // eslint-disable-next-line no-case-declarations
      const talk_arr = [
        `嗯？一般人不会把出门采买实验用具称为约会？` +
          `豚鼠君，约会这个词是极为抽象的，意味着什么，只要你觉得这是约会，那么这就是约会，明白了吗？` +
          `能和我这样的超绝美少女出门逛街，这就已经可以等同于约会了吧。`,
        '逛街、喝茶、聊天、吃东西' + `这就是一般来说的约会吗？……感觉，好无趣啊`,
      ];
      if (era.get('relation:32:0') < 225 && era.get('relation:32:0') > 50) {
        talk_arr.push(
          '约会？……豚鼠君，一般科学家是不会与自己的实验动物约会的，你明白我的意思吗？',
        );
      } else if (era.get('relation:32:0') < 50) {
        talk_arr.push(
          '约会对实验助手兼实验品的干劲提升程度分析吗？嗯……可以尝试当成研究课题',
        );
      }
      await tachyon.say_and_wait(get_random_entry(talk_arr));
      break;
    case 2: //逛商场
      switch (get_random_value(0, 2)) {
        case 0:
          await tachyon.say_and_wait(
            `我说豚鼠君……衣服什么的网购不就好了，人类的衣服跟马娘的衣服又有什么关系`,
          );
          await tachyon.say_and_wait(`尾巴的地方没孔所以每次掀衣服都能看到？`);
          await tachyon.say_and_wait(`………这是性骚扰了，豚鼠君。`);
          break;
        case 1:
          await tachyon.say_and_wait(`厨具？那种东西买那么多干嘛……`);
          await tachyon.say_and_wait(
            `欸，可以做这么多菜的吗……咕……如果偷偷算在实验经费里……`,
          );
          await tachyon.say_and_wait(
            `没关系的，你买吧，不用害怕，我来填的话应该可以想办法申请成正当实验用具……大概`,
          );
          break;
        case 2:
          await tachyon.say_and_wait(
            `免费试喝……免费试用，果然最好的推销还是「免费」啊，明明知道只是卖东西的手段，`,
          );
          await tachyon.say_and_wait(
            `但听见免费就会自然而然的忘掉对陌生人给的食物的警惕……豚鼠君，我在想，免费试喝药剂！……不行吗？`,
          );
          break;
      }
      break;
  }
};

// TODO PlanB 相关
/*
If PlanB 第二年十二月前
await era.printAndWait(
          `你带着速子来到枯树洞前，她自觉的趴在了枯树洞边上。`,
        );
        If PlanB 第二年十二月前
        await era.printAndWait(
          `爱丽速子靠在枯树洞的边上，彷彿想对着里面喊些什么，最后犹豫了许久还是放弃了
看着她的模样，你不知为何感到了悲伤和一丝的安心`,
        );
 */
handlers[event_hooks.school_atrium] = async function (hook) {
  const love = era.get('love:32'),
    me = get_chara_talk(0);
  const tachyon = get_chara_talk(32);
  hook.arg = await select_action_in_atrium(32);
  switch (hook.arg) {
    case 0:
      if (love > 90) {
        await era.printAndWait(
          `你带着速子来到枯树洞前，她自觉的趴在了枯树洞边上。`,
        );
        await era.printAndWait(
          `但今天要玩的不是这个，你摇了摇头，靠上了速子的肩膀。`,
        );
        await me.say_and_wait(
          `既然是用来发泄牢骚和压力的，那么你也喊些不甘心的事吧。`,
          true,
        );
        await era.printAndWait(`说完后你拍了拍她的屁股，暗示你想听的是什么。`);
        await era.printAndWait(`脑筋动的很快的天才马娘瞬间便明白了你的意思。`);
        await era.printAndWait(
          `她责怪的看了你一眼，然后对着枯树洞开始喊出『不甘』。`,
        );
        await tachyon.say_and_wait(`每次乳头被豚鼠君捏一下就会高潮好不甘心❤`);
        await tachyon.say_and_wait(
          `小穴杂鱼到豚鼠君随便摸一下就出水好不甘心❤`,
        );
        await tachyon.say_and_wait(
          `只要闻到豚鼠君的味道脑袋里就会变成只剩做爱的痴女好不甘心❤`,
        );
        await tachyon.say_and_wait(
          `只要含住肉棒就会想要变成豚鼠君一辈子的飞机杯好不甘心❤`,
        );
        await tachyon.say_and_wait(
          `明明被命令了忍住但每次豚鼠君射精时总是忍不住吞下去导致被惩罚好不甘心❤`,
        );
        await tachyon.say_and_wait(
          `每次做爱都要靠药，结果还是战胜不了肉棒大人好不甘心❤`,
        );
        await tachyon.say_and_wait(
          `每次都没有让肉棒大人满足自己就先去了好不甘心❤`,
        );
        await era.printAndWait(
          `每次喊完你就会拍她的屁股一下作为奖励，打完屁股之后她便会摇晃的更起劲，喊出更加劲爆的『不甘』话语来。`,
        );
        await era.printAndWait(
          `最后，在周围马娘羞红的眼神中，你牵着双腿颤抖已经走不动路的速子回到了实验室。`,
        );
      } else if (love > 80) {
        await era.printAndWait(`速子趴在枯树洞上无聊的望着枯树洞的里面。`);
        await era.printAndWait(
          `看着她在外面翘着的臀部，你有些按耐不住自己的情欲了。`,
        );
        await tachyon.say_and_wait(`豚鼠君……咿❤`);
        await era.printAndWait(
          `你拍上了她俏稚的臀部，隔着布料的弹性触感将你拍下去的力道反弹回你的手掌。`,
        );
        await tachyon.say_and_wait(
          `……豚鼠君，这里回音……很大的❤……回去，回去再做，好吗❤`,
        );
        await era.printAndWait(`你没有理会她的求饶，用力拍了一下。`);
        await era.printAndWait(
          `她连忙按住自己的嘴，却还是有声音忍不住发了出来。`,
        );
        await tachyon.say_and_wait(`呜咿咿❤❤❤`);
        await tachyon.say_and_wait(`唔……❤`);
        await tachyon.say_and_wait(`呜呜……❤`);
        await tachyon.say_and_wait(`等，不能戳进去喔喔喔喔❤❤❤`);
        await era.printAndWait(
          `最后，你将瘫软在枯树洞上，脸色潮红的速子抱在怀中，带回训练员室。`,
        );
        await era.printAndWait(`路上的学生都不由得对你们行注目礼。`);
        await era.printAndWait(`对你而言，这种视线早就习惯了。`);
        await era.printAndWait(
          `至于怀中的速子……不顾旁人眼光正用瘫软的双手不断索求拥抱的她，`,
        );
        await era.printAndWait(`在满足她之前，大概都无瑕去顾虑这些事了吧。`);
      } else if (love > 75) {
        await tachyon.say_and_wait(
          `唔……豚鼠君❤……在人家用来发泄情绪的树洞前做这种事……要是被人听到怎么办❤`,
        );
        await tachyon.say_and_wait(`发泄性欲也是发泄？`);
        await tachyon.say_and_wait(`真是❤……要是被人发现我可不管❤`);
      }
      switch (get_random_value(0, 1)) {
        case 0:
          await tachyon.say_and_wait(
            `把苦恼对着树洞喊出来？这样又能改变什么。`,
          );
          await tachyon.say_and_wait(`……无聊，比起抱怨，还不如努力改变现状。`);
          await tachyon.say_and_wait(
            `“喊出来内心的压力会轻松很多”？都跟在我身边了，你怎么还会有压力？等等，那个苦笑是什么意思。`,
          );
          break;
        case 1:
          await me.say_and_wait(`速子———？`);
          era.println();
          await era.printAndWait(`今天不知道为什么一早就没看到速子。`);
          await era.printAndWait(`总是沉浸研究的她今天却不知道去了哪里。`);
          await era.printAndWait(
            `你在校园里左找右找，最后从路过学生的口中听说她在枯树洞旁。`,
          );
          await me.say_and_wait(`枯树洞……她也有什么想要倾诉的烦恼吗？`, true);
          await me.say_and_wait(`身为训练员没看出情绪不对这可是失职啊。`, true);
          era.drawLine();
          await era.printAndWait(
            `你来到了中庭，毕竟是上课时间，因此这里没什么人，只有少数趁着没人前来发泄情绪的马娘。`,
          );
          await era.printAndWait(`也因为人烟稀少，于是你亲眼看到了『那个』。`);
          await era.printAndWait(`朝着马娘靠近，针对她们内心弱小处的黑影。`);
          await say_by_passer_by(
            `马娘A`,
            `呜啊啊啊！我好弱啊……为什么，怎么都赢不了……！`,
          );
          await say_by_passer_by(`？？？`, `你想……获得力量吗？`);
          await say_by_passer_by(`马娘A`, `……力量？`);
          await say_by_passer_by(
            `？？？`,
            `能够变得比谁都强，胜过所有人的力量……`,
          );
          await say_by_passer_by(`马娘A`, `……真，真的可以吗？代价是什么？`);
          await say_by_passer_by(
            `？？？`,
            `呵呵呵……想知道的话，就到旧理科实验室来吧……`,
          );
          await say_by_passer_by(
            `马娘B`,
            `为什么……就是无法提起勇气告白……那个木头……为什么都做到这种程度了还不明白……！`,
          );
          await say_by_passer_by(
            `？？？`,
            `想要诚实表达自己的心意吗？想要即便不说出口也能让他明白自己的心思吗？`,
          );
          await say_by_passer_by(`马娘B`, `你，你是……！`);
          await say_by_passer_by(
            `？？？`,
            `到旧理科实验室吧，你就能获得你想要的一切了……`,
          );
          await me.say_and_wait(`……那家伙在干嘛`, true);
          await era.printAndWait(
            `在枯树洞旁仿佛蛊惑人心的恶魔一般不停念叨着的无疑是你的负责马娘爱丽速子`,
          );
          await era.printAndWait(
            `她不断在那些因烦恼而在枯树洞前倾诉的人们面前出现，讲着诱人堕落的话语，仿佛神话里的魔鬼一般`,
          );
          await era.printAndWait(`此时的她也注意到了你`);
          await tachyon.say_and_wait(`豚鼠君，你来的正好，准备回去迎接客人了`);
          await me.say_and_wait(`客人？`);
          await tachyon.say_and_wait(`当然是那些困扰的马娘们啦。`);
          await tachyon.say_and_wait(
            `哎呀，我以前真的是太失礼了，居然觉得枯树洞是没有必要存在的地方。`,
          );
          await tachyon.say_and_wait(
            `现在想想这不是为我量身打造会主动筛选出心灵意志弱小的马娘们的场所吗。`,
          );
          await era.printAndWait(`因为意志不坚所以才需要外力引导发泄情绪。`);
          await era.printAndWait(
            `因为意志不坚所以也容易为了达成目的将灵魂出卖给恶(速)魔(子)。`,
          );
          await era.printAndWait(
            `某种意义上来讲，对某些图谋不轨的人来说，来到这里的马娘确实是最容易被坏人盯上的无辜孩子。`,
          );
          await era.printAndWait(`不过，速子的话应该不会伤害她们……吗？`);
          await tachyon.say_and_wait(`不说这个，豚鼠君，快走吧。`);
          await me.say_and_wait(`客人？`);
          await me.say_and_wait(`怎么这么突然……肯定不是良心发现之类的吧？`);
          await tachyon.say_and_wait(
            `连你都发现了，学生会那些家伙应该很快也要过来了，在被抓去训话前快点，走了！`,
          );
          await me.say_and_wait(
            `…………偶尔让她被抓去训话一次感觉其实也不错吧`,
            true,
          );
          break;
        // todo planB相关
      }
      break;
    case 1:
      await era.printAndWait(`施工中`);
  }
};

handlers[event_hooks.school_rooftop] = async function () {
  const relation = era.get('relation:32:0'),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  /*TODO PlanB相关事件
   */
  /*TODO PlanB相关事件 PlanB 第二年十二月前
 if (relation > 375) {
    await era.printAndWait(`你带着她到天台吃便当散散心`);
    await era.printAndWait(
      `她高兴的听你谈着最近茶座训练上的变化，偶尔加入几句自己的想法`,
    );
    await era.printAndWait(`过程中完全没有提及自己`);
    await era.printAndWait(
      `无法参与训练的她，哪怕自己已经尽量抽空陪伴了，在其他马娘训练时也还是必须要分开`,
    );
    await tachyon.say_and_wait(`最近她还好吗`);
    era.printButton(`……`, 1);
    era.printButton(`……那你呢？最近还好吗？`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(
        `结束了茶座的话题后你们忽然陷入沉默，很快就结束了这一餐`,
      );
    } else {
      await tachyon.say_and_wait(`我？……也就那样吧，没什么特别的。`);
      await era.printAndWait(`她随便的回应了`);
      await era.printAndWait(
        `与她相处甚久的你可以看出，她并不是在敷衍，而是真心觉得自己的生活没什么能说的话题`,
      );
      await era.printAndWait(`想到这点，你不禁感到一阵心痛。`);
    }
  }else{
  switch (get_random_value(0, 2)) {
    case 0:
      await era.printAndWait(
        `速子静静的在天台上感受着凉风，面无表情，是又在思考茶座的训练方案了吗？`,
      );
      break;
    case 1:
      await era.printAndWait(
        `你带着速子到天台上吃便当换换心情，她在吃便当的时候还是一直在说着茶座的事。`,
      );
      break;
    case 2:
      await era.printAndWait(`她不知为何一直盯着栏杆外的天空`);
      await era.printAndWait(`眼中平淡无波，只是反射着天空的景色。`);
      await tachyon.say_and_wait(`……怎么了吗？豚鼠君？`);
      await era.printAndWait(`不知为何，你忽然感到一阵害怕`);
      await era.printAndWait(`心中的害怕驱使你握住了她的手，但很快又放开了`);
      await tachyon.say_and_wait(`……放心吧，豚鼠君，我哪里也不会去的`);
      break;
  }}
  */

  if (relation > 375) {
    await tachyon.say_and_wait(`哼哼哼～～`);
    await era.printAndWait(`今天你又带着便当和速子一起到天台吃午餐了。`);
    await era.printAndWait(`她一边享受着微风，一边开心的夹起便当里的鸡块。`);
    await era.printAndWait(`忽然，微风瞬间转成了狂风。`);
    await tachyon.say_and_wait(`啊`);
    await era.printAndWait(`夹在筷子上的鸡块在忽然加大的风力下落到地上`);
    await era.printAndWait(`啊……好可惜`);
    await era.printAndWait(`不过也没关系，毕竟便当还有……`);
    await era.printAndWait(`这时，你看见速子径直夹起了掉到地上的鸡块`);
    await tachyon.say_and_wait(`那么，我开动了——`);
    era.printButton(`等一下！？`, 1);
    await era.input();
    await tachyon.say_and_wait(
      `嗯？有什么问题吗豚鼠君，你难道不知道三秒原则吗？`,
    );
    await era.printAndWait(
      `不，先不说为什么速子会相信三秒原则这种毫无根据的说法，刚刚明显已经超过三秒了啊！？`,
    );
    await tachyon.say_and_wait(
      `……唉，豚鼠君，以科学角度来说，马娘的肠胃也没有脆弱到会因为这种事吃坏肚子哦`,
    );
    await me.say_and_wait(`不是这个问题吧！？`);
    await tachyon.say_and_wait(`反正我就要吃鸡块！`);
    await me.say_and_wait(`便当里不是还有吗！？`);
    await era.printAndWait(`在你的坚持下阻止了速子将掉到地上的鸡块吃下`);
    await era.printAndWait(`代价是当天下午她一直用幽怨的眼神望着你`);
    await era.printAndWait(
      `直到晚上，进入梦乡你都仿佛听见耳边一直传来速子幽怨的哀嚎`,
    );
    await tachyon.say_and_wait(`我的鸡块……`);
    await me.say_and_wait(`……明天再给她做炸鸡块吧`, true);
  }
  switch (get_random_value(0, 2)) {
    case 0:
      await tachyon.say_and_wait(`啊，便当放着就好，我做完风速测量就吃。`);
      break;
    case 1:
      await tachyon.say_and_wait(
        `在天台吃便当啊……这么说起来，豚鼠君你知道天台原本是不允许人进入的吗？`,
      );
      await me.say_and_wait(`欸，有这回事？`);
      await tachyon.say_and_wait(
        `是的哦，听说是有某名马娘在天台上做实验，不小心弄的有毒物质外泄了。`,
      );
      await tachyon.say_and_wait(`……怎么这种表情？`);
      await tachyon.say_and_wait(`不不，当然不是我了`);
      await tachyon.say_and_wait(
        `不过你说的也对，过了这么久应该早就没有残留了吧。`,
      );
      await tachyon.say_and_wait(
        `再说，就算有残留……经过现在的我做的药物锻炼出的豚鼠君，怎么也不可能输给过去的我做出的药物吧？`,
      );
      await me.say_and_wait(`所以果然是你啊！`);
      break;
    case 2:
      await era.printAndWait(`你带着便当和速子一起到天台吃午餐。`);
      await era.printAndWait(
        `微风吹过速子的发稍，她发出了咯咯的笑声，似乎很享受的模样。`,
      );
      await era.printAndWait(
        `看来速子似乎挺喜欢这个环境的，有机会再带她上来吧。`,
      );
      break;
  }
};
// TODO 好感大于150触发事件解锁做饭
handlers[event_hooks.office_cook] = async function () {
  const me = get_chara_talk(0);
  const tachyon = get_chara_talk(32);
  switch (get_random_value(0, 4)) {
    case 0:
      await tachyon.say_and_wait(`加油哦豚鼠君～～`);
      await tachyon.say_and_wait(
        `嗯？一起做饭的意思不就是你做我负责指指点点吗？`,
      );
      break;
    case 1:
      await tachyon.say_and_wait(`豚鼠君！今天我可是自己煎了蛋饼哦！快吃吧！`);
      await me.say_and_wait(`……`);
      await era.printAndWait(
        `你看着眼前有些烧焦，蛋完全露在外面一点也没包起来，与其叫蛋饼不如说叫炒饼加蛋的东西……`,
      );
      await me.say_and_wait(`嗯……最起码，味道还是能吃的`, true);
      break;
    case 2:
      await tachyon.say_and_wait(
        `……豚鼠君，你也知道的，毕竟学园里出于安全考虑只能使用电磁炉之类的来做料理，`,
      );
      await tachyon.say_and_wait(
        `但……我不太擅长电磁炉，所以……这不是我的问题，是电磁炉难用的问题，如果换成炉气燥的话绝对不会是这样……`,
      );
      await era.printAndWait(`你看着眼前完全焦黑的鸡蛋。`);
      await era.printAndWait(`……有点苦，又有点咸，勉强算能吃吧。`);
      break;
    case 3:
      await tachyon.say_and_wait(
        `想了想，自己在训练员室里做吃的本来就是件很不合理的事吧`,
      );
      await era.printAndWait(`说好了今天她做便当的速子掏出了两个外卖盒。`);
      await era.printAndWait(`……肯定能吃，但这已经背离原来初衷了吧。`);
      break;
  }
  /* todo PlanB 第二年十二月前
  switch (get_random_value(0, 2)) {
    case 0:
      await era.printAndWait(`原本你和速子说好了两人轮流做便当，`);
      await era.printAndWait(
        `但最近由于茶座的训练量增多导致你没什么时间能够停下来做便当，`,
      );
      await era.printAndWait(
        `因此最近几乎都是速子做的便当，而你负责吃，并且在吃的时候与她交流信息。`,
      );
      era.printButton(`好好吃！`, 1);
      await era.input();
      await tachyon.say_and_wait(`呵呵，还不赖吧`);
      await era.printAndWait(`相比起你的惊讶，速子却始终一副波澜不惊的模样。`);
      await tachyon.say_and_wait(`毕竟，也没什么其他的事做了`);
      await era.printAndWait(
        `说出这句话时的她，是否是带着悲伤的情绪说出的呢。`,
      );
      await era.printAndWait(`你不得而知。`);
      await era.printAndWait(`说好了今天她做便当的速子掏出了两个外卖盒。`);
      break;
    case 1:
      await era.printAndWait(
        `速子正常吃下了你做的便当后便回去研究能够发挥茶座潜力的药剂了。`,
      );
      break;
    case 2:
      await era.printAndWait(`你吃着速子做的便当。`);
      await era.printAndWait(
        `现在的她，比起以前更加沉默了，比起谈论无聊的事，她更将集中力放在了如何让茶座跑的更快。`,
      );
      await era.printAndWait(
        `寡言、专注、厨艺好，某种意义上而言，现在的速子比以前的她更加接近一般世间对优秀的好女人的形象。`,
      );
      await era.printAndWait(`但果然……还是想念当初充满冲劲和热忱的她啊。`);

      break;
  }*/
  /*
  //todo 回合开始时触发
  //  便当事件： 好感度<150，上一回合没有进行做料理 5>做料理累积次数>1
  await era.printAndWait(
    `午休时间，不知为何爱丽速子故意将她的那台搅拌机摆在实验桌上，将功率调到最大，发出了极大的声音开始打她的“午餐”`,
  );
  era.println();
  await era.printAndWait(
    `你忽然想到，你上周似乎因为太忙导致忘记给她做便当了……这周一定要记得啊`,
  );
  //todo 好感度<150 连续两回合没有进行做料理，5>做料理累积次数>1
  await tachyon.say_and_wait(`豚鼠君，相信你也知道为山九韧，功亏一篑的道理，`);
  await tachyon.say_and_wait(
    `换句话说，行百里者半九十，只有坚持不懈的人才能获得成功，`,
  );
  await tachyon.say_and_wait(
    `在赛场的世界也是如此，属性会拉、技能会鸽，但你在养马过程中学到的知识不会欺骗你，`,
  );
  await tachyon.say_and_wait(
    `没错，支持卡比别人差又怎么样，6r也能养出ss等级的马出来，一切都只是努力和坚持的问题……`,
  );
  era.println();
  await era.printAndWait(
    `今天一进入训练员室，爱丽速子就开始说些不明所以的长篇大论`,
  );
  era.println();
  await tachyon.say_and_wait(
    `也就是说，我想说的是…………努力这点，在做饭上也是一样的`,
  );
  era.println();
  await era.printAndWait(
    `听见这句后，你才忽然反应了过来，原来如此，这两周在忙的事情实在太多，你又一次忘记了，不行，这次一定要记得……`,
  );
  // todo 好感度<150，连续三回合没有进行做料理，5>做料理累积次数>1
  era.println();
  await tachyon.say_and_wait(`…………`);
  era.println();
  await era.printAndWait(
    `今天一来到实验室你就发觉速子的心情非常不好，而且，你知道原因为何`,
  );
  era.println();
  await era.printAndWait(`原因在你`);
  await era.printAndWait(`你已经三周没有给爱丽速子做过饭了`);
  await era.printAndWait(
    `你慌忙向她表示，自己这几周真的很忙，抽不出任何时间来做……这种连你自己听了都不信的谎言`,
  );
  await era.printAndWait(`或是纯粹忘记，或是把时间都用在培育其他马娘上了，`);
  await era.printAndWait(
    `或是单纯想看看到底还有多少不同的台词，“你”的时间要多少就有多少`,
  );
  await era.printAndWait(`但此时，你还是只能讲着这种蹩脚的借口来请求原谅`);
  era.println();
  await tachyon.say_and_wait(`…………没什么需要我原谅的`);
  era.println();
  await era.printAndWait(`爱丽速子瞄了你一眼后说道`);
  era.println();
  await tachyon.say_and_wait(
    `这也是属于你的一种可能性，也是一个很好的研究样本，我不会否定你的努力，`,
  );
  await tachyon.say_and_wait(
    `同理，我也不会唾弃你的怠惰，无论如何都是你自己做出的选择，与我没有任何一点关系`,
  );
  era.println();
  await era.printAndWait(`是啊，硬要说的话`);
  await era.printAndWait(`她终于回过头，这是她今天以来第一次看着你`);
  await era.printAndWait(`她的眼神没有失望、厌恶，或是生气`);
  await era.printAndWait(
    `而是一种难以言喻的感情，如果真的要用一种感情来形容的话，那大概是————无聊`,
  );
  era.println();
  await tachyon.say_and_wait(`你的可能性，也就只有这种程度而已啊`);
  era.println();
  await era.printAndWait(
    `她以看待没能达成实验目标的实验动物一般的眼神看着你，然后，开口说道`,
  );
  era.println();
  await tachyon.say_and_wait(
    `继续努力提升你的价值吧，豚鼠君……不然，要是哪天我无聊了说不定就把你抛弃了`,
  );
  //todo   爱丽速子的好感度归零
  // todo 好感度<150 上一回合没有进行做料理 做料理累积次数>5
  await tachyon.say_and_wait(`唔……`);
  await era.printAndWait(`速子今天看起来有些浮躁的样子`);
  await era.printAndWait(`你紧张的问她发生什么事了`);
  era.println();
  await tachyon.say_and_wait(`…………哼，没什么`);
  era.println();
  await era.printAndWait(`她赌气般的说了没事`);
  await tachyon.say_and_wait(`咕～～～～`);
  await era.printAndWait(`就在此时，非常凑巧的，她的肚子发出了响亮的一声`);
  era.println();
  await tachyon.say_and_wait(`……………`);
  await era.printAndWait(`……………`);
  era.println();
  await era.printAndWait(`你忽然想起，你上周似乎完全忘记给她做便当了`);
  await era.printAndWait(`难道说……`);
  era.println();
  await tachyon.say_and_wait(
    `…………反正，食物只用维持最基本的活动所需能量就够了`,
  );
  era.println();
  await era.printAndWait(
    `她仍在嘴硬着，你连忙向她道歉并答应今天一定不会忘记了`,
  );
  // todo 好感度<150 连续两回合没有进行做料理，做料理累积次数>5
  era.println();
  await tachyon.say_and_wait(`哼，豚鼠君，今天的药来了`);
  era.println();
  await era.printAndWait(
    `爱丽速子忽然闯进了训练员室，给你灌了瓶颜色奇怪——不，这点而言可以说是一如往常——的药`,
  );
  era.println();
  await era.printAndWait(`你喝下去后没过多久便陷入了睡眠`);
  await era.printAndWait(
    `在睡梦中，你彷佛正行走在沙漠之中，已经几天几夜没吃没喝了，`,
  );
  await era.printAndWait(
    `忽然画面一转，在梦中，你被不知道谁不停的塞着被打成烂泥的营养素，虽然觉得难以下咽，`,
  );
  await era.printAndWait(
    `但想到先前在沙漠的梦境，你还是不得不将其吞了下去…………`,
  );
  era.println();
  await era.printAndWait(`你从梦中惊醒，眼前是爱丽速子那得意的脸庞`);
  era.println();
  await tachyon.say_and_wait(`怎么，做恶梦了吗？豚鼠君`);
  era.println();
  await era.printAndWait(
    `你苦笑一声，大概知道这个药的意思了，连忙保证这周一定会记得速子的便当`,
  );
  // todo 好感度<150 连续三回合没有进行做料理，做料理累积次数>5
  await era.printAndWait(`今天一早你来到学园时便发现了不对劲`);
  await era.printAndWait(`整个学园都被一种浮躁的气氛所包围`);
  await era.printAndWait(
    `这种气氛到了午休时间增长到了极限，在午餐时间的食堂爆发到了极限`,
  );
  era.println();
  await say_by_passer_by(
    `路人训练员A`,
    `所有马娘都开始暴走了！她们不知道为什么忽然开始缠着自己的训练员要便当！`,
  );
  await say_by_passer_by(
    `路人训练员A`,
    `不是亲手做的就不行！天杀的，她们到底是怎么分辨出便当是不是训练员做的！`,
  );
  era.println();
  await era.printAndWait(
    `某龙套训练员不知为何在闯进训练员室后彷佛在解说现状般的说完了上述那些后，被门外闯入的他的负责马娘拖了出去`,
  );
  era.printButton(`到，到底……怎么回事……`, 1);
  await era.input();
  era.println();
  await tachyon.say_and_wait(`哦呀，有人问怎么回事了吗？`);
  await era.printAndWait(
    `忽然，从你身后传来了一个熟悉的声音，然而你甚至不知道她是什么时候闯进训练员室来的`,
  );
  era.println();
  await tachyon.say_and_wait(`既然你诚心诚意的发问了，那我就大发慈悲的告诉你`);
  await tachyon.say_and_wait(
    `为了贯彻马娘与便当的邪恶，可爱又迷人的疯狂科学家`,
  );
  await tachyon.say_and_wait(
    `太长了以下省略，总之就是我爱丽速子。好啦，豚鼠君，乖乖把便当交出来吧`,
  );
  era.println();
  await era.printAndWait(
    `爱丽速子靠在你坐着的椅子椅背上，朝着坐在椅子上的你低下头，露出了一副侵略性极强的笑容`,
  );
  era.printButton(`你又干了什么`, 1);
  await era.input();
  await tachyon.say_and_wait(
    `哦呀，真过分，怎么这就怀疑到我身上了，说不定我也是受害者呢`,
  );
  era.println();
  await era.printAndWait(`她用可怜兮兮的语气说道`);
  era.printButton(`因为你刚刚自己承认了`, 1);
  await era.input();
  era.println();
  await tachyon.say_and_wait(`欸……好像，确实有这么回事啊`);
  await era.printAndWait(`那种小细节别在意啦`);
  await era.printAndWait(`她挥了挥袖子说道`);
  era.println();
  await tachyon.say_and_wait(`重点是，豚鼠君，把你的便当交出来吧`);
  era.printButton(`你以为用这种强迫的方式我会乖乖就范吗？`, 1);
  await era.input();
  era.println();
  await tachyon.say_and_wait(`…………呵呵，当然了，最终你必然会乖乖将便当奉上的`);
  era.println();
  await era.printAndWait(`速子露出了神秘的笑容，你不由自主的感到有些心虚`);
  await era.printAndWait(
    `今天你确实做了速子的便当，但今天工作太忙，一不小心真的忘记了`,
  );
  await era.printAndWait(
    `但不管怎么说，绝对不能在这里让步，这是为了身为训练员的尊严！是为了自由！为了……`,
  );
  era.println();
  await tachyon.say_and_wait(
    `宣布！由于某种未知因素的影响，学园内所有马娘陷入了对训练员亲手制作便当的不明执着，`,
  );
  await tachyon.say_and_wait(
    `请各位训练员立刻开始制作自己爱马的便当，不会做饭的训练员可向秘书长、家政教师和吃完自己训练员制作的便当的玉藻十字、菱亚马逊或菱曙寻求协助`,
  );
  era.printButton(`…………………`, 1);
  await era.input();
  await era.printAndWait(`看着满脸得意的速子，你不由得露出苦笑`);
  await era.printAndWait(`果然还是赢不过她啊，你只能乖乖的交出了便当`);
  //todo   好感度>150上一回合没有进行做料理，做料理累积次数>10
  era.println();
  await era.printAndWait(`午休时间，当你正在打数据，训练员室的门被撞开了`);
  era.println();
  await tachyon.say_and_wait(`豚鼠君！我的饭呢！快点快点！`);
  era.println();
  await era.printAndWait(`速子一闯进来，就扑上了桌子开始不停滚动`);
  era.println();
  await era.printAndWait(`危险危险`);
  await era.printAndWait(`你连忙把桌上的计算机收起，避免被速子撞掉到地上`);
  era.println();
  await tachyon.say_and_wait(
    `…...….豚鼠君！你已经一周没给我做便当了！我都快饿死了，快点，我的便当呢！..`,
  );
  era.println();
  await era.printAndWait(
    `速子甩着袖子，生气的在你面前跺着脚，吹弹可破的脸颊彷佛河豚一般鼓了起来，虽然说`,
  );
  era.printButton(`不是给你做了吗？`, 1);
  await era.input();
  // todo 做料理次数<20
  await tachyon.say_and_wait(`那种一看就没用心做的能叫便当吗！？`);
  // todo 做料理次数>20
  await tachyon.say_and_wait(`虽然吃不出差别……但有种直觉告诉我你是敷衍着做的`);
  era.printButton(`…………`, 1);
  await era.input();
  era.println();
  await tachyon.say_and_wait(`你现在在想“这个家伙好麻烦啊”对吧？`);
  await me.say_and_wait(`…………`);
  await me.say_and_wait(`怎么被猜到了`, true);
  era.println();
  await tachyon.say_and_wait(`总之明天一定要看到便当！不然你一定会后悔的`);
  //todo 好感度>150上两回合没有进行做料理，做料理累积次数>10
  era.println();
  await era.printAndWait(`爱丽速子已经两周没有对你做任何实验了`);
  await era.printAndWait(`第一周说实话，你完全没有任何不舍，甚至还挺高兴的，`);
  await era.printAndWait(
    `毕竟每天都还是能看见爱丽速子，一切都很正常，只是她不会对你做实验了而已`,
  );
  await era.printAndWait(`但第二周你开始有些感到不对劲，斯德哥尔摩症候群……`);
  await era.printAndWait(`倒也不是如此，只是担心她的状况，以及某种不祥的预感`);
  era.println();
  await era.printAndWait(`你到了她的实验室前，敲了敲门，门内没有回复`);
  await era.printAndWait(`你感觉事态不妙，直接闯了进去`);
  era.println();
  await era.printAndWait(
    `明明看上去像是速子，却不知为何变成了两头身，变成了某种看上去有些可爱的生物，`,
  );
  await era.printAndWait(
    `背后的尾巴变得比较圆润肥大，看上去就像……狸猫的尾巴？`,
  );
  await era.printAndWait(`欸？？怎么回事？？这个是速子吗？？？`);
  era.println();
  await era.printAndWait(`…………原来如此`);
  await era.printAndWait(`你完全理解了一切`);
  await era.printAndWait(
    `没有错，那些来路不明的药剂，看待实验品的非人态度，还有现在总算露出的尾巴`,
  );
  await era.printAndWait(`没错，爱丽速子从一开始就是狸猫变的！`);
  era.println();
  await era.printAndWait(`…………不，先把这种错乱下的胡思乱想推到一旁吧`);
  await era.printAndWait(
    `不知为何周围开始响起了奇怪的BGM，似乎是アメリアの遗言，十分美妙的音乐，与此时凄凉的场景形成了鲜明的对比`,
  );
  await era.printAndWait(
    `慌忙之下，你想到了之前速子说过关于便当的事，连忙拿出原本留给自己的便当`,
  );
  era.drawLine();
  era.println();
  await tachyon.say_and_wait(`豚鼠君？你在干嘛呢？`);
  await era.printAndWait(
    `清醒过来的爱丽速子瞬间变回了原来的样子，只有空荡的便当盒证明了刚才发生的一切`,
  );
  await era.printAndWait(`并非梦境……总之，以后还是记得给速子做便当吧`);
  */
};

handlers[event_hooks.office_study] = async function () {
  const tachyon = get_chara_talk(32);
  switch (get_random_value(0, 4)) {
    case 0:
      await tachyon.say_and_wait(`啊，豚鼠君，能麻烦你帮我指导一下这一章吗？`);
      await tachyon.say_and_wait(
        `什么叫「没想到速子居然也会有不懂的东西」，虽然是在吹捧我，但也吹的过头了，我对自己所知的渺小还是很有自知之明的。`,
      );
      break;
    case 1:
      await tachyon.say_and_wait(
        `啊，豚鼠君，能麻烦你教我关于这方面的事情吗？`,
      );
      await tachyon.say_and_wait(
        `嗯嗯，没错，就是这章，科学伦理，不知道为什么我总是记不住，真奇怪啊……`,
      );
      break;
    case 2:
      await tachyon.say_and_wait(`为了考试而学习，那样学到的知识真的有用吗？`);
      await tachyon.say_and_wait(`你明白我的意思吧，豚鼠君。`);
      await tachyon.say_and_wait(`生活中完全用不上的东西，学习了也是白学。`);
      await tachyon.say_and_wait(
        `所以说伦理与道德这种提的全是老掉牙古板思想的东西，就算不学也没有关系的吧。`,
      );
      await tachyon.say_and_wait(`……不行吗？`);
      break;
    case 3:
      await tachyon.say_and_wait(
        `地理？不，豚鼠君……你怎么会觉得我会连这么简单的科目都需要补习呢。`,
      );
      await tachyon.say_and_wait(
        `不信就来考我吧，瑞士的首都是伯尔尼、巴西的官方语言是西班牙语，美国的前身是十三个英属殖民地……你看，我这不都回答出来了吗？`,
      );
      await tachyon.say_and_wait(`南边是哪边？呵，愚问，当然是地底下了。`);
      break;
    case 4:
      await tachyon.say_and_wait(
        `豚鼠君，关于这个作文我实在不是很懂自己哪里写的有问题了。`,
      );
      await tachyon.say_and_wait(`题目不是问了为什么窗帘是蓝色的吗？`);
      await tachyon.say_and_wait(
        `因此我基于颜色的成色原理与人类经由视椎细胞获得的信息写了两万字分析这样有什么问题吗？`,
      );
      await tachyon.say_and_wait(
        `……原来如此，是字数超过了啊，我下次努力控制在两千字内吧。`,
      );
      break;
  }
};

handlers[event_hooks.office_rest] = async function () {
  const tachyon = get_chara_talk(32),
    love = era.get('love:32'),
    motivation = era.get('cflag:32:干劲');
  if (motivation === -2) {
    await tachyon.say_and_wait(`我不需要休息`);
    await era.printAndWait(`状态明显不好的速子坚持逞强的说道。`);
    await tachyon.say_and_wait(`明明还有一堆能做，要做的事，怎么能休息……`);
    if (love > 49) {
      await era.printAndWait(`你从背后抱住了坚持在实验桌前的速子。`);
      await era.printAndWait(`她的身体颤抖了一下。`);
      await tachyon.say_and_wait(`……豚鼠君，就算色诱也没用的哦。`);
    } else {
      await era.printAndWait(`你强硬的把倔强坐在实验桌前的她拉了起来。`);
    }
  } else {
    switch (get_random_value(0, 4)) {
      case 0:
        await tachyon.say_and_wait(`累了累了，豚鼠君，快泡杯红茶过来。`);
        break;
      case 1:
        await era.printAndWait(
          `你喝着自己泡的红茶，与速子在沙发椅上度过悠闲的下午。`,
        );
        break;
      case 2:
        await tachyon.say_and_wait(`真闲啊。`);
        await era.printAndWait(`速子发出了对日常的感叹。`);
        break;
    }
  }
};

handlers[event_hooks.office_prepare] = async function () {
  const tachyon = get_chara_talk(32);
  switch (get_random_value(0, 1)) {
    case 0:
      await tachyon.say_and_wait(
        `准备？只有弱者才准备，豚鼠君，你看过狮子锻炼吗？`,
      );
      break;
    case 1:
      await tachyon.say_and_wait(
        `欸，为什么还要做赛前准备，比赛不是和考试一样，测的是平时的积累吗……`,
      );
      await tachyon.say_and_wait(
        `难道说你是那种？考前才临时抱佛脚希望不要挂科的？`,
      );
      break;
  }
};

handlers[event_hooks.office_game] = async function () {
  const tachyon = get_chara_talk(32);
  switch (get_random_value(0, 1)) {
    case 0:
      await tachyon.say_and_wait([
        '啧……这个机体也太慢了，完全跟不上',
        tachyon.get_uma_sex_title(),
        '的输出速度嘛！',
      ]);
      break;
    case 1:
      await tachyon.say_and_wait(`格斗游戏？输了要听对方的话？`);
      await tachyon.say_and_wait(
        `呵呵，你有办法胜过已经把出招表都背下来的我吗？`,
      );
      await tachyon.say_and_wait(
        `……等等！龟缩在墙角不停用远距离攻击也太过分了！`,
      );
      break;
  }
};

/**
 * 速子的日常事件，id=32
 *
 * @author 名贵易碎电子盆栽孕袋女士
 * @author 黑奴一号 黑奴队长（修订）
 */
module.exports = {
  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(hook, extra_flag, event_object) {
    if (
      (event_object && hook.hook !== event_hooks.week_start) ||
      !handlers[hook.hook]
    ) {
      throw new Error('unsupported hook!');
    }
    return !!(await handlers[hook.hook](hook, extra_flag));
  },
};
