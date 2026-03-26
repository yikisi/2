const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (maya, me, callname, extra_flag) => {
    if (era.get('cflag:24:育成回合计时') > 48 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('希望延长飞行！', maya);
    await era.printAndWait([
      '虽然 ',
      maya.get_colored_name(),
      ' 的出道战就这样顺利地结束了──',
    ]);
    await maya.say_and_wait('唔唔……嗯……？');
    await maya.say_and_wait('嗯嗯嗯……？');
    await era.printAndWait([
      '从刚才开始 ',
      maya.get_colored_name(),
      ' 的样子就不太对劲……',
    ]);
    era.printButton('「怎么了吗？」', 1);
    await era.input();
    await maya.say_and_wait('嗯……也不是怎么了。只是想说结束了啊！');
    await maya.say_and_wait([
      '我说我说，',
      callname,
      '！出道战真的就这样结束了吗？',
    ]);
    await maya.say_and_wait('你没有偷偷瞒着我什么吧？');
    await era.printAndWait([
      '……就算',
      maya.sex,
      '这么说，出道战是每个人只能体会一次的事情。',
    ]);
    await maya.say_and_wait('咦……？');
    await era.printAndWait([
      '……不过，',
      maya.get_colored_name(),
      ' 看起来丝毫不觉得满足。',
    ]);
    era.printButton('「再参加更多比赛吧」', 1);
    await era.input();
    await maya.say_and_wait('嗯…………');
    await maya.say_and_wait('……嗯，就这么办吧。');
    await maya.say_and_wait('毕竟终于成功出道了。终于来到这里了。');
    await maya.say_and_wait('闪耀系列赛……');
    await maya.say_and_wait('……应该是令人感到兴奋，并能闪闪发亮的竞赛才对。');
  };

  handlers[race_enum.kiku_sho] = async (maya, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('目前还没打算着陆', maya);
    await maya.say_and_wait('雷达收到信号！锁定目标！距离目标还剩3、2、1……！');
    await maya.say_and_wait([callname, '，你刚才有看到吗～？人家的表现～☆']);
    era.printButton('「你跑得很好呢」', 1);
    await era.input();
    await maya.say_and_wait('嘿嘿嘿～☆对吧对吧！人家果然是该受瞩目的焦点♪');
    const reporter = get_chara_talk(303);
    await reporter.say_and_wait([
      '……',
      sys_get_colored_callname(303, 24),
      ' 选手！',
      sys_get_colored_callname(303, 24),
      ' 选手！',
    ]);
    await reporter.say_and_wait(
      '我是『闪耀月刊』的乙名史。可以让我采访你的赛后感想吗？',
    );
    await maya.say_and_wait('哇！要采访我吗～！？可以哦～☆我什么都会回答！');
    await reporter.say_and_wait('谢谢你。那么就立刻──');
    await reporter.say_and_wait([
      '你在多方尝试后迎来了这次的『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』。你这次的表现简直像是在主张自己最适合的是长距离……',
    ]);
    await maya.say_and_wait('嗯？');
    await reporter.say_and_wait('啊，真是抱歉。我想一下，该怎么说呢。');
    await reporter.say_and_wait([
      sys_get_colored_callname(303, 24),
      ' 选手在挑战经典级比赛上，真正的目标果然是『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』──',
    ]);
    await maya.say_and_wait('嗯？你不用换个问法啊？人家都懂。');
    await maya.say_and_wait('只不过我是想说『为什么呢』。');
    await maya.say_and_wait([
      '我只是想参加『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』所以才出赛的。而且这也是 ',
      sys_get_colored_callname(24, 16),
      ' 参加过的比赛。',
    ]);
    await reporter.say_and_wait([
      '……',
      sys_get_callname(24, 16),
      '？是那位 ',
      sys_get_colored_callname(303, 16),
      ' 选手吗？',
    ]);
    await maya.say_and_wait([
      '嗯，没错！记者',
      reporter.adult_sex_title,
      '，我问你哦！我的表现有比 ',
      sys_get_colored_callname(24, 16),
      ' 更令人兴奋吗？有吗？',
    ]);
    await reporter.say_and_wait('哦……真想不到。');
    await reporter.say_and_wait([
      '你打算挑战 ',
      sys_get_colored_callname(303, 16),
      ' 选手对吧！这还真是……！',
    ]);
    await reporter.say_and_wait([
      '那我就直接问了。',
      sys_get_colored_callname(303, 24),
      ' 选手也会参加今年的『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』吗？',
    ]);
    await maya.say_and_wait([
      '『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』？人家吗？',
    ]);
    await reporter.say_and_wait([
      '嗯，因为『三冠赛',
      maya.uma_sex_title,
      '』的 ',
      sys_get_colored_callname(303, 16),
      ' 也会参加今年的有马。',
    ]);
    await reporter.say_and_wait('既然这样，就一定要来场正面对决吧？');
    await era.printAndWait([
      '「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」……是在每年年底举办的比赛。也是会忠实呈现出赛',
      maya.uma_sex_title,
      '的粉丝支持度，以及其当下实力的舞台。',
    ]);
    await era.printAndWait([
      '除了「三冠赛',
      maya.uma_sex_title,
      '」',
      get_chara_talk(16).get_colored_name(),
      '，还有像「女杰」',
      get_chara_talk(12).get_colored_name(),
      ' 等名声显赫的赛',
      maya.uma_sex_title,
      '应该都已经表明会参赛了。',
    ]);
    await maya.say_and_wait('嗯嗯，我会参加！');
    era.printButton('（回答得太随便了吧！）', 1);
    await era.input();
    await reporter.say_and_wait([
      '呵呵。巨星和新星，究竟谁更耀眼呢。真让人期待今年的 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '。',
    ]);
    era.drawLine();
    await maya.say_and_wait([
      '哈哈♪下场比赛是『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』啊！',
      callname,
      '，我们加油吧☆',
    ]);
    era.printButton('「你确定要参加『有马纪念』吗？」', 1);
    await era.input();
    await maya.say_and_wait([
      '嗯。在那里的话就能直接和 ',
      sys_get_colored_callname(24, 16),
      ' 竞速吧？',
    ]);
    await maya.say_and_wait('嘻嘻，这机会我等好久咯！这下终于能够证明了！');
    await maya.say_and_wait([
      '证明人家比起 ',
      sys_get_colored_callname(24, 16),
      '，更能让你感到兴奋♪',
    ]);
    await era.printAndWait([
      '就这样，',
      maya.sex,
      '在今年春天说出的目标，总算来到触手可及的距离了……！',
    ]);
  };

  handlers[race_enum.arim_kin] = async (maya, me, callname, extra_flag) => {
    const amazon = get_chara_talk(12),
      brian = get_chara_talk(16);
    if (era.get('cflag:24:育成回合计时') < 96) {
      if (extra_flag.rank === 1) {
        await print_event_name('装满燃料', maya);
        await say_by_passer_by_and_wait('实况', [
          '──精彩！太精彩了！给今年『',
          race_infos[race_enum.arim_kin].get_colored_name(),
          '』的王者献上掌声！！',
        ]);
        await era.printAndWait('（哇啊啊啊────────！！）');
        await say_by_passer_by_and_wait('观众A', [
          '话说回来，',
          maya.get_colored_name(),
          ' 还真厉害。居然赢过了 ',
          brian.get_colored_name(),
          '……',
        ]);
        await say_by_passer_by_and_wait('观众B', '嗯……真的。但是……');
        await say_by_passer_by_and_wait('观众B', [
          brian.get_colored_name(),
          ' 不可能就在此败下阵来。你也是这么认为的吧？',
        ]);
        await say_by_passer_by_and_wait('观众A', [
          '嗯，我也这么认为……我相信 ',
          brian.get_colored_name(),
          ' 下次会获胜。',
        ]);
        await maya.say_and_wait('哈啊……呼……！呼……哈啊……！');
        await amazon.say_and_wait([
          '我、我说啊，',
          sys_get_colored_callname(12, 24),
          '，你还好吧？你的脸色看起来不太舒服……',
        ]);
        era.printButton('「……摩耶重炮！」', 1);
        await era.input();
        await amazon.say_and_wait([
          '太好了，',
          maya.sex,
          '的体力好像用光了，最好快点让',
          maya.sex,
          '休息……',
        ]);
        await maya.say_and_wait('……我没事。更重要的是……！');
        await maya.say_and_wait('人家跑得很开心！！');
        await amazon.say_and_wait('──啥！？');
        await brian.say_and_wait('……');
        era.drawLine();
        await say_by_passer_by_and_wait(
          '工作人员',
          '呃，那么，接着下一个问题。想提问的人请举手──',
        );
        await maya.say_and_wait('……我！我有问题！！');
        await say_by_passer_by_and_wait('工作人员', [
          '好的，那就请这位……',
          maya.get_colored_name(),
          ' 选手！？',
        ]);
        await era.printAndWait('（人声吵杂……）');
        await maya.say_and_wait([
          '请问，',
          sys_get_colored_callname(24, 16),
          '！你接着会参加哪场比赛！？',
        ]);
        await maya.say_and_wait([
          '我想再和 ',
          sys_get_colored_callname(24, 16),
          ' 跑一次！',
        ]);
        await maya.say_and_wait(
          '抵达终点之前，我都不知道结果会如何，还有我该怎么做，这让我非常紧张……',
        );
        await maya.say_and_wait('而且兴奋到不行！');
        await say_by_passer_by_and_wait('工作人员', [
          '那、那个……',
          maya.get_colored_name(),
          ' 选手。不好意思，目前是开放给记者提问……',
        ]);
        await maya.say_and_wait('不要！就快问完了，等我一下！');
        await maya.say_and_wait('欸欸，我们再比一次嘛！人家会再次赢过你的！');
        await maya.say_and_wait([
          '拜托，拜托啦！',
          sys_get_colored_callname(24, 16),
          ' 也还不满足吧！？',
        ]);
        await brian.say_and_wait('……哼。');
        await say_by_passer_by_and_wait('记者A', [
          '你、你啊！给我适可而止！',
          brian.get_colored_name(),
          ' 选手也──',
        ]);
        await brian.say_and_wait([
          '……『',
          race_infos[race_enum.hans_dai].get_colored_name(),
          '』。',
        ]);
        await maya.say_and_wait('！');
        await brian.say_and_wait('我回答你的问题了。主持人，请换下一位。');
        await say_by_passer_by_and_wait(
          '工作人员',
          '咦，啊……好的！那么请下一位──',
        );
        await amazon.say_and_wait([
          '哦～',
          sys_get_colored_callname(12, 24),
          ' 把事情搞得很有趣呢。',
        ]);
        await amazon.say_and_wait([
          '居然自己跳入火坑啊。是因为',
          maya.sex,
          '是初生之犊吗，或者是──',
        ]);
      } else {
        await print_event_name('补充燃料', maya);
        await say_by_passer_by_and_wait('实况', [
          '──精彩！太精彩了！给今年『',
          race_infos[race_enum.arim_kin].get_colored_name(),
          '』的王者献上掌声！！',
        ]);
        await era.printAndWait('（哇啊啊啊────────！！）');
        await say_by_passer_by_and_wait('观众A', [
          '说真的，没想到 ',
          maya.get_colored_name(),
          ' 这么厉害。一瞬间还以为',
          maya.sex,
          '会赢过',
          brian.get_colored_name(),
          '。',
        ]);
        await say_by_passer_by_and_wait(
          '观众B',
          '呵呵，会这么认为就表示你的眼光还要再练练。这就是『实力差距』。',
        );
        await say_by_passer_by_and_wait('观众B', [
          '不过，',
          maya.sex,
          '是真的很有实力。如果在一年后的 ',
          race_infos[race_enum.arim_kin].get_colored_name(),
          ' 上……说不定有机会。',
        ]);
        await maya.say_and_wait('哈啊……呼……！呼……哈啊……！');
        await amazon.say_and_wait([
          '我、我说啊，',
          sys_get_colored_callname(12, 24),
          '，你还好吧？你的脸色看起来不太舒服……',
        ]);
        era.printButton('「……摩耶重炮！」', 1);
        await era.input();
        await amazon.say_and_wait([
          '太好了，',
          maya.sex,
          '的体力好像用光了，最好快点让',
          maya.sex,
          '休息……',
        ]);
        await maya.say_and_wait('……我没事。更重要的是……！');
        await maya.say_and_wait('人家跑得很开心！！');
        await amazon.say_and_wait('──啊！？');
        await brian.say_and_wait('……');
        era.drawLine();
        await say_by_passer_by_and_wait(
          '工作人员',
          '呃，那么，接着下一个问题。想提问的人请举手──',
        );
        await maya.say_and_wait('……我！我有问题！！');
        await say_by_passer_by_and_wait('工作人员', [
          '好的，那就请这位……',
          maya.get_colored_name(),
          ' 选手！？',
        ]);
        await era.printAndWait('（人声吵杂……）');
        await maya.say_and_wait([
          '请问，',
          sys_get_colored_callname(24, 16),
          '！你接着会参加哪场比赛！？',
        ]);
        await maya.say_and_wait([
          '我想再和 ',
          sys_get_colored_callname(24, 16),
          ' 跑一次！',
        ]);
        await maya.say_and_wait(
          '抵达终点之前，我都不知道结果会如何，还有我该怎么做，这让我非常紧张……',
        );
        await maya.say_and_wait('而且兴奋到不行！');
        await brian.say_and_wait('──哼。主持人，换下个问题……');
        await maya.say_and_wait('啊，等等啦！太狡猾了！不要逃跑！！');
        await brian.say_and_wait('……哦？');
        await brian.say_and_wait('你刚才说什么？是说我要逃离你？');
        await maya.say_and_wait('嗯，没错！因为你打算逃离人家的挑战！');
        await maya.say_and_wait('你明明那么地强，又那么地耀眼！');
        await maya.say_and_wait(
          '根本就是害怕下次再对上我的话，自己有可能会输不是吗？',
        );
        await say_by_passer_by_and_wait('记者A', [
          '那、那个……',
          maya.get_colored_name(),
          ' 选手？你这次才刚输给',
          maya.sex,
          '──',
        ]);
        await maya.say_and_wait('但是我下次会赢！');
        await maya.say_and_wait(
          '人家好不容易感觉能闪闪发亮了，我才不会就此满足！！',
        );
        await brian.say_and_wait('……');
        await say_by_passer_by_and_wait(
          '记者B',
          '我、我说啊……下次也太难了，你们的实力差距很明显──',
        );
        await brian.say_and_wait([
          '……『',
          race_infos[race_enum.hans_dai].get_colored_name(),
          '』。',
        ]);
        await maya.say_and_wait('！');
        await brian.say_and_wait('我回答你的问题了。主持人，请换下一位。');
        await say_by_passer_by_and_wait(
          '工作人员',
          '咦，啊……好的！那么请下一位──',
        );
        await amazon.say_and_wait([
          '哦～',
          sys_get_colored_callname(12, 24),
          ' 把事情搞得很有趣呢。',
        ]);
        await amazon.say_and_wait([
          '居然这么鲁莽地提出挑战。是因为',
          maya.sex,
          '是初生之犊吗，或者是──',
        ]);
      }
      era.printButton('「因为' + maya.sex + '很有胆量」', 1);
      await era.input();
      await amazon.say_and_wait(['哈哈。你对', maya.sex, '评价很高呢。']);
      await amazon.say_and_wait('不错。我会记住你们两位的。');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────！！']);
      await maya.say_and_wait([
        '听我说听我说，人家啊！接下来想参加『',
        race_infos[race_enum.hans_dai].get_colored_name(),
        '』！',
      ]);
      era.printButton('「我就知道」', 1);
      await era.input();
      await maya.say_and_wait(
        '咦，你怎么会知道？心电感应！？还是我们之间有命运的红线！？',
      );
      era.printButton('「因为你很兴奋」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait([
        '嘿嘿。连这种事情都知道，真不愧是 ',
        callname,
        '。',
      ]);
      await maya.say_and_wait([
        '好，我要在『',
        race_infos[race_enum.hans_dai].get_colored_name(),
        '』上完全赢过 ',
        sys_get_colored_callname(24, 16),
        ' 哦☆',
      ]);
      await maya.say_and_wait(
        '既然要冲入乱流，就要堂堂正正从正面突破！这就是人家的飞行方式！',
      );
    } else {
      if (extra_flag.rank !== 1) {
        return true;
      }
      await print_event_name('最后进场', maya);
      const luna = get_chara_talk(17);
      await say_by_passer_by_and_wait('观众们', [
        { color: maya.color, content: '重、炮！重、炮！重、炮！重、炮！' },
      ]);
      await maya.say_and_wait('…………赢了。');
      await maya.say_and_wait([
        '……我赢了。我赢过 ',
        sys_get_colored_callname(24, 16),
        ' 了。',
      ]);
      await maya.say_and_wait([callname, '！我……我……！']);
      era.printButton(`「${sys_get_callname(0, 24)}，你太厉害了」`, 1);
      await era.input();
      await maya.say_and_wait('嗯……嗯……！');
      await maya.say_and_wait('人家很厉害吧？很耀眼吧？');
      era.printButton('「你一直都是最耀眼的」', 1);
      await era.input();
      await maya.say_and_wait(['哇～～～～！！', callname, '～！！']);
      era.drawLine();
      await brian.say_and_wait('……哈……哈哈，我居然还在喘。');
      await brian.say_and_wait(
        '我彻底输了。拿出全力……却输了。但是……感觉不差。',
      );
      await brian.say_and_wait('哼，这就是──');
      await luna.say_and_wait(['──', sys_get_colored_callname(24, 16), '！']);
      await luna.say_and_wait('……这样真的好吗？');
      await brian.say_and_wait('……嗯，对了。还剩下那个啊。');
      await brian.say_and_wait('──我的『引退典礼』。');
      await luna.say_and_wait('坚定不移……你的心意都没变吗？');
      await luna.say_and_wait(
        '……记者们已经聚集在一起了。这是你的典礼，至少让我办得盛大一点。',
      );
      await brian.say_and_wait('……感谢你。');
      await say_by_passer_by_and_wait('工作人员', [
        '……',
        brian.get_colored_name(),
        ' 选手，典礼预计在五分钟后开始。',
      ]);
      await brian.say_and_wait('嗯……知道了。');
      await brian.say_and_wait(
        '──幸好我停下脚步的时候是站在赛场上。站在这片草地，而非学园。',
      );
      await say_by_passer_by_and_wait('观众A', [
        '骗人的吧！？',
        brian.get_colored_name(),
        '！让我见识更多传说啊！！',
      ]);
      await say_by_passer_by_and_wait('观众B', '求求你，不要引退！');
      await brian.say_and_wait('唉……在难过什么。你们还会再见识到下个梦想吧。');
      await brian.say_and_wait('──就在那女孩身上。');
      await say_by_passer_by_and_wait('主持人', [
        '那么，',
        brian.get_colored_name(),
        ' 的引退典礼即将开始──',
      ]);
      await maya.say_and_wait('慢着──！');
      await maya.say_and_wait([
        '人家才不同意！',
        sys_get_colored_callname(24, 16),
        ' 的引退典礼要中止！！',
      ]);
      await say_by_passer_by_and_wait('主持人', '咦！？可、可是……');
      await maya.say_and_wait('没什么可是不可是！人家讨厌这样！所以不行！');
      await brian.say_and_wait('……喂。');
      await brian.say_and_wait(
        '突然就跑出来，也太任性了吧。你可是今天的赢家啊。',
      );
      await brian.say_and_wait(
        '想一下你的影响力吧。小朋友要胡闹就去别的地方──',
      );
      await maya.say_and_wait('人家本来就是小朋友啊！！');
      await maya.say_and_wait([
        '因为我之后要和 ',
        sys_get_colored_callname(24, 16),
        ' 比很多场比赛，成为成熟的赛',
        maya.uma_sex_title,
        '！',
      ]);
      await maya.say_and_wait(
        '所以我讲这些话没有关系！也可以耍任性！因为我还是小朋友！',
      );
      await maya.say_and_wait([
        '人家还没跟 ',
        sys_get_colored_callname(24, 16),
        ' 跑个够！跟我约定下场比赛啦！',
      ]);
      await brian.say_and_wait('什……什么！？');
      await brian.say_and_wait('你这么说太牵强了！真是的，今天是我的──');
      await maya.say_and_wait('才不是你的引退典礼！！');
      await brian.say_and_wait('喂！！');
      await say_by_passer_by_and_wait('观众C', '噗……哈哈！');
      await say_by_passer_by_and_wait('观众D', [
        '没错，没错！',
        brian.get_colored_name(),
        '，别引退啊！和冠军比赛！',
      ]);
      await say_by_passer_by_and_wait('观众E', [
        '人家向你宣战却逃避，',
        brian.get_colored_name(),
        ' 才不会这样吧！',
      ]);
      await brian.say_and_wait('喂，怎么连你们都在起哄……');
      await maya.say_and_wait([
        '啊哈哈，大家都很了解 ',
        sys_get_colored_callname(24, 16),
        ' 嘛！',
      ]);
      await maya.say_and_wait([
        '不过人家懂得更多哦。就是啊，今天的 ',
        sys_get_colored_callname(24, 16),
        '──',
      ]);
      await maya.say_and_wait(
        '──很想再跟人家赛跑对吧？想让心情再变得更兴奋对吧？',
      );
      await brian.say_and_wait('……！');
      await maya.say_and_wait([
        '呵呵。所以人家会实现 ',
        sys_get_colored_callname(24, 16),
        ' 的心愿！',
      ]);
      await maya.say_and_wait(
        '因为只要不断地跟闪闪发亮的人比赛，人家就能变成更耀眼的大人！',
      );
      await brian.say_and_wait('……这是怎样。');
      await brian.say_and_wait('你为了满足你的任性，叫我要继续跑下去吗。');
      await maya.say_and_wait('嗯！');
      await brian.say_and_wait('……受不了。真是前途堪忧的孩子。');
      await maya.say_and_wait('我很快就会成为大人了☆');
      await brian.say_and_wait('我不是那个意思……');
      await luna.say_and_wait([
        '呵呵……你就认输吧，',
        sys_get_colored_callname(17, 16),
        '。',
      ]);
      await luna.say_and_wait('在场的任何人都不希望你引退。');
      await luna.say_and_wait('──你自己也是。');
      await luna.say_and_wait('现在还来得及改成别的典礼。');
      await maya.say_and_wait('对，那么！就改成我的宣战典礼！');
      await brian.say_and_wait('喂！？改成那样，典礼的主角就变成你了──');
      await maya.say_and_wait('哼，又没关系！对不对，会长！');
      await luna.say_and_wait(
        '嗯，可以。改成更能炒热气氛的典礼，记者们也会接受吧。',
      );
      await maya.say_and_wait('收到☆');
      await brian.say_and_wait('……真的是小朋友。');
      await maya.say_and_wait(
        '啊哈哈☆正因为这样，才让人期待我长大后的样子吧？很兴奋吧？',
      );
      await brian.say_and_wait('……是啊。');
      await brian.say_and_wait('期待到让人很不甘心。');
    }
  };
};
