/**
 * @file Three Goddesses prayer - system text
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 * @author Katze (translator)
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
} = require('#/era-electron');

const { money_color } = require('#/data/color-const');

module.exports = {
  /**
   * Three Goddesses statue - reactions by companion temperament
   * @param {CharaTalk} chara companion; id 0 means no companion
   * @param {CharaTalk} you player
   * @param {number} chara_chara temperament, may be warped by a lewd crest
   * @returns {TextContent}
   */
  get_chara_react(chara, you, chara_chara) {
    switch (chara_chara) {
      case 1:
      case 3:
        return [
          chara.get_colored_name(),
          ' stands nearby with a confident smile, casting ',
          you.get_colored_name(),
          ' a look full of trust.',
        ];
      case -1:
      case 0:
      case 2:
        return [
          chara.get_colored_name(),
          ' studies the Three Goddesses statue intently, then looks back to ',
          you.get_colored_name(),
          ', waiting for ',
          you.get_colored_name(),
          ' to do something.',
        ];
      case -3:
      case -2:
        return [
          chara.get_colored_name(),
          ' quietly sways a tail nearby, waiting for ',
          you.get_colored_name(),
          "'s next move.",
        ];
    }
  },
  /**
   * Arrive at the statue, before praying
   * @param {CharaTalk} chara companion; id 0 means no companion
   * @param {CharaTalk} god one of the Three Goddesses
   * @param {CharaTalk} you player
   * @param {boolean} has_prayed whether a prayer has already been made
   * @param {TextContent} chara_react companion reaction
   */
  start(chara, god, you, has_prayed, chara_react) {
    if (chara.id > 0) {
      if (has_prayed) {
        god.say_as_unknown('……');
        print('A mysterious aura drifts over the Three Goddesses statue…');
        print([
          'Someone is watching ',
          you.get_colored_name(),
          ' and ',
          chara.get_colored_name(),
          '…',
        ]);
      } else {
        print([
          you.get_colored_name(),
          ' and ',
          chara.get_colored_name(),
          ' arrive together before the Three Goddesses statue.',
        ]);
        print(chara_react);
      }
    } else if (has_prayed) {
      god.say_as_unknown('……');
      print('A mysterious aura drifts over the Three Goddesses statue…');
      print(['Someone is watching ', you.get_colored_name(), '…']);
    } else {
      print([
        you.get_colored_name(),
        ' comes alone before the Three Goddesses statue.',
      ]);
      print(
        "From the bottles on the solemn statue's shoulders, water flows without end.",
      );
      god.say_as_unknown('……');
    }
  },
  bt_pray_honour_buff: 'Pray for fame (1,000 Reputation)',
  bt_pray_money_buff: 'Pray for wealth (500 Reputation)',
  bt_pray_money: 'Pray for money now (50+ Reputation)',
  bt_pray_your_power: 'Pray to grow stronger (200 Reputation)',
  get_bt_pray_over_limit: (name) =>
    `Pray for ${name} to break the limit (50-500 Reputation)`,
  bt_pray_self_over_limit: 'Pray to break the limit (50-500 Reputation)',
  get_bt_pray_heal: (name) => `Pray for ${name} to recover (800 Reputation)`,
  bt_pray_self_heal: 'Pray to recover (800 Reputation)',
  /**
   * Pray for reputation gain buff
   * @param {CharaTalk} you player
   * @param {string} uma Umamusuko or Umamusume
   * @param {function:Promise} finish_cb reaction after prayer
   */
  async pray_honour_buff(you, uma, finish_cb) {
    print(
      '(Is this what I truly want?)\nThe thought flashes through the mind for some reason…',
    );
    printButton(
      `Yes (Reputation gain +${get('global:声望加成')}%->${get('global:声望加成') + 1}%)`,
      1,
    );
    printButton('Maybe not…', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait('Imagining a scene of being surrounded by praise…');
      await finish_cb();
      println();
      const honour = get('flag:当前声望');
      if (honour >= 2000) {
        await printAndWait([
          you.get_colored_name(),
          " opens a phone and sighs that the reputation still hasn't left Japan for the world stage.",
        ]);
      } else if (honour >= 1000) {
        await printAndWait([
          you.get_colored_name(),
          " opens a phone and sighs that fame still hasn't brought better prospects directly.",
        ]);
      } else if (honour >= 500) {
        await printAndWait([
          you.get_colored_name(),
          ' opens a phone and sighs that outside close friends and family, almost no one truly pays attention.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' opens a phone and sighs at how few contacts exist beyond close friends and family.',
        ]);
      }
      await printAndWait('Mid-thought, a message from a stranger arrives.');
      await printAndWait([
        'Someone interested in how ',
        you.get_colored_name(),
        ' develops racing ',
        uma,
        '—and eager to see the results of those trainees.',
      ]);
      await printAndWait('After that, more messages like it start coming in…');
    }
    return ret;
  },
  /**
   * Pray for money gain buff
   * @param {CharaTalk} you player
   * @param {function:Promise} finish_cb reaction after prayer
   */
  async pray_money_buff(you, finish_cb) {
    print(
      '(Is this what I truly want?)\nThe thought flashes through the mind for some reason…',
    );
    printButton(
      `Yes (UmaCoin gain +${get('global:金钱加成')}%->${get('global:金钱加成') + 1}%)`,
      1,
    );
    printButton('Maybe not…', 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        you.get_colored_name(),
        ' imagines a piggy bank growing heavier day by day…',
      ]);
      await finish_cb();
      println();
      await printAndWait(
        'For some reason, salary and cut figures float up in the mind—and they feel a little higher than before.',
      );
      await printAndWait(
        'Tracen pay has always been this good, so it must be imagination…',
      );
    }
    return ret;
  },
  /**
   * Pray for money
   * @param {CharaTalk} you player
   * @param {string} uma Umamusuko or Umamusume
   * @param {function:Promise} finish_cb reaction after prayer
   */
  async pray_money(you, uma, finish_cb) {
    print(
      '(So… about how much?)\nThe question suddenly flashes through the mind…',
    );
    const honour = get('flag:当前声望');
    printButton('250 UmaCoin would do… (50 Reputation)', 1, {
      disabled: honour <= 50,
    });
    printButton('500 UmaCoin would do… (100 Reputation)', 2, {
      disabled: honour <= 100,
    });
    printButton('750 UmaCoin would do… (150 Reputation)', 3, {
      disabled: honour <= 150,
    });
    printButton('1,000 UmaCoin would do… (200 Reputation)', 4, {
      disabled: honour <= 200,
    });
    printButton('Never mind', 99);
    const ret = await input();
    switch (ret) {
      case 1:
      case 2:
        await printAndWait([
          you.get_colored_name(),
          ' imagines using the money to buy training gear for a ',
          uma,
          '…',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          'Before long, ',
          you.get_colored_name(),
          ' gets a message from the academy—somehow the training methods for racing ',
          uma,
          ' are said to risk injury.',
        ]);
        await printAndWait([
          'Then comes ',
          (250 * ret).toString(),
          ' UmaCoin, with orders for ',
          you.get_colored_name(),
          ' to revise those methods…',
        ]);
        break;
      case 3:
      case 4:
        await printAndWait([
          you.get_colored_name(),
          ' imagines swimming through an ocean of money…',
        ]);
        await finish_cb();
        println();
        await printAndWait([
          'Before long, ',
          you.get_colored_name(),
          ' gets a message from the academy about a special subsidy: ',
          (250 * ret).toString(),
          ' UmaCoin for ',
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait([
          'On one condition: as a Tracen Trainer, ',
          you.get_colored_name(),
          ' must stop stirring up weird rumors…',
        ]);
    }
    return ret;
  },
  /**
   * Pray to grow stronger
   * @param {CharaTalk} you player
   * @param {CharaTalk} god one of the Three Goddesses
   * @param {string} uma Umamusuko or Umamusume
   * @param {boolean[]} disabled_list whether a stat is already full
   * @param {number} random_select actual stat chosen when random is selected
   * @param {function:Promise} pray_cb shared reaction after praying for self power
   * @param {function:Promise} finish_cb reaction after prayer
   * @returns {Promise<[number,number]>} [player choice, actual stat]
   */
  async pray_your_power(
    you,
    god,
    uma,
    disabled_list,
    random_select,
    pray_cb,
    finish_cb,
  ) {
    print('(Which side needs the boost most?)');
    print('The question surfaces in the mind…');
    printButton('Speed (+80)', 0, { disabled: disabled_list[0] });
    printButton('Stamina (+80)', 1, { disabled: disabled_list[1] });
    printButton('Power (+80)', 2, { disabled: disabled_list[2] });
    printButton('Guts (+80)', 3, { disabled: disabled_list[3] });
    printButton('Wit (+80)', 4, { disabled: disabled_list[4] });
    printButton('All of them need work… (random stat +100)', 5);
    printButton('Nothing left to improve', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] <= 5) {
      switch (ret[0]) {
        case 0:
          await printAndWait([
            'Imagining walking alongside a jogging trainee ',
            uma,
            ' while coaching…',
          ]);
          break;
        case 1:
          await printAndWait([
            'Imagining tirelessly teaching racing ',
            uma,
            '…',
          ]);
          break;
        case 2:
          await printAndWait([
            'Imagining helping a trainee ',
            uma,
            ' win a tug-of-war championship…',
          ]);
          break;
        case 3:
          await printAndWait([
            'Imagining cheering a trainee ',
            uma,
            ' hoarse from the sidelines…',
          ]);
          break;
        case 4:
          await printAndWait([
            'Imagining drafting perfect training plans for a trainee ',
            uma,
            ', one after another…',
          ]);
          break;
        case 5:
          await printAndWait([
            'A scene of a trainee ',
            uma,
            ' offering comfort surfaces…',
          ]);
          ret[1] = random_select;
      }
      await pray_cb();
      println();
      await finish_cb();
      switch (ret[1]) {
        case 0:
          await printAndWait([
            'Warm afterglow still lingers, and ',
            you.get_colored_name(),
            ' feels the body grow lighter…',
          ]);
          break;
        case 1:
          await printAndWait([
            'Warm afterglow still lingers, and ',
            you.get_colored_name(),
            ' feels the breathing grow steadier…',
          ]);
          break;
        case 2:
          await printAndWait([
            'Warm afterglow still lingers, and ',
            you.get_colored_name(),
            ' feels the muscles grow fuller…',
          ]);
          break;
        case 3:
          await printAndWait([
            'Warm afterglow still lingers, and ',
            you.get_colored_name(),
            ' feels a heat surge through the chest…',
          ]);
          break;
        case 4:
          await printAndWait([
            'Warm afterglow still lingers, and ',
            you.get_colored_name(),
            ' feels the mind grow razor-clear…',
          ]);
      }
    } else {
      await god.say_as_unknown_and_wait('Keep striving…');
      await printAndWait('A voice like that seems to be heard.');
      println();
      await finish_cb();
      await printAndWait(
        'The Three Goddesses statue still stands in quiet silence…',
      );
    }
    return ret;
  },
  /**
   * Pray to break the limit
   * @param {CharaTalk} chara companion; id 0 means no companion
   * @param {CharaTalk} you player
   * @param {string} uma Umamusuko or Umamusume
   * @param {string} limited number of capped stats
   * @param {string} cost reputation cost
   */
  async pray_over_limit(chara, you, uma, limited, cost) {
    print([
      '(For ',
      chara.get_colored_name(),
      ', already at the extreme in ',
      limited,
      ' abilities—should the limit really be pushed further?)',
      { isBr: 1 },
      'The question surfaces in the mind…',
    ]);
    printButton(`Agree (${cost} Reputation, Training Bonus -10%)`, 1);
    printButton('Maybe hold back for now', 2);
    const ret = await input();
    if (ret === 1) {
      if (chara.id > 0) {
        await printAndWait([
          'Imagining the racing ',
          chara.uma_sex_title,
          " at one's side surpassing every predecessor and smashing records…",
        ]);
        await printAndWait([
          'When the prayer ends, eyes open at the same moment as ',
          chara.get_colored_name(),
          ' beside.',
        ]);
        println();
        await printAndWait([
          'Opening those eyes, ',
          you.get_colored_name(),
          ' can clearly feel new growth potential in every move from ',
          chara.get_colored_name(),
          '!',
        ]);
      } else {
        await printAndWait(
          'Imagining working through the night, drafting brand-new training manuals one after another…',
        );
        await printAndWait([
          'In the dark, a faint light stirs and slowly flows into ',
          you.get_colored_name(),
          '!',
        ]);
        println();
        await printAndWait('When the prayer ends, eyes slowly open…');
        await printAndWait([
          'Warm afterglow still lingers, and ',
          you.get_colored_name(),
          ' is sure further growth is possible.',
        ]);
      }
    } else if (chara.id > 0) {
      await printAndWait([
        'Remembering ',
        chara.get_colored_name(),
        ' training solidly day after day…',
      ]);
      await printAndWait([
        'When the prayer ends, ',
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        ' open their eyes together.',
      ]);
    } else {
      await printAndWait([
        'Remembering countless days and nights spent with racing ',
        uma,
        '…',
      ]);
      await printAndWait('When the prayer ends, the eyes slowly open.');
    }
    return ret;
  },
  /**
   * Pray to recover health
   * @param {CharaTalk} chara companion; id 0 means no companion
   * @param {CharaTalk} god one of the Three Goddesses
   * @param {CharaTalk} you player
   * @param {string} uma Umamusuko or Umamusume
   * @param {TextContent} chara_react companion reaction
   * @param {function:Promise} finish_cb reaction after prayer
   */
  async pray_heal(chara, god, you, uma, chara_react, finish_cb) {
    print([
      '(In the end, what is wanted most is…)',
      { isBr: true },
      you.get_colored_name(),
      ' worries over ',
      chara.get_colored_name(),
      "'s health…",
    ]);
    printButton('If a prayer might help…', 1);
    printButton("More than prayer, real effort is what's needed", 2);
    const ret = await input();
    if (ret === 1) {
      await printAndWait([
        'Imagining ',
        chara.get_colored_name(),
        ' healthy and full of life again…',
      ]);
      await printAndWait([
        'When the prayer ends, ',
        you.get_colored_name(),
        ' opens those eyes.',
      ]);
      println();
      if (chara.id > 0) {
        await printAndWait([
          'Feeling a body packed with vitality, ',
          you.get_colored_name(),
          ' almost wonders what coming to the statue was even for.',
        ]);
      } else {
        await printAndWait(chara_react);
        println();
        await printAndWait([
          'Just now, ',
          you.get_colored_name(),
          ' brought vibrant ',
          chara.get_colored_name(),
          ' before the Three Goddesses statue—what for, exactly?',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' thinks about the next move.',
        ]);
      }
    } else {
      await printAndWait([
        'Imagining ',
        chara.get_colored_name(),
        ' recovering steadily with rest…',
      ]);
      println();
      await god.say_as_unknown_and_wait('You can… do it…');
      await printAndWait('A voice like that seems to be heard.');
      println();
      await finish_cb();
      println();
      await printAndWait(
        'The Three Goddesses statue still stands in quiet silence…',
      );
    }
    return ret;
  },
  /**
   * Pray to recover health when already healthy
   * @param {CharaTalk} chara companion; id 0 means no companion
   * @param {CharaTalk} you player
   * @param {function:Promise} finish_cb reaction after prayer
   */
  async pray_heal_no_need(chara, you, finish_cb) {
    await printAndWait([
      'Praying that the goddesses will keep watching over ',
      chara.get_colored_name(),
      "'s health…",
    ]);
    println();
    await finish_cb();
    println();
    await printAndWait(
      'The Three Goddesses statue still stands in quiet silence…',
    );
  },
  /**
   * Shared pre-prayer action
   * @param {CharaTalk} chara companion; id 0 means no companion
   * @param {CharaTalk} you player
   */
  common_start_pray(chara, you) {
    if (chara.id > 0) {
      print([
        'At ',
        you.get_colored_name(),
        "'s cue, ",
        chara.get_colored_name(),
        ' closes those eyes as well, praying silently before the Three Goddesses statue…',
      ]);
    } else {
      print([
        you.get_colored_name(),
        ' prays alone in silence before the Three Goddesses statue…',
      ]);
    }
  },
  /**
   * Shared post-prayer reaction
   * @param {CharaTalk} chara companion; id 0 means no companion
   * @param {CharaTalk} you player
   */
  async common_finish_pray(chara, you) {
    if (chara.id > 0) {
      await printAndWait([
        'When the prayer ends, ',
        you.get_colored_name(),
        ' and ',
        chara.get_colored_name(),
        ' open their eyes together.',
      ]);
    } else {
      await printAndWait([
        'When the prayer ends, ',
        you.get_colored_name(),
        ' slowly opens those eyes.',
      ]);
    }
  },
  /**
   * Shared reaction after praying for self power
   * @param {CharaTalk} you player
   */
  async common_pray_your_power(you) {
    await printAndWait([
      'In the dark, a faint light stirs and slowly flows into ',
      you.get_colored_name(),
      '!',
    ]);
  },
  /** After abandoning a choice, pray for peace */
  async common_pray_peace() {
    await printAndWait("Praying for Tracen Academy's safety…");
  },
  /**
   * Leave the Three Goddesses statue
   * @param {CharaTalk} chara companion; id 0 means no companion
   * @param {CharaTalk} you player
   * @param {boolean} has_prayed whether a prayer has already been made
   */
  async leave(chara, you, has_prayed) {
    if (chara.id > 0) {
      if (has_prayed) {
        await printAndWait([
          chara.get_colored_name(),
          ' and ',
          you.get_colored_name(),
          ' leave the Three Goddesses statue together.',
        ]);
      } else {
        await printAndWait([
          'After a brief prayer at the statue, ',
          chara.get_colored_name(),
          ' and ',
          you.get_colored_name(),
          ' leave together.',
        ]);
      }
    } else if (has_prayed) {
      await printAndWait([
        you.get_colored_name(),
        ' turns back toward the training room.',
      ]);
    } else {
      await printAndWait([
        'After a brief prayer at the statue, ',
        you.get_colored_name(),
        ' turns back toward the training room.',
      ]);
    }
  },
  /**
   * Arrive at the statue after the goddesses have taken flesh
   * @param {CharaTalk} you player
   * @param {CharaTalk} god a goddess already incarnated
   */
  async start_with_no_god(you, god) {
    await printAndWait('The Three Goddesses statue stands in quiet silence…');
    if (typeof god === 'object') {
      await printAndWait([
        you.get_colored_name(),
        ' suddenly hears a greeting from behind…',
      ]);
      await printAndWait([
        'Turning around reveals ',
        god.get_colored_name(),
        ' already standing behind ',
        you.get_colored_name(),
        '…',
      ]);
    }
  },
  /**
   * Prayer text after the Three Goddesses take flesh
   * <br>No need to visit the statue once incarnated
   */
  bt_pray: 'Pray to the goddess',
  pray_select: 'What to pray for?',
  /**
   * Incarnated goddess - reputation buff prayer
   * @returns {Promise<number>}
   */
  async handle_pray_honour_buff() {
    print('Confirm?');
    printButton(
      `Confirm (Reputation gain +${get('global:声望加成')}%->${get('global:声望加成') + 1}%)`,
      1,
    );
    printButton('Never mind', 2);
    return await input();
  },
  /**
   * Incarnated goddess - money buff prayer
   * @returns {Promise<number>}
   */
  async handle_pray_money_buff() {
    print('Confirm?');
    printButton(
      `Confirm (UmaCoin gain +${get('global:金钱加成')}%->${get('global:金钱加成') + 1}%)`,
      1,
    );
    printButton('Never mind', 2);
    return await input();
  },
  /**
   * Incarnated goddess - grow stronger
   * @param {boolean[]} disabled_list whether a stat is already full
   * @param {number} random_select actual stat chosen when random is selected
   * @returns {Promise<[number,number]>}
   */
  async handle_pray_your_power(disabled_list, random_select) {
    print('Which stat?');
    printButton('Speed (+80)', 0, { disabled: disabled_list[0] });
    printButton('Stamina (+80)', 1, { disabled: disabled_list[1] });
    printButton('Power (+80)', 2, { disabled: disabled_list[2] });
    printButton('Guts (+80)', 3, { disabled: disabled_list[3] });
    printButton('Wit (+80)', 4, { disabled: disabled_list[4] });
    printButton('Anything works! (random stat +100)', 5);
    printButton('Never mind', 99);
    const ret = [await input(), 0];
    ret[1] = ret[0];
    if (ret[0] === 5) {
      ret[1] = random_select;
    }
    return ret;
  },
  select_target: 'Select a target',
  no_targets: 'No valid targets',
  get_target_entry_over_limit: (name, cost) =>
    `${name} (-${cost} Reputation, Training Bonus -10%)`,
  get_target_entry_heal: (name, cost) => `${name} (${cost} Reputation)`,
  /**
   * Limit break prayer
   * @param {CharaTalk} chara
   */
  handle_pray_over_limit(chara) {
    print([chara.get_colored_name(), ' seems to have broken the limit']);
  },
  /**
   * End of prayer
   * @param {CharaTalk} god one of the Three Goddesses
   * @param {CharaTalk} you player
   * @param {boolean} has_prayed whether a prayer was made
   */
  handle_pray_end(god, you, has_prayed) {
    if (has_prayed) {
      print([
        god.get_colored_name(),
        ' granted ',
        you.get_colored_name(),
        "'s wish",
      ]);
    } else {
      print([
        you.get_colored_name(),
        ' gave up praying to ',
        god.get_colored_name(),
        '…',
      ]);
    }
  },
  /**
   * After incarnation, borrowing money becomes a prayer for cash
   * @param {CharaTalk} god one of the Three Goddesses
   * @param {CharaTalk} you player
   */
  async borrow_money(god, you) {
    const honour = get('flag:当前声望');
    if (honour < 50) {
      return await printAndWait('Not enough Reputation');
    }
    print('How many UmaCoin?');
    printButton('400 UmaCoin (50 Reputation)', 1);
    printButton('800 UmaCoin (100 Reputation)', 2, { disabled: honour < 100 });
    printButton('1200 UmaCoin (150 Reputation)', 2, {
      disabled: honour < 150,
    });
    printButton('1600 UmaCoin (200 Reputation)', 2, {
      disabled: honour < 200,
    });
    printButton('Never mind', 99);
    const ret = await input();
    if (ret === 99) {
      await printAndWait([
        you.get_colored_name(),
        ' gave up praying to ',
        god.get_colored_name(),
        ' for UmaCoin…',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' receives notice of a Tracen reissue of ',
        { color: money_color, content: (400 * ret).toLocaleString() },
        ' UmaCoin in extra subsidy… though the message almost seems to look down on it…',
      ]);
    }
    return ret;
  },
};
