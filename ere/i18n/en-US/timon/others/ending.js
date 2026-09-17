/**
 * @file Common events - endings
 * <br>Note: any ending that forces a game over is a bad ending!
 * @author 雞雞
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

module.exports = {
  loser: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        'Maybe ',
        you.get_colored_name(),
        " got too lazy. Maybe the trainee just wasn't talented enough. Either way, victory never came.",
      ]);
      await era.printAndWait([
        'No amount of effort changed a thing. In the end, the academy ordered ',
        you.get_colored_name(),
        ' to dissolve the contract and reassign the trainee.',
      ]);
      await era.printAndWait([
        'Fired for a ruined reputation, ',
        you.get_colored_name(),
        ' meets an ending...',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'Kicked Out';
    return f;
  })(),
  hentai: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     */
    const f = async (you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        you.get_colored_name(),
        " ignored adult responsibility and pushed a trainee into deviant acts. Once it came out, even Tracen couldn't bury it for ",
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'In the end, the academy ordered ',
        you.get_colored_name(),
        ' to dissolve the contract and reassign the trainee.',
      ]);
      await era.printAndWait([
        'Fired for a ruined reputation, ',
        you.get_colored_name(),
        ' meets an ending...',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'Public Disgrace';
    return f;
  })(),
  slave_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait([
        'Corrupted by money, ',
        you.get_colored_name(),
        ' took a road with no real choice—swallowing pride and borrowing from a student...',
      ]);
      await era.printAndWait(
        'Every gift of fate has a price tag hidden on the back.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        `'s debt snowballed under interest until it crushed what `,
        you.get_colored_name(),
        ' could ever repay.',
      ]);
      await era.printAndWait([
        'Now it is time for ',
        you.get_colored_name(),
        ' to pay the price...',
      ]);
      await era.printAndWait([
        'Bound by a debt that will not let go, ',
        you.get_colored_name(),
        ' meets an ending...',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'Debt Slave';
    return f;
  })(),
  crazy_fan_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      if (era.get(`relation:${chara.id}:0`) < 0) {
        await era.printAndWait([
          'On the track and in interviews alike, the tension between ',
          you.get_colored_name(),
          ' and the trainee is plain to see. Voices never stop arguing that it is holding the trainee back. The academy is losing patience with this pairing... and some people have even less.',
        ]);
      } else {
        await era.printAndWait([
          'Maybe ',
          you.get_colored_name(),
          ' got too lazy. Maybe the assigned ',
          chara.uma_sex_title,
          " just wasn't talented enough. Either way, victory never came. The academy is losing patience with this pairing... and some people have even less.",
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' walks alone through the pouring rain with a honey cake for ',
        chara.get_colored_name(),
        ', when hurried footsteps close in from behind—then a searing pain drives into the lower back.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' is shoved to the ground. The attacker keeps stabbing into that back until ',
        you.get_colored_name(),
        ' no longer moves.',
      ]);
      await era.printAndWait(
        'Rain hammers the plastic bag around the cake box—again, and again, and again...',
      );
      await era.printAndWait(
        'Struck down by an enraged fan, an ending arrives...',
      );
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = 'Fan Attack';
    return f;
  })(),
  basement_end: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      era.setOffset(6);
      era.setWidth(12);
      await era.printAndWait('In a Tracen basement no detector can find...');
      await era.printAndWait([
        you.get_colored_name(),
        ' thrashes against the ropes on wrists and ankles, only tightening the burn.',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' sits at the bedside, smiles softly at ',
        you.get_colored_name(),
        ', and tends to ',
        you.get_colored_name(),
        ' with gentle care.',
      ]);
      await era.printAndWait([
        'But in ',
        you.get_colored_name(),
        `'s heart, there is only a deep fear of the unknown future...`,
      ]);
      await era.printAndWait([
        'Imprisoned by ',
        chara.get_colored_name(),
        `'s love, `,
        you.get_colored_name(),
        ' meets an ending...',
      ]);
      era.setWidth(24);
      era.setOffset(0);
    };
    f.title = "Love's Prison";
    return f;
  })(),

  /**
   * Three-stage punishment events after choosing the dark deal
   */

  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment1(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait(
      'They say only after freedom is stripped away... can a person truly know themselves.',
    );
    await you.say_as_unknown_and_wait('So... how well do you know yourself?');
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      '... sloth, pride',
      era.get('flag:变态行为') > 0 ? ', lust' : '',
      '... today... you are reborn.',
    ]);
    await you.say_as_unknown_and_wait(
      'But you will soon learn... freedom has a price.',
    );
    await you.say_as_unknown_and_wait(
      'This prison walks with you... and this flesh is your eternal sentence.',
    );
    await you.say_as_unknown_and_wait(
      'Atonement begins now—run hard, if you want no worse than this.',
    );
    await you.say_as_unknown_and_wait([
      you.get_colored_actual_name(),
      '—freedom is calling.',
    ]);
    await you.say_as_unknown_and_wait('I hope we never meet again.');
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    if (era.get('cflag:0:种族') > 0) {
      await era.printAndWait([you.get_colored_name(), ' has been altered!']);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' has been turned into an Umamusume!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' can still recruit ',
        uma,
        ', train ',
        they,
        ', and run beside ',
        they,
        '—but Tracen no longer pays a wage.',
      ]);
      await era.printAndWait([
        'In return, ',
        you.get_colored_name(),
        ' can self-train, enter races, and earn prize money and social prestige.',
      ]);
    }
    await era.printAndWait(
      'If prestige falls below zero again, the next punishment will be far harsher!',
    );
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {TextContent} date
   * @param {string} uma
   * @param {string} they
   */
  async punishment2(you, date, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait('S E X   S L A V E   D E C L A R A T I O N', {
      align: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait([
      'I, broodmare ',
      you.get_colored_actual_name(),
      ', willingly become a slave of the ',
      uma,
      ' masters,',
    ]);
    await era.printAndWait(
      'tuning body and mind into the ideal state for pleasing them, and forever renouncing all human rights,',
    );
    await era.printAndWait(
      'accepting every form of training, obeying every order, and never raising a single objection.',
    );
    era.setOffset(13);
    era.setWidth(5);
    era.setAlign('center');
    era.print([you.get_colored_actual_name()]);
    era.print(`<${you.name}'s lip print>`);
    era.print(`<${you.name}'s nipple print>`);
    await era.printAndWait(`<${you.name}'s labia print>`);
    await era.printAndWait(date);
    era.setAlign('left');
    era.setOffset(0);
    era.setWidth(24);
    era.println();
    await era.printAndWait([
      'After "voluntarily" signing this declaration, ',
      you.get_colored_name(),
      ' is remade into a sex slave for the ',
      uma,
      '!',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' can still recruit ',
      uma,
      ', train ',
      they,
      ', run beside ',
      they,
      ', self-train, and enter races.',
    ]);
    await era.printAndWait([
      'But ',
      you.get_colored_name(),
      `'s true duty is to serve as an outlet for `,
      they,
      ' lust!',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      `'s body has already been tuned to peak sensitivity. Keep honing that sexual skill, please the masters, and earn prestige!`,
    ]);
    await era.printAndWait(
      'If prestige falls below zero again, the next punishment will be far harsher!',
    );
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   * @param {string} uma
   * @param {string} they
   */
  async punishment3(you, uma, they) {
    era.setOffset(6);
    era.setWidth(12);
    await you.say_as_unknown_and_wait(
      'I never thought you would sink this far.',
    );
    await you.say_as_unknown_and_wait(
      'You once held a rope that could climb you out of the pit.',
    );
    await you.say_as_unknown_and_wait('And you threw that lifeline away.');
    await you.say_as_unknown_and_wait(
      'At this point, I almost wonder if you let it all rot on purpose—until nothing could be saved.',
    );
    await you.say_as_unknown_and_wait(
      'After all, we gave you so many chances to keep your human rights.',
    );
    await you.say_as_unknown_and_wait(
      'Though I doubt you can still hear me now.',
    );
    await you.say_as_unknown_and_wait([
      'So... this is goodbye, ',
      you.get_colored_actual_name(),
      '.',
    ]);
    await you.say_as_unknown_and_wait([
      {
        color: '#ff7373',
        content: 'GAME OVER',
        fontWeight: 'bold',
      },
    ]);
    era.setWidth(24);
    era.setOffset(0);
    era.println();
    await era.printAndWait([
      'A breeding mare—that is where ',
      you.get_colored_name(),
      ' ends.',
    ]);
    await era.printAndWait(
      'Old ambition scatters on the wind. Old ideals shatter without mercy.',
    );
    if (you.sex_code > 0) {
      await era.printAndWait([
        'From now on, ',
        you.get_colored_name(),
        `'s duty is to please noble `,
        uma,
        ' with an inferior cock, take sacred seed into an inferior cunt, and bear superior offspring with them!',
      ]);
    } else {
      await era.printAndWait([
        'From now on, ',
        you.get_colored_name(),
        `'s duty is to take sacred seed into an inferior cunt and bear superior offspring with `,
        they,
        '!',
      ]);
    }
    await era.printAndWait([
      'Human rights may be gone, but as a breeding sow, keep refining yourself all the same.',
    ]);
    await era.printAndWait([
      'With enough luck, maybe ',
      you.get_colored_name(),
      ' can still rise through the children born!',
    ]);
  },
  /** @param {CharaTalk} you */
  get_basement_ending_confirm: (you) => [
    you.get_colored_name(),
    ' meets an ending in the basement...',
    { isBr: true },
    'View the basement ending?',
  ],
  bt_confirm_yes: "I'll face the horror myself",
  bt_confirm_no: "Nope, I'm not watching this shit",
};
