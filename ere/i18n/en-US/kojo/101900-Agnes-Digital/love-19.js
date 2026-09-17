/**
 * @file Agnes Digital - Love
 * @author 片手虾好评发售中！
 * @author Katze(translator)
 */
const era = require('#/era-electron');

const { location_enum } = require('#/data/locations');

module.exports = {
  shine: (() => {
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {string} callname How Agnes Digital addresses the player
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait(`Ehehehe... Ohohoho!`);
      await era.printAndWait([
        `Inside the trainer room, `,
        digital.get_colored_name(),
        ` squints in pure bliss, lost in fantasies of `,
        digital.uma_sex_title,
        `s. ${digital.sex} lets out the kind of creepy-giddy laugh that makes ordinary folks want to dial the police, looking thoroughly delighted.`,
      ]);
      await you.say_and_wait(`What's up? Why so happy?`);
      await digital.say_and_wait(
        `I'm planning our next big cheering campaign!`,
      );
      await era.printAndWait([
        `Then `,
        digital.get_colored_name(),
        ` launches into an elaborate thesis, arguing that intense fan cheering actively empowers `,
        digital.get_colored_name(),
        `, meaning hardcore stan activities technically count as athletic training.`,
      ]);
      await era.printAndWait(`Wait... why does that actually sound logical?`);
      await you.say_and_wait(
        `If you put it that way, count me in. I'll come along.`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        ` decides to tag along, figuring it is a great opportunity to understand `,
        digital.get_colored_name(),
        ` better.`,
      ]);
      await digital.say_and_wait(
        `Huh? You're welcome to try, but this is hardcore fan territory! It's going to be exhausting, you know?`,
      );
      era.drawLine();
      await era.printAndWait([digital.sex, ` was not kidding.`]);
      await digital.say_and_wait(
        `Coming to Hanshin Racecourse was the best decision ever! What an unbelievable debut race!`,
      );
      await digital.say_and_wait([
        `The first-place `,
        digital.uma_sex_title,
        `-chan is debuting to carry on the fiery will of ${digital.sex === 'She' ? 'her' : 'his'} `,
        digital.elder_sibling_sex_title,
        ` who retired last year! That legacy... that generational torch-pass... it sets my soul ablaze, uwaaaah!`,
      ]);
      await era.printAndWait([`For `, you.get_colored_name(), `,`]);
      await digital.say_and_wait(
        `Look at those two going neck and neck! Nakayama's final stretch is famously short, you know! Waaah!`,
      );
      await digital.say_and_wait(
        `Uuu... Incredible! Pure heart and determination overpowering track aptitude and book theory... What a masterpiece of a rivalry!`,
      );
      await era.printAndWait(`trying to tour`);
      await digital.say_and_wait(
        `The dirt course at Oi allows for thrilling late-charging comebacks compared to standard mile tracks...`,
      );
      await digital.say_and_wait([
        `Yet ${digital.sex.toLowerCase()} defied all logic and went full runaway front-runner! ${digital.sex} lost in the end, but look at that radiant smile!`,
      ]);
      await era.printAndWait(`virtually every racetrack in Japan`);
      await digital.say_and_wait([
        `And that gray-coated `,
        digital.uma_sex_title,
        ` in this race, despite lackluster past finishes, stood at the starting gate overflowing with fighting spirit!`,
      ]);
      await era.printAndWait(
        `in a single day proved to be... quite the ordeal.`,
      );
      await digital.say_and_wait([
        `Did you feel that?! The burning passion! The blinding brilliance! That breathless barrage of pure excellence from the `,
        digital.uma_sex_title,
        `-chans!`,
      ]);
      await era.printAndWait(
        `Felt it? It was thick! It hit like a freight train of pure intensity!`,
      );
      await era.printAndWait(
        `Waving glowsticks non-stop turned your arms completely numb, clapping until your palms swelled up, and sprinting across terminals to catch every train pushed your legs to the absolute limit.`,
      );
      await era.printAndWait([
        `Glancing over at `,
        digital.get_colored_name(),
        `, ${digital.sex.toLowerCase()} is still bubbling with boundless energy without breathing hard at all. Was `,
        digital.sex,
        ` simply born for this?`,
      ]);
      await digital.say_and_wait([
        `Huh? `,
        callname,
        `, are you worn out? Ah, I got carried away and lost track of pace. Was it too intense...?`,
      ]);
      await era.printAndWait(
        `With the races concluded and the crowds dispersed, the two of you find a quiet spot to sit down.`,
      );
      await digital.say_and_wait([
        `After all, that vibrant spirit from the `,
        digital.uma_sex_title,
        `-chans is everything. Just seeing `,
        digital.couple_title,
        ` brimming with pure, radiant energy gives me life!`,
      ]);
      await era.printAndWait([
        `Gazing out over the quiet turf battered by the thundering hooves of the `,
        digital.uma_sex_title,
        `s, `,
        digital.get_colored_name(),
        ` voices the deep sentiment written across ${digital.sex === 'She' ? 'her' : 'his'} face all along.`,
      ]);
      await era.printAndWait([
        `Igniting the entire track and blowing the roof off the heavens, that is the true majesty of `,
        digital.uma_sex_title,
        `s.`,
      ]);
      await era.printAndWait([
        `Loaded down with arms full of event merchandise, `,
        digital.get_colored_name(),
        ` thoroughly enjoyed a bountiful day.`,
      ]);
      await digital.say_and_wait([
        `I had the absolute time of my life! I never imagined you would keep up with my wild pace, `,
        callname,
        `! You've officially leveled up to a hardcore stan! Truly a comrade of culture!`,
      ]);
      await era.printAndWait([
        `Watching `,
        digital.get_colored_name(),
        ` beam with unbridled joy, `,
        you.get_colored_name(),
        ` feels all the day's exhaustion melt away.`,
      ]);
      await era.printAndWait(
        `Here's hoping tomorrow won't bring agonizing muscle aches.`,
      );
    };
    f.title = 'Spontaneous Cheering Expedition!';
    return f;
  })(),
  univ: (() => {
    const title = 'Cosmic Resonance Across the Universe';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {string} callname How Agnes Digital addresses the player
     * @param {string} self_call Agnes Digital's self-reference
     * @param {PrintedSpan} d_call_u How Agnes Digital addresses Haru Urara
     */
    const f = async (digital, you, callname, self_call, d_call_u) => {
      await digital.print_and_wait([
        digital.name,
        `, an `,
        digital.uma_sex_title,
        ` whose entire existence revolves around celebrating `,
        digital.uma_sex_title,
        `-chans, is putting 120% into fan duties again today!`,
      ]);
      await digital.print_and_wait([
        `Alright, time for another holy ground pilgrimage! I need to meticulously revisit every single miraculous footprint left behind by the `,
        digital.uma_sex_title,
        `-chans down to the microscopic detail!`,
      ]);
      await digital.say_and_wait([
        `Ohoho, while I'm doing the sacred tour, I should pick up a nice souvenir for `,
        callname,
        `.`,
      ]);
      await you.say_as_unknown_and_wait([
        `I don't quite get the whole thing, but you seem really close with `,
        callname,
        `. Why not go together?`,
      ]);
      await digital.say_and_wait([
        `What?! Go on a holy ground pilgrimage with `,
        callname,
        `?! Oh... OHHH! OH MY GOSH!`,
      ]);
      await digital.print_and_wait([
        `A path never before contemplated... A sacred pilgrimage alongside `,
        callname,
        `!`,
      ]);
      await digital.print_and_wait(
        `That's like tackling wilderness survival with Bear Grylls on your squad!`,
      );
      await digital.say_and_wait(
        `Thank you so much! I'm going to invite ${digital.sex === 'She' ? 'him' : 'her'} right this second!`,
      );
      era.drawLine();
      await era.printAndWait([
        `It came as a complete surprise when `,
        digital.get_colored_name(),
        ` reached out to invite `,
        you.get_colored_name(),
        ` on a holy ground pilgrimage.`,
      ]);
      await era.printAndWait([
        `Just like last time, `,
        you.get_colored_name(),
        ` geared up thoroughly to support ${digital.sex === 'She' ? 'his' : 'her'} partnered `,
        digital.uma_sex_title,
        `.`,
      ]);
      await era.printAndWait([
        `Arriving at the rendezvous point right on time, `,
        digital.sex,
        ` waves excitedly toward `,
        you.get_colored_name(),
        `, riding a wave of peak hype.`,
      ]);
      await era.printAndWait([
        `Sporting the usual pink inner shirt under a gray jacket, knowing `,
        digital.sex,
        `, slapping an 'I Love UMA' print across the front wouldn't be out of character at all.`,
      ]);
      await digital.say_and_wait([
        `I honestly can't believe you came, `,
        callname,
        `! I was totally bracing myself for rejection...`,
      ]);
      await you.say_and_wait(`No way, why would I ever turn you down?`);
      await digital.say_and_wait(`Then let the holy ground tour commence!`);
      await era.printAndWait(
        `With a grand, sweeping gesture, ${digital.sex.toLowerCase()} points toward the main road leading to the station.`,
      );
      era.drawLine();
      await era.printAndWait(
        `You arrive at a standard pasture where cows graze leisurely behind wooden fences. Does this place qualify as a holy ground?`,
      );
      await digital.say_and_wait([
        `No, no, no, `,
        callname,
        `, you can't just judge it on surface appearances!`,
      ]);
      await era.printAndWait(
        `With solemn drama, ${digital.sex.toLowerCase()} points toward... a patch of wild weeds?`,
      );
      await era.printAndWait(
        `A riot of tangled clover and grass flourishes freely, evidently left unmanicured by the ranch owner.`,
      );
      await you.say_and_wait(`Is this an illusion? When did this happen?!`);
      await digital.say_and_wait(`Actually, what I'm pointing at is this!`);
      await era.printAndWait([
        `Looking closely, `,
        digital.sex,
        ` picks up a four-leaf clover, shimmering with fresh morning dew.`,
      ]);
      await digital.say_and_wait([
        `Exactly! Countless `,
        digital.uma_sex_title,
        `s have gifted lucky four-leaf clovers to teammates and fierce rivals alike! Battling with all their might while praying for each other's success... Uwaaaah!`,
      ]);
      await you.say_and_wait(
        `Wait, shouldn't four-leaf clovers bring a rainy shrine to mind? A quiet shrine with rain dripping from the torii gate...`,
      );
      await era.printAndWait(`Did you just voice a memory from a dream?`);
      await digital.say_and_wait(`GASP! No way!`);
      await digital.say_and_wait([
        callname,
        `! You understand so deeply! This is why sacred pilgrimages are best shared!`,
      ]);
      era.drawLine();
      await digital.say_and_wait(
        `Our next stop looks like an ordinary park at first glance, but in truth...`,
      );
      await digital.say_and_wait(`It is a park brimming with pure energy!`);
      await era.printAndWait(`En... energy?`);
      await digital.say_and_wait([
        `Yes! Countless `,
        digital.uma_sex_title,
        `s gather here to relax, chat, and over there, look at that sandbox!`,
      ]);
      await you.say_and_wait(
        `Oh! I remember now. That's the sandbox where Team Gold used to train, right?`,
      );
      await digital.say_and_wait(`Bingo! That's... wait, did you say...?`);
      await era.printAndWait(`Wait a second, which team was Team Gold again?`);
      await you.say_and_wait([
        `Never mind that for now. Look at that stall over there. Didn't `,
        d_call_u,
        ` set up shop there before?`,
      ]);
      await digital.say_and_wait(`OHHHH MY GOSH!`);
      era.drawLine();
      await digital.say_and_wait(
        `Delicious! So good! Is this the legendary Champion Ramen?! Truly fit for royalty!`,
      );
      await era.printAndWait(
        `You step into a hidden ramen shop tucked deep in a back alley. Both its weathered exterior and cozy interior exude that quintessential hidden gem charm.`,
      );
      await digital.say_and_wait(
        `And look at this gargantuan, transcendent portion! Anyone who conquers this mountain of noodles is a true champion!`,
      );
      await you.say_and_wait(
        `Rather than the Champion Ramen, I'm actually curious about the secret menu...`,
      );
      await you.say_as_passer_by_and_wait('Shop Owner', [
        `Oh? `,
        you.sex_code === 1 ? 'Young man' : 'Young lady',
        `, not bad! You actually know about our secret menu!`,
      ]);
      await era.printAndWait([
        `The shop owner, busy straining noodles over the boiling broth, chimes in with genuine surprise.`,
      ]);
      await digital.say_and_wait(
        `Secret menu?! Why?! How did I not know about this?!`,
      );
      await era.printAndWait([
        `Just a moment ago, `,
        digital.get_colored_name(),
        ` was thrilled about conquering the ramen, but upon hearing this revelation, ${digital.sex === 'She' ? 'her' : 'his'} ears stand straight up in utter shock.`,
      ]);
      era.drawLine();
      await digital.say_and_wait(
        `Yaaay! With that special honey drink shop, our grand holy ground pilgrimage is 100% complete!`,
      );
      await era.printAndWait(
        `From greeting the morning's first rays to bidding farewell to the setting sun, it has been a whirlwind of an adventurous day.`,
      );
      await you.say_and_wait(`We really covered a ton of ground today.`);
      await digital.say_and_wait(
        `Hehe, thank you so much for sticking through such a marathon cheering run! Your dedication deserves the highest salute!`,
      );
      await era.printAndWait(`Wait, why are you snapping a formal salute?`);
      await digital.say_and_wait(
        `Ehehe, completing the entire route together feels wonderful.`,
      );
      await digital.say_and_wait(
        `To be honest, I originally planned on going alone, like I always do.`,
      );
      await digital.say_and_wait(`But...`);
      await era.printAndWait([
        `Then ${digital.sex.toLowerCase()} recounts how a random passerby `,
        digital.uma_sex_title,
        ` suggested inviting `,
        callname,
        ` along...`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` silently thanks that nameless `,
        digital.uma_sex_title,
        ` from the bottom of ${you.sex === 'She' ? 'her' : 'his'} heart, glad for the chance to understand `,
        digital.get_colored_name(),
        ` even more.`,
      ]);
      await digital.say_and_wait(
        `And the best part is, experiencing it together was ridiculously, undeniably fun!`,
      );
      await era.printAndWait(
        `${digital.sex} spreads ${digital.sex === 'She' ? 'her' : 'his'} arms wide, practically radiating happiness.`,
      );
      await digital.say_and_wait(
        `I'm so glad! It was your precious day off, and I sprang the invite on you out of nowhere. I was terrified you'd say no...`,
      );
      await digital.say_and_wait(`But this was a monumental discovery!`);
      await digital.say_and_wait([
        `I discovered the pure bliss of sharing the fan journey and fangirling right alongside you, `,
        callname,
        `!`,
      ]);
      await era.printAndWait([
        `Those genuine emotions that `,
        digital.get_colored_name(),
        ` usually kept guarded due to ${digital.sex === 'She' ? 'her' : 'his'} quirky hobbies are now openly blooming before `,
        you.get_colored_name(),
        `.`,
      ]);
      await digital.say_and_wait(
        `I never dreamed anyone in this entire universe would join me on my wild fandom quests...`,
      );
      await you.say_and_wait(`Wait, we're talking on a cosmic scale now?!`);
      await digital.say_and_wait(
        `Ahaha! You saw how it was. I used to do all of this solo. Having someone listen to my unhinged rants and actually vibe with them makes me... so unimaginably happy.`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        `'s eyes sparkle with incandescent light.`,
      ]);
      await digital.say_and_wait([
        `I'm so moved! Whatever's on my mind right now, I just want to spill it all to you, `,
        callname,
        `!`,
      ]);
      await you.say_and_wait(`Go right ahead. Say whatever's on your heart.`);
      await digital.say_and_wait(`Eep! Anything at all?! Really?!`);
      await digital.say_and_wait(
        `You promise? You really mean it? No take-backs!`,
      );
      await digital.say_and_wait([
        self_call,
        ` is about to unleash peak unhinged fan mode!`,
      ]);
      await digital.say_and_wait([
        `The very first second I laid eyes on the dazzling figure of an `,
        digital.uma_sex_title,
        `-chan on the big screen I knew in my soul that these radiant blinding passionate `,
        digital.sex_code === 1 ? 'gods' : 'goddesses',
        ` were my eternal calling and right then I fell straight into the abyss or rather ascended straight into heaven every day worshipping `,
        digital.uma_sex_title,
        `-chans cheering for `,
        digital.couple_title,
        ` screaming for `,
        digital.couple_title,
        ` making doujinshi for `,
        digital.couple_title,
        ` preaching the supreme gospel of `,
        digital.uma_sex_title,
        `-chans to all humanity and then blessed by some miraculous stroke of grace here I am standing in this holy pantheon breathing the exact same air as these divine `,
        digital.sex_code === 1 ? 'gods' : 'goddesses',
        ` except I'm just a lowly mortal scum breathing their sacred oxygen yet `,
        digital.couple_title,
        ` don't despise me at all and even let me step onto the inviolable turf to run blazing intense races with them they are all-forgiving all-loving magnificent peerless `,
        digital.sex_code === 1 ? 'gods' : 'goddesses',
        ` and after all of this what Digi-tan really wants to say is that `,
        digital.uma_sex_title,
        `-chans are the absolute greatest existence in the entire universe!`,
      ]);
      await era.printAndWait([
        `Twirling, leaping, chanting, and shouting at the top of ${digital.sex === 'She' ? 'her' : 'his'} lungs, `,
        digital.get_colored_name(),
        ` pours out everything in ${digital.sex === 'She' ? 'her' : 'his'} heart with every ounce of ${digital.sex === 'She' ? 'her' : 'his'} soul.`,
      ]);
      await era.printAndWait(
        `Such unadulterated otaku purity commands absolute respect.`,
      );
      await digital.say_and_wait(
        `*Cough, wheeze*... Hahaha... Getting all that out... *cough*... feels so intensely exhilarating...!`,
      );
      await era.printAndWait([
        `Gasping wildly for air with ${digital.sex === 'She' ? 'her' : 'his'} chest heaving, `,
        digital.get_colored_name(),
        ` coughs, stumbles, and flops straight onto the ground from sheer exhaustion.`,
      ]);
      await digital.say_and_wait([
        `So... how was that, `,
        callname,
        `? Hehehe...`,
      ]);
      await era.printAndWait([
        `Propped up on ${digital.sex === 'She' ? 'her' : 'his'} hands on the ground, `,
        digital.sex,
        ` wears a look of pure, beaming contentment.`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` sits down right beside ${digital.sex === 'She' ? 'her' : 'him'}, letting `,
        digital.sex,
        ` lean comfortably against your shoulder.`,
      ]);
      await you.say_and_wait(
        `That was amazing. An unhinged speech with that much fire would leave even the Three Goddesses in awe.`,
      );
      await digital.say_and_wait(`Ehehe, really...?`);
      await digital.say_and_wait(`Truly... on a cosmic scale...`);
    };
    f.title = title;
    return f;
  })(),
  oshi: (() => {
    const title = 'Devotion to My Oshi';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} teio Tokai Teio
     * @param {CharaTalk} mcqueen Mejiro McQueen
     * @param {CharaTalk} opera T.M. Opera O
     * @param {CharaTalk} doto Meisho Doto
     * @param {CharaTalk} palmer Mejiro Palmer
     * @param {CharaTalk} helios Daitaku Helios
     * @param {CharaTalk} taste Yayoi Akikawa/Northern Taste
     * @param {CharaTalk} you Player
     * @param {string} callname How Agnes Digital addresses the player
     * @param {PrintedSpan} y_call_d How the player addresses Agnes Digital
     */
    const f = async (
      digital,
      teio,
      mcqueen,
      opera,
      doto,
      palmer,
      helios,
      taste,
      you,
      callname,
      y_call_d,
    ) => {
      teio.name = 'A rather childish ' + teio.uma_sex_title;
      opera.name = 'A nonchalant-looking ' + opera.uma_sex_title;
      doto.name = 'A rather clumsy ' + doto.uma_sex_title;
      mcqueen.name = 'A soft-purple gray-coated ' + mcqueen.uma_sex_title;
      palmer.name = 'A chestnut-coated ' + palmer.uma_sex_title;
      helios.name = 'A blue-streaked-haired ' + helios.uma_sex_title;
      if (era.get('cflag:0:位置') !== location_enum.beach) {
        await taste.say_and_wait(`Training camp! Yes, exactly so!`);
        await era.printAndWait(
          `Classic Chairwoman behavior, dropping a surprise beach training camp out of nowhere well outside the usual summer season.`,
        );
      }
      await you.say_and_wait(`A training camp? Sounds great.`);
      await era.printAndWait([
        `For an `,
        digital.uma_sex_title,
        `, this trip isn't just sightseeing, it's intensive physical conditioning, not unlike summer homework.`,
      ]);
      await era.printAndWait([
        `Fortunately, most `,
        digital.uma_sex_title,
        `s thrive on training, and `,
        you.get_colored_name(),
        `'s partnered `,
        digital.uma_sex_title,
        ` `,
        digital.get_colored_name(),
        ` is no exception.`,
      ]);
      await era.printAndWait([
        `Then again, `,
        digital.get_colored_name(),
        ` seems to love sharing activities with ${digital.sex === 'She' ? 'her' : 'his'} idols above all else, leaving you wondering if `,
        digital.sex,
        ` truly loves the training itself.`,
      ]);
      await era.printAndWait([
        `Musing over these idle thoughts as the bus wheels turn, lush greens give way to shimmering golden sands and azure tides as `,
        you.get_colored_name(),
        ` arrives at the camp facility.`,
      ]);
      await era.printAndWait(
        `Tracen certainly knows how to treat its students, providing top-notch accommodations.`,
      );
      await era.printAndWait([
        `Scanning the surroundings, swimsuit-clad `,
        digital.uma_sex_title,
        `s are everywhere. `,
        digital.get_colored_name(),
        ` is bound to pass out from bliss overload. Setting training aside, will `,
        digital.sex,
        ` even survive the day?`,
      ]);
      era.drawLine();
      await era.printAndWait([
        `Ta-da! `,
        digital.get_colored_name(),
        ` appears, wearing the classic school swimsuit. Snug and practical, it is the ideal gear for serious training.`,
      ]);
      await era.printAndWait([
        `Gazing across the breathtaking scene, `,
        digital.sex,
        ` takes in the glorious vista and sucks in an enormous gasp of air...`,
      ]);
      await digital.say_and_wait(
        `Blue skies... white clouds... the refreshing breeze of youth...`,
      );
      await digital.say_and_wait([
        `And all the wonderful `,
        digital.uma_sex_title,
        `-chans gathered here! Ah! Just breathing this air feels like sacrilege...!`,
      ]);
      await digital.say_and_wait(
        `I know it's disrespectful, but I can't resist! *inhale*...`,
      );
      await era.printAndWait([
        `Spotting `,
        you.get_colored_name(),
        ` mid-breath, ${digital.sex.toLowerCase()} chokes on the air and breaks into a coughing fit.`,
      ]);
      await digital.say_and_wait([
        `*Cough, hack*... Oh, `,
        callname,
        `! It's you!`,
      ]);
      await digital.say_and_wait(
        `Waaah, let's start training right away! I'm totally ready!`,
      );
      await era.printAndWait([
        `Waving enthusiastically, `,
        digital.get_colored_name(),
        ` puts on ${digital.sex === 'She' ? 'her' : 'his'} usual energetic persona, though something feels slightly off.`,
      ]);
      await you.say_and_wait(
        `Since we just got here, don't you want to relax for a bit first?`,
      );
      await era.printAndWait([
        `Right on cue, two close-knit `,
        digital.uma_sex_title,
        `s stroll past.`,
      ]);
      await palmer.say_and_wait(
        `Look at you, getting ice cream all over your face! What are we going to do with you?`,
      );
      await helios.say_and_wait(`Ehehe, how about you wipe it off for me?`);
      await era.printAndWait([
        `A textbook moment of pure sweetness. `,
        digital.get_colored_name(),
        `'s eyes sparkle with a radiant, blissful grin.`,
      ]);
      await helios.say_and_wait(
        `I heard there's a summer festival tonight! Let's check it out!`,
      );
      await palmer.say_and_wait(`Hold on, since when did we decide that?!`);
      await era.printAndWait([
        `Patting ${digital.sex === 'She' ? 'her' : 'his'} stomach and muttering 'thank you for the feast', `,
        digital.get_colored_name(),
        ` suddenly snaps into a dead serious expression.`,
      ]);
      await digital.say_and_wait([
        `Hehehe... That was glorious. No, wait! Ahem! `,
        callname,
        `! Time for drills!`,
      ]);
      await era.printAndWait([
        `Thumping ${digital.sex === 'She' ? 'her' : 'his'} chest in a desperate bid to look focused, `,
        digital.get_colored_name(),
        ` acts noticeably unusual.`,
      ]);
      await era.printAndWait([
        `Seeing that determined glint in `,
        digital.sex,
        `'s eyes, `,
        you.get_colored_name(),
        ` decides not to press further and kicks off the session.`,
      ]);
      era.drawLine();
      await era.printAndWait(
        `Clicking the stopwatch, running on soft sand naturally yields slower times than turf or dirt tracks.`,
      );
      await you.say_and_wait(`Let's take a quick breather.`);
      await era.printAndWait([
        `You hand `,
        digital.sex,
        ` a water bottle and a towel. Even beside the ocean, wiping away sweat is essential.`,
      ]);
      await era.printAndWait([
        `Taking the towel, `,
        digital.get_colored_name(),
        ` wipes ${digital.sex === 'She' ? 'her' : 'his'} brow, but ${digital.sex === 'She' ? 'her' : 'his'} eyes wander over to the beach hut.`,
      ]);
      await doto.say_and_wait(
        `I-I-I'm so sorry! I spilled sauce all over your outfit!`,
      );
      await opera.say_and_wait(
        `Fear not! My brilliance shall never dim from such trivialities; a small blemish only makes perfection shine brighter!`,
      );
      await era.printAndWait(`A distinct, legendary duo indeed.`);
      await digital.say_and_wait(`*Gurgle, whimper*... Uwaaaaah!`);
      await era.printAndWait(
        `Did ${digital.sex.toLowerCase()} just make an engine revving sound...?`,
      );
      await digital.say_and_wait([
        `Ah! Alright! `,
        callname,
        `! Back to work! I'm doing ten full sprint laps!`,
      ]);
      await era.printAndWait(
        `Raising a fist high, isn't ${digital.sex.toLowerCase()} pushing ${digital.sex === 'She' ? 'her' : 'him'}self a little too hard?`,
      );
      await era.printAndWait(`How about another approach?`);
      await you.say_and_wait(
        `I heard there's a festival nearby tonight. Want to go check it out together?`,
      );
      await digital.say_and_wait(`Oh! A festival?! Yes, yes, absolutely!`);
      await era.printAndWait([
        `Hopefully this helps `,
        digital.sex,
        ` unwind a bit.`,
      ]);
      era.drawLine();
      await era.printAndWait(
        `Hanging paper lanterns cast vibrant hues across the stone pathways, while stalls on either side glow with warm amber light.`,
      );
      await era.printAndWait([
        `Despite being a coastal training camp, plenty of `,
        digital.uma_sex_title,
        `s brought yukatas to fully immerse themselves in the festivities.`,
      ]);
      await digital.say_and_wait([
        `Ohoho, so `,
        callname,
        `, where should we explore first?`,
      ]);
      await era.printAndWait(
        `Scanning the avenue, candied apples, taiyaki, chocolate bananas, festival masks, ema plaques, and balloon-dart games line the bustling street.`,
      );
      await era.printAndWait([
        `Looking around, `,
        digital.get_colored_name(),
        ` fixes ${digital.sex === 'She' ? 'her' : 'his'} gaze on one particular spot.`,
      ]);
      await era.printAndWait([
        `Two `,
        digital.uma_sex_title,
        `s in yukatas are trying their hand at goldfish scooping.`,
      ]);
      await era.printAndWait(
        `One of them swiftly sweeps the paper popper across the water, snagging a goldfish in one motion, though not without splashing water everywhere...`,
      );
      await teio.say_and_wait(
        `Hahaha! You're supposed to scoop the fish, not the water! Look, your sleeves are soaked!`,
      );
      await mcqueen.say_and_wait(`Eeeek?!`);
      await digital.say_and_wait(`*Sharp inhale*...`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` takes a long, deep breath, and then...`,
      ]);
      await digital.say_and_wait(
        `So, which stall should we hit first? Everything looks so tempting!`,
      );
      await era.printAndWait([
        `Normally, `,
        digital.sex,
        ` would be rambling ecstatically with stars in ${digital.sex === 'She' ? 'her' : 'his'} eyes right now.`,
      ]);
      await era.printAndWait(`In that case, the next move should be...`);
      await you.say_and_wait(`There's a spot I'd like to show you.`);
      era.drawLine();
      await era.printAndWait(
        `Stepping away from the noisy festival, you walk down to the quiet nighttime beach.`,
      );
      await era.printAndWait(
        `Behind you glows warm orange; ahead stretches cool blue and white.`,
      );
      await era.printAndWait(
        `Brushing away imaginary dust, you sit down right on the sand.`,
      );
      await era.printAndWait(
        `The beach at night isn't particularly chilly; the breeze is humid and damp, but the cool sand feels grounding.`,
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ` watches `,
        you.get_colored_name(),
        ` and follows suit, sitting down beside you and gazing somewhat awkwardly out at the moon and sea.`,
      ]);
      await digital.say_and_wait([
        `Is sitting here watching the waves what you wanted to do, `,
        callname,
        `?`,
      ]);
      await era.printAndWait(`Best to be direct.`);
      await you.say_and_wait([y_call_d, `, is something bothering you?`]);
      await digital.say_and_wait(`Huh? Not at all! Why do you ask?`);
      await era.printAndWait([
        `As ${digital.sex.toLowerCase()} says this, `,
        digital.get_colored_name(),
        ` shyly crosses ${digital.sex === 'She' ? 'her' : 'his'} arms over ${digital.sex === 'She' ? 'her' : 'his'} chest, subconsciously shielding ${digital.sex === 'She' ? 'her' : 'his'} feelings.`,
      ]);
      await you.say_and_wait(
        `Are you holding yourself back from doing what you actually want to do?`,
      );
      await era.printAndWait(
        `It doesn't seem like ${digital.sex === 'She' ? 'her' : 'him'} usual self.`,
      );
      await digital.say_and_wait([
        `Eep! No, really! Because what I wanted to do today was whatever `,
        callname,
        ` wanted to do!`,
      ]);
      await you.say_and_wait(`...Why would you do that?`);
      await digital.say_and_wait([
        `Because... `,
        callname,
        ` has been coming with me to cheering events non-stop...`,
      ]);
      await era.printAndWait([
        `Saying this, `,
        digital.get_colored_name(),
        ` hangs ${digital.sex === 'She' ? 'her' : 'his'} head, fidgeting self-consciously.`,
      ]);
      await digital.say_and_wait(
        `And you always listen patiently to my unhinged ramblings...`,
      );
      await era.printAndWait([
        `Keeping ${digital.sex === 'She' ? 'her' : 'his'} head low, `,
        digital.get_colored_name(),
        ` peeks over at `,
        you.get_colored_name(),
        ` with blushing cheeks.`,
      ]);
      await digital.say_and_wait(
        `Having you along made the fan runs so much more fun. I never imagined everyday life could be this joyful...`,
      );
      await digital.say_and_wait([
        `I can't even imagine going back to doing fandom stuff all alone without `,
        callname,
        `!`,
      ]);
      await era.printAndWait([
        `As ${digital.sex.toLowerCase()} speaks, `,
        digital.get_colored_name(),
        ` puts ${digital.sex === 'She' ? 'her' : 'his'} hands on ${digital.sex === 'She' ? 'her' : 'his'} hips, looking genuinely proud to have `,
        you.get_colored_name(),
        ` as a kindred spirit.`,
      ]);
      await digital.say_and_wait([
        `Which means `,
        callname,
        ` is an incredibly special person to me!`,
      ]);
      await era.printAndWait([
        `Holding all `,
        digital.uma_sex_title,
        `s dear in ${digital.sex === 'She' ? 'her' : 'his'} heart, ${digital.sex.toLowerCase()} now holds `,
        you.get_colored_name(),
        ` right there alongside them.`,
      ]);
      await digital.say_and_wait([
        `With so many racing `,
        digital.uma_sex_title,
        `s pouring their fiery passions into the track every single day...`,
      ]);
      await digital.say_and_wait([
        `This world is practically the Golden Era of `,
        digital.uma_sex_title,
        `-chan Bliss Ascension!`,
      ]);
      await era.printAndWait([
        `With dramatic flair, ${digital.sex.toLowerCase()} points a finger straight at `,
        you.get_colored_name(),
        `.`,
      ]);
      await digital.say_and_wait([
        `Everywhere you look, in front, behind, left, and right, there are dazzling `,
        digital.uma_sex_title,
        `-chans!`,
      ]);
      await digital.say_and_wait(
        `You never know when blissful ascension might strike. It's like walking a battlefield!`,
      );
      await digital.say_and_wait(
        `Running across this battlefield together, taking critical hits of emotion, sharing tears of joy...`,
      );
      await digital.say_and_wait(`That makes us true comrades in arms!`);
      era.drawLine();
      await digital.say_and_wait(
        `But isn't it unfair if I'm the only one receiving support all the time?`,
      );
      await digital.say_and_wait(
        `Taking that for granted feels like giving in to selfishness!`,
      );
      await digital.say_and_wait([
        `That's why I want to do something for you too, `,
        callname,
        `! Whatever you want to do, I'll make it happen!`,
      ]);
      await digital.say_and_wait(
        `Bring it on! I'll give it everything I've got!`,
      );
      await era.printAndWait([
        `Relieved to learn that `,
        digital.get_colored_name(),
        ` wasn't forcing ${digital.sex === 'She' ? 'her' : 'him'}self out of guilt, `,
        you.get_colored_name(),
        ` also feels deeply touched by ${digital.sex === 'She' ? 'her' : 'his'} thoughtful consideration.`,
      ]);
      await era.printAndWait([
        digital.sex,
        ` has always run forward fueled by selfless, unconditional love for `,
        digital.uma_sex_title,
        `s.`,
      ]);
      await era.printAndWait([
        `So, what is it that `,
        you.get_colored_name(),
        ` truly wants to do?`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` became ${digital.sex === 'She' ? 'her' : 'his'} Trainer precisely to support this radiant spirit. What you want most is...`,
      ]);
      await you.say_and_wait(
        `I just want to see you full of boundless energy, Digital.`,
      );
      await era.printAndWait([
        `Seeing `,
        digital.sex,
        ` pour ${digital.sex === 'She' ? 'her' : 'his'} heart into cheering, seeing `,
        digital.sex,
        ` unstoppable on the racecourse,`,
      ]);
      await era.printAndWait([
        `Seeing `,
        digital.sex,
        ` swoon with bliss over `,
        digital.uma_sex_title,
        `s, and seeing `,
        digital.sex,
        ` talk non-stop with `,
        you.get_colored_name(),
        ` about `,
        digital.uma_sex_title,
        `s.`,
      ]);
      await era.printAndWait([
        `A thousand reasons boil down to one simple truth: you want `,
        digital.sex,
        ` to be genuinely happy.`,
      ]);
      await digital.say_and_wait(`You want to see me... full of energy?`);
      await digital.say_and_wait(
        `The way I feel about my favorite idols... is how you feel about me?`,
      );
      await you.say_and_wait(`Exactly.`);
      await era.printAndWait([
        `Even so, `,
        digital.get_colored_name(),
        ` struggles to believe it.`,
      ]);
      await digital.say_and_wait(
        `You feel that way about me? A total background nobody like me, who's just the flowerpot to the blossom, the backup dancer to the idol center?!`,
      );
      await digital.say_and_wait(
        `I mean, why? It still feels completely surreal.`,
      );
      await digital.say_and_wait(
        `It makes me... so happy, or rather honored, or maybe terribly embarrassed?!`,
      );
      await digital.say_and_wait(
        `Is this what an indie doujin artist feels when they get glowing reader impressions?!`,
      );
      await era.printAndWait(
        `That comparison actually hits the nail on the head.`,
      );
      await digital.say_and_wait(`Which means... this is...`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` covers ${digital.sex === 'She' ? 'her' : 'his'} blushing face in sheer fluster. Watching ${digital.sex === 'She' ? 'her' : 'him'} squirm is truly endearing.`,
      ]);
      await digital.say_and_wait(`Ummm...`);
      await digital.say_and_wait(
        `Back to fan duties! I won't hold back anymore!`,
      );
      await era.printAndWait(`Finally, back to normal.`);
      await digital.say_and_wait(`I'm going to be full of unstoppable energy!`);
      await era.printAndWait([
        `That's the `,
        digital.get_colored_name(),
        ` you know and love.`,
      ]);
      await digital.say_and_wait([
        `In that case, let's go recharge on `,
        digital.uma_sex_title,
        `-chan energy right now!`,
      ]);
      await digital.say_and_wait(`GO GO GO!`);
      await era.printAndWait(`Off we go!`);
      await era.printAndWait(
        `The ocean is gorgeous at night, but the warm amber lanterns of the festival suit this evening much better.`,
      );
      await era.printAndWait([
        `Leaving the deserted sands behind, you jump right into the festive bustling crowds alongside `,
        digital.get_colored_name(),
        `!`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  49: (() => {
    const title = 'Classic Soaked-in-the-Rain Tropes, But With You';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} tachyon Agnes Tachyon
     * @param {CharaTalk} you Player
     * @param {string} callname How Agnes Digital addresses the player
     * @param {PrintedSpan} d_call_t How Agnes Digital addresses Agnes Tachyon
     * @param {PrintedSpan} t_call_d How Agnes Tachyon addresses Agnes Digital
     */
    const f = async (digital, tachyon, you, callname, d_call_t, t_call_d) => {
      await era.printAndWait(
        `Beyond regular training sessions, a Trainer's routine includes plenty of miscellaneous administrative duties.`,
      );
      await era.printAndWait([
        `Even though today was an off-day for the `,
        digital.uma_sex_title,
        `s, `,
        you.get_colored_name(),
        ` still headed to the main academy building to submit preliminary race registration forms.`,
      ]);
      await era.printAndWait([
        `By the time `,
        you.get_colored_name(),
        ` finished up and stepped out of the office, light rain was already pattering against the windows.`,
      ]);
      await era.printAndWait([
        `Fortunately, `,
        you.get_colored_name(),
        ` brought an umbrella.`,
      ]);
      await era.printAndWait([
        `On the way back, `,
        you.get_colored_name(),
        ` spots a familiar pink figure sheltering under the hallway overhang.`,
      ]);
      await era.printAndWait([
        `It's `,
        digital.get_colored_name(),
        `. ${digital.sex === 'She' ? 'Her' : 'His'} ears droop listlessly without an umbrella, looking just like a classic scene straight out of a romance manga.`,
      ]);
      await era.printAndWait([
        `Puzzlingly, though, `,
        you.get_colored_name(),
        ` notices `,
        tachyon.get_colored_name(),
        ` holding an umbrella in the rain just a short distance away.`,
      ]);
      await you.say_and_wait(`Why didn't you call out to Tachyon?`);
      await digital.say_and_wait([
        `...Ah, you understand why, right, `,
        callname,
        `?`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` makes a few frantic hand gestures to explain.`,
      ]);
      await era.printAndWait([
        `Having spent so much time together, `,
        you.get_colored_name(),
        ` understands `,
        digital.get_colored_name(),
        `'s quirks all too well: `,
        digital.sex,
        ` didn't want to intrude upon `,
        tachyon.get_colored_name(),
        `'s sacred space.`,
      ]);
      await you.say_and_wait(
        `Got it. In that case, want to share my umbrella on the way back?`,
      );
      await digital.say_and_wait(`Thank you so much!`);
      await era.printAndWait([
        `And so, `,
        you.get_colored_name(),
        ` holds the umbrella, sheltering both `,
        you.get_colored_name(),
        ` and `,
        digital.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait(
        `The rain picks up, accompanied by gusty, unpredictable winds swirling from all directions.`,
      );
      await era.printAndWait([
        `It seems almost alive, sneaking right under the umbrella whenever `,
        you.get_colored_name(),
        ` tilts it against the gusts.`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` angles the umbrella further toward `,
        digital.get_colored_name(),
        `, determined to keep ${digital.sex === 'She' ? 'her' : 'him'} dry.`,
      ]);
      await digital.say_and_wait([
        callname,
        `, I appreciate it, but human bodies are far more fragile than an `,
        digital.uma_sex_title,
        `'s! If you catch a cold, that would be terrible!`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` pouts with genuine concern, ${digital.sex === 'She' ? 'her' : 'his'} ears pinning back.`,
      ]);
      await you.say_and_wait(
        `Ouch... that physical comparison stings a little.`,
      );
      await era.printAndWait([
        `Lightening the mood with casual banter, you continue walking alongside `,
        digital.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait([
        `Even so, `,
        you.get_colored_name(),
        ` doesn't yield, keeping the canopy positioned over `,
        digital.sex,
        `.`,
      ]);
      await era.printAndWait([
        `Naturally, the result of that stubbornness is that by the time you reach the trainer room, `,
        you.get_colored_name(),
        ` is soaked through, though thankfully `,
        digital.get_colored_name(),
        ` stayed mostly dry.`,
      ]);
      await digital.say_and_wait([
        `Ahahaha! Hold still right there, `,
        callname,
        `!`,
      ]);
      await era.printAndWait([
        `Uh-oh. `,
        you.get_colored_name(),
        ` suddenly realizes that while a soaked `,
        digital.uma_sex_title,
        ` is precarious, being soaked in front of your `,
        digital.uma_sex_title,
        ` carries its own awkward hazards.`,
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ` grabs a dry towel and begins wiping the raindrops from `,
        you.get_colored_name(),
        `'s hair.`,
      ]);
      await era.printAndWait(
        `Stripping off your wet overshirt, drying your torso, and wrapping yourself in a fresh towel serves as a temporary fix.`,
      );
      await you.say_and_wait(`Thanks a lot, I can take it from here.`);
      await era.printAndWait([
        `Being dried off like that leaves `,
        you.get_colored_name(),
        ` feeling a bit self-conscious,`,
      ]);
      await era.printAndWait([
        `considering `,
        you.get_colored_name(),
        ` is a grown adult. `,
        digital.get_colored_name(),
        ` lowers ${digital.sex === 'She' ? 'her' : 'his'} head, hiding ${digital.sex === 'She' ? 'her' : 'his'} expression from `,
        you.get_colored_name(),
        `, though judging by the tilt of ${digital.sex === 'She' ? 'her' : 'his'} ears, `,
        digital.sex,
        ` doesn't seem upset in the slightest...`,
      ]);
      await era.printAndWait(`Everything alright?`);
      era.drawLine();
      await digital.say_and_wait(
        `Phew! Taking a hot bath after getting caught in the rain and snuggling into bed for a good night's sleep is the secret to peak fan duties tomorrow!`,
      );
      await digital.print_and_wait([
        `Looks like my roommate `,
        d_call_t,
        ` is still in the lab, just like always.`,
      ]);
      await digital.print_and_wait(
        `Oops, I almost forgot to write in my journal today...`,
      );
      await digital.print_and_wait(
        `Oh well! I'll just tuck myself in, replay today's glorious fan moments, and gear up for tomorrow!`,
      );
      await digital.print_and_wait([
        `Let's see... Morning started with soaking up pure bliss on the turf where the `,
        digital.uma_sex_title,
        `-chans ran, lunch was refueling at the cafeteria, and this afternoon...`,
      ]);
      await digital.print_and_wait([
        `This afternoon was... `,
        callname,
        `... with smooth pale skin, hints of toned abs, and dripping wet hair...`,
      ]);
      await digital.print_and_wait(
        `NO NO NO! Digital, what on earth are you imagining?!`,
      );
      await digital.print_and_wait([
        `That physique definitely seems popular with `,
        digital.uma_sex_title,
        `s though...`,
      ]);
      await digital.print_and_wait(
        `Wait, calm down, Digi-tan! Let's analyze this with your existing genre knowledge! Digi-tan, you've read countless doujinshi and drawn a ton yourself!`,
      );
      await digital.print_and_wait(
        `Come on, search through the tropes for answers!`,
      );
      await digital.print_and_wait([
        `It's a story where `,
        callname,
        ` scouts an `,
        digital.uma_sex_title,
        ` and unlocks ${digital.sex === 'She' ? 'her' : 'his'} hidden potential, right?!`,
      ]);
      await digital.print_and_wait(
        `And then... how does that trope usually go?`,
      );
      await digital.print_and_wait([`The uma-chan catches on...`]);
      await digital.print_and_wait(
        `And then starts self-recharging in private...`,
      );
      await digital.say_and_wait(
        `NONONO! Why is my mind going there?! There's no way that applies here...!`,
      );
      await tachyon.say_and_wait([
        `My, my, `,
        t_call_d,
        `, whatever are you muttering about over there?`,
      ]);
      await digital.say_and_wait(`EEEK!`);
      await digital.print_and_wait([
        `Looks like `,
        d_call_t,
        ` picked the most awkward moment to return.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-first': (() => {
    const title = 'Chronicles';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {string} callname How Agnes Digital addresses the player
     */
    const f = async (digital, you, callname) => {
      await digital.print_and_wait([
        `Today was the eagerly anticipated Debut Selection Race for the fresh, aspiring `,
        digital.uma_sex_title,
        `-chans! Once again, I am humbled by the boundless potential of the goddesses!`,
      ]);
      await digital.print_and_wait([
        `And then... I ran into someone peculiar! Well, peculiar or not, `,
        you.sex.toLowerCase(),
        ` turned out to be a fellow otaku of culture!`,
      ]);
      digital.print('...');
      era.println();
      await digital.print_and_wait(
        `Today, little ol' Digi-tan finally resolved the eternal dilemma of turf versus dirt! Definitely worth a celebratory cheer later, but first, let's write it all down.`,
      );
      await digital.print_and_wait([
        `That person from before actually came up with a flawless solution! It was a total lightning-bolt epiphany!`,
      ]);
      await digital.print_and_wait([
        `In the end, I accepted `,
        you.sex === 'She' ? 'her' : 'his',
        ` invitation and officially became `,
        you.sex === 'She' ? 'her' : 'his',
        ` partnered `,
        digital.uma_sex_title,
        `.`,
      ]);
      digital.print('...');
      era.println();
      await digital.print_and_wait([
        `It was such an amazing surprise that `,
        callname,
        ` actually joined me on a fan cheering run!`,
      ]);
      await digital.print_and_wait(
        `Never in my wildest dreams did I imagine someone could actually match my fanatical pace!`,
      );
      await digital.print_and_wait(
        `We visited so many racetracks. Looking back on it now...`,
      );
      await digital.print_and_wait([
        `Thinking back, `,
        callname,
        ` looked pretty pale by the end, completely wiped out.`,
      ]);
      await digital.print_and_wait([
        `Even so, `,
        callname,
        ` truly earned the proud title of 'comrade in arms'!`,
      ]);
      digital.print('...');
      era.println();
      await digital.print_and_wait(
        `And then we went to so many sacred sites! Here it comes again, the holy ground pilgrimage!`,
      );
      await digital.print_and_wait(
        `Visiting the places our idols walked, landmarks steeped in meaning, retracing their steps!`,
      );
      await digital.print_and_wait([
        `My goodness, `,
        callname,
        ` actually said yes to my crazy invitation and tagged along without complaint.`,
      ]);
      await digital.print_and_wait(
        `It felt like a soul-deep resonance across the Dover Strait, a heart-stopping shockwave of pure harmony!`,
      );
      await digital.print_and_wait([
        `And what's more, `,
        callname,
        ` knew so much trivia! Details about the idols that even I hadn't uncovered! Have I failed as a DD stan?!`,
      ]);
      await digital.print_and_wait([
        `In the end, I unleashed my full unhinged fan rant on `,
        callname,
        `! To think someone in this universe would listen so attentively to my unfiltered brainrot... I was moved beyond words.`,
      ]);
      digital.print('...');
      era.println();
      await digital.print_and_wait([
        `Summer training camp is right around the corner, which means seeing the `,
        digital.uma_sex_title,
        `-chans in swimsuits!`,
      ]);
      await digital.print_and_wait([
        `Under the blazing sun, shining brighter than the sun itself... the `,
        digital.uma_sex_title,
        `-chans!`,
      ]);
      await digital.print_and_wait(`Who will split the flying watermelon?`);
      await digital.print_and_wait(
        `Who will dive to save the high-speed volleyball?`,
      );
      await digital.print_and_wait([
        `Shaved ice, fresh seafood, everything serves as a backdrop to the brilliance of the `,
        digital.uma_sex_title,
        `-chans!`,
      ]);
      await digital.print_and_wait([
        `I have to invite `,
        callname,
        ` to come have fun with us!`,
      ]);
      await digital.print_and_wait(`...Ah.`);
      await digital.print_and_wait([
        `(Sitting before the open notebook, the pink-haired `,
        digital.teen_sex_title,
        ` sets down the pen.)`,
      ]);
      await digital.say_and_wait(`Have I only ever thought about myself...?`);
      digital.print('...');
      era.println();
      await digital.print_and_wait([
        `If you weighed my selfishness against `,
        digital.uma_sex_title,
        `s on a balance scale, it would tilt right toward the idols in a heartbeat.`,
      ]);
      await digital.print_and_wait([
        `But what if you weighed `,
        digital.uma_sex_title,
        `s against `,
        callname,
        `?`,
      ]);
      await digital.print_and_wait(
        `Hard as it is to admit, looking at how I've acted, the scale in my heart has always tilted left.`,
      );
      await digital.print_and_wait([
        `So tomorrow at camp, I want to do whatever `,
        you.sex.toLowerCase(),
        ` wants to do, just for `,
        callname,
        `.`,
      ]);
      digital.print('...');
      era.println();
      await digital.print_and_wait(`How should I put this into words...?`);
      await digital.print_and_wait(
        `Recalling it now still makes my face burn...`,
      );
      await digital.print_and_wait(
        `Truly, this is the very first time Digi-tan discovered someone who stans me with so much dedication, and that someone is my own Trainer.`,
      );
      digital.print('...');
      era.println();
      await digital.print_and_wait(
        `Ever since that night, everything has felt strange...`,
      );
      await digital.print_and_wait([
        `Just being around `,
        callname,
        ` makes me fidgety and flustered. What am I supposed to do?`,
      ]);
      await digital.print_and_wait(
        `I understand, I think I know what it is. Should I listen to my racing heartbeat, or try to ignore what it's telling me?`,
      );
      digital.print('...');
      era.println();
      await digital.print_and_wait([
        `I have to confess: I've caught feelings for `,
        callname,
        `. Real, romantic feelings.`,
      ]);
      await digital.print_and_wait(
        `When I think about it carefully, isn't something already obvious?`,
      );
      await digital.print_and_wait([
        `Think about it, Digi-tan! Going out with `,
        callname,
        ` on fan runs,`,
      ]);
      await digital.print_and_wait(
        `Hanging out together, watching movies, visiting festivals, pouring out our hearts on the beach...`,
      );
      await digital.print_and_wait(`Wait a second!`);
      await digital.print_and_wait(`Aren't those literally dates?!`);
      await digital.print_and_wait(
        `(Well, dates can mean regular outings too, but still!)`,
      );
      await digital.print_and_wait([
        `Could it be that `,
        callname,
        ` and I have been dating this whole time and I just forgot?!`,
      ]);
      digital.print('...');
      era.println();
      await digital.print_and_wait(
        `Oh no, oh no! I skipped yesterday's entry, and looking back today, I realize I'm in way over my head!`,
      );
      await digital.print_and_wait(`What am I supposed to do now...?`);
      digital.print('...');
      era.println();
      await digital.print_and_wait(`Today,`);
      await digital.print_and_wait([
        `I went on another pilgrimage with `,
        callname,
        `. Even though the `,
        digital.uma_sex_title,
        `-chans were as dazzling as ever,`,
      ]);
      await digital.print_and_wait([
        `Sitting next to `,
        callname,
        `, I kept catching myself stealing nervous glances at `,
        callname,
        `...`,
      ]);
      await digital.print_and_wait([
        `Looking at ${you.sex === 'She' ? 'her' : 'him'}, `,
        you.sex.toLowerCase(),
        ` is genuinely attractive, and that spirit commands my deepest respect!`,
      ]);
      await digital.print_and_wait(`...I've made up my mind.`);
      digital.print('...');
      era.println();
      await digital.print_and_wait(
        `Unlike usual, I'm writing this journal entry first thing in the morning.`,
      );
      await digital.print_and_wait(
        `You can do this, Digital! Wait, no... come to think of it, do I even have any charm?`,
      );
      await digital.print_and_wait(
        `A petite frame, an unremarkable build, and daily habits like an ordinary...`,
      );
      await digital.print_and_wait(`No, more like a total weirdo!`);
      await digital.print_and_wait([
        `Babbling endlessly about `,
        digital.uma_sex_title,
        `s and speeding up into turbo-rant mode the second a favorite topic comes up, that's pure otaku madness!`,
      ]);
      await digital.print_and_wait([
        `Besides `,
        callname,
        `, is there anyone else on earth who could ever date someone like me?`,
      ]);
      await digital.print_and_wait([
        `Meeting `,
        callname,
        ` was the luckiest break of my life! If I let this chance slip, it's gone forever! I'll never find someone this understanding and kind again!`,
      ]);
      await digital.print_and_wait(
        `Digital, you need to take action right now!`,
      );
      await digital.print_and_wait(
        `If you miss this, you'll spend the rest of your life crying into your pillow under the covers!`,
      );
      await digital.print_and_wait([
        callname,
        ` must like me back, right? Otherwise, why would ${you.sex.toLowerCase()} come to all those cheering events with me?`,
      ]);
      await digital.print_and_wait(
        `Alright! The odds are definitely in our favor!`,
      );
      await digital.print_and_wait(`Go, go, go! No more waiting around!`);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ` checks the phone. By this time, `,
        digital.get_colored_name(),
        ` is usually already on the track warming up, even if official training hasn't started yet...`,
      ]);
      await era.printAndWait([
        `Reflecting on `,
        digital.get_colored_name(),
        `'s recent behavior, ever since that heart-to-heart on the beach, `,
        digital.get_colored_name(),
        ` seems to pay much closer attention to `,
        you.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait([
        `It seems `,
        digital.sex,
        ` has plenty on ${digital.sex === 'She' ? 'her' : 'his'} mind besides fangirling over `,
        digital.uma_sex_title,
        `-chans.`,
      ]);
      await era.printAndWait([
        `Just as those thoughts cross your mind, `,
        digital.get_colored_name(),
        ` comes jogging over from the distance.`,
      ]);
      await era.printAndWait(
        `Wait, why is ${digital.sex === 'She' ? 'her' : 'his'} face flushed bright red?`,
      );
      await era.printAndWait(
        `Could an injury be causing that? ${digital.sex} is running a bit later than usual today too.`,
      );
      await you.say_and_wait(`Digital! Hold up, stop!`);
      await digital.say_and_wait(`Eep!`);
      await era.printAndWait([
        `You jog over to `,
        digital.get_colored_name(),
        `, who stops in surprise.`,
      ]);
      await era.printAndWait([
        `You crouch down to carefully examine `,
        digital.get_colored_name(),
        `'s legs.`,
      ]);
      await digital.say_and_wait([`U-Umm... `, callname, `?`]);
      await era.printAndWait(`Hmm... at least there's no visible swelling...`);
      await you.say_and_wait(
        `Did you hurt your leg? Should we head to the infirmary?`,
      );
      await digital.say_and_wait(`Huh?`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` seems utterly bewildered, so you decide to check for yourself.`,
      ]);
      await era.printAndWait(
        `Starting with the knee, supporting the outer side with your left hand while gently testing the inner ligament with your right, no sign of stiffness.`,
      );
      await digital.say_and_wait(`Umm, excuse me...`);
      await era.printAndWait(
        `Moving to the thighs, both the biceps femoris and rectus femoris are relaxed and supple.`,
      );
      await digital.say_and_wait(`Could you... please stop?`);
      await you.say_and_wait(`How can I stop now?!`);
      await era.printAndWait(
        `Next are the calves; muscle tone looks in peak condition.`,
      );
      await era.printAndWait(
        `Lastly, the ankles and feet. You'd have to remove ${digital.sex === 'She' ? 'her' : 'his'} shoes first, but doing that carelessly might aggravate a sprain...`,
      );
      await digital.say_and_wait([callname, `! I'm completely fine, honest!`]);
      await you.say_and_wait(`Then why are you acting so unusual today?`);
      await era.printAndWait([
        `Still crouched, you look up into `,
        digital.get_colored_name(),
        `'s face, which is turning an even deeper crimson.`,
      ]);
      await digital.say_and_wait(
        `That's... L-Let's head back to the trainer room first and I'll explain!`,
      );
      await you.say_and_wait(`But...`);
      await digital.say_and_wait(`...`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` silently stares down at `,
        you.get_colored_name(),
        `.`,
      ]);
      era.drawLine();
      await you.say_and_wait(
        `Alright, can you explain now? Your legs are definitely okay, right?`,
      );
      await digital.say_and_wait(
        `Umm... first off, yes, my legs are 100% fine.`,
      );
      await you.say_and_wait(`...Then what's going on?`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` looks down, twiddling ${digital.sex === 'She' ? 'her' : 'his'} fingers, squeezing out words one by one.`,
      ]);
      await digital.say_and_wait(`Actually... I... ever since... sigh...`);
      await era.printAndWait([
        `Stopping halfway through, `,
        digital.get_colored_name(),
        ` lets out another flustered sigh.`,
      ]);
      await you.say_and_wait(`How about I start?`);
      await you.say_and_wait(`It's stuffy in here. Let's take a walk outside.`);
      await digital.say_and_wait(`...Ah.`);
      await era.printAndWait(
        `Standing up, you open the trainer room door, step onto the track, and climb up to the grandstand.`,
      );
      await era.printAndWait([
        `Over the racecourse, the morning sunrise serves as the finest brew of coffee for hardworking `,
        digital.uma_sex_title,
        `s.`,
      ]);
      await digital.say_and_wait([`Umm, `, callname, `?`]);
      await you.say_and_wait(`Let's head to the next spot.`);
      await digital.say_and_wait(`Huh?`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` follows along obediently.`,
      ]);
      await era.printAndWait(
        `By the riverbank, the midday sun glints brilliantly off the shimmering water.`,
      );
      await digital.say_and_wait([callname, `, are you trying to...?`]);
      await era.printAndWait(
        `At the shrine, the afternoon dappled shade quietly shields the sacred grounds.`,
      );
      await digital.say_and_wait(`...`);
      await era.printAndWait(
        `In the park, streetlights click on early before the sun even sets.`,
      );
      await digital.say_and_wait(`...`);
      await era.printAndWait(
        `At the beach, the unlit shoreline glows softly under silver moonlight.`,
      );
      await digital.say_and_wait(`...`);
      await digital.say_and_wait(
        `Walking the entire loop together, all my nervousness kind of melted away.`,
      );
      await you.say_and_wait(`I'm glad.`);
      await digital.say_and_wait([callname, `.`]);
      await you.say_and_wait(`Yeah?`);
      await digital.say_and_wait(`I love you.`);
      era.print([`Right now, `, you.get_colored_name(), `'s choice:`]);
      era.printButton('Accept', 1);
      era.printButton('Decline', 2);
      const ret = await era.input();
      await digital.print_and_wait([
        `How embarrassing... To think `,
        callname,
        ` had to guide me through the whole confession route.`,
      ]);
      if (ret === 1) {
        await digital.print_and_wait(`But... it worked.`);
        await digital.print_and_wait(`Yes, it worked!`);
        await digital.print_and_wait(
          `I thought I'd be bouncing off the walls, but what I feel right now is...`,
        );
        await digital.print_and_wait(
          `An overwhelming, warm sense of pure happiness.`,
        );
      } else {
        await digital.print_and_wait(
          `Hahaha... in the end, it was a swing and a miss.`,
        );
        await digital.print_and_wait([
          `Still, I get it now. What `,
          callname,
          ` and I share runs deeper than a simple romance.`,
        ]);
        await digital.print_and_wait(
          `There are much more intricate, profound bonds between us...`,
        );
        await digital.print_and_wait(
          `So many thoughts, so much to write, but my pen won't move... The pages are getting stained with tears...`,
        );
        await digital.print_and_wait(
          `I still can't help feeling a little heartbroken...`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '74-after': (() => {
    const title = 'If at First You Don’t Succeed, Go for Round Two! Obviously!';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     */
    const f = async (digital, you) => {
      await digital.print_and_wait(
        `Digital, oh Digital! After all this time, I've finally clawed my way out of the pit of despair!`,
      );
      await digital.print_and_wait(
        `And thinking about it, yep! I still love ${you.sex === 'She' ? 'her' : 'him'}! I love ${you.sex === 'She' ? 'her' : 'him'} to pieces!`,
      );
      await digital.print_and_wait(
        `So, time for round two! This time, Digital, you've got this!`,
      );
      era.print([`Once again, `, you.get_colored_name(), `'s choice:`]);
      era.printButton('Accept', 1);
      era.printButton('Decline', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.print_and_wait(`UWAAAAH! It worked!`);
        await digital.print_and_wait(`How? Why?`);
        await digital.print_and_wait(
          `Who cares why, it worked! That's all that matters!`,
        );
      } else {
        await digital.print_and_wait(`Wait, seriously?!`);
        await digital.print_and_wait(`Uwaaaah, no way!`);
        await digital.print_and_wait(
          `Even a dork like me has pride and perseverance!`,
        );
        await digital.print_and_wait(
          `I WILL win ${you.sex === 'She' ? 'her' : 'his'} heart!`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-first': (() => {
    const title = 'Moving In Together! A Classic Romance Trope Inevitability!';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} mcqueen Mejiro McQueen
     * @param {CharaTalk} coffee Manhattan Cafe
     * @param {CharaTalk} tachyon Agnes Tachyon
     * @param {CharaTalk} machan Aston Machan
     * @param {CharaTalk} tarumae Hokko Tarumae
     * @param {CharaTalk} you Player
     * @param {string} callname How Agnes Digital addresses the player
     * @param {PrintedSpan} y_call_d How the player addresses Agnes Digital
     * @param {string} child How the player addresses the child
     * @param {string} parent The player's relation to the child
     */
    const f = async (
      digital,
      mcqueen,
      coffee,
      tachyon,
      machan,
      tarumae,
      you,
      callname,
      y_call_d,
      child,
      parent,
    ) => {
      await era.printAndWait(
        `Returning home after an exhausting day of work to the aroma of dinner drifting from the kitchen and the sound of someone humming cheerfully feels so surreal you'd think you got hit by a truck and isekai'd with amnesia.`,
      );
      await era.printAndWait([
        `So when exactly did `,
        y_call_d,
        ` get a spare key and start treating `,
        you.get_colored_name(),
        `'s apartment as home?`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` clearly remembers that moonlit night on the beach when `,
        y_call_d,
        ` confessed to `,
        you.get_colored_name(),
        `, and naturally, `,
        y_call_d,
        ` became `,
        you.get_colored_name(),
        `'s romantic partner.`,
      ]);
      await era.printAndWait(
        `In reality... dating didn't feel much different from everyday life at first...`,
      );
      await era.printAndWait(
        `Still cheering for idols together, still going on holy ground pilgrimages.`,
      );
      await era.printAndWait(`And then what?`);
      await digital.say_and_wait(
        `No way! If nothing changes, what's the point of dating?!`,
      );
      await digital.say_and_wait(
        `Was my previous theory spot on...? No, wait!`,
      );
      await era.printAndWait([
        `To shake things up, `,
        y_call_d,
        ` apparently studied certain romantic doujinshi and borrowed a spare key from `,
        you.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait(
        `Even with the key in hand, nothing happened for the first few days. Assuming it was just a passing whim, you put it out of mind.`,
      );
      await era.printAndWait([
        `So when `,
        you.get_colored_name(),
        ` dragged an exhausted body home one evening, turned the key in the lock, and heard sounds beyond the click of metal, it came as quite the surprise.`,
      ]);
      await era.printAndWait([
        `From that day onward, `,
        y_call_d,
        ` visited `,
        you.get_colored_name(),
        `'s home with increasing frequency.`,
      ]);
      await era.printAndWait(
        `The once-monotone apartment gradually bloomed with vibrant, colorful life.`,
      );
      await era.printAndWait([
        `Yet what amused `,
        you.get_colored_name(),
        ` most was what originally colonized `,
        you.get_colored_name(),
        `'s living room...`,
      ]);
      await era.printAndWait([
        `An endless sea of `,
        digital.uma_sex_title,
        ` merchandise.`,
      ]);
      await era.printAndWait([
        `For instance, a `,
        tachyon.get_colored_name(),
        ` black tea mug, a `,
        coffee.get_colored_name(),
        ` coffee cup, a `,
        mcqueen.get_colored_name(),
        ` mousepad, an `,
        machan.get_colored_name(),
        ` plushie...`,
      ]);
      await era.printAndWait([
        `Most bizarrely of all, there was even a plushie of Tomachop, the official mascot of Tomakomai representing `,
        tarumae.get_colored_name(),
        `!`,
      ]);
      await era.printAndWait([
        `One day, seeing `,
        y_call_d,
        ` hauling an entire clothes dryer into the apartment, `,
        you.get_colored_name(),
        ` realized things were getting out of hand and decided it was time to launch a massive counter-offensive!`,
      ]);
      await era.printAndWait([
        `While `,
        you.get_colored_name(),
        ` owns some of the world's most prized `,
        y_call_d,
        ` memorabilia, like winning commemorative banners and custom trophy plushies, most were stored at the trainer room or archived by officials.`,
      ]);
      await era.printAndWait([
        `Time to head to the store and buy multiple copies of every single piece of `,
        y_call_d,
        ` merch available!`,
      ]);
      await era.printAndWait(
        `Have the clerk deliver the entire haul straight to the front door!`,
      );
      await era.printAndWait([
        `Happily admiring `,
        y_call_d,
        `'s heroic moments across every race, you place a plushie on the sofa, one on the bed, one on the computer, one on the TV...`,
      ]);
      await era.printAndWait([
        `Then move your personal collection of `,
        y_call_d,
        ` doujin works from the hidden corner right to the centerpiece beside the couch...`,
      ]);
      await era.printAndWait([
        `Hahaha, perfection! Can't wait to see `,
        y_call_d,
        `'s reaction!`,
      ]);
      await era.printAndWait(`The outcome, however...`);
      await era.printAndWait([
        `The emotional shock proved far too potent for `,
        y_call_d,
        `. `,
        you.get_colored_name(),
        ` could only watch helplessly as `,
        digital.sex,
        ` turned beet-red before collapsing flat on the floor with a soft thud.`,
      ]);
      await era.printAndWait(
        `Beyond these amusing episodes, daily life settled into a quiet, comfortable rhythm.`,
      );
      await era.printAndWait(
        `Peaceful and steady, like opening a rice cooker to see warm steam rising gently from fresh white rice.`,
      );
      await era.printAndWait([
        `So when `,
        you.get_colored_name(),
        ` and `,
        y_call_d,
        ` welcomed your child into the world, alongside pure joy came the sudden realization of how much time had passed.`,
      ]);
      await era.printAndWait([
        `The memory of discovering `,
        digital.sex_code === 1 ? 'your own' : y_call_d,
        ` pregnancy felt soft and distant, wrapped in a gentle warmth.`,
      ]);
      await era.printAndWait([
        `From the very beginning, `,
        child,
        ` was remarkably well-behaved. Seeing `,
        y_call_d,
        ` and surrounding `,
        digital.uma_sex_title,
        ` merchandise instantly settled ${digital.sex === 'She' ? 'her' : 'him'}, with only occasional adorable squeaks mimicking `,
        y_call_d,
        `.`,
      ]);
      await era.printAndWait([
        child,
        ` took after `,
        y_call_d,
        ` deeply. From an early age, `,
        digital.sex,
        ` adored `,
        digital.uma_sex_title,
        `s, especially sitting in front of the TV to watch `,
        y_call_d,
        `'s Winning Lives.`,
      ]);
      await era.printAndWait([
        `Or perhaps `,
        you.get_colored_name(),
        `, being `,
        child,
        `'s `,
        parent,
        `, was simply replaying `,
        y_call_d,
        `'s race tapes around the clock?`,
      ]);
      await era.printAndWait([
        `Whenever `,
        you.get_colored_name(),
        ` and `,
        child,
        ` watched the recordings, `,
        y_call_d,
        ` would initially overheat like a human steam humidifier and hide in the bedroom, but eventually warmed up to cuddling beside `,
        you.get_colored_name(),
        ` while holding `,
        child,
        ` to watch together.`,
      ]);
      await era.printAndWait([
        `Under loving care, `,
        child,
        ` grew up healthy and strong.`,
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        `s grow astonishingly fast. Before you knew it, `,
        digital.sex,
        ` was ready to enter Tracen Academy.`,
      ]);
      await era.printAndWait([
        `Discussing it with `,
        y_call_d,
        `, `,
        y_call_d,
        ` worried that given `,
        child,
        `'s intense love for `,
        digital.uma_sex_title,
        `s, attending the entrance ceremony alone might trigger a fandom overload.`,
      ]);
      await era.printAndWait([
        `Still, you both agreed that experiencing it firsthand was best for `,
        digital.sex === 'She' ? 'her' : 'him',
        `.`,
      ]);
      await era.printAndWait([
        `Yet on the night before departure, `,
        y_call_d,
        ` kept repacking the bags, trying to squeeze in even more supplies.`,
      ]);
      await era.printAndWait([
        `Even though home is right next to Tracen, even though `,
        you.get_colored_name(),
        ` is an active Trainer there who could see `,
        child,
        ` at any time, `,
        you.get_colored_name(),
        ` still fretted over whether any essentials were forgotten.`,
      ]);
      await era.printAndWait([
        y_call_d,
        ` chuckled, teasing if this was somehow a final farewell.`,
      ]);
      await era.printAndWait([
        child,
        ` cried loudly, requiring both of you to comfort ${digital.sex === 'She' ? 'her' : 'him'} for quite a while.`,
      ]);
      await era.printAndWait([
        `Tomorrow inevitably becomes today, and now the time has come for `,
        digital.sex === 'She' ? 'her' : 'him',
        ` to head off to school.`,
      ]);
      await era.printAndWait(
        `The morning mist has yet to lift, the distant horizon is faintly tinged with dawn pink, and streetlights still glow along the pavement.`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        ` and `,
        y_call_d,
        ` carry the luggage downstairs with `,
        child,
        `.`,
      ]);
      await era.printAndWait([
        `Even though `,
        child,
        ` insisted on carrying everything, `,
        you.get_colored_name(),
        ` and `,
        y_call_d,
        ` refused to let go.`,
      ]);
      await era.printAndWait([
        `Unable to out-stubborn both parents, `,
        child,
        ` reluctantly relented.`,
      ]);
      await era.printAndWait([
        `Before you lies the dedicated `,
        digital.uma_sex_title,
        ` running path. Following this road reaches Tracen in no time; as an `,
        digital.uma_sex_title,
        `, there isn't even a need for a taxi.`,
      ]);
      await era.printAndWait([
        `Setting the bags down, while not overly heavy, hauling them was still tiring for `,
        you.get_colored_name(),
        `, whereas `,
        y_call_d,
        ` effortlessly carried far more.`,
      ]);
      await era.printAndWait([
        `Having slept poorly last night and waking at dawn to move bags, `,
        you.get_colored_name(),
        ` feels a bit groggy.`,
      ]);
      await era.printAndWait([
        y_call_d,
        ` gently leans in to support `,
        you.get_colored_name(),
        `. Looking into `,
        digital.sex,
        `'s eyes, `,
        you.get_colored_name(),
        ` knows `,
        digital.sex,
        ` didn't sleep well either.`,
      ]);
      await era.printAndWait([
        `Wait, `,
        you.get_colored_name(),
        ` looks around. Where is `,
        child,
        `?`,
      ]);
      await era.printAndWait([`Ah! Standing right beside `, y_call_d, `.`]);
      await era.printAndWait([
        child,
        ` gives a warm, tight hug to `,
        y_call_d,
        `, and then wraps `,
        you.get_colored_name(),
        ` in an equally loving embrace.`,
      ]);
      await era.printAndWait([
        `So gentle, you have to hold on tight to feel ${digital.sex === 'She' ? 'her' : 'him'} presence. Still in the middle of a growth spurt, ${digital.sex} is about the same height as `,
        y_call_d,
        `.`,
      ]);
      await you.say_as_passer_by_and_wait(
        child,
        `Alright, I'm off! See you later!`,
      );
      await era.printAndWait([
        `Waving goodbye, `,
        child,
        ` jogs forward down the path.`,
      ]);
      await era.printAndWait(`Wait! You forgot your bags!`);
      await era.printAndWait([
        `Urgently nudging `,
        y_call_d,
        ` to give chase, you notice `,
        y_call_d,
        ` simply staring into the distance where `,
        child,
        ` ran.`,
      ]);
      await era.printAndWait(`Hold on! What's wrong?`);
      await digital.say_and_wait([
        callname,
        `, since `,
        child,
        ` is at Tracen anyway, wouldn't it be easier if we just brought the luggage to ${digital.sex === 'She' ? 'her' : 'him'} later?`,
      ]);
      await you.say_and_wait([
        `Wait, `,
        y_call_d,
        `... `,
        child,
        `... ${digital.sex}... ${digital.sex.toLowerCase()}...`,
      ]);
      await era.printAndWait(
        `Like an intersection you walk past every day, a beloved diner you frequent, or an online game you play constantly, suddenly announcing road closures, permanent shutdown, or end of service...`,
      );
      await era.printAndWait([
        `The surreal emptiness of something you assumed would last forever suddenly evaporating fills `,
        you.get_colored_name(),
        `'s chest.`,
      ]);
      await era.printAndWait([
        `Looking closely down the road, `,
        child,
        ` is nowhere to be seen.`,
      ]);
      await you.say_and_wait([
        y_call_d,
        `! What... what is happening?! Why... why is this...?`,
      ]);
      await digital.say_and_wait(
        `They say it's an illusion, an affliction, or some kind of supernatural phenomenon...`,
      );
      await digital.say_and_wait([
        `Most consider it a shared psychological anomaly... of unknown origin, affecting only `,
        digital.uma_sex_title,
        `s and those closest to them...`,
      ]);
      await era.printAndWait(
        `Then... why? Was all of this created only to be torn away?`,
      );
      await era.printAndWait([
        `Lost in shock, `,
        you.get_colored_name(),
        ` notices `,
        y_call_d,
        ` staring silently toward Tracen, utterly motionless.`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` suddenly realizes `,
        y_call_d,
        ` feels the exact same heartbreak.`,
      ]);
      await era.printAndWait([
        `As a Trainer who has always supported `,
        y_call_d,
        `, right now `,
        digital.sex,
        ` is the one holding `,
        you.get_colored_name(),
        ` up.`,
      ]);
      await era.printAndWait([
        digital.sex,
        ` tries to speak in a calm, soothing tone to soften `,
        you.get_colored_name(),
        `'s grief. But hugging `,
        y_call_d,
        ` from behind reveals that `,
        y_call_d,
        ` is trembling uncontrollably.`,
      ]);
      await era.printAndWait(
        `${digital.sex === 'She' ? 'Her' : 'His'} petite frame feels more fragile than ever.`,
      );
      await era.printAndWait(
        `A single stone cast into a tranquil lake, stirring turbulent waves.`,
      );
      await digital.say_and_wait(`...*Sob*...`);
      await digital.say_and_wait(`I... I should have known all along...`);
      await digital.say_and_wait(
        `Honestly... Digi-tan... knew from the start...`,
      );
      await digital.say_and_wait(
        `When... I realized parts of my memories were hazy and unclear...`,
      );
      await digital.say_and_wait(
        `When... I noticed the nursery supplies at home never ran low...`,
      );
      await digital.say_and_wait(
        `When... I flipped through old doujinshi I drew back then...`,
      );
      await digital.say_and_wait(`Even then... I already understood...`);
      await digital.say_and_wait([
        `It was because I loved `,
        callname,
        ` so deeply... yet was too terrified to take the next real step...`,
      ]);
      await digital.say_and_wait([
        `And... `,
        callname,
        `, you were caught in that longing too...`,
      ]);
      await digital.say_and_wait([`That's why... `, child, ` came to be...`]);
      await digital.say_and_wait([
        `That's all ${digital.sex.toLowerCase()} was...`,
      ]);
      await era.printAndWait([
        `Through `,
        y_call_d,
        `'s choked sobs, `,
        you.get_colored_name(),
        ` finally understands: `,
        child,
        ` was the embodiment of `,
        y_call_d,
        `'s heartfelt wish.`,
      ]);
      await digital.say_and_wait([
        `If... if we just choose to forget what happened here... we can still see `,
        child,
        ` again...`,
      ]);
      await digital.say_and_wait([
        `If... we choose to remember, then `,
        child,
        `... will truly... disappear forever...`,
      ]);
      await digital.say_and_wait(
        `Hehehe... In the end, isn't this just deciding whether or not to face reality...? Isn't that what this whole psychological anomaly is about...?`,
      );
      era.printButton('Remember (Deepen Relationship)', 1);
      era.printButton('Forget (Keep Status Quo)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`No!`);
        await you.say_and_wait([
          child,
          ` wasn't just a fantasy! `,
          digital.sex,
          ` was the proof of our love!`,
        ]);
        await era.printAndWait([
          `When both of you hesitated to move forward, `,
          child,
          ` reached out and brought `,
          y_call_d,
          `'s hand into `,
          you.get_colored_name(),
          `'s.`,
        ]);
        await you.say_and_wait([
          child,
          ` showed us that the time has come to take the next step together!`,
        ]);
        await era.printAndWait([
          `Turning `,
          y_call_d,
          ` around, `,
          y_call_d,
          `'s tear-streaked eyes glisten anew.`,
        ]);
        await digital.say_and_wait(`Do you mean...?`);
        await you.say_and_wait([y_call_d, `, marry me.`]);
        await digital.say_and_wait(
          `Hahaha... Look at me, worrying over all of this like a total fool...`,
        );
        await era.printAndWait([
          y_call_d,
          ` smiles through tears, droplets shining like pearls, the most precious treasure in `,
          you.get_colored_name(),
          `'s world.`,
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ` leans in and kisses ${digital.sex === 'She' ? 'her' : 'him'}.`,
        ]);
        await era.printAndWait(`Salty,`);
        await era.printAndWait(`mingled with tears of joy.`);
        await era.printAndWait(`Bitter,`);
        await era.printAndWait(`tinged with past heartache.`);
        await era.printAndWait(`...Sweet,`);
        await era.printAndWait(
          `the pure warmth of something far beyond tears.`,
        );
        await era.printAndWait(
          `Lips intertwined, bodies pressed close, fingers locked together.`,
        );
        await era.printAndWait([
          `Nothing in this world will ever tear you apart again.`,
        ]);
      } else {
        await era.printAndWait(
          `The whole event feels like a bad dream, but in truth, nothing was broken.`,
        );
        await era.printAndWait([
          `Your `,
          child,
          ` enrolled in Tracen Academy without a hitch, and `,
          you.get_colored_name(),
          `, as `,
          parent,
          `, naturally stepped up as ${digital.sex === 'She' ? 'her' : 'his'} Trainer.`,
        ]);
        await era.printAndWait([
          y_call_d,
          `, as the `,
          digital.sex_code === 1 ? 'father' : 'mother',
          `, frequently trains side-by-side with `,
          child,
          `.`,
        ]);
        await era.printAndWait(
          `One big, one small (though the big one is plenty petite too) running together makes for quite a charming sight.`,
        );
        await era.printAndWait([
          `For `,
          child,
          `'s independent growth, `,
          you.get_colored_name(),
          ` considered having `,
          digital.sex.toLowerCase(),
          ` stay in the academy dorms.`,
        ]);
        await era.printAndWait([
          `Yet `,
          digital.sex,
          ` remained quite attached to both parents, so you agreed to let `,
          digital.sex.toLowerCase(),
          ` commute from home for the time being.`,
        ]);
        await era.printAndWait([
          `Everything is peaceful and routine, except that `,
          child,
          ` inherited `,
          y_call_d,
          `'s habit of collapsing from bliss overload... Well, `,
          y_call_d,
          ` still does that all the time anyway.`,
        ]);
        await era.delay(1000);
        era.println();
        await digital.say_and_wait(`...`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-after': (() => {
    const title = 'Fleeting Dream, After All';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {string} callname How Agnes Digital addresses the player
     * @param {string} child How the player addresses the child
     */
    const f = async (digital, you, callname, child) => {
      await you.say_and_wait([
        `It's the weekend. Why don't we take a break from work and go check on `,
        child,
        `?`,
      ]);
      await you.say_and_wait([
        `Arriving at the student dorm entrance, just as you're about to call `,
        child,
        `...`,
      ]);
      await digital.say_and_wait([
        `Huh? `,
        callname,
        `, what are you doing here?`,
      ]);
      era.printButton(`What do you mean? I'm waiting for ${child}.`, 1);
      await era.input();
      await era.printAndWait([
        `Hearing those words, `,
        digital.get_colored_name(),
        ` lowers ${digital.sex === 'She' ? 'her' : 'his'} head for reasons unknown.`,
      ]);
      await digital.say_and_wait(
        [
          `...I-Is it time...? Do I... have to tell `,
          callname,
          ` the truth again...?`,
        ],
        true,
      );
      await digital.print_and_wait(`What should I do...?`);
      era.printButton('Tell the Truth (Deepen Relationship)', 1);
      era.printButton('Keep Silent (Keep Status Quo)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.say_and_wait(
          `I... I thought telling you again would only bring... more tears...`,
          true,
        );
        await digital.say_and_wait(
          [
            `Yet this feeling... being held and proposed to by `,
            callname,
            `... is pure heaven...`,
          ],
          true,
        );
      } else {
        await digital.say_and_wait([
          `Let's just leave it like this. Every day spent with `,
          callname,
          ` and `,
          child,
          ` is full of happiness.`,
        ]);
        await digital.say_and_wait(
          `I hope these peaceful days can continue forever... Please forgive me.`,
          true,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = 'The Letter';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you Player
     * @param {string} callname How Agnes Digital addresses the player
     * @param {PrintedSpan} y_call_d How the player addresses Agnes Digital
     * @param {string} child How the player addresses the child
     */
    const f = async (digital, you, callname, y_call_d, child) => {
      await you.say_as_unknown_and_wait(
        `Did you hear? Sensei Digital is releasing a brand-new doujinshi!`,
      );
      await you.say_as_unknown_and_wait(
        `Wait, really?! After all this time, a new release is finally dropping?!`,
      );
      await you.say_as_unknown_and_wait(
        `Yep, at next month's convention in Tokyo!`,
      );
      era.println();
      await era.printAndWait(`Seriously... who started this rumor?!`);
      await era.printAndWait([
        `Within days, the buzz blew up across social media. Now all of Sensei Digital's fans are convinced `,
        y_call_d,
        ` is publishing a new book next month.`,
      ]);
      await era.printAndWait([
        `Seeing all those posts online, `,
        y_call_d,
        `'s immediate reaction was... sheer guilt.`,
      ]);
      await digital.say_and_wait(
        `Come to think of it... it really has been ages since I published anything new... Ahhh, I am terribly, terribly sorry!`,
      );
      await era.printAndWait(
        `Bowing deeply to the computer screen, offering apologies to fans across the internet.`,
      );
      await era.printAndWait([
        `Then `,
        y_call_d,
        ` spins around, grabs `,
        you.get_colored_name(),
        `'s hands with teary eyes, looking ready to cry on the spot.`,
      ]);
      await era.printAndWait([
        `Here we go again, `,
        you.get_colored_name(),
        ` thinks.`,
      ]);
      await era.printAndWait([
        `This means `,
        digital.sex,
        ` is going into hardcore seclusion mode, leaving all household chores and cooking to `,
        you.get_colored_name(),
        `.`,
      ]);
      await era.printAndWait(
        `The work itself isn't difficult, but during crunch periods, you suffer a serious deficiency of...`,
      );
      await era.printAndWait([
        `Digital Energy! No huffing `,
        y_call_d,
        `, no stroking ${digital.sex === 'She' ? 'her' : 'his'} hair, no rubbing ${digital.sex === 'She' ? 'her' : 'his'} ears, no nibbling ${digital.sex === 'She' ? 'her' : 'his'} tail...`,
      ]);
      await digital.say_and_wait(`Please, I'm begging you!`);
      await you.say_and_wait(`It's not like I don't know how you operate.`);
      await era.printAndWait(
        `In the end, you agree as always. Has there ever been a time you said no?`,
      );
      era.drawLine();
      await era.printAndWait([
        `Midway through cleaning, your aching shoulders and back gently remind `,
        you.get_colored_name(),
        ` that you need more exercise.`,
      ]);
      await era.printAndWait(
        `Sweeping, mopping... you considered getting a robotic vacuum, but realized it couldn't dust the display cabinets anyway.`,
      );
      await era.printAndWait([
        `Indeed, the hardest areas to clean in `,
        you.get_colored_name(),
        `'s home are the display cases: rows upon rows of cabinets overflowing with merchandise.`,
      ]);
      await era.printAndWait(
        `Grabbing a feather duster, a light wipe-down will do the trick.`,
      );
      await era.printAndWait([
        `Suddenly, a framed white photograph catches `,
        you.get_colored_name(),
        `'s attention.`,
      ]);
      await era.printAndWait([
        `Warming `,
        you.get_colored_name(),
        `'s heart with deep tenderness, it is the wedding portrait of `,
        you.get_colored_name(),
        ` and `,
        y_call_d,
        `.`,
      ]);
      await era.printAndWait([
        `A pure white `,
        digital.sex_code === 1 ? 'suit' : 'bridal gown',
        ` adorning the pink `,
        digital.uma_sex_title,
        `, the iconic red bow still proudly perched on ${digital.sex === 'She' ? 'her' : 'his'} head, an elegant neckline, hands inviting gentle protection, and those tear-glistening grayish-blue eyes.`,
      ]);
      await era.printAndWait([
        `It feels like just yesterday `,
        y_call_d,
        ` stood there in that `,
        digital.sex_code === 1 ? 'suit' : 'bridal gown',
        `, yet years have already flown by.`,
      ]);
      await era.printAndWait([
        `Looking at this wedding portrait recharges `,
        you.get_colored_name(),
        ` with plenty of energy.`,
      ]);
      await era.printAndWait(
        `Maybe focusing on items steeped in precious memories is enough for today.`,
      );
      await era.printAndWait([
        `Opening the door to the collection room, several massive glass display cases stand packed with all manner of `,
        digital.uma_sex_title,
        ` goods.`,
      ]);
      await era.printAndWait([
        `This room originally served as a guest bedroom, but as `,
        y_call_d,
        `'s collection expanded beyond the living room cabinets, the entire room was converted into a dedicated archive.`,
      ]);
      await era.printAndWait([
        `Incidentally, the `,
        y_call_d,
        ` merchandise that `,
        you.get_colored_name(),
        ` collected sits in the innermost cabinet.`,
      ]);
      await era.printAndWait([
        `You couldn't win the argument against ${digital.sex === 'She' ? 'her' : 'him'} flailing and whining, 'Waaah! No, no, no! That's way too embarrassing!', so it was relegated here.`,
      ]);
      await era.printAndWait([
        `Standing before the cabinet displaying `,
        y_call_d,
        `, all the figurines and souvenirs remind `,
        you.get_colored_name(),
        ` of fond memories.`,
      ]);
      await era.printAndWait([
        `A figure of `,
        y_call_d,
        ` raising penlights with drool at the corner of ${digital.sex === 'She' ? 'her' : 'his'} mouth... surely no other `,
        digital.uma_sex_title,
        ` has merch quite like this.`,
      ]);
      await era.printAndWait([
        `Browsing all the way to the end of the cabinet, `,
        you.get_colored_name(),
        ` spots... a set of packed luggage.`,
      ]);
      await era.printAndWait(`This is...`);
      await era.printAndWait([
        `You remember now: it's `,
        child,
        `'s luggage. ${digital.sex === 'She' ? 'Her' : 'His'} belongings.`,
      ]);
      era.drawLine();
      await digital.print_and_wait(
        `Whew! Finally almost done! All that's left is... oh! Dinner time already!`,
      );
      await digital.print_and_wait(`I wonder what's for dinner tonight~`);
      await digital.print_and_wait(
        `Opening the door, the dining table is packed with an extravagant feast?!`,
      );
      await digital.print_and_wait(
        `Is today a special anniversary?! Did I completely lose track of time?!`,
      );
      await digital.print_and_wait(
        `Oh no, Digital, how could you forget... wait, huh?`,
      );
      await you.say_and_wait([
        y_call_d,
        `, looking at that face, did you think you forgot an anniversary?`,
      ]);
      await digital.say_and_wait(
        `Eeeek! It's my fault, I got so caught up drawing that I lost track! Digi-tan should ascend straight to heaven to atone...`,
      );
      await you.say_and_wait(
        `Whoa, hold on. I cooked all this because I found this memory-filled treasure, look.`,
      );
      await digital.print_and_wait([
        `Looking over, `,
        callname,
        ` holds up... an envelope?`,
      ]);
      await digital.say_and_wait(
        `Seeing a real handwritten letter nowadays is super rare! Is it a letter to the future, or some spooky ghost message...?`,
      );
      await you.say_and_wait(
        `Good guess, though maybe not quite what you think.`,
      );
      await digital.print_and_wait([
        `Taking the sealed letter from `,
        callname,
        `, the wax seal bears the emblem of Tracen merch I bought before. Looking at the sender...`,
      ]);
      await digital.print_and_wait([
        `OH MY GOSH! This is terrifying! It's actually a letter from `,
        child,
        `!`,
      ]);
      await digital.say_and_wait(
        `Did this letter get delivered from the other side?! Does it truly exist?!`,
      );
      await digital.say_and_wait(
        `If I open it, will it trigger a horror game curse with evil spirits possessing me?!`,
      );
      await you.say_and_wait(`Well, why don't we open it and find out?`);
      await digital.say_and_wait(
        `No no no, I feel like we need to exorcise it first! Let me grab the talisman from my Halloween outfit...`,
      );
      await digital.print_and_wait(
        `Holding the envelope, words keep tumbling out of my mouth in circles, yet my hands feel so weak I can barely hold a featherlight letter.`,
      );
      await you.say_and_wait(`...`);
      await digital.print_and_wait([
        `Looking at `,
        callname,
        `, `,
        you.sex.toLowerCase(),
        `... `,
        you.sex.toLowerCase(),
        ` must feel the same way.`,
      ]);
      await digital.print_and_wait([
        `I sit down beside `,
        callname,
        `, squeezing onto the same chair.`,
      ]);
      await digital.print_and_wait([
        you.sex,
        ` reaches around and holds me tight... I can feel the cold sweat on `,
        you.sex === 'She' ? 'her' : 'his',
        ` palm.`,
      ]);
      await digital.print_and_wait(`Let's open it.`);
      await digital.print_and_wait(
        `*Rustle*... the soft sound of paper sliding.`,
      );
      await digital.print_and_wait(
        `Breaking the seal, opening the envelope, drawing out the folded letter...`,
      );
      await digital.print_and_wait(`Unfold it.`);
      await digital.print_and_wait(
        `Unfolding the stationery, written inside is:`,
      );
      era.println();
      era.drawLine();
      await era.waitAnyKey();
      era.setOffset(8);
      era.setWidth(8);
      await era.printAndWait(`Dear Mom and Dad,`);
      await era.printAndWait(`Thank you for everything.`, {
        align: 'center',
        isParagraph: true,
      });
      await era.printAndWait([`From your `, child], { align: 'right' });
      era.drawLine();
      await era.waitAnyKey();
      era.setWidth(24);
      era.setOffset(0);
      era.println();
      await digital.say_and_wait(
        `Pfft, haha! Of course! Of course that's what it says!`,
      );
      await you.say_and_wait(`Naturally!`);
      await digital.say_and_wait(
        `Alright, alright! Let's eat, let's feast! Time to relax properly!`,
      );
      await digital.print_and_wait([
        `Piping hot delicacies, rising steam, the warmth of `,
        callname,
        `, and a tender bite of Salisbury steak fed right to my mouth.`,
      ]);
      await digital.print_and_wait([
        `Seeing `,
        callname,
        `'s smile as ${you.sex.toLowerCase()} feeds me, I savor every single bite.`,
      ]);
      await digital.print_and_wait([
        `Patting `,
        callname,
        `'s thigh... hmm, household chores have kept you in great shape...`,
      ]);
      await you.say_and_wait([
        y_call_d,
        `? Right now? Right here? Aren't you going to finish dinner first?`,
      ]);
      await digital.say_and_wait(
        `Eating now or eating later leads to the exact same outcome, right? It's all feasting either way! Ehehehe... *slurp*`,
      );
      await digital.print_and_wait(
        `Whoa, I definitely just made a super questionable sound.`,
      );
      await digital.say_and_wait(
        `Ooooh yes, right this instant! It's been a whole week! I've been holding back for an entire week! Do you have any idea what I went through?!`,
      );
      await digital.say_and_wait(
        `Digi-tan spent a whole week grinding out doujinshi! By all sacred traditions, aren't you supposed to celebrate after finishing a manuscript?!`,
      );
      await you.say_and_wait([
        `Wait, that's entirely your own fault! And `,
        y_call_d,
        `, did you actually finish?`,
      ]);
      await digital.say_and_wait(
        `...J-Just a tiny bit left, but seriously almost done! And does that even matter right now? Shouldn't I be the top priority?!`,
      );
      await you.say_and_wait(
        `Hey, you neglected me for a whole week too! And now you want to dig in?! I'm still the one who has to clean up afterward!`,
      );
      await digital.print_and_wait(
        `I... I do feel a little guilty... but still!`,
      );
      await digital.say_and_wait(
        `I am terribly sorry! Thank you in advance for cleaning up later!`,
      );
    };
    f.title = title;
    return f;
  })(),
};
