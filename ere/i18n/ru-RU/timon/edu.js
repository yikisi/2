/**
 * @file 育成地文
 * @author 雞雞
 * @author 黑奴队长
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
      ', карьера: ',
      races,
      ' стартов, ',
      wins,
      ' побед, общий приз ',
      reward,
      ' ма-монет',
    ]);
    if (race_names.length > 0) {
      ret.push([
        'Главные победы: ',
        ...join_list(race_names.slice(0, 5), ' '),
        race_names.length > 5 ? '…' : '',
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
        `Каждый январь Зал славы URA для ${chara.uma_sex_title} начинает голосование по завершившим карьеру умамусумэ.`,
      );
      era.println();
      await era.printAndWait(
        `А в марте те ${chara.uma_sex_title}, кто прославился за карьеру и прошёл строгий отбор, войдут в Зал славы и получат высшую честь — звание «Почётная ${chara.uma_sex_title}».`,
      );
      era.println();
      await era.printAndWait([
        'А любимая кобыла ',
        you.get_colored_name(),
        ' — ',
        chara.get_colored_name(),
        '——',
      ]);
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        `Открывают бронзовую статую, точь-в-точь как ${chara.sex}, и `,
        ...title,
        chara.get_colored_name(),
        ' — эту легенду Зал славы сохранит навсегда…',
      ]);
    };
    f.title = 'Восхождение на трон Зала славы';
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
      await era.printAndWait('К сожалению, в Зал славы не вошли.');
      era.println();
      await era.printAndWait(
        'Но вы всё равно гордитесь тем, чего достигли всеми силами, и верите, что следующие встанут на ваши плечи и пойдут выше.',
      );
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        ...title,
        chara.get_colored_name(),
        ' — легенду будут помнить…',
      ]);
    };
    f.title = 'Под троном Зала славы';
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
        'Время промчалось незаметно: с ',
        chara.get_colored_name(),
        ' вы вместе уже не один год, а пройдёт ещё немного — и для вас начнётся новая глава',
      ]);
      era.println();
      if (era.get(`love:${chara.id}`) >= 75) {
        await era.printAndWait(
          'В привычной тренерской вы нежно приласкались друг к другу.',
        );
        await era.printAndWait(
          'Двое влюблённых утонули в счастливом мире на двоих — будто вся мирская суета провалилась в пустоту.',
        );
        era.println();
        await era.printAndWait('Я король мира! — Джек Доусон', {
          align: 'center',
        });
      } else if (can_sex) {
        await era.printAndWait('В привычной тренерской вы жарко целовались.');
        await era.printAndWait(
          'Запах похоти заполнил всю комнату, и не смолкали только сладкие стоны да шлепки тел.',
        );
        era.println();
        await era.printAndWait(
          'Еда и влечение — в природе человека. — Мэн-цзы',
          { align: 'center' },
        );
      } else {
        await era.printAndWait(
          'В привычной комнате тренера вы душевно беседуете и невольно грустите из-за неизбежного расставания.',
        );
        await era.printAndWait(
          'Встречи в жизни редки, и именно потому, что человека можно потерять, так важно дорожить тем, кто рядом.',
        );
        era.println();
        await era.printAndWait(
          'Сердце единственной встречи открывается лишь в облике чая. — Сэн-но Рикю',
          {
            align: 'center',
          },
        );
      }
    };
    f.title = 'А потом — навстречу будущему';
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
      chara_name.content = 'себя';
    }
    switch (attr) {
      case attr_enum.speed:
        await era.printAndWait([
          'Чтобы поднять скорость, ',
          you.get_colored_name(),
          ' ставит ',
          chara_name,
          ' беговую тренировку…',
        ]);
        break;
      case attr_enum.endurance:
        await era.printAndWait([
          'Чтобы поднять выносливость, ',
          you.get_colored_name(),
          ' ставит ',
          chara_name,
          ' плавание…',
        ]);
        break;
      case attr_enum.strength:
        await era.printAndWait([
          'Чтобы поднять силу, ',
          you.get_colored_name(),
          ' ставит ',
          chara_name,
          ' силовые…',
        ]);
        break;
      case attr_enum.toughness:
        await era.printAndWait([
          'Чтобы закалить волю, ',
          you.get_colored_name(),
          ' ставит ',
          chara_name,
          ' подъёмы в гору…',
        ]);
        break;
      case attr_enum.intelligence:
        await era.printAndWait([
          'Чтобы обострить гоночное чутьё, ',
          you.get_colored_name(),
          ' ставит ',
          chara_name,
          ' разбор записей скачек…',
        ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  ts_info(chara) {
    era.print([chara.get_colored_name(), ' успешно закончила тренировку!']);
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
        ' как будто ей всё мало — хочет потренироваться сама?',
      ]);
      era.printButton('Разрешить!', 1);
      era.printButton('Это выйдет за рамки плана…', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' молча разрешает ',
          chara.get_colored_name(),
          ` тренироваться самостоятельно и хвалит за рвение, с которым ${chara.sex} берётся за дело`,
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' прямо запрещает ',
          chara.get_colored_name(),
          ' тренироваться самостоятельно и велит как следует отдохнуть',
        ]);
      }
      return ret;
    };
    f.title = 'Горячая дополнительная тренировка!';
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
        'Ой! ',
        chara.get_colored_name(),
        ` засмотрелась и ${is_fumble ? 'отрубилась' : 'уснула'} над записями!`,
      ]);
    } else {
      const buffer = [];
      switch (attr) {
        case attr_enum.speed:
          buffer.push(
            'поскользнулась',
            'покатилась по земле',
            'выбилась из сил',
          );
          break;
        case attr_enum.endurance:
          buffer.push('сводит судорогой');
          break;
        case attr_enum.strength:
          buffer.push(
            'получила грязью в глаза',
            'упала',
            'получила сдачи от мешка с песком',
          );
          break;
        case attr_enum.toughness:
          buffer.push('выбилась из сил', 'потянула поясницу', 'скатилась вниз');
      }
      await era.printAndWait([
        'Ой! ',
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
      await era.printAndWait([
        chara.get_colored_name(),
        ' провалила тренировку…',
      ]);
      era.println();
      era.print('Что делать?');
      era.println();
      era.printButton('«Отдохни здесь немного.»', 1);
      era.printButton('«Давай разберём ошибки!»', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = 'В тренировочном зале…';
    return f;
  })(),
  train_fumble: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        ' провалила тренировку…',
      ]);
      era.println();
      era.print('Что делать?');
      era.println();
      era.printButton('«Нужно хорошо отдохнуть!»', 1);
      era.printButton('«Преодолеем силой воли!»', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = 'В медпункте…';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {number} debuff
   */
  tf_change_debuff(chara, debuff) {
    if (debuff > 0) {
      era.print([
        '【',
        chara.get_colored_name(),
        ' чувствует, что тренировки даются всё легче】',
      ]);
    } else {
      era.print([
        '【',
        chara.get_colored_name(),
        ' чувствует, что тренировки даются всё тяжелее】',
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
        'Чтобы хоть как-то объясняться на иностранном, ',
        you.get_colored_name(),
        ' учится в номере отеля…',
      ]);
    } else {
      await era.printAndWait([
        'Чтобы хоть как-то объясняться на иностранном, ',
        you.get_colored_name(),
        ' сажает ',
        chara.get_colored_name(),
        ' за учёбу в номере отеля…',
      ]);
    }
    if (is_success) {
      await era.printAndWait('Волчья учёба в последний момент — сработала!');
    } else {
      await era.printAndWait([
        'Ой! ',
        chara.get_colored_name(),
        ' уснула за книгой!',
      ]);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   */
  fs_learn_language(chara, language) {
    era.print([chara.get_colored_name(), ' выучила ', language, '!']);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   * @param {PrintedSpan} new_level
   */
  fs_update_language(chara, language, new_level) {
    era.print([
      chara.get_colored_name(),
      ' у ',
      language,
      ' даётся всё лучше, теперь — ',
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
      'Чтобы восстановить форму, ',
      you.get_colored_name(),
      ' заказывает местную физиотерапию и восстанавливается в отеле…',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' похоже, понемногу приходит в форму!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_train(chara, you) {
    await era.printAndWait([
      'Чтобы привыкнуть к местной трассе, ',
      you.get_colored_name(),
      ' ставит адаптационную тренировку на поле…',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' будто привыкает к ощущению местной дорожки!',
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
      'Чтобы расслабиться, ',
      you.get_colored_name(),
      ...(chara.id > 0 ? [' и ', chara.get_colored_name()] : [' в одиночку']),
      ' гуляет в ',
      loc_name,
      '…',
    ]);
    await era.printAndWait('Денег ушло немало, но оно того стоило!');
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
          async () => await you.say_and_wait('Выложись по полной!'),
          async () => await you.say_and_wait('Покажи свой напор!'),
        ];
        await get_random_entry(buffer)();
      } else {
        /** @author 黑奴队长 */
        await era.printAndWait([
          you.get_colored_name(),
          ' собственноручно надевает на ',
          chara.get_colored_name(),
          ' «особое снаряжение».',
        ]);
        switch (item) {
          case 4:
            await era.printAndWait([
              chara.get_colored_name(),
              ' кокетливо сверкает глазами на ',
              you.get_colored_name(),
              ', прячет ваш секрет под одеждой и идёт к старту…',
            ]);
            break;
          case 3:
            await era.printAndWait([
              chara.get_colored_name(),
              ' покорно одевается: розовый отблеск на животе и томный взгляд перекликаются…',
            ]);
            break;
          case 2:
            await era.printAndWait([
              chara.get_colored_name(),
              ' медленно одевается, чтобы игрушка лучше держалась на теле…',
            ]);
            break;
          case 1:
            await era.printAndWait([
              chara.get_colored_name(),
              ' украдкой смотрит на лицо ',
              you.get_colored_name(),
              ', потом опускает глаза и молча терпит стимуляцию…',
            ]);
        }
      }
    };
    f.title = 'Перед скачкой';
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
        ' встречает разрумянившуюся ',
        chara.get_colored_name(),
        ' у входа в комнату отдыха.',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' Едва зайдя, издаёт стон облегчения, ',
        you.get_colored_name(),
        ' спешит закрыть дверь и выключить все игрушки.',
      ]);
      await era.printAndWait([
        'Потом ',
        you.get_colored_name(),
        ' обещает как следует приласкать ту, что трётся в объятиях: ',
        chara.get_colored_name(),
        '. Пусть ',
        chara.sex,
        ' успокоится — и разврата средь бела дня так и не случилось.',
      ]);
    };
    f.title = 'Окрыляющая победа';
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
        ' встречает унылую ',
        chara.get_colored_name(),
        ' у комнаты отдыха,',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        ' удручённо оседает на пол.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' тактично выключает игрушки и тихо утешает.',
      ]);
    };
    f.title = 'Ожидаемое поражение';
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
        Math.random() < 0.5 ? 'Отлично!' : 'К ещё более высокой цели!',
      );
    };
    f.title = 'Победа в скачке';
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
          ? 'Сегодня тоже хорошо выступила!'
          : 'Им нельзя проигрывать!',
      );
    };
    f.title = 'В призах';
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
          ? 'В следующий раз будет лучше!'
          : 'Уныние не поможет!',
      );
    };
    f.title = 'Поражение';
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
          ? 'Когда‑нибудь мы точно победим!'
          : 'Так и будешь дальше позориться?',
      );
    };
    f.title = 'В следующий раз не проиграем!';
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
        'Лето — это купальники и пляж. Конечно, ',
        chara.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ' приехали к морю отдохнуть, но тренировки не бросили.',
      ]);
    };
    f.title = 'Летний сбор';
    return f;
  })(),
};
