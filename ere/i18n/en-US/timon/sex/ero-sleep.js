/**
 * @file Training flavor - sleep play
 * @author O口口口口口
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Lips meet.');
      await attacker.print_and_wait([
        'Those slightly parted lips of sleeping ',
        a_call_d,
        ' just begged to be kissed.',
      ]);
      await defender.say_and_wait('Nn…');
      await attacker.print_and_wait(
        'A hand twitches and starts to rise—pressed gently back down. Lean in a little more, and that warm mouth is all yours.',
      );
      await attacker.print_and_wait(
        'Still… doing this alone feels a little lonely.',
      );
    } else {
      await defender.say_and_wait('Nn—');
      await attacker.print_and_wait(
        'Their head starts to sway without meaning to, a flush blooming on their cheeks—breathing is picking up.',
      );
      await attacker.print_and_wait(
        'Maybe it is time to stop… or try something else.',
      );
      await defender.say_and_wait('Chuu…');
      await attacker.print_and_wait('Just one more, then…?');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'Even with their face cupped and the kiss pushed deeper, something still feels empty…',
      );
      await attacker.print_and_wait([
        'Filling ',
        a_call_d,
        "'s mouth with your scent should count as a clean win for a sneaky little raid…",
      ]);
      await attacker.print_and_wait([
        'Haah… still, part of you wishes ',
        a_call_d,
        ' would wake up right now and freak out looking at you… that would be fun, haha.',
      ]);
    } else {
      await defender.say_and_wait('Haah… haah…');
      await attacker.print_and_wait('Tense up. Struggle. Then give in.');
      await attacker.print_and_wait([
        'Cupping their face and teasing them red with your tongue makes ',
        a_call_d,
        "'s body ridiculously easy to read.",
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
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('So nice…');
      await attacker.print_and_wait(
        'Soft. Warm. And… right now, they will not run away.',
      );
      await defender.say_and_wait('Nn…');
      await attacker.print_and_wait(
        'Those muffled sighs spilling from slightly parted lips make it very clear how these ears like to be handled.',
      );
    } else {
      await defender.say_and_wait('Haah…❤️');
      await attacker.print_and_wait(
        'At first… it was just that these warm ears felt too good to let go.',
      );
      await attacker.print_and_wait([
        'Bit by bit, though, you start wanting the full set—every cute expression and sound sleeping ',
        a_call_d,
        ' lets slip without knowing.',
      ]);
      await attacker.print_and_wait(
        'It is fine… there is still plenty of time.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pull_ear(attacker, defender, a_call_d) {
    const is_trainer = attacker.id === 0 && !attacker.race && attacker.race > 0;
    await attacker.print_and_wait('This is wrong…');
    await attacker.print_and_wait(
      is_trainer
        ? '…This is not something a lover—or a Trainer—should be doing…'
        : '…This is not something a lover should be doing…',
    );
    await attacker.print_and_wait('…But still.');
    await attacker.print_and_wait([
      'Looking at sleeping ',
      a_call_d,
      is_trainer
        ? "'s unguarded, pained expression, this totally-unfit-for-a-Trainer prank just will not stop."
        : "'s unguarded, pained expression, this little prank just will not stop.",
    ]);
  },

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'No need to be delicate—these breasts rising and falling with each breath are not going anywhere.',
      );
      await attacker.print_and_wait(
        'So spread your fingers wide and sink into that soft warmth threatening to slip through them.',
      );
      await attacker.print_and_wait(
        'You can even bury your face in them and breathe in that milky scent you would never be allowed in daylight—no one is stopping you.',
      );
    } else {
      await attacker.print_and_wait([
        'Pathetic, really—pinning sleeping ',
        a_call_d,
        ' down, both hands lost in that soft flesh and unable to pull free.',
      ]);
      await attacker.print_and_wait([
        'Ignoring the furrow forming on ',
        a_call_d,
        "'s brow, ignoring the heat building under you…",
      ]);
      await attacker.print_and_wait(
        'None of this was ever allowed—not even with a shy little nod…',
      );
      await attacker.print_and_wait('…Damn. That just made it hotter.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('Hmm… is it just me…');
      await attacker.print_and_wait(
        'Their nipples seem to stiffen a little slower than when they are awake.',
      );
      await attacker.print_and_wait(
        'No complaints, no instinctive shove to bat you away—so those two fingers can lift that pretty pink peak with elegant, practiced ease.',
      );
      await attacker.print_and_wait('Oh… meaning…');
      if (!attacker.race && attacker.race > 0) {
        await attacker.print_and_wait([
          'Wondering what tangled, aching thoughts cross ',
          a_call_d,
          "'s mind when you pinch those nipples, the thoroughly-disqualified dirty Trainer squints in a smile.",
        ]);
      } else {
        await attacker.print_and_wait([
          'Wondering what tangled, aching thoughts cross ',
          a_call_d,
          "'s mind when you pinch those nipples, ",
          attacker.get_colored_name(),
          ' ',
          'squints in a smile.',
        ]);
      }
    } else {
      if (defender.sex_code === 1) {
        await attacker.print_and_wait(
          'Those naughty nipples are rock-hard from the nonstop teasing.',
        );
        await attacker.print_and_wait(
          'Body this rigid… it is basically saying…',
        );
      } else {
        await attacker.print_and_wait(
          'You might even milk something out like this…',
        );
        await attacker.print_and_wait(
          'Those rock-hard, thoroughly teased naughty nipples make the thought hard to shake…',
        );
        await attacker.print_and_wait(
          'And with a body this tense and stiff… it is basically saying…',
        );
      }
      await defender.used_to_say_and_wait(
        'That is a sensitive weak spot—do not touch!',
      );
      await attacker.print_and_wait('Way too cute, haha.');
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
      await attacker.print_and_wait(
        'They will not remember any of this… so you could still back out…',
      );
      await attacker.print_and_wait([
        'You could just sneak this lewd view into your eyes, then scramble to fix ',
        a_call_d,
        "'s clothes like nothing happened.",
      ]);
      await attacker.print_and_wait(
        'Fingers peel back the hood over that little pink pearl, watching the sensitive clit shift from cute pink to a flushed, sultry red in the open air.',
      );
      await attacker.print_and_wait([
        'Trembling with guilty thrills, ',
        attacker.get_colored_name(),
        ' still chooses to keep going.',
      ]);
    } else {
      await defender.say_and_wait('Nn…');
      await attacker.print_and_wait(
        'Ahh… before you knew it, it is swollen red and looking so pitiful.',
      );
      await attacker.print_and_wait([
        'Just light touches and a little patience, and this tiny sensitive bud makes sleeping ',
        a_call_d,
        "'s pure body writhe so shamelessly…",
      ]);
      await attacker.print_and_wait('Rustle… rustle…');
      await attacker.print_and_wait(
        'No mind left—only pleasure driving them to grind against the sheets for relief.',
      );
      await attacker.say_and_wait('I am sorry…', true);
      await attacker.say_and_wait(
        'But let me see it one more time. Just once more.',
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   */
  async finger_fuck(attacker) {
    await attacker.print_and_wait('So… that is how it is…');
    await attacker.print_and_wait(
      'None of the tight, wet resistance you expected—no walls trying to push your fingertips out.',
    );
    await attacker.print_and_wait(
      'Without reason in the way, this honest little hole just eagerly kisses the fingers easing in.',
    );
    await attacker.print_and_wait(
      'Curl up, brush down, follow the way it clenches… out to the sides…',
    );
    await attacker.print_and_wait(
      'Haah… clamp your thighs that tight and I cannot keep going.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async prepare_virgin(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'No need to hide anything, or spare ',
      a_call_d,
      "'s feelings—those cheeks would be burning by now.",
    ]);
    await attacker.print_and_wait(
      'Right now, faced with a body that will not fight back at all…',
    );
    await attacker.print_and_wait(
      `All you have to do is drink in that narrow slit rising and falling with each breath, then ease your fingertips apart until ${defender.sex.toLowerCase()} blooms open into something wetter and far more lewd.`,
    );
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
        'Want to make ',
        defender.sex.toLowerCase(),
        ' feel better… want that pussy softer… want this pretty body to twist without restraint because of what you are doing…',
      ]);
      await attacker.say_and_wait('Haah… haah…');
      await attacker.print_and_wait(
        'You are only moving your fingers, yet the runaway heat in your head has you panting.',
      );
      await attacker.print_and_wait('Where is it… it should be close…');
      await defender.say_and_wait('………');
      await defender.say_and_wait('————❤️');
      await attacker.print_and_wait([
        'That slight rise under your fingers pulls them in on its own—hotter, stickier than the flesh around it… and the answer gets confirmed by ',
        a_call_d,
        "'s suddenly arching belly.",
      ]);
      await attacker.print_and_wait('…Found it.');
    } else {
      await attacker.print_and_wait('Squeeze.');
      await attacker.print_and_wait('Rub.');
      await attacker.print_and_wait('Prod.');
      await attacker.print_and_wait('Tease with the blunt edge of a nail.');
      await attacker.print_and_wait(
        'With no awareness left, whenever and wherever you touch, that sweat-slick soft body answers your fingers with the most honest, fierce feedback.',
      );
      await attacker.print_and_wait('Stop once you have had enough…');
      await attacker.print_and_wait(
        'But will there ever really be a moment you are willing to stop…?',
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
  async pet_anal(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'Ahh… even asleep, they guard this place extra carefully…',
      );
      await attacker.print_and_wait([
        'Fingers from ',
        attacker.get_colored_name(),
        ' draw near with just enough roughness to put the body on alert, circling that tiny hole until ',
        a_call_d,
        "'s once-relaxed legs kick out straight across the bed in a panic.",
      ]);
    } else {
      await defender.say_and_wait('……❤️');
      await attacker.print_and_wait('Finally, then…?');
      await attacker.print_and_wait([
        'Unable to stay clenched, ',
        a_call_d,
        "'s rear hole—melted by that ambiguous teasing—has quietly loosened, turned into a sex-hole that could swallow just about anything, with zero memory of how it happened.",
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   */
  async prepare_anal(attacker) {
    await attacker.print_and_wait([
      'Palm catching the teasing heat breathing from the twitching hole, ',
      attacker.get_colored_name(),
      "'s four fingers pin down the shy flesh trying to close up, locking the hips that want to escape ",
      attacker.get_colored_name(),
      "'s gaze.",
    ]);
    await attacker.print_and_wait(
      "Only the especially long middle finger has other plans—curved like a scorpion's tail, it eases toward the rear entrance, then pushes in slow and firm.",
    );
    await attacker.print_and_wait('The resistance is strong.');
    await attacker.print_and_wait([
      'Walls writhing on their own push back against ',
      attacker.get_colored_name(),
      "'s finger like something alive. This flesh was never meant for sex the way the hole next door is—and yet, faced with ",
      attacker.get_colored_name(),
      "'s finger, it is startlingly eager.",
    ]);
    await attacker.print_and_wait('Afraid… or enjoying this…?');
    await attacker.print_and_wait(
      "Too bad you cannot get an answer from the leading lady's lips right now…",
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
          "As a Trainer, looking at and stroking your trainee's legs with sexual intent…",
        );
        await attacker.print_and_wait(
          'Just describing what is happening in restrained words already sends a cold, guilty shiver through your whole body.',
        );
        await attacker.print_and_wait(
          'After training you sometimes touch them to check their condition, right…?',
        );
        await attacker.print_and_wait(
          'Weirdly enough, right now your head cannot connect these legs to "racing" at all.',
        );
      }
      await attacker.print_and_wait('All you can think about is…');
      await attacker.print_and_wait(
        'If these legs crossed and wrapped around your waist, it would feel amazing.',
      );
      await attacker.print_and_wait('Haah… good thing they are asleep.');
    } else {
      await attacker.print_and_wait('Soft, springy.');
      await attacker.print_and_wait('Long, elegant curves.');
      await attacker.print_and_wait(
        'Sensitive enough that a fingertip can make them tremble.',
      );
      if (defender.race > 0) {
        await attacker.print_and_wait('What a waste…');
        await attacker.print_and_wait(
          'Legs like these, existing only for races…',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_tail(attacker, defender, a_call_d) {
    await attacker.print_and_wait('This is… bad…');
    await attacker.print_and_wait([
      'Not just the tail—perfect in the hand, thick with ',
      a_call_d,
      "'s warm body scent.",
    ]);
    await attacker.print_and_wait([
      'Worse is you: flipping sleeping ',
      a_call_d,
      ' over, ass up, clothes stripped, freely ogling a ',
      defender.teen_sex_title,
      "'s private places like this…",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pull_tail(attacker, defender, a_call_d) {
    await defender.say_and_wait('Nn—');
    await attacker.print_and_wait(
      'Just a little more force and that ass lifts; let go, and the waist collapses too…',
    );
    await attacker.print_and_wait([
      'Hey… do you have any idea what kind of show you are putting on in front of a ',
      attacker.phy_sex_title,
      ', poor ',
      a_call_d,
      '?',
    ]);
    await attacker.print_and_wait(
      'At the same time, there is a faint disappointment.',
    );
    await attacker.print_and_wait('Because…');
    await attacker.say_and_wait(
      [
        a_call_d,
        ' should be able to answer this rough teasing with so much more…',
      ],
      true,
    );
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
      await attacker.print_and_wait([
        'Without reason to steer it, faced with hot breath closing in, fearless ',
        a_call_d,
        "'s pussy only breathes softly with the rise and fall of that belly.",
      ]);
      await attacker.print_and_wait(
        'A scent that makes the heart race… sweet-sour musk melting from tongue to whole body…',
      );
      await attacker.print_and_wait(
        'A tongue forced into a whistling curl, pressing slowly deeper, meeting walls that squirm clumsily against the heat…',
      );
      await attacker.print_and_wait([
        'In the sound of two people breathing, ',
        attacker.get_colored_name(),
        ' alone owns this lewd view—and keeps pushing the tip of that tongue a little farther.',
      ]);
    } else {
      await attacker.print_and_wait(
        'Hard to even recall how pure it looked as a closed little slit. Licked wet inside and out, the hole now flutters open, trembling…',
      );
      await attacker.print_and_wait(
        "Those legs that had been loosely open on the bed have no idea how to answer the slick pleasure between them—so they only tremble, locked tight around the bad kid's shoulders.",
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
  async blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        'The view in front of you really does flood you with guilt…',
      );
      await attacker.say_and_wait([
        'Haah… going after ',
        a_call_d,
        ' while they sleep… I really am…',
      ]);
      if (defender.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait([
          'Umamusume and cock—two words that almost never meet—now stick together wetly on ',
          attacker.get_colored_name(),
          "'s lips…",
        ]);
      }
      await attacker.print_and_wait([
        'Even unconscious, instinct still lifts their hips toward service. ',
        attacker.get_colored_name(),
        "'s lips are forced open by a moving cock; the place meant for taking in nourishment is claimed by that stiff, dangerous thing, freely pouring out a filthy scent that makes the body go strange.",
      ]);
      await attacker.print_and_wait(
        'Does that sleeping face pile on extra shame…? Of course it does.',
      );
      await attacker.print_and_wait(
        'But some desires only get harder to control because of that…',
      );
    } else {
      await attacker.say_and_wait('Slurp, slurp~');
      await attacker.print_and_wait(
        'Getting a little better at this without noticing…',
      );
      await attacker.print_and_wait(
        'Tip the head back a bit, and more of that cock slides in…',
      );
      await attacker.print_and_wait(
        'Lick lightly from the side with a flattened tongue, and it twitches in pleasure.',
      );
      await attacker.print_and_wait('And if you use the lips… suck…');
      await attacker.print_and_wait(
        'Cough… that thick, embarrassing flavor rushes in and makes the head go fuzzy…',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async deep_blow_job(attacker, defender, a_call_d) {
    await attacker.say_and_wait('Want more… deeper…');
    await attacker.print_and_wait([
      'Muttering greedily, ruled by the need for pleasure, ',
      attacker.get_colored_name(),
      ' lowers their head.',
    ]);
    await attacker.say_and_wait('Slurp, slurp…');
    await attacker.print_and_wait([
      '…And from this moment on, ',
      attacker.get_colored_name(),
      "'s little mouth takes on a second purpose besides taking in food—sinking into a filthy sex organ that wetly coils around cock. That fact is already past saving ❤️",
    ]);
    await attacker.print_and_wait(
      'Meet the head with soft throat flesh, brush the swollen veins with a clever tongue tip, lift the shaft with suction that needs no air as a medium…',
    );
    await attacker.print_and_wait([
      'What are you learning, what are you memorizing, what are you turning into… ',
      attacker.get_colored_name(),
      ', crouched beside ',
      a_call_d,
      ' right now…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   */
  async force_deep_blow_job(attacker, defender) {
    await attacker.print_and_wait(
      'The view in front of you really does flood you with guilt…',
    );
    if (defender.sex_code === 0 && defender.race > 0) {
      await attacker.print_and_wait(
        'Umamusume and cock—two words that almost never meet—now stick together wetly…',
      );
    }
    await attacker.print_and_wait([
      'A ',
      defender.teen_sex_title,
      "'s lips are forced open by cock; the place meant for taking in nourishment is claimed by that stiff, dangerous thing, freely pouring out a filthy scent that makes the body go strange.",
    ]);
    await attacker.print_and_wait(
      'Does that sleeping face pile on extra reluctance…? Of course it does.',
    );
    await attacker.print_and_wait(
      'But some desires only get harder to control because of that…',
    );
  },

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async hand_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'Sleeping ',
      a_call_d,
      ' does not say a word, but staring at that swollen, flushed cock, ',
      attacker.get_colored_name(),
      "'s already-warming fingers know exactly what to do.",
    ]);
    await defender.say_and_wait('Nn—');
    await attacker.print_and_wait([
      'Shocked by that searing heat, ',
      attacker.get_colored_name(),
      ' flinches back from the cock on instinct—then, like sliding feet under a winter blanket, eases closer again little by little.',
    ]);
    await attacker.print_and_wait(
      "Such a fierce shape… the kind that makes a girl's belly jump…",
    );
    await attacker.print_and_wait(
      'But… once fingers wrap around it, and a light stroke makes pre drip and dance between them… it is a little cute.',
    );
    await defender.say_and_wait('Haah… haah… nn—');
    await attacker.print_and_wait('Starting to understand the language…');
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
      await attacker.print_and_wait('It somehow feels…');
      await attacker.print_and_wait('surprisingly natural…');
      await attacker.print_and_wait(
        'Once both hands lift the cock, the head leans in on its own.',
      );
      await attacker.print_and_wait(
        'Warm it between fingers, work it open, then…',
      );
      await attacker.say_and_wait('Chuu~');
      await attacker.print_and_wait('So thick…');
      await attacker.print_and_wait(
        'Totally turned into a dirty little sneak-thief…',
      );
    } else {
      await attacker.print_and_wait(
        'Push the cock aside and tip your head to lick it top to bottom, like a melting ice cream dripping at the edges.',
      );
      await attacker.say_and_wait('Slurp, slurp—');
      await attacker.print_and_wait([
        a_call_d,
        "'s cockhead is glossy now—whose spit is more to blame for that shine…?",
      ]);
      await attacker.print_and_wait('Completely… cannot tell anymore…❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async fuck_tit(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Is this not amazing?');
    await attacker.print_and_wait([
      'This pose—',
      a_call_d,
      ' leaning low over you, cupping that ',
      defender.teen_sex_title,
      '-soft flesh around a burning cock…',
    ]);
    await defender.say_and_wait('Nn…');
    await attacker.print_and_wait(
      'It seems to land perfectly—the hot white steam of lust rising from the cockhead.',
    );
    await attacker.print_and_wait(
      'Compared to when they are awake and guarded, this completely unguarded sleeping face is honest enough to turn you on.',
    );
    await attacker.print_and_wait(
      'Mm. That expression is already seasoned to perfection.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async tit_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      'Nobody even asked, and yet the top gets pulled down on its own to bare those breasts…',
    );
    await attacker.say_and_wait('How far am I going to fold for a cock…', true);
    await attacker.print_and_wait(
      'And the cock wrapped in that softness stands proud—hard enough to make a pussy quiver with ease.',
    );
    await attacker.print_and_wait([
      'Hands gathering the soft mounds on purpose, unable to look up, ',
      attacker.get_colored_name(),
      ' pictures the face ',
      a_call_d,
      ' would make if they were awake.',
    ]);
    await attacker.print_and_wait([
      'Whatever face that imagination showed, in the quiet room ',
      attacker.get_colored_name(),
      "'s heart pounds hard.",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   */
  async tit_and_blow_job(attacker, defender) {
    await attacker.print_and_wait([
      defender.race > 0
        ? 'Is making the cock stand happily between your breasts still not enough… what kind of eyes do you look at your trainee with on a normal day…'
        : 'Is making the cock stand happily between your breasts still not enough… what kind of eyes do you look at your partner with on a normal day…',
    ]);
    await attacker.say_and_wait('Slurp, slurp, slurp…');
    await attacker.print_and_wait([
      'Breast flesh goes slick and shiny with pre dripping down the shaft, but more than the hardworking chest, the hottest, fullest cockhead gets welcomed into ',
      attacker.get_colored_name(),
      "'s mouth with both hands.",
    ]);
    await defender.say_and_wait('Nn…');
    await attacker.print_and_wait(
      'The tongue starts to stop listening—but the second that cockhead in the mouth feels even a little lonely, the service of nipples pressing and pleasing the cock just will not stop…',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   */
  async suck_nipple(attacker, defender) {
    await attacker.print_and_wait([
      'No instinct at all to pull that ',
      era.get(`talent:${defender.id}:乳头类型`) > 0
        ? 'pretty pink nipple'
        : 'pretty brown nipple',
      ' away from ',
      attacker.get_colored_name(),
      ' leaning in—the soft ',
      defender.teen_sex_title,
      " flesh rising and falling is obediently taken into a bad kid's mouth.",
    ]);
    await attacker.say_and_wait('Suck—');
    await attacker.print_and_wait([
      'Bit by bit, that hot red point on the tongue tip hardens for real, so ',
      attacker.get_colored_name(),
      ' carefully catches it between teeth and sucks hard—',
    ]);
    await defender.say_and_wait('Nn—');
    await attacker.print_and_wait(
      'Haah… a little late to start struggling now, haha.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'The moment teeth catch that stiff nipple, sleeping ',
      a_call_d,
      ' lying face-up goes rigid all at once.',
    ]);
    await attacker.print_and_wait('Oh… is that so…');
    await attacker.print_and_wait(
      `Gently working the teeth, leaving a ring of uneven red marks around the sensitive nipple… and making the ${defender.teen_sex_title} in your arms tremble without stop…`,
    );
    await attacker.print_and_wait([
      'Seems they understand what comes next—the second the nipple is licked wet and smooth, ',
      a_call_d,
      "'s legs wrap around ",
      attacker.get_colored_name(),
      "'s waist…",
    ]);
    await defender.say_and_wait('Nn—');
    await attacker.print_and_wait('Cute.');
    await attacker.print_and_wait([
      'Not just ',
      a_call_d,
      ' in your arms—those nipples covered in red, swollen marks too.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async force_armpit_intercourse(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'Sleeping ',
      a_call_d,
      "'s unguarded arm is lifted straight up by lust-drunk ",
      attacker.get_colored_name(),
    ]);
    await attacker.print_and_wait([
      'Then ',
      a_call_d,
      "'s armpit gets thoroughly cleaned by a thick cockhead taking full responsibility.",
    ]);
    await attacker.print_and_wait(
      'Hot armpit flesh flushes under the thrusts, almost turning into a proper erotic organ…',
    );
    await attacker.print_and_wait([
      'Not quite able to treat it as natural, ',
      attacker.get_colored_name(),
      "'s movements carry a little hesitation…",
    ]);
    await attacker.print_and_wait([
      '…hesitation that still has a cock grinding and thrusting into the armpit "hole" of ',
      a_call_d,
      ' facing away…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async force_foot_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Hah… this is full-on pervert territory.');
    await attacker.print_and_wait([
      'Cupping sleeping ',
      a_call_d,
      "'s feet to serve your cock—is that courage only because unguarded ",
      a_call_d,
      ' cannot shoot you a straight look of disgust…?',
    ]);
    await attacker.print_and_wait([
      'At first, feet startled by unfamiliar heat try to shy away, only to be pulled back by ',
      attacker.get_colored_name(),
      "'s hands.",
    ]);
    await attacker.print_and_wait('Then they seem to get it.');
    await attacker.print_and_wait(
      'The cock invading those soles is not something fragile.',
    );
    await attacker.print_and_wait([
      a_call_d,
      "'s way of stepping on that cock gets a lot more natural.",
    ]);
    await attacker.print_and_wait([
      'As if pinning ',
      attacker.get_colored_name(),
      "'s cock underfoot was some born talent.",
    ]);
    await attacker.print_and_wait('Hss…');
    await attacker.print_and_wait([
      'Just thinking that makes ',
      attacker.get_colored_name(),
      "'s lower belly heat up all over again.",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   */
  async foot_job(attacker) {
    await attacker.print_and_wait(
      'Standing up on the bed makes even the cock looking smaller in your view feel a lot cuter.',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' lifts a foot and pins that flushed cock underfoot.',
    ]);
    await attacker.print_and_wait(
      'Huh… even a cock this impressive wobbles this cutely when it is under a sole, haha.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async tail_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait('So flexible…');
    await attacker.print_and_wait([
      'With a deftness even ',
      attacker.get_colored_name(),
      ' did not expect, a horse tail full of curved hair coils around the cock.',
    ]);
    await attacker.print_and_wait([
      'The dizzyingly thick scent of cock gets a layer of camouflage from the tail—and that only makes ',
      a_call_d,
      "'s cock more excited than ever.",
    ]);
    await attacker.print_and_wait([
      'So… ',
      defender.uma_sex_title,
      ' tails can really do this…',
    ]);
    await attacker.print_and_wait([
      '…Feeling that swelling heat, ass raised and back turned, even ',
      attacker.get_colored_name(),
      "'s flushed ears start moving cutely.",
    ]);
  },

  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {boolean} is_vagina vaginal or anal
   */
  async missionary(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait(
      "Maybe this is… the pose that lets you feel each other's body heat the most.",
    );
    await attacker.print_and_wait([
      'Missionary—looked at from the front of two tangled bodies, it almost looks like ',
      attacker.get_colored_name(),
      ' diving into an embrace to nurse.',
    ]);
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' covers ',
      a_call_d,
      "'s body, a rock-hard cock thrusting without mercy into ",
      is_vagina ? 'that pussy' : 'that ass',
      ', leaving unconscious ',
      a_call_d,
      "'s long, tight legs sticking out awkwardly past ",
      attacker.get_colored_name(),
      "'s waist, stiff, soles pointed at the ceiling…",
    ]);
    await attacker.print_and_wait([
      'Obedient to an almost eerie degree, ',
      a_call_d,
      "'s body sinks light and soft into your arms.",
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async doggy_style(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Just like a puppy…');
    await attacker.print_and_wait(
      'Those legs… toes pointed tight, knees bent, wet hips held high…',
    );
    await attacker.print_and_wait(
      'And above them, an ass that sways without thinking—just like a puppy.',
    );
    await attacker.print_and_wait([
      'A little sad, though: since ',
      a_call_d,
      ' still has not woken up, holding the pose depends entirely on ',
      attacker.get_colored_name(),
      "'s hands locked around that waist.",
    ]);
    await attacker.print_and_wait([
      'Lifted from the bed like a doll into this lewd pose, ',
      a_call_d,
      ' cannot stop trembling—enough to make anyone lick dry lips.',
    ]);
    await attacker.print_and_wait(
      'Completely one-sided violence at this point…',
    );
    await attacker.print_and_wait('But… that is fine…');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait('Deeper.');
    await attacker.print_and_wait([
      'With no begging from ',
      a_call_d,
      ' to hold you back, you can sink in until the whole cock disappears, folding sleeping ',
      a_call_d,
      ' into your body.',
    ]);
    await attacker.print_and_wait(
      'Gentle or bright—once a hard cock reeking of male musk pries those folds open, it all collapses into a filthy female heat addicted to sex.',
    );
    await attacker.print_and_wait(
      'That fine body curls up under the pounding; only muddy lewd sounds left in the throat, while the womb right there burns hot.',
    );
    era.println();
    await attacker.print_and_wait(
      '…………Still, doing this while a girl sleeps—quietly training her body with cock and pleasure…',
    );
    await attacker.say_and_wait(
      'Even as the one doing it, you have to admit—this is pretty damn underhanded ❤️',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async stimulate_womb(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      'Magic that can make a pussy feel good without a cock.',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      ' smiles with confidence and spreads five fingers, laying a broad palm over the lower belly.',
    ]);
    await attacker.print_and_wait('It is a warm touch, but…');
    await defender.say_and_wait('Nngh-uuu—');
    await attacker.print_and_wait('An ugly little sound just slipped out—');
    await attacker.print_and_wait([
      defender.get_colored_name(),
      "'s calm sleep-breathing suddenly turns sharp and restless.",
    ]);
    await attacker.print_and_wait([
      'Almost sinking in… ',
      attacker.get_colored_name(),
      "'s palm…",
    ]);
    await attacker.print_and_wait(
      'And by contrast, the womb starts pounding with excitement…',
    );
    await attacker.print_and_wait([
      'Like it was caught in ',
      attacker.get_colored_name(),
      "'s magic hand…",
    ]);
    await defender.say_and_wait('————❤️');
    await attacker.print_and_wait([
      'Even after waking, ',
      a_call_d,
      ' will probably still remember this pleasure that makes the legs shake.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {boolean} is_vagina vaginal or anal
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('Swallowed it…');
    await attacker.print_and_wait([
      'Fingers laced willfully with lying ',
      a_call_d,
      ', ',
      attacker.get_colored_name(),
      ' squats down on those tight, springy, glossy legs, grinding the entrance to find a chance to take in that thick cockhead…',
    ]);
    if (!is_vagina) {
      await attacker.print_and_wait('Here… secretly… with the ass hole…❤️');
    }
    await attacker.print_and_wait([
      'No waiting on ',
      a_call_d,
      "'s slow, gentle pace this time—once the cock is inside that tight channel and starts lightly probing the sensitive walls, ",
      attacker.get_colored_name(),
      "'s trapped waist can only wind up and dance without rest right in front of ",
      a_call_d,
      '…',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker active partner
   * @param {CharaTalk} defender passive partner
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {boolean} is_vagina vaginal or anal
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait(
      'Honestly… even just this feels like heaven…',
    );
    await attacker.print_and_wait([
      'A mess… whether it is the state of the ',
      is_vagina ? 'pussy' : 'ass',
      ' being fucked, or a body drowning in pleasure…',
    ]);
    await attacker.print_and_wait([
      'And the one reducing ',
      attacker.get_colored_name(),
      ' to this is only ',
      a_call_d,
      "'s half-asleep cock ❤️",
    ]);
    await attacker.print_and_wait('Haah… if you take a deep breath…');
    await attacker.print_and_wait([
      'A soft "chuu" as it clenches—cannot even hold a full second before the body spasms and goes limp, but in that instant, ',
      attacker.get_colored_name(),
      "'s ",
      is_vagina ? 'pussy' : 'ass',
      ' kisses ',
      a_call_d,
      "'s cockhead with real feeling.",
    ]);
    await attacker.print_and_wait(
      'Haah… that twitching cockhead must be happy…',
    );
    await attacker.print_and_wait([
      'Even while riding ',
      a_call_d,
      ' and holding the initiative in pose, ',
      attacker.get_colored_name(),
      "'s face is flushed with pure shaken heat.",
    ]);
  },
};
