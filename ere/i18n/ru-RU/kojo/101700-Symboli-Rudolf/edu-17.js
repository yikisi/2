/**
 * @file 鲁铎象征 - 育成
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ts_add: (() => {
    const title = 'Дополнительная самостоятельная тренировка';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `После тренировки ${chara17.name} всё ещё словно не набегалась.`,
      );
      await era.printAndWait(
        `${chara17.sex} Взгляд к самому краю неба: солнце падает, последние лучи льются на землю.`,
      );
      await era.printAndWait(
        'Скоро стемнеет, но мало — до предела ещё далеко —',
      );
      await era.printAndWait(
        `${you.name} понимает, чего хочет ${chara17.sex} на самом деле.`,
      );
      era.printButton('「Беги дальше! Лови это чувство.」', 1);
      era.printButton('「На сегодня хватит. Дальше — дело поважнее.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('— Конец пути? Забавно.');
        } else {
          await chara17.say_and_wait(
            'Хорошо… Кажется, я всё вернее ловлю суть.',
          );
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('Сон…?');
        } else {
          await chara17.say_and_wait('Так и есть. Спасибо за напоминание.');
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'Победа в скачке!';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      if (i_emperor) {
        await chara17.say_and_wait(
          `${chara17.couple_title} Это даже не соперницы. И ради такого мне самой выходить?`,
        );
      } else {
        await chara17.say_and_wait(
          '…Если тебе нужен именно такой финал, я не против.',
        );
      }
      era.printButton('「Иного не оставалось.」', 1);
      era.printButton('「Ты можешь лучше.」', 2);
      if ((await era.input()) === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('Хм.');
        } else {
          await chara17.say_and_wait('Понимаю… эх.');
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('Шут, а ты смотри какой важный? Хм…');
        } else {
          await chara17.say_and_wait('Я на такое не рассчитываю.');
        }
      }
    };
    f.title = title;
    return f;
  })(),
  faith_collapse: (() => {
    const title = 'Крах веры';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `${you.name} открывает рот — и не выдавливает ни слова.`,
      );
      await era.printAndWait('Проиграла.');
      await era.printAndWait(
        `${you.name} дрожа, вцепляешься в перила трибуны, лишь бы не рухнуть.`,
      );
      await era.printAndWait(
        'Рядом тебя поздравляют. Поздравляют с призовым местом Симболи Рудольф.',
      );
      await era.printAndWait(
        `${you.name} даже вид сделать не успевает — сразу уходит с поля.`,
      );
      await era.printAndWait(
        `${you.name} несётся к подземному проходу, ${you.name} знает: после скачек скакуньи всегда возвращаются в раздевалку.`,
      );
      await era.printAndWait(
        `${you.name} запыхавшись добегает к ${luna.name} — к двери её раздевалки, и та ни за что не открывается.`,
      );
      era.printButton('「Луна?!」', 1);
      era.printButton('「Император!!!」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `Из-за двери доносится рвота. ${you.name} будто кто-то со всего маха ударил по голове.`,
      );
      await luna.say_and_wait('Ничего………… мне просто нужно чуть времени…………');
      await luna.say_and_wait('Я……………………………………');
      await era.printAndWait(
        `${
          you.name
        } колотит в дверь — из-за неё лишь ${luna.teen_sex_title} рвёт и всхлипывает.`,
      );
      await era.printAndWait(
        `${you.name} беспомощно оседает на пол… ${you.name} знает: ожидания Луны провалены.`,
      );
      await era.printAndWait(
        `${you.name} так ничем не может помочь, пока ${luna.sex}.`,
      );
      await era.printAndWait(`Вы… проиграли.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_transform: (() => {
    const title = 'Смена дня и ночи';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 是否要切换为皇帝
     */
    const f = async (luna, emperor, you, i_emperor) => {
      const buffer = [];
      if (i_emperor) {
        buffer.push(
          () => luna.say_and_wait('Мн… ради нашей общей мечты я стерплю.'),
          () =>
            luna.say_and_wait('…Обними меня… я не хочу встречать это одна…'),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() =>
            luna.say_and_wait(`${you.actual_name}, разве без этого никак?`),
          );
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => luna.say_and_wait('…………………………………………кто я?'));
        }
      } else {
        buffer.push(
          () => emperor.say_and_wait('Пора войти в сон…?'),
          () => emperor.say_and_wait('Величию — быть. Но его ещё точить.'),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() => emperor.say_and_wait('Миг пробуждения.'));
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => emperor.say_and_wait('Вперёд, к Эдему!'));
        }
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'Начало наступления';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `После короткого разговора с семьёй Symboli ${you.name} подаёт заявку на дебют Луны.`,
      );
      await era.printAndWait('В день Japan Cup.');
      await era.printAndWait(
        `Луна узнаёт, как решает ${you.name}, — хмурится, но в итоге не спорит.`,
      );
      await era.printAndWait(
        `${you.name} знает: ход довольно… грязный. Но это выход из безвыходного.`,
      );
      await era.printAndWait(
        'Японии нужна вера — пусть даже надежда на будущее.',
      );
      await era.printAndWait(
        `Поэтому, когда ${you.name} видит скачку, которую конкуренцией не назовёшь, ${you.name} инстинктивно выдыхает с облегчением.`,
      );
      await era.printAndWait(
        `И правда, когда ${you.name} ловит себя: обе руки уже сжаты в кулак.`,
      );
      await you.say_and_wait('Это кому я кулак занёс? Твою ж мать…', true);
      await era.printAndWait(
        `${you.name} смотрит на свои руки и не верит — зрение плывёт.`,
      );
      await era.printAndWait(
        `Мало того, ${you.name} чувствует, как пересыхает рот, как кружит голову.`,
      );
      await era.printAndWait(
        `Император, Император — до чего же… до чего… до чего… сильна!!!`,
      );
      await era.printAndWait(
        `${you.name} Не описать, что она чувствует сейчас, но одно известно наверняка—`,
      );
      await era.printAndWait(`${you.name} столь подло.`);
      await era.printAndWait(
        `Иначе чем объяснить улыбку ${you.name} ? И тот восторг, с каким она слушала изумлённые крики иностранцев?`,
      );
      era.printButton('(Чтобы весь мир понял одну вещь.)', 1);
      era.printButton('(Видели? Мир—)', 2);
      await era.input();
      await era.printAndWait(`${you.name} хохочет в голос.`);
      era.printButton(`「Луна, ${luna.sex} сметет этот мир.」`, 1);
      era.printButton(`「Император, ${luna.sex} сметет этот мир!」`, 2);
      await era.input();
      await era.printAndWait('В тот день у всех отняло рассудок.');
      await era.printAndWait(
        `В тот день, вернувшись, Луна не стала вместе с ${you.name} праздновать, а лишь печально бросилась в объятия ${you.name} .`,
      );
      await era.printAndWait(
        `В тот день японская Скаковая ${luna.uma_sex_title} вновь проиграла Japan Cup.`,
      );
      await era.printAndWait(
        'Ничего, ничего… пока есть Луна, всё будет хорошо.',
      );
      await era.printAndWait(
        `${you.name} утешает Луну — и все тревоги тают без следа.`,
      );
    };
    f.title = title;
    return f;
  })(),
  saud_cup_win: (() => {
    const title = 'Сокрушительный натиск';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(`${chara17.sex} одерживает победу по плану.`);
      await era.printAndWait(`${you.name} краем глаза замечает коллег.`);
      await era.printAndWait(
        'Ещё есть время — до того, как вернутся их подопечные и придётся делать вид, что всё легко.',
      );
      await era.printAndWait(
        `Поэтому ${you.name} не ставит им в вину ни тяжёлые вздохи, ни взгляды — то восхищённые, то завистливые, — что бросают на себя.`,
      );
      await era.printAndWait(
        `${you.name} — тренер Симболи Рудольф, ${chara17.sex} победит, ${you.name} — тоже.`,
      );
      await era.printAndWait('Впрочем');
      era.printButton(
        i_emperor ? '「Вы с победой…!」' : '「Спасибо за труды…!」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `Завидев ${chara17.name} возвратившуюся, ${you.name} только собирается поздороваться, как другая Скаковая ${chara17.uma_sex_title} бросается ей навстречу. ${chara17.sex}.`,
      );
      await era.printAndWait(
        `${you.name} невольно напрягается — это Марузенски.`,
      );
      await era.printAndWait(`Если в такой момент задеть ${chara17.name}——`);
      await era.printAndWait(
        'К счастью, они лишь ненадолго перемолвились — и обе улыбнулись.',
      );
      await era.printAndWait(`По возвращении ${chara17.name} всё ещё ликует.`);
      await era.printAndWait(
        `${you.name} знает: ${chara17.sex} улыбается не потому, что победила, а из-за только что сказанного Марузенски.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          'Такое сильное чудовище ждёт, пока я выйду на охоту—',
        );
      } else {
        await chara17.say_and_wait(
          'Признание старшей, особенно признание Марузен, для меня очень много значит.',
        );
      }
      await era.printAndWait(
        `${you.name} знает: даже среди всех скаковых девушек Марузенски славится подавляющей силой.`,
      );
      await era.printAndWait(
        `Но как тренер ${chara17.name}, ${you.name} ясно лишь одно.`,
      );
      era.printButton('「Победишь ты.」', 1);
      era.printButton(
        '「И тогда сила 『Императора』 будет доказана ещё ярче.」',
        2,
      );
      const ret = await era.input();
      await era.printAndWait(
        `кажется, удивлена тем, что ${you.name} говорит именно так, и ${chara17.name} слегка улыбается.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('Неплохо сказано. Тогда — с триумфом!');
      } else {
        await chara17.say_and_wait(
          'Так вот оно, что значит разбудить инстинкт? Даже если я уже не хочу бежать, меня всё равно пробирает дрожь.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Новогодние стремления';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        'После того как они с Луной стали 「сообщниками」, сами не заметили, как наступил новый год.',
      );
      await era.printAndWait(
        `Беспрестанный страх и дрожь не дают ${you.name} сомкнуть глаз ночами.`,
      );
      await era.printAndWait(
        `Но стоит дунуть холодному новогоднему ветру — и ${you.name} будто обретает чуть больше смелости.`,
      );
      await era.printAndWait(
        `А уж тем более когда Луна в ярком пышном наряде семенит к ${you.name} .`,
      );
      await era.printAndWait(
        `${luna.sex} бросается в объятия, словно корабль входит в гавань.`,
      );
      await luna.say_and_wait(
        'Если так пойдёт дальше, боюсь, придётся позволить Императору подменить меня.',
      );
      await era.printAndWait(
        `${you.name} бессильно гладит ${luna.sex} по волосам, смахивая мелкий снег.`,
      );
      await era.printAndWait(
        `Видно, чтобы поскорее остаться наедине с ${you.name} , Луна даже не раскрыла зонт по дороге.`,
      );
      await era.printAndWait(
        `${you.name} поцеловал Луну в лоб в ответ, и ${luna.sex} прижалась к плечу ${you.name}.`,
      );
      await era.printAndWait('За окном кружится снег.');
      await luna.say_and_wait(
        'В этом году наконец брошу вызов классической Тройной короне. Только взяв её, я смогу…',
      );
      await era.printAndWait(
        `Глядя на серьёзное лицо Луны, ${you.name} глубоко вдохнул и взял за руку ту, кем была ${luna.sex}.`,
      );
      await era.printAndWait(
        `Словно давая понять: что бы ни случилось, ${you.name} всегда будет рядом с Луной.`,
      );
      await era.printAndWait(
        `Луна подняла взгляд на ${you.name}, и глаза её светились счастьем и надеждой.`,
      );
      era.printButton(
        '「Желаю тебе мудрости и прямоты — всегда выбирай лучшее.» (Интеллект +40)',
        1,
      );
      era.printButton(
        '「Желаю тебе полного здоровья: береги и тело, и душу.» (Выносливость +40)',
        2,
      );
      era.printButton(
        '「Желаю Императору сотни искусств — пусть все приёмы идут в ход.» (Очки навыков +80)',
        3,
      );
      const ret = await era.input();
      await luna.say_and_wait(
        'Всё это — счастливые, прекрасные желания… Тогда и у меня есть одно.',
      );
      await era.printAndWait(
        `Луна провела ладонью по щеке ${you.name}, и ${you.name} ощущал тепло, которым дышала ${luna.sex}, и ту жажду, что жила в душе.`,
      );
      await luna.say_and_wait(
        'Пусть ты проживёшь сто лет. Тогда ты всегда останешься рядом со мной.',
      );
      await era.printAndWait(`${you.name} расхохотался.`);
      await luna.say_and_wait('И ещё — хочу слышать больше плоских шуток.');
      await era.printAndWait(`${you.name} смех оборвался на полуслове.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = 'Лежать на хворосте, вкушая желчь';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, luna, you, i_emperor) => {
      await you.say_and_wait('Сначала — первая корона.');
      if (i_emperor) {
        await era.printAndWait(
          `Словно вместе с ${you.name} смакуя эту радость, Император высоко поднял один палец.`,
        );
      } else {
        await era.printAndWait(
          `Словно вместе с ${you.name} смакуя эту радость, Луна подняла голову и выдохнула с облегчением.`,
        );
      }
      await era.printAndWait(
        'Такая подавляющая сила. Такая сила, в которой нельзя усомниться.',
      );
      await era.printAndWait(
        'Зрители встретили сцену, будто поднимался занавес легенды, самым жарким ликованием из всех, что звучали доныне.',
      );
      era.printButton('「Может, и вправду выйдет… если это Император.»', 1);
      era.printButton('「Может, и вправду выйдет… если это Луна.»', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} всё ещё помнит слова, которые в тот день Луна сказала ${you.name}.`,
      );
      await luna.say_and_wait(
        `Создать мир, где каждая Скаковая ${chara17.uma_sex_title} будет счастлива.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ts_47_17: (() => {
    const title = 'Диссонанс';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (chara17, you, i_emperor, sats_sho, toky_yus) => {
      await era.printAndWait([
        'До ',
        toky_yus,
        ' уже рукой подать, и тренировки вышли на финальный этап.',
      ]);
      await era.printAndWait([
        'Пока ',
        chara17.get_colored_name(),
        ' мчалась по тренировочному кругу, смотревшие Скаковая ',
        chara17.uma_sex_title,
        ' и тренеры наперебой ахали от восхищения.',
      ]);
      await era.printAndWait(
        `Круг за кругом, ${you.name} заметил, что ${chara17.name} в прекрасной форме и на бегу даже улыбается.`,
      );
      await era.printAndWait(
        `И всё же ${you.name} так и не смог прогнать тяжёлую тревогу.`,
      );
      await era.printAndWait([
        'После ',
        sats_sho,
        ' ноша на плечах Луны, и без того тяжёлая, как гора, стала совсем неподъёмной.',
      ]);
      await era.printAndWait(
        `Возможно, ${chara17.name} вовсе не так спокойна, как кажется.`,
      );
      if (i_emperor) {
        era.printButton(
          '「Ваше Величество, похоже, Вы уже вдоволь набегались. Берегите драгоценное тело.»',
          1,
        );
      } else {
        era.printButton('「На сегодня тренировку на этом закончим.»', 1);
      }
      await era.input();
      await era.printAndWait(
        `Когда круг закончился, ${you.name} крикнул во весь голос.`,
      );
      await era.printAndWait(
        `Услышав слова ${you.name}, ${chara17.name} остановилась.`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `Мгновение спустя запыхавшийся Император подошёл к ${you.name}. И почему-то недавняя лёгкость на лице сменилась гневом.`,
        );
        await chara17.say_and_wait(
          'Шут, дай Нам причину, зачем сбил Наш настрой.',
        );
        era.printButton('「Ваше Величество, Вы слишком разгорячились.»', 1);
        era.printButton(
          '「Чем ближе охота, тем спокойнее Вам должно быть…」',
          2,
        );
        await era.input();
        await era.printAndWait(
          `С самого начала ${you.name} не считал, будто Император не выдержит жёсткости тренировок.`,
        );
        await era.printAndWait(
          `${you.name} становился тренером той, кем была ${chara17.sex}, и подталкивал стать Императором ту, кем была ${chara17.sex}.`,
        );
        await era.printAndWait(
          `Всё это время ${you.name} лишь тревожился, как бы Луну не сокрушил зверь у неё в груди.`,
        );
        await era.printAndWait(
          `${you.name} глядя на Императора с той игривой ухмылкой к себе, опустила голову. Давление с неё, словно гора, заставило ${you.name} обливаться холодным потом.`,
        );
        await era.printAndWait(
          `Satsuki Sho уже позади, впереди Derby… Сейчас, больше чем форма на тренировках, ${you.name} хотел уберечь тело, что принадлежит Луне.`,
        );
        await era.printAndWait(
          `Глядя на ${you.name}, Император холодно хмыкнула и прямиком ушла с дорожки.`,
        );
        await era.printAndWait(
          `${you.name} инстинктивно протянул к ней руку, но ${chara17.sex} не стояла на месте: ${chara17.sex} уходила слишком быстро, и ${you.name} не смог удержать ту, кем была ${chara17.sex}.`,
        );
        era.printButton('「Прости.」', 1);
        era.printButton('「Хорошо отдохни.」', 2);
        await era.input();
        await era.printAndWait(
          `${you.name} вздохнул и трусцой побежал следом.`,
        );
      } else {
        await era.printAndWait(
          `Мгновение спустя запыхавшаяся Луна подошла к ${you.name}. Почему-то ${chara17.sex} утратила прежнее светлое выражение.`,
        );
        await chara17.say_and_wait(
          `${you.actual_name}, я в отличной форме. Japanese Derby уже близко, мне нужно стать ещё сильнее!`,
        );
        era.printButton(
          '「Понимаю. Но чем ближе этот миг, тем спокойнее надо быть.」',
          1,
        );
        era.printButton('「Я очень волнуюсь за твоё состояние…」', 2);
        await era.input();
        await era.printAndWait(
          `Всё это время ${you.name} вовсе не считал, что Луна не выдержит нагрузки тренировок.`,
        );
        await era.printAndWait(
          `${you.name} стал тренером той, кем была ${chara17.sex}; подбивал ту же, кем была ${chara17.sex}, стать Императором — всё едино.`,
        );
        await era.printAndWait(
          `Всё это время ${you.name} лишь тревожился, как бы Луну не сокрушил зверь у неё в груди.`,
        );
        await era.printAndWait(
          `Но с той вспышки при первой встрече Луна уже давно не поверяла ${you.name} то, что лежит у неё на сердце.`,
        );
        await era.printAndWait(
          `Satsuki Sho уже позади, впереди Derby. Сейчас, больше чем форма на тренировках, ${you.name} хотел знать, что думает Луна.`,
        );
        await era.printAndWait([
          'Глядя на ',
          you.get_colored_name(),
          ', Луна немного подумала, и ',
          chara17.sex,
          ' повернулась к ',
          you.get_colored_name(),
          ' и улыбнулась.',
        ]);
        await chara17.say_and_wait(
          'Если не справимся даже с этим — нашим идеалам не сбыться.',
        );
        await era.printAndWait(
          `${you.name} втайне стиснул зубы, ещё хотел что-то сказать.`,
        );
        await era.printAndWait(
          `Луна топнула дважды, уже собиралась на дорожку. Но взгляд ${you.name} был полон тревоги — и она всё-таки остановилась.`,
        );
        era.printButton('「Прости.」', 1);
        era.printButton('「Хорошо отдохни.」', 2);
        await era.input();
        await era.printAndWait([
          'Приняв из рук ',
          you.get_colored_name(),
          ' полотенце и воду, Луна тихо согласилась.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  re_double_crowns: (() => {
    const title = 'Мощь, что рвёт горы';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await you.say_and_wait('Вот она, вторая корона!');
      await era.printAndWait('До мечты — ещё на шаг ближе.');
      await era.printAndWait(
        'Все горячо обсуждают, какую мощь Симболи Рудольф показала на Derby.',
      );
      await era.printAndWait('Как же это невероятно!');
      if (i_emperor) {
        await era.printAndWait(
          'Словно разделяя с толпой этот восторг, Император высоко подняла два пальца.',
        );
      } else {
        await era.printAndWait(
          'Словно разделяя с толпой этот восторг, Луна улыбнулась от души.',
        );
      }
      await era.printAndWait(
        'В следующие дни все горячо обсуждали, какую мощь Симболи Рудольф показала на Derby.',
      );
      await era.printAndWait(
        `${chara17.sex} имя ставят в один ряд с великими скаковыми девушками истории.`,
      );
      await era.printAndWait('Те звёзды, что вспыхнули — и в конце погасли.');
      await era.printAndWait('Но Симболи Рудольф будто другая.');
      await era.printAndWait(
        `Только ${you.name} знал: на Derby ${chara17.sex} ступила ещё на шаг глубже — `,
      );
      await era.printAndWait('в Зону.');
      await era.printAndWait(
        `И по сей день, стоит заговорить об этом, ${you.name} всё ещё чувствует глубокий трепет.`,
      );
      await era.printAndWait(
        `Но, подумав ещё, ${you.name} не мог не вздохнуть с горечью.`,
      );
      await era.printAndWait(
        'Предшественницы тоже это умели, но время капает без жалости — и всякое величие остаётся лишь воспоминанием.',
      );
      era.printButton(
        '「Из тех, кто ещё на бегу, крупица силы хонкакуки осталась разве что у Maruzensky.」',
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name} говорил с ${chara17.name}.`);
      await era.printAndWait(
        `Стоит хонкакуке исчезнуть — и даже самая могучая Скаковая ${chara17.uma_sex_title} растворится среди всех, оставив лишь крупицу воспоминаний.`,
      );
      await era.printAndWait(
        `Против этого не пойдёшь. Настанет день, и ${chara17.name} тоже…`,
      );
      await era.printAndWait(
        `Словно уловив скрытый за ${you.name} ликованием надрыв, ${chara17.name} тихо смотрела на него.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('Путь не остановить.');
      } else {
        await chara17.say_and_wait('Наша мечта… кажется, я нашла ответ.');
      }
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} не понял этих слов, но ${chara17.name} объяснять ему не собиралась.`,
      );
      await chara17.say_and_wait('Эдем…');
      era.drawLine();
      await chara17.print_and_wait(
        `Когда ${you.name} и ${chara17.name} попрощались, ${chara17.sex} одна пришла во внутренний двор академии.`,
      );
      await chara17.print_and_wait(
        'Глядя на статуи Трёх богинь, она вновь вкушала миг, когда ступила в Зону. умамусумэ девушка на самой вершине поколения сжала кулак.',
      );
      if (i_emperor) {
        await chara17.say_and_wait('Оков не должно существовать. Никогда.');
      } else {
        await chara17.say_and_wait(
          `Я непременно исполню наше с ${you.actual_name} желание, даже если я…`,
        );
      }
      era.print([
        chara17.get_colored_name(),
        ' постигла ',
        { color: buff_colors[1], content: ' [Зона]', fontWeight: 'bold' },
        '!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = 'Летние сборы';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait('Хотя сейчас как раз время летних сборов —');
      await era.printAndWait(
        `${you.name} смотрел, как Скаковая ${luna.uma_sex_title} и обступили Луну плотным кольцом; по лбу выступил холодный пот.`,
      );
      await era.printAndWait(
        'Как всеобщий центр внимания, глава студсовета, она наставляла учениц в самостоятельной тренировке,',
      );
      await era.printAndWait(
        'помогала тем, кто никак не мог пробиться, и даже учила лично.',
      );
      await era.printAndWait(
        `Кроме того, на тренировках ${luna.sex} тоже выкладывалась на полную.`,
      );
      await era.printAndWait(
        'Даже вечером Луна всё ещё помогала старостам обоих общежитий и расписывала задания.',
      );
      await luna.say_and_wait(
        'Проблемы академии — мои проблемы. Не бери в голову.',
      );
      await era.printAndWait(
        `Затем ${luna.sex} сама подала пример и рано ушла в комнату отдыхать.`,
      );
      await era.printAndWait(
        `И всё же у ${you.name} как раз зазвонил телефон.`,
      );
      await luna.say_and_wait(
        'Всё кажется, твой взгляд с меня так и не сходил.',
      );
      await era.printAndWait(
        `Глядя на сообщение от Луны, ${you.name} мягко улыбнулся.`,
      );
      era.printButton(
        '「Вызываемый абонент вне зоны обслуживания, перезвоните позже.」',
        1,
      );
      era.printButton('「Потому что ты слишком притягиваешь мой взгляд.」', 2);
      await era.input();
      await luna.say_and_wait(
        'Ну и речистый же ты. Но ради чистоты атмосферы в академии прошу не применять это на детях, кроме меня',
      );
      await luna.say_and_wait('Кстати');
      await luna.say_and_wait('Ты всегда такой!');
      await luna.say_and_wait(
        'Ещё в доме Симболи сыпал красивыми словами — удивительно, что ты выжил',
      );
      await luna.say_and_wait(
        'Впрочем, мне пора спать, завтра рано на тренировку',
      );
      await era.printAndWait(
        `${you.name} смотрел на мигающие сообщения и незаметно уснул.`,
      );
      await era.printAndWait(
        `Наутро Луна уже собиралась на тренировку, но ${you.name} остановил ${luna.sex}.`,
      );
      await era.printAndWait(
        `Ещё до начала летних сборов ${luna.sex} уже вовсю крутила несколько дел сразу и тренировки не бросала.`,
      );
      await era.printAndWait(
        `Усталость копится, ${you.name} это знал наверняка.`,
      );
      era.printButton(
        '「Пойдём как следует поедим — станешь крепче.」(Сила +10)',
        1,
      );
      era.printButton(
        '「Попробуй иногда отложить тренировку.」(Упорство +10)',
        2,
      );
      const ret = await era.input();
      await era.printAndWait('Луна опешила.');
      await luna.say_and_wait('Ты что, обо мне беспокоишься?');
      await era.printAndWait(
        `${you.name} кивнул. Луна легла грудью на подоконник, лицом к морю и пляжу.`,
      );
      await era.printAndWait(
        `Утреннее солнце залило ${luna.sex} лицо, и тебе не разглядеть ${luna.sex} выражение.`,
      );
      await luna.say_and_wait(
        'Стараться ради других — всегда прекрасное желание.',
      );
      await luna.say_and_wait(
        'И всё же нам нужно выкладываться ради Kikuka Sho.',
      );
      await luna.say_and_wait(
        'Но твой взгляд уже всё сказал — «тренироваться дальше вредно для тела», верно?',
      );
      await luna.say_and_wait(
        'Но после Derby я ещё твёрже уверена: наш идеал требует усилий не простых.',
      );
      await luna.say_and_wait(
        'Ты не слишком ли меня бережёшь? Неужели я так слаба, что меня здесь повалят?',
      );
      era.printButton('「……!」', 1);
      await era.input();
      await era.printAndWait(
        `Глядя на растерянного ${you.name}, Луна что-то поняла и схватила ${you.name} за руку.`,
      );
      await luna.say_and_wait(
        'Так ведь совсем похоже, будто я срываюсь на тебе…',
      );
      await era.printAndWait(
        `Луна словно извинялась перед ${you.name}, но ${you.name} знал: ${luna.sex} ему не уступила.`,
      );
      await era.printAndWait(
        `${luna.sex} мысли уже точно дошли до ${you.name} сердца.`,
      );
      await luna.say_and_wait(
        'Сегодня я на тренировку не пойду. Можешь не беспокоиться.',
      );
      await era.printAndWait(`Затем Луна ушла от ${you.name}.`);
      await era.printAndWait(
        `${you.name} не смог удержать. ${you.name} прижал руку к груди и лишь спустя долгое время пришёл в себя, а затем ушёл из пустого коридора.`,
      );
      await era.printAndWait(
        `Весь этот день ${you.name} так и не смог увидеть Луну.`,
      );
      await era.printAndWait(
        `Ночью ${you.name} взял телефон и отправил Луне сообщение.`,
      );
      era.printButton('「Я всегда буду рядом с тобой.」', 1);
      era.printButton('「Луна, я всегда тебя люблю.」', 2);
      await era.input();
      await era.printAndWait(
        'Сообщение отметилось прочитанным, но от Луны всё не было ответа.',
      );
      await era.printAndWait(
        `${you.name} томился в ожидании, но за всю ночь Луна так и не ответила.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  re_triple_crowns: (() => {
    const title = 'Тройная корона покорена';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, emperor, you, i_emperor) => {
      await era.printAndWait(
        'Словно рёвом, весь мир вспыхнул жарким ликованием.',
      );
      await era.printAndWait(
        `И ещё одна Скаковая ${chara17.uma_sex_title} свершила этот подвиг!`,
      );
      await era.printAndWait(
        'И в тот миг оркестр заиграл всем известную и донельзя к месту симфонию.',
      );
      await era.printAndWait('【Император】', { color: emperor.color });
      await era.printAndWait(
        `${you.name} с горячими слезами на глазах, держась за поясницу, склонила голову.`,
      );
      await era.printAndWait(
        `${you.name} знала: уговор и мечта ещё далеки от исполнения.`,
      );
      await era.printAndWait('Но ещё чуть-чуть… ещё чуть-чуть…');
      await era.printAndWait(
        `${you.name} опустив голову, там, где никто не видел, разрыдалась в голос.`,
      );
      era.printButton('「Поздравляю тебя…」', 1);
      era.printButton('「Величайшее выступление… за всю историю…」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} безгранично гордится ${chara17.name}!`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `Словно в полном единодушии с ${you.name}, Император высоко подняла три пальца.`,
        );
      } else {
        await era.printAndWait(
          `Словно в полном единодушии с ${you.name}, Луна пролила слёзы счастья.`,
        );
      }
      await era.printAndWait(
        `Даже спустя долгое время запыхавшаяся ${chara17.name} так и не покинула поле.`,
      );
      await era.printAndWait(
        `Люди лишь решили, что ${chara17.sex} хочет подольше купаться в лучах славы.`,
      );
      await era.printAndWait(
        `Но под ${chara17.name} неукротимым боевым пылом ${you.name} вдруг заметил, что ${chara17.sex} еле держится на ногах.`,
      );
      await era.printAndWait(
        `${you.name} сжал кулак, и небывалый холод пробрал ${you.name} насквозь.`,
      );
      era.printButton('「Неужели…」', 1);
      era.printButton('「Травма…」', 2);
      await era.input();
      era.drawLine();
      await chara17.print_and_wait(
        `Той ночью ${chara17.name} одна пришла во внутренний двор, под статуи Трёх богинь.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          'Как бы ни была крепка колыбель (тюрьма), что вы возвели…',
        );
      } else {
        await chara17.say_and_wait('Ещё чуть-чуть — и я бы вошла…');
      }
    };
    f.title = title;
    return f;
  })(),
  we_47_41: (() => {
    const title = 'Крутое пике';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `Под ясной луной ${you.name} тревожно метался по коридору за дверью.`,
      );
      await era.printAndWait(
        `Спустя долгое время ${you.name} услышал зов медсестры.`,
      );
      await era.printAndWait(
        `В тревоге влетев в палату, ${you.name} увидел: Луна лежит на кровати и уже спит.`,
      );
      await era.printAndWait(
        `Глядя, как ${luna.sex}, хоть и бледная, дышит ровно, ${you.name} выдохнул с облегчением.`,
      );
      await era.printAndWait(
        'После Kikuka Sho Луну срочно увезли в частную больницу семьи Symboli.',
      );
      await era.printAndWait(
        'После осмотра врач вынес диагноз — Луна переутомилась.',
      );
      await era.printAndWait(
        `И всё же, хоть тело и слабо, если Луна как следует отдохнёт, ${luna.sex} всё ещё успеет на Japan Cup.`,
      );
      era.printButton('「Japan Cup, значит…」', 1);
      await era.input();
      await era.printAndWait(
        `Поскольку Луне нужен покой, ${you.name} проверил, в каком ${luna.sex} состоянии, и на цыпочках вышел за дверь.`,
      );
      await era.printAndWait(
        `Глядя на ночь за окном, ${you.name} схватился за голову.`,
      );
      await era.printAndWait(
        'Japan Cup — заветная мечта всех японских скаковых девушек… Самый грандиозный заезд на родной земле, а победу снова и снова уносят зарубежные силачи.',
      );
      await era.printAndWait(
        `Чтобы свершить мечту Луны и ${you.name} — достичь мира, где все скаковые девушки смогут быть счастливы.`,
      );
      await era.printAndWait(
        'Japan Cup — испытание, которое Луна должна преодолеть.',
      );
      await era.printAndWait(
        `${you.name} обернулся и взглянул на дверь. Луна отдыхает на кровати за ней.`,
      );
      await era.printAndWait(
        `${you.name} вздохнул. Стоит лишь вспомнить, какая ${luna.sex} бледная, — и ${you.name} почувствовал, как прежняя твёрдость сердца даёт трещину.`,
      );
      await era.printAndWait(
        'Как прекрасны скаковые девушки на бегу — но таящаяся в этом опасность не слабее, чем на поле настоящего боя.',
      );
      await era.printAndWait(
        'Миг слабости, миг ошибки — и скаковая девушка может рухнуть безвозвратно.',
      );
      await era.printAndWait(
        `Луна ещё молода, ${luna.sex} ещё наверняка получит свой шанс… не обязательно именно в этот раз.`,
      );
      await era.printAndWait(
        `${you.name} пытался убедить себя. Но ${you.name} понимал: вся Япония ждёт от Луны — от Симболи Рудольф, — и ${luna.sex} не имеет права на 「бегство с поля боя」.`,
      );
      await era.printAndWait(
        'И Луна тоже наверняка не захочет вот так сдаться.',
      );
      await era.printAndWait(
        `${you.name} в раздражении взъерошил волосы, и от крайнего изнеможения сон накрыл ${you.name}.`,
      );
      era.printButton('「Завтра ещё поговорю с Луной…」', 1);
      await era.input();
      await era.printAndWait(`${you.name} тоже вымотался до предела.`);
      await era.printAndWait(
        `Но на следующий день, едва снова открыл глаза, ${you.name} обнаружил, что его накрыли одеялом.`,
      );
      await era.printAndWait(
        `${you.name} резко глянул на дверь рядом: она приоткрыта, а Луны, которой бы лежать и отдыхать, и след простыл.`,
      );
      era.printButton('「Не может быть?!」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} понял: Луна словно своим поступком показывает ${you.name}, что ${luna.sex} полна решимости.`,
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name} толкнул дверь студенческого совета и увидел: внутри яблоку негде упасть — помощницы с кипами бумаг отчитываются Луне о работе последних дней.`,
      );
      await era.printAndWait(
        `Луна глянула на ${you.name}, уголки губ чуть сжались.`,
      );
      await luna.say_and_wait('Тренер, что-то случилось?');
      await era.printAndWait(
        `${you.name} запыхался и, видя, как все выжидающе смотрят на него, ${you.name} лишь криво улыбнулся.`,
      );
      era.printButton('「Вы кое-что забыли…」', 1);
      era.printButton('「Тебе бы как следует…」', 2);
      await era.input();
      await era.printAndWait(
        `Не договорив и половины, ${you.name} вдруг увидел: в фиолетовых глазах Луны, что смотрели на него, была мольба.`,
      );
      await luna.say_and_wait('Я в порядке.', true);
      await era.printAndWait(
        `${you.name} прочёл по губам, что говорит ${luna.sex}. ${you.name} никогда не умел перечить, когда ${luna.sex} уже всё решила — с детства так…`,
      );
      era.printButton('「Нет, ничего серьёзного.」', 1);
      era.printButton('「Прости…」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} в полнейшей прострации вышел из студенческого совета. ${you.name} ясно понимал: академия не может без Луны.`,
      );
      await era.printAndWait(
        'И Луна тоже ясно понимала: Япония не может сейчас потерять Симболи Рудольф.',
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = 'Нет равных';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        'В отличие от Japan Cup, ежегодная Arima Kinen — последний гран-при и издавна самый ожидаемый заезд — набирается не по заявкам.',
      );
      await era.printAndWait(
        'Каждый год перед заездом болельщики всей Японии голосуют и выбирают тех скаковых девушек, кого публика считает достойными участвовать.',
      );
      await era.printAndWait(
        `Иначе говоря, допущенные до заезда Скаковая ${chara17.uma_sex_title}, без исключения оставляют яркое впечатление — все сплошь сильнейшие.`,
      );
      await era.printAndWait(
        'И всё же, хоть Луну и выбрали с большим отрывом, первого места по популярности она не взяла.',
      );
      await era.printAndWait(
        'Люди судачат. Если Japan Cup — это ответ сильнейших года мировым грандам, то Arima решает, кто сильнейший в своей стране.',
      );
      era.printButton('(Голосование не отражает истинную силу участниц.)', 1);
      era.printButton(
        '(Но голосование, без сомнения, отражает и реальное положение дел.)',
        2,
      );
      await era.input();
      await era.printAndWait(
        `${you.name} в тревоге вернулся в комнату отдыха ${chara17.name}: ${chara17.sex} сидит с закрытыми глазами, копит силы.`,
      );
      await era.printAndWait(
        'Иными словами, всегда найдутся те, кто считает: Луне предстоит тяжёлая борьба против опытных старших.',
      );
      await era.printAndWait(
        'Но это же значит: способ решить проблему столь же прост и груб.',
      );
      if (i_emperor) {
        await chara17.say_and_wait('Явить нашу власть.');
      } else {
        await chara17.say_and_wait('Нужно сделать лишь одно.');
      }
      await era.printAndWait(
        `${chara17.teen_sex_title} Открыла глаза и пробормотала.`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = 'Хацумодэ';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait('Именно потому, что Новый год, так и хлопотно.');
      await era.printAndWait(
        `В зимней стуже ${you.name} выдохнул — и дыхание мигом стало белым паром.`,
      );
      await era.printAndWait(
        `Опять новая весна, ${you.name} стоит за спиной Луны, помогает в работе: кланяется, принимает подарки, благодарит.`,
      );
      await era.printAndWait(
        'Поздравить знакомых с Новым годом, провести новогодний сбор, закрыть хвосты прошлого года…',
      );
      await era.printAndWait(
        `Едва взяв на себя лишь часть работы Луны, ${you.name} едва не закружился.`,
      );
      await era.printAndWait(
        `Только тогда ${you.name} понял, почему год назад Луна сказала, что хочет: пусть Император сделает это за неё.`,
      );
      await luna.say_and_wait('Кажется, ты думаешь о чём-то неприличном.');
      await era.printAndWait(
        `Этапные дела закрыты — и у вас наконец нашлось время на поклон в святилище. По дороге Луна вдруг, сама не зная почему, пробормотала.`,
      );
      await era.printAndWait(
        `${you.name} поспешно отнекивался. Луна ни да ни нет, ${luna.sex} смотрела на колокол святилища и закрыла глаза.`,
      );
      await era.printAndWait(
        `Каким будет желание Луны в новом году? ${you.name} не спросил: говорят, если желание произнести вслух, оно не сбудется.`,
      );
      await era.printAndWait(
        `Кажется, обряд завершён. Луна открыла глаза, запрокинула голову и, подражая ${you.name} , выдохнула.`,
      );
      await era.printAndWait(
        `Белый пар растаял, ${luna.sex} замерла, глядя в пустоту, затем склонила голову набок, сложила ладони и повернулась к ${you.name} с усталой улыбкой.`,
      );
      await luna.say_and_wait('Может, и я думаю о чём-то неприличном.');
      await era.printAndWait(
        `Вмиг ${you.name} вспыхнул лицом. Вспомнив, какой бурной была эта история, не сдержал потока чувств.`,
      );
      await era.printAndWait(`${you.name} серьёзно сказал Луне:`);
      era.printButton(
        '「Еда как лекарство — надеюсь, ты будешь беречь здоровье за столом.」(Выносливость +20)',
        1,
      );
      era.printButton(
        '「Всеведение и всемогущество — надеюсь, ты по-настоящему станешь настоящим Императором.」(Все характеристики +5)',
        2,
      );
      era.printButton(
        '「Любовные истории — не думай лишнего, делай то, что любишь.」(Очки навыков +35)',
        3,
      );
      const ret = await era.input();
      await era.printAndWait(
        `Выслушав ${you.name} благословение, Луна не ответила, лишь тихо прислонилась к его плечу и устало закрыла глаза.`,
      );
      await era.printAndWait('Даже короткий отдых в такой миг бесценен.');
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_4: (() => {
    const title = 'Прильнуть ближе';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `В новом году ${you.name} сквозь стужу спешил к месту встречи с Луной.`,
      );
      await era.printAndWait(
        `Но по дороге ${you.name} увидел: Луна стоит у главных ворот и говорит со студенткой, что выглядит ещё совсем юной.`,
      );
      await era.printAndWait(
        'Та всё кивала и кланялась и, торжественно поблагодарив Луну, ушла.',
      );
      era.printButton('「Луна-сэмпай.」', 1);
      era.printButton('「Луна-сестрица?」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `Услышав ${you.name} подкол, Луна слегка вспыхнула, ${luna.sex} смотрела укоризной на ${you.name}, но, кажется, такому обращению и не противится.`,
      );
      await luna.say_and_wait(
        'Это ребёнок, который только теперь вернулся; ей совсем скоро на дебютный заезд.',
      );
      await luna.say_and_wait(
        'Вернуться почти под конец января — ты, небось, тоже недоумеваешь? Большинство скаковых девушек выбирают дебют осенью или зимой.',
      );
      await luna.say_and_wait(
        'Но ещё до этого мы уже приходим в академию, с ровесницами учимся и с ними же соревнуемся.',
      );
      await luna.say_and_wait(
        'В этом есть радость, но никто не обещает, что по пути обойдётся без разбитых сердец и усталости.',
      );
      await era.printAndWait(
        `Отойдя туда, где никого нет, рука Луны коснулась ${you.name} плеча. ${luna.sex} будто привыкла сама собой тянуться ближе к нему.`,
      );
      await luna.say_and_wait(
        'Не выдержав жестоких заездов и тренировок, разочаровавшись в себе, на каникулах вернулась в тёплый дом…',
      );
      await luna.say_and_wait('И тогда может родиться мысль всё бросить.');
      await era.printAndWait([
        you.get_colored_name(),
        ' молча слушал, как Луна неторопливо рассказывала. Честно говоря, с вашей стороны — со стороны Симболи Рудольф, ',
        you.get_colored_name(),
        ' не мог сказать красивых слов.',
      ]);
      await era.printAndWait(
        `${you.name} знает, что многие Скаковая ${luna.uma_sex_title} слыша, что Луна выйдет на заезд, ${luna.couple_title} первым делом решают сняться с заезда.`,
      );
      era.printButton(
        '「Кто смотрит в лицо реальности и беде — тот истинный храбрец.」',
        1,
      );
      era.printButton('「Может, нам стоит давать им больше помощи.」', 2);
      await era.input();
      await era.printAndWait(`Луна с улыбкой смотрела на ${you.name}.`);
      await luna.say_and_wait(
        'Я тоже думала сбежать. Только, кажется… куда бы ни бежала, прибегаю всё равно к тебе.',
      );
      await era.printAndWait(
        `Луна прижалась к ${you.name} груди, пальцем легонько тыкала ${you.name} в грудь.`,
      );
      if (ret === 1) {
        await luna.say_and_wait(`Луне-сэмпай тоже бежать некуда, да?`);
      } else {
        await luna.say_and_wait(`Луне-сестрице тоже бежать некуда, да?`);
      }
      await era.printAndWait(`Ну тебя…`);
      await era.printAndWait(
        `${you.name} вспыхнул и с охотой принял маленькую месть Луны.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = 'Сердце в кровь';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        'Tenno Sho Spring уже близко. Как самый длинный G1, дистанция в 3200 метров — без сомнения, великий рубеж на стойкость скаковых девушек.',
      );
      await era.printAndWait(
        'Когда-то скаковую девушку, взявшую Tenno Sho, считали сильнейшей, но времена меняются, и оценки разных заездов то взлетают, то падают.',
      );
      await era.printAndWait(
        'Как ни крути, Tenno Sho Spring и впрямь самый суровый заезд из всех, что были до сих пор.',
      );
      await era.printAndWait(
        'Поднявшись в старшие, нагрузка Луны в студенческом совете не только не спала — ей ещё то и дело приходится выкраивать время, чтобы наставлять младших, и ходить на интервью.',
      );
      await era.printAndWait(
        `Хотя ${you.name} и тревожился, Луна всегда считала: такова ответственность, что несёшь вместе с этой славой.`,
      );
      await era.printAndWait(
        `Словно уловив ${you.name} мысли, в конце ещё одного занятого дня Луна окликнула ${you.name}.`,
      );
      await luna.say_and_wait('Ты сердишься?');
      era.printButton('「Я просто волнуюсь за тебя.」', 1);
      era.printButton('「Хочу, чтобы ты чуть больше на меня опиралась.」', 2);
      await era.input();
      await era.printAndWait(`Услышав слова ${you.name}, Луна тихо выдыхает.`);
      await luna.say_and_wait('И ты тоже поверь в меня чуть больше.');
      await era.printAndWait(
        `Луна смотрит на ${you.name}, протягивает руку и гладит ${you.name} по щеке.`,
      );
      await luna.say_and_wait(
        'Я должна так поступать. Иначе слишком многие заблудятся и окажутся в беде.',
      );
      await luna.say_and_wait('Мы ещё не осуществили мечту.');
      await era.printAndWait(`${you.name} сжимает руку Луны.`);
      await era.printAndWait(
        `Речь о высоких идеалах, а ${you.name} всё же замечает: с бровей Луны так и не сходит тревога.`,
      );
      await era.printAndWait(
        `словно тогда, когда ${you.name} снова встретились — будто не хватает воздуха.`,
      );
      await era.printAndWait(`${you.name} вздыхает и кивает.`);
      await era.printAndWait(
        `—— Что ещё можно сделать для Луны? В последующие дни ${you.name} всё думает об этом.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'Падение Императора';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        'К апрелю вот-вот начнётся долгожданный фестиваль благодарности фанатам.',
      );
      await era.printAndWait(
        `И хотя ${you.name} не в восторге, после церемонии открытия всё равно будет показательная скачка.`,
      );
      await era.printAndWait(
        `Пусть это и показательная скачка, по накалу она едва ли уступит настоящей.`,
      );
      await era.printAndWait(
        `${you.name} знает: чем ближе этот час, тем ${you.name} труднее держать тело Луны в равновесии.`,
      );
      await era.printAndWait('Стоит лишь что-то пойти не так…');
      await era.printAndWait(
        `Но стоит вспомнить, что случилось на летних сборах, и ${you.name} уже не может просить Луну отказаться от скачки.`,
      );
      await era.printAndWait(
        `Когда показательная скачка уже на старте, усталость Луны заставляет ${you.name} дёрнуться уголком глаза.`,
      );
      await era.printAndWait(
        'Не только тренировки — ещё работа студсовета и организация мероприятия. Ради сегодняшнего дня ноша на Луне слишком тяжела.',
      );
      await era.printAndWait('—— Отдохни немного.');
      await era.printAndWait(
        `${you.name} смотрит на Луну рядом: слова застревают в горле и срываются вздохом.`,
      );
      await luna.say_and_wait('Все ждут эту скачку.');
      await luna.say_and_wait(
        'Крики фанатов, ожидание и пожелания заставляют волноваться даже старших, уже завершивших карьеру.',
      );
      await era.printAndWait(
        `${you.name} смотрит на Луну, ${luna.sex} будто о чём-то думает. Мгновение спустя ${luna.sex} смотрит на ${you.name}.`,
      );
      await luna.say_and_wait('Ты тоже ждёшь от меня чего-то?');
      era.printButton('「Всегда!」', 1);
      era.printButton('「Отдохни немного…」', 2);
      await era.input();
      await era.printAndWait(
        `Услышав ответ ${you.name}, Луна глубоко вдыхает и хлопает ${you.name} по плечу.`,
      );
      await luna.say_and_wait('Я мигом вернусь.');
      await era.printAndWait(
        `${you.name} застывает на месте, но ${you.name} затем понимает: Луна выйдет на дорожку в 【нынешнем】 состоянии.`,
      );
      await era.printAndWait(
        `—— В итоге Луна увязает в тяжёлой борьбе. Видно, усталость за эти дни сказалась: ${luna.sex} не в форме.`,
      );
      await era.printAndWait(`Трибуны взрываются шумом.`);
      await era.printAndWait(
        `Как это Император могла так потерять лицо? Такие разговоры не стихали неделями.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_16: (() => {
    const title = 'Всё на кон';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `Завтра стартует Tenno Sho (Spring), но всё это время ${you.name} видит: как ни крути, Луна не может вызвать 【Императора】.`,
      );
      era.printButton(
        '「Накопленная усталость всё-таки дала о себе знать.」',
        1,
      );
      era.printButton('「Не мучай себя больше!」', 2);
      await era.input();
      await era.printAndWait(
        `В студсовете ${you.name} с тревогой смотрит на Луну, которая держится за лоб.`,
      );
      await era.printAndWait(
        `${luna.sex} Пряди растрепаны, под глазами тяжёлые круги.`,
      );
      era.printButton('「Это всё моя вина…!」', 1);
      era.printButton('「Прости, Луна, я…」', 2);
      await era.input();
      await luna.say_and_wait('Нет, ты тут ни при чём.');
      await era.printAndWait(
        `Луна поднимает взгляд на ${you.name},${luna.sex} Пряди растрепаны, под глазами густые круги; слёзы текут, и ${luna.sex} не смахивает их со щёк.`,
      );
      await luna.say_and_wait(
        'Ради мечты я почти бездумно рвалась вперёд до сих пор — это моё своеволие втянуло тебя…',
      );
      await luna.say_and_wait(
        'К тому же ты раз за разом твердишь, чтобы я берегла себя. Это я всё провалила.',
      );
      await luna.say_and_wait(
        'Без 【Императора】 я никак не могу сделать так, чтобы все были довольны.',
      );
      await luna.say_and_wait(
        'Прости, я не сильная умамусумэ девушка… прости… прости…',
      );
      await era.printAndWait(`Перед ${you.name} Луна рыдает навзрыд.`);
      await era.printAndWait(
        `${you.name} стремительно шагает вперёд и крепко обнимает Луну.`,
      );
      await era.printAndWait(
        `${you.name} чувствуя, как ${luna.sex} хрупка, чувствуя, как ${luna.sex} обижена.`,
      );
      await era.printAndWait(
        `В то же время ${you.name} таит в груди и недовольство, и щемящую боль и хочет высказать это Луне.`,
      );
      await era.printAndWait(
        'Боль -- от слёз Луны; недовольство -- от того, что Луна себя принижает.',
      );
      await era.printAndWait(
        'Даже если в пробном заезде выступила неудачно, разве Луна перестала быть той, кого все почитают?',
      );
      await era.printAndWait('Нет. Нет!!!');
      await era.printAndWait(`${you.name} стискивает зубы.`);
      await era.printAndWait(
        'Луна, что так старалась, что рвала жилы за Tracen и за всех скаковых девушек, что выкладывалась без остатка, не должна становиться предметом пересудов.',
      );
      await era.printAndWait(
        `${luna.sex} Ей должно быть не в чем себя упрекнуть!`,
      );
      await you.say_and_wait(
        'Думаю, ты неверно поняла, в чём сила 【Императора】 в сердцах людей.',
      );
      await era.printAndWait(
        `Когда Луна выплакалась, ${you.name} начинает утешать. Услышав в словах ${you.name} уверенность, сердце Луны едва дрогнуло.`,
      );
      await you.say_and_wait(
        'Император -- Симболи Рудольф влечёт к себе тем, что под знаменем этого символа каждый может делать своё дело.',
      );
      await you.say_and_wait(
        'Вдохновляет всех стараться и бороться ради этого.',
      );
      await you.say_and_wait(
        'До сих пор никто не достоин титула 【Император】 больше тебя. Ты ведёшь нас, ты несёшь нас всё дальше вперёд!',
      );
      await you.say_and_wait(
        'На пути борьбы за мечту ты уже стала мечтой для других.',
      );
      await you.say_and_wait('Поэтому не принижай себя, Луна--');
      await era.printAndWait(
        `${you.name} крепко обнимает Луну, будто желая, чтобы ${luna.sex} обрела бесконечные силы. И будто ${you.name} хочет впечатать самого дорогого человека в свою душу.`,
      );
      await era.printAndWait(
        `Лишь спустя долгое время Луна будто в знак протеста легонько взмахнула кулачком и постучала ${you.name} по плечу.`,
      );
      await era.printAndWait(
        `${you.name} только тогда понимает, что объятие, кажется, вышло слишком сильным. ${you.name} поспешно разжимает руки, но видит, что Луна не отошла и всё ещё лежит у ${you.name} на груди.`,
      );
      await luna.say_and_wait('Я ещё смогу идти вперёд?');
      era.printButton('「Конечно.»', 1);
      await era.input();
      await luna.say_and_wait('Ты и дальше будешь со мной?');
      era.printButton('「Хоть в пропасть без возврата.»', 1);
      era.printButton('「Навсегда.»', 2);
      await era.input();
      await era.printAndWait(`${you.name} слышит тихий смех Луны.`);
      await you.say_and_wait(
        'На самом деле не только я -- все в студенческом совете и ученицы Tracen хотят тебе помочь, пусть даже это будут лишь крошечные мелочи.',
      );
      await you.say_and_wait('Твои старания обязательно дадут плод.');
      await luna.say_and_wait('Тогда тем более я не могу остановиться здесь.');
      await luna.say_and_wait('Наша мечта живёт только в будущем.');
      await era.printAndWait(
        `${you.name} достаёт из кармана платок и осторожно вытирает Луне слёзы. ${you.name} видит: в глазах Луны сияет уже не влага слёз.`,
      );
      await era.printAndWait(`А воля поставить на кон весь мир.`);
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = 'Масло выгорело (верх)';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `Скаковая ${chara17.uma_sex_title} от природы жаждет победы, ${chara17.couple_title} всегда хочет нестись ещё дальше.`,
      );
      await era.printAndWait(
        `А на дорожке с отмеренной дистанцией ${chara17.couple_title} выкладывается без остатка, лишь бы первой прийти к финишу.`,
      );
      await era.printAndWait(
        'И будто в ответ на это желание скаковые девушки в расцвете стремительно растут и в конце концов выходят на дорожку.',
      );
      await era.printAndWait(
        'Но вместе с тем со временем -- если точнее, быть может, за три-четыре года -- сила расцвета постепенно угасает.',
      );
      await era.printAndWait(
        'Словно выгорело топливо. После этого скаковые девушки становятся как все прочие.',
      );
      await era.printAndWait(
        'Потому скаковые девушки и бьются на дорожке насмерть -- хотят оставить свою главу, хотят, чтобы их не забыли.',
      );
      await era.printAndWait(
        'С этим в сердце скаковые девушки бросаются вперёд, не жалея себя.',
      );
      await era.printAndWait(
        'Среди них есть избранные, что в бесконечно яростной борьбе входят в 【Зону】.',
      );
      await era.printAndWait('Это сила, что превосходит всё.');
      await era.printAndWait('Но какова цена этой силы?');
      await era.printAndWait(
        `С тех пор как Луна смогла входить в Зону, ${you.name} без конца думает об этом вопросе.`,
      );
      await era.printAndWait(
        'Судьба никогда не знает жалости: у всего заранее проставлена цена.',
      );
      await era.printAndWait(
        `Даже могучая, как род Symboli, ${chara17.couple_title} не в силах сдержать буйство крови и идёт к саморазрушению.`,
      );
      await era.printAndWait(
        `Луна описывала ощущение входа в Зону: будто всё замирает, и ${chara17.sex} оказывается на бескрайнем лугу.`,
      );
      await era.printAndWait(
        `${chara17.sex} Силы будто не иссякают -- словно она заключила сделку с будущим.`,
      );
      era.drawLine();
      await era.printAndWait('Japan Cup.');
      await era.printAndWait(
        `Перед скачкой ${you.name} не сводит глаз с ${chara17.name}.${you.name} знает, что ${chara17.sex} уже привела себя в наилучшую форму.`,
      );
      await era.printAndWait(
        `Но чтобы одолеть сильных соперниц, ${chara17.sex} снова войдёт в Зону. Нет, ${chara17.sex} не сможет не войти в Зону.`,
      );
      await era.printAndWait(
        `Словно вспыхнувшее пламя -- пламя, что не стихнет, пока не выжжет топливо дотла.`,
      );
      era.printButton(`「Будь осторожна.」`, 1);
      era.printButton(`「У меня дурное предчувствие.」`, 2);
      await era.input();
      await era.printAndWait(
        `${chara17.name} смотрит на ${you.name},${you.name} и лишь тогда замечает: ${chara17.sex} едва заметно дрожит руками.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          'Тогда запечатлей в сердце облик Императора.',
        );
      } else {
        await chara17.say_and_wait(
          'Я понимаю твою тревогу, но ради нашей мечты я не отступлю.',
        );
      }
      await era.printAndWait(
        `Сказав это, ${chara17.teen_sex_title} выходит на дорожку.`,
      );
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = 'Масло выгорело (низ)';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await era.printAndWait(
        `${you.name} смотрит, как ${chara17.name} пересекает финиш, ${chara17.sex} вся дрожит и под рёв трибун стремительно уходит с дорожки.`,
      );
      await era.printAndWait(`${you.name} спешит в раздевалку.`);
      await era.printAndWait('Иначе быть не может.');
      await era.printAndWait(
        `${you.name} чувствует, что сходит с ума. Глядя на дорожку, ${chara17.sex} едва не рухнула в Зоне, и ${you.name} понимает, какова та самая цена.`,
      );
      await era.printAndWait(
        `Зона -- её топливо есть будущее скаковых девушек! Иначе ${chara17.name} ни за что не получила бы таких ран, точно, точно будто…`,
      );
      await era.printAndWait('сила расцвета пропала.');
      await era.printAndWait(
        `${you.name} приходит в раздевалку -- и вдруг оглушительный грохот! ${you.name} распахивает дверь и видит: в стене зияет дыра.`,
      );
      if (i_emperor) {
        await chara17.say_and_wait(
          'Сила моя и впрямь внезапно пропала на трассе?',
        );
      } else {
        await chara17.say_and_wait('Прости, я немного вспылила…');
      }
      await era.printAndWait(
        `${you.name} бросается вперёд и смотрит на ${chara17.name} окровавленные руки, и ${you.name} спешит за аптечкой.`,
      );
      await era.printAndWait(
        `Если так пойдёт, не то что мечтать о победе -- ${chara17.sex} даже на дорожку выйти не сможет.`,
      );
      await chara17.say_and_wait('Даже так я не остановлюсь.');
      await era.printAndWait(
        `${you.name} в изумлении поднимает голову и видит: в глазах ${chara17.name} -- то, чего ${you.name} совершенно не может понять.`,
      );
      await era.printAndWait('И изумление, и досада, и восторг, и ярость.');
      await era.printAndWait([
        {
          content: '???「В то мгновение, когда Зона исчезла,',
          color: luna.color,
        },
        { content: 'я увидела --', color: emperor.color },
        { content: '」', color: luna.color },
      ]);
      await era.printAndWait([
        { content: '???「', color: emperor.color },
        { content: 'Ещё чуть-чуть…', color: luna.color },
        { content: 'чуть', color: emperor.color },
        { content: '(Эдем)', color: luna.color },
        { content: '」', color: emperor.color },
      ]);
      await era.printAndWait(
        `${you.name} не находит, что ответить, и, сдерживая слёзы, обрабатывает ${chara17.name} раны.`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_ge: (() => {
    const title = 'Край Зоны';
    /**
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('Ха… ха…');
      await chara17.print_and_wait('Ха…');
      await chara17.print_and_wait(
        `${chara17.name} Мир перед глазами яростно качается. ${chara17.sex} видит всё смазанным.`,
      );
      await chara17.print_and_wait(
        `Головокружение и боль накатывают приливом, и ${chara17.sex} чувствует: Зона отторгает — ${chara17.name} это осознаёт.`,
      );
      await chara17.print_and_wait(`${chara17.sex} Уже не всесильна.`);
      await chara17.print_and_wait(
        `С каждым шагом ${chara17.name} чувствует огромный диссонанс.`,
      );
      await chara17.print_and_wait(
        `Нога вниз, нога вверх. От дикой боли ${chara17.sex} страшно кривит лицо.`,
      );
      await chara17.print_and_wait(
        `Ветер, что раньше легко рассекался, теперь железной стеной бьёт так, что ${chara17.sex} вся в ранах.`,
      );
      await chara17.print_and_wait(
        `В этой скачке ${chara17.sex} — птица со сломанными крыльями в буре.`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `Веки тяжелеют, у ${chara17.name} сознание уже плывёт.`,
      );
      await chara17.print_and_wait(
        'Зона рушится; застывшая картина снова начинает двигаться.',
      );
      await chara17.print_and_wait(
        'Умамусуме бегут, бьют копытами по зелёному газону, поднимают пыль, пускают срезанную траву плясать на ветру.',
      );
      await chara17.print_and_wait(
        'Сердце колотится всё быстрее — а силы нет ни на каплю.',
      );
      await chara17.print_and_wait(
        'Части тела — мышцы, жилы, внутренности — рвёт чудовищная инерция.',
      );
      await chara17.print_and_wait(
        'Если не остановиться на этом повороте, в миг, когда Зона спадёт совсем —',
      );
      await chara17.print_and_wait('Она умрёт.');
      if (i_emperor) {
        await chara17.say_and_wait(
          'Трасса — не небесный путь; когда-нибудь придётся остановиться.',
        );
      } else {
        await chara17.say_and_wait(
          'Вот правда Зоны… прожигать силу полного расцвета…',
        );
      }
      await chara17.print_and_wait(
        'Поколение за поколением смельчаки входили в Зону и прожигали своё будущее, мечты и все возможности.',
      );
      await chara17.print_and_wait(`Настал черёд ${chara17.name} .`);
      await chara17.print_and_wait(
        'Что делать на пороге конца карьеры — и самой жизни? Этому никто не учил.',
      );
      await era.printAndWait([
        {
          content: 'Луна',
          color: luna.color,
        },
        '&',
        { content: 'Император', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '.', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: 'Луна',
          color: luna.color,
        },
        '&',
        { content: 'Император', color: emperor.color },
        '「',
        { content: 'Ты', color: emperor.color },
        { content: ' будешь со мной', color: luna.color },
        { content: ' (я)', color: emperor.color },
        { content: ' вместе, правда?', color: luna.color },
        '」',
      ]);
      await era.printAndWait(
        `Выдохнув всё, что было в груди, на глазах у тысяч и тысяч зрителей, ${chara17.name} рванула вперёд!!!`,
      );
      await era.printAndWait('Нет дороги дальше — пробьёшь её сама!');
      await era.printAndWait([
        {
          content: 'Луна',
          color: luna.color,
        },
        '&',
        { content: 'Император', color: emperor.color },
        '「',
        { content: 'Ради ', color: emperor.color },
        { content: 'нашей', color: luna.color },
        { content: ' общей', color: emperor.color },
        { content: ' мечты!!!', color: luna.color },
        '」',
      ]);
      era.printButton('「Вперёд!!!!!!!」', 1);
      await era.input();
      await you.print_and_wait('Вперёд!!!!!!!');
      await you.print_and_wait('Вперёд!!!!!!!');
      await era.printAndWait(`${you.name} уже всё равно, разорвёт ли горло.`);
      await era.printAndWait(
        `${you.name} Знает лишь, что ${chara17.name} напролом идёт к вашим мечтам.`,
      );
      await era.printAndWait('Уже близко! Уже близко!');
      await era.printAndWait(
        'В громовом ликовании сильнейшая умамусумэ шагнула в неизвестную даль.',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_be: (() => {
    const title = 'Последний аккорд';
    /**
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('Ха… ха…');
      await chara17.print_and_wait('Ха…');
      await chara17.print_and_wait(
        `${chara17.name} Мир перед глазами яростно качается. ${chara17.sex} видит всё смазанным.`,
      );
      await chara17.print_and_wait(
        `Головокружение и боль накатывают приливом, и ${chara17.sex} чувствует: Зона отторгает — ${chara17.name} это осознаёт.`,
      );
      await chara17.print_and_wait(`${chara17.sex} Уже не всесильна.`);
      await chara17.print_and_wait(
        `С каждым шагом ${chara17.name} чувствует огромный диссонанс.`,
      );
      await chara17.print_and_wait(
        `Нога вниз, нога вверх. От дикой боли ${chara17.sex} страшно кривит лицо.`,
      );
      await chara17.print_and_wait(
        `Ветер, что раньше легко рассекался, теперь железной стеной бьёт так, что ${chara17.sex} вся в ранах.`,
      );
      await chara17.print_and_wait(
        `В этой скачке ${chara17.sex} — птица со сломанными крыльями в буре.`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `Веки тяжелеют, у ${chara17.name} сознание уже плывёт.`,
      );
      await chara17.print_and_wait(
        'Зона рушится; застывшая картина снова начинает двигаться.',
      );
      await chara17.print_and_wait(
        'Умамусуме бегут, бьют копытами по зелёному газону, поднимают пыль, пускают срезанную траву плясать на ветру.',
      );
      await chara17.print_and_wait(
        'Сердце колотится всё быстрее — а силы нет ни на каплю.',
      );
      await chara17.print_and_wait(
        'Части тела — мышцы, жилы, внутренности — рвёт чудовищная инерция.',
      );
      await chara17.print_and_wait(
        'Если не остановиться на этом повороте, в миг, когда Зона спадёт совсем —',
      );
      await chara17.print_and_wait('Она умрёт.');
      if (i_emperor) {
        await chara17.say_and_wait(
          'Трасса — не небесный путь; когда-нибудь придётся остановиться.',
        );
      } else {
        await chara17.say_and_wait(
          'Вот правда Зоны… прожигать силу полного расцвета…',
        );
      }
      await chara17.print_and_wait(
        'Поколение за поколением смельчаки входили в Зону и прожигали своё будущее, мечты и все возможности.',
      );
      await chara17.print_and_wait(`Настал черёд ${chara17.name} .`);
      await chara17.print_and_wait(
        'Что делать на пороге конца карьеры — и самой жизни? Этому никто не учил.',
      );
      await era.printAndWait([
        {
          content: 'Луна',
          color: luna.color,
        },
        '&',
        { content: 'Император', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '.', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: 'Луна',
          color: luna.color,
        },
        '&',
        { content: 'Император', color: emperor.color },
        '「',
        { content: 'Я', color: emperor.color },
        { content: ' (я) передам', color: luna.color },
        { content: ' бесценный опыт', color: emperor.color },
        { content: ' тебе…', color: luna.color },
        '」',
      ]);
      await chara17.print_and_wait('— Ну давай.');
      await chara17.print_and_wait(
        `Как навстречу собственной судьбе, ${chara17.name} рванула к своему концу.`,
      );
    };
    f.title = title;
    return f;
  })(),
  re_good_end: (() => {
    const title = (emperor) => [
      ['Эдем увидел меня ', { content: '(я)', color: emperor.color }],
    ];
    /**
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     */
    const f = async (chara17, luna, emperor, you) => {
      await luna.print_and_wait('Где это?');
      await luna.print_and_wait('умамусумэ словно внезапно очнулась ото сна.');
      await luna.print_and_wait('Это бескрайняя степь.');
      await luna.print_and_wait(
        `умамусумэ бежит, ветер колышет зелень и развевает ${chara17.sex} пряди.`,
      );
      await luna.print_and_wait(
        `${chara17.sex} Над головой сразу и солнце, и луна.`,
      );
      await luna.print_and_wait(
        'Под солнцем и луной несколько фигур смотрят на Скаковую.',
      );
      await luna.print_and_wait(
        'Три богини — с любопытством смотрят на своё дитя.',
      );
      await luna.print_and_wait('Вот оно что.');
      await luna.print_and_wait('умамусумэ моргает.');
      await luna.print_and_wait(
        `умамусумэ「 ${you.actual_name}, ты вечно твердишь, чтобы я отдыхала. Теперь… я добралась туда, где можно почить навеки.」`,
      );
      await luna.print_and_wait(
        'умамусумэ「Когда я впервые услышала имя [Эдем], я не могла вообразить, какую величественную и прекрасную картину оно вмещает.」',
      );
      await luna.print_and_wait('умамусумэ「Это совершенно новый мир.」');
      await luna.print_and_wait(
        'умамусумэ「Быть может, и здесь есть жизнь. Со своими радостями и печалями, как у нас.」',
      );
      await luna.print_and_wait(
        'умамусумэ「С пёстрыми историями и жаркими желаниями, с романтикой, любовью и борьбой.」',
      );
      await luna.print_and_wait('умамусумэ「Я наконец добралась —」');
      await luna.print_and_wait(
        'Бег Скаковой постепенно стихает, и наконец она останавливается перед богинями.',
      );
      await era.printAndWait(
        'Три богини「Дитя, поздравляем: ты достигла конца всего… и начала всего. Ты — первая умамусумэ, что пришла в Эдем.」',
      );
      await era.printAndWait(
        'Три богини「Мы наградим тебя и исполним твою истинную мечту! Итак, прежде чем загадать желание, хочешь о чём-нибудь спросить?」',
      );
      era.drawLine();
      await luna.print_and_wait(
        'умамусумэ вспоминает свою жизнь, и перед глазами вспыхивают картины.',
      );
      await luna.print_and_wait(
        'умамусумэ「Наши чаяния и недосягаемые мечты —」',
      );
      await luna.print_and_wait(
        'умамусумэ「Наше наследие и всё, что мы любим, —」',
      );
      await luna.print_and_wait(
        'умамусумэ「Как они не угасают сквозь годы и переходят от поколения к поколению Скаковых?」',
      );
      await luna.print_and_wait(
        'умамусумэ задаёт вопрос, что лежит у неё на сердце, но, не дожидаясь ответа богинь, отвечает сама:',
      );
      await luna.print_and_wait(
        'умамусумэ「Потому что умамусумэ и тренер… из-за уз между нами?」',
      );
      await luna.print_and_wait(
        'умамусумэ касается лба и, подняв лицо, ослепительно улыбается.',
      );
      await luna.print_and_wait(
        `Богини ласково гладят ${chara17.sex} растрёпанные пряди.`,
      );
      await era.printAndWait('Три богини「Тогда каково твоё желание?」');
      await luna.print_and_wait(
        'умамусумэ раскрывает объятия, словно обнимая этот новый мир.',
      );
      await luna.print_and_wait(
        'умамусумэ「Мне нужно место, где мечты смогут длиться.」',
      );
      await luna.print_and_wait(
        'умамусумэ「Место, где Скаковые будут бежать вечно.」',
      );
      await luna.print_and_wait(
        'умамусумэ「Место, где, пока мы ещё слышим, как любящие нас люди ликуют и молятся, вымаливая нам победу, —」',
      );
      await luna.print_and_wait(
        'умамусумэ「мы всегда сможем выйти вперёд и одолеть любого сильного соперника.」',
      );
      await luna.print_and_wait(
        'умамусумэ「Эдем на земле! Эдем, куда сможет прийти любая умамусумэ, пока жива мечта!」',
      );
      await era.printAndWait(
        'Богини молча кивают, и умамусумэ снова открывает рот.',
      );
      await luna.print_and_wait(
        'умамусумэ「И ещё: я хочу вернуться. Там меня наверняка ждёт тот, кого я люблю.」',
      );
      await era.printAndWait(
        'Три богини「Какое жадное дитя… мм… но мы вроде и не говорили, что желание может быть только одно?」',
      );
      era.drawLine();
      await era.printAndWait('Скачка окончена.');
      await era.printAndWait(
        `Когда толпа разошлась, ${you.name} под предлогом уходит от обступивших журналистов и коллег и возвращается на трассу.`,
      );
      await era.printAndWait(
        `${you.name} видит ту Скаковую, которую так хотелось увидеть.`,
      );
      await era.printAndWait(
        `${luna.sex} Стоя спиной, ${you.name} не видит, какое у ${luna.sex} сейчас лицо.`,
      );
      await era.printAndWait(
        `Возможно, ${luna.sex} всё ещё потрясена картиной победы, а может, ${luna.sex} ещё смакует тот пыл, что ${you.name} не знает.`,
      );
      await era.printAndWait(
        `Или ${luna.sex} просто устала и хочет побыть одна.`,
      );
      await era.printAndWait(
        `${you.name} обессиленно опускается на землю, и от усталости последних дней у ${you.name} почти не осталось сил даже встать.`,
      );
      await era.printAndWait(
        `${you.name} запрокинув голову, смотрит в небо и замечает: вдали на ясной синеве всё ещё висит луна — солнце и луна вместе.`,
      );
      await era.printAndWait(`${you.name} длинно выдыхает`);
      await luna.say_as_unknown_and_wait(you.actual_name);
      await era.printAndWait(
        `Наконец, ${you.name} слышит ${luna.sex} зов. С сильным трепетом ${you.name} смотрит на ${luna.sex}, но не отвечает ${luna.sex}.`,
      );
      await era.printAndWait(
        `${you.name} не знает, пасть ли на колени или глупо заулыбаться. Сейчас ${you.name} стоит перед Луной — или перед Императором?`,
      );
      era.drawLine();
      await luna.say_as_unknown_and_wait(
        'Когда одна душа засыпает, просыпается другая.',
      );
      await luna.say_as_unknown_and_wait(
        'Одна скорбит, другая ярится — будто луна и солнце, никогда не встречаются, отталкивают друг друга.',
      );
      await era.printAndWait(
        `${luna.sex} Смотрит в бескрайнее небо, но лицо так тяжело, будто перед глазами бездна.`,
      );
      era.printButton('「Может, ты всего лишь солнце.」', 1);
      era.printButton('「Может, ты всего лишь луна.」', 2);
      await era.input();
      await era.printAndWait(
        `Слыша слова ${you.name}, ${chara17.sex} опускает голову.`,
      );
      era.printButton('「Но ты можешь быть и солнцем, и луной.」', 1);
      era.printButton('「Но ты можешь быть и Императором, и Луной.」', 2);
      await era.input();
      await era.printAndWait(
        'Взгляды сходятся вслед за отсветом солнца и луны.',
      );
      await era.printAndWait(
        `${luna.sex} заворожённо смотрит на ${you.name}, и вспыхивают щёки, краснеют глаза.`,
      );
      await era.printAndWait(
        `${you.name} протягивает руку, а ${luna.sex} бросается к тебе. Луна? Император? ${you.name} уже не думает об этом.`,
      );
      await era.printAndWait(
        `${you.name} берёт ${luna.sex} за протянутую руку — и они обнимаются вволю, слёзы льют как дождь.`,
      );
      await era.printAndWait(
        `${you.name} верит: в этот миг в объятиях ${you.name} — ${luna.sex}, что лишь с ${you.name} жарко обнимается и целуется, ${luna.sex} тоже больше не связана этим вопросом.`,
      );
      await era.printAndWait(
        'После глубокого поцелуя оба ловят дыхание, надеясь перевести дух до новой бури, в которой снова откроются сердца.',
      );
      await era.printAndWait(
        `${you.name} слышит, как ${luna.sex} прижимается к твоей груди. Такого жара прежде не бывало — в нём и непререкаемость Императора, и нежность Луны, как вода.`,
      );
      await you.say_and_wait(
        'Ты — Император, которого я люблю, и Луна, которая любит меня.',
        true,
      );
      await era.printAndWait(
        `${you.name} так и думает, но через миг качает головой и под тихий вскрик красавицы в объятиях увлекает ${luna.sex} за собой на траву.`,
      );
      era.printButton('「Имя моей любимой — Симболи Рудольф.」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_luna: (() => {
    const title = 'Вечный круг луны';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, emperor, chara17, you) => {
      await era.printAndWait('Скачка закончилась.');
      await era.printAndWait(
        `Когда толпа разошлась, ${you.name} находит предлог, ускользает от обступивших репортёров и коллег и возвращается на Скаковую трассу.`,
      );
      await era.printAndWait(
        `${you.name} видит Скаковую, которую так хотелось увидеть.`,
      );
      await era.printAndWait(
        `${chara17.name} стоит вдалеке под закатом. Ветер поднимает зелень и ворошит ${chara17.sex} рассыпавшиеся пряди.`,
      );
      await era.printAndWait(
        `Лунная ночь уже близко, солнце ещё не село. ${chara17.sex} стоит спиной, и ${you.name} не видит ${chara17.sex} теперешнего лица.`,
      );
      await era.printAndWait(
        `Быть может, ${chara17.sex} всё ещё потрясена картиной своей победы, а может, ${chara17.sex} всё ещё вкушает тот пыл, о котором ${you.name} не знает.`,
      );
      await era.printAndWait(
        `Или ${chara17.sex} просто устала и хочет побыть одна.`,
      );
      await era.printAndWait(
        `${you.name} бессильно оседает на землю: усталость последних дней почти не оставила ${you.name} сил даже на то, чтобы встать.`,
      );
      await era.printAndWait(
        `${you.name} запрокидывает голову, смотрит в небо и видит: в ясной дали всё ещё висит луна — солнце и луна в одном небе.`,
      );
      await era.printAndWait(`???「${you.actual_name}」`);
      await era.printAndWait(
        `Наконец ${you.name} слышит, как ${chara17.sex} зовёт. С тяжкой тревогой в груди ${you.name} смотрит на ${chara17.sex}, но так и не отвечает ${chara17.sex}.`,
      );
      await era.printAndWait(
        `${you.name} не знает, пасть ниц или глупо улыбнуться. То, с чем ${you.name} сейчас лицом к лицу, — Луна или Император?`,
      );
      era.drawLine();
      await era.printAndWait(
        '???「Всякий раз, когда одна душа засыпает, пробуждается другая.」',
      );
      await era.printAndWait(
        '???「Одна скорбит, другая ярится — словно луна и солнце, что никогда не встречаются и лишь отталкивают друг друга.」',
      );
      await era.printAndWait(
        `${chara17.sex} Смотрит в бескрайнее небо — а лицо так тяжело, словно перед ней бездна.`,
      );
      await luna.say_as_unknown_and_wait(
        `Я когда-то очень ненавидела того Императора.`,
      );
      await era.printAndWait(
        `${you.name} заворожённо смотрит на ${chara17.sex}.`,
      );
      await luna.say_as_unknown_and_wait(
        `Но под конец ${chara17.sex} сказала мне: 『Тот шут от начала и до конца верил, что я не проиграю.』`,
      );
      await luna.say_as_unknown_and_wait(
        `Поэтому ${chara17.sex} дарует ${you.actual_name} прекрасный сон, от которого уже не проснуться.`,
      );
      await luna.print_and_wait('???「Путь Императора уже окончен.」');
      await era.printAndWait(
        `В прежде печальном взгляде Луны стоит растерянность. Желание ваше уже сбылось, и всё же ${
          chara17.sex
        } не понимает, отчего так пусто на душе.`,
      );
      await luna.say_and_wait('Значит, и моя история тоже должна закончиться?');
      await era.printAndWait(
        'Взгляды сходятся вслед за отсветом солнца и луны.',
      );
      await era.printAndWait('Ночь опускается, и солнце пропадает без следа.');
      await era.printAndWait(
        'Остаются лишь нежные объятия яркой луны на небе.',
      );
      await era.printAndWait(`${you.name} опускает голову, и краснеют глаза.`);
      era.printButton('「Я останусь с тобой.」', 1);
      era.printButton('「История 『Императора』 никогда не кончится.」', 2);
      await era.input();
      await luna.say_and_wait('Вот как.');
      await era.printAndWait('Луна тяжело ступила и пошла в сторону луны.');
      await era.printAndWait(
        `${you.name} не знал, куда ${luna.sex} направляется.`,
      );
      await era.printAndWait([
        `Но ${you.name} всё же шатаясь поднялся и пошёл следом за `,
        luna.get_colored_name(),
        `— куда бы ${luna.sex} ни направилась.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_emperor: (() => {
    const title = 'Воцарение Императора';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} you 玩家
     */
    const f = async (emperor, luna, chara17, you) => {
      await era.printAndWait('Скачка закончилась.');
      await era.printAndWait(
        `Когда толпа разошлась, ${you.name} под предлогом ушёл от обступивших его журналистов и коллег и вернулся на дорожку.`,
      );
      await era.printAndWait(
        `${you.name} увидел ту умамусумэ, которую так хотел увидеть.`,
      );
      await era.printAndWait(
        `${chara17.name} Далеко под закатом, среди колышущейся зелени, стояла ${chara17.sex}  с разметавшимися прядями.`,
      );
      await era.printAndWait(
        `Лунная ночь вот-вот наступит, солнце ещё не село, и ${chara17.sex} стояла спиной, а ${you.name} не видел, какое ${chara17.sex} носит сейчас лицо.`,
      );
      await era.printAndWait(
        `Быть может, ${chara17.sex} всё ещё потрясена зрелищем победы, а может, ${chara17.sex} всё ещё вкушает тот пыл, которого ${you.name}  не знает.`,
      );
      await era.printAndWait(
        `Или ${chara17.sex} просто устала и хочет побыть одна.`,
      );
      await era.printAndWait(
        `${you.name} бессильно осел на землю. Усталость последних дней почти лишила ${you.name}  сил даже встать.`,
      );
      await era.printAndWait(
        `${you.name} Запрокинул голову, глянул в небо и увидел: в ясной дали всё ещё висела луна — солнце и луна вместе на небосводе.`,
      );
      await era.printAndWait(`???「${you.actual_name}」`);
      await era.printAndWait(
        `Наконец ${you.name} услышал, как ${chara17.sex} зовёт. С сильным волнением ${you.name} взглянул на ту, кем была ${chara17.sex}, и не ответил той, кем была ${chara17.sex}.`,
      );
      await era.printAndWait(
        `${you.name} не знал, пасть на колени или глупо улыбнуться. То, перед чем сейчас ${you.name}  оказался, — Луна или Император?`,
      );
      era.drawLine();
      await era.printAndWait(
        '???「Когда засыпает одна душа, просыпается другая.」',
      );
      await era.printAndWait(
        '???「Одна скорбит, другая ярится — словно луна и солнце, что век не встречаются и только отталкивают друг друга.」',
      );
      await era.printAndWait(
        `${chara17.sex} Глядела в бескрайнее небо с лицом таким тяжёлым, будто перед ней лежала бездна.`,
      );
      await emperor.say_as_unknown_and_wait(
        'На днях я едва не пала на скаковом поле, но под конец слабый голос поддержал меня.',
      );
      await era.printAndWait(
        `${you.name} смотрел застывшим взглядом на ту, кем была ${chara17.sex}.`,
      );
      await emperor.say_as_unknown_and_wait(
        `${chara17.sex} дал мне силы держаться. ${chara17.sex} сказала:『Я тебя ненавижу больше всех, но ради нашей мечты молю лишь об одном.』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『С победой ступай к ${you.actual_name}.』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『Пусть даже потом мы больше никогда не встретимся』, — ${chara17.sex} говорила… ${chara17.sex} тоже готова была отдать всё.`,
      );
      await era.printAndWait(
        `Острый взгляд Императора блуждал в смятении, и ${chara17.sex} так и не могла вспомнить, кто посмел так шуметь у себя в голове.`,
      );
      await emperor.say_and_wait(`${chara17.sex} Кто это?`);
      await era.printAndWait(
        'Взгляд скользнул туда, где сходятся последние лучи солнца и луны.',
      );
      await era.printAndWait('Небо слишком ярко — луна пропала.');
      await era.printAndWait('Остался лишь бесконечный свет солнца.');
      await era.printAndWait(
        `${you.name} опустил голову, глаза налились красным.`,
      );
      era.printButton('「Мой Император, она мне очень дорога.」', 1);
      era.printButton('「…Кто же это?」', 2);
      await era.input();
      await emperor.say_and_wait('Вот как.');
      await era.printAndWait('Император тяжело ступила и пошла к солнцу.');
      await era.printAndWait(
        `${you.name} не знал, куда ${emperor.sex} направляется.`,
      );
      await era.printAndWait([
        `Но ${you.name} всё же шатаясь поднялся и пошёл следом за `,
        emperor.get_colored_name(),
        `— куда бы ${emperor.sex} ни направилась.`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_wax_and_wane: (() => {
    const title = 'Полнота и ущерб';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        'В детстве домашние не возлагали на меня надежд.',
      );
      await luna.print_and_wait(
        'Мне позволяли носиться где угодно и пропускать тренировки: ко мне у всех было отношение「как угодно」.',
      );
      await luna.print_and_wait(
        'Семья Симболи — такое место: здесь заботятся лишь о силе.',
      );
      await luna.print_and_wait('И потому сильные сёстры неслись по дорожке.');
      await luna.print_and_wait('А я могла проспать на лужайке целый день.');
      await luna.print_and_wait(
        'Я хотела жить легко, но с годами всё яснее понимала: не могу унять смятение в теле.',
      );
      await luna.print_and_wait('Словно кровь горела у меня в жилах.');
      await luna.print_and_wait(
        'И каждый раз в сердце поднималась жестокая, хищная ярость.',
      );
      await luna.print_and_wait(
        'Хотелось рвать, крушить, втаптывать соперницу в землю, глумиться над ней! Насмехаться!',
      );
      await luna.print_and_wait('-- Я отниму у всех всё и предам мир огню!');
      await luna.print_and_wait(
        'Когда силы иссякали и я едва приходила в себя, оставалась лишь бесконечная пустота и страх.',
      );
      await luna.print_and_wait(
        'Я стала тревожиться из-за всего… Чтобы не давать мыслям разгуляться, сама стала выходить на тренировки.',
      );
      await luna.print_and_wait(
        'Лишь в предельном беге я успокаивалась… и снова становилась собой.',
      );
      await luna.print_and_wait('「Луна.」');
      await luna.print_and_wait('Мама дала мне красивое имя -- и нежное.');
      await luna.print_and_wait(
        'Я не хотела стать чудовищем, умеющим лишь изливать ярость…',
      );
      await luna.print_and_wait(
        'Но я не могла побороть жестокость крови -- как все прежние Скаковые девушки семьи Симболи.',
      );
      await luna.print_and_wait(
        'Тогда я поняла, почему семья меня не воспитывала.',
      );
      await luna.print_and_wait(
        'Потому что кровь 「Симболи」, текущая из поколения в поколение, сама выведет меня на предначертанный путь.',
      );
      await luna.print_and_wait('Победа. Победа.');
      await luna.print_and_wait(
        'Лишь бы побеждать -- даже если я перестану быть собой, это дозволено.',
      );
      await luna.print_and_wait(
        'Да что там: лишь бы победа, остальное неважно.',
      );
      await luna.print_and_wait(
        'Когда я явила редкостный дар, семья Симболи взялась меня растить.',
      );
      await luna.print_and_wait(
        'Стоит захотеть -- и любые ресурсы будут у меня без труда.',
      );
      await luna.print_and_wait(
        'Стоит захотеть -- и всяческая ласка будет у меня без труда.',
      );
      await luna.print_and_wait('Но пустота и страх никуда не делись.');
      await luna.print_and_wait(
        'Бег ненадолго опустошал голову, но когда я обходила всех соперниц и, задыхаясь, стояла на финише и смотрела назад, ловила себя на том, что уголки губ сами ползут вверх.',
      );
      await luna.print_and_wait('Словно я становилась другим человеком.');
      await luna.print_and_wait(
        'И я невольно думала: Луна -- это настоящая я?',
      );
      await luna.print_and_wait(
        'Или настоящая я -- то чудовище, что на скаковом поле крушит всех вокруг?',
      );
      await luna.print_and_wait(
        'Так хотелось кому-то выплакаться, но чем старше я становилась, тем внезапнее уходили те, кто был ко мне нежен.',
      );
      await luna.print_and_wait(
        'Мать, напуганная охотниками, зачахла от тоски; старшая сестра угасла в подготовке к скачкам.',
      );
      await luna.print_and_wait('Может, и я…');
      await luna.print_and_wait(
        'Под взглядом ледяной луны я как безумная пришла к взрослым.',
      );
      await luna.say_and_wait('Я хотела--');
      await luna.print_and_wait(
        'безопасности. Хотела больше не бояться. Но перед добрым дедом и родителями так и не смогла этого сказать.',
      );
      await luna.print_and_wait('Я увидела ожидание в их глазах.');
      await luna.print_and_wait(
        'Поэтому я пожелала [любовь]: чтобы вокруг меня было несчётное число братьев и сестёр, и чтобы занятные люди со всех концов света окружили семью Симболи.',
      );
      await luna.print_and_wait('Лишь бы здесь стало шумно--');
      await luna.print_and_wait('Лишь бы меня окружили люди--');
      await luna.print_and_wait(
        'Обязательно, обязательно появится шанс -- обязательно найдётся кто-то, кто избавит меня от пустоты и страха.',
      );
      await luna.print_and_wait('Тогда… я… Луна… обязательно--');
      await luna.say_and_wait(`${you.actual_name}?`);
      await luna.print_and_wait(
        'Луна вздрогнула и проснулась -- одна на кровати.',
      );
      await luna.print_and_wait(
        'Почему ей приснилось такое? Луна схватилась за голову. Взглянув на яркую луну за окном, она почувствовала головокружение.',
      );
      await luna.print_and_wait(
        'Ведь она уже приняла поддержку и твёрдо решила рвануть к идеалу, но стоило подумать, что [Император] отберёт у неё сознание и пробудит жестокую кровь…',
      );
      await luna.print_and_wait(
        'Слёзы покатились у Луны сами. Как ни крути, ей всё равно было очень страшно.',
      );
      await luna.print_and_wait(
        'Она ведь уже умела терпеть и верила: стоит вытерпеть -- и всё переменится к лучшему.',
      );
      await luna.print_and_wait(
        `Но после новой встречи с ${you.actual_name} терпение, на которое она всегда опиралась, перестало помогать.`,
      );
      await luna.say_and_wait('Так хочется тебя увидеть…');
      await luna.say_and_wait('Так хочется тебя увидеть…');
      await luna.print_and_wait(`${luna.teen_sex_title} Ночь без сна.`);
    };
    f.title = title;
    return f;
  })(),
  ws_a_stones_throw: (() => {
    const title = 'Всего в шаге';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `Как Луна стала Императором, ${you.name} наконец вспомнил.`,
      );
      await era.printAndWait(
        'То был безрассудный трюк: зелёный сопляк вздумал искусить будущую звезду Симболи.',
      );
      era.printButton(
        '「Раз так ненавидишь жестокость, пусть это делает кто-то другой?」',
        1,
      );
      await era.input();
      await luna.say_and_wait('Кто-то другой…?');
      era.printButton(
        '「Ага, кто-то другой. Ну, например -- другой человек. То есть другой ты.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name} хотелось просто пошутить и развеять печаль на лице Луны, но почему-то обычно озорной ребёнок слушал на удивление серьёзно.`,
      );
      await era.printAndWait(
        `Когда ${luna.sex} взглядом подгоняла, ${you.name} ломал голову, продолжая нелепый рассказ.`,
      );
      era.printButton(
        '「Создай существо не такое, как Луна, -- воинственное и жестокое.」',
        1,
      );
      era.printButton(
        '「Образ из воображения, построенный на твоём характере.」',
        2,
      );
      await era.input();
      await era.printAndWait(`${you.name} выдохнул -- и тут осенило.`);
      await you.say_and_wait('Точно, совсем как [Император]!');
      await era.printAndWait(
        `Луна бессмысленно смотрела, как ${you.name},${you.name} ликует от мысли, только что мелькнувшей в голове.`,
      );
      await era.printAndWait(
        `Н-нет, не надо-- ${you.name} почувствовал, как душа дрожит, и ${you.name} наконец всё вспомнил.`,
      );
      await era.printAndWait(
        `Император -- клетка, которую ${you.name} создал для Луны.`,
      );
      era.printButton(
        '「То, что не по силам Луне, пусть целиком довершит Император.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `Не так. Судьбу этого ребёнка, всё, что ${luna.sex} несёт на себе, — как можно так легкомысленно это обобщить?!`,
      );
      await you.say_and_wait('Вот так Луна запросто взойдёт на вершину, да?!');
      await you.say_and_wait('Замолчи! Да замолчи! Ни слова больше!!!', true);
      await era.printAndWait(
        `${you.name} Намертво сдавить себе горло — и посреди этого движения ${you.name} уже проснулся ото сна.`,
      );
      await era.printAndWait(`${you.name} Холодный пот пропитал насквозь.`);
      await era.printAndWait(
        `В ту пору ${you.name} был всего лишь самодовольным ублюдком. Твердил, будто везде не у дел, а на деле — пустая студенческая похвальба.`,
      );
      await era.printAndWait(
        `Встретив Луну, ${you.name} вывалил всё, что прятал в голове: стратегии, наблюдения и фантазии, которым не было суждено увидеть свет, а ещё то, что ${you.name} разглядел в Луне, что ${luna.sex} в будущем непременно станет кем-то великим, — и выпалил всё разом.`,
      );
      await era.printAndWait(
        `${you.name} Не ведал, до чего тогда потерял лицо, — но Луна в тот миг расцвела улыбкой облегчения.`,
      );
      await era.printAndWait('Улыбка, что расцвела в лунной ночи.');
      await era.printAndWait(
        'Тогда же поклялся: ради Луны пойдёт в огонь и в воду, положит и жизнь, и ум.',
      );
      await era.printAndWait(
        'Хоть вернуться к делу, хоть зубрить до упаду, хоть стать тренером Симболи Рудольф —',
      );
      await era.printAndWait(
        'Не ради того, чтобы слава [Императора] гремела на весь свет.',
      );
      await era.printAndWait('Всё — ради улыбки Луны!');
      await era.printAndWait('Но почему, почему всё вышло так…');
      await era.printAndWait(
        `${you.name} схватился за голову и тяжело вздохнул.`,
      );
    };
    f.title = title;
    return f;
  })(),
  fall_into_hell: (() => {
    const title = 'Падение в бездну';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, emperor, you) => {
      await era.printAndWait(
        `Пока соперницы одна за другой выходили на дорожку, ${you.name} вдруг понял: с Луной что-то не так.`,
      );
      await era.printAndWait(
        `${luna.sex} Сидит на стуле столбом и мутно смотрит на тебя.`,
      );
      await era.printAndWait(`Где Император? ${you.name} застыл.`);
      await era.printAndWait(
        `Под взглядом ${you.name} — полным недоумения — Луна открыла рот и не смогла вымолвить ни слова.`,
      );
      await luna.say_and_wait('Я не хочу… чтобы она снова выходила!');
      era.printButton('「Луна, заезд вот-вот начнётся!」', 1);
      era.printButton('「Всё хорошо, я буду рядом.」', 2);
      await era.input();
      await era.printAndWait(
        `Но как бы ${you.name} ни уговаривал, Луна только мотала головой и отказывалась.`,
      );
      await era.printAndWait(
        '— Заезд вот-вот начнётся. Если Император снова не 「появится」 — тогда и вправду конец.',
      );
      await era.printAndWait(
        `Деваться некуда: ${you.name} оставалось только сжать горло и изо всех сил выдавить голос шутовского скомороха.`,
      );
      era.printButton(
        '「Император, мой великий Император! Слышите? Громовой рёв народа!」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `Луна всё ещё плачет. В душе ${you.name} вспыхнула глухая злость. Да ведь уже сейчас…!`,
      );
      era.printButton(
        '「Государь, пока Вы почили, снова нашлись изменники, оскорбившие Вашу славу.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `Луна лишь беспомощно мотает головой. ${you.name} стиснул зубы.`,
      );
      era.printButton('「Проснитесь, обрушьте гнев, что кроет небо…」', 1);
      await era.input();
      await era.printAndWait(
        `От одержимости у ${you.name} перекосилось лицо, голос сел до хрипа.`,
      );
      await era.printAndWait(
        'Может, этот срыв и впрямь сработал: тело Луны понемногу перестало дрожать.',
      );
      await era.printAndWait(
        `${luna.sex} Смотрит на ${you.name}, и страх в глазах понемногу схлынул — на его место пришла та леденящая острота.`,
      );
      await era.printAndWait(
        `${you.name} выдохнул с облегчением — но умамусумэ перед глазами вдруг схватилась за голову.`,
      );
      await era.printAndWait(`Луна растерянно смотрит на ${you.name}.`);
      await luna.say_and_wait(`${luna.couple_title} Разве не мой друг?`);
      era.printButton(`「……${luna.couple_title} твой друг.」`, 1);
      era.printButton(`「Государь, ${luna.couple_title} достоин смерти!」`, 2);
      let ret = await era.input();
      if (ret === 2) {
        await luna.say_and_wait(
          'Я и вправду обязана так поступать? Я и вправду обязана стать тем противным обликом?',
        );
        era.printButton('「Нет… нет! Сейчас сниму тебя с заезда!」', 1);
        era.printButton('「Государь! Вы прирождённый Император!」', 2);
        ret = await era.input();
        if (ret === 2) {
          await luna.say_and_wait(
            'Я не Император! Не давай Луне исчезнуть снова. Так дальше — и Луны вправду не станет.',
          );
          await luna.say_and_wait('Если ты меня ещё любишь, то не…');
          await era.printAndWait(
            `Луна в отчаянии смотрит на ${you.name}, протягивая руку, будто хватается за последнюю соломинку.`,
          );
          await luna.say_and_wait('Не… оставляй меня…');
          await era.printAndWait(
            `${you.name} закрыл глаза. Луна так верит и так любит ${you.name}, и потому —`,
          );
          era.printButton('「Возьми меня за руку, Луна!」', 1);
          era.printButton('「Да здравствует Император!」', 2);
          let ret = await era.input();
          if (ret === 2) {
            await era.printAndWait(
              `Слова слетели с губ, и ${you.name} почувствовал, как время застыло, — но в следующее мгновение ${you.name} вдруг лишился права дышать.`,
            );
            await era.printAndWait(
              `Луна… нет, Император протянула руку и стиснула ${you.name}  за горло.`,
            );
          }
        }
      }
      if (ret === 1) {
        await era.printAndWait(
          `Услышав твои слова, Луна наконец выдохнула с облегчением. ${luna.sex} нетерпеливо потянулась к ${you.name}  — точно хваталась за соломинку, что не даёт утонуть.`,
        );
        await era.printAndWait(
          `${you.name}  невольно вздохнул — и что он сделал с Луной.`,
        );
        await era.printAndWait(
          'Почему раньше не заметил, что с Луной что-то не так? Какие бы ни вставали на пути бури и валы.',
        );
        await era.printAndWait(
          `Но теперь ещё не поздно! Как тренер Луны, её защитник и… любимый, ${you.name}  выдержит ради Луны любые бури.`,
        );
        era.printButton('「Луна, я…」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name} взглянул на Луну и уже готов был взять ладонь, которую протягивала ${luna.sex}.`,
        );
        await era.printAndWait(
          `Но та рука, что ${you.name}  сжимал бессчётное число раз и клялся никогда не отпускать, вдруг рванулась вперёд.`,
        );
        await era.printAndWait('Как железные клещи, насмерть впилась в горло.');
        await emperor.say_and_wait('Луна? Кто?');
      }
      await era.printAndWait(
        `Император с презрением стиснула ${you.name}  за горло и поднялась на ноги.`,
      );
      await emperor.say_and_wait(
        'Сколь долго Я спала? Где воры, что позарились на Мою славу?',
      );
      await era.printAndWait(
        `${emperor.sex} Свысока окинула взглядом всё вокруг и дивится, что каждый раз, едва пробудившись ото сна, ${emperor.sex} оказывается в другом месте.`,
      );
      await era.printAndWait(
        'И почему всякий раз после пробуждения всё ещё находятся те, кто смеет перечить Её воле?',
      );
      await era.printAndWait(
        `${you.name}  не мог вымолвить ни слова и не мог вырваться — только разинул рот и хрипло хватал воздух.`,
      );
      await era.printAndWait(
        `От нехватки воздуха у ${you.name}  поплыло в глазах, сознание уходило.`,
      );
      await emperor.say_and_wait('Хм.');
      await era.printAndWait(
        `Кажется, устав от молчания, Император небрежно швырнула ${you.name}  на пол. Глухой удар — и ${you.name}  скрутило в рвоте, будто внутренности сплющило насквозь.`,
      );
      await era.printAndWait(
        `Не в силах подняться, ${you.name} мог лишь лежать ничком и слушать, как шаги Императора уходят прочь.`,
      );
      await era.printAndWait(
        `На самом краю угасающего сознания ${you.name}  словно снова услышал плач Луны.`,
      );
      await era.printAndWait('Прости… пути назад уже нет.');
      await era.printAndWait(`${you.name}  потерял сознание.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
   * @param {boolean} i_good_end 是否是 Good Ending（若是则是鲁铎象征）
   * @param {boolean} i_emperor 目前是否是皇帝人格（非 GE 的情况下）
   */
  async ws_palace(chara17, i_good_end, i_emperor) {
    if (i_good_end) {
      await chara17.say_and_wait(
        'Какое небо тебе по сердцу? Солнце или луна? Не страшно, если не выберешь: под каким бы небом ты ни оказался, однажды мы встретимся. Мм, в этот раз мы сами найдём тебя.',
      );
    } else if (i_emperor) {
      await chara17.say_and_wait(
        'Раз ещё можно шагнуть вперёд — незачем оставаться здесь! Мой небесный путь не ведает остановки. Ликуй, шут! Ты узришь деяния Императора. В награду Я жалую тебе славу вечно следовать за Мной и служить Мне… Ну, ответ?',
      );
    } else {
      await chara17.say_and_wait(
        `История Императора уже окончена, а моя миссия ещё нет. Пойдём туда рука об руку — в то будущее, где каждая Скаковая ${chara17.uma_sex_title} сможет быть счастлива. Мм… это будущее должно включать и меня, так что… ты сделаешь меня счастливой, правда?`,
      );
    }
  },
};
