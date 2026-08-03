/**
 * @file Training flavor - rape
 * @author ALEX
 * @author Katze (translator)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { stain_enum } = require('#/data/ero/stain-const');

module.exports = {
  /** Communication */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   */
  async kiss(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        'Pretty eyes blow wide with terror; the body locked in ',
        d_call_a,
        "'s arms won't stop trembling.",
      ]);
      await defender.say_and_wait('Nngh…');
      await defender.print_and_wait(
        'A thick, heavy tongue forces its way into the mouth, past teeth trying to bar the way, and licks greedily along the roots of the gums.',
      );
      await defender.print_and_wait([
        'Held tight like this, all you can do is let wet kiss-sounds and drool spill free.',
      ]);
    } else {
      await defender.say_and_wait(['Guh…']);
      await defender.print_and_wait([
        'The mouth that just cried out is sealed again by ',
        d_call_a,
        "'s lips.",
      ]);
      await defender.print_and_wait([
        'Helpless, you can only shut your eyes and clutch the arms holding you.',
      ]);
      await defender.print_and_wait([
        'Letting that mouth plunder yours, feeding more low, wet tongue-sounds into the air.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('Haa…');
      await defender.print_and_wait([
        'No mercy at all—jaws are pried open, and a scrambled brain takes a second too long to catch up, leaving the body open to whatever comes next.',
      ]);
      await defender.print_and_wait([
        'Every inch of the mouth is licked raw; that limp tongue is sucked for who knows how long…',
      ]);
      await defender.print_and_wait([
        'By the time you try to fight back, the tingle still left in your mouth nearly makes you moan while you swallow on reflex.',
      ]);
    } else {
      await defender.say_and_wait('Bastard… stop… *schlick*…');
      await attacker.print_and_wait([
        'Tongue keeps taking more of ',
        a_call_d,
        "'s mouth; the resistance only makes thicker wet sounds between locked tongues.",
      ]);
      await attacker.print_and_wait([
        'Hormone-thick spit is forced down; a throat busy swallowing just to breathe has to drink every drop.',
      ]);
      await attacker.print_and_wait([
        'The deep kiss drags on, tears and crystal spit from ',
        a_call_d,
        ' dripping to the floor.',
      ]);
    }
  },
  /** Caress */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Without permission, fingers start on ',
        a_call_d,
        "'s ears—fine down and hot rims that match the flush on that face.",
      ]);
      await attacker.print_and_wait([
        'A light pinch, and the head jerks aside at once with a hard whimper of protest.',
      ]);
      await attacker.print_and_wait([
        'Struggle and furrowed brows change nothing; continuous pressure from the tips still steals the strength out of ',
        a_call_d,
        ' in seconds.',
      ]);
    } else {
      await defender.print_and_wait([
        'Head dips, trembling, while those ears get caressed like sex organs.',
      ]);
      await defender.say_and_wait(['Can we be done…'], true);
      await defender.say_and_wait(['Nngh!']);
      await defender.print_and_wait([
        'Sensitive roots and inner folds get poked; the ears snap upright on reflex.',
      ]);
      await defender.print_and_wait([
        'Those stiff horse ears slap the side of that face with a *pak*, and all it earns is laughter.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait(
      'Horse ears already warmed by earlier touches press unwillingly into the hair, trying to dodge more abuse.',
    );
    await attacker.print_and_wait([
      'They get caught easily and yanked without hesitation, wringing half-choked pleas out of the racing ',
      defender.uma_sex_title,
      ' in front of you.',
    ]);
    await attacker.print_and_wait([
      'Ear tips spasm on instinct, flushed a cute, blood-hot pink.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Hands cup soft, pudding-like breasts, pressing gently, palm reading the climbing heartbeat of the ',
        defender.race > 0 ? 'mare' : 'female',
        ' under this assault.',
      ]);
      await defender.say_and_wait(["I'll never—never forgive you…"]);
      await defender.say_and_wait(['Nngh!!!']);
      await attacker.print_and_wait([
        'Those breasts get kneaded into new shapes until the threat on those lips gets shoved aside by heat on the chest.',
      ]);
      await attacker.print_and_wait(['So… what shape next?']);
    } else {
      await attacker.print_and_wait([
        'Warm breast-flesh deforms under the palms; nipples between the fingers stand out harder with every pass.',
      ]);
      await attacker.print_and_wait([
        'Like savoring the feel again and again.',
      ]);
      await defender.say_and_wait(['Bastard!!!']);
      await attacker.print_and_wait([
        a_call_d,
        ' curses the one using ',
        defender.sex === 'She' ? 'her' : 'his',
        ' chest however they please… and that is all ',
        defender.sex === 'She' ? 'she' : 'he',
        ' can do.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Fingers roll already stiff berry-hard tips, tweaking them like radio dials.',
      ]);
      await attacker.print_and_wait([
        'Blood-red nipples burn hotter, insisting on being noticed.',
      ]);
      await attacker.print_and_wait([
        a_call_d,
        ' clenches teeth; the edge of those lips starts to show the strain.',
      ]);
      await attacker.print_and_wait(['…Then a little more force.']);
    } else {
      await attacker.print_and_wait([
        'No restraint—fingers dart over standing nipples, tapping and pressing the tips again and again.',
      ]);
      await attacker.print_and_wait([
        'Pulling grain-hard nipples while a pink body trembles… still stubbornly sealing those lips.',
      ]);
      await attacker.print_and_wait(['Easy—just a light pinch of nail…']);
      await defender.say_and_wait(['Nngh—❤️!']);
      await attacker.print_and_wait([
        'And that buys a short, sharp cry from ',
        a_call_d,
        ', tongue tip shining with spit at the corner of the mouth.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Two fingers part the hood; the bare little clit twitches shyly.',
      ]);
      await defender.say_and_wait(['Hey… what are you…']);
      await attacker.print_and_wait([
        'A nail hooks under the skin of the clit and lifts; ',
        a_call_d,
        ' bows on instinct, body shivering open.',
      ]);
    } else {
      await attacker.print_and_wait([
        'The hood is peeled back rough; index pins the clit while middle and ring hold the lips.',
      ]);
      await attacker.print_and_wait([
        'Scrapes and vibrations work it until the swollen clit is hypersensitive under every pinch and tug.',
      ]);
      await attacker.print_and_wait([
        'Constant pleasure rides the spine into ',
        a_call_d,
        "'s brain—even iron will has to crack a little under this.",
      ]);
      await defender.say_and_wait([
        "Nnhii…❤️ My clit—you'll break it… aaaah❤️",
      ]);
      await attacker.print_and_wait(['True… it is getting a little swollen.']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_hair defender hair description with color
   */
  async finger_fuck(attacker, defender, is_first, a_call_d, d_hair) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = 'pretty pink';
        break;
      case 1:
        vagina_desc = 'flushed purple-red';
        break;
      case 2:
        vagina_desc = 'deep and mature';
    }
    if (is_first) {
      await attacker.print_and_wait([
        'Index and middle barely measure the gap—before ',
        a_call_d,
        ' can react, both fingers drive straight into that ',
        vagina_desc,
        ' pussy.',
      ]);
      await defender.say_and_wait(['Eep… n-no… bastard!']);
      await attacker.print_and_wait([
        'Head snaps back; the ',
        d_hair,
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        ' cries out like a swan shot from the sky—pain braided with sweet pleasure.',
      ]);
    } else {
      await attacker.print_and_wait([
        'Fingertips thrust rough through soft wet heat, switching between taps, squeezes, and scrapes while the free hand presses the lower belly in time.',
      ]);
      await defender.say_and_wait(['Nngh…']);
      await attacker.print_and_wait([
        a_call_d,
        ' clamps both hands over those pink lips; pretty eyes go wet and hazy.',
      ]);
      await attacker.say_and_wait(['Looks like it works, ', a_call_d, '.']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(['Circling outside is boring.']);
      await attacker.print_and_wait([
        'Fingers push deeper, hunting places ',
        a_call_d,
        ' rarely reaches alone—until a fingertip skims a tiny ridge on the wall.',
      ]);
      await defender.say_and_wait(['Haa… please…']);
      await defender.say_and_wait(['—Yaaah~!']);
      await attacker.print_and_wait([
        'One light squeeze, and ',
        a_call_d,
        "'s plea melts into open moans.",
      ]);
      await attacker.print_and_wait([
        'An ahegao you only expect from porn spreads across that face.',
      ]);
    } else {
      await defender.say_and_wait(['Haa~ what… is this…']);
      await attacker.print_and_wait([
        'Hips squirm in fear, only making soft hole-flesh clamp tighter around the invading fingers.',
      ]);
      await attacker.print_and_wait([
        'Once the weak spot is known, a pussy that first tried to push the intruder out now rubs its ridge eagerly on the rough fingerprint pads.',
      ]);
      await attacker.print_and_wait([
        'Sweat runs down ',
        defender.sex === 'She' ? 'her' : 'his',
        ' smooth cheek to a parted mouth, mixing with spit on the slightly stuck-out tongue tip.',
      ]);
      await defender.say_and_wait(['Nngh…']);
      await attacker.print_and_wait([
        'Half-lidded eyes, whites showing—like sleep is only a second away.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {string} d_skin_color defender skin color hex
   */
  async pet_leg(attacker, defender, is_first, a_call_d, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = 'ivory';
        break;
      case 0:
        skin_desc = 'fair';
        break;
      case 1:
        skin_desc = 'rosy';
        break;
      case 2:
        skin_desc = 'light-brown';
    }
    if (is_first) {
      await attacker.print_and_wait([
        "Not a checkup, not a lover's touch—just hands taking the ",
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        "'s thighs against ",
        defender.sex === 'She' ? 'her' : 'his',
        ' will.',
      ]);
      await attacker.print_and_wait([
        'Skin that reads ',
        { color: d_skin_color, content: skin_desc },
        ', with just the right give.',
      ]);
      await attacker.print_and_wait([
        'Tracing that long curve, feeling the work ',
        a_call_d,
        ' put into those legs—the springy snap when you let go is pure luxury on the fingertips.',
      ]);
      await attacker.print_and_wait(['Training paid off…']);
    } else {
      await attacker.print_and_wait([
        a_call_d,
        "'s full, curved thighs take on a lewd pink sheen and oily sweat under palm after palm.",
      ]);
      await attacker.print_and_wait([
        'Trying to close the thighs only offers up the more sensitive inner root.',
      ]);
      await attacker.print_and_wait([
        'A whole hand buried in thigh meat enjoys that tight squeeze.',
      ]);
      await attacker.print_and_wait([
        'Looking at ',
        a_call_d,
        "'s flushed, disgusted face feels like touching a sex organ without consent.",
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_hair defender hair description with color
   */
  async pet_tail(attacker, defender, is_first, a_call_d, d_hair) {
    if (is_first) {
      await attacker.print_and_wait([
        'A free hand slides down the back; the moment it grazes the base of the tail, tense ',
        a_call_d,
        ' shivers all over like a shock.',
      ]);
      await defender.say_and_wait(["You! Bastard! Don't you dare!"]);
      await attacker.print_and_wait([
        'That fierce stare from the Umamusume is undercut by glittering tears in pretty eyes.',
      ]);
    } else {
      await attacker.print_and_wait([
        'Fingers keep teasing the tail root, watching ',
        a_call_d,
        ' fight the stimulus with a pitiful, stubborn face.',
      ]);
      await defender.say_and_wait(['Ha… ha~ ha~ scum…']);
      await attacker.print_and_wait([
        'Teeth gritted, body shaking—only feeding a crueler urge.',
      ]);
      await attacker.print_and_wait([
        'Worse still: looping that ',
        d_hair,
        ' tail and giving it a light tug.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async pull_tail(attacker, defender) {
    await defender.say_and_wait('Eep~❤️');
    await defender.print_and_wait([
      'From tip to root, then a weird wave through the whole body.',
    ]);
    await defender.print_and_wait([
      'Like a long-dead wire plugging back in—pain at the base, up to the brain, then back down to a buzzing pussy.',
    ]);
    await defender.print_and_wait([
      'Body arches back and, without thinking, the tail starts to wag for mercy.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Eyes narrow in close on ',
        a_call_d,
        "'s already stiff, swollen clit.",
      ]);
      await attacker.print_and_wait([
        'Breath is aimed on purpose; the stimulated nub stands a little higher.',
      ]);
      await defender.say_and_wait(["Don't—don't look…"]);
      await attacker.print_and_wait([
        'Tongue lands hard on the clit; that sharp scolding softens into something closer to begging.',
      ]);
      await attacker.print_and_wait([
        'A twitching, dripping pussy soaks the lips wet.',
      ]);
    } else {
      await defender.print_and_wait([
        'Sensitive clit under a tongue tip; locked teeth still leak whimpers with every move from this bastard.',
      ]);
      await defender.print_and_wait(["But this isn't giving up that easy!"]);
      await defender.say_and_wait(['Yaaah!!!']);
      await defender.print_and_wait([
        'Sudden sting and electric pleasure snap the body straight; the mouth twitches out of control.',
      ]);
      await defender.say_and_wait(["Don't—don't use teeth there!"]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async suck_virgin(attacker, defender, is_first, a_call_d) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = 'pretty pink';
        break;
      case 1:
        vagina_desc = 'flushed purple-red';
        break;
      case 2:
        vagina_desc = 'deep and mature';
    }
    if (is_first) {
      await defender.say_and_wait(["Don't… don't… get off…"]);
      await attacker.print_and_wait([
        'Lips plant on ',
        a_call_d,
        "'s ",
        vagina_desc,
        ' pussy with zero regard for those shaky, toothless threats.',
      ]);
      await attacker.print_and_wait([
        'A light suck, then a warm soft tongue into the canal.',
      ]);
      await attacker.print_and_wait([
        'Scraping soft folds inside; the canal squeezes now and then like it wants the tongue out.',
      ]);
    } else {
      await defender.say_and_wait(["Don't… mmpfh…"]);
      await defender.print_and_wait([
        'Shallow folds have already been thoroughly crushed by the intrusion.',
      ]);
      await defender.print_and_wait([
        'Between low curses, ',
        defender.race > 0 ? 'those race-built ' : '',
        'legs tremble and clamp uselessly around the head buried between them.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        'The rank tip at the lips is taken in; tongue settles on the shaft slow with hesitation.',
      ]);
      await attacker.say_and_wait(['Put more into it.']);
      await defender.say_and_wait(['Pushing it…'], true);
      await defender.say_and_wait(['Nngh…']);
      await defender.print_and_wait([
        'Still, yielding under the moment, the mouth narrows on its own, lips sliding up and down to paint spit evenly over the cock.',
      ]);
      await defender.print_and_wait([
        'Tongue licks raised veins with pure reluctance, making the shaft shine wet.',
      ]);
      await defender.say_and_wait(['Nngh… it got bigger again…'], true);
    } else {
      await defender.print_and_wait([
        "Eyes shut—if you don't see it, maybe it won't matter.",
      ]);
      await defender.print_and_wait([
        'Reliable smell still reports the truth without mercy.',
      ]);
      await defender.print_and_wait([
        'Soft scented lips wrap the penis; a tongue trained for song coils the tip; hands that should hold a trophy steady the shaft instead.',
      ]);
      await defender.print_and_wait(['Kiss… breathe… scent…']);
      await defender.say_and_wait(['It stinks…'], true);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async force_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'A cock swollen to the limit pries ',
        a_call_d,
        "'s lips open.",
      ]);
      await attacker.print_and_wait([
        'Soft lips ring the shaft, sliding; a cheek even bulges with the shape.',
      ]);
      await attacker.print_and_wait([
        'Reflex-tight lips and inner cheek mucosa build an extremely tight oral hole.',
      ]);
      await attacker.print_and_wait([
        'Best of all is that bright, contemptuous stare aimed your way.',
      ]);
    } else {
      await defender.say_and_wait(['Ha…❤️']);
      await attacker.print_and_wait([
        'Eyes that once locked on you now lose focus between breaths when the cock leaves the mouth.',
      ]);
      await attacker.print_and_wait([
        'Someone named ',
        defender.get_colored_name(),
        ', this ',
        defender.race > 0 ? defender.sex_slave_title : defender.phy_sex_title,
        ', unthinkingly cradles the cock on a sticking-out tongue.',
      ]);
      await attacker.print_and_wait([
        'Spit and precum drip while deep breaths pull in air thick with cock-stink.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(['Haaa~~~ nnh~~ guh~~']);
      await attacker.print_and_wait([
        'Handled under the hips like a fine ',
        defender.race > 0 ? 'horse-eared ' : '',
        'sex doll.',
      ]);
      await attacker.print_and_wait([
        'The whole mouth is claimed, sealed into a near-vacuum oral hole.',
      ]);
      await defender.say_and_wait(['Guh~']);
      await attacker.print_and_wait([
        'A mouth that was full of complaints can only suck now.',
      ]);
      await defender.say_and_wait(["Nngh~ so hot~ can't breathe~"], true);
      await defender.print_and_wait([
        'Ears only catch fast, heavy wet sounds.',
      ]);
      await defender.print_and_wait([
        'The practiced look of contempt collapses into pretty eyes that only know how to roll up.',
      ]);
      await defender.print_and_wait([
        "Every rough thrust flattens the throat; stretched esophagus chokes the windpipe while throat-meat clamps this bastard's cock.",
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          'Even pausing inside to smear leftover cum on tongue and cherry lips before pulling free with regret.',
        ]);
        await defender.print_and_wait([
          'A murky white string stretches between the filthy tip and thin lips.',
        ]);
      }
      await defender.print_and_wait([
        'Extra throat fluid and drool get forced down too.',
      ]);
      await defender.print_and_wait([
        "All so this body is ready to swallow thick seed from the rapist's balls.",
      ]);
    } else {
      await defender.say_and_wait(['—Guh!?']);
      await defender.print_and_wait([
        'A cock buried in the throat makes looking down impossible.',
      ]);
      await defender.print_and_wait([
        'Body has to arch; spit mixed with precum is swallowed without pause.',
      ]);
      await defender.print_and_wait([
        'Gag from the intrusion, plus the smother of rank flesh packing the throat.',
      ]);
      await defender.print_and_wait([
        'Worse is the humiliation of having to lift the ass high so this scum can bury every inch.',
      ]);
      await defender.say_and_wait(['Pull out already!!!'], true);
      await defender.print_and_wait([
        "Air coming in can't keep up with this bastard's rough pace.",
      ]);
      await defender.print_and_wait([
        'Cheeks tint purple; hands that tried to fight go soft and weak.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      if (defender.race > 0) {
        await defender.print_and_wait([
          'Pretending not to hear, still only holding the tip and sucking.',
        ]);
        await defender.print_and_wait([
          'After all this, demanding deeper is just too much, right?',
        ]);
        await defender.say_and_wait(['Nnh?']);
        await defender.print_and_wait([
          'A stroke on the tail—wanting that again?—while the other hand scratches an ear.',
        ]);
        await defender.say_and_wait(['Nnh?!']);
        await defender.print_and_wait([
          'An unexpected yank on the tail steals all strength for a second; the hand on the head shoves hard down.',
        ]);
        await defender.print_and_wait([
          'A tip that only sat between lips and tongue slams deep into the throat.',
        ]);
        await defender.say_and_wait(['Guh!!']);
        await defender.print_and_wait([
          'Taste buds, nose, and brain full of rank musk drag a sensitive body into spasms.',
        ]);
      } else {
        await defender.say_and_wait(['Haaa~~~ nnh~~ guh~~']);
        await attacker.print_and_wait(
          'Handled under the hips like a fine sex doll.',
        );
        await attacker.print_and_wait([
          'The whole mouth is claimed, sealed into a near-vacuum oral hole.',
        ]);
        await defender.say_and_wait(['Guh~']);
        await attacker.print_and_wait([
          'A mouth that was full of complaints can only suck now.',
        ]);
      }
      await defender.say_and_wait(["Nngh~ so hot~ can't breathe~"], true);
      await defender.print_and_wait([
        'Ears only catch fast, heavy wet sounds.',
      ]);
      await defender.print_and_wait([
        'The practiced look of contempt collapses into pretty eyes that only know how to roll up.',
      ]);
      await defender.print_and_wait([
        "Every rough thrust flattens the throat; stretched esophagus chokes the windpipe while throat-meat clamps this bastard's cock.",
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          'Even pausing inside to smear leftover cum on tongue and cherry lips before pulling free with regret.',
        ]);
        await defender.print_and_wait([
          'A murky white string stretches between the filthy tip and thin lips.',
        ]);
      }
      await defender.print_and_wait([
        'Extra throat fluid and drool get forced down too.',
      ]);
      await defender.print_and_wait([
        "All so this body is ready to swallow thick seed from the rapist's balls.",
      ]);
    } else {
      await defender.say_and_wait(['—Guh!?']);
      await defender.print_and_wait([
        'A cock buried in the throat makes looking down impossible.',
      ]);
      await defender.print_and_wait([
        'Body has to arch; spit mixed with precum is swallowed without pause.',
      ]);
      await defender.print_and_wait([
        'Gag from the intrusion, plus the smother of rank flesh packing the throat.',
      ]);
      await defender.print_and_wait([
        'Worse is the humiliation of having to lift the ass high so this scum can bury every inch.',
      ]);
      await defender.say_and_wait(['Pull out already!!!'], true);
      await defender.print_and_wait([
        "Air coming in can't keep up with this bastard's rough pace.",
      ]);
      await defender.print_and_wait([
        'Cheeks tint purple; hands that tried to fight go soft and weak.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   */
  async ask_or_force_hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        'Power, force—whatever it takes so that ',
        defender.race > 0 ? 'horse-eared ' : '',
        defender.phy_sex_title,
        ' named ',
        defender.get_colored_actual_name(),
        ' accepts there is only compliance left.',
      ]);
      await attacker.print_and_wait([
        'A tip dripping precum is pushed into a reluctant small hand.',
      ]);
      await attacker.print_and_wait([
        'Fingers ring the shaft light, yet the feather-soft drag is unexpectedly good.',
      ]);
      await attacker.print_and_wait([
        'Plus the addictive thrill of defiling something beautiful.',
      ]);
    } else {
      await attacker.say_and_wait(["Harder. Don't just hold it."]);
      await defender.print_and_wait([
        'The scum in front jumps to an even worse demand; both hands have to glue to the cock.',
      ]);
      await defender.print_and_wait([
        'Fingers sticky with precum, and the excited veins pulsing under them.',
      ]);
      await defender.say_and_wait(['Disgusting…']);
      await defender.print_and_wait([
        'Stroke speed jumps for spite; fingertips even dig the slit on purpose.',
      ]);
      await defender.say_and_wait(['Hah… finally that hurt face…'], true);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Cup the dazed breasts of kneeling ',
        a_call_d,
        ' and drive the cock straight between them.',
      ]);
      await defender.say_and_wait(['Cock… nngh… inside my chest…❤️']);
      await attacker.print_and_wait([
        'After that unthinking filthy line, heat on the chest finally snaps blank-eyed ',
        a_call_d,
        ' awake enough to try shoving the cock away.',
      ]);
      await attacker.print_and_wait([
        'So those hands get gripped instead, forced to hold ',
        defender.sex === 'She' ? 'her' : 'his',
        ' own breasts up.',
      ]);
      await attacker.print_and_wait([
        'And ',
        defender.sex === 'She' ? 'she' : 'he',
        ' is told how to knead so the fully teased shaft gets better service.',
      ]);
      await defender.say_and_wait(["Nngh…❤️ It's throbbing…❤️"]);
    } else {
      await defender.print_and_wait([
        attacker.race > 0
          ? "The scorching root in the cleavage, the rank breath that can't be ignored, and horse ears puffed by disordered hot air."
          : "The scorching root in the cleavage, and the rank breath that can't be ignored.",
      ]);
      await defender.print_and_wait([
        'Half giving up, soft flesh is pinched hard; clumsy friction against the cock rises just to drown the thoughts.',
      ]);
      await defender.print_and_wait([
        'Press breast-meat to the root, push away like a machine—before long the squeeze turns much rougher.',
      ]);
      await defender.say_and_wait(['…Hmph.']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async ask_or_force_tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'Hips push on purpose so the tip peeking from between breasts pokes those lips—telling ',
        a_call_d,
        ' it is time to open.',
      ]);
      await defender.say_and_wait(['Nngh…']);
      await attacker.print_and_wait([
        a_call_d,
        ' only knits brows, seals lips, shows a tiny snarl—still refusing to open.',
      ]);
      await attacker.print_and_wait([
        'So the tip keeps tapping cheek and lips until tear-bright pupils go wide and unfocused.',
      ]);
      await attacker.print_and_wait([
        'Until ',
        a_call_d,
        ' finally opens that soft, tempting mouth.',
      ]);
      await defender.say_and_wait(['—Ah—nngh.']);
    } else {
      await defender.say_and_wait(['*schlck*~ *schlck*~ *schlck*~']);
      await defender.print_and_wait([
        'Tip and corona are fully swallowed; tongue sometimes has to polish the shaft too.',
      ]);
      await defender.print_and_wait([
        'Even forced to cradle the breasts while free hands also grip the cock.',
      ]);
      await defender.print_and_wait([
        'Humiliating—this head-down pose is pure surrender.',
      ]);
      await defender.say_and_wait(['Nngh—']);
      await defender.print_and_wait([
        'Unhappy whimpers only make this rapist ruffle the head on the next swallow.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {boolean} is_first first action in a continuous sequence
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async bite_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait(['No~ no~~ get off me!']);
      await attacker.print_and_wait([
        'Teeth catch ',
        a_call_d,
        "'s spit-soaked crimson berry and bite; stored itch and hunger detonate at once.",
      ]);
      await defender.say_and_wait(['Nyaah!!!❤️']);
      await attacker.print_and_wait([
        a_call_d,
        " can't hold back a sweet cry.",
      ]);
      await attacker.print_and_wait([
        'Then, as if waking up, the head yanks back; flushed face reclaims a tongue tip, a silver spit-string falling on breast-meat.',
      ]);
    } else {
      await attacker.print_and_wait([
        'Incisors leave swollen marks, hard bites now and then making struggling ',
        a_call_d,
        ' go limp.',
      ]);
      await defender.say_and_wait(['Nngh… bastard❤️! Sc…um! Rapist❤️!']);
      await attacker.print_and_wait([
        'Even those curses come out sticky and inviting.',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} d_body_hair defender body-hair color
   */
  async missionary(attacker, defender, d_body_hair) {
    await defender.say_and_wait('Scum! Stay away—get lost!');
    await defender.print_and_wait([
      'A kick tries to land, but an ankle is caught and lifted high with ease.',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait([
        'Forced to show the female hole the ',
        d_body_hair,
        ' tail was hiding.',
      ]);
    } else {
      await defender.print_and_wait('Forced to show that lewd female hole.');
    }
    await defender.print_and_wait([
      'Wrists pinned together make it clear: resistance is already gone.',
    ]);
    await defender.say_and_wait('Hoooohhh!!❤️');
    await defender.print_and_wait(
      'Curses, struggle, scolding—all melt into a shameless slutty cry the second a burning cock sinks in.',
    );
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_hair defender hair color
   */
  async doggy_style(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      'Grab ',
      a_call_d,
      "'s arms; a small pull forces ",
      defender.sex === 'She' ? 'her' : 'him',
      ' onto the floor on all fours like a bitch, ass up.',
    ]);
    await attacker.print_and_wait([
      'The resisting ',
      defender.race > 0 ? 'mare' : 'female',
      ' twists hips trying to escape—and only looks like an invitation.',
    ]);
    await attacker.print_and_wait([
      'Hips slam forward; cock fills ',
      a_call_d,
      "'s pussy with no room to refuse.",
    ]);
    await defender.say_and_wait(['Iyaaah❤️!']);
    await attacker.print_and_wait([
      'Back arches like a shock; ',
      d_hair,
      ' hair sways with it.',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait(['Even the tail goes stick-straight…']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('Trying to run?');
    await attacker.print_and_wait([
      'Catch the shin of shaky, escaping ',
      a_call_d,
      '; one tug dumps ',
      defender.sex === 'She' ? 'her' : 'him',
      ' into an embrace.',
    ]);
    await attacker.print_and_wait([
      'Cock smacks flat belly hard enough that the lower abs even sink from fear.',
    ]);
    await attacker.print_and_wait(['Bad kids who misbehave get punished.']);
    await defender.say_and_wait(['Uwah… pull it out!']);
    await attacker.print_and_wait([
      defender.race > 0
        ? 'Waist snaps into a bow; race-trained legs lock tight around your hips.'
        : 'Waist snaps into a bow; legs lock tight around your hips.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async hug_sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait("Feels good, doesn't it?");
    await attacker.print_and_wait([
      'Pressed to ',
      a_call_d,
      ' from behind, asking against ',
      defender.race > 0 ? 'those upright horse ears' : 'those ears',
      '.',
    ]);
    await defender.say_and_wait('Scum! Pervert!');
    await defender.say_and_wait('Nnaaah❤️…');
    await attacker.print_and_wait([
      'Broken retorts get cut by slutty cries; ',
      a_call_d,
      "'s hanging head dips even lower.",
    ]);
    await attacker.print_and_wait([
      'As if hiding how this ',
      defender.race > 0 ? 'mare' : 'female',
      '—whose pussy clamps on every thrust—looks right now.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async standing(attacker, defender, a_call_d) {
    if (defender.race > 0) {
      await attacker.print_and_wait([
        'As expected, racing ',
        defender.uma_sex_title,
        ' come with real flexibility and balance.',
      ]);
    }
    await attacker.print_and_wait([
      'Only toes touch ground; inner thighs stretch; the right leg rises slow to horizontal.',
    ]);

    await attacker.print_and_wait([
      a_call_d,
      ' held in a hard side-lift, slim waist and inviting hip bared right in front of you.',
    ]);
    await attacker.print_and_wait([
      era.get(`cflag:${defender.id}:阴毛`) >= 1
        ? 'A pussy veiled by hair'
        : 'A smooth, cute pussy',
      ' opens and closes with the strain.',
    ]);
    await defender.say_and_wait('Happy now… scum!');
    await attacker.print_and_wait([
      'Not the limit yet—so the form gets corrected: the level right leg is lifted until it stands vertical, lined up with the left.',
    ]);
    await defender.say_and_wait("D-don't touch me…");
    await attacker.print_and_wait([
      'Shaft drives in; the narrow soft canal is forced open; a burning corona ignores wringing folds and hits the deep flower heart.',
    ]);
    await defender.say_and_wait('…Oguh❤️!!');
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} d_body_hair defender body-hair color
   */
  async hug_standing(attacker, defender, d_body_hair) {
    await defender.print_and_wait([
      'Hands plant on the wall, ass lifted high, trying to ask with zero feeling.',
    ]);
    await defender.say_and_wait(['This is enough, right?']);
    await defender.print_and_wait([
      'Doggy was probably coming… but better than being pinned to the floor…',
    ]);
    await defender.print_and_wait([
      'Talking yourself into it—until a touch on the waist turns into a knead that forces the hips higher.',
    ]);
    await defender.say_and_wait(['Guh❤️!']);
    if (defender.race > 0) {
      await defender.print_and_wait([
        'This pose—the one that lets a cock run the whole length of that pussy—is completely unfair for a racing Umamusume! Even the ',
        d_body_hair,
        ' horse tail gets grabbed like a whip and slapped across the cheeks.',
      ]);
    } else {
      await defender.print_and_wait(
        'This pose—the one that lets a cock run the whole length of that pussy—is completely unfair!',
      );
    }
    await defender.print_and_wait([
      'Upper body collapses under the impact; only pulled arms keep anything upright.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async suspended_congress(attacker, defender) {
    await defender.say_and_wait("Don't… uwah!?");
    await defender.print_and_wait([
      'Trying to dodge still ends with arms scooping under the knees from behind.',
    ]);
    await defender.print_and_wait([
      'A flexible body folds almost in half; knees nearly kiss shoulders; legs over the shoulders bounce hard with every thrust.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_hair defender hair or coat color
   */
  async hug_suspended_congress(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      'In this hold, ',
      a_call_d,
      ' hangs off your body.',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait([
        'Bonus: gravity drives the cock straight into the depths of this ',
        d_hair,
        ' Umamusume, locking both sets of sex organs tight.',
      ]);
    } else {
      await attacker.print_and_wait([
        'Bonus: gravity drives the cock straight into the depths of this ',
        d_hair,
        ' woman, locking both sets of sex organs tight.',
      ]);
    }
    await defender.say_and_wait("I'll fall! …I'm going to fall for sure!");
    await attacker.print_and_wait([
      'Between freefall panic and lower-body heat, almost-mindless ',
      a_call_d,
      ' loops arms back around your neck on instinct.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   */
  async ask_cowgirl(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      'The ',
      era.get(`cflag:${defender.id}:成长阶段`) < 5
        ? defender.teen_sex_title
        : defender.phy_sex_title,
      ' straddling your waist only props up and moves hips a little, even covering those lips—trying to look fine.',
    ]);
    await attacker.print_and_wait([
      'Even though the first swallow of that cock made ',
      defender.sex === 'She' ? 'her' : 'him',
      ' cry out.',
    ]);
    await attacker.print_and_wait(['Guess this side has to move first.']);
    await attacker.print_and_wait([
      'Cup both ass cheeks and thrust hard up into ',
      a_call_d,
      "'s shocked cry.",
    ]);
    await defender.say_and_wait(['Nnaah❤️!!!']);
    await attacker.print_and_wait([
      'Repeat it through ',
      a_call_d,
      "'s wails—thrust, bounce, grind; fragrant sweat rains on the chest while rhythmic flesh-smacks fill the air.",
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   */
  async stimulate_g_spot(attacker, defender) {
    await defender.say_and_wait(["Hey❤️! Don't…❤️ don't hit there…❤️!"]);
    await attacker.print_and_wait(['So this is the weak spot?']);
    await attacker.print_and_wait([
      'Vein-ridged shaft scrapes, or the tip knocks direct; under that pressure nerve-packed walls twitch and squeeze happy.',
    ]);
    await defender.say_and_wait('Guooohhhhooohhh————❤️❤️❤️');
    await attacker.print_and_wait([
      'Like proving a theory, the woman named ',
      defender.get_colored_name(),
      ' throws her head back in a high slutty cry, ass lifting with the thrusts so more of the cock can grind that spot.',
    ]);
    await attacker.print_and_wait([
      'Pretty eyes half shut; what little reason and pride left drain out with the love-juice.',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker active
   * @param {CharaTalk} defender passive
   * @param {PrintedSpan} a_call_d what the attacker calls the defender
   * @param {PrintedSpan} d_call_a what the defender calls the attacker
   * @param {string} d_skin_color defender skin color hex
   */
  async continue_fucking(attacker, defender, a_call_d, d_call_a, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = 'ivory';
        break;
      case 0:
        skin_desc = 'fair';
        break;
      case 1:
        skin_desc = 'rosy';
        break;
      case 2:
        skin_desc = 'light-brown';
    }
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('Stop… haa❤️… please stop…');
      await defender.print_and_wait([
        'A swollen shaft thrusts without a shred of gentility; every blood-fat vein can be felt beating against the folds.',
      ]);
      await defender.say_and_wait('Nnhaa… mm❤️');
      await defender.say_and_wait('If this keeps…', true);
      await defender.print_and_wait([
        'Like a fine flesh-toy worked rough; a burning tip and hard cock scrape every wrinkle of the vagina.',
      ]);

      await defender.print_and_wait(
        'Not the sharp pain expected—instead wave after wave of numbness that almost blanks the brain.',
      );

      await defender.say_and_wait("Can't❤️ keep… if this goes on…", true);
      await defender.say_and_wait("If this goes on, I'll… cum❤️", true);
      await defender.print_and_wait([
        'Wanting to fight is useless—the runaway face, the sweet panting, the toes curled tight all say the body has no room left.',
      ]);
    } else {
      const message = [
        async () => {
          await defender.say_and_wait('Oguhhuu!!');
          await attacker.print_and_wait([
            'A thick shaft slams ',
            a_call_d,
            "'s female hole without mercy, wringing slutty cries while pretty eyes roll white.",
          ]);
          await attacker.print_and_wait([
            'Hot heavy cock churns the pussy, tip grinding vaginal walls, flared corona scraping soft flesh straight to the flower heart…',
          ]);
          await attacker.print_and_wait([
            'A full-power tip, slick with love-juice, plants a heavy kiss on the tender cervix—even the flat lower belly shows a vague corona shape.',
          ]);
          await defender.say_and_wait(['Oh! W-wait… slower… please…']);
          await attacker.print_and_wait([
            'A pleasure-flooded brain can only spit broken words—and clear droplets from the corner of the mouth.',
          ]);
        },
        async () => {
          await defender.print_and_wait([
            'Handled like a doll, or a obedient sex machine that moans when played with.',
          ]);
          await defender.print_and_wait([
            {
              color: d_skin_color,
              content: skin_desc,
            },
            ' flesh trembles and squirms.',
          ]);
          await defender.say_and_wait(['Nngh, nnhaa…']);
          await defender.print_and_wait([
            'What the body needs most is power to break free of ',
            d_call_a,
            '—and pleasure spends the last of it curling toes instead.',
          ]);
          await defender.print_and_wait([
            'The feeling of being raped and violated, mixed with the pleasure of being stroked and used, drags legs, feet, and whole body down toward a heap of heat-chasing female flesh.',
          ]);
          await defender.say_and_wait(['Haa!']);
          await defender.print_and_wait(['Hearing your own shameless moan.']);
        },
      ];
      if (defender.race > 0) {
        message.push(async () => {
          await defender.say_and_wait("Nnaaah… don't… stop… please… nngh…");
          await defender.print_and_wait([
            'The mouth still whines no, but tight vaginal flesh has already begun to cradle the invader soft, letting the cock sink deeper.',
          ]);
          await defender.print_and_wait([
            'A burning cervix is knocked again and again; the corona deep-kisses the ring, even a closing womb mouth pushed into a dent.',
          ]);
          await defender.print_and_wait(
            'Horse ears stiff from pleasure only hear the dull *schlick-schlick* of shaft pressing juice out of the canal.',
          );
          await defender.print_and_wait([
            a_call_d,
            ' realizes the flexible body trained for racing is the perfect fuck-frame for this coupling.',
          ]);
        });
      }
      await get_random_entry(message)();
    }
  },
};
