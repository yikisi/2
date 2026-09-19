/**
 * @file New Player Tutorial
 * @author 雞雞
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} minoru Tazuna Hayakawa/Harvest Time
   * @param {CharaTalk} you Player
   * @param {boolean} new_save Whether this is a new save
   */
  async game_start(minoru, you, new_save) {
    await era.printAndWait([
      you.get_colored_name(),
      ' arrived at the academy where they would soon be working. A ',
      minoru.sex_code === 1
        ? 'sharp-looking "human" man'
        : 'beautiful "human" woman',
      ' dressed head to toe in green stood waiting at the gate.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' remembered the final interview. ',
      minoru.sex,
      ' had been one of the interviewers.',
    ]);
    era.println();
    if (!new_save) {
      await minoru.say_as_unknown_and_wait('Hello, new...');
      era.println();

      await era.printAndWait([
        'The ',
        minoru.phy_sex_title,
        ' met ',
        you.get_colored_name(),
        "'s gaze and looked puzzled for a moment, but quickly regained composure.",
      ]);
    } else {
      await era.printAndWait([
        'The ',
        minoru.phy_sex_title,
        ' met ',
        you.get_colored_name(),
        "'s gaze and immediately broke into a radiant smile.",
      ]);
    }
    era.println();

    await minoru.say_as_unknown_and_wait(['Welcome, new Trainer.']);
    await minoru.say_as_unknown_and_wait(
      "I'm Tazuna Hayakawa, the chairperson's secretary.",
    );
    await minoru.say_and_wait('Welcome to Tracen Academy.');
    await minoru.say_and_wait(
      "I'll be here to offer advice and support as you settle into your new role.",
    );

    if (!new_save) {
      era.println();

      await era.printAndWait([
        minoru.sex,
        ' narrowed their eyes and continued.',
      ]);
      era.println();

      await minoru.say_and_wait(
        "Still, with your wealth of experience, I'm sure you'll fit right in.",
      );
    }
    era.drawLine();
    await minoru.say_and_wait([
      "As a Trainer, you'll need to find a racing ",
      minoru.uma_sex_title,
      ' to take on as your trainee.',
    ]);
    await minoru.say_and_wait(
      'As it happens, plenty of promising new students have just joined Tracen Academy.',
    );
    await minoru.say_and_wait('Shall we take a look at the training grounds?');
  },
  /**
   * @param {CharaTalk} minoru Tazuna Hayakawa/Harvest Time
   * @param {CharaTalk} you Player
   */
  async recruit(minoru, you) {
    await era.printAndWait([
      'Outside the training grounds, ',
      minoru.get_colored_name(),
      ' came to a stop.',
    ]);
    await minoru.say_and_wait(
      'Tracen Academy enrolls around two thousand students each year. Most are elite athletes who overcame countless hurdles for the chance to reach the very top.',
    );
    await minoru.say_and_wait(
      "But things don't always go as planned. Fierce competition, injuries, or sometimes just plain bad luck can stand in their way...",
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      ' let out a quiet sigh.',
    ]);
    await minoru.say_and_wait([
      'For all sorts of reasons, fewer than ten percent of racing ',
      minoru.uma_sex_title,
      ' make it through the Open class (OP).',
    ]);
    await era.printAndWait([
      minoru.get_colored_name(),
      ' turned to ',
      you.get_colored_name(),
      ' with a grave expression.',
    ]);
    await minoru.say_and_wait([
      'As a Trainer, you cannot race in place of your ',
      minoru.uma_sex_title,
      '.',
    ]);
    await minoru.say_and_wait(
      'That means you must give your trainee your full support away from the track.',
    );
    await minoru.say_and_wait([
      'From physical and mental conditioning to race training, ',
      minoru.couple_title,
      " needs the guidance and support of an adult known as a 'Trainer' on the road to their dreams.",
    ]);
    await minoru.say_and_wait(
      'Please understand the weight of the responsibility you are about to take on.',
    );
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' straightened their tie, showing their resolve.',
    ]);
    await minoru.say_and_wait('Very good.');
    await era.printAndWait([
      minoru.get_colored_name(),
      ' nodded and led ',
      you.get_colored_name(),
      ' toward the students on the training grounds.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {boolean} has_recruit
   */
  async recruit_end(minoru, you, has_recruit) {
    era.drawLine();
    if (has_recruit) {
      await era.printAndWait([
        'The recruitment went smoothly. ',
        you.get_colored_name(),
        ' approached ',
        minoru.get_colored_name(),
        ' with their new partner.',
      ]);
      await minoru.say_and_wait([
        "Trainer, you've found yourself a trainee. In that case...",
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        ' gave a slight bow.',
      ]);
      await minoru.say_and_wait(
        'I wish you and your trainee every success over the next three years. May victory and good fortune be yours.',
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' failed to find a suitable trainee and returned alone to ',
        minoru.get_colored_name(),
        '.',
      ]);
      await minoru.say_and_wait(['Trainer, did you find a suitable partner?']);
      era.printButton('`All the good candidates were already taken.`', 1);
      era.printButton(
        '`Embarrassing as it is, I guess no one was interested in me.`',
        2,
      );
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' gave an exaggerated shrug, looking thoroughly troubled.',
        ]);
        await era.printAndWait(
          'How much of that was true hardly seemed to matter.',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' gave an awkward shrug, looking thoroughly troubled.',
        ]);
      }
      era.println();

      await minoru.say_and_wait('I see...');
      await minoru.say_and_wait(
        'Then come back and try again later. You may find a suitable student to take on as your trainee.',
      );
      await minoru.say_and_wait(
        'If you already have someone in mind, you could try asking the chairperson for help.',
      );
      await era.printAndWait('You left the training grounds.');
    }
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_train(minoru, you) {
    await minoru.say_and_wait(
      'Once you have recruited a partner, you can take them to the training grounds for coaching.',
    );
    await minoru.say_and_wait(
      'Training is divided into five main categories: Speed, Stamina, Power, Guts, and Wit.',
    );
    await minoru.say_and_wait(
      "Training is the main way to raise your trainee's base stats, though it isn't the only way.",
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      ' clapped their hands, prompting ',
      you.get_colored_name(),
      ' to pay attention.',
    ]);
    await minoru.say_and_wait(
      '...Training consumes both physical and mental energy. Pushing a tired trainee to train may result in injury.',
    );
    await minoru.say_and_wait('...Please take particular care to avoid that.');
    await era.printAndWait([
      'As ',
      minoru.get_colored_name(),
      ' spoke, a trace of bitterness crossed their face. They quickly regained composure and managed a strained smile.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_register(minoru, you) {
    await minoru.say_and_wait(
      'This list contains information on upcoming races. Please look it over.',
    );
    await minoru.say_and_wait(
      'To enter your trainee, simply select the race you want.',
    );
    await minoru.say_and_wait(
      "Race distances and track surfaces vary, so choose events that suit your partner's aptitudes.",
    );
    await minoru.say_and_wait(
      'Racing also consumes physical and mental energy, and your trainee will remain fatigued for a while afterward.',
    );
    await minoru.say_and_wait(
      "...Some unscrupulous Trainers have ignored their trainees' condition and forced them through grueling strings of races...",
    );
    await minoru.say_and_wait([
      'This will not win races and may leave your trainee injured. Trainer, please avoid such tactics.',
    ]);
    await minoru.say_and_wait(
      'If something unexpected arises before a race, such as an injury or scheduling conflict, withdrawing is always an option.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_trainer_office(minoru, you) {
    await era.printAndWait([
      minoru.get_colored_name(),
      ' led ',
      you.get_colored_name(),
      ' into an office filled with fellow Trainers.',
    ]);
    era.println();
    await minoru.say_and_wait(
      "This is where you'll handle your day-to-day work. The other Trainers often stop by as well.",
    );
    await minoru.say_and_wait(
      'Be sure to build a good rapport with your colleagues.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {PrintedSpan} call_305
   */
  async school_clinic(minoru, call_305) {
    await minoru.say_and_wait([
      "This is the school infirmary. You'll find the school doctor, ",
      call_305,
      ', lurking around here... Yes, lurking.',
    ]);
    era.println();
    await era.printAndWait([
      minoru.sex,
      ' scratched their cheek uneasily. Could ',
      call_305,
      ' be some kind of troublemaker?',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_god(minoru, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' joined ',
      minoru.get_colored_name(),
      ' before a fountain adorned with statues of the Three Goddesses. Water flowed steadily from the jars resting on their shoulders.',
    ]);
    era.println();

    await minoru.say_and_wait(
      'You should have seen statues of the Three Goddesses during your training.',
    );
    await minoru.say_and_wait(
      'Faith in them may be fading as the world moves forward.',
    );
    await minoru.say_and_wait('But to us, they truly exist...');
    await minoru.say_and_wait('...The Three Goddesses... They must be real.');
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      ' muttered something under their breath. A sudden gust swept through, and ',
      minoru.sex,
      ' was drowned out by the wind.',
    ]);
    era.println();

    await minoru.say_and_wait(
      'In any case, if something is troubling you, try coming here to pray.',
    );
    await minoru.say_and_wait(
      'They say prayers offered here in March have a special effect.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_atrium(minoru, you) {
    await minoru.say_and_wait(
      'This is the courtyard. Many students and staff come here to unwind during breaks.',
    );
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      ' pointed to a corner of the courtyard. ',
      you.get_colored_name(),
      ' followed their gesture and saw a hollow in a dead tree. The trunk was too wide to encircle, though the hollow itself stood only waist-high.',
    ]);
    era.println();

    await minoru.say_and_wait(
      'Some people come here specifically to shout into the hollow and vent their frustrations.',
    );
    await minoru.say_and_wait([
      "So if you hear someone yelling nearby, Trainer, don't be alarmed.",
    ]);
  },
  /** @param {CharaTalk} minoru */
  async school_rooftop(minoru) {
    await minoru.say_and_wait(
      'In movies and TV, students are always heading to the rooftop to eat lunch or hold secret meetings.',
    );
    await minoru.say_and_wait(
      "But this 'hot spot' is so popular that getting the rooftop to yourself at Tracen is practically impossible. Hehe.",
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {PrintedSpan} chairman
   */
  async school_chairman(minoru, you, chairman) {
    await minoru.say_and_wait([
      "This is the chairperson's office. If you need anything, you can usually find ",
      chairman,
      ' here.',
    ]);
    await minoru.say_and_wait([
      "Getting on the chairperson's good side could do wonders for your career, Trainer.",
    ]);
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      ' winked at ',
      you.get_colored_name(),
      '.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_visitors(minoru, you) {
    await minoru.say_and_wait(
      'When visitors come from outside the academy, meetings are held in these rooms.',
    );
    await minoru.say_and_wait([
      "I'm sure plenty of reporters will come to interview you in the future, Trainer.",
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async out(minoru, you) {
    await minoru.say_and_wait([
      "Beyond Tracen's gates, you can visit the riverbank, shopping district, shrine, station plaza, and more. As for the details... I leave those for you to discover, Trainer.",
    ]);
    await minoru.say_and_wait(
      "When I'm not handling academy business, I'm usually by the front gate. Come find me here if you need anything.",
    );
    await minoru.say_and_wait(
      "...Just don't do that while you're out with your trainee.",
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      ' waved to ',
      you.get_colored_name(),
      ' and headed toward the academy gate.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_sex(minoru, you) {
    await minoru.say_and_wait('My, what an unexpected request...');
    await era.printAndWait([
      minoru.get_colored_name(),
      "'s gaze cut straight into ",
      you.get_colored_name(),
      "'s burning cheeks...",
    ]);
  },
};
