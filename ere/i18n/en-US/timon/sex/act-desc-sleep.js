/**
 * @file Training action descriptions - sleep sex - system prompts
 * <br>See action meanings in #/i18n/zh-CN/sex/actions
 * @author 黑奴队长
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
      ' kisses sleeping ',
      defender.get_colored_name(),
      ']',
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
      ' deep-kisses sleeping ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pet_ear(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' toys with sleeping ',
      defender.get_colored_name(),
      "'s warm ears]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pull_ear(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' tugs on sleeping ',
      defender.get_colored_name(),
      "'s warm ears]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pet_breast(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' toys with sleeping ',
      defender.get_colored_name(),
      "'s soft breasts]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pet_nipple(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' toys with sleeping ',
      defender.get_colored_name(),
      "'s sensitive nipples]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pet_clitoris(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' toys with sleeping ',
      defender.get_colored_name(),
      "'s flushed clit]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async finger_fuck(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' slides fingers into sleeping ',
      defender.get_colored_name(),
      "'s wet pussy]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async prepare_virgin(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' spreads sleeping ',
      defender.get_colored_name(),
      "'s shy pussy lips]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async stimulate_g_spot_by_finger(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' fingers the hidden G-spot of sleeping ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pet_anal(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' toys with sleeping ',
      defender.get_colored_name(),
      "'s neat little asshole]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async prepare_anal(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' spreads open sleeping ',
      defender.get_colored_name(),
      "'s shy asshole]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pet_leg(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' strokes sleeping ',
      defender.get_colored_name(),
      "'s full thighs]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pet_tail(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' toys with sleeping ',
      defender.get_colored_name(),
      "'s fragrant tail]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pull_tail(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' tugs on sleeping ',
      defender.get_colored_name(),
      "'s delicate tail]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async cunnilingus(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' takes sleeping ',
        defender.get_colored_name(),
        "'s twitching clit into ",
        attacker.sex === 'She' ? 'her' : 'his',
        ' mouth]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' sucks on ',
        defender.get_colored_name(),
        "'s flushed clit]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async force_deep_blow_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' pushes a cock into ',
      defender.get_colored_name(),
      "'s slightly open mouth]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' takes sleeping ',
        defender.get_colored_name(),
        "'s hard cock into ",
        attacker.sex === 'She' ? 'her' : 'his',
        ' mouth]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' licks sleeping ',
        defender.get_colored_name(),
        "'s hard cock]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async deep_blow_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' takes sleeping ',
      defender.get_colored_name(),
      "'s hard cock deep into ",
      attacker.sex === 'She' ? 'her' : 'his',
      ' mouth]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async hand_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' strokes sleeping ',
      defender.get_colored_name(),
      "'s hard cock]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async hand_and_blow_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' works sleeping ',
      defender.get_colored_name(),
      "'s hard cock with both hand and mouth]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async fuck_tit(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' gathers sleeping ',
      defender.get_colored_name(),
      "'s breasts and rubs a cock between them]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async tit_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' gathers both breasts and rubs sleeping ',
      defender.get_colored_name(),
      "'s hard cock between them]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async tit_and_blow_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' rubs ',
      defender.get_colored_name(),
      "'s hard cock between ",
      attacker.sex === 'She' ? 'her' : 'his',
      ' breasts while sucking the sleeping tip]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async bite_nipple(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' gently nips sleeping ',
      defender.get_colored_name(),
      "'s sensitive nipples]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async force_armpit_intercourse(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' lifts sleeping ',
      defender.get_colored_name(),
      "'s unguarded arm and rubs a cock against the armpit]",
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
      ' pulls over sleeping ',
      defender.get_colored_name(),
      "'s healthy feet and works a cock under them]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async foot_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' pins sleeping ',
      defender.get_colored_name(),
      "'s hard cock underfoot]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async tail_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' wraps a tail around sleeping ',
      defender.get_colored_name(),
      "'s hard cock]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async missionary(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' mounts sleeping ',
      defender.get_colored_name(),
      ' and fucks that pussy]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async missionary_anal_sex(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' mounts sleeping ',
      defender.get_colored_name(),
      ' and fucks that ass]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async doggy_style(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' covers prone ',
      defender.get_colored_name(),
      ' and fucks that pussy]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async doggy_style_anal_sex(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' covers prone ',
      defender.get_colored_name(),
      ' and fucks that ass]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' works a cock against the deep G-spot of sleeping ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async stimulate_womb(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' uses a cock through the ass to stimulate sleeping ',
      defender.get_colored_name(),
      "'s sensitive womb]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async cowgirl(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' rides sleeping ',
      defender.get_colored_name(),
      ' and works that cock with a pussy]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async cowgirl_anal_sex(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' rides sleeping ',
      defender.get_colored_name(),
      ' and works that cock with an ass]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' milks sleeping ',
      defender.get_colored_name(),
      "'s hard cock with a pussy]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' milks sleeping ',
      defender.get_colored_name(),
      "'s hard cock with an ass]",
    ]);
  },
};
