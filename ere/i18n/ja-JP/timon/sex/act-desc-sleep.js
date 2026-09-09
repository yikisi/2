/**
 * @file 調教指令の説明 - 睡姦 - システム提示
 * <br>指令の意味は #/i18n/zh-CN/sex/actions
 * @author 黑奴队长
 */
const { printAndWait } = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' に口づけた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async french_kiss(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' に深く口づけた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の温かな耳を弄んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_ear(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の温かな耳を引っ張った】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_breast(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の柔らかい胸を弄んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の敏感な乳首を弄んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_clitoris(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の淫らな陰核を弄んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async finger_fuck(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は指を、眠る ',
      defender.get_colored_name(),
      ' の淫らな秘部へ挿し入れた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async prepare_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' のはにかむ陰唇を開いた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_g_spot_by_finger(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は指で、眠る ',
      defender.get_colored_name(),
      ' の奥にあるGスポットを弄んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の小さな尻穴を弄んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async prepare_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' のはにかむ尻穴を開いた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_leg(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の豊かな太ももを撫でた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pet_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の香る尻尾を弄んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_tail(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の繊細な尻尾を引っ張った】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は眠る ',
        defender.get_colored_name(),
        ' のひくつく陰核を口に含んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は ',
        defender.get_colored_name(),
        ' の淫らな陰核を吸い上げた】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async force_deep_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は肉棒を ',
      defender.get_colored_name(),
      ' のわずかに開いた口へ挿し入れた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は眠る ',
        defender.get_colored_name(),
        ' のそそり立つ肉棒を口に含んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は眠る ',
        defender.get_colored_name(),
        ' のそそり立つ肉棒を舐めている】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async deep_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' のそそり立つ肉棒を深くまで口に含んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async hand_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は掌で、眠る ',
      defender.get_colored_name(),
      ' のそそり立つ肉棒を撫でた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async hand_and_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は手と口で、眠る ',
      defender.get_colored_name(),
      ' のそそり立つ肉棒に奉仕した】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async fuck_tit(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の両胸を寄せ、自分の肉棒を擦った】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async tit_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は両胸を寄せ、眠る ',
      defender.get_colored_name(),
      ' のそそり立つ肉棒を擦った】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async tit_and_blow_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は胸で ',
      defender.get_colored_name(),
      ' のそそり立つ肉棒を擦りながら、眠る亀頭を口で吸い上げた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async bite_nipple(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の敏感な乳首を軽く噛んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async force_armpit_intercourse(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の無防備な腕を引き上げ、肉棒で腋を擦った】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async force_foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' の健やかな両足を引き寄せ、自分の肉棒を踏ませた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async foot_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' のそそり立つ肉棒を足の下に置いた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は尻尾で、眠る ',
      defender.get_colored_name(),
      ' のそそり立つ肉棒を巻いた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async missionary(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' に覆い被さり、秘部を犯した】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async missionary_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' に覆い被さり、尻穴を犯した】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async doggy_style(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' はうつ伏せの ',
      defender.get_colored_name(),
      ' に覆い被さり、秘部を犯した】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async doggy_style_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' はうつ伏せの ',
      defender.get_colored_name(),
      ' に覆い被さり、尻穴を犯した】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は肉棒で、眠る ',
      defender.get_colored_name(),
      ' の奥のGスポットを刺激した】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_womb(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は肉棒で、尻穴越しに眠る ',
      defender.get_colored_name(),
      ' の敏感な子宮を刺激した】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async cowgirl(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' に跨り、秘部で肉棒を咥え込んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async cowgirl_anal_sex(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は眠る ',
      defender.get_colored_name(),
      ' に跨り、尻穴で肉棒を咥え込んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は秘部で、眠る ',
      defender.get_colored_name(),
      ' のそそり立つ肉棒を咥え込んだ】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は尻穴で、眠る ',
      defender.get_colored_name(),
      ' のそそり立つ肉棒を咥え込んだ】',
    ]);
  },
};
