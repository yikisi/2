/**
 * @file Symboli Rudolf - Love
 * @author 露娜俘虏
 * @author Katze (translator)
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} luna Luna/Symboli Rudolf
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await luna.print_and_wait('Her fate was fixed the instant she was born.');
      await luna.print_and_wait([
        'Luna, an ',
        luna.uma_sex_title,
        ' born into the Symboli Studs.',
      ]);
      await luna.print_and_wait([
        'Same as all her peers before her, ',
        luna.sex,
        " was bound to carry out the Symboli house's cherished ambition.",
      ]);
      await luna.print_and_wait([
        luna.couple_title,
        ' need to be unshakably strong, unfailingly formidable. Put plainly: to pursue victory, always and only.',
      ]);
      await luna.print_and_wait(
        'Aside from that, so long as victory came, all else was negotiable — not essential, and easily discarded.',
      );
      await luna.print_and_wait([
        'In other words, ',
        luna.couple_title,
        ' was free, then, to do exactly as she pleased.',
      ]);
      await luna.print_and_wait('One aunt lost herself entirely to lust.');
      await luna.print_and_wait('Another aunt was lost to the bottle.');
      await luna.print_and_wait('That sister could not live without violence.');
      await luna.print_and_wait(
        'So long as victory followed, every bit of it was permitted.',
      );
      await luna.print_and_wait(
        "Which is why, once Luna's dreadful gift made itself known, the elders of the family softened into gentle, pleased expressions.",
      );
      await luna.print_and_wait(
        'One day, she went to them, unprompted. It was a ritual they knew by heart.',
      );
      await luna.print_and_wait(
        'Kindly, warmly, they asked her: "Tell us — what do you want?',
      );
      await luna.print_and_wait([luna.sex, ' answers, Love.']);
      await luna.print_and_wait([
        'Before long, she was buried in new toys; the Mejiro household welcomed ',
        luna.sex,
        ', men and women alike, lovely or dashing, competed to win ',
        luna.sex,
        ' favor...',
      ]);
      await luna.print_and_wait(
        'For all the splendor encircling, none of it left Luna feeling anything close to loved.',
      );
      await luna.print_and_wait([
        'All ',
        luna.sex,
        ' wanted was love that asked for nothing in return: no strings of profit, no shadow of power, only something honest and freely offered.',
      ]);
      await luna.print_and_wait(
        'Alone in bed at night, Luna would curl into herself, searching for even the faintest trace of warmth.',
      );
      await luna.print_and_wait([
        'Instead, moonlight spilled over the skin, leaving nothing but a chill that reached straight into the marrow.',
      ]);
      await luna.say_and_wait('... Someone... Please...');
      await luna.print_and_wait([
        `Luna was terrified. Even after ${luna.sex} gave everything ${luna.sex} had, begging the world for something real, ${luna.sex} still came away with nothing at all.`,
      ]);
      era.println();

      era.printButton(
        '「Seriously, why is this place such a labyrinth...?」',
        1,
      );
      await era.input();
      await luna.print_and_wait(
        'A voice, unfamiliar, filters in from the hallway outside.',
      );

      era.printButton('Ask', 1);
      await era.input();
      await you.say_and_wait("Isn't this supposed to be my room...?");
      await you.say_and_wait(
        "My bad!? I must've gotten lost — huh? Wait, why are you crying?!",
      );
      await you.say_and_wait(
        "Hey, it's okay!!! I'm not dangerous!!! Really, I promise!!!",
      );
      await you.say_and_wait(
        `Oh no, ${luna.sex}'s crying even harder now — and, wait, snot...! ${luna.sex} just wiped her snot on my clothes!`,
      );
      await you.say_and_wait('Ughh...');
      era.println();

      await luna.print_and_wait(
        'It was nothing more than the most ordinary, unremarkable coincidence.',
      );
      await luna.print_and_wait(
        "A child who needed somewhere to release her fear, someone to lean on, some warmth to hold onto — happened, simply, to run into another who'd lost his way.",
      );
      await luna.print_and_wait(
        'The whole night through, he stumbled awkwardly at trying to console her, in way over his head.',
      );
      await luna.print_and_wait(
        'Starting then, they gradually discovered shared things to speak of.',
      );
      await luna.print_and_wait(
        'From that point on, the two of them grew closer and closer, until they were never far apart.',
      );
      await luna.print_and_wait(
        'A disheartened child, and a human drifting aimlessly through life — somehow, their souls found each other.',
      );
      await luna.say_and_wait(
        'That has to be when it started — the moment I became unable to ever forget you again...',
      );
    };
    f.title = 'The Sun Reaches Its Meridian Height';
    return f;
  })(),
  74: (() => {
    /**
     * @param {CharaTalk} luna Luna/Symboli Rudolf
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        'Once a year, the school held its opening ceremony — and at any normal school, that duty would belong to a principal, gray-haired and well respected.',
      );
      await luna.print_and_wait(
        'At Tracen Academy, however, this task belonged to exactly one person — no one else.',
      );
      await luna.print_and_wait([
        'Symboli Rudolf, President of the Student Council, crossed through rows of bowing students on the way to the lectern.',
      ]);
      await luna.print_and_wait(
        'The students buzzed with anticipation; the faculty stood tall with pride.',
      );
      await luna.print_and_wait([
        "This new term arrived on the heels of one defeat after another for Japan's Uma",
        luna.uma_sex_title,
        's — and yet, from today, the discouragement was starting, gradually, to fade.',
      ]);
      await luna.print_and_wait(
        'All because their Student Council President stood among them: Symboli Rudolf, the Symboli lioness, the very Emperor — and the whole school lifted with joy at the thought.',
      );
      await luna.print_and_wait([
        `Under the blaze of every eye fixed on, all Luna could feel was stomach twisting into a knot — ${luna.sex} was almost certain she was about to be sick.`,
      ]);
      await luna.print_and_wait(
        'That same wordless emptiness, that same fear — it felt as though it were about to sweep over her entire body all over again...',
      );
      await luna.print_and_wait(
        `Helplessly, Luna's eyes swept across the crowd — and then ${luna.sex} spotted him: someone standing on his tiptoes, straining to see over everyone else.`,
      );
      await you.say_and_wait("You've got this! Luna!");
      await luna.print_and_wait([
        'Even from so far away, Luna could make out, just from the movement of ',
        you.get_colored_actual_name(),
        "'s lips, precisely what ",
        you.sex,
        ' was trying to tell her.',
      ]);
      await luna.say_and_wait('—Phew.');
      await luna.say_and_wait('My fellow schoolmates—');
      era.drawLine();
      await luna.print_and_wait(
        'But perhaps enough coincidences, stacked one after another, eventually calcify into something like fate.',
      );
      await luna.print_and_wait(
        "On that day, a ceremony that would linger in memory for years, what people held onto was the sight of Symboli Rudolf lifting everyone's spirits — stern, but with humor woven through every word.",
      );
      await luna.print_and_wait(
        'They remembered the smile, too — one that seemed to come straight from the heart.',
      );
      await luna.print_and_wait(
        'What no one realized was that this smile had one true source: her simply, genuinely, being unable to stop herself from laughing.',
      );
      await luna.say_and_wait(
        'That little tiptoe thing he did, so anxious... pfft, hehe.',
      );
      await luna.print_and_wait([
        'Not even ',
        you.get_colored_actual_name(),
        ' could have guessed how deeply this scene would lodge itself in the mind of that towering, untouchable Uma',
        luna.uma_sex_title,
        '.',
      ]);
    };
    f.title = 'It begins to decline.';
    return f;
  })(),
  89: (() => {
    /**
     * @param {CharaTalk} luna Luna/Symboli Rudolf
     * @param {CharaTalk} you The player
     */
    const f = async (luna, you) => {
      await luna.print_and_wait([
        luna.uma_sex_title,
        `For all the bond people imagine, an ${luna.uma_sex_title} only sees their Trainer a bit more than any regular teacher.`,
      ]);
      await luna.print_and_wait(
        'Workouts, schedules. Races, entries. Once the job was done, there wasn’t much time left for anything else.',
      );
      await luna.print_and_wait(
        'For one as busy as Luna, that distance was keener still—and so, for the first time, unease gnawed at her.',
      );
      await luna.print_and_wait(
        'By the time the paperwork was done, night had fallen deep and heavy',
      );
      await luna.print_and_wait(
        'Running on fumes, Luna still dragged herself through one last campus check.',
      );
      await luna.print_and_wait('Again and again.');
      await luna.print_and_wait([
        `At long last, ${luna.sex} found the team cabin—and someone had left the light on.`,
      ]);
      await luna.print_and_wait([
        luna.sex,
        `${luna.sex} had not shown ${luna.sex === 'She' ? 'her' : 'his'} face all day. Could a junior still be here?`,
      ]);
      await luna.print_and_wait(
        `Luna pushed the door open. Unlike ${luna.sex === 'She' ? 'her' : 'his'} own secret base, this place was never locked.`,
      );
      await luna.print_and_wait(
        `What Luna found stopped ${luna.sex === 'She' ? 'her' : 'his'} short: ${luna.sex === 'her' ? 'her' : 'his'} Trainer, crashed on the couch amid a battlefield of books and stats.`,
      );
      await luna.say_and_wait('So it was only you...');
      await luna.print_and_wait('Burning the midnight oil with me, were you?');
      await luna.print_and_wait(
        `A faint smile touched Luna’s lips. ${luna.sex} worked for the academy—but the Trainer worked so hard... perhaps just for Luna alone.`,
      );
      await luna.print_and_wait([
        ` Luna’s pulse betrayed ${luna.sex === 'She' ? 'her' : 'him'} before ${luna.sex} could name the feeling. Heat crept into ${luna.sex === 'She' ? 'her' : 'his'} cheeks.`,
      ]);
      await luna.print_and_wait([
        'Like ',
        you.get_colored_actual_name(),
        ` had set ${luna.sex === 'her' ? 'her' : 'his'} heart ringing`,
      ]);
      await luna.print_and_wait([
        `Luna stood in a daze. Clutching the fabric at ${luna.sex === 'She' ? 'her' : 'his'} chest, ${luna.sex} realized ${luna.sex === 'her' ? 'her' : 'his'} feelings for the Trainer had begun to change.`,
      ]);
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        ' had fallen sound asleep. It was just',
        you.couple_title,
        ' here. Only ',
        you.couple_title,
        '...',
      ]);
      await luna.print_and_wait(
        'Luna barely breathed. One small shift backward, and the door closed tight as it gave a quiet click.',
      );
      await luna.print_and_wait([
        'Then ',
        luna.sex,
        ' reached back and locked the door.',
      ]);
      await luna.print_and_wait(
        `${luna.sex} knew better. Of course ${luna.sex} did.`,
      );
      await luna.print_and_wait([
        'With heavy steps, Luna approached ',
        you.get_colored_actual_name(),
        '.',
      ]);
      await luna.print_and_wait([
        '—',
        luna.sex,
        'carried the responsibilities of student council president, as well as the glory of the Symboli studs.',
      ]);
      await luna.print_and_wait([
        `Luna eased ${luna.sex === 'She' ? 'her' : 'his'} shoes off, then settled quietly at `,
        you.get_colored_actual_name(),
        '’s side.',
      ]);
      await luna.print_and_wait(
        '——One witness, one rumor, and her whole world would shatter.',
      );
      await luna.print_and_wait([
        `Luna lowered herself gently, slipping into the warmth of `,
        you.get_colored_actual_name(),
        '’s embrace.',
      ]);
      await luna.print_and_wait([
        `But ${luna.sex} pushed those worries away. Whatever happened later, ${luna.sex} only wanted the present.`,
      ]);
      await luna.print_and_wait([
        'Tucked against ',
        you.get_colored_actual_name(),
        ', Luna clung to that warmth like it might vanish.',
      ]);
      await luna.say_and_wait(
        'Years have passed... but this is still you. Exactly as I remember.',
      );
      await luna.print_and_wait(
        `It soothed ${luna.sex === 'her' ? 'her' : 'him'} and helped ${luna.sex === 'her' ? 'her' : 'him'} let go, like finding a lifeboat in the open ocean.`,
      );
      await luna.say_and_wait(
        'Whatever happens, I’m not letting myself lose you.',
      );
      await luna.print_and_wait([
        `Luna shifted and wrapped ${luna.sex === 'her' ? 'her' : 'his'} arms tight around `,
        you.get_colored_actual_name(),
        `. Looking up, ${luna.sex} lingered near the warmth of their breath`,
      ]);
      await luna.say_and_wait('So please... do not leave me either. please...');
      await luna.print_and_wait([
        ' Luna fell fast asleep in ',
        you.get_colored_actual_name(),
        '’s arms.',
      ]);
      await luna.print_and_wait([
        `Only thistime, no nightmares came—and ${luna.sex} slept soundly until morning`,
      ]);
    };
    f.title = 'The Moon Becomes Full';
    return f;
  })(),
  99: (() => {
    /**
     * @param {CharaTalk} luna Luna/Symboli Rudolf
     * @param {CharaTalk} you The player
     * @param {string} callname Luna/Symboli Rudolf’s call name for the player
     */
    const f = async (luna, you, callname) => {
      await luna.print_and_wait(
        'Sleep refused to come, no matter how Luna shifted.',
      );
      await luna.print_and_wait(
        'Returning home after so long, little seems changed—save the once-proud family elders now bowing low before.',
      );
      await luna.print_and_wait([
        `Was this what strength earned ${luna.sex}? Respect, fear, obedience? A Symboli ${luna.uma_sex_title} should have worn it like a crown.`,
      ]);
      await luna.print_and_wait(
        'Pride never came. Instead, something restless burned under Luna’s ribs.',
      );
      await luna.print_and_wait([
        'It was only a customary visit home—yet ',
        callname,
        ' could not simply come along.',
      ]);
      await luna.print_and_wait(
        `Even on paths ${luna.sex} knew by heart, Luna kept drifting off course.`,
      );
      await luna.print_and_wait([
        `${luna.sex} suddenly realized ${luna.sex} had grown used to someone standing beside ${luna.sex === 'She' ? 'her' : 'him'}—someone who endured every selfish lean.`,
      ]);
      await luna.print_and_wait('Not here...');
      await luna.print_and_wait('Still not here......');
      await luna.print_and_wait('Not beside me............!');
      await luna.print_and_wait([
        'All it took was ',
        you.get_colored_actual_name(),
        '’s absence, and Luna felt as though something vital had been taken.',
      ]);
      await luna.print_and_wait(
        'Night fell, and moonlight spilled once more into the bedroom, just as it had years ago.',
      );
      await luna.print_and_wait(
        `The same old chill found ${luna.sex === 'She' ? 'her' : 'him'} again. Luna hid beneath the blankets, clinging to memories of the one person who could warm ${luna.sex === 'She' ? 'her' : 'him'}.`,
      );
      await luna.print_and_wait([
        'If ',
        you.get_colored_actual_name(),
        ` were here, lying in this bed beside ${luna.sex === 'she' ? 'her' : 'him'}... then...`,
      ]);
      await luna.print_and_wait(
        '—One kiss would become another, until neither of them wanted to breathe apart.',
      );
      await luna.print_and_wait(
        '—The breath would be so close, so warm, it would leave no room for loneliness.',
      );
      await luna.print_and_wait(
        `Marks would linger on ${luna.sex === 'she' ? 'her' : 'his'} shoulders and collarbone.`,
      );
      if (luna.sex_code - 1) {
        await luna.print_and_wait(
          `—Their hands would keep caressing ${luna.sex === 'She' ? 'her' : 'his'} chest.`,
        );
      }
      await luna.print_and_wait(
        `—Even ${luna.sex === 'she' ? 'her' : 'his'} long legs would be drawn into that slow, lingering touch.`,
      );
      await luna.print_and_wait(
        '—Neither of them would stop reaching for more.',
      );
      await luna.print_and_wait([
        ` Luna quivered under the covers, ears drooping, fingers slipping lower—and a sudden shock of orgasm ran through ${luna.sex === 'She' ? 'her' : 'him'}.`,
      ]);
      await luna.print_and_wait([
        'If ',
        you.get_colored_actual_name(),
        ` were here now, Luna knew ${luna.sex} wouldn’t resist a thing.`,
      ]);
      await luna.say_and_wait([
        you.get_colored_actual_name(),
        '... hurry back to where you belong.',
      ]);
      await luna.print_and_wait(
        `Murmuring ${luna.sex === 'She' ? 'her' : 'his'} beloved’s name, Luna sank into deep sleep.`,
      );
    };
    f.title = 'It Begins To Wane';
    return f;
  })(),
};
