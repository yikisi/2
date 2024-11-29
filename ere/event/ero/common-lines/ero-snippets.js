const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { ero_hooks } = require('#/data/event/ero-hooks');

module.exports = {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async armpit_intercourse(attacker, defender, hook) {
    if (hook.arg) {
      await defender.print_and_wait('差劲。');
      await defender.print_and_wait([
        '能从面前高抬起手的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 那害羞摇晃着的屁股中读出这样的抱怨。',
      ]);
      await defender.print_and_wait('不过这也是没办法的事。');
      await attacker.say_and_wait('唔——');
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的腋下，正被肉棒硕大的龟头清洗着。',
      ]);
      await defender.print_and_wait(
        '冒着热气的腋肉随着抽插泛出些绯色，似乎真变成了与性相关的色情器官……',
      );
      await defender.print_and_wait([
        '并没能完全将这视为理所应当的事，',
        defender.get_colored_name(),
        ' 的动作带着几分犹豫……',
      ]);
      await defender.print_and_wait([
        '……犹豫地用肉棒磨蹭抽插着正背对着自己的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的腋下穴……',
      ]);
    } else {
      await attacker.print_and_wait('感觉……变得有些奇怪……');
      await attacker.print_and_wait('腋下，原来是用来做这种事的器官吗……');
      await attacker.print_and_wait('而且，原来能体会到这样的触感嘛……');
      await attacker.print_and_wait([
        '似乎被肉棒的侵染确实地改变着什么，满面绯红的 ',
        attacker.get_colored_name(),
        ' 不安地侍奉着已呲溜呲溜驾轻就熟的肉棒先生。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_milk_and_hand_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '因为眼前全是 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 白皙的肌肤与乳肉，很遗憾没能看清如今一定很美味的表情。',
      ]);
      await attacker.print_and_wait([
        '连在舌尖被挑逗着舞动的乳头都连带着感到一瞬间的索然无味，但 ',
        attacker.get_colored_name(),
        ' 随即便找到了新的投以注意力的方向。',
      ]);
      await attacker.print_and_wait('那么到底是怎样的表情呢。');
      await attacker.print_and_wait(
        `被吮吸${
          era.get(`talent:${defender.id}:泌乳`) ? '母乳' : '乳头'
        }的快感拖向下流彼端的失神与挣扎颜……为掌中跃动着的滚烫肉棒感到难以适从的羞涩颜……又或是，已经完全沉浸入其中的下流享受表情呢……`,
      );
      await defender.say_and_wait('诶！？');
      await attacker.print_and_wait([
        '这注定是个没有答案的问题，不过 ',
        attacker.get_colored_name(),
        ' 被 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的指间艰难包裹住的肉棒却突然反常地高高挺起。',
      ]);
    } else {
      await defender.print_and_wait('不知道是否该为这样的自己感到高兴……');
      await defender.print_and_wait([
        '能通过被含着的',
        era.get(`talent:${attacker.id}:泌乳`) ? '漏奶' : '',
        '乳头旁，那舌头的动作依稀看见 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的表情。',
      ]);
      await defender.print_and_wait(
        '能通过掌中肉棒的烫手温度与胀起的筋络依稀在脑中描摹出肉棒现在的样子。',
      );
      await defender.print_and_wait('哈…请要负起责任来呀……');
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async bite_nipple(attacker, defender) {
    await attacker.print_and_wait([
      `在用齿间将硬邦邦的乳粒衔入口上的那一刻，怀中的 `,
      sys_get_colored_callname(attacker.id, defender.id),
      ` 身体一下子便僵硬了。`,
    ]);
    await attacker.print_and_wait('诶……是吗……');
    await attacker.print_and_wait(
      `轻轻地活用着牙齿，绕着敏感的乳头留下一圈参差的红痕……顺便让怀中的${defender.get_teen_sex_title()}身体不住地颤抖……`,
    );
    await attacker.print_and_wait([
      '大概是明白了这边接下来的目标吧，在乳头被舌细细舔舐润滑的瞬间，',
      defender.get_colored_name(),
      ' 伸出双手搂进了 ',
      attacker.get_colored_name(),
      ' 的腰……',
    ]);
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait('很可爱。');
    await attacker.print_and_wait([
      '不止在说怀里的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '，还有那留满了红肿痕迹的乳头。',
    ]);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await defender.say_and_wait(
        '眼前的样子，可真是叫人罪恶感油然而生啊……',
        true,
      );
      if (
        era.get(`cflag:${attacker.id}:种族`) &&
        era.get(`cflag:${attacker.id}:性别`) - 1
      ) {
        await attacker.print_and_wait(
          '马娘与肉棒，这几乎没存在交集的两个词，此刻却黏糊糊地连接在了一起……',
        );
      }
      await attacker.print_and_wait(
        `自己的双唇被肉棒强硬地挤开，在理应用来获取养分的位置，被那硬邦邦挺立起的不妙家伙占为己有，正恣意地散发着叫身体变得奇怪的下流气味。`,
      );
      await attacker.print_and_wait('蹲俯下的身体，开始颤抖起来了……为什么呢……');
      await attacker.print_and_wait('这样的事，果然有点奇怪……？');
    } else {
      await attacker.say_and_wait('呲溜呲溜～～');
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
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async continue_cunnilingus(attacker, defender) {
    await attacker.print_and_wait('用舌尖拨弄。');
    await attacker.print_and_wait('用吮吸使其立起。');
    await attacker.print_and_wait('轻轻地向它吹气。');
    await attacker.print_and_wait('稍微有些苦恼啊……');
    await attacker.print_and_wait([
      '不论用哪种方式对面前的阴蒂，怎样刺激都能让面前的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 一致地在欢愉中颤抖的话，不就没办法知道更中意哪一种了嘛。',
    ]);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async foot_job(attacker, defender, hook) {
    if (hook.arg) {
      await defender.print_and_wait('会露出笑容的吧。');
      await defender.print_and_wait([
        '当 ',
        attacker.get_colored_name(),
        ' 用那双赛场上飞驰的双足踏上眼前的肉棒，发现那根坏家伙正兴奋地反而将足底托起时，肯定会露出笑容的吧。',
      ]);
      await defender.print_and_wait(
        '看见下流东西时厌恶而轻蔑的笑……对性癖奇怪的恋人露出的饶有兴致的包容的笑……天真无邪仅是对此感到有趣而笑……',
      );
      await defender.print_and_wait([
        '面前的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 属于哪一种呢…总之是能让肉棒更加兴奋起来的那一种吧。',
      ]);
    } else {
      await defender.print_and_wait('大概是察觉到了。');
      await defender.print_and_wait(
        '正侵犯着自己足底的这根肉棒不是脆弱的东西。',
      );
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 踩踏肉棒的动作变得自然了许多。',
      ]);
      await defender.print_and_wait([
        '仿佛将 ',
        defender.get_colored_name(),
        ' 的肉棒踩在足底是什么与生俱来的天赋般。',
      ]);
      await defender.print_and_wait('嘶……');
      await defender.print_and_wait([
        '只是单纯地联想，',
        defender.get_colored_name(),
        ' 便又感到小腹热起来了。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_and_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('总觉得是');
      await attacker.print_and_wait('意外自然的动作呢……');
      await attacker.print_and_wait(
        '在双手扶起肉棒之后，脑袋就会不知不觉地凑过去。',
      );
      await attacker.print_and_wait('用指间的体温去暖化，搓开，然后……');
      await attacker.say_and_wait('啾～');
      await attacker.print_and_wait('超浓厚……');
    } else {
      await attacker.print_and_wait(
        '把肉棒拨弄到一边，然后侧过头去从上至下细细地舔舐，像是对待边角已融化滴落的雪糕。',
      );
      await attacker.say_and_wait('呲溜呲溜——');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的龟头变得亮晶晶的，上面泛着光的水渍到底是谁的错多一些呢……`,
      ]);
      await attacker.print_and_wait('变得完全……弄不明白了……❤️');
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hand_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait('唔——');
      await attacker.print_and_wait([
        '像是被那滚烫的温度所震惊，',
        attacker.get_colored_name(),
        ' 扶在肉棒上的手本能地向后一缩。随后才是，像是冬天将双足伸进被窝中般，一点点再度靠近。',
      ]);
      await attacker.print_and_wait(
        '明明是相当凶恶……会让女孩子的小腹一跳一跳的形状……',
      );
      await attacker.print_and_wait(
        '但是……被手指环握后，轻轻撸动就渗出先走汁在指间跳舞的样子……有点可爱呢。',
      );
      await attacker.say_and_wait('哈……哈……唔——');
      await attacker.print_and_wait('变得能听懂了……');
    } else {
      await attacker.print_and_wait('真的只需要这样就可以吗……');
      await attacker.print_and_wait(
        `被${attacker.get_child_sex_title()}子的手捧起肉棒撸动就能满足……？`,
      );
      await attacker.print_and_wait('……');
      await attacker.print_and_wait('真的……没有其他想要做的事吗……');
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async non_penetrative(attacker, defender, hook) {
    if (hook.arg) {
      await defender.print_and_wait('真的插进去了。');
      await defender.print_and_wait([
        '把肉棒……插入 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 合拢的大腿肉之间。',
      ]);
      await defender.print_and_wait('很柔软，很温润，很棒，很棒，很棒……');
      await defender.print_and_wait('微微交错的双腿是在害羞吧……');
      await defender.print_and_wait(
        '不只是柔软，作为平时的成果，肉棒正被结实地支撑着。',
      );
      await defender.print_and_wait([
        '像是发情的猴子一样，',
        defender.get_colored_name(),
        ' 的肉棒狂热地在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的股间前后蹭弄着。',
      ]);
    } else {
      await defender.print_and_wait('变得滑溜溜亮晶晶的。');
      await defender.print_and_wait('变得有些熟练。');
      await defender.print_and_wait('变得无法乖乖忍耐。');
      await defender.print_and_wait('变得……有些寂寞了吗……');
      await attacker.say_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '……',
      ]);
      await defender.print_and_wait('眼神也……湿漉漉的……');
      await defender.print_and_wait('双腿被这么使用果然会变成这样啊。');
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_leg(attacker, defender, hook) {
    if (hook.arg) {
      if (attacker.id === 0 && era.get(`cflag:${defender.id}:种族`)) {
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
    } else {
      await attacker.print_and_wait('柔软而有弹性。');
      await attacker.print_and_wait('曲线优雅而纤长。');
      await attacker.print_and_wait(
        '有着能因为手指的爱抚而发起抖的绝佳敏感度。',
      );
      if (era.get(`cflag:${defender.id}:种族`)) {
        await attacker.print_and_wait('真浪费啊……');
        await attacker.print_and_wait('这样的双腿只是为了比赛而存在什么的……');
      }
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async pet_tail(attacker, defender) {
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait(
      '只是稍稍地多用上一点力，屁股就会抬起来，但这时候松手的话，就会连腰都塌下去……',
    );
    await attacker.print_and_wait([
      '喂喂……真的知道自己正在',
      attacker.get_phy_sex_title(),
      '的面前表演着怎样的动作吗，可怜的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '？',
    ]);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_hole_1(attacker, defender, hook) {
    await attacker.print_and_wait('说实话……仅仅只是现在这样感觉就要升天了……');
    await attacker.print_and_wait([
      '乱七八糟的……不论是被奸着的',
      hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴',
      '现状也好，还是舒服得一塌糊涂的身体也好……',
    ]);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_glans_by_hole_2(attacker, defender, hook) {
    await attacker.print_and_wait('哈……不止是高声喊牡蛎，而是深吸气的话……');
    await attacker.print_and_wait([
      '「啾」的一声缩紧了，虽然一秒钟都没能坚持到身体就痉挛着瘫软下去，但那一瞬间，',
      attacker.get_colored_name(),
      ' 的',
      hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴',
      '深情地吻上了 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 的龟头。',
    ]);
    await attacker.print_and_wait('哈……龟头一跳一跳的，应该是很高兴吧……');
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async suck_nipple(attacker, defender) {
    if (Math.random() < 0.5) {
      await attacker.say_and_wait('啾——');
      await attacker.print_and_wait(
        '眼前的白腻与玫红本能地想要躲开，但舌头可不是这么容易就能满足的东西。',
      );
      await attacker.print_and_wait(
        `${defender.get_teen_sex_title()}的柔软左右闪躲，最终认命般的乖乖停留在了舌尖。`,
      );
      await attacker.say_and_wait('吸——');
      await attacker.print_and_wait(
        '渐渐地，在舌尖兀自发着烫的红点有了硬挺的实感，于是小心用齿间将那肉粒衔住，咻地一吸——',
      );
      await defender.say_and_wait('唔——！');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 身体的分量立刻沉甸甸地压了过来。',
      ]);
      await attacker.print_and_wait('大概是腿发软了吧。');
    } else {
      const is_milking = era.get(`talent:${defender.id}:泌乳`);
      await attacker.print_and_wait('不会觉得很羞耻吗？');
      await attacker.print_and_wait(
        `被用膝枕侍奉着，将${
          is_milking ? '能漏出奶汁的' : '白皙'
        }乳肉俯到自己面前。`,
      );
      await attacker.print_and_wait(
        '而且大概是因为自己的错，那颜色分外妖艳的乳头已肿胀成方便吮吸的纤长形状……',
      );
      await attacker.print_and_wait('……所以真的不会为此而且羞耻吗？');
      await attacker.print_and_wait('完全不会。');
      await attacker.print_and_wait('舒服地眯起眼，张口衔住那嫣红的乳粒一吮。');
      if (is_milking) {
        await attacker.print_and_wait('「噗咻咻咻咻咻——」');
        await attacker.print_and_wait([
          `虽然看不见，但脑袋里已全是，那第一次流出乳汁时，从 `,
          sys_get_colored_callname(attacker.id, defender.id),
          ` 羞红的表情下，由白腻乳肉中喷射出的一条纤细却又连续，叫人的目光不由得追随上去的优美抛物线……`,
        ]);
        await attacker.print_and_wait('而且有点甜。');
      }
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suck_virgin(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(
        '让人心跳加速的气味……从舌尖融化到全身的酸甜腥味……',
      );
      await attacker.print_and_wait(
        '在如今这以舌舐阴的暧昧连接姿势中，到底是哪一方先来了的呢……',
      );
      await attacker.print_and_wait('柔软与柔软间的对抗。');
      await attacker.print_and_wait(
        '如吹口哨的唇形般在穴道中被迫卷起向前缓缓前探的舌，与应对着温热的撩拨生涩地蠕动着对抗的穴……',
      );
      await attacker.print_and_wait('哪一边都有着不能轻易退缩的理由……');
    } else {
      await attacker.print_and_wait('差不多可以做些别的事了。');
      await attacker.print_and_wait(
        '已经不太能回忆起一开始是怎样合拢成一条窄缝的清纯形状，被不断迎上来的舌舔得从里到外湿漉漉的穴，如今已向外翻开着地微微颤动……',
      );
      await attacker.print_and_wait(
        '而那双本来紧紧夹在坏孩子腰间的双腿，也不知在哪一番后松解开来，只留下如芭蕾般高高踮起的足尖形状。',
      );
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suspended_congress(attacker, defender, hook) {
    await defender.print_and_wait('逃不掉……');
    await defender.print_and_wait('从进入这个姿势开始，就逃不掉了。');
    await defender.print_and_wait([
      '身体被高高抬起，由 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 托着屁股架在肉棒上。',
    ]);
    if (hook.hook === ero_hooks.suspended_congress_anal_sex) {
      await defender.print_and_wait(
        '羞涩的屁股穴被强硬地做成肉棒套……但还不止这样……',
      );
    }
    await defender.print_and_wait([
      '从 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 腰侧岔开的双腿只有是否环住腰这一点点自由。而为了不让身体完全落在肉棒上，双手更是只有紧搂着 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 这一个选择。',
    ]);
    await defender.print_and_wait([
      '会沿着 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 的腰向下流吗……绝对……会的吧❤️',
    ]);
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tail_job(attacker, defender, hook) {
    if (hook.arg) {
      await defender.print_and_wait('灵活……');
      await defender.print_and_wait([
        '以提出要求的 ',
        defender.get_colored_name(),
        ' 都意料之外的灵敏程度，有着弯曲毛发的马尾巴缠上了肉棒。',
      ]);
      await defender.print_and_wait('以这个角度看见的屁股也别有风味。');
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait([
          '隐约能嗅见的，长长的马尾巴不可避免沾染上的女孩子的味道，让 ',
          defender.get_colored_name(),
          ' 的肉棒前所未有的兴奋着。',
        ]);
      }
      await attacker.say_and_wait('……');
      await defender.print_and_wait([
        '……而大约是感受到了这份暴涨的热度，背过身的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 连泛红的耳朵的动作都变得可爱起来。',
      ]);
    } else {
      await defender.print_and_wait('动作正变得粗暴……或者说是熟练。');
      await defender.print_and_wait(
        '毕竟尾巴在被淫靡的汁液刷得黏糊糊之后，总能从这让毛发亮晶晶的保养品中领会到什么的。',
      );
      await defender.print_and_wait('比如这根肉棒喜欢的缠绕的力度。');
      await defender.print_and_wait('比如这根肉棒被搔到会发颤的位置。');
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait(
          '比如，尾巴下的小穴是否也需要更多……更激烈的……',
        );
      }
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tit_and_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('真是的……就这么喜欢胸部吗……');
      await attacker.print_and_wait(
        '简直像是甜品上的奶油一样，挤在哪里都觉得美味……',
      );
      await attacker.say_and_wait('吸溜吸溜吸溜……');
      await attacker.print_and_wait([
        '乳肉被滴落在肉棒竿身上先走汁涂抹得滑腻腻亮晶晶的，但比起辛苦的欧派，最为滚烫而饱满的龟头却被 ',
        attacker.get_colored_name(),
        ' 用双手迎进了口中。',
      ]);
      await attacker.say_and_wait('唔……');
      await attacker.print_and_wait(
        '舌头开始不听使唤了，但只是感受到口上的龟头感到了一点点的寂寞，簇拥着乳头侍奉讨好肉棒的动作便没法停下……',
      );
    } else {
      await attacker.say_and_wait('吸溜吸溜……');
      await attacker.print_and_wait(
        '不管尝上多少遍，都很难觉得这称得上是所谓的美味……咸腥的同时下流的味道直窜进脑袋……',
      );
      await attacker.print_and_wait('但是……');
      await attacker.print_and_wait('但是…………');
      await attacker.print_and_wait('但是………………');
      await attacker.say_and_wait(
        [
          '为什么动作还没停下来呢……不论是我还是 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '……',
        ],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tit_job(attacker, defender, hook) {
    if (hook.arg) {
      await defender.print_and_wait('不觉得很棒吗。');
      await defender.print_and_wait([
        '这份 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 俯低在自己身下，用手捧起独属于少女的柔软将滚烫的肉棒围起的姿态……',
      ]);
      await attacker.say_and_wait('唔……');
      await defender.print_and_wait(
        '好像有好好地传达到呢，从肉棒的龟头向上升腾起的，满载着爱欲的热腾腾白汽。',
      );
      await defender.print_and_wait([
        '用手帮着身下的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 抬起头来。',
      ]);
      await defender.print_and_wait('嗯，已经熏制成相当美味的表情了。');
    } else {
      await attacker.say_and_wait('……');
      await attacker.print_and_wait([
        '能感觉到，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的腰在往后弓。',
      ]);
      if (era.get(`cflag:${attacker.id}:种族`)) {
        await attacker.print_and_wait(
          '敏感的马耳朵正被从上方吐出的紊乱热气呼呼吹拂着。',
        );
      }
      await attacker.print_and_wait(
        '被柔软包裹着的肉棒也是，挺立成了能轻易叫小穴发颤的形状。',
      );
      await attacker.print_and_wait(
        '不知想到了什么，心咚咚地跳着。但是这也只是所谓的「盲人摸象」吧……',
      );
      await attacker.print_and_wait([
        '于是 ',
        attacker.get_colored_name(),
        ' 向上抬头。',
      ]);
      await attacker.print_and_wait('果然是，野兽一样的表情……');
    }
  },
};
