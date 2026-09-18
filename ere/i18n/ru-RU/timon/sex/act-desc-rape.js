/**
 * @file 调教指令描述 - 强奸 - 系统提示
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
      ' силой впивается в губы ',
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
      ' силой хозяйничает в глубине рта ',
      defender.get_colored_name(),
      '】',
    ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   */
  async relax(attacker, defender) {
    await printAndWait([
      '【',
      attacker.get_colored_name(),
      ' неспешно любуется тем, как выглядит сейчас ',
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
      ' заговаривает с ',
      defender.get_colored_name(),
      '】',
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
        ' силой прижимает клитор к лицу ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' силой трётся клитором о губы и язык ',
        defender.get_colored_name(),
        '】',
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
        ' силой прижимает киску к губам ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' силой трётся киской о губы и язык ',
        defender.get_colored_name(),
        '】',
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
        ' силой вгоняет член меж губ ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' силой ворочает членом меж губ и языка ',
        defender.get_colored_name(),
        '】',
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
        ' силой вгоняет член в самую глотку ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' силой ворочает членом в глотке ',
        defender.get_colored_name(),
        '】',
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
        ' силой суёт член в руки ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' силой трётся членом о ладони ',
        defender.get_colored_name(),
        '】',
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
        ' силой раздвигает членом ладони ',
        defender.get_colored_name(),
        ' и вгоняет его в рот】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' членом бьёт по рукам ',
        defender.get_colored_name(),
        ' и им же ворочает меж губ ',
        defender.get_colored_name(),
        '】',
      ]);
  },
  /**
   * @param {CharaTalk} attacker 主动方
   * @param {CharaTalk} defender 被动方
   * @param {boolean} is_first 是否是连续动作的初次行动
   */
  async fuck_tit(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' силой сводит груди ',
        defender.get_colored_name(),
        ' и зажимает меж них член】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' силой трётся членом о грудь ',
        defender.get_colored_name(),
        '】',
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
        ' силой наматывает на член волосы ',
        defender.get_colored_name(),
        '】',
      ]);
    else
      await printAndWait([
        '【',
        attacker.get_colored_name(),
        ' силой трётся членом о волосы ',
        defender.get_colored_name(),
        '】',
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
      ' силой притягивает ступни ',
      defender.get_colored_name(),
      ' и ласкает ими член】',
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
      ' силой притягивает хвост ',
      defender.get_colored_name(),
      ' и обвивает им член】',
    ]);
  },
};
