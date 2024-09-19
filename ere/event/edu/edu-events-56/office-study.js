const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  if (era.get('flag:当前互动角色') !== 56) {
    add_event(event_hooks.office_study, event_object);
    return;
  }
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    love = era.get('love:56');
  let wait_flag = false;
  if (event_object?.arg === 'god_study') {
    await print_event_name('神学研讨', kitaru);
    await era.printAndWait([
      '今天的计划是和 ',
      kitaru.get_colored_name(),
      ' 在办公室里学习，空荡荡的椅子……看来',
      kitaru.sex,
      '今天是迟到了。',
    ]);
    await kitaru.say_and_wait([callname, '！', callname, '！']);
    await kitaru.say_and_wait([callname, '！！！']);
    await kitaru.say_and_wait('上次问题的答案我找到了哦！');
    await era.printAndWait([
      '正当 ',
      me.get_colored_name(),
      ' 打算打电话的时候，吵吵嚷嚷的 ',
      kitaru.get_colored_name(),
      ' 捧着一本不知道从哪里找来的书籍冲进了房间。',
    ]);
    await kitaru.say_and_wait('就是，有关神社供奉的主神是谁哦！');
    await era.printAndWait([
      me.get_colored_name(),
      ' 记得的确问过福来这个问题。',
    ]);
    await kitaru.say_and_wait('你看这里！说是三女神会有多个化身哦！');
    await kitaru.say_and_wait('白兴大人也在呢！');
    await era.printAndWait([
      kitaru.sex,
      '冲 ',
      me.get_colored_name(),
      ' 举起了那本泛黄的宽大书籍，里面用颇为煞有介事的手法详细描绘了几位女神的多种化身以及可能的猜想。',
    ]);
    await kitaru.say_and_wait('然后，我回去翻了一下前几任神主的手记！');
    await kitaru.say_and_wait(
      '我们神社供奉的，应该是那位化身数量过多的女神，因此才没有一个具体的形象吧！',
    );
    await kitaru.say_and_wait('你看！这里还提出了什么眷族之类的概念。');
    await kitaru.say_and_wait('夏塔克鸟之类的！');
    era.printButton('「眷族？」', 1);
    await era.input();
    await kitaru.say_and_wait('嗯！');
    await kitaru.say_and_wait('也就是受到神明眷顾之类的意思啦！');
    await kitaru.say_and_wait([
      '赛',
      kitaru.get_colored_name(),
      '也在其中呢！',
    ]);
    await era.printAndWait([
      '头突然有点疼，眼前的橙色',
      kitaru.get_colored_name(),
      '隐约变得不真切了起来……',
    ]);
    await kitaru.say_and_wait('哦！对了！');
    await era.printAndWait([
      '想是想到了什么，',
      kitaru.sex,
      '握住了 ',
      me.get_colored_name(),
      ' 的手，笑意盈盈的看着 ',
      me.get_colored_name(),
      '。',
    ]);
    await kitaru.say_and_wait('如果我将来也成为神明了！');
    await kitaru.say_and_wait(['我肯定不会忘记给 ', callname, ' 神眷的哦！']);
    await era.printAndWait([
      '如言出法随般，',
      me.get_colored_name(),
      ' 的意识再度恢复了清明，缓过来的 ',
      me.get_colored_name(),
      ' 立即催促 ',
      kitaru.get_colored_name(),
      ' 开始今天的学习计划。',
    ]);
    wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 10);
  } else if (event_object?.arg === 'luck_name') {
    await print_event_name('带来好运的名字', kitaru);
    await era.printAndWait([
      '由于最近的文化课成绩走势不佳，',
      kitaru.get_colored_name(),
      ' 在 ',
      me.get_colored_name(),
      ' 的安排下留在训练室内自习。',
    ]);
    await era.printAndWait('哗啦……');
    await era.printAndWait([
      '作为今日监督的 ',
      me.get_colored_name(),
      ' 正打算看看福来学的怎么样了，结果还没进门就听见骰子在桌面上滚动的声音。',
    ]);
    await era.printAndWait([
      '背对着门的',
      kitaru.get_teen_sex_title(),
      '，看起来正聚精会神的思考着什么。',
    ]);
    await kitaru.say_and_wait('七福神……');
    await kitaru.say_and_wait('水晶……');
    await kitaru.say_and_wait('灵动……');
    await kitaru.say_and_wait('唔……话说是不是该把『福来』留下来比较好呢？');
    await era.printAndWait(
      '时不时的在草稿纸上涂画着，应该是某件颇为重要的事情吧。',
    );
    era.printButton('「学的怎么样了？」', 1);
    era.printButton('「在想什么？」', 2);
    await era.input();
    await kitaru.say_and_wait('哎呀呀！来的正好！');
    await kitaru.say_and_wait([callname, '！']);
    await era.printAndWait([
      '完全没有因为走神被抓到的不好意思，',
      kitaru.get_colored_name(),
      ' 双眼放光地盯着走进来的 ',
      me.get_colored_name(),
      '。',
    ]);
    await kitaru.say_and_wait(
      '那个，我其实是在想，最近成绩不佳是不是运气问题呢？',
    );
    await kitaru.say_and_wait('要是改个名会不会好一点？');
    await kitaru.say_and_wait('你看！');
    await era.printAndWait([
      kitaru.sex,
      '向 ',
      me.get_colored_name(),
      ' 举起了本该是用于记录演算步骤的草稿纸，上面几乎是密密麻麻的写满了 ',
      kitaru.get_colored_name(),
      ' 的想到的名字。',
    ]);
    await kitaru.say_and_wait('呜……不过写了这么多，感觉像是在做无用功！');
    await kitaru.say_and_wait([
      '还是 ',
      kitaru.get_colored_name(),
      ' 比较好！',
    ]);
    await era.printAndWait('这样说着，面前的橙色团子肉眼可见的瘪了下去。');
    era.printButton('安慰（技能点数+10）', 1);
    era.printButton('离开（全属性+3，但……）', 2);
    if ((await era.input()) === 1) {
      await me.say_and_wait('也不算是无用功了！');
      await kitaru.say_and_wait('欸！为什么？');
      await me.say_and_wait('嗯……');
      await era.printAndWait([
        '在 ',
        kitaru.get_colored_name(),
        ' 诘问般的目光中，',
        me.get_colored_name(),
        ' 下意识说出了一个或许能派的上用处的场景。',
      ]);
      await me.say_and_wait('比如像是作为未来孩子的名字？');
      await kitaru.say_and_wait('欸……给孩子的名字？');
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait(['说的是和 ', callname, ' 的孩子吗？']);
      if (love >= 75) {
        await kitaru.say_and_wait([
          '啊！',
          callname,
          ' 这么快就想着孩子的事情了？',
        ]);
        await kitaru.say_and_wait('哎呀！！！');
        await era.printAndWait([
          '在敲了几下 ',
          kitaru.get_colored_name(),
          ' 的脑袋之后，胡思乱想的',
          kitaru.sex,
          '总算是能继续学习了。',
        ]);
      } else {
        await kitaru.say_and_wait('啊！！！');
        await era.printAndWait([
          '才反应过来自己刚刚说了什么的 ',
          kitaru.get_colored_name(),
          ' 后知后觉的发出了惊呼。',
        ]);
        await era.printAndWait([
          '之后被满脸通红的 ',
          kitaru.get_colored_name(),
          ' 推出了房间。',
        ]);
      }
      wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 10);
    } else {
      await era.printAndWait(['让 ', kitaru.get_colored_name(), ' 继续学习。']);
      await era.printAndWait([
        '不知道为什么，',
        kitaru.get_colored_name(),
        ' 的心情下降了',
      ]);
      wait_flag = get_attr_and_print_in_event(56, new Array(5).fill(3), 0);
      wait_flag = sys_change_motivation(56, -1) || wait_flag;
    }
  }
  wait_flag && (await era.waitAnyKey());
};
