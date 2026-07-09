/**
 * @file 调教地文 - 睡奸
 * @author O口口口口口
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('吻下去了。');
      await attacker.print_and_wait([
        '因为 ',
        a_call_d,
        ' 在睡梦中无意识微微分开的双唇看上去很好吻的样子。',
      ]);
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '把倏地想要弹起的右手摁了回去，只要侧着身更多地将身子俯下的话就能完全占有这份唇间的温度。',
      );
      await attacker.print_and_wait('只是……一个人的话果然还是有点寂寞。');
    } else {
      await defender.say_and_wait('唔——');
      await attacker.print_and_wait(
        '脑袋开始无意识地摇晃起来了，脸色也带上了些潮红，是呼吸有些急促了吧。',
      );
      await attacker.print_and_wait('差不多该停下来……或者做些其他事了吗。');
      await defender.say_and_wait('啾……');
      await attacker.print_and_wait('那就最后一次……？');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '明明捧着脸吻到了更深的地方，但是反而有些空虚……',
      );
      await attacker.print_and_wait([
        '确保面前 ',
        a_call_d,
        ' 的唇齿之间落满了自己的气味，以偷偷摸摸的角度来说应当算是大胜利了……',
      ]);
      await attacker.print_and_wait([
        '哈……但是反倒会希望 ',
        a_call_d,
        ' 能就这么醒来，然后惊慌失措地看过来……会很有趣吧ww',
      ]);
    } else {
      await defender.say_and_wait('哈……哈……');
      await attacker.print_and_wait('绷紧，挣扎，然后放弃。');
      await attacker.print_and_wait([
        '被捧着脸用舌头欺负到脸红的 ',
        a_call_d,
        ' 身体意外的很好懂。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('真好啊……');
      await attacker.print_and_wait('柔软的，温暖的，而且……现在是不会逃走的。');
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '从那苦闷的微微张开的双唇中漏出的喘息，能充分地叫人明白，这对耳朵究竟偏好被双手怎样地对待。',
      );
    } else {
      await defender.say_and_wait('哈……❤️');
      await attacker.print_and_wait(
        '明明一开始……还只是因为这对温暖耳朵过于适手而舍不得松开。',
      );
      await attacker.print_and_wait([
        '但渐渐的，就开始想要对沉沉睡去的 ',
        a_call_d,
        ' 那无意识流露出的可爱表情与声音尽力地做全收集了。',
      ]);
      await attacker.print_and_wait('没关系的……时间还有很多。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pull_ear(attacker, defender, a_call_d) {
    const is_trainer = attacker.id === 0 && !attacker.race && attacker.race > 0;
    await attacker.print_and_wait('这样是不对的……');
    await attacker.print_and_wait(
      is_trainer
        ? '……这不是作为恋人或是训练员应当做的事……'
        : '……这不是作为恋人应当做的事……',
    );
    await attacker.print_and_wait('……不过');
    await attacker.print_and_wait([
      '面对着面前 ',
      a_call_d,
      is_trainer
        ? ' 无防备露出苦闷表情的睡颜，这种训练员失格的恶作剧完全没法停下来啊。'
        : ' 无防备露出苦闷表情的睡颜，这种恶作剧完全没法停下来啊。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '不需要小心翼翼，因为面前随着呼吸而浅浅起伏着的欧派是没办法从这双手中逃走的。',
      );
      await attacker.print_and_wait(
        '所以，尽情地伸开五指去感受这似乎要从指缝间溜走的柔软与温暖吧。',
      );
      await attacker.print_and_wait(
        '甚至将口鼻都凑上去，去吸嗅那乳肉间白天绝对不会被允许的奶香气味也完全是不会被拒绝的。',
      );
    } else {
      await attacker.print_and_wait([
        '真是丢人啊，将睡着的 ',
        a_call_d,
        ' 压在身下，双手深陷在那对软肉中难以自拔的自己。',
      ]);
      await attacker.print_and_wait([
        '对 ',
        a_call_d,
        ' 脸上逐渐蹙起的眉头视而不见，对身下逐渐升温的柔软娇躯置之不理……',
      ]);
      await attacker.print_and_wait(
        '甚至这种动作完全没有经过允许或含羞的默认……',
      );
      await attacker.print_and_wait('……槽糕，突然变得更加兴奋了嘶。');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('嗯……是错觉吗……');
      await attacker.print_and_wait(
        '感觉乳头硬起来的速度，比起醒着的时候要更慢一些啊。',
      );
      await attacker.print_and_wait(
        '因为不会被抱怨或是本能的挣扎甩到一边，所以顺着那粉嫩的凸起向上揪提的两根手指动作优雅而娴熟。',
      );
      await attacker.print_and_wait('诶……也就是说……');
      if (!attacker.race && attacker.race > 0) {
        await attacker.print_and_wait([
          '尝试着咀嚼身下的 ',
          a_call_d,
          ' 在被自己揪起乳头时究竟有着怎样缠绵婉转的思绪，失格的下流训练员笑得眯起了双眼。',
        ]);
      } else {
        await attacker.print_and_wait([
          '尝试着咀嚼身下的 ',
          a_call_d,
          ' 在被自己揪起乳头时究竟有着怎样缠绵婉转的思绪，',
          attacker.get_colored_name(),
          ' ',
          '笑得眯起了双眼。',
        ]);
      }
    } else {
      if (defender.sex_code === 1) {
        await attacker.print_and_wait(
          '眼前下流乳头的被连续不断的爱抚弄得硬邦邦的。',
        );
        await attacker.print_and_wait('这么僵硬地紧绷着身子，简直就是在说……');
      } else {
        await attacker.print_and_wait('说不定能就这么挤出乳汁来……');
        await attacker.print_and_wait(
          '眼前被连续不断的爱抚弄得硬邦邦的下流乳头叫人忍不住这么想……',
        );
        await attacker.print_and_wait(
          '而且这么僵硬地紧绷着身子，简直就是在说……',
        );
      }
      await defender.used_to_say_and_wait('这里是不能碰的敏感弱点！');
      await attacker.print_and_wait('真是可爱过头了ww');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '因为不会被记得，所以现在回头也还来得及哦……',
      );
      await attacker.print_and_wait([
        '想面前妖艳的景色偷偷装进眼里，然后手忙脚乱地为 ',
        a_call_d,
        ' 提起衣服也是可以的哦。',
      ]);
      await attacker.print_and_wait(
        '用手指将那粉色小肉粒上覆着的包皮揉开，看着那敏感的阴蒂因暴露在空气上而从可爱的粉色逐渐变为更妖艳的充血赤色。',
      );
      await attacker.print_and_wait([
        '身体在背德感的激动中微微颤抖的 ',
        attacker.get_colored_name(),
        '，果然还是选择继续做下去。',
      ]);
    } else {
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '啊啊，不知不觉就已经变成这种又红又肿的可怜样子了。',
      );
      await attacker.print_and_wait([
        '只是简单触碰加上一点点耐心，这小小的敏感肉突就会让 ',
        a_call_d,
        ' 的昏睡中的无暇身体更为放荡地动起来……',
      ]);
      await attacker.print_and_wait('淅淅索索……');
      await attacker.print_and_wait(
        '没有意识，单纯被快感所驱动着的身体渴望着通过与床单的厮磨来缓解苦闷感',
      );
      await attacker.say_and_wait('非常抱歉……', true);
      await attacker.say_and_wait('不过再让我看一次吧，最后一次。', true);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   */
  async finger_fuck(attacker) {
    await attacker.print_and_wait('原来是……这样啊……');
    await attacker.print_and_wait(
      '完全没有预想中，被紧致湿润穴肉想要将指尖挤出的阻力感。',
    );
    await attacker.print_and_wait(
      '倒不如说没有了理性的阻拦，只懂得诚实的小穴正热切地吻着浅浅探入的手指。',
    );
    await attacker.print_and_wait(
      '向上勾，向下蹭，顺应着穴肉的蠕动，朝着两侧……',
    );
    await attacker.print_and_wait('哈……腿夹得这么紧的话，可就没法继续了哦。');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async prepare_virgin(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '不需要掩掩藏藏或是顾及绝对会羞红脸颊的 ',
      a_call_d,
      ' 的情绪。',
    ]);
    await attacker.print_and_wait('此时此刻，面对着任凭自己摆布的无防备身体。');
    await attacker.print_and_wait(
      `所需要去做的，就仅仅只是在看够那随着呼吸浅浅起伏的窄窄细缝小穴后，用双手的指尖微微发力，让${defender.sex}盛开成更为妖艳而濡湿的形状而已。`,
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '想让',
        defender.sex,
        '变得更舒服，想让',
        defender.sex,
        '的小穴变得更柔软，想让这具漂亮的身体因为自己的动作而更忘情地扭动起来……',
      ]);
      await attacker.say_and_wait('哈……哈……');
      await attacker.print_and_wait(
        '明明只是负责动动手指，但脑内暴走的欲念却叫人气喘吁吁。',
      );
      await attacker.print_and_wait('在哪呢……应该已经快到了才对……');
      await defender.say_and_wait('………');
      await defender.say_and_wait('————❤️');
      await attacker.print_and_wait([
        '比起周围的穴肉来说，那微微的凸起感叫手指不由自主地被吸了过去，进而便能感受到那微隆的穴肉所独特的炽热温度与湿黏的触感……而帮忙核对答案的，则是变得诚实的 ',
        a_call_d,
        ' 突然拱起的小腹。',
      ]);
      await attacker.print_and_wait('……找到了。');
    } else {
      await attacker.print_and_wait('挤压。');
      await attacker.print_and_wait('搓揉。');
      await attacker.print_and_wait('戳弄。');
      await attacker.print_and_wait('用钝厚的指甲去撩拨。');
      await attacker.print_and_wait(
        '因为没有意识，所以不论什么时候触碰，去触碰哪里，面前变得汗津津柔软身体都会给予手指以最为诚实而激烈的反馈。',
      );
      await attacker.print_and_wait('直到尽兴为止就停下……');
      await attacker.print_and_wait('但是真的会有舍得停下的时候吗……');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_anal(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '啊啊，果然就算是睡着的时候也会格外注意这里啊……',
      );
      await attacker.print_and_wait([
        '来自 ',
        attacker.get_colored_name(),
        ' 的手指暧昧地凑近过来，用叫身体恰到好处能警惕起来的粗糙质感，沿着那小巧的穴口绕着圈，让 ',
        a_call_d,
        ' 原本悠哉的双腿慌乱地在床上蹬得直直。',
      ]);
    } else {
      await defender.say_and_wait('……❤️');
      await attacker.print_and_wait('该说是终于……？');
      await attacker.print_and_wait([
        '没法坚持着紧绷身体，',
        a_call_d,
        ' 那被暧昧的爱抚感融化的屁股小穴，已经悄悄地松弛下来，在本人完全没有相关记忆的情况下被变成了能吞下什么都不奇怪的性爱穴。',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   */
  async prepare_anal(attacker) {
    await attacker.print_and_wait([
      '用手掌感受着自面前翕动的穴中吐出的撩人热气，',
      attacker.get_colored_name(),
      ' 的四根手指如桩般将极力想让叫人害羞的肉穴合拢，将想逃开 ',
      attacker.get_colored_name(),
      ' 视线的臀肉固定住。',
    ]);
    await attacker.print_and_wait(
      '唯独格外粗长的中指有另外的事做，如蝎尾般微曲着一点点凑近后穴，然后便是缓慢而坚决的插入。',
    );
    await attacker.print_and_wait('阻力感很强。');
    await attacker.print_and_wait([
      '自发地蠕动起的穴肉如有生命般喘着气推阻着 ',
      attacker.get_colored_name(),
      ' 的手指，明明并不如隔壁的小穴般是为了性爱而存在的淫肉，但如今面对着 ',
      attacker.get_colored_name(),
      ' 的手指却积极到叫人意外。',
    ]);
    await attacker.print_and_wait('在害怕吗……还是在喜悦着呢……？');
    await attacker.print_and_wait('可惜现在没法立刻从女主角的口中得到答案呢……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async pet_leg(attacker, defender, is_first) {
    if (is_first) {
      if (attacker.id === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          '作为训练员，将面前担当的双腿，用性的意味去观赏与抚摸……',
        );
        await attacker.print_and_wait(
          '只是把现在正在做的事，用克制的语言去描述，叫人身体发凉的背德感就已经随着寒战传遍了全身。',
        );
        await attacker.print_and_wait(
          '明明训练后为了确认状态，偶尔也会有上手抚摸的亲热动作吧……',
        );
        await attacker.print_and_wait(
          '但是很神奇的，现在脑袋里完全没法将这双腿与「比赛」联系在一起',
        );
      }
      await attacker.print_and_wait('现在的自己满脑袋想的都是……');
      await attacker.print_and_wait('被这双腿交错着缠上腰的话，一定感觉很棒。');
      await attacker.print_and_wait('哈……幸好现在睡着了呢。');
    } else {
      await attacker.print_and_wait('柔软而有弹性。');
      await attacker.print_and_wait('曲线优雅而纤长。');
      await attacker.print_and_wait(
        '有着能因为手指的爱抚而发起抖的绝佳敏感度。',
      );
      if (defender.race > 0) {
        await attacker.print_and_wait('真浪费啊……');
        await attacker.print_and_wait('这样的双腿只是为了比赛而存在什么的……');
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pet_tail(attacker, defender, a_call_d) {
    await attacker.print_and_wait('真是……不妙啊……');
    await attacker.print_and_wait([
      '不止在说眼前手感绝佳，满带着 ',
      a_call_d,
      ' 身体馨香味的尾巴毛。',
    ]);
    await attacker.print_and_wait([
      '更是在说，将睡着的 ',
      a_call_d,
      ' 在床上翻了个面，撅着屁股连衣物都被褪下，',
      defender.teen_sex_title,
      '的私密之处被以如此粗暴的方式肆意观赏的自己……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async pull_tail(attacker, defender, a_call_d) {
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait(
      '只是稍稍地多用上一点力，屁股就会抬起来，但这时候松手的话，就会连腰都塌下去……',
    );
    await attacker.print_and_wait([
      '喂喂……真的知道自己正在',
      attacker.phy_sex_title,
      '的面前表演着怎样的动作吗，可怜的 ',
      a_call_d,
      '？',
    ]);
    await attacker.print_and_wait('但同时却也微妙的有些失落感。');
    await attacker.print_and_wait('因为……');
    await attacker.say_and_wait(
      [a_call_d, ' 理应能对我着有些粗暴的使坏动作做出更多回应的才对……'],
      true,
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '因为没有理性的支配，面对着呼出热气的唇的凑近，无知无畏的 ',
        a_call_d,
        ' 小穴只是在顺应着小腹的起伏浅浅地呼吸着。',
      ]);
      await attacker.print_and_wait(
        '让人心跳加速的气味……从舌尖融化到全身的酸甜腥味……',
      );
      await attacker.print_and_wait(
        '如吹口哨的唇形般在穴道中被迫卷起向前缓缓前探的舌，与应对着温热的撩拨生涩地蠕动着对抗的穴……',
      );
      await attacker.print_and_wait([
        '在二人份的呼吸声中，独占了这仅为一人所见的淫靡风景的 ',
        attacker.get_colored_name(),
        '，舌尖正一点点努力地前进着。',
      ]);
    } else {
      await attacker.print_and_wait(
        '已经不太能回忆起一开始是怎样合拢成一条窄缝的清纯形状，被不断迎上来的舌舔得从里到外湿漉漉的穴，如今已向外翻开着地微微颤动……',
      );
      await attacker.print_and_wait(
        '那双本来舒缓地在床上岔开的足，完全不知该对股间的濡湿快感做出怎样的回应，只是颤抖着，紧紧环在了坏孩子的肩上。',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('眼前的样子，可真是叫人罪恶感油然而生啊……');
      await attacker.say_and_wait([
        '哈……趁着 ',
        a_call_d,
        ' 睡着的时候下手的我……真是……',
      ]);
      if (defender.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait([
          '马娘与肉棒，这几乎没存在交集的两个词，此刻却借由 ',
          attacker.get_colored_name(),
          ' 的唇黏糊糊地连接在了一起……',
        ]);
      }
      await attacker.print_and_wait([
        '即使昏睡着也有面对侍奉挺起腰程度的本能，',
        attacker.get_colored_name(),
        ' 的双唇被自己动起来的肉棒强硬地挤开，在理应用来获取养分的位置，被那硬邦邦挺立起的不妙家伙占为己有，正恣意地散发着叫身体变得奇怪的下流气味。',
      ]);
      await attacker.print_and_wait(
        '会因面前的睡颜而产生额外的羞耻心吗……当然会了。',
      );
      await attacker.print_and_wait('不过有些欲望却正因此才没法控制呀……');
    } else {
      await attacker.say_and_wait('呲溜呲溜～');
      await attacker.print_and_wait('不知不觉变得熟练一些了……');
      await attacker.print_and_wait(
        '头仰起一些的话，就能把眼前的肉棒含入的更多……',
      );
      await attacker.print_and_wait(
        '用被压扁的舌头从侧面轻轻舔舐的话，就会舒服地颤动起来。',
      );
      await attacker.print_and_wait('如果活用起唇瓣的话……吸……');
      await attacker.print_and_wait(
        '咳咳……浓厚涌进来的羞人味道会让脑袋变得晕乎乎的……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async deep_blow_job(attacker, defender, a_call_d) {
    await attacker.say_and_wait('还想要，更深一点……');
    await attacker.print_and_wait([
      '贪心地呓语着，被索取快感的本能所支配的 ',
      attacker.get_colored_name(),
      ' 低下了头。',
    ]);
    await attacker.say_and_wait('呲溜呲溜……');
    await attacker.print_and_wait([
      '……于是，',
      attacker.get_colored_name(),
      ' 的这张小嘴从此刻起，被赋予了汲取营养外的另一重意义，沦陷为发出黏黏糊糊声音蠕动着缠上肉棒的下流性器官，这一点已经是来不及挽回的事实❤️',
    ]);
    await attacker.print_and_wait(
      '用喉咙的软肉迎上龟头，用灵巧的舌尖轻抚肉棒上充血的筋络，用不需要空气作为介质的紧致吮吸将柱身托起……',
    );
    await attacker.print_and_wait([
      '在学些什么，在记些什么，在变成些什么样子呀……此刻蹲俯在 ',
      a_call_d,
      ' 身侧的 ',
      attacker.get_colored_name(),
      '……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_deep_blow_job(attacker, defender) {
    await attacker.print_and_wait('眼前的样子，可真是叫人罪恶感油然而生啊……');
    if (defender.sex_code === 0 && defender.race > 0) {
      await attacker.print_and_wait(
        '马娘与肉棒，这几乎没存在交集的两个词，此刻却黏糊糊地连接在了一起……',
      );
    }
    await attacker.print_and_wait([
      defender.teen_sex_title,
      '的双唇被肉棒强硬地挤开，在理应用来获取养分的位置，被那硬邦邦挺立起的不妙家伙占为己有，正恣意地散发着叫身体变得奇怪的下流气味。',
    ]);
    await attacker.print_and_wait(
      '会因面前的睡颜而产生额外的不忍吗……当然会了。',
    );
    await attacker.print_and_wait('不过有些欲望却正因此才没法控制呀……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hand_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '尽管睡着的 ',
      a_call_d,
      ' 没有说出任何话，但 ',
      attacker.get_colored_name(),
      ' 望着面前胀得通红的充血肉棒，已经开始预热着活动起的十指已经完全明白自己应做些什么。',
    ]);
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait([
      '被那滚烫的温度所震惊，',
      attacker.get_colored_name(),
      ' 扶在肉棒上的手本能地向后一缩。随后才是，像是冬天将双足伸进被窝中般，一点点再度靠近。',
    ]);
    await attacker.print_and_wait(
      '明明是相当凶恶……会让女孩子的小腹一跳一跳的形状……',
    );
    await attacker.print_and_wait(
      '但是……被手指环握后，轻轻撸动就渗出先走汁在指间跳舞的样子……有点可爱呢。',
    );
    await defender.say_and_wait('哈……哈……唔——');
    await attacker.print_and_wait('变得能听懂了……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('总觉得是');
      await attacker.print_and_wait('意外自然的动作呢……');
      await attacker.print_and_wait(
        '在双手扶起肉棒之后，脑袋就会不知不觉地凑过去。',
      );
      await attacker.print_and_wait('用指间的体温去暖化，搓开，然后……');
      await attacker.say_and_wait('啾～');
      await attacker.print_and_wait('超浓厚……');
      await attacker.print_and_wait('完全变成在偷吃什么的色情家伙了……');
    } else {
      await attacker.print_and_wait(
        '把肉棒拨弄到一边，然后侧过头去从上至下细细地舔舐，像是对待边角已融化滴落的雪糕。',
      );
      await attacker.say_and_wait('呲溜呲溜——');
      await attacker.print_and_wait([
        a_call_d,
        ' 的龟头变得亮晶晶的，上面泛着光的水渍到底是谁的错多一些呢……',
      ]);
      await attacker.print_and_wait('变得完全……弄不明白了……❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async fuck_tit(attacker, defender, a_call_d) {
    await attacker.print_and_wait('不觉得很棒吗。');
    await attacker.print_and_wait([
      '这份 ',
      a_call_d,
      ' 俯低在自己身下，用手捧起独属于',
      defender.teen_sex_title,
      '的柔软将滚烫的肉棒围起的姿态……',
    ]);
    await defender.say_and_wait('唔……');
    await attacker.print_and_wait(
      '似乎有好好地传达到呢，从肉棒的龟头向上升腾起的，满载着爱欲的热腾腾白汽。',
    );
    await attacker.print_and_wait(
      '比起会遮遮掩掩的清醒时候，完全没有防备的睡颜诚实到让人兴奋。',
    );
    await attacker.print_and_wait('嗯，确实已经熏制成相当美味的表情了。');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async tit_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      '明明没有听见这样的要求，却自顾自拉下上衣将欧派露出来了……',
    );
    await attacker.say_and_wait('到底要面对肉棒屈服成什么样啊我自己……', true);
    await attacker.print_and_wait(
      '而被柔软包裹着的肉棒却骄傲地挺立成了能轻易叫小穴发颤的形状。',
    );
    await attacker.print_and_wait([
      '主动地双手拥起乳球，不敢抬头的 ',
      attacker.get_colored_name(),
      ' 想象着 ',
      a_call_d,
      ' 如果醒着此刻会露出的表情。',
    ]);
    await attacker.print_and_wait([
      '不知预见到了怎样的表情，静悄悄的房间里，',
      attacker.get_colored_name(),
      ' 的心咚咚地跳着。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async tit_and_blow_job(attacker, defender) {
    await attacker.print_and_wait([
      defender.race > 0
        ? '只是让被夹在乳肉中的肉棒舒服地挺起还不足够吗……到底在平时是以一种怎样的目光看待着自己的担当啊……'
        : '只是让被夹在乳肉中的肉棒舒服地挺起还不足够吗……到底在平时是以一种怎样的目光看待着自己的伙伴啊……',
    ]);
    await attacker.say_and_wait('吸溜吸溜吸溜……');
    await attacker.print_and_wait([
      '乳肉被滴落在肉棒竿身上先走汁涂抹得滑腻腻亮晶晶的，但比起辛苦的欧派，最为滚烫而饱满的龟头却被 ',
      attacker.get_colored_name(),
      ' 用双手迎进了口中。',
    ]);
    await defender.say_and_wait('唔……');
    await attacker.print_and_wait(
      '舌头开始不听使唤了，但只是感受到口上的龟头感到了一点点的寂寞，簇拥着乳头侍奉讨好肉棒的动作便没法停下……',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async suck_nipple(attacker, defender) {
    await attacker.print_and_wait([
      '完全没有让',
      era.get(`talent:${defender.id}:乳头类型`) > 0
        ? '粉色的漂亮乳头'
        : '褐色的漂亮乳头',
      '躲开逐渐凑过来的 ',
      attacker.get_colored_name(),
      ' 的本能，浅浅起伏着的',
      defender.teen_sex_title,
      '的柔软乖乖地被含入了坏家伙的嘴里。',
    ]);
    await attacker.say_and_wait('吸——');
    await attacker.print_and_wait([
      '渐渐地，在舌尖兀自发着烫的红点有了硬挺的实感，',
      attacker.get_colored_name(),
      ' 于是小心用齿间将那肉粒衔住，咻地一吸——',
    ]);
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait('哈……现在才想起来要挣扎可太晚了一些ww');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '在用齿间将硬邦邦的乳粒衔入口上的那一刻，面前仰面躺着的 ',
      a_call_d,
      ' 身体一下子便僵硬了。',
    ]);
    await attacker.print_and_wait('诶……是吗……');
    await attacker.print_and_wait(
      `轻轻地活用着牙齿，绕着敏感的乳头留下一圈参差的红痕……顺便让怀中的${defender.teen_sex_title}身体不住地颤抖……`,
    );
    await attacker.print_and_wait([
      '大概是明白了这边接下来的目标吧，在乳头被舌细细舔舐润滑的瞬间，',
      a_call_d,
      ' 的双腿缠上了 ',
      attacker.get_colored_name(),
      ' 的腰……',
    ]);
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait('很可爱。');
    await attacker.print_and_wait([
      '不止在说怀里的 ',
      a_call_d,
      '，还有那留满了红肿痕迹的乳头。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_armpit_intercourse(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '睡着的 ',
      a_call_d,
      '，无防备的手被性欲冲昏头脑的 ',
      attacker.get_colored_name(),
      ' 笔直地向上抬起',
    ]);
    await attacker.print_and_wait([
      '随后 ',
      a_call_d,
      ' 的腋下，便被肉棒硕大的龟头负起责任好好清洗着。',
    ]);
    await attacker.print_and_wait(
      '冒着热气的腋肉随着抽插泛出些绯色，似乎真变成了与性相关的色情器官……',
    );
    await attacker.print_and_wait([
      '并没能完全将这视为理所应当的事，',
      attacker.get_colored_name(),
      ' 的动作带着几分犹豫……',
    ]);
    await attacker.print_and_wait([
      '……犹豫地用肉棒磨蹭抽插着正背对着自己的 ',
      a_call_d,
      ' 的腋下穴……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async force_foot_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait('呼……已经完全就是所谓的变态了吧。');
    await attacker.print_and_wait([
      '把睡着的 ',
      a_call_d,
      ' 的双足用手捧起以侍奉自己的肉棒，是知道面前无自觉的 ',
      a_call_d,
      ' 没法直接直截了当地投来嫌弃的眼神才拥有的勇气吗……',
    ]);
    await attacker.print_and_wait([
      '一开始，触到了陌生热感的双足怯怯地想要躲开，却被 ',
      attacker.get_colored_name(),
      ' 的双手重新揽回。',
    ]);
    await attacker.print_and_wait('随后大概是察觉到了。');
    await attacker.print_and_wait('正侵犯着自己足底的这根肉棒不是脆弱的东西。');
    await attacker.print_and_wait([
      a_call_d,
      ' 踩踏着肉棒的东西变得自然了许多。',
    ]);
    await attacker.print_and_wait([
      '仿佛将 ',
      attacker.get_colored_name(),
      ' 的肉棒踩在足底是什么与生俱来的天赋般。',
    ]);
    await attacker.print_and_wait('嘶……');
    await attacker.print_and_wait([
      '只是单纯地想到了这一点，',
      attacker.get_colored_name(),
      ' 便又感到小腹热起来了。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   */
  async foot_job(attacker) {
    await attacker.print_and_wait(
      '因为在床上站起身的缘故，所以连在视线里变小的肉棒也变得可爱了许多。',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' 抬起足，将胀红了的肉棒踩在了脚下。',
    ]);
    await attacker.print_and_wait(
      '诶……就算是这样的厉害肉棒，被踩在足底的时候也会摇晃得这么可爱吗ww',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async tail_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait('灵活……');
    await attacker.print_and_wait([
      '以 ',
      attacker.get_colored_name(),
      ' 都意料之外的灵敏程度，有着弯曲毛发的马尾巴缠上了肉棒。',
    ]);
    await attacker.print_and_wait([
      '于是原本肉棒浓厚到叫人头晕的气味被尾巴裹上了一层保护色，但这却也让 ',
      a_call_d,
      ' 的肉棒前所未有的兴奋着。',
    ]);
    await attacker.print_and_wait([
      '原来……',
      defender.uma_sex_title,
      '们的尾巴真的能做到这种事吗……',
    ]);
    await attacker.print_and_wait([
      '……感受着这份暴涨的热度，背过身撅起屁股的 ',
      attacker.get_colored_name(),
      ' 连泛红的耳朵的动作都变得可爱起来。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是性交还是肛交
   */
  async missionary(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('或许这就是……最能感受彼此体温的姿势了吧。');
    await attacker.print_and_wait([
      '所谓的正常位，或叫做传教士位，如果从交缠的二人身前的方向望去的话，就像是 ',
      attacker.get_colored_name(),
      ' 扑进怀中吸吮母乳的姿态般。',
    ]);
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' 的身体盖住了 ',
      a_call_d,
      ' 的身体，硬邦邦的肉棒毫不容赦地插入',
      is_vagina ? '小穴' : '屁穴',
      '中，让无意识的 ',
      a_call_d,
      ' 修长纤细的紧致长腿以有些狼狈的姿势从 ',
      attacker.get_colored_name(),
      ' 腰的两侧伸出，僵硬地绷直足底朝天……',
    ]);
    await attacker.print_and_wait([
      '顺从到了不可思议的程度，',
      a_call_d,
      ' 的身体被轻飘飘地揉进了自己的怀抱之中。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async doggy_style(attacker, defender, a_call_d) {
    await attacker.print_and_wait('像小狗一样……');
    await attacker.print_and_wait(
      '那双腿……那双前脚掌紧绷着踮起，膝盖弯曲着将湿漉漉的腰跨高高顶起的双腿……',
    );
    await attacker.print_and_wait(
      '在那之上，被托起的是……像小狗一样不自觉地摇晃着的屁股。',
    );
    await attacker.print_and_wait([
      '但有些可惜，由于 ',
      a_call_d,
      ' 还没能及时醒来的关系，这份姿势的维持完全依靠着 ',
      attacker.get_colored_name(),
      ' 环在腰间的双手。',
    ]);
    await attacker.print_and_wait([
      '被以煽情的姿态如洋娃娃般从床上搂起的 ',
      a_call_d,
      '，身体的发颤根本停不下来，让人看见后便不禁想舔润干裂的嘴唇。',
    ]);
    await attacker.print_and_wait('完全变成单方面的施暴似的了……');
    await attacker.print_and_wait('不过……这样就好……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait('更深一些。');
    await attacker.print_and_wait([
      '因为并不会听见来自 ',
      a_call_d,
      ' 的求饶声所以便能尽情地深入到肉棒整根没入为止，将面前熟睡的 ',
      a_call_d,
      ' 揉进自己的身体当中。',
    ]);
    await attacker.print_and_wait([
      '不知足的 ',
      attacker.get_colored_name(),
      ' 即使突破了零的距离线也不会有丝毫的犹豫，胯下的肉棒随着挺起的腰硬邦邦地向前递去，让女孩子的唇，小穴，子宫都为它发出着迷的呻吟……',
    ]);
    await defender.say_and_wait('————❤️❤️');
    await attacker.print_and_wait(
      '所谓的G点就是这种东西，不管在这之前是什么样的女孩子，温柔也好开朗也好，被洋溢着雄臭味的硬邦邦肉棒将那处肉褶顶开就会一口气堕落成对性爱着迷的下流雌性。',
    );
    await attacker.print_and_wait(
      '姣好的身子在肉棒的冲撞下蜷成一团，喉咙里只剩下浑浊的淫声，唯独近在咫尺的子宫热得发烫。',
    );
    era.println();
    await attacker.print_and_wait(
      '…………不过，这种趁着女孩子睡着，偷偷用肉棒与快感将她的身体驯服的做法……',
    );
    await attacker.say_and_wait(
      '就算正这么做的人是自己，也不得不说这样真是卑鄙❤️',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   */
  async stimulate_womb(attacker, defender, a_call_d) {
    await attacker.print_and_wait('不用肉棒就能让小穴变舒服的魔法。');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' 自信地笑着张开五指，让宽大的手掌覆在小腹上。',
    ]);
    await attacker.print_and_wait('的确是很温暖的触感，但是……');
    await defender.say_and_wait('唔齁唔唔——');
    await attacker.print_and_wait('不像样的声音突然漏出来了——');
    await attacker.print_and_wait([
      defender.get_colored_name(),
      ' 平缓的睡眠呼吸节奏倏地变得急促而焦躁',
    ]);
    await attacker.print_and_wait([
      '几乎要陷进去了……',
      attacker.get_colored_name(),
      ' 的手掌……',
    ]);
    await attacker.print_and_wait('而像是对比般，子宫却砰砰地兴奋起来……');
    await attacker.print_and_wait([
      '像是被 ',
      attacker.get_colored_name(),
      ' 的魔术手抓住了一样……',
    ]);
    await defender.say_and_wait('————❤️');
    await attacker.print_and_wait([
      '大约 ',
      a_call_d,
      ' 在睡醒后也能回忆起这份让双腿颤抖不已的快感吧。',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是性交还是肛交
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('吞进去了……');
    await attacker.print_and_wait([
      '与平躺着的 ',
      a_call_d,
      ' 任性的十指相扣，',
      attacker.get_colored_name(),
      ' 紧致又富有弹性的亮晶晶双腿向下深蹲，用穴口磨磨蹭蹭地寻找着含入肉棒硕大龟头的契机……',
    ]);
    if (!is_vagina) {
      await attacker.print_and_wait('这里，就偷偷地……用屁股小穴来……❤️');
    }
    await attacker.print_and_wait([
      '这次不需要等待 ',
      a_call_d,
      ' 慢慢悠悠的温柔动作了，只需要被含入紧致穴腔中的肉棒向着敏感的膣肉轻轻戳探，',
      attacker.get_colored_name(),
      ' 无处可逃的腰便只能像是上了发条般无休止地在 ',
      a_call_d,
      ' 的面前舞动起来…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} a_call_d 主动方对被动方的称呼
   * @param {boolean} is_vagina 是性交还是肛交
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait('说实话……仅仅只是现在这样感觉就要升天了……');
    await attacker.print_and_wait([
      '乱七八糟的……不论是被奸着的',
      is_vagina ? '小穴' : '屁穴',
      '现状也好，还是舒服得一塌糊涂的身体也好……',
    ]);
    await attacker.print_and_wait([
      '而且，把 ',
      attacker.get_colored_name(),
      ' 弄成这样的，甚至还只是 ',
      a_call_d,
      ' 睡得懵懵懂懂的肉棒吗❤️',
    ]);
    await attacker.print_and_wait('哈……深吸气的话……');
    await attacker.print_and_wait([
      '「啾」的一声缩紧了，虽然一秒钟都没能坚持到身体就痉挛着瘫软下去，但那一瞬间，',
      attacker.get_colored_name(),
      ' 的',
      is_vagina ? '小穴' : '屁穴',
      '深情地吻上了 ',
      a_call_d,
      ' 的龟头。',
    ]);
    await attacker.print_and_wait('哈……龟头一跳一跳的，应该是很高兴吧……');
    await attacker.print_and_wait([
      '明明是骑在 ',
      a_call_d,
      ' 身上，在姿态上占据主动权的一方，',
      attacker.get_colored_name(),
      ' 此时的脸上却满是动摇的绯色。',
    ]);
  },
};
