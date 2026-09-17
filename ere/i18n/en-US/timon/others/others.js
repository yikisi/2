/**
 * @file Miscellaneous
 * @author 雞雞
 * @author 黑奴队长
 * @author Katze (translator)
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  waitAnyKey,
} = require('#/era-electron');

module.exports = {
  /**
   * First meeting in the trainers' office
   * @param {CharaTalk} aoi Aoi Kiryuin
   * @param {CharaTalk} riko Riko Kashimoto
   * @param {CharaTalk} you Player
   * @param {PrintedSpan} r_call_a Riko Kashimoto's form of address for Aoi Kiryuin
   * @param {boolean} empty_team Whether the team has no members
   */
  async welcome_trainer_office(aoi, riko, you, r_call_a, empty_team) {
    await printAndWait([
      you.get_colored_name(),
      ' enters the shared trainers’ office, where two other trainers are already waiting.',
    ]);
    await riko.say_as_unknown_and_wait([
      'Hello. You must be the new trainer, ',
      you.actual_name,
      '.',
    ]);
    await riko.say_and_wait([
      'I’m ',
      riko.get_colored_actual_name(),
      '. Let’s work together to bring glory to Tracen Academy.',
    ]);
    await aoi.say_and_wait([
      'A pleasure to meet you. I’m ',
      aoi.get_colored_actual_name(),
      '. I look forward to working with you.',
    ]);
    if (empty_team) {
      await riko.say_and_wait([
        'You don’t have anyone assigned to you yet. If you run into any trouble, please feel free to consult me or ',
        r_call_a,
        '.',
      ]);
    }
  },

  /**
   * Narration for the URA Awards Ceremony
   */

  ura_reward: (() => {
    /**
     * URA Awards Ceremony
     * @author 雞雞
     * @param {CharaTalk} etusko
     * @param {CharaTalk} you
     * @param {function(TextContent):Promise} report Callback for the host's announcements
     * @param {string} year Year
     * @param {string} uma Uma Boy or Uma Girl
     * @param {boolean} is_etusko Whether Etsuko is hosting (she will not host while pregnant or in a career)
     * @param uma_list_cb Callbacks for displaying the competitors' character portraits
     * @param {function} uma_list_cb.g1 G1 competitors
     * @param {function} uma_list_cb.best_trainer Trainer of the Year
     * @param {function} uma_list_cb.junior Best Junior competitor
     * @param {function} uma_list_cb.classic Best Classic competitor
     * @param {function} uma_list_cb.senior Best Senior competitor
     * @param {function} uma_list_cb.uoty Uma of the Year
     * @param {string} uma_list_cb.default_best_trainer Replacement trainer name if the player does not win Trainer of the Year
     * @returns {Promise<void>}
     */
    const f = async (
      etusko,
      you,
      report,
      year,
      uma,
      is_etusko,
      uma_list_cb,
    ) => {
      await report([
        'Good evening, fans of ',
        uma,
        ' racing! The annual event you’ve all been waiting for—the URA Awards Ceremony—is about to begin!',
      ]);
      await report([
        'As always, tonight’s awards honor the racing ',
        uma,
        's who gave everything to deliver unforgettable performances at the highest level, as well as the trainers who supported them from behind the scenes!',
      ]);
      if (is_etusko) {
        await report([
          'I’m your host again this year, ',
          etusko.get_colored_actual_name(),
          '. It’s a pleasure to have you with us!',
        ]);
      }
      println();
      await report([
        'Before we present the awards, let’s look back at the racing ',
        uma,
        's who distinguished themselves in the G1 races of ',
        year,
        '!',
      ]);
      println();
      if (typeof uma_list_cb.g1 === 'function') {
        uma_list_cb.g1();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(Several competitors’ names are shown, but unfortunately none are members of ',
            you.get_colored_name(),
            '’s team.)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report(
        'Once again, our heartfelt thanks to every competitor for their dedication to racing!',
      );
      println();
      await report(
        'And now, without further ado, let’s reveal this year’s most anticipated awards!',
      );
      println();
      await report('First up is... the Trainer of the Year Award!');
      println();
      if (typeof uma_list_cb.best_trainer === 'function') {
        uma_list_cb.best_trainer();
        await waitAnyKey();
        await report([
          'Trainer ',
          you.get_colored_actual_name(),
          '’s hard work has certainly paid off!',
        ]);
      } else {
        if (typeof uma_list_cb.default_best_trainer === 'string') {
          await report([
            'Trainer ',
            uma_list_cb.default_best_trainer,
            '’s hard work has certainly paid off!',
          ]);
        } else {
          await report(
            'Unfortunately, no candidates met the requirements this year...',
          );
          await report('How Unfortunate! We hope to crown a winner next year!');
        }
      }
      println();
      await report('Next is... the Junior of the Year Award!');
      println();
      if (typeof uma_list_cb.junior === 'function') {
        uma_list_cb.junior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(The name and photo of a competitor who just completed their Junior Year are shown, but unfortunately they are not a member of ',
            you.get_colored_name(),
            '’s team.)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report(
        'We hope to see this rising star shine even brighter on the track!',
      );
      println();
      await report('Next up is... the Classic of the Year Award!');
      println();
      if (typeof uma_list_cb.classic === 'function') {
        uma_list_cb.classic();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(The name and photo of a competitor who just completed their Classic Year are shown, but unfortunately they are not a member of ',
            you.get_colored_name(),
            '’s team.)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report(
        'They’ve truly grown into one of the sport’s brightest stars!',
      );
      println();
      await report('Next is... the Senior of the Year Award!');
      println();
      if (typeof uma_list_cb.senior === 'function') {
        uma_list_cb.senior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(The name and photo of a competitor who just completed their Senior Year are shown, but unfortunately they are not a member of ',
            you.get_colored_name(),
            '’s team.)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('Without a doubt, they’re now a seasoned veteran!');
      println();
      await report([
        'And finally! The historic moment when we crown this year’s fastest, greatest, and strongest! Which racing ',
        uma,
        ' will leave an unforgettable mark among the legends of the sport?!',
      ]);
      await report([
        'The ultimate honor, the title of ',
        uma,
        ' of the Year, goes to—',
      ]);
      println();
      if (typeof uma_list_cb.uoty === 'function') {
        uma_list_cb.uoty();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '(A competitor’s name and photo are shown, but unfortunately they are not a member of ',
            you.get_colored_name(),
            '’s team.)',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('The year’s greatest champion has been crowned!');
      println();
      await report(
        'Thank you all for joining us tonight. We’ll see you again next year!',
      );
    };
    f.title = 'URA Awards Ceremony';
    return f;
  })(),
  /** Title used for the substitute host when Etsuko is pregnant or in a career */
  ur_alternative_reporter: 'Host',
  /**
   * Trainer's annual results
   * @param {PrintedSpan} total Total wins
   * @param {PrintedSpan} money Total prize money
   * @param {PrintedSpan} g1_wins G1 wins
   * @param {PrintedSpan} all_wins Graded race wins
   */
  get_ur_trainer_reward(total, money, g1_wins, all_wins) {
    return [
      'Team Wins This Year: ',
      total,
      { isBr: true },
      'Team Prize Money This Year: ',
      money,
      ' UmaCoin',
      { isBr: true },
      'Team G1 Wins This Year: ',
      g1_wins,
      { isBr: true },
      'Team Graded Race Wins This Year: ',
      all_wins,
    ];
  },
  /**
   * Competitor's annual results
   * @param {PrintedSpan} total Total wins
   * @param {PrintedSpan} money Total prize money
   * @param {PrintedSpan} g1_wins G1 wins
   * @param {PrintedSpan} all_wins Graded race wins
   */
  get_ur_uma_reward(total, money, g1_wins, all_wins) {
    return [
      'Wins This Year: ',
      total,
      { isBr: true },
      'Prize Money This Year: ',
      money,
      ' UmaCoin',
      { isBr: true },
      'G1 Wins This Year: ',
      g1_wins,
      { isBr: true },
      'Graded Race Wins This Year: ',
      all_wins,
    ];
  },

  /**
   * Repeat career
   * @author 天马闪光蹄
   */

  sc_event_name: '“Dream”',
  get_sc_buttons: () =>
    get('flag:初见重复育成') === 1
      ? {
          yes: '“This is why I came.”',
          no: '“...I’ve had enough.”',
        }
      : {
          yes: 'Keep Moving Forward',
          no: 'Turn Back',
        },
  /**
   * First half of the event
   * @param {CharaTalk} you Player
   */
  async sc_event_former(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait('It is late at night, and all is still.');
      await printAndWait([
        you.get_colored_name(),
        ' makes their way alone to the heart of Tracen Academy.',
      ]);
      await printAndWait(
        'A statue of the Three Goddesses stands serenely before them.',
      );
      await printAndWait([
        you.get_colored_name(),
        ' takes a deep breath, approaches the fountain, and reverently casts a letter they wrote earlier into the water.',
      ]);
      await printAndWait([
        'The moonlight reflected in the water suddenly ripples as a faint glow drifts across its surface. ',
        you.get_colored_name(),
        ' hears several voices echo through their mind as one—',
      ]);
      await printAndWait(
        'Life is ever-changing. Whether a fearless frontrunner, a champion who ruled an era, or an emperor who commanded their domain, no path is ever free of hardship. Light and darkness alike ultimately fade like dreams.',
      );
      await printAndWait(
        'Yet nightmares eventually end, and beautiful dreams can come true. Even among the fleeting bubbles, some things are worth reaching for and preserving.',
      );
      await you.say_as_unknown_and_wait('Then tell me your resolve.');
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' returns to this place once again.',
      ]);
      await printAndWait([
        'How many times has it been...? ',
        you.get_colored_name(),
        ' finds their memories of it strangely hazy.',
      ]);
      await printAndWait('But that doesn’t matter...');
      await printAndWait([
        you.get_colored_name(),
        ' only needs to hold fast to the wish in their heart.',
      ]);
    }
  },
  sc_limit_template: 'Select characters to train again (up to %LIMIT%)',
  sc_name_template: '%NAME%',
  sc_name_inherited_template: '%NAME% (Already Inherited)',
  /**
   * Second half of the event
   * @param {CharaTalk} you Player
   */
  async sc_event_latter(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait([
        you.get_colored_name(),
        ' gazes up at the statue’s faces and into its three pairs of lifelike eyes, then bows.',
      ]);
      await printAndWait('A brilliant light bursts forth—');
      await printAndWait('It is time to seek the truth of what comes next.');
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' gazes at the statues of the Three Goddesses, their faces veiled by mist. ',
        you.get_colored_name(),
        ' feels compelled to do something and starts to speak, reaching out—but then—',
      ]);
      await printAndWait('Everything before them warps.');
      await printAndWait(
        'A moment later, it returns to normal as though nothing happened.',
      );
      await printAndWait('...');
      await printAndWait(
        'Everything seems the same... or is something different?',
      );
      await printAndWait('What... did I just do?');
    }
  },

  /**
   * Special recruitment narration
   */

  /**
   * Special recruitment when the team is full
   * @param {CharaTalk} taste Chairwoman
   */
  async star_drew_limited(taste) {
    await taste.say_and_wait(
      'BAFFLEMENT! Your team already has enough members!',
    );
  },
  /**
   * Special recruitment outside the recruitment season
   * @param {CharaTalk} taste Chairwoman
   */
  async star_drew_wrong_date(taste) {
    await taste.say_and_wait(
      'CONFUSION! This is not the season for recruiting trainees!',
    );
  },
  /**
   * Special recruitment introduction
   * @param {CharaTalk} taste Chairwoman
   */
  star_drew_intro(taste) {
    taste.say(
      'ANNOUNCEMENT! The academy allows accomplished trainers to personally recruit talented students who have not yet joined a team! However, you will need a reputation worthy of their trust!',
    );
    taste.say(
      'CAUTION! Even after recruiting them this way, remember to build your relationship from the ground up!',
    );
  },
  star_drew_options: [
    'Select from List',
    'Search by Name',
    'Search by ID',
    'Think It Over',
  ],
  star_drew_filter_template: 'Characters with %FILTERS%',
  star_drew_filter_kojo_template: '%KOJO% Dialogue',
  star_drew_filter_image: 'Exclusive Training Portraits',
  star_drew_bt_filter_kojo_r: 'Recruitment',
  star_drew_bt_filter_kojo_d: 'Daily',
  star_drew_bt_filter_kojo_ed: 'Career',
  star_drew_bt_filter_kojo_l: 'Infatuation',
  star_drew_bt_filter_kojo_er: 'Training',
  star_drew_bt_filter_kojo_b: 'Basement',
  star_drew_bt_filter_image: 'Portraits',
  sd_f_title_kojo_r:
    'Recruitment Dialogue: Exclusive scenes and dialogue triggered when the character joins your team.',
  sd_f_title_kojo_d:
    'Daily Dialogue: Exclusive scenes and dialogue triggered during daily interactions or seasonal celebrations.',
  sd_f_title_kojo_ed:
    'Career Dialogue: Exclusive story events and plotlines that unfold during the character’s career.',
  sd_f_title_kojo_l:
    'Infatuation Dialogue: Exclusive scenes and events triggered when the character’s Infatuation reaches certain milestones.',
  sd_f_title_kojo_er:
    'Training Dialogue: Exclusive scenes and dialogue triggered during sexual training with the character.',
  sd_f_title_kojo_b:
    'Basement Dialogue: Exclusive scenes and dialogue triggered when the character kidnaps and imprisons the player.',
  sd_f_title_image:
    'Exclusive Training Portraits: Unique character artwork shown during training.',
  get_star_drew_selected: (name) => `${name} [Selected]`,
  star_drew_all_chara: 'Available Characters',
  star_drew_other_chara: 'Other Characters',
  star_drew_chara_name_input:
    'Enter the name of the character you want to recruit',
  star_drew_chara_id_input: 'Enter the ID of the character you want to recruit',
  /**
   * Special recruitment when the character is already selected
   * @param {CharaTalk} taste Chairwoman
   * @param {CharaTalk} chara Selected character
   */
  async star_drew_duplicate(taste, chara) {
    await taste.say_and_wait([
      'REMINDER! ',
      chara.get_colored_name(),
      ' is already waiting at the training grounds!',
    ]);
  },
  /**
   * Special recruitment with no character selected
   * @param {CharaTalk} taste Chairwoman
   */
  async star_drew_no_one(taste) {
    await taste.say_and_wait('CONFUSION! No such person found!');
  },
  /**
   * Special recruitment
   * @param {CharaTalk} taste Chairwoman
   * @param {CharaTalk} you Player
   * @param {PrintedSpan} chara Character being recruited
   * @param {boolean} changed Whether the selected character was changed
   * @returns {Promise<number>}
   */
  async star_drew(taste, you, chara, changed) {
    taste.say([
      'DECISION! Shall the academy approach ',
      chara,
      ' on your behalf?',
    ]);
    printButton('“RECRUIT!!”', 1);
    printButton('“WAIT!!”', 2);
    const ret = await input();
    if (ret === 1) {
      await taste.say_and_wait([
        'EXCITEMENT! ',
        chara,
        ' will be visiting the training grounds often from now on. Make the most of this opportunity!',
      ]);
      if (changed) {
        await taste.say_and_wait([
          'DISPLEASURE! But please make up your mind before deciding next time, Trainer ',
          you.get_colored_actual_name(),
          '!',
        ]);
      }
    } else {
      await taste.say_and_wait(
        'ANGER! Come back once you’ve made up your mind!',
      );
    }
    return ret;
  },
  grand_live_header:
    'The following races will be featured on the Grand Stage next year:',

  /**
   * Investment narration
   */

  /**
   * Reject investment below 1,000 UmaCoin
   * @param {CharaTalk} bryne 百炼砥石
   * @param {PrintedSpan} callname 百炼's form of address for the player
   */
  async fund_reject(bryne, callname) {
    await bryne.say_and_wait([
      'Sorry, but ',
      callname,
      ', you don’t have enough capital, do you? None of the firms I work with accept micro investments under 1,000 UmaCoin...',
    ]);
  },
  /**
   * Current investment principal and returns
   * @param {CharaTalk} bryne 百炼砥石
   * @param {PrintedSpan} funds Total principal
   * @param {PrintedSpan} income Weekly returns
   */
  fund_summary(bryne, funds, income) {
    print([
      'You currently have ',
      funds,
      ' UmaCoin invested through ',
      bryne.get_colored_name(),
      ', earning ',
      income,
      ' UmaCoin per week.',
    ]);
  },
  bt_fund: 'Invest (in units of 1,000 UmaCoin)',
  bt_ransom: 'Withdraw',
  fund_confirm: 'How many UmaCoin would you like to invest?',
  /**
   * Additional investment and new total returns
   * @param {CharaTalk} bryne 百炼砥石
   * @param {PrintedSpan} new_funds Additional investment
   * @param {PrintedSpan} income Weekly returns after investing
   */
  async fund_result(bryne, new_funds, income) {
    await printAndWait([
      'You invested an additional ',
      new_funds,
      ' UmaCoin through ',
      bryne.get_colored_name(),
      ', bringing your weekly returns to ',
      income,
      ' UmaCoin.',
    ]);
  },
  get_ransom_confirm(funds) {
    return [
      'How many UmaCoin would you like to withdraw? Total invested: ',
      funds,
      ' UmaCoin.',
    ];
  },
  /**
   * Withdrawn amount, remaining principal, and total returns
   * @param {PrintedSpan} ransomed Amount withdrawn
   * @param {PrintedSpan|boolean} funds Remaining principal after withdrawal; Object if funds remain, otherwise another type (Boolean)
   * @param {PrintedSpan} income Weekly returns after withdrawal
   */
  async ransom_result(ransomed, funds, income) {
    print(['Withdrew ', ransomed, ' UmaCoin.']);
    if (typeof funds === 'object') {
      await printAndWait([
        'You still have ',
        funds,
        ' UmaCoin invested, earning ',
        income,
        ' UmaCoin per week.',
      ]);
    }
  },

  /**
   * Anniversary events
   */

  /**
   * 10th anniversary
   * @author 雞雞
   * @param {CharaTalk} you Player
   * @param {string} uma Uma Girl or Uma Boy
   */
  async TEN(you, uma) {
    await printAndWait(
      'Three years passed, then three more, and then another three.',
    );
    await printAndWait([
      'The cherry blossoms bloomed and fell, only to bloom again. Ten years have now passed since ',
      you.get_colored_name(),
      ' came to Tracen Academy.',
    ]);
    await printAndWait([
      'Over the past decade, ',
      you.get_colored_name(),
      ' has watched one racing ',
      uma,
      ' after another grow, while rising from a novice trainer to one of the academy’s most respected figures.',
    ]);
    await printAndWait([
      'Thank you, ',
      you.get_colored_name(),
      ', for always watching over the ',
      uma,
      's from behind the scenes and supporting them every step of the way.',
    ]);
    await printAndWait([
      'It was ',
      you.get_colored_name(),
      ' who made this decade’s story shine so brightly.',
    ]);
  },
  /**
   * 20th anniversary
   * @author 雞雞
   * @param {CharaTalk} you Player
   * @param {string} uma Uma Girl or Uma Boy
   * @param {string} they They
   */
  async TWENTY(you, uma, they) {
    await printAndWait('Twenty years have flown by in the blink of an eye.');
    await printAndWait([
      'Yet the racing ',
      uma,
      's still thunder across Tracen Academy’s training grounds.',
    ]);
    await printAndWait([
      'Thank you, ',
      you.get_colored_name(),
      ', for never giving up on a single dream.',
    ]);
    await printAndWait([
      'Every time ',
      they,
      ' charge toward the finish line, the influence of ',
      you.get_colored_name(),
      ' runs with them.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' leafs through the profiles of a new generation of students. Perhaps one of these unfamiliar names will be the next to change history.',
    ]);
  },
  /**
   * 30th anniversary
   * @author 雞雞
   * @param {CharaTalk} you Player
   */
  async THIRTY(you) {
    await printAndWait([
      'Thirty years is long enough for ',
      you.get_colored_name(),
      ' to become a legend to an entire generation.',
    ]);
    await printAndWait(
      'The racetrack still burns with passion, and Tracen’s crest still shines as brightly as ever.',
    );
    await printAndWait([
      'The story of ',
      you.get_colored_name(),
      ' has long since become one that countless people hold dear.',
    ]);
    await printAndWait([
      'Thank you, ',
      you.get_colored_name(),
      ', for turning thirty years of devotion and conviction into a legend unlike any other.',
    ]);
  },
  /**
   * 40th anniversary
   * @author 雞雞
   * @param {CharaTalk} you Player
   * @param {string} uma Uma Girl or Uma Boy
   * @param {string} they They
   */
  async FORTY(you, uma, they) {
    await printAndWait([
      'Forty years have passed in the blink of an eye, and the story of ',
      you.get_colored_name(),
      ' has become an inseparable part of Tracen Academy.',
    ]);
    await printAndWait([
      'Though the years have changed, the dedication of ',
      you.get_colored_name(),
      ' never has.',
    ]);
    await printAndWait([
      'The racing ',
      uma,
      's keep pushing beyond their limits and running for each other’s dreams, while ',
      you.get_colored_name(),
      ' remains the steadfast source of warmth and support behind ',
      they,
      '.',
    ]);
    await printAndWait([
      'One of the academy’s walls of honor is covered in photographs from the past forty years, each one preserving a moment from the journey of ',
      you.get_colored_name(),
      '.',
    ]);
  },
  /**
   * 50th anniversary
   * @author 雞雞
   * @param {CharaTalk} you Player
   * @param {string} uma Uma Girl or Uma Boy
   * @param {string} they They
   */
  async FIFTY(you, uma, they) {
    await printAndWait('Fifty years of life pass like a fleeting dream.');
    await printAndWait(
      'The cherry blossoms bloom as beautifully as ever, while Tracen Academy celebrates half a century of glory.',
    );
    await printAndWait(
      'Half a century is enough to change everything—yet some things have never changed.',
    );
    await printAndWait([
      'Some of the racing ',
      uma,
      's of years past became legends, while others stepped away from the spotlight. Yet the stories of ',
      they,
      ' live on through ',
      you.get_colored_name(),
      '.',
    ]);
    await printAndWait([
      'And ',
      you.get_colored_name(),
      ' still stands at the training grounds, watching a new generation of racing ',
      uma,
      's run.',
    ]);
  },
};
