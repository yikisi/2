/**
 * @file Training Timon
 * @author 雞雞
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

const { get_random_entry, join_list } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} races
   * @param {PrintedSpan} wins
   * @param {PrintedSpan} reward
   * @param {PrintedSpan[]} race_names
   */
  get_result_list(chara, races, wins, reward, race_names) {
    const ret = [];
    ret.push([
      chara.get_colored_name(),
      ': ',
      races,
      ' career starts, ',
      wins,
      ' wins, and ',
      reward,
      ' in total prize Umacoin',
    ]);
    if (race_names.length > 0) {
      ret.push([
        'Major wins: ',
        ...join_list(race_names.slice(0, 5), ' '),
        race_names.length > 5 ? '...' : ``,
      ]);
    }
    return ret;
  },
  on_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait(
        `Every January, the URA Racing ${chara.uma_sex_title} Hall of Fame opens its ballot for retired ${chara.uma_sex_title}.`,
      );
      era.println();
      await era.printAndWait(
        `Then, in March, the most accomplished racers to emerge from the rigorous selection process are inducted and awarded the supreme honor of being named a Distinguished Racing ${chara.uma_sex_title}.`,
      );
      era.println();
      await era.printAndWait([
        `And now, the beloved ${chara.uma_sex_title} trained by `,
        you.get_colored_name(),
        ', ',
        chara.get_colored_name(),
        '—',
      ]);
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        `As a bronze statue modeled after ${chara.sex === 'She' ? 'Her' : 'Him'} is unveiled, the legend of `,
        ...title,
        chara.get_colored_name(),
        ' will live on forever in the Hall of Fame...',
      ]);
    };
    f.title = 'Inducted into the Hall of Fame';
    return f;
  })(),
  under_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait('Sadly, the Hall of Fame was not to be.');
      era.println();
      await era.printAndWait(
        'Even so, you took pride in everything you had achieved together, trusting that those who followed would build on your legacy and reach even greater heights.',
      );
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        ...title,
        'The legend of ',
        chara.get_colored_name(),
        ' will be told for generations to come...',
      ]);
    };
    f.title = 'Below the Hall of Fame';
    return f;
  })(),
  pl_future: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} can_sex
     */
    const f = async (chara, you, can_sex) => {
      await era.printAndWait([
        'The years flew by. After so long beside ',
        chara.get_colored_name(),
        ', the two of you would soon begin a new chapter together.',
      ]);
      era.println();
      if (era.get(`love:${chara.id}`) >= 75) {
        await era.printAndWait('You made love in the familiar trainer room.');
        await era.printAndWait(
          'Lost in the bliss of having each other all to yourselves, the two lovers let the cares of the outside world fade away.',
        );
        era.println();
        await era.printAndWait('I’m the king of the world! —Jack Dawson', {
          align: 'center',
        });
      } else if (can_sex) {
        await era.printAndWait(
          'You embraced and kissed passionately in the familiar trainer room.',
        );
        await era.printAndWait(
          'Lust filled the room as breathless moans and the sound of bodies meeting echoed endlessly.',
        );
        era.println();
        await era.printAndWait(
          'Love and hunger rule the world —Friedrich Schiller',
          { align: 'center' },
        );
      } else {
        await era.printAndWait(
          'You chatted happily in the familiar trainer room, though neither of you could escape the sorrow of your coming farewell.',
        );
        await era.printAndWait(
          'Every encounter is precious precisely because it may someday be lost.',
        );
        era.println();
        await era.printAndWait(
          'In every meeting, treasure the moment, for it will never come again. —Sen no Rikyū',
          {
            align: 'center',
          },
        );
      }
    };
    f.title = 'Toward the Future';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} attr
   */
  async train(chara, you, attr) {
    const chara_name = chara.get_colored_name();
    if (!chara.id) {
      chara_name.content = 'themself';
    }
    switch (attr) {
      case attr_enum.speed:
        await era.printAndWait([
          'To improve Speed, ',
          you.get_colored_name(),
          ' had ',
          chara_name,
          ' practice running...',
        ]);
        break;
      case attr_enum.endurance:
        await era.printAndWait([
          'To improve Stamina, ',
          you.get_colored_name(),
          ' had ',
          chara_name,
          ' practice swimming...',
        ]);
        break;
      case attr_enum.strength:
        await era.printAndWait([
          'To improve Power, ',
          you.get_colored_name(),
          ' had ',
          chara_name,
          ' do weight training...',
        ]);
        break;
      case attr_enum.toughness:
        await era.printAndWait([
          'To build Guts, ',
          you.get_colored_name(),
          ' had ',
          chara_name,
          ' train on an uphill course...',
        ]);
        break;
      case attr_enum.intelligence:
        await era.printAndWait([
          'To improve Race Smarts, ',
          you.get_colored_name(),
          ' had ',
          chara_name,
          ' study race footage...',
        ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  ts_info(chara) {
    era.print([chara.get_colored_name(), ' successfully completed training!']);
  },
  ts_add: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        ' still seems eager to keep going. Does ',
        `${chara.sex.toLowerCase()} want to do some extra training?`,
      ]);
      era.printButton('Go for it!', 1);
      era.printButton('That would go beyond the plan...', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' allowed ',
          chara.get_colored_name(),
          ` to do some extra training and praised ${chara.sex === 'She' ? 'Her' : 'His'} enthusiasm.`,
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' stopped ',
          chara.get_colored_name(),
          ' from doing extra training and reminded ',
          `${chara.sex === 'She' ? 'Her' : 'Him'} to get plenty of rest.`,
        ]);
      }
      return ret;
    };
    f.title = 'Fired Up for Extra Training!';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {number} attr
   * @param {boolean} is_fumble
   */
  async tf_info(chara, attr, is_fumble) {
    if (attr === attr_enum.intelligence) {
      await era.printAndWait([
        'Oh no! ',
        chara.get_colored_name(),
        ` ${is_fumble ? 'passed out' : 'fell asleep'}!`,
      ]);
    } else {
      const buffer = [];
      switch (attr) {
        case attr_enum.speed:
          buffer.push('slipped', 'tumbled to the ground', 'ran out of steam');
          break;
        case attr_enum.endurance:
          buffer.push('got a cramp');
          break;
        case attr_enum.strength:
          buffer.push(
            'got mud in their eyes',
            'fell over',
            'got clobbered by the punching bag',
          );
          break;
        case attr_enum.toughness:
          buffer.push(
            'ran out of steam',
            'threw out their back',
            'tumbled downhill',
          );
      }
      await era.printAndWait([
        'Oh no! ',
        chara.get_colored_name(),
        ' ',
        get_random_entry(buffer),
        '!',
      ]);
    }
  },
  train_fail: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([chara.get_colored_name(), ' failed training...']);
      era.println();
      era.print('What should you do?');
      era.println();
      era.printButton('``Let’s take it easy for a while.``', 1);
      era.printButton('``Let’s review what went wrong!``', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = 'In the Training Room...';
    return f;
  })(),
  train_fumble: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([chara.get_colored_name(), ' failed training...']);
      era.println();
      era.print('What should you do?');
      era.println();
      era.printButton('``You need to get some proper rest!``', 1);
      era.printButton('``Push through with sheer willpower!``', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = 'In the Infirmary...';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {number} debuff
   */
  tf_change_debuff(chara, debuff) {
    if (debuff > 0) {
      era.print([
        '【Training is starting to feel easier for ',
        chara.get_colored_name(),
        '】',
      ]);
    } else {
      era.print([
        '【Training is starting to feel harder for ',
        chara.get_colored_name(),
        '】',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_success
   */
  async foreign_study(chara, you, is_success) {
    if (!chara.id) {
      await era.printAndWait([
        'To learn enough of the local language for basic conversations, ',
        you.get_colored_name(),
        ' studied in the hotel room...',
      ]);
    } else {
      await era.printAndWait([
        'To learn enough of the local language for basic conversations, ',
        you.get_colored_name(),
        ' had ',
        chara.get_colored_name(),
        ' study in the hotel room...',
      ]);
    }
    if (is_success) {
      await era.printAndWait('The last-minute cramming paid off!');
    } else {
      await era.printAndWait([
        'Oh no! ',
        chara.get_colored_name(),
        ' fell asleep!',
      ]);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   */
  fs_learn_language(chara, language) {
    era.print([chara.get_colored_name(), ' learned ', language, '!']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   * @param {PrintedSpan} new_level
   */
  fs_update_language(chara, language, new_level) {
    era.print([
      chara.get_colored_name(),
      ' improved ',
      language,
      ' proficiency to ',
      new_level,
      '!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_rest(chara, you) {
    await era.printAndWait([
      'To recover, ',
      you.get_colored_name(),
      ' booked a local therapy treatment and spent some time recuperating at the hotel...',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' seems to be getting back into shape!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_train(chara, you) {
    await era.printAndWait([
      'To get accustomed to the local racecourse, ',
      you.get_colored_name(),
      ' scheduled an acclimation session at the training grounds...',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' seems to be getting used to the feel of the local track!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {string} loc_name
   */
  async foreign_travel(chara, you, loc_name) {
    await era.printAndWait([
      'To unwind, ',
      you.get_colored_name(),
      ...(chara.id > 0 ? [' and ', chara.get_colored_name()] : [' went alone']),
      ' and toured ',
      loc_name,
      '...',
    ]);
    await era.printAndWait(
      'It cost quite a bit, but it was worth every penny!',
    );
  },
  race_start: (() => {
    /**
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {number} item
     * @param {boolean} do_sex
     */
    const f = async (chara, you, item, do_sex) => {
      if (!item) {
        /** @author 雞雞 */
        const buffer = [
          async () => await you.say_and_wait('Just give it your all!'),
          async () => await you.say_and_wait('Show them what you can do!'),
        ];
        await get_random_entry(buffer)();
      } else {
        /** @author 黑奴队长 */
        await era.printAndWait([
          you.get_colored_name(),
          ' personally fitted ',
          chara.get_colored_name(),
          ' with some ``special equipment.``',
        ]);
        switch (item) {
          case 4:
            await era.printAndWait([
              chara.get_colored_name(),
              ' gave ',
              you.get_colored_name(),
              ' a coy, sidelong glance, concealed your little secret beneath ',
              `${chara.sex === 'She' ? 'Her' : 'His'} clothes, then headed for the starting gate...`,
            ]);
            break;
          case 3:
            await era.printAndWait([
              chara.get_colored_name(),
              ` obediently finished dressing, the pink glow shining through ${chara.sex === 'She' ? 'Her' : 'His'} clothes at the lower abdomen matching ${chara.sex === 'She' ? 'Her' : 'His'} sultry gaze...`,
            ]);
            break;
          case 2:
            await era.printAndWait([
              chara.get_colored_name(),
              ` slowly got dressed, securing the toy firmly against ${chara.sex === 'She' ? 'Her' : 'His'} body...`,
            ]);
            break;
          case 1:
            await era.printAndWait([
              chara.get_colored_name(),
              ' stole a glance at ',
              you.get_colored_name(),
              `, then lowered ${chara.sex === 'She' ? 'Her' : 'His'} head and silently endured the stimulation...`,
            ]);
        }
      }
    };
    f.title = 'Before the Race';
    return f;
  })(),
  race_end_item_win: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' met the flushed ',
        chara.get_colored_name(),
        ' and escorted ',
        `${chara.sex === 'She' ? 'Her' : 'Him'} into the lounge.`,
      ]);
      await era.printAndWait([
        'The moment ',
        chara.get_colored_name(),
        ' entered, ',
        `${chara.sex.toLowerCase()} let out a moan of relief. `,
        you.get_colored_name(),
        ' hurriedly shut the door and switched off all the toys.',
      ]);
      await era.printAndWait([
        'Afterward, as ',
        chara.get_colored_name(),
        ' rubbed against ',
        you.get_colored_name(),
        `, you promised to take good care of ${chara.sex === 'She' ? 'Her' : 'Him'} later—narrowly averting an indecent scene in broad daylight.`,
      ]);
    };
    f.title = 'An Exciting Victory';
    return f;
  })(),
  race_end_item_lose: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' met the dejected ',
        chara.get_colored_name(),
        ' and escorted ',
        `${chara.sex === 'She' ? 'Her' : 'Him'} into the lounge.`,
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' slumped to the floor in despair.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' tactfully switched off the toys and offered some gentle reassurance.',
      ]);
    };
    f.title = 'An Expected Defeat';
    return f;
  })(),
  race_end_win: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5 ? 'That was amazing!' : 'Let’s aim even higher!',
      );
    };
    f.title = 'Race Victory';
    return f;
  })(),
  race_end_5: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? 'You did great out there today!'
          : 'We can’t let them beat us!',
      );
    };
    f.title = 'Placed in the Race';
    return f;
  })(),
  race_end_10: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? 'We’ll do even better next time!'
          : 'Getting discouraged won’t help!',
      );
    };
    f.title = 'Race Defeat';
    return f;
  })(),
  race_end_lose: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? 'We’ll win someday—I know it!'
          : 'Are you really going to accept a humiliating loss like this?',
      );
    };
    f.title = 'We Won’t Lose Next Time!';
    return f;
  })(),
  summer_start: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'Summer means swimsuits and the beach! Of course, even while enjoying a seaside getaway, ',
        chara.get_colored_name(),
        ' and ',
        you.get_colored_name(),
        ' made sure not to neglect training.',
      ]);
    };
    f.title = 'Summer Training Camp';
    return f;
  })(),
};
