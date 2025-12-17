const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 31] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:32:位置') !== era.get('cflag:0:位置') ||
      (edu_marks.plan_b && era.get('cflag:25:位置') !== era.get('cflag:0:位置'))
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    if (edu_marks.plan_b) {
      const t_call_c = sys_get_colored_callname(32, 25);
      await print_event_name('月光', tachyon);
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'A',
        '速子前辈最近……似乎深夜总在沙滩上跑步的样子',
      );
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'B',
        '虽然不算什么大事，但总觉得速子前辈跑起来好像……很吃力的样子',
      );
      await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'C', [
        '毕竟也受过速子前辈不少帮助……速子前辈',
        tachyon.sex,
        '真的没事吧？',
      ]);
      era.println();
      await era.printAndWait([
        '由于许多',
        tachyon.get_uma_sex_title(),
        '的关心，',
        me.get_colored_name(),
        ' 在深夜离开了训练员宿舍，走向合宿的沙滩',
      ]);
      await era.printAndWait([
        '居然需要靠着其他',
        tachyon.get_uma_sex_title(),
        '的提醒才能发现自家',
        tachyon.get_uma_sex_title(),
        '的不对劲，真是……训练员失格',
      ]);
      await era.printAndWait([
        '不过，感谢',
        tachyon.sex,
        '的帮助吗……虽然说',
        tachyon.sex,
        '只当成了实验，但因',
        tachyon.sex,
        '的药物而受惠的人确实是存在的啊',
      ]);
      await era.printAndWait([
        '也不知是出于何种原因何种情绪，',
        me.get_colored_name(),
        ' 莫名的感到感慨',
      ]);
      era.println();
      await tachyon.say_and_wait('哈啊……哈啊……哈啊……');
      era.println();
      await era.printAndWait([
        '在来到了沙滩的 ',
        me.get_colored_name(),
        ' 眼前的，是合宿期间也在不断与 ',
        me.get_colored_name(),
        ' 一起为了 ',
        get_chara_talk(25).get_colored_name(),
        ' 的跑法改善研究的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '专注于奔跑的',
        tachyon.sex,
        '，在夜色的遮蔽下并没能注意到 ',
        me.get_colored_name(),
        ' 的到来',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 也静静的望着，没有破坏这一刻的寂静',
      ]);
      era.println();
      await era.printAndWait(['沙滩上的', tachyon.sex, '，跑法并不完美']);
      await era.printAndWait([
        '不用说与皋月赏时相比，哪怕是与更久远以前 ',
        tachyon.get_colored_name(),
        ' 的跑法比起来，都显得十分别扭',
      ]);
      await era.printAndWait([
        '除了大概是因为顾虑脚的坚固度而有些不敢放开的姿态，那种跑法也并非是 ',
        tachyon.get_colored_name(),
        ' 平常所擅长的跑法',
      ]);
      await era.printAndWait([
        '可即便如此，月光下',
        tachyon.sex,
        '的身姿却还是吸引着 ',
        me.get_colored_name(),
        ' 的目光，',
      ]);
      await era.printAndWait([
        '无关完美与否，',
        tachyon.get_colored_name(),
        ' 的跑法本身便吸引着 ',
        me.get_colored_name(),
        ' 的注目，如光一般，再微弱的光芒那都是能够使人狂热追逐的光',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 忍不住踏出一步，想要抓住那道光……',
      ]);
      era.println();
      await tachyon.say_and_wait(['谁？……啊，', callname, ' 啊']);
      era.println();
      await era.printAndWait([
        '停下了奔跑的',
        tachyon.sex,
        '，很快便观察到了附近的人影，出言说道',
      ]);
      era.printButton('「这么晚了在做什么？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '没什么，为了 ',
        t_call_c,
        ' 在实验新的跑法而已……',
      ]);
      await tachyon.say_and_wait([
        '你刚刚大概也看到了吧，虽然说我跑起来有些不伦不类，但要是让 ',
        t_call_c,
        ' 的跑法能够往这个方向改善的话……',
      ]);
      era.println();
      await era.printAndWait('想说出口的话，止住了');
      await era.printAndWait([
        '没有错，一切都是为了 ',
        tachyon.get_colored_name(),
        ' 的Plan B',
      ]);
      await era.printAndWait([
        '同时，也是为了让 ',
        get_chara_talk(25).get_colored_name(),
        ' 抵达巅峰的高度',
      ]);
      if (relation <= 225) {
        await era.printAndWait('这是当初已经做好的决定');
        await era.printAndWait('从合理性来说，这也是最理智的选择不是吗？');
        await era.printAndWait('所以');
      } else {
        await era.printAndWait('这是当初已经做好的决定');
        await era.printAndWait([
          '毕竟，',
          me.get_colored_name(),
          ' 不想再看 ',
          tachyon.get_colored_name(),
          ' 受那样的苦了，不是吗？',
        ]);
        await era.printAndWait('所以');
      }
      era.printButton('「……不过，还是要注意休息啊」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '知道了，你也是，这么晚还不睡明天 ',
        t_call_c,
        ' 的训练怎么办？',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 只能说出这种无关痛痒的做作关心，便离开了沙滩',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(32, [10], 0);
    } else {
      await print_event_name('夏日的数据采集', tachyon);
      await tachyon.say_and_wait('哈啊……哈啊……哈啊……');
      era.println();
      await era.printAndWait([
        '合宿期间，',
        me.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 努力进行着对菊花赏的特训，在劳逸结合的训练方式下，训练成果颇有成效',
      ]);
      era.println();
      await tachyon.say_and_wait('数据……怎么样？');

      era.printButton(
        '「已经恢复到改变跑法前的速度了……这样下去，菊花赏绝对没问题！」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '为了最大化降低 ',
        tachyon.get_colored_name(),
        ' 腿部负荷改良的跑法，如今也以至大成，在两人的努力下，菊花赏想必绝对……',
      ]);
      era.println();
      await era.printAndWait([
        '正当 ',
        me.get_colored_name(),
        ' 敞想于 ',
        tachyon.get_colored_name(),
        ' 的未来中时，喘过气来的 ',
        tachyon.get_colored_name(),
        ' 开口了',
      ]);
      era.println();
      await tachyon.say_and_wait('好，我的部分训练结束了，接下来该你了');
      era.println();
      await era.printAndWait('…………该来的还是得来啊');
      await era.printAndWait([
        '所谓的劳逸结合，具体而言其实就是，在 ',
        tachyon.get_colored_name(),
        ' 训练时 ',
        me.get_colored_name(),
        ' 休息，而 ',
        tachyon.get_colored_name(),
        ' 休息时……自然就轮到 ',
        me.get_colored_name(),
        ' 上了',
      ]);
      await era.printAndWait([
        '在 ',
        tachyon.get_colored_name(),
        ' 的药物帮助下，如今的 ',
        me.get_colored_name(),
        ' 在短暂爆发力上可以说已经不输给公开赛等级的',
        tachyon.get_uma_sex_title(),
        '了，',
      ]);
      await era.printAndWait([
        '而测量 ',
        me.get_colored_name(),
        ' 的药物实验数据也是 ',
        tachyon.get_colored_name(),
        ' 合宿期间好好训练的前提之一',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '今天就大发慈悲让你自己选吧，',
        callname,
        '……力量训练和耐力训练，你要选择哪一个呢',
      ]);
      era.println();
      await era.printAndWait('唔……虽然感觉都差不多，但');
      era.printButton('力量训练（力量&根性+10）', 1);
      era.printButton('耐力训练（耐力&力量+10）', 2);
      era.printButton('速度训练（速度&智力+10）', 3);
      switch (await era.input()) {
        case 1:
          await era.printAndWait('如此如此这般这般');
          await era.printAndWait([
            '于是 ',
            me.get_colored_name(),
            ' 拖着比人还高三倍的大轮胎在沙滩上走着',
          ]);
          await era.printAndWait(
            '天知道这种轮胎到底是给什么车用的，横着躺还有人的三倍高度',
          );
          await era.printAndWait([
            '这期间，',
            tachyon.get_colored_name(),
            ' 一直坐在轮胎上为 ',
            me.get_colored_name(),
            ' 加油打气……',
          ]);
          era.println();
          await tachyon.say_and_wait(['走快点啊 ', callname]);
          await tachyon.say_and_wait('怎么慢成这样，速度速度');
          await tachyon.say_and_wait('大不了爆衣变身绿巨人吧');
          era.println();
          await era.printAndWait('加油……打气？');
          era.println();
          await era.printAndWait([
            '在这比起打气，更像是锻炼人耐压性的呼声中，',
            me.get_colored_name(),
            ' 完成了今天的训练',
          ]);
          flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 10, 10, 0]);
          flags.wait_flag = get_attr_and_print_in_event(
            0,
            [0, 0, 10, 10, 0],
            0,
            [-200],
          );
          break;
        case 2:
          era.println();
          await tachyon.say_and_wait('下去吧');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 震惊的看着 ',
            tachyon.get_colored_name(),
            '，但不是因为训练的艰难，而是……',
          ]);
          era.printButton('「……只要下去游泳就好了？」', 1);
          await era.input();
          await tachyon.say_and_wait('嗯哼，按正常圈数游完就好了～～');
          era.println();
          await era.printAndWait([
            '看 ',
            tachyon.get_colored_name(),
            ' 的表情明显有阴谋，但实在想不到……',
          ]);
          await era.printAndWait([
            '不，应该说，能想到',
            tachyon.sex,
            '会做什么的可能性太多了，实在猜不到',
            tachyon.sex,
            '到底用的是什么',
          ]);
          await era.printAndWait([
            '但在这边干等着也没用，于是 ',
            me.get_colored_name(),
            ' 先下了水',
          ]);
          era.println();
          await era.printAndWait('好冰！');
          await era.printAndWait('海水的温度明显不同以往的冰，要说的话……');
          await era.printAndWait([
            '就像之前 ',
            tachyon.get_colored_name(),
            ' 为了测试耐寒药水而让自己跳进去的冰块池一般',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 连忙慌张的看向周围，却发现其他学生依然一如往常的在海中嬉戏',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '哼哼，感觉现在特别冷吧，这就是在下水前给你喝的药的效果，可以提高知觉的药物，没错，就是对O忍里面会出现的那种药物！',
          );
          era.println();
          await era.printAndWait('不要说O魔忍啊！？');
          await era.printAndWait(
            '但奇怪的是，除了现在的体感温度仿佛像在冬天泡冰块浴一般，就没有什么其他特别的感受了，如果是对魔O的话这时候应该是……',
          );
          era.println();
          await tachyon.say_and_wait(
            '当然，这还只是半成品而已，主要就是提高对寒冷神经上的敏感度而已，那么，你就好好游完指定的目标里数吧',
          );
          era.println();
          await era.printAndWait('好冷……');
          await era.printAndWait([
            '即便没有 ',
            tachyon.get_colored_name(),
            ' 的指示，在寒冷下 ',
            me.get_colored_name(),
            ' 还是被迫拼命活动身体来产生热量，最终好不容易完成了游泳的目标',
          ]);
          era.drawLine({ content: '题外话' });
          await tachyon.say_and_wait([
            '……为什么明明只是提高你的神经敏感度也能感冒啊，',
            callname,
          ]);
          era.println();
          await me.say_and_wait('……这个问题不是该问你吗？');
          flags.wait_flag = get_attr_and_print_in_event(32, [0, 10, 10, 0, 0]);
          flags.wait_flag = get_attr_and_print_in_event(
            0,
            [0, 10, 10, 0, 0],
            0,
            [-200],
          );
          break;
        case 3:
          await era.printAndWait('无论哪一个看起来都不怀好意啊……');
          await era.printAndWait(['机智的 ', me.get_colored_name(), ' 选择']);
          era.printButton('「……我忽然想起宿舍瓦斯炉好像没关，先回去了！」', 1);
          await era.input();
          await era.printAndWait('三十六计走为上策！');
          era.println();
          await tachyon.say_and_wait([
            '吼吼，居然想和我赛跑吗？看来最近的体力提升让你有些膨胀了啊，',
            callname,
            '。',
          ]);
          await tachyon.say_and_wait(
            '没问题，我让你十秒，要是被我追上了，今天的药就加倍。',
          );
          await tachyon.say_and_wait('来，让我玩的开心点吧，啊哈哈哈哈哈哈！');
          era.println();
          await era.printAndWait([
            '十秒的限时一过，',
            tachyon.get_colored_name(),
            ' 的脚步声就立即出现在耳边了',
          ]);
          await era.printAndWait(
            '快啊，快啊，仔细想想这个时候训练员培训学校是怎么教的',
          );
          await me.say_and_wait(
            ['寻找障碍物来干扰', tachyon.get_uma_sex_title(), '的动作！'],
            true,
          );
          await era.printAndWait(
            '好，快点………这里是沙滩哪里来的障碍物啊啊啊啊啊啊！！！',
          );
          era.println();
          era.println();
          await tachyon.say_and_wait([
            '啧啧，跑的太慢了啊 ',
            callname,
            '，那么今天的两管……好，再来一次吧，一样十秒，这次再追到就是四管了……继续吧～～',
          ]);
          await me.say_and_wait('还来啊！？');
          await era.printAndWait([
            '最终，',
            me.get_colored_name(),
            ' 被 ',
            tachyon.get_colored_name(),
            ' 追了又放四次，总共灌了十六管的药水',
          ]);
          flags.wait_flag = get_attr_and_print_in_event(32, [10, 0, 0, 0, 10]);
          flags.wait_flag = get_attr_and_print_in_event(
            0,
            [10, 0, 0, 0, 10],
            0,
            [-400],
          );
      }
    }
  };

  handlers[47 + 40] = async (tachyon, me, callname) => {
    await print_event_name('不同的可能性', tachyon);
    await era.printAndWait([
      '那天晚上，',
      me.get_colored_name(),
      ' 做了一个梦',
    ]);
    await era.printAndWait([
      '赢下了菊花赏的',
      tachyon.sex,
      '，站在赛场上挥舞着被白大褂包裹的手',
    ]);
    await era.printAndWait(['所有人都在呼喊着', tachyon.sex, '的名字']);
    await era.printAndWait([
      tachyon.sex,
      '转过头来，看向了观众席中的 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait('脸部却是一片漆黑');
    await say_by_passer_by_and_wait('观众们', '⬛⬛⬛⬛！⬛⬛⬛⬛！⬛⬛⬛⬛！');
    await era.printAndWait(['周围的观众们呼喊着', tachyon.sex, '的名字']);
    await era.printAndWait([tachyon.sex, '的名字是什么？']);
    await era.printAndWait([tachyon.sex, '……是谁？']);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 从梦中惊醒，久久无法恢复平静',
    ]);
    await era.printAndWait([
      '梦境实在太过真实，让 ',
      me.get_colored_name(),
      ' 不由得心有余悸',
    ]);
    await era.printAndWait([
      '剩下的夜晚 ',
      me.get_colored_name(),
      ' 依然辗转无法入眠，直至天亮',
    ]);
    era.println();
    await era.printAndWait([
      '天才蒙蒙亮，',
      me.get_colored_name(),
      ' 便匆忙离开了训练员宿舍',
    ]);
    await era.printAndWait([
      '虽说知道',
      tachyon.sex,
      '已经向媒体宣布了暂停出赛的消息',
    ]);
    await era.printAndWait([
      '虽说知道',
      tachyon.sex,
      '再怎么说也不可能瞒着自己去报名比赛',
    ]);
    await era.printAndWait('还是担心，还是害怕');
    await era.printAndWait([
      '还是必须亲眼看见',
      tachyon.sex,
      '，才能确定梦中的一切并非真实',
    ]);
    era.println();
    await tachyon.say_and_wait(['哦呀，', callname, '？今天来的真早']);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 冲进实验室时，看见的是一大清早便悠哉喝着红茶的 ',
      tachyon.get_colored_name(),
    ]);
    era.println();
    await tachyon.say_and_wait(['不过今天毕竟是菊花赏，紧张也是正常的吧']);
    if (sys_reg_race(25).curr.race === race_enum.kiku_sho) {
      await tachyon.say_and_wait(
        '晚点一起出发吧，呵呵……这还是我第一次并非自己上场，而是在观众席上看着别人跑呢',
      );
    } else {
      await tachyon.say_and_wait([
        '你要加油啊，不过嘛，毕竟 ',
        sys_get_colored_callname(32, 25),
        ' ',
        tachyon.sex,
        '没打算参加，我就在这里看着直播就好，好好表现吧',
      ]);
    }
    era.println();
    await tachyon.say_and_wait('……还是说，有什么其他想说的话？');
    era.println();
    await era.printAndWait('明明如此唐突的闯入了实验室');
    await era.printAndWait('明明想要将恶梦吐出');
    await era.printAndWait([
      '却在见到',
      tachyon.sex,
      '的瞬间，一切话语都说不出口',
    ]);
    era.println();
    await era.printAndWait('该怎么说呢？');
    await era.printAndWait([
      '说，我梦见了 ',
      me.get_colored_name(),
      ' 赢下菊花赏的样子？',
    ]);
    await era.printAndWait([
      '说，梦中的 ',
      me.get_colored_name(),
      ' 没有脸，没有姓名？',
    ]);
    await era.printAndWait('说，自己后悔……');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 用力晃了晃头，随意说了声没事作为回答后，狼狈的离开了实验室',
    ]);
    await era.printAndWait('有什么好说的呢');
    await era.printAndWait('有什么能说的呢');
    await era.printAndWait(
      '事到如今，竟然为了自己做出的决定而后悔什么的，开玩笑也要有个限度',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 离开了实验室，前去准备今日的菊花赏',
    ]);
  };

  handlers[47 + 41] = async (tachyon, me, callname, flags) => {
    await print_event_name('第二次年度审核', tachyon);
    await tachyon.say_and_wait('那么……该来谈正经的话题了');
    era.println();
    await era.printAndWait(['时间是菊花赏后']);
    await era.printAndWait([
      '地点是 ',
      tachyon.get_colored_name(),
      ' 的实验室',
    ]);
    era.println();
    await era.printAndWait([tachyon.sex, '严肃的拉下了窗帘，点亮照明灯光']);
    await era.printAndWait([me.get_colored_name(), ' 紧张的咽了口口水']);
    await era.printAndWait([
      '如此紧张的气氛……以 ',
      tachyon.get_colored_name(),
      ' 的性格',
    ]);
    await era.printAndWait(
      '难道是实验失误？有什么危险的实验动物跑出去了？把什么危险性药物散播在水源里了？还是……',
    );
    era.printButton('「我明白了，我会负责抓回来的」', 1);
    era.printButton('「我明白了，我会背下罪名的」', 2);
    era.printButton('「我明白了，自首吧，速子」', 3);
    await era.input();
    await tachyon.say_and_wait(
      '……不是，你在说什么乱七八糟的，我有点理解不能。我要说的是，三冠也结束了，差不多该来讨论今后的目标了',
    );
    await era.printAndWait('…………欸！？');
    await era.printAndWait([
      '由于话题的内容比自己预想的还要正经太多导致 ',
      me.get_colored_name(),
      ' 陷入了无声的惊愕',
    ]);
    era.printButton('「目标……」', 1);
    era.printButton('「啊，是研究的目标吧」', 2);
    await era.input();
    await era.printAndWait([
      '肯定是这样吧，是指实验，毕竟 ',
      tachyon.get_colored_name(),
      ' 的双腿在菊花赏后确实感觉比起以前稳定了许多，最起码目前应该不用特别担心伤病了',
    ]);
    await era.printAndWait(
      '那么接下来实验确实也该进入下个阶段了，肯定是这样，不是的话，那不就好像在说……',
    );
    era.println();
    await tachyon.say_and_wait(
      '实验的目标……确实也是，但是我现在要讨论的，是赛程的目标，当初讲好的是到三冠吧，现在三冠结束，也该进入下个阶段了',
    );
    era.println();
    await era.printAndWait('欸欸欸欸！！！！？？？？');
    await era.printAndWait([
      '这次 ',
      me.get_colored_name(),
      ' 真的陷入了惊愕，惊讶的程度让 ',
      me.get_colored_name(),
      ' 做出了《呐喊》的姿势',
    ]);
    await era.printAndWait([
      '这惹的眼前的 ',
      tachyon.get_colored_name(),
      ' 也忍不住笑了出来',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '呵呵……我会主动开始谈论比赛的事有这么令人吃惊吗？',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 看着',
      tachyon.sex,
      '的态度，回想着以往只将比赛视为实验验证的附加物的 ',
      tachyon.get_colored_name(),
    ]);
    era.printButton('「……速子……改变了呢」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '要说的话，本来就没有什么是不变的，以研究而言，故步自封闭门造车更是最忌讳的事……',
    );
    await tachyon.say_and_wait(
      '不过，改变也有分好与坏，至少目前而言我很满意现在的改变，这点我必须要感谢你才行',
    );
    era.println();
    await era.printAndWait([
      '听见 ',
      tachyon.get_colored_name(),
      ' 难得坦率的话语，',
      me.get_colored_name(),
      ' 一时慌了阵脚',
    ]);
    await era.printAndWait([
      '今天无论对 ',
      me.get_colored_name(),
      ' 还是对 ',
      tachyon.get_colored_name(),
      '，都发生太多的第一次了',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '真的没想到，凭着当时的一腔热血，居然能够走到这一步……',
    );
    await tachyon.say_and_wait(
      '连我都有些惧怕了，所谓的可能性，就好像毒药一样，让人不由得将理智忘却……',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 看着自己的双腿，身体有些颤抖',
    ]);
    await era.printAndWait(['虽然不太懂', tachyon.sex, '的意思，但']);
    era.printButton('「速子还想继续挑战极限吗？」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '继续？不，',
      callname,
      '，我一直都在挑战极限的路途上，没有停下来过。',
    ]);
    await tachyon.say_and_wait([
      '菊花赏不过是一个起点而已，在菊花赏后才是真正朝着极限出发的旅途啊！',
    ]);
    await tachyon.say_and_wait([
      '中距离最强的大阪杯、全现役',
      tachyon.get_uma_sex_title(),
      '中上半年及下半年最强的宝冢纪念和有马纪念……',
    ]);
    await tachyon.say_and_wait('要超越的目标，要抵达的巅峰不是比比皆是吗？');
    era.println();
    await era.printAndWait('因此');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 笔直的盯着 ',
      me.get_colored_name(),
      ' 的双眼',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '三冠结束后的世界，再与我一起同行吧，',
      callname,
    ]);
    await tachyon.say_and_wait('作为报酬，我会让你看见更加宽广的世界');
    era.printButton('「是」', 1);
    era.printButton('「那还用说吗？我很乐意」', 2);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 的经典战线结束了',
    ]);
    await era.printAndWait('资深战线即将开始！');
    flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 0, 10], 0);
  };
};
