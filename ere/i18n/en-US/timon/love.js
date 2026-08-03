/**
 * @file Love Timon
 * @author 雞雞
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

module.exports = {
  update_yes: 'Upgrade Relationship',
  update_no: 'Not Yet',
  49: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        'One night, ',
        chara.get_colored_name(),
        ' cried out ',
        you.get_colored_name(),
        `'s name while intensely masturbating and reached climax.`,
      ]);
    };
    f.title = 'Lust';
    return f;
  })(),
  '74-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await chara.print_and_wait([
        'One night, ',
        chara.get_colored_name(),
        ` began to realize ${chara.sex.toLowerCase()} had feelings for `,
        you.get_colored_name(),
        ' that went beyond their current relationship.',
      ]);
      await chara.print_and_wait(
        'But was it just youthful first love, or an illusion born from their everyday closeness?',
      );
      era.printButton(
        '「I think I might be serious...」(Upgrade Relationship)',
        1,
      );
      era.printButton(
        '「No... I might just be overthinking it...」(Not Yet)',
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await chara.print_and_wait([
          chara.get_colored_name(),
          ` gradually became aware of ${chara.sex === 'She' ? 'Her' : 'His'} love for `,
          you.get_colored_name(),
          '.',
        ]);
        await chara.print_and_wait([
          'I have to tell ',
          you.get_colored_name(),
          ' how I feel...',
        ]);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ` made up ${chara.sex === 'She' ? 'Her' : 'His'} mind.`,
        ]);
      } else {
        await chara.say_and_wait('Must be my imagination...', true);
        await chara.print_and_wait([
          chara.get_colored_name(),
          ` shook ${chara.sex === 'She' ? 'Her' : 'His'} head, rolled over, and slowly drifted off to sleep...`,
        ]);
      }
      return ret;
    };
    f.title = 'Budding Love';
    return f;
  })(),
  '74-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      // FLAGNAME:5 = 当前互动角色
      if (era.get('flag:5') > 0) {
        await era.printAndWait([
          'When you returned to the training room, ',
          chara.get_colored_name(),
          ' nervously asked ',
          you.get_colored_name(),
          ` to go out with ${chara.sex === 'She' ? 'Her' : 'Him'}.`,
        ]);
      } else {
        await era.printAndWait([
          'When you returned to the training room, ',
          chara.get_colored_name(),
          ' found ',
          you.get_colored_name(),
          `with a nervous expression and asked to go out with ${chara.sex === 'She' ? 'Her' : 'Him'}.`,
        ]);
      }
      era.print([
        'What will you do? Accept ',
        chara.get_colored_name(),
        ' as your lover, or coldly refuse?',
      ]);
      era.printButton('Accept (Upgrade Relationship)', 1);
      era.printButton('Refuse (Not Yet)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          'Hearing ',
          you.get_colored_name(),
          `'s yes, `,
          chara.get_colored_name(),
          `'s tense face relaxed into an excited smile`,
          // CFLAGNAME:6 = 身高
          ...(era.get('cflag:0:6') > era.get(`cflag:${chara.id}:6`)
            ? [
                ` and ${chara.sex.toLowerCase()} dove into `,
                you.get_colored_name(),
                `'s arms.`,
              ]
            : [
                ' and pulled ',
                you.get_colored_name(),
                ` into ${chara.sex === 'She' ? 'Her' : 'His'} arms.`,
              ]),
        ]);
        await era.printAndWait([
          'From this day forward, you two are more than before—you are lovers.',
        ]);
      } else {
        await era.printAndWait([
          `No matter how many feelings swirled in ${chara.sex === 'She' ? 'Her' : 'His'} heart, `,
          you.get_colored_name(),
          ' still believed the two of you were never meant to be together.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ` bit ${chara.sex === 'She' ? 'Her' : 'His'} lip, body trembling as ${chara.sex.toLowerCase()} fought back tears.`,
        ]);
        await era.printAndWait([
          'Out of courtesy, ',
          you.get_colored_name(),
          ` gently comforted ${chara.sex.toLowerCase()} until the storm of sadness finally passed.`,
        ]);
      }
      return ret;
    };
    f.title = 'Impulse';
    return f;
  })(),
  '89-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        'One night, ',
        chara.get_colored_name(),
        ' felt a wave of happiness just thinking about the intimate moments shared with ',
        you.get_colored_name(),
        '.',
      ]);
      await chara.print_and_wait([
        'Maybe it was time to take the next step... ',
        chara.get_colored_name(),
        ' thought.',
      ]);
    };
    f.title = 'Together';
    return f;
  })(),
  '89-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        'One day, ',
        chara.get_colored_name(),
        ' took ',
        you.get_colored_name(),
        ' out on a date.',
      ]);
      era.print([
        'After a day full of romance and tender closeness, ',
        chara.get_colored_name(),
        ' looked at ',
        you.get_colored_name(),
        ' with resolute eyes and held out an engagement ring.',
      ]);
      era.printButton('Accept (Upgrade Relationship)', 1);
      era.printButton('Refuse (Not Yet)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' reached out and took the ring. After everything you two had been through, it really was time to become husband and wife.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          ' excitedly pulled ',
          you.get_colored_name(),
          ' into a deep, passionate kiss. From this day on, the two of you would support each other through life—for richer or poorer, in sickness and in health, till death do you part...',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' did not take the ring...',
        ]);
        await era.printAndWait([
          {
            content: 'Even after everything you had shared, ',
          },
          you.get_colored_name(),
          " still wasn't sure if this was the right choice.",
        ]);
        await era.printAndWait(
          'Morality, relationships, social responsibilities... there were simply too many things to consider—or that might bind you both.',
        );
        era.print([
          'But looking at ',
          chara.get_colored_name(),
          `'s disappointed expression, `,
          you.get_colored_name(),
          " couldn't help but wonder: Did we really need to overthink it that much...?",
        ]);
      }
      return ret;
    };
    f.title = 'Vow';
    return f;
  })(),
  '99-1': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await chara.print_and_wait([
        'One night, ',
        chara.get_colored_name(),
        ' tossed and turned in bed, unable to fall asleep.',
      ]);
      await chara.print_and_wait([
        'All ',
        chara.get_colored_name(),
        ' could picture were scenes of ',
        you.get_colored_name(),
        ` leaving ${chara.sex.toLowerCase()} for one reason or another. Just thinking about it made `,
        chara.get_colored_name(),
        "'s heart ache with sorrow...",
      ]);
    };
    f.title = 'Nightmare';
    return f;
  })(),
  '99-2': (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        chara.get_colored_name(),
        ' arrived at the training room ahead of everyone else and clung tightly to ',
        you.get_colored_name(),
        ', refusing to let go.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ` had no idea what was going on and gently comforted ${chara.sex.toLowerCase()} until `,
        chara.get_colored_name(),
        ' finally calmed down.',
      ]);
    };
    f.title = 'Dependence';
    return f;
  })(),
};
