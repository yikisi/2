/**
 * @file 调教地文 - 爱抚系3
 *
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  armpit_intercourse,
  foot_job,
  non_penetrative,
  tail_job,
} = require('#/event/ero/common-lines/ero-snippets');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common-lines/snippets');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*)>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.non_penetrative] = non_penetrative;

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
      if (!attacker.id && era.get(`cflag:${defender.id}:种族`)) {
        await defender.say_and_wait(
          `啊……啊……原来是这么看待的啊，自家担当的双腿。`,
          true,
        );
      }
    }
    await non_penetrative(defender, attacker, hook);
  };

  handlers[ero_hooks.sixty_nine] = async (attacker, defender, hook) => {
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
  };

  handlers[ero_hooks.armpit_intercourse] = armpit_intercourse;

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
    await armpit_intercourse(defender, attacker, hook);
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
    await armpit_intercourse(defender, attacker, hook);
  };

  handlers[ero_hooks.foot_job] = foot_job;

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
      await attacker.print_and_wait('原来……暴露的这么明显吗……');
    }
    await foot_job(defender, attacker, hook);
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
    await foot_job(defender, attacker, hook);
  };

  handlers[ero_hooks.tail_job] = tail_job;

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
    await tail_job(defender, attacker, hook);
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
    await tail_job(defender, attacker, hook);
  };
};
