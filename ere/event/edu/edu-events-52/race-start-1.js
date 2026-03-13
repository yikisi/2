const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,HookArg):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (urara, me, in_urara, callname) => {
    if (era.get('cflag:52:育成回合计时') === 23) {
      await print_event_name('迎向出道战！', urara);

      await in_urara.say_as_unknown_and_wait(
        '在与订下了契约的训练员互相摸索了许久后，两人逐渐做好了真正的准备。',
      );
      await in_urara.say_as_unknown_and_wait([
        '名为 ',
        urara.get_colored_actual_name(),
        ' 的小',
        urara.uma_sex_title,
        '，终于要在『出道战』中出赛了——',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        '终于要出道了吗？那么今天也要『乌拉拉』地上了！',
      );

      era.printButton('「乌拉拉，放松一下，别太紧张了。」', 1);
      await era.input();

      await era.printAndWait([
        '与 ',
        urara.get_colored_name(),
        ' 一起站在赛场的通道内，',
        me.get_colored_name(),
        ' 安抚着一旁脸上带着笑容，身体却在颤抖的 ',
        urara.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '训练成果的检测就在今天，',
        urara.get_colored_name(),
        ' 也知道出道「机会」是有限的，这次能不能胜利相当关键。',
      ]);
      await era.printAndWait(
        '逐渐产生竞赛意识是好事，但过于激动可能会导致发挥失常，太紧张而没法上场的也不在少数。',
      );
      await era.printAndWait([
        '所以比周围几位这时还在为未出道担当讲经的同行，让',
        urara.sex,
        '开心地去跑才是上策。',
      ]);
      await urara.say_and_wait('嗯！说的是呢！嘿嘿～不知不觉中就变得紧张了！');
      await era.printAndWait([
        '在听到 ',
        me.get_colored_name(),
        ' 的提醒后放松了肩膀，尽管还很勉强，',
        urara.get_colored_name(),
        ' 依旧竖起耳朵对 ',
        me.get_colored_name(),
        ' 露出了笑容。',
      ]);
      era.println();
      if (era.get('relation:52:0') > 150) {
        await urara.say_and_wait(
          '但是终于可以出道了嘛！我觉得现在就能出道是很厉害的事哦！',
        );
        await urara.say_and_wait([
          '出道之后就能参加更多的比赛！拿到更多第一的话，',
          callname,
          ' 和大家都会开心吧！',
        ]);
        await era.printAndWait([
          '用力地摇着尾巴，',
          urara.get_colored_name(),
          ' 略显稚嫩的声音中，能明显地感受到为支持自己的人而存在的斗志。',
        ]);
        await era.printAndWait([
          '总感觉变得像英雄剧的主角那样，',
          urara.get_colored_name(),
          '，真是个不得了的孩子……',
        ]);
      } else {
        await urara.say_and_wait(
          '但是马上就要出道了嘛！虽然觉得有些早，但也到了前进的时候呢！',
        );
        await urara.say_and_wait(
          '我会打起精神来的！只要能拿到第一的话，大家应该也能露出笑容吧！',
        );
        await era.printAndWait([
          '像给自己胸中的斗志打气一般，',
          urara.get_colored_name(),
          ' 用力摇着尾巴，脸上又多了几分认真。',
        ]);
        await era.printAndWait([
          '即使不够自信，也会为了关照自己的大家全力以赴，',
          urara.get_colored_name(),
          '，真个好孩子啊……',
        ]);
      }
      era.println();
      await urara.say_and_wait([
        '而且呢，我也觉得自己变得比之前更强了！',
        callname,
        ' 的办法真的很有用！',
      ]);
      await urara.say_and_wait(['虽然还不知道，', callname, '，你的身体也——']);

      era.printButton(
        `「没事的，我不是说很多次了吗？${callname} 没问题的！」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '诶？真的吗？那 ',
        callname,
        ' 也要放松一些哦？',
      ]);

      era.printButton('「真的哦！乌拉拉大可放心！」', 1);
      await era.input();

      await era.printAndWait([
        '在与 ',
        me.get_colored_name(),
        ' 一句句的赛前闲聊中，',
        urara.get_colored_name(),
        ' 紧绷的神情逐渐缓和下来。',
      ]);
      await era.printAndWait([
        '这样应该没问题了吧？悄悄按住还抖得厉害的双腿，',
        me.get_colored_name(),
        ' 给自己站着都费劲的身体又换了个姿势。',
      ]);
      await era.printAndWait(
        '虽然身体直到现在都还酸得要死，不过既然努力真的没有白费，那苦一点也算值得了。',
      );
      await era.printAndWait([
        '调整好呼吸，整理好自己的体操服与号码布，',
        urara.get_colored_name(),
        ' 随着广播中的入场提示向前踏出一步。',
      ]);

      era.printButton('「第一次，做好准备了吗？」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！我觉得今天我一定能跑第一名！不对，是绝对会赢！',
      );
      await urara.say_and_wait([
        '那我要出发了哦！提问！',
        callname,
        '，乌拉拉要怎样奔跑呢——？',
      ]);
      await era.printAndWait([
        '面对 ',
        urara.get_colored_name(),
        ' 迎着光的笑容，',
        me.get_colored_name(),
        ' 有力地回应着',
        urara.sex,
        '。',
      ]);

      era.printButton('「不管怎样，开心的上吧——！」', 1);
      await era.input();
    } else {
      await print_event_name('没问题吗？', urara);
      await in_urara.say_as_unknown_and_wait(
        '尽管并不意外乌拉拉会走到这一步，但心情上还是很难接受，各种方面都是。',
      );
      await in_urara.say_as_unknown_and_wait([
        '您与',
        urara.sex,
        '都没问题吧？故事这么简单的结束的话，我可不会接受哦？',
      ]);
      era.drawLine();
      await era.printAndWait([
        '忧心忡忡的看着身旁的担当，',
        me.get_colored_name(),
        ' 犹豫着不知要怎样开口。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 明白现在 ',
        urara.get_colored_name(),
        ' 恐怕没有表面上那么充满余裕，可既然选择出道，横在前面的障碍就必须跨过去。',
      ]);
      await era.printAndWait([
        '要直接和',
        urara.sex,
        '说这次再无法取得胜利的话会面临什么吗？果然还是说不出口。',
      ]);
      await era.printAndWait([
        '况且现在去说也太晚了，就算 ',
        urara.get_colored_name(),
        ' 早就有所察觉，现在明确提起也不过是徒增压力。',
      ]);
      await era.printAndWait([
        '到头来能说的，恐怕也只有让',
        urara.sex,
        '和平常一样开心地去跑，但这样的话……',
      ]);
      await urara.say_and_wait([
        callname,
        '，不用担心乌拉拉哦？我明白该怎么跑的！',
      ]);
      await era.printAndWait([
        '似乎是看穿了 ',
        me.get_colored_name(),
        ' 的纠结，',
        urara.get_colored_name(),
        ' 对身边的 ',
        me.get_colored_name(),
        ' 温柔地笑着，就像',
        urara.sex,
        '才是目送担当上场的训练员一般。',
      ]);
      await urara.say_and_wait([
        '因为 ',
        callname,
        ' 很厉害哦？所以乌拉拉一定没问题的！',
      ]);

      era.printButton('「……要开心的去跑，对吧？」', 1);
      await era.input();

      era.println();
      if (era.get('relation:52:0') > 150) {
        await urara.say_and_wait([
          '嗯！无论结果如何，乌拉拉都不会放弃奔跑！所以 ',
          callname,
          ' 不用担心！',
        ]);
        await era.printAndWait([
          '回应着 ',
          me.get_colored_name(),
          ' 的话语，',
          urara.get_colored_name(),
          ' 露出了令人安心的笑容。',
        ]);
        await urara.say_and_wait([
          '嘿嘿～看来 ',
          callname,
          ' 还记得我说过的话啊，果然 ',
          callname,
          ' 很厉害！',
        ]);
        await era.printAndWait([
          '没错，现在再担心也没什么意义，接下来只要把奔跑都交给 ',
          urara.get_colored_name(),
          ' 就好。',
        ]);
      } else {
        await urara.say_and_wait(
          '没错哦！所以就算又输掉了，乌拉拉也会继续奔跑呢！',
        );
        await era.printAndWait([
          '尽管没有看向 ',
          me.get_colored_name(),
          '，但 ',
          urara.get_colored_name(),
          ' 脸上依旧流露出了笑意。',
        ]);
        await urara.say_and_wait('所以接下来，只要继续努力去跑就可以了！');
        await era.printAndWait([
          '是啊，',
          urara.get_colored_name(),
          ' 就是这样坚强的',
          urara.uma_sex_title,
          '，该担心的，恐怕只有不愿信任',
          urara.sex,
          '的我……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '用深呼吸稳定下心绪之后，',
        me.get_colored_name(),
        ' 也和 ',
        urara.get_colored_name(),
        ' 一同笑了起来，虽然更多的是一种自嘲。',
      ]);
      await era.printAndWait([
        '明明是 ',
        urara.get_colored_name(),
        ' 的比赛，怎么搞得像自己要跑一样。刚刚还想着怎样去安慰 ',
        urara.get_colored_name(),
        '，结果现在被安慰的还是自己。',
      ]);
      await era.printAndWait([
        '不过至少 ',
        me.get_colored_name(),
        ' 明白了，现在没什么好犹豫的，因为 ',
        urara.get_colored_name(),
        ' 一定会继续向前。',
      ]);
      await era.printAndWait([
        '没有像周围训练员与担当继续交流什么，',
        me.get_colored_name(),
        ' 与靠在身边的小',
        urara.uma_sex_title,
        '安静地等待着，直至提示入场的广播声响起。',
      ]);
      await urara.say_and_wait(['到时间了哦 ', callname, '！我要上了呦！']);

      era.printButton('「这次一定要拿到最喜欢的一着哦！」', 1);
      await era.input();

      await urara.say_and_wait('嗯！一定会的！');
      await era.printAndWait([
        '随着简短有力的回应，迎着通道外的阳光，',
        urara.get_colored_name(),
        ' 再次面带笑容的走向了赛场。',
      ]);
    }
  };

  handlers[race_enum.arim_kin] = async (
    urara,
    me,
    in_urara,
    callname,
    _,
    hook,
  ) => {
    if (era.get('cflag:52:育成回合计时') < 96) {
      hook.override = true;
      await print_event_name('前进的决心！', urara);
      const best_mvp = Math.min(
        ...RaceHistory.get(52)
          .get_values()
          .filter((e) => race_infos[e.race].race_class <= class_enum.G3)
          .map((e) => e.rank),
      );
      await in_urara.say_as_unknown_and_wait(
        '为什么……明明我都说了……为什么还要这样做……您这个人，真是……',
      );
      era.drawLine();
      await era.printAndWait([
        '站在宽敞的选手通道内，',
        urara.get_colored_name(),
        ' 正与周围紧绷的气氛格格不入的左顾右盼着。',
      ]);
      await era.printAndWait([
        '而站在兴奋过头的小',
        urara.uma_sex_title,
        '旁边的，则是',
        urara.sex,
        '略微有些头疼的 ',
        callname,
        '。',
      ]);
      await urara.say_and_wait([
        callname,
        '！没想到我竟然真的参加了 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 呢！',
      ]);
      await era.printAndWait([
        '实际上确实出乎很多人的意料，就连组织投票的 ',
        me.get_colored_name(),
        ' 都没想到粉丝投票制这招竟然真的能行。',
      ]);
      await era.printAndWait([
        '本来大胆的想法也只是大胆的想法，但 ',
        me.get_colored_name(),
        ' 也还是低估了喜欢 ',
        urara.get_colored_name(),
        ' 的各位那高涨的热情。',
      ]);
      await era.printAndWait([
        '随便撇一眼周围的',
        urara.uma_sex_title,
        '与训练员们杀气腾腾的脸就看得出来，这里唯一不够紧张的可能只有 ',
        urara.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        '嘿嘿～大家的表情都好紧张啊……乌拉拉是不是也要表现的更紧张一点呢？',
      ]);
      await era.printAndWait([
        '顺着周围参赛者散发出的氛围压低了声线，',
        urara.get_colored_name(),
        ' 轻轻拽了拽 ',
        me.get_colored_name(),
        ' 的衣角。',
      ]);

      era.printButton(
        '「没、没关系，乌拉拉不用紧张的，只要把它当做一次对未来的模拟……」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '诶？',
        callname,
        ' 是觉得乌拉拉下一次还可以来吗？看来 ',
        callname,
        ' 和大家都很信任乌拉拉呢！',
      ]);
      await urara.say_and_wait([
        '但这可是 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 哦！',
        urara.get_colored_name(),
        ' 还被大家期望着，所以如果能赢、如果能赢的话——！',
      ]);
      await era.printAndWait([
        '听到 ',
        urara.get_colored_name(),
        ' 对胜利的愿望，',
        me.get_colored_name(),
        ' 本就疼痛的大脑因为负罪感更加摇摇欲坠了。',
      ]);
      if (best_mvp === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' 真的在思考赢下来的事，有可能吗？不知道啊。但既然赢下过重赏，那稍微寄予一些希望也……',
        ]);
        await era.printAndWait(
          '也什么也，问题大了去了，那能一样吗？就算不问三女神都知道这根本就不一样啊。',
        );
      } else {
        await era.printAndWait([
          '能赢的希望，何止有点渺茫，如今或许只有奇迹发生才能让小',
          urara.uma_sex_title,
          '赢下这场比赛吧。',
        ]);
        await era.printAndWait([
          '就算连三女神都能看见小',
          urara.uma_sex_title,
          '的努力，现在能回应',
          urara.sex,
          '的也只有愿意为',
          urara.sex,
          '应援的各位而已。',
        ]);
      }
      era.println();
      await era.printAndWait(
        '这下真是糟了，简直是训练员失格啊，果然现在就参与有马的决定还是太草率了。',
      );
      await era.printAndWait([
        '虽然本来也没想着胜利，但至少这次比赛，',
        urara.get_colored_name(),
        ' 如果能有充足的准备再来的话……',
      ]);
      era.println();
      if (era.get('relation:52:0') > 150) {
        await urara.say_and_wait([
          '乌拉拉没关系的哦？',
          callname,
          ' 只要和平时一样就好，因为我是不会浪费这次机会的！',
        ]);
        await era.printAndWait([
          '察觉到 ',
          me.get_colored_name(),
          ' 与以往不同的表情，小',
          urara.uma_sex_title,
          '大大方方的抱住了 ',
          me.get_colored_name(),
          '，露出了安抚孩童般的母亲的笑容。',
        ]);
        await urara.say_and_wait([
          '第一次惨败就在第二次时再站起来就好，乌拉拉不会有事的！那么 ',
          callname,
          '，要待会再见了！',
        ]);
        await urara.say_and_wait('比赛的时候，要一直注视着乌拉拉哦！');
      } else {
        await urara.say_and_wait([
          callname,
          ' 觉得苦恼吗？有什么关系嘛，我们一直以来不都是这么乱来吗？',
        ]);
        await era.printAndWait([
          '似乎是看穿了 ',
          me.get_colored_name(),
          ' 的心思，',
          urara.get_colored_name(),
          ' 突然安静地抱了过来，笑容温柔得像个无可奈何的母亲。',
        ]);
        await urara.say_and_wait([
          '而且已经到了要上场的时间了哦？',
          callname,
          ' 就和平常一样在看台上和大家一起等着我回来吧！',
        ]);
        await urara.say_and_wait('和以前一样，不要将眼神移开哦？');
      }
      era.println();
      await era.printAndWait([
        '在漫长的一瞬后小',
        urara.uma_sex_title,
        '的拥抱戛然而止，而紧接在 ',
        me.get_colored_name(),
        ' 的耳中响起的，则是比赛时登台的预告。',
      ]);
      await urara.say_and_wait([
        '心情变得平静一点了吗？嘿嘿～',
        callname,
        ' 总是容易积攒压力呢！',
      ]);
      await urara.say_and_wait([
        '但是有些事只有 ',
        callname,
        ' 可以完成哦？因为我们是 ',
        callname,
        ' 和担当嘛！',
      ]);
      await era.printAndWait([
        '仿佛成为了出战前的既定仪式，背着通道外的光线，',
        urara.get_colored_name(),
        ' 笑着向 ',
        me.get_colored_name(),
        ' 做着最后的挥手致意。',
      ]);
      await era.printAndWait([
        '同样挥手目送着 ',
        urara.get_colored_name(),
        ' 跑向赛场，终于 ',
        me.get_colored_name(),
        ' 也用力按了按太阳穴，转身走向了自己该去的地方。',
      ]);
      era.println();
      await era.printAndWait('但是。');
      await in_urara.say_as_unknown_and_wait(
        '……在离开之前，您可以再回答我一个问题吗？',
      );
      await era.printAndWait(
        '站在空无一人的选手通道中，一切融为灰白的环境中仿佛时间都按下了暂停键。',
      );
      await era.printAndWait([
        '而如今面向 ',
        me.get_colored_name(),
        ' 径直走来的，则是挂着陌生阴沉表情的，一直以来最熟悉的樱粉色。',
      ]);
      await era.printAndWait([
        '但',
        urara.sex,
        '不是 ',
        urara.get_colored_name(),
        '，尽管声音一模一样，生气时的小脸也完全一致，但',
        urara.sex,
        '绝对不是 ',
        urara.get_colored_name(),
        '；',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 既不会彬彬有礼到陌生，也绝对不会摆出如此阴暗复杂的表情；',
      ]);
      await era.printAndWait([
        urara.sex,
        '当然不是 ',
        urara.get_colored_name(),
        '，现在 ',
        urara.get_colored_name(),
        ' 已经走上赛场，既不会凭空从后方出现，也不会还穿着校服；',
      ]);
      await era.printAndWait([
        '但',
        urara.sex,
        '或许也是「',
        in_urara.get_colored_actual_name(),
        '」，或许 ',
        me.get_colored_name(),
        ' 和',
        urara.sex,
        '在梦中见过许多次，只是每当梦醒时分一切都会烟消云散——',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '我明明已经告诉过您了，为什么还要勉强',
        urara.sex,
        '……',
      ]);
      await era.printAndWait([
        '在连理智似乎都逐渐凝固的空间中，严厉的质问声正以 ',
        in_urara.get_colored_name(),
        ' 的模样不断逼近至 ',
        me.get_colored_name(),
        ' 的胸前。',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '我问您，为什么要让',
        urara.sex,
        '现在参加比赛……我在问您为什么要让乌拉拉现在就参加有马！',
      ]);
      await era.printAndWait([
        '恍惚中的迟疑似乎点燃了',
        urara.teen_sex_title,
        '的怒火，积蓄的愤怒以',
        urara.uma_sex_title,
        '的力度将 ',
        me.get_colored_name(),
        ' 的身体摁在了通道的墙面上。',
      ]);
      await era.printAndWait([
        '撞击的痛感从后背逐渐扩散至全身，也给迷惘中的 ',
        me.get_colored_name(),
        ' 带来了一点刺激性的清醒。',
      ]);
      await era.printAndWait([
        '被凝固的世界并不是梦境，眼前的「',
        in_urara.get_colored_actual_name(),
        '」也真实的存在着。',
      ]);
      await era.printAndWait([
        '但是扯住身体的重压只持续了几秒，娇小的樱色',
        urara.uma_sex_title,
        '就如同哭泣般无力的松开了 ',
        me.get_colored_name(),
        ' 的衣襟。',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '所以才一个两个都一样，就算放着不管，也会不停地做出改变，哪怕会害得自己……',
      );
      await era.printAndWait([
        '没能将呜咽般的话语延续下去，带着抑制住悲伤的微笑，「',
        in_urara.get_colored_actual_name(),
        '」抬头抚平了 ',
        me.get_colored_name(),
        ' 的衣角。',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '抱歉，是我失态了。从一开始，我就不该指望您会停下的……',
      );

      era.printButton(
        '「对不起，虽然不知道发生了什么，但是我得去看担当的比赛……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '面对眼前称得上诡异的情况，',
        me.get_colored_name(),
        ' 却冷静的出奇，仅是打算绕开眼前的',
        urara.uma_sex_title,
        '，再去守望 ',
        urara.get_colored_name(),
        ' 的比赛。',
      ]);
      await era.printAndWait([
        '就像现在面对的不止是「异样的 ',
        urara.get_colored_name(),
        '」，也是一位虽然不知姓名但却熟悉已久的「麻烦朋友」。',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '您是在担心『乌拉拉』吗？没关系的，',
        urara.sex,
        '还不至于让你为此如此着急。',
      ]);

      era.println();
      if (era.get('relation:52:0') > 150) {
        await in_urara.say_as_unknown_and_wait(
          '不过您的心情我理解哦？您的确在真心的关照乌拉拉，也难怪乌拉拉会如此依靠您。',
        );
        await era.printAndWait([
          '温和地挡在 ',
          me.get_colored_name(),
          ' 的身前，未闻其名的麻烦朋友像在安抚心绪般露出了与小',
          urara.uma_sex_title,
          '如出一辙的笑容。',
        ]);
      } else {
        await in_urara.say_as_unknown_and_wait([
          '明明平时对乌拉拉也没有多关怀的样子？为什么这么紧张呢？训练员',
          me.get_adult_sex_title(),
          '（您）？',
        ]);
        await era.printAndWait([
          '不依不饶的拦下 ',
          me.get_colored_name(),
          ' 的去路，连姓甚名谁都是未知的「朋友」嘲笑着眼前莫名心慌的不及格大人。',
        ]);
      }
      era.println();
      await in_urara.say_as_unknown_and_wait([
        '这不就是您与',
        urara.sex,
        '想做出的改变吗？所以，现在请稍微耐心一点吧。',
      ]);
      await era.printAndWait([
        urara.sex,
        '说的或许没错……不对，',
        urara.sex,
        '大概是正确的。在静默的空气中，',
        me.get_colored_name(),
        ' 无条件信任般的停下了脚步。',
      ]);
      await era.printAndWait([
        '转身望去，换上了不喜不悲的「面具」的「',
        urara.sex,
        '」在原地等待着「您」的注意。',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '现在，让我给您讲个小故事吧，不需要多少时间的……',
      );
      await era.printAndWait([
        '向前一步与 ',
        me.get_colored_name(),
        ' 并肩望向通道外侧，与樱粉色的',
        urara.teen_sex_title,
        '摇晃着双耳与尾巴，将手伸向了阴晴难定的天空。',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '那是一位渺小到不能再渺小的……',
        urara.uma_sex_title,
        '的故事。',
      ]);
    } else {
      await print_event_name('迎向结局——', urara);
      await in_urara.say_as_unknown_and_wait(
        '……喂喂？听得见吗？您果然一直有在听啊，那就适当地继续这个故事吧。',
      );
      await in_urara.say_as_unknown_and_wait(
        '这个故事可能中途没能让您满意，或许直到结局都满是缺憾，甚至还得让人学着告别。',
      );
      await in_urara.say_as_unknown_and_wait(
        '但也正因如此，也感谢您愿意与我们一路上结伴而行，那么准备好了吗？',
      );
      await in_urara.say_as_unknown_and_wait([
        '这是一位渺小到不能再渺小，但也是任何人都无可替代的，名为『',
        urara.get_colored_actual_name(),
        '』的小',
        urara.uma_sex_title,
        '的故事——',
      ]);
      era.drawLine();
      await era.printAndWait(
        `${era.get('flag:当前年')} 年 12 月 22 日，中山竞马场。`,
      );
      await era.printAndWait('万里晴空下，祝福环绕，故事将越过结局。');
      await era.printAndWait('鼎沸人声里，晚春之樱，愿在严冬中满开。');
      await era.printAndWait('这是「我们」一同写下的故事——');

      era.printButton('所以，跑起来吧，春乌拉拉。', 1);
      await era.input();
    }
  };

  handlers[race_enum.negi_sta] = async (urara, me, in_urara, callname) => {
    await print_event_name(
      ['迎向 ', race_infos[race_enum.negi_sta].get_colored_name(), '！'],
      urara,
    );
    await in_urara.say_as_unknown_and_wait('虽然提不起精神可以理解，但是……');
    await in_urara.say_as_unknown_and_wait('算了，别随随便便就好。');
    era.drawLine();

    era.printButton('「乌拉拉，准备好了吗？今天的比赛。」', 1);
    await era.input();

    await urara.say_and_wait(['好——！不过 ', callname, '，今天的是重赏吗？']);

    era.printButton('「今天是重赏哦？不过别被其他人的气氛影响了哦？」', 1);
    await era.input();

    await urara.say_and_wait([
      '嗯！总感觉这次 ',
      callname,
      ' 选择的比赛和以前有什么相同的又有什么不同的呢？',
    ]);
    await urara.say_and_wait('不过气、氛……？这个词这次乌拉拉没念错呢！嘿嘿～');

    era.printButton(
      '「……在意外的地方有进步啊，总之按照以往的步调，和以前一样加油地上吧。」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '平静地站在选手通道内，',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 两人在赛前进行着时有时无的闲聊。',
    ]);
    await era.printAndWait(
      '可能会有路人产生疑惑，说这如「中午吃了什么」一般的对话，真是在重赏之前进行的吗？',
    );
    await era.printAndWait(
      '尽管两人的举动就像答了一个不够严肃的「是」，但至少不是没精打采，只是实在紧张不起来而已。',
    );
    await era.printAndWait(
      '两人在以前的确想过很多重赏时的可能性，但等到资深年站上赛场后，却发现没什么大不了的。',
    );
    await era.printAndWait([
      '因为',
      urara.sex,
      '是「',
      urara.get_colored_name(),
      '」，而 ',
      me.get_colored_name(),
      ' 是',
      urara.sex,
      '的「训练员」，不管会输还是能赢，只要每次都能跑出全力就好。',
    ]);
    await era.printAndWait([
      '只是就结果而言还是选择来到这里了啊，',
      race_infos[race_enum.negi_sta].get_colored_name(),
      '。',
    ]);
    const race_history = RaceHistory.get(52);
    if (
      race_history
        .get_values()
        .findIndex((e) => race_infos[e.race].race_class <= class_enum.G3) !== -1
    ) {
      await era.printAndWait([
        '要说为什么来了，主要还是像以前说好的那样，带 ',
        urara.get_colored_name(),
        ' 来试试资深年的水深。',
      ]);
      await era.printAndWait([
        '不过还是希望能和以往的重赏不一样，这次比赛让 ',
        urara.get_colored_name(),
        ' 多少跑得更轻松一些。',
      ]);
    } else {
      await era.printAndWait([
        '虽然不是它也可以，但毕竟这是 ',
        urara.get_colored_name(),
        ' 第一次参与重赏，所以多少挑了一个对 ',
        urara.get_colored_name(),
        ' 来说简单点的。',
      ]);
      await era.printAndWait([
        '不过以 ',
        urara.get_colored_name(),
        ' 现在的状态，即使输了应该也不会和最初时一样让人摸不着头脑才对。',
      ]);
    }
    const arim_kin_check = race_history.get_result(47 + 48);
    if (arim_kin_check?.race === race_enum.arim_kin) {
      if (arim_kin_check?.rank === 1) {
        await me.say_and_wait(
          '而且最重要的，有马我们……好像跑赢了来着？这次就算真没提起劲来，应该也没人怪我们吧……？',
          true,
        );
      } else {
        await era.printAndWait([
          '毕竟是已经参与过过 ',
          race_infos[race_enum.arim_kin].get_colored_name(),
          ' 了，',
          urara.get_colored_name(),
          ' 紧张不起来倒也算在意料之内。',
        ]);
        await era.printAndWait([
          '所以目前可以预见的是，不管最后有没有跑好，',
          urara.get_colored_name(),
          ' 这次应该都不会有太大的情绪波动。',
        ]);
      }
    }
    era.println();
    await urara.say_and_wait(['那么 ', callname, '，我出发了哦──！']);
    await era.printAndWait([
      '随着与登场提醒一同响起的轻快呼声中，',
      urara.get_colored_name(),
      ' 向前一步后冲 ',
      me.get_colored_name(),
      ' 举起了手。',
    ]);

    era.printButton('「哦！记得跑得开心一点哦？」', 1);
    await era.input();

    await era.printAndWait([
      '在两人最熟悉不过的招手回应中，',
      urara.get_colored_name(),
      ' 又一次出发跑向了赛场——',
    ]);
  };
};
