/**
 * @file Agnes Digital - Recruitment
 * @author 片手虾好评发售中！
 * @author Katze(translator)
 */
const era = require('#/era-electron');

module.exports = {
  rec_start: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      const ret = [];
      await era.printAndWait(
        `The training grounds, normally the bustling proving ground where ${digital.uma_sex_title} run their daily drills, were packed wall-to-wall with Trainers today. Beyond routine workouts, everyone was gathered for a high-stakes event—the Mock Races.`,
      );
      await era.printAndWait(
        `For an aspiring ${digital.uma_sex_title} yearning to scout an exceptional Trainer, showing their raw talent on the track was essential, and the Mock Races were the ultimate stage.`,
      );
      await era.printAndWait([
        'As an active Trainer, ',
        you.get_colored_name(),
        ' kept a keen eye on the galloping ',
        digital.uma_sex_title,
        ', but suddenly caught sight of a vivid splash of pink tucked away in the shadows of the grandstand.',
      ]);
      era.println();
      await you.say_and_wait(`Wait... An ${digital.uma_sex_title}?`);

      await era.printAndWait(
        `\nIn principle, every uncontracted ${digital.uma_sex_title} took part in the Mock Races, while those who already had a partner rarely gave a second glance to such unranked heats.`,
      );
      await era.printAndWait(
        `${you.name} decided to head over and investigate.`,
      );
      await digital.say_and_wait(
        `Ehehehe... The crossing strides! The breathless panting! The clash of unyielding resolve! And that fateful encounter waiting in the wings! It's so... SO BLESSED, I COULD DIE...!`,
      );
      await era.printAndWait(
        `As ${
          you.name
        } circled up the back stairs to the grandstand, there stood a pink-haired ${digital.uma_sex_title} sporting an eye-catching red bow. Right now, ${digital.sex.toLowerCase()} had both arms thrust into the sky... wotagei cheering?`,
      );

      era.println();
      await era.printAndWait(`${you.name}'s Choice:`);
      era.printButton('(Nobody cheers harder or braver than me!)', 1);
      era.printButton(
        `「Aren't you an ${digital.uma_sex_title}? Why are you up here in the stands?」`,
        2,
      );
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          `${you.name} whipped out glowing penlights from an imaginary stash, and then...`,
        );
        await era.printAndWait(
          `Busted out a ferocious wotagei routine right in front of ${digital.sex === 'She' ? 'her' : 'him'}!`,
        );
        await you.say_and_wait(`U-Hai! O-Hai!... U-Yo-Hai!`);
        await era.printAndWait(
          `Swinging the glowsticks like pounding mochi, transferring pure explosive torque from the legs and hips straight through the arms—that's how you unleash the supreme otaku chant!`,
        );
        await digital.say_and_wait(
          `Huh?! Is someone actually here?! No way, for real...?!`,
        );
        await era.printAndWait(
          `Letting out a startled squeak, the pink ${digital.uma_sex_title} looked wildly around, spun on ${digital.sex === 'She' ? 'her' : 'his'} heels, and locked eyes with you.`,
        );
        await digital.say_and_wait(
          `WHOA! Bringing live concert-tier wotagei straight to the racetrack?! That's magnificent! You... you've GOT to be a Trainer who truly, passionately reveres ${digital.uma_sex_title}!`,
        );
        await era.printAndWait(
          `Naturally—${you.name} is an elite Tracen Trainer, after all. ${you.name} proudly holstered the penlights.`,
        );
        await you.say_and_wait(
          `Which brings me to my question: why aren't you running down in the Mock Races?`,
        );
        await digital.say_and_wait(
          `Huh?! Who, little ol' me?! Nonononono! I'm just your dime-a-dozen, background-mob racing ${digital.uma_sex_title} ${
            digital.name
          }! I'm nowhere near worthy of gracing a real track alongside the stars!`,
        );
        await era.printAndWait(
          `${digital.sex} flailed ${digital.sex === 'She' ? 'her' : 'his'} hands frantically, desperate to insist that ${digital.sex.toLowerCase()} was completely out of place on the track.`,
        );
      } else {
        await digital.say_and_wait(
          `WAAAHHH! My deepest apologies! I'm so sorry for subjecting your eyes to something so unspeakably hideous! I'll vacate the premises immediately!`,
        );
        await era.printAndWait(
          `${digital.sex} flapped ${digital.sex === 'She' ? 'her' : 'his'} arms in total panic, looking ready to bolt on the spot.`,
        );
        await you.say_and_wait(`Hold on a second!`);
        await digital.say_and_wait(`Eeep?!`);
        await you.say_and_wait(`Aren't you entering the Mock Races?`);
        await digital.say_and_wait(
          `Muri muri muri! Absolutely impossible! I'm just a standard mob ${digital.uma_sex_title} named ${
            digital.name
          }! I couldn't possibly get in the way of ${
            digital.couple_title
          }! Digi-tan is more than content worshiping from afar! Divine angels like ${digital.uma_sex_title} must only be revered from a respectful distance!`,
        );
        await era.printAndWait(
          `Sure enough, ${digital.sex} was shaking ${digital.sex === 'She' ? 'her' : 'his'} head back and forth like a pellet drum on overdrive.`,
        );
      }
      await era.printAndWait(
        `${you.name} couldn't quite fathom ${digital.sex === 'She' ? 'her' : 'his'} bizarre logic. ${
          digital.sex
        } was clearly fanatical about ${digital.uma_sex_title}, yet vehemently refused to get near them—even though ${digital.sex.toLowerCase()} was an ${digital.uma_sex_title} ${digital.sex === 'She' ? 'herself' : 'himself'}.`,
      );
      await you.say_and_wait(
        `Why not enter the races and appreciate ${digital.couple_title} up close from the turf?`,
      );
      await digital.say_and_wait(
        `Huh?! I mean, logically speaking that makes tons of sense, but... I can't debut!`,
      );
      await digital.say_and_wait(
        `If I debut, I... I-I-I won't be able to stan my idols on the other side up close anymore!`,
      );
      await digital.say_and_wait(
        `That's totally unacceptable to my soul! Whether they're galloping across the turf or tearing through the dirt, every single ${digital.uma_sex_title} is peak perfection!`,
      );
      await digital.say_and_wait(`AUUUGGGHHH...!`);
      await era.printAndWait(
        `${digital.sex} clutched ${digital.sex === 'She' ? 'her' : 'his'} head, writhing as if ${digital.sex === 'She' ? 'her' : 'his'} brain was undergoing critical meltdown.`,
      );
      await era.printAndWait(
        `While the core reasoning remained baffling, ${digital.sex} seemed genuinely tormented by having to pick between turf and dirt.`,
      );
      await era.printAndWait(
        `To be fair, nobody had ever heard of an ${digital.uma_sex_title} who could conquer both tracks with equal dominance—at least not in the Central League.`,
      );
      await digital.say_and_wait(`So... gotta dash!`);
      await era.printAndWait(
        `Why refuse the Mock Races? Finding the ideal Trainer, debuting, and carving your name into the annals of history—isn't that the sacred dream of every ${digital.uma_sex_title}?`,
      );
      return ret;
    };
    f.title = 'A Total Degenerate?! Is She... Really? (Part 1)';
    return f;
  })(),
  rec_end: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      await era.printAndWait(
        `Thoroughly intrigued by ${digital.name}, ${you.name} dropped by the public training grounds the day after the Mock Races—and luckily managed to catch ${digital.sex === 'She' ? 'her' : 'him'} in action.`,
      );
      await digital.say_and_wait(
        `Fuhehehe, ehehe... This is the sacred dirt where my beloved ${digital.uma_sex_title} ran! To sprint upon this holy, inviolable soil with my own mortal body... The Three Goddesses have truly blessed this otaku...`,
      );
      await era.printAndWait(
        `Driving powerfully into the dirt, ${digital.sex === 'She' ? 'her' : 'his'} muscular legs kicked up plumes of dust with explosive traction. ${digital.sex} looked born to rule the dirt track.`,
      );
      await digital.say_and_wait(
        `Aahaa~! And the lush turf where the lovely uma-chans gallop... This is pure heaven! With form like this, no matter how the race unfolds, top honors are in the bag... All my good karma is finally paying off~`,
      );
      await era.printAndWait(
        `Wiping the sweat from ${digital.sex === 'She' ? 'her' : 'his'} brow, ${digital.sex} threw ${digital.sex === 'She' ? 'her' : 'his'} head back in booming laughter, utterly blissed out.`,
      );
      await era.printAndWait(
        `Wait a second... did Digital just switch gears straight into a full turf sprint?! Hold on, doesn't that mean...`,
      );
      await era.printAndWait(
        `To master both surfaces with such effortless finesse, ${digital.sex} must be enduring double the grueling training of anyone else!`,
      );
      era.println();
      await you.say_and_wait(
        `Sitting on monster talent like that and skipping the Mock Races?! That's a total crime against racing!`,
      );
      era.println();
      await digital.say_and_wait(
        `No no no no! If I ran in those, my brain would pop like popcorn from extreme fangirl overload!`,
      );
      await digital.say_and_wait(`Wait... huh?! Eeeeek, why are you here?!`);
      await era.printAndWait(
        `Perhaps because ${you.name} had left a favorable impression before, or simply because ${digital.sex} wanted to clear the air, ${digital.sex} gestured to step aside for a private chat.`,
      );
      era.drawLine();
      await era.printAndWait(
        `Following ${digital.sex}, ${you.name} walked up to the grandstand.`,
      );
      await era.printAndWait(
        `Most Trainers observe workouts right along the rails, leaving the grandstand quiet and largely deserted.`,
      );
      await era.printAndWait(
        `Leaning ${digital.sex === 'She' ? 'her' : 'his'} elbows on the railing, Digital gazed fondly at the ${digital.uma_sex_title} training on the track below.`,
      );
      era.println();
      await digital.say_and_wait(
        `Truth be told... I run entirely fueled by my wildest idol delusions.`,
      );
      await era.printAndWait(
        `Saying this, Digital adopted a surprisingly solemn, philosophical expression.`,
      );
      await you.say_and_wait(`Idol delusions?`);
      await digital.say_and_wait(
        `Huh? Did I drop obscure otaku terminology? Well, to put it simply...`,
      );
      await era.printAndWait(
        `${
          digital.sex
        } launched into an unstoppable, impassioned monologue about ${digital.sex === 'She' ? 'her' : 'his'} bottomless devotion to ${digital.uma_sex_title}—how ${digital.sex.toLowerCase()} fell head over heels, trained like a demon to pass the Tracen entrance exam, and then, right when ${digital.sex.toLowerCase()} was gearing up to debut...`,
      );
      await digital.say_and_wait(
        `As you saw, my aptitude for both turf and dirt is totally top-notch! But precisely because I can do both, I just can't pick! Choosing one means brutally abandoning the other!`,
      );
      await era.printAndWait(
        `Digital threw ${digital.sex === 'She' ? 'her' : 'his'} hands up in dramatic, helpless despair.`,
      );
      await digital.say_and_wait(
        `Every single uma-chan has divine charms on each track! Every single one is so blessed and precious!`,
      );
      await digital.say_and_wait(
        `I refuse to compromise my worship! So I tossed aside all resolve and chose neither!`,
      );
      await digital.say_and_wait(`Aaaahahahaha!`);
      await era.printAndWait(
        `Hands on ${digital.sex === 'She' ? 'her' : 'his'} hips, head tilted to the sky, ${digital.sex} burst into defiant, self-mocking laughter.`,
      );
      await digital.say_and_wait(
        `Well? Pretty pathetic, right? I'm just a racing ${digital.uma_sex_title} who's completely lacking in true grit and resolve!`,
      );
      await you.say_and_wait(`Lacking resolve, huh...`);
      await era.printAndWait(
        `As a Trainer, ${
          you.name
        } had seen and heard plenty of dirt runners and sprinters lamenting that they couldn't compete in the Twinkle Series' marquee mid-distance turf showcases.`,
      );
      await era.printAndWait(
        `Yet in the end, ${digital.couple_title} all realized that the profound meaning and intrinsic honor of racing itself far eclipsed mere fame.`,
      );
      await era.printAndWait(
        `And what about this ${digital.uma_sex_title}? The runner calling ${digital.sex === 'She' ? 'herself' : 'himself'} ${
          digital.name
        } was torn to pieces over not being able to race both turf and dirt—yet unlike anyone else, ${
          digital.sex
        } actually possessed the god-given talent to do it.`,
      );
      await era.printAndWait(
        `What's more... ${digital.sex.toLowerCase()} had been sweating blood with double the effort to back it up.`,
      );
      await digital.say_and_wait(
        `Ehehe, left you speechless, didn't I? Well then, I'll be on my way~`,
      );
      era.println();
      await you.say_and_wait(
        `No—if anything, you're the one with the fiercest resolve of all!`,
      );
      await digital.say_and_wait(`Huh?! What on earth do you mean by that?`);
      await era.printAndWait(
        `It was undeniable. Just moments ago, that petite frame had conquered the dirt with ferocious power.`,
      );
      await era.printAndWait(
        `And then glided across the turf with silky grace, every bit as magnificent.`,
      );
      await era.printAndWait(
        `Unable to choose, ${digital.sex} had poured ${digital.sex === 'She' ? 'her' : 'his'} entire soul into mastering both disciplines up to this very second.`,
      );
      await era.printAndWait(
        `That unyielding devotion can be turned into the ultimate weapon right here, right now!`,
      );
      await you.say_and_wait(`The resolve to refuse choosing!`);
      await era.printAndWait(
        `Indeed—refusing to choose is a choice in itself. But the "refusal to choose" ${digital.sex.toLowerCase()} spoke of demands double the sweat, tears, and dedication!`,
      );
      await digital.say_and_wait('Huh?');
      await you.say_and_wait(
        `Refusing to choose! If you don't compromise between turf and dirt, doesn't that mean you're choosing BOTH turf AND dirt?!`,
      );
      await era.printAndWait(
        `Digital froze solid, ${digital.sex === 'She' ? 'her' : 'his'} usually drooping tail snapping dead rigid.`,
      );
      await digital.say_and_wait(
        'Wait... Choosing both turf AND dirt? You mean...?',
      );
      await you.say_and_wait(
        `Exactly. A dual-surface runner! The ultimate all-rounder!`,
      );
      await digital.say_and_wait(
        "No, no, no, no way! That's completely impossible!",
      );
      await digital.say_and_wait(
        "A dual-surface all-rounder?! You couldn't even write that in manga without getting laughed out of the room!",
      );
      await era.printAndWait(
        'Hmm, is it really that far-fetched after all...?',
      );
      await digital.say_and_wait('ARE YOU AN ABSOLUTE GENIUS OR WHAT?!');
      await digital.say_and_wait(
        `I can gaze upon ${digital.uma_sex_title} tearing up the turf AND witness ${digital.uma_sex_title} kicking up dirt clouds up close and personal in the same race career?!`,
      );
      await digital.say_and_wait(
        'HEYYYYAAAAA——!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
      );
      await era.printAndWait(
        `Before ${you.name} could even react to the hyper-speed barrage of words, ${digital.sex} had already spun a frantic 360-degree circle with arms raised high, howling at the top of ${digital.sex === 'She' ? 'her' : 'his'} lungs.`,
      );
      await era.printAndWait(
        `Now that the concept had fully sunk in, did ${digital.sex.toLowerCase()} genuinely intend to rise to the challenge?!`,
      );
      await digital.say_and_wait(
        `Has all my daily devoted worship of the uma-chans finally yielded glorious, bountiful fruit?!`,
      );
      await digital.say_and_wait('UWOOOHHH——!');
      await digital.say_and_wait(
        "IT'S DECIDED! Digi-tan is going to become the Supreme All-Rounder!",
      );
      await digital.say_and_wait(
        'All so I can achieve ultra-close, front-row communion with every single one of my beloved idols!',
      );
      await you.say_and_wait(
        `Now this is getting truly thrilling. What do you say—will you join my team as my trainee?`,
      );
      await era.printAndWait(`${you.name} extended a firm right hand.`);
      await era.printAndWait(
        `Even after witnessing ${digital.sex === 'She' ? 'her' : 'his'} dazzling performance on both turf and dirt, real races are a ferocious battleground far removed from practice. Wondering just how far ${digital.sex === 'She' ? 'her' : 'his'} future could soar ignited a fiery curiosity within you.`,
      );
      await digital.say_and_wait(
        `...J-Just to make this crystal clear, my only objective is to stan my idols from the closest possible vantage point, so please don't go heaping huge expectations on me...`,
      );
      await era.printAndWait(`Getting cold feet before we've even begun...?`);
      await era.printAndWait(
        `Yet the flame in ${digital.sex === 'She' ? 'her' : 'his'} eyes burned with fierce conviction as ${digital.sex === 'She' ? 'her' : 'his'} soft hand gripped yours tight.`,
      );
      await era.printAndWait(
        `Eccentric as ${digital.sex.toLowerCase()} might be, ${digital.sex} was destined to ignite an unprecedented sensation across the racing world—of that, ${you.name} was absolutely convinced.`,
      );
    };
    f.title = 'A Total Degenerate?! Is She... Really? (Part 2)';
    return f;
  })(),
};
