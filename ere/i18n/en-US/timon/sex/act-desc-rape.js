/**
 * @file Training action descriptions - rape
 * @author 黑奴队长
 * @author Katze (translator)
 */
const { printAndWait } = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async kiss(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' forcibly kisses ',
      defender.get_colored_name(),
      ' on the lips]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async french_kiss(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' forces a deep kiss on ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async relax(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' calmly admires ',
      defender.get_colored_name(),
      "'s current state]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async talk(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' speaks to ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' forces their clit against ',
        defender.get_colored_name(),
        "'s face]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' grinds their clit against ',
        defender.get_colored_name(),
        "'s lips and tongue]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' forces their pussy against ',
        defender.get_colored_name(),
        "'s lips]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' grinds their pussy against ',
        defender.get_colored_name(),
        "'s lips and tongue]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' forces a cock past ',
        defender.get_colored_name(),
        "'s lips]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' roughly stirs that cock through ',
        defender.get_colored_name(),
        "'s mouth]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' forces a cock deep into ',
        defender.get_colored_name(),
        "'s throat]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' roughly churns deep in ',
        defender.get_colored_name(),
        "'s throat]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' forces a cock into ',
        defender.get_colored_name(),
        "'s hands]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' roughly rubs that cock against ',
        defender.get_colored_name(),
        "'s hands]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' forces past ',
        defender.get_colored_name(),
        "'s hands and drives a cock into that mouth]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' smacks that cock against ',
        defender.get_colored_name(),
        "'s hands while stirring through those lips]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async fuck_tit(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' forces ',
        defender.get_colored_name(),
        "'s breasts together around that cock]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' roughly fucks ',
        defender.get_colored_name(),
        "'s chest]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' wraps ',
        defender.get_colored_name(),
        "'s hair around that cock]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' roughly rubs that cock through ',
        defender.get_colored_name(),
        "'s hair]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async force_foot_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' yanks ',
      defender.get_colored_name(),
      "'s feet over and strokes that cock with them]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async force_tail_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' yanks ',
      defender.get_colored_name(),
      "'s tail over and coils it around that cock]",
    ]);
  },
};
