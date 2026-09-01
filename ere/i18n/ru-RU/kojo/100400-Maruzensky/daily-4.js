/**
 * @file 丸善斯基 - 日常
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  good_morning(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say('Н-нг~ дай ещё поспать');
          maru.say('Вчера зачиталась мангой допоздна');
          era.print([
            you.get_colored_name(),
            ` с досадой будишь ${maru.name} и у ростового зеркала ${maru.sex} — расчёсываешь ей волосы`,
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say('Голова кругом… в таком виде младшим показываться нельзя');
          era.print([maru.get_colored_name(), ' кажется, ещё сонная']);
        });
      }
    } else {
      buffer.push(() => {
        maru.say('Какой сегодня план тренировок?');
        maru.say([
          maru.sex_code === 1 ? 'красавчик' : 'красотка',
          'я уже готова',
        ]);
        era.print(`${maru.name} вся так и рвётся вперёд`);
      });
      buffer.push(() => {
        maru.say('По траве нестись — одно удовольствие');
        maru.say(`Ого, это же ${callname}.`);
        era.print([
          'Когда ',
          you.get_colored_name(),
          ' вовремя приходит на дорожку, ',
          maru.get_colored_name(),
          ' уже пробежала несколько кругов',
        ]);
      });
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(`${callname} доброе утро⭐`);
          maru.say('…Почему я прибежала в соседнюю комнату тебя будить?');
          maru.say(
            `Разве не счастье — когда тебя будит ласковая старшая ${
              maru.elder_sibling_sex_title
            }?`,
          );
          era.print([
            maru.get_colored_name(),
            ' сдёргивает с ',
            you.get_colored_name(),
            ' одеяло и торопит ',
            you.get_colored_name(),
            ' умыться',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(() => {
          maru.say(
            `${callname} — кажется, в тебе ещё дремлет нераскрытый потенциал`,
          );
          maru.say('Пока слабо, но скоро должно прорезаться');
          era.print([
            maru.get_colored_name(),
            ' задумчиво рассматривает ',
            you.get_colored_name(),
          ]);
        });
        buffer.push(() => {
          maru.say(
            `${callname} если что-то гложет — может сказать ${
              maru.elder_sibling_sex_title
            } мне`,
          );
          maru.say(
            'Если всё держать в себе — даже отмычка не войдёт в заржавевший замок',
          );
          era.print([
            maru.get_colored_name(),
            ' смотрит с тревогой на ',
            you.get_colored_name(),
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say(
            ' Когда бежит на полную, всегда какое-то странное чувство? Легко, будто плывёт над травой.',
          );
          maru.say(`…А, ${callname} доброе утро`);
          era.print(`По траве бежит ${maru.name} — задумалась`);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  select(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      buffer.push(() => {
        maru.say('『Этого мало. Ты можешь лучше』');
        maru.say(`Эм. Если это просьба ${callname}…`);
        era.print([
          maru.get_colored_name(),
          ' смотрит со смешанным чувством на ',
          you.get_colored_name(),
        ]);
      });
    } else {
      buffer.push(
        () => {
          era.print([
            maru.get_colored_name(),
            ' наслаждается ветром в лицо на бегу.',
          ]);
          maru.say(
            `Если у ${callname} есть забота — можно сказать ${
              maru.elder_sibling_sex_title
            } мне`,
          );
          era.print([
            maru.get_colored_name(),
            ' с широкой улыбкой смотрит на ',
            you.get_colored_name(),
          ]);
        },
        () => {
          maru.say(
            ` Какой сегодня план тренировок? Что бы ни было — ${
              maru.elder_sibling_sex_title
            } справится с лёгкостью`,
          );
          era.print(
            `Незаметно вокруг собрались ${maru.uma_sex_title} — вот она, харизма ${
              maru.name
            }.`,
          );
        },
      );
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(`${callname}, после тренировки прокатимся на Та?`);
          maru.say(
            `В ночном холоде и ${maru.uma_sex_title}, и людям кровь играет`,
          );
          era.print([
            maru.get_colored_name(),
            ' всем телом повисает на руке ',
            you.get_colored_name(),
            '; хвост уже обвил бедро ',
            you.get_colored_name(),
            '.',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(
          () => {
            maru.say(
              'Н-нг~ у каждого сезона свой ветер, а мне ближе весенний.',
            );
            maru.say(`Интересно, какой сезонный ветер нравится ${callname}?`);
            era.print([
              maru.get_colored_name(),
              ' смотрит с улыбкой на ',
              you.get_colored_name(),
            ]);
          },
          () => {
            maru.say(
              '『В весне есть магия. Такая, от которой хочется «стать лучше».』',
            );
            maru.say(`${callname} а ты как думаешь?`);
            era.print([
              'Перед растяжкой, болтая с ',
              maru.get_colored_name(),
              ', ',
              maru.sex,
              ' задаёт ',
              you.get_colored_name(),
              ' этот вопрос',
            ]);
          },
        );
      } else {
        buffer.push(() => {
          maru.say(
            `Несу ветер тем младшим, кто на меня равняется. Воплощение ветра надежды — ${maru.name} о~`,
          );
          maru.say(`Хе-хе, ${callname} как тебе эта реплика?`);
          era.print(`Улыбается ${maru.name}, довольно помахивая хвостом.`);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  select_after_recruit(maru, you, callname) {
    maru.say(
      `Хай~ ${you.sex_code !== 1 ? ' красотка' : 'красавчик'}я ${maru.name}.`,
    );
    maru.say(
      `Хочу, чтобы на скаковом поле младшие увидели ${maru.elder_sibling_sex_title} — мой крутой затылок.`,
    );
    maru.say(`Кстати, ${callname} такая милашка, прямо как лето.`);
  },
  /** @param {CharaTalk} maru 丸善斯基 */
  select_sister_annoyance(maru) {
    maru.say(
      'Бежать на ещё более грандиозной сцене — настроение так и искрится♪',
    );
    maru.say(
      `Если что — обязательно посоветуйся с ${maru.elder_sibling_sex_title} мной, ладно?`,
    );
    maru.say('…Вот бы между нами не было секретов.');
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  select_girls_blue(maru, callname) {
    maru.say('Колени болят ещё сильнее, чем раньше.', true);
    maru.say('Долго ли ещё продержусь?', true);
    maru.say(`По крайней мере, нельзя дать ${callname}  это заметить.`, true);
  },
  /** @param {CharaTalk} maru 丸善斯基 */
  select_true_end(maru) {
    maru.say('Чтобы сожаление больше не повторилось.');
    maru.say(
      'По крайней мере — дать бьющимся в поисках кохай способ, на который можно равняться.',
    );
    maru.say('И дальше тоже надо стараться!');
    maru.say('Так и рвану — клац-клац, back stepo!');
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  select_good_end(maru, you, callname) {
    maru.say(
      `Тоска ли, одиночество ли — с ${callname}  рядом будто уже ни о чём.`,
    );
    maru.say(
      `Что на пути скаковой ${maru.uma_sex_title} довелось встретить ${callname} — пожалуй, это удача всей моей жизни.`,
    );
    maru.say('Спасибо тебе за всю помощь до сих пор.');
    maru.say('И дальше тоже надо стараться вместе, ладно?');
    maru.say(`Мм, не слишком ли тяжело для ${callname} ?`);
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {number} wind 丸善斯基育成用变量 wind 的取值
   * @returns {boolean} wind 是否是特定值，如果是特定值就已经输出内容，否则继续往下走
   */
  select_by_wind(maru, you, callname, wind) {
    switch (wind) {
      case 1:
        maru.say(`И дальше прошу тебя вести меня, ${callname}♪`);
        break;
      case 5:
        maru.say(
          `Это для ${maru.sex_code === 1 ? ' красавчик' : 'красотка'} меня?`,
        );
        maru.say(`Тогда спасибо, ${callname} ♪`);
        maru.say('Хо-хо~ выглядит так красиво.');
        break;
      case 10:
        maru.say(
          'Сколько ни беги по травяному полю — того самого чувства уже не поймать. Даже как-то жить неохота.',
        );
        maru.say('……');
        maru.say('Ветер стих.');
        break;
      case 15:
        maru.say(
          `В тот вечер в Трейсен по травяному полю бежали ${maru.uma_sex_title}.`,
        );
        maru.say(`Кохай, что меня поддерживали, и рядом ${callname}.`);
        maru.say('Я от всего сердца чувствую счастье.');
        break;
      case 20:
        maru.say('Небо, трава — и мы, что бродим.');
        maru.say('Влажное лето и сухая осень, такие родные.');
        maru.say(
          `И дальше нам тоже идти этим путём, ладно, ${you.sex_code === 1 ? ' тре·нер·кун' : 'тре·нер·тян'}♪`,
        );
        break;
      default:
        return false;
    }
    return true;
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  select_Self_contempt(maru, callname) {
    maru.say(`Почему такой понурый вид?`);
    maru.say('Давай, взбодрись уже!');
    maru.say(`Я же всё это время жду ${callname} !`);
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  select_happiness_day(maru, callname) {
    maru.say(`Лазурное небо, свежая трава — всегда веет чем-то родным.`);
    maru.say(`Айя, ${callname}  когда это ты здесь.`);
    maru.say('Тогда давай вместе наслаждаться каждым прекрасным днём.');
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async office_study(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          'Если выходить на разные скачки, важно владеть разными стилями бега… может, попробовать дрифт?',
        ),
      () =>
        maru.say_and_wait(
          'Чем место, где тебя ведут, — вот так одним духом рвать к финишу, просто не оторваться♪',
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            'По видео прошлых грейдовых скачек разберём приёмы лидерского бега — и вырастем',
          ),
        () =>
          maru.say_and_wait(
            `Под руководством ${callname} я, ${
              maru.elder_sibling_sex_title
            }, тоже здорово выросла — преклоняюсь!`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async office_prepare(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait('Нельзя же не показать кохай, как я блистаю'),
      () =>
        maru.say_and_wait(
          `${callname} сиди на пассажирском и лови танец ветра`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `Пусть кохай увидят пламя, что передалось от ${callname}  ко мне`,
          ),
        () =>
          maru.say_and_wait(
            `${callname}  можно мне ещё чуть обнять? Э, нельзя? Ну и жадина.`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async talk(maru, callname) {
    const buffer = [];
    if (era.get('cflag:4:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:4:干劲')) {
        case -2:
          buffer.push(
            () =>
              maru.say_and_wait(
                'Почему на руке пластырь? Эм. Утром хотела сама сделать завтрак, под музыку — и задела палец… тьфу, правда ничего.',
              ),
            () =>
              maru.say_and_wait(
                `Почему сегодня так поздно, да ещё и волосы растрёпаны…? Сегодня, как встала, нечаянно задела коробку, всё из неё вывалилось, долго ставила на место и примчалась сломя голову — но ничего, какая сегодня тренировка?`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              maru.say_and_wait(
                `${callname}  можешь глянуть, как этот телефон открыть? Э? Вот так просто?`,
              ),
            () =>
              maru.say_and_wait(
                `Вчера нечаянно зачиталась мангой, ${callname}  прости.`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => maru.say_and_wait(`${callname}  какой сегодня план?`),
            () =>
              maru.say_and_wait(
                `Если у ${callname}  есть что на душе — приходи выговориться. Вернее, я, ${
                  maru.sex_code === 1 ? ' красавчик' : 'красотка'
                }, очень даже за♪`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              maru.say_and_wait(`Сегодня форма хороша, ${callname}  как тебе?`),
            () =>
              maru.say_and_wait(
                `Хочется, чтобы те старательные дети, увидев мою спину, тоже погнались за моим силуэтом и вкусили эту радость ветра`,
              ),
            () =>
              maru.say_and_wait(
                `${callname}  после тренировки пойдём вместе выпьем сока?`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              maru.say_and_wait(`Халоу! Я чувствую ${callname}  — твой пыл♪`),
            () =>
              maru.say_and_wait(
                `Форма — огонь, ${callname} стой здесь и смотри, как я побью прошлый рекорд♪`,
              ),
            () =>
              maru.say_and_wait(
                `Давай я зажгу ${callname}  скрытый в сердце пыл, Let's go!`,
              ),
          );
      }
    }
    if (era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname} Уже чувствуешь дыхание весеннего ветра? Того, что сорвал оковы земли и вольно резвится в небе.`,
          ),
        () =>
          maru.say_and_wait(
            `Милые младшие разносят аромат, словно распустившиеся весенние цветы, и я хочу, чтобы ${
              maru.sex
            } разнесли свой аромат по каждому уголку этого мира.`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8) {
      buffer.push(
        () =>
          maru.say_and_wait(
            'Из четырёх сезонов меня сильнее всего манит лето: когда ночью тепло в самый раз, я вольно мчусь вместе с Та и сама словно сливаюсь с летним ветром.',
          ),
        () =>
          maru.say_and_wait(
            `${callname}Вечером есть время? После тренировки поедем вместе к морю? Влажный морской ветер развеет эту раздражающую сухость, и под лунным светом словно всего омывает.`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11) {
      buffer.push(
        () =>
          maru.say_and_wait(
            'М-м~ осень пришла. У осени всегда такое дыхание, что так и тянет вот так заснуть. После тренировки можно мне немного отдохнуть в кабинете тренера?',
          ),
        () =>
          maru.say_and_wait(
            `Осень аппетита, осень литературы, у осени всегда такая сентиментальная атмосфера, летняя влажность и пыл с приходом осени тоже постепенно сходят на нет.`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2) {
      buffer.push(
        () =>
          maru.say_and_wait(
            'В эти зимние дни, когда всё сущее покоится, лишь дух ветра танцует по этой белоснежной земле. Младшие, кажется, тоже ждут, когда можно будет вовсю носиться по траве.',
          ),
        () =>
          maru.say_and_wait(
            `${callname}, на тебе словно так тепло, после тренировки сходим вместе в торговый квартал выпить чего-нибудь горячего?`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async office_gift(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(`Эту игрушку мне даришь, ${callname} Спасибо тебе.`),
      () =>
        maru.say_and_wait(
          `Мой любимый кокосовый напиток, спасибо, ${callname}`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            ` Теперь придётся думать об ответном подарке — не вынести. Когда вечером пойдём обратно, дам тебе отведать ${
              maru.elder_sibling_sex_title
            } мою стряпню.`,
          ),
        () =>
          maru.say_and_wait(
            `Что?! Как смотрится фруктовый шоколад, украшенный бокалом для шампанского, ${callname} вечно какие-то чудные идеи… Найдём время и попробуем?`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async office_cook(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          'Какой ностальгический вкус. Тогда я не буду стесняться?',
        ),
      () =>
        maru.say_and_wait(
          `${callname} сиди смирно здесь и смотри, как я готовлю… Э? Хочешь готовить вместе со мной?`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname} попробуй этот омурайсу, а? Ну как, вкусно ведь? Видя, как ${callname} светишься счастливой улыбкой, я словно тоже уже сыта.`,
          ),
        () =>
          maru.say_and_wait(
            `Хочешь приготовить для ${
              maru.elder_sibling_sex_title
            } меня обед… Голова кругом, так вот каков вкус счастья? Сердце сейчас dokidoki скачет без остановки♪`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async office_rest(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `Раз уж такое редкое время отдохнуть, ${callname} не глянуть вместе свежий модный журнал?`,
        ),
      () =>
        maru.say_and_wait(
          `${callname} Спасибо за работу. Э, прости, сама не заметила, как погладила тебя по голове.`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname} Можно я ещё немного тебя обниму? От тебя всегда веет таким теплом.`,
          ),
        () =>
          maru.say_and_wait(
            `${callname} Каждый день так пашешь, чем я могу тебе помочь? Или как в тот раз — зарыться лицом мне в грудь?`,
          ),
        () =>
          maru.say_and_wait(
            'Хороший, хороший. Каждый день такой уставший — отдохни немного в моих объятиях.',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async office_game(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `${
            maru.elder_sibling_sex_title
          }Я в играх совсем не сильна, ${callname} есть что посоветовать?`,
        ),
      () =>
        maru.say_and_wait(
          `Вместо того чтобы так сидеть в кабинете тренера, лучше выйти потренироваться… Хочешь увидеть меня в купальнике, ${callname} какой ты H. Тогда хорошенько жди♪`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname} Знаешь «Осенние 〇 воспоминания»? Я тоже не играла, но раз уж случай — давай вместе попробуем!`,
          ),
        () =>
          maru.say_and_wait(
            'Как же хочется снова почувствовать то летнее дуновение, когда мальчишка и девчонка из маленького городка встретились впервые.',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maru 丸善斯基 */
  async s_a_tree_hollow(maru) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `Что-то гнетёт? Хо-хо, у ${maru.elder_sibling_sex_title} меня пока нет.`,
        ),
      () =>
        maru.say_and_wait(
          `Что несёт мой бег ${maru.uma_sex_title} — надежду или ещё более глубокое отчаяние… нет-нет, ничего⭐`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async s_a_dating(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `Я тоже только что пришла, почти не ждала — и сразу встретила ${callname}.`,
        ),
      () =>
        maru.say_and_wait(
          `Я приготовила бэнто своими руками, на пикнике попробуешь♪`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maru 丸善斯基 */
  async school_rooftop(maru) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `Когда ешь бэнто на крыше, сердце тоже становится свободным, как ветер.`,
        ),
      () =>
        maru.say_and_wait(
          `Вот так опустошаю голову и представляю, как сама стала тёплым весенним ветром и порхаю под ласковым солнцем — и настроение тоже взлетает.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async o_r_fishing(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `М-м, ${
            maru.elder_sibling_sex_title
          } я не очень умею удить, так что полагаюсь на ${callname} да.`,
        ),
      () =>
        maru.say_and_wait(
          `Хо-хо, глядя, какой у ${callname} серьёзный вид, мне тоже радостно.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async o_r_walking(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `Воздух у берега такой свежий, ${callname} тебе тоже полегчало на душе?`,
        ),
      () =>
        maru.say_and_wait(
          `Глядя, с каким жаром младшая репетирует песни у берега, и самой становится очень радостно.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async o_s_arcade(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname} тоже потанцуем вместе?`);
        await era.printAndWait(
          `Хотя Марузенски лишь впервые пробует танцевальный автомат, гибкое тело и врождённое чувство ритма делают своё: ${maru.sex} быстро освоила правила этой игры.`,
        );
      },
      async () => {
        await maru.say_and_wait(`Дальше попробуем вон то развлечение.`);
        await era.printAndWait(
          `${maru.name} словно ребёнок, который встретил что-то новое: глаза горят.`,
        );
      },
      async () => {
        await maru.say_and_wait(
          `Такой старательный тренер — такой милашка.`,
          true,
        );
        await era.printAndWait([
          maru.get_colored_name(),
          ' с улыбкой следит за тем, как ',
          you.get_colored_name(),
          ' напряжённо орудует автоматом с игрушками.',
        ]);
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async o_s_drawing(maru, you, callname) {
    await maru.say_and_wait(`${callname} тоже попробуешь удачу?`);
    await era.printAndWait(
      `${maru.name} показывает на лотерейный автомат у торгового квартала.`,
    );
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`Ничего, в следующий раз ещё будет шанс.`);
        await era.printAndWait([
          maru.get_colored_name(),
          ' утешает вытянувшего салфетки ',
          you.get_colored_name(),
        ]);
      },
      async () => {
        await maru.say_and_wait(` Вечером поедим морковку.`);
        await era.printAndWait(
          `${maru.name} глядя на вытянутую морковку, говорит.`,
        );
      },
      async () => {
        await maru.say_and_wait(
          `Н-да, раз морковки столько — не устроить ли вечеринку в кабинете тренера.`,
        );
        await era.printAndWait(
          `После этого ${maru.name} позвала Спэ ${
            maru.couple_title
          } вместе в кабинет тренера отведать морковный пир.`,
        );
      },
      async () => {
        await maru.say_and_wait(`Я на коленях! Морковный бургер!`);
        await era.printAndWait([
          'Вечером ',
          you.get_colored_name(),
          ' и ',
          maru.get_colored_name(),
          ' вместе насладились этим даром удачи.',
        ]);
      },
      async () => {
        await era.printAndWait(`Динь-динь-динь`);
        await maru.say_and_wait('!', true);
        await era.printAndWait(
          `Сотрудник у лотерейного ящика「Поздравляем, поздравляем」`,
        );
        await era.printAndWait([
          maru.get_colored_name(),
          ' глядя на вытянувшего путёвку в онсэн ',
          you.get_colored_name(),
        ]);
        await maru.say_and_wait(
          ` Какая удача. Как будет время — вместе сходим в онсэн.`,
        );
        await era.printAndWait(
          `После этого вы в хорошем настроении вернулись в кабинет тренера.`,
        );
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async o_s_ktv(maru, you, callname) {
    await maru.say_and_wait(`${callname} послушай эту свежую модную песню.`);
    await era.printAndWait([
      maru.get_colored_name(),
      ' кажется, выбрала очень ностальгическую песню, ',
      you.get_colored_name(),
      ' погружается в воспоминания.',
    ]);
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async o_s_movie(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(
          `Слыхала, недавно вышедшая любовная комедия очень на слуху, ${callname} сходим вместе посмотреть?`,
        );
        await era.printAndWait(
          `${maru.name} указывает на ретроспективу десяти классических фильмов в рекомендациях.`,
        );
      },
      async () => {
        await maru.say_and_wait(
          `Хочешь глянуть такой крутой трюковой фильм? Это бах-бах, шлёп-шлёп`,
        );
        await era.printAndWait(`Вы обсуждаете только что вышедший фильм`);
      },
      async () => {
        await maru.say_and_wait(
          `${callname}…Всё, я больше не могу, ноги до сих пор трясутся`,
        );
        await era.printAndWait(
          `По внезапному порыву решив попробовать ужастик, вы двое, поддерживая друг друга, выходите из зала`,
        );
      },
    );
    if (era.get('love:4') >= 75) {
      buffer.push(async () => {
        await maru.say_and_wait(`М-м… сегодня лучше всё-таки любовную комедию`);
        await era.printAndWait(
          `Глупая парочка на кульминации фильма целуется так же, как герои`,
        );
      });
    } else if (era.get('love:4') >= 50) {
      buffer.push(
        async () => {
          await maru.say_and_wait(`${callname} В итоге тепло или сухо?`);
          await era.printAndWait(
            `На середине нагоняющего сон фильма, ${maru.name} вдруг начинает бормотать себе под нос`,
          );
        },
        async () => {
          await maru.say_and_wait(
            `Осени, когда сыплются листья гинкго, я всё же предпочитаю влажное лето`,
          );
          await era.printAndWait(
            `${maru.name} глядя на рекомендации фильмов, бормочет себе под нос`,
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} darley 达利阿拉伯
   * @param {CharaTalk} godolphin 高多芬柏布
   * @param {CharaTalk} byerley 拜耶尔土耳其
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async out_church(maru, darley, godolphin, byerley, you, callname) {
    darley.name = 'Нежная богиня';
    godolphin.name = 'Мудрая богиня';
    byerley.name = 'Строгая богиня';
    await maru.say_and_wait(`${callname}Вот и на месте.`);
    await era.printAndWait(
      `В какой-то выходной вы решаете сходить помолиться в святилище`,
    );
    await era.printAndWait(
      `По преданию, Три богини, сойдя в мир, отпили из здешнего родника, и этот горный ручей получил её благословение — ${
        maru.sex
      }.`,
    );
    await era.printAndWait(
      `Древние и возвели вокруг этого ручья святилище, а приходящие молиться просят успеха в деле или в любви`,
    );
    await maru.say_and_wait(
      `Говорят, когда зазвонят колокольчики в святилище, искренне молящиеся получают благословение Трёх богинь, ${
        maru.sex_code !== 1 ? ' красотка' : 'красавчик'
      }, я тоже хочу попробовать.`,
    );
    await era.printAndWait(
      `Хоть вы и пришли рано, глянули вперёд: редкие головы да палатки для ночлега.`,
    );
    await era.printAndWait(`Наверное, многие ждут здесь ещё с прошлой ночи.`);
    era.printButton(`Тогда давай и мы скорее встанем в очередь`, 1);
    await era.input();
    await era.printAndWait(
      `Видно, пришедшие за благословением не хотят обидеть Трёх богинь суматохой из-за тех, кто лезет без очереди, — строй стоит ровно.`,
    );
    await era.printAndWait(
      `Пройдя сквозь тории, вы входите в святилище Трёх богинь`,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' подражая стоящим впереди, бросает несколько монет в ящик для подношений, хлопает в ладоши, складывает руки и, закрыв глаза, начинает молиться',
    ]);
    await maru.say_and_wait(`……`);
    await era.printAndWait([
      you.get_colored_name(),
      ' украдкой бросаешь взгляд на ',
      maru.get_colored_name(),
      `, и видишь: ${maru.sex} — губы слегка приоткрыты, будто что-то тихо бормочет.`,
    ]);
    if (Math.random() < 0.5) {
      await era.printAndWait(
        `Вы ждёте ещё немного, но звона колокольчиков так и не слышно.`,
      );
      await maru.say_and_wait(`Какая жалость.`);
      await era.printAndWait(
        `${maru.name}Кажется, загадала что-то очень важное: уши повисли, вид совсем расстроенный.`,
      );
      era.printButton(`Сжимаешь ей ладонь — ${maru.sex}.`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ` сжимаешь ей ладонь — ${maru.sex}.`,
      ]);
      await maru.say_and_wait(`…… ${callname}, спасибо тебе`);
      await maru.say_and_wait(
        `Тогда давай прокатимся на Та и выплеснем эти чувства`,
      );
      await era.printAndWait([
        'После этого ',
        you.get_colored_name(),
        ' в смутном сознании будто видит улыбки Трёх богинь',
      ]);
    } else {
      const buffer = [
        () => darley.say_and_wait('Вперёд, дети'),
        () => godolphin.say_and_wait('Мои милые дети, будьте счастливы'),
        () =>
          byerley.say_and_wait(
            'Бегите, и пусть на исходе этого стремительного бега',
          ),
      ];
      await get_random_entry(buffer)();
      await era.printAndWait(`Динь-динь-динь`);
      await era.printAndWait(`Ты будто слышишь шёпот Трёх богинь.`);
      await era.printAndWait(
        `Ты украдкой открываешь глаза и косишься в сторону ${maru.name}.`,
      );
      await maru.say_and_wait(`…Госпожи Три богини, спасибо тебе,`);
      await era.printAndWait(
        `Кажется, загаданное получило отклик, ${maru.name} улыбается с облегчением.`,
      );
      await maru.say_and_wait(`${callname}`);
      await era.printAndWait(
        `${maru.name}Позади, уже за тории, останавливается`,
      );
      if (era.get('love:4') >= 90) {
        await era.printAndWait(
          `Сухие губы смачивает другая пара губ, и ты невольно обнимаешь её — ${maru.sex} такая тонкая.`,
        );
        await era.printAndWait(`В этот миг два бьющихся сердца наконец едины`);
        await era.printAndWait(
          `Время, слава и решительно всё, кроме прекрасной, — тебе уже всё равно`,
        );
        await era.printAndWait(`Сейчас ты хочешь лишь тонуть в этой неге`);
        await era.printAndWait(
          `И лишь когда дышать уже нечем, вы двое, кружившиеся по ветру, с сожалением отрываетесь`,
        );
        await maru.say_and_wait(
          `${callname}, может, ты и есть, нет, ты и есть то пламя, что я всё искала.`,
        );
        await era.printAndWait(
          `${maru.name}крепко сжимает твою руку, а ты молча терпишь эту боль`,
        );
        await era.printAndWait(`И затем вы снова сплетаетесь губами.`);
        await era.printAndWait(`Пламя всё-таки побеждает эту сухость`);
      } else {
        await era.printAndWait(
          `Ты чувствуешь влажный выдох, ${maru.name} отворачивается, силясь унять волнение в груди`,
        );
        await era.printAndWait(
          `С смешанными чувствами вы возвращаетесь в академию`,
        );
      }
    }
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   */
  async o_s_restaurant(maru, you) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `Говорят, неподалёку есть кондитерская с отличной репутацией, давай следом сходим поесть`,
        ),
      async () => {
        await maru.say_and_wait(`Ещё один фруктовый парфе♪`);
        await you.say_and_wait(`Столько съесть — и ничего?`);
        await era.printAndWait([
          you.get_colored_name(),
          ' немного тревожишься за ',
          maru.get_colored_name(),
          ' — вдруг желудок не выдержит',
        ]);
        await maru.say_and_wait(
          `Не волнуйся, для сладостей у меня отдельный желудок⭐`,
        );
        await maru.say_and_wait(
          `${maru.name}ест фруктовый парфе за огромным куском`,
        );
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async o_s_dating(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname} руки такие тёплые`);
        await era.printAndWait([
          'Для ',
          you.get_colored_name(),
          ' кем является ',
          maru.get_colored_name(),
          '?',
        ]);
      },
      () =>
        maru.say_and_wait(
          `Хотя так и хочется, чтобы ${callname} всегда опирался на меня`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async o_s_shopping(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait(`${callname} есть что купить?`),
      () =>
        maru.say_and_wait(
          `Слышала, рядом открылась новая сладкая — потом зайдём попробовать`,
        ),
    );
    await get_random_entry(buffer)();
  },
};
