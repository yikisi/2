/**
 * @file 调教地文 - 爱抚系1
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { pet_leg, pet_tail } = require('#/event/ero/common-lines/ero-snippets');
const EroMakingOuts = require('#/event/ero/common-lines/interface/ero-making-outs');
const {
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function blow_job(attacker, defender, hook) {
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
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_blow_job(attacker, defender, hook) {
  const is_asking = hook.hook === ero_hooks.ask_blow_job;
  if (hook.arg) {
    if (is_asking) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait('拜托了——');
      await defender.print_and_wait([
        '面前的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ` 突然说出了叫人脸红的话。`,
      ]);
      await defender.print_and_wait(
        '突然提出这种要求，就算被拒绝然后踢飞也请不要有怨言哦……',
      );
    } else {
      await attacker.say_and_wait('把嘴张开。');
      await defender.print_and_wait(
        '挣扎的话说不定有用……虽然有这样想过，身体却一点点被那只手压低了下去……',
      );
      await defender.say_and_wait('唔……');
    }
  } else {
    if (is_asking) {
      await defender.print_and_wait('同样的要求一遍又一遍的说也太犯规了……');
    } else {
      await defender.say_and_wait('哈……', true);
      await defender.say_and_wait('还要……继续嘛……', true);
    }
  }
  await blow_job(defender, attacker, hook);
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_cunnilingus(attacker, defender, hook) {
  const is_asking = hook.hook === ero_hooks.ask_cunnilingus;
  if (hook.arg) {
    if (is_asking) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.clitoris,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait('拜托了……');
      await defender.print_and_wait([
        `尽管还带着些羞怯，面前的 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 却自己用双手帮着将那带着颤的双腿向这边分开`,
      ]);
    } else {
      await attacker.say_and_wait('拜托了哦～');
      await defender.print_and_wait([
        `主动张开双腿的 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 期待地望向自己身下的担当，用手帮着眼神游离的 `,
        defender.get_colored_name(),
        ' 低俯下头。',
      ]);
    }
    await defender.say_and_wait('唔唔唔唔————');
    await defender.print_and_wait(
      '没有不把它含入口中的理由吧，没有把眼前散发着下流雌性气味的充血小豆从保护中剥出后，让它孤零零地裸着发颤的理由吧。',
    );
    await defender.print_and_wait([
      '所以 ',
      defender.get_colored_name(),
      ' 深深地俯下身体，将头埋入了 ',
      sys_get_colored_callname(defender.id, attacker.id),
      ' 大大分开的双腿之间。',
    ]);
    if (!is_asking) {
      await attacker.say_and_wait('哈❤️');
      await defender.print_and_wait(
        '明明是提出不妙要求的一方，此刻却忘情地摇摆着身体……',
      );
    }
    await defender.print_and_wait('应激着夹拢的大腿股间在发颤。');
    await defender.print_and_wait('盘上这边腰的膝在发颤。');
    await defender.print_and_wait('环在腰后的双足在发颤。');
    await defender.print_and_wait('啊……为什么会突然变成这样呢……');
    await defender.print_and_wait(
      '总不会是因为这粒正被舌舔得更加湿漉漉的小豆豆的关系吧。',
    );
  } else {
    await continue_cunnilingus(defender, attacker);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_ask_suck_virgin(attacker, defender, hook) {
  const is_asking = hook.hook === ero_hooks.ask_suck_virgin;
  if (hook.arg) {
    if (is_asking) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.virgin,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.say_and_wait('哈……');
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ` 正在自己面前用手指将粉嫩的穴瓣分开，那么，这边需要做些什么就一目了然了吧……`,
      ]);
    } else {
      await defender.say_and_wait('唔——');
      await defender.print_and_wait(
        '强硬地被压下了头，惊呼着想张开的唇随即迎上了张扬的小穴。',
      );
    }
  } else {
    if (is_asking) {
      await defender.print_and_wait(
        '因为迟迟没有听见停下来的请求，这边的舌也就没有半途而废的理由。',
      );
      await defender.print_and_wait('不过……');
    } else {
      await attacker.say_and_wait('哈～');
      await defender.print_and_wait([
        `大约是心满意足了吧，像是痛饮了一大口凉啤酒瓣，`,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 吐出口畅快的气。`,
      ]);
    }
  }
  await suck_virgin(defender, attacker, hook);
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 */
async function continue_cunnilingus(attacker, defender) {
  await attacker.print_and_wait('用舌尖拨弄。');
  await attacker.print_and_wait('用吮吸使其立起。');
  await attacker.print_and_wait('轻轻地向它吹气。');
  await attacker.print_and_wait('稍微有些苦恼啊……');
  await attacker.print_and_wait([
    '不论用哪种方式对面前的阴蒂，怎样刺激都能让面前的 ',
    sys_get_colored_callname(attacker.id, defender.id),
    ' 一致地在欢愉中颤抖的话，不就没办法知道更中意哪一种了嘛。',
  ]);
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function suck_virgin(attacker, defender, hook) {
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
}

module.exports = class extends EroMakingOuts {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_ear(attacker, defender, hook) {
    if (!era.get(`cflag:${defender.id}:种族`)) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait(
        `${defender.get_uma_sex_title()}的耳朵，果然是会让人憧憬的东西啊，不论是将它视为作为肢体的延伸，作为表情的延伸，亦或是作为……敏感带的延伸……`,
      );
      await attacker.print_and_wait([
        `只是用指尖蜻蜓点水似的轻柔触碰，`,
        attacker.get_colored_name(),
        ` 还没能细细感受那份按摩着指尖的细腻触感，那对尖尖长长的马耳朵便害羞地从 ${attacker.get_phy_sex_title()} 的指间溜走了。`,
      ]);
      await attacker.say_and_wait('…………');
      await defender.say_and_wait('请……再来摸一次吧，这次不会逃走了。');
      await attacker.print_and_wait([
        '怀里的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，现在脸很红。',
      ]);
    } else {
      await attacker.print_and_wait('呼呼……');
      await attacker.print_and_wait(
        '掌中有了一对不会逃走的马耳朵，被细密的绒毛按摩着指腹…有种身与心都被疗愈了的感觉。',
      );
      await attacker.print_and_wait('这就是作为恋人的特权吗……');
      await attacker.print_and_wait('不过，现在有点好奇那里的状态……');
      await attacker.print_and_wait([
        '仿佛由看不清的丝线连在一处，',
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的双腿随着 ${attacker.get_phy_sex_title()} 被马耳朵黏住的手羞人地一颤一颤。`,
      ]);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async pull_ear(attacker, defender, hook) {
    if (!era.get(`cflag:${defender.id}:种族`)) {
      return;
    }
    await attacker.print_and_wait('这样是不对的……');
    await attacker.print_and_wait('……这不是作为恋人应当做的事……');
    await attacker.print_and_wait('……不过');
    await attacker.print_and_wait(
      `不满足于单纯的温柔爱抚，被从下身涌起的支配欲所支配的${attacker.get_phy_sex_title()}，渐渐懂得了如何安全地增大指间的力道……`,
    );
    await attacker.print_and_wait(
      `……这样便能叫身下的马耳朵${defender.get_phy_sex_title()}明白，自体内逐渐苏醒的，对着人类摇晃尾巴的血脉记忆究竟从何时何处而来……`,
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_breast(attacker, defender, hook) {
    const touched = era.get(`tcvar:${defender.id}:阴道接触部位`);
    if (
      touched.part === part_enum.penis &&
      touched.owner === attacker.id &&
      defender.sex_code !== 1
    ) {
      await attacker.print_and_wait([
        '完全没有为 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 展现出的柔弱姿态感到一丝一毫的不忍或满足，不会简单感到满足的 ',
        attacker.get_colored_name(),
        ' 只是进一步将双手探到了那对顺应着让苹果坠下的力量向下凸显形状的美乳。',
      ]);
      await defender.say_and_wait('哈……');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 连掌握着盈盈乳肉的五指都进一步发力，将那对属于 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 自己的柔软任性地变成唯独自己所中意的形状。',
      ]);
    } else if (hook.arg) {
      if (defender.sex_code === 1) {
        return;
      }
      await attacker.print_and_wait([
        era.get(`cflag:${defender.id}:成长阶段`) < 5
          ? defender.get_teen_sex_title()
          : '诱人',
        '的柔软……此刻落进了自己的掌心。',
      ]);
      await attacker.print_and_wait(
        '无法忍耐的指尖自己便动了起来，迫不及待地想让眼前的软肉印上指纹，变成更符合自己的形状。',
      );
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的身体正随着自己的手指而摇晃，发出暧昧的声音……哈，不得不承认，这种感觉美妙到叫人不想停下来……',
      ]);
    } else {
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait([
        '啊，就算是这边也差不多能感觉到了……眼前 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的身体，因自己的触碰而变得紧绷，也因自己的触碰而变得寂寞……',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait('但是，果然还是想再任性一会。');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      if (!era.get(`cflag:${defender.id}:种族`)) {
        return;
      }
      await attacker.print_and_wait('很烫……');
      await attacker.print_and_wait(
        '虽然只是嵌在白皙乳肉上小小的肉粒，却正散发着了不起的热度',
      );
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '用手指绕着乳晕画圈，看着那粉色的小点在指肚的压迫下一点点肿胀，一点点立起，一点点拥有与手指向抗衡的坚挺硬度……',
      );
      await attacker.print_and_wait('……然后加大几分力度将它揉扁。');
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait('啊，被用尾巴教训了。');
    } else {
      await attacker.print_and_wait('说不定能就这么挤出乳汁来……');
      await attacker.print_and_wait(
        '眼前被连续不断的爱抚弄得硬邦邦的下流乳头叫人忍不住这么想……',
      );
      await defender.say_and_wait('呀——');
      await attacker.print_and_wait([
        '趁着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 低着头喘息分神的功夫尝试着用手指将乳头向上提起……',
      ]);
      await attacker.print_and_wait('惊慌的样子很美味。');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_clitoris(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '将 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的双腿分开，这么直勾勾地盯着',
        defender.sex,
        '赤裸的下身……',
      ]);
      await attacker.print_and_wait(
        '已经没有回头的机会了……但自己却反而因此振奋……',
      );
      await attacker.print_and_wait(
        '用手指将那粉色小肉粒上覆着的包皮揉开，看着那敏感的阴蒂因暴露在空气上而从可爱的粉色逐渐变为更妖艳的充血赤色。',
      );
      await attacker.print_and_wait('……放心吧，会对它温柔一些的');
    } else {
      await defender.say_and_wait('唔……');
      await attacker.print_and_wait(
        '啊啊，不知不觉就已经变成这种又红又肿的可怜样子了。',
      );
      await attacker.print_and_wait([
        '只是简单触碰加上一点点耐心，这小小的敏感肉突就会让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的无暇身体放荡地动起来……',
      ]);
      await defender.say_and_wait('呀——');
      await attacker.print_and_wait('再看一次吧，最后一次。');
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async finger_fuck(attacker, defender, hook) {
    await defender.say_and_wait('唔……');
    await attacker.print_and_wait(
      '明明身体的反应还有些僵硬，小穴却毫不费劲地就把这根食指的指尖连着第一指节含入其中了……',
    );
    await attacker.print_and_wait('手指被热烈地吻着。');
    await attacker.print_and_wait(
      '向上勾，向下蹭，顺应着穴肉的蠕动，朝着两侧……',
    );
    await attacker.print_and_wait('哈……腿夹得这么紧的话，可就没法继续了哦。');
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async prepare_virgin(attacker, defender, hook) {
    if (!era.get(`cflag:${defender.id}:种族`)) {
      return;
    }
    await attacker.print_and_wait(
      `小心翼翼地探入两根手指，将敞露在自己面前，${defender.get_teen_sex_title()}合成一条细缝的窄窄肉穴翻弄开来。`,
    );
    await attacker.print_and_wait('很美……');
    await defender.say_and_wait('别这么直勾勾地看着呀……', true);
    await attacker.print_and_wait('被狂乱地摇晃起来的尾巴这么抱怨了，但是……');
    await defender.say_and_wait('唔——');
    await attacker.print_and_wait(
      '呼，能感受到随着手指拓开肉穴的程度渐渐变深，指缝间被蠕动的小穴从内部挤出的热气，吹出的迷人瘙痒感。',
    );
    await attacker.print_and_wait('再多加一根手指也没关系吧。');
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(
        `想让${defender.sex}变得更舒服，想让${defender.sex}的小穴变得更柔软，想让这具漂亮的身体因为自己的动作而更忘情地扭动起来……`,
      );
      await defender.say_and_wait('哈……哈……');
      await attacker.print_and_wait(
        '明明只是负责动动手指，但脑内暴走的欲念却叫人气喘吁吁。',
      );
      await attacker.print_and_wait('在哪呢……应该已经快到了才对……');
      await attacker.print_and_wait('……');
      await defender.say_and_wait('唔——');
      await attacker.print_and_wait([
        '比起周围的穴肉来说，那微微的凸起感叫手指不由自主地被吸了过去，进而便能感受到那微隆的穴肉所独特的炽热温度与湿黏的触感……而帮忙核对答案的，则是 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 突然拱起的腰腹与夹紧了作案手臂的双腿。',
      ]);
      await attacker.print_and_wait('……找到了。');
    } else {
      await attacker.print_and_wait('挤压。');
      await attacker.print_and_wait('搓揉。');
      await attacker.print_and_wait('戳弄。');
      await attacker.print_and_wait('用钝厚的指甲去撩拨。');
      await attacker.print_and_wait([
        '在这双手尽兴之前，尽情地去教会面前不知什么时候已瘫软成泥的汗津津的 ',
        defender.get_colored_name(),
        '，为什么快乐能被称作是毒药吧。',
      ]);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_anal(attacker, defender, hook) {
    if (hook.arg) {
      await defender.say_and_wait('唔嗯——！？');
      await attacker.print_and_wait([
        '虽然稍迟了一些，面前的屁股',
        defender.get_adult_sex_title(),
        '很明显察觉到了来自这边的意图，被来自',
        attacker.get_colored_name(),
        '的手指暧昧地凑近过来，用叫身体恰到好处能警惕起来的粗糙质感，沿着那小巧的穴口绕着圈。',
      ]);
      await attacker.print_and_wait([
        '而这「恰到好处」的警惕……便体现在 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 不自觉向着手指讨好撅起的屁股……',
        era.get(`cflag:${defender.id}:种族`) ? '与那晕头转向的马尾巴了……' : '',
      ]);
    } else {
      await defender.print_and_wait('所以……到底是不是想要进攻那里呀……');
      await defender.print_and_wait([
        `是……错觉吗……`,
        sys_get_colored_callname(defender.id, attacker.id),
        `……好像格外中意这种欲擒故纵的节奏……`,
      ]);
      await defender.print_and_wait(
        '没法坚持着紧绷身体，自己被暧昧的爱抚感融化的屁股小穴，已经悄悄地松弛下来，变成了能吞下什么都不奇怪的性爱穴。',
      );
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async prepare_anal(attacker, defender, hook) {
    await attacker.print_and_wait(
      `用手掌感受着自面前翕动的穴中吐出的撩人热气，四根手指如桩般将极力想让叫人害羞的肉穴合拢，以逃开 ${attacker.get_phy_sex_title()} 视线的臀肉固定住。`,
    );
    await attacker.print_and_wait(
      '唯独格外粗长的中指有另外的事做，如蝎尾般微曲着一点点凑近后穴，然后便是缓慢而坚决的插入。',
    );
    await attacker.print_and_wait('阻力感很强。');
    await attacker.print_and_wait([
      '自发地蠕动起的穴肉如有生命般喘着气推阻着 ',
      attacker.get_colored_name(),
      ` 的手指，明明并不如隔壁的小穴般是为了性爱而存在的淫肉，但如今面对着${attacker.get_phy_sex_title()}的手指却积极到叫人意外。`,
    ]);
    await attacker.print_and_wait('在害怕吗……还是在喜悦着呢……？');
    await attacker.print_and_wait([
      '连喘息着的 ',
      sys_get_colored_callname(attacker.id, defender.id),
      ' 自己都弄不明白，那从害羞着蠕动起的后穴内传出，倏地爬上脊梁让身体发颤的电流，到底是意味着什么。',
    ]);
    await defender.say_and_wait(
      '又……往里面去了……第一个指节……已经全部都……',
      true,
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pet_leg(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    await pet_leg(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async pet_tail(attacker, defender, hook) {
    await attacker.print_and_wait('相当新鲜的体验。');
    await attacker.print_and_wait(
      `毕竟是从${defender.get_uma_sex_title()}的尾椎底伸出，平时在那校服裙后如看得见的风般摇曳着的尾巴呀。`,
    );
    await attacker.print_and_wait(
      '哼着歌轻柔地抚摸着，手指沿着柔顺的尾巴毛逐渐上拨，将自己的双手被来自尾巴根私密气味尽情标记……',
    );
    await attacker.print_and_wait('啊……说起来……');
    await defender.say_and_wait('不许闻！', true);
    await attacker.print_and_wait(
      '像是被这么呵斥着，想要抬起的手被尾巴紧紧地缠上动弹不得。',
    );
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async pull_tail(attacker, defender, hook) {
    if (hook.arg) {
      await defender.say_and_wait('哦哦～');
      await attacker.print_and_wait([
        '从身下的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 口中传出的荡漾的呻吟声是有毒的。',
      ]);
      await attacker.print_and_wait(
        `在了解了，可以通过拽弄尾巴让面前的${defender.get_uma_sex_title()}变得温顺而听话后，从小腹内顶起的热气变得更加难以阻挡了。`,
      );
    } else {
      await pet_tail(attacker, defender);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async cunnilingus(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait('唔唔唔唔————');
      await attacker.print_and_wait(
        '没有不把它含入口中的理由吧，没有把眼前散发着下流雌性气味的充血小豆从保护中剥出后，让它孤零零地裸着发颤的理由吧。',
      );
      await attacker.print_and_wait([
        '所以 ',
        attacker.get_colored_name(),
        ' 深深地俯下身体，将头埋入了 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 大大分开的双腿之间。',
      ]);
      await attacker.print_and_wait('应激着夹拢的大腿股间在发颤。');
      await attacker.print_and_wait('盘上这边腰的膝在发颤。');
      await attacker.print_and_wait('环在腰后的双足在发颤。');
      await attacker.print_and_wait('啊……为什么会突然变成这样呢……');
      await attacker.print_and_wait(
        '总不会是因为这粒正被舌舔得更加湿漉漉的小豆豆的关系吧。',
      );
    } else {
      await continue_cunnilingus(attacker, defender);
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_cunnilingus(attacker, defender, hook) {
    await common_ask_cunnilingus(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_cunnilingus(attacker, defender, hook) {
    await common_ask_cunnilingus(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async suck_virgin(attacker, defender, hook) {
    await suck_virgin(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_suck_virgin(attacker, defender, hook) {
    await common_ask_suck_virgin(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_suck_virgin(attacker, defender, hook) {
    await common_ask_suck_virgin(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async blow_job(attacker, defender, hook) {
    await blow_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_blow_job(attacker, defender, hook) {
    await common_ask_blow_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_blow_job(attacker, defender, hook) {
    await common_ask_blow_job(attacker, defender, hook);
  }
};
