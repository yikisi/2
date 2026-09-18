/**
 * @file 东海帝王 - 日常
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { escape_enum } = require('#/data/basement-const');

module.exports = {
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {number} b_escape 从地下室的逃脱方式
   */
  good_morning(teio, you, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('Вот как… ха.');
          } else {
            teio.say('Тренер великой Тэйо… хаха.');
          }
          break;
        case escape_enum.beat:
          teio.say('Правда… прости.');
          era.print([
            teio.sex,
            'Кланяется в пояс и дальше словами и делом выкладывает извинение на полную.',
          ]);
          era.print([
            you.get_colored_name(),
            ' принимаешь. Но ',
            you.get_colored_name(),
            ' чувствует: подопечная в последнее время слишком зациклилась на физподготовке…',
          ]);
          break;
        case escape_enum.strike:
          teio.say('Правда… прости.');
          era.print([
            teio.sex,
            'Кланяется в пояс и дальше словами и делом выкладывает извинение на полную.',
          ]);
          era.print([
            you.get_colored_name(),
            ' принимаешь. Но ',
            you.get_colored_name(),
            ' всё чудится: в темноте на тебя всё смотрит чей-то взгляд…',
          ]);
      }
    } else if (era.get('status:0:熬夜') > 0) {
      era.print([
        teio.get_colored_name(),
        {
          color: teio.color,
          content:
            '「А… доброе утро, тренер, что, я вчера совсем не сидела допоздна」',
        },
        '(зевает)',
      ]);
    } else {
      const buffer = [];
      buffer.push(
        () =>
          teio.say(
            'Сегодняшняя тренировка… вот столько! Я всё сделаю как надо!',
          ),
        () => teio.say('Э, уже начинаем?!'),
        () => teio.say('Мёда слишком много… слегка мутит.'),
      );
      if (era.get('love:3') >= 50) {
        buffer.push(() =>
          era.print([
            teio.get_colored_name(),
            ` вроде болтает с другими ${teio.uma_sex_title}. Слышит, как `,
            you.get_colored_name(),
            ` зовут, и ${teio.sex} обрывает разговор — летит сюда.`,
          ]),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   * @param {number} b_escape 从地下室的逃脱方式
   */
  select(teio, callname, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('Тренер… ах.');
          } else {
            teio.say([callname, ', кажется, ещё проказливее, чем я когда-то.']);
          }
          break;
        case escape_enum.beat:
        case escape_enum.strike:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('Я снова тебя подвела… и всё это.');
            era.print([
              teio.sex,
              'Плотно зажмуривается, сжимает кулаки — ладони красные, вот-вот кровь.',
            ]);
          } else {
            teio.say('А, я…');
            teio.say('Прости, тренер.');
            era.print([teio.sex, 'вроде стала куда послушнее.']);
          }
      }
    } else {
      teio.say(
        Math.random() < 0.5
          ? `Ну～ что нужно непобедимой великой Тэйо?`
          : `Хм-хм, я всегда готова!`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async office_study(teio, you) {
    await you.say_and_wait('Надо же, великая Тэйо тоже чего-то не знает.');
    await era.printAndWait(
      `${you.name} поддразнила ${teio.sex} парой фраз и, видя, как ${teio.sex} дует губы, сверля взглядом ${you.name}, кашляет и начинает нормальную лекцию.`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async talk(teio, you) {
    if (era.get('base:3:体力') < era.get('maxbase:3:体力') * 0.45) {
      if (Math.random() < 0.5) {
        await teio.say_and_wait('Ах… даже непобедимая великая Тэйо устаёт…');
      } else {
        await era.printAndWait([
          teio.get_colored_name(),
          ' поднимаешь голову и лениво смотришь на ',
          you.get_colored_name(),
          ` — пора, пусть ${teio.sex} передохнёт…`,
        ]);
      }
    } else {
      switch (era.get('cflag:3:干劲')) {
        case -2:
          await era.printAndWait([
            teio.get_colored_name(),
            ` нетерпеливо топает, шерсть взъерошена… пусть лучше ${teio.sex} не работает`,
          ]);
          break;
        case -1:
          await era.printAndWait([
            teio.get_colored_name(),
            ' улыбка с губ сходит… что-то не так.',
          ]);
          break;
        case 0:
          await era.printAndWait([
            teio.get_colored_name(),
            ' выглядит не в духе: бодрая как всегда, а чего-то не хватает.',
          ]);
          break;
        case 1:
          await era.printAndWait([
            teio.get_colored_name(),
            ' свободно бегает разминку по полю — видно, что заряжена.',
          ]);
          break;
        case 2:
          await era.printAndWait([
            teio.get_colored_name(),
            ' возбуждённо высоко поднимает колени на месте, юная пружина тела будто зовёт ',
            you.get_colored_name(),
            '.',
          ]);
      }
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async office_gift(teio, callname) {
    await teio.say_and_wait([
      'Э! Это ',
      callname,
      ' мне подарок?! Можно открыть сейчас? Ун… дома, да? Ладно, всё равно огромное спасибо!',
    ]);
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async office_cook(teio, you) {
    await teio.say_and_wait(
      'Непобедимая великая Тэйо… н-да, и в этом тоже смогу!',
    );
    await era.printAndWait(
      `${you.name} видит ${teio.sex} ещё корявую стряпню и тоже берётся помогать: скоро на столе красивые, пахучие блюда.`,
    );
    await era.printAndWait([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: 'Я', color: teio.color },
      '(я)',
      { content: ' Поехали!', color: teio.color },
      '」',
    ]);
    await era.printAndWait(
      `улыбаетесь друг другу — и зарываетесь в то, что приготовили сами.`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async office_rest(teio, you) {
    if (era.get('relation:3:0') > 150) {
      await you.say_and_wait(`Вставай, великая Тэйо- ${teio.adult_sex_title}.`);
      await teio.say_and_wait(`Нн— нн～`);
      await era.printAndWait(
        `${teio.teen_sex_title} падает телом на ${
          you.name
        }, и вы оба проваливаетесь в диван.`,
      );
      await era.printAndWait(
        `Дыхание щекочет ${you.name} шею, ${
          you.name
        } лениво гладит подопечную ${teio.uma_sex_title} по спине, а одной рукой заодно расчёсывает шерсть — и ${
          teio.sex
        } вся приглажена.`,
      );
    } else {
      await era.printAndWait(
        `Тэйо редкость какая тихая: ${you.name} и ${teio.sex} сидите на диване и делите ничегонеделание.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async office_game(teio, you) {
    await teio.say_and_wait('А-а-а! Непобедимая великая Тэйо не проиграет!');
    await era.printAndWait(
      `Персонаж на экране дёргается как бешеный — точь-в-точь как та, кто за рулём, ${
        you.name
      } без сил косится на соседку, всю в игре ${
        teio.sex
      }, малышка ${teio.uma_sex_title} серьёзно крутит стики, даже пот на лбу, ${
        you.name
      } усмехается и возвращает взгляд к игре.`,
    );
  },
  /** @param {CharaTalk} teio 东海帝王 */
  async s_a_tree_hollow(teio) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('Сейчас я… хаха, хахаха, уу—');
    } else {
      await teio.say_and_wait(
        'Чёрт… я правда хочу победить, хочу! Я Тэйо! Я непобедима! Я обязательно…',
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async s_a_dating(teio, you) {
    await era.printAndWait(
      `В школе… так вообще можно? ${you.name} в груди сомнение, но Тэйо, что липнет рядом, хоть и красная до ушей, ничего странного не показывает.`,
    );
    await era.printAndWait(
      ` видит ${teio.sex} этот вид и ${you.name} даже выдыхает с облегчением: на чужие взгляды плевать, как парочка ${teio.sex} шутит и дразнится.`,
    );
  },
  /** @param {CharaTalk} teio 东海帝王 */
  async s_r_lunch(teio) {
    await teio.say_and_wait('Вот здесь есть — неожиданно вкусно!');
    await era.printAndWait(
      'Раскладываете коробочки… на «потолке»? И вместе едите этот хороший обед.',
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async o_r_fishing(teio, you, callname) {
    await teio.say_and_wait([callname, ', давай!']);
    await era.printAndWait(
      `${teio.sex}Говорит и скидывает обувь, босиком в мелкую воду: белые ступни в воде ещё милее.`,
    );
    await era.printAndWait(
      `Жаль, такое беснование рыб распугает, ${you.name} вздыхает и садится собираться на рыбалку. Рядом — ${teio.sex}.`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async o_r_walking(teio, you) {
    await teio.say_and_wait(`По реке гулять～ как свежо!`);
    await era.printAndWait(
      `${you.name} подопечная напевает и шагает почти танцуя. Сюда можно чаще, ${you.name} смотрит, как радуется ${teio.sex}, и думает.`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async o_s_arcade(teio, you) {
    await era.printAndWait(
      `${you.name} и ${
        teio.name
      } вместе оторвались в игровом зале; на выходе решаете «слить» лишние жетоны в автомат с игрушками.`,
    );
    await era.printAndWait(
      `Так сказали — а сами оба довольно нервно крутите джойстик и после долгих дум жмёте…`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async o_s_drawing(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([
        callname,
        '…тогда я передам тебе удачу непобедимой Тэйо!',
      ]);
      await era.printAndWait(
        `${teio.sex}Прижимается к ${you.name}, берёт ${you.name} за одну руку: тёплая упругость и запах сразу, ${you.name} как-то неловко суёт другую руку в автомат…`,
      );
    } else {
      await teio.say_and_wait(
        'Н… непобедимая великая Тэйо и в удаче не проиграет! Наверное…',
      );
      await era.printAndWait(
        `${teio.sex}смотришь на ${you.name}, ${you.name} кивает, и ${teio.sex} суёт руку в ящик…`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async o_s_ktv(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '! Ну как я спела!']);
      await era.printAndWait(
        `${you.name} торопливо ставит стакан, едва поднесённый к губам, и делает вид, что думает, глядя на сияющую подопечную: только что ${teio.sex} на все сто отпела «Love is Derby☆», румянец ещё не сошёл.`,
      );
      await era.printAndWait(
        `${you.name} выворачивает из себя кучу похвал, ${teio.sex} видит ${you.name} это лицо и смеётся ещё счастливее.`,
      );
    } else {
      await era.printAndWait(
        `Сами не заметили, как забрели в караоке; по жёсткому требованию ${
          teio.sex
        } зашли посидеть — хотя пела в основном ${teio.sex}.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async o_s_movie(teio, you) {
    if (era.get('relation:3:0') > 225) {
      await era.printAndWait(
        `Тэйо обнимает ${you.name} левую руку, на цыпочках к ${you.name} уху шепчет название фильма.`,
      );
      await era.printAndWait(
        `${you.name} глянул(а) — слащавая мелодрама, даже смешно; правой рукой гладишь Тэйо по голове — и наталкиваешься на её взгляд: ${teio.sex} смотрит и стыдливо, и твёрдо.`,
      );
      await era.printAndWait('Н… тогда как парочка и пойдём.');
    } else if (Math.random() < 0.5) {
      await era.printAndWait(
        `По жёсткому требованию Тэйо ${you.name} берёт 『сложный страшный фильм с драйвом』.`,
      );
      await era.printAndWait(
        `Как и думалось: на каждом ключевом кадре малышка ${teio.uma_sex_title} не выдерживает, ${
          you.name
        } рука, к которой прижалась ${teio.sex}, уже схвачена до потери чувствительности…`,
      );
    } else {
      await era.printAndWait(
        `${you.name} с Тэйо смотрите семейную комедию — смешно до колик.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(teio, you, callname, dice) {
    await teio.say_and_wait([
      callname,
      '～Быстрее-быстрее, давай вместе вытянем!',
    ]);
    await era.printAndWait(
      `Малышка ${teio.uma_sex_title} тянет ${you.name} за руку к алтарю, ${
        you.name
      } спешит широким шагом. Через минуту на месте, ${you.name} уже вся в поту…`,
    );
    await era.printAndWait(
      `Нежная ладонь выскальзывает, ${teio.name} поднимает тубус с палочками, щурится, смеётся и трясёт как попало—`,
    );
    await teio.say_and_wait('Хи-хи— ха!');
    await era.printAndWait(
      `После детского баловства бамбуковая палочка вылетает из тубуса, ${you.name} ловит её пальцами, смотрит:`,
    );
    if (dice < 0.2) {
      await era.printAndWait('(большая удача)');
      if (era.get(`relation:3:0`) > 225) {
        await era.printAndWait(
          `${you.name} подходит и качает палочкой перед Тэйо, ${teio.sex} выхватывает её, вспыхивает радостью и бросается на ${you.name}, обнимая ${you.name} за талию.`,
        );
      } else {
        await era.printAndWait(
          `${you.name} громко объявляет, что выпала большая удача, уши Тэйо весело прыгают, ${teio.sex} шагает тебе в лицо, хватает ${you.name} руку с палочкой, сверяет надпись и хихикает.`,
        );
      }
    } else if (dice < 0.4) {
      await era.printAndWait('(средняя удача)');
      await era.printAndWait(
        `${you.name} читает слова, Тэйо на месте расправляет грудь, руки в боки, будто хвастается техникой тряски.`,
      );
    } else if (dice < 0.8) {
      await era.printAndWait('(малая удача)');
      await era.printAndWait(
        `${you.name} отдаёт её Тэйо, ${teio.sex} радостно смеётся.`,
      );
    } else {
      await era.printAndWait('(неудача)');
      await era.printAndWait(
        `${
          you.name
        } секунду молчишь, Тэйо что-то чует, стоит неловко — и вы оба решаете это забыть.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async good_night_normal(teio, you, callname) {
    era.print(
      `Тяжёлый день кончился, ${you.name} провожает ${teio.name} до дверей студенческого общежития.`,
    );
    teio.say(['До завтра! ', callname, '!']);
    era.print(
      `День вымотал, а ${teio.sex} всё такая же живая. ${you.name} так думает и машет ей на прощание — и ${teio.sex} машет в ответ.`,
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  gn_sex_intro(teio, you) {
    era.print(
      `Тяжёлый день кончился, ${you.name} провожает ${teio.name} до дверей студенческого общежития.`,
    );
    era.print(
      'Обычное «пока» не выходит: почему-то оба замираете, короткая тишина…',
    );
    era.print([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: 'Н, ', color: teio.color },
      'нн—」',
    ]);
    era.print(
      `После тишины снова говорите разом, опять неловко. Даже смешно: ${teio.uma_sex_title} улыбается бровями и глазами, и ${
        teio.sex
      } смелеет, открывает рот раньше ${you.name}.`,
    );
    teio.say('Того… я оформила ночёвку, так что сегодня…');
  },
  gn_sex_confirm: (teio, you) => [
    'Голос тает, кровь в щеки, ',
    you.get_colored_name(),
    ' видит ',
    teio.sex,
    ' это и уже не держится, решает—',
  ],
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   * @param {number} check 求爱检定值，如果是大成功，拒绝求爱会转逆强奸
   */
  async gn_sex_reject(teio, you, callname, check) {
    if (check !== 2) {
      return;
    }
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('Н… вот как.');
      await era.printAndWait([
        you.get_colored_name(),
        ' смотрит: грудь всё ещё расправлена, а глаза уже погасли — так стоит ',
        teio.sex,
        '. Не выдерживает, тянет руку — и ',
        teio.sex,
        ' чувствует на голове ладонь.',
      ]);
      await era.printAndWait([
        'Но вдруг ',
        teio.sex,
        ' поднимает руку, пять тонких пальцев чётко ловят ',
        you.get_colored_name(),
        ' ладонь, ',
        you.get_colored_name(),
        ' хочет выдернуть — ни с места—',
      ]);
      await teio.say_and_wait([callname, '……']);
      await era.printAndWait([
        teio.sex,
        'всё ближе к ',
        you.get_colored_name(),
        '.',
      ]);
      await teio.say_and_wait('Я… где бы ни была, не хочу и не отпущу.');
    } else {
      await teio.say_and_wait(
        'Так— вот— так? Тогда пошли! Место и вещи уже готовы!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' не успеваешь ничего объявить или подчеркнуть — ',
        teio.uma_sex_title,
        ' силой тела тащит тебя ветром… может, мнение ',
        you.get_colored_name(),
        ' здесь и не важно, ',
        teio.get_colored_name(),
        ' просто ставит ',
        you.get_colored_name(),
        ' в известность, что будет дальше.',
      ]);
    }
  },
  cl_new_year: (() => {
    const title = 'Новый год';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        'Новый год! ',
        callname,
        ', готова?! Во что играем? Сегодня всю ночь гуляем!',
      ]);
      await era.printAndWait(
        `${you.name} торопливо шикает: пусть ${teio.sex} говорит потише. Если ${teio.sex} будет так орать, репутация станет «извращенец, соблазняющий учениц». Этот ребёнок — сущий крест.`,
      );
      await era.printAndWait(
        `Но… глядя, как подопечная ${teio.uma_sex_title} прыгает рядом от счастья, полная жизни, ${
          you.name
        } вдруг думает: год суеты того стоил.`,
      );
    };
    f.title = title;
    return f;
  })(),
  cl_valentine: (() => {
    const title = 'Валентин';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('Мёд-мёд～ хи-хи～');
      await era.printAndWait(
        ` ${you.name} поднимаешь голову от стола и видишь, как за спиной, улыбаясь, смотрит на ${
          you.name
        } свою ${teio.uma_sex_title}${teio.teen_sex_title}.`,
      );
      await teio.say_and_wait([callname, '～это я тебе сделала～']);
      await era.printAndWait(
        `${teio.sex}Руки вперёд: не слишком изящная, но явно с душой коробка оказывается перед ${you.name}.`,
      );
      era.print([you.get_colored_name(), '——']);
      era.printButton('Принять подарок', 1);
      era.printButton(`Съесть и ${teio.sex} тоже`, 2, {
        disabled: era.get('love:3') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} берёт, благодарит и, не отходя, осторожно разворачивает упаковку, и ${teio.sex} съедает шоколад внутри.`,
        );
        await era.printAndWait(
          `Отложив семь-восемь шоколадок от подопечных и коллег, ${you.name} садится за стол к работе.`,
        );
      } else {
        await era.printAndWait(
          ` ${you.name} принимает коробку из ладоней, которые протягивает ${teio.sex}. Есть не спешит: медленно, другой рукой, снимает упаковку, а второй так и держит ладонь — и ${teio.sex} руки не отнимает`,
        );
        await era.printAndWait(
          `Когда ${teio.sex} краснеет до ушей, ${you.name} вдруг притягивает её в объятия и с шоколадом во рту целует в губы — ${teio.sex} — ${teio.sex}.`,
        );
        await era.printAndWait(
          `Сладость мёда и какао путается с её маленьким языком, и ${teio.teen_sex_title} уже не спрячет его…`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_temple_fair: (() => {
    const title = 'Ярмарка';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} кинула сообщение. Очень скоро ${teio.name} отвечает ${you.name}.`,
      );
      await teio.say_and_wait(`Тре—не—р—`);
      await era.printAndWait(
        `${teio.teen_sex_title}надела юкату, где вся детскость стала милой и чуть сквозит секс: крутится перед ${
          you.name
        }.`,
      );
      await teio.say_and_wait(`Ну я как?`);
      era.printButton('「Н…」', 1);
      await era.input();
      await era.printAndWait(`Не ответить.`);
      await era.printAndWait(
        `Где-то глубоко внутри что-то уже щёлкнуло и лопнуло.`,
      );
      await era.printAndWait(
        `Крохотная ${teio.teen_sex_title} в этом наряде идеально выдаёт ещё не до конца развитое, но уже сексуальное тело.`,
      );
      await era.printAndWait(
        `Сверху чисто-белые наушники на ушах будто ставят малышку ${teio.uma_sex_title} в роль чистой ученицы; ниже ткань не липнет к линиям, а вырезана у подмышек и боков.`,
      );
      await era.printAndWait(
        `Обычно спрятанная нежная белая кожа сейчас целиком в ${you.name} взгляде: если ${you.name} захочет — можно протянуть руку и проверить на ощупь…`,
      );
      await teio.say_and_wait(`Нн?`);
      await era.printAndWait([
        you.get_colored_name(),
        ' тонешь в её красоте — ',
        teio.teen_sex_title,
        ' сейчас такая, что не вынырнуть.',
      ]);
      era.printButton('Не сдержаться!', 1, {
        disabled: era.get('love:3') < 75,
      });
      era.printButton('Стальная воля!', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${
            you.name
          } глубоко вдыхаешь, тяжёлым телом подходишь к ${teio.uma_sex_title} и тянешь большую руку—`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_halloween: (() => {
    const title = 'Хэллоуин';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        'Доделал(а) работу, убрал(а) кабинет, ',
        you.get_colored_name(),
        ' переводит дух и ждёт колокол академии.',
      ]);
      await era.printAndWait('Сегодня что-то случится.');
      await era.printAndWait([
        you.get_colored_name(),
        ' ждёшь назначенную судьбу.',
      ]);
      era.println();
      await era.printAndWait('「Дон—, тук-тук-тук, дон—」');
      await era.printAndWait([
        'Странный стук, ',
        you.get_colored_name(),
        ' затаивает дыхание, скользит за дверь и дёргает—',
      ]);
      era.println();
      await era.printAndWait('Вспышка алого врывается.');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' бесшумно бросаешься.']);
      era.println();
      await teio.say_and_wait('Ва!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' засада ',
        teio.sex,
        ' не вышла: ты вовремя обернулся(ась) и как раз столкнулся(ась) с ',
        you.get_colored_name(),
        ' грудь в грудь.',
      ]);
      era.println();
      await teio.say_and_wait('Великую Тэйо так не напугать!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' подопечная руки в боки, весь наряд Красной Шапочки, в одной руке корзина, другой тянется схватить ',
        you.get_colored_name(),
        '.',
      ]);
      era.println();
      await teio.say_and_wait('Злой взрослый, пошли со мной!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' покорно мычишь «да-да» и, как уговорились, идёшь следом — ',
        teio.sex,
        ' выходит наружу…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = 'Рождество';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        'Рождество! Ну, ',
        callname,
        ' либо наряжаешься Сантой и даришь мне подарок, либо всю ночь со мной играем!',
      ]);
      await era.printAndWait(
        `${you.name} протестуешь, но явно не тянешь против этой неуёмной подопечной.`,
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {PrintedSpan} callname 东海帝王对玩家的称呼
   */
  async load_talk(teio, callname) {
    await teio.say_and_wait([callname, '…Бросить этого ребёнка? Почему…']);
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: get_gradient_color(teio.color, '#ff0000', 0.5),
          content:
            '「Почему… почему почему почему почему почему почему почему почему почему почему почему почему почему почему」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: 'red',
          content: '「Почему… почему по—」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '3rem' },
    );
  },
  /**
   * @param {CharaTalk} teio 东海帝王
   * @param {CharaTalk} you 玩家
   */
  async end_talk(teio, you) {
    if (era.get('flag:变态行为') === 0) {
      if (era.get('love:3') >= 75) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            'Видно, время вместе сойти со сцены всё-таки пришло… всё равно как-то обидно.',
          );
        } else {
          await teio.say_and_wait(
            'Тренер… как ни крути, я всегда буду так тебя звать.',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait([
          'молчит, ',
          teio.sex,
          ' только в последний раз смотришь на ',
          you.get_colored_name(),
          ': в сине-чёрных зрачках грязь, которой не смыть слезами.',
        ]);
      } else {
        await teio.say_and_wait('С какого момента ваши дороги разъехались…?');
      }
    } else {
      if (era.get('love:3') >= 50) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            'Вот такой конец… нет! Ты тоже будешь всегда рядом! Что бы ни говорили — ты навсегда мой тренер!',
          );
        } else {
          await teio.say_and_wait(
            'Иэ— м-меня поймали? Т-тогда потом тайком… ты за меня отвечай!',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await teio.say_and_wait('С какого момента ваши взгляды разъехались…');
      } else {
        await teio.say_and_wait('…Согласиться расторгнуть.');
      }
    }
  },
};
