const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalSm = require('#/event/ero/common-lines/normal/sm');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { get_random_value } = require('#/utils/value-utils');

module.exports = class extends EroNormalSm {
  async ask_insult(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.ask_insult(attacker, defender, hook);
    }
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
      await defender.say_and_wait('想被辱骂？');
      await defender.print_and_wait([
        '从圣洁的',
        attacker.get_uma_sex_title(),
        '巫女那里得到了这样奇怪的请求。',
      ]);
      await attacker.say_and_wait([
        '我，因为那个……被 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 粗暴对待的感觉，很不错呢……',
      ]);
      await defender.print_and_wait([
        '看来自家担当果然是抖M呢，于是淫荡巫女，肉便器，飞机杯占卜师之类不痛不痒的侮辱话语骂向了面前的栗毛',
        attacker.get_uma_sex_title(),
        '。',
      ]);
      await defender.print_and_wait([
        '看',
        attacker.get_colored_actual_name(),
        '似乎颇为受用的样子，之后要不要试试更恶劣一点的措辞呢？',
      ]);
    } else {
      await attacker.print_and_wait([
        '耳边响着各种愈发恶劣的辱骂话语，但更令自己感到有些后怕的，反而是愈发敏感，愈发能从这种行为中感到快乐的自己。',
      ]);
      await attacker.say_and_wait(['这种感觉，不想，不想停止……'], true);
      await attacker.say_and_wait(
        [
          '哈，自己，自己的确是个无可救药的，抖M',
          attacker.get_uma_sex_title(),
          '……',
        ],
        true,
      );
    }
  }

  async ask_hit_anal(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.ask_hit_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
      await defender.say_and_wait([
        '如果 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 这么想被欺负的话……',
      ]);
      await defender.print_and_wait([
        '手掌在 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 圆润的臀部上轻轻磨蹭了两下，让',
        attacker.sex,
        '的身躯在怀里微微颤抖，说不上是因为害怕还是由于激动。',
      ]);
      await defender.print_and_wait(['啪！']);
      await defender.print_and_wait([
        '逐渐变得滚烫的臀峰在 ',
        defender.get_colored_name(),
        ' 还未从酥麻感中恢复的手掌上轻轻蹭着，看来很喜欢呢。',
      ]);
    } else {
      await attacker.say_and_wait(['好疼……但是，好喜欢……'], true);
      await attacker.say_and_wait(['啪啪地打着自己的屁股。'], true);
      await attacker.say_and_wait(['偶尔又轻轻揉搓着几个来回。'], true);
      await attacker.say_and_wait(
        ['对逐渐分不清了疼痛还是快乐的自己来说，都是最棒的奖励呢……'],
        true,
      );
    }
  }
};
