/**
 * @file 第一红宝石 - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} ruby 第一红宝石 */
  good_morning(ruby) {
    const buffer = [
      () => ruby.say('Добрый день. Тогда начнём тренировку.'),
      () =>
        ruby.say(
          'И сегодня прошу любить и жаловать. Прошу наставлять меня основательно, пока я не достигну уровня, достойного прежних членов нашего рода.',
        ),
      () =>
        ruby.say(
          'Раз вы стали моим тренером, полагаю, вы уже готовы душой. Надеюсь, вы раскроете свои способности без сожалений.',
        ),
      () =>
        ruby.say(
          'Чтобы слава наших продолжилась, нужно ещё больше труда. Но с нынешним телом это вполне возможно.',
        ),
      () =>
        ruby.say(
          'Добиваться результатов на скачках — долг. Цель ясна; раз так, остаётся лишь идти вперёд без лени.',
        ),
      () =>
        ruby.say(
          'Новейшие публикации общества спортивной медицины я, разумеется, уже просмотрела. Обсудим их вместе позже?',
        ),
      () =>
        ruby.say(
          'Мне не нужна простая победа. Если не останется яркого блеска, для нашего рода это и не победа… ведь так?',
        ),
    ];
    if (era.get('flag:当前声望') >= 500) {
      buffer.push(() =>
        ruby.say(
          'Вы уже явили людям свою состоятельность. Не нужно ни страха, ни боязни — это лишь миссия. Давайте вместе доведём это до конца.',
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() => ruby.say('Пусть и ваш путь усеет сияющий свет.'));
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {CharaTalk} you 玩家
   * @param {boolean} r_awake 第一红宝石是否醒着
   * @param {boolean} after_recruit 是否是招募后第一次选中互动角色
   */
  select(ruby, you, r_awake, after_recruit) {
    if (!r_awake) {
      era.print([
        ruby.get_colored_name(),
        ' крепко засыпает, разумеется, всё ещё в объятиях ',
        you.get_colored_name(),
        ' — этого виновника.',
      ]);
    } else if (after_recruit) {
      ruby.say('С сегодняшнего дня прошу любить и жаловать.');
      ruby.say('Великолепие, превосходство — всегда сиять самым ярким светом.');
      ruby.say('Держу заповеди рода в сердце и лишь иду вперёд.');
      ruby.say('…На этом всё.');
    } else {
      const buffer = [
        () =>
          era.print([
            ruby.get_colored_name(),
            ' склоняет голову перед ',
            you.get_colored_name(),
            '.',
          ]),
        () => {
          era.print([
            ruby.get_colored_name(),
            ' словно в бальном платье, делает книксен перед ',
            you.get_colored_name(),
            '.',
          ]);
          era.print(
            'Сгибая колени, слегка разводит их в стороны и отставляет одну ногу назад.',
          );
          era.print([
            you.get_colored_name(),
            ' с неловкостью и нарочитостью кланяется в ответ на виду у всех.',
          ]);
        },
      ];
      if (era.get('love:85') >= 75) {
        buffer.push(() => {
          era.print([
            ruby.get_colored_name(),
            ' немного вздремнула, ',
            you.get_colored_name(),
            ' лежит рядом, и ',
            ruby.sex,
            ' тоже на кровати.',
          ]);
          era.print(
            'За окном прохладный ветер, голосов нет — только ветви качаются.',
          );
          era.print([
            'Еле-еле проснувшаяся ',
            ruby.get_colored_name(),
            ' потягивается в объятиях ',
            you.get_colored_name(),
            ' и садится.',
          ]);
        });
      }
      get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async office_study(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          'Сначала медленно распустите узел и, расчёсывая, держите волосы у корней. Вы ведь вызвались причесать меня не по капризу?',
        ),
      async () => {
        await ruby.say_and_wait(
          'В отношениях с людьми — или, точнее, чтобы связи были крепки — важнее всего уметь создавать ценность для других.',
        );
        await ruby.say_and_wait(
          'Лишь создавая ценность для других, отношения держатся. Иначе сколько ни знакомься — это пустое общение: вас никто не запомнит.',
        );
      },
    ];
    if (ruby.sex_code !== 1 && era.get('love:85') >= 90) {
      buffer.push(
        async () => {
          await ruby.say_and_wait(
            'Проще говоря, при регулярной близости и без предохранения достигается высокая вероятность зачатия.',
          );
          await ruby.say_and_wait(
            'У обычных людей вероятность зачатия в месяц лишь 20-30%, а у нас, лошадок, в течку она растёт как минимум вдвое.',
          );
        },
        async () => {
          await ruby.say_and_wait(
            'Яйцеклетка лошадки живёт дольше, чем у обычных людей, так что близость вовсе не обязательна именно в день овуляции.',
          );
          await ruby.say_and_wait(
            'Два-три дня до и после — лучшее время; если вы способны на близость пять-шесть раз в неделю, о дате овуляции можно не беспокоиться.',
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {CharaTalk} you 玩家
   */
  async talk(ruby, you) {
    const buffer = [];
    if (era.get('base:85:体力') < 0.45 * era.get('maxbase:85:体力')) {
      buffer.push(
        () =>
          ruby.say_and_wait(
            'Я сегодня очень устала и едва ли смогу полностью понять ваши указания. Прошу прощения.',
          ),
        () => ruby.say_and_wait('Как и думала… это было слегка чересчур.'),
        () => ruby.say_and_wait('Недоговорённое можно продолжить позже…'),
      );
      if (era.get('love:85') >= 75) {
        buffer.push(
          () =>
            ruby.say_and_wait(
              'То самое утомляет; если планируете, освободите мне время искупаться.',
            ),
          () =>
            ruby.say_and_wait([
              'Вам знакомо слово 『усталость』? Это когда недавно ',
              you.sex_code === 1 ? ' господин' : 'дама',
              ' лежит на мне сверху.',
            ]),
        );
      }
    } else if (era.get('cflag:85:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:85:干劲')) {
        case 2:
          buffer.push(
            () =>
              ruby.say_and_wait(
                'В сердце — великолепие, в себе — превосходство. Это незыблемый принцип на веки вечные.',
              ),
            () =>
              ruby.say_and_wait(
                'Нужно принести роду ещё большую славу. Поэтому, какова бы ни была трудность, иного пути, кроме как преодолеть её, не существует.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () => ruby.say_and_wait('Обдумываете способ тренировки?'),
            () =>
              ruby.say_and_wait(
                'Предъявите сегодняшнее меню тренировок. Какова бы ни была нагрузка — всё равно!',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              ruby.say_and_wait(
                'Подготовка уже завершена. Половинчатые тренировки даже не доставайте.',
              ),
            () =>
              ruby.say_and_wait(
                'Насчёт тренировок у меня есть предложение. Взгляните на брошюру под рукой.',
              ),
            () =>
              ruby.say_and_wait(
                'Нет… не нужно церемониться. Время ограничено, есть дела важнее.',
              ),
          );
          break;
        case -1:
          buffer.push(
            () => ruby.say_and_wait('Нх… если нести на себе род, нельзя…'),
            () => ruby.say_and_wait('Не сломаться… ни за что…'),
          );
          break;
        case -2:
          buffer.push(
            () =>
              ruby.say_and_wait(
                'Сегодняшняя форма совсем… нужно как можно скорее выяснить причину.',
              ),
            () => ruby.say_and_wait('…Волны чувств — какая морока.'),
            () => ruby.say_and_wait('Хех… до такой степени, нн…'),
          );
      }
      buffer.push(() =>
        ruby.say_and_wait(
          'О завтрашнем расписании. Намеченный на завтра ужин отменён; прошу назначить дополнительную практику.',
        ),
      );
    } else {
      buffer.push(
        () =>
          ruby.say_and_wait(
            'Сейчас, конечно, отдых. Но у меня ещё онлайн-занятия с репетитором, так что сначала закончу задание по иностранному языку.',
          ),
        () =>
          ruby.say_and_wait(
            '『Пусть все, кто в стуже, улыбнутся и так встретят Новый год. В этом и есть моя работа.』…Отец часто так говорил мне.',
          ),
        () =>
          ruby.say_and_wait(
            'Сапфир из родного дома — наша собака — очень умная. Она понимает, кому принесли газету, и относит её адресату в руки.',
          ),
        () =>
          ruby.say_and_wait(
            'Вкус, функциональность, чувство стиля. Этот наряд — лучший выбор, отвечающий всем этим меркам.',
          ),
        () =>
          ruby.say_and_wait(
            'У вас есть уверенность, что после вы приведёте мой наряд в порядок?',
          ),
        () =>
          ruby.say_and_wait(
            'Вы, кто всегда держит грудь прямо и доводит каждое дело до конца, признаны нами.',
          ),
        () =>
          ruby.say_and_wait(
            'Меня время от времени спрашивают о подобном… на деле я редко прибегаю к помощи горничных. Все дела решаю сама.',
          ),
        () =>
          ruby.say_and_wait(
            '『Блистательный род』 — все достойны этого имени своей чистотой. Стало быть, и мне надлежит стоять на вершине.',
          ),
        () =>
          ruby.say_and_wait(
            'Вы — мой тренер. Прошу добросовестно исполнять свой долг: учиться упорно и без устали.',
          ),
        () =>
          ruby.say_and_wait(
            'Матушка и бабушка свершили великое на скачках. А чтобы доказать, что во мне течёт их кровь… остаётся лишь скачка.',
          ),
        () =>
          ruby.say_and_wait(
            'Красная лента в волосах и галстук-бабочка. Это цвет моей решимости 『непременно показать выдающийся результат』.',
          ),
        () =>
          ruby.say_and_wait(
            'Весной я надеваю цветочное ожерелье. По украшениям, уместным в свой срок, видно положение человека.',
          ),
        () =>
          ruby.say_and_wait(
            'Я должна сиять блеском, достойным нашего рода. Это блеск пышный и славный — словно огонь Скорпиона.',
          ),
        () =>
          ruby.say_and_wait(
            'Одежда — тоже знак. Пока есть сцена победителя, нужна пышность, что притягивает взгляды зрителей.',
          ),
        () =>
          ruby.say_and_wait(
            'Недосып сказывается на рассудительности. Когда не спится, прошу вас прибегнуть к таким средствам, как травяной чай.',
          ),
        () =>
          ruby.say_and_wait(
            'У нашего рода есть правило перед сном. А именно — спросить себя: сумели ли мы сегодня не посрамить своего имени. Это важное время.',
          ),
        () =>
          ruby.say_and_wait(
            'Вы видели утреннюю газету? Там есть материал о нашем роде, прошу вас непременно взглянуть.',
          ),
        () =>
          ruby.say_and_wait(
            'С детства я вставала проводить занятых делами родителей, поэтому и поныне мне не нужен будильник.',
          ),
      );
      if (era.get('love:85') >= 75) {
        buffer.push(() =>
          ruby.say_and_wait(
            'Вы — признанная мною пара. Прошу, гордо поднимите голову.',
          ),
        );
      }
      if (era.get('love:85') >= 90) {
        buffer.push(() =>
          ruby.say_and_wait(
            'Сегодня благой день, что определит курс рода на будущий год. Когда за вами приедет машина, прошу ни в коем случае не опоздать.',
          ),
        );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async office_gift(ruby) {
    const buffer = [
      () => ruby.say_and_wait('За вашу помощь — глубочайшая благодарность.'),
      () =>
        ruby.say_and_wait(
          'Ответный дар я подберу сообразно своему впечатлению о вас, позволите?',
        ),
    ];
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          'Я знаю, что вы хотите сказать, смущаться незачем. В нашей стране ранний брак — вещь вполне обыденная.',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async office_cook(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        `Нх… что это за взгляд? Разумеется, есть вещи, которые мне не даются.`,
      );
    } else {
      await ruby.say_and_wait([
        'Подача — весьма достойная. О вкусе и говорить нечего. Вы непременно завоюете желудок ',
        ruby.sex_code === 1 ? ' мальчика' : 'девочки',
        '.',
      ]);
    }
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async office_rest(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        `Так и не двигайтесь. Одолжите плечо. Минуту, всего минуту…`,
      );
    } else {
      await ruby.say_and_wait(
        `Не тяжело? Волос у меня, должно быть, немало… нн! Ле-гче. Да, гладьте ещё нежнее…`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {PrintedSpan} call_67 第一红宝石对里见光钻的称呼
   */
  async office_game(ruby, call_67) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`Любопытно. Хочу попробовать и другое.`);
    } else {
      await ruby.say_and_wait([
        'Понятно. Причина, по которой ',
        call_67,
        ' ',
        ruby.sex,
        ' не знает в этом устали, мне уже чуть ясна.',
      ]);
    }
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async s_a_tree_hollow(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        'Вы согласны заменить его, составить мне компанию и выслушать, как эта слабая ',
        ruby.child_sex_title,
        ' изливает горе?',
      ]);
    } else {
      await ruby.say_and_wait(
        `Предки, верно, тоже смотрят на нас, стоя подле Трёх богинь.`,
      );
    }
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async s_a_dating(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        'Так запросто на людях с младшей ',
        ruby.child_sex_title,
        ' за руку — достойно восхищения.',
      ]);
    } else {
      await ruby.say_and_wait(
        `Не нужно сжимать так крепко: я и сама не сбегу.`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {CharaTalk} you 玩家
   */
  async s_r_lunch(ruby, you) {
    const buffer = [];
    buffer.push(() =>
      era.printAndWait([
        you.get_colored_name(),
        ' и ',
        ruby.get_colored_name(),
        ' вместе отведали роскошный бэнто, что принёс господин дворецкий.',
      ]),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '『Лучшая подушка, на которой доводилось покоить голову за всю жизнь』? …Медоточиво. Глаза пока не открывайте.',
          ),
        () =>
          ruby.say_and_wait(
            'Натешились — тогда во время дневной тренировки приставать запрещаю.',
          ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          'Фух… ладно, я сниму сама. В такие моменты вы опять становитесь неуклюжи: если нечаянно порвёте одежду, будет скверно.',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_r_fishing(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          `На самом деле у дома Дайити тоже есть профессиональная рыболовная команда.`,
        ),
      () =>
        ruby.say_and_wait(
          `Вы слышали имя 『Рейлос』? Неизвестно, сколько ещё продержатся здешние рыбы.`,
        ),
      () =>
        ruby.say_and_wait(
          `Раз улов так лёгок, мне одной с ним на снимок? Ну и тип…`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_r_walking(ruby) {
    const buffer = [];
    buffer.push(() =>
      ruby.say_and_wait(
        'Как бы ни был долог путь, эта река всё равно дойдёт до того широкого, бурного моря.',
      ),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          `Новые апартаменты в старом вкусе у берега реки дома Мэдзиро — наш род тоже принимал участие в строительстве. Как будет досуг, давайте сходим вместе и оценим.`,
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait([
          'В столь нежном возрасте надеть столь откровенное — право, не понимаю, о чём ',
          ruby.couple_title,
          ' думает. Хотите увидеть это на мне? Отказываю… по крайней мере, сейчас.',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_s_arcade(ruby) {
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        `Знаю. Это новейшая JRPG корпорации Сатоми. О её истоке — даже мне доводилось слышать громкое имя 『Истинное · перерождение Трёх богинь』.`,
      );
    } else {
      await ruby.say_and_wait(
        `Игровой фон проработан весьма тщательно; верность, с которой авторы воплотили замысел сюжета, достойна похвалы.`,
      );
    }
  },
  /**
   *  @param {CharaTalk} ruby 第一红宝石
   * @param {boolean} hot_spring 是否抽到温泉旅行券
   *  */
  async o_s_drawing(ruby, hot_spring) {
    if (hot_spring) {
      await ruby.say_and_wait('Вытянули купон на поездку к горячим источникам');
    } else if (Math.random() < 0.5) {
      await ruby.say_and_wait(
        'Что? Нм, хорошо. Раз деньги уже потрачены, пусть будет развлечением.',
      );
    } else {
      await ruby.say_and_wait(
        'Я знаю: у матушки есть закадычная подруга, что три дня и три ночи делила ложе с возлюбленным и тем исправила его превратные взгляды на деньги.',
      );
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
   * */
  async o_s_ktv(ruby, call_93) {
    if (era.get('love:85') < 75 || Math.random() < 0.5) {
      await ruby.say_and_wait([
        'Нм… ',
        call_93,
        ' с самого начала мне про это место и говорила — да, оно самое. Звукоизоляция… высший сорт.',
      ]);
    } else {
      await ruby.say_and_wait(
        `Даже звёзд ночных клубов превосходите? Позже позвольте мне заглянуть к вам в комнату.`,
      );
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {PrintedSpan} callname 第一红宝石对玩家的称呼
   * */
  async o_s_movie(ruby, callname) {
    if (era.get('love:85') < 75 || Math.random() < 0.5) {
      await ruby.say_and_wait([
        callname,
        '. П-прошу прощения… этот… фильм ужасов, я, кажется, слишком разволновалась, немного…',
      ]);
      await era.printAndWait(
        `По окончании фильма на кресле остаётся маленькая лужица.`,
      );
    } else {
      await ruby.say_and_wait([
        'Говорят, это прекрасное, захватывающее дух произведение, ',
        callname,
        '. Но, учитывая вашу дурную славу, какую пару чулок вы желаете, чтобы я надела?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 第一红宝石对玩家的称呼
   */
  async o_c_pray(ruby, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' вместе с недавно неважно себя чувствующей ',
      ruby.get_colored_name(),
      ' и господином дворецким втроём пришли в святилище.',
    ]);
    await ruby.say_and_wait(
      `Тории — черта, что отделяет владения, где обитают боги, от мира нашей повседневности.`,
    );
    await era.printAndWait(`Проходя сквозь них, непременно поклонитесь.`);
    await ruby.say_and_wait(`Что с вами?`);
    era.printButton(`「По-моему, этикет безупречен.»`, 1);
    await era.input();
    await ruby.say_and_wait(
      `У нашего рода случаев для молений тоже немало, поэтому я выучила это ещё в детстве.`,
    );
    await ruby.say_and_wait(
      `Разумеется, молитва… не для того, чтобы на неё опираться. Проложить путь способен лишь сам человек.`,
    );
    await ruby.say_and_wait(
      `Святилище — место, где встречаешься со своими устремлениями лицом к лицу. Именно потому обряд должно вершить с верным этикетом.`,
    );
    await ruby.say_and_wait(`Тогда я пойду помолиться.`);
    era.drawLine();
    await ruby.say_and_wait([callname, ' тоже уже закончили? Если да, тогда…']);
    await you.say_as_passer_by_and_wait(`Каннуси`, [
      'Ох, да не вы ли ',
      ruby.actual_name_with_title,
      '? Благодарим за ваш визит.',
    ]);
    await ruby.say_and_wait(
      `Господин каннуси. Далее как раз направляюсь с деловым приветствием.`,
    );
    era.drawLine();
    await ruby.say_and_wait(
      `Приветствие господину каннуси и обряд завершения моления на этом исполнены. Пойдёмте назад.`,
    );
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_s_restaurant(ruby) {
    const buffer = [
      () =>
        ruby.say_and_wait(
          `Обед я принимала в одиночестве. Пока нет особого дела, вместе с кем-то трапезничать незачем.`,
        ),
      () =>
        ruby.say_and_wait(
          `Вы и так весьма изящны за трапезой. Ах, вот тут рисинка.`,
        ),
      () =>
        ruby.say_and_wait(
          `Подглядывать во время еды — поведение без вкуса. Если у вас есть фасон по сердцу, позже я могу его примерить.`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} ruby 第一红宝石
   * @param {PrintedSpan} callname 第一红宝石对玩家的称呼
   */
  async o_s_dating(ruby, callname) {
    const buffer = [];
    buffer.push(
      () => ruby.say_and_wait(`Воистину прекрасное место. Мне очень нравится.`),
      () =>
        ruby.say_and_wait(
          `Порой невольно хочется возблагодарить судьбу, что свела меня с вами.`,
        ),
      () => ruby.say_and_wait(`Это тоже считается вашей работой?`),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          `Грабежи и насилия чаще всего случаются как раз на таких улицах у метро. Даже вполне настоящая ${ruby.uma_sex_title}, стоит лишь потерять бдительность — и можно пасть жертвой.`,
        ),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait([
          callname,
          ', не важнее ли смотреть, идёт ли поезд, чем меня?… Погодите! Если будете возиться, нас увидят…',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} ruby 第一红宝石 */
  async o_s_shopping(ruby) {
    const buffer = [];
    buffer.push(() =>
      ruby.say_and_wait(
        'Это пригласительная карта торгового центра и опознавательный пропуск в зал. Площадка велика — не хотите ли, чтобы я взяла вас за руку?',
      ),
    );
    if (era.get('love:85') >= 50) {
      buffer.push(() =>
        ruby.say_and_wait(
          'Матушка через три месяца после свадьбы с батюшкой уже ждала ребёнка. Дело вовсе не в интересе к товарам для матерей и младенцев.',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  cl_new_year: (() => {
    const title = 'Новый год';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        'Счастливая новогодняя атмосфера держит ',
        you.get_colored_name(),
        ' в возбуждении с самого утра и до сих пор.',
      ]);
      await era.printAndWait(['Устроить первый новогодний залп?']);
      await era.printAndWait([
        you.get_colored_name(),
        ' нетерпеливо и тихонько придвигается к ',
        ruby.get_colored_name(),
        ' и капризным взглядом намекает.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' сердито глядит на ',
        you.get_colored_name(),
        ' и взмахом руки велит「Проваливай」.',
      ]);
      await era.printAndWait([
        'Её гневное лицо особенно холодно и прекрасно; изгнанная ею ',
        you.get_colored_name(),
        ' решает?',
      ]);
      era.printButton('Вернуться в комнату и лечь спать.', 1);
      era.printButton('Подхватить Руби за талию.', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Всю ночь ',
          you.get_colored_name(),
          ' ворочается с боку на бок и никак не может заснуть.',
        ]);
        await era.printAndWait([
          'В конце концов ',
          you.get_colored_name(),
          ' со слезами на глазах даёт в туалете первый новогодний залп.',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' вскрикивает, не успев снять туфли, — ',
          you.get_colored_name(),
          ' прижимает её к постели.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' грубо срывает с ',
          ruby.get_colored_name(),
          ' верх и всей щекой зарывается в слегка приподнятую нежную грудь, трётся о неё.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' глубоко вдыхает давно не слышанный аромат белоснежной кожи.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' затем расстёгивает молнию и даёт давно томившемуся члену глотнуть воздуха.',
        ]);
        await era.printAndWait([
          'Не давая ',
          ruby.get_colored_name(),
          ' уклониться, обеими руками слегка давит на талию ',
          ruby.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' твёрдым низом входит в гладкий тесный вход ',
          ruby.get_colored_name(),
          ' и затем непрестанно проникает в нежный канал.',
        ]);
        await era.printAndWait([
          'Наконец упирается в стенку крошечной матки ',
          ruby.get_colored_name(),
          ' и останавливается; часть ствола при этом всё ещё снаружи.',
        ]);
        await ruby.say_and_wait('Я… сломаюсь!');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' кладёт обе маленькие ладони на плечи ',
          you.get_colored_name(),
          '; она дрожит, но не вырывается.',
        ]);
        await era.printAndWait([you.get_colored_name(), ' останавливается.']);
        await era.printAndWait([
          'Дождавшись, пока ',
          ruby.get_colored_name(),
          ' чуть привыкнет, берёт её за талию и начинает двигаться.',
        ]);
        await era.printAndWait([
          'Благодаря ',
          ruby.get_colored_name(),
          ' — её особому сложению — ',
          you.get_colored_name(),
          ' почти не чувствует сопротивления, продвигаясь внутрь.',
        ]);
        await era.printAndWait([
          'Ощущение — будто держишь чуть увесистую куклу: совсем легко.',
        ]);
        await era.printAndWait([
          'Охват и трение там заставляют ',
          you.get_colored_name(),
          ' воспарить к небесам.',
        ]);
        await era.printAndWait([
          'Каждый раз, доходя до края матки ',
          ruby.get_colored_name(),
          ', её взволнованные крики и стоны неизменно вызывают у ',
          you.get_colored_name(),
          ' смех.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' умоляет ',
          you.get_colored_name(),
          ' быть нежнее и медленнее.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' ускоряет ритм бёдер, и ',
          ruby.get_colored_name(),
          ' вторит всё более громкими стонами и криками.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' в душе вспыхивает жажда покорить.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' на сцене победителя поёт голосом ангела, что без сомнения пленяет души.',
        ]);
        await era.printAndWait([
          'Но её нынешние сладкие стоны лишь низвергают душу ',
          you.get_colored_name(),
          ' в ад разврата.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' ещё не чувствует прилива желания.',
        ]);
        await era.printAndWait([
          'Вдруг ',
          ruby.get_colored_name(),
          ' выгибается всем телом назад, и влагалище без конца дрожит и сжимается.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' слегка хлопает по милому личику ',
          ruby.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' несколько минут витает в забытьи и лишь затем смутно приходит в себя.',
        ]);
        await era.printAndWait([
          'Тогда ',
          you.get_colored_name(),
          ' снова принимается толкаться.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' стягивает с ',
          ruby.get_colored_name(),
          ' белые чулки наполовину и подносит к носу, вдыхая.',
        ]);
        await era.printAndWait([
          'Только что снятые чулки несут аромат ',
          ruby.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' с силой вдыхает, словно смакует духи.',
        ]);
        await ruby.say_and_wait('Извращенец.');
        await era.printAndWait([you.get_colored_name(), ' ускоряет качание.']);
        await era.printAndWait([
          you.get_colored_name(),
          ' то качает вверх-вниз, то крутит влево-вправо.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' плотно стискивает губы, словно изо всех сил противится вторжению наслаждения.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' сдерживается, пока ',
          ruby.get_colored_name(),
          ' снова не кончит, и лишь тогда даёт волю желанию.',
        ]);
        await era.printAndWait([
          'Её беспамятный вид чрезмерен: текут и слёзы, и слюна.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' по-доброму высовывает язык и слизывает всё дочиста.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' хочет разом сбросить всё напряжение этих дней.',
        ]);
        await era.printAndWait([
          'Но ',
          ruby.get_colored_name(),
          ' уже обмякла и выглядит полумёртвой.',
        ]);
        await era.printAndWait([
          'В оргазме она всё милее: кожа светится прекрасным румяным глянцем.',
        ]);
        await era.printAndWait([
          'Губы алые, словно почти растаявшая любовная свеча.',
        ]);
        await era.printAndWait([
          'Особенно те влажные глаза — туманные, мокрые: ещё взглянешь, и они втянут душу.',
        ]);
        await era.printAndWait([
          'Боясь, как бы ',
          ruby.get_colored_name(),
          ' не испустила дух, да и сил уже немного не хватает, ',
          you.get_colored_name(),
          ' решает продолжить бой в будущем году.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = 'Рождество';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await ruby.say_and_wait('Вы уже решили, какой хотите подарок?');
      era.printButton('「Хочу вас.」', 1);
      await era.input();
      await ruby.say_and_wait('Искренний ответ.');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' останавливает движение рук и чуть краснеет.',
      ]);
      await ruby.say_and_wait(
        'Тогда это будет зависеть от того, как вы себя покажете.',
      );
      await era.printAndWait([
        'Они нарочно закупили партию ёлок для украшения; если смотреть под известным углом, не выдаёт ли это ',
        ruby.get_colored_name(),
        ' детскую натуру?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' в забытьи понимает, что, кажется, никогда не украшал ёлку, а теперь будет делать это с ',
        ruby.get_colored_name(),
        ' вместе.',
      ]);
      await era.printAndWait(
        'На ветки повесили леденцы-трости, монетки с дырочками, пряничных человечков и всякие игрушки.',
      );
      await era.printAndWait([
        'И конечно подкова: ',
        ruby.get_colored_name(),
        ' похоже, весьма ею довольна.',
      ]);
      await era.printAndWait([
        'Затем настало время умыться; хотя ',
        ruby.get_colored_name(),
        ' говорила уклончиво, но ',
        you.get_colored_name(),
        ' всё же видит, что она очень ждёт этот вечер.',
      ]);
      await era.printAndWait([
        'Благополучно вымывшись, ',
        ruby.get_colored_name(),
        ' первой выходит из ванны, входит в спальню и садится на край большой кровати.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' тоже входит следом, однако ',
        you.get_colored_name(),
        ' обнимает ',
        ruby.get_colored_name(),
        ' и осыпает поцелуями и укусами.',
      ]);
      await era.printAndWait([
        'Словно под наркозом, ',
        you.get_colored_name(),
        ' хочет лишь ближе и ближе гладить её, целовать её, лизать её.',
      ]);
      await era.printAndWait(
        'В комнате тоже много украшений: на четырёх столбах большой кровати завязаны ленты почти выдающегося качества.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' небрежно снимает одну и без труда связывает ',
        ruby.get_colored_name(),
        ' руки.',
      ]);
      await era.printAndWait(
        'Кожа бледно-золотистая, с здоровым пшеничным отливом; орудие меж ног от недавней частой работы стало тёмно-красным.',
      );
      await era.printAndWait(
        'А задранная головка и вовсе грозит из красной стать фиолетовой.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' отводит у ',
        ruby.get_colored_name(),
        ' несколько прядей за голову; гигантский член всё ближе к маленькому лицу.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' поднимает взгляд и, глядя на ',
        you.get_colored_name(),
        ' чуть улыбается, высовывает язык и слегка касается.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' маленький тренер вздрагивает и радостно тянется к ',
        ruby.get_colored_name(),
        ' рту.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' кротко позволяет ',
        you.get_colored_name(),
        ' войти; лишь изо всех сил раскрыв рот, она едва может вместить.',
      ]);
      await era.printAndWait(
        'Она сглатывает горлом и медленно отступает, пока губами едва касается головки, затем снова принимает в рот.',
      );
      await era.printAndWait([
        'Движения хоть и медленные, ',
        you.get_colored_name(),
        ' едва не рычит от наслаждения.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' начинает держать ',
        ruby.get_colored_name(),
        ' за голову и толкается вперёд-назад.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' чуть сопротивляется, затем изо всех сил подстраивается под ',
        you.get_colored_name(),
        ' ритм.',
      ]);
      await era.printAndWait([
        'Будь на её месте человек, которого ',
        you.get_colored_name(),
        ' так насиловал бы в рот — не говоря уже о крови, сошёл бы слой кожи.',
      ]);
      await era.printAndWait([
        'Спустя изрядное время у ',
        ruby.get_colored_name(),
        ' уже свело щёки, и лишь тогда ',
        you.get_colored_name(),
        ' еле-еле кончает.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' Остаток, что не удалось проглотить, брызжет ей на тело.',
      ]);
      await era.printAndWait([
        'На миг не может сомкнуть губы; ',
        ruby.get_colored_name(),
        ' косится на ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton('「Руби, простите.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' обнимает плечо любимой лошадки, гладит её милые ушки, целует уголок губ и лишь тогда ',
        ruby.get_colored_name(),
        ' удаётся утешить и вернуть.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' меняет позу, спиной к ',
        you.get_colored_name(),
        ', садится на грудь ',
        you.get_colored_name(),
        ' и нарочно выпячивает ягодицы.',
      ]);
      await era.printAndWait([
        'Белоснежные нежные ягодицы покачиваются перед глазами ',
        you.get_colored_name(),
        ', и ',
        you.get_colored_name(),
        ' вспоминает, как при первой встрече взгляд тоже прикипел именно сюда.',
      ]);
      await era.printAndWait([
        'Схватив ягодицы, ',
        you.get_colored_name(),
        ' не удерживается и принимается мять их.',
      ]);
      await era.printAndWait(
        'С силой сжимает и отпускает, затем хлопает ладонью.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' вздрагивает дважды, и сразу проступают алые отпечатки пальцев — яркие донельзя.',
      ]);
      await ruby.say_and_wait('Скорее…');
      await era.printAndWait([
        you.get_colored_name(),
        ' Услышав ',
        ruby.get_colored_name(),
        ', начинает вылизывать языком эту глубокую ложбинку между ягодиц сверху вниз, скользя вплоть до маленькой ямки.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' указательным пальцем раздвигает её: сморщенная, нежно-розовая, сжалась в комочек.',
      ]);
      await era.printAndWait([
        'Изнутри струится некий плотский запах и влечёт ',
        you.get_colored_name(),
        ' к исследованию.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' бессильно оседает на колени ',
        you.get_colored_name(),
        '; у кончика носа — несгибаемый член, и она наслаждается этой нежностью.',
      ]);
      await ruby.say_and_wait('На сегодня довольно. Я очень устала.');
      await era.printAndWait([
        you.get_colored_name(),
        ' разочарованно смотрит туда, всё ещё не в силах оторваться.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} ruby 第一红宝石 */
  async load_talk(ruby) {
    await ruby.say_and_wait('…Это и есть ваша воля?');
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('…Поняла');
    await ruby.say_and_wait([ruby.get_colored_name(), ', сменю… тренировку—']);
    await ruby.print_and_wait(
      `${ruby.sex}Бросив недоговорённое, убегает, оставляя мелкие следы слёз…`,
    );
  },
  basement_end: (() => {
    const title = 'Высокая чувствительность стоп';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await you.say_and_wait('Мама Руби... мама Руби...');
      era.println();
      era.print([
        'Для ',
        you.get_colored_name(),
        ' такая жизнь, быть может, даже недурна?',
      ]);
      era.print(
        'Только дыхание по-прежнему стеснено: на лицо натянуты белые чулки, которые Дайити Руби вчера сняла, и и без того рассеянный свет манит ещё беспощаднее.',
      );
      era.print('Даже сквозь веки сон одевается этой тонкой вуалью.');
      era.print(
        `Чулки, побывавшие на теле Дайити Руби, пьянящий аромат и благовонная теплота тела рисуют туманную прелесть и доводят ${you.name} до нестерпимого зуда в сердце.`,
      );
      era.print(
        `Словно нефритовые стопы Дайити Руби, давно покорившие ${you.name}, зависают перед ${you.name}, то и дело легко касаясь кончика носа, чуть потеревшись — и снова поднимаются.`,
      );
      await era.printAndWait(
        `${you.name} поднимает голову, силясь поцеловать тёплые подошвы; в пустоте лёгкие поцелуи падают снова и снова и вновь и вновь разжигают ${you.name} внутренний мазохистский пыл...`,
      );
      era.println();

      await era.printAndWait('Цок, цок, цок...');
      era.println();

      era.print(
        `Манящий ритм мерно раздаётся, и ${you.name} будто видит: из самой пустоты выходит тот силуэт, что не даёт ей покоя.`,
      );
      era.print(
        `Те плавные изгибы, та чарующая осанка и те затуманенные очи заставляют сердце ${you.name} биться ещё яростнее.`,
      );
      await era.printAndWait(
        `Уже вовсе не различить, явь это или сон: ${you.name} позабыла собственный опыт, словно сейчас и не лежит в постели.`,
      );
      era.println();

      await ruby.say_and_wait(
        'Мелкая шавка, так любишь запах мамы? Уже досуха кончила, а всё просишь, чтобы мама продолжала тебя мучить?',
      );
      era.println();

      era.print(
        `${you.name} чувствует, что язык и рот уже онемели, в голове пусто, словно кончала до потери самой речи.`,
      );
      era.print(
        `Услышав слова мамы Руби, ${you.name} невольно глупо улыбается; виброяйцо в заднем проходе тоже останавливается — ток иссяк, — и всё вокруг становится таким пустым, будто снова наступила обыденность.`,
      );
      era.print(
        `А у ${you.name} мама Руби в этот миг тихо смеётся и поднимается — такая величественная, такая полная очарования.`,
      );
      era.print(
        `Нефритовая стопа упирается в бутоны на груди; уже пропитанные семенем белые чулки она натягивает себе на ступни, наклоняется и прямо на груди ${you.name} надевает чулки.`,
      );
      era.print(
        `Грубое ощущение, и всё же с привычной шелковистостью: ${you.name} довольно глухо стонет, и ${you.name} словно обретает смысл жизни: быть маме Руби подставкой для стоп, живым унитазом, послушной шавкой и отдавать ей своё семя — тоже, кажется, неплохо.`,
      );
      era.print(
        `${you.name} чувствует, что прежние грехи и совершённые проступки словно получают искупление, и ${you.name} наслаждается этим.`,
      );
      await era.printAndWait(
        `Словно стелька под ногой, и вот мама Руби надевает самые любимые ${you.name} чёрные кожаные туфли; жёсткий узор прокатывается по бутонам, и ощущение как от тока заставляет ${you.name} почувствовать, будто лежит меж облаков, лежит на Жёлтых источниках преисподней и ими питается.`,
      );
      era.println();

      await ruby.say_and_wait(
        'Итак, мелкая шавка, сынок, лежи себе смирно на полу: мама Руби пойдёт искать тебе клетку целомудрия. Впредь ты лишь шавка при маме Руби и сможешь извергать семя лишь униженно, по приказу.',
      );
      era.println();

      era.print(
        `Вот что значит родство душ: Руби ${you.name} — нет, мама Руби ${you.name} уже чувствует, какой вес она теперь имеет в сердце.`,
      );
      era.print(
        `${you.name} тоже была готова — охотно, всей душой, покорно — стать шавкой мамы Руби!`,
      );
      era.print(
        `Вместе с удаляющимися шагами ${you.name} чувствует, как камень спадает с сердца; член так обмякает, что сколько ни гладь его рукой — никакого отклика.`,
      );
      era.print(
        `${you.name} чувствует сильную усталость и снова проваливается в дрёму, словно так ${you.name} сможет и дальше следовать за шагами мамы Руби, увидеть маму Руби, целиком утонуть у её ног и вечно вдыхать аромат нефритовых стоп мамы Руби.`,
      );
      era.print(
        ` почувствовала, как член снова постепенно поднимается, ${you.name} не сознавая, в каком она положении, не сознавая, где находится...`,
      );
      await era.printAndWait(
        `Но на самом переднем плане сна мама Руби протягивает обе соблазнительные нефритовые стопы, подставляя подошвы перед ${you.name} и мягко улыбается, глядя на ${you.name}……`,
      );
    };
    f.title = title;
    return f;
  })(),
};
