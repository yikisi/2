const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const hot_spring_ticket = require('#/event/edu/edu-events-32/out-shopping-hot-spring');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
async function common(tachyon, me) {
  era.println();
  await era.printAndWait('居，居然还是「啊～～」');
  await era.printAndWait([me.get_colored_name(), ' 带着感动吃下了汉堡排……']);
  era.drawLine();
  era.printButton('「…………什么时候」', 1);
  await era.input();
  await era.printAndWait('无事献殷勤，必然有诈');
  await era.printAndWait('然而……美人计总是防不胜防');
  await era.printAndWait([
    '尤其对方还是准备给 ',
    me.get_colored_name(),
    ' 喂食的绝世美',
    tachyon.get_teen_sex_title(),
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    ' 看着身上发出的点点深蓝光芒，无语的问道',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '哼，我的下药技术要是连你都能看穿，那也枉费我每天苦心骗 ',
    sys_get_colored_callname(32, 25),
    ' 喝下我调制的药剂花的功夫了',
  ]);
}

module.exports = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 32) {
    add_event(hook.hook, event_object);
  }
  const callname = sys_get_callname(32, 0),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);
  await print_event_name('抽奖与代偿剂效应', tachyon);
  await tachyon.say_and_wait('真是……没想到居然会那么容易爆炸');
  await tachyon.say_and_wait([
    sys_get_colored_callname(32, 25),
    ' 也是……不就是加了点提升身体能力的药在咖啡粉里吗？怎么就那么生气……',
  ]);
  await tachyon.say_and_wait('果然这次还是要买些能禁得起诅咒的烧杯吧？');
  era.printButton('「这种东西要跟谁进货啊……」', 1);
  era.printButton('「说到底根本就不会有需求的东西……」', 2);
  await era.input();
  await tachyon.say_and_wait([
    '哼，不管',
    tachyon.sex,
    '那个诅咒的原理是什么，说到底还是只能用外力的方式来破坏',
  ]);
  await tachyon.say_and_wait(
    '换句话说只要能够加强到怎么使用外力也破坏不了的程度就可以了',
  );
  await tachyon.say_and_wait(
    '所以这次我们要找的是用太空材料制的，能够扛住宇宙高冷高热及气压的高规格烧杯哦',
  );
  await tachyon.say_and_wait(['啊，找到了，', callname, ' 你看']);
  era.println();
  await era.printAndWait('真的假的！商店街好厉害！');
  era.drawLine({ content: '时间稍微往前一点' });
  era.println();
  await era.printAndWait([
    '这天，',
    me.get_colored_name(),
    ' 与 ',
    tachyon.get_colored_name(),
    ' 一起上街采买实验用具',
  ]);
  await era.printAndWait('采买完准备回家时……');
  await say_by_passer_by_and_wait(
    '商店街大叔',
    '来哦来哦！商店街实验器材大出清！',
  );
  await say_by_passer_by_and_wait(
    '商店街大叔',
    '一次购买太空特制玻璃烧杯、宇宙陨矿坩埚，火箭燃料酒精灯的都能获得一次抽奖机会！',
  );
  await say_by_passer_by_and_wait(
    '商店街大叔',
    '特等奖温泉旅行券！一等奖特大份胡萝卜汉堡排！',
  );
  era.println();
  await era.printAndWait(
    '欸欸……这种东西，第一个就算了，后面几个真的有人会买吗……',
  );
  era.println();
  await tachyon.say_and_wait([callname, '，去抽奖吧']);
  era.printButton('「原来你全买了吗！？」', 1);
  era.printButton('「……酒精灯用火箭燃料真的不会有问题吗？」', 2);
  if ((await era.input()) === 1) {
    await tachyon.say_and_wait('那还用说，实验室里需要补充的东西还是挺多的');
    era.println();
    await era.printAndWait([tachyon.get_colored_name(), ' 理所当然的说着']);
    await era.printAndWait('……所以这条商店街到底是什么情况');
  } else {
    await tachyon.say_and_wait([
      callname,
      '，你连噱头都不明白吗？当然是噱头了噱头',
    ]);
    era.println();
    await era.printAndWait(
      '……不，如果前几个都是真货的话最后一个被怀疑也是很正常的吧',
    );
  }
  era.printButton('「不过，速子会对这种抽签感兴趣真少见」', 1);
  await era.input();
  await tachyon.say_and_wait(
    '嗯……说的也是，毕竟比起抽签，这些奖品都是能直接用钱买到的……以我们的比赛奖金也不缺这点钱',
  );
  era.println();
  await era.printAndWait('这样的话……');
  era.println();
  await tachyon.say_and_wait('但我的目的不是奖品，而是观察');
  era.println();
  await era.printAndWait('观察……？');
  era.println();
  await tachyon.say_and_wait(
    '还记得之前新年时说的吗？我想开始研究感情的影响了……',
  );
  await tachyon.say_and_wait(
    '这样的话当然必须要有对照，最好的对照当然就是一直在我身边的你了',
  );
  await tachyon.say_and_wait('让我看看吧，你抽奖之后的反应');
  era.println();
  await era.printAndWait(['于是，', me.get_colored_name(), ' 上前转动滚轮……']);
  const relation = era.get('relation:32:0'),
    love = era.get('love:32'),
    event_marks = new TachyonEduMarks(),
    life_marks = new TachyonLifeMarks();
  let wait_flag = false;
  switch (get_random_value(0, 5)) {
    case 0:
      await say_by_passer_by_and_wait('店主', '安慰奖，面纸一包');
      await era.printAndWait('安慰奖啊……可惜，不过也没办法');
      era.println();
      if (relation <= 225) {
        await tachyon.say_and_wait('唔……你好像没什么反应啊');
        era.println();
        await era.printAndWait('不……毕竟一开始就没什么期待啊');
        era.println();
        await tachyon.say_and_wait(
          '没有期待的意思是，从一开始你就不觉得会中吗？……这种在见到结果前就否认其可能性的做法，我并不欣赏就是了',
        );
        era.println();
        await era.printAndWait('啊……');
        era.println();
        await tachyon.say_and_wait('走吧，该回去继续实验了');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 的心情变差了']);
        await era.printAndWait([me.get_couple_title(), ' 默默的回到了学园']);
      } else {
        await tachyon.say_and_wait('安慰奖啊……算了，其实也没什么关系');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 也附和着，说到底就只是个商店街的小活动而已',
        ]);
        era.println();
        await tachyon.say_and_wait('毕竟这些奖品什么的我们都买得起不是吗');
        await tachyon.say_and_wait(
          '再说，面纸其实也很有用……你看，可以用来擦东西不是吗？',
        );
        await tachyon.say_and_wait(
          '还有，就是……那个温泉旅行券……就算抽到了我们也没时间去旅游不是吗',
        );
        era.println();
        await era.printAndWait('嗯？为什么忽然要说这么多');
        await tachyon.say_and_wait([
          '……对了，',
          callname,
          '，我听说这种抽奖有些商家都会做些机关……',
        ]);
        era.println();
        await era.printAndWait([
          '见到 ',
          tachyon.get_colored_name(),
          ' 甚至想上手去检查抽奖箱，',
          me.get_colored_name(),
          ' 连忙拉着 ',
          tachyon.get_colored_name(),
          ' 离开了商店街',
        ]);
        await tachyon.say_and_wait([
          '咕……放开我，',
          callname,
          '，我不在乎抽奖的奖品什么，但是身为消费者我有确认公平与否的权利及责任……！',
        ]);
        era.println();
        await era.printAndWait([
          '……其实，',
          tachyon.sex,
          '也没自己说的那么不在乎嘛',
        ]);
      }
      wait_flag = sys_change_motivation(32, -1);
      break;
    case 1:
      await say_by_passer_by_and_wait('店主', '三等奖，特选胡萝卜一根！');
      era.println();
      await era.printAndWait('说什么特选……只是清库存吧');
      await era.printAndWait([me.get_colored_name(), ' 无奈的拿着一根胡萝卜']);
      await era.printAndWait('不知是否是应该吐槽的点，但这抽奖的奖品');
      await era.printAndWait([
        '怎么感觉除了安慰奖的面纸和特奖的温泉旅行券其他都是专门为',
        tachyon.get_uma_sex_title(),
        '而设计的呢？',
      ]);
      era.println();
      if (relation <= 225 && event_marks.plan_b === 1) {
        if (event_marks.plan_b) {
          await tachyon.say_and_wait(
            '胡萝卜啊……这么说来，他们的奖品基本都是挺实用的呢',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 没多说什么，自然从 ',
            me.get_colored_name(),
            ' 手中接过了胡萝卜，掰了一小口放入嘴中',
          ]);
          era.println();
          await tachyon.say_and_wait('不错，挺甜的');
        } else {
          await tachyon.say_and_wait([
            '哦？',
            callname,
            '，你现在的表情挺不错的',
          ]);
          era.println();
          await era.printAndWait('欸？表情？');
          era.println();
          await tachyon.say_and_wait('无奈，失落，安慰，很复杂的表情呢');
          era.println();
          await era.printAndWait([
            '啊……这么说起来，是为了让 ',
            tachyon.get_colored_name(),
            ' 研究感情才抽奖的来着',
          ]);
          await era.printAndWait(
            '……研究感情什么的，总觉得像什么不懂人心的机器人啊',
          );
          await era.printAndWait([
            '但想想眼前如疯狂科学家一般的 ',
            tachyon.get_colored_name(),
            '……',
          ]);
          await era.printAndWait([
            '哪怕',
            tachyon.sex,
            '现在说出什么不明白人心为何物大概都不会让人意外',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '今天的实验还算成功，接下来请再多表现出其他的感情给我吧，',
            callname,
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 擅自从 ',
            me.get_colored_name(),
            ' 手上抢过胡萝卜，掰了尖头的一小段含入口中',
          ]);
          era.println();
          await tachyon.say_and_wait('味道不错');
        }
      } else {
        await tachyon.say_and_wait('哦呀，胡萝卜，这不是不错吗？');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 走过来安慰 ',
          me.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait(
          '比起那些华而不实的东西，能够补充营养的还是比较实际吧',
        );
        await tachyon.say_and_wait(
          '胡萝卜的话……回去做胡萝卜炒蛋吗？还是直接做胡萝卜汉堡排？直接打成胡萝卜汁似乎也不错……',
        );
        era.println();
        await era.printAndWait([
          '听见 ',
          tachyon.get_colored_name(),
          ' 安慰的话，',
          me.get_colored_name(),
          ' 也忍不住笑了起来',
        ]);
        era.printButton('「那样的话一根可不够啊」', 1);
        era.printButton('「得再多买一些了」', 2);
        await era.input();
        await era.printAndWait([
          '于是，',
          me.get_couple_title(),
          ' 又回到商店街，买了足够做晚饭的量的胡萝卜',
        ]);
        await era.printAndWait('……这不是上了商店街推销的当了吗？');
        await era.printAndWait([
          '回程的路上，',
          me.get_colored_name(),
          ' 才后知后觉的发现',
        ]);
      }
      wait_flag = get_attr_and_print_in_event(
        32,
        undefined,
        0,
        JSON.parse(`{"体力":${era.get('maxbase:32:体力') * 0.2}}`),
      );
      break;
    case 2:
      await say_by_passer_by_and_wait('店主', '二等奖，山一样高的胡萝卜堆！');
      era.println();
      await era.printAndWait('呜哇！好多！');
      await era.printAndWait('真的是字面意义堆的像小山一样高');
      era.println();
      if (relation <= 225) {
        await tachyon.say_and_wait('哦呀，这不是很不错吗？');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 露出欣喜的表情']);
        era.println();
        await tachyon.say_and_wait('这个月，不，说不定这半年都不用愁萝卜了');
        era.println();
        if (era.get('cflag:0:种族')) {
          await era.printAndWait([
            '不，但就算是',
            tachyon.get_uma_sex_title(),
            '自己也吃不了那么多啊……',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '一般而言，对于',
            tachyon.get_uma_sex_title(),
            '来说，消耗的能量越多需要补充的也就越多，所以吃得越多=越强其实是能够成立的',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 带着审量的眼神看着 ',
            me.get_colored_name(),
            ' 的身体',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '增加食欲的药吗？……呵呵，说不定是个好选择呢',
          );
          era.println();
          await era.printAndWait([
            '看来这堆胡萝卜不可逃避的要变成 ',
            me.get_colored_name(),
            ' 一个人的责任了',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            ' 垂头丧气的拉着一车胡萝卜与 ',
            tachyon.get_colored_name(),
            ' 回到了特雷森学园',
          ]);
        } else {
          await era.printAndWait([
            '但，身为人类要那么多胡萝卜做什么啊……',
            me.get_colored_name(),
            ' 将 ',
            me.get_colored_name(),
            ' 的烦恼告诉了 ',
            tachyon.get_colored_name(),
          ]);
          era.println();
          await tachyon.say_and_wait([
            '哦呀……你的意思是，要以人类转化',
            tachyon.get_uma_sex_title(),
            '的可能性进行实验吗？这样的研究……或许也不是不行……',
          ]);
          era.println();
          await me.say_and_wait('…………速子？');
          era.println();
          await tachyon.say_and_wait([
            '呵呵……提出了新的研究可能呢，',
            callname,
            '……这个，姑且当成以防万一的Plan C吧',
          ]);
          era.println();
          era.print([
            '十分危险及不妙的名词令 ',
            me.get_colored_name(),
            ' 忍不住背后一颤',
          ]);
          era.printButton('「还……还是给速子吧」', 1);
          era.printButton('「毕竟是你的抽奖券抽到的」', 2);
          await era.input();
          await tachyon.say_and_wait('……也是，可惜了，明明有这么好的机会');
          era.println();
          await era.printAndWait([
            '好不容易又逃过一劫的 ',
            me.get_colored_name(),
            ' 与 ',
            tachyon.get_colored_name(),
            ' 拉着一车的胡萝卜回到了特雷森学园',
          ]);
        }
      } else {
        era.println();
        await era.printAndWait([
          '看见奖品的瞬间 ',
          me.get_colored_name(),
          ' 就开始思考，这么多的胡萝卜……能给 ',
          tachyon.get_colored_name(),
          ' 做多少餐呢',
        ]);
        era.println();
        await tachyon.say_and_wait('真多啊……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 也不由得因这一堆的胡萝卜而惊呆了脸',
        ]);
        era.println();
        await tachyon.say_and_wait('这样的话……有了……');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 陷入了沉思']);
        await era.printAndWait([
          '对',
          tachyon.sex,
          '熟悉颇深的 ',
          me.get_colored_name(),
          ' 立马看出不妙',
        ]);
        era.println();
        await tachyon.say_and_wait('……免费胡萝卜……药……找小栗帽或特别周……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 连忙开口打断',
          tachyon.sex,
          '的思绪',
        ]);
        era.printButton('「对……对了，来做胡萝卜满汉全席吧！」', 1);
        era.printButton('「我，我最近正好学了不少料理都是胡萝卜为主的！」', 2);
        await era.input();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait('果然……还是不行吗？');
        era.println();
        await tachyon.say_and_wait([
          '怎么不早说！哎呀，蒸煮炒炸……会怎么做呢～～',
          callname,
          '，尽管做吧！食材这些没问题吧？需不需要更多点！',
        ]);
        era.println();
        await era.printAndWait([
          '已经很够了，',
          me.get_colored_name(),
          ' 苦笑着摇摇头',
        ]);
        await era.printAndWait([
          '能够用食物转移 ',
          tachyon.get_colored_name(),
          ' 的注意力真是太好了……虽然接下来要是做的不好一定会被惩罚的吧',
        ]);
        await era.printAndWait('但自己受药总比闹到全校好……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          ' 拉着一车胡萝卜与兴奋的 ',
          tachyon.get_colored_name(),
          ' 一同回到特雷森，路上脑袋里还在想着如何做出令 ',
          tachyon.get_colored_name(),
          ' 满意的菜肴来',
        ]);
      }
      wait_flag = get_attr_and_print_in_event(
        32,
        new Array(5).fill(5),
        0,
        JSON.parse(`{"体力":${era.get('maxbase:32:体力') * 0.2}}`),
      );
      wait_flag = sys_change_motivation(32, 1) || wait_flag;
      break;
    case 3:
      await say_by_passer_by_and_wait('店主', '一等奖 特大份胡萝卜汉堡排！');
      era.println();
      await era.printAndWait('欸……？');
      await era.printAndWait('一等奖就这个吗？');
      era.println();
      await era.printAndWait(
        '……这样啊，是知名大厨做的，虽然是自己没听过的人就是',
      );
      await era.printAndWait(
        '是错觉吗，但总觉得这个还不如二等奖的一车胡萝卜啊',
      );
      era.println();
      await tachyon.say_and_wait([
        '哦呀，居然是一等奖……不过，',
        callname,
        ' 你的情绪似乎不怎么开心的样子？',
      ]);
      era.printButton('「毕竟这个奖品只有速子能吃吧」', 1);
      era.printButton('「感觉……还不如二等奖啊」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '哦？……嗯，某种意义上来讲确实如此，无论是由大厨制作的，总归来说，也就是胡萝卜与肉而已，',
      );
      await tachyon.say_and_wait(
        '原料层面上来看，价值确实不如二等奖的胡萝卜数量',
      );
      if (love >= 75) {
        await tachyon.say_and_wait('那么，就让我来赋予它相应的价值吧……');
        era.println();
        await era.printAndWait([
          '说完，',
          tachyon.get_colored_name(),
          ' 捧过作为奖品的汉堡排',
        ]);
        await era.printAndWait([
          '切下刚好一口的大小，然后递到 ',
          me.get_colored_name(),
          ' 的嘴旁',
        ]);
        await era.printAndWait('欸，这是……');
        era.println();
        await tachyon.say_and_wait(
          '与爱人一起吃的汉堡排……这样它的价值是否提升了呢？',
        );
        era.println();
        await era.printAndWait([
          '没有等 ',
          me.get_colored_name(),
          ' 回话，',
          tachyon.get_colored_name(),
          ' 就将汉堡排戳进了 ',
          me.get_colored_name(),
          ' 的口中',
        ]);
        await era.printAndWait(['嚼完汉堡排后，', tachyon.sex, '才将叉子抽离']);
        era.println();
        await tachyon.say_and_wait('接下来轮到你了，亲爱的❤');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 张开嘴，等待着 ',
          me.get_colored_name(),
          ' 的喂食',
        ]);
        await era.printAndWait([me.get_couple_title(), ' 分享完了这个汉堡排']);
      } else if (love >= 50) {
        await tachyon.say_and_wait('……再说，做的也不如你');
        era.println();
        await era.printAndWait('欸……？');
        await era.printAndWait(
          '虽然被这样称赞很让人高兴，但自己的厨艺大概还是比不上这种知名主厨……',
        );
        era.println();
        await tachyon.say_and_wait(
          '呵呵……重要的不是营养，也不是味道，而是做的心意……这个，不是你教我的吗？',
        );
        era.println();
        await era.printAndWait([
          '说完，',
          tachyon.get_colored_name(),
          ' 捧过作为奖品的汉堡排',
        ]);
        await era.printAndWait([
          '切下刚好一口的大小，然后递到 ',
          me.get_colored_name(),
          ' 的嘴旁',
        ]);
        await era.printAndWait('欸，这是……');
        era.println();
        await tachyon.say_and_wait(
          '不过你说的也对……没有比较确实不好确定啊，科学必须严谨对吧',
        );
        await tachyon.say_and_wait(
          '所以……有技术但没有爱，以及技术略逊但有爱，其中究竟谁优谁劣……❤',
        );
        era.println();
        await era.printAndWait([
          '将汉堡排轻柔的喂入 ',
          me.get_colored_name(),
          ' 口中的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait('再切了一小块放入自己口中');
        era.println();
        await tachyon.say_and_wait([
          '就麻烦你回去再做一份了以做比较了，',
          callname,
          ' ❤',
        ]);
        era.println();
        await era.printAndWait(['在', tachyon.sex, '的笑容面前']);
        await era.printAndWait('自己仿佛真的变成了豚鼠一般，只能任其摆弄');
      } else if (!life_marks.cook) {
        await tachyon.say_and_wait('不过，只有我能吃什么的，这可错了');
        era.println();
        await era.printAndWait([
          '说完，',
          tachyon.get_colored_name(),
          ' 捧过作为奖品的汉堡排',
        ]);
        await era.printAndWait([
          '切下刚好一口的大小，然后递到 ',
          me.get_colored_name(),
          ' 的嘴旁。',
        ]);
        await me.say_and_wait('欸，这是……');
        era.println();
        await tachyon.say_and_wait(
          '胡萝卜的营养成分，对人类而言也是相当有益的，汉堡排中的动物蛋白也是……',
        );
        await tachyon.say_and_wait([
          '不如说以人类的消化速率，对肉类的需求反而比',
          tachyon.get_uma_sex_title(),
          '高上许多',
        ]);
        era.println();
        await era.printAndWait('不，不是，所以说这是……要自己吃下去的意思？');
        era.println();
        await tachyon.say_and_wait('啧……来，听话，啊～～');
        await common(tachyon, me);
        await tachyon.say_and_wait(
          '剩下的……你自己吃了吧，我对这种东西不怎么感兴趣',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '……不知为何，',
          tachyon.sex,
          '对一切饮食方面的要求都极为低标准',
        ]);
        await era.printAndWait('不，与其说是低标准不如说……毫无要求');
        await era.printAndWait('只要能够补充营养，什么都可以');
        await era.printAndWait(
          '不过……毕竟现在还算在新年期间……稍稍得寸进尺一下应该也是可以的吧',
        );
        era.printButton('「……真的很好吃的，速子不吃一口试试吗？」', 1);
        await era.input();
        await tachyon.say_and_wait('不用了，不是客气，是真的不需要');
        era.printButton(
          '「但，这是速子的抽奖券抽到的，要是自己不尝尝的话就不公平了吧」',
          1,
        );
        await era.input();
        await tachyon.say_and_wait('……也是，就吃一口试试');
        era.println();
        await era.printAndWait([
          '回过神来，',
          me.get_colored_name(),
          ' 叉子上叉着的那块肉已经被 ',
          tachyon.get_colored_name(),
          ' 以迅雷不及掩耳的速度咬下',
        ]);
        era.println();
        await tachyon.say_and_wait('好了，味道确实不错，就这样吧');
        era.println();
        await era.printAndWait('……好快！？');
        await era.printAndWait('完全没看到动嘴就……！');
        await era.printAndWait([
          '……要是',
          tachyon.sex,
          '真的开始享受起吃饭，大概会成为饭桌上的抢食能手吧',
        ]);
        await era.printAndWait([
          '不知为何，',
          me.get_colored_name(),
          ' 忽然开始思考起这些莫名其妙的事情',
        ]);
      } else {
        await tachyon.say_and_wait('那么……就让我来赋予其相应的价值吧');
        era.println();
        await era.printAndWait([
          '说完，',
          tachyon.get_colored_name(),
          ' 捧过作为奖品的汉堡排',
        ]);
        await era.printAndWait([
          '切下刚好一口的大小，然后递到 ',
          me.get_colored_name(),
          ' 的嘴旁',
        ]);
        await era.printAndWait('欸，这是……');
        if (relation <= 225) {
          await tachyon.say_and_wait([
            '身为G1赛',
            tachyon.get_uma_sex_title(),
            '的 ',
            tachyon.get_colored_name(),
            ' 亲手喂食的汉堡排，这样有没有相应的价值了？',
          ]);
        } else {
          await tachyon.say_and_wait([
            '身为超绝美',
            tachyon.get_teen_sex_title(),
            '，还是G1赛',
            tachyon.get_uma_sex_title(),
            '的 ',
            tachyon.get_colored_name(),
            ' 亲手喂食的汉堡排，你愿意花多少来尝这一口呢？',
          ]);
        }
        era.println();
        await tachyon.say_and_wait('来，听话，啊～～');
        await common(tachyon, me);
        await tachyon.say_and_wait('剩下的……喂！给我也留一口啊！');
        era.println();
        await era.printAndWait([
          '化悲愤为食欲的 ',
          me.get_colored_name(),
          ' 拼命的与 ',
          tachyon.get_colored_name(),
          ' 争夺着剩下的汉堡排',
        ]);
        await era.printAndWait(
          '…………不得不承认，知名主厨做的确实比自己要强上许多',
        );
      }
      wait_flag = get_attr_and_print_in_event(
        32,
        new Array(5).fill(10),
        0,
        JSON.parse(`{"体力":${era.get('maxbase:32:体力') * 0.3}}`),
      );
      wait_flag = sys_change_motivation(32, 1) || wait_flag;
      break;
    case 4:
      await hot_spring_ticket(tachyon, me, callname, relation, love);
      wait_flag = get_attr_and_print_in_event(
        32,
        new Array(5).fill(10),
        0,
        JSON.parse(`{"体力":${era.get('maxbase:32:体力') * 0.3}}`),
      );
      wait_flag = sys_change_motivation(32, 1) || wait_flag;
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};
