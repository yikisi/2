/**
 * @file Training action descriptions - common - system prompts
 * <br>See action meanings in #/i18n/zh-CN/sex/actions
 * @author 黑奴队长
 * @translation Katze
 */
const { get, printAndWait } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  // Communication
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async go_on(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' gives up resisting and lets ',
      defender.get_colored_name(),
      ' take over]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async kiss(attacker, defender, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' ',
      is_first ? '' : 'keeps ',
      'kissing ',
      defender.get_colored_name(),
      "'s lips]",
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
      ' gives ',
      defender.get_colored_name(),
      ' a deep, wet French kiss]',
    ]);
  },
  /** @param {CharaTalk} attacker active */
  async relax(attacker) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' tries to steady their breathing]',
    ]);
  },
  /** @param {CharaTalk} attacker active */
  async sleep(attacker) {
    const buffer = [
      () => printAndWait(['[', attacker.get_colored_name(), " doesn't react]"]),
    ];
    if (get(`status:${attacker.id}:沉睡`) > 0) {
      buffer.push(() =>
        printAndWait(['[', attacker.get_colored_name(), ' sleeps soundly]']),
      );
    }
    if (get(`status:${attacker.id}:马跳S`) > 0) {
      buffer.push(
        () =>
          printAndWait([
            '[',
            attacker.get_colored_name(),
            ' breathes a little heavily]',
          ]),
        () =>
          printAndWait([
            '[',
            attacker.get_colored_name(),
            ' lets out a heated breath in sleep]',
          ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async lure(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' teases ',
      defender.get_colored_name(),
      ']',
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
      ' chats casually with ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /** @param {CharaTalk} attacker active */
  async passive_switch(attacker) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' no longer wants to keep going]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async active_switch(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' hands control over to ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /** @param {CharaTalk} attacker active */
  async resist(attacker) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' tries to fight back and seize control]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async gargle(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' rinses out with ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async wipe_body(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' wipes down both ',
      attacker.sex === 'She' ? 'herself' : 'himself',
      ' and ',
      defender.get_colored_name(),
      ']',
    ]);
  },

  // Caress
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pet_ear(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' strokes ',
      defender.get_colored_name(),
      "'s ears]",
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
      ' tugs on ',
      defender.get_colored_name(),
      "'s ears]",
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
      ' fondles ',
      defender.get_colored_name(),
      "'s breasts]",
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
      ' toys with ',
      defender.get_colored_name(),
      "'s nipples]",
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
      ' caresses ',
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
      ' slides fingers into ',
      defender.get_colored_name(),
      "'s pussy]",
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
      ' spreads ',
      defender.get_colored_name(),
      "'s pussy lips]",
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
      ' fingers ',
      defender.get_colored_name(),
      "'s G-spot]",
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
      ' lightly strokes ',
      defender.get_colored_name(),
      "'s asshole]",
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
      ' spreads ',
      defender.get_colored_name(),
      "'s asshole]",
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
      ' caresses ',
      defender.get_colored_name(),
      "'s thighs]",
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
      ' caresses ',
      defender.get_colored_name(),
      "'s tail]",
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
      ' tugs on ',
      defender.get_colored_name(),
      "'s tail]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async cunnilingus(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' licks ',
      defender.get_colored_name(),
      "'s flushed clit]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_cunnilingus(attacker, defender, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      is_first ? ' to lick that clit]' : ' to keep licking that clit]',
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
        ' presses that clit against ',
        defender.get_colored_name(),
        "'s face]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' grinds that clit against ',
        defender.get_colored_name(),
        "'s lips and tongue]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' pushes a tongue into ',
        defender.get_colored_name(),
        "'s pussy]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' teases ',
        defender.get_colored_name(),
        "'s pussy with a tongue]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_suck_virgin(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to lick that pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to keep licking that pussy]',
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
        ' presses that pussy onto ',
        defender.get_colored_name(),
        "'s lips]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' grinds that pussy against ',
        defender.get_colored_name(),
        "'s lips and tongue]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to take that cock in mouth]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to lick that cock]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to take that cock deep]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to service that cock deep in the throat]',
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
        ' pushes a cock between ',
        defender.get_colored_name(),
        "'s lips]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' works a cock through ',
        defender.get_colored_name(),
        "'s lips and tongue]",
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
        ' pushes a cock deep into ',
        defender.get_colored_name(),
        "'s throat]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' works deep in ',
        defender.get_colored_name(),
        "'s throat]",
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
        ' takes ',
        defender.get_colored_name(),
        "'s cock into mouth]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' licks ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async deep_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' takes ',
        defender.get_colored_name(),
        "'s cock deep]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' services ',
        defender.get_colored_name(),
        "'s cock deep in the throat]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to hold that cock]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to keep stroking that cock]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to stroke that cock while taking the tip in mouth]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to stroke that cock while sucking the tip]',
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
        ' puts a cock into ',
        defender.get_colored_name(),
        "'s hand]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rubs a cock against ',
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
        ' forces a cock past ',
        defender.get_colored_name(),
        "'s hands and into that mouth]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        "'s cock slaps ",
        defender.get_colored_name(),
        "'s hands while working those lips and tongue]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hand_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' wraps a hand around ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' strokes ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hand_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' strokes and kisses ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' toys with and licks ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_tit_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to squeeze that cock between both breasts]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to service that cock with both breasts]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_tit_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to rub that cock with breasts while kissing the tip]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to rub that cock with breasts while sucking the tip]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async fuck_tit(attacker, defender, is_first) {
    if (is_first && defender.sex_code !== 1)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' gathers ',
        defender.get_colored_name(),
        "'s breasts around a cock]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rubs a cock against ',
        defender.get_colored_name(),
        "'s chest]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async fuck_tit_and_mouth(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' pushes a cock between ',
        defender.get_colored_name(),
        "'s breasts and into those lips]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rubs a cock between ',
        defender.get_colored_name(),
        "'s breasts and works those lips and tongue]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async tit_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' cups both breasts around ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' pumps both breasts up and down around ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async tit_and_blow_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rubs ',
        defender.get_colored_name(),
        "'s cock between both breasts and takes the tip in mouth]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rubs ',
        defender.get_colored_name(),
        "'s cock between both breasts while sucking the tip]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async suck_anal(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' licks ',
      defender.get_colored_name(),
      "'s asshole]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async suck_nipple(attacker, defender, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      is_first ? ' takes ' : ' sucks on ',
      defender.get_colored_name(),
      "'s nipples]",
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
      ' gently bites ',
      defender.get_colored_name(),
      "'s nipples]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_milk_and_hand_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to stroke that cock while letting ',
      attacker.get_colored_name(),
      ' suck those nipples]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async milk(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' presses a nipple into ',
        defender.get_colored_name(),
        "'s mouth]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' lets ',
        defender.get_colored_name(),
        ' suck those nipples]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_bite_nipple(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to bite those nipples]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async milk_and_hand_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' lets ',
      defender.get_colored_name(),
      ' suck those nipples while stroking ',
      defender.get_colored_name(),
      "'s cock]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_non_penetrative(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to trap ',
        attacker.get_colored_name(),
        "'s cock between those thighs]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to rub ',
        attacker.get_colored_name(),
        "'s cock between those thighs]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async non_penetrative(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' traps ',
        defender.get_colored_name(),
        "'s cock between those thighs]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rubs ',
        defender.get_colored_name(),
        "'s cock between those thighs]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async sixty_nine(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' and ',
        defender.get_colored_name(),
        ' get into a 69]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' and ',
        defender.get_colored_name(),
        ' keep servicing each other in a 69]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to wrap that hair around a cock]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to rub that cock with palms and hair]',
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
        "'s hair around a cock]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rubs a cock against ',
        defender.get_colored_name(),
        "'s hair]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hair_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' wraps hair around ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rubs ',
        defender.get_colored_name(),
        "'s cock with palms and hair]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_armpit_intercourse(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to rub that cock with an armpit]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_armpit_intercourse(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' lifts ',
        defender.get_colored_name(),
        "'s arm and rubs a cock there]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' keeps rubbing a cock against ',
        defender.get_colored_name(),
        "'s armpit]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async armpit_intercourse(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' rubs ',
      defender.get_colored_name(),
      "'s cock with an armpit]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_foot_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to step on that cock]',
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
      ' prods ',
      defender.get_colored_name(),
      "'s feet with a cock]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async foot_job(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' steps on ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' treads on ',
        defender.get_colored_name(),
        "'s cock]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_tail_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to service that cock with a tail]',
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
      ' pulls ',
      defender.get_colored_name(),
      "'s tail around a cock]",
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
      ' wraps a tail around ',
      defender.get_colored_name(),
      "'s cock]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async tribbing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' presses close and grinds clits with ',
        defender.get_colored_name(),
        ']',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' keeps grinding clits with ',
        defender.get_colored_name(),
        ']',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async self_pet_nipple(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' toys with those nipples in front of ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async self_hand_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' strokes that cock in front of ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async self_pet_clitoris(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' toys with that clit in front of ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async self_finger_fuck(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' fingers that pussy in front of ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async self_pet_anal(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' fingers that ass in front of ',
      defender.get_colored_name(),
      ']',
    ]);
  },

  // Sex
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async missionary(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' enters ',
        defender.get_colored_name(),
        "'s pussy in missionary]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' thrusts into ',
        defender.get_colored_name(),
        "'s pussy in missionary]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async missionary_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' enters ',
        defender.get_colored_name(),
        "'s ass in missionary]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' thrusts into ',
        defender.get_colored_name(),
        "'s ass in missionary]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async doggy_style(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' enters ',
        defender.get_colored_name(),
        "'s pussy from behind]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' thrusts into ',
        defender.get_colored_name(),
        "'s pussy from behind]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async doggy_style_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' enters ',
        defender.get_colored_name(),
        "'s ass from behind]",
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' thrusts into ',
        defender.get_colored_name(),
        "'s ass from behind]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async sitting(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' sits face-to-face with ',
        defender.get_colored_name(),
        ' and sinks a cock into that pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' and ',
        defender.get_colored_name(),
        ' sit face-to-face while a cock works that pussy]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async sitting_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' sits face-to-face with ',
        defender.get_colored_name(),
        ' and sinks a cock into that ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' and ',
        defender.get_colored_name(),
        ' sit face-to-face while a cock works that ass]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hug_sitting(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' holds back-turned ',
        defender.get_colored_name(),
        ' in a seated embrace and sinks a cock into that pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' holds ',
        defender.get_colored_name(),
        ' seated while a cock works that pussy]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hug_sitting_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' holds back-turned ',
        defender.get_colored_name(),
        ' in a seated embrace and sinks a cock into that ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' holds ',
        defender.get_colored_name(),
        ' seated while a cock works that ass]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async standing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' stands face-to-face with ',
        defender.get_colored_name(),
        ' and sinks a cock into that pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' stands face-to-face thrusting a cock into ',
        defender.get_colored_name(),
        "'s pussy]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async standing_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' stands face-to-face with ',
        defender.get_colored_name(),
        ' and sinks a cock into that ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' stands face-to-face thrusting a cock into ',
        defender.get_colored_name(),
        "'s ass]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hug_standing(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' holds ',
        defender.get_colored_name(),
        ' standing and sinks a cock into that pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' thrusts into ',
        defender.get_colored_name(),
        "'s pussy from behind while ",
        defender.get_colored_name(),
        ' braces weakly against the wall]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hug_standing_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' holds ',
        defender.get_colored_name(),
        ' standing and sinks a cock into that ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' thrusts into ',
        defender.get_colored_name(),
        "'s ass from behind while ",
        defender.get_colored_name(),
        ' braces weakly against the wall]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' lifts ',
        defender.get_colored_name(),
        ' and sinks a cock into that pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        "'s cock works ",
        defender.get_colored_name(),
        "'s suspended pussy]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' lifts ',
        defender.get_colored_name(),
        ' and sinks a cock into that ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        "'s cock works ",
        defender.get_colored_name(),
        "'s suspended ass]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async fucked_suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' lifts ',
        defender.get_colored_name(),
        ' and takes that cock with a pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' works ',
        defender.get_colored_name(),
        "'s suspended cock with a pussy]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async fucked_suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' lifts ',
        defender.get_colored_name(),
        ' and takes that cock with an ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' works ',
        defender.get_colored_name(),
        "'s suspended cock with an ass]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hug_suspended_congress(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' lifts back-turned ',
        defender.get_colored_name(),
        ' and sinks a cock into that pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        "'s cock works back-turned ",
        defender.get_colored_name(),
        "'s suspended pussy]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hug_suspended_congress_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' lifts back-turned ',
        defender.get_colored_name(),
        ' and sinks a cock into that ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        "'s cock works back-turned ",
        defender.get_colored_name(),
        "'s suspended ass]",
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_cowgirl(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to sit on top and take that cock with a pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' on top to keep riding that cock with a pussy]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_cowgirl_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to sit on top and take that cock with an ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' on top to keep riding that cock with an ass]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_stimulate_glans_by_virgin(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to work that cock with a pussy]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_stimulate_glans_by_anal(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to work that cock with an ass]',
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
      ' prods ',
      defender.get_colored_name(),
      "'s G-spot with a cock]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async stimulate_large_intestine(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' prods ',
      defender.get_colored_name(),
      "'s sigmoid colon with a cock]",
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
      ' prods ',
      defender.get_colored_name(),
      "'s womb through the ass with a cock]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_fuck(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to enter that pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' on top to keep thrusting into that pussy]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_fuck_anal(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' to enter that ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' on top to keep thrusting into that ass]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async cowgirl(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rides ',
        defender.get_colored_name(),
        ' and takes that cock with a pussy]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rides ',
        defender.get_colored_name(),
        ' working that cock with a pussy]',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async cowgirl_anal_sex(attacker, defender, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rides ',
        defender.get_colored_name(),
        ' and takes that cock with an ass]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' rides ',
        defender.get_colored_name(),
        ' working that cock with an ass]',
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
      ' works ',
      defender.get_colored_name(),
      "'s cock with a pussy]",
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
      ' works ',
      defender.get_colored_name(),
      "'s cock with an ass]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_stimulate_g_spot(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to hit that G-spot with a cock]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_stimulate_large_intestine(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to hit that sigmoid colon with a cock]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async ask_stimulate_womb(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' to hit that womb through the ass with a cock]',
    ]);
  },

  // Abuse
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async insult(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' hurls insults at ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_insult(attacker, defender, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      is_first ? ' to insult me]' : ' to keep insulting me]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async hit_anal(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' spanks ',
      defender.get_colored_name(),
      "'s ass]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async hit_anal_hard(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' hard-spanks ',
      defender.get_colored_name(),
      "'s ass]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_hit_anal(attacker, defender, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      is_first ? ' to spank that ass]' : ' to keep spanking that ass]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async hit_breast(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' slaps ',
      defender.get_colored_name(),
      "'s breasts]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async hit_breast_hard(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' hard-slaps ',
      defender.get_colored_name(),
      "'s breasts]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_hit_breast(attacker, defender, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      is_first ? ' to slap those breasts]' : ' to keep slapping those breasts]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async hit_face(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' slaps ',
      defender.get_colored_name(),
      ' across the face]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async hit_face_hard(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' hard-slaps ',
      defender.get_colored_name(),
      ' across the face]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async hit_face_by_penis(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' slaps ',
      defender.get_colored_name(),
      "'s cheek with a cock]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_hit_face(attacker, defender, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      is_first ? ' to slap my face]' : ' to keep slapping my face]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async virgin_foot_job(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' tramples ',
      defender.get_colored_name(),
      "'s crotch]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_virgin_foot_job(attacker, defender, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      is_first ? ' to trample that crotch]' : ' to keep trampling that crotch]',
    ]);
  },

  // Group
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async ask_supporter_prepare_virgin(attacker, defender, supporter) {
    await printAndWait([
      '[At ',
      attacker.get_colored_name(),
      "'s word, ",
      supporter.get_colored_name(),
      ' spreads ',
      defender.get_colored_name(),
      "'s pussy lips]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async ask_double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' to suck those nipples together]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async double_suck_nipple(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' suck ',
      defender.get_colored_name(),
      "'s nipples together]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async ask_double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' orders ',
      supporter.get_colored_name(),
      ' and ',
      defender.get_colored_name(),
      ' to service that cock together]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async double_blow_job(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' service ',
      defender.get_colored_name(),
      "'s cock together]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async ask_double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' to lick that clit together]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async double_cunnilingus(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' lick ',
      defender.get_colored_name(),
      "'s clit together]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async ask_double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' to tongue that pussy together]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async double_suck_virgin(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' tongue ',
      defender.get_colored_name(),
      "'s pussy together]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async ask_double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' to service that cock with their breasts together]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async double_tit_job(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' service ',
      defender.get_colored_name(),
      "'s cock with their breasts]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_double_cowgirl(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      is_first
        ? ' to take turns swallowing that cock with their pussies]'
        : ' to keep taking turns swallowing that cock with their pussies]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      is_first
        ? ' to take turns thrusting into that pussy]'
        : ' to keep taking turns thrusting into that pussy]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      is_first
        ? ' to fuck both holes front and back]'
        : ' to keep fucking both holes front and back]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      is_first
        ? ' to fuck mouth and pussy together]'
        : ' to keep fucking mouth and pussy together]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      defender.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      is_first
        ? ' to fuck mouth and ass together]'
        : ' to keep fucking mouth and ass together]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_cunnilingus_with_fucking(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' asks ',
      supporter.get_colored_name(),
      is_first ? ' to lick ' : ' to keep licking ',
      defender.get_colored_name(),
      "'s flushed clit while ",
      is_first ? 'I thrust into ' : 'I keep thrusting into ',
      defender.sex === 'She' ? 'her' : 'him',
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async fuck_69(attacker, defender, supporter, is_first) {
    if (is_first)
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' asks ',
        defender.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        ' to 69, then thrusts in]',
      ]);
    else
      await printAndWait([
        '[',
        attacker.get_colored_name(),
        ' keeps thrusting into ',
        defender.get_colored_name(),
        ', still locked in a 69 with ',
        supporter.get_colored_name(),
        ']',
      ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   */
  async double_cowgirl(attacker, defender, supporter) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ' take turns swallowing ',
      defender.get_colored_name(),
      "'s cock with their pussies]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async double_fuck(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      is_first
        ? ' take turns thrusting into '
        : ' keep taking turns thrusting into ',
      defender.get_colored_name(),
      "'s pussy]",
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async double_penetration(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      is_first ? ' fuck both holes of ' : ' keep fucking both holes of ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async spit_roast(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      is_first
        ? ' fuck mouth and pussy of '
        : ' keep fucking mouth and pussy of ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async spit_roast_anal_sex(attacker, defender, supporter, is_first) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      is_first ? ' fuck mouth and ass of ' : ' keep fucking mouth and ass of ',
      defender.get_colored_name(),
      ']',
    ]);
  },

  // Items
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} part body part being lubricated
   */
  async use_lubricating_fluid(attacker, defender, part) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' spreads lube on ',
      defender.get_colored_name(),
      "'s ",
      part,
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param _
   * @param {PrintedSpan} part body part being lubricated
   */
  async use_lubricating_fluid_self(attacker, _, part) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' spreads lube on ',
      attacker.sex === 'She' ? 'her' : 'his',
      ' own ',
      part,
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} medicine medicine
   */
  async use_medicine(attacker, defender, medicine) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' feeds ',
      defender.get_colored_name(),
      ' ',
      medicine,
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param _
   * @param {PrintedSpan} medicine medicine
   */
  async use_medicine_self(attacker, _, medicine) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' takes ',
      medicine,
      ']',
    ]);
  },
  /** @param {CharaTalk} attacker active */
  async condom(attacker) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' rolls a condom onto that cock]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async other_condom(attacker, defender) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' rolls a condom onto ',
      defender.get_colored_name(),
      "'s cock]",
    ]);
  },
  /**
   * Ongoing toy effect for toys bound to a body part
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} part body part
   * @param {string} verb equip verb for the toy
   * @param {PrintedSpan} item sex toy
   */
  async item_effect(attacker, defender, part, verb, item) {
    await printAndWait([
      '[The ',
      item,
      ' ',
      attacker.get_colored_name(),
      ' ',
      verb,
      ' keeps stimulating ',
      defender.get_colored_name(),
      "'s ",
      part,
      ']',
    ]);
  },
  /**
   * Equip a body-bound toy on the passive partner
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} part body part
   * @param {string} verb equip verb for the toy
   * @param {PrintedSpan} item sex toy
   */
  async equip_item(attacker, defender, part, verb, item) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' ',
      verb,
      's the ',
      item,
      ' on ',
      defender.get_colored_name(),
      "'s ",
      part,
      ']',
    ]);
  },
  /**
   * Equip a non-body-bound toy such as a blindfold or collar
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} item sex toy
   */
  async equip_other_item(attacker, defender, item) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' puts a ',
      item,
      ' on ',
      defender.get_colored_name(),
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} part body part
   */
  async use_electric_stunner(attacker, defender, part) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' shocks ',
      defender.get_colored_name(),
      "'s ",
      part,
      ']',
    ]);
  },
  /** @param {CharaTalk} attacker active */
  async use_mirror(attacker) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' sets up a full-length mirror]',
    ]);
  },
  /** @param {CharaTalk} attacker active */
  async take_off_mirror(attacker) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' takes down the full-length mirror]',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} part body part
   * @param {PrintedSpan} item sex toy
   */
  async take_off_item(attacker, defender, part, item) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' removes the ',
      item,
      ' from ',
      defender.get_colored_name(),
      "'s ",
      part,
      ']',
    ]);
  },
  /**
   * @param {CharaTalk} attacker active
   * @param {PrintedSpan} part body part
   * @param {PrintedSpan} item sex toy
   */
  async take_off_item_self(attacker, part, item) {
    await printAndWait([
      '[',
      attacker.get_colored_name(),
      ' removes the ',
      item,
      ' from ',
      attacker.sex === 'She' ? 'her' : 'his',
      ' own ',
      part,
      ']',
    ]);
  },
};
