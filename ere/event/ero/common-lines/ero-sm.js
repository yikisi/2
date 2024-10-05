/**
 * @file 调教地文 - 性虐系
 *
 * @author 黑衣剑士-星爆气流斩准备就绪
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  /** @author 无名黑奴 */
  handlers[ero_hooks.insult] = async (attacker, defender) => {
    const talk_arr = [];
    if (era.get('tflag:强奸') === attacker.id) {
      talk_arr.push('人渣！强奸犯！去死吧！');
    }
    if (era.get(`talent:${attacker.id}:小恶魔`)) {
      talk_arr.push('杂鱼～杂鱼～');
    }
    if (era.get(`talent:${attacker.id}:抖S`)) {
      talk_arr.push(
        `蠢货！废物${defender.get_sex_slave_title()}！欠操的变态！`,
      );
    }
    if (talk_arr.length === 0) {
      talk_arr.push(`就这么想被人辱骂吗，${defender.get_sex_slave_title()}？`);
    }
    await attacker.say_and_wait(get_random_entry(talk_arr));
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_insult] = async (attacker, defender, hook) => {
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
        return;
      }
    }
    await handlers[ero_hooks.insult](defender, attacker, hook);
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_hit_anal] = async (attacker, defender, hook) => {
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
    }
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_hit_breast] = async (attacker, defender, hook) => {
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
    }
  };

  /** @author 黑衣剑士-星爆气流斩准备就绪 */
  handlers[ero_hooks.hit_face_by_penis] = async (attacker, defender) => {
    if (attacker.id) {
      await defender.print_and_wait([
        '被 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 住了头发，意识到了自己的力量完全不能与之抗衡，看着 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 胯下的肉棒凶恶的抬头，',
        defender.get_colored_name(),
        ' 的内心有了不好的预感。',
      ]);
      await attacker.say_and_wait(
        `${sys_get_callname(
          attacker.id,
          defender.id,
        )}～要好好的记住我的气味哦～`,
      );
      await defender.print_and_wait([
        '无法反抗，脸颊上感觉到了被拍打的触感，',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 肉棒那凶恶的气味让 ',
        defender.get_colored_name(),
        ' 不自觉的想要屈服。',
      ]);
      await defender.print_and_wait([
        '脸上留下了 ',
        sys_get_colored_callname(defender.id, attacker.id),
        ' 肉棒的印记，',
        defender.get_colored_name(),
        ' 仰起脸，等待着下一记耳光的到来',
      ]);
    } else {
      await attacker.print_and_wait([
        '抓着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的头发，',
        attacker.get_colored_name(),
        ` 强硬地将自己的肉棒凑到了${defender.sex}的脸上，看着${defender.sex}的脸被 `,
        attacker.get_colored_name(),
        ' 用肉棒戳弄的样子露出笑容。',
      ]);
      await defender.say_and_wait('唔唔唔！！！');
      await attacker.print_and_wait([
        '充满了雄性气味的肉棒吸引着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的鼻子不停的抽动，',
        attacker.get_colored_name(),
        ' 抓着 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的头发开始甩动起了自己的腰，肉棒与 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 光滑的脸颊碰撞发出了色情的声音，让 ',
        sys_get_colored_callname(attacker.id, defender.id),
        ' 的眼神也变得迷离了起来。',
      ]);
    }
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_hit_face] = async (attacker, defender, hook) => {
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
    }
  };

  /** @author 无名黑奴 */
  handlers[ero_hooks.ask_virgin_foot_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.clitoris,
          part_enum.foot,
        )
      ) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
    }
  };
};
