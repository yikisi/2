/**
 * @file Call of Mejiro - System Messages
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  // Tip while partner is being called
  calling_tip: 'Mejiro is calling...',
  /**
   * While called, 5% chance all outing buttons become Mejiro City and use these labels
   * @type {string[]}
   */
  calling_buttons: ['Me', 'ji', 'ro', 'is', 'calling'],
  // Brought a partner who is not Mejiro's target
  calling_not_chara_tip: 'Mejiro is not calling this one',
  // Brought the Three Goddesses
  calling_god_tip:
    'Mejiro may not rank below the Three Goddesses—but never above them',
  // Already visited Mejiro City this week
  come_limited: 'Mejiro City cannot be found again this week',
  /**
   * Enter Mejiro City
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async come_in_mejiro_city(chara, you) {
    await printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' entered Mejiro City together...',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} location
   * @returns {TextContent}
   */
  get_header: (chara, location) => [
    'With ',
    chara.get_colored_name(),
    ' at ',
    location,
  ],

  /**
   * Call of Mejiro - Mist
   */

  /** After entering Mejiro City, note mist exploration */
  async misty_notify() {
    await printAndWait('...Then the mist swallows you both...');
  },
  /**
   * During exploration movement, describe lust state
   * @param {CharaTalk} chara partner
   * @param {CharaTalk} you player
   * @param {number} progress exit progress
   * @returns {TextContent[]}
   */
  get_misty_info(chara, you, progress) {
    const ret = [];
    const lust = Math.max(get('base:0:性欲'), get(`base:${chara.id}:性欲`));
    ret.push([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' stand on streets cloaked in mist...',
    ]);
    // Aroused
    if (lust >= 7500) {
      ret.push(
        'All around, paired crowds lose themselves in open lust—moans, the slap of flesh, and wet sounds fill the air.',
      );
    } else if (lust >= 5000) {
      // Uneasy
      ret.push(
        'Faceless lovers surround you, coupling and rocking; soft cries and wet sounds never stop.',
      );
    } else if (lust >= 4000) {
      ret.push(
        'Faceless couples surround you, stroking and teasing; moans and sticky wet sounds drift by now and then.',
      );
    } else if (lust >= 3000) {
      ret.push(
        'Paired partners surround you, embracing and kissing; whispered sweet talk drifts by now and then.',
      );
    } else if (lust >= 2000) {
      ret.push(
        'Shadowy pairs of travelers surround you; murky murmurs drift by now and then.',
      );
    }
    if (progress === 1) {
      ret.push('The mist ahead is thinning—you can see a bright, clean block.');
    } else if (progress >= 0.66) {
      ret.push(
        'The mist ahead grows a little thinner; sunlight filters through the clouds in scattered points.',
      );
    } else if (progress >= 0.33) {
      ret.push('The way back is gone. Forward seems to be the only option.');
    } else if (progress === 0) {
      ret.push(
        'A straight avenue runs ahead, though where it leads is unclear. Behind you, only murky gray remains.',
      );
    }
    return ret;
  },
  // Exploration options
  bt_slow_forward: 'Advance carefully (Low risk, Lust+++, Stamina--)',
  bt_normal_forward: 'Advance normally (Medium risk, Lust++, Stamina--)',
  bt_fast_forward: 'Advance boldly (High risk, Lust+, Stamina--)',
  bt_slow_search: 'Search thoroughly (Low risk, Lust++, Stamina---)',
  bt_normal_search: 'Search normally (Medium risk, Lust++, Stamina--)',
  bt_fast_search: 'Search roughly (High risk, Lust++, Stamina-)',
  bt_rest: 'Stop and rest (Lust++, Stamina+)',
  bt_surrender: 'Give in (Unity ❤️)',
  /**
   * Lust maxed out; escape fails
   * @param {CharaTalk} chara partner
   * @param {CharaTalk} you player
   * @returns {Promise<number[]>}
   */
  async fail_to_escape(chara, you) {
    const ret = [];
    await printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' are completely swallowed by the mist...',
    ]);
    await printAndWait(
      'Everywhere you look, beyond the fog, couples rut without restraint—faces that faintly resemble yours.',
    );
    await printAndWait(
      'Sex drowns out every other sound. The air reeks of heat...',
    );
    // Agitated
    if (get('base:0:性欲') >= 9000) {
      await printAndWait([
        you.get_colored_name(),
        ' hears blood roar in the skull as self-control shatters under a wave of filthy thoughts...',
      ]);
      await printAndWait([
        'Seeing ',
        chara.get_colored_name(),
        ' flushed the same way, thighs pressed tight, ',
        you.get_colored_name(),
        ' finally lets those thoughts take the wheel...',
      ]);
    } else {
      printButton('Sink into it (「Favor」+10)', 1);
      printButton('Try to stay calm (Stamina & Energy +50%)', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' looks at ',
          chara.get_colored_name(),
          '—dark currents stir in those eyes...',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' steps willingly into the mire of desire,',
        ]);
        await printAndWait([
          'falling together with ',
          chara.sex === 'She' ? 'her' : 'him',
          ', falling...',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' looks at ',
          chara.get_colored_name(),
          '—dark currents stir in those eyes...',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' panics and tries to pull free of the mire of desire,',
        ]);
        await printAndWait('but every step sinks deeper—until the fall...');
      }
    }
    return ret;
  },
  /**
   * Leave Mejiro City
   * @param {CharaTalk} chara partner
   * @param {CharaTalk} you player
   * @param {string|false} vehicle vehicle; false means no multi-seat vehicle
   * @param {boolean} success whether escape succeeded
   * @returns {Promise<number[]>}
   */
  async leave_misty(chara, you, vehicle, success) {
    if (success) {
      if (typeof vehicle === 'string') {
        await printAndWait([
          you.get_colored_name(),
          ' and ',
          chara.get_colored_name(),
          ' step out of the mist and find themselves beside ',
          vehicle,
          '.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' and ',
          chara.get_colored_name(),
          ' step out of the mist and find themselves beside a bus.',
        ]);
      }
    } else {
      await printAndWait([
        'When ',
        you.get_colored_name(),
        ' comes to, it is already on a bench outside Mejiro City, with a sleeping ',
        chara.get_colored_name(),
        ' nearby.',
      ]);
      await printAndWait([
        'Once ',
        chara.sex.toLowerCase(),
        ' wakes, you leave Mejiro City amid satisfied laughter from nowhere...',
      ]);
      await printAndWait([
        '...But from then on, ',
        chara.get_colored_name(),
        ' sometimes hears faint whispers that may or may not be real...',
      ]);
    }
  },
  /** Notice after Favor ticks down to zero */
  async notify_misty() {
    await printAndWait('Mejiro City is once again swallowed by mist...');
  },
  /**
   * Notice when the called target's San hits zero
   * @param chara
   * @returns {Promise<void>}
   */
  async notify_called(chara) {
    await printAndWait([
      chara.get_colored_name(),
      ' hears Mejiro calling from the whispers by the ear...',
    ]);
  },

  /**
   * Call of Mejiro - Streets
   */
  money_header_template: 'Current 「Favor」: %MONEY%',
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  print_city_info(chara, you) {
    print([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' stand on a clean street.',
    ]);
    print(
      'Under bright sunlight, paired people weave through the avenues and alleys.',
    );
  },
  city_change_target_template: 'Switch service target (now %NAME%)',
  city_upgrade_max: '(MAX)',
  city_leave: 'Leave',
  city_bt_beauty_salon: '「Beauty Salon」',
  city_bs_welcome: 'Welcome! Who will be receiving beauty services?',
  city_bs_height_up_template: 'Grow to %HEIGHT%cm (10「Favor」)',
  city_bs_height_up_limit_tip: 'Cannot grow any taller',
  city_bs_height_down_template: 'Shrink to %HEIGHT%cm (10「Favor」)',
  city_bs_height_down_limit_tip: 'Cannot get any shorter',
  city_bs_boob_up_template: 'Enlarge breasts (5「Favor」, currently %CUP% Cup)',
  city_bs_boob_up_limit_tip: 'Cannot go beyond [Huge Breasts]',
  city_bs_boob_down_template:
    'Reduce breasts (5「Favor」, currently %CUP% Cup)',
  city_bs_boob_down_limit_tip: 'Already flat as a board',
  city_bs_nipple_deeper: 'Deepen nipple pigmentation (5「Favor」)',
  city_bs_nipple_shallower: 'Clear nipple pigmentation (5「Favor」)',
  city_bs_clean_milk: 'Remove [Lactation] (30「Favor」)',
  city_bs_clean_milk_confirm:
    'This will undo that little modification of yours. Proceed?',
  city_bs_get_milk: 'Gain [Lactation] (30「Favor」)',
  city_bs_re_virgin: 'Restore virginity (20「Favor」)',
  city_bs_penis_bigger_man_template:
    'Enlarge penis (10「Favor」, currently %SIZE%)',
  city_bs_penis_bigger_woman_template:
    'Futanari transformation (10「Favor」, currently %SIZE%)',
  city_bs_penis_bigger_limit_tip: 'Cannot enlarge any further',
  city_bs_penis_smaller_man_template:
    'Reduce penis (10「Favor」, currently %SIZE%)',
  city_bs_penis_smaller_futa_template:
    'Feminization (15「Favor」, currently %SIZE%)',
  city_bs_penis_smaller_male_limit_tip: 'Cannot reduce any further',
  city_bs_penis_smaller_female_limit_tip: 'There was never anything there',
  city_bs_ero_deeper: 'Deepen genital pigmentation (5「Favor」)',
  city_bs_ero_deeper_limit_tip: 'Already a dark set of genitals',
  city_bs_ero_shallower: 'Lighten genital pigmentation (5「Favor」)',
  city_bs_ero_shallower_limit_tip: 'Already a pink set of genitals',
  city_bs_skin_shallower_template: 'Skin whitening (5「Favor」, now %SKIN%)',
  city_bs_skin_shallower_limit_tip: 'Skin cannot get any lighter',
  city_bs_skin_deeper_template: 'Skin tanning (5「Favor」, now %SKIN%)',
  city_bs_skin_deeper_limit_tip: 'Skin cannot get any deeper',
  city_bs_hair_color: 'Dye hair',
  city_bs_hair_color_confirm: 'What color would you like?',
  city_bs_hair_color_current_suffix: '(current hair color)',
  city_bs_uma_template: 'Transform into %UMA% (100「Favor」, irreversible!)',
  city_bs_body_hair_color: 'Change body hair color (1「Favor」)',
  city_bs_body_hair_color_current_suffix: '(current body hair color)',
  city_bs_change_done: 'All right—just relax, it will only take a moment~',
  city_bs_bye: 'See you next time~',
  city_bt_hospital: '「Hospital」',
  /**
   * Mejiro City Hospital intro
   * @param {function(TextContent):Promise} waiter_say_cb staff speech callback
   */
  async city_hospital_start(waiter_say_cb) {
    await waiter_say_cb(
      'Welcome to Mejiro City Hospital! Head colds, backaches, shaky hands, racing hearts, wobbly legs—we treat them all—',
    );
    await waiter_say_cb('...No guarantees, though...');
    await waiter_say_cb('Just kidding. How can we help?');
  },
  city_hp_hp_medicine_template: '「Power Pill」%PRICE%',
  city_hp_hp_medicine_price_template:
    '(%PRICE%「Favor」: bonus Stamina cap %NOW% → %NEXT%)',
  city_hp_tp_medicine_template: '「Focus Balm」%PRICE%',
  city_hp_tp_medicine_price_template:
    '(%PRICE%「Favor」: bonus Energy cap %NOW% → %NEXT%)',
  city_hp_b_scan: 'Ultrasound (-10「Favor」)',
  /**
   * Buy medicine at Mejiro City Hospital
   * @param {function(TextContent):Promise} waiter_say_cb staff speech callback
   * @param {string} medicine purchased medicine
   */
  async city_hospital_medicine(waiter_say_cb, medicine) {
    await waiter_say_cb(['Sure thing—one ', medicine, '~']);
    await waiter_say_cb('It should take effect in a week~');
  },
  /**
   * Ultrasound at Mejiro City Hospital
   * @param {function(TextContent):Promise} waiter_say_cb staff speech callback
   * @param {CharaTalk} father child's father
   * @param {CharaTalk} you player
   */
  async city_hospital_b_scan(waiter_say_cb, father, you) {
    await waiter_say_cb("Congratulations! Let's check on the baby's growth...");
    await printAndWait(
      [
        '<The monitor shows an image of the child. Strangely, ',
        you.get_colored_name(),
        ' can almost make out ',
        father.get_colored_name(),
        "'s face in the black-and-white picture>",
      ],
      { isParagraph: true },
    );
    await waiter_say_cb('So adorable! Does the baby look like anyone?');
  },
  city_bt_massage: '「Massage Parlor」',
  city_massage_welcome: 'We offer oil massages! Care to unwind?',
  city_mg_get_talent: 'Boost sexual talent in one area (60「Favor」)',
  city_mg_get_talent_limit_tip: 'No areas left to enhance',
  city_mg_trained_talent_template:
    'Increase areas trainable to max sensitivity%PRICE%',
  city_mg_trained_talent_price_template:
    '(25「Favor」: %NOW% areas → %NEXT% areas)',
  /**
   * Mejiro City Massage Parlor: gain a renowned-organ trait
   * @param {CharaTalk} target
   * @param {PrintedSpan} talent
   * @returns {TextContent}
   */
  get_city_massage_get_talent: (target, talent) => [
    target.get_colored_name(),
    ' gained ',
    talent,
    '!',
  ],
  /**
   * Mejiro City Massage Parlor: raise trainability
   * @param {CharaTalk} target
   * @returns {TextContent}
   */
  get_city_massage_upgrade_trained_talent: (target) => [
    target.get_colored_name(),
    ' feels silkier after the massage...',
  ],
  city_bt_library: '「Library」',
  city_library_welcome:
    'Welcome to Mejiro City Public Library! What would you like to borrow?',
  // Player learns Iron Will
  city_lb_self_get_im_template:
    '「Kiryuin Secret Horse Training Techniques」(10「Favor」→ %NAME% learns [Iron Will])',
  // Player forgets Iron Will
  city_lb_self_rm_im_template:
    '「My UmaWife and Me」(5「Favor」→ %NAME% forgets [Iron Will])',
  // Partner learns Iron Will
  city_lb_chara_get_im_template:
    '「The Sacred Steps」(5「Favor」→ %NAME% learns [Iron Will])',
  // Partner forgets Iron Will
  city_lb_chara_rm_im_template:
    '「Even Dense Guys Can Score! Secrets of the Love Track」(10「Favor」→ %NAME% forgets [Iron Will])',
  // Raise sexual skill level cap
  city_lb_update_abl_limit:
    '「Sex Skills 101 — Lust Ring Publishing」(66「Favor」)',
  /**
   * Handle reading at Mejiro City Library
   * @param {CharaTalk} target learner
   * @param {boolean} get_or_rm learn or forget Iron Will
   * @param {PrintedSpan} iron_mind Iron Will
   * @param {boolean} unlimit whether this was the skill-cap book
   * @returns {Promise<void>}
   */
  async handle_city_library(target, get_or_rm, iron_mind, unlimit) {
    if (unlimit) {
      await printAndWait('...What was that you just read?');
    } else if (get_or_rm) {
      await printAndWait([
        target.get_colored_name(),
        ' learned ',
        iron_mind,
        '!',
      ]);
    } else {
      await printAndWait([
        target.get_colored_name(),
        ' forgot ',
        iron_mind,
        '!',
      ]);
    }
  },
  city_lb_bye: 'Come again~',
  city_bt_arcade: '「Prize Box」',
  city_ac_welcome: 'Welcome to Mejiro City! Care to try your luck?',
  city_ac_confirm: 'Spend 2「Favor」 on a draw?',
  /**
   * Mejiro City jackpot
   * @param {function(TextContent):Promise} waiter_say_cb staff speech callback
   */
  async handle_ac_grand_prize(waiter_say_cb) {
    await waiter_say_cb('Jaaaaack~ pot~!');
    await waiter_say_cb('Ten times the ticket value, coming right up!');
    await printAndWait('Gained 20「Favor」!');
  },
  city_bt_newspaper: '「Newspaper」',
  /**
   * Newspaper office intro
   * @param {function(TextContent):Promise} waiter_say_cb staff speech callback
   */
  async city_newspaper_start(waiter_say_cb) {
    await waiter_say_cb('Welcome~');
    await waiter_say_cb(
      'Mejiro City News can restore your reputation—or spread your fame.',
    );
  },
  city_ns_welcome: 'How can we help?',
  city_ns_button_template: '%PRICE%「Favor」→ %HONOUR1%–%HONOUR2% Fame',
  city_ns_result_template: 'Understood—%HONOUR% Fame, coming right up~',
  city_ns_bye: 'Thanks for your business!',
  city_bt_bank: '「Bank」',
  city_bn_start: 'Welcome~',
  city_bn_welcome: 'Here for a withdrawal?',
  city_bn_button_template: '%PRICE%「Favor」→ %MONEY1%–%MONEY2% UmaCoin',
  city_bn_result_template:
    'Understood—withdrawing %MONEY% UmaCoin, coming right up~',
  city_bn_bye: 'Take care~',
  city_bt_gov: '「City Hall」',
  /**
   * City Hall: convert Mejiro City form
   * @param {CharaTalk} mayor
   * @returns {Promise<boolean>}
   */
  async handle_gov(mayor) {
    await mayor.say_and_wait('Welcome to Mejiro City.');
    await mayor.say_and_wait('How may I help you?');
    printButton('「Please spare me...」', 1);
    printButton('Nothing', 2);
    if ((await input()) === 1) {
      print(
        "(This is irreversible and will permanently change Mejiro City's style!)",
        { color: 'red' },
      );
      printButton('Confirm', 1);
      printButton('Never mind', 2);
      if ((await input()) === 1) {
        await mayor.say_and_wait('I understand.');
        await mayor.say_and_wait(
          'Next time you visit, Mejiro City will be as you wish.',
        );
        await mayor.say_and_wait('Farewell.');
        return true;
      }
    }
    await mayor.say_and_wait(
      'Enjoy your stay in Mejiro City with your companion~',
    );
    return false;
  },
  async city_notify_misty() {
    await printAndWait(
      'You leave the shop—and instead of a street, the outskirts lie before you.',
    );
    await printAndWait(
      'Looking back, Mejiro City is once again swallowed by mist...',
    );
  },
};
