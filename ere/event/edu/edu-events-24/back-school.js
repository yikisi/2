const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const MayaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-24');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} handlers */
module.exports = (handlers) => {
  handlers.dokidoki_live = async (maya, me, callname, flags) => {
    new MayaEduMarks().dokidoki_live++;
    await print_event_name('摩耶重炮的心跳不已☆直播！', maya);
    const sunday = get_chara_talk(55);
    await era.printAndWait([
      '和 ',
      me.get_colored_name(),
      ' 一起出门后的归途上──',
    ]);
    await maya.say_and_wait(['欸欸！', callname, '，你会看网络直播吗？']);
    era.printButton('「怎么突然问这个？」', 1);
    await era.input();
    await maya.say_and_wait('跟你说，人家也开始直播咯！');
    await maya.say_and_wait([
      '我会跳现在流行的曲子～或是和 ',
      sys_get_colored_callname(24, 3),
      ' 一起玩游戏～',
    ]);
    await maya.say_and_wait('会做一堆开心的事！');
    await maya.say_and_wait([callname, ' 也看一下嘛！好不好？好不好？']);
    era.printButton('「我知道了」', 1);
    await era.input();
    await era.printAndWait([
      '在 ',
      maya.get_colored_name(),
      ' 的热情要求下，',
      me.get_colored_name(),
      ' 约好会看',
      maya.sex,
      '下次的直播。',
    ]);
    era.drawLine({ content: '几天后' });
    await era.printAndWait([
      me.get_colored_name(),
      ' 打开 ',
      maya.get_colored_name(),
      ' 的直播频道──',
    ]);
    await maya.say_and_wait('在大家的心中着陆☆Maya频道要开始咯～♪');
    await maya.say_and_wait([
      '今天的来宾是我的朋友，',
      sys_get_colored_callname(24, 55),
      '！',
    ]);
    await sunday.say_and_wait('哈喽☆大家过得美丽吗？');
    await say_by_passer_by_and_wait('观众A', 'Maya，等你好久了～！！');
    await say_by_passer_by_and_wait('观众B', '虽然不太懂，不过很Marvelous☆');
    await maya.say_and_wait('谢谢大家留言～！人家也等大家很久了♪');
    await sunday.say_and_wait('今天我们两个会突击美丽的地方☆');
    await maya.say_and_wait('要上咯～！用咖啡杯来玩极速旋转大挑战！');
    await sunday.say_and_wait('啊哈哈哈哈～☆转来转去的，真美丽★');
    await maya.say_and_wait([
      '下一个是游戏厅！我要超过 ',
      sys_get_colored_callname(24, 3),
      ' 的分数！',
    ]);
    await sunday.say_and_wait('耶☆超级高分，真美丽★');
    await era.printAndWait(
      '之后两个人四处跑到许多景点去，借由精力充沛地玩耍而带给了观众欢笑。',
    );
    await era.printAndWait('宛如太阳一般的开朗，吸引大家的个人魅力──');
    await era.printAndWait([
      '看了直播，',
      me.get_colored_name(),
      ' 好像再次认识到 ',
      maya.get_colored_name(),
      ' 的魅力了。',
    ]);
    await maya.say_and_wait('啊，差不多该说再见了。大家看得还开心吗？');
    await era.printAndWait([
      '听到 ',
      maya.get_colored_name(),
      ' 抛出的问题，当 ',
      me.get_colored_name(),
      ' 回过神时就已经送出留言了。',
    ]);
    era.printButton('「我也看得很开心！」（耐力&力量+10）', 1);
    era.printButton('「我会一直支持你的。比赛加油！」（根性+20）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait('嘿嘿，谢谢！');
      await maya.say_and_wait(
        '我成功将兴奋和心动的心情，传给画面另一头的你了呢♪',
      );
      await maya.say_and_wait('收到大家的留言，让人家也非常非常开心哦☆');
      await era.printAndWait([
        '笑着说出这句话的 ',
        maya.get_colored_name(),
        ' 非常地闪闪动人。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 下定了决心──为了在以后也能看见这个笑容，',
        me.get_colored_name(),
        ' 要继续当',
        maya.sex,
        '的助力。',
      ]);
    } else {
      await maya.say_and_wait([
        '当然了！人家才不是光长得可爱的',
        maya.get_phy_sex_title(),
        '♪',
      ]);
      await maya.say_and_wait([
        '我会在比赛中让你见识到，成熟的',
        maya.get_phy_sex_title(),
        '是有各种面貌的！',
      ]);
      await maya.say_and_wait('所、以、说☆不管是比赛还是直播，都要帮我加油哦♪');
      await era.printAndWait([
        me.get_colored_name(),
        ' 十分清楚 ',
        maya.get_colored_name(),
        ' 作为竞技选手的魅力。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 希望只透过直播认识',
        maya.sex,
        '的观众，也能看看',
        maya.sex,
        '在赛场上发光发热的样子。',
      ]);
    }
    era.drawLine();
    await maya.say_and_wait(['哇～！', callname, '，你有看昨天的直播吗？']);
    era.printButton('「我还有留言呢」', 1);
    await era.input();
    await maya.say_and_wait('咦～！？难道是这个人吗～！？');
    await era.printAndWait([
      maya.get_colored_name(),
      ' 指着的留言确实就是 ',
      me.get_colored_name(),
      ' 留的。',
    ]);
    await maya.say_and_wait('欸欸，人家有猜对吗？');
    era.printButton('「好厉害！你竟然知道呢」', 1);
    await era.input();
    await maya.say_and_wait([
      '这留言就像 ',
      callname,
      ' 在旁边的时候一样，看了心情就变得平静温暖起来！',
    ]);
    await maya.say_and_wait('话说，我们一直都在一起，你明明可以直接告诉我～♪');
    await era.printAndWait([
      '话是这么说，',
      maya.get_colored_name(),
      ' 还是露出了开心的表情。',
    ]);
    if (ret === 1) {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 10, 10], 0);
    } else {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers.excited_live = async (maya, me, callname, flags) => {
    new MayaEduMarks().excited_live++;
    await print_event_name('摩耶重炮的兴高采烈☆直播！', maya);
    await era.printAndWait([
      '和 ',
      maya.get_colored_name(),
      ' 出门后，在一起回去的路上──',
    ]);
    await maya.say_and_wait([
      '对了，',
      callname,
      '！之前不是有聊到网络直播吗？',
    ]);
    await maya.say_and_wait('在那之后观众就越来越多，人家的频道现在人气超高♪');
    await era.printAndWait('用手机看了一下直播的存档，确实──');
    await say_by_passer_by_and_wait('观众A', 'Maya一直都好可爱！');
    await say_by_passer_by_and_wait('观众B', '我最爱Maya了☆');
    await era.printAndWait('看见很多热情的留言。');
    await maya.say_and_wait('对吧？人家的人气扶摇直上☆');
    await maya.say_and_wait(
      '然后呢然后呢！人家想要在下次的直播中让大家看看不同以往的我！',
    );
    await maya.say_and_wait([
      '……不过，要做什么好呢～？',
      callname,
      '，你有什么好点子吗？',
    ]);
    era.printButton('「给大家看你练习时的样子如何？」', 1);
    await era.input();
    await maya.say_and_wait(['就是这个！', callname, ' 脑筋果然动很快！']);
    await maya.say_and_wait('只要看见人家认真的样子，大家一定会更喜欢我吧！');
    await maya.say_and_wait([
      '所、以、说☆可以拜托提出点子的 ',
      callname,
      ' 拍摄吗～？',
    ]);
    await maya.say_and_wait(
      '如果直播获得很多人气，我在赛场上的表现也会受到关注哦～',
    );

    era.printButton('「我知道了。就拍你唱歌的样子吧！」（速度+20）', 1);
    era.printButton('「我知道了。就拍你奔跑的样子吧！」（根性+20）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait('嗯！立刻朝舞台起飞☆');
      era.drawLine();
      await maya.say_and_wait('在大家的心中着陆☆Maya频道要开始咯～♪');
      await say_by_passer_by_and_wait('观众C', '唔哦哦哦哦哦哦哦！！');
      await say_by_passer_by_and_wait('观众D', 'Maya今天也很有精神呢～☆');
      await say_by_passer_by_and_wait('观众E', '这里是哪里～？');
      await maya.say_and_wait('嘿嘿♪谢谢大家留言！');
      await maya.say_and_wait('今天呢，要让大家看我练习演唱会的样子！');
      await maya.say_and_wait([
        '帮忙拍摄的可是那位！人家安心信赖的伙伴，',
        callname,
        '！',
      ]);
      await maya.say_and_wait([me.sex, '会帮人家训练，还会称赞人家哦♪']);
      await say_by_passer_by_and_wait('观众F', '好期待演唱会～');
      await say_by_passer_by_and_wait('观众G', '我也想当训练员！！');
      await say_by_passer_by_and_wait('观众H', '超羡慕的。');
      await maya.say_and_wait(
        '哎哟，大家真是的～♪那么，Maya的演唱会要开始了！',
      );
      await maya.say_and_wait('一、二☆闪、耀☆重、重☆性、感☆');
      await maya.say_and_wait('最后是可爱地收尾！');
      await say_by_passer_by_and_wait('观众I', '太～可～爱～了～！！');
      await say_by_passer_by_and_wait('观众J', '歌曲和舞蹈都超棒！');
      await maya.say_and_wait('的确是很……不错吧♪');
      await maya.say_and_wait(
        '要是人家在比赛中获胜的话，就让大家在胜者舞台上看Maya本人☆',
      );
      await maya.say_and_wait('所以大家要帮我加油哦！');
    } else {
      await maya.say_and_wait('嗯！立刻朝操场起飞☆');
      era.drawLine();
      await maya.say_and_wait('在大家的心中着陆☆Maya频道要开始咯～♪');
      await say_by_passer_by_and_wait('观众C', '呀呼呜呜呜！！');
      await say_by_passer_by_and_wait('观众D', '接受着陆☆');
      await say_by_passer_by_and_wait('观众E', '居然是运动服！？');
      await maya.say_and_wait('嘿嘿～♪谢谢大家留言！');
      await maya.say_and_wait('今天呢，要让大家看人家训练的样子！');
      await maya.say_and_wait([
        '帮忙拍摄的可是那位！人家安心信赖的伙伴，',
        callname,
        '！',
      ]);
      await maya.say_and_wait([me.sex, '会帮人家训练，还会称赞人家哦♪']);
      await say_by_passer_by_and_wait('观众F', '训练加油～');
      await say_by_passer_by_and_wait('观众G', '我也是Maya的伙伴！');
      await say_by_passer_by_and_wait('观众H', '训练员跟我交换。？');
      await maya.say_and_wait('哎哟，大家真是的～♪那么，要开始训练了！');
      await maya.say_and_wait('呼……呼……！');
      await maya.say_and_wait('抵达终点！大家，人家跑得如何？');
      await say_by_passer_by_and_wait('观众I', '超级快！');
      await say_by_passer_by_and_wait('观众J', '实在是帅！');
      await maya.say_and_wait('的确是很……不错吧♪');
      await maya.say_and_wait(
        '既然这样，今天就尽情让你们见识人家帅气的一面吧！',
      );
      await maya.say_and_wait('大家不能眨眼哦♪');
      await era.printAndWait([
        '因为本人也充满干劲，所以 ',
        me.get_colored_name(),
        ' 就把握机会让',
        maya.sex,
        '进行比平常还多的训练。',
      ]);
    }
    era.drawLine({ content: '隔天' });
    await maya.say_and_wait('哇～！观众又增加了♪');
    await maya.say_and_wait('留言数也是目前为止最多的一次！');
    era.printButton(`「太好了，${sys_get_callname(0, 24)}！」`, 1);
    await era.input();
    await maya.say_and_wait(['嗯♪', callname, ' 也笑咪咪的，所以人家也开心♪']);
    await maya.say_and_wait('好！就这样变得更受欢迎！');
    await era.printAndWait([
      '人气不断上升的 ',
      maya.get_colored_name(),
      ' 越来越投入在直播上了。',
    ]);
    if (ret === 1) {
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    } else {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers.taisecu_hito = async (maya, me, callname, flags) => {
    await print_event_name('摩耶重炮的重要之人！', maya);
    const fuji = get_chara_talk(5);
    await era.printAndWait([
      me.get_colored_name(),
      ' 把一起出门的 ',
      maya.get_colored_name(),
      ' 送回了宿舍前面。',
    ]);
    await maya.say_and_wait([
      '嘿嘿！今天也玩得超开心！和 ',
      callname,
      ' 的……约、会♪',
    ]);
    era.printButton('「玩得开心就好」', 1);
    await era.input();
    await maya.say_and_wait(
      '对了！来人家的房间吧～！像连续剧里演的那样先一起喝个茶──',
    );
    await fuji.say_and_wait('哎呀呀，我身为宿舍长可不能视而不见啊。');
    await maya.say_and_wait('啊！被爸爸发现了～');
    era.printButton('「爸爸……？」', 1);
    await era.input();
    await maya.say_and_wait(
      '就是那个啊！连续剧不是很常会有在家门口撞见爸爸的场面吗？',
    );
    await fuji.say_and_wait('哈哈哈，爸爸啊～宿舍长确实也能算是养父母呢。');
    await maya.say_and_wait('那么……爸爸，介绍给你认识！这个人是我重要的人☆');
    await fuji.say_and_wait([
      '什么？我',
      era.get('cflag:24:性别') === 1 ? '儿子' : '女儿',
      '重要的人吗～？是真的吗？',
    ]);
    era.printButton('「这个嘛……」（速度+20）', 1);
    era.printButton('「……其实我有其他重要的人」（根性+20）', 2);
    if ((await era.input()) === 1) {
      await maya.say_and_wait(['呀☆', callname, ' 竟然在害羞！好可爱！']);
      await fuji.say_and_wait('呵呵，玩笑就开到这吧。你们的感情真的很好呢。');
      await fuji.say_and_wait([
        sys_get_colored_callname(5, 24),
        ' 会这么有活力，也是这个缘故吗？',
      ]);
      await maya.say_and_wait('嘿嘿！因为我们可是互许将来了～♪');
      era.printButton('应该说是签约呢」', 1);
      await era.input();
      await maya.say_and_wait([
        '哼～！',
        callname,
        ' 真是的，这时候应该要说『嗯』……才对吧？',
      ]);
      await fuji.say_and_wait([
        '哈哈哈，原来如此。',
        sys_get_colored_callname(5, 24),
        ' 说的确实没错。',
      ]);
      await fuji.say_and_wait([
        '之后 ',
        sys_get_colored_callname(5, 24),
        ' 也要请你多多关照了。',
      ]);
      await fuji.say_and_wait('……开玩笑的。这样很像真的父亲吧？呵呵。');
      await fuji.say_and_wait([
        '那么我就先离开了。快到晚餐时间了，',
        sys_get_colored_callname(5, 24),
        ' 也一起来吧。',
      ]);
      await maya.say_and_wait('好！……啊，在走之前。');
      await maya.say_and_wait([
        callname,
        '，你被称赞了呢！这样正式见面的时候也没问题了☆',
      ]);
      era.printButton('「正式见面……？」', 1);
      await era.input();
      await maya.say_and_wait('那我先走了！明天见～♪');
      await era.printAndWait([
        '……总而言之，想到之后也要和 ',
        maya.get_colored_name(),
        ' 一起加油，',
        me.get_colored_name(),
        ' 鼓足了干劲。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(24, [20], 0);
    } else {
      await maya.say_and_wait('咦咦咦咦～～～！？');
      await maya.say_and_wait(
        '这是什么意思！？人家怎么不知道！到底是怎么一回事──！？',
      );
      await fuji.say_and_wait('原来是这样啊。看来你也真是会玩啊～？');
      await maya.say_and_wait('骗、骗人……你跟人家只是玩玩的……！？');
      era.printButton('「我开玩笑的」', 1);
      await era.input();
      await maya.say_and_wait('……咦？开玩笑？');
      await fuji.say_and_wait('哈哈哈哈！是啊。捉弄就到此为止吧。');
      await maya.say_and_wait('咦！？你们两个刚才都在捉弄人家！？');
      await maya.say_and_wait('哼！过分，太过分了！人家刚才是真的很难过～！');
      era.printButton('「抱歉抱歉」', 1);
      await era.input();
      await maya.say_and_wait('哼──！不管你说什么，人家都不会原谅你！');
      await fuji.say_and_wait([
        '哎呀呀，',
        maya.sex,
        '真的很喜欢你呢。我也不忍心你们因为这样而感情变差……',
      ]);
      await fuji.say_and_wait([
        '对了！',
        sys_get_colored_callname(5, 24),
        '，你知道食堂正在举办蛋糕嘉年华吗？',
      ]);
      await maya.say_and_wait('……知道啊？人家是很想去，但是抢不到票……');
      await fuji.say_and_wait(
        '我刚好房间里有多两张票。怎么样？要不要两个人去喝杯象征和好的茶。',
      );
      await maya.say_and_wait([
        '哇～～！！我要我要！人家想和 ',
        callname,
        ' 去！',
      ]);
      await fuji.say_and_wait(
        '那真是太好了。票就放在进门后最近的桌子上，你去拿吧。',
      );
      await maya.say_and_wait('好♪');
      await fuji.say_and_wait('呼……好，总算是搞定了。');
      era.printButton('「谢谢你……」', 1);
      await era.input();
      await fuji.say_and_wait('别这么说，我才是。其实我一直很想向你道谢。');
      await fuji.say_and_wait([
        '毕竟 ',
        sys_get_colored_callname(5, 24),
        ' ',
        maya.sex,
        '好奇心很旺盛嘛……所以在很多方面都让人担心。',
      ]);
      await maya.say_and_wait([callname, '！快点快点～！不然餐厅就要关了！']);
      await fuji.say_and_wait('呵呵。一定要玩得开心哦。');
      await era.printAndWait('之后两个人一起喝茶……并顺利地和好了。');
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 0, 20], 0);
    }
  };

  handlers.race_lesson = async (maya, me, callname, flags) => {
    await print_event_name('Maya的比赛讲座☆', maya);
    const urara = get_chara_talk(52);
    await era.printAndWait([
      '和 ',
      maya.get_colored_name(),
      ' 一起看完模拟赛后，回去的路上──',
    ]);
    await urara.say_and_wait([
      '啊，是 ',
      sys_get_colored_callname(52, 24),
      ' 和 ',
      sys_get_callname(52, 0),
      '～！你们难道是来帮我加油的吗！？',
    ]);
    await maya.say_and_wait([
      '嗯！',
      sys_get_colored_callname(24, 52),
      ' 很努力呢～☆',
    ]);
    await urara.say_and_wait('嘿嘿，谢谢～！');
    await urara.say_and_wait(
      '今天也跑得非常开心哦！虽然是最后一名，但我跑得很满足♪',
    );
    await maya.say_and_wait([
      '是吗～',
      sys_get_colored_callname(24, 52),
      ' 真厉害～！人家只要输了就会闹别扭☆',
    ]);
    await urara.say_and_wait('我一直都很开心哦！因为我最喜欢跑步了！');
    await urara.say_and_wait([
      '不过……要赢还真难！',
      sys_get_colored_callname(52, 24),
      ' 是怎么赢得比赛的？',
    ]);
    await maya.say_and_wait('我吗？');
    await urara.say_and_wait('嗯！你不是一直都跑得很快吗～？');
    await urara.say_and_wait([
      '乌拉拉要是也能像 ',
      sys_get_colored_callname(52, 24),
      ' 一样的话，说不定就能赢了！',
    ]);
    era.printButton('「要不要一起练习？」', 1);
    await era.input();
    await maya.say_and_wait('好主意☆');
    await maya.say_and_wait([
      sys_get_colored_callname(24, 52),
      '，我们一起练习，下次一定要获胜！！',
    ]);
    await maya.say_and_wait([
      '人家和 ',
      callname,
      ' 的比赛讲座～☆学生是 ',
      sys_get_colored_callname(24, 52),
      ' 同学♪',
    ]);
    await urara.say_and_wait('有！我是乌拉拉！');
    await maya.say_and_wait([
      '那就立刻开始吧～！首先是向 ',
      callname,
      ' 发问哦☆',
    ]);
    await maya.say_and_wait([
      sys_get_colored_callname(24, 52),
      ' 现在需要的是什么！？',
    ]);
    era.println();
    era.printButton('「增强体力避免筋疲力尽！」（耐力+20）', 1);
    era.printButton('「掌握超越对手的诀窍！」（力量+20）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait(['叮咚叮咚☆', callname, ' 果然厉害♪']);
      await maya.say_and_wait([
        '……嗯哼！那个，',
        sys_get_colored_callname(24, 52),
        ' 同学！',
      ]);
      await maya.say_and_wait(
        '讲白了☆之前比赛的时候，你跑到一半就没力了吧！？',
      );
      await urara.say_and_wait('嗯！虽然跑得很开心，但快累瘫了～');
      await maya.say_and_wait('如果有更多体力，就能更轻松地跑完了吧～☆');
      await urara.say_and_wait([
        '对耶！',
        sys_get_colored_callname(52, 24),
        ' 真聪明～♪',
      ]);
      await maya.say_and_wait('噗噗！人家今天是老师，要叫我『摩耶重炮老师』！');
      await urara.say_and_wait(['是的，', maya.get_colored_name(), ' 老师！']);
      await era.printAndWait([
        '就这样，在 ',
        maya.get_colored_name(),
        ' 的指导下，',
        urara.get_colored_name(),
        ' 进行了训练──',
      ]);
    } else {
      await maya.say_and_wait(
        '呀～☆这就是所谓的心有灵犀！？人家也在想同样的事情～♪',
      );
      await maya.say_and_wait([
        sys_get_colored_callname(24, 52),
        '，我问你，你平常都是怎么跑的？',
      ]);
      await urara.say_and_wait('平常？我都是拿出全力在跑哦！');
      await maya.say_and_wait('嗯，这样啊……那么，有什么让你伤脑筋的事情吗？');
      await urara.say_and_wait(
        '嗯～我很难取得领先呢～感觉要撞到别人的时候我就会变得很慌张！',
      );
      await maya.say_and_wait('哦哦，原来如此～！');
      await maya.say_and_wait('那么，下场比赛就盯着前面跑吧！');
      await maya.say_and_wait('只要紧盯着前面，就会遇到前面都没人的时候──');
      await maya.say_and_wait('等到那时候，就直直地往前冲☆');
      await urara.say_and_wait('我知道了！我会试试看的♪');
    }
    era.drawLine({ content: '第二天' });
    await urara.say_and_wait('听我说，听我说！我超过一个人了！');
    await maya.say_and_wait('哇，太棒了～！超过一个人──');
    await maya.say_and_wait('一个人！？');
    await urara.say_and_wait(
      '嘿嘿～！就这样分别超过每一个人，最后要拿下第一名～♪',
    );
    await maya.say_and_wait(
      '只要不断超越别人，总有一天会是第一名！一定要拿下第一名～！！',
    );
    await urara.say_and_wait('哦～！！');
    await era.printAndWait([
      '给 ',
      urara.get_colored_name(),
      ' 的指导似乎对 ',
      maya.get_colored_name(),
      ' 带来了正面影响。',
    ]);
    if (ret === 1) {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 20], 0);
    } else {
      flags.wait_flag = get_attr_and_print_in_event(24, [0, 0, 20], 0);
    }
  };
};
