const era = require('#/era-electron');
const print_event_name = require('#/event/snippets/print-event-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = async () => {
  const chara_talk = get_chara_talk(32),
    love = era.get('love:32'),
    hate_level = era.get(`mark:32:反抗`),
    meek_level = era.get(`mark:32:同心`),
    pain_level = era.get(`mark:32:苦痛`),
    pleasure_level = era.get(`mark:32:欢愉`),
    shame_level = era.get(`mark:32:羞耻`);
  if (pleasure_level === 3) {
    await print_event_name('实验记录：欢愉刻印三级', chara_talk);
    if (love < 75) {
      await chara_talk.say_and_wait(
        `已经……不能再思考了……好舒服……更多……还要更多，豚鼠君……给我……我还要……`,
      );
    } else {
      await chara_talk.say_and_wait(`豚鼠君♡豚鼠君♡`);
      await chara_talk.say_and_wait(`更多……给我更多……从里到外把我完全填满……♡`);
      await chara_talk.say_and_wait(
        `是你把我变成这样的……所以，还想要更多♡让我聪明的脑袋再也无法思考肉体交合以外的东西♡`,
      );
    }
  } else if (pleasure_level === 2) {
    await print_event_name('实验记录：欢愉刻印二级', chara_talk);
    if (love < 75) {
      await chara_talk.say_and_wait(
        `不行……明明只是激素作用……只是，身体正常反应……可是，可是……为什么……这么舒服……`,
      );
    } else {
      await chara_talk.say_and_wait(
        `等等……里面还没缓过来……要是，要是更舒服的话……咿！`,
      );
      await chara_talk.say_and_wait(
        `不行，明明知道不能继续下去，可是身体自己……脑袋……无法思考`,
      );
    }
  } else if (pleasure_level === 1) {
    await print_event_name('实验记录：欢愉刻印一级', chara_talk);
    if (love < 75) {
      await chara_talk.say_and_wait(
        `唔……热热痒痒的……身体有点难受……是药的副作用吗？`,
      );
    } else {
      await chara_talk.say_and_wait(`嗯……热热痒痒的……`);
      await chara_talk.say_and_wait(
        `不，没有不舒服……唔……试试看，多做点吧……感觉，有些不可思议……`,
      );
    }
  } else if (meek_level === 3) {
    await print_event_name('实验记录：同心刻印三级', chara_talk);
    await chara_talk.say_and_wait(
      `放弃思考，完全成为某人的俘虏居然是这么舒服的事情……`,
      true,
    );
    await chara_talk.say_and_wait(`啊啊……之前的自己到底在抵抗什么呢`, true);
    await chara_talk.say_and_wait(
      `豚鼠君……不，主人……大人……给我，还想要更多……♡`,
    );
    await chara_talk.say_and_wait(
      `没关系的……这只是……只是……增加情趣的玩法`,
      true,
    );
    await chara_talk.say_and_wait(`结束之后就恢复正常了……对……所以……`, true);
    await chara_talk.say_and_wait(`请再……给我更多命令吧……♡`);
  } else if (meek_level === 2) {
    await print_event_name('实验记录：同心刻印二级', chara_talk);
    if (love < 75) {
      await chara_talk.say_and_wait(`等等……豚鼠君……不要那么……`);
      await chara_talk.say_and_wait(`不，为什么更激烈了……！`);
      await chara_talk.say_and_wait(
        `咕……明明只是豚鼠君……明明应该听我的命令的……`,
      );
      await chara_talk.say_and_wait(
        `为什么……身体却觉得比之前更舒服了……难道我是什么被虐狂吗……`,
        true,
      );
    } else {
      await chara_talk.say_and_wait(`唔嗯……豚鼠君，等一下……太用力……咿♡`);
      await chara_talk.say_and_wait(`讨厌……………不，也没有……`);
      await chara_talk.say_and_wait(`等！又忽然这么……嗯啊♡♡`);
      await chara_talk.say_and_wait(`都说住手了……豚鼠君你啊，唉`);
      await chara_talk.say_and_wait(`明明……支配权应该在我手上的啊`, true);
      await chara_talk.say_and_wait(`为什么，我却反过来……想被支配……`, true);
      await chara_talk.say_and_wait(`不妙……真的不妙啊♡`, true);
    }
  } else if (meek_level === 1) {
    await print_event_name('实验记录：同心刻印一级', chara_talk);
    if (love < 75) {
      await chara_talk.say_and_wait(
        `偶尔放空思考，任人摆布……某种意义上或许也是种舒压的方法？`,
        true,
      );
      await chara_talk.say_and_wait(`豚鼠君………………不对，我在想什么！`);
      await era.printAndWait(`速子忽然疯狂的摇晃起头来。`);
    } else {
      await chara_talk.say_and_wait(`嗯♡嗯啊♡豚，豚鼠君♡等等……停，停一下♡`);
      await chara_talk.say_and_wait(`哈啊……哈啊……`);
      await chara_talk.say_and_wait(
        `明明……按我说的停下来了，为什么身体还是觉得有点奇怪呢……`,
        true,
      );
      await chara_talk.say_and_wait(
        `仿佛……我在希望豚鼠君能够无视我说的话……继续……把我弄到不省人事……………到底在想什么东西啊我！`,
        true,
      );
      await era.printAndWait(`速子忽然疯狂的摇晃起头来`);
    }
  } else if (pain_level === 3) {
    await print_event_name('实验记录：痛苦刻印三级', chara_talk);
    if (love < 75) {
      await chara_talk.say_and_wait(
        `好痛……好可怕……对不起……是我不好……是我不好……不要再弄了……好痛，好痛……`,
      );
    } else {
      await chara_talk.say_and_wait(
        `好痛……豚鼠君……为什么……为什么要这样对我……我不理解……`,
      );
      await chara_talk.say_and_wait(
        `这就是爱吗？为什么要这样对待自己的爱人……我不懂啊……`,
      );
    }
  } else if (pain_level === 2) {
    await print_event_name('实验记录：痛苦刻印二级', chara_talk);
    if (love < 75) {
      await chara_talk.say_and_wait(`不要……住手！好痛……不要再弄了！`);
    } else {
      await chara_talk.say_and_wait(
        `豚鼠君！？是，是我哪里做错了吗……为什么，为什么要这样对我……`,
      );
    }
  } else if (pain_level === 1) {
    await print_event_name('实验记录：痛苦刻印一级', chara_talk);
    if (love < 75) {
      await chara_talk.say_and_wait(
        `好痛！？居然对主人做出这种事来，豚鼠君你在想什么！`,
      );
    } else {
      await chara_talk.say_and_wait(`好痛！？豚鼠君……可以不要那么粗鲁吗？`);
    }
  } else if (shame_level === 3) {
    await print_event_name('实验记录：羞耻刻印三级', chara_talk);
    await chara_talk.say_and_wait(`哈哈……啊哈哈……`, true);
    await chara_talk.say_and_wait(
      `就算身为疯狂科学家，没有在乎过他人的看法……我也从来没想过居然有一天自己会变成这样`,
      true,
    );
    await chara_talk.say_and_wait(`来吧，怎样都好了……已经，放弃思考了……`, true);
  } else if (shame_level === 2) {
    await print_event_name('实验记录：羞耻刻印二级', chara_talk);
    await chara_talk.say_and_wait(`不行了……已经无法用实验来蒙混过去了`, true);
    await chara_talk.say_and_wait(
      `即便是我，也是社会的一部分啊……也是会因为这种事而感到羞耻啊`,
      true,
    );
    await chara_talk.say_and_wait(
      `咕……但是……为什么会感到舒服啊……我的身体到底怎么了……`,
      true,
    );
  } else if (shame_level === 1) {
    await print_event_name('实验记录：羞耻刻印一级', chara_talk);
    await chara_talk.say_and_wait(`这种事……也太让人害羞了`, true);
    await chara_talk.say_and_wait(
      `平常心……平常心……当成实验就好，嗯，实验`,
      true,
    );
  } else if (hate_level === 3) {
    await print_event_name('实验记录：反抗刻印三级', chara_talk);
    if (love < 50) {
      await era.printAndWait(`瞬间，一股灼烧感通过你的喉咙逆流而出。`);
      await era.printAndWait(
        `你忍不住咳了几声，并惊恐的发现地上的液体带有几缕血丝。`,
      );
      await chara_talk.say_and_wait(`这是第三次了，豚鼠君。`);
      await chara_talk.say_and_wait(
        `你应该感谢……你自己在名义上是我的实验动物。`,
      );
      await chara_talk.say_and_wait(
        `而我的主张是不会浪费可利用的实验体，所以感谢你自己还有那么点利用价值吧……平常心……当成实验就好，嗯，实验。`,
      );
      await chara_talk.say_and_wait(
        `不过……我能保证就算当实验品，也绝对能让你生不如死。`,
      );
      await era.printAndWait(`速子的眼中带着厌恶及憎恶的情绪。`);
    } else {
      await chara_talk.say_and_wait(`啊啊……够了。`);
      await chara_talk.say_and_wait(`已经够了。`);
      await era.printAndWait(`红色的百叶窗，彻底关上。`);
    }
  } else if (hate_level === 2) {
    await print_event_name('实验记录：反抗刻印二级', chara_talk);
    if (love < 50) {
      await chara_talk.say_and_wait(`我警告过你了。`);
      await chara_talk.say_and_wait(`事不过三。`);
    } else {
      await chara_talk.say_and_wait(`为什么……豚鼠君……是我哪里做错了吗？`);
      await chara_talk.say_and_wait(`是我做错了吧……告诉我，豚鼠君……`);
      await chara_talk.say_and_wait(
        `不然的话……不然的话……我无法理解啊……为什么你要做出这种事来！`,
      );
      await era.printAndWait(`速子万番悲痛的看着你，心中满是不解和怀疑。`);
      await era.printAndWait(`对你的不解，对自己的怀疑。`);
    }
  } else if (hate_level === 1) {
    await print_event_name('实验记录：反抗刻印一级', chara_talk);
    if (love < 50) {
      await chara_talk.say_and_wait(`………我的忍耐是有极限的。`);
      await chara_talk.say_and_wait(`不要挑战我的极限，豚鼠君。`);
    } else {
      await chara_talk.say_and_wait(`豚鼠君……？`);
      await era.printAndWait(
        `速子愣着神，就仿佛被自己最亲密信赖的人甩了一巴掌一般。`,
      );
      await era.printAndWait(`比起愤怒，更多的是错愕和不敢置信。`);
    }
  }
};
