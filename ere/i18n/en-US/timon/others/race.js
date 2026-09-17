/**
 * @file Race-related - system text
 * @author 黑奴队长
 * @author Katze (translator)
 * The last part is fucked up bruh
 */
const { get } = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  contestants_conjunction: ' and ',
  prepare_report_sim: 'Checking horseshoes…',
  /** @param {PrintedSpan} chara favorite contender name */
  get_prepare_report_high_mot: (chara) => [
    'The Favorite, ',
    chara,
    ', looks fired up today!',
  ],
  /** @param {PrintedSpan} chara favorite contender name */
  get_prepare_report_low_mot: (chara) => [
    'The Favorite, ',
    chara,
    ', does not look very motivated today!',
  ],
  /** @param {PrintedSpan} chara favorite contender name */
  get_prepare_report_normal_mot: (chara) => [
    'The Favorite, ',
    chara,
    ', looks about average on motivation today!',
  ],
  prepare_record_sim: 'Inspecting the track…',
  /**
   * @param {PrintedSpan} race race name
   * @param {string} uma Umamusume or Umamusuko
   */
  get_prepare_record_default: (race, uma) => [
    'On this ',
    race,
    ' stage, every racing ',
    uma,
    ' will give everything to bring everyone a dream.',
  ],
  /**
   * @param {PrintedSpan} chara favorite contender name
   * @param {string} uma Umamusume or Umamusuko
   */
  get_prepare_record_sats_sho: (chara, uma) => [
    chara,
    ' loads cleanly—feels like a future star ',
    uma,
    '.',
  ],
  /** @param {string} uma Umamusume or Umamusuko */
  get_prepare_record_toky_yus: (uma) => [
    'A once-in-a-lifetime Derby for racing ',
    uma,
    '—a winner is about to be decided.',
  ],
  /** @param {PrintedSpan} race race name */
  get_prepare_record_kiku_sho: (race) => [
    "This year's ",
    race,
    ' is a battlefield of rising contenders.',
  ],
  /** @param {PrintedSpan} chara favorite contender name */
  get_prepare_record_takz_kin: (chara) => [
    'Who is everyone dreaming of? My dream is ',
    chara,
  ],
  beginning_report_sim: [
    'Checking the starting gates…',
    'Checking the starter…',
    'Racers loading in…',
    "And they're off!",
  ],
  /**
   * @param {PrintedSpan} race race name
   * @param {string} gates number of entrants
   * @param {string} uma Umamusume or Umamusuko
   * @returns {TextContent}
   */
  get_beginning_report(race, gates, uma) {
    const buffer = [
      [
        ['Racing ', uma, ', please enter the Gates…'],
        ['All ', uma, ' set…'],
        'Ready…',
        '—Gates open!',
      ],
      [['Racing ', uma, ', ready…'], 'Set for the break…', 'Ready…', '—Break!'],
      [
        'The race is about to begin…',
        ['Entrants: ', gates, ' ', uma, '…'],
        [get('flag:当前年').toString(), ' ', race, '…'],
        '—Go!',
      ],
    ];
    return get_random_entry(buffer);
  },
  /** @param {string} uma Umamusume or Umamusuko */
  get_first_report_no_bad_start: (uma) => [
    "They're off—every ",
    uma,
    ' breaks level!',
  ],
  /**
   * @param {PrintedSpan} first first out of the gate
   * @param {PrintedSpan} last late breaker
   * @param {string} uma Umamusume or Umamusuko
   */
  get_first_report: (first, last, uma) => [
    "They're off! ",
    first,
    ' breaks first! The other ',
    uma,
    ' follow, and last is ',
    Math.random() < 0.5 ? 'slow out of the gate: ' : 'falling behind: ',
    last,
    '!',
  ],
  location_change_location_report_template: 'Entering %LANE%',
  get_location_change_slope_report: (up_slope) =>
    `On the ${up_slope ? 'uphill' : 'downhill'}`,
  get_location_change_slope_over_report: (up_slope) =>
    `Clearing the ${up_slope ? 'uphill' : 'downhill'}`,
  location_change_report_template: 'Now %MESSAGE%',
  location_in_order_report_template: 'Now on %LANE%',
  /**
   * @param {PrintedSpan} chara
   * @param {string} rank
   * @param {string} no
   * @returns {TextContent}
   */
  get_order_report(chara, rank, no) {
    return [`In ${rank} place, No. ${no} `, chara];
  },
  full_speed_push_reports: [
    (contestants) => [...contestants, ' kicks into a full sprint!'],
    (contestants) => [...contestants, ' keeps accelerating for the final win!'],
    (contestants) => [
      'Beyond the limit! ',
      ...contestants,
      ' is still accelerating!',
    ],
  ],
  lost_stamina_reports: [
    (contestants) => [...contestants, ', fading!'],
    (contestants) => [
      ...contestants,
      ' starts to stagger and can no longer hold the pace!',
    ],
    (contestants) => [...contestants, ' is slowing down!'],
    (contestants) => [...contestants, ' at the limit!?'],
  ],
  orgasm_reports: [
    (contestants) => [...contestants, ' looks flushed—giving everything…?'],
    (contestants) => ['Steam keeps rising off ', ...contestants, '!'],
    (contestants) => [
      'What left ',
      ...contestants,
      "'s racing silks that soaked…?",
    ],
    (contestants) => [
      ...contestants,
      ' stumbles for a step—but holds the pace!',
    ],
  ],
  loc_mind_nige_ex_reports: [
    (contestants) => [
      "A front-runner doesn't let anyone lead! Go, ",
      ...contestants,
      '!',
    ],
    (contestants) => [
      "That isn't your spot! ",
      ...contestants,
      ' is warning them with every stride!',
    ],
    (contestants) => [...contestants, ' is reclaiming the lead!'],
    (contestants) => [
      ...contestants,
      ' keeps accelerating—trying to run farther clear!',
    ],
  ],
  loc_mind_other_ex_reports: [
    (contestants) => [
      ...contestants,
      ' charges toward the position that should be theirs!',
    ],
    (contestants) => [
      "That isn't ",
      contestants.length > 1 ? 'your' : 'your',
      ' spot! Dig in, ',
      ...contestants,
      '!',
    ],
    (contestants) => [
      ...contestants,
      ' is fighting to take the position back!',
    ],
  ],
  loc_mind_nige_over_take_reports: [
    (contestants) => [
      ...contestants,
      ' goes straight for the lead without hesitation!',
    ],
    (contestants) => [...contestants, ' is hunting the lead!'],
    (contestants) => [...contestants, ' has eyes only for first!'],
  ],
  loc_mind_nige_speed_up_reports: [
    (contestants) => [
      ...contestants,
      ' keeps accelerating to open more ground!',
    ],
    (contestants) => [...contestants, ' is running even farther clear!'],
    (contestants) => [
      'Run, run to the edge of the world, ',
      ...contestants,
      '!',
    ],
  ],
  loc_mind_other_quick_reports: [
    (contestants) => [...contestants, ' refuses the gap and chases hard!'],
    (contestants) => ['Too far back! ', ...contestants, ' digs in and chases!'],
    (contestants) => [...contestants, ' is holding the gap tight!'],
  ],
  loc_mind_other_relax_reports: [
    (contestants) => [
      ...contestants,
      ' seems to be saving stamina—bold tactics!!',
    ],
    (contestants) => [...contestants, ' eases the rhythm—watch out!!'],
    (contestants) => [...contestants, ', slacking off is the real enemy!'],
  ],
  blocked_reports: [
    (contestants) => [...contestants, ' is blocked—what a shame!'],
    (contestants) => [...contestants, ' fails to break free!'],
    (contestants) => [...contestants, ' is trapped in the pack!'],
  ],
  temptation_reports: [
    (contestants) => [...contestants, ' looks a bit ragged—getting impatient!'],
    (contestants) => [...contestants, ' is getting flustered!'],
    (contestants) => [...contestants, ' falls into impatience!'],
  ],
  temp_end_reports: [
    (contestants) => [
      ...contestants,
      ' finally settles back into a clean rhythm!',
    ],
    (contestants) => [...contestants, ' seems to calm down!'],
    (contestants) => [...contestants, ' shakes off the impatience!'],
  ],
  temp_continue_reports: [
    (contestants) => [...contestants, ' still looks disordered—this is bad!'],
    (contestants) => [...contestants, ' is stuck deep in impatience!'],
    (contestants) => [
      'Calm down, ',
      ...contestants,
      "! Don't miss the timing!",
    ],
  ],
  temp_wrong_style_reports: [
    (contestants) => [...contestants, ' seems to have changed running style!'],
    (contestants) => [...contestants, ' is charging like mad—why!?'],
  ],
  /**
   * @param {PrintedSpan} target
   * @param {PrintedSpan} aim
   * @returns {TextContent}
   */
  get_compete_fight_report(target, aim) {
    return [target, ' locks onto ', aim, ' and picks up speed!'];
  },
  /**
   * @param {PrintedSpan} chara
   * @returns {TextContent}
   */
  get_final_push_report: (chara) => [chara, ' starts the final drive!'],
  /**
   * @param {TextContent} contestants
   * @param {boolean} at_same_time
   * @returns {TextContent}
   */
  get_final_push_multi_report(contestants, at_same_time) {
    return [
      ...contestants,
      at_same_time
        ? ' start the final drive together!'
        : ' almost start the final drive together!',
    ];
  },
  /**
   * @param {TextContent} contestants
   * @returns {TextContent}
   */
  get_final_push_follow_report(contestants) {
    return [...contestants, ' starts the final drive as well!'];
  },
  overtake_reports: [
    (top, over) => [over, ' blows past ', top, ' in a flash!'],
    (top, over) => [over, ' has the edge on ', top, ' in this duel!'],
    (top, over) => [
      'After clearing ',
      top,
      ", it's ",
      over,
      "'s moment to seize the win!",
    ],
    (top) => [top, ' still leads! Is the race sealed!?'],
  ],
  /**
   * @param {PrintedSpan} first
   * @param {PrintedSpan} second
   * @returns {TextContent}
   */
  get_battle_start_report(first, second) {
    return [first, ' and ', second, ' dig into a fierce duel!'];
  },
  battle_reports: [
    { w: 0.6, h: (first, second) => [first, '!', second, '!'] },
    {
      w: 0.3,
      h: (first, second) => [
        first,
        ' and ',
        second,
        ' are still locked—both giving everything for the win!',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        'Dead heat! Dead heat! Neither ',
        first,
        ' nor ',
        second,
        ' can pull free!',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        'Will it be ',
        first,
        ' or ',
        second,
        '!? Right down to the wire!',
      ],
    },
  ],
  top_reports: [
    (top) => [top, ' is glued to the lead!'],
    (top) => ['Too fast—too fast! ', top, ' is clear away!'],
    (top) => [top, ' is flying! Is this going all the way!?'],
    (top) => ['Still clear! Late-race ', top, ' looks untouchable!'],
    (top) => [top, ' is about to take the win!'],
    (top) => [top, '!', top, '!'],
  ],
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report(champion, bashin_behind) {
    return [champion, ' hits the wire first by ', bashin_behind, '!'];
  },
  /**
   * @param {PrintedSpan} champion
   * @param {string} bashin_behind
   * @returns {TextContent}
   */
  get_finish_report_begin_race(champion, bashin_behind) {
    return [
      champion,
      ' hits the wire first by ',
      bashin_behind,
      '!',
      Math.random() < 0.5
        ? ' Congrats on the debut!'
        : ' Looking forward to what comes next!',
    ];
  },
  ero_common_reports: [
    'Nngh… hhh… mmm…',
    "Something's running down with the sweat… is that my drool? ❤️❤️❤️",
    'Heavy breathing… can they hear it…? Stop panting ❤️❤️❤️',
    'Not enough… nowhere near enough ❤️❤️❤️',
    'Even climaxing mid-race would be fine, right? Nobody can tell— ❤️❤️❤️',
    "Ahh ❤️❤️❤️ heat is thrashing through me, can't take it ❤️❤️❤️",
  ],
  ero_team_reports: [
    'Are they watching? ❤️❤️❤️ It has to be so obvious ❤️❤️❤️',
  ],
  ero_breast_reports: [
    'Nipples teased nonstop ❤️❤️❤️ red, swollen, hard as pebbles ❤️❤️❤️',
  ],
  ero_penis_reports: [
    "So humiliating ❤️❤️❤️ but the urge to cum won't stop ❤️❤️❤️",
    'Cameras locked on lower body while running… need to cum ❤️❤️❤️ want to be watched while cumming until the legs give out ahhhh ❤️❤️❤️',
    'I can smell the pre… it hurts so bad oooohhh ahhh ❤️❤️❤️',
    'Nn ❤️❤️❤️… seed is going to spill…',
  ],
  ero_clitoris_reports: [
    'Clit forced into the open air, stiff and aching—too shameful— ❤️❤️❤️',
    'Clit pinched so hard… but it feels so good—slick juices pouring down ❤️❤️❤️',
    'Clit rock-hard and throbbing like an electric shock… ❤️❤️❤️',
    'Slick mess dripping down the thighs ❤️❤️❤️ everyone can see…!',
  ],
  ero_vagina_reports: [
    "Haa—once the toy is in, everything clamps down so tight I can't breathe, nnh… ❤️❤️❤️",
    'Legs and cunt both soaked ❤️❤️❤️ that slippery feel is so humiliating!',
    "Can't… the spasms inside are too strong ❤️❤️❤️…!",
    "No way ❤️❤️❤️ just holding this can't be enough ahhh— ❤️❤️❤️",
  ],
  ero_vagina_dildo_reports: [
    "The toy ❤️❤️❤️ is hammering the womb… and it's still not enough… ❤️❤️❤️",
    'Nn ❤️❤️❤️ shoved all the way deep ❤️❤️❤️ glug-glug… melting~ ❤️❤️❤️',
    'Thrust and grind—trying not to care only makes it worse ❤️❤️❤️ no…!',
    'Gonna climax from a dildo while racing nngh ohhh ❤️❤️❤️!',
  ],
  ero_anal_reports: [
    'Ass stretched open ❤️❤️❤️ burning, twitching… ❤️❤️❤️',
    'Haa ❤️❤️❤️ the friction in the hole is too much ooooh ❤️❤️❤️',
    'Don\'t let it slip free ❤️❤️❤️ that tense "about to push it out" feeling is dangerous ❤️❤️❤️',
  ],
  ero_tail_reports: [
    'That writhing feel ❤️❤️❤️ so strong… like a second tail ❤️❤️❤️',
  ],
  ero_in_body_reports: [
    'Auw ❤️❤️❤️ every stride makes the toy inside move— ❤️❤️❤️!',
  ],
  ero_multi_item_reports: [
    'Nn-ohhh ❤️❤️❤️ everything is vibrating all over ❤️❤️❤️—!',
  ],
  orgasm_common_reports: ['Oh-hohhh ❤️❤️❤️ hohhhhh ❤️❤️❤️—'],
  orgasm_breast_reports: [
    'Nipples went hard… ah ❤️❤️❤️ the body is shaking…',
    "Nipples—nipples so hard they feel like they'll split nngh ohhh ❤️❤️❤️!",
  ],
  orgasm_penis_reports: [
    "So hard down there… it's coming ❤️❤️❤️…!",
    '!!!—want to cum more— ❤️❤️❤️!',
  ],
  orgasm_clitoris_reports: [
    "Oh-ahh ❤️❤️❤️ the clit's going to be crushed ❤️❤️❤️",
  ],
  orgasm_vagina_reports: ["Womb spasming like it'll tear hohhhhhhh ❤️❤️❤️—!"],
  orgasm_vagina_dildo_reports: [
    'Cunt ❤️❤️❤️ is going to swell up from the dildo— ❤️❤️❤️',
  ],
  orgasm_anal_reports: [
    'If it comes out here, life will— ❤️❤️❤️ no ❤️❤️❤️',
    'Ah~ ❤️❤️❤️ ass fucked hot ❤️❤️❤️ in and out~ ❤️❤️❤️',
  ],
  orgasm_bv_reports: [
    'Tits and cunt both claimed by toys ❤️❤️❤️ juices spraying where no one can see ❤️❤️❤️ about to pant like a beast ❤️❤️❤️!',
  ],
  orgasm_va_reports: [
    "Cunt and ass both about to burst on hard toys ohhhhh ❤️❤️❤️ whole body feels like it'll rip ❤️❤️❤️—!",
  ],

  in_race_pregnant_info:
    '[A racer competing with a full belly has society in an uproar]',
  in_race_orgasm_info:
    '[A racer openly climaxing mid-race has shocked society]',
};
