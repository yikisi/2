/**
 * @file 奇锐骏 - 日常
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {number} slavery 奴役类型，0-通常，1-奴役对方，2-强奸过对方/调教中，3-被奴役（性奴/孕袋）
   */
  good_morning(acute, callname, slavery) {
    const buffer = [
      () =>
        acute.say(
          'Ай-яй… вижу, работаешь на совесть~ съесть чуть свежепросоленных помидоров с сахаром? Подкрепишься сладеньким — и на послеобеденную тренировку сил хватит.',
        ),
      () =>
        acute.say([
          callname,
          ' Одежда-то тонкая… к осени кутайся теплее. Простынешь в таком — совсем худо будет.',
        ]),
      () =>
        acute.say([
          'После тренировки я, пожалуй, засолю сушёной редьки. К завтраму как раз поспеет, ',
          callname,
          ' можно будет этой сушёной редькой угостить других хороших деток — глядишь, и подружатся ',
          acute.couple_title,
          ', верно?',
        ]),
      () =>
        acute.say([
          'Ай-яй… какой бодрый, ',
          callname,
          ', случилось что хорошее? Ху-хо-хо… придётся сварганить рис с красной фасолью~',
        ]),
      () =>
        acute.say([
          'Ай-яй… какой бодрый, ',
          callname,
          ', случилось что хорошее? Ху-хо-хо… придётся сварганить помидоры с сахаром~',
        ]),
      () =>
        acute.say([
          'Ай-яй… какой бодрый, ',
          callname,
          ', случилось что хорошее? Ху-хо-хо… придётся сварганить тушёного карпа~',
        ]),
      () =>
        acute.say([
          'Ай-яй… какой бодрый, ',
          callname,
          ', случилось что хорошее? Ху-хо-хо… придётся сварганить сушёной редьки~',
        ]),
    ];
    switch (slavery) {
      case 1:
        buffer.push(() => {
          acute.say(
            'В комнате, на крыше, у станции, на тренировочном поле — где угодно, ладно?',
          );
          era.print([
            'Если понадобятся другие детки, я тоже могу помочь. Другим в первый раз, конечно, будет чуть больно, но если понежнее — они по инстинкту поймут чары ',
            callname,
            '.',
          ]);
        });
        break;
      case 2:
        buffer.push(() =>
          acute.say(
            'Фу-фу~ в этот раз так просто меня под себя не повалишь, ясно? Кулачным искусством я довольно горжусь.',
          ),
        );
        break;
      case 3:
        buffer.push(() =>
          acute.say([
            'Сегодняшняя сушёная редька уже готова, в холодильнике. Ешь вовремя, ладно? Опять свалишься без сил от истощения и обезвоживания — этого нельзя, ',
            callname,
            '❤️～',
          ]),
        );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {number} slavery 奴役类型，0-通常，1-奴役对方，2-强奸过对方/调教中，3-被奴役（性奴/孕袋）
   */
  select(acute, you, callname, slavery) {
    const buffer = [
      () =>
        acute.say([
          'Ай-яй-яй… ',
          callname,
          ' ~ не пойдёшь поболтать с другими молодыми милыми детками?',
        ]),
      () => {
        acute.say('С добрым утром, завтрак уже был? Без завтрака нельзя.');
        acute.say(
          'Если ещё не ел — советую рис с натто или кашу с сушёной редькой~ телу хорошо.',
        );
      },
    ];
    switch (slavery) {
      case 1:
        buffer.push(() => {
          acute.say(
            'Фу-фу-фу~ сегодня тоже на прогулку? Тогда взять с собой других деток?',
          );
          era.print([
            'Голая ',
            acute.get_colored_name(),
            ' тихо лежит ничком на земле, пока ',
            you.get_colored_name(),
            ' не подойдёт, ',
            acute.sex,
            ' только тогда, качая ушами влево-вправо, берёт ошейник в зубы и протягивает ',
            you.get_colored_name(),
            ' к рукам.',
          ]);
        });
        break;
      case 2:
        buffer.push(() => {
          acute.say(
            'Ммм… побеждённый слушается победителя, так в природе заведено.',
          );
          era.print([
            'Так сказав, ',
            acute.get_colored_name(),
            ' спокойно надевает на себя сегодняшний ошейник.',
          ]);
        });
        break;
      case 3:
        buffer.push(() => {
          acute.say(['Арара… потерпи, ладно? ', callname, '～']);
          era.print([
            'Прижимает ',
            you.get_colored_name(),
            ' горячий низ живота и то и дело спускается ниже; на лице ',
            acute.get_colored_name(),
            ' — улыбка с намёком.',
          ]);
        });
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async office_study(acute, you) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait('Учиться~? Мм… надо постараться~');
      await era.printAndWait([
        'Сидя в гостиной с томом 「Пять лет скачек, три года симуляций」, ',
        you.get_colored_name(),
        ' объясняет ',
        acute.get_colored_name(),
        ' задачи —',
      ]);
    } else {
      await acute.say_and_wait('Оа-а-а~ учиться, оказывается, так трудно…');
      await era.printAndWait([
        'Перед раскрытым 「Пять лет скачек, три года симуляций」 всегда кроткая ',
        acute.get_colored_name(),
        ' редкостно растерялась.',
      ]);
      await era.printAndWait([
        'То ли от новизны, то ли от злой шутки, ',
        you.get_colored_name(),
        ' невольно усмехнулся в голос —',
      ]);
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async office_prepare(acute) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait('Следующая скачка? …Мм~ какую тактику взять?');
    } else {
      await acute.say_and_wait(
        'Ого? Съездить на трассу следующей скачки побродить?',
      );
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} call_301 奇锐骏对骏川缰绳/丰收时刻的称呼
   * @param {number} slavery 奴役类型，0-通常，1-奴役对方，2-强奸过对方/调教中，3-被奴役（性奴/孕袋）
   */
  async talk(acute, you, callname, call_301, slavery) {
    const buffer = [];
    if (era.get('cflag:100:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:100:干劲')) {
        case -2:
          buffer.push(
            () => acute.say_and_wait('…Хиё-ё… силы совсем нет~'),
            () =>
              acute.say_and_wait(
                'Мм… слушай, а что дальше-то делать? Сегодня в голове каша, совсем вылетело.',
              ),
            () =>
              acute.say_and_wait(
                'Ку-фу-фу… чуть не уснула. Так нельзя, надо чуть освежающей мази под нос…',
              ),
            () =>
              acute.say_and_wait(
                'Бух… а, чуть лягушку не раздавила (и сама шлёпнулась)~',
              ),
            () =>
              acute.say_and_wait(
                'Мм… дома ещё солить сушёную редьку, без бодрости никак~',
              ),
          );
          break;
        case -1:
          buffer.push(
            () => acute.say_and_wait('Фух… терпение и труд~ так что ничего.'),
            () => acute.say_and_wait('Э-хе-хе… силы чуть не держат.'),
            () =>
              acute.say_and_wait('Фу-фу-фу, надо стараться как сверстники.'),
            () =>
              acute.say_and_wait('Вдох — фу, фу~ надо держать нервы в тонусе.'),
            () =>
              acute.say_and_wait(
                'Внимание… сбила эта мошка, что вьётся перед глазами —',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              acute.say_and_wait(
                'Соберись~ так, хлопнула себя по спине у стены — и вроде взбодрилась.',
              ),
            () => acute.say_and_wait([callname, ', начинаем тренировку~']),
            () => acute.say_and_wait('Разведение рук — уже сделала~'),
            () =>
              acute.say_and_wait(
                'Сегодня тоже будем идти честно, шаг за шагом~',
              ),
            () => acute.say_and_wait(['Пора идти, ', callname, '.']),
          );
          break;
        case 1:
          buffer.push(
            () =>
              acute.say_and_wait([
                'Мм~ ну что, ',
                callname,
                ', какая сегодня тренировка~?',
              ]),
            () =>
              acute.say_and_wait('Какая бы ни была — я отнесусь се~рьёз~но.'),
            () =>
              acute.say_and_wait(
                'Соль тоже нужна, съешь немного сушёной редьки~',
              ),
            () =>
              acute.say_and_wait(
                'Хм, хм~ растяжка на месте~ дальше уже по-настоящему.',
              ),
            () =>
              acute.say_and_wait(['А~ ', callname, ', что ты сейчас сказал?']),
          );
          break;
        case 2:
          buffer.push(
            () => acute.say_and_wait('Фу-фу-фу~ можно и пожёстче тренировать.'),
            () => acute.say_and_wait('Арара… уже время тренировки~'),
            () =>
              acute.say_and_wait(
                'Погодка сегодня славная~ глядишь на солнышко — и сразу сил полно~',
              ),
            () =>
              acute.say_and_wait(
                'Ай-яй… увидела дорожку — и внутри так зачесалось~',
              ),
            () =>
              acute.say_and_wait([
                'После тренировки я хочу вынести одеяла на солнце~ ',
                callname,
                ' Составишь потом компанию?',
              ]),
          );
      }
    } else {
      buffer.push(() =>
        era.printAndWait([
          acute.get_colored_name(),
          ' всё с тем же лёгким лицом.',
        ]),
      );
    }
    switch (slavery) {
      case 1:
        buffer.push(async () => {
          await acute.say_and_wait('Арара… сегодня тоже гулять по Трейсен?');
          await acute.say_and_wait(
            'Голой, за ошейник и повод на шее, выведенной гулять на люди — сердце так и колотится; вот оно, значит, то самое 『романтичное』, о котором молодёжь твердит?',
          );
          await acute.say_and_wait(
            'И характер калит, и романтика с радостью; такой отличный метод тренировки надо распространять.',
          );
          await acute.say_and_wait([
            'Вроде ',
            call_301,
            ', и председатель ',
            acute.couple_title,
            ', легко в этом утонуть.',
          ]);
        });
        break;
      case 2:
        buffer.push(async () => {
          await acute.say_and_wait(
            'Ара… солнышко сегодня такое приятное, как раз случай разом закрыть скопившуюся домашнюю работу.',
          );
          await acute.say_and_wait(
            'Стирка, одеяла просушить, ещё сушёную редьку сделать… мррр, дел на сегодня неожиданно много.',
          );
          await acute.say_and_wait([
            'Так что, ',
            callname,
            '; сегодня тебя не пущу меня изнасиловать, ясно?',
          ]);
          await acute.say_and_wait(
            'Ни в дупло во дворе, пока все тренируются, ни на крышу в обед, ни в переулок у станции, когда днём выходим — сегодня нельзя, ясно?',
          );
        });
        break;
      case 3:
        buffer.push(async () => {
          await acute.say_and_wait(
            'Сегодня я в ударе, так что вечером я тебя осчастливлю.',
          );
          await acute.say_and_wait([
            'Так что, ',
            callname,
            ', хорошенько вымой себя везде и жди меня.',
          ]);
          await era.printAndWait(
            'Улыбка как всегда, а отказаться от неё уже нельзя.',
          );
          await era.printAndWait([
            'Сегодня вечером ',
            you.get_colored_name(),
            ' кем станет…',
          ]);
        });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async office_gift(acute, callname) {
    const love = era.get('love:100');
    if (love >= 90) {
      await acute.say_and_wait(
        'Ай-яй-яй, это мне подарок? Не стоило так стараться~',
      );
      await acute.say_and_wait(['Кстати, ', callname, ', те противозачат…']);
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        ' голос вдруг стих.',
      ]);
      await acute.say_and_wait('Тот… взял?');
      await acute.say_and_wait('……какой ещё 『взял』?');
      await acute.say_and_wait('Мн…………');
      await era.printAndWait([
        acute.get_colored_name(),
        ' будто обиженно надула губы.',
      ]);
      await era.printAndWait([
        'Всегда спокойная, невозмутимая ',
        acute.get_colored_name(),
        ' только в такие минуты становится застенчивой, как сверстница- ',
        acute.teen_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'И шевелится злая мысль кого-нибудь подразнить — и пусть мишенью будет ',
        acute.sex,
        ' —',
      ]);
      await acute.say_and_wait('……………………');
      await era.printAndWait([
        'Под открытым небом со смущённой ',
        acute.get_colored_name(),
        ' провели весёлое время.',
      ]);
    } else if (love >= 75) {
      await acute.say_and_wait(
        'Ай-яй-яй, это мне подарок? Не стоило так стараться~',
      );
      await acute.say_and_wait([
        'Кстати, ',
        callname,
        ', средствами-то воспользовался?',
      ]);
      await acute.say_and_wait([
        'Молодой задор — это хорошо, но между тренером и подопечной ',
        acute.uma_sex_title,
        ' всё же стоит знать меру~',
      ]);
      await acute.say_and_wait('После выпуска уже по-настоящему, без дураков~');
      await acute.say_and_wait([
        'И тогда не забудь дать мне подержать ребёнка ',
        callname,
        ' ~',
      ]);
      await era.printAndWait([
        '……С спокойной и кроткой ',
        acute.get_colored_name(),
        ' поговорили о деторождении.',
      ]);
      await era.printAndWait('…………Щёки горят нестерпимо.');
    } else if (Math.random() > 0.5) {
      await acute.say_and_wait('Ай-яй-яй, это мне подарок? Даже неловко~');
      await acute.say_and_wait(['Садись-ка сюда, ', callname, '.']);
      await acute.say_and_wait(
        'Никуда не уходи, я принесу свежепросоленную сушёную редьку, потом вместе похрустим.',
      );
      await era.printAndWait([
        '……С ',
        acute.get_colored_name(),
        ' поели горьковатую, но звонко хрустящую сушёную редьку.',
      ]);
    } else {
      await acute.say_and_wait('Ай-яй-яй, это мне подарок? Даже неловко~');
      await acute.say_and_wait([
        'Кстати, Хаякава ',
        acute.sex,
        ' говорит, сегодня, похоже, будет дождь.',
      ]);
      await acute.say_and_wait([callname, ' зонт не взял, да?']);
      await acute.say_and_wait('У меня есть запасной~ бери и пользуйся.');
      await era.printAndWait([
        '…… ',
        acute.get_colored_name(),
        ' насильно всунула в руку зонт «Рай».',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async office_cook(acute, callname) {
    if (Math.random() > 0.5) {
      await era.printAndWait([
        'Под вечер у ',
        acute.get_colored_name(),
        ' спросил секрет вкусной 「сушёной редьки」 —',
      ]);
      await acute.say_and_wait(
        'Секрет засолки сушёной редьки? Мм… если секрет — то, конечно, хороший каменный чан…',
      );
      await era.printAndWait('………………');
      await era.printAndWait('Узнал немало про 「засол」.');
    } else {
      await era.printAndWait([
        'С ',
        acute.get_colored_name(),
        ' вместе готовить…',
      ]);
      await era.printAndWait(
        'Но словами вроде 「не утруждайся」 выпроводили с кухни.',
      );
      await acute.say_and_wait([
        'Не суетись, ',
        callname,
        '. Сиди себе в гостиной, еда скоро будет~? Подожди чуть-чуть~',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('В один миг перед глазами встала мать.');
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async office_game(acute) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait(
        'Игры… я, честно, не очень понимаю, как эту машину слушать —',
      );
      await era.printAndWait([
        'Переводя взгляд с экрана на пульт и обратно, ',
        acute.get_colored_name(),
        ' двумя торчком поставленными указательными тычет в лежащий на полу геймпад.',
      ]);
      await era.printAndWait('……Честно говоря, до странного мило.');
    } else {
      await acute.say_and_wait(
        'Приставка — а, я слышала от соседских детей на родине. На ней в танчики играют, да?',
      );
      await era.printAndWait('Пф — чуть не фыркнул в голос.');
      await era.printAndWait('Танчики… это сколько же лет тем детям?');
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async s_a_tree_hollow(acute) {
    await era.printAndWait([
      'За двором в дупле часто ',
      acute.uma_sex_title,
      ' перед скачкой кричат в дупло свои желания, чтобы сбросить напряжение.',
    ]);
    await era.printAndWait([
      'А вечно такая праздная на вид ',
      acute.get_colored_name(),
      ', кажется, больше любит сидеть в самом дупле.',
    ]);
    await acute.say_and_wait('Мм… как здесь тихо~');
    await era.printAndWait([
      acute.get_colored_name(),
      ' всё так же мягко говорит, а на лице будто что-то дрогнуло…',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async s_a_dating(acute, you) {
    await era.printAndWait([
      'Во дворе, где людно, выдержать взгляды других ',
      acute.uma_sex_title,
      ' и здесь же встречаться — нужна железная воля…',
    ]);
    await acute.say_and_wait('А… здесь встречаться? Я не против~');
    await era.printAndWait([
      acute.get_colored_name(),
      ' кажется, вовсе не смущают чужие взгляды ',
      acute.uma_sex_title,
      '…',
    ]);
    if (era.get('love:100') >= 90) {
      await era.printAndWait('………………');
      await era.printAndWait(
        'Во дворе, где людно, двое влюблённых обнимаются в углу —',
      );
      await era.printAndWait([
        'С ',
        acute.get_colored_name(),
        ' провели отличный полдень.',
      ]);
    } else {
      await era.printAndWait([
        'А шаг по-настоящему так и не сделал ',
        you.get_colored_name(),
        ' сам.',
      ]);
      await era.printAndWait([
        '— Поймал ожидающий взгляд ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Дальше — когда 「любви」 будет больше. (горькая усмешка)',
      );
      await era.printAndWait('………………');
      await era.printAndWait(
        'Кстати — чтобы шагнуть так во дворе, где людно, нужна ещё и стальная воля —',
      );
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async s_r_lunch(acute, you) {
    await era.printAndWait([
      'В обед с ',
      acute.get_colored_name(),
      ' на крыше ели бэнто.',
    ]);
    await era.printAndWait('Хруст-хруст-хруст —');
    if (Math.random() < 0.5) {
      await era.printAndWait('Как всегда мягкий и звонкий хруст —');
      await acute.say_and_wait('Хо-хо~ ничего, тут ещё много~');
      await era.printAndWait([
        'Глядя на улыбку ',
        acute.get_colored_name(),
        ', внутри разливается счастье.',
      ]);
    } else {
      await era.printAndWait('На вкус будто солонее, чем обычно —');
      await acute.say_and_wait([
        'В последнее время жарко, если много потеешь — соли в теле не хватает, ясно? Поэтому я подсолила побольше — ',
        you.get_colored_name(),
        ', нравится?',
      ]);
      await era.printAndWait('Ещё бы. Конечно, нравится.');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {number} jpy 钓到的鱼的价值
   */
  async o_r_fishing(acute, you, jpy) {
    await era.printAndWait([
      'С ',
      acute.get_colored_name(),
      ' договорились поехать на реку удить…',
    ]);
    if (Math.random() < 0.5) {
      await acute.say_and_wait('Ай-яй-яй, какая погода~');
      await era.printAndWait([
        'С удочкой в руках ',
        acute.get_colored_name(),
        ' ласково улыбается облакам и солнцу.',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' рядом разлилась лень, в которой хочется всё бросить.',
      ]);
      await era.printAndWait([
        '……То и дело кажется, что ',
        you.get_colored_name(),
        ' и ',
        acute.get_colored_name(),
        ' пришли не рыбу ловить, а загорать.',
      ]);
    } else {
      await era.printAndWait([
        '— И всё же ',
        acute.get_colored_name(),
        ' удочки не держит. В руках — леска с поплавком и крючком; насадив наживку, так и забросила в воду.',
      ]);
      await acute.say_and_wait(
        'Хей-шю… фу-ру~ так и ладно~ дальше только ждать, пока рыбки клюнут, — и всех сразу~',
      );
      await era.printAndWait('……Так разве клюнет?');
      if (jpy > 0) {
        await era.printAndWait('— Только подумал, поплавок уже булькает вниз.');
      }
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_r_walking(acute, callname) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(
        'Хиё-ё~ ветер пришёл, дождь пришёл, громовник в барабан бьёт.',
      );
      await era.printAndWait([
        'Настроение, кажется, самое что ни на есть хорошее: ',
        acute.get_colored_name(),
        ' вдоль реки завела песню.',
      ]);
      await era.printAndWait([
        '……И почему-то под это ',
        acute.get_colored_name(),
        ' напевание клонит в сон.',
      ]);
    } else {
      await acute.say_and_wait([
        callname,
        ', гулять у реки, конечно, изящно, но к самой воде лучше не подходи: упадёшь в канаву — беды не оберёшься.',
      ]);
      await era.printAndWait([
        'Гуляя вдоль берега, ',
        acute.get_colored_name(),
        ' редкостно строго читает нотацию.',
      ]);
      await era.printAndWait([
        '……А всё же ',
        acute.get_colored_name(),
        ' так рада.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_s_arcade(acute, you, callname) {
    await era.printAndWait([
      'С ',
      acute.get_colored_name(),
      ' вместе зашли в игровой зал…',
    ]);
    await acute.say_and_wait([
      'Ай-яй-яй~ ',
      callname,
      ', если можно, составишь мне компанию у боксёрского аппарата?',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      ' разминает правую руку, слегка наклоняется, всё внимание на аппарате; обычно кроткая ',
      acute.sex,
      ' сейчас — в глазах боевой жар.',
    ]);
    await era.printAndWait([
      '……Будто увидел другую сторону ',
      acute.get_colored_name(),
      '.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {PrintedSpan} call_301 奇锐骏对骏川缰绳/丰收时刻的称呼
   * @param {boolean} special_item 是否抽到斗魂注入鞭
   */
  async o_s_drawing(acute, you, callname, call_301, special_item) {
    await era.printAndWait([
      'С ',
      acute.get_colored_name(),
      ' вместе пошли на розыгрыш, что устроила торговая улица…',
    ]);
    await acute.say_and_wait('Вот бы выпала свежая хрустящая редька~');
    await era.printAndWait('Гур-гур-гур-гур…');
    await era.printAndWait('biu～');
    if (special_item) {
      await era.printAndWait(
        'Получен приз торговой улицы 【кнут впрыска боевого духа (для S)】!',
      );
      await era.printAndWait(
        'Эй-эй-эй-эй-эй! Кто сунул 18+ в призы всевозрастного розыгрыша на торговой улице?!',
      );
      await era.printAndWait(
        'Такое уж куда ни шло в автомат на улице для взрослых —',
      );
      await acute.say_and_wait('Ай-яй, какой статный девятизвенный кнут~');
      await era.printAndWait([
        'Кажется, не так поняла назначение? Приняв кнут впрыска боевого духа (для S), ',
        acute.get_colored_name(),
        ' вспыхнула глазами…',
      ]);
      await acute.say_and_wait([
        'Мм… ',
        callname,
        ' от тебя веет, будто с такими штуками ты на короткой ноге —',
      ]);
      era.printButton(
        `「Только не говори того, из-за чего на тебя положит глаз ${call_301.content}.」`,
        1,
      );
      await era.input();

      await acute.say_and_wait([
        'Ммм? Почему на меня положит глаз ',
        call_301,
        '?',
      ]);
      era.printButton('「А, это…」', 1);
      await era.input();
      await era.printAndWait('………………');
      await era.printAndWait([
        'Так, не объясняя, 「почему на тебя положит глаз ',
        call_301,
        ' 」, как-то смяли тему.',
      ]);
      await era.printAndWait([
        'Принятый из рук ',
        acute.get_colored_name(),
        ' кнут впрыска боевого духа (для S) пока засунули в угол склада тренировочной, где паутина.',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait([
        'А вот как ',
        acute.get_colored_name(),
        ' узнала правильное применение кнута впрыска боевого духа (для S) и 「блеснула во всей красе」 — история едкая, горячая и с персиковым жирным задом — это уже потом —',
      ]);
    } else {
      const buffer = [
        async () => {
          await era.printAndWait(
            'Получен приз торговой улицы 【салфетки из коробки】!',
          );
          await acute.say_and_wait([
            'Ай-яй-яй~ кажется, ',
            callname,
            ' вечером пригодятся~',
          ]);
          await you.say_and_wait('………………');
          await era.printAndWait('Не-не-не! Не пригодятся, ясно?!');
        },
        async () => {
          await era.printAndWait(
            'Получен приз торговой улицы 【обычные салфетки】!',
          );
          await acute.say_and_wait(
            'Обычные салфетки… можно под еду подстелить~',
          );
          await era.printAndWait([
            'Хоть и самый мелкий приз, ',
            acute.get_colored_name(),
            ' всё равно радостно приняла салфетки из рук продавца —',
          ]);
        },
        async () => {
          await era.printAndWait('Получен приз торговой улицы 【морковь】!');
          await acute.say_and_wait(
            'Ого? Так в розыгрыше и правда выпадает хрустящая редька~',
          );
          await era.printAndWait([
            acute.get_colored_name(),
            ' на лице вспыхнула радость —',
          ]);
        },
        async () => {
          await era.printAndWait(
            'Получен приз торговой улицы 【корзина моркови】!',
          );
          await acute.say_and_wait(
            'Одна, две, три… ай-яй, такой запас — на неделю сушёной редьки хватит.',
          );
          await acute.say_and_wait([
            'Как сушёная редька поспеет, ',
            callname,
            ', разнесём её всем в Трейсен?',
          ]);
          await era.printAndWait([
            acute.get_colored_name(),
            ' обернулась, и в кроткой улыбке вспыхнул буддийский нимб —',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} acute 奇锐骏 */
  async o_s_ktv(acute) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait(
        'Шаг за шагом грядёт~ император~ это вавилонский легион~',
      );
      await era.printAndWait(
        'Песня с налётом эпохи, вроде заглавной из какого-то токусацу?',
      );
      await era.printAndWait([
        'Закроешь глаза — и чудится, как на мотоцикле ',
        acute.get_colored_name(),
        ' кого-то преследует —',
      ]);
    } else {
      await acute.say_and_wait('Целюсь в~ тёмную тень~ храню мир трёх богинь~');
      await era.printAndWait(
        'Песня с мальчишеским сердцем, как раз под сушёную редьку.',
      );
      await era.printAndWait([
        'Закроешь глаза — будто видишь, как ',
        acute.get_colored_name(),
        ' стоит на перилах, руки в боки —',
      ]);
      await era.printAndWait('……Стой! Только не забирайся по-настоящему!');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_s_movie(acute, callname) {
    await era.printAndWait([
      'С ',
      acute.get_colored_name(),
      ' вместе пошли в кино…',
    ]);
    if (Math.random() < 0.5) {
      await era.printAndWait([
        'История о том, как рождённая калекой ',
        acute.uma_sex_title,
        ' в упорстве, падая и вставая, обрела милость трёх богинь и на многих скачках сотворила чудеса —',
      ]);
      await acute.say_and_wait([
        'Мм… какая горячая история, ',
        callname,
        ' — когда вернёмся, можно добавить тренировок?',
      ]);
      await era.printAndWait([
        'Кажется, зажгло кровь ',
        acute.get_colored_name(),
        '…',
      ]);
    } else {
      await era.printAndWait([
        'История о ',
        acute.uma_sex_title,
        ' за тридцать, которая, чтобы исполнить мечту молодости объехать мир вместе с покойным тренером-супругом, вместе с встреченной в пути маленькой кансайской ',
        acute.uma_sex_title,
        ' отправляется в кругосветный беговой вояж —',
      ]);
      await acute.say_and_wait(
        'Мм… какая романтичная история~ ай-яй-яй, если можно, я тоже хотела бы такое путешествие —',
      );
      await era.printAndWait([
        'После этих слов до конца сеанса то и дело ловишь взгляд ',
        acute.get_colored_name(),
        '…',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(acute, you, callname, dice) {
    await acute.say_and_wait('Арара… в святилище помолиться?');
    await era.printAndWait([
      'Накануне выходного ',
      acute.get_colored_name(),
      ' предложила вместе пойти в святилище помолиться.',
    ]);
    await acute.say_and_wait('Так… тогда в святилище~ без подготовки никак…');
    await era.printAndWait([
      'Как и думалось, старомодная ',
      acute.get_colored_name(),
      ' к таким вещам, как 「молитва」, и правда неравнодушна.',
    ]);
    await acute.say_and_wait('Только вот… в святилище надо с утра пораньше…');
    await acute.say_and_wait(
      'И заранее приготовить монеты к подношению и благовония…',
    );
    await acute.say_and_wait(
      'И угощение… ай-яй-яй, сегодня вечером надо засолю немного сушёной редьки…',
    );
    await acute.say_and_wait('……Не слишком ли увлеклась?');
    await acute.say_and_wait(
      'В святилище чем раньше, тем лучше: чем раньше — тем искреннее сердце. Так что завтра встану на два часа раньше и буду готовиться —',
    );
    await acute.say_and_wait([
      'А, ',
      callname,
      ' так рано не вставай, ладно? Готовиться — это уже я. Молодёжи надо подольше поспать~. Когда пора выходить, я тебя разбужу~',
    ]);
    await era.printAndWait([
      'И всё такое чувство, будто тебя держат за ',
      you.sex_code === 1 ? ' внука' : 'внучку',
      '…',
    ]);
    await era.printAndWait([
      'И ещё: ',
      acute.get_colored_name(),
      ' разве не молодёжь?',
    ]);
    if (dice < 0.5) {
      await acute.say_and_wait(
        'Ай-яй-яй, великая удача? Кажется, будет что-то хорошее~',
      );
      await era.printAndWait([
        'С жребием великой удачи в руке ',
        acute.get_colored_name(),
        ' ласково улыбается.',
      ]);
      await era.printAndWait(
        'И иначе быть не могло? Всё-таки специально встала на два часа раньше, чтобы собраться в святилище.',
      );
      await acute.say_and_wait('Небо любит трудолюбивых — вот оно и есть.');
      await acute.say_and_wait([
        'Что такое, ',
        callname,
        '? Ты какой-то довольный.',
      ]);
      await era.printAndWait('……Улыбку на лице заметили?');
    } else {
      await acute.say_and_wait(
        'Великая беда… похоже, в последнее время надо делать побольше добра и копить заслуги~',
      );
      await era.printAndWait([
        'С жребием великой беды в руке ',
        acute.get_colored_name(),
        ' как всегда спокойно говорит. Кажется, ',
        acute.sex,
        ' ничуть не дрогнула.',
      ]);
      await era.printAndWait('……А всё же внутри так противно.');
      await era.printAndWait(
        'Ведь специально на два часа раньше встал, чтобы собраться в святилище…',
      );
      await acute.say_and_wait([
        'Что такое, ',
        callname,
        '? Ты какой-то невесёлый?',
      ]);
      await era.printAndWait('……Досаду на лице заметили?');
    }
    await era.printAndWait('Ладно, смахнуть бы каким-нибудь отговоркой.');
    await era.printAndWait([
      'Как ни крути, нельзя, чтобы ',
      acute.get_colored_name(),
      ' увидела твою детскую сторону…',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_s_restaurant(acute, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        'С ',
        acute.get_colored_name(),
        ' вместе у станции отведали дымящийся жареный тофу…',
      ]);
      await acute.say_and_wait('Фу, фу… ам~ мм~ ммм❤️~');
      await era.printAndWait('Сдувая жар с тофу, жуёт маленькими глотками.');
      await era.printAndWait([
        'Пар медленно выходит изо рта ',
        acute.get_colored_name(),
        ', и язык с горлом чуть вибрируют вслед.',
      ]);
      await acute.say_and_wait('Гул~ мм… ха —');
      await era.printAndWait([
        'Сидя напротив ',
        acute.get_colored_name(),
        ', слышишь, как она из вежливости нарочно и осторожно прячет мелкий звук глотка…',
      ]);
      await acute.say_and_wait('…?');
      await era.printAndWait([
        'Ай, плохо: слишком засмотрелся на ',
        acute.get_colored_name(),
        ' — на кончик языка у губ и пар — и, кажется, ',
        acute.get_colored_name(),
        ' заметила…',
      ]);
      await acute.say_and_wait('…………');
      await era.printAndWait([
        acute.sex,
        ' Глянула в миску ',
        you.get_colored_name(),
        ', где тофу ещё не тронут, чуть нахмурилась, будто чуть недовольна.',
      ]);
      await era.printAndWait(
        'Но раз ест, голосом не скажешь. Приходится надуть щёки — маленький протест.',
      );
      await era.printAndWait([
        'Потом свободной от миски левой, будто прячась от чуть похабного взгляда ',
        you.get_colored_name(),
        ', заслоняет свои дымящиеся губы.',
      ]);
      await era.printAndWait([
        'И вот, чуть нахмурившись, ',
        acute.get_colored_name(),
        ' рукой закрыла ту половину лица, от которой идёт её собственный пар —',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait([
        acute.get_colored_name(),
        ', того и гляди, гений как раз в этом?',
      ]);
    } else {
      await era.printAndWait([
        acute.get_colored_name(),
        ' вместе у станции отведали уценённую сушёную редьку из пристанционного магазинчика…',
      ]);
      era.printButton('「Хрусь —」', 1);
      await era.input();
      await era.printAndWait(
        'Нм, на первый укус довольно хрустит; для магазинной сушёной редьки уже неплохо…',
      );
      era.printButton('「Хрусь-хрусь —」', 1);
      await era.input();
      await era.printAndWait([
        'Но распробуешь — и до той, что делает ',
        acute.get_colored_name(),
        ', всё равно далеко…',
      ]);
      await era.printAndWait(
        'И то, что от долгого лежания в ней мало влаги и она чуть бьёт по зубам,',
      );
      await era.printAndWait(
        'и эта соль — то ли нарочно ради срока годности, то ли чтобы взять тяжёлым вкусом толпы…',
      );
      await era.printAndWait('Хрусь-хрусь-хрусь —');
      await era.printAndWait(
        'Чем дольше жуёшь, тем шире соль растекается во рту,',
      );
      await era.printAndWait(
        'и и без того сухая редька в этой соли ещё и отбирает ту слюну, что успела выступить…',
      );
      await acute.say_and_wait([callname, ', вода вот, держи~']);
      await era.printAndWait([
        'Приняв из рук ',
        acute.get_colored_name(),
        ' тёплую воду в крышке-стакане термоса, ты от души и всласть её выпил.',
      ]);
      era.printButton('「Буль, буль —」', 1);
      await era.input();
      await era.printAndWait([
        'Ха… благодаря ',
        acute.get_colored_name(),
        ' спасён.',
      ]);
      await era.printAndWait(
        'Тьфу, чуть не клюнул на заговор магазина: уценка на сушёную редьку — а в нагрузку бутылочная водичка счастья!',
      );
      await era.printAndWait('Сушёная редька должна быть вот какой.');
      await era.printAndWait('Чуть солона, но во рту не сохнет в труху.');
      await era.printAndWait('Слюну будит и влагу у тела не крадёт.');
      await era.printAndWait(
        'Хрустит, солона и легко идёт; после тренировки, когда много пить ещё рано, как раз сушёной редькой в меру раздразнить слюну и снять жажду — вкусная, сытная и тренировке в помощь еда, вот чем она должна быть!',
      );
      await era.printAndWait(
        'А они из вкусной, сытной и полезной сушёной редьки сделали такой промышленный заговор… магазин, ты подлец —',
      );
      await acute.say_and_wait([
        'Слушай, ',
        callname,
        '. Как вернёмся, зайдёшь ко мне в комнату — сушёной редьки поесть?',
      ]);
      await era.printAndWait([
        'Как будто читала мысли ',
        you.get_colored_name(),
        '. Рядом с ',
        you.get_colored_name(),
        ' — ',
        acute.get_colored_name(),
        ' неспешным тоном вовремя вклинилась во внутренний монолог ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton('「Ха! Ещё бы?!」', 1);
      await era.input();
      await era.printAndWait([
        'С готовностью принял приглашение ',
        acute.get_colored_name(),
        ' и той же ночью в комнате ',
        acute.get_colored_name(),
        ' наелся до отвала.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   * @param {boolean} do_sex 是否性爱
   */
  async o_s_dating(acute, you, callname, do_sex) {
    await era.printAndWait([
      'В выходной с ',
      acute.get_colored_name(),
      ' договорились о свидании у станции —',
    ]);
    await acute.say_and_wait('Мм… в последнее время поясницу ломит~');
    await era.printAndWait([
      'Без всякого предисловия ',
      acute.get_colored_name(),
      ' вдруг сказала.',
    ]);
    if (do_sex) {
      await acute.say_and_wait([
        callname,
        ', сегодня вечером поможешь мне расслабиться?',
      ]);
      await era.printAndWait([
        'И тут же ',
        acute.get_colored_name(),
        ' посреди улицы без стеснения хлопнула ',
        you.get_colored_name(),
        ' по пояснице, и на лице проступила улыбка с изрядным намёком.',
      ]);
      await era.printAndWait('………………');
      if (era.get('item:斗魂注入鞭（S用）') > 0) {
        await acute.say_and_wait([
          'Слушай. ',
          callname,
          ', сегодня можно… достать 【то самое】?',
        ]);
        await era.printAndWait([
          'Розовые губы блестели прозрачным соком: эта ',
          acute.teen_sex_title,
          ' — зверь, и ',
          acute.sex,
          ' оскалила клыки.',
        ]);
        await era.printAndWait([
          'Поняв без слов, увёл ',
          acute.get_colored_name(),
          ' украдкой в безлюдный угол станции…',
        ]);
        await era.printAndWait(
          'Достал кнут впрыска боевого духа для дрессировки зверя —',
        );
        await acute.say_and_wait('…………');
        await acute.say_and_wait('!');
        await acute.say_and_wait('————');
        await acute.say_and_wait('❤️～');
      } else {
        await era.printAndWait('Не договорив, ты уже в объятиях.');
        await era.printAndWait([
          'Зверь — эта ',
          acute.teen_sex_title,
          ' — сжала так, что вырваться невозможно.',
        ]);
        await era.printAndWait(
          'Испокон в работе по дрессировке 「зверя」 кормление — дело крайне опасное.',
        );
        await era.printAndWait('Не насытишь — и кормилец сам станет добычей —');
        await acute.say_and_wait('❤️——————');
        await era.printAndWait(
          'Из глубоких глаз рассыпается персиковый блеск.',
        );
        await era.printAndWait([
          'Это зверь по имени ',
          acute.get_colored_actual_name(),
          ' подал знак 「есть」.',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('Нынче ночью, похоже, будет смертный поединок.');
      }
    } else {
      await era.printAndWait([
        'Предложил массаж — и ',
        acute.get_colored_name(),
        ' отказала…',
      ]);
      await acute.say_and_wait(
        'Мм… вместо этой лёгкой-лёгкой растирки хотелось бы лечение поострее —',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' как всегда говорит легко-легко, а взгляд будто уплыл к SM-лавке в углу станции.',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('Кажется, показалось?');
    }
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async o_s_shopping(acute, you, callname) {
    await era.printAndWait([
      'С ',
      acute.get_colored_name(),
      ' вместе прошлись по торговому у станции…',
    ]);
    await acute.say_and_wait('Сушёная редька~ сушёная редька~');
    await era.printAndWait([
      'Напевая лёгкий мотивчик, ',
      acute.get_colored_name(),
      ' стремительно режет уценённый ряд и с невероятной скоростью пихает в корзину только что помеченное скидкой.',
    ]);
    await era.printAndWait(
      'Не успеваешь выдохнуть 「это, кажется, пригодится на тренировке」 — корзина уже под завязку.',
    );
    era.drawLine();
    const buffer = [];
    buffer.push(
      async () => {
        await era.printAndWait('В корзине навалом уценённых продуктов.');
        await era.printAndWait(
          'Берёшь наугад — а на нём зелёный ярлык 「-60%」.',
        );
        await acute.say_and_wait([
          'А-ха-ха, даже морковь по -99%~ похоже, сегодня вечером ',
          callname,
          ' повезло с едой~',
        ]);
        await era.printAndWait(
          'Сказала — и ещё один зелёный ярлык нырнул в корзину…',
        );
      },
      async () => {
        await era.printAndWait('В корзине навалом тренировочной еды.');
        await era.printAndWait(
          'Берёшь наугад — а на нём крикливая реклама: 「дважды в день жги жир! за месяц — восемь кубиков пресса!」',
        );
        await era.printAndWait([
          '…В голове понемногу встаёт ',
          acute.get_colored_name(),
        ]);
        await acute.say_and_wait([
          ' Мм… и правда, ',
          callname,
          ', мышц бы тебе побольше~',
        ]);
        await era.printAndWait([
          '— Что ж это, так это ',
          you.get_colored_name(),
          ' покупает.',
        ]);
        await era.printAndWait(
          'Поспешно стёр из головы ту невыносимую картину и с облегчением выдохнул.',
        );
        await era.printAndWait('………………');
        await era.printAndWait([
          'У кассы успел раньше ',
          acute.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Всё-таки в корзине в основном для себя, как-то неловко просить ',
          acute.get_colored_name(),
          ' платить.',
        ]);
        await era.printAndWait(
          'Достал чёрный кошелёк от родных и левой прикрыл дыру, что неосторожно продрал раньше. Глядя в цифры на кассе, с сожалением пересчитывает в кошельке те немногие крупные купюры —',
        );
        await acute.say_and_wait([
          'С восемью кубиками ',
          callname,
          '… э-хе-хе~',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait(
          'Кажется, только что слышал какой-то невероятный текст.',
        );
        await era.printAndWait([
          'Оглянулся —',
          acute.get_colored_name(),
          ' всё так же нежно смотрит. Кроткая улыбка как всегда, только у угла губ почему-то след жидкости.',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('Кажется, показалось?');
      },
    );
    if (era.get('love:100') >= 75) {
      buffer.push(async () => {
        await era.printAndWait('Лук, свиная печень, яйца…');
        await era.printAndWait('Свиная печень, яйца, лук…');
        await era.printAndWait('Яйца, лук, свиная печень…');
        await era.printAndWait(
          'Лук за полцены, свежая свиная печень, прозрачный яичный белок…',
        );
        await era.printAndWait('……Почему всё — еда для 「почек」?');
        await era.printAndWait([
          'Ни секунды не медля, в ужасе смотришь на ',
          acute.get_colored_name(),
          '. И в ответ — ',
          acute.get_colored_name(),
          ' улыбка с намёком —',
        ]);
        await era.printAndWait('…………');
        await era.printAndWait('Похоже, эта ночь будет долгой —');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async possessive(acute, callname) {
    await acute.print_and_wait(['Снова пришли в дупло…']);
    await acute.print_and_wait(['Хочется оставить следы на ', callname, '.']);
    await acute.print_and_wait(['Не только поцелуй — и в других местах.']);
    await acute.print_and_wait([
      'Мочка, щека, подбородок, шея, грудь… везде хочется оставить мой след.',
    ]);
    await acute.print_and_wait([
      'Это и есть так называемая жадность обладания? Честно сказать, я не понимаю.',
    ]);
    await acute.print_and_wait([
      'Хочется ближе к губам ',
      callname,
      ', хочется, чтобы дыхание носа и губ скрестилось; сердце слева колотится, всё это невыносимо.',
    ]);
    await acute.print_and_wait(['Поцелуй влюблённых… и правда опасное дело.']);
    await acute.print_and_wait([
      'Если и вправду поцелуемся, и тело подсядет на ',
      callname,
      ' — тогда… какой я стану?',
    ]);
    await acute.print_and_wait([callname, '……Возьму ли ответственность?']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} tama 玉藻十字
   * @param {CharaTalk} you 玩家
   */
  async kiss(acute, tama, you) {
    tama.name = 'Некто из Кансая' + acute.uma_sex_title;
    await era.printAndWait([
      'Во дворе, где людно, выдержать взгляды других ',
      acute.uma_sex_title,
      ' и здесь же встречаться — нужна железная воля…',
    ]);
    await acute.say_and_wait('А… здесь встречаться? Я не против~');
    await era.printAndWait([
      acute.get_colored_name(),
      ' кажется, вовсе не смущают чужие взгляды ',
      acute.uma_sex_title,
      '…',
    ]);
    await era.printAndWait([
      '— Поймал ожидающий взгляд ',
      acute.get_colored_name(),
      '.',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait(
      'Во дворе, где людно, двое влюблённых тянут друг друга.',
    );
    await era.printAndWait(
      'Чужие взгляды уже нипочём; яростно слюна скрепляет договор взаимной любви.',
    );
    await acute.say_and_wait('……❤️');
    await era.printAndWait([
      'Маленькие руки обхватили голову ',
      you.get_colored_name(),
      ', розовый взгляд, днём и ночью, смотрит только на ',
      you.get_colored_name(),
      ' одного.',
    ]);
    await era.printAndWait([
      'А ',
      you.get_colored_name(),
      ', в ответ — самая жаркая любовь, самый страстный поцелуй: днём и ночью крепко обнявшись —',
    ]);
    await era.printAndWait('………………');
    await you.say_as_passer_by_and_wait(
      'Репост из дневника',
      'Долго они целовались?',
    );
    await you.say_as_passer_by_and_wait(
      'Пользователь «Рыжей лошадки»',
      'Не знаю… часа два, наверное?',
    );
    await tama.say_and_wait(
      'Эй, остолоп, небо уже чёрное, а вы всё чмокаетесь. Чего, во дворе гулянку открыли, да?',
    );
    await era.printAndWait('………………');
    await era.printAndWait('День сменяет ночь, весна — лето, осень — зиму.');
    await era.printAndWait(['С этой поры ', acute.sex, ' не расстанется.']);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
   */
  async boxing(acute, you, callname) {
    await era.printAndWait([
      'С ',
      acute.get_colored_name(),
      ' вместе зашли в игровой зал…',
    ]);
    await acute.say_and_wait([
      'Ай-яй-яй~ ',
      callname,
      ', если можно, составишь мне компанию у боксёрского аппарата?',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      ' разминает правую руку, слегка наклоняется, всё внимание на аппарате; обычно кроткая ',
      acute.sex,
      ' сейчас — в глазах боевой жар.',
    ]);
    await era.printAndWait([
      '……Сзади глядя на ',
      acute.get_colored_name(),
      ' — как от наклона вздымается крутая задница, — вдруг лезет в голову гадость.',
    ]);
    await era.printAndWait([
      'Тихо подбираешься к полностью сосредоточенной на аппарате ',
      acute.get_colored_name(),
      ', и пока ',
      acute.sex,
      ' целится кулаком и выпячивает крутую задницу, заносишь грешную правую —',
    ]);
    era.printButton('「Шлёп!」', 1);
    await era.input();
    await acute.say_and_wait('Ия~?!');
    await era.printAndWait('Дрожащий звук — и стыд, и какое-то возбуждение.');
    await era.printAndWait([
      'В обычный день и не представить, чтобы старомодная ',
      acute.get_colored_name(),
      ' выдала такой голосок, будто она совсем ещё ',
      acute.child_sex_title,
      '.',
    ]);
    await era.printAndWait(
      'Полнота и дрожь крутой задницы ещё свежи и так незабываемы. Сытость вперемешку с виной будит садистское, и в груди не унять дрожь.',
    );
    await era.printAndWait([
      'Но пока умиление ещё не ушло, ',
      acute.get_colored_name(),
      ' тот занесённый кулак всё же беззвучно выстрелил.',
    ]);
    await era.printAndWait('Бах!!!!!!!');
    await era.printAndWait('Грохот куда яростнее, чем шлепок по заднице.');
    await era.printAndWait(
      'Рычаг уже скрючен, жидкий экран вдребезги, с аппарата валит пахучий горелый белый дым.',
    );
    await era.printAndWait('……Арэ?');
    await era.printAndWait([
      acute.get_colored_name(),
      ' сила удара… и правда такая?',
    ]);
    await era.printAndWait(
      'Когда раньше заходили в зал, место в рейтинге было всего лишь средне-верхнее по академии Трейсен, уровень, до которого дотягивает и особо отличившийся человеческий спортсмен?',
    );
    await era.printAndWait([
      'Одним ударом разнести аппарат? Э? Неужели ',
      acute.get_colored_name(),
      ' всё это время скрывала силу…',
    ]);
    await acute.say_and_wait('Мн~ мн —!');
    await era.printAndWait([
      'Одной рукой на своей крутой заднице, ',
      acute.get_colored_name(),
      ' медленно обернулась. В глазах слёзы, а плача нет; и не поймёшь — то ли стыд, то ли омерзение, одно слово — не скажешь.',
    ]);
    await era.printAndWait([
      acute.sex,
      ' Надула губы; ',
      acute.sex,
      ' надула щёки пузырьком — так ',
      acute.sex,
      ' выглядит живее всего и совсем как сверстница, милая.',
    ]);
    await era.printAndWait(
      '— Если бы не та правая, что медленно поднимается в удар.',
    );
    era.drawLine();
    await era.printAndWait([
      'В общем, потом нотацией как-то выпросил прощение ',
      acute.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'Но с того дня на тренировках иногда кажется, что ',
      acute.get_colored_name(),
      ' бросает на ',
      you.get_colored_name(),
      ' какой-то странный взгляд.',
    ]);
    await era.printAndWait([
      '……Наверное, ',
      you.get_colored_name(),
      ' показалось?',
    ]);
  },
  basement_end: (() => {
    const title = 'Темница любви';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait('Дверь побега запечатана.');
      await era.printAndWait('Не замком — голой силой руки.');
      await era.printAndWait(
        'От ручки как от центра вся дверь крутится внутрь, кривится вихрем.',
      );
      await era.printAndWait(
        'Страшнее другое: дверь не сняли — хрупкая стыковка двери и стены цела. Вместе с дверью погнулась вся стена.',
      );
      await era.printAndWait(
        'Да…… та бетонная стена на арматуре целиком мягко поехала, как тесто!',
      );
      await era.printAndWait(
        'Просто ломая цемент, так не сделать. Такая кривизна только если, не руша схватившийся цемент, некой силой дать стене гибкость, а потом абсолютной мощью всю стену с арматурой и бетоном, как пружину, закрутить вихрем……',
      );
      await era.printAndWait(
        'И это даже не сжатие пружины — она стену не обнимала! Только ручку держала!',
      );
      await era.printAndWait(
        'Это чудо физики…… нет, чуда мало: здесь, в этой глухой комнате, физики уже нет!',
      );
      await acute.say_and_wait([
        'Слушай, ',
        callname,
        ', ты знаешь? Я сыта по горло всей этой этикетной шелухой.',
      ]);
      await era.printAndWait(
        'А ты всё ещё в панике и страхе. Перед чудесной дверью серая тень как всегда, спокойный голос ходит по глухой комнате.',
      );
      await acute.say_and_wait([
        'На самом деле, ',
        callname,
        ', я всё время хорошо терпела? Не хочу тебя ранить, так что я всё время ограничивала, сколько раз и как часто.',
      ]);
      await acute.say_and_wait([
        'Но даже так ',
        callname,
        ' всё ещё думаешь нежничать с другими детками……',
      ]);
      await acute.say_and_wait([
        'Раз ',
        callname,
        ' сказал(а) следовать настоящим чувствам сердца……',
      ]);
      await acute.say_and_wait('То я чуть всерьёз…… можно, да?');
      await era.printAndWait([
        'Сказав это, ',
        acute.get_colored_name(),
        ' из кармана достаёт сложенные, длиной с большой палец, разобранные маленькие зонтики.',
      ]);
      await era.printAndWait([
        'Потом её тонкие руки перед ',
        you.get_colored_name(),
        ': зонтик толщиной в палец так, большим и указательным, протянут перед ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('「Ззз-хр……」');
      await era.printAndWait(
        'Резиновая вещь — звук, какого резина давать не должна.',
      );
      await era.printAndWait([
        'Тот резиновый зонтик толщиной в палец у ',
        you.get_colored_name(),
        ' на глазах рвут надвое и бросают на пол крошками.',
      ]);
      await acute.say_and_wait(
        '……Сегодня, пока я не насыщусь, тебе отдыхать нельзя.',
      );
      await acute.say_and_wait([callname, { color: 'pink', content: '❤️～' }]);
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');
      await era.printAndWait('В тёмных глазах вспыхивают розовые кольца.');
      await era.printAndWait(
        'Скоро в глухой комнате повсюду потечёт белая кровь……',
      );
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = 'Раб денег';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait(
        'Деньги — отмычка на всё: потеряешь ключ — все двери перед тобой закроются.',
      );
      await era.printAndWait([
        'Как взрослый, ',
        you.get_colored_name(),
        ' это без сомнения знает.',
      ]);
      await era.printAndWait([
        'И всё же ',
        you.get_colored_name(),
        ' сделал(а) шаг, какого педагогу делать нельзя.',
      ]);
      await era.printAndWait(
        'А именно: не только все деньги вложил(а) в новую коллекционную карточную игру про девушек【Тёмный Трейсен】; ещё, чтобы взять номер 100, глобальный лимит 100 штук, UR зеркально-золотую редкую карту【Сероглазая художница】, на аукционе в азарте торгов в итоге купил(а) этот раритет за 10 млрд 320 млн.',
      );
      await era.printAndWait([
        'Но, без сомнения, ',
        you.get_colored_name(),
        ' этих 10 млрд 320 млн просто нет.',
      ]);
      await era.printAndWait(
        'Сначала казалось, обычная аукционная игра. Даже выиграешь — скажешь стороне, что денег нет, заплатишь небольшой штраф и перевыставят……',
      );
      await era.printAndWait([
        'Но сегодня утром, когда письмо адвоката и повестка суда пришли вместе, ',
        you.get_colored_name(),
        ' понял(а), насколько всё плохо.',
      ]);
      await era.printAndWait(
        'Не внесешь в срок остаток 10 млрд 300 млн — аукцион подаст в суд за「подрыв порядка торгов」, максимум от трёх лет.',
      );
      await era.printAndWait([
        'Суд ещё не факт, что признает вину. Но как педагогу уже сам факт суда — гражданская смерть. Поэтому, даже без таких денег, ',
        you.get_colored_name(),
        ' должен(на) извернуться и наскрести эти 10 млрд 320 млн.',
      ]);
      await era.printAndWait('Но как наскрести?');
      await era.printAndWait('В банке потолок займа уже выбран.');
      await era.printAndWait([
        'И вот когда ',
        you.get_colored_name(),
        ' в тупике, всегда насквозь видящая ',
        you.get_colored_name(),
        ' думы ',
        acute.get_colored_name(),
        ' тихо подошла.',
      ]);
      await acute.say_and_wait([
        callname,
        ', о чём тревога?…… Ара, денежный вопрос?',
      ]);
      await era.printAndWait([
        'Судебную бумагу о долге вот так нечаянно увидела стоящая позади ',
        you.get_colored_name(),
        ' — ',
        acute.get_colored_name(),
        '.',
      ]);
      await acute.say_and_wait(
        'Сумма не прописана ясно, но, кажется, огромная.',
      );
      await acute.say_and_wait(
        'Если деньги — у меня есть лишнее…… дать тебе ещё?',
      );
      await era.printAndWait([
        'Хоть и раньше ',
        acute.get_colored_name(),
        ' занимал(а), такой громады не было.',
      ]);
      await era.printAndWait([
        'Рассудок твердит: как педагог, нельзя больше со своей подопечной ',
        acute.uma_sex_title,
        ' связываться такими гнилыми деньгами.',
      ]);
      await era.printAndWait('Но этот долг……');
      await acute.say_and_wait([
        'Ничего, ',
        callname,
        '; как всегда, отдавай работой по дому～',
      ]);
      await era.printAndWait([
        'В тот миг на лице ',
        you.get_colored_name(),
        ' появилась лёгкая улыбка, от которой ',
        you.get_colored_name(),
        ' не откажет……',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');
      await era.printAndWait(
        'Деньги — отмычка на всё: добудешь ключ — все двери перед тобой откроются.',
      );
      await era.printAndWait([
        'Это ',
        acute.get_colored_name(),
        ' поняла только недавно.',
      ]);
      await era.printAndWait(
        'Кто б думал: с обычной крутки карта, вроде редкая, на аукционе ушла за 10 млрд 320 млн.',
      );
      await era.printAndWait([
        'И именно этим аукционом ',
        acute.get_colored_name(),
        ' взяла огромное богатство и закрыла долг ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Теперь ',
        acute.get_colored_name(),
        ' стала хозяином денег для ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'А по ',
        acute.get_colored_name(),
        ' таблице платы за дом ',
        you.get_colored_name(),
        ' за каждую работу ',
        acute.get_colored_name(),
        ' снимает с ',
        you.get_colored_name(),
        ' часть долга.',
      ]);
      await era.printAndWait(
        'К примеру готовить, мыть посуду, вместе упражняться, гулять за руки.',
      );
      await era.printAndWait([
        'Ещё сказки, погладить по голове, массаж спины, прикусить язык…… конечно, ',
        acute.get_colored_name(),
        ' сама идёт делать это ',
        you.get_colored_name(),
        '.',
      ]);
      // 二人不同时是男性
      if (acute.sex_code * you.sex_code !== 1) {
        await era.printAndWait(
          'И надбавки вроде поцелуя, ласки, родов, воспитания, второго, третьего ребёнка…… этого пока нет на таблице платы за дом открытым текстом, но недолго осталось, впишут.',
        );
      }
      await era.printAndWait([
        'По этой таблице, если ',
        you.get_colored_name(),
        ' сможет десять раз в день, то ещё через тридцать лет ',
        you.get_colored_name(),
        ' выплатит весь долг.',
      ]);
      await era.printAndWait([
        'До тех пор ',
        you.get_colored_name(),
        ' тоже должен(на) учить кулачное искусство, чтобы после отставки ',
        acute.get_colored_name(),
        ' вела ',
        you.get_colored_name(),
        ' в родные края и отец признал.',
      ]);
      await era.printAndWait([
        'Для ',
        acute.get_colored_name(),
        ' это, пожалуй, начало хорошего конца. А для ',
        you.get_colored_name(),
        ', когда долг такой огромный, конец, может, уже был записан.',
      ]);
      await era.printAndWait([
        'Пойманный(ая) денежной связью, ',
        you.get_colored_name(),
        ' встретил(а) конец……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
