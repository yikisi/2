/**
 * @file Agnes Digital - Training
 * @author 片手虾好评发售中！
 * @author Katze(translator)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {number|undefined} japa_dir_rank Japan Dirt Derby Rank
   */
  async race_start(digital, japa_dir_rank) {
    const buffer = [
      () =>
        digital.say_and_wait([
          `A confident uma-chan, a nervous uma-chan, and a cool-headed girl with a fire burning in her heart... Haaah... Hehehe...`,
        ]),
      () =>
        digital.say_and_wait([
          `No matter how I look at it, isn't it wild for someone like me to share a track with these `,
          digital.uma_sex_title,
          `s?`,
        ]),
    ];
    if (era.get('mark:19:淫纹') > 0) {
      buffer.push(() =>
        digital.say_and_wait(
          `Wait, doesn't Digi-tan's racing outfit show my stomach?! Oh no, oh no! Can I hide it? How do I hide it? Is there even a way to hide it?!`,
        ),
      );
    }
    if (japa_dir_rank <= 3) {
      buffer.push(() =>
        digital.say_and_wait(
          `I want to run a race worthy of my rivals, as a true competitor.`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  race_end_win: (() => {
    const title = 'Race Victory';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     */
    const f = async (digital, you) => {
      await digital.say_and_wait(
        `Kyaaaah! Every single one of them was radiating pure, blinding divinity!`,
      );
      await era.printAndWait([
        `Fresh off the track, `,
        digital.get_colored_name(),
        ` looks so full of life you would never guess `,
        digital.sex.toLowerCase(),
        ` just pushed through a grueling race. `,
        digital.sex,
        ` practically glows with boundless otaku energy.`,
      ]);
      await digital.say_and_wait([
        `Running side by side with `,
        digital.uma_sex_title,
        `-chans... It really is the ultimate bliss...!`,
      ]);
      await digital.say_and_wait(
        `And to take first place on top of that! I accept this with all the gratitude in my heart!`,
      );
      era.printButton(`"You were the brightest star out there!"`, 1);
      era.printButton(`"Keep up this momentum for the next race, too!"`, 2);
      if ((await era.input()) === 1) {
        await digital.say_and_wait([
          `Huh? W-Wait, seriously?! Surrounded by all those incredible `,
          digital.uma_sex_title,
          `s, I'm basically just part of the background scenery... Were you really watching me?`,
        ]);
        await era.printAndWait(
          `You have seen this flustered reaction countless times by now.`,
        );
        await you.say_and_wait(`Of course I was. You're my pony, after all.`);
        await digital.say_and_wait(`Uuuu...`);
        await digital.say_and_wait(
          `Hearing that from you makes my heart beat right out of my chest...`,
        );
        await era.printAndWait(
          `And watching ${digital.sex === 'She' ? 'her' : 'him'} squirm never gets old.`,
        );
      } else {
        await digital.say_and_wait(
          `Right! If I want to carry this fire into the next race, I have to get even stronger! Power!`,
        );
        await digital.say_and_wait([
          `The stronger I get, the closer I can get to watching even more dazzling `,
          digital.uma_sex_title,
          `-chans in the fiercest races!`,
        ]);
        await era.printAndWait(`That's the spirit! Keep pushing forward!`);
        await digital.say_and_wait(`Ei, ei, mun!`);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'Placing on the Board';
    /** @param {CharaTalk} digital Agnes Digital */
    const f = async (digital) => {
      await digital.say_and_wait(
        `Mhm, I see... Their brilliance was just a little out of reach today...`,
      );
      await era.printAndWait([
        `Even after falling short of the win, `,
        digital.get_colored_name(),
        ` doesn't seem discouraged in the slightest.`,
      ]);
      await digital.say_and_wait(
        `Uu... As expected, a fan like me shouldn't be intruding on their stage...`,
      );
      await era.printAndWait(`Hold on a second.`);
      era.printButton(
        `"Did you get a good look at the other ${digital.uma_sex_title}s today?"`,
        1,
      );
      era.printButton(
        `"Next time, let's admire ${digital.couple_title}s from the very front of the pack!"`,
        2,
      );
      if ((await era.input()) === 1) {
        await digital.say_and_wait(`Oh! YEa! Digi can do this!`);
        await era.printAndWait(`What does that even mean?`);
      } else {
        await digital.say_and_wait([
          `If I'm running in the front, then I can definitely admire those gorgeous `,
          digital.uma_sex_title,
          `-chans from the best front-row seat imaginable!`,
        ]);
        await era.printAndWait([
          `Whatever the logic, `,
          digital.get_colored_name(),
          ` perks right back up.`,
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'Debut Race Begins!';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait([
        `Testing, one two! Is this on? I'm `,
        digital.get_colored_name(),
        `! In this season of fresh green buds, how is everyone holding up? Right now, I'm standing in the paddock for my debut race, and all around me...`,
      ]);
      await digital.say_and_wait([
        `Digi... Digi is surrounded by `,
        digital.uma_sex_title,
        `-chans! Or rather, Digi has infiltrated the ranks of the `,
        digital.uma_sex_title,
        `-chans!`,
      ]);
      await digital.say_and_wait([
        `I'm going to die of cuteness... `,
        callname,
        `!?Can you see this?! Look at all of 'em!`,
      ]);
      await era.printAndWait([
        `You can see them clearly. Some `,
        digital.uma_sex_title,
        `s are trembling with pre-race jitters, while others burn with quiet resolve. But the most unmistakable figure among them...`,
      ]);
      await era.printAndWait([
        `is `,
        digital.get_colored_name(),
        `, cupping ${digital.sex === 'She' ? 'her' : 'his'} cheeks and soaking in the scene with an intense, predatory gaze.`,
      ]);
      await digital.say_and_wait([
        `Just how divine can `,
        digital.couple_title,
        ` get?! My moe radar is spinning out of control, and yet here I am, actually breathing the same air!`,
      ]);
      await digital.say_and_wait(
        `Haaah... toutoi...! Digi is turning to ash...`,
      );
      await you.say_and_wait(
        `Your race is about to start! Pull yourself together!`,
      );
      await digital.say_and_wait(
        `Wah! Right! Now is not the time to ascend to umaheaven!`,
      );
      await digital.say_and_wait([
        `Right now, I'm standing shoulder to shoulder with these `,
        digital.uma_sex_title,
        `-chans. I can't let my presence drag down `,
        digital.couple_title,
        `!`,
      ]);
      await digital.say_and_wait(
        `I'll give it everything I have! Energy charged! Diagnostics clear! Fangirl drive running at maximum output!`,
      );
      await digital.say_and_wait([
        `My eyes are high-speed shutters. I'll burn every single smile and tear from these `,
        digital.uma_sex_title,
        `-chans into my memory forever!`,
      ]);
      await era.printAndWait([
        `Armed with newfound resolve, `,
        digital.get_colored_name(),
        ` heads onto the track.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'Debut Race Victory';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} hyac_sta Hyacinth Stakes
     */
    const f = async (digital, you, callname, hyac_sta) => {
      await era.printAndWait([
        `In ${digital.sex === 'She' ? 'her' : 'his'} debut race, `,
        digital.get_colored_name(),
        ` claims a brilliant first-place finish. And yet...`,
      ]);
      await era.printAndWait([
        `You expected `,
        digital.get_colored_name(),
        ` to squeal with joy and dissolve into ash like usual. Instead, ${digital.sex.toLowerCase()} stands in quiet, reverent silence. Even ${digital.sex.toLowerCase()} has moments like this.`,
      ]);
      await digital.say_and_wait(
        `...It was both the starting point and the peak...`,
      );
      await digital.say_and_wait(
        `The crash of the starting gate, the razor-thin timing, the blur of kicking legs...`,
      );
      await digital.say_and_wait(
        `Flying sweat, a mind emptied by sheer adrenaline, and then, as the roar of the crowd receded, nothing left but the numbers shining on the board...`,
      );
      await era.printAndWait([
        `Who knew `,
        digital.get_colored_name(),
        ` could express ${digital.sex === 'She' ? 'her' : 'his'} feelings with such raw, heartfelt sincerity?`,
      ]);
      await digital.say_and_wait(
        `It was so moving! Everything about it brings tears to your eyes, doesn't it?!`,
      );
      era.printButton(
        `"It really does. Congratulations on your first victory."`,
        1,
      );
      await era.input();
      await digital.say_and_wait([
        `Aaaah, while running, Digi was completely swallowed by the raw emotions pouring from all the other uma-chans! I...`,
      ]);
      await digital.say_and_wait(
        `I completely underestimated debut races! Out here, every single runner is a winner! Every last one!`,
      );
      await digital.say_and_wait(
        `When an event overflows with so much genuine emotion, anyone who runs walks away fulfilled, right?`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` is overjoyed. From ${digital.sex === 'She' ? 'her' : 'his'} stride during the race to ${digital.sex === 'She' ? 'her' : 'his'} words now, everything proves how deeply ${digital.sex.toLowerCase()} loves racing.`,
      ]);
      await digital.say_and_wait([
        callname,
        `, today was just the beginning, right?! There are so many more races ahead, right?! I'll get to meet even more `,
        digital.uma_sex_title,
        `-chans, won't I?!`,
      ]);
      await you.say_and_wait([
        `That's right. There are countless `,
        digital.uma_sex_title,
        `s waiting out there for you.`,
      ]);
      await digital.say_and_wait(
        `Incredible! I stepped right into paradise! And here I always thought this was holy ground where someone like me should never dare tread!`,
      );
      await digital.say_and_wait([
        `Next time, I want to see even more of those `,
        digital.uma_sex_title,
        `-chans!`,
      ]);
      await you.say_and_wait(`How about trying a turf race next time?`);
      await digital.say_and_wait(
        `Wait, this was dirt, and the next is turf...? Sorry, I got ahead of myself. I was so happy my common sense flew straight into orbit.`,
      );
      await digital.say_and_wait(
        `I want to run another dirt race first and soak in this atmosphere one more time!`,
      );
      await era.printAndWait([
        `After talking it over, you both agree on the next target: the new year's `,
        hyac_sta,
        `.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_42: (() => {
    const title = 'Watching the Mile Championship';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} halo King Halo
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} call_58 What Agnes Digital calls Meisho Doto
     * @param {PrintedSpan} call_61 What Agnes Digital calls King Halo
     * @param {PrintedSpan} mile_cha Mile Championship
     */
    const f = async (
      digital,
      doto,
      halo,
      you,
      callname,
      call_58,
      call_61,
      mile_cha,
    ) => {
      await era.printAndWait([
        `Although `,
        digital.get_colored_name(),
        ` is still in ${digital.sex === 'She' ? 'her' : 'his'} debut year with few races available, for the rest of the academy, this is the height of the racing calendar.`,
      ]);
      await era.printAndWait([
        `Today, `,
        you.get_colored_name(),
        ` and `,
        digital.get_colored_name(),
        ` arrive to watch the `,
        mile_cha,
        `.`,
      ]);
      await era.printAndWait([
        `Running in this race is one of `,
        digital.get_colored_name(),
        `'s long-standing idols, `,
        halo.get_colored_name(),
        `.`,
      ]);
      await digital.say_and_wait([callname, `Over here, over here!`]);
      await era.printAndWait([
        digital.get_colored_name(),
        `, having claimed a prime spot in the stands, waves frantically at `,
        you.get_colored_name(),
        `, who squeezes through the roaring crowd.`,
      ]);
      await digital.say_and_wait([`It's starting! Look, it's `, call_61, `!`]);
      await era.printAndWait(`The gates burst open.`);
      await you.say_as_passer_by_and_wait('Commentator', [
        `Coming up fast from the back is `,
        halo.get_colored_name(),
        `! Surging down the outside, `,
        halo.get_colored_name(),
        ` takes second place!`,
      ]);
      await you.say_as_passer_by_and_wait('Commentator', [
        `Coming up fast from the back is `,
        halo.get_colored_name(),
        `! Surging down the outside, `,
        halo.get_colored_name(),
        ` takes second place!`,
      ]);
      await era.printAndWait([
        `Second place is a remarkable result given `,
        halo.get_colored_name(),
        `'s recent struggles.`,
      ]);
      await halo.say_and_wait(
        `To all my loyal fans across the nation: though I fell just short of victory, do not despair.`,
      );
      await halo.say_and_wait(
        `I shall shatter every limitation! From this moment on, I walk the path of sprints and miles. That is the true path of King! Ohohoho!`,
      );
      await digital.say_and_wait(
        `Oooohhh... I'm crying! Choosing a brand-new path takes such unbelievable courage and resolve!`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` wipes away hot tears of inspiration as ${digital.sex.toLowerCase()} recounts `,
        halo.get_colored_name(),
        `'s career to `,
        you.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ` originally focused on Classic distances to prove ${digital.sex === 'She' ? 'her' : 'his'} pedigree, but this year ${digital.sex.toLowerCase()} boldly changed course.`,
      ]);
      await digital.say_and_wait(
        `Whatever path she chooses, every step is proof of her greatness!`,
      );
      await era.printAndWait([
        `Ever since `,
        digital.get_colored_name(),
        ` debuted, ${digital.sex === 'She' ? 'her' : 'his'} perspective has broadened. ${digital.sex} now watches the track through the eyes of a fellow runner.`,
      ]);
      await era.printAndWait([
        `Because `,
        digital.get_colored_name(),
        ` wanted so desperately to see `,
        halo.get_colored_name(),
        ` rewarded for ${halo.sex === 'She' ? 'her' : 'his'} hard work, ${digital.sex.toLowerCase()} came in person. And when `,
        halo.get_colored_name(),
        ` delivered, `,
        digital.get_colored_name(),
        ` wept louder than anyone else in the stands.`,
      ]);
      era.drawLine({ content: 'On the Way Back' });
      await era.printAndWait([
        `Along the riverbank near the academy, you spot an `,
        digital.uma_sex_title,
        ` jogging through the mud with head hung low.`,
      ]);
      await digital.say_and_wait([`Oh! That's `, call_58, `...`]);
      await era.printAndWait([
        doto.get_colored_name(),
        ` looks downcast, training out here all by ${doto.sex === 'She' ? 'her' : 'him'}self.`,
      ]);
      await era.printAndWait([
        `Has `,
        doto.get_colored_name(),
        ` always pushed ${doto.sex === 'She' ? 'her' : 'him'}self like this?`,
      ]);
      await era.printAndWait([
        doto.get_colored_name(),
        `'s recent finishes have been disappointing. As a trainer, `,
        you.get_colored_name(),
        ` knows ${doto.sex.toLowerCase()} has yet to enter ${doto.sex === 'She' ? 'her' : 'his'} peak growth phase. But `,
        doto.get_colored_name(),
        ` clearly has no idea.`,
      ]);
      await digital.say_and_wait(
        `The peak period... If you don't know it's coming, every day must feel like walking through a nightmare...`,
      );
      await digital.say_and_wait([
        `In the past, I only admired `,
        call_58,
        `'s effort from a distance, but now...`,
      ]);
      await digital.say_and_wait(
        `Just knowing when it'll arrive would bring so much peace of mind...`,
      );
      await you.say_and_wait([
        `What's stopping you? Aren't you going to tell ${doto.sex === 'She' ? 'her' : 'him'}?`,
      ]);
      await digital.say_and_wait(
        `Huh? No way, no way! I'm just a fan! A fan can't just stroll up and give unsolicited training lectures to an idol! That's boundary-crossing at its worst!`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` is desperate to help, yet paralyzed by ${digital.sex === 'She' ? 'her' : 'his'} self-imposed fan etiquette.`,
      ]);
      await digital.say_and_wait(
        `Think about it: would you walk up to a struggling ramen shop owner and tell them their restaurant's golden era just hasn't begun yet?!`,
      );
      await you.say_and_wait(
        `This isn't an empty platitude; it's backed by science. Besides, Digi, are you really still just a fan?`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        ` gently reminds `,
        digital.get_colored_name(),
        ` that ${digital.sex.toLowerCase()} is no longer an outsider looking in; ${digital.sex.toLowerCase()} stands on the very same track now.`,
      ]);
      await digital.say_and_wait([
        `Well, even if I debuted, the gap between `,
        call_58,
        ` and someone like me is an endless canyon...`,
      ]);
      await you.say_and_wait([
        `The gap between you and ${digital.couple_title} is far smaller than you think.`,
      ]);
      await you.say_and_wait(
        `It's precisely your daily dedication that lets you see where Doto is struggling. But you keep hiding on the sidelines, pretending you don't belong out there.`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` hangs ${digital.sex === 'She' ? 'her' : 'his'} head.`,
      ]);
      await digital.say_and_wait(
        `Uuu... Even if you're right, just walking up to my idol out of nowhere is...`,
      );
      await digital.say_and_wait(`I feel like I'm stepping far out of line...`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` takes a deep breath and finally makes up ${digital.sex === 'She' ? 'her' : 'his'} mind to help `,
        doto.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait([
        digital.sex,
        ` vaults over the riverside railing, slides down the grassy slope, and pops up right in front of Doto.`,
      ]);
      await digital.say_and_wait([
        `E-Excuse me, `,
        call_58,
        `! Could I have a quick moment of your time?!`,
      ]);
      await doto.say_and_wait(`E-Eeeek! W-What is it?!`);
      await digital.say_and_wait(`Have you heard of the peak growth period?!`);
      await doto.say_and_wait(`Ehh? What's that?`);
      await digital.say_and_wait(`The peak period is when...`);
      await era.printAndWait(
        `Watching from the bank should be enough for now.`,
      );
      await digital.say_and_wait(
        `And for someone like you, the peak usually arrives around...`,
      );
      await era.printAndWait(
        `Wait, ${digital.sex.toLowerCase()} is explaining the biomechanics in startling detail.`,
      );
      await digital.say_and_wait(
        `Also, if you want to prep before your peak, you need to pay close attention to your foot strike...`,
      );
      await era.printAndWait(
        `This is diving into material that isn't even covered on the trainer certification exam.`,
      );
      await digital.say_and_wait(
        `Training before your peak is never wasted effort!`,
      );
      await digital.say_and_wait(
        `If you focus on building your quadriceps and core right now, you'll see an explosive surge the moment your peak arrives!`,
      );
      await era.printAndWait([
        `Isn't that from cutting-edge sports science research? `,
        you.get_colored_name(),
        ` recalls reading that very topic in a recent issue of Trainer Monthly...`,
      ]);
      era.drawLine({ content: 'Back at the Trainer Office' });
      await digital.say_and_wait([
        `Waaah! I lost it! That was the real, living, breathing `,
        call_58,
        ` right in front of me, and I just rambled like a maniac...`,
      ]);
      await era.printAndWait([
        `Even if `,
        doto.get_colored_name(),
        ` seemed a little dazed toward the end, from up on the bank you could see the dark clouds lift from ${doto.sex === 'She' ? 'her' : 'his'} face.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` certainly noticed that too.`,
      ]);
      await you.say_and_wait([
        `Didn't Doto look much more encouraged by the end?`,
      ]);
      await era.printAndWait([
        `...`,
        digital.get_colored_name(),
        ` clutches ${digital.sex === 'She' ? 'her' : 'his'} chest, trembling in place.`,
      ]);
      await era.printAndWait([
        `Having a direct, unfiltered conversation with an idol was clearly an overwhelming ordeal for `,
        digital.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait([
        `Still, delivering that kind of rapid-fire technical lecture out of the blue... `,
        digital.get_colored_name(),
        ` might be a bit of a force of nature.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = "New Year's Aspirations";
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} teio Tokai Teio
     * @param {CharaTalk} daiwa Daiwa Scarlet
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     */
    const f = async (digital, teio, daiwa, doto, you, callname) => {
      await era.printAndWait([
        `A new year begins, bringing `,
        digital.get_colored_name(),
        ` into the pivotal Classic year for every `,
        digital.uma_sex_title,
        `.`,
      ]);
      await era.printAndWait([
        `Though `,
        digital.sex.toLowerCase(),
        ` still seems mostly thrilled about getting closer to other Classic-year `,
        digital.uma_sex_title,
        `s.`,
      ]);
      await digital.say_and_wait([`Happy New Year, `, callname, `!`]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` offers a cheerful New Year's greeting to `,
        you.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait(
        `Showing up at the track so early in the morning is truly commendable.`,
      );
      await digital.say_and_wait(
        `How was your holiday? Did you grab any great books at Comiket?`,
      );
      await you.say_and_wait(`Comiket? Books?`);
      await digital.say_and_wait(
        `Ah... Well, if you didn't, please pretend you heard nothing! Just Digi talking to herself!`,
      );
      await digital.say_and_wait(
        `Anyway! This year's racing schedule! The Classic year has as many races as there are stars in the sky!`,
      );
      await era.printAndWait([
        `Indeed, `,
        digital.get_colored_name(),
        ` is now eligible for Classic-tier races. Compared to last year, the options are vastly wider, with most prestigious G1 events opening up in the Classic year.`,
      ]);
      await digital.say_and_wait([
        `Looking back on last year, I got way ahead of myself and nearly forgot my roots! What happened to being a proper, humble fan of `,
        digital.uma_sex_title,
        `s?!`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` still seems to be agonizing over ${digital.sex === 'She' ? 'her' : 'his'} encounter with `,
        doto.get_colored_name(),
        `...`,
      ]);
      era.println();
      await digital.say_and_wait(
        `So! This year, I'm returning to square one! Pure, devoted fan energy! That will be my guiding motto!`,
      );
      await era.printAndWait([
        `For now, `,
        digital.get_colored_name(),
        ` could use some direction to channel that enthusiasm...`,
      ]);
      await digital.say_and_wait([
        callname,
        `! Can you give me some guidance? How should I direct my support?`,
      ]);
      era.print([you.get_colored_name(), `'s choice:`]);
      era.printButton(`Support the uma-chans (Speed +10)`, 1);
      era.printButton(`Read doujins (Stamina +10)`, 2);
      era.printButton(`Learn by imitating (Skill Points +20)`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait([
            `Why not support the uma-chans like you always do?`,
          ]);
          await digital.say_and_wait([
            `Ooooh! That's wonderful advice! Lately I feel like I've been overstepping boundaries in my races and conversations...`,
          ]);
          await digital.say_and_wait(
            `Yes! It really is time to return to my roots! Time to purify the sacred grounds!`,
          );
          await era.printAndWait(`Purify?!`);
          await era.printAndWait(
            `It turns out ${digital.sex.toLowerCase()} simply meant raking and cleaning the dirt track. What a relief.`,
          );
          await era.printAndWait([
            `Right after the cleanup, `,
            daiwa.get_colored_name(),
            ` is the first to arrive on the turf. Watching `,
            daiwa.get_colored_name(),
            ` run with such crisp intensity fills `,
            digital.get_colored_name(),
            ` with boundless motivation.`,
          ]);
          break;
        case 2:
          await you.say_and_wait(
            `How about reading those books you mentioned earlier?`,
          );
          await digital.say_and_wait(
            `Oh! That's true... Even short books deserve a thorough, appreciative reread!`,
          );
          await digital.say_and_wait([
            `Soaking in the wonderful vibes of all kinds of `,
            digital.uma_sex_title,
            `-chans is the best way to recharge for the year ahead!`,
          ]);
          await era.printAndWait([
            `With that, `,
            digital.get_colored_name(),
            ` returns to the dorm to read through the day. Seeing `,
            digital.get_colored_name(),
            ` later with a face full of serene bliss, `,
            you.get_colored_name(),
            ` knows ${digital.sex.toLowerCase()} got plenty of rest.`,
          ]);
          break;
        case 3:
          await you.say_and_wait([
            `How about studying other `,
            digital.uma_sex_title,
            `s and learning their techniques?`,
          ]);
          await digital.say_and_wait(
            `Yes! Studying my idols to learn their techniques! That is our sacred mission!`,
          );
          await digital.say_and_wait(`Ooooh! Huh?`);
          await era.printAndWait([
            `Heading to the rail by the training track, `,
            digital.get_colored_name(),
            ` recalls the movements ${digital.sex.toLowerCase()} observed from other `,
            digital.uma_sex_title,
            `s...`,
          ]);
          await digital.say_and_wait(`Behold! The Teio Step!`);
          await era.printAndWait(
            `The iconic Teio Step! A technique that maximizes stride length through rhythmic, spring-loaded bounds.`,
          );
          await era.printAndWait(
            `Wait, the real runner seems to have arrived.`,
          );
          await era.printAndWait([
            teio.get_colored_name(),
            `? When did ${teio.sex.toLowerCase()} get here?`,
          ]);
          await digital.say_and_wait(
            `Waaah! I didn't mean to be disrespectful!`,
          );
          await era.printAndWait([
            digital.get_colored_name(),
            ` wilts on the spot.`,
          ]);
          await era.printAndWait([
            `In the end, though, `,
            digital.get_colored_name(),
            ` actually learns several valuable techniques directly from `,
            teio.get_colored_name(),
            `.`,
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_hyac_sta: (() => {
    const title = 'Hyacinth Stakes Begins!';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} nikk_hai Nikkei Shinshun Hai
     */
    const f = async (digital, doto, you, callname, nikk_hai) => {
      await era.printAndWait([
        `A short while ago, `,
        doto.get_colored_name(),
        ` claimed second place in the `,
        nikk_hai,
        `.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` originally just wanted to offer congratulations in the tunnel while apologizing for being intrusive earlier, but received heartfelt gratitude from `,
        doto.get_colored_name(),
        ` instead.`,
      ]);
      await era.printAndWait([
        `Doing something no ordinary fan should do ended up bearing fruit, leaving `,
        digital.get_colored_name(),
        ` completely at a loss.`,
      ]);
      await era.printAndWait(
        `The only way to clear that confusion is on the track, and today's race is the perfect opportunity.`,
      );
      await era.printAndWait(`It is an Listed/Open race, not even a G3.`);
      await era.printAndWait([
        `In the paddock, `,
        digital.get_colored_name(),
        ` gazes intently at the other `,
        digital.uma_sex_title,
        `s.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        `'s hands claw playfully in the air, ${digital.sex === 'She' ? 'her' : 'his'} eyes shining with an unmistakable hunger for cuteness...`,
      ]);
      era.printButton(`"Digi, don't you dare pounce on them."`, 1);
      await era.input();
      await digital.say_and_wait(
        `I wasn't going to pounce on anyone to begin with!`,
      );
      await digital.say_and_wait([
        `Speaking of which, `,
        callname,
        `, something feels really strange today.`,
      ]);
      await digital.say_and_wait(
        `The air feels remarkably tense, yet the holy aura coming off them hasn't changed at all...`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` notices that every `,
        digital.uma_sex_title,
        ` wears a look of fierce, battle-ready determination. That intensity captivates `,
        digital.get_colored_name(),
        `, but the solemn atmosphere keeps ${digital.sex === 'She' ? 'her' : 'his'} usual squeals in check.`,
      ]);
      await digital.say_and_wait([
        `There must be something purer at the core of what makes an `,
        digital.uma_sex_title,
        ` so precious...`,
      ]);
      await you.say_and_wait(`Do you want to reach out and touch it?`);
      await digital.say_and_wait(`Whoa! That would be completely out of line!`);
      await digital.say_and_wait(
        `Still, I want to observe it from a spot closer than anyone else...`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` still thinks of ${digital.sex === 'She' ? 'her' : 'his'}self as just a spectator, yet a subtle shift flickers in ${digital.sex === 'She' ? 'her' : 'his'} eyes.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  hyac_sta_win: (() => {
    const title = 'Hyacinth Stakes Victory';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} diamond_lord Diamond Lord (Agnes Digital Story NPC)
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} nhk_cup NHK Mile Cup
     */
    const f = async (digital, diamond_lord, you, callname, nhk_cup) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ` crosses the finish line with commanding authority. It was never in doubt.`,
      ]);
      await digital.say_and_wait(`Phew... Haah... Digi did it...`);
      await digital.say_and_wait([
        `Crossed the finish line... and witnessed the radiant brilliance of the `,
        digital.uma_sex_title,
        `-chans up close!`,
      ]);
      await digital.say_and_wait([
        `It came as a surprise, honestly. I used to think their sacred aura came purely from their resolve to run...`,
      ]);
      await digital.say_and_wait([
        `But the hopes and dreams they pour into every stride run so much deeper. If I keep running, I know I'll discover the true reason `,
        digital.couple_title,
        ` shine so brightly!`,
      ]);
      await digital.say_and_wait(
        `I'll keep cheering them on without getting in their way!`,
      );
      await you.say_as_passer_by_and_wait('???', `Uuu... Sob...`);
      await you.say_as_passer_by_and_wait('???', `Uwaaaah!`);
      await digital.print_and_wait([
        `From nearby comes the sound of an `,
        digital.uma_sex_title,
        ` weeping bitterly.`,
      ]);
      await digital.say_and_wait([
        `That `,
        digital.uma_sex_title,
        `, I remember her from earlier...`,
      ]);
      await digital.print_and_wait([
        `If memory serves, ${digital.sex.toLowerCase()} finished in sixth place, just off the board.`,
      ]);
      await you.say_as_passer_by_and_wait(
        '???',
        `The board... I didn't even make the board... How could I ever hope to win a graded race...?!`,
      );
      await digital.print_and_wait([
        digital.get_colored_name(),
        `, who usually cannot tear ${digital.sex === 'She' ? 'her' : 'his'} eyes away from `,
        digital.uma_sex_title,
        `s, turns ${digital.sex === 'She' ? 'her' : 'his'} back, unable to watch.`,
      ]);
      await digital.print_and_wait([
        `Walking through the tunnel, `,
        digital.get_colored_name(),
        ` looks away from the other `,
        digital.uma_sex_title,
        `s. Not maintaining a respectful distance like before, but deliberately averting ${digital.sex === 'She' ? 'her' : 'his'} gaze.`,
      ]);
      await digital.say_and_wait(`...`);
      await digital.print_and_wait([
        `Even so, two `,
        digital.uma_sex_title,
        `s appear ahead: the second and third-place finishers.`,
      ]);
      await digital.print_and_wait([
        digital.get_colored_name(),
        ` prepares to step aside, when...`,
      ]);
      const cache = diamond_lord.name;
      diamond_lord.name = `${digital.uma_sex_title} A`;
      await diamond_lord.say_and_wait(`Sniff...`);
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title} B`,
        `Wait, you took second place! Why are you crying?`,
      );
      await diamond_lord.say_and_wait(
        `Because... this was supposed to be my showdown with you, Senpai... All this time, I wanted to compete with you and surpass you...`,
      );
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title} B`,
        `And you did great. You're seriously strong. I'm practically a fossil at this point!`,
      );
      await diamond_lord.say_and_wait([
        `...I thought if I could just beat you, Senpai, I'd be able to... But ${digital.sex.toLowerCase()} was so fast... I couldn't even get close to ${digital.sex === 'She' ? 'her' : 'him'}...`,
      ]);
      diamond_lord.name = cache;
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title} B`, [
        diamond_lord.get_colored_name(),
        `! You gave it everything you had out there! You left it all on the track!`,
      ]);
      await diamond_lord.say_and_wait(`But...`);
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title} B`,
        `Regardless of today's result, the Twinkle Series keeps going. It won't wait for us!`,
      );
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title} B`, [
        `You're stronger than me, and you have so much potential ahead. You'll run graded races, and you'll step into G1s!`,
        ` Make `,
        digital.couple_title,
        ` sit up and take notice!`,
      ]);
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title} B`,
        `Will you come to the Winning Live with me?`,
      );
      await digital.print_and_wait([
        digital.uma_sex_title,
        ` B gently raises a hand and wipes the tears from ${digital.sex === 'She' ? 'her' : 'his'} companion's eyes.`,
      ]);
      await diamond_lord.say_and_wait(`!`);
      await digital.print_and_wait([
        digital.sex,
        ` sniffs hard, wipes ${digital.sex === 'She' ? 'her' : 'his'} nose, and nods firmly.`,
      ]);
      await digital.print_and_wait([
        `Watching `,
        digital.couple_title,
        ` walk away hand in hand, `,
        digital.get_colored_name(),
        ` cannot bring ${digital.sex === 'She' ? 'her' : 'his'}self to make any lighthearted jokes.`,
      ]);
      era.drawLine();
      await digital.say_and_wait(`...`);
      await you.say_and_wait(`Digi, are you all right?`);
      await digital.say_and_wait(`Staying out of their way was a lie...`);
      await digital.say_and_wait(
        `Doing something like that is completely impossible.`,
      );
      await digital.say_and_wait(
        `Once you enter a race, there will always be winners and losers. Saying everyone is a winner and that losing is just as sweet... How could I ever say something so shallow...?`,
      );
      era.printButton(
        `"The bonds forged on the track are what make you all so radiant. Haven't you always known that?"`,
        1,
      );
      await era.input();
      await era.printAndWait([
        `In this race, `,
        digital.get_colored_name(),
        ` catches a glimpse of what truly makes `,
        digital.uma_sex_title,
        `s so breathtaking.`,
      ]);
      await era.printAndWait([
        `Yet ${digital.sex.toLowerCase()} also realizes that calling ${digital.sex === 'She' ? 'her' : 'his'}self a mere spectator while running as a competitor and taking the win was deeply disrespectful.`,
      ]);
      await era.printAndWait(`It was a grave discourtesy to everyone who ran.`);
      await era.printAndWait([
        `And so, after the Winning Live, when `,
        digital.get_colored_name(),
        ` returns to the office...`,
      ]);
      await digital.say_and_wait([
        callname,
        `, I want to talk about what comes next. I'm going to say something that doesn't sound like me at all.`,
      ]);
      await you.say_and_wait(`Go ahead.`);
      await digital.say_and_wait(
        `I feel that no matter what, I need to compete in... G1 races.`,
      );
      await digital.say_and_wait(
        `I committed an offense against everyone on that track that demands a groveling apology on a sizzling iron griddle.`,
      );
      await digital.say_and_wait(
        `If that's true, then there's only one thing I can do: race, win in G1s, and make everyone acknowledge that Digi is genuinely strong.`,
      );
      await era.printAndWait([
        digital.sex,
        ` wants to prove ${digital.sex === 'She' ? 'her' : 'his'} own strength, to offer an honest answer to every `,
        digital.uma_sex_title,
        ` who finished behind ${digital.sex === 'She' ? 'her' : 'him'}.`,
      ]);
      await digital.say_and_wait([
        `And I want to see for myself how `,
        digital.uma_sex_title,
        `-chans face G1 races!`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` and `,
        you.get_colored_name(),
        ` set the next milestone: the `,
        nhk_cup,
        ` in early May.`,
      ]);
      await digital.say_and_wait([
        `I will race, and I will carry `,
        digital.couple_title,
        `'s hopes with me!`,
      ]);
      await era.printAndWait([
        `A chance encounter, but no accidental resolution. The weight carried in victory and defeat pushes `,
        digital.get_colored_name(),
        ` toward ${digital.sex === 'She' ? 'her' : 'his'} true future.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_nhk_cup: (() => {
    const title = 'NHK Mile Cup Begins!';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     */
    const f = async (digital, you) => {
      await digital.say_and_wait(
        `Ooooh! As expected, the atmosphere here is on a whole different level!`,
      );
      await era.printAndWait(
        `A G1 stage packed with over a hundred thousand roaring spectators.`,
      );
      await era.printAndWait(
        `Even for someone who watched countless races from the stands, standing in the paddock as a runner feels completely different.`,
      );
      await era.printAndWait(
        `The roar of the crowd is staggering, but the true pressure comes from the runners around you.`,
      );
      await digital.say_and_wait(
        `W-What is this presence?! It feels like an overwhelming domain expansion!`,
      );
      await digital.say_and_wait(
        `This is intense! This is amazing! This is pure, unadulterated perfection!`,
      );
      await you.say_and_wait(
        `Excited, aren't you? That means you're in top form.`,
      );
      await digital.say_and_wait(`I can barely think straight anymore...`);
      await digital.say_and_wait(
        `Beautiful, terrifying, the resolution feels like 4K! It's hard to even stand here without trembling...`,
      );
      await digital.say_and_wait([
        `Still, I'm going to understand the secret behind what makes `,
        digital.uma_sex_title,
        `-chans so divine!`,
      ]);
      await digital.say_and_wait(
        `Even if I turn to ash from pure bliss... Huh?!`,
      );
      await era.printAndWait([
        `Mid-sentence, `,
        digital.get_colored_name(),
        ` suddenly shivers.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` looks around in confusion.`,
      ]);
      await digital.say_and_wait(`Did someone just stare right at me?`);
      await era.printAndWait([
        `Looking across the paddock, `,
        you.get_colored_name(),
        ` sees none of the other runners watching `,
        digital.get_colored_name(),
        `, so the gaze must have come from the stands.`,
      ]);
      await digital.say_and_wait(
        `Could it be... while obsessing over my idols, I'm dreaming of being someone's idol too...?`,
      );
      await digital.say_and_wait(`I can't let myself get so ahead of myself!`);
      await era.printAndWait([
        `In a race of this stature, `,
        digital.get_colored_name(),
        ` should be able to unleash ${digital.sex === 'She' ? 'her' : 'his'} full potential.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  nhk_cup_win: (() => {
    const title = 'NHK Mile Cup Victory';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} opera TM Opera O
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} you Player
     * @param {PrintedSpan} call_15 What Agnes Digital calls TM Opera O
     * @param {PrintedSpan} call_58 What Agnes Digital calls Meisho Doto
     * @param {PrintedSpan} callname_15 What TM Opera O calls the player
     * @param {PrintedSpan} o_call_di What TM Opera O calls Agnes Digital
     * @param {PrintedSpan} o_call_do What TM Opera O calls Meisho Doto
     * @param {PrintedSpan} do_call_di What Meisho Doto calls Agnes Digital
     * @param {PrintedSpan} takz_kin Takarazuka Kinen
     * @param {PrintedSpan} japa_dir Japan Dirt Derby
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      call_15,
      call_58,
      callname_15,
      o_call_di,
      o_call_do,
      do_call_di,
      takz_kin,
      japa_dir,
    ) => {
      await you.say_as_passer_by_and_wait('Commentator', [
        `It's `,
        digital.get_colored_name(),
        `! `,
        digital.get_colored_name(),
        `! `,
        digital.sex,
        ` has proven that turf or dirt makes no difference to ${digital.sex === 'She' ? 'her' : 'him'}!`,
      ]);
      await era.printAndWait([
        `Crossing the line, `,
        digital.get_colored_name(),
        `'s steps are unsteady.`,
      ]);
      await digital.say_and_wait(
        `Haah... Phew... Okay... Zero energy left... Not even enough stamina to fangirl... I gave it... everything...!`,
      );
      await digital.say_and_wait(
        `Aah, the sunlight... so blinding... The sky... so far away...`,
      );
      await digital.say_and_wait(`Ah... So this is...`);
      await era.printAndWait(`(Thud!)`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` collapses to the turf.`,
      ]);
      era.drawLine();
      await era.printAndWait([
        `Fortunately, the attending doctor confirms that `,
        digital.get_colored_name(),
        ` simply overexerted ${digital.sex === 'She' ? 'her' : 'his'}self and just needs rest.`,
      ]);
      await era.printAndWait([
        `This time, `,
        digital.get_colored_name(),
        ` truly left everything on the track. Unlike before, `,
        digital.get_colored_name(),
        ` ran carrying the pride and conviction of a genuine competitor.`,
      ]);
      await era.printAndWait([
        `Having poured out every last drop of strength, `,
        digital.get_colored_name(),
        ` collapsed from pure exhaustion.`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` carries `,
        digital.get_colored_name(),
        ` back to the resting room, only to find two familiar figures waiting: `,
        opera.get_colored_name(),
        ` and `,
        doto.get_colored_name(),
        `.`,
      ]);
      await opera.say_and_wait([o_call_di, `?! Pull yourself together!`]);
      await you.say_and_wait([
        `It's all right. ${digital.sex} just needs a little rest.`,
      ]);
      await era.printAndWait([
        `You gently lay `,
        digital.get_colored_name(),
        ` down on the resting room sofa.`,
      ]);
      await era.printAndWait([
        `Before long, `,
        digital.get_colored_name(),
        ` opens ${digital.sex === 'She' ? 'her' : 'his'} eyes.`,
      ]);
      await digital.say_and_wait(`Mmh... Mmh... Huh?!`);
      await digital.say_and_wait([
        call_15,
        ` and `,
        call_58,
        `?! Why are you two here?`,
      ]);
      await you.say_and_wait([
        digital.couple_title,
        ` were worried about you, so they came by to check in. In fact, they were waiting here from the very start.`,
      ]);
      await digital.say_and_wait(`Why so suddenly?`);
      await opera.say_and_wait([
        `It is not sudden! `,
        o_call_do,
        ` told me of a dancer capable of gracing every stage. To witness the birth of a new star, I came in person!`,
      ]);
      await doto.say_and_wait([
        `Uuu, I'm so grateful for the advice you gave me, `,
        do_call_di,
        `! That's why I came to cheer for you today!`,
      ]);
      await opera.say_and_wait(
        `Before the race, we concealed my supreme aura and blended in with the crowd to observe you!`,
      );
      await doto.say_and_wait(
        `I was worried someone like me talking to you in the paddock would distract you... so...`,
      );
      await digital.say_and_wait(
        `No, no, no! How could that ever distract me? It's an absolute honor! So that's where that gaze came from!`,
      );
      await digital.say_and_wait([
        `And now I'm starting to understand why `,
        call_15,
        ` and `,
        call_58,
        ` are so breathtakingly radiant...`,
      ]);
      await digital.say_and_wait(
        `Finally... I feel like I've gotten just a tiny bit closer...`,
      );
      await opera.say_and_wait(
        `Hahaha! Is that so? Though my magnificence is, of course, entirely innate!`,
      );
      await era.printAndWait([
        opera.get_colored_name(),
        ` holds `,
        digital.get_colored_name(),
        ` in high regard, while `,
        doto.get_colored_name(),
        ` is deeply thankful for the encouragement `,
        digital.get_colored_name(),
        ` gave ${doto.sex === 'She' ? 'her' : 'him'}.`,
      ]);
      await you.say_and_wait(
        `You two must have something else you wanted to say, right?`,
      );
      await era.printAndWait([
        `Then, `,
        digital.couple_title,
        ` announce their plans.`,
      ]);
      await opera.say_and_wait([
        o_call_do,
        ` and I will have our first shared performance in the upcoming `,
        takz_kin,
        `!`,
      ]);
      await doto.say_and_wait(
        `I can finally run in a G1 too, even if it's just from an unnoticed corner of the field...`,
      );
      await digital.say_and_wait(
        `! Your first shared revue! I understand! Now I absolutely have to watch!`,
      );
      await opera.say_and_wait(
        `However, you must have a performance of your own, yes? Show us your all-round talent!`,
      );
      await opera.say_and_wait(
        `You have yet to conquer a dirt G1. Without that, your repertoire remains incomplete, does it not?`,
      );
      await you.say_and_wait([
        `The most fitting dirt G1 coming up during the summer training camp is the `,
        japa_dir,
        `.`,
      ]);
      await opera.say_and_wait([
        `As expected of `,
        callname_15,
        `! Well, `,
        digital.get_colored_name(),
        `, will you accept our challenge?`,
      ]);
      await digital.say_and_wait(`I accept!`);
      await era.printAndWait([
        `And so a promise is forged: `,
        opera.get_colored_name(),
        ` and `,
        doto.get_colored_name(),
        ` will deliver the grandest spectacle in the `,
        takz_kin,
        `, while `,
        digital.get_colored_name(),
        ` will demonstrate ${digital.sex === 'She' ? 'her' : 'his'} versatility in the `,
        japa_dir,
        `.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_24: (() => {
    const title = 'Takarazuka Kinen';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} opera TM Opera O
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} you Player
     * @param {PrintedSpan} call_15 What Agnes Digital calls TM Opera O
     * @param {PrintedSpan} call_58 What Agnes Digital calls Meisho Doto
     * @param {PrintedSpan} japa_dir Japan Dirt Derby
     */
    const f = async (digital, opera, doto, you, call_15, call_58, japa_dir) => {
      await era.printAndWait([
        `Today marks the first direct clash between `,
        opera.get_colored_name(),
        ` and `,
        doto.get_colored_name(),
        `.`,
      ]);
      await digital.say_and_wait(
        `Aaaah, the fateful day is finally here! My head won't stop spinning!`,
      );
      await digital.say_and_wait(
        `A dream matchup coming to life! No, dreams could never compare to the real thing!`,
      );
      await digital.say_and_wait(
        `Should I cover myself from head to toe in glow sticks to cheer for them?!`,
      );
      era.printButton(`"No, security would throw you right out."`, 1);
      await era.input();
      await era.printAndWait([
        `Arriving at Hanshin Racecourse, the fierce battle between `,
        opera.get_colored_name(),
        ` and `,
        doto.get_colored_name(),
        ` unfolds.`,
      ]);
      await era.printAndWait(
        `The fierce battle between TM Opera O and Meisho Doto at Hanshin.`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        ` is well aware of `,
        opera.get_colored_name(),
        `'s immense power, but seeing `,
        doto.get_colored_name(),
        ` push that hard is astonishing.`,
      ]);
      await era.printAndWait([
        `They cross the finish line almost side by side, with `,
        opera.get_colored_name(),
        ` edging out `,
        doto.get_colored_name(),
        ` by the slimmest margin.`,
      ]);
      await era.printAndWait(
        `A physical peak alone could not account for such a complete mental transformation.`,
      );
      await era.printAndWait([
        `Did `,
        digital.get_colored_name(),
        ` inspire this change in ${doto.sex === 'She' ? 'her' : 'him'}?`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` is truly remarkable. Glancing over at `,
        digital.get_colored_name(),
        `, ${digital.sex.toLowerCase()} is swaying ${digital.sex === 'She' ? 'her' : 'his'} head in pure trance-like bliss.`,
      ]);
      await digital.say_and_wait(`Ehehehe...`, true);
      await digital.say_and_wait(`Mmh...`, true);
      await digital.say_and_wait(
        `What was that just now... that blinding light?`,
        true,
      );
      await digital.say_and_wait(
        `For a moment back there... I completely forgot about being a fan...`,
        true,
      );
      await digital.say_and_wait(
        [
          `Was it because it was `,
          call_15,
          ` and `,
          call_58,
          `...? Is it because `,
          digital.couple_title,
          ` are so special?`,
        ],
        true,
      );
      await era.printAndWait([
        `Even though `,
        digital.get_colored_name(),
        ` hasn't fully unraveled the deeper meaning yet, the baton has been passed. Next up is `,
        digital.get_colored_name(),
        `'s stage in the `,
        japa_dir,
        `.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_japa_dir: (() => {
    const title = 'Japan Dirt Derby Begins!';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {PrintedSpan} japa_dir Japan Dirt Derby
     */
    const f = async (digital, you, japa_dir) => {
      await digital.say_and_wait(
        [
          `I still haven't figured out the true source of `,
          digital.uma_sex_title,
          `-chans' holy energy... It must be something unimaginably precious...`,
        ],
        true,
      );
      await digital.say_and_wait(
        `Oi Racecourse... Nighttime... Dirt track... On this unfamiliar track, in this unique arena, maybe I'll find the secret I've been searching for...`,
        true,
      );
      era.drawLine();
      await digital.say_and_wait([
        `The `,
        japa_dir,
        `... The atmosphere here feels completely unique.`,
      ]);
      await you.say_and_wait(
        `A NAR G1 race. Races like this often face unfair prejudice.`,
      );
      await digital.say_and_wait(
        `Even so, the searing heat rising from this track is like the summer sun.`,
      );
      await digital.say_and_wait(
        `Even if the track, the scenery, and the surface are totally different...`,
      );
      await digital.say_and_wait([
        `the feelings of the `,
        digital.uma_sex_title,
        `-chans are all the same, right?`,
      ]);
      await era.printAndWait(
        `Indeed. Whether G1 or G3, graded or open, turf or dirt, JRA or NAR...`,
      );
      await you.say_and_wait(`It's all the same.`);
      await you.say_and_wait(
        `After this race, you will have experienced every type of competition. You'll definitely see why.`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` might already know the answer in ${digital.sex === 'She' ? 'her' : 'his'} heart. ${digital.sex} just needs to verify it through this race.`,
      ]);
      await digital.say_and_wait([
        `Right now! Together with Oi's dirt `,
        digital.uma_sex_title,
        `-chans, I'll find that answer!`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  japa_dir_win: (() => {
    const title = 'Japan Dirt Derby Victory';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} opera TM Opera O
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} call_15 What Agnes Digital calls TM Opera O
     * @param {PrintedSpan} call_58 What Agnes Digital calls Meisho Doto
     * @param {PrintedSpan} japa_dir Japan Dirt Derby
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      japa_dir,
    ) => {
      await digital.say_and_wait(
        `This race is completely different from the turf races before, yet entirely the same.`,
        true,
      );
      await digital.say_and_wait(`Oooohhhh!!!!`, true);
      await digital.say_and_wait(
        `The swirling sand... I can't see clearly... but their brilliance... shines right through...!`,
        true,
      );
      await digital.say_and_wait(
        [
          `Even on a totally different surface... `,
          digital.couple_title,
          ` shine with unyielding radiance...`,
        ],
        true,
      );
      await digital.say_and_wait(
        [`I can't let down `, digital.couple_title, `'s heart right here!!!!`],
        true,
      );
      await digital.say_and_wait(`Haaahhhh!`, true);
      era.drawLine();
      await era.printAndWait([
        `The race concludes. `,
        digital.get_colored_name(),
        ` performed remarkably, achieving an outstanding result on a completely unfamiliar track.`,
      ]);
      await you.say_and_wait(`How does it feel?`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` turns with a serious expression completely unlike before.`,
      ]);
      await digital.say_and_wait([
        `Digi, `,
        digital.get_colored_name(),
        `, I finally understand.`,
      ]);
      await you.say_and_wait(`Yeah.`);
      await digital.say_and_wait([
        `The holy aura of uma-chans that has enchanted me since childhood...`,
      ]);
      await digital.say_and_wait([
        `I understand now. Running the `,
        japa_dir,
        ` today made everything crystal clear.`,
      ]);
      await digital.say_and_wait([`uma-chans are cute.`]);
      await digital.say_and_wait([`uma-chans are divine.`]);
      await digital.say_and_wait([
        `So why are `,
        digital.couple_title,
        ` cute? What about `,
        digital.couple_title,
        ` feels so magnificent and irretrievably captivating to me?`,
      ]);
      await digital.say_and_wait([
        `Today I finally realized: what I love is how `,
        digital.couple_title,
        ` give everything they have to chase their dreams!`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` stomps ${digital.sex === 'She' ? 'her' : 'his'} feet excitedly, bursting with the joy of discovery.`,
      ]);
      await digital.say_and_wait(
        `Now that I get it, I want to travel back in time and smack the old me who thought only JRA turf G1s were special!`,
      );
      await you.say_and_wait(`Haha, that's classic Digi.`);
      await digital.say_and_wait([
        `You knew all along, didn't you? The uma-chans have always been the same.`,
      ]);
      await digital.say_and_wait([
        digital.couple_title,
        ` have goals they want to achieve and people they want to become, and they pour their whole hearts into reaching them.`,
      ]);
      await era.printAndWait(
        `Anyone with that kind of drive shines anywhere. How could a race bringing them all together be anything less than spectacular?`,
      );
      await digital.say_and_wait([
        digital.couple_title,
        ` connect and support one another with everything they have. Sometimes clashing for the same victory, yet never fearing the fight, always looking ahead.`,
      ]);
      await digital.say_and_wait(
        `And once the dust settles, they share warm embraces!`,
      );
      await you.say_and_wait(`Well, that's another classic scene.`);
      await digital.say_and_wait(
        `It's precisely because it's a classic that it shakes my very soul!`,
      );
      await digital.say_and_wait(
        `I was so full of myself before making my debut... and yet it took until today to finally...`,
      );
      await digital.say_and_wait(`Aawaawa, honestly...`);
      await digital.say_and_wait([
        `Looking back now at `,
        call_15,
        ` and `,
        call_58,
        `'s race, I finally understand it too.`,
      ]);
      await era.printAndWait([
        `The radiance from `,
        opera.get_colored_name(),
        ` and `,
        doto.get_colored_name(),
        `'s clash at Takarazuka filled `,
        digital.get_colored_name(),
        ` with longing.`,
      ]);
      await era.printAndWait([
        `And now, `,
        digital.get_colored_name(),
        ` can finally touch that same light.`,
      ]);
      await digital.say_and_wait(
        `If I stay like this... No! Digi! Time to get moving!`,
      );
      await digital.say_and_wait(
        `Even someone like me, if I make up my mind and stand before the gate with a pure heart...!`,
      );
      await digital.say_and_wait([
        callname,
        `... Can I... even someone like me... become someone like that?!`,
      ]);
      era.printButton(`"Of course you can!"`, 1);
      await era.input();
      await era.printAndWait([
        `At this very moment, `,
        digital.get_colored_name(),
        ` has finally become a true competitor.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = 'Summer Training Camp (Classic Year) Begins';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {PrintedSpan} japa_dir Japan Dirt Derby
     * @param {PrintedSpan} mile_cha Mile Championship
     */
    const f = async (digital, you, japa_dir, mile_cha) => {
      await era.printAndWait([
        `Summer training camp! The most important event of the season, providing a golden opportunity for `,
        digital.uma_sex_title,
        `s to level up. As a trainer, `,
        you.get_colored_name(),
        ` takes this event very seriously.`,
      ]);
      await era.printAndWait([
        `Especially to ride the momentum from the `,
        japa_dir,
        ` and aim straight for the next challenge.`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` can already envision a bright path ahead for `,
        digital.get_colored_name(),
        `, except...`,
      ]);
      await digital.say_and_wait(
        `Kuwaah... That victory went straight to my head! To think I actually wanted to become one of those divine beings...`,
      );
      await era.printAndWait(`That's a rough start.`);
      await digital.say_and_wait(
        `Once the adrenaline fades and post-hype clarity hits, the regret over being so presumptuous is unbearable...`,
      );
      era.printButton(`"Wait, Digi, are you regretting your decision?"`, 1);
      await era.input();
      await era.printAndWait([
        `Hit right where it hurts, `,
        digital.get_colored_name(),
        ` straightens right up.`,
      ]);
      await digital.say_and_wait([
        `I just think I'm such a handful sometimes... Even though I already signed up for the `,
        mile_cha,
        `...`,
      ]);
      await digital.say_and_wait(
        `No, no, no! Let's put troublesome thoughts aside! First, I need to focus on Comiket!`,
      );
      era.printButton(`"Comiket? What's that?"`, 1);
      await era.input();
      await digital.say_and_wait(`Eek!`);
      await era.printAndWait([
        `Caught off guard by `,
        you.get_colored_name(),
        `'s interruption, `,
        digital.get_colored_name(),
        ` begins stammering.`,
      ]);
      await digital.say_and_wait(
        `Anyway! The race just ended, so let me unwind a bit first! Ahahaha!`,
      );
      await era.printAndWait(
        `This summer training camp is starting to look a little concerning.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_29: (() => {
    const title = 'Summer Training Camp (Classic Year) Midpoint';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} halo King Halo
     * @param {CharaTalk} you Player
     * @param {PrintedSpan} call_61 What Agnes Digital calls King Halo
     * @param {PrintedSpan} callname_61 What King Halo calls the player
     * @param {PrintedSpan} h_call_d What King Halo calls Agnes Digital
     * @param {PrintedSpan} mile_cha Mile Championship
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      mile_cha,
    ) => {
      await era.printAndWait([
        `During the first week of summer training camp, `,
        digital.get_colored_name(),
        ` keeps up with training, but seems somewhat distracted.`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` has a hunch `,
        digital.get_colored_name(),
        ` is working on something else on the side, but since it's `,
        digital.get_colored_name(),
        `'s personal hobby, you hesitate to pry.`,
      ]);
      era.printButton(`"What should I do about this..."`, 1);
      await era.input();
      await era.printAndWait([
        `While watching `,
        digital.get_colored_name(),
        ` do strength training, `,
        you.get_colored_name(),
        ` happens to spot `,
        halo.get_colored_name(),
        ` standing on the beach, looking out at the rolling surf.`,
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ` is an `,
        digital.uma_sex_title,
        ` `,
        digital.get_colored_name(),
        ` has idolized for a long time. `,
        digital.get_colored_name(),
        ` and `,
        you.get_colored_name(),
        ` went together to watch ${halo.sex === 'She' ? 'her' : 'him'} in the `,
        mile_cha,
        `.`,
      ]);
      await era.printAndWait([
        `Lately, ${halo.sex === 'She' ? 'her' : 'his'} race results have been mixed.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` notices `,
        halo.get_colored_name(),
        ` too, and as a dedicated fan, ${digital.sex === 'She' ? 'her' : 'his'} mood dips slightly.`,
      ]);
      await you.say_and_wait([`Why not go cheer up `, call_61, `?`]);
      await digital.say_and_wait(
        `Mmh... As a fan, cheering on your idol is essential... Alright! Decided! I'll put my manuscript on hold for now!`,
      );
      await you.say_and_wait(`Manuscript? What manuscript?`);
      await digital.say_and_wait(`My doujin manuscript.`);
      await you.say_and_wait(`A doujin of what?`);
      await digital.say_and_wait(`Just a standard fan doujinshi.`);
      await era.printAndWait(`You have no idea what to say.`);
      await digital.say_and_wait([
        `I was planning to sell a `,
        call_61,
        ` doujinshi at the upcoming convention to spread the word about how incredible `,
        call_61,
        ` is...`,
      ]);
      await halo.say_as_unknown_and_wait(
        `A doujinshi of King? The King herself hasn't heard a single word about this.`,
      );
      await digital.say_and_wait([
        `Ah, letting the subject find out is a major taboo! We definitely can't let `,
        call_61,
        `... Hyaah! `,
        call_61,
        `?!`,
      ]);
      await era.printAndWait(
        `The main character walked right out of the doujinshi.`,
      );
      await digital.say_and_wait(
        `I was just kidding! It was all silly daydreams!`,
      );
      await halo.say_and_wait(
        `Well, thank you regardless. It seems King's charms are truly top-tier! Ahahaha!`,
      );
      await halo.say_and_wait([
        `Actually, I wanted to ask, `,
        h_call_d,
        `, you are entering this year's `,
        mile_cha,
        `, correct?`,
      ]);
      await digital.say_and_wait([
        `Huh? Yes! I was so moved by your race last year that I wanted to get as close to you as possible... But why do you ask, `,
        call_61,
        `?`,
      ]);
      await halo.say_and_wait(`Because I will be running in it as well.`);
      await era.printAndWait([
        halo.get_colored_name(),
        ` will also compete in the `,
        mile_cha,
        `, sharing the track with `,
        digital.get_colored_name(),
        `.`,
      ]);
      await digital.say_and_wait(`!`);
      await era.printAndWait([
        `A shadow suddenly falls over `,
        digital.get_colored_name(),
        `'s face.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` knows that after a grueling career, `,
        halo.get_colored_name(),
        ` has gradually slid into a slump.`,
      ]);
      await digital.say_and_wait([
        `Um, `,
        call_61,
        `... Even if it sounds shameless coming from me, I'll be cheering for you with all my heart.`,
      ]);
      await digital.say_and_wait(
        `Even as an opponent, my love as a fan is just as strong...`,
      );
      await era.printAndWait([
        `Caught in this dilemma, `,
        digital.get_colored_name(),
        ` feels deeply conflicted. Racing alongside your idol is a dream come true, but what if that idol has already begun to fade?`,
      ]);
      await you.say_and_wait(`Digi!`);
      await digital.say_and_wait(`!`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` looks toward `,
        you.get_colored_name(),
        ` with a troubled expression.`,
      ]);
      await you.say_and_wait([
        `Digi, you should know this best of all. An `,
        digital.uma_sex_title,
        ` on the track...`,
      ]);
      await halo.say_and_wait([
        callname_61,
        `, pardon my interruption. `,
        h_call_d,
        `, I have a proposal.`,
      ]);
      await halo.say_and_wait([
        h_call_d,
        `, when this camp ends, let's run a match race together.`,
      ]);
      await digital.say_and_wait(
        `What?! Running against my idol... I could never...`,
      );
      await you.say_and_wait([`King, thank you very much.`]);
      await halo.say_and_wait([
        `Think nothing of it. A first-rate `,
        digital.uma_sex_title,
        ` naturally gives back to first-rate fans! Ahahaha!`,
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ` sees right through `,
        digital.get_colored_name(),
        `'s hesitation and offers a direct challenge.`,
      ]);
      await era.printAndWait([
        `And so, for the remainder of summer camp, `,
        digital.get_colored_name(),
        ` prepares to run a mock race against `,
        halo.get_colored_name(),
        ` on the final day.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = 'Summer Training Camp (Classic Year) Ends';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} halo King Halo
     * @param {CharaTalk} you Player
     * @param {PrintedSpan} call_61 What Agnes Digital calls King Halo
     * @param {PrintedSpan} callname_61 What King Halo calls the player
     * @param {PrintedSpan} h_call_d What King Halo calls Agnes Digital
     * @param {PrintedSpan} takm_kin Takamatsunomiya Kinen
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      takm_kin,
    ) => {
      await digital.say_and_wait(`Hehe... Phew... Thank you for the match...`);
      await era.printAndWait([
        `On the final day of summer camp, the scheduled match race between `,
        digital.get_colored_name(),
        ` and `,
        halo.get_colored_name(),
        ` concludes.`,
      ]);
      await era.printAndWait(`Yet something felt unmistakably half-hearted.`);
      await halo.say_and_wait([
        `Haah... Phew... `,
        h_call_d,
        `, your stride was quite hesitant. What is the matter?`,
      ]);
      await digital.say_and_wait(
        `Ah, well... Was I blinded by the light, or suffocated by the holy aura in the air...?`,
      );
      await digital.say_and_wait(
        `I've always been on the spectator side... Dreaming of catching up to you was far too presumptuous...`,
      );
      await digital.say_and_wait(
        `I'm just an ordinary fan who only recently found the resolve to take running seriously...`,
      );
      await halo.say_and_wait([
        `My, you certainly lack confidence. But is that truly all? `,
        callname_61,
        `, you know `,
        h_call_d,
        `'s true strength, don't you?`,
      ]);
      await you.say_and_wait(`On sand like this, Digi wouldn't lose.`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` is still preoccupied with `,
        halo.get_colored_name(),
        `'s condition.`,
      ]);
      await digital.say_and_wait([
        call_61,
        `... Right now... you're far from your former self, aren't you?`,
      ]);
      await digital.say_and_wait([
        `This spring, your victory in the `,
        takm_kin,
        `... and now... That fluid running form, that dynamic power, it felt like none of that strength was there today...`,
      ]);
      await digital.say_and_wait(
        `I know this because I watched you from the rail, leaning over every single time.`,
      );
      await digital.say_and_wait([
        `I can start to understand how painful it is for `,
        call_61,
        ` right now, because I've debuted as a runner too...`,
      ]);
      await era.printAndWait([
        `Becoming a racer has allowed `,
        digital.get_colored_name(),
        ` to connect with so much more than before, including painful truths like these.`,
      ]);
      await halo.say_and_wait([
        `So that is why your heart wasn't in it... I see. Hmph... `,
        h_call_d,
        `, you...`,
      ]);
      await halo.say_and_wait(`are a fool.`);
      await digital.say_and_wait(`Huh?`);
      await era.printAndWait([
        `The unexpected words catch `,
        digital.get_colored_name(),
        ` completely off guard.`,
      ]);
      await halo.say_and_wait(`A fool, and a massive one at that.`);
      await halo.say_and_wait(
        `You act like you know everything about me, yet you understand nothing at all.`,
      );
      await era.printAndWait(`Harsh words, delivered with genuine warmth.`);
      await halo.say_and_wait([
        `Tell me, `,
        h_call_d,
        `, you find this `,
        digital.uma_sex_title,
        ` fascinating, don't you?`,
      ]);
      await digital.say_and_wait(`! Yes!`);
      await halo.say_and_wait(
        `Then listen closely: once camp is over, I grant you the privilege of training alongside me!`,
      );
      await halo.say_and_wait([
        `I shall show you exactly what kind of `,
        digital.uma_sex_title,
        ` `,
        halo.get_colored_name(),
        ` truly is!`,
      ]);
      await digital.say_and_wait(`Please do!`);
      await digital.say_and_wait([
        `This is such an honor my tail is practically springing into the air! Digi gets to train with a `,
        digital.sex_code - 1 ? 'goddess' : 'god',
        `!`,
      ]);
      await era.printAndWait([
        `As summer draws to a close, `,
        digital.get_colored_name(),
        ` forms an unbreakable bond with the `,
        digital.uma_sex_title,
        ` ${digital.sex.toLowerCase()} admires most.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_37: (() => {
    const title = 'Mark of a First-Rate';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} halo King Halo
     * @param {PrintedSpan} call_61 What Agnes Digital calls King Halo
     * @param {PrintedSpan} h_call_d What King Halo calls Agnes Digital
     * @param {PrintedSpan} sprt_sta Sprinters Stakes
     * @param {PrintedSpan} mile_cha Mile Championship
     */
    const f = async (digital, halo, call_61, h_call_d, sprt_sta, mile_cha) => {
      await digital.print_and_wait([
        `While `,
        digital.get_colored_name(),
        ` trains toward the `,
        mile_cha,
        `, `,
        halo.get_colored_name(),
        ` is pouring in just as much effort.`,
      ]);
      await digital.print_and_wait([
        `The `,
        sprt_sta,
        `, a sprint G1 race, was supposed to play to `,
        halo.get_colored_name(),
        `'s strengths...`,
      ]);
      await digital.print_and_wait(`Seventh place.`);
      await digital.print_and_wait(`Not even making the board.`);
      await digital.print_and_wait([
        `Shortly after the race, `,
        digital.get_colored_name(),
        ` approaches `,
        halo.get_colored_name(),
        `.`,
      ]);
      await halo.say_and_wait([
        `You came to watch, `,
        h_call_d,
        `. "Leave me be," that is what I intended to say, but since it is you, I shall grant you permission to stay by my side.`,
      ]);
      await digital.say_and_wait([
        `Um... Even if you didn't win, `,
        call_61,
        `'s beauty left me thoroughly enchanted once again.`,
      ]);
      await digital.say_and_wait(
        `Those sharp eyes, that radiant dignity, that gorgeous cornering!`,
      );
      await halo.say_and_wait(`...Is that all?`);
      await digital.say_and_wait(`Huh?`);
      await halo.say_and_wait(
        `Is that truly your entire reason for considering me first-rate?`,
      );
      await digital.print_and_wait([
        digital.get_colored_name(),
        ` continues listing praise, but...`,
      ]);
      await halo.say_and_wait(
        `To be first-rate, there is one thing that matters above all else.`,
      );
      await digital.print_and_wait(
        `The spectators have mostly cleared out of the stands.`,
      );
      await digital.print_and_wait([
        halo.get_colored_name(),
        ` walks to the starting line on the track and takes a starting stance.`,
      ]);
      await halo.say_and_wait(
        `Since you are here, would you care to run with me?`,
      );
      era.drawLine();
      await digital.print_and_wait([
        `Fresh off a race, `,
        halo.get_colored_name(),
        `'s exhaustion is clearly visible.`,
      ]);
      await halo.say_and_wait(
        `Haah... Haah... Cough... Hehehe... Truly unsightly.`,
      );
      await halo.say_and_wait([
        h_call_d,
        `, look at me now. Sharp eyes, dignity, elegance, all gone.`,
      ]);
      await halo.say_and_wait(
        `With not a single trace of first-rate proof remaining, am I still first-rate?`,
      );
      await digital.say_and_wait(`That... That is...`);
      await halo.say_and_wait(`Yet even like this.`);
      await digital.print_and_wait([
        `The piercing gaze seen during races blazes once more in `,
        halo.get_colored_name(),
        `'s eyes.`,
      ]);
      await halo.say_and_wait(`What if I run another race?`);
      await halo.say_and_wait(`If that fails, what if I run another tomorrow?`);
      await halo.say_and_wait(
        `And if I fail tomorrow, what if I try again the day after?`,
      );
      await halo.say_and_wait([
        h_call_d,
        `! Look at me closely. Do I truly have nothing left?`,
      ]);
      await digital.say_and_wait(`!`);
      await digital.say_and_wait(
        `There's still something there! Like a pioneer's compass, like eternal ice, it never wavers!`,
      );
      await halo.say_and_wait(
        `An unyielding conviction. A heart that refuses to break, no matter how many times it gets knocked down.`,
      );
      await halo.say_and_wait(
        `That alone is something no one can ever take from me.`,
      );
      await halo.say_and_wait(
        `That is precisely why King remains forever first-rate!`,
      );
      await digital.print_and_wait([
        `Even if physical stamina fades, `,
        halo.get_colored_name(),
        `'s first-rate spirit and unyielding will have never diminished in the slightest.`,
      ]);
      await digital.say_and_wait([`Ooooh... `, call_61, `...!`]);
      await digital.print_and_wait([
        `Even covered in bruises and exhaustion, `,
        halo.get_colored_name(),
        `'s figure remains breathtakingly beautiful.`,
      ]);
      await halo.say_and_wait([
        `I promise you: by the `,
        mile_cha,
        `, I shall return to peak form!`,
      ]);
      await halo.say_and_wait(
        `If you take pity on me and hold back your full strength, that would be the ultimate insult.`,
      );
      await digital.say_and_wait(
        `Yes, I understand. I have received this piece of first-rate spirit.`,
      );
      await digital.say_and_wait(
        `Please allow me to say just one thing right now...`,
      );
      await digital.say_and_wait([
        `You truly are... a `,
        halo.sex_code !== 1 ? 'goddess' : 'god',
        `...`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_mile_cha_c: (() => {
    const title = 'Mile Championship Begins!';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} halo King Halo
     * @param {PrintedSpan} h_call_d What King Halo calls Agnes Digital
     */
    const f = async (digital, halo, h_call_d) => {
      await era.printAndWait([
        halo.get_colored_name(),
        `, the `,
        digital.uma_sex_title,
        ` `,
        digital.get_colored_name(),
        ` looked up to long before debuting, is now standing right beside ${digital.sex === 'She' ? 'her' : 'him'}.`,
      ]);
      await era.printAndWait([
        `In the paddock, `,
        halo.get_colored_name(),
        ` has swept away all previous gloom, brimming with an aura so fierce ${halo.sex.toLowerCase()} seems back at ${halo.sex === 'She' ? 'her' : 'his'} peak.`,
      ]);
      await halo.say_and_wait([
        `Well, `,
        h_call_d,
        `? Am I dazzling enough today to blind you?`,
      ]);
      await digital.say_and_wait(
        `Yes! Incredibly dazzling! Though... your posture isn't quite as straight as it was this spring...`,
      );
      await halo.say_and_wait(
        `Aha... Truly nothing escapes your eyes, does it?`,
      );
      await halo.say_and_wait([h_call_d, `, just how much do you love me?`]);
      await digital.say_and_wait(
        `My devotion runs deeper than the Mariana Trench!`,
      );
      await era.printAndWait([
        halo.get_colored_name(),
        ` and `,
        digital.get_colored_name(),
        ` chat and laugh, making it clear `,
        digital.couple_title,
        ` will deliver an unforgettable race.`,
      ]);
      await digital.say_and_wait(
        `In today's race, I want to truly understand what drives you!`,
      );
      await halo.say_and_wait([
        `Then experience what it means to be first-rate with your whole body and soul, `,
        h_call_d,
        `!`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  mile_cha_win_c: (() => {
    const title = 'Mile Championship Victory';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} halo King Halo
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} call_15 What Agnes Digital calls TM Opera O
     * @param {PrintedSpan} call_58 What Agnes Digital calls Meisho Doto
     * @param {PrintedSpan} call_61 What Agnes Digital calls King Halo
     * @param {PrintedSpan} h_call_d What King Halo calls Agnes Digital
     * @param {PrintedSpan} mile_cha Mile Championship
     */
    const f = async (
      digital,
      halo,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      h_call_d,
      mile_cha,
    ) => {
      await digital.print_and_wait([
        halo.get_colored_name(),
        ` fought ${halo.sex === 'She' ? 'her' : 'his'} way up from the very bottom, and `,
        digital.get_colored_name(),
        ` watched ${halo.sex === 'She' ? 'her' : 'his'} journey every step of the way.`,
      ]);
      await halo.say_and_wait([
        `Well, `,
        h_call_d,
        `? Now that you have run this race with me, do you understand?`,
      ]);
      await halo.say_and_wait([
        `What kind of `,
        digital.uma_sex_title,
        ` `,
        halo.get_colored_name(),
        ` truly is.`,
      ]);
      await digital.say_and_wait(`Y-Yes...`);
      await digital.print_and_wait([
        `Having learned from `,
        halo.get_colored_name(),
        ` what it truly means to be an `,
        digital.uma_sex_title,
        `, `,
        digital.get_colored_name(),
        ` breaks down in tears of joy after securing victory in the `,
        mile_cha,
        `.`,
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        `'s sheer presence touches `,
        digital.get_colored_name(),
        ` to the core.`,
      ]);
      await halo.say_and_wait(
        `What's wrong? You cannot speak if you keep crying like that.`,
      );
      await digital.say_and_wait(
        `My entire body... was bathed in your brilliance...`,
      );
      await digital.say_and_wait([
        `And I finally understand what it means to live as an `,
        digital.uma_sex_title,
        `.`,
      ]);
      await digital.say_and_wait(
        `Soul and instinct dwell within unyielding running! Regardless of preparation, you embody first-rate pride to the very end!`,
      );
      await digital.say_and_wait(
        `I never understood it before, but now I do: you just have to run! Even if you whine, keep running while you do!`,
      );
      await digital.say_and_wait([
        `Now, I love `,
        digital.uma_sex_title,
        `s more than ever!`,
      ]);
      await halo.say_and_wait([
        `Hehe, you truly adore `,
        digital.uma_sex_title,
        `s, don't you?`,
      ]);
      await halo.say_and_wait([
        h_call_d,
        `, go race against even more `,
        digital.uma_sex_title,
        `s! Absorb everything, and then...`,
      ]);
      await halo.say_and_wait([
        `Become a true all-round runner! After all, you are one of the `,
        digital.uma_sex_title,
        `s you love so dearly!`,
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        ` gives `,
        digital.get_colored_name(),
        ` ${halo.sex === 'She' ? 'her' : 'his'} blessing, wishing for `,
        digital.get_colored_name(),
        ` to face many more `,
        digital.uma_sex_title,
        `s and become a true All-Rounder.`,
      ]);
      era.drawLine({ content: 'Underground Tunnel' });
      await digital.say_and_wait([
        callname,
        `, my comrade, I received something truly priceless from `,
        call_61,
        `.`,
      ]);
      await digital.say_and_wait([
        `To race against more `,
        digital.uma_sex_title,
        `s, what should I do next...?`,
      ]);
      await era.printAndWait(`In that case, the natural next step is...`);
      await era.printAndWait([
        `Together with `,
        digital.get_colored_name(),
        `, you decide to enter even more G1 races.`,
      ]);
      await digital.say_and_wait([
        `Yes, yes! And after that, I want to challenge `,
        call_15,
        ` and `,
        call_58,
        `!`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        `, who once only admired from afar, has finally found the courage to challenge ${digital.sex === 'She' ? 'her' : 'his'} former idols.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = 'New Year Shrine Visit';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param opera
     * @param tachyon
     * @param shakur
     * @param falcon
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} call_15 What Agnes Digital calls TM Opera O
     * @param {PrintedSpan} call_61 What Agnes Digital calls King Halo
     * @param {PrintedSpan} callname_32 What Agnes Tachyon calls the player
     * @param {PrintedSpan} t_call_d What Agnes Tachyon calls Agnes Digital
     * @param {PrintedSpan} s_call_d What Air Shakur calls Agnes Digital
     * @param {PrintedSpan} f_call_d What Smart Falcon calls Agnes Digital
     */
    const f = async (
      digital,
      opera,
      tachyon,
      shakur,
      falcon,
      you,
      callname,
      call_15,
      call_61,
      callname_32,
      t_call_d,
      s_call_d,
      f_call_d,
    ) => {
      await digital.say_and_wait(
        `Dear gods! I don't need merchandise this year, just grant me a rival!`,
      );
      await era.printAndWait([
        `Good grief! What could have provoked `,
        digital.get_colored_name(),
        ` into wishing for something like that?!`,
      ]);
      await you.say_and_wait(`Digi? Why the sudden wish?`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` explains to `,
        you.get_colored_name(),
        ` that `,
        opera.get_colored_name(),
        ` recently pointed out `,
        digital.get_colored_name(),
        ` lacks a true rival.`,
      ]);
      await digital.say_and_wait([
        `Mmh, just as `,
        call_15,
        ` put it, the reason I'm not strong enough yet is...`,
      ]);
      await era.printAndWait(`A rival.`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` lacks a rival. As a trainer, `,
        you.get_colored_name(),
        ` understands how much motivation and drive a rival can give an `,
        digital.uma_sex_title,
        `.`,
      ]);
      await era.printAndWait([
        `Yet `,
        digital.get_colored_name(),
        `'s situation is unique. ${digital.sex === 'She' ? 'Her' : 'His'} pure adoration for `,
        digital.uma_sex_title,
        `s provides motivation remarkably similar to that of a rival.`,
      ]);
      await era.printAndWait([
        `Does `,
        digital.get_colored_name(),
        ` really need a rival?`,
      ]);
      await digital.say_and_wait(
        `Uuu... Because I didn't want to interfere before, I barely spoke to opponents on the track, let alone had rivals. Now I'm paying the price...`,
      );
      await era.printAndWait([
        `Still, using this opportunity to let `,
        digital.get_colored_name(),
        ` interact with other `,
        digital.uma_sex_title,
        `s is a fine idea.`,
      ]);
      await you.say_and_wait(`Then let's go find you a rival!`);
      await era.printAndWait(`And so...`);
      era.drawLine();
      await shakur.say_and_wait(`Hah? A rival? Give it a rest.`);
      await digital.say_and_wait(
        `Wait a second! We're in the same generation, isn't that a perfect fit?`,
      );
      await shakur.say_and_wait([
        `Look, `,
        s_call_d,
        `, I don't know about anyone else, but I'm definitely not the one for this. End of story.`,
      ]);
      era.drawLine();
      await falcon.say_and_wait(
        `Ehh? A rival? That doesn't really match my idol image~`,
      );
      await digital.say_and_wait(
        `No, no, no! Don't idols always have that one rival where they clash on stage but help each other grow behind the scenes?`,
      );
      await falcon.say_and_wait([
        `Ahaha, Falco is just a humble `,
        digital.uma_sex_title,
        ` top idol, so that's not quite my style... But thank you so much for asking, `,
        f_call_d,
        `!`,
      ]);
      era.drawLine();
      await tachyon.say_and_wait([
        `Hehehe... A rival, is it? But `,
        t_call_d,
        `, you as a research subject... no, that doesn't align with my theories!`,
      ]);
      await digital.say_and_wait(`...I see.`);
      await era.printAndWait([
        `Having been turned down multiple times, even `,
        digital.get_colored_name(),
        `'s ears droop slightly.`,
      ]);
      await tachyon.say_and_wait([
        `Don't look so disheartened, `,
        t_call_d,
        `. And you, `,
        callname_32,
        `, you should already know, yes? The ideal rival candidate for `,
        t_call_d,
        `.`,
      ]);
      await era.printAndWait([
        `Fixing ${tachyon.sex === 'She' ? 'her' : 'his'} distinctive gaze upon `,
        you.get_colored_name(),
        `, `,
        tachyon.get_colored_name(),
        ` tilts ${tachyon.sex === 'She' ? 'her' : 'his'} chin toward you meaningfully.`,
      ]);
      await digital.say_and_wait([
        `Ehh?! `,
        callname,
        `, do you know?! Who my rival should be?`,
      ]);
      await you.say_and_wait(`Indeed I do.`);
      await digital.say_and_wait(
        `Then why didn't you tell me right from the start?!`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` is so anxious ${digital.sex.toLowerCase()} almost starts swatting playfully at `,
        you.get_colored_name(),
        `.`,
      ]);
      await tachyon.say_and_wait([
        `It appears that person had their own plans. `,
        t_call_d,
        `, the rest is a mundane explanation. Farewell.`,
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ` takes in the scene and tactfully departs.`,
      ]);
      await you.say_and_wait(
        `Truth be told, part of it was only realizing after you started searching, and part was something I wanted to see for myself...`,
      );
      await you.say_and_wait(
        `The conclusion I reached is simple: your rivals are everyone!`,
      );
      await digital.say_and_wait(
        `Everyone...! So supporting all of them counts?! Wait, does that mean...`,
      );
      await era.printAndWait([
        `Indeed. Watching `,
        digital.get_colored_name(),
        ` approach candidates today made it clear: ${digital.sex.toLowerCase()} reached out to `,
        digital.uma_sex_title,
        `s specializing in both turf and dirt, just like before...`,
      ]);
      await you.say_and_wait(`Picking just one is impossible.`);
      await you.say_and_wait(
        `No matter who you pick, no single rival can match Digi's ability to run on both surfaces. But if your rival is...`,
      );
      await digital.say_and_wait(`Everyone...`);
      await you.say_and_wait(`Exactly.`);
      await digital.say_and_wait(
        `Hahaha, I can't believe it comes back to everyone.`,
      );
      await digital.say_and_wait([
        `Just like `,
        call_61,
        ` said: "Race against more `,
        digital.uma_sex_title,
        `s." I can definitely accomplish that!`,
      ]);
      await digital.say_and_wait(
        `Having everyone as a rival feels pretty greedy when you think about it... What will I gain from them?`,
      );
      era.print([you.get_colored_name(), `'s decision:`]);
      era.printButton(`Nourishment (Stamina +20)`, 1);
      era.printButton(`Power of friendship (All Stats +5)`, 2);
      era.printButton(`Diversity (Skill Points +30)`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait(`If you ask me, it's pure nourishment.`);
          await digital.say_and_wait([
            `Right! Every `,
            digital.uma_sex_title,
            `-chan's unique charm gives me a fresh burst of energy every time!`,
          ]);
          await digital.say_and_wait(
            `Fresh daily fuel! There's no better source of power in the world!`,
          );
          await era.printAndWait([
            `From now on, all the `,
            digital.uma_sex_title,
            `s will surely bring `,
            digital.get_colored_name(),
            ` boundless vitality.`,
          ]);
          break;
        case 2:
          await you.say_and_wait(`That's right, friendship! POWER!`);
          await digital.say_and_wait([
            `Ohoho! As long as every `,
            digital.uma_sex_title,
            `-chan lends me a little bit of their strength, I'll be invincible!`,
          ]);
          await digital.say_and_wait(
            `Hehe, wahaha, just thinking about it fills my entire body with power!`,
          );
          await era.printAndWait([
            `A bit different from everyone giving one UmaCoin, but `,
            digital.get_colored_name(),
            ` will certainly draw strength from the `,
            digital.uma_sex_title,
            `s and grow even stronger.`,
          ]);
          break;
        case 3:
          await you.say_and_wait(`Diversity, without a doubt!`);
          await digital.say_and_wait([
            `Of course! The running styles of `,
            digital.uma_sex_title,
            `-chans are far too diverse to be boxed in by standard labels!`,
          ]);
          await digital.say_and_wait(
            `Just like completing an Umamon encyclopedia, I'll record every single one!`,
          );
          await era.printAndWait([
            `Like a completionist gamer, `,
            digital.get_colored_name(),
            ` is sure to unlock plenty of skills along the way!`,
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = "Valentine's Day";
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     */
    const f = async (digital, you, callname) => {
      await era.printAndWait([
        `Arriving at the trainer office early in the morning, `,
        digital.get_colored_name(),
        ` brings along... a towering stack of chocolates.`,
      ]);
      await era.printAndWait(`Why measure chocolates by the stack?!`);
      await digital.say_and_wait([
        `This is my masterpiece! I poured the distinctive traits of every `,
        digital.uma_sex_title,
        ` I could think of into these chocolates!`,
      ]);
      await era.printAndWait(
        `Looking at the tall tower of stacked chocolate boxes, could every single piece inside be unique?!`,
      );
      await digital.say_and_wait(`Now, let us offer them to the shrine!`);
      await era.printAndWait(`Wait, where did that shrine altar come from?!`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` sets all the chocolates before the shrine, chanting under ${digital.sex === 'She' ? 'her' : 'his'} breath while rubbing ${digital.sex === 'She' ? 'her' : 'his'} hands together in strange motions.`,
      ]);
      await digital.say_and_wait(
        `All done! The Three Goddesses must have received my prayer.`,
      );
      await era.printAndWait(
        `If you're praying to the Three Goddesses, why not go to the courtyard statue?!`,
      );
      await digital.say_and_wait([
        callname,
        `, let's eat them together now! We can't let food go to waste!`,
      ]);
      era.printButton(`"Wait, we can actually eat them?!"`, 1);
      await era.input();
      await digital.say_and_wait(
        `Of course! As long as the thought was conveyed! Besides, wasting food is a complete sacrilege!`,
      );
      await digital.say_and_wait(`Let's snack and chat!`);
      await digital.say_and_wait([
        `Uuu, I'm so lucky to have found a comrade to discuss `,
        digital.uma_sex_title,
        `s with...`,
      ]);
      await digital.say_and_wait([
        `Come on, `,
        callname,
        `, tell me: who is your absolute favorite `,
        digital.uma_sex_title,
        ` right now?`,
      ]);
      await era.printAndWait(`Is that even a question?`);
      era.printButton(`"Here, these chocolates are for you."`, 1);
      await era.input();
      await era.printAndWait(`Taking chocolates out from the fridge...`);
      await digital.say_and_wait(`Oh, they're for me.`);
      await digital.say_and_wait(`Wait, eeeeeek?! Real chocolates for me?!`);
      await digital.say_and_wait([
        `W-What boundless benevolence is this?! Someone actually wants to support such a niche `,
        digital.uma_sex_title,
        `?`,
      ]);
      await you.say_and_wait([
        `What are you talking about? I'm your `,
        callname,
        `... Besides, why do you think you're niche? Your follower count on UmaTwitter is pretty huge, isn't it?`,
      ]);
      await era.printAndWait([
        `Hearing this, `,
        digital.get_colored_name(),
        ` suddenly begins stammering.`,
      ]);
      await digital.say_and_wait(
        `Well... The truth is, my account had lots of followers even before my debut because of all the... doujinshi I made...`,
      );
      await era.printAndWait([
        `Oh? Come to think of it, you did hear rumors that `,
        digital.get_colored_name(),
        ` was quite well-known in certain circles before debuting...`,
      ]);
      await digital.say_and_wait([
        `Regardless! `,
        callname,
        `'s dedication is the gold standard of an otaku! If it's with you, I could spend Valentine's Day together for the next ten years and beyond!`,
      ]);
      await era.printAndWait([
        `Chatting back and forth with `,
        digital.get_colored_name(),
        `, you spend a lively Valentine's Day together.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'Fan Appreciation Festival';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} luna Symboli Rudolf
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     */
    const f = async (digital, luna, you, callname) => {
      await digital.say_and_wait([
        `The day made for Digi, for `,
        digital.get_colored_name(),
        `, is finally here! Waaah, look at everything around us! It's pure paradise for fans...`,
      ]);
      await era.printAndWait([
        `The Fan Appreciation Festival. As the name implies, it's an event where race `,
        digital.uma_sex_title,
        `s show appreciation to the fans who support them.`,
      ]);
      await era.printAndWait(
        `In practice, it feels quite a bit like a school culture festival.`,
      );
      await era.printAndWait([
        `However, `,
        digital.get_colored_name(),
        `, your role today isn't just that of a fan!`,
      ]);
      await you.say_and_wait(
        `Actually, Digi, today you're one of the stars being cheered for!`,
      );
      await digital.say_and_wait(`Kyaaa!`);
      await digital.say_and_wait(`No, no, no, someone like me...`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` wears a look of total disbelief, which might have made sense in the past...`,
      ]);
      await you.say_and_wait(
        `After pulling off such amazing results in so many races, you should give yourself some credit. Even if some fans knew you from before, you've gained tons of brand-new fans.`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` throws up ${digital.sex === 'She' ? 'her' : 'his'} hands in defeat, apparently resigned to the truth.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` then heads to the autograph booth.`,
      ]);
      await era.printAndWait([
        `At first `,
        digital.get_colored_name(),
        ` seems a little awkward, but before long...`,
      ]);
      await digital.say_and_wait(
        `Here you go! All neatly signed on the board for you!`,
      );
      await era.printAndWait(
        `Somehow, ${digital.sex.toLowerCase()} has every single fan leaving the line with a beaming smile?!`,
      );
      await digital.say_and_wait(
        `Since I've always been on the fan side, I know exactly how fans feel.`,
      );
      await digital.say_and_wait([
        `Also, `,
        callname,
        `, could you let me optimize this venue later? Once I get permission, I'll show you Digi's true event-organizer soul!`,
      ]);
      await era.printAndWait([
        `After securing permission from the staff, `,
        digital.get_colored_name(),
        ` sweeps through every booth, streamlining all kinds of activities with incredible efficiency?!`,
      ]);
      await era.printAndWait([
        `Word eventually reaches `,
        luna.get_colored_name(),
        `, who comes over leading a group of `,
        digital.uma_sex_title,
        `s to express their gratitude...`,
      ]);
      await digital.say_and_wait(
        `What's happening?! Is today the day I become the idol?!`,
      );
      await era.printAndWait([
        `Fainting from sheer excitement, `,
        digital.get_colored_name(),
        ` wraps up ${digital.sex === 'She' ? 'her' : 'his'} eventful day.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_17: (() => {
    const title = 'Watching the NHK Mile Cup';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {PrintedSpan} nhk_cup NHK Mile Cup
     */
    const f = async (digital, nhk_cup) => {
      await era.printAndWait([
        `You come together with `,
        digital.get_colored_name(),
        ` to watch the `,
        nhk_cup,
        `, where `,
        digital.get_colored_name(),
        ` fought so hard last year.`,
      ]);
      await era.printAndWait([
        `Lately, `,
        digital.get_colored_name(),
        ` has been keeping an eye on younger juniors. The one that caught ${digital.sex === 'She' ? 'her' : 'his'} attention most,`,
      ]);
      await era.printAndWait([
        `and also the winner of this year's `,
        nhk_cup,
        `, is the sensational new rookie, Kurofune.`,
      ]);
      await digital.say_and_wait(
        `Ooooh, that massive stride, those long, graceful legs! I-I can't take it!`,
      );
      await digital.say_and_wait([
        `Kurofune ran across the very turf I raced on!`,
      ]);
      await digital.say_and_wait(
        `I feel something welling up deep inside my chest!`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` rushes straight to the railing...`,
      ]);
      await digital.say_and_wait(
        `Kurofune-san! Keep it up! No matter what lies ahead, your senpais will always support you!`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` has experienced so much since last year's `,
        nhk_cup,
        `.`,
      ]);
      await era.printAndWait([
        `Seeing a new generation take the stage one year later and watching the legacy continue fills `,
        digital.get_colored_name(),
        ` with deep emotion.`,
      ]);
      await era.printAndWait([
        `Returning to your side, `,
        digital.get_colored_name(),
        ` begins introducing Kurofune all over again...`,
      ]);
      era.println();
      await era.printAndWait([
        `Because Kurofune shares `,
        digital.get_colored_name(),
        `'s versatility across different surfaces, `,
        digital.get_colored_name(),
        ` feels a natural kinship.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` has grown from a simple fan admiring idols into a caring senior watching over juniors.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_23: (() => {
    const title = "The Hero's Challenge";
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} opera TM Opera O
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} you Player
     * @param {PrintedSpan} call_15 What Agnes Digital calls TM Opera O
     * @param {PrintedSpan} call_58 What Agnes Digital calls Meisho Doto
     * @param {PrintedSpan} tenn_sho Tenno Sho (Autumn)
     */
    const f = async (digital, opera, doto, you, call_15, call_58, tenn_sho) => {
      await era.printAndWait([
        `Having competed in numerous major races leading up to summer training camp, `,
        digital.get_colored_name(),
        ` has amassed plenty of valuable experience.`,
      ]);
      await era.printAndWait([
        `Looking back on previous races with `,
        digital.get_colored_name(),
        `, you recall so many meaningful encounters.`,
      ]);
      await digital.say_and_wait([
        `Right! The time has come! The Battle of Hulao Pass! Time to send formal challenge letters to `,
        call_15,
        ` and `,
        call_58,
        `!`,
      ]);
      await digital.say_and_wait(`Hmm... Wait, which race should we pick?`);
      await era.printAndWait([
        `That is indeed a question. Both `,
        opera.get_colored_name(),
        ` and `,
        doto.get_colored_name(),
        ` have poor dirt aptitudes, and their mile aptitudes aren't great either.`,
      ]);
      await era.printAndWait([
        `Meanwhile, `,
        digital.get_colored_name(),
        ` struggles over long distances...`,
      ]);
      await you.say_and_wait(
        `If you truly want to challenge them, the premier medium-distance turf races are the only real choice.`,
      );
      await era.printAndWait(`However, that means...`);
      await digital.say_and_wait([
        `True... I wouldn't want to drag `,
        digital.couple_title,
        ` into my muddy sandbox... We have to settle this fair and square on their home turf.`,
      ]);
      await era.printAndWait([
        `Facing `,
        opera.get_colored_name(),
        `, whose title as the Century's End Overlord is now undisputed, and the fiercely pursuing `,
        doto.get_colored_name(),
        `, at their prime distance...`,
      ]);
      await you.say_and_wait([tenn_sho, `, that's the most fitting stage.`]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` will have zero surface advantage in this race.`,
      ]);
      await digital.say_and_wait(
        `Yes! That's the one! The Tokyo 2000m turf track, nothing could be more perfect!`,
      );
      await you.say_and_wait(`Are you truly ready for this?`);
      await digital.say_and_wait(`Huh? What do you mean?`);
      await you.say_and_wait(`It will be an uphill battle.`);
      await era.printAndWait([
        `Even `,
        digital.get_colored_name(),
        ` falls briefly silent when confronted with the harsh reality.`,
      ]);
      await digital.say_and_wait(
        `...Ah, it's just my gamer nature. Like refusing to play on the lowest difficulty or refusing to wear overpowered free DLC gear...`,
      );
      await digital.say_and_wait(
        `Besides, I want to witness the greatest race possible!`,
      );
      await digital.say_and_wait(
        `So you'll accompany me all the way, won't you!`,
      );
      await you.say_and_wait(`Of course!`);
      await era.printAndWait([
        `That's `,
        digital.get_colored_name(),
        ` through and through.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Summer Training Camp (Senior Year) Begins';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} halo King Halo
     * @param {CharaTalk} you Player
     * @param {PrintedSpan} call_15 What Agnes Digital calls TM Opera O
     * @param {PrintedSpan} call_58 What Agnes Digital calls Meisho Doto
     * @param {PrintedSpan} call_61 What Agnes Digital calls King Halo
     * @param {PrintedSpan} h_call_d What King Halo calls Agnes Digital
     * @param {PrintedSpan} nhk_cup NHK Mile Cup
     * @param {PrintedSpan} tenn_sho Tenno Sho (Autumn)
     */
    const f = async (
      digital,
      halo,
      you,
      call_15,
      call_58,
      call_61,
      h_call_d,
      nhk_cup,
      tenn_sho,
    ) => {
      await digital.say_and_wait(
        `Ughhh, this year, just this once... There's no time! I have to put it on pause!`,
      );
      await era.printAndWait([
        `Right at the start of summer camp, `,
        digital.get_colored_name(),
        ` is seen clutching ${digital.sex === 'She' ? 'her' : 'his'} head in agony. After spending so much time around `,
        digital.get_colored_name(),
        `, `,
        you.get_colored_name(),
        ` has come to understand ${digital.sex === 'She' ? 'her' : 'his'} passion for creating doujinshi.`,
      ]);
      await era.printAndWait([
        digital.sex,
        ` takes ${digital.sex === 'She' ? 'her' : 'his'} self-published doujinshi to conventions to spread the word, showing true dedication.`,
      ]);
      await era.printAndWait(
        `And the next major convention happens right during summer camp.`,
      );
      await digital.say_and_wait([
        tenn_sho,
        `! This summer, no new `,
        call_61,
        ` doujin! I'm dedicating everything to the race!`,
      ]);
      await era.printAndWait([
        `It seems `,
        digital.get_colored_name(),
        ` places immense importance on this clash with TM Opera O and Meisho Doto, so this summer camp should go smoothly.`,
      ]);
      await halo.say_and_wait(`My, so I will not get to see it for a while.`);
      await digital.say_and_wait([`Hyaah! `, call_61, `!`]);
      await halo.say_and_wait([
        `More importantly, `,
        h_call_d,
        `, you are entering the `,
        tenn_sho,
        ` this year, correct?`,
      ]);
      await digital.say_and_wait([
        `Y-Yes... After training under `,
        call_61,
        `, both body and mind... the time has finally come to face `,
        call_15,
        ` and `,
        call_58,
        `!`,
      ]);
      await halo.say_and_wait([
        `Then the `,
        tenn_sho,
        ` will be a clash of three, or rather, four competitors.`,
      ]);
      await digital.say_and_wait([
        `Huh? Is there another top-tier `,
        digital.uma_sex_title,
        `-chan entering?`,
      ]);
      await halo.say_and_wait([
        `You went to watch this year's `,
        nhk_cup,
        `, didn't you?`,
      ]);
      await digital.say_and_wait([
        `Of course, because I'm `,
        digital.get_colored_name(),
        `! Ahahaha... Wait, don't tell me...`,
      ]);
      await era.printAndWait([
        `In fact, `,
        you.get_colored_name(),
        ` heard rumors a few days ago as well...`,
      ]);
      await halo.say_and_wait([
        `Kurofune will be entering this year's `,
        tenn_sho,
        ` as well.`,
      ]);
      await era.printAndWait([
        `Kurofune... the `,
        digital.uma_sex_title,
        ` who seized this year's NHK Mile Cup with terrifying speed.`,
      ]);
      await era.printAndWait([
        `So ${digital.sex.toLowerCase()} will be competing in this race too.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = 'Summer Training Camp (Senior Year) Ends';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} opera TM Opera O
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} call_15 What Agnes Digital calls TM Opera O
     * @param {PrintedSpan} call_58 What Agnes Digital calls Meisho Doto
     * @param {PrintedSpan} call_61 What Agnes Digital calls King Halo
     * @param {PrintedSpan} tenn_sho Tenno Sho (Autumn)
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      tenn_sho,
    ) => {
      await era.printAndWait([
        `Throughout this summer camp, `,
        digital.get_colored_name(),
        ` worked exceptionally hard. `,
        you.get_colored_name(),
        ` has never seen `,
        digital.get_colored_name(),
        ` so focused.`,
      ]);
      await era.printAndWait([
        `The promise made with senpais `,
        opera.get_colored_name(),
        ` and `,
        doto.get_colored_name(),
        `, combined with the upcoming clash against junior Kurofune, has put `,
        digital.get_colored_name(),
        ` in the best shape of ${digital.sex === 'She' ? 'her' : 'his'} life!`,
      ]);
      await digital.say_and_wait([
        callname,
        `, I can feel it! It's like I'm a hero blessed by everyone! Now I can finally take on `,
        digital.couple_title,
        `!`,
      ]);
      await you.say_and_wait(`Think you can win?`);
      await digital.say_and_wait(
        `Honestly, I'm terrified! Against those three, I don't feel confident I can beat any of them...`,
      );
      await digital.say_and_wait(
        `All I can do is rely on all the diverse experience I've built up along the way!`,
      );
      await era.printAndWait([
        `No matter how tall the wall ahead stands, `,
        digital.get_colored_name(),
        ` shows no hesitation.`,
      ]);
      await era.printAndWait(`However, late that night...`);
      await era.printAndWait(
        `news arrives that Kurofune has been excluded from the race.`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` calls `,
        you.get_colored_name(),
        ` out to the late-night beach, standing silently with head lowered.`,
      ]);
      await era.printAndWait([
        `After a long silence, `,
        digital.get_colored_name(),
        ` finally speaks.`,
      ]);
      await digital.say_and_wait([
        callname,
        `... Tell me, can something like this really happen?`,
      ]);
      await era.printAndWait([
        `Fractures, fan votes, lotteries, strategic withdrawals... `,
        digital.get_colored_name(),
        ` has seen all kinds of reasons for missing a race.`,
      ]);
      await era.printAndWait([
        `Yet being turned away simply due to an unexpected lack of entry slots is something `,
        digital.get_colored_name(),
        ` has never encountered before.`,
      ]);
      await digital.say_and_wait(
        `Because it's a competition, there will always be smiles of victory and tears of defeat.`,
      );
      await digital.say_and_wait([
        `Yet beyond those tears, there is always inspiration. That's why `,
        digital.uma_sex_title,
        `s can clash again on the next track.`,
      ]);
      await digital.say_and_wait(
        `...But... what if you aren't even allowed to run in the first place...?`,
      );
      await era.printAndWait(
        `Preparing everything, only to be denied the starting gate.`,
      );
      await digital.say_and_wait([
        `If ${digital.sex === 'She' ? 'her' : 'his'} dream was cut short simply because of my entry...`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` is deeply disheartened, already showing signs of wanting to back out.`,
      ]);
      await you.say_and_wait([
        `Are you saying you won't run in the `,
        tenn_sho,
        `?!`,
      ]);
      await digital.say_and_wait(`N-No, that's not it...`);
      await digital.say_and_wait([
        `Even someone like me... has a promise to keep with `,
        call_15,
        ` and `,
        call_58,
        `...`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` knows ${digital.sex.toLowerCase()} cannot change the situation.`,
      ]);
      await era.printAndWait([
        `Because ${digital.sex.toLowerCase()} loves `,
        digital.uma_sex_title,
        `s, that junior's plight clings to ${digital.sex === 'She' ? 'her' : 'his'} feet like tangled weeds.`,
      ]);
      await era.printAndWait(`However, if things stay like this...`);
      await you.say_and_wait([
        `Have faith in ${digital.sex === 'She' ? 'her' : 'him'}. And at the same time, have faith in yourself.`,
      ]);
      await digital.say_and_wait([
        `What... What do you mean? Have faith in ${digital.sex === 'She' ? 'her' : 'him'}...?`,
      ]);
      await you.say_and_wait([
        `Kurofune's stride will not stop here. `,
        digital.sex,
        ` still has next year. It's true ${digital.sex.toLowerCase()} cannot run in this year's `,
        tenn_sho,
        `...`,
      ]);
      await you.say_and_wait([
        `But do you really think ${digital.sex.toLowerCase()} will crumble and retire over this?`,
      ]);
      await digital.say_and_wait(`! N-No... definitely not.`);
      await era.printAndWait([
        `A remarkable `,
        digital.uma_sex_title,
        ` will not be broken by setbacks like this.`,
      ]);
      await you.say_and_wait(
        `Giving your absolute best performance is the greatest answer you can give Kurofune.`,
      );
      await digital.say_and_wait([
        `...What `,
        digital.uma_sex_title,
        `-chans grasp at the end of their struggles... after witnessing those champions, I know it is something truly peerless.`,
      ]);
      await digital.say_and_wait(
        `All the sorrow, even the bitter frustration, turns into tomorrow's strength! I understand now! Because I've felt it with my own body!`,
      );
      await digital.say_and_wait([
        `That's why I can say from the bottom of my heart: `,
        digital.uma_sex_title,
        `s are truly the best!`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` leaps up and runs to the water's edge.`,
      ]);
      await digital.say_and_wait([
        `No matter the hardships, an `,
        digital.uma_sex_title,
        ` will blow them all away with unyielding resolve, yaaahhhhh!!!!!`,
      ]);
      await digital.say_and_wait([
        `Whether it's me or ${digital.sex.toLowerCase()}! We will both overcome it, no matter what!!!!`,
      ]);
      await digital.say_and_wait(`...Haah, haah...`);
      await era.printAndWait([
        `After shouting ${digital.sex === 'She' ? 'her' : 'his'} lungs out, `,
        digital.get_colored_name(),
        ` regains ${digital.sex === 'She' ? 'her' : 'his'} composure.`,
      ]);
      await you.say_and_wait(`Looks like you've found your answer, Digi.`);
      await digital.say_and_wait([
        `...I can't stop here either. I have to show ${digital.sex === 'She' ? 'her' : 'him'} the precious spirit I received from `,
        call_61,
        `!`,
      ]);
      await digital.say_and_wait([
        `I will enter the `,
        tenn_sho,
        `, and I will secure an overwhelming victory!`,
      ]);
      await digital.say_and_wait([
        `So that ${digital.sex.toLowerCase()} will give everything to chase after me in next year's race!`,
      ]);
      await digital.say_and_wait(`I swear it! I absolutely will!`);
      await digital.say_and_wait([
        `And I'll pour out all the feelings from every `,
        digital.uma_sex_title,
        ` I've met so far!`,
      ]);
      await digital.say_and_wait(`That is my duty!`);
      await era.printAndWait(
        `To win, and to win decisively, putting an end to any lingering regrets for Kurofune.`,
      );
      await era.printAndWait([
        `That is the responsibility `,
        digital.get_colored_name(),
        ` has placed upon ${digital.sex === 'She' ? 'her' : 'his'} own shoulders.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = 'Tenno Sho (Autumn) Begins!';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} opera TM Opera O
     * @param {CharaTalk} doto Meisho Doto
     * @param {PrintedSpan} call_15 What Agnes Digital calls TM Opera O
     * @param {PrintedSpan} call_58 What Agnes Digital calls Meisho Doto
     * @param {PrintedSpan} o_call_di What TM Opera O calls Agnes Digital
     * @param {PrintedSpan} do_call_di What Meisho Doto calls Agnes Digital
     * @param {PrintedSpan} tenn_sho Tenno Sho (Autumn)
     */
    const f = async (
      digital,
      opera,
      doto,
      call_15,
      call_58,
      o_call_di,
      do_call_di,
      tenn_sho,
    ) => {
      await era.printAndWait([
        `The day of the `,
        tenn_sho,
        ` has finally arrived.`,
      ]);
      await era.printAndWait([
        `In the paddock, `,
        digital.get_colored_name(),
        ` meets those two familiar competitors.`,
      ]);
      await digital.say_and_wait([
        `Let's have a great race, `,
        call_15,
        ` and `,
        call_58,
        `!`,
      ]);
      await doto.say_and_wait([
        `Same to you! Let's do our best, `,
        do_call_di,
        `!`,
      ]);
      await era.printAndWait([
        `After three years, `,
        digital.get_colored_name(),
        ` can finally converse naturally in front of ${digital.sex === 'She' ? 'her' : 'his'} idols.`,
      ]);
      await opera.say_and_wait(
        `Ahahaha, are you two exchanging business cards? As the Supreme Overlord, my brilliance speaks for itself! No introduction needed!`,
      );
      await opera.say_and_wait([o_call_di, `, welcome to my coronation!`]);
      await opera.say_and_wait(
        `I have witnessed all your hard work. I must acknowledge that you have reached our heels.`,
      );
      await opera.say_and_wait([
        `Yet behind us remains behind us! `,
        o_call_di,
        `, on this turf, you cannot best me, the Century's End Overlord ruling over medium-distance turf!`,
      ]);
      await digital.say_and_wait(
        `Indeed... In raw power, I might not match you yet...`,
      );
      await digital.say_and_wait(
        `However, my skills honed across both turf and dirt...`,
      );
      await era.printAndWait([
        `Indeed, the dual-wielding `,
        digital.get_colored_name(),
        ` holds an advantage in this turf race that will become clear momentarily.`,
      ]);
      await era.printAndWait(`Drip... drop...`);
      await era.printAndWait(`Pitter... patter...`);
      await era.printAndWait(
        `Starting as a light drizzle, it quickly turns into a steady downpour!`,
      );
      await era.printAndWait([
        `Heavy turf! The condition for this `,
        tenn_sho,
        ` is heavy ground!`,
      ]);
      await digital.say_and_wait([
        `Are these... tears from `,
        digital.uma_sex_title,
        `-chans...? No, these are tears of joy from every `,
        digital.uma_sex_title,
        `-chan I've ever met, celebrating my coming victory!`,
      ]);
      await opera.say_and_wait(
        `...Rain, is it? Know this: I excel on heavy ground as well. An Overlord adapts to any condition!`,
      );
      await doto.say_and_wait(`Awaawa... It's pouring...!`);
      await era.printAndWait([
        `TM Opera O may handle heavy ground well, but `,
        digital.get_colored_name(),
        ` goes far beyond merely handling it!`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` has literally conquered pure mud tracks. In these conditions...`,
      ]);
      await era.printAndWait(`Victory is the only outcome.`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = 'Tenno Sho (Autumn) Victory';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} tenn_sho Tenno Sho (Autumn)
     */
    const f = async (digital, you, callname, tenn_sho) => {
      await era.printAndWait(`Thud, thud, thud, thud!`);
      await era.printAndWait([
        `With heavy footfalls echoing, the `,
        digital.uma_sex_title,
        `s close in on the grandstand. Sweeping wide on the outside is...`,
      ]);
      await you.say_as_passer_by_and_wait('Commentator', [
        digital.get_colored_name(),
        `! It's `,
        digital.get_colored_name(),
        `! Through the rain, over the battered turf, bursting from the pack on the optimal line! And now!`,
      ]);
      await you.say_as_passer_by_and_wait('Commentator', [
        `Crossing the line! Conquering the `,
        tenn_sho,
        ` with an astonishing run, `,
        digital.get_colored_name(),
        `!`,
      ]);
      await era.printAndWait([
        `All the knowledge, technique, and emotion `,
        digital.get_colored_name(),
        ` accumulated provided the perfect conditions for this moment.`,
      ]);
      await era.printAndWait([
        digital.sex,
        ` looked entirely at home on the muddy turf. As a trainer, `,
        you.get_colored_name(),
        ` could find no flaw in ${digital.sex === 'She' ? 'her' : 'his'} pathing or final burst.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` claims an undeniable victory.`,
      ]);
      era.println();
      await digital.say_and_wait(`Hehe... Cough, cough... Ahahaha...`);
      await digital.say_and_wait(`It's my win, right?`);
      await you.say_and_wait(`Yes, it's your victory, Digi.`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` turns around to face the roaring stands.`,
      ]);
      await digital.say_and_wait(`WOOOOOOOOHHHHHHHH!`);
      await you.say_as_passer_by_and_wait('Crowd', `WOOOOOOOOHHHHHHHH!`);
      await digital.say_and_wait(`HYAAAHHHHHHHHH!`);
      await you.say_as_passer_by_and_wait('Crowd', `HYAAAHHHHHHHHH!`);
      await digital.say_and_wait(`YEAH! HEY! OH! WOOOOOH!`);
      await you.say_as_passer_by_and_wait('Crowd', `YEAH! HEY! OH! WOOOOOH!`);
      await era.printAndWait(
        `Hahaha, everyone's voices are turning hoarse from cheering.`,
      );
      await era.printAndWait([
        `Instead of standard name chants, the call-and-response is unmistakably `,
        digital.get_colored_name(),
        `'s unique style.`,
      ]);
      await era.printAndWait([
        `Running over with arms wide open, `,
        digital.get_colored_name(),
        ` reaches across the railing and pulls `,
        you.get_colored_name(),
        ` into a tight hug.`,
      ]);
      await digital.say_and_wait([
        callname,
        `! An undiscovered view, a brand-new world!`,
      ]);
      await digital.say_and_wait(
        `Feeling the energy of the crowd's call from up on stage! This feeling is truly unmatched!`,
      );
      await you.say_and_wait(`Indeed! This is your call, Digi, one of a kind!`);
      await digital.say_and_wait(
        `Kurofune... I seized victory from those two champions...`,
      );
      await era.printAndWait([
        `Whether Kurofune watched with regret or sorrow, seeing this race must have brought some closure.`,
      ]);
      await digital.say_and_wait(
        `On my own, I could never have done it. I always believed that. That's why I pinned my hopes on my idols...`,
      );
      await digital.say_and_wait(`Yet...`);
      era.printButton(`"My number-one idol has always been you!"`, 1);
      await era.input();
      await digital.say_and_wait([
        `Ahahaha, ehehehe... `,
        callname,
        `, saying that right now is just... I'm gonna, I'm gonna...`,
      ]);
      await digital.say_and_wait([
        `Here, take some fan service! Yes, pure fan service! `,
        callname,
        `, do you want a strand of hair from my tail?!`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` is so overjoyed ${digital.sex.toLowerCase()} has started babbling nonsense.`,
      ]);
      era.printButton(`"Head to the podium. Everyone is waiting."`, 1);
      await era.input();
      await digital.say_and_wait(`Oh! How careless of me, I almost forgot!`);
      await era.printAndWait([
        `Lifting `,
        you.get_colored_name(),
        ` right over the railing, `,
        digital.get_colored_name(),
        ` walks with `,
        you.get_colored_name(),
        ` to the podium.`,
      ]);
      era.println();
      await digital.say_and_wait([
        `Th-Th-Thank you so much! I am `,
        digital.get_colored_name(),
        `! At the end of the day, I'm just a huge fan of `,
        digital.uma_sex_title,
        `-chans...`,
      ]);
      await digital.say_and_wait([
        `I only made it here by chasing after `,
        digital.uma_sex_title,
        `-chans' tails...`,
      ]);
      await digital.say_and_wait([
        `Can you feel it?! This overwhelming emotion?! At the very beginning, I wasn't even a regular `,
        digital.uma_sex_title,
        `, just an ordinary fan in the crowd!`,
      ]);
      await digital.say_and_wait(
        `Yet to stand among this brilliance, in this sacred spectacle, and cross the line in first place... I am beyond grateful...`,
      );
      await digital.say_and_wait(
        `This victory isn't my accomplishment alone; it's the culmination of everyone I've met along the way.`,
      );
      await digital.say_and_wait([
        `Every `,
        digital.uma_sex_title,
        `-chan on this journey, the fans I never dreamed I'd have, and `,
        callname,
        `!`,
      ]);
      await digital.say_and_wait(`Today, all of you brought me this victory.`);
      await digital.say_and_wait(
        `Thank you... from the bottom of my heart, thank you...`,
      );
      await digital.say_and_wait([
        digital.uma_sex_title,
        `-chans are a hundred times, a thousand times more radiant than I ever imagined as a fan...`,
      ]);
      await era.printAndWait([
        `Before long, `,
        digital.get_colored_name(),
        ` begins introducing the other competitors in the race one by one.`,
      ]);
      await digital.say_and_wait(
        `Did you see that gallant short hair fluttering during that ferocious sprint?!`,
      );
      await digital.say_and_wait(`And the way that stride shook the ground...`);
      await digital.say_and_wait(
        `And Kurofune, who couldn't be here today... Someday, we definitely have to race together on the dirt...`,
      );
      era.println();
      await era.printAndWait([
        `The floodgates are open, and `,
        digital.get_colored_name(),
        ` keeps chatting away when...`,
      ]);
      await you.say_as_passer_by_and_wait('Staff', [
        `Trainer of `,
        digital.get_colored_name(),
        `, apologies for interrupting the excitement, but the Winning Live...`,
      ]);
      await era.printAndWait([
        `You try calling out to `,
        digital.get_colored_name(),
        `, but ${digital.sex.toLowerCase()} seems completely oblivious.`,
      ]);
      await era.printAndWait(
        `Looks like dragging ${digital.sex === 'She' ? 'her' : 'him'} off by force is the only option.`,
      );
      await digital.say_and_wait([`Wait, `, callname, `?!`]);
      await digital.say_and_wait(
        `Hold on, please let me say just one more thing, just one last line!`,
      );
      await digital.say_and_wait([
        digital.uma_sex_title,
        `s are truly the absolute BESTTTTTTTT!!!!`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = 'Christmas';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} luna Symboli Rudolf
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {CharaTalk} l_call_d What Symboli Rudolf calls Agnes Digital
     */
    const f = async (digital, luna, you, callname, l_call_d) => {
      await era.printAndWait([
        `Tracen Academy generally encourages free activities for Christmas, as it is a special occasion for `,
        digital.uma_sex_title,
        `s.`,
      ]);
      await era.printAndWait([
        `For those spending the holiday on campus, the academy also hosts large internal events to spread festive cheer.`,
      ]);
      await era.printAndWait([
        `You weave through various event booths with `,
        digital.get_colored_name(),
        `, sampling treats, playing games, and engaging in passionate discussions together.`,
      ]);
      await era.printAndWait([
        `Suddenly, `,
        luna.get_colored_name(),
        ` and a small group appear before `,
        you.get_colored_name(),
        `.`,
      ]);
      await digital.say_and_wait(`Wah, were we being too loud?`);
      await luna.say_and_wait(
        `Do not worry. If anything, consider this a reward.`,
      );
      await era.printAndWait([
        luna.sex,
        ` produces a large gift box from behind ${luna.sex === 'She' ? 'her' : 'his'} back and hands it to `,
        digital.get_colored_name(),
        `...`,
      ]);
      await digital.say_and_wait(`This is...`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` opens the gift box, revealing...`,
      ]);
      await era.printAndWait(
        `A stack of shikishi boards, densely covered with various signatures.`,
      );
      await digital.say_and_wait(`No, this... this is...! Autographs!`);
      await era.printAndWait([
        `Autographs! Looking closely, the boards feature genuine signatures from many familiar `,
        digital.uma_sex_title,
        `s?!`,
      ]);
      await digital.say_and_wait(
        `Aaaah... How many UmaCoins would this cost if bought separately...? How much savings do I even have left...?`,
      );
      await luna.say_and_wait([
        `This is a token of gratitude from all the `,
        digital.uma_sex_title,
        `s `,
        l_call_d,
        ` has helped or encouraged over the past year. As student council president, I also deeply appreciate your contributions to promoting our academy...`,
      ]);
      await luna.say_and_wait([
        `Knowing `,
        l_call_d,
        `'s unique interests, I gathered these gifts from every `,
        digital.uma_sex_title,
        ` who adores you.`,
      ]);
      await era.printAndWait([
        `Receiving such a grand gift, `,
        digital.get_colored_name(),
        `...`,
      ]);
      await digital.say_and_wait(
        `Awaawa... Is this the law of the universe: those who support others shall themselves be supported...?`,
      );
      await you.say_as_passer_by_and_wait('Everyone', [
        `Happy Holidays, `,
        digital.get_colored_name(),
        `!`,
      ]);
      await digital.say_and_wait([callname, `! `, callname, `! This is...`]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` leans against `,
        you.get_colored_name(),
        `, completely overwhelmed by bliss.`,
      ]);
      await era.printAndWait([
        `Finding ${digital.sex === 'She' ? 'her' : 'his'} role unexpectedly reversed today, `,
        digital.get_colored_name(),
        ` enjoys the pure joy of being the one showered with love.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = (digital) => [`Just an Ordinary `, digital.uma_sex_title];
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} dober Mejiro Dober
     * @param {CharaTalk} kris Symboli Kris S
     * @param {CharaTalk} diamond_lord Diamond Lord (Agnes Digital Story NPC)
     * @param {CharaTalk} you Player
     * @param {string} callname What Agnes Digital calls the player
     * @param {PrintedSpan} call_59 What Agnes Digital calls Mejiro Dober
     * @param {PrintedSpan} do_call_di What Mejiro Dober calls Agnes Digital
     * @param {PrintedSpan} arim_kin Arima Kinen
     */
    const f = async (
      digital,
      dober,
      kris,
      diamond_lord,
      you,
      callname,
      call_59,
      do_call_di,
      arim_kin,
    ) => {
      await era.printAndWait([
        `In the final frosty days of December, even with the lingering excitement of watching the `,
        arim_kin,
        ` and witnessing `,
        kris.get_colored_name(),
        `'s brilliant victory, `,
        digital.get_colored_name(),
        ` immediately throws ${digital.sex === 'She' ? 'her' : 'his'}self into Comiket preparations.`,
      ]);
      await era.printAndWait(
        `Even as circle exhibitors with early admission, you can't help but marvel at the crowd.`,
      );
      await era.printAndWait(
        `Even with only circle participants, the sheer number of people is astonishing.`,
      );
      await era.printAndWait([
        `Watching a massive, winding line snake its way toward the exhibition center, you wonder how long it will take to reach your spot.`,
      ]);
      await digital.say_and_wait([
        `Hehehe, `,
        callname,
        `, you haven't seen the general attendee line yet. When the gates open, the crowd outside Tokyo Big Sight is like a tidal wave packed so tight you couldn't even drop a carrot between them!`,
      ]);
      await era.printAndWait([
        `Fortunately, `,
        digital.get_colored_name(),
        ` has exhibitor passes, allowing both of you to use the early-entry lane.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` carries a custom backpack adorned with countless hooks, dangling all sorts of charms and accessories...`,
      ]);
      await era.printAndWait(
        `Word has it there's a stack of wall scrolls tucked inside as well...`,
      );
      era.printButton(
        `"Digi, you didn't make all of these by yourself, did you?"`,
        1,
      );
      await era.input();
      await era.printAndWait([
        `Clatter, clatter! As `,
        digital.get_colored_name(),
        ` turns around, the metal charms chime crisply against one another.`,
      ]);
      await digital.say_and_wait([
        `Mmh... `,
        callname,
        `, are you surprised by my output? A lot of these are actually reprints from Digi's past catalog.`,
      ]);
      await era.printAndWait(`In the past, huh...`);
      await digital.say_and_wait([
        `Since making my debut, my output has dropped quite a bit. I usually only manage one or two short doujins per event, and sometimes I have to skip entirely...`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` turns back, gazing at the colossal Tokyo Big Sight venue.`,
      ]);
      await digital.say_and_wait([
        `Maybe... things will return to normal after a while.`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` understands `,
        digital.get_colored_name(),
        `'s words, and senses why `,
        digital.get_colored_name(),
        ` seems somewhat... downcast.`,
      ]);
      await era.printAndWait([
        `Looking at `,
        digital.get_colored_name(),
        `'s weary eyes from waking up so early, `,
        you.get_colored_name(),
        ` recalls a memory...`,
      ]);
      await era.printAndWait(`A dirt race under falling rain.`);
      await era.printAndWait([
        `Chilly wind mixed with drizzle whipped straight into `,
        you.get_colored_name(),
        `'s raincoat.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` must have felt freezing cold as well.`,
      ]);
      await era.printAndWait([
        `Out on the track, `,
        digital.get_colored_name(),
        ` was caked in mud, ${digital.sex === 'She' ? 'her' : 'his'} pastel racing outfit stained with gray.`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` couldn't see the result on the board from your angle; you could only watch `,
        digital.get_colored_name(),
        ` looking up at the board with head raised high.`,
      ]);
      era.drawLine();
      await era.printAndWait([
        `The queue moves faster than expected, and before long you enter the venue.`,
      ]);
      await era.printAndWait([
        `Navigating to the `,
        digital.uma_sex_title,
        ` section, several neighboring circle exhibitors setting up spot `,
        digital.get_colored_name(),
        ` and wave warmly from afar.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` seems to enjoy quite a reputation here.`,
      ]);
      await digital.say_and_wait(`Ooooh?`);
      await era.printAndWait([
        `Following `,
        digital.get_colored_name(),
        `'s gaze, you spot an `,
        digital.uma_sex_title,
        ` wearing a mask, a hat, and bulky layers of clothing.`,
      ]);
      await era.printAndWait([
        `Despite the ordinary hat, the slight bulges underneath make it easy to tell ${digital.sex.toLowerCase()}'s an `,
        digital.uma_sex_title,
        `.`,
      ]);
      await era.printAndWait([
        `In fact, pretty much everyone around knows who ${digital.sex.toLowerCase()} is...`,
      ]);
      await digital.say_and_wait([
        `Me... `,
        { color: dober.color, content: 'Hakumoku-sensei', fontWeight: 'bold' },
        `! Do you have a new book this time?! Three copies, please!`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` dashes over to Dober's... err, `,
        {
          color: dober.color,
          content: 'Hakumoku-sensei',
          fontWeight: 'bold',
        },
        `'s booth and immediately reserves three copies.`,
      ]);
      await era.printAndWait([
        `Meanwhile, Dober... or rather, `,
        {
          color: dober.color,
          content: 'Dober-sensei',
          fontWeight: 'bold',
        },
        `, glances around cautiously. Seeing that everyone is discreetly looking away...`,
      ]);
      await era.printAndWait([
        `${dober.sex} quietly reaches into ${dober.sex === 'She' ? 'her' : 'his'} bag and hands a neatly wrapped package to the thrilled `,
        digital.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait(
        `With exchanges completed, the moment finally arrives...`,
      );
      await era.printAndWait(`Comiket is officially open!`);
      await era.printAndWait(
        `No matter how many times you witness it, you can't help feeling Earth is simply too small for this many people.`,
      );
      await you.say_as_unknown_and_wait(`WOOOOOOO!`);
      await era.printAndWait(
        `Passionate cheers erupt from the entrance. The frontrunners dash straight toward popular booths, then politely slow down at the tables to exchange cash for their prized loot.`,
      );
      await era.printAndWait(
        `As the crowd continues to pour in, the next person to arrive is...`,
      );
      await diamond_lord.say_as_unknown_and_wait([
        `Hey! `,
        do_call_di,
        `! I made it!`,
      ]);
      await era.printAndWait([
        `A chestnut `,
        digital.uma_sex_title,
        ` darts out from the crowd, using `,
        digital.uma_sex_title,
        ` agility to arrive right in front of `,
        digital.get_colored_name(),
        `.`,
      ]);
      await digital.say_and_wait([`Here's your usual copy, enjoy~`]);
      await era.printAndWait([
        `Taking the new book, the `,
        digital.uma_sex_title,
        ` skips away happily. That's customer number one, but what follows is...`,
      ]);
      era.printButton(`"Digi... I knew you were popular, but this is..."`, 1);
      await era.input();
      await era.printAndWait(
        `Things are getting overwhelmingly hectic, pulling rolled tapestries from bags while counting cash handed across the table...`,
      );
      await era.printAndWait(
        `Don't bother asking about electronic payments; phones have been sitting silently in pockets since entering the hall, receiving zero signal.`,
      );
      await era.printAndWait([
        `After a whirlwind of non-stop activity, you finally get to put up the "SOLD OUT" sign.`,
      ]);
      era.println();
      await era.printAndWait([
        `While discussing with `,
        digital.get_colored_name(),
        ` whether to check out the official URA pavilion, `,
        {
          color: dober.color,
          content: 'Dober-sensei',
          fontWeight: 'bold',
        },
        ` comes over to say goodbye.`,
      ]);
      await dober.say_and_wait([
        do_call_di,
        `, I had hoped to invite you to browse the hall together, but unfortunately I must take my leave now. I wish you continued success with your creative work.`,
      ]);
      await digital.say_and_wait(
        `Ah, thank you for your support! I'll keep pouring my soul into creating!`,
      );
      await digital.say_and_wait(
        `I've been a bit slack with my books since debuting, but don't worry, I'll get back on track after this!`,
      );
      await dober.say_and_wait([`!`]);
      await era.printAndWait([
        `Even through the mask, the sudden surge of emotion in `,
        dober.get_colored_name(),
        `'s eyes is unmistakable.`,
      ]);
      await era.printAndWait([
        dober.sex,
        ` clenches ${dober.sex === 'She' ? 'her' : 'his'} fists, taking off ${dober.sex === 'She' ? 'her' : 'his'} disguise hat and mask.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` freezes, having no idea why `,
        dober.get_colored_name(),
        ` suddenly looks so upset.`,
      ]);
      await digital.say_and_wait([`Shiro... `, call_59, `...?`]);
      await era.printAndWait([
        dober.get_colored_name(),
        ` pulls `,
        digital.get_colored_name(),
        `'s doujinshi from ${dober.sex === 'She' ? 'her' : 'his'} tote bag and places it back onto `,
        digital.get_colored_name(),
        `'s table.`,
      ]);
      await dober.say_and_wait([
        `I was looking forward to reading this at home. My apologies.`,
      ]);
      await era.printAndWait([
        dober.get_colored_name(),
        ` turns and walks away without looking back, ignoring `,
        digital.get_colored_name(),
        `'s calls.`,
      ]);
      await digital.say_and_wait([`...`]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` stares down silently at the carefully wrapped doujinshi on the table.`,
      ]);
      await diamond_lord.say_as_unknown_and_wait([`Um... `, do_call_di, `?`]);

      await era.printAndWait([
        `It's the chestnut `,
        digital.uma_sex_title,
        ` who visited the booth first, carrying a large bag of loot and coming by to check in.`,
      ]);
      await digital.say_and_wait([
        `Sorry for the scene, `,
        diamond_lord.get_colored_name(),
        `. I...`,
      ]);
      await digital.say_and_wait([
        `Can I ask... as a fan, wanting to see more work from a creator you like... isn't that totally normal?`,
      ]);
      await diamond_lord.say_and_wait(`It is... but...`);
      await era.printAndWait([
        `The `,
        digital.uma_sex_title,
        ` named `,
        diamond_lord.get_colored_name(),
        ` sits right down on the floor, rummaging through ${diamond_lord.sex === 'She' ? 'her' : 'his'} oversized backpack before pulling out a thick volume.`,
      ]);
      await era.printAndWait(
        `Opening it reveals a doujinshi wrapped in a heavy protective sleeve.`,
      );
      await diamond_lord.say_and_wait(
        `This is a doujinshi you published during your debut year...`,
      );
      await diamond_lord.say_and_wait(
        `I wasn't your fan back then, so I had to buy this second-hand at a steep price...`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` bites ${digital.sex === 'She' ? 'her' : 'his'} lip, remaining silent.`,
      ]);
      await diamond_lord.say_and_wait([
        `Even though it was expensive, it's the most valuable purchase I've ever made. Do you know why, `,
        do_call_di,
        `?`,
      ]);
      await diamond_lord.say_and_wait([
        `This book depicts a rookie `,
        digital.uma_sex_title,
        `'s race. Along with your usual love for `,
        digital.uma_sex_title,
        `s, it holds something truly special.`,
      ]);
      await diamond_lord.say_and_wait(
        `The other thing I wanted to tell you is that I became your fan during that race against you... and I've watched every single race of yours ever since.`,
      );
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        ` wraps the doujinshi back in its protective cover like a prized treasure, puts it into ${diamond_lord.sex === 'She' ? 'her' : 'his'} bag, shoulders the pack, and departs.`,
      ]);
      era.drawLine();
      await era.printAndWait([
        digital.get_colored_name(),
        ` gazes blankly at cosplayers dancing outside in costumes of famous `,
        digital.uma_sex_title,
        `s.`,
      ]);
      await era.printAndWait([
        `Some are ordinary `,
        digital.phy_sex_title,
        `s wearing faux ears, while others are `,
        digital.uma_sex_title,
        `s wearing cosplay ear covers.`,
      ]);
      await era.printAndWait([
        `Watching `,
        digital.couple_title,
        ` dance gracefully, `,
        digital.get_colored_name(),
        `...`,
      ]);
      await digital.say_and_wait([callname, `, why?`]);
      era.printButton(`"Are you asking about Dober or Diamond Lord?"`, 1);
      await era.input();
      await digital.say_and_wait(`...Both.`);
      era.printButton(
        `"Digi, you're a race ${digital.uma_sex_title} capable of galloping across the track, aren't you?"`,
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ` pauses at the seemingly irrelevant question, then shakes ${digital.sex === 'She' ? 'her' : 'his'} head.`,
      ]);
      await you.say_and_wait([
        `I need to thank Dober and Diamond Lord. They helped this `,
        callname,
        ` remember.`,
      ]);
      era.println();
      await era.printAndWait([
        `The `,
        digital.get_colored_name(),
        ` who fiercely watches other `,
        digital.uma_sex_title,
        `s on the track...`,
      ]);
      await you.say_and_wait([
        `If you aren't a race `,
        digital.uma_sex_title,
        `, then who are the fans and I seeing out there on the track?`,
      ]);
      await digital.say_and_wait([
        `That Digi... is just someone who hasn't accepted reality...`,
      ]);
      era.println();
      await era.printAndWait([
        `The `,
        digital.get_colored_name(),
        ` who still pushes forward even when the finish line is right ahead...`,
      ]);
      await you.say_and_wait([
        `The moment you step onto the track, you are a race `,
        digital.uma_sex_title,
        `! You are someone worthy of all your fans' cheers!`,
      ]);
      await digital.say_and_wait([`The moment... I step onto the track?`]);
      await you.say_and_wait([
        `Yes! As a fan, shouldn't you know that best of all? Every `,
        digital.uma_sex_title,
        ` on that track is special, regardless of performance!`,
      ]);
      era.println();
      await era.printAndWait([
        `The `,
        digital.get_colored_name(),
        ` who pushes forward with all ${digital.sex === 'She' ? 'her' : 'his'} might, even through deep mud...`,
      ]);
      era.printButton(
        `"You have long since become someone embraced and supported by fans!"`,
        1,
      );
      await era.input();
      await digital.say_and_wait(`!`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` shivers all over upon hearing those words.`,
      ]);
      era.printButton(`"Do you understand what fan service means now?!"`, 1);
      await era.input();
      await digital.say_and_wait(`I understand!`);
      era.println();
      await era.printAndWait([digital.get_colored_name(), ` truly is...`]);
      await digital.say_and_wait([
        `Ooooh, I can't let down my fans' expectations... Ahahaha...`,
      ]);
      era.println();
      await era.printAndWait([`an `, digital.uma_sex_title, ` after all.`]);
      await digital.say_and_wait(`I'll keep giving it my all a little longer.`);
      await era.printAndWait(
        `With lowered brows and tearful eyes, ${digital.sex.toLowerCase()} manages a bittersweet smile.`,
      );
      await era.printAndWait(
        `Yet that smile is sure to bring tears of inspiration to any fan's eyes...`,
      );
      await era.printAndWait(`Ah, things are getting a little blurry...`);
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = 'World Traveler';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} opera TM Opera O
     * @param {CharaTalk} tachyon Agnes Tachyon
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} halo King Halo
     */
    const f = async (digital, opera, tachyon, doto, halo) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ` continues to take on new challenges, working hard toward an overseas expedition.`,
      ]);
      await digital.print_and_wait([
        `Not just for victory, but to travel with ${digital.sex === 'She' ? 'her' : 'his'} comrade and meet even more `,
        digital.uma_sex_title,
        `s across the globe.`,
      ]);
      await digital.print_and_wait(
        `Before departing on a quiet scouting flight known to few...`,
      );
      await digital.print_and_wait(`Just before taking off...`);
      await digital.print_and_wait(
        `My, quite a few familiar faces have shown up.`,
      );
      await digital.print_and_wait([
        halo.get_colored_name(),
        `, `,
        opera.get_colored_name(),
        `, `,
        doto.get_colored_name(),
        `, `,
        tachyon.get_colored_name(),
        `... and Kurofune too?`,
      ]);
      await digital.print_and_wait(
        `This was supposed to be a temporary trip to get used to overseas conditions, practically a vacation.`,
      );
      await digital.print_and_wait(
        `And yet so many people came to see ${digital.sex === 'She' ? 'her' : 'him'} off?`,
      );
      await digital.print_and_wait([
        digital.get_colored_name(),
        ` is truly incredible.`,
      ]);
      await digital.say_and_wait([
        `I can't wait any longer! I'm going to travel with my comrade and meet `,
        digital.uma_sex_title,
        `-chans from all over the world!`,
      ]);
      await digital.print_and_wait([
        `The world traveler, `,
        digital.get_colored_name(),
        ` is still running strong today.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
};
