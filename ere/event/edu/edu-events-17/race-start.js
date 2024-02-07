const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const color_17 = require('#/data/chara-colors')[17];
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos, race_enum } = require('#/data/race/race-const');

/**
 * @param {HookArg} _
 * @param {{race:number,rank:number}} extra_flag
 */
module.exports = async (_, extra_flag) => {
  const event_marks = new LunaEduMarks(),
    { luna, emperor } = event_marks.emperor
      ? { emperor: 17, luna: 9017 }
      : {
          emperor: 9017,
          luna: 17,
        },
    luna_talk = new CharaTalk(luna).set_color(color_17[0]),
    emperor_talk = new CharaTalk(emperor).set_color(color_17[1]),
    chara_talk = get_chara_talk(17),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:17:育成回合计时');
  if (
    (emperor === 17) &
      (race_infos[extra_flag.race].race_class === class_enum.G1) &&
    era.get(`status:${luna}:神经衰弱`) &&
    !event_marks.fall_into_hell
  ) {
    event_marks.fall_into_hell++;
    await print_event_name('堕入深渊', emperor_talk);

    let choose_emperor;
    await era.printAndWait(
      `在对手们接二连三地走上赛场时，${CharaTalk.me.name} 却突然发现，露娜的状态不对。`,
    );
    await era.printAndWait(`${luna_talk.sex}呆呆地坐在椅子上，愣愣地看着你。`);
    await era.printAndWait(`皇帝呢？${CharaTalk.me.name} 愣住了。`);
    await era.printAndWait(
      `面对 ${CharaTalk.me.name} 疑惑的目光，露娜开口却无法说出话来。`,
    );
    await luna_talk.say_and_wait('我不想……让她再出来了！');
    era.printButton('「露娜，比赛就要开始了！」', 1);
    era.printButton('「没事的，我会陪着你的。」', 2);
    await era.input();
    await era.printAndWait(
      `但不管 ${CharaTalk.me.name} 怎么劝说，露娜都摇着头拒绝了。`,
    );
    await era.printAndWait(
      '——比赛马上就要开始了，如果皇帝再不“出现”，那便真是万事休矣。',
    );
    await era.printAndWait(
      `无奈，${CharaTalk.me.name} 只能掐起自己的嗓子，用尽全力让自己的声音听起来像是个滑稽的弄臣。`,
    );
    era.printButton(
      '「皇帝，我伟大的皇帝！您听到了吗？万民那雷鸣般的呼声！」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `露娜仍在哭泣。一股无名火在 ${CharaTalk.me.name} 的心中燃起。明明都这个时候了……！`,
    );
    era.printButton('「吾皇，在您沉睡的时候，又有逆贼侮辱您的荣光。」', 1);
    await era.input();
    await era.printAndWait(
      `露娜只是无助地摇着头。${CharaTalk.me.name} 咬紧了牙关。`,
    );
    era.printButton('「请您苏醒，降下滔天的怒火……」', 1);
    await era.input();
    await era.printAndWait(`偏执让 ${CharaTalk.me.name} 面目狰狞、声音嘶哑。`);
    await era.printAndWait('或许是抓狂起了作用，露娜的身体渐渐地停止了颤抖。');
    await era.printAndWait(
      `${luna_talk.sex}看着 ${CharaTalk.me.name}，双眼里的恐惧逐渐消退，取而代之的，是那让人不寒而栗的锋锐。`,
    );
    await era.printAndWait(
      `${CharaTalk.me.name} 松了一口气，可眼前的马娘却突然捂住了头。`,
    );
    await era.printAndWait(`露娜迷茫地看着 ${CharaTalk.me.name}。`);
    await luna_talk.say_and_wait('她们不是我的朋友吗？');
    era.printButton('「……她们是你的朋友。」', 1);
    era.printButton('「吾皇，她们罪该万死！」', 2);
    let ret = await era.input();
    choose_emperor = ret === 2;
    if (choose_emperor) {
      await luna_talk.say_and_wait(
        '我非要这样做不可吗？我非要变成那个讨厌的模样不可吗？',
      );
      era.printButton('「不……不！我这就去帮你退赛！」', 1);
      era.printButton('「吾皇！您是天生的皇帝！」', 2);
      let ret = await era.input();
      choose_emperor = ret === 2;
      if (choose_emperor) {
        await luna_talk.say_and_wait(
          '我不是皇帝！不要再让露娜消失了。再这样下去，露娜真的会不见的。',
        );
        await luna_talk.say_and_wait('如果你还爱着我，就不要……');
        await era.printAndWait(
          `露娜绝望地看着 ${CharaTalk.me.name}，伸出的手像是想抓住救命的稻草。`,
        );
        await luna_talk.say_and_wait('不要……离开我……');
        await era.printAndWait(
          `${CharaTalk.me.name} 闭上了双眼。露娜是这样的信赖和爱慕 ${CharaTalk.me.name}，所以——`,
        );
        era.printButton('「握住我的手，露娜！」', 1);
        era.printButton('「皇帝万岁！」', 2);
        let ret = await era.input();
        choose_emperor = ret === 2;
        if (choose_emperor) {
          await era.printAndWait(
            `话说出口，${CharaTalk.me.name} 感觉时间都凝固了，可下一刻，${CharaTalk.me.name} 突然失去了呼吸的权力。`,
          );
          await era.printAndWait(
            `露娜……不，皇帝伸出手，掐紧了 ${CharaTalk.me.name} 的脖子。`,
          );
        }
      }
    }
    if (!choose_emperor) {
      await era.printAndWait(
        `听到你的话，露娜终于如释重负。${luna_talk.sex}迫不及待地向 ${CharaTalk.me.name} 伸出手，像是抓住一根不让自己沉没的稻草。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 不由得叹息——自己都让露娜做了什么啊。`,
      );
      await era.printAndWait(
        '为什么在之前没发现露娜的异样？无论面临什么样的惊涛骇浪。',
      );
      await era.printAndWait(
        `但从现在开始还不算晚！作为露娜的训练员、保护者和……爱人，${CharaTalk.me.name} 都要为露娜扛住一切风雨。`,
      );
      era.printButton('「露娜，我……」', 1);
      await era.input();
      await era.printAndWait(
        `${CharaTalk.me.name} 看向露娜，正准备牵住${luna_talk.sex}的手。`,
      );
      await era.printAndWait(
        `但那只 ${CharaTalk.me.name} 曾握紧过无数次，并许下誓言，永远也不放开的手，却突然向前。`,
      );
      await era.printAndWait('如铁钳一般，死死的掐着的脖子。');
      await emperor_talk.say_and_wait('露娜？谁？');
    }
    await era.printAndWait(
      `皇帝鄙夷地掐着 ${CharaTalk.me.name} 的脖子，站起了身。`,
    );
    await emperor_talk.say_and_wait('吾睡了多久？觊觎吾荣光的贼人在哪里？');
    await era.printAndWait(
      `${emperor_talk.sex}睥睨四周，惊讶每次从睡梦苏醒，${emperor_talk.sex}都会出现在不同的地方。`,
    );
    await era.printAndWait('而为什么每次苏醒，都还有人胆敢忤逆自己的意志？');
    await era.printAndWait(
      `${CharaTalk.me.name} 说不出话，也无法挣脱，只能长大了嘴咿呀咿呀地出气。`,
    );
    await era.printAndWait(
      `由于缺氧，${CharaTalk.me.name} 的视线逐渐模糊，意识正在远去。`,
    );
    await emperor_talk.say_and_wait('哼。');
    await era.printAndWait(
      `似乎是厌倦了得不到回应，皇帝随手将 ${CharaTalk.me.name} 甩到了地上。一声闷响后，${CharaTalk.me.name} 剧烈地呕吐起来，只觉得五脏六腑都被压扁了。`,
    );
    await era.printAndWait(
      `无法起身的 ${CharaTalk.me.name}，只能趴在地上，听皇帝的足音远去。`,
    );
    await era.printAndWait(
      `在意识消失的最后，${CharaTalk.me.name} 仿佛又听到了露娜的哭泣。`,
    );
    await era.printAndWait('抱歉……已经没法回头了。');
    await era.printAndWait(`${CharaTalk.me.name} 失去了意识。`);
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
    // 经典年有马纪念
    await print_event_name('无可匹敌', emperor_talk);

    await era.printAndWait(
      '与日本杯不同，每年的有马纪念——最后的大奖赛，也是长久以来最受人们瞩目的比赛，不是报名决定参赛的。',
    );
    await era.printAndWait(
      '每年赛前，会由全日本的粉丝们进行投票，投出公众认为，有资格参加比赛的赛马娘。',
    );
    await era.printAndWait(
      '换句话说，能够参赛的赛马娘，无一不是让人留下深刻印象的强者。',
    );
    await era.printAndWait('而尽管被高票选中，露娜竟没能获得人气第一。');
    await era.printAndWait(
      '人们议论纷纷。如果说日本杯是当年强者们对世界豪强的迎击，有马，就是决定本国最强者的比赛。',
    );
    era.printButton('（投票不能反映出参赛者真正的实力。）', 1);
    era.printButton('（但投票无疑反映了一定的真实处境。）', 2);
    await era.input();
    await era.printAndWait(
      `${CharaTalk.me.name} 忧心忡忡地回到了 ${chara_talk.name} 的休息室，${chara_talk.sex}正在闭目养神。`,
    );
    await era.printAndWait(
      '也就是说，始终有人认为，露娜会在经验丰富的前辈们面前陷入苦战。',
    );
    await era.printAndWait('但这也意味着，解决问题的方式同样简单粗暴。');
    await chara_talk.say_and_wait(
      emperor === 17 ? '展现吾的强权。' : '要做的事情只有一件。',
    );
    await era.printAndWait(
      `${chara_talk.get_teen_sex_title()}睁开双眼，喃喃道。`,
    );
  } else if (extra_flag.race === race_enum.japa_cup && edu_weeks >= 96) {
    // 资深年日本杯
    await print_event_name('油尽灯枯', emperor_talk);

    await era.printAndWait(
      `赛马娘有着天生的胜负欲，${chara_talk.sex}们无论何时都想着疾驰到更远的地方。`,
    );
    await era.printAndWait(
      `而在规定距离的赛场上，${chara_talk.sex}们会豁出一切，试图成为最快抵达终点的胜者。`,
    );
    await era.printAndWait(
      '而似乎是为了回应这样的愿望，赛马娘们将在本格化中急速成长，最终能够站上赛场。',
    );
    await era.printAndWait(
      '但同时，随着时间的推移，准确来说，可能就在三、四年间，本格化的力量就会逐渐衰退。',
    );
    await era.printAndWait('就像是耗尽了燃料。赛马娘在这之后，便如寻常众人。');
    await era.printAndWait(
      '这也是赛马娘拼死也要在赛场上奋斗的原因——想要留下自己的篇章，想要让众人不会忘记自己。',
    );
    await era.printAndWait('怀揣着心意，赛马娘们奋不顾身。');
    await era.printAndWait('其中有佼佼者，在无限激烈的竞争中进入了【领域】。');
    await era.printAndWait('那是超越一切的力量。');
    await era.printAndWait('但，力量的代价是什么？');
    await era.printAndWait(
      `自从露娜能够进入领域后，${CharaTalk.me.name} 无时无刻在思考这个为题。`,
    );
    await era.printAndWait('命运从未怜悯，一切事物都暗中标好了价格。');
    await era.printAndWait(
      `强大如象征家，${chara_talk.sex}们也会无法克制血脉的暴力而走向自我毁灭。`,
    );
    await era.printAndWait(
      `露娜描述过进入领域的感觉，仿佛一切静止，而${chara_talk.sex}来到一片无垠的草原。`,
    );
    await era.printAndWait(
      `${chara_talk.sex}会有使不完的力气，就好像自己和未来做了一个交易。`,
    );
    era.drawLine();
    await era.printAndWait('日本杯。');
    await era.printAndWait(
      `赛前，${CharaTalk.me.name} 死死地看着 ${chara_talk.name}。${CharaTalk.me.name} 知道，${chara_talk.sex}已经将自己调整到了最好的状态。`,
    );
    await era.printAndWait(
      `但为了战胜强敌，${chara_talk.sex}一定会再次进入领域。不，${chara_talk.sex}不得不进入领域中。`,
    );
    await era.printAndWait(
      `就好像燃烧起的火焰，不把燃料燃烧殆尽，就不会停止的火焰。`,
    );
    era.printButton(`「请小心。」`, 1);
    era.printButton(`「我有不好的预感。」`, 2);
    await era.input();
    await era.printAndWait(
      `${chara_talk.name} 看着 ${CharaTalk.me.name}，${CharaTalk.me.name} 才发觉，${chara_talk.sex}的手正微微颤抖。`,
    );
    await chara_talk.say_and_wait(
      emperor === 17
        ? '那就将皇帝的姿态铭记于心。'
        : '我明白你的担心，但为了我们的梦想，我不会后退。',
    );
    await era.printAndWait(
      `说罢，${chara_talk.get_teen_sex_title()}走向赛场。`,
    );
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 96) {
    // 资深年有马纪念
    if (
      (event_marks.good_end =
        extra_flag.rank === 1 && !era.get(`status:${luna}:神经衰弱`))
    ) {
      await print_event_name('领域尽头', luna_talk);
    } else {
      await print_event_name('绝响', emperor_talk);
    }
    await chara_talk.print_and_wait('哈……哈……');
    await chara_talk.print_and_wait('哈…………');
    await chara_talk.print_and_wait(
      `${chara_talk.name} 眼前的世界正在剧烈地动摇，${chara_talk.sex}视线内的一切都在模糊。`,
    );
    await chara_talk.print_and_wait(
      `如海潮般袭来的眩晕与疼痛打击着${chara_talk.sex}，领域正在排斥自己——${chara_talk.name} 意识到了。`,
    );
    await chara_talk.print_and_wait(`${chara_talk.sex}已不再无所不能。`);
    await chara_talk.print_and_wait(
      `每迈出一步，${chara_talk.name} 都能感受到巨大的违和感。`,
    );
    await chara_talk.print_and_wait(
      `落足，再抬起。剧烈的疼痛让${chara_talk.sex}面目狰狞得可怕。`,
    );
    await chara_talk.print_and_wait(
      `往常轻易能破开的风好像铁壁横亘，撞得${chara_talk.sex}伤痕累累。`,
    );
    await chara_talk.print_and_wait(
      `在这场比赛中，${chara_talk.sex}像是风暴中被折断双翼的飞鸟。`,
    );
    era.drawLine();
    await chara_talk.print_and_wait(
      `眼皮变得沉重，${chara_talk.name}的意识已经恍惚。`,
    );
    await chara_talk.print_and_wait(
      '领域正在崩塌，那缓慢的场景逐渐要动起来了。',
    );
    await chara_talk.print_and_wait(
      '马娘们在奔跑，踢着绿茵地，激起尘土，把飞草带进风中飘舞。',
    );
    await chara_talk.print_and_wait(
      '自己心脏跳得越来越快，却一丁点的力量也用不出。',
    );
    await chara_talk.print_and_wait(
      '身体的零件：那些肌肉、筋脉和内脏，正在被巨大的惯性撕扯着。',
    );
    await chara_talk.print_and_wait(
      '如果不在这个弯道停下来，在领域完全褪去的瞬间——',
    );
    await chara_talk.print_and_wait('自己会死。');
    await chara_talk.say_and_wait(
      emperor === 17
        ? '赛道并非天途，终有停滞之时。'
        : '这就是领域的真相……透支本格化的力量……',
    );
    await chara_talk.print_and_wait(
      '一代又一代的勇者跨入了领域，透支了自己的未来、理想和一切的可能性。',
    );
    await chara_talk.print_and_wait(`现在，轮到 ${chara_talk.name} 了。`);
    await chara_talk.print_and_wait(
      '在面对生涯，乃至生命的结尾时，自己该做些什么？没人教过自己。',
    );
    await era.printAndWait([
      {
        content: '露娜',
        color: luna_talk.color,
      },
      '&',
      { content: '皇帝', color: emperor_talk.color },
      '「',
      { content: CharaTalk.me.actual_name, color: emperor_talk.color },
      { content: '。', color: luna_talk.color },
      '」',
    ]);
    if (event_marks.good_end) {
      await era.printAndWait([
        {
          content: '露娜',
          color: luna_talk.color,
        },
        '&',
        { content: '皇帝', color: emperor_talk.color },
        '「',
        { content: '你', color: emperor_talk.color },
        { content: '会和我', color: luna_talk.color },
        { content: '（我）', color: emperor_talk.color },
        { content: '一起的吧？', color: luna_talk.color },
        '」',
      ]);
      await era.printAndWait(
        `把胸中的气吐尽，在千千万万的观众的实现下，${chara_talk.name} 加速了！！！`,
      );
      await era.printAndWait('没有道路的延续就自己踏破！');
      await era.printAndWait([
        {
          content: '露娜',
          color: luna_talk.color,
        },
        '&',
        { content: '皇帝', color: emperor_talk.color },
        '「',
        { content: '为了', color: emperor_talk.color },
        { content: '我', color: luna_talk.color },
        { content: '们', color: emperor_talk.color },
        { content: '的梦想！！！', color: luna_talk.color },
        '」',
      ]);
      era.printButton('「冲啊！！！！！！！」', 1);
      await era.input();
      await CharaTalk.me.print_and_wait('冲啊！！！！！！！');
      await CharaTalk.me.print_and_wait('冲啊！！！！！！！');
      await era.printAndWait(
        `${CharaTalk.me.name} 已经不在乎了自己的喉咙会否撕裂了。`,
      );
      await era.printAndWait(
        `${CharaTalk.me.name} 只知道，${chara_talk.name} 正向 ${CharaTalk.me.name}们 的梦想迎头迈进。`,
      );
      await era.printAndWait('很近了！很近了！');
      await era.printAndWait(
        '在盛大的欢呼声中，最强的赛马娘踏向了未知的远方。',
      );
    } else {
      await era.printAndWait([
        {
          content: '露娜',
          color: luna_talk.color,
        },
        '&',
        { content: '皇帝', color: emperor_talk.color },
        '「',
        { content: '我', color: emperor_talk.color },
        { content: '（我）会把', color: luna_talk.color },
        { content: '宝贵的经验', color: emperor_talk.color },
        { content: '告诉你……', color: luna_talk.color },
        '」',
      ]);
      await chara_talk.print_and_wait('——来吧。');
      await chara_talk.print_and_wait(
        `如迎接自己的宿命一般，${chara_talk.name} 冲向了自己的末路。`,
      );
    }
  } else {
    throw new Error('unsupported!');
  }
};
