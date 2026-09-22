/**
 * @file 爱丽速子 - 日常
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');

const { degeneration_to_evil } = require('#/i18n/ru-RU/snippets');

module.exports = {
  /**
   * 从地下室逃脱后早安和选中互动的通用对话
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  select_when_escape(tachyon, callname) {
    tachyon.say(['Поразительно, право, ', callname, '']);
    tachyon.say([
      'Ведь в подвале твои глаза почти погасли… а теперь снова светятся тем светом, что затягивает в себя.',
    ]);
    tachyon.say([
      '«Если в моих глазах и есть что-то особенное, то это отражённый свет Тахион»? …Хе-хе, ',
      callname,
      ', редко ты бываешь так остёр на язык…',
    ]);
    tachyon.say([
      'Что ж… если мои глаза снова затянет пылью, будь добр, сотри её ещё раз.',
    ]);
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  good_morning(tachyon) {
    tachyon.say(
      'А, пришёл. Тогда заодно вынеси те три мешка мусора у входа… Помочь с опытом? Понадобишься — позову.',
    );
    era.print([tachyon.get_colored_name(), ' похоже, занята опытом.']);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async office_study(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          'А, ',
          callname,
          ', не поможешь мне разобрать вот эту главу?',
        ]);
        await tachyon.say_and_wait(
          'Что значит «не думал, что и Тахион чего-то не знает»? Лестно, конечно, но ты перебарщиваешь: я прекрасно сознаю, как ничтожно то, что я знаю.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          'А, ',
          callname,
          ', не научишь меня вот этому?',
        ]);
        await tachyon.say_and_wait(
          'Ага, именно, вот эта глава — научная этика. Почему-то никак не запоминается, странно…',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          'Учиться ради экзамена — разве такие знания и правда на что-то годятся?',
        );
        await tachyon.say_and_wait([
          'Ты ведь понимаешь, о чём я, ',
          callname,
          '.',
        ]);
        await tachyon.say_and_wait(
          'То, что в жизни совсем не пригодится, учить — впустую.',
        );
        await tachyon.say_and_wait(
          'Так что этика с моралью, где сплошь замшелые старые догмы, — их можно и не учить, верно?',
        );
        await tachyon.say_and_wait('…Нельзя?');
      },
      async () => {
        await tachyon.say_and_wait([
          'География? Нет, ',
          callname,
          '… с чего ты взял, что мне нужны занятия даже по такому простому предмету.',
        ]);
        await tachyon.say_and_wait(
          'Не веришь — проверь: столица Швейцарии Берн, официальный язык Бразилии испанский, США выросли из тринадцати британских колоний… Вот видишь, я всё ответила.',
        );
        await tachyon.say_and_wait(
          'Где юг? Ха, глупый вопрос: разумеется, под землёй.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          callname,
          ', насчёт этого сочинения я решительно не понимаю, где именно написала не так.',
        ]);
        await tachyon.say_and_wait(
          'В задании ведь спрашивали, почему занавески синие?',
        );
        await tachyon.say_and_wait(
          'Вот я и написала двадцать тысяч знаков разбора — про природу цвета и про то, как человек получает сведения через колбочки. Что тут не так?',
        );
        await tachyon.say_and_wait(
          '…Вот оно что, знаков вышло больше нормы. В следующий раз постараюсь уложиться в две тысячи.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async office_prepare(tachyon, callname) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        'Готовиться? Готовятся только слабые, ',
        callname,
        ', ты видел, чтобы лев тренировался?',
      ]);
    } else {
      await tachyon.say_and_wait(
        'Э, и зачем готовиться перед забегом? Забег ведь как экзамен: он мерит то, что накоплено изо дня в день…',
      );
      await tachyon.say_and_wait(
        'Или ты из тех, кто хватается за учебник накануне и молится, чтобы не завалить?',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} call_9 爱丽速子对大和赤骥的称呼
   * @param {PrintedSpan} call_25 爱丽速子对大和赤骥的称呼
   * @param {PrintedSpan} y_call_s 玩家对青云天空的称呼
   * @param {number} relation 爱丽速子对玩家的好感度
   * @param {number} love 爱丽速子对玩家的爱慕
   * @param {number} talk_times 本周的聊天次数
   * @param {number} cook_times 给爱丽速子做饭的次数
   */
  async talk(
    tachyon,
    coffee,
    you,
    callname,
    call_9,
    y_call_s,
    call_25,
    relation,
    love,
    talk_times,
    cook_times,
  ) {
    const buffer = [];
    if (relation < 75) {
      if (talk_times >= 10) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            '…',
            callname,
            ', ты дописал сегодняшний отчёт по опыту?',
          ]);
          await tachyon.say_and_wait(
            'Есть время болтать — сходи сперва доделай, что положено',
          );
        });
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              'Держи, сегодняшнее снадобье… «Странный вкус»? Ты, кажется, забыл: ты всего лишь подопытное животное. С каких пор подопытному животному привередничать во вкусе лекарства?',
            ),
          async () => {
            await tachyon.say_and_wait([
              'Предел… ',
              tachyon.uma_sex_title,
              '… ноги… нет, всё-таки не выходит… ',
              callname,
              '? Ты давно тут стоишь?',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' о чём-то думает.',
            ]);
          },
          () =>
            tachyon.say_and_wait([
              coffee.get_colored_name(),
              '? Мм, ',
              tachyon.sex,
              ' — весьма любопытный объект наблюдения, и если вдруг… нет, ничего, забудь, что я сказала.',
            ]),
          async () => {
            await tachyon.say_and_wait(
              'Одежда…? А, я, кажется, три дня не мылась…',
            );
            await tachyon.say_and_wait(
              'Тебе-то что до этого? Есть время тратить попусту — потрать его на опыт…',
            );
            await tachyon.say_and_wait(
              'Довольно. Ты всего лишь свинка, и что я делаю — тебя не касается.',
            );
          },
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' видит, как ',
              tachyon.get_colored_name(),
              ' взбивает блендером сегодняшний обед.',
            ]);
            await tachyon.say_and_wait([
              'Еда? Незачем. Что человеку, что ',
              tachyon.uma_sex_title,
              ' — довольно восполнить самые базовые питательные значения, а гнаться сверх того за вкусом — пустая трата сил.',
            ]);
          },
          () =>
            tachyon.say_and_wait(
              'Ты всего-навсего свинка. Старайся помогать мне с опытом и заодно мне угождать — тогда, может быть, я смилуюсь, когда ты перестанешь быть полезен.',
            ),
          () =>
            tachyon.say_and_wait(
              'Есть что сказать — говори быстрее, не трать моё опытное время.',
            ),
          async () => {
            await tachyon.say_and_wait('Фух…');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' вздыхает; настроение у неё, похоже, скверное — лучше не подходить, пусть ',
              tachyon.sex,
              ' побудет одна…',
            ]);
          },
          async () => {
            await tachyon.say_and_wait('Хм-хм～～ хм-хм～～');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' в прекрасном настроении, но, увидев, что ',
              tachyon.sex,
              ' держит склянку с опасным тёмно-зелёным свечением, ',
              you.get_colored_name(),
              ' решает не мешать — пусть ',
              tachyon.sex,
              ' радуется дальше.',
            ]);
          },
        );
      }
    } else if (relation < 150) {
      if (talk_times >= 10) {
        if (cook_times < 5) {
          await tachyon.say_and_wait([
            callname,
            ', если тебе нечем заняться — займись-ка своей стряпнёй, авось поскорее сделаешь что-нибудь съедобное',
          ]);
        } else {
          await tachyon.say_and_wait([
            callname,
            ', если и правда нечего делать — перемой всю посуду для опытов, или постирай мой халат, или вынеси мусор. Разве мало дел, которые тебе по силам? Хватит тут стоять столбом',
          ]);
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              ', сегодняшнее снадобье… Хочешь сбежать? Хе-хе, с чего ты взял, что тебе под силу уйти, когда держит ',
              tachyon.uma_sex_title,
              '?',
            ]),
          async () => {
            await tachyon.say_and_wait([
              tachyon.uma_sex_title,
              ' и её предел… спурт… эволюция… выживание… проект дополнения человека… прогнившее общество… искупление… перерождение… вырваться из этой запертой данности…',
            ]);
            await tachyon.say_and_wait('А, я поняла: вся истина — в Египте.');
            await era.printAndWait([
              '… ',
              tachyon.get_colored_name(),
              ' вдруг говорит что-то странное — лучше не мешать, пусть ',
              tachyon.sex,
              ' договорит сама.',
            ]);
          },
          async () => {
            await tachyon.say_and_wait(
              'А… вовремя. Постирай мой белый халат, я его на днях в опыте перепачкала…',
            );
            await tachyon.say_and_wait(
              'Почему не отдала сразу? Так забыла же. И вообще, не заметить этого сразу — твоя недоработка как свинки, разве нет?',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              'Еда?.. Мнения я не поменяла: еда существует, чтобы восполнять питание, и никакой ценности сверх или ниже этого у неё нет…',
            );
            await tachyon.say_and_wait(
              'Хотя… да, в последнее время я и правда стала ждать этого часа…',
            );
            await tachyon.say_and_wait(
              'Нет, не выдумывай лишнего. Просто чтобы ты как следует знал своё место. Твою вину за то унижение так просто не искупить. Вот если бы ты согласился каждый день пробовать мои снадобья — тогда можно было бы и подумать…',
            );
            await you.say_and_wait('Так это же и так каждый день?');
            await tachyon.say_and_wait(
              'И правда, вроде бы… Погоди, каждый день… нет, ничего, забудь, что я сказала. Сейчас же, немедленно, сию секунду.',
            );
          },
          () =>
            tachyon.say_and_wait(
              'Готовишь ты в последнее время… сносно. Хотя можно бы и послаще… нет, ничего',
            ),
          async () => {
            await tachyon.say_and_wait([
              'А, ',
              call_9,
              '… «Огромное спасибо за прошлое печенье и напиток»?',
            ]);
            await tachyon.say_and_wait(
              'Пустяки. Понравилось — у меня ещё есть, приходи ещё…',
            );
            await tachyon.say_and_wait(
              'Что у тебя за лицо? Я всё-таки не стала бы подсовывать такое милому кохаю',
            );
          },
          async () => {
            await tachyon.say_and_wait('Хм-хм～～ хм-хм-хм～～');
            await tachyon.say_and_wait(
              'Десять свинок вышли гулять～ в залив упала — стало девять～',
            );
            await tachyon.say_and_wait(
              'В вулкан свалилась — стало восемь～ в пещере заблудилась — семь～',
            );
            await tachyon.say_and_wait(
              'Волной накрыло — стало шесть～ орёл унёс — осталось пять～',
            );
            await tachyon.say_and_wait(
              'Объелась насмерть — стало четыре～ на пик полезла — стало три～',
            );
            await tachyon.say_and_wait(
              'Турбо рвануло — стало две～ от кофе лопнула — одна～',
            );
            await tachyon.say_and_wait(
              'Свинка одна пищит пи-пи-пи～ снадобье выпила — бабах～～',
            );
            await era.printAndWait([
              you.get_colored_name(),
              ' слышит, как ',
              tachyon.get_colored_name(),
              ' мурлычет какую-то странную песенку… слов не разобрать, но ты чувствуешь, что сейчас лучше держаться подальше — пусть ',
              tachyon.sex,
              ' поёт себе.',
            ]);
          },
        );
      }
    } else if (relation > 225 && love < 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            'Ой, ',
            callname,
            ', что это ты вдруг пришёл поболтать?',
          ]);
          await tachyon.say_and_wait('Хе-хе, просто накатило?');
          await tachyon.say_and_wait(
            'А какая ещё может быть цель? Нет, ничего, просто я считаю, что любопытство к вещам — это хорошо',
          );
          await tachyon.say_and_wait([
            'И изыскания на устный лад — тоже, правда ведь, ты, там, по ту сторону экрана, ',
            callname,
            '?',
          ]);
          await tachyon.say_and_wait('О чём это я? Хе-хе, кто знает');
        },
        async () => {
          await tachyon.say_and_wait(['Ай-ай, ', callname, ', осторожно!']);
          await tachyon.say_and_wait(
            'Фух, это ты виноват — заговорил внезапно, чуть снадобье не разлила',
          );
          await tachyon.say_and_wait(
            'Какое снадобье? Хе-хе, помнишь, я как-то собирала твою ДНК?',
          );
          await tachyon.say_and_wait(
            'Это средство, от запаха которого всякий безумно в тебя влюбится… М? Уже жалеешь, что не разлилось? …Похабник',
          );
          await tachyon.say_and_wait(
            'Шучу. На самом деле это адресный яд на основе ДНК того человека…',
          );
          await tachyon.say_and_wait(
            'Достаточно вдохнуть пар — и в носовых ходах пойдут изменения, а там и раковые клетки…',
          );
          await tachyon.say_and_wait(
            'Эй-эй, ну зачем так пугаться. Ха-ха, главное, что не разлилось',
          );
          await tachyon.say_and_wait(
            'М? Так которое из двух правда… а это уж как тебе угодно думать～～',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '… сегодняшняя одежда…']);
          await tachyon.say_and_wait(
            'И вот ещё, я подумала: стирку одежды ещё ладно, но бельё — это, пожалуй, всё-таки чересчур',
          );
          await tachyon.say_and_wait(
            '…Нет, говорю же, дело не в запахе. И вообще ничем оно не пахнет!',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            'К нынешнему дню я, кажется, окончательно привыкла к твоим бэнто',
          );
          await tachyon.say_and_wait(
            'Хе-хе, теперь, если однажды твоего бэнто не будет, мне станет не по себе',
          );
          await tachyon.say_and_wait(
            'Чтобы такая жизнь… продолжалась и дальше…',
          );
          await tachyon.say_and_wait(
            'Хе-хе, для исследователя «продолжаться» — слово нехорошее',
          );
          await tachyon.say_and_wait(
            'Кто думает только о том, чтобы всё продолжалось, прорыва не добьётся…',
          );
          await tachyon.say_and_wait('Верно… но всё же…');
          await tachyon.say_and_wait(
            'Почему-то мне вдруг кажется, что и такая жизнь, если она продолжится, — тоже неплохо…',
          );
          await tachyon.say_and_wait('Почему же…');
        },
      );
    } else if (relation > 375 && love < 50) {
      buffer.push(async () => {
        await tachyon.say_and_wait(['О, пришёл, ', callname]);
        await tachyon.say_and_wait('Сегодняшний опыт… М? Что такое');
        await tachyon.say_and_wait(
          'Слишком близко подошла? Разве? По-моему, в самый раз',
        );
        await tachyon.say_and_wait('Или ты застеснялся?');
      });
    } else if (talk_times >= 10) {
      buffer.push(() =>
        tachyon.say_and_wait([
          callname,
          ', я не против поболтать с тобой подольше, но у тебя ведь есть и другие дела?',
        ]),
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            callname,
            '! Сегодняшнее снадобье: выберешь вон ту зелёную склянку справа или красную слева?',
          ]);
          await tachyon.say_and_wait(
            'Ни ту, ни другую? Так и знала — конечно же, третий выбор, радужная!',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '… завтрашнее бэнто']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' пробует сказать ',
            tachyon.get_colored_name(),
            ', что завтра выходной',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'Э… ',
            callname,
            ', даже в выходной человеку надо есть',
          ]);
          await era.printAndWait([
            tachyon.sex,
            ' смотрит с тревогой на ',
            you.get_colored_name(),
          ]);
          await you.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' вдруг понимает: тут что ни говори — бесполезно, остаётся только согласиться, раз ',
            tachyon.sex,
            ' просит, и сделать бэнто',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '～～ и сегодняшнюю одежду тоже на тебе',
          ]);
          await tachyon.say_and_wait(
            'Ха? Сама постирать? Ты думаешь, моё время ветром надуло?',
          );
          await tachyon.say_and_wait(
            'И потом, это же тебе только в радость～～',
          );
          await tachyon.say_and_wait('Это ведь бельё, которое я носила～～');
          await tachyon.say_and_wait('Воняет!? Эй! Это уже просто хамство!');
        },
        async () => {
          await tachyon.say_and_wait(
            'Ха? Если совсем не ходить на занятия, будут ли проблемы с оценками?',
          );
          await tachyon.say_and_wait([
            callname,
            ', знаешь ли, натаскивание на экзамены нужно, чтобы из посредственности сделать способного. Мне, рождённой одарённой, такое, разумеется, ни к чему',
          ]);
          await tachyon.say_and_wait([
            '«Значит, и на экзамен можно не ходить?» Ты о чём вообще, ',
            callname,
            ', экзамен же завтра… Сегодня!?',
          ]);
        },
        async () => {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' вдруг, против обыкновения, молча приваливается к тебе',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, ', что-то случилось?']);
          era.println();
          await you.say_and_wait('Ничего');
          await era.printAndWait([
            'После того как ',
            you.get_colored_name(),
            ' ответил, ',
            tachyon.sex,
            ' так и остаётся прислонённой к ',
            you.get_colored_name(),
            ', не отходя',
          ]);
          await era.printAndWait(
            'Между ними ни слова; так, в молчании, проходит какое-то время',
          );
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '? Как раз вовремя — скорее перепиши мне вот это на особую негорючую бумагу!',
          ]);
          await tachyon.say_and_wait([
            call_25,
            ' вот ведь! Один раз всего побывала в опыте — и вот ',
            tachyon.sex,
            ' уже грозится сжечь все мои материалы!',
          ]);
          await tachyon.say_and_wait([
            'Хорошо, я уговорила — пусть ',
            tachyon.sex,
            ' жжёт не раньше трёх часов дня, а до тех пор надо срочно всё переписать!',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' второпях усажен за стол: ',
            tachyon.get_colored_name(),
            ' погнала его переписывать',
          ]);
          await era.printAndWait([
            'Но у ',
            you.get_colored_name(),
            ' внутри всплывает сомнение: разве, собираясь что-то сжечь, обычно предупреждают заранее…?',
          ]);
          era.println();
          await era.printAndWait(
            'И точно: после трёх часов дня материалы так и не загорелись, в лаборатории было тихо, как всегда, ',
          );
          await era.printAndWait([
            'а пострадали только те, кто полдня переписывал целую комнату материалов, — ',
            you.get_colored_name(),
            ' и ',
            tachyon.get_colored_name(),
            ', точнее, их руки',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            call_9,
            ' — а ведь он довольно мил, правда?',
          ]);
          await tachyon.say_and_wait([
            'Не знаю почему, но когда ',
            tachyon.sex,
            ' рядом, всякий раз поднимается что-то вроде отцовского чувства',
          ]);
          if (tachyon.sex_code - 1) {
            era.println();
            await you.say_and_wait('Разве не материнское?');
          }
          era.println();
          if (era.get('cflag:0:种族') > 0) {
            await tachyon.say_and_wait([
              'Ты ведь уже и сам почти ',
              you.uma_sex_title,
              ' — и до сих пор не понимаешь? ',
              callname,
              ' до чего же туго соображает',
            ]);
            era.println();
            await you.say_and_wait('…Не понимаю, о чём ты');
          } else {
            await tachyon.say_and_wait([
              'Да нет… это чувство трудно объяснить. Вот станешь ',
              tachyon.uma_sex_title,
              ' — тогда, наверное, и поймёшь',
            ]);
            era.println();
            await you.say_and_wait([
              'Не говори так, будто я однажды непременно стану ',
              tachyon.uma_sex_title,
              '!?',
            ]);
          }
        },
        async () => {
          await tachyon.say_and_wait('sky-кун и правда славный…');
          era.println();
          await you.say_and_wait(['М? Так Тахион и ', y_call_s, ' знакомы?']);
          era.println();
          await tachyon.say_and_wait(
            'Нет… тот sky-кун, о котором я, — наверное, не тот, о котором ты',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' склоняет голову набок и смотрит на ',
            tachyon.get_colored_name(),
            ': разве в академии есть ещё какой-то sky?',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '…Нет, ладно, ',
            callname,
            ', считай, я ничего не говорила',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * 聊天 - 低干劲膝枕
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async talk_hizamakura(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, ', я устала, дай прилечь']);
    era.printButton('Согласиться', 1);
    era.printButton('Отказать', 2);
    await era.input();
    await era.printAndWait([
      'Не успевает ',
      you.get_colored_name(),
      ' про себя выбрать, как ',
      tachyon.get_colored_name(),
      ' уже лежит у ',
      you.get_colored_name(),
      ' на коленях',
    ]);
    era.printButton('「Эй, Тахион」', 1);
    await era.input();
    await tachyon.say_and_wait('ZZZ');
    era.println();
    await era.printAndWait('Быстро же!?');
    await era.printAndWait([
      'Чтобы не разбудить — пусть ',
      tachyon.sex,
      ' спит, — ',
      you.get_colored_name(),
      ' покорно застывает в прежней позе',
    ]);
    await era.printAndWait([
      'Когда ',
      tachyon.sex,
      ' проснётся, всё-таки надо будет поговорить: ладно бы просто хлопоты, но так запросто укладываться на колени к другому полу — это уже никакого чувства опасности',
    ]);
    era.println();
    await tachyon.say_and_wait('М-м-м…');
    era.println();
    await era.printAndWait([
      'Спит она, похоже, беспокойно: ',
      tachyon.sex,
      ' переворачивается, а у ',
      you.get_colored_name(),
      ' вся заготовленная выволочка разом обращается в ничто, стоит ему увидеть, как ',
      tachyon.sex,
      ' выглядит вблизи',
    ]);
    await era.printAndWait([
      tachyon.sex,
      ' — тёмные круги под глазами, усталость, от которой валишься с ног, — всё это снова и снова говорит, что ',
      tachyon.sex,
      ' спит плохо',
    ]);
    await era.printAndWait([
      'Если подумать, в последнее время ',
      tachyon.sex,
      ' из-за тупика в исследовании никак не может толком уснуть',
    ]);
    await era.printAndWait([
      'Радует одно: когда лежит у ',
      you.get_colored_name(),
      ' на коленях, ',
      tachyon.sex,
      ' хмуриться перестаёт',
    ]);
    await era.printAndWait([
      '…Если так ',
      tachyon.sex,
      ' спит получше, то изредка можно и потерпеть',
    ]);
  },
  /**
   * 聊天 - 春季天皇赏后
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
   */
  async talk_tenn_spr(tachyon, you, tenn_spr) {
    await era.printAndWait([
      you.get_colored_name(),
      ' хочет поговорить с ',
      tachyon.get_colored_name(),
      ' про ',
      tenn_spr,
      ', но ',
      tachyon.sex,
      ' тут же убегает и пропадает из виду',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} cook_times 做饭次数
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async office_cook(tachyon, coffee, you, callname, cook_times, plan_b) {
    if (era.get('relation:32:0') <= 150 && cook_times === 0) {
      await tachyon.say_and_wait(
        'Приготовить мне поесть? От несъедобного я отказываюсь',
      );
      await era.printAndWait(
        'Ну и привереда… похоже, надо ещё подтянуть стряпню, прежде чем предлагать',
      );
    } else {
      const buffer = [];
      if (!plan_b) {
        buffer.push(async () => {
          await tachyon.say_and_wait(['Постарайся, ', callname, '～～']);
          await tachyon.say_and_wait(
            'М? «Готовить вместе» — это ведь значит, что готовишь ты, а я указываю?',
          );
        });
        if (era.get('relation:32:0') > 375) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                callname,
                '! А я сегодня сама пожарила омлет! Ешь скорее!',
              ]);
              await you.say_and_wait('……');
              await era.printAndWait([
                you.get_colored_name(),
                ' смотрит на то, что перед ним: подгорелое, яйцо целиком снаружи и ничем не завёрнуто — это скорее жареная лепёшка с яйцом, чем омлет…',
              ]);
              await era.printAndWait('Мм… по крайней мере на вкус съедобно');
            },
            async () => {
              await tachyon.say_and_wait([
                '…',
                callname,
                ', ты же знаешь: в академии из соображений безопасности готовить можно только на индукционной плите и тому подобном, ',
              ]);
              await tachyon.say_and_wait(
                'но… с индукционной у меня не очень, так что… это не моя беда, это беда неудобной плиты. Будь газовая — ничего подобного бы не вышло…',
              );
              await era.printAndWait([
                you.get_colored_name(),
                ' смотрит на совершенно обугленное яйцо.',
              ]);
              await era.printAndWait(
                '…Горчит и солоновато, но с грехом пополам съедобно.',
              );
            },
            async () => {
              await tachyon.say_and_wait(
                'Если подумать, готовить в комнате тренера вообще занятие несуразное',
              );
              await era.printAndWait([
                'Договорились, что сегодня бэнто делает ',
                tachyon.sex,
                ', — и вот ',
                tachyon.get_colored_name(),
                ' достаёт две коробки навынос.',
              ]);
              await era.printAndWait(
                '…Съедобно наверняка, но от изначального замысла это уже далеко.',
              );
            },
          );
        }
      } else {
        buffer.push(
          async () => {
            await era.printAndWait([
              'Изначально ',
              you.get_colored_name(),
              ' и ',
              tachyon.get_colored_name(),
              ' условились делать бэнто по очереди, ',
            ]);
            await era.printAndWait([
              'но в последнее время у ',
              coffee.get_colored_name(),
              ' прибавилось тренировок, и у ',
              you.get_colored_name(),
              ' почти не остаётся времени, чтобы остановиться и приготовить, ',
            ]);
            await era.printAndWait([
              'поэтому в последнее время бэнто почти всегда делает ',
              tachyon.get_colored_name(),
              ', а ',
              you.get_colored_name(),
              ' отвечает за то, чтобы съесть, и заодно за едой обменивается новостями — ',
              tachyon.sex,
              ' рассказывает своё.',
            ]);
            era.printButton('「Как вкусно!」', 1);
            await era.input();
            await tachyon.say_and_wait('Хе-хе, недурно, правда?');
            await era.printAndWait([
              'В отличие от ',
              you.get_colored_name(),
              ' с его удивлением, ',
              tachyon.get_colored_name(),
              ' остаётся всё такой же невозмутимой.',
            ]);
            await tachyon.say_and_wait('Всё равно других дел не осталось');
            await era.printAndWait([
              'Говорила ли это ',
              tachyon.sex,
              ' с грустью в голосе?',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' этого не знает.',
            ]);
          },
          () =>
            era.printAndWait([
              tachyon.get_colored_name(),
              ' как ни в чём не бывало съедает бэнто, которое сделал ',
              you.get_colored_name(),
              ', и возвращается к работе над снадобьем, которое раскроет потенциал ',
              coffee.get_colored_name(),
              '.',
            ]),
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' ест бэнто, которое сделала ',
              tachyon.get_colored_name(),
              '.',
            ]);
            await era.printAndWait([
              'Теперешняя ',
              tachyon.sex,
              ' молчаливее прежней: вместо пустых разговоров ',
              tachyon.sex,
              ' сосредоточена на том, как заставить ',
              coffee.get_colored_name(),
              ' бежать быстрее.',
            ]);
            await era.printAndWait([
              'Немногословная, сосредоточенная, хорошо готовит — в каком-то смысле нынешняя ',
              tachyon.get_colored_name(),
              ' ближе к тому, что свет зовёт достойной женщиной, чем прежняя ',
              tachyon.sex,
              '.',
            ]);
            await era.printAndWait([
              'И всё же… скучаешь по той, что была полна напора и жара — ',
              tachyon.sex,
              '.',
            ]);
          },
        );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async office_rest(tachyon, you, callname) {
    if (era.get('cflag:32:干劲') === -2) {
      await tachyon.say_and_wait('Отдых мне не нужен');
      await era.printAndWait([
        'Вид у неё явно плохой, но ',
        tachyon.get_colored_name(),
        ' упрямо храбрится.',
      ]);
      await tachyon.say_and_wait(
        'Дел ведь ещё гора, и всё надо сделать, какой тут отдых…',
      );
      if (era.get('love:32') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          ' сзади обнимает упрямо сидящую за лабораторным столом ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([tachyon.sex, ' вздрагивает всем телом.']);
        await tachyon.say_and_wait([
          '…',
          callname,
          ', соблазнять меня бесполезно.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' твёрдо тянет вверх — и ',
          tachyon.sex,
          ' встаёт из-за лабораторного стола, как ни упрямилась.',
        ]);
      }
    } else {
      const buffer = [
        () =>
          tachyon.say_and_wait([
            'Устала, устала, ',
            callname,
            ', завари-ка чёрного чаю.',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            ' пьёт заваренный им же чёрный чай и вместе с ',
            tachyon.get_colored_name(),
            ' проводит на диване неспешный день.',
          ]),
        async () => {
          await tachyon.say_and_wait('До чего же праздно.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' вздыхает о буднях.',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async office_game(tachyon) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        'Тц… машина слишком медленная, совсем не поспевает за тем, как быстро жмёт кнопки ',
        tachyon.uma_sex_title,
        '!',
      ]);
    } else {
      await tachyon.say_and_wait('Файтинг? Проигравший слушается победителя?');
      await tachyon.say_and_wait(
        'Хе-хе, а у тебя есть шанс против меня, если я всю таблицу приёмов наизусть выучила?',
      );
      await tachyon.say_and_wait(
        '…Погоди! Забиться в угол и без конца бить издалека — это уже чересчур!',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async school_atrium(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(async () => {
        await tachyon.say_and_wait(
          'Выкрикивать тоску в дупло? И что это изменит.',
        );
        await tachyon.say_and_wait(
          '…Скука. Чем ныть — лучше менять то, что есть.',
        );
        await tachyon.say_and_wait(
          '『Выкричать — и на душе легче』? Ты рядом со мной, откуда ещё давление? Стой, эта кривая усмешка — это что.',
        );
      });
      if (
        era.get('love:32') > 80 &&
        tachyon.sex_code !== 1 &&
        you.sex_code > 0
      ) {
        buffer.push(
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' ведёшь ',
              tachyon.get_colored_name(),
              ' к дуплу, ',
              tachyon.sex,
              ' сама ложится у края.',
            ]);
            await era.printAndWait([
              'Но сегодня играют не в это: ',
              you.get_colored_name(),
              ' качает головой и прислоняется к плечу ',
              tachyon.get_colored_name(),
              '.',
            ]);
            await you.say_and_wait(
              'Раз уж дупло для жалоб и давления — крикни и ты что-нибудь обидное.',
            );
            await era.printAndWait([
              'После этих слов ',
              you.get_colored_name(),
              ' хлопает её по жопе — ',
              tachyon.sex,
              ' сразу считывает намёк, чего ',
              you.get_colored_name(),
              ' хочет услышать.',
            ]);
            await era.printAndWait([
              'Гениальная ',
              tachyon.uma_sex_title,
              ' мгновенно понимает, что ',
              you.get_colored_name(),
              ' имел(а) в виду.',
            ]);
            await era.printAndWait([
              tachyon.sex,
              ' укоризненно смотрит на ',
              you.get_colored_name(),
              ' и орёт в дупло своё 『не могу смириться』.',
            ]);
            await tachyon.say_and_wait([
              'Каждый раз, как ',
              callname,
              ' щипнет сосок — я кончаю, какая досада❤️',
            ]);
            await tachyon.say_and_wait([
              'Киска такая дрянь, что ',
              callname,
              ' стоит провести пальцем — и уже течёт, какая досада❤️',
            ]);
            await tachyon.say_and_wait([
              'Стоит учуять, чем пахнет ',
              callname,
              ' — и в голове одна ебля, уже шлюха, какая досада❤️',
            ]);
            await tachyon.say_and_wait([
              'Стоит взять член в рот — и хочется навеки стать онкенхолом для ',
              callname,
              ', какая досада❤️',
            ]);
            await tachyon.say_and_wait([
              'Велели терпеть, но каждый раз, как ',
              callname,
              ' кончает, я всё равно глотаю и меня наказывают, какая досада❤️',
            ]);
            await tachyon.say_and_wait(
              'Каждый раз без таблеток не трахаюсь, а член-господин всё равно сильнее, какая досада❤️',
            );
            await tachyon.say_and_wait(
              'Каждый раз кончаю первой, так и не дав члену-господину кончить, какая досада❤️',
            );
            await era.printAndWait([
              'Каждый раз после крика ',
              you.get_colored_name(),
              ' шлёпает её по жопе — награда; после шлепка ',
              tachyon.sex,
              ' виляет ещё жарче и ',
              tachyon.sex,
              ' орёт ещё грязнее 『не могу смириться』.',
            ]);
            await era.printAndWait([
              'В конце концов, вокруг ',
              tachyon.uma_sex_title,
              ' стыдливо краснеют, а ',
              you.get_colored_name(),
              ' ведёт под руку ',
              tachyon.get_colored_name(),
              ' — ноги дрожат, уже не идёт — обратно в лабораторию.',
            ]);
          },
          async () => {
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' скучая лежит на дупле и смотрит внутрь.',
            ]);
            await era.printAndWait([
              'Глядя, как ',
              tachyon.sex,
              ' выставила зад, ',
              you.get_colored_name(),
              ' уже едва держит похоть.',
            ]);
            await tachyon.say_and_wait([callname, '…ии❤️']);
            await era.printAndWait([
              you.get_colored_name(),
              ' Шлёпаешь по юной упругой жопе — ',
              tachyon.sex,
              ' пружинит сквозь ткань, когда ',
              you.get_colored_name(),
              ' бьёт, и удар возвращается к ',
              you.get_colored_name(),
              ' в ладонь.',
            ]);
            await tachyon.say_and_wait([
              '……',
              callname,
              ', здесь эхо… очень сильное❤️… пойдём, пойдём домой, там и сделаем, ладно❤️',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' не слушаешь — ',
              tachyon.sex,
              ' молит — и шлёпаешь жёстче.',
            ]);
            await era.printAndWait([
              tachyon.sex,
              ' торопливо зажимает себе рот, а звук всё равно вырывается.',
            ]);
            await tachyon.say_and_wait('у-иии❤️❤️❤️');
            await tachyon.say_and_wait('нн…❤️');
            await tachyon.say_and_wait('уу…❤️');
            await tachyon.say_and_wait('Стой, внутрь нельзя, а-а-а-а❤️❤️❤️');
            await era.printAndWait([
              'В конце концов ',
              you.get_colored_name(),
              ' поднимает с дупла раскрасневшуюся и обмякшую ',
              tachyon.get_colored_name(),
              ' и несёшь в кабинет тренера.',
            ]);
            await era.printAndWait([
              'Прохожие студенты невольно пялятся на ',
              you.get_colored_name(),
              ' обоих.',
            ]);
            await era.printAndWait([
              'Для таких взглядов у ',
              you.get_colored_name(),
              ' давно привычка.',
            ]);
            await era.printAndWait([
              'Что до ',
              tachyon.get_colored_name(),
              ' в объятиях: не глядя ни на кого, слабыми руками всё просит объятий — ',
              tachyon.sex,
              ',',
            ]);
            await era.printAndWait([
              'Пока ',
              tachyon.sex,
              ' не насытится, ей, похоже, не до чужих глаз.',
            ]);
          },
        );
      }
      if (era.get('love:32') > 75) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            'Нн… ',
            callname,
            ' ❤️… делать такое у дупла, куда люди орут душу… а если услышат❤️',
          ]);
          await tachyon.say_and_wait('Сброс похоти — тоже сброс?');
          await tachyon.say_and_wait(
            'Ну тебя❤️… если нас увидят — я ни при чём❤️',
          );
        });
      }
      await get_random_entry(buffer)();
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' привалилась к краю дупла, будто хочет туда крикнуть, долго колеблется и всё-таки молчит',
      ]);
      await era.printAndWait([
        'Глядя, какая ',
        tachyon.sex,
        ' сейчас, ',
        you.get_colored_name(),
        ' почему-то чувствует и грусть, и каплю покоя',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async school_rooftop(tachyon, coffee, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            'А, бэнто просто оставь, поем, как закончу замер скорости ветра.',
          ),
        async () => {
          await tachyon.say_and_wait([
            'Обедать на крыше, значит… кстати, ',
            callname,
            ', ты знал, что на крышу вообще-то заходить не разрешалось?',
          ]);
          await you.say_and_wait('Э, правда?');
          await tachyon.say_and_wait([
            'Именно. Говорят, некая ',
            tachyon.uma_sex_title,
            ' ставила на крыше опыт и по неосторожности допустила утечку ядовитого вещества.',
          ]);
          await tachyon.say_and_wait('…Что это у тебя за лицо?');
          await tachyon.say_and_wait('Нет-нет, это, конечно же, не я');
          await tachyon.say_and_wait(
            'Хотя ты прав: столько времени прошло, остатков давно быть не должно.',
          );
          await tachyon.say_and_wait([
            'И потом, даже если остатки есть… ты ведь закалён снадобьями нынешней меня, ',
            callname,
            ' — как же ты проиграешь снадобьям меня прежней?',
          ]);
          await you.say_and_wait('Значит, всё-таки ты!');
        },
        async () => {
          await era.printAndWait([
            you.get_colored_name(),
            ' берёт бэнто и вместе с ',
            tachyon.get_colored_name(),
            ' идёт обедать на крышу.',
          ]);
          await era.printAndWait([
            'Ветерок проходит по кончикам волос — по волосам ',
            tachyon.get_colored_name(),
            ', и ',
            tachyon.sex,
            ' заливисто смеётся, будто ей это в радость.',
          ]);
          await era.printAndWait([
            'Похоже, ',
            tachyon.get_colored_name(),
            ' здесь нравится. Будет случай — пусть ',
            tachyon.sex,
            ' поднимется сюда снова.',
          ]);
        },
      );
    } else {
      buffer.push(
        () =>
          era.printAndWait([
            tachyon.get_colored_name(),
            ' тихо стоит на крыше, ловит прохладный ветер, лицо ничего не выражает — снова обдумывает план тренировок, план для ',
            coffee.get_colored_name(),
            '?',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            ' ведёт ',
            tachyon.get_colored_name(),
            ' на крышу пообедать и развеяться, но ',
            tachyon.sex,
            ' и за едой всё говорит про ',
            coffee.get_colored_name(),
            '.',
          ]),
        async () => {
          await era.printAndWait([
            tachyon.sex,
            ' почему-то всё смотрит на небо за перилами',
          ]);
          await era.printAndWait(
            'Взгляд ровный, без ряби, просто отражает небо.',
          );
          await tachyon.say_and_wait(['…Что-то случилось, ', callname, '?']);
          await era.printAndWait([
            'Непонятно почему, но ',
            you.get_colored_name(),
            ' вдруг охватывает страх',
          ]);
          await era.printAndWait([
            'Этот страх толкает ',
            you.get_colored_name(),
            ' взять её за руку — ',
            tachyon.sex,
            ' даже не успевает отреагировать, а он уже отпускает',
          ]);
          await tachyon.say_and_wait([
            '…Не бойся, ',
            callname,
            ', я никуда не денусь',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} jpy 钓鱼卖出的马币，0表示没钓到鱼
   */
  async o_r_fishing(tachyon, callname, jpy) {
    if (jpy > 0) {
      await tachyon.say_and_wait(
        'Ой-ой, что выловим — то и пойдёт завтра на бэнто',
      );
    } else {
      await tachyon.say_and_wait([
        'Гх… ну почему же не клюёт… ',
        callname,
        ', слушай: если эта рыба «по неосторожности» глотнёт из воды «неопознанное вещество», сдохнет и всплывёт — это ведь тоже считается, что я её поймала? Нет?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} first2shop 是否没去过小卖部
   */
  async o_r_walking(tachyon, callname, first2shop) {
    await tachyon.say_and_wait([
      callname,
      ', если не поспеешь за мной — завтра доза вдвое',
    ]);
    if (first2shop) {
      await tachyon.say_and_wait(
        'Кстати, вот здесь, когда тут стояли лотки… нет, ничего, всё в порядке',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_arcade(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait([
          'Э? Почему ',
          callname,
          ' так ловко таскает игрушки из автомата? Запал ещё есть, бело-синий возврат… нет, прости, я не очень понимаю, о чём ты',
        ]),
      () =>
        tachyon.say_and_wait([
          'Ой, тут и моя игрушка есть? …На вид милее оригинала? Погоди-ка, ',
          callname,
          ', что это значит, а ну объясни толком',
        ]),
      async () => {
        await tachyon.say_and_wait('Тц… обязательно вот так улыбаться?');
        await tachyon.say_and_wait(
          'Нет, это не я привередничаю: в самой этой затее с фотонаклейками слишком много несуразного! …Эх, ладно. Три, два, один, Cheese',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_drawing(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait(
          'Лотерея… чем полагаться на такую ненадёжную штуку, как удача, не честнее ли добыть приз деньгами или иной силой?',
        ),
      () =>
        tachyon.say_and_wait([
          'Э～～ ты и в такую лотерею с котом в мешке, где всё так легко подкрутить, играть будешь, ',
          callname,
          '? …Нет, я не возражаю, но на всякий случай… можно проверить, лежит ли в этом ящике главный приз на самом деле?',
        ]),
      async () => {
        await tachyon.say_and_wait(
          'Лотерея, значит. Тогда я подготовлюсь… Готово, начнём. М? Зачем очки?',
        );
        await tachyon.say_and_wait(
          'Ничего особенного, это всего лишь очки, которые видят сквозь ящик. Или ты правда решил, что я способна поверить в такую совершенно ненадёжную вещь, как удача?',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_ktv(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait('Winning the soul～～');
        await tachyon.say_and_wait([
          '…Хе-хе, ну как, ',
          callname,
          '? Голос у меня недурён, правда? …Что? Хочешь NEXT FRONTIER? Или Special Record?',
        ]);
        await tachyon.say_and_wait(['…', callname, ', ты это нарочно?']);
      },
      async () => {
        await tachyon.say_and_wait(
          'Выходила на берег Катюша,На высокий берег, на крутой……',
        );
        await tachyon.say_and_wait(
          'Я ведь вроде бы не знаю русского, но почему-то, когда пою, будто вдруг всё понимаю…',
        );
        await tachyon.say_and_wait(
          'Значит, так и есть: знать от рождения — тоже беда гения',
        );
      },
      async () => {
        await tachyon.say_and_wait(['О? ', callname, ', а ты неплохо поёшь…']);
        await tachyon.say_and_wait(
          'Только можно тебя попросить не заводиться так на припеве?',
        );
        await tachyon.say_and_wait(
          'Каждый раз, как ты заводишься, во всей кабинке становится так светло, что ничего не разглядеть. Удивительно, как ты при этом ещё видишь слова на экране…',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          'Э… и почему ты ещё и цвет меняешь под настроение песни, откуда взялась семицветная неоновая версия…',
        );
        await tachyon.say_and_wait(
          'Нет, я изобретатель — как это я не знаю, что у моего снадобья есть такая способность? Жутковато…',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} tachyon 爱丽速子 */
  async o_s_movie(tachyon) {
    await tachyon.say_and_wait('…Этот кинотеатр… снаружи довольно красивый…');
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('Эй, ну скажи уже что-нибудь…');
    await tachyon.say_and_wait(
      'Чтобы в кинотеатр не пустили, потому что спутник слишком ярко светится, — такое даже сама Агнес Тахион встречает впервые…',
    );
    await tachyon.say_and_wait('Скажи что-нибудь, извинись, что ли');
    era.printButton('「Так это же из-за тебя я таким стал!?」', 1);
    await era.input();
    await era.printAndWait(
      'В итоге оба преспокойно вернулись в лабораторию смотреть NetFlOx.',
    );
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async out_church(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (plan_b) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('…Боги…');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' без интереса смотрит на святилище, о чём думает — непонятно',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('Если… боги… тогда я…');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' бормочет себе под нос',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            'Слушай, боги — они правда существуют? Нет, про трёх богинь я знаю, но… в конце концов, три богини — это просто смерт… с очень сильными способностями…',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' поспешно зажимает рот — рот ',
            tachyon.get_colored_name(),
            '.',
          ]);
        },
        () =>
          tachyon.say_and_wait([
            'Эй-эй, ',
            callname,
            ', чем про богов — давай-ка скорее назад к опытам',
          ]),
        () =>
          tachyon.say_and_wait(
            'Великое счастье или великая беда? Неважно: такое решают не боги, а я сама',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} cook_times 做饭次数
   */
  async o_s_restaurant(tachyon, you, callname, cook_times) {
    if (cook_times < 10) {
      await tachyon.say_and_wait(
        '…Невкусно. Сплошь готовые заготовки, вкус держится на ароматизаторах и химии. Тебе мало того, что я и так пью снадобья? Скормить мне такое',
      );
      await era.printAndWait([
        'Едва подали блюда, ',
        tachyon.get_colored_name(),
        ' разнесла их от начала до конца. Хотел ведь вытащить её развеяться — пусть ',
        tachyon.sex,
        ' отдохнёт, — а вышло, что ',
        tachyon.sex,
        ' только сильнее расстроилась.',
      ]);
      await tachyon.say_and_wait('Хотя… вот этот десерт неплох');
      await era.printAndWait(
        'Э… тот пудинг, от которого зубы сводит? Серьёзно?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' словно бы уже начинает улавливать, какие у ',
        tachyon.get_colored_name(),
        ' вкусы',
      ]);
    } else {
      const buffer = [
        async () => {
          await tachyon.say_and_wait([
            'Слушай, ',
            callname,
            '…я, конечно, признательна, что ты вытащил(а) меня поесть, но какой смысл специально идти есть стряпню, которая и твоей-то уступает?',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' озадаченно смотрит на ',
            you.get_colored_name(),
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            'Вкус неплохой, вот только не так, как готовит ',
            callname,
            ' — вечно кажется, что чего-то не хватает… да, точно, мало сладкого',
          ]);
          await tachyon.say_and_wait([
            'Что значит — ещё сладкого, и будет диабет? Не волнуйся, не волнуйся, у ',
            tachyon.uma_sex_title,
            ' обмен веществ что-нибудь придумает',
          ]);
        },
        async () => {
          await era.printAndWait(
            'Свинина в соевой карамели, рёбрышки в кисло-сладком соусе, вагаси, чёрный чай с летальной дозой сахара, а на закуску медовый пудинг',
          );
          await tachyon.say_and_wait([callname, '? Ты не будешь есть?']);
          await you.say_and_wait('…От одного вида зубы ноют, лучше не надо');
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_dating(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait(
          'Хм? Обычные люди не называют свиданием поход за лабораторной утварью?',
        );
        await tachyon.say_and_wait([
          callname,
          ', свидание — слово крайне абстрактное. Что оно значит? Да что угодно: раз ты считаешь это свиданием, значит, это свидание. Понятно?',
        ]);
        await tachyon.say_and_wait([
          'Раз уж с тобой по магазинам вышла такая сверхпрекрасная ',
          tachyon.teen_sex_title,
          ', как я, это уже вполне можно приравнять к свиданию.',
        ]);
      },
      async () => {
        await tachyon.say_and_wait('Магазины, чай, болтовня, еда');
        await tachyon.say_and_wait(
          'И это, по-обычному, называется свиданием? …По-моему, ужасно скучно',
        );
      },
    ];
    if (era.get('relation:32:0') < 50) {
      buffer.push(() =>
        tachyon.say_and_wait(
          'Анализ того, насколько свидание повышает мотивацию лаборантки и подопытной в одном лице? Хм… можно попробовать взять это как тему исследования',
        ),
      );
    } else if (era.get('relation:32:0') < 225) {
      buffer.push(() =>
        tachyon.say_and_wait([
          'Свидание?… ',
          callname,
          ', вообще-то учёные не ходят на свидания с собственными подопытными животными. Ты понимаешь, к чему я?',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async o_s_shopping(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          'Слушай, ',
          callname,
          '… одежду можно и в сети заказать. Человеческая одежда и одежда ',
          tachyon.uma_sex_title,
          ' — какая разница',
        ]);
        await tachyon.say_and_wait(
          'Дырки под хвост нет, так что каждый раз как задерёшь — всё видно?',
        );
        await tachyon.say_and_wait([
          '………Это уже домогательство, ',
          callname,
          '.',
        ]);
      },
      async () => {
        await tachyon.say_and_wait('Кухонная утварь? Зачем столько…');
        await tachyon.say_and_wait(
          'Э, вот столько блюд реально приготовить… гх… если тихо записать на опытный счёт…',
        );
        await tachyon.say_and_wait(
          'Ничего, покупай, не бойся. Если оформлю я — может, протащится как законный опытный инвентарь… наверное',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          'Бесплатная проба… бесплатный тест. Лучшая реклама всё-таки 『бесплатно』: знаешь же, что это способ впарить, и всё равно',
        );
        await tachyon.say_and_wait([
          ' но стоит услышать «бесплатно» — и осторожность к еде от незнакомцев сама собой пропадает… ',
          callname,
          ', я думаю: бесплатная дегустация зелья! …нельзя?',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * 回合开始 - 低好感，做饭次数 0-4 次，连续 2 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async ws_cook02(tachyon, you) {
    await era.printAndWait([
      'В обеденный перерыв неизвестно зачем ',
      tachyon.get_colored_name(),
      ' нарочно водружает на лабораторный стол тот самый блендер, который ',
      tachyon.sex,
      ' держит у себя, выкручивает мощность до предела и с оглушительным рёвом принимается взбивать то, что ',
      tachyon.sex,
      ' зовёт 「обедом」',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' вдруг спохватывается: ',
      you.get_colored_name(),
      ' на прошлой неделе, похоже, был(а) так занят(а), что забыл(а) про бэнто, а ведь ',
      tachyon.sex,
      ' его ждала… на этой неделе точно надо не забыть',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 0-4 次，连续 3 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook03(tachyon, you, callname) {
    await tachyon.say_and_wait([
      callname,
      ', ты ведь и сам(а) знаешь: гору насыпают в девять жэней, а рушится всё из-за одной недостающей корзины земли, ',
    ]);
    await tachyon.say_and_wait(
      'иными словами, кто прошёл девяносто ли из ста, прошёл лишь половину пути, и успеха добивается только тот, кто не бросает на полдороге, ',
    );
    await tachyon.say_and_wait(
      'на скачках всё точно так же: параметры подводят, навыки не прокают, но знания, которые ты набрал(а), пока растил(а) своих лошадок, тебя не обманут, ',
    );
    await tachyon.say_and_wait(
      'верно, и что с того, что карты поддержки хуже, чем у других: и на 6R можно вырастить лошадку ранга SS, всё упирается только в усердие и упорство…',
    );
    era.println();
    await era.printAndWait([
      'Сегодня, стоило зайти в кабинет тренера, ',
      tachyon.get_colored_name(),
      ' тут же завела какую-то невнятную длинную речь',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'То есть, я хочу сказать вот что… в готовке усердие работает точно так же',
    );
    era.println();
    await era.printAndWait([
      'Услышав это, ',
      you.get_colored_name(),
      ' наконец соображает: ах вот оно что. За эти две недели навалилось столько дел, что ',
      you.get_colored_name(),
      ' опять забыл(а). Нет, в этот раз обязательно надо вспомнить…',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 0-4 次，连续 4 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook04(tachyon, you, callname) {
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([
      'Сегодня, едва придя в лабораторию, ',
      you.get_colored_name(),
      ' сразу замечает: у ',
      tachyon.get_colored_name(),
      ' прескверное настроение. И к тому же ',
      you.get_colored_name(),
      ' знает, в чём причина',
    ]);
    era.println();
    await era.printAndWait(['Причина — ', you.get_colored_name()]);
    await era.printAndWait([
      you.get_colored_name(),
      ' уже три недели не готовит для ',
      tachyon.get_colored_name(),
      ' ни одного обеда',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' торопливо оправдывается, а ',
      tachyon.sex,
      ' слушает: эти недели и правда были загруженные, времени было не выкроить… враньё, в которое даже сам ',
      you.get_colored_name(),
      ' не верит',
    ]);
    await era.printAndWait([
      'То ли просто забыл(а), то ли всё время ушло на тренировку других ',
      tachyon.uma_sex_title,
      ',',
    ]);
    await era.printAndWait(
      'то ли просто захотелось посмотреть, сколько ещё разных реплик припасено: у 「тебя」 времени сколько угодно',
    );
    await era.printAndWait([
      'Но сейчас ',
      you.get_colored_name(),
      ' всё равно может только бормотать эти неуклюжие отговорки и просить прощения',
    ]);
    era.println();
    await tachyon.say_and_wait('…Прощать тут нечего');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' мельком глядит на ',
      you.get_colored_name(),
      ' и говорит',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'это тоже одна из твоих возможностей и прекрасный образец для исследования. Твоё усердие я отрицать не стану, ',
    );
    await tachyon.say_and_wait(
      'ровно так же я не стану презирать твою лень. Как ни крути, это твой собственный выбор, и ко мне он не имеет ни малейшего отношения',
    );
    era.println();
    await era.printAndWait('Да, если уж говорить начистоту');
    await era.printAndWait([
      tachyon.sex,
      ' наконец оборачивается — сегодня ',
      tachyon.sex,
      ' впервые за день смотрит на ',
      you.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      ' смотрит без разочарования, без отвращения, без злости',
    ]);
    await era.printAndWait(
      'А какое-то с трудом выразимое чувство. Если непременно назвать его одним словом, то это, пожалуй, — скука',
    );
    era.println();
    await tachyon.say_and_wait(
      'Твои возможности — вот, оказывается, и весь их предел',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      ' смотрит взглядом, каким смотрят на подопытное животное, не оправдавшее целей опыта, — на ',
      you.get_colored_name(),
      ', а потом заговаривает',
    ]);
    era.println();
    await tachyon.say_and_wait([
      'Старайся дальше, повышай свою ценность, ',
      callname,
      '…а то в один прекрасный день мне станет скучно, и я, глядишь, тебя выброшу',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 5 次以上，连续 2 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   */
  async ws_cook12(tachyon, you) {
    await tachyon.say_and_wait('Мм…');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' сегодня выглядит какой-то дёрганой',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' с тревогой спрашивает, что за беда стряслась, из-за чего ',
      tachyon.sex,
      ' сама не своя',
    ]);
    era.println();
    await tachyon.say_and_wait('…Хмф, ничего');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      ' с обидой в голосе бросает, что всё в порядке',
    ]);
    await tachyon.say_and_wait('Уррр~~~~');
    await era.printAndWait([
      'И тут, как нельзя кстати, ',
      tachyon.sex,
      ' громко бурчит животом',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await you.say_and_wait('……………');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' вдруг вспоминает: ',
      you.get_colored_name(),
      ' на прошлой неделе, похоже, начисто забыл(а) сделать бэнто, а ведь его ждала ',
      tachyon.sex,
      ' сама',
    ]);
    await era.printAndWait('Неужели…');
    era.println();
    await tachyon.say_and_wait(
      '…Неважно. Еда нужна лишь для того, чтобы покрыть минимум энергии на базовую активность',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      ' всё ещё храбрится на словах, а ',
      you.get_colored_name(),
      ' торопливо извиняется, и ',
      tachyon.sex,
      ' получает обещание: сегодня уж точно не забудет',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 5 次以上，连续 3 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook13(tachyon, you, callname) {
    await tachyon.say_and_wait([
      'Хмф, ',
      callname,
      ', сегодняшнее зелье прибыло',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' внезапно врывается в кабинет тренера, и вот ',
      you.get_colored_name(),
      ' уже глотает флакон зелья, влитый прямо в рот, — цвет странный, впрочем, в этом смысле всё как всегда',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' выпивает, и вскоре проваливается в сон',
    ]);
    await era.printAndWait([
      'Во сне ',
      you.get_colored_name(),
      ' будто бы бредёт по пустыне, уже несколько дней и ночей без еды и питья, ',
    ]);
    await era.printAndWait([
      'Вдруг картинка меняется: во сне ',
      you.get_colored_name(),
      ' раз за разом получает в рот питательную смесь, взбитую в кашу, — кто-то пихает её без остановки, и глотать тяжело, ',
    ]);
    await era.printAndWait([
      'но, вспомнив недавний сон про пустыню, ',
      you.get_colored_name(),
      ' всё-таки вынужден(а) всё это проглотить…',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' в испуге просыпается, а перед глазами — ',
      tachyon.get_colored_name(),
      ' с донельзя довольной физиономией',
    ]);
    era.println();
    await tachyon.say_and_wait(['Что, кошмар приснился? ', callname]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' горько усмехается: смысл зелья вполне понятен, — и торопливо клянётся, что на этой неделе бэнто для ',
      tachyon.get_colored_name(),
      ' точно не забудет',
    ]);
  },
  /**
   * 回合开始 - 低好感，做饭次数 5 次以上，连续 4 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} amazon 菱亚马逊
   * @param {CharaTalk} tama 玉藻十字
   * @param {CharaTalk} akebono 菱曙
   * @param {CharaTalk} taste 秋川弥生/北方风味
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook14(tachyon, amazon, tama, akebono, taste, you, callname) {
    await era.printAndWait([
      'С самого утра, едва ',
      you.get_colored_name(),
      ' приходит в академию, становится ясно: что-то не так',
    ]);
    await era.printAndWait(
      'Всю академию окутала какая-то нервная взвинченность',
    );
    await era.printAndWait(
      'К обеденному перерыву она разрослась до предела, а в столовой в обед рванула во всю силу',
    );
    era.println();
    await you.say_as_passer_by_and_wait('Прохожий тренер А', [
      'Все ',
      tachyon.uma_sex_title,
      ' как с цепи сорвались! И ',
      tachyon.couple_title,
      ' почему-то вдруг вцепилась в своего тренера и требует бэнто!',
    ]);
    await you.say_as_passer_by_and_wait('Прохожий тренер А', [
      'Не своими руками сделанное не годится! Чёрт побери, ',
      tachyon.couple_title,
      ' вообще как отличает, тренер готовил бэнто или нет!',
    ]);
    era.println();
    await era.printAndWait([
      'Какой-то тренер-статист неизвестно зачем ворвался в кабинет тренера и, будто разъясняя обстановку, выложил всё вышесказанное, после чего в дверь ворвалась его подопечная ',
      tachyon.uma_sex_title,
      ' и уволокла его прочь',
    ]);
    era.printButton('「Ч-что… вообще происходит…」', 1);
    await era.input();
    await tachyon.say_and_wait('Ой-ой, кто-то спросил, что происходит?');
    await era.printAndWait([
      'И вдруг у ',
      you.get_colored_name(),
      ' за спиной раздаётся знакомый голос, вот только ',
      you.get_colored_name(),
      ' даже не заметил(а), когда ',
      tachyon.sex,
      ' успела ворваться в кабинет тренера',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'Раз уж ты спросил(а) от чистого сердца, так и быть, милостиво отвечу',
    );
    await tachyon.say_and_wait([
      'Чтобы утвердить зло, имя которому — ',
      tachyon.uma_sex_title,
      ' и бэнто, милая и обворожительная безумная учёная',
    ]);
    await tachyon.say_and_wait([
      'Дальше слишком длинно, опустим. Короче — это я, Агнес Тахион. Ну всё, ',
      callname,
      ', будь паинькой и отдавай бэнто',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' наваливается на спинку стула, где сидит ',
      you.get_colored_name(),
      ' — сверху вниз склоняет голову к сидящему на стуле ',
      you.get_colored_name(),
      ' и растягивает губы в предельно хищной улыбке',
    ]);
    era.printButton('「Что ты опять натворила」', 1);
    await era.input();
    await tachyon.say_and_wait(
      'Ой-ой, как грубо. С чего это сразу подозрения на меня? Может, я тоже пострадавшая',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      ' произносит это самым жалобным тоном',
    ]);
    era.printButton('「Потому что ты только что сама призналась」', 1);
    await era.input();
    await tachyon.say_and_wait('Э… кажется, и правда было такое');
    await era.printAndWait('Да не цепляйся ты к таким мелочам');
    await era.printAndWait([tachyon.sex, ' машет рукавом и говорит']);
    era.println();
    await tachyon.say_and_wait([
      'Главное — ',
      callname,
      ', отдавай своё бэнто',
    ]);
    era.printButton(
      '「Думаешь, таким давлением ты заставишь меня послушно сдаться?」',
      1,
    );
    await era.input();
    await tachyon.say_and_wait(
      '…Хе-хе, конечно же. В итоге ты всё равно послушно поднесёшь мне бэнто',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' загадочно улыбается, и ',
      you.get_colored_name(),
      ' невольно чувствует укол нечистой совести',
    ]);
    await era.printAndWait([
      'Сегодня ',
      you.get_colored_name(),
      ' и правда приготовил(а) бэнто для ',
      tachyon.get_colored_name(),
      ' — вот только работы сегодня столько, что бэнто и вправду было забыто',
    ]);
    await era.printAndWait(
      'Но как бы там ни было, уступать здесь нельзя ни в коем случае! Это ради достоинства тренера! Ради свободы! Ради…',
    );
    era.println();
    await taste.say_and_wait([
      'Объявление! Под влиянием некоего неизвестного фактора все ',
      tachyon.uma_sex_title,
      ' в академии одержимы необъяснимой тягой к бэнто, приготовленному руками тренера, ',
    ]);
    await taste.say_and_wait([
      'всем тренерам немедленно приступить к изготовлению бэнто для своих подопечных. Тренерам, не умеющим готовить, следует обратиться к главному секретарю, преподавателю домоводства, а также к ',
      tama.get_colored_name(),
      ', ',
      amazon.get_colored_name(),
      ' или ',
      akebono.get_colored_name(),
      ' за помощью',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      'Глядя на донельзя довольную ',
      tachyon.get_colored_name(),
      ', ',
      you.get_colored_name(),
      ' невольно кривит губы в горькой усмешке',
    ]);
    await era.printAndWait([
      'Да уж, победить в этом никак не выходит — ',
      tachyon.sex,
      ' всегда берёт своё, и ',
      you.get_colored_name(),
      ' покорно отдаёт бэнто',
    ]);
  },
  /**
   * 回合开始 - 高好感，做饭次数 10 次以上，连续 2 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} cook_times 做饭次数
   */
  async ws_cook22(tachyon, you, callname, cook_times) {
    await era.printAndWait([
      'В обеденный перерыв, когда ',
      you.get_colored_name(),
      ' как раз забивает данные, дверь кабинета тренера распахивается от удара',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '! Где моя еда! Быстрее, быстрее!']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' с порога кидается на стол и начинает без остановки по нему кататься',
    ]);
    era.println();
    await era.printAndWait('Опасно, опасно');
    await era.printAndWait([
      you.get_colored_name(),
      ' торопливо убирает со стола компьютер, чтобы ',
      tachyon.get_colored_name(),
      ' не сшибла его на пол',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '…',
      callname,
      '! Ты мне уже неделю не готовишь бэнто! Я с голоду помираю, живо, где моё бэнто!',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' трясёт рукавами и сердито топает ногами, а прямо напротив сидит ',
      you.get_colored_name(),
      ' — щёки, нежные так, что вот-вот лопнут, раздулись, как у фугу. Хотя, если честно',
    ]);
    era.printButton('「Я же тебе приготовил(а), разве нет?」', 1);
    await era.input();
    if (cook_times < 20) {
      await tachyon.say_and_wait(
        'Разве можно назвать бэнто вот это, где с одного взгляда видно, что делали без души!?',
      );
    } else {
      await tachyon.say_and_wait(
        'Хотя на вкус разницы и не чувствуется… но чутьё подсказывает, что ты состряпал(а) это для галочки',
      );
    }
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait(
      'Ты сейчас думаешь 『вот же морока эта девица』, да?',
    );
    await you.say_and_wait('……');
    await you.say_and_wait('Как это она угадала', true);
    era.println();
    await tachyon.say_and_wait(
      'В общем, завтра бэнто чтобы было! Иначе ты точно пожалеешь',
    );
  },
  /**
   * 回合开始 - 高好感，做饭次数 10 次以上，连续 3 周没做饭
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_cook23(tachyon, you, callname) {
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' уже две недели не ставит на ',
      you.get_colored_name(),
      ' ни одного опыта',
    ]);
    await era.printAndWait([
      'На первой неделе, честно говоря, ',
      you.get_colored_name(),
      ' ничуть об этом не жалел(а), даже наоборот, был(а) вполне доволен(на), ',
    ]);
    await era.printAndWait([
      'ведь каждый день всё равно видно ',
      tachyon.get_colored_name(),
      ', всё как обычно, просто ',
      tachyon.sex,
      ' больше не ставит опытов на ',
      you.get_colored_name(),
      ' — только и всего',
    ]);
    await era.printAndWait([
      'Но на второй неделе ',
      you.get_colored_name(),
      ' начинает чувствовать неладное. Стокгольмский синдром…',
    ]);
    await era.printAndWait([
      'Да нет, не то. Просто тревожно за то, в каком состоянии ',
      tachyon.sex,
      ' — да ещё какое-то нехорошее предчувствие',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' добирается до лаборатории, которую держит ',
      tachyon.sex,
      ', стучит в дверь — изнутри ни звука',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' чует неладное и вламывается внутрь',
    ]);
    era.println();
    await era.printAndWait([
      'Вроде бы похожа на ',
      tachyon.get_colored_name(),
      ', но почему-то съёжилась до чиби-пропорций, превратилась в какое-то на вид довольно милое существо, ',
    ]);
    await era.printAndWait(
      'хвост сзади сделался круглее и толще — прямо как… хвост тануки?',
    );
    await era.printAndWait([
      'Э?? Что происходит?? Это вообще ',
      tachyon.get_colored_name(),
      ' ???',
    ]);
    era.println();
    await era.printAndWait('…Ах вот оно что');
    await era.printAndWait([
      you.get_colored_name(),
      ' понимает решительно всё',
    ]);
    await era.printAndWait(
      'Всё сходится: эти зелья неизвестного происхождения, нечеловеческое отношение к подопытным и вот этот хвост, который наконец вылез наружу',
    );
    await era.printAndWait([
      'Точно, ',
      tachyon.get_colored_name(),
      ' с самого начала была оборотнем-тануки!',
    ]);
    era.println();
    await era.printAndWait(
      '…Нет, отложим-ка этот бред, порождённый паникой, в сторону',
    );
    await era.printAndWait(
      'Неизвестно почему вокруг заиграла странная фоновая музыка — похоже, Amelia no Yuigon. Музыка чудесная, и с нынешней унылой сценой она контрастирует особенно резко',
    );
    await era.printAndWait([
      'В панике ',
      you.get_colored_name(),
      ' вспоминает, что раньше говорила про бэнто ',
      tachyon.get_colored_name(),
      ' — и торопливо достаёт бэнто, которое оставлял(а) себе',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([callname, '? Ты чего это делаешь?']);
    await era.printAndWait([
      'Пришедшая в себя ',
      tachyon.get_colored_name(),
      ' мгновенно возвращается к прежнему облику, и только пустая коробка из-под бэнто свидетельствует о том, что всё это было',
    ]);
    await era.printAndWait([
      'Не сон… В общем, впредь всё-таки не забывай, что бэнто для ',
      tachyon.get_colored_name(),
      ' надо готовить',
    ]);
  },
  /**
   * 回合开始 - 三级反抗刻印
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async ws_hate(tachyon, you, callname) {
    await era.printAndWait([
      'И вдруг ',
      tachyon.get_colored_name(),
      ' целует — целует так, что замирает ',
      you.get_colored_name(),
    ]);
    await era.printAndWait([
      'Горячий поток перетекает у вас изо рта в рот, вы оба его глотаете, и вот уже ',
      you.get_colored_name(),
      ' чувствует, как он катится вниз по горлу',
    ]);
    await era.printAndWait(
      'Там, где прошёл этот поток, мгновенно вспыхивает жжение',
    );
    era.println();
    await tachyon.say_and_wait(['Больно? ', callname]);
    await tachyon.say_and_wait(
      'Мне тоже жутко больно… зелье-то я варила сама, но не думала, что оно окажется настолько мощным',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' улыбается лицом, но в глазах у неё улыбки нет',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'Я не стану тебя винить… в конце концов, обманутый сам виноват',
    );
    await tachyon.say_and_wait(
      'Это наказание и тебе, и мне — за то, что плохо разбираюсь в людях',
    );
    await tachyon.say_and_wait(
      'И уходить я тебя не заставлю… признавать это очень не хочется, но даже после всего случившегося я всё равно не хочу, чтобы ты от меня ушёл(ла)',
    );
    await tachyon.say_and_wait([
      'Так что, мой дорогой ',
      callname,
      '…давай весь оста · ток нашей жизни и дальше мучить друг друга, хорошо?',
    ]);
  },
  /**
   * 闲聊 - 关于称呼的连续事件
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {number} talk_times 关于称呼的第几次闲聊
   */
  async event_talk_callname(tachyon, you, callname, talk_times) {
    switch (talk_times) {
      case 1:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await you.say_and_wait('Хм?');
        await era.printAndWait([
          you.get_colored_name(),
          ' слышит, как ',
          tachyon.get_colored_name(),
          ' будто бы зовёт — зовёт вроде бы ',
          you.get_colored_name(),
          ' — и оборачивается посмотреть',
        ]);
        era.println();
        await tachyon.say_and_wait('Ничего, просто так позвала');
        era.println();
        await era.printAndWait([
          'И вот ',
          you.get_colored_name(),
          ' отворачивается обратно и продолжает заниматься своими делами',
        ]);
        era.println();
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        era.println();
        await tachyon.say_and_wait([you.actual_name, '-кун']);
        await era.printAndWait('!?');
        await era.printAndWait([
          you.get_colored_name(),
          ' резко оборачивается, а перед глазами — ',
          tachyon.get_colored_name(),
          ' с обычной своей улыбкой',
        ]);
        await era.printAndWait('Будто только что вообще ничего не было');
        break;
      case 2:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' прислоняется со спины к ',
          you.get_colored_name(),
          ' и шепчет что-то капризно-ласковое, будто ластится',
        ]);
        await era.printAndWait([
          'Вот только ',
          you.get_colored_name(),
          ' ничуть не краснеет и ничуть не трепещет',
        ]);
        await era.printAndWait(
          'В прошлый раз этот трюк сработал: стоило обернуться — и в глотку тут же влили целый флакон зелья',
        );
        await era.printAndWait(
          'В этот раз, как ни зови, оборачиваться нельзя ни за что',
        );
        era.println();
        await tachyon.say_and_wait([callname, '……']);
        await tachyon.say_and_wait([callname, '……❤']);
        await tachyon.say_and_wait([callname, '❤']);
        await tachyon.say_and_wait([callname, '❤']);
        era.println();
        await era.printAndWait([
          'Неизвестно почему ',
          tachyon.sex,
          ' говорит всё более двусмысленно и вязко',
        ]);
        await era.printAndWait([
          'Не смея обернуться, ',
          you.get_colored_name(),
          ' только и может, что терпеть внутренний зуд и сидеть как сидел(а)',
        ]);
        era.println();
        await tachyon.say_and_wait('…Балда');
        era.println();
        await era.printAndWait([
          'Услышав, как ',
          tachyon.sex,
          ' напоследок тихонько хмыкает, ',
          you.get_colored_name(),
          ' наконец не выдерживает и всё-таки оборачивается',
        ]);
        await era.printAndWait('А потом…');
        era.println();
        await era.printAndWait('Бульк');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' держит в руке пустую пробирку',
        ]);
        await era.printAndWait([
          'А то, что было в пробирке? В то самое мгновение, когда ',
          you.get_colored_name(),
          ' обернулся(лась), всё содержимое уже целиком отправилось в рот, а ',
          you.get_colored_name(),
          ' и заметить ничего не успел(а)',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'Ну и ну… а в этот раз ты держался(лась) на удивление упорно',
        );
        era.println();
        await era.printAndWait(
          'Зелье начинает действовать — похоже, на этот раз оно с парализующим эффектом',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' из последних сил поворачивает голову, а перед глазами — донельзя довольная ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          'Слова упрёка, уже готовые сорваться, растаяли без следа в то самое мгновение, когда ',
          tachyon.sex,
          ' чуть заметно порозовела лицом',
        ]);
        era.println();
        await era.printAndWait([
          'Да уж, всё-таки не одолеть — ',
          tachyon.sex,
          ' сильнее',
        ]);
        await era.printAndWait([
          'С этой мыслью ',
          you.get_colored_name(),
          ' проваливается во тьму',
        ]);
        break;
      case 3:
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' вроде бы как раз ставит опыт',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' не сводит глаз с того, как хороша ',
          tachyon.sex,
          ' в профиль, и вдруг в голову приходит шкодливая мысль',
        ]);
        era.printButton('「Агнес Тахион」', 1);
        await era.input();
        await era.printAndWait([you.get_colored_name(), ' тихо произносит']);
        await era.printAndWait([
          tachyon.sex,
          ' вздрагивает спиной, но не оборачивается — так и продолжает возиться с опытом, делая вид, что ничего не было',
        ]);
        era.println();
        await era.printAndWait([
          'От такой картины в ',
          you.get_colored_name(),
          ' просыпается ещё больше ребячества',
        ]);
        era.println();
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' пробует произносить это на самые разные лады',
        ]);
        await era.printAndWait([
          'С каждым разом, стоит позвать, ',
          tachyon.sex,
          ' вздрагивает всем телом, и дрожь длится дольше прежней',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' видит сбоку, как ',
          tachyon.sex,
          ' лицом краснеет всё сильнее',
        ]);
        era.println();
        await era.printAndWait([
          'Видя, как ',
          tachyon.sex,
          ' заливается румянцем, ',
          you.get_colored_name(),
          ' и сам(а) невольно смущается',
        ]);
        await era.printAndWait(
          'Но в этот миг желание внутри уже не даёт остановиться',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' зовёт снова и снова, и голос делается всё мягче',
        ]);
        await era.printAndWait([
          'Мало-помалу шкодливый настрой пропал, и теперь ',
          you.get_colored_name(),
          ' просто хочет увидеть, как ',
          tachyon.sex,
          ' смущается всё сильнее, и как всё яснее проступает в ней ',
          tachyon.teen_sex_title,
          ' — обычная, живая',
        ]);
        era.println();
        await era.printAndWait([
          '…………',
          tachyon.get_colored_name(),
          '… ',
          tachyon.teen_sex_title,
          '?',
        ]);
        await era.printAndWait(
          'Два слова, которые вроде бы совсем не должны сочетаться, сейчас подходят друг другу идеально',
        );
        await era.printAndWait('Так это и продолжается без остановки');
        await era.printAndWait(
          'Одна сторона зовёт и зовёт, другая делает вид, что не слышит',
        );
        era.drawLine();
        await era.printAndWait([
          'И вдруг ',
          tachyon.sex,
          ' бледнеет — румянец сходит с лица',
        ]);
        await era.printAndWait([
          'Глаз не сводил(а) с того, как выглядит ',
          tachyon.sex,
          ' — и потому ',
          you.get_colored_name(),
          ' сразу это замечает и прослеживает, куда смотрит ',
          tachyon.sex,
          ' сама',
        ]);
        era.println();
        await era.printAndWait([
          'В конце этого взгляда — то, что ',
          tachyon.sex,
          ' держит в руке: склянка с треугольным знаком опасности',
        ]);
        await era.printAndWait('Сейчас флакон уже совершенно пуст');
        await era.printAndWait(
          'Похоже, при добавлении дрогнула рука, и всё содержимое ушло разом',
        );
        await era.printAndWait([
          'А ',
          tachyon.sex,
          ' держит в руке ту самую пробирку, куда попало слишком много опасного реактива…',
        ]);
        await era.printAndWait(
          'Уровень жидкости на глазах вспухает вверх, пока не переливается через край пробирки, но смертоноснее этого валящий пар, ',
        );
        await era.printAndWait(
          'в немыслимом для такой крохотной пробирки количестве он заполняет комнату и ползёт наружу',
        );
        era.println();
        await era.printAndWait([
          'И вот тут ',
          tachyon.sex,
          ' наконец оборачивается',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' видит, как ',
          tachyon.sex,
          ' снова заливается краской, и на этот раз ',
          you.get_colored_name(),
          ' совершенно уверен(а): это не смущение',
        ]);
        await era.printAndWait('А именно…');
        era.println();
        await tachyon.say_and_wait([callname, '!!!!!!!!!!!!!!']);
        era.drawLine({ offset: 8, width: 8 });
        await era.printAndWait('【Уведомление от академии】', {
          align: 'center',
        });
        await era.printAndWait(
          ['Днём, ', tachyon.get_colored_name(), ', зелье, конец'],
          { align: 'center' },
        );
    }
  },
  /**
   * 聊天 - 泡红茶
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async event_talk_black_tea(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, ', как раз вовремя']);
    await tachyon.say_and_wait(
      'Помоги-ка мне испытать сегодняшнее новое зелье',
    );
    era.println();
    await era.printAndWait([
      'Ты по привычке выпиваешь сегодняшнее зелье… хм? Почему на вкус как чёрный чай',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' с недоумением разглядывает пробирку в руке: светится подозрительно, с одного взгляда ясно, чьё это зелье — ',
      tachyon.get_colored_name(),
      ' и никто иной, но почему…',
    ]);
    era.println();
    await tachyon.say_and_wait('Ну как ощущения?');
    era.println();
    await era.printAndWait([
      'Вопрос застаёт посреди недоумения, и ',
      you.get_colored_name(),
      ' машинально выдаёт оценку вкусу чёрного чая',
    ]);
    await era.printAndWait([
      'И только ответив, ',
      you.get_colored_name(),
      ' вспоминает, что это зелье, а не чай. Всё, сейчас достанется по полной…',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '…Аромата мало, слишком сладко, и ещё цвет… вот как? Хм… весьма ценный для справки ответ…',
    );
    era.println();
    await era.printAndWait('Э? И это всё, обошлось?');
    era.println();
    await tachyon.say_and_wait(
      '…Кстати, физические показатели у тебя тоже подросли, так что впредь к ежедневной дозе добавим ещё одну, ',
    );
    await tachyon.say_and_wait(
      'помимо прежнего зелья будешь пить ещё и это… а вкус я потом доработаю так, что тебе и придраться будет не к чему',
    );
    era.printButton('「Неужели…」', 1);
    era.printButton('「…Неужели…」', 2);
    const ret = await era.input();
    await era.printAndWait('Вкус чёрного чая');
    await era.printAndWait('Изучение вкуса и его доработка');
    await era.printAndWait('Иными словами, дело обстоит так');
    era.println();
    if (ret === 1) {
      await era.printAndWait(
        'Если подумать: слишком сладко, но, кроме аромата, если не глядеть на вид, та самая 「микстура」…',
      );
      await era.printAndWait([
        'Нет, хотя и остаётся загадкой, как ',
        tachyon.sex,
        ' умудряется даже чёрный чай заварить такого цвета, ',
      ]);
      await era.printAndWait([
        'но если подумать — это же вкус того самого чая, который ',
        tachyon.sex,
        ' обожает больше всего, разве нет?',
      ]);
      era.println();
      await tachyon.say_and_wait('Так что жди с нетерпением!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' произносит это с ноткой уязвлённого упрямства',
      ]);
      await era.printAndWait([
        'И тут ',
        you.get_colored_name(),
        ' вдруг вспоминает: когда-то, стоило приготовить бэнто, которое получала ',
        tachyon.sex,
        ', и услышать, что оно гроша ломаного не стоит, — вид был, кажется, точно такой же уязвлённо-упрямый',
      ]);
      await era.printAndWait([
        'Если подумать: что же тогда ответила ',
        tachyon.sex,
        ' в тот раз?',
      ]);
      era.printButton('「Буду ждать с нетерпением, исследователь-кун」', 1);
      await era.input();
      await tachyon.say_and_wait('…Подумаешь, свинка');
      await era.printAndWait([
        you.get_colored_name(),
        ' слышит, как ',
        tachyon.get_colored_name(),
        ' тихонько бормочет себе под нос, и не может сдержать улыбку',
      ]);
    } else {
      await era.printAndWait([
        'Дошло до того, что ',
        tachyon.sex,
        ' уже не довольствуется одним-единственным подопытным и тянет свои когти к другим!',
      ]);
      await era.printAndWait([
        'Уже сейчас идёт работа над зельем со вкусом чая, и если ',
        tachyon.sex,
        ' найдёт способ ещё и цвет подогнать под чайный — пиши пропало!',
      ]);
      era.printButton('「Тахион!」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' не выдерживает и кричит во весь голос',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? Ты чего это…']);
      era.printButton('「Какое угодно зелье — давай, неси!」', 1);
      era.printButton('「Только одно ты должна мне пообещать」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'Э… нет, погоди, ',
        callname,
        '…ты, ты, кажется, что-то напутал(а)…',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' пытается что-то сказать, но ',
        you.get_colored_name(),
        ' безжалостно её обрывает',
      ]);
      await era.printAndWait(
        'Всё верно… как бы там ни было, именно это сказать совершенно необходимо, и сказать именно сейчас',
      );
      era.printButton(
        '「Только я — твоя вечная, единственная свинка (подопытный образец)」',
        1,
      );
      await era.input();
      await era.printAndWait(
        'Всё так… тот вкус только что был уже неотличимо близок к чаю',
      );
      await era.printAndWait([
        'А ну как ',
        tachyon.sex,
        ' и правда подмешает это кому-нибудь в напиток или, того хуже, в питьевую воду… последствия страшно вообразить',
      ]);
      await era.printAndWait([
        'Поэтому здесь непременно надо подчеркнуть своё положение, чтобы ',
        tachyon.sex,
        ' отказалась от безумной идеи ставить опыты на ком-то другом',
      ]);
      era.println();
      await tachyon.say_and_wait('…Ты… всё-таки напутал(а)… но… у-у…');
      era.println();
      await era.printAndWait([
        'Неизвестно почему ',
        tachyon.get_colored_name(),
        ' в замешательстве отворачивается, но ',
        you.get_colored_name(),
        ' успел(а) заметить — прежде чем ',
        tachyon.sex,
        ' отвернулась, было хорошо видно: ',
        tachyon.sex,
        ' вся красная лицом',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '…Свинка у меня от начала и до конца всегда была одна — ты… В общем, будешь каждый день приходить и пробовать мои зелья, и точка! Раз ты свинка, твоё прямое дело — молча и послушно глотать лекарства!',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' в бешенстве уходит, а разгром в лаборатории остаётся разгребать — и разгребает его ',
        you.get_colored_name(),
        ' в одиночку',
      ]);
      era.println();
      await era.printAndWait([
        '…Из-за чего же она всё-таки разозлилась? ',
        you.get_colored_name(),
        ' ломает голову и не находит ответа',
      ]);
      await era.printAndWait([
        'Хотя… если ',
        tachyon.sex,
        ' найдёт себе других испытуемых… Неизвестно почему в это самое мгновение у ',
        you.get_colored_name(),
        ' и правда чуть сжимается в груди',
      ]);
      await era.printAndWait([
        'А стоило услышать, как ',
        tachyon.sex,
        ' сказала, что свинка у неё только одна, — и это напряжение растаяло без следа',
      ]);
      era.println();
      await era.printAndWait(
        'Неужели… это уже настоящая лекарственная зависимость',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' торопливо мотает головой, отгоняя эту жуткую мысль',
      ]);
    }
    return [];
  },
  /**
   * 聊天 - 喜欢的饮品
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {PrintedSpan} y_call_c 玩家对曼城茶座的称呼的称呼
   */
  async event_talk_drink(tachyon, you, callname, y_call_c) {
    await tachyon.say_and_wait([callname, '~~ не хочешь чего-нибудь выпить?']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' вдруг с широчайшей ехидной ухмылкой обращается к ',
      you.get_colored_name(),
      ' с вопросом',
    ]);
    await era.printAndWait(
      'Кто без причины любезничает, тот либо злодей, либо вор',
    );
    await era.printAndWait([
      'Хотя, если отказать в лоб, ',
      tachyon.sex,
      ' наверняка вспыхнет от стыда и злости',
    ]);
    era.println();
    await tachyon.say_and_wait('Ну как, что будешь пить?');
    era.println();
    era.print('И что же теперь делать…');
    era.printButton('Чёрный чай', 1);
    era.printButton('Кофе', 2);
    era.printButton('Сарсапарилла', 3);
    era.printButton('Не пить', 4);
    switch (await era.input()) {
      case 1:
        await era.printAndWait('Всё-таки классика жанра — чёрный чай');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' кивает с таким видом, будто и так знала, что ',
          you.get_colored_name(),
          ' выберет именно это, и вытаскивает из-за спины чай, куда уже всё подмешано',
        ]);
        era.drawLine();
        await era.printAndWait([
          '…',
          you.get_colored_name(),
          ' смотрит на чай, в котором порошок толком не растворился, и лицо вытягивается',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'Что такое, ',
          callname,
          '? Я, между прочим, заваривала своими руками, пей давай',
        ]);
        era.println();
        await era.printAndWait([
          '…Ладно, ещё когда выбирался чай, ',
          you.get_colored_name(),
          ' прекрасно понимал(а), что всё к этому и придёт, разве нет',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' одним глотком осушает чай',
        ]);
        await era.printAndWait('М-м, вкусно и освежающе');
        break;
      case 2:
        if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
          await you.say_and_wait([
            'Пусть будет кофе — в последнее время часто пью тот, что заваривает ',
            y_call_c,
            ' своими руками',
          ]);
        } else {
          await you.say_and_wait(
            'Пусть будет кофе — в последнее время работы много, пью его часто',
          );
        }
        era.println();
        await tachyon.say_and_wait(
          'Как вообще можно пить эту горькую до смерти жижу, похожую на грязную воду',
        );
        era.println();
        await you.say_and_wait([
          'А ну извинись перед ',
          y_call_c,
          ' сейчас же, я кому говорю',
        ]);
        era.println();
        await tachyon.say_and_wait('Ладно, хочешь пить — пей');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' с обречённым видом достаёт из-за спины уже приготовленный напиток',
        ]);
        era.drawLine();
        await era.printAndWait([
          you.get_colored_name(),
          ' смотрит на тёмно-красную жидкость с нерастворившимся порошком и впервые чувствует: придраться можно к стольким вещам сразу, что не выходит придраться ни к одной',
        ]);
        era.println();
        await you.say_and_wait('Во-первых… кофе?');
        await tachyon.say_and_wait('…Кофеина много, будем считать, что кофе');
        await tachyon.say_and_wait('…………');
        await you.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          'Вы двое молча смотрите друг на друга, и ',
          you.get_colored_name(),
          ' смиренно выпивает напиток',
        ]);
        break;
      case 3:
        await you.say_and_wait(
          'Пусть будет сарсапарилла — на любителя, но и правда вкусно',
        );
        era.println();
        await tachyon.say_and_wait(
          'Э… и как тебе нравится напиток с таким странным вкусом',
        );
        era.println();
        await you.say_and_wait('Нравится, и всё. Нельзя?');
        era.println();
        await tachyon.say_and_wait(
          '…Нет, погоди. Этот напиток и пахнет, и на вкус как лекарство. Иными словами, ты мог(ла) бы просто пить мои зелья, разве нет',
        );
        era.println();
        await you.say_and_wait('!?');
        await era.printAndWait([
          'Похоже, ',
          tachyon.sex,
          ' и не собирается больше притворяться',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' отставляет в сторону чай с подмешанным зельем и прямо из-под халата достаёт флуоресцентную склянку',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' для приличия сопротивляется пару секунд, а потом вынужден(а) осушить всё одним глотком',
        ]);
        await era.printAndWait(
          'Слушай, а зелье-то на вкус вовсе не как лекарство. Почему у него вкус оякодона!?',
        );
        break;
      case 4:
        await era.printAndWait([
          you.get_colored_name(),
          ' отказывается. Пусть противиться и бесполезно, ',
          you.get_colored_name(),
          ' всё равно должен(на) оказать своё сопротивление',
        ]);
        era.println();
        await era.printAndWait(
          'Вот она, вот она, решимость человека а-а-а-а-а-а-а-а-а',
        );
        era.println();
        await tachyon.say_and_wait('Шумно, сил нет');
        era.println();
        await era.printAndWait([
          'Вот только решимость не помогла, и ',
          you.get_colored_name(),
          ' свой малый космос так и не взорвал(а): человеку при любом раскладе не одолеть ',
          tachyon.uma_sex_title,
          ' — и через пять секунд ',
          you.get_colored_name(),
          ' уже не сопротивляется: лицо зажато, рот силой раскрыт, жидкость влита внутрь',
        ]);
        era.println();
        await tachyon.say_and_wait('Сразу бы так — и возни меньше');
    }
    await era.printAndWait('Шлёп');
    await era.printAndWait([
      'Это ',
      you.get_colored_name(),
      ' без чувств валится на стол — вот такой звук',
    ]);
  },
  /**
   * 日常随机事件 - 中庭营业
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async event_atrium_evil(tachyon, you, callname) {
    await you.say_and_wait('Тахион———?');
    era.println();
    await era.printAndWait([
      'Сегодня с самого утра почему-то не видишь ',
      tachyon.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'Вечно ушедшая с головой в опыты ',
      tachyon.sex,
      ' сегодня неизвестно куда делась.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' ищешь по всему кампусу и от проходящих студентов слышишь: ',
      tachyon.sex,
      ' у дупла.',
    ]);
    await era.printAndWait([
      'Дупло… ',
      tachyon.sex,
      ' тоже пришла выплеснуть душу?',
    ]);
    await era.printAndWait(
      'Не заметить, что с настроением что-то не так, — для тренера провал.',
    );
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      ' приходишь во внутренний двор: уроки, людей почти нет, лишь редкие ',
      tachyon.uma_sex_title,
      '.',
    ]);
    await era.printAndWait([
      'И оттого, что пусто, ',
      you.get_colored_name(),
      ' своими глазами видит «то».',
    ]);
    await era.printAndWait([
      'Тень крадётся к ',
      tachyon.uma_sex_title,
      ' и бьёт туда, где ',
      tachyon.couple_title,
      ' слабее всего внутри.',
    ]);
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      'Уа-а-а-а! Я такая слабая… почему, почему никак не выиграть…!',
    );
    await tachyon.say_as_unknown_and_wait('Хочешь… силу?');
    await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, '…Силу?');
    await tachyon.say_as_unknown_and_wait(
      'Силу стать сильнее всех, победить всех…',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '…П-правда можно? Какая цена?',
    );
    await tachyon.say_as_unknown_and_wait(
      'Хе-хе-хе… хочешь знать — приходи в старую лабораторию естественных наук…',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      'Почему… не хватает смелости признаться… этот чурбан… почему при всём этом всё ещё не понимает…!',
    );
    await tachyon.say_as_unknown_and_wait(
      'Хочешь честно сказать, что чувствуешь? Хочешь, чтобы он понял даже без слов?',
    );
    await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}B`, 'Т-ты…!');
    await tachyon.say_as_unknown_and_wait(
      'Иди в старую лабораторию естественных наук — получишь всё, что хочешь…',
    );
    await you.say_and_wait('…Что она творит', true);
    await era.printAndWait([
      'У дупла без умолку бормочет, как демон, что искушает сердца, — это, без сомнения, у ',
      you.get_colored_name(),
      ' подопечная ',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      ' без конца является к тем, кто орёт тоску в дупло, шепчет соблазн падения — как чёрт из мифа',
    ]);
    await era.printAndWait([
      'И тут ',
      tachyon.sex,
      ' замечает ',
      you.get_colored_name(),
    ]);
    await tachyon.say_and_wait([
      callname,
      ', ты как раз вовремя: пойдём встречать гостей',
    ]);
    await you.say_and_wait('Гостей?');
    await tachyon.say_and_wait([
      'Конечно, тех самых растерянных ',
      tachyon.uma_sex_title,
      '.',
    ]);
    await tachyon.say_and_wait(
      'Ах, какая я была невежа: решила, что дупло ни к чему.',
    );
    await tachyon.say_and_wait([
      'А теперь глянь: место как под меня — само отсеивает слабодушных ',
      tachyon.uma_sex_title,
      '.',
    ]);
    await era.printAndWait(
      'Воля слаба — вот и нужна чужая рука, чтобы выплеснуть.',
    );
    await era.printAndWait([
      'Воля слаба — вот и душу за цель легко продают злу (Тахи) демону (он).',
    ]);
    await era.printAndWait([
      'В каком-то смысле для тех, кто замышляет недоброе, пришедшие сюда ',
      tachyon.uma_sex_title,
      ' и правда самые лёгкие невинные жертвы.',
    ]);
    await era.printAndWait([
      'Впрочем, ',
      tachyon.get_colored_name(),
      ' вряд ли станет ранить, и ',
      tachyon.couple_title,
      ' в безопасности… так?',
    ]);
    await tachyon.say_and_wait(['Не об этом, ', callname, ', пошли быстрее.']);
    await era.printAndWait('Что так внезапно… совесть точно ни при чём?');
    await tachyon.say_and_wait(
      'Раз уж даже ты это видишь — студсовет тоже мигом нагрянет. Пока не потащили на разнос — живо, пошли!',
    );
    await era.printAndWait([
      '…А иногда неплохо, чтобы ',
      tachyon.sex,
      ' хоть раз попалась на разнос',
    ]);
  },
  /**
   * 日常随机事件 - Plan A 天台
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async event_rooftop_a(tachyon, you, callname) {
    await tachyon.say_and_wait('Хм-хм-хм～～');
    await era.printAndWait([
      'Сегодня ',
      you.get_colored_name(),
      ' снова берёт бэнто и вместе с ',
      tachyon.get_colored_name(),
      ' идёт обедать на крышу.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      ' ловит ветерок и радостно подхватывает палочками кусочек курицы из бэнто.',
    ]);
    await era.printAndWait('И вдруг ветерок в один миг оборачивается шквалом.');
    await tachyon.say_and_wait('А');
    await era.printAndWait(
      'Кусочек курицы на палочках от резко усилившегося ветра падает на пол',
    );
    await era.printAndWait('Ах… как жалко');
    await era.printAndWait('Хотя ничего страшного, в бэнто ведь ещё есть…');
    await era.printAndWait([
      'И тут ',
      you.get_colored_name(),
      ' видит, как ',
      tachyon.get_colored_name(),
      ' преспокойно подхватывает упавший на пол кусочек',
    ]);
    await tachyon.say_and_wait('Ну, приятного мне —');
    era.printButton('「Погоди!?」', 1);
    await era.input();
    await tachyon.say_and_wait([
      'М? А что не так, ',
      callname,
      '? Ты что, не знаешь про правило трёх секунд?',
    ]);
    await era.printAndWait([
      'Нет, ладно, оставим вопрос, почему ',
      tachyon.get_colored_name(),
      ' верит в такую беспочвенную вещь, как правило трёх секунд, — но сейчас-то явно прошло больше трёх!?',
    ]);
    await tachyon.say_and_wait([
      '…Эх, ',
      callname,
      ', с научной точки зрения желудок, который есть у ',
      tachyon.uma_sex_title,
      ', не настолько слаб, чтобы расстроиться от такого',
    ]);
    await you.say_and_wait('Да не в этом же дело!?');
    await tachyon.say_and_wait('Всё равно я съем эту курицу!');
    await you.say_and_wait('В бэнто же ещё есть!?');
    await era.printAndWait([
      'Настоял ',
      you.get_colored_name(),
      ' — и не дал ',
      tachyon.get_colored_name(),
      ' съесть упавший на пол кусочек',
    ]);
    await era.printAndWait([
      'Ценой стало то, что весь тот день после обеда ',
      tachyon.sex,
      ' смотрела с укоризной на ',
      you.get_colored_name(),
    ]);
    await era.printAndWait([
      'И до самой ночи, уже засыпая, ',
      you.get_colored_name(),
      ' будто слышал у самого уха, как ',
      tachyon.get_colored_name(),
      ' укоризненно причитает',
    ]);
    await tachyon.say_and_wait('Моя курочка…');
    await you.say_and_wait(
      [
        '…Завтра надо будет, раз ',
        tachyon.sex,
        ' так просит, нажарить ей курицы',
      ],
      true,
    );
  },
  /**
   * 日常随机事件 - Plan B 天台
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async event_rooftop_b(tachyon, coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' берёт её с собой — пусть ',
      tachyon.sex,
      ' поест бэнто на крыше и развеется',
    ]);
    await era.printAndWait([
      tachyon.sex,
      ' с удовольствием слушает, как ',
      you.get_colored_name(),
      ' рассказывает про перемены в тренировках — про то, как тренируется ',
      coffee.get_colored_name(),
      ', — и изредка вставляет свои соображения',
    ]);
    await era.printAndWait('И ни разу за всё время не заговаривает о себе');
    await era.printAndWait([
      'Ведь ',
      tachyon.sex,
      ' в тренировках участвовать не может, и, как ни выкраивай время, чтобы побыть рядом, пока другая ',
      tachyon.uma_sex_title,
      ' тренируется, всё равно приходится расходиться',
    ]);
    await tachyon.say_and_wait([
      'В последнее время ',
      tachyon.sex,
      ' в порядке?',
    ]);
    era.printButton('「……」', 1);
    era.printButton('「…А ты? У тебя в последнее время всё хорошо?」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        'Разговор о ',
        coffee.get_colored_name(),
        ' кончился, вы вдруг замолчали, и трапеза быстро подошла к концу',
      ]);
    } else {
      await tachyon.say_and_wait('Я? …Да так, ничего особенного.');
      await era.printAndWait([tachyon.sex, ' ответила небрежно']);
      await era.printAndWait([
        'Столько лет вместе, что ',
        tachyon.sex,
        ' давно вся на виду, и ',
        you.get_colored_name(),
        ' понимает: ',
        tachyon.sex,
        ' не отмахивается — ей и правда кажется, что в её жизни нет темы для разговора',
      ]);
      await era.printAndWait([
        'Стоит подумать об этом, и ',
        you.get_colored_name(),
        ' невольно чувствует укол в сердце.',
      ]);
    }
  },
  /**
   * 日常随机事件 - 幼儿退行速子
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} bakushin 樱花进王
   * @param {CharaTalk} urara 春乌拉拉
   * @param {CharaTalk} pocket 森林宝穴
   * @param {CharaTalk} you 玩家
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   */
  async event_river(tachyon, coffee, bakushin, urara, pocket, you, callname) {
    await tachyon.say_and_wait([callname, '! Смотри! Утка!']);
    await tachyon.say_and_wait('А вон то! Бабочка же!');
    await tachyon.say_and_wait('Какой тут красивый вид!');
    await era.printAndWait([
      you.get_colored_name(),
      ' беспомощно смотрит, как по берегу реки носится туда-сюда ',
      tachyon.get_colored_name(),
      ',',
    ]);
    await era.printAndWait([
      'Простодушное, беззаботное лицо — это не ',
      tachyon.get_colored_name(),
      ' — скорее ',
      urara,
      ', ',
      bakushin,
      ' и прочие ',
      tachyon.uma_sex_title,
      '; даже жалюзи в глазах будто обернулись лепестками сакуры',
    ]);

    await era.printAndWait([
      'Причина всего, как всегда, — ',
      tachyon.get_colored_name(),
      ' со своим зельем',
    ]);
    await tachyon.say_and_wait(
      'Зелье, что поднимает скорость ценой падения Интеллекта',
    );
    await era.printAndWait([
      'Звучит как совершенно невыгодная сделка, но ',
      tachyon.get_colored_name(),
      ' выпила его без колебаний',
    ]);
    await era.printAndWait([
      'В итоге ',
      tachyon.get_colored_name(),
      ' легко выиграла пробный забег у ',
      coffee,
      ', ',
      pocket,
      ' и прочих, но цена…',
    ]);
    await tachyon.say_and_wait([
      callname,
      callname,
      '! Смотри! Улитка ползёт так медленно!',
    ]);
    await era.printAndWait([
      'Как бы сказать… считай, мозг тоже отдыхает, а ',
      you.get_colored_name(),
      ' может только не спускать глаз с ',
      tachyon.get_colored_name(),
      ', ведь сейчас ',
      tachyon.sex,
      ' до того наивна, что запросто влипнет в беду… или попадётся на обман',
    ]);
    era.drawLine();
    await era.printAndWait([
      'После целого дня беготни ',
      tachyon.get_colored_name(),
      ' наконец тоже, кажется, устала — идёт и слегка пошатывается',
    ]);
    await era.printAndWait([
      tachyon.sex,
      ' тянет руки к ',
      you.get_colored_name(),
      ' с раскрытыми ладонями',
    ]);
    await tachyon.say_and_wait([callname, '~~на спинку~~']);
    await era.printAndWait([
      you.get_colored_name(),
      ' взваливает на спину ту, что весь день носилась без удержу, — сверхсветовая ',
      tachyon.sex_code - 1 ? 'принцесса' : 'принц',
      '. Похоже, ',
      tachyon.sex,
      ' и правда устала: стоило лечь на спину к ',
      you.get_colored_name(),
      ' — и тут же уснула',
    ]);
    await era.printAndWait(
      'Этот день и меня вымотал будь здоров — вернусь, надо будет как следует отдохнуть',
    );
    await tachyon.say_and_wait([callname, '…спасибо…']);
    await you.say_and_wait('……');
    await era.printAndWait('Может, такой день изредка — и не так уж плохо?');
  },
  event_church: (() => {
    const title = 'Операция по поимке божества';
    /**
     * 日常随机事件 - 神社捉猫
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        'Сегодня ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' вместе шли к святилищу…',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! Живее! Нехорошо, если 『великое божество』 заждётся!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' на радостях взлетает по ступеням святилища и, обернувшись, кричит',
      ]);
      await era.printAndWait([
        'Не будем даже о том, есть ли у человеческого тела шанс догнать ',
        tachyon.uma_sex_title,
        ' — кроме чисто физической невозможности,',
      ]);
      await era.printAndWait([
        'Да и морально ',
        you.get_colored_name(),
        ' изо всех сил хочет отказаться от того, что будет дальше, но перед капризом любимой кобылки ',
        you.get_colored_name(),
        ' всё равно может только криво усмехнуться и через силу пойти следом',
      ]);
      era.println();
      await era.printAndWait(
        'Причина всего… рассказывать долго, а по сути просто',
      );
      await era.printAndWait('Одним словом');
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', ты же знаешь: я никогда не верила ни в души, ни в духов, ни в богов',
      ]);
      await tachyon.say_and_wait(
        'Но отрицать, не проверив, — не та позиция, что подобает исследователю',
      );
      await you.say_and_wait('Угу-угу');
      await tachyon.say_and_wait('Но как это проверить? Есть давняя версия');
      await tachyon.say_and_wait(
        'Что так называемые духи и боги — всего лишь блуждающие сгустки энергии в природе',
      );
      await tachyon.say_and_wait(
        'Версия однобокая, но взять её за основу для проверки вполне можно',
      );
      await you.say_and_wait('Угу-угу');
      era.println();
      await tachyon.say_and_wait(
        'Итак, то да сё, пятое-десятое — идём в святилище ловить божество!',
      );
      await you.say_and_wait('Угу… угу?');
      era.println();
      await era.printAndWait(
        'Если и правда существует нечто, чего обычный человек не ощущает и не замечает, ',
      );
      await era.printAndWait(
        'то само его существование неизбежно требует энергии',
      );
      await era.printAndWait(
        'Поэтому за основу поиска берём места, где фиксируется ненормальный расход энергии, ',
      );
      await era.printAndWait(
        'Но в городе слишком много всякого мусорного шума',
      );
      await era.printAndWait(
        'На этом фоне для замеров лучше всего, конечно, подходит глухое, далёкое святилище',
      );
      await era.printAndWait(
        'Кроме того, раз уж зовётся богом, то и уровень энергии должен отличаться от обычного призрака, ',
      );
      await era.printAndWait(
        'И если даже в святилище никакого божества не поймать, то можно считать доказанным: такого просто не бывает…',
      );
      era.println();
      await era.printAndWait(
        'Словом, примерно по такой вот кощунственной причине',
      );
      await era.printAndWait([
        'И вот сегодня вы добрались до глухого святилища, куда никто не ходит',
      ]);
      await you.say_and_wait(
        'Наму-сан, да будут три богини великодушны и не взыщут за такую мелочь, покорнейше просим, Амитабха, аминь',
        true,
      );
      era.println();
      await era.printAndWait([
        'С крайне неохотным сердцем ',
        you.get_colored_name(),
        ' всё-таки взбирается к святилищу',
      ]);
      await era.printAndWait([
        'Только когда ',
        you.get_colored_name(),
        ' взмолился(ась) чуть ли не под угрозой смерти, ',
        tachyon.get_colored_name(),
        ' нехотя согласилась сперва поклониться в знак почтения, а уж потом взяться за детектор — ',
        tachyon.sex,
        ' держит эту несуразную энергетическую штуковину в руках',
      ]);
      era.println();
      await era.printAndWait([
        'И вот вы складываете ладони и кланяетесь святилищу…',
      ]);
      await tachyon.say_and_wait('Ну всё! Тогда без лишней болтовни начнём…');
      era.println();
      await era.printAndWait([
        'В тот же миг, как поклон закончен, ',
        tachyon.get_colored_name(),
        ' хватает отложенный в сторону детектор — ',
        tachyon.sex,
        ' наводит его на святилище и начинает замер',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' может только стоять рядом с кривой усмешкой и молиться, чтобы великое божество оказалось великодушным и не считалось с ребёнком',
      ]);
      era.println();
      if (Math.random() < 0.5) {
        await tachyon.say_and_wait([
          'Угу-угу… угу-угу…! Погоди! ',
          callname,
          '! Иди сюда, посмотри, тут вроде что-то есть…',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' слышит зов и спешит туда, где ',
          tachyon.get_colored_name(),
          ' кричала, но обнаруживает: ',
          tachyon.sex,
          ' замерла на месте, наведя детектор куда-то в одну точку',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' спешит тронуть её за плечо — цела ли ',
          tachyon.sex,
          '? Но тут ',
          tachyon.sex,
          ' вдруг наваливается и роняет ',
          you.get_colored_name(),
          ' наземь',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          ' вдавливает в землю обе руки, и вот ',
          you.get_colored_name(),
          ' обездвижен(а). ',
          you.get_colored_name(),
          ' лежит лицом к небу и смотрит на придавившую сверху ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' смотрит холодно, но под этим холодом будто прячется искорка исступления',
        ]);
        await era.printAndWait(
          'Как кошачий зверь, что поймал добычу и вот-вот примется за еду',
        );
        era.println();
        await you.say_and_wait(
          [
            'Вот теперь-то и правда кара небесная? …Нет, стоп, почему карают меня? Разве не ',
            tachyon.sex,
            ' должна была огрести, а!?',
          ],
          true,
        );
        era.println();
        await era.printAndWait('Все слова вязнут в бессильной досаде');
        await era.printAndWait([
          you.get_colored_name(),
          ' может только беспомощно смотреть, что ',
          tachyon.sex,
          ' сделает дальше',
        ]);
        era.println();
        await era.printAndWait([
          'Убедившись, что ',
          you.get_colored_name(),
          ' уже потерял(а) волю к сопротивлению, ',
          tachyon.sex,
          ' отпускает одну руку и расстёгивает на ',
          you.get_colored_name(),
          ' рубашку',
        ]);
        era.println();
        await you.say_and_wait(
          'Ох-ох, так и вылететь из тренеров недолго',
          true,
        );
        await era.printAndWait([
          tachyon.sex,
          ' распахивает рубашку на ',
          you.get_colored_name(),
          ' — а потом…',
        ]);
        era.println();
        await tachyon.say_and_wait('Мяу~~~');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          ' мяукает, как котёнок, и по-кошачьи заползает в объятия к ',
          you.get_colored_name(),
          ' — довольное урчание',
        ]);
        await era.printAndWait([
          'Конечно, как бы по-кошачьи ни двигалась, факта не изменить: ',
          tachyon.sex,
          ' телом своим — ',
          tachyon.uma_sex_title,
          ', и тело это остаётся прежним',
        ]);
        await era.printAndWait([
          'Воображение рисует котёнка, ныряющего под рубашку, но вот что видит ',
          you.get_colored_name(),
          ' на самом деле:',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' всего лишь расстегнула рубашку и улеглась на ',
          you.get_colored_name(),
          ' — на голую грудь, и трётся',
        ]);
        era.println();
        await tachyon.say_and_wait('Мяу~~мяу-у~мяу');
        era.println();
        await era.printAndWait([
          'Похоже, такое касание её не вполне устраивает: ',
          tachyon.sex,
          ' меняет подход — тянет за обе руки ',
          you.get_colored_name(),
          ' и складывает ладони ',
          you.get_colored_name(),
          ' одну на другую, а ',
          tachyon.sex,
          ' подставляет под них свой живот',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' хочет воспользоваться моментом и встать, но стоит ',
          you.get_colored_name(),
          ' двинуться, как сверху с силой наваливается вес — и ',
          you.get_colored_name(),
          ' снова не может шевельнуться',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' может только и дальше терпеть, пока ',
          tachyon.sex,
          ' складывает руки ',
          you.get_colored_name(),
          ' в позу объятия',
        ]);
        await era.printAndWait([
          tachyon.sex,
          ' устраивает руки у ',
          you.get_colored_name(),
          ' как надо, переворачивается и прижимается щекой к ',
          you.get_colored_name(),
          ' — прямо к груди, и издаёт довольный звук',
        ]);
        era.printButton('「…Тахион?」', 1);
        await era.input();
        await era.printAndWait([
          'Кошечка не отвечает. Постепенно ',
          tachyon.sex,
          ' дышит всё ровнее, а потом…',
        ]);
        era.println();
        await tachyon.say_and_wait('zzz…мяу…zzz…');
        era.println();
        await era.printAndWait([
          'Так и уснула, лёжа на ',
          you.get_colored_name(),
          ' — прямо на груди',
        ]);
        await era.printAndWait([
          'Теперь-то ',
          you.get_colored_name(),
          ' вполне мог(ла) бы стряхнуть — ',
          tachyon.sex,
          ' и не удержит, но…',
        ]);
        era.println();
        await era.printAndWait([
          'Сейчас ',
          tachyon.get_colored_name(),
          ' выглядит откровенно ненормально',
        ]);
        await era.printAndWait('Но как ни крути, а до этого потрепали изрядно');
        await era.printAndWait(
          'Раз уж спит, взять себе маленькую компенсацию — ничего же страшного?',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' тихонько разжимает объятия, в которых лежит ',
          tachyon.sex,
          ', и тянет одну руку вверх…',
        ]);
        era.println();
        await era.printAndWait([
          'Мягко, до чего приятно… ах вот оно что, так это же у ',
          tachyon.uma_sex_title,
          ' те самые…',
        ]);
        era.println();
        await era.printAndWait('уши');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' тихонько гладит кошечку по голове, нет-нет да помнёт свисающие с макушки уши; мягкая, но упругая пушистость такая, что ',
          you.get_colored_name(),
          ' не может остановиться и трогает снова и снова',
        ]);
        era.println();
        await tachyon.say_and_wait('Мя-а… мурр… мяу-мяу');
        era.println();
        await era.printAndWait([
          'Кошечка и во сне издаёт милые звуки — будто подбадривает ',
          you.get_colored_name(),
          ' не останавливаться',
        ]);
        await era.printAndWait(
          'Плохо дело… это мягкое-мягкое на ощупь… сейчас пропаду…',
        );
        era.println();
        await era.printAndWait([
          'Незаметно и ',
          you.get_colored_name(),
          ' проваливается в сон…',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('Ааааа!!! Мой прибор ааааа!!!');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' смотрит на воющую от горя ',
          tachyon.get_colored_name(),
          ', криво усмехаясь',
        ]);
        await era.printAndWait([
          'Что было до того — непонятно: вы вдруг отключились прямо в святилище, а когда очнулись, ',
          tachyon.get_colored_name(),
          ' обнаружила, что прибор, за который ',
          tachyon.sex,
          ' (вроде бы) выложила кучу денег, попросту не работает',
        ]);
        await era.printAndWait(
          'Странно вот что: память обоих обрывается на моменте поклона, а что было после — ни малейшего следа в голове, ',
        );
        await era.printAndWait([
          'Хотя почему-то ',
          you.get_colored_name(),
          ' чувствует в теле приятную лёгкость, будто перед обмороком успел(а) как-то сбросить напряжение',
        ]);
        await era.printAndWait([
          '… ',
          you.get_colored_name(),
          ' вдруг вспоминает: проснувшись, обнаружил(а), что все пуговицы на рубашке расстёгнуты. Что же всё-таки было перед обмороком',
        ]);
        await era.printAndWait(
          '…Всё-таки в духов и богов стоит хоть немного верить',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' уводит ',
          tachyon.get_colored_name(),
          ' прочь от святилища',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' смотрит, как ',
          tachyon.sex,
          ' тычет детектором по всему святилищу — и непонятно, есть ли от этого хоть какой-то толк',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('…Так и есть, ничего нет');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' произносит с разочарованием на лице',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' тоже не понимает, отчего ',
          tachyon.sex,
          ' так расстроена: доказать, что духов и богов нет, — разве это не хорошо? Ведь ',
          tachyon.sex,
          ' именно этого и добивалась?',
        ]);
        await era.printAndWait([
          'Так ничего и не поняв, вы спустились с горы и пошли домой',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  event_station: (() => {
    const title = 'Испорченный номер';
    /**
     * 日常随机事件 - 车站约会拆台
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        'Сегодня тот день, когда ',
        you.get_colored_name(),
        ' и ',
        tachyon.get_colored_name(),
        ' идут на свидание',
      ]);
      await era.printAndWait([
        'Говорят, сегодня в торговом квартале парад фокусников — задумка была такая, чтобы и ',
        tachyon.sex,
        ' заодно поглазела на праздник',
      ]);
      await era.printAndWait('Однако…');
      era.println();
      await tachyon.say_and_wait('Волшебная палочка у него в рукаве');
      await tachyon.say_and_wait(
        'Голубь всё это время сидел в двойном дне, ничего особенного',
      );
      await tachyon.say_and_wait(
        'Это всего лишь окислительное горение магния, я тебе такое и в лаборатории покажу',
      );
      era.println();
      await era.printAndWait([
        'Каждый раз механику фокуса мгновенно раскрывает ',
        tachyon.get_colored_name(),
        ' — голосом не громким и не тихим, но ровно таким, чтобы всем было слышно',
      ]);
      await era.printAndWait([
        'Ладно бы ей просто было скучно, так нет: каждый раз, договорив, она горячо уставляется на ',
        you.get_colored_name(),
        ', будто ждёт похвалы',
      ]);
      await era.printAndWait([
        'Это что, щенок, который выпрашивает похвалу… ',
        you.get_colored_name(),
        ' вытряхивает всплывшую в голове картинку обратно',
      ]);
      await era.printAndWait([
        'В общем, пока фокусник, буравящий нас двоих взглядом, не сорвался со сцены с кулаками, надо увести ',
        tachyon.get_colored_name(),
        ' отсюда',
      ]);
      era.println();
      await tachyon.say_and_wait('Э-э~~ уже уходим?');
      era.println();
      await era.printAndWait([
        'Однако ',
        tachyon.get_colored_name(),
        ' явно чем-то недовольна',
      ]);
      await era.printAndWait([
        'Надо сперва найти, чем отвлечь внимание — ',
        tachyon.sex,
        ' должна на что-то переключиться… Есть!',
      ]);
      era.printButton('「Овощной сок, меняющий цвет?」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' с наигранным изумлением зачитывает главный товар уличного лотка, надеясь отвлечь ',
        tachyon.get_colored_name(),
        ' хоть на это',
      ]);
      await era.printAndWait(
        'Хозяин лотка выливает фиолетовую жидкость в стакан — и та мгновенно становится красной',
      );
      await era.printAndWait(
        '…Так это же сок краснокочанной капусты, кислотно-щелочная реакция из школьного учебника',
      );
      await era.printAndWait([
        'Ладно, неважно: чтобы притянуть внимание ',
        tachyon.get_colored_name(),
        ' к этому, придётся немного подыграть',
      ]);
      era.printButton('「Выглядит потрясающе!」', 1);
      await era.input();
      await era.printAndWait([
        'И действительно: стоило ',
        you.get_colored_name(),
        ' заговорить преувеличенно восторженно — и это оттянуло ',
        tachyon.get_colored_name(),
        ' от фокусов обратно',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' не сводит глаз с меняющего цвет капустного сока — похоже, о чём-то думает',
      ]);
      await era.printAndWait([
        'Странно, неужели ',
        tachyon.get_colored_name(),
        ' такого не видела?',
      ]);
      await era.printAndWait([
        '…Нет, ну вряд ли: это же самый базовый кислотно-щелочной индикатор, ',
        tachyon.get_colored_name(),
        ' не может этого не знать',
      ]);
      await era.printAndWait([
        'Но если вдруг ',
        tachyon.sex,
        ' и правда с таким не сталкивалась…',
      ]);
      era.printButton('「Выглядит как настоящее чудо… вроде бы?」', 1);
      await era.input();
      await era.printAndWait(
        'Нет, больше ничего хвалебного в голову не приходит',
      );
      await era.printAndWait([
        'Но ',
        tachyon.get_colored_name(),
        ' явно переключила внимание целиком',
      ]);
      await era.printAndWait('Значит, проблем быть не должно…');
      era.println();
      await tachyon.say_and_wait('…Такую вот штуку');
      era.println();
      await era.printAndWait('Э');
      era.println();
      await tachyon.say_and_wait(
        '…Ты готов хвалить вот это, а меня хвалить не хочешь?',
      );
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' разозлилась']);
      await era.printAndWait([
        'Причина неясна, но ',
        tachyon.get_colored_name(),
        ' явно разозлилась',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'Я ведь и зелье с куда большим числом цветов сделаю, да хоть светящееся…',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' ни с того ни с сего расплакалась',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' может только суетливо утешать: плачет ведь ',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait([
        'На следующий день ',
        tachyon.get_colored_name(),
        ' изготовила зелье, вмещающее 256 цветов RGB',
      ]);
      await era.printAndWait(
        '…Как вообще можно разделить и уложить 256 цветов в одном и том же зелье',
      );
      await era.printAndWait('Свинка невольно озадачилась');
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = 'Цена денег';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' с наполовину опустошённой бутылкой виски в руке, покачиваясь, выходит из пятого по счёту бара',
      ]);
      await era.printAndWait('Ночь всё так же черна, разгул продолжается');
      era.println();
      await era.printAndWait('Закончили… ну, и куда теперь?');
      await era.printAndWait(
        'Шатаясь из стороны в сторону, бредёшь по улице, и от тебя за версту разит спиртным',
      );
      await era.printAndWait([
        'Вид, от которого любой прохожий зажмёт нос и обойдёт стороной, — как раз то, что ',
        you.get_colored_name(),
        ' и старается изобразить',
      ]);
      era.println();
      await era.printAndWait('Два, три, пять… двадцать три, двадцать девять ');
      await era.printAndWait([you.get_colored_name(), ' считает про себя']);
      await era.printAndWait([
        'Это не подсчёт простых чисел, чтобы успокоиться, — это количество спиртного, которое за один сегодняшний вечер ',
        you.get_colored_name(),
        ' в себя влил(а)',
      ]);
      await era.printAndWait('Общая сумма… семь знаков… или восемь?');
      await era.printAndWait([
        'Цифра ошеломляющая, а всего лишь цена того, что ',
        you.get_colored_name(),
        ' выпил(а) за один вечер',
      ]);
      await era.printAndWait(
        'В самом дорогом баре, с установкой брать не лучшее, а самое дорогое, вымести заведение подчистую — вот и выходит цифра, о которой обычный человек и подумать не смеет',
      );
      era.println();
      await era.printAndWait('Однако…');
      await era.printAndWait('Бесполезно. Совсем бесполезно');
      await era.printAndWait([
        'Ни цена, ни градус — ни одна выпитая сегодня рюмка не дала ничего, кроме того, что ',
        you.get_colored_name(),
        ' лишний раз сходил(а) в туалет',
      ]);
      await era.printAndWait([
        'Сознание ясное дальше некуда — до того ясное, что ',
        you.get_colored_name(),
        ' вспоминает то, что было два дня назад',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('Занять денег?');
      await tachyon.say_as_unknown_and_wait(['Можно, ', callname]);
      await tachyon.say_as_unknown_and_wait(
        'Но правила прежние, ты же знаешь… Сегодняшний опыт — о выведении нейроингибитора',
      );
      await tachyon.say_as_unknown_and_wait('Итак, приступим к опыту');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' пьёт виски прямо из горла',
      ]);
      await era.printAndWait([
        'Крепкое, от одного глотка которого нормального человека развезёт, — а ',
        you.get_colored_name(),
        ' только яснее соображает',
      ]);
      await era.printAndWait(
        'Если топить горе в вине — значит алкоголем глушить нервы и бежать от реальности, то тот, кому не позволено заглушить даже нервы, наверное, самый несчастный пьяница на свете',
      );
      era.println();
      await era.printAndWait(
        'На шумной ночной улице таких же пьяниц, как я, хоть отбавляй',
      );
      await era.printAndWait([
        'Глядя на их шатающиеся фигуры, ',
        you.get_colored_name(),
        ' от всего сердца им завидует',
      ]);
      era.println();
      await era.printAndWait([
        'Идёшь, идёшь — и вдруг впереди вспыхивает свет, от которого ',
        you.get_colored_name(),
        ' невольно щурится',
      ]);
      await era.printAndWait(
        'Слепит не только свет: ещё и переливающаяся всеми цветами отделка, и бесчисленные мечты разбогатеть за одну ночь',
      );
      await era.printAndWait(
        'Азарт и вино, вино и азарт — испокон веков одно от другого не отделить',
      );
      await era.printAndWait(
        'Для гуляк, что пьют до упаду, заглянуть в разгар веселья в казино и перекинуться пару раз — давно уже дело обычное',
      );
      era.println();
      await era.printAndWait([
        'Однако ',
        you.get_colored_name(),
        ' с внешностью законченного пьяницы даже взгляда в сторону казино не бросает — смотрит прямо перед собой',
      ]);
      await era.printAndWait(
        'Не потому, что ставки в казино кажутся мелковатыми———',
      );
      await era.printAndWait([
        'Говорят, здешние казино даже принимают ставки на забеги, где бегут ',
        tachyon.uma_sex_title,
        ' — такой бизнес, что стоит ему всплыть, и работать больше не дадут',
      ]);
      await era.printAndWait([
        'И уж точно не потому, что ',
        you.get_colored_name(),
        ' так уж блюдёт себя в чистоте — в конце концов, кто в такой час слоняется по таким улицам, тот, как ни отмывайся, чистым не будет',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' делает ещё глоток и вспоминает прошлое',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('Занять денег?');
      await tachyon.say_as_unknown_and_wait(['Можно, ', callname]);
      await tachyon.say_as_unknown_and_wait(
        'Но правила прежние, ты же знаешь… Сегодняшний опыт — о настройке и подавлении системы вознаграждения мозга',
      );
      await tachyon.say_as_unknown_and_wait('Итак, приступим к опыту');
      era.println();
      await era.printAndWait(
        'Даже выиграв больше, чем обычный служащий получает за год',
      );
      await era.printAndWait(
        'Даже спустив за один вечер виллу с видом на море',
      );
      await era.printAndWait(
        'Никакого движения чувств — даже брови не сдвинутся',
      );
      await era.printAndWait(
        'Что вообще интересного в азартной игре при таком раскладе?',
      );
      era.println();
      await era.printAndWait(
        'Будто во всём казино только я один отрезан от мира',
      );
      await era.printAndWait('Не понять, чем прежний я так увлекался');
      await era.printAndWait(
        'Нет, понять можно, но чего не можешь — того не можешь',
      );
      await era.printAndWait('Как проснувшемуся уже не вернуться в сон');
      era.println();
      await tachyon.say_as_passer_by_and_wait(
        'Девушка с панели',
        'Господин, вы будто совсем один и вам одиноко… не хотите провести вместе весеннюю ночку?♡',
      );
      era.println();
      await era.printAndWait([
        'Незаметно сверкающее казино тоже осталось позади, и вступивший(ая) в квартал красных фонарей ',
        you.get_colored_name(),
        ' попадает в нежные сети ночных женщин',
      ]);
      await era.printAndWait(
        'Вот бы так и утонуть между их телами — наверное, это было бы бесконечное счастье…',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('Занять денег?');
      await tachyon.say_as_unknown_and_wait(['Можно, ', callname]);
      await tachyon.say_as_unknown_and_wait('Но правила прежние…');
      era.println();
      await era.printAndWait('А-а');
      await era.printAndWait([you.get_colored_name(), ' отказывает девушке']);
      await era.printAndWait('Никакого отклика');
      await era.printAndWait(
        'Девушка, что раньше была бы совершенно в моём вкусе, теперь не вызывает в теле ни малейшего отклика',
      );
      era.println();
      await era.printAndWait([
        'Незаметно ',
        you.get_colored_name(),
        ' уже вышел(ла) с этой улицы',
      ]);
      await era.printAndWait([
        'Огромная ночная улица, шумный ночной город — и ни единой вещи, что пробудила бы в ',
        you.get_colored_name(),
        ' хоть какое-то желание',
      ]);
      await era.printAndWait('Всё то, что когда-то занимало');
      await era.printAndWait('Еда, табак и вино, азарт, красотки…');
      await era.printAndWait('Всё то, во что тонул, чем глушил нервы');
      await era.printAndWait('Теперь только делает нервы ещё яснее');
      era.println();
      await era.printAndWait('Хватит. Уже хватит');
      await era.printAndWait(
        'Что угодно, лишь бы дало опьянеть, лишь бы позволило бросить думать — что угодно',
      );
      await era.printAndWait(
        'Никогда не знал, что рассудок может так сводить с ума',
      );
      await era.printAndWait('Насилие, боль, кровь, шрамы');
      await era.printAndWait('Даже это не даёт мне более сильной встряски');
      await era.printAndWait('А это я на каком опыте продал?');
      await era.printAndWait('Уже забыл. Да и неважно');
      era.println();
      await era.printAndWait(
        'Будто деперсонализация: отчаянно ищешь встряски и никак не находишь',
      );
      await era.printAndWait(
        'Так дальше нельзя… сорвусь. И нервы, и тело — всё непременно надломится, порвётся',
      );
      await era.printAndWait('Поэтому до того — что угодно, лишь бы…');
      await era.printAndWait('Что угодно… лишь бы…');
      await tachyon.say_as_unknown_and_wait([callname, '? Ты чего здесь']);
      await tachyon.say_as_unknown_and_wait('…Ох, ну и жалкий же вид');
      await tachyon.say_as_unknown_and_wait(
        'Что такое, на выпивку денег не осталось? Или ставить нечем и из казино выгнали… а может, приглянулась какая-то девушка?',
      );
      await tachyon.say_as_unknown_and_wait('Нужно… ещё денег?');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' тупо смотрит на собеседницу',
      ]);
      await era.printAndWait([
        'Словно шёпот демона, у ',
        you.get_colored_name(),
        ' над самым ухом — мягкий, как вата',
      ]);
      await era.printAndWait('Деньги');
      await era.printAndWait('Ещё денег');
      await era.printAndWait('Ещё больше денег');
      await era.printAndWait('Надо занять ещё больше денег');
      era.println();
      await era.printAndWait('…Почему?');
      await era.printAndWait('Почему хочется денег?');
      await era.printAndWait('Почему надо занимать?');
      await era.printAndWait('Чтобы купить выпивки?');
      await era.printAndWait('Чтобы играть?');
      await era.printAndWait('Чтобы гулять с женщинами?');
      await era.printAndWait('Почему?');
      await era.printAndWait('Почему?');
      era.println();
      await era.printAndWait('Что угодно сгодится');
      await era.printAndWait('Делать можно что угодно');
      await era.printAndWait('Думай же');
      await era.printAndWait('Что сделать, чтобы бросить думать');
      await era.printAndWait('Что сделать, чтобы голова окончательно онемела');
      era.println();
      await era.printAndWait('А-а…');
      await era.printAndWait('А-а!');
      await era.printAndWait('Есть');
      await era.printAndWait(
        'Есть есть есть есть есть есть есть есть есть есть',
      );
      era.println();
      await you.say_and_wait('…Можно… одолжить мне денег?');
      await tachyon.say_as_unknown_and_wait([
        'Конечно можно… но, ',
        callname,
        ', а на что ты берёшь деньги?',
      ]);
      era.println();
      await era.printAndWait('Единственная лазейка, которую она оставила');
      await era.printAndWait('Последняя милость, оставленная мне');
      await era.printAndWait('Расчёт? Заговор? Умысел?');
      await era.printAndWait('Всё это уже неважно');
      era.println();
      await you.say_and_wait(
        'Тахион… можно на эти деньги… попросить тебя провести со мной вечер?',
      );
      era.println();
      await era.printAndWait(
        'В тот миг, как это сказано, пружина, натянутая до предела, наконец отпускает',
      );
      await era.printAndWait('А-а…');
      await era.printAndWait('Только думая о ней, голова получает передышку');
      await era.printAndWait('Только твердя о ней, сердце получает онемение');
      await era.printAndWait('Почему прежний я этого не замечал');
      await era.printAndWait(
        'Почему всё время занимал деньги на бессмысленные вещи',
      );
      await era.printAndWait(
        'Ведь единственный покой для сердца был вот здесь',
      );
      era.println();
      await era.printAndWait([
        'Хочу вместе с ',
        tachyon.get_colored_name(),
        ' поесть',
      ]);
      await era.printAndWait([
        'Хочу вместе с ',
        tachyon.get_colored_name(),
        ' прокатиться',
      ]);
      await era.printAndWait([
        'Хочу вместе с ',
        tachyon.get_colored_name(),
        ' посмотреть на ночной город',
      ]);
      await era.printAndWait([
        'Хочу вместе с ',
        tachyon.get_colored_name(),
        ' заселиться в отель для влюблённых',
      ]);
      await era.printAndWait([
        'Хочу целиком, изнутри и снаружи, стать точь-в-точь как ',
        tachyon.get_colored_name(),
        ' сама',
      ]);
      await era.printAndWait(
        'Чем больше об этом думаешь, тем легче на душе, тем приятнее',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('Хе-хе… умница, умница');
      era.println();
      await era.printAndWait([
        'И вот ',
        you.get_colored_name(),
        ' обрёл(а) настоящее счастье',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_punishment1: (() => {
    const title = 'Запись опыта: превращение в умамусумэ';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      if (era.get('love:32') < 75) {
        await tachyon.say_and_wait('Ого, свинка… нет, свинка-сан пожаловала…');
        await tachyon.say_and_wait(
          'Мм? Откуда знаю? Хе-хе, да, ты тогда был(а) без сознания.',
        );
        await tachyon.say_and_wait('Операцию, между прочим, делала я.');
        await tachyon.say_and_wait(
          'Для тренера неумение — главный грех; по этой части ты злодей злодеев.',
        );
        await tachyon.say_and_wait(
          'Радуйся: благодаря моим опытам у тебя второй шанс.',
        );
        await tachyon.say_and_wait(
          'В конце концов, раз попал(а) в Центральный Трейсен — что-то сильнее других в тебе есть, вопрос лишь, откопают или нет.',
        );
        await tachyon.say_and_wait(
          'Может, став умамусумэ, ты как раз в этом неожиданно талантлив(а)?',
        );
        await tachyon.say_and_wait(
          'Старайся, свинка-сан… барахтайся в этом втором шансе изо всех сил.',
        );
        await tachyon.say_and_wait(
          'Иначе… гарантирую: что будет в следующий раз на операционном столе, ты точно не захочешь испытать… нет, или как раз захочешь?',
        );
        await tachyon.say_and_wait(
          'Когда дойдёт — я тебя как следует приласкаю.',
        );
      } else {
        await tachyon.say_and_wait(`Свинка… нет, ${you.actual_name} -кун.`);
        await tachyon.say_and_wait('Мне жаль, но правило есть правило…');
        await tachyon.say_and_wait('Нет… это моя вина… операцию… делала я.');
        await tachyon.say_and_wait('…Да, хе-хе.');
        await tachyon.say_and_wait(
          'Не бойся… мне всё равно, кем станешь: пока в глазах есть свет — я люблю тебя так же.',
        );
        await tachyon.say_and_wait(
          '…К тому же, став умамусумэ, приёмов тоже прибавится, нет?',
        );
        await tachyon.say_and_wait('Хе-хе, я тебя как следует приласкаю.');
      }
    };
    f.title = title;
    return f;
  })(),
  ws_punishment2: (() => {
    const title = 'Запись опыта: переделка в секс-рабыню';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      const love = era.get('love:32');
      await era.printAndWait('「хлюп… хлюп… чпок… члюп…」');
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait('Тц-тц-тц… свинка-сан, я же предупреждала?');
        await tachyon.say_and_wait('Что будет в следующий раз… хе-хе.');
      } else {
        await tachyon.say_and_wait('Свинка-кун… ну и жалко же.');
        await tachyon.say_and_wait(
          'Позор, даже признавать такого своей парой не хочу.',
        );
      }
      era.println();
      await era.printAndWait('Лаборатория Агнес Тахион.');
      await era.printAndWait(
        'В этот час Агнес Тахион обычно смешивает зелья и ведёт опыты.',
      );
      await era.printAndWait(
        `Но чтобы встретить в новом облике ${you.name}, ${tachyon.sex} специально отменила сегодняшний план и даже сама смешала зелье в честь этого.`,
      );
      era.println();
      await era.printAndWait('「шлёрп… члюп… хлюп… члюк…」');
      era.println();
      await tachyon.say_and_wait('Или это и есть то, чего ты ждал(а)?');
      await tachyon.say_and_wait(
        'Стать секс-рабыней без своей воли, которой играют как хотят?',
      );
      era.println();
      await era.printAndWait(
        'Агнес Тахион раздвигает ноги, лениво развалившись в своём привычном крутящемся кресле.',
      );
      await era.printAndWait(
        `А между ног — ${tachyon.sex}: на корточках женщина с лошадиными ушами — на ней тот же белый халат с длиннющими рукавами, что у Тахион, но чуть другой.`,
      );
      await era.printAndWait(
        'Зад специально вырезан: при каждом дуновении круглая жопа прямо из-под халата на виду.',
      );
      await era.printAndWait(
        'На груди два неровных отверстия, будто выеденных зельем, — соски полностью на воздухе.',
      );
      await era.printAndWait(
        'Бельё? По голому мясу в разрезе халата, который нельзя застегнуть, и так ясно: его нет.',
      );
      await era.printAndWait(
        'Умамусумэ в наряде похлеще любой секс-игрушки без остановки водит головой вперёд-назад, глотая огромный член между ног Агнес Тахион.',
      );
      if (era.get('cflag:32:性别') === 0) {
        await era.printAndWait(
          'Орган, которого у умамусумэ быть не должно, — дело зелий Агнес Тахион.',
        );
        era.println();
        await tachyon.say_and_wait(
          'Хе-хе… благодаря моей серии Furlong P ты как следует прочувствуешь, что должна делать секс-рабыня: обе самки — скучно, правда?',
        );
        era.println();
        await era.printAndWait(
          `Умамусумэ на корточках — то есть ${you.name} — не слышит ничего, только без конца обслуживает тварь перед лицом.`,
        );
        await era.printAndWait(
          'Называть вас обеих самками, может, объективно и неточно, но вывод почти тот же.',
        );
        await era.printAndWait(
          `Ведь кто бы ни увидел у ${you.name} орган, что даже на пределе всё ещё короче привязанного сверху виброяйца: никто не признает, что так выглядит нормальный самцовый орган для оплодотворения самок; если уж называть… да, клитор подойдёт куда лучше.`,
        );
      }
      era.println();

      await era.printAndWait([
        `Вдруг, преданно обслуживая `,
        tachyon.uma_sex_title,
        ` хозяйку, ${you.name} дрожит всем телом.`,
      ]);
      await era.printAndWait([
        `У ${you.name} между ног «клитор» — даже на пределе эрекции мельче одного яйца хозяйки-`,
        tachyon.uma_sex_title,
        ` — выплёскивает сегодня четвёртый залп, жижу тонкую как вода.`,
      ]);
      await era.printAndWait('И это немного злит хозяйку перед тобой.');
      era.println();

      if (love < 75) {
        await tachyon.say_and_wait(
          'Только своё удовольствие, даже простой минет не вытягиваешь… даже секс-рабыней ты — провал.',
        );
        era.println();

        await era.printAndWait([
          `${you.name} спешишь прийти в себя и снова обслуживать свою подопечную `,
          tachyon.uma_sex_title,
          ` — и хозяйку.`,
        ]);
        await era.printAndWait(
          `Но вечно нетерпеливая ${tachyon.sex} уже сыта по горло: ${you.name} так криво обслуживает.`,
        );
        await era.printAndWait(
          `${tachyon.sex} встаёт и ещё глубже вгоняет тварь из-за паха тебе, ${you.name}, в глотку.`,
        );
        await era.printAndWait([
          'Огромная мошонка бьёт тебя, ',
          you.get_colored_name(),
          ', по подбородку; тяжёлая тёплая тяжесть внутри обещает, сколько белой жижи вот-вот хлынет тебе, ',
          you.get_colored_name(),
          ', в рот.',
        ]);
        era.println();

        await tachyon.say_and_wait(
          'Кстати, свинка… нет, секс-рабыня-кун, помнишь ли ты.',
        );
        era.println();

        await era.printAndWait(
          `Нарочно снова «кун» после «секс-рабыня» — и ${you.name} уже не держится: от этой вывернутой иерархии ещё жарче, а «клитор» снизу с тех пор течёт как сломанный кран — прозрачная водянистая жижа.`,
        );
        era.println();

        await tachyon.say_and_wait(
          'Операцию по переделке делала я, так что твои чувствительные точки я знаю лучше всех в мире.',
        );
        era.println();

        await era.printAndWait(
          `К примеру, ${tachyon.sex} резко тычет тебе, ${you.name}, в глотку — несколько раз, будто ищет что-то.`,
        );
        await era.printAndWait(
          `Под такой грубостью ${you.name} снова осознаёт: ты лишь вещь, прибор, чтобы слить похоть.`,
        );
        await era.printAndWait(
          `Пока тычет, задевает что-то — ${you.name} глоткой резко сжимается, а низ спереди и сзади без остановки фонтанирует соком.`,
        );
        era.println();

        await tachyon.say_and_wait(
          'А-а, нашла: вот она, чувствительная точка в горле.',
        );
        await tachyon.say_and_wait(
          'Попади сюда — кайф не слабее тысячи мужских оргазмов… хе-хе, хотя тебе уже незачем знать, каково быть мужчиной.',
        );
        era.println();

        await era.printAndWait(
          `Слушать уже нечем, ${you.name} всю силу тратит только на то, чтобы устоять под приходящим приливом кайфа.`,
        );
        await era.printAndWait(
          `Не выложишься — каждая волна превратит ${you.name} в фонтан, что рухнет на пол и уже не остановится.`,
        );
        await era.printAndWait('А такая волна — всего один ход члена хозяйки.');
        await era.printAndWait(
          `Кайф копится, копится — и ${you.name} всем телом сводит мышцы, а глотка сжимается до уровня именитой дырки.`,
        );
        era.println();

        await tachyon.say_and_wait(
          'Оо…! Вот эта теснота! Сейчас выйдет — прими как следует!',
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex} жёстко хватает ${you.name} за голову и яростно долбит туда-сюда.`,
        );
        await era.printAndWait(
          'Обычное человеческое тело от такого и правда могло бы не выжить.',
        );
        await era.printAndWait(
          `К счастью или нет — сейчас ${you.name} уже умамусумэ, да ещё и с особой переделкой.`,
        );
        await era.printAndWait(
          `Поэтому какой бы жёсткой ни была игра, ${you.name} телом выдержит и целиком переплавит это в кайф.`,
        );
        await era.printAndWait(
          `Даже боль удушья у ${you.name} тело само переплавляет в кайф; и постепенно ${you.name} уже тянется к этому ощущению.`,
        );
        await era.printAndWait(
          `${you.name} глоткой встречаешь каждый ход хозяйки и поджимаешься — нет, не «словно»: ${you.name} — вот она, именитая дырка!`,
        );
        era.println();

        await tachyon.say_and_wait('Прими. Прольёшь — конец тебе.');
        era.println();

        await era.printAndWait(
          'После холодного приказа — жгучий поток белой жижи.',
        );
        await era.printAndWait(
          `Огромный объём забивает тебе, ${you.name}, рот, нос, глотку, язык целиком — ещё миг, и хлынет наружу…`,
        );
        await era.printAndWait([
          `${you.name} спешно глотаешь уже полную рот вонючую жижу, но ${you.name} так и не может вместить все дары `,
          tachyon.uma_sex_title,
          `-госпожи.`,
        ]);
        await era.printAndWait([
          `В конце концов… ${you.name} может только беспомощно ловить руками драгоценную сперму `,
          tachyon.uma_sex_title,
          `-госпожи.`,
        ]);
        era.println();

        await era.printAndWait(
          'И всё равно толстый ствол во рту без остановки стреляет дальше.',
        );
        await era.printAndWait(
          `Долго без воздуха: даже ${you.name}, даже крепкое тело умамусумэ не вытягивает до конца; постепенно ${you.name} плывёт сознанием…`,
        );
        era.println();

        await era.printAndWait('「Бах!」');
        era.println();

        await era.printAndWait([
          'Вдруг резкая боль — и ',
          you.get_colored_name(),
          ' срывается в явь.',
        ]);
        await era.printAndWait(
          `${you.name} хочешь крикнуть, но раскрытую глотку сразу заливает ещё больше белой жижи.`,
        );
        await era.printAndWait([
          `${you.name} поднимаешь голову — перед тобой ноги той, кто твоя подопечная `,
          tachyon.uma_sex_title,
          ' и хозяйка.',
        ]);
        await era.printAndWait(
          'Та прекрасная стопа, которую ты холил(а) и берёг(ла) больше своих ног.',
        );
        await era.printAndWait(
          `Теперь без жалости давит ${you.name} на живот.`,
        );
        era.println();

        await tachyon.say_and_wait('Способности секс-рабыни… полный завал.');
        await tachyon.say_and_wait('Надо как следует выдрессировать…');
        era.println();

        await era.printAndWait(
          `Оставшаяся не проглоченная белая жижа покрывает ${you.name} всего: одежда тоже неизбежно в густой жиже.`,
        );
        era.println();

        await tachyon.say_and_wait(
          'Нормальную лабораторию ты довёл(а) до такого… тц, невыносимо.',
        );
        era.println();

        await era.printAndWait(
          `Тахион говорит с брезгливостью; вдруг, будто пришла мысль, наклоняется к ${you.name} и шепчет.`,
        );
      } else {
        await tachyon.say_and_wait(
          'Только такая водянистая жижа — какой смысл в этом бесполезном органе.',
        );
        await tachyon.say_and_wait(
          'Слушай, свинка-кун, может, мне искать другого самца, который меня насытит… при тебе-то сейчас кого ещё насытишь.',
        );
        era.println();

        await era.printAndWait(
          `Услышав это, ${you.name} спешно ещё усерднее обслуживает ту, кто для ${you.name} любовница и госпожа, и молит не бросать тебя.`,
        );
        await era.printAndWait(
          `${tachyon.sex} довольно хлопает ${you.name} по голове и поощряет служить ещё усерднее.`,
        );
        era.println();

        await tachyon.say_and_wait('Так боишься, что бросят? Умница, умница.');
        await tachyon.say_and_wait(
          'Не волнуйся, я не дам другим трогать моё тело… но как любовники удовлетворять похоть друг друга — тоже обязанность, нет?',
        );
        era.println();

        await era.printAndWait(
          `Под ласковые слова ${tachyon.sex} хлопает ${you.name} по жопе — знак.`,
        );
        await era.printAndWait(
          `${you.name} сразу покорно поворачиваешься задом к хозяйке и сам(а) раздвигаешь вход, что сделали из тебя самку.`,
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex} встаёт и по самую глубь загоняет гигант в ${you.name} — в уже мокрую киску.`,
        );
        await era.printAndWait(
          `Тяжёлая мошонка шлёпается о круглую жопу ${you.name}; густая тёплая тяжесть сулит, сколько белой жижи хлынет в ${you.name} дырке.`,
        );
        await era.printAndWait(
          `В миг входа ${you.name} невольно стонет, а хозяйка за спиной довольно выдыхает.`,
        );
        era.println();

        await tachyon.say_and_wait(
          'Хе-хе, даже став секс-рабыней, наши тела всё так же идеально сходятся.',
        );
        await tachyon.say_and_wait(
          'Впрочем, иначе и быть не могло: тело свинки-куна переделала я — всё под мои мерки.',
        );
        era.println();

        await era.printAndWait('Твоё тело — скроено хозяйкой под себя.');
        await era.printAndWait('Ты — персональная секс-рабыня хозяйки.');
        era.println();

        await era.printAndWait(
          `От этой мысли ${you.name} ещё горячее, киска невольно сжимается.`,
        );
        era.println();

        await tachyon.say_and_wait(
          'Мм… вдруг так тесно — что, эти слова тебя завели? Даже в таком положении — видимо, раньше я была нечуткой и не заметила твоего желания.',
        );
        era.println();

        await era.printAndWait(
          `Сказав это, толчки сзади всё жёстче и яростнее, ${you.name} с полуслова подаётся назад, готовая принять награду хозяйки.`,
        );
        era.println();

        await tachyon.say_and_wait('Выходит… лови!');
        era.println();

        await era.printAndWait(
          `${tachyon.sex} сильно шлёпает ладонью ${you.name} по жопе — мясо ходит волнами, а ${you.name} невольно стонет, и это ещё подстёгивает хозяйку.`,
        );
        await era.printAndWait(
          `В конце, под дрожь оргазма ${you.name}, раскалённый член заливает внутрь ${you.name} густую белую жижу.`,
        );
        await era.printAndWait(
          `${you.name} с сытостью внутри проваливаешься во тьму…`,
        );
        era.println();

        await tachyon.say_and_wait(
          'Эй-эй, это же всё вытекает? Нормальную лабораторию ты довёл(а) до такого…',
        );
        era.println();

        await era.printAndWait(
          `Услышав недовольный голос хозяйки, ${you.name} мгновенно приходит в себя.`,
        );
        await era.printAndWait(
          `Глядя на семя хозяйки, что сам(а) расплескал(а) на пол, ${you.name} в панике выбирает самый нерасходный способ…`,
        );
        era.println();

        await tachyon.say_and_wait(
          'Хорошо-хорошо, хорошенько вылизать — вот умница.',
        );
        era.println();

        await era.printAndWait(
          `Хозяйка гладит ${you.name}, что на полу лижет семя как щенок, — и ${you.name} от радости лижет ещё яростнее.`,
        );
      }
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait(
          `Вернусь через десять минут; если к тому времени здесь не убрано — будет『наказание』.`,
        );
      } else {
        await tachyon.say_and_wait('Мм… есть идея');
        await tachyon.say_and_wait(
          'Умница, вернусь через десять минут; если не убрано —『наказание』.',
        );
      }
      await tachyon.say_and_wait('Если убрано — будет『награда』.');
      if (love < 75) {
        await tachyon.say_and_wait(
          'Что выберешь — решай сам(а), секс-раб『кун』~',
        );
      } else {
        await tachyon.say_and_wait('Что выберешь — решай сам(а)~');
        await tachyon.say_and_wait(
          'Но не волнуйся: в любом случае я тебя хорошенько приласкаю❤️',
        );
      }
      era.println();

      await era.printAndWait(
        'Сказав это, Тахион надевает штаны и уходит из лаборатории.',
      );

      if (love < 75) {
        await era.printAndWait(
          `На полу, живот как шар, с уголка рта всё течёт белая жижа: ${you.name} беспомощно пыхтит в комнате.`,
        );
        await era.printAndWait(
          `Награда или наказание… ${you.name} смотрит на шкаф для щёток в углу.`,
        );
      } else {
        await era.printAndWait(
          `На полу, живот как шар, всё ещё бьёт белой жижей наружу: ${you.name} бессильно подметает пол.`,
        );
        await era.printAndWait(`Награда или наказание…`);
      }
      await era.printAndWait('Итак, как решить?');
    };
    f.title = title;
    return f;
  })(),
  ws_punishment3: (() => {
    const title = 'Журнал опыта: чрево-мешок и жидкости нескольких умамусумэ';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk|false} child 爱丽速子和玩家的孩子，不存在时为 false
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_5 爱丽速子对富士奇石的称呼
     * @param {PrintedSpan} call_9 爱丽速子对大和赤骥的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} call_36 爱丽速子对空中神宫的称呼
     * @param {PrintedSpan} call_94 爱丽速子对森林宝穴的称呼
     */
    const f = async (
      tachyon,
      child,
      you,
      call_5,
      call_9,
      call_25,
      call_36,
      call_94,
    ) => {
      await tachyon.say_and_wait('Хм-хм-хм~~');
      era.println();

      await era.printAndWait(
        'Агнес Тахион весело напевает, идя по знакомому коридору.',
      );
      await era.printAndWait(
        'Обычно этот этаж студенты обходят из-за лаборатории, откуда прёт странными зельями… хотя в последнее время снова чуть ожил.',
      );
      await era.printAndWait(
        `И всё же ${tachyon.sex} проходит мимо своей лаборатории и останавливается у шкафа для щёток.`,
      );
      era.println();

      await tachyon.say_and_wait([
        'Тц-тц… и правда без жалости. Не я ли недооценила похоть обычной ',
        tachyon.uma_sex_title,
        '.',
      ]);
      era.println();

      await era.printAndWait(
        `В шкафу для щёток — мутный взгляд, кляп во рту, живот вздут, в нижних дырках два гиганта затыкают дырки, всё тело в смазке и сперме, по коже засечки и похабщина: ${you.name}.`,
      );
      era.println();

      await tachyon.say_and_wait('Свинка-кун? Проснись.');
      era.println();

      await era.printAndWait(
        `${tachyon.sex} зовёт ${you.name} своим обращением, но после трёх суток игр ${you.name} всё ещё смотрит в муть: силится ответить — а взгляд пустой, в пустоту.`,
      );
      era.println();

      await era.printAndWait([
        'Глядя на эту жалкую картину, ',
        tachyon.get_colored_name(),
        ' не проявляет ни жалости, ни сочувствия.',
      ]);
      await era.printAndWait(
        `${tachyon.sex} без жалости поднимает ногу и наступает ${you.name} на живот.`,
      );
      await era.printAndWait(
        `В миг, когда наступили, ${you.name} сворачивается креветкой, но всё равно плотно прижат(а) под ногой: уже вздутый живот в этот миг — как шар, из которого силой выпустили воздух; из нижних дырок выплёвывает два вибратора, что затыкали дырки, а следом — полный живот смазки и спермы; свернувшись, ${you.name} дрожит всем телом и в эту секунду кончает ещё раз; короткий членик тоже выдавливает жидкие факторы.`,
      );
      era.println();

      await tachyon.say_and_wait(
        'Неплохо: такого объёма хватит на опыты ещё надолго.',
      );
      era.println();

      await era.printAndWait([
        `Тахион довольно смотрит на стакан, который успела выхватить в миг фонтана: полный только что собранных `,
        tachyon.uma_sex_title,
        ` жидкостей; но даже этот стакан не тянет и на треть того, что вышло из дырки ${you.name} — больше расплескалось на пол и стало головной болью уборщиков.`,
      ]);
      await era.printAndWait('Впрочем, кто устроил — тот и убирает: логично.');
      era.println();

      await tachyon.say_and_wait('Свинка-кун~ этот опыт — большой успех~');
      era.println();

      await era.printAndWait(
        'Тахион, будто ничего не было, возбуждённо делится опытом.',
      );
      await era.printAndWait(
        `Но… «ничего не было» — лишь ${you.name} наивный самообман.`,
      );
      era.println();
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_25,
          ` и вправду зажатая похотливица… я ещё думала, ${tachyon.sex} откажется от таких игр, а в итоге…`,
        ]);
        era.println();
        await era.printAndWait(
          `Тахион ведёт рукой по шее ${you.name} — следы охотничьей собаки, — до плеча, потом… рука вниз, к груди в следах зубов; на сосках укусы особенно явные.`,
        );
        await era.printAndWait(
          `От одного касания ${you.name} снова дрожит: чуть потрогать плюс картинка в голове — и нынешней ${you.name} уже хватает, чтобы кончить.`,
        );
        era.println();
      }
      if (era.get('cflag:94:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_94,
          ' тоже… сначала такая застенчивая…',
        ]);
        era.println();

        await era.printAndWait(
          `${tachyon.sex} теребит ${you.name} за губы: кляп всё ещё во рту, звука нет; слегка опухшие губы сами говорят Тахион, сколько пытки они вынесли за эти дни.`,
        );
        era.println();

        await tachyon.say_and_wait([
          call_94,
          ' — голос: даже из лаборатории я слышала всё как на ладони.',
        ]);
        era.println();
      }
      if (era.get('cflag:9:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_9,
          '…хе-хе, как и ждала от той, на кого ставила: и в этом — первая.',
        ]);
        era.println();

        await era.printAndWait(
          'Ещё не проверяла, но в том стакане процентов семьдесят — наверное, от одной Дайвы.',
        );
        await era.printAndWait([
          `Настойчивость быть первой даже в сексе сделала так, что ${tachyon.sex} эти три дня провела верхом на ${you.name} дольше всех из `,
          tachyon.uma_sex_title,
        ]);
        era.println();
      }
      if (era.get('cflag:5:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'И ещё ',
          call_5,
          ' тоже приняла предложение на опыт; тц-тц, не думала, что у нашей свинки-куна такой вес — даже староста общежития не ушла от лап.',
        ]);
        era.println();

        await era.printAndWait(
          'Агнес Тахион гладит внутреннюю сторону бёдер свинки: ноги в засечках-пятёрках, четыре ряда особым почерком слегка светятся — артист всегда с пафосом, даже когда ставит палочки.',
        );
        era.println();
      }
      if (era.get('cflag:36:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'Тц-тц, каждый день твердишь про логику-логику, а в сексе весь разум забываешь… ',
          call_36,
        ]);
        era.println();

        await era.printAndWait(
          ` Тахион гладит жопу ${you.name}: эти дни дырку до красноты разъебал в основном член Шакур; будь всё по логике, кончать в дырку без всякого смысла для деторождения — самое нелогичное, но за эти три дня ${tachyon.sex} пахала без остановки так, что ${you.name} и спросить не смеет — да и случая не было.`,
        );
        era.println();
      }
      if (child) {
        const callname_c =
          era.get(`cflag:${child.id}:父方角色`) === 0 ? 'папа' : 'мама';
        await tachyon.say_and_wait([
          child.get_colored_name(),
          '…точно, это ',
          child.sex_code === 1 ? ' мой сын' : 'моя дочь',
          ' — так быстро без учителя освоил(а)『 ',
          callname_c,
          ' 』-дырку… дети, сильная жадность на своё — можно понять.',
        ]);
        era.println();

        await era.printAndWait([
          'Тахион шлёпает ',
          you.get_colored_name(),
          ' по жопе: там детским почерком『 ',
          callname_c,
          ' — мой личный туалет』, и неизвестно, понял ли ребёнок смысл… слышишь, как Тахион читает это вслух, и думаешь: если писал, понимая… ',
          you.get_colored_name(),
          ' снова невольно кончает.',
        ]);
        era.println();
      }
      if (era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
        await tachyon.say_and_wait(
          'Жалко ребёнка в твоём животе… мать — такая всеобщая шлюха; будь я на его месте — лучше утопиться в сперме.',
        );
        era.println();

        await era.printAndWait(
          'Тахион снова сильно наступает, с насмешкой и презрением.',
        );
        era.println();
        await tachyon.say_and_wait(
          'Радуйся: тело умамусумэ крепкое, так что даже так я врежу только тебе, ребёнку — ничего… но тебе, наверное, плевать, шлюхе, которой нужен только член.',
        );
        era.println();
        await era.printAndWait(
          `${you.name} хочешь возразить, но фонтан снизу не даёт.`,
        );
        era.println();
      }
      await tachyon.say_and_wait(
        'А это всё — следы тех, кто『когда-то』 тебя обожал.',
      );
      era.println();
      await era.printAndWait([
        `Тахион проводит пальцами по ${you.name} : на теле『сука』, 『туалет — 10 иен』, 『`,
        tachyon.uma_sex_title,
        `-госпожи спермотуалет』, 『секс-дерби, 18-е』.`,
      ]);
      await era.printAndWait([
        'Каждая строка — от ',
        tachyon.uma_sex_title,
        ', у которых любовь к обожаемому тренеру, ставшему похотливой кобылой — беременной шлюхой, обернулась ненавистью, а ненависть — похотью.',
      ]);
      era.println();
      await tachyon.say_and_wait('Но тебе же было хорошо, мм?');
      era.println();
      await era.printAndWait('На лице Тахион — садистская улыбка.');
      era.println();
      await tachyon.say_and_wait([
        'Глядя, как ты кончаешь: когда писали — просил(а), чтобы ',
        tachyon.couple_title,
        ' читали тебе слово за словом? Мм? Шлюха, дешёвая сука, свинья, что ради спермы лижет обувь на коленях?',
      ]);
      era.println();
      await era.printAndWait(
        `На каждое слово ${you.name} снизу невольно бьёт фонтан.`,
      );
      await era.printAndWait(
        `Так что у ${you.name} любое сопротивление становится фальшивым «не надо, но ещё».`,
      );
      era.println();
      if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait('Шучу.');
        era.println();
        await era.printAndWait(
          `Вдруг Тахион берёт ${you.name} за лицо и мягко снимает кляп, что затыкал рот ${you.name}.`,
        );
        await era.printAndWait(
          `Сняли — и от ударов до этого плюс то, что в животе ${you.name} ещё не вышло дочиста, так что ${you.name} невольно блюёт на Тахион: сперма, смазка, желудочный сок — всё.`,
        );
        era.println();
        await era.printAndWait(
          `Видя, как запачкал(а) белый халат Тахион, ${you.name} бледнеет: не только от игр до этого, но и от собственного неуважения.`,
        );
        era.println();

        await tachyon.say_and_wait('…Ничего, свинка-кун.');
        era.println();
        await era.printAndWait(
          `Тахион чистым от блевотины рукавом мягко вытирает ${you.name} рот.`,
        );
        era.println();
        await tachyon.say_and_wait(
          'Я же говорила: не брошу тебя, кем бы ты ни стал(а).',
        );
        era.println();
        await era.printAndWait(
          `Не дав ${you.name} опомниться, ${tachyon.sex} целует ${you.name} в губы — не глядя, сколько пытки эти губы вынесли за дни, сколько ртов их пачкало, сколько только что вышло наружу.`,
        );
        await era.printAndWait('Нежный, тёплый, принимающий поцелуй.');
        await era.printAndWait(
          `Незаметно ${you.name} чувствует, будто снова в прежних днях.`,
        );
        era.println();

        await era.printAndWait('…Но только будто.');
        era.println();

        await era.printAndWait(
          `${you.name} смотришь под белый халат Тахион: там всё явственнее вздувается — и вспоминаешь, кто ты.`,
        );
        await era.printAndWait(
          `Тахион тоже замечает и смущённо ${you.name} улыбается..`,
        );
        era.println();

        await tachyon.say_and_wait('Можно, свинка-кун?');
        era.println();

        await era.printAndWait(
          `${you.name} не отвечаешь, только покорно падаешь на четвереньки — первая сегодняшняя служба.`,
        );
      } else {
        await tachyon.say_and_wait('После всего этого ещё оправдываться?');
        era.println();

        await era.printAndWait(`Тахион грубо срывает кляп у ${you.name}.`);
        await era.printAndWait(
          `Сняли — и от ударов до этого плюс то, что в животе ${you.name} ещё не вышло дочиста, так что ${you.name} невольно тянет блювать на Тахион: сперма, смазка, желудочный сок — дочиста.`,
        );
        await era.printAndWait('Однако…');
        era.println();

        await tachyon.say_and_wait('Что собрался(лась) делать, свинка-кун.');
        era.println();

        await era.printAndWait('Ах, надо было знать.');
        await era.printAndWait(
          `${tachyon.sex} с какой стати была бы так добра, чтобы снять кляп тебе в кайф.`,
        );
        await era.printAndWait(
          `В миг, когда ${you.name} открывает рот, ${tachyon.sex} гигантом между ног затыкает всё, что хотел(а) выблевать, — и слова тоже.`,
        );
        era.println();
        await tachyon.say_and_wait(
          'Эти дни была занята опытами — сама ещё не пользовалась.',
        );
        era.println();
        await era.printAndWait(
          `Вонючий, даже с мочой гигант затыкает горло ${you.name}.`,
        );
        await era.printAndWait(
          `${tachyon.sex} грубо пользуется ${you.name} ртом и языком, будто это неодушевлённый онкенхол.`,
        );
        await era.printAndWait('Без чувств — чисто слить похоть.');
        era.println();
        await tachyon.say_and_wait(
          'Фух, выходит-выходит, лови, а то потом… ладно, пол всё равно ты убираешь.',
        );
        era.println();
        await era.printAndWait(
          `Тахион без церемоний заливает рот ${you.name} и, не задерживаясь, возвращается в лабораторию к сегодняшним опытам.`,
        );
        await era.printAndWait(
          `Закончив первую сегодняшнюю службу, ${you.name} смотрит пустыми глазами в пустоту и думает, как всё дошло до этого.`,
        );
        await era.printAndWait(
          '…Но и это бессмысленно: как сказали во время операции по переделке — пути назад нет.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' с трудом глотаешь белую жижу, что копилась во рту три дня, и смотришь на пол коридора, который сам(а) испачкал(а)…',
        ]);
        era.println();
        if ((await degeneration_to_evil('Ртом', 'Шваброй')) === 1) {
          await era.printAndWait(
            'Раз пути назад нет — лучше сразу бросить разум и наслаждаться.',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' падаешь на четвереньки и лижешь следы за три дня от ',
            you.get_colored_name(),
            '.',
          ]);
          await era.printAndWait('Почему?');
          await era.printAndWait([
            'Потому что если ',
            tachyon.uma_sex_title,
            ' -госпожи увидят, что чистишь инструментом, станет ещё хуже?',
          ]);
          await era.printAndWait(
            'Потому что такое унижение сильнее мотивирует вырваться?',
          );
          await era.printAndWait(
            'Или… правда, как сказала Тахион: ты — дешёвка, которая ради спермы и члена готова лизать пол?',
          );
          era.println();
          await era.printAndWait('Причины уже неважны.');
          await era.printAndWait([
            'Лёжа на полу, ',
            you.get_colored_name(),
            ' сейчас глазами, ушами, ртом ловит только белую жижу на полу, на теле, текущую из всех дырок, куда можно вставить.',
          ]);
          era.println();
          await era.printAndWait('「тук… тук…」');
          await era.printAndWait([
            you.uma_sex_title,
            ' чуткие уши дают ',
            you.get_colored_name(),
            ' услышать: по коридору сюда идёт кто-то.',
          ]);
          await era.printAndWait([
            'И снова какой ',
            tachyon.uma_sex_title,
            ' -госпоже нужно твоё служение.',
          ]);
          await era.printAndWait([
            'И незаметно ',
            you.get_colored_name(),
            ' сам(а) задирает жопу, ждёт следующего гостя.',
          ]);
        } else {
          await era.printAndWait(
            'Тело уже переделано — но хотя бы дух не сдавать.',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' с трудом поднимаешься на ноги — даже будучи ',
            you.uma_sex_title,
            ' телом, для ',
            you.get_colored_name(),
            ' после трёх суток игр это всё равно тяжёлый жест — достаёт из шкафа щётки, что за эти дни пропитались ',
            you.get_colored_name(),
            ' и всякими ',
            tachyon.uma_sex_title,
            ' жидкостями, и чистишь свои следы на полу.',
          ]);
          era.println();
          await era.printAndWait([
            'Хотя одного подъёма и стимула подошв хватает, чтобы ',
            you.get_colored_name(),
            ' сорваться в малый оргазм.',
          ]);
          await era.printAndWait([
            'Хотя до сих пор у ',
            you.get_colored_name(),
            ' из киски и жопы без остановки течёт смесь спермы и смазки и только добавляет ',
            you.get_colored_name(),
            ' мороки с уборкой.',
          ]);
          await era.printAndWait(
            'Хотя при виде тупого черенка метлы и его запаха хочется забить им киску, пустую уже целых пять минут.',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' всё же упрямо стоишь и метлой с совком делаешь бесполезную уборку.',
          ]);
          await era.printAndWait(
            'Ты — человек, не умамусумэ, не секс-рабыня, не чрево-мешок.',
          );
          await era.printAndWait([
            'Такое упрямство всё ещё живёт в сердце ',
            you.get_colored_name(),
            '.',
          ]);
          await era.printAndWait('Однако…');
          era.println();
          await era.printAndWait('「тук… тук…」');
          await era.printAndWait([
            you.uma_sex_title,
            ' чуткие уши дают ',
            you.get_colored_name(),
            ' точно поймать: по коридору сюда идёт кто-то.',
          ]);
          await era.printAndWait(
            'Сегодняшний пользователь? Вопрос риторический — кроме этой цели мало кто сунется в коридор, где то и дело утекают препараты.',
          );
          await era.printAndWait([
            'Но ',
            you.get_colored_name(),
            ' всё же упрямо стоит, делает вид, что не слышит, и держит человеческую гордость.',
          ]);
          era.println();
          await era.printAndWait([
            '——пусть даже через пять минут ',
            you.get_colored_name(),
            ' сам(а) это бросит.',
          ]);
        }
        era.setColor();
      }
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon 爱丽速子
   * @param {PrintedSpan} callname 爱丽速子对玩家的称呼
   * @param {boolean} hentai 是否有变态行为（有则是身败名裂结局，否则是扫地出门）
   * @param {boolean} has_plan 是否已选择 Plan A or B
   * @param {boolean} plan_b 是否进入 Plan B
   */
  async end_talk(tachyon, callname, hentai, has_plan, plan_b) {
    if (hentai) {
      if (
        !has_plan &&
        era.get('love:32') < 75 &&
        era.get('cflag:32:育成次数') === 0
      ) {
        await tachyon.say_and_wait(
          'Всё упирается в то, что ниже пояса? Смешной повод… Впрочем, если в следующий раз снова соберёшься что-нибудь учинить — приходи ко мне. Ради тех глаз, так уж и быть.',
        );
      } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
        if (!plan_b) {
          await tachyon.say_and_wait(
            'Даже мечта, ведущая за грань возможного, не смогла заполнить твоё поле зрения целиком? Если дело не в глупости, то, стало быть, передо мной честолюбец, каких ещё не бывало.',
          );
        } else {
          await tachyon.say_and_wait([
            'Отчаяние после рухнувшей мечты? Или просто удобный предлог, чтобы отделаться от ',
            tachyon.uma_sex_title,
            ', у которой впереди уже нет дороги?',
          ]);
        }
      } else if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait([
          'Прости-прости, ',
          callname,
          ', похоже, мы немного перегнули палку… В следующий раз будем поаккуратнее.',
        ]);
      } else if (era.get('cflag:32:育成次数') > 0) {
        await tachyon.say_and_wait([
          'Ой-ой-ой, похоже, в этот раз мы доигрались, ',
          callname,
          '… В следующий раз не забудь быть поосторожнее.',
        ]);
      }
    } else if (
      !has_plan &&
      era.get('love:32') < 75 &&
      era.get('cflag:32:育成次数') === 0
    ) {
      await tachyon.say_and_wait(
        'Скучная свинка… Впрочем, если в следующий раз снова соберёшься что-нибудь учинить — приходи ко мне. Ради тех глаз, так уж и быть.',
      );
    } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
      if (!plan_b) {
        await tachyon.say_and_wait(
          'Заманить меня на эту дорогу — и уйти в одиночку? Что ж, за гранью предела всё равно идут поодиночке.',
        );
      } else {
        await tachyon.say_and_wait([
          'Считай, это тебе урок. Впредь не цепляйся за бесполезных людей… А ',
          tachyon.sex,
          ' — её путь впереди я досмотрю до конца, и за тебя тоже.',
        ]);
      }
    } else if (era.get('love:32') >= 75) {
      await tachyon.say_and_wait(
        'Как только этот эксперимент закончится, я приду за тобой. А до тех пор считай это долгим отпуском от меня.',
      );
    } else if (era.get('cflag:32:育成次数') > 0) {
      await tachyon.say_and_wait([
        'Ой-ой-ой, похоже, в этот раз мы доигрались, ',
        callname,
        '… В следующий раз не забудь быть поосторожнее.',
      ]);
    }
  },
};
