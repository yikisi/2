/**
 * @file 调教指令描述 - 睡奸 - 系统提示
 * <br>指令含义看 #/i18n/xx-XX/sex/actions
 * @author 黑奴队长
 */
const { printAndWait } = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 亲吻着沉睡的 ',
      defender.get_colored_name(),
      '】',
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
      ' 深吻着沉睡的 ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async pet_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 温暖的耳朵】',
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
      ' 拉扯着着沉睡的 ',
      defender.get_colored_name(),
      ' 温暖的耳朵】',
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
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 柔软的胸部】',
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
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 敏感的乳头】',
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
      ' 玩弄着沉睡的 ',
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
      ' 用手指插入了沉睡的 ',
      defender.get_colored_name(),
      ' 风流的小穴】',
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
      ' 张开了沉睡的 ',
      defender.get_colored_name(),
      ' 羞涩的阴唇】',
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
      ' 用手指玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 隐秘的G点】',
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
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 小巧的菊门】',
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
      ' 张开了沉睡的 ',
      defender.get_colored_name(),
      ' 羞涩的菊门】',
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
      ' 抚摸着沉睡的 ',
      defender.get_colored_name(),
      ' 丰满的大腿】',
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
      ' 玩弄着沉睡的 ',
      defender.get_colored_name(),
      ' 馨香的尾巴】',
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
      ' 拉扯着沉睡的 ',
      defender.get_colored_name(),
      ' 脆弱的尾巴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 将沉睡的 ',
        defender.get_colored_name(),
        ' 翕动的小豆豆含入口中】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 吮吸着 ',
        defender.get_colored_name(),
        ' 风流的小豆豆】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_deep_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将肉棒插入 ',
      defender.get_colored_name(),
      ' 微张的小口中】',
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
        ' 将沉睡的 ',
        defender.get_colored_name(),
        ' 耸立的肉棒含入口中】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' 舔舐着沉睡的 ',
        defender.get_colored_name(),
        ' 耸立的肉棒】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async deep_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒深深含入口中】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 用手掌抚弄着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async hand_and_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 手口并用地侍奉着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async fuck_tit(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 双乳聚拢，摩擦着自己的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async tit_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将双乳聚拢，摩擦着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async tit_and_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 一边用胸部摩擦着 ',
      defender.get_colored_name(),
      ' 耸立的肉棒，一边张口吮吸着沉睡的龟头】',
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
      ' 轻轻啮咬着沉睡的 ',
      defender.get_colored_name(),
      ' 敏感的乳头】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async force_armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 无防备的手拉起，用肉棒摩擦着腋下】',
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
      ' 拉过沉睡的 ',
      defender.get_colored_name(),
      ' 健康的双足，踩弄着自己的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 将沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒踩在脚下】',
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
      ' 用尾巴缠弄着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async missionary(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 伏在沉睡的 ',
      defender.get_colored_name(),
      ' 身上，奸淫着小穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async missionary_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 伏在沉睡的 ',
      defender.get_colored_name(),
      ' 身上，奸淫着屁穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async doggy_style(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 伏在俯卧着的 ',
      defender.get_colored_name(),
      ' 身上，奸淫着小穴】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async doggy_style_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 伏在俯卧着的 ',
      defender.get_colored_name(),
      ' 身上，奸淫着屁穴】',
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
      ' 用肉棒刺激着沉睡的 ',
      defender.get_colored_name(),
      ' 深藏的 G 点】',
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
      ' 用肉棒隔着屁穴刺激着沉睡的 ',
      defender.get_colored_name(),
      ' 敏感的子宫】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async cowgirl(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 骑在沉睡的 ',
      defender.get_colored_name(),
      ' 身上，以小穴套弄着肉棒】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async cowgirl_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' 骑在沉睡的 ',
      defender.get_colored_name(),
      ' 身上，以屁穴套弄着肉棒】',
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
      ' 以小穴套弄着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒】',
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
      ' 以屁穴套弄着沉睡的 ',
      defender.get_colored_name(),
      ' 耸立的肉棒】',
    ]);
  },
};
