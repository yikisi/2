const era = require('#/era-electron');

const { common_out_check } = require('#/event/edu/edu-events-52/snippets');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},{loc:number},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.park = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (
      era.get('flag:当前互动角色') !== 52 ||
      extra_flag.loc !== location_enum.shopping
    ) {
      await era.printAndWait([
        urara.get_colored_name(),
        ' 最近想和 ',
        me.get_colored_name(),
        ' 一起去商店街……',
      ]);
      add_event(event_hooks.back_school, event_object);
      return true;
    }
    new EventMarks(52).sub(event_hooks.out_shopping);
    await print_event_name('天台上的「游乐园」', urara);
    await urara.say_and_wait([
      callname,
      '，能陪乌拉拉去一个地方吗？没关系的，一会儿就好！',
    ]);
    await era.printAndWait([
      '在从商店街特训之后的回程路上，身旁的 ',
      urara.get_colored_name(),
      ' 看着不远处的建筑拉住了 ',
      me.get_colored_name(),
      ' 的袖口。',
    ]);
    await era.printAndWait([
      '而后，',
      me.get_colored_name(),
      ' 便跟随 ',
      urara.get_colored_name(),
      ' 来到了附近那栋新开的综合商场前，乘上外侧的观景电梯，一路上到楼顶。',
    ]);
    await era.printAndWait(
      '铁门随着清脆的电铃音缓缓打开，在罩着玻璃顶棚的天台上，一座小小的游乐园逐渐出现在两人眼前。',
    );
    await era.printAndWait(
      '或许是还在通勤日的缘故，这座小游乐园现在空无一人，只有电子售票机和设施中的彩灯寂寞的闪烁着。',
    );
    await era.printAndWait([
      '不过，',
      urara.get_colored_name(),
      ' 这是突然想来游乐园玩了吗……显然不可能吧。',
    ]);

    era.printButton('「是想起什么了？」', 1);
    await era.input();

    await era.printAndWait([
      '一起走进游园场地，',
      urara.get_colored_name(),
      ' 凝视着场地中央那架迷你款的旋转茶杯，小声地开口了。',
    ]);
    await urara.say_and_wait(
      '在周末的时候，商店街的孩子们都会来这里玩，因为离得很近，票价也比大游乐园便宜。',
    );
    await urara.say_and_wait(
      '而且，虽然想要复兴商店街的叔叔阿姨们可能不喜欢，但这里不论做什么都很方便呢。',
    );
    await urara.say_and_wait([
      '所以乌拉拉在想，商店街的大家需要的大概不是大家说的复兴，是一个改变的契机……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 与可爱的茶杯们安静地聆听着',
      urara.get_teen_sex_title(),
      '的思考，交替闪耀的彩灯又将',
      urara.get_teen_sex_title(),
      '的樱瞳染上了更多的色彩。',
    ]);
    await urara.say_and_wait(
      '环境是可以改变的，可能会有很多问题，但如果努力去做的话，也一定没问题。',
    );
    await era.printAndWait([
      '说的没错，或许这一切都并不冲突的，只要人还在，只要 ',
      urara.get_colored_name(),
      ' 还是 ',
      urara.get_colored_name(),
      '，一切就都会是原来的样子。',
    ]);
    await era.printAndWait([
      '也真是出乎意料，虽然看似稚嫩，但 ',
      urara.get_colored_name(),
      ' 的思考也越来越多了，甚至比',
      urara.sex,
      '的很多同学都要深入……',
    ]);

    urara.say(['对了 ', callname, '，来都来了，要和乌拉拉一起来吗？']);
    era.printButton('「只要乌拉拉不觉得累就没问题哦？」（速度+10）', 1);
    era.printButton('「我就不一起了，乌拉拉自己去吧。」（力量+10）', 2);
    if ((await era.input()) === 1) {
      await urara.say_and_wait([
        '嗯！所以今天就稍微晚回去一会儿也没关系的，对吧，',
        callname,
        '？',
      ]);
      await era.printAndWait([
        '听到 ',
        me.get_colored_name(),
        ' 的回答，小',
        urara.get_uma_sex_title(),
        '对 ',
        me.get_colored_name(),
        ' 露出了会心的笑容，随后与 ',
        me.get_colored_name(),
        ' 一同踏入了这座小而精巧的游乐设施中。',
      ]);
      await era.printAndWait([
        '茶杯随着音乐开始温柔的旋转，夕阳透过玻璃顶棚，照在小',
        urara.get_uma_sex_title(),
        '遥望着远方的脸上。',
      ]);
      await era.printAndWait([
        '现在这位小思想家又在想着什么事情？又或许，',
        urara.sex,
        '是和脸上的微笑一样有点小开心吧？',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(52, [10, 0, 0, 0, 0], 0);
    } else {
      await urara.say_and_wait([
        '为什么呢？因为 ',
        callname,
        ' 已经是大人了吗？',
      ]);
      await era.printAndWait([
        '听见 ',
        me.get_colored_name(),
        ' 无奈的回答，',
        urara.get_teen_sex_title(),
        '虽然有些失落，但还是笑着与身边的大人开起了玩笑。',
      ]);

      era.printButton('「因为已经是大人了啊。」', 1);
      await era.input();

      await urara.say_and_wait([
        '那么，一起回去吧，',
        callname,
        '？乌拉拉也要早点成为大人呢！',
      ]);
      await era.printAndWait([
        '这样真的好吗？看着 ',
        urara.get_colored_name(),
        ' 带着笑容的双眼，',
        me.get_colored_name(),
        ' 最终没能将这个问题带出口。',
      ]);
      await era.printAndWait([
        '背着夕阳乘上电梯，',
        me.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 再次踏上了归途。',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(52, [0, 0, 10, 0, 0], 0);
    }
  };

  handlers.forget = async (
    urara,
    me,
    callname,
    flags,
    extra_flag,
    event_object,
  ) => {
    if (await common_out_check(urara, me, extra_flag.loc, event_object)) {
      return true;
    }
    await print_event_name('忘记吃了？', urara);
    await era.printAndWait([
      '在结束一天的外出特训后，在 ',
      me.get_colored_name(),
      ' 将 ',
      urara.get_colored_name(),
      ' 送到校园门口时──',
    ]);
    await urara.say_and_wait([
      '啊！',
      callname,
      '！我好像忘记很重要的事情了！',
    ]);

    era.printButton(
      '「怎么了？！突然这么大声？有什么重要的东西落在训练的地方了？」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '不是的！是我回来的时候忘记买了！新口味的鲷鱼烧和蜂蜜特饮！',
    );
    await urara.say_and_wait([
      '虽然 ',
      callname,
      ' 好像也忘记提醒了，但现在应该还没关门，只吃一样的话……',
    ]);

    era.printButton('「诶？啊——嗯，哦……」', 1);
    await era.input();

    await era.printAndWait([
      '本来应该已经习惯了，但在听见 ',
      urara.get_colored_name(),
      ' 大惊小怪的困难后，',
      me.get_colored_name(),
      ' 还是难免发出了泄气的回应。',
    ]);
    await urara.say_and_wait([
      callname,
      '！这个反应是怎么回事嘛！乌拉拉也是会生气的哦！',
    ]);

    urara.say([
      '不过，现在应该还来得及！',
      callname,
      '，',
      me.get_colored_name(),
      ' 的建议是……',
    ]);
    era.printButton('「蜂蜜特饮近一些，现在跑过去还来得及！」（根性+10）', 1);
    era.printButton('「鲷鱼烧虽然远一些，但肯定不会收摊！」（耐力+10）', 2);
    const attr_change = new Array(5).fill(0),
      ret = await era.input();
    if (ret === 1) {
      attr_change[attr_enum.toughness] = 10;
    } else {
      attr_change[attr_enum.endurance] = 10;
    }

    await urara.say_and_wait([
      '好！既然 ',
      callname,
      ' 这样说了，那乌拉拉也去去就回了！稍等一下哦——！',
    ]);
    await era.printAndWait([
      '将 ',
      me.get_colored_name(),
      ' 留在学校门口，小',
      urara.get_uma_sex_title(),
      '以前所未见的速度冲向了商店街的方向。',
    ]);

    era.printButton('「慢点！路上注意安全啊！」', 1);
    await era.input();

    await era.printAndWait([
      '远望着那个比自己的呐喊声更早到达视野尽头的小身影，',
      me.get_colored_name(),
      ' 无奈地摇了摇头。',
    ]);
    await era.printAndWait([
      '如果 ',
      urara.get_colored_name(),
      ' 能把对零食的专注力，分出一些放在平时的训练和模拟赛上就好了。',
    ]);
    await era.printAndWait([
      '但一段时间后，',
      me.get_colored_name(),
      ' 看着手中由 ',
      urara.get_colored_name(),
      ' 笑着推来的',
      ret === 1 ? '蜂蜜特饮' : '鲷鱼烧',
      '，还是欣慰地选择了仔细品尝一番……',
    ]);
    await era.printAndWait([
      '……只是对 ',
      me.get_colored_name(),
      ' 的舌头来说，就算不止尝过一次，这些东西依旧甜过头了。',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(52, attr_change, 0);
  };
};
