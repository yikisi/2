/**
 * @file Player - Training / Ero
 * @author 幽白書
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { unexpected_pregnant_enum } = require('#/data/ero/status-const');

module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} supporter
   * @param {CharaTalk} you
   * @param {string} penis_desc
   */
  become_erect(chara, supporter, you, penis_desc) {
    era.print([
      'Under the service of ',
      chara.get_colored_name(),
      ' and ',
      supporter.get_colored_name(),
      ', ',
      you.get_colored_name(),
      "'s ",
      penis_desc,
      ' cock stands fully erect in no time.',
    ]);
  },
  bt_cum_in: 'Cum!',
  bt_cum_not: 'Hold it',
  get_cum_on_body: (target) => `Cum on ${target}!`,
  get_cum_on_face: (targets) => `Cum on ${targets}'s face!`,
  /**
   * @param {CharaTalk} you player
   * @param {boolean} stop_success whether edging succeeded
   * @param {boolean} change_aim whether aiming at another spot instead
   * @param {boolean} cum_on_face if aiming elsewhere, whether facial: oral out-of-body is face; vaginal/anal out-of-body is body
   * @param {[]} targets
   */
  orgasm_denial(you, stop_success, change_aim, cum_on_face, targets) {
    if (!stop_success) {
      era.print([you.get_colored_name(), "'s restraint failed!"]);
    } else if (change_aim) {
      if (cum_on_face) {
        era.print([
          you.get_colored_name(),
          ' pulls out and aims at ',
          ...targets,
          "'s pretty face",
        ]);
      } else {
        era.print([
          you.get_colored_name(),
          ' pulls out and aims at ',
          ...targets,
          "'s body",
        ]);
      }
    } else {
      era.print([
        you.get_colored_name(),
        ' manages to hold back the urge to cum…',
      ]);
    }
  },
  report_preg_not_love: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} unexpected_pregnant
     */
    const f = async (you, father, unexpected_pregnant) => {
      if (era.get('flag:惩戒力度') >= 2) {
        await era.printAndWait([
          you.get_colored_name(),
          ' stares at the pregnancy mark on the lewd crest across the lower belly, then bolts into the bathroom and throws up.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' stares at the pregnancy test in hand, then bolts into the bathroom and throws up.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          you.get_colored_name(),
          ' has no memory of how the pregnancy happened. The thought that anyone could be the culprit sends a chill through ',
          you.get_colored_name(),
          '…',
        ]);
        if (you.sex_code >= 1) {
          await era.printAndWait([
            '…And ',
            you.get_colored_name(),
            ' could have been a father instead…',
          ]);
        }
      } else {
        await era.printAndWait([
          'After a brief panic, ',
          you.get_colored_name(),
          ' decides to tell ',
          father.get_colored_name(),
          ' the news.',
        ]);
        if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
          await era.printAndWait([
            father.get_colored_name(),
            ' asks again and again, only to hear the same answer: the child is theirs.',
          ]);
          await era.printAndWait([
            'But ',
            father.get_colored_name(),
            ' has no memory of it at all…',
          ]);
        } else {
          await era.printAndWait([
            'After the same shock, once calm, ',
            father.get_colored_name(),
            ' promises ',
            you.get_colored_name(),
            ' to take full responsibility as a father…',
          ]);
        }
      }
    };
    f.title = 'Accident';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} you
   * @param {CharaTalk} father
   */
  async have_baby_with_child(you, father) {
    if (era.get(`love:${father.id}`) >= 90) {
      await era.printAndWait([
        you.get_colored_name(),
        " lies on the hospital bed, gazing at the newborn with a hazy mind, and thinks of the child's father.",
      ]);
      await era.printAndWait([
        'Hard to believe that in so little time, ',
        father.get_colored_name(),
        '—this child—has grown so fast, old enough to get a woman (',
        you.get_colored_name(),
        ') pregnant.',
      ]);
      await era.printAndWait([
        'Speak of the devil—',
        father.get_colored_name(),
        ' bursts into the room. That child who once nursed in your arms now has a figure that makes ',
        you.get_colored_name(),
        ' flush and race with heat.',
      ]);
      await era.printAndWait([
        'Rather than the role of a mother, ',
        you.get_colored_name(),
        ' chooses the happiness of being ',
        father.get_colored_name(),
        "'s lover.",
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' holds the baby, heart full of endless worry. Born of incest with ',
        father.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' frets over what fate awaits this child.',
      ]);
      await era.printAndWait([
        'If only things had never happened with ',
        father.get_colored_name(),
        '… ',
        you.get_colored_name(),
        " wants to complain, but the words won't come.",
      ]);
      await era.printAndWait(
        "A mother's bond and a lover's affection tangle together into feelings even the one feeling them can't sort out.",
      );
      await era.printAndWait([
        'In the end it spills out as a petulant, spoiled scolding aimed at ',
        father.get_colored_name(),
        ', who finally shows up late.',
      ]);
    }
  },
  have_baby_with_fuck_buddy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await era.printAndWait([you.get_colored_name(), ' picks up the baby—']);
      era.printButton("Ignore the child's father", 1);
      era.printButton(`Let ${father.sex.toLowerCase()} take a look too`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' looks at ',
          father.get_colored_name(),
          ' with hollow eyes, yet gazes at the baby with clear affection.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' thinks it over, then waves ',
          father.get_colored_name(),
          ' closer anyway.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' lights up and wraps arms around ',
          you.get_colored_name(),
          ', and the two of them soothe the sleeping baby together.',
        ]);
      }
    };
    f.title = 'New Life';
    return f;
  })(),
};
