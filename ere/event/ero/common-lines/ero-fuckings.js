const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @author O口口口口口
 * @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers
 */
module.exports = (handlers) => {
  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async function continue_fucking_common(attacker, defender) {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('哦哦哦哦哦哦————❤️');
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' 的身体破廉耻的在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 面前痉挛般的激烈扭动着，将湿漉漉身体上挂着的温热晶莹水滴抖的遍地都是。',
      ]);
      await defender.print_and_wait(
        '但本人此刻却完全没有余裕去在意这些繁文缛节，黏糊糊的发丝卷成一绺歪垂在额前，小腹内传出躁动的砰砰跃动声，即使里面没有肉棒或是手指或是坏心眼的舌，在翕动着的小穴也能如藕般拉出绵长银丝，向外呼出热腾腾的蒸汽。',
      );
      await defender.say_and_wait('要去了……快要……去了……', true);
      await defender.say_and_wait('快点……快点……快点去啊❤️', true);
      await defender.print_and_wait([
        '先是无力，随后又是不情不愿得再次绷紧，连自己都不知道这具身体为什么要做出这样的动作，被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 逼迫玩弄到这种程度的身体大约只受着野性的支使。',
      ]);
      await defender.print_and_wait('会怎么样去呢，会什么时候被弄到去呢');
      await defender.print_and_wait(
        '一片空白的脑袋在停转又重启之后，变成了只能思考这种事情的废柴大脑。',
      );
      await defender.say_and_wait('——❤️');
      await defender.say_and_wait('……要……要来了吗❤️', true);
    } else {
      await defender.say_and_wait('哈……');
      await defender.print_and_wait(
        '本以为只是一次普通的呼吸，却从喉咙里挤出来让自己都吓了一跳的妖艳声音……❤️',
      );
      await defender.print_and_wait('有在好好享受着啊……身体……');
      await defender.print_and_wait('害羞……？抵抗……？');
      await defender.print_and_wait(
        '那种感情不知道什么时候起就已经随着漏出的呻吟声溜走了，现在……变得诚实的自己想要更多……更多更多❤️',
      );
      await defender.print_and_wait([
        '想更多地紧贴上 ',
        attacker.get_colored_name(),
        ' 的身体感受那份温度，想更多的，被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 教会更多下流的事情，想让这湿漉漉的发热身体能干脆地被玩弄成没法见人的害羞样子……',
      ]);
      await defender.say_and_wait(
        '……哈……因为没办法保证能说服之后的自己……',
        true,
      );
      await defender.say_and_wait('……所以，请好好地……抓紧时间❤️', true);
    }
  }

  handlers[ero_hooks.missionary] = handlers[ero_hooks.missionary_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 以正常位插入了 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.missionary ? '小穴' : '屁穴'}……】`,
        ]);
        await defender.print_and_wait(
          '或许这就是……最能感受彼此体温的姿势了吧。',
        );
        if (hook.hook === ero_hooks.missionary_anal_sex) {
          await defender.say_and_wait(
            '但是，就连那种小穴的温度都想记住吗…❤️',
            true,
          );
        }
        await defender.print_and_wait([
          '所谓的正常位，或叫做传教士位，如果从交缠的二人身前的方向望去的话，就像是 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 扑进怀中吸吮母乳的姿态般。',
        ]);
        await defender.print_and_wait([
          sys_get_colored_callname(defender.id, attacker.id),
          ' 的身体盖住了 ',
          defender.get_colored_name(),
          ' 的身体，硬邦邦的肉棒毫不容赦地插入小穴，让 ',
          defender.get_colored_name(),
          ' 修长纤细的紧致长腿以有些狼狈的姿势从 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 腰的两侧伸出，僵硬地绷直足底朝天……',
        ]);
        await defender.print_and_wait('好烫……好烫……');
        await defender.print_and_wait('……好烫❤️');
      } else {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 以正常位抽插着 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.missionary ? '小穴' : '屁穴'}……】`,
        ]);
        await continue_fucking_common(attacker, defender);
      }
    };

  handlers[ero_hooks.doggy_style] = handlers[ero_hooks.doggy_style_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 以后背位插入了 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.doggy_style ? '小穴' : '屁穴'}……】`,
        ]);
        await attacker.print_and_wait('像小狗一样……');
        await attacker.print_and_wait(
          '那双腿……那双前脚掌紧绷着踮起，膝盖弯曲着将湿漉漉的腰跨高高顶起的双腿……',
        );
        await attacker.print_and_wait(
          '在那之上，被支撑起的是……像小狗一样不自觉地摇晃着的屁股。',
        );
        await attacker.print_and_wait([
          `被以煽情的姿态骑在身下的马耳朵${defender.get_adult_sex_title()}，身体的发颤根本停不下来，让人看见后便不禁想舔润干裂的嘴唇。作为肉棒的媚药，让身后低喘的 `,
          attacker.get_colored_name(),
          ' 简直要将蛋也塞进去。',
        ]);
        if (hook.hook === ero_hooks.doggy_style_anal_sex) {
          await attacker.print_and_wait(
            '……诶，这样的话，不也就能用屁股把蛋挤出来了嘛',
          );
          await attacker.print_and_wait('简直像是在说什么冷笑话啊嘶。');
        }
      } else {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 以后背位抽插着 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.doggy_style ? '小穴' : '屁穴'}……】`,
        ]);
        await continue_fucking_common(attacker, defender);
      }
    };

  handlers[ero_hooks.sitting] = handlers[ero_hooks.sitting_anal_sex] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 与 ',
        defender.get_colored_name(),
        ' 相对而坐，将肉棒插入了 ',
        defender.get_colored_name(),
        ` 的${hook.hook === ero_hooks.sitting ? '小穴' : '屁穴'}……】`,
      ]);
      await defender.print_and_wait('比预想中还要令人害羞……');
      await defender.print_and_wait(
        `在${
          hook.hook === ero_hooks.sitting ? '小穴' : '屁股'
        }被厉害地捣弄着的同时，被直勾勾地看着……❤️`,
      );
      await defender.print_and_wait([
        '明明已经被使坏的肉棒弄得全身软绵绵没有力气了，沐浴在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的目光中却还能强撑着把腰挺直。',
      ]);
      await defender.print_and_wait(
        `仍由那含着笑容的目光，在绯红的脸上……${
          defender.sex_code - 1 ? '一晃一晃的柔软欧派上……' : ''
        }微微显出隆起肉棒痕迹的小腹上…不知足地来回打量着……`,
      );
      await defender.print_and_wait('难道说还没满足吗——');
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ` 相对而坐，肉棒抽插着${
          hook.hook === ero_hooks.sitting ? '小穴' : '屁穴'
        }……】`,
      ]);
      await continue_fucking_common(attacker, defender);
    }
  };

  handlers[ero_hooks.hug_sitting] = handlers[ero_hooks.hug_sitting_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 将背对着的 ',
          defender.get_colored_name(),
          ` 抱在怀里坐着，将肉棒插入了${
            hook.hook === ero_hooks.hug_sitting ? '小穴' : '屁穴'
          }……】`,
        ]);
        await defender.print_and_wait('为了不被看着而选择的姿势。');
        await defender.print_and_wait('但是这不是还在被看着嘛——');
        await defender.print_and_wait([
          '后仰着用后撑的双手手支起身体，',
          defender.get_colored_name(),
          ' 不自觉地扭动正吞吐着肉棒的屁股。',
        ]);
        await defender.print_and_wait([
          '随后悲叹似的发现背后 ',
          attacker.get_colored_name(),
          ' 发烫的视线果然又聚在了那上面……于是唯独没有被 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 看见的小脸上，已露出了一副快要融化的下流表情。',
        ]);
        if (hook.hook === ero_hooks.hug_sitting_anal_sex) {
          await defender.print_and_wait('不妙❤️为什么偏偏被肉棒欺负的是那里……');
        }
      } else {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 怀抱着 ',
          defender.get_colored_name(),
          ` 坐着，肉棒抽插着${
            hook.hook === ero_hooks.hug_sitting ? '小穴' : '屁穴'
          }……】`,
        ]);
        await continue_fucking_common(attacker, defender);
      }
    };

  handlers[ero_hooks.standing] = handlers[ero_hooks.standing_anal_sex] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ` 面对面站着，将肉棒插入了${
          hook.hook === ero_hooks.standing ? '小穴' : '屁穴'
        }……】`,
      ]);
      await attacker.print_and_wait(
        '好像能达到……比其他的姿势更接近子宫的位置。',
      );
      await attacker.print_and_wait([
        '不自觉地深吸了一口气，',
        attacker.get_colored_name(),
        ' 前倾身体，与一条美腿高抬过头顶的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 依偎在一起。',
      ]);
      await attacker.print_and_wait([
        '两颗鼓鼓的睾丸紧贴在了穴口，被肉棒形状撑起的小腹也被与 ',
        attacker.get_colored_name(),
        ' 的小腹紧紧相贴。',
      ]);
      await defender.say_and_wait('呼……吸……❤️');
      if (hook.hook === ero_hooks.standing_anal_sex) {
        await defender.say_and_wait('明明还……隔着一层小穴不是吗❤️', true);
        await defender.say_and_wait('为什么……❤️', true);
      }
      await attacker.print_and_wait(
        '过近的距离，让二人每一次牵动小腹的深呼吸，都成了这场性爱的佐料。',
      );
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 面对面站着用肉棒抽插着 ',
        defender.get_colored_name(),
        ` 的${hook.hook === ero_hooks.standing ? '小穴' : '屁穴'}……】`,
      ]);
      await continue_fucking_common(attacker, defender);
    }
  };

  handlers[ero_hooks.hug_standing] = handlers[ero_hooks.hug_standing_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 站着将 ',
          defender.get_colored_name(),
          ` 揽在怀中，将肉棒插入${
            hook.hook === ero_hooks.hug_standing ? '小穴' : '屁穴'
          }……】`,
        ]);
        await attacker.print_and_wait('腰很快就塌下去了。');
        await attacker.print_and_wait(
          `明明是${
            era.get(`cflag:${defender.id}:种族`)
              ? defender.get_uma_sex_title()
              : '大人'
          }，却失去了独自凭双足站稳的能力，变成扶着什么撅起屁股才能勉强站起的狼狈样子。`,
        );
        await attacker.print_and_wait(
          '被冲撞成了与比赛和训练完全无关的内八站姿，前脚掌承担着过多的身体重要几乎要陷进地里，变得轻飘飘的后脚掌却随着肉棒的抽插高高踮起。',
        );
        await attacker.print_and_wait(
          `像是自发地匍匐于肉棒的身下般，${
            hook.hook === ero_hooks.hug_standing ? '小穴' : '屁穴'
          }的主人膝盖前探，因为软弱的内八姿势两边的膝盖在肉棒深深插入时几乎要顶在一起，让汗湿的身体更加地摇摇晃晃……`,
        );
        if (hook.hook === ero_hooks.hug_standing_anal_sex) {
          await defender.say_and_wait(
            '不该是这样的……但是，但是这样的姿势，配上正在被肉棒挤开的屁股穴……太不妙了……',
            true,
          );
        }
      } else {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 从身后用肉棒抽插着 ',
          defender.get_colored_name(),
          ` 的${hook.hook === ero_hooks.hug_standing ? '小穴' : '屁穴'}，`,
          defender.get_colored_name(),
          ' 以双手软软地撑着墙壁……】',
        ]);
        await continue_fucking_common(attacker, defender);
      }
    };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{skip_name:boolean}} extra_flag
   */
  handlers[ero_hooks.suspended_congress] = handlers[
    ero_hooks.suspended_congress_anal_sex
  ] = async (attacker, defender, hook, extra_flag) => {
    if (hook.arg) {
      !extra_flag.skip_name &&
        (await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 将 ',
          defender.get_colored_name(),
          ` 抬起架住，将肉棒插入了${
            hook.hook === ero_hooks.suspended_congress ? '小穴' : '屁穴'
          }……】`,
        ]));
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
        ' 的腰向下流吗…绝对…会的吧❤️',
      ]);
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的肉棒抽插着 ',
        defender.get_colored_name(),
        ` 的浮空${
          hook.hook === ero_hooks.suspended_congress ? '小穴' : '屁穴'
        }……】`,
      ]);
      await continue_fucking_common(attacker, defender);
    }
  };

  handlers[ero_hooks.hug_suspended_congress] = handlers[
    ero_hooks.hug_suspended_congress_anal_sex
  ] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ` 背对着抬起架住，肉棒插入了${
          hook.hook === ero_hooks.hug_suspended_congress ? '小穴' : '屁穴'
        }……】`,
      ]);
      await handlers[ero_hooks.suspended_congress](attacker, defender, hook, {
        skip_name: true,
      });
      await defender.print_and_wait([
        '哈……偏偏现在还看不清 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的表情。',
      ]);
      await defender.print_and_wait([
        '神情在粗重的喘息中逐渐变得恍惚，背对着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的 ',
        defender.get_colored_name(),
        ' 逐渐弓下了腰，将失控的表情藏在头发垂下的阴影中。',
      ]);
      await defender.say_and_wait('哈……❤️');
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的肉棒抽插着背对的 ',
        defender.get_colored_name(),
        ` 浮空的${
          hook.hook === ero_hooks.hug_suspended_congress ? '小穴' : '屁穴'
        }……】`,
      ]);
      await continue_fucking_common(attacker, defender);
    }
  };

  handlers[ero_hooks.ask_cowgirl] = handlers[ero_hooks.ask_cowgirl_anal_sex] =
    async (attacker, defender, hook) => {
      if (hook.arg) {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 请求 ',
          defender.get_colored_name(),
          ` 坐在身上，用${
            hook.hook === ero_hooks.ask_cowgirl ? '小穴' : '屁穴'
          }吞没肉棒……】`,
        ]);
        if (
          await ask_action(
            attacker.id,
            defender.id,
            part_enum.penis,
            hook.hook === ero_hooks.ask_cowgirl
              ? part_enum.virgin
              : part_enum.anal,
          )
        ) {
          await after_refusing_by_defender(attacker, defender, hook);
          return;
        }
        await defender.print_and_wait('吞进去了……');
        await defender.print_and_wait([
          '与平躺着的 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 十指相扣，紧致又富有弹性的亮晶晶双腿向下深蹲，用穴口磨磨蹭蹭地寻找着含入肉棒硕大龟头的契机……',
        ]);
        await defender.print_and_wait([
          '要自己坐上去什么的……',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 坏心眼……',
        ]);
        if (hook.hook === ero_hooks.ask_cowgirl_anal_sex) {
          await defender.say_and_wait('而且，还是用屁股小穴……', true);
        }
        await attacker.say_and_wait('腰也摇起来。');
        await defender.print_and_wait([
          '这次不需要等待 ',
          defender.get_colored_name(),
          ' 慢慢悠悠的动作了，只需要被含入紧致穴腔中的肉棒向着敏感的膣肉轻轻戳探，',
          defender.get_colored_name(),
          ' 无处可逃的腰便只能像是上了发条般无休止地在 ',
          sys_get_colored_callname(defender.id, attacker.id),
          ' 的面前舞动起来……',
        ]);
      } else {
        await era.printAndWait([
          '【',
          attacker.get_colored_name(),
          ' 请求身上的 ',
          defender.get_colored_name(),
          ` 继续用${
            hook.hook === ero_hooks.ask_cowgirl ? '小穴' : '屁穴'
          }套弄肉棒……】`,
        ]);
        await continue_fucking_common(attacker, defender);
      }
    };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{skip_name:boolean}} extra_flag
   */
  handlers[ero_hooks.ask_stimulate_glans_by_virgin] = handlers[
    ero_hooks.ask_stimulate_glans_by_anal
  ] = async (attacker, defender, hook, extra_flag) => {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ` 用${
          hook.hook === ero_hooks.ask_stimulate_glans_by_virgin
            ? '小穴'
            : '屁穴'
        }套弄肉棒……】`,
      ]));
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.penis,
          hook.hook === ero_hooks.ask_stimulate_glans_by_virgin
            ? part_enum.virgin
            : part_enum.anal,
        )
      ) {
        await after_refusing_by_defender(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait('啊……好累……');
      await defender.print_and_wait([
        '正咕啾咕啾把 ',
        defender.get_colored_name(),
        ' 宝贵的小穴捣弄得乱糟糟湿漉漉的肉棒突然停了下来。',
      ]);
      await defender.print_and_wait(
        '虽然嘴上喊着累，但股间的肉棒却诚实地硬邦邦。',
      );
      await attacker.say_and_wait('接下来就拜托了。');
      await defender.print_and_wait(
        '也有想要赌气着索性让坏心眼肉棒拔出去的想法，但只是呲溜一声让肉棒稍稍离开小穴一寸……身体就寂寞的不得了……',
      );
      await defender.print_and_wait([
        '于是，',
        defender.get_colored_name(),
        ' 扭起了腰。',
      ]);
      if (era.get(`cflag:${defender.id}:种族`)) {
        await defender.print_and_wait(
          '白花花的屁股在湿漉漉马尾巴的伴奏下翩翩起舞。',
        );
      }
    } else {
      await continue_fucking_common(attacker, defender);
    }
  };

  handlers[ero_hooks.stimulate_g_spot] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒戳弄着 ',
      defender.get_colored_name(),
      ' 的G点……】',
    ]);
    if (hook.arg) {
      await attacker.print_and_wait('更深一些。');
      await defender.say_and_wait('牡蛎——');
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        ' 几乎要被揉进 ',
        attacker.get_colored_name(),
        ' 的身体当中，不知足的 ',
        attacker.get_colored_name(),
        ' 即使突破了零的距离线也不会有丝毫的犹豫，胯下的肉棒随着挺起的腰硬邦邦地向前递去，让女孩子的唇，小穴，子宫都为它发出着迷的呻吟……',
      ]);
      await defender.say_and_wait('咕哦哦哦齁哦哦哦哦————❤️❤️');
      await attacker.print_and_wait(
        '所谓的G点就是这种东西，不管在这之前是什么样的女孩子，温柔也好开朗也好，被洋溢着雄臭味的硬邦邦肉棒将那处肉褶顶开就会一口气堕落成对性爱着迷的下流雌性。',
      );
      await attacker.print_and_wait(
        '姣好的身子在肉棒的冲撞下蜷成一团，喉咙里只剩下浑浊的淫声，唯独近在咫尺的子宫热得发烫。',
      );
    } else {
      await continue_fucking_common(attacker, defender);
    }
  };

  handlers[ero_hooks.stimulate_womb] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒隔着屁穴戳弄着 ',
      defender.get_colored_name(),
      ' 的子宫……】',
    ]);
    if (hook.arg) {
      await defender.print_and_wait('不用肉棒就能让小穴变舒服的魔法。');
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        ' 自信地笑着张开五指，让宽大的手掌覆在小腹上。',
      ]);
      await defender.print_and_wait('的确是很温暖的触感，但是……');
      await defender.say_and_wait('唔齁唔唔——');
      await defender.print_and_wait('不像样的声音突然漏出来了——');
      await defender.print_and_wait([
        '几乎要陷进去了……',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的手掌……',
      ]);
      await defender.print_and_wait('而像是对比般，子宫却砰砰地兴奋起来……');
      await defender.print_and_wait([
        '像是被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 的魔术手抓住了一样……❤️',
      ]);
      await defender.print_and_wait('……骗人的吧❤️');
    } else {
      await continue_fucking_common(attacker, defender);
    }
  };

  handlers[ero_hooks.ask_fuck] = handlers[ero_hooks.ask_fuck_anal] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ` 插入自己的${hook.hook === ero_hooks.ask_fuck ? '小穴' : '屁穴'}……】`,
      ]);
      if (
        await ask_action(
          attacker.id,
          defender.id,
          hook.hook === ero_hooks.ask_fuck ? part_enum.virgin : part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.print_and_wait('真是丢人……');
      await attacker.print_and_wait('为了乞求快感，居然能做出这种事……');
      await attacker.say_and_wait('哈……❤️');
      await attacker.print_and_wait(
        `投降似的把屁股高高抬起，用颤抖的手指把缩成一团的${
          hook.hook === ero_hooks.ask_fuck ? '阴唇' : '屁穴'
        }向外掰开，露出内里粉嫩的穴肉。`,
      );
      await attacker.say_and_wait('请，插进来……');
      await attacker.say_and_wait('把肉棒……插进来——');
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ` 继续抽插自己的${
          hook.hook === ero_hooks.ask_fuck ? '小穴' : '屁穴'
        }……】`,
      ]);
      await continue_fucking_common(defender, attacker);
    }
  };

  handlers[ero_hooks.cowgirl] = handlers[ero_hooks.cowgirl_anal_sex] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 骑在 ',
        defender.get_colored_name(),
        ` 身上，以${
          hook.hook === ero_hooks.cowgirl ? '小穴' : '屁穴'
        }吞没肉棒……】`,
      ]);
      await attacker.print_and_wait('哈……');
      await attacker.print_and_wait([
        '这么近距离地看着……看着身下 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 精致的俏脸……不就只能意识到自己是个多么糟糕的家伙了嘛❤️',
      ]);
      await attacker.print_and_wait([
        '自暴自弃地摇晃起身体，被背德感折服的 ',
        attacker.get_colored_name(),
        ` 身体泛着淡淡的粉色，正努力地侍奉着被${
          hook.hook === ero_hooks.cowgirl ? '小穴' : '屁穴'
        }含入的肉棒。`,
      ]);
    } else {
      await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 骑在 ',
        defender.get_colored_name(),
        ` 身上，以自己的${
          hook.hook === ero_hooks.cowgirl ? '小穴' : '屁穴'
        }套弄着肉棒……】`,
      ]);
      await continue_fucking_common(defender, attacker);
    }
  };

  handlers[ero_hooks.stimulate_glans_by_virgin] = handlers[
    ero_hooks.stimulate_glans_by_anal
  ] = async (attacker, defender, hook, extra_flag) => {
    !extra_flag.skip_name &&
      (await era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ` 用${
          hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴'
        }套弄着 `,
        defender.get_colored_name(),
        ' 的肉棒……】',
      ]));
    if (hook.arg) {
      await attacker.print_and_wait('说实话……仅仅只是现在这样感觉就要升天了……');
      await attacker.print_and_wait(
        `乱七八糟的……不论是被奸着的${
          hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴'
        }现状也好，还是舒服得一塌糊涂的身体也好……`,
      );
      if (hook.arg === 0xf) {
        await attacker.print_and_wait([
          '而且，把 ',
          attacker.get_colored_name(),
          ' 弄成这样的，甚至还只是 ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 睡得懵懵懂懂的肉棒吗❤️',
        ]);
      } else {
        await attacker.print_and_wait([
          '而更加乱七八糟的…是好像还能做些什么的 ',
          attacker.get_colored_name(),
          ' 自己……',
        ]);
      }
      await attacker.print_and_wait('哈……不止是高声喊牡蛎，而是深吸气的话……');
      await attacker.print_and_wait([
        '“啾”的一声缩紧了，虽然一秒钟都没能坚持到身体就痉挛着瘫软下去，但那一瞬间，',
        attacker.get_colored_name(),
        ` 的${
          hook.hook === ero_hooks.stimulate_glans_by_virgin ? '小穴' : '屁穴'
        }深情地吻上了 `,
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的龟头。',
      ]);
      await attacker.print_and_wait('哈……龟头一跳一跳的，应该是很高兴吧……');
    } else {
      await continue_fucking_common(defender, attacker);
    }
  };

  handlers[ero_hooks.ask_stimulate_g_spot] = handlers[
    ero_hooks.ask_stimulate_womb
  ] = async (attacker, defender, hook) => {
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ` 用肉棒刺激${
        hook.hook === ero_hooks.ask_stimulate_g_spot ? 'G点' : '子宫'
      }……】`,
    ]);
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          hook.hook === ero_hooks.ask_stimulate_g_spot
            ? part_enum.virgin
            : part_enum.anal,
          part_enum.penis,
        )
      ) {
        await after_refusing_by_attacker(attacker, defender, hook);
        return;
      }
      await attacker.say_and_wait('拜托……');
      await attacker.say_and_wait('拜托了……');
      if (era.get(`cflag:${attacker.id}:种族`) && attacker.id) {
        await attacker.print_and_wait(
          `身为${attacker.get_uma_sex_title()}，这也太丢人了不是吗……`,
        );
      } else {
        await attacker.print_and_wait(
          '身为大人，身为训练员，这也太丢人了不是吗……',
        );
      }
      await attacker.print_and_wait('但是完全没法忍耐住——');
      await attacker.print_and_wait('因为就是很想要啊——');
      await attacker.print_and_wait(
        '想要子宫的里面，被厉害地肉棒给，厉害地，粗暴地，用力地……',
      );
      await attacker.print_and_wait('“啾——”的一下顶到最里面❤️');
      await attacker.print_and_wait('让身体“咻”地蜷起来——');
      await attacker.print_and_wait('变成世界上最舒服的小穴——');
      await attacker.print_and_wait(
        '所以拜托了……在那之后，不管想怎么做都可以❤️',
      );
    } else {
      await continue_fucking_common(defender, attacker);
    }
  };
};
