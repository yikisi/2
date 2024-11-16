/**
 * @file 爱丽速子 - 日常
 *
 * @author 幽白書
 * @author 黑奴一号 无名黑奴（修订）
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const tachyon_out_church = require('#/event/daily/daily-events-32/out-church');
const tachyon_out_station = require('#/event/daily/daily-events-32/out-station');
const tachyon_school_atrium = require('#/event/daily/daily-events-32/school-atrium');
const tachyon_slave_end = require('#/event/daily/daily-events-32/slave-end');
const tachyon_talk = require('#/event/daily/daily-events-32/talk');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const CustomizedDaily = require('#/event/daily/daily-common');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,number,number)>} */
const week_start_handlers = {};

[
  require('#/event/daily/daily-events-32/week-start-punishment'),
  require('#/event/daily/daily-events-32/week-start-hook-hate'),
].forEach((f) => f(week_start_handlers));

function common_escape(tachyon, life_marks) {
  tachyon.say(['真是神奇啊，', sys_get_colored_callname(32, 0), '']);
  tachyon.say([
    '明明，在地下室的时候你的眼眸几乎接近于暗淡无光……现在，却再度绽放出那种将人吸入的光辉了。',
  ]);
  tachyon.say([
    '『我的眼睛如果有任何特别之处，那必然是反射自速子的光芒』？……呵呵，',
    sys_get_colored_callname(32, 0),
    '，难得见你这么伶牙俐齿啊……',
  ]);
  tachyon.say(['那么……若是我的眼眸再度染上尘埃，就请你再一次为我将其抹去吧。']);
  life_marks.b_escape = 0;
}

module.exports = class extends CustomizedDaily {
  async week_start(_, extra_flag, event_object) {
    if (week_start_handlers[event_object.arg]) {
      return await week_start_handlers[event_object.arg](
        get_chara_talk(32),
        get_chara_talk(0),
        sys_get_callname(32, 0),
        era.get('love:32'),
        era.get('relation:32:0'),
      );
    }
  }

  select() {
    const life_marks = new TachyonLifeMarks();
    if (new TachyonEduMarks().plan_b && life_marks.b_escape) {
      life_marks.b_escape = 0;
      return super.select();
    }
    if (!sys_check_awake(32) || !sys_check_awake(0) || !life_marks.b_escape) {
      return super.select();
    }
    common_escape(get_chara_talk(32), life_marks);
  }

  good_morning() {
    const tachyon = get_chara_talk(32),
      life_marks = new TachyonLifeMarks();
    if (life_marks.b_escape) {
      return common_escape(get_chara_talk(32), life_marks);
    }
    tachyon.say(
      '你来了啊，那就顺便把门口那三袋垃圾丢了吧……帮助实验？需要你的时候自然会叫你。',
    );
    era.print([tachyon.get_colored_name(), ' 似乎正忙着实验的样子。']);
  }

  async talk() {
    if (!sys_check_awake(32)) {
      return await super.talk();
    }
    await tachyon_talk();
  }

  async office_cook(hook) {
    const life_marks = new TachyonLifeMarks(),
      tachyon = get_chara_talk(32);
    if (era.get('relation:32:0') <= 150 && !life_marks.cook) {
      hook.override = true;
      await tachyon.say_and_wait('要做饭给我吃？难以入口的东西我拒绝');
      await era.printAndWait('真是挑剔的食客啊……看来需要再精进一下厨艺再说了');
      return;
    }
    const buffer = [],
      callname = sys_get_callname(32, 0),
      edu_marks = new TachyonEduMarks(),
      me = get_chara_talk(0);
    if (edu_marks.plan_b && era.get('cflag:32:育成回合计时') <= 47 + 44) {
      const coffee = get_chara_talk(25);
      buffer.push(
        async () => {
          await era.printAndWait([
            '原本 ',
            me.get_colored_name(),
            ' 和 ',
            tachyon.get_colored_name(),
            ' 说好了两人轮流做便当，',
          ]);
          await era.printAndWait([
            '但最近由于 ',
            coffee.get_colored_name(),
            ' 的训练量增多导致 ',
            me.get_colored_name(),
            ' 没什么时间能够停下来做便当，',
          ]);
          await era.printAndWait([
            '因此最近几乎都是 ',
            tachyon.get_colored_name(),
            ' 做的便当，而 ',
            me.get_colored_name(),
            ' 负责吃，并且在吃的时候与',
            tachyon.sex,
            '交流信息。',
          ]);
          era.printButton('「好好吃！」', 1);
          await era.input();
          await tachyon.say_and_wait('呵呵，还不赖吧');
          await era.printAndWait([
            '相比起 ',
            me.get_colored_name(),
            ' 的惊讶，',
            tachyon.get_colored_name(),
            ' 却始终一副波澜不惊的模样。',
          ]);
          await tachyon.say_and_wait('毕竟，也没什么其他的事做了');
          await era.printAndWait([
            '说出这句话时的',
            tachyon.sex,
            '，是否是带着悲伤的情绪说出的呢。',
          ]);
          await era.printAndWait([me.get_colored_name(), ' 不得而知。']);
        },
        () =>
          era.printAndWait([
            tachyon.get_colored_name(),
            ' 正常吃下了 ',
            me.get_colored_name(),
            ' 做的便当后便回去研究能够发挥 ',
            coffee.get_colored_name(),
            ' 潜力的药剂了。',
          ]),
        async () => {
          await era.printAndWait([
            me.get_colored_name(),
            ' 吃着 ',
            tachyon.get_colored_name(),
            ' 做的便当。',
          ]);
          await era.printAndWait([
            '现在的',
            tachyon.sex,
            '，比起以前更加沉默了，比起谈论无聊的事，',
            tachyon.sex,
            '更将集中力放在了如何让 ',
            coffee.get_colored_name(),
            ' 跑的更快。',
          ]);
          await era.printAndWait([
            '寡言、专注、厨艺好，某种意义上而言，现在的 ',
            tachyon.get_colored_name(),
            ' 比以前的',
            tachyon.sex,
            '更加接近一般世间对优秀的好女人的形象。',
          ]);
          await era.printAndWait([
            '但果然……还是想念当初充满冲劲和热忱的',
            tachyon.sex,
            '啊。',
          ]);
        },
      );
    } else {
      buffer.push(async () => {
        await tachyon.say_and_wait(['加油哦 ', callname, '～～']);
        await tachyon.say_and_wait(
          '嗯？一起做饭的意思不就是你做我负责指指点点吗？',
        );
      });
      if (era.get('relation:32:0') > 375) {
        buffer.push(
          async () => {
            await tachyon.say_and_wait([
              callname,
              '！今天我可是自己煎了蛋饼哦！快吃吧！',
            ]);
            await me.say_and_wait('……');
            await era.printAndWait([
              me.get_colored_name(),
              ' 看着眼前有些烧焦，蛋完全露在外面一点也没包起来，与其叫蛋饼不如说叫炒饼加蛋的东西……',
            ]);
            await era.printAndWait('嗯……最起码，味道还是能吃的');
          },
          async () => {
            await tachyon.say_and_wait([
              '……',
              callname,
              '，你也知道的，毕竟学园里出于安全考虑只能使用电磁炉之类的来做料理，',
            ]);
            await tachyon.say_and_wait(
              '但……我不太擅长电磁炉，所以……这不是我的问题，是电磁炉难用的问题，如果换成燃气灶的话绝对不会是这样……',
            );
            await era.printAndWait([
              me.get_colored_name(),
              ' 看着眼前完全焦黑的鸡蛋。',
            ]);
            await era.printAndWait('……有点苦，又有点咸，勉强算能吃吧。');
          },
          async () => {
            await tachyon.say_and_wait(
              '想了想，自己在训练员室里做吃的本来就是件很不合理的事吧',
            );
            await era.printAndWait([
              '说好了今天',
              tachyon.sex,
              '做便当的 ',
              tachyon.get_colored_name(),
              ' 掏出了两个外卖盒。',
            ]);
            await era.printAndWait('……肯定能吃，但这已经背离原来初衷了吧。');
          },
        );
      }
    }
    await get_random_entry(buffer)();
    life_marks.cook++;
    life_marks.l_cook = era.get('flag:当前回合数');
  }

  async office_study() {
    const buffer = [],
      callname = sys_get_callname(32, 0),
      tachyon = get_chara_talk(32);
    buffer.push(
      () =>
        tachyon
          .say_and_wait(['啊，', callname, '，能麻烦你帮我指导一下这一章吗？'])
          .then(() =>
            tachyon.say_and_wait(
              '什么叫『没想到速子居然也会有不懂的东西』，虽然是在吹捧我，但也吹的过头了，我对自己所知的渺小还是很有自知之明的。',
            ),
          ),
      async () => {
        await tachyon.say_and_wait([
          '啊，',
          callname,
          '，能麻烦你教我关于这方面的事情吗？',
        ]);
        await tachyon.say_and_wait(
          '嗯嗯，没错，就是这章，科学伦理，不知道为什么我总是记不住，真奇怪啊……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '为了考试而学习，那样学到的知识真的有用吗？',
        );
        await tachyon.say_and_wait(['你明白我的意思吧，', callname, '。']);
        await tachyon.say_and_wait('生活中完全用不上的东西，学习了也是白学。');
        await tachyon.say_and_wait(
          '所以说伦理与道德这种提的全是老掉牙古板思想的东西，就算不学也没有关系的吧。',
        );
        await tachyon.say_and_wait('……不行吗？');
      },
      async () => {
        await tachyon.say_and_wait([
          '地理？不，',
          callname,
          '……你怎么会觉得我会连这么简单的科目都需要补习呢。',
        ]);
        await tachyon.say_and_wait(
          '不信就来考我吧，瑞士的首都是伯尔尼、巴西的官方语言是西班牙语，美国的前身是十三个英属殖民地……你看，我这不都回答出来了吗？',
        );
        await tachyon.say_and_wait('南边是哪边？呵，愚问，当然是地底下了。');
      },
      async () => {
        await tachyon.say_and_wait([
          callname,
          '，关于这个作文我实在不是很懂自己哪里写的有问题了。',
        ]);
        await tachyon.say_and_wait('题目不是问了为什么窗帘是蓝色的吗？');
        await tachyon.say_and_wait(
          '因此我基于颜色的成色原理与人类经由视椎细胞获得的信息写了两万字分析这样有什么问题吗？',
        );
        await tachyon.say_and_wait(
          '……原来如此，是字数超过了啊，我下次努力控制在两千字内吧。',
        );
      },
    );
    await get_random_entry(buffer)();
  }

  async office_rest() {
    const callname = sys_get_callname(32, 0),
      me = get_chara_talk(0),
      tachyon = get_chara_talk(32);
    if (era.get('cflag:32:干劲') === -2) {
      await tachyon.say_and_wait('我不需要休息');
      await era.printAndWait([
        '状态明显不好的 ',
        tachyon.get_colored_name(),
        ' 坚持逞强的说道。',
      ]);
      await tachyon.say_and_wait('明明还有一堆能做，要做的事，怎么能休息……');
      if (era.get('love:32') >= 50) {
        await era.printAndWait([
          me.get_colored_name(),
          ' 从背后抱住了坚持在实验桌前的 ',
          tachyon.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([tachyon.sex, '的身体颤抖了一下。']);
        await tachyon.say_and_wait(['……', callname, '，就算色诱也没用的哦。']);
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          ' 强硬的把倔强坐在实验桌前的',
          tachyon.sex,
          '拉了起来。',
        ]);
      }
    } else {
      await get_random_entry([
        () =>
          tachyon.say_and_wait(['累了累了，', callname, '，快泡杯红茶过来。']),
        () =>
          era.printAndWait([
            me.get_colored_name(),
            ' 喝着自己泡的红茶，与 ',
            tachyon.get_colored_name(),
            ' 在沙发椅上度过悠闲的下午。',
          ]),
        async () => {
          await tachyon.say_and_wait('真闲啊。');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 发出了对日常的感叹。',
          ]);
        },
      ])();
    }
  }

  async office_prepare() {
    const tachyon = get_chara_talk(32);
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '准备？只有弱者才准备，',
        sys_get_callname(32, 0),
        '，你看过狮子锻炼吗？',
      ]);
    } else {
      await tachyon.say_and_wait(
        '欸，为什么还要做赛前准备，比赛不是和考试一样，测的是平时的积累吗……',
      );
      await tachyon.say_and_wait(
        '难道说你是那种？考前才临时抱佛脚希望不要挂科的？',
      );
    }
  }

  async office_game() {
    const tachyon = get_chara_talk(32);
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '啧……这个机体也太慢了，完全跟不上',
        tachyon.get_uma_sex_title(),
        '的输出速度嘛！',
      ]);
    } else {
      await tachyon.say_and_wait('格斗游戏？输了要听对方的话？');
      await tachyon.say_and_wait(
        '呵呵，你有办法胜过已经把出招表都背下来的我吗？',
      );
      await tachyon.say_and_wait(
        '……等等！龟缩在墙角不停用远距离攻击也太过分了！',
      );
    }
  }

  async school_atrium(hook) {
    return await tachyon_school_atrium(hook);
  }

  async school_rooftop() {
    const buffer = [],
      callname = sys_get_callname(32, 0),
      edu_marks = new TachyonEduMarks(),
      me = get_chara_talk(0),
      relation = era.get('relation:32:0'),
      tachyon = get_chara_talk(32);
    if (edu_marks.plan_b && era.get('cflag:32:育成回合计时') <= 47 + 44) {
      const coffee = get_chara_talk(25);
      buffer.push(
        () =>
          era.printAndWait([
            tachyon.get_colored_name(),
            ' 静静的在天台上感受着凉风，面无表情，是又在思考 ',
            coffee.get_colored_name(),
            ' 的训练方案了吗？',
          ]),
        () =>
          era.printAndWait([
            me.get_colored_name(),
            ' 带着 ',
            tachyon.get_colored_name(),
            ' 到天台上吃便当换换心情，',
            tachyon.sex,
            '在吃便当的时候还是一直在说着 ',
            coffee.get_colored_name(),
            ' 的事。',
          ]),
        async () => {
          await era.printAndWait([tachyon.sex, '不知为何一直盯着栏杆外的天空']);
          await era.printAndWait('眼中平淡无波，只是反射着天空的景色。');
          await tachyon.say_and_wait(['……怎么了吗？', callname, '？']);
          await era.printAndWait([
            '不知为何，',
            me.get_colored_name(),
            ' 忽然感到一阵害怕',
          ]);
          await era.printAndWait([
            '心中的害怕驱使 ',
            me.get_colored_name(),
            ' 握住了',
            tachyon.sex,
            '的手，但很快又放开了',
          ]);
          await tachyon.say_and_wait([
            '……放心吧，',
            callname,
            '，我哪里也不会去的',
          ]);
        },
      );
      if (
        !edu_marks.roof_b &&
        edu_marks.plan_b &&
        era.get('relation:32:0') > 375
      ) {
        buffer.push(async () => {
          edu_marks.roof_b = 1;
          const coffee = get_chara_talk(25);
          await era.printAndWait([
            me.get_colored_name(),
            ' 带着',
            tachyon.sex,
            '到天台吃便当散散心',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '高兴的听 ',
            me.get_colored_name(),
            ' 谈着最近 ',
            coffee.get_colored_name(),
            ' 训练上的变化，偶尔加入几句自己的想法',
          ]);
          await era.printAndWait('过程中完全没有提及自己');
          await era.printAndWait([
            '无法参与训练的',
            tachyon.sex,
            '，哪怕自己已经尽量抽空陪伴了，在其他',
            tachyon.get_uma_sex_title(),
            '训练时也还是必须要分开',
          ]);
          await tachyon.say_and_wait(['最近', tachyon.sex, '还好吗']);
          era.printButton('「……」', 1);
          era.printButton('「……那你呢？最近还好吗？」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              '结束了 ',
              coffee.get_colored_name(),
              ' 的话题后 ',
              me.get_couple_title(),
              ' 忽然陷入沉默，很快就结束了这一餐',
            ]);
          } else {
            await tachyon.say_and_wait('我？……也就那样吧，没什么特别的。');
            await era.printAndWait([tachyon.sex, '随便的回应了']);
            await era.printAndWait([
              '与',
              tachyon.sex,
              '相处甚久的 ',
              me.get_colored_name(),
              ' 可以看出，',
              tachyon.sex,
              '并不是在敷衍，而是真心觉得自己的生活没什么能说的话题',
            ]);
            await era.printAndWait([
              '想到这点，',
              me.get_colored_name(),
              ' 不禁感到一阵心痛。',
            ]);
          }
        });
      }
    } else {
      buffer.push(
        () => tachyon.say_and_wait('啊，便当放着就好，我做完风速测量就吃。'),
        async () => {
          await tachyon.say_and_wait([
            '在天台吃便当啊……这么说起来，',
            callname,
            ' 你知道天台原本是不允许人进入的吗？',
          ]);
          await me.say_and_wait('欸，有这回事？');
          await tachyon.say_and_wait([
            '是的哦，听说是有某名',
            tachyon.get_uma_sex_title(),
            '在天台上做实验，不小心弄的有毒物质外泄了。',
          ]);
          await tachyon.say_and_wait('……怎么这种表情？');
          await tachyon.say_and_wait('不不，当然不是我了');
          await tachyon.say_and_wait(
            '不过你说的也对，过了这么久应该早就没有残留了吧。',
          );
          await tachyon.say_and_wait([
            '再说，就算有残留……经过现在的我做的药物锻炼出的 ',
            callname,
            '，怎么也不可能输给过去的我做出的药物吧？',
          ]);
          await me.say_and_wait('所以果然是你啊！');
        },
        async () => {
          await era.printAndWait([
            me.get_colored_name(),
            ' 带着便当和 ',
            tachyon.get_colored_name(),
            ' 一起到天台吃午餐。',
          ]);
          await era.printAndWait([
            '微风吹过 ',
            tachyon.get_colored_name(),
            ' 的发稍，',
            tachyon.sex,
            '发出了咯咯的笑声，似乎很享受的模样。',
          ]);
          await era.printAndWait([
            '看来 ',
            tachyon.get_colored_name(),
            ' 似乎挺喜欢这个环境的，有机会再带',
            tachyon.sex,
            '上来吧。',
          ]);
        },
      );
      if (!edu_marks.roof_a && !edu_marks.plan_b && relation > 375) {
        buffer.push(async () => {
          edu_marks.roof_a = 1;
          await tachyon.say_and_wait('哼哼哼～～');
          await era.printAndWait([
            '今天 ',
            me.get_colored_name(),
            ' 又带着便当和 ',
            tachyon.get_colored_name(),
            ' 一起到天台吃午餐了。',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '一边享受着微风，一边开心的夹起便当里的鸡块。',
          ]);
          await era.printAndWait('忽然，微风瞬间转成了狂风。');
          await tachyon.say_and_wait('啊');
          await era.printAndWait('夹在筷子上的鸡块在忽然加大的风力下落到地上');
          await era.printAndWait('啊……好可惜');
          await era.printAndWait('不过也没关系，毕竟便当还有……');
          await era.printAndWait([
            '这时，',
            me.get_colored_name(),
            ' 看见 ',
            tachyon.get_colored_name(),
            ' 径直夹起了掉到地上的鸡块',
          ]);
          await tachyon.say_and_wait('那么，我开动了——');
          era.printButton('「等一下！？」', 1);
          await era.input();
          await tachyon.say_and_wait([
            '嗯？有什么问题吗 ',
            callname,
            '，你难道不知道三秒原则吗？',
          ]);
          await era.printAndWait([
            '不，先不说为什么 ',
            tachyon.get_colored_name(),
            ' 会相信三秒原则这种毫无根据的说法，刚刚明显已经超过三秒了啊！？',
          ]);
          await tachyon.say_and_wait([
            '……唉，',
            callname,
            '，以科学角度来说，',
            tachyon.get_uma_sex_title(),
            '的肠胃也没有脆弱到会因为这种事吃坏肚子哦',
          ]);
          await me.say_and_wait('不是这个问题吧！？');
          await tachyon.say_and_wait('反正我就要吃鸡块！');
          await me.say_and_wait('便当里不是还有吗！？');
          await era.printAndWait([
            '在 ',
            me.get_colored_name(),
            ' 的坚持下阻止了 ',
            tachyon.get_colored_name(),
            ' 将掉到地上的鸡块吃下',
          ]);
          await era.printAndWait([
            '代价是当天下午',
            tachyon.sex,
            '一直用幽怨的眼神望着 ',
            me.get_colored_name(),
          ]);
          await era.printAndWait([
            '直到晚上，进入梦乡 ',
            me.get_colored_name(),
            ' 都仿佛听见耳边一直传来 ',
            tachyon.get_colored_name(),
            ' 幽怨的哀嚎',
          ]);
          await tachyon.say_and_wait('我的鸡块……');
          await me.say_and_wait(
            ['……明天再给', tachyon.sex, '做炸鸡块吧'],
            true,
          );
        });
      }
    }
    await get_random_entry(buffer)();
  }

  async out_river(hook, extra_flag) {
    const buffer = [],
      callname = sys_get_callname(32, 0),
      me = get_chara_talk(0),
      tachyon = get_chara_talk(32);
    hook.arg = !!(await select_action_around_river());
    if (!hook.arg) {
      buffer.push(
        () => tachyon.say_and_wait('哦呀哦呀，钓上来的就当成明天的便当材料吧'),
        () =>
          tachyon.say_and_wait([
            '咕……为什么钓不上来啊……',
            callname,
            '，我说要是这些鱼要是『不小心』喝了水里的『不明物质』死了浮上来，这应该也能算我钓到的吧？不行吗？',
          ]),
      );
      extra_flag.jpy = get_random_value(0, 5);
    } else {
      buffer.push(async () => {
        await tachyon.say_and_wait([
          callname,
          '，你要是不快点跟上的话，明天的药加倍哦',
        ]);
        if (new TachyonLifeMarks().first) {
          await tachyon.say_and_wait(
            '对了，这个地方，之前摆摊的时候……不，什么也没有，没事',
          );
        }
      });
      const edu_marks = new TachyonEduMarks();
      !edu_marks.river &&
        buffer.push(async () => {
          edu_marks.river = 1;
          await tachyon.say_and_wait([callname, '！你看！是鸭子！']);
          await tachyon.say_and_wait('还有那个！是蝴蝶欸！');
          await tachyon.say_and_wait('这里风景好漂亮啊！');
          await era.printAndWait([
            me.get_colored_name(),
            ' 无奈的看着在河堤边上到处乱跑的 ',
            tachyon.get_colored_name(),
            '，',
          ]);
          await era.printAndWait([
            '天真烂漫的神情，比起 ',
            tachyon.get_colored_name(),
            ' 倒不如说更像 ',
            get_chara_talk(52).get_colored_name(),
            '、',
            get_chara_talk(41).get_colored_name(),
            ' 等',
            tachyon.get_uma_sex_title(),
            '，甚至眼睛里的百叶窗都彷佛变成了樱花的花瓣',
          ]);

          await era.printAndWait([
            '事情的起因，一如往常的是因为 ',
            tachyon.get_colored_name(),
            ' 的药剂',
          ]);
          await tachyon.say_and_wait('能够以智力降低为代价提高速度的药');
          await era.printAndWait([
            '听起来是完全不合算的一种药，却被 ',
            tachyon.get_colored_name(),
            ' 毫无犹豫的喝了下去',
          ]);
          await era.printAndWait([
            '其结果，',
            tachyon.get_colored_name(),
            ' 轻松赢下了与 ',
            get_chara_talk(25).get_colored_name(),
            '、',
            get_chara_talk(94).get_colored_name(),
            ' 等人的模拟赛，但代价……',
          ]);
          await tachyon.say_and_wait([
            callname,
            callname,
            '！你看！蜗牛爬的好慢啊！',
          ]);
          await era.printAndWait([
            '怎么说呢，这也算是一种让大脑放松的行为吧，',
            me.get_colored_name(),
            ' 只能继续盯着 ',
            tachyon.get_colored_name(),
            '，不让现在过于天真的',
            tachyon.sex,
            '碰上意外……或者被人所骗',
          ]);
          era.drawLine();
          await era.printAndWait([
            '玩了一天后，总算 ',
            tachyon.get_colored_name(),
            ' 似乎也累了，走起路来都有些摇摇晃晃',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '对着 ',
            me.get_colored_name(),
            ' 张开手',
          ]);
          await tachyon.say_and_wait([callname, '～～背背～～']);
          await era.printAndWait([
            me.get_colored_name(),
            ' 背起了尽情玩了一天的超光速',
            tachyon.sex_code - 1 ? '公主' : '王子',
            '，看来',
            tachyon.sex,
            '真的是累了，一趴上 ',
            me.get_colored_name(),
            ' 的背便直接睡了过去',
          ]);
          await era.printAndWait(
            '这一天折腾的自己也是够累了，回去非要好好休息才行',
          );
          await tachyon.say_and_wait([callname, '……谢谢……']);
          await me.say_and_wait('……');
          await era.printAndWait('或许，偶尔这样一天也不是什么坏事也说不定？');
        });
    }
    await get_random_entry(buffer)();
  }

  async out_shopping(hook) {
    const buffer = [],
      callname = sys_get_callname(32, 0),
      tachyon = get_chara_talk(32);
    hook.arg = await select_action_in_shopping_street();
    switch (hook.arg) {
      case 0:
        buffer.push(
          () =>
            tachyon.say_and_wait([
              '欸？为什么 ',
              callname,
              ' 你这么会夹娃娃啊？干劲还有白蓝回……不，抱歉，我不太明白你在说什么',
            ]),
          () =>
            tachyon.say_and_wait([
              '哦呀，居然有我的娃娃吗？……看起来比本人可爱？等等，',
              callname,
              '，你这句话是什么意思，给我说清楚了',
            ]),
          async () => {
            await tachyon.say_and_wait('啧……一定要这样露出笑容吗？');
            await tachyon.say_and_wait(
              '不，不是我太难搞，是这个大头贴活动本身就有太多不合理之处了吧！…………唉，好吧，3、2、1 Cheese',
            );
          },
        );
        break;
      case 1:
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '抽奖……比起运气这种不牢靠的东西，不是自己靠金钱或其余力量来获得奖品会更为正当吗？',
            ),
          () =>
            tachyon.say_and_wait([
              '欸～～这种可操作性这么高的盲盒抽奖你也要玩吗？',
              callname,
              '？……不，我没什么意见，不过以防万一……能够确认那个抽奖箱里是不是真的有大奖吗？',
            ]),
          async () => {
            await tachyon.say_and_wait(
              '抽奖啊，那我准备一下………好了，来吧。嗯？怎么忽然戴眼镜？',
            );
            await tachyon.say_and_wait(
              '没什么，这只是能够看穿箱子的透视眼镜而已。还是说，你真的觉得我有可能相信运气这种完全不牢靠的东西？',
            );
          },
        );
        break;
      case 2:
        buffer.push(
          async () => {
            await tachyon.say_and_wait('Winning the soul～～');
            await tachyon.say_and_wait([
              '……哼哼，怎么样，',
              callname,
              '？我的歌喉还不错吧？……什么？想听NEXT FRONTIER？或者Special Record？',
            ]);
            await tachyon.say_and_wait(['……', callname, '，你是故意的吗？']);
          },
          async () => {
            await tachyon.say_and_wait(
              'Выходила на берег Катюша,На высокий берег, на крутой……',
            );
            await tachyon.say_and_wait(
              '明明我应该不会俄语才对，不知道为什么唱歌的时候就彷佛忽然看得懂一般……',
            );
            await tachyon.say_and_wait(
              '果然是这样吧，生而知之也是天才的烦恼啊',
            );
          },
          async () => {
            await tachyon.say_and_wait([
              '哦？',
              callname,
              '，你唱的这不是挺不错的吗……',
            ]);
            await tachyon.say_and_wait(
              '不过能不能麻烦你唱到副歌的时候别那么激动呢？',
            );
            await tachyon.say_and_wait(
              '每次你一激动整个包厢里就会亮到完全看不见任何东西了，真亏你这样还能看清屏幕上的歌词啊……',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '欸……为什么你还能配合歌曲氛围变换颜色的，怎么还有七彩霓虹版的……',
            );
            await tachyon.say_and_wait(
              '不是，我是发明者我怎么不知道自己做的药还有这功能？好可怕……',
            );
          },
        );
        break;
      case 3:
        buffer.push(async () => {
          await tachyon.say_and_wait('……这电影院……外观还挺漂亮的啊……');
          era.printButton('「……」', 1);
          await era.input();
          await tachyon.say_and_wait('喂，你倒是说些什么啊……');
          await tachyon.say_and_wait(
            '因为同伴发出的光太亮了导致不被允许进入电影院什么的，就连本爱丽速子都是第一次碰到啊……',
          );
          await tachyon.say_and_wait('说点啥吧，比如道歉什么的');
          era.printButton('「明明是你害得我变成这样的啊！？」', 1);
          await era.input();
          await era.printAndWait('最后两人开开心心回实验室看NetFlOx了。');
        });
    }
    await get_random_entry(buffer)();
  }

  async out_station(hook) {
    return await tachyon_out_station(hook);
  }

  async out_church() {
    return await tachyon_out_church();
  }

  async slave_end() {
    return await tachyon_slave_end();
  }
};
