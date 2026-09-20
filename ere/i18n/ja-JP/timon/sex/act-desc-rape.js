/**
 * @file 調教指令の説明 - 強姦 - システム提示
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
      ' は強引に ',
      defender.get_colored_name(),
      ' の唇を口づけた】',
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
      ' は強引に ',
      defender.get_colored_name(),
      ' の口腔の奥を探った】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async relax(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は余裕たっぷりに ',
      defender.get_colored_name(),
      ' のいまの姿を眺めている】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async talk(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は ',
      defender.get_colored_name(),
      ' に話しかけた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に陰核を ',
        defender.get_colored_name(),
        ' の顔へ押し当てた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に陰核で ',
        defender.get_colored_name(),
        ' の唇と舌を擦った】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に秘部を ',
        defender.get_colored_name(),
        ' の唇へ押し当てた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に秘部で ',
        defender.get_colored_name(),
        ' の唇と舌を擦った】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に肉棒を ',
        defender.get_colored_name(),
        ' の唇へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に肉棒で ',
        defender.get_colored_name(),
        ' の唇と舌を掻き回した】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に肉棒を ',
        defender.get_colored_name(),
        ' の喉の奥へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に ',
        defender.get_colored_name(),
        ' の喉の奥で掻き回した】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に肉棒を ',
        defender.get_colored_name(),
        ' の手のなかへ伸ばした】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に肉棒で ',
        defender.get_colored_name(),
        ' の両手を擦った】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に肉棒で ',
        defender.get_colored_name(),
        ' の両手を押し分け、口へ挿し入れた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は肉棒で ',
        defender.get_colored_name(),
        ' の手を叩きながら、',
        defender.get_colored_name(),
        ' の唇と舌を掻き回した】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async fuck_tit(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に ',
        defender.get_colored_name(),
        ' の胸を寄せ、肉棒を挟んだ】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に肉棒で ',
        defender.get_colored_name(),
        ' の胸を擦った】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に ',
        defender.get_colored_name(),
        ' の髪で肉棒を巻いた】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' は強引に肉棒で ',
        defender.get_colored_name(),
        ' の髪を擦った】',
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
      ' は強引に ',
      defender.get_colored_name(),
      ' の両足を引き寄せ、肉棒を撫でさせた】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async force_tail_job(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' は強引に ',
      defender.get_colored_name(),
      ' の尻尾を引き寄せ、肉棒に巻きつかせた】',
    ]);
  },
};
