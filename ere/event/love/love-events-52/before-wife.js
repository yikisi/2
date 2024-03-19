const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_love_uma_in_event,
  sys_get_colored_callname,
  sys_get_callname,
} = require('#/system/sys-calc-chara-others');

const masturbate = require('#/event/snippets/masturbate');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');

/**
 * @author 99
 *
 * @param {CharaTalk} me
 * @param {CharaTalk} urara
 * @param {CharaTalk} in_urara
 * @param {number} relation
 * @param {string} callname
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (
  me,
  urara,
  in_urara,
  relation,
  callname,
  _,
  event_object,
) => {
  const life_marks = new UraraLifeMarks();
  if (life_marks.active_89 === 0) {
    await print_event_name('不再回头的决心', urara);
    await urara.print_and_wait(
      '又是那样吧，只要乌拉拉闭上眼睛的话，肯定会发生些什么吧？',
    );
    await urara.print_and_wait(
      '但是平静的夜里什么都不会发生，从床上睁开眼睛，依旧是熟悉的宿舍寝室。',
    );
    await urara.print_and_wait([
      '没有发生什么意外惊喜，也没有妄想中会对乌拉拉这样那样的 ',
      callname,
      '。',
    ]);
    await urara.print_and_wait([
      '总觉得有些……不高兴？但是除了在梦话中说着「一流」的 ',
      sys_get_colored_callname(52, 61),
      ' 外，并没有什么扫兴的理由。',
    ]);
    await urara.print_and_wait(
      '该睡觉的时间早就过了，可乌拉拉又在因为胡思乱想失眠。',
    );
    await urara.print_and_wait([
      '要不了多久，乌拉拉或许很快就会变成只想着和 ',
      callname,
      ' 做舒服的事的坏孩子了。',
    ]);
    await urara.print_and_wait([
      '不过在那之前，乌拉拉会先成为脑袋里除了 ',
      callname,
      ' 什么都塞不下的笨蛋吧。',
    ]);
    era.println();
    if (era.get('exp:52:性爱次数') >= 10) {
      await urara.say_and_wait([
        '一、一定都是因为 ',
        callname,
        ' 才变成的这个样子的！',
      ]);
      await urara.print_and_wait(
        '难道乌拉拉本来就是好色的坏孩子？就算是乌拉拉也会觉得泄气啊。',
      );
      await urara.print_and_wait([
        '可不管怎么否定，乌拉拉身体都已经离不开 ',
        callname,
        ' 了……',
      ]);
    } else {
      await urara.say_and_wait([
        '要是 ',
        callname,
        ' 能与乌拉拉更多、更多的亲热，乌拉拉就不会变成坏孩子了吧？',
      ]);
      await urara.print_and_wait([
        '可是乌拉拉身体都已经为 ',
        callname,
        ' 做好准备了，',
        callname,
        ' 却还是冷淡的不像样子。',
      ]);
      await urara.print_and_wait([
        '果然 ',
        callname,
        ' 更喜欢成熟一点的吗？有点伤心啊……',
      ]);
    }
    era.println();
    if (relation > 150) {
      await urara.say_and_wait([
        '但是就算这样，我也不想讨厌 ',
        callname,
        '，不如说乌拉拉爱着 ',
        callname,
        ' 才对。',
      ]);
      await urara.print_and_wait([
        '名为「',
        urara.get_colored_name(),
        '」的',
        urara.get_uma_sex_title(),
        '迷恋着 ',
        callname,
        '，甚至「恋人关系」也已经无法满足。',
      ]);
      await urara.print_and_wait(
        '但更进一步的话，那不就会变成很重要的关系吗？「恋人」以上，应该是夫妻对吧？',
      );
      await urara.print_and_wait(
        '即使妈妈没主动提过，乌拉拉也知道那是人生的头等大事。',
      );
      await urara.print_and_wait([
        '就算与 ',
        callname,
        ' 达成了肌肤相亲的默契，如此任性的要求也不是能随便提起的。',
      ]);
    } else {
      await urara.say_and_wait([
        '乌拉拉以前也经常怀疑自己，只是每次都发现自己好像还是爱着 ',
        callname,
        '。',
      ]);
      await urara.print_and_wait([
        '就算很难承认，「',
        urara.get_colored_name(),
        '」现在也已经只能珍惜这份不安分的爱意了。',
      ]);
      await urara.print_and_wait([
        '如果乌拉拉能再往上一步，将 ',
        callname,
        ' 绑在身边呢？但是再往上的话……',
      ]);
      await urara.print_and_wait(
        '随便与人结合很难得到幸福，妈妈曾经是这样对乌拉拉说的。',
      );
      await urara.print_and_wait(
        '但是现在明知会变得不幸，乌拉拉却舍不得丢掉这段缝缝补补的经历。',
      );
    }
    era.println();
    urara.say(['那么现在与 ', callname, ' 的关系……']);
    era.printButton('「我是不会退让的！」（升级关系）', 1);
    era.printButton('「果然太早了吧……」（暂不升级）', 2);
    if ((await era.input()) === 1) {
      await urara.print_and_wait('决定了，乌拉拉不会再退让了。');
      await urara.print_and_wait([
        '乌拉拉已经在 ',
        callname,
        ' 心里占到了独属于自己的一席之地，但这还远远不够。',
      ]);
      await urara.print_and_wait(
        '因为就算乌拉拉不做选择，永远不会止步于现在，就像乌拉拉不会永远都是小孩子。',
      );
      await urara.print_and_wait([
        '与其继续考虑 ',
        callname,
        ' 的感受，不如乌拉拉去主动做些什么，就算被拒绝也没关系。',
      ]);
      await urara.print_and_wait(
        '接下来不管是好与坏，乌拉拉都要像大人一样拿出勇气来，既然大家能做到，那乌拉拉也没问题！',
      );
      await urara.print_and_wait([
        '还有不只是「恋人」的约定，乌拉拉还想要和 ',
        callname,
        '、想要和 ',
        me.actual_name,
        ' 约定更多的事——',
      ]);
      if (
        era
          .getAddedCharacters()
          .filter((e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75)
          .length > 0
      ) {
        era.println();
        await urara.print_and_wait([
          '不过首先，不管 ',
          callname,
          ' 答不答应，乌拉拉都希望 ',
          callname,
          ' 能多分出些时间来才好。',
        ]);
        await urara.print_and_wait([
          '就算乌拉拉没办法很好的责怪 ',
          callname,
          '，只有这点还是能稍微装作生气的！',
        ]);
        await urara.print_and_wait([
          '只是 ',
          callname,
          ' 喜欢大家的理由，应该还是大家跑得更快吧？以后的训练也要更加努力才行……',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait([
          '因恋心而斗志高昂，',
          urara.get_teen_sex_title(),
          '在心中拟定起未来的计划，并带着思索进入了梦乡。',
        ]);
        await in_urara.say_as_unknown_and_wait(
          '今夜的乌拉拉，终于因拿出勇气而跨过了多虑而失眠的烦恼。',
        );
        await in_urara.say_as_unknown_and_wait([
          '不管小',
          urara.get_uma_sex_title(),
          '准备何时开始行动，即使稍显稚嫩，那也一定会是份合格的心意。',
        ]);
      }
      add_event(event_hooks.week_start, event_object.set_arg(89));
    } else {
      await urara.say_and_wait([
        '没错，现在还太早了，',
        callname,
        ' 肯定也不会答应。',
      ]);
      await urara.print_and_wait([
        '只是乌拉拉也没想到，有一天竟然会害怕被 ',
        callname,
        ' 拒绝。',
      ]);
      await urara.print_and_wait(
        '不是没有考虑过会被拒绝，而是害怕被拒绝后会怎样。',
      );
      await urara.print_and_wait([
        '在这样重要的事情上如果被拒绝了，乌拉拉还能和 ',
        callname,
        ' 维持现在的关系吗？',
      ]);
      await urara.print_and_wait([
        '那时候要怎办呢？干脆去求 ',
        callname,
        '，就算把乌拉拉变成宠物也不要丢掉乌拉拉？',
      ]);
      await urara.print_and_wait(
        '一想到如果真的被那样对待，身体的躁动又止不住了，乌拉拉真的变成糟糕的坏孩子了。',
      );
      await urara.say_and_wait([
        '还是先让身体冷静下来，明天还要早起……哈啊……',
        callname,
        '……',
      ]);
      await urara.print_and_wait([
        '过度的焦虑与藏起的自卑心被一同激发出来，',
        urara.get_teen_sex_title(),
        '粗暴的将手伸向了焦躁的身体。',
      ]);
      era.drawLine();
      await in_urara.say_as_unknown_and_wait([
        '至少对小',
        urara.get_uma_sex_title(),
        '来说，与 ',
        callname,
        ' 更进一步，以今夜的心理确实不够合适。',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '唉，先不提 ',
        callname,
        ' 是否会那样对待乌拉拉，明明只要拿出勇气来就好了啊……',
      ]);
      begin_and_init_ero(52);
      await masturbate(52);
      end_ero_and_train();
      era.set('status:52:熬夜', 1);
      era.set('cflag:52:爱慕暂拒', 89);
      life_marks.active_89 = 1;
    }
  } else {
    await print_event_name('不再迷茫的你', urara);
    await urara.say_and_wait([callname, '，这里已经什么都没有了啊。']);
    await era.printAndWait([
      '后来再次路过那次的婚礼现场时，顺着 ',
      urara.get_colored_name(),
      ' 的提醒，',
      me.get_colored_name(),
      ' 又一次透过栅栏向公园内望去。',
    ]);
    await era.printAndWait([
      '这一次，草坪上连有人来过的痕迹都消失的一干二净，只有 ',
      urara.get_colored_name(),
      ' 的轻声叹息还在 ',
      me.get_colored_name(),
      ' 的耳边回荡着。',
    ]);
    await era.printAndWait([
      '即使因为担当的过于娇小而没能观察到',
      urara.sex,
      '的眼睛，但从头顶一对失落的耳朵中依旧能看出',
      urara.sex,
      '的心绪。',
    ]);

    era.printButton(`「${sys_get_callname(0, 52)}，一起去里面看看吧。」`, 1);
    await era.input();

    await urara.say_and_wait('诶？嗯……');
    await era.printAndWait([
      '在一惊之后是有些心不在焉的回答，',
      urara.get_colored_name(),
      ' 顺从地跟上了 ',
      me.get_colored_name(),
      ' 的步伐，一同绕过矮矮的栅栏。',
    ]);
    await era.printAndWait([
      '但尽管与 ',
      me.get_colored_name(),
      ' 一同站在目送那对新人的草地上，小',
      urara.get_uma_sex_title(),
      '的尾巴却依旧兴趣缺缺的摇摆着。',
    ]);
    await era.printAndWait([
      '或许是还沉浸在着上次被拒绝时的伤心回忆中，',
      urara.get_colored_name(),
      ' 仿佛失去了一直以来的活力。',
    ]);
    await era.printAndWait([
      '理所当然的，毕竟不管再怎么美好，这里都是一位',
      urara.get_teen_sex_title(),
      '抱有希望但被却爱人亲自拒绝的伤心地。',
    ]);
    await era.printAndWait([
      '这时的 ',
      urara.get_colored_name(),
      ' 或许还对那个等待的承诺抱有不安的怀疑吧，那时的 ',
      me.get_colored_name(),
      ' 还真是个差劲的大人。',
    ]);
    await era.printAndWait(
      '至少现在，是愚钝的大人该做出补偿，将担当内心的空洞重新填补的时候了。',
    );
    await era.printAndWait('明明还有很多话想说，但现在能说的，果然也只有——');

    era.printButton(`主动牵起 ${sys_get_callname(0, 52)} 的手。`, 1);
    await era.input();

    await urara.say_and_wait('……啊！');
    await era.printAndWait([
      '或许是两人习以为常的默契，又或是小',
      urara.get_uma_sex_title(),
      '期待已久的感应， ',
      urara.get_colored_name(),
      ' 瞪大眼睛，樱瞳从惊讶到惊喜。',
    ]);
    await era.printAndWait([
      '在接触的瞬间，',
      urara.get_colored_name(),
      ' 便有所察觉了，这不只是恋人间的活动，也是 ',
      me.get_colored_name(),
      ' 想要兑换约定的时刻。',
    ]);
    era.println();

    if (relation > 150) {
      await urara.say_and_wait(
        '和想象中的不太一样呢，但是终于等到了，所以我也很满足哦？',
      );
      await era.printAndWait([
        '即刻间与 ',
        me.get_colored_name(),
        ' 的距离缩短为零，',
        urara.get_colored_name(),
        ' 天真中透着爱意的脸庞仿佛从未有过的接近。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 再取回了往日相伴时的幸福神情，此刻更仿佛是将要在相同的绿地戴上戒指的新娘一般。',
      ]);
      await era.printAndWait([
        '哪怕小小的',
        urara.sex,
        '既没有真正的纱裙，也没有众人的祝福，但如今的',
        urara.sex,
        '依旧能够成为恋人眼中的主角。',
      ]);
      await urara.say_and_wait([
        '如果 ',
        callname,
        ' 能更早一些就好了，所以为了补偿乌拉拉，接下来要一直在一起呦？',
      ]);
      await era.printAndWait([
        '面对 ',
        urara.get_colored_name(),
        ' 真挚的笑容， ',
        me.get_colored_name(),
        ' 当然也给予了最明确的答案——',
      ]);
    } else {
      await urara.say_and_wait([
        '特意回到这里，',
        callname,
        ' 是不是太笨拙了，虽然这样的话不应由乌拉拉来说呢……',
      ]);
      await era.printAndWait([
        '极力隐藏着开心的情绪，',
        urara.get_colored_name(),
        ' 努力压下了自己亮起的眼眸，但却依旧无法下压跃动的耳朵和尾巴。',
      ]);
      await era.printAndWait([
        '站在清爽的绿地上，约定得以完成的 ',
        urara.get_colored_name(),
        ' 终于驱散了笑容中的阴霾。',
      ]);
      await era.printAndWait([
        '就算二人之间的爱意与相处的平衡依旧十分微妙，但此刻 ',
        urara.get_colored_name(),
        ' 的伴侣志愿依旧从未改变。',
      ]);
      await urara.say_and_wait([
        '总之这次真的想好了吧！不许再反悔了哦 ',
        callname,
        '？',
      ]);
      await era.printAndWait([
        '而面对 ',
        urara.get_colored_name(),
        ' 半开玩笑的笑容，',
        me.get_colored_name(),
        ' 也回以了明确的答案——',
      ]);
    }
    if (
      era
        .getAddedCharacters()
        .filter((e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75).length >
      0
    ) {
      era.println();
      await urara.say_and_wait([
        '这样的话，或许乌拉拉在那之后还会看到 ',
        callname,
        ' 对更多人讲出约定也说不定哦……',
      ]);
      await urara.say_and_wait([
        '没关系的，乌拉拉可以原谅 ',
        callname,
        ' 哦？因为乌拉拉也是 ',
        callname,
        ' 的妻子嘛！',
      ]);
      await era.printAndWait([
        '只是突然间的，牵着 ',
        me.get_colored_name(),
        ' 的手突然用上了',
        urara.get_uma_sex_title(),
        '的力量，',
        urara.get_colored_name(),
        ' 的笑容中似乎多了份对宣誓权力的暗示。',
      ]);
      await urara.say_and_wait(
        '所以不管是怎样的先来后到，我都会好好叮嘱在训练时不听话的孩子哦？',
      );
    }
    era.printButton(`「对不起，让 ${sys_get_callname(0, 52)} 久等了！」`, 1);
    await era.input();

    era.drawLine();
    await in_urara.say_as_unknown_and_wait('现在的您，已经没法回头了哦？');
    await sys_love_uma_in_event(52);
  }
};
