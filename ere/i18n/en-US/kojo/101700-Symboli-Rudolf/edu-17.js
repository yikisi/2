/**
 * Words from translator: Huge respect to 露娜俘虏. THIS IS SO BEAUTIFUL. And, if you read this, play Dvorak's 9th Symphony on the ending.
 * @file Symboli Rudolf - Edu
 * @author 露娜俘虏
 * @author Katze (translator)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ts_add: (() => {
    const title = 'Extra Trainings';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `After the training ends, ${chara17.name} still seems energetic.`,
      );
      await era.printAndWait(
        `${chara17.sex} casts the sight over distant horizons, where the last rays of sunlight is slowly fading.`,
      );
      await era.printAndWait(
        "It's getting darker. But I have not yet reached my limits. I can do more than this.",
      );
      await era.printAndWait(`${you.name} knows ${chara17.sex}.`);
      era.printButton("「Keep running n' catch that sense of traning!」", 1);
      era.printButton(
        '「Lets finish our training for the day. We have more important stuff to deal with.」',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        if (i_emperor) {
          await chara17.say_and_wait(
            "The endeth of the conquest? how int'resting.",
          );
        } else {
          await chara17.say_and_wait('Yep... I understand.');
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('A...sleep?');
        } else {
          await chara17.say_and_wait(
            'Thanks for the reminder. I understand the purpose for doing so.',
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'Winning the Race!';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, you, i_emperor) => {
      if (i_emperor) {
        await chara17.say_and_wait(
          `${chara17.couple_title}isn't coequal a w'rthy foe towards me.  How meaningless.`,
        );
      } else {
        await chara17.say_and_wait(
          '...If you hope to see such ending, I have no words against it.',
        );
      }
      era.printButton('「Last resort.」', 1);
      era.printButton("「You could've done better.」", 2);
      if ((await era.input()) === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('Hmph.');
        } else {
          await chara17.say_and_wait('I understand. (sighs)');
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait(
            "Hmph. Thee seemeth oddly spiritful, mine own courti'r.",
          );
        } else {
          await chara17.say_and_wait(
            "I don't have such high of an expectation.",
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),
  faith_collapse: (() => {
    const title = 'Collapsing Belief';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `${you.name} couldn't even pop out a word after this.`,
      );
      await era.printAndWait('Lost.');
      await era.printAndWait(
        `${you.name} shakingly grabs the handle near the platform, trying as much as you could not fainting over.`,
      );
      await era.printAndWait(
        'People around you cheers and congradulates you for Rudolf to achieve in the top five.',
      );
      await era.printAndWait(
        `${you.name} shows no expression and leaves the stand immediately.`,
      );
      await era.printAndWait(
        `${you.name} dashes towards the changing room, knowing that all umas would've returned to the changing room after the race ends.`,
      );
      await era.printAndWait(
        `${you.name} arrived before the doors of the changing room of ${luna.name}, but found out that you can't open the door no matter what.`,
      );
      era.printButton('「Luna?!」', 1);
      era.printButton('「My Lord!!!」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `${you.name} hear sounds like vomiting, you feel a deep impact within your minds.`,
      );
      await luna.say_and_wait(
        'Its fine............I just need a bit of time to............',
      );
      await luna.say_and_wait('I..........................................');
      await era.printAndWait(
        `${
          you.name
        } bangs the door, but only hear sounds of ${luna.teen_sex_title} vomiting and crying.`,
      );
      await era.printAndWait(
        `${you.name} sat on the floor helplessly... Knowing you have betrayed luna's will.`,
      );
      await era.printAndWait(`${you.name} couldn't help ${luna.sex} at all.`);
      await era.printAndWait(`You lost... perhaps... in this race.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_transform: (() => {
    const title = 'Diurnal Cycle';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} emperor Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if transform to Emperor form
     */
    const f = async (luna, emperor, you, i_emperor) => {
      const buffer = [];
      if (i_emperor) {
        buffer.push(
          () => luna.say_and_wait('I will bear it for our common ideal.'),
          () =>
            luna.say_and_wait(
              "...Please hug me... I don't want to feel all of that all by myself.",
            ),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() =>
            luna.say_and_wait(`${you.actual_name}, do I must do this?`),
          );
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() =>
            luna.say_and_wait(
              '................................................who am I?',
            ),
          );
        }
      } else {
        buffer.push(
          () => emperor.say_and_wait('I shalt catch but a wink...?'),
          () =>
            emperor.say_and_wait(
              "As rubies are n'er wrought without the flie, nor men made noble but by grief's assay.",
            ),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() => emperor.say_and_wait('Waking up.'));
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() =>
            emperor.say_and_wait('Marcheth towards an utopia!'),
          );
        }
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'Advancing';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `After discussing with the Symboli family, ${you.name} submitted the entry for Luna's maiden race.`,
      );
      await era.printAndWait('At the exact date of the Japan cup.');
      await era.printAndWait(
        `After knowing your decision, Luna frowned slightly, but did not oppose your decision at last.`,
      );
      await era.printAndWait(
        `${you.name} knows that this is a malice for Luna, but you had no choice.`,
      );
      await era.printAndWait(
        'Japan needs to bolster its spirits, no matter now or in the future.',
      );
      await era.printAndWait(
        `Therefore, after ${you.name} observed a race that isn't even worthy to be entitled as an "competition", ${you.name} finally relaxed.`,
      );
      await era.printAndWait(
        `In fact, when ${you.name} finally realised the situation, your hands have already clenched tightly.`,
      );
      await you.say_and_wait(
        "Holy f*ck, what in the god's name am I doing?",
        true,
      );
      await era.printAndWait(
        `${you.name} 's vision shaked, being shocked by the unexpected reaction of yourself.`,
      );
      await era.printAndWait(`Not only that, ${you.name} feels flabbergasted`);
      await era.printAndWait(`How... How powerful and mighty is the Emperor!`);
      await era.printAndWait(
        `${you.name} can't describe your feeling in words, but you know one thing only:`,
      );
      await era.printAndWait(`'How despicable "me"'`);
      await era.printAndWait(
        `How do you explain the smile and joy of ${you.name} after listening to those bunch of 'gaijin' screeching otherwise?`,
      );
      era.printButton('（To let the whole world understand one thing--）', 1);
      era.printButton('（World! Rejoice!）', 2);
      await era.input();
      await era.printAndWait(`${you.name} guffawed.`);
      era.printButton(
        `「Luna shall engulf the world! ${luna.sex} shall engulf the world!」`,
        1,
      );
      era.printButton(
        `「The Emperor shall engulf the world! ${luna.sex} shall engulf the world!」`,
        2,
      );
      await era.input();
      await era.printAndWait('Everyone was mad that day.');
      await era.printAndWait(
        `In that day, Luna did not celebrate at all with${you.name}, only drowning in your arm.`,
      );
      await era.printAndWait(
        `In that day, Japanese umas lost the Japan cup once more.`,
      );
      await era.printAndWait(
        "It's fine... It's fine. Everything will evolve better eventually with Luna.",
      );
      await era.printAndWait(
        `${you.name} comforted Luna, erasing her worries and distress.`,
      );
    };
    f.title = title;
    return f;
  })(),
  saud_cup_win: (() => {
    const title = 'Hot Knife Through Butter';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(`${chara17.sex} won the race just as planned.`);
      await era.printAndWait(
        `${you.name} saw your fellows with the corner of your eye.`,
      );
      await era.printAndWait(
        "'Still a moment before their umas return, and I'll need to fake myself being relaxed.'",
      );
      await era.printAndWait(
        `Hence ${you.name} you don't mind the envy and jealous of other trainer.`,
      );
      await era.printAndWait(
        `${you.name} is the trainer of Symboli Rudolf. ${chara17.sex} wins. So do ${you.name}.`,
      );
      await era.printAndWait('Though');
      era.printButton(i_emperor ? '「Glorious...!」' : '「Good work...!」', 1);
      await era.input();
      await era.printAndWait(
        `After  ${chara17.name} returns, ${you.name} wanted to greet ${chara17.name}, but saw another uma approaching ${chara17.sex}.`,
      );
      await era.printAndWait(`${you.name}'s nerve spiked. Its Maruzensky.`);
      await era.printAndWait(`But if you trigger ${chara17.name}——`);
      await era.printAndWait(
        'But out of all odds, the two just discussed normally.',
      );
      await era.printAndWait(
        `${chara17.name} is still joyful after returning.`,
      );
      await era.printAndWait(
        `${you.name} knows, the smile of ${chara17.name} is not because of the victory, but the dialogue with Maruzensky.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          "Stout monst'rs liketh yond art waiting f'r me to hunteth——",
        );
      } else {
        await chara17.say_and_wait(
          'Its meaningful for me to get the appreciation from my seniors, especially Maruzensky.',
        );
      }
      await era.printAndWait(
        `${you.name} knows, among all the umas, Maruzensky is well-known because of her overwhelming strength and speed.`,
      );
      await era.printAndWait(
        `But, as the trainer of ${chara17.name}, ${you.name} knows one thing only.`,
      );
      era.printButton('「You will win.」', 1);
      era.printButton('「The might of the Emperor will be proven.」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `Surprised by the words of ${you.name}, ${chara17.name} beamed.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          "Valorous w'rd. We shalt returneth in triumph.",
        );
      } else {
        await chara17.say_and_wait(
          "Perhaps that's my instinct from the stimuli? I still feel the tremor even though I don't run anymore.",
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Hopes & Dreams of the New Year';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        "It's a new year since you have become comrades with Rudolf.",
      );
      await era.printAndWait(
        `Unstopping tremors and fears have made ${you.name} toss and turn every night.`,
      );
      await era.printAndWait(
        `But the cold breeze of the new year have encouraged ${you.name}.`,
      );
      await era.printAndWait(
        `Not even mentioning that Luna is wearing a set of fine clothes, scuttling towards ${you.name}. `,
      );
      await era.printAndWait(
        `${luna.sex} threw herself into you, as if a ship sailing into a haven.`,
      );
      await luna.say_and_wait(
        'I might need "the Emperor" to do the work for me if this continues...',
      );
      await era.printAndWait(
        `With a light sigh, ${you.name} gently caressed ${luna.sex} hair and wiped away the fine snow.`,
      );
      await era.printAndWait(
        `It seems that, in order to spend some time alone with ${you.name} as soon as possible, Luna didn't even bother to bring an umbrella on her way here.`,
      );
      await era.printAndWait(
        `${you.name} kisses Luna on the forehead in return, and ${luna.sex} leans against ${you.name}'s shoulder.`,
      );
      await era.printAndWait(
        'By the window, I lingered, watching snowflakes flutter like whispers from the heavens.',
      );
      await luna.say_and_wait(
        "At last, this year we'll pursue the Triple Crown. Only by winning it can I finally...",
      );
      await era.printAndWait(
        `As ${you.name} gazed into Luna’s eyes painted in seriousness, ${you.name} inhaled deeply and reached out to hold ${luna.sex}’s hand.`,
      );
      await era.printAndWait(
        `Representing that no matter what, ${you.name} will always stay along.`,
      );
      await era.printAndWait(
        `Luna's eyes brimmed with joy and quiet hopes for what was to come.`,
      );
      era.printButton(
        '「May you always remain clear-minded, upright, and virtuous, choosing the path that is best for you.」（Wit+40）',
        1,
      );
      era.printButton(
        '「May you remain whole and healthy, always valuing the harmony of both body and soul.」（Stamina+40）',
        2,
      );
      era.printButton(
        '「May the Emperor command the vast array of techniques, and wield every skill with wisdom and precision.」（Pt.+80）',
        3,
      );
      const ret = await era.input();
      await luna.say_and_wait(
        'All such wonderful and heartfelt wishes... I suppose I have one of my own as well.',
      );
      await era.printAndWait(
        `Luna traced ${you.name}’s face, and ${you.name} felt the heat of ${luna.sex} presence and the yearning hidden deep within ${luna.sex} soul.`,
      );
      await luna.say_and_wait(
        'My only wish is that you live a long, fulfilling life... so you’ll always be here with me.',
      );
      await era.printAndWait(`${you.name} Laughs heartily.`);
      await luna.say_and_wait('And I hope I can embrace more of those jokes.');
      await era.printAndWait(
        `${you.name}: Mood Down. This did not contribute to your growth.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = 'A Vow Through Hardship';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, luna, you, i_emperor) => {
      await you.say_and_wait('The first crown.');
      if (i_emperor) {
        await era.printAndWait(
          `The Emperor savored the moment as though experiencing the same joy as ${you.name}, then lifted one finger with a belligerent smile.`,
        );
      } else {
        await era.printAndWait(
          `Luna raised her head and released a long, peaceful breath, savoring the happiness that she and ${you.name} shared.`,
        );
      }
      await era.printAndWait(
        'Full of overwhelming power. Full of undeniable strength.',
      );
      await era.printAndWait(
        'The audience erupted into their most passionate cheers yet, witnessing a scene that seemed to herald the opening of a legend.',
      );
      era.printButton(
        "「Perhaps this dream can really come true... as long as it's the Emperor.」",
        1,
      );
      era.printButton(
        '「Maybe it truly is possible... if it is Luna who does it.」',
        2,
      );
      await era.input();
      await era.printAndWait(
        `Even now, ${you.name} remembered the promise Luna had made on that day.`,
      );
      await luna.say_and_wait(
        `Go and create a world where every ${chara17.uma_sex_title} can find happiness.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ts_47_17: (() => {
    const title = 'Dissonance';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     * @param {PrintedSpan} sats_sho Satsuki Sho (the colored name)
     * @param {PrintedSpan} toky_yus Tokyo Yushun (the colored name)
     */
    const f = async (chara17, you, i_emperor, sats_sho, toky_yus) => {
      await era.printAndWait([
        'With ',
        toky_yus,
        ' just around the corner, the final stage of training has begun.',
      ]);
      await era.printAndWait([
        'As ',
        chara17.get_colored_name(),
        ' tore across the training field, the spectators: no matter the Uma',
        chara17.uma_sex_title,
        ' or the trainers, all erupted in admiration.',
      ]);
      await era.printAndWait(
        `Laps after Laps, ${you.name} saw ${chara17.name} at her best, her face even lighted up with a smile while she ran.`,
      );
      await era.printAndWait(
        `Yet beneath it all, ${you.name} remained deeply troubled.`,
      );
      await era.printAndWait([
        'After ',
        sats_sho,
        ", the burden upon Luna's shoulders, already heavy as a mountain, became even harder to bear.",
      ]);
      await era.printAndWait(
        `Perhaps beneath that tranquil exterior, ${chara17.name} hides a storm yet unseen.`,
      );
      if (i_emperor) {
        era.printButton(
          "「Your Majesty, it would seem thou hast enjoyed thyself to thy heart's content. Pray, spare thyself undue strain and cherish thy royal form.」",
          1,
        );
      } else {
        era.printButton("「That's enough training for today.」", 1);
      }
      await era.input();
      await era.printAndWait(`As the lap concluded, ${you.name} called out.`);
      await era.printAndWait(
        `Upon hearing ${you.name}, ${chara17.name} came to a halt.`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `After a brief while, the Emperor, still catching her breath, came forth unto ${you.name}. Yet, by some unseen cause, the joy that once adorned her countenance had given way to wrath.`,
        );
        await chara17.say_and_wait(
          'My courtier, speak forth thy cause for breaking the rhythm I had so masterfully attained.',
        );
        era.printButton(
          '「Your Majesty, it seemeth thy spirit hath soared beyond measure.」',
          1,
        );
        era.printButton(
          '「The nearer thou comest to the hunt, the more must thou master thy passion and preserve thy calm...」',
          2,
        );
        await era.input();
        await era.printAndWait(
          `At no point did ${you.name} believe the Emperor incapable of bearing the rigors of training.`,
        );
        await era.printAndWait(
          `Be it as ${chara17.sex}'s trainer, or as the one who guided ${chara17.sex} toward becoming the Emperor...`,
        );
        await era.printAndWait(
          `Through it all, ${you.name} feared not the training itself, but the beast within Luna's soul that might one day bring her down.`,
        );
        await era.printAndWait(
          `"${you.name} lowered their gaze before the Emperor's knowing smile. The sheer weight of her presence, vast as a mountain, sent a chill of sweat down ${you.name}'s back.`,
        );
        await era.printAndWait(
          `After conquering Satsuki Sho, with the Derby now ahead... ${you.name} rather focused on ensuring Luna's health, putting aside ${chara17.name}'s training.`,
        );
        await era.printAndWait(
          `The Emperor regarded ${you.name}, uttered a disdainful huff, and withdrew from the field with unwavering pride.`,
        );
        await era.printAndWait(
          `${you.name}'s hand moved before thought itself, reaching toward ${chara17.sex}; yet ${chara17.sex} was already gone beyond reach.`,
        );
        era.printButton('「Forgive me.」', 1);
        era.printButton('「Rest well.」', 2);
        await era.input();
        await era.printAndWait(
          `${you.name} let out a sigh, then broke into a light run to follow after her.`,
        );
      } else {
        await era.printAndWait(
          `After a brief while, Luna approached ${you.name}, still catching her breath. Yet somehow, the joy that had filled her face moments ago had dimmed.`,
        );
        await chara17.say_and_wait(
          `${you.actual_name}, I feel wonderful. The Japan Derby is almost upon us—I must train even more and grow stronger!`,
        );
        era.printButton(
          '「I understand your feelings, but the nearer the goal draws, the more we must keep our hearts steady.」',
          1,
        );
        era.printButton("「I'm concerned about how you're holding up...」", 2);
        await era.input();
        await era.printAndWait(
          `All along, ${you.name} never doubted Luna's ability to withstand such demanding training.`,
        );
        await era.printAndWait(
          `Whether ${you.name} was the one who trained ${chara17.sex}, or the one who inspired ${chara17.sex} to take the mantle of the Emperor...`,
        );
        await era.printAndWait(
          `Through it all, ${you.name}'s only fear was that Luna would be overcome by the beast dwelling deep within her soul.`,
        );
        await era.printAndWait(
          `Yet since the emotional release during their first meeting, Luna had kept the depths of her heart hidden from ${you.name} for far too long.`,
        );
        await era.printAndWait(
          `Having crossed beyond Satsuki Sho and stood before the Derby, ${you.name} no longer wished merely to know how Luna trained, but what truly lay within her heart.`,
        );
        await era.printAndWait([
          'Luna gazed at ',
          you.get_colored_name(),
          ', pondering for a short while. Eventually, ',
          chara17.sex,
          ' turned to',
          you.get_colored_name(),
          ' with a warm smile.',
        ]);
        await chara17.say_and_wait(
          'Should we fail to surpass even this trial, then the Elysium we cherish shall never become reality.',
        );
        await era.printAndWait(
          `${you.name} held back their words, biting down on their frustration.`,
        );
        await era.printAndWait(
          `Luna moved as if to return to the track, but the worried gaze of ${you.name} made her pause and stop in the end.`,
        );
        era.printButton("「I'm sorry.」", 1);
        era.printButton('「Get some proper rest.」', 2);
        await era.input();
        await era.printAndWait([
          'Luna accepted the towel and water from ',
          you.get_colored_name(),
          ' then softly gave her assent.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  re_double_crowns: (() => {
    const title = 'Unrivaled Might';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, you, i_emperor) => {
      await you.say_and_wait('Second crown it is!');
      await era.printAndWait(
        'That is a step closer to making our dream come true.',
      );
      await era.printAndWait(
        'The world buzzed with admiration, speaking of the tremendous power Symboli Rudolf had unleashed in the Derby.',
      );
      await era.printAndWait('Simply unbelievable!');
      if (i_emperor) {
        await era.printAndWait(
          "E'en as the people revelled in this marvel, the Emperor did likewise, raising two fingers high unto the heavens.",
        );
      } else {
        await era.printAndWait(
          'Sharing in the wonder that filled the crowd, Luna revealed a smile born from the depths of her heart.',
        );
      }
      await era.printAndWait(
        'In the days that followed, the world remained captivated by the overwhelming performance Symboli Rudolf delivered at the Derby.',
      );
      await era.printAndWait(
        `${chara17.sex}'s name was now spoken in the same breath as the greatest ${chara17.uma_sex_title} of history.`,
      );
      await era.printAndWait(
        'Those radiant stars of the past, whose brilliance had eventually fallen into shadow.',
      );
      await era.printAndWait(
        'Yet Symboli Rudolf appeared to be something entirely different.',
      );
      await era.printAndWait(
        `Only ${you.name} knew that the Derby had marked the moment when ${chara17.sex} stepped into something far greater—`,
      );
      await era.printAndWait('The Zone.');
      await era.printAndWait(
        `Even to this day, recalling this moment fills ${you.name} with profound reverence.`,
      );
      await era.printAndWait(
        `And yet, when ${you.name} thought deeper, a profound melancholy quietly took hold.`,
      );
      await era.printAndWait(
        "he legends of old had once stood there too, but time's cruel passage turned even their greatness into echoes of the past.",
      );
      era.printButton(
        '「Now, only Maruzensky remains, of carrying the last faint spark of that once-genuine power.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name} opened ${you.name}'s heart with ${chara17.name}.`,
      );
      await era.printAndWait(
        `Should that essence of honkakuka vanish, even the strongest among ${chara17.uma_sex_title} shall be reduced to mere mortals, leaving behind naught but echoes of what once was.`,
      );
      await era.printAndWait(
        `Such is the fate none may defy. One day, ${chara17.name} too shall...`,
      );
      await era.printAndWait(
        `Perhaps noticing the lament concealed beneath ${you.name}'s joy, ${chara17.name} silently gazed at you.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          "Verily, the road before me shall stretch unto eternity, for my quest shalt ne'er know an ending.",
        );
      } else {
        await chara17.say_and_wait(
          'Our dream... perhaps, at last, I have discovered the answer we have sought.',
        );
      }
      era.printButton('「...」', 1);
      await era.input();
      await era.printAndWait(
        `The meaning behind ${chara17.name}'s words remained unclear to ${you.name}, but she offered no further explanation.`,
      );
      await chara17.say_and_wait('Elysium...');
      era.drawLine();
      await chara17.print_and_wait(
        `After ${you.name} and ${chara17.name} went their separate ways, ${chara17.sex} quietly made her way to the academy courtyard alone.`,
      );
      await chara17.print_and_wait(
        `As she gazed at the statues of the Three Goddesses, reliving the sight of her entry into the Realm, the greatest ${chara17.uma_sex_title} of the generation slowly clenched her fist.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait("N'y shackles ought e'er to exist. Ne'er.");
      } else {
        await chara17.say_and_wait(
          `I swear I shall fulfill the wish that belongs to both ${you.actual_name} and me, even if I must...`,
        );
      }
      era.print([
        chara17.get_colored_name(),
        ' has awakened',
        { color: buff_colors[1], content: ' [THE ZONE]', fontWeight: 'bold' },
        '!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = 'Summer Training Camp';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        'Even though this was supposed to be the time for summer training camp—',
      );
      await era.printAndWait(
        `Watching Luna completely surrounded by ${luna.uma_sex_title}s, ${you.name} felt a bead of cold sweat ran down.`,
      );
      await era.printAndWait(
        "As the highly respected student council president, she personally offered guidance for students' self-directed training,",
      );
      await era.printAndWait(
        'She lent her aid to those unable to surpass their barriers, even stepping in to teach them personally.',
      );
      await era.printAndWait(
        `On top of everything else, ${luna.sex} devoted herself wholeheartedly to her own training.`,
      );
      await era.printAndWait(
        'Even when the day had ended, Luna remained busy, helping the two dormitory leaders coordinate their responsibilities.',
      );
      await luna.say_and_wait(
        'All matters of the academy are my responsibility. There is no need for anyone else to worry.',
      );
      await era.printAndWait(
        `After that, she practiced what she preached, returning to her dorm early and went to rest.`,
      );
      await era.printAndWait(
        `And yet, right at that moment, ${you.name}'s phone began to ring.`,
      );
      await luna.say_and_wait('feel like your eyes have never left me.');
      await era.printAndWait(
        `Reading the message Luna sent, ${you.name} smiled softly.`,
      );
      era.printButton(
        '「The number you are trying to reach is currently unavailable. Please try again later.」',
        1,
      );
      era.printButton(
        '「Because you are simply too captivating to look away from.」',
        2,
      );
      await era.input();
      await luna.say_and_wait(
        'You truly are skilled with your words. However, to preserve the harmony of this academy, I ask that you reserve them only for me, not the others.',
      );
      await luna.say_and_wait('Oh, one more thing.');
      await luna.say_and_wait('You really never change, do you?');
      await luna.say_and_wait(
        "You were spouting such honeyed words even in the Symboli studs. It's a miracle you made it out alive.",
      );
      await luna.say_and_wait(
        'Still, I should get some rest first. We have training early tomorrow.',
      );
      await era.printAndWait(
        `As ${you.name} stared at the glowing messages on their phone, sleep slowly overtook before ${you.name} even realized it.`,
      );
      await era.printAndWait(
        `At dawn the next day, ${luna.sex} was already making her way toward training, until ${you.name} stood in her path.`,
      );
      await era.printAndWait(
        `Long before summer training camp began, ${luna.sex} had already thrown herself into countless responsibilities, never allowing her own training to fall behind.`,
      );
      await era.printAndWait(
        `"No matter how strong someone is, fatigue will eventually take its toll." ${you.name} was certain of this.`,
      );
      era.printButton(
        '「Come, let us enjoy a hearty meal and grow better.」（Power+10）',
        1,
      );
      era.printButton(
        '「Maybe try delaying training once in a while.」（Gut+10）',
        2,
      );
      const ret = await era.input();
      await era.printAndWait('Luna was caught off guard.');
      await luna.say_and_wait('Worrying about me?');
      await era.printAndWait(
        `${you.name} nodded. Luna leaned against the window, gazing out toward the ocean and the shore.`,
      );
      await era.printAndWait(
        `The dawn light spilled across ${luna.sex}'s face, leaving ${you.name} unable to read the emotions hidden there.`,
      );
      await luna.say_and_wait(
        'To strive for the sake of others is, and always will be, a noble desire.',
      );
      await luna.say_and_wait(
        'Even so, we must continue striving toward the Kikuka Sho.',
      );
      await luna.say_and_wait(
        "Yet your eyes have spoken the truth already: 'To continue down this path of training is to harm my own body,' is that not what you believe?",
      );
      await luna.say_and_wait(
        'But since the Derby, my resolve has only grown stronger: to fulfill our ideal, we must devote ourselves to efforts beyond what others can imagine.',
      );
      await luna.say_and_wait(
        'Have you been protecting me too much? Am I truly so fragile that I would fall here?',
      );
      era.printButton('「...!」', 1);
      await era.input();
      await era.printAndWait(
        `As Luna saw ${you.name} falter in uncertainty, a realization dawned upon her, and she gently took hold of ${you.name}'s arm.`,
      );
      await luna.say_and_wait(
        'It almost seems as though I was simply venting my feelings onto you...',
      );
      await era.printAndWait(
        `Luna's words carried the shape of an apology, yet ${you.name} knew ${luna.sex} had not surrendered her resolve.`,
      );
      await era.printAndWait(
        `The feelings and convictions had been conveyed clearly, finding their way into ${you.name}'s heart.`,
      );
      await luna.say_and_wait(
        "I won't be going to training today, so you can rest assured.",
      );
      await era.printAndWait(
        `With that, Luna quietly walked away from ${you.name}.`,
      );
      await era.printAndWait(
        `${you.name} could do nothing to keep her from leaving. With a hand pressed against their chest, they remained frozen for a long while before finally walking away from the silent corridor.`,
      );
      await era.printAndWait(
        `The entire day passed, and ${you.name} never saw Luna even once.`,
      );
      await era.printAndWait(
        `That night, ${you.name} reached for their phone and sent Luna a message.`,
      );
      era.printButton('「I will always be there for you.」', 1);
      era.printButton('「Amo te, Luna.」', 2);
      await era.input();
      await era.printAndWait(
        'Though Luna had seen the message, the silence that followed stretched on without an answer.',
      );
      await era.printAndWait(
        `${you.name} remained awake, desperately waiting, but the entire night passed without a single message from Luna.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  re_triple_crowns: (() => {
    const title = 'The World, Rejoicing from the Triple Crown Achieved';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} emperor Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, emperor, you, i_emperor) => {
      await era.printAndWait(
        'It was as though the world itself cried out in triumph, roaring with endless applause.',
      );
      await era.printAndWait(
        `Once more, an ${chara17.uma_sex_title} has etched their name into this glorious achievement!`,
      );
      await era.printAndWait(
        'Right then, the marching band began playing a renowned piece, one that fit the moment flawlessly.',
      );
      await era.printAndWait('【THE EMPEROR】', { color: emperor.color });
      await era.printAndWait(
        `Tears gathered in ${you.name}'s eyes. They placed a hand on their waist and quietly lowered their head.`,
      );
      await era.printAndWait(
        `${you.name} knew that the promise they shared, and the dream they chased, were still far from complete.`,
      );
      await era.printAndWait(
        'But let me have this moment... Please, just this one moment...',
      );
      await era.printAndWait(
        `Hidden away from the world, ${you.name} bowed and finally let their tears flow freely.`,
      );
      era.printButton('「Congratulations...」', 1);
      era.printButton(
        '「The greatest achievement... The world has ever seen...」',
        2,
      );
      await era.input();
      await era.printAndWait(
        `${you.name}'s heart overflowed with pride for ${chara17.name}!`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `Verily, as though their very souls were entwined in a single accord, the Emperor raised three fingers unto the heavens.`,
        );
      } else {
        await era.printAndWait(
          `Sharing the same unspoken emotion as ${you.name}, Luna's eyes filled with tears of happiness.`,
        );
      }
      await era.printAndWait(
        `Long afterward, ${chara17.name}, still breathing heavily, remained on the track.`,
      );
      await era.printAndWait(
        `Everyone assumed she merely wished to savor this moment of glory for a little while longer.`,
      );
      await era.printAndWait(
        `However, hidden beneath ${chara17.name}'s boundless will to fight, ${you.name} saw the truth: ${chara17.sex}'s steps were beginning to tremble.`,
      );
      await era.printAndWait(
        `${you.name} clenched the fists, feeling a fear colder than anything ever known surge through their entire body.`,
      );
      era.printButton("「Don't tell me...」", 1);
      era.printButton("「She's injured...」", 2);
      await era.input();
      era.drawLine();
      await chara17.print_and_wait(
        `That evening, ${chara17.name} stood alone beneath the statues of the Three Goddesses in the academy courtyard.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          'However mighty the cradle of confinement thou hast wrought, no matter how unbreakable its walls may seem...',
        );
      } else {
        await chara17.say_and_wait(
          'Only a little further... And I would have stepped within...',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  we_47_41: (() => {
    const title = 'Downturn';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `Beneath the tranquil moonlit sky, ${you.name} paced the hallway outside, heart filled with unease.`,
      );
      await era.printAndWait(
        `Only after a long wait did ${you.name} finally hear a nurse call their name.`,
      );
      await era.printAndWait(
        `With the heart pounding, ${you.name} rushed inside and found Luna asleep on the bed.`,
      );
      await era.printAndWait(
        `Seeing that ${luna.sex} was pale but breathing steadily, ${you.name} finally let out a sigh of relief.`,
      );
      await era.printAndWait(
        "Following the Kikuka Sho, Luna was immediately taken to the Symboli stud's private hospital.",
      );
      await era.printAndWait(
        'Following a thorough examination, the doctors delivered their conclusion: Luna was suffering from exhaustion.',
      );
      await era.printAndWait(
        `Though her body was exhausted, Luna could still reach the Japan Cup—provided she gave herself the rest she needed.`,
      );
      era.printButton('「The Japan Cup, huh...」', 1);
      await era.input();
      await era.printAndWait(
        `Knowing Luna needed time to recover, ${you.name} made sure she was alright before quietly leaving the room.`,
      );
      await era.printAndWait(
        `As ${you.name} gazed into the dark night outside, an unbearable sense of worry weighed upon them.`,
      );
      await era.printAndWait(
        `The Japan Cup—the ultimate dream of Japan's ${luna.uma_sex_title}... The Magnificat fought on their own ground, yet the glory has repeatedly been taken away by overseas elites.`,
      );
      await era.printAndWait(
        `For the sake of Luna and ${you.name}'s dream—to create a world where every ${luna.uma_sex_title} may live in happiness.`,
      );
      await era.printAndWait(
        'The Japan Cup stands as the trial Luna must overcome on her journey.',
      );
      await era.printAndWait(
        `${you.name} looked back toward the door, knowing Luna was resting just beyond it.`,
      );
      await era.printAndWait(
        `A sigh escaped ${you.name}. The moment they pictured ${luna.sex}'s pale face, the resolve within their heart began to crumble.`,
      );
      await era.printAndWait(
        `An ${luna.uma_sex_title} in full stride is a vision of unparalleled beauty, yet beneath that beauty lingers a danger as fierce as any battlefield of steel and blood.`,
      );
      await era.printAndWait(
        `The slightest lapse in focus, even the smallest error, could bring irreversible consequences for an ${luna.uma_sex_title}.`,
      );
      await era.printAndWait(
        `Luna is still young. There will be another chance someday... it need not be this moment.`,
      );
      await era.printAndWait(
        `${you.name} tried to reassure ${you.name}'s self, yet they knew the hopes of the entire nation placed upon Luna—upon Symboli Rudolf—would not permit her to 'run away at the crucial moment.'`,
      );
      await era.printAndWait(
        'Nor would Luna ever willingly surrender at this point.',
      );
      await era.printAndWait(
        `${you.name} grasped at the hair in distress, agonizing over every possibility until the weight of exhaustion finally dragged ${you.name} into sleep.`,
      );
      era.printButton(
        '「Perhaps I should speak with Luna again tomorrow...」',
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name} was completely worn out as well.`);
      await era.printAndWait(
        `Yet when ${you.name} awoke the following morning, discovered that someone had placed a blanket over.`,
      );
      await era.printAndWait(
        `${you.name} snapped their gaze toward the nearby door. It stood ajar, and Luna—the one who should have been resting inside—had disappeared.`,
      );
      era.printButton("「It can't be?!」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name} finally realized that Luna had answered the doubts—not with words, but with her actions and unwavering resolve.`,
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name} opened the student council room door and was met with a scene of bustling activity—others stood before Luna, delivering reports with countless documents in their hands.`,
      );
      await era.printAndWait(
        `Luna turned the gaze to ${you.name}, her lips curving into a subtle smile.`,
      );
      await luna.say_and_wait('Trainer, is something wrong?');
      await era.printAndWait(
        `Panting heavily, ${you.name} found the entire room watching, leaving them no choice but to offer an awkward smile.`,
      );
      era.printButton('「You left something behind...」', 1);
      era.printButton('「You really should take better...」', 2);
      await era.input();
      await era.printAndWait(
        `Halfway through the sentence, ${you.name} suddenly saw it—the silent plea dwelling within Luna's violet gaze.`,
      );
      await luna.say_and_wait("I'm fine...", true);
      await era.printAndWait(
        `${you.name} understood the words spoken only through ${luna.sex}'s lips. They had never been able to defy her will... not from childhood until now...`,
      );
      era.printButton("「No... it's nothing serious.」", 1);
      era.printButton('「My bad...」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} walked away from the student council like a lost soul. Deep down, ${you.name} knew this academy could not stand without Luna.`,
      );
      await era.printAndWait(
        'Luna understood as well: Japan could not lose Symboli Rudolf now, not at this crucial moment.',
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = 'Unrivaled';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        "Unlike the Japan Cup, the Arima Kinen—the final Grand Prix of the year, a stage that has long drawn the world's attention—is not decided through ordinary registration.",
      );
      await era.printAndWait(
        `Every year before the race, fans throughout Japan cast their votes, choosing the ${chara17.uma_sex_title}s they believe are worthy of competing.`,
      );
      await era.printAndWait(
        `Put simply, no ${chara17.uma_sex_title} earns a place here without first proving themselves as a truly unforgettable impression.`,
      );
      await era.printAndWait(
        'Yet, despite being chosen by countless fans, Luna still fell short of becoming the most popular contender.',
      );
      await era.printAndWait(
        "The discussions grew louder. The Japan Cup is a stage for Japan's greatest contenders to confront global powerhouses; the Arima Kinen, however, is where the strongest of the nation is decided.",
      );
      era.printButton(
        '（The voices of the crowd cannot measure the true strength held by those who stand on the track.）',
        1,
      );
      era.printButton(
        '（And yet, the will of the people cannot be dismissed entirely, for it reflects a truth of its own.）',
        2,
      );
      await era.input();
      await era.printAndWait(
        `Carrying deep concern, ${you.name} stepped back into ${chara17.name}'s room. There, ${chara17.sex} sat in silence, eyes closed, gathering strength.`,
      );
      await era.printAndWait(
        'That meant some still believed Luna would find herself at a disadvantage against the seasoned veterans standing before her.',
      );
      await era.printAndWait(
        'And that meant there was only one way to silence such doubts—one simple, decisive answer.',
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          'Verily, I shall unveil the full measure of mine imperial power, and let all witness my dominion.',
        );
      } else {
        await chara17.say_and_wait('Only one path lies before us.');
      }
      await era.printAndWait(
        `The young ${chara17.uma_sex_title} slowly opened her eyes and whispered to herself.`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = 'Shrine, Bells and New Year Hopes';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        "New Year's, of all times, is when the work never ends.",
      );
      await era.printAndWait(
        `Amid the winter cold, ${you.name} lets out a breath, and it vanishes into white fog the moment it leaves.`,
      );
      await era.printAndWait(
        `Spring arrives once more, and ${you.name} stands at Luna's back, supporting her work: a bow here, a gift accepted there, words of gratitude everywhere.`,
      );
      await era.printAndWait(
        "New Year's greetings to everyone they know, the annual kickoff meeting, loose ends carried over from the year before...",
      );
      await era.printAndWait(
        `Just shouldering a mere share of Luna's work has left ${you.name} nearly dizzy.`,
      );
      await era.printAndWait(
        `It finally dawns on ${you.name} why Luna once said, a year back, that she'd rather leave all this to the Emperor.`,
      );
      await luna.say_and_wait(
        "Somehow, I sense you're entertaining some impolite thought just now.",
      );
      await era.printAndWait(
        `With the immediate tasks settled, the two of you finally find time for the shrine visit. On the way, Luna suddenly mutters something, apropos of nothing`,
      );
      await era.printAndWait(
        `${you.name} quickly protests otherwise. Unconvinced either way, ${luna.sex} turns to the shrine's bell and drum, and lets both eyes fall shut.`,
      );
      await era.printAndWait(
        `A new year — what would Luna's wish be? ${you.name} keeps the question unspoken; a wish told, as they say, is a wish wasted.`,
      );
      await era.printAndWait(
        `It seems the Rite of Spring is done. Eyes open, head raised, Luna mimics ${you.name} and lets out a breath of her own.`,
      );
      await era.printAndWait(
        `The breath fades into white haze. ${luna.sex} watches the emptiness where it vanished, then turns aside, hands clasped in prayer, and offers ${you.name} an exhausted smile.`,
      );
      await luna.say_and_wait(
        'Who knows — perhaps my own thoughts were just as impolite.',
      );
      await era.printAndWait(
        `${you.name}'s cheeks flush crimson in a heartbeat. The memory of everything that has happened — that sweeping, tumultuous tale — stirs emotions too many to name.`,
      );
      await era.printAndWait(
        `${you.name} turns to Luna and speaks in earnest,`,
      );
      era.printButton(
        '「They say good food is the best medicine — so take care of yourself at the table.」（Stamina+20）',
        1,
      );
      era.printButton(
        '「Omniscient and omnipotent — I hope you become a true Emperor, through and through.」（All Stats+5）',
        2,
      );
      era.printButton(
        "「As for matters of the heart — don't overthink it. Just do what makes you happy.」（Pt.+35）",
        3,
      );
      const ret = await era.input();
      await era.printAndWait(
        `To ${you.name}'s blessing, Luna offers no answer. Instead she leans quietly into your arm, eyes closing in exhaustion.`,
      );
      await era.printAndWait(
        'A brief respite — and in times like these, all the more treasured for it.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_4: (() => {
    const title = 'Onwards, Together';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `A new year — and ${you.name} braves the cold wind, rushing to where Luna is waiting.`,
      );
      await era.printAndWait(
        `But along the way, ${you.name} catches sight of Luna at the front gate, deep in conversation with a rather fresh-faced student.`,
      );
      await era.printAndWait(
        'The student bows over and over, offers Luna her most earnest thanks, and takes her leave.',
      );
      era.printButton('「Senpai Luna.', 1);
      era.printButton('「Onee-san Luna?」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `At ${you.name}'s teasing, a faint blush rises to Luna's cheeks. ${luna.sex} shoots ${you.name} a reproachful look — yet doesn't seem to mind the name at all.`,
      );
      await luna.say_and_wait(
        'That girl only just returned to the academy. Her debut race is right around the corner.',
      );
      await luna.say_and_wait(
        'Returning to the academy this close to the end of January — you must find it odd, no? Most racers choose to debut in autumn or winter.',
      );
      await luna.say_and_wait(
        "Yet before the debut ever comes, we've already entered the academy, studying with those our age... and racing against them as well.",
      );
      await luna.say_and_wait(
        'A happy life, yes. But heartbreak and fatigue find their way in all the same.',
      );
      await era.printAndWait(
        `Away from prying eyes, Luna's arm comes to rest against ${you.name}'s shoulder. ${luna.sex} has always been like this — drawn to your side, almost unconsciously.`,
      );
      await luna.say_and_wait(
        "When the brutal races and training become too much... when you've lost faith in yourself... and then the holidays bring you home to somewhere warm...",
      );
      await luna.say_and_wait(
        '...perhaps the thought of giving up begins to take root.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' listens quietly as Luna unfolds her thoughts. In all honesty, given your standing — the standing of Symboli Rudolf — ',
        you.get_colored_name(),
        ' has no comforting platitudes to give.',
      ]);
      await era.printAndWait(
        `And ${you.name} is well aware that for many ${luna.uma_sex_title}s, news of Luna's entry means one thing: ${luna.couple_title} withdraws on the spot.`,
      );
      era.printButton(
        '「True courage belongs to those who look their struggles in the eye.」',
        1,
      );
      era.printButton('「Maybe what they need is more support from us.」', 2);
      await era.input();
      await era.printAndWait(`Smiling, Luna turns her gaze to ${you.name}.`);
      await luna.say_and_wait(
        "I've wanted to escape as well, you know. Only... it appears the place I run to has always been you.",
      );
      await era.printAndWait(
        `Luna settles into ${you.name}'s arms, tracing a light, teasing jab against ${you.name}'s chest.`,
      );
      if (ret === 1) {
        await luna.say_and_wait(
          `Looks like Senpai Luna has nowhere left to run, hm?`,
        );
      } else {
        await luna.say_and_wait(
          `Looks like Onee-san Luna has nowhere left to run, hm?`,
        );
      }
      await era.printAndWait(`This girl, really...`);
      await era.printAndWait(
        `Cheeks burning, ${you.name} gladly accepts Luna's little act of revenge.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = 'Blood, Sweat, and Devotion';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        'The Spring Tenno Sho is nearly here — a 3,200-meter G1, the longest of its kind, and a grueling trial of any Umamusume’s resilience.',
      );
      await era.printAndWait(
        'There was an era when winning the Tenno Sho meant being crowned the strongest. With the passing years, though, the prestige of each race has ebbed and flowed.',
      );
      await era.printAndWait(
        'Be that as it may, the Spring Tenno Sho is still the cruelest trial there is.',
      );
      await era.printAndWait(
        "Far from easing after her promotion to the senior class, Luna's Student Council burden has deepened — mentoring sessions, press interviews, and no end in sight.",
      );
      await era.printAndWait(
        `Though ${you.name} harbors quiet concerns, Luna insists such duties are the price of the name she carries.`,
      );
      await era.printAndWait(
        `As if she had seen through ${you.name}'s worries, Luna called ${you.name} back at the end of another exhausting day.`,
      );
      await luna.say_and_wait('Are you upset with me?');
      era.printButton('「I’m just worried about you.」', 1);
      era.printButton('「I just hope you’ll let me support you more.」', 2);
      await era.input();
      await era.printAndWait(
        `Luna releases a faint sigh after hearing what ${you.name} has to say.`,
      );
      await luna.say_and_wait('I wish you would trust me a bit more as well.');
      await era.printAndWait(
        `Luna gazes at ${you.name}. Then she lifts a hand and brushes it softly against ${you.name}'s cheek.`,
      );
      await luna.say_and_wait(
        'This is something I must do. If I do not, so many others may lose their way and fall into hardship.',
      );
      await luna.say_and_wait('We still have yet to make our dream a reality.');
      await era.printAndWait(`${you.name} gently holds Luna’s hand.`);
      await era.printAndWait(
        `She spoke of a magnificent ideal — and yet ${you.name} saw that the worry between Luna’s brows remained, impossible to dispel.`,
      );
      await era.printAndWait(
        `She looked just as she had when she and ${you.name} found each other again — breathless beneath a weight no one else could see.`,
      );
      await era.printAndWait(`With a quiet sigh, ${you.name} nods.`);
      await era.printAndWait(
        `—What else could ${you.name} possibly do for Luna? Over the next several days, ${you.name} found themself thinking about it again and again.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'Fall Blau';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        "By April, the fan appreciation festival — the one everyone's been waiting for — will finally begin.",
      );
      await era.printAndWait(
        `${you.name} isn't thrilled about it, but like it or not, a mock match will follow the opening ceremony.`,
      );
      await era.printAndWait(
        `Though only a mock race, it promises to be every bit as fierce as the real thing.`,
      );
      await era.printAndWait(
        `${you.name} knew it all too well — the closer this day came, the harder it grew to keep Luna's condition in check.`,
      );
      await era.printAndWait('Should anything happen...');
      await era.printAndWait(
        `Yet the memory of that incident at the summer training camp kept ${you.name} from asking Luna to back out of the race.`,
      );
      await era.printAndWait(
        `As the mock race drew near, the sight of Luna's fatigue made ${you.name} flinch.`,
      );
      await era.printAndWait(
        'Training alone would have been enough, but add to that her student council duties and the burden of running the entire event — it had simply asked too much of Luna.',
      );
      await era.printAndWait("—Take a break, won't you?");
      await era.printAndWait(
        `Watching Luna stand beside them, ${you.name} felt the words lodge in their throat, and in the end, only a sigh escaped.`,
      );
      await luna.say_and_wait('Everyone has their hopes pinned on this race.');
      await luna.say_and_wait(
        "The cheering, the hopes, the blessings of the fans — they've stirred even the hearts of Senpai's long retired.",
      );
      await era.printAndWait(
        `${you.name} looked toward Luna, who seemed to be turning something over in ${luna.sex} mind. A beat passed before ${luna.sex} finally looked up at ${you.name}.`,
      );
      await luna.say_and_wait('Do you, too, hope for something from me?');
      era.printButton('「Always, no matter when!」', 1);
      era.printButton('「Please, just rest...」', 2);
      await era.input();
      await era.printAndWait(
        `At ${you.name}'s answer, Luna drew a deep breath, then gave ${you.name}'s shoulder a light pat.`,
      );
      await luna.say_and_wait("I'll be right back.");
      await era.printAndWait(
        `${you.name} froze on the spot — then it hit. Luna meant to step onto the track exactly as she was now.`,
      );
      await era.printAndWait(
        `—As it turned out, Luna was fighting an uphill battle. Days of built-up fatigue had likely taken their toll on ${luna.sex} condition.`,
      );
      await era.printAndWait(`The stands erupted into murmurs of disbelief.`);
      await era.printAndWait(
        `How could the Emperor falter like this? The whispers carried on for weeks.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_16: (() => {
    const title = 'All or Nothing';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `With the Spring Tenno Sho only a day away, ${you.name} has discovered a terrible truth: try as she might, Luna can no longer awaken the 【Emperor】.`,
      );
      era.printButton(
        '「All that accumulated exhaustion has finally caught up with her.」',
        1,
      );
      era.printButton('「Stop pushing yourself like this!」', 2);
      await era.input();
      await era.printAndWait(
        `At the Student Council office, ${you.name} looks on, heart heavy, as Luna clutches her forehead.`,
      );
      await era.printAndWait(
        `Hair in disarray, deep shadows under both eyes — ${luna.sex} looks utterly worn.`,
      );
      era.printButton('「This is all my fault...!」', 1);
      era.printButton("「Luna, I'm so sorry... I...」", 2);
      await era.input();
      await luna.say_and_wait('No. None of this is on you.');
      await era.printAndWait(
        `Luna raises her head toward ${you.name}. Hair tangled, dark circles deep beneath both eyes — and tears slipping down each cheek.`,
      );
      await luna.say_and_wait(
        'All this time I rushed forward blindly, chasing a dream — and you got swept up in my selfish crusade...',
      );
      await luna.say_and_wait(
        "And you warned me, again and again, to take care of myself. I'm the one who ruined everything.",
      );
      await luna.say_and_wait(
        "Without the 【Emperor】, there's no way I can live up to everyone's expectations.",
      );
      await luna.say_and_wait(
        "I'm sorry... I'm not a strong Umamusume after all... I'm sorry... I'm so sorry...",
      );
      await era.printAndWait(
        `And there, before ${you.name}, Luna cries her heart out.`,
      );
      await era.printAndWait(
        `In an instant, ${you.name} closes the distance and holds Luna tightly.`,
      );
      await era.printAndWait(
        `${you.name} feels it all — the fragility, the pent-up hurt she has carried alone.`,
      );
      await era.printAndWait(
        `And yet, at the same time, ${you.name}'s chest is full to bursting — with heartache, and with protest — words that demand to be said to Luna.`,
      );
      await era.printAndWait(
        'Sorrow for the tears she sheds; frustration for the worth she refuses to see in herself.',
      );
      await era.printAndWait(
        'A poor showing in a mock race — and what of it? Is she no longer the figure all of them revere?',
      );
      await era.printAndWait('No. Never!!!');
      await era.printAndWait(`${you.name}'s jaw clenches tight.`);
      await era.printAndWait(
        "Luna — who gave everything for Tracen, who poured her heart and soul out for every Umamusume — deserves no one's judgment.",
      );
      await era.printAndWait(
        `${luna.sex} has nothing — nothing — to be ashamed of!`,
      );
      await you.say_and_wait(
        "You've got it wrong, I think — the strength people see in the 【Emperor】 was never what you imagine.",
      );
      await era.printAndWait(
        `When Luna's tears have run dry, ${you.name} begins to console her — and the certainty in those words sends a faint shiver through her heart.`,
      );
      await you.say_and_wait(
        "What makes the Emperor, Symboli Rudolf, so magnetic is this: beneath that symbol's flag, each person can stand tall in their own role.",
      );
      await you.say_and_wait(
        'A light that spurs everyone on to effort and to battle.',
      );
      await you.say_and_wait(
        'To this day, no one has ever been more worthy of the title [Emperor] than you. You lead us. You carry us forward, always!',
      );
      await you.say_and_wait(
        "Somewhere along that long road toward your dream — you became someone else's dream.",
      );
      await you.say_and_wait("So don't you dare belittle yourself, Luna—");
      await era.printAndWait(
        `${you.name} embraces Luna with all their might, willing infinite strength into her; as though trying to fold the one who matters most into the very fabric of their soul.`,
      );
      await era.printAndWait(
        `A long while passes before Luna, in gentle protest, raises a small fist and taps it against ${you.name}'s shoulder.`,
      );
      await era.printAndWait(
        `${you.name} realizes, too late, how hard the hug had been, and quickly lets go — only to find Luna hasn't moved an inch, still nestled against ${you.name}'s chest.`,
      );
      await luna.say_and_wait('Is there still a road ahead for me?');
      era.printButton('「Always.」', 1);
      await era.input();
      await luna.say_and_wait("And you'll be with me... won't you?");
      era.printButton('「Even beyond the point of no return.」', 1);
      era.printButton('「Always.」', 2);
      await era.input();
      await era.printAndWait(
        `From against ${you.name}'s chest comes the sound of Luna's soft, faint laughter.`,
      );
      await you.say_and_wait(
        'You should know it goes beyond me: the council, the students of Tracen — every one of them wants to carry a piece of your burden, however tiny.',
      );
      await you.say_and_wait(
        'All your hard work — it will bear fruit. I promise you that.',
      );
      await luna.say_and_wait("Then all the more reason I can't stop here.");
      await luna.say_and_wait(
        'The future — that is the only place our dream can be found.',
      );
      await era.printAndWait(
        `${you.name} draws a handkerchief from a pocket and gently wipes away Luna's tears. And then ${you.name} sees it — what shines in Luna's eyes now is no longer tears.`,
      );
      await era.printAndWait(
        `It is the burning will — the burning will of all or nothing.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = 'The Lamp Burns Dry (Part I)';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `An ${chara17.uma_sex_title} is born craving victory — at all times, ${chara17.couple_title} long to race toward ever-distant horizons.`,
      );
      await era.printAndWait(
        `And on the grounds with measured length, ${chara17.couple_title} stake everything to be the first across the finish line.`,
      );
      await era.printAndWait(
        'It is as if the world responds to this desire: through the honkakuka, they mature swiftly, and finally take their place on the turf.',
      );
      await era.printAndWait(
        'And yet, with time — barely three or four years, to be precise — that awakened power gradually withers.',
      );
      await era.printAndWait(
        `As if the fuel has burned dry — and from then on, an ${chara17.uma_sex_title} is no different from anyone else.`,
      );
      await era.printAndWait(
        'And that is the reason they race with everything on the line: to leave behind a story of their own, one the world will not forget.',
      );
      await era.printAndWait(
        'Hearts full, they charge ahead — reckless, unhesitating.',
      );
      await era.printAndWait(
        'And among them, the finest few — forged in endless, ferocious competition — step into the 【ZONE】。',
      );
      await era.printAndWait('Power that transcends all.');
      await era.printAndWait('Yet — power at what cost?');
      await era.printAndWait(
        `Ever since Luna gained the ability to enter the Zone, the question has never once left ${you.name}'s mind.`,
      );
      await era.printAndWait(
        'Fate knows no mercy — everything carries a price, marked in secret long ago.',
      );
      await era.printAndWait(
        `Even the mighty Symboli line is not spared — ${chara17.couple_title} too can be consumed by the violence in their blood, and march toward self-destruction.`,
      );
      await era.printAndWait(
        `Luna once described what the Zone feels like: the world falls still, and ${chara17.sex} stands upon a boundless plain of grass.`,
      );
      await era.printAndWait(
        `There, ${chara17.sex} brims with inexhaustible strength — as though a bargain had been struck with her own future.`,
      );
      era.drawLine();
      await era.printAndWait('The Japan Cup.');
      await era.printAndWait(
        `${you.name} watches ${chara17.name} intently before the start. Every adjustment has been made; ${chara17.sex} stands at the height of her form.`,
      );
      await era.printAndWait(
        `Yet against such formidable foes, ${chara17.sex} is certain to call upon the Zone once more. No... ${chara17.sex} must.`,
      );
      await era.printAndWait(
        `A kindled blaze that knows no stopping, not until its fuel is burned to nothing.`,
      );
      era.printButton(`「Be careful out there.」`, 1);
      era.printButton(`「Something about this feels wrong.」`, 2);
      await era.input();
      await era.printAndWait(
        `${chara17.name} meets ${you.name}'s gaze — and only then does ${you.name} notice: those hands are trembling, ever so slightly.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          'Mark well, and let thy heart remember — thus stands an Emperor.',
        );
      } else {
        await chara17.say_and_wait(
          "I understand your fears — yet for our dream, retreat is not a choice I'll make.",
        );
      }
      await era.printAndWait(
        `So saying, the ${chara17.teen_sex_title} turns and heads for the track.`,
      );
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = 'The Lamp Burns Dry (Part II)';
    /**
     * @param {CharaTalk} chara17 Luna/Emperor
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} emperor Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await era.printAndWait(
        `${you.name} watches as ${chara17.name} crosses the line, trembling from head to toe, and hurries off the course while the crowd roars on.`,
      );
      await era.printAndWait(
        `${you.name} breaks into a run, heading straight for the locker room.`,
      );
      await era.printAndWait("There's no mistaking it.");
      await era.printAndWait(
        `${you.name} can barely stay sane. ${chara17.sex} almost break apart from within the Zone was enough — ${you.name} now knows exactly what price was meant.`,
      );
      await era.printAndWait(
        `The Zone... feeds on the future itself! Nothing else could explain a wound this deep in ${chara17.name}. It's as if... as if...`,
      );
      await era.printAndWait('...like honkakuka itself had been wiped away.');
      await era.printAndWait(
        `${you.name} reaches the locker room just as a violent crash rings out. ${you.name} shoves the door open — and finds a gaping hole punched straight through the wall.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          'What sorcery is this, that my own might should flee me mid-race, unbidden?',
        );
      } else {
        await chara17.say_and_wait(
          'Forgive me... My feelings just got the better of me...',
        );
      }
      await era.printAndWait(
        `${you.name} rushes forward. At the sight of ${chara17.name}'s bloodied hand, ${you.name} scrambles at once for the first-aid kit.`,
      );
      await era.printAndWait(
        `At this rate, victory is the least of it — she may not even be able to stand on the track at all.`,
      );
      await chara17.say_and_wait("Even so, I won't stand still.");
      await era.printAndWait(
        `${you.name} looks up, startled — and finds an emotion in ${chara17.name}'s eyes that makes no sense at all.`,
      );
      await era.printAndWait(
        'There was surprise, and refusal to yield — ecstasy tangled together with rage.',
      );
      await era.printAndWait([
        {
          content: '???「The very second the Zone collapsed,',
          color: luna.color,
        },
        {
          content:
            "I caught but a fleeting vision, a phantom born of chance and the slanting light, ere it vanished like a breath upon a winter pane. 'Twas but a moment—a single, trembling heartbeat—yet in that instant, the world did hold its breath, and my soul, like a startled bird, did beat against its cage, yearning to follow what mine eyes had scarce beheld.",
          color: emperor.color,
        },
        { content: '」', color: luna.color },
      ]);
      await era.printAndWait([
        { content: '??「', color: emperor.color },
        { content: 'So close...', color: luna.color },
        {
          content: "A mere hand's breadth, a span of but a finger's length",
          color: emperor.color,
        },
        { content: '（Elysium）', color: luna.color },
        { content: '」', color: emperor.color },
      ]);
      await era.printAndWait(
        `${you.name} finds no words to offer. All that's left is to fight back tears and see to ${chara17.name}'s wounds.`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_ge: (() => {
    const title = 'The Curtain Falls';
    /**
     * @param {CharaTalk} chara17 Symboli Rudolf/Luna/Emperor
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} emperor Emperor
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('Huff... Huff...');
      await chara17.print_and_wait('Ha... a... gh...');
      await chara17.print_and_wait(
        `The world before ${chara17.name}'s eyes trembles; everything in ${chara17.sex}'s sight blurs into a haze.`,
      );
      await chara17.print_and_wait(
        `Vertigo and agony wash in like the sea, wave after wave. The Zone is casting her out — ${chara17.name} realizes it now.`,
      );
      await chara17.print_and_wait(`Omnipotence has left Symboli Rudolf.`);
      era.drawLine();
      await chara17.print_and_wait(
        `With every stride, ${chara17.name} feels it — something deeply, terribly wrong.`,
      );
      await chara17.print_and_wait(
        `Foot down. Foot up. The pain is so violent it twists the face into something unrecognizable.`,
      );
      await chara17.print_and_wait(
        `What was once a breeze ${chara17.sex}'d slice through has become a wall of iron, tearing ${chara17.name} with every stride.`,
      );
      await chara17.print_and_wait(
        `Throughout this race, ${chara17.sex} resembles a storm-battered bird, both wings shattered beneath.`,
      );
      await chara17.print_and_wait(`Omniscient has left Symboli Rudolf.`);
      era.drawLine();
      await chara17.print_and_wait(
        `Consciousness fading, eyelids leaden — ${chara17.name} teeters on the edge of blackout.`,
      );
      await chara17.print_and_wait(
        'The Zone is collapsing. The frozen world around her begins, slowly, to move again.',
      );
      await chara17.print_and_wait(
        `All around, the ${chara17.uma_sex_title}s are running, churning up the green earth, kicking dust into the air, sending torn grass dancing on the wind.`,
      );
      await chara17.print_and_wait(`Omnipresent has left Symboli Rudolf.`);
      era.drawLine();
      await chara17.print_and_wait(
        'Her heart pounds faster and faster — yet not an ounce of strength answers the call.',
      );
      await chara17.print_and_wait(
        'Muscle, tendon, and viscera alike — every fiber of her is being ripped by forces beyond her control.',
      );
      await chara17.print_and_wait(
        'Should she fail to halt at this bend, the moment the Zone vanishes for good—',
      );
      await chara17.print_and_wait('—death awaits.');
      if (i_emperor) {
        await chara17.say_and_wait(
          "The course is not the heavens' road eternal; e'en it must know its end, and cease.",
        );
      } else {
        await chara17.say_and_wait(
          'So this is the truth of the Zone... borrowing against my own awakened strength, all of it, spent in advance...',
        );
      }
      await chara17.print_and_wait(
        'Generation after generation, the brave stepped into the Zone, spending their futures, their dreams, every possibility they had left.',
      );
      await chara17.print_and_wait(
        `And now, the turn has come to ${chara17.name}.`,
      );
      await chara17.print_and_wait(
        'At the edge of her racing life, at the very edge of life itself, what does one do? No one ever showed her the way.',
      );
      await era.printAndWait([
        {
          content: 'Luna',
          color: luna.color,
        },
        '&',
        { content: 'Emperor', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '.', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: 'Luna',
          color: luna.color,
        },
        '&',
        { content: 'Emperor', color: emperor.color },
        '「',
        { content: 'Thy', color: emperor.color },
        { content: 'will be by my side', color: luna.color },
        { content: '（me）', color: emperor.color },
        { content: "by our side... won't you?", color: luna.color },
        '」',
      ]);
      await era.printAndWait(
        `Every ounce of air driven from her chest, watched by a sea of countless spectators, ${chara17.name} accelerates!!!`,
      );
      await era.printAndWait('I shall... MAKE MY OWN PATHWAY!!!');
      await era.printAndWait([
        {
          content: 'Luna',
          color: luna.color,
        },
        '&',
        { content: 'Emperor', color: emperor.color },
        '「',
        { content: 'For the', color: emperor.color },
        { content: 'Dream', color: luna.color },
        { content: 'of', color: emperor.color },
        { content: 'ours!!!', color: luna.color },
        '」',
      ]);
      era.printButton('「GO!!!!!!!」', 1);
      await era.input();
      await you.print_and_wait('RUN!!!!!!!');
      await you.print_and_wait('CHARGE!!!!!!!');
      await era.printAndWait(
        `Whether their voice gives out entirely, ${you.name} couldn't care less anymore.`,
      );
      await era.printAndWait(
        `All ${you.name} knows is this: ${chara17.name} is charging headlong toward the dream the two of you share.`,
      );
      await era.printAndWait('Almost! Almost there!');
      await era.printAndWait(
        `Amid a thunderous roar of cheers, the strongest ${chara17.uma_sex_title} of them all strides on into the unknown distance beyond.`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_be: (() => {
    const title = 'Dim. Al Niente';
    /**
     * @param {CharaTalk} chara17 Symboli Rudolf/Luna/Emperor
     * @param {CharaTalk} emperor Emperor
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     * @param {boolean} i_emperor if is in Emperor form
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('Huff... Huff...');
      await chara17.print_and_wait('Ha... a... gh...');
      await chara17.print_and_wait(
        `The world before ${chara17.name}'s eyes trembles; everything in ${chara17.sex}'s sight blurs into a haze.`,
      );
      await chara17.print_and_wait(
        `Vertigo and agony wash in like the sea, wave after wave. The Zone is casting her out — ${chara17.name} realizes it now.`,
      );
      await chara17.print_and_wait(`Omnipotence has left Symboli Rudolf.`);
      era.drawLine();
      await chara17.print_and_wait(
        `With every stride, ${chara17.name} feels it — something deeply, terribly wrong.`,
      );
      await chara17.print_and_wait(
        `Foot down. Foot up. The pain is so violent it twists the face into something unrecognizable.`,
      );
      await chara17.print_and_wait(
        `What was once a breeze ${chara17.sex}'d slice through has become a wall of iron, tearing ${chara17.name} with every stride.`,
      );
      await chara17.print_and_wait(
        `Throughout this race, ${chara17.sex} resembles a storm-battered bird, both wings shattered beneath.`,
      );
      await chara17.print_and_wait(`Omniscient has left Symboli Rudolf.`);
      era.drawLine();
      await chara17.print_and_wait(
        `Consciousness fading, eyelids leaden — ${chara17.name} teeters on the edge of blackout.`,
      );
      await chara17.print_and_wait(
        'The Zone is collapsing. The frozen world around her begins, slowly, to move again.',
      );
      await chara17.print_and_wait(
        `All around, the ${chara17.uma_sex_title}s are running, churning up the green earth, kicking dust into the air, sending torn grass dancing on the wind.`,
      );
      await chara17.print_and_wait(`Omnipresent has left Symboli Rudolf.`);
      era.drawLine();
      await chara17.print_and_wait(
        'Her heart pounds faster and faster — yet not an ounce of strength answers the call.',
      );
      await chara17.print_and_wait(
        'Muscle, tendon, and viscera alike — every fiber of her is being ripped by forces beyond her control.',
      );
      await chara17.print_and_wait(
        'Should she fail to halt at this bend, the moment the Zone vanishes for good—',
      );
      await chara17.print_and_wait('—death awaits.');
      if (i_emperor) {
        await chara17.say_and_wait(
          "The course is not the heavens' road eternal; e'en it must know its end, and cease.",
        );
      } else {
        await chara17.say_and_wait(
          'So this is the truth of the Zone... borrowing against my own awakened strength, all of it, spent in advance...',
        );
      }
      await chara17.print_and_wait(
        'Generation after generation, the brave stepped into the Zone, spending their futures, their dreams, every possibility they had left.',
      );
      await chara17.print_and_wait(
        `And now, the turn has come to ${chara17.name}.`,
      );
      await chara17.print_and_wait(
        'At the edge of her racing life, at the very edge of life itself, what does one do? No one ever showed her the way.',
      );
      await era.printAndWait([
        {
          content: 'Luna',
          color: luna.color,
        },
        '&',
        { content: 'Emperor', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '.', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: 'Luna',
          color: luna.color,
        },
        '&',
        { content: 'Emperor', color: emperor.color },
        '「',
        { content: 'I shalt', color: emperor.color },
        { content: "I'll leave you with this —", color: luna.color },
        { content: ' the lessons I paid so dearly', color: emperor.color },
        { content: ' to learn...', color: luna.color },
        '」',
      ]);
      await chara17.print_and_wait('—So be it.');
      await chara17.print_and_wait(
        `As though welcoming what was always meant to be, ${chara17.name} charges into the ending that awaits her.`,
      );
    };
    f.title = title;
    return f;
  })(),
  re_good_end: (() => {
    const title = (emperor) => [['Z Nového Elysium']];
    /**
     * @param {CharaTalk} chara17 Symboli Rudolf/Luna/Emperor
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} emperor Emperor
     * @param {CharaTalk} you The player
     */
    const f = async (chara17, luna, emperor, you) => {
      await luna.print_and_wait('Where... is this?');
      await luna.print_and_wait(
        `Like one shaken abruptly from sleep, the ${chara17.uma_sex_title} comes to.`,
      );
      await luna.print_and_wait(
        'Before her stretches a grassland without end.',
      );
      await luna.print_and_wait(
        `${chara17.sex} runs on, and the wind stirs the turf beneath her, catching the strands of hair that fall free around her face.`,
      );
      await luna.print_and_wait(
        `And crowning the ${chara17.uma_sex_title}, both sun and moon shine as one.`,
      );
      await luna.print_and_wait(
        `Under that unified light, silhouettes gaze upon the ${chara17.uma_sex_title}.`,
      );
      await luna.print_and_wait(
        'Three Goddesses gaze down, curious, upon this child of Theirs.',
      );
      await luna.print_and_wait('I see now.');
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title} blinks, once, twice.`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「You always said I should rest, ${you.actual_name}. Well... I've finally found somewhere I can rest forever Ad libitum.」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「【Elysium】... when I first heard it, I had no idea a single name could hold a sight so vast and so beautiful.」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「Z nového světa. A new world.」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「Maybe living things dwell here as well, feeling all that we feel.」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「Full of vivid tales and blazing hopes; of romance and love and hard-fought battles.」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「At last, I have arrived—」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}'s gallop fades to a walk, the walk to stillness; she halts before the Goddesses.'`,
      );
      await era.printAndWait(
        `「Rejoice, child. This is the terminus of everything... and everything's origin. You stand in Elysium, first of your kind.」`,
      );
      await era.printAndWait(
        'The Goddesses「You shall be rewarded: true dream, fulfilled! Yet first, child — what would you know, before you wish?」',
      );
      era.drawLine();
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title} looks back across her life, scene after scene flickering before her eyes.`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「The vows we carried, the dreams we could never quite touch—」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「Our inheritance — and every beloved thing—」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「By what power do they survive the years, inherited again and again by each new generation?」`,
      );
      await luna.print_and_wait(
        `The question leaves the lips, but she gives the Goddesses no time to reply; the answer is already here:`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「It's the bond, isn't it... between an ${chara17.uma_sex_title} and her trainer. Between us.」`,
      );
      await luna.print_and_wait(
        `A hand to the forehead, a shake of the head — and then ${chara17.sex} looks up, beaming brilliantly.`,
      );
      await luna.print_and_wait(
        `Gently, adoringly, the Goddesses caress the ${chara17.uma_sex_title}'s disheveled hair.`,
      );
      await era.printAndWait('The Goddesses「Then — your wish, child?」');
      await luna.print_and_wait(
        `Arms flung wide, ${chara17.sex} stands as though holding the entire New World against her heart.`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「I want a land where every dream continues.」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「Somewhere ${chara17.uma_sex_title}s will never stop running.」`,
      );
      await luna.print_and_wait(
        `「Where, as long as the voices of those who love us reach our ears — their cheers, their prayers for our triumph—」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「—we will rise, again and always, and overcome every rival who stands before us.」`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「Elysium — here, in the mortal world! An Elysium any ${chara17.uma_sex_title} may reach, so long as ${chara17.sex} dreams!」`,
      );
      await era.printAndWait(
        `Silently, the Goddesses incline Their heads — and then she speaks once more.`,
      );
      await luna.print_and_wait(
        `The ${chara17.uma_sex_title}「And one thing more. I want to go back. Because in that place — my beloved is surely waiting for me.」`,
      );
      await era.printAndWait(
        'The Goddesses「What a greedy child you are... hmm... and yet — We never did say you were limited to one wish, did We?」',
      );
      era.drawLine();
      await era.printAndWait('And so, the race ends.');
      await era.printAndWait(
        `The crowd gone, ${you.name} mutters an excuse to the reporters pressing in, and walks back out onto the empty track.`,
      );
      await era.printAndWait(
        `And there ${chara17.sex} is — the ${chara17.uma_sex_title} ${you.name} came to find.`,
      );
      await era.printAndWait(
        `${luna.sex} faces away, her expression hidden from ${you.name} entirely.`,
      );
      await era.printAndWait(
        `Maybe the triumph still overwhelms; maybe ${chara17.sex} lingers in a rapture ${you.name} cannot imagine.`,
      );
      await era.printAndWait(`Or maybe she's just weary, craving solitude.`);
      await era.printAndWait(
        `${you.name} slumps down onto the turf, so drained by the past days that even standing feels beyond reach.`,
      );
      await era.printAndWait(
        `Looking up, ${you.name} finds the pale moon lingering in the sunlit heavens — day and night suspended together above.`,
      );
      await era.printAndWait(`A deep sigh escapes ${you.name}.`);
      await luna.say_as_unknown_and_wait(you.actual_name);
      await era.printAndWait(
        `At last — the voice, calling. Heart hammering with dread and hope in equal measure, ${you.name} turns to look at the ${chara17.uma_sex_title}, but cannot find the words to answer.`,
      );
      await era.printAndWait(
        `To kneel, or to smile stupidly — ${you.name} has no idea which. For who stands before ${you.name} now: Luna? The Emperor?`,
      );
      era.drawLine();
      await luna.say_as_unknown_and_wait(
        'One soul slumbers; the other wakes. So it has always been.',
      );
      await luna.say_as_unknown_and_wait(
        'One of us grieves; the other rages. Sol et Luna nunquam occurrunt',
      );
      await era.printAndWait(
        `${chara17.sex} gazes up into the boundless sky — yet the expression is grave, as though ${chara17.sex} were staring into an abyss.`,
      );
      era.printButton("「Or maybe — you're simply Sol Invictus」", 1);
      era.printButton(
        "「Or maybe — you're simply inter omnes quasi minores sidera Luna」",
        2,
      );
      await era.input();
      await era.printAndWait(
        `Her head drops at the sound of ${you.name}'s voice.`,
      );
      era.printButton(
        '「Sicut Sol et Luna illuminant hoc saeculum, so can you.」',
        1,
      );
      era.printButton(
        "「Yet nothing says you can't be Emperor and Luna at once.」",
        2,
      );
      await era.input();
      await era.printAndWait(
        'Their gazes meet, carried along the mingled light of sun and moon.',
      );
      await era.printAndWait(
        `Dumbstruck, she gazes at ${you.name} — until at once the face burns and eyes brimming over.`,
      );
      await era.printAndWait(
        `A hand held out; a girl running toward it. Luna? Emperor? ${you.name} lets the question go at last.`,
      );
      await era.printAndWait(
        `${you.name} grips the hand ${chara17.sex} offers, pulls close, and they weep freely in each other's arms.`,
      );
      await era.printAndWait(
        `${you.name} is certain of it: in this moment, ${chara17.sex} who fills these arms, who embraces and kisses so fiercely, has been freed of that question too.`,
      );
      await era.printAndWait(
        'They part, panting, snatching a single breath before another storm of laid-bare feelings can take them.',
      );
      await era.printAndWait(
        `The warmth of the ${chara17.uma_sex_title} against ${you.name}'s chest is something wholly new — carrying both the Emperor's iron certainty and the flowing gentleness of Luna.`,
      );
      await you.say_and_wait(
        'The Emperor whom I love; the Luna who loves me back. Both of you — you.',
        true,
      );
      await era.printAndWait(
        `Or so ${you.name} means to say. Instead, a shake of the head — a soft yelp from her — and the two of them fall back together onto the grass.`,
      );
      era.printButton(
        '「My beloved has a name — and it is Symboli Rudolf.」',
        1,
      );
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_luna: (() => {
    const title = 'Noctiluca';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} emperor Emperor
     * @param {CharaTalk} chara17 Symboli Rudolf/Luna/Emperor
     * @param {CharaTalk} you The player
     */
    const f = async (luna, emperor, chara17, you) => {
      await era.printAndWait('And so, the race ends.');
      await era.printAndWait(
        `The crowd gone, ${you.name} mutters an excuse to the reporters pressing in, and walks back out onto the empty track.`,
      );
      await era.printAndWait(
        `And there ${chara17.sex} is — the ${chara17.uma_sex_title} ${you.name} came to find.`,
      );
      await era.printAndWait(
        `${luna.sex} faces away, her expression hidden from ${you.name} entirely.`,
      );
      await era.printAndWait(
        `Maybe the triumph still overwhelms; maybe ${chara17.sex} lingers in a rapture ${you.name} cannot imagine.`,
      );
      await era.printAndWait(`Or maybe she's just weary, craving solitude.`);
      await era.printAndWait(
        `${you.name} slumps down onto the turf, so drained by the past days that even standing feels beyond reach.`,
      );
      await era.printAndWait(
        `Looking up, ${you.name} finds the pale moon lingering in the sunlit heavens — day and night suspended together above.`,
      );
      await era.printAndWait(`A deep sigh escapes ${you.name}.`);
      await luna.say_as_unknown_and_wait(you.actual_name);
      await era.printAndWait(
        `At last — the voice, calling. Heart hammering with dread and hope in equal measure, ${you.name} turns to look at the ${chara17.uma_sex_title}, but cannot find the words to answer.`,
      );
      await era.printAndWait(
        `To kneel, or to smile stupidly — ${you.name} has no idea which. For who stands before ${you.name} now: Luna? The Emperor?`,
      );
      era.drawLine();
      await era.printAndWait(
        '???「One soul slumbers; the other wakes. So it has always been.」',
      );
      await era.printAndWait(
        '???「One of us grieves; the other rages. Sol et Luna nunquam occurrunt」',
      );
      await era.printAndWait(
        `${chara17.sex} gazes up into the boundless sky — yet the expression is grave, as though ${chara17.sex} were staring into an abyss.`,
      );
      await luna.say_as_unknown_and_wait(
        `Once, I loathed that Emperor with all my heart.`,
      );
      await era.printAndWait(`Blankly, ${you.name} looks back at her.`);
      await luna.say_as_unknown_and_wait(
        `Yet in the end, ${chara17.sex} told me: 'That fool of a courti'r never once doubted, start to finish, that I could not be beaten.`,
      );
      await luna.say_as_unknown_and_wait(
        `And so ${chara17.sex} wished to grant ${you.actual_name} a beautiful dream — one from which you would never, ever wake.`,
      );
      await luna.print_and_wait(
        "???「So the Emperor's crusade has reached its end at last.」",
      );
      await era.printAndWait(
        `The old sorrow in Luna's eyes is clouded now with confusion. Your shared wish has come true — and yet, for reasons ${chara17.sex} cannot name, ${chara17.sex} feels only a hollow, aching loss.`,
      );
      await luna.say_and_wait('So — is my own story about to end as well?');
      await era.printAndWait(
        'In the last light of sun and moon together, their eyes find each other.',
      );
      await era.printAndWait('Night falls. The sun vanishes without a trace.');
      await era.printAndWait(
        'Leaving only the gentle embrace of the bright moon above.',
      );
      await era.printAndWait(
        `${you.name} bows their head, eyes stinging red with tears.`,
      );
      era.printButton('「I will be with you, no matter what.」', 1);
      era.printButton(
        "「The story of the 'Emperor' will never truly end.」",
        2,
      );
      await era.input();
      await luna.say_and_wait('...I see.');
      await era.printAndWait(
        'With leaden footsteps, Luna sets off in the direction of the turning moon.',
      );
      await era.printAndWait(
        `${you.name} does not know where ${chara17.sex} is going.`,
      );
      await era.printAndWait([
        `And still, shaking, ${you.name} pushes up onto their feet to follow `,
        luna.get_colored_name(),
        `— to the ends of the earth, if that is where ${chara17.sex} goes.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_emperor: (() => {
    const title = 'Sic Semper Tyrannis';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} emperor Emperor
     * @param {CharaTalk} chara17 Symboli Rudolf/Luna/Emperor
     * @param {CharaTalk} you The player
     */
    const f = async (emperor, luna, chara17, you) => {
      await era.printAndWait('And so, the race ends.');
      await era.printAndWait(
        `The crowd gone, ${you.name} mutters an excuse to the reporters pressing in, and walks back out onto the empty track.`,
      );
      await era.printAndWait(
        `And there ${chara17.sex} is — the ${chara17.uma_sex_title} ${you.name} came to find.`,
      );
      await era.printAndWait(
        `${luna.sex} faces away, her expression hidden from ${you.name} entirely.`,
      );
      await era.printAndWait(
        `Maybe the triumph still overwhelms; maybe ${chara17.sex} lingers in a rapture ${you.name} cannot imagine.`,
      );
      await era.printAndWait(`Or maybe she's just weary, craving solitude.`);
      await era.printAndWait(
        `${you.name} slumps down onto the turf, so drained by the past days that even standing feels beyond reach.`,
      );
      await era.printAndWait(
        `Looking up, ${you.name} finds the pale moon lingering in the sunlit heavens — day and night suspended together above.`,
      );
      await era.printAndWait(`A deep sigh escapes ${you.name}.`);
      await luna.say_as_unknown_and_wait(you.actual_name);
      await era.printAndWait(
        `At last — the voice, calling. Heart hammering with dread and hope in equal measure, ${you.name} turns to look at the ${chara17.uma_sex_title}, but cannot find the words to answer.`,
      );
      await era.printAndWait(
        `To kneel, or to smile stupidly — ${you.name} has no idea which. For who stands before ${you.name} now: Luna? The Emperor?`,
      );
      era.drawLine();
      await era.printAndWait(
        '???「One soul slumbers; the other wakes. So it has always been.」',
      );
      await era.printAndWait(
        '???「One of us grieves; the other rages. Sol et Luna nunquam occurrunt」',
      );
      await era.printAndWait(
        `${chara17.sex} gazes up into the boundless sky — yet the expression is grave, as though ${chara17.sex} were staring into an abyss.`,
      );
      await emperor.say_as_unknown_and_wait(
        'Recently I all but fell in battle on the course. And still, at the very end, a feeble voice spurred Me forward.',
      );
      await era.printAndWait(
        `${you.name} stares at her, stunned into stillness.`,
      );
      await emperor.say_as_unknown_and_wait(
        `She bade Me hold on. She said: 'I hate you more than anything in the world — but for the sake of our dream, I ask you only one thing.'`,
      );
      await emperor.say_as_unknown_and_wait(
        `'Bring home the triumph — and return to ${you.actual_name}.`,
      );
      await emperor.say_as_unknown_and_wait(
        `Even if it means the two of us will never meet again'... so ${chara17.sex} said... ${chara17.sex} would still give up everything, gladly, all of it.`,
      );
      await era.printAndWait(
        `The Emperor's sharp eyes are clouded with bewilderment. Try as ${chara17.sex} might, ${chara17.sex} cannot recall who it was that dared prattle so loudly inside their own mind.`,
      );
      await emperor.say_and_wait(`And who, then, was ${chara17.sex}?`);
      await era.printAndWait(
        'In the last light of sun and moon together, their eyes find each other.',
      );
      await era.printAndWait(
        'The heavens blaze too brilliantly, and the moon is gone entirely.',
      );
      await era.printAndWait('Sol lucet omnibus.');
      await era.printAndWait(
        `${you.name} bows their head, eyes stinging red with tears.`,
      );
      era.printButton(
        '「My liege, she was dear to me beyond all measure.」',
        1,
      );
      era.printButton('「...Who, indeed?」', 2);
      await era.input();
      await emperor.say_and_wait('I see.');
      await era.printAndWait(
        'With leaden footsteps, the Emperor sets off in the direction of the blazing sun.',
      );
      await era.printAndWait(`${you.name} does not know where she is going.`);
      await era.printAndWait([
        `And still, shaking, ${you.name} pushes up onto their feet to follow `,
        luna.get_colored_name(),
        `— to the ends of the earth, if that is where ${chara17.sex} goes.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_wax_and_wane: (() => {
    const title = 'Wax and Wane';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        'When I was small, my family never expected anything of me.',
      );
      await luna.print_and_wait(
        "I could play as recklessly as I wanted, skip every training session, and no one minded. It felt like they'd all agreed: whatever happens with her is fine.",
      );
      await luna.print_and_wait(
        'That is the kind of stud the Symbolis are. Only strength ever mattered to them.',
      );
      await luna.print_and_wait(
        'So my strong, brilliant sisters tore down the track.',
      );
      await luna.print_and_wait(
        'And me? I could sleep an entire day away on the lawn.',
      );
      await luna.print_and_wait(
        'I meant to live an easy life. But as I grew older, I found I could no longer hold back a restlessness building inside me.',
      );
      await luna.print_and_wait('As if my own blood were burning inside me.');
      await luna.print_and_wait(
        'And every time it happened, something violent and vicious would rise up in my heart.',
      );
      await luna.print_and_wait(
        'The urge to shred, to crush, to stomp my opponents into the dirt — to sneer at them, to jeer!',
      );
      await luna.print_and_wait(
        '—I would strip the world of all it had, and set it ablaze!',
      );
      await luna.print_and_wait(
        'When my body finally gave out and I came back to myself, all I felt was an endless emptiness, and fear.',
      );
      await luna.print_and_wait(
        'I grew afraid of losing what I had, terrified of gaining nothing... so to silence my own spiraling thoughts, I threw myself into training, unprompted.',
      );
      await luna.print_and_wait(
        'Only when I ran myself to the very edge did I feel calm... only then did I feel like myself.',
      );
      await luna.print_and_wait('「Luna.」');
      await luna.print_and_wait(
        "A beautiful name, and a tender one — that's what my mother chose for me.",
      );
      await luna.print_and_wait(
        "I didn't want to turn into a creature that could do nothing but rage and destroy...",
      );
      await luna.print_and_wait(
        `Yet I never overcame the cruelty inherited in my blood, just as no ${luna.uma_sex_title} of the Symboli house ever had, not once, throughout our history.`,
      );
      await luna.print_and_wait(
        'Only then did it dawn on me — the reason my family had never once tried to rein me in.',
      );
      await luna.print_and_wait(
        'Because that blood — the "Symboli" blood, handed down through the ages — was always steering me toward a road I never chose.',
      );
      await luna.print_and_wait('To win. Only to win.');
      await luna.print_and_wait(
        'So long as victory came, I was allowed to become someone else altogether, someone unrecognizable.',
      );
      await luna.print_and_wait(
        'Or rather — as long as I won, anything would do.',
      );
      await luna.print_and_wait(
        'The moment my rare gift revealed itself, the Symboli house set about cultivating me in earnest.',
      );
      await luna.print_and_wait(
        'Any resource I could name became effortlessly mine, the moment I wished for it.',
      );
      await luna.print_and_wait(
        'Any doting attention I could imagine came effortlessly, the instant I asked.',
      );
      await luna.print_and_wait(
        'And still, I felt nothing but emptiness, and fear.',
      );
      await luna.print_and_wait(
        "For all that running quieted my head for a while, when I finally stood past the line, looking back at everyone I'd beaten, panting hard, I realized I'm grinning — and I couldn't make it stop.",
      );
      await luna.print_and_wait(
        'As though I had become someone else entirely.',
      );
      await luna.print_and_wait(
        'And I found myself asking: is Luna truly who I am?',
      );
      await luna.print_and_wait(
        'Or was the real me that monster tearing across the track, rampaging in every direction?',
      );
      await luna.print_and_wait(
        'I wanted so badly for someone to cry to — but as I grew older, the gentle people in my life kept vanishing, one after another, without warning.',
      );
      await luna.print_and_wait(
        'Mother — frightened by hunters, she fell into despair and faded from the world. My sister — she passed, brilliant to the very end, while readying herself for a race.',
      );
      await luna.print_and_wait('Maybe it will be my turn, too...');
      await luna.print_and_wait(
        'Beneath the cold gaze of the moon, I ran to the grown-ups as though half out of my mind.',
      );
      await luna.say_and_wait("There's something I want—");
      await luna.print_and_wait(
        "I wanted to feel safe, to never be scared again. But standing before my warm-hearted family, I found I couldn't voice it.",
      );
      await luna.print_and_wait(
        'Their eyes were full of expectation, and I saw it.',
      );
      await luna.print_and_wait(
        'And so what I wished for was 【LOVE】 — brothers and sisters beyond counting, gathered close, and lively people from every corner of the earth, drawn into the Symboli home.',
      );
      await luna.print_and_wait('If only this place could grow lively—');
      await luna.print_and_wait('So long as I had others around me, always—');
      await luna.print_and_wait(
        '—surely, surely there would be a chance. Surely someone would come who could free me from the emptiness, and the fear.',
      );
      await luna.print_and_wait(
        'And when that day came... I... Luna... surely I would—',
      );
      await luna.say_and_wait(`${you.actual_name}?`);
      await luna.print_and_wait(
        `Startled awake, Luna realizes ${luna.sex}'s lying by herself, alone in her own room.`,
      );
      await luna.print_and_wait(
        'What kind of dream was that? Holding the head, Luna glances toward the pale, radiant moon outside — and the vision swims.',
      );
      await luna.print_and_wait(
        `${luna.sex}'d accepted the encouragement given to her, made up her mind to push toward her dream — but the idea of the 【EMPEROR】 claiming the consciousness, of that brutal bloodline awakening again...`,
      );
      await luna.print_and_wait(
        `Luna weeps quietly, helplessly. However ${luna.sex} looks at it, ${luna.sex} is still terrified.`,
      );
      await luna.print_and_wait(
        `${luna.sex} had grown so skilled at enduring things, had always believed that if ${luna.sex} just held on long enough, everything would eventually turn around.`,
      );
      await luna.print_and_wait(
        `Yet from the moment she met ${you.actual_name} again, the endurance she'd leaned on her whole life lost all its power over her.`,
      );
      await luna.say_and_wait('I want to see you so badly...');
      await luna.say_and_wait('I want to see you so badly...');
      await luna.print_and_wait(
        `Sleep never comes, not once, through the whole night.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_a_stones_throw: (() => {
    const title = "A Hair's Breadth Away";
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `How did it happen — Luna, becoming the Emperor? Now, finally, ${you.name} remembers.`,
      );
      await era.printAndWait(
        "A thoughtless trick, nothing more — dreamed up by some cocky kid who hadn't the faintest idea what he was doing, aimed at the rising star of the Symboli name.",
      );
      era.printButton(
        '「You hate being so vicious, right? So — let someone else take care of that side of things.」',
        1,
      );
      await era.input();
      await luna.say_and_wait('Someone... else?');
      era.printButton(
        '「Mm-hm, someone else. For instance — another person entirely. Or, well, I guess, another you.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `It was meant as nothing more than a joke, a little distraction for a troubled Luna — yet ${luna.sex} who was normally so playful was hanging on every word, dead serious.`,
      );
      await era.printAndWait(
        `Urged on by the look in the gazing eyes, ${you.name} racked their brain, pressing on with the absurd little story.`,
      );
      era.printButton(
        '「How about creating a whole separate person, someone fierce and battle-hungry, nothing like you.」',
        1,
      );
      era.printButton(
        '「Base it on who you really are — just, you know, an imagined character.」',
        2,
      );
      await era.input();
      await era.printAndWait(
        `A breath escapes ${you.name}, and suddenly, a wild idea appears.`,
      );
      await you.say_and_wait("That's it — like the 【EMPEROR】!");
      await era.printAndWait(
        `Luna's expression goes vacant as ${luna.sex} watches ${you.name}, who is far too pleased with themselves over the idea they'd just come up with.`,
      );
      await era.printAndWait(
        `No — no, stop— ${you.name}'s very soul trembles, shaking to its core, as the memory finally surfaces whole.`,
      );
      await era.printAndWait(
        `The Emperor was nothing more than a prison, and ${you.name} had been the one to construct it, for Luna.`,
      );
      era.printButton(
        "「Whatever Luna can't handle, let the Emperor take care of it — all of it.」",
        1,
      );
      await era.input();
      await era.printAndWait(
        `It was never that simple! The fate, the entire weight ${luna.sex} carried — how could it be flattened into something so glib, so carelessly stated?!`,
      );
      await you.say_and_wait(
        'See? Now Luna can get all the way to the summit, no problem!',
      );
      await you.say_and_wait(
        'Shut up! SHUT UP! No more — not one more word!!!',
        true,
      );
      await era.printAndWait(
        `${you.name} grasps at their own neck, desperate to strangle the memory itself — and by the time the motion completes, the dream has already ended.`,
      );
      await era.printAndWait(`${you.name} is drenched in cold sweat.`);
      await era.printAndWait(
        `Back then, ${you.name} had been nothing but an arrogant little idiot — claiming, everywhere he went, to be some misunderstood genius the world had failed to recognize. In truth, it was nothing more than a student's empty bragging.`,
      );
      await era.printAndWait(
        `When ${you.name} first met Luna, out came everything: every strategy locked away and never spoken aloud, every half-formed observation and daydream, along with the absolute certainty ${you.name} felt that ${luna.sex} was destined for greatness — all of it poured out in a single breathless rush.`,
      );
      await era.printAndWait(
        `How embarrassing ${you.name} must have been back then remains a mystery even now. What ${you.name} does remember is Luna's smile — one filled with relief, as if some weight had finally lifted.`,
      );
      await era.printAndWait('That smile, blossoming there, under the moon.');
      await era.printAndWait(
        `In that instant, the resolve took hold: whatever the cost, ${you.name} would face any peril for her, laying down both life and wit in her service.`,
      );
      await era.printAndWait(
        "Getting back on track, studying like life depended on it, finally earning the title of Symboli Rudolf's trainer—",
      );
      await era.printAndWait(
        "None of it was ever about spreading the 【EMPEROR】's fearsome reputation far and wide.",
      );
      await era.printAndWait(
        "Every bit of it was supposed to be for Luna's smile — that alone!",
      );
      await era.printAndWait('So why — why did things turn out this way...');
      await era.printAndWait(
        `${you.name} buries their face in both hands, and sighs — deep, and long.`,
      );
    };
    f.title = title;
    return f;
  })(),
  fall_into_hell: (() => {
    const title = 'The Drop Dies In The River';
    /**
     * @param {CharaTalk} luna Luna
     * @param {CharaTalk} emperor Emperor
     * @param {CharaTalk} you The player
     */
    const f = async (luna, emperor, you) => {
      await era.printAndWait(
        `As rival after rival steps onto the track, ${you.name} suddenly notices — something is wrong with Luna.`,
      );
      await era.printAndWait(
        `${luna.sex} sits frozen in her chair, staring at you with blank, vacant eyes.`,
      );
      await era.printAndWait(
        `And the Emperor — where is ${luna.sex}? ${you.name} goes still.`,
      );
      await era.printAndWait(
        `Meeting ${you.name}'s confusion, Luna tries to speak, and fails entirely.`,
      );
      await luna.say_and_wait(
        "I don't want... I don't want to let 'em out again!",
      );
      era.printButton('「Luna, the race is about to start!」', 1);
      era.printButton("「It's okay — I'm not leaving your side.」", 2);
      await era.input();
      await era.printAndWait(
        `But no matter how ${you.name} pleads, Luna only shakes her head, refusing.`,
      );
      await era.printAndWait(
        '—With the start bearing down on them, if the Emperor failed to "surface" now, all would well and truly end in ruin.',
      );
      await era.printAndWait(
        `With no other choice, ${you.name} pinches their own throat, straining with everything they have to sound like some foolish court jester.`,
      );
      era.printButton(
        '「O Emperor, my magnificent Emperor! Can you hear them? The people roar for you like thunder itself!」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `Still, Luna weeps. Something hot and unnamed rises in ${you.name} — of all moments, why does it have to be this one...!`,
      );
      era.printButton(
        '「My Sovereign — while you slept, traitors dared once more to besmirch your glory.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `Luna only shakes her head, helpless. ${you.name}'s jaw clenches tight.`,
      );
      era.printButton(
        '「Rise, and unleash the fury that drowns the very heavens themselves...」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `Something fanatical distorts ${you.name}'s features, their voice fraying to a ragged rasp.`,
      );
      await era.printAndWait(
        "Perhaps the frenzy did its work — slowly, Luna's trembling body goes still.",
      );
      await era.printAndWait(
        `Her gaze meets ${you.name}'s; the terror there dissolves, and what surfaces instead is an edge so keen it chills to the bone.`,
      );
      await era.printAndWait(
        `Relief floods through ${you.name} — but the ${luna.uma_sex_title} before them suddenly clutches at her own head.`,
      );
      await era.printAndWait(`Luna looks at ${you.name}, lost.`);
      await luna.say_and_wait(`Aren't ${luna.couple_title}... my friend?`);
      era.printButton(`「......Yes. It is.」`, 1);
      era.printButton(
        `「Your Majesty, such a friend is unworthy of mercy!」`,
        2,
      );
      let ret = await era.input();
      if (ret === 2) {
        await luna.say_and_wait(
          'Do I really have no choice? Do I really have to become that... that hateful thing?',
        );
        era.printButton(
          "「No, no—! I'll pull you out of this race this instant!」",
          1,
        );
        era.printButton('「My Lord! Natus ad imperium!」', 2);
        ret = await era.input();
        if (ret === 2) {
          await luna.say_and_wait(
            "I'm not it! I'm not the Emperor! Please, stop erasing Luna. Keep this up, and there'll be no Luna left at all.",
          );
          await luna.say_and_wait(
            "If any part of you still loves me... please, don't...",
          );
          await era.printAndWait(
            `Hopelessness fills Luna's eyes as ${luna.sex} reaches for ${you.name}, the hands closing on nothing — the desperate motion of someone going under, reaching for anything that floats.`,
          );
          await luna.say_and_wait("Don't... leave me...");
          await era.printAndWait(
            `$${you.name} closes their eyes. Luna trusts him — loves him — so completely, so entirely. And so—`,
          );
          era.printButton('「Take my hand, Luna!」', 1);
          era.printButton('「HAIL KAISER RUDOLF DEM GROẞEN!」', 2);
          let ret = await era.input();
          if (ret === 2) {
            await era.printAndWait(
              `The moment the words leave his mouth, time itself seems to freeze — and in the very next instant, the right to breathe is simply taken from ${you.name}.`,
            );
            await era.printAndWait(
              `Luna... no, not Luna anymore. The Emperor extends the hand and grips ${you.name}'s neck, tight.`,
            );
          }
        }
      }
      if (ret === 1) {
        await era.printAndWait(
          `At your words, relief finally floods through Luna. ${luna.sex} reaches for ${you.name} at once, desperate, like someone seizing the one thing keeping her from sinking beneath the surface for good.`,
        );
        await era.printAndWait(
          `${you.name} cannot help but sigh — look what he had made Luna go through, all this time.`,
        );
        await era.printAndWait(
          'Why had he never noticed anything wrong with Luna before now? Whatever storms and towering waves lay ahead, he should have seen this coming.',
        );
        await era.printAndWait(
          `But it isn't too late — not yet! As Luna's trainer, the protector, and... the beloved, ${you.name} would weather every storm that came for Luna.`,
        );
        era.printButton('「Luna, listen, I...」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name} turns to Luna, hand already lifting to meet.`,
        );
        await era.printAndWait(
          `But that hand — the one ${you.name} had held countless times, the one he'd sworn, again and again, never to let go of — suddenly lunges forward.`,
        );
        await era.printAndWait(
          'It seizes his neck with the grip of a steel clamp, unyielding.',
        );
        await emperor.say_and_wait('Luna? Who is that?');
      }
      await era.printAndWait(
        `With scorn plain on her face, the Emperor stands, hand never loosening around ${you.name}'s neck.`,
      );
      await emperor.say_and_wait(
        'How long was I asleep this time? Where hid the traitors who lust after what is Mine?',
      );
      await era.printAndWait(
        `${luna.sex} surveys her surroundings with disdain, faintly puzzled — every time ${luna.sex} wakes from sleep, ${luna.sex} finds herself somewhere new.`,
      );
      await era.printAndWait(
        'Why, each time I rise, does someone still find the audacity to stand against Me?',
      );
      await era.printAndWait(
        `No words come to ${you.name}, no escape either — nothing but a slack jaw and choked, strangled noises forced from his throat.`,
      );
      await era.printAndWait(
        `Starved of air, ${you.name}'s vision blurs at the edges — consciousness slipping further away with every passing second.`,
      );
      await emperor.say_and_wait('Hmph.');
      await era.printAndWait(
        `Bored, it seems, by the silence she gets in return, the Emperor flings ${you.name} to the ground without a second thought. A dull thud — and then ${you.name} is retching violently, every organ inside him feeling crushed flat.`,
      );
      await era.printAndWait(
        `Unable to rise, ${you.name} can only lie there on the ground, listening to the Emperor's footsteps recede into the distance.`,
      );
      await era.printAndWait(
        `Just before the dark takes him completely, ${you.name} seems to catch, one final time, the sound of Luna's weeping — distant, submerged, almost gone.`,
      );
      await era.printAndWait(
        'Forgive me... the current has already carried us too far.',
      );
      await era.printAndWait(`Darkness closes over ${you.name} completely.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} chara17 Symboli Rudolf/Luna/Emperor
   * @param {boolean} i_good_end if is in the good end (Symboli Rudolf form)
   * @param {boolean} i_emperor if is in Emperor form (not good end)
   */
  async ws_palace(chara17, i_good_end, i_emperor) {
    if (i_good_end) {
      await chara17.say_and_wait(
        "So, which calls to you — Solis, or Luna? You needn't decide. Whichever you're standing under, our paths are always bounded to cross. This time, it'll be us who come looking for you.",
      );
    } else if (i_emperor) {
      await chara17.say_and_wait(
        "So long as the road ahead remains open to Me, there is no cause to linger here! My march across the heavens shall never cease — rejoice, My courti'r! You shall bear witness to the Emperor's glorious ascent. And as your reward, I decree you may follow and serve My splendor, now and for all eternity... Well? Your answer?",
      );
    } else {
      await chara17.say_and_wait(
        `The Emperor's tale is over now, but my task in this world remains. Let's walk there side by side — toward a future where every ${chara17.uma_sex_title} gets to be happy. And... well, I guess I should get to be part of that future too, so... you'll be the one to give me such happiness, right?`,
      );
    }
  },
};
