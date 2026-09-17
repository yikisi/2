/**
 * @file Basement Timon
 * @author 露娜俘虏
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  /**
   * Rescued by the academy rescue team
   * @param {CharaTalk} you
   * @param {number} fine
   */
  async school_rescue(you, fine) {
    await era.printAndWait([
      'After a harrowing week, ',
      you.get_colored_name(),
      ' was finally rescued from the basement by the academy rescue team...',
    ]);
    if (fine > 0) {
      await era.printAndWait(
        '...But half of the savings were deducted as a penalty for missing work last week.',
      );
    }
  },
  /**
   * @param {number} hours
   * @param {number} minutes
   * @param {boolean} [base_12]
   */
  get_clock(hours, minutes, base_12 = false) {
    let p_hour;
    let p_minute;
    if (base_12) {
      if (hours < 12) {
        p_hour = 'AM ' + hours;
      } else {
        p_hour = `PM ${hours % 12 || 12}`;
      }
    } else {
      p_hour = hours.toString();
    }
    if (minutes > 0) {
      p_minute = `:${minutes}`;
    } else {
      p_minute = ':00';
    }
    return `${p_hour}${p_minute}`;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_strike(chara) {
    return [
      chara.get_colored_name(),
      ' just got back. This may be the perfect chance for a surprise attack...',
    ];
  },
  /**
   * @author 露娜俘虏
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} security_level
   * @param {number} love_level
   * @param {boolean} is_fix
   */
  get_info_awake(chara, you, security_level, love_level, is_fix) {
    const ret = [chara.get_colored_name(), ' '];
    switch (security_level) {
      case 1:
        ret.push('is regretting a moment of reckless impulse');
        break;
      case 2:
        ret.push('looks too tense to calm down');
        break;
      case 3:
        ret.push('has let that obsession take root');
        break;
      case 4:
        ret.push('has a resolve that cannot be underestimated');
        break;
      case 5:
        ret.push('has made every defense impenetrable');
        break;
    }
    ret.push('...');
    switch (love_level) {
      case 0:
        ret.push(
          chara.sex,
          ' still has other things to do and will leave soon',
        );
        break;
      case 1:
        ret.push(
          chara.sex,
          ' keeps a close eye on ',
          you.get_colored_name(),
          '. It seems ',
          chara.sex,
          ' will not be leaving anytime soon',
        );
        break;
      case 2:
        ret.push(
          chara.sex,
          ' stares fixedly at ',
          you.get_colored_name(),
          '. It seems ',
          chara.sex,
          ' has no intention of leaving',
        );
        break;
      case 3:
        ret.push(
          chara.sex,
          ' smiles at ',
          you.get_colored_name(),
          ', seemingly unwilling to leave ',
          you.get_colored_name(),
        );
        break;
      case 4:
        ret.push(
          chara.sex,
          ' looks utterly heartbroken and has no intention of leaving ',
          you.get_colored_name(),
          ' behind',
        );
    }
    ret.push('...');
    if (is_fix) {
      ret.push('The basement is being reinforced...');
    }
    return ret;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_sleep: (chara) => [
    chara.get_colored_name(),
    // STATUSNAME:39 = Uma Hop S
    era.get(`status:${chara.id}:39`) > 0
      ? ' is sleeping soundly'
      : ' is sleeping peacefully',
    '...',
  ],
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  first_time(you) {
    era.print([
      'After what felt like an eternity, ',
      you.get_colored_name(),
      ' slowly awoke on a simple cot...',
    ]);
    era.print('An unfamiliar ceiling came into view...');
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  welcome(chara, you) {
    if (LifeEventMarks.get_marks(0).b_start) {
      era.print([
        'After what felt like an eternity, ',
        you.get_colored_name(),
        ' slowly awoke on a simple cot...',
      ]);
      era.print([
        'An unfamiliar ceiling came into view...along with the smiling face of ',
        chara.get_colored_name(),
        '.',
      ]);
      era.print([
        'Now ',
        you.get_colored_name(),
        ' was a prisoner in this cage of love...and ',
        chara.get_colored_name(),
        ' was the sole jailer...',
      ]);
    } else {
      era.print([
        'After what felt like an eternity, ',
        you.get_colored_name(),
        ' slowly awoke...',
      ]);
      era.print([
        'The same unfamiliar ceiling came into view...along with the smiling face of ',
        chara.get_colored_name(),
        '.',
      ]);
      era.print([
        'At last, the prisoner met the sole jailer of this cage of love... And ',
        you.sex,
        ' was waiting...',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async strike_success(you) {
    await era.printAndWait([
      you.get_colored_name(),
      "'s surprise attack worked! The basement escape was a success!",
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async strike_fail(you) {
    await era.printAndWait([
      you.get_colored_name(),
      "'s surprise attack failed! A blow knocked them unconscious!",
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async battle_success(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' successfully fought back against ',
      chara.get_colored_name(),
      '!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async battle_fail(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' failed to fight back and was knocked unconscious by ',
      chara.get_colored_name(),
      '!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_escape(you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' successfully disabled the trap and escaped the basement!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_prison(you) {
    await era.printAndWait([
      'But ',
      you.get_colored_name(),
      ' was defeated by the trap...',
      { isBr: true },
      you.get_colored_name(),
      ' was knocked unconscious and taken back to the basement...',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} out_of_prison
   * @param {boolean} s_level_up
   * @param {boolean} [is_back]
   */
  find_escape(chara, you, out_of_prison, s_level_up, is_back) {
    if (out_of_prison) {
      era.print([
        you.get_colored_name(),
        ' ran straight into ',
        chara.get_colored_name(),
        ', who had just ',
        is_back ? 'returned' : 'woken up',
        '!',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        "'s escape attempt was caught red-handed!",
      ]);
    }
    era.print([
      'An irritated ',
      chara.get_colored_name(),
      ' dragged ',
      you.get_colored_name(),
      ' back!',
    ]);
    if (s_level_up) {
      era.print([
        chara.get_colored_name(),
        ' has grown even more wary of ',
        you.get_colored_name(),
        '...',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  fix_prison(chara) {
    era.print([chara.get_colored_name(), ' reinforced the basement...']);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_up(chara, you) {
    if (LifeEventMarks.get_marks(chara.id).b_start > 0) {
      era.print([
        'After a deep sleep, the master of this basement—',
        chara.get_colored_name(),
        '—finally awoke, ready to enjoy some time with ',
        you.get_colored_name(),
        '...',
      ]);
    } else {
      era.print([chara.get_colored_name(), ' slowly awoke...']);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  back_basement(chara, you) {
    if (LifeEventMarks.get_marks(chara.id).b_start > 0) {
      era.print([
        'After a long wait, the master of this basement—',
        chara.get_colored_name(),
        '—finally appeared, ready to enjoy some time with ',
        you.get_colored_name(),
        '...',
      ]);
    } else {
      era.print([chara.get_colored_name(), ' returned to the basement...']);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} supporter
   */
  async rape(chara, you, supporter) {
    if (supporter) {
      await era.printAndWait([
        'Led by ',
        chara.get_colored_name(),
        ', ',
        supporter.get_colored_name(),
        ' slowly closed in on ',
        you.get_colored_name(),
        ' as well...',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' slowly closed in on ',
        you.get_colored_name(),
        '...',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_release_agree(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' guiltily agreed to ',
      you.get_colored_name(),
      "'s request.",
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' patted ',
      chara.get_colored_name(),
      ' on the head to show there were no hard feelings.',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_release_reject(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' rejected ',
      you.get_colored_name(),
      "'s request with a faint smile.",
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_time(chara, you) {
    await chara.say_and_wait('What time is it?');
    await era.printAndWait([
      chara.get_colored_name(),
      ' merely smiled at ',
      you.get_colored_name(),
      '.',
    ]);
  },
  rescue_fail_awake: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     */
    const f = async (chara, you, owner) => {
      await era.printAndWait([
        chara.get_colored_name(),
        ' stormed into the basement carefully designed by ',
        owner.get_colored_name(),
        ', but failed to rescue the beloved ',
        you.get_colored_name(),
        '...',
      ]);
      await era.printAndWait([
        'Before ',
        you.get_colored_name(),
        "'s despairing eyes, ",
        chara.get_colored_name(),
        ' was driven out of the basement by ',
        owner.get_colored_name(),
        '...',
      ]);
    };
    f.title = 'So Close, Yet So Far';
    return f;
  })(),
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rescue_fail_sleep(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' was awakened by the sound of a fight.',
    ]);
    await era.printAndWait([
      'The basement was in ruins, but the unscathed ',
      chara.get_colored_name(),
      ' was still smiling at ',
      you.get_colored_name(),
      '...',
    ]);
  },
  rescue_sneak_success: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     * @param {boolean} o_awake
     */
    const f = async (chara, you, owner, awake, o_awake) => {
      if (awake) {
        await era.printAndWait([
          'While ',
          owner.get_colored_name(),
          o_awake ? ' was away, ' : ' was fast asleep, ',
          chara.get_colored_name(),
          ' slipped into the basement and helped ',
          you.get_colored_name(),
          ' make a clean getaway...',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' vaguely felt someone carrying them.',
        ]);
        await era.printAndWait([
          'Upon waking, they were already in the training room, with the smiling ',
          chara.get_colored_name(),
          ' standing before them.',
        ]);
      }
    };
    f.title = 'Heroic Rescue';
    return f;
  })(),
  rescue_sneak_prison: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     * @param {boolean} o_awake
     */
    const f = async (chara, you, owner, awake, o_awake) => {
      if (awake) {
        await era.printAndWait([
          'While ',
          owner.get_colored_name(),
          o_awake ? ' was away, ' : ' was fast asleep, ',
          chara.get_colored_name(),
          ' slipped into the basement and helped ',
          you.get_colored_name(),
          ' make a clean getaway...',
        ]);
        await era.printAndWait([
          'Just as ',
          you.get_colored_name(),
          ' thought life could finally return to normal, ',
          chara.get_colored_name(),
          ' led ',
          you.get_colored_name(),
          ' somewhere else—and then came a quiet sound...',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' vaguely felt someone carrying them.',
        ]);
        await era.printAndWait([
          'Upon waking, they were still in a basement—one with a different layout—and the smiling ',
          chara.get_colored_name(),
          ' stood before them.',
        ]);
      }
      await era.printAndWait('「Click」', { fontSize: '1.5rem' });
    };
    f.title = 'Out of the Frying Pan...';
    return f;
  })(),
  rescue_join: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     */
    const f = async (chara, you, owner, awake) => {
      if (awake) {
        await era.printAndWait([
          chara.get_colored_name(),
          ' stormed into the basement carefully designed by ',
          owner.get_colored_name(),
          ' and confronted ',
          owner.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Just as ',
          you.get_colored_name(),
          ' expected a fight to break out, the ',
          chara.couple_title,
          ' instead shook hands and made peace...',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' emerged from the haze and discovered someone else in the basement besides ',
          owner.get_colored_name(),
          ' and themselves—',
          chara.get_colored_name(),
          '.',
        ]);
      }
      await era.printAndWait([
        'Now this cramped basement—and ',
        you.get_colored_name(),
        ' within it—had two masters...',
      ]);
    };
    f.title = 'Two Suns in One Sky';
    return f;
  })(),
  rescue_battle_success: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     */
    const f = async (chara, you, owner, awake) => {
      if (awake) {
        await era.printAndWait([
          chara.get_colored_name(),
          ' stormed into the basement carefully designed by ',
          owner.get_colored_name(),
          ' and knocked ',
          owner.get_colored_name(),
          ' to the floor...',
        ]);
        await era.printAndWait([
          'As ',
          owner.get_colored_name(),
          ' watched, ',
          chara.get_colored_name(),
          ' helped ',
          you.get_colored_name(),
          ' make a clean getaway...',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' vaguely felt someone carrying them.',
        ]);
        await era.printAndWait([
          'Upon waking, they were already in the training room, where ',
          chara.get_colored_name(),
          ' stood smiling, their clothes slightly rumpled.',
        ]);
      }
    };
    f.title = 'Heroic Rescue';
    return f;
  })(),
  rescue_battle_prison: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} owner
     * @param {boolean} awake
     */
    const f = async (chara, you, owner, awake) => {
      if (awake) {
        await era.printAndWait([
          chara.get_colored_name(),
          ' stormed into the basement carefully designed by ',
          owner.get_colored_name(),
          ' and knocked ',
          owner.get_colored_name(),
          ' to the floor...',
        ]);
        await era.printAndWait([
          'Just as ',
          you.get_colored_name(),
          ' thought life could finally return to normal, ',
          chara.get_colored_name(),
          ' led ',
          you.get_colored_name(),
          ' somewhere else—and then came a quiet sound...',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' vaguely felt someone carrying them.',
        ]);
        await era.printAndWait([
          'Upon waking, they were still in a basement—one with a different layout—and the disheveled but smiling ',
          chara.get_colored_name(),
          ' stood before them...',
        ]);
      }
      await era.printAndWait('「Click」', { fontSize: '1.5rem' });
    };
    f.title = 'Out of the Frying Pan...';
    return f;
  })(),
};
