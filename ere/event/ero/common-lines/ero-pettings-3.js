/**
 * @file 调教地文 - 爱抚系3
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
  handlers[ero_hooks.non_penetrative] = async (attacker, defender, hook) => {
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
  };

  handlers[ero_hooks.ask_non_penetrative] = async (
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
      await defender.say_and_wait(
        `啊……啊……原来是这么看待的啊，自家担当的双腿。`,
        true,
      );
    }
    await handlers[ero_hooks.non_penetrative](defender, attacker, hook);
  };

  handlers[ero_hooks.sixty_nine] = async (attacker, defender, hook) => {
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
  };

  handlers[ero_hooks.armpit_intercourse] = async (attacker, defender, hook) => {
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
  };

  handlers[ero_hooks.ask_armpit_intercourse] = async (
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
    await handlers[ero_hooks.armpit_intercourse](defender, attacker, hook);
  };

  handlers[ero_hooks.force_armpit_intercourse] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      await attacker.print_and_wait([
        '被拽着仰起手臂的 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '，此刻在想些什么呢…',
      ]);
      await attacker.print_and_wait('大概不会是什么好话吧……');
    }
    await handlers[ero_hooks.armpit_intercourse](defender, attacker, hook);
  };

  handlers[ero_hooks.foot_job] = async (attacker, defender, hook) => {
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
  };

  handlers[ero_hooks.ask_foot_job] = async (attacker, defender, hook) => {
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
      await attacker.print_and_wait('原来…暴露的这么明显吗……');
    }
    await handlers[ero_hooks.foot_job](defender, attacker, hook);
  };

  handlers[ero_hooks.force_foot_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await attacker.print_and_wait(
        '因为对这种要求感到不满，所以扭过脸去不看这边也很正常吧。',
      );
      await attacker.print_and_wait(
        '不过在这边的业界，踩的时候把头扭向另一边可是奖励哦。',
      );
      await attacker.print_and_wait('啊……看过来了……');
    }
    await handlers[ero_hooks.foot_job](defender, attacker, hook);
  };

  handlers[ero_hooks.tail_job] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await defender.print_and_wait('灵活……');
      await defender.print_and_wait([
        '以提出要求的 ',
        defender.get_colored_name(),
        ' 都意料之外的灵敏程度，有着弯曲毛发的马尾巴缠上了肉棒。',
      ]);
      await defender.print_and_wait('以这个角度看见的屁股也别有风味。');
      await defender.print_and_wait([
        '隐约能嗅见的，长长的马尾巴不可避免沾染上的女孩子的味道，让 ',
        defender.get_colored_name(),
        ' 的肉棒前所未有的兴奋着。',
      ]);
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
      await defender.print_and_wait(
        '比如，尾巴下的小穴是否也需要更多……更激烈的……',
      );
    }
  };

  handlers[ero_hooks.ask_tail_job] = async (attacker, defender, hook) => {
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
    await handlers[ero_hooks.tail_job](defender, attacker, hook);
  };

  handlers[ero_hooks.force_tail_job] = async (attacker, defender, hook) => {
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
    await handlers[ero_hooks.tail_job](defender, attacker, hook);
  };
};
