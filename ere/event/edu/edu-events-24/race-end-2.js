const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.hans_dai] = async (maya, me, callname, extra_flag) => {
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    if (extra_flag.rank === 1) {
      await print_event_name('驾驶杆还握在手中', maya);
      await maya.say_and_wait('哈啊……哈啊……！');
      await era.printAndWait('（哇啊啊啊啊啊啊啊────！！）');
      await maya.say_and_wait('嘻嘻，我赢了！拿下胜利了～☆');
      await maya.say_and_wait('呵呵，这下就──');
      await brian.say_and_wait('……');
      await brian.say_and_wait('……还不够吗。');
      await maya.say_and_wait('…………');
      await maya.say_and_wait('……咦？');
      await maya.say_and_wait('…………');
      era.drawLine();
      await amazon.say_and_wait([
        sys_get_colored_callname(12, 24),
        '！跑得漂亮！最后的直线太精彩了！',
      ]);
      await maya.say_and_wait([
        '……咦，',
        sys_get_colored_callname(24, 12),
        '？你难道是来看我比赛的吗？',
      ]);
      await amazon.say_and_wait(
        '嗯！毕竟是你们俩难得的决胜之日，所以我来帮你加油──',
      );
      await maya.say_and_wait('那么希望你可以告诉我。');
      await maya.say_and_wait([
        sys_get_colored_callname(24, 16),
        ' 下次会参加哪场比赛？',
        sys_get_colored_callname(24, 12),
        ' 应该知道吧？',
      ]);
      await amazon.say_and_wait('！');
      await amazon.say_and_wait('真是败给你了。这样还没满足吗？');
      await maya.say_and_wait('嗯。因为……');
      await maya.say_and_wait([
        '那个人还没感到不甘心呀。真要说的话，感觉',
        maya.sex,
        '很悲伤。',
      ]);
      await maya.say_and_wait([
        '……我不喜欢这样。难得可以跟',
        maya.sex,
        '对决──',
      ]);
      await maya.say_and_wait([
        '人家想要变得更加耀眼，耀眼到让',
        maya.sex,
        '感到不甘心。',
      ]);
      await amazon.say_and_wait('……这样啊。');
      await amazon.say_and_wait([
        '哈，你让我想起第一次见到',
        maya.sex,
        '的时候。当时尽管比赛已经结束，',
        maya.sex,
        '却还是一脸不满足的样子。',
      ]);
      await amazon.say_and_wait([
        '那我就告诉你吧。我的直觉认为是『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』。',
      ]);
      await amazon.say_and_wait('那家伙就是渴望强者云集的舞台。');
      await amazon.say_and_wait([
        '对',
        maya.sex,
        '来说，这次的『',
        race_infos[race_enum.hans_dai].get_colored_name(),
        '』原本应该也只是前往『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』途中的道路。',
      ]);
      await era.printAndWait([
        '──「',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '」。那是历史悠久，竞争长距离最高峰的比赛。',
      ]);
      await maya.say_and_wait(['……', callname, '。']);
      era.printButton(
        `「嗯，我们参加『${race_infos[race_enum.tenn_spr].name_zh}』吧」`,
        1,
      );
      await era.input();
      await maya.say_and_wait('收到！');
      await amazon.say_and_wait('呵……这两个人真了不起。');
      await amazon.say_and_wait('好，要帮忙就帮到底！我也加入你们吧！');
      await amazon.say_and_wait([
        sys_get_colored_callname(24, 12),
        '，今天回去之后我会好好锻炼你的！给我做好心理准备！',
      ]);
      await maya.say_and_wait('嘻嘻，当然没问题☆');
    } else {
      await print_event_name('立刻上升', maya);
      await maya.say_and_wait('哈啊……哈啊……！');
      await maya.say_and_wait('唔……明明就只差一点了说……！！');
      await era.printAndWait('（哇啊啊啊啊啊啊啊────！！）');
      await brian.say_and_wait('哼……');
      await brian.say_and_wait('……就这点程度吗？');
      await maya.say_and_wait('可恶～～！那个表情是怎样～！');
      await maya.say_and_wait('完全不把人家放在眼里的感觉～！！');
      await maya.say_and_wait('唔唔……但是──');
      era.drawLine();
      await maya.say_and_wait('……我回来了！！');
      era.printButton('「欢迎回来」', 1);
      await era.input();
      await amazon.say_and_wait('哦，已经回来了啊？');
      await maya.say_and_wait([
        '咦咦！？为什么 ',
        sys_get_colored_callname(24, 12),
        ' 在这里！？',
      ]);
      await amazon.say_and_wait('什么为什么，我是来帮你加油的……');
      await maya.say_and_wait('这样啊！那刚好！');
      await maya.say_and_wait('请多锻炼人家！今天就开始也没关系！');
      await amazon.say_and_wait('啥！？你也要考量一下我方不方便啊──');
      await maya.say_and_wait('不要！因为人家想变强嘛！人家知道我还能变更强！');
      await maya.say_and_wait([
        '因为我好不甘心！',
        maya.sex,
        '又让我感到兴奋不已了！',
      ]);
      await maya.say_and_wait([
        sys_get_colored_callname(24, 16),
        ' 看起来还是闪闪发亮的！',
      ]);
      await maya.say_and_wait(
        '我不想就这么输下去啦！我不想自己讲出『结束了』！！',
      );
      era.printButton('「我也拜托你了！」', 1);
      await era.input();
      await amazon.say_and_wait('唉……这两个任性的家伙是怎样。');
      await amazon.say_and_wait('……不过对决就是要有这种热情。');
      await amazon.say_and_wait('好，帮就帮到底！我也加入你们吧！');
      await amazon.say_and_wait([
        sys_get_colored_callname(12, 24),
        '，我会多加锻炼你的！给我做好心理准备！',
      ]);
      await maya.say_and_wait('嗯！谢谢你！');
      await amazon.say_and_wait('答得很好！继续维持下去，不要松懈！');
      await amazon.say_and_wait(
        '随时都要拿出全力！想着未来的事情，而无法大力挥出拳头的家伙，跟一开始就举白旗投降的人没两样！',
      );
      await maya.say_and_wait('是的！');
      await amazon.say_and_wait([
        '呵！那就来开下次的作战会议吧。所以说，',
        sys_get_colored_callname(12, 24),
        '。',
      ]);
      await amazon.say_and_wait([
        '下次和',
        maya.sex,
        '对上，就是在『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』。',
      ]);
      await maya.say_and_wait([
        '『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』……！',
      ]);
      await era.printAndWait([
        '──「',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '」。那是历史悠久，竞争长距离最高峰的比赛。',
      ]);
      await amazon.say_and_wait('那家伙就是渴望强者云集的舞台。');
      await amazon.say_and_wait([
        '对',
        maya.sex,
        '来说，这次的『',
        race_infos[race_enum.hans_dai].get_colored_name(),
        '』原本应该也只是前往『',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '』途中的道路。',
      ]);
      await maya.say_and_wait(['……我知道了。那么，', callname, '。']);
      era.printButton(
        `「嗯，我们参加『${race_infos[race_enum.tenn_spr].name_zh}』吧」`,
        1,
      );
      await era.input();
      await maya.say_and_wait('收到！');
    }
    await era.printAndWait([
      '于是下个目标就决定是「',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '」了！',
    ]);
  };

  handlers[race_enum.tenn_spr] = async (maya, me, callname, extra_flag) => {
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    await print_event_name('紧急情况', maya);
    if (extra_flag.rank === 1) {
      await maya.say_and_wait('哈啊……哈啊……！……好！');
      await maya.say_and_wait([
        '这下就能……让 ',
        sys_get_colored_callname(24, 16),
        '……！',
      ]);
      await brian.say_and_wait('──为什么？');
      await brian.say_and_wait('哼……！还是只有这点程度……！');
    } else {
      await maya.say_and_wait('哈啊……哈啊……！……唔！');
      await maya.say_and_wait([
        sys_get_colored_callname(24, 16),
        '……果然……好快啊……！！',
      ]);
      await brian.say_and_wait('──为什么？');
      await brian.say_and_wait('为什么……还办不到……！');
    }
    await maya.say_and_wait('……真是的，感觉就不把人家放在眼里。');
    era.drawLine();
    await maya.say_and_wait([
      sys_get_colored_callname(24, 16),
      ' 究竟在看哪里……',
    ]);
    era.printButton('……咦？', 1);
    await era.input();
    await maya.say_and_wait([
      '……',
      sys_get_colored_callname(24, 16),
      ' 究竟在看哪里呢……？',
    ]);
    await maya.say_and_wait(['……', callname, '，那个啊。我有件事想拜托你。']);
    await maya.say_and_wait([
      '再一次就好，希望可以尽快让我跟 ',
      sys_get_colored_callname(24, 16),
      ' 比赛。',
    ]);
    era.printButton(
      extra_flag.rank === 1
        ? '「你这次明明赢了耶」'
        : '「你还打算挑战' + maya.sex + '啊」',
      1,
    );
    await era.input();
    await maya.say_and_wait('嗯，必须再比一次才行……虽然我不清楚为什么。');
    await maya.say_and_wait('而且这次有种预感，觉得要赶快才行……');
    await amazon.say_and_wait([
      '唔！',
      sys_get_colored_callname(12, 24),
      '……是这次的比赛让你这么想的吗？',
    ]);
    await maya.say_and_wait('……没、没错。');
    await amazon.say_and_wait('是吗。既然这样，那就更不能放着不管了。');
    await amazon.say_and_wait([
      '──『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』一定就是最后了吧。',
    ]);
    era.printButton('「……最后？」', 1);
    await era.input();
    await amazon.say_and_wait([
      '嗯，那家伙打算把 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      ' 当成『最后的比赛』，结束选手生涯。',
    ]);
    await amazon.say_and_wait('哼……也太早落幕了吧……！');
    await maya.say_and_wait([sys_get_colored_callname(24, 12), '！？']);
    await maya.say_and_wait('……为什么？这样好奇怪。');
    await maya.say_and_wait([
      '怎么可能是最后……',
      sys_get_colored_callname(24, 16),
      ' 今天不是也很强吗？',
    ]);
    if (extra_flag.rank === 1) {
      await maya.say_and_wait('居然要结束了。讨厌……我才不接受！');
      await maya.say_and_wait([
        '因为就算赢了比赛，我却不觉得自己已经赢过 ',
        sys_get_colored_callname(24, 16),
        ' 了！',
      ]);
      await maya.say_and_wait([
        '不是只有我自己而已，人家也想让',
        maya.sex,
        '对我的实力感到兴奋！',
      ]);
      era.printButton('「你想让' + maya.sex + '感到兴奋？」', 1);
      await era.input();
      await maya.say_and_wait('……嗯，没错。因为我好不甘心。');
    } else {
      await maya.say_and_wait([maya.sex, '又让人家感到很兴奋了耶？']);
      await maya.say_and_wait('但是居然已经要结束了。讨厌……我才不接受！');
      await maya.say_and_wait(['人家才不要一直输给', maya.sex, '！']);
      era.printButton('「……你想赢吗？」', 1);
      await era.input();
      await maya.say_and_wait('我想赢。');
      await maya.say_and_wait([
        '……而且不只有人家，这次一定要让',
        maya.sex,
        '也兴奋不已。',
      ]);
    }
    await maya.say_and_wait([
      '在赛场上闪闪发亮的赛',
      maya.get_uma_sex_title(),
      '，就是能让同场比赛的对手和观众，让大家的心都感到兴奋不已的存在。',
    ]);
    await maya.say_and_wait([
      '所以人家也想成为能让',
      maya.sex,
      '感到兴奋的人……！',
    ]);
    await maya.say_and_wait(['那个，', callname, '。就是啊……']);
    await maya.say_and_wait([
      sys_get_colored_callname(24, 12),
      ' 刚才不是说，有马纪念是 ',
      sys_get_colored_callname(24, 16),
      ' 的最后一场比赛吗？',
    ]);
    await maya.say_and_wait([
      '所以人家希望你能在『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』之前把我训练到完美。',
    ]);
    era.printButton('「我知道了」', 1);
    await era.input();
    await maya.say_and_wait('……谢谢。嘿嘿，我很期待哦。');
    await era.printAndWait([
      '──如果既要以「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』为目标，同时也要能和',
      maya.sex,
      '所期望的强敌较量……以此方向去安排G1的参赛计划的话──',
    ]);
    await era.printAndWait(
      '夏季跟秋季至少各得要参加一场比赛。看是接近有马的中长距离，或是中距离的G1。',
    );
    era.printButton('「『宝冢纪念』、『秋季天皇赏』……」', 1);
    await era.input();
    await maya.say_and_wait(
      '我知道了，人家会参加的。我要参加比赛……以最快的速度变强。',
    );
    await maya.say_and_wait('──我感觉不这么做不行。');
  };

  handlers[race_enum.takz_kin] = async (maya, me, callname, extra_flag) => {
    if (era.get('cflag:24:育成回合计时') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('前往驾驶舱', maya);
    const amazon = get_chara_talk(12);
    const brian = get_chara_talk(16);
    await era.printAndWait('（哇啊啊啊啊啊────！！）');
    await brian.say_and_wait('……');
    await amazon.say_and_wait('怎么样？');
    await brian.say_and_wait('……不怎么样。');
    await brian.say_and_wait('事情办完了，我要回学园了。');
    await amazon.say_and_wait('回去训练吗？');
    await brian.say_and_wait('……烦死了。');
    era.drawLine();
    await maya.say_and_wait(['哈啊……哈啊……呼。', callname, '，如何？']);
    await maya.say_and_wait('我有确实成长了吗？以我现在能办到的全速。');
    era.printButton('「你有所成长了！」', 1);
    await era.input();
    await maya.say_and_wait('嘿嘿，太好了♪不愧是人家果然很厉害呢☆');
    await maya.say_and_wait(
      '呵呵。我可受不了像那种，会被其他人的气流影响的平庸驾驶技术啦♪',
    );
    await maya.say_and_wait('那么！已经锁定下个目标了！目标是──');
    era.printButton(`「『${race_infos[race_enum.tenn_sho].name_zh}』！」`, 1);
    await era.input();
    await maya.say_and_wait('收到☆');
    await maya.say_and_wait('好，下次也要全速前进♪');
  };

  handlers[race_enum.tenn_sho] = async (maya, me, callname, extra_flag) => {
    if (era.get('cflag:24:育成回合计时') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('通往天空的跑道', maya);
    const teio = get_chara_talk(3),
      brian = get_chara_talk(16),
      luna = get_chara_talk(17);
    await era.printAndWait('（哇啊啊啊啊啊啊啊────！！）');
    await maya.say_and_wait([callname, '！人家拿下第一名咯！第一名！']);
    era.printButton('「你很努力呢！」', 1);
    await era.input();
    await maya.say_and_wait('嗯！人家很努力！不过我还能再加把劲！');
    await maya.say_and_wait('嘿嘿，因为啊──');
    await teio.say_and_wait([
      '哦哦！',
      sys_get_colored_callname(3, 24),
      ' 好厉害！接着就是『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』了！',
    ]);
    await era.printAndWait('（哇啊啊啊啊啊啊啊────！！）');
    await maya.say_and_wait('大家一定也都认为人家能够更加耀眼♪');
    era.drawLine({ content: '几天之后' });
    await maya.say_and_wait('呼……呼……嗯，又刷新成绩了！');
    await maya.say_and_wait([
      '这下子『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』也──',
    ]);
    await maya.say_and_wait('……啊。');
    await luna.say_and_wait([
      '……',
      sys_get_colored_callname(17, 16),
      '，你说的都是真的吗？',
    ]);
    await luna.say_and_wait([
      '你要在『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』──',
    ]);
    await brian.say_and_wait([
      sys_get_colored_callname(16, 17),
      '，聊未来的事没有意义。',
    ]);
    await brian.say_and_wait('我是麻烦你陪我并跑练习，没错吧？');
    await luna.say_and_wait('这……是没错。');
    await brian.say_and_wait('……我凋零的时机由我自己做决定。');
    await brian.say_and_wait('如果你想跟我讨论的话，就待在一旁看着吧。');
    await brian.say_and_wait('……到时只会让扬长而去的我拿下胜利。');
    await luna.say_and_wait('喂、喂！');
    await luna.say_and_wait('……一意孤行，只顾走自己的路吗。但是──');
    await luna.say_and_wait('别以为每个人都会被你抛下！');
    await maya.say_and_wait(['……', maya.sex, '又在闪闪发亮了。']);
    await maya.say_and_wait([
      '越看越不甘心。为什么',
      maya.sex,
      '还能持续闪闪发亮呢。',
    ]);
    await maya.say_and_wait('那个人明明──即将要下沉了的说。');
    era.printButton('「……因为夕阳会散发着红色光芒」', 1);
    await era.input();
    await maya.say_and_wait('……咦？');
    await era.printAndWait('傍晚的太阳比起早上和中午的时候都还要来得通红。');
    await era.printAndWait(
      '当夕阳落下、下沉之前，那一瞬间的耀眼光芒，会抓住人们的心。',
    );
    era.printButton('「别输给那道光芒了」', 1);
    await era.input();
    await maya.say_and_wait('……嗯。');
    await maya.say_and_wait('要是输给那道光芒，我感觉一辈子都会赢不了。');
    await maya.say_and_wait([
      '我会全力以赴哦。在『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』──',
    ]);
    await maya.say_and_wait('拿出全力……赢过那个人！！');
  };
};
