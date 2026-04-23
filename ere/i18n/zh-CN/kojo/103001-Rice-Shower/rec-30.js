/**
 * @file 米浴 - 招募
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   */
  async rec_start(rice, you) {
    era.print([
      '诶？那',
      rice.sex_code === 1 ? '小伙子' : '小姑娘',
      '的耳朵真大呢，远超平均水平了吧？',
    ]);
    era.print(
      `照理说这个年纪的孩子，尤其是${rice.uma_sex_title}大多是活泼好动的。`,
    );
    era.print(
      `但黑发${rice.teen_sex_title}似乎有为了不撞到他人，而小心翼翼地注意着尾巴。`,
    );
    era.print(`而且在中央特雷森，这么弱气的孩子也是少见。`);
    era.print(
      `就如 ${you.name} 预料的一样，${rice.sex}没有和朋友并跑，只身穿着运动服往校外跑去了。`,
    );
    await era.printAndWait('方向是……车站啊。');
  },
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   * @param {string} chara_self_name
   */
  async rec_station(rice, you, chara_self_name) {
    // 车站事件，只有独行才会显示
    era.print([
      '在稍远的车站前购物，返回学园的路上遇到了一位 ',
      rice.uma_sex_title,
      '。',
    ]);
    era.print(['休息结束的', rice.sex, '，忙着赶回去进行下一个训练任务。']);
    you.say('好端正的跑姿');
    era.print([
      '看着',
      rice.sex,
      '离去的背影，',
      you.get_colored_name(),
      ' 不禁感叹。',
    ]);
    await era.printAndWait([
      '虽然身形娇小，但会被',
      rice.sex,
      '四周环绕的霸气吸引。',
    ]);
    era.drawLine();
    era.print('结果频繁遇到红灯，回特雷森学园的时候，天已经完全黑了。');
    rice.say('那个，对、对不起！');
    you.say(`嗯？跟我说的吗？`);
    rice.say('是、是的，那个，对不起！');
    you.say(`诶？`);
    rice.say(
      `就因为今天 ${chara_self_name} 跑在您旁边，您才会回来得这么晚的。`,
    );
    rice.say('真的真的，非常对不起！');
    you.say(`不是你的错。`);
    rice.say(
      `不，就是 ${chara_self_name} 的错，因为 ${chara_self_name} 是会给别人带来不幸的坏孩子……`,
    );
    era.print([rice.teen_sex_title, '的大耳朵无力地低垂着。']);
    rice.say(`对不起，但、但是只要 ${chara_self_name} 不在就没问题了！再见！`);
    era.print([
      '还没来得及叫住 ',
      rice.get_colored_name(),
      '，',
      rice.sex,
      '就跑走了。如果放着不管也太可怜了。',
    ]);

    era.printButton(`去告诉${rice.sex}是${rice.sex}多虑了吧`, 1);
    await era.input();
    era.print(['正准备朝', rice.sex, '搭话的时候']);
    rice.say(
      '已经决定要在下次选拔赛出场了。好好地出场，踏踏实实地跑，这样一来……',
    );
    rice.say(`好好出道，然后活跃一把，就能成为中用的 ${chara_self_name} 了！`);
    era.print([
      '看到',
      rice.sex,
      '干劲十足地准备开始训练，不忍心打搅',
      rice.sex,
      '，最后还是没能打上招呼。',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      '……真期待在下次选拔赛上看到',
      rice.sex,
      '真正的实力。',
    ]);
  },
  /** @param {CharaTalk} rice */
  async rec_race(rice) {
    era.print(['「今天似乎有 ', rice.get_colored_name(), ' 的选拔赛……」']);
    era.print(
      `？？？「${rice.name}！${rice.name} 同学 ${rice.name} 同学 ${rice.name} 同学！你在哪里呀 ${rice.name} 同学！」`,
    );
    era.print([
      '似乎到了 ',
      rice.get_colored_name(),
      ' 该出场的时候，然而',
      rice.sex,
      '并没有出现。',
    ]);
    era.print([
      '呼唤 ',
      rice.get_colored_name(),
      ' 的',
      rice.uma_sex_title,
      '很快被叫走了',
    ]);
    era.print(
      `？？？「${rice.name}，终于连选拔赛也开始拒绝出场了吗，明明是个这么有天赋的孩子。」`,
    );
    era.print('？？？「说到底，比起天赋，不愿意出场就已经是一大问题了。」');
    await era.printAndWait([
      '结果，',
      rice.get_colored_name(),
      ' 到最后也没有出现在那天的选拔会场上。',
    ]);
  },
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   * @param {string} chara_self_name
   */
  async rec_final(rice, you, chara_self_name) {
    era.print(`下一次见到 ${rice.name} 已经是选拔赛后的事了。`);
    era.print('树桩旁');
    rice.say(
      `笨蛋，笨蛋笨蛋，${chara_self_name} 大笨蛋！明明……明明都已经下定决心要努力了……`,
    );
    rice.say(`呜呜……为什么……为什么 ${chara_self_name} 这么没用？`);
    era.print(
      `实在不忍心看 ${rice.name} 在一旁独自哀泣，回过神来已经走到了${rice.sex}身边。`,
    );
    rice.say('您是……之前那位？');
    rice.say('对不起！那个，请不要再过来了……');
    rice.say(
      `因为只要待在 ${chara_self_name} 身边就会变得不幸，${chara_self_name} 是个没用的孩子，又会给您添麻烦的。`,
    );
    rice.say(`${chara_self_name} 也想变得中用，想努力在选拔赛出场，结果……`);
    era.println();
    era.print(`看着眼前哭泣的 ${rice.name}，前几天的那个身影又浮现在眼前——`);
    era.print(['虽然不清楚发生了什么，但', rice.sex, '确实想要改变。']);
    era.print([
      you.get_colored_name(),
      ' 也知道',
      rice.sex,
      '为了迈出这一步，竭尽全力进行了训练。',
    ]);
    rice.say(`呜呜……果然，果然像 ${chara_self_name} 这种……`);

    era.printButton(`不能就这样放着${rice.sex}不管！`, 1);
    await era.input();
    era.print(`「${rice.name}，来我这里吧！」`);
    era.print(`${rice.name}「唰」地抬起了耳朵。`);
    rice.say('诶？');
    rice.say(`您是说……您来当 ${chara_self_name} 的训练员吗？`);
    rice.say(`哇啊啊……${chara_self_name} 我，非常非常高兴，但是……！`);
    rice.say(
      `但 ${chara_self_name}……真的很没用的。不仅会添很多麻烦，连比赛都出不了场。`,
    );
    rice.say('即便如此，您也愿意做我的训练员吗？');

    era.printButton('「即便如此我也想支持你」', 1);
    await era.input();
    rice.say(['好厉害……像 ', you.elder_sibling_sex_title, ' 一样……']);
    you.say([you.elder_sibling_sex_title, '？']);
    rice.say('哇！对、对不起，请当做没听见！');
    rice.say('那个……就请、请多指教，训练员！');
    rice.say(`${chara_self_name}，会加油的！`);
    await era.printAndWait([
      '尽管表情还很僵硬，',
      rice.sex,
      '也努力地挤出了一个笑容。',
    ]);
  },
};
