/**
 * @file 调教指令 - 睡奸爱抚系1
 *
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers
 * @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} normal_handlers
 */
module.exports = (handlers, normal_handlers) => {
  handlers[ero_hooks.kiss] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 亲吻着沉睡的 ',
      defender.get_colored_name(),
      '……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait('吻下去了。');
      await attacker.print_and_wait([
        '因为 ',
        sys_get_colored_callname(attacker.id, defender.id),
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
  };

  handlers[ero_hooks.french_kiss] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 深吻着沉睡的 ',
      defender.get_colored_name(),
      '……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait(
        '明明捧着脸吻到了更深的地方，但是反而有些空虚……',
      );
      await attacker.print_and_wait([
        '确保面前 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的唇齿之间落满了自己的气味，以偷偷摸摸的角度来说应当算是大胜利了……',
      ]);
      await attacker.print_and_wait([
        '哈……但是反倒会希望 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 能就这么醒来，然后惊慌失措地看过来……会很有趣吧ww',
      ]);
    } else {
      await defender.say_and_wait('哈……哈……');
      await attacker.print_and_wait('绷紧，挣扎，然后放弃。');
      await attacker.print_and_wait([
        '被捧着脸用舌头欺负到脸红的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 身体意外的很好懂。',
      ]);
    }
  };

  handlers[ero_hooks.pet_ear] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 温暖的耳朵……】',
    ]);
    if (hook.arg) {
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
        sys_get_colored_callname(attacker.id, defender.id),
        ' 那无意识流露出的可爱表情与声音尽力地做全收集了。',
      ]);
      await attacker.print_and_wait('没关系的……时间还有很多。');
    }
  };

  handlers[ero_hooks.pull_ear] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉扯着着沉睡的 ',
      defender.get_colored_name(),
      ' 温暖的耳朵……】',
    ]);
    const is_trainer =
      !era.get(`cflag:${attacker.id}:种族`) &&
      era.get(`cflag:${defender.id}:种族`);
    await attacker.print_and_wait('这样是不对的……');
    await attacker.print_and_wait(
      `……这不是作为恋人${is_trainer ? '或是训练员' : ''}应当做的事……`,
    );
    await attacker.print_and_wait('……不过');
    await attacker.print_and_wait([
      '面对着面前 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ` 无防备露出苦闷表情的睡颜，这种${
        is_trainer ? '训练员失格的' : ''
      }恶作剧完全没法停下来啊。`,
    ]);
  };

  handlers[ero_hooks.pet_breast] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 柔软的胸部……】',
    ]);
    if (hook.arg) {
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
        sys_get_colored_callname(attacker.id, defender.id),
        ' 压在身下，双手深陷在那对软肉中难以自拔的自己。',
      ]);
      await attacker.print_and_wait([
        '对 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 脸上逐渐蹙起的眉头视而不见，对身下逐渐升温的柔软娇躯置之不理……',
      ]);
      await attacker.print_and_wait(
        '甚至这种动作完全没有经过允许或含羞的默认……',
      );
      await attacker.print_and_wait('……槽糕，突然变得更加兴奋了嘶。');
    }
  };

  handlers[ero_hooks.pet_nipple] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 敏感的乳头……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait('嗯……是错觉吗……');
      await attacker.print_and_wait(
        '感觉乳头硬起来的速度，比起醒着的时候要更慢一些啊。',
      );
      await attacker.print_and_wait(
        '因为不会被抱怨或是本能的挣扎甩到一边，所以顺着那粉嫩的凸起向上揪提的两根手指动作优雅而娴熟。',
      );
      await attacker.print_and_wait('诶……也就是说……');
      await attacker.print_and_wait([
        '尝试着咀嚼身下的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 在被自己揪起乳头时究竟有着怎样缠绵婉转的思绪，',
        ...(!era.get(`cflag:${attacker.id}:种族`) &&
        era.get(`cflag:${defender.id}:种族`)
          ? ['失格的下流训练员']
          : [attacker.get_colored_name(), ' ']),
        '笑得眯起了双眼。',
      ]);
    } else {
      if (era.get(`cflag:${defender.id}:性别`) - 1) {
        await attacker.print_and_wait('说不定能就这么挤出乳汁来……');
        await attacker.print_and_wait(
          '眼前被连续不断的爱抚弄得硬邦邦的下流乳头叫人忍不住这么想……',
        );
        await attacker.print_and_wait(
          '而且这么僵硬地紧绷着身子，简直就是在说……',
        );
      } else {
        await attacker.print_and_wait(
          '眼前下流乳头的被连续不断的爱抚弄得硬邦邦的。',
        );
        await attacker.print_and_wait('这么僵硬地紧绷着身子，简直就是在说……');
      }
      await defender.used_to_say_and_wait('这里是不能碰的敏感弱点！');
      await attacker.print_and_wait('真是可爱过头了ww');
    }
  };

  handlers[ero_hooks.pet_clitoris] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 风流的小豆豆……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait(
        '因为不会被记得，所以现在回头也还来得及哦……',
      );
      await attacker.print_and_wait([
        '想面前妖艳的景色偷偷装进眼里，然后手忙脚乱地为 ',
        sys_get_colored_callname(attacker.id, defender.id),
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
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的昏睡中的无暇身体更为放荡地动起来……',
      ]);
      await attacker.print_and_wait('淅淅索索……');
      await attacker.print_and_wait(
        '没有意识，单纯被快感所驱动着的身体渴望着通过与床单的厮磨来缓解苦闷感',
      );
      await attacker.say_and_wait('非常抱歉……', true);
      await attacker.say_and_wait('不过再让我看一次吧，最后一次。', true);
    }
  };

  handlers[ero_hooks.finger_fuck] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用手指插入了沉睡的 ',
      defender.get_colored_name(),
      ' 风流的小穴……】',
    ]);
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
  };

  handlers[ero_hooks.prepare_virgin] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 张开了沉睡的 ',
      defender.get_colored_name(),
      ' 羞涩的阴唇……】',
    ]);
    await attacker.print_and_wait([
      '不需要掩掩藏藏或是顾及绝对会羞红脸颊的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的情绪。',
    ]);
    await attacker.print_and_wait('此时此刻，面对着任凭自己摆布的无防备身体。');
    await attacker.print_and_wait(
      `所需要去做的，就仅仅只是在看够那随着呼吸浅浅起伏的窄窄细缝小穴后，用双手的指尖微微发力，让${defender.sex}盛开成更为妖艳而濡湿的形状而已。`,
    );
  };

  handlers[ero_hooks.stimulate_g_spot_by_finger] = async (
    attacker,
    defender,
    hook,
  ) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用手指玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 隐秘的G点……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait(
        `想让${defender.sex}变得更舒服，想让${defender.sex}的小穴变得更柔软，想让这具漂亮的身体因为自己的动作而更忘情地扭动起来……`,
      );
      await attacker.say_and_wait('哈……哈……');
      await attacker.print_and_wait(
        '明明只是负责动动手指，但脑内暴走的欲念却叫人气喘吁吁。',
      );
      await attacker.print_and_wait('在哪呢……应该已经快到了才对……');
      await defender.say_and_wait('………');
      await defender.say_and_wait('————❤️');
      await attacker.print_and_wait([
        '比起周围的穴肉来说，那微微的凸起感叫手指不由自主地被吸了过去，进而便能感受到那微隆的穴肉所独特的炽热温度与湿黏的触感……而帮忙核对答案的，则是变得诚实的 ',
        sys_get_colored_callname(attacker.id, defender.id),
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
  };

  handlers[ero_hooks.pet_anal] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 小巧的菊门……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait(
        '啊啊，果然就算是睡着的时候也会格外注意这里啊……',
      );
      await attacker.print_and_wait([
        '来自 ',
        attacker.get_colored_name(),
        ' 的手指暧昧地凑近过来，用叫身体恰到好处能警惕起来的粗糙质感，沿着那小巧的穴口绕着圈，让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 原本悠哉的双腿慌乱地在床上蹬得直直。',
      ]);
    } else {
      await defender.say_and_wait('……❤️');
      await attacker.print_and_wait('该说是终于……？');
      await attacker.print_and_wait([
        '没法坚持着紧绷身体，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 那被暧昧的爱抚感融化的屁股小穴，已经悄悄地松弛下来，在本人完全没有相关记忆的情况下被变成了能吞下什么都不奇怪的性爱穴。',
      ]);
    }
  };

  handlers[ero_hooks.prepare_anal] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 张开了沉睡的 ',
      defender.get_colored_name(),
      ' 羞涩的菊门……】',
    ]);
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
  };

  handlers[ero_hooks.pet_leg] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 抚摸着沉睡的 ',
      defender.get_colored_name(),
      ' 丰满的大腿……】',
    ]);
    await normal_handlers[ero_hooks.pet_leg](attacker, defender, hook, {
      skip_name: true,
    });
    if (hook.arg) {
      await attacker.print_and_wait('哈……幸好现在睡着了呢。');
    }
  };

  handlers[ero_hooks.pet_tail] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 馨香的尾巴……】',
    ]);
    await attacker.print_and_wait('真是……不妙啊……');
    await attacker.print_and_wait([
      '不止在说眼前手感绝佳，满带着 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 身体馨香味的尾巴毛。',
    ]);
    await attacker.print_and_wait([
      '更是在说，将睡着的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ` 在床上翻了个面，撅着屁股连衣物都被褪下，${defender.get_teen_sex_title()}的私密之处被以如此粗暴的方式肆意观赏的自己……`,
    ]);
  };

  handlers[ero_hooks.pull_tail] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉扯着沉睡的 ',
      defender.get_colored_name(),
      ' 脆弱的尾巴……】',
    ]);
    await normal_handlers[ero_hooks.pull_tail](
      attacker,
      defender,
      {
        arg: false,
      },
      {
        skip_name: true,
      },
    );
    await attacker.print_and_wait('但同时却也微妙的有些失落感。');
    await attacker.print_and_wait('因为……');
    await attacker.say_and_wait(
      [
        sys_get_colored_callname(attacker.id, defender.id),
        ' 理应能对我着有些粗暴的使坏动作做出更多回应的才对……',
      ],
      true,
    );
  };

  handlers[ero_hooks.cunnilingus] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将沉睡的 ',
        defender.get_colored_name(),
        ' 翕动的小豆豆含入口中……】',
      ]);
      await attacker.print_and_wait([
        '因为没有理性的支配，面对着呼出热气的唇的凑近，无知无畏的 ',
        sys_get_colored_callname(attacker.id, defender.id),
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
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 吮吸着 ',
        defender.get_colored_name(),
        ' 风流的小豆豆……】',
      ]);
      await attacker.print_and_wait(
        '已经不太能回忆起一开始是怎样合拢成一条窄缝的清纯形状，被不断迎上来的舌舔得从里到外湿漉漉的穴，如今已向外翻开着地微微颤动……',
      );
      await attacker.print_and_wait(
        '那双本来舒缓地在床上岔开的马娘足，完全不知该对股间的濡湿快感做出怎样的回应，只是颤抖着，紧紧环在了坏孩子的肩上。',
      );
    }
  };

  handlers[ero_hooks.blow_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将沉睡的 ',
        defender.get_colored_name(),
        ' 耸立的肉棒含入口中……】',
      ]);
      await attacker.print_and_wait('眼前的样子，可真是叫人罪恶感油然而生啊……');
      await attacker.say_and_wait([
        '哈……趁着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 睡着的时候下手的我……真是……',
      ]);
      if (
        era.get(`cflag:${defender.id}:种族`) &&
        era.get(`cflag:${defender.id}:性别`) - 1
      ) {
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
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 舔舐着沉睡的 ',
        defender.get_colored_name(),
        ' 耸立的肉棒……】',
      ]);
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
  };

  handlers[ero_hooks.deep_blow_job] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒深深含入口中……】',
    ]);
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
      sys_get_colored_callname(attacker.id, defender.id),
      ' 身侧的 ',
      attacker.get_colored_name(),
      '……',
    ]);
  };

  handlers[ero_hooks.force_blow_job] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将肉棒插入 ',
      defender.get_colored_name(),
      ' 微张的小口中……】',
    ]);
    await attacker.print_and_wait('眼前的样子，可真是叫人罪恶感油然而生啊……');
    if (
      era.get(`cflag:${defender.id}:种族`) &&
      era.get(`cflag:${defender.id}:性别`) - 1
    ) {
      await attacker.print_and_wait(
        '马娘与肉棒，这几乎没存在交集的两个词，此刻却黏糊糊地连接在了一起……',
      );
    }
    await attacker.print_and_wait(
      `${defender.get_teen_sex_title()}的双唇被肉棒强硬地挤开，在理应用来获取养分的位置，被那硬邦邦挺立起的不妙家伙占为己有，正恣意地散发着叫身体变得奇怪的下流气味。`,
    );
    await attacker.print_and_wait(
      '会因面前的睡颜而产生额外的不忍吗……当然会了。',
    );
    await attacker.print_and_wait('不过有些欲望却正因此才没法控制呀……');
  };

  handlers[ero_hooks.hand_job] = async (attacker, defender) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用手掌抚弄着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒……】',
    ]);
    await attacker.print_and_wait([
      '尽管睡着的 ',
      sys_get_colored_callname(attacker.id, defender.id),
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
  };

  handlers[ero_hooks.hand_and_blow_job] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 手口并用地侍奉着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒……】',
    ]);
    await normal_handlers[ero_hooks.hand_and_blow_job](
      attacker,
      defender,
      hook,
      { skip_name: true },
    );
    if (hook.arg) {
      await attacker.print_and_wait('完全变成在偷吃什么的色情家伙了……');
    }
  };
};
