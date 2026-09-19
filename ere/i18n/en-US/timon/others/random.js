/**
 * @file Random Events
 * @author イーウィヤ
 * @author 雞雞
 * @author 幽白書
 * @author KUN
 * @author Mr.E.
 * @author 念来过倒要你
 * @author 牛蛙煲
 * @author Katze (translator)
 */
const {
  add,
  clear,
  drawLine,
  get,
  getLineCount,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  println,
  waitAnyKey,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = {
  god_coin: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} _ Unused parameter; must be retained
     * @param {number} dice Prayer roll result between 0 and 1; lower is better
     * @param {number|undefined} god ID of a random goddess if Fondness is awarded; undefined if all goddesses have already manifested
     */
    const f = async (_, dice, god) => {
      await printAndWait('Toss in a coin and make a wish...');
      if (dice < 0.4 && god) {
        await printAndWait(
          'Was that... my imagination? I heard a voice that somehow inspires warmth and trust...',
        );
        const color = get_chara_color(god);
        switch (god) {
          case 340:
            await printAndWait('A passionate, crimson voice...', {
              color,
            });
            break;
          case 341:
            await printAndWait('A compassionate, azure voice...', {
              color,
            });
            break;
          case 342:
            await printAndWait('A stern, golden voice...', {
              color,
            });
        }
      } else if (dice < 0.7) {
        await printAndWait('Ah... This might actually work...?');
        await printAndWait(
          'Then again... nothing comes to mind. But the more I think about it, the more I feel like I understand something...',
        );
      } else if (dice < 0.9) {
        await printAndWait('Just as expected, nothing happened...');
      } else {
        await printAndWait('By the time I picked it up, there were two coins!');
      }
    };
    f.title = 'Wishing Well Beneath the Three Goddesses';
    return f;
  })(),
  all_round_meek: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} meek Happy Meek
     */
    const f = async (meek) => {
      await printAndWait(
        'An ancient-looking page suddenly blows in from nowhere?!',
      );
      await printAndWait('...I reach out and catch it.');
      await printAndWait(
        'Why does one page have information on sprints, miles, medium-distance, and long-distance races all at once?!',
      );
      await meek.say_and_wait('Um, could you please give that back to me...?');
      await printAndWait([
        'While still reeling from the discovery, ',
        meek.get_colored_name(),
        ' calls out to me.',
      ]);
      await printAndWait(
        '...Feeling like I just peeked at someone else’s treasure, I sheepishly hand it back.',
      );
      println();
      await printAndWait(
        '...Wait, was that page from the Kiryuin family’s secret training manual?!',
      );
      await printAndWait('The realization hits me much, much later.');
    };
    f.title = 'Meek, Jack of All Trades';
    return f;
  })(),
  experiment: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} you Player
     * @param {CharaTalk} ss Sunday Silence—or more precisely, Cafe's "friend"
     * @param {CharaTalk} coffee Manhattan Cafe
     * @param {boolean} is_endu_med Whether the item is a Stamina potion
     */
    const f = async (you, ss, coffee, is_endu_med) => {
      await you.say_and_wait('Hello...? Anyone here?');
      println();
      await printAndWait(
        'I didn’t hear anything about this classroom being used for something else...',
      );
      await printAndWait([
        'A sudden downpour, followed by a sudden clap of thunder. As though driven onward by the storm, ',
        you.get_colored_name(),
        ' arrives at this little treasure trove.',
      ]);
      println();
      await you.say_and_wait('Am I... supposed to choose one?');
      println();
      await printAndWait('A burgundy potion held in a strapped case');
      await printAndWait('And a slightly worn black cat plush');
      println();
      you.say('Which one should I take...?', true);
      printButton('Potion (Stamina +? or Energy +50)', 1);
      printButton('Plush (Wit +8, Skill Pt +?)', 2);
      const ret = await input();
      if (ret === 1) {
        if (is_endu_med) {
          await printAndWait('So bitter—!');
        } else {
          await printAndWait('So spicy—!');
        }
      } else {
        await ss.say_as_unknown_and_wait('Good kitty, good kitty, good kitty—');
        await coffee.say_as_unknown_and_wait('Hm...?');
        await printAndWait([
          'Did the shadow of an ',
          coffee.uma_sex_title,
          ' just pass by the window? No way—this isn’t even the first floor.',
        ]);
      }
      return [ret];
    };
    f.title = 'Exploring the Abandoned Science Lab';
    return f;
  })(),
  shadow_minoru: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} minoru Hayakawa Tazuna/Harvest Time
     * @param {CharaTalk} taiki Taiki Shuttle
     * @param {CharaTalk} you Player
     * @param {boolean} know_minoru Whether the player knows Hayakawa Tazuna's true identity
     */
    const f = async (minoru, taiki, you, know_minoru) => {
      if (know_minoru) {
        await printAndWait([
          you.get_colored_name(),
          ' spots two green figures rapidly growing larger in the distance. It turns out ',
          taiki.get_colored_name(),
          ' is being chased for some unknown reason by ',
          minoru.get_colored_name(),
          '... She’s still got it!',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' spots two green figures rapidly growing larger in the distance. It turns out ',
          taiki.get_colored_name(),
          ' is being chased for some unknown reason by ',
          minoru.get_colored_name(),
          '... Wait, how can a human keep pace with an ',
          taiki.uma_sex_title,
          ' anyway?',
        ]);
      }
      printButton('“Slow down! You’ll get hurt!”', 1);
      await input();
      await printAndWait([
        taiki.get_colored_name(),
        ' gradually slows down, and the secretary in green quickly thanks ',
        you.get_colored_name(),
        '. Another good deed done!',
      ]);
    };
    f.title = 'The Green Phantom';
    return f;
  })(),
  chairman_annoyance1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste Akikawa Yayoi/Northern Taste
     */
    const f = async (taste) => {
      await printAndWait([
        'The academy chairwoman, ',
        taste.get_colored_actual_name(),
        ', is in distress—over money, to be precise. Tracen has gone over budget yet again!!',
      ]);
      await printAndWait(
        'The tiny orange-haired chairwoman is now trembling under a lecture from the secretary in green... But how can this pressing financial crisis be resolved?',
      );
      printButton(
        '“Cut costs, raise revenue, and lead by taking a pay cut!” (Debt +40, Trainee Umamusume Skill Pt +10)',
        1,
      );
      printButton('“That’s not my department...”', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait('Something good seems to have happened!');
        await printAndWait(
          '...But I’ll be living on instant noodles this month!',
        );
      } else {
        await printAndWait('Nothing out of the ordinary happened.');
      }
      return [ret];
    };
    f.title = '%TEEN%Chairwoman’s Troubles, Part One';
    return f;
  })(),
  chairman_annoyance2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste Akikawa Yayoi/Northern Taste
     */
    const f = async (taste) => {
      await printAndWait([
        'The academy chairwoman, ',
        taste.get_colored_actual_name(),
        ', has lost her cat! The chairwoman is so depressed that Tracen’s overall efficiency has plummeted!',
      ]);
      printButton(
        '“Mobilize everyone! We must find that cat!” (Motivation -50, Fondness +40–60)',
        1,
      );
      printButton('“And?”', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          'Once the cat is found, ',
          taste.get_colored_name(),
          ' is overjoyed, and Tracen returns to normal!',
        ]);
      } else {
        await printAndWait(
          'Nothing out of the ordinary happened... So what does the chairwoman usually do around here?',
        );
      }
      return [ret];
    };
    f.title = '%TEEN%Chairwoman’s Troubles, Part Two';
    return f;
  })(),
  av_meteor: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} vega Admire Vega
     * @param {CharaTalk} you Player
     * @param {boolean} good_event Whether the omen brings good or bad fortune
     * */
    const f = async (vega, you, good_event) => {
      await printAndWait([
        'One night, ',
        you.get_colored_name(),
        ' finds ',
        vega.get_colored_name(),
        ' gazing up at the stars beside the hollow of a dead tree.',
      ]);
      await printAndWait(
        'Following her gaze, I catch a meteor streaking past from the corner of my eye.',
      );
      printButton(
        '“This has to be an omen!” (Trainee Umamusume Mood +1 or -1)',
        1,
      );
      printButton('“It means nothing.” (Stability +1)', 2);
      const ret = await input();
      if (ret === 1) {
        if (good_event) {
          await printAndWait('Something good seems to have happened!');
        } else {
          await printAndWait('Something bad happened...');
        }
      } else {
        await printAndWait(
          'Something perfectly ordinary seems to have happened!',
        );
      }
      return [ret];
    };
    f.title = 'Observing a Meteor';
    return f;
  })(),
  custom: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you Player
     */
    const f = async (you) => {
      await printAndWait([
        'One afternoon, ',
        you.get_colored_name(),
        ' suffers yet another low-odds training failure in the newly downloaded mobile game Pretty Girls: Shining Excellence... Better get used to it...',
      ]);
      printButton(
        '“Like hell I will!” (UmaCoin -50, Trainee Umamusume Energy +15%)',
        1,
        {
          disabled: get('flag:当前马币') < 50,
        },
      );
      printButton('“Better get used to it!”', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' unleashes the ultimate adult magic: spending real money!',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' resists the urge to smash the phone...',
        ]);
      }
      return [ret];
    };
    f.title = 'You Get Used to It';
    return f;
  })(),
  mr_naked_apron: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        'You wake up in the morning and find ',
        chara.get_colored_name(),
        ' already gone from the bed.',
      ]);
      await printAndWait(
        `After getting up and freshening up, you spot ${chara.sex.toLowerCase()} in the kitchen, apparently making breakfast—except...`,
      );
      await printAndWait([
        'Wearing nothing but an apron, ',
        chara.get_colored_name(),
        ' is cooking away, hips swaying as if it were the most natural thing in the world—and the sight is just—',
      ]);
      printButton("(Damn it, I can't hold back!)", 1);
      printButton('(Count primes. Stay calm...)', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          you.get_colored_name(),
          ' reels in the urge and greets ',
          chara.get_colored_name(),
          ' with a perfectly rational good morning.',
        ]);
      }
      return ret;
    };
    f.title = 'Next Morning: Naked Apron';
    return f;
  })(),

  mr_blowjob: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        'You wake up to a strange sensation down below—',
        you.get_colored_name(),
        ' can barely believe it.',
      ]);
      await printAndWait([
        'Eyes open, and the first thing in view is ',
        chara.get_colored_name(),
        ', completely bare, mouth wrapped around ',
        you.get_colored_name(),
        `'s `,
        you.sex_code === 0 ? 'clit' : 'cock',
        '—an obscenely lewd sight.',
      ]);
      const skill = get(`abl:${chara.id}:口交技巧`);
      await printAndWait([
        chara.get_colored_name(),
        ' ',
        get(`talent:${chara.id}:饮精成瘾`) > 0 ||
        get(`talent:${chara.id}:淫口`) > 0
          ? 'greedily'
          : skill > 2
            ? 'skillfully'
            : 'clumsily',
        ' ',
        you.sex_code === 0 ? 'licks at your clit' : 'works your cock',
        '. ',
        you.get_colored_name(),
        " can't help resting a hand on ",
        chara.get_colored_name(),
        `'s head, craving even more.`,
      ]);
      printButton("(Damn it, I can't hold back!)", 1);
      printButton('(I`m gonna—!)', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          'Under ',
          chara.get_colored_name(),
          `'s good-morning oral service, `,
          you.get_colored_name(),
          ' finishes almost instantly, pumping every drop of ',
          you.sex_code === 0 ? 'slick' : 'cum',
          ' straight into ',
          chara.get_colored_name(),
          `'s mouth.`,
        ]);
        await chara.say_and_wait([
          'My whole mouth is full of...',
          callname,
          `'s taste...`,
        ]);
        await printAndWait(
          'With that urge finally spent, a brand-new day begins...',
        );
      }
      return ret;
    };
    f.title = 'Next Morning: Good-Morning Blowjob';
    return f;
  })(),
  ts_sex: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      await printAndWait([
        'After a full day of training, ',
        chara.get_colored_name(),
        ' looks a little off...',
      ]);
      await printAndWait(
        'Flushed cheeks, and some unexplained wetness mixing with sweat between those thighs—the air is thick with something filthy.',
      );
      printButton('"This is part of a Trainer`s duty too..."', 1);
      printButton('"First things first—to the infirmary!"', 2);
      const ret = await input();
      return [ret];
    };
    f.title = 'Post-Training Heat';
    return f;
  })(),
  drug_notice: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} tachyon Agnes Tachyon
     * @param {CharaTalk} you Player
     * @param {number} effect Effect: 0—training buff, 1—health tea, 2—lactation drug, 3—increased libido
     */
    const f = async (tachyon, you, effect) => {
      await printAndWait(
        [
          '【Academy Notice—The substance accidentally released onto the track by ',
          tachyon.get_colored_name(),
          ' remains unidentified. Trainers are advised to avoid using the track unless absolutely necessary.】',
        ],
        { fontSize: '1.5rem' },
      );
      let ask_tachyon = false;
      while (true) {
        printButton('(It’ll probably be fine, right?) (Random Effect)', 1);
        printButton('Better heed the warning... (Negate Effect)', 2);
        if (!ask_tachyon && get('cflag:32:招募状态') === 1) {
          printButton('“Tachyon... You little—!”', 3);
        }
        switch (await input()) {
          case 1:
            switch (effect) {
              case 0:
                await printAndWait('The team’s training goes more smoothly...');
                break;
              case 1:
                await printAndWait(
                  'The team’s diets will be more effective this week...',
                );
                break;
              case 2:
                await printAndWait('Every team member begins lactating...');
                break;
              case 3:
                await printAndWait('The team’s libido rises...');
            }
            return [1];
          case 2:
            return [2];
          case 3:
            await printAndWait([
              'Under questioning from ',
              you.get_colored_name(),
              ', ',
              tachyon.get_colored_name(),
              ' finally admits what kind of effect the drug ',
              tachyon.sex.toLowerCase(),
              ' released is likely to have—',
            ]);
            switch (effect) {
              case 0:
                await tachyon.say_and_wait(
                  'Simply put, it makes it easier to concentrate during training...',
                );
                break;
              case 1:
                await tachyon.say_and_wait(
                  'Simply put, it makes the body burn calories much faster...',
                );
                break;
              case 2:
                await tachyon.say_and_wait(
                  'Simply put, it makes Umamusume lactate...',
                );
                break;
              case 3:
                await tachyon.say_and_wait(
                  'Simply put, it weakens your inhibitions a little...',
                );
            }
            ask_tachyon = true;
        }
      }
    };
    f.title = 'Academy Notice: Chemical Spill';
    return f;
  })(),
  gs_carrot: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} gs Gold Ship
     */
    const f = async (gs) => {
      await printAndWait([
        'A bizarre gray-haired ',
        gs.uma_sex_title,
        ' stops me on campus.',
      ]);
      await gs.say_and_wait(
        'Heeey! Trainer over there! Wanna go pull carrots outta the beach with li’l Gold Ship?!',
      );
      await printAndWait([
        'It’s the notorious troublemaker ',
        gs.get_colored_name(),
        '... And since when do carrots grow on beaches?',
      ]);
      printButton('“If you wish to pull, then pull!” (UmaCoin +20)', 1);
      printButton('“This sounds suspicious...” (Energy +100)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          'We actually dig up a carrot shining with rainbow light—and it looks like it’s made of gemstones?!',
        );
      } else {
        await printAndWait(
          'I get an ordinary carrot... Wait, can a carrot growing on a beach really be called ordinary?! Either way, it’ll make a nice addition to lunch.',
        );
      }
      return [ret];
    };
    f.title = 'The Carrot-Pulling Fiend';
    return f;
  })(),
  trainer_race: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you Player
     * @param {CharaTalk} aoi Kiryuin Aoi
     */
    const f = async (you, aoi) => {
      await printAndWait([
        'On the way to Tracen Academy, a poster carried by the wind smacks ',
        you.get_colored_name(),
        ' right in the face.',
      ]);
      await printAndWait([
        'After peeling it off, I discover it’s advertising a trainer-only ',
        get_random_entry(['sprint', 'swimming', 'mountain-climbing']),
        ' competition. It says official support will be provided even to those lacking confidence in their fitness. Should I enter?',
      ]);
      printButton(
        '(What’s the harm in trying?) (Energy & Motivation -25%; may win a prize)',
        1,
      );
      printButton('(I’m swamped! Who has time for this?!)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          'After receiving some highly suspicious acupuncture, I somehow win with ease—and even receive a prize from the organizers!',
        );
        await printAndWait(
          'But it went so smoothly that it sends a chill down my spine... Almost like I was being used as a test subject...',
        );
      } else {
        await printAndWait([
          'Later, I hear that ',
          aoi.get_colored_name(),
          ' won without accepting any support.',
        ]);
        await printAndWait('That woman really is freakishly strong...');
      }
      return [ret];
    };
    f.title = 'Poster in the Wind';
    return f;
  })(),
  bankruptcy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you Player
     */
    const f = async (you) => {
      await printAndWait([
        'Was it laziness and shirking work? Or was fortune simply against ',
        you.get_colored_name(),
        '? Either way, ',
        you.get_colored_name(),
        ' has finally emptied the bank account!',
      ]);
      await printAndWait([
        'It’s pathetic, but perhaps there’s no choice except to ask the assigned ',
        get('flag:角色性别') === 1 ? 'Umamusuko' : 'Umamusume',
        ' for financial help...?',
      ]);
      printButton('“How did it come to this...?”', 1);
      await input();
    };
    f.title = 'Bankruptcy';
    return f;
  })(),
  reject: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you Player
     */
    const f = async (you) => {
      await printAndWait(
        'For some reason, walking around campus has recently drawn constant whispers.',
      );
      await printAndWait([
        'After investigating, ',
        you.get_colored_name(),
        ' discovers that everyone now thinks their trainer is a heartless ',
        you.sex_code === 1 ? 'two-timing bastard' : 'two-timing bitch',
        '?!',
      ]);
      printButton('“That’s not true! I didn’t do anything!”', 1);
      await input();
    };
    f.title = 'Slander! It’s All Slander!';
    return f;
  })(),
  work_over: (() => {
    /** @author 雞雞 */
    const f = async () => {
      await printAndWait(
        'Being a trainer pays well and carries prestige, but it isn’t easy.',
      );
      await printAndWait([
        'Besides training an assigned racing ',
        get('flag:角色性别') === 1 ? 'Umamusuko' : 'Umamusume',
        ', there’s academy administration, press conferences, financial management, research reports, and countless other duties.',
      ]);
      println();
      await printAndWait(
        'Another day of surviving on energy drinks and sleeping under the office desk.',
      );
      printButton('“The floor is so hard...”', 1);
      await input();
    };
    f.title = 'Life Happens: Overtime';
    return f;
  })(),
  sick: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you Player
     */
    const f = async (you) => {
      await printAndWait([
        you.get_colored_name(),
        ' wakes up dizzy, drowsy, and generally feeling awful all over.',
      ]);
      printButton('“Screw it. I’ll power through!”', 1);
      printButton('“I should call in sick and see a doctor...”', 2);
      return [await input()];
    };
    f.title = 'Life Happens: Sick Day';
    return f;
  })(),
  fishing: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} sky Seiun Sky
     * @param {CharaTalk} you Player
     */
    const f = async (sky, you) => {
      sky.name = 'Gray-Haired ' + sky.uma_sex_title + ' in a Straw Hat';
      await printAndWait([
        you.get_colored_name(),
        ' encounters an ',
        sky.uma_sex_title,
        ' by the river while carrying a fishing rod.',
      ]);
      await printAndWait([
        sky.sex,
        ' speaks with ',
        you.get_colored_name(),
        ' while keeping ',
        sky.sex.toLowerCase(),
        ' back turned.',
      ]);
      println();
      await sky.say_and_wait(
        'Nyahaha, what a coincidence. Fate brought us together, so go ahead and take whichever one you want~',
      );
      println();
      await printAndWait([
        you.get_colored_name(),
        ' looks over and sees an old fishing rod and a lure beside the stranger.',
      ]);
      printButton('Choose the Rod (Double today’s catch)', 1);
      printButton('Choose the Lure (20 White Factors)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' chooses the rod. As if enchanted, ',
          you.get_colored_name(),
          ' has incredible luck today and catches more than twice the usual amount of fish!',
        ]);
      } else {
        await printAndWait('Hm? The streamlined shape of this lure...');
        await printAndWait([
          'At that moment, inspiration strikes ',
          you.get_colored_name(),
          '!',
        ]);
      }
      return [ret];
    };
    f.title = 'Fishing Wisdom';
    return f;
  })(),
  ts_shower: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     * @param {boolean} want_sex 角色是否同意性爱
     */
    const f = async (chara, you, want_sex) => {
      const ret = [];
      await printAndWait([
        'Hmm? Still no sign of ',
        chara.get_colored_name(),
        '?',
      ]);
      await printAndWait('Perfect timing—might as well grab a shower!');
      println();
      await printAndWait([
        'You open the door and freeze. Standing there, not a stitch on, is ',
        chara.get_colored_name(),
        '...',
      ]);
      printButton('"Oh—wanna shower together?"', 1);
      printButton('"Sorry! Didn`t mean to barge in!"', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        if (want_sex) {
          await printAndWait(
            `${chara.sex} agrees with unmistakable enthusiasm.`,
          );
          await printAndWait('The two of you scrub each other`s backs.');
          await printAndWait(
            `Once you're done washing up, ${chara.sex.toLowerCase()} looks at `,
          );
          await printAndWait([
            you.get_colored_name(),
            ' with a distinctly unsatisfied gaze...',
          ]);
        } else {
          await chara.say_and_wait('Idiot—what are you even thinking?!');
          await printAndWait([
            you.get_colored_name(),
            ' gets kicked right out...',
          ]);
        }
      } else {
        await you.say_and_wait("Sorry! Didn't mean to barge in!");
        await printAndWait([you.get_colored_name(), ' yells that and bolts.']);
        await printAndWait([
          'Not long after, a freshly showered ',
          chara.get_colored_name(),
          ' steps out, face still red.',
        ]);
      }
      return ret;
    };
    f.title = 'In the Shower';
    return f;
  })(),
  sr_strange_lunch: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        'Lunchtime rolls around, and ',
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        ' both end up on the rooftop without planning it.',
      ]);
      await printAndWait([
        'For some reason, the bento ',
        chara.get_colored_name(),
        ' brought today is unusually lavish.',
      ]);
      println();
      await chara.say_and_wait([callname, ', go on—tell me how it tastes.']);
      await chara.say_and_wait('This one`s my masterpiece~');
      println();
      await printAndWait([
        you.get_colored_name(),
        ' takes the bento without a second thought and picks up the utensils.',
      ]);
      await printAndWait([
        'A few delicious bites later, though, a heat starts blooming through the body...',
      ]);
      println();
      await printAndWait([
        you.get_colored_name(),
        ' turns, puzzled, toward ',
        chara.get_colored_name(),
        '—only to find the same flush on that face.',
      ]);
      await printAndWait([
        'Before ',
        you.get_colored_name(),
        ' can ask anything, lips crash in and cut the words short.',
      ]);
      println();
      await printAndWait([
        'When they finally part, a long silver thread still hangs between their mouths.',
      ]);
      printButton('"Guess we don`t have a choice now..."', 1);
      printButton('"I`m a person of virtue! Steel will, activate!"', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          'Rooftop or not, ',
          you.get_colored_name(),
          ' and ',
          chara.get_colored_name(),
          ' can`t stop craving each other.',
        ]);
        await printAndWait([
          'Then again, it`s still lunch break—so ',
          you.get_colored_name(),
          ' stops overthinking and grabs ',
          chara.get_colored_name(),
          ' by the shoulders...',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' gives a hard shake of the head, drags steel-solid willpower back online, and snaps the bento shut.',
        ]);
        await printAndWait([
          'Standing up right in front of ',
          chara.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' all but flees the rooftop...',
        ]);
      }
      return ret;
    };
    f.title = 'A Strange Lunch';
    return f;
  })(),
  breakfast: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara Character drinking the player's milk
     * @param {CharaTalk} you Player
     */
    const f = async (chara, you) => {
      await printAndWait([
        'Upon entering the trainers’ office, ',
        you.get_colored_name(),
        ' sees ',
        chara.get_colored_name(),
        ' drinking milk after finishing breakfast.',
      ]);
      await printAndWait(
        'That bottle’s packaging... looks strangely familiar...',
      );
      await printAndWait([
        'And for some reason, ',
        chara.get_colored_name(),
        ' has a rather unusual look in ',
        chara.sex === 'She' ? 'her' : 'his',
        ' eyes...',
      ]);
      await printAndWait('...It must be my imagination.');
    };
    f.title = '“Breakfast”';
    return f;
  })(),
  or_riverside_walk: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara Character
     * @param {CharaTalk} you Player
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        'After relaxing by the riverbank for a while, ',
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        ' begin the walk back.',
      ]);
      await printAndWait(
        'A gentle breeze brushes their faces. It feels wonderful.',
      );
      printButton('“We should head back.”', 1);
      printButton('“It’s getting late.”', 2);
      await input();
      await printAndWait([
        'As ',
        you.get_colored_name(),
        ' speaks, ',
        chara.get_colored_name(),
        ' steals a glance over and quietly leans ',
        chara.sex === 'She' ? 'her' : 'his',
        ' shoulder against theirs.',
      ]);
      println();
      await printAndWait(
        'They stroll leisurely along the nearly deserted road.',
      );
      await chara.say_and_wait('It’s so quiet...');
      await printAndWait([
        chara.get_colored_name(),
        ' seems to notice something and slows down.',
      ]);
      println();
      await printAndWait([
        'When ',
        you.get_colored_name(),
        ' realizes ',
        chara.get_colored_name(),
        ' has stopped, the trainer stops as well and turns around.',
      ]);
      printButton('“What’s wrong?”', 1);
      await input();
      await chara.say_and_wait('Could you close your eyes for a moment?');
      await printAndWait([
        'Puzzled by the request, ',
        you.get_colored_name(),
        ' hesitates briefly, then closes their eyes.',
      ]);
      println();
      await printAndWait(
        'The cool wind whispers past, carrying the faintest trace of warmth.',
      );
      await printAndWait([
        'Even without opening their eyes, ',
        you.get_colored_name(),
        ' can guess what is happening.',
      ]);
      await printAndWait(
        'Arms wrap around the trainer’s body, and something warm and moist touches their cheek.',
      );
      println();
      await chara.say_and_wait('...All right. Let’s go back.');
      await printAndWait([
        'When the trainer opens their eyes again, ',
        chara.get_colored_name(),
        ' is standing quietly before ',
        you.get_colored_name(),
        '.',
      ]);
      await printAndWait(
        'Still slightly flushed, the trainee smiles and takes two steps back.',
      );
      printButton('“Let’s head back.” (Fondness +10)', 1);
      printButton(
        '“Maybe... we could stay a little longer...” (Infatuation +1)',
        2,
      );
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' takes ',
          you.get_colored_name(),
          ' by the warm hand and walks on with a reassured smile.',
        ]);
        await you.say_and_wait(
          'What exactly was that feeling just now...?',
          true,
        );
      } else {
        await chara.say_and_wait('Stay longer...');
        await chara.say_and_wait('You mean...');
        await printAndWait([
          'Faced with the blushing ',
          chara.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' simply smiles.',
        ]);
        await printAndWait([
          'Today, the trainer will spend a little more time having fun with ',
          chara.get_colored_name(),
          '.',
        ]);
      }
      return ret;
    };
    f.title = 'A Riverside Stroll';
    return f;
  })(),
  os_is_movie_right: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        'You meant to just wander the shopping district with ',
        chara.get_colored_name(),
        '—but an unexpected promo stops you cold.',
      ]);
      println();
      await you.say_as_passer_by_and_wait('Promo', [
        'A brand-new film that perfectly captures a racing ',
        chara.uma_sex_title,
        `'s road to growth!`,
      ]);
      println();
      await printAndWait([
        'Neither of you had heard of it, but curiosity wins—',
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        ' buy tickets and head in.',
      ]);
      await printAndWait(
        'You settle into your seats, waiting with a little anticipation for the lights to drop and the story to start.',
      );
      await printAndWait(
        'The production values on screen really do look like a fresh release—but the "road to growth" takes some unexpected turns.',
      );
      println();
      await you.say_as_passer_by_and_wait(
        'Actor',
        'Trainer... it`s all thanks to you...',
      );
      await you.say_as_passer_by_and_wait(
        'Actor',
        'Because of my Trainer, I can finally...',
      );
      println();
      await printAndWait([
        'The scenes get a little over-the-top, and ',
        you.get_colored_name(),
        ' can`t shake the feeling something`s off.',
      ]);
      await printAndWait('Is this really about growing as a racer?');
      println();
      await printAndWait([
        'Sensing that something`s wrong, ',
        you.get_colored_name(),
        ' turns to tell ',
        chara.get_colored_name(),
        ' maybe you should skip the rest.',
      ]);
      println();
      await chara.say_and_wait('...');
      println();
      await printAndWait('A warm weight settles over your arm.');
      await printAndWait([
        'Beside you, ',
        chara.get_colored_name(),
        ' gently takes ',
        you.get_colored_name(),
        `'s hand.`,
      ]);
      println();
      await chara.say_and_wait('...Are we leaving?');
      println();
      await printAndWait([
        'In the dark of the theater, only ',
        chara.get_colored_name(),
        `'s face stands out.`,
      ]);
      await printAndWait([
        'Both hands rest stacked on ',
        you.get_colored_name(),
        `'s arm as ${chara.sex.toLowerCase()} leans lightly against your shoulder.`,
      ]);
      println();
      await printAndWait(
        'The movie hardly matters anymore—eyes locked, neither of you looking away.',
      );
      await printAndWait(
        'Screen-light paints both faces, catching the glint in each other`s eyes.',
      );
      println();
      await chara.say_and_wait([callname, '...']);
      await chara.say_and_wait('I...');
      await you.say_as_passer_by_and_wait('Actor', 'I love you!');
      println();
      await printAndWait(
        'The film hits its climax and cuts the moment clean in two.',
      );
      await printAndWait([
        'The confession blares between ',
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        ', leaving a flicker of awkwardness in both gazes.',
      ]);
      printButton(
        '"Let`s... just cool off a little." (Motivation up, Fondness +10)',
        1,
      );
      printButton(
        '"Let`s... get out of here." (Motivation up greatly, Infatuation +1)',
        2,
      );
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait(
          'The movie winds down, and the house lights come up right on cue.',
        );
        await printAndWait([
          'Bright light hits ',
          you.get_colored_name(),
          `'s embarrassed face, and `,
          you.get_colored_name(),
          ' coughs lightly.',
        ]);
        println();
        await chara.say_and_wait('...Yeah.');
        println();
        await printAndWait([
          'The hands still pressed together shift—',
          chara.get_colored_name(),
          ' holds on and rises with ',
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait([
          'A little regretful, maybe, but still obediently standing and following behind ',
          you.get_colored_name(),
          '.',
        ]);
      } else {
        await printAndWait([
          'Even over the film`s big climax, ',
          you.get_colored_name(),
          ' manages to find a gap for a quiet voice.',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' freezes at the words that slipped out with the mood, then shrinks back on instinct.',
        ]);
        await printAndWait([
          'In contrast, ',
          you.get_colored_name(),
          `'s expression softens as you lean in.`,
        ]);
        await printAndWait([
          'Lips meet, pressing ',
          chara.get_colored_name(),
          `'s surprise and shyness back down, soaking in the happiness of it.`,
        ]);
        println();
        await printAndWait([
          you.get_colored_name(),
          ' takes ',
          chara.get_colored_name(),
          `'s hand and slips quietly out of the theater.`,
        ]);
        await printAndWait([
          'With a fully flushed ',
          chara.get_colored_name(),
          ' in tow, you look at the hotel ahead, gently loop an arm around ',
          `${chara.sex === 'She' ? 'her' : 'his'} shoulders, and step inside...`,
        ]);
      }
      return ret;
    };
    f.title = 'Is This Movie Right?';
    return f;
  })(),
  privacy_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you Player
     * @param {PrintedSpan|false} money Payment received if the goods are sold
     */
    const f = async (you, money) => {
      await printAndWait([
        'After waking up today, ',
        you.get_colored_name(),
        ' finds a message on a private account. The sender wants exclusive rights to all future stock.',
      ]);
      printButton(
        '(Maybe they just have a weird fetish... Money is money.)',
        1,
      );
      printButton(
        '(They want it shipped to a specific address too...? Too suspicious. Forget it.)',
        2,
      );
      const ret = await input();
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' receives a payment.']);
        await printAndWait(
          'The buyer asks to use the same delivery address next time and wants first priority whenever more stock is available.',
        );
        if (money) {
          await printAndWait(['Received ', money, ' UmaCoin in payment...']);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' finds the buyer’s messages highly suspicious, especially since the delivery address is quite close to Tracen Academy.',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' politely declines. The buyer refuses to give up, however, promising a higher price if any stock becomes available.',
        ]);
      }
      return [ret];
    };
    f.title = 'Personal Privacy and Safety, Part One?';
    return f;
  })(),
  privacy_2_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you Player
     * @param {CharaTalk} chara Character buying the milk
     */
    const f = async (you, chara) => {
      await printAndWait([
        'In the training room, ',
        chara.get_colored_name(),
        ' is using ',
        chara.sex === 'She' ? 'her' : 'his',
        ' phone. The moment ',
        you.get_colored_name(),
        ' appears, ',
        chara.sex.toLowerCase(),
        ' quickly hides it, almost as if avoiding the trainer.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '’s phone vibrates with a new message.',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' sniffs the air and says ',
        you.get_colored_name(),
        ' seems to carry an unfamiliar scent.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' pays it no mind. After all, an ',
        chara.uma_sex_title,
        ' has very keen senses.',
      ]);
      await printAndWait('...');
      await printAndWait([
        'Naturally, the trainer also fails to notice the strange look in ',
        chara.get_colored_name(),
        '’s eyes whenever ',
        you.get_colored_name(),
        ' looks away.',
      ]);
    };
    f.title = 'Personal Privacy and Safety, Part Two?!';
    return f;
  })(),
  privacy_2_2: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you Player
     * @param {PrintedSpan|false} money Payment received if the goods are sold
     */
    const f = async (you, money) => {
      await printAndWait([
        'The buyer sends another message, asking ',
        you.get_colored_name(),
        ' to provide more goods.',
      ]);
      await printAndWait(
        'They seem to be an avid collector of this particular product and sound extremely desperate—as if they need it for something.',
      );
      printButton(
        '(Money’s been tight lately... Maybe I should do it after all?)',
        1,
      );
      printButton('(...Too suspicious. Forget it.)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          'You can’t survive without money. At this point, surely no one could blame ',
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait([
          'Trying not to think too hard about it, ',
          you.get_colored_name(),
          ' decides to accept.',
        ]);
        if (money) {
          await printAndWait(['Received ', money, ' UmaCoin in payment...']);
        }
      } else {
        await printAndWait(
          'Such a nearby delivery address combined with that desperate tone can only mean trouble. Better ignore them.',
        );
        await printAndWait([
          'With that thought, ',
          you.get_colored_name(),
          ' blocks the buyer.',
        ]);
      }
      return [ret];
    };
    f.title = 'Personal Privacy and Safety, Part Two!?';
    return f;
  })(),
  privacy_3: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 买奶的角色
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (you, chara, callname) => {
      const ret = [];
      await printAndWait([
        'After training, ',
        chara.get_colored_name(),
        ' asks if ',
        you.get_colored_name(),
        ' has a free moment—',
        chara.sex.toLowerCase(),
        ' wants to take ',
        you.get_colored_name(),
        ' somewhere.',
      ]);
      printButton('"I`ve got nothing planned. Let`s go."', 1);
      printButton('"Maybe another time. It`s getting late."', 2);
      ret.push(await input());
      if (ret.at(-1) === 1) {
        await printAndWait([
          chara.get_colored_name(),
          `'s steps grow lighter—but the path feels more and more familiar to `,
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait(
          'This is that buyer`s delivery address from before!',
        );
        await chara.say_and_wait([
          callname,
          ' really doesn`t care about privacy, huh? You didn`t give anything away—except your IP, which just so happens to be on campus~',
        ]);
        await chara.say_and_wait([
          'But it`s fine. I already handled it for ',
          callname,
          '. Seems like someone here was planning something nasty for ',
          callname,
          '.',
        ]);
        await chara.say_and_wait([
          'Still, if ',
          callname,
          ' is going to learn a lesson, I`ll make sure your body remembers it well—',
        ]);
        await chara.say_and_wait('—that we`re one and the same.');
        await printAndWait('...');
        printButton(
          `Pull ${chara.sex === 'She' ? 'her' : 'him'} into a warm hug and show your thanks. (Fondness +25)`,
          1,
        );
        printButton(
          `Take ${chara.sex === 'She' ? 'her' : 'him'} back and thank ${chara.sex === 'She' ? 'her' : 'him'} properly.`,
          2,
        );
        ret.push(await input());
      } else if (get('talent:0:泌乳') === 3 || get('flag:惩戒力度') === 3) {
        await printAndWait(
          'A gentle but unyielding grip closes around your wrist.',
        );
        await printAndWait([
          you.get_colored_name(),
          ' is spun around and dragged into the still-unlocked Trainer`s office by ',
          chara.get_colored_name(),
          ', who locks the door behind you.',
        ]);
        if (get('flag:惩戒力度') === 3) {
          await chara.say_and_wait([
            'You`re already an ',
            chara.uma_sex_title,
            `'s property.`,
          ]);
          await chara.say_and_wait(
            'And you still think this body is yours to do with as you please?',
          );
          await chara.say_and_wait(
            'Looks like I need to make your place crystal clear.',
          );
          await chara.say_and_wait(
            'What are you staring at? Clothes don`t take themselves off!',
          );
          await printAndWait([
            'Under that unreadable gaze, ',
            you.get_colored_name(),
            ' peels off every layer, bit by bit.',
          ]);
          await printAndWait(
            'First the badge that marks you as a Trainer—then the underwear that was the last scrap of privacy.',
          );
          await chara.say_and_wait('That`s it? After a mistake like this...');
          await printAndWait([
            chara.get_colored_name(),
            ' doesn`t even finish the sentence—your body already understands.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            ' tosses the clothes aside and drops into a perfect dogeza, private parts laid bare for the other to see.',
          ]);
          await printAndWait('Your whole body is burning...');
          await printAndWait([
            'Is it because an ',
            chara.uma_sex_title,
            ' is scolding you...?',
          ]);
          await printAndWait(
            'Or was this what you wanted all along—why you did something like that in the first place?',
          );
          await printAndWait(
            'Mind and body both feel on fire. Thinking is impossible.',
          );
          await printAndWait(
            'All that`s left is to show how sorry you are with action alone.',
          );
          await printAndWait(
            'Even the horse ears forced onto you press flat against the floor.',
          );
        } else {
          await chara.say_and_wait([
            callname,
            ' gets bothered by that body every day too, right? I get it~',
          ]);
          await chara.say_and_wait(
            'Honestly. You only had to say something and I`d have helped.',
          );
          await printAndWait([
            you.get_colored_name(),
            ' can tell ',
            chara.get_colored_name(),
            ' is already peeling off clothes in a hurry.',
          ]);
          await chara.say_and_wait(
            'Having to deal with it yourself every time is such a pain... Don`t worry. That ends today. From now on—no, starting right now...',
          );
          await chara.say_and_wait('I`ll take good care of you.');
          await chara.say_and_wait(
            'Zero care for online privacy, just hanging a milk-for-sale link out in the open.',
          );
          await chara.say_and_wait(
            'Isn`t that just your way of saying the Trainer`s pent up?',
          );
          await chara.say_and_wait(
            'You can relax that body of yours now, okay?',
          );
          await printAndWait([
            you.get_colored_name(),
            ' still wants to protest, but a heat-addled ',
            chara.uma_sex_title,
            ' clearly isn`t listening to another word from ',
            you.get_colored_name(),
            '.',
          ]);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' is pulled over to the Trainer dorms by ',
          chara.get_colored_name(),
          '.',
        ]);
        await chara.say_and_wait([
          callname,
          ' has it rough, huh—having to take a side hustle just to get by.',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          `'s ears droop. ${chara.sex} seems to know a little about `,
          you.get_colored_name(),
          `'s "private life."`,
        ]);
        await chara.say_and_wait(
          'If you`re ever in a tight spot, tell me, okay? I`ll always be on your side!',
        );
        await chara.say_and_wait([
          'Someone tracked ',
          callname,
          ' online earlier—looked like they were going to make trouble.',
        ]);
        await chara.say_and_wait('But don`t worry. I already took care of it~');
        await chara.say_and_wait(
          'If anything else comes up, you tell me right away!',
        );
        await printAndWait([
          chara.get_colored_name(),
          ' pulls ',
          you.get_colored_name(),
          ' into a hug.',
        ]);
        if (get('cflag:0:身高') - get(`cflag:${chara.id}:身高`) > 20) {
          await printAndWait([
            'A tongue even sneaks a lick along ',
            you.get_colored_name(),
            `'s neck, leaving `,
            you.get_colored_name(),
            ' squirming from the tickle.',
          ]);
        } else {
          await printAndWait([
            chara.get_colored_name(),
            ' buries a long breath against ',
            you.get_colored_name(),
            `'s neck—almost as if that were ${chara.sex === 'She' ? 'her' : 'his'} reward for fixing this mess for `,
            you.get_colored_name(),
            '.',
          ]);
        }
        await chara.say_and_wait([
          callname,
          ', see you next week. Get some rest!',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' walks ',
          you.get_colored_name(),
          ' all the way to the dorm doorway and says goodbye.',
        ]);
      }
      return ret;
    };
    f.title = 'Personal Privacy and Safety, Part Three?';
    return f;
  })(),
  strange_day: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you Player
     * @param {CharaTalk} chara Assigned trainee involved in the event; may be Agnes Tachyon
     * @param {CharaTalk|false} tachyon Agnes Tachyon; false if chara is Agnes Tachyon
     * @param {CharaTalk|false} minoru Hayakawa Tazuna/Harvest Time; false if chara is Hayakawa Tazuna/Harvest Time
     * @param {CharaTalk|false} doto Meisho Doto; false if chara is Meisho Doto
     * @param {CharaTalk|false} maya Mayano Top Gun; false if chara is Mayano Top Gun
     * @param {CharaTalk|false} sky Seiun Sky; false if chara is Seiun Sky
     */
    const f = async (you, chara, tachyon, minoru, doto, maya, sky) => {
      await printAndWait([
        'That morning, ',
        you.get_colored_name(),
        ' feels that something is off, but still intends to enjoy a wonderful day.',
      ]);
      await you.say_and_wait('(ง •̀_•́)ง');
      await printAndWait([
        you.get_colored_name(),
        ' decides not to worry about it and heads out after getting ready.',
      ]);
      println();
      if (minoru) {
        await minoru.say_and_wait('Y(^_^)Y');
        await printAndWait([
          minoru.sex,
          ' welcomes everyone at the academy gate as usual.',
        ]);
        println();
      }
      await you.say_and_wait('...?', true);
      await you.say_and_wait('눈_눈');
      await printAndWait([
        you.get_colored_name(),
        ' senses something strange but cannot put it into words.',
      ]);
      println();
      if (doto) {
        await doto.say_and_wait('(๑•́ωก̀๑)');
        await printAndWait([doto.sex, ' is crying again?']);
        println();
      }
      if (maya) {
        await maya.say_and_wait('(～0～)');
        await printAndWait(
          'Did this little troublemaker stay up all night again?',
        );
        println();
      }
      if (sky) {
        await sky.say_and_wait('<(*ΦωΦ*)>');
        await printAndWait('...What are these expressions supposed to mean?');
        println();
      }
      await you.say_and_wait('...!', true);
      await you.say_and_wait('(#ﾟДﾟ)');
      await printAndWait([
        you.get_colored_name(),
        ' finally realizes that no one has spoken a single word all morning. Instead, emoticons have been appearing directly in the trainer’s mind.',
      ]);
      await you.say_and_wait('...', true);
      await you.say_and_wait('(#`皿´)');
      println();
      if (tachyon) {
        await printAndWait(
          'A certain lab-coat-wearing snake-oil merchant comes to mind.',
        );
        await you.say_and_wait('(‡▼益▼)');
        await printAndWait([
          'Is this another one of ',
          tachyon.sex === 'She' ? 'her' : 'his',
          ' experiments? ',
          you.get_colored_name(),
          ' sets out to find ',
          tachyon.sex === 'She' ? 'her' : 'him',
          '.',
        ]);
        println();
        await chara.say_and_wait('(｢･ω･)｢ Hey');
        printButton('“(｢･ω･)｢ Hey”', 1);
        printButton('“ヾ(＾。^*)”', 2);
        await input();
        await chara.say_and_wait('( •᷄ὤ•᷅)?');
        await printAndWait([
          chara.get_colored_name(),
          ' does not seem to understand what ',
          you.get_colored_name(),
          ' is doing.',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' reaches out to ',
          chara.get_colored_name(),
          '.',
        ]);
        await chara.say_and_wait('(⁄ ⁄•⁄ω⁄•⁄ ⁄)');
        printButton(
          `Explain the situation to ${chara.sex === 'She' ? 'her' : 'him'}.`,
          1,
        );
        await input();
        await you.say_and_wait('(´ﾟωﾟ｀)');
        await you.say_and_wait('⁽⁽◝( •௰• )◜⁾⁾');
        await you.say_and_wait('₍₍◞( •௰• )◟₎₎');
        await printAndWait('The trainer gestures wildly for a while.');
        await you.say_and_wait('╮（╯＿╰）╭');
        println();
        await chara.say_and_wait('【•】_【•】');
        await chara.say_and_wait('(ノ=Д=)ノ┻━┻');
        println();
        await printAndWait([
          'After quite some time, ',
          chara.sex.toLowerCase(),
          ' finally understands and accompanies ',
          you.get_colored_name(),
          '.',
        ]);
        drawLine();
        await printAndWait([
          'They soon arrive at ',
          tachyon.sex === 'She' ? 'her' : 'his',
          ' laboratory.',
        ]);
        await tachyon.say_and_wait('(¦3[▓▓]');
        await you.say_and_wait('(ノಠ∩ಠ)ノ彡(o°o)');
        await tachyon.say_and_wait('Σ(っ °Д °;)っ');
        await chara.say_and_wait('(ಡωಡ)');
        drawLine({ content: 'After a lengthy explanation' });
        await tachyon.say_and_wait('(//▽//)');
        await tachyon.say_and_wait('～(￣▽￣～)～');
        await printAndWait([
          'In the end, ',
          you.get_colored_name(),
          ' is made to record the experience, then receives an antidote and compensation.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' remembers the beloved trainee who spends every day running experiments.',
        ]);
        await you.say_and_wait('(๑•ี_เ•ี๑)');
        drawLine();
        await printAndWait([
          you.get_colored_name(),
          ' easily finds ',
          chara.sex === 'She' ? 'her' : 'his',
          ' laboratory.',
        ]);
        await chara.say_and_wait('⊙▽⊙');
        await you.say_and_wait('(^_^)');
        await chara.say_and_wait('Σ(っ °Д °;)っ');
        await printAndWait('UmaLove TV is officially on the air!');
        await chara.say_as_unknown_and_wait('Awooo(∩∀°╭awoo∀∀awoo∀∀°)awoooo');
        drawLine({
          content: '(Special thanks to Mr. Tom for the voice acting)',
        });
        await chara.say_and_wait('≥﹏≤');
        await you.say_and_wait('╮（﹀＿﹀）╭');
      }
    };
    f.title = 'おかしい日 (A Strange Day)';
    return f;
  })(),
  strange_day2: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you Player
     * @param {CharaTalk} chara Character involved in the event; never Agnes Tachyon
     * @param {CharaTalk} tachyon Agnes Tachyon
     * @param {PrintedSpan} callname Character's name for the player
     * @param {PrintedSpan} callname_32 Agnes Tachyon's name for the player
     * @param {string[]} med_list Potion list in Name × Quantity format
     */
    const f = async (you, chara, tachyon, callname, callname_32, med_list) => {
      await printAndWait([
        you.get_colored_name(),
        ' wakes up as usual and once again feels something is wrong.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' looks around but finds that nothing has changed.',
      ]);
      await printAndWait(
        'It’s just... my hands are itching to investigate something...',
      );
      let flag_a = true,
        horse_hair = false,
        flag_b = true,
        b_line;
      const check_times_in_a = new Array(6).fill(0),
        check_times_in_b = new Array(2).fill(true);
      const cur_line = getLineCount();
      while (flag_a) {
        printInColRows(
          [
            { content: 'What should I investigate?', type: 'text' },
            { config: { width: 8 }, type: 'divider' },
          ],
          [
            {
              config: { width: 3 },
              content: 'WallWallWall',
              type: 'text',
            },
            {
              accelerator: 1,
              config: { align: 'center', showAcc: false, width: 2 },
              content: 'Window',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: 'WallWallWall',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: 'Wall', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: 'Double',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: 'Wall',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: 'Wall', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: 'Bed',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: 'Wall',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: 'Wall', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: 'Bed',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: 'Wall',
              type: 'text',
            },
          ],
          [
            { config: { width: 6 }, content: 'Wall', type: 'text' },
            {
              accelerator: 3,
              config: { align: 'right', showAcc: false, width: 1 },
              content: 'Stand',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: 'Wall',
              type: 'text',
            },
          ],
          [
            { config: { width: 1 }, content: 'Wall', type: 'text' },
            {
              accelerator: 4,
              config: { width: 1, showAcc: false },
              content: 'Mirror',
              type: 'button',
            },
            {
              config: { align: 'right', width: 6 },
              content: 'Wall',
              type: 'text',
            },
          ],
          [
            { config: { width: 7 }, content: 'Wall', type: 'text' },
            {
              accelerator: 5,
              config: { align: 'right', showAcc: false, width: 1 },
              content: 'Bath',
              type: 'button',
            },
          ],
          [
            { config: { width: 3 }, content: 'WallWall', type: 'text' },
            {
              accelerator: 6,
              config: { align: 'center', showAcc: false, width: 2 },
              content: 'Front Door',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: 'WallWall',
              type: 'text',
            },
          ],
          [{ config: { width: 8 }, type: 'divider' }],
        );
        switch (await input()) {
          case 1:
            switch (++check_times_in_a[0]) {
              case 1:
                await printAndWait([
                  you.get_colored_name(),
                  ' opens the window.',
                ]);
                await printAndWait(
                  'Outside, birds are singing and flowers are blooming.',
                );
                await printAndWait([
                  'On a day like this, a trainer like ',
                  you.get_colored_name(),
                  '... should stay home and sleep.',
                ]);
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  ' closes the window, shutting out the sounds outside.',
                ]);
                await printAndWait([
                  'Unfortunately, ',
                  you.get_colored_name(),
                  ' still has work and cannot rest.',
                ]);
                break;
              default:
                await printAndWait(
                  'Having fun opening and closing the window?',
                );
            }
            break;
          case 2:
            switch (++check_times_in_a[1]) {
              case 1:
                await printAndWait('It’s a very large, very soft bed.');
                await printAndWait('...But why did I buy a double bed?');
                break;
              case 2:
                await printAndWait(
                  '...Why is there a strand of tail hair here?',
                );
                await printAndWait([
                  you.get_colored_name(),
                  ' gives it a sniff.',
                ]);
                await printAndWait('...It smells familiar.');
                await printAndWait('Obtained 【Tail Hair】.');
                horse_hair = true;
                break;
              default:
                await printAndWait([
                  'A huge, comfortable bed... and ',
                  you.get_colored_name(),
                  ' probably isn’t the only one who finds it comfortable.',
                ]);
            }
            break;
          case 3:
            switch (++check_times_in_a[2]) {
              case 1:
                await printAndWait(
                  'It’s a bedside table with several treasured photos on top.',
                );
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  ' rummages through every drawer but finds nothing.',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  ' seems to hear someone ask:',
                ]);
                await you.say_as_unknown_and_wait(
                  '...Why are you rummaging through your own home?',
                );
                await printAndWait('...Hopefully that was my imagination.');
                break;
              case 3:
                await printAndWait([
                  you.get_colored_name(),
                  ' searches carefully... and finds 10 UmaCoin in the corner.',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  ' walks away satisfied.',
                ]);
                await printAndWait('Obtained 10 UmaCoin.');
                // FLAGNAME:16 = Current UmaCoin
                add('flag:16', 10);
                break;
              default:
                await printAndWait('There’s only a treasured photograph here.');
            }
            break;
          case 4:
            switch (++check_times_in_a[3]) {
              case 1:
                await printAndWait([
                  'That’s ',
                  you.get_colored_name(),
                  ': an ordinary face, a plain badge, and simple clothes.',
                ]);
                break;
              case 2:
                await printAndWait(
                  'It’s a trainer with a handsome face, elegant clothes, and a gleaming badge.',
                );
                await printAndWait('...Looking good, aren’t we?');
                break;
              case 3:
                await printAndWait([
                  'The person in the mirror has run out of compliments and stares silently at ',
                  you.get_colored_name(),
                  '.',
                ]);
                await printAndWait('...Doesn’t something feel a little off?');
                await printAndWait('I blink, and everything is normal.');
                break;
              case 4:
                // A supernatural event occurs if the involved character is Manhattan Cafe, Copano Rickey, or Sunday Silence
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait([
                    you.get_colored_name(),
                    ' smiles at the mirror.',
                  ]);
                  await printAndWait([
                    'The person in the mirror suddenly smiles back at ',
                    you.get_colored_name(),
                    '...',
                  ]);
                  await printAndWait(
                    '...But the grin stretches far too wide, splitting all the way to the ears.',
                  );
                  await printAndWait([
                    you.sex,
                    ' grips the mirror frame and begins pulling.',
                  ]);
                  await printAndWait([
                    you.get_colored_name(),
                    '...is too terrified to move?',
                  ]);
                  await printAndWait([
                    you.sex === 'She' ? 'Her' : 'His',
                    ' face grows larger and larger, drawing closer.',
                  ]);
                  await printAndWait([
                    '...Until ',
                    you.sex.toLowerCase(),
                    ' gets a good look at ',
                    you.get_colored_name(),
                    '’s face.',
                  ]);
                  await printAndWait([
                    '...',
                    you.sex.toLowerCase(),
                    ' runs away.',
                  ]);
                  await printAndWait('The mirror now reflects nothing at all.');
                  await printAndWait([you.get_colored_name(), ' yawns.']);
                } else {
                  await printAndWait(['That’s ', you.get_colored_name(), '.']);
                }
                break;
              default:
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait(
                    'There’s nothing in the mirror... Who knows when it’ll come back.',
                  );
                  await printAndWait([
                    you.get_colored_name(),
                    ' wanted to fix their appearance too.',
                  ]);
                } else {
                  await printAndWait(['That’s ', you.get_colored_name(), '.']);
                }
            }
            break;
          case 5:
            flag_b = true;
            await printAndWait([
              you.get_colored_name(),
              ' opens the bathroom door and steps inside.',
            ]);
            b_line = getLineCount();
            while (flag_b) {
              printInColRows(
                [
                  {
                    content: [
                      you.get_colored_name(),
                      ' surveys the room. Where should the investigation begin?',
                    ],
                    type: 'text',
                  },
                  { config: { width: 6 }, type: 'divider' },
                ],
                [
                  { config: { width: 3 }, content: 'WallWall', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: 'WallWall',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 1 }, content: 'Wall', type: 'text' },
                  {
                    accelerator: 1,
                    config: { width: 2, showAcc: false },
                    content: 'Toilet',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: 'Wall',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: 'Wall', type: 'text' },
                  {
                    accelerator: 2,
                    config: { align: 'right', width: 2, showAcc: false },
                    content: 'Bathtub',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 1 },
                    content: 'Wall',
                    type: 'text',
                  },
                ],
                [
                  {
                    accelerator: 3,
                    config: { width: 3, showAcc: false },
                    content: 'Hall',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: 'Wall',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: 'WallWall', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: 'WallWall',
                    type: 'text',
                  },
                ],
                [{ config: { width: 6 }, type: 'divider' }],
              );
              switch (await input()) {
                case 1:
                  if (check_times_in_b[0]) {
                    await printAndWait([
                      you.get_colored_name(),
                      ' feels someone watching... but no one is there.',
                    ]);
                    print('I need to pee. Should I use it?');
                    printButton('Use It', 1);
                    printButton('Never Mind', 2);
                    if ((await input()) === 1) {
                      await printAndWait([
                        '...Am I imagining it? ',
                        you.get_colored_name(),
                        ' feels like the toilet is speaking.',
                      ]);
                      await printAndWait('...');
                      await printAndWait('...');
                      await printAndWait([
                        you.get_colored_name(),
                        ' faintly hears it say:',
                      ]);
                      await you.say_as_unknown_and_wait(
                        'Waaah... I’m filthy now...',
                      );
                      await you.say_and_wait(
                        '...Must be my imagination.',
                        true,
                      );
                      check_times_in_b[0] = false;
                    }
                  } else {
                    await printAndWait(
                      'The toilet seems to be crying... I should apologize later.',
                    );
                  }
                  break;
                case 2:
                  if (check_times_in_b[1]) {
                    await printAndWait(
                      'It’s a bathtub. Sitting inside is quite comfortable.',
                    );
                    check_times_in_b[1] = false;
                  } else {
                    await printAndWait([
                      you.get_colored_name(),
                      ' seems to faintly hear:',
                    ]);
                    await you.say_as_unknown_and_wait(
                      'Stop investigating me. I’m only here so the bathroom doesn’t look empty.',
                    );
                    await printAndWait('...How bizarre.');
                  }
                  break;
                case 3:
                  flag_b = false;
              }
              await clear(getLineCount() - b_line);
            }
            break;
          case 6:
            flag_a = false;
        }
        await clear(getLineCount() - cur_line);
      }
      drawLine();
      await printAndWait(
        'I open the front door. For some reason, I’m leaving especially late today.',
      );
      await printAndWait(
        'One glance at the time reveals that I’m almost late.',
      );
      if (horse_hair) {
        await printAndWait([
          you.get_colored_name(),
          ' looks at the front door and wonders whether it should be replaced.',
        ]);
        await you.say_as_passer_by_and_wait('Door', 'Not my problem.');
        await you.say_and_wait('...You’re not even pretending anymore?', true);
      }
      println();
      await printAndWait([you.get_colored_name(), ' reaches the street.']);
      await printAndWait([
        you.get_colored_name(),
        ' suspects ',
        tachyon.get_colored_name(),
        ' has drugged the trainer again.',
      ]);
      await printAndWait('What does this drug do?');
      print(
        [
          { content: ' ', isDivider: true },
          'HouseHouseHouseHouse',
          { isBr: 2 },
          'You',
          { isBlank: 8 },
          'Bread',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: 2 },
          { isBlank: 6 },
          'Tree',
          { isBlank: 6 },
          'Tree',
          { isBlank: 6 },
          'Tree',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        you.get_colored_name(),
        ' encounters ',
        chara.get_colored_name(),
        ', who has clearly been lying in wait!',
      ]);
      print('They’re very close. What should I do?');
      printButton('Run Away', 1);
      printButton('Stay Calm', 2);
      await input();
      await printAndWait([
        '...',
        chara.sex.toLowerCase(),
        ' has already locked onto ',
        you.get_colored_name(),
        '. Nothing will help now!',
      ]);
      print(
        [
          { content: ' ', isDivider: true },
          'HouseHouseHouseHouse',
          { isBr: 2 },
          'You',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: true },
          { isBlank: 4 },
          'Bread',
          { isBr: true },
          { isBlank: 6 },
          'Tree',
          { isBlank: 6 },
          'Tree',
          { isBlank: 6 },
          'Tree',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        chara.sex,
        ' pounces on ',
        you.get_colored_name(),
        '.',
      ]);
      await chara.say_and_wait([
        'I’m sorry, ',
        callname,
        '! It was an accident!',
      ]);
      await chara.say_and_wait(
        'I was running so fast because I’m almost late.',
      );
      await chara.say_and_wait(
        'You smell so good. I want to right now... No, no. I have to hold back a little longer...',
        true,
      );
      await printAndWait(
        'Despite saying that, the trainee makes no effort to move.',
      );
      await you.say_and_wait('It’s okay. Just be more careful.');
      await printAndWait([
        'Watching the ',
        chara.uma_sex_title,
        ' already sniffing ',
        you.get_colored_name(),
        ', the trainer gets a mischievous idea.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' tells ',
        chara.sex === 'She' ? 'her' : 'him',
        ' about the current situation.',
      ]);
      await printAndWait([chara.sex, ' turns bright red.']);
      await chara.say_and_wait('...');
      await chara.say_and_wait('So if I wanted to right now...?', true);
      await chara.say_and_wait('...Oh! I’m going to be late. I have to go...');
      await printAndWait([chara.sex, ' runs off without looking back.']);
      await you.say_and_wait('How cute.');
      if (horse_hair) {
        await you.say_as_passer_by_and_wait(
          'Tail Hair',
          'Very cute indeed. I hope you still think so later.',
        );
        await you.say_and_wait('???');
      }
      drawLine();
      await printAndWait([
        you.get_colored_name(),
        ' arrives at ',
        tachyon.get_colored_name(),
        '’s laboratory.',
      ]);
      if (get('cflag:32:招募状态') === 1) {
        await printAndWait([
          tachyon.sex,
          ' sits with ',
          tachyon.sex === 'She' ? 'her' : 'his',
          ' back turned on a... white plastic chair?',
        ]);
        await tachyon.say_and_wait('You shouldn’t have come.');
        await you.say_and_wait(
          'What did you give me this time? Hand over the antidote.',
        );
        await tachyon.say_and_wait('How many times have we fought by now?');
        await you.say_and_wait('...');
        await tachyon.say_and_wait('If you want it, come and take it.');
        await you.say_and_wait(
          'One more reference and I’m canceling your lunch.',
        );
        await printAndWait([
          tachyon.get_colored_name(),
          ' instantly drops to ',
          tachyon.sex === 'She' ? 'her' : 'his',
          ' knees.',
        ]);
        await printAndWait([
          tachyon.sex,
          ' clings to ',
          you.get_colored_name(),
          '’s leg, secretly looking forward to what might happen.',
        ]);
        await tachyon.say_and_wait(['Waaah, please don’t, ', callname_32, '.']);
        await printAndWait([
          'While walking toward the antidote, ',
          you.get_colored_name(),
          ' accidentally kicks ',
          tachyon.sex === 'She' ? 'her' : 'him',
          '.',
        ]);
        await printAndWait([tachyon.sex, ' finds it intensely exhilarating.']);
        await tachyon.say_and_wait('Oww... Waaah.');
        await printAndWait([
          '...',
          you.get_colored_name(),
          ' decides that drinking the antidote is absolutely necessary.',
        ]);
        await printAndWait([
          'After draining it in one gulp, the world falls silent again. ',
          you.get_colored_name(),
          ' no longer feels compelled to investigate everything nearby.',
        ]);
        await tachyon.say_and_wait('...You drank it? ...Give me a bottle too.');
        await printAndWait([
          'Seeing the disappointment on ',
          tachyon.sex === 'She' ? 'her' : 'his',
          ' face, ',
          you.get_colored_name(),
          ' decides it is time to reboot UmaLove TV.',
        ]);
        await you.say_and_wait('...');
        await tachyon.say_and_wait('Huh? ⊙▽⊙');
        await tachyon.say_as_unknown_and_wait('Awooo(∩∀°╭awoo∀∀awoo∀∀°)awoooo');
        drawLine({
          content: '(Special thanks to Mr. Tom for the voice acting)',
        });
      } else {
        await printAndWait([
          tachyon.sex,
          ' is sitting in a chair, apparently already aware that ',
          you.get_colored_name(),
          ' would come.',
        ]);
        await printAndWait('For a moment, the room falls strangely silent.');
        await you.say_and_wait('Staying silent to look cool?');
        await tachyon.say_and_wait('There’s no need to speak, is there?', true);
        await you.say_and_wait('?');
        await tachyon.say_and_wait(
          'Judging by that expression, it worked.',
          true,
        );
        await tachyon.say_and_wait(
          'This is my latest creation: the Shared Mind Potion.',
          true,
        );
        await tachyon.say_and_wait(
          'The results look good. Don’t hit me yet—here’s the antidote.',
        );
        await printAndWait([
          tachyon.sex,
          ' points to a chart and the potion beside it.',
        ]);
        await printAndWait([
          'After draining it in one gulp, the world falls silent again. ',
          you.get_colored_name(),
          ' no longer feels compelled to investigate everything nearby.',
        ]);
        await printAndWait(
          'Even so, the more I think about it, the angrier I get.',
        );
        println();
        print('Obtained several expensive potions:');
        for (const med of med_list) {
          print(`· ${med}`);
        }
        await waitAnyKey();
      }
    };
    f.title = 'おかしい日 (A Strange Day) 2';
    return f;
  })(),
  wind_welcome: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you Player
     * @param {boolean} race_week Whether there is a race this week and at least one of the Three Goddesses has not manifested
     */
    const f = async (you, race_week) => {
      await printAndWait([
        you.get_colored_name(),
        ' feels a gentle breeze carrying the scent of fresh grass from the track.',
      ]);
      printButton('“What beautiful weather.” (Trainee Mood +1)', 1);
      if (race_week) {
        printButton(
          '“I hope today’s race goes well too.” (??? Fondness +50)',
          2,
        );
      }
      return [await input()];
    };
    f.title = 'A Visit from the Wind';
    return f;
  })(),
  we_are_one: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      await printAndWait([
        'Upon returning to the training room, ',
        chara.get_colored_name(),
        ' rises from the sofa with a bath towel draped over ',
        chara.sex === 'She' ? 'her' : 'his',
        ' head and beams at ',
        you.get_colored_name(),
        '.',
      ]);
      println();
      await chara.say_and_wait([
        'I did really well today too, didn’t I, ',
        callname,
        '? Don’t you think I deserve a nice reward~?',
      ]);
      printButton(
        '“You worked hard today. Get some rest, then let’s go have fun!”',
        1,
      );
      print('(Mood -1, Fondness +50)');
      printButton('“So, what reward do you want?”', 2);
      const ret = [await input()];
      if (ret[0] === 2) {
        await printAndWait([
          'The playful question earns an entirely unexpected answer.',
        ]);
        println();
        await chara.say_and_wait([
          'I want to become ',
          callname,
          '’s “bride.” How does that sound?',
        ]);
        println();
        await printAndWait([
          'The grinning ',
          chara.uma_sex_title,
          ' takes ',
          you.get_colored_name(),
          '’s hand and places it against ',
          chara.sex === 'She' ? 'her' : 'his',
          ' body.',
        ]);
        println();
        await chara.say_and_wait([
          'We’re two halves of one whole, right? That means we must want the same thing right now, right? No matter what ',
          you.get_colored_name(),
          ' says, I can’t hold back anymore!!!',
        ]);
        println();
        await printAndWait([
          chara.sex,
          ' locks the door with ',
          chara.sex === 'She' ? 'her' : 'his',
          ' tail, grabs ',
          you.get_colored_name(),
          ', and lunges toward the nearby sofa.',
        ]);
        println();
        await chara.say_and_wait([
          'Tear off my “veil” and treat me like your wife~',
        ]);
        println();
        await printAndWait([
          'By the time ',
          you.get_colored_name(),
          ' realizes what is happening, it is already too late.',
        ]);
        println();
        printButton('“Calm down. I think we have other things to do...”', 1);
        printButton(
          'Roughly tear away the bath towel serving as her veil. It’s time to show her who rules the bed!',
          2,
        );
        ret.push(await input());
        if (ret[1] === 1) {
          await printAndWait([
            'After hearing ',
            you.get_colored_name(),
            ' refuse, the ',
            chara.uma_sex_title,
            ' holding the trainer continues to smile.',
          ]);
          await chara.say_and_wait(
            'You don’t want me? Then our bond still isn’t strong enough. I know—if we keep doing it until we truly become one, everything will be fine, right?',
          );
        }
      }
      return ret;
    };
    f.title = 'Two Hearts, One Body';
    return f;
  })(),
  chocolate: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you Player
     * @param {number} max_lover Character with the highest Infatuation among Air Shakur, Transcend, and Dream Journey
     * @param {number} max_love Highest Infatuation among Air Shakur, Transcend, and Dream Journey; -1 if none have been recruited
     */
    const f = async (you, max_lover, max_love) => {
      await printAndWait(
        'It’s Valentine’s Day, but unfortunately work doesn’t stop for holidays.',
      );
      await printAndWait(
        'Being a trainer sometimes means watching out for people with “ulterior motives.” Meanwhile, UmaSocial is full of couples flaunting their sickeningly sweet romance.',
      );
      printButton(
        '“It’s all just noise. Today is another day to give everything for my trainee.” (Energy & Motivation +50)',
        1,
      );
      printButton(
        '“I’ve got nothing better to do. Might as well join the fun with a post.”',
        2,
      );
      const ret = await input();
      if (ret === 2) {
        if (max_love === -1) {
          await printAndWait([
            '“Opened the fridge and discovered espresso is still the most romantic thing in my life.”',
          ]);
          await printAndWait(
            'I casually write a post and publish it from an alternate account.',
          );
        } else if (max_love < 60) {
          await printAndWait(
            '“Another productive day at work. What? It’s Valentine’s Day? I was about to order chocolate, then realized my contacts list is empty!”',
          );
          await printAndWait(
            'I casually write a post and publish it from an alternate account.',
          );
          println();
          await printAndWait(
            'The next day, an anonymous package arrives. Inside is a beautifully packaged chocolate.',
          );
          println();
          await printAndWait('How strange. Who could have sent it...?');
        } else {
          await printAndWait(
            '“Year N of my true-love chocolate getting lost in the mail. Bought some green-juice Pocky at the convenience store to cheer myself on.”',
          );
          await printAndWait(
            'I casually write a post and publish it from an alternate account.',
          );
          println();
          switch (max_lover) {
            case 36:
              // Air Shakur
              await printAndWait(
                'The next day, an anonymous package arrives. Inside is a small, exquisitely crafted chocolate.',
              );
              break;
            case 80:
              // Transcend
              await printAndWait(
                'The next day, an anonymous package arrives. Inside is a chocolate shaped like a pin badge.',
              );
              break;
            case 119:
              // Dream Journey
              await printAndWait(
                'The next day, an anonymous package arrives. Inside is an exceptionally luxurious chocolate.',
              );
          }
          println();
          await printAndWait(['How strange. Who could have sent it...?']);
        }
      }
      return [ret];
    };
    f.title = 'Chocolate!';
    return f;
  })(),
  sakura_regret: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara Character
     * @param {PrintedSpan} callname Character's name for the player
     */
    const f = async (chara, callname) => {
      await printAndWait([
        'At night, ',
        chara.get_colored_name(),
        ' hides beneath the blankets in bed.',
      ]);
      println();
      await chara.say_and_wait([
        callname,
        ', why... won’t you accept my love...?',
      ]);
      println();
      await chara.say_and_wait([
        'We created all those wonderful memories together...',
      ]);
      println();
      await chara.say_and_wait(['I feel... so lonely...']);
      println();
      await printAndWait([
        'Without ',
        chara.sex === 'She' ? 'her' : 'him',
        ' noticing, the pillow quietly grows damp.',
      ]);
      println();
    };
    f.title = 'A Sakura’s Regret';
    return f;
  })(),
  nice_weekend: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara 爱丽数码或目白多伯
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        chara.get_colored_name(),
        `'s doujin deadline is closing in, so ${chara.sex.toLowerCase()} invites `,
        you.get_colored_name(),
        ' to spend the weekend grinding it out in ',
        `${chara.sex === 'She' ? 'her' : 'his'} studio.`,
      ]);
      printButton(
        'Can`t let it mess with training—this is necessary. (Agree)',
        1,
      );
      printButton('A break is a break. Overtime? Absolutely not! (Refuse)', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait(
          'As a corporate drone, deadline dread is carved into your bones; as a Trainer, helping your trainee is just part of the job!',
        );
        await printAndWait(
          'At last, as Sunday draws to a close, the two of you finish the book.',
        );
        const love = get(`love:${chara.id}`),
          relation = get(`relation:${chara.id}:0`);
        if (love >= 50 && love * (get('flag:极端行为限制') || 1) >= relation) {
          await printAndWait([
            you.get_colored_name(),
            ' can`t remember when sleep hit—only that your trainee dragged ',
            you.get_colored_name(),
            ' into the work. Maybe ',
            you.get_colored_name(),
            ' just wasn`t cut out for this stuff. Maybe ',
            you.get_colored_name(),
            ' was simply exhausted. Either way, when ',
            you.get_colored_name(),
            ' comes to, it`s already early Monday morning, every muscle aching from overwork.',
          ]);
          println();
          await printAndWait([
            'Then, all of a sudden, ',
            you.get_colored_name(),
            ' notices something much heavier on top.',
          ]);
          println();
          printButton(
            'Too tired? Better rest a little longer. (Ignore the odd weight)',
            1,
          );
          printButton(
            'Arm fall asleep? Better stretch a bit. (Check the odd weight)',
            2,
          );
          ret.push(await input());
          if (ret.at(-1) === 1) {
            await printAndWait([
              you.get_colored_name(),
              ' drifts in and out, eventually waking properly in ',
              chara.get_colored_name(),
              `'s studio. Dinner is already waiting—but `,
              you.get_colored_name(),
              ' still feels completely drained of Motivation...',
            ]);
          } else {
            await printAndWait([
              you.get_colored_name(),
              ' shifts a little and finds ',
              chara.get_colored_name(),
              ' curled up against ',
              you.get_colored_name(),
              `'s side.`,
            ]);
            await printAndWait([
              'Naked. Curled. Right against ',
              you.get_colored_name(),
              '.',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' is about to say something when the room goes dark and a sweet ache shoots through the lower back—',
            ]);
            await chara.say_and_wait([
              callname,
              ' is awake? Then let`s start round two ❤️~',
            ]);
          }
        } else {
          if (love >= 50) {
            await printAndWait([
              'The book is a sweet slice-of-life between a Trainer and an ',
              chara.uma_sex_title,
              '—and it`s a huge hit! Though for some reason the Trainer`s face looks... a little like ',
              you.get_colored_name(),
              '? (UmaCoin +150)',
            ]);
          }
          if (relation >= 550) {
            await printAndWait([
              'After the sale wraps up, ',
              chara.get_colored_name(),
              ' wants to treat ',
              you.get_colored_name(),
              ' to dessert as thanks. (Obtained [Espresso] ×5)',
            ]);
          }
        }
      }
      return ret;
    };
    f.title = 'Happy Weekend Starts Now!';
    return f;
  })(),
  kamen_rider: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you Player
     * @param {boolean} no_ero_item Whether the player has no sex toys
     */
    const f = async (you, no_ero_item) => {
      const ret = [];
      await printAndWait([
        'While passing through the shopping district, I notice a store running an event:',
      ]);
      await printAndWait([
        '“Become a Masked Rider and Bring Smiles to Children~”',
      ]);
      await printAndWait([
        'The owner explains that the event is meant to cheer up local children. They have plenty of costumes, but not enough volunteers.',
      ]);
      await printAndWait([
        'They hope the event will bring a little more joy into the children’s lives.',
      ]);
      await printAndWait([
        'Volunteers will also get to try on a Masked Rider costume of their choice.',
      ]);
      printButton('“I have time. I’ll help out.”', 1);
      printButton('“No thanks. A lively event like this isn’t for me.”', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          'The owner thanks ',
          you.get_colored_name(),
          ' for volunteering and leads the trainer to a changing room to choose a costume—',
        ]);
        printButton('“Carrot Hero!” (Reputation +15)', 1);
        printButton('“Magical Girl—Masked Monster Edition!” (UmaCoin +25)', 2);
        printButton(
          '“??? A rather unusual set of equipment” (Reputation +20, Mood +1 for certain trainees)',
          3,
          { disabled: no_ero_item },
        );
        ret.push(await input());
        switch (ret[1]) {
          case 1:
            await printAndWait([
              'The costume is a huge hit! Were some of those children familiar students?!',
            ]);
            break;
          case 2:
            await printAndWait([
              'The costume is a huge hit, though getting into it was a real struggle...',
            ]);
            break;
          case 3:
            await printAndWait([
              'With help from the staff, I squeeze into a bodysuit and several strange scraps of fabric. The piece that looks like underwear is actually supposed to cover my face?!',
            ]);
            await printAndWait([
              'It works wonderfully as the store mascot, but I can’t shake the feeling that I’ve lost something important...',
            ]);
        }
      }
      return ret;
    };
    f.title = 'Masked (?) Rider!';
    return f;
  })(),
  big_sale: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you Player
     * @param {string} uma Umamusume or Umamusuko
     * @param {boolean} disabled No trainee is currently in training, or the player has fewer than 10 UmaCoin
     */
    const f = async (you, uma, disabled) => {
      await printAndWait('While out, I pass through the shopping district...');
      await printAndWait('Something seems different today.');
      await you.say_as_passer_by_and_wait(
        'Produce Vendor',
        'Step right up! Fresh fruit and vegetables at rock-bottom prices!',
      );
      await printAndWait([
        you.get_colored_name(),
        ' approaches the stall with interest.',
      ]);
      await printAndWait(
        'The produce stand is piled high with all kinds of fresh, high-quality fruit and vegetables.',
      );
      await you.say_as_passer_by_and_wait(
        'Produce Vendor',
        'Fresh, delicious, and affordable! So, how about buying some?',
      );
      printButton(`Buy Carrots (UmaCoin -10, Trainee ${uma} Speed +20)`, 1, {
        disabled,
      });
      printButton(`Buy Garlic (UmaCoin -10, Trainee ${uma} Stamina +20)`, 2, {
        disabled,
      });
      printButton(`Buy Potatoes (UmaCoin -10, Trainee ${uma} Power +20)`, 3, {
        disabled,
      });
      printButton(`Buy Chilies (UmaCoin -10, Trainee ${uma} Guts +20)`, 4, {
        disabled,
      });
      printButton(`Buy Strawberries (UmaCoin -10, Trainee ${uma} Wit +20)`, 5, {
        disabled,
      });
      printButton('Can’t Afford It—Leave', 6);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            you.get_colored_name(),
            ' decides to buy enough fresh carrots to satisfy a growing ',
            uma,
            '’s appetite.',
          ]);
          await printAndWait([
            'After hauling the huge bag of carrots back to the academy, ',
            you.get_colored_name(),
            ' makes a speedy carrot hamburger steak and carrot juice for the assigned ',
            uma,
            '.',
          ]);
          await printAndWait('It’s a big hit!');
          break;
        case 2:
          await printAndWait([
            you.get_colored_name(),
            ' decides to buy enough fresh garlic to satisfy a growing ',
            uma,
            '’s appetite.',
          ]);
          await printAndWait([
            'After hauling the huge bag of garlic back to the academy, ',
            you.get_colored_name(),
            ' makes an enormous, stamina-packed bowl of garlic ramen for the assigned ',
            uma,
            '.',
          ]);
          await printAndWait('It’s a big hit!');
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            ' decides to buy enough fresh potatoes to satisfy a growing ',
            uma,
            '’s appetite.',
          ]);
          await printAndWait([
            'After hauling the huge bag of potatoes back to the academy, ',
            you.get_colored_name(),
            ' makes a power-packed mashed-potato rice bowl for the assigned ',
            uma,
            '.',
          ]);
          await printAndWait('It’s a big hit!');
          break;
        case 4:
          await printAndWait([
            you.get_colored_name(),
            ' decides to buy enough fresh chilies to satisfy a growing ',
            uma,
            '’s appetite.',
          ]);
          await printAndWait([
            'After bringing the chilies back to the academy, ',
            you.get_colored_name(),
            ' makes terrifyingly spicy mapo tofu for the assigned ',
            uma,
            '.',
          ]);
          await printAndWait('It’s a big hit!');
          break;
        case 5:
          await printAndWait([
            you.get_colored_name(),
            ' decides to buy enough fresh strawberries to satisfy a growing ',
            uma,
            '’s appetite.',
          ]);
          await printAndWait([
            'After hauling the huge bag of strawberries back to the academy, ',
            you.get_colored_name(),
            ' makes some remarkably brainy-looking strawberry ice cream for the assigned ',
            uma,
            '.',
          ]);
          await printAndWait('It’s a big hit!');
          break;
        case 6:
          if (!disabled) {
            await printAndWait([
              you.get_colored_name(),
              ' remembers the assigned trainee’s appetite and quietly slips away.',
            ]);
          } else {
            await printAndWait([
              'Unfortunately, there’s no one who needs any.',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' shakes their head and walks away.',
            ]);
          }
      }
      return [ret];
    };
    f.title = 'Shopping District Blowout Sale';
    return f;
  })(),
  justice: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you Player
     * @param {CharaTalk} chara Character
     * @param {CharaTalk} minoru Hayakawa Tazuna
     * @param {PrintedSpan} call_301 A typical character's name for Hayakawa Tazuna
     */
    const f = async (you, chara, minoru, call_301) => {
      chara.name =
        chara.sex_code === 1 ? 'Strange Umamusuko' : 'Strange Umamusume';
      await printAndWait([
        'While walking down the road, ',
        you.get_colored_name(),
        ' suddenly spots a trainer being chased by an ',
        chara.uma_sex_title,
        '.',
      ]);
      await printAndWait([
        'The trainer is clearly exhausted and could be caught by the pursuing ',
        chara.uma_sex_title,
        ' at any moment.',
      ]);
      await printAndWait([
        'Then the trainer spots ',
        you.get_colored_name(),
        '. Hope flashes across the trainer’s face as they run over.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Unknown Trainer',
        'Please, help me! I don’t want to go back there... to that basement...',
      );
      await printAndWait([
        you.get_colored_name(),
        ' looks between the desperate stranger and the rapidly approaching, red-eyed ',
        chara.uma_sex_title,
        ', then chooses to...',
      ]);
      printButton('Help the Unknown Trainer', 1);
      printButton(`Help ${chara.name}`, 2);
      printButton('Pretend Not to Notice', 3);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            'Despite not knowing what happened, ',
            you.get_colored_name(),
            ' hesitantly agrees to help a fellow trainer.',
          ]);
          await chara.say_and_wait(
            'Would you please give my trainer back? I... still have a few things to discuss with them...',
          );
          await printAndWait([
            you.get_colored_name(),
            ' swallows nervously while staring at the dangerous-looking ',
            chara.uma_sex_title,
            '.',
          ]);
          await you.say_and_wait([
            'Um, whatever the problem is, you can talk it through calmly. Otherwise, I’ll call ',
            call_301,
            '.',
          ]);
          await printAndWait([
            'Though ',
            you.get_colored_name(),
            ' is trembling too, instinct leads to the best possible choice—invoking ',
            minoru.get_colored_name(),
            '’s name.',
          ]);
          await printAndWait([
            'Sure enough, ',
            you.get_colored_name(),
            ' sees the ',
            chara.uma_sex_title,
            ' hesitate.',
          ]);
          await chara.say_and_wait(
            'Trainer... you can’t escape. Next time, you won’t be lucky enough to find such a kind colleague...',
          );
          await printAndWait([
            'The ',
            chara.uma_sex_title,
            '’s piercing gaze seems to pass straight through ',
            you.get_colored_name(),
            ' and lock onto the trainer hiding behind them.',
          ]);
          await printAndWait([
            'Then ',
            chara.sex.toLowerCase(),
            ' simply turns around and leaves.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            ' and the trainer behind them both breathe a sigh of relief.',
          ]);
          await you.say_as_passer_by_and_wait(
            'Unknown Trainer',
            'Thank you so much. Please accept this small token of my gratitude...',
          );
          await printAndWait([
            'The unknown trainer pulls out a wallet and presses it into ',
            you.get_colored_name(),
            '’s hands, then hurries away before the trainer can react.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            ' wanted to ask what happened, but it seems that chance is gone.',
          ]);
          println();
          await printAndWait('Obtained 100 UmaCoin!');
          break;
        case 2:
          await chara.say_and_wait(
            'Would you please give my trainer back? I... still have a few things to discuss with them...',
          );
          await printAndWait([
            'Faced with the dangerously intense ',
            chara.uma_sex_title,
            ', ',
            you.get_colored_name(),
            ' cannot bring themselves to resist.',
          ]);
          await you.say_and_wait('I’ll leave you two to it. Excuse me.');
          await printAndWait([
            'With that, ',
            you.get_colored_name(),
            ' quietly steps aside, exposing the unknown trainer behind them.',
          ]);
          await printAndWait([
            'The strange ',
            chara.uma_sex_title,
            ' immediately grabs the trainer’s arm and forcefully pulls them close.',
          ]);
          await chara.say_and_wait(
            'Trying to sneak away... Such a naughty trainer needs to be properly “taken care of”...',
          );
          await printAndWait([
            'Barely daring to breathe, ',
            you.get_colored_name(),
            ' watches the ',
            chara.uma_sex_title,
            ' affectionately rub ',
            chara.sex === 'She' ? 'her' : 'his',
            ' cheek against the trainer’s arm while dragging them away.',
          ]);
          await printAndWait([
            'Suddenly, the ',
            chara.uma_sex_title,
            ' seems to remember something, pulls out an item, and tosses it toward ',
            you.get_colored_name(),
            '.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            ' fumbles but manages to catch it.',
          ]);
          await chara.say_and_wait(
            'Kind trainer, please be sure never to neglect your assigned trainee, all right? Hehe...',
          );
          await printAndWait([
            'Still shaken, ',
            you.get_colored_name(),
            ' watches the pair disappear into the distance.',
          ]);
          break;
        case 3:
          await printAndWait([
            'Unable to face such a bizarre situation, ',
            you.get_colored_name(),
            ' hurriedly pulls out a phone, pretends to be on a call, and quietly slips away.',
          ]);
          await printAndWait([
            'Only after the strange ',
            chara.uma_sex_title,
            ' and unknown trainer vanish from sight does ',
            you.get_colored_name(),
            ' finally begin to relax.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            ' understands that refusing to help either side effectively meant helping the strange ',
            chara.uma_sex_title,
            '.',
          ]);
          await printAndWait([
            'Still, ',
            you.get_colored_name(),
            ' spends the entire day thinking about the incident and somehow feels more alert than usual.',
          ]);
      }
      if (get('exp:0:监禁次数') === 0) {
        await printAndWait([
          'Later, ',
          you.get_colored_name(),
          ' suddenly wonders whether they might someday make the same mistake—and meet the same fate.',
        ]);
      }
      return [ret];
    };
    f.title = 'Standing Up for What’s Right';
    return f;
  })(),
};
