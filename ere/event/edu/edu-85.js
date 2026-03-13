/**
 * @file 第一红宝石 - 育成
 * @author 梦露
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const Edu85CrazyFanEnd = require('#/event/edu/edu-events-85/crazy-fan-end');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');

const RubyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-85');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},function)>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-85/week-start')(week_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},function)>} */
const week_end_handlers = {};

require('#/event/edu/edu-events-85/week-end')(week_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,RaceStartParams)>} */
const race_start_handlers = {};

require('#/event/edu/edu-events-85/race-start')(race_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,RaceEndParams)>} */
const race_end_handlers = {};

require('#/event/edu/edu-events-85/race-end')(race_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean})>} */
const out_church_handlers = {};

out_church_handlers[47 + 1] = async (ruby, me, r_call_m, m_call_r, flags) => {
  await print_event_name('新年参拜', ruby);
  await ruby.say_and_wait('祝您新年快乐。');
  era.printButton('「新年快乐。」', 1);
  await era.input();
  await ruby.say_and_wait('多亏了训练员你，我平安地迎来了新的一年。');
  await ruby.say_and_wait(
    '接下来，要在母亲大人胜利的和未能胜利的比赛上留下满意的结果……',
  );
  await me.say_and_wait('是要为母亲雪辱啊。', true);
  await ruby.say_and_wait('现在，可以断言脚的不安已经完全消除了。');
  await ruby.say_and_wait('我希望能参加一场樱花赏的前哨战，向您证明。');
  await era.printAndWait(
    '想做的事被提前说了……不过，能和担当目标相同是件好事。',
  );
  await ruby.say_and_wait('今年，也请多多指教。');
  era.printButton('「尽管交给我吧。」', 1);
  await era.input();
  await ruby.say_and_wait('嗯。');
  era.printButton(
    `「不过，${sys_get_callname(0, 85)} 之后应该还要去和其他人打招呼吧？」`,
    1,
  );
  await era.input();
  await era.printAndWait(
    '不难想象，作为财政界声名远播的一族的末裔，年初会很忙碌。',
  );
  await ruby.say_and_wait('不。');
  await ruby.say_and_wait('家族的各位已经打点完毕了。');
  await ruby.say_and_wait('如果真的有需要，会再联络我。');
  await era.printAndWait('也就是说，现在很有空。');
  await ruby.say_and_wait('那么，我准备进行自主练习。');
  await ruby.say_and_wait('已经打过招呼，我先走了。');
  await era.printAndWait('等等——');
  await era.printAndWait([
    '新年伊始果然还是希望担当能休息片刻，',
    me.get_colored_name(),
    ' 想到的是……',
  ]);
  era.printButton('「新春试笔。」（速度+20）', 1);
  era.printButton('「吃过年夜饭了吗？」（耐力+20）', 2);
  era.printButton('「让我们进入派对时间！」（技能点数+20）', 3);
  const attr_change = new Array(5).fill(0);
  let pt_change = 0;
  switch (await era.input()) {
    case 1:
      await era.printAndWait([
        '突然提起试笔，是因为 ',
        me.get_colored_name(),
        ' 挺喜欢某东方古国贴春联的习俗的。',
      ]);
      await ruby.say_and_wait('意外……');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 的字很清秀，可以说得上漂亮。',
      ]);
      await era.printAndWait([
        '但与 ',
        me.get_colored_name(),
        ' 师从某10亿人口国家的国家级书法家的字迹比，依旧有些相形见绌。',
      ]);
      await ruby.say_and_wait([r_call_m, '，请指导我。']);
      await era.printAndWait([
        ruby.uma_sex_title,
        '天生的不服输精神真是哪里都看得到啊。',
      ]);
      await era.printAndWait([
        '如此感慨的 ',
        me.get_colored_name(),
        '，决定先从纠正握笔的姿势开始，从身后包住了 ',
        ruby.get_colored_name(),
        ' 的小手。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 度过了饱含文化交流的愉悦午后。',
      ]);
      attr_change[attr_enum.speed] = 20;
      break;
    case 2:
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('晚上，家主会在第一家的宅邸设宴。');
      await ruby.say_and_wait('您能出席的话就再好不过了。');
      await ruby.say_and_wait('请安心，是华丽一族内部的晚宴。');
      await ruby.say_and_wait('去和母亲大人打个招呼吧？');
      await era.printAndWait([
        '跟 ',
        me.get_colored_name(),
        ' 预想的不同，享受了轻松的宴会时间。',
      ]);
      attr_change[attr_enum.endurance] = 20;
      break;
    case 3:
      await ruby.say_and_wait('噗，呵呵。');
      await ruby.say_and_wait('只有我们两个人，也要开派对吗？');
      await era.printAndWait([
        '不知为何，',
        ruby.get_colored_name(),
        ' 笑的很开心。',
      ]);
      await ruby.say_and_wait(
        '好啊，遗憾的是和『太阳』不同，我在这方面没有涉猎。',
      );
      await ruby.say_and_wait('就有劳您让我享受一番了？');
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 度过了愉快的一天。',
      ]);
      pt_change += 20;
  }
  flags.wait_flag = get_attr_and_print_in_event(85, attr_change, pt_change);
  era.set('cflag:85:节日事件标记', 0);
};

out_church_handlers[95 + 1] = async (ruby, me, r_call_m, m_call_r, flags) => {
  await print_event_name('新年参拜', ruby);
  await ruby.say_and_wait('受到关注，并不会有问题。');
  await era.printAndWait([
    '新年年初，',
    ruby.get_colored_name(),
    ' 就来到 ',
    me.get_colored_name(),
    ' 的训练员室。',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    ' 本以为',
    ruby.sex,
    '会更忙一些的，但心里还是很高兴。',
  ]);
  await era.printAndWait(['打过招呼后，', ruby.sex, '说的话果然依旧凛然。']);
  await ruby.say_and_wait('在这段时间里，我们把该做的事做好就行了。');
  await ruby.say_and_wait([r_call_m, '，是怎么想的？']);
  era.printButton('「要掌握速度……吧。」', 1);
  await era.input();
  await era.printAndWait(['对', ruby.sex, '来说，天生就受到速度的眷顾。']);
  await era.printAndWait([
    ruby.sex,
    '的脚经过磨砺后，定能绽放出光辉，成为一族最耀眼的存在。',
  ]);
  await ruby.say_and_wait('是的。我，不会再违背您的期待。');
  await era.printAndWait([
    '又是年初就神经紧绷，',
    me.get_colored_name(),
    ' 想做些什么让 ',
    ruby.get_colored_name(),
    ' 放松一下……',
  ]);
  era.printButton('「寻找新的正月料理」（耐力+20）', 1);
  era.printButton('「在附近的神社祈祷成长」（全属性+8）', 2);
  era.printButton('「让我们进入派对时间！Lv2！」（技能点数+35）', 3);
  const attr_change = new Array(5).fill(0);
  let relation_change = 0,
    love_change = 0,
    pt_change = 0;
  switch (await era.input()) {
    case 1:
      await ruby.say_and_wait('哈啊……');
      await ruby.say_and_wait('虽然我有心里准备，还真是意义不明呢。');
      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 在训练员室尝试了各种料理，度过了充实的一天。',
      ]);
      attr_change[attr_enum.endurance] = 20;
      break;
    case 2:
      await ruby.say_and_wait([r_call_m, '……']);
      era.printButton('「别误会，我就是喜欢小的。」', 1);
      era.printButton('「别误会，我是说身体能力的成长。」', 2);
      if ((await era.input()) === 1) {
        relation_change = -5;
        love_change = 1;
      } else {
        relation_change = 5;
      }
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('之后在校门口集合吧，我去换身衣服。');
      await era.printAndWait('和服适合贫乳穿，好像是真的。');
      await era.printAndWait([
        '但 ',
        me.get_colored_name(),
        ' 确信，是 ',
        ruby.get_colored_name(),
        ' 驾驭了这身华丽的衣装。',
      ]);
      await era.printAndWait([
        '头上别的山茶花很漂亮，但也不如',
        ruby.teen_sex_title,
        '自身动人。',
      ]);
      await era.printAndWait('衣服上的是……牵牛花啊。');
      await me.say_and_wait('爱情、和你紧紧相依啊', true);
      attr_change.fill(8);
      break;
    case 3:
      pt_change = 35;
      await era.printAndWait('为什么是Lv2呢？');
      await era.printAndWait([
        '为了不让担当失望，',
        me.get_colored_name(),
        ' 特地向 ',
        get_chara_talk(65).get_colored_name(),
        ' 请教了派对的技巧。',
      ]);
      await ruby.say_and_wait('吵闹过头了。');
      await era.printAndWait([
        '得到了',
        ruby.sex_code === 1 ? '少爷' : '大小姐',
        '笑着给出的不留情面的评价。',
      ]);
  }
  era.println();
  flags.wait_flag = get_attr_and_print_in_event(
    85,
    attr_change,
    pt_change,
    undefined,
    true,
  );
  flags.wait_flag =
    sys_like_chara(85, 0, relation_change, true, love_change) ||
    flags.wait_flag;
  era.set('cflag:85:节日事件标记', 0);
};

module.exports = class extends Edu85CrazyFanEnd {
  async office_study(ruby, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'rest_day') {
      return;
    }
    await print_event_name('优雅氛围不会改变', ruby);
    await era.printAndWait([
      '即使不在赛场上，',
      ruby.get_colored_name(),
      ' 的优雅氛围也不会改变',
    ]);
    era.printButton(`「${sys_get_callname(0, 85)}，今天没有家族的事吗？」`, 1);
    await era.input();
    await ruby.say_and_wait('是的，难得的休息日。');
    await ruby.say_and_wait('什么都不做浪费时间是愚蠢的，所以在努力学习。');
    await era.printAndWait([
      '不愧是',
      ruby.sex,
      '……但是，',
      me.get_colored_name(),
      ' 感到了一种不协调感。',
    ]);
    await era.printAndWait(
      '桌上堆叠的杂志一样的东西，很难认为是学习用的书籍。',
    );
    await ruby.say_and_wait('您很在意呢。');
    await era.printAndWait([
      '然后，',
      ruby.get_colored_name(),
      ' 把书合上，将封面展示给 ',
      me.get_colored_name(),
      ' 看。',
    ]);
    await era.printAndWait('《太太俱乐部》');
    await era.printAndWait(
      '上面大张旗鼓地写着：「开始准备生育时的必读刊物！」',
    );
    await ruby.say_and_wait(
      '除了这本，还有《母亲之友》，《妈咪宝贝》……所有的情报杂志都准备好了。',
    );
    await era.printAndWait([ruby.sex, '的表情略显得意。']);
    await era.printAndWait('而且，好几本书的页面上到处都是便签。');
    await ruby.say_and_wait('不久，你也会有需要这些知识的那一天吧。');
    await ruby.say_and_wait('那么，趁早掌握一点也不坏吧？');
    await ruby.say_and_wait('我挑选了自认为重要的部分，先从这些看起比较好。');
    era.printButton('……恭敬不如从命。', 1);
    await era.input();
    return true;
  }

  async out_church(ruby, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    const flags = { wait_flag: false };
    await out_church_handlers[event_object?.arg](
      ruby,
      me,
      callname,
      sys_get_callname(0, 85),
      flags,
    );
    flags.wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(ruby, me, callname, hook, extra_flag, event_object) {
    const relation = era.get('relation:85:0');
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'shopping_together') {
      return;
    }
    await print_event_name('一起去商店', ruby);
    await era.printAndWait(
      '商店的招牌都是放在屋顶上的，人们在其中进进出出，如同蜜蜂一般。',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 牵着 ',
      ruby.get_colored_name(),
      ' 的手，走在喧嚣的街道上，思考着应该回学校还是去酒店。',
    ]);
    await era.printAndWait('自己得不出答案，那就看爱马的意思。');
    if (relation > 150) {
      era.printButton('「要不要抱着或背着？」', 1);
      await era.input();
      await ruby.say_and_wait('……背我。');
      await era.printAndWait([me.get_colored_name(), ' 很乐意。']);
      await era.printAndWait([
        '尚未成年的，身材娇小的 ',
        ruby.get_colored_name(),
        '，很轻易就背起来了。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 趴在 ',
        me.get_colored_name(),
        ' 的背上，歪着脑袋看着 ',
        me.get_colored_name(),
        ' 的侧脸。',
      ]);
      await era.printAndWait('没有说话。');
      await era.printAndWait('甚至表情也没有变化。');
      await era.printAndWait('只是那双美丽的眼睛里，充满无限柔情。');
      era.println();
      let wait_flag = sys_like_chara(85, 0, 50);
      wait_flag = sys_love_uma(85, 5) || wait_flag;
      wait_flag && (await era.waitAnyKey());
    } else {
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 有点心动，但最后还是表示回学校。',
      ]);
    }
    return true;
  }

  async out_start(ruby, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'hot_spring_event') {
      return;
    }
    await print_event_name('温泉旅行', ruby);
    await era.printAndWait([
      '这是 ',
      me.get_colored_name(),
      ' 和 ',
      ruby.get_colored_name(),
      ' 赢下来种种比赛的某一天——',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 打开笔记本确认事项时，一张有点眼熟的东西飘到了地上。',
    ]);
    await era.printAndWait('捡起一看，是温泉旅行券。');
    const edu_marks = new RubyEduMarks();
    if (edu_marks.hot_spring > 0) {
      const date = Math.floor((edu_marks.hot_spring - 96) / 4);
      await ruby.say_and_wait([
        '是',
        date < 2
          ? '刚迈入资深年'
          : date < 5
            ? '去年春天'
            : date < 9
              ? '去年夏天'
              : date < 11
                ? '去年秋天'
                : '上个月',
        '，去商店街参加的那次抽奖抽到的吧。',
      ]);
      await era.printAndWait([
        '那时候，',
        me.get_colored_name(),
        ' 说「要等自己成为像 ',
        ruby.get_colored_name(),
        ' 一样出色的存在，再一起用这张券。」',
      ]);
      await ruby.say_and_wait(
        '现在，既然它再次出现在了我们面前，也就是说是时候了。',
      );
      await ruby.say_and_wait('正好最近没有什么大型比赛，不如我们去旅行吧？');
      era.printButton('「我还没完成约定哦。」', 1);
      await era.input();
    } else {
      await ruby.say_and_wait([callname, ' 还保存有温泉旅行券吗？']);
      await me.say_and_wait('嘛……机缘巧合。');
      await me.say_and_wait('正好最近没有什么大型比赛，不如我们去旅行吧？');
    }
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('失陪一下。');
    await era.printAndWait([ruby.get_colored_name(), ' 转身掏出手机。']);
    await ruby.say_and_wait('对，是我。请现在立刻派辆车到学校来。');
    era.printButton(`「${sys_get_callname(0, 85)}？？？」`, 1);
    await era.input();
    await ruby.say_and_wait('那么——跟我来吧。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 带 ',
      me.get_colored_name(),
      ' 来到了能用得上那张温泉旅行券的旅馆。',
    ]);
    await ruby.say_and_wait('最近您一直在工作，没有休息。我全都看在眼里。');
    await ruby.say_and_wait('希望你能借此机会转换心情，养精蓄锐。');
    await ruby.say_and_wait('那么我就先失陪了。');
    era.printButton('对于一直在努力的你来说，休息是很有必要的。', 1);
    era.printButton('我觉得你更需要休息。', 2);
    await era.input();
    await ruby.say_and_wait('呼……');
    await ruby.say_and_wait('这次就听你的吧。');
    era.drawLine({ content: '泡完温泉' });
    era.printButton('话说你为什么同意留下来了呢？', 1);
    await era.input();
    await ruby.say_and_wait('一时兴起。');
    era.printButton('真的假的', 1);
    await era.input();
    await ruby.say_and_wait('我凭一时的兴致做出的决定，有这么不可思议吗？');
    era.printButton('是的。', 1);
    await era.input();
    await ruby.say_and_wait('我当时并没有想太多。但是，我听到您的话后……');
    await ruby.say_and_wait('我觉得还是留下来陪您比较好，就答应了……仅此而已。');
    await era.printAndWait([
      ruby.get_colored_name(),
      ' 没有说下去，也不打算说下去。',
    ]);
    await era.printAndWait([
      '这对 ',
      me.get_colored_name(),
      ' 来说已经很足够了。',
    ]);
    era.printButton(`「谢谢你，${sys_get_callname(0, 85)}。」`, 1);
    await era.input();
    await ruby.say_and_wait('我觉得我并没有做什么值得您感谢的事情。');
    await era.printAndWait([
      me.get_colored_name(),
      ' 决定在 ',
      me.get_colored_name(),
      ' 的房间感受和 ',
      ruby.get_colored_name(),
      ' 不可替代的羁绊……',
    ]);
    const cache = era.get('flag:当前位置');
    era.set('flag:当前位置', location_enum.hot_spring);
    await quick_into_sex(85);
    era.set('flag:当前位置', cache);
    return true;
  }

  async out_station(ruby, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg === 'wait_station') {
      await print_event_name('赴约', ruby);
      await era.printAndWait([
        '车站前，',
        me.get_colored_name(),
        ' 朝着私服打扮的',
        ruby.teen_sex_title,
        '微笑地打招呼。',
      ]);
      await era.printAndWait([
        '离约好的时间还有十几分钟，看起来 ',
        ruby.get_colored_name(),
        ' 已经等了一段时间了。',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 粗略地打量了一番。']);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 穿的圆领上衣，大方地露出精致的诱人锁骨。',
      ]);
      await era.printAndWait(
        '下半身是长裙，群腰在上衣里，整个人显得气质闲适。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 见 ',
        me.get_colored_name(),
        ' 打量自己，抬手捋了下耳边的头发。',
      ]);
      await ruby.say_and_wait('很奇怪吗？');
      era.printButton('「当然很可爱。」', 1);
      era.printButton('「有种清新俏丽的感觉。」', 2);
      await era.input();

      await era.printAndWait([
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 引来了周围一些人的瞩目。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 有点受不了那种「如同看富佬包养未成年',
        ruby.teen_sex_title,
        '」的视线，好在 ',
        ruby.get_colored_name(),
        ' 拉着 ',
        me.get_colored_name(),
        ' 走进了车厢。',
      ]);
    } else if (event_object?.arg === 'station') {
      await print_event_name('小宝宝本铺', ruby);
      await me.say_and_wait('那么，这里是什么地方呢。');
      await ruby.say_and_wait('是的，是小宝宝本铺。');
      await era.printAndWait('周围有肚子略胀的女性，抱着小孩走路的夫妇等。');
      await era.printAndWait([
        '都是比 ',
        me.get_couple_title(),
        ' 更适合来这家店的客人。',
      ]);
      await era.printAndWait([
        '在这里，',
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 的存在明显是异质的。',
      ]);
      await ruby.say_and_wait('通过书本能获取的知识是有限的。');
      await ruby.say_and_wait('希望通过实地检查来加深知识。');
      await say_by_passer_by('路人A', [
        '喂，那个难道不是 ',
        ruby.get_colored_name(),
        ' 吗？',
      ]);
      await say_by_passer_by('路人B', '真的假的……那个华丽一族为什么在这里？');
      await say_by_passer_by(
        '路人C',
        '旁边的是训练员吧，两个人去那家店的话，难道是这种关系？',
      );
      await era.printAndWait([
        '果然很显眼，不用说，',
        me.get_colored_name(),
        ' 和担当的身份已经暴露了。',
      ]);
      await ruby.say_and_wait('仅是普通地访问，果然不合时宜，请帮助我。');
      era.printButton('伸出手。', 1);
      await era.input();
      await era.printAndWait([
        '就这样，',
        ruby.get_colored_name(),
        ' 紧紧地抱住了那只手。',
      ]);
      await era.printAndWait('这样的话，待在这里也不会有不协调的感觉了。');
      await say_by_passer_by('路人A', '果然两个人已经是那种关系了……');
      await say_by_passer_by('路人B', [
        '真的吗？那么，难道 ',
        ruby.get_colored_name(),
        ' 的肚子已经！？',
      ]);
      await say_by_passer_by('路人C', '那不是犯罪吗！');
      await era.printAndWait([
        '之后，',
        me.get_colored_name(),
        ' 和 ',
        ruby.get_colored_name(),
        ' 在周围各种声音的环绕下，在母婴店逛了一段时间。',
      ]);
    }
    return true;
  }

  async race_end(ruby, me, callname, hook, extra_flag) {
    const m_call_r = sys_get_callname(0, 85);
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        ruby,
        me,
        callname,
        m_call_r,
        extra_flag,
      ))
    ) {
      return await super.race_end(ruby, me, callname, hook, extra_flag);
    }
  }

  async race_start(ruby, me, callname, hook, extra_flag) {
    const m_call_r = sys_get_callname(0, 85);
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](
        ruby,
        me,
        callname,
        m_call_r,
        extra_flag,
      ))
    ) {
      return await super.race_start(ruby, me, callname, hook, extra_flag);
    }
  }

  async week_end(ruby, me, callname, hook, extra_flag, event_object) {
    const flags = { wait_flag: false },
      ret = await week_end_handlers[event_object.arg](
        ruby,
        me,
        callname,
        sys_get_callname(0, 85),
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }

  async week_start(ruby, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object?.arg]) {
      return super.week_start(
        ruby,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_start_handlers[event_object.arg](
        ruby,
        me,
        callname,
        sys_get_callname(0, 85),
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};
