/**
 * @file Held items - system text
 * @author 黑奴队长
 * @author Katze (translator)
 */
const { print, printAndWait } = require('#/era-electron');

module.exports = {
  single_vehicle_info_template:
    'Currently equipped for solo travel: %ITEM%. Unequip?',
  single_vehicle_canceled: 'Unequipped %ITEM%',
  single_vehicle_replace_confirm_template:
    'Currently equipped for solo travel: %ITEM%. Switch to %NEW%?',
  single_vehicle_equip_confirm_template:
    'Use %ITEM% for solo travel from now on?',
  single_vehicle_equip_template: 'Equipped %ITEM% as a solo vehicle',

  multiple_vehicle_info_template:
    'Currently equipped for outings with others: %ITEM%. Unequip?',
  multiple_vehicle_canceled: 'Unequipped %ITEM%',
  multiple_vehicle_replace_confirm_template:
    'Currently equipped for outings with others: %ITEM%. Switch to %NEW%?',
  multiple_vehicle_equip_confirm_template:
    'Use %ITEM% when going out with others from now on?',
  multiple_vehicle_equip_template: 'Equipped %ITEM% as a multi-person vehicle',

  no_glass_template: 'Nowhere to install %LENS%!',
  glass_have_lens_template: '%GLASS% already has %LENS% installed',
  glass_equip_confirm_template: 'Install %LENS% on %GLASS%?',
  glass_replace_confirm_template:
    'Install %NEW% on %GLASS%? This will destroy the existing %LENS%!',
  glass_equip_template: 'Installed %LENS% on %GLASS%',
  glass_lens_broken_template: '%LENS% was destroyed',

  use_mind_reader_select: 'Select how many Uma Whisperer Point Cards to use',
  use_mind_reader_confirm_template: 'Use %COUNT% Uma Whisperer Point Card(s)?',
  mind_reader_welcome_timer_template:
    'Welcome to the [Uma Whisperer] app! Your membership expires in %TIMER% week(s).',
  mind_reader_continue_timer_template:
    'Thanks for renewing [Uma Whisperer]! Your membership expires in %TIMER% week(s).',
  mind_reader_notify_timer_template:
    'Your membership expires in %TIMER% week(s).',

  in_ero_item_common_description: 'Can only be used during training',
  before_ero_item_common_description: 'Can only be used before training',

  drop_confirm_template: 'Discard %ITEM%?',
  async drop_quilt() {
    await printAndWait('Discarded [Transparent Quilt]...');
    await printAndWait('...But a few bills turned up inside before it went...');
  },
  async drop_family_uma_s() {
    await printAndWait('Discarded [Umapyoi S Family Pack]...');
    await printAndWait(
      '...Then got hit with a 100 UmaCoin fine for dumping chemicals.',
    );
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  use_inmon_item(chara, iname) {
    print([
      'Stuck ',
      iname,
      ' on ',
      chara.get_colored_name(),
      ' under the pretense of a "warm belly patch"...',
    ]);
    print([
      'An intricate lewd crest surfaces on ',
      chara.get_colored_name(),
      `'s lower belly...`,
    ]);
  },

  /**
   * @param {CharaTalk} chara
   * @param {string} iname
   */
  get_chara_use_medicine: (chara, iname) => [
    chara.get_colored_name(),
    ' took ',
    iname,
  ],
  /** @param {CharaTalk} chara */
  get_chara_use_milk_medicine: (chara) => [
    chara.get_colored_name(),
    ' has started lactating!',
  ],

  anti_condom_for_man: 'Men cannot use [Condom Dissolver]',
  anti_condom_duplicate: '[Condom Dissolver] has already been used',
  anti_condom_confirm: 'Use [Condom Dissolver]?',
  /**
   * @param {CharaTalk} you
   * @param {string} iname
   */
  async use_anti_condom(you, iname) {
    await printAndWait([
      you.get_colored_name(),
      ' drips a few drops of ',
      iname,
      ' near the labia',
    ]);
  },

  eat_chocolate_confirm: 'Eat [Valentine Chocolate]?',
  /** @param {CharaTalk} you */
  get_eat_chocolate_disabled: (you) => [
    you.get_colored_name(),
    ' is already full',
  ],

  /** @param {CharaTalk} chara */
  get_chara_pressure_down: (chara) => [
    chara.get_colored_name(),
    `'s pressure dropped`,
  ],
  /** @param {CharaTalk} chara */
  get_chara_lust_down: (chara) => [chara.get_colored_name(), `'s lust dropped`],
  /** @param {CharaTalk} chara */
  get_chara_all_down: (chara) => [chara.get_colored_name(), ' grew calmer'],
  /** @param {CharaTalk} chara */
  get_chara_lust_up: (chara) => [
    chara.get_colored_name(),
    ' got a little worked up',
  ],
  /** @param {CharaTalk} chara */
  get_chara_remove_fat: (chara) => [
    chara.get_colored_name(),
    ' no longer gains weight',
  ],
  /** @param {CharaTalk} chara */
  get_chara_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' no longer gets migraines',
  ],
  /** @param {CharaTalk} chara */
  get_chara_drink_tea: (chara) => [
    chara.get_colored_name(),
    ' drank [Health Tea]',
  ],

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_hate_drug(chara, you) {
    await printAndWait([
      'Secretly slipped [Hate Drug] to ',
      chara.get_colored_name(),
    ]);
    await printAndWait([
      chara.sex,
      `'s fondness for `,
      you.get_colored_name(),
      ' begins to fade...',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async drink_limit_drug(chara, you) {
    await printAndWait([
      'Secretly slipped [Suppression Drug] to ',
      chara.get_colored_name(),
    ]);
    await printAndWait([
      chara.sex,
      `'s romantic feelings for `,
      you.get_colored_name(),
      ' have been suppressed...',
    ]);
  },
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_fat: (chara) => [
    chara.get_colored_name(),
    ' temporarily stops gaining weight',
  ],
  /** @param {CharaTalk} chara */
  get_chara_temp_remove_headache: (chara) => [
    chara.get_colored_name(),
    ' temporarily stops getting migraines',
  ],

  to_sell_milk_template: 'Select how many bottles of %ITEM% to sell',
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   */
  get_sell_milk_confirm: (count, item) => [
    'Sell ',
    count,
    ' bottle(s) of ',
    item,
    ' on the dark web?',
  ],
  /**
   * @param {PrintedSpan} count
   * @param {string} item
   * @param {PrintedSpan} money
   */
  get_sell_milk_result: (count, item, money) => [
    'Sold ',
    count,
    ' bottle(s) of ',
    item,
    ' for ',
    money,
    ' UmaCoin',
  ],

  /** @param {CharaTalk} chara */
  async make_armpit_hair_longer(chara) {
    await printAndWait([
      'Used [Hair Growth Cream] on ',
      chara.get_colored_name(),
    ]);
    await printAndWait([
      chara.get_colored_name(),
      `'s underarm hair grows thicker`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent armpit hair growth level after removal
   */
  async make_armpit_hair_shorter(chara, talent) {
    await printAndWait([
      'Used [Hair Removal Cream] on ',
      chara.get_colored_name(),
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        `'s underarm hair grows more slowly`,
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        `'s underarms are smooth and bare!`,
      ]);
    }
  },
  /** @param {CharaTalk} chara */
  async make_pubic_hair_longer(chara) {
    await printAndWait([
      'Used [Private Hair Growth Cream] on ',
      chara.get_colored_name(),
    ]);
    await printAndWait([
      chara.get_colored_name(),
      `'s pubic hair grows thicker`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {number} talent pubic hair growth level after removal
   */
  async make_pubic_hair_shorter(chara, talent) {
    await printAndWait([
      'Used [Private Hair Removal Cream] on ',
      chara.get_colored_name(),
    ]);
    if (talent > 0) {
      await printAndWait([
        chara.get_colored_name(),
        `'s pubic hair grows more slowly`,
      ]);
    } else if (chara.sex_code > 0) {
      await printAndWait([
        chara.get_colored_name(),
        `'s private area is smooth and bare!`,
      ]);
    } else {
      await printAndWait([
        chara.get_colored_name(),
        `'s private area is now soft, pink, and completely bare!`,
      ]);
    }
  },

  fixer_start: '[Reality breach initializing...]',
  fixer_stop: '[Reality rules restored.]',
};
