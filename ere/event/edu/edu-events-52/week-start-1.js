const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.after_begin = async (urara, me, in_urara, callname) => {
    await print_event_name('乌拉拉式训练', urara);
    await in_urara.say_as_unknown_and_wait([
      '旁观着乌拉拉的奔跑，训练员',
      me.adult_sex_title,
      '（您）还在思考着',
      urara.sex,
      '专属的训练计划。',
    ]);
    era.drawLine();
    await urara.say_and_wait(['嗳嗳！', callname, '！你看那边——']);

    era.printButton('「现在还在训练中哦？」', 1);
    await era.input();

    await urara.say_and_wait('对不起！那我再去跑一圈了！');
    await era.printAndWait([
      '看着担当再次投入训练，',
      me.get_colored_name(),
      ' 继续对小',
      urara.uma_sex_title,
      '行为模式进行着梳理。',
    ]);
    await era.printAndWait([
      '在陪 ',
      urara.get_colored_name(),
      ' 开始训练的一段时间后，',
      me.get_colored_name(),
      ' 逐渐摸清了构成',
      urara.sex,
      '现状的部分事项。',
    ]);
    await era.printAndWait([
      '首先，',
      urara.sex,
      '很没定性，不过缺乏集中力这点也是',
      urara.sex,
      '的性格所致，也正因如此……',
    ]);
    await urara.say_and_wait([callname, '，这边的大家好像有——']);

    era.printButton('「咳咳。」', 1);
    await era.input();

    await urara.say_and_wait('对不起哦！这边还要继续训练，下次再聊吧！');
    await era.printAndWait([
      '就是这样，虽然只要出声提醒',
      urara.sex,
      '就会反省，但又会立刻分心，被更有趣的事吸引走。',
    ]);
    await era.printAndWait(
      '每天都是如此断断续续，竞争心也不足，这样下去训练是不会有效果的。',
    );
    await era.printAndWait([
      '实际上，在 ',
      me.get_colored_name(),
      ' 特意去询问与 ',
      urara.get_colored_name(),
      ' 相熟的',
      urara.uma_sex_title,
      '们时，',
      urara.couple_title,
      '给出的答案也不尽相似。',
    ]);
    era.println();

    const talk_arr = gacha(
      [
        () =>
          get_chara_talk(61).say_and_wait([
            '有一流的目标是好的，可 ',
            sys_get_colored_callname(61, 52),
            ' 无法持续训练对',
            urara.sex,
            '自己也不好吧？',
          ]),
        () =>
          get_chara_talk(20).say_and_wait([
            '啊～我明白啦，',
            sys_get_colored_callname(20, 0),
            ' 最近是被 ',
            sys_get_colored_callname(20, 52),
            ' 的坏习惯搞得很辛苦吧？',
          ]),
        () =>
          get_chara_talk(1).say_and_wait([
            sys_get_colored_callname(1, 52),
            ' 带来的胡萝卜很好吃！只是经常会粗心到忘记给到哪里了。',
          ]),
        () =>
          get_chara_talk(30).say_and_wait([
            '诶？',
            sys_get_colored_callname(30, 52),
            ' 的话，虽然很喜欢跑步，但心情上总缺一点耐性呢……',
          ]),
        () =>
          get_chara_talk(77).say_and_wait([
            sys_get_colored_callname(77, 52),
            ' 很厉害……总之就是很厉害！只是稍微有点不擅长功课！',
          ]),
        () =>
          get_chara_talk(15).say_and_wait(
            '嗯嗯～花儿在挑剔的吸收养分，但含苞待放是犹豫的一种也说不定哦？',
          ),
        () =>
          get_chara_talk(58).say_and_wait([
            sys_get_colored_callname(58, 52),
            ' 每次都愿意帮我收拾麻烦，虽然有时候会变得更麻烦呢……',
          ]),
      ],
      3,
    );
    for (const talk of talk_arr) {
      await talk();
    }
    era.println();

    await era.printAndWait([
      '即使是在同学之间，',
      urara.get_colored_name(),
      ' 的各种小毛病也是出了名的。',
    ]);
    await era.printAndWait([
      '而且理论上说只要满足 ',
      urara.get_colored_name(),
      ' 的「有趣」就可以，但这样又该纳入哪些内容呢……',
    ]);
    await era.printAndWait([
      '看来还是想象力不足。为了想出对策，当务之急自己必须更加了解 ',
      urara.get_colored_name(),
      ' 才行。',
    ]);
    await era.printAndWait([
      '一边将买下的必需品装进袋子，',
      me.get_colored_name(),
      ' 若有所思地前往了商店街的下一家店。',
    ]);
    await urara.say_and_wait([
      '啊、',
      callname,
      '！欢迎光临哦！这里有超好吃的苹果哦！要不要买一些啊？',
    ]);

    era.printButton('「嗯、嗯？乌拉拉？你是……在这里帮忙吗？」', 1);
    await era.input();

    await urara.say_and_wait(
      '没错哦！只要有空我都会来这边帮忙的！会很开心哦！',
    );
    await era.printAndWait([
      '在校服外简单的系着围裙，',
      urara.get_colored_name(),
      ' 笑容满面的凑了过来。',
    ]);

    const relation = era.get('relation:52:0');
    if (relation > 150) {
      await urara.say_and_wait([
        callname,
        ' 要尝尝吗？没关系的，店长叔叔已经同意了！',
      ]);
      await era.printAndWait([
        '不由分说的挑了一颗最大的苹果塞到了 ',
        me.get_colored_name(),
        ' 的手中，',
        urara.get_colored_name(),
        ' 似乎在示意现在就尝一尝。',
      ]);
      await era.printAndWait([
        '刚洗过的果实上挂着晶莹的水珠，表皮光滑的反射着 ',
        urara.get_colored_name(),
        ' 比苹果还要饱满可人的小脸。',
      ]);
      await urara.say_and_wait(
        '今天的苹果是店长叔叔推荐的，绝对很甜的，我可以保证哦！',
      );
    } else {
      await urara.say_and_wait([
        '这边可以给 ',
        callname,
        ' 便宜一些哦？当然已经经过店长叔叔同意了！',
      ]);
      await era.printAndWait([
        '虽然脸上笑容是真实的，但 ',
        urara.get_colored_name(),
        ' 的话语却有些生分的意味在里面。',
      ]);
      await era.printAndWait([
        '不过尽管如此，',
        urara.sex,
        '还是拿出一颗很大的苹果塞在了 ',
        me.get_colored_name(),
        ' 的手中。',
      ]);
      await urara.say_and_wait([
        '如果拿不定主意的话 ',
        callname,
        ' 先尝尝也可以哦？很好吃的！',
      ]);
    }
    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      '哦，欢迎啊！你是乌拉拉的朋友吗？这样我得多送你一些才行！',
    );
    await urara.say_and_wait(['不只是朋友哦叔叔！这位也是乌拉拉的训练员！']);
    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      '哦哦，原来是训练员……训练员？！乌拉拉的吗？',
    );
    await era.printAndWait([
      '闻声走来的店主大叔在听到 ',
      urara.get_colored_name(),
      ' 的回答后先是一愣，随后突然向街上跑去——',
    ]);
    await era.printAndWait([
      '前后仅仅不到五分钟，商店街的街坊邻居们就在 ',
      me.get_colored_name(),
      ' 与 ',
      urara.get_colored_name(),
      ' 的身边围了个水泄不通。',
    ]);
    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      '哎呀，乌拉拉终于也有签约训练员了啊！真是可喜可贺！',
    );
    await CharaTalk.say_by_passer_by_and_wait(
      '商店街的人',
      '这下出道也有保证了，以后小乌拉拉有比赛大家一定会去加油的！',
    );
    await CharaTalk.say_by_passer_by_and_wait('商店街的人', [
      '训练员',
      me.adult_sex_title,
      '！这孩子虽然有点冒失，但',
      urara.sex,
      '很努力哦！',
    ]);

    era.printButton('「嗯！之后也请交给我吧！」', 1);
    await era.input();

    await era.printAndWait([
      '一边回应着周围如潮水般涌来的祝福与期望，',
      me.get_colored_name(),
      ' 悄悄地看向了一旁的 ',
      urara.get_colored_name(),
      '——',
    ]);

    if (relation > 150) {
      await CharaTalk.say_by_passer_by_and_wait(
        '商店街的人',
        '虽然未来有了保证是好事，可是乌拉拉不会是被人骗了吧？',
      );
      await CharaTalk.say_by_passer_by_and_wait(
        '商店街的人',
        '在这里说什么晦气的话呢？再说了你看乌拉拉不是很开心吗？',
      );
      await CharaTalk.say_by_passer_by_and_wait('商店街的人', [
        '可是我也有听说特雷森的训练员很多都会和担当',
        urara.uma_sex_title,
        '……',
      ]);
      await CharaTalk.say_by_passer_by_and_wait(
        '商店街的人',
        '那你急什么啊？怎么？乌拉拉以后找到了喜欢的人你也不服气？',
      );
      await era.printAndWait('嗯……这种时候该说什么好呢……');
    } else {
      await CharaTalk.say_by_passer_by_and_wait(
        '商店街的人',
        '要是乌拉拉以后也能顺顺利的就好了，但好像又不是那样？',
      );
      await CharaTalk.say_by_passer_by_and_wait(
        '商店街的人',
        '说什么不中听的话呢？怎么能对乌拉拉的训练员说这样的话啊？',
      );
      await CharaTalk.say_by_passer_by_and_wait(
        '商店街的人',
        '可是乌拉拉看上去不太高兴的样子……',
      );
      await CharaTalk.say_by_passer_by_and_wait('商店街的人', [
        '什么啊？那不是你每次都让乌拉拉干一大堆活把',
        urara.sex,
        '累着了吗？',
      ]);
      await era.printAndWait('……果然现在还是别说多余的话吧……');
    }

    await era.printAndWait([
      '看来这条街上的各位真的非常喜欢 ',
      urara.get_colored_name(),
      ' 啊，总觉得逐渐明白 ',
      urara.get_colored_name(),
      ' 的优势在哪里了。',
    ]);
    await era.printAndWait([
      '在那之后，商店街的店家们一边说着「因为 ',
      urara.get_colored_name(),
      ' 受你照顾了」，一边分别送上了伴手礼。',
    ]);
    await me.say_and_wait('只是，这些赠品是不是太多了……？', true);
    await era.printAndWait([
      '虽然 ',
      me.get_colored_name(),
      ' 并不觉得自己如此有功，不如说是 ',
      urara.get_colored_name(),
      ' 在最初先照顾了 ',
      me.get_colored_name(),
      ' 才对。',
    ]);
    await era.printAndWait([
      '但就算再不好意思，',
      me.get_colored_name(),
      ' 一时也想不出该如何拒绝掉这份一股脑丢过来的庞大好意。',
    ]);
    await urara.say_and_wait([callname, '，收到好多哦！我来帮忙拿吧！']);
    await era.printAndWait([
      '而在发现别人的为难后，',
      urara.get_colored_name(),
      ' 便说着要帮忙，一边快速地把包围着 ',
      me.get_colored_name(),
      ' 的东西都挨个叠在了自己的身上。',
    ]);

    era.printButton('「量力而行啊！要帮忙的话只拿这些就好……」', 1);
    await era.input();

    await urara.say_and_wait([
      '没关系的，全都交给我吧！乌拉拉可是',
      urara.uma_sex_title,
      '哦……呜诶，好重！但我会加油的！',
    ]);
    await era.printAndWait([
      '笑着拒绝了 ',
      me.get_colored_name(),
      ' 的提议，',
      urara.get_colored_name(),
      ' 用尽全力背起了几乎与自己相当的东西，接下来似乎每走一步都相当专注……',
    ]);
    await me.say_and_wait('嗯？等下，专注起来了？在这个时候？', true);
    await era.printAndWait([
      '终于有了合适的训练灵感的 ',
      me.get_colored_name(),
      '，轻轻跟还围在一旁的商店街的各位打了声招呼——',
    ]);
    era.println();
    await urara.say_and_wait(
      '嗯！是要把这箱苹果搬过去，越快越好对吧？我明白了！但是……',
    );

    era.printButton('「但、但是？」', 1);
    await era.input();

    await urara.say_and_wait(
      '不用勉强自己也可以哦？搬东西的话，乌拉拉一个人就可以的！',
    );

    era.printButton(
      '「没、没、没关系的，说好了要一起帮忙的，而且我觉得我应该还行——」',
      1,
    );
    await era.input();

    await CharaTalk.say_by_passer_by_and_wait('商店街的孩子们', [
      '乌拉拉姐姐！变慢了的话就要赶不上了哦？',
    ]);
    await urara.say_and_wait('啊！大家跑得慢一点哦！要注意安全！');
    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 觉得自己的腰马上就要断掉之前，住在商店街附近的小',
      urara.uma_sex_title,
      '们从就 ',
      me.get_colored_name(),
      ' 身边分过了 ',
      me.get_colored_name(),
      ' 的负重。',
    ]);
    await era.printAndWait([
      '背起货箱，',
      urara.get_colored_name(),
      ' 追着小',
      urara.uma_sex_title,
      '们的步伐认真地跑了起来，而 ',
      me.get_colored_name(),
      ' 则在完成阶段性任务后差点瘫坐在地上。',
    ]);
    await era.printAndWait([
      '在得到商店街的各位的协助后，能够发挥 ',
      urara.get_colored_name(),
      ' 主观积极性的训练方法成功的运转起来。',
    ]);
    await era.printAndWait([
      '关于 ',
      urara.get_colored_name(),
      ' 的训练持续性的问题算是基本解决了，训练的成效估计很快就可以看见。',
    ]);
    await era.printAndWait([
      '至于每天训练结束后身体都要透支了……',
      me.get_colored_name(),
      ' 觉得这除了某人还是缺乏锻炼之外没有任何问题。',
    ]);
    await era.printAndWait(
      '才怪。以后都照这样练，要是运气好没进医院，恐怕某人都能自己去跑比赛了。',
    );
    await era.printAndWait([
      '不过又该如何提升 ',
      urara.get_colored_name(),
      ' 的竞争意识，这大概又是另一个长期课题了。',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '当然您目前还不知道的是，这一忧虑会在未来的某件事后迎刃而解——',
    );
    await in_urara.say_as_unknown_and_wait(
      '我明白这样的剧透您不会满意，不过至少在最初我希望您能安心。',
    );
    await in_urara.say_as_unknown_and_wait(
      '您与我们的故事恐怕不会有什么特别的一波三折，但还请您耐心的继续向前。',
    );
    get_attr_and_print_in_event(52, [0, 0, 5, 5, 0], 0) &&
      (await era.waitAnyKey());
  };
};
