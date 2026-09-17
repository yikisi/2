/**
 * @file Training - system text
 * @author イーウィヤ
 * @author 黑奴队长
 * @author Katze (translator)
 */
const { get, input, printAndWait, printButton } = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const { part_enum } = require('#/data/ero/part-const');

module.exports = {
  /**
   * System flavor after choosing [Invite to bed]
   */

  /** End the current turn after choosing sex */
  bt_back_home: 'Invite to stay the night',
  /** Start immediately as rape; uses rape dialogue and flavor */
  bt_rape_play: 'Rape Play',
  /** Drug use with no negative effects */
  bt_use_medicine: 'Aphrodisiacs',
  /**
   * With consent (affection met and status allows): prompt + normal sex button
   * @param {CharaTalk} chara target
   * @param {CharaTalk} you player
   * @returns {[TextContent,string]}
   */
  get_want_sex_as_lover: (chara, you) => [
    [
      chara.get_colored_name(),
      ' gazes at ',
      you.get_colored_name(),
      ' with soft affection…',
      { isBr: true },
      'What will you do?',
    ],
    'Normal courtship',
  ],
  /**
   * No consent but as sex slave / breeding sow: prompt + normal sex button
   * @param {CharaTalk} chara target
   * @param {CharaTalk} you player
   * @returns {[TextContent,string]}
   */
  get_want_sex_as_slave: (chara, you) => [
    [
      chara.get_colored_name(),
      ' looks at ',
      you.get_colored_name(),
      ' with a light, teasing smile…',
      { isBr: true },
      'What will you do?',
    ],
    'Offer yourself',
  ],
  /**
   * Rape them, or ask them to rape the player
   * @param {CharaTalk} chara target
   * @param {CharaTalk} you player
   * @returns {Promise<boolean>} true - rape them; false - they rape the player
   */
  async choose_who_to_rape(chara, you) {
    printButton(`Treat ${chara.sex.toLowerCase()} roughly`, 1);
    printButton('"Please treat me roughly"', 2);
    const ret = (await input()) === 1;
    if (ret) {
      await printAndWait([
        chara.get_colored_name(),
        ' plays along, putting on a look of terror as if about to be forced…',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' puts on a frightened, fragile plea that stokes ',
        chara.get_colored_name(),
        "'s darker side…",
      ]);
    }
    return ret;
  },
  use_medicine_header: 'Which drug to use?',
  no_medicine_notification: 'No drugs available',
  /**
   * Use Super Umapyoi Z
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_super_uma_z(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      ' obediently drinks the ',
      item,
      '…',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      ' becomes extremely aroused!',
    ]);
  },
  /**
   * Use Umapyoi S
   * @param {CharaTalk} chara
   * @param {string} item
   */
  async use_uma_s(chara, item) {
    await printAndWait([
      chara.get_colored_name(),
      ' obediently drinks the ',
      item,
      '…',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      ' falls asleep with flushed cheeks…',
    ]);
  },
  /**
   * No consent, but target has a lewd crest / pleasure mark
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_pleasure: (chara, you) => [
    chara.get_colored_name(),
    ' does not want to spend the night with ',
    you.get_colored_name(),
    '…',
    { isBr: true },
    'But a mind seared by bodily pleasure leaves ',
    chara.sex.toLowerCase(),
    ' unable to refuse…',
  ],
  /**
   * No consent, but target has a submission mark
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_master_by_meek: (chara, you) => [
    chara.get_colored_name(),
    ' does not want to spend the night with ',
    you.get_colored_name(),
    '…',
    { isBr: true },
    'But still obediently prepares ',
    chara.sex.toLowerCase(),
    'self…',
  ],
  /** No consent, but mark present: start training immediately */
  bt_start_train: 'Begin training',
  /** No consent, but mark present: train and end the turn */
  bt_train_back_home: 'Take home for the night',
  /**
   * No consent and no mark
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_want_sex_as_raper: (chara, you) => [
    chara.get_colored_name(),
    ' does not want to spend the night with ',
    you.get_colored_name(),
    '…',
    { isBr: true },
    'What now?',
  ],
  bt_rape: 'Try to force it',
  bt_drug: 'Try to drug them',
  /**
   * No consent/mark: choose force
   * @param {CharaTalk} chara target
   * @param {CharaTalk} you player
   * @param {boolean} success whether it succeeds
   */
  async rape(chara, you, success) {
    if (success) {
      await printAndWait([
        you.get_colored_name(),
        "'s strength backs that shameless act…",
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' wears a look of pure terror…',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' fails to overpower ',
        chara.get_colored_name(),
        '…',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' shoves ',
        you.get_colored_name(),
        ' down and leaves at once…',
      ]);
      await printAndWait([
        'Though ',
        chara.get_colored_name(),
        " stays silent about it, society's view of ",
        you.get_colored_name(),
        ' still drops!',
      ]);
    }
  },
  /**
   * No consent/mark: choose drugs
   * @param {CharaTalk} chara target
   * @param {CharaTalk} you player
   * @param {1|2} medicine_type 1 Super Umapyoi Z, 2 Umapyoi S
   * @param {boolean} success whether it succeeds
   */
  async drug(chara, you, medicine_type, success) {
    if (success) {
      await printAndWait([
        you.get_colored_name(),
        "'s underhanded trick works…",
      ]);
      if (medicine_type === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' drinks the spiked tea, then loses all reason to a surge of lust…',
        ]);
      } else {
        await printAndWait([
          chara.get_colored_name(),
          ' drinks the spiked tea, then sinks into a deep sleep…',
        ]);
      }
    } else {
      await printAndWait([
        chara.get_colored_name(),
        ' keenly notices something is off…',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' shoves ',
        you.get_colored_name(),
        ' down and leaves at once…',
      ]);
      await printAndWait([
        'Though ',
        chara.get_colored_name(),
        " stays silent about it, society's view of ",
        you.get_colored_name(),
        ' still drops!',
      ]);
    }
  },
  /**
   * Special scene after rape via Super Umapyoi Z
   * @param {CharaTalk} chara
   * @returns {Promise<void>}
   */
  async after_rape_by_super_uma_z(chara) {
    await printAndWait([
      'Swept up in the moment or not, once ',
      chara.get_colored_name(),
      ' comes back to ',
      chara.sex.toLowerCase(),
      'self, the shame and fury will be unbearable…',
    ]);
  },
  /**
   * Invite to bed while target is asleep
   * @param {CharaTalk} chara
   */
  get_want_sex_sleep: (chara) => [
    chara.get_colored_name(),
    ' is sleeping soundly.',
    { isBr: true },
    'Assault them?',
  ],
  /** Choose sleep rape */
  bt_rape_in_sleeping: 'Assault!',

  /**
   * Item use
   */
  lub_select_target: 'Who gets the lube?',
  select_entry_template: '%ITEM% (%COUNT%)',
  /** @param {CharaTalk} you */
  get_lub_give_up: (you) => [you.get_colored_name(), ' gives up on using lube'],
  lub_no_parts: 'No parts need lube',
  /** @param {CharaTalk} chara */
  get_lub_select_part: (chara) => [
    'Which part of ',
    chara.get_colored_name(),
    ' to lube?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_lub_confirm: (chara, part) => [
    'Lube ',
    chara.get_colored_name(),
    "'s ",
    part,
    '?',
  ],
  med_no_medicines: 'No usable drugs right now',
  med_select_target: 'Who gets the drug?',
  /** @param {CharaTalk} you */
  get_med_give_up: (you) => [
    you.get_colored_name(),
    ' gives up on using drugs',
  ],
  /** @param {CharaTalk} chara */
  get_med_no_medicines_for_chara: (chara) => [
    'No drugs that can be given to ',
    chara.get_colored_name(),
  ],
  med_no_medicines_for_you: 'No drugs available to take',
  /** @param {CharaTalk} chara */
  get_med_select_medicine: (chara) => [
    'Which drug to give ',
    chara.get_colored_name(),
    '?',
  ],
  med_select_medicine_for_you: 'Which drug to take?',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_med_confirm_for_chara: (chara, item) => [
    'Give ',
    item,
    ' to ',
    chara.get_colored_name(),
    '?',
  ],
  /** @param {PrintedSpan} item */
  get_med_confirm_for_you: (item) => ['Take ', item, '?'],
  /** @param {PrintedSpan} item */
  get_med_give_up_medicine: (item) => ['Gives up on using ', item],
  itm_no_items: 'No usable sex toys right now',
  itm_select_item: 'Which sex toy to use?',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_select_part: (chara, item) => [
    'Use ',
    item,
    ' on which part of ',
    chara.get_colored_name(),
    '?',
  ],
  itm_no_parts: 'No parts that can take this toy',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   * @param {PrintedSpan} part
   */
  get_itm_confirm_with_part: (chara, item, part) => [
    'Use ',
    item,
    ' on ',
    chara.get_colored_name(),
    "'s ",
    part,
    '?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} item
   */
  get_itm_confirm_without_part: (chara, item) => [
    'Use ',
    item,
    ' on ',
    chara.get_colored_name(),
    '?',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_give_up_item: (you, item) => [
    you.get_colored_name(),
    ' gives up on using ',
    item,
  ],
  itm_take_off_select_target: 'Remove toys from whom?',
  /** @param {CharaTalk} you */
  get_itm_give_up_take_off: (you) => [
    you.get_colored_name(),
    ' gives up on removing toys',
  ],
  /** @param {CharaTalk} you */
  get_itm_no_item_to_take_off: (you) => [
    you.get_colored_name(),
    ' has no toys on',
  ],
  itm_take_off_select_item: 'Which toy to remove?',
  itm_take_off_select_entry_template: '%ITEM% (%PART%)',
  itm_take_off_mirror_confirm: 'Remove the [Full-Length Mirror]?',
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   * @param {PrintedSpan} item
   */
  get_itm_take_off_confirm: (chara, part, item) => [
    'Remove ',
    item,
    ' from ',
    chara.get_colored_name(),
    "'s ",
    part,
    '?',
  ],
  /**
   * @param {CharaTalk} you
   * @param {PrintedSpan} item
   */
  get_itm_take_off_give_up: (you, item) => [
    you.get_colored_name(),
    ' gives up on removing ',
    item,
  ],

  /** @param {CharaTalk} chara */
  get_change_master_info: (chara) => [
    chara.get_colored_name(),
    ' seizes the lead',
  ],
  /** @param {CharaTalk} chara */
  get_escape_info: (chara) => [chara.get_colored_name(), ' escapes'],

  orgasm: 'came',
  orgasm_template: '%TIME%-fold climax',

  /**
   * Multi-orgasm report
   * @param {CharaTalk} chara climaxing character
   * @param {PrintedSpan} orgasm multi-orgasm name
   * @returns {TextContent}
   */
  get_chara_total_orgasm: (chara, orgasm) => [
    chara.get_colored_name(),
    ' has a ',
    orgasm,
  ],
  /**
   * Part orgasm report
   * @param {CharaTalk} chara climaxing character
   * @param {PrintedSpan} part climaxing part
   * @param {PrintedSpan} orgasm climax info
   * @returns {TextContent}
   */
  get_chara_part_orgasm: (chara, part, orgasm) => [
    chara.get_colored_name(),
    "'s ",
    part,
    ' ',
    orgasm,
  ],
  /**
   * Mental climax report
   * @param {CharaTalk} chara climaxing character
   * @param {PrintedSpan} cause cause (sadism or masochism)
   * @param {PrintedSpan} orgasm climax info
   * @returns {TextContent}
   */
  get_chara_spirit_orgasm: (chara, cause, orgasm) => [
    chara.get_colored_name(),
    ' ',
    orgasm,
    ' from ',
    cause,
  ],
  /**
   * Fluid report
   * @param {CharaTalk} chara character secreting fluid
   * @param {PrintedSpan} part secreting part
   * @param {[]} change secretion info
   * @returns {TextContent}
   */
  get_chara_have_liquid: (chara, part, change) => [
    chara.get_colored_name(),
    "'s ",
    part,
    ' ',
    ...change,
  ],
  liquid_amount_template: '%AMOUNT%ml',
  /**
   * Facial report
   * @param {CharaTalk} chara ejaculating character
   * @param {[]} targets facial targets
   * @param {PrintedSpan} semen volume
   * @returns {TextContent}
   */
  get_chara_cum_on_face: (chara, targets, semen) => [
    chara.get_colored_name(),
    ' paints ',
    ...targets,
    "'s face with ",
    semen,
    ' of cum',
  ],
  /**
   * @param {CharaTalk} chara ejaculating character
   * @param {PrintedSpan} semen volume
   * @returns {TextContent}
   */
  get_chara_cum_in_condom: (chara, semen) => [
    chara.get_colored_name(),
    ' dumps ',
    semen,
    ' of cum into the condom',
  ],
  /**
   * @param {CharaTalk} chara ejaculating character
   * @param {PrintedSpan} item onahole
   * @param {PrintedSpan} semen volume
   * @returns {TextContent}
   */
  get_chara_cum_in_artificial_vagina: (chara, item, semen) => [
    chara.get_colored_name(),
    ' dumps ',
    semen,
    ' of cum into the ',
    item,
  ],
  /**
   * @param {CharaTalk} chara ejaculating character
   * @param {CharaTalk} target target character
   * @param {string} part ejaculation location
   * @param {PrintedSpan} semen volume
   * @returns {TextContent}
   */
  get_chara_cum_in_part: (chara, target, part, semen) => [
    chara.get_colored_name(),
    ' dumps ',
    semen,
    ' of cum in ',
    target.get_colored_name(),
    "'s ",
    part,
  ],
  /**
   * @param {CharaTalk} chara ejaculating character
   * @param {PrintedSpan} semen volume
   * @returns {TextContent}
   */
  get_chara_cum: (chara, semen) => [
    chara.get_colored_name(),
    ' shoots ',
    semen,
    ' of cum',
  ],
  // Ejaculation locations
  cum_in_anal: 'ass',
  cum_in_body: 'body',
  cum_in_breast: 'cleavage',
  cum_in_clitoris: 'clit',
  cum_in_foot: 'feet',
  cum_in_hand: 'hands',
  cum_in_mouth: 'mouth',
  cum_in_penis: 'cock',
  cum_in_virgin: 'pussy',
  /**
   * Milk secretion report
   * @param {number} cid milking character
   * @param {[]} targets contact targets
   * @param {number} part contact part
   * @param {PrintedSpan} amount volume
   * @param {boolean} is_orgasm spray vs drip
   */
  get_milk_info(cid, targets, part, amount, is_orgasm) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push('into ', ...targets, "'s mouth");
        break;
      case part_enum.hand:
        actions.push('over ', ...targets, "'s fingers");
        break;
      case part_enum.foot:
        actions.push('under ', ...targets, "'s feet");
        break;
      case part_enum.penis:
        return ['coats ', ...targets, "'s cock with ", amount, ' of milk'];
      case part_enum.item:
        actions.push('into the ', {
          content: 'Breast Pump',
          color: buff_colors[2],
        });
        break;
      default:
        actions.push('onto ', ...targets);
    }
    if (get(`ex:${cid}:喷奶阻碍`) > 0) {
      actions.unshift('suddenly sprays ');
    } else if (is_orgasm) {
      actions.unshift('sprays ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case part_enum.hand:
        case part_enum.item:
          actions.unshift('leaks ');
          break;
        default:
          actions.unshift('drips ');
      }
    }
    actions.push(' ', amount, ' of milk');
    return actions;
  },
  /**
   * Love-juice secretion report
   * @param {number} cid secreting character
   * @param {[]} targets contact targets
   * @param {number} part contact part; 100 non-contact mouth, 101 non-contact penis
   * @param {PrintedSpan} amount volume
   */
  get_squirt_info(cid, targets, part, amount) {
    const actions = [];
    switch (part) {
      case part_enum.mouth:
        actions.push('into ', ...targets, "'s mouth");
        break;
      case part_enum.hand:
        actions.push('between ', ...targets, "'s fingers");
        break;
      case part_enum.foot:
        actions.push('under ', ...targets, "'s feet");
        break;
      case part_enum.penis:
        return ['pours ', amount, ' of juices over ', ...targets, "'s glans"];
      case 100:
        actions.push('toward ', ...targets, "'s lips");
        break;
      case 101:
        actions.push('toward ', ...targets, "'s cock");
    }
    if (get(`nowex:${cid}:潮吹`) > 0) {
      actions.unshift('squirts ');
    } else {
      switch (part) {
        case part_enum.mouth:
        case 100:
          actions.unshift('splashes ');
          break;
        default:
          actions.unshift('drips ');
      }
    }
    actions.push(' ', amount, ' of juices');
    return actions;
  },

  /**
   * Milking settlement
   */
  /**
   * @param {PrintedSpan} amount
   * @param {string} item
   * @returns {TextContent}
   */
  get_milk_ml: (amount, item) => [
    'Collected ',
    amount,
    'ml of ',
    item,
    ' with the breast pump',
  ],
  /**
   * @param {PrintedSpan} amount
   * @param {string} item
   * @returns {TextContent}
   */
  get_milk_item: (amount, item) => [
    ', bottled into ',
    amount,
    ' bottle(s) of ',
    item,
  ],
  /**
   * @param {PrintedSpan} amount
   * @param {CharaTalk} you
   * @returns {TextContent}
   */
  get_your_milk_info: (amount, you) => [
    ' (',
    amount,
    ' bottle(s) from ',
    you.get_colored_name(),
    ')',
  ],

  /**
   * Post-training summary report
   * @param {CharaTalk} taste Yayoi Akikawa / Northern Taste
   * @param {CharaTalk} minoru Hayakawa Tazuna / Harvest Time
   * @param {CharaTalk} riko Kashimoto Riko
   * @param {CharaTalk} glasse Bitter Glasse
   * @param {CharaTalk} cocon Little Cocoon
   */
  async ero_report(taste, minoru, riko, glasse, cocon) {
    taste.say_as_unknown('A N N O U N C I N G! Climax Report~♫');
    minoru.say_as_unknown('Here is a quick recap of this Umapyoi session~');
    // 1% chance Riko freezes up and Glasse/Cocon cheer
    if (Math.random() < 0.01) {
      await riko.say_as_unknown_and_wait("I… if you don't like it…");
      await cocon.say_as_unknown_and_wait('Trainer~');
      await glasse.say_as_unknown_and_wait('Go, Trainer~ go!');
      await riko.say_as_unknown_and_wait(
        '…Please turn on [Umapyoi Result Briefing] in the settings during the next Umapyoi…',
      );
      await riko.say_as_unknown_and_wait('…Oh~');
    } else {
      await riko.say_as_unknown_and_wait(
        "If you don't like this, please turn on [Umapyoi Result Briefing] in the settings during the next Umapyoi~",
      );
    }
  },
  // Unsatisfied part descriptions
  unsatisfied_mouth:
    'Unsatisfied lips still part slightly, as if hoping for more…',
  unsatisfied_nipple: 'Greedy little berries stand out, trembling…',
  unsatisfied_hidden_nipple:
    'Greedy little berries tremble as they rise past the pits that hid them…',
  unsatisfied_body:
    'A body still wanting affection glows with sweat and flush…',
  unsatisfied_penis: 'A cock on the edge still aches to strike…',
  unsatisfied_clitoris:
    'A fully swollen, flushed bead looks both lewd and pained…',
  unsatisfied_vagina: 'A twitching pussy breathes out heat in waves…',
  unsatisfied_sadism: 'Pleasure about to bloom from cruelty still lingers…',
  unsatisfied_sadism_zero_stamina:
    'Dreams of cruelty trouble a body that is finally still…',
  unsatisfied_masochism: 'Pleasure about to bloom from pain still lingers…',
  unsatisfied_masochism_zero_stamina:
    'Dreams of pain trouble a body that is finally still…',

  unsatisfied_lose_virgin_p:
    'But the wild force within never fully broke free…',
  unsatisfied_lose_virgin_v:
    'A body broken open never tasted true sweetness in that first forbidden bite…',
};
