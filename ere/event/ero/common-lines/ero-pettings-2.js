/**
 * @file 调教地文 - 爱抚系2
 *
 * @author O口口口口口
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  ask_milk_and_hand_job,
  bite_nipple,
  hand_and_blow_job,
  hand_job,
  suck_nipple,
  tit_and_blow_job,
  tit_job,
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
    } else if (era.get(`cflag:${attacker.id}:种族`)) {
      await attacker.print_and_wait([
        '已经积累起了些能在喉咙咕噜咕噜侍奉着肉棒的同时摇摆尾巴的余裕，',
        attacker.get_colored_name(),
        ' 在这方面出乎',
        sys_get_colored_callname(attacker.id, defender.id),
        '预料的有天赋。',
      ]);
      await attacker.print_and_wait([
        '用余光看着 ',
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

  handlers[ero_hooks.hand_job] = hand_job;

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
    await hand_job(defender, attacker, hook);
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
    await hand_job(defender, attacker, hook);
  };

  handlers[ero_hooks.hand_and_blow_job] = hand_and_blow_job;

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
    await hand_and_blow_job(defender, attacker, hook);
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
    await hand_and_blow_job(defender, attacker, hook);
  };

  handlers[ero_hooks.tit_job] = tit_job;

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
    await tit_job(defender, attacker, hook);
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
    await tit_job(defender, attacker, hook);
  };

  handlers[ero_hooks.tit_and_blow_job] = tit_and_blow_job;

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
    await tit_and_blow_job(defender, attacker, hook);
  };

  handlers[ero_hooks.fuck_tit_and_mouth] = async (attacker, defender, hook) => {
    if (hook.arg) {
      await defender.say_and_wait('什么……！？');
      await defender.print_and_wait(
        '似乎完全没有倾听这边意愿的打算，而只是粗暴地实现自己的所想。',
      );
    }
    await tit_and_blow_job(defender, attacker, hook);
  };

  handlers[ero_hooks.suck_nipple] = async (attacker, defender) => {
    if (defender.sex_code === 1) {
      return;
    }
    await suck_nipple(attacker, defender);
  };

  handlers[ero_hooks.bite_nipple] = async (attacker, defender) => {
    if (defender.sex_code === 1) {
      return;
    }
    await bite_nipple(attacker, defender);
  };

  handlers[ero_hooks.ask_milk_and_hand_job] = async (
    attacker,
    defender,
    hook,
  ) => {
    if (
      hook.arg &&
      (await ask_action(
        attacker.id,
        defender.id,
        part_enum.breast,
        part_enum.mouth,
      ))
    ) {
      await after_refusing_by_attacker(attacker, defender, hook);
      return;
    }
    if (defender.sex_code === 1) {
      return;
    }
    await ask_milk_and_hand_job(attacker, defender, hook);
  };

  handlers[ero_hooks.milk] = async (attacker, defender) => {
    if (attacker.sex_code === 1) {
      return;
    }
    await suck_nipple(defender, attacker);
  };

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
    if (attacker.sex_code === 1) {
      return;
    }
    await bite_nipple(defender, attacker);
  };

  handlers[ero_hooks.milk_and_hand_job] = async (attacker, defender, hook) => {
    if (attacker.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await defender.print_and_wait('很好懂的吧');
      await defender.print_and_wait(
        '在被邀请着躺进膝枕哺乳后，高高立起的股间。',
      );
      await defender.print_and_wait('很好懂的对吧……');
    }
    await ask_milk_and_hand_job(defender, attacker, hook);
  };
};
