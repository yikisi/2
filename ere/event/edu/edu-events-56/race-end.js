const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const { location_enum } = require('#/data/locations');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,number,FukuEventMarks,RaceEndParams):Promise>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-56/race-end-handlers/race-end-1'),
  require('#/event/edu/edu-events-56/race-end-handlers/race-end-2'),
  require('#/event/edu/edu-events-56/race-end-handlers/race-end-3'),
].forEach((f) => f(race_end_handlers));

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {RaceEndParams} extra_flag
 */
module.exports = async (kitaru, me, callname, extra_flag) => {
  const edu_marks = new FukuEventMarks(),
    edu_weeks = era.get('cflag:56:育成回合计时');
  if (
    !race_end_handlers[extra_flag.race] ||
    (await race_end_handlers[extra_flag.race](
      kitaru,
      me,
      callname,
      edu_weeks,
      edu_marks,
      extra_flag,
    ))
  ) {
    if (edu_marks.tattoo === 2 && extra_flag.rank === 1) {
      edu_marks.tattoo++;
      await print_event_name('预热完毕', kitaru);
      era.set('flag:当前位置', location_enum.restroom);
      await era.printAndWait([
        '漂亮的夺下了第一的 ',
        kitaru.get_colored_name(),
        ' 在离开观众视线的那一刻，如释重负般的跌入了 ',
        me.get_colored_name(),
        ' 的怀中。',
      ]);
      await kitaru.say_and_wait('结……结束了……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 在闻到 ',
        me.get_colored_name(),
        ' 的气味之后，紧绷的身体才放松下来。',
      ]);
      await kitaru.say_and_wait([callname, '……', callname, '……']);
      await me.say_and_wait('好烫！');
      await era.printAndWait([
        '运动后的温度，发情时的温度，嗅到自己命定之人后的兴奋温度，通过这紧紧的拥抱分享给了 ',
        me.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '白丝的狐狸小姐在 ',
        me.get_colored_name(),
        ' 的胸膛上撒娇般的蹭动着',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'A：「那个他们两个人在干什么？」',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'B：「胜者的庆祝仪式吧？」',
      ]);
      await era.printAndWait([
        '较暗的地下通道内，',
        me.get_colored_name(),
        '  看到些许粉色微光从 ',
        kitaru.get_colored_name(),
        ' 小腹的衣物中透出。',
      ]);
      await era.printAndWait([
        '一刻都不敢多待，',
        me.get_colored_name(),
        '  抱着 ',
        kitaru.get_colored_name(),
        ' 去到了选手休息室。',
      ]);
      await kitaru.say_and_wait(['……忍不住了！']);
      await era.printAndWait(['被情欲冲昏的脑袋已经完全失去组织语言的能力。']);
      await era.printAndWait([
        '在腹中的精液，口腔残留的对 ',
        me.get_colored_name(),
        ' 精液味道还未完全消散的比赛半途时，湿润感，酥酥的麻痒感，以及隐隐约约的钝痛感就不断折磨着 ',
        kitaru.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(['砰！']);
      await era.printAndWait([
        me.get_colored_name(),
        '  反手关上门，将 ',
        kitaru.get_colored_name(),
        ' 壁咚在门上。',
      ]);
      await era.printAndWait([
        '汗湿的衣服有些难脱，不断升腾起来的湿热白气带着 ',
        kitaru.get_colored_name(),
        ' 的好闻味道一个劲的往  ',
        me.get_colored_name(),
        '  鼻子里钻。',
      ]);
      await kitaru.say_and_wait('唔……');
      await era.printAndWait([
        '橙色的马尾悄悄地盘上了  ',
        me.get_colored_name(),
        '  的腰。',
      ]);
      await kitaru.say_and_wait('快来吧……命定之人……');
      await quick_into_sex(56);
    } else if (extra_flag.rank === 1) {
      await print_event_name('比赛获胜', kitaru);
      await kitaru.say_and_wait('Happy come come！福气来了哦！');
      await kitaru.say_and_wait([
        '哎呀呀！多亏了 ',
        callname,
        '！多亏了白兴大人！多亏了被神明眷顾着的我啊！',
      ]);
      era.printButton('「没错！」', 1);
      era.printButton('「不要得意忘形！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (era.get('love:56') < 75) {
          await kitaru.say_and_wait('呜呼！那要怎么庆祝呢？');
          await kitaru.say_and_wait('去吃苹果派怎么样？');
          await era.printAndWait([
            '于是晚上和 ',
            kitaru.get_colored_name(),
            ' 一起吃了撒上了肉桂和糖粉的苹果派。',
          ]);
        } else {
          await kitaru.say_and_wait(['那个，', callname, ' 能凑近一点吗？']);
          await kitaru.say_and_wait('嘿！');
          await era.printAndWait([
            '橙色的团子自觉的跳到了 ',
            me.get_colored_name(),
            ' 的怀里，而后',
            kitaru.sex,
            '肆无忌惮的在 ',
            me.get_colored_name(),
            ' 的衣服上留下',
            kitaru.sex,
            '的气味。',
          ]);
          await kitaru.say_and_wait('欸嘿嘿，命定之人的气味！');
        }
      } else {
        await kitaru.say_and_wait('唔！说的也是呢！');
        await kitaru.say_and_wait(['那么，', callname, ' 请收下这个吧！']);
        await era.printAndWait('从自己背着的招财猫背包里掏出了一个护身符。');
        await kitaru.say_and_wait('这可是！凝结着胜者好运的护身符呢！');
        await kitaru.say_and_wait(['之后 ', callname, ' 还会收到许多的！']);
      }
    } else if (extra_flag.rank <= 5) {
      await print_event_name('入着', kitaru);
      await kitaru.say_and_wait('呜……本来以为会赢的。');
      await kitaru.say_and_wait('下次！下次一定会没有问题的！');
      await era.printAndWait([
        '比赛失利的 ',
        kitaru.get_colored_name(),
        ' 失落了一小下后就立刻恢复了',
        kitaru.sex,
        '的乐天状态。',
      ]);
    } else if (extra_flag.rank <= 10) {
      await print_event_name('落败', kitaru);
      await kitaru.say_and_wait('输……输了？');
      await era.printAndWait([
        '都没撑到走回休息室，',
        kitaru.get_colored_name(),
        ' 就已经在 ',
        me.get_colored_name(),
        ' 的怀里大声的哭了起来。',
      ]);
      await era.printAndWait([
        '贴着 ',
        me.get_colored_name(),
        ' 胸口的双耳，缠着 ',
        me.get_colored_name(),
        ' 左腿的尾巴，',
        kitaru.sex,
        '像是要把整个人融到 ',
        me.get_colored_name(),
        ' 的怀里一样死死地搂抱着 ',
        me.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        '不知为何，明明如此狼狈的场景连胜者都投来了羡慕的目光。',
      );
    }
  }
};
