/**
 * @file 爱丽速子 - 日常
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');

const { degeneration_to_evil } = require('#/i18n/xx-XX/snippets');

module.exports = {
  /**
   * 从地下室逃脱后早安和选中互动的通用对话
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  select_when_escape(tachyon, callname) {
    tachyon.say(['真是神奇啊，', callname, '']);
    tachyon.say([
      '明明，在地下室的时候你的眼眸几乎接近于暗淡无光……现在，却再度绽放出那种将人吸入的光辉了。',
    ]);
    tachyon.say([
      '『我的眼睛如果有任何特别之处，那必然是反射自速子的光芒』？……呵呵，',
      callname,
      '，难得见你这么伶牙俐齿啊……',
    ]);
    tachyon.say([
      '那么……若是我的眼眸再度染上尘埃，就请你再一次为我将其抹去吧。',
    ]);
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  good_morning(tachyon) {
    tachyon.say(
      '你来了啊，那就顺便把门口那三袋垃圾丢了吧……帮助实验？需要你的时候自然会叫你。',
    );
    era.print([tachyon.get_colored_name(), ' 似乎正忙着实验的样子。']);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async office_study(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          '啊，',
          callname,
          '，能麻烦你帮我指导一下这一章吗？',
        ]);
        await tachyon.say_and_wait(
          '什么叫『没想到速子居然也会有不懂的东西』，虽然是在吹捧我，但也吹的过头了，我对自己所知的渺小还是很有自知之明的。',
        );
      },
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
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async office_prepare(tachyon, callname) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '准备？只有弱者才准备，',
        callname,
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
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} call_9 爱丽速子对大和赤骥的称呼
   * @param {PrintedSpan} call_25 爱丽速子对大和赤骥的称呼
   * @param {PrintedSpan} y_call_s 玩家对青云天空的称呼
   * @param {number} relation 爱丽速子对玩家的好感度
   * @param {number} love 爱丽速子对玩家的爱慕
   * @param {number} talk_times 本周的聊天次数
   * @param {number} cook_times 给爱丽速子做饭的次数
   */
  async talk(
    tachyon,
    coffee,
    you,
    callname,
    call_9,
    y_call_s,
    call_25,
    relation,
    love,
    talk_times,
    cook_times,
  ) {
    const buffer = [];
    if (relation < 75) {
      if (talk_times >= 10) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            '……',
            callname,
            '，你今天的实验报告写完了吗？',
          ]);
          await tachyon.say_and_wait(
            '有功夫在这里聊天不如先去把该做的事做完吧',
          );
        });
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '来，这次的药………『味道很怪』？你似乎忘了，你只是一只实验动物而已，哪有实验动物嫌弃药物味道的道理？',
            ),
          async () => {
            await tachyon.say_and_wait([
              '极限……',
              tachyon.uma_sex_title,
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
              coffee.get_colored_name(),
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
              you.get_colored_name(),
              ' 看见 ',
              tachyon.get_colored_name(),
              ' 正在用搅拌机打今天的午餐。',
            ]);
            await tachyon.say_and_wait([
              '食物？没有必要，无论是人或者',
              tachyon.uma_sex_title,
              '，只需要补充最基础的营养值就够了，多余的追求味道不过是白费工夫。',
            ]);
          },
          () =>
            tachyon.say_and_wait(
              '你不过是区区豚鼠而已，努力在协助我实验的同时讨我欢心吧，这样或许我还能在你没有价值的时候大发慈悲。',
            ),
          () => tachyon.say_and_wait('有什么话快说，别浪费我实验的时间。'),
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
              you.get_colored_name(),
              ' 决定还是不去打扰',
              tachyon.sex,
              '的好心情了。',
            ]);
          },
        );
      }
    } else if (relation < 150) {
      if (talk_times >= 10) {
        if (cook_times < 5) {
          await tachyon.say_and_wait([
            callname,
            '，要是没什么事做的话不如去钻研你的料理技术如何，早日做出人能下口的菜来吧',
          ]);
        } else {
          await tachyon.say_and_wait([
            callname,
            '，真的没事的话去把实验器具都清洗一遍吧，或者去洗我的实验服，再不然去丢垃圾，不是有很多你能做的事吗？别在这里发呆了',
          ]);
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              '，今天的药……想逃？哼哼，你怎么会觉得自己有办法从',
              tachyon.uma_sex_title,
              '的手中逃脱呢？',
            ]),
          async () => {
            await tachyon.say_and_wait([
              tachyon.uma_sex_title,
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
            await you.say_and_wait('那不就和现在一样吗？');
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
              call_9,
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
              you.get_colored_name(),
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
          await tachyon.say_and_wait(
            '呼，都怪你忽然跟我搭话，差点把药洒出来了',
          );
          await tachyon.say_and_wait(
            '什么药？呵呵，还记得之前搜集的你的DNA吗？',
          );
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
          await tachyon.say_and_wait(
            '嗯？到底哪个才是真的……这就任君想象了～～',
          );
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
          await tachyon.say_and_wait(
            '呵呵，对研究者而言，维持可不是什么好话啊',
          );
          await tachyon.say_and_wait('只想着维持是无法出现突破的……');
          await tachyon.say_and_wait('没错……但是……');
          await tachyon.say_and_wait(
            '为什么呢，我忽然觉得，现在的生活维持下去也不错……',
          );
          await tachyon.say_and_wait('为什么呢……');
        },
      );
    } else if (relation > 375 && love < 50) {
      buffer.push(async () => {
        await tachyon.say_and_wait(['哦，来了啊 ', callname]);
        await tachyon.say_and_wait('今天的实验……嗯？怎么了');
        await tachyon.say_and_wait('靠的太近了？是吗？我倒是觉得刚刚好来着');
        await tachyon.say_and_wait('还是说，你害羞了？');
      });
    } else if (talk_times >= 10) {
      buffer.push(() =>
        tachyon.say_and_wait([
          callname,
          '，虽然我不介意和你多聊点，但你应该还有其他该做的事吧？',
        ]),
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            callname,
            '！今天的药你要选择右边这瓶绿色的，还是左边这瓶红色的呢',
          ]);
          await tachyon.say_and_wait(
            '都不要？我就知道，果然是第三选择的彩虹色对吧！',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '……明天的便当']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 尝试告诉 ',
            tachyon.get_colored_name(),
            ' 明天是假日',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '欸……',
            callname,
            ' 啊，就算是休息日，人也不能不吃饭的哦',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '用一种担忧的眼神看着 ',
            you.get_colored_name(),
          ]);
          await you.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 忽然理解了，这个情况说什么都是没用的，只能答应了给',
            tachyon.sex,
            '做便当',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([callname, '～～今天的衣服也拜托了']);
          await tachyon.say_and_wait(
            '哈？自己洗？你以为我的时间是大风吹来的吗？',
          );
          await tachyon.say_and_wait('再说，这不也是对你的福利吗～～');
          await tachyon.say_and_wait('这可是我穿过的贴身衣物啊～～');
          await tachyon.say_and_wait('好臭！？喂！也太失礼了！');
        },
        async () => {
          await tachyon.say_and_wait('哈？都不去上课成绩会不会有问题？');
          await tachyon.say_and_wait([
            callname,
            ' 啊，你要知道，应试教育是为了将庸人教育成才，这种东西对天生之才的我而言当然是没有必要的',
          ]);
          await tachyon.say_and_wait([
            '『所以考试不去也没关系吗？』？你在说什么呢，',
            callname,
            '，考试不是明天吗……今天！？',
          ]);
        },
        async () => {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 忽然反常的一言不发将身体靠在你身上',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '，怎么了吗？']);
          era.println();
          await you.say_and_wait('没什么');
          await era.printAndWait([
            '在 ',
            you.get_colored_name(),
            ' 回答之后，',
            tachyon.sex,
            '继续靠在 ',
            you.get_colored_name(),
            ' 身上',
          ]);
          await era.printAndWait(
            '两人之间没有对话，就这样无言的度过了一段时间',
          );
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '？来的正好，快帮我把这些东西誊写到防燃的特殊纸上！',
          ]);
          await tachyon.say_and_wait([
            call_25,
            ' 那家伙！不过就是拿',
            tachyon.sex,
            '做了次实验，居然威胁要把我的实验资料全烧了！',
          ]);
          await tachyon.say_and_wait([
            '还好我好说歹说让',
            tachyon.sex,
            '留到下午三点再烧，再这之前得快点誊上去才行！',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 急急忙忙的被 ',
            tachyon.get_colored_name(),
            ' 赶上桌开始加入誊写作业',
          ]);
          await era.printAndWait([
            '但 ',
            you.get_colored_name(),
            ' 内心涌现一个疑惑，一般情况要烧真的会这样事先提醒吗……？',
          ]);
          era.println();
          await era.printAndWait(
            '果不其然，下午三点后，研究资料并没有燃烧起来，实验室一如既往的和平，',
          );
          await era.printAndWait([
            '受到伤害的只有花了半天时间誊写了一屋子研究资料的 ',
            you.get_colored_name(),
            ' 和 ',
            tachyon.get_colored_name(),
            ' 的手',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([call_9, ' 那孩子……不是挺可爱的吗？']);
          await tachyon.say_and_wait([
            '不知道为什么看到',
            tachyon.sex,
            '的时候总有种类似于父性一般的感情涌现',
          ]);
          if (tachyon.sex_code - 1) {
            era.println();
            await you.say_and_wait('难道不是母性吗？');
          }
          era.println();
          if (era.get('cflag:0:种族') > 0) {
            await tachyon.say_and_wait([
              '明明已经成为',
              you.uma_sex_title,
              '了还不懂吗？',
              callname,
              ' 真是迟钝呢',
            ]);
            era.println();
            await you.say_and_wait('……听不懂你在说什么');
          } else {
            await tachyon.say_and_wait([
              '不是……这种感觉很难说明，等你变成',
              tachyon.uma_sex_title,
              '大概就能懂了吧',
            ]);
            era.println();
            await you.say_and_wait([
              '不要说的好像我总有一天会变成',
              tachyon.uma_sex_title,
              '一样啊！？',
            ]);
          }
        },
        async () => {
          await tachyon.say_and_wait('sky君真是个好孩子啊……');
          era.println();
          await you.say_and_wait(['嗯？原来速子和 ', y_call_s, ' 认识吗']);
          era.println();
          await tachyon.say_and_wait('不……我说的和你说的大概不是同个sky君');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 歪着头看向 ',
            tachyon.get_colored_name(),
            '，学园里还有其他sky吗',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '……不，算了，',
            callname,
            '，当我没说吧',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * 聊天 - 低干劲膝枕
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async talk_hizamakura(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, '，我累了，借我躺下']);
    era.printButton('同意', 1);
    era.printButton('拒绝', 2);
    await era.input();
    await era.printAndWait([
      '还没等 ',
      you.get_colored_name(),
      ' 内心做出选项，',
      tachyon.get_colored_name(),
      ' 便已经躺在 ',
      you.get_colored_name(),
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
      you.get_colored_name(),
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
      you.get_colored_name(),
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
      you.get_colored_name(),
      ' 的膝盖上时，',
      tachyon.sex,
      '舒展的眉间',
    ]);
    await era.printAndWait([
      '……要是这样能让',
      tachyon.sex,
      '好睡一些的话，偶尔这么做一次大概也无妨吧',
    ]);
  },
  /**
   * 聊天 - 春季天皇赏后
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
   */
  async talk_tenn_spr(tachyon, you, tenn_spr) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 想与 ',
      tachyon.get_colored_name(),
      ' 聊 ',
      tenn_spr,
      ' 时的事，但',
      tachyon.sex,
      '马上就跑不见了',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} cook_times 做饭次数
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async office_cook(tachyon, coffee, you, callname, cook_times, plan_b) {
    if (era.get('relation:32:0') <= 150 && cook_times === 0) {
      await tachyon.say_and_wait('要做饭给我吃？难以入口的东西我拒绝');
      await era.printAndWait('真是挑剔的食客啊……看来需要再精进一下厨艺再说了');
    } else {
      const buffer = [];
      if (!plan_b) {
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
              await you.say_and_wait('……');
              await era.printAndWait([
                you.get_colored_name(),
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
                you.get_colored_name(),
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
      } else {
        buffer.push(
          async () => {
            await era.printAndWait([
              '原本 ',
              you.get_colored_name(),
              ' 和 ',
              tachyon.get_colored_name(),
              ' 说好了两人轮流做便当，',
            ]);
            await era.printAndWait([
              '但最近由于 ',
              coffee.get_colored_name(),
              ' 的训练量增多导致 ',
              you.get_colored_name(),
              ' 没什么时间能够停下来做便当，',
            ]);
            await era.printAndWait([
              '因此最近几乎都是 ',
              tachyon.get_colored_name(),
              ' 做的便当，而 ',
              you.get_colored_name(),
              ' 负责吃，并且在吃的时候与',
              tachyon.sex,
              '交流信息。',
            ]);
            era.printButton('「好好吃！」', 1);
            await era.input();
            await tachyon.say_and_wait('呵呵，还不赖吧');
            await era.printAndWait([
              '相比起 ',
              you.get_colored_name(),
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
            await era.printAndWait([you.get_colored_name(), ' 不得而知。']);
          },
          () =>
            era.printAndWait([
              tachyon.get_colored_name(),
              ' 正常吃下了 ',
              you.get_colored_name(),
              ' 做的便当后便回去研究能够发挥 ',
              coffee.get_colored_name(),
              ' 潜力的药剂了。',
            ]),
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
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
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async office_rest(tachyon, you, callname) {
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
          you.get_colored_name(),
          ' 从背后抱住了坚持在实验桌前的 ',
          tachyon.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([tachyon.sex, '的身体颤抖了一下。']);
        await tachyon.say_and_wait(['……', callname, '，就算色诱也没用的哦。']);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 强硬的把倔强坐在实验桌前的',
          tachyon.sex,
          '拉了起来。',
        ]);
      }
    } else {
      const buffer = [
        () =>
          tachyon.say_and_wait(['累了累了，', callname, '，快泡杯红茶过来。']),
        () =>
          era.printAndWait([
            you.get_colored_name(),
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
      ];
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async office_game(tachyon) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '啧……这个机体也太慢了，完全跟不上',
        tachyon.uma_sex_title,
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
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async school_atrium(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(async () => {
        await tachyon.say_and_wait('把苦恼对着树洞喊出来？这样又能改变什么。');
        await tachyon.say_and_wait('……无聊，比起抱怨，还不如努力改变现状。');
        await tachyon.say_and_wait(
          '『喊出来内心的压力会轻松很多』？都跟在我身边了，你怎么还会有压力？等等，那个苦笑是什么意思。',
        );
      });
      if (
        era.get('love:32') > 80 &&
        tachyon.sex_code !== 1 &&
        you.sex_code > 0
      ) {
        buffer.push(
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' 带着 ',
              tachyon.get_colored_name(),
              ' 来到枯树洞前，',
              tachyon.sex,
              '自觉的趴在了枯树洞边上。',
            ]);
            await era.printAndWait([
              '但今天要玩的不是这个，',
              you.get_colored_name(),
              ' 摇了摇头，靠上了 ',
              tachyon.get_colored_name(),
              ' 的肩膀。',
            ]);
            await you.say_and_wait(
              '既然是用来发泄牢骚和压力的，那么你也喊些不甘心的事吧。',
            );
            await era.printAndWait([
              '说完后 ',
              you.get_colored_name(),
              ' 拍了拍',
              tachyon.sex,
              '的屁股，暗示 ',
              you.get_colored_name(),
              ' 想听的是什么。',
            ]);
            await era.printAndWait([
              '脑筋动的很快的天才',
              tachyon.uma_sex_title,
              '瞬间便明白了 ',
              you.get_colored_name(),
              ' 的意思。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              '责怪的看了 ',
              you.get_colored_name(),
              ' 一眼，然后对着枯树洞开始喊出『不甘』。',
            ]);
            await tachyon.say_and_wait([
              '每次乳头被 ',
              callname,
              ' 捏一下就会高潮好不甘心❤️',
            ]);
            await tachyon.say_and_wait([
              '小穴杂鱼到 ',
              callname,
              ' 随便摸一下就出水好不甘心❤️',
            ]);
            await tachyon.say_and_wait([
              '只要闻到 ',
              callname,
              ' 的味道脑袋里就会变成只剩做爱的痴女好不甘心❤️',
            ]);
            await tachyon.say_and_wait([
              '只要含住肉棒就会想要变成 ',
              callname,
              ' 一辈子的飞机杯好不甘心❤️',
            ]);
            await tachyon.say_and_wait([
              '明明被命令了忍住但每次 ',
              callname,
              ' 射精时总是忍不住吞下去导致被惩罚好不甘心❤️',
            ]);
            await tachyon.say_and_wait(
              '每次做爱都要靠药，结果还是战胜不了肉棒大人好不甘心❤️',
            );
            await tachyon.say_and_wait(
              '每次都没有让肉棒大人满足自己就先去了好不甘心❤️',
            );
            await era.printAndWait([
              '每次喊完 ',
              you.get_colored_name(),
              ' 就会拍',
              tachyon.sex,
              '的屁股一下作为奖励，打完屁股之后',
              tachyon.sex,
              '便会摇晃的更起劲，喊出更加劲爆的『不甘』话语来。',
            ]);
            await era.printAndWait([
              '最后，在周围',
              tachyon.uma_sex_title,
              '羞红的眼神中，',
              you.get_colored_name(),
              ' 牵着双腿颤抖已经走不动路的 ',
              tachyon.get_colored_name(),
              ' 回到了实验室。',
            ]);
          },
          async () => {
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 趴在枯树洞上无聊的望着枯树洞的里面。',
            ]);
            await era.printAndWait([
              '看着',
              tachyon.sex,
              '在外面翘着的臀部，',
              you.get_colored_name(),
              ' 有些按耐不住自己的情欲了。',
            ]);
            await tachyon.say_and_wait([callname, '……咿❤️']);
            await era.printAndWait([
              you.get_colored_name(),
              ' 拍上了',
              tachyon.sex,
              '俏稚的臀部，隔着布料的弹性触感将 ',
              you.get_colored_name(),
              ' 拍下去的力道反弹回 ',
              you.get_colored_name(),
              ' 的手掌。',
            ]);
            await tachyon.say_and_wait([
              '……',
              callname,
              '，这里回音……很大的❤️……回去，回去再做，好吗❤️',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' 没有理会',
              tachyon.sex,
              '的求饶，用力拍了一下。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              '连忙按住自己的嘴，却还是有声音忍不住发了出来。',
            ]);
            await tachyon.say_and_wait('呜咿咿❤️❤️❤️');
            await tachyon.say_and_wait('唔……❤️');
            await tachyon.say_and_wait('呜呜……❤️');
            await tachyon.say_and_wait('等，不能戳进去喔喔喔喔❤️❤️❤️');
            await era.printAndWait([
              '最后，',
              you.get_colored_name(),
              ' 将瘫软在枯树洞上，脸色潮红的 ',
              tachyon.get_colored_name(),
              ' 抱在怀中，带回训练员室。',
            ]);
            await era.printAndWait([
              '路上的学生都不由得对 ',
              you.get_colored_name(),
              ' 们行注目礼。',
            ]);
            await era.printAndWait([
              '对 ',
              you.get_colored_name(),
              ' 而言，这种视线早就习惯了。',
            ]);
            await era.printAndWait([
              '至于怀中的 ',
              tachyon.get_colored_name(),
              '……不顾旁人眼光正用瘫软的双手不断索求拥抱的',
              tachyon.sex,
              '，',
            ]);
            await era.printAndWait([
              '在满足',
              tachyon.sex,
              '之前，大概都无瑕去顾虑这些事了吧。',
            ]);
          },
        );
      }
      if (era.get('love:32') > 75) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            '唔……',
            callname,
            ' ❤️……在人家用来发泄情绪的树洞前做这种事……要是被人听到怎么办❤️',
          ]);
          await tachyon.say_and_wait('发泄性欲也是发泄？');
          await tachyon.say_and_wait('真是❤️……要是被人发现我可不管❤️');
        });
      }
      await get_random_entry(buffer)();
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 靠在枯树洞的边上，彷彿想对着里面喊些什么，最后犹豫了许久还是放弃了',
      ]);
      await era.printAndWait([
        '看着',
        tachyon.sex,
        '的模样，',
        you.get_colored_name(),
        ' 不知为何感到了悲伤和一丝的安心',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async school_rooftop(tachyon, coffee, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(
        () => tachyon.say_and_wait('啊，便当放着就好，我做完风速测量就吃。'),
        async () => {
          await tachyon.say_and_wait([
            '在天台吃便当啊……这么说起来，',
            callname,
            ' 你知道天台原本是不允许人进入的吗？',
          ]);
          await you.say_and_wait('欸，有这回事？');
          await tachyon.say_and_wait([
            '是的哦，听说是有某名',
            tachyon.uma_sex_title,
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
          await you.say_and_wait('所以果然是你啊！');
        },
        async () => {
          await era.printAndWait([
            you.get_colored_name(),
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
    } else {
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
            you.get_colored_name(),
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
            you.get_colored_name(),
            ' 忽然感到一阵害怕',
          ]);
          await era.printAndWait([
            '心中的害怕驱使 ',
            you.get_colored_name(),
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
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} jpy 钓鱼卖出的马币，0表示没钓到鱼
   */
  async o_r_fishing(tachyon, callname, jpy) {
    if (jpy > 0) {
      await tachyon.say_and_wait('哦呀哦呀，钓上来的就当成明天的便当材料吧');
    } else {
      await tachyon.say_and_wait([
        '咕……为什么钓不上来啊……',
        callname,
        '，我说要是这些鱼要是『不小心』喝了水里的『不明物质』死了浮上来，这应该也能算我钓到的吧？不行吗？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} first2shop 是否没去过小卖部
   */
  async o_r_walking(tachyon, callname, first2shop) {
    await tachyon.say_and_wait([
      callname,
      '，你要是不快点跟上的话，明天的药加倍哦',
    ]);
    if (first2shop) {
      await tachyon.say_and_wait(
        '对了，这个地方，之前摆摊的时候……不，什么也没有，没事',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_arcade(tachyon, callname) {
    const buffer = [
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
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_drawing(tachyon, callname) {
    const buffer = [
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
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_ktv(tachyon, callname) {
    const buffer = [
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
        await tachyon.say_and_wait('果然是这样吧，生而知之也是天才的烦恼啊');
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
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async o_s_movie(tachyon) {
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
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async out_church(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (plan_b) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('……神明啊');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 无趣的看着神社，不知道在想些什么',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('如果……神明，那我……');
          await era.printAndWait([tachyon.get_colored_name(), ' 喃喃自语着']);
        },
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '我说神明什么的，真的存在吗？不，我知道三女神，但……说到底，三女神也就是掌握了更强悍能力的凡……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' 连忙堵住了 ',
            tachyon.get_colored_name(),
            ' 的嘴。',
          ]);
        },
        () =>
          tachyon.say_and_wait([
            '喂喂，',
            callname,
            '，比起神明，我们还是快回去实验吧',
          ]),
        () =>
          tachyon.say_and_wait(
            '大吉还是大凶？无妨，那种事不是神明决定，而是我自己造就的',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} cook_times 做饭次数
   */
  async o_s_restaurant(tachyon, you, callname, cook_times) {
    if (cook_times < 10) {
      await tachyon.say_and_wait(
        '……难吃，全是料理包预制菜，调味全靠香精和化学药剂，你是嫌平常喝的药还不够多吗？竟然让我吃这种东西',
      );
      await era.printAndWait([
        '菜一上来就被 ',
        tachyon.get_colored_name(),
        ' 从头批评到尾，原本想说带',
        tachyon.sex,
        '出来散散心的，这下不是让',
        tachyon.sex,
        '心情更差了吗。',
      ]);
      await tachyon.say_and_wait('不过……这个甜点倒是不错');
      await era.printAndWait('欸……那个甜到牙痛的布丁？真的假的');
      await era.printAndWait([
        you.get_colored_name(),
        ' 似乎有些察觉 ',
        tachyon.get_colored_name(),
        ' 的口味了',
      ]);
    } else {
      const buffer = [
        async () => {
          await tachyon.say_and_wait([
            '我说 ',
            callname,
            '……你带我出来吃饭我是挺感激的，但特意出来吃做的连你都不如的菜到底有什么意义？',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 困惑的看着 ',
            you.get_colored_name(),
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            '味道不错，不过比起 ',
            callname,
            ' 做的总觉得……缺了些什么……嗯，没错，不够甜',
          ]);
          await tachyon.say_and_wait([
            '什么叫再吃糖要糖尿病了，别担心别担心，',
            tachyon.uma_sex_title,
            '的代谢能力会想办法的',
          ]);
        },
        async () => {
          await era.printAndWait(
            '红烧肉、糖醋排骨、和果子、加满致死量砂糖的红茶，最后收尾是蜂蜜布丁',
          );
          await tachyon.say_and_wait([callname, '？你不吃吗？']);
          await you.say_and_wait('……看着就牙痛，还是算了');
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_dating(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait(
          '嗯？一般人不会把出门采买实验用具称为约会？',
        );
        await tachyon.say_and_wait([
          callname,
          '，约会这个词是极为抽象的，意味着什么，只要你觉得这是约会，那么这就是约会，明白了吗？',
        ]);
        await tachyon.say_and_wait([
          '能和我这样的超绝美',
          tachyon.teen_sex_title,
          '出门逛街，这就已经可以等同于约会了吧。',
        ]);
      },
      async () => {
        await tachyon.say_and_wait('逛街、喝茶、聊天、吃东西');
        await tachyon.say_and_wait('这就是一般来说的约会吗？……感觉，好无趣啊');
      },
    ];
    if (era.get('relation:32:0') < 50) {
      buffer.push(() =>
        tachyon.say_and_wait(
          '约会对实验助手兼实验品的干劲提升程度分析吗？嗯……可以尝试当成研究课题',
        ),
      );
    } else if (era.get('relation:32:0') < 225) {
      buffer.push(() =>
        tachyon.say_and_wait([
          '约会？……',
          callname,
          '，一般科学家是不会与自己的实验动物约会的，你明白我的意思吗？',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_shopping(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          '我说 ',
          callname,
          '……衣服什么的网购不就好了，人类的衣服跟',
          tachyon.uma_sex_title,
          '的衣服又有什么关系',
        ]);
        await tachyon.say_and_wait('尾巴的地方没孔所以每次掀衣服都能看到？');
        await tachyon.say_and_wait(['………这是性骚扰了，', callname, '。']);
      },
      async () => {
        await tachyon.say_and_wait('厨具？那种东西买那么多干嘛……');
        await tachyon.say_and_wait(
          '欸，可以做这么多菜的吗……咕……如果偷偷算在实验经费里……',
        );
        await tachyon.say_and_wait(
          '没关系的，你买吧，不用害怕，我来填的话应该可以想办法申请成正当实验用具……大概',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '免费试喝……免费试用，果然最好的推销还是『免费』啊，明明知道只是卖东西的手段，',
        );
        await tachyon.say_and_wait([
          '但听见免费就会自然而然的忘掉对陌生人给的食物的警惕……',
          callname,
          '，我在想，免费试喝药剂！……不行吗？',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * 回合开始 - 低好感，做饭次数 0-4 次，连续 2 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async ws_cook02(tachyon, you) {
    await era.printAndWait([
      '午休时间，不知为何 ',
      tachyon.get_colored_name(),
      ' 故意将',
      tachyon.sex,
      '的那台搅拌机摆在实验桌上，将功率调到最大，发出了极大的声音开始打',
      tachyon.sex,
      '的「午餐」',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 忽然想到，',
      you.get_colored_name(),
      ' 上周似乎因为太忙导致忘记给',
      tachyon.sex,
      '做便当了……这周一定要记得啊',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 0-4 次，连续 3 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook03(tachyon, you, callname) {
    await tachyon.say_and_wait([
      callname,
      '，相信你也知道为山九韧，功亏一篑的道理，',
    ]);
    await tachyon.say_and_wait(
      '换句话说，行百里者半九十，只有坚持不懈的人才能获得成功，',
    );
    await tachyon.say_and_wait(
      '在赛场的世界也是如此，属性会拉、技能会鸽，但你在养马过程中学到的知识不会欺骗你，',
    );
    await tachyon.say_and_wait(
      '没错，支持卡比别人差又怎么样，6R也能养出SS等级的马出来，一切都只是努力和坚持的问题……',
    );
    era.println();
    await era.printAndWait([
      '今天一进入训练员室，',
      tachyon.get_colored_name(),
      ' 就开始说些不明所以的长篇大论',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '也就是说，我想说的是…………努力这点，在做饭上也是一样的',
    );
    era.println();
    await era.printAndWait([
      '听见这句后，',
      you.get_colored_name(),
      ' 才忽然反应了过来，原来如此，这两周在忙的事情实在太多，',
      you.get_colored_name(),
      ' 又一次忘记了，不行，这次一定要记得……',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 0-4 次，连续 4 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook04(tachyon, you, callname) {
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([
      '今天一来到实验室 ',
      you.get_colored_name(),
      ' 就发觉 ',
      tachyon.get_colored_name(),
      ' 的心情非常不好，而且，',
      you.get_colored_name(),
      ' 知道原因为何',
    ]);
    era.println();
    await era.printAndWait(['原因在 ', you.get_colored_name()]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 已经三周没有给 ',
      tachyon.get_colored_name(),
      ' 做过饭了',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 慌忙向',
      tachyon.sex,
      '表示，自己这几周真的很忙，抽不出任何时间来做……这种连 ',
      you.get_colored_name(),
      ' 自己听了都不信的谎言',
    ]);
    await era.printAndWait([
      '或是纯粹忘记，或是把时间都用在培育其他',
      tachyon.uma_sex_title,
      '上了，',
    ]);
    await era.printAndWait(
      '或是单纯想看看到底还有多少不同的台词，「你」的时间要多少就有多少',
    );
    await era.printAndWait([
      '但此时，',
      you.get_colored_name(),
      ' 还是只能讲着这种蹩脚的借口来请求原谅',
    ]);
    era.println();
    await tachyon.say_and_wait('…………没什么需要我原谅的');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 瞄了 ',
      you.get_colored_name(),
      ' 一眼后说道',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '这也是属于你的一种可能性，也是一个很好的研究样本，我不会否定你的努力，',
    );
    await tachyon.say_and_wait(
      '同理，我也不会唾弃你的怠惰，无论如何都是你自己做出的选择，与我没有任何一点关系',
    );
    era.println();
    await era.printAndWait('是啊，硬要说的话');
    await era.printAndWait([
      tachyon.sex,
      '终于回过头，这是',
      tachyon.sex,
      '今天以来第一次看着 ',
      you.get_colored_name(),
    ]);
    await era.printAndWait([tachyon.sex, '的眼神没有失望、厌恶，或是生气']);
    await era.printAndWait(
      '而是一种难以言喻的感情，如果真的要用一种感情来形容的话，那大概是————无聊',
    );
    era.println();
    await tachyon.say_and_wait('你的可能性，也就只有这种程度而已啊');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '以看待没能达成实验目标的实验动物一般的眼神看着 ',
      you.get_colored_name(),
      '，然后，开口说道',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '继续努力提升你的价值吧，',
      callname,
      '……不然，要是哪天我无聊了说不定就把你抛弃了',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 5 次以上，连续 2 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async ws_cook12(tachyon, you) {
    await tachyon.say_and_wait('唔……');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 今天看起来有些浮躁的样子',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 紧张的问',
      tachyon.sex,
      '发生什么事了',
    ]);
    era.println();
    await tachyon.say_and_wait('…………哼，没什么');
    era.println();
    await era.printAndWait([tachyon.sex, '赌气般的说了没事']);
    await tachyon.say_and_wait('咕～～～～');
    await era.printAndWait([
      '就在此时，非常凑巧的，',
      tachyon.sex,
      '的肚子发出了响亮的一声',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await you.say_and_wait('……………');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 忽然想起，',
      you.get_colored_name(),
      ' 上周似乎完全忘记给',
      tachyon.sex,
      '做便当了',
    ]);
    await era.printAndWait('难道说……');
    era.println();
    await tachyon.say_and_wait(
      '…………反正，食物只用维持最基本的活动所需能量就够了',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '仍在嘴硬着，',
      you.get_colored_name(),
      ' 连忙向',
      tachyon.sex,
      '道歉并答应今天一定不会忘记了',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 5 次以上，连续 3 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook13(tachyon, you, callname) {
    await tachyon.say_and_wait(['哼，', callname, '，今天的药来了']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 忽然闯进了训练员室，给 ',
      you.get_colored_name(),
      ' 灌了瓶颜色奇怪——不，这点而言可以说是一如往常——的药',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 喝下去后没过多久便陷入了睡眠',
    ]);
    await era.printAndWait([
      '在睡梦中，',
      you.get_colored_name(),
      ' 彷佛正行走在沙漠之中，已经几天几夜没吃没喝了，',
    ]);
    await era.printAndWait([
      '忽然画面一转，在梦中，',
      you.get_colored_name(),
      ' 被不知道谁不停的塞着被打成烂泥的营养素，虽然觉得难以下咽，',
    ]);
    await era.printAndWait([
      '但想到先前在沙漠的梦境，',
      you.get_colored_name(),
      ' 还是不得不将其吞了下去…………',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 从梦中惊醒，眼前是 ',
      tachyon.get_colored_name(),
      ' 那得意的脸庞',
    ]);
    era.println();
    await tachyon.say_and_wait(['怎么，做恶梦了吗？', callname]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 苦笑一声，大概知道这个药的意思了，连忙保证这周一定会记得 ',
      tachyon.get_colored_name(),
      ' 的便当',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 5 次以上，连续 4 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} amazon 菱亚马逊
   * @param {CharaTalk} tama 玉藻十字
   * @param {CharaTalk} akebono 菱曙
   * @param {CharaTalk} taste 秋川弥生/北方风味
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook14(tachyon, amazon, tama, akebono, taste, you, callname) {
    await era.printAndWait([
      '今天一早 ',
      you.get_colored_name(),
      ' 来到学园时便发现了不对劲',
    ]);
    await era.printAndWait('整个学园都被一种浮躁的气氛所包围');
    await era.printAndWait(
      '这种气氛到了午休时间增长到了极限，在午餐时间的食堂爆发到了极限',
    );
    era.println();
    await you.say_as_passer_by_and_wait('路人训练员A', [
      '所有',
      tachyon.uma_sex_title,
      '都开始暴走了！',
      tachyon.couple_title,
      '不知道为什么忽然开始缠着自己的训练员要便当！',
    ]);
    await you.say_as_passer_by_and_wait('路人训练员A', [
      '不是亲手做的就不行！天杀的，',
      tachyon.couple_title,
      '到底是怎么分辨出便当是不是训练员做的！',
    ]);
    era.println();
    await era.printAndWait([
      '某龙套训练员不知为何在闯进训练员室后彷佛在解说现状般的说完了上述那些后，被门外闯入的他的负责',
      tachyon.uma_sex_title,
      '拖了出去',
    ]);
    era.printButton('「到，到底……怎么回事……」', 1);
    await era.input();
    await tachyon.say_and_wait('哦呀，有人问怎么回事了吗？');
    await era.printAndWait([
      '忽然，从 ',
      you.get_colored_name(),
      ' 身后传来了一个熟悉的声音，然而 ',
      you.get_colored_name(),
      ' 甚至不知道',
      tachyon.sex,
      '是什么时候闯进训练员室来的',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '既然你诚心诚意的发问了，那我就大发慈悲的告诉你',
    );
    await tachyon.say_and_wait([
      '为了贯彻',
      tachyon.uma_sex_title,
      '与便当的邪恶，可爱又迷人的疯狂科学家',
    ]);
    await tachyon.say_and_wait([
      '太长了以下省略，总之就是我爱丽速子。好啦，',
      callname,
      '，乖乖把便当交出来吧',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 靠在 ',
      you.get_colored_name(),
      ' 坐着的椅子椅背上，朝着坐在椅子上的 ',
      you.get_colored_name(),
      ' 低下头，露出了一副侵略性极强的笑容',
    ]);
    era.printButton('「你又干了什么」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '哦呀，真过分，怎么这就怀疑到我身上了，说不定我也是受害者呢',
    );
    era.println();
    await era.printAndWait([tachyon.sex, '用可怜兮兮的语气说道']);
    era.printButton('「因为你刚刚自己承认了」', 1);
    await era.input();
    await tachyon.say_and_wait('欸……好像，确实有这么回事啊');
    await era.printAndWait('那种小细节别在意啦');
    await era.printAndWait([tachyon.sex, '挥了挥袖子说道']);
    era.println();
    await tachyon.say_and_wait(['重点是，', callname, '，把你的便当交出来吧']);
    era.printButton('「你以为用这种强迫的方式我会乖乖就范吗？」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '…………呵呵，当然了，最终你必然会乖乖将便当奉上的',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 露出了神秘的笑容，',
      you.get_colored_name(),
      ' 不由自主的感到有些心虚',
    ]);
    await era.printAndWait([
      '今天 ',
      you.get_colored_name(),
      ' 确实做了 ',
      tachyon.get_colored_name(),
      ' 的便当，但今天工作太忙，一不小心真的忘记了',
    ]);
    await era.printAndWait(
      '但不管怎么说，绝对不能在这里让步，这是为了身为训练员的尊严！是为了自由！为了……',
    );
    era.println();
    await taste.say_and_wait([
      '宣布！由于某种未知因素的影响，学园内所有',
      tachyon.uma_sex_title,
      '陷入了对训练员亲手制作便当的不明执着，',
    ]);
    await taste.say_and_wait([
      '请各位训练员立刻开始制作自己爱马的便当，不会做饭的训练员可向秘书长、家政教师和 ',
      tama.get_colored_name(),
      '、',
      amazon.get_colored_name(),
      ' 或 ',
      akebono.get_colored_name(),
      ' 寻求协助',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '看着满脸得意的 ',
      tachyon.get_colored_name(),
      '，',
      you.get_colored_name(),
      ' 不由得露出苦笑',
    ]);
    await era.printAndWait([
      '果然还是赢不过',
      tachyon.sex,
      '啊，',
      you.get_colored_name(),
      ' 只能乖乖的交出了便当',
    ]);
  },
  /**
   * 回合开始 - 高好感，做饭次数 10 次以上，连续 2 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} cook_times 做饭次数
   */
  async ws_cook22(tachyon, you, callname, cook_times) {
    await era.printAndWait([
      '午休时间，当 ',
      you.get_colored_name(),
      ' 正在打数据，训练员室的门被撞开了',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '！我的饭呢！快点快点！']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 一闯进来，就扑上了桌子开始不停滚动',
    ]);
    era.println();
    await era.printAndWait('危险危险');
    await era.printAndWait([
      you.get_colored_name(),
      ' 连忙把桌上的计算机收起，避免被 ',
      tachyon.get_colored_name(),
      ' 撞掉到地上',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '！你已经一周没给我做便当了！我都快饿死了，快点，我的便当呢！',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 甩着袖子，生气的在 ',
      you.get_colored_name(),
      ' 面前跺着脚，吹弹可破的脸颊彷佛河豚一般鼓了起来，虽然说',
    ]);
    era.printButton('「不是给你做了吗？」', 1);
    await era.input();
    if (cook_times < 20) {
      await tachyon.say_and_wait('那种一看就没用心做的能叫便当吗！？');
    } else {
      await tachyon.say_and_wait(
        '虽然吃不出差别……但有种直觉告诉我你是敷衍着做的',
      );
    }
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('你现在在想『这个家伙好麻烦啊』对吧？');
    await you.say_and_wait('……');
    await you.say_and_wait('怎么被猜到了', true);
    era.println();
    await tachyon.say_and_wait('总之明天一定要看到便当！不然你一定会后悔的');
  },
  /**
   * 回合开始 - 高好感，做饭次数 10 次以上，连续 3 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook23(tachyon, you, callname) {
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 已经两周没有对 ',
      you.get_colored_name(),
      ' 做任何实验了',
    ]);
    await era.printAndWait([
      '第一周说实话，',
      you.get_colored_name(),
      ' 完全没有任何不舍，甚至还挺高兴的，',
    ]);
    await era.printAndWait([
      '毕竟每天都还是能看见 ',
      tachyon.get_colored_name(),
      '，一切都很正常，只是',
      tachyon.sex,
      '不会对 ',
      you.get_colored_name(),
      ' 做实验了而已',
    ]);
    await era.printAndWait([
      '但第二周 ',
      you.get_colored_name(),
      ' 开始有些感到不对劲，斯德哥尔摩症候群……',
    ]);
    await era.printAndWait([
      '倒也不是如此，只是担心',
      tachyon.sex,
      '的状况，以及某种不祥的预感',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' 到了',
      tachyon.sex,
      '的实验室前，敲了敲门，门内没有回复',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 感觉事态不妙，直接闯了进去',
    ]);
    era.println();
    await era.printAndWait([
      '明明看上去像是 ',
      tachyon.get_colored_name(),
      '，却不知为何变成了两头身，变成了某种看上去有些可爱的生物，',
    ]);
    await era.printAndWait(
      '背后的尾巴变得比较圆润肥大，看上去就像……狸猫的尾巴？',
    );
    await era.printAndWait([
      '欸？？怎么回事？？这个是 ',
      tachyon.get_colored_name(),
      ' 吗？？？',
    ]);
    era.println();
    await era.printAndWait('…………原来如此');
    await era.printAndWait([you.get_colored_name(), ' 完全理解了一切']);
    await era.printAndWait(
      '没有错，那些来路不明的药剂，看待实验品的非人态度，还有现在总算露出的尾巴',
    );
    await era.printAndWait([
      '没错，',
      tachyon.get_colored_name(),
      ' 从一开始就是狸猫变的！',
    ]);
    era.println();
    await era.printAndWait('…………不，先把这种错乱下的胡思乱想推到一旁吧');
    await era.printAndWait(
      '不知为何周围开始响起了奇怪的BGM，似乎是アメリアの遗言，十分美妙的音乐，与此时凄凉的场景形成了鲜明的对比',
    );
    await era.printAndWait([
      '慌忙之下，',
      you.get_colored_name(),
      ' 想到了之前 ',
      tachyon.get_colored_name(),
      ' 说过关于便当的事，连忙拿出原本留给自己的便当',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([callname, '？你在干嘛呢？']);
    await era.printAndWait([
      '清醒过来的 ',
      tachyon.get_colored_name(),
      ' 瞬间变回了原来的样子，只有空荡的便当盒证明了刚才发生的一切',
    ]);
    await era.printAndWait([
      '并非梦境……总之，以后还是记得给 ',
      tachyon.get_colored_name(),
      ' 做便当吧',
    ]);
  },
  /**
   * 回合开始 - 三级反抗刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_hate(tachyon, you, callname) {
    await era.printAndWait([
      '忽然，',
      tachyon.get_colored_name(),
      ' 吻住了 ',
      you.get_colored_name(),
    ]);
    await era.printAndWait([
      '一股热流，在你们的口间传递，被两人饮下热流顺着 ',
      you.get_colored_name(),
      ' 的喉咙向下',
    ]);
    await era.printAndWait('热流流过的地方瞬间产生了灼烧感');
    era.println();
    await tachyon.say_and_wait(['痛吗？', callname]);
    await tachyon.say_and_wait(
      '我也好痛……虽然是我自己做的药，但没想到威力居然这么强啊',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 脸上带笑，眼神中却没有笑意',
    ]);
    era.println();
    await tachyon.say_and_wait('我不会责怪你……毕竟，是被骗的人自己不好');
    await tachyon.say_and_wait('这是对你，同时也是对我识人不清的惩罚');
    await tachyon.say_and_wait(
      '也不会要求你离开……虽然很不想承认，但即便发生了这样的事，我也还是不希望你离开我',
    );
    await tachyon.say_and_wait([
      '所以，我亲爱的 ',
      callname,
      '……接下来的余 · 生，请让我们一起互相折磨下去吧？',
    ]);
  },
  /**
   * 闲聊 - 关于称呼的连续事件
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} talk_times 关于称呼的第几次闲聊
   */
  async event_talk_callname(tachyon, you, callname, talk_times) {
    switch (talk_times) {
      case 1:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await you.say_and_wait('嗯？');
        await era.printAndWait([
          you.get_colored_name(),
          ' 听见 ',
          tachyon.get_colored_name(),
          ' 似乎在喊 ',
          you.get_colored_name(),
          ' 的样子，于是回头一看',
        ]);
        era.println();
        await tachyon.say_and_wait('没什么，叫着玩的');
        era.println();
        await era.printAndWait([
          '于是 ',
          you.get_colored_name(),
          ' 转回头去继续做自己的事',
        ]);
        era.println();
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        era.println();
        await tachyon.say_and_wait([you.actual_name, '君']);
        await era.printAndWait('！？');
        await era.printAndWait([
          you.get_colored_name(),
          ' 忽然回过头来，眼前却是 ',
          tachyon.get_colored_name(),
          ' 一如往常的笑容',
        ]);
        await era.printAndWait('彷佛刚刚什么也没发生过一般');
        break;
      case 2:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 靠在 ',
          you.get_colored_name(),
          ' 的背后发出了撒娇般的低语',
        ]);
        await era.printAndWait([
          '然而 ',
          you.get_colored_name(),
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
          you.get_colored_name(),
          ' 只能忍着内心的焦灼继续端坐原地',
        ]);
        era.println();
        await tachyon.say_and_wait('…………笨蛋');
        era.println();
        await era.printAndWait([
          '听见',
          tachyon.sex,
          '最后一声轻哼，',
          you.get_colored_name(),
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
          you.get_colored_name(),
          ' 回头的那个瞬间便已经全部塞入 ',
          you.get_colored_name(),
          ' 的嘴里了',
        ]);
        era.println();
        await tachyon.say_and_wait('真是……这次居然这么顽强啊');
        era.println();
        await era.printAndWait('药效发作，这次似乎是有麻痹效果的药物');
        await era.printAndWait([
          you.get_colored_name(),
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
          you.get_colored_name(),
          ' 陷入了黑暗之中',
        ]);
        break;
      case 3:
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 似乎正在做实验的样子',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 盯着',
          tachyon.sex,
          '姣好的侧脸，忽然兴起了恶作剧的念头',
        ]);
        era.printButton('「爱丽速子」', 1);
        await era.input();
        await era.printAndWait([you.get_colored_name(), ' 轻声说道']);
        await era.printAndWait([
          tachyon.sex,
          '的背影忽然抖了一下，却没有回过头，仍然装作没事的做着实验',
        ]);
        era.println();
        await era.printAndWait([
          '看到这一幕更加激起了 ',
          you.get_colored_name(),
          ' 的童心',
        ]);
        era.println();
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 试着换了许多不同声调',
        ]);
        await era.printAndWait([
          '每次喊出口，',
          tachyon.sex,
          '的身体就会抖的比前一次还长',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 从侧面看见了',
          tachyon.sex,
          '的脸庞也变得越来越红',
        ]);
        era.println();
        await era.printAndWait([
          '看见',
          tachyon.sex,
          '脸颊绯红的模样，',
          you.get_colored_name(),
          ' 也不由得害羞了起来',
        ]);
        await era.printAndWait('但这个时候心中的欲望也不允许自己停下了');
        await era.printAndWait([
          you.get_colored_name(),
          ' 不停喊着，声音越发轻柔',
        ]);
        await era.printAndWait([
          '渐渐的，原本恶作剧的心已经消失，现在的 ',
          you.get_colored_name(),
          ' 只是想看见',
          tachyon.sex,
          '更加害羞，更加',
          tachyon.teen_sex_title,
          '的模样',
        ]);
        era.println();
        await era.printAndWait([
          '…………',
          tachyon.get_colored_name(),
          '？',
          tachyon.teen_sex_title,
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
          you.get_colored_name(),
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
          you.get_colored_name(),
          ' 看见',
          tachyon.sex,
          '脸上再度变得红润，这次 ',
          you.get_colored_name(),
          ' 很确定这并非是害羞',
        ]);
        await era.printAndWait('而是……………');
        era.println();
        await tachyon.say_and_wait([callname, '！！！！！！！！！！！！！！']);
        era.drawLine({ offset: 8, width: 8 });
        await era.printAndWait('【来自学园的通知】', { align: 'center' });
        await era.printAndWait(
          ['下午，', tachyon.get_colored_name(), '，药剂，完毕'],
          { align: 'center' },
        );
    }
  },
  /**
   * 聊天 - 泡红茶
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async event_talk_black_tea(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, '，来得正好']);
    await tachyon.say_and_wait('帮我试试今天的新药吧');
    era.println();
    await era.printAndWait(['你习以为常的喝下了今天的药……嗯？怎么感觉像红茶']);
    await era.printAndWait([
      you.get_colored_name(),
      ' 疑惑的看着自己手上的试管，是散发着可疑的光芒，一看就知道是 ',
      tachyon.get_colored_name(),
      ' 出品的药物，但为什么……',
    ]);
    era.println();
    await tachyon.say_and_wait('感觉如何？');
    era.println();
    await era.printAndWait([
      '在疑惑中被问到感想，',
      you.get_colored_name(),
      ' 下意识的对红茶的口味做出了评价',
    ]);
    await era.printAndWait([
      '回答完后 ',
      you.get_colored_name(),
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
        you.get_colored_name(),
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
        you.get_colored_name(),
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
      await era.printAndWait([you.get_colored_name(), ' 忍不住大喊出声']);
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
        you.get_colored_name(),
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
        you.get_colored_name(),
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
        you.get_colored_name(),
        ' 一个人收拾',
      ]);
      era.println();
      await era.printAndWait([
        '……究竟是为什么生气呢？',
        you.get_colored_name(),
        ' 百思不得其解',
      ]);
      await era.printAndWait([
        '不过……要是',
        tachyon.sex,
        '找到其他的实验者的话，不知为何，在当下瞬间 ',
        you.get_colored_name(),
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
        you.get_colored_name(),
        ' 慌忙摇了摇头甩掉这种可怕的可能性',
      ]);
    }
    return [];
  },
  /**
   * 聊天 - 喜欢的饮品
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_c 玩家对曼城茶座的称呼的称呼
   */
  async event_talk_drink(tachyon, you, callname, y_call_c) {
    await tachyon.say_and_wait([callname, '～～要喝什么饮料吗？']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 忽然带着满脸的坏笑问 ',
      you.get_colored_name(),
      ' 道',
    ]);
    await era.printAndWait('无事献殷勤，非奸即盗');
    await era.printAndWait([
      '话虽如此，直接拒绝一定会让',
      tachyon.sex,
      '恼羞成怒吧',
    ]);
    era.println();
    await tachyon.say_and_wait('怎么样，要喝什么？');
    era.println();
    era.print('该怎么办呢……');
    era.printButton('红茶', 1);
    era.printButton('咖啡', 2);
    era.printButton('沙士', 3);
    era.printButton('不喝', 4);
    switch (await era.input()) {
      case 1:
        await era.printAndWait('果然还是王道系的红茶吧');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 点了点头，彷佛在说就知道 ',
          you.get_colored_name(),
          ' 会选这个一样，从背后掏出已经加好料的红茶',
        ]);
        era.drawLine();
        await era.printAndWait([
          '…………',
          you.get_colored_name(),
          ' 看着药粉都没完全化开的红茶，满脸黑线',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '怎么了，',
          callname,
          '？这可是我亲手泡的茶，快喝吧',
        ]);
        era.println();
        await era.printAndWait([
          '……罢了，早在选红茶的时候 ',
          you.get_colored_name(),
          ' 就已经知道一定是这种发展了不是吗',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 一口喝干了红茶']);
        await era.printAndWait('嗯，美味又爽口');
        break;
      case 2:
        if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
          await you.say_and_wait([
            '还是咖啡吧，最近经常喝 ',
            y_call_c,
            ' 泡的咖啡',
          ]);
        } else {
          await you.say_and_wait('还是咖啡吧，最近工作比较忙喝的比较多');
        }
        era.println();
        await tachyon.say_and_wait('怎么喝那种苦的要死跟泥水一样的饮料啊');
        era.println();
        await you.say_and_wait(['给我向 ', y_call_c, ' 道歉啊喂']);
        era.println();
        await tachyon.say_and_wait('算了，要喝就喝吧');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 无可奈何的从背后掏出已经准备好的饮料',
        ]);
        era.drawLine();
        await era.printAndWait([
          you.get_colored_name(),
          ' 看着眼前药粉都没化开的深红色液体，心里第一次感到槽点太多导致吐槽不出口的感受',
        ]);
        era.println();
        await you.say_and_wait('首先……咖啡？');
        await tachyon.say_and_wait('……咖啡因很多，就当是咖啡吧');
        await tachyon.say_and_wait('…………');
        await you.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          '你们两人相顾无言，',
          you.get_colored_name(),
          ' 认命的喝下了饮料',
        ]);
        break;
      case 3:
        await you.say_and_wait('沙士吧，虽然小众但确实好喝');
        era.println();
        await tachyon.say_and_wait('欸……你怎么喜欢那种奇怪口味的饮料');
        era.println();
        await you.say_and_wait('我就喜欢，不行吗？');
        era.println();
        await tachyon.say_and_wait(
          '………不是，那饮料闻起来喝起来就像药，那换句话说你直接喝我的药不就好了',
        );
        era.println();
        await you.say_and_wait('！？');
        await era.printAndWait(['看起来', tachyon.sex, '似乎完全不打算装了']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 把加了药的红茶放到一旁后，直接从白大褂里掏出荧光色的药剂',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 象征性的抵抗了两下，随即便被迫一口干了',
        ]);
        await era.printAndWait(
          '话说，这药喝起来也不像药味啊，为什么是亲子丼的味道啊！？',
        );
        break;
      case 4:
        await era.printAndWait([
          you.get_colored_name(),
          ' 拒绝了，哪怕抵抗是徒劳的，',
          you.get_colored_name(),
          ' 也要做出自己的反抗',
        ]);
        era.println();
        await era.printAndWait('这才是，这才是，人类的觉悟啊啊啊啊啊啊啊啊啊');
        era.println();
        await tachyon.say_and_wait('吵死了');
        era.println();
        await era.printAndWait([
          '然而，觉悟并没有帮助 ',
          you.get_colored_name(),
          ' 爆发小宇宙，人类再怎么样也是胜不过',
          tachyon.uma_sex_title,
          '的，五秒后 ',
          you.get_colored_name(),
          ' 便被按住了脸，强迫张开口被灌下液体',
        ]);
        era.println();
        await tachyon.say_and_wait('早知道这样还省事点');
    }
    await era.printAndWait('啪搭');
    await era.printAndWait([
      '这是 ',
      you.get_colored_name(),
      ' 不省人事摔在桌上的声音',
    ]);
  },
  /**
   * 日常随机事件 - 中庭营业
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async event_atrium_evil(tachyon, you, callname) {
    await you.say_and_wait('速子———？');
    era.println();
    await era.printAndWait([
      '今天不知道为什么一早就没看到 ',
      tachyon.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '总是沉浸研究的',
      tachyon.sex,
      '今天却不知道去了哪里。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 在校园里左找右找，最后从路过学生的口中听说',
      tachyon.sex,
      '在枯树洞旁。',
    ]);
    await era.printAndWait([
      '枯树洞……',
      tachyon.sex,
      '也有什么想要倾诉的烦恼吗？',
    ]);
    await era.printAndWait('身为训练员没看出情绪不对这可是失职啊。');
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      ' 来到了中庭，毕竟是上课时间，因此这里没什么人，只有少数趁着没人前来发泄情绪的',
      tachyon.uma_sex_title,
      '。',
    ]);
    await era.printAndWait([
      '也因为人烟稀少，于是 ',
      you.get_colored_name(),
      ' 亲眼看到了「那个」。',
    ]);
    await era.printAndWait([
      '朝着',
      tachyon.uma_sex_title,
      '靠近，针对',
      tachyon.couple_title,
      '内心弱小处的黑影。',
    ]);
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '呜啊啊啊！我好弱啊……为什么，怎么都赢不了……！',
    );
    await tachyon.say_as_unknown_and_wait('你想……获得力量吗？');
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '……力量？',
    );
    await tachyon.say_as_unknown_and_wait(
      '能够变得比谁都强，胜过所有人的力量……',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '……真，真的可以吗？代价是什么？',
    );
    await tachyon.say_as_unknown_and_wait(
      '呵呵呵……想知道的话，就到旧理科实验室来吧……',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      '为什么……就是无法提起勇气告白……那个木头……为什么都做到这种程度了还不明白……！',
    );
    await tachyon.say_as_unknown_and_wait(
      '想要诚实表达自己的心意吗？想要即便不说出口也能让他明白自己的心思吗？',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      '你，你是……！',
    );
    await tachyon.say_as_unknown_and_wait(
      '到旧理科实验室吧，你就能获得你想要的一切了……',
    );
    await you.say_and_wait('……那家伙在干嘛', true);
    await era.printAndWait([
      '在枯树洞旁仿佛蛊惑人心的恶魔一般不停念叨着的无疑是 ',
      you.get_colored_name(),
      ' 的负责',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      '不断在那些因烦恼而在枯树洞前倾诉的人们面前出现，讲着诱人堕落的话语，仿佛神话里的魔鬼一般',
    ]);
    await era.printAndWait([
      '此时的',
      tachyon.sex,
      '也注意到了 ',
      you.get_colored_name(),
    ]);
    await tachyon.say_and_wait([callname, '，你来的正好，准备回去迎接客人了']);
    await you.say_and_wait('客人？');
    await tachyon.say_and_wait([
      '当然是那些困扰的',
      tachyon.uma_sex_title,
      '们啦。',
    ]);
    await tachyon.say_and_wait(
      '哎呀，我以前真的是太失礼了，居然觉得枯树洞是没有必要存在的地方。',
    );
    await tachyon.say_and_wait([
      '现在想想这不是为我量身打造会主动筛选出心灵意志弱小的',
      tachyon.uma_sex_title,
      '们的场所吗。',
    ]);
    await era.printAndWait('因为意志不坚所以才需要外力引导发泄情绪。');
    await era.printAndWait([
      '因为意志不坚所以也容易为了达成目的将灵魂出卖给恶（速）魔（子）。',
    ]);
    await era.printAndWait([
      '某种意义上来讲，对某些图谋不轨的人来说，来到这里的',
      tachyon.uma_sex_title,
      '确实是最容易被坏人盯上的无辜孩子。',
    ]);
    await era.printAndWait([
      '不过，',
      tachyon.get_colored_name(),
      ' 的话应该不会伤害',
      tachyon.couple_title,
      '……吗？',
    ]);
    await tachyon.say_and_wait(['不说这个，', callname, '，快走吧。']);
    await era.printAndWait('怎么这么突然……肯定不是良心发现之类的吧？');
    await tachyon.say_and_wait(
      '连你都发现了，学生会那些家伙应该很快也要过来了，在被抓去训话前快点，走了！',
    );
    await era.printAndWait([
      '…………偶尔让',
      tachyon.sex,
      '被抓去训话一次感觉其实也不错吧',
    ]);
  },
  /**
   * 日常随机事件 - Plan A 天台
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async event_rooftop_a(tachyon, you, callname) {
    await tachyon.say_and_wait('哼哼哼～～');
    await era.printAndWait([
      '今天 ',
      you.get_colored_name(),
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
      you.get_colored_name(),
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
      tachyon.uma_sex_title,
      '的肠胃也没有脆弱到会因为这种事吃坏肚子哦',
    ]);
    await you.say_and_wait('不是这个问题吧！？');
    await tachyon.say_and_wait('反正我就要吃鸡块！');
    await you.say_and_wait('便当里不是还有吗！？');
    await era.printAndWait([
      '在 ',
      you.get_colored_name(),
      ' 的坚持下阻止了 ',
      tachyon.get_colored_name(),
      ' 将掉到地上的鸡块吃下',
    ]);
    await era.printAndWait([
      '代价是当天下午',
      tachyon.sex,
      '一直用幽怨的眼神望着 ',
      you.get_colored_name(),
    ]);
    await era.printAndWait([
      '直到晚上，进入梦乡 ',
      you.get_colored_name(),
      ' 都仿佛听见耳边一直传来 ',
      tachyon.get_colored_name(),
      ' 幽怨的哀嚎',
    ]);
    await tachyon.say_and_wait('我的鸡块……');
    await you.say_and_wait(['……明天再给', tachyon.sex, '做炸鸡块吧'], true);
  },
  /**
   * 日常随机事件 - Plan B 天台
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async event_rooftop_b(tachyon, coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 带着',
      tachyon.sex,
      '到天台吃便当散散心',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '高兴的听 ',
      you.get_colored_name(),
      ' 谈着最近 ',
      coffee.get_colored_name(),
      ' 训练上的变化，偶尔加入几句自己的想法',
    ]);
    await era.printAndWait('过程中完全没有提及自己');
    await era.printAndWait([
      '无法参与训练的',
      tachyon.sex,
      '，哪怕自己已经尽量抽空陪伴了，在其他',
      tachyon.uma_sex_title,
      '训练时也还是必须要分开',
    ]);
    await tachyon.say_and_wait(['最近', tachyon.sex, '还好吗']);
    era.printButton('「……」', 1);
    era.printButton('「……那你呢？最近还好吗？」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '结束了 ',
        coffee.get_colored_name(),
        ' 的话题后你们忽然陷入沉默，很快就结束了这一餐',
      ]);
    } else {
      await tachyon.say_and_wait('我？……也就那样吧，没什么特别的。');
      await era.printAndWait([tachyon.sex, '随便的回应了']);
      await era.printAndWait([
        '与',
        tachyon.sex,
        '相处甚久的 ',
        you.get_colored_name(),
        ' 可以看出，',
        tachyon.sex,
        '并不是在敷衍，而是真心觉得自己的生活没什么能说的话题',
      ]);
      await era.printAndWait([
        '想到这点，',
        you.get_colored_name(),
        ' 不禁感到一阵心痛。',
      ]);
    }
  },
  /**
   * 日常随机事件 - 幼儿退行速子
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} bakushin 樱花进王
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} pocket 森林宝穴
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async event_river(tachyon, coffee, bakushin, urara, pocket, you, callname) {
    await tachyon.say_and_wait([callname, '！你看！是鸭子！']);
    await tachyon.say_and_wait('还有那个！是蝴蝶欸！');
    await tachyon.say_and_wait('这里风景好漂亮啊！');
    await era.printAndWait([
      you.get_colored_name(),
      ' 无奈的看着在河堤边上到处乱跑的 ',
      tachyon.get_colored_name(),
      '，',
    ]);
    await era.printAndWait([
      '天真烂漫的神情，比起 ',
      tachyon.get_colored_name(),
      ' 倒不如说更像 ',
      urara,
      '、',
      bakushin,
      ' 等',
      tachyon.uma_sex_title,
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
      coffee,
      '、',
      pocket,
      ' 等人的模拟赛，但代价……',
    ]);
    await tachyon.say_and_wait([
      callname,
      callname,
      '！你看！蜗牛爬的好慢啊！',
    ]);
    await era.printAndWait([
      '怎么说呢，这也算是一种让大脑放松的行为吧，',
      you.get_colored_name(),
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
      you.get_colored_name(),
      ' 张开手',
    ]);
    await tachyon.say_and_wait([callname, '～～背背～～']);
    await era.printAndWait([
      you.get_colored_name(),
      ' 背起了尽情玩了一天的超光速',
      tachyon.sex_code - 1 ? '公主' : '王子',
      '，看来',
      tachyon.sex,
      '真的是累了，一趴上 ',
      you.get_colored_name(),
      ' 的背便直接睡了过去',
    ]);
    await era.printAndWait('这一天折腾的自己也是够累了，回去非要好好休息才行');
    await tachyon.say_and_wait([callname, '……谢谢……']);
    await you.say_and_wait('……');
    await era.printAndWait('或许，偶尔这样一天也不是什么坏事也说不定？');
  },
  event_church: (() => {
    const title = '神明捕捉行动';
    /**
     * 日常随机事件 - 神社捉猫
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        '今天，',
        you.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 一起前往神社时……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '！还不快点！要是让『神明大人』等急了就不好了！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 兴奋的跑上神社阶梯回头喊道',
      ]);
      await era.printAndWait([
        '姑且不论以人类之身追上',
        tachyon.uma_sex_title,
        '的可能性，除了物理上的不可能外，',
      ]);
      await era.printAndWait([
        '在精神上 ',
        you.get_colored_name(),
        ' 也死命的想要拒绝接下来的行为，但在爱马的任性要求下，',
        you.get_colored_name(),
        ' 依然只能露出苦笑勉强跟上',
      ]);
      era.println();
      await era.printAndWait('事情的起因……说来复杂，却也简单');
      await era.printAndWait('一言以蔽之');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '，你知道的吧，我一向是不相信什么灵魂鬼神的存在的',
      ]);
      await tachyon.say_and_wait(
        '但是，在未经确认前便加以否认这也不符合研究者应有的态度',
      );
      await you.say_and_wait('嗯嗯');
      await tachyon.say_and_wait('但是要如何验证呢，从以前其实就一直有种说法');
      await tachyon.say_and_wait('所谓的鬼神，其实就是自然界游离的能量团而已');
      await tachyon.say_and_wait(
        '虽然这样的说法有失偏颇，但确实能够以此为基础去进行验证',
      );
      await you.say_and_wait('嗯嗯');
      era.println();
      await tachyon.say_and_wait(
        '所以，如此如此这般这般，我们去神社捕捉神明吧！',
      );
      await you.say_and_wait('嗯……嗯？');
      era.println();
      await era.printAndWait(
        '如果说真的有这么一种一般人类无法感知无法察觉的东西存在，',
      );
      await era.printAndWait('那他的存在本身必然也需要能量');
      await era.printAndWait(
        '因此初步选择能够探测到不正常的能量消耗地方为探测基准，',
      );
      await era.printAndWait('但都市内乱七八糟的干扰太多');
      await era.printAndWait(
        '相比之下，要想探查的话最好当然就是地处偏远的神社了',
      );
      await era.printAndWait(
        '除此之外，既然称之为神，那么能量的等级必然也跟一般的鬼魂不同，',
      );
      await era.printAndWait(
        '要是连在神社都补捉不到所谓神明，那么基本就可以认定这种东西是不可能存在的………',
      );
      era.println();
      await era.printAndWait('总而言之，大致上就是出于如此不敬的原因');
      await era.printAndWait(['你们今日来到了偏远地方无人经过的神社']);
      await you.say_and_wait(
        '南无三，还请三女神大人有大量，别计较这种小事情了，万分拜托，阿弥陀佛，阿门',
        true,
      );
      era.println();
      await era.printAndWait([
        '带着万分不情愿的心情，',
        you.get_colored_name(),
        ' 总算爬上了神社',
      ]);
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 的以死相逼的恳求下，',
        tachyon.get_colored_name(),
        ' 心不甘情不愿的答应了在开始使用',
        tachyon.sex,
        '手上那莫名其妙的能量探测器之前先参拜一次表示敬意',
      ]);
      era.println();
      await era.printAndWait(['于是你们双手合十，朝着神社敬拜……']);
      await tachyon.say_and_wait('好啦！那么废话不多说就让我们开始……');
      era.println();
      await era.printAndWait([
        '参拜完的瞬间，',
        tachyon.get_colored_name(),
        ' 便拿起了',
        tachyon.sex,
        '放在一旁的能量探测器对准了神社的方向开始探测',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 只能苦笑着站在一旁祈祷神明大人有大量不要跟小孩子计较了',
      ]);
      era.println();
      if (Math.random() < 0.5) {
        await tachyon.say_and_wait([
          '嗯嗯……嗯嗯……！等一下！',
          callname,
          '！你过来看，这里好像有………',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 听见 ',
          tachyon.get_colored_name(),
          ' 的呼喊声急忙跑了过去，却发现',
          tachyon.sex,
          '在探测到某个地方后就忽然不动了',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 连忙上去拍',
          tachyon.sex,
          '的肩膀确认是否没事，',
          tachyon.sex,
          '却忽然将 ',
          you.get_colored_name(),
          ' 扑倒在地',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '将 ',
          you.get_colored_name(),
          ' 的双手按倒在地，',
          you.get_colored_name(),
          ' 面朝天，看着压在自己身上的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          '的眼神冷酷，但在冷酷之下彷佛又藏着一丝狂热',
        ]);
        await era.printAndWait('像是捕捉到猎物，正要开始进食的猫科动物一般');
        era.println();
        await you.say_and_wait(
          [
            '这下真的遭天谴了吗……不是，为什么受天谴的是我不是',
            tachyon.sex,
            '啊！？',
          ],
          true,
        );
        era.println();
        await era.printAndWait('万般话语也陷入了无力的无奈');
        await era.printAndWait([
          you.get_colored_name(),
          ' 只能眼睁睁看着',
          tachyon.sex,
          '的下一步动作',
        ]);
        era.println();
        await era.printAndWait([
          '在确认 ',
          you.get_colored_name(),
          ' 已经失去反抗的意志后，',
          tachyon.sex,
          '松开了一只手，解开 ',
          you.get_colored_name(),
          ' 的衬衫上衣',
        ]);
        era.println();
        await you.say_and_wait('啊啊，这样要训练员失格了啊', true);
        await era.printAndWait([
          tachyon.sex,
          '拉开了 ',
          you.get_colored_name(),
          ' 的上衣，然后……',
        ]);
        era.println();
        await tachyon.say_and_wait('喵～～～');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '发出了小猫一般的叫声，像猫一样钻进 ',
          you.get_colored_name(),
          ' 的怀中，发出舒服的咕噜声',
        ]);
        await era.printAndWait([
          '当然，即便动作再像猫，依然改变不了',
          tachyon.sex,
          '的身体是',
          tachyon.uma_sex_title,
          '身体的事实',
        ]);
        await era.printAndWait([
          '虽然想象小猫一样钻进衬衫，但就 ',
          you.get_colored_name(),
          ' 所看见的，',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '的行为不过是在解开上衣后便躺在 ',
          you.get_colored_name(),
          ' 赤裸的胸板上磨蹭',
        ]);
        era.println();
        await tachyon.say_and_wait('喵～～喵呜～喵');
        era.println();
        await era.printAndWait([
          '似乎对这样的接触有些不满意，',
          tachyon.sex,
          '换了个方式，拉起了 ',
          you.get_colored_name(),
          ' 的双手，使 ',
          you.get_colored_name(),
          ' 的双手重迭在',
          tachyon.sex,
          '的肚子上',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 想趁机起身，但察觉到 ',
          you.get_colored_name(),
          ' 的动作后用力压下的重量使 ',
          you.get_colored_name(),
          ' 再次无法动弹',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 只能继续任由',
          tachyon.sex,
          '将 ',
          you.get_colored_name(),
          ' 的手摆成了拥抱的姿势',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '在固定完 ',
          you.get_colored_name(),
          ' 手的姿势后，便翻了个身，脸颊平贴在 ',
          you.get_colored_name(),
          ' 的胸膛上，发出了满足的声音',
        ]);
        era.printButton('「……速子？」', 1);
        await era.input();
        await era.printAndWait([
          '这只小猫没有做出回答，渐渐的，',
          tachyon.sex,
          '的呼吸趋于平缓，然后……',
        ]);
        era.println();
        await tachyon.say_and_wait('zzz……喵……zzz……');
        era.println();
        await era.printAndWait([
          '就这么躺在 ',
          you.get_colored_name(),
          ' 的胸膛上睡着了',
        ]);
        await era.printAndWait([
          '现在的 ',
          you.get_colored_name(),
          ' 倒是能够将',
          tachyon.sex,
          '挣脱，但……',
        ]);
        era.println();
        await era.printAndWait([
          '现在 ',
          tachyon.get_colored_name(),
          ' 的模样明显的很不正常',
        ]);
        await era.printAndWait('但是无论如何，前面都被折腾成这样了');
        await era.printAndWait(
          '睡着的现在，让自己稍稍收点补偿应该，也没关系吧？',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 轻轻松开了抱住',
          tachyon.sex,
          '的臂弯，将一只手伸向了上方…………',
        ]);
        era.println();
        await era.printAndWait([
          '好软，好舒服……原来如此，这就是',
          tachyon.uma_sex_title,
          '的………',
        ]);
        era.println();
        await era.printAndWait('耳朵啊');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 轻轻抚摸着这只小猫的头，不时搓揉头顶上垂下的耳朵，柔软却富有弹性的毛茸茸触感使 ',
          you.get_colored_name(),
          ' 忍不住一摸再摸',
        ]);
        era.println();
        await tachyon.say_and_wait('喵呀……咕噜……喵喵');
        era.println();
        await era.printAndWait([
          '梦中的小猫也发出了可爱的声音，彷佛在鼓励着 ',
          you.get_colored_name(),
          ' 继续动作',
        ]);
        await era.printAndWait('不妙啊……这种软绵绵的触感……要沦陷了………');
        era.println();
        await era.printAndWait([
          '不知不觉，',
          you.get_colored_name(),
          ' 也陷入了梦乡…………',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('啊啊啊啊啊！！！我的仪器啊啊啊啊啊！！！');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 看着发出悲鸣的 ',
          tachyon.get_colored_name(),
          '，露出苦笑',
        ]);
        await era.printAndWait([
          '先前不知道发生了什么事，你们忽然就在神社里昏过去了，再次醒来时 ',
          tachyon.get_colored_name(),
          ' 发现',
          tachyon.sex,
          '花了大钱（貌似）买的仪器就这么不动了',
        ]);
        await era.printAndWait(
          '奇怪的是，两人的记忆都只停留在参拜的瞬间，参拜后发生了什么竟然一点印象都没有，',
        );
        await era.printAndWait([
          '不过不知为何，',
          you.get_colored_name(),
          ' 感觉身体一阵舒畅，彷佛在昏迷前做了什么抒发压力的举动',
        ]);
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          ' 忽然想起醒来时发现上衣扣子被全数解开的事情，在昏迷前到底发生了甚么呢',
        ]);
        await era.printAndWait('……果然，鬼神什么的还是多少信一些吧');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 带着 ',
          tachyon.get_colored_name(),
          ' 离开了神社',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 看着',
          tachyon.sex,
          '拿着探测器在神社内戳来戳去，也不知道这样到底有没有效',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('…………果然，什么也没有啊');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 一脸失望的说道']);
        await era.printAndWait([
          you.get_colored_name(),
          ' 也不明白',
          tachyon.sex,
          '为什么会如此失望，证明了鬼神的不存在不应该是对',
          tachyon.sex,
          '而言的好事吗？',
        ]);
        await era.printAndWait(['在不明所以中，你们就这么下了山回去了']);
      }
    };
    f.title = title;
    return f;
  })(),
  event_station: (() => {
    const title = '拆台';
    /**
     * 日常随机事件 - 车站约会拆台
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '今天是 ',
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 一起出门约会的日子',
      ]);
      await era.printAndWait([
        '据说今天的商店街有魔术游行，所以原本是希望带',
        tachyon.sex,
        '来顺便看看热闹的',
      ]);
      await era.printAndWait('然而……');
      era.println();
      await tachyon.say_and_wait('那个魔术棒在他袖子里');
      await tachyon.say_and_wait('那只鸽子前面都藏在夹层里，没什么大不了的');
      await tachyon.say_and_wait(
        '不过是镁的氧化燃烧而已，在实验室我也能做给你看',
      );
      era.println();
      await era.printAndWait([
        '每次魔术的手法都会瞬间被 ',
        tachyon.get_colored_name(),
        ' 用不大不小，但却足以让人听清的音量揭穿',
      ]);
      await era.printAndWait([
        '如果说是觉得无聊也就算了，偏偏每次说完后都会热烈的盯着 ',
        you.get_colored_name(),
        '，仿佛希望得到夸奖一般',
      ]);
      await era.printAndWait([
        '是什么想要得到夸奖的小狗吗……',
        you.get_colored_name(),
        ' 将脑袋里浮现的画面甩出脑袋',
      ]);
      await era.printAndWait([
        '总之，在瞪视着自己二人的魔术师受不了冲下台打人前先带着 ',
        tachyon.get_colored_name(),
        ' 离开吧',
      ]);
      era.println();
      await tachyon.say_and_wait('欸～～这么快就要走了吗？');
      era.println();
      await era.printAndWait([
        '然而，',
        tachyon.get_colored_name(),
        ' 似乎还有些不满意',
      ]);
      await era.printAndWait([
        '得先找点什么东西来转移',
        tachyon.sex,
        '的注意力才行……有了！',
      ]);
      era.printButton('「变色蔬菜汁？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 故作讶异的唸出外面摊位的主打品，希望能转移 ',
        tachyon.get_colored_name(),
        ' 的注意力',
      ]);
      await era.printAndWait(
        '只见摊贩老板将手上的紫色液体倒入杯子，瞬间液体变成了红色',
      );
      await era.printAndWait('……这不是中学课本酸碱反应的紫色甘蓝菜汁吗');
      await era.printAndWait([
        '不管了，为了吸引 ',
        tachyon.get_colored_name(),
        ' 的注意力，只能装一下了',
      ]);
      era.printButton('「看起来好厉害！」', 1);
      await era.input();
      await era.printAndWait([
        '果不其然，',
        you.get_colored_name(),
        ' 夸张的声调成功将 ',
        tachyon.get_colored_name(),
        ' 从魔术表演上拉了回来',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 盯着甘蓝菜汁变色的模样，心中似乎在思考些什么',
      ]);
      await era.printAndWait([
        '奇怪，难道 ',
        tachyon.get_colored_name(),
        ' 没看过吗？',
      ]);
      await era.printAndWait([
        '……不，再怎么说也不会吧，毕竟这算是最基础的酸碱指示剂才对，',
        tachyon.get_colored_name(),
        ' 不可能不知道',
      ]);
      await era.printAndWait(['但假如，', tachyon.sex, '真的没接触过的话……']);
      era.printButton('「看起来好神奇……的样子？」', 1);
      await era.input();
      await era.printAndWait('不行，想不到有什么能够夸奖的话了');
      await era.printAndWait([
        '但 ',
        tachyon.get_colored_name(),
        ' 的注意力看起来也完全转移过来了',
      ]);
      await era.printAndWait('这样的话应该就没有问题……');
      era.println();
      await tachyon.say_and_wait('…………这种东西');
      era.println();
      await era.printAndWait('欸');
      era.println();
      await tachyon.say_and_wait('…………你宁愿夸奖这种东西，也不愿意夸我吗？');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 生气了']);
      await era.printAndWait([
        '虽然不知道原因是什么，但 ',
        tachyon.get_colored_name(),
        ' 明显的生气了',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '明明要更多颜色的药甚至发光的我都能做出来的……',
      );
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 莫名其妙的哭了']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 只能慌忙的安慰起',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait([
        '隔天，',
        tachyon.get_colored_name(),
        ' 做了包含256RGB色彩的药剂出来',
      ]);
      await era.printAndWait(
        '……到底是怎么做到把256种颜色在同种药剂里分割排列的',
      );
      await era.printAndWait('豚鼠不禁感到了疑惑');
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = '金钱的代价';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 拿着一瓶喝到一半的威士忌，摇摇晃晃的走出第五间酒吧',
      ]);
      await era.printAndWait('夜色依旧漆黑，糜烂的夜晚还在继续');
      era.println();
      await era.printAndWait('结束了……那么，接下来该去哪里好？');
      await era.printAndWait('东倒西歪的走在路上，还带着浑身的酒气');
      await era.printAndWait([
        '任何路人看见都会捂着鼻远去的姿态，也是 ',
        you.get_colored_name(),
        ' 努力想要营造出的模样',
      ]);
      era.println();
      await era.printAndWait('二、三、五………二十三、二十九 ');
      await era.printAndWait([you.get_colored_name(), ' 在脑海中默数着']);
      await era.printAndWait([
        '这不是什么透过计算质数来让自己冷静下来，而是今天一晚 ',
        you.get_colored_name(),
        ' 喝掉的酒的量',
      ]);
      await era.printAndWait('总计金额……七位……还是八位数？');
      await era.printAndWait([
        '令人惊愕的数字，却只是 ',
        you.get_colored_name(),
        ' 一个晚上喝的酒的价格',
      ]);
      await era.printAndWait(
        '在最高档的酒吧，以只挑贵的不挑好的的心态将店内扫荡一空所造就出的就是这样一个对普通人而言想都不敢想的数字',
      );
      era.println();
      await era.printAndWait('然而……');
      await era.printAndWait('没用，一点用都没有');
      await era.printAndWait([
        '无论价格，无论度数，今天喝的任何酒，除了让 ',
        you.get_colored_name(),
        ' 多上了几次厕所外，可以说是毫无作用',
      ]);
      await era.printAndWait([
        '意识清晰的不能更清晰，清晰的让 ',
        you.get_colored_name(),
        ' 回忆起两天前的事',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('借钱？');
      await tachyon.say_as_unknown_and_wait(['可以啊，', callname]);
      await tachyon.say_as_unknown_and_wait(
        '不过老规矩，你知道的吧……今天的实验，是关于神经抑制剂排除的实验',
      );
      await tachyon.say_as_unknown_and_wait('那么，让我们开始实验吧');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 将威士忌直接对口吹']);
      await era.printAndWait([
        '一口便足以使正常人醉醺的烈酒，却使 ',
        you.get_colored_name(),
        ' 的脑袋更加清晰',
      ]);
      await era.printAndWait(
        '如果说借酒浇愁是想透过酒精来麻痹神经逃避现实，那么就连麻痹神经也不被允许的自己，想必是世界上最痛苦的醉汉了吧',
      );
      era.println();
      await era.printAndWait('繁华的夜之街，最不缺少的就是像自己一样的醉汉');
      await era.printAndWait([
        '看着那些人东倒西歪的身影，',
        you.get_colored_name(),
        ' 发自内心的产生了由衷的羡慕',
      ]);
      era.println();
      await era.printAndWait([
        '走着走着，眼前忽然闪起的亮光使 ',
        you.get_colored_name(),
        ' 不由得眯起双眼',
      ]);
      await era.printAndWait(
        '晃人双眼的不只灯光，更是那珠光十色的装潢以及无数一夜致富的梦想',
      );
      await era.printAndWait('赌和酒，酒和赌，两者从古至今便是不分家的');
      await era.printAndWait(
        '一醉方休的酒豪们，在酒酣耳热之际，到赌场摸上两把似乎也早就是例行事项了',
      );
      era.println();
      await era.printAndWait([
        '然而，一副醉鬼模样的 ',
        you.get_colored_name(),
        ' 却连眼神都没转向赌场，只是笔直地望着前方',
      ]);
      await era.printAndWait('不是嫌弃赌场赌的东西太过小家子气———');
      await era.printAndWait([
        '据说这里的赌场甚至还有对',
        tachyon.uma_sex_title,
        '比赛下注这种一旦曝光便注定再也干不下去的营业',
      ]);
      await era.printAndWait([
        '更不是因为 ',
        you.get_colored_name(),
        ' 有多么的洁身自好——说到底在这种时间徘徊在这种街道的人，再干净又能干净到哪去呢',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 又灌了口酒，回想起过去的事',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('借钱？');
      await tachyon.say_as_unknown_and_wait(['可以啊，', callname]);
      await tachyon.say_as_unknown_and_wait(
        '不过老规矩，你知道的吧……今天的实验，是关于大脑奖励机制的调整与抑制',
      );
      await tachyon.say_as_unknown_and_wait('那么，让我们开始实验吧');
      era.println();
      await era.printAndWait('哪怕赢下了超越一般上班族年薪的钱');
      await era.printAndWait('哪怕一夕之间输掉一栋海景别墅');
      await era.printAndWait('也不会有任何感情波动，甚至没办法让眉间产生皱折');
      await era.printAndWait('这种情况下的赌博，到底有什么好玩的呢？');
      era.println();
      await era.printAndWait('仿佛整个赌场只有自己一人被孤立世外');
      await era.printAndWait('不能理解过去的自己为何沉迷于此');
      await era.printAndWait('不，能够理解，但做不到的事就是做不到');
      await era.printAndWait('就像已经清醒的人是无法回到梦境的一样');
      era.println();
      await tachyon.say_as_passer_by_and_wait(
        '站街少女',
        '先生，看您一个人好像很寂寞的样子……有没有兴趣，一起度过春宵一刻呢♡',
      );
      era.println();
      await era.printAndWait([
        '不知不觉，灯红酒绿的赌场也已经被甩在身后，走入红灯区的 ',
        you.get_colored_name(),
        '，迎来了风尘女子的温柔乡',
      ]);
      await era.printAndWait(
        '要是能就这么沉溺于她们的肢体间，那想必会是无比幸福的事吧……',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('借钱？');
      await tachyon.say_as_unknown_and_wait(['可以啊，', callname]);
      await tachyon.say_as_unknown_and_wait('不过老规矩……');
      era.println();
      await era.printAndWait('啊啊');
      await era.printAndWait([you.get_colored_name(), ' 回绝了少女的邀请']);
      await era.printAndWait('毫无反应');
      await era.printAndWait(
        '原本应该很对自己胃口的女孩子，现在却连让身体产生一丝丝的反应都做不到',
      );
      era.println();
      await era.printAndWait([
        '不知不觉间，',
        you.get_colored_name(),
        ' 已经走出了这条街道',
      ]);
      await era.printAndWait([
        '偌大的夜之街，繁华的夜之都，却找不到任何能够请 ',
        you.get_colored_name(),
        ' 产生欲望的东西',
      ]);
      await era.printAndWait('曾经感兴趣过的那些');
      await era.printAndWait('美食、烟酒、赌博、美色……');
      await era.printAndWait('曾经让自己沉溺，用来麻痹神经的那些');
      await era.printAndWait('如今却只能使神经变得更为清醒');
      era.println();
      await era.printAndWait('够了，已经够了');
      await era.printAndWait(
        '无论什么都好，只要能让自己沉醉，只要能够放弃思考，无论什么都好',
      );
      await era.printAndWait('从来都不知道，原来理智是这么的使人癫狂');
      await era.printAndWait('暴力、痛楚、血液、伤痕');
      await era.printAndWait('哪怕是这些，都无法给自己带来更大的刺激');
      await era.printAndWait('这些又是在哪一次的实验中被自己卖掉的？');
      await era.printAndWait('已经忘了，那种事也不重要了');
      era.println();
      await era.printAndWait(
        '仿佛人格解体一般，急迫的寻求刺激，却怎么也无法获得',
      );
      await era.printAndWait(
        '再这样下去……会崩溃的，神经也好，身体也好，一定会迎来崩溃，断裂',
      );
      await era.printAndWait('所以在这之前，无论是什么都好……');
      await era.printAndWait('无论，是什么都好……');
      await tachyon.say_as_unknown_and_wait([callname, '？你怎么在这里']);
      await tachyon.say_as_unknown_and_wait('……哎呀，真是狼狈的模样啊');
      await tachyon.say_as_unknown_and_wait(
        '怎么了，是没钱买酒了？还是没钱下注被赌场赶出来了……又或者，是看上哪个女孩子了？',
      );
      await tachyon.say_as_unknown_and_wait('需要……更多钱吗？');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 愣愣的望着对方']);
      await era.printAndWait([
        '仿佛恶魔的低语，在 ',
        you.get_colored_name(),
        ' 耳旁细语如棉',
      ]);
      await era.printAndWait('钱');
      await era.printAndWait('还要钱');
      await era.printAndWait('还要更多钱');
      await era.printAndWait('必须要借更多钱');
      era.println();
      await era.printAndWait('………………………为什么？');
      await era.printAndWait('为什么想要钱？');
      await era.printAndWait('为什么要借钱？');
      await era.printAndWait('为了买酒？');
      await era.printAndWait('为了赌博？');
      await era.printAndWait('为了玩女人？');
      await era.printAndWait('为什么？');
      await era.printAndWait('为什么？');
      era.println();
      await era.printAndWait('无论是什么都可以');
      await era.printAndWait('无论做什么都可以');
      await era.printAndWait('快想啊');
      await era.printAndWait('该怎么做，才能放弃思考');
      await era.printAndWait('该怎么做，才能让自己的脑袋彻底麻痹');
      era.println();
      await era.printAndWait('啊啊……');
      await era.printAndWait('啊啊！');
      await era.printAndWait('有了');
      await era.printAndWait('有了有了有了有了有了有了有了有了有了有了');
      era.println();
      await you.say_and_wait('……可以，借我钱吗？');
      await tachyon.say_as_unknown_and_wait([
        '当然好了……不过，',
        callname,
        '，你借钱要做什么呢？',
      ]);
      era.println();
      await era.printAndWait('对方留下的唯一漏洞');
      await era.printAndWait('给自己留下的最后仁慈');
      await era.printAndWait('布局？阴谋？算计？');
      await era.printAndWait('那些东西已经不重要了');
      era.println();
      await you.say_and_wait('速子……可以用这些钱……请你陪我共度一晚吗？');
      era.println();
      await era.printAndWait('说出口的瞬间，紧绷到极限的弹簧终于松开');
      await era.printAndWait('啊啊……');
      await era.printAndWait('只有想着对方，脑袋才能获得喘息');
      await era.printAndWait('只有念着对方，内心才能获得麻痹');
      await era.printAndWait('为什么以前的自己都没发现');
      await era.printAndWait('为什么要一直借钱去做那种毫无意义的事情');
      await era.printAndWait('明明，明明内心唯一的安宁就在这里');
      era.println();
      await era.printAndWait([
        '想要和 ',
        tachyon.get_colored_name(),
        ' 一起吃饭',
      ]);
      await era.printAndWait([
        '想要和 ',
        tachyon.get_colored_name(),
        ' 一起兜风',
      ]);
      await era.printAndWait([
        '想要和 ',
        tachyon.get_colored_name(),
        ' 一起看夜景',
      ]);
      await era.printAndWait([
        '想要和 ',
        tachyon.get_colored_name(),
        ' 一起入住情侣酒店',
      ]);
      await era.printAndWait([
        '想要彻底，从里到外，完全变成 ',
        tachyon.get_colored_name(),
        ' 的模样',
      ]);
      await era.printAndWait('越是想着这些，心中就越是轻松，越是舒服');
      era.println();
      await tachyon.say_as_unknown_and_wait('呵呵……好孩子，好孩子');
      era.println();
      await era.printAndWait([
        '于是，',
        you.get_colored_name(),
        ' 获得了真正的幸福',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_punishment1: (() => {
    const title = '实验记录：马娘转化';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      if (era.get('love:32') < 75) {
        await tachyon.say_and_wait('哦呀，豚鼠……不，豚鼠小姐来了呢……');
        await tachyon.say_and_wait(
          '嗯？我怎么知道的？呵呵，也是，你那时候是处于昏迷状态的来着。',
        );
        await tachyon.say_and_wait('毕竟手术是我亲自操刀的啊。');
        await tachyon.say_and_wait(
          '身为训练员，无能就是最大的罪，以这点而言，你可以说是十恶不赦了。',
        );
        await tachyon.say_and_wait(
          '不过庆幸吧，多亏了我的研究，你重新获得了第二次的机会。',
        );
        await tachyon.say_and_wait(
          '说到底，能够进入中央特雷森，无论如何都必定有强于他人的地方在，只是被发掘与否而已。',
        );
        await tachyon.say_and_wait(
          '说不定，化为马娘的你，意外的在这方面有天赋呢？',
        );
        await tachyon.say_and_wait(
          '好好加油吧，豚鼠小姐……在这再一次的机会里拼命挣扎吧。',
        );
        await tachyon.say_and_wait(
          '不然……我能担保，下次在手术台上看到我后会发生的事，相信你绝对不会想体验的……不，也说不定呢？',
        );
        await tachyon.say_and_wait('等真到了那时候，我会好好疼爱你的。');
      } else {
        await tachyon.say_and_wait(`豚鼠……不，${you.actual_name} 君。`);
        await tachyon.say_and_wait('我很抱歉，但规定就是规定……');
        await tachyon.say_and_wait('不……是我的错…………你的手术……是我主刀的。');
        await tachyon.say_and_wait('……是啊，呵呵。');
        await tachyon.say_and_wait(
          '放心吧……我不在乎，哪怕变成了什么样子，只要你眼瞳中的光还在，我就一样爱着你。',
        );
        await tachyon.say_and_wait(
          '…………再说，变成马娘后，能玩的玩法也变多了不是吗？',
        );
        await tachyon.say_and_wait('呵呵，我会好好疼爱你的。');
      }
    };
    f.title = title;
    return f;
  })(),
  ws_punishment2: (() => {
    const title = '实验记录：性奴改造';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      const love = era.get('love:32');
      await era.printAndWait('「咕啾……咕啾……啾啵……啾噜……」');
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait('啧啧啧……豚鼠小姐啊，我不是警告过你了吗？');
        await tachyon.say_and_wait('再来一次的下场……呵呵。');
      } else {
        await tachyon.say_and_wait('豚鼠君……真是狼狈啊。');
        await tachyon.say_and_wait(
          '丢人，我都不想承认这样的家伙是我的恋人了。',
        );
      }
      era.println();
      await era.printAndWait('爱丽速子的实验室。');
      await era.printAndWait('这个时间本该是爱丽速子调配药物及研究的时间。');
      await era.printAndWait(
        `但为了欢迎以新身份回归的 ${you.name}，${tachyon.sex}特意取消了今日的安排，甚至还亲自调配了为其庆祝的药物。`,
      );
      era.println();
      await era.printAndWait('「嘶噜……啾噜……啾咕……咕啾……」');
      era.println();
      await tachyon.say_and_wait('还是说，这其实才是你所期待的？');
      await tachyon.say_and_wait('期待变成任人玩弄，不得有个人意志的性奴隶？');
      era.println();
      await era.printAndWait(
        '爱丽速子将双腿张开，慵懒的躺卧在自己平常习惯坐的旋转椅上。',
      );
      await era.printAndWait(
        `而在${tachyon.sex}的双腿间，一名长着马耳朵的女性正蹲踞在地，她的身上穿着与速子同款，袖子过长的白大褂，却又有着些许不同。`,
      );
      await era.printAndWait(
        '被特意剪开的后摆，使得每次有风吹过时，她那圆润的屁股便会直接从白大褂下展露在众人眼前。',
      );
      await era.printAndWait(
        '胸前两个彷佛被药剂腐蚀出的一般不规则的洞口使得她的乳头完全暴露在空气中。',
      );
      await era.printAndWait(
        '内衣的存在？早在看见不被允许扣上扣子的白大褂中央的肉色便能明白那种东西是不存在的了吧？',
      );
      await era.printAndWait(
        '穿着比起情趣道具都太过过激的衣服的马娘，头部前前后后不停的移动着，含吞着在爱丽速子双腿间的硕大阳具。',
      );
      if (era.get('cflag:32:性别') === 0) {
        await era.printAndWait(
          '本来不应出现在马娘身上的器官，其原因自然是爱丽速子的药物所制造。',
        );
        era.println();
        await tachyon.say_and_wait(
          '呵呵……多亏了我的弗隆P系列药剂，才能让你好好体验性奴该做的事，毕竟若是双方都是雌性，那可没什么玩头，不是吗？。',
        );
        era.println();
        await era.printAndWait(
          `蹲踞在地上的马娘———也就是 ${you.name}——置若罔闻，只是不断的服务着眼前的巨物。`,
        );
        await era.printAndWait(
          '虽然说两名雌性的说法可能客观来讲有些错误，但大体来说结论也是差不多的。',
        );
        await era.printAndWait(
          `毕竟，无论是谁看见了 ${you.name} 那明明绷到了极限，却依然没有上面绑着的跳蛋长的生殖器征，大概都不会承认那是正常雄性所拥有，为了使雌性怀孕的器官应有的尺寸吧，硬要形容的话……没错，称其为阴蒂或许更加合适。`,
        );
      }
      era.println();

      await era.printAndWait([
        `忽然，正专心致志为`,
        tachyon.uma_sex_title,
        `主人服务的 ${you.name} 全身颤抖了起来。`,
      ]);
      await era.printAndWait([
        `在 ${you.name} 身下，那哪怕勃起到极限也没有`,
        tachyon.uma_sex_title,
        `主人一边睪丸大的「阴蒂」，喷出了今天第四发，稀薄如水的液体。`,
      ]);
      await era.printAndWait('这也惹得眼前的主人有些不悦。');
      era.println();

      if (love < 75) {
        await tachyon.say_and_wait(
          '只顾着自己爽，连最基础的口交服务都做不到……没想到你连当性奴都如此失败啊。',
        );
        era.println();

        await era.printAndWait([
          `${you.name} 连忙回过神来继续为自己的负责`,
          tachyon.uma_sex_title,
          `兼主人服务。`,
        ]);
        await era.printAndWait(
          `但一向没有耐心的${tachyon.sex}已经受够了 ${you.name} 那拙劣的服务。`,
        );
        await era.printAndWait(
          `${tachyon.sex}站起身，将胯间的巨物更加深入到 ${you.name} 的喉咙。`,
        );
        await era.printAndWait([
          '那庞大的阴囊也撞上了 ',
          you.get_colored_name(),
          ' 的下巴，那沉甸甸的温热流动感昭示着将在 ',
          you.get_colored_name(),
          ' 口中喷发出的白浆份量。',
        ]);
        era.println();

        await tachyon.say_and_wait(
          '对了，豚鼠……不，性奴君啊，不知道你还记不记得。',
        );
        era.println();

        await era.printAndWait(
          `故意转回性奴「君」的称呼，使 ${you.name} 忍不住因这倒错的关系而更发兴奋，下面的「阴蒂」更是从刚才开始就像坏掉的水龙头一般不断流出清澈如水的液体。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '你的改造手术都是我做的，因此，对于你的敏感点，我绝对，是这个世界上最了解的人。',
        );
        era.println();

        await era.printAndWait(
          `比如说，${tachyon.sex}猛地在 ${you.name} 的喉咙戳刺了数次，彷佛在寻找着什么。`,
        );
        await era.printAndWait(
          `被如此粗暴对待的 ${you.name} 再次产生了自己只是一件物品，一件发泄性欲用的器具的自觉。`,
        );
        await era.printAndWait(
          `在戳刺的过程中，不知道是擦到了哪一块部位，${you.name} 忽然喉咙猛地收缩，下半身无论前后都不住的喷出汁液。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '啊啊，找到了，就是这里啊，你喉咙的敏感点。',
        );
        await tachyon.say_and_wait(
          '只要戳中这边，就能带来不亚于男性射精一千次的快感……呵呵，不过你大概已经不需要知道身为男性的事了吧。',
        );
        era.println();

        await era.printAndWait(
          `毫无分神去聆听话语的精神，${you.name} 的一切精力现在都只用在抵抗这如潮水般袭来的快感。`,
        );
        await era.printAndWait(
          `倘若不全力抵抗，每一波的浪潮都能使 ${you.name} 变成瘫倒在地上不见停歇的喷泉。`,
        );
        await era.printAndWait(
          '但这样的浪潮，也不过是主人肉棒的一次抽插而已。',
        );
        await era.printAndWait(
          `不断堆积，累积的快感，使 ${you.name} 全身的肌肉紧缩，连带着喉咙也缩紧到堪称名器的级别。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '喔喔……！就是这个紧致度！要出来了，给我好好接好了！',
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}用力的按住 ${you.name} 的头，前后激烈的抽插着。`,
        );
        await era.printAndWait(
          '如果是普通人类的身体，经过这样的玩弄恐怕真的会有性命危险吧。',
        );
        await era.printAndWait(
          `不知是幸还是不幸，现在的 ${you.name} 是一名马娘，还是经过了特殊改造的马娘。`,
        );
        await era.printAndWait(
          `因此无论是多么粗暴的玩法，${you.name} 的身体都能承受并且将其完全转化为快感。`,
        );
        await era.printAndWait(
          `就连窒息的痛苦感，都已经被 ${you.name} 的身体自发的转化为快感，渐渐的，${you.name} 甚至主动享受起这样的感觉。`,
        );
        await era.printAndWait(
          `${you.name} 的喉咙随着主人的进出不断的调整着紧缩，不是宛如，${you.name} 的喉咙就是名穴！`,
        );
        era.println();

        await tachyon.say_and_wait('接好，敢漏出来你就完蛋了。');
        era.println();

        await era.printAndWait('在冷酷的命令后，随之而来的是灼热的滚滚白浆。');
        await era.printAndWait(
          `庞大的量将 ${you.name} 的口鼻喉舌全数填满，眼看就要向外流出……`,
        );
        await era.printAndWait([
          `${you.name} 慌忙将口中已经填满的腥臭浆液吞下，但 ${you.name} 的努力，终究无法将`,
          tachyon.uma_sex_title,
          `大人的恩赐全数含入。`,
        ]);
        await era.printAndWait([
          `最终……${you.name} 只能无助的用手接住了`,
          tachyon.uma_sex_title,
          `大人宝贵的子种汁。`,
        ]);
        era.println();

        await era.printAndWait(
          '可即便如此，口中不断发射的粗壮炮管依然没有停下。',
        );
        await era.printAndWait(
          `长时间的缺氧，即便是能够享受缺氧快感的 ${you.name}，即便是坚强的马娘身体，也无法完全承受，渐渐，${you.name} 的意识陷入模糊……`,
        );
        era.println();

        await era.printAndWait('「砰！」');
        era.println();

        await era.printAndWait([
          '忽然，一阵剧烈疼痛使 ',
          you.get_colored_name(),
          ' 惊醒。',
        ]);
        await era.printAndWait(
          `${you.name} 不由得想喊出声，但张开的喉咙马上又被更多的白浆灌入。`,
        );
        await era.printAndWait([
          `${you.name} 抬起头，看见的是自己的负责`,
          tachyon.uma_sex_title,
          '兼主人的腿。',
        ]);
        await era.printAndWait(
          '那自己无比呵护爱惜，比自己的腿都还要重视的美足。',
        );
        await era.printAndWait(`如今正毫不留情的踩在 ${you.name} 的肚子上。`);
        era.println();

        await tachyon.say_and_wait('身为性奴的能力……完全不及格啊。');
        await tachyon.say_and_wait('还得好好加以调教才行……');
        era.println();

        await era.printAndWait(
          `剩下的没能吞下的白浊落在 ${you.name} 的全身，衣物也不可避免的沾满了浓浆。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '好端端的实验室被你弄成这副鬼样……啧，让人受不了。',
        );
        era.println();

        await era.printAndWait(
          `速子厌恶的说道，忽然，彷佛有了什么想法一般，俯身对 ${you.name} 细语。`,
        );
      } else {
        await tachyon.say_and_wait(
          '只喷的出这种稀薄的汁液，这种没用的器官到底还有什么存在的意义。',
        );
        await tachyon.say_and_wait(
          '我说豚鼠君，你觉得我是不是该去找其他能够满足我的雄性才对……毕竟像你现在这样，到底还能满足谁呢。',
        );
        era.println();

        await era.printAndWait(
          `听见这句话后 ${you.name} 慌忙更加认真的为 ${you.name} 的恋人兼主人大人服务起来，恳求对方不要抛弃自己。`,
        );
        await era.printAndWait(
          `${tachyon.sex}满意的拍了拍 ${you.name} 的头，鼓励你更加勤奋的服务。`,
        );
        era.println();

        await tachyon.say_and_wait('就这么害怕被抛弃吗？乖孩子乖孩子。');
        await tachyon.say_and_wait(
          '放心吧，我也不打算让别人碰我的身体……不过，身为恋人，帮对方满足性欲不也是义务吗？',
        );
        era.println();

        await era.printAndWait(
          `伴随着轻柔的话语，${tachyon.sex}拍了拍 ${you.name} 的屁股示意。`,
        );
        await era.printAndWait(
          `${you.name} 马上顺从地背对着主人，主动张开了将自己化为雌性的入口。`,
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}站起身，将胯间的巨物深入填满了 ${you.name} 已经湿透的小穴。`,
        );
        await era.printAndWait(
          `那庞大的阴囊撞上了 ${you.name} 圆润的屁股，那沉甸甸的温热流动感昭示着将在 ${you.name} 穴中喷发出的白浆份量。`,
        );
        await era.printAndWait(
          `插入的瞬间，${you.name} 忍不住发出了一声娇吟，而背后的主人则发出了满足的叹息。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '呵呵，就算变成性奴了我们的身体也一样是最契合的啊。',
        );
        await tachyon.say_and_wait(
          '不过这也是理所当然的，毕竟豚鼠君你的身体是我改造的，一切当然是以我的标准来调整的了。',
        );
        era.println();

        await era.printAndWait('自己的身体，是被主人量身改造的。');
        await era.printAndWait('自己是主人的专用性奴。');
        era.println();

        await era.printAndWait(
          `这样的想法使 ${you.name} 更发兴奋，小穴也不由得一阵紧缩。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '唔……忽然这么紧，怎么？刚刚那些话居然让你兴奋了吗？这种情况都能如此兴奋，看来以前还是我不够体贴，没发现你的愿望啊。',
        );
        era.println();

        await era.printAndWait(
          `说完后，身后的突刺变得越发大力及激烈，${you.name} 心领神会的向后迎合着准备迎接主人的赏赐。`,
        );
        era.println();

        await tachyon.say_and_wait('出来了……给我接好了！');
        era.println();

        await era.printAndWait(
          `${tachyon.sex}的手用力拍在 ${you.name} 的屁股上，荡起了阵阵肉花，${you.name} 忍不住发出的呻吟更如火添油加注了主人的兴致。`,
        );
        await era.printAndWait(
          `最后，伴随着 ${you.name} 的颤抖高潮，滚烫的肉柱也在 ${you.name} 体内灌入了浓浓的白浆。`,
        );
        await era.printAndWait(`${you.name} 带着体内的满足感，意识陷入黑暗……`);
        era.println();

        await tachyon.say_and_wait(
          '喂喂，这不是都溢出来了吗？好好的实验室被你搞成这样……',
        );
        era.println();

        await era.printAndWait(
          `听见主人不悦的声音，${you.name} 瞬间清醒了过来。`,
        );
        await era.printAndWait(
          `看着地上被自己浪费的主人的精华，${you.name} 慌忙之下只能选择了最不会浪费的方式……`,
        );
        era.println();

        await tachyon.say_and_wait('不错不错，好好清理干净才是好孩子。');
        era.println();

        await era.printAndWait(
          `主人摸了摸在地上像小狗一样舔着精华的 ${you.name}，使 ${you.name} 高兴的舔的更加起劲。`,
        );
      }
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait(
          `我十分钟后回来，要是到时候这里还没收拾干净，我就给你『惩罚』。`,
        );
      } else {
        await tachyon.say_and_wait('嗯嗯……有了');
        await tachyon.say_and_wait(
          '乖孩子，我十分钟后回来，要是到时候这里还没收拾干净，我就给你『惩罚』。',
        );
      }
      await tachyon.say_and_wait('要是已经收拾干净了，就给你『奖励』。');
      if (love < 75) {
        await tachyon.say_and_wait(
          '到底要哪个，就由你自己决定了，性奴『君』～',
        );
      } else {
        await tachyon.say_and_wait('到底要哪个，就由你自己决定了～');
        await tachyon.say_and_wait(
          '不过放心，无论如何我都一定会好好疼爱你的❤️',
        );
      }
      era.println();

      await era.printAndWait('说完后，速子穿好裤子便离开了实验室。');

      if (love < 75) {
        await era.printAndWait(
          `留下躺在地板上，肚子如气球一般涨起，嘴角还在不停流淌着白汁的 ${you.name} 在室内无助的喘着气。`,
        );
        await era.printAndWait(`奖励还是惩罚……${you.name} 望向角落的扫具柜。`);
      } else {
        await era.printAndWait(
          `留下躺在地板上，肚子如气球一般涨起，还在不停向外喷出白汁的 ${you.name} 无力的清扫地面。`,
        );
        await era.printAndWait(`奖励还是惩罚……`);
      }
      await era.printAndWait('那么，该如何抉择呢？');
    };
    f.title = title;
    return f;
  })(),
  ws_punishment3: (() => {
    const title = '实验记录：孕袋及多马娘体液研究';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk|false} child 爱丽速子和玩家的孩子，不存在时为 false
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_5 爱丽速子对富士奇石的称呼
     * @param {PrintedSpan} call_9 爱丽速子对大和赤骥的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} call_36 爱丽速子对空中神宫的称呼
     * @param {PrintedSpan} call_94 爱丽速子对森林宝穴的称呼
     */
    const f = async (
      tachyon,
      child,
      you,
      call_5,
      call_9,
      call_25,
      call_36,
      call_94,
    ) => {
      await tachyon.say_and_wait('哼哼哼～～');
      era.println();

      await era.printAndWait('爱丽速子高兴的哼着歌，走在熟悉的走廊上。');
      await era.printAndWait(
        '平日里这层走廊总因会冒出奇怪药剂的实验室而被学生们敬而远之……虽然，最近似乎又恢复了几分人气。',
      );
      await era.printAndWait(
        `然而，${tachyon.sex}径直走过了自己的实验室，停在了某扫具柜前。`,
      );
      era.println();

      await tachyon.say_and_wait([
        '啧啧……真是，毫不留情啊，我是不是小瞧一般',
        tachyon.uma_sex_title,
        '的性欲了。',
      ]);
      era.println();

      await era.printAndWait(
        `扫具柜里，是眼神迷离，口中戴着口球，肚子鼓鼓涨起，下面的穴内还插着两根巨根堵住洞口，全身满是爱液与精液，身上写满正字及粗俗不堪话语的 ${you.name}。`,
      );
      era.println();

      await tachyon.say_and_wait('豚鼠君？醒醒。');
      era.println();

      await era.printAndWait(
        `${tachyon.sex}呼喊着对 ${you.name} 的称呼，但被玩弄了三天三夜的 ${you.name} 眼神依旧迷离，虽然挣扎想要做出回应，眼神却还是只能空洞的望着虚空。`,
      );
      era.println();

      await era.printAndWait([
        '看见如此凄惨的画面，',
        tachyon.get_colored_name(),
        ' 却没有任何怜悯或同情。',
      ]);
      await era.printAndWait(
        `${tachyon.sex}毫不留情的抬起脚，踩向 ${you.name} 的肚子。`,
      );
      await era.printAndWait(
        `被踩住的瞬间，${you.name} 仿佛虾子一般身体猛地蜷缩起来，却还是被稳稳的踩在脚下，那本就鼓胀的肚子被踩住的瞬间，就好像被强制排气的气球般，从下面的口将两根用以堵住洞口的按摩棒喷出，随之出来的是满肚子的爱液及精液，蜷缩的 ${you.name} 全身颤抖，在这短短瞬间又高潮了一次，那短小的肉棒也排出了稀薄的因子汁。`,
      );
      era.println();

      await tachyon.say_and_wait(
        '不错，这么多量，应该又能提供好一阵子实验所需了。',
      );
      era.println();

      await era.printAndWait([
        `速子高兴的看着自己及时在喷泉爆发瞬间掏出的烧杯，里面全是刚刚收集的`,
        tachyon.uma_sex_title,
        `体液，然而这样一个烧杯，装的量也不足 ${you.name} 穴内排出的三分之一，更多喷洒在地上，成为了扫除人员的麻烦。`,
      ]);
      await era.printAndWait('不过，谁造成的谁清理，这也是理所当然的吧。');
      era.println();

      await tachyon.say_and_wait('豚鼠君～这次的实验可是大成功哦～');
      era.println();

      await era.printAndWait(
        '速子仿佛什么也没发生一般，兴奋的分享自己的实验。',
      );
      await era.printAndWait(
        `然而……所谓的什么也没发生，不过是 ${you.name} 天真的错觉罢了。`,
      );
      era.println();
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_25,
          ` 真是闷骚……原本我还以为${tachyon.sex}会拒绝这种游戏的，结果……`,
        ]);
        era.println();
        await era.printAndWait(
          `速子顺着 ${you.name} 被猎犬留下痕迹的脖子，一路摸到肩膀，随后……手向下移动，摸到了满是齿痕的乳房，其中乳头上的齿痕尤为明显。`,
        );
        await era.printAndWait(
          `被摸到的瞬间，${you.name} 又颤抖着身体，只是这样稍微摸一下，加上脑内的想象就足以使现在的 ${you.name} 陷入高潮了。`,
        );
        era.println();
      }
      if (era.get('cflag:94:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([call_94, ' 也是……明明一开始还那么害羞……']);
        era.println();

        await era.printAndWait(
          `${tachyon.sex}把玩着 ${you.name} 仍被口球塞住，发不出声音的口唇，有些红肿的双唇告诉了速子这几天里它到底受尽了多少折磨。`,
        );
        era.println();

        await tachyon.say_and_wait([
          call_94,
          ' 的声音，哪怕我在实验室里也听的一清二楚啊。',
        ]);
        era.println();
      }
      if (era.get('cflag:9:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_9,
          '……呵呵，不愧是我看好的孩子，哪怕这方面也都是第一名的。',
        ]);
        era.println();

        await era.printAndWait(
          '虽然还没验证过，但刚刚装的那一烧杯，里面应该七成左右都是大和一个人射的吧。',
        );
        await era.printAndWait([
          `哪怕在做爱上也要当第一的坚持，让${tachyon.sex}成为了这三天中骑在 ${you.name} 身上最久的一名`,
          tachyon.uma_sex_title,
        ]);
        era.println();
      }
      if (era.get('cflag:5:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          '还有，',
          call_5,
          ' 也接受我的提议让我实验了，啧啧，没想到我们家豚鼠君的面子这么大，连宿舍长都无法逃过魔掌啊。',
        ]);
        era.println();

        await era.printAndWait(
          '爱丽速子摸着豚鼠的大腿内侧，满是正字的双腿，其中四行用特殊笔迹写下的痕迹，微微发出光芒，表演艺人总是浮夸的，哪怕写正字时也不例外。',
        );
        era.println();
      }
      if (era.get('cflag:36:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          '啧啧，明明每天都说什么逻辑逻辑，做起爱来不还是把理智都忘光了吗……',
          call_36,
        ]);
        era.println();

        await era.printAndWait(
          `速子摸着 ${you.name} 的菊穴，这几天把这边肏到红肿的主要原因就是神宫的肉柱，倘若真的一切都要合理的话，在这种没有任何生产意义的穴里射出应该是最不符合逻辑的行为了吧，但这三天里${tachyon.sex}不停耕耘的样子却让 ${you.name} 完全不敢问出口，当然也没机会问出就是了。`,
        );
        era.println();
      }
      if (child) {
        const callname_c =
          era.get(`cflag:${child.id}:父方角色`) === 0 ? '爸爸' : '妈妈';
        await tachyon.say_and_wait([
          child.get_colored_name(),
          '……真不愧是我的',
          child.sex_code === 1 ? '儿子' : '女儿',
          '，这么快就无师自通用上了『',
          callname_c,
          '』的穴……不过小孩子嘛，独占欲强点也是可以理解的。',
        ]);
        era.println();

        await era.printAndWait([
          '速子拍着 ',
          you.get_colored_name(),
          ' 的屁股，上面用稚嫩的笔迹写着『',
          callname_c,
          '是我专用的便器』，也不知道这孩子是不是真的理解了话中的意思……听见速子念出这句话，想到孩子若是在理解了这句话的意思的情况下写下来的……',
          you.get_colored_name(),
          ' 又忍不住陷入了高潮。',
        ]);
        era.println();
      }
      if (era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
        await tachyon.say_and_wait(
          '真为你肚子里的孩子感到可怜啊……母亲居然是这种人尽可夫的婊子，如果是我还不如用精液把自己淹死算了。',
        );
        era.println();

        await era.printAndWait('速子又重重踩了一脚，带着嘲讽及不屑的语气说。');
        era.println();
        await tachyon.say_and_wait(
          '感到庆幸吧，马娘的身体足够结实，所以就算这样踩也只能对你造成伤害，对肚子里的孩子是一点事也不会有……但你大概也不会在乎这种事吧，有肉棒就好的妓女。',
        );
        era.println();
        await era.printAndWait(
          `${you.name} 想反驳，但从下体喷出的潮水却不容反驳。`,
        );
        era.println();
      }
      await tachyon.say_and_wait(
        '这边这些，则都是『曾经』爱慕过你的那些孩子留下的呢。',
      );
      era.println();
      await era.printAndWait([
        `速子拂过 ${you.name} 身上写着的『母狗』、『便器10元一次』、『`,
        tachyon.uma_sex_title,
        `大人的精便器』、『性爱德比18着』。`,
      ]);
      await era.printAndWait([
        '每一行都是看见自己憧憬的训练员变成淫荡的母马孕袋后由爱生恨，由恨生欲的',
        tachyon.uma_sex_title,
        '们所留。',
      ]);
      era.println();
      await tachyon.say_and_wait('但你应该很爽吧，嗯？');
      era.println();
      await era.printAndWait('速子的脸上浮现了满是嗜虐的笑容。');
      era.println();
      await tachyon.say_and_wait([
        '看你爽的这德性，被写上字的时候，是不是还要求',
        tachyon.couple_title,
        '一字一句念出来给你听啊？嗯？骚货，贱狗，为了精液能跪在地上舔鞋子的母猪？',
      ]);
      era.println();
      await era.printAndWait(
        `每说一句，${you.name} 的下面就不由得涌出一阵潮水。`,
      );
      await era.printAndWait(
        `让 ${you.name} 想做出的反抗都变成虚伪的欲迎还拒。`,
      );
      era.println();
      if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait('开玩笑的。');
        era.println();
        await era.printAndWait(
          `忽然，速子扶住 ${you.name} 的脸，轻柔的将堵住 ${you.name} 嘴巴的口球摘下。`,
        );
        await era.printAndWait(
          `摘下瞬间，由于前面受到的打击，加上 ${you.name} 腹中还没排干净的那些精液，导致 ${you.name} 不由自主的朝着速子，将肚子里的精液、爱液、胃酸吐的一干二净。`,
        );
        era.println();
        await era.printAndWait(
          `看见眼前速子的白大褂被自己弄脏，${you.name} 脸色苍白，不只是因为前面遭受的玩弄，更是因为自己的不敬之举。`,
        );
        era.println();

        await tachyon.say_and_wait('……没事的，豚鼠君。');
        era.println();
        await era.printAndWait(
          `速子用没被呕吐物沾到的袖子，轻柔的擦了擦 ${you.name} 的嘴。`,
        );
        era.println();
        await tachyon.say_and_wait(
          '我不是说过吗？我不会抛弃你的，不管你变成什么样子都一样。',
        );
        era.println();
        await era.printAndWait(
          `没等 ${you.name} 反应过来，${tachyon.sex}便吻上了 ${you.name} 的唇，不顾这双唇这几天内遭受了多少折磨，被多少人玷污过，刚刚又呕出了多少东西。`,
        );
        await era.printAndWait('轻柔，温暖，包容的吻。');
        await era.printAndWait(
          `不知不觉，${you.name} 感觉，自己仿佛回到了从前的日子一样。`,
        );
        era.println();

        await era.printAndWait('……但，也只是仿佛。');
        era.println();

        await era.printAndWait(
          `${you.name} 看着速子的白大褂下，越显隆起的肿胀，想起了自己的身份。`,
        );
        await era.printAndWait(
          `速子也注意到了，不好意思的对 ${you.name} 笑了笑。。`,
        );
        era.println();

        await tachyon.say_and_wait('可以吗？豚鼠君？');
        era.println();

        await era.printAndWait(
          `${you.name} 没有回答，只是顺从的跪伏在地，进行今天的第一次服侍。`,
        );
      } else {
        await tachyon.say_and_wait('都这样了还想狡辩？');
        era.println();

        await era.printAndWait(`速子动作粗暴的拆掉了 ${you.name} 的口球。`);
        await era.printAndWait(
          `摘下瞬间，由于前面受到的打击，加上 ${you.name} 腹中还没排干净的那些精液，导致 ${you.name} 不由自主的朝着速子，想将肚子里的精液、爱液、胃酸吐的一干二净。`,
        );
        await era.printAndWait('然而……');
        era.println();

        await tachyon.say_and_wait('想做什么呢，豚鼠君。');
        era.println();

        await era.printAndWait('啊啊，早该知道的。');
        await era.printAndWait(
          `${tachyon.sex}怎么会有那么好心拆掉口球让自己舒服呢。`,
        );
        await era.printAndWait(
          `在 ${you.name} 张开嘴的瞬间，就被${tachyon.sex}用下体的巨根堵住了想要吐出的一切事物包括话语。`,
        );
        era.println();
        await tachyon.say_and_wait('这几天忙着实验，我自己都还没用呢。');
        era.println();
        await era.printAndWait(
          `满是骚臭甚至还带有尿味的巨根堵上了 ${you.name} 的喉咙。`,
        );
        await era.printAndWait(
          `${tachyon.sex}动作粗暴的使用着 ${you.name} 的口舌，仿佛在使用无机物的飞机杯一般。`,
        );
        await era.printAndWait('不带感情，纯粹为了性欲的处理而使用。');
        era.println();
        await tachyon.say_and_wait(
          '呼，出来了出来了，接好啊，不然等会……算了，反正弄脏了地板处理的也是你。',
        );
        era.println();
        await era.printAndWait(
          `速子毫不客气的灌满了 ${you.name} 的嘴，接着没有多做停留就回到了实验室继续今天的研究。`,
        );
        await era.printAndWait(
          `完成了今天第一次侍奉的 ${you.name} 双眼无神的望着虚空，思考着究竟一切是如何走到今天这一步的。`,
        );
        await era.printAndWait(
          '……然而，这样的思考也毫无意义，就像在改造手术时听到的一样，一切已经回不去了。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' 努力将口中积累了三天的白浆咽下，看着被自己弄脏的走廊地板……',
        ]);
        era.println();
        if ((await degeneration_to_evil('用嘴', '用扫具')) === 1) {
          await era.printAndWait(
            '反正，都已经回不去了，那不如干脆一点，放弃理智享受一切吧。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 跪伏在地上，舔舐着三天以来 ',
            you.get_colored_name(),
            ' 留下的痕迹。',
          ]);
          await era.printAndWait('原因究竟为何呢？');
          await era.printAndWait([
            '因为要是被',
            tachyon.uma_sex_title,
            '大人们看到了自己使用工具清理，可能会变得更加悲惨？',
          ]);
          await era.printAndWait(
            '因为这样悲惨的处境才能更加警惕自己要努力脱离这样的生活？',
          );
          await era.printAndWait(
            '还是……真的就像速子说的一样，自己只是个为了精液和肉棒能够不顾形象跪在地上舔地板的贱货？',
          );
          era.println();
          await era.printAndWait('这些原因都无所谓了。');
          await era.printAndWait([
            '趴在地上的 ',
            you.get_colored_name(),
            ' 现在，眼睛看到的，耳朵听到的，嘴巴尝到的，都只有在地上，自己身体上，自己全身上下能够插入的洞中流出的白浊精华了。',
          ]);
          era.println();
          await era.printAndWait('「哒……哒……」');
          await era.printAndWait([
            you.uma_sex_title,
            '灵敏的耳朵让 ',
            you.get_colored_name(),
            ' 听见了，有人在走廊上朝着这边走来的声音。',
          ]);
          await era.printAndWait([
            '那么，又是哪位',
            tachyon.uma_sex_title,
            '大人需要自己的服侍了呢。',
          ]);
          await era.printAndWait([
            '不知不觉间，',
            you.get_colored_name(),
            ' 主动撅起了屁股，等待下名贵客的使用。',
          ]);
        } else {
          await era.printAndWait(
            '虽然肉体上已经被改造了，但最起码，精神上不能放弃。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 挣扎着站起身来——哪怕是',
            you.uma_sex_title,
            '之身，对 ',
            you.get_colored_name(),
            ' 那刚经过三天玩弄的身体来说这依然算是个辛苦的举动——拿出扫具柜里这几天沾满了 ',
            you.get_colored_name(),
            ' 及各式各样',
            tachyon.uma_sex_title,
            '体液的扫除工具，清理着地面上自己留下的痕迹。',
          ]);
          era.println();
          await era.printAndWait([
            '虽然光是站起身对脚底板的刺激就足以使 ',
            you.get_colored_name(),
            ' 达到一次小高潮。',
          ]);
          await era.printAndWait([
            '虽然到现在 ',
            you.get_colored_name(),
            ' 的小穴和屁穴仍在不停的流出混合着白浊及爱液的黏液，增加 ',
            you.get_colored_name(),
            ' 的扫除困难。',
          ]);
          await era.printAndWait(
            '虽然看见钝头的扫帚柄，和闻到上面带着的气味，心中就有种冲动想要用其填满自己那不过五分钟没有插入过东西的小穴。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 依然倔强的站起身，用扫帚和畚箕进行着徒劳无功的扫除。',
          ]);
          await era.printAndWait('自己是人类，不是马娘，不是性奴，不是孕袋。');
          await era.printAndWait([
            '这样的坚持依然存在于 ',
            you.get_colored_name(),
            ' 的心中。',
          ]);
          await era.printAndWait('然而……');
          era.println();
          await era.printAndWait('「哒……哒……」');
          await era.printAndWait([
            you.uma_sex_title,
            '灵敏的耳朵让 ',
            you.get_colored_name(),
            ' 准确捕捉到了，有人在走廊上朝着这边走来的声音。',
          ]);
          await era.printAndWait(
            '是今天的使用者吗？这个问题，想必是无须回答的，不如说除开这个目的也想不到会有人靠近这个时不时有药物外泄的走廊的原因了。',
          );
          await era.printAndWait([
            '但 ',
            you.get_colored_name(),
            ' 依然倔强地站着，装作没有听见，维持着自己身为人类的骄傲。',
          ]);
          era.println();
          await era.printAndWait([
            '——————纵使，那是在五分钟后便会被 ',
            you.get_colored_name(),
            ' 主动抛弃的东西。',
          ]);
        }
        era.setColor();
      }
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} hentai 是否有变态行为（有则是身败名裂结局，否则是扫地出门）
   * @param {boolean} has_plan 是否已选择 Plan A or B
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async end_talk(tachyon, callname, hentai, has_plan, plan_b) {
    if (hentai) {
      if (
        !has_plan &&
        era.get('love:32') < 75 &&
        era.get('cflag:32:育成次数') === 0
      ) {
        await tachyon.say_and_wait(
          '拘泥于下半身吗？可笑的原因……不过下次如果还打算做出点什么的话，就来找我吧，看在那双眼睛的份上。',
        );
      } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
        if (!plan_b) {
          await tachyon.say_and_wait(
            '连通往可能性彼方的梦想都无法彻底占满你的视野吗？如果不是蠢人，那么大概就是前所未有的野心家了吧。',
          );
        } else {
          await tachyon.say_and_wait([
            '梦想破灭后的自暴自弃吗？还是，只是用来摆脱前路尽失的',
            tachyon.uma_sex_title,
            '的权宜之计？',
          ]);
        }
      } else if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait([
          '抱歉抱歉，',
          callname,
          '，看来我们可能稍微玩的有点太过分了……下次再谨慎点吧。',
        ]);
      } else if (era.get('cflag:32:育成次数') > 0) {
        await tachyon.say_and_wait([
          '哦呀哦呀，看来这次玩脱了啊，',
          callname,
          '……下次，记得小心点哦。',
        ]);
      }
    } else if (
      !has_plan &&
      era.get('love:32') < 75 &&
      era.get('cflag:32:育成次数') === 0
    ) {
      await tachyon.say_and_wait(
        '无趣的豚鼠……不过下次如果还打算做出点什么的话，就来找我吧，看在那双眼睛的份上。',
      );
    } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
      if (!plan_b) {
        await tachyon.say_and_wait(
          '诱惑我踏上这条路后，却独自离去吗？极限的彼方终究是独行之路啊。',
        );
      } else {
        await tachyon.say_and_wait([
          '也算给你一个教训吧。下次记得，不要再拘泥于无用之人了……至于',
          tachyon.sex,
          '的前路，我会连你的份见证下去。',
        ]);
      }
    } else if (era.get('love:32') >= 75) {
      await tachyon.say_and_wait(
        '等到这场实验结束之后，我就去找你。在那之前，就当是我给你的一场长假吧。',
      );
    } else if (era.get('cflag:32:育成次数') > 0) {
      await tachyon.say_and_wait([
        '哦呀哦呀，看来这次玩脱了啊，',
        callname,
        '……下次，记得小心点哦。',
      ]);
    }
  },
};
