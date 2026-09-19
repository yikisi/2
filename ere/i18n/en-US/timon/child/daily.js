/**
 * @file Daily Timon - Child
 * @author 雞雞
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   */
  select_0(child, you) {
    const talk = [
      () =>
        era.print([
          'Still barely learning to talk, the little one lights up at the sight of ',
          you.get_colored_name(),
          ' and comes toddling over in tiny, happy steps.',
        ]),
      () =>
        era.print([
          child.get_colored_name(),
          ' keeps rolling across the floor. ',
          you.get_colored_name(),
          ' half-wonders if ',
          child.get_colored_name(),
          ' might roll all the way to the other side of the planet.',
        ]),
    ];
    get_random_entry(talk)();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   */
  select_1(child, you) {
    era.print([
      'Under ',
      you.get_colored_name(),
      "'s guidance, ",
      child.get_colored_name(),
      ' practices running. Along the riverside path at sunset, two long shadows stretch side by side.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {CharaTalk} parent
   */
  select_2(child, you, parent) {
    era.print([
      'With age, ',
      child.get_colored_name(),
      ' has grown into a beauty just like ',
      parent.get_colored_name(),
      '—and will surely outshine even that on the track.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_0(child, you, callname) {
    await child.say_and_wait([
      callname,
      "...! I'm ",
      child.get_colored_name(),
      '!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_1(child, you, callname) {
    await child.say_and_wait([callname, "! I'm hungry!"]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_2(child, you, callname) {
    const temp = [];
    // TALENTNAME:35 = underarm hair growth
    if (era.get(`talent:${child.id}:35`)) {
      temp.push("there's hair under my arms...");
    }
    // TALENTNAME:36 = pubic hair growth
    if (era.get(`talent:${child.id}:36`)) {
      temp.push("there's hair growing down there...");
    }
    if (child.sex_code !== 1) {
      temp.push('my chest got bigger...');
      // TALENTNAME:32 = lactation
      if (era.get(`talent:${child.id}:32`)) {
        temp.push('something white is coming out...');
      }
    }
    if (child.sex_code > 0) {
      temp.push('it got bigger down there...');
    }
    await child.say_and_wait([
      callname,
      '...my body feels weird... um, ',
      get_random_entry(temp),
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} child
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async talk_estrus(child, you, callname) {
    child.say([
      'Hah... hah... ',
      callname,
      "...I'm so hot... is this estrus...?",
    ]);
    await era.printAndWait([
      'Afterward, ',
      you.get_colored_name(),
      ' hurries out to buy estrus suppressant for ',
      child.get_colored_name(),
      '.',
    ]);
  },
  growth_0: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' and ',
          father.get_colored_name(),
          ' play happily with their child, sharing a warm stretch of family time.',
        ]);
        if (
          LifeEventMarks.get_marks(child.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' looks at ',
            child.get_colored_name(),
            ', who shares a faint resemblance, and thinks about the life ahead...',
          ]);
        }
      } else if (
        LifeEventMarks.get_marks(child.id).unexpected_child ===
        unexpected_pregnant_enum.father_sleep
      ) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' and ',
          father.get_colored_name(),
          ' play happily with their child, sharing a warm stretch of family time.',
        ]);
        await era.printAndWait([
          'Afterward, ',
          mother.get_colored_name(),
          ' casts an apologetic look at ',
          father.get_colored_name(),
          ', who is carrying the child on his back.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' gently pats ',
          mother.get_colored_name(),
          "'s ",
          // CFLAGNAME:6 = height
          era.get(`cflag:${father.id}:6`) >= era.get(`cflag:${mother.id}:6`) + 5
            ? 'head'
            : 'cheek',
          ', showing it does not bother him.',
        ]);
        await era.printAndWait([
          'Feeling forgiven, ',
          mother.get_colored_name(),
          ' turns back to ',
          child.get_colored_name(),
          ' with a tender smile.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' smiles warmly while playing with the child. ',
            child.get_colored_name(),
            ' has become one of the few comforts in ',
            mother.get_colored_name(),
            "'s harsh life.",
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' does not stop ',
            father.get_colored_name(),
            ' from spending time with the child—but still gives ',
            father.get_colored_name(),
            ' the cold shoulder.',
          ]);
        }
        // MARKNAME:2 = of one heart
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            'In the end, ',
            mother.get_colored_name(),
            ' lets the guard down and plays with the child together with ',
            father.get_colored_name(),
            '.',
          ]);
        }
      }
    };
    f.title = 'Growth';
    return f;
  })(),
  growth_1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          'Leaning on ',
          father.get_colored_name(),
          "'s shoulder, ",
          mother.get_colored_name(),
          ' watches the child grow day by day and smiles in quiet happiness.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            'As ',
            mother.get_colored_name(),
            ' watches the child grow day by day, feelings toward ',
            father.get_colored_name(),
            ' only grow more tangled.',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' feels a pang of loss at the thought that a child so close will soon spread wings and leave.',
          ]);
        }
        // MARKNAME:2 = of one heart
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            'Even so, leaning on ',
            father.get_colored_name(),
            "'s shoulder and watching the child grow day by day, ",
            mother.get_colored_name(),
            ' still tastes a little contentment.',
          ]);
        }
      }
    };
    f.title = 'Coming of Age';
    return f;
  })(),
  growth_2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} mother
     */
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' and ',
          father.get_colored_name(),
          " each sign their names on the child's enrollment consent form.",
        ]);
        await era.printAndWait([
          'Once the pen is down, ',
          mother.get_colored_name(),
          ' throws herself into preparing everything the child will need for school.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            'Learning that the child will also enroll at Tracen Academy, ',
            mother.get_colored_name(),
            ' feels a sudden chill down the spine...',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            ' and ',
            father.get_colored_name(),
            " each sign their names on the child's enrollment consent form.",
          ]);
          await era.printAndWait([
            'Even after the pen is down, ',
            mother.get_colored_name(),
            ' still cannot shake a surreal, unreal feeling.',
          ]);
        }
        // MARKNAME:2 = of one heart
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            'Even so, ',
            mother.get_colored_name(),
            ' sets those thoughts aside and gets busy preparing everything the child will need for school.',
          ]);
        }
      }
    };
    f.title = 'Enrollment';
    return f;
  })(),
  /**
   * @param {CharaTalk} child
   * @param {PrintedSpan} callname
   * @param {PrintedSpan} call_child
   */
  async load_talk(child, callname, call_child) {
    // CFLAGNAME:65 = growth stage
    switch (era.get(`cflag:${child.id}:15`)) {
      case 0:
        await child.say_and_wait([
          'Waaah—',
          callname,
          '—I want ',
          callname,
          '—',
        ]);
        break;
      case 1:
        await child.say_and_wait([
          callname,
          '...um... please do not leave ',
          call_child,
          ' behind... (*sniffles*)',
        ]);
    }
  },
};
