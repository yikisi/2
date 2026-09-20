/**
 * @file Breeding sow related events
 * @author 幽白書
 * @author 黑奴队长
 * @translater Katze
 * Oh lord what have I done
 * I am shamed of my self
 * This is too much
 * I wanna commit suicide rn bruh fuck this shit
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  setColor,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { akuochi, buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

const { degeneration_to_evil } = require('#/i18n/en-US/snippets');

module.exports = {
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await printAndWait([
      'After tutoring ',
      chara.get_colored_name(),
      ' through a few lessons, ',
      chara.get_colored_name(),
      ' looks up at ',
      you.get_colored_name(),
      ' with flushed cheeks. Next up: sex ed.',
    ]);
    await printAndWait([
      'Even though ',
      you.get_colored_name(),
      ' is supposed to be the teacher, ',
      chara.get_colored_name(),
      ' knows ',
      you.get_colored_name(),
      `'s body better than ${chara.sex.toLowerCase()} does. Under `,
      chara.get_colored_name(),
      `'s hands, `,
      you.get_colored_name(),
      ' is forced to learn every sensitive spot—and exactly how shamelessly that body reacts when each one is touched.',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' leads ',
      you.get_colored_name(),
      ' over to the hollow of the dead tree.',
    ]);
    await printAndWait([
      'Just when ',
      you.get_colored_name(),
      ` thinks ${chara.sex.toLowerCase()} only needs to vent some stress, ${chara.sex.toLowerCase()} suddenly shoves `,
      you.get_colored_name(),
      ' down onto the stump.',
    ]);
    await printAndWait([
      'Then the clothes below ',
      you.get_colored_name(),
      `'s waist are slowly peeled away, and a hot cock presses against `,
      you.get_colored_name(),
      `'s entrance.`,
    ]);
    await printAndWait([
      'If anyone made a sound, the hollow would echo it across the whole campus—',
      you.get_colored_name(),
      `'s voice included.`,
    ]);
    await printAndWait([
      `If word got out that `,
      you.get_colored_name(),
      `'s own trainee ${chara.uma_sex_title} bent ${chara.sex === 'She' ? 'Her' : 'Him'} over a dead tree and fucked ${chara.sex === 'She' ? 'Her' : 'Him'} there, `,
      you.get_colored_name(),
      `'s reputation as a Trainer would be finished…`,
    ]);
    await printAndWait('Not that there was much of that left to begin with.');
    await printAndWait([
      you.get_colored_name(),
      ' moans by the hollow, but for a ',
      get('flag:35') === 2 ? 'sex slave' : 'breeding sow',
      ' like ',
      you.get_colored_name(),
      ', this is just another ordinary day.',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' takes ',
      you.get_colored_name(),
      `'s hand and heads to the courtyard for a date.`,
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' walks with thighs pressed together as white fluid slowly runs down both legs. The mask over ',
      you.get_colored_name(),
      `'s face looks soaked through, clinging wetly to mouth and nose, while the heat-scent rolling off that body is strong enough that passing ${chara.uma_sex_title} pinch their noses with red faces.`,
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async school_rooftop(chara, you) {
    await printAndWait([
      'Public exposure on the rooftop… If anyone looked up right now, ',
      you.get_colored_name(),
      ' would never hold it together.',
    ]);
    await printAndWait(
      `Below the roof, ${chara.uma_sex_title} race across the training track.`,
    );
    await printAndWait(
      'If someone saw this, climax would be inevitable—the spray would fall on the people below like rain…',
    );
    await printAndWait([
      'But with one leg lifted by ',
      chara.get_colored_name(),
      ' into a posture with nowhere to brace, ',
      you.get_colored_name(),
      ' can only cling to the safety netting while the wire digs red marks into both breasts.',
    ]);
    // TALENTNAME:32 = Lactation
    if (get('talent:0:32') > 0) {
      await printAndWait('Ahh… it is already leaking…');
      await printAndWait([
        `Before the spray from below can fall, the first thing to land on the ${chara.uma_sex_title} underneath is milk streaming from `,
        you.get_colored_name(),
        `'s nipples.`,
      ]);
    }
  },
  race_start: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await printAndWait([
        `While other Trainers give their ${chara.uma_sex_title} a few last words, `,
        you.get_colored_name(),
        ' is busy swallowing ',
        chara.get_colored_name(),
        `'s cock,`,
      ]);
      await printAndWait([
        'lost in the pre-race heat. ',
        chara.get_colored_name(),
        // FLAGNAME:35 = Discipline level
        `'s hard shaft needs handling, and for a `,
        get('flag:35') === 2 ? 'sex slave' : 'breeding sow',
        ' like ',
        you.get_colored_name(),
        ', that duty is non-negotiable.',
      ]);
      await printAndWait([
        'After swallowing every drop, ',
        you.get_colored_name(),
        ' presses a kiss to ',
        chara.get_colored_name(),
        `'s cock as a blessing for a good race.`,
      ]);
    };
    f.title = 'Before the Race';
    return f;
  })(),
  oyakodon: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} you
     */
    const f = async (child, father, you) => {
      await printAndWait([
        you.get_colored_name(),
        ' is trapped tight between ',
        child.get_colored_name(),
        ' and ',
        father.get_colored_name(),
        ',',
      ]);
      await printAndWait([
        'two burning cocks pounding both holes at once. Every thrust sends a fresh wave of pleasure through ',
        you.get_colored_name(),
        '.',
      ]);
      await printAndWait([
        'Through the haze, ',
        you.get_colored_name(),
        ' remembers when ',
        child.get_colored_name(),
        ' was first born—',
      ]);
      await you.used_to_say_and_wait(
        'Maybe once the kid grows up… being used by both child and father at once, crushed between them, drowning in cock…',
        true,
      );
      await printAndWait('That old fantasy has become reality…');
    };
    f.title = 'Oyakodon';
    return f;
  })(),
  /**
   * Woken up mid-oyakodon sleep rape
   * @author 幽白書
   * @param {CharaTalk} chara child's father
   * @param {CharaTalk} child child
   * @param {CharaTalk} you player
   * @param {PrintedSpan} callname_c what the child calls the player
   */
  async be_awake_as_slave(chara, child, you, callname_c) {
    await printAndWait([
      'In the middle of the night, ',
      you.get_colored_name(),
      ' jolts awake.',
    ]);
    await printAndWait(
      'A breeding sow does not get to forget that duty—not even in sleep.',
    );
    await printAndWait("Today's visitors just happen to be special.");
    println();
    await printAndWait([
      you.get_colored_name(),
      ' feels impacts from front and back, each at a different pace.',
    ]);
    await printAndWait([
      child.get_colored_name(),
      ' moans ',
      callname_c,
      ' under breath while rocking hips, every thrust slamming deep into ',
      you.get_colored_name(),
      '.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' kneels on the bed, burning with shame at being mounted by their own child like an animal.',
    ]);
    await printAndWait(
      'Whatever dignity a mother is supposed to have—if it ever existed—dies right here.',
    );
    await printAndWait([
      'Wagging that ass like a bitch in heat only earns a laugh from ',
      chara.get_colored_name(),
      ', who is currently using ',
      you.get_colored_name(),
      `'s mouth.`,
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' can only take the cock deeper, burying face into that thick musk to hide from reality.',
    ]);
    println();
    await printAndWait([
      'Before long, both ',
      chara.get_colored_name(),
      ' and ',
      child.get_colored_name(),
      ' dump thick loads.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' spits the cum into a palm, smears it thick, then pushes those fingers into that soaked hole and stirs. Whatever white cream spills out gets scooped up with the other hand and swallowed.',
    ]);
    if (get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
      await printAndWait([
        chara.get_colored_name(),
        `'s seed and `,
        child.get_colored_name(),
        `'s seed mix together. Whose will take first?`,
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' daydreams—and fails to notice that both ',
        chara.get_colored_name(),
        ' and ',
        child.get_colored_name(),
        ' are already hard again from watching.',
      ]);
    } else {
      await printAndWait([
        'Watching ',
        you.get_colored_name(),
        ', both ',
        chara.get_colored_name(),
        ' and ',
        child.get_colored_name(),
        ' stiffen again.',
      ]);
    }
    await printAndWait('The night is far from over…');
  },
  morning_duty: (() => {
    /**
     * @param {CharaTalk} chara character
     * @param {CharaTalk} you player
     * @param {string} your_title player's current title (XX sex slave / XX breeding sow)
     * @param {string} penis_desc description of the character's penis
     */
    const f = async (chara, you, your_title, penis_desc) => {
      const ret = [];
      await printAndWait([
        you.get_colored_name(),
        ' is woken by something warm smacking against a cheek.',
      ]);
      if (chara.sex_code === 0) {
        await printAndWait([
          'After tormenting ',
          you.get_colored_name(),
          ' all night, ',
          chara.get_colored_name(),
          ' takes another dose and deigns to use ',
          chara.sex === 'She' ? 'her' : 'his',
          ' noble ',
          penis_desc,
          ' cock as an alarm clock.',
        ]);
      } else {
        await printAndWait([
          'After tormenting ',
          you.get_colored_name(),
          ' all night, ',
          chara.get_colored_name(),
          ' once again deigns to use ',
          chara.sex === 'She' ? 'her' : 'his',
          ' noble ',
          penis_desc,
          ' cock as an alarm clock.',
        ]);
      }
      await printAndWait([
        '—a reminder that ',
        you.get_colored_name(),
        ' still has duties left. Dawn to dusk, over and over.',
      ]);
      ret.push(
        await degeneration_to_evil(
          'Obediently take it in',
          'Turn away in disgust',
        ),
      );
      if (ret[0] === 1) {
        setColor(akuochi[1]);
        await printAndWait([
          'No effort is even needed—the moment ',
          you.get_colored_name(),
          ' parts those lips a little, that cock rams in on its own.',
        ]);
        await printAndWait([
          'Under ',
          chara.get_colored_name(),
          `'s rough use, `,
          you.get_colored_name(),
          ' serves obediently with lips and tongue.',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          ' remembers the job once again today…',
        ]);
      } else {
        setColor(akuochi[0]);
        await printAndWait([
          'Even fallen this far, ',
          you.get_colored_name(),
          ' still has some pride—or at least a temper—',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' only turns the face away, about to insist on that, when Master ',
          chara.get_colored_name(),
          '—already out of patience—slaps ',
          you.get_colored_name(),
          ' hard enough to make the current situation crystal clear.',
        ]);
        await printAndWait([
          'After that, ',
          chara.get_colored_name(),
          ' stops waiting for cooperation and simply helps ',
          chara.sex === 'She' ? 'herself' : 'himself',
          ' to this free breakfast.',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          ' is force-fed the lesson of that duty again today…',
        ]);
      }
      setColor();
      return ret;
    };
    f.title = 'Morning Duties';
    return f;
  })(),
  /**
   * Sex slave / breeding sow work event
   * @param {CharaTalk} you player
   * @param {string} uma Umamusume or Umamusuko
   * @param {string} sex She or He
   * @param {string} they They (feminine/masculine group)
   * @param {string} slave sex slave or breeding sow
   */
  work(you, uma, sex, they, slave) {
    print([
      '[Today ',
      you.get_colored_name(),
      ' is ordered to do ',
      slave,
      ' work again]',
    ]);
    const buffer = [
      () => {
        print([
          you.get_colored_name(),
          ' is brought to the racer lounge to console the ',
          uma,
          ' who lost.',
        ]);
        print([
          'The door shuts, the scrap of clothing is ripped away, and that body shudders under a brutal barrage of cocks.',
        ]);
        print([
          'The ',
          uma,
          ' vent every scrap of defeat-fueled fury, leaving claw marks and bite marks all over ',
          you.get_colored_name(),
          '…',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' is brought to the racer lounge to reward the ',
          uma,
          ' who put on a dazzling race.',
        ]);
        print([
          'Before the others can arrive, the champion ',
          uma,
          ' bursts in first—and even says hello before shoving ',
          you.get_colored_name(),
          ' down.',
        ]);
        print([
          sex,
          ' grins while grinding hips, pumping cum into ',
          you.get_colored_name(),
          `'s womb along with a stream of piss…`,
        ]);
      },
      () => {
        print([
          'Before work, ',
          you.get_colored_name(),
          ' decides to hit the bathroom.',
        ]);
        print(['Five or six cocks already bar the way before it even begins.']);
        print([
          you.get_colored_name(),
          ' is forced to hold it in while servicing the ',
          uma,
          ' adults, and soon puts on a spectacular show of pissing into the white mess…',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' is ordered by a pair of ',
          uma,
          ' who look awfully close.',
        ]);
        print([
          they,
          ' pin ',
          you.get_colored_name(),
          ' front and back, both cocks driving in at once.',
        ]);
        print([
          'Under that double assault, ',
          you.get_colored_name(),
          ' climaxes hard with the familiar flood of creampies—then blacks out…',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' is ordered to join a ',
          uma,
          ' rally.',
        ]);
        print([
          'As part of the ceremony, the ',
          uma,
          ' line up to use every filthy hole ',
          you.get_colored_name(),
          ' has.',
        ]);
        print([
          'At any given moment one to three cocks are pumping inside. Long before being completely stuffed, ',
          you.get_colored_name(),
          ' has already blissed out…',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' entertains a ',
          uma,
          ' training on the same track.',
        ]);
        print([
          sex,
          ' strips ',
          you.get_colored_name(),
          ' bare, ignores the mess between those legs, and thrusts straight in.',
        ]);
        print([
          'While thrusting, the ',
          uma,
          ' teases ',
          you.get_colored_name(),
          " about whether the assigned trainee always dumps a full day's load before practice.",
        ]);
        print([
          'Between the pleasure and the shame, ',
          you.get_colored_name(),
          ' blacks out…',
        ]);
      },
      () => {
        print([
          'On the way to work, ',
          you.get_colored_name(),
          ' is cornered by a ',
          uma,
          ' from the Primary Section.',
        ]);
        print([
          'There is no time to refuse—the ',
          uma,
          ' already has a massive cock out.',
        ]);
        print([
          "Yielding to a remade body's instincts, ",
          you.get_colored_name(),
          ' is half-forced, half-willing pinned to the ground, savoring that huge shaft pistoning a soaked hole…',
        ]);
      },
    ];
    if (
      get('talent:0:泌乳') > 0 &&
      get('cflag:0:胸围') - get('cflag:0:下胸围') >= 20
    ) {
      buffer.push(() => {
        print([
          you.get_colored_name(),
          ' is bound to a rack by the ',
          uma,
          ', body bent forward, head, hands, and huge breasts locked into a board with cutouts.',
        ]);
        print([
          they,
          ' maul ',
          you.get_colored_name(),
          ' at will, and the breasts are squeezed so hard that pure white milk sprays out.',
        ]);
        print([
          'The ',
          uma,
          ' take turns fucking and milking, and only at the end do they all paint ',
          you.get_colored_name(),
          `'s chest and face with cum…`,
        ]);
      });
    }
    get_random_entry(buffer)();
  },
  punish_first: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you player
     * @param {CharaTalk} taste Yayoi Akikawa / Northern Taste
     * @param {CharaTalk} minoru Hayakawa Tazuna / Harvest Time
     */
    const f = async (you, taste, minoru) => {
      await you.say_and_wait(['Nngh… gh… hh…']);
      println();
      await printAndWait([
        'Somewhere in Tracen Academy sits a place almost no one visits.',
      ]);
      await printAndWait(['A fenced-off corner stacked with hay,']);
      await printAndWait([
        'that looks like animal pens—yet never shows any sign of life.',
      ]);
      await printAndWait(['What is it for?']);
      await printAndWait([
        you.get_colored_name(),
        ' used to wonder the same thing.',
      ]);
      println();
      await printAndWait(['Now ', you.get_colored_name(), ' finally knows.']);
      println();
      await taste.say_as_unknown_and_wait([
        'Punishment! A breeding sow who shirks duty must be disciplined severely!',
      ]);
      await minoru.say_as_unknown_and_wait([
        'Being a breeding sow was already meant to be the harshest sentence… We had hoped that while contributing to Tracen and to the future of its ',
        taste.uma_sex_title,
        ', Trainer would also reflect on those sins. But it seems something stronger is still required.',
      ]);
      println();
      await printAndWait(['As their words fall,']);
      await printAndWait([
        you.get_colored_name(),
        `'s swollen, already-used hole—still dripping white—receives a new visitor.`,
      ]);
      const ret = await degeneration_to_evil('Submit', 'Resist');
      await printAndWait([
        'Blindfolded and gagged, ',
        you.get_colored_name(),
        ' has no idea who it is.',
      ]);
      await printAndWait([
        'Even trying to listen is useless—noise-canceling headphones seal both ears. Even a ',
        taste.uma_sex_title,
        `'s sharp hearing would only pick up the sounds coming from inside.`,
      ]);
      println();
      await printAndWait(['Schlick… schlick…']);
      println();
      await printAndWait(['Wet flesh meeting flesh,']);
      await printAndWait([
        'and the kissing sounds of a cunt that refuses to let the cock behind it leave,',
      ]);
      if (ret === 1) {
        await printAndWait(
          [
            'those lewd smacks are so loud that ',
            you.get_colored_name(),
            ' almost believes this cock is the true master of that body—hardly surprising. Every cock that entered tonight earned the same thought.',
          ],
          { color: akuochi[1] },
        );
      } else {
        await printAndWait(
          [
            'those lewd smacks are so loud that ',
            you.get_colored_name(),
            ' almost believes this cock is the true master of that body—something ',
            you.get_colored_name(),
            ' never wanted to accept, but drug-fogged thoughts leave no room to deny it.',
          ],
          { color: akuochi[0] },
        );
      }
      println();
      await printAndWait(['Gluck… gluck…']);
      println();
      await printAndWait(['Every defense will be broken one day.']);
      await printAndWait([
        'If so, then defense exists only to be broken—that equation mostly holds.',
      ]);
      await printAndWait([
        'So this pretend-prim little passage must stay tight just so a ',
        taste.uma_sex_title,
        " adult's mighty cock can enjoy conquering it—cold until the moment that shaft touches it, then wrapping on contact, flipping from chaste to slut in an instant. The wet sounds of that grip are pure attitude.",
      ]);
      await printAndWait([
        'Wanting a baby so badly it aches, playing the proper Trainer only so a ',
        taste.uma_sex_title,
        ' adult can savor more than raw lust while using this body—',
      ]);
      await printAndWait([
        'and yet that act cost the chance to be violated by a ',
        taste.uma_sex_title,
        " adult's seed, to be taught just how pathetic and low a female this is. What a waste.",
      ]);
      println();
      await printAndWait([
        'Luckily, a merciful ',
        taste.uma_sex_title,
        ' adult still grants a stupid breeding sow another chance.',
      ]);
      println();
      await printAndWait(['Thud… thud…']);
      println();
      await printAndWait([
        'A cock knocks politely at the cervix, waiting for the last gate to fall without a fight.',
      ]);
      await printAndWait([
        'Every organ, every tissue, every cell has already surrendered.',
      ]);
      await printAndWait([
        'These impacts are less an assault on the final wall than a formal knock on an open door.',
      ]);
      await printAndWait([
        "Resist? How could a breeding sow's body resist a ",
        taste.uma_sex_title,
        " adult's claim? That logic is carved deep into the genes.",
      ]);
      println();
      await printAndWait(['And at last—the sound most longed for.']);
      await printAndWait([
        'Ahh… ',
        you.get_colored_name(),
        ' spreads those legs even wider.',
      ]);
      await printAndWait([
        'At some point, the straps pinning ',
        you.get_colored_name(),
        ' to the breeding bench were loosened.',
      ]);
      await printAndWait(['They were never needed.']);
      await printAndWait([
        'What breeding sow would fight a ',
        taste.uma_sex_title,
        " adult's cock?",
      ]);
      await printAndWait([
        'What breeding sow would refuse a ',
        taste.uma_sex_title,
        " adult's gift?",
      ]);
      println();
      await printAndWait([
        'At last—more heart-pounding than any race, more dizzying than first love—',
      ]);
      await printAndWait([
        taste.uma_sex_title,
        " adult's use draws to a close.",
      ]);
      println();
      await printAndWait(['Fsh… fshrrrrr…']);
      println();
      await printAndWait(['Here it comes.']);
      await printAndWait(['This is it.']);
      await printAndWait([
        you.get_colored_name(),
        ' knows with absolute certainty.',
      ]);
      await printAndWait(['This is what will enter that womb,']);
      await printAndWait([
        'force the egg that once ruled here into total submission,',
      ]);
      await printAndWait([
        'the noble breeding seed of a ',
        taste.uma_sex_title,
        " adult—seed worth prostrating for, licking boots for, offering a whole mother's body to please.",
      ]);
      await printAndWait(['Sperm keep surging out,']);
      await printAndWait([
        'ravaging every corner of ',
        you.get_colored_name(),
        '.',
      ]);
      await printAndWait(['This is the happiness of a breeding sow.']);
      println();
      await printAndWait(['——————']);
      println();
      await printAndWait(['Sadly, joy never lasts forever.']);
      await printAndWait(['Even the longest climax ends.']);
      await printAndWait([
        'While a worthless breeding-sow brain is still drowning in the bliss of being bred, the cunt locked on that shaft coils tighter, begging it to stay.',
      ]);
      await printAndWait(['Or at least… to remember its shape—']);
      await printAndWait([
        '…………even if, five seconds later, the next cock will fuck that memory away.',
      ]);
      println();
      await printAndWait(
        '[Under the flood of cum, the lewd crest glowing a wicked pink quietly shifts shape]',
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: 'Breeding Duty: Discipline' }];
    return f;
  })(),
  punish: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {string} uma_sex_title
     * @param {boolean} is_teammate
     */
    const f = async (you, uma_sex_title, is_teammate) => {
      await printAndWait(['Schlick… schlick…']);
      println();
      await printAndWait(['Another night, back at the familiar place.']);
      await printAndWait([
        you.get_colored_name(),
        ' puts the mask and ball-gag back on, and the usual show begins again.',
      ]);
      await printAndWait([
        "It was obvious that skipping a breeding sow's duties forever would lead right back here.",
      ]);
      await printAndWait([
        'It was obvious that a trainee, or any student or teacher on campus, would gladly do ',
        you.get_colored_name(),
        ' this little "favor."',
      ]);
      await printAndWait([
        'It was obvious that stopping one step earlier would still have let ',
        you.get_colored_name(),
        ' choose the father.',
      ]);
      if ((await degeneration_to_evil('Submit', 'Resist')) === 1) {
        setColor(akuochi[1]);
        await printAndWait([
          'So for ',
          you.get_colored_name(),
          ' to walk here on purpose—the goal is clear enough.',
        ]);
        await printAndWait([
          'Cannot forget that night. Cannot forget the thrill of having everything taken over.',
        ]);
        await printAndWait(['Cannot forget being nothing but a sex toy.']);
      } else {
        setColor(akuochi[0]);
        await printAndWait([
          'So for ',
          you.get_colored_name(),
          ' to end up here—the outcome is clear enough, ',
          you.get_colored_name(),
          ' thinks through the haze.',
        ]);
        await printAndWait([
          'Is it that night that will not leave? The thrill of surrendering control?',
        ]);
        await printAndWait(['Or the feeling of being used as pure relief?']);
        await printAndWait(['—drug-fevered ears catch that whisper.']);
      }
      setColor();
      println();
      await printAndWait(['Twist.']);
      await printAndWait([
        'A hard pinch shoots pain and pleasure from a nipple straight into ',
        you.get_colored_name(),
        `'s brain. Focus. Do not space out while serving.`,
      ]);
      if (is_teammate) {
        await printAndWait([
          'And yet the cock behind feels strangely familiar to ',
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait([
          'Normally that would mean nothing—as a breeding sow, every ',
          uma_sex_title,
          ' on campus has probably used this body.',
        ]);
        await printAndWait(['But this familiarity…']);
        await printAndWait([
          'Could the ',
          uma_sex_title,
          ' behind be the assigned trainee?',
        ]);
        await printAndWait([
          'Being used by that trainee while identities stay hidden—',
        ]);
        await printAndWait([
          'somehow, ',
          you.get_colored_name(),
          ' feels the nervous thrill of being caught cheating… and the heat that comes with it.',
        ]);
        await printAndWait(['Must be furious. Must be livid.']);
        await printAndWait(['Own Trainer. Own sex slave. Own breeding sow—']);
        await printAndWait([
          'refusing to carry that seed, and choosing anonymous gangbangs instead.',
        ]);
      } else {
        await printAndWait([
          'And yet the cock behind is oddly urgent for some reason.',
        ]);
        await printAndWait([
          'Normally that would mean nothing—as a breeding sow, as a living toy, rough use is only natural.',
        ]);
        await printAndWait(['But this eagerness borders on rage…']);
        await printAndWait(['Could the ', uma_sex_title, ' behind be a fan?']);
        await printAndWait([
          'Being used by a fan while identities stay hidden—',
        ]);
        await printAndWait([
          'somehow, ',
          you.get_colored_name(),
          ' feels the nervous thrill of being caught cheating… and the heat that comes with it.',
        ]);
        await printAndWait(['Must be furious. Must be livid.']);
        await printAndWait([
          'The Trainer they worshiped. The idol they longed for—',
        ]);
        await printAndWait([
          'trampling a young ',
          uma_sex_title,
          `'s pure crush in a pose this filthy.`,
        ]);
      }
      println();
      await printAndWait(['Furious, right? Angry, right?']);
      await printAndWait(['So seed this anyone-can-have sow deep inside.']);
      await printAndWait([
        "Wreck this bitch's slutty hole. Get her pregnant, pregnant, pregnant—",
      ]);
      await printAndWait(['turn her into nothing but a slave to that cock.']);
      println();
      if (is_teammate) {
        await printAndWait([
          'Thinking that, ',
          you.get_colored_name(),
          ' rolls those hips even harder.',
        ]);
        await printAndWait([
          'Before long that cock pauses, then floods ',
          you.get_colored_name(),
          ' with the white cream most hungered for.',
        ]);
        await printAndWait(['Ahh… what a shame.']);
        await printAndWait([
          'A hollow premonition rises in ',
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait([
          'But the next familiar shaft fucks ',
          you.get_colored_name(),
          ' past the point of spare thoughts.',
        ]);
        println();
        await printAndWait([
          'Next time… let the beloved trainee ',
          uma_sex_title,
          ' take the next one.',
        ]);
        await printAndWait([
          'In a daze, ',
          you.get_colored_name(),
          ' makes a resolution that may or may not be kept.',
        ]);
      } else {
        await printAndWait([
          'Thinking that, ',
          you.get_colored_name(),
          ' rolls those hips even harder.',
        ]);
        await printAndWait(['But maybe offense left no room for defense,']);
        await printAndWait(['or maybe the timing simply lined up—']);
        await printAndWait([
          'just as things were getting serious, the stiffness behind shudders and dumps a heavy load inside.',
        ]);
        await printAndWait(['Ahh… what a shame.']);
        await printAndWait([
          'A hollow letdown settles in ',
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait([
          'But the next familiar shaft fucks ',
          you.get_colored_name(),
          ' past the point of spare thoughts.',
        ]);
        println();
        await printAndWait(['Next time, try harder.']);
        await printAndWait([
          'Feeling a braver cock scoop the last load out of that hole, ',
          you.get_colored_name(),
          ' offers a silent blessing.',
        ]);
      }
      println();
      await printAndWait(
        '[Under the flood of cum, the lewd crest glowing a wicked pink quietly shifts shape]',
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: 'Breeding Duty: Discipline' }];
    return f;
  })(),
  report_preg_duty: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} edu_count
     * @param {number} children_count
     */
    const f = async (you, father, edu_count, children_count) => {
      await printAndWait([
        you.get_colored_name(),
        ' stares at the pregnancy mark on the belly crest, then bolts for the bathroom and throws up.',
      ]);
      await printAndWait([
        'Faced with this life that has thrown everything off schedule, ',
        you.get_colored_name(),
        ' decides to—',
      ]);
      const ret = await degeneration_to_evil(
        'Look forward with joy',
        'Accept it with resignation',
      );
      if (ret === 1) {
        setColor(akuochi[1]);
        await printAndWait([
          you.get_colored_name(),
          ' daydreams with delight.',
        ]);
        await printAndWait(
          'A future with a child. How to raise them once they are born…',
        );
        await printAndWait([
          'But the question that truly occupies ',
          you.get_colored_name(),
          ' is still—',
        ]);
        println();
        await printAndWait('Who is the father?');
        await printAndWait(
          `The ${father.uma_sex_title} who lost the other day and left bite marks all over as payback?`,
        );
        await printAndWait(
          `Or the ${father.uma_sex_title} who won and got so high on it that they pissed straight into the womb?`,
        );
        if (edu_count > 0) {
          await printAndWait(
            `Or the assigned ${father.uma_sex_title} who, before every training session, dumps a full day's load into that hole and then sends ${you.sex === 'She' ? 'her' : 'him'} to the track with white cream dripping down the hall?`,
          );
        }
        if (children_count > 0) {
          await printAndWait(
            'Or the "sweet little angel" who still looks like a kid in memory—yet seems to remember exactly how to leave a mother\'s body—and always fucks this useless mom into ahegao?',
          );
        }
        println();
        await printAndWait(
          'Whoever it is, a new life is still something to celebrate.',
        );
        await printAndWait([
          'What worries ',
          you.get_colored_name(),
          ' most, though, is still…',
        ]);
        println();
        await printAndWait("(Before the baby comes… a breeding sow's duties…)");
        println();
        await printAndWait([
          'The thought is not even finished before a thrust from behind cuts ',
          you.get_colored_name(),
          ' off.',
        ]);
        await printAndWait(
          `No care for consent—not even a check to see if it is wet. Of course not; after the body mods, that is unnecessary. Twenty-four hours a day, this hole is soaked and ready for any ${father.uma_sex_title} adult. Straight in.`,
        );
        await printAndWait([
          'Only after pounding ',
          you.get_colored_name(),
          ' nearly senseless does the ',
          father.uma_sex_title,
          ' behind finally finish, wipe that cock on ',
          you.get_colored_name(),
          `'s face, and walk off.`,
        ]);
        await printAndWait([
          'Through it all, ',
          you.get_colored_name(),
          ' never even saw a face.',
        ]);
        println();
        await printAndWait('Forget already being pregnant—');
        await printAndWait(
          `even with a swollen belly, to a ${father.uma_sex_title} master that is just one more part to play with.`,
        );
        await printAndWait([
          'Understanding that, ',
          you.get_colored_name(),
          ' spasms again; an uncontrolled squirt catches the sunlight and throws a rainbow, as if congratulating the pregnancy itself.',
        ]);
      } else {
        setColor(akuochi[0]);
        await printAndWait('No surprise, really.');
        await printAndWait(
          '—when even a bathroom trip means five or six cocks blocking the door, and the only option left is to lick the floor clean of spray, cum, and pissed-out piss… is pregnancy that hard to imagine?',
        );
        println();
        await printAndWait('Who is the father?');
        await printAndWait([you.get_colored_name(), ' cannot help wondering—']);
        await printAndWait(
          `Those two ${father.uma_sex_title} who looked so close and even shared a breeding sow as a pair?`,
        );
        await printAndWait(
          'Or someone from that rally squad who filled every hole until the air itself reeked of cum… and then made sure every drop on the skin was licked up or stuffed back in—maybe that is when it took.',
        );
        println();
        await printAndWait([
          'Without meaning to, ',
          you.get_colored_name(),
          " feels a cold dread for the child's future.",
        ]);
        if (children_count > 0) {
          await printAndWait(
            `Memories of that kid as a little one still feel recent, yet ${father.sex.toLowerCase()} has already gone from pure-eyed child to a beast staring at the hole ${father.sex.toLowerCase()} was born from with pure lust.`,
          );
          await printAndWait([
            you.get_colored_name(),
            ' cannot help fearing being reduced again to something no mother should ever look like.',
          ]);
        } else {
          await printAndWait(
            `Will this child grow up like the other ${father.uma_sex_title} and treat this body as a breeding sow…?`,
          );
          await printAndWait(
            '…No. Duty first. At the very least, raise this child right.',
          );
        }
        println();
        await printAndWait(
          'Can a child raised by a breeding sow grow up normal?',
        );
        await printAndWait(
          `Watching Mom get fucked to tears and shameless begging by every ${father.elder_sibling_sex_title} under the sun—`,
        );
        await printAndWait('can a kid like that really grow up unbroken?');
        await printAndWait('Not that there is much room to laugh.');
        await printAndWait([
          'Right now, pinned on the bathroom floor again by a passing ',
          father.uma_sex_title,
          ' and put back to work on that cock, ',
          you.get_colored_name(),
          ' can only pin hope on the thinnest scrap of light.',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = 'Duty';
    return f;
  })(),
  have_baby_in_sleep: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} children_count
     * @param {number} edu_count
     */
    const f = async (you, father, children_count, edu_count) => {
      await printAndWait([you.get_colored_name(), ' lifts the baby—']);
      const ret = await degeneration_to_evil(
        'Stroke with love',
        'Resist in silence',
      );
      if (ret === 1) {
        setColor(akuochi[1]);
        await printAndWait([
          you.get_colored_name(),
          ' is flooded with affection.',
        ]);
        await printAndWait('Who the father is no longer matters.');
        await printAndWait([
          'If anything, routine breeding-sow work delivered a child this precious… ',
          you.get_colored_name(),
          ' silently thanks a father never even met.',
        ]);
        await printAndWait('From here on, this child will be raised right…');
        await printAndWait([
          'Without noticing, the old sense of duty and pride as a Trainer begins to stir again in ',
          you.get_colored_name(),
          '…',
        ]);
        printButton('"!"', 1);
        await input();
        await printAndWait([
          'A sudden stream of water snaps ',
          you.get_colored_name(),
          ' out of the daydream.',
        ]);
        await printAndWait(
          'The baby in those arms just took the first piss of a lifetime—straight onto Mom.',
        );
        await printAndWait([
          "Being treated as a toilet by one's own child—even by accident—floods ",
          you.get_colored_name(),
          " with a pleasure so deep it feels like this body was born to be that child's bathroom.",
        ]);
        await printAndWait([
          you.get_colored_name(),
          " gently licks the baby's private clean, then cleans every drop from that own skin with tongue and fingers, savoring it to the last.",
        ]);
        println();
        await printAndWait(
          'A display this low would shame even the cheapest breeding sow.',
        );
        await printAndWait(
          'Someone like this can never go back to the old life.',
        );
        await printAndWait('And would never want to.');
        await printAndWait([
          you.get_colored_name(),
          ' still gazes softly at the child—same face as before.',
        ]);
        await printAndWait('The thoughts behind it are already different.');
        await printAndWait(
          '————How do I raise this child into the perfect master to break me?',
        );
      } else {
        setColor(akuochi[0]);
        await printAndWait(
          'Toward this child, every feeling a mother is supposed to have has gone dull.',
        );
        await printAndWait('It is clear enough that a newborn is innocent…');
        printButton('"!"', 1);
        await printAndWait([
          'Suddenly, ',
          you.get_colored_name(),
          ' cries out.',
        ]);
        await printAndWait([
          "The baby's first piss seems aimed on purpose, spraying ",
          you.get_colored_name(),
          ' full in the face.',
        ]);
        await printAndWait(
          'A nurse laughs kindly, as if celebrating a healthy child.',
        );
        await printAndWait([
          'But there is no joy in ',
          you.get_colored_name(),
          '—only memories flooding back.',
        ]);
        println();
        await printAndWait(
          `Mornings forced into a squat with legs spread, mouth open for a half-asleep ${father.uma_sex_title}'s morning wood, swallowing first cum and first piss together.`,
        );
        await printAndWait(
          `Evenings on the track, begged by post-training ${father.uma_sex_title} to handle their lust, taking cocks still coated in a full day's sweat and filth while those ${father.couple_title} dump every ounce of training stress down that throat.`,
        );
        if (children_count > 0 || edu_count > 0) {
          await printAndWait([
            you.get_colored_name(),
            ' bleakly remembers a few nights ago.',
          ]);
          await printAndWait([
            'Even when ',
            children_count > 0
              ? 'the child'
              : `the assigned ${father.uma_sex_title}`,
            ' sleepwalked into the room, filled that hole half-asleep, then forced open sleeping lips for cleanup—none of it woke ',
            you.get_colored_name(),
            '.',
          ]);
          println();
          await printAndWait([
            you.get_colored_name(),
            ' starts to wonder whether this life has already become normal…',
          ]);
          await printAndWait([
            'No. Do not think that. ',
            you.get_colored_name(),
            ' shakes it off like a jolt of panic.',
          ]);
        }
        println();
        await printAndWait(
          '…In the end, every memory that surfaces hurts. And yet…',
        );
        await printAndWait(
          "Looking at the child in those arms—clueless, giggling even after pissing on Mom's face—",
        );
        await printAndWait("a child's nature sits outside good and evil…");
        await printAndWait('Maybe there is still a chance…?');
        println();
        await printAndWait(
          'Forgetting how fast children learn from everything around them.',
        );
        await printAndWait(
          `Forgetting that a breeding sow serves every ${father.uma_sex_title}, status be damned.`,
        );
        await printAndWait(
          'Missing the nurse already itching to use that mouth.',
        );
        await printAndWait(
          "Missing the way this body has already licked the child's piss clean without thinking.",
        );
        await printAndWait([
          you.get_colored_name(),
          " holds the baby, and even when forced to suck the thick shaft under the nurse's skirt, the light in those eyes does not go out.",
        ]);
        println();
        if (get('exp:0:生产次数') > 0) {
          await printAndWait([
            'Clinging once more to an empty dream, ',
            you.get_colored_name(),
            ' swears this time the child will be raised right.',
          ]);
        } else {
          await printAndWait([
            'Clinging to an empty dream, ',
            you.get_colored_name(),
            ' swears this child will be raised right.',
          ]);
        }
      }
      setColor();
      return [ret];
    };
    f.title = 'New Life';
    return f;
  })(),
  have_baby_after_raped: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), ' lifts the baby—']);
      const ret = await degeneration_to_evil(
        'A child needs a father',
        'No. I can handle this alone',
      );
      if (ret === 1) {
        setColor(akuochi[1]);
        await printAndWait('…Maybe living alone would be possible.');
        await printAndWait(
          'But at the very least, this child deserves a full family.',
        );
        println();
        await printAndWait(
          `Looking to the father, holding the baby out for ${father.sex.toLowerCase()} to see.`,
        );
        await printAndWait(
          `Hoping this child might wake ${father.sex === 'She' ? 'Her' : 'His'} sense of duty.`,
        );
        await printAndWait([
          father.get_colored_name(),
          ' pulls ',
          you.get_colored_name(),
          ' and the baby into a tight embrace, swearing to treat both of them right from now on.',
        ]);
        await printAndWait(
          'A prodigal father come home. A mother who never left.',
        );
        await printAndWait(
          'That little fantasy of a family of three almost feels real.',
        );
        println();
        await printAndWait('And yet…');
        await printAndWait([
          "A breeding sow's professional instinct means ",
          you.get_colored_name(),
          ' does not miss it—',
        ]);
        await printAndWait([
          'the way ',
          father.get_colored_name(),
          `'s crotch twitches while watching the baby nurse.`,
        ]);
        println();
        await printAndWait('Family life… what a convenient excuse.');
        await printAndWait(
          'With that cover, stuffing a cock into that mouth mid-feeding can be waved off as "extra nutrition."',
        );
        await printAndWait([
          'The picture of husband ',
          father.get_colored_name(),
          ' gently holding spouse and child would silence any doubts about the household… so long as no one notices the thick cock plugging the dripping hole at the same time.',
        ]);
        await printAndWait(
          'And later, when the child grows up… being used by both child and father at once, crushed between them, drowning in cock…',
        );
        println();
        await printAndWait([
          'Imagining that future, ',
          you.get_colored_name(),
          ' licks those lips…',
        ]);
        await printAndWait('and starts looking forward to tomorrow.');
      } else {
        setColor(akuochi[0]);
        await printAndWait([
          you.get_colored_name(),
          ' glares at ',
          father.get_colored_name(),
          ', who once unloaded with zero restraint and zero responsibility.',
        ]);
        await printAndWait(
          `Someone like ${father.sex.toLowerCase()} was never going to be a father.`,
        );
        await printAndWait(
          'What is needed is someone who can hold up both parent and child when the world turns cruel—someone who protects the kid.',
        );
        await printAndWait(
          'Not a bastard who, the moment this body is treated as a free toy, plugs the last free hole with a cock so even screaming is impossible.',
        );
        println();
        await printAndWait('Even alone, this child will be cared for.');
        await printAndWait([
          'In this moment, ',
          you.get_colored_name(),
          ' chooses the hardest road of all.',
        ]);
        println();
        await printAndWait('Suddenly, the baby in those arms starts to cry.');
        await printAndWait('Hungry? Needs milk?');
        await printAndWait('Then… this thoroughly trained body—');
        await printAndWait(
          `the moment a nipple is sucked, will it not flash back to every ${father.uma_sex_title} who bit and licked those peaks?`,
        );
        await printAndWait(
          'Will it not climax on contact, remembering every night of groping and milking?',
        );
        await printAndWait(
          'And when the baby finishes and nestles against that chest… will it not recall cocks the same warm size claiming that space, then pumping thick cream into that mouth?',
        );
        println();
        await printAndWait(
          'And even if all of that is endured—even if this child is raised to adulthood…',
        );
        await printAndWait(
          'when that child turns a gaze that already understands lust by instinct long before it understands love—',
        );
        await printAndWait('what then?');
        println();
        await printAndWait('The road ahead looks pitch black…');
      }
      setColor();
      return [ret];
    };
    f.title = 'New Life';
    return f;
  })(),
  have_baby_dedicate: (() => {
    const f = async () => {
      await printAndWait('TODO: willingly dedicate oneself to bearing a child');
    };
    f.title = 'New Life';
    return f;
  })(),
};
