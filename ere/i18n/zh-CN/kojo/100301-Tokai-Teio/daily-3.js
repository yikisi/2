/**
 * @file 东海帝王 - 日常
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { escape_enum } = require('#/data/basement-const');

module.exports = {
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {number} b_escape 从地下室的逃脱方式
   */
  good_morning(teio, you, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('这样啊……哈。');
          } else {
            teio.say('帝王大人的训练员……哈哈。');
          }
          break;
        case escape_enum.beat:
          teio.say('真的……对不起。');
          era.print([
            teio.sex,
            '低头弯腰，并在之后用言行最大限度地表明了自己的歉意。',
          ]);
          era.print([
            you.get_colored_name(),
            ' 接受了。但 ',
            you.get_colored_name(),
            ' 感觉自家担当最近有些沉迷于体能训练……',
          ]);
          break;
        case escape_enum.strike:
          teio.say('真的……对不起。');
          era.print([
            teio.sex,
            '低头弯腰，并在之后用言行最大限度地表明了自己的歉意。',
          ]);
          era.print([
            you.get_colored_name(),
            ' 接受了。但 ',
            you.get_colored_name(),
            ' 总感觉最近在暗处有一双眼睛在一直盯着自己……',
          ]);
      }
    } else if (era.get('status:0:熬夜') > 0) {
      era.print([
        teio.get_colored_name(),
        {
          color: teio.color,
          content: '「啊……早上好啊训练员，什么，我昨天才没有熬夜啦」',
        },
        '（打呵欠）',
      ]);
    } else {
      const buffer = [];
      buffer.push(
        () => teio.say('今天的训练……有这些吗！我会好好完成的！'),
        () => teio.say('欸，这么快就要开始了吗！'),
        () => teio.say('蜂蜜喝太多了……有点不好受啊。'),
      );
      if (era.get('love:3') >= 50) {
        buffer.push(() =>
          era.print([
            teio.get_colored_name(),
            ` 貌似正在跟其他${teio.uma_sex_title}聊天，听到`,
            you.get_colored_name(),
            `叫${teio.sex}的名字，便结束了对话飞奔过来。`,
          ]),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   * @param {number} b_escape 从地下室的逃脱方式
   */
  select(teio, callname, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('训练员……啊啊。');
          } else {
            teio.say([callname, '，似乎比我从前还要淘气呢。']);
          }
          break;
        case escape_enum.beat:
        case escape_enum.strike:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('我又辜负了你……和这一切。');
            era.print([
              teio.sex,
              '紧闭双眼，攥紧双拳，掌心红的像是要滴出血来。',
            ]);
          } else {
            teio.say('啊，我……');
            teio.say('对不起，训练员。');
            era.print([teio.sex, '似乎变得听话了许多。']);
          }
      }
    } else {
      teio.say(
        Math.random() < 0.5
          ? `唔～叫无敌的帝王大人有什么事吗？`
          : `哼哼，我随时都准备好了！`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async office_study(teio, you) {
    await you.say_and_wait('想不到帝王大人也有不懂的事啊。');
    await era.printAndWait(
      `${you.name} 调戏了${teio.sex}几句，看到${teio.sex}嘟着嘴紧盯着 ${you.name} 的模样，咳了几声便开始正常讲课了。`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async talk(teio, you) {
    if (era.get('base:3:体力') < era.get('maxbase:3:体力') * 0.45) {
      if (Math.random() < 0.5) {
        await teio.say_and_wait('啊……无敌的帝王大人也会有疲劳的时候呀……');
      } else {
        await era.printAndWait([
          teio.get_colored_name(),
          ' 抬起头，眼神有一搭没一搭地看着 ',
          you.get_colored_name(),
          `，是时候让${teio.sex}歇歇了……`,
        ]);
      }
    } else {
      switch (era.get('cflag:3:干劲')) {
        case -2:
          await era.printAndWait([
            teio.get_colored_name(),
            ` 焦急地跺着脚，全身毛发也变得蓬乱起来……还是不要让${teio.sex}做事了`,
          ]);
          break;
        case -1:
          await era.printAndWait([
            teio.get_colored_name(),
            ' 嘴边的微笑消失了……好像有点不太对劲。',
          ]);
          break;
        case 0:
          await era.printAndWait([
            teio.get_colored_name(),
            ' 看上去不是很有精神，虽然还是朝气蓬勃但总觉得少了点什么。',
          ]);
          break;
        case 1:
          await era.printAndWait([
            teio.get_colored_name(),
            ' 自由自在地在操场上奔跑热身，看上去很有干劲。',
          ]);
          break;
        case 2:
          await era.printAndWait([
            teio.get_colored_name(),
            ' 兴奋地原地高抬腿，青春而矫健的身影仿佛在邀请着 ',
            you.get_colored_name(),
            '。',
          ]);
      }
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async office_gift(teio, callname) {
    await teio.say_and_wait([
      '诶！这是，',
      callname,
      ' 给我的礼物吗！我可以现在就打开吗？唔……等到回去吗。好吧，不过还是非常感谢！',
    ]);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async office_cook(teio, you) {
    await teio.say_and_wait('无敌的帝王大人……嗯，这方面，也可以的！');
    await era.printAndWait(
      `${you.name} 看${teio.sex}不甚熟练的烹饪手法，便也一起来帮忙了，很快，一桌样子精致，香味扑鼻的饭菜就好了。`,
    );
    await era.printAndWait([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: '我', color: teio.color },
      '（我）',
      { content: '开动了！', color: teio.color },
      '」',
    ]);
    await era.printAndWait(
      `笑着对视了一下，你们便埋头开始享用亲手做出的美味。`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async office_rest(teio, you) {
    if (era.get('relation:3:0') > 150) {
      await you.say_and_wait(`起来吧，帝王${teio.adult_sex_title}。`);
      await teio.say_and_wait(`嗯——嗯～`);
      await era.printAndWait(
        `${teio.teen_sex_title}的身躯扑倒在 ${
          you.name
        } 的身上，你们两个陷进了沙发里。`,
      );
      await era.printAndWait(
        `吐息产生的气流搔痒着 ${you.name} 的脖颈，${
          you.name
        } 有一搭没一搭地抚摸着担当${teio.uma_sex_title}的后背，不忘用一只手顺带着帮${
          teio.sex
        }梳理毛发。`,
      );
    } else {
      await era.printAndWait(
        `帝王罕见地安静了下来，${you.name} 和${teio.sex}一起坐在沙发上，分享着悠闲。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async office_game(teio, you) {
    await teio.say_and_wait('呀呀呀！无敌的帝王大人是不会输的！');
    await era.printAndWait(
      `屏幕上的角色开始鬼畜乱动，好像操纵者现在的模样一般，${
        you.name
      } 无奈地瞥了一眼旁边全身贯注的${
        teio.sex
      }，小${teio.uma_sex_title}认真操纵着手柄，额头上甚至冒出了细汗，${
        you.name
      } 笑了笑，把目光转回到游戏上。`,
    );
  },
  /** @param {CharaTalk} teio 东海帝王 */
  async s_a_tree_hollow(teio) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('现在的我是……哈哈，哈哈哈，呜——');
    } else {
      await teio.say_and_wait(
        '可恶……我真的想赢，想赢啊！我是帝王！我是无敌的！我一定要……',
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async s_a_dating(teio, you) {
    await era.printAndWait(
      `在学校里……这样真的合适吗？${you.name} 心底涌现着疑问，不过黏在身旁的帝王虽然脸格外地红，却没有显出什么异相。`,
    );
    await era.printAndWait(
      ` 看到${teio.sex}这副模样，${you.name} 反倒松了口气，丝毫没有在意他人的目光，就如情侣一样跟${teio.sex}调笑了起来。`,
    );
  },
  /** @param {CharaTalk} teio 东海帝王 */
  async s_r_lunch(teio) {
    await teio.say_and_wait('到这里吃饭意外地有感觉呢！');
    await era.printAndWait(
      '你们将食盒摊放在……「天花板」上？一起享受起了美好的午饭时间。',
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async o_r_fishing(teio, you, callname) {
    await teio.say_and_wait([callname, '，来啊！']);
    await era.printAndWait(
      `${teio.sex}一边说着一边脱下鞋，赤脚踏进浅水里，莹润洁白的双足在水里愈发显的可爱。`,
    );
    await era.printAndWait(
      `就是可惜这么撒欢估计会把鱼赶跑，${you.name} 无奈地叹了口气，坐在${teio.sex}的身旁开始做钓鱼准备。`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async o_r_walking(teio, you) {
    await teio.say_and_wait(`在河边走～好清爽！`);
    await era.printAndWait(
      `${you.name} 的担当一边哼着歌一边摆出如跳舞一般的步伐。以后可以多来走走，${you.name} 看着${teio.sex}欢快的样子想到。`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async o_s_arcade(teio, you) {
    await era.printAndWait(
      `${you.name} 和 ${
        teio.name
      } 一起来到了街机厅痛快玩了一段时间，临走前，你们决定去娃娃机『浪费』掉多余的币。`,
    );
    await era.printAndWait(
      `不过话虽这么说，你们两个还是比较紧张地操纵着摇杆，再三思考后摁下按钮……`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async o_s_drawing(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '……我就把无敌的帝王好运传给你吧！']);
      await era.printAndWait(
        `${teio.sex}靠近 ${you.name} 的身体，把住了 ${you.name} 的一条胳膊，温暖而有弹性的触感和好闻的香味同时袭来，${you.name} 有些不自然地将另一只手伸进箱内……`,
      );
    } else {
      await teio.say_and_wait('嗯……无敌的帝王大人比运气也不会输的！大概吧……');
      await era.printAndWait(
        `${teio.sex}看向 ${you.name}，${you.name} 点点头，于是 ${teio.sex} 将手伸入箱中……`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async o_s_ktv(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '！我唱的如何！']);
      await era.printAndWait(
        `${you.name} 赶忙把刚举到唇边的水杯放下，摆出一副沉思的姿态面对着笑容满面的担当，刚刚${teio.sex}全神贯注唱了一曲《恋はダービー☆》，现在双颊的红晕还未褪去。`,
      );
      await era.printAndWait(
        `${you.name} 搜肠刮肚找出了一堆夸赞的话语，${teio.sex}看见 ${you.name} 这副样子，笑得更开心了。`,
      );
    } else {
      await era.printAndWait(
        `不知不觉走到了一家KTV里，在${
          teio.sex
        }的强烈要求下你们进去享受了一段时光——不过主要都是${
          teio.sex
        }在唱就对了。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async o_s_movie(teio, you) {
    if (era.get('relation:3:0') > 225) {
      await era.printAndWait(
        `帝王搂着 ${you.name} 的左臂，踮起脚尖贴近 ${you.name} 的耳边说出了一个片名。`,
      );
      await era.printAndWait(
        `${you.name} 看了看，发现那是一部甜腻的爱情片，不由觉得有点好笑，伸出右手去摸帝王的头，却对上了${teio.sex}害羞又坚定的眼神。`,
      );
      await era.printAndWait('嗯……那就像情侣一样一起去看吧。');
    } else if (Math.random() < 0.5) {
      await era.printAndWait(
        `在帝王的强烈要求下，${you.name} 选了一部『有挑战性的恐怖刺激电影』。`,
      );
      await era.printAndWait(
        `果不其然，每到关键镜头，小${teio.uma_sex_title}就受不住了，${
          you.name
        } 靠近 ${teio.sex} 的那条胳膊已经被紧抓到失去知觉……`,
      );
    } else {
      await era.printAndWait(
        `${you.name} 和帝王一起看了一部合家欢喜剧片，内容让人忍俊不禁。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(teio, you, callname, dice) {
    await teio.say_and_wait([callname, '～快点快点，一起来抽一次吧！']);
    await era.printAndWait(
      `小${teio.uma_sex_title}拉起 ${you.name} 的手，向神龛跑去，${
        you.name
      } 赶忙迈起大步跟着跑。不一会到达了目的地，${you.name} 已经满身是汗了……`,
    );
    await era.printAndWait(
      `细嫩的触感从手中抽离出去，${teio.name} 举起了签筒，眯起眼笑着胡乱摇动——`,
    );
    await teio.say_and_wait('嘻嘻——哈！');
    await era.printAndWait(
      `宛如小孩子一般的闹腾后，一枚竹签从容器中飞射而出，${you.name} 抬手用指间夹住，定睛一看：`,
    );
    if (dice < 0.2) {
      await era.printAndWait('（大吉）');
      if (era.get(`relation:3:0`) > 225) {
        await era.printAndWait(
          `${you.name} 走上前去，对着帝王摇了摇竹签，${teio.sex}将其一把夺过，然后露出惊喜的神情，欢呼着扑向 ${you.name}，抱住了 ${you.name} 的腰。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} 大声宣读了抽到大吉的事实，帝王的耳朵欢快地跳了起来，${teio.sex}一步闪到你面前，抓住了 ${you.name} 握着竹签的手，确认竹签上的内容之后嘻嘻地笑起来。`,
        );
      }
    } else if (dice < 0.4) {
      await era.printAndWait('（中吉）');
      await era.printAndWait(
        `${you.name} 念出了上面的字，帝王在原地挺起胸膛，双手叉腰，仿佛在炫耀自己的摇签手法。`,
      );
    } else if (dice < 0.8) {
      await era.printAndWait('（小吉）');
      await era.printAndWait(
        `${you.name} 将其交予帝王，${teio.sex}开心地笑了。`,
      );
    } else {
      await era.printAndWait('（凶）');
      await era.printAndWait(
        `${
          you.name
        } 犹豫了一下，没有出声，帝王察觉到了什么，有些尴尬地站在原地，然后你们两个决定将此事抛诸脑后。`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async good_night_normal(teio, you, callname) {
    era.print(`繁忙的一天结束，${you.name} 把 ${teio.name} 送到学生宿舍门口。`);
    teio.say(['明天再见了！', callname, '！']);
    era.print(
      `虽然度过了累人的一天，不过${teio.sex}还是一如既往地元气呢。${you.name} 一边这么想着，一边与${teio.sex}挥手告别。`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  gn_sex_intro(teio, you) {
    era.print(`繁忙的一天结束，${you.name} 把 ${teio.name} 送到学生宿舍门口。`);
    era.print(
      '正要像往常一样分别时，不知为何，两边都停止了动作，现场陷入了短暂的沉默……',
    );
    era.print([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: '唔，', color: teio.color },
      '嗯——」',
    ]);
    era.print(
      `沉默之后又是同时发声，气氛好像又尴尬了。不过倒是有点滑稽，${teio.uma_sex_title}的眉眼露出了几分笑意，也让${
        teio.sex
      }更大胆了，先 ${you.name} 一步开口道`,
    );
    teio.say('那个，我做好了外宿申请，所以今天……');
  },
  gn_sex_confirm: (teio, you) => [
    '声音逐渐微弱下去，血液涌上脸颊，',
    you.get_colored_name(),
    ' 看到',
    teio.sex,
    '这副模样实在忍不住了，决定——',
  ],
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   * @param {number} check 求爱检定值，如果是大成功，拒绝求爱会转逆强奸
   */
  async gn_sex_reject(teio, you, callname, check) {
    if (check !== 2) {
      return;
    }
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('唔……这样啊。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着犹自挺胸看着自己，眼神却黯淡下去的',
        teio.sex,
        '，不禁于心不忍，伸起一只手抚向',
        teio.sex,
        '的头。',
      ]);
      await era.printAndWait([
        '但突然之间，',
        teio.sex,
        '抬手，五根细笋般的手指稳稳扣住了 ',
        you.get_colored_name(),
        ' 的掌心，',
        you.get_colored_name(),
        ' 想发力抽回，却毫无反应——',
      ]);
      await teio.say_and_wait([callname, '……']);
      await era.printAndWait([
        teio.sex,
        '越发靠近 ',
        you.get_colored_name(),
        ' 了。',
      ]);
      await teio.say_and_wait('我……无论在哪些地方，都不想，也不会放手啊。');
    } else {
      await teio.say_and_wait(
        '是——这样——吗？那我们就走吧！东西和地方已经准备好了！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 还没来得及发布或强调任何事情，就被发挥体能优势的',
        teio.uma_sex_title,
        '带着如一阵风般强行移动了……或许 ',
        you.get_colored_name(),
        ' 的意见在此时此地并不重要，',
        teio.get_colored_name(),
        ' 只是单纯地通知一下 ',
        you.get_colored_name(),
        ' 接下来会发生什么。',
      ]);
    }
  },
  cl_new_year: (() => {
    const title = '新年';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        '是新年哦！',
        callname,
        '，准备好了吗！我们要玩什么？今天一起彻夜狂欢吧！',
      ]);
      await era.printAndWait(
        `${you.name} 赶忙示意${teio.sex}小声一点，要是任凭${teio.sex}这么喊下去自己的风评恐怕就要变成勾引学生的变态教师了。这孩子可真不让人省心。`,
      );
      await era.printAndWait(
        `不过……看着担当${teio.uma_sex_title}在自己身旁开心地蹦蹦跳跳，活力十足的样子，${
          you.name
        } 突然觉得，一年到头的忙碌都是值得的。`,
      );
    };
    f.title = title;
    return f;
  })(),
  cl_valentine: (() => {
    const title = '情人节';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('蜂蜜蜂蜜～嘻嘻～');
      await era.printAndWait(
        ` ${you.name} 从桌上抬起头，看见了背手于身后，笑眯眯地看着 ${
          you.name
        } 的${teio.uma_sex_title}${teio.teen_sex_title}。`,
      );
      await teio.say_and_wait([callname, '～这是我给你做的礼物～']);
      await era.printAndWait(
        `${teio.sex}把手到前面，一个不算很精致但能看出用心包装的小盒子展现在 ${you.name} 的眼前。`,
      );
      era.print([you.get_colored_name(), '——']);
      era.printButton('接受礼物', 1);
      era.printButton(`连${teio.sex}一起吃掉`, 2, {
        disabled: era.get('love:3') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} 接过，道了声谢，当着${teio.sex}的小心地打开包装，把里面的巧克力吃了下去。`,
        );
        await era.printAndWait(
          `在放下七八份照顾过的学生和同事送来的巧克力之后，${you.name} 坐在办公桌后，准备工作。`,
        );
      } else {
        await era.printAndWait(
          ` ${you.name} 从${teio.sex}的手上接过礼盒，却没有急于吃掉，而是慢慢地用另一只手解开包装，同时保持握着${teio.sex}的手`,
        );
        await era.printAndWait(
          `等到${teio.sex}脸红到耳根的时候，${you.name} 突然把${teio.sex}一把揽入怀中，含着巧克力吻向${teio.sex}的唇。`,
        );
        await era.printAndWait(
          `蜂蜜与可可的香甜缠绕上了${teio.teen_sex_title}的小舌……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_temple_fair: (() => {
    const title = '庙会';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} 发了消息邀请。很快地，${teio.name} 便回复了 ${you.name}。`,
      );
      await teio.say_and_wait(`训——练——员——`);
      await era.printAndWait(
        `${teio.teen_sex_title}换上了一身将稚气全部化为可爱，又隐约带着性感与诱惑的浴衣，在 ${
          you.name
        } 面前转了个圈。`,
      );
      await teio.say_and_wait(`我这身怎么样？`);
      era.printButton('「嗯……」', 1);
      await era.input();
      await era.printAndWait(`不好回答。`);
      await era.printAndWait(`感觉在自己的内心深处，已经有什么东西绷掉了。`);
      await era.printAndWait(
        `身型娇小的${teio.teen_sex_title}穿着，完美透露出了那尚未发育完全，但同样充满性吸引力的身材。`,
      );
      await era.printAndWait(
        `最上面纯白色的耳套，仿佛钦点了小${teio.uma_sex_title}作为纯情学生的身份，再往下，宽松的布料并没有完全贴近身体强调曲线，而是镂空了腋下侧肋的部分。`,
      );
      await era.printAndWait(
        `平时隐藏着的，嫩滑洁白的敏感皮肤此时完全暴露在 ${you.name} 的目光里，如果 ${you.name} 想的话，甚至可以伸出手去亲自试试触感……`,
      );
      await teio.say_and_wait(`唔唔？`);
      await era.printAndWait([
        you.get_colored_name(),
        ' 沉浸在',
        teio.teen_sex_title,
        '绝美的样子中，一时难以自拔。',
      ]);
      era.printButton('忍不住了！', 1, { disabled: era.get('love:3') < 75 });
      era.printButton('钢之意志！', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${
            you.name
          } 长吸一口气，迈着已变沉重的身体走到${teio.uma_sex_title}身边，伸出大手——`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_halloween: (() => {
    const title = '万圣节';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        '整理完今天的工作，收拾好办公室，',
        you.get_colored_name(),
        ' 歇了歇脚，等待着学院的钟声。',
      ]);
      await era.printAndWait('今天，有事会发生。');
      await era.printAndWait([you.get_colored_name(), ' 等待注定的命运。']);
      era.println();
      await era.printAndWait('「咚——，砰砰砰，咚——」');
      await era.printAndWait([
        '奇异的敲门声传来，',
        you.get_colored_name(),
        ' 屏住呼吸，闪到门后，顺势拉开房门——',
      ]);
      era.println();
      await era.printAndWait('一团血红闪进。');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 悄无声息，扑了上去。']);
      era.println();
      await teio.say_and_wait('哇！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 的偷袭并没有得手，',
        teio.sex,
        '及时转身，刚好和 ',
        you.get_colored_name(),
        ' 撞了个满怀。',
      ]);
      era.println();
      await teio.say_and_wait('别想吓到帝王大人！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 的担当双手叉腰，一身小红帽打扮，一手提着篮子，一手过来抓 ',
        you.get_colored_name(),
        '。',
      ]);
      era.println();
      await teio.say_and_wait('坏大人快来陪我！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 连声应是，按你们约定好的陪',
        teio.sex,
        '出门了……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '圣诞节';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        '圣诞节！嗯，',
        callname,
        ' 要么就扮圣诞老人送我礼物，要么就陪我通宵玩个痛快吧！',
      ]);
      await era.printAndWait(
        `${you.name} 表示抗议，不过显然，还是应付不了这位精力旺盛的担当。`,
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async load_talk(teio, callname) {
    await teio.say_and_wait([callname, '……要抛弃这个孩子？为什么……']);
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: get_gradient_color(teio.color, '#ff0000', 0.5),
          content:
            '「为什么……为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么为什么」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: 'red',
          content: '「为什么……为什么为——」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '3rem' },
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async end_talk(teio, you) {
    if (era.get('flag:变态行为') === 0) {
      if (era.get('love:3') >= 75) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            '看来我们一起退场的时候还是到了……终归还是，有点不甘心啊。',
          );
        } else {
          await teio.say_and_wait('训练员……不管怎样，我永远都会这么叫你的。');
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait([
          '没有说话，',
          teio.sex,
          '只是最后看了 ',
          you.get_colored_name(),
          ' 一眼，蓝黑的瞳孔中充盈着连泪水也无法洗净的污秽。',
        ]);
      } else {
        await teio.say_and_wait(
          '是从什么时候开始，二人前进的路线发生了偏移呢……？',
        );
      }
    } else {
      if (era.get('love:3') >= 50) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            '竟然，竟然是这种结局……不行！你也会也得一直待在我身边！不管别人怎么看，你永远都是我的训练员！',
          );
        } else {
          await teio.say_and_wait(
            '噫欸——被，被发现了吗。那，那么以后，我们偷偷的……你给我负起责任啊！',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await teio.say_and_wait('是从什么时候开始，你们的眼神错开了呢……');
      } else {
        await teio.say_and_wait('……同意解约。');
      }
    }
  },
};
