const era = require('#/era-electron');

const { part_enum } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.pet_ear] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 抚摸 ',
      defender.get_colored_name(),
      ' 的耳朵】',
    ]);

  handlers[ero_hooks.pull_ear] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉扯 ',
      defender.get_colored_name(),
      ' 的耳朵】',
    ]);

  handlers[ero_hooks.pet_breast] = (attacker, defender) => {
    const touched = era.get(`tcvar:${defender.id}:阴道接触部位`);
    if (touched.part === part_enum.penis && touched.owner === attacker.id) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 揉捏 ',
        defender.get_colored_name(),
        ' 的胸部】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄 ',
      defender.get_colored_name(),
      ' 的胸部】',
    ]);
  };

  handlers[ero_hooks.pet_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄 ',
      defender.get_colored_name(),
      ' 的乳头】',
    ]);

  handlers[ero_hooks.pet_clitoris] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 爱抚 ',
      defender.get_colored_name(),
      ' 风流的小豆豆】',
    ]);

  handlers[ero_hooks.finger_fuck] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将手指插入 ',
      defender.get_colored_name(),
      ' 的蜜穴】',
    ]);

  handlers[ero_hooks.prepare_virgin] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 张开 ',
      defender.get_colored_name(),
      ' 的阴唇】',
    ]);

  handlers[ero_hooks.stimulate_g_spot_by_finger] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用手指刺激 ',
      defender.get_colored_name(),
      ' 的G点】',
    ]);

  handlers[ero_hooks.pet_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 轻抚 ',
      defender.get_colored_name(),
      ' 的菊门】',
    ]);

  handlers[ero_hooks.prepare_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 张开 ',
      defender.get_colored_name(),
      ' 的菊门】',
    ]);

  handlers[ero_hooks.pet_leg] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 爱抚 ',
      defender.get_colored_name(),
      ' 的大腿】',
    ]);

  handlers[ero_hooks.pet_tail] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 爱抚 ',
      defender.get_colored_name(),
      ' 的尾巴】',
    ]);

  handlers[ero_hooks.pull_tail] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉扯 ',
      defender.get_colored_name(),
      ' 的尾巴】',
    ]);

  handlers[ero_hooks.cunnilingus] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 舔弄 ',
      defender.get_colored_name(),
      ' 风流的小豆豆】',
    ]);

  handlers[ero_hooks.ask_cunnilingus] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 舔弄小豆豆】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 继续舔弄小豆豆】',
    ]);
  };

  handlers[ero_hooks.force_cunnilingus] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将小豆豆压在 ',
        defender.get_colored_name(),
        ' 的脸上】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用小豆豆摩擦 ',
      defender.get_colored_name(),
      ' 的唇舌】',
    ]);
  };

  handlers[ero_hooks.suck_virgin] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将舌头伸进 ',
        defender.get_colored_name(),
        ' 的小穴】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用舌头挑弄着 ',
      defender.get_colored_name(),
      ' 的小穴】',
    ]);
  };

  handlers[ero_hooks.ask_suck_virgin] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 舔吸小穴】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 继续舔吸小穴】',
    ]);
  };

  handlers[ero_hooks.force_suck_virgin] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将小穴压在 ',
        defender.get_colored_name(),
        ' 的嘴唇上】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用小穴摩擦着 ',
      defender.get_colored_name(),
      ' 的唇舌】',
    ]);
  };

  handlers[ero_hooks.ask_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 含住肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 舔舐肉棒】',
    ]);
  };

  handlers[ero_hooks.ask_deep_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 将肉棒深深含入】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 在喉咙深处侍奉肉棒】',
    ]);
  };

  handlers[ero_hooks.force_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒插入 ',
        defender.get_colored_name(),
        ' 的嘴唇】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒搅弄 ',
      defender.get_colored_name(),
      ' 的唇舌】',
    ]);
  };

  handlers[ero_hooks.force_deep_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒插入 ',
        defender.get_colored_name(),
        ' 的喉咙深处】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 喉咙深处搅弄着】',
    ]);
  };

  handlers[ero_hooks.blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 含住 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 舔舐着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  handlers[ero_hooks.deep_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 深深含住了 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在喉咙深处服侍着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  handlers[ero_hooks.ask_hand_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.geted_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 将肉棒握在手心】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 继续撸动肉棒】',
    ]);
  };

  handlers[ero_hooks.ask_hand_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 一边抚摸肉棒一边含住龟头】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 一边撸动肉棒一边吮吸龟头】',
    ]);
  };

  handlers[ero_hooks.force_hand_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒伸到 ',
        defender.get_colored_name(),
        ' 手中】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒蹭着 ',
      defender.get_colored_name(),
      ' 的双手】',
    ]);
  };

  handlers[ero_hooks.force_hand_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒挤开 ',
        defender.get_colored_name(),
        ' 的双手插入口中】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 的肉棒一边拍打着 ',
      defender.get_colored_name(),
      ' 的手一边搅弄着 ',
      defender.get_colored_name(),
      ' 的唇舌】',
    ]);
  };

  handlers[ero_hooks.hand_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 的肉棒握在手中】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 撸动着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  handlers[ero_hooks.hand_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边抚摸一边亲吻着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 一边玩弄一边舔舐着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  handlers[ero_hooks.ask_tit_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 用双乳夹住肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用双乳侍奉肉棒】',
    ]);
  };

  handlers[ero_hooks.ask_tit_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 一边用乳房摩擦肉棒，一边用嘴唇亲吻龟头】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 一边用乳房摩擦肉棒，一边吮吸龟头】',
    ]);
  };

  handlers[ero_hooks.fuck_tit] = (attacker, defender, hook) => {
    if (hook.arg && defender.sex_code !== 1) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 的乳房聚拢，夹住了肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒摩擦着 ',
      defender.get_colored_name(),
      ' 的胸部】',
    ]);
  };

  handlers[ero_hooks.fuck_tit_and_mouth] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒穿过 ',
        defender.get_colored_name(),
        ' 的双乳插入嘴唇中】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒摩擦着 ',
      defender.get_colored_name(),
      ' 的双乳，并搅弄着 ',
      defender.get_colored_name(),
      ' 的唇舌】',
    ]);
  };

  handlers[ero_hooks.tit_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 夹起双乳将 ',
        defender.get_colored_name(),
        ' 的肉棒捧住】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 上下挪动双乳摩擦着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  handlers[ero_hooks.tit_and_blow_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边用双乳摩擦 ',
        defender.get_colored_name(),
        ' 的肉棒，一边含住了龟头】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 一边用双乳摩擦 ',
      defender.get_colored_name(),
      ' 的肉棒，一边吮吸着龟头】',
    ]);
  };

  handlers[ero_hooks.suck_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 舔舐着 ',
      defender.get_colored_name(),
      ' 的屁穴】',
    ]);

  handlers[ero_hooks.suck_nipple] = (attacker, defender, hook) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      hook.arg ? ' 含住了' : ' 吮吸着 ',
      defender.get_colored_name(),
      ' 的乳头】',
    ]);

  handlers[ero_hooks.bite_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 轻轻咬着 ',
      defender.get_colored_name(),
      ' 的乳头】',
    ]);

  handlers[ero_hooks.ask_milk_and_hand_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 一边让 ',
      attacker.get_colored_name(),
      ' 吮吸乳头，一边抚弄肉棒】',
    ]);

  handlers[ero_hooks.milk] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将乳头伸入 ',
        defender.get_colored_name(),
        ' 的口中】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 让 ',
      defender.get_colored_name(),
      ' 吮吸自己的乳头】',
    ]);
  };

  handlers[ero_hooks.ask_bite_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 咬自己的乳头】',
    ]);

  handlers[ero_hooks.milk_and_hand_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 一边让 ',
      defender.get_colored_name(),
      ' 吮吸乳头，一边抚弄 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);

  handlers[ero_hooks.ask_non_penetrative] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 用大腿根部夹住 ',
        attacker.get_colored_name(),
        ' 的肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用大腿根部摩擦 ',
      attacker.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  handlers[ero_hooks.non_penetrative] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用大腿根部夹住了 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用大腿根部摩擦着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  handlers[ero_hooks.sixty_nine] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ' 摆成了六九式】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ' 保持着六九式侍奉着彼此】',
    ]);
  };

  handlers[ero_hooks.ask_hair_fuck] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 要求 ',
        defender.get_colored_name(),
        ' 用头发缠住肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 要求 ',
      defender.get_colored_name(),
      ' 用手掌和头发揉搓肉棒】',
    ]);
  };

  handlers[ero_hooks.force_hair_fuck] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用 ',
        defender.get_colored_name(),
        ' 的头发缠住肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒摩擦 ',
      defender.get_colored_name(),
      ' 的头发】',
    ]);
  };

  handlers[ero_hooks.hair_fuck] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用头发缠住 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用手掌和头发揉搓着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  handlers[ero_hooks.ask_armpit_intercourse] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用腋下摩擦 ',
      attacker.get_colored_name(),
      ' 的肉棒】',
    ]);

  handlers[ero_hooks.force_armpit_intercourse] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 拽起 ',
        defender.get_colored_name(),
        ' 的手臂用肉棒摩擦着】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 继续用肉棒摩擦着 ',
      defender.get_colored_name(),
      ' 的腋下】',
    ]);
  };

  handlers[ero_hooks.armpit_intercourse] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用腋下摩擦着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);

  handlers[ero_hooks.ask_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用双足踩踏肉棒】',
    ]);

  handlers[ero_hooks.force_foot_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒戳弄着 ',
      defender.get_colored_name(),
      ' 的双足】',
    ]);

  handlers[ero_hooks.foot_job] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的双足踏上了 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用双足踩踏着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  };

  handlers[ero_hooks.ask_tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用尾巴侍奉肉棒】',
    ]);

  handlers[ero_hooks.force_tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉过 ',
      defender.get_colored_name(),
      ' 的尾巴缠弄着肉棒】',
    ]);

  handlers[ero_hooks.tail_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用尾巴缠弄着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);

  handlers[ero_hooks.tribbing] = (attacker, defender, hook) => {
    if (hook.arg) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将下体抵近 ',
        defender.get_colored_name(),
        ' 的下体，用阴核互相摩擦着】',
      ]);
    }
    return era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 继续与 ',
      defender.get_colored_name(),
      ' 互相摩擦着阴核】',
    ]);
  };

  handlers[ero_hooks.self_pet_nipple] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前玩弄着自己的胸部】',
    ]);

  handlers[ero_hooks.self_hand_job] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前套弄着自己的肉棒】',
    ]);

  handlers[ero_hooks.self_pet_clitoris] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前玩弄着自己的阴核】',
    ]);

  handlers[ero_hooks.self_finger_fuck] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前戳弄着自己的小穴】',
    ]);

  handlers[ero_hooks.self_pet_anal] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前戳弄着自己的屁穴】',
    ]);
};
