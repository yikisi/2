/**
 * @file 曼城茶座 - 育成
 * @author Necroz
 * @author Mr.E.（事件「怕黑」）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  race_end_win: (() => {
    const title = 'Победа в скачке!';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('…Получилось… я взяла… первое место.');
      await coffee.say_and_wait(
        'Я смогла… приблизиться к той спине… хе-хе. Мне и правда нравится… это чувство…',
      );
      era.printButton('Поздравляю, Кафе!', 1);
      await era.input();
      await coffee.say_and_wait([
        'Спасибо, ',
        callname,
        '…я в следующий раз тоже постараюсь…',
      ]);
      await coffee.say_and_wait(
        'Стараться победить… и снова вкусить это чувство…',
      );
      era.printButton('Но расслабляться нельзя.', 1);
      await era.input();
      await coffee.say_and_wait('…!');
      await coffee.say_and_wait(
        '…Да, верно. Нужно быть настороже и не зевать…',
      );
      await coffee.say_and_wait(
        'Потому что я—— нет, мы… ещё не обогнали ту спину…',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'В призах!!';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('…Я в призах…');
      era.printButton('Ты хорошо постаралась, Кафе.', 1);
      await era.input();
      await coffee.say_and_wait('…Да, кажется, я смогла… показать свою силу…');
      await coffee.say_and_wait('…Но этого далеко не достаточно…');
      await coffee.say_and_wait('Наша цель… ещё дальше впереди…');
      era.printButton('Дальше будем тренироваться ещё усерднее.', 1);
      await era.input();
      await coffee.say_and_wait('…М-м, я не могу вот так остановить шаг…');
      await coffee.say_and_wait([
        '…',
        callname,
        '. Впредь… тоже прошу не оставлять…!',
      ]);
      era.println();
      await era.printAndWait('——Тук.');
      await era.printAndWait([
        'Не слишком сильно стукнули ',
        coffee.get_colored_name(),
        ' по лбу.',
      ]);
      era.println();
      await coffee.say_and_wait('Больно… я тебя не забыла…!');
      era.println();
      era.printButton('Дальше будем стараться все вместе.', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = 'Поражение…';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, callname) => {
      await coffee.say_and_wait('…Я проиграла… сил не хватило…');
      await coffee.say_and_wait('Если уже здесь проигрыш… то я… до той спины…');
      era.printButton('Ты и так отлично справилась!', 1);
      await era.input();
      await coffee.say_and_wait(
        '『Отлично справилась』, да… такое моральное утешение… я не вижу в нём смысла…',
      );
      era.println();
      await era.printAndWait('——Тук.');
      await era.printAndWait('Стукнули Кафе по лбу чуть крепче.');
      era.println();
      await coffee.say_and_wait(
        'Больно…! Друг тоже так… но при моей нынешней силе…',
      );
      era.printButton('Так и сдашься?', 1);
      await era.input();
      await coffee.say_and_wait('…Вот так сдаться… я… не хочу.');
      era.println();
      await era.printAndWait('——Вот так и надо.');
      await era.printAndWait([
        'Будто эти слова у уха, воздух на миг стынет, становится холоднее…',
      ]);
      era.println();
      await coffee.say_and_wait([callname, '…и друг… спасибо вам…']);
      await coffee.say_and_wait('Я больше не проиграю.');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' снова полна огня и готовится к следующей скачке.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = 'Чёрная гончая';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      callname_32,
      t_call_c,
    ) => {
      await era.printAndWait([
        'Успешно завербовав ',
        coffee.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' с ',
        coffee.get_colored_name(),
        ' договариваетесь прийти на Тренировочное поле на пробежку-тест.',
      ]);
      await era.printAndWait([
        'Впрочем, хоть ты уже тренер ',
        coffee.get_colored_name(),
        ', а как бежит ',
        coffee.sex,
        ', видишь своими глазами впервые. Отборочные, где бежала ',
        coffee.sex,
        ', смотрел(а) в записи не раз — всё равно чего-то мало.',
      ]);
      await era.printAndWait(
        'Тренер, который завербовал подопечную, даже не посмотрев отборочные, — наверное, первый в Трейсене…',
      );
      await era.printAndWait([
        'Неподалёку уже на старте ',
        coffee.get_colored_name(),
        ' машет рукой ',
        you.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' отбрасывает мысли и внимательно смотрит на движения ',
        coffee.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'После свистка ',
        coffee.get_colored_name(),
        ' срывается со старта.',
      ]);
      era.printButton(
        '「М-м… со старта не очень быстро. Всё-таки ближе к преследованию и закрытию?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'У ',
        coffee.get_colored_name(),
        ' задание: бежать в ритме ',
        coffee.sex,
        ' и представить других ',
        coffee.uma_sex_title,
        ' на дорожке.',
      ]);
      await era.printAndWait([
        'Держа свой ритм, ',
        coffee.get_colored_name(),
        ' мягко и плавно шагает, спокойно проходит середину и выходит к точке финишного рывка.',
      ]);
      await era.printAndWait('——Бах.');
      await era.printAndWait([
        you.get_colored_name(),
        ' глаза сказали ',
        you.get_colored_name(),
        ', какой звук ты должен(на) был(а) услышать.',
      ]);
      await era.printAndWait([
        'К финишу ',
        coffee.get_colored_name(),
        ' корпус вниз — грязь взлетает из-под ног, как стрела с тетивы рвётся вперёд. Эта необычная взрывная сила в миг приковывает взгляд ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Словно гончая за зайцем, словно голодный орёл, ',
        you.get_colored_name(),
        ' не связывает этот дикий бег с таким молчаливым холодным ',
        coffee.child_sex_title,
        '.',
      ]);
      await era.printAndWait('Но…');
      await era.printAndWait('Это прекрасно.');
      await era.printAndWait([
        'Глядя, как эта чёрная гончая рвёт финишную ленту, ',
        you.get_colored_name(),
        ' невольно думает именно так.',
      ]);
      era.println();
      if (era.get('cflag:32:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait(['Йо, ', callname_32, '.']);
        await era.printAndWait([
          'Знакомый голос, ',
          you.get_colored_name(),
          ' оборачивается — ',
          tachyon.get_colored_name(),
          ' стоит сзади.',
        ]);
        await tachyon.say_and_wait([
          'Твоя новая подопечная — ',
          t_call_c,
          ' ? Какое совпадение, ха-ха-ха.',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          ' цель — догнать невидимого воображаемого друга. Обычному не понять. А я стремлюсь к пределу ',
          coffee.uma_sex_title,
          '… и дальше, не останавливаясь на простой победе.',
        ]);
        await tachyon.say_and_wait(
          'Быть тренером у такой пары чудаков тебе тоже несладко.',
        );
        await coffee.say_and_wait([call_32, '…Что ты делаешь?']);
        await era.printAndWait([
          'После теста ',
          coffee.get_colored_name(),
          ' возвращается к ',
          you.get_colored_name(),
          ', недовольно смотрит на ',
          you.get_colored_name(),
          ' рядом — ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await tachyon.say_and_wait([
          'Ой, ты как будто не рада, ',
          t_call_c,
          '…но пересекаться нам всё чаще: мы подопечные одного тренера, одни ',
          coffee.uma_sex_title,
          ', верно? Тре·не·р-кун?',
        ]);
        await coffee.say_and_wait([
          'Тренер-кун… ',
          call_32,
          ' тоже твоя подопечная? ',
          callname,
          '…',
        ]);
        await era.printAndWait([
          'Это проблема: не думал(а), что ',
          coffee.couple_title,
          ' знакомы и, кажется, не ладят…',
        ]);
        await tachyon.say_and_wait([
          'Пока, вы двое. Впредь давайте беречь друг друга. И я на тебя очень рассчитываю, ',
          t_call_c,
          '. Жду тебя — в смысле, отличном от моего.',
        ]);
        await era.printAndWait([
          'Пока ',
          you.get_colored_name(),
          ' ещё думает, как объяснить ',
          coffee.get_colored_name(),
          ', ',
          tachyon.get_colored_name(),
          ' бросает многозначительную фразу и уходит.',
        ]);
        era.printButton('「Эта… ну и…」', 1);
        await era.input();
        await coffee.say_and_wait([
          callname,
          '…пока не думай о ',
          call_32,
          '. Сейчас ты — мой тренер… для нас важнее догнать друга. Вот так просто… да?',
        ]);
        await era.printAndWait([
          'Верно, ',
          coffee.sex,
          ' это ',
          coffee.get_colored_name(),
          ', а не прочие ',
          coffee.uma_sex_title,
          '.',
        ]);
      }
      await era.printAndWait([
        'Собравшись с мыслями, вы начинаете сегодняшнюю тренировку.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'Навстречу дебюту';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait('Нет… нигде нет… куда же…');
      await era.printAndWait([
        'Сегодня ',
        coffee.get_colored_name(),
        ' дебютирует. Большинство ',
        coffee.uma_sex_title,
        ' трясёт от напряжения, но ',
        coffee.sex,
        ' думает не об этом.',
      ]);
      await coffee.say_and_wait([
        callname,
        ', до старта… я хочу… поискать… можно?',
      ]);
      era.printButton('「Иди. Всё будет хорошо.」', 1);
      await era.input();
      await coffee.say_and_wait('Здесь нет…');
      await coffee.say_and_wait('И тут нет…');
      await coffee.say_and_wait(
        '…Нашла…! Дальше финишной доски, там ждёт меня.',
      );
      await coffee.say_and_wait(
        'Выглядит очень радостно. Значит, я не ошиблась в выборе…',
      );
      era.printButton('「Гонись изо всех сил.」', 1);
      await era.input();
      await coffee.say_and_wait('…М-м.');
      await era.printAndWait([
        coffee.get_colored_name(),
        ', ',
        coffee.sex,
        ' — эта доныне тайная гонка преследования наконец выходит на настоящую трассу.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'Мираж';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await you.say_as_passer_by_and_wait(
        `Скаковая ${coffee.uma_sex_title} A`,
        'Ха, фу…! Всем спасибо за труд! Скачка была прекрасная!',
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${coffee.uma_sex_title} A`,
        [
          'Вон та… тебя зовут ',
          coffee.get_colored_name(),
          ', да? И тебе спасибо за труд…',
        ],
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${coffee.uma_sex_title} A`,
        'Э, а… не слышит? Это…',
      );
      await coffee.say_and_wait('…');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' стоит спиной к другим ',
        coffee.uma_sex_title,
        ' и молча смотрит вдаль.',
      ]);
      await era.printAndWait([
        'Прибежав в коридор участниц, ',
        you.get_colored_name(),
        ' находит ',
        coffee.get_colored_name(),
        ' и подходит.',
      ]);
      await coffee.say_and_wait(['А, ', callname, '…']);
      era.printButton('「Как результат?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '…Я проиграла. Друг один бежал впереди и пересёк финиш… всё дальше и дальше…',
      );
      await coffee.say_and_wait(
        'И выглядел очень радостно — наверное, потому что можно бежать на просторе. Но вместе с тем…',
      );
      await coffee.say_and_wait(
        'Разрыв… самый большой из всех… будто сняли путы, бежал очень быстро.',
      );
      await coffee.say_and_wait('…Я хочу догнать друга. Но… что мне делать…');
      await era.printAndWait([
        'По рассказу ',
        coffee.get_colored_name(),
        ', разрыв в скорости между 「другом」 и ',
        coffee.sex,
        ' кажется очень большим…',
      ]);
      await era.printAndWait(
        'Раз так, даже спешный план вряд ли даст плод. Тогда——',
      );
      era.printButton(
        '「Пока не ставим расписание скачек. Будем усиливаться шаг за шагом.」',
        1,
      );
      await era.input();
      await coffee.say_and_wait(
        'Шаг за шагом… значит, это займёт очень много времени…?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' совет ',
        coffee.get_colored_name(),
        ' ставит в нерешительность; по тяжёлому лицу ',
        coffee.sex,
        ' видно, внутри идёт жёсткий выбор.',
      ]);
      await coffee.say_and_wait(
        '…Поняла. Если сразу не догнать, да ещё тело у меня не из крепких… может, так и лучше.',
      );
      await era.printAndWait('На этом вы сходитесь.');
      await era.printAndWait([
        you.get_colored_name(),
        ' киваешь — ',
        coffee.sex,
        ' видит. Встаёшь рядом. Клянёшься: вместе ',
        coffee.sex,
        ' пойдёт за той же целью — ',
        coffee.sex,
        ' тоже.',
      ]);
      await you.say_as_passer_by_and_wait(
        `Скаковая ${coffee.uma_sex_title} A`,
        'Слушай, эти двое странные, нет…? Всё смотрят в пустую даль.',
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${coffee.uma_sex_title} B`,
        'Может, они оба… чудаки. Лучше не подходить близко…」',
      );
      await era.printAndWait([
        'Случайно коснувшись другого мира и спасённый(ая) ',
        coffee.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' решает понять мир, который знает только ',
        coffee.sex,
        '… и шаг за шагом брать хорошие места.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_our_taste: (() => {
    const title = 'Вкус только наш';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        'Когда вы с ',
        coffee.get_colored_name(),
        ' идёте обратно——',
      ]);
      await coffee.say_and_wait(['…', callname, '.']);
      await coffee.say_and_wait('Если не против… не выпить ли потом… кофе…');
      await coffee.say_and_wait([
        'Есть зёрна… которые хочу дать попробовать ',
        callname,
        ' тебе…',
      ]);
      era.printButton('「Конечно.」', 1);
      await era.input();
      await coffee.say_and_wait('…Спасибо.');
      await coffee.say_and_wait(
        'Тогда смотри на меня внимательно… и иди за мной…',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' ведёт ',
        you.get_colored_name(),
        ' туда, в укромное место — ',
        coffee.sex,
        ' в академии.',
      ]);
      await coffee.say_and_wait('Зёрна, о которых я говорила, вот эти…');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' говорит и указывает на ещё не смолотые зёрна в стеклянной банке на столе.',
      ]);
      await coffee.say_and_wait(
        'Эти… с моего кофейного дерева… и я сама их обжарила…',
      );
      era.printButton('「Кофейное дерево…」', 1);
      await era.input();
      await coffee.say_and_wait(
        'Кофейному дереву… чтобы дать плод… самое быстрое… нужно три года.',
      );
      await coffee.say_and_wait('И урожай… всего раз в год…');
      await era.printAndWait([
        'Значит, это зёрна, что ',
        coffee.get_colored_name(),
        ' сняла со своего дерева и сама ',
        coffee.sex,
        ' обжарила…',
      ]);
      await era.printAndWait('Как же драгоценно…');
      era.printButton('「…Такое драгоценное — и правда мне пить?」', 1);
      await era.input();
      await coffee.say_and_wait([
        '…Именно потому что драгоценно, и хочу дать ',
        callname,
        ' попробовать…',
      ]);
      await coffee.say_and_wait('Тогда… ты выпьешь со мной?');
      era.printButton('「С огромным удовольствием!」', 1);
      await era.input();
      await coffee.say_and_wait('Тогда сейчас заварю… подожди немного.');
      await era.printAndWait([
        'В этом тихом месте звучит только то, как ',
        coffee.get_colored_name(),
        ' заваривает кофе…',
      ]);
      await coffee.say_and_wait('…Долго ждал(а). Угощайся.');
      await era.printAndWait([
        'Берёшь в рот кофе, который заварила ',
        coffee.sex,
        '. В миг вкус и тепло проходят плоть и душу.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ' так и сидят лицом к лицу, тихо пьют кофе.',
      ]);
      await era.printAndWait([
        'Чашка выпита, пока ',
        you.get_colored_name(),
        ' ещё в послевкусии, ',
        coffee.get_colored_name(),
        ' легко касается ',
        you.get_colored_name(),
        ' за руку.',
      ]);
      await coffee.say_and_wait('…Ну как… вкус?');
      era.printButton('「…Впервые пью такой вкусный кофе.」', 1);
      era.printButton('「Спасибо, что подарила такой час.」', 2);
      era.printButton(
        '「Если будет случай, я тоже хочу сварить тебе кофе.」',
        3,
      );
      await era.input();
      await coffee.say_and_wait('…Ты преувеличиваешь.');
      await coffee.say_and_wait('Но… у меня тоже так.');
      await era.printAndWait([
        'От похвалы ',
        you.get_colored_name(),
        ' у ',
        coffee.get_colored_name(),
        ' бледное лицо заливает румянцем.',
      ]);
      await era.printAndWait([
        'Это не ',
        you.get_colored_name(),
        ' лесть: в эту чашку вложены труд и время сильнее тысячи слов. Наверное, ',
        you.get_colored_name(),
        ' до конца жизни не забудет вкус, который вы пробовали здесь вдвоём: ты и ',
        coffee.sex,
        '…',
      ]);
      await coffee.say_and_wait('…Это мне стоило благодарить.');
      await coffee.say_and_wait('…Спасибо, что стал(а) моим тренером…');
      await coffee.say_and_wait(
        'Когда в следующем году будет урожай… давай тоже, как сегодня…',
      );
      await coffee.say_and_wait('выпить кофе вместе, хорошо?');
      era.printButton(
        '「И в следующем году, и через год — будем пить вместе.」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('——!');
      await coffee.say_and_wait('…Хорошо.');
      await coffee.say_and_wait('В следующем… и через год… вместе…');
      await era.printAndWait([
        'Какой будет кофе в следующем году с ней — ',
        coffee.sex,
        '? От этого ',
        you.get_colored_name(),
        ' наполняется воображением о скором будущем с ',
        coffee.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait('…Раз так…');
      await coffee.say_and_wait(
        'Не попробовать…? …вместе посадить кофейное дерево.',
      );
      await coffee.say_and_wait(
        'Если сажать заново… урожая ждать минимум три года.',
      );
      era.printButton('「Тогда я буду стараться ради того дня.」', 1);
      await era.input();
      await coffee.say_and_wait(
        '…Хе-хе, нечаянно заключили довольно далёкий уговор.',
      );
      await coffee.say_and_wait('Но… я тоже буду ждать.');
      await era.printAndWait([
        'Кофе, который вы сделаете вместе, ',
        coffee.sex,
        ' сделаете тогда, наверняка будет вкуснее нынешнего.',
      ]);
      await era.printAndWait([
        'Так вы наполняетесь ожиданием будущего гуще и ароматнее ночи.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_28: (() => {
    const title = 'Порча';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait([
        callname,
        '…Я сегодня… чувствую тело очень тяжёлым…',
      ]);
      await era.printAndWait([
        'На тренировке ',
        coffee.get_colored_name(),
        ' останавливается рядом с ',
        you.get_colored_name(),
        ' и медленно говорит.',
      ]);
      await era.printAndWait([
        '「Тело у меня слабое」—— раньше ',
        coffee.sex,
        ' так говорила ',
        you.get_colored_name(),
        ', и ',
        you.get_colored_name(),
        ' сперва принял(а) это просто за тело.',
      ]);
      await era.printAndWait([
        'И раньше такое иногда бывало, ',
        you.get_colored_name(),
        ' не придал(а) значения, велел(а) ',
        coffee.sex,
        ' отдохнуть и не надрываться, и потом…',
      ]);
      await era.printAndWait('——Шурх, шур-шур-шур…');
      await era.printAndWait([
        'Песок под ногами вдруг меняется. Там, где прошла ',
        coffee.get_colored_name(),
        ', остаются следы, будто тащили груз.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' спешишь окликнуть — и ',
        coffee.sex,
        ' не падает: в медпункт ',
        coffee.sex,
        ' попадает на твоих руках.',
      ]);
      era.drawLine();
      await coffee.say_and_wait(
        'Мой вес… таких цифр никогда не видела… что происходит…',
      );
      await era.printAndWait([
        'В медпункте простой осмотр ничего не дал, пока ',
        coffee.get_colored_name(),
        ' не встала на весы — жуткие цифры по-настоящему пугают ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        coffee.sex,
        ' вес резко вырос, далеко за обычные колебания.',
      ]);
      await coffee.say_and_wait(
        'И сегодня… тело как бумага… будто всё высохло… ннх?!',
      );
      await era.printAndWait('——Хрусь, щёлк!');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' не договорила — мелкий треск, и резкая боль всходит на ',
        coffee.get_colored_name(),
        ' чуть бледное лицо.',
      ]);
      era.printButton('「Что?!」', 1);
      await era.input();
      await era.printAndWait([
        'Подхватываешь вдруг оседающую ',
        coffee.get_colored_name(),
        ', и сразу чувствуешь: ',
        coffee.sex,
        ' стала легче телом, но сейчас не до этого. ',
        you.get_colored_name(),
        ' смотрит вниз: ',
        coffee.sex,
        ' — не ноги ли?!',
      ]);
      await coffee.say_and_wait('Мой… ноготь на ноге…');
      await era.printAndWait([
        'Спешно снимаешь обувь — ',
        coffee.sex,
        ' стоит. Видно: ',
        coffee.sex,
        ' — на сухих ногтях трещина, будто маленькая дыра.',
      ]);
      await coffee.say_and_wait(
        'Сегодня вес вдруг стал таким тяжёлым, а теперь вдруг так легко… вот почему не было сил… ноготь треснул, наверное, потому что слишком сухо…',
      );
      era.printButton('「Подрежем ноготь и продезинфицируем.」', 1);
      await era.input();
      await coffee.say_and_wait('Э… есть… и такой способ?');
      await era.printAndWait([
        'Специальным средством и укрепителем фиксируешь ноготь — ',
        coffee.sex,
        ' ещё держится. Выглядит ещё не так, чтобы снимать тренировки и скачки, но если так пойдёт долго…',
      ]);
      await coffee.say_and_wait([
        callname,
        ', ты правда здорово… мне уже чуть легче…',
      ]);
      await era.printAndWait([
        'Кстати, ',
        coffee.sex,
        ' такие резкие скачки веса — уж не…',
      ]);
      era.printButton('「…Как обычно с аппетитом?」', 1);
      await era.input();
      await coffee.say_and_wait(
        'Аппетит… иногда и правда ненасытный. Будто желудок без дна… сколько ни ем — сытости нет… поэтому ем, выключив голову, без остановки… а бывает наоборот: совсем не лезет. Даже если хочу запихнуть что-то в рот, руки не слушаются…',
      );
      await coffee.say_and_wait('Но это… не моя собственная воля…');
      await era.printAndWait([
        'Значит, ',
        coffee.sex,
        ' всё это время терпела такое? Страдала так — и всё равно сама шла в риск, чтобы помочь тебе…',
      ]);
      era.printButton(
        '「В следующий раз, когда с телом будет странно, сфотографируй и пришли мне.」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('Сфотографировать, поняла, буду помнить… но…');
      era.drawLine();
      await era.printAndWait([
        'Через несколько дней ',
        coffee.get_colored_name(),
        ' присылает фото.',
      ]);
      await era.printAndWait([
        'Но… совсем не понять, что ',
        coffee.sex,
        ' сняла: на снимке только странные узоры.',
      ]);
      await coffee.say_and_wait(
        'Как ни снимай — выходит так, поэтому больное место тебе не показать… с давних пор так, наверное, уже без выхода… моё тело, боюсь… всегда будет таким…',
      );
      era.printButton('「Тебе достаточно просто сказать мне!」', 1);
      await era.input();
      await coffee.say_and_wait('Сказать тебе…? Каждый раз?');
      era.printButton('「Да. Лечить буду я!」', 1);
      await era.input();
      await coffee.say_and_wait([
        'Спасибо, ',
        callname,
        '…когда ты рядом… немного спокойнее.',
      ]);
      await era.printAndWait([
        'Потом ',
        you.get_colored_name(),
        ' пускает в ход всё, чему учился(ась) всю жизнь, и держит всё наготове — и ',
        coffee.get_colored_name(),
        ' может жить почти как обычно. Но… это давно не уровень «тело слабовато».',
      ]);
      await era.printAndWait('И всё-таки это сверхъестественное…?');
      await era.printAndWait([
        'От этой мысли ',
        you.get_colored_name(),
        ' невольно тревожится за будущее.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Новогодние замыслы';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        'С приходом Нового года ',
        coffee.get_colored_name(),
        ' тоже выходит в классический класс.',
      ]);
      await era.printAndWait([
        'Обычно в такой момент тренер с подопечной ',
        coffee.uma_sex_title,
        ' обсуждает большие планы, но…',
      ]);
      await coffee.say_and_wait(
        'Сейчас… при моём теле я ещё не могу сказать ничего великого…',
      );
      await coffee.say_and_wait(
        'Хочу в этом году… хотя бы вырасти так, чтобы держаться за спиной друга…',
      );
      await era.printAndWait([
        coffee.sex,
        ' от природы слаба, до цели ещё далеко. Даже так ',
        you.get_colored_name(),
        ' всё равно хочет, чтобы ',
        coffee.sex,
        ' была чуть бодрее духом.',
      ]);
      era.printButton('「Не выйти ли сменить обстановку?」', 1);
      await era.input();
      await coffee.say_and_wait('Выйти… так-то так, но куда…');
      era.printButton(
        `Пусть ${coffee.sex} почувствует себя как рыба в воде (Выносливость+20)`,
        1,
      );
      era.printButton(
        `Пусть ${coffee.sex} спокойно выпьет чашку кофе (Силы+400)`,
        2,
      );
      era.printButton('「Пойдём погулять」(очки навыков+30)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            'Как рыба в воде…? Не очень понимаю, но если получится выпустить мысли пузырями, как рыба… может, и неплохо…',
          );
          await era.printAndWait([
            'И вот вы ведёте ',
            coffee.get_colored_name(),
            ' в аквариум, и ',
            coffee.sex,
            ' очень внимательно смотрит на рыб в резервуаре…',
          ]);
          await coffee.say_and_wait(
            '…Эти рыбы под бесконечным давлением воды всё равно тихо терпят…',
          );
          await coffee.say_and_wait('И мне надо, как они… стать крепче…');
          await era.printAndWait([
            coffee.sex,
            ' будто нашла общий язык с рыбами и чуть научилась терпеть.',
          ]);
          break;
        case 2:
          await coffee.say_and_wait(
            'Кофе… да, аромат кофе всегда даёт мне всё забыть…',
          );
          await coffee.say_and_wait(
            'Тогда пойдём в ту кофейню… хотя я обычно хожу одна…',
          );
          await era.printAndWait([
            'Под началом ',
            coffee.get_colored_name(),
            ' вы приходите в маленькую кофейню, и ',
            coffee.sex,
            ' привычно садится на своё обычное место…',
          ]);
          await coffee.say_and_wait([
            callname,
            '…Ты знаешь, как пить кофе? В этом заведении свой порядок дегустации…',
          ]);
          await coffee.say_and_wait(
            'Сначала насладиться ароматом в воздухе… потом заказать чашку сезона…',
          );
          await era.printAndWait([
            coffee.sex,
            ' понемногу держит кофе во рту и глотает, полностью отдаваясь вкусу.',
          ]);
          break;
        case 3:
          await coffee.say_and_wait(
            '…Мне не очень нравится бродить… будто толпа поглотит и я исчезну…',
          );
          await coffee.say_and_wait([
            'Но… ты прав(а). Если ',
            callname,
            '… тоже рядом…',
          ]);
          await era.printAndWait([
            'И вот вы ведёте ',
            coffee.get_colored_name(),
            ' на улицы у Трейсена, и ',
            coffee.sex,
            ' с любопытством смотрит витрины по пути…',
          ]);
          await coffee.say_and_wait(
            'Не думала… довольно занятно… столько невиданной мебели и одежды…',
          );
          await coffee.say_and_wait(
            'А, старый сифонный кофейник… и антикварные кофейные чашки…',
          );
          await era.printAndWait([
            'Обычно не гуляющая ',
            coffee.get_colored_name(),
            ' от невиданных вещей, кажется, чуть набралась вдохновения.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = 'Перелом';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     */
    const f = async (coffee, tachyon, you, callname, call_32, hoch_sho) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' много раз попадала под странности; упорным уходом наконец добились того, что ',
        coffee.sex,
        ' вышла на зачётные результаты.',
      ]);
      await coffee.say_and_wait(
        'Вес… то тяжёлый, то лёгкий… но результаты понемногу стабильны.',
      );
      await coffee.say_and_wait([
        'Это всё благодаря ',
        callname,
        '… хотя до цели ещё очень далеко.',
      ]);
      await coffee.say_and_wait('Не то что цель… даже…');
      await era.printAndWait([
        'Догадываешься, что ',
        coffee.sex,
        ' хотела сказать, но ',
        you.get_colored_name(),
        ' никак не прочтёт мысли ',
        coffee.sex,
        '.',
      ]);
      era.printButton('「Куда ставим следующую цель?」', 1);
      await era.input();
      await era.printAndWait([
        'В том состоянии, в каком ',
        coffee.sex,
        ' сейчас, выиграть весенние классические скачки, возможно, трудно, но не хочется, чтобы ',
        coffee.sex,
        ' сама себя ограничивала.',
      ]);
      await era.printAndWait([
        'Если сначала спросить мнение ',
        coffee.get_colored_name(),
        ', по тому, что ',
        coffee.sex,
        ' ответит, можно чуть понять, о чём думает ',
        coffee.sex,
        '.',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        await coffee.say_and_wait([
          '…',
          call_32,
          ' тоже побежит, ',
          hoch_sho,
          '.',
        ]);
        await era.printAndWait([
          hoch_sho,
          '… это важная скачка на пути ',
          tachyon.get_colored_name(),
          ' к классической тройной короне.',
        ]);
      } else {
        await coffee.say_and_wait(['…', hoch_sho, '.']);
      }
      era.printButton('「Можно спросить, почему?」', 1);
      await era.input();
      await coffee.say_and_wait(
        'На самом деле… это не моя воля. Но друг всё просит…',
      );
      await coffee.say_and_wait('『Пробеги этот раз』, если не пробежать…');
      await era.printAndWait([
        'Если не пробежать? ',
        you.get_colored_name(),
        ' выпрямляет спину и ждёт следующего слова ',
        coffee.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait(
        'Что будет… я не знаю. Друг только так сказал… но, может, случится что-то страшное…',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' вздыхаешь и откидываешься на спинку.',
      ]);
      await era.printAndWait([
        'Похоже, ',
        coffee.sex,
        ' уже решила — хоть и не по своей воле: не ',
        coffee.sex,
        ' так захотела. Но чисто как тренер…',
      ]);
      if (era.get('cflag:32:招募状态') === 1) {
        era.printButton('「Иди сразись с Агнес Тахион!」', 1);
      } else {
        era.printButton('「Беги изо всех сил!」', 1);
      }
      await era.input();
      await coffee.say_and_wait('…Да! Кого бы ни… я превзойду…');
    };
    f.title = title;
    return f;
  })(),
  before_hoch_sho: (() => {
    const title = 'Навстречу Yayoi Sho';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {boolean} vs_tachyon 对手中有爱丽速子
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     */
    const f = async (coffee, you, call_32, vs_tachyon, hoch_sho) => {
      await era.printAndWait([
        'Сегодня ',
        hoch_sho,
        ', но в коридоре участниц ',
        coffee.get_colored_name(),
        ' выглядит измождённой.',
      ]);
      era.printButton('「Нервничаешь?」', 1);
      await era.input();
      await era.printAndWait([
        'Услышав вопрос ',
        you.get_colored_name(),
        ', ',
        coffee.get_colored_name(),
        ' качает головой.',
      ]);
      if (vs_tachyon) {
        await coffee.say_and_wait([
          'С прошлой ночи… я всё думаю, как победить ',
          call_32,
          '…',
        ]);
      } else {
        await coffee.say_and_wait(
          'С прошлой ночи… я всё думаю, как победить остальных…',
        );
      }
      await era.printAndWait([
        'Может, измождённость ',
        coffee.get_colored_name(),
        ' как раз потому, что ',
        coffee.sex,
        ' очень дорожит этой скачкой.',
      ]);
      await era.printAndWait([
        'Хлопаешь по плечу — ',
        coffee.sex,
        ' слушает. Как тренеру ',
        you.get_colored_name(),
        ' сейчас можно только одно.',
      ]);
      era.printButton('「Давай.」', 1);
      await era.input();
      await era.printAndWait([
        'На слова ',
        you.get_colored_name(),
        ' чуть кивает, ',
        coffee.get_colored_name(),
        ' идёт на трассу.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hoch_sho_win: (() => {
    const title = 'Ориентир';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} vs_tachyon 对手中有爱丽速子
     * @param {PrintedSpan} hoch_sho 弥生赏（上色版名字）
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     * @param {PrintedSpan} stli_kin 圣烈特纪念赛（上色版名字）
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      callname_32,
      t_call_c,
      vs_tachyon,
      hoch_sho,
      sats_sho,
      toky_yus,
      stli_kin,
      kiku_sho,
    ) => {
      await era.printAndWait([
        'После скачки ',
        you.get_colored_name(),
        ' сразу бежит в коридор участниц.',
      ]);
      era.printButton('「Кафе!」', 1);
      await era.input();
      await era.printAndWait([
        'Услышав зов ',
        you.get_colored_name(),
        ', ещё задыхающаяся ',
        coffee.get_colored_name(),
        ' смотрит в сторону ',
        you.get_colored_name(),
        '; ещё не отошедшая от скачки ',
        coffee.sex,
        ' бледнее обычного, пот с лба.',
      ]);
      await coffee.say_and_wait([
        'Фух, фух… ',
        callname,
        ', ',
        you.adult_sex_title,
        '…кхе, кхе…',
      ]);
      era.printButton('「Ты в порядке?!」', 1);
      await era.input();
      await coffee.say_and_wait('Ничего… просто чуть… перестаралась…');
      await era.printAndWait([
        'В этот раз на ',
        hoch_sho,
        ', ',
        coffee.get_colored_name(),
        ' соперницы все сильные; всю скачку в холодном поту ',
        you.get_colored_name(),
        ' выдыхает, только когда ',
        coffee.get_colored_name(),
        ' пересекает финиш.',
      ]);
      await era.printAndWait(['Но… простая победа — не ваша цель.']);
      era.printButton('「Как друг?」', 1);
      await era.input();
      await coffee.say_and_wait(
        'Опять не догнала… но расстояние сократилось…!',
      );
      await coffee.say_and_wait(
        'Если так и дальше выходить на скачки… когда-нибудь…',
      );
      await era.printAndWait([
        'По тому, как ',
        coffee.get_colored_name(),
        ' всё описывала, друг — существо очень сильное… цель догнать друга и дать ',
        coffee.get_colored_name(),
        ' лучшие результаты совпадают идеально.',
      ]);
      await era.printAndWait([
        'С этой точки зрения оставить ',
        coffee.get_colored_name(),
        ' как есть и готовить классическую тройную корону — лучший выбор, но…',
      ]);
      if (vs_tachyon) {
        await tachyon.say_and_wait([
          'Вы здесь, ',
          callname_32,
          ', и ',
          t_call_c,
          '.',
        ]);
        await era.printAndWait([
          'Хоть в этот раз проиграла ',
          coffee.get_colored_name(),
          ', ',
          tachyon.get_colored_name(),
          ' сейчас выглядит свободнее слабой ',
          coffee.get_colored_name(),
          ', с фирменной улыбкой ',
          coffee.sex,
          ' идёт к вам двоим.',
        ]);
        await tachyon.say_and_wait([
          t_call_c,
          ', ты в этот раз—— пробежала хорошо, очень хорошо! Хотя нет, но хорошо! Неожиданный успех и ожидаемый провал уравновешиваются!',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' смеётся одна, потом смотрит в небо и будто что-то шепчет.',
        ]);
        await tachyon.say_and_wait(
          'Тахион—— это… гипотетическая частица быстрее света.',
        );
        await tachyon.say_and_wait(
          'Но даже гипотеза: я должна дать всем увидеть отсвет фанатизма.',
        );
        await tachyon.say_and_wait([
          'На ',
          sats_sho,
          ' сгорю дотла — и родится ослепительный осколок.',
        ]);
        await tachyon.say_and_wait([
          'На этом пока всё. ',
          t_call_c,
          ', жду тебя дальше.',
        ]);
        era.printButton('「…」', 1);
        await era.input();
        await era.printAndWait([
          'Как всегда, ',
          tachyon.get_colored_name(),
          ' внезапно явилась, сказала непонятное и ушла сама по себе. На то, как удаляется ',
          coffee.sex,
          ', молча смотрят ',
          you.get_colored_name(),
          ' и ',
          coffee.get_colored_name(),
          '.',
        ]);
        await coffee.say_and_wait([callname, '…', sats_sho, '… мне бежать?']);
        await era.printAndWait([
          'Что-то вспомнив из слов ',
          tachyon.get_colored_name(),
          ', ',
          coffee.get_colored_name(),
          ' оборачивается к ',
          you.get_colored_name(),
          ' и спрашивает.',
        ]);
      }
      era.printButton(
        '「Сегодняшняя скачка, наверное, была тебе тяжелой?」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('Да… немного… сил не хватило…');
      era.printButton('「Тогда Satsuki Sho… пока отложим.」', 1);
      await era.input();
      await era.printAndWait([
        'Сегодняшняя жёсткая скачка должна была стать тяжёлой ношей — ',
        coffee.sex,
        ' худая. Маршрут дальше ясен, но так скоро лезть в G1 ',
        coffee.sex,
        ' ещё не готова.',
      ]);
      await coffee.say_and_wait('Тогда… дерби…');
      await era.printAndWait([
        toky_yus,
        ' и правда скачка, которую ',
        you.get_colored_name(),
        ' хочет, чтобы взяла ',
        coffee.get_colored_name(),
        '. Но если ставить дерби следующей целью, выдержит ли ',
        coffee.sex,
        ' — станет авантюрой…',
      ]);
      await coffee.say_and_wait([
        '…Прости, ',
        callname,
        '… всё из-за меня… такая бесполезная…',
      ]);
      await coffee.say_and_wait(
        'Не хочу… пользоваться твоей добротой… и… такой решающий заезд… кхе…',
      );
      await era.printAndWait([
        'Легко хлопаешь ',
        coffee.get_colored_name(),
        ' по спине — ',
        coffee.sex,
        ' чуть отдышалась.',
      ]);
      era.printButton('「Выходи осенью на St. Lite Kinen.」', 1);
      await era.input();
      await coffee.say_and_wait([
        stli_kin,
        '…',
        kiku_sho,
        ' разведка… так долго ждать…',
      ]);
      await coffee.say_and_wait('Но… тогда… хотя бы дерби всё же…');
      era.printButton('「Дерби решим по состоянию.」', 1);
      await era.input();
      await coffee.say_and_wait(
        'По состоянию… хорошо, тогда если позволит… ещё…',
      );
      await era.printAndWait([
        'Так следующую цель ставите на ',
        stli_kin,
        ', ',
        toky_yus,
        ' — если позволит состояние.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_17: (() => {
    const title = 'Сдавать или нет';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (coffee, you, callname, toky_yus) => {
      await era.printAndWait([
        'Для ',
        coffee.get_colored_name(),
        ', ',
        toky_yus,
        ' не обязательный пункт к цели ',
        coffee.sex,
        '.',
      ]);
      await era.printAndWait([
        '——И всё же дерби раз в жизни — ',
        coffee.sex,
        ' по-прежнему в соблазне.',
      ]);
      await era.printAndWait([
        'Чтобы проверить, вытянет ли ',
        coffee.get_colored_name(),
        ' на ',
        toky_yus,
        ', вы выходите на Тренировочное поле.',
      ]);
      await coffee.say_and_wait(['Фух, фух… ', callname, ', при таком круге…']);
      await coffee.say_and_wait(
        'Дерби… уже есть шанс? Если выиграть… точно буду ближе к другу…',
      );
      era.printButton('「Как тело?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '…Не сказать что хорошо… но у меня так не первый день…',
      );
      await era.printAndWait([
        'Пускать ли ',
        coffee.get_colored_name(),
        ' на дерби… честно, трудно решить.',
      ]);
      await era.printAndWait([
        'Как тренер ',
        you.get_colored_name(),
        ' должен(на) выбрать вовремя.',
      ]);
      era.printButton('「…Ради тела — откажемся.」', 1);
      era.printButton('「…Шанс один.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await coffee.say_and_wait('Отказаться…? поняла…');
        await era.printAndWait([
          'Жаль не выйти на дерби раз в жизни… надеешься, что этот выбор осенью даст ',
          coffee.get_colored_name(),
          ' попутный ветер.',
        ]);
      } else {
        await coffee.say_and_wait(
          'Поняла…! Я постараюсь! Обязательно… возьму дерби…',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          ' полна огня… лишь бы этот выбор не оставил осени скрытую бомбу.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = 'Навстречу Японскому дерби';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (coffee, you, callname, toky_yus) => {
      await era.printAndWait([
        toky_yus,
        '——ради этой скачки раз в жизни ',
        coffee.get_colored_name(),
        ' прошла много жёстких тренировок.',
      ]);
      await era.printAndWait('И вот пора собирать урожай.');
      await coffee.say_and_wait([callname, '…Я выхожу.']);
      await era.printAndWait([
        'В коридоре ',
        you.get_colored_name(),
        ' смотрит, как ',
        coffee.get_colored_name(),
        ' поворачивается к трассе — и ни слова.',
      ]);
      await era.printAndWait(
        'Нечего сказать и незачем: лишние слова уже выговорены в ночи тренировок.',
      );
      await era.printAndWait([
        'С этого мига это ',
        coffee.sex,
        ' одна против других ',
        coffee.uma_sex_title,
        '—— и против друга.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = 'Стоит';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (coffee, you, toky_yus) => {
      await you.say_as_passer_by_and_wait('Комментатор', [
        coffee.get_colored_name(),
        ' берёт дерби——!! Негасимый небоскрёб встаёт здесь!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Однако ',
        coffee.sex,
        ' в порядке? Кажется, силы на нуле, даже шаг не держит… но ',
        coffee.sex,
        ' всё равно исполнила заветное желание всех, кто о ней мечтал, — и это ',
        coffee.sex,
        '——!!',
      ]);
      await era.printAndWait([
        'В коридоре ',
        coffee.get_colored_name(),
        ' плетётся к ',
        you.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait(['Тренер… ', you.adult_sex_title, '…']);
      era.printButton('「Ты отлично справилась, Кафе…」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' падает в объятия ',
        you.get_colored_name(),
        '; изнеможение щемит ',
        you.get_colored_name(),
        ', но ',
        coffee.sex,
        ' всё же взяла победу.',
      ]);
      await coffee.say_and_wait('Фух, ха…');
      era.printButton('「Дальше хорошенько отдохни.」', 1);
      era.printButton('「И нагрузку тренировок тоже снимем.」', 2);
      await era.input();
      await coffee.say_and_wait('Хорошо…');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' взяла ',
        toky_yus,
        ': долгий труд дал лучший итог. И при полной опеке ',
        you.get_colored_name(),
        ' восстановление ',
        coffee.sex,
        ' тела радует: осенью тоже можно ждать хороших мест…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = 'Летний сбор (классический год) начинается';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     */
    const f = async (coffee, tachyon, you, callname, callname_32, t_call_c) => {
      await era.printAndWait([
        'По обычаю Трейсена ',
        you.get_colored_name(),
        ' с ',
        coffee.get_colored_name(),
        ' едете на летний сбор.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' и без того слабое тело после тренировок и скачек накопило усталость; надо, чтобы за этот срок ',
        coffee.sex,
        ' успела восстановиться.',
      ]);
      await era.printAndWait([
        'Но вразрез с решимостью ',
        you.get_colored_name(),
        ' — всё же ',
        coffee.couple_title,
        ' ещё студенты: скаковые ',
        coffee.uma_sex_title,
        ' на сборе все возбуждены.',
      ]);
      await coffee.say_and_wait('Хе-хе-хе… как жду сбор… куда бы пойти?');
      await coffee.say_and_wait(
        'А? Безлюдный обрыв? Подумать, забытая пещера в горах тоже ничего, хе-хе-хе-хе…',
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${coffee.uma_sex_title} A`,
        'Т-ты с кем разговариваешь? Кафе~?! Аж мурашки!',
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${coffee.uma_sex_title} B`,
        [
          'Ха-ха-ха… не знаю почему, но когда рядом ',
          coffee.sex,
          ', всё как-то сверхъестественно…',
        ],
      );
      if (era.get('cflag:32:招募状态') === 1) {
        await tachyon.say_and_wait([
          'М-м~ скорее таинственно, чем сверхъестественно. Верно? ',
          callname_32,
          '.',
        ]);
        await era.printAndWait([
          'Глядя, как неподалёку бормочет в воздух ',
          coffee.get_colored_name(),
          ', стоящая рядом с ',
          you.get_colored_name(),
          ' стоит ',
          tachyon.get_colored_name(),
          ' сама открывает тему.',
        ]);
        await tachyon.say_and_wait([
          'Я не очень знаю, через что вы с ',
          t_call_c,
          ' прошли, но невидимое всё же страшнее видимых монстров. Так что лучше держи от них дистанцию.',
        ]);
        await tachyon.say_and_wait([
          'Что до ',
          t_call_c,
          ', мне всё равно, что там за друг и есть ли он на свете. Куда важнее, что ',
          coffee.sex,
          ' задумала, что ',
          coffee.sex,
          ' собирается делать.',
        ]);
      } else {
        await era.printAndWait([
          'Глядя, как неподалёку бормочет в воздух ',
          coffee.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' вспоминает одну вещь.',
        ]);
      }
      await era.printAndWait([
        '——Друг, тот, кто не раз помогал ',
        you.get_colored_name(),
        ', а ',
        you.get_colored_name(),
        ' почти ничего о нём не знает.',
      ]);
      await era.printAndWait([
        'Как ядро цели ',
        coffee.get_colored_name(),
        ', какой он, этот друг?',
      ]);
      await era.printAndWait(
        'Обычных дней не хватает на это, но если взять шанс летнего сбора…',
      );
      await coffee.say_and_wait(['…?', callname, ', что такое?']);
      era.printButton('「Этим летом… давай как следует поговорим.」', 1);
      await era.input();
      await coffee.say_and_wait('…С радостью.');
      await era.printAndWait([
        'Понять друга — значит глубже понять и ',
        coffee.get_colored_name(),
        '—— так думает ',
        you.get_colored_name(),
        '.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = 'Plan B';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     */
    const f = async (coffee, tachyon, you, call_32, t_call_c) => {
      await era.printAndWait([
        'В один из первых дней сбора ',
        you.get_colored_name(),
        ' зовёт ',
        coffee.get_colored_name(),
        ' в комнату на месте сбора.',
      ]);
      era.printButton('「Есть дело про тебя… сначала телевизор.」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' растерянно кивает и по знаку ',
        you.get_colored_name(),
        ' включает телевизор.',
      ]);
      await coffee.say_and_wait(['…!?', call_32, '?']);
      await era.printAndWait([
        'На экране пресс-конференция ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await tachyon.print_and_wait(
        '…Как я только что сказала: с сегодняшнего дня я, Агнес Тахион—— бессрочно снимаюсь со скачек!',
      );
      await you.say_as_passer_by_and_wait('Журналисты', '————Что?!');
      await era.printAndWait([
        'Как одна из самых заметных на классической тройной короне ',
        coffee.uma_sex_title,
        ', внезапное объявление… зал гудит.',
      ]);
      await you.say_as_passer_by_and_wait('Журналист A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '…вы явили огромный потенциал, почему такое решение?!',
      ]);
      await tachyon.print_and_wait(
        'Огромный потенциал… это даже ещё не моя настоящая сила.',
      );
      await you.say_as_passer_by_and_wait(
        'Журналист B',
        'Многие ставили, что вы уверенно возьмёте ещё победы. Почему?!',
      );
      await tachyon.print_and_wait(
        'Ну, причина… одним словом не сказать. Правда всегда из множества факторов, нет?',
      );
      await you.say_as_passer_by_and_wait(
        'Журналист C',
        'По сути заявление об уходе… так можно понять?',
      );
      await tachyon.print_and_wait(
        'Спрашивать бессмысленно: никто не знает, что будет.',
      );
      await tachyon.print_and_wait('На этом всё, что я хотела объявить.');
      await era.printAndWait([
        'Потом ',
        tachyon.get_colored_name(),
        ' уходит с площадки, ',
        you.get_colored_name(),
        ' гасит телевизор и смотрит на перегруженную новостью ',
        coffee.get_colored_name(),
        '.',
      ]);
      era.printButton('「Коротко… Тахион бросает скачки.」', 1);
      await era.input();
      await coffee.say_and_wait('Это… почему же…');
      era.printButton(
        `「Это… наше с Тахион решение. С этого дня ${tachyon.sex} будет——」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait('Тут лучше объясню сама.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' толкает дверь комнаты и встречает взгляды ',
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        '.',
      ]);
      await tachyon.say_and_wait([
        'Коротко: я нашла в ',
        t_call_c,
        '—— в тебе новую возможность.',
      ]);
      await coffee.say_and_wait('Новая… возможность?');
      await tachyon.say_and_wait([
        'Верно, моя цель—— достичь и превзойти предел ',
        coffee.uma_sex_title,
        '… но должен ли это делать я сам? Дорог не одна: истина одна, путей к финишу несколько.',
      ]);
      await coffee.say_and_wait('Это… что значит?');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' вздыхает и театрально машет рукой.',
      ]);
      await tachyon.say_and_wait([
        'Я же так ясно сказала… 『советник』, 『советник』! ',
        t_call_c,
        ', я стану твоим советником!',
      ]);
      await coffee.say_and_wait('Э… советник?!');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' растерянно смотрит на ',
        you.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' кивает.',
      ]);
      era.printButton(
        '「Верно, с этих пор Тахион будет твоим советником, но одновременно…」',
        1,
      );
      era.printButton(
        `「Ты тоже берёшь на себя ответственность — помочь Тахион дойти до цели, которую ставит ${coffee.sex}…」`,
        2,
      );
      era.printButton('「Сейчас нужно мнение самой Кафе.」', 3);
      await era.input();
      await era.printAndWait([
        'Сказав, ',
        you.get_colored_name(),
        ' хочет дать ',
        coffee.get_colored_name(),
        ' время подумать, но ',
        tachyon.get_colored_name(),
        ' так не считает.',
      ]);
      await tachyon.say_and_wait(
        'С моей помощью ты быстрее догонишь своего друга, знаешь?',
      );
      await era.printAndWait([
        'Догнать друга—— главное желание ',
        coffee.get_colored_name(),
        '; сила и наука ',
        tachyon.get_colored_name(),
        ' таковы, что даже ',
        coffee.sex,
        ', что на ',
        coffee.get_colored_name(),
        ' держит обиду, это признаёт.',
      ]);
      await era.printAndWait('Если правда можно быстрее догнать друга…');
      await coffee.say_and_wait(
        'Я всё равно не могу тебя понять… но раз это мне поможет…',
      );
      await tachyon.say_and_wait(
        'Хе-хе-хе-хе… хорошо, вот так. Тогда решено. Plan B — начинается!',
      );
      await era.printAndWait([
        'Получив поддержку ',
        tachyon.get_colored_name(),
        ', куда пойдёт классический путь ',
        coffee.get_colored_name(),
        '…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_31: (() => {
    const title = 'Друг';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await coffee.say_and_wait([callname, '… про друга… да?']);
      era.printButton('「Да. Хочу узнать подробно.」', 1);
      await era.input();
      await era.printAndWait([
        'Однажды вечером на летнем сборе ',
        you.get_colored_name(),
        ' спрашивает ',
        coffee.get_colored_name(),
        ' про то особое, что носит в сердце ',
        coffee.sex,
        ', — про друга.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' помнишь: как-то случайно обмолвилась ',
        coffee.sex,
        ', что друг с детства ',
        coffee.sex,
        ' рядом с ней, ',
        coffee.sex,
        ' и всегда бежит впереди ',
        coffee.sex,
        ', ведя ',
        coffee.sex,
        '.',
      ]);
      await era.printAndWait('Но что такое это «ведение»?');
      await coffee.say_and_wait('Что ты хочешь… узнать?');
      era.printButton('「Ты говоришь, друг ведёт тебя. Что это значит?」', 1);
      await era.input();
      await coffee.say_and_wait(
        'Вести… значит всегда 『бежать впереди меня』.',
      );
      await coffee.say_and_wait('Нет, так не совсем, не только это…');
      await coffee.say_and_wait('『Друг』 меня… ведёт в счастливое место…');
      await coffee.say_as_unknown_and_wait('Хе-хе-хе, хе-хе-хе-хе-хе…♪');
      await era.printAndWait('Кругом будто доносится тихий смех.');
      await coffee.say_and_wait(
        'Будто тайком ведёт меня в тихие места, о которых никто не знает…',
      );
      await coffee.say_as_unknown_and_wait('Хе-хе-хе, хе-хе-хе-хе-хе…♪');
      await era.printAndWait([
        'Словно прямо у уха ',
        you.get_colored_name(),
        ', дразнит чувства ',
        you.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait(
        'В парке… друг сидел на самой вершине колеса обозрения. Я села в кабину, чтобы догнать… и увидела очень красивый вид…',
      );
      await coffee.say_and_wait(
        'Пока гонишься за другом, всегда случается что-то радостное…',
      );
      await coffee.say_and_wait('Если я хочу, друг всегда скажет, куда идти…');
      await coffee.say_and_wait(
        'Другие… никогда… ничего мне не давали… только друг другой.',
      );
      await coffee.say_and_wait(
        'Единственный… кто дарит мне счастливые часы… неповторимый…',
      );
      era.printButton('「…И сейчас так?」', 1);
      await era.input();
      await coffee.say_and_wait([
        '…',
        callname,
        ', тоже чуть похож(а) на друга.',
      ]);
      await coffee.say_and_wait([
        'Но мы встретились, потому что друг привёл меня к попавшему в беду ',
        callname,
        '…',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' чуть понимаешь: для ',
        coffee.get_colored_name(),
        ' друг не только тот, кто на скачке бежит впереди…',
      ]);
      await era.printAndWait([
        'Для ',
        coffee.get_colored_name(),
        ' скорее лоцман, что ведёт ',
        coffee.sex,
        ' к счастью.',
      ]);
      await coffee.say_and_wait(
        'И сейчас, если я хочу, друг отведёт куда угодно. Например…',
      );
      await coffee.say_and_wait([
        callname,
        ', помоги придумать 『то, чего здесь точно не может быть』?',
      ]);
      await era.printAndWait([
        'Чего здесь не бывает… в голове ',
        you.get_colored_name(),
        ' всплывает——',
      ]);
      era.printButton('「…Лаванда.」(Сила+20)', 1);
      era.printButton('「…Кладофора.」(Воля+20)', 2);
      era.printButton('「Четырёхногая… лошадь.」', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            'Лаванда… так. Губоцветные, род Lavandula… цветок, который здесь не растёт…',
          );
          await coffee.say_and_wait('Но если я искренне захочу…');
          await era.printAndWait('——Тук!');
          await era.printAndWait([
            you.get_colored_name(),
            ' в спину… вдруг толкает сильная сила.',
          ]);
          await era.printAndWait([
            'Друг?! Пока у ',
            you.get_colored_name(),
            ' мелькает эта мысль, тело уже идёт в сторону толчка, будто его торопят.',
          ]);
          await era.printAndWait('И в конце…');
          await coffee.say_and_wait('Это… камень. Давай сдвинем вместе.');
          await coffee.say_and_wait('Раз~ два… хоп…');
          await era.printAndWait([
            coffee.get_colored_name(),
            ' своими ',
            coffee.sex,
            ' тонкими руками сдвигает камень, а под ним… куча чего-то вроде водорослей.',
          ]);
          await coffee.say_and_wait(
            'На каждом конце будто бутон… этим вместо лаванды…?',
          );
          break;
        case 2:
          await coffee.say_and_wait(
            'Кладофора… так. Шаровидная водоросль из озера Акан на Хоккайдо…',
          );
          await coffee.say_and_wait(
            'Хотя здесь такого не найти, но если я искренне захочу…',
          );
          await era.printAndWait('——Тук!');
          await era.printAndWait([
            you.get_colored_name(),
            ' в спину… вдруг толкает сильная сила.',
          ]);
          await era.printAndWait([
            'Друг?! Пока у ',
            you.get_colored_name(),
            ' мелькает эта мысль, тело уже идёт в сторону толчка, будто его торопят.',
          ]);
          await era.printAndWait('И в конце…');
          await coffee.say_and_wait('Ха, ха, мы… ушли очень далеко.');
          await coffee.say_and_wait([
            'А, ',
            callname,
            '… то, что волны вынесли на пляж…',
          ]);
          await coffee.say_and_wait('Ком водорослей, да.');
          await era.printAndWait(
            'Там ком растительных останков, впитавших морскую грязь и слипшихся…',
          );
          await coffee.say_and_wait('Вид неласковый… этим… вместо кладофоры?');
          break;
        case 3:
          await coffee.say_and_wait([
            'Лошадь… это ',
            coffee.uma_sex_title,
            '? …а четыре ноги…',
          ]);
      }
      if (ret < 3) {
        await era.printAndWait(
          'Наверное, это предел того, что друг умеет. Не всесилен.',
        );
        await era.printAndWait(
          'Похоже на духа-хранителя, который старается помочь.',
        );
        await coffee.say_and_wait(
          'Друг всегда так: ведёт меня прямо к счастью.',
        );
        await coffee.say_and_wait(
          'Всегда рядом, помогает… очень важный… 『друг』…',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          ' тем, кто есть сегодня, может, обязана именно этому хранителю.',
        ]);
        await coffee.say_and_wait(['…А, ', callname, ' глянь. В море остров…']);
        await era.printAndWait([
          you.get_colored_name(),
          ' смотришь вдаль… остров и правда есть. Ни моста, ни лодки, вплавь не дотянуть.',
        ]);
        await coffee.say_and_wait(
          'Чуть хочется посмотреть… наверное… там тихо и красиво.',
        );
        await era.printAndWait('Но если правда хотеть на тот остров…');
        await era.printAndWait('——Тук, тук, тук!');
        await era.printAndWait([
          'Ни с того ни с сего ',
          you.get_colored_name(),
          ' в спину тычут несколько раз…! Будто «не медли, иди».',
        ]);
        await coffee.say_and_wait(
          'А, 『друг』… машет мне… с той стороны моря машет 『сюда』…',
        );
        await era.printAndWait([
          'Друг для ',
          coffee.get_colored_name(),
          ' как дух-хранитель.',
        ]);
        await era.printAndWait([
          'Но неясно, есть ли у него сердце беречь её, нужна ли ему вообще ',
          coffee.sex,
          '.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = 'Летний сбор (классический год) кончается';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} m_horse 「朋友」事件中是否选择了「马」
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      callname_32,
      t_call_c,
      m_horse,
      t_plan_b,
    ) => {
      await era.printAndWait('Все дни летнего сбора закончились.');
      await coffee.say_and_wait([
        callname,
        '…Благодаря тебе тело так хорошо восстановилось…',
      ]);
      if (t_plan_b) {
        await era.printAndWait([
          'Летний уход удался, ',
          coffee.get_colored_name(),
          ' заметно поправилась.',
        ]);
        await tachyon.say_and_wait([
          'Ой, ',
          callname_32,
          '. Этим летом с ',
          t_call_c,
          ' как продвинулись?',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' советник ',
          tachyon.get_colored_name(),
          ' тоже подходит.',
        ]);
        era.printButton('「…Кое-что поняли.」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' делишься с ',
          tachyon.get_colored_name(),
          ' тем, что узнали на сборе, и про друга.',
        ]);
        await tachyon.say_and_wait([
          'Понятно. Хоть и делал(а) бессмысленное, в целом занятно… нет, для ',
          t_call_c,
          ' полезно.',
        ]);
        await tachyon.say_and_wait(
          'То есть—— нет-нет, стоп. Внешнее давление, или импульс к самоповреждению. Если смотреть с разных сторон…',
        );
        await era.printAndWait([
          'После этого ',
          tachyon.get_colored_name(),
          ' тонет в море мыслей.',
        ]);
      }
      await era.printAndWait([
        'Лето прошло, и наступающей осенью ',
        coffee.get_colored_name(),
        ' наверняка расцветёт.',
      ]);
      if (m_horse) {
        await era.printAndWait([
          '…Только тот чёрный странный зверь всё не уходит из головы ',
          you.get_colored_name(),
          '.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_stli_kin: (() => {
    const title = 'Навстречу St. Lite Kinen';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (coffee, tachyon, you, t_call_c, t_plan_b, kiku_sho) => {
      era.printButton('「Кафе, как тело?」', 1);
      await era.input();
      await coffee.say_and_wait('Чувствую… в глубине тела иначе, чем раньше…');
      await coffee.say_and_wait(
        'Нет странного шевеления… будто тело и правда моё…',
      );
      if (t_plan_b) {
        await tachyon.say_and_wait([
          'При моём питании это естественно, и… с весны вес заметно вырос, ',
          t_call_c,
          '…',
        ]);
        await tachyon.say_and_wait(
          'Но это… хе-хе-хе, к странностям не относится. Если просто физическое накопление…',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' внимательно оглядывает ',
          coffee.get_colored_name(),
          ' сверху донизу и хочет коснуться, но ',
          coffee.get_colored_name(),
          ' ловко уворачивается.',
        ]);
        await era.printAndWait(
          'Похоже, самый нелепый период всё-таки пройден…',
        );
        await coffee.say_and_wait([
          'Если бежать в этом ощущении… если уверенно взять эту скачку… у ',
          kiku_sho,
          ' будет шанс…?',
        ]);
        await tachyon.say_and_wait([
          'Хе-хе, обсуждать итог до начала опыта бессмысленно, ',
          t_call_c,
          '.',
        ]);
        await tachyon.say_and_wait([
          'Пусть трасса решит, какого цвета будет ',
          coffee.get_colored_name(),
          '—— эта твоя лакмусовая бумажка.',
        ]);
        await era.printAndWait(
          'Пусть это будет яркий цвет… в любом случае сегодня надо победить.',
        );
      } else {
        await era.printAndWait(
          'Похоже, самый нелепый период всё-таки пройден…',
        );
        await coffee.say_and_wait([
          'Если бежать в этом ощущении… если уверенно взять эту скачку… у ',
          kiku_sho,
          ' будет шанс…?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' не отвечает. У ',
          coffee.get_colored_name(),
          ' в теле ещё слишком много неизвестного.',
        ]);
        era.printButton('「Сначала возьмём эту скачку.」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' кивает и поворачивается к трассе.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  stli_kin_win: (() => {
    const title = 'Переход';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (coffee, you, callname, kiku_sho) => {
      era.printButton('「Спасибо за труд, Кафе!」', 1);
      await era.input();
      await era.printAndWait([
        'Как всегда, ',
        you.get_colored_name(),
        ' рано приходит в коридор ждать ',
        coffee.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait([
        'Ха, фу, ха… ',
        callname,
        '. У меня получилось…',
      ]);
      await coffee.say_and_wait('Хотя легко не было… в ногах… ещё есть запас.');
      await era.printAndWait([
        'После сильного забега ',
        coffee.sex,
        ' всё ещё чуть слаба. Но тело после лета явно крепче.',
      ]);
      await era.printAndWait([
        'Расслабляться нельзя: через месяц самое важное——',
        kiku_sho,
        '.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = 'Навстречу Kikuka Sho';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      t_plan_b,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await coffee.say_and_wait('…');
      if (t_plan_b) {
        await tachyon.say_and_wait('…');
      }
      era.printButton('「…」', 1);
      await era.input();
      await era.printAndWait(
        'В коридоре все молчат. Каждый знает, как важна сегодняшняя скачка.',
      );
      await era.printAndWait([
        '——',
        kiku_sho,
        ', скачка раз в жизни, 3000 метров, не как все прежние.',
      ]);
      await era.printAndWait([
        'Самая быстрая ',
        coffee.uma_sex_title,
        ' берёт ',
        sats_sho,
        ', самая везучая ',
        coffee.uma_sex_title,
        ' берёт ',
        toky_yus,
        ', а самая сильная ',
        coffee.uma_sex_title,
        ' возьмёт ',
        kiku_sho,
        '.',
      ]);
      await era.printAndWait([
        'Сегодня ',
        coffee.get_colored_name(),
        ' настоящая сила выйдет на проверку.',
      ]);
      await coffee.say_and_wait([callname, ', это ещё первый раз.']);
      await era.printAndWait([
        'После долгого молчания ',
        coffee.get_colored_name(),
        ' говорит.',
      ]);
      await coffee.say_and_wait(
        'Впервые перед скачкой… предчувствие, что, может, догоню друга…',
      );
      era.printButton('「Превосходи!」', 1);
      await era.input();
      await coffee.say_and_wait('…Да!');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' редко улыбается светло. Чем ни кончится, эта скачка станет поворотом скаковой жизни ',
        coffee.get_colored_name(),
        ', и сейчас остаётся только молиться в стороне — пусть ',
        coffee.sex,
        ' выстоит.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = 'Урожай';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_call_c,
      t_plan_b,
      kiku_sho,
      japa_cup,
      arim_kin,
    ) => {
      await you.say_as_passer_by_and_wait('Комментатор', [
        coffee.get_colored_name(),
        '— ',
        coffee.sex,
        ' ломает всех и первой пересекает финиш!',
      ]);
      await you.say_as_passer_by_and_wait('Зрители', 'Ооооооооо!!!!」');
      await you.say_as_passer_by_and_wait('Комментатор', [
        coffee.sex,
        ' этот лёт… нет, дивный лёт! Весь стадион онемел…!',
      ]);
      await era.printAndWait([
        kiku_sho,
        ' : ',
        coffee.get_colored_name(),
        ' небывало ровным шагом доходит до финиша.',
      ]);
      await era.printAndWait('Весна, лето… накопленный труд наконец расцвёл.');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' редко возбуждена, проходит коридор и подходит к ',
        you.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait(
        'Тренер…! Друг…! Только что… прямо передо мной…! На скачке я ещё никогда не была так близко…!',
      );
      era.printButton('「Поздравляю. Лицо разглядела?」', 1);
      await era.input();
      await coffee.say_and_wait(
        'Ещё нет… но сегодня прошла всю дистанцию и совсем не тяжело…',
      );
      await coffee.say_and_wait('Это я… это я сейчас…?');
      await era.printAndWait([
        coffee.sex,
        ' голос полон неверия. А ',
        you.get_colored_name(),
        ' по тому, что ',
        coffee.sex,
        ' говорит, видишь: странность, что портила тело ',
        coffee.get_colored_name(),
        ', должно быть, ушла.',
      ]);
      await coffee.say_and_wait([callname, '…Следующая цель?']);
      await era.printAndWait('Возбуждение спало, пора решать, куда дальше.');
      era.printButton('「…Arima Kinen.」', 1);
      await era.input();
      await coffee.say_and_wait([arim_kin, '…Тогда ', japa_cup, ' сдаём?']);
      await era.printAndWait([
        'Выбор ',
        arim_kin,
        ' главным образом чтобы дать ',
        coffee.get_colored_name(),
        ' отдохнуть.',
      ]);
      await era.printAndWait([
        'Хоть ',
        coffee.sex,
        ' и заметно окрепла телом, жёсткие скачки всё ещё риск.',
      ]);
      await era.printAndWait([
        'Кроме того, после сегодняшней скачки ',
        you.get_colored_name(),
        ' видит: ',
        coffee.get_colored_name(),
        ' больше подходит длинная дистанция. Хотя ',
        japa_cup,
        ' и ',
        arim_kin,
        ' различаются всего на 100 метров… иногда именно эти «много» 100 метров решают.',
      ]);
      await era.printAndWait([
        'Объяснив ',
        coffee.get_colored_name(),
        ', ',
        coffee.sex,
        ' не спорит, делает шаг и берёт ',
        you.get_colored_name(),
        ' за руку.',
      ]);
      await coffee.say_and_wait([
        'Я… верю ',
        callname,
        '. Потому что ',
        callname,
        ' рядом… у меня эти результаты, так близко к другу…',
      ]);
      if (t_plan_b) {
        await tachyon.say_and_wait([
          'Хе-хе-хе, ха-ха-ха! Хорошо, хорошо, отлично. ',
          t_call_c,
          ', ты пробежала прекрасно!',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' только сейчас неспешно доходит с трибун.',
        ]);
        await tachyon.say_and_wait([
          'Точно как я думала! Не зря мой Plan B! Правда, ',
          t_call_c,
          '!?',
        ]);
        await coffee.say_and_wait([
          call_32,
          '… я всё ещё не могу доверить тебе всё… но спасибо за помощь.',
        ]);
        await era.printAndWait([
          'Сказав, ',
          coffee.get_colored_name(),
          ' берёт ',
          you.get_colored_name(),
          ' за руку и собирается уйти. На пороге ',
          you.get_colored_name(),
          ' оглядывается на ',
          you.get_colored_name(),
          ' другую подопечную ',
          coffee.uma_sex_title,
          '——',
          tachyon.get_colored_name(),
          ', ',
          coffee.sex,
          ' по-прежнему с улыбкой, полной запаса.',
        ]);
        await era.printAndWait([
          'Только там, куда ',
          you.get_colored_name(),
          ' и ',
          coffee.get_colored_name(),
          ' не смотрят, ',
          tachyon.get_colored_name(),
          ' на миг теряет лицо.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = 'Навстречу Arima Kinen';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (coffee, you, callname, arim_kin) => {
      await era.printAndWait([arim_kin, '.']);
      await era.printAndWait([
        'Это последняя скачка ',
        coffee.get_colored_name(),
        ' в этом году и конец ',
        coffee.sex,
        ' классического класса.',
      ]);
      await era.printAndWait([
        'В коридоре ',
        you.get_colored_name(),
        ' держит ',
        coffee.get_colored_name(),
        ' за плечи и даёшь последний наказ — ',
        coffee.sex,
        ' слушает.',
      ]);
      era.printButton('「Соберись… пусть адреналин льётся…」', 1);
      await era.input();
      await coffee.say_and_wait('…М-м.');
      await era.printAndWait([
        'С закрытыми глазами ',
        coffee.get_colored_name(),
        ' тихо отвечает.',
      ]);
      await era.printAndWait(
        'Когда снова открывает глаза, уже совсем твёрдая.',
      );
      await coffee.say_and_wait([callname, ', я выиграю.']);
      await era.printAndWait([coffee.sex, ' спина тонет в свете.']);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = 'Странность';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (coffee, you, callname, kiku_sho, arim_kin, tenn_spr) => {
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Победитель ',
        arim_kin,
        ' этого года——',
        coffee.get_colored_name(),
        '!',
      ]);
      await you.say_as_passer_by_and_wait('Зрители', 'Ооооооо!!!!」');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' даже против соперниц старшего класса показала высокий уровень и взяла ',
        arim_kin,
        '. Однако…',
      ]);
      await coffee.say_and_wait('Как… расстояние… увеличилось…');
      await coffee.say_and_wait(['Чем на ', kiku_sho, '… ещё дальше… как…']);
      await era.printAndWait([
        'В коридоре победившая ',
        coffee.get_colored_name(),
        ' всё же прислоняется к стене в тоске—— нет, победой это не назвать: ',
        coffee.sex,
        ' снова проиграла тому, кого ',
        coffee.sex,
        ' зовёт другом.',
      ]);
      era.printButton('「Кафе…」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' хочешь утешить: пусть хоть немного успокоится ',
        coffee.sex,
        ', а с чего начать — не знаешь.',
      ]);
      await coffee.say_and_wait([
        callname,
        '…Друг стал… быстрее. Гораздо быстрее, чем раньше…',
      ]);
      await coffee.say_and_wait(
        'Будто… ответил на то, что я стала быстрее, и всерьёз…',
      );
      await coffee.say_and_wait('Как… как…');
      await coffee.say_and_wait('Как, как, как…!!');
      await era.printAndWait('——Хрусь!');
      await coffee.say_and_wait('Нх…!');
      await era.printAndWait([
        'Неужели опять?! ',
        you.get_colored_name(),
        ' сразу подхватывает ',
        coffee.get_colored_name(),
        '; боль и слёзы разом всходят на лицо — ',
        coffee.sex,
        ' хрупкая как стекло, жалко смотреть.',
      ]);
      await era.printAndWait([
        'Снимаешь обувь и носки — ',
        coffee.sex,
        ' снова с трещиной ногтя. Правда, в весе ',
        coffee.sex,
        ' уже не скачет так резко, а всё равно…',
      ]);
      await era.printAndWait([
        'Тень над ',
        coffee.get_colored_name(),
        ' ещё не ушла. Проклятие… или нечто живое…',
      ]);
      await coffee.say_and_wait('Я обязательно, изо всех сил догоню друга!');
      await coffee.say_and_wait(
        'В следующем году обязательно… я уже не та слабая, что была…',
      );
      await coffee.say_and_wait(['…', callname, ', следующая цель…?']);
      await era.printAndWait(['Сначала пусть остынет ', coffee.sex, ' —— нх!']);
      await era.printAndWait([
        'Слова не выходят, ',
        you.get_colored_name(),
        ' вдруг чувствует удар… как кулак в солнечное сплетение. Будто… очень сильная воля…',
      ]);
      era.printButton('「…Tenno Sho (Spring).」', 1);
      await era.input();
      await coffee.say_and_wait([tenn_spr, '…да. 3200 метров, длинная…']);
      await coffee.say_and_wait(
        'Значит… на такой дистанции друга догнать, да?',
      );
      era.printButton('「…М-м.」', 1);
      await era.input();
      await era.printAndWait([
        'По курсу вопросов нет. Раз ставить цель — целиться в большой весенний G1. А ',
        tenn_spr,
        ' и есть первая весенняя, плюс подходит длинной дистанции ',
        coffee.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        '…Но те слова и правда вышли из воли ',
        you.get_colored_name(),
        '?',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = 'Новогодние замыслы';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_plan_b,
      kiku_sho,
      arim_kin,
      tenn_spr,
    ) => {
      await era.printAndWait('Старший класс, начало года.');
      await era.printAndWait([
        'Чтобы вымолить ',
        coffee.get_colored_name(),
        ' успех в этом году, вы идёте в святилище на новогодний молебен.',
      ]);
      if (t_plan_b) {
        await coffee.say_and_wait([
          'Тот… ',
          call_32,
          ' как в последнее время… ',
          coffee.sex,
          ' раньше говорила, что вернётся на скачки…',
        ]);
        await era.printAndWait([
          'После ',
          kiku_sho,
          ', ',
          tachyon.get_colored_name(),
          ' снова тренируется. Когда кончилась ',
          arim_kin,
          ', ',
          coffee.sex,
          ' открыто объявила о возвращении, и первая скачка, куда ',
          coffee.sex,
          ' выйдет, как раз та, куда пойдёт ',
          coffee.get_colored_name(),
          ' — ',
          tenn_spr,
          '.',
        ]);
        era.printButton(`「${tachyon.sex}…в последнее время дел много.」`, 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' кивает и больше не поднимает ',
          tachyon.get_colored_name(),
          '.',
        ]);
      }
      await coffee.say_and_wait(
        'Сегодня только мы… двое… друг почему-то пропал…',
      );
      await era.printAndWait([
        'С ',
        arim_kin,
        ', ',
        coffee.get_colored_name(),
        ' стала чуть странной… но не всегда такой.',
      ]);
      await era.printAndWait(['Хоть обычная ', coffee.sex, ' очень тихая——']);
      await era.printAndWait(
        'Сотрудник「Все на площадке, давайте встретим весну молитвой! Какое бы ни было желание, божество обязательно поможет!」',
      );
      await coffee.say_and_wait('…');
      await coffee.say_and_wait('Это ложь.');
      await coffee.say_and_wait('Желания не исполняются. Здесь божества нет.');
      await era.printAndWait([
        '——Но… иногда становится так. Есть ли выключатель, что меняет ',
        coffee.sex,
        '?',
      ]);
      await coffee.say_and_wait([
        callname,
        ', сюда… пойдём в город, где исполняется всё…',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Потом ',
        coffee.get_colored_name(),
        ' ведёт ',
        you.get_colored_name(),
        ' в жуткий город совсем без новогоднего воздуха…',
      ]);
      await coffee.say_and_wait('Здесь… желания исполняются по-настоящему…');
      await coffee.say_and_wait([
        'Чтобы догнать друга… какое желание ',
        callname,
        ' загадает для меня?',
      ]);
      await coffee.say_and_wait('Выбери… из этих.');
      await era.printAndWait(
        'Песок под ногами медленно ползёт, у ступней всплывают знаки.',
      );
      await era.printAndWait([
        'Хоть сверхъестественное уже не раз, ',
        you.get_colored_name(),
        ' всё равно дрожит.',
      ]);
      await era.printAndWait([
        'Из них ',
        you.get_colored_name(),
        ' выбирает——',
      ]);
      era.printButton('「Лечение звёздным светом」(Силы+500)', 1);
      era.printButton('「Чешуя по всему телу」(все параметры+10)', 2);
      era.printButton('「Мудрость ушедших」(очки навыков+35)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await coffee.say_and_wait(
            'Лечение… да… звёзды… всегда смотрят на нас с неба…',
          );
          await coffee.say_and_wait(
            'Если безграничный звёздный свет накроет всё тело…',
          );
          await coffee.say_and_wait([
            'Спасибо, ',
            callname,
            '. Чувствую себя живее…',
          ]);
          await coffee.say_and_wait(
            'Думаю, смогу снова тренироваться. Не клонить голову… идти вперёд…',
          );
          await era.printAndWait([
            'Тот город был мороком…? В миг вы снова на обычной улице.',
          ]);
          await era.printAndWait([
            'Как ни крути, на лице ',
            coffee.get_colored_name(),
            ' снова светится сила.',
          ]);
          break;
        case 2:
          await coffee.say_and_wait(
            'Чешуя по всему телу… будто волосы… сетчатку… и душу… всё закрыть бронёй…',
          );
          await coffee.say_and_wait('Если усилить моё существование. Ах…');
          await era.printAndWait('——Бульк.');
          await era.printAndWait(
            'В ухе будто водный звук-галлюцинация: словно тонешь в чёрном безбрежном море.',
          );
          await era.printAndWait([
            'Давление воды мягко обнимает ',
            you.get_colored_name(),
            ' целиком, ',
            you.get_colored_name(),
            ' чует: кто-то плывёт рядом с ',
            you.get_colored_name(),
            ' — холодная тонкая чешуя по воде чертит у ',
            you.get_colored_name(),
            ' уха, раздвоенный язык пробует и трогает пряди ',
            you.get_colored_name(),
            '…',
          ]);
          await era.printAndWait('…');
          await era.printAndWait([
            'Когда ',
            you.get_colored_name(),
            ' выходит из морока, вы снова на обычной улице.',
          ]);
          await era.printAndWait('Это был сон или снова сверхъестественное?');
          await era.printAndWait([
            'Глядя на бодрую, будто ещё не наевшуюся ',
            coffee.get_colored_name(),
            ', желание, может, и сработало…',
          ]);
          break;
        case 3:
          await coffee.say_and_wait('Мудрость ушедших… память предков…');
          await coffee.say_and_wait('Если заглянуть… хотя бы на крупицу…');
          await era.printAndWait([
            '——Чужая память течёт в голову ',
            coffee.get_colored_name(),
            '.',
          ]);
          await era.printAndWait(
            'Пейзаж, неясно существовал ли, и древняя мудрость всплывают и сразу гаснут, как стрекоза по воде; в памяти остаётся лишь шелуха.',
          );
          await era.printAndWait('Но даже шелуха…');
          await coffee.say_and_wait([
            callname,
            ', кажется, я поняла, сколько разных бегов есть в мире. Хочу ещё…',
          ]);
          await coffee.say_and_wait(
            'Эти вспышки… потом на скачках пробовать по одной…',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' не понимаешь, что случилось, а ',
            you.get_colored_name(),
            ' сбоку видит лишь, как ',
            coffee.get_colored_name(),
            ' закрыла и открыла глаза — и вы снова на обычной улице.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = 'Навстречу Tenno Sho (Spring)';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      call_32,
      callname_32,
      t_call_c,
      t_plan_b,
      tenn_spr,
    ) => {
      await era.printAndWait([tenn_spr, ' — день скачки.']);
      await coffee.say_and_wait('Я выиграю… выиграю… обязательно выиграю…');
      await coffee.say_and_wait(
        'Кто бы ни… встал передо мной, на пути к другу, я…',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' будто зажгла чёрное пламя, ',
        coffee.sex,
        ' жажда победы ещё никогда не была такой.',
      ]);
      if (t_plan_b) {
        await tachyon.say_and_wait([
          'Йо, ',
          t_call_c,
          ' и ',
          callname_32,
          '. Страшные лица.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' другая подопечная и соперница этой скачки выходит сзади.',
        ]);
        await coffee.say_and_wait([
          call_32,
          '…Хоть ты и вышла — не думай меня остановить…',
        ]);
        await tachyon.say_and_wait([
          'Ха-ха, остановить? …Не решай, что уже выиграла, до старта, ',
          coffee.get_colored_name(),
          '.',
        ]);
        await era.printAndWait('Двое друг против друга — пусть решит трасса.');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' молча смотришь на необычно жёсткое лицо ',
          coffee.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Если б можно… вот бы услышала ',
          coffee.sex,
          ': не гонись за другом. Но такое, конечно, не скажешь — это уговор, что ',
          you.get_colored_name(),
          ' и ',
          coffee.get_colored_name(),
          ' заключили при договоре, — и он самый первый, какой дала ',
          coffee.sex,
          '.',
        ]);
        await era.printAndWait([
          'Так что сегодня… можно только молиться, чтобы ',
          coffee.sex,
          ' была цела.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = 'Тот берег';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {boolean} m_horse 「朋友」事件中是否选择了「马」
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      m_horse,
      t_plan_b,
      tenn_spr,
      takz_kin,
    ) => {
      if (t_plan_b) {
        await era.printAndWait('Заезд, от которого замирает сердце.');
        await era.printAndWait([
          'Эти 3200 метров ',
          tenn_spr,
          ' кончились схваткой ',
          coffee.get_colored_name(),
          ' и ',
          tachyon.get_colored_name(),
          ' на финишной прямой.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' фигура будто быстрее света, ',
          coffee.get_colored_name(),
          ' дикий шаг как на охоте потрясли всех.',
        ]);
        await era.printAndWait([
          '——Но в конце сильнее оказалась ',
          coffee.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'В миг, когда ',
          coffee.sex,
          ' пересекла линию, рёв ипподрома Киото встал до неба.',
        ]);
        await era.printAndWait('Коридор участниц.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' после скачки пропала, а ',
          coffee.get_colored_name(),
          ' как всегда ждёшь ',
          you.get_colored_name(),
          '.',
        ]);
        await coffee.say_and_wait([
          'Фух, фух, фух… я выиграла, ',
          callname,
          '… на последней прямой выложилась и обошла ',
          call_32,
          '.',
        ]);
      } else {
        await era.printAndWait('Заезд, от которого замирает сердце.');
        await era.printAndWait([
          'Эти 3200 метров ',
          tenn_spr,
          ' кончились тем, что ',
          coffee.get_colored_name(),
          ' на финишной прямой как будто охотилась на передних ',
          coffee.uma_sex_title,
          ' потрясающим концом. Когда ',
          coffee.sex,
          ' пересекла линию, рёв ипподрома Киото встал до неба.',
        ]);
        await era.printAndWait('Коридор участниц.');
        await coffee.say_and_wait(['Фух, фух, фух… я выиграла, ', callname]);
      }
      await coffee.say_and_wait(
        'и… расстояние до друга… ещё чуть сократилось… хотя догнать не вышло.',
      );
      await era.printAndWait([
        'После скачки, выложившись полностью, ',
        coffee.get_colored_name(),
        ' снова как обычно.',
      ]);
      era.printButton('「Бег идеален. Поздравляю.」', 1);
      await era.input();
      await coffee.say_and_wait(
        'Спасибо, но пока не догоню друга, до идеала далеко…',
      );
      await coffee.say_and_wait([
        callname,
        ' Теперь надо выбрать следующие скачки. Про следующую цель——',
      ]);
      await era.printAndWait([
        'Следующая цель… обычно берут весеннюю ',
        takz_kin,
        ', но дать ',
        coffee.get_colored_name(),
        ' чуть отдохнуть тоже неплохо…',
      ]);
      await coffee.say_and_wait('——Хочу в экспедицию во Францию.');
      await era.printAndWait('!?');
      await era.printAndWait([
        'На миг ',
        you.get_colored_name(),
        ' не верит ушам: взрывная фраза ',
        coffee.get_colored_name(),
        ' крошит мысль ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton(
        "「Франция?! Prix de l'Arc de Triomphe, ты хочешь бежать Prix de l'Arc de Triomphe?!」",
        1,
      );
      await era.input();
      await coffee.say_and_wait(
        '…Быстрее, сильнее — только на той стороне… за морем, во Франции.',
      );
      era.printButton('「…Причина? Опять друг?」', 1);
      await era.input();
      await coffee.say_and_wait(
        'М-м… друг скоро уйдёт… один во Францию… так что я обязательно…',
      );
      if (m_horse) {
        era.println();
        await era.printAndWait('——Не так.');
        await era.printAndWait([
          'Вдруг в голове ',
          you.get_colored_name(),
          ' будто сама собой вспыхивает мысль.',
        ]);
        await era.printAndWait([
          'Не так? Что не так: план ',
          coffee.get_colored_name(),
          ' ехать во Францию… или во Францию ',
          coffee.sex,
          ' ведёт вовсе не друг?',
        ]);
      }
      era.println();
      await coffee.say_and_wait([callname, '…Это желание ты примешь?']);
      await coffee.say_and_wait('Друг тоже зовёт меня. Поэтому…');
      if (m_horse) {
        era.println();
        await era.printAndWait('——Не так.');
        await era.printAndWait([
          'Снова. Та мысль ещё раз в голове ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait('Что именно не так, скажи ясно!');
      }
      era.println();
      await coffee.say_and_wait('Догнать друга—— наш важный уговор.');
      await coffee.say_and_wait(
        'Я не сдамся… мы для этого и заключили договор…',
      );
      era.printButton('「…」', 1);
      await era.input();
      await era.printAndWait([
        'Не возразить: это и правда основа договора между ',
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' не можешь убедить ',
        coffee.get_colored_name(),
        ' бросить экспедицию. В итоге оставляете домашнюю цель ',
        takz_kin,
        ', а ехать ли во Францию решите к середине следующего месяца.',
      ]);
      if (m_horse) {
        era.println();
        await era.printAndWait([
          'Только снова вспоминаешь ту мысль, что вспыхнула прямо в голове.',
        ]);
        await era.printAndWait([
          '…Кто ведёт ',
          coffee.get_colored_name(),
          ' во Францию?',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_19: (() => {
    const title = 'Разлука';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} m_horse 「朋友」事件中是否选择了「马」
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      t_call_c,
      m_horse,
      t_plan_b,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        'После разговора с ',
        coffee.get_colored_name(),
        ' вы решаете ехать за границу — на французский G1 ',
        prix_lat,
        '.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' сегодня вылетает с этого аэропорта, и ',
        you.get_colored_name(),
        ' едет вместе: вдвоём на этот вызов.',
      ]);
      await coffee.say_and_wait([
        'Пойдём, ',
        callname,
        '. Чтобы за краем неба догнать друга…',
      ]);
      era.printButton('「…Подожди.」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' склоняет голову к ',
        you.get_colored_name(),
        ', не понимая, что ',
        you.get_colored_name(),
        ' хочет сделать перед вылетом.',
      ]);
      await you.say_and_wait(
        'Экспедиция во Францию не мелочь: перед вылетом надо ещё раз сложить картину…',
      );
      await you.say_and_wait(
        'Чужая трасса не как дома, плюс смена среды и долгая дорога: надо знать, как твоё тело…',
      );
      await coffee.say_and_wait('Теперь об этом думать… я тоже…');
      era.printButton('Остановить ', 1);
      await era.input();
      await you.say_and_wait(
        'В конце сбрасываю роль тренера… я не хочу, чтобы ты ехала.',
      );
      await coffee.say_and_wait(
        '…Почему? Мы… же договорились, нет? …вместе идти, чтобы догнать друга?',
      );
      await you.say_and_wait('Кафе… твои дела для меня всегда первые…');
      await you.say_and_wait(
        'Ради твоей мечты я готов(а) упасть вместе с ней…',
      );
      await you.say_and_wait(
        'Но… это ставка без возврата. Если проиграть, твоя скаковая жизнь… кончится.',
      );
      await era.printAndWait(
        'Если весь ваш труд в итоге купит только 「конец」…',
      );
      await era.printAndWait([
        'Если ради мечты ',
        coffee.get_colored_name(),
        ' должна потерять всё остальное…',
      ]);
      await era.printAndWait([
        'тогда успех и будущее ',
        coffee.get_colored_name(),
        ' важнее так называемой мечты.',
      ]);
      era.printButton('「Поэтому зарубежную экспедицию… лучше отменить.」', 1);
      await era.input();
      await coffee.say_and_wait('…');
      await coffee.say_and_wait('Так… тогда…');
      if (era.get('love:25') > 75) {
        await coffee.say_and_wait('Пора прощаться… моя любовь…');
      } else {
        await coffee.say_and_wait(['Пора прощаться… ', callname, '…']);
      }
      era.println();
      await coffee.say_and_wait(
        'Я думала… только ты другой… только ты смотришь на мою мечту… только ты вошёл(шла) в мой мир…',
      );
      await coffee.say_and_wait(
        'А в конце… это была только моя односторонняя надежда…',
      );
      era.println();
      await coffee.say_and_wait('Ничего… всё равно. Дальше… я и одна…');
      await coffee.say_and_wait(
        'Ничего… всё равно. Просто вернуться как было…',
      );
      await coffee.say_and_wait('Я обязательно догоню друга. Поэтому——');
      era.println();
      await coffee.say_and_wait('…Прощай.');
      era.println();
      await era.printAndWait([
        'Без жалости прощается и уходит спиной. ',
        coffee.get_colored_name(),
        ' кровавыми словами хочет рвать вашу связь—— нет, не только слова в крови.',
      ]);
      await era.printAndWait([
        'Неизвестно когда ',
        coffee.get_colored_name(),
        ' с пальцев ног сочится кровь, и с пальцев ',
        coffee.sex,
        ' протянутой руки тоже.',
      ]);
      era.println();
      await coffee.say_and_wait('Почему не двигаются… мои… ноги…');
      await coffee.say_and_wait('…Почему? Я же… должна ехать…');
      await coffee.say_and_wait('Если не поеду, друг…');
      await coffee.say_and_wait('Друг… исчезнет…');
      await coffee.say_and_wait('Хоть не двигаюсь, я всё равно…!!');
      if (m_horse) {
        era.println();
        await era.printAndWait([
          '——Остановить: дальше не должна идти ',
          coffee.sex,
          '.',
        ]);
        await era.printAndWait([
          'Странная мысль снова в голове ',
          you.get_colored_name(),
          '—— но и без того ',
          you.get_colored_name(),
          ' так и сделает…!',
        ]);
      }
      era.println();
      if (t_plan_b) {
        await era.printAndWait([
          'Не успеваешь ',
          you.get_colored_name(),
          ' рвануть вперёд — у ',
          coffee.get_colored_name(),
          ' появляется кто-то неожиданный и хватает ',
          coffee.sex,
          ' дрожащие плечи.',
        ]);
        await tachyon.say_and_wait([
          'Жалкий вид, ',
          t_call_c,
          '. Так хочешь на ',
          prix_lat,
          '?',
        ]);
        await coffee.say_and_wait('…!?');
        era.printButton('「Тахион?! Ты как здесь?」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' почему-то тайком пришла в аэропорт, послушала вас и влезла.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' бросается вперёд, останавливает рывок ',
          coffee.get_colored_name(),
          ', рука под мышку, другая под ноги, и ',
          coffee.sex,
          ' поднимает на руки.',
        ]);
        await tachyon.say_and_wait(
          'Что значит 『ты как здесь』? Следить за своим подопытным — само собой.',
        );
        await coffee.say_and_wait('…Ничего не понимаешь… а всё лезешь…');
        await era.printAndWait([
          coffee.get_colored_name(),
          ' чуть бьётся в объятиях ',
          you.get_colored_name(),
          ' и сдаётся, потом выдавливает фразу к ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await tachyon.say_and_wait(
          'В таком виде ещё лезть на скачку — вот и жалкий вид…',
        );
        await tachyon.say_and_wait([
          'Раз ты любой ценой хочешь на ',
          prix_lat,
          '—— как насчёт того, что я выйду вместо тебя?',
        ]);
        await coffee.say_and_wait('…Ты… что?');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' слова ',
          you.get_colored_name(),
          ' шокируют ',
          coffee.get_colored_name(),
          ' на руках; ',
          coffee.sex,
          ' об этом не слышал(а).',
        ]);
        await tachyon.say_and_wait([
          'Учёный не делает пустого. На ',
          prix_lat,
          ' у меня свой расчёт… о, но на ',
          takz_kin,
          ' я тоже выйду.',
        ]);
        await tachyon.say_and_wait(
          'И твой друг мне давно интересен. Я догоню его вместо тебя, как?',
        );
        await coffee.say_and_wait('Почему… друг… согласился…');
        await coffee.say_and_wait('И странность тела… понемногу отпускает…');
        await coffee.say_and_wait('Но… но я… дальше… что мне…');
        await coffee.say_and_wait('У, ууу… ууу…');
        await era.printAndWait([
          'С плачущей ',
          coffee.get_colored_name(),
          ' на руках вы втроём идёте назад в Трейсен.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' зарубежная экспедиция отменена в последнюю минуту, следующая цель снова дома: ',
          takz_kin,
          '.',
        ]);
        await era.printAndWait([
          'А ',
          tachyon.get_colored_name(),
          ' после ',
          takz_kin,
          ' поедет во Францию на ',
          prix_lat,
          '.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' бросаешься вперёд, останавливаешь рывок ',
          coffee.get_colored_name(),
          ', рука под мышку, другая под ноги, и ',
          coffee.sex,
          ' поднимаешь на руки.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' не бьётся в объятиях ',
          you.get_colored_name(),
          ', будто душа ушла… долго ',
          coffee.sex,
          ' не отвечает.',
        ]);
        await coffee.say_and_wait('Видно… ничего не поделать…');
        await coffee.say_and_wait([
          'Придётся, как сказал(а) ',
          callname,
          '… отменить экспедицию…',
        ]);
        await coffee.say_and_wait('Но… но я… дальше… что мне…');
        await coffee.say_and_wait('У, ууу… ууу…');
        await era.printAndWait([
          'С заплакавшей ',
          coffee.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' идёте назад в Трейсен.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' зарубежная экспедиция отменена в последнюю минуту, следующая цель снова дома: ',
          takz_kin,
          '.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = 'Навстречу Takarazuka Kinen';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      t_call_c,
      t_plan_b,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        'Хоть то, что в аэропорту, ввергло ',
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ' в неловкую холодную войну, но взаимная прямота после паузы ',
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ' снова как прежде, даже глубже.',
      ]);
      await era.printAndWait([
        coffee.sex,
        'Понемногу встаёт из уныния, чаще улыбается, и——',
      ]);
      await era.printAndWait([takz_kin, ' коридор перед скачкой.']);
      await coffee.say_and_wait([takz_kin, '…Здесь… моя новая точка…']);
      await coffee.say_and_wait('Хоть друга нет… я обязательно——');
      await coffee.say_and_wait('——!?');
      era.printButton('「Что?」', 1);
      await era.input();
      await coffee.say_and_wait(
        'Друг! У выхода из коридора… не ушёл, ждёт меня!',
      );
      await era.printAndWait([
        'Друг… разве не уехал во Францию ждать вызова ',
        prix_lat,
        ' на ',
        coffee.get_colored_name(),
        '?',
      ]);
      await era.printAndWait([
        'Как ни крути, увидев друга снова, ',
        coffee.get_colored_name(),
        ' оживилась: на скачке, может, даст больше.',
      ]);
      await coffee.say_and_wait('Я обязательно выиграю…');
      if (t_plan_b) {
        await tachyon.say_and_wait(['Не говори так уверенно, ', t_call_c, '.']);
        await era.printAndWait([
          'После сборов ',
          tachyon.get_colored_name(),
          ' в своём ',
          coffee.sex,
          ' фирменном белом победном костюме входит в коридор.',
        ]);
        await tachyon.say_and_wait([
          'Я на ',
          takz_kin,
          ' обойду тебя… потом на ',
          prix_lat,
          ' обойду твоего друга.',
        ]);
        await coffee.say_and_wait('…Сможешь — попробуй…!');
        await era.printAndWait([
          'Между ними порох. И эти двое на ',
          takz_kin,
          ' сойдутся в последний раз.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = 'Замена';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {PrintedSpan} t_call_c 爱丽速子对曼城茶座的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     */
    const f = async (
      coffee,
      tachyon,
      you,
      callname,
      call_32,
      t_call_c,
      t_plan_b,
      takz_kin,
      prix_lat,
      japa_cup,
    ) => {
      if (t_plan_b) {
        await coffee.say_and_wait([
          'Фух, фух, фух… ',
          call_32,
          '…Сильная… чуть-чуть не хватило…',
        ]);
        await coffee.say_and_wait(
          'Даже… казалось, плечо друга уже трогаю… но в конце выиграла я.',
        );
      } else {
        await coffee.say_and_wait(
          'Фух, фух, фух… ближе… к другу… как никогда…',
        );
        await coffee.say_and_wait('Даже… казалось, плечо друга уже трогаю…');
      }
      await era.printAndWait([
        'Последний праздник первой половины года——',
        takz_kin,
        ' кончился победой ',
        coffee.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' тело куда крепче прежнего. После такой жёсткой скачки быстро выходит из опустошения финиша.',
      ]);
      era.printButton('「Ты стала сильнее, Кафе.」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' и правда сильно выросла.',
      ]);
      await era.printAndWait([
        'Помнишь: два с половиной года назад ',
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ' встретились случайно; тогда ',
        coffee.sex,
        ' была одинокой, что ночами на Тренировочном поле одна гонялась за невидимым ',
        coffee.uma_sex_title,
        '.',
      ]);
      await era.printAndWait('Оглянешься теперь — какая длинная дорога.');
      await era.printAndWait([
        'За границу не вышли, но мечту ',
        coffee.get_colored_name(),
        ' всё же хочется продолжить.',
      ]);
      await era.printAndWait('Зарубежная экспедиция…');
      await coffee.say_and_wait([callname, ', тогда наша следующая цель…']);
      era.printButton('「Japan Cup, как?」', 1);
      await era.input();
      await coffee.say_and_wait([
        japa_cup,
        '…Как ',
        prix_lat,
        ', 2400 метров, средняя…',
      ]);
      await coffee.say_and_wait([
        'Спасибо, ',
        callname,
        '. Там… это наша Франция, да…',
      ]);
      await era.printAndWait([
        'Как продолжение несбывшейся мечты ноябрьский Токио — ваш Париж.',
      ]);
      if (t_plan_b) {
        await era.printAndWait('А настоящий Париж?');
        await tachyon.say_and_wait(['Я проиграла, ', t_call_c, '.']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' входит в коридор и спокойно признаёт поражение.',
        ]);
        await tachyon.say_and_wait('Возможности в тебе больше, чем я думала.');
        await tachyon.say_and_wait('До сих пор… Plan B тоже дал плод, да.');
        await coffee.say_and_wait([call_32, '…Спасибо…']);
        await tachyon.say_and_wait([
          'Тогда и прощаемся, ',
          prix_lat,
          '… может, моя последняя скачка. С тобой всегда было интересно, ',
          t_call_c,
          '.',
        ]);
        await coffee.say_and_wait('… Я тоже буду смотреть твои скачки.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' только машет рукой, не отвечая ',
          coffee.get_colored_name(),
          ' в лоб.',
        ]);
        await era.printAndWait([
          'Так следующая цель ',
          coffee.get_colored_name(),
          ' — ',
          japa_cup,
          '.',
        ]);
        await era.printAndWait([
          'А ',
          tachyon.get_colored_name(),
          ' на ',
          prix_lat,
          ' вспыхнет своим светом.',
        ]);
      } else {
        await era.printAndWait(['Так следующая цель — ', japa_cup, '.']);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Летний сбор (старший год) начинается';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (coffee, you, japa_cup, arim_kin) => {
      await era.printAndWait('В автобусе на летний сбор.');
      await era.printAndWait([
        'После этого сбора ',
        coffee.get_colored_name(),
        ' ждёт ',
        japa_cup,
        '; до ноября вроде далеко, но расслабишься — уже в минусе, плюс ещё неясно, идти ли на ',
        arim_kin,
        '.',
      ]);
      await era.printAndWait(
        'Так главная цель сбора — как следует восстановиться——',
      );
      era.printButton('「——Поняла, Кафе? …Кафе?」', 1);
      await era.input();
      await era.printAndWait([
        'Сидящая рядом с ',
        you.get_colored_name(),
        ', ',
        coffee.get_colored_name(),
        ' уже кладёт голову на плечо ',
        you.get_colored_name(),
        ' и тихо спит, покачиваясь с ходом машины.',
      ]);
      await era.printAndWait([
        'Чуть меняешь позу, чтобы ',
        coffee.sex,
        ' спалось удобнее.',
      ]);
      await coffee.say_and_wait('…М-м…');
      await era.printAndWait('Какая милая сонная морда.');
      await era.printAndWait([
        you.get_colored_name(),
        ' тоже клонит в сон и засыпает рядом с ',
        coffee.get_colored_name(),
        '…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = 'Летний сбор (старший год) кончается';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {boolean} m_horse 「朋友」事件中是否选择了「马」
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     */
    const f = async (coffee, you, m_horse, japa_cup) => {
      await era.printAndWait('Двухмесячный летний сбор закончился.');
      await era.printAndWait([
        'За всё лето ничего особенного: ',
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ' каждый день вместе на пляже, ',
        coffee.get_colored_name(),
        ' тело как следует привели.',
      ]);
      await coffee.say_and_wait('Тихий летний сбор… тоже ничего…');
      await era.printAndWait([
        'В автобусе назад в Трейсен ',
        coffee.get_colored_name(),
        ' смотрит, как за окном бежит вид, и вздыхает так.',
      ]);
      era.printButton('「Тихая жизнь тоже хороша…」', 1);
      await era.input();
      await era.printAndWait([
        'Но жизнь ',
        coffee.uma_sex_title,
        ' не может быть вечно тихой. Вернувшись в Трейсен, начнёте жёсткую подготовку к ',
        japa_cup,
        '.',
      ]);
      if (m_horse) {
        era.println();
        await era.printAndWait([
          'Тяжёлый воздух вокруг ',
          you.get_colored_name(),
          ' и ',
          coffee.get_colored_name(),
          ': душа скачек из иного мира, таинственный друг — всё сплелось на ',
          coffee.get_colored_name(),
          ', и ',
          coffee.sex,
          ' на время теряется.',
        ]);
        await era.printAndWait([
          'А цель ',
          coffee.get_colored_name(),
          ' — догнать друга — и правда ',
          coffee.sex,
          ' своё желание?',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = 'Навстречу Japan Cup';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} call_32 曼城茶座对爱丽速子的称呼
     * @param {boolean} t_plan_b 爱丽速子是否进入 Plan B
     * @param {PrintedSpan} prix_lat 凯旋门赏（上色版名字）
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     */
    const f = async (
      coffee,
      you,
      callname,
      call_32,
      t_plan_b,
      prix_lat,
      japa_cup,
    ) => {
      await era.printAndWait([japa_cup, ' в тот день, коридор.']);
      await era.printAndWait(['Случайно встретившись, вы дошли досюда.']);
      await coffee.say_and_wait('…');
      await era.printAndWait([
        'Рядом с ',
        you.get_colored_name(),
        ' шагающая ',
        coffee.get_colored_name(),
        ' вдруг останавливается и встречается взглядом с обернувшейся ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton('「Нервничаешь?」', 1);
      await era.input();
      await coffee.say_and_wait('…Не нервы, просто…');
      if (t_plan_b) {
        await coffee.say_and_wait([
          'Увидев ',
          call_32,
          ' бег ',
          prix_lat,
          ', думаю… смогу ли сегодня пробежать так же ярко, как ',
          coffee.sex,
          '?',
        ]);
      } else {
        await coffee.say_and_wait('Сегодня… смогу ли я пробежать ярко?');
      }
      await era.printAndWait([
        'Когда-то ',
        coffee.get_colored_name(),
        ' думала только обогнать друга и не видела мира; после всего уже другая.',
      ]);
      era.printButton('「Иди. Покажи миру свой лучший финишный рывок.»', 1);
      await era.input();
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait([callname, '…Можно поцеловать?']);
        await era.printAndWait([
          'Чуть отводишь длинные волосы со лба ',
          coffee.get_colored_name(),
          ', чуть склоняешься, ',
          coffee.get_colored_name(),
          ' на цыпочках ловит губы ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Как в тот день в переулке торговой улицы, руки ',
          coffee.get_colored_name(),
          ' сами обходят шею ',
          you.get_colored_name(),
          ', в глубине губ вы меняетесь любовью.',
        ]);
        await era.printAndWait([
          'Долго спустя расходитесь, улыбаетесь друг другу и бежите к трассе ',
          japa_cup,
          '.',
        ]);
      } else {
        await coffee.say_and_wait([callname, '…Можно обнять?']);
        await era.printAndWait([
          'Раскрываешь руки, ',
          coffee.get_colored_name(),
          ' шагает и обнимает ',
          you.get_colored_name(),
          '; больше ничего, только чужое тепло.',
        ]);
        await era.printAndWait([
          'Долго спустя руки отпускают и вы бежите к трассе ',
          japa_cup,
          '.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = 'Победа и поражение';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} japa_cup 日本杯（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (coffee, you, callname, japa_cup, arim_kin) => {
      await era.printAndWait([
        'Зрители всего мира, что смотрели ',
        japa_cup,
        ', запомнят этот день.',
      ]);
      await era.printAndWait([
        'На финишной прямой чёрная тень рвётся с хвоста стаи, будто грызёт спины, неотразимой силой и взрывом снимает каждую «добычу» впереди; ',
        coffee.sex,
        ', которых обошла ',
        coffee.uma_sex_title,
        ', от испуга на миг теряют ход.',
      ]);
      await era.printAndWait([
        coffee.sex,
        'Размытый силуэт скоростной камеры на финише потом даст ей прозвище 「Чёрный призрак」.',
      ]);
      await era.printAndWait('Но это потом.');
      await era.printAndWait([
        'Сейчас в комнате отдыха победительница ',
        japa_cup,
        ' победительница ',
        coffee.get_colored_name(),
        ' лежит под руками ',
        you.get_colored_name(),
        ' на массаже.',
      ]);
      era.printButton('「Сегодня слишком рванула. Если б травма?」', 1);
      await era.input();
      await era.printAndWait([
        'Друга снова не догнала, но ',
        coffee.get_colored_name(),
        ' перед миром пробежала так, что есть чем гордиться; цена — едва увидела ',
        you.get_colored_name(),
        ', сразу не устояла и упала в объятия ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'К счастью, не травма: мышцы опустели после нуля сил. ',
        you.get_colored_name(),
        ' на месте массирует ей мышцы — ',
        coffee.sex,
        ' терпит.',
      ]);
      await coffee.say_and_wait([
        'Ай, больно!… ',
        callname,
        ', пожалуйста, легче…',
      ]);
      await coffee.say_and_wait(
        'Я просто… услышала рёв трибун… и не сдержала шаг…',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' на самом деле не винишь — ',
        coffee.sex,
        ' слушает: массируя, чуть читаешь нотацию и прощаешь ',
        coffee.get_colored_name(),
        ' сегодняшнее.',
      ]);
      await coffee.say_and_wait([
        callname,
        '…Следующая цель — ',
        arim_kin,
        ', да.',
      ]);
      await era.printAndWait([
        'Массаж кончен, ',
        you.get_colored_name(),
        ' и ',
        coffee.get_colored_name(),
        ' собираете вещи в Трейсен, когда ',
        coffee.sex,
        ' говорит про декабрьский праздник через месяц——',
        arim_kin,
        '.',
      ]);
      await era.printAndWait([
        'Теперь думаешь: с ',
        coffee.get_colored_name(),
        ' почти три года. Были и радости, и ссоры, бывало опасно от странного, — и всё это делила с тобой ',
        coffee.sex,
        ', но ',
        you.get_colored_name(),
        ' ни разу не жалел(а), что подписал(а) договор — и что рядом ',
        coffee.sex,
        '.',
      ]);
      await era.printAndWait([
        'Этой последней ',
        arim_kin,
        ' проверьте, что накопилось за три года.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = 'Навстречу Arima Kinen';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (coffee, you, callname, arim_kin) => {
      era.printButton('「…Это конец.」', 1);
      await era.input();
      await coffee.say_and_wait('…Да, время пролетело…');
      await era.printAndWait([
        'В коридоре ',
        you.get_colored_name(),
        ' с ',
        coffee.get_colored_name(),
        ' говорит последнее перед ',
        arim_kin,
        '.',
      ]);
      await coffee.say_and_wait([callname, ', можно…']);
      await era.printAndWait([
        'Сказав, ',
        coffee.get_colored_name(),
        ' берёт руку ',
        you.get_colored_name(),
        ' и кладёт себе на грудь.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' сильный стук через мягкое в ладонь; в этот миг ',
        you.get_colored_name(),
        ' ясно чувствует, как жива и прекрасна ',
        coffee.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait('…Тепло… чуть спокойнее…');
      await coffee.say_and_wait([
        'После этой ',
        arim_kin,
        '… тоже будем вместе, ',
        callname,
        '…',
      ]);
      era.printButton('「Не разъедемся.」', 1);
      await era.input();
      await era.printAndWait([
        'Услышав да от ',
        you.get_colored_name(),
        ', ',
        coffee.get_colored_name(),
        ' отпускает руку ',
        you.get_colored_name(),
        ' и с улыбкой уходит из коридора.',
      ]);
      await era.printAndWait([
        'Неся три года воспоминаний с ',
        you.get_colored_name(),
        ', ',
        coffee.get_colored_name(),
        ' идёт к последним стартовым створкам.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = 'Небоскрёб';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await you.say_as_passer_by_and_wait('Комментатор', [
        coffee.get_colored_name(),
        '! Это ',
        coffee.get_colored_name(),
        '——! После финиша ',
        coffee.sex,
        ' всё ещё смотрит за горизонт!!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Куда же ',
        coffee.sex,
        ' в конце придёт?! До какой высоты вырастет?!',
      ]);
      await era.printAndWait([
        'После скачки ',
        coffee.get_colored_name(),
        ' не уходит сразу, стоит и смотрит вдаль трассы.',
      ]);
      await era.printAndWait([
        'Боясь, не случилось ли чего, ',
        you.get_colored_name(),
        ' подходит.',
      ]);
      era.printButton('「Э… Кафе?」', 1);
      await era.input();
      await coffee.say_and_wait(['…', callname, ', я поняла…']);
      await coffee.say_and_wait('Из-за тебя… друг ушёл…');
      await era.printAndWait('А…?');
      await era.printAndWait([
        'Разве ',
        you.get_colored_name(),
        ' из-за этого друг убежал?',
      ]);
      await era.printAndWait([
        'Пока ',
        you.get_colored_name(),
        ' собирается извиниться——',
      ]);
      await coffee.say_and_wait('Не это… я имела в виду.');
      await coffee.say_and_wait(
        'Я про то… из-за тебя… друг стал таким быстрым, что я не догоняю.',
      );
      await coffee.say_and_wait('Да… друг всё эволюционирует…');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' смотрит в лицо ',
        you.get_colored_name(),
        ' серьёзно.',
      ]);
      await coffee.say_and_wait(
        'Друг растёт вместе с моим идеалом, и скорость тоже…',
      );
      await coffee.say_and_wait(
        'Когда я сильнее… друг машет ещё дальше и говорит 『ты можешь быстрее』.',
      );
      await coffee.say_and_wait(
        'Если б я одна, может, давно догнала. Догнала бы… и мечта там бы остановилась. Но…',
      );
      await coffee.say_and_wait(
        'Сейчас я всё ещё… смотрю вверх. На небоскрёб без верха…',
      );
      await coffee.say_and_wait(
        'Ты… подстегнул(а) друга. Ты… подстегнул(а) меня.',
      );
      await coffee.say_and_wait(
        'Дал(а) мне высоту, до которой одной не дотянуться…',
      );
      await era.printAndWait([
        'Что такое друг — вы, кажется, наконец видите рассвет ответа.',
      ]);
      await era.printAndWait('Друг не добро и не зло, потому что——');
      await coffee.say_and_wait('Думаю, станет ещё быстрее… друг…');
      await coffee.say_and_wait('И мы ещё сможем гнаться за ним, да…');
      await coffee.say_and_wait(
        'Друг уже не только мой… он несёт волю нас двоих… как уговор перед скачкой: хочу гнаться с тобой до края земли.',
      );
      era.printButton('「М-м… до края земли.」', 1);
      await era.input();
      await era.printAndWait([
        'С этих пор ',
        you.get_colored_name(),
        ' как всегда вместе с ',
        coffee.get_colored_name(),
        ' будет гнаться за спиной друга.',
      ]);
      await era.printAndWait([
        'Вы рядом смотрите в небо и чувствуете, как драгоценна и безгранична эта общая цель…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = 'Тихий наследник';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' в первые три года Сияющей серии добилась огромного успеха.',
      ]);
      await era.printAndWait([
        'Кубки перед глазами как улица небоскрёбов. Но ',
        coffee.sex,
        ' на этом не остановилась——',
      ]);
      await coffee.say_and_wait(
        'Сегодня… тоже много гостей… так… что хотела обсудить…?',
      );
      await era.printAndWait([
        'Незаметно, из-за вида на трассе… ',
        coffee.get_colored_name(),
        ' вызвала восхищение многих ',
        coffee.uma_sex_title,
        '.',
      ]);
      await you.say_as_passer_by_and_wait(
        `Скаковая ${coffee.uma_sex_title} A`,
        'Э~ Кафе-сан… научи, как бежать по грязи, у меня всё не выходит…',
      );
      await coffee.say_and_wait('Грязь… так…');
      await coffee.say_and_wait('Думаю… лучше не давить слишком.');
      await coffee.say_and_wait('Как маятник… в песке…');
      await you.say_as_passer_by_and_wait(
        `Скаковая ${coffee.uma_sex_title} B`,
        'Теперь я! В следующий раз хочу попробовать бег лидера, есть секрет?!',
      );
      await coffee.say_and_wait('Лидер… я не сильна в этом…');
      await coffee.say_and_wait(
        'Но главное… настрой… куда ставишь центр… бег — это вид настроя…',
      );
      await coffee.say_and_wait('Так… чуть дала вам искру?');
      await you.say_as_passer_by_and_wait(
        `Скаковые ${coffee.uma_sex_title}, хором`,
        'Да! Большое спасибо!!',
      );
      await coffee.say_and_wait('Тогда… кофе перед уходом?');
      await you.say_as_passer_by_and_wait(
        `Скаковые ${coffee.uma_sex_title}, хором`,
        '…Да!',
      );
      await era.printAndWait([
        'На вопросы многих ',
        coffee.uma_sex_title,
        ', ',
        coffee.get_colored_name(),
        ' даёт всем живые советы и правда помогает ',
        coffee.couple_title,
        '.',
      ]);
      await era.printAndWait([
        'Этому даже тренер ',
        you.get_colored_name(),
        ' завидует.',
      ]);
      era.drawLine();
      await coffee.say_and_wait([
        'Ха, ха… ',
        callname,
        '…Можно ещё раз проследить мой бег?',
      ]);
      await coffee.say_and_wait(
        'Сегодня хочу новый бег. Чтобы… дать другим как образец…',
      );
      era.printButton('「Для младших?」', 1);
      await era.input();
      await coffee.say_and_wait(
        'Да… в последнее время думаю: догнать друга впереди важно…',
      );
      await coffee.say_and_wait([
        'Но и поддержать ',
        coffee.uma_sex_title,
        ' сзади тоже важно.',
      ]);
      await coffee.say_and_wait(
        'Я… не так быстра, как друг… но всё равно хочу тихо помогать…',
      );
      await coffee.say_and_wait([
        'Тихо раскрыть руки… чтобы однажды помогать всем ',
        coffee.uma_sex_title,
        '…',
      ]);
      await era.printAndWait('——Вжж.');
      await era.printAndWait([
        'Вдруг перед ',
        you.get_colored_name(),
        ' что-то проносится; никогда не видала, но в голове ',
        you.get_colored_name(),
        ' вспыхивают слова 「друг」.',
      ]);
      era.printButton('「…Кафе, где сейчас друг?」', 1);
      await era.input();
      await coffee.say_and_wait('Друг… вот же… э? Нет…');
      await era.printAndWait('——Вжж.');
      era.printButton(
        `「Кафе, ты… и есть та скаковая ${coffee.uma_sex_title}…」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        'Будто слышишь голос 「семени」. Голос семени ',
        coffee.uma_sex_title,
        ' кружит в ухе…',
      ]);
      await era.printAndWait([
        'Верно, ',
        coffee.sex,
        '——',
        coffee.get_colored_name(),
        ' и есть——',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Есть притча об одной ',
        coffee.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Говорят, у той ',
        coffee.uma_sex_title,
        ' почти предельная скорость и она очень похожа на ',
        coffee.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Может, ',
        coffee.get_colored_name(),
        ' ',
        coffee.sex,
        '… всё это время в одном сне.',
      ]);
      await era.printAndWait([
        'Сне, где та предельная ',
        coffee.uma_sex_title,
        ' явилась и ждала, что ',
        coffee.get_colored_name(),
        ' 「станешь такой же, как ',
        coffee.sex,
        ', а потом превзойдёшь: пусть позади останется ',
        coffee.sex,
        '」…',
      ]);
    };
    f.title = title;
    return f;
  })(),
  scared: (() => {
    const title = 'Боязнь темноты';
    /**
     * @author Mr.E.
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait([
        'Глубокая ночь, сплошная тьма, в кампусе будто плач, как будто ребёнок?',
      ]);
      era.println();
      era.printButton('Лучше скорее в общежитие…', 1);
      era.printButton('Надо идти, лишь бы ничего серьёзного…', 2);
      const ret = await era.input();
      if (ret === 1) {
        era.println();
        for (let i = 0; i < 5; ++i) {
          await era.delay(500);
          era.replaceText('…'.repeat(i + 1));
        }
        await era.printAndWait([
          you.get_colored_name(),
          ' снова ищешь выход, но кругом тьма кромешная, никак не выйти.',
        ]);
        era.println();
        const random_colors = Object.values(chara_colors).map((e) =>
          Array.isArray(e) ? e[0] : e,
        );
        const buffer = [];
        buffer.push({ content: '???', fontWeight: 'bold' }, '「');
        const content = 'Я ненавижу-ненавижу ';
        for (let i = 0; i < content.length; ++i) {
          buffer.push({
            content: content[i],
            color: get_random_entry(random_colors),
          });
        }
        buffer.push('тебя!」');
        await era.printAndWait(buffer);
        era.println();
        await you.say_and_wait(['А!']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' резко садишься и смотришь вокруг.',
        ]);
        era.println();
        await you.say_and_wait(['Это был… сон?']);
        era.println();
        await era.printAndWait([
          'Голова на коленях ',
          coffee.get_colored_name(),
          ', ',
          coffee.get_colored_name(),
          ' массирует ',
          you.get_colored_name(),
          '.',
        ]);
        era.println();
        await coffee.say_and_wait([
          'Ничего, ',
          callname,
          ', уже кончилось, тот ребёнок просто очень одинок.',
        ]);
        era.println();
        await era.printAndWait([
          'Чтобы не разбудить ',
          you.get_colored_name(),
          ', ',
          coffee.get_colored_name(),
          ' голос ещё мягче, ниже',
        ]);
        era.println();
        await coffee.say_and_wait([
          'Больше не бойся такого, я всегда буду рядом с Вами',
        ]);
      } else {
        await era.printAndWait([
          'Почему-то, пока ',
          you.get_colored_name(),
          ' бодро ищет ребёнка, скорость ',
          you.get_colored_name(),
          ' всё выше, светлая дверь общежития всё ближе к ',
          you.get_colored_name(),
          ', а плач в голове всё тише',
        ]);
        era.println();
        await you.say_and_wait(['Ну и день, скорее спать.']);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' так думаешь и открываешь дверь общежития.',
        ]);
        era.println();
        await you.say_and_wait(['Я что-то забыл(а)?']);
        era.println();
        await era.printAndWait([
          'С этим сомнением ',
          you.get_colored_name(),
          ' глубоко засыпает.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  palace: (() => {
    const title = 'Рай';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 曼城茶座对玩家的称呼
     */
    const f = async (coffee, you, callname) => {
      await coffee.print_and_wait([
        'Небо и земля как калейдоскоп, в ослепительном свете, огромные шестерни как сон, в золотом блеске…',
      ]);
      await coffee.print_and_wait('Здесь… мир сна?');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' оглядывается: вид не чужой ',
        coffee.sex,
        '.',
      ]);
      era.println();
      await coffee.print_and_wait([
        'Бесчисленные ночи ',
        coffee.sex,
        ' бродила в этом сонном мире: ',
        coffee.sex,
        ' видела кита, что бросается в радугу, дракона с крыльями как самоцветы, и того, кого день и ночь гонит и зовёт ',
        coffee.sex,
        ' 「другом」.',
      ]);
      await coffee.print_and_wait(['Что же сегодня ', coffee.sex, ' увидит?']);
      era.println();
      await coffee.print_and_wait(
        'Силуэт волной встаёт перед глазами: чёрные длинные волосы, белая вздыбленная звезда, знакомый победный костюм…',
      );
      era.println();
      await coffee.say_and_wait(['Ты…']);
      era.println();
      await coffee.print_and_wait([
        'Услышав вопрос, гость оборачивается, ',
        coffee.get_colored_name(),
        ' видит будто в зеркале такую же ',
        coffee.uma_sex_title,
        '.',
      ]);
      era.println();
      await coffee.print_and_wait('——Друг.');
      await coffee.print_and_wait([
        'Первым в голове ',
        coffee.get_colored_name(),
        ' встаёт это слово.',
      ]);
      era.println();
      await coffee.print_and_wait(['——Но ', coffee.sex, ' не друг.']);
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' уверена: это не друг и не странность, а такое же живое существо, человек из своего сна.',
      ]);
      era.println();
      await coffee.print_and_wait(
        'Другая Кафе「…Увидела такое же существо, как ты, и не удивлена?」',
      );
      era.println();
      await coffee.print_and_wait(['——Даже голос один в один.']);
      era.println();
      await coffee.say_and_wait(['…Я здесь встречала похожих на себя, а ты?']);
      era.println();
      await coffee.print_and_wait(
        'Другая Кафе「Может, профессия приучила к зеркалу… здесь только ты одна?」',
      );
      era.println();
      await coffee.say_and_wait([
        '…Кроме меня иногда бывает друг, но другого человека вижу впервые… поговорим чуть? Встреча тоже судьба…',
      ]);
      era.println();
      await coffee.print_and_wait([
        'Другая Кафе「Судьба… слово как раз для нас ',
        coffee.uma_sex_title,
        ', мы ',
        coffee.uma_sex_title,
        ' разве не те, кого ведёт судьба?」',
      ]);
      era.println();
      await coffee.print_and_wait([
        '——Как сказать… лицом одна в одну, а характер чуть другой.',
      ]);
      era.println();
      await coffee.print_and_wait(
        'Другая Кафе「…Судьба, какая морока… сама нас вяжет.」',
      );
      era.println();
      await coffee.say_and_wait(
        '…Да. Если вспомнить, меня тоже всё вязало… догнать друга, обогнать друга — может, тоже веление судьбы.',
      );
      era.println();
      await coffee.print_and_wait(
        'Другая Кафе「Твоя цель — превзойти недосягаемого друга?',
      );
      era.println();
      await coffee.say_and_wait(['…Странно, да…']);
      era.println();
      await coffee.print_and_wait(
        'Другая Кафе「Нет, мы похожи… я ищу 『рай』, землю, куда не дойти… слишком далеко: даже зная направление, взглядом не коснуться…」',
      );
      era.println();
      await coffee.say_and_wait(
        'М-м, я тоже… друг ведёт меня к счастью, прежняя я жаждала догнать… но чем больше гонюсь, тем быстрее он…',
      );
      era.println();
      await coffee.print_and_wait(
        'Другая Кафе「Прежняя ты… значит, сейчас ты уже догнала друга?」',
      );
      era.println();
      await coffee.say_and_wait('Нет… мне уже не нужно, чтобы вели…');
      era.println();
      await coffee.print_and_wait(['В мире сна свет гаснет, сон кончается?']);
      era.println();
      await coffee.print_and_wait([
        'Другая Кафе「…Похоже, здесь прощаемся. Прощай, эта ',
        coffee.get_colored_name(),
        ' ',
        coffee.adult_sex_title,
        '.」',
      ]);
      era.println();
      await coffee.say_and_wait([
        'И ты береги себя, та ',
        coffee.get_colored_name(),
        ' ',
        coffee.adult_sex_title,
        '…',
      ]);
      era.drawLine();
      era.printButton('Проснулась, Кафе, тебе снилось?', 1);
      await era.input();
      era.println();
      await coffee.print_and_wait([
        'Снова открыв глаза, перед ',
        coffee.get_colored_name(),
        ' самое знакомое лицо… то, что всегда рядом и значит счастье.',
      ]);
      await coffee.print_and_wait([
        '——Помнит… заснула, потому что засиделась с ',
        callname,
        ' допоздна?',
      ]);
      era.println();
      await coffee.say_and_wait([
        'Да… один, занятный сон… если будет время, расскажу ',
        callname,
        '…',
      ]);
      era.println();
      await coffee.print_and_wait(
        '——Я не пойду искать какой-то рай, потому что… я уже в самом счастливом месте.',
      );
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = 'Дождь и кофе';
    /**
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     */
    const f = async (coffee, you) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        ' ноготь так и не вылечили; после сбоя на тренировке школа решила списать ',
        coffee.get_colored_name(),
        ' со скачек ради здоровья… но кое-кто так не думает.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' несёшь кофейные зёрна для ',
        coffee.get_colored_name(),
        ' один(а) по ливню, сзади частые шаги, потом боль в пояснице как нож. ',
        you.get_colored_name(),
        ' валят на землю, сзади колют ',
        you.get_colored_name(),
        ' в спину, пока ',
        you.get_colored_name(),
        ' не замирает.',
      ]);
      await era.printAndWait([
        'Зёрна из пакета сыплются по земле, ',
        you.get_colored_name(),
        ' чует запах кофе, которого быть не должно…',
      ]);
      await era.printAndWait([
        'После смерти ещё увижу ',
        coffee.get_colored_name(),
        '? Если это ',
        coffee.sex,
        ', может…',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' сознание тонет во тьме.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
