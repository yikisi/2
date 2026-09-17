/**
 * @file Symboli Rudolf - Daily
 * @author 露娜俘虏
 * @author Katze (translator)
 * Words from the translator: I used Shakespearean English in the "emperor" mood of Symboli Rudolf, so the grammar might not look appropriate from the perspective of modern English.
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} luna Symboli-Rudolf/Luna
   * @param {CharaTalk} you The player
   */
  good_morning_luna(luna, you) {
    const buffer = [
      () =>
        luna.say(
          'Who would have thought we would have developed such relationships... No turning back now.',
        ),
      () =>
        luna.say(
          'Those who have trusted me, expecting something from me... There is no way that I could castigate them.',
        ),
      () =>
        luna.say(
          'The only reason for my momentum toward a distant utopia is you. Only you.',
        ),
      () => luna.say('Not even one could have understood my stance.'),
      () =>
        luna.say(
          'Just pass the slip about the request for the student council to us. I will try my best to satisfy everyone.',
        ),
      () =>
        luna.say(
          'You think that my racing silks are ravishing? ...I do not believe the suitable adjective to describe a prison would be ravishing.',
        ),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => luna.say('Recently, I often feel an odd sense of headache.'),
        () => luna.say('Did I sleep too much these days?'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () => luna.say("Never ever leave my sight! I can't feel you anymore."),
        () =>
          luna.say(
            `${you.actual_name}，Are you still watching Luna? I... no longer feel myself.`,
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  good_morning_emperor(emperor) {
    const buffer = [
      () => emperor.say('Thee shalt not waste thy owneth time.'),
      () => emperor.say('Thee shalt not make mistakes.'),
      () => emperor.say('Thee shalt not disappoint me.'),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () =>
          emperor.say('Valorous thing yond i falleth asleep less and less.'),
        () => emperor.say('Arrange hunts for me, thou loyal courtier.'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () =>
          emperor.say(
            'I shalt not beest weak anymore. Bright shalt beest the nameth of the emperor!',
          ),
        () =>
          emperor.say(
            `Who is't is groaning in mine own brain? break thee off.`,
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna Symboli-Rudolf/Luna
   * @param {CharaTalk} you The player
   */
  select_luna(luna, you) {
    const buffer = [
      () => luna.say(`${you.actual_name}？`),
      () => luna.say('I could not think of even a single dad joke...'),
      () => luna.say('What do we plan for today?'),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  select_emperor(emperor) {
    const buffer = [
      () => emperor.say("Ah. 'Tis thee, mine own courtier."),
      () =>
        emperor.say(
          'I hast bright moods. thee shouldnst maketh me disappointed',
        ),
      () =>
        emperor.say(
          'Everything yond hath a beginning hath an end, and so shall I fall. I should leave the most wondrous for the future.',
        ),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} chara17 Symboli-Rudolf/Luna/Emperor */
  select_sleep(chara17) {
    chara17.say('Zzz... Zzz...');
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async office_study_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait('Wait, you read psychology books? Teach me some.'),
      () =>
        luna.say_and_wait(
          "I composed some of the questions in the trainer's license.",
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async office_study_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('I needeth not foolish mentors.'),
      () =>
        emperor.say_and_wait(
          'The person with wisdom should receive respect, no matter the era.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async office_prepare_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('I had once loved running...'),
      () => luna.say_and_wait('I will never flinch to achieve our idea!'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async office_prepare_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait('Mine own blood... boils in this tense moment!'),
      () =>
        emperor.say_and_wait(
          'Alloweth me admireth the moment of the brave struggling!!!',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async talk_luna(luna) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => luna.say_and_wait('I can continue the training!'),
        () =>
          luna.say_and_wait(
            'Just add another round of training. My power enables me to strive on.',
          ),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () =>
              luna.say_and_wait(
                "I'm feeling [striving] now, [striving] to get more training! Heh...",
              ),
            () =>
              luna.say_and_wait(
                'I feel a lot better than usual. Definitely could do good.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              luna.say_and_wait(
                "It's important to accumulate your skills daily.",
              ),
            () =>
              luna.say_and_wait(
                "Let's go for a walk after training... if we got some spare time.",
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              luna.say_and_wait(
                'Although I do not feel the best, but I shall not show my own weakness.',
              ),
            () =>
              luna.say_and_wait(
                "Let's do it step by step. I think I can keep up with that.",
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              luna.say_and_wait(
                'I consider wearing the racing silks an identity change, meaning yond I shall becometh the emperor...',
              ),
            () =>
              luna.say_and_wait(
                'Hmm... I do not really feel good, but I should not give up just because of such drain of stamina.',
              ),
          );
          break;
        case -2:
          buffer.push(
            () =>
              luna.say_and_wait(
                'Ah... I feel the divergence between my soma and mentality... But I do not even wish to waste a single day worth of training...',
              ),
            () =>
              luna.say_and_wait(
                "I can't feel my body anymore... I know that I could not continue training like this, but...",
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async talk_emperor(emperor) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => emperor.say_and_wait('I feeleth exhausted.'),
        () =>
          emperor.say_and_wait(
            'Thee needeth not to believeth me. Just followeth mine own path.',
          ),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () => emperor.say_and_wait('Veni, vidi, vici.'),
            () =>
              emperor.say_and_wait(
                'All of the world shouldst cherish the nameth of the emperor.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () => emperor.say_and_wait("Rome wasn't built in a day."),
            () => emperor.say_and_wait('Hmm... Courtior, bid me a gleek.'),
          );
          break;
        case 0:
          buffer.push(
            () => emperor.say_and_wait('Uninterested, perhaps.'),
            () => emperor.say_and_wait('Disappoint me not.'),
          );
          break;
        case -1:
          buffer.push(
            () => emperor.say_and_wait('Hmph...'),
            () => emperor.say_and_wait('Away, thou knave!'),
          );
          break;
        case -2:
          buffer.push(
            () =>
              emperor.say_and_wait(
                'Courtier, thee seemeth to hast messed everything up?',
              ),
            () => emperor.say_and_wait('Hold me in thine esteem.'),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async office_gift_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait('I am no longer a kid...! Heh, still thanks though.'),
      () =>
        luna.say_and_wait(
          'We are comrades with the same passions and ideals. We should never stop before we accomplish our goals... My bad, that might be a little bit too stressful for you.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * Gifts
   * @param {CharaTalk} emperor Emperor
   */
  async office_gift_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          'Gifts...? i shalt taketh whatever i wanteth by myself',
        ),
      () => emperor.say_and_wait('Sacrifices into the sacrifice pile.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async office_cook_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          "It's always joyful to cook delicacies, especially with you.",
        ),
      () =>
        luna.say_and_wait(
          'Finally, I can focus ...after finishing all of the student council duties in the morning.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async office_cook_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Tis a studyeth to maketh delicacies.'),
      () => emperor.say_and_wait('For thee. Finish it with grace.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async office_rest_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '...How embarrassing this is. Even the normal hug seems a little bit too intimate.',
        ),
      () => luna.say_and_wait('Ahh... Hmph... '),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async office_rest_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Sleep...sleep...zzz...'),
      () =>
        emperor.say_and_wait(
          'Shouldst thou find tricky problems to solve, wake me up, courtier.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async office_game_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Games...？You have always hugged and played with me when I am a kid.',
        ),
      () =>
        luna.say_and_wait("It's fine to play as long as we don't waste time."),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async office_game_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait("It's adequate for leisurement."),
      () => emperor.say_and_wait('Thee not did prepare for hunteth?'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async s_a_tree_hollow_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'A sprouted will... Shall it be the passion or your biological motif? An unseen force drives me forward.',
        ),
      () =>
        luna.say_and_wait(
          `If there is a utopia for umas, three godnesses, I shall bring every ${luna.uma_sex_title}to there.`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async s_a_tree_hollow_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('I catch the secret sighs of the forsaken.'),
      () => emperor.say_and_wait('Fiat justitia, et pereat mundus.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async s_a_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Time flies. It does feel like that we are just playing at the Symboli studs, just like when we were young.',
        ),
      () =>
        luna.say_and_wait(
          "It's been a long time since we separated. From now on, it's best for us to stick together.",
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async s_a_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          "Has't thee been cleaning the palace at which hour Im asleep?",
        ),
      () =>
        emperor.say_and_wait(
          'I shalt giveth thee the honour as longeth as thee serve me, courtier.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async school_rooftop_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Hehehe... if the flavour is not mild, it will definitely run wild... Hahah!',
        ),
      () =>
        luna.say_and_wait(
          "I don't really necessarily need a wonderful taste. But I will devour more if it is more appetising.",
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async school_rooftop_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('As longeth as ts fills mine own stomach.'),
      () => emperor.say_and_wait('I require not much about the food.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async o_r_fishing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Be patient, and lure the fish silently. Theres definitely lots to talk about regarding fishing.',
        ),
      () =>
        luna.say_and_wait(
          "Please just photograph and release the fish when you catch one. It's school property.",
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async o_r_fishing_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          "Isn't racing on the field considered to be fishing?",
        ),
      () => emperor.say_and_wait("Liveth of the wat'rs..."),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async o_r_walking_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'It reminds me of my childhood. You seem to be always accompanying me.',
        ),
      () =>
        luna.say_and_wait(
          "Now, we can march forward together, shoulder-by-shoulder. Haven't I been much taller?",
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async o_r_walking_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          "'Tis the duty of the Emperor to inspect his lands.",
        ),
      () =>
        emperor.say_and_wait(
          'What is quarreling ahead? courior, wend checketh up ahead.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna Symboli-Rudolf/Luna
   * @param {CharaTalk} you The player
   */
  async o_s_arcade_luna(luna, you) {
    const buffer = [
      () => luna.say_and_wait('Mm... Another round, please!'),
      () =>
        luna.say_and_wait(
          `This... and that! ${you.actual_name}, Lets round robin around all the amusements!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async o_s_arcade_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Bedlam of clamour.'),
      () =>
        emperor.say_and_wait(
          'Exsufflicate games only endues thee exsufflicate humour. The only way to receiveth joy is to square on the fields.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async o_s_drawing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Ah, you like that... How about we just buy the entirety of the ryokan hotel?',
        ),
      () => luna.say_and_wait('Hope everyone who draws get a good luck.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async o_s_drawing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Probabilities.'),
      () =>
        emperor.say_and_wait(
          'wherefore shalt thee useth such method just to receiveth to the ryokan hotels?',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async o_s_ktv_luna(luna) {
    const buffer = [
      () => luna.say_and_wait("Let's rest for a moment for now."),
      () =>
        luna.say_and_wait(
          'How wonderful will it be if we can just spit our worries out just by singing?',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async o_s_ktv_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait("It's a different amusement than opera."),
      () =>
        emperor.say_and_wait(
          "It's a most wondrous joy to hark to quite quaint music.",
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async o_s_movie_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Good movie. The plot catches your eye. I would have fallen asleep otherwise.',
        ),
      () =>
        luna.say_and_wait(
          'How surreal is modern movie. I almost sweat during tense moments!',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async o_s_movie_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          'Prithee, this gathering doth vex my spirit most terribly.',
        ),
      () => emperor.say_and_wait('From this hour, neer again.'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna Symboli-Rudolf/Luna
   * @param {CharaTalk} you The player
   * @param {number} dice the result of pray, 0-1, smaller is better
   */
  async o_c_pray_luna(luna, you, dice) {
    await era.printAndWait(
      `The shrine is no much special for ${you.name} and ${luna.name}.`,
    );
    await era.printAndWait(
      `${you.name} is far away from the age of praying nonsense, while ${luna.name} always wins by own strength.`,
    );
    await era.printAndWait([
      'But ',
      you.get_colored_name(),
      ' the good thing is,',
      luna.get_colored_name(),
      'is always interested towards unknown as before.',
    ]);
    await era.printAndWait(
      `A prayer for luck every few times in a year is enough for ${luna.sex} to keep a reasonant amount of interest around.`,
    );
    await era.printAndWait(
      `${you.name} standing right next to ${luna.name}, Waiting for ${luna.sex} to draw the pin symbolizing luck.`,
    );
    era.println();
    if (dice < 0.5) {
      await luna.say_and_wait('Looks good on this.');
      await era.printAndWait([
        luna.get_colored_name(),
        ' Shows the pin happily towards ',
        you.get_colored_name(),
        ', then hanging the pin on a tree.',
      ]);
      await era.printAndWait(
        `${you.name} suddently wanted to do a draw yourself.`,
      );
      await era.printAndWait(
        `As long as ${luna.name} is glad, it adds many hopes to your unfinished journey.`,
      );
      await era.printAndWait(
        `Whatever kind of benefits... Please... three godnesses, Please bless ${luna.name}！`,
      );
    } else {
      await luna.say_and_wait(
        'We might face problems midway through our journeys.',
      );
      await era.printAndWait([
        luna.get_colored_name(),
        ' does not show ',
        you.get_colored_name(),
        ' What does it show on the pin, but just keeping it cautiously.',
      ]);
      await era.printAndWait([you.get_colored_name(), ' mood went dark']);
      await era.printAndWait([you.get_colored_name(), ' knows.']);
      await era.printAndWait(
        "If you don't see how twisted the paths of the future are, bear the punishment from the goddesses...",
      );
      await era.printAndWait("It doesn't feel comfortable.");
    }
  },
  /**
   * @param {CharaTalk} emperor Emperor
   * @param {CharaTalk} you The player
   * @param {number} dice the result of pray, 0-1, smaller is better
   */
  async o_c_pray_emperor(emperor, you, dice) {
    await era.printAndWait(
      `The shrine is no much special for ${you.name} and ${emperor.name} .`,
    );
    await era.printAndWait(
      `${you.name} is far away from the age of praying nonsense, while ${emperor.name} always wins by own strength.`,
    );
    await era.printAndWait([
      'But ',
      you.get_colored_name(),
      'Surprisingly,',
      emperor.get_colored_name(),
      ' is always curious towards the unknown, just like Luna.',
    ]);
    await era.printAndWait(
      `A prayer for luck every few times in a year is enough for ${emperor.sex} to keep a reasonant amount of interest around.`,
    );
    await era.printAndWait(
      `${you.name} standing right next to ${emperor.name}, Waiting for ${emperor.sex} to draw the pin symbolizing luck.`,
    );
    era.println();
    if (dice < 0.5) {
      await emperor.say_and_wait(
        'As long as mine power is palmy, the goddesses shall bend to me.',
      );
      await era.printAndWait([
        emperor.get_colored_name(),
        ' throws the pin backwards reasonlessly',
        you.get_colored_name(),
        ' hurried up to catch the pin, and hung it on a tree.',
      ]);
      await era.printAndWait(
        `${you.name} suddently wanted to do a draw yourself.`,
      );
      await era.printAndWait(
        `As long it enlightens ${emperor.name} , it adds many hopes to your unfinished journey.`,
      );
      await era.printAndWait(
        `Whatever kind of benefits... Please... three godnesses, Please bless ${emperor.name}！`,
      );
    } else {
      await emperor.say_and_wait('How interesting! I liketh challenges.');
      await era.printAndWait([
        emperor.get_colored_name(),
        ' stares the pin with interest, and laughed.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        " doesn't necessarily L O O K S G O O D",
      ]);
      await era.printAndWait([you.get_colored_name(), ' K N O W S']);
      await era.printAndWait(
        "If you don't see how twisted the paths of the future are, bear the punishment from the goddesses...",
      );
      await era.printAndWait("It doesn't feel C O M F O R T A B L E.");
    }
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async o_s_restaurant_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          `Schoolmates of mine are recently inviting me to eat ice cream together... Heh,I need to arrange time to go eat together with ${luna.sex}.`,
        ),
      () =>
        luna.say_and_wait(
          'A lot of umas have a good appetite recently... I must calculate to ensure there is enough food in stock.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async o_s_restaurant_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait(
          'Most wondrous joy for a conquest is to gust the food hath raised from the soil.',
        ),
      () => emperor.say_and_wait('Serve the feast and the wine!'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async o_s_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'Tell me if you have nightmares. I will keep an eye on you',
        ),
      () =>
        luna.say_and_wait(
          "When you feel depressed, watch the leaves [fall]... so your mood doesn't [fall]... Hehe, what a masterpiece.",
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async o_s_dating_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('Entertain me, thee courtier!'),
      () =>
        emperor.say_and_wait(
          "...It would not serve me if 'tis true that thee can't even tiptoe for me.",
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna Symboli-Rudolf/Luna */
  async o_s_shopping_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          'The shops are so modern nowadays? No wonder the kids are attracted.',
        ),
      () => luna.say_and_wait("It's bustling over there. Should we go see?"),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor Emperor */
  async o_s_shopping_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('I doth liketh the city with joy.'),
      () => emperor.say_and_wait('Valorous to seeth evryone joyous.'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} chara17 Symboli Rudolf/Luna/Emperor
   * @param {CharaTalk} you The player
   * @param {boolean} is_good_end if is in the good end (Symboli Rudolf form)
   * @param {boolean} i_emperor if is in Emperor form
   */
  async load_talk(chara17, you, is_good_end, i_emperor) {
    if (is_good_end) {
      await chara17.say_and_wait(
        'May the solis and luna accompanies you forever...',
      );
      await chara17.say_and_wait(
        "...but please don't ever forget about the Emperor and Luna.",
      );
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' turns over with body trembling',
      ]);
      await chara17.say_and_wait(
        'Be...safe, we will meet sooner(sobs) or later.',
      );
    } else if (i_emperor) {
      await chara17.say_and_wait(
        'Stand ho paying meaningless efforts, courtier.',
      );
    } else if (era.get('love:17') >= 75) {
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' Lips open, but not an inch of sound could be made.',
      ]);
      await chara17.say_and_wait('——！');
      await chara17.say_and_wait("——Don't go...");
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' Sobbing, but ',
        you.get_colored_name(),
        ' is long gone...',
      ]);
      await chara17.say_and_wait(
        "BUT YOU HAVE PROMISED ME... You... You won't go... go GO no matter what——",
      );
    }
  },
};
