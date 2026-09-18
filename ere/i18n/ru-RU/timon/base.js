/**
 * @file 地下室地文
 * @author 露娜俘虏
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  /**
   * 被学园救援队救出
   * @param {CharaTalk} you
   * @param {number} fine
   */
  async school_rescue(you, fine) {
    await era.printAndWait([
      'После жуткой недели ',
      you.get_colored_name(),
      ' спасает команда академии — вытаскивают из подвала…',
    ]);
    if (fine > 0) {
      await era.printAndWait(
        '…но половину сбережений списали как штраф за прогул на прошлой неделе.',
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
        p_hour = 'утро, ' + hours;
      } else {
        p_hour = `день, ${hours % 12 || 12}`;
      }
    } else {
      p_hour = hours.toString();
    }
    if (minutes > 0) {
      p_minute = ` ${minutes} мин`;
    } else {
      p_minute = ' ровно';
    }
    return `${p_hour} ч${p_minute}`;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_strike(chara) {
    return [
      chara.get_colored_name(),
      ' только что вернулась — хороший момент для внезапной атаки…',
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
        ret.push('жалеет о вспышке импульса');
        break;
      case 2:
        ret.push('выглядит очень напряжённой, не может успокоиться');
        break;
      case 3:
        ret.push('— навязчивая идея уже пустила корни');
        break;
      case 4:
        ret.push('— решимость явно нельзя недооценивать');
        break;
      case 5:
        ret.push('— защита сердца будто непробиваема');
        break;
    }
    ret.push('…');
    switch (love_level) {
      case 0:
        ret.push(chara.sex, ' занята другими делами и скоро уйдёт');
        break;
      case 1:
        ret.push(
          chara.sex,
          ' пристально смотрит на ',
          you.get_colored_name(),
          ' — и, похоже, ',
          chara.sex,
          ' так просто не уйдёт',
        );
        break;
      case 2:
        ret.push(
          chara.sex,
          ' впилась взглядом в ',
          you.get_colored_name(),
          ' — и, похоже, ',
          chara.sex,
          ' так просто не уйдёт',
        );
        break;
      case 3:
        ret.push(
          chara.sex,
          ' улыбается, глядя на ',
          you.get_colored_name(),
          ', и, кажется, не собирается уходить от ',
          you.get_colored_name(),
        );
        break;
      case 4:
        ret.push(
          chara.sex,
          ' — лицо искажено болью разбитого сердца, и нет ни малейшего намерения оставить ',
          you.get_colored_name(),
          '.',
        );
    }
    ret.push('…');
    if (is_fix) {
      ret.push(' усиливает защиту подвала…');
    }
    return ret;
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  get_info_sleep: (chara) => [
    chara.get_colored_name(),
    // STATUSNAME:39 = 马跳S
    era.get(`status:${chara.id}:39`) > 0 ? ' крепко' : ' тихо',
    ' спит…',
  ],
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  first_time(you) {
    era.print([
      'Неизвестно сколько спустя ',
      you.get_colored_name(),
      ' медленно приходит в себя на простой кровати…',
    ]);
    era.print('Перед глазами — чужой потолок…');
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  welcome(chara, you) {
    if (LifeEventMarks.get_marks(0).b_start) {
      era.print([
        'Неизвестно сколько спустя ',
        you.get_colored_name(),
        ' медленно приходит в себя на простой кровати…',
      ]);
      era.print([
        'Перед глазами — чужой потолок… и улыбка ',
        chara.get_colored_name(),
        '.',
      ]);
      era.print([
        'Теперь ',
        you.get_colored_name(),
        ' — узник этой клетки любви… а ',
        chara.get_colored_name(),
        ' — единственный надзиратель…',
      ]);
    } else {
      era.print([
        'Неизвестно сколько спустя ',
        you.get_colored_name(),
        ' медленно приходит в себя…',
      ]);
      era.print([
        'Перед глазами — всё тот же чужой потолок… и улыбка ',
        chara.get_colored_name(),
        '.',
      ]);
      era.print([
        'Узник и единственный надзиратель ',
        you.sex,
        ' наконец встретились в этой клетке любви…',
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
      ' застал(а) врасплох — и вырвался(ась) из подвала!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async strike_fail(you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' напал(а) неудачно — и получил(а) по голове!',
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
      ' сопротивлялся(ась) ',
      chara.get_colored_name(),
      ' — и вырвался(ась)!',
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
      ' сопротивлялся(ась) впустую — ',
      chara.get_colored_name(),
      ' оглушил(а) ударом!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_escape(you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' снял(а) замок и сбежал(а) из подвала!',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} you
   */
  async battle_prison(you) {
    await era.printAndWait([
      'Но ',
      you.get_colored_name(),
      ' не справился(ась) с ловушкой…',
      { isBr: true },
      you.get_colored_name(),
      ', оглушённого(ую), унесли обратно в подвал…',
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
        ' попался(ась) прямо в руки той, что только что ',
        is_back ? 'вернулась' : 'проснулась',
        ', — в руки ',
        chara.get_colored_name(),
        '!',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        ' попытался(ась) сбежать из подвала — и был(а) застигнут(а) на месте!',
      ]);
    }
    era.print([
      'Разгневанная ',
      chara.get_colored_name(),
      ' потащила ',
      you.get_colored_name(),
      ' обратно!',
    ]);
    if (s_level_up) {
      era.print([
        chara.get_colored_name(),
        ' стала настороженнее к ',
        you.get_colored_name(),
        '…',
      ]);
    }
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   */
  fix_prison(chara) {
    era.print([chara.get_colored_name(), ' усилила защиту подвала…']);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_up(chara, you) {
    if (LifeEventMarks.get_marks(chara.id).b_start > 0) {
      era.print([
        'После крепкого сна хозяйка этого подвала — ',
        chara.get_colored_name(),
        ' — наконец проснулась и принялась наслаждаться временем с ',
        you.get_colored_name(),
        '…',
      ]);
    } else {
      era.print([chara.get_colored_name(), ' медленно приходит в себя…']);
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
        'После долгого ожидания хозяйка этого подвала — ',
        chara.get_colored_name(),
        ' — наконец объявилась и принялась наслаждаться временем с ',
        you.get_colored_name(),
        '…',
      ]);
    } else {
      era.print([chara.get_colored_name(), ' вернулась в подвал…']);
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
        'Под водительством ',
        chara.get_colored_name(),
        ' — ',
        supporter.get_colored_name(),
        ' медленно подступает к ',
        you.get_colored_name(),
        '…',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        ' медленно подступает к ',
        you.get_colored_name(),
        '…',
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
      ' с виноватым видом согласилась на просьбу ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' погладил(а) ',
      chara.get_colored_name(),
      ' по голове — мол, всё в порядке.',
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
      ' с лёгкой улыбкой отказывает ',
      you.get_colored_name(),
      '.',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async ask_time(chara, you) {
    await chara.say_and_wait('Который час?');
    await era.printAndWait([
      chara.get_colored_name(),
      ' только щурится и улыбается ',
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
        ' ворвалась в подвал, который так тщательно устроила ',
        owner.get_colored_name(),
        ', но не сумела спасти любимого(ую) ',
        you.get_colored_name(),
        '…',
      ]);
      await era.printAndWait([
        'Под отчаянным взглядом ',
        you.get_colored_name(),
        ' — ',
        chara.get_colored_name(),
        ' была изгнана, и изгнала её ',
        owner.get_colored_name(),
        '…',
      ]);
    };
    f.title = 'На волосок от успеха';
    return f;
  })(),
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async rescue_fail_sleep(chara, you) {
    await era.printAndWait([you.get_colored_name(), ' будит шум драки.']);
    await era.printAndWait([
      'В подвале бардак, но целая и невредимая ',
      chara.get_colored_name(),
      ' всё ещё улыбается ',
      you.get_colored_name(),
      '…',
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
          'Пока ',
          owner.get_colored_name(),
          o_awake ? ' нет, ' : ' крепко спит, ',
          chara.get_colored_name(),
          ' проникает в подвал, поддерживает ',
          you.get_colored_name(),
          ' и уходит…',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' сквозь дрему чувствует, что его (её) несут.',
        ]);
        await era.printAndWait([
          'Очнувшись, уже в тренировочной — а напротив улыбается ',
          chara.get_colored_name(),
          '.',
        ]);
      }
    };
    f.title = 'Герой спасает';
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
          'Пока ',
          owner.get_colored_name(),
          o_awake ? ' нет, ' : ' крепко спит, ',
          chara.get_colored_name(),
          ' проникает в подвал, поддерживает ',
          you.get_colored_name(),
          ' и уходит…',
        ]);
        await era.printAndWait([
          'Когда ',
          you.get_colored_name(),
          ' уже думал(а), что вернётся к обычной жизни, ',
          chara.get_colored_name(),
          ' ведёт ',
          you.get_colored_name(),
          ' в другое место — и раздаётся тихий щелчок…',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' сквозь дрему чувствует, что его (её) несут.',
        ]);
        await era.printAndWait([
          'Очнувшись, всё ещё в подвале — планировка другая, а напротив улыбается ',
          chara.get_colored_name(),
          '.',
        ]);
      }
      await era.printAndWait('«Щёлк»', { fontSize: '1.5rem' });
    };
    f.title = 'Из огня да в полымя…';
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
          ' ворвалась в подвал, который так тщательно устроила ',
          owner.get_colored_name(),
          ', и сошлась лицом к лицу с ',
          owner.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Когда ',
          you.get_colored_name(),
          ' уже ждал(а) драки, ',
          chara.couple_title,
          ' они вдруг пожали руки и помирились…',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' очнулась от забытья и вдруг обнаружила, что в подвале, кроме неё и ',
          owner.get_colored_name(),
          ', есть третий — ',
          chara.get_colored_name(),
          '.',
        ]);
      }
      await era.printAndWait([
        'Теперь у этого тесного подвала и у ',
        you.get_colored_name(),
        ' в нём стало два хозяина…',
      ]);
    };
    f.title = 'Два солнца на небе';
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
          ' врывается в тщательно устроенный подвал ',
          owner.get_colored_name(),
          ' и валит ',
          owner.get_colored_name(),
          ' на пол…',
        ]);
        await era.printAndWait([
          'Под взглядом ',
          owner.get_colored_name(),
          ' поддерживает ',
          chara.get_colored_name(),
          ' и уходит… ',
          you.get_colored_name(),
          ' сквозь дрему чувствует, что его (её) несут.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' Очнувшись, уже в тренировочной — напротив ',
        ]);
        await era.printAndWait([
          'Очнувшись, оказался(ась) уже в тренерской, а перед ним(ней) — ',
          chara.get_colored_name(),
          ' с чуть смятой одеждой, но всё ещё с улыбкой.',
        ]);
      }
    };
    f.title = 'Герой спасает';
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
          ' ворвалась в подвал, который так тщательно устроила ',
          owner.get_colored_name(),
          ', и сбила с ног ',
          owner.get_colored_name(),
          '…',
        ]);
        await era.printAndWait([
          'Когда ',
          you.get_colored_name(),
          ' уже думал(а), что вернётся к обычной жизни, ',
          chara.get_colored_name(),
          ' подхватила ',
          you.get_colored_name(),
          ' и отвела в другое место, а потом раздался тихий щелчок…',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' сквозь дурноту чувствует, что его(её) куда-то несут.',
        ]);
        await era.printAndWait([
          'Очнувшись, снова в подвале — но устроен он иначе, а впереди стоит, с чуть смятой одеждой, но всё ещё улыбаясь, ',
          chara.get_colored_name(),
          '……',
        ]);
      }
      await era.printAndWait('«Щёлк»', { fontSize: '1.5rem' });
    };
    f.title = 'Из огня да в полымя…';
    return f;
  })(),
};
