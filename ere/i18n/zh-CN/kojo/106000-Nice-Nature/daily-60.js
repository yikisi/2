/**
 * @file 优秀素质 - 日常
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   * @param {string} self_call 优秀素质的自称
   */
  good_morning(nature, callname, self_call) {
    const buffer = [
      () => nature.say(`今天的训练安排是什么？让我看看清单嘛`),
      () =>
        nature.say(
          `昨天烧烤店的大叔说又上架了些新菜品，之后要一起去尝尝吗？我请客哟～`,
        ),
      () =>
        nature.say(
          `嘘——！小声点！你看，那边有只猫猫在睡觉呢，要不我们换个地方吧？`,
        ),
      () =>
        nature.say(`哦！${callname}你一副很高兴的样子嘛，是遇上什么好事了吗？`),
      () =>
        nature.say(
          `说起来，晚饭决定好吃什么了吗？还没决定的话就让 ${self_call} 来给你露一手吧！`,
        ),
    ];
    if (era.get('status:60:熬夜') > 0) {
      buffer.push(() => {
        nature.say(`唔哈——啊……${callname}？为什么在打哈欠？啊哈哈哈……`);
        nature.say(
          `这下瞒不住了啊，其实，${self_call} 本来打算看完一个相声视频就睡觉的，结果实在是太有趣了，不知不觉就……`,
        );
        nature.say(
          `等回过神来时，已经是凌晨了，不过真的很有趣哦？要不${callname}也来看看？`,
        );
      });
    } else if (era.get('base:60:体力') === era.get('maxbase:60:体力')) {
      buffer.push(() => {
        nature.say(
          `哦～${callname}，早上好呀！托你的福，${self_call} 休息的很好呢！吃了不少美食，觉也睡得饱饱的，现在感觉浑身精力充沛哦？`,
        );
        nature.say(
          `总感觉好像年轻了许多呢！唯一有些遗憾的就是……啊，没什么，总之快告诉我接下来的安排吧？`,
        );
      });
    } else {
      buffer.push(() =>
        nature.say(
          `啊，${callname}啊，早上好～睡了个好觉后总感觉疲惫也一扫而光了呢，如果能再有人按摩一下的话就更好了～嘛，不说这些了，接下来的安排是？`,
        ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} self_call 优秀素质的自称
   */
  select(nature, self_call) {
    if (Math.random() < 0.5) {
      nature.say(`怎么了怎么了？找 ${self_call} 有什么事吗？`);
    } else {
      nature.say(`嗯？有事情要做吗？那 ${self_call} 就来陪你一起吧！`);
    }
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   */
  async office_study(nature, callname) {
    await nature.say_and_wait(
      `嘿——没想到 ${callname} 连这种题都会啊？难道说以前是个高材生？`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   */
  async office_prepare(nature, callname) {
    await nature.say_and_wait(
      `我不会辜负商店街的大家和 ${callname} 的期待的！`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   * @param {string} self_call 优秀素质的自称
   */
  async talk(nature, callname, self_call) {
    const buffer = [];
    switch (era.get('cflag:60:干劲')) {
      case -2:
        buffer.push(
          () => nature.say_and_wait('啊——浑身……提不起劲……'),
          () =>
            nature.say_and_wait(
              '啊——不行！满脑子想的都是坏事……得赶紧冷静下来才行……',
            ),
        );
        break;
      case -1:
        buffer.push(
          () => nature.say_and_wait('唔——总感觉有些提不起劲呢。'),
          () =>
            nature.say_and_wait('浑身上下总感觉不对劲呢……是不是该休息一下了？'),
        );
        break;
      case 0:
        buffer.push(
          () =>
            nature.say_and_wait(`日安，${callname}。今天的训练内容是什么？`),
          () =>
            nature.say_and_wait(
              `训练、比赛还是别的什么的，就交给 ${callname} 安排了～我会在能力范围内去做的。`,
            ),
          () => nature.say_and_wait(`哈呀——啊，${callname} 啊。今天的安排是？`),
        );
        break;
      case 1:
        buffer.push(
          () =>
            nature.say_and_wait(
              '嗯～感觉不错呢，这样的话也许能……什么都没有！哈哈哈哈……',
            ),
          () => nature.say_and_wait('真是好天气呢，今天会有什么事呢？'),
          () =>
            nature.say_and_wait(
              `哦～总感觉会有什么好事发生呢？你说呢，${callname}？`,
            ),
        );
        break;
      case 2:
        buffer.push(
          () =>
            nature.say_and_wait(
              '哦斯～今天也全力上吧——开玩笑的，不过我会在能力范围内尽力就是了。',
            ),
          () =>
            nature.say_and_wait(
              `${self_call} 状态绝佳！干脆去跑两圈吧？不过对结果别抱太大希望就是了。`,
            ),
          () =>
            nature.say_and_wait(
              `哦？${callname} 早啊～要一起吃个早饭或者散散步吗？我请客哦？`,
            ),
        );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   */
  async office_gift(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `诶？这是送给我的？谢谢你，${callname}！不知道我的喜好？没事了，${callname} 光是有这份心意我就很开心啦！`,
      );
    } else {
      await nature.say_and_wait(
        `什么什么？礼物？哇！谢谢 ${callname}！我可以现在拆开吗？`,
      );
    }
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   * @param {string} self_call 优秀素质的自称
   */
  async office_cook(nature, callname, self_call) {
    await nature.say_and_wait(
      `料理什么的交给 ${self_call} 就行啦！${callname} 就到一旁休息去吧！好了快去快去！`,
    );
  },
  /** @param {CharaTalk} nature 优秀素质 */
  async office_rest(nature) {
    await nature.say_and_wait(
      '偶尔像这样两个人一起无所事事也不错呢，偶尔的话。',
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} self_call 优秀素质的自称
   */
  async office_game(nature, self_call) {
    await nature.say_and_wait(
      `哦？要向 ${self_call} 发起挑战吗？好胆识！那输的人要答应赢家一个请求哦？这样才有干劲嘛！`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   */
  async s_a_tree_hollow(nature, callname) {
    await nature.say_and_wait(
      `可恶！！！！！明明大家和 ${callname} 都那么期待我，我却——`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   */
  async s_a_dating(nature, callname) {
    await nature.say_and_wait(
      `在学校里这样……多少还是会意识到周围的目光呢……不过要是 ${callname} 无所谓的话——`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} self_call 优秀素质的自称
   */
  async s_r_lunch(nature, self_call) {
    await nature.say_and_wait(
      `锵锵！是 ${self_call} 的手制便当哦！每天都要保证营养均衡才行呢！`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   * @param {string} self_call 优秀素质的自称
   * @param {PrintedSpan} call_20 优秀素质对青云天空的称呼
   */
  async o_r_fishing(nature, callname, self_call, call_20) {
    await nature.say_and_wait([
      '说起来，我之前和 ',
      call_20,
      ' 一起出来钓过几次鱼，从',
      nature.sex,
      '那里学到了不少技巧呢！怎么样，',
      callname,
      '？要不要 ',
      self_call,
      ' 来教教你呀？',
    ]);
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   */
  async o_r_walking(nature, callname) {
    await nature.say_and_wait(
      `今天真是好天气呢～干脆午饭就在这河边找个地方吃了吧？${callname} 要一起吗？`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   */
  async out_river_talk(nature, callname) {
    await nature.say_and_wait('……然后，蔬菜店的阿姨就又……');
    await era.printAndWait(
      `一边感受着吹拂而来的清爽的河风，一边听着 ${nature.name} 滔滔不绝的讲着商店街的家常`,
    );
    await nature.say_and_wait(`……${callname}？你有在听吗？`);
    await era.printAndWait(
      `似乎是因为没有回应而感到不满，${nature.name} 发出了娇嗔`,
    );
    await era.printAndWait(
      `在作出答复和安抚后，${nature.name} 才又恢复了刚才的劲头……`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   * @param {string} self_call 优秀素质的自称
   */
  async o_s_arcade(nature, callname, self_call) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `这爪子看起来好像没什么力道，真的能抓的上来吗？……什么？以前特训出来的秘技？没想到 ${callname} 也有这样青春的一面呢。那就让 ${self_call} 见识一下吧？`,
      );
    } else {
      await nature.say_and_wait(
        `街机厅吗……经常能看到很多年轻的孩子来这边玩呢。我？我又不是会经常来这里玩的那种角色啦！${self_call} 可是家务派哦？嘛，偶尔一起来玩一下倒也不错啦，偶尔的话。`,
      );
    }
  },
  /** @param {CharaTalk} nature 优秀素质 */
  async o_s_drawing(nature) {
    await nature.say_and_wait(
      `会抽到什么呢？嘛，虽然大概率是三等奖就是了……不过万一呢？`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   * @param {string} self_call 优秀素质的自称
   */
  async o_s_ktv(nature, callname, self_call) {
    await era.printAndWait(`与 ${nature.name} 一同去了卡拉OK……`);
    await nature.say_and_wait('——怎、怎么样，我唱的歌？');
    await era.printAndWait(`曲毕，${nature.name} 有些紧张地等待着评价`);
    await nature.say_and_wait(
      `天籁什么的……也太夸张了吧？${callname}，就算对 ${self_call} 花言巧语也讨不到什么好处哦？` +
        `好啦！接下来轮到 ${callname} 了！`,
    );
    await era.printAndWait(`与 ${nature.name} 一起度过了一段愉快的时光。`);
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   */
  async o_s_movie(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `恋爱电影吗？${callname} 意外地还挺少女心？觉得我会比较喜欢？哈哈哈——`,
      );
      await nature.say_and_wait(
        `这种题材更适合那些年轻的小女生或者卿卿我我的情侣啦，不过 ${callname} 想看的话我也可以奉陪就是了。`,
      );
      await nature.say_and_wait(`只要能跟 ${callname} 一起看的话……`, true);
    } else {
      await nature.say_and_wait(
        '呀……这副海报还真是有魄力呢，巨大机器人与鸡形怪兽的大决战，虽然不知道是什么设定，但总觉得应该会很有趣，要不今天就看这个了？',
      );
    }
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} self_call 优秀素质的自称
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(nature, self_call, dice) {
    await nature.say_and_wait(`我看看，${self_call} 今天的运势是——`);
    await era.printAndWait(
      `${nature.name} 轻轻摇晃着签筒，不一会，一条纸签便从中落出：`,
    );
    if (dice < 0.1) {
      await nature.say_and_wait(
        `哦～大吉！难道 ${self_call} 也能闪闪发光了吗……开个玩笑，不过这样的好运要是能留给比赛里就好了！`,
      );
    } else if (dice < 0.25) {
      await nature.say_and_wait('中吉——还不错呢，说不定最近会有什么好事发生？');
    } else if (dice < 0.6) {
      await nature.say_and_wait(
        '唔，小吉啊，还算过得去的结果吧。不过从高往低数……这好像也是第三？',
      );
    } else {
      await nature.say_and_wait(
        '呜哇……万万没想到居然是……嘛、嘛，不过是签运不好而已，不要在意不要在意！……应该不会发生什么倒霉事……吧……',
      );
    }
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   */
  async o_s_restaurant(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `这边也有好多吃的呢，${callname} 想吃什么呢？这家吗？好，那我们走吧！`,
      );
      await nature.say_and_wait('总之先记下来训练员喜欢的口味……', true);
    } else {
      await nature.say_and_wait(
        '唔……稍微有点饿了呢，要在这附近随便吃点什么吗？',
      );
    }
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   * @param {string} self_call 优秀素质的自称
   */
  async o_s_dating(nature, callname, self_call) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `那个……要不要，牵一下手呢？你看……这样不是更有约会的感觉吗？可以吗！？欸嘿嘿……${callname} 的手，真温暖呢——`,
      );
    } else {
      await nature.say_and_wait(
        `有点累了吗？那要来试试……${self_call} 的膝枕吗？啊，脸不要朝着我这边啦！会很……难为情的……`,
      );
    }
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {string} callname 优秀素质对玩家的称呼
   * @param {string} self_call 优秀素质的自称
   */
  async o_s_shopping(nature, callname, self_call) {
    await era.printAndWait(`与 ${nature.name} 一同去逛商店……`);
    await nature.say_and_wait('噢～这件衣服看起来挺可爱嘛——');
    await era.printAndWait(`${nature.name} 看着橱窗里展示的衣物感慨道`);
    await nature.say_and_wait(
      `对吧？${callname} 也是这么觉得的吧？……等、等下我可没说想要试穿哦？`,
    );
    await nature.say_and_wait(
      `你看，这种轻飘飘的风格更适合年轻人，对吧？${self_call} 不合适啦！`,
    );
    await era.printAndWait(`面对劝说，${nature.name} 再三推辞，最终落荒而逃。`);
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {CharaTalk} you 玩家
   * @param {string} callname 优秀素质对玩家的称呼
   */
  good_night_normal(nature, you, callname) {
    era.print(
      `繁忙的一天结束，${you.name} 把 ${nature.name} 送到学生宿舍门口。`,
    );
    nature.say(`今天辛苦您了！明天再见，${callname}！`);
    era.print(
      `一边挥手一边目送 ${nature.name} 的背影离开后，${you.name} 也转身离去，回到自己的宿舍休息。`,
    );
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {CharaTalk} you 玩家
   * @param {string} callname 优秀素质对玩家的称呼
   * @param {number} check 求爱检定值，如果是大成功则默认同意
   */
  async good_night_sex(nature, you, callname, check) {
    era.print(
      `繁忙的一天结束，${you.name} 把 ${nature.name} 送到学生宿舍门口。`,
    );
    era.print(
      `${you.name} 刚打算如往常一样挥手告别，却突然被优秀素质拽住了袖脚。`,
    );
    era.print(
      '低头一看，不知是否是夕阳的映衬，优秀素质低垂着的脸庞显得格外的娇红。',
    );
    era.print(
      `一阵短暂的沉默后，红发${nature.teen_sex_title}才支支吾吾开口打破了这份尴尬。`,
    );
    nature.say(
      '今天……已经做好外宿申请了……所以……再在一起呆一会也是可以的哟？那个……如果……',
    );
    nature.say(`如果 ${callname} 想的话……更、更进一步的事也——`);
    era.print(
      `至此，${nature.teen_sex_title}的双颊已经烧的通红，双眸含情脉脉的注视着 ${
        you.name
      } 的眼睛，${nature.sex}后续的言语，及时没说出口，${
        you.name
      } 也已是心知肚明。`,
    );
    era.printButton('答应', 1);
    era.printButton('拒绝', 2, { disabled: check === 2 });
    const ret = await era.input();
    if (ret === 1) {
      nature.say('真、真的吗！');
      era.print(
        `优秀素质原本羞涩的脸上瞬间涌起了激动与喜悦，不等 ${you.name} 再次肯定，不由分说的便抱住了 ${you.name} 的手臂，并附在耳边轻声低语：`,
      );
      nature.say(
        `今晚的训练，也请你多多指教咯？训 · 练 · 员 · ${you.adult_sex_title} ❤️`,
      );
      era.print(
        `就这样，${
          you.name
        } 被优秀素质拉着离开了宿舍前的大门，在其他放学的${nature.uma_sex_title}们温暖的目送下，走向了街道的另一头……`,
      );
    } else {
      nature.say('是吗……这样啊……');
      era.print(
        `${nature.teen_sex_title}松开了抓住袖角的手，脸上浮现了一抹难以隐去的失落。`,
      );
      nature.say(
        `嗯，没事的，我也真是，${callname}今天明明都这么累了，也确实该休息休息了，刚才的话就拜托你当没听到吧，晚安啦，${callname}，明天再见！`,
      );
      era.print(
        `看着${nature.teen_sex_title}落寞离去的背影，${
          you.name
        } 心头涌上一股说不出的滋味。`,
      );
    }
    return ret;
  },
  cl_valentine: (() => {
    const title = '情人节';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string} self_call 优秀素质的自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(`呀，${callname}，早上好呀`);
      await era.printAndWait(
        '一大早，刚到学园，优秀素质就像等候多时一样出现在校门口。',
      );
      await nature.say_and_wait('欸……那个……嘛，等会训练场见！');
      await era.printAndWait(
        `${nature.teen_sex_title}一副想说什么的样子，但最终没能开口，转身跑进校门。`,
      );
      era.drawLine({ content: '⏰到了中午⏰' });
      await nature.say_and_wait(`哦～${callname}，是 ${self_call} 哟？`);
      await era.printAndWait('在食堂用餐时，优秀素质突然出现在身边，');
      await nature.say_and_wait(
        `这里有好东西要给 ${callname} 呢，就是这个qiao……`,
      );
      await era.printAndWait('优秀素质欲言又止，好像要说的话有些难以启齿。');
      await nature.say_and_wait(
        `qiao……荞麦面优惠劵！之前商店街的阿姨给了我几张，我自己又用不完，就送给 ${callname} 了！哈哈哈哈……那么，回见！`,
      );
      await era.printAndWait('优秀素质样子有些奇怪的逃离了食堂');
      era.drawLine({ content: '⏰到了晚上⏰' });
      await nature.say_and_wait('送到这就可以了哦？');
      await era.printAndWait(
        '送优秀素质回到了栗东寮的门口，刚准备离去，却被优秀素质拉住了衣角。',
      );
      await nature.say_and_wait('这、这个！还请收下！');
      await era.printAndWait(
        '优秀素质俏脸通红，鼓起勇气从背后把巧克力递了出来',
      );
      await nature.say_and_wait(
        '姑且……是我亲手做的巧克力，如果不喜欢的话，不要也是可以的哦……？',
      );
      await era.printAndWait('但如此珍贵的礼物，怎么可能拒绝呢？');
      await era.printAndWait('与优秀素质的羁绊，更上一层楼了。');
    };
    f.title = title;
    return f;
  })(),
  cl_fans: (() => {
    const title = '粉丝感谢祭';
    /** @param {CharaTalk} nature 优秀素质 */
    const f = async (nature) => {
      await nature.say_and_wait('哇啊——这也太热闹了吧？');
      await era.printAndWait('看着被来客挤满的校园，优秀素质感叹道');
      await nature.say_and_wait(
        '不过大部分都是帝王或者麦昆那些闪耀的大明星们的粉丝吧？',
      );
      await nature.say_and_wait('像我这样的小角色就去后勤——');
      await era.printAndWait('？？？「啊！找到小素质了！」');
      await era.printAndWait(
        `就在优秀素质转身准备离开的时候，一道女声响起，叫住了${nature.sex}。`,
      );
      await nature.say_and_wait('诶？蔬菜店的阿姨？您怎么来了？');
      await era.printAndWait(
        '蔬菜店的阿姨「当然是来看小素质在学校的生活怎么样啊！不只是我——」',
      );
      await nature.say_and_wait(
        '啊！烧烤屋的大叔！小卖部的奶奶……怎么大家都来了……',
      );
      await era.printAndWait(
        '蔬菜店的阿姨「当然要来啦！我们大家可是小素质的粉丝啊！」',
      );
      await nature.say_and_wait(
        '呜……你们这份心意我很高兴啦……但是，这样……总觉得，好羞耻……',
      );
      await era.printAndWait(
        '把自己脸用辫子埋住的优秀素质被商店街的街坊们团团围住，',
      );
      await era.printAndWait(
        `看来${nature.sex}似乎会十分愉快的度过这个粉丝祭……`,
      );
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '圣诞节';
    /**
     * @param {CharaTalk} nature 优秀素质
     * @param {string} callname 优秀素质对玩家的称呼
     * @param {string} self_call 优秀素质的自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait('喂喂？是我哦？不是诈骗电话是本人哦？');
      await era.printAndWait('电话那头传来了熟悉的声音，正是优秀素质。');
      await nature.say_and_wait(
        '那个啊，能麻烦你来公园一趟吗？就现在……嗯，等会见！',
      );
      era.drawLine({ content: '⏰到了公园⏰' });
      await nature.say_and_wait(`啊，来了啊，${callname}！这边这边～`);
      await era.printAndWait('大老远就能看见优秀素质朝着这边招手。');
      await era.printAndWait('今天是圣诞节的嘛');
      await nature.say_and_wait(
        `嘛，也没有什么大事，只是 ${self_call} 看你好像没有什么安排的样子，就决定邀请你一起过圣诞节而已！`,
      );
      await nature.say_and_wait('不行……吗？');
      await era.printAndWait(
        '得到了肯定的答复后，优秀素质再度展露笑颜，旋即从身后递出来一个礼物盒',
      );
      await nature.say_and_wait(
        '这个！圣诞快乐！这是，我亲手织的围巾……虽然不是很熟练，花色也比较土气……',
      );
      await nature.say_and_wait('但！如果不嫌弃的话，还请收下！');
      await era.printAndWait(
        '盒中是一条编织精美的围巾，能看出来优秀素质的用心',
      );
      await nature.say_and_wait(
        '很喜欢吗？这、这样啊……不是因为照顾我的心情才这么说的吧？',
      );
      await era.printAndWait(
        '在解除优秀素质的不安后，二人一起度过了一个安宁详和的圣诞节……',
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {PrintedSpan} callname 优秀素质对玩家的称呼
   * @param {string} self_call 优秀素质的自称
   */
  async load_talk_normal(nature, callname, self_call) {
    await nature.say_and_wait([
      '如果是 ',
      callname,
      ' 的话，一定能找到更好的路线吧……',
      self_call,
      ' 相信着你哦？不管是现在还是之前，亦或是未来……',
    ]);
  },
  /**
   * @param {CharaTalk} nature 优秀素质
   * @param {PrintedSpan} callname 优秀素质对玩家的称呼
   */
  async load_talk_pregnant(nature, callname) {
    await nature.say_and_wait([
      '啊哈，是吗，果然内恰小姐还是……但是等等，不行，',
      callname,
      '，我们的孩子，至少，至少给我们的孩子一个名字吧……',
    ]);
    await nature.say_and_wait(
      '这孩子没有爸爸也无所谓，我能一个人养大，但至少，求求你，一个名字……',
    );
    await nature.say_and_wait([
      '『花月自然』？『优雅素质』？类似的，名字，这是内恰小姐麻烦你的最后一件事，',
      callname,
      '，给我一个名字吧……',
    ]);
    await era.printAndWait(
      [nature.get_colored_name(), '「', callname, '————！！」'],
      { color: nature.color, fontSize: '3rem' },
    );
  },
};
