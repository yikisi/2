const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const tachyon_default_talk = require('#/event/daily/daily-events-32/talk-default');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = async () => {
  if (!sys_check_awake(32)) {
    throw new Error();
  }
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    life_marks = new TachyonLifeMarks(),
    love = era.get('love:32'),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32),
    relation = era.get('relation:32:0');
  if (edu_marks.tenn_spr) {
    await era.printAndWait([
      me.get_colored_name(),
      ' 想与 ',
      tachyon.get_colored_name(),
      ' 聊 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 时的事，但',
      tachyon.sex,
      '马上就跑不见了',
    ]);
    return;
  } else if (relation < 75) {
    if (life_marks.talk >= 10) {
      await tachyon.say_and_wait([
        '……',
        callname,
        '，你今天的实验报告写完了吗？',
      ]);
      await tachyon.say_and_wait('有功夫在这里聊天不如先去把该做的事做完吧');
      return;
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '来，这次的药………『味道很怪』？你似乎忘了，你只是一只实验动物而已，哪有实验动物嫌弃药物味道的道理？',
          ),
        async () => {
          await tachyon.say_and_wait([
            '极限……',
            tachyon.get_uma_sex_title(),
            '……腿……不，果然还是不行……',
            callname,
            '？你在这里站多久了？',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 似乎在思考着什么。',
          ]);
        },
        () =>
          tachyon.say_and_wait([
            get_chara_talk(25).get_colored_name(),
            '？嗯，',
            tachyon.sex,
            '是个很有趣的观察对象，而且万一……不，没什么，忘了我说的话吧。',
          ]),
        async () => {
          await tachyon.say_and_wait('衣服……？啊，好像三天没洗澡了吧……');
          await tachyon.say_and_wait(
            '这跟你有什么关系，有那个时间浪费不如多花点时间在实验上……',
          );
          await tachyon.say_and_wait(
            '够了，你只是豚鼠而已，我做什么与你没有关系。',
          );
        },
        async () => {
          await era.printAndWait([
            me.get_colored_name(),
            ' 看见 ',
            tachyon.get_colored_name(),
            ' 正在用搅拌机打今天的午餐。',
          ]);
          await tachyon.say_and_wait([
            '食物？没有必要，无论是人或者',
            tachyon.get_uma_sex_title(),
            '，只需要补充最基础的营养值就够了，多余的追求味道不过是白费工夫。',
          ]);
        },
        () =>
          tachyon.say_and_wait(
            '你不过是区区豚鼠而已，努力在协助我实验的同时讨我欢心吧，这样或许我还能在你没有价值的时候大发慈悲。',
          ),
        () => era.printAndWait('有什么话快说，别浪费我实验的时间。'),
        async () => {
          await tachyon.say_and_wait('呼……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 叹了口气，心情似乎很不好的样子，最好还是别上去打扰',
            tachyon.sex,
            '吧……',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('哼哼哼～～哼哼～～');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 心情好像很好的样子，但看见',
            tachyon.sex,
            '手上拿着的散发出危险墨绿色光芒的药剂，',
            me.get_colored_name(),
            ' 决定还是不去打扰',
            tachyon.sex,
            '的好心情了。',
          ]);
        },
      );
    }
  } else if (relation < 150) {
    if (life_marks.talk >= 10) {
      await tachyon.say_and_wait([
        callname,
        '，',
        life_marks.cook < 5
          ? '要是没什么事做的话不如去钻研你的料理技术如何，早日做出人能下口的菜来吧'
          : '真的没事的话去把实验器具都清洗一遍吧，或者去洗我的实验服，再不然去丢垃圾，不是有很多你能做的事吗？别在这里发呆了',
      ]);
      return;
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait([
            callname,
            '，今天的药……想逃？哼哼，你怎么会觉得自己有办法从',
            tachyon.get_uma_sex_title(),
            '的手中逃脱呢？',
          ]),
        async () => {
          await tachyon.say_and_wait([
            tachyon.get_uma_sex_title(),
            '的极限……冲刺……进化……生存……人类补完计划……腐败的社会……救赎……重生……跳脱封闭的现况……',
          ]);
          await tachyon.say_and_wait('啊，我明白了，一切的真相都在埃及啊。');
          await era.printAndWait([
            '……',
            tachyon.get_colored_name(),
            ' 忽然在说什么奇怪的东西，还是不要去打扰',
            tachyon.sex,
            '吧。',
          ]);
        },
        async () => {
          await tachyon.say_and_wait(
            '啊……来得正好，帮我洗下我的白大褂吧，前几天实验弄脏了…………',
          );
          await tachyon.say_and_wait(
            '为什么不马上给？那不是忘记了吗？再说没第一时间发现应该是你身为豚鼠的失责吧？',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            '食物？……我的观点还是没有改变，食物不过是为了补充营养而存在的，没有在此之上或在此之下的价值……',
          );
          await tachyon.say_and_wait(
            '不过，也是吧，最近我确实开始期待起这段时间了……',
          );
          await tachyon.say_and_wait(
            '不，别想太多了，只是为了好好让你知道天高地厚而已，那次羞辱我的罪可没这么容易赎清，要是你愿意每天给我试药的话倒也不是不能考虑……',
          );
          await me.say_and_wait('那不就和现在一样吗？');
          await tachyon.say_and_wait(
            '这么说好像也是……等等，每天……不，没什么，忘了我说的，现在，立刻，马上。',
          );
        },
        () =>
          tachyon.say_and_wait(
            '最近做的饭……还行吧，不过可以考虑加点甜……不，没什么',
          ),
        async () => {
          await tachyon.say_and_wait([
            '啊，',
            sys_get_colored_callname(32, 9),
            '……『上次的饼干和饮料非常感谢』？',
          ]);
          await tachyon.say_and_wait(
            '没什么，你喜欢的话我这里还有，再来找我拿吧…………',
          );
          await tachyon.say_and_wait(
            '你那是什么表情，再怎么说我也不会给可爱的后辈塞那种东西的',
          );
        },
        async () => {
          await tachyon.say_and_wait('哼哼～～哼哼哼～～');
          await tachyon.say_and_wait('十只豚鼠出门玩～掉进海湾剩九只～');
          await tachyon.say_and_wait('摔进火山剩八只～宝穴迷路剩七只～');
          await tachyon.say_and_wait('卷入怒涛剩六只～神鹰袭击剩五只～');
          await tachyon.say_and_wait('吃饭撑死剩四只～攀登高峰剩三只～');
          await tachyon.say_and_wait('涡轮爆炸剩两只～咖啡过量剩一只～');
          await tachyon.say_and_wait('孤独豚鼠吱吱吱～喝下药剂爆炸啦～～');
          await era.printAndWait([
            me.get_colored_name(),
            ' 听见 ',
            tachyon.get_colored_name(),
            ' 正在哼着什么怪歌……虽然听不懂歌词内容，但你觉得还是不要靠近这时的',
            tachyon.sex,
            '比较好。',
          ]);
        },
      );
    }
  } else if (relation > 225 && love < 50) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait([
          '哦呀，',
          callname,
          '，怎么忽然来找我聊天？',
        ]);
        await tachyon.say_and_wait('呵呵，只是忽然心血来潮吗？');
        await tachyon.say_and_wait(
          '不然还能有什么其他目的？不，没什么，只是我觉得对事物抱有好奇心是件好事而已',
        );
        await tachyon.say_and_wait([
          '包括对口上的探索也是，你说对吧，屏幕那边的 ',
          callname,
          '？',
        ]);
        await tachyon.say_and_wait('我在说什么？呵呵，谁知道呢');
      },
      async () => {
        await tachyon.say_and_wait(['啊啊，', callname, ' 小心！']);
        await tachyon.say_and_wait('呼，都怪你忽然跟我搭话，差点把药洒出来了');
        await tachyon.say_and_wait('什么药？呵呵，还记得之前搜集的你的DNA吗？');
        await tachyon.say_and_wait(
          '这是能让闻到的人都疯狂迷恋上你的药哦……嗯？忽然开始后悔没洒出来了？……色鬼',
        );
        await tachyon.say_and_wait(
          '开玩笑的，其实是以那人的DNA为基础的针对性毒药……',
        );
        await tachyon.say_and_wait(
          '哪怕只是闻到蒸气都能让你的鼻道产生病变制造癌细胞……',
        );
        await tachyon.say_and_wait(
          '喂喂，不用吓成那样吧，哈哈，反正没洒出来就好',
        );
        await tachyon.say_and_wait('嗯？到底哪个才是真的……这就任君想象了～～');
      },
      async () => {
        await tachyon.say_and_wait([callname, '……今天的衣服……']);
        await tachyon.say_and_wait(
          '然后，那个，我想了想，让你帮我洗衣服姑且不论，内衣裤也洗果然还是有点过份了',
        );
        await tachyon.say_and_wait(
          '……不，都说了不是味道的问题了，再说一点也不臭啊！',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '事到如今，我似乎已经完全习惯你做的便当了啊',
        );
        await tachyon.say_and_wait(
          '呵呵，现在要是哪天吃不到你的便当我反而会感到不自在了',
        );
        await tachyon.say_and_wait('这样的生活……继续维持下去……');
        await tachyon.say_and_wait('呵呵，对研究者而言，维持可不是什么好话啊');
        await tachyon.say_and_wait('只想着维持是无法出现突破的……');
        await tachyon.say_and_wait('没错……但是……');
        await tachyon.say_and_wait(
          '为什么呢，我忽然觉得，现在的生活维持下去也不错……',
        );
        await tachyon.say_and_wait('为什么呢……');
      },
    );
    switch (edu_marks.talk) {
      case 1:
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await me.say_and_wait('嗯？');
          await era.printAndWait([
            me.get_colored_name(),
            ' 听见 ',
            tachyon.get_colored_name(),
            ' 似乎在喊 ',
            me.get_colored_name(),
            ' 的样子，于是回头一看',
          ]);
          era.println();
          await tachyon.say_and_wait('没什么，叫着玩的');
          era.println();
          await era.printAndWait([
            '于是 ',
            me.get_colored_name(),
            ' 转回头去继续做自己的事',
          ]);
          era.println();
          await tachyon.say_and_wait(callname);
          await tachyon.say_and_wait(callname);
          await tachyon.say_and_wait(callname);
          era.println();
          await tachyon.say_and_wait([me.actual_name, ' 君']);
          await era.printAndWait('！？');
          await era.printAndWait([
            me.get_colored_name(),
            ' 忽然回过头来，眼前却是 ',
            tachyon.get_colored_name(),
            ' 一如往常的笑容',
          ]);
          await era.printAndWait('彷佛刚刚什么也没发生过一般');
          edu_marks.talk++;
        });
        break;
      case 2:
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 靠在 ',
            me.get_colored_name(),
            ' 的背后发出了撒娇般的低语',
          ]);
          await era.printAndWait([
            '然而 ',
            me.get_colored_name(),
            ' 却没有任何一点的脸红心动',
          ]);
          await era.printAndWait('上次因此上当转过头来就被灌了一瓶药剂');
          await era.printAndWait('这次无论怎么喊自己都绝对不会回过头来的');
          era.println();
          await tachyon.say_and_wait([callname, '……']);
          await tachyon.say_and_wait([callname, '……❤']);
          await tachyon.say_and_wait([callname, '❤']);
          await tachyon.say_and_wait([callname, '❤']);
          era.println();
          await era.printAndWait([
            '不知为何，',
            tachyon.sex,
            '的口气越来越暧昧黏稠',
          ]);
          await era.printAndWait([
            '不敢回头的 ',
            me.get_colored_name(),
            ' 只能忍着内心的焦灼继续端坐原地',
          ]);
          era.println();
          await tachyon.say_and_wait('…………笨蛋');
          era.println();
          await era.printAndWait([
            '听见',
            tachyon.sex,
            '最后一声轻哼，',
            me.get_colored_name(),
            ' 终于没忍住，还是转过了头来',
          ]);
          await era.printAndWait('然后……');
          era.println();
          await era.printAndWait('咕咚');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 的手上，拿着一个空的试管',
          ]);
          await era.printAndWait([
            '试管里的东西？在刚刚 ',
            me.get_colored_name(),
            ' 回头的那个瞬间便已经全部塞入 ',
            me.get_colored_name(),
            ' 的嘴里了',
          ]);
          era.println();
          await tachyon.say_and_wait('真是……这次居然这么顽强啊');
          era.println();
          await era.printAndWait('药效发作，这次似乎是有麻痹效果的药物');
          await era.printAndWait([
            me.get_colored_name(),
            ' 努力撑着回过头来，眼前是一脸得意的 ',
            tachyon.get_colored_name(),
          ]);
          await era.printAndWait([
            '原本想说出口的抱怨话语，却在看见',
            tachyon.sex,
            '那微红脸庞的瞬间消失的烟消云散',
          ]);
          era.println();
          await era.printAndWait(['果然，还是敌不过', tachyon.sex, '啊']);
          await era.printAndWait([
            '带着这样的感想，',
            me.get_colored_name(),
            ' 陷入了黑暗之中',
          ]);
          edu_marks.talk++;
        });
        break;
      case 3:
        buffer.push(async () => {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 似乎正在做实验的样子',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 盯着',
            tachyon.sex,
            '姣好的侧脸，忽然兴起了恶作剧的念头',
          ]);
          era.printButton('「爱丽速子」', 1);
          await era.input();
          await era.printAndWait([me.get_colored_name(), ' 轻声说道']);
          await era.printAndWait([
            tachyon.sex,
            '的背影忽然抖了一下，却没有回过头，仍然装作没事的做着实验',
          ]);
          era.println();
          await era.printAndWait([
            '看到这一幕更加激起了 ',
            me.get_colored_name(),
            ' 的童心',
          ]);
          era.println();
          await me.say_and_wait(tachyon.name);
          await me.say_and_wait(tachyon.name);
          await me.say_and_wait(tachyon.name);
          await me.say_and_wait(tachyon.name);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 试着换了许多不同声调',
          ]);
          await era.printAndWait([
            '每次喊出口，',
            tachyon.sex,
            '的身体就会抖的比前一次还长',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 从侧面看见了',
            tachyon.sex,
            '的脸庞也变得越来越红',
          ]);
          era.println();
          await era.printAndWait([
            '看见',
            tachyon.sex,
            '脸颊绯红的模样，',
            me.get_colored_name(),
            ' 也不由得害羞了起来',
          ]);
          await era.printAndWait('但这个时候心中的欲望也不允许自己停下了');
          await era.printAndWait([
            me.get_colored_name(),
            ' 不停喊着，声音越发轻柔',
          ]);
          await era.printAndWait([
            '渐渐的，原本恶作剧的心已经消失，现在的 ',
            me.get_colored_name(),
            ' 只是想看见',
            tachyon.sex,
            '更加害羞，更加',
            tachyon.get_teen_sex_title(),
            '的模样',
          ]);
          era.println();
          await era.printAndWait([
            '…………',
            tachyon.get_colored_name(),
            '？',
            tachyon.get_teen_sex_title(),
            '？',
          ]);
          await era.printAndWait('明明应该极不称对的两个词，现在却如此贴合');
          await era.printAndWait('就这样，不断的持续着');
          await era.printAndWait('一方的不断呼喊，和另一方的故作不知');
          era.drawLine();
          await era.printAndWait([
            '忽然，',
            tachyon.sex,
            '的脸色从红润变成了苍白',
          ]);
          await era.printAndWait([
            '一直盯着',
            tachyon.sex,
            '的 ',
            me.get_colored_name(),
            ' 马上注意到了这点，顺着',
            tachyon.sex,
            '的视线看去',
          ]);
          era.println();
          await era.printAndWait([
            '视线尽头是',
            tachyon.sex,
            '手上拿着的，画了三角形危险标志的药物',
          ]);
          await era.printAndWait('如今药瓶已经完全空荡');
          await era.printAndWait('似乎是在加入的时候由于手抖一次全加进去了');
          await era.printAndWait([
            '而',
            tachyon.sex,
            '手上，加入了过多危险药品的那管试管……',
          ]);
          await era.printAndWait(
            '液面正以肉眼可见的速度向上膨发，直至溢出试管外，比这更致命的是冒出的蒸气，',
          );
          await era.printAndWait(
            '以无法想象是那么小一管试管能够喷出的量充溢室内，往室外飘出',
          );
          era.println();
          await era.printAndWait(['此时，', tachyon.sex, '终于回过头来了']);
          await era.printAndWait([
            me.get_colored_name(),
            ' 看见',
            tachyon.sex,
            '脸上再度变得红润，这次 ',
            me.get_colored_name(),
            ' 很确定这并非是害羞',
          ]);
          await era.printAndWait('而是……………');
          era.println();
          await tachyon.say_and_wait([
            callname,
            '！！！！！！！！！！！！！！',
          ]);
          era.drawLine({ offset: 8, width: 8 });
          await era.printAndWait('【来自学园的通知】', { align: 'center' });
          await era.printAndWait(
            ['下午，', tachyon.get_colored_name(), '，药剂，完毕'],
            {
              align: 'center',
            },
          );
          edu_marks.talk++;
        });
    }
  } else if (relation > 375 && love < 50) {
    if (era.get('cflag:32:干劲') < 0) {
      await tachyon.say_and_wait([callname, '，我累了，借我躺下']);
      era.printButton('同意', 1);
      era.printButton('拒绝', 2);
      await era.input();
      await era.printAndWait([
        '还没等 ',
        me.get_colored_name(),
        ' 内心做出选项，',
        tachyon.get_colored_name(),
        ' 便已经躺在 ',
        me.get_colored_name(),
        ' 的膝盖上了',
      ]);
      era.printButton('「喂，速子」', 1);
      await era.input();
      await tachyon.say_and_wait('ZZZ');
      era.println();
      await era.printAndWait('好快！？');
      await era.printAndWait([
        '为了不惊醒',
        tachyon.sex,
        '，',
        me.get_colored_name(),
        ' 只能乖乖维持着原来的姿势不动了',
      ]);
      await era.printAndWait([
        '等',
        tachyon.sex,
        '醒来之后还是得好好说一下才行，添麻烦的事姑且不论，随便躺在异性的膝盖上也太没危机感了',
      ]);
      era.println();
      await tachyon.say_and_wait('唔嗯……');
      era.println();
      await era.printAndWait([
        '似乎睡的有些不安稳的',
        tachyon.sex,
        '翻了个身，而 ',
        me.get_colored_name(),
        ' 心中的数落在看见',
        tachyon.sex,
        '的正脸时顿时化为乌有',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '眼角的黑眼圈，倒头就睡的疲惫感，一再显示了',
        tachyon.sex,
        '睡眠状况的不安稳',
      ]);
      await era.printAndWait([
        '仔细想想，最近',
        tachyon.sex,
        '似乎因为研究瓶颈总是没能好好入睡',
      ]);
      await era.printAndWait([
        '唯一使人欣喜的，是躺在 ',
        me.get_colored_name(),
        ' 的膝盖上时，',
        tachyon.sex,
        '舒展的眉间',
      ]);
      await era.printAndWait([
        '……要是这样能让',
        tachyon.sex,
        '好睡一些的话，偶尔这么做一次大概也无妨吧',
      ]);
      era.println();
      sys_change_pressure(32, -get_random_value(500, 1000));
      sys_change_motivation(32, 1) && (await era.waitAnyKey());
      life_marks.talk++;
      return;
    } else {
      buffer.push(async () => {
        await tachyon.say_and_wait(['哦，来了啊 ', callname]);
        await tachyon.say_and_wait('今天的实验……嗯？怎么了');
        await tachyon.say_and_wait('靠的太近了？是吗？我倒是觉得刚刚好来着');
        await tachyon.say_and_wait('还是说，你害羞了？');
      });
      !edu_marks.black_tea &&
        buffer.push(async () => {
          edu_marks.black_tea = 1;
          await tachyon.say_and_wait([callname, '，来得正好']);
          await tachyon.say_and_wait('帮我试试今天的新药吧');
          era.println();
          await era.printAndWait([
            '你习以为常的喝下了今天的药……嗯？怎么感觉像红茶',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 疑惑的看着自己手上的试管，是散发着可疑的光芒，一看就知道是 ',
            tachyon.get_colored_name(),
            ' 出品的药物，但为什么……',
          ]);
          era.println();
          await tachyon.say_and_wait('感觉如何？');
          era.println();
          await era.printAndWait([
            '在疑惑中被问到感想，',
            me.get_colored_name(),
            ' 下意识的对红茶的口味做出了评价',
          ]);
          await era.printAndWait([
            '回答完后 ',
            me.get_colored_name(),
            ' 才回忆起这是药而不是红茶，完蛋，这下要被狠狠批评了……',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '……香味不够，太甜，还有颜色……是吗？嗯……很有参考价值的回答……',
          );
          era.println();
          await era.printAndWait('欸？这样就过关了吗？');
          era.println();
          await tachyon.say_and_wait(
            '……对了，你的身体素质现在也有所上升，所以以后每天喝的药追加一剂吧，',
          );
          await tachyon.say_and_wait(
            '除了原来的药以外，再多加这种药剂……之后我会好好改良到你都无法挑剔的口味出来的',
          );
          era.printButton('「难道说……」', 1);
          era.printButton('「……难道说……」', 2);
          const ret = await era.input();
          await era.printAndWait('红茶的味道');
          await era.printAndWait('对口味的考察及改良');
          await era.printAndWait('换句话说，就是这样吧');
          era.println();
          if (ret === 1) {
            await era.printAndWait(
              '仔细想想，虽然太甜，但除了香味，那管「药剂」忽略外表不看……',
            );
            await era.printAndWait([
              '不，虽然说很疑惑',
              tachyon.sex,
              '到底是如何连泡红茶都能泡出那种颜色的，',
            ]);
            await era.printAndWait([
              '但仔细想想那不就是',
              tachyon.sex,
              '平常最喜欢的红茶的口味吗？',
            ]);
            era.println();
            await tachyon.say_and_wait('好好期待着吧！');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 似乎有些不服气的说道',
            ]);
            await era.printAndWait([
              '此时 ',
              me.get_colored_name(),
              ' 忽然想起，当初自己做便当给',
              tachyon.sex,
              '，被挑剔的一文不值时，似乎也是像这样不服气的',
            ]);
            await era.printAndWait([
              '仔细想想，当初的',
              tachyon.sex,
              '是怎么回答的？',
            ]);
            era.printButton('「我会好好期待着的，研究者君」', 1);
            await era.input();
            await tachyon.say_and_wait('……区区豚鼠');
            await era.printAndWait([
              me.get_colored_name(),
              ' 听见 ',
              tachyon.get_colored_name(),
              ' 小声的自言自语，忍不住露出笑容',
            ]);
          } else {
            await era.printAndWait([
              '事到如今，',
              tachyon.sex,
              '终于不满足于拿自己来试药，已经要将魔爪伸向其他人了！',
            ]);
            await era.printAndWait([
              '现在就在尝试做出红茶味道的药剂来，要是让',
              tachyon.sex,
              '找到连颜色都变成红茶色的方法那还得了！',
            ]);
            era.printButton('「速子！」', 1);
            await era.input();
            await era.printAndWait([me.get_colored_name(), ' 忍不住大喊出声']);
            era.println();
            await tachyon.say_and_wait([callname, '？做什么……']);
            era.printButton('「无论是什么药都可以，尽管来吧！」', 1);
            era.printButton('「只有一件事你一定要答应我」', 2);
            await era.input();
            await tachyon.say_and_wait([
              '欸……不是，',
              callname,
              '……你，你是不是搞错了什么……',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 尝试想说什么，但被 ',
              me.get_colored_name(),
              ' 无情的打断了',
            ]);
            await era.printAndWait(
              '没有错……无论如何，只有这件事是绝对必须，一定要趁着现在说出口的',
            );
            era.printButton(
              '「只有我，才是你永远，唯一的（实）豚（验）鼠（品）」',
              1,
            );
            await era.input();
            await era.printAndWait('没错……刚刚的味道已经无比接近红茶了');
            await era.printAndWait([
              '万一，要是',
              tachyon.sex,
              '真的混在给他人的饮料或者更糟，饮用水里的话……那后果不堪设想',
            ]);
            await era.printAndWait([
              '因此必须在这里强调自己的身份，让',
              tachyon.sex,
              '放弃将其他人当作实验品的狂想才行',
            ]);
            era.println();
            await tachyon.say_and_wait('……你……果然搞错…………但是……呜……');
            era.println();
            await era.printAndWait([
              '不知为何，',
              tachyon.get_colored_name(),
              ' 狼狈的转过身去，',
              me.get_colored_name(),
              ' 在',
              tachyon.sex,
              '转身前看见了',
              tachyon.sex,
              '通红的脸',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '……我的豚鼠至始至终就只有你一只……反正你就是每天给我来试药就对了！身为豚鼠闭嘴乖乖吃药才是你的本职吧！',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 气冲冲的离开了，留下了实验室里的残局让 ',
              me.get_colored_name(),
              ' 一个人收拾',
            ]);
            era.println();
            await era.printAndWait([
              '……究竟是为什么生气呢？',
              me.get_colored_name(),
              ' 百思不得其解',
            ]);
            await era.printAndWait([
              '不过……要是',
              tachyon.sex,
              '找到其他的实验者的话，不知为何，在当下瞬间 ',
              me.get_colored_name(),
              ' 的胸口真因这种可能性而缩紧了一些',
            ]);
            await era.printAndWait([
              '在听见',
              tachyon.sex,
              '说自己的豚鼠只有自己时，那种紧张感又消失的烟消云散了',
            ]);
            era.println();
            await era.printAndWait('该不会……自己已经药物成瘾了吧');
            await era.printAndWait([
              me.get_colored_name(),
              ' 慌忙摇了摇头甩掉这种可怕的可能性',
            ]);
          }
        });
    }
  } else if (life_marks.talk >= 10) {
    await tachyon.say_and_wait([
      callname,
      '，虽然我不介意和你多聊点，但你应该还有其他该做的事吧？',
    ]);
    return;
  } else {
    tachyon_default_talk(buffer, tachyon, me, callname, edu_marks);
  }
  await get_random_entry(buffer)();
  life_marks.talk++;
};
