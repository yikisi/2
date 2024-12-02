/**
 * @file 鲁铎象征 - 育成
 *
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

const { handle_debuff } = require('#/event/edu/edu-events-17/snippets');
const Edu17UntilWeekStart = require('#/event/edu/edu-events-17/week-start');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends Edu17UntilWeekStart {
  async out_church(chara, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 17) {
      add_event(event_hooks.out_church, event_object);
      return;
    }
    const chara_talk = get_chara_talk(17);
    await print_event_name('新年参拜', chara_talk);
    await era.printAndWait('正因为是新年，才忙碌。');
    await era.printAndWait(
      `在寒冬中，${CharaTalk.me.name} 呼出一口气，转瞬就变成白雾。`,
    );
    await era.printAndWait(
      `又是一年新春，${CharaTalk.me.name} 站在露娜身后，辅佐着她的工作，鞠躬、收礼、答谢。`,
    );
    await era.printAndWait(
      '给认识的人拜年，举办新年动员会，了结去年留下来的工作……',
    );
    await era.printAndWait(
      `仅仅只是分担了部分露娜的工作，${CharaTalk.me.name} 就几乎晕头转向了。`,
    );
    await era.printAndWait(
      `到这时 ${CharaTalk.me.name} 才明白，一年前，露娜为什么说想要皇帝代劳。`,
    );
    await chara_talk.say_and_wait('感觉你似乎，在想什么失礼的事情。');
    await era.printAndWait(
      `解决了阶段性的任务后，${CharaTalk.me.get_couple_title()} 终于有时间去参拜。路上，露娜不知怎的突然嘟囔。`,
    );
    await era.printAndWait(
      `${CharaTalk.me.name} 连忙否认。露娜不置可否，${chara_talk.sex}看着神社的钟鼓，闭上了双眼。`,
    );
    await era.printAndWait(
      `新一年，露娜的愿望会是什么呢？${CharaTalk.me.name} 没有问，据说，把愿望说出来就不会灵验了。`,
    );
    await era.printAndWait(
      `似乎完成了仪式。露娜睁开眼、仰着头，学着 ${CharaTalk.me.name} 的样子吐出一口气。`,
    );
    await era.printAndWait(
      `一股白雾飘散，${chara_talk.sex}愣愣地看着虚空，尔后侧过头，双手合十，向 ${CharaTalk.me.name} 露出了疲惫的微笑。`,
    );
    await chara_talk.say_and_wait('或许，我也在想着失礼的事情。');
    await era.printAndWait(
      `霎时，${CharaTalk.me.name} 的脸全红了。回想起这段时间波澜壮阔的故事，不禁感慨万千。`,
    );
    await era.printAndWait(`${CharaTalk.me.name} 郑重地向露娜说：`);
    era.printButton('「医食同源，希望你能在饮食中注重健康。」', 1);
    era.printButton('「全知全能，希望你能真正成为真正的皇帝。」', 2);
    era.printButton('「风流韵事，别多想，做自己喜欢做的事情就好。」', 3);
    const ret = await era.input();
    await era.printAndWait(
      `听罢 ${CharaTalk.me.name} 的祝福，露娜没有回应，只是轻轻倚靠在你的臂膀上，疲倦地闭上了双眼。`,
    );
    await era.printAndWait('短暂的休憩，在此时也弥足珍贵。');
    era.println();
    const attr_change = new Array(5).fill(0);
    let pt_change = 0;
    if (ret === 1) {
      attr_change[attr_enum.endurance] = 30;
    } else if (ret === 2) {
      attr_change.fill(5);
    } else {
      pt_change = 35;
    }
    if (era.get('status:17:神经衰弱')) {
      attr_change[attr_enum.endurance] += 10;
    }
    get_attr_and_print_in_event(17, attr_change, pt_change) &&
      (await era.waitAnyKey());
    era.set('cflag:17:节日事件标记', 0);
    return true;
  }

  async train_success(chara, me, callname, hook, extra_flag) {
    const event_marks = new LunaEduMarks();
    const is_emperor = event_marks.emperor;
    const chara_talk = get_chara_talk(17);
    await era.printAndWait([
      chara_talk.get_colored_name(),
      ' 的训练顺利结束了！',
    ]);
    // 经典年五月第一周
    if (
      era.get('cflag:17:育成回合计时') === 47 + 17 &&
      !event_marks.dissonance
    ) {
      event_marks.dissonance++;
      era.println();
      await print_event_name(
        [{ color: color_17[1], content: '不协调音' }],
        chara_talk,
      );
      const luna = is_emperor ? 9017 : 17;
      await era.printAndWait([
        '作为目标的 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 迫在眉睫，训练也进入了最后阶段。',
      ]);
      await era.printAndWait([
        '在 ',
        chara_talk.get_colored_name(),
        ' 于训练场上疾驰时，围观的赛',
        chara_talk.get_uma_sex_title(),
        '和训练员们纷纷发出赞叹。',
      ]);
      await era.printAndWait(
        `一圈又一圈，${CharaTalk.me.name} 发现 ${chara_talk.name} 状态极好，在奔跑时甚至露出了笑容。`,
      );
      await era.printAndWait(
        `尽管如此，${CharaTalk.me.name} 心里仍有极大的担忧。`,
      );
      await era.printAndWait([
        '在 ',
        race_infos[race_enum.sats_sho].get_colored_name(),
        ' 之后，压在露娜肩上，本就沉重如山的负担，越发不可收拾。',
      ]);
      await era.printAndWait(`或许，${chara_talk.name} 不像表面上那样平静。`);
      era.printButton(
        is_emperor
          ? '「吾皇，看您似乎已经尽兴，请您保重贵体。」'
          : '「今日的训练就到此为止吧。」',
        1,
      );
      await era.input();
      await era.printAndWait(`在一圈结束时，${CharaTalk.me.name} 高声呼喊。`);
      await era.printAndWait(
        `听到 ${CharaTalk.me.name} 的话，${chara_talk.name} 停下了脚步。`,
      );
      if (is_emperor) {
        await era.printAndWait(
          `片刻后，气喘吁吁的皇帝向 ${CharaTalk.me.name} 走来。不知为何，原本她畅快的表情变得愤怒。`,
        );
        await chara_talk.say_and_wait('弄臣，给吾一个打搅吾状态的理由。');
        era.printButton('「吾皇，您似乎太兴奋了。」', 1);
        era.printButton('「越是临近狩猎，您越是应该冷静……」', 2);
        await era.input();
        await era.printAndWait(
          `从始至终，${CharaTalk.me.name} 都不认为皇帝会扛不住训练的强度。`,
        );
        await era.printAndWait(
          `${CharaTalk.me.name} 成为${chara_talk.sex}的训练员也好，教唆${chara_talk.sex}成为皇帝也罢。`,
        );
        await era.printAndWait(
          `从始至终，${CharaTalk.me.name} 都只是在担心，露娜被自己心中的野兽击垮。`,
        );
        await era.printAndWait(
          `${CharaTalk.me.name} 看着对自己露出玩味表情的皇帝，低下了头。后者身上如同山岳般的压力让 ${CharaTalk.me.name} 冷汗直流。`,
        );
        await era.printAndWait(
          `跨越了皋月赏，即将进军德比……此时此刻，比起训练的状态，${CharaTalk.me.name} 更想呵护好属于露娜的身体。`,
        );
        await era.printAndWait(
          `看着 ${CharaTalk.me.name}，皇帝冷哼了一声，径直离开了赛场。`,
        );
        await era.printAndWait(
          `${CharaTalk.me.name} 本能地向${chara_talk.sex}伸出手，但${chara_talk.sex}走得太快了，${CharaTalk.me.name} 没能拦住${chara_talk.sex}。`,
        );
        era.printButton('「抱歉。」', 1);
        era.printButton('「好好休息吧。」', 2);
        await era.input();
        await era.printAndWait(
          `${CharaTalk.me.name} 叹了口气，小跑着追了上去。。`,
        );
      } else {
        await era.printAndWait(
          `片刻后，气喘吁吁的露娜向 ${CharaTalk.me.name} 走来。不知为何，原本${chara_talk.sex}畅快的表情变得暗淡。`,
        );
        await chara_talk.say_and_wait(
          `${CharaTalk.me.actual_name}，我的状态很好。日本德比很近了，我必须再加强一些！`,
        );
        era.printButton('「我明白，但越是这个时候，就越要冷静。」', 1);
        era.printButton('「我很担心你的状态……」', 2);
        await era.input();
        await era.printAndWait(
          `从始至终，${CharaTalk.me.name} 都不认为露娜会扛不住训练的强度。`,
        );
        await era.printAndWait(
          `${CharaTalk.me.name} 成为${chara_talk.sex}的训练员也好，教唆${chara_talk.sex}成为皇帝也罢。`,
        );
        await era.printAndWait(
          `从始至终，${CharaTalk.me.name} 都只是在担心，露娜被自己心中的野兽击垮。`,
        );
        await era.printAndWait(
          `可从初次见面的宣泄以来，露娜已经很久都没有向 ${CharaTalk.me.name} 表达心声了。`,
        );
        await era.printAndWait(
          `跨越了皋月赏，即将进军德比。此时此刻，比起训练的状态，${CharaTalk.me.name} 更想知道露娜的想法。`,
        );
        await era.printAndWait([
          '看着 ',
          CharaTalk.me.get_colored_name(),
          '，露娜思考了一会。',
          chara_talk.sex,
          '向 ',
          CharaTalk.me.get_colored_name(),
          ' 露出了微笑。',
        ]);
        await chara_talk.say_and_wait(
          '如果这种程度都做不到的话，我们的理想根本无法实现。',
        );
        await era.printAndWait(`${CharaTalk.me.name} 暗中咬牙，还想说什么。`);
        await era.printAndWait(
          `露娜蹬了两下脚，本想向跑道走去。但看着 ${CharaTalk.me.name} 担心的眼神，最终还是停下了脚步。`,
        );
        era.printButton('「抱歉。」', 1);
        era.printButton('「好好休息吧。」', 2);
        await era.input();
        await era.printAndWait([
          '接过 ',
          CharaTalk.me.get_colored_name(),
          ' 递来的毛巾和水，露娜小声地答应了。',
        ]);
      }
      await handle_debuff(event_marks, luna);
      hook.override = true;
      extra_flag.pt_change = 5;
    } else if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
      era.println();
      await print_event_name('额外的自主训练', chara_talk);

      await era.printAndWait(`训练结束后，${chara_talk.name}似乎仍意犹未尽。`);
      await era.printAndWait(
        `${chara_talk.sex}远远向天边望去，夕阳正在垂落，最后的光芒洒落大地。`,
      );
      await era.printAndWait('天马上就要黑了，但是还不够，还没有到达极限——');
      await era.printAndWait(
        `${CharaTalk.me.name} 知晓了${chara_talk.sex}的心意。`,
      );

      era.printButton('「继续奔跑吧！抓住那感觉。」', 1);
      era.printButton('「今日就到此为止吧，接下来还有更重要的事。」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await chara_talk.say_and_wait(
          is_emperor
            ? '——征途的尽头？有趣。'
            : '好……总感觉，我越来越能抓到诀窍了。',
        );
      } else {
        await chara_talk.say_and_wait(
          is_emperor ? '沉睡……吗？' : '确实如此，感谢你的提醒。',
        );
      }
      era.println();
    }
  }

  async week_end(_chara, me, callname, hook, extra_flag, event_object) {
    const event_marks = new LunaEduMarks(),
      luna = new CharaTalk(event_marks.emperor ? 9017 : 17).set_color(
        color_17[0],
      ),
      event_arg = event_object?.arg;
    if (event_arg === 'wax_and_wane') {
      await print_event_name('阴晴圆缺', luna);

      await luna.print_and_wait('小的时候，家里人并不对我抱有期望。');
      await luna.print_and_wait(
        '我被允许四处疯玩，也被允许不参加训练，似乎对我，大家都抱有「怎么都好」的态度。',
      );
      await luna.print_and_wait('象征家就是这样的地方，人们只关心实力。');
      await luna.print_and_wait('于是，强大的姐姐们在赛道上飞驰。');
      await luna.print_and_wait('而我，甚至可以在草坪上睡过一整天。');
      await luna.print_and_wait(
        '我本想轻松度日，但随着年龄逐渐成长，我却发现自己总是克制不住体内的躁动。',
      );
      await luna.print_and_wait('就好像我的血，在体内燃烧一样。');
      await luna.print_and_wait(
        '每每这时，我的心里就会生出一种暴虐凶狠的心情。',
      );
      await luna.print_and_wait(
        '想要撕碎、想要碾压、想要将对手狠狠踩在脚下，讥讽她！嘲笑她！',
      );
      await luna.print_and_wait('——我要夺走所有人的一切，将世界付之一炬！');
      await luna.print_and_wait(
        '在把体力完全耗尽、堪堪回过神来时，我只能感到无尽的空虚和恐惧。',
      );
      await luna.print_and_wait(
        '我开始变得患得患失……为了不让自己胡思乱想，我开始自主地参加训练。',
      );
      await luna.print_and_wait(
        '只有在极致的奔跑下，我才会变得平静……才会变得像我自己。',
      );
      await luna.print_and_wait('「露娜。」');
      await luna.print_and_wait(
        '妈妈给我起了一个好听的名字，也是一个温柔的名字。',
      );
      await luna.print_and_wait('我不想变成只懂得宣泄暴力的怪物……');
      await luna.print_and_wait(
        '可我克服不了血脉带给我的暴虐，就像象征家过去所有的赛马娘一样。',
      );
      await luna.print_and_wait('这时，我才意识到，为什么家人们不会管教我。');
      await luna.print_and_wait(
        '因为，代代流传的「象征」之血，会指引我走上一条既定的道路。',
      );
      await luna.print_and_wait('胜利。胜利。');
      await luna.print_and_wait(
        '只要能胜利，哪怕我变得不再是自己也是被允许的。',
      );
      await luna.print_and_wait('不如说，只要能胜利，怎么都好。');
      await luna.print_and_wait(
        '在我展现出稀世的才能后，象征家着手开始培养我。',
      );
      await luna.print_and_wait('只要我想，我可以轻而易举地拥有所有的资源。');
      await luna.print_and_wait('只要我想，我可以轻而易举地拥有所有的宠爱。');
      await luna.print_and_wait('但我仍感到空虚和恐惧。');
      await luna.print_and_wait(
        '就算奔跑可以短暂地让我放空大脑，但在超越所有对手，站在终点往回望时，我气喘吁吁地发现，我的嘴角竟止不住地上扬。',
      );
      await luna.print_and_wait('就好像，我变了一个人。');
      await luna.print_and_wait('我不由得想，露娜是真实的我吗？');
      await luna.print_and_wait(
        '还是那个站在赛场上肆虐八方的怪物，才是真正的我？',
      );
      await luna.print_and_wait(
        '我很想有一个人能够哭诉，但随着我的长大，温柔待我的人们却唐突逝去。',
      );
      await luna.print_and_wait(
        '母亲，受到猎人的惊吓而郁郁而终；姐姐，在赛前的准备中粲然逝去。',
      );
      await luna.print_and_wait('或许，我也……');
      await luna.print_and_wait(
        '在冷冽月光的注视下，我发狂似地来到了大人们的身边。',
      );
      await luna.say_and_wait('我想要——');
      await luna.print_and_wait(
        '安全感，想要不再恐惧。但面对和蔼的祖父和父母，我没能这么说。',
      );
      await luna.print_and_wait('我看到了他们眼中的期待。');
      await luna.print_and_wait(
        '所以，我许愿要【爱】，我要数不胜数的兄弟姐妹们围在我身边，还要天南地北有趣的人，环绕在象征家。',
      );
      await luna.print_and_wait('只要这里热闹起来——');
      await luna.print_and_wait('只要我被人们包围——');
      await luna.print_and_wait(
        '一定、一定会有机会的，一定会有人能让自己不再空虚和恐惧的。',
      );
      await luna.print_and_wait('到那时……我……露娜……一定会——');
      await luna.say_and_wait(`${CharaTalk.me.actual_name}？`);
      await luna.print_and_wait('露娜从梦中惊醒，发现自己独自躺在床上。');
      await luna.print_and_wait(
        '为什么会做这样的梦呢？露娜捂着头。看向窗外皎洁的明月，她感到头晕目眩。',
      );
      await luna.print_and_wait(
        '明明已经接受了鼓励，下定决心向理想冲击，但一想到要让【皇帝】夺去自己的意识，奋起残暴的血脉……',
      );
      await luna.print_and_wait('露娜潸然泪下，无论如何她都还是好害怕。');
      await luna.print_and_wait(
        '明明已经擅长了忍耐，坚信只要忍耐下去，事情就会有所转机。',
      );
      await luna.print_and_wait(
        `但自从和 ${CharaTalk.me.actual_name} 重逢后，自己一直以来仰仗的忍耐就失去了作用。`,
      );
      await luna.say_and_wait('好想见你……');
      await luna.say_and_wait('好想见你……');
      await luna.print_and_wait(`${luna.get_teen_sex_title()}一夜无眠。`);
    } else if (event_arg === 47 + 41) {
      await print_event_name(
        [{ color: color_17[1], content: '急转直下' }],
        luna,
      );
      await era.printAndWait(
        `皎洁的明月下，${CharaTalk.me.name} 焦急地在门外的走廊上徘徊。`,
      );
      await era.printAndWait(`许久后，${CharaTalk.me.name} 听到了护士的呼唤。`);
      await era.printAndWait(
        `焦急地冲进病房，${CharaTalk.me.name} 发现露娜躺在床上，已经睡着了。`,
      );
      await era.printAndWait(
        `看着${luna.sex}虽然苍白，但呼吸均匀的模样，${CharaTalk.me.name} 松了口气。`,
      );
      await era.printAndWait('菊花赏后，露娜被紧急地送往了象征家的私人医院。');
      await era.printAndWait('经过检查，医生给出了诊断结果——露娜过劳了。');
      await era.printAndWait(
        `不过虽然身体虚弱，只要露娜好好休养，${luna.sex}仍然能赶上日本杯。`,
      );
      era.printButton('「日本杯啊——」', 1);
      await era.input();
      await era.printAndWait(
        `因为露娜需要静养，${CharaTalk.me.name} 确认了${luna.sex}的状态后，便蹑手蹑脚地走到了门外。`,
      );
      await era.printAndWait(
        `看着窗外的夜色，${CharaTalk.me.name} 感到头疼不已。`,
      );
      await era.printAndWait(
        '日本杯，所有日本赛马娘的夙愿……明明是在主场最宏大的比赛，却屡屡被海外的豪强夺走胜利。',
      );
      await era.printAndWait(
        `为了完成露娜和 ${CharaTalk.me.name} 的梦想，达到所有赛马娘都能幸福的世界。`,
      );
      await era.printAndWait('日本杯是露娜必须跨越过的试炼。');
      await era.printAndWait(
        `${CharaTalk.me.name} 回过头，望着门。露娜就在门后的床上休息。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 叹了口气，一想到${luna.sex}苍白的脸，${CharaTalk.me.name} 原本坚定的心就发生了动摇。`,
      );
      await era.printAndWait(
        '赛马娘奔跑的模样是何等的瑰丽，但其中蕴含的危机不亚于真刀真枪的战场。',
      );
      await era.printAndWait(
        '只要有一刻松懈，只要有一瞬失误，赛马娘就可能万劫不复。',
      );
      await era.printAndWait(
        `露娜还年轻，${luna.sex}一定还有机会……不一定非要这一次。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 尝试说服自己。但 ${CharaTalk.me.name} 明白，全日本对露娜——对鲁铎象征的期待，不允许${luna.sex}「临阵脱逃」。`,
      );
      await era.printAndWait('露娜也一定不愿意就此放弃。');
      await era.printAndWait(
        `${CharaTalk.me.name} 焦躁地揉着自己的头发，殚精竭虑间，睡意笼罩了 ${CharaTalk.me.name}。`,
      );
      era.printButton('「明天再和露娜谈谈吧……」', 1);
      await era.input();
      await era.printAndWait(`${CharaTalk.me.name} 也累坏了。`);
      await era.printAndWait(
        `可第二天，再睁开眼时，${CharaTalk.me.name} 却发现自己身上披着一条被子。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 猛地看向身旁的门，它虚掩着，房间里本应该好好休息的露娜也不见踪影。`,
      );
      era.printButton('「不会吧？！」', 1);
      await era.input();
      await era.printAndWait(
        `${CharaTalk.me.name} 意识到，露娜似乎用行动向 ${CharaTalk.me.name} 证明了${luna.sex}的决心。`,
      );
      era.drawLine();
      await era.printAndWait(
        `${CharaTalk.me.name} 推开了学生会的门，却发现里面人满为患——庶务们，正拿着各种文件，向露娜汇报近些日的工作。`,
      );
      await era.printAndWait(`露娜看着 ${CharaTalk.me.name}，嘴角微微抿起。`);
      await luna.say_and_wait('训练员，发生什么事了吗？');
      await era.printAndWait(
        `${CharaTalk.me.name} 气喘吁吁，看着众人正眼巴巴地望着自己，${CharaTalk.me.name} 只好讪笑。`,
      );
      era.printButton('「您忘了东西……」', 1);
      era.printButton('「你应该好好……」', 2);
      await era.input();
      await era.printAndWait(
        `话还没到一半，${CharaTalk.me.name} 突然发现，露娜注视着自己的紫色眸子里，带着哀求。`,
      );
      await luna.say_and_wait('我没事的。', true);
      await era.printAndWait(
        `${CharaTalk.me.name} 读懂了${luna.sex}的唇语。${CharaTalk.me.name} 没办法忤逆${luna.sex}的意思，从小到大都是……`,
      );
      era.printButton('「不，不是什么大事。」', 1);
      era.printButton('「抱歉……」', 2);
      await era.input();
      await era.printAndWait(
        `${CharaTalk.me.name} 失魂落魄地离开了学生会。${CharaTalk.me.name} 清楚，学园离不开露娜。`,
      );
      await era.printAndWait('露娜也清楚，日本不能在这个时候失去鲁铎象征。');

      get_attr_and_print_in_event(
        17,
        undefined,
        0,
        JSON.parse(
          `{"体力":${-era.get('maxbase:17:体力') / 2},"精力":${
            -era.get('maxbase:17:精力') / 2
          }}`,
        ),
      );
    } else if (event_arg === 95 + 10) {
      // 资深年三月二周
      await print_event_name(
        [{ color: color_17[1], content: '呕心沥血' }],
        luna,
      );
      await era.printAndWait(
        '天皇赏春就要来了，作为距离最长的G1赛事，3200米的距离无疑是考验赛马娘韧性的大关。',
      );
      await era.printAndWait(
        '曾经，赢下天皇赏的赛马娘会被认为是最强者，但随着时代的变化，各种赛事的评价也在起伏。',
      );
      await era.printAndWait(
        '可无论如何，天皇赏春确实是目前为止最严苛的比赛。',
      );
      await era.printAndWait(
        '升上高年级后，露娜学生会的工作压力不仅没有降低，更是要经常安排时间指导后辈，并参加各种访谈。',
      );
      await era.printAndWait(
        `尽管 ${CharaTalk.me.name} 有些忧虑，但露娜始终认为，这是承担相应名望所要背负的责任。`,
      );
      await era.printAndWait(
        `似乎发现了 ${CharaTalk.me.name} 的想法，在结束一天的忙碌后，露娜叫住了 ${CharaTalk.me.name}。`,
      );
      await luna.say_and_wait('你在生气吗？');
      era.printButton('「我只是担心你。」', 1);
      era.printButton('「希望你能多依靠我一点。」', 2);
      await era.input();
      await era.printAndWait(`听到${CharaTalk.me.name}的话，露娜轻呼一口气。`);
      await luna.say_and_wait('你也要多相信我一点。');
      await era.printAndWait(
        `露娜看着${CharaTalk.me.name}，伸出手，抚摸着${CharaTalk.me.name}的脸颊。`,
      );
      await luna.say_and_wait(
        '我必须这样做，不然，会有很多人陷入迷茫和困境中的。',
      );
      await luna.say_and_wait('我们还未能实现梦想。');
      await era.printAndWait(`${CharaTalk.me.name} 握住了露娜的手。`);
      await era.printAndWait(
        `明明是在说远大的理想，${CharaTalk.me.name} 却发现露娜的眉头上始终有散不开的忧愁。`,
      );
      await era.printAndWait(
        `就好像 ${CharaTalk.me.name} 们再次相遇时那样，喘不过气来的样子。`,
      );
      await era.printAndWait(`${CharaTalk.me.name} 叹了口气，点了点头。`);
      await era.printAndWait(
        `——究竟能为露娜再做些什么？未来的好些天里，${CharaTalk.me.name} 一直在思考这个问题。`,
      );
      era.println();
      const attr_change = new Array(5).fill(0);
      attr_change[attr_enum.intelligence] = 5;
      get_attr_and_print_in_event(17, attr_change, 0);
      await handle_debuff(event_marks, luna.id);
    }
  }
};
