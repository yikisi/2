/**
 * @file 调教地文 - 爱抚系2
 *
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  async function deep_blow_job_common(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.say_and_wait('呲溜呲溜……');
      await attacker.print_and_wait(
        '在场的两人中，已经至少有一个不具名的下流家伙偷跑着，能从这下流的体位中啾啾地榨取出让自己眉头舒展开的禁忌快感。',
      );
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
        ' 身下的 ',
        attacker.get_colored_name(),
        '。',
      ]);
    } else {
      await attacker.say_and_wait('哈……哈……❤️');
      await attacker.print_and_wait('吞咽……');
      await attacker.print_and_wait([
        '为了获取必需的氧气，含着肉棒的 ',
        attacker.get_colored_name(),
        ' 大口吞咽着，把混杂肉棒气味…不，说是混杂着氧气的肉棒臭会更准确些吧。',
      ]);
      await attacker.print_and_wait([
        '先走汁与小嘴被塞满的 ',
        attacker.get_colored_name(),
        ' 无法自抑涌出的涎水在一次次口穴抽插中被捣弄成了容易拉出长丝的粘稠透明质地……',
      ]);
      await attacker.say_and_wait('唔……唔唔唔唔……');
      await attacker.print_and_wait(
        '嘛，就算这么做上再多次，最后总不会连如何开口说话都会忘记吧。',
      );
    }
  }

  handlers[ero_hooks.deep_blow_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await attacker.print_and_wait('这样做的话……');
      await attacker.say_and_wait('唔……');
      await attacker.print_and_wait('果然会有点难……不过……');
      await attacker.print_and_wait('更深地含进去了……');
      await attacker.say_and_wait(
        [
          '应该会很舒服吧……我的……',
          sys_get_colored_callname(attacker.id, defender.id),
          '❤️',
        ],
        true,
      );
    } else {
      await attacker.print_and_wait([
        '已经积累起了些能在喉咙咕噜咕噜侍奉着肉棒的同时摇摆尾巴的余裕，',
        attacker.get_colored_name(),
        ` 在这方面出乎${defender.get_phy_sex_title()}预料的有天赋。`,
      ]);
      await attacker.print_and_wait([
        `用余光看着 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 吸着气仰起头的姿势，没空哼歌的 `,
        attacker.get_colored_name(),
        ' 好懂地抖起了耳朵。',
      ]);
    }
    await deep_blow_job_common(attacker, defender, hook);
  };

  handlers[ero_hooks.ask_deep_blow_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
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
      await attacker.say_and_wait('还想要，更深一点……');
      await defender.print_and_wait([
        '贪心地呓语着，被索取快感的本能所支配的 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 挺起了腰。',
      ]);
      await defender.print_and_wait('更深地含进去了……');
      await defender.print_and_wait('顶到，最里面了……');
    } else {
      await defender.print_and_wait([
        '已经积累起了些能在喉咙咕噜咕噜侍奉着肉棒的同时摇摆尾巴的余裕，',
        defender.get_colored_name(),
        ` 在这方面出乎${attacker.get_phy_sex_title()}预料的有天赋。`,
      ]);
      await defender.print_and_wait([
        `用余光看着 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 吸着气仰起头的姿势，没空哼歌的 `,
        defender.get_colored_name(),
        ' 好懂地抖起了耳朵。',
      ]);
      await defender.print_and_wait('怎么样～');
      await defender.print_and_wait([
        `虽然那张小嘴此刻没有说话的空闲，但与自家的${
          era.get(`cflag:${defender.id}:种族`) ? '担当' : '伙伴'
        }正负距离接触的 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 完全领会了那用舌尖勾勒在肉棒龟头上的邀功言语。`,
      ]);
    }
    await deep_blow_job_common(defender, attacker, hook);
  };

  handlers[ero_hooks.force_deep_blow_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      await attacker.say_and_wait('把头抬起来。');
      await defender.print_and_wait('更深地含进去了……');
      await defender.print_and_wait('依旧是，叫人难以听出温情的短促命令句。');
      await defender.print_and_wait([
        '但 ',
        defender.get_colored_name(),
        ' 的身体却难以抗拒地被其所支配着。',
      ]);
    } else {
      await defender.print_and_wait(
        `无言地催促着，${attacker.get_phy_sex_title()}再一次强硬地用手将面前的${defender.get_teen_sex_title()}固定在了自己的股间，直到自己满足之前。`,
      );
    }
    await deep_blow_job_common(defender, attacker, hook);
  };

  handlers[ero_hooks.hand_job] = async (attacker, defender, hook) => {
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
  };

  handlers[ero_hooks.ask_hand_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.hand,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait('请来帮帮我吧……', true);
      await defender.print_and_wait([
        `尽管 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 没有说出任何话，但 `,
        defender.get_colored_name(),
        ' 望着面前胀得通红的充血肉棒，已经开始预热着活动起的十指已经完全明白自己应做些什么。',
      ]);
    }
    await handlers[ero_hooks.hand_job](defender, attacker, hook);
  };

  handlers[ero_hooks.force_hand_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await attacker.say_and_wait('用手来做，可以的吧。');
      await defender.print_and_wait([
        `没有给出任何拒绝的空间，随着 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 的话语已伸至 `,
        defender.get_colored_name(),
        ' 的面前，听话地主动伸出双手侍奉，与被那根垂落着下流汁液的肉棒蹭遍它所好奇的每一个角落，留给 ',
        defender.get_colored_name(),
        ' 的选项就只有这两项而已。',
      ]);
    }
    await handlers[ero_hooks.hand_job](defender, attacker, hook);
  };

  handlers[ero_hooks.hand_and_blow_job] = async (attacker, defender, hook) => {
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
  };

  handlers[ero_hooks.ask_hand_and_blow_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
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
      await defender.say_and_wait('想要被……含进去……？');
      await defender.print_and_wait('是……这样吗');
    }
    await handlers[ero_hooks.hand_and_blow_job](defender, attacker, hook);
  };

  handlers[ero_hooks.force_hand_and_blow_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      await defender.print_and_wait('不由自主地便变成了蹲姿。');
      await defender.print_and_wait(
        '有些不可思议……明明没有听见明确的要求，身体却完全明白接下来该做些什么。',
      );
    }
    await handlers[ero_hooks.hand_and_blow_job](defender, attacker, hook);
  };

  handlers[ero_hooks.tit_job] = async (attacker, defender, hook) => {
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
        `用手帮着身下的 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ` 抬起头来。`,
      ]);
      await defender.print_and_wait('嗯，已经熏制成相当美味的表情了。');
    } else {
      await attacker.say_and_wait('……');
      await attacker.print_and_wait([
        `能感觉到，`,
        sys_get_colored_callname(attacker.id, defender.id),
        ` 的腰在往后弓。`,
      ]);
      await attacker.print_and_wait(
        '敏感的马耳朵正被从上方吐出的紊乱热气呼呼吹拂着。',
      );
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
  };

  handlers[ero_hooks.ask_tit_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.breast,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait([
        '用热烈到能让面前 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的乳头发烫立起目光，拜托似的直勾勾盯着。',
      ]);
      await attacker.print_and_wait([
        '对面的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 果然招架不住败下阵来了好诶。',
      ]);
      await defender.say_and_wait('……');
    }
    await handlers[ero_hooks.tit_job](defender, attacker, hook);
  };

  handlers[ero_hooks.fuck_tit] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await attacker.print_and_wait([
        '迫不及待地摇晃起腰来，比起冷冰冰的空气，眼前 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的身上无疑有着更适合肉棒待的妙处。',
      ]);
      await attacker.print_and_wait('你明白的吧。');
      await attacker.print_and_wait(
        '不需要无谓的沟通，只是用眼神将不可动摇的指令传达。',
      );
    }
    await handlers[ero_hooks.tit_job](defender, attacker, hook);
  };

  handlers[ero_hooks.tit_and_blow_job] = async (attacker, defender, hook) => {
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
  };

  handlers[ero_hooks.ask_tit_and_blow_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          part_enum.breast,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 从乳肉中冒出头的龟头有些没精打采的样子。',
      ]);
      await defender.print_and_wait('而且本人也很好懂地正合起掌拜托。');
    }
    await handlers[ero_hooks.tit_and_blow_job](defender, attacker, hook);
  };

  handlers[ero_hooks.fuck_tit_and_mouth] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await defender.say_and_wait('什么……！？');
      await defender.print_and_wait(
        '似乎完全没有倾听这边意愿的打算，而只是粗暴地实现自己的所想。',
      );
    }
    await handlers[ero_hooks.tit_and_blow_job](defender, attacker, hook);
  };

  handlers[ero_hooks.suck_nipple] = async (attacker, defender) => {
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
  };

  handlers[ero_hooks.bite_nipple] = async (attacker, defender) => {
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
  };

  handlers[ero_hooks.ask_milk_and_hand_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.breast,
          part_enum.mouth,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
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
        `能通过被含着的${
          era.get(`talent:${attacker.id}:泌乳`) ? '漏奶' : ''
        }乳头旁，那舌头的动作依稀看见 `,
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的表情。',
      ]);
      await defender.print_and_wait(
        '能通过掌中肉棒的烫手温度与胀起的筋络依稀在脑中描摹出肉棒现在的样子。',
      );
      await defender.print_and_wait('哈…请要负起责任来呀……');
    }
  };

  handlers[ero_hooks.milk] = (attacker, defender, hook) =>
    handlers[ero_hooks.suck_nipple](defender, attacker, hook);

  handlers[ero_hooks.ask_bite_nipple] = async (attacker, defender, hook) => {
    if (
      await ask_action(
        attacker.id,
        defender.id,
        part_enum.breast,
        part_enum.mouth,
      )
    ) {
      await after_refusing_by_defender(attacker, defender, hook);
      return;
    }
    await handlers[ero_hooks.bite_nipple](defender, attacker, hook);
  };

  handlers[ero_hooks.milk_and_hand_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await defender.print_and_wait('很好懂的吧');
      await defender.print_and_wait(
        '在被邀请着躺进膝枕哺乳后，高高立起的股间。',
      );
      await defender.print_and_wait('很好懂的对吧……');
    }
    await handlers[ero_hooks.ask_milk_and_hand_job](defender, attacker, hook);
  };
};
