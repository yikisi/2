/**
 * @file Training flavor - others
 * @author 雞雞
 * @author 幽白書
 * @author 黑奴队长
 * @author Katze (translator)
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const {
  pregnant_stage_enum,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');

module.exports = {
  /** @param {CharaTalk} chara third party wanting to join a 3P */
  async join_3p(chara) {
    era.print([
      chara.get_colored_name(),
      ' flushes and wants to join… allow it?',
    ]);
    era.printButton('"Perfect timing"', 1);
    era.printButton('Better not…', 2);
    return (await era.input()) === 1;
  },
  /**
   * @param {CharaTalk} chara third party wanting to join a 3P
   * @param {CharaTalk} you player
   */
  async join_3p_accept(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' dives into ',
      you.get_colored_name(),
      "'s arms…",
    ]);
  },
  /**
   * @param {CharaTalk} chara third party wanting to join a 3P
   * @param {CharaTalk} lover main partner
   * @param {CharaTalk} you player
   */
  async join_3p_force(chara, lover, you) {
    await era.printAndWait([
      'After getting ',
      lover.get_colored_name(),
      "'s okay, ",
      chara.get_colored_name(),
      ' gloriously ignores ',
      you.get_colored_name(),
      "'s protests…",
    ]);
  },
  /** @param {CharaTalk} chara third party wanting to join a 3P */
  async join_3p_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' covers that face and leaves…',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {string} p_desc cock size adjective
   */
  get_penis_be_erect: (chara, p_desc) => [
    chara.get_colored_name(),
    "'s ",
    p_desc,
    ' cock is hard!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {string} b_desc breast size adjective
   */
  get_nipple_be_erect: (chara, b_desc) => [
    'Dark little cherries poke free from the tips of ',
    chara.get_colored_name(),
    "'s ",
    b_desc,
    ' breasts…',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_lubricated: (chara, part) => [
    chara.get_colored_name(),
    "'s ",
    part,
    ' is soaked!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_bleed: (chara, part) => [
    chara.get_colored_name(),
    "'s ",
    part,
    ' is still bleeding!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_wounded: (chara, part) => [
    chara.get_colored_name(),
    "'s ",
    part,
    ' is torn open!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {boolean} is_virgin true = loses virginity, false = loses male virginity
   */
  get_lose_virginity: (chara, is_virgin) => [
    chara.get_colored_name(),
    is_virgin ? ' loses virginity!' : ' loses virginity!',
  ],
  /**
   * Prompt when player chooses where they cum
   * @param {CharaTalk} chara
   */
  get_orgasm_denial_notification: (chara) => [
    chara.get_colored_name(),
    "'s cock is at the limit…",
  ],
  /**
   * Button: accept the load on a body part
   * @param {string} part contact part with the cock
   */
  get_bt_cum_in: (part) => `Take it with ${part}`,
  /** Button: try to pull off and take it outside */
  bt_cum_out: 'Dodge the blast',
  /**
   * Result of choosing external ejaculation
   * @param {CharaTalk} chara ejaculating character
   * @param {CharaTalk} you player
   * @param {string} part contact part
   * @param {boolean} stop_success whether pulling off succeeded
   * @param {boolean} towards_face external spray toward face vs body
   */
  async orgasm_denial(chara, you, part, stop_success, towards_face) {
    if (stop_success) {
      era.print([
        you.get_colored_name(),
        "'s ",
        part,
        ' slips free of ',
        chara.get_colored_name(),
        "'s ready cock, and hot cum sprays straight onto ",
        you.get_colored_name(),
        towards_face ? "'s face" : "'s body",
        '…',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' loses the race against ',
        chara.get_colored_name(),
        '…',
      ]);
    }
  },
  /** @param {CharaTalk} chara */
  get_zero_stamina: (chara) => [
    chara.get_colored_name(),
    ' collapses from total stamina drain…',
  ],
  /** @param {CharaTalk} chara */
  get_lost_mind: (chara) => [
    chara.get_colored_name(),
    ' blanks out from total energy drain…',
  ],
  /**
   * Pleasure mark
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_pleasure(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' trembles from intense pleasure…',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' savors the afterglow with a softened face…',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' seems scorched body and soul by pure bliss…',
        ]);
    }
  },
  /**
   * Submission mark
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async mark_meek(chara, you) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' and ',
        you.get_colored_name(),
        ' feel even more of one heart…',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' yields even further…',
      ]);
    }
  },
  /**
   * Pain mark
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_pain(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          "'s face twists while enduring the pain…",
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' lets out a cry of pain…',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' sobs from pain beyond bearing…',
        ]);
    }
  },
  /**
   * Shame mark
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_shame(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' flushes red with shame…',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' seems ruled by humiliation…',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          ' is completely dominated by shame…',
        ]);
    }
  },
  /**
   * Hate mark
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_hate(chara, level) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait(
        'Even for such a close bond, this may have gone too far',
      );
    }
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          ' glares with a sharp look…',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          ' wears pure anger…',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          "'s face twists with rage while muttering curses…",
        ]);
    }
  },
  /**
   * Lewd crest
   * @param {CharaTalk} chara
   * @param {number} level
   * @param {boolean} is_new newly obtained
   */
  async mark_ero(chara, level, is_new) {
    if (is_new) {
      await era.printAndWait([
        'A lewd crest appears on ',
        chara.get_colored_name(),
        "'s lower belly…",
      ]);
    }
    switch (level) {
      case 1:
        await era.printAndWait("The crest begins showing the egg's path…");
        break;
      case 2:
        await era.printAndWait(
          'The crest can grow more gorgeous with the fetus…',
        );
        break;
      case 3:
        await era.printAndWait(
          'The crest can display pregnancy chance and conception status…',
        );
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} mother creampied mother
   * @param {CharaTalk} father ejaculating father
   * @param {boolean} is_mother_awake
   * @param {boolean} is_father_awake
   * @param {boolean} inmon_no_preg lewd-crest contraception
   */
  async cum_in_womb(
    mother,
    father,
    is_mother_awake,
    is_father_awake,
    inmon_no_preg,
  ) {
    const talent_palam =
      era.get(`talent:${mother.id}:子宫敏感`) > 0 ||
      era.get(`mark:${mother.id}:欢愉`) >= 2;
    const talent_sex =
      era.get(`talent:${mother.id}:淫乱`) > 0 ||
      era.get(`talent:${mother.id}:榨精成瘾`) > 0;
    const has_lv2_inmon = era.get(`mark:${mother.id}:淫纹`) >= 2;
    let talent_check = talent_palam || talent_sex;
    if (has_lv2_inmon) {
      await era.printAndWait([
        'On ',
        mother.get_colored_name(),
        "'s lower belly, the heart-shaped womb mark slowly fills…",
      ]);
    }
    if (
      era.get(`status:${mother.id}:经期`) > 0 ||
      era.get(`cflag:${mother.id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
      era.get(`status:${mother.id}:长效避孕药`) > 0 ||
      era.get(`status:${mother.id}:短效避孕药`) > 0 ||
      inmon_no_preg
    ) {
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            father.get_colored_name(),
            "'s hot seed floods ",
            mother.get_colored_name(),
            "'s aching womb…",
          ]);
          await era.printAndWait([
            mother.get_colored_name(),
            ' drowns in the pleasure…',
          ]);
        } else if (era.get('tflag:强奸') === father.id) {
          await era.printAndWait(
            [
              'In humiliation, ',
              mother.get_colored_name(),
              ' still tastes the rapture of being ',
              mother.sex_code > 0 ? 'a futa' : 'a woman',
              '…',
            ],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              ' savors the rapture of being ',
              mother.sex_code > 0 ? 'a futa' : 'a woman',
              '…',
            ],
            { color: buff_colors[2] },
          );
        }
      }
    } else {
      const love = era.get(`love:${mother.id || father.id}`);
      if (love < 75) {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            " feels that load wasn't stopped by any thin barrier…",
          ]);
        } else {
          await era.printAndWait([
            'A flood of ',
            father.get_colored_name(),
            "'s seed races toward ",
            mother.get_colored_name(),
            "'s unguarded egg…",
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' stiffens in shock…',
          ]);
        } else if (is_mother_awake && talent_check) {
          if (talent_palam) {
            await era.printAndWait([
              father.get_colored_name(),
              "'s hot seed floods ",
              mother.get_colored_name(),
              "'s aching womb…",
            ]);
            await era.printAndWait([
              mother.get_colored_name(),
              ' drowns in the pleasure…',
            ]);
          } else {
            await era.printAndWait(
              [
                mother.get_colored_name(),
                ' savors the rapture of being ',
                mother.sex_code > 0 ? 'a futa' : 'a woman',
                '…',
              ],
              { color: buff_colors[2] },
            );
          }
        }
      } else {
        if (is_father_awake) {
          await era.printAndWait([
            father.get_colored_name(),
            ' pours everything into ',
            mother.get_colored_name(),
            '…',
          ]);
        }
        if (is_mother_awake) {
          if (talent_check && talent_palam) {
            await era.printAndWait([
              mother.get_colored_name(),
              ' clings tight, savoring every pulse of heat…',
            ]);
          } else {
            await era.printAndWait([
              mother.get_colored_name(),
              ' holds ',
              father.get_colored_name(),
              ' close, accepting it all…',
            ]);
          }
        }
      }
    }
  },
  /**
   * Conception is immediately detected by the crest after internal ejaculation.
   * @param {CharaTalk} mother conceiving parent
   * @param {CharaTalk} father ejaculating parent
   */
  be_pregnant(mother, father) {
    era.print([
      `After `,
      father.get_colored_name(),
      ` came inside `,
      mother.get_colored_name(),
      `, the crest on ${mother.sex === 'She' ? 'her' : 'his'} belly begins to look strange…`,
    ]);
  },
  report_preg_in_love: (() => {
    /**
     * Pregnancy while love is high
     * @author 雞雞
     * @param {CharaTalk} mother
     * @param {CharaTalk} father
     * @param {number} unexpected_pregnant
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          ` beams at the pregnancy symbol on the belly crest, then eagerly shares the good news with `,
          father.get_colored_name(),
          `.`,
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ` beams at the positive pregnancy test, then eagerly shares the good news with `,
          father.get_colored_name(),
          `.`,
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          father.get_colored_name(),
          ` checks again and again, only to hear the same answer: the child is `,
          father.sex === 'She' ? 'hers' : 'his',
          `.`,
        ]);
        await era.printAndWait([
          `But `,
          father.get_colored_name(),
          ` has no memory of any of it…`,
        ]);
      } else {
        if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
          await era.printAndWait([
            `Despite having no memory of how it happened, `,
            mother.get_colored_name(),
            ` is certain the child's father could only be the one ${mother.sex.toLowerCase()} loves: `,
            father.get_colored_name(),
            `.`,
          ]);
        }
        await era.printAndWait([
          father.get_colored_name(),
          ` gently pulls `,
          mother.get_colored_name(),
          ` into an embrace, and together they celebrate the new life growing within…`,
        ]);
      }
    };
    f.title = `A New Life`;
    return f;
  })(),
  report_preg: (() => {
    /**
     * Pregnancy at love/low bond
     * @author 雞雞
     * @param {CharaTalk} mother
     * @param {CharaTalk} father
     * @param {number} unexpected_pregnant
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' goes pale at the pregnancy mark on the belly crest and bolts for the bathroom to throw up.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' goes pale at the pregnancy test, then vomits into the sink again.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' has no memory of how the pregnancy happened. Hard to believe the culprit is ',
          father.get_colored_name(),
          '—but only ',
          father.sex.toLowerCase(),
          ' could have done it…',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          'Later, ',
          mother.get_colored_name(),
          ' carefully tells ',
          father.get_colored_name(),
          ' about the pregnancy.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' asks again and again, and still gets the answer that the child is ',
          father.sex === 'She' ? 'hers' : 'his',
          '.',
        ]);
        await era.printAndWait([
          'Though ',
          father.get_colored_name(),
          ' has no memory of it, ',
          father.sex.toLowerCase(),
          " still chooses to take on a father's duty through ",
          mother.get_colored_name(),
          "'s tears…",
        ]);
        if (father.id === 0 && era.get(`cflag:${father.id}:阴道尺寸`) > 0) {
          await era.printAndWait([
            '…Though ',
            father.get_colored_name(),
            ' also kind of wanted to be a mother…',
          ]);
        }
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          'Later, ',
          mother.get_colored_name(),
          ' nervously tells ',
          father.get_colored_name(),
          ' about the pregnancy.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' seems to catch tears at ',
          mother.get_colored_name(),
          "'s eyes…",
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' timidly asks ',
          father.get_colored_name(),
          " to take on a father's duty…",
        ]);
      } else {
        await era.printAndWait([
          'Later, ',
          mother.get_colored_name(),
          ' coldly tells ',
          father.get_colored_name(),
          ' about the pregnancy.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          ' seems to catch tears at ',
          mother.get_colored_name(),
          "'s eyes…",
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          ' bitterly demands ',
          father.get_colored_name(),
          " take on a father's duty…",
        ]);
      }
    };
    f.title = 'Accident';
    return f;
  })(),
  have_baby: (() => {
    /**
     * Birth, love/low bond
     * @author 雞雞
     * @param {CharaTalk} mother
     * @param {CharaTalk} father
     * @param {number} unexpected_pregnant
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' glances shyly at ',
          father.get_colored_name(),
          ", unsure how to face the child's father.",
        ]);
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          ' glances shyly at ',
          father.get_colored_name(),
          ", unsure how to see the child's father.",
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          ' looks at ',
          father.get_colored_name(),
          ' with empty eyes, yet shows pure care for the child.',
        ]);
      }
    };
    f.title = 'New Life';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} awake whether the character is awake
   */
  async shop_start(chara, you, awake) {
    if (!awake) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' sleeps on, unaware of what ',
        you.get_colored_name(),
        ` is about to do to ${chara.sex.toLowerCase()}…`,
      ]);
    } else if (era.get(`mark:${chara.id}:反抗刻印`)) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' stares coldly at ',
        you.get_colored_name(),
        ', eyes full of hate…',
      ]);
    } else if (era.get('flag:惩戒力度') >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' looks at ',
        you.get_colored_name(),
        ' with a challenge—what tricks can a mere sex slave pull…',
      ]);
    } else if (
      era.get(`mark:${chara.id}:淫纹`) ||
      era.get(`mark:${chara.id}:欢愉`)
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' looks at ',
        you.get_colored_name(),
        ' eager for whatever change comes next…',
      ]);
    } else if (era.get(`mark:${chara.id}:同心`) >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' looks timidly at ',
        you.get_colored_name(),
        ', not understanding why this is necessary…',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' looks uneasily at ',
        you.get_colored_name(),
        ', unsure what comes next…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_sleep(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' sleeps on, unaware of what ',
      you.get_colored_name(),
      ` did to ${chara.sex.toLowerCase()}…`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_hate(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      " endures the body's changes and mocks ",
      you.get_colored_name(),
      ` for treating ${chara.sex.toLowerCase()} like a sex toy…`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_pleasure(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      " feels the body change and can't help wanting to enjoy it with ",
      you.get_colored_name(),
      '…',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_slave(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' looks at ',
      you.get_colored_name(),
      ' near tears—but one day the mind will follow what the body learns…',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_lover(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' looks at ',
      you.get_colored_name(),
      ' with disappointment, hurt that ',
      you.get_colored_name(),
      ` isn't satisfied with ${chara.sex === 'She' ? 'her' : 'his'} body…`,
    ]);
  },
  /**
   * First discovered affair
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} characteristic temperament (may be warped by lewd crest)
   * @param {boolean} cuckold whether chara is a cuckold fetishist
   */
  after_betrayed_first(chara, you, characteristic, cuckold) {
    if (chara.race > 0) {
      era.print([
        'A ',
        chara.uma_sex_title,
        "'s nose is sharp, and the lewd scent on ",
        you.get_colored_name(),
        ' advertises that recent Umapyoi to anyone nearby.',
      ]);
      era.print([
        'Catching the scent, ',
        chara.get_colored_name(),
        ' feels ',
        cuckold
          ? 'a quiet heat of lust…'
          : characteristic >= 0
            ? 'a surge of anger…'
            : 'a wave of sadness…',
        ' at ',
        you.get_colored_name(),
        "'s unfaithfulness.",
      ]);
    } else {
      era.print([
        'The lewd scent on ',
        you.get_colored_name(),
        ' advertises that recent Umapyoi to anyone nearby.',
      ]);
      era.print([
        'Noticing it, ',
        chara.get_colored_name(),
        ' feels ',
        cuckold
          ? 'a quiet heat of lust…'
          : characteristic >= 0
            ? 'a surge of anger…'
            : 'a wave of sadness…',
        ' at ',
        you.get_colored_name(),
        "'s unfaithfulness.",
      ]);
    }
  },
  /**
   * Second discovered affair
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} characteristic temperament (may be warped by lewd crest)
   * @param {boolean} cuckold whether chara is a cuckold fetishist
   */
  after_betrayed_second(chara, you, characteristic, cuckold) {
    era.print([
      you.get_colored_name(),
      ' failed to resist temptation and betrayed ',
      chara.get_colored_name(),
      ' again.',
    ]);
    era.print(
      'Behind a moment of released lust, how many tangled feelings are already spreading?',
    );
    era.print([
      chara.race > 0 ? 'Catching the scent, ' : 'Noticing it, ',
      chara.get_colored_name(),
      ' feels ',
      cuckold
        ? 'a quiet heat of lust…'
        : characteristic >= 0
          ? 'a surge of anger…'
          : 'a wave of sadness…',
      ' at ',
      you.get_colored_name(),
      "'s unfaithfulness.",
    ]);
  },
  /**
   * Repeated affairs discovered
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} cuckold whether chara is a cuckold fetishist
   */
  after_betrayed(chara, you, cuckold) {
    if (cuckold) {
      era.print([
        you.get_colored_name(),
        "'s unfaithfulness breaks ",
        chara.get_colored_name(),
        "'s heart—and still stirs a hard-to-name excitement…",
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        "'s unfaithfulness fills ",
        chara.get_colored_name(),
        ' with fury…',
      ]);
    }
  },
};
