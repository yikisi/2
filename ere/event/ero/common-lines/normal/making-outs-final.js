/**
 * @file 调教地文 - 爱抚系3
 * @author 天马闪光蹄
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts2 = require('#/event/ero/common-lines/normal/making-outs-2');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { part_enum } = require('#/data/ero/part-const');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function armpit_intercourse(attacker, defender, hook) {
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
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function foot_job(attacker, defender, hook) {
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
    await defender.print_and_wait('正侵犯着自己足底的这根肉棒不是脆弱的东西。');
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
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function non_penetrative(attacker, defender, hook) {
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
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function tail_job(attacker, defender, hook) {
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
}

class EroNormalMakingOuts extends EroNormalMakingOuts2 {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async non_penetrative(attacker, defender, hook) {
    await non_penetrative(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_non_penetrative(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.clitoris,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.say_and_wait(
        [
          '知道自己在说些什么吗……',
          sys_get_colored_callname(defender.id, attacker.id),
          '……',
        ],
        true,
      );
      if (!attacker.id && era.get(`cflag:${defender.id}:种族`)) {
        await defender.say_and_wait(
          `啊……啊……原来是这么看待的啊，自家担当的双腿。`,
          true,
        );
      }
    }
    await non_penetrative(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async sixty_nine(attacker, defender, hook) {
    if (((attacker.sex_code > 0) ^ (defender.sex_code > 0)) === 0) {
      return;
    }
    if (hook.arg) {
      await era.printAndWait('黏黏糊糊的身体叠在了一起。');
      await era.printAndWait('唇抵上了穴，唇也抵上了肉棒。');
      await era.printAndWait('咸腥的汁液在二人的身体里转上了圈……像野兽一样');
      await era.printAndWait(
        '不知是哪一方先开始的，刻意地吸吮舔弄出呲溜呲溜的淫靡动静，叫另一方也有样学样的跟上。',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: '呲溜呲溜' },
        { color: defender.color, content: '唔唔唔呲溜……' },
        '……」',
      ]);
      await era.printAndWait('彼此正依偎的身体正在发烫。');
      await era.printAndWait('烫到叫人意乱情迷……');
    } else {
      await era.printAndWait('原本清纯的一线穴瓣被舔舐成了绽开的松弛模样。');
      await era.printAndWait(
        '原本狰狞的充血肉棒因为那雀跃的小舌已被踱上了层可爱的亮光。',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: '哈……' },
        { color: defender.color, content: '哈……' },
        '……」',
      ]);
      await era.printAndWait(
        '两具汗湿的身体抵在一起磨蹭着，贪恋着这难得的休战时刻……',
      );
    }
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async armpit_intercourse(attacker, defender, hook) {
    await armpit_intercourse(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_armpit_intercourse(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.body,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await defender.say_and_wait('诶？');
      await attacker.print_and_wait('能再说一遍吗……');
      await attacker.print_and_wait([
        '面前 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 有些勉强的表情正无声地催促着，于是……',
      ]);
      await attacker.say_and_wait('请让我用肉棒蹭蹭腋下吧！');
      await defender.say_and_wait('……');
    }
    await armpit_intercourse(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_armpit_intercourse(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '被拽着仰起手臂的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，此刻在想些什么呢…',
      ]);
      await attacker.print_and_wait('大概不会是什么好话吧……');
    }
    await armpit_intercourse(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async foot_job(attacker, defender, hook) {
    await foot_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_foot_job(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.foot,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait('……果然？');
      await attacker.print_and_wait([
        '明明听见了出格的下流请求，面前的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 却露出了一份有所预料的余裕表情。',
      ]);
      await attacker.print_and_wait('原来……暴露的这么明显吗……');
    }
    await foot_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_foot_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(
        '因为对这种要求感到不满，所以扭过脸去不看这边也很正常吧。',
      );
      await attacker.print_and_wait(
        '不过在这边的业界，踩的时候把头扭向另一边可是奖励哦。',
      );
      await attacker.print_and_wait('啊……看过来了……');
    }
    await foot_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async tail_job(attacker, defender, hook) {
    await tail_job(attacker, defender, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_tail_job(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.body,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait('唉……');
      await attacker.print_and_wait([
        '几乎能听见面前 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的长叹声。',
      ]);
      await attacker.print_and_wait('是不是有些过分了呢……');
      await attacker.print_and_wait([
        '似乎有在把持不住的自己进行反省，但此刻 ',
        attacker.get_colored_name(),
        ' 依旧直勾勾地看着面前的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '。',
      ]);
    }
    await tail_job(defender, attacker, hook);
  }

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_tail_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait('意外的沉默？');
      await attacker.print_and_wait([
        '大约是对于 ',
        attacker.get_colored_name(),
        ' 下流的性癖已有了些心理预期，',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 这次表现得意外的顺从。',
      ]);
    }
    await tail_job(defender, attacker, hook);
  }

  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async hair_fuck(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait('呜——');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 半蹲在地，看着面前那熟悉的人影，心里却不禁产生了些许恐惧。',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 玩味地笑着，挺起腰胯，向 ',
        attacker.get_colored_name(),
        ' 逼近。',
      ]);
      await attacker.print_and_wait([
        '一个温热的棍状物体带着不容抗拒的意识挺向了的额头，',
        attacker.get_colored_name(),
        ' 吞了口唾沫，主动抬头相迎，小心地用手指带起自己的头发，缠住了刺来的长枪，开始作业。',
      ]);
    } else {
      await attacker.print_and_wait('沙沙……');
      await attacker.print_and_wait('手掌和头发反复揉搓着那东西。');
      await attacker.print_and_wait('这种触感……那东西……还在膨胀……');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 感觉发梢痒痒的，呼吸也变得粗重起来。',
      ]);
    }
  }

  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_hair_fuck(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.body,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait([
            sys_get_colored_callname(defender.id, attacker.id),
            '……？',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' 带着夹杂了期待与害羞的神情微微抬首，头顶感受到了一个热热的，比其看上去要沉重（是心理原因吗？）的物体，如此近的距离，如此浓厚的荷尔蒙气息，将用来处理信息和思考的大脑全部搅乱。',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' 蹲坐在 ',
            attacker.get_colored_name(),
            ' 胯下，面容不由自主地变得下流起来……',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ` 不禁露出了微笑。伸出双手，轻轻放在${defender.sex}的两只耳旁，温柔地扶住头部……然后抽动起了自己的腰。`,
          ]);
          await attacker.print_and_wait([
            `下体在发间穿梭，将修建齐整的短发弄得凌乱不堪，清理出一片自己运动的路径。毛发和皮肤摩擦刺激使那关键部位的前端流出汁水，运动起来更为顺畅。液体从顶部划下，流到已经神志不清，娇喘着的${defender.get_phy_sex_title()}睫毛上，再向下滴落……`,
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 看着如此场景，感觉又硬了几分。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('你想……这么做？！');
          await attacker.print_and_wait([
            '坐在 ',
            attacker.get_colored_name(),
            ' 面前的 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 以一种混杂了「变态啊」和「真拿你没辙」的语气说完，便叹了口气，轻甩了一下头，柔顺的秀发带着一股好闻的香气，撩上 ',
            attacker.get_colored_name(),
            ' 已经矗立在外的肉根，然后一停。',
          ]);
          await attacker.print_and_wait('该到自己了。');
          await attacker.print_and_wait([
            '将腰一挺，让自己的那玩意斜滑而下，到达颈侧，细密的头发和滑嫩的皮肤双重刺激让 ',
            attacker.get_colored_name(),
            ' 忍不住叹息一声。',
          ]);
          await attacker.print_and_wait([
            `${defender.sex}看 `,
            attacker.get_colored_name(),
            ' 这副模样，挑了挑眉，微微侧脖，抬起一只手轻摁在 ',
            attacker.get_colored_name(),
            ' 的那根东西上，三重受力把它夹在中间，多种感觉同时袭来，',
            attacker.get_colored_name(),
            ' 满足地呼出气来。',
          ]);
          break;
        case 2:
          await defender.say_and_wait('呵呵……');
          await attacker.print_and_wait([
            sys_get_colored_callname(attacker.id, defender.id),
            ' 似笑非笑地看着 ',
            attacker.get_colored_name(),
            '，',
            attacker.get_colored_name(),
            ` 不禁有点心虚，但还是用肢体语言请求${defender.sex}这么做。`,
          ]);
          await attacker.print_and_wait([
            `${defender.sex}似乎是故意晾了 `,
            attacker.get_colored_name(),
            ' 几秒钟，随后将双手盘向身后，捋起长长的秀发，猛地一扬——',
          ]);
          await attacker.print_and_wait([
            '万千青丝落在了 ',
            attacker.get_colored_name(),
            ' 的敏感之处上，凉凉的，痒痒地，',
            attacker.get_colored_name(),
            ' 丝丝地吸了一口气，不，还没完——',
          ]);
          await attacker.print_and_wait([
            `${defender.sex}掬着自己头发的手随之而到，十指合围，带发形成了一个卷，将 `,
            attacker.get_colored_name(),
            ' 的下体完全，细密地包裹住，随后开始撸动——',
          ]);
          await attacker.print_and_wait([
            '今次的刺激，对 ',
            attacker.get_colored_name(),
            ' 而言，或许太多了。',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait(
            '轻抚耳尖，并非感受其上绒毛在指尖的细腻，而是将其略弯，蹭到自己的宝贝上。',
          );
          await attacker.print_and_wait([
            '滑动，平时难以体验的身体毛发的刺激让 ',
            attacker.get_colored_name(),
            ' 性奋异常。',
          ]);
          await attacker.print_and_wait([
            `下面的${defender.get_phy_sex_title()}发出若有若无的喘息，更激起 `,
            attacker.get_colored_name(),
            ' 的欲望。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            `三个部位……三重触感……眼前的${defender.get_phy_sex_title()}主动为 `,
            attacker.get_colored_name(),
            ' 做出这种服务……',
          ]);
          await attacker.print_and_wait('天下没有比这更有感觉的事了。');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 不禁微咧起嘴角，闭目享受。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait('如涓流而下的水幕，如柔转漫卷的轻纱。');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 的那根东西，进了一个奇妙的穴中。',
          ]);
          await attacker.print_and_wait([
            '反复磨擦，',
            attacker.get_colored_name(),
            ' 不禁双腿一缩，有些许无色液体从肉根前端流出……',
          ]);
      }
    }
  }

  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async force_hair_fuck(attacker, defender, hook) {
    if (hook.arg) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait('欸……唔！');
          await attacker.print_and_wait([
            '突如其然地，',
            attacker.get_colored_name(),
            ` 扳着面前这个${defender.get_phy_sex_title()}的脸，然后把自己温热充血的家伙放在了${
              defender.sex
            }耳廓与头发的空隙间，轻晃${
              defender.sex
            }的脑袋同时加速腰部抽动。被夹在肌肤于毛发中间反复摩擦的肉根立刻兴奋起来，开始膨胀。`,
          ]);
          await attacker.print_and_wait([
            `${defender.sex}还没有明白是怎么回事，便被迫放弃了思考，因为自己接受和处理外界信息的部位已经变成了 `,
            attacker.get_colored_name(),
            ' 下体驰骋之处。',
          ]);
          break;
        case 1:
          await defender.say_and_wait('哈啊，等，等下！');
          await attacker.print_and_wait([
            '看到 ',
            attacker.get_colored_name(),
            ` 的眼神，${defender.sex}仿佛知道接下来要发生什么，一手护在后脑，一手慌乱地摆着，不过，`,
            attacker.get_colored_name(),
            ' 才不管。',
          ]);
          await attacker.print_and_wait([
            `大踏步贴近，摁住${
              defender.sex
            }的肩，挺腰直进，把分身放入对${defender.get_phy_sex_title()}来说隐秘的后颈上，在顺滑光泽的发丝和光滑白嫩的皮肤间，快乐地滑动起来。`,
          ]);
          break;
        case 2:
          await defender.say_and_wait('好吧……如果你一定要的话', true);
          await attacker.print_and_wait([
            `一番对视，面前的${defender.get_phy_sex_title()}退缩了，`,
            attacker.get_colored_name(),
            ' 带着胜利者的姿态开始享用战利品。',
          ]);
          await attacker.print_and_wait([
            '伸出惯用手，',
            attacker.get_colored_name(),
            ` 玩弄起${
              defender.sex
            }秀丽且有淡淡香气的长发，坏笑一声，从中挑起一捧，粗暴地将${defender.get_phy_sex_title()}平日细心打理的东西缠在自己的那玩意上，同时轻轻地拉扯，让自己有一种别样的撸管快感。`,
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait([
            '纵横于胯下 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 的私密之处，',
            attacker.get_colored_name(),
            ' 的肉根明显更加兴奋了。',
          ]);
          await attacker.print_and_wait([
            '被 ',
            attacker.get_colored_name(),
            ' 压在下方的 ',
            sys_get_colored_callname(attacker.id, defender.id),
            ' 神情已难以辨别……羞红的脸和耳根倒可一窥',
            defender.sex,
            '目前状态。',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 舔了舔嘴角，磨蹭地更起劲了。',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' 在滑腻的肌肤上反复擦动……穿过轻抚分身的细丝发梢，享受肉体的美好感觉，以及精神上的征服满足。',
          ]);
          break;
        case 2:
          await attacker.print_and_wait([
            '平日被打理得整洁又柔顺的秀发被 ',
            attacker.get_colored_name(),
            ' 弄得乱起八糟。',
          ]);
          await attacker.print_and_wait([
            '阴毛和其中几根头发纠缠，将 ',
            attacker.get_colored_name(),
            ` 的雄性气息盖在${defender.sex}的气味之上。`,
          ]);
          await attacker.print_and_wait([
            '野蛮地运动着，野蛮地标记着……',
            attacker.get_colored_name(),
            ` 野蛮地拿${defender.sex}的珍贵之物发泄着性欲。`,
          ]);
      }
    }
  }
}

module.exports = EroNormalMakingOuts;
