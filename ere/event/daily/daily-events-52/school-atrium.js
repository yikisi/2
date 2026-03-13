const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  hook.arg = (await select_action_in_atrium()) === 0;
  let random_range;
  if (hook.arg) {
    if (!edu_marks.time_cap && love === 100) {
      edu_marks.time_cap = 1;
      await print_event_name('是时光胶囊哦？', urara);
      await era.printAndWait(
        '今日的中庭四下无人，那座枯树洞也依旧在草坪正中安静地守望着周围的一切。',
      );
      await era.printAndWait([
        '坐在熟悉的树桩边缘，注视着身边已有了特别意义的 ',
        me.get_colored_name(),
        '，今天的 ',
        urara.get_colored_name(),
        ' 向 ',
        me.get_colored_name(),
        ' 抛出了不同以往的话题。',
      ]);
      await urara.say_and_wait([
        callname,
        '，前几天呢，我和大家一起做了时间胶囊哦！',
      ]);

      era.printButton('「听上去很有趣啊！」', 1);
      await era.input();

      await urara.say_and_wait(
        '嗯！虽然大家手忙脚乱，写下的话也横七竖八，但真的非常有趣！',
      );
      await urara.say_and_wait(
        '还有哦，在写完后要埋下的时候，虽然大家讨论过很多地方，但果然还是放到习惯的地方了！',
      );
      await era.printAndWait([
        '顺着 ',
        urara.get_colored_name(),
        ' 的目光，',
        me.get_colored_name(),
        ' 也看向了那座沉默的树洞，在树洞脚下的一部分草皮上，的确有着翻开过的痕迹。',
      ]);
      await era.printAndWait([
        '在其他人看来或许是意料之外，但对于特雷森的',
        urara.uma_sex_title,
        '们来说，又是情理之中的选择。',
      ]);

      era.printButton('「可是，为什么要特意来告诉我呢？」', 1);
      await era.input();

      await urara.say_and_wait([
        '咦……诶，可能是因为 ',
        callname,
        ' 和树洞先生一样，很擅长保守秘密吧！',
      ]);
      await era.printAndWait([
        '表情片刻停滞后，小小的',
        urara.uma_sex_title,
        '将眼神又投向了谁也不在的中庭。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 依然灿烂的笑着，但',
        urara.sex,
        '难得的在酝酿着什么，似乎又有点苦恼，现在的',
        urara.sex,
        '好像在思索着与以往不同的东西。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 察觉到那开朗中有一丝忧郁，还有仿佛忽然发现的一点向往与犹豫，只是',
        urara.sex,
        '表现的仍然不太明显。',
      ]);
      await era.printAndWait([
        '或许就连 ',
        urara.get_colored_name(),
        ' 自己都还不明白，只是身为训练员的 ',
        me.get_colored_name(),
        '，以旁听者的视角恰巧在此时发现了这点。',
      ]);
      await urara.say_and_wait(
        '虽然志愿全都不一样，但大家合影上的笑脸都在一起呢！所以我觉得就这样分开，大家应该也会很开心——',
      );
      await urara.say_and_wait(
        '可是，尽管大家都很开心，因为大家的志愿都不一样，分开的一天也总会到来吧……',
      );
      await era.printAndWait([
        '用「开心」的语气向 ',
        me.get_colored_name(),
        ' 叙述着埋下时间胶囊时的经历，',
        urara.get_colored_name(),
        ' 的尾巴与右脚像是在配合',
        urara.sex,
        '的思考般，不由自主地打着转。',
      ]);
      await era.printAndWait([
        '随后，似乎是想通了一些的 ',
        urara.get_colored_name(),
        '，用「充分理解后」的笑容望向了 ',
        me.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        callname,
        '！分开的那天，',
        callname,
        ' 会舍不得乌拉拉吗……我肯定会舍不得 ',
        callname,
        ' 的，到时候一定会哭出来！',
      ]);
      await era.printAndWait([
        '依然笑脸相迎的 ',
        urara.get_colored_name(),
        '，开朗地承认着大人不敢、也不会坦言的事情。',
      ]);
      await era.printAndWait([
        '不知何时长大了的 ',
        urara.get_colored_name(),
        ' 对 ',
        me.get_colored_name(),
        ' 微笑着，即使有些停顿，语气也没有一丝动摇。',
      ]);
      await urara.say_and_wait([
        '但是，那样 ',
        callname,
        ' 也会伤心吧？所以就算那一刻真来了，我也会忍住不哭的！',
      ]);
      await era.printAndWait([
        '不知何时已紧靠在 ',
        me.get_colored_name(),
        ' 的身边，粉色的身影隐隐有些颤抖，这绝不是 ',
        me.get_colored_name(),
        ' 的错觉，但 ',
        urara.get_colored_name(),
        ' 依然笑着，勾起了 ',
        me.get_colored_name(),
        ' 的手指。',
      ]);
      await urara.say_and_wait([
        '所以那个时候 ',
        callname,
        ' 也不要哭！约好了哦！因为 ',
        callname,
        ' 和乌拉拉绝对会再见的！',
      ]);
      await era.printAndWait([
        '樱瞳在薄薄的泪水中绽放着，此刻努力地想要支起耳朵的',
        urara.sex,
        '，正怀着不输给任何人的沉重且真挚的感情。',
      ]);
      await urara.say_and_wait([
        '不管关系变成什么样、以后会去哪里，乌拉拉都会记得 ',
        callname,
        '！所以、所以……',
      ]);

      era.printButton(
        '「所以已经约好了哦？就算未来会分开，我们也一定会再见。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '赶在担当真的落下泪水之前，',
        me.get_colored_name(),
        ' 率先做出了起誓，给予了',
        urara.sex,
        '一个来自大人的拥抱。',
      ]);
      await era.printAndWait(
        '不要冲动，不要轻易发誓，不要轻视与任何人许下的约定，许诺前要思考能不能做到——',
      );
      await era.printAndWait([
        '这些 ',
        me.get_colored_name(),
        ' 全都知道，但此刻被不知不觉间成长的 ',
        urara.get_colored_name(),
        ' 所吸引的 ',
        me.get_colored_name(),
        '，遵循着内心做出了唯一解。',
      ]);
      await era.printAndWait([
        '感受着与结成契约时似是而非的鼓动，',
        me.get_colored_name(),
        ' 抚摸着 ',
        urara.get_colored_name(),
        ' 柔顺的发丝，为',
        urara.sex,
        '抹掉眼角的泪水。',
      ]);

      era.printButton('「一起回去吧！」', 1);
      await era.input();

      await urara.say_and_wait('嗯！');
      era.drawLine();
      await in_urara.say_as_unknown_and_wait(
        '是这样吗？那愿未来的乌拉拉，能够在那时得偿所愿……',
      );
      await in_urara.say_as_unknown_and_wait([
        '也愿未来的你，就算改变，也仍能守住这份与',
        urara.teen_sex_title,
        '相约的诺言……',
      ]);
      hook.override = true;
      era.println();
      get_attr_and_print_in_event(
        52,
        new Array(5).fill(10),
        0,
        undefined,
        true,
      ) && (await era.waitAnyKey());
      sys_like_chara(52, 0, 10) && (await era.waitAnyKey());
    } else {
      random_range = 1;
      if (love === 100) {
        random_range = 5;
      } else if (love >= 75) {
        random_range = 4;
      } else if (love >= 50) {
        random_range = 3;
      } else if (love >= 25) {
        random_range = 2;
      }
      switch (get_random_value(0, random_range)) {
        case 0:
          await urara.say_and_wait([
            callname,
            '，今天的树洞里面好像也有新的变化哟！',
          ]);
          await era.printAndWait([
            '听着 ',
            urara.get_colored_name(),
            ' 的提示，',
            me.get_colored_name(),
            ' 也观察起了树洞的里面。',
          ]);
          break;
        case 1:
          await urara.say_and_wait(
            '大家都让树洞先生带走坏心情，但向它分享些好事的话，也许会有好事发生也说不定呢！',
          );
          await era.printAndWait([
            '虽然就像孩子的异想天开，但这也正是 ',
            urara.get_colored_name(),
            ' 独有的祝福吧。',
          ]);
          break;
        case 2:
          await urara.say_and_wait([
            callname,
            '！一起来向树洞先生分享些开心的事情吧！树洞先生也会很高兴的！',
          ]);
          await era.printAndWait([
            '早早地跑到了中庭，坐在树洞边等待着 ',
            me.get_colored_name(),
            ' 的 ',
            urara.get_colored_name(),
            ' 向 ',
            me.get_colored_name(),
            ' 笑着挥手说道。',
          ]);
          break;
        case 3:
          await urara.say_and_wait(
            '传闻里树洞先生也能带走一些积攒过多的欲望，但是总觉得被这样做树洞先生也很可怜……',
          );
          await era.printAndWait([
            '尽管嘴上是这样想的，',
            urara.get_colored_name(),
            ' 还是将目光不停地移向可怜的枯树洞。',
          ]);
          break;
        case 4:
          await urara.say_and_wait([
            '树洞先生！可以告诉我怎么让 ',
            callname,
            ' 更喜欢我吗？嘿嘿～果然树洞先生也不知道！',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' 并不疑惑地向树洞抛出了这样的问题，或许这位小',
            urara.uma_sex_title,
            '早就有了自己的答案。',
          ]);
          break;
        case 5:
          await urara.say_and_wait(
            '有人说只要向树洞先生献上贡品，树洞先生就会让你渴望的人永远只看着你……',
          );
          await urara.say_and_wait(
            '虽然有考虑过……但那样不行！那样做就算树洞先生也不会开心的！',
          );
          await era.printAndWait([
            '即使已经有点吓人了，但想到 ',
            urara.get_colored_name(),
            ' 并不会在这里撒谎，明确不会这样做的',
            urara.sex,
            '还是那样令人安心。',
          ]);
      }
    }
  } else {
    random_range = 2;
    if (love === 100) {
      random_range = 5;
    } else if (love >= 75) {
      random_range = 4;
    } else if (love >= 50) {
      random_range = 3;
    }
    switch (get_random_value(0, random_range)) {
      case 0:
        await urara.say_and_wait([
          '其实 ',
          sys_get_colored_callname(52, 20),
          ' 经常会在这里的树下睡午觉！嗯——今天好像不在的样子！',
        ]);
        await era.printAndWait([
          '如 ',
          urara.get_colored_name(),
          ' 所言，聚集在树下的晒太阳的猫猫中，确实没出现那位熟悉的卢毛',
          urara.uma_sex_title,
          '。',
        ]);
        break;
      case 1:
        await urara.say_and_wait([
          sys_get_colored_callname(52, 56),
          ' 一般会在那里支一个无偿占卜摊，不过一旦做的太过就会被老师们赶走呢！',
        ]);
        await era.printAndWait([
          '现在小',
          urara.uma_sex_title,
          '所指的中庭一角空荡荡的，看来福来',
          urara.sex,
          '最近又被赶走了吧。',
        ]);
        break;
      case 2:
        await urara.say_and_wait([
          callname,
          ' 喜欢看绘本吗？我从 ',
          sys_get_colored_callname(52, 30),
          ' 那里拿到了新的绘本呢！',
        ]);
        await era.printAndWait([
          '坐在中庭的长椅上，',
          urara.get_colored_name(),
          ' 在两人中间笑着摊开了事先拿来的绘本。',
        ]);
        break;
      case 3:
        await urara.say_and_wait([
          '在太阳晒过之后，',
          callname,
          ' 的身上会有一股很好闻的味道……是真的哦！',
        ]);
        await urara.say_and_wait([
          '不过、乌拉拉的身上也有很好闻的味道哦！',
          callname,
          ' 也来闻闻吧……！',
        ]);
        await era.printAndWait([
          '在满载红晕的笑容中，',
          urara.get_colored_name(),
          ' 用',
          urara.uma_sex_title,
          '的力气将 ',
          me.get_colored_name(),
          ' 拉入了充斥着',
          urara.teen_sex_title,
          '体香的怀中……',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          '嘿嘿～和 ',
          callname,
          ' 在中庭里散步，感觉就像是约会一样！',
        ]);
        await urara.say_and_wait([
          '诶？就是在约会吗？那……乌拉拉好像每天都在和 ',
          callname,
          ' 约会的样子？',
        ]);
        await era.printAndWait([
          '约会应该不是这样算的吧？虽然与 ',
          urara.get_colored_name(),
          ' 一起的时间也总是很开心没错。',
        ]);
        break;
      case 5:
        await urara.say_and_wait(
          '一起躺在草坪上，总会感觉很安心！感觉在太阳下面要睡着了！',
        );
        await urara.say_and_wait([
          callname,
          '！要抱抱我吗？乌拉拉这里——还空着哦？',
        ]);
        await era.printAndWait([
          '躺在 ',
          me.get_colored_name(),
          ' 的身边，',
          urara.get_colored_name(),
          ' 温柔地张开柔软的怀抱，微笑着对 ',
          me.get_colored_name(),
          ' 发出了邀请。',
        ]);
    }
  }
};
