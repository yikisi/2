/**
 * @file 调教指令描述 - 通用 - 系统提示
 * <br>指令含义看 #/i18n/xx-XX/sex/actions
 * @author 黑奴队长
 */
const { get, printAndWait } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  // 沟通系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async go_on(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 放弃了抵抗，任 ',
      defender.get_colored_name(),
      ' 施为】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async kiss(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ',
      is_first ? '' : '继续',
      '亲吻 ',
      defender.get_colored_name(),
      ' 的嘴唇】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async french_kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 对 ',
      defender.get_colored_name(),
      ' 法式湿吻】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async relax(attacker) {
    await printAndWait(['【', attacker.get_colored_name(), ' 试着调整呼吸】']);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async sleep(attacker) {
    const buffer = [
      () => printAndWait(['【', attacker.get_colored_name(), ' 毫无反应】']),
    ];
    if (get(`status:${attacker.id}:沉睡`) > 0) {
      buffer.push(() =>
        printAndWait(['【', attacker.get_colored_name(), ' 静静地沉睡着】']),
      );
    }
    if (get(`status:${attacker.id}:马跳S`) > 0) {
      buffer.push(
        () =>
          printAndWait([
            '【',
            attacker.get_colored_name(),
            ' 略微沉重地呼吸着】',
          ]),
        () =>
          printAndWait([
            '【',
            attacker.get_colored_name(),
            ' 在睡梦中呼出暧昧的吐息】',
          ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async lure(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 挑逗着 ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async talk(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ' 闲话家常】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async passive_switch(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 暂时不想再继续了】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async active_switch(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将主导权交给 ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async resist(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 尝试反抗以取得主导权】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async gargle(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ' 一起漱口】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async wipe_body(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 擦拭自己和 ',
      defender.get_colored_name(),
      ' 的身体】',
    ]);
  },

  // 爱抚系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 抚摸 ',
      defender.get_colored_name(),
      ' 的耳朵】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉扯 ',
      defender.get_colored_name(),
      ' 的耳朵】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_breast(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄 ',
      defender.get_colored_name(),
      ' 的胸部】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄 ',
      defender.get_colored_name(),
      ' 的乳头】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_clitoris(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 爱抚 ',
      defender.get_colored_name(),
      ' 风流的小豆豆】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async finger_fuck(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将手指插入 ',
      defender.get_colored_name(),
      ' 的蜜穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async prepare_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 张开 ',
      defender.get_colored_name(),
      ' 的阴唇】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_g_spot_by_finger(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用手指刺激 ',
      defender.get_colored_name(),
      ' 的G点】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 轻抚 ',
      defender.get_colored_name(),
      ' 的菊门】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async prepare_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 张开 ',
      defender.get_colored_name(),
      ' 的菊门】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_leg(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 爱抚 ',
      defender.get_colored_name(),
      ' 的大腿】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 爱抚 ',
      defender.get_colored_name(),
      ' 的尾巴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pull_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉扯 ',
      defender.get_colored_name(),
      ' 的尾巴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async cunnilingus(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 舔弄 ',
      defender.get_colored_name(),
      ' 风流的小豆豆】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cunnilingus(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      is_first ? ' 舔弄小豆豆】' : ' 继续舔弄小豆豆】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将小豆豆压在 ',
        defender.get_colored_name(),
        ' 的脸上】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用小豆豆摩擦 ',
        defender.get_colored_name(),
        ' 的唇舌】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将舌头伸进 ',
        defender.get_colored_name(),
        ' 的小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用舌头挑弄着 ',
        defender.get_colored_name(),
        ' 的小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 舔吸小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 继续舔吸小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将小穴压在 ',
        defender.get_colored_name(),
        ' 的嘴唇上】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用小穴摩擦着 ',
        defender.get_colored_name(),
        ' 的唇舌】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 含住肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 舔舐肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 将肉棒深深含入】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 在喉咙深处侍奉肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒插入 ',
        defender.get_colored_name(),
        ' 的嘴唇】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用肉棒搅弄 ',
        defender.get_colored_name(),
        ' 的唇舌】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒插入 ',
        defender.get_colored_name(),
        ' 的喉咙深处】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 在 ',
        defender.get_colored_name(),
        ' 喉咙深处搅弄着】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 含住 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 舔舐着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 深深含住了 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 在喉咙深处服侍着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 将肉棒握在手心】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 继续撸动肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 一边抚摸肉棒一边含住龟头】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 一边撸动肉棒一边吮吸龟头】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒伸到 ',
        defender.get_colored_name(),
        ' 手中】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用肉棒蹭着 ',
        defender.get_colored_name(),
        ' 的双手】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒挤开 ',
        defender.get_colored_name(),
        ' 的双手插入口中】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的肉棒一边拍打着 ',
        defender.get_colored_name(),
        ' 的手一边搅弄着 ',
        defender.get_colored_name(),
        ' 的唇舌】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 的肉棒握在手中】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 撸动着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边抚摸一边亲吻着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边玩弄一边舔舐着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_tit_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 用双乳夹住肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 用双乳侍奉肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_tit_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 一边用乳房摩擦肉棒，一边用嘴唇亲吻龟头】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 一边用乳房摩擦肉棒，一边吮吸龟头】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fuck_tit(attacker, defender, is_first) {
    if (is_first && defender.sex_code !== 1)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 的乳房聚拢，夹住了肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用肉棒摩擦着 ',
        defender.get_colored_name(),
        ' 的胸部】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fuck_tit_and_mouth(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将肉棒穿过 ',
        defender.get_colored_name(),
        ' 的双乳插入嘴唇中】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用肉棒摩擦着 ',
        defender.get_colored_name(),
        ' 的双乳，并搅弄着 ',
        defender.get_colored_name(),
        ' 的唇舌】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async tit_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 夹起双乳将 ',
        defender.get_colored_name(),
        ' 的肉棒捧住】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 上下挪动双乳摩擦着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async tit_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边用双乳摩擦 ',
        defender.get_colored_name(),
        ' 的肉棒，一边含住了龟头】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 一边用双乳摩擦 ',
        defender.get_colored_name(),
        ' 的肉棒，一边吮吸着龟头】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async suck_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 舔舐着 ',
      defender.get_colored_name(),
      ' 的屁穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suck_nipple(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      is_first ? ' 含住了' : ' 吮吸着 ',
      defender.get_colored_name(),
      ' 的乳头】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async bite_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 轻轻咬着 ',
      defender.get_colored_name(),
      ' 的乳头】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_milk_and_hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 一边让 ',
      attacker.get_colored_name(),
      ' 吮吸乳头，一边抚弄肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async milk(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将乳头伸入 ',
        defender.get_colored_name(),
        ' 的口中】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 让 ',
        defender.get_colored_name(),
        ' 吮吸自己的乳头】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_bite_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 咬自己的乳头】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async milk_and_hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 一边让 ',
      defender.get_colored_name(),
      ' 吮吸乳头，一边抚弄 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_non_penetrative(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 用大腿根部夹住 ',
        attacker.get_colored_name(),
        ' 的肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 用大腿根部摩擦 ',
        attacker.get_colored_name(),
        ' 的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async non_penetrative(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用大腿根部夹住了 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用大腿根部摩擦着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sixty_nine(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ' 摆成了六九式】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ' 保持着六九式侍奉着彼此】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 要求 ',
        defender.get_colored_name(),
        ' 用头发缠住肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 要求 ',
        defender.get_colored_name(),
        ' 用手掌和头发揉搓肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用 ',
        defender.get_colored_name(),
        ' 的头发缠住肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用肉棒摩擦 ',
        defender.get_colored_name(),
        ' 的头发】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用头发缠住 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用手掌和头发揉搓着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用腋下摩擦 ',
      attacker.get_colored_name(),
      ' 的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async force_armpit_intercourse(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 拽起 ',
        defender.get_colored_name(),
        ' 的手臂用肉棒摩擦着】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 继续用肉棒摩擦着 ',
        defender.get_colored_name(),
        ' 的腋下】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用腋下摩擦着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用双足踩踏肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒戳弄着 ',
      defender.get_colored_name(),
      ' 的双足】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async foot_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的双足踏上了 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用双足踩踏着 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用尾巴侍奉肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拉过 ',
      defender.get_colored_name(),
      ' 的尾巴缠弄着肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用尾巴缠弄着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async tribbing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将下体抵近 ',
        defender.get_colored_name(),
        ' 的下体，用阴核互相摩擦着】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 继续与 ',
        defender.get_colored_name(),
        ' 互相摩擦着阴核】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_pet_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前玩弄着自己的胸部】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前套弄着自己的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_pet_clitoris(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前玩弄着自己的阴核】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_finger_fuck(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前戳弄着自己的小穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async self_pet_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 在 ',
      defender.get_colored_name(),
      ' 面前戳弄着自己的屁穴】',
    ]);
  },

  // 性交系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 以正常位插入了 ',
        defender.get_colored_name(),
        ' 的小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 以正常位抽插着 ',
        defender.get_colored_name(),
        ' 的小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async missionary_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 以正常位插入了 ',
        defender.get_colored_name(),
        ' 的屁穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 以正常位抽插着 ',
        defender.get_colored_name(),
        ' 的屁穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 以后背位插入了 ',
        defender.get_colored_name(),
        ' 的小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 以后背位抽插着 ',
        defender.get_colored_name(),
        ' 的小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async doggy_style_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 以后背位插入了 ',
        defender.get_colored_name(),
        ' 的屁穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 以后背位抽插着 ',
        defender.get_colored_name(),
        ' 的屁穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sitting(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 与 ',
        defender.get_colored_name(),
        ' 相对而坐，将肉棒插入了 ',
        defender.get_colored_name(),
        ' 的小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ' 相对而坐，肉棒抽插着小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async sitting_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 与 ',
        defender.get_colored_name(),
        ' 相对而坐，将肉棒插入了 ',
        defender.get_colored_name(),
        ' 的屁穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ' 相对而坐，肉棒抽插着屁穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_sitting(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将背对着的 ',
        defender.get_colored_name(),
        ' 抱在怀里坐着，将肉棒插入了小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 怀抱着 ',
        defender.get_colored_name(),
        ' 坐着，肉棒抽插着小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_sitting_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将背对着的 ',
        defender.get_colored_name(),
        ' 抱在怀里坐着，将肉棒插入了屁穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 怀抱着 ',
        defender.get_colored_name(),
        ' 坐着，肉棒抽插着屁穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async standing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ' 面对面站着，将肉棒插入了小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 面对面站着用肉棒抽插着 ',
        defender.get_colored_name(),
        ' 的小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async standing_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 和 ',
        defender.get_colored_name(),
        ' 面对面站着，将肉棒插入了屁穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 面对面站着用肉棒抽插着 ',
        defender.get_colored_name(),
        ' 的屁穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_standing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 站着将 ',
        defender.get_colored_name(),
        ' 揽在怀中，将肉棒插入小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 从身后用肉棒抽插着 ',
        defender.get_colored_name(),
        ' 的小穴，',
        defender.get_colored_name(),
        ' 以双手软软地撑着墙壁】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_standing_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 站着将 ',
        defender.get_colored_name(),
        ' 揽在怀中，将肉棒插入屁穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 从身后用肉棒抽插着 ',
        defender.get_colored_name(),
        ' 的屁穴，',
        defender.get_colored_name(),
        ' 以双手软软地撑着墙壁】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 抬起架住，将肉棒插入了小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的肉棒抽插着 ',
        defender.get_colored_name(),
        ' 的浮空小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 抬起架住，将肉棒插入了屁穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的肉棒抽插着 ',
        defender.get_colored_name(),
        ' 的浮空屁穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fucked_suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 抬起架住，用小穴容纳了 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用自己的小穴套弄着 ',
        defender.get_colored_name(),
        ' 的浮空肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fucked_suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 抬起架住，用屁穴容纳了 ',
        defender.get_colored_name(),
        ' 的肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 用自己的屁穴套弄着 ',
        defender.get_colored_name(),
        ' 的浮空肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 背对着抬起架住，肉棒插入了小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的肉棒抽插着背对的 ',
        defender.get_colored_name(),
        ' 浮空的小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async hug_suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将 ',
        defender.get_colored_name(),
        ' 背对着抬起架住，肉棒插入了屁穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 的肉棒抽插着背对的 ',
        defender.get_colored_name(),
        ' 浮空的屁穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cowgirl(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 坐在身上，用小穴吞没肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求身上的 ',
        defender.get_colored_name(),
        ' 继续用小穴套弄肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cowgirl_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 坐在身上，用屁穴吞没肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求身上的 ',
        defender.get_colored_name(),
        ' 继续用屁穴套弄肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用小穴套弄肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用屁穴套弄肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒戳弄着 ',
      defender.get_colored_name(),
      ' 的 G 点】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_large_intestine(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒戳弄着 ',
      defender.get_colored_name(),
      ' 的 S 状结肠】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_womb(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒隔着屁穴戳弄着 ',
      defender.get_colored_name(),
      ' 的子宫】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 插入自己的小穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求身上的 ',
        defender.get_colored_name(),
        ' 继续抽插自己的小穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_fuck_anal(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 插入自己的屁穴】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求身上的 ',
        defender.get_colored_name(),
        ' 继续抽插自己的屁穴】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async cowgirl(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 骑在 ',
        defender.get_colored_name(),
        ' 以小穴吞没肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 骑在 ',
        defender.get_colored_name(),
        ' 以小穴套弄着肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async cowgirl_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 骑在 ',
        defender.get_colored_name(),
        ' 以屁穴吞没肉棒】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 骑在 ',
        defender.get_colored_name(),
        ' 以屁穴套弄着肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用小穴套弄着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用屁穴套弄着 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用肉棒刺激 G 点】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_large_intestine(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用肉棒刺激 S 状结肠】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async ask_stimulate_womb(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 用肉棒隔着屁穴刺激子宫】',
    ]);
  },

  // 性虐系

  async insult(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 辱骂着 ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_insult(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      is_first ? ' 辱骂自己】' : ' 继续辱骂自己】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拍打着 ',
      defender.get_colored_name(),
      ' 的臀部】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_anal_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用力拍打着 ',
      defender.get_colored_name(),
      ' 的臀部】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hit_anal(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      is_first ? ' 拍打自己的臀部】' : ' 继续拍打自己的臀部】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_breast(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 拍打着 ',
      defender.get_colored_name(),
      ' 的胸部】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_breast_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用力拍打着 ',
      defender.get_colored_name(),
      ' 的胸部】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hit_breast(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      is_first ? ' 拍打自己的胸部】' : ' 继续拍打自己的胸部】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_face(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 对 ',
      defender.get_colored_name(),
      ' 甩了一记耳光】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_face_hard(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 对 ',
      defender.get_colored_name(),
      ' 用力甩了一记耳光】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hit_face_by_penis(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用肉棒拍打 ',
      defender.get_colored_name(),
      ' 的脸颊】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_hit_face(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      is_first ? ' 扇自己的耳光】' : ' 再继续扇自己的耳光】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async virgin_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 践踏着 ',
      defender.get_colored_name(),
      ' 的阴部】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_virgin_foot_job(attacker, defender, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      is_first ? ' 践踏自己的阴部】' : ' 继续践踏自己的阴部】',
    ]);
  },

  // 银趴系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_supporter_prepare_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【在',
      attacker.get_colored_name(),
      ' 的授意下，',
      supporter.get_colored_name(),
      ' 张开 ',
      defender.get_colored_name(),
      ' 的阴唇】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起舔吸自己的乳头】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起舔吸 ',
      defender.get_colored_name(),
      ' 的乳头】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 要求 ',
      supporter.get_colored_name(),
      ' 和 ',
      defender.get_colored_name(),
      ' 一起侍奉自己的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起侍奉 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起舔舐自己的小豆豆】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起舔舐 ',
      defender.get_colored_name(),
      ' 的小豆豆】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起用舌头舔弄自己的小穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起用舌头舔弄 ',
      defender.get_colored_name(),
      ' 的小穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async ask_double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起用双乳侍奉自己的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 和 ',
      supporter.get_colored_name(),
      ' 一起用乳房侍奉 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_cowgirl(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      is_first ? ' 交替用小穴吞没肉棒】' : ' 继续交替用小穴吞没肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      is_first ? ' 轮流抽插自己的小穴】' : ' 继续轮流抽插自己的小穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      is_first
        ? ' 一前一后抽插自己下面的两个淫穴】'
        : ' 继续一前一后抽插自己下面的两个淫穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      is_first
        ? ' 一上一下抽插自己的口穴与小穴】'
        : ' 继续一上一下抽插自己的口穴与小穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      defender.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      is_first
        ? ' 一上一下抽插自己的口穴与屁穴】'
        : ' 继续一上一下抽插自己的口穴与屁穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async ask_cunnilingus_with_fucking(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 请求 ',
      supporter.get_colored_name(),
      is_first ? ' 在自己插入 ' : ' 在自己抽插 ',
      defender.get_colored_name(),
      ' 时舔舐她风流的小豆豆】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fuck_69(attacker, defender, supporter, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 请求 ',
        defender.get_colored_name(),
        ' 与 ',
        supporter.get_colored_name(),
        ' 摆成六九式后被自己插入】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 继续抽插着与 ',
        supporter.get_colored_name(),
        ' 摆成六九式相互口交的 ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   */
  async double_cowgirl(attacker, defender, supporter) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      ' 的小穴交替吞没 ',
      defender.get_colored_name(),
      ' 的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      is_first ? ' 轮流抽插着 ' : ' 继续轮流抽插着 ',
      defender.get_colored_name(),
      ' 的小穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      is_first ? ' 一前一后抽插着 ' : ' 继续一前一后抽插着 ',
      defender.get_colored_name(),
      ' 下面的两个淫穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      is_first ? ' 一上一下抽插着 ' : ' 继续一上一下抽插着 ',
      defender.get_colored_name(),
      ' 的口穴与小穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {CharaTalk} supporter 助手
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 与 ',
      supporter.get_colored_name(),
      is_first ? ' 一上一下抽插着 ' : ' 继续一上一下抽插着 ',
      defender.get_colored_name(),
      ' 的口穴与屁穴】',
    ]);
  },

  // 道具系
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 被润滑的部位
   */
  async use_lubricating_fluid(attacker, defender, part) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将润滑液涂抹在了 ',
      defender.get_colored_name(),
      ' 的 ',
      part,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param _
   * @param {PrintedSpan} part 被润滑的部位
   */
  async use_lubricating_fluid_self(attacker, _, part) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将润滑液涂抹在了自己的 ',
      part,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} medicine 药物
   */
  async use_medicine(attacker, defender, medicine) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 给 ',
      defender.get_colored_name(),
      ' 喂食了 ',
      medicine,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param _
   * @param {PrintedSpan} medicine 药物
   */
  async use_medicine_self(attacker, _, medicine) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 服用了 ',
      medicine,
      '】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async condom(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 给自己的肉棒套上了避孕套】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async other_condom(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 给 ',
      defender.get_colored_name(),
      ' 的肉棒套上了避孕套】',
    ]);
  },
  /**
   * 性玩具持续效果，用于跳蛋、夹子等和身体部位绑定的性玩具
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 身体部位
   * @param {string} verb 装备性玩具的动词，例如跳蛋对阴道是塞入，对乳头是装上
   * @param {PrintedSpan} item 性玩具
   */
  async item_effect(attacker, defender, part, verb, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' ',
      verb,
      '的 ',
      item,
      ' 持续刺激着 ',
      defender.get_colored_name(),
      ' 的 ',
      part,
      '】',
    ]);
  },
  /**
   * 给被动方穿戴性玩具，用于跳蛋、夹子等和身体部位绑定的性玩具
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 身体部位
   * @param {string} verb 装备性玩具的动词，例如跳蛋对阴道是塞入，对乳头是装上
   * @param {PrintedSpan} item 性玩具
   */
  async equip_item(attacker, defender, part, verb, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将 ',
      item,
      ' ',
      verb,
      ' 了 ',
      defender.get_colored_name(),
      ' 的 ',
      part,
      '】',
    ]);
  },
  /**
   * 给被动方穿戴性玩具，用于眼罩、项圈等不和身体部位绑定的性玩具
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} item 性玩具
   */
  async equip_other_item(attacker, defender, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 为 ',
      defender.get_colored_name(),
      ' 戴上了 ',
      item,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 被润滑的部位
   */
  async use_electric_stunner(attacker, defender, part) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 电击了 ',
      defender.get_colored_name(),
      ' 的 ',
      part,
      '】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async use_mirror(attacker) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 立起了一面全身镜】',
    ]);
  },
  /** @param {CharaTalk} attacker 主动方 */
  async take_off_mirror(attacker) {
    await printAndWait(['【', attacker.get_colored_name(), ' 撤除了全身镜】']);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {PrintedSpan} part 身体部位
   * @param {PrintedSpan} item 性玩具
   */
  async take_off_item(attacker, defender, part, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 从 ',
      defender.get_colored_name(),
      ' 的 ',
      part,
      ' 取下了 ',
      item,
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {PrintedSpan} part 身体部位
   * @param {PrintedSpan} item 性玩具
   */
  async take_off_item_self(attacker, part, item) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 从自己的 ',
      part,
      ' 取下了 ',
      item,
      '】',
    ]);
  },
};
