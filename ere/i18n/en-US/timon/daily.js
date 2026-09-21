/**
 * @file Daily Timon
 * @author 雞雞
 * @author 幽白書
 * @author Mr.E.
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { buff_colors, money_color } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} minoru
   */
  good_morning(chara, you, minoru) {
    const buffer = [
      /** @author 雞雞 */
      {
        h() {
          era.print([chara.get_colored_name(), ' gives a thumbs-up.']);
        },
      },
      {
        h() {
          era.print([
            chara.get_colored_name(),
            ' looks completely stuffed, with a round, bulging belly.',
          ]);
        },
      },
      {
        h() {
          era.print([
            chara.get_colored_name(),
            ' is engrossed in reading something.',
          ]);
        },
      },
      {
        // CFLAGNAME:65 = Growth Stage
        c: () => era.get(`cflag:${chara.id}:65`) < 5,
        h() {
          era.print([
            chara.get_colored_name(),
            ' is happily chatting with some schoolmates.',
          ]);
        },
      },
      {
        // CFLAGNAME:65 = Growth Stage
        c: () => chara.id !== 301 && !(era.get('cflag:301:48') < 3 * 48),
        h() {
          era.print([
            chara.get_colored_name(),
            ' is asking ',
            minoru.get_colored_name(),
            ' about something at reception.',
          ]);
        },
      },
      /** @author 幽白書 */
      {
        // TALENTNAME:0 = Emotionality
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' excitedly tells ',
            you.get_colored_name(),
            ' a joke from TV over the weekend, only to burst out laughing halfway through.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' starts talking about a TV drama watched over the weekend, then begins crying all over again.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' spots ',
            chara.get_colored_name(),
            ' huddling with several other ',
            chara.uma_sex_title,
            's, apparently telling ghost stories. Before long, ',
            chara.get_colored_name(),
            ` has gone pale with fear.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' notices a twig caught in ',
            chara.get_colored_name(),
            `'s hair. `,
            chara.get_colored_name(),
            ` doesn't realize it is there until `,
            you.get_colored_name(),
            ' removes it.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' scolds ',
            chara.get_colored_name(),
            ' for changing clothes in the training room, only to receive a genuinely puzzled look in response.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' seems to be discussing romantic gossip with some other ',
            chara.uma_sex_title,
            's. ',
            you.get_colored_name(),
            ' watches ',
            chara.get_colored_name(),
            ' relentlessly question one of the ',
            chara.uma_sex_title,
            's about their love life until the poor girl turns bright red and flees.',
          ]);
        },
      },
      {
        // TALENTNAME:1 = Confidence
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            'As ',
            you.get_colored_name(),
            ' enters the training room, ',
            chara.get_colored_name(),
            ` is once again making disparaging remarks about ${chara.sex === 'She' ? 'herself' : 'himself'}.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            'When ',
            you.get_colored_name(),
            ' greets ',
            chara.get_colored_name(),
            `, ${chara.sex.toLowerCase()} inexplicably offers words of comfort.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' pats ',
            chara.get_colored_name(),
            ` on the head. Somehow mistaking it for punishment, ${chara.get_colored_name()} squeezes ${chara.sex === 'She' ? 'her' : 'his'} eyes shut and trembles.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ` stands proudly in the middle of the training grounds as though ${chara.sex.toLowerCase()} rules the world.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' stands in the bleachers, offering strongly opinionated critiques of how the other ',
            chara.uma_sex_title,
            's run.',
          ]);
        },
      },
      {
        c: () =>
          // CFLAGNAME:1 = Race
          era.get(`cflag:${chara.id}:1`) > 0 &&
          era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ` sighs that there is no one at the academy who can rival ${chara.sex.toLowerCase()}.`,
          ]);
        },
      },
      {
        // TALENTNAME:2 = Pain Sensitivity
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' takes a tumble. When ',
            chara.get_colored_name(),
            ' looks up, ',
            you.get_colored_name(),
            ` sees tears welling in ${chara.sex === 'She' ? 'her' : 'his'} eyes.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' is playing with friends, where the loser gets flicked on the forehead. After losing, ',
            chara.get_colored_name(),
            ` looks frightened.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' is discussing movies with friends. At the mention of a gruesome scene, ',
            chara.get_colored_name(),
            `'s ears instinctively flatten.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' takes a nasty fall. Just as ',
            you.get_colored_name(),
            ' begins to worry, ',
            chara.get_colored_name(),
            ` brushes ${chara.sex === 'She' ? 'herself' : 'himself'} off and gets back up as though nothing happened.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' falls over, so ',
            you.get_colored_name(),
            ' tends to ',
            chara.get_colored_name(),
            `'s injuries. By the time the treatment is finished, `,
            chara.get_colored_name(),
            ' has somehow fallen asleep.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' is sharing tips for enduring pain... It is an odd topic, but quite a crowd is listening intently and taking notes.',
          ]);
        },
      },
      {
        // TALENTNAME:3 = Fear Sensitivity
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ` hides in a corner of the field, seemingly unwilling to interact with the relentlessly cheerful people around ${chara.sex === 'She' ? 'her' : 'him'}.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ` sits curled up alone in the shade, tracing spiral after spiral in the dirt with a twig.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' finds ',
            chara.get_colored_name(),
            ` quietly talking to ${chara.sex === 'She' ? 'her' : 'his'} reflection in a vending machine.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' catches ',
            chara.get_colored_name(),
            ` secretly blowing dandelion seeds into the sky. ${chara.sex} turns around with a radiant, mischievous grin.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' rolls a training tire across the lawn like an enormous hoop while humming an idol song hopelessly off-key.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ` skips along with a sports drink in ${chara.sex === 'She' ? 'her' : 'his'} arms, ${chara.sex === 'She' ? 'her' : 'his'} hair streaming in the breeze.`,
          ]);
        },
      },
      {
        // TALENTNAME:4 = Shame Tolerance
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ` reads behind the Trainer's office curtains, then snaps the book shut and clutches it to ${chara.sex === 'She' ? 'her' : 'his'} chest at the sound of footsteps.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' carefully adjusts the angle of a vending machine coin slot over and over, making sure the coin will drop straight in without a sound.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            "Something shifts behind a cabinet in the Trainer's office. ",
            chara.get_colored_name(),
            ` is changing clothes behind it and turns bright red when `,
            you.get_colored_name(),
            ' discovers ',
            chara.get_colored_name(),
            '.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' suddenly hoists ',
            you.get_colored_name(),
            ' onto ',
            chara.get_colored_name(),
            `'s back and charges toward the training grounds, promising to let `,
            you.get_colored_name(),
            ' experience the thrill of the wind at speed.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' lines up several vaulting horses and gathers the ',
            chara.uma_sex_title,
            's for a contest to see who can clear the most in one jump.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' sits at the entrance to the training grounds, refusing passage to any ',
            chara.uma_sex_title,
            ' who cannot tell a terrible joke.',
          ]);
        },
      },
      {
        // TALENTNAME:5 = Hostility
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' glares at passing ',
            chara.uma_sex_title,
            `s. Every girl caught in ${chara.sex.toLowerCase()}'s glare lets out a frightened cry.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' spray-paints graffiti on a hurdle. Upon noticing ',
            you.get_colored_name(),
            ', ',
            chara.get_colored_name(),
            ` defiantly smears the paint on ${chara.sex === 'She' ? 'her' : 'his'} fingertips across the wall.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            'A ripping sound comes from the locker room. ',
            chara.get_colored_name(),
            ' is cutting ragged holes into ',
            chara.get_colored_name(),
            `'s uniform cuffs, leaving loose threads all over the floor.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            'Warm yellow light spills from the equipment room, where ',
            chara.get_colored_name(),
            ' is wrapping old weight plates in bandages to cushion their edges.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' stands beside the training grounds with an armful of sports drinks, offering one to every sweaty ',
            chara.uma_sex_title,
            ' who passes.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' clears loose stones from the training grounds so no one is injured by a sharp rock if they fall.',
          ]);
        },
      },
      {
        // TALENTNAME:6 = Defiance
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' has crossed out everything on ',
            you.get_colored_name(),
            "'s schedule and replaced it with ",
            chara.get_colored_name(),
            "'s own plans.",
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            "'s office is crammed with all sorts of things ",
            chara.get_colored_name(),
            ' placed there without asking.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            'Although they never discussed it beforehand, ',
            chara.get_colored_name(),
            ' casually assumes that ',
            you.get_colored_name(),
            ' will go shopping with ',
            chara.get_colored_name(),
            ' after school today.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' finds ',
            chara.get_colored_name(),
            " standing outside the Trainer's office, repeatedly raising ",
            chara.get_colored_name(),
            `'s hand but never daring to knock.`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' is startled by a sprinkler suddenly turning on and falls to the ground, utterly bewildered.',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            "A locker in the Trainer's office trembles slightly. ",
            chara.get_colored_name(),
            ' is curled up inside, hiding from an unexpected invitation to run together.',
          ]);
        },
      },
    ];
    get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  select(chara, you, is_sleep) {
    if (is_sleep) {
      era.print([chara.get_colored_name(), ' is fast asleep.']);
    } else {
      const buffer = [
        {
          h() {
            era.print([
              chara.get_colored_name(),
              ' greets ',
              you.get_colored_name(),
              '.',
            ]);
          },
        },
        {
          h() {
            era.print([
              chara.get_colored_name(),
              ' nods to ',
              you.get_colored_name(),
              ', ready whenever needed.',
            ]);
          },
        },
      ];
      get_random_entry(buffer).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_gn_sex_message: (chara, you) => [
    'At the end of a busy day, ',
    you.get_colored_name(),
    ' walks ',
    chara.get_colored_name(),
    ' back to the dorm. At the entrance, ',
    chara.get_colored_name(),
    ' shyly asks to spend the night together...',
  ],
  gn_sex_yes: 'Accept',
  gn_sex_no: 'Decline',
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async gn_sex_accept(chara, you) {
    await era.printAndWait([
      'Under the warm gaze of the others, a blushing ',
      chara.get_colored_name(),
      ' takes ',
      you.get_colored_name(),
      ' by the arm, and the two slowly walk away...',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async gn_sex_force(chara, you, callname) {
    await era.printAndWait([
      'Whoa! ',
      chara.get_colored_name(),
      "'s expression suddenly changes. ",
      chara.get_colored_name(),
      ' grabs ',
      you.get_colored_name(),
      ` and drags ${chara.sex.toLowerCase()} outside by force. It seems `,
      callname,
      ' is about to be put to some very intimate work!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  async gn_sex_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' turns away dejectedly and heads back to the dorm...',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} c_awake
   * @param {boolean} y_awake
   */
  good_night_normal(chara, you, c_awake, y_awake) {
    if (c_awake && y_awake) {
      era.print([
        'At the end of a busy day, ',
        you.get_colored_name(),
        ' walks ',
        chara.get_colored_name(),
        ' back to the dorm. After saying good night, the two go their separate ways.',
      ]);
    } else if (y_awake) {
      era.print([
        chara.get_colored_name(),
        ' is sleeping so peacefully that ',
        you.get_colored_name(),
        ` can't bring ${chara.sex.toLowerCase()}self to wake ${chara.sex === 'She' ? 'her' : 'him'}. After carrying ${chara.sex === 'She' ? 'her' : 'him'} back to the dorm, the Trainer returns to the apartment rubbing a sore shoulder.`,
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' is completely out cold, only dimly hearing ',
        chara.get_colored_name(),
        ' say goodbye.',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' helps ',
      chara.get_colored_name(),
      ` study in the Trainer's office and guides ${chara.sex.toLowerCase()} through a difficult problem.`,
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_prepare(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      " prepare for the next race in the Trainer's office. They will need to give it everything they have.",
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  async talk(chara, you, is_sleep) {
    if (is_sleep) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' is sleeping soundly, letting out soft snores.',
      ]);
    } else {
      // BASENAME:0 = Stamina
      const low_stamina =
        era.get(`base:${chara.id}:0`) < 0.45 * era.get(`maxbase:${chara.id}:0`);
      // CFLAGNAME:48 = Training Turn Counter
      const in_edu = era.get(`cflag:${chara.id}:48`) < 3 * 48;
      const buffer = [
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' looks exhausted. It is time to let ',
              chara.get_colored_name(),
              ' rest.',
            ]);
          },
        },
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' gazes pleadingly at ',
              you.get_colored_name(),
              ', hoping to be allowed some rest.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ` looks utterly miserable, with ${chara.sex === 'She' ? 'her' : 'his'} hair and coat a complete mess. ${chara.sex}'s motivation could hardly be lower.`,
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ` looks gloomy and struggles through ${chara.sex === 'She' ? 'her' : 'his'} warm-up. ${chara.sex}'s motivation is low.`,
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 0,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ` looks rather tense and a little nervous. ${chara.sex}'s motivation is average.`,
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' happily warms up on the track. Her motivation is high.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ` bounces excitedly around the track. ${chara.sex}'s motivation is sky-high!`,
            ]);
          },
        },
        {
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              ' looks as relaxed as ever.',
            ]);
          },
        },
      ];
      await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_gift(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' is delighted by the gift from ',
      you.get_colored_name(),
      '.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_cook(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      " cook together in the Trainer's office. Today, they settle on some healthy organic carrots.",
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_rest(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      " relax together in the Trainer's office, spending some time thinking about absolutely nothing.",
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_game(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      " play video games together in the Trainer's office and have a wonderful time.",
    ]);
  },
  bm_money_message: 'How much would you like to borrow?',
  bm_time_message: 'For how long?',
  get_bm_confirm_message: (amount, time, repay) => [
    'Borrow ',
    { ...get_abbr_number(amount), color: money_color },
    ' UmaCoins and repay ',
    { ...get_abbr_number(repay), color: money_color },
    ' UmaCoins per week for ',
    { content: time.toLocaleString(), color: buff_colors[3] },
    ' weeks, for a total of ',
    {
      ...get_abbr_number(repay * time),
      color: money_color,
    },
    ' UmaCoins. Accept?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} amount
   */
  async bm_confirm(chara, you, amount) {
    await era.printAndWait([
      you.get_colored_name(),
      ' borrows ',
      { content: amount.toLocaleString(), color: money_color },
      ' UmaCoins from ',
      chara.get_colored_name(),
      '...',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' visit the hollow tree in the courtyard.',
    ]);
    await era.printAndWait([
      `Watching ${chara.sex.toLowerCase()} roar into the hollow, `,
      you.get_colored_name(),
      ' renews the determination to help ',
      chara.get_colored_name(),
      ' become the very best.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' go on a date in the courtyard, drawing plenty of whispers from the students nearby.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_r_lunch(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      " have lunch on the rooftop and trade treats from eachother's lunch boxes.",
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_fishing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' go fishing by the river, hoping for a big catch.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_walking(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' take a walk by the river. It is another lovely day.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_arcade(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      " visit the shopping district arcade, praying that the crane game's claw holds on.",
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_drawing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' enter a raffle in the shopping district. Will they win something good?',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_ktv(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' visit a karaoke bar in the shopping district. Time to bring down the house!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_movie(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' go to the movies in the shopping district. Is anything good showing?',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} dice Prayer roll result from 0-1; lower is better
   */
  async o_c_pray(chara, you, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' visit the shrine to pray for good fortune.',
    ]);
    if (dice < 0.5) {
      await era.printAndWait([
        'They draw a ',
        dice < 0.05 ? 'Great Blessing' : 'Blessing',
        ' fortune! The result puts them both in high spirits.',
      ]);
    } else {
      await era.printAndWait([
        'They draw a bad fortune! For the rest of the trip, they remain wary of disaster striking from above.',
      ]);
    }
  },
  /**
   * @author Mr.E.
   * @param {CharaTalk} chara
   * @param {number} dice Prayer roll result from 0-0.05; determines the great-success event
   */
  async oc_great_luck(chara, dice) {
    // FLAGNAME:122 = Assault Resistance
    if (dice < 0.0001 && era.get('flag:122') === 1) {
      await era.printAndWait(
        'It is signed with an unknown spellcasting material!',
      );
    } else if (dice < 0.01) {
      await era.printAndWait([
        'A colorful starting gate suddenly appears in a vision, lifting your spirits.',
      ]);
    } else if (dice < 0.02) {
      await era.printAndWait([
        'A gust of wind sends you tumbling onto ',
        chara.get_colored_name(),
        '?!',
      ]);
    } else if (dice < 0.03 && chara.sex_code !== 1) {
      await era.printAndWait([
        'A gust of wind suddenly lifts ',
        chara.get_colored_name(),
        "'s skirt?!",
      ]);
    } else {
      await era.printAndWait(['A gust of wind blows in 150 UmaCoins?!']);
    }
  },
  /** @param {CharaTalk} chara */
  oc_remove_train_debuff(chara) {
    era.print([
      '[',
      chara.get_colored_name(),
      "'s training seems to be going more smoothly.]",
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_restaurant(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' go out to eat near the station. Chinese, Japanese, or Western cuisine?',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' go on a date near the station. The sight of them holding hands draws plenty of envious looks.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_shopping(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' and ',
      chara.get_colored_name(),
      ' go shopping near the station. Perhaps a small gift is in order.',
    ]);
  },
  cl_new_year: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'To welcome the new year, ',
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        " celebrate together in the Trainer's office.",
      ]);
    };
    f.title = 'New Year';
    return f;
  })(),
  cl_valentine: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        "It's Valentine's Day, so ",
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        " exchange gifts in the Trainer's office.",
      ]);
      await era.printAndWait([
        'Seeing how happy ',
        chara.get_colored_name(),
        ' is makes ',
        you.get_colored_name(),
        ' happy too.',
      ]);
    };
    f.title = "Valentine's Day";
    return f;
  })(),
  cl_palace: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'Hall of Fame Week is one of the most important celebrations for any ',
        chara.uma_sex_title,
        ' who dreams of racing.',
      ]);
      // CFLAGNAME:47 = Hall of Fame
      switch (era.get(`cflag:${chara.id}:47`)) {
        case 2:
          await era.printAndWait([
            'Thanks to the outstanding achievements of ',
            you.get_colored_name(),
            ' and ',
            chara.get_colored_name(),
            ', they have naturally been invited as the guests of honor.',
          ]);
          // CFLAGNAME:48 = Training Turn Counter
          if (era.get(`cflag:${chara.id}:48`) === 143 + 9) {
            await era.printAndWait([
              'When the time comes, ',
              chara.get_colored_name(),
              ' walks toward center stage, unable to hide her joy and pride.',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            ` watches ${chara.sex.toLowerCase()} step onto the stage and recount their struggles, sharing everything they learned with the audience.`,
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "'s vision begins to blur as all their memories together come flooding back...",
          ]);
          break;
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' and ',
            chara.get_colored_name(),
            " head to Tracen Academy's main auditorium for the ceremony.",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            "'s trainee lets her ears and tail droop unconsciously, looking dispirited.",
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' looks at ',
            chara.get_colored_name(),
            ` and sighs, then gently places a hand on ${chara.sex === 'She' ? 'her' : 'his'} shoulder and helps ${chara.sex === 'She' ? 'her' : 'him'} onward. The gesture seems to lift ${chara.sex === 'She' ? 'her' : 'his'} spirits.`,
          ]);
          await era.printAndWait([
            'Although ',
            you.get_colored_name(),
            ' and ',
            chara.get_colored_name(),
            ' gave it everything they had, their results fell short of the Hall of Fame. Some regrets are simply part of life.',
          ]);
          await era.printAndWait([
            'They may not have emerged victorious, but the festive atmosphere still manages to lift their spirits.',
          ]);
          break;
        default:
          // CFLAGNAME:65 = Growth Stage
          if (era.get(`cflag:${chara.id}:65`) === 5) {
            await era.printAndWait([
              `Hall of Fame Week is important not only to active ${chara.uma_sex_title}s, but also guarantees a busy, stressful day for staff like `,
              you.get_colored_name(),
              '.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' and ',
              chara.get_colored_name(),
              ' enter the venue together and carefully record every detail of the ceremony... They occasionally exchange glances before returning to their work.',
            ]);
          } else {
            await era.printAndWait([
              'Every year, Tracen Academy marks the occasion with several events. Among them is a series of speeches by Hall of Fame ',
              chara.uma_sex_title,
              's, who spend several days sharing their experience with other ',
              chara.uma_sex_title,
              's and Trainers.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' and ',
              chara.get_colored_name(),
              ' barely manage to secure seats among the enormous crowd.',
            ]);
            // CFLAGNAME:1 = Race
            if (era.get(`cflag:${chara.id}:1`) > 0) {
              await era.printAndWait([
                'As the ',
                chara.uma_sex_title,
                ' onstage speaks with quiet passion, ',
                you.get_colored_name(),
                ' notices ',
                chara.get_colored_name(),
                ' sitting perfectly straight, her eyes shining with admiration...',
              ]);
            }
          }
      }
    };
    f.title = 'Hall of Fame Week';
    return f;
  })(),
  cl_fans: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        "At April's Fan Appreciation Festival, ",
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        ' put on a special performance for the fans.',
      ]);
    };
    f.title = 'Fan Appreciation Festival';
    return f;
  })(),
  cl_temple_fair: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'For the summer festival, ',
        you.get_colored_name(),
        ' invites ',
        chara.get_colored_name(),
        ' to visit the fair near the summer camp.',
      ]);
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        if (era.get(`love:${chara.id}`) >= 50) {
          await era.printAndWait([
            chara.sex,
            ` quickly agrees. The two set aside the burdens of working adulthood and spend the entire day having fun...`,
          ]);
        } else {
          await chara.say_and_wait('Is this a date?');
          await era.printAndWait([
            you.get_colored_name(),
            ' smiles at the message. Just as a reply is being typed, another message appears.',
          ]);
          await chara.say_and_wait("Then it's settled.");
          await era.printAndWait([
            'Below the message is a selfie of ',
            chara.sex.toLowerCase(),
            ' in a yukata, wearing just a touch of makeup. ',
            you.get_colored_name(),
            ' cannot help but hold their breath...',
          ]);
          await era.printAndWait(
            'Needless to say, it becomes a wonderful memory for them both.',
          );
        }
      } else if (era.get(`love:${chara.id}`) >= 50) {
        await era.printAndWait([
          chara.sex,
          ' quickly agrees. They put every obligation out of mind and spend the whole day having fun...',
        ]);
      } else {
        await era.printAndWait([
          chara.sex,
          ' quickly replies to ',
          you.get_colored_name(),
          '. While waiting early at the entrance, ',
          you.get_colored_name(),
          ' looks up to find ',
          chara.sex.toLowerCase(),
          ' approaching in a brand-new yukata, beautifully dressed for the occasion.',
        ]);
        await era.printAndWait([
          'Before ',
          you.get_colored_name(),
          ' can react, ',
          chara.sex.toLowerCase(),
          ' smiles, loops an arm through ',
          you.get_colored_name(),
          "'s, and leads the way...",
        ]);
        await era.printAndWait('They spend a wonderful day together.');
      }
    };
    f.title = 'Summer Festival';
    return f;
  })(),
  cl_halloween: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        await era.printAndWait([
          "Tracen's holiday events are rarely like those anywhere else.",
        ]);
        await era.printAndWait([
          'Take today, for example... ',
          you.get_colored_name(),
          ' looks at the ridiculous yet eerie costume ',
          chara.sex.toLowerCase(),
          ' is wearing and sighs inwardly.',
        ]);
        await era.printAndWait(
          'Halloween should be a holiday where children dress up and play while adults stay home to hand out candy. Yet in the name of "bonding with the students," the academy administration has encouraged the faculty to dress up and distribute candy too, even granting everyone half a day off.',
        );
        await era.printAndWait(
          'Then again... perhaps certain adults simply wanted an excuse to join the fun.',
        );
        await era.printAndWait([
          'As ',
          you.get_colored_name(),
          ' entertains that thought, a murderous glare suddenly comes from the side. Shaking the thought away, ',
          you.get_colored_name(),
          ' hurries after ',
          chara.get_colored_name(),
          '.',
        ]);
        await era.printAndWait(
          'The night is exhausting, but surprisingly fun.',
        );
      } else {
        await era.printAndWait([
          'As ',
          you.get_colored_name(),
          ' relaxes at home, a measured yet thunderous knock suddenly sounds at the door.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' has a good idea who it is. Opening the door and pretending to be startled by ',
          chara.get_colored_name(),
          "'s bizarre costume, the Trainer joins ",
          chara.sex.toLowerCase(),
          ' for a night of trick-or-treating...',
        ]);
        await era.printAndWait(
          'They encounter quite a few strange sights along the way.',
        );
      }
    };
    f.title = 'Halloween';
    return f;
  })(),
  cl_christmas: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'Christmas has arrived! ',
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        ' dress as Santa to celebrate, playing around until nightfall finally burns off their excess energy.',
      ]);
    };
    f.title = 'Christmas';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async birthday_remote(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' sends ',
      chara.get_colored_name(),
      ' birthday wishes from afar.',
    ]);
    await era.printAndWait([chara.get_colored_name(), ' looks delighted.']);
  },
  /**
   * @author 阿格尼斯数码公司
   * @param chara
   * @param you
   */
  async birthday_normal(chara, you) {
    await era.printAndWait([
      'A huge birthday party is prepared for ',
      chara.get_colored_name(),
      '!',
    ]);
    const buffer = [
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' looks delighted to be the guest of honor.',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ` closes ${chara.sex === 'She' ? 'her' : 'his'} eyes in the flickering candlelight and makes a birthday wish.`,
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            " is swept up in everyone's joy and cannot stop smiling.",
          ]);
        },
      },
      {
        c: () =>
          // TALENTNAME:11 = Sociability
          era.get(`talent:${chara.id.id}:11`) === -1 &&
          // EXPNAME:20 = Birthdays Celebrated
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ', who is often invited to all kinds of parties, never imagined that ',
            you.get_colored_name(),
            ` would arrange one for ${chara.sex === 'She' ? 'her' : 'him'}. Still stunned by the surprise, ${chara.sex.toLowerCase()} spends a joyful day with everyone.`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'Even so, once ',
            chara.get_colored_name(),
            ' learns how much effort ',
            you.get_colored_name(),
            ` has put into ${chara.sex === 'She' ? 'her' : 'his'} party, ${chara.sex.toLowerCase()} somehow turns it into an unexpected academy-wide birthday celebration...!`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'As it happens, ',
            chara.get_colored_name(),
            ` has planned another half of the party ${chara.sex.toLowerCase()}self. When the two parties combine, the celebration grows to an incredible scale...!`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' clearly never expected a party like this and looks nervous at the sight of everyone gathered there.',
          ]);
          if (era.get(`cflag:${chara.id}:1`) > 0) {
            await era.printAndWait(
              `Still, ${chara.sex === 'She' ? 'her' : 'his'} tail is wagging rapidly.`,
            );
          } else {
            await era.printAndWait('Even so, she clearly seems happy.');
          }
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'This time, ',
            chara.get_colored_name(),
            ` gets through every part of the celebration without shrinking away and even sings the birthday song with everyone.`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' still seems a little timid, but lights up when the gifts are presented.',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' quietly eats the birthday cake, ',
            era.get(`cflag:${chara.id}:1`) > 0
              ? `with ${chara.sex === 'She' ? 'her' : 'his'} ears twitching`
              : 'smiling softly',
            ` as everyone reminisces about ${chara.sex === 'She' ? 'her' : 'him'}.`,
          ]);
        },
      },
      {
        // TALENTNAME:7 = Honesty
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' clearly never saw the party coming, but when asked whether ',
            chara.sex.toLowerCase(),
            ' was surprised, ',
            chara.sex.toLowerCase(),
            ' insists that ',
            chara.sex.toLowerCase(),
            ' noticed the plan long ago.',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ` complains about everything ${chara.sex === 'She' ? 'she' : 'he'} dislikes about the party while `,
            era.get(`cflag:${chara.id}:1`) > 0
              ? `happily wagging ${chara.sex === 'She' ? 'her' : 'his'} tail`
              : 'enthusiastically',
            ' devouring the birthday cake.',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' finally gets to use the hundred complaints ',
            chara.sex.toLowerCase(),
            ' prepared about ',
            you.get_colored_name(),
            "'s incompetence.",
          ]);
          await era.printAndWait(
            'Unexpectedly, ',
            chara.get_colored_name(),
            ' still admits that the birthday celebration was very well done.',
          );
        },
      },
    ];
    await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async load_talk(chara, you) {
    // CFLAGNAME:81 = Pregnancy Stage
    // CFLAGNAME:57 = Extended Variables
    // EXPNAME:117 = Birth Count
    if (
      era.get(`cflag:${chara.id}:81`) > 2 &&
      !era.get(`cflag:${chara.id}:57`)?.report
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' cradles ',
        chara.sex === 'She' ? 'her' : 'his',
        ' belly and watches ',
        you.get_colored_name(),
        ' walk away, despair in ',
        chara.sex === 'She' ? 'her' : 'his',
        ' eyes.',
      ]);
    }
    if (
      era.get(`cflag:${chara.id}:81`) <= 2 &&
      !era.get(`exp:${chara.id}:117`) > 0
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' clutches a baby bottle and watches ',
        you.get_colored_name(),
        ' walk away, despair in ',
        chara.sex === 'She' ? 'her' : 'his',
        ' eyes.',
      ]);
    }
  },
};
