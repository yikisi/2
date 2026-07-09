/**
 * @file 爱丽速子 - 育成 - Plan B
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ws_b_betray: (() => {
    const title = 'Betray';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait('将梦想托付他人……虽然说是残酷的道路，但是');
      await era.printAndWait('以理智来看，这才是最有可能达成的希望吧');
      await era.printAndWait([
        '姑且不论',
        tachyon.sex,
        '所说的命运，',
        tachyon.sex,
        '的双腿……无论身为训练员，还是对 ',
        tachyon.get_colored_name(),
        ' 抱有憧憬的一名粉丝',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 都无法做到无视这过程中',
        tachyon.sex,
        '可能受到的伤痛',
      ]);
      await era.printAndWait('可能性太低');
      await era.printAndWait('眼前的道路也满是荆棘');
      await era.printAndWait([
        you.get_colored_name(),
        ' 做不到，被当成懦夫也无所谓',
      ]);
      await era.printAndWait([
        '只要 ',
        tachyon.get_colored_name(),
        ' 能够健康就好',
      ]);
      await era.printAndWait('除此之外……');
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 想起了 ',
        you.get_colored_name(),
        ' 的另一名负责',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        '想起了',
        tachyon.sex,
        '同样使 ',
        you.get_colored_name(),
        ' 着迷的跑法及身姿',
      ]);
      await era.printAndWait('取代，是个傲慢且自私的话语');
      await era.printAndWait(
        '没有任何人能够取代其他人，也没有任何人是为了取代而生的',
      );
      if (relation >= era.get('relation:25:0')) {
        await era.printAndWait([
          '但是，如果有谁能够「继承」',
          tachyon.get_colored_name(),
          ' 的梦想，那……',
        ]);
        era.println();
        await era.printAndWait(['必然是 ', coffee.get_colored_name(), ' 莫属']);
        era.println();
        await era.printAndWait([
          '看见一言不发的 ',
          you.get_colored_name(),
          '，',
          tachyon.get_colored_name(),
          ' 也猜到了 ',
          you.get_colored_name(),
          ' 心中的决断',
        ]);
        await era.printAndWait([
          '只是等待着 ',
          you.get_colored_name(),
          ' 主动开口而已',
        ]);
      } else {
        await era.printAndWait(['尤其是 ', coffee.get_colored_name()]);
        era.printButton(`「……茶座${coffee.sex}不是任何人的替代品」`, 1);
        await era.input();
        await tachyon.say_and_wait(['呵呵，这么维护', tachyon.sex, '啊……']);
        await tachyon.say_and_wait([
          '放心，我没有说',
          tachyon.sex,
          '是谁的替代……',
        ]);
        await tachyon.say_and_wait([
          '没错，就只是一名路过的好心',
          tachyon.uma_sex_title,
          '，对 ',
          coffee.get_colored_name(),
          ' 与其训练员提出的帮助，仅此而已',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          coffee.get_colored_name(),
          ' 与 ',
          coffee.get_colored_name(),
          ' 的训练员」，说出这句话时，',
          tachyon.get_colored_name(),
          ' 脸上的表情展露出了绝对不会被人看漏的失落',
        ]);
        await era.printAndWait([
          '……是啊，做出这个选择后，自己就真的彻底，是 ',
          coffee.get_colored_name(),
          ' 的训练员了……但是，这个选择，一定也是对 ',
          tachyon.get_colored_name(),
          ' 而言最好的选择吧',
        ]);
      }
      era.printButton('「……我选 Plan B」', 1);
      await era.input();
      await tachyon.say_and_wait('……这样啊');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 听见 ',
        you.get_colored_name(),
        ' 的选择后，没有多说什么，只是点了点头',
      ]);
      await era.printAndWait([
        '室内陷入了将人逼至窒息的沉默，正当 ',
        you.get_colored_name(),
        ' 受不了这沉默，想说些什么的时候',
      ]);
      era.println();
      await tachyon.say_and_wait('……哈哈哈哈！');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 忽然发出笑声，把 ',
        you.get_colored_name(),
        ' 吓了一跳',
      ]);
      era.println();
      await tachyon.say_and_wait('很好很好！这不是能够做出正确的选择来吗！');
      era.println();
      await era.printAndWait('正确的选择……吗？');
      era.println();
      await tachyon.say_and_wait(
        '说实话，我还真有点怕你会选Plan A呢，果然对我这种人来说，比起训练比赛什么的，还是在幕后做研究更适合我啊，哈哈哈！',
      );
      era.println();
      await era.printAndWait([
        '……既然',
        tachyon.sex,
        '都这么说了，那这应该就是正确的，不是吗？',
      ]);
      await era.printAndWait([
        '这才是最适合',
        tachyon.sex,
        '的，最理智的选择，不是吗？',
      ]);
      await era.printAndWait('一定是的吧');
      await era.printAndWait('绝对是的吧');
      await era.printAndWait([
        '不然的话……不就说明，自己放弃了，背叛了自己的负责',
        tachyon.uma_sex_title,
        '，自己的光（Tachyon）了吗',
      ]);
      era.println();
      await tachyon.say_and_wait(['对了，', callname, '，明天记得要来试药哦']);
      await era.printAndWait('…………欸？这样还要试药吗？');
      await era.printAndWait([
        '或许是因为 ',
        you.get_colored_name(),
        ' 那呆愣的表情，',
        tachyon.get_colored_name(),
        ' 笑出了声',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '呵呵……当然了，不过明天开始试的药都是要用在 ',
        call_25,
        ' 身上的……',
      ]);
      await tachyon.say_and_wait(
        '所以做好觉悟吧，明天开始，要试的药会更多哦？',
      );
      await tachyon.say_and_wait([
        '为了让 ',
        call_25,
        ' 补足达到极限的基础，要做的事比以前可是多多了啊',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 哈哈一笑走出休息室，看来自己的选择似乎并没有对',
        tachyon.sex,
        '造成影响……吗？',
      ]);
      await era.printAndWait([
        '心中虽然还是有些担心，但 ',
        you.get_colored_name(),
        ' 很快便将这些担心甩出了心，不只是为了 ',
        coffee.get_colored_name(),
        '，也是为了 ',
        tachyon.get_colored_name(),
        '，自己必须更加努力了',
      ]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 参加了月桂杯']);
      await era.printAndWait([
        '无论是本格化已经完成的资深级对手，同期的强者，甚至梦之杯的前辈，都被',
        tachyon.sex,
        '平等的超越',
      ]);
      await era.printAndWait('依然是那种令人眩目的跑法');
      await era.printAndWait('依然是，如光一般的跑法');
      await era.printAndWait('如光一般，瞬间消逝的跑法');
      era.println();
      await era.printAndWait([
        '之后，',
        tachyon.get_colored_name(),
        ' 宣布，半永久暂停闪耀系列赛的参与',
      ]);
      await era.printAndWait('此一发表，掀起了媒体的轩然大波');
      await era.printAndWait([
        '但这一切，都不会影响到 ',
        you.get_colored_name(),
        ' 与',
        tachyon.sex,
        '的同行',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_47_31: (() => {
    const title = '月光';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {string} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, coffee, you, callname, t_call_c, relation) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '速子前辈最近……似乎深夜总在沙滩上跑步的样子',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '虽然不算什么大事，但总觉得速子前辈跑起来好像……很吃力的样子',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'C', [
        '毕竟也受过速子前辈不少帮助……速子前辈',
        tachyon.sex,
        '真的没事吧？',
      ]);
      era.println();
      await era.printAndWait([
        '由于许多',
        tachyon.uma_sex_title,
        '的关心，',
        you.get_colored_name(),
        ' 在深夜离开了训练员宿舍，走向合宿的沙滩',
      ]);
      await era.printAndWait([
        '居然需要靠着其他',
        tachyon.uma_sex_title,
        '的提醒才能发现自家',
        tachyon.uma_sex_title,
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
        you.get_colored_name(),
        ' 莫名的感到感慨',
      ]);
      era.println();
      await tachyon.say_and_wait('哈啊……哈啊……哈啊……');
      era.println();
      await era.printAndWait([
        '在来到了沙滩的 ',
        you.get_colored_name(),
        ' 眼前的，是合宿期间也在不断与 ',
        you.get_colored_name(),
        ' 一起为了 ',
        coffee.get_colored_name(),
        ' 的跑法改善研究的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '专注于奔跑的',
        tachyon.sex,
        '，在夜色的遮蔽下并没能注意到 ',
        you.get_colored_name(),
        ' 的到来',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
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
        you.get_colored_name(),
        ' 的目光，',
      ]);
      await era.printAndWait([
        '无关完美与否，',
        tachyon.get_colored_name(),
        ' 的跑法本身便吸引着 ',
        you.get_colored_name(),
        ' 的注目，如光一般，再微弱的光芒那都是能够使人狂热追逐的光',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
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
        coffee.get_colored_name(),
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
          you.get_colored_name(),
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
        you.get_colored_name(),
        ' 只能说出这种无关痛痒的做作关心，便离开了沙滩',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_47_40: (() => {
    const title = '不同的可能性';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} coffee_kiku_sho 曼城茶座是否参加菊花赏
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        '那天晚上，',
        you.get_colored_name(),
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
        you.get_colored_name(),
      ]);
      await era.printAndWait('脸部却是一片漆黑');
      await you.say_as_passer_by_and_wait(
        '观众们',
        '⬛⬛⬛⬛！⬛⬛⬛⬛！⬛⬛⬛⬛！',
      );
      await era.printAndWait(['周围的观众们呼喊着', tachyon.sex, '的名字']);
      await era.printAndWait([tachyon.sex, '的名字是什么？']);
      await era.printAndWait([tachyon.sex, '……是谁？']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 从梦中惊醒，久久无法恢复平静',
      ]);
      await era.printAndWait([
        '梦境实在太过真实，让 ',
        you.get_colored_name(),
        ' 不由得心有余悸',
      ]);
      await era.printAndWait([
        '剩下的夜晚 ',
        you.get_colored_name(),
        ' 依然辗转无法入眠，直至天亮',
      ]);
      era.println();
      await era.printAndWait([
        '天才蒙蒙亮，',
        you.get_colored_name(),
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
        you.get_colored_name(),
        ' 冲进实验室时，看见的是一大清早便悠哉喝着红茶的 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(['不过今天毕竟是菊花赏，紧张也是正常的吧']);
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait(
          '晚点一起出发吧，呵呵……这还是我第一次并非自己上场，而是在观众席上看着别人跑呢',
        );
      } else {
        await tachyon.say_and_wait([
          '你要加油啊，不过嘛，毕竟 ',
          call_25,
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
        you.get_colored_name(),
        ' 赢下菊花赏的样子？',
      ]);
      await era.printAndWait([
        '说，梦中的 ',
        you.get_colored_name(),
        ' 没有脸，没有姓名？',
      ]);
      await era.printAndWait('说，自己后悔……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 用力晃了晃头，随意说了声没事作为回答后，狼狈的离开了实验室',
      ]);
      await era.printAndWait('有什么好说的呢');
      await era.printAndWait('有什么能说的呢');
      await era.printAndWait(
        '事到如今，竟然为了自己做出的决定而后悔什么的，开玩笑也要有个限度',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 离开了实验室，前去准备今日的菊花赏',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_limited_tachyon: (() => {
    const title = '止步于极限的光子';
    /**
     * Plan B 专属，茶座参加菊花赏后触发
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait(['菊花赏，结束了']);
      await era.printAndWait([
        '结束后的几天，',
        you.get_colored_name(),
        ' 送了训练到夜晚的 ',
        coffee.get_colored_name(),
        ' 回到寝室，叮嘱',
        tachyon.sex,
        '好好休息，然后……自己回到了学校里',
      ]);
      await era.printAndWait(
        '明明自己也该好好休息的……但毕竟，还有工作没做完啊',
      );
      era.println();
      await era.printAndWait([
        '进入漆黑的训练员室的瞬间，',
        you.get_colored_name(),
        ' 立即发现了房间里还有另一人在',
      ]);
      await era.printAndWait([
        '不是因为 ',
        you.get_colored_name(),
        ' 的感知有多么敏锐，而是那个人手上正拿着能够使人发出光芒的药水',
      ]);
      era.printButton('「……速子啊」', 1);
      await era.input();
      await era.printAndWait([
        '这几个月以来一直帮着为 ',
        coffee.get_colored_name(),
        ' 提供协助的，同样也是 ',
        you.get_colored_name(),
        ' 负责',
        tachyon.uma_sex_title,
        '的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        '手上的药水在月光下散发出七彩的光芒',
      ]);
      era.println();
      await tachyon.say_and_wait(['菊花赏，结束了呢']);
      era.printButton('「……是啊」', 1);
      await era.input();
      await era.printAndWait('并非关系不好');
      await era.printAndWait([
        '说到底，',
        tachyon.sex,
        '依然是 ',
        you.get_colored_name(),
        ' 的负责',
        tachyon.uma_sex_title,
        '，两人日常也总有接触',
      ]);
      await era.printAndWait('所以，正常的交流应该是没问题的');
      await era.printAndWait([
        '但是这几个月以来，你们的交流几乎就没有一次离开过 ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait('除此之外，再加上合训那时候的事……');
      await era.printAndWait([
        '瞬间，',
        you.get_colored_name(),
        ' 忽然找不到有什么能够和',
        tachyon.sex,
        '聊的话题了',
      ]);
      era.println();
      await tachyon.say_and_wait(callname);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '的栗色短发在暗沉的月光下，纯褐如酒，暗红的双眼如渴血的野兽，贪婪的注视着 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        '在那一瞬间，',
        you.get_colored_name(),
        ' 想到了许多，想到了前辈训练员说的与',
        tachyon.uma_sex_title,
        '维持安全的距离感',
      ]);
      await era.printAndWait([
        '想到了训练员讲座说到的',
        tachyon.uma_sex_title,
        '的独占欲',
      ]);
      await era.printAndWait([
        '想到了',
        tachyon.uma_sex_title,
        '生理学课上教到的',
        tachyon.uma_sex_title,
        '的发情期……',
      ]);
      await era.printAndWait([
        '但这些都帮不了现在手无寸铁面对负责',
        tachyon.uma_sex_title,
        '的自己',
      ]);
      await era.printAndWait([
        '纵使多亏了眼前 ',
        tachyon.get_colored_name(),
        ' 的药剂，自己或许拥有能够稍微抵抗的力量，',
      ]);
      await era.printAndWait('但那真的也就是稍微的力量而已');
      await era.printAndWait([
        tachyon.sex,
        '漫步靠近，下意识的，',
        you.get_colored_name(),
        ' 也跟着慢慢后退',
      ]);
      await era.printAndWait('就这么一进一退，靠到了墙边');
      await era.printAndWait([
        tachyon.sex,
        '压着缩在墙角的 ',
        you.get_colored_name(),
        '，淡淡的说了句',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '，可以……陪我跑一下吗？']);
      era.println();
      await era.printAndWait([
        '说出的是 ',
        you.get_colored_name(),
        ' 意料之中，但比 ',
        you.get_colored_name(),
        ' 的意料还要糟糕的请求',
      ]);
      era.drawLine();
      await era.printAndWait('夜晚下的训练场，空荡的跑道');
      await era.printAndWait([
        '整个赛场上只有 ',
        tachyon.get_colored_name(),
        ' 一人在奔跑着',
      ]);
      await era.printAndWait(['月下的', tachyon.sex, '，跑的十分不像样']);
      await era.printAndWait([
        '这也是难免的，已经将近三个月没有接受训练的',
        tachyon.sex,
        '，',
        '即便是天才，也无法跨越时间，肌肉的退化、感觉的退化等等，对运动员而言都是致命的伤痕',
      ]);
      await era.printAndWait([
        '如果是现在的 ',
        tachyon.get_colored_name(),
        '，说不定连 ',
        you.get_colored_name(),
        ' 都能跑赢……',
      ]);
      await era.printAndWait([
        '虽然听起来很离谱，但每天都在药物锤炼下的身体，或许真的能够胜过已经许久没锻炼过的',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await era.printAndWait('那么，为什么……');
      await era.printAndWait([you.get_colored_name(), ' 痛苦的想着']);
      era.println();
      await era.printAndWait([
        '为什么，即便是如此不堪的跑法，在 ',
        you.get_colored_name(),
        ' 眼中却还是如第一次见到那时一般闪耀',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        '不知不觉间，',
        tachyon.sex,
        '已经跑完，站在 ',
        you.get_colored_name(),
        ' 的身侧气喘吁吁的喘着气',
      ]);
      await era.printAndWait(['以前的', tachyon.sex, '不该是这样的']);
      await era.printAndWait([
        '哪怕加上腿伤，',
        tachyon.sex,
        '也不应该变成这样',
      ]);
      await era.printAndWait([
        '让',
        tachyon.sex,
        '变成这样的，是本应该陪在',
        tachyon.sex,
        '身边，相信',
        tachyon.sex,
        '的那个人',
      ]);
      await era.printAndWait(['是 ', you.get_colored_name()]);
      era.println();
      await tachyon.say_and_wait('……呵呵，跑的很不堪吧');
      era.println();
      await era.printAndWait([
        '没有这回事，',
        you.get_colored_name(),
        ' 想安慰',
        tachyon.sex,
        '道',
      ]);
      await era.printAndWait([
        '但是',
        tachyon.sex,
        '的目光，却不容许 ',
        you.get_colored_name(),
        ' 说出谎言',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，你还记得吗？月桂杯那时候我说的话',
      ]);
      era.println();
      await era.printAndWait('记得？不如说怎么可能忘掉');
      await era.printAndWait('直到现在，那还是自己常在午夜梦回出现的梦魇');
      await era.printAndWait([
        '怀抱着自己的梦想，与他人的梦想的',
        tachyon.uma_sex_title,
        '在眼前凋零的瞬间',
      ]);
      await era.printAndWait(
        '接下来，无论是责骂怨怼还是哀叹，自己都做好面对的准备了',
      );
      era.println();
      await era.printAndWait(['但', tachyon.sex, '要说的，却不是那些']);
      era.println();
      await tachyon.say_and_wait('剩下用尽全力的几次……现在，机会来了');
      await tachyon.say_and_wait([
        '菊花赏，',
        call_25,
        ' 已经绽放出了',
        tachyon.sex,
        '的光芒……是当之无愧，『最强』的',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await era.printAndWait(['最快的', tachyon.uma_sex_title, '赢皋月赏']);
      await era.printAndWait(['最强的', tachyon.uma_sex_title, '赢菊花赏']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 想起了从许久以前流传至今的话语',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '接着……到年底，',
        tachyon.sex,
        '必然将一路抵达巅峰',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, '畅想着，自己心目中的可能性']);
      await era.printAndWait('……已经不属于自己的可能性');
      era.println();
      await tachyon.say_and_wait([
        '但为了让',
        tachyon.sex,
        '超越极限，还需要磨砺的垫脚石……',
      ]);
      era.println();
      await era.printAndWait(
        '但明明已经失去了自己的可能性，目光中的光芒却还是如此耀眼',
      );
      await era.printAndWait([
        '如果是这样的',
        tachyon.sex,
        '，自己一定会答应的吧，若是',
        tachyon.sex,
        '都能为了梦想燃尽一切，那么陪',
        tachyon.sex,
        '一把又如何',
      ]);
      await era.printAndWait('自己绝对会一如既往，甘之如饴的接受使唤吧');
      await era.printAndWait('但是……');
      era.println();
      await tachyon.say_and_wait(['所以，', callname, '，我需要你的帮助']);
      await tachyon.say_and_wait([
        '我要在明年复归，为了让 ',
        call_25,
        ' 抵达更高的极限，只有我，才能以最针对',
        tachyon.sex,
        '的方式制定出战术，逼迫',
        tachyon.sex,
        '抵达极限',
      ]);
      await tachyon.say_and_wait('……你会助我一臂之力的吧');
      era.println();
      await era.printAndWait(
        '如果真的甘心牺牲一切去成就他人，为什么脸上的表情却是如此不甘',
      );
      await era.printAndWait('为什么眼眶却含着泪水');
      era.println();
      await tachyon.say_and_wait('沉默就当默许了');
      era.println();
      await era.printAndWait('说到底，也没有拒绝的理由不是吗');
      await era.printAndWait([
        '为了 ',
        coffee.get_colored_name(),
        ' 能够攀上巅峰',
      ]);
      await era.printAndWait([
        '为了满足 ',
        tachyon.get_colored_name(),
        ' 的「遗愿」',
      ]);
      await era.printAndWait([
        '没什么拒绝的理由吧，只是 ',
        you.get_colored_name(),
        ' 很好奇',
      ]);
      await era.printAndWait(
        '眼前这名栗色头发的天才，现在脑袋里究竟在想些什么呢？',
      );
    };
    f.title = title;
    return f;
  })(),
  we_b_47_47: (() => {
    const title = '黯淡的光辉';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} coffee_arim_kin 曼城茶座是否参加有马纪念
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_arim_kin,
    ) => {
      await tachyon.say_and_wait(['话说，明天就是有马纪念了啊，', callname]);
      era.println();
      await era.printAndWait([
        '在月下训练的 ',
        tachyon.get_colored_name(),
        ' 无意间向 ',
        you.get_colored_name(),
        ' 提起',
      ]);
      await era.printAndWait([
        '自从菊花赏结束以来，你们便一直维持着这样在晚上进行训练及指导的关系',
      ]);
      await era.printAndWait([
        '原本尴尬的对话，在两个月的接触沟通后也已经渐渐回到了以往的熟悉',
      ]);
      await era.printAndWait(
        '虽然这样讲有些过分，但要说对现在的状态，自己是什么样的感受的话',
      );
      await era.printAndWait('那大概是享受吧');
      await era.printAndWait([
        '白天为了 ',
        coffee.get_colored_name(),
        ' 而努力，夜晚则帮助 ',
        tachyon.get_colored_name(),
        ' 恢复',
      ]);
      await era.printAndWait([
        '虽然工作量比以前增加了，但与菊花赏前的 ',
        you.get_colored_name(),
        ' 相比，心情上的负担可以说每一天都在减轻',
      ]);
      await era.printAndWait([
        '…………也因此，',
        you.get_colored_name(),
        ' 几乎忘了时间',
      ]);
      era.println();
      if (coffee_arim_kin) {
        await tachyon.say_and_wait([
          '明天，就是 ',
          call_25,
          ' 今年的最后一场比赛了',
        ]);
      } else {
        await tachyon.say_and_wait('明天，就是今年赛季的结束了');
      }
      era.println();
      await era.printAndWait(['在有马纪念之后']);
      await era.printAndWait([
        '就是 ',
        you.get_colored_name(),
        ' 一直不敢去面对的，来年了',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '明年……',
        call_25,
        ' 打算出走的比赛……我会尽全力一个不漏跟上的',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着',
        tachyon.sex,
        '的眼眸，里面是为了 ',
        coffee.get_colored_name(),
        ' 燃烧的觉悟和热情',
      ]);
      era.println();
      await tachyon.say_and_wait('……所以，明年也请，多多指教了');
      era.println();
      await era.printAndWait('没有光芒');
      await era.printAndWait([
        '一直以来将 ',
        you.get_colored_name(),
        ' 双眼灼烧的，',
        tachyon.get_colored_name(),
        ' 眼中的光芒，已经黯淡的几乎看不出来了',
      ]);
      era.printButton('「明年也请……多多指教」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 将在有马纪念后马上召开记者会',
      ]);
      await era.printAndWait('宣布回归赛场的消息，也许会造成社会的轩然大波吧');
      await era.printAndWait('但这些后续与现在的你们两人没有半点关系');
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_1: (() => {
    const title = '下定决心的新年';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {string} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait('新年');
      await era.printAndWait('本该是除旧岁，迎新年的喜庆日子');
      await era.printAndWait(
        '到神社参拜，也象征着洗去去年的一切，迎接新年的到来',
      );
      era.println();
      await era.printAndWait('然而……孽缘往往，是难以洗净的');
      await era.printAndWait('无论是与谁，在什么地点，哪怕神社也不例外');
      await era.printAndWait('会如影随形，死缠烂打跟在身边，令人厌恶的存在');
      await era.printAndWait('没错，所谓的孽缘即是————');
      era.println();
      await tachyon.say_and_wait(['哦呀，', callname, '……真巧啊']);
      era.printButton('「速……速子！」', 1);
      era.printButton('「先不说这个了，快跑！」', 2);
      await era.input();
      await tachyon.say_and_wait('啊，等……');
      await era.printAndWait([
        '没等 ',
        tachyon.get_colored_name(),
        ' 回应，',
        you.get_colored_name(),
        ' 便拉着',
        tachyon.sex,
        '往神社里钻，很快便消失在了人群之中',
      ]);
      await you.say_as_passer_by_and_wait('记者A', '咕……没逮到');
      await you.say_as_passer_by_and_wait(
        '记者B',
        '没想到没发着光的时候这么难找……',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '记者C',
        '……在这边堵着，千万不能漏掉了',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 拉着 ',
        tachyon.get_colored_name(),
        ' 躲在人群中，确认没有拿着摄影机的记者追上来才放下了心来',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 在有马纪念后的忽然宣布复归，对媒体而言可以说是最让人注目的焦点了',
      ]);
      await era.printAndWait([
        '但由于担心 ',
        tachyon.get_colored_name(),
        ' 的状况，',
        you.get_colored_name(),
        ' 拒绝了一切关于此事的采访',
      ]);
      await era.printAndWait('却没想到他们直接追上门来……！');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait([
        '这时 ',
        you.get_colored_name(),
        ' 才想起，',
        you.get_colored_name(),
        ' 刚刚没想太多就抓着 ',
        tachyon.get_colored_name(),
        ' 跑了起来……',
      ]);
      era.printButton('「速子，腿没事吧！」', 1);
      await era.input();
      await era.printAndWait('……没什么，只是，有点吓到了，呵呵');
      await era.printAndWait([
        '毕竟还是',
        tachyon.uma_sex_title,
        '，哪怕是腿脚不便的',
        tachyon.uma_sex_title,
        '身体素质比起人类还是强上许多，更何况还是今年要回归赛场的前G1',
        tachyon.uma_sex_title,
        '了',
      ]);
      era.println();
      await you.say_and_wait('……是啊，回归赛场', true);
      era.printButton('「速子」', 1);
      era.printButton('「今年的赛程……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '那当然……是和 ',
        call_25,
        ' 一样了，这不用我多说吧',
      ]);
      era.println();
      await era.printAndWait('果然如此');
      await era.printAndWait([you.get_colored_name(), ' 点了点头']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 离开赛场，以及离开赛场的原因，都是为了 ',
        coffee.get_colored_name(),
        '———',
        you.get_colored_name(),
        ' 的另一名负责',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        '那么，在有限能够选择的比赛中，当然必须要以 ',
        coffee.get_colored_name(),
        ' 参加的比赛为优先…………',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？怎么了吗？']);
      era.println();
      await era.printAndWait('心中还是忍不住想起');
      await era.printAndWait([
        '夏日集训时 ',
        tachyon.get_colored_name(),
        ' 脸上的表情',
      ]);
      await era.printAndWait([
        '菊花赏后 ',
        tachyon.get_colored_name(),
        ' 的眼神',
      ]);
      await era.printAndWait([
        '有马前……',
        tachyon.get_colored_name(),
        ' 下定决心时的神情',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 这才发现 ',
        tachyon.get_colored_name(),
        ' 正盯着 ',
        you.get_colored_name(),
        ' 似乎有些时间了，连忙回过神来问怎么了',
      ]);
      era.println();
      await tachyon.say_and_wait('……没什么，只是快轮到我们了');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '指着神社，然后 ',
        you.get_colored_name(),
        ' 才发现，你们匆忙跑入的，是本舍前祈求神明保佑的长列',
      ]);
      era.printButton('「速子你不是不信这些吗？」', 1);
      await era.input();
      await era.printAndWait([
        '话一出口 ',
        you.get_colored_name(),
        ' 便感觉坏事',
      ]);
      if (relation <= 0) {
        await tachyon.say_and_wait(
          '……哦，真看不出来，你原来还会在乎我的意愿啊',
        );
        era.println();
        await era.printAndWait(['果不其然，遭到了', tachyon.sex, '的冷嘲热讽']);
      } else if (relation <= 225) {
        era.println();
        await tachyon.say_and_wait('……不是你把我拉过来的吗？');
        era.println();
        await era.printAndWait([
          '这么说起来，似乎还没跟 ',
          tachyon.get_colored_name(),
          ' 解释过……',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 连忙说了记者的事情']);
        await era.printAndWait([
          '听完后',
          tachyon.sex,
          '没有过多的反应，只说了句这样啊',
        ]);
      } else if (relation <= 525) {
        await tachyon.say_and_wait(
          '虽然不信……但我姑且当成你的心意吧，再说不是你先把我拉过来的吗？',
        );
        era.println();
        await era.printAndWait([
          '这么说起来，似乎还没跟 ',
          tachyon.get_colored_name(),
          ' 解释过……',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 连忙说了记者的事情']);
        await era.printAndWait(['听完后', tachyon.sex, '露出了有些抱歉的眼神']);
      } else {
        await tachyon.say_and_wait('我相信的不是神，而是将我带到这里的你');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 忽然说了些令人羞耻的内容',
        ]);
        await era.printAndWait([
          '这么说起来，似乎还没跟 ',
          tachyon.get_colored_name(),
          ' 解释过……',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 连忙说了记者的事情']);
        await tachyon.say_and_wait('呵，一群庸碌的蚊蝇而已，也敢质疑我们？');
        await era.printAndWait([tachyon.get_colored_name(), ' 不屑的笑了声']);
      }
      era.println();
      await era.printAndWait(['对话的途中，你们已经排到了队伍最前方']);
      await era.printAndWait([you.get_colored_name(), ' 望着眼前的神像']);
      await era.printAndWait('那么……该许什么愿呢');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 思考了许多，想了许多要许的愿望',
      ]);
      await era.printAndWait('双手合十，向神明祈祷');
      await era.printAndWait([
        '希望 ',
        tachyon.get_colored_name(),
        ' 的双腿不要有事，健康跑完',
      ]);
      await era.printAndWait([
        '希望 ',
        tachyon.get_colored_name(),
        ' 的比赛可以一如往常的精彩',
      ]);
      await era.printAndWait([
        '希望……',
        coffee.get_colored_name(),
        ' 的训练也能平安进行',
      ]);
      era.println();
      await era.printAndWait([
        '结束祈祷，',
        you.get_colored_name(),
        ' 抬头看向一旁的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        '早就已经结束了敷衍的祈祷，正等待着 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        '你们两人离开人群，小心的避开了还不死心的记者回到学园',
      ]);
      era.println();
      await tachyon.say_and_wait(['那么……你都祈祷了什么？']);
      era.println();
      await era.printAndWait([
        '不知为何，',
        tachyon.get_colored_name(),
        ' 很好奇的样子',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 告诉',
        tachyon.sex,
        '……',
      ]);
      era.printButton('速子的健康（体力+20%）', 1);
      era.printButton('速子的比赛（随机属性+20）', 2);
      era.printButton('茶座的训练（技能点数+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' 告诉',
            tachyon.sex,
            '，',
            you.get_colored_name(),
            ' 祈祷了',
            tachyon.sex,
            '的双腿健康',
          ]);
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('……无聊的愿望');
            await tachyon.say_and_wait(
              '如果只求身体健康……那我不回归赛场不就好了吗？',
            );
            await tachyon.say_and_wait([
              '都已经决定抛弃一切了，还许这种愿……',
              callname,
              ' 你的觉悟不足啊',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 的回复十分辛辣',
            ]);
            await era.printAndWait([
              '听起来仿佛对 ',
              you.get_colored_name(),
              ' 说的愿望打从心底嗤之以鼻',
            ]);
          } else {
            await tachyon.say_and_wait('……身体健康啊');
            await tachyon.say_and_wait('不，没什么，只是……呵呵');
            await tachyon.say_and_wait('是啊，要是能够健康的跑完就好了');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 轻描淡写的说着',
            ]);
            await era.printAndWait(
              '仿佛这只是一场普通的谈天——也确实如此——而已',
            );
          }
          era.println();
          await era.printAndWait([
            '但是 ',
            you.get_colored_name(),
            ' 没有看漏',
          ]);
          await era.printAndWait([
            '在说出愿望的同时，',
            tachyon.get_colored_name(),
            ' 眼神中绽放出的希望和渴望',
          ]);
          await era.printAndWait('……可是，看见了又能怎么办呢？');
          await era.printAndWait([
            '追寻那种可能的道路，在几个月前就已经被 ',
            you.get_colored_name(),
            ' 亲手封上',
          ]);
          await era.printAndWait([
            '现在的 ',
            you.get_colored_name(),
            ' 与',
            tachyon.sex,
            '，只是在朝着自毁的道路狂奔而已',
          ]);
          era.println();
          await era.printAndWait('所以只能献上祈祷');
          await era.printAndWait('至少，在这最后的时间里');
          await era.printAndWait([tachyon.sex, '能免于痛苦，免于伤病']);
          era.println();
          await tachyon.say_and_wait('……没什么事，我就回去了');
          era.printButton('「注意休息」', 1);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' 告诉',
            tachyon.sex,
            '，',
            you.get_colored_name(),
            ' 祈祷了',
            tachyon.sex,
            '和 ',
            coffee.get_colored_name(),
            ' 的比赛顺利',
          ]);
          era.println();
          await tachyon.say_and_wait('哈哈，这不是不错的愿望吗？');
          await tachyon.say_and_wait([
            call_25,
            ' 已经证明了',
            tachyon.sex,
            '的可能性……接下来，该轮到我了',
          ]);
          await tachyon.say_and_wait([
            '明明说着要成为',
            tachyon.sex,
            '的垫脚石，我可不能原地踏步啊，不然，充其量也就是鹅卵石而已了',
          ]);
          era.println();
          await era.printAndWait([
            '虽然 ',
            tachyon.get_colored_name(),
            ' 口口声声说着为了 ',
            coffee.get_colored_name(),
          ]);
          await era.printAndWait([
            '但 ',
            you.get_colored_name(),
            ' 依然没有错过……',
          ]);
          await era.printAndWait([
            '在提起比赛时，',
            tachyon.get_colored_name(),
            ' 眼中闪过的斗志',
          ]);
          await era.printAndWait([
            '果然，',
            tachyon.get_colored_name(),
            ' 还是渴望回到赛场的吧',
          ]);
          await era.printAndWait('……但是，渴望又能怎么办呢');
          await era.printAndWait([
            '追寻那种可能的道路，在几个月前就已经被 ',
            you.get_colored_name(),
            ' 亲手封上',
          ]);
          await era.printAndWait([
            '现在的 ',
            you.get_colored_name(),
            ' 与',
            tachyon.sex,
            '，只是在朝着自毁的道路狂奔而已',
          ]);
          era.println();
          await era.printAndWait('所以只能献上祈祷');
          await era.printAndWait('至少，在这最后的时间里');
          await era.printAndWait([
            '希望在剩下的时间中，',
            tachyon.sex,
            '能尽情享受，那样的时光',
          ]);
          era.println();
          await tachyon.say_and_wait('呵呵，为了你的期待，得马上开始训练了啊');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 开心的朝着训练场走去',
          ]);
          era.printButton('……训练小心', 1);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' 告诉',
            tachyon.sex,
            '，',
            you.get_colored_name(),
            ' 祈祷了 ',
            coffee.get_colored_name(),
            ' 的训练顺利',
          ]);
          era.println();
          await tachyon.say_and_wait('……嗯');
          await tachyon.say_and_wait([
            '当然了……毕竟我们做的，都是为了 ',
            call_25,
            ' 能够更加，并且超越极限啊',
          ]);
          await tachyon.say_and_wait([
            '要是',
            tachyon.sex,
            '的训练出现问题，那么……一切就白费了',
          ]);
          await tachyon.say_and_wait(
            '所以这个才是重中之重……你能够不忘优先顺序，我很高兴',
          );
          era.println();
          await era.printAndWait([
            '虽然 ',
            tachyon.get_colored_name(),
            ' 口口声声说着为了 ',
            coffee.get_colored_name(),
          ]);
          await era.printAndWait([
            '但 ',
            you.get_colored_name(),
            ' 依然没有错过……提起 ',
            coffee.get_colored_name(),
            ' 时',
            tachyon.sex,
            '眼神中的落寞',
          ]);
          await era.printAndWait([
            '果然，自己不该提起 ',
            coffee.get_colored_name(),
            ' 的吧',
          ]);
          await era.printAndWait([
            '现在，身为 ',
            tachyon.get_colored_name(),
            ' 的训练员时的自己，应该要为了',
            tachyon.sex,
            '而想才对吧',
          ]);
          await era.printAndWait([
            '但……为',
            tachyon.sex,
            '着想的权利早在几个月前就已经被自己抛弃了',
          ]);
          await era.printAndWait([
            '现在的 ',
            you.get_colored_name(),
            ' 和',
            tachyon.sex,
            '，只是在朝着自毁的道路狂奔而已',
          ]);
          era.println();
          await era.printAndWait('因此只能献上祈祷');
          await era.printAndWait('希望能够保障一切的外在因素');
          await era.printAndWait([
            '满足',
            tachyon.sex,
            '，满足 ',
            tachyon.get_colored_name(),
            ' 的「遗愿」',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '呵呵，为了你的期待，接下来我也不能输啊，必须让自己恢复到足以与 ',
            call_25,
            ' 站上同个舞台才行',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 淡淡的说完，朝着实验室走去',
          ]);
          era.printButton('「……实验小心」', 1);
      }
      await era.input();
      await era.printAndWait([tachyon.sex, '挥了挥手表示知道了']);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_14: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '对身体的准备还没完全完善，因此 ',
        tachyon.get_colored_name(),
        ' 拒绝了关于粉丝感谢祭的活动与采访',
      ]);
      await era.printAndWait([
        '这也使得周围对于「',
        tachyon.get_colored_name(),
        ' 复出」一事产生了不稳定的心态以及怀疑',
      ]);
      await era.printAndWait([
        '但这些都与 ',
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 无关，质疑……',
      ]);
      await era.printAndWait(
        '不，如果按照两人的预定计划走，那么质疑越多可能反而越利于两人的计划推行才对',
      );
      await era.printAndWait([
        '……因此，听见那些人对 ',
        tachyon.get_colored_name(),
        ' 的批评，',
        you.get_colored_name(),
        ' 只能默默咬着牙关，离开现场',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_95_15: (() => {
    const title = '闪烁的光子';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {string} callname_25 曼城茶座对玩家的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25, callname_25) => {
      await era.printAndWait('夜间的训练场');
      await era.printAndWait('理应无人，理应不该有人的这个时间点……');
      era.println();
      await tachyon.say_and_wait('……哈哈，人可真多啊……');
      era.println();
      await era.printAndWait('意外的，赛场上充满了自主训练的人');
      await era.printAndWait([
        '由于 G1 战线的开始，感到紧张的',
        tachyon.uma_sex_title,
        '们自作主张的训练也是这个时期特雷森的常见风景线啊',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '啊，速子前……欸，训练员',
        you.adult_sex_title,
        '！？',
      ]);
      era.println();
      await era.printAndWait([
        '一名看见了 ',
        tachyon.get_colored_name(),
        ' 想上来打招呼的后辈，看到隐藏在',
        tachyon.sex,
        '背后的 ',
        you.get_colored_name(),
        '，立马僵住了步伐',
      ]);
      await era.printAndWait('毕竟再怎么说，自主训练还是不被鼓励的行为……');
      await era.printAndWait([
        '不过，陪着负责',
        tachyon.uma_sex_title,
        '主动来自主训练的 ',
        you.get_colored_name(),
        ' 也没什么资格责备',
        tachyon.couple_title,
        '吧',
      ]);
      era.printButton('「嘘」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 苦笑着对',
        tachyon.sex,
        '比了个嘘的手势，',
        tachyon.sex,
        '也悟性很高的装作没看到 ',
        you.get_colored_name(),
        '，继续和 ',
        tachyon.get_colored_name(),
        ' 说着话',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '速子前辈！我今年也进入经典赛了！皋月赏好可惜～～没办法参赛，但德比我会加油的！',
      );
      await tachyon.say_and_wait('呵呵，那要好好努力了');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '可恶～～因为本格化的太晚，所以训练员让我回避了皋月赏……有没有办法能够加快本格化的速度呢',
      );
      await tachyon.say_and_wait(
        '还是顺其自然发展比较好……强迫发育无论如何都会留下隐患……',
      );
      era.println();
      await era.printAndWait([
        '和后辈谈话时的 ',
        tachyon.get_colored_name(),
        '，温和的出乎 ',
        you.get_colored_name(),
        ' 的意料',
      ]);
      await era.printAndWait([
        '甚至让人有点难以相信这是 ',
        tachyon.get_colored_name(),
        ' 会说出的话',
      ]);
      await era.printAndWait('……不过仔细想想，却又是情理之中');
      await era.printAndWait([
        '最看重可能性的 ',
        tachyon.get_colored_name(),
        '，是绝对不可能会容许，为了一时的成绩而牺牲',
        tachyon.uma_sex_title,
        '的可能性的',
      ]);
      await era.printAndWait('尤其对方还是拥有更宽广可能性的后辈');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '啊……时间也不早了，速子前辈！我先回去了！',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '另外……天皇赏春，虽然茶座前辈很强，但我相信速子前辈一定会赢的！',
      ]);
      era.println();
      await era.printAndWait(['满怀憧憬的', tachyon.sex, '，眼神中闪烁着光芒']);
      era.drawLine();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 很强，这是理所当然的',
      ]);
      await era.printAndWait([
        '哪怕不加上 ',
        tachyon.get_colored_name(),
        ' 和自己的辅助，',
        coffee.get_colored_name(),
        ' 都很强',
      ]);
      await era.printAndWait([
        '正常竞争的情况 ',
        tachyon.get_colored_name(),
        ' 都必须经过一番苦战',
      ]);
      await era.printAndWait('除此之外……');
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await era.printAndWait([
          '虽然能力上足够，但在比赛经验上，以及几个月没踏上赛场的 ',
          tachyon.get_colored_name(),
          ' 绝对不如 ',
          coffee.get_colored_name(),
        ]);
      } else {
        await era.printAndWait([
          '能力上，现在的 ',
          tachyon.get_colored_name(),
          ' 甚至不如皋月和德比时的',
          tachyon.sex,
        ]);
      }
      await era.printAndWait('哪怕尽力想要恢复，能力却还是有限');
      era.println();
      await era.printAndWait([
        '更何况，',
        tachyon.get_colored_name(),
        ' 参赛的目的……不是为了赢下比赛',
      ]);
      await era.printAndWait([
        '只是为了让 ',
        coffee.get_colored_name(),
        ' 能够登上更高的顶点',
      ]);
      await era.printAndWait(
        '可以说，不是输赢都不重要，而是……不能赢，不希望赢',
      );
      await era.printAndWait([
        '要是赢了就代表 ',
        tachyon.get_colored_name(),
        ' 的梦想，最后的希望 ',
        coffee.get_colored_name(),
        ' 也败给 ',
        tachyon.get_colored_name(),
        ' 的极限了',
      ]);
      await era.printAndWait('所以……');
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('所以，很难回答吧');
      await era.printAndWait('能对信赖自己的后辈说出这种话吗？');
      await era.printAndWait(['说，天皇赏春一定赢不下来']);
      await era.printAndWait(
        '对着眼神中的憧憬由于忽然冻结的气氛渐渐转为困惑的后辈，真的说得出口吗？',
      );
      era.println();
      await era.printAndWait([
        '理论上这个时候应该站出来帮 ',
        tachyon.get_colored_name(),
        ' 解围的 ',
        you.get_colored_name(),
        '，不知为何却钉在原地无法动弹，无法开口',
      ]);
      await era.printAndWait([
        '或许是因为 ',
        you.get_colored_name(),
        ' 也在等待一个答案',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，真的不在乎胜负吗？',
      ]);
      await era.printAndWait('真的甘愿拱手让出胜利吗？');
      await era.printAndWait('有办法在自己重视的可能性面前说出放弃吗？');
      era.println();
      await era.printAndWait('不知道过去了多久');
      await era.printAndWait([
        '在其他自主训练的',
        tachyon.uma_sex_title,
        '们都已回去，沉默已经变成夜的常态',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        call_25,
        ' ',
        tachyon.sex,
        '，真的是个很强的对手',
      ]);
      era.println();
      await era.printAndWait('……也是');
      await era.printAndWait('这才是理所当然的');
      era.println();
      await era.printAndWait([
        '说到底，万一 ',
        tachyon.get_colored_name(),
        ' 真的认真想拿下这场胜负，那么最头疼的人应该是自己才对',
      ]);
      await era.printAndWait([
        '说到底最初会答应这种闹剧般的提议，不就是因为这是对 ',
        coffee.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 双赢的方案',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 获得荣光，',
        tachyon.get_colored_name(),
        ' 获得',
        tachyon.sex,
        '想要的实验结果',
      ]);
      await era.printAndWait([
        '万一 ',
        tachyon.get_colored_name(),
        ' 现在改卜，那么将陷于两难中的，就变成 ',
        you.get_colored_name(),
        ' 了',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '但是……我会赢。不管 ',
        call_25,
        ' ',
        tachyon.sex,
        '多强都一样，赢的会是我',
      ]);
      era.println();
      await era.printAndWait('！');
      await era.printAndWait('居然……是回马枪吗');
      await era.printAndWait('这下，可不妙了啊……');
      await era.printAndWait([
        '哪怕只是敷衍后辈的话，这样的回答都一定说明了 ',
        tachyon.get_colored_name(),
        ' 的心已经发生动摇了',
      ]);
      await era.printAndWait('更何况，如果只是敷衍，那前面又何必沉默那么久');
      await era.printAndWait('这样的话……自己该怎么办才好');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的 ',
        callname_25,
        '，',
        tachyon.get_colored_name(),
        ' 的 ',
        callname,
      ]);
      await era.printAndWait('到底该怎么选择？');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '是！我那天绝对会去给速子前辈加油的！',
      );
      era.println();
      await era.printAndWait([
        '欢快的脚步声离开，留下你们两人继续在寂静的训练场上，星空作伴',
      ]);
      era.println();
      await era.printAndWait([
        '要是选择 ',
        tachyon.get_colored_name(),
        ' 的话，当初选择了Plan B的自己又算什么？',
      ]);
      if (era.get('love:25') >= 50) {
        await era.printAndWait([
          '要是还继续帮助 ',
          tachyon.get_colored_name(),
          ' 的话，对得起自己竭尽全力支持的那名',
          tachyon.teen_sex_title,
          '吗？对得起',
          tachyon.sex,
          '泡的咖啡吗？',
        ]);
      }
      era.println();
      await era.printAndWait([
        '所以，应该要帮助 ',
        coffee.get_colored_name(),
        ' 吧',
      ]);
      await era.printAndWait([
        '所以，应该和 ',
        tachyon.get_colored_name(),
        ' 确认吧，确认',
        tachyon.sex,
        '说的不过是应付后辈用的场面话而已',
      ]);
      await era.printAndWait('所以……这种情况下，内心是不该感到喜悦的吧？');
      era.println();
      await era.printAndWait('为什么，此刻内心会如此喜悦');
      await era.printAndWait('难道说，自己当初真心想选择的，其实是Plan A吗？');
      await era.printAndWait([
        '难道说，自己帮助 ',
        coffee.get_colored_name(),
        '，是违背本心的行为',
      ]);
      await era.printAndWait('……不，只有这个，自己可以断言绝非如此');
      await era.printAndWait(
        '那为什么……明明应该是无比让人纠结的事，自己的心却怎么也无法平缓心跳',
      );
      await era.printAndWait([
        '不由自主的，',
        you.get_colored_name(),
        ' 开口问道',
      ]);
      era.printButton('「速子……刚刚说的，不是认真的吧？」', 1);
      era.printButton('「速子……刚刚说的，当然是开玩笑的吧？」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '当然了，计较输赢那是小孩子的权利……我们需要的，只有实验的数据，仅此而已',
      );
      await era.printAndWait('话语会骗人');
      await era.printAndWait('声音会骗人');
      await era.printAndWait('自诩永远理性的人，会为了自己的利益骗人');
      await era.printAndWait('但……感动不会');
      era.println();
      await era.printAndWait([
        '这句话有几成真几成假，',
        you.get_colored_name(),
        ' 不得而知',
      ]);
      await era.printAndWait([
        '但……',
        tachyon.sex,
        '目光中，几个月前几乎消失的光芒',
      ]);
      await era.printAndWait([
        '令 ',
        you.get_colored_name(),
        ' 灼目，陷入感动却已经熄灭的光芒',
      ]);
      await era.printAndWait('在今夜，又亮起了微弱的火光');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_end: (() => {
    const title = 'わかります';
    /**
     * Plan B & 曼城茶座同时参赛
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {string} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} tachyon_win 爱丽速子是否获胜
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tachyon_win,
    ) => {
      await era.printAndWait('啊啊，原来如此');
      era.println();
      await era.printAndWait(['天皇赏春']);
      await era.printAndWait('看着那两人在最终直线上的争斗');
      await era.printAndWait('总算，弄懂了');
      era.println();
      await era.printAndWait([
        '为什么当初明明知道要以 ',
        tachyon.get_colored_name(),
        ' 的成果做为基石也要支持 ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait([
        '为什么那天晚上却又为 ',
        tachyon.get_colored_name(),
        ' 的回答感到欣喜',
      ]);
      era.println();
      await era.printAndWait([
        '在看见那超越光速的身姿，以及如同漆黑的猎犬一般撕咬前者的跑法时，终于理解了',
      ]);
      await era.printAndWait([
        '早在第一次看见',
        tachyon.couple_title,
        '跑步的模样时',
      ]);
      await era.printAndWait([
        '自己，就已经深深爱上',
        tachyon.couple_title,
        '',
        era.get('love:25') >= 75 && love >= 75 ? '' : '的跑法',
        '了',
      ]);
      era.println();
      await era.printAndWait(['闪烁如光的', tachyon.get_colored_sex()]);
      await era.printAndWait(['漆黑如影的', coffee.get_colored_sex()]);
      await era.printAndWait(['最开始就是如此简单的事']);
      era.println();
      await era.printAndWait('只是像孩子一样稚气的愿望');
      await era.printAndWait('想要分出强弱……不，只是想要看同场的竞技');
      await era.printAndWait([
        '强还是弱那都不是重点，只是想看',
        tachyon.couple_title,
        '奔跑的模样',
      ]);
      era.println();
      await era.printAndWait('希望终点前的这段直线可以永远不要结束');
      await era.printAndWait([
        '希望可以永远看着',
        tachyon.couple_title,
        '在赛场上奔驰的这一幕',
      ]);
      await era.printAndWait([
        '不知不觉，',
        you.get_colored_name(),
        ' 流下泪来',
      ]);
      era.println();
      await era.printAndWait('是光，还是影');
      await era.printAndWait('是照亮一切的光使阴影无处遁形');
      await era.printAndWait('还是吞没一切的黑暗将光明噬尽');
      era.println();
      await you.say_as_passer_by_and_wait('解说', [
        '撕咬至最后一刻的大接战！',
        coffee.get_colored_name(),
        '！还是 ',
        tachyon.get_colored_name(),
        '！是超光速的逃脱还是摩天楼的逮捕！现在，冲过终点的是……！',
      ]);
      era.drawLine();
      if (tachyon_win) {
        await tachyon.say_and_wait('………赢了……吗？');
      } else {
        await tachyon.say_and_wait('………输了……吗？');
      }
      era.println();
      await tachyon.print_and_wait('不可理喻');
      await tachyon.print_and_wait('毫无道理');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 的出赛，是为了让 ',
        coffee.get_colored_name(),
        ' 取得成功',
      ]);
      await tachyon.print_and_wait([
        '为了让',
        coffee.sex,
        '登上巅峰，在比赛中针对',
        coffee.sex,
        '最难受的点进行刺激，迫使',
        coffee.sex,
        '产生进步',
      ]);
      await tachyon.print_and_wait([
        '然后……不引人注目的退居幕后，让',
        tachyon.sex,
        '享受名为胜利的补偿',
      ]);
      if (tachyon_win) {
        await era.printAndWait('结果');
        await you.say_as_passer_by_and_wait('解说', [
          '是 ',
          tachyon.get_colored_name(),
          '！超越光速，立于淀坡之上的盾之荣光归于 ',
          tachyon.get_colored_name(),
          '！',
        ]);
      } else {
        await tachyon.print_and_wait('明明应该是这样的，那……');
        era.println();
        await you.say_as_passer_by_and_wait('解说', [
          '是 ',
          coffee.get_colored_name(),
          '！将超光速吞没，立于淀坡之上的盾之荣光归于 ',
          coffee.get_colored_name(),
          '！',
        ]);
        era.println();
        await tachyon.print_and_wait('为什么……此刻却感到如此的……不甘心！');
      }
      era.println();
      await tachyon.print_and_wait('一开始明明很正常的');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' 的优势和劣势都在其稳定性',
      ]);
      await tachyon.print_and_wait([
        '由于极强的稳定，使得',
        tachyon.sex,
        '在最考验强度的长距离比赛中总能取得优势',
      ]);
      await tachyon.print_and_wait([
        '但也因为太过稳定，导致',
        tachyon.sex,
        '欠缺关键时的爆发力',
      ]);
      await tachyon.print_and_wait([
        '所以破坏了',
        tachyon.sex,
        '的舒适状态，这样才能刺激',
        tachyon.sex,
        '超越极限',
      ]);
      era.println();
      await tachyon.print_and_wait('结果，出乎意料的');
      await tachyon.print_and_wait([
        tachyon.sex,
        '不但找回了节奏，还更进一步的进化，完善了自己的跑法',
      ]);
      await tachyon.print_and_wait('到此，这场比赛的目的就应该已经结束了才对');
      await tachyon.print_and_wait('可是……');
      era.println();
      await tachyon.print_and_wait('原因不用想也知道');
      await tachyon.print_and_wait('那天晚上和后辈的对话是主要原因');
      await tachyon.print_and_wait(['但是……后辈', tachyon.sex, '也没做错什么']);
      await tachyon.print_and_wait([
        '有问题的，是 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.print_and_wait(
        '如果心中没有犹豫的话，那时候应该能准确回答出口的',
      );
      await tachyon.print_and_wait('不管是敷衍的话语，还是诚实回答');
      await tachyon.print_and_wait('只要心中没有疑惑，应该就能说出口的');
      era.println();
      await tachyon.say_and_wait('我……');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，说到底还是一名',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait('还是无法抗拒，奔跑和争胜的本能');
      await tachyon.print_and_wait([
        '明明关于',
        tachyon.uma_sex_title,
        '的可能性还有很多其他的路径',
      ]);
      await tachyon.print_and_wait('没有必要执着于赛场的');
      await tachyon.print_and_wait([
        '却还是选择了 ',
        call_25,
        '，哪怕只能痛苦的看着他人奔跑的模样，也不选择其他道路的原因',
      ]);
      await tachyon.print_and_wait([
        '因为……',
        tachyon.get_colored_name(),
        '，是爱着跑步的啊',
      ]);
      era.println();
      await tachyon.print_and_wait('想到这里，忽然释怀了');
      await tachyon.print_and_wait(
        '无论找多么冠冕堂皇的借口和理由来掩盖都一样',
      );
      await tachyon.print_and_wait([
        '无论怎么努力，也无法挣脱',
        tachyon.uma_sex_title,
        '的本能',
      ]);
      await tachyon.print_and_wait('……也不想挣脱');
      await tachyon.print_and_wait([
        '想要变成最快最强的',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait('想要与敌手纠缠死斗到最后一刻');
      await tachyon.print_and_wait('想要……证明自己');
      era.println();
      await tachyon.print_and_wait([
        '……但是，这样的话，自己该怎么去面对',
        you.sex,
      ]);
      await tachyon.print_and_wait(
        '一直帮助着自己的，总在身边支持着自己的那个人',
      );
      await tachyon.print_and_wait(['该用什么面目去面对', you.sex]);
      await tachyon.print_and_wait(['……哪怕是', you.sex, '，一定也会生气的吧']);
      await tachyon.print_and_wait([
        '身为 ',
        tachyon.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 的专属训练员',
      ]);
      await tachyon.print_and_wait([
        '当初说好的，将比赛让给 ',
        call_25,
        '，自己专注于幕后',
      ]);
      era.println();
      await tachyon.print_and_wait('结果……');
      if (tachyon_win) {
        await tachyon.print_and_wait('这个不受控的，不稳定的问题儿童');
        await tachyon.print_and_wait('凭着一时的热血上头，搞砸了一切');
      } else {
        await tachyon.print_and_wait([
          '现在却要告诉',
          you.sex,
          '，自己……还是想要继续跑步？',
        ]);
        await tachyon.print_and_wait('耍人也该有个限度吧');
      }
      era.println();
      await tachyon.print_and_wait('不知不觉');
      await tachyon.print_and_wait([tachyon.get_colored_name(), ' 逃离了赛场']);
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 没有回到选手休息室',
      ]);
      await era.printAndWait(['整个赛场里也没有', tachyon.sex, '的踪影']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 担心的打电话回去找宿舍长确认消息，得到了 ',
        tachyon.get_colored_name(),
        ' 已经回到特雷森的消息才放下心来',
      ]);
      await era.printAndWait('……不，也不能说放下心来');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 究竟怎么了……为什么会自己跑回学园',
      ]);
      await era.printAndWait(['有机会找', tachyon.sex, '聊聊吧']);
    };
    f.title = title;
    return f;
  })(),
  we_b_95_18: (() => {
    const title = '重新绽放的光子';
    /**
     * 春季天皇赏胜过茶座后触发
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      relation,
      love,
    ) => {
      await era.printAndWait('不能再这样下去了');
      await era.printAndWait([
        '在 ',
        tachyon.get_colored_name(),
        ' 不知道第几次回避与 ',
        you.get_colored_name(),
        ' 的对话后，',
        you.get_colored_name(),
        ' 下定了决心',
      ]);
      await era.printAndWait('虽然训练都有来，也都正常的做着实验');
      await era.printAndWait([
        '但只要一停下来，想与',
        tachyon.sex,
        '谈论天春时的事情就会马上逃离现场',
      ]);
      await era.printAndWait('无论何时何地，甚至哪怕是实验中也是');
      era.println();
      await era.printAndWait('这样下去不行');
      await era.printAndWait([
        '看着',
        tachyon.sex,
        '的表情，一天比一天衰败，甚至畏缩',
      ]);
      await era.printAndWait([tachyon.get_colored_name(), ' 不应该是这样']);
      await era.printAndWait([tachyon.get_colored_name(), ' 不可以是这样']);
      era.println();
      await era.printAndWait('明明好不容易寻回了眼中的光');
      await era.printAndWait('却因为这种事情熄灭什么的，绝对不行');
      await era.printAndWait('逃避的原因，大概也能理解');
      if (relation <= 75) {
        await era.printAndWait('虽然还有一部分不得而知');
      }
      await era.printAndWait('因此……');
      era.printButton(`必须要对${tachyon.sex}说清楚才行`, 1);
      await era.input();
      era.drawLine();
      await tachyon.print_and_wait('……已经逃避了几周了');
      await tachyon.print_and_wait(['自天春结束以来，一直在躲着', you.sex]);
      await tachyon.print_and_wait('躲着那个，为了我牺牲一切的人');
      await tachyon.print_and_wait([
        '理性而言，继续负责一名不想跑步，没有未来的',
        tachyon.uma_sex_title,
        '，这是毫无意义，浪费名额资源及时间的行为',
      ]);
      await tachyon.print_and_wait([
        '感性而言，是将',
        you.sex,
        '的梦想，将',
        you.sex,
        '所着迷的跑法毁掉，于此之上还要求',
        you.sex,
        '配合什么荒谬的Plan B，牺牲梦想去配合',
        you.sex,
        '人',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '即便如此，',
        you.sex,
        '还是义无反顾的跟了上来',
      ]);
      await tachyon.print_and_wait('为了我的研究，自愿当实验品');
      await tachyon.print_and_wait([
        '为了我的任性，带着 ',
        call_25,
        ' 一起被卷入其中',
      ]);
      await tachyon.print_and_wait([
        '因此作为交换，想让',
        you.sex,
        '和 ',
        call_25,
        ' 获得声誉，作为微不足道的补偿',
      ]);
      await tachyon.print_and_wait('但是……');
      era.println();
      await tachyon.say_and_wait('……嗯？');
      era.println();
      await tachyon.print_and_wait([
        '今天也一样，刻意避开了与',
        you.sex,
        '的对话，躲避除去必要情况以外的交流，回到实验室前',
      ]);
      await tachyon.print_and_wait('但……已经有人在实验室外等待着自己了');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await tachyon.print_and_wait('不要');
      await tachyon.print_and_wait('不行');
      await tachyon.print_and_wait('不是现在');
      era.println();
      await tachyon.print_and_wait('明明很简单');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 只要在宝冢纪念输掉就好',
      ]);
      await tachyon.print_and_wait(['只要在宝冢纪念让出胜利，就可以重新……']);
      era.println();
      await tachyon.print_and_wait('不，已经没有办法了');
      await tachyon.print_and_wait('奔跑的本能无法抑制');
      await tachyon.print_and_wait('这只不过是自欺欺人，逃避现实的做法');
      era.println();
      await tachyon.print_and_wait('眼前的身影站在走道的正中央');
      await tachyon.print_and_wait('全身颤抖……也是，肯定会愤怒的吧');
      await tachyon.print_and_wait('犯了错之后还不停逃避的蠢货');
      await tachyon.print_and_wait('算了，已经做好觉悟了');
      await tachyon.print_and_wait('将一切的怒气……发泄出来吧');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.drawLine();
      await era.printAndWait('首先，该说什么呢？');
      await era.printAndWait([
        '应该先说出口吧，告诉',
        tachyon.sex,
        '，自己并没有责怪的意思',
      ]);
      await era.printAndWait([
        '说到底，因为对手放水才获得的胜利，那种胜利 ',
        coffee.get_colored_name(),
        ' ',
        tachyon.sex,
        '是绝对不会高兴的',
      ]);
      await era.printAndWait([
        '帮助 ',
        coffee.get_colored_name(),
        ' 抵达更高的巅峰，这一目的并没有被毁坏',
      ]);
      await era.printAndWait([
        '不如说，前面觉得可以把 ',
        coffee.get_colored_name(),
        ' 完全握在手中揉捏的想法，那也太过傲慢了',
      ]);
      await era.printAndWait(
        '接下来，继续拼尽全力的参加比赛，互相砥砺，才是Plan B最好的执行方式',
      );
      await era.printAndWait('所以……');
      await era.printAndWait('没错，就这么说吧');
      era.printButton('「速子……」', 1);
      era.printButton('「天皇赏跑的，真的太厉害了！」', 2);
      await era.input();
      await tachyon.say_and_wait('……欸？');
      era.println();
      await era.printAndWait('没错');
      await era.printAndWait('比起那些理论道理，还是这样的话语更适合自己');
      await era.printAndWait([
        '痴迷于 ',
        tachyon.get_colored_name(),
        ' 的跑法，并且愿意为其牺牲一切的豚鼠',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 不知为何，忽然直直地盯着自己的双眼',
      ]);
      await era.printAndWait('如同第一次见面时一样，也和皋月赏、德比前一样');
      await era.printAndWait([
        '到底自己的眼睛是什么颜色的，能让',
        tachyon.sex,
        '每次都发出那样的感叹呢',
      ]);
      era.println();
      await tachyon.say_and_wait('……可是，这样的话，Plan B……');
      era.printButton(
        `「必须要速子放水才能胜利的茶座，真的有可能超越${tachyon.uma_sex_title}的极限吗？」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait('是因为对梦想的盲目吗？');
      await era.printAndWait(['还是对 ', coffee.get_colored_name(), ' 的执着']);
      await era.printAndWait([
        '导致 ',
        tachyon.get_colored_name(),
        ' 似乎遗忘了最重要的事',
      ]);
      if (love >= 75) {
        await era.printAndWait([
          '这样看来婚后或许 ',
          tachyon.get_colored_name(),
          ' 会是意外溺爱孩子的性格也说不定',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([
        '……这是，',
        tachyon.get_colored_name(),
        ' 的训练员的说法吧？那 ',
        coffee.get_colored_name(),
        ' 的训练员怎么办',
      ]);
      if (relation <= 75) {
        era.println();
        await era.printAndWait([
          '……一时的震惊让 ',
          you.get_colored_name(),
          ' 忘记言语',
        ]);
        await era.printAndWait([
          '无法明白的 ',
          tachyon.get_colored_name(),
          ' 逃离自己的原因',
        ]);
        await era.printAndWait([
          '如果是对 ',
          coffee.get_colored_name(),
          ' 抱有罪恶感也就算了，为什么要躲避自己',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '……在为自己担心……？',
        ]);
      }
      await era.printAndWait([
        '那么，',
        coffee.get_colored_name(),
        ' 的训练员，应该对此做出回应吧',
      ]);
      era.printButton('「很不甘心……没能带着茶座取得胜利」', 1);
      era.printButton('「所以，宝冢茶座绝对会变得比现在更强来超越速子！」', 2);
      await era.input();
      await tachyon.say_and_wait('……不甘心……吗？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 咀嚼着话语，但是，要说的还没说完',
      ]);
      era.printButton('「但是，身为速子的训练员！」', 1);
      era.printButton(
        '「绝不会让速子输给茶座的，宝冢一定也是速子的胜利！」',
        2,
      );
      await era.input();
      await era.printAndWait('没有错');
      await era.printAndWait([
        '这就是，',
        tachyon.get_colored_name(),
        ' 的训练员「以及」',
        coffee.get_colored_name(),
        ' 的训练员做出的回答',
      ]);
      await era.printAndWait('理由？天春的时候不就说过了吗？');
      await era.printAndWait([
        '因为自己，深深的爱着',
        tachyon.couple_title,
        '的跑法',
      ]);
      if (love >= 75 && era.get('love:25') >= 75) {
        await era.printAndWait(['因为自己，深深的爱着', tachyon.couple_title]);
      }
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait('低声的呼唤');
      await era.printAndWait('然后是令人紧张的沉默');
      await era.printAndWait('在不知道多久的沉默过后……');
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '，你就这么喜欢我的跑法吗？',
      ]);
      era.println();
      await era.printAndWait('答案自不用说，脸上的表情和眼神已经说明了一切');
      era.println();
      await tachyon.say_and_wait('…………那么，有兴趣，陪我多走几段路吗？');
      await tachyon.say_and_wait('陪我，来趟法国的浪漫之旅吧');
      era.println();
      await era.printAndWait('……欸？');
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_b: (() => {
    const title = '齐心';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('热血沸腾');
      await era.printAndWait('已经多久没有感受过了，这种比赛的热情');
      era.println();
      await tachyon.say_and_wait([callname, '……我要上了']);
      era.printButton(`「上吧！让我看看${tachyon.uma_sex_title}的极限！」`, 1);
      era.printButton('「放心赢下吧，再让我热血沸腾一次吧！」', 2);
      await era.input();
      await tachyon.say_and_wait('嗯……然后，等到宝冢结束……');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 点了点头']);
      await era.printAndWait('那时候说好的，更宽广的世界');
      era.printButton('「将我们的极限，刻在世界的顶端吧！」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  takz_kin_end_b: (() => {
    const title = '前往极限';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await tachyon.say_and_wait(['哈啊……哈啊……茶……', call_25, '……！']);
      era.println();
      await tachyon.print_and_wait('拼尽全力喊出的嘶吼');
      await tachyon.print_and_wait('在比赛中说话');
      await tachyon.print_and_wait(
        '这无论在实验的角度来看，又或者是竞赛的角度来看，都是极度不符合常理的行为',
      );
      await tachyon.print_and_wait([
        '但是，',
        tachyon.get_colored_name(),
        ' 还是喊出声了',
      ]);
      era.println();
      await tachyon.print_and_wait('在最终直线前，在最后的冲刺开始前');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 发出的，违背常理的宣言',
      ]);
      era.println();
      await tachyon.say_and_wait('要是能追上的话……就试试看啊！');
      era.println();
      await tachyon.print_and_wait(['跑在前方的 ', tachyon.get_colored_name()]);
      await tachyon.print_and_wait('对着紧紧撕咬在后的猎犬发出挑衅');
      era.drawLine();
      await coffee.say_and_wait('……无聊');
      await coffee.say_and_wait('你觉得做这种事能让任何人开心吗？');
      await coffee.say_and_wait(
        '不需要你让，我也会堂堂正正的超越你……然后，超越朋友',
      );
      era.println();
      await tachyon.print_and_wait(
        '比赛前的坦承错误，果不其然，被狠狠数落了一顿啊',
      );
      await tachyon.print_and_wait('不过……嘛，这样也轻松多了');
      await tachyon.print_and_wait([
        '要是像 ',
        callname,
        ' 那样全肯定反而才更让人担心',
      ]);
      await tachyon.print_and_wait('所以，今天可以毫无顾虑，用尽全力的跑了');
      era.println();
      await tachyon.print_and_wait('对对手的尊重');
      await tachyon.print_and_wait('对自己的渴望');
      await tachyon.print_and_wait('对支持者的回报');
      era.println();
      await tachyon.say_and_wait([
        '以此献上的，',
        tachyon.get_colored_name(),
        ' 于日本国内的最后一舞',
      ]);
      await you.say_as_passer_by_and_wait('解说', [
        tachyon.get_colored_name(),
        '！还是 ',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！现在，两人冲线———————————！',
      ]);
      era.println();
      await tachyon.print_and_wait('谁赢了');
      await tachyon.print_and_wait('谁输了');
      await tachyon.print_and_wait('不，那些都无关紧要');
      era.println();
      await tachyon.print_and_wait('这样一切就，都结束了');
      await tachyon.print_and_wait([
        '今天的比赛，',
        tachyon.get_colored_name(),
        ' 跑出了自己的最佳',
      ]);
      await tachyon.print_and_wait('下场比赛，也已经在射程以内了');
      era.drawLine();
      era.printButton('「好强，好快！不管是茶座……还是速子都是……！」', 1);
      era.printButton('「能够成为你们的训练员……真是……太好了！」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '呵呵，忽然讲这么煽情的话，搞得像大结局一样，我们的比赛可还没结束呢，',
        callname,
      ]);
      era.println();
      await era.printAndWait('啊啊，是啊');
      era.println();
      await tachyon.say_and_wait('……记者会，差不多要开始了');
      era.println();
      await era.printAndWait([
        '上半年最强',
        tachyon.uma_sex_title,
        '总决赛，这种比赛想也知道必然会聚集许多记者媒体',
      ]);
      era.print('就在这个舞台上，宣布今后的目标吧');
      era.printButton('「上吧，速子」', 1);
      era.printButton('「我永远站在你身后」', 2);
      await era.input();
      await tachyon.say_and_wait('……嗯，我上了');
      era.drawLine();
      await tachyon.say_and_wait([
        '如此这般，于是下场比赛，我的预定计划是，世界最高峰，凯旋门杯。以上有任何记者有问题吗？',
      ]);
      era.println();
      await era.printAndWait('鸦雀无声');
      await era.printAndWait([
        '哪怕是在记者会前便听说了今天 ',
        tachyon.get_colored_name(),
        ' 阵营将宣布重量级消息的记者',
      ]);
      await era.printAndWait('也不由得因这重磅消息而大吃一惊');
      era.println();
      await tachyon.say_and_wait('———如果没有问题的话，那么今天的采访到此……');
      era.println();
      await era.printAndWait(
        '直到这时，记者们才忽然如梦中醒，纷纷开始做出提问',
      );
      await era.printAndWait(
        '但看得出由于太过突然的展开，导致他们原本准备的问题全都派不上场，只能临时寻找话题',
      );
      await era.printAndWait([
        '而 ',
        tachyon.get_colored_name(),
        ' 也不慌不忙的进行回答',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        '记者A',
        '为什么如此突然做出决定，真的是深思熟虑下做出的出赛安排吗？',
      );
      await tachyon.say_and_wait(
        '这是我与训练员君相谈后做出的决定，是在几个月前就已经决定的，并不突然也不唐突，只是先前并没有通知媒体',
      );
      await you.say_as_passer_by_and_wait('记者B', [
        '请问 ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '去年由于不明原因暂停出赛闪耀系列赛的原因是……？今年凯旋门杯应该不会……',
      ]);
      await tachyon.say_and_wait([
        '这方面无可奉告，但我可以做出保证，今年的凯旋门杯我必然会参赛',
      ]);
      await you.say_as_passer_by_and_wait('记者B', [
        '……那个，今天的比赛很精彩，请问 ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '有没有什么想对对手 ',
        coffee.get_colored_name(),
        ' 说的话吗？',
      ]);
      await tachyon.say_and_wait(
        '嗯……也是啊，那么，『不管是你，还是你的朋友，我都会在凯旋门上一并超越』，就这样吧',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 身居幕后，望着记者会上如星光一般闪耀的',
        tachyon.sex,
      ]);
      await era.printAndWait('一度黯淡的光子，如今正绽放着最为闪耀的光芒');
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_31: (() => {
    const title = '再度闪耀的光子';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tenn_spr,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 独自在沙滩上奔跑着',
      ]);
      await era.printAndWait('与前一年的此时仿佛似曾相似的场景');
      await era.printAndWait([
        '想到这，',
        tachyon.get_colored_name(),
        ' 忽然停下脚步',
      ]);
      era.println();
      await era.printAndWait('此时此刻，恰如彼时彼刻');
      era.println();
      await tachyon.say_and_wait('……你来了啊');

      era.printButton('「我来了」', 1);
      await era.input();
      await tachyon.say_and_wait('你不该来的');

      era.printButton('「但我还是来了」', 1);
      era.println();
      await era.printAndWait([
        '明明没有提前约定过，',
        you.get_colored_name(),
        ' 却还是在隔了一年后的这一天，再一次来到这片沙滩上',
      ]);
      era.println();
      await tachyon.say_and_wait('……好了，别闹了，说正事');
      era.println();
      await era.printAndWait([
        '不愿意配合 ',
        you.get_colored_name(),
        ' 继续接梗下去的 ',
        tachyon.get_colored_name(),
        ' 马上想要进入正题，却被打断了发言',
      ]);
      era.printButton('「比起那个」', 1);
      era.printButton('「可以先跑一趟让我看看吗？」', 2);
      await era.input();
      era.drawLine();
      await era.printAndWait('比起去年的这个时候');
      await era.printAndWait([
        '恢复训练的 ',
        tachyon.get_colored_name(),
        '，跑法自然不可与昨日同比',
      ]);
      await era.printAndWait('但是，差的却不只是训练的程度');
      era.println();
      await era.printAndWait(
        '如同去年，明明是久未锻炼下，形不成形的跑法，却还是闪烁着令人着迷的光芒一般',
      );
      await era.printAndWait([
        '如今的 ',
        tachyon.get_colored_name(),
        '，闪耀着 ',
        you.get_colored_name(),
        ' 曾见过的最耀眼的光芒',
      ]);
      await era.printAndWait(['亮的令人不由得产生一种错觉']);
      await era.printAndWait('———亮的哪怕此刻熄灭，也不会有任何一点遗憾一般');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，',
        prix_lat,
        ' 结束之后，我会退出闪耀系列赛',
      ]);
      era.println();
      await era.printAndWait('不是暂停，而是退出，换句话说就是退役');
      await era.printAndWait('一旦退出，将不再有任何挽回的机会');
      era.println();
      await tachyon.say_and_wait(
        '我的腿……勉强撑了半年下来，也已经差不多知足了',
      );
      await tachyon.say_and_wait([
        '天皇赏春，还有宝冢纪念……然后，最后的凯旋门赏',
      ]);
      await tachyon.say_and_wait([
        '……所以最后我想问你，',
        callname,
        '……你不后悔吗？',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 说的话让 ',
        you.get_colored_name(),
        ' 开始回忆',
      ]);
      await era.printAndWait('后悔，后悔什么？');
      await era.printAndWait([
        '后悔让 ',
        tachyon.get_colored_name(),
        ' 在 ',
        takz_kin,
        ' 发挥全力？',
      ]);
      await era.printAndWait([
        '后悔在 ',
        tenn_spr,
        ' 前的晚上没有阻止 ',
        tachyon.get_colored_name(),
        '？',
      ]);
      await era.printAndWait('后悔选择了 Plan B？');
      await era.printAndWait([
        '还是……后悔招募了 ',
        tachyon.get_colored_name(),
        '？',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 将问题问出口，',
        tachyon.get_colored_name(),
        ' 沉默了一会',
      ]);
      await era.printAndWait('随后，开口回答');
      era.println();
      await tachyon.say_and_wait('……都有');
      await tachyon.say_and_wait([
        '不后悔吗？找了我这么一个难搞，出尔反尔，三心二意的',
        tachyon.uma_sex_title,
        '当负责人',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait([
          '要是当初只负责了 ',
          call_25,
          ' 就好了～之类的？',
        ]);
        era.println();
        await era.printAndWait(
          '虽然听起来像在询问，但给人的感觉却更接近于吃醋的闹脾气',
        );
      }
      era.println();
      await era.printAndWait([
        '听',
        tachyon.sex,
        '这么说，',
        you.get_colored_name(),
        ' 认真的回忆了一下',
      ]);
      await era.printAndWait([
        '想起宝冢纪念时，脑袋里只能回想起 ',
        tachyon.get_colored_name(),
        ' 与 ',
        coffee.get_colored_name(),
        ' 的巅峰对决',
      ]);
      await era.printAndWait([
        '想起天皇赏春时，只能回想起 ',
        coffee.get_colored_name(),
        ' 诡谲的跑法以及……',
        tachyon.get_colored_name(),
        ' 那再次绽放的闪光',
      ]);
      await era.printAndWait([
        '想起选择了Plan B的那天……真心希望 ',
        tachyon.get_colored_name(),
        ' 可以安稳平安的心情',
      ]);
      await era.printAndWait([
        '最后，想起那天在训练场，被',
        tachyon.sex,
        '的跑法灼伤双眼，留下永远无法愈合的伤痕的那天',
      ]);
      era.printButton('「不后悔」', 1);
      era.printButton('「后悔，后悔没早一点认识速子」', 2);
      await era.input();
      await tachyon.say_and_wait('……哼哼，这样啊');
      await tachyon.say_and_wait('那么，就继续跟着我吧……');
      await tachyon.say_and_wait([
        '一起登上世界的巅峰，然后我会让你看见研究的成果———最能令人满意的，属于 ',
        tachyon.get_colored_name(),
        ' 的跑法！',
      ]);
      await era.printAndWait('跑出至今为止，最令人满意，最令人眩目的跑法');
      await era.printAndWait(
        '让一直关注着自己的，身边最大的粉丝满意的一场比赛',
      );
      await era.printAndWait('不知不觉，唇间有些干燥');
      await era.printAndWait('期待着更加精彩的比赛，期待着更加璀璨的姿态');
      await era.printAndWait([
        '身为偶像的',
        tachyon.sex,
        '都已经如此开口了，被其跑法所迷诱的豚鼠，除了同意，还有什么话能说呢',
      ]);
      era.printButton('「上吧，速子」', 1);
      await era.input();
      await era.printAndWait('过去不会后悔，现在如此，未来也将如此');
      await era.printAndWait(['两人踏向了法国———凯旋门赏']);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_35: (() => {
    const title = '法国（？）';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, call_25) => {
      await tachyon.say_and_wait('这里……就是法国吗');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 望着窗外，天连一色的夜景',
      ]);
      await tachyon.print_and_wait('这里，就是法国啊……');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' 魂牵梦萦的地方',
      ]);
      await tachyon.print_and_wait([
        '无数日本',
        tachyon.uma_sex_title,
        '沉戟的地方',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，在最后将要踏上顶点的地方',
      ]);
      era.println();
      await tachyon.print_and_wait('然而……');
      await tachyon.print_and_wait('仰望星空之人，总会忘记脚前的洼地');
      await tachyon.print_and_wait('好高骛远，更是凝聚了前人智慧的话语');
      era.drawLine();
      era.printButton('「……不，这里是迪拜」', 1);
      await era.input();
      await tachyon.say_and_wait('…………欸？');
      await era.printAndWait([
        '很明显，脑袋里已经被凯旋门赏占据的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '并没有听见 ',
        you.get_colored_name(),
        ' 在一周前就说过的中途要在迪拜转机一事',
      ]);
      era.printButton('「不过迪拜的比赛也是世界知名的，要是有机会……」', 1);
      await era.input();
      await era.printAndWait([
        '说到这，',
        you.get_colored_name(),
        ' 忽然安静了下来',
      ]);
      await era.printAndWait('迪拜的比赛确实是世界知名');
      await era.printAndWait(
        '知名的原因，主要在它的奖金，世界含「金」量最高的比赛无误',
      );
      await era.printAndWait('但是……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，已经没有「机会」了',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '唔，有机会的话，可以看看迪拜的比赛吧，加入……之后 ',
        call_25,
        ' 的训练计划试试？',
      ]);
      era.println();
      await era.printAndWait([
        '然而，',
        tachyon.sex,
        '却好像完全没有注意到一般',
      ]);
      await era.printAndWait('轻描淡写的便主动提起了被躲开的话题');

      era.printButton(
        '「……等回去之后，速子还会继续帮茶座制定训练相关的计划吗？」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('那还用说……');
      await tachyon.say_and_wait([
        '这场凯旋门赏，只是我个人的一次任性而已，真正的可能性，真正的希望还是放在 ',
        call_25,
        ' 身上的',
      ]);
      await tachyon.say_and_wait(['对了，这么说起来，', call_25, ' 怎么办？']);
      era.printButton(
        '「不用担心，我和茶座会通过平板联系，而且每个月都会飞回日本去处理日本的事情」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……每个月？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 有些吃惊的看着 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([you.get_colored_name(), ' 点了点头作为回应']);
      await era.printAndWait('啊，难道说是担心钱的问题吗？');
      era.printButton(
        '「毕竟这算出差，机票钱什么的学园会出，这方面不用担心」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……抱歉');
      era.printButton('「没什么」', 1);
      era.printButton('「是我自己希望这么做的」', 2);
      await era.input();
      await era.printAndWait('这是实话，也是谎话');
      await era.printAndWait('……其实，无论海外还是海内，都是可以选择的');
      await era.printAndWait([
        '可以选择专心跟着 ',
        tachyon.get_colored_name(),
        ' 远征，也可以选择留在日本陪着 ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait(
        '特雷森学园再缺人也没有缺到需要让训练员这样分身乏术的地步',
      );
      await era.printAndWait('但是……');
      era.printButton('「因为我放心不下」', 1);
      era.printButton('「无论是速子还是茶座都一样」', 2);
      await era.input();
      await era.printAndWait([
        '不忍心看那名追逐朋友背影的',
        tachyon.teen_sex_title,
        '孤单',
      ]);
      await era.printAndWait([
        '不忍心看独在异乡奔向绝路的',
        tachyon.teen_sex_title,
        '寂寞',
      ]);
      await era.printAndWait('所以，只能做出这种委屈自己的，优柔寡断的选择');
      era.println();
      await tachyon.say_and_wait('……真是个烂好人啊');
      era.printButton('「但也不是没有好处」', 1);
      era.printButton('「这样就能同时看着你和茶座的跑法了」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '为了这种事坐十几个小时的飞机还是来回，疯了吧',
      );
      era.println();
      await you.say_and_wait('谢谢夸奖');
      await era.printAndWait([
        you.get_colored_name(),
        ' 笑着回应了 ',
        tachyon.get_colored_name(),
        ' 的感叹',
      ]);
      await era.printAndWait('就当作是先前不小心破坏气氛的补偿了');
      era.println();
      await tachyon.say_and_wait('……那么，就看着我的跑法，直到最后吧');
      era.println();
      await era.printAndWait('在名为世界的舞台上');
      await era.printAndWait([
        tachyon.sex,
        '向 ',
        you.get_colored_name(),
        ' 伸出手',
      ]);
      await era.printAndWait([
        '邀请 ',
        you.get_colored_name(),
        ' 一同出演，',
        tachyon.get_colored_name(),
        ' 的最后一出舞',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_95_36: (() => {
    const title = '决心';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (tachyon, you, callname, prix_lat) => {
      await tachyon.say_and_wait('哈啊……哈啊……');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 在法国的训练场上奔跑着',
      ]);
      await tachyon.print_and_wait(['这几天是', callname, '回日本的日子']);
      era.println();
      await tachyon.say_and_wait(['接着就是，世界的最高峰，凯旋门赏……']);
      era.println();
      await tachyon.print_and_wait(['现在', you.sex, '应该还在疑惑吧']);
      await tachyon.print_and_wait(['到底为什么要选择凯旋门赏']);
      await tachyon.print_and_wait([
        '抵达极限的彼方，这是 ',
        tachyon.get_colored_name(),
        ' 的梦想',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        '也一直以为，自己能够为了这个目标赌上一切，只要能够抵达，无论那个人是不是自己都无所谓',
      ]);
      await tachyon.print_and_wait([
        '……但是，',
        tachyon.sex,
        '其实并没有自己想的那么无所谓',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '本质上，',
        tachyon.sex,
        '还是想要奔跑的',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait([
        '但是，',
        tachyon.sex,
        '也不想放弃超越极限的梦想',
      ]);
      await tachyon.print_and_wait(
        '那么，该怎么办呢，该怎么做才有两全其美的办法',
      );
      await tachyon.print_and_wait([
        '很简单，只要，',
        tachyon.get_colored_name(),
        ' 成为「极限」就好',
      ]);
      era.println();
      await tachyon.print_and_wait(['所以才选择 ', prix_lat]);
      await tachyon.print_and_wait('选择世界的最高峰，最能代表极限的赛事');
      await tachyon.print_and_wait([
        '在这个舞台上，以自身来定义，',
        tachyon.uma_sex_title,
        '的极限',
      ]);
      era.println();
      await tachyon.say_and_wait('……呵呵');
      era.println();
      await tachyon.print_and_wait('在想到超越众人，化身极限的时候');
      await tachyon.print_and_wait('身体忍不住的发热');
      era.println();
      await tachyon.say_and_wait('果然，还是渴望奔跑的啊……我');
      era.println();
      await tachyon.print_and_wait('决心已经燃起');
      await tachyon.print_and_wait('那么便抛开一切，专注于眼前的胜利吧');
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_37: (() => {
    const title = '极限的标准';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await era.printAndWait('在凯旋门赏的前一天');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 居住的酒店中，来了一名不速之客',
      ]);
      era.println();
      await tachyon.say_and_wait(['……', call_25, '？你怎么会……']);
      await coffee.say_and_wait(['…………', c_call_t]);
      era.println();
      await era.printAndWait(['本应留在日本的 ', coffee.get_colored_name()]);
      await era.printAndWait(['在凯旋门赏的前一天，抵达法国']);
      era.println();
      await coffee.say_and_wait(['……是我拜托 ', callname_25, ' 带我来的']);
      await coffee.say_and_wait([callname_25, ' 说，说……']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 静静的坐在床边，没有开口',
      ]);
      await era.printAndWait([
        '等待着 ',
        coffee.get_colored_name(),
        ' 将话说完',
      ]);
      era.println();
      await coffee.say_and_wait(['说，', c_call_t, '，你的腿……']);
      await tachyon.say_and_wait(
        '……嗯，已经在极限了，哪怕不是如此，我也会在明天的比赛中拼尽一切……不会留下任何余地',
      );
      await coffee.say_and_wait('……为什么');
      era.println();
      await era.printAndWait([
        '不知为何，比起当事人的 ',
        tachyon.get_colored_name(),
        '，',
        coffee.get_colored_name(),
        ' 反而更显得急迫',
      ]);
      await coffee.say_and_wait([
        '……如果又是跟宝冢前一样，觉得是为我好，为了我和朋友参赛什么的……',
      ]);
      await coffee.say_and_wait(
        '那我是绝对不会接受的，哪怕————要在这里阻止你参赛也一样',
      );
      era.println();
      await era.printAndWait([coffee.get_colored_name(), ' 的双瞳忽然瞪大']);
      await era.printAndWait([
        '瞬间，仿佛有无形的巨手控制住了 ',
        tachyon.get_colored_name(),
        ' 的行动一般',
      ]);
      await era.printAndWait([tachyon.sex, '被束缚在原地，动弹不得']);
      await era.printAndWait([
        '但即便如此，',
        tachyon.sex,
        '的目光却还是依然平静',
      ]);
      await era.printAndWait('而后……');
      era.println();
      await tachyon.say_and_wait('………呵呵');
      await coffee.say_and_wait([c_call_t, '……？']);
      await tachyon.say_and_wait('呵呵呵……哈哈哈！');
      era.println();
      await era.printAndWait([
        '仿佛精神失常一般，哪怕处在这样的情况下，',
        tachyon.get_colored_name(),
        ' 依然畅快的笑出了声来',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '我说啊，',
        call_25,
        '……你是不是，有点太自我意识过剩了',
      ]);
      await coffee.say_and_wait('！？');
      await tachyon.say_and_wait('什么为了你而跑……别想太多了');
      await tachyon.say_and_wait([
        '我的目的，至始至终就只有一个，那就是超越',
        tachyon.uma_sex_title,
        '的极限……证明',
        tachyon.uma_sex_title,
        '的可能性',
      ]);
      era.println();
      await era.printAndWait([
        '不知不觉，原本束缚着 ',
        tachyon.get_colored_name(),
        ' 的力量已经松开',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 好整以暇的站起身，拍了拍身上并不存在的尘土',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……为了达成这个目的，无论要牺牲什么我都愿意，哪怕是我自己也一样',
      );
      await tachyon.say_and_wait([
        '反倒是你，',
        call_25,
        '……你有这样的觉悟吗？现在的你，能够超越我吗？',
      ]);
      await coffee.say_and_wait('…………！');
      await tachyon.say_and_wait(
        '……其他的，等到比赛结束……我会在那时候全部说出口的',
      );
      era.println();
      await era.printAndWait([
        '没有等待应答，',
        tachyon.get_colored_name(),
        ' 便离开了房间',
      ]);
      await era.printAndWait([
        '迎面而来的是一直在房间外等待着两人结束谈话的 ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(['……', callname, '，去你的房间坐坐']);
      era.println();
      await era.printAndWait('……欸？');
      era.println();
      await tachyon.say_and_wait('怎么？');
      era.printButton('「进异性的房间，果然还是不太好吧……」', 1);
      era.printButton('「速子这是在诱惑我吗？」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '蠢货！……刚刚才说完那种话耍完帅，现在马上回房间那不就破功了，所以让我去你房间待一下',
      );
      await tachyon.say_and_wait('顺便……你房间里有实验用的器具吧？');
      await tachyon.say_and_wait([
        '刚刚看见 ',
        call_25,
        ' 那副模样，不知道为什么忽然脑袋里又有灵感了……',
      ]);
      await tachyon.say_and_wait(
        '毕竟我明天要上场，今天也不能乱喝什么奇怪的东西，你会帮我喝的吧～～',
      );
      era.println();
      await era.printAndWait([
        '看着',
        tachyon.sex,
        '浮夸的表现，',
        you.get_colored_name(),
        ' 不由得笑了',
      ]);
      await era.printAndWait('无论明天如何，最起码，享受这今天的时光吧');
    };
    f.title = title;
    return f;
  })(),
  prix_lat_win_b: (() => {
    const title = '止于极限';
    /**
     * Plan B 专属，曼城茶座不能同时参赛
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，登上了世界的顶点',
      ]);
      await era.printAndWait([
        '来自日本的',
        tachyon.uma_sex_title,
        '，打破了世界的纪录',
      ]);
      await era.printAndWait(
        '那灼伤了自己双眼的跑法，第一次，也是最后一次在世界上绽放出最璀璨的光彩',
      );
      era.println();
      await era.printAndWait([
        '比赛后回到选手休息室的 ',
        tachyon.get_colored_name(),
        ' 没有多说什么',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 一如往常的先为',
        tachyon.sex,
        '检查腿部状况',
      ]);
      era.println();
      await tachyon.say_and_wait(['……没有必要了吧，', callname]);
      await tachyon.say_and_wait('明明知道的不是吗？');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 陷入沉默']);
      await era.printAndWait('虽然知道结局，但还是忍不住期待奇迹');
      await era.printAndWait('然而……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 没有多说什么，只是帮着 ',
        tachyon.get_colored_name(),
        ' 用药冷却及减轻腿的负担',
      ]);
      await era.printAndWait([
        '直到官方通知，颁奖仪式已经准备好了，你们才慢慢的朝着舞台走去',
      ]);
      era.println();
      await tachyon.say_and_wait('……那么，怎么样？这场比赛，让你满意了吗？');
      era.println();
      await era.printAndWait('拼尽了一切，燃烧了自己的双腿');
      await era.printAndWait('以此获得的胜利');
      await era.printAndWait('怎么可能不使人着迷，又怎么可能不使人狂热');
      era.println();
      await era.printAndWait('自己，一定不是个称职的训练员吧');
      await era.printAndWait([
        '身为训练员，应该要理智的为',
        tachyon.uma_sex_title,
        '考虑对',
        tachyon.couple_title,
        '最好的选项',
      ]);
      await era.printAndWait([
        '但自己，只是为了看见最美的跑法，最强的跑姿，就放任自己的负责',
        tachyon.uma_sex_title,
        '做出了这种事',
      ]);
      await era.printAndWait(
        '幸好，此时的问题也不是需要以训练员的身份做回答的',
      );
      await era.printAndWait([
        '以一名粉丝，以 ',
        tachyon.get_colored_name(),
        ' 最狂热的死忠粉的身份',
      ]);
      era.printButton('「是我看过的，最精彩的一场比赛了」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 露出了朝阳般的微笑',
      ]);
      await era.printAndWait([
        '比起',
        tachyon.sex,
        '的光芒，略显弱小，却更加柔和，更加温暖的光芒',
      ]);
      era.drawLine();
      await tachyon.print_and_wait('隐隐作痛的腿');
      await tachyon.print_and_wait('明显刺痛的足跟');
      await tachyon.print_and_wait('但比起这些，更多的还是遗憾');
      era.println();
      await tachyon.print_and_wait('虽然早就知道了，但果然……');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，直到最后也还是没能超越极限',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '没有什么好失望的，只不过照着原计划进行而已',
      );
      era.println();
      await you.say_as_passer_by_and_wait('记者A', [
        '速子',
        tachyon.adult_sex_title,
        '！恭喜您今天拿下凯旋门赏！除此之外，这次的凯旋门还打破了历届以来的纪录！',
      ]);
      await you.say_as_passer_by_and_wait(
        '记者A',
        '关于这场胜利，请问有想对对手或日本的亲友说的话吗？',
      );
      era.println();
      await tachyon.say_and_wait('……呵呵');
      await tachyon.say_and_wait('那么最后……让我说几句吧');
      await you.say_as_passer_by_and_wait('记者A', '最后……？');
      await tachyon.say_and_wait([
        '我，相信所有',
        tachyon.uma_sex_title,
        '都具有自己的可能性',
      ]);
      await tachyon.say_and_wait('无论是什么样的高墙，都一定能将其超越');
      await tachyon.say_and_wait('所以……这个纪录，只是个开始，而非结束');
      await tachyon.say_and_wait([
        '接下来，必然会有更多的',
        tachyon.uma_sex_title,
        '能够站上世界，然后……超越极限',
      ]);
      await tachyon.say_and_wait('我如此相信，并期望着各位，以及……');
      era.println();
      await tachyon.print_and_wait(
        '充满了对后来者的期望，却又将傲慢的将自己定义为极限',
      );
      await tachyon.print_and_wait([
        '台下的众人燃烧着斗志，望着台上的',
        tachyon.sex,
      ]);
      await tachyon.print_and_wait([
        '但',
        tachyon.sex,
        '的眼中，却是至今仍躲在观众席上的那人',
      ]);
      await tachyon.print_and_wait('舞台已经布置完成');
      await tachyon.print_and_wait('热场已经结束');
      await tachyon.print_and_wait('接下来，你有办法超越这一切吗？');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，对 ',
        coffee.get_colored_name(),
        ' 发出了无声的挑战',
      ]);
      era.drawLine();
      await era.printAndWait(['凯旋门赏结束']);
      await era.printAndWait([
        '在比赛结束后 ',
        you.get_colored_name(),
        ' 马上带着 ',
        tachyon.get_colored_name(),
        ' 到医院进行检查',
      ]);
      await era.printAndWait('如预料一般，却又在预料之外');
      await era.printAndWait('如预料一般，是严重到必须退役的腿伤');
      await era.printAndWait('预料之外的，伤势远没有想像的那么严重');
      await era.printAndWait('除了无法奔跑以外，就没有其他更严重的情况了');
      await era.printAndWait([
        '……然而对',
        tachyon.uma_sex_title,
        '而言，也不需要比这更严重的状况了',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 退役的消息瞬间震惊了世界',
      ]);
      await era.printAndWait([
        '身为其训练员的 ',
        you.get_colored_name(),
        ' 受到了全世界的关注，其中也不免有对此的抱怨微词出现',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_39: (() => {
    const title = '超越极限……？';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
      prix_lat,
    ) => {
      await era.printAndWait([
        '自从 ',
        tachyon.get_colored_name(),
        ' 退役以来，实验室里总是能听见',
        tachyon.sex,
        '欢快的声音',
      ]);
      await tachyon.say_and_wait([
        '哈哈哈！',
        call_25,
        '！',
        call_25,
        '！快来试试我的新药！',
      ]);
      await coffee.say_and_wait('……好烦');
      era.println();
      await era.printAndWait([
        '仿佛在退役的同时抛却了一切压力的',
        tachyon.sex,
        '，万般的精力都用在了制作新药上，',
      ]);
      await era.printAndWait([
        '首当其冲的被害者自然就是与',
        tachyon.sex,
        '最为亲密的 ',
        you.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 了',
      ]);
      await era.printAndWait([
        '对此，在退役后便担心',
        tachyon.sex,
        '会不会一蹶不振无法振作的 ',
        you.get_colored_name(),
        ' 也稍稍放下了心来',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '！你也别想跑！你的份在这里！']);
      era.printButton('二话不说接过药就喝下去', 1);
      era.printButton('「只要能让速子开心，喝什么都行！」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait('哦呀哦呀，今天居然这么主动？');
        await coffee.say_and_wait([
          '……你又给 ',
          callname_25,
          ' 灌什么药了，老实交代',
        ]);
        await tachyon.say_and_wait(
          '唔……昨天的话是提升营养吸收效率的，发的是蓝色的光，今天是……',
        );
        await coffee.say_and_wait([
          '骗人……一定是灌了什么迷魂药吧，不然 ',
          callname_25,
          ' 怎么可能这么听话的喝下那种奇怪的东西',
        ]);
        await tachyon.say_and_wait('好过分的说法！');
      } else {
        if (love >= 75) {
          await tachyon.say_and_wait('什……笨蛋……为什么忽然说这么肉麻的话……');
        } else if (relation <= 225) {
          await tachyon.say_and_wait('……不是，为什么忽然说这么噁心的话……');
        } else if (relation >= 225) {
          await tachyon.say_and_wait('欸……不是，为什么忽然说这么肉麻的话');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 用一脸傻眼的表情看着 ',
            you.get_colored_name(),
          ]);
          await era.printAndWait('好过分啊');
        }
        era.println();
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            c_call_t,
            '？',
            callname_25,
            '？可以稍微说明一下这是什么关系吗？……我现在，可能不太冷静',
          ]);
        } else {
          await coffee.say_and_wait('……麻烦你们别在这里打情骂俏');
        }
      }
      era.drawLine();
      await coffee.say_and_wait(['……对了，', callname_25, '，差不多……']);
      era.println();
      await era.printAndWait([
        '吵吵闹闹过后，也到 ',
        coffee.get_colored_name(),
        ' 训练的时间了',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 点了点头，准备和 ',
        coffee.get_colored_name(),
        ' 一起到训练场上',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '哦？又去训练吗？最近 ',
        call_25,
        ' 怎么感觉特别勤奋的样子',
      ]);
      await coffee.say_and_wait([
        '……我训练一直都很认真，请不要把我和 ',
        c_call_t,
        ' 混为一谈',
      ]);
      await coffee.say_and_wait('再说，年底快到了……一定要成功超越朋友');
      await coffee.say_and_wait('除此之外……');
      await coffee.say_and_wait('还有某人的挑战……');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 直直盯着 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 想起了 ',
        prix_lat,
        ' 时 ',
        tachyon.get_colored_name(),
        ' 说过的话',
      ]);
      await coffee.say_and_wait(['我一定，会超越 ', c_call_t, ' 的']);
      await tachyon.say_and_wait('……哼哼，能做到，就尽管试试看吧');
      await tachyon.say_and_wait(['来超越极限吧！', call_25, '！']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的眼中依旧闪烁着狂热的光芒',
      ]);
      await era.printAndWait([
        '只是……不知是不是 ',
        you.get_colored_name(),
        ' 的错觉，那光芒似乎有些动摇的模样',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_b_cf_japa_cup: (() => {
    const title = '超越极限';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await you.say_as_passer_by_and_wait('解说', [
        coffee.get_colored_name(),
        '！打破了日本杯的纪录……不！打破了世界纪录！世界2400m的纪录，在几个月前才由 ',
        tachyon.get_colored_name(),
        ' 击破的纪录，被漆黑的幻影再次超越！',
      ]);
      era.println();
      await tachyon.print_and_wait('真的超越了');
      await tachyon.print_and_wait(['在 ', call_25, ' 跑过终点线的瞬间']);
      await tachyon.print_and_wait('自己与其他人同样兴奋');
      era.println();
      await tachyon.print_and_wait('这也是理所当然的');
      await tachyon.print_and_wait([
        '虽然有些自卖自夸，但',
        tachyon.sex,
        '可是自己看中最有可能超越极限的',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait('只是最接近与能够超越，还是有着极大的区别');
      await tachyon.print_and_wait(['但是……', tachyon.sex, '真的做到了！']);
      await tachyon.print_and_wait(
        '虽然看上去不知为何……跑的有种不明的违和感，但那也无所谓',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 是极限的',
        tachyon.uma_sex_title,
        '，而 ',
        coffee.get_colored_name(),
        ' ',
        tachyon.sex,
        '现在，超越了极限',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '！',
        callname,
        '！',
        call_25,
        ' ',
        tachyon.sex,
        '……',
      ]);
      era.println();
      await tachyon.print_and_wait('想要兴奋的与身边的人分享喜悦');
      await tachyon.print_and_wait('万般的艰辛研究，现在终于得到了结果');
      await tachyon.print_and_wait('然而');
      era.println();
      await tachyon.say_and_wait(['……', callname, '？']);
      era.println();
      await tachyon.print_and_wait('没有应答');
      await tachyon.print_and_wait([
        '身边的',
        you.sex,
        '，看台上的观众，所有人的焦点',
      ]);
      await tachyon.print_and_wait(['全都聚焦在中央的', tachyon.sex, '身上']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 的呼唤，被震耳欲聋的欢呼及喝采盖过',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_47: (() => {
    const title = '被超越的极限';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, coffee, you, callname, call_25, love) => {
      await tachyon.print_and_wait([
        '梦中的 ',
        tachyon.get_colored_name(),
        '，又回到了那一天',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '全场的欢呼声，以及',
        you.sex,
        '的目光全都聚集在跨越终点线，淡淡挥着手的那名',
        tachyon.uma_sex_title,
        '身上',
      ]);
      await tachyon.print_and_wait([
        '这也是很正常的，毕竟今天的主角是 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        '主角不是自己，周围的人关注',
        tachyon.sex,
        '也是理所应当的',
      ]);
      await tachyon.print_and_wait('但是……');
      await tachyon.print_and_wait('为什么');
      era.println();
      await tachyon.say_and_wait('不是说好了吗？会一直看着我', true);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 无法再奔跑了',
      ]);
      await tachyon.print_and_wait([
        '所以就将目光转移到 ',
        coffee.get_colored_name(),
        ' 身上吗？',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '周围的观众中，也不乏喊出「比起 ',
        tachyon.get_colored_name(),
        '，还是 ',
        coffee.get_colored_name(),
        ' 更强」的人',
      ]);
      await tachyon.print_and_wait([
        '但比起那些踩一捧一的言论，',
        you.sex,
        '的眼神更令自己感到受伤',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '曾几何时，那种原本只会在看着自己时露出的目光，却出现在了',
        you.sex,
        '看着 ',
        call_25,
        ' 时的双瞳中',
      ]);
      await tachyon.say_and_wait('那种目光，不是我专属的吗？');
      await tachyon.say_and_wait('被我灼伤的双眼已经愈合了吗？');
      await tachyon.say_and_wait('要留我，孤单一人了吗？');
      era.println();
      await tachyon.print_and_wait([
        '梦中的',
        you.sex,
        '，与 ',
        call_25,
        ' 越行越远',
      ]);
      await tachyon.print_and_wait('将自己抛弃在漆黑的空间中');
      era.println();
      await tachyon.say_and_wait('不要……等等，等等我……');
      era.println();
      await tachyon.print_and_wait('想要追上他们');
      await tachyon.print_and_wait('但是……双腿不听使唤');
      await tachyon.print_and_wait('低下头来才发现……啊啊');
      await tachyon.print_and_wait(
        '已经碎裂的双腿，又怎么追得上正在奔跑前行的人呢',
      );
      era.println();
      await tachyon.print_and_wait('仿佛听见了自己的声音，那个背影回过头来');
      await tachyon.print_and_wait('眼中的光，却已经消失不见');
      await tachyon.print_and_wait(
        '不，不是消失不见————而是转移到了另一个人身上',
      );
      era.println();
      await tachyon.print_and_wait('不要');
      await tachyon.print_and_wait('看着我');
      await tachyon.print_and_wait('像以前一样的看着我');
      await tachyon.print_and_wait('不要把我抛下，不要让我一个人');
      era.println();
      await tachyon.print_and_wait('但是');
      await tachyon.print_and_wait([
        '无法奔跑的 ',
        tachyon.get_colored_name(),
        '，又有什么资格去要求留住对方呢',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([tachyon.get_colored_name(), ' 从梦中醒来']);
      await tachyon.print_and_wait('梦到了什么已经记不太清了');
      await tachyon.print_and_wait([
        '……但从身上不适的感觉来看，八成又是日本杯那时的事吧',
      ]);
      await tachyon.print_and_wait([call_25, ' 已经超越了极限']);
      await tachyon.print_and_wait(['超越了 ', tachyon.get_colored_name()]);
      await tachyon.print_and_wait([
        '所以……就算',
        you.sex,
        '被 ',
        call_25,
        ' 迷住了，也是很正常的吧',
      ]);
      await tachyon.print_and_wait([
        '毕竟，那可是超越了 ',
        tachyon.get_colored_name(),
        ' 的跑法啊',
      ]);
      era.println();
      await tachyon.say_and_wait('……不要');
      if (love <= 50) {
        await tachyon.print_and_wait('事到如今才发现，是不是有些太晚了？');
        await tachyon.print_and_wait(
          '明明都已经陪在自己身边如此之久，却一直当成理所当然',
        );
        await tachyon.print_and_wait([
          '直到要失去了才发现，自己已经离不开',
          you.sex,
          '了',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        '如果是',
        you.sex,
        '的话，还会和往常一样照顾自己的吧',
      ]);
      await tachyon.print_and_wait([
        '还是会和以往一样，照料 ',
        tachyon.get_colored_name(),
        ' 的需求',
      ]);
      await tachyon.print_and_wait(['因为', you.sex, '就是如此温柔的一个人']);
      await tachyon.print_and_wait([
        '……但是，只是这样 ',
        tachyon.get_colored_name(),
        ' 是无法满足的',
      ]);
      await tachyon.print_and_wait(['是', you.sex, '的光，温暖了自己']);
      await tachyon.print_and_wait('让自己产生了希望，对比赛的渴望');
      await tachyon.print_and_wait('所以请不要……不要把属于自己的光夺走');
      era.println();
      await tachyon.print_and_wait(
        'Jingle bell Jingle bell Jingle all the way～～',
      );
      era.println();
      await tachyon.print_and_wait('忽然，窗外响起了圣诞歌的声音');
      await tachyon.print_and_wait([
        '圣诞将至，',
        tachyon.get_colored_name(),
        ' 的心中却仍是一片黑暗',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_b_95_48: (() => {
    const title = '圣夜的诺言';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} vega 爱慕织姬
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {boolean} tachyon_win_prix_lat 爱丽速子是否赢取资深年凯旋门赏
     */
    const f = async (
      tachyon,
      coffee,
      vega,
      you,
      callname,
      call_25,
      callname_25,
      tachyon_win_prix_lat,
    ) => {
      let ret = 0;
      await era.printAndWait([
        '最近 ',
        tachyon.get_colored_name(),
        ' 的情绪似乎有些反常',
      ]);
      await era.printAndWait([
        '总是一个人闷闷不乐的，',
        coffee.get_colored_name(),
        ' 的训练也都不跟着，甚至连实验都很少做了',
      ]);
      await era.printAndWait([
        '虽说对于实验最大受害者的 ',
        you.get_colored_name(),
        ' 和 ',
        coffee.get_colored_name(),
        ' 而言也不能说这是什么坏事，但还是令人有些担心',
      ]);
      await era.printAndWait([
        '忽然，商店街的圣诞歌声传入 ',
        you.get_colored_name(),
        ' 的耳中',
      ]);
      await era.printAndWait([
        '有了，以圣诞节为理由找',
        tachyon.sex,
        '出门谈心吧',
      ]);
      era.drawLine();
      await era.printAndWait('圣诞夜的商店街比起平时更加灯火通明气氛火热');
      await era.printAndWait('其原因不只是圣诞节，更是因为……');
      await you.say_as_passer_by_and_wait('商店街大叔', [
        '有马纪念预测！明天的有马纪念赛前预测！',
      ]);
      await you.say_as_passer_by_and_wait('游客A', [
        '不知道明天有马纪念会怎么样……不过，赢的应该会是 ',
        coffee.get_colored_name(),
        ' 吧',
      ]);
      await you.say_as_passer_by_and_wait('游客B', [
        '日本杯的表现，真的太强了！……说是史上最强也不为过吧',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('一直沉默也不是办法，这个时候还是该说点话吧');
      era.printButton('「明天就是有马纪念了，不过茶座不会有问题的」', 1);
      era.printButton('「那边的蜂蜜特饮好像在搞圣诞特卖的样子」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([tachyon.sex, '还是没说什么']);
        await era.printAndWait([
          '感到有些气氛尴尬的 ',
          you.get_colored_name(),
          ' 只能继续聊着 ',
          coffee.get_colored_name(),
          ' 最近的训练状况',
        ]);
      } else {
        await tachyon.say_and_wait('……那就，来一杯吧');
        era.println();
        await era.printAndWait([
          '喝了最甜的蜂蜜后，',
          tachyon.get_colored_name(),
          ' 的心情似乎缓和一些了',
        ]);
        await era.printAndWait([
          '顺带一提，',
          you.get_colored_name(),
          ' 为了配合也点了最甜的，然而……',
        ]);
        await era.printAndWait([
          '只吸了一口，',
          you.get_colored_name(),
          ' 便感到牙齿生疼',
        ]);
        await era.printAndWait([
          '看着 ',
          tachyon.get_colored_name(),
          ' 欢快喝着蜂蜜的模样，',
          you.get_colored_name(),
          ' 开始思考是不是该找机会带',
          tachyon.sex,
          '去检查牙齿了',
        ]);
      }
      era.println();
      await era.printAndWait(['没过多久，你们走到了商店街中央的圣诞树前']);
      await era.printAndWait([
        '忽然，一阵狂风，将周围有马纪念的报导吹到了你们面前',
      ]);
      await era.printAndWait([
        '报纸上是日本杯时的 ',
        coffee.get_colored_name(),
        '，看上去威风凛凛',
      ]);
      era.printButton(
        '「日本杯……那时候的茶座，真的好厉害，虽然不太合适，但要是跟速子……」',
        1,
      );
      era.printButton('「速子！那边的棉花糖摊看起来好厉害！」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait([
          '前面看提起有马纪念 ',
          tachyon.get_colored_name(),
          ' 的心情似乎不太好',
        ]);
        await era.printAndWait([
          '因此 ',
          you.get_colored_name(),
          ' 转而提起日本杯的事',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 的宿愿被达成的那天，想必一定能让 ',
          tachyon.get_colored_name(),
          ' 提起精神来吧',
        ]);
        await era.printAndWait('然而……');
        era.println();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 依然什么话也没说',
        ]);
        await era.printAndWait('还是不对吗……');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 看着圣诞树旁的棉花糖摊，在师傅高超的手艺下，各种模样的软绵绵动物瞬间被雕塑而成',
        ]);
        era.println();
        await tachyon.say_and_wait('……不，我……');
        era.println();
        await era.printAndWait([
          '没等 ',
          tachyon.get_colored_name(),
          ' 说完，棉花糖摊的摊主便塞了个又大又软绵绵的棉花糖豚鼠在 ',
          tachyon.get_colored_name(),
          ' 手中',
        ]);
        await vega.say_as_unknown_and_wait(
          '心情不好的时候要记住，只有软绵绵是不会背叛你的',
        );
        if (era.get('cflag:33:招募状态') === recruit_flags.yes) {
          await era.printAndWait('摊主不知道为什么，有些莫名的眼熟');
          await era.printAndWait('……应该，只是错觉而已吧');
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 愣愣的接过了棉花糖豚鼠，没有退回去也没有多说什么',
        ]);
        await era.printAndWait([
          '然后，',
          tachyon.sex,
          '轻启朱唇，小小的咬了一口',
        ]);
        era.println();
        await tachyon.say_and_wait('……软绵绵的');
        era.println();
        await era.printAndWait([
          '不知道为什么，摊主听见这句话后骄傲的挺起了胸膛',
        ]);
      }
      era.println();
      await era.printAndWait(['最后，你们走到了商店街末尾']);
      await era.printAndWait([
        '你们看见路旁的书店，店内最引人注目的地方，摆放着几本过期的杂志',
      ]);
      await era.printAndWait('过期……也不能这么说');
      await era.printAndWait(
        '虽然以比赛情报来说是已经过期的，但就时间而言，只是前两个月的杂志而已',
      );
      await era.printAndWait([
        '————是 ',
        tachyon.get_colored_name(),
        ' 凯旋门赏后的采访杂志',
      ]);
      await you.say_as_passer_by_and_wait('书店老板', '欢迎光临！');
      era.printButton('「这是……」', 1);
      era.printButton('「凯旋门赏的杂志？」', 2);
      await era.input();
      await era.printAndWait([
        '书店老板并没有注意到跟在 ',
        you.get_colored_name(),
        ' 身后将头低下的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('望着杂志开始夸夸而谈');
      await you.say_as_passer_by_and_wait('书店老板', [
        '喔！这些杂志啊，我专门摆在这里的！',
      ]);
      if (tachyon_win_prix_lat) {
        await you.say_as_passer_by_and_wait('书店老板', [
          '好不容易啊，日本',
          tachyon.uma_sex_title,
          '终于赢下世界的凯旋门！当然要摆出来做纪念了！',
        ]);
      }
      await you.say_as_passer_by_and_wait('书店老板', [
        '要我说外面那些人根本不懂，',
        tachyon.get_colored_name(),
        ' 才是最强的！要是没退役那什么 ',
        coffee.get_colored_name(),
        ' 根本不会是',
        tachyon.sex,
        '的对手！',
      ]);
      era.printButton('「也不好说呢……」', 1);
      era.printButton('「当然，速子是最强的」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait(['如果是日本杯前的话确实如此']);
        await era.printAndWait([
          '但日本杯之后的 ',
          coffee.get_colored_name(),
          '，已经是 ',
          tachyon.get_colored_name(),
          ' 认证的完成体了',
        ]);
        await era.printAndWait([
          '这种情况下的 ',
          coffee.get_colored_name(),
          '，要是再与 ',
          tachyon.get_colored_name(),
          ' 比一场的话……谁胜谁负真不好说',
        ]);
        await era.printAndWait([
          '没错，哪怕 ',
          coffee.get_colored_name(),
          ' 已经超越了极限……自己的心里还是相信，',
          tachyon.get_colored_name(),
          ' 一定能够与',
          tachyon.sex,
          '一较高下',
        ]);
        await era.printAndWait([
          '绝对不是像',
          tachyon.sex,
          '自己说的什么绊脚石',
        ]);
        await you.say_as_passer_by_and_wait(
          '书店老板',
          '切，还以为来了个识货的，没想到也是什么都不懂的家伙',
        );
        era.println();
        await era.printAndWait([
          '听见店老板这么说，',
          you.get_colored_name(),
          ' 只能露出苦笑',
        ]);
        await era.printAndWait([
          '忽然，',
          you.get_colored_name(),
          ' 看到 ',
          tachyon.get_colored_name(),
          ' 走近了那堆杂志',
        ]);
        era.println();
        await tachyon.say_and_wait('……老板，给我一本');
        await you.say_as_passer_by_and_wait('书店老板', [
          '喔喔，小',
          tachyon.sex_code === 1 ? '伙子' : '姑娘',
          '挺识货的嘛',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 刻意压低了声音，不让人听出',
          tachyon.sex,
          '的真实音色',
        ]);
        await era.printAndWait(
          '不过这杂志……当初应该有收到样品才对，为什么要再买一次呢？',
        );
        era.println();
        await tachyon.say_and_wait(
          '……没办法，有人不懂这些杂志的价值，我只好自己好好珍惜了',
        );
        era.println();
        await era.printAndWait('欸');
        await era.printAndWait([
          '看着 ',
          tachyon.get_colored_name(),
          ' 偷偷对 ',
          you.get_colored_name(),
          ' 露出的带着恼怒的眼神',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 不禁开始思考，自己难道又说错什么了吗？',
        ]);
      } else {
        await tachyon.say_and_wait('……！');
        era.println();
        await era.printAndWait('这还需要问吗？');
        await era.printAndWait('虽说如果毫无意义');
        await era.printAndWait([
          '但还是让人忍不住去想如果的',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          '带来无限的可能性及遐想的',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait(['这就是 ', tachyon.get_colored_name()]);
        await you.say_as_passer_by_and_wait('书店老板', [
          '果然！小',
          you.sex_code === 1 ? '哥' : '妹',
          '你进来的时候我就有感觉了，这家伙一定是个懂行的！',
        ]);
        await you.say_as_passer_by_and_wait('书店老板', [
          '我就说了，',
          tachyon.get_colored_name(),
          ' 才是最强的！什么 ',
          coffee.get_colored_name(),
          ' 根本就不会是对手！',
        ]);
        await you.say_as_passer_by_and_wait('书店老板', [
          '实不相瞒，我其实从去年的皋月赏就开始关注 ',
          tachyon.get_colored_name(),
          ' 了！那种跑法……说是',
          tachyon.uma_sex_title,
          '的极限真的不夸张啊！',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 和老板兴致勃勃的谈论着 ',
          tachyon.get_colored_name(),
          ' 的比赛',
        ]);
        await era.printAndWait([
          '直到身后的 ',
          tachyon.get_colored_name(),
          ' 受不了了拉着 ',
          you.get_colored_name(),
          ' 想往店外走',
        ]);
        await era.printAndWait([
          '不知为何，',
          tachyon.sex,
          '的脸看起来似乎有点红……大概是灯光的错觉吧',
        ]);
      }
      era.println();
      if (ret >= 2) {
        await era.printAndWait(['不知不觉，你们漫步到了河堤旁']);
        await era.printAndWait(
          '昏暗寂静的河岸，与远处商店街的灯火及圣诞歌曲成为对比',
        );
        era.println();
        await tachyon.say_and_wait('……下雪了');
        era.println();
        await era.printAndWait('确实，周围开始飘起了绵绵雪絮');
        await era.printAndWait(
          '……这么晚，还是下雪天跑到这种地方来，果然还是很危险吧',
        );
        await era.printAndWait([
          '虽然没能问出 ',
          tachyon.get_colored_name(),
          ' 心情沮丧的原因，但今天真的太晚了',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 正想提议今天就到这边结束的时候……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………呼');
        era.println();
        await era.printAndWait([
          '忽然，',
          you.get_colored_name(),
          ' 被 ',
          tachyon.get_colored_name(),
          ' 抱住了',
        ]);
        await era.printAndWait('非常突然，毫无前兆的拥抱');
        era.printButton('「速子……？」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' 想说些什么，但怀中人微微颤抖的身体，以及靠在 ',
          you.get_colored_name(),
          ' 肩膀上的脑袋，还有莫名湿热的肩膀，使 ',
          you.get_colored_name(),
          ' 意识到此时或许不该开口说话',
        ]);
        era.println();
        await tachyon.say_and_wait('对不起……但是……只要，只要一下就好……');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 愣着神让 ',
          tachyon.get_colored_name(),
          ' 在 ',
          you.get_colored_name(),
          ' 的怀中哭泣',
        ]);
        await era.printAndWait('内心满是疑惑');
        await era.printAndWait([tachyon.get_colored_name(), ' 到底怎么了']);
        era.drawLine();
        await tachyon.print_and_wait('其实，已经猜到了');
        await tachyon.print_and_wait('这次出来，不过是再一次确认自己的猜想');
        await tachyon.print_and_wait('但实际听见还是忍不住心中刺痛');
        era.println();
        await tachyon.print_and_wait('从先前的闲聊就已经能够发现');
        await tachyon.print_and_wait([
          you.sex,
          '的话题总是三句不离 ',
          call_25,
          '，眼中也满是对',
          tachyon.sex,
          '的期待',
        ]);
        await tachyon.print_and_wait([
          '以前那个凡事总以 ',
          tachyon.get_colored_name(),
          ' 为优先的 ',
          callname,
          '，已经不在了',
        ]);
        await tachyon.print_and_wait([
          '现在的',
          you.sex,
          '，是 ',
          call_25,
          ' 的「',
          callname_25,
          '」',
        ]);
        await tachyon.print_and_wait('于情于理这都是最正确的选项');
        await tachyon.print_and_wait(
          '自己不过是利用跑法将其魅惑，将其当成方便工具对待的卑鄙魔女',
        );
        await tachyon.print_and_wait([
          '跨越了各种阻碍，最终超越了极限的',
          coffee.uma_sex_title,
        ]);
        await tachyon.print_and_wait([
          '用自己的跑法将魔女施加在',
          you.sex,
          '身上的魔咒破除，最后两人过着幸福快乐的生活',
        ]);
        await tachyon.print_and_wait('这一定就是，故事最好的结局');
        era.println();
        await tachyon.print_and_wait('所以……');
        era.println();
        await tachyon.say_and_wait('最后一次……让我，最后爱我一次就好');
        await tachyon.say_and_wait([
          '只要一次……之后就再也不会干涉你跟 ',
          call_25,
          ' 了',
        ]);
        era.println();
        await tachyon.print_and_wait('利用各种借口理由，只求一夜欢愉');
        await tachyon.print_and_wait(
          '可悲的是，直到最后自己也还是只能用这种借口',
        );
        await tachyon.print_and_wait([
          '用好像威胁一样的口吻，期望',
          you.sex,
          '能给予最后一次的慈悲',
        ]);
        await tachyon.print_and_wait('只要一次就好');
        await tachyon.print_and_wait([
          '然后自己就能放弃，衷心的祝福',
          you.couple_title,
          '了',
        ]);
        await tachyon.print_and_wait(
          '无视脑海中「你真的觉得自己能够放弃吗」的低语',
        );
        await tachyon.print_and_wait('用这样的话来说服自己');
        era.println();
        await era.printAndWait([
          '看着这样的 ',
          tachyon.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 选择',
        ]);
        era.printButton('「抱住」', 1);
        era.printButton('「亲吻」', 2);
        if ((await era.input()) === 1) {
          await tachyon.print_and_wait('忽然，还想说出口的话被堵住了');
          await tachyon.print_and_wait(['……被', you.sex, '反向抱住了自己']);
          await tachyon.print_and_wait('想说的话卡在喉咙说不出口');
        } else {
          await tachyon.print_and_wait('忽然，还想说出口的话被堵住了');
          await tachyon.print_and_wait('……温柔，暖和的触感');
          await tachyon.print_and_wait('仿佛将冬日的寒冷完全去除的圣诞之吻');
        }
        era.println();
        await tachyon.print_and_wait('不……自己的意思不是这样');
        await tachyon.print_and_wait([
          '还是说……',
          tachyon.get_colored_name(),
          ' 已经连被爱着的资格都没有了？',
        ]);
        await tachyon.print_and_wait('自暴自弃下，不由得产生这样的想法');
        era.println();
        await tachyon.say_and_wait(['唔……', callname]);
        era.println();
        await tachyon.print_and_wait('正当自己这么想的时候');
        await tachyon.print_and_wait([
          '仿佛在驱赶自己心中的杂念般，',
          you.sex,
          '加重了拥抱的力道',
        ]);
        era.printButton('「至少，看完明天的有马纪念吧」', 1);
        era.printButton('「一定会给速子一个交代的」', 2);
        await era.input();
        await tachyon.print_and_wait('交代……什么样的交代');
        await tachyon.print_and_wait('作为……关系结束的交代吗？');
        await tachyon.print_and_wait([
          '直直望着',
          you.sex,
          '的双眼，却无法看出任何含义',
        ]);
        era.println();
        await tachyon.print_and_wait('……也不错吧');
        await tachyon.print_and_wait([
          '如果可以最后，再看见',
          you.sex,
          '那狂热的眼神的话',
        ]);
        await tachyon.print_and_wait([
          '……即便目光指向的对象，已经不是 ',
          tachyon.get_colored_name(),
        ]);
      } else {
        await tachyon.say_and_wait('……啊，下雪了');
        era.println();
        await era.printAndWait('忽然，天空中开始飘起渺渺白雪');
        await era.printAndWait([
          '是不是该回去了……正当 ',
          you.get_colored_name(),
          ' 这么想着的时候，',
          tachyon.get_colored_name(),
          ' 拉了拉 ',
          you.get_colored_name(),
          ' 的衣服',
        ]);
        era.println();
        await tachyon.say_and_wait('找个地方先坐坐吧');
        era.println();
        await era.printAndWait('也是，今天的目标还没达成呢');
        await era.printAndWait([
          '找个店先坐一下，然后把 ',
          tachyon.get_colored_name(),
          ' 不高兴的原因问出来吧',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 给自己打了打气']);
        era.drawLine();
        era.printButton('「…………」', 1);
        await era.input();
        await tachyon.say_and_wait([callname, '？不坐吗？']);
        era.printButton('「……不，那个」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '这样支支吾吾的，可不像你啊……还是说，有什么难言之隐吗？',
        );
        era.println();
        await era.printAndWait('不，要说的话，也并非是难言之隐的问题，而是……');
        era.printButton('「和学生一起进居酒屋什么的，NG了吧」', 1);
        era.printButton('「和未成年一起进居酒屋什么的，犯法了吧」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 拉着 ',
          you.get_colored_name(),
          ' 要进入的，赫然是商店街末尾的居酒屋',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '都已经退役了，没关系的吧……虽然我也是第一次来这种地方，不过应该不会有问题',
        );
        await tachyon.say_and_wait([
          '还是 ',
          callname,
          '，你都这么大的人了，难道说连居酒屋都不敢进？',
        ]);
        era.printButton('「问题不是退役不退役而是学生啊！」', 1);
        era.printButton('「……激将法是没用的」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' 正想拒绝拉着 ',
          tachyon.get_colored_name(),
          ' 往回走时，',
          tachyon.get_colored_name(),
          ' 却直接就进入了店里',
        ]);
        era.println();
        await tachyon.say_and_wait('好啦好啦，来吧，就当吃个宵夜……之类的');
        await you.say_as_passer_by_and_wait('店主', '欢迎光临～～');
        era.println();
        await era.printAndWait([
          '店门一开，温暖的暖气与外面的冷空气成对比后便让 ',
          you.get_colored_name(),
          ' 再也走不动路了',
        ]);
        era.printButton('「……坐一下或许也不是不行」', 1);
        await era.input();
        await era.printAndWait([
          '进了店内，',
          you.get_colored_name(),
          ' 才意外的发现',
        ]);
        await era.printAndWait(
          '在店内忙里忙完的店主，身后竟然有着根长长的栗色尾巴',
        );
        era.println();
        await tachyon.say_and_wait('……哦呀，居然……');
        era.println();
        await you.say_as_passer_by_and_wait(
          '店主',
          '欢迎光临！……我说这位客人，应该，是学生吧？',
        );
        era.println();
        await tachyon.say_and_wait(
          '啊啦，看起来是这样吗？不过我可是已退役身份就是了',
        );
        era.println();
        await era.printAndWait('不，已经退役不代表就不是学生了吧');
        await era.printAndWait('虽然很想吐槽，但店主却点了点头说那就没问题');
        await era.printAndWait('不……没问题什么啊');
        era.println();
        await you.say_as_passer_by_and_wait(
          '店主',
          '再说，身边那位应该是你的训练员吧，有训练员陪着就没问题啦',
        );
        await tachyon.say_and_wait('……哦，看得出来吗？');
        era.println();
        await era.printAndWait([
          '问题很大吧……不过比起这个，',
          you.get_colored_name(),
          ' 也好奇为什么能够看出自己是训练员',
        ]);
        await you.say_as_passer_by_and_wait('店主', [
          you.sex,
          '的眼神啊，和我老公一模一样，都是看见自家担当就走不动路的眼神',
        ]);
        era.println();
        await era.printAndWait('这，这是什么说法');
        await era.printAndWait('自己难道是什么变态吗');
        await you.say_as_passer_by_and_wait(
          '店主',
          '呵呵，这种眼神可是好老公必备的～～千万别放过了',
        );
        era.println();
        await era.printAndWait('店主说完后就去招待其他客人了');
        await era.printAndWait([
          you.get_colored_name(),
          ' 战战兢兢的望着 ',
          tachyon.get_colored_name(),
          '，心想这下绝对会被',
          tachyon.sex,
          '嘲笑了……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('不知道在思考些什么');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 的神情看起来仿佛出神了一般',
        ]);
        era.printButton('「速子？」', 1);
        await era.input();
        await tachyon.say_and_wait('……啊，嗯，咳咳，没什么');
        era.println();
        await era.printAndWait([
          '回过神后，',
          tachyon.get_colored_name(),
          ' 脸仿佛延时启动的自热便当一般',
        ]);
        await era.printAndWait([
          '瞬间变得通红，',
          you.get_colored_name(),
          ' 仿佛能看见蒸气从',
          tachyon.sex,
          '脸上冒出',
        ]);
        await era.printAndWait([
          '为了掩饰尴尬，',
          tachyon.sex,
          '将注意力转移到了店内的情况',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 也将目光望了过去']);
        era.println();
        await era.printAndWait('店主忙前忙后招待着客人');
        await era.printAndWait([
          '店里的客人虽然有些在谈论着有马纪念的事，却也并非主流',
        ]);
        await era.printAndWait('就和每天的天气一般，是无聊时聊个两句的话题');
        await era.printAndWait([
          '证据就是，到现在还没有人认出 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '身为在特雷森学园附近的商店街，不认识上半年最为出名的',
          tachyon.uma_sex_title,
          '，可以说是极为异类的情况了',
        ]);
        era.println();
        await era.printAndWait([
          '看到这，',
          you.get_colored_name(),
          ' 不由得想起身为',
          tachyon.uma_sex_title,
          '的店主',
        ]);
        await era.printAndWait([
          '既然说老公是训练员，那么代表',
          tachyon.sex,
          '当初应该也是竞赛',
          tachyon.uma_sex_title,
          '吧',
        ]);
        await era.printAndWait('退役后却过着这样，与比赛几乎无缘的生活');
        await era.printAndWait('如此平淡，如此乏味，如此……祥和');
        era.println();
        await tachyon.say_and_wait('……这也是，一种可能性吗');
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, '的可能性']);
        await era.printAndWait([
          '这是 ',
          tachyon.get_colored_name(),
          ' 总放在口上的话',
        ]);
        await era.printAndWait([
          '……但，',
          tachyon.uma_sex_title,
          '绝对不是每个人都能成为赛',
          tachyon.uma_sex_title,
          '的',
        ]);
        await era.printAndWait([
          '就算是赛',
          tachyon.uma_sex_title,
          '，也能选择走上并非赛场的那条路',
        ]);
        era.println();
        await era.printAndWait([
          '那么，这种可能性能否共用在 ',
          tachyon.get_colored_name(),
          ' 身上呢？',
        ]);
        await era.printAndWait([
          '忽然，',
          you.get_colored_name(),
          ' 能够理解 ',
          tachyon.get_colored_name(),
          ' 消沉的原因了',
        ]);
        await era.printAndWait([
          '对 ',
          tachyon.get_colored_name(),
          ' 而言，会有这样的可能性吗？',
        ]);
        await era.printAndWait(['成为茶楼老板的 ', tachyon.get_colored_name()]);
        await era.printAndWait([
          '走上科研道路成为科学家的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '作为普通的学生，继续升学，成为大学生而后进入社会变成上班族的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          '也会有吗，像正常人一样，离开赛场，过着自己的生活的日子',
        ]);
        era.println();
        await tachyon.say_and_wait(['……', callname, '，你愿意跟着我吗？']);
        await tachyon.say_and_wait('如果……我选择了这种可能性的话');
        era.println();
        await era.printAndWait([
          '和 ',
          tachyon.get_colored_name(),
          ' 一起，过着与比赛无关，与',
          tachyon.uma_sex_title,
          '的速度无关的平淡，祥和的日常',
        ]);
        await era.printAndWait('那样的生活，想必会十分美好吧');
        await era.printAndWait([
          '就算是平淡的生活，只要有 ',
          tachyon.get_colored_name(),
          ' 在，就绝对不会无聊',
        ]);
        await era.printAndWait(['与', tachyon.sex, '一起，建筑属于两人的生活']);
        await era.printAndWait('……但是，现在不行');
        era.printButton('「……可以等到明天的有马之后吗」', 1);
        era.printButton('「明天看完有马之后再问我一次」', 2);
        await era.input();
        await era.printAndWait('想要离开赛场，本身也是一种可以选择的可能性');
        await era.printAndWait([
          '但绝对不是像 ',
          tachyon.get_colored_name(),
          ' 现在这样，如同逃避一般的远离',
        ]);
        await era.printAndWait('……只能希望，明天的有马能够令其改观了');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_b: (() => {
    const title = '最终实验准备完成';
    /**
     * Plan B 专属，资深年有马纪念赛前
     * 注意 Plan B 爱丽速子禁止参加资深年有马纪念，所以该事件机制上属于曼城茶座的同阶段赛前事件
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {string} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      arim_kin,
    ) => {
      await tachyon.print_and_wait('有马纪念');
      await tachyon.print_and_wait([
        '按 ',
        callname,
        ' 所说，这场比赛后就能给自己一个解答了',
      ]);
      await tachyon.print_and_wait('有些恐惧，却又有些期待');
      await tachyon.print_and_wait('恐惧即将迎来的结局');
      await tachyon.print_and_wait('期待即将揭晓的真相');
      await tachyon.print_and_wait([you.sex, '到底想说些什么']);
      await tachyon.print_and_wait('今天的有马，就能说清了吗？');
      era.println();
      await coffee.say_and_wait(['……', c_call_t, '？']);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([c_call_t, '！']);
      await tachyon.say_and_wait('……啊？');
      era.println();
      await era.printAndWait([
        '回过神来，眼前的 ',
        call_25,
        ' 正无奈的看着自己',
      ]);
      era.println();
      await coffee.say_and_wait('叫了好几声了……又在分什么心？');
      await tachyon.say_and_wait('……没什么，没事');
      await coffee.say_and_wait('……奇怪');
      await tachyon.print_and_wait([
        '如果不是为了 ',
        call_25,
        '，自己绝对不会变成这样',
      ]);
      await tachyon.print_and_wait([
        '如果当初没有尽心帮助 ',
        call_25,
        ' 就好了，最起码，还能让自己成为 ',
        callname,
        ' 心中最亮的光',
      ]);
      await tachyon.print_and_wait([
        '……之类的想法，哪怕一点，都不曾在 ',
        tachyon.get_colored_name(),
        ' 的脑海中出现过',
      ]);
      await tachyon.print_and_wait([
        '要是产生了那样的想法，就真的是将过去的 ',
        tachyon.get_colored_name(),
        ' 全数否定了',
      ]);
      await tachyon.print_and_wait([
        '更何况，',
        call_25,
        ' 自己并没有做错任何事',
      ]);
      await tachyon.print_and_wait('只是……一切的发展，都与预料的不同');
      await tachyon.print_and_wait([
        '导致 ',
        tachyon.get_colored_name(),
        ' 只能以一种极为复杂的眼神看着 ',
        call_25,
      ]);
      era.println();
      await coffee.say_and_wait('差不多该上场了');
      await tachyon.say_and_wait('……啊啊，加油');
      await coffee.say_and_wait([c_call_t, '……你的声音有点怪怪的']);
      era.println();
      await tachyon.print_and_wait([
        '是因为过于期待吗？',
        tachyon.get_colored_name(),
        ' 的声音变得有些沙哑',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……没什么，昨天跟 ',
        callname,
        ' 出去逛街的时候有点着凉了而已',
      ]);
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          '等一下，你们两位，在圣诞节，出去逛街？……比赛之后请详细解释到底是怎么回事',
        );
      } else {
        await coffee.say_and_wait([
          '又跟 ',
          callname_25,
          ' 乱跑……明明今天是 ',
          arim_kin,
          ' 还这样',
        ]);
      }
      era.println();
      await era.printAndWait('后面的话语已经无关紧要了');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 等待着，等待比赛结束谜底揭开的瞬间',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ending_b: (() => {
    const title = (tachyon, coffee) => [
      { color: 'white', content: '最强的' },
      {
        color: coffee.color,
        content: coffee.uma_sex_title,
        fontWeight: 'bold',
      },
      { color: 'white', content: '，最快的' },
      { color: tachyon.color, content: '跑法', fontWeight: 'bold' },
    ];
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await tachyon.print_and_wait([
        '一开始，',
        tachyon.get_colored_name(),
        ' 只是在等待着',
      ]);
      await tachyon.print_and_wait([
        '等待比赛结束，等待 ',
        callname,
        ' 给出',
        you.sex,
        '的回答',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        '不能理解这场比赛到底有什么意义',
      ]);
      await tachyon.print_and_wait([
        '难道是为了让自己看清现在与 ',
        call_25,
        ' 的差距吗？',
      ]);
      await tachyon.print_and_wait(
        '是嫌现在的自己还不够可悲吗？甚至不由得产生这种自暴自弃的想法',
      );
      await tachyon.print_and_wait([
        '因此，',
        tachyon.sex,
        '并没有仔细关注着赛场',
      ]);
      await tachyon.print_and_wait('只是等待时间过去');
      era.println();
      await you.say_as_passer_by_and_wait('解说', [
        '比赛开始！所有',
        tachyon.uma_sex_title,
        '稳定的出闸',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '最开始，是解说的声音勾起了',
        tachyon.sex,
        '的好奇心',
      ]);
      await tachyon.print_and_wait([
        '哪怕不能奔跑，',
        tachyon.get_colored_name(),
        ' 也还是对一切都具有着好奇',
      ]);
      await tachyon.print_and_wait([
        '尤其对方是理论上自己应该知根知底的 ',
        call_25,
      ]);
      era.println();
      await tachyon.print_and_wait('随后，是违和');
      await tachyon.print_and_wait('其实违和感并非是从现在才有的');
      await tachyon.print_and_wait(['从日本杯结束那时起就有这种感觉']);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' 的跑法……似乎和最初',
        tachyon.sex,
        '的跑法有些微小的不同点',
      ]);
      await tachyon.print_and_wait([
        '如果说，自己是一直盯着 ',
        call_25,
        ' 的话，或许根本发现不了这种不同，便是如此微小的不同',
      ]);
      await tachyon.print_and_wait([
        '但对日本杯后便再也没有认真看过 ',
        call_25,
        ' 奔跑的自己而言，哪怕只是一丝丝的改变，都是无比明显的',
      ]);
      await tachyon.print_and_wait('尤其……');
      await tachyon.print_and_wait([
        '那虽然依旧是 ',
        call_25,
        ' 自己的跑法，但是……',
      ]);
      await tachyon.print_and_wait('细节部分……出闸的姿势……换气的方式……');
      await tachyon.print_and_wait([
        '那些细节……是 ',
        tachyon.get_colored_name(),
        ' 自己都未曾注意过的，自己特有的习惯',
      ]);
      await tachyon.print_and_wait('那是……');

      era.printButton(
        `「这是……融合了我所知道，最快，最强的两名${tachyon.uma_sex_title}的跑法」`,
        1,
      );
      await era.input();
      await tachyon.print_and_wait(
        '令自己魂牵梦萦的那个人，不知何时已经站在了自己身旁',
      );
      await tachyon.print_and_wait([
        '眼中的光，依旧闪烁，依旧盯着在赛场上奔跑的那名',
        tachyon.uma_sex_title,
      ]);
      await tachyon.print_and_wait('但是……');
      era.println();
      await tachyon.print_and_wait([you.sex, '眼中的光，究竟为谁而明']);
      await tachyon.print_and_wait([
        '是为了 ',
        tachyon.get_colored_name(),
        '，还是 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        '以前的自己想当然尔认为，既然自己已经无法登上赛场，那么看着的必然就是 ',
        call_25,
      ]);
      await tachyon.print_and_wait('但是……');
      era.printButton(
        '「除此之外我也坚信，没有比这更绚烂，更灼目，更使人着迷的跑法了」',
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait('解说', [
        coffee.get_colored_name(),
        '！超越了光速的漆黑幻影！称霸了年末的中山赛场的是 ',
        coffee.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '恍惚下，自己仿佛看见了，',
        tachyon.get_colored_name(),
        ' 与 ',
        coffee.get_colored_name(),
        ' 同时跨越终点线的瞬间',
      ]);
      era.drawLine();
      await era.printAndWait([
        '为了实现那名',
        tachyon.teen_sex_title,
        '能够超越朋友的梦想',
      ]);
      await era.printAndWait('为了让使自己魂牵梦萦的身影能够继续在眼前奔跑');
      await era.printAndWait([
        '让最强的',
        tachyon.uma_sex_title,
        '与最快的速度结合',
      ]);
      await era.printAndWait('脑袋里想了许多应该在此时说出的帅气话语');
      await era.printAndWait('但在开口的瞬间……又被堵了回去');
      await tachyon.say_and_wait('啾……咕……啾咕……');
      await era.printAndWait('如此多人的观众席上，如此大胆的吻');
      await era.printAndWait([
        '……如果不是周围的人都在关注赛场中央的 ',
        coffee.get_colored_name(),
        ' 的话，绝对会引起又一波的声讨风波吧',
      ]);
      await era.printAndWait([
        '某种意义上，也真不愧是',
        tachyon.sex,
        '会做出的行为',
      ]);
      era.println();
      await era.printAndWait([
        '持续了不知道多久，久到 ',
        you.get_colored_name(),
        ' 开始起自己的生命，以及静下心来的观众会发现你们二人的不对时，',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '才总算想起了无论对人类还是',
        tachyon.uma_sex_title,
        '而言，最重要的氧气的存在',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 那不知是因缺氧，还是某些情绪上的原因而微红的脸庞，',
      ]);
      await era.printAndWait([
        '以及被 ',
        you.get_colored_name(),
        ' 爱着的，那闪烁着狂气光芒的暗红眼眸依然正对着 ',
        you.get_colored_name(),
        ' 的脸',
      ]);
      await era.printAndWait('而后……');
      await era.printAndWait([
        '这是 ',
        you.get_colored_name(),
        ' 第一次看见，世界上竟然还有比 ',
        tachyon.get_colored_name(),
        ' 的跑法更加闪耀的东西',
      ]);
      await era.printAndWait([
        '那就是，此时 ',
        tachyon.get_colored_name(),
        ' 脸上露出的笑容',
      ]);
      era.drawLine({ content: '回到特雷森学园后' });
      await coffee.say_and_wait('……今天赢下有马的，是我没错吧');
      await tachyon.say_and_wait(['那当然了，', call_25, '，比赛很精彩哦']);
      await coffee.say_and_wait([
        '那么……可以说明一下，为什么 ',
        c_call_t,
        ' 却一副得意洋洋的样子黏在 ',
        callname_25,
        ' 身边吗？',
      ]);
      era.println();
      await era.printAndWait([
        '从赛场回来后，',
        tachyon.get_colored_name(),
        ' 便一直扒着自己不放',
      ]);
      await era.printAndWait([
        '现在也是，拉着 ',
        you.get_colored_name(),
        ' 坐在沙发上后便一直抱着自己的左手',
      ]);
      await era.printAndWait([
        '除此之外，还一直用一种都是自己的功劳的神情得意的看着 ',
        coffee.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait('哼哼～～有什么不好嘛，有什么不好嘛');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          '听见 ',
          tachyon.get_colored_name(),
          ' 仿佛时代剧里的恶役一般口吻的话',
        ]);
        await era.printAndWait([coffee.get_colored_name(), ' 先是全身颤抖']);
        await era.printAndWait([
          '正当 ',
          you.get_colored_name(),
          ' 担心',
          tachyon.sex,
          '会不会冲动下做出什么事的时候',
        ]);
        await coffee.say_and_wait('————那我也要');
        era.println();
        await era.printAndWait([
          '仿佛赌气一般，',
          coffee.get_colored_name(),
          ' 瞬间挤上了沙发，坐在了 ',
          you.get_colored_name(),
          ' 的双腿中间',
        ]);
        era.println();
        await tachyon.say_and_wait(['喂——', call_25, '，这也太狡猾了！']);
        await coffee.say_and_wait(
          '……才不狡猾，再说……狡猾又有什么不对，今天的赢家明明是我……',
        );
        await tachyon.say_and_wait('可恶，我也要坐！');
        era.println();
        await era.printAndWait([
          '看着像小孩一般争吵的两人，',
          you.get_colored_name(),
          ' 不由得露出苦笑',
        ]);
        await era.printAndWait('—————不知道为什么，忽然想喝鸳鸯咖啡了');
        await coffee.say_and_wait([
          '……对了，',
          callname_25,
          '……关于 ',
          c_call_t,
          ' 比赛前说的，昨天晚上出门的事情……可以请您之后好好说清楚吗？',
        ]);
        await era.printAndWait([
          '听见 ',
          coffee.get_colored_name(),
          ' 借着地理优势在 ',
          you.get_colored_name(),
          ' 耳边悄悄说出的话',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 的苦笑僵在了脸上']);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 露出了恶代官的笑容，放在 ',
          you.get_colored_name(),
          ' 身上的手还不安份的乱动着',
        ]);
        await era.printAndWait('然后……');
        era.println();
        await tachyon.say_and_wait('咕欸————');
        era.println();
        await era.printAndWait([
          '忽然，',
          tachyon.get_colored_name(),
          ' 仿佛被未知的无名力量击中脑袋一般，瞬间昏迷了过去',
        ]);
        await coffee.say_and_wait('……真是');
        await coffee.say_and_wait([
          '这样总算能安静些了……那么，',
          callname_25,
          '，要来杯咖啡吗？',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 微微露出苦笑，对 ',
          coffee.get_colored_name(),
          ' 说了声「麻烦了」',
        ]);
        await era.printAndWait('不过，单纯的咖啡不知为何此刻忽然觉得有些太苦');
        await era.printAndWait('在冬阳照射的训练员室中，总觉得现在的此刻');
        await era.printAndWait('更适合加入一些其他的东西……');
        era.printButton('「……那个，要不要试试，鸳鸯咖啡？」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 看着 ',
          you.get_colored_name(),
          '，先是有些恼怒，随后仿佛想到了什么，露出了无奈的表情',
        ]);
        await coffee.say_and_wait([
          '……只有今天，而且一定要瞒着 ',
          c_call_t,
          '，不然',
          tachyon.sex,
          '一定又会开始吵',
        ]);
        await era.printAndWait('喝了一口与咖啡混合的红茶');
        await era.printAndWait(
          '咖啡的苦味和红茶的涩味淡了，但其香气却没有任何减少，反而更加突显出彼此的风味',
        );
        await era.printAndWait([
          '不知为何，',
          you.get_colored_name(),
          ' 感觉现在正是这个味道合适',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_b: (() => {
    const title = '其他的可能性';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} win_prix_lat 爱丽速子是否赢取资深年凯旋门赏
     * @param {number} chris_count 圣诞节事件中选 1 的计数
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      love,
      win_prix_lat,
      chris_count,
    ) => {
      await tachyon.say_and_wait('对了，这么说起来，还有这个东西啊……');
      await tachyon.say_and_wait([
        '感觉浪费了也不好，怎么样，',
        callname,
        '？要一起去吗？',
      ]);
      era.println();
      await era.printAndWait('在偶然整理实验室时');
      await era.printAndWait(['你们发现了被藏在某个角落的信封袋']);
      if (love >= 75) {
        await era.printAndWait('嗯……？');
        await era.printAndWait('不知道为什么，总觉得违和感十分重');
        await era.printAndWait([
          you.get_colored_name(),
          ' 仔细观察了一下，随即发现端倪',
        ]);
        await era.printAndWait(
          '明明是大扫除时被发现的，信封看起来却完全没有任何褶皱痕迹，甚至感觉还被人好好的收藏着',
        );
        await era.printAndWait([
          '联想到是 ',
          tachyon.get_colored_name(),
          '「找」出来的，',
          you.get_colored_name(),
          ' 大致猜到了真相',
        ]);
        era.println();
        await tachyon.say_and_wait(['嗯？', callname, '？怎么了吗？']);
        era.println();
        await era.printAndWait('……还是别说出来吧');
        await era.printAndWait([
          '不然，',
          tachyon.get_colored_name(),
          ' 恼羞成怒事小，问题在',
          tachyon.sex,
          '恼羞成怒之后晚上自己绝对不会好受',
        ]);
      }
      era.println();
      await era.printAndWait('正好，现在该忙的事也差不多忙完了');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' 的URA总决赛也已经结束',
      ]);
      await era.printAndWait('有机会就一起去吧');
      era.drawLine();
      await era.printAndWait('坐了将近十多个小时的车后');
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 总算抵达了温泉旅馆',
      ]);
      era.println();
      await tachyon.say_and_wait('呼……总算到了啊');
      await tachyon.say_and_wait('我说……我们真的没走错吧');
      era.printButton('「……地图写的确实是这里没错」', 1);
      await era.input();
      await era.printAndWait(['也不免你们会有些迟疑']);
      await era.printAndWait(
        '此处两人所在的地方，是称之为原始森林也不为过的深山',
      );
      await era.printAndWait('这种地方，真的会有温泉吗……');
      era.println();
      await tachyon.say_and_wait(
        '我找找……等一下，为什么这里连讯号都没有啊！？',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 掏出手机来看，深山裏确实毫无讯号',
      ]);
      await era.printAndWait('这下……可不妙了');
      era.println();
      await tachyon.say_and_wait([callname, '……要不，我们回去吧']);
      era.println();
      await era.printAndWait([
        '正当 ',
        you.get_colored_name(),
        ' 也想着打退堂鼓的时候',
      ]);
      await era.printAndWait('在拨开一层树丛，出现在眼前的赫然是一座温泉旅馆');
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 在前台登记入住后，',
        you.get_colored_name(),
        ' 便马上进了露天温泉',
      ]);
      await era.printAndWait(
        '在还未完全回暖的冬天，坐了十几个小时的车后又跋山涉水，真的把人累坏了',
      );
      await era.printAndWait(
        '但在深山也不是没有好处，整间旅馆除了自己两人外就没有其他的客人了，可以说是一人独占整间旅馆的状态',
      );
      await era.printAndWait('因此，此时泡的温泉格外使人舒畅');

      era.printButton('「……嗯？」', 1);
      await era.input();
      await era.printAndWait('这时更衣室的门帘响起了有人的声音');
      await era.printAndWait('嗯？才说完没人的，结果就有其他人来了吗？');
      era.println();
      await tachyon.say_and_wait([callname, '？你在里面吗？']);
      era.println();
      await era.printAndWait('……啊？');
      era.printButton('「速……速子！？」', 1);
      await era.input();
      await tachyon.say_and_wait('哦哦，你在啊，那么我就直接进来了');
      era.println();
      await era.printAndWait([
        '说完后，',
        tachyon.sex,
        '不等 ',
        you.get_colored_name(),
        ' 回应便推开了更衣间的门走了进来',
      ]);
      await era.printAndWait([
        '……看见',
        tachyon.sex,
        '身上裹着浴巾的模样，',
        you.get_colored_name(),
        ' 的心中不知是庆幸还是失望',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '哈哈哈！那种表情，你以为我会光着身体进来吗？',
      );
      await tachyon.say_and_wait('再怎么说那种常识我也还是有的');
      era.println();
      await era.printAndWait([
        '虽然语气上仿佛在逗自己玩，但 ',
        you.get_colored_name(),
        ' 总觉得',
        tachyon.sex,
        '似乎有些什么话想说',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '我刚刚和柜台的老板娘聊了会……',
        tachyon.sex,
        '啊，完全不知道我是谁',
      ]);
      await tachyon.say_and_wait([
        '或者说不知道赛',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        ' 是谁',
      ]);
      era.println();
      await era.printAndWait([
        '仿佛怕 ',
        you.get_colored_name(),
        ' 误会，',
        tachyon.get_colored_name(),
        ' 连忙补充了一句',
      ]);
      await era.printAndWait([
        '认不出 ',
        tachyon.get_colored_name(),
        ' 或许可以理解，毕竟不是每个人都对',
        tachyon.uma_sex_title,
        '的比赛热衷到记得每一名选手的模样',
      ]);
      if (win_prix_lat) {
        await era.printAndWait([
          '但不认识赛',
          tachyon.uma_sex_title,
          '的 ',
          tachyon.get_colored_name(),
          '……不认识拿下了世界最高峰，凯旋门赏冠军的',
          tachyon.uma_sex_title,
          '，在这个世界上确实稀奇',
        ]);
      } else {
        await era.printAndWait([
          '但不认识赛',
          tachyon.uma_sex_title,
          '的 ',
          tachyon.get_colored_name(),
          '，在这个世界上确实稀奇',
        ]);
      }
      await era.printAndWait(
        '但想想这里是如此偏远的旅馆，忽然又觉得大概也算正常了',
      );
      era.println();
      await tachyon.say_and_wait(
        '说真的，挺令人吃惊啊……居然会有人真的，完全不知道，不认识……',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 等着 ',
        tachyon.get_colored_name(),
        ' 继续说下去',
      ]);
      await era.printAndWait([
        '虽然确实也让 ',
        you.get_colored_name(),
        ' 震惊了一下，但 ',
        tachyon.get_colored_name(),
        ' 也不是那种好名利的',
        tachyon.uma_sex_title,
        '，名声这种东西更可以说是',
        tachyon.sex,
        '最不在乎的东西之一了',
      ]);
      await era.printAndWait('特别提出这个，想必是有什么其他的理由吧');
      era.println();
      if (chris_count < 2) {
        await tachyon.say_and_wait('你还记得圣诞节那天的事吗？');
        era.println();
        await era.printAndWait([
          '圣诞节……',
          you.get_colored_name(),
          ' 想起了那间小居酒屋',
        ]);
        await era.printAndWait('赛场的世界好像真的与其毫无相干');
        await era.printAndWait('没有比赛，这些人的人生也一样在运转着');
        await era.printAndWait('此时此刻，恰如彼时彼刻');
        await era.printAndWait([
          '……当时自己对 ',
          tachyon.get_colored_name(),
          ' 提出的可能性是拒绝的',
        ]);
        await era.printAndWait([
          '因为当时的',
          tachyon.sex,
          '只是为了逃避而选择离开赛场',
        ]);
        await era.printAndWait('那，现在呢？');
        await era.printAndWait([
          you.get_colored_name(),
          ' 默默等待着 ',
          tachyon.get_colored_name(),
          ' 将话说完',
        ]);
        era.println();
        await era.printAndWait(['坐在岸边的', tachyon.sex, '不发一语']);
        await era.printAndWait('在月光下看起来是无比的寂静，宛如身处画中');
        await era.printAndWait([
          '这是但凡认识',
          tachyon.sex,
          '，认识 ',
          tachyon.get_colored_name(),
          ' 这名',
          tachyon.uma_sex_title,
          '的人都难以想像的',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '，竟然会与宁静这个词如此般配',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '……那天的回答，你还没给我吧']);
        await tachyon.say_and_wait('这样的可能性，是可以存在的吗？');
        await tachyon.say_and_wait(
          '不停追寻可能性的科学家，某天忽然觉得累了，没有任何契机，',
        );
        await tachyon.say_and_wait(
          '只是觉得差不多够了，接下来的道路，交给后来的人吧……',
        );
        await tachyon.say_and_wait('只想与自己重视的，重视自己的人一起生活……');
        await tachyon.say_and_wait(
          '你不觉得，对这种人而言……这样的地方，就很适合吗？',
        );
        era.println();
        await era.printAndWait([
          '没有人认识 ',
          tachyon.get_colored_name(),
          ' 的地方',
        ]);
        await era.printAndWait('不需要继续探索可能性');
        await era.printAndWait(
          '可以停下来歇歇脚，或者……就这么在此过着平安喜乐的生活',
        );
        await era.printAndWait('这样的可能性……');
      } else {
        await tachyon.say_and_wait('这个地方，很安静呢');
        era.println();
        await era.printAndWait(
          '……除了风声，以及温泉水的声音外，就没有任何其他人声的温泉旅馆',
        );
        await era.printAndWait([
          '过于寂静的环境在其他时刻或许会让人有些恐惧，但有了 ',
          tachyon.get_colored_name(),
          ' 陪伴，这样的空间其实也不是无法忍受',
        ]);
        era.println();
        await tachyon.say_and_wait('而且，也很大');
        era.println();
        await era.printAndWait(
          '……毕竟是温泉旅馆，虽然现在只有自己两人，但原本设计来容纳数百名游客的旅馆，大也是当然的',
        );
        era.println();
        await tachyon.say_and_wait('而且，没什么人');
        era.println();
        await era.printAndWait('……毕竟在这样的深山里啊');
        await era.printAndWait([
          '一连说了许多没头没脑的话，导致 ',
          you.get_colored_name(),
          ' 越发无法理解 ',
          tachyon.get_colored_name(),
          ' 到底想说什么',
        ]);
        era.println();
        era.println();
        await tachyon.say_and_wait([
          '如此广大，宁静，祥和的地方……应该也容得下一名凯旋门赏',
          tachyon.uma_sex_title,
          '和',
          tachyon.sex,
          '的训练员吧',
        ]);
        await tachyon.say_and_wait(
          '像这样……无人认识，安静平和的生活……也是一种可能性吗？',
        );
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, '的可能性']);
        await era.printAndWait([
          '这是 ',
          tachyon.get_colored_name(),
          ' 总放在口上的话',
        ]);
        await era.printAndWait([
          '但',
          tachyon.uma_sex_title,
          '是无法一辈子奔跑的',
        ]);
        await era.printAndWait([
          '就算是赛',
          tachyon.uma_sex_title,
          '，也终会走上离开赛场，离开对速度的追求的道路',
        ]);
        era.println();
        await era.printAndWait([
          '那么，这种可能性能否共用在 ',
          tachyon.get_colored_name(),
          ' 身上呢？',
        ]);
        await era.printAndWait([
          '对 ',
          tachyon.get_colored_name(),
          ' 而言，会有这样的可能性吗？',
        ]);
        await era.printAndWait(['成为茶楼老板的 ', tachyon.get_colored_name()]);
        await era.printAndWait([
          '走上科研道路成为科学家的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '作为普通的学生，继续升学，成为大学生而后进入社会变成上班族的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          '也会有吗，像正常人一样，离开赛场，过着自己的生活的日子',
        ]);
        era.println();
        await tachyon.say_and_wait(['……', callname, '，你愿意跟着我吗？']);
        await tachyon.say_and_wait('如果……我选择了这种可能性的话');
        era.println();
        await era.printAndWait([
          '和 ',
          tachyon.get_colored_name(),
          ' 一起，过着与比赛无关，与',
          tachyon.uma_sex_title,
          '的速度无关的平淡，祥和的日常',
        ]);
        await era.printAndWait('那样的生活，想必会十分美好吧');
        await era.printAndWait([
          '就算是平淡的生活，只要有 ',
          tachyon.get_colored_name(),
          ' 在，就绝对不会无聊',
        ]);
      }
      era.printButton('「听起来……挺不错的」', 1);
      era.printButton('「或许……再思考看看吧」', 2);
      await era.input();
      await tachyon.say_and_wait('……呵呵');
      era.println();
      await era.printAndWait([
        '对 ',
        you.get_colored_name(),
        ' 的回答，',
        tachyon.get_colored_name(),
        ' 没有多说什么',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '用脚滑绕着水面，在水上荡出层层水波',
      ]);
      await era.printAndWait([
        '忽然，风起，',
        you.get_colored_name(),
        ' 听见整个森林又活了起来',
      ]);
      await era.printAndWait('树叶沙沙落下，夜晚安眠的鸟雀被惊醒呱呱乱飞');
      await era.printAndWait([
        '夜晚的寂静，仿佛因为',
        tachyon.sex,
        '这一时的搅乱而被瞬间打破',
      ]);
      era.println();
      await era.printAndWait([
        '这样的',
        tachyon.sex,
        '，真的能过上那样的生活吗？',
      ]);
      await era.printAndWait([
        '想到无论能与不能会带来的可能性，让 ',
        you.get_colored_name(),
        ' 忽然有些兴奋',
      ]);
      await era.printAndWait([
        '不过，无论能与不能，自己都必然陪伴着',
        tachyon.sex,
        '，直到最后的吧',
      ]);
      era.println();
      await tachyon.say_and_wait('话说');
      era.println();
      await era.printAndWait('在周围的环境恢复冬夜的宁静及吵杂后');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 仿佛忽然想起一般开口说道',
      ]);
      await era.printAndWait(
        '一边说着，一边悄悄将浴巾的下摆卷了起来，直到接近大腿根部',
      );
      era.println();
      await tachyon.say_and_wait('虽然包了浴巾比较抱歉……');
      await tachyon.say_and_wait('但是，下面确实是没穿的哦……要看看吗？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 用玩味的眼神看着 ',
        you.get_colored_name(),
        '，手上慢慢的将浴巾打结的部分悄悄揭开',
      ]);
      if (tachyon.sex_code !== 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 看见了浴巾下若隐若现，似乎有些潮湿的缝隙',
        ]);
        await era.printAndWait('……大概，是温泉水吧');
        await era.printAndWait([
          '虽然知道 ',
          tachyon.get_colored_name(),
          ' 明明还没进入温泉，但 ',
          you.get_colored_name(),
          ' 还是决定这么骗自己',
        ]);
      }
      era.printButton('「在温泉里，不太好吧……」', 1);
      era.printButton('「要不，等到回房间……？」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '我已经确认过了……这几天只有我们有预定住宿，所以就算在这里做什么都不会有关系',
      );
      await tachyon.say_and_wait(
        '除此之外……因为不会有人来，所以就算你想反抗，也是没用的哦♡',
      );
      await tachyon.say_and_wait('放宽心，好好享受吧');
      era.println();

      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait([
          '不知何时脱下浴巾，赤裸着身子进入温泉的 ',
          tachyon.get_colored_name(),
          ' 趴在了 ',
          you.get_colored_name(),
          ' 的身上，将那在进入温泉前就已经完全湿透的粉嫩缝隙对准了粗棒……',
        ]);
      } else {
        await era.printAndWait([
          '不知何时脱下浴巾，赤裸着身子进入温泉的 ',
          tachyon.get_colored_name(),
          ' 趴在了 ',
          you.get_colored_name(),
          ' 的身上，',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async hot_spring_b_sex_end(tachyon, you) {
    await era.printAndWait([
      '云雨过后，',
      tachyon.get_colored_name(),
      ' 先一步出了温泉',
    ]);
    if (tachyon.sex_code !== 1 && you.sex_code > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着',
        tachyon.sex,
        '满足的摸着稍微有些变大的肚子的模样，以及顺着大腿流出，不知是温泉水还是其他什么东西的透明液体',
      ]);
      await era.printAndWait(
        '还有从一字型变成了双唇模样，唇间还留着刚偷吃完的白浆的穴口',
      );
      await era.printAndWait('胯下又一次硬了起来');
      await era.printAndWait([
        tachyon.sex,
        '仿佛察觉到了一般，稍稍扭动了一下屁股',
      ]);
    }
    await era.printAndWait('看来回房之后，又会是一场恶战啊……');
    await era.printAndWait([
      '在大战前，',
      you.get_colored_name(),
      ' 望着天空，享受战前最后的宁静',
    ]);
  },
  palace_b: (() => {
    const title = 'Plan B 的未来';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        '与 ',
        tachyon.get_colored_name(),
        ' 的三年结束了',
      ]);
      era.println();
      await era.printAndWait([
        '在毕业典礼后，',
        you.get_colored_name(),
        ' 也曾问过',
        tachyon.sex,
        '未来的打算',
      ]);
      await era.printAndWait([
        '「会再见的，',
        callname,
        '」',
        tachyon.sex,
        '只说了这么一句',
      ]);
      era.println();
      await era.printAndWait(['然后，', tachyon.get_colored_name(), ' 离开了']);
      await era.printAndWait('离开特雷森学园，离开这个国家');
      await era.printAndWait('仿佛，消失在人间一般');
      await era.printAndWait(['现在的', tachyon.sex, '究竟在哪里呢？']);
      await era.printAndWait([you.get_colored_name(), ' 也曾经有过这样的疑问']);
      await era.printAndWait('有没有好好吃饭');
      await era.printAndWait('有没有好好睡觉');
      await era.printAndWait([
        '独自一人的',
        tachyon.sex,
        '，真的有办法照顾好自己吗',
      ]);
      era.println();
      await era.printAndWait('明明对方已经成年，还是忍不住如此担心');
      await era.printAndWait('但是……其实自己心里也知道');
      await era.printAndWait('这种担心是多余的');
      await era.printAndWait([tachyon.get_colored_name(), '，是天才']);
      await era.printAndWait('是当之无愧，生而知之的天才');
      await era.printAndWait([
        '这样的',
        tachyon.sex,
        '，无论在何处都必然能够绽放出光芒吧',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 怀着对不知道身在何处的 ',
        tachyon.get_colored_name(),
        ' 的期许，打开了家中的大门',
      ]);
      era.println();
      await tachyon.say_and_wait(['哦呀，', callname, '，今天回来的挺早啊']);
      era.println();
      await era.printAndWait([
        '无视了躺在沙发上翘着脚的某名废柴',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait([
        '对了，晚餐晚餐……',
        callname,
        '，今天轮到你做了吧～～',
      ]);
      era.println();
      await era.printAndWait([
        '自己心目中，天才的',
        tachyon.uma_sex_title,
        '，超光速的粒子，',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '一定还在世界的某个角落，进行着与',
        tachyon.uma_sex_title,
        '的未来息息相关的研究',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '对了对了，今天有新的邮件……训练员研讨会……长达三天！？删掉删掉，这种东西参加了有什么意义',
      );
      era.println();
      await era.printAndWait(
        '绝对，不是那个，毕业之后还赖在学校的废弃教室里不走',
      );
      await era.printAndWait('住处则是毕业当天就带着行李自说自话搬进自己家中');
      await era.printAndWait('现在已经完全将自己的家当成地盘');
      await era.printAndWait([
        '现在还在随意侵犯自己隐私的这名咸鱼',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '？',
        callname,
        '～～～～理我一下嘛～～～～',
      ]);
      await you.say_and_wait('所以到底为什么速子要赖在我家里啊！');
      era.println();
      await era.printAndWait('终于，还是无法无视对方');
      await era.printAndWait(
        '忍不住喊出了从第一天就憋在心里，却因为对方的理所当然而一时说不出口的疑惑',
      );
      era.println();
      await tachyon.say_and_wait('欸———有什么关系吗？');
      await tachyon.say_and_wait(
        '再说，我又不是完全不做家事，扫地拖地什么的，不是还有帮忙分担做晚饭嘛～～',
      );
      era.println();
      await era.printAndWait([
        '确实，要说现在的 ',
        tachyon.get_colored_name(),
        ' 比起过去有什么进展的话',
      ]);
      await era.printAndWait('大概就是生活技能的成长吧');
      await era.printAndWait([
        '与以前什么事都要自己代劳的 ',
        tachyon.get_colored_name(),
        ' 不同',
      ]);
      await era.printAndWait([
        '现在的 ',
        tachyon.get_colored_name(),
        '，确实在进步着',
      ]);
      await era.printAndWait('从吃完饭后洗碗盘，到生活中会帮忙扫地拖地');
      await era.printAndWait('虽然只是极微小的差距，但确实在进步着……');
      await era.printAndWait(
        '但是，为什么有种淡淡的，像是老父亲看着开始做家事的女儿而感到欣慰的心情呢',
      );
      await era.printAndWait(
        '不对，差点被绕过去了……重点不是为什么要住在我这里吗！',
      );
      era.println();
      await tachyon.say_and_wait('这种小事就别在意了，没事没事');
      await tachyon.say_and_wait('哦呀，还是说是那个，钱的问题吗？');
      await tachyon.say_and_wait(
        '确实，生活上的分担不仅仅只有家事……包括生活开销也是应该分担的',
      );
      await tachyon.say_and_wait('那么，先从这个月的生活费开始分担吧，');
      await tachyon.say_and_wait(
        '幸好，哪怕不谈奖金，过去我申请过的专利什么……专利费大概还是够的吧',
      );
      era.println();
      await era.printAndWait('重点不是钱……不，钱很重要，但现在的重点不在钱');
      await era.printAndWait([
        '说到底……',
        tachyon.get_colored_name(),
        ' 不选择继续升学吗？甚至，出国留学之类……？',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '我说，',
        callname,
        '，你觉得按部就班的升学，对我真的有任何帮助吗？',
      ]);
      await tachyon.say_and_wait(
        '这种团体教育，方便的是没决定好自己路的庸人，对我这种天才而言，自己的决定就是最好的选择',
      );
      era.println();
      await era.printAndWait('正如之前不想承认的那样');
      await era.printAndWait([tachyon.get_colored_name(), ' 确实是一名天才']);
      await era.printAndWait([
        '或许自己确实没有办法对',
        tachyon.sex,
        '的选择做出质疑',
      ]);
      await era.printAndWait(
        '但是，除此之外应该还有更多问题吧，比如……家人之类的……？',
      );
      era.println();
      await tachyon.say_and_wait([
        '我说，',
        callname,
        '……我已经成年了哦？法律上来讲是完全行为能力人了，我有自主选择住处的权利吧？',
      ]);
      await you.say_and_wait(
        '我相信法律绝对不会保障把别人家当成自己住处的行为',
      );
      await tachyon.say_and_wait(
        '嘛，反正空间不是挺大的吗，让我挤挤也不会怎么样吧',
      );
      await tachyon.say_and_wait('……再说，你舍得让我离开吗？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 用玩味的眼神盯着 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait('每一次都是如此');
      await era.printAndWait('仿佛被蛇盯上的豚鼠一般');
      await era.printAndWait('仿佛将一切吸入的深渊一般');
      await era.printAndWait([
        '每次只要被 ',
        tachyon.get_colored_name(),
        ' 用那样的眼眸注视，就再说不出任何反驳的话',
      ]);
      era.println();
      await tachyon.say_and_wait('如此爱着我的你，真的忍心让我离开吗？');
      await tachyon.say_and_wait('被我如此爱着的你，真的打算拒绝我的爱吗？');
      era.println();
      await era.printAndWait('口舌干燥');
      await era.printAndWait([
        '不知不觉，',
        tachyon.get_colored_name(),
        ' 已经逼近了自己身前',
      ]);
      await era.printAndWait(['就如菊花赏那时的', tachyon.sex, '一样']);
      await era.printAndWait('但与那时不同的，这次真的有着某种预感');
      await era.printAndWait('「要被吃掉了」的实感');
      era.println();
      await era.printAndWait('啊啊');
      await era.printAndWait('说到底，这也是自己选择的道路吧');
      await era.printAndWait([
        you.get_colored_name(),
        ' 想起了温泉旅行时与 ',
        tachyon.get_colored_name(),
        ' 的对话',
      ]);
      era.println();
      await era.printAndWait([
        '当初自己已经决定，无论',
        tachyon.sex,
        '最后选择的会是什么可能性，都必然会跟随到最后',
      ]);
      await era.printAndWait('注视深渊者，必将被深渊所噬');
      await era.printAndWait([
        you.get_colored_actual_name(),
        ' 恐怕，一生也逃不出',
        tachyon.sex,
        '眼中的深渊了吧',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
