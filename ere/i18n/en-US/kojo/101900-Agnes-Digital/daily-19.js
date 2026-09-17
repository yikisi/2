/**
 * @file Agnes Digital - Daily
 * @author 片手虾好评发售中！
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   */
  good_morning(digital, callname) {
    if (Math.random() < 0.5) {
      digital.say([
        'Ta-da! ',
        digital.name,
        ` has arrived! Off to seek out the most divine, blessed ${digital.uma_sex_title} energy in the whole universe!`,
      ]);
    } else {
      digital.say([
        'Ufufu, ',
        callname,
        `! Let's power up our oshi activities today too!`,
      ]);
    }
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   * @param {PrintedSpan} call_13 Agnes Digital's address for Mejiro McQueen
   */
  select(digital, callname, call_13) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say([
          `That's right! No matter what happens, stan them with everything you've got, `,
          callname,
          `!`,
        ]),
      () => digital.say(`Ufufu, so utterly blessed... I'm ascending...`),
      () => digital.say(`Turf! Dirt! Both are my sacred battlegrounds!`),
    );
    if (era.get('relation:19:0') > 375) {
      buffer.push(() =>
        digital.say([
          callname,
          `! Being able to stan uma-chans right alongside you is the absolute best!`,
        ]),
      );
    }
    switch (era.get('mark:19:欢愉')) {
      case 1:
        buffer.push(() =>
          digital.say(
            `Ahahaha... Huh? Why are my legs shaking? No problem, no problem! Digi-tan here is totally, 100% normal!`,
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            `Guhehehe... Still asking why? `,
            callname,
            `, you oughta know best... *slurp*...`,
          ]),
        );
    }
    switch (era.get('mark:19:同心')) {
      case 1:
        buffer.push(() =>
          digital.say([
            `Two hearts as one... That blissful future `,
            call_13,
            ` described... I think I'm finally seeing the light...`,
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say(
            `To the Mejiro estate?! Are we going? We're going, right?!`,
          ),
        );
    }
    switch (era.get('mark:19:苦痛')) {
      case 1:
        buffer.push(() =>
          digital.say([
            `Ah, um, oh... `,
            callname,
            `... Did you need something today?`,
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say(`Uuu... Eep! N-No no no, nothing at all, I'm fine!`),
        );
    }
    switch (era.get('mark:19:羞耻')) {
      case 1:
        buffer.push(() =>
          digital.say(
            `Um, you know... even for Digi-tan, this is actually pretty embarrassing...`,
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say(`Hyeeek?! Isn't this getting way too scandalous?!`),
        );
    }
    switch (era.get('mark:19:反抗')) {
      case 1:
        buffer.push(() =>
          digital.say([
            `Hm? Oh, `,
            callname,
            `... Um, did you want something?`,
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            `Uh, `,
            callname,
            `... Why do you feel less and less like a fellow comrade lately?`,
          ]),
        );
    }
    switch (era.get('mark:19:淫纹')) {
      case 1:
        buffer.push(() =>
          digital.say(
            `Seeing something so familiar yet so indecent show up on my own body... I can use this as doujin material... right?`,
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say(
            `Is it cool, or... Wait, does this thing actually level up and evolve?!`,
          ),
        );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital Agnes Digital */
  async office_study(digital) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say_and_wait(
          `Huh? Why do I know so much about uma-chans? That's baseline otaku knowledge! Standard fan curriculum!`,
        ),
      () =>
        digital.say_and_wait(
          `Honestly, I worked super hard in all sorts of areas just to get accepted into Tracen Academy. So... academics aren't really a problem for me. Ehe, not to toot my own horn or anything!`,
        ),
      () =>
        digital.say_and_wait(
          `I was just thinking, don't some uma-chans get dragged off to supplementary classes because of bad test scores? What can I do to help ${digital.couple_title}...`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital Agnes Digital */
  async talk(digital) {
    if (era.get('base:19:体力') < era.get('maxbase:19:体力') / 3) {
      if (Math.random() < 0.5) {
        await digital.say_and_wait(
          `Haaah... completely burned to white ash... No energy left... to stan...`,
        );
      } else {
        await digital.say_and_wait(
          `Showing up in a pathetic state like this... It's an insult to the uma-chans I stan...`,
        );
      }
    } else {
      const buffer = [];

      switch (era.get('cflag:19:干劲')) {
        case -2:
          buffer.push(
            () =>
              digital.say_and_wait(
                `Uwooooh, critical moe deficiency! I need an emergency recharge right now...`,
              ),
            () =>
              digital.say_and_wait(
                `I cannot, under any circumstances, let my oshis see me looking like this...`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              digital.say_and_wait(
                `Aah... I just can't get into gear. Is my moe tank running on empty?`,
              ),
            () =>
              digital.say_and_wait(
                `Whoops, I was daydreaming about ${digital.uma_sex_title}s again...`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              digital.say_and_wait(
                `*inhale*... *exhale*... More, give me more moe power!`,
              ),
            () =>
              digital.say_and_wait(
                `Still not enough, nowhere near enough! I need to huff way more ${digital.uma_sex_title} moe energy!`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              digital.say_and_wait(
                `Feeling in prime condition! Let's go soak up that ${digital.uma_sex_title} moe energy and stack up some blessed karma!`,
              ),
            () =>
              digital.say_and_wait(
                `Love! It's pure, unadulterated love for uma-chans that grants me this infinite power!`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              digital.say_and_wait(
                `Waaaaah! uma-chans here, uma-chans there, uma-chans everywhere! I am invincible! I can do anything!`,
              ),
            () =>
              digital.say_and_wait(
                `Hyah! My moe power has pierced the heavens!`,
              ),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   */
  async office_gift(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait([
        `Picking out a god-tier gift like this, as expected of `,
        callname,
        `!`,
      ]);
    } else {
      const items = [
        `Dober-sensei's autographed doujinshi`,
        `Curren-chan photo book`,
        `Falco handshake event ticket`,
        `Machan plushie`,
        `Mejiro family replica teacup`,
        `Tachyon & Cafe image mug`,
        `${digital.uma_sex_title} running shoe model`,
        `${digital.uma_sex_title} limited collab merch`,
        `${digital.uma_sex_title} ear covers and tights autographed fanbook`,
      ];
      const gift = get_random_entry(items);
      await digital.say_and_wait([
        `Whoa, it's `,
        gift,
        `! I'll be sure to absorb every single drop of ${digital.uma_sex_title} moe power from it!`,
      ]);
    }
  },
  /** @param {CharaTalk} digital Agnes Digital */
  async office_cook(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `Infusing every bite with love for your trainee ${digital.uma_sex_title}... Who would've thought Trainer had such a sacred creed? I must take notes!`,
        ),
      () =>
        digital.say_and_wait(
          `Since I'm always out camping and having picnics with my parents, don't let looks deceive you, I'm actually pretty handy in the kitchen!`,
        ),
      () =>
        digital.say_and_wait(
          `Tender feelings too sweet and shy to put into words, all poured into a handmade bento to pass along?! Hnnngh, that's way too blessed!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital Agnes Digital */
  async office_rest(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `Fwaah... Listening to healing ASMR from a cute uma-chan... My entire being is melting away...`,
        ),
      () =>
        digital.say_and_wait(
          `Chatting freely about ${digital.uma_sex_title}s with you like this is pure bliss.`,
        ),
    ];
    if (era.get(`relation:${digital.id}:0`) > 375) {
      buffer.push(() =>
        digital.say_and_wait(
          `A lap pillow?! No no no, my scrawny thighs would be awful to rest on... Plus, it's just way too embarrassing...`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   */
  async office_game(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait(
        `Wanna play some "Umamusume Super Smash All-Stars"? I'll just pick random, since Digi-tan loves literally everyone!`,
      );
    } else {
      await digital.say_and_wait([
        `Ehehe! `,
        callname,
        `, I'll have you know I'm pretty cracked at this game!`,
      ]);
    }
  },
  /** @param {CharaTalk} digital Agnes Digital */
  async s_a_tree_hollow(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `You get all these ${digital.uma_sex_title}s pouring their hearts out to you about the cruelty of races, brutal workouts, and romantic drama... Why am I getting jealous of a literal tree hollow?!`,
        ),
      () =>
        digital.say_and_wait(
          `Ugh, why do races have to have winners and losers... If only every single uma-chan could win, that would be paradise...`,
        ),
      () =>
        digital.say_and_wait(
          `My resolve still isn't there yet. Not just as a competitor, but my conviction as an ${digital.uma_sex_title}...`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   */
  async s_a_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `...Is it just my imagination, or are a bunch of uma-chans staring at us? I wanna curl up and hide under a rock...`,
        ),
      () =>
        digital.say_and_wait(
          `This giant ribbon? I feel like I've been wearing it ever since I was a kid... Huh? You're saying it draws too much attention? Hyeeeh, that really is a tactical hazard!`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          `... Don't you find me super high-maintenance? Dragging you all over the place for my fan activities... Huh? Not at all?`,
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   */
  async s_r_lunch(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          `Huh?! `,
          callname,
          `, you were a closet master this whole time?! The visual fidelity of this character bento has even me bowing in awe!`,
        ]),
      () =>
        digital.say_and_wait(
          `Ngh, such an adorable uma-chan... How could I ever bring myself to take a bite?!`,
        ),
      () =>
        digital.say_and_wait([
          `Behold! `,
          callname,
          `, this design is my ultimate magnum opus! Maybe I should file a patent for it, ehehe!`,
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   * @param {PrintedSpan} call_20 Agnes Digital's address for Seiun Sky
   */
  async o_r_fishing(digital, callname, call_20) {
    const buffer = [
      () =>
        digital.say_and_wait([
          `Uwah, it's... it's `,
          call_20,
          `! Maybe an unworthy fan like me shouldn't trespass over there...`,
        ]),
      () =>
        digital.say_and_wait([
          `Ooooh, hooked one, reeled it in! If we were camping right now, we could grill it up on skewers, `,
          callname,
          `!`,
        ]),
      () =>
        digital.say_and_wait(
          `Don't sweat it! The flow of battle has its ups and downs, heroic warrior, please try again... Coming up empty-handed is just the RNG of gacha life!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   * @param {PrintedSpan} call_8 Agnes Digital's address for Vodka
   * @param {PrintedSpan} call_9 Agnes Digital's address for Daiwa Scarlet
   * @param {PrintedSpan} call_46 Agnes Digital's address for Smart Falcon
   * @param {PrintedSpan} call_58 Agnes Digital's address for Meisho Doto
   */
  async o_r_walking(digital, callname, call_8, call_9, call_46, call_58) {
    const buffer = [
      () =>
        digital.say_and_wait([
          call_46,
          `! It's `,
          call_46,
          `-sama! I must report to the holy grounds immediately!`,
        ]),
      () =>
        digital.say_and_wait([
          `Spotted `,
          call_9,
          ` and `,
          call_8,
          `! Just what could `,
          digital.couple_title,
          ` be doing together over there~?!`,
        ]),
      () =>
        digital.say_and_wait([
          `Wah! `,
          call_58,
          ` took a tumble! Gotta go help... Oh, she's back up on her feet! Uwooo, such diligence, so precious...`,
        ]),
      async () => {
        await era.printAndWait([
          `A walk along the riverbank is nothing short of a holy pilgrimage for `,
          digital.get_colored_name(),
          `.`,
        ]);
        await era.printAndWait(
          `At every turn, racing ${digital.uma_sex_title}s grace the scenery.`,
        );
        await era.printAndWait(
          `From an aspiring little ${digital.uma_sex_title} idol practicing her vocals, to a hardworking runner adapting to the dirt...`,
        );
        await era.printAndWait(
          `Fortunately, this time ${digital.sex.toLowerCase()} didn't ascend to heaven from pure reverence.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} call_46 Agnes Digital's address for Smart Falcon
   */
  async o_s_arcade(digital, call_46) {
    const buffer = [
      () =>
        digital.say_and_wait([
          `Uwoooooh, `,
          call_46,
          `'s new track is live on the rhythm game! Thank goodness I brought my arcade gloves!`,
        ]),
      () =>
        digital.say_and_wait(
          `Got it, got it! That limited-edition racing silk plushie is secured!`,
        ),
      () =>
        digital.say_and_wait(
          `Saved up enough prize tickets! I can exchange them for that limited-edition scale figure!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} call_32 Agnes Digital's address for Agnes Tachyon
   */
  async o_s_drawing(digital, call_32) {
    const buffer = [
      () =>
        digital.say_and_wait([
          `Won a carrot! Let's bring it back to `,
          call_32,
          `. I really hope ${digital.sex.toLowerCase()} starts eating proper meals, otherwise ${digital.sex === 'She' ? 'her' : 'his'} health is gonna crash! That won't do at all!`,
        ]),
      () =>
        digital.say_and_wait(
          `Kukuku, fuhaha, pulled it! The grand jackpot is mine!`,
        ),
      () =>
        digital.say_and_wait(
          `Pocket tissues... Yeah, single pulls really don't bring home the SSRs.`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   */
  async o_s_ktv(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `Today, the Goddess of Victory smiles upon me alone...`,
        ),
      () =>
        digital.say_and_wait(
          `The Winning Live isn't just the victor's reward, it's a divine blessing bestowed upon all of us fans!`,
        ),
      () =>
        digital.say_and_wait([
          `U-ha, e-ha! Ooo—hai—! `,
          callname,
          `! Your penlight swings are off-beat!`,
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital Agnes Digital */
  async o_s_movie(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `So blessed! The director is a true cultured visionary! Capturing every ounce of ${digital.uma_sex_title} greatness in glorious detail!`,
        ),
      () =>
        digital.say_and_wait(
          `Uwoooooh, I'm bawling! That raw heartbreak, that relentless fighting spirit, it's just like watching real uma-chans on the track!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  o_c_pray: (() => {
    const title = 'Gathering Karma... Or Just Good Fortune?';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} you The player
     * @param {PrintedSpan} callname Agnes Digital's address for the player
     * @param {PrintedSpan} call_98 Agnes Digital's address for Copano Rickey
     */
    const f = async (digital, you, callname, call_98) => {
      await era.printAndWait([
        `Clapping twice in front of the shrine, both `,
        you.get_colored_name(),
        ` and `,
        digital.get_colored_name(),
        ` clasp their hands in prayer.`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` naturally prays for the health of ${digital.sex === 'She' ? 'her' : 'his'} trainee ${digital.uma_sex_title}, but what could `,
        digital.get_colored_name(),
        ` be wishing for?`,
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` glances over at `,
        digital.get_colored_name(),
        `. ${digital.sex} still has ${digital.sex === 'She' ? 'her' : 'his'} eyes shut tight, small hands rubbing together, horse ears perked upright, lips murmuring rapid chants. Is this normal devotion or something else entirely?`,
      ]);
      await era.printAndWait([
        `After a moment, ${digital.sex.toLowerCase()} turns around and says with utter solemnity:`,
      ]);
      await digital.say_and_wait([
        `To ensure the gods protect all ${digital.uma_sex_title}s, I must pray with the utmost sincerity!`,
      ]);
      await digital.say_and_wait(
        `Even if it's intangible, doing this helps me reflect on myself rationally. Plus, it builds up good karma!`,
      );
      await era.printAndWait([
        `Surprised as ${you.get_colored_name()} is, ${digital.sex === 'She' ? 'her' : 'his'} reasoning makes surprising sense. Clearing away all distractions, `,
        you.get_colored_name(),
        ` decides to offer another prayer.`,
      ]);
      if (Math.random() < 0.5) {
        await era.printAndWait([
          `Gradually, `,
          you.get_colored_name(),
          ` feels three cool streams of clarity flowing through the mind. Opening their eyes in surprise, `,
          you.get_colored_name(),
          ` notices a gentle breeze rustling the leaves and sweeping across the shrine, bringing deep peace to their heart.`,
        ]);
        await digital.say_and_wait([
          `Since this super-effective shrine was recommended by `,
          call_98,
          `, I was almost too nervous to speak earlier~`,
        ]);
        await era.printAndWait(`Is this blessing really real?`);
        await era.printAndWait([
          you.get_colored_name(),
          ` notices that `,
          digital.get_colored_name(),
          ` beside them is just as immersed in the serene atmosphere.`,
        ]);
        await digital.say_and_wait(
          `This must be the grace of the Three Goddesses!`,
        );
        await era.printAndWait([
          `Though `,
          you.get_colored_name(),
          ` wants to question why a traditional shrine would channel the Three Goddesses, the genuine sense of peace makes it easy to overlook.`,
        ]);
      } else {
        await era.printAndWait([
          `Focusing hard between the eyebrows while trying to force a sincere prayer turns out to be counterproductive. It seems `,
          you.get_colored_name(),
          ` still isn't great at clearing away stray thoughts.`,
        ]);
        await digital.say_and_wait(
          `No worries! It took me quite a while of practice to reach this level. Comrade, you just need a bit more training!`,
        );
        await era.printAndWait([
          you.get_colored_name(),
          ` can't help wondering what practical purpose this skill serves. Does it help sharpen focus during races?`,
        ]);
        await era.printAndWait([
          `Still, `,
          you.get_colored_name(),
          ` realizes that practicing mindfulness could come in handy. It'll just have to wait for next time.`,
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} digital Agnes Digital */
  async o_s_restaurant(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `Do I love carrots because all ${digital.uma_sex_title}s love them, or because I'm an ${digital.uma_sex_title} myself...`,
        ),
      () =>
        digital.say_and_wait(
          `Parfait♪ Parfait♪ Melon parfait♪ Honey♪ Honey♪ Extra thick honey♪ And strawberry daifuku too♪ Eating like my oshis brings good luck!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} callname Agnes Digital's address for the player
   */
  async o_s_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          `Ahahaha, `,
          callname,
          `, whenever we hang out together, I end up completely unable to choose where to go...`,
        ]),
      () =>
        digital.say_and_wait(
          `Huh? Me pick the spot? I feel like I'll just end up picking somewhere ${digital.uma_sex_title}-related again...`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          `! Let's go do another sacred site pilgrimage over there!`,
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital Agnes Digital
   * @param {PrintedSpan} call_25 Agnes Digital's address for Manhattan Cafe
   * @param {PrintedSpan} call_33 Agnes Digital's address for Admire Vega
   */
  async o_s_shopping(digital, call_25, call_33) {
    const buffer = [
      () =>
        digital.say_and_wait([
          `Mmgghh! That coffee mug matched with `,
          call_25,
          `, or the Mejiro black tea cup... How am I supposed to choose?! Both! Obviously both!`,
        ]),
      () =>
        digital.say_and_wait([
          `The clothes dryer endorsed by `,
          call_33,
          `? That's... a bit much... No, I have to buy it!`,
        ]),
      () =>
        digital.say_and_wait(
          `Huh? Why buy three sets of merch? One for practical use, one for preservation, and one for proselytizing, of course!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  big_fish: (() => {
    const title = 'Reeled in a Big Fish, but It Looks Unfriendly';
    /**
     * @param {CharaTalk} digital Agnes Digital
     * @param {CharaTalk} spe Special Week
     * @param {CharaTalk} sky Seiun Sky
     * @param {CharaTalk} you The player
     * @param {PrintedSpan} callname Agnes Digital's address for the player
     * @param {PrintedSpan} call_20 Agnes Digital's address for Seiun Sky
     * @param {PrintedSpan} callname_20 Seiun Sky's address for the player
     * @param {PrintedSpan} s_call_s Seiun Sky's address for Special Week
     * @param {PrintedSpan} s_call_d Seiun Sky's address for Agnes Digital
     */
    const f = async (
      digital,
      spe,
      sky,
      you,
      callname,
      call_20,
      callname_20,
      s_call_s,
      s_call_d,
    ) => {
      const ret = [];
      await era.printAndWait(
        `Heading to the riverbank for fishing is a popular leisure activity for many ${digital.uma_sex_title}s.`,
      );
      await era.printAndWait([
        `However, `,
        you.get_colored_name(),
        `'s trainee ${digital.uma_sex_title}, `,
        digital.get_colored_name(),
        `, is a bit different. Rather than fishing ${digital.sex === 'She' ? 'herself' : 'himself'}, ${digital.sex.toLowerCase()} prefers watching others fish...`,
      ]);
      await era.printAndWait(
        `Or more accurately, ${digital.sex.toLowerCase()} just loves watching ${digital.uma_sex_title}s.`,
      );
      await era.printAndWait(
        `So getting ${digital.sex === 'She' ? 'her' : 'him'} to actually sit on a stool with a fishing rod, waiting quietly for a bite, is quite a rare sight.`,
      );
      await digital.say_and_wait(
        `I see... So this is what fishing feels like. How can something that's supposed to be relaxing drain so much energy...`,
      );
      await digital.say_and_wait(
        `What do other ${digital.uma_sex_title}s think about when they fish...`,
      );
      await you.say_and_wait(
        `${digital.couple_title} probably just enjoy the act of fishing itself. Why not take a look around?`,
      );
      await digital.say_and_wait(`Huh?`);
      await era.printAndWait([
        digital.get_colored_name(),
        ` glances across the way. On the opposite bank, another ${digital.uma_sex_title} happens to be fishing.`,
      ]);
      await era.printAndWait(
        `Though calling it fishing is generous, it looks more like sleeping.`,
      );
      await digital.say_and_wait(
        `Indeed, I can feel it. ${digital.sex} is in a state of absolute relaxation.`,
      );
      await digital.say_and_wait(
        `Whoa... An ${digital.uma_sex_title} fishing, resting in total tranquility... Even if a fish bites, nothing could disturb ${digital.sex === 'She' ? 'her' : 'him'} in the slightest...`,
      );
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([
          `Well, well, well. Look at `,
          callname_20,
          ` taking leisure time to fish with `,
          s_call_d,
          ` today. Yo-ho-ho, and not with me... *sob*`,
        ]);
        await era.printAndWait([
          `A familiar voice comes from behind. It's `,
          sky.get_colored_name(),
          `.`,
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ` rubs ${digital.sex === 'She' ? 'her' : 'his'} eyes with small hands, putting on a pitiful expression.`,
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ` has to admit `,
          sky.get_colored_name(),
          ` is an exceptional actor. Without knowing all about ${digital.sex === 'She' ? 'her' : 'his'} crafty tricks beforehand, `,
          you.get_colored_name(),
          ` might have actually fallen for it.`,
        ]);
        await digital.say_and_wait(
          `Waah! I didn't mean to! I-I'll get out of your way right now!`,
        );
        await era.printAndWait([
          digital.get_colored_name(),
          ` scrambles in complete panic, waving hands and trying to stand up.`,
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ` calmly steps over beside `,
          sky.get_colored_name(),
          ` and delivers a firm pinch to `,
          sky.get_colored_name(),
          `'s back. Surprisingly soft.`,
        ]);
        await sky.say_and_wait(`Ouch! I was just kidding, just teasing~`);
      } else {
        await sky.say_and_wait([
          `Well, well, if it isn't `,
          s_call_d,
          `. Not standing on the bank watching other ${digital.uma_sex_title}s fish today?`,
        ]);
        await sky.say_and_wait([
          `And... `,
          s_call_d,
          `'s trainer, `,
          you.adult_sex_title,
          `, quite the famous one~`,
        ]);
        await era.printAndWait([
          `A lazy voice calls out from behind. The voice sounds rather familiar to `,
          you.get_colored_name(),
          `.`,
        ]);
        await digital.say_and_wait([call_20, `?!`]);
        await era.printAndWait([
          `Startled, `,
          digital.get_colored_name(),
          ` drops the fishing rod, sending up a splash of water that sprays all over ${digital.sex === 'She' ? 'her' : 'him'}.`,
        ]);
        await sky.say_and_wait(
          `Oh? Dropping the fishing rod like that? Sky-chan might just get mad, you know!`,
        );
        await digital.say_and_wait([
          `No no no, it's my fault, totally my fault! I shouldn't have come here to fish alongside an ${digital.uma_sex_title}-sama...`,
        ]);
      }
      await sky.say_and_wait([
        `Now then, `,
        s_call_d,
        `, care for a personal lesson from me? Ehe!`,
      ]);
      await digital.say_and_wait(`Eek!`);
      await era.printAndWait([
        `Within seconds, `,
        sky.get_colored_name(),
        ` swiftly snatches `,
        digital.get_colored_name(),
        ` as ${digital.sex.toLowerCase()} tries to flee. `,
        digital.get_colored_name(),
        ` freezes stiff as a statue.`,
      ]);
      await sky.say_and_wait(`Ghehe!`);
      await era.printAndWait([
        `With a sly grin, `,
        sky.get_colored_name(),
        ` takes hold of `,
        digital.get_colored_name(),
        `'s even smaller left hand with ${digital.sex === 'She' ? 'her' : 'his'} own petite hands.`,
      ]);
      await digital.say_and_wait(`Ah-ba-ba-ba...`);
      await sky.say_and_wait(`Come on, take a seat on the stool right here~`);
      await era.printAndWait([
        `Yanking `,
        digital.get_colored_name(),
        ` over to the stool, ${digital.sex.toLowerCase()} rests a hand on `,
        digital.get_colored_name(),
        `'s shoulder...`,
      ]);
      await era.printAndWait([
        `Then `,
        digital.get_colored_name(),
        ` slumps onto the stool like a limp blanket, completely melting into the seat.`,
      ]);
      await sky.say_and_wait(
        `Here, grip the rod and cast the float over that way...`,
      );
      await digital.say_and_wait(`Ah-ba-ba-ba...`);
      await era.printAndWait([
        `It seems `,
        digital.get_colored_name(),
        `'s soul has long turned to ash and drifted away in the wind.`,
      ]);
      era.drawLine({ content: 'Some time later' });
      await digital.say_and_wait(`...?!`);
      await digital.say_and_wait(
        `Uuu... I can't... I really can't take any more...`,
      );
      await era.printAndWait([
        `Lying drained on the muddy ground, `,
        digital.get_colored_name(),
        ` looks completely done for today.`,
      ]);
      await sky.say_and_wait(`Aha, what an entertaining one.`);
      await era.printAndWait([
        `In stark contrast to `,
        digital.get_colored_name(),
        `, `,
        sky.get_colored_name(),
        ` looks completely energized. One might wonder if this was some new technique to drain vital energy.`,
      ]);
      era.println();
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([callname_20, `! Yo!`]);
        await era.printAndWait([
          sky.get_colored_name(),
          ` turns toward `,
          you.get_colored_name(),
          `, wiping away the grin and simply gazing over.`,
        ]);
        await sky.say_and_wait([
          `How does it feel? Seems like both you and ${digital.sex.toLowerCase()} were about ready to leave me behind~`,
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ` is just fishing for a reaction, isn't ${digital.sex.toLowerCase()}?`,
        ]);
        await sky.say_and_wait([
          `Oh my, is `,
          callname_20,
          ` getting jealous? If anyone should be jealous, it's me, right?`,
        ]);
        era.printButton('Compromise (Seiun Sky Favor +40)', 1);
        era.printButton('Get down to business (Agnes Digital Favor +40)', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait(
            `All right, all right. Next time I'll come fishing with you.`,
          );
          await era.printAndWait(
            `Just playing along to smooth things over for now.`,
          );
          await sky.say_and_wait(
            `Ehe, then upgrade my gear while you're at it~ A trainer's salary must be pretty sweet, right?`,
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ` puts a hand to ${digital.sex === 'She' ? 'her' : 'his'} head and pokes out a pink tongue, looking just like a certain meme.`,
          ]);
          await era.printAndWait(
            `Stretching a bit, checking the balance of UmaCoins on the phone mentally... Upgrading some gear should be doable, right?`,
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ` doesn't hesitate, pulling up a stool right next to `,
            you.get_colored_name(),
            ` and leaning against their shoulder.`,
          ]);
          await era.printAndWait(
            `Glancing aside, greenish locks are slightly damp with sweat, with tiny droplets glistening on a smooth neck.`,
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ` scrolls through the phone. Watching items glide under `,
            sky.get_colored_name(),
            `'s fingertips, `,
            you.get_colored_name(),
            ` catches a glimpse of the price tags and immediately senses impending doom.`,
          ]);
          await you.say_and_wait(`Wait, hold on, stop, timeout.`);
          await sky.say_and_wait(`Eh? But you're the one who promised~`);
          await era.printAndWait(
            `Looking at the prices, those aren't just high-end products, they're top-of-the-line flagship gear.`,
          );
          await era.printAndWait(
            `Even with a trainer's decent paycheck, this isn't something to buy on a whim.`,
          );
          await sky.say_and_wait(
            `All right, all right! Fun and games are over, time to wrap up the small talk!`,
          );
          await era.printAndWait([
            `Putting the phone away, `,
            sky.get_colored_name(),
            ` seems ready to get down to business.`,
          ]);
          await sky.say_and_wait([
            `Let's find a reason for `,
            s_call_d,
            ` to run! Let's goooo!`,
          ]);
          await era.printAndWait([
            `It sounded serious in concept, but coming from `,
            sky.get_colored_name(),
            `, the cheer lacks even an ounce of real intensity...`,
          ]);
          await era.printAndWait([
            `Glancing at `,
            digital.get_colored_name(),
            `, ${digital.sex.toLowerCase()} still hasn't had ${digital.sex === 'She' ? 'her' : 'his'} soul return to ${digital.sex === 'She' ? 'her' : 'his'} body.`,
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ` used lighthearted jokes to hint at what `,
            you.get_colored_name(),
            ` urgently needs to figure out... Maybe the fishing rod too.`,
          ]);
          await era.printAndWait([
            `Next time, buying a gift for ${digital.sex === 'She' ? 'her' : 'him'} would be better. Best skip the fishing rod...`,
          ]);
        } else {
          await you.say_and_wait(`Let's talk business. I know how you work.`);
          await era.printAndWait([
            `After all, `,
            sky.get_colored_name(),
            ` always has ${digital.sex === 'She' ? 'her' : 'his'} own plans.`,
          ]);
          await era.printAndWait([
            `Turning around, `,
            sky.get_colored_name(),
            ` faces the setting sun, back turned to you.`,
          ]);
          await sky.say_and_wait([`Still remember `, s_call_s, `?`]);
          await you.say_and_wait(`Of course. How could I forget?`);
          await era.printAndWait(
            `That time, right? Losing track of what to do, what goals to pursue, and how to keep going.`,
          );
          await sky.say_and_wait([
            s_call_s,
            ` found a sanctuary that belonged to ${digital.sex === 'She' ? 'her' : 'him'}.`,
          ]);
          await era.printAndWait([
            `That story became quite a well-known cautionary tale. Fortunately, `,
            spe.get_colored_name(),
            ` never took it to heart.`,
          ]);
          await era.printAndWait(
            `Admiration alone cannot serve as a goal to keep moving forward forever.`,
          );
          await era.printAndWait([
            digital.get_colored_name(),
            ` will soon discover that ${digital.sex.toLowerCase()} is stronger than others, and ${digital.sex.toLowerCase()} will end up shattering the dreams of the very ones ${digital.sex.toLowerCase()} admired.`,
          ]);
          await you.say_and_wait([
            `I'll lead ${digital.sex === 'She' ? 'her' : 'him'} to find a pantheon meant for ${digital.sex === 'She' ? 'her' : 'him'} alone.`,
          ]);
          await sky.say_and_wait(`That's my trainer!`);
          await you.say_and_wait(`Yeah.`);
        }
      } else {
        await sky.say_and_wait([s_call_d, `'s trainer—`]);
        await era.printAndWait([
          sky.get_colored_name(),
          ` turns toward `,
          you.get_colored_name(),
          `.`,
        ]);
        await era.printAndWait([
          `Crafty and scheming, that is the reputation given by the world, or at least by classmates.`,
        ]);
        await era.printAndWait([
          `Though `,
          you.get_colored_name(),
          ` doesn't know `,
          sky.get_colored_name(),
          ` intimately, `,
          you.get_colored_name(),
          ` has heard the rumors... Doing whatever it takes to win a race?`,
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ` shouldn't have any racing conflict with `,
          digital.get_colored_name(),
          `. So what is ${digital.sex.toLowerCase()} doing here?`,
        ]);
        era.printButton('Chat for a bit (Favor +40)', 1);
        era.printButton(
          'Take Digital away as soon as possible (Affection +5)',
          2,
        );
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait(`Seiun Sky... I know who you are.`);
          await sky.say_and_wait(
            `Nyahaha, looks like my reputation precedes me~`,
          );
          await era.printAndWait([
            `Resting hands behind the head, `,
            sky.get_colored_name(),
            ` seems quite proud of that fame.`,
          ]);
          await you.say_and_wait(
            `Have a seat and let's talk. You must have some thoughts regarding Digital.`,
          );
          await sky.say_and_wait(
            `Oh my, oh my, I'm not into girls like that. I'm strictly into straight romance, you know~`,
          );
          await era.printAndWait(`Deflecting the topic, usual tactics.`);
          await you.say_and_wait(`...`);
          await sky.say_and_wait(
            `Really want to hear what I think? Sky-chan's motives might actually be surprisingly pure.`,
          );
          await era.printAndWait([
            `Glancing over at `,
            digital.get_colored_name(),
            ` nearby, ${digital.sex.toLowerCase()} is still lying blissfully on the bank in a state of reverent euphoria.`,
          ]);
          await you.say_and_wait([
            `Digital is still too innocent. ${digital.sex} hasn't yet experienced the ruthless cutthroat atmosphere on the track.`,
          ]);
          await sky.say_and_wait([
            `Exactly. Just like `,
            s_call_s,
            ` was for a while, `,
            s_call_d,
            ` lacks a reason to step onto the battlefield.`,
          ]);
          await era.printAndWait([
            `A reason for the battlefield... the racetrack. `,
            digital.get_colored_name(),
            ` always said it was for ${digital.uma_sex_title}s, simply wanting to watch them run up close. At least for now.`,
          ]);
          await you.say_and_wait([
            `${digital.sex} will find one. I'll search for that reason together with ${digital.sex === 'She' ? 'her' : 'him'}.`,
          ]);
          await era.printAndWait([
            `Before `,
            you.get_colored_name(),
            ` finished speaking, `,
            sky.get_colored_name(),
            ` had been staring intently at `,
            you.get_colored_name(),
            `. Upon hearing those words, ${digital.sex.toLowerCase()} smiles.`,
          ]);
          await sky.say_and_wait(`Ahaha, now that's an interesting answer!`);
          await era.printAndWait([
            `Perhaps `,
            you.get_colored_name(),
            `'s response satisfied ${digital.sex === 'She' ? 'her' : 'him'}, or perhaps ${digital.sex.toLowerCase()} felt there was no need to say more.`,
          ]);
          await sky.say_and_wait(
            `Guess I won't disturb you two then. Sky-chan still has fish to catch.`,
          );
          await era.printAndWait([
            `The sun, having poured out all its warmth, has shifted from blinding white to crimson red, leaving `,
            you.get_colored_name(),
            ` and `,
            digital.get_colored_name(),
            ` along the muddy riverbank.`,
          ]);
          await era.printAndWait(`Time to take Digital back...`);
          await you.say_and_wait(
            `How should I carry ${digital.sex === 'She' ? 'her' : 'him'} though...`,
            true,
          );
        } else {
          await you.say_and_wait(`Seiun Sky, I'd like to chat longer, but...`);
          await you.say_and_wait([
            `Digital isn't waking up anytime soon, and it's getting late. I need to take ${digital.sex === 'She' ? 'her' : 'him'} back.`,
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ` looks at `,
            you.get_colored_name(),
            ` and yawns lazily.`,
          ]);
          await sky.say_and_wait(
            `Fair enough, though it's a shame we didn't get to fish.`,
          );
          await era.printAndWait([
            `Saying goodbye, just as `,
            you.get_colored_name(),
            ` is about to hoist `,
            digital.get_colored_name(),
            ` onto their back, warm breath brushes against `,
            you.get_colored_name(),
            `'s ear...`,
          ]);
          await sky.say_and_wait([
            `Find ${digital.sex === 'She' ? 'her' : 'him'} a reason to race...`,
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ` closes their eyes and simply offers a quiet thanks.`,
          ]);
          era.println();
          await era.printAndWait([
            digital.get_colored_name(),
            ` is remarkably petite, but hoisting ${digital.sex === 'She' ? 'her' : 'him'} up makes `,
            you.get_colored_name(),
            ` realize ${digital.sex.toLowerCase()} is even lighter than ${digital.sex.toLowerCase()} looks.`,
          ]);
          await era.printAndWait([
            `Soft and fragile, tiny breaths puff against `,
            you.get_colored_name(),
            `'s neck, tickling slightly.`,
          ]);
          await era.printAndWait([
            `After returning, `,
            digital.get_colored_name(),
            ` bows and apologizes profusely to `,
            you.get_colored_name(),
            `.`,
          ]);
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
