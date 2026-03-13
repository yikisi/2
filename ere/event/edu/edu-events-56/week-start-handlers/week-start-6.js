const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[143 + 1] = async (kitaru, me, callname) => {
    await print_event_name('Farewell Matikane……', kitaru);
    await era.printAndWait([
      '也许是最后一次，以 ',
      kitaru.get_colored_name(),
      ' 的训练员这一身份陪',
      kitaru.sex,
      '完成这一次的初诣了。',
    ]);
    await era.printAndWait([
      '怀着这样的心情，',
      me.get_colored_name(),
      ' 再次来到这座偏远神社的鸟居前。',
    ]);
    era.printButton('迈入鸟居', 1);

    await era.input();
    await era.printAndWait(
      '奇怪，并没有以前那种宛如跌落进另一个世界中的错位感。',
    );
    await kitaru.say_and_wait([callname, '！']);
    await era.printAndWait([
      '不过，没等 ',
      me.get_colored_name(),
      ' 细想多久，早早等在参拜道上的 ',
      kitaru.get_colored_name(),
      ' 便把 ',
      me.get_colored_name(),
      ' 拉进了正在准备迎接新年参拜客的神社内。',
    ]);
    era.drawLine();
    await kitaru.say_and_wait('对！对！再往左边挂一点。');
    await kitaru.say_and_wait('啊，哦，欸欸欸！！！');
    await kitaru.say_and_wait([
      '啊！小心啊，',
      sys_get_colored_callname(56, 58),
      ' 同学！',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 正有条不紊的指挥着包括 ',
      get_chara_talk(58).get_colored_name(),
      ' 在内几位邀请来帮忙的同学装点着新年的神社。',
    ]);
    await era.printAndWait(
      '一旁而事先折好的工艺品和等待挂起的灯笼如小山般强调着接下来的工作量会有多大。',
    );
    era.printButton('「能独当一面了呢！」', 1);
    await era.input();
    await era.printAndWait([
      '出言夸赞了一下自己的担当，让站在一旁调度众人的',
      kitaru.teen_sex_title,
      '双耳微不可察的摆动了一下。',
    ]);
    await kitaru.say_and_wait('……嗯。');
    await era.printAndWait([
      '比划了一下高度，',
      kitaru.get_colored_name(),
      ' 示意负责纸灯笼的茶色',
      kitaru.uma_sex_title,
      '继续把挂绳拉高一些。',
    ]);
    await kitaru.say_and_wait([
      '记得小时候和',
      kitaru.get_bigger_sibling_sex_title(),
      '的初诣的时候，那才是人山人海呢！',
    ]);
    await kitaru.say_and_wait('为此也一直有在准备就是了，这回应该能够用上吧？');
    await era.printAndWait([
      '在看着茶色头发的',
      kitaru.uma_sex_title,
      '成功把悬于道路上的纸灯笼串起之后，有着温暖发色的',
      kitaru.uma_sex_title,
      '转头等待起 ',
      me.get_colored_name(),
      ' 的答复。',
    ]);
    era.printButton('点头', 1);
    era.printButton('「我相信会的。」', 2);
    await era.input();
    await era.printAndWait([
      '的确如此，在有马纪念上 ',
      kitaru.get_colored_name(),
      ' 的漂亮表现与发言惊艳了全国的观众。',
    ]);
    await era.printAndWait([
      '社交媒体上早就有不少人的发言想要借着新年的参拜来让这位才在有马纪念中取得优胜的',
      kitaru.teen_sex_title,
      '为自己带来好运。',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 背后的故事也被一些好事的媒体挖了出来，除了对如此乐天的',
      kitaru.teen_sex_title,
      '居然有着如此沉重过往而感到的反差，更多则是因此而生的感动。',
    ]);
    await me.say_and_wait(['背负命运奔跑的赛', kitaru.uma_sex_title]);
    await era.printAndWait([
      '想到这里，下意识的念出了最近几张赛',
      kitaru.uma_sex_title,
      '期刊上为 ',
      kitaru.get_colored_name(),
      ' 冠上的名号。',
    ]);
    await kitaru.say_and_wait('欸！！！');
    await kitaru.say_and_wait('有些夸张了！');
    await kitaru.say_and_wait([
      '还有什么',
      kitaru.teen_sex_title,
      '和',
      kitaru.sex,
      '的命定之人之类的花边新闻……',
    ]);
    await era.printAndWait([
      '不知是因为 ',
      me.get_colored_name(),
      ' 提及的那个过于浮夸的称号，还是后面随之想到的一些半真半假的绯闻，原本气定神闲指挥着众人的 ',
      kitaru.get_colored_name(),
      ' 脸上多了几分绯红。',
    ]);
    await kitaru.say_and_wait('不过，命运啊……我真是被困扰了好久呢！');
    await kitaru.say_and_wait('而且我想……我也已经准备好了……');
    era.printButton('「准备好什么了？」', 1);

    await era.input();
    await kitaru.say_and_wait([
      '那个，',
      callname,
      '，明天陪我再去一躺市郊的墓地吧。',
    ]);
    await era.printAndWait([
      '暂时按下了自己好奇的心情，',
      me.get_colored_name(),
      ' 开始在 ',
      kitaru.get_colored_name(),
      ' 的指挥下加入了为新年的神社做起准备的队伍中。',
    ]);
    era.drawLine({ content: '次日 市郊墓园' });
    await era.printAndWait([
      '同样的柏树下，墓碑旁，名叫',
      me.get_colored_actual_name(),
      '的训练员身旁站着一位橙色',
      kitaru.uma_sex_title,
      '。',
    ]);
    await era.printAndWait([
      '前一天晚上的祓禊仪式，果然如 ',
      me.get_colored_name(),
      ' 预料般的那样，前来的参拜客举袖为云。',
    ]);
    await era.printAndWait([
      '光是焚烧那些客人们带来的御守，熊手等开运道具，便让 ',
      kitaru.get_colored_name(),
      '，还有',
      kitaru.sex,
      '请来的临时巫女忙到了半夜。',
    ]);
    await era.printAndWait([
      '记得自己的承诺，',
      kitaru.get_colored_name(),
      ' 还是起了一个大早，稀疏纤细的尘埃在冬日的阳光中漂浮游动，大理石制的墓碑如玻璃般闪耀。',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '注意到',
      kitaru.teen_sex_title,
      '只是呆立在墓碑前，一言不发。',
    ]);
    await me.say_and_wait('需要留你一个人静静吗？');
    await era.printAndWait([
      me.get_colored_name(),
      '再次问出了这个问题，一如第一次被 ',
      kitaru.get_colored_name(),
      ' 带到此处一样。',
    ]);
    await kitaru.say_and_wait([
      '不，不用了，',
      me.actual_name[0],
      '……',
      me.get_colored_actual_name(),
      '，陪我一会儿吧……',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      ' 发出了哽咽，并非平常那种若无其事的淡然。',
    ]);
    await kitaru.say_and_wait('……还记得我昨天说的准备好了吗。');
    await kitaru.say_and_wait([
      '笑容，奔跑的执念，最开始的跑步技巧，运营神社的知识，',
      kitaru.get_bigger_sibling_sex_title(),
      '教给我了许多。',
    ]);
    await kitaru.say_and_wait([
      '倘若灵魂存在的话，把我自己的躯壳献给',
      kitaru.get_bigger_sibling_sex_title(),
      '也不是什么不可以的事情！',
    ]);
    await era.printAndWait([
      '几乎是低吼着说出这番话的 ',
      kitaru.get_colored_name(),
      '，望着',
      kitaru.get_bigger_sibling_sex_title(),
      '的黑白照片，三年来变得成熟了许多的侧脸几乎和照片中的',
      kitaru.uma_sex_title,
      '无异。',
    ]);
    await kitaru.say_and_wait([
      '但是，',
      kitaru.get_bigger_sibling_sex_title(),
      '肯定不会愿意，以及……',
      callname,
      ' 也不会愿意的吧。',
    ]);
    await kitaru.say_and_wait([
      '……准备好，让',
      kitaru.get_bigger_sibling_sex_title(),
      '离开了！',
    ]);
    await kitaru.say_and_wait(
      '但这并不是遗忘，而是告别……我，我准备好跑出属于自己的命运了！',
    );
    await kitaru.say_and_wait([
      '我站在这里，',
      callname,
      ' 站在身旁看着我，就像是阳光洒在我的脸上……',
    ]);
    await kitaru.say_and_wait([
      kitaru.get_bigger_sibling_sex_title(),
      '，我现在很幸福呢……',
    ]);
    await era.printAndWait([
      '阵风拂来，树叶的沙沙响声悠扬空灵，如同 ',
      kitaru.get_colored_name(),
      ' 昨晚奏响的神乐……',
    ]);
  };

  /** @this CustomizedEdu */
  handlers.palace = async function (kitaru, me, callname, flags, edu_marks) {
    await CustomizedEdu.common_palace(kitaru, me);
    if (
      edu_marks.good_end === 1 &&
      era.get('love:56') >= 75 &&
      era.get('cflag:56:殿堂') === 2
    ) {
      // 并且进殿堂
      era.drawLine();
      await print_event_name('两个世界的主人', kitaru);
      await era.printAndWait(
        '有马纪念上的表演为神社带来的人气来的快，去的也快。',
      );
      await era.printAndWait([
        '神社再次变回了如 ',
        me.get_colored_name(),
        ' 最初遇见 ',
        kitaru.get_colored_name(),
        ' 时寂寥无人的样子。',
      ]);
      await era.printAndWait([
        '若要说有什么不同的话，也许就是参拜客多了许多以菊花赏为目标的赛',
        kitaru.uma_sex_title,
        '吧。',
      ]);
      await era.printAndWait('以及……');
      await kitaru.say_and_wait(['辛苦了，', callname, '！']);
      await era.printAndWait([
        '穿着巫女的装束的 ',
        kitaru.get_colored_name(),
        ' 抓住了 ',
        me.get_colored_name(),
        ' 的胳膊。',
      ]);
      await kitaru.say_and_wait('让你做这些杂务真是不好意思……');
      await era.printAndWait([
        '本来只是应对因为有马纪念突然增加的参拜客，但来神社帮忙的这一习惯还是被 ',
        me.get_colored_name(),
        ' 保留了下来。',
      ]);
      await era.printAndWait([
        '毕竟 ',
        kitaru.get_colored_name(),
        ' 的闪光系列赛才刚刚结束，不知下一位合拍的担当会在什么时候遇见。',
      ]);
      await kitaru.say_and_wait('去休息一下吧！');
      await era.printAndWait(
        '并肩走在夕阳照耀下的神社，巫女的木屐在石板路上哒哒响着。',
      );
      await era.printAndWait([
        '直到眼前的 ',
        kitaru.get_colored_name(),
        ' 停下了脚步。',
      ]);
      await era.printAndWait([
        '面前是熟悉的塞钱箱，最早，',
        me.get_colored_name(),
        ' 便是和 ',
        kitaru.get_colored_name(),
        ' 在这里遇见的。',
      ]);
      await kitaru.say_and_wait([
        '说起来，',
        callname,
        ' 再过几个月就要迎来新担当了吧。',
      ]);
      await kitaru.say_and_wait('需要我帮你祈福一下吗？');
      era.printButton('点头', 1);
      era.printButton('摇头', 2);

      if ((await era.input()) === 1) {
        await era.printAndWait([
          kitaru.sex,
          '尝试挥动了一下御币，却又迅速的停了下来，眉头紧皱。',
        ]);
        await kitaru.say_and_wait(
          '……果然，如果是为了这个的话，完全没法全心全意啊。',
        );
      } else {
        await kitaru.say_and_wait('猜到了！');
        await kitaru.say_and_wait([
          '不过，要是 ',
          callname,
          ' 同意我大概也不会做吧。',
        ]);
      }
      await era.printAndWait([
        '又陷入了沉默，直到不断落下的残阳为 ',
        kitaru.get_colored_name(),
        ' 披上了金色的头纱。',
      ]);
      await era.printAndWait([
        '将御币放在一旁的塞钱箱上，',
        kitaru.get_colored_name(),
        ' 打破了沉默。',
      ]);
      await kitaru.say_and_wait([callname, ' 听说过逢魔时刻吗？']);
      era.printButton('点头', 1);
      era.printButton('摇头', 2);
      await era.input();
      await kitaru.say_and_wait(
        '嗯！也就是黄昏时分，据说这是两世交汇的时刻，也是神魔最容易干涉人间的时刻。',
      );
      await kitaru.say_and_wait('这样的话……');
      await kitaru.say_and_wait(
        '跨越了有马纪念的考验，进入了殿堂，勉勉强强算是成为了神明的我。',
      );
      await kitaru.say_and_wait('不知道能不能借此实现自己的愿望呢？');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 紧握的右手伸到了 ',
        me.get_colored_name(),
        ' 的面前，而后，伸出了',
        kitaru.sex,
        '的小拇指。',
      ]);
      await era.printAndWait([
        '是 ',
        me.get_colored_name(),
        ' 熟悉的，拉钩仪式的邀请。',
      ]);
      await kitaru.say_and_wait('今后，会陪我一直走下去吧？');
      await kitaru.say_and_wait(`我的训练员${me.adult_sex_title}……`);
      await kitaru.say_and_wait('我的命定之人……');
      await kitaru.say_and_wait('以及……');
      await era.printAndWait([
        kitaru.teen_sex_title,
        '的声音逐渐变得细若蚊鸣，绯红随着温暖的夕阳染上了',
        kitaru.sex,
        '的脸颊。',
      ]);
      await era.printAndWait([kitaru.sex, '抬起头来，瞳中星光闪烁。']);
      await kitaru.say_and_wait('我的爱人。');
    } else {
      await CustomizedEdu.common_palace_relation(kitaru, me);
    }
  };
};
