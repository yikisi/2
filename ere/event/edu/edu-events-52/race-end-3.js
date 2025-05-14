const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const crazy_fans = require('#/data/event/crazy-fans');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number},UraraEduMarks):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[`${race_enum.elm_sta}_${95 + 29}`] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    if (extra_flag.rank === 1) {
      await print_event_name('一定会变得更强！', urara);
      await in_urara.say_as_unknown_and_wait(
        '又赢了啊，乌拉拉的状态也……就连我都对您产生了多余的信心了。',
      );
    } else {
      await print_event_name('我会更努力的！', urara);
      await in_urara.say_as_unknown_and_wait(
        '又输了吗？不过乌拉拉的状态还不错，就连我都对您产生了多余的信心了。',
      );
    }
    await in_urara.say_as_unknown_and_wait([
      '只是',
      urara.sex,
      '的样子……我就暂时先祝福您吧，虽然我本来就不应该责怪您。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '既然您的心里还想着结局的圆满落幕，就试着与',
      urara.sex,
      '坚持到最后吧。',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '不要在那之前，连',
      urara.sex,
      '的笑容都失去了。',
    ]);
    era.drawLine();
    await era.printAndWait([
      '刚走进选手通道内，赢下比赛的小',
      urara.get_uma_sex_title(),
      '便不顾身体的疲倦立刻冲向了 ',
      me.get_colored_name(),
      ' 的身边。',
    ]);
    if (extra_flag.rank === 1) {
      await era.printAndWait([
        '看来召集大家一起完成的计划成功了。带着迎接 ',
        urara.get_colored_name(),
        ' 笑容的心情，',
        me.get_colored_name(),
        ' 也迎向了自己的担当。',
      ]);
      await era.printAndWait([
        '但还没等 ',
        me.get_colored_name(),
        ' 向 ',
        urara.get_colored_name(),
        ' 道出比赛辛苦的问候，小',
        urara.get_uma_sex_title(),
        '就立刻牵起 ',
        me.get_colored_name(),
        ' 的手跑向了后场的方向。',
      ]);
      await urara.say_and_wait([
        callname,
        '，等事情都弄好之后，我们今天就赶回去吧！',
      ]);

      era.printButton('「别着急，好不容易拿到第一，不先休息一下吗？」', 1);
    } else {
      await era.printAndWait([
        '召集大家的计划应该成功了吧？带着安慰 ',
        urara.get_colored_name(),
        ' 的准备，',
        me.get_colored_name(),
        ' 也赶紧迎向自己的担当。',
      ]);
      await era.printAndWait([
        '但还没等 ',
        me.get_colored_name(),
        ' 向',
        urara.sex,
        '说出第一句安慰，小',
        urara.get_uma_sex_title(),
        '就立刻牵起 ',
        me.get_colored_name(),
        ' 的手跑向了后场的方向。',
      ]);

      era.printButton('「怎么了？好不容易跑完比赛，不先休息一下吗？」', 1);
    }
    await era.input();
    await era.printAndWait([
      '感受到了 ',
      urara.get_colored_name(),
      ' 异常的 ',
      me.get_colored_name(),
      ' 慌忙停下脚步，但却差点被 ',
      urara.get_colored_name(),
      ' 拽了个踉跄。',
    ]);
    await era.printAndWait([
      '带着诧异抬起头，',
      me.get_colored_name(),
      ' 的确看到了 ',
      urara.get_colored_name(),
      ' 的笑容，只是那与想象中的温和治愈依旧相去甚远。',
    ]);
    await urara.say_and_wait(
      '但是还是训练更要紧吧？现在距离年底没多长时间了，乌拉拉还要变得更强才行！',
    );
    await era.printAndWait([
      '或者说，现在 ',
      urara.get_colored_name(),
      ' 所呈现出的笑容，比起',
      urara.sex,
      '往日的快乐，占据主要位置的竟然是……疲惫的虚无。',
    ]);
    if (extra_flag.rank === 1) {
      await urara.say_and_wait(
        '只要继续赢下去，一定就能被大家认同吧！只要我被认同，大家一定会变得更开心！',
      );
      await urara.say_and_wait(
        '就连被乌拉拉不小心伤害到的人，一定、一定也能……',
      );
      era.printButton('「乌拉拉，冷静一点，欲速则不达啊。」', 1);
    } else {
      await urara.say_and_wait(
        '大家希望乌拉拉赢下来，但我没能回应他们的心意，所以现在必须更努力！',
      );
      await urara.say_and_wait([
        '而且如果没法证明自己的话……',
        urara.sex,
        '也……',
        urara.sex,
        '也不会原谅乌拉拉吧……',
      ]);
      era.printButton('「乌拉拉，冷静一点。」', 1);
    }
    await era.input();
    await urara.say_and_wait(
      '嗯？乌拉拉很冷静哦！没事的啦！接下来就这样回去安排训练吧？',
    );
    await era.printAndWait([
      '「既然这样，下场比赛也要得第一名」，注视着 ',
      urara.get_colored_name(),
      ' 几近枯萎的樱瞳，这样的话不可能说得出口。',
    ]);
    await era.printAndWait([
      '与大家一起鼓励 ',
      urara.get_colored_name(),
      ' 的计划的确成功了，只是表面症状虽得到缓解，剩下的病根却扎得太深。',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 现在不一样了，如今的',
      urara.sex,
      '完全具备了只为目标取胜的心态，但也直接把自己摆在了悬崖边上。',
    ]);
    await era.printAndWait([
      '如果现在不能让 ',
      urara.get_colored_name(),
      ' 慢下来，那',
      urara.sex,
      '回去之后一定会不管不顾的乱冲的。',
    ]);
    await era.printAndWait([
      '但若是想现在稳住',
      urara.sex,
      '的心绪，也只能先听小',
      urara.get_uma_sex_title(),
      '讲完',
      urara.sex,
      '下一步希望如何奔跑了。',
    ]);
    if (era.get('relation:52:0') > 150) {
      if (extra_flag.rank === 1) {
        await urara.say_and_wait([
          '没问题的，',
          callname,
          ' 不用担心哦？我会让 ',
          callname,
          ' 看到胜利的！',
        ]);
        await urara.say_and_wait(
          '现在的乌拉拉没准连G1也能轻松赢下来哦！所以下一次，请让乌拉拉继续挑战G1吧！',
        );
      } else {
        await urara.say_and_wait([
          '没问题的，',
          callname,
          ' 不用担心哦？下次乌拉拉会赢下来的。',
        ]);
        await urara.say_and_wait(
          '而且现在还需要更多的人认同乌拉拉吧？所以下一次请让乌拉拉继续挑战G1吧！',
        );
      }
      await era.printAndWait([
        '在尝试着跳进 ',
        me.get_colored_name(),
        ' 的怀中后，',
        urara.get_colored_name(),
        ' 求生的欲望依旧步步紧逼，但至少笑容终于逐渐恢复了平常。',
      ]);
    } else {
      if (extra_flag.rank === 1) {
        await urara.say_and_wait(
          '没关系的，我下次会继续为了大家与一着奔跑的！',
        );
        await urara.say_and_wait(
          '所以下次就让乌拉拉继续参加G1吧！现在的我一定能赢下来的！',
        );
      } else {
        await urara.say_and_wait(
          '没关系的，下次还有机会对吧！而且输掉了就更没办法放松了对吧？',
        );
        await urara.say_and_wait(
          '所以下次让乌拉拉参加G1吧！现在不得到大家的认可是不行的啊。',
        );
      }
      await era.printAndWait([
        '小心翼翼地环住 ',
        me.get_colored_name(),
        ' 的腰间，',
        urara.get_colored_name(),
        ' 虽然话语仍然紧张，但表情也多少柔和了下来。',
      ]);
    }
    await era.printAndWait([
      '亲口说出了自己强烈的参赛意愿，看来 ',
      urara.get_colored_name(),
      ' 的成长远远超乎想像。',
    ]);
    await era.printAndWait([
      '当然如果',
      urara.sex,
      '不是在几乎是压榨自己的前提下讲出来，',
      me.get_colored_name(),
      ' 还能更高兴一些。',
    ]);
    await era.printAndWait([
      '只是一想到',
      urara.sex,
      '现在「狂热」的样子，就算',
      urara.sex,
      '所说的是实话，',
      me.get_colored_name(),
      ' 也只会感到沉重而已。',
    ]);

    era.printButton(
      '「『JBC短途赛』吧，我暂时推荐这个，而且距下次的时间还挺长的，所以着急也没用哦？」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '诶？嗯……那既然 ',
      callname,
      ' 说了，乌拉拉就先忍耐一下好了……',
    ]);
    await era.printAndWait([
      '泥地、短距离，对现在的 ',
      urara.get_colored_name(),
      ' 来说的确是非常有机会能得第一名的比赛，同时也是 ',
      me.get_colored_name(),
      ' 的缓兵之策。',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 满足了吗？至少现在小',
      urara.get_uma_sex_title(),
      '终于安稳下来，也没有再强硬地闹着要的回去。',
    ]);
    await era.printAndWait([
      '只是这一次，就连 ',
      me.get_colored_name(),
      ' 也有些担心，是否能与 ',
      urara.get_colored_name(),
      ' 平安的度过三年中的最后几个月了。',
    ]);
    await era.printAndWait(
      '成败在此一举，选择撑下去就总会有突破口，尽全力上吧。',
    );
    if (extra_flag.rank === 1) {
      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.pt_change = 45;
    } else {
      extra_flag.attr_change = new Array(5)
        .fill(1)
        .map((e) => e + (Math.random() < 0.5));
      extra_flag.pt_change = 30;
    }
  };

  handlers[`${race_enum.jbc_spr}_${95 + 41}`] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    await print_event_name('前进、前进……', urara);
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
    extra_flag.skill_change = [201002];
    if (extra_flag.rank === 1) {
      await urara.print_and_wait(
        '刚刚从身边过去的，应该是终点板没错吧……乌拉拉，赢了吗？',
      );
      await urara.print_and_wait(
        '太好了，今天的乌拉拉也没有输给任何人，乌拉拉有得到大家的认可吗？大家一定能很开心吧?',
      );
      await urara.print_and_wait(
        '今天的状态果然很好呢，虽然身体有些迟钝，但是已经不会再痛了，全身难受的感觉都消失了……',
      );
    } else {
      await urara.print_and_wait(
        '比赛已经结束了吗？这么说来……乌拉拉又输了吗？',
      );
      await urara.print_and_wait(
        '这样可不行啊，回去之后一定要好好训练呢，下一次一定还有机会……',
      );
      await urara.print_and_wait(
        '而且身体状态也恢复了，身体已经不会再痛了，全身难受的感觉也都消失了……',
      );
    }
    await urara.print_and_wait(
      '但是大家的眼神为什么这么奇怪呢？是因为现在乌拉拉的表情看起来很糟糕吗？',
    );
    await urara.print_and_wait(
      '没关系的，乌拉拉只是有点头晕而已，马上就会露出笑容的，所以大家不用担心……',
    );
    await urara.print_and_wait([
      '……',
      callname,
      '！今天乌拉拉也拿到一着哦！虽然很害怕，虽然很讨厌，但是乌拉拉赢下来了哦！',
    ]);
    await urara.print_and_wait(
      '所以不要带着这么可怕的表情啦，这样翻过赛道护栏很危险的，大家也是，都笑一笑吧……',
    );

    era.printButton('「乌拉拉！没事吧？还听得见我说话吗？——？！」', 1);
    await era.input();

    await urara.print_and_wait([
      callname,
      '，担心过头了哦？乌拉拉只是有点累了，才不需要这么着急得跑过来……',
    ]);
    await urara.print_and_wait([
      '但是，是不是 ',
      callname,
      ' 的声音越来越小了，为什么乌拉拉逐渐听不清 ',
      callname,
      ' 在说什么呢？',
    ]);
    await urara.print_and_wait(
      '好奇怪，为什么手伸不起来？为什么双腿动不了？为什么感觉不到身体了？',
    );
    await urara.print_and_wait(
      '好奇怪，为什么视野越来越窄了？为什么天空越来越暗了？',
    );
    await urara.print_and_wait('好奇怪，为什么说不出话了？');
    await urara.print_and_wait('……');
    await urara.print_and_wait(
      '……好疼、好黑……乌拉拉是摔倒了吗？到底发生了什么……',
    );
    await urara.print_and_wait('……好可怕……乌拉拉要被大家丢下了吗？不要……');
    await urara.print_and_wait('……乌拉拉明明还可以奔跑的……');
    await urara.print_and_wait(['……', callname, '……']);
    if (extra_flag.rank === 1) {
      era.drawLine();
      await in_urara.print_and_wait('致舞台中央的主角：');
      await in_urara.print_and_wait(
        '由舞台道具制成的翅膀还是太脆弱了啊，但是就算坠落也没关系不是吗？',
      );
      await in_urara.print_and_wait(
        '觉得害怕的话，就去自己的心里躲一躲吧；觉得累了的话，就让疲惫的花朵枯萎吧。',
      );
      await in_urara.print_and_wait(
        '觉得不安的话，就像可靠的人寻求庇护吧；觉得坚持不住的话，就算逃跑也不会有人责怪哦？',
      );
      await in_urara.print_and_wait(
        '没事的，我会一直保护乌拉拉的，无论何时，这不是早就约好的事情吗？',
      );

      await in_urara.print_and_wait('致站在幕后的训练员：');
      await in_urara.print_and_wait([
        '真遗憾啊，就差一点了不是吗？结果羽翼融化，',
        urara.sex,
        '终究是变成了平凡的他人的样子。',
      ]);
      await in_urara.print_and_wait([
        '但是这并不是您的错，只是您与',
        urara.sex,
        '都做过头了而已。这不是，把养料都耗尽了吗？',
      ]);
      await in_urara.print_and_wait(
        '而且我说过了吧，我会将续写故事的权力，握在自己手里。',
      );
      await in_urara.print_and_wait(
        '我说过了我不会怪您的，但是待到下次正式相谈时，还请做好心理准备。',
      );
    } else {
      crazy_fans.push(52);
    }
  };
};
