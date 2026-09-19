/**
 * @file Shop - system text
 * @author 幽白書
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  /**
   * Tachyon on the team, love & friendly+, first visit to the shop
   * @param {CharaTalk} tachyon Tachyon
   * @param {CharaTalk} you player
   * @param {PrintedSpan} callname what Tachyon calls the player
   */
  async start_first_love(tachyon, you, callname) {
    await tachyon.say_and_wait([
      'Oh my, ',
      callname,
      '… coming here already… that eager, are we…',
    ]);
    await printAndWait([
      'While wandering, ',
      you.get_colored_name(),
      ' spots a chestnut-haired ',
      tachyon.uma_sex_title,
      ' in a white lab coat, cheeks flushed with shy heat.',
    ]);
    await printAndWait([
      tachyon.sex,
      ' deep crimson eyes, shuttered like blinds, hold madness and mystery; the slightly oversized lab coat is packed tight with whatever hangs inside.',
    ]);
    await printAndWait([
      'That suspicious figure is ',
      you.get_colored_name(),
      `'s assigned `,
      tachyon.uma_sex_title,
      ' and lover, ',
      tachyon.get_colored_name(),
    ]);
    if (get('exp:32:性爱次数') > get('exp:32:睡奸次数')) {
      await tachyon.say_and_wait(
        "…Don't tell me I overdid it and now you need medicine… n-no, but… it can't be helped, right? We still need to test our compatibility…",
      );
      await tachyon.say_and_wait(
        'Also… um… it felt good, so… buy plenty at once. Easier to use back home ❤️',
      );
    } else if (get('exp:0:性爱次数') > get('exp:0:睡奸次数')) {
      await tachyon.say_and_wait(
        "I-I mean, you're not planning to do it with someone else, right…? N-no, no way. These are for… for… for using with me, right?",
      );
      await tachyon.say_and_wait(
        "Really? You wouldn't lie…? …Okay. I'll be looking forward to tonight ❤️",
      );
    } else {
      await tachyon.say_and_wait([
        callname,
        "… Mm. I get it. We're dating now, so I already prepared myself for this…",
      ]);
      if (you.sex_code === 1) {
        await tachyon.say_and_wait(
          "I mean, I've heard human males have ridiculous libido… honestly, lasting this long before coming here already surprises me…",
        );
      }
      await tachyon.say_and_wait([
        "Just to confirm—I don't think you'd do that kind of thing, but… these drugs are for doing it with me, right…? ",
        callname,
        '?',
      ]);
    }
    await tachyon.say_and_wait("Anyway, let's see today's stock.");
  },
  /**
   * Tachyon on the team, lust & friendly+
   * @param {CharaTalk} tachyon Tachyon
   * @param {CharaTalk} you player
   * @param {PrintedSpan} callname what Tachyon calls the player
   * @param {boolean} is_first first visit to the shop
   */
  async start_lust(tachyon, you, callname, is_first) {
    if (is_first) {
      await tachyon.say_and_wait([callname, '? What are you doing here?']);
    } else if (!get('exp:32:性爱次数')) {
      tachyon.say('…Back again? Who is it this time…');
    } else {
      tachyon.say([
        'Even after all that, still not enough… what a sex maniac, ',
        callname,
        ". I almost want to dissect what's inside you",
      ]);
    }
    print([
      'While wandering, ',
      you.get_colored_name(),
      ' spots a chestnut-haired ',
      tachyon.uma_sex_title,
      ' in a white lab coat, looking thoroughly suspicious,',
    ]);
    print([
      tachyon.sex,
      ' deep crimson eyes, shuttered like blinds, hold madness and mystery; the slightly oversized lab coat is packed tight with whatever hangs inside.',
    ]);
    print([
      'That shady figure is ',
      you.get_colored_name(),
      `'s assigned `,
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait([
        callname,
        '… You know what this place sells, right… In other words… y-you already have that kind of partner?',
      ]);
      await printAndWait([
        tachyon.get_colored_name(),
        ' asks for some reason looking extremely tense',
      ]);
      printButton('Of course I do', 1);
      printButton('No', 2);
      if ((await input()) === 1) {
        await tachyon.say_and_wait([
          'Oh? Who is it? Someone actually fell for a walking glowstick like you? Human or ',
          tachyon.uma_sex_title,
          '?',
        ]);
        await tachyon.say_and_wait(
          'No, this is purely a study of biodiversity. Sharing the identity of your crush is the bare minimum intelligence a lab rat should provide…',
        );
        await tachyon.say_and_wait(
          "Whatever. I'll find a chance to dig it out of you eventually",
        );
      } else {
        await tachyon.say_and_wait(
          "…Heh. As expected. A walking glowstick like you—if anyone actually fell for that, I'd want to observe them for research.",
        );
        await tachyon.say_and_wait([
          'But that makes wanting these drugs awfully suspicious. Tell me, ',
          callname,
          "… you wouldn't do anything criminal, would you",
        ]);
        await tachyon.say_and_wait(
          "Speaking of which, it's been a while since I got feedback on drug reactions…",
        );
        await tachyon.say_and_wait(
          'Whatever. Use them as you like. For research, any price is worth trying… even if that price is me',
        );
        await tachyon.say_and_wait(
          'What am I hinting at? Heh. Who knows. Question is whether a certain dense idiot can catch it',
        );
      }
    }
    tachyon.say("Anyway, let's see today's stock");
  },
  /**
   * Tachyon on the team, low affection & cool+, first shop visit
   * @param {CharaTalk} tachyon Tachyon
   * @param {CharaTalk} you player
   * @param {PrintedSpan} callname what Tachyon calls the player
   */
  async start_first(tachyon, you, callname) {
    await tachyon.say_and_wait(["Oh my, if it isn't ", callname, '?']);
    await printAndWait([
      'While wandering, ',
      you.get_colored_name(),
      ' spots a chestnut-haired ',
      tachyon.uma_sex_title,
      ' in a white lab coat, looking thoroughly suspicious,',
    ]);
    await printAndWait([
      tachyon.sex,
      ' deep crimson eyes, shuttered like blinds, hold madness and mystery; the slightly oversized lab coat is packed tight with whatever hangs inside',
    ]);
    await printAndWait([
      'That shady figure is ',
      you.get_colored_name(),
      `'s assigned `,
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await tachyon.say_and_wait(
      'Never thought you were this type… whatever. Food and lust are nature. Still, specially coming out to sell drugs,',
    );
    await tachyon.say_and_wait([
      'looks like the daily dosage can be doubled… Anyway, spit it out—which ',
      tachyon.uma_sex_title,
      ' caught your eye?',
    ]);
    printButton('Answer', 1);
    printButton('Shake head and refuse', 2);
    if ((await input()) === 1) {
      print('Enter their name:');
      let _default = false;
      switch (await input()) {
        case '爱丽速子':
        case '速子':
        case '你':
        case '妳':
          if (get('relation:32:0') <= 150) {
            await tachyon.say_and_wait([
              '…',
              callname,
              ', some jokes are better left unsaid',
            ]);
            await printAndWait([
              tachyon.sex,
              ' wears a polite smile that does not reach the eyes—heavy with warning',
            ]);
            await printAndWait([
              'That question seems to have offended ',
              tachyon.get_colored_name(),
              '. Better not say that…',
            ]);
          } else {
            await tachyon.say_and_wait(
              'If you like me that much, try this drug tomorrow.',
            );
            await tachyon.say_and_wait([
              'For some reason, everyone who drinks it says they see a beautiful ',
              tachyon.teen_sex_title,
              '—and everything else in the world looks like raw meat…',
            ]);
            await tachyon.say_and_wait(
              "Weird. It's only supposed to boost eyesight. What's going on",
            );
            await printAndWait([
              tachyon.sex,
              ' brushes off what ',
              you.get_colored_name(),
              ' said without taking it seriously',
            ]);
          }
          break;
        case '曼城茶座':
        case '茶座':
          // Starting as Cafe does not trigger this
          if (get('cflag:0:模版角色') !== 25) {
            await tachyon.say_and_wait("It's Cafe…!?");
            await printAndWait([
              tachyon.get_colored_name(),
              ' looks oddly impressed for some reason',
            ]);
            await tachyon.say_and_wait(
              'Take whatever you want! 20% off—no, 30%! On one condition: record everything!',
            );
            await tachyon.say_and_wait(
              'Write it up as an experiment report… forget it, just film the whole thing!',
            );
            await tachyon.say_and_wait(
              'Guhuhuhu… beyond the experiment, I get to watch that one drown in lust… too interesting!',
            );
            await printAndWait([
              you.get_colored_name(),
              ' is startled by ',
              tachyon.get_colored_name(),
              "'s rapid-fire barrage and quickly refuses ",
              tachyon.sex === 'She' ? 'her' : 'his',
              ' proposal',
            ]);
            await tachyon.say_and_wait('Guh… rejected? Fine');
            await printAndWait([
              tachyon.get_colored_name(),
              ' sighs in disappointment, then starts rummaging through ',
              tachyon.sex === 'She' ? 'her' : 'his',
              ' lab coat',
            ]);
            await tachyon.say_and_wait([
              'In that case… take this, ',
              callname,
              '.',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' receives an organ donation consent form from ',
              tachyon.get_colored_name(),
              '—recipient: ',
              tachyon.get_colored_name(),
              ' Lab',
            ]);
            printButton('…', 1);
            await input();
            await tachyon.say_and_wait([
              'Cafe probably has no interest in tormenting a corpse, so maybe 80% of the organs would be left for me to study. Talk it over with ',
              tachyon.sex.toLowerCase(),
              ' and make the cuts clean…',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' breaks into a cold sweat watching ',
              tachyon.get_colored_name(),
              ' smile while saying all that',
            ]);
            await tachyon.say_and_wait(
              'Hahaha, just kidding… but just in case, sign it anyway?',
            );
          } else {
            _default = true;
          }
          break;
        case '大和赤骥':
        case '大和':
        case '赤骥':
          // Starting as Daiwa does not trigger this
          if (get('cflag:0:模版角色') !== 9) {
            await tachyon.say_and_wait([
              '…',
              callname,
              ', just in case—if tomorrow were your last day, what color medicine would you want to drink',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              ' stares at ',
              you.get_colored_name(),
              ' with near-freezing eyes',
            ]);
            printButton('"…!?"', 1);
            printButton('"Spare me!"', 2);
            tachyon.sex_code - 1 &&
              printButton('"At least let me die in Daiwa\'s chest!"', 3);
            await input();
            await tachyon.say_and_wait([
              'Heh… only joking… but still, ',
              callname,
              ', mountains or the sea?',
            ]);
            await tachyon.say_and_wait(
              'No, why would I ask something that stupid. Obviously you prefer the formalin in my lab, right?',
            );
            await printAndWait([
              tachyon.get_colored_name(),
              "'s eyes do not look like they're joking…",
            ]);
          } else {
            _default = true;
          }
          break;
        case '森林宝穴':
        case '宝穴':
          // Starting as Mejiro Dober / "Hora" does not trigger this
          if (get('cflag:0:模版角色') !== 94) {
            await tachyon.say_and_wait([
              '…',
              callname,
              '—fucking an idiot is illegal, you know?',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              ' looks at ',
              you.get_colored_name(),
              ' like pure scum',
            ]);
            await tachyon.say_and_wait([
              "As a merchant and mad scientist I shouldn't care this much, but I kind of want to call the cops, ",
              callname,
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' can only force a dry laugh',
            ]);
          } else {
            _default = true;
          }
          break;
        default:
          _default = true;
      }
      if (_default) {
        await tachyon.say_and_wait(
          'Oh… interesting. In that case, write up the post-use data and emotional changes as a proper report',
        );
        await printAndWait([
          tachyon.get_colored_name(),
          ' looks interested—but ',
          you.get_colored_name(),
          " can tell it's only interest in experimental data",
        ]);
      }
    } else {
      await tachyon.say_and_wait("Why so shy? I won't tell anyone");
      await printAndWait([
        tachyon.get_colored_name(),
        ' looks thoroughly disappointed',
      ]);
    }
    await tachyon.say_and_wait("Anyway, let's see today's stock");
  },
  /**
   * Tachyon on the team, distrust, shop visit
   * @param {CharaTalk} tachyon Tachyon
   * @param {CharaTalk} you player
   */
  start_doubt(tachyon, you) {
    tachyon.say("…So you're here. Who are you here to ruin this time?");
    print([
      'While wandering, ',
      you.get_colored_name(),
      ' spots a chestnut-haired ',
      tachyon.uma_sex_title,
      ' in a white lab coat, face oddly flushed',
    ]);
    print([
      tachyon.sex,
      ' deep crimson eyes, shuttered like blinds, hold madness and mystery—until they land on ',
      you.get_colored_name(),
      ' and turn into the look reserved for garbage. The slightly oversized lab coat is packed tight with whatever hangs inside.',
    ]);
    tachyon.say(
      "Tsk… seriously, is selling drugs to someone like you even okay? I've asked myself that dozens of times already",
    );
    tachyon.say("Whatever. Look at today's stock yourself");
  },
  /**
   * Tachyon on the team, hate, shop visit
   * @param {CharaTalk} tachyon Tachyon
   * @param {CharaTalk} you player
   */
  start_hate(tachyon, you) {
    tachyon.say('…Tsk');
    print([
      'While wandering, ',
      you.get_colored_name(),
      ' spots a chestnut-haired ',
      tachyon.uma_sex_title,
      ' in a white lab coat, looking thoroughly suspicious, ',
      tachyon.sex,
      ' deep crimson eyes, shuttered like blinds, hold madness and mystery,',
    ]);
    print([
      'but the moment ',
      you.get_colored_name(),
      ' comes into view, those eyes flip to pure hatred. The slightly oversized lab coat is packed tight with whatever hangs inside.',
    ]);
    print([
      'Glaring at ',
      you.get_colored_name(),
      ' with that hate is ',
      you.get_colored_name(),
      `'s assigned `,
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      "If better lab animals existed, I'd love to slip something into these drugs that makes life worse than death",
    );
    print([tachyon.sex, ' says something dangerous without a care']);
    tachyon.say('Browse yourself. Leave the money and get lost');
  },
  /**
   * Tachyon on the team, generic case
   * @param {CharaTalk} tachyon Tachyon
   * @param {CharaTalk} you player
   * @param {PrintedSpan} callname what Tachyon calls the player
   */
  async start(tachyon, you, callname) {
    tachyon.say(["Oh my, if it isn't ", callname, '?']);
    print([
      'While wandering, ',
      you.get_colored_name(),
      ' spots a chestnut-haired ',
      tachyon.uma_sex_title,
      ' in a white lab coat, looking thoroughly suspicious,',
    ]);
    print([
      tachyon.sex,
      ' deep crimson eyes, shuttered like blinds, hold madness and mystery; the slightly oversized lab coat is packed tight with whatever hangs inside.',
    ]);
    print([
      'That shady figure is ',
      you.get_colored_name(),
      `'s assigned `,
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      'Not your first fledgling trip anymore—you know what this is. Name your drug. Take it, and turn in the results on time the next day',
    );
    printButton('"You\'re not even pretending it isn\'t an experiment…"', 1);
    printButton(
      '"If these are experimental drugs, you shouldn\'t be charging me"',
      2,
    );
    await input();
    tachyon.say([
      "Hmm~~ If you don't mind your order getting mixed with experimental extras that make genitals glow, turn all skin transparent, or make ejaculated sperm highly corrosive, I can give them to you free",
    ]);
    print([you.get_colored_name(), ' obediently pulls out a wallet']);
    tachyon.say("That's better. Now then—today's stock");
  },
  /**
   * Final shared line when Tachyon is on the team
   * @param {CharaTalk} tachyon Tachyon
   */
  async start_final_welcome(tachyon) {
    await printAndWait([
      tachyon.get_colored_name(),
      ' opens ',
      tachyon.sex === 'She' ? 'her' : 'his',
      ' lab coat…',
    ]);
  },
  /**
   * Tachyon not on the team, pure first meeting
   * @param {CharaTalk} tachyon Tachyon
   * @param {CharaTalk} you player
   */
  async start_first_out_of_team(tachyon, you) {
    await tachyon.say_as_unknown_and_wait(
      'Oh my, a fresh fat sheep… no, guinea pig… I mean, customer',
    );
    await printAndWait([
      'While wandering, ',
      you.get_colored_name(),
      ' meets a chestnut-haired ',
      tachyon.uma_sex_title,
      ' in a white lab coat, looking thoroughly suspicious',
    ]);
    await printAndWait([
      tachyon.sex,
      ' deep crimson eyes, shuttered like blinds, hold madness and mystery,',
    ]);
    await printAndWait(
      'and the slightly oversized lab coat is packed tight with whatever hangs inside.',
    );
    await tachyon.say_as_unknown_and_wait(
      'Hahaha. Since you made it here, you clearly know what this place does.',
    );
    printButton('"No idea"', 1);
    printButton('"...No idea"', 2);
    printButton('"I know"', 3);
    switch (await input()) {
      case 1:
        await tachyon.say_as_unknown_and_wait(
          "Oh my, a pure little lamb? No problem. You'll understand once you look.",
        );
        break;
      case 2:
        await tachyon.say_as_unknown_and_wait(
          'Heh. Why bother with a lie no one believes? How dishonest.',
        );
        break;
      case 3:
        await tachyon.say_as_unknown_and_wait(
          'An honest good child… no, in this case it should be a bad child, right?',
        );
    }
    await tachyon.say_as_unknown_and_wait(
      "Then let me show you today's stock.",
    );
    await printAndWait([
      'The chestnut-haired ',
      tachyon.uma_sex_title,
      ' opens ',
      tachyon.sex === 'She' ? 'her' : 'his',
      ' lab coat…',
    ]);
  },
  /**
   * Tachyon not on the team, but recruitment chain already triggered
   * @param {CharaTalk} tachyon Tachyon
   * @param {CharaTalk} you player
   * @param {boolean} is_first first visit to the shop
   */
  async start_out_of_team(tachyon, you, is_first) {
    if (is_first) {
      await tachyon.say_as_unknown_and_wait(
        'Oh my, a fresh fat sheep… no, guinea pig… I mean, customer',
      );
    } else {
      tachyon.say(
        'Oh my, you again, Customer-kun. So Trainers are that debauched a profession? Tsk tsk',
      );
    }
    print([
      'While wandering, ',
      you.get_colored_name(),
      ' spots a chestnut-haired ',
      tachyon.uma_sex_title,
      ' in a white lab coat, looking thoroughly suspicious,',
    ]);
    print([
      tachyon.sex,
      ' deep crimson eyes, shuttered like blinds, hold madness and mystery; the slightly oversized lab coat is packed tight with whatever hangs inside.',
    ]);
    print([
      "That figure is the academy's famous problem child, ",
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait(
        "Oh? You look familiar… Mm, if I'm not mistaken, you're a Trainer",
      );
      printButton('"No"', 1);
      printButton('"...No"', 2);
      printButton('"Yes"', 3);
      switch (await input()) {
        case 1:
          await tachyon.say_and_wait(
            'Hm? Did I remember wrong…? Or was it from the black market…',
          );
          await printAndWait([
            tachyon.get_colored_name(),
            ' mutters a rather bone-chilling word',
          ]);
          break;
        case 2:
          await tachyon.say_and_wait([
            "Hahaha, relax, relax! My lips are sealed on this—I won't tell your assigned ",
            tachyon.uma_sex_title,
          ]);
          await printAndWait([
            tachyon.get_colored_name(),
            ' flashes a mysterious "I know what you mean" smile',
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            "…You admit it that cleanly? I'm starting to feel sorry for your assigned ",
            tachyon.uma_sex_title,
          ]);
          await printAndWait([
            tachyon.get_colored_name(),
            ' makes a speechless face',
          ]);
      }
    }
    tachyon.say("Anyway, let's see what stock there is today.");
    await printAndWait([
      tachyon.get_colored_name(),
      ' opens ',
      tachyon.sex === 'She' ? 'her' : 'his',
      ' lab coat…',
    ]);
  },
  /**
   * Leaving the shop, lust & friendly+, bought fewer than 3
   * @param {CharaTalk} tachyon Tachyon
   */
  end_love_buy_few(tachyon) {
    tachyon.say(
      "Eh… is that little enough? What? Questioning your stamina? No, that's not what I meant… going to punish me properly? Heh, then I'll look forward to tonight ❤️",
    );
  },
  /**
   * Leaving the shop, lust & friendly+, bought more than 10
   * @param {CharaTalk} tachyon Tachyon
   */
  end_love_buy_many(tachyon) {
    tachyon.say(
      '!? Buying that much… can you even handle it… heh, how exciting. And afterward I can observe the post-drug changes up close…',
    );
    tachyon.say('Let me enjoy myself thoroughly tonight ❤️…');
  },
  /**
   * Leaving the shop, bought fewer than 3
   * @param {CharaTalk} tachyon Tachyon
   * @param {boolean} is_first first visit to the shop
   */
  end_buy_few(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown('Oh my, is buying so little enough?');
      tachyon.say_as_unknown(
        'No, just curiosity. These things have individual variance after all—more samples would be nice… never mind',
      );
    } else {
      tachyon.say('Oh my, is buying so little enough?');
      tachyon.say(
        'No, just curiosity. These things have individual variance after all—more samples would be nice… never mind',
      );
    }
  },
  /**
   * Leaving the shop, bought more than 10
   * @param {CharaTalk} tachyon Tachyon
   * @param {boolean} is_first first visit to the shop
   */
  end_buy_many(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown(
        'Oh my, buying that much? No, just curiosity. These things still have individual variance, right…?',
      );
      tachyon.say_as_unknown(
        "Personally, I hope next time you bring usage feedback—even better if it's a proper experiment report",
      );
    } else {
      tachyon.say(
        'Oh my, buying that much? No, just curiosity. These things still have individual variance, right…?',
      );
      tachyon.say(
        "Personally, I hope next time you bring usage feedback—even better if it's a proper experiment report",
      );
    }
  },
};
