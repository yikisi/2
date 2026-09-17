/**
 * @file Symboli Rudolf - Recruit
 * @author 露娜俘虏
 * @author Katze (translator)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_start(luna, you) {
    await era.printAndWait(
      `${you.name} looked at the flooded bathroom for a moment, and shrugged.`,
    );
    await era.printAndWait(
      `Basically everything within the bathroom had stopped working. ${you.name} knew that even if they spent ages on it, there was no guarantee anything would work.`,
    );
    era.printButton('「Work sounds easier than this.」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} made a stylish retreat, slung their bag over one shoulder, and marched off to Tracen.`,
    );
    era.println();

    await era.printAndWait(
      `A new semester, at last. Whatever shadows last year had left behind, ${you.name} hoped Tracen was ready to shake them off.`,
    );
    await era.printAndWait(
      'New semester. New dreams. New chapters waiting to begin.',
    );
    await era.printAndWait(
      `While waiting for the train, ${you.name} picked up a newspaper from the platform. It showed a striking ${luna.uma_sex_title}, along with two huge words:`,
    );
    await era.printAndWait('SYMBOLI RUDOLF!');
    await era.printAndWait(
      `${you.name} let out an impressed whistle, folded the paper under one arm, and hopped aboard the train.`,
    );
    await era.printAndWait(
      '—Symboli Rudolf’s upcoming debut had become the talk of the hour.',
    );
    await era.printAndWait(
      'Offices, cafés, station platforms—if people were talking, they were talking about Rudolf.',
    );
    await era.printAndWait(
      '???「Student Council President — 【EMPEROR】 Symboli Rudolf!」',
    );
    await era.printAndWait(
      '???「Who’s lucky enough to train the Emperor, I wonder?」',
    );
    await era.printAndWait(
      `???「Though, come to think of it... does ${luna.sex} truly need a Trainer?」`,
    );
    await era.printAndWait(
      '???「The crown jewel of Symboli, famous even before setting foot on the stage. Now that’s what I call a legend in the making!」',
    );
    await era.printAndWait(
      `Each time ${you.name} heard such words, pride swelled within — as though the Emperor’s renown were somehow bound to ${you.name}.`,
    );
    await era.printAndWait(
      `To be fair, ${you.name} did have history with Symboli: a stint as one of the studs' assistant Trainers.`,
    );
    await era.printAndWait(
      `Though just merely assisted great figures from the shadows, with no chance at fame, ${you.name} managed to grow close to the young ${luna.uma_sex_title} of the Symboli family.`,
    );
    await era.printAndWait(
      `And one little whirlwind named Luna practically stuck to ${you.name} like a shadow.`,
    );
    await era.printAndWait(
      `Years had passed since ${you.name} last stepped into the Symboli estate, but old ties lingered. At Tracen, Symboli members still felt like familiar faces.`,
    );
    if (era.get('flag:当前声望') < 500) {
      await era.printAndWait(
        `Thinking back on those days filled ${you.name} with fresh resolve. Someday, ${you.name} hoped to stand beside an ${luna.uma_sex_title} just as powerful and make their name shine in Japan.`,
      );
    } else {
      await era.printAndWait(
        `${you.name} shoved those wild old memories aside and sighed up at the sky, letting out the worry tucked beneath all that pride. This term, their trainee would have to face Symboli Rudolf sooner or later. Nothing about that path would be easy—but hopefully, even stumbling wouldn’t stop 'em.`,
      );
    }
    era.println();

    await era.printAndWait(
      `When ${you.name} arrived at the academy, they found the grounds strangely empty—or rather, the gates were still shut.`,
    );
    await era.printAndWait(
      `${you.name} had miscalculated. Badly. Maybe wrestling the plumbing would’ve killed just the right amount of time.`,
    );
    await era.printAndWait(
      `Well, free time was free time. ${you.name} scaled the wall and slipped into Tracen like it was the most normal thing in the world.`,
    );
    await era.printAndWait('Tracen was dead silent.');
    await era.printAndWait(
      `${you.name} glanced around, intrigued. At this hour, the school buildings belonged to silence. Later, they’d be packed with Tracen’s usual chaos.`,
    );
    await era.printAndWait(
      `Then the silence cracked. Somewhere nearby, someone was crying.`,
    );
    await era.printAndWait(
      `For reasons they could not name, an unprecedented agitation seized ${you.name}.`,
    );
    await era.printAndWait(`${you.name}’s body reacted before the mind did.`);
    await era.printAndWait(
      'As though something deep within your soul was urging you forward.',
    );
    await you.say_and_wait('Move—now!', true);
    await you.say_and_wait(
      'I need to find that child before it’s too late!',
      true,
    );
    await era.printAndWait(
      `${you.name} sprinted into a quiet corner of campus—and by the time they stopped gasping, they realized they’d reached a private training facility.`,
    );
    await era.printAndWait('Rules could wait—!');
    await era.printAndWait(
      `${you.name} rushed in and puShed open the door left ajar.`,
    );
    era.println();
    await era.printAndWait(
      `An ${luna.uma_sex_title} lay crumpled on the ground, hands pressed to ${luna.sex === 'She' ? 'her' : 'his'} head like the pain was splitting ${luna.sex === 'She' ? 'her' : 'him'} apart.`,
    );
    await era.printAndWait(
      `${you.name} was about to ask what happened, but they froze in place.`,
    );
    await era.printAndWait(`No mistake. Symboli Rudolf.`);
    await era.printAndWait(
      `Strip away the title, the legend, the roar of the crowd—and ${luna.sex} was still just a young ${luna.teen_sex_title}.`,
    );
    await era.printAndWait(
      `The sight hit ${you.name} harder than they could handle.`,
    );
    await era.printAndWait(
      'No one would believe that the one-of-a-kind「EMPEROR」—',
    );
    await era.printAndWait('That Symboli said to be flawless—');
    await era.printAndWait(
      `The dreamer who wanted every ${luna.uma_sex_title} to race beneath the skies of “Elysium”—`,
    );
    await era.printAndWait(
      `Could end up alone, sobbing and sick where no one would find ${luna.sex === 'She' ? 'her' : 'him'}. But that wasn’t what shook ${you.name} most...`,
    );
    era.printButton('「Wait, you’re—」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} wondered if they’d finally snapped. But no—there was no mistaking that child.`,
    );
    await era.printAndWait(
      '—That clumsy, hotheaded kid who acted like a little lion.',
    );
    await era.printAndWait(
      '—That proud child who never admitted defeat and dragged you to the ends of the earth.',
    );
    await era.printAndWait(
      '—That bossy yet adorable child who swore never to forget you.',
    );
    await era.printAndWait(
      `${luna.sex === 'She' ? 'her' : 'His'} name was etched into ${you.name}’s soul.`,
    );
    await era.printAndWait(
      `${you.name} would never forget ${luna.sex === 'She' ? 'her' : 'his'} name.`,
    );
    era.printButton('「Luna!」', 1);
    await era.input();

    await era.printAndWait(
      `Barely able to move, the ${luna.teen_sex_title} raised ${luna.sex === 'She' ? 'her' : 'his'} eyes to you.`,
    );
    await luna.say_and_wait(`...${you.actual_name}...?`);
    await era.printAndWait(
      `With that, ${luna.sex} finally seemed to reach ${luna.sex === 'She' ? 'her' : 'his'} limit and collapsed unsteadily to the ground.`,
    );
    await era.printAndWait(
      `${you.name} moved before fear could catch up, crossing the distance in an instant to hold ${luna.sex === 'She' ? 'her' : 'him'}.`,
    );
    await luna.say_and_wait('You really came......');
    await era.printAndWait(
      `With those words, ${luna.sex} sank into a heavy, hazy sleep.`,
    );

    era.drawLine();
    await era.printAndWait(
      `Before the world called ${luna.sex === 'She' ? 'her' : 'him'} Symboli Rudolf, ${luna.sex} was simply Luna.`,
    );
    await era.printAndWait(
      `${luna.sex} loved to run, loved anything sweet, and loved doing absolutely nothing at all.`,
    );
    await era.printAndWait(
      `Before expectations turned ${luna.sex === 'She' ? 'her' : 'him'} into a symboli, ${luna.sex} was the family’s pampered little troublemaker.`,
    );
    await era.printAndWait(
      'Then Luna’s talent began to show—brilliant, razor-edged, impossible to ignore. The Symboli family could hardly contain their excitement.',
    );
    await era.printAndWait(
      `${luna.sex} had power to spare—enough for every dream, every demand, every hunger the family laid at ${luna.sex === 'She' ? 'her' : 'his'} feet.`,
    );
    await era.printAndWait(
      `Luna remembered: from a certain day onward, ${luna.sex === 'She' ? 'her' : 'his'} life had changed.`,
    );
    await era.printAndWait(`Luna was gone. What remained was Symboli Rudolf.`);
    await era.printAndWait(
      'But you can’t just wake up one day as someone else... can you?',
    );
    await era.printAndWait(
      `Luna wrestled with it endlessly. Then, one day, ${luna.sex}—`,
    );
    era.printButton('「Luna... Luna...!」', 1);
    await era.input();

    await era.printAndWait(
      `At last, ${you.name}’s voice reached ${luna.sex === 'She' ? 'her' : 'him'}, and Luna drifted back to consciousness.`,
    );
    await era.printAndWait(
      `${luna.sex} smiled like it hurt. So ${luna.sex} really had broken, then—because there was no way ${you.actual_name_with_title}’s voice could be here.`,
    );
    await era.printAndWait(
      `${you.sex} was at Tracen, yes—but ever since that day, Luna had resolved never to drag ${you.sex} into this again.`,
    );
    await era.printAndWait(
      `But then ${luna.sex} quickly realized ${luna.sex} wasn’t dreaming.`,
    );
    era.drawLine();
    era.printButton('「Luna... it’s really you, isn’t it?」', 1);
    era.printButton('「Luna... you are Symboli Rudolf?!」', 2);
    await era.input();
    await era.printAndWait(
      `With Luna held against them, the question slipped out before ${you.name} could stop it.`,
    );
    await luna.say_and_wait('You finally found me.');
    await era.printAndWait(
      `As if accepting fate, Luna gave a bitter smile. Then ${luna.sex} wept from joy.`,
    );
    await luna.say_and_wait(
      'If only you’d come sooner, maybe I wouldn’t have... Go. Keep this to yourself. An Emperor is not allowed to be weak.',
    );
    await era.printAndWait(
      `Before Luna could finish—or before ${you.name} could answer—${luna.sex} puShed you out of that place.`,
    );
    await era.printAndWait(
      `Yet ${you.name} knew with certainty: ${luna.sex} had recognized you too.`,
    );
  },
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_end(luna, you) {
    await era.printAndWait(
      `For the next several days, ${you.name} wandered as though their soul had been left behind.`,
    );
    await era.printAndWait(
      `f Luna didn’t want to see you, you wouldn’t go see ${luna.sex === 'She' ? 'her' : 'him'}.`,
    );
    await era.printAndWait(
      `All this time, ${you.name} had never been able to defy ${luna.sex === 'She' ? 'her' : 'his'} wiShes. Even grown now, even as a Trainer, the moment ${luna.sex} spoke, you would obey—whatever ${luna.sex} asked.`,
    );
    await era.printAndWait(
      `Just as ${you.name} was stewing in nerves, a student council officer came barreling into the Trainer office like they had breaking news.`,
    );
    await era.printAndWait(
      `${luna.sex} wasn’t exactly there to talk. ${luna.sex} was there to deliver a letter—with your name on it.`,
    );
    await era.printAndWait(
      'Council Cabinet「You’ve been personally summoned by the Student Council President—Symboli Rudolf.」',
    );
    await era.printAndWait(
      `${luna.sex} practically sparkled with excitement as they shoved the letter into ${you.name}’s hands.`,
    );
    await era.printAndWait(
      `${you.name} smiled weakly and accepted the hot potato disguised as mail.`,
    );
    await era.printAndWait(
      `Delivery complete, the cabinet disappeared at full speed. ${you.name} mumbled something that sounded like an excuse and clocked out early.`,
    );
    await era.printAndWait(
      `Then ${you.name} returned as quickly as possible to the home they had not visited in days, and shut the door tight behind them.`,
    );
    await era.printAndWait(
      `${you.name} ran into the bathroom at the back of the house and pressed their back against the door.`,
    );
    await era.printAndWait(
      `${you.name}’s fingers wouldn’t stop shaking. It took everything they had to rip the envelope open.`,
    );
    await era.printAndWait(
      `${you.name} pulled out the page. Blank white paper—except for two words, written like a scream:`,
    );
    await era.printAndWait('「HELP ME」', {
      align: 'center',
      color: luna.color,
      fontSize: '3rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait(
      `${you.name} slid down to the floor in defeat. The bathroom flood had been waiting, and now the brand-new pants were paying the price.`,
    );
    await era.printAndWait(`${you.name} knew there was only one answer.`);
    await era.printAndWait(
      `But ${you.name} had no idea what had happened to Symboli Rudolf. To Luna.`,
    );
    await era.printAndWait(
      `But one thing was clear: if Luna called, ${you.name} would answer.`,
    );
    await era.printAndWait('No matter what hell awaited you both ahead.');

    era.drawLine();
    await era.printAndWait([
      you.name,
      ' signed a training contract with ',
      luna.get_colored_actual_name(),
      '.',
    ]);
  },
};
