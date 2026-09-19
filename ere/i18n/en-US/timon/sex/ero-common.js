/**
 * @file Training flavor - common
 * @author O口口口口口
 * @author 雞雞
 * @author 天马闪光蹄
 * @author 黑衣剑士-星爆气流斩准备就绪
 * @author 幽白書
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const { medicine_enum } = require('#/data/ero/item-const');
const { motion_enum, towards_enum } = require('#/data/ero/part-const');

module.exports = {
  /** Communication */
  /**
   * @author O口口口口口
   * @param {CharaTalk} chara current viewpoint character
   * @param {boolean} is_attacker whether current viewpoint character is the attacker
   */
  async after_refused(chara, is_attacker = true) {
    if (is_attacker) {
      await chara.say_and_wait("So it's really no good…");
      await chara.print_and_wait(
        'Even a lewd request that fits the mood still has its limits…',
      );
      await chara.print_and_wait(
        'And just like that—body still restless—this has to end here.',
      );
      await chara.print_and_wait('Still…');
    } else {
      await chara.print_and_wait("Don't look at me like that…");
      await chara.print_and_wait(
        "You can't seriously think every request is going to get a yes!",
      );
      await chara.print_and_wait('…Honestly.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'At a time like this, of course you want that…',
      );
      await attacker.print_and_wait([
        'Noticing where your eyes were lingering, eyes half-lidded, ',
        a_call_d,
        ' rises on tiptoe and brings those lips in first…',
      ]);
      await defender.say_and_wait('Chuu…❤️');
      await attacker.print_and_wait('A sweet taste that settles the heart…');
      await attacker.print_and_wait(
        'Breath from your nose brushes straight against that smooth neck, and those pretty lashes flutter in answer…',
      );
      await attacker.print_and_wait(
        "…Don't want to pull away… Let's just stay greedy and keep pressed together…",
      );
    } else {
      await defender.say_and_wait('Haah… haah…❤️');
      await defender.print_and_wait(
        'You should be satisfied by now… those lips that always chase back in…',
      );
      await defender.print_and_wait(
        'Nose and lips… most of the airway for breathing is claimed by that greedy partner, blowing a sticky, belly-tingling scent straight into your head on purpose…',
      );
      await defender.print_and_wait(
        "Nn… if I can never get used to lonely solo breathing again after this, you're taking responsibility…❤️",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   */
  async french_kiss(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait('Not content to stop at the lips.');
      await defender.say_and_wait('Nn—?');
      await attacker.print_and_wait([
        `Gradually boxed into the ${attacker.phy_sex_title}'s arms mid-kiss, `,
        defender.get_colored_name(),
        ' seems a little panicked, about to call ',
        attacker.get_colored_name(),
        "'s name—but an invasive tongue coils in and turns the sound thick and sweet.",
      ]);
      await attacker.print_and_wait(
        'Face to face when lips meet, then more as heads tip aside, and finally… hands locked behind a softening lover, lifting them for a tongue that works from above.',
      );
      await defender.say_and_wait("…Can't… breathe…", true);
    } else {
      await defender.print_and_wait("Head's spinning…");
      await defender.print_and_wait(
        'A hug, then a kiss so long you lose track of time—tongue greedy enough to push inside…',
      );
      await defender.print_and_wait(
        'How long has it been… Even the brief breaks between lips stay linked by sticky silver threads, like these mouths were never meant to part… Face burning red.',
      );
      await defender.print_and_wait("Still… I don't mind at all…");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} success whether the flirt succeeds
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async lure(attacker, defender, success, a_call_d) {
    if (success) {
      await attacker.print_and_wait([a_call_d, ' is getting worked up…']);
    } else if (era.get(`tcvar:${defender.id}:发情`)) {
      await attacker.print_and_wait([
        a_call_d,
        " can't get any more worked up…",
      ]);
    } else {
      await attacker.print_and_wait("But it doesn't seem very effective…");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async talk(attacker, defender, a_call_d) {
    if (
      !era.get(`cflag:${attacker.id}:种族`) &&
      era.get(`cflag:${defender.id}:种族`) > 0 &&
      Math.random() < 0.5
    ) {
      await attacker.say_and_wait([
        defender.uma_sex_title,
        "'s ears show emotion a lot like a certain animal.",
      ]);
      await attacker.print_and_wait('Getting glared at.');
      await attacker.say_and_wait(
        "…Hss… For example, when a cat's ears get hot…",
      );
      attacker.print('Got kicked in the butt.');
    } else if (attacker.sex_code !== 1 || defender.sex_code !== 1) {
      await attacker.say_and_wait('How many kids should we have later…');
      await attacker.print_and_wait([
        'Looking at ',
        a_call_d,
        "'s belly, the honest thought just slipped out.",
      ]);
      await attacker.print_and_wait('…No kick… and no answer.');
      attacker.print('…But that face is bright red.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async switch(attacker, defender, d_call_a) {
    await defender.say_and_wait('Eh…?');
    await defender.print_and_wait([
      'The ',
      d_call_a,
      " who'd been right there suddenly pulls back; pinned underneath, ",
      defender.get_colored_name(),
      ' blinks, too slow to react.',
    ]);
    await defender.print_and_wait('Then the world flips…');
    await attacker.say_and_wait("Now it's your turn.");
    await defender.print_and_wait([
      'Arms open, ',
      d_call_a,
      ' offers an encouraging smile.',
    ]);
    attacker.say('…You can do whatever you want.');
  },
  /**
   * @author O口口口口口
   * @author 幽白書
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in continuous resistance
   * @param {boolean} success whether resistance succeeds
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async resist(attacker, defender, is_first, success, a_call_d) {
    if (era.get('flag:惩戒力度') === 3) {
      // @author 幽白書
      if (attacker.id === 0) {
        // breeding sow resisting master
        if (success) {
          // resist success, breeding-sow POV
          await attacker.print_and_wait(
            'A breeding sow, and still trying to take the lead',
          );
          await attacker.print_and_wait(
            'Such insolence, and yet Master allows it',
          );
          await attacker.print_and_wait('A gift to this filthy broodmare?');
          await attacker.print_and_wait(
            'Or… just wanting a longer show of you drowning in lust on your own?',
          );
        } else {
          // resist fail, breeding-sow POV
          await attacker.print_and_wait(
            'As a breeding sow, submission is branded into the bottom of your mind',
          );
          await attacker.print_and_wait('So why try to resist?');
          await attacker.print_and_wait(
            'A last scrap of pride that refuses to fall?',
          );
          await attacker.print_and_wait(
            'Or… just craving the pleasure of being forced to obey even more?',
          );
        }
        // master resisting breeding sow
      } else if (success) {
        // resist success, breeding-sow POV
        await defender.print_and_wait(
          "No matter how hard you try, you can't fight the urge to submit",
        );
        await defender.print_and_wait(
          'One move from Master, and all resistance collapses',
        );
        await defender.print_and_wait(
          'Letting you lead was only so a breeding sow would learn obedience is nature…',
        );
      } else {
        // resist fail, master POV
        await attacker.print_and_wait([
          a_call_d,
          ' rocking, lost in lust and flesh',
        ]);
        await attacker.print_and_wait(
          'Hard to see any of that old Trainer composure',
        );
        await attacker.print_and_wait('Watch a little longer—just a little');
        await attacker.print_and_wait([
          'See how far the one who should be guiding, ',
          a_call_d,
          ', can still fall',
        ]);
      }
    } else {
      // @author O口口口口口
      if (is_first) {
        await defender.say_and_wait('Better stay still.');
        await attacker.print_and_wait([
          'Straddling ',
          attacker.get_colored_name(),
          ', ',
          a_call_d,
          ' licks those lips with an almost unfamiliar look.',
        ]);
        await attacker.print_and_wait(
          "But being pinned flat underneath… that's not something you can just get used to!",
        );
        await attacker.print_and_wait('……');
      }
      if (success) {
        await attacker.say_and_wait('Better stay still.');
        await attacker.print_and_wait([
          'Handing those same words straight back to ',
          a_call_d,
          ', watching that flustered face—right now ',
          attacker.get_colored_name(),
          "'s expression is pure smug victory.",
        ]);
      } else {
        const a_race = era.get(`cflag:${attacker.id}:种族`);
        const d_race = era.get(`cflag:${defender.id}:种族`);
        if (a_race === 0 && d_race > 0) {
          await attacker.say_and_wait(
            ["Humans really can't beat ", defender.uma_sex_title, '…'],
            true,
          );
        } else {
          await attacker.say_and_wait(
            ["I really can't beat ", a_call_d, '…'],
            true,
          );
        }
        await attacker.print_and_wait([
          'Pinned back under so easily, ',
          attacker.get_colored_name(),
          "'s head flashes that thought.",
        ]);
        if (a_race === 0 && d_race === 0) {
          await attacker.say_and_wait(
            ["Wait—you're not even ", defender.uma_sex_title, '!'],
            true,
          );
        } else if (a_race > 0 && d_race === 0) {
          await attacker.say_and_wait(
            ["Wait—I'm the ", attacker.uma_sex_title, ' here!'],
            true,
          );
        } else if (a_race > 0 && d_race > 0) {
          await attacker.say_and_wait(
            ["Wait—I'm a ", attacker.uma_sex_title, ' too!'],
            true,
          );
        }
        await attacker.say_and_wait('Guh…', true);
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async gargle(attacker, defender, a_call_d, d_call_a) {
    await era.printAndWait([
      attacker.get_colored_name(),
      '/',
      defender.get_colored_name(),
      '「',
      { color: attacker.color, content: 'Chuu…' },
      { color: defender.color, content: 'Nn…!?' },
      '」',
    ]);
    await era.printAndWait(
      'Lost in each other, lips lean in again—and part before they meet.',
    );
    await era.printAndWait(
      'Blinking hard in a fluster, scratching a head and looking away…',
    );
    await attacker.say_and_wait([a_call_d, '……']);
    await defender.say_and_wait([d_call_a, '……']);
    await era.printAndWait('Tap-tap-tap-tap…');
    await era.printAndWait('Glug-glug-glug————');
    await era.printAndWait(
      'Then there they are—cheeks puffed like hamsters, two red-faced idiots lined up at the sink.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   */
  async wipe_body(attacker, defender) {
    await defender.say_and_wait('Still… want more…?❤️');
    await attacker.print_and_wait(
      "That body should be clean, but it's covered in intimate marks now… maybe that was a bit much…",
    );
    await attacker.print_and_wait('……');
    await attacker.print_and_wait(
      '…Facing the pitiful, rumpled towel soaked in the filthy scent you smeared all over them, anyone with a scrap of empathy would think about dialing it back.',
    );
    await attacker.print_and_wait('…Right…?');
  },
  /** Caress */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.uma_sex_title,
        "'s ears really are something to dream about—whether as an extension of the body, of expression, or of… a sensitive zone…",
      ]);
      await attacker.print_and_wait([
        `Just a dragonfly-light brush of fingertips, and `,
        attacker.get_colored_name(),
        ` hasn't even finished savoring that fine texture against the pads before those long, pointed horse ears shyly slip free of the ${attacker.phy_sex_title}'s fingers.`,
      ]);
      await attacker.say_and_wait('…………');
      await defender.say_and_wait(
        "Please… touch them again. I won't run this time.",
      );
      await attacker.print_and_wait([
        'The ',
        a_call_d,
        ' in your arms is bright red now.',
      ]);
    } else {
      await attacker.print_and_wait('Hehe…');
      await attacker.print_and_wait(
        "A pair of horse ears that won't flee, fine down massaging your fingertips… body and heart both feel soothed.",
      );
      await attacker.print_and_wait("Is this a lover's privilege…?");
      await attacker.print_and_wait(
        "Still, you're a little curious about the state of things down there…",
      );
      await attacker.print_and_wait([
        'As if invisible threads link them, ',
        a_call_d,
        "'s legs quiver shamefully in time with the ",
        attacker.phy_sex_title,
        "'s hand stuck fast to those horse ears.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait('This is wrong…');
    await attacker.print_and_wait("…This isn't something a lover should do…");
    await attacker.print_and_wait('…But still');
    await attacker.print_and_wait([
      'Not content with gentle petting alone, the ',
      attacker.phy_sex_title,
      ' ruled by the urge rising from below gradually learns how to safely add force between the fingers…',
    ]);
    await attacker.print_and_wait([
      '…Enough to make the horse-eared ',
      defender.phy_sex_title,
      ' underneath understand when and where that blood-memory of swishing a tail for humans started waking up…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_breast_from_back(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'Not a shred of pity or satisfaction at ',
      a_call_d,
      "'s show of weakness—never one to settle easy, ",
      attacker.get_colored_name(),
      ' just pushes both hands further onto those beautiful breasts, drawn down and shaped by gravity like ripe apples.',
    ]);
    await defender.say_and_wait('Haah…');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' even tightens the five fingers cupping that full soft flesh, selfishly molding what belongs to ',
      a_call_d,
      ' into the shape only they favor.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_breast_first(attacker, defender, a_call_d) {
    if (era.get(`cflag:${defender.id}:成长阶段`) < 5) {
      await attacker.print_and_wait([
        defender.teen_sex_title,
        "'s softness… falls into your palms right now.",
      ]);
    } else {
      await attacker.print_and_wait(
        'Tempting softness… falls into your palms right now.',
      );
    }
    await attacker.print_and_wait(
      'Fingertips move on their own, impatient to stamp prints into that soft flesh and reshape it to suit you.',
    );
    await defender.say_and_wait('Nn…');
    await attacker.print_and_wait([
      a_call_d,
      "'s body sways with your fingers, voicing soft, intimate sounds… Haah—you have to admit, it feels too good to stop…",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async pet_breast(attacker, defender, a_call_d, d_call_a) {
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait([
      'Ah—even from here, you can tell… ',
      a_call_d,
      "'s body goes taut at your touch, then lonely without it…",
    ]);
    await defender.say_and_wait([d_call_a, '……']);
    await attacker.print_and_wait(
      'But you still want to be a little more selfish.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async pet_nipple(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait('So hot…');
      await attacker.print_and_wait(
        "Just a tiny nub set in pale breast flesh, yet it radiates heat that can't be ignored",
      );
      await defender.say_and_wait('Nn…');
      await attacker.print_and_wait(
        'Circling a finger around the areola, watching that pink point swell under the pad, stand, harden enough to push back against the finger…',
      );
      await attacker.print_and_wait(
        '…Then pressing a little harder to flatten it.',
      );
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait(
        defender.race > 0 ? 'Ah—got scolded by the tail.' : 'Ah—got hit.',
      );
    } else {
      await attacker.print_and_wait(
        'You might even squeeze milk out like this…',
      );
      await attacker.print_and_wait(
        'Those lewd, rock-hard nipples, fussed over without rest, make the thought hard to resist…',
      );
      await defender.say_and_wait('Yah—');
      await attacker.print_and_wait([
        'While ',
        a_call_d,
        ' is looking down and distracted by panting, you try lifting the nipple with your fingers…',
      ]);
      await attacker.print_and_wait('That flustered look is delicious.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Spreading ',
        a_call_d,
        `'s legs and staring straight at ${defender.sex === 'She' ? 'her' : 'his'} bare lower half…`,
      ]);
      await attacker.print_and_wait(
        'No turning back now… and that only fires you up more…',
      );
      await attacker.print_and_wait(
        'Fingers roll back the hood over that little pink nub; the sensitive clit, exposed to air, shifts from cute pink to a deeper, flushed red.',
      );
      await attacker.print_and_wait("…Don't worry. I'll be gentle with it");
    } else {
      await defender.say_and_wait('Nn…');
      await attacker.print_and_wait(
        "Aaah—before you noticed, it's already this red, swollen, pitiful little thing.",
      );
      await attacker.print_and_wait([
        'Just simple touch plus a little patience, and this tiny sensitive peak makes ',
        a_call_d,
        "'s flawless body move so wantonly…",
      ]);
      await defender.say_and_wait('Yah—');
      await attacker.print_and_wait('Look one more time. The last time.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   */
  async finger_fuck(attacker, defender) {
    await defender.say_and_wait('Nn…');
    await attacker.print_and_wait(
      'The body is still a little stiff, yet the pussy swallows the tip of your index finger through the first knuckle without effort…',
    );
    await attacker.print_and_wait('The finger is kissed with heat.');
    await attacker.print_and_wait(
      "Hook up, stroke down, follow the walls' flutter—toward both sides…",
    );
    await attacker.print_and_wait(
      "Haah… clamp that tight and I won't be able to keep going.",
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   */
  async prepare_virgin_uma(attacker, defender) {
    await attacker.print_and_wait([
      'Carefully easing two fingers in, parting the narrow slit open before your eyes, ',
      defender.teen_sex_title,
      ' turning that tight little hole inside out.',
    ]);
    await attacker.print_and_wait('So beautiful…');
    await defender.say_and_wait("Don't stare so hard…");
    await attacker.print_and_wait(
      'The wildly thrashing tail complains like that—but still…',
    );
    await defender.say_and_wait('Nn—');
    await attacker.print_and_wait(
      'Hah—you can feel it as your fingers open the hole deeper: heat squeezed from inside between your fingers, a dizzying itch of breath.',
    );
    await attacker.print_and_wait('One more finger should be fine.');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        `Wanting to make ${defender.sex.toLowerCase()} feel even better, wanting ${defender.sex === 'She' ? 'her' : 'his'} pussy softer, wanting this beautiful body to writhe more helplessly under your hands…`,
      ]);
      await defender.say_and_wait('Haah… haah…');
      await attacker.print_and_wait(
        "You're only moving your fingers, but runaway desire still leaves you short of breath.",
      );
      await attacker.print_and_wait('Where is it… It should be close…');
      await attacker.print_and_wait('……');
      await defender.say_and_wait('…');
      await attacker.print_and_wait([
        'Nn—',
        a_call_d,
        'Compared to the surrounding walls, that slight rise pulls your finger in on its own—then the unique heat and slick feel of that little mound… And the answer key is ',
      ]);
      await attacker.print_and_wait(
        ' suddenly arching, legs clamping the offending arm.',
      );
    } else {
      await attacker.print_and_wait('…Found it.');
      await attacker.print_and_wait('Press.');
      await attacker.print_and_wait('Rub.');
      await attacker.print_and_wait('Prod.');
      await attacker.print_and_wait([
        'Tease with the blunt edge of a nail.',
        defender.get_colored_name(),
        'Until these hands are satisfied, teach the sweat-slick ',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async pet_anal(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait(
        ' already melted to mush why pleasure is called poison.',
      );
      await attacker.print_and_wait([
        'Nngh—!?',
        defender.adult_sex_title,
        'A little late, but the ass ',
        attacker.get_colored_name(),
        ' clearly catches your intent—fingers from ',
      ]);
      await attacker.print_and_wait([
        ' drawing near in a teasing way, rough enough to put the body on just the right edge of alert, circling that tiny hole.',
        a_call_d,
        "And that 'just right' alert… shows in ",
        defender.race > 0 ? 'and that dizzy horse tail…' : '',
      ]);
    } else {
      await defender.print_and_wait(
        'So… do you actually want to go there or not…',
      );
      await defender.print_and_wait([
        `Is it… just me…`,
        d_call_a,
        `…seems especially fond of this push-and-pull rhythm…`,
      ]);
      await defender.print_and_wait(
        "Can't keep the body tensed—your ass hole, melted by teasing touches, has already loosened into a sex hole that could swallow almost anything.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async prepare_anal(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      `Palm reading the teasing heat panting from the twitching hole ahead, four fingers pin like stakes the ass cheeks trying to close that shy meat and escape the ${attacker.phy_sex_title}'s gaze.`,
    );
    await attacker.print_and_wait(
      "Only the long middle finger has other business—curved like a scorpion's tail, easing toward the rear hole, then a slow, firm push in.",
    );
    await attacker.print_and_wait('The resistance is strong.');
    await attacker.print_and_wait([
      'Walls writhing on their own push back against ',
      attacker.get_colored_name(),
      `'s finger as if alive—meat that wasn't built for sex like the hole next door, yet now greets the ${attacker.phy_sex_title}'s finger with surprising eagerness.`,
    ]);
    await attacker.print_and_wait('Afraid… or delighted…?');
    await attacker.print_and_wait([
      'Even panting ',
      a_call_d,
      " can't tell what that current means—the one climbing the spine from a shyly fluttering rear hole and making the whole body shake.",
    ]);
    await defender.say_and_wait(
      'Deeper… again… the first knuckle… already all the way…',
      true,
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   */
  async pet_leg(attacker, defender, is_first) {
    if (is_first) {
      if (attacker.id === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          "As a Trainer, eyeing and stroking your trainee's legs with sexual intent…",
        );
        await attacker.print_and_wait(
          "Just describing what's happening now in restrained words is enough for cold thrills of wrongness to race through the body.",
        );
        await attacker.print_and_wait(
          "After training you sometimes touch to check condition, don't you…",
        );
        await attacker.print_and_wait(
          "Weirdly, though, right now these legs won't link to 'racing' in your head at all",
        );
      }
      await attacker.print_and_wait('All you can think about is…');
      await attacker.print_and_wait(
        'Having these legs crossed and locked around your waist would feel amazing.',
      );
    } else {
      await attacker.print_and_wait('Soft and springy.');
      await attacker.print_and_wait('Elegant, long curves.');
      await attacker.print_and_wait(
        "Sensitive enough to tremble from a finger's caress.",
      );
      if (defender.race > 0) {
        await attacker.print_and_wait('What a waste…');
        await attacker.print_and_wait(
          'Legs like these existing only for races…',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   */
  async pet_tail(attacker, defender) {
    await attacker.print_and_wait('A pretty fresh experience.');
    if (defender.sex_code !== 1) {
      await attacker.print_and_wait([
        "After all, it's the tail growing from the base of an ",
        defender.uma_sex_title,
        "'s coccyx—usually swaying behind that school skirt like visible wind.",
      ]);
    }
    await attacker.print_and_wait(
      'Humming while you stroke gently, fingers climbing the sleek tail hair until both hands are thoroughly marked by the private scent at the root…',
    );
    await attacker.print_and_wait('Ah… come to think of it…');
    await defender.say_and_wait('No smelling!', true);
    await attacker.print_and_wait(
      'As if scolded exactly like that, the hand you meant to lift is wound tight by the tail and pinned still.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pull_tail(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('Ooh～');
      await attacker.print_and_wait([
        'The languid moan from ',
        a_call_d,
        ' underneath is pure poison.',
      ]);
      await attacker.print_and_wait(
        `Once you learn a tug on the tail makes the ${defender.uma_sex_title} in front go pliant and obedient, the heat rising from your lower belly gets even harder to hold back.`,
      );
    } else {
      await defender.say_and_wait('Nn—');
      await attacker.print_and_wait(
        'Just a little more force and the ass lifts—but let go then, and even the hips drop…',
      );
      await attacker.print_and_wait([
        "Hey… do you even know what kind of show you're putting on in front of a ",
        attacker.phy_sex_title,
        ', you poor ',
        a_call_d,
        '?',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('Nnnnn————');
      await attacker.print_and_wait(
        'No reason not to take it into your mouth—no reason not to peel that swollen little bean, thick with lewd female scent, free of its hood and leave it bare and trembling alone.',
      );
      await attacker.print_and_wait([
        'So ',
        attacker.get_colored_name(),
        ' leans down deep and buries a head between ',
        a_call_d,
        "'s widely spread legs.",
      ]);
      await attacker.print_and_wait('Thighs flinching shut are trembling.');
      await attacker.print_and_wait(
        'Knees hooked around your waist are trembling.',
      );
      await attacker.print_and_wait(
        'Feet locked behind your back are trembling.',
      );
      await attacker.print_and_wait('Ah… why did it suddenly turn into this…');
      await attacker.print_and_wait(
        'Surely not because of this little bean the tongue is licking even wetter.',
      );
    } else {
      await attacker.print_and_wait('Flick with the tip of the tongue.');
      await attacker.print_and_wait('Suck until it stands.');
      await attacker.print_and_wait('Blow a soft breath over it.');
      await attacker.print_and_wait('A little frustrating, honestly…');
      await attacker.print_and_wait([
        'If every kind of tease on this clit makes ',
        a_call_d,
        ' tremble the same way in pleasure, how are you supposed to know which one is the favorite.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Please…');
      await defender.print_and_wait([
        'Still shy, but ',
        d_call_a,
        ' uses both hands to help spread those trembling legs toward you',
      ]);
      await defender.say_and_wait('Nnnnn————');
      await defender.print_and_wait(
        'No reason not to take it into your mouth—no reason not to peel that swollen little bean, thick with lewd female scent, free of its hood and leave it bare and trembling alone.',
      );
      await defender.print_and_wait([
        'So ',
        defender.get_colored_name(),
        ' leans down deep and buries a head between ',
        d_call_a,
        "'s widely spread legs.",
      ]);
      await defender.print_and_wait('Thighs flinching shut are trembling.');
      await defender.print_and_wait(
        'Knees hooked around your waist are trembling.',
      );
      await defender.print_and_wait(
        'Feet locked behind your back are trembling.',
      );
      await defender.print_and_wait('Ah… why did it suddenly turn into this…');
      await defender.print_and_wait(
        'Surely not because of this little bean the tongue is licking even wetter.',
      );
    } else {
      await defender.print_and_wait('Flick with the tip of the tongue.');
      await defender.print_and_wait('Suck until it stands.');
      await defender.print_and_wait('Blow a soft breath over it.');
      await defender.print_and_wait('A little frustrating, honestly…');
      await defender.print_and_wait([
        'If every kind of tease on this clit makes ',
        d_call_a,
        ' tremble the same way in pleasure, how are you supposed to know which one is the favorite.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async force_cunnilingus(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Please～');
      await defender.print_and_wait([
        'Legs already open, ',
        d_call_a,
        ' looks down expectantly at ',
        defender.get_colored_name(),
        ', hands guiding the dazed ',
        defender.get_colored_name(),
        "'s head lower.",
      ]);
      await defender.say_and_wait('Nnnnn————');
      await defender.print_and_wait(
        'No reason not to take it into your mouth—no reason not to peel that swollen little bean, thick with lewd female scent, free of its hood and leave it bare and trembling alone.',
      );
      await defender.print_and_wait([
        'So ',
        defender.get_colored_name(),
        ' leans down deep and buries a head between ',
        d_call_a,
        "'s widely spread legs.",
      ]);
      await attacker.say_and_wait('Haah❤️');
      await defender.print_and_wait(
        "You're the one who asked for something dirty, yet now you're rocking without restraint…",
      );
      await defender.print_and_wait('Thighs flinching shut are trembling.');
      await defender.print_and_wait(
        'Knees hooked around your waist are trembling.',
      );
      await defender.print_and_wait(
        'Feet locked behind your back are trembling.',
      );
      await defender.print_and_wait('Ah… why did it suddenly turn into this…');
      await defender.print_and_wait(
        'Surely not because of this little bean the tongue is licking even wetter.',
      );
    } else {
      await defender.print_and_wait('Flick with the tip of the tongue.');
      await defender.print_and_wait('Suck until it stands.');
      await defender.print_and_wait('Blow a soft breath over it.');
      await defender.print_and_wait('A little frustrating, honestly…');
      await defender.print_and_wait([
        'If every kind of tease on this clit makes ',
        d_call_a,
        ' tremble the same way in pleasure, how are you supposed to know which one is the favorite.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   */
  async suck_virgin(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait(
        'A scent that spikes the pulse… sweet-sour musk melting from tongue-tip through the whole body…',
      );
      await attacker.print_and_wait(
        'In this intimate oral link, which side came first, really…',
      );
      await attacker.print_and_wait('Softness against softness.');
      await attacker.print_and_wait(
        'A tongue forced into a whistle-shape, easing deeper into the tunnel, meeting walls that flutter greenly against the warm tease…',
      );
      await attacker.print_and_wait(
        'Neither side has a good reason to give ground…',
      );
    } else {
      await attacker.print_and_wait("Maybe it's time for something else.");
      await attacker.print_and_wait(
        'Hard to remember how it first closed into a pure little slit—licked wet inside and out by a tongue that keeps coming back, the hole now flutters open and exposed…',
      );
      await attacker.print_and_wait(
        "And those legs that once clamped a bad kid's waist have somehow come loose, leaving only toes pointed high like a ballerina's.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('Haah…');
      await defender.print_and_wait([
        d_call_a,
        ' is parting those pink folds with fingers right in front of you—so what you need to do next is obvious…',
      ]);
      await defender.print_and_wait(
        'A scent that spikes the pulse… sweet-sour musk melting from tongue-tip through the whole body…',
      );
      await defender.print_and_wait(
        'In this intimate oral link, which side came first, really…',
      );
      await defender.print_and_wait('Softness against softness.');
      await defender.print_and_wait(
        'A tongue forced into a whistle-shape, easing deeper into the tunnel, meeting walls that flutter greenly against the warm tease…',
      );
      await defender.print_and_wait(
        'Neither side has a good reason to give ground…',
      );
    } else {
      await defender.print_and_wait(
        'No request to stop has come, so this tongue has no reason to quit halfway.',
      );
      await defender.print_and_wait('Still…');
      await defender.print_and_wait("Maybe it's time for something else.");
      await defender.print_and_wait(
        'Hard to remember how it first closed into a pure little slit—licked wet inside and out by a tongue that keeps coming back, the hole now flutters open and exposed…',
      );
      await defender.print_and_wait(
        "And those legs that once clamped a bad kid's waist have somehow come loose, leaving only toes pointed high like a ballerina's.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async force_suck_virgin(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('Nn—');
      await defender.print_and_wait(
        'Head forced down hard—the lips that parted in a startled cry meet a shameless pussy at once.',
      );
      await defender.print_and_wait(
        'A scent that spikes the pulse… sweet-sour musk melting from tongue-tip through the whole body…',
      );
      await defender.print_and_wait(
        'In this intimate oral link, which side came first, really…',
      );
      await defender.print_and_wait('Softness against softness.');
      await defender.print_and_wait(
        'A tongue forced into a whistle-shape, easing deeper into the tunnel, meeting walls that flutter greenly against the warm tease…',
      );
      await defender.print_and_wait(
        'Neither side has a good reason to give ground…',
      );
    } else {
      await attacker.say_and_wait('Haah～');
      await defender.print_and_wait([
        'Looks satisfied—like chugging a huge gulp of cold beer—',
        d_call_a,
        ' lets out a long, happy breath.',
      ]);
      await defender.print_and_wait("Maybe it's time for something else.");
      await defender.print_and_wait(
        'Hard to remember how it first closed into a pure little slit—licked wet inside and out by a tongue that keeps coming back, the hole now flutters open and exposed…',
      );
      await defender.print_and_wait(
        "And those legs that once clamped a bad kid's waist have somehow come loose, leaving only toes pointed high like a ballerina's.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   */
  async blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(
        'The sight in front of you really does make guilt well up…',
        true,
      );
      if (attacker.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait(
          'Umamusume and cock—two words that barely ever meet—are stuck together sticky-sweet right now…',
        );
      }
      await attacker.print_and_wait(
        'Your lips are forced wide around a cock; the place meant for taking in nourishment is claimed by that hard, upright trouble, freely pouring out a filthy scent that makes the body go strange.',
      );
      await attacker.print_and_wait(
        'The crouched body starts to tremble… why…',
      );
      await attacker.print_and_wait('This really is a little weird… right?');
    } else {
      await attacker.say_and_wait('Slurp-slurp～～');
      await attacker.print_and_wait(
        'Getting a little better at this without noticing…',
      );
      await attacker.print_and_wait(
        'Tip the head back a little and more of that cock fits in…',
      );
      await attacker.print_and_wait(
        'A flattened tongue licking lightly from the side makes it twitch in pleasure.',
      );
      await attacker.print_and_wait('And if you put the lips to work… suck…');
      await attacker.print_and_wait(
        'Cough… the thick, embarrassing taste flooding in makes your head spin…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Please—');
      await defender.print_and_wait([
        'The ',
        d_call_a,
        ` in front suddenly says something that turns faces red.`,
      ]);
      await defender.print_and_wait(
        'Springing a request like this—even if you get refused and kicked away, no complaining…',
      );
      await attacker.say_and_wait(
        'The sight in front of you really does make guilt well up…',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          'Umamusume and cock—two words that barely ever meet—are stuck together sticky-sweet right now…',
        );
      }
      await defender.print_and_wait(
        'Your lips are forced wide around a cock; the place meant for taking in nourishment is claimed by that hard, upright trouble, freely pouring out a filthy scent that makes the body go strange.',
      );
      await defender.print_and_wait(
        'The crouched body starts to tremble… why…',
      );
      await defender.print_and_wait('This really is a little weird… right?');
    } else {
      await defender.print_and_wait(
        'Asking for the same thing over and over is totally unfair…',
      );
      await defender.say_and_wait('Slurp-slurp～～');
      await defender.print_and_wait(
        'Getting a little better at this without noticing…',
      );
      await defender.print_and_wait(
        'Tip the head back a little and more of that cock fits in…',
      );
      await defender.print_and_wait(
        'A flattened tongue licking lightly from the side makes it twitch in pleasure.',
      );
      await defender.print_and_wait('And if you put the lips to work… suck…');
      await defender.print_and_wait(
        'Cough… the thick, embarrassing taste flooding in makes your head spin…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('Open your mouth.');
      await defender.print_and_wait(
        'Maybe struggling would help… you think that, but the hand keeps pressing your body lower…',
      );
      await defender.say_and_wait('Nn…');
      await attacker.say_and_wait(
        'The sight in front of you really does make guilt well up…',
        true,
      );
      if (defender.race > 0 && defender.sex_code !== 1) {
        await defender.print_and_wait(
          'Umamusume and cock—two words that barely ever meet—are stuck together sticky-sweet right now…',
        );
      }
      await defender.print_and_wait(
        'Your lips are forced wide around a cock; the place meant for taking in nourishment is claimed by that hard, upright trouble, freely pouring out a filthy scent that makes the body go strange.',
      );
      await defender.print_and_wait(
        'The crouched body starts to tremble… why…',
      );
      await defender.print_and_wait('This really is a little weird… right?');
    } else {
      await defender.say_and_wait('Haah…', true);
      await defender.say_and_wait('Still… want more…', true);
      await defender.say_and_wait('Slurp-slurp～～');
      await defender.print_and_wait(
        'Getting a little better at this without noticing…',
      );
      await defender.print_and_wait(
        'Tip the head back a little and more of that cock fits in…',
      );
      await defender.print_and_wait(
        'A flattened tongue licking lightly from the side makes it twitch in pleasure.',
      );
      await defender.print_and_wait('And if you put the lips to work… suck…');
      await defender.print_and_wait(
        'Cough… the thick, embarrassing taste flooding in makes your head spin…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async deep_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('If I do it like this…');
      await attacker.say_and_wait('Nn…');
      await attacker.print_and_wait("It's a little hard… but still…");
      await attacker.print_and_wait('Taking it deeper…');
      await attacker.say_and_wait(
        ['This should feel good… my…', a_call_d, '❤️'],
        true,
      );
      await attacker.say_and_wait('Slurp-slurp…');
      await attacker.print_and_wait(
        'Of the two here, at least one nameless lewd soul is already stealing forbidden pleasure from this filthy pose, enough to smooth the brow.',
      );
      await attacker.print_and_wait([
        '…And so, from this moment on, ',
        attacker.get_colored_name(),
        "'s little mouth gains a purpose beyond taking in nourishment—sinking into a lewd sex organ that wetly winds around a cock. Too late to take that back❤️",
      ]);
      await attacker.print_and_wait(
        'Meeting the head with soft throat flesh, tracing swollen veins with a clever tongue-tip, lifting the shaft with suction that needs no air…',
      );
      await attacker.print_and_wait([
        'What are you learning, remembering, becoming… the one crouched under ',
        a_call_d,
        ' right now, ',
        attacker.get_colored_name(),
        '。',
      ]);
    } else {
      if (defender.race > 0) {
        await attacker.print_and_wait([
          ' has already found enough leeway to serve a cock with wet throat sounds while still swaying a tail—',
          attacker.get_colored_name(),
          ' has unexpected talent at this, beyond ',
          a_call_d,
          "'s expectations.",
        ]);
        await attacker.print_and_wait([
          'From the corner of an eye, watching ',
          a_call_d,
          ` tip a head back drawing breath, `,
          attacker.get_colored_name(),
          "—too busy to hum—flicks those ears in a way that's easy to read.",
        ]);
      }
      await attacker.say_and_wait('Haah… haah…❤️');
      await attacker.print_and_wait('Swallow…');
      await attacker.print_and_wait([
        'For necessary air, ',
        attacker.get_colored_name(),
        ' swallows hard around the cock—taking in a mix of cock-scent… no, more accurately, cock-stink mixed with oxygen.',
      ]);
      await attacker.print_and_wait([
        'Pre and the drool ',
        attacker.get_colored_name(),
        " can't hold back, mouth stuffed full, get churned by repeated oral thrusts into a sticky clear silk that pulls in long threads…",
      ]);
      await attacker.say_and_wait('Nn… nnnnn…');
      await attacker.print_and_wait(
        "Well—even doing this over and over, you probably won't forget how to talk.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Want it… deeper…');
      await defender.print_and_wait([
        'Muttering greedily, ruled by the need for pleasure, ',
        d_call_a,
        ' lifts those hips.',
      ]);
      await defender.print_and_wait('Taking it deeper…');
      await defender.print_and_wait('Hitting… the deepest point…');
      await defender.say_and_wait('Slurp-slurp…');
      await defender.print_and_wait(
        'Of the two here, at least one nameless lewd soul is already stealing forbidden pleasure from this filthy pose, enough to smooth the brow.',
      );
      await defender.print_and_wait([
        '…And so, ',
        defender.get_colored_name(),
        "'s little mouth gains a purpose beyond taking in nourishment from this moment—sinking into a lewd sex organ that wetly winds around a cock. Too late to take that back❤️",
      ]);
      await defender.print_and_wait(
        'Meeting the head with soft throat flesh, tracing swollen veins with a clever tongue-tip, lifting the shaft with suction that needs no air…',
      );
      await defender.print_and_wait([
        'What are you learning, remembering, becoming… the one crouched under ',
        d_call_a,
        ' right now, ',
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        'has already found enough leeway to serve a cock with wet throat sounds while still swaying a tail—',
        defender.get_colored_name(),
        ' has unexpected talent at this, beyond ',
        attacker.phy_sex_title,
        "'s expectations.",
      ]);
      await defender.print_and_wait([
        'From the corner of an eye, watching ',
        d_call_a,
        ' tip a head back drawing breath, ',
        defender.get_colored_name(),
        "—too busy to hum—flicks those ears in a way that's easy to read.",
      ]);
      await defender.print_and_wait("How's that～");
      await defender.print_and_wait([
        'That little mouth is too busy to talk, but with such up-close contact with ',
        defender.race > 0 ? 'trainee' : 'partner',
        ', ',
        d_call_a,
        ' fully reads the bragging traced on the cock head by a tongue-tip.',
      ]);
      await defender.say_and_wait('Haah… haah…❤️');
      await defender.print_and_wait('Swallow…');
      await defender.print_and_wait([
        'For necessary air, ',
        defender.get_colored_name(),
        ' swallows hard around the cock—taking in a mix of cock-scent… no, more accurately, cock-stink mixed with oxygen.',
      ]);
      await defender.print_and_wait([
        'Pre and the drool ',
        defender.get_colored_name(),
        " can't hold back, mouth stuffed full, get churned by repeated oral thrusts into a sticky clear silk that pulls in long threads…",
      ]);
      await defender.say_and_wait('Nn… nnnnn…');
      await defender.print_and_wait(
        "Well—even doing this over and over, you probably won't forget how to talk.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async force_deep_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Lift your head.');
      await defender.print_and_wait('Taking it deeper…');
      await defender.print_and_wait(
        'Still those short commands, hard to hear any softness in them.',
      );
      await defender.print_and_wait([
        'But ',
        defender.get_colored_name(),
        "'s body is still ruled by them, hard to resist.",
      ]);
      await defender.say_and_wait('Slurp-slurp…');
      await defender.print_and_wait(
        'Of the two here, at least one nameless lewd soul is already stealing forbidden pleasure from this filthy pose, enough to smooth the brow.',
      );
      await defender.print_and_wait([
        '…And so, ',
        defender.get_colored_name(),
        "'s little mouth gains a purpose beyond taking in nourishment from this moment—sinking into a lewd sex organ that wetly winds around a cock. Too late to take that back❤️",
      ]);
      await defender.print_and_wait(
        'Meeting the head with soft throat flesh, tracing swollen veins with a clever tongue-tip, lifting the shaft with suction that needs no air…',
      );
      await defender.print_and_wait([
        'What are you learning, remembering, becoming… the one crouched under ',
        d_call_a,
        ' right now, ',
        defender.get_colored_name(),
        '。',
      ]);
    } else {
      await defender.print_and_wait([
        'wordlessly urges on,',
        attacker.phy_sex_title,
        'hands forcing the ',
        defender.teen_sex_title,
        " fixed at your groin again until you're satisfied.",
      ]);
      await defender.say_and_wait('Haah… haah…❤️');
      await defender.print_and_wait('Swallow…');
      await defender.print_and_wait([
        'For necessary air, ',
        defender.get_colored_name(),
        ' swallows hard around the cock—taking in a mix of cock-scent… no, more accurately, cock-stink mixed with oxygen.',
      ]);
      await defender.print_and_wait([
        'Pre and the drool ',
        defender.get_colored_name(),
        " can't hold back, mouth stuffed full, get churned by repeated oral thrusts into a sticky clear silk that pulls in long threads…",
      ]);
      await defender.say_and_wait('Nn… nnnnn…');
      await defender.print_and_wait(
        "Well—even doing this over and over, you probably won't forget how to talk.",
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   */
  async hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.say_and_wait('Nn—');
      await attacker.print_and_wait([
        'As if shocked by that searing heat,',
        attacker.get_colored_name(),
        "'s hand on the cock flinches back on instinct. Only then, like sliding cold feet into a winter bed, it eases close again bit by bit.",
      ]);
      await attacker.print_and_wait(
        "Such a fierce shape… enough to make a girl's lower belly jump…",
      );
      await attacker.print_and_wait(
        'But… once fingers ring it and stroke, precum seeps and dances between them… kind of cute.',
      );
      await attacker.say_and_wait('Haah… haah… nn—');
      await attacker.print_and_wait('Starting to understand…');
    } else {
      await attacker.print_and_wait('Is this really all it takes…');
      await attacker.print_and_wait([
        'Having ',
        attacker.child_sex_title,
        "'s hands lifting and stroking the cock is enough…?",
      ]);
      await attacker.print_and_wait('……');
      await attacker.print_and_wait('Really… nothing else you want…?');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Please help me…', true);
      await defender.print_and_wait([
        'Even without ',
        d_call_a,
        ' saying a word, ',
        defender.get_colored_name(),
        ' looking at the red, swollen cock already has ten fingers warming up—fully aware of what comes next.',
      ]);
      await defender.say_and_wait('Nn—');
      await defender.print_and_wait([
        'As if shocked by that searing heat,',
        defender.get_colored_name(),
        "'s hand on the cock flinches back on instinct. Only then, like sliding cold feet into a winter bed, it eases close again bit by bit.",
      ]);
      await defender.print_and_wait(
        "Such a fierce shape… enough to make a girl's lower belly jump…",
      );
      await defender.print_and_wait(
        'But… once fingers ring it and stroke, precum seeps and dances between them… kind of cute.',
      );
      await defender.say_and_wait('Haah… haah… nn—');
      await defender.print_and_wait('Starting to understand…');
    } else {
      await defender.print_and_wait('Is this really all it takes…');
      await defender.print_and_wait([
        'Having ',
        defender.child_sex_title,
        "'s hands lifting and stroking the cock is enough…?",
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('Really… nothing else you want…?');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async force_hand_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await attacker.say_and_wait('Using hands is fine, right?');
      await defender.print_and_wait([
        `No room to refuse—with `,
        d_call_a,
        `'s words already reaching `,
        defender.get_colored_name(),
        ', the only options left are obediently offering both hands to serve, or having that cock drip lewd juice over every curious inch of skin. ',
        defender.get_colored_name(),
        ' gets only those two choices.',
      ]);
      await defender.say_and_wait('Nn—');
      await defender.print_and_wait([
        'As if shocked by that searing heat,',
        defender.get_colored_name(),
        "'s hand on the cock flinches back on instinct. Only then, like sliding cold feet into a winter bed, it eases close again bit by bit.",
      ]);
      await defender.print_and_wait(
        "Such a fierce shape… enough to make a girl's lower belly jump…",
      );
      await defender.print_and_wait(
        'But… once fingers ring it and stroke, precum seeps and dances between them… kind of cute.',
      );
      await defender.say_and_wait('Haah… haah… nn—');
      await defender.print_and_wait('Starting to understand…');
    } else {
      await defender.print_and_wait('Is this really all it takes…');
      await defender.print_and_wait([
        'Having ',
        defender.child_sex_title,
        "'s hands lifting and stroking the cock is enough…?",
      ]);
      await defender.print_and_wait('……');
      await defender.print_and_wait('Really… nothing else you want…?');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('It feels like such a ');
      await attacker.print_and_wait('It feels like such a natural motion…');
      await attacker.print_and_wait(
        'Once both hands lift the cock, the head leans in without thinking.',
      );
      await attacker.print_and_wait(
        'Warm it with fingertip heat, roll it open, and then…',
      );
      await attacker.say_and_wait('Chuu～');
      await attacker.print_and_wait('So thick…');
    } else {
      await attacker.print_and_wait(
        'Nudge the cock aside, tip the head, and lick carefully top to bottom—like an ice cream already melting down the sides.',
      );
      await attacker.say_and_wait('Slurp-slurp——');
      await attacker.print_and_wait([
        a_call_d,
        `'s head turns glossy—how much of that shining wet is whose fault…`,
      ]);
      await attacker.print_and_wait("Can't… make sense of anything…❤️");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('Want it… inside the mouth…?');
      await defender.print_and_wait('Is… that it');
      era.println();
      await defender.print_and_wait('It feels like such a ');
      await defender.print_and_wait('It feels like such a natural motion…');
      await defender.print_and_wait(
        'Once both hands lift the cock, the head leans in without thinking.',
      );
      await defender.print_and_wait(
        'Warm it with fingertip heat, roll it open, and then…',
      );
      await defender.say_and_wait('Chuu～');
      await defender.print_and_wait('So thick…');
    } else {
      await defender.print_and_wait(
        'Nudge the cock aside, tip the head, and lick carefully top to bottom—like an ice cream already melting down the sides.',
      );
      await defender.say_and_wait('Slurp-slurp——');
      await defender.print_and_wait([
        d_call_a,
        "'s head turns glossy—how much of that shining wet is whose fault…",
      ]);
      await defender.print_and_wait("Can't… make sense of anything…❤️");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async force_hand_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('Ends up in a crouch without meaning to.');
      await defender.print_and_wait(
        'A little unreal… no clear order was heard, yet the body knows exactly what to do next.',
      );
      era.println();
      await defender.print_and_wait('It feels like such a ');
      await defender.print_and_wait('It feels like such a natural motion…');
      await defender.print_and_wait(
        'Once both hands lift the cock, the head leans in without thinking.',
      );
      await defender.print_and_wait(
        'Warm it with fingertip heat, roll it open, and then…',
      );
      await defender.say_and_wait('Chuu～');
      await defender.print_and_wait('So thick…');
    } else {
      await defender.print_and_wait(
        'Nudge the cock aside, tip the head, and lick carefully top to bottom—like an ice cream already melting down the sides.',
      );
      await defender.say_and_wait('Slurp-slurp——');
      await defender.print_and_wait([
        d_call_a,
        "'s head turns glossy—how much of that shining wet is whose fault…",
      ]);
      await defender.print_and_wait("Can't… make sense of anything…❤️");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("Pretty great, isn't it.");
      await defender.print_and_wait([
        'This pose of ',
        d_call_a,
        ' leaning low beneath you, hands cupping soft flesh that belongs only to a girl, wrapping a burning cock…',
      ]);
      await attacker.say_and_wait('Nn…');
      await defender.print_and_wait(
        'Seems the message got through—hot white steam of pure lust rising from the cock head.',
      );
      await defender.print_and_wait([
        'Hands help lift ',
        d_call_a,
        "'s face from below.",
      ]);
      await defender.print_and_wait(
        'Mm. Already smoked into a pretty delicious expression.',
      );
    } else {
      await attacker.say_and_wait('……');
      await attacker.print_and_wait([
        'You can feel ',
        a_call_d,
        "'s waist arching back.",
      ]);
      if (attacker.race > 0) {
        await attacker.print_and_wait(
          'Sensitive horse ears get puffed by ragged hot breath from above.',
        );
      }
      await attacker.print_and_wait(
        'The cock wrapped in softness stands in a shape that could make a pussy tremble with ease.',
      );
      await attacker.print_and_wait(
        'Something makes the heart pound—but this is still only the blind men and the elephant…',
      );
      await attacker.print_and_wait([
        'So ',
        attacker.get_colored_name(),
        ' looks up.',
      ]);
      await attacker.print_and_wait("Sure enough—a beast's face…");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        'With a gaze hot enough to make ',
        a_call_d,
        "'s nipples burn and stand, staring straight as if pleading.",
      ]);
      await attacker.print_and_wait([
        'The ',
        a_call_d,
        " really can't take it and folds—nice.",
      ]);
      await defender.say_and_wait('……');
      era.println();
      await attacker.print_and_wait("Pretty great, isn't it.");
      await attacker.print_and_wait([
        'This pose of ',
        a_call_d,
        ' leaning low beneath you, hands cupping soft flesh that belongs only to a girl, wrapping a burning cock…',
      ]);
      await defender.say_and_wait('Nn…');
      await attacker.print_and_wait(
        'Seems the message got through—hot white steam of pure lust rising from the cock head.',
      );
      await attacker.print_and_wait([
        'Hands help lift ',
        a_call_d,
        "'s face from below.",
      ]);
      await attacker.print_and_wait(
        'Mm. Already smoked into a pretty delicious expression.',
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        'You can feel ',
        d_call_a,
        "'s waist arching back.",
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          'Sensitive horse ears get puffed by ragged hot breath from above.',
        );
      }
      await defender.print_and_wait(
        'The cock wrapped in softness stands in a shape that could make a pussy tremble with ease.',
      );
      await defender.print_and_wait(
        'Something makes the heart pound—but this is still only the blind men and the elephant…',
      );
      await defender.print_and_wait([
        'So ',
        defender.get_colored_name(),
        ' looks up.',
      ]);
      await defender.print_and_wait("Sure enough—a beast's face…");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async fuck_tit(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await attacker.print_and_wait([
        "Can't wait—hips start rocking. Compared to cold air, ",
        a_call_d,
        "'s body clearly has better places for a cock to stay.",
      ]);
      await attacker.print_and_wait('You get it, right.');
      await attacker.print_and_wait(
        'No need for wasted words—just eyes delivering an unshakable order.',
      );
      era.println();
      await attacker.print_and_wait("Pretty great, isn't it.");
      await attacker.print_and_wait([
        'This pose of ',
        a_call_d,
        ' leaning low beneath you, hands cupping soft flesh that belongs only to a girl, wrapping a burning cock…',
      ]);
      await defender.say_and_wait('Nn…');
      await attacker.print_and_wait(
        'Seems the message got through—hot white steam of pure lust rising from the cock head.',
      );
      await attacker.print_and_wait([
        'Hands help lift ',
        a_call_d,
        "'s face from below.",
      ]);
      await attacker.print_and_wait(
        'Mm. Already smoked into a pretty delicious expression.',
      );
    } else {
      await defender.say_and_wait('……');
      await defender.print_and_wait([
        'You can feel ',
        d_call_a,
        "'s waist arching back.",
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait(
          'Sensitive horse ears get puffed by ragged hot breath from above.',
        );
      }
      await defender.print_and_wait(
        'The cock wrapped in softness stands in a shape that could make a pussy tremble with ease.',
      );
      await defender.print_and_wait(
        'Something makes the heart pound—but this is still only the blind men and the elephant…',
      );
      await defender.print_and_wait([
        'So ',
        defender.get_colored_name(),
        ' looks up.',
      ]);
      await defender.print_and_wait("Sure enough—a beast's face…");
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Geez… you like breasts that much…');
      await attacker.print_and_wait(
        'Like cream on dessert—squeeze it anywhere and it still tastes good…',
      );
      await attacker.say_and_wait('Suck-suck-suck…');
      await attacker.print_and_wait([
        'Breast flesh is painted slick and shiny by precum dripping down the shaft, but more than those hardworking boobs, the hottest, fullest head is welcomed into ',
        attacker.get_colored_name(),
        "'s mouth by both hands.",
      ]);
      await attacker.say_and_wait('Nn…');
      await attacker.print_and_wait(
        "The tongue starts misbehaving—but the moment the head at your lips feels even a little lonely, the motions of sandwiching nipples to serve and please the cock just won't stop…",
      );
    } else {
      await attacker.say_and_wait('Suck-suck…');
      await attacker.print_and_wait(
        'No matter how many times you taste it, hard to call this delicious… salty, lewd flavor shooting straight into the head…',
      );
      await attacker.print_and_wait('But…');
      await attacker.print_and_wait('But……');
      await attacker.print_and_wait('But…………');
      await attacker.say_and_wait(
        ["Why haven't the hands stopped… neither mine nor ", a_call_d, '……'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_tit_and_blow_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        d_call_a,
        '—the head peeking from between breast flesh looks a little dejected.',
      ]);
      await defender.print_and_wait(
        'And the owner is easy to read too, palms pressed together in a plea.',
      );
      await defender.print_and_wait('Geez… you like breasts that much…');
      await defender.print_and_wait(
        'Like cream on dessert—squeeze it anywhere and it still tastes good…',
      );
      await defender.say_and_wait('Suck-suck-suck…');
      await defender.print_and_wait([
        'Breast flesh is painted slick and shiny by precum dripping down the shaft, but more than those hardworking boobs, the hottest, fullest head is welcomed into ',
        defender.get_colored_name(),
        "'s mouth by both hands.",
      ]);
      await defender.say_and_wait('Nn…');
      await defender.print_and_wait(
        "The tongue starts misbehaving—but the moment the head at your lips feels even a little lonely, the motions of sandwiching nipples to serve and please the cock just won't stop…",
      );
    } else {
      await defender.say_and_wait('Suck-suck…');
      await defender.print_and_wait(
        'No matter how many times you taste it, hard to call this delicious… salty, lewd flavor shooting straight into the head…',
      );
      await defender.print_and_wait('But…');
      await defender.print_and_wait('But……');
      await defender.print_and_wait('But…………');
      await defender.say_and_wait(
        ["Why haven't the hands stopped… neither mine nor ", d_call_a, '……'],
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async fuck_tit_and_mouth(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.say_and_wait('What…!?');
      await defender.print_and_wait(
        'Clearly has no plan to listen—just roughing out what they want.',
      );
      await defender.print_and_wait('Geez… you like breasts that much…');
      await defender.print_and_wait(
        'Like cream on dessert—squeeze it anywhere and it still tastes good…',
      );
      await defender.say_and_wait('Suck-suck-suck…');
      await defender.print_and_wait([
        'Breast flesh is painted slick and shiny by precum dripping down the shaft, but more than those hardworking boobs, the hottest, fullest head is welcomed into ',
        defender.get_colored_name(),
        "'s mouth by both hands.",
      ]);
      await defender.say_and_wait('Nn…');
      await defender.print_and_wait(
        "The tongue starts misbehaving—but the moment the head at your lips feels even a little lonely, the motions of sandwiching nipples to serve and please the cock just won't stop…",
      );
    } else {
      await defender.say_and_wait('Suck-suck…');
      await defender.print_and_wait(
        'No matter how many times you taste it, hard to call this delicious… salty, lewd flavor shooting straight into the head…',
      );
      await defender.print_and_wait('But…');
      await defender.print_and_wait('But……');
      await defender.print_and_wait('But…………');
      await defender.say_and_wait(
        ["Why haven't the hands stopped… neither mine nor ", d_call_a, '……'],
        true,
      );
    }
  },
  /**
   * Suck nipple; also nursing flavor
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner (passive if nursing)
   * @param {CharaTalk} defender passive partner (active if nursing)
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async suck_nipple(attacker, defender, a_call_d) {
    if (Math.random() < 0.5) {
      await attacker.say_and_wait('Chuu——');
      await attacker.print_and_wait(
        "That white softness and rose-red ahead want to dodge on instinct, but a tongue isn't so easily satisfied.",
      );
      await attacker.print_and_wait([
        defender.teen_sex_title,
        "'s softness weaves left and right, then finally resigns itself and stays on the tongue-tip.",
      ]);
      await attacker.say_and_wait('Suck——');
      await attacker.print_and_wait(
        'Bit by bit that red point burning on its own on the tongue-tip hardens for real—so careful teeth catch the nub and pull a sharp suck——',
      );
      await defender.say_and_wait('Nn—!');
      await attacker.print_and_wait([
        a_call_d,
        "'s weight sinks heavy onto you at once.",
      ]);
      await attacker.print_and_wait('Legs must have gone soft.');
    } else {
      await attacker.print_and_wait("Doesn't this feel shameful?");
      await attacker.print_and_wait([
        'Served on a lap pillow, bringing ',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? 'milk-leaking ' : 'nipples',
        ' down in front of you.',
      ]);
      await attacker.print_and_wait(
        'And probably because of you, those unnaturally vivid nipples have swollen into long shapes easy to suck…',
      );
      await attacker.print_and_wait('…So really—no shame about that?');
      await attacker.print_and_wait('Not at all.');
      await attacker.print_and_wait(
        'Eyes half-lidding in pleasure, mouth catching that crimson nub for a suck.',
      );
      if (era.get(`talent:${defender.id}:泌乳`) > 0) {
        await attacker.print_and_wait('"Pssh-pssh-pssh——"');
        await attacker.print_and_wait([
          `Can't see it, but the whole head is full of that first spray of milk—from under `,
          a_call_d,
          `'s shy red face, a slender continuous arc jetting from white breast flesh that eyes can't help chasing…`,
        ]);
        await attacker.print_and_wait('And a little sweet.');
      }
    }
  },
  /**
   * Bite nipple; also request-bite flavor
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner (passive if requesting a bite)
   * @param {CharaTalk} defender passive partner (active if requesting a bite)
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      `The moment teeth take that rock-hard nub onto the lips, `,
      a_call_d,
      ` in your arms goes stiff.`,
    ]);
    await attacker.print_and_wait('Eh… is that so…');
    await attacker.print_and_wait([
      'Gently working the teeth, leaving a ring of uneven red marks around the sensitive nipple… and making the ',
      defender.teen_sex_title,
      ' in your arms tremble without stop…',
    ]);
    await attacker.print_and_wait([
      'Probably reading what comes next—the instant the nipple is licked wet and slick, ',
      defender.get_colored_name(),
      ' reaches both arms around ',
      attacker.get_colored_name(),
      "'s waist…",
    ]);
    await defender.say_and_wait('Nn—');
    await attacker.print_and_wait('So cute.');
    await attacker.print_and_wait([
      'Not just the ',
      a_call_d,
      ' in your arms—those nipples covered in swollen red marks too.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_milk_and_hand_job(
    attacker,
    defender,
    is_first,
    a_call_d,
    d_call_a,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        'Because all you can see is ',
        a_call_d,
        "'s pale skin and breast flesh, a shame you can't see what must be a delicious face right now.",
      ]);
      await attacker.print_and_wait([
        'Even the nipple dancing on your tongue-tip feels briefly dull—but ',
        attacker.get_colored_name(),
        ' quickly finds a new place to put attention.',
      ]);
      await attacker.print_and_wait('So what kind of face is it, then.');
      await attacker.print_and_wait([
        'Pleasure of a sucked ',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? 'breast milk' : 'nipple',
        ' dragging the mind toward the lewd end—dazed struggle… shy face over a hot cock jumping in the palm… or already sunk into a filthy look of pure enjoyment…',
      ]);
      await defender.say_and_wait('Eh!?');
      await attacker.print_and_wait([
        'A question with no answer—but the cock ',
        attacker.get_colored_name(),
        ' has barely wrapped in ',
        a_call_d,
        "'s fingers suddenly stands unnaturally high.",
      ]);
    } else {
      await defender.print_and_wait(
        'Not sure whether to be happy about this self…',
      );
      await defender.print_and_wait([
        'Through the held ',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? 'leaking' : '',
        'nipple, tongue motion lets you vaguely see ',
        d_call_a,
        "'s face.",
      ]);
      await defender.print_and_wait(
        "Through the cock's searing heat and swollen veins in your palm, you can roughly sketch how it looks now.",
      );
      await defender.print_and_wait('Haah… please take responsibility…');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async milk_and_hand_job(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('Pretty easy to read, right');
      await defender.print_and_wait(
        'After being invited to lie into a lap-pillow nursing, the groin standing tall.',
      );
      await defender.print_and_wait('Easy to read, right…');
      await defender.print_and_wait([
        'Because all you can see is ',
        d_call_a,
        "'s pale skin and breast flesh, a shame you can't see what must be a delicious face right now.",
      ]);
      await defender.print_and_wait([
        'Even the nipple dancing on your tongue-tip feels briefly dull—but ',
        defender.get_colored_name(),
        ' quickly finds a new place to put attention.',
      ]);
      await defender.print_and_wait('So what kind of face is it, then.');
      await defender.print_and_wait([
        'Pleasure of a sucked ',
        era.get(`talent:${attacker.id}:泌乳`) > 0 ? 'breast milk' : 'nipple',
        ' dragging the mind toward the lewd end—dazed struggle… shy face over a hot cock jumping in the palm… or already sunk into a filthy look of pure enjoyment…',
      ]);
      await attacker.say_and_wait('Eh!?');
      await defender.print_and_wait([
        'A question with no answer—but the cock ',
        defender.get_colored_name(),
        ' has barely wrapped in ',
        d_call_a,
        "'s fingers suddenly stands unnaturally high.",
      ]);
    } else {
      await attacker.print_and_wait(
        'Not sure whether to be happy about this self…',
      );
      await attacker.print_and_wait([
        'Through the held ',
        era.get(`talent:${defender.id}:泌乳`) > 0 ? 'leaking' : '',
        'nipple, tongue motion lets you vaguely see ',
        a_call_d,
        "'s face.",
      ]);
      await attacker.print_and_wait(
        "Through the cock's searing heat and swollen veins in your palm, you can roughly sketch how it looks now.",
      );
      await attacker.print_and_wait('Haah… please take responsibility…');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("It's really in.");
      await defender.print_and_wait([
        'Sliding a cock… between ',
        d_call_a,
        "'s closed thighs.",
      ]);
      await defender.print_and_wait(
        'So soft, so warm, so good, so good, so good…',
      );
      await defender.print_and_wait(
        'Those slightly crossed legs are from shyness, right…',
      );
      await defender.print_and_wait(
        'Not just soft—as the fruit of everyday work, the cock is held firm.',
      );
      await defender.print_and_wait([
        'Like a monkey in heat, ',
        defender.get_colored_name(),
        "'s cock rubs feverishly back and forth between ",
        d_call_a,
        "'s thighs.",
      ]);
    } else {
      await defender.print_and_wait('Turning slick and shiny.');
      await defender.print_and_wait('Getting a little practiced.');
      await defender.print_and_wait("Can't patiently wait anymore.");
      await defender.print_and_wait('Getting… a little lonely…?');
      await attacker.say_and_wait([a_call_d, '……']);
      await defender.print_and_wait('Eyes getting… wet too…');
      await defender.print_and_wait(
        'Using legs like this really does end up like that.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_non_penetrative(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      await defender.say_and_wait(
        ["Do you even know what you're saying…", d_call_a, '……'],
        true,
      );
      if (!attacker.id && defender.race > 0) {
        await defender.say_and_wait(
          `Ah… ah… so that's how you see your trainee's legs.`,
          true,
        );
      }
      await attacker.print_and_wait("It's really in.");
      await attacker.print_and_wait([
        'Sliding a cock… between ',
        a_call_d,
        "'s closed thighs.",
      ]);
      await attacker.print_and_wait(
        'So soft, so warm, so good, so good, so good…',
      );
      await attacker.print_and_wait(
        'Those slightly crossed legs are from shyness, right…',
      );
      await attacker.print_and_wait(
        'Not just soft—as the fruit of everyday work, the cock is held firm.',
      );
      await attacker.print_and_wait([
        'Like a monkey in heat, ',
        attacker.get_colored_name(),
        "'s cock rubs feverishly back and forth between ",
        a_call_d,
        "'s thighs.",
      ]);
    } else {
      await attacker.print_and_wait('Turning slick and shiny.');
      await attacker.print_and_wait('Getting a little practiced.');
      await attacker.print_and_wait("Can't patiently wait anymore.");
      await attacker.print_and_wait('Getting… a little lonely…?');
      await defender.say_and_wait([d_call_a, '……']);
      await attacker.print_and_wait('Eyes getting… wet too…');
      await attacker.print_and_wait(
        'Using legs like this really does end up like that.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   */
  async sixty_nine(attacker, defender, is_first) {
    if (is_first) {
      await era.printAndWait('Sticky bodies stacked together.');
      await era.printAndWait('Lips meet a hole; lips also meet a cock.');
      await era.printAndWait(
        'Salty juices circle through both bodies… like beasts',
      );
      await era.printAndWait(
        'Hard to say who starts first—deliberately sucking and licking with wet lewd sounds that pull the other to copy.',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: 'Slurp-slurp' },
        { color: defender.color, content: 'Nnn-slurp…' },
        '……」',
      ]);
      await era.printAndWait('Bodies nestled close are burning.');
      await era.printAndWait('Hot enough to scramble thought…');
    } else {
      await era.printAndWait(
        'Once-pure slit lips licked open into a loose bloom.',
      );
      await era.printAndWait(
        'A once-fierce swollen cock now wears a cute gloss from that lively little tongue.',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        '/',
        defender.get_colored_name(),
        '「',
        { color: attacker.color, content: 'Haah…' },
        { color: defender.color, content: 'Haah…' },
        '……」',
      ]);
      await era.printAndWait(
        'Two sweat-slick bodies grind together, clinging to this rare ceasefire…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async armpit_intercourse(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('Lame.');
      await defender.print_and_wait([
        'You can read that complaint in the shyly swaying ass of ',
        d_call_a,
        ' with arms raised high.',
      ]);
      await defender.print_and_wait("But it can't be helped.");
      await attacker.say_and_wait('Nn—');
      await defender.print_and_wait([
        d_call_a,
        "'s armpit is being washed by a cock's huge head.",
      ]);
      await defender.print_and_wait(
        'Steaming pit flesh flushes pink with each thrust—almost turning into a sex organ…',
      );
      await defender.print_and_wait([
        "Can't fully treat this as normal yet, ",
        defender.get_colored_name(),
        "'s motions still hesitate a little…",
      ]);
      await defender.print_and_wait([
        '…hesitantly grinding and thrusting a cock into the armpit hole of ',
        d_call_a,
        ' facing away…',
      ]);
    } else {
      await attacker.print_and_wait('Feels… a little strange…');
      await attacker.print_and_wait(
        'So armpits are organs for this kind of thing…',
      );
      await attacker.print_and_wait('And you can feel it like this…');
      await attacker.print_and_wait([
        "Something really is changing under a cock's taint—bright red, ",
        attacker.get_colored_name(),
        ' nervously serves Mr. Cock, already slurp-slurp smooth at this.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async ask_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('Eh?');
      await attacker.print_and_wait('Can you say that again…');
      await attacker.print_and_wait([
        'The slightly strained face of ',
        a_call_d,
        ' silently pushes—so…',
      ]);
      await attacker.say_and_wait('Please let me rub my cock in your armpit!');
      await defender.say_and_wait('……');
      await attacker.print_and_wait('Lame.');
      await attacker.print_and_wait([
        'You can read that complaint in the shyly swaying ass of ',
        a_call_d,
        ' with arms raised high.',
      ]);
      await attacker.print_and_wait("But it can't be helped.");
      await defender.say_and_wait('Nn—');
      await attacker.print_and_wait([
        a_call_d,
        "'s armpit is being washed by a cock's huge head.",
      ]);
      await attacker.print_and_wait(
        'Steaming pit flesh flushes pink with each thrust—almost turning into a sex organ…',
      );
      await attacker.print_and_wait([
        "Can't fully treat this as normal yet, ",
        attacker.get_colored_name(),
        "'s motions still hesitate a little…",
      ]);
      await attacker.print_and_wait([
        '…hesitantly grinding and thrusting a cock into the armpit hole of ',
        a_call_d,
        ' facing away…',
      ]);
    } else {
      await defender.print_and_wait('Feels… a little strange…');
      await defender.print_and_wait(
        'So armpits are organs for this kind of thing…',
      );
      await defender.print_and_wait('And you can feel it like this…');
      await defender.print_and_wait([
        "Something really is changing under a cock's taint—bright red, ",
        defender.get_colored_name(),
        ' nervously serves Mr. Cock, already slurp-slurp smooth at this.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async force_armpit_intercourse(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Arms yanked up, what is ',
        a_call_d,
        ' thinking right now…',
      ]);
      await attacker.print_and_wait('Probably nothing nice…');
      await attacker.print_and_wait('Lame.');
      await attacker.print_and_wait([
        'You can read that complaint in the shyly swaying ass of ',
        a_call_d,
        ' with arms raised high.',
      ]);
      await attacker.print_and_wait("But it can't be helped.");
      await defender.say_and_wait('Nn—');
      await attacker.print_and_wait([
        a_call_d,
        "'s armpit is being washed by a cock's huge head.",
      ]);
      await attacker.print_and_wait(
        'Steaming pit flesh flushes pink with each thrust—almost turning into a sex organ…',
      );
      await attacker.print_and_wait([
        "Can't fully treat this as normal yet, ",
        attacker.get_colored_name(),
        "'s motions still hesitate a little…",
      ]);
      await attacker.print_and_wait([
        '…hesitantly grinding and thrusting a cock into the armpit hole of ',
        a_call_d,
        ' facing away…',
      ]);
    } else {
      await defender.print_and_wait('Feels… a little strange…');
      await defender.print_and_wait(
        'So armpits are organs for this kind of thing…',
      );
      await defender.print_and_wait('And you can feel it like this…');
      await defender.print_and_wait([
        "Something really is changing under a cock's taint—bright red, ",
        defender.get_colored_name(),
        ' nervously serves Mr. Cock, already slurp-slurp smooth at this.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async foot_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait("There'll be a smile, right.");
      await defender.print_and_wait([
        'When ',
        attacker.get_colored_name(),
        ' ',
        defender.race > 0 ? ' sets those race-track feet' : '',
        ' on the cock ahead and finds that bad thing excitedly lifting the sole instead—there will definitely be a smile.',
      ]);
      await defender.print_and_wait(
        'Disgusted contempt at something lewd… indulgent interest at a partner with weird kinks… pure innocent amusement…',
      );
      await defender.print_and_wait([
        'Which kind is ',
        d_call_a,
        '… Either way, the kind that gets a cock more excited.',
      ]);
    } else {
      await defender.print_and_wait('Probably noticed.');
      await defender.print_and_wait(
        "The cock violating the sole isn't fragile.",
      );
      await defender.print_and_wait([
        d_call_a,
        ' stepping on the cock gets much more natural.',
      ]);
      await defender.print_and_wait([
        'As if pinning ',
        defender.get_colored_name(),
        "'s cock underfoot were an inborn talent.",
      ]);
      await defender.print_and_wait('Hss…');
      await defender.print_and_wait([
        'Just imagining it, ',
        defender.get_colored_name(),
        ' feels the lower belly heat up again.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async ask_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('…As expected?');
      await attacker.print_and_wait([
        'Even hearing such an outrageous lewd request, ',
        a_call_d,
        ' shows a composed look like it was already expected.',
      ]);
      await attacker.print_and_wait('So… it was that obvious…');
      await attacker.print_and_wait("There'll be a smile, right.");
      await attacker.print_and_wait([
        'When ',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? ' sets those race-track feet' : '',
        ' on the cock ahead and finds that bad thing excitedly lifting the sole instead—there will definitely be a smile.',
      ]);
      await attacker.print_and_wait(
        'Disgusted contempt at something lewd… indulgent interest at a partner with weird kinks… pure innocent amusement…',
      );
      await attacker.print_and_wait([
        'Which kind is ',
        a_call_d,
        '… Either way, the kind that gets a cock more excited.',
      ]);
    } else {
      await attacker.print_and_wait('Probably noticed.');
      await attacker.print_and_wait(
        "The cock violating the sole isn't fragile.",
      );
      await attacker.print_and_wait([
        a_call_d,
        ' stepping on the cock gets much more natural.',
      ]);
      await attacker.print_and_wait([
        'As if pinning ',
        attacker.get_colored_name(),
        "'s cock underfoot were an inborn talent.",
      ]);
      await attacker.print_and_wait('Hss…');
      await attacker.print_and_wait([
        'Just imagining it, ',
        attacker.get_colored_name(),
        ' feels the lower belly heat up again.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async force_foot_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'Turning the face away for hating a request like this is normal, right.',
      );
      await attacker.print_and_wait(
        'But in this industry, looking the other way while stepping is a reward.',
      );
      await attacker.print_and_wait('Ah… looking this way now…');
      await attacker.print_and_wait("There'll be a smile, right.");
      await attacker.print_and_wait([
        'When ',
        defender.get_colored_name(),
        ' ',
        attacker.race > 0 ? ' sets those race-track feet' : '',
        ' on the cock ahead and finds that bad thing excitedly lifting the sole instead—there will definitely be a smile.',
      ]);
      await attacker.print_and_wait(
        'Disgusted contempt at something lewd… indulgent interest at a partner with weird kinks… pure innocent amusement…',
      );
      await attacker.print_and_wait([
        'Which kind is ',
        a_call_d,
        '… Either way, the kind that gets a cock more excited.',
      ]);
    } else {
      await attacker.print_and_wait('Probably noticed.');
      await attacker.print_and_wait(
        "The cock violating the sole isn't fragile.",
      );
      await attacker.print_and_wait([
        a_call_d,
        ' stepping on the cock gets much more natural.',
      ]);
      await attacker.print_and_wait([
        'As if pinning ',
        attacker.get_colored_name(),
        "'s cock underfoot were an inborn talent.",
      ]);
      await attacker.print_and_wait('Hss…');
      await attacker.print_and_wait([
        'Just imagining it, ',
        attacker.get_colored_name(),
        ' feels the lower belly heat up again.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async tail_job(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait('So agile…');
      await defender.print_and_wait([
        'With a sensitivity beyond even what ',
        defender.get_colored_name(),
        ' expected when asking, a horse tail with curved hair coils around the cock.',
      ]);
      await defender.print_and_wait(
        'The ass from this angle has its own flavor too.',
      );
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait([
          "A faint girl's scent the long horse tail can't help carrying makes ",
          defender.get_colored_name(),
          "'s cock more excited than ever.",
        ]);
      }
      await attacker.say_and_wait('……');
      await defender.print_and_wait([
        '…And roughly feeling that surging heat, ',
        d_call_a,
        ' turned away even makes flushed ears move cutely.',
      ]);
    } else {
      await defender.print_and_wait(
        'Motions getting rougher… or more skilled.',
      );
      await defender.print_and_wait(
        'After all, once a tail is brushed sticky with lewd juice, it always learns something from that shine-making conditioner.',
      );
      await defender.print_and_wait(
        'Like how tight this cock likes to be wound.',
      );
      await defender.print_and_wait(
        'Like where this cock twitches if scratched.',
      );
      if (attacker.sex_code !== 1) {
        await defender.print_and_wait(
          'Like whether the pussy under the tail also needs more… harder…',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async ask_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Sigh…');
      await attacker.print_and_wait([
        'You can almost hear ',
        a_call_d,
        "'s long sigh.",
      ]);
      await attacker.print_and_wait('Maybe a bit much…');
      await attacker.print_and_wait([
        'There seems to be some self-reflection for losing control, but right now ',
        attacker.get_colored_name(),
        ' still stares straight at ',
        a_call_d,
        '。',
      ]);
      await attacker.print_and_wait('So agile…');
      await attacker.print_and_wait([
        'With a sensitivity beyond even what ',
        attacker.get_colored_name(),
        ' expected when asking, a horse tail with curved hair coils around the cock.',
      ]);
      await attacker.print_and_wait(
        'The ass from this angle has its own flavor too.',
      );
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          "A faint girl's scent the long horse tail can't help carrying makes ",
          attacker.get_colored_name(),
          "'s cock more excited than ever.",
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '…And roughly feeling that surging heat, ',
        a_call_d,
        ' turned away even makes flushed ears move cutely.',
      ]);
    } else {
      await attacker.print_and_wait(
        'Motions getting rougher… or more skilled.',
      );
      await attacker.print_and_wait(
        'After all, once a tail is brushed sticky with lewd juice, it always learns something from that shine-making conditioner.',
      );
      await attacker.print_and_wait(
        'Like how tight this cock likes to be wound.',
      );
      await attacker.print_and_wait(
        'Like where this cock twitches if scratched.',
      );
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          'Like whether the pussy under the tail also needs more… harder…',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async force_tail_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Unexpectedly quiet?');
      await attacker.print_and_wait([
        'Probably already braced for ',
        attacker.get_colored_name(),
        "'s filthy kinks—",
        a_call_d,
        ' is surprisingly obedient this time.',
      ]);
      await attacker.print_and_wait('So agile…');
      await attacker.print_and_wait([
        'With a sensitivity beyond even what ',
        attacker.get_colored_name(),
        ' expected when asking, a horse tail with curved hair coils around the cock.',
      ]);
      await attacker.print_and_wait(
        'The ass from this angle has its own flavor too.',
      );
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait([
          "A faint girl's scent the long horse tail can't help carrying makes ",
          attacker.get_colored_name(),
          "'s cock more excited than ever.",
        ]);
      }
      await defender.say_and_wait('……');
      await attacker.print_and_wait([
        '…And roughly feeling that surging heat, ',
        a_call_d,
        ' turned away even makes flushed ears move cutely.',
      ]);
    } else {
      await attacker.print_and_wait(
        'Motions getting rougher… or more skilled.',
      );
      await attacker.print_and_wait(
        'After all, once a tail is brushed sticky with lewd juice, it always learns something from that shine-making conditioner.',
      );
      await attacker.print_and_wait(
        'Like how tight this cock likes to be wound.',
      );
      await attacker.print_and_wait(
        'Like where this cock twitches if scratched.',
      );
      if (defender.sex_code !== 1) {
        await attacker.print_and_wait(
          'Like whether the pussy under the tail also needs more… harder…',
        );
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.say_and_wait('Ugh—');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' half-crouches, looking at that familiar figure, a little fear rising unbidden.',
      ]);
      await attacker.print_and_wait([
        a_call_d,
        ' smirks with interest, hips thrusting forward toward ',
        attacker.get_colored_name(),
        '.',
      ]);
      await attacker.print_and_wait([
        'A warm rod-like thing presses toward the forehead with irresistible intent—',
        attacker.get_colored_name(),
        ' swallows, lifts the head to meet it, carefully gathers hair with fingers, winds it around the thrusting lance, and starts work.',
      ]);
    } else {
      await attacker.print_and_wait('Rustle…');
      await attacker.print_and_wait(
        'Palm and hair rub that thing over and over.',
      );
      await attacker.print_and_wait('This feel… that thing… still swelling…');
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' feels the hair tips itch, breathing turning heavy.',
      ]);
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async ask_hair_fuck(attacker, defender, is_first, a_call_d, d_call_a) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait([d_call_a, '……？']);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' lifts the head a little with mixed expectation and shyness—top of the head meeting something hot, heavier than it looks (psychological?)—so close, such thick hormone scent, scrambling every brain cell meant for thought.',
          ]);
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' squats under ',
            attacker.get_colored_name(),
            "'s crotch, face turning lewd on its own…",
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ` can't help smiling. Both hands rise, gently set beside ${defender.sex === 'She' ? 'her' : 'his'} ears, cradling the head softly… then the hips start thrusting.`,
          ]);
          await attacker.print_and_wait([
            'Crotch weaves through hair, messing up neatly trimmed short locks, clearing a path for motion. Hair and skin friction draws fluid from that critical tip, making movement smoother. Liquid slides from the crown down onto already dazed, panting ',
            defender.phy_sex_title,
            ' lashes, then drips further…',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' watching the scene hardens a little more.',
          ]);
          break;
        case 1:
          await defender.say_and_wait('You want… to do that?!');
          await attacker.print_and_wait([
            'Sitting before ',
            attacker.get_colored_name(),
            ', ',
            a_call_d,
            " mixes 'you're a pervert' and 'you're hopeless' in one tone, sighs, lightly shakes a head—smooth hair with a nice scent brushes ",
            attacker.get_colored_name(),
            "'s already standing cock, then stops.",
          ]);
          await attacker.print_and_wait('My turn.');
          await attacker.print_and_wait([
            'Hips thrust, sliding that thing down askew to the side of the neck—fine hair and soft skin dual-stim make ',
            attacker.get_colored_name(),
            ' sigh without meaning to.',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            ' seeing ',
            attacker.get_colored_name(),
            ' like that, a brow lifts, neck tips, one hand lightly presses ',
            attacker.get_colored_name(),
            "'s thing—three forces pinching it in the middle, sensations stacking—",
            attacker.get_colored_name(),
            ' breathes out in satisfaction.',
          ]);
          break;
        case 2:
          await defender.say_and_wait('Hehe…');
          await attacker.print_and_wait([
            a_call_d,
            ' watches with a half-smile; ',
            attacker.get_colored_name(),
            '，',
            attacker.get_colored_name(),
            ` feels a bit guilty, but still asks with body language for ${defender.sex === 'She' ? 'her' : 'him'} to do it.`,
          ]);
          await attacker.print_and_wait([
            defender.sex,
            ' seems to deliberately leave ',
            attacker.get_colored_name(),
            ' hanging a few seconds, then both hands go behind the back, gathering long hair and flinging it—',
          ]);
          await attacker.print_and_wait([
            'Countless strands fall over ',
            attacker.get_colored_name(),
            "'s sensitive place, cool and itchy—",
            attacker.get_colored_name(),
            ' draws a thin breath—no, not done—',
          ]);
          await attacker.print_and_wait([
            defender.sex,
            ' hands cupping hair follow, ten fingers close, hair forming a roll that fully, finely wraps ',
            attacker.get_colored_name(),
            "'s lower body, then starts stroking—",
          ]);
          await attacker.print_and_wait([
            'This stimulation may be too much for ',
            attacker.get_colored_name(),
            '.',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait(
            'Lightly stroking ear tips—not for the down under the fingers, but bending them slightly to rub against your treasure.',
          );
          await attacker.print_and_wait([
            'Sliding—rare body-hair stimulation makes ',
            attacker.get_colored_name(),
            ' extremely aroused.',
          ]);
          await attacker.print_and_wait([
            'Below, ',
            defender.phy_sex_title,
            ' lets out faint pants that only stoke ',
            attacker.get_colored_name(),
            "'s desire.",
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            'Three places… three feelings… the ',
            defender.phy_sex_title,
            ' ahead actively serving ',
            attacker.get_colored_name(),
            ' like this…',
          ]);
          await attacker.print_and_wait('Nothing in the world feels better.');
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            " can't help a slight grin, eyes closing to enjoy.",
          ]);
          break;
        case 2:
          await attacker.print_and_wait(
            'Like a curtain of water flowing down; like soft gauze rolling.',
          );
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "'s thing enters a wondrous hole.",
          ]);
          await attacker.print_and_wait([
            'Rubbing again and again, ',
            attacker.get_colored_name(),
            "'s legs draw in, a little colorless fluid seeping from the tip…",
          ]);
      }
    }
  },
  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async force_hair_fuck(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await defender.say_and_wait('Eh… nn!');
          await attacker.print_and_wait([
            'Suddenly, ',
            attacker.get_colored_name(),
            ' grips the face of the ',
            defender.phy_sex_title,
            ` ahead, then sets that warm swollen thing in the gap between ${defender.sex === 'She' ? 'her' : 'his'} ear and hair, lightly shaking ${defender.sex === 'She' ? 'her' : 'his'} head while speeding the hips. The meat root rubbed between skin and hair swells with excitement at once.`,
          ]);
          await attacker.print_and_wait([
            defender.sex,
            '—before understanding anything, thought is forced to stop—because the part that receives and processes the world has become where ',
            attacker.get_colored_name(),
            "'s lower body gallops.",
          ]);
          break;
        case 1:
          await defender.say_and_wait('Haah—wait, wait!');
          await attacker.print_and_wait([
            'Seeing ',
            attacker.get_colored_name(),
            `'s eyes, ${defender.sex.toLowerCase()} seems to know what's next—one hand guarding the back of the head, the other waving in a fluster—but `,
            attacker.get_colored_name(),
            " doesn't care.",
          ]);
          await attacker.print_and_wait([
            `Steps in close, pins ${defender.sex === 'She' ? 'her' : 'his'} shoulder, hips thrusting straight, setting the shaft on the secret nape for a ${defender.phy_sex_title}, sliding happily between glossy hair and smooth pale skin.`,
          ]);
          break;
        case 2:
          await defender.say_and_wait('Fine… if you insist', true);
          await attacker.print_and_wait([
            'After a shared look, the ',
            defender.phy_sex_title,
            ' ahead yields—',
            attacker.get_colored_name(),
            " starts enjoying the spoils with a victor's air.",
          ]);
          await attacker.print_and_wait([
            'Dominant hand out, ',
            attacker.get_colored_name(),
            ` toys with ${defender.sex === 'She' ? 'her' : 'his'} lovely faintly scented long hair, smirks, lifts a handful, roughly winds what is usually tended with care around that thing, gently tugging for a different kind of stroking pleasure.`,
            defender.phy_sex_title,
            ' winds carefully tended hair around that thing and gently tugs, getting a different kind of stroking pleasure.',
          ]);
      }
    } else {
      switch (era.get(`cflag:${defender.id}:头发长度`)) {
        case 0:
          await attacker.print_and_wait([
            'Pinned under ',
            a_call_d,
            ', ',
            attacker.get_colored_name(),
            "'s expression is hard to read… but the flushed face and ear roots let you glimpse ",
          ]);
          await attacker.print_and_wait([
            "'s current state.",
            attacker.get_colored_name(),
            'Haah… haah…',
            a_call_d,
            'A little more… Please…',
          ]);
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' keeps rubbing on slick skin… through fine hair tips stroking the shaft, enjoying the flesh and the mental conquest.',
          ]);
          break;
        case 1:
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            "'s lower body keeps rubbing on slick skin… through fine hair tips stroking the shaft, enjoying the flesh and the mental conquest.",
          ]);
          break;
        case 2:
          await attacker.print_and_wait([
            'Hair usually kept neat and smooth is left a mess by ',
            attacker.get_colored_name(),
            '.',
          ]);
          await attacker.print_and_wait([
            'Pubes tangle with a few strands, laying ',
            attacker.get_colored_name(),
            `'s male scent over ${defender.sex === 'She' ? 'her' : 'his'} scent.`,
          ]);
          await attacker.print_and_wait([
            'Moving savagely, marking savagely…',
            attacker.get_colored_name(),
            ` savagely uses ${defender.sex === 'She' ? 'her' : 'his'} precious thing to vent lust.`,
          ]);
      }
    }
  },
  /** Intercourse */
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} d_call_a what the receiver calls the penetrator
   * @param {boolean} is_anal_sex whether this is anal
   */
  async missionary(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait(
      "Maybe this is… the pose that feels each other's heat the most.",
    );
    if (is_anal_sex) {
      await defender.say_and_wait(
        "But do you want to remember even that pussy's temperature…❤️",
        true,
      );
    }
    await defender.print_and_wait([
      "Missionary—looking from the front of two tangled bodies, it's like ",
      d_call_a,
      ' diving into arms to nurse.',
    ]);
    await defender.print_and_wait([
      d_call_a,
      "'s body covers ",
      defender.get_colored_name(),
      "'s, a hard cock thrusting mercilessly into the pussy, making ",
      defender.get_colored_name(),
      "'s long slim tight legs stick out awkwardly from both sides of ",
      d_call_a,
      "'s waist, stiff, soles pointed at the sky…",
    ]);
    await defender.print_and_wait('So hot… so hot…');
    await defender.print_and_wait('…So hot❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {boolean} is_anal_sex whether this is anal
   */
  async doggy_style(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait('Like a puppy…');
    await attacker.print_and_wait(
      'Those legs… soles taut on tiptoe, knees bent, lifting a wet waist high…',
    );
    await attacker.print_and_wait(
      'And above that support… an ass wagging on its own like a puppy.',
    );
    await attacker.print_and_wait([
      'Ridden under in a lewd pose, the ',
      defender.race > 0 ? 'horse-eared one' : '',
      defender.adult_sex_title,
      " can't stop trembling—enough to make you lick dry lips. As an aphrodisiac for the cock, it makes panting ",
      attacker.get_colored_name(),
      ' behind want to stuff the balls in too.',
    ]);
    if (is_anal_sex) {
      await attacker.print_and_wait(
        '…Eh, then the ass could squeeze the balls out too',
      );
      await attacker.print_and_wait('Sounds like a terrible cold joke, hss.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} d_call_a what the receiver calls the penetrator
   * @param {boolean} is_vagina whether using the vagina
   */
  async sitting(attacker, defender, d_call_a, is_vagina = true) {
    await defender.print_and_wait('More embarrassing than expected…');
    await defender.print_and_wait([
      'While the ',
      is_vagina ? 'pussy' : 'ass',
      ' is being worked hard, stared at straight on…❤️',
    ]);
    await defender.print_and_wait([
      'Already melted soft by a mean cock, yet under ',
      d_call_a,
      "'s gaze you still force the waist straight.",
    ]);
    await defender.print_and_wait([
      'Letting that smiling gaze roam the flushed face…',
      defender.sex_code !== 1 ? 'the bouncing soft breasts…' : '',
      'the belly faintly traced by cock… still not enough…',
    ]);
    await defender.print_and_wait('Not satisfied yet—?');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} d_call_a what the receiver calls the penetrator
   * @param {boolean} is_anal_sex whether this is anal
   */
  async hug_sitting(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait("A pose chosen so you won't be watched.");
    await defender.print_and_wait("But you're still being watched—");
    await defender.print_and_wait([
      'Leaning back on both hands, ',
      defender.get_colored_name(),
      ' unconsciously twists the ass working the cock.',
    ]);
    await defender.print_and_wait([
      'Then, almost lamenting, finds the hot gaze of ',
      attacker.get_colored_name(),
      ' behind gathered there again… and on the little face only ',
      d_call_a,
      " can't see, a melting lewd expression blooms.",
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        'Bad❤️ Why does the cock have to bully right there…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {boolean} is_anal_sex whether this is anal
   */
  async standing(attacker, defender, a_call_d, is_anal_sex = false) {
    await attacker.print_and_wait(
      'Feels like it can reach… closer to the womb than other poses.',
    );
    await attacker.print_and_wait([
      'Drawing a deep breath without thinking, ',
      attacker.get_colored_name(),
      ' leans forward, nestling with ',
      a_call_d,
      ' who has one beautiful leg lifted high past the head.',
    ]);
    await attacker.print_and_wait([
      'Two full balls press flush to the hole; the belly shaped by cock presses tight to ',
      attacker.get_colored_name(),
      "'s belly.",
    ]);
    await defender.say_and_wait('In… out…❤️');
    if (is_anal_sex) {
      await defender.say_and_wait(
        "There's still… a layer of pussy between, isn't there❤️",
        true,
      );
      await defender.say_and_wait('Why…❤️', true);
    }
    await attacker.print_and_wait(
      'Too close—every deep breath that pulls the belly becomes seasoning for this sex.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {boolean} is_anal_sex whether this is anal
   */
  async hug_standing(attacker, defender, is_anal_sex = false) {
    await attacker.print_and_wait('The waist collapses fast.');
    await attacker.print_and_wait([
      'Even as an ',
      defender.race > 0 ? defender.uma_sex_title : 'adult',
      ', the ability to stand on two feet alone is gone—now a mess who can barely stand by bracing something and sticking the ass out.',
    ]);
    await attacker.print_and_wait(
      'Knocked into an inward-toed stance with nothing to do with racing or training; front soles take too much weight as if sinking into the floor, while light rear soles lift high with each cock thrust.',
    );
    await attacker.print_and_wait([
      'As if spontaneously crawling under a cock, the owner of the ',
      is_anal_sex ? 'ass' : 'pussy',
      ' steps knees forward—soft pigeon-toes almost knock together when the cock sinks deep, making the sweat-slick body sway more…',
    ]);
    if (is_anal_sex) {
      await defender.say_and_wait(
        "It shouldn't be like this… but this pose, with the ass hole being forced open by cock… is too much…",
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} d_call_a what the receiver calls the penetrator
   * @param {boolean} is_anal_sex whether this is anal
   */
  async suspended_congress(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait("Can't escape…");
    await defender.print_and_wait(
      'From the moment this pose began, escape was gone.',
    );
    await defender.print_and_wait([
      'Body lifted high, ass held by ',
      d_call_a,
      ' and set on the cock.',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        "A shy ass hole forced into a cock sleeve… and that's not all…",
      );
    }
    await defender.print_and_wait([
      'Legs spread from ',
      d_call_a,
      "'s waist only get the tiny freedom of whether to lock around it. And to keep from dropping fully onto the cock, both arms have only one choice—clinging tight to ",
      d_call_a,
      '.',
    ]);
    await defender.print_and_wait([
      'Will it run down ',
      d_call_a,
      "'s waist…? Absolutely… it will❤️",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} d_call_a what the receiver calls the penetrator
   * @param {boolean} is_anal_sex whether this is anal
   */
  async hug_suspended_congress(
    attacker,
    defender,
    d_call_a,
    is_anal_sex = false,
  ) {
    await defender.print_and_wait("Can't escape…");
    await defender.print_and_wait(
      'From the moment this pose began, escape was gone.',
    );
    await defender.print_and_wait([
      'Body lifted high, ass held by ',
      d_call_a,
      ' and set on the cock.',
    ]);
    if (is_anal_sex) {
      await defender.print_and_wait(
        "A shy ass hole forced into a cock sleeve… and that's not all…",
      );
    }
    await defender.print_and_wait([
      'Legs spread from ',
      d_call_a,
      "'s waist only get the tiny freedom of whether to lock around it. And to keep from dropping fully onto the cock, both arms have only one choice—clinging tight to ",
      d_call_a,
      '.',
    ]);
    await defender.print_and_wait([
      'Will it run down ',
      d_call_a,
      "'s waist…? Absolutely… it will❤️",
    ]);
    await defender.print_and_wait([
      "Haah… and of all times, can't see ",
      d_call_a,
      "'s face.",
    ]);
    await defender.print_and_wait([
      'Expression going hazy in heavy pants—back to ',
      d_call_a,
      ', ',
      defender.get_colored_name(),
      ' gradually bows the waist, hiding a runaway face in the shadow of hanging hair.',
    ]);
    await defender.say_and_wait('Haah…❤️');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} d_call_a what the receiver calls the penetrator
   * @param {boolean} is_anal_sex whether this is anal
   */
  async ask_cowgirl(attacker, defender, d_call_a, is_anal_sex = false) {
    await defender.print_and_wait('Taking it in…');
    await defender.print_and_wait([
      'Fingers locked with lying ',
      d_call_a,
      ', tight elastic glossy legs squat down, hole grinding and seeking a chance to take the huge cock head…',
    ]);
    await defender.print_and_wait([
      'Having to sit on it myself…',
      d_call_a,
      ' is so mean…',
    ]);
    if (is_anal_sex) {
      await defender.say_and_wait('And with the ass hole, no less…', true);
    }
    await attacker.say_and_wait('Hips start rocking too.');
    await defender.print_and_wait([
      'No need to wait on ',
      defender.get_colored_name(),
      "'s slow pace this time—just a cock held in a tight hole gently probing sensitive walls, and ",
      defender.get_colored_name(),
      "'s waist, with nowhere to run, can only dance nonstop before ",
      d_call_a,
      ' as if wound up…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {boolean} is_vagina whether using the vagina
   */
  async ask_stimulate_glans_by_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('Ah… so tired…');
    await defender.print_and_wait([
      'The cock wetly churning ',
      defender.get_colored_name(),
      "'s precious ",
      is_vagina ? 'pussy' : 'ass',
      ' into a messy wet wreck suddenly stops.',
    ]);
    await defender.print_and_wait(
      'Mouth says tired, but the cock between the legs is honestly rock hard.',
    );
    await attacker.say_and_wait("I'll leave the rest to you.");
    await defender.print_and_wait(
      'Part of you wants to sulk and just pull that mean cock out—but one slick inch of distance and the body is unbearably lonely…',
    );
    await defender.print_and_wait([
      'So ',
      defender.get_colored_name(),
      ' twists those hips.',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait(
        'A white ass dances with a wet horse tail for accompaniment.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait('A little deeper.');
    await defender.say_and_wait('Oysters——');
    await attacker.print_and_wait([
      a_call_d,
      ' almost kneaded into ',
      attacker.get_colored_name(),
      "'s body—greedy ",
      attacker.get_colored_name(),
      " doesn't hesitate even past zero distance; the cock under the thrusting waist drives hard forward, making a girl's lips, pussy, and womb moan in fascination…",
    ]);
    await defender.say_and_wait('Guooohhhoooo————❤️❤️');
    await attacker.print_and_wait(
      "That's a G-spot for you—no matter what kind of girl before, gentle or bright, once a hard cock thick with male musk pries that fold open, she falls all at once into a lewd female hooked on sex.",
    );
    await attacker.print_and_wait(
      "A fine body curls under the cock's impacts; only muddy lewd sounds left in the throat; the womb so close burns hot.",
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} d_call_a what the receiver calls the penetrator
   */
  async stimulate_womb(attacker, defender, d_call_a) {
    await defender.print_and_wait(
      'Magic that makes a pussy feel good without a cock.',
    );
    await defender.print_and_wait([
      d_call_a,
      ' smiles with confidence, five fingers open, wide palm covering the lower belly.',
    ]);
    await defender.print_and_wait('Truly a warm touch, but…');
    await defender.say_and_wait('Nngh-nnn—');
    await defender.print_and_wait('An unbecoming sound just slipped out—');
    await defender.print_and_wait(['Almost sinking in…', d_call_a, "'s palm…"]);
    await defender.print_and_wait(
      'And by contrast, the womb pounds with excitement…',
    );
    await defender.print_and_wait([
      'As if caught by ',
      d_call_a,
      "'s magic hand…❤️",
    ]);
    await defender.print_and_wait("…You're kidding❤️");
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {boolean} is_vagina whether using the vagina
   */
  async ask_fuck(attacker, defender, is_vagina = true) {
    const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
    const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
    await attacker.print_and_wait('So embarrassing…');
    await attacker.print_and_wait(
      'To beg for pleasure, doing something like this…',
    );
    await attacker.say_and_wait('Haah…❤️');
    await attacker.print_and_wait([
      'Like surrender,',
      (motion ^ towards) > 0 ? 'spreading the thighs' : 'lifting the ass high',
      ', trembling fingers pry open the clenched ',
      is_vagina ? 'labia' : 'ass hole',
      ', showing the pink inner walls.',
    ]);
    await attacker.say_and_wait('Please… put it in…');
    await attacker.say_and_wait('Put your cock… in—');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {boolean} is_vagina whether using the vagina
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('Haah…');
    await attacker.print_and_wait([
      'Watching this close… watching ',
      a_call_d,
      "'s face below… you can only realize what a terrible person you are❤️",
    ]);
    await attacker.print_and_wait([
      'Shaking the body in abandon, defeated by the taboo, ',
      attacker.get_colored_name(),
      ' flushes pale pink, earnestly serving the cock held in the ',
      is_vagina ? 'pussy' : 'ass',
      '.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {boolean} is_vagina whether using the vagina
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait(
      'Honestly… just this is almost enough to send you to heaven…',
    );
    await attacker.print_and_wait([
      'A total mess… whether the ',
      is_vagina ? 'pussy' : 'ass',
      ' being fucked, or the body melting in pleasure…',
    ]);
    await attacker.print_and_wait([
      'And messier still… is ',
      attacker.get_colored_name(),
      ' yourself, still able to do more…',
    ]);
    await attacker.print_and_wait(
      'Haah… not just yelling oysters—if you draw a deep breath…',
    );
    await attacker.print_and_wait([
      '"Chuu" it tightens—can\'t hold even a second before the body spasms soft, but in that instant, ',
      attacker.get_colored_name(),
      "'s ",
      is_vagina ? 'pussy' : 'ass',
      ' kisses ',
      a_call_d,
      "'s head with feeling.",
    ]);
    await attacker.print_and_wait('Haah… the head jumping—must be happy…');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {boolean} is_vagina whether using the vagina
   */
  async ask_stimulate_hole(attacker, defender, is_vagina = true) {
    await attacker.say_and_wait('Please…');
    await attacker.say_and_wait("I'm begging…");
    if (attacker.race > 0 && attacker.id) {
      await attacker.print_and_wait([
        'As an ',
        attacker.uma_sex_title,
        ", isn't this way too shameful…",
      ]);
    } else {
      await attacker.print_and_wait(
        "As an adult, as a Trainer, isn't this way too shameful…",
      );
    }
    await attacker.print_and_wait("But you can't hold back at all—");
    await attacker.print_and_wait('Because you want it so bad—');
    await attacker.print_and_wait(
      'Want the inside of the womb done hard by a hard cock—hard, rough, strong…',
    );
    await attacker.print_and_wait('"Chuu—— slammed all the way in❤️');
    await attacker.print_and_wait('Body curling with a whoosh—');
    await attacker.print_and_wait([
      "Becoming the world's best-feeling ",
      is_vagina ? 'pussy' : 'pussy and ass',
      '——',
    ]);
    await attacker.print_and_wait(
      'So please… after that, do whatever you want❤️',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker penetrating partner
   * @param {CharaTalk} defender receiving partner
   * @param {PrintedSpan} d_call_a what the receiver calls the penetrator
   */
  async continue_fucking(attacker, defender, d_call_a) {
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('Oooooooh————❤️');
      await defender.print_and_wait([
        defender.get_colored_name(),
        "'s body twists shamelessly before ",
        d_call_a,
        ' in violent spasms, shaking warm crystal drops from wet skin all over.',
      ]);
      await defender.print_and_wait(
        "But there's no room to care about manners—sticky hair twisted and hanging over the brow; a restless pound from inside the belly; even without cock, finger, or mean tongue inside, the fluttering pussy can pull long silver silk like lotus root and breathe out hot steam.",
      );
      await defender.say_and_wait('Coming… almost… there…', true);
      await defender.say_and_wait('Faster… faster… come already❤️', true);
      await defender.print_and_wait([
        "First the strength fails, then it tenses again against its will—even you don't know why this body moves like that. Forced and toyed with this far by ",
        d_call_a,
        ', it is probably only wild instinct left in charge.',
      ]);
      await defender.print_and_wait(
        'How will you come? When will you be made to come?',
      );
      await defender.print_and_wait(
        'A blank head reboots into scrap that can only think about that.',
      );
      await defender.say_and_wait('——❤️');
      await defender.say_and_wait('…Is it… coming❤️', true);
    } else {
      await defender.say_and_wait('Haah…');
      await defender.print_and_wait(
        'Thought it was just a normal breath—but a bewitching sound squeezes from the throat that even startles you…❤️',
      );
      await defender.print_and_wait('Really enjoying this… the body…');
      await defender.print_and_wait('Shyness…? Resistance…?');
      await defender.print_and_wait(
        'Those feelings slipped away sometime with the leaked moans—and now… this honest self wants more… more and more❤️',
      );
      await defender.print_and_wait([
        '…',
        d_call_a,
        "'s body and feel that heat—want more, want ",
        d_call_a,
        ' to teach more filthy things, want this wet feverish body toyed into a shameful state unfit for public…',
      ]);
      await defender.say_and_wait(
        "…Haah… because there's no guarantee of talking the later self into this…",
        true,
      );
      await defender.say_and_wait(
        '…So please… make good use of the time❤️',
        true,
      );
    }
  },
  /** Sadism / humiliation */
  /**
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   */
  async insult(attacker, defender) {
    const buffer = [];
    if (era.get('tflag:强奸') === defender.id) {
      buffer.push(() => attacker.say_and_wait('Scum! Rapist! Just die!'));
    }
    if (era.get(`talent:${attacker.id}:小恶魔`)) {
      buffer.push(() => attacker.say_and_wait('Pathetic～ pathetic～'));
    }
    if (era.get(`talent:${attacker.id}:抖S`)) {
      buffer.push(() =>
        attacker.say_and_wait([
          'Idiot! Trash',
          defender.sex_slave_title,
          '! Fuck-hungry pervert!',
        ]),
      );
    }
    if (buffer.length === 0) {
      buffer.push(() =>
        attacker.say_and_wait([
          'Want to be insulted that badly, ',
          defender.sex_slave_title,
          '?',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 黑衣剑士-星爆气流斩准备就绪
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async hit_face_by_penis(attacker, defender, a_call_d, d_call_a) {
    if (attacker.id > 0) {
      await defender.print_and_wait([
        'Hair held by ',
        d_call_a,
        ", realizing strength can't match at all, watching the cock under ",
        d_call_a,
        "'s crotch rise fiercely, ",
        defender.get_colored_name(),
        ' gets a bad feeling.',
      ]);
      await attacker.say_and_wait([a_call_d, '～Remember my scent well～']);
      await defender.print_and_wait([
        "Can't resist—the cheek feels the slap of it, ",
        d_call_a,
        ' and that fierce cock scent makes ',
        defender.get_colored_name(),
        ' want to yield without thinking.',
      ]);
      await defender.print_and_wait([
        'A mark from ',
        d_call_a,
        "'s cock left on the face—",
        defender.get_colored_name(),
        ' tips the face up, waiting for the next slap',
      ]);
    } else {
      await attacker.print_and_wait([
        'Grabbing ',
        a_call_d,
        "'s hair, ",
        attacker.get_colored_name(),
        ` roughly brings the cock to ${defender.sex === 'She' ? 'her' : 'his'} face, watching ${defender.sex === 'She' ? 'her' : 'his'} face poked by `,
        attacker.get_colored_name(),
        "'s cock with a smile.",
      ]);
      await defender.say_and_wait('Nnn!!!');
      await attacker.print_and_wait([
        'A cock thick with male scent draws ',
        a_call_d,
        "'s nose into constant little sniffs—",
        attacker.get_colored_name(),
        ' grips ',
        a_call_d,
        "'s hair and starts swinging the hips; cock smacking ",
        a_call_d,
        "'s smooth cheek makes lewd sounds that glaze ",
        a_call_d,
        "'s eyes over.",
      ]);
    }
  },
  /** Group play */
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   * @param {string} a_penis attacker cock size
   */
  async ask_double_blow_job(attacker, defender, supporter, is_first, a_penis) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' spreads the legs, ',
        a_penis,
        "'s cock stands proud, ",
        defender.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        ' open mouths and lean in at ',
        attacker.get_colored_name(),
        "'s signal…",
      ]);
    } else {
      await attacker.print_and_wait([
        'At ',
        attacker.get_colored_name(),
        "'s signal, ",
        defender.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        ' take turns serving the cock with their mouths…',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   * @param {string} d_penis defender cock size
   * @param {string} s_penis helper cock size
   */
  async ask_double_fuck(
    attacker,
    defender,
    supporter,
    is_first,
    d_penis,
    s_penis,
  ) {
    const buffer = [];
    if (is_first) {
      buffer.push(
        async () => {
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            ' spreads the thighs toward ',
            defender.get_colored_name(),
            ' and ',
            supporter.get_colored_name(),
            ', parting the pussy, licking lips at both standing cocks',
          ]);
          await attacker.print_and_wait([
            'Under ',
            attacker.get_colored_name(),
            "'s naked invitation, ",
            defender.get_colored_name(),
            ' and ',
            supporter.get_colored_name(),
            " can't hold back, pouncing on ",
            attacker.get_colored_name(),
            ' to take turns thrusting that tempting pussy…',
          ]);
        },
        async () => {
          const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
          const towards =
            era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
          await attacker.print_and_wait([
            attacker.get_colored_name(),
            (motion ^ towards) > 0 ? ' spreads both legs' : ' on all fours',
            ' shakes the ass, signaling ',
            defender.get_colored_name(),
            ' and ',
            supporter.get_colored_name(),
            ' to take turns putting their cocks deep inside.',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          if (d_penis === s_penis) {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              ' is sandwiched between ',
              defender.get_colored_name(),
              ' and ',
              supporter.get_colored_name(),
              '—two ',
              d_penis,
              ' cocks alternately swallowed by ',
              attacker.get_colored_name(),
              "'s slutty pussy",
            ]);
          } else {
            await attacker.print_and_wait([
              attacker.get_colored_name(),
              ' is sandwiched between ',
              defender.get_colored_name(),
              ' and ',
              supporter.get_colored_name(),
              '—two cocks of ',
              d_penis,
              ' and ',
              s_penis,
              ' alternately swallowed by ',
              attacker.get_colored_name(),
              "'s slutty pussy",
            ]);
          }
          await attacker.print_and_wait([
            'Love juices leave all three messy below; from time to time ',
            attacker.get_colored_name(),
            "'s sweet cries ring out…",
          ]);
        },
        async () => {
          await attacker.print_and_wait([
            defender.get_colored_name(),
            ' and ',
            supporter.get_colored_name(),
            "'s different cocks and ways of thrusting,",
          ]);
          await attacker.print_and_wait(
            'plus the taboo of being fucked one after another by two people,',
          );
          await attacker.print_and_wait([
            'make every insertion give ',
            attacker.get_colored_name(),
            ' pleasure beyond the ordinary.',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' rides cowgirl so ',
        defender.get_colored_name(),
        ' goes deep in the pussy, then signals ',
        supporter.get_colored_name(),
        ' to enter the ass too…',
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        ' keep assaulting both of ',
        attacker.get_colored_name(),
        "'s holes front and back—",
      ]);
      await attacker.print_and_wait(
        'double pleasure plus the taboo of being fucked by two at once',
      );
      await attacker.print_and_wait([
        'makes ',
        attacker.get_colored_name(),
        ' moan out loud with every thrust…',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   * @param {boolean} is_vagina whether using the vagina
   */
  async ask_spit_roast(
    attacker,
    defender,
    supporter,
    is_first,
    is_vagina = true,
  ) {
    const part_name = is_vagina ? 'pussy' : 'ass';
    if (is_first) {
      const motion = era.get(`tcvar:${attacker}:体位`) === motion_enum.rev;
      const towards = era.get(`tcvar:${attacker}:朝向`) === towards_enum.right;
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        (motion ^ towards) > 0 ? ' spreads both legs' : ' on all fours',
        ' shakes the ass, signaling ',
        defender.get_colored_name(),
        ' to enter the ',
        part_name,
        ', greedily taking ',
        supporter.get_colored_name(),
        "'s cock into the mouth too…",
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        ' keep assaulting ',
        attacker.get_colored_name(),
        "'s mouth and ",
        part_name,
        '……',
      ]);
      await attacker.print_and_wait([
        'Pleasure below and the choking shock of cock in the mouth leave only cock in ',
        attacker.get_colored_name(),
        "'s head…",
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   * @param {boolean} d_has_penis whether defender has a penis
   * @param {boolean} s_has_penis whether helper has a penis
   */
  async fuck_69(
    attacker,
    defender,
    supporter,
    is_first,
    d_has_penis,
    s_has_penis,
  ) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        " lies on the bed trading licks of each other's ",
        supporter.get_colored_name(),
        ' with ',
        d_has_penis
          ? s_has_penis
            ? 'cock'
            : 'cock and pussy'
          : s_has_penis
            ? 'pussy and cock'
            : 'pussy',
        '，',
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' eagerly drives a swollen excited cock into ',
        defender.get_colored_name(),
        "'s pussy…",
      ]);
    } else {
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' Spray from the pussy soaks ',
        supporter.get_colored_name(),
        "'s face as it works hard licking where ",
        attacker.get_colored_name(),
        "'s cock thrusts—",
      ]);
      await attacker.print_and_wait([
        supporter.get_colored_name(),
        ' is also made to moan by ',
        defender.get_colored_name(),
        "'s mouth…",
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async double_fuck(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' is pinned down by ',
        attacker.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        '—',
      ]);
      await defender.print_and_wait([
        "the two don't care at all about ",
        defender.get_colored_name(),
        "'s feelings.",
      ]);
      await defender.print_and_wait([
        'They only take turns driving highly excited cocks into ',
        defender.get_colored_name(),
        "'s pussy and thrusting hard…",
      ]);
    } else {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' is violated in turn by the cocks of ',
        attacker.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        '.',
      ]);
      await defender.print_and_wait(
        'When one gets a little tired they tag out,',
      );
      await defender.print_and_wait([
        'and only ',
        defender.get_colored_name(),
        "'s juice-spattered fucked pussy barely gets a breath,",
      ]);
      await defender.print_and_wait('consciousness itself almost leaving…');
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   */
  async double_penetration(attacker, defender, supporter, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' is pulled onto ',
        attacker.get_colored_name(),
        ' and entered in the pussy,',
      ]);
      await defender.print_and_wait([
        supporter.get_colored_name(),
        ' while ',
        defender.get_colored_name(),
        ' also enters the ass…',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        ' keep assaulting both of ',
        defender.get_colored_name(),
        "'s holes front and back—",
      ]);
      await defender.print_and_wait(
        'double pleasure plus the taboo of being fucked by two at once',
      );
      await defender.print_and_wait([
        'makes ',
        defender.get_colored_name(),
        ' moan out loud with every thrust…',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {CharaTalk} supporter helper
   * @param {boolean} is_first first action in a continuous sequence
   * @param {boolean} is_vagina whether using the vagina
   */
  async spit_roast(attacker, defender, supporter, is_first, is_vagina = true) {
    const part_name = is_vagina ? 'pussy' : 'ass';
    if (is_first) {
      await defender.print_and_wait([
        defender.get_colored_name(),
        ' is pinned down by ',
        attacker.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        '—',
      ]);
      await defender.print_and_wait([
        "the two don't care at all about ",
        defender.get_colored_name(),
        "'s feelings.",
      ]);
      await defender.print_and_wait([
        'They only drive highly excited cocks into ',
        defender.get_colored_name(),
        "'s ",
        part_name,
        ' and mouth from front and back, thrusting hard…',
      ]);
    } else {
      await defender.print_and_wait([
        attacker.get_colored_name(),
        ' and ',
        supporter.get_colored_name(),
        ' keep assaulting ',
        defender.get_colored_name(),
        "'s ",
        part_name,
        ' and mouth—',
      ]);
      await defender.print_and_wait([
        'Pleasure below and the choking shock of cock in the mouth leave only cock in ',
        defender.get_colored_name(),
        "'s head…",
      ]);
    }
  },
  /** Items */
  /**
   * @param {CharaTalk} chara medicine user
   * @param {number} item item ID
   */
  async use_medicine(chara, item) {
    switch (item) {
      case medicine_enum.fron_k:
      case medicine_enum.fron_p:
        if (chara.sex_code === 0) {
          await era.printAndWait(
            [chara.get_colored_name(), ' grows a fierce giant cock!'],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait([
            chara.get_colored_name(),
            "'s cock grows even more robust!",
          ]);
        }
      // eslint-disable-next-line no-fallthrough
      case medicine_enum.uma_z:
        if (!era.get(`tcvar:${chara.id}:发情`)) {
          await era.printAndWait(
            [chara.get_colored_name(), ' is getting worked up'],
            { color: buff_colors[2] },
          );
        }
        break;
      case medicine_enum.drug_m:
        await era.printAndWait(
          [chara.get_colored_name(), "'s breasts start letting milk flow…"],
          { color: buff_colors[2] },
        );
    }
  },
};
