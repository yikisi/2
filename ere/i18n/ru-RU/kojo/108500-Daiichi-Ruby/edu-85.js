/**
 * @file 第一红宝石 - 育成
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  before_begin_race: (() => {
    const title = 'Перед дебютной скачкой';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      const ret = [];
      await ruby.say_and_wait('Пойдёмте в комнату подготовки.');
      era.drawLine();
      await you.say_as_passer_by_and_wait('Депутат A', [
        'Давайте поприветствуем овацией ',
        ruby.get_colored_name(),
        '  на блистательной первой скачке!!',
      ]);
      await era.printAndWait('(Хлоп-хлоп-хлоп...!)');
      era.printButton('(...Э, и кто это?)', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' Недолго поискав в памяти, удалось сопоставить лицо внезапно явившегося мужчины средних лет с политиком, недавно стремительно набравшим вес.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Депутат A',
        'О, для меня честь. Лицезреть дебют того 『блистательного рода』.',
      );
      await ruby.say_and_wait('Благодарю Вас за поздравления.');
      await era.printAndWait([
        'Хотя ',
        ruby.get_colored_name(),
        '  с достоинством отвечала человеку депутатского вида, но сейчас, перед важной дебютной скачкой, ',
        you.get_colored_name(),
        '  хотел сразу же спровадить гостя...',
      ]);
      await you.say_as_passer_by_and_wait(
        'Депутат A',
        'Я также принёс цветы в знак поздравления; буду рад, если они придутся Вам по вкусу.',
      );
      await ruby.say_and_wait(
        'Признательна за внимание. Прошу, не извольте задерживаться.',
      );
      await you.say_as_passer_by_and_wait('Депутат A', 'Э, подождите--');
      await ruby.say_and_wait(
        'Прошу прощения, время истекло. Ваша поддержка меня глубоко тронула.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '  провожая взмахом руки, бросила на ',
        you.get_colored_name(),
        '  короткий взгляд.',
      ]);
      await ruby.say_and_wait(
        'В следующий раз извольте предупредить заранее и входить непременно через главный вход.',
      );
      await ruby.say_and_wait(
        'Если Вы, подобно моему тренеру, обладаете самоуверенностью, достаточной для оценки нашим родом.',
      );
      await you.say_as_passer_by_and_wait(
        'Депутат A',
        'Вот как. Прошу простить за бестактность, извините, что потревожил.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '  провожая мужчину взглядом, одновременно повернулась к ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_as_passer_by_and_wait('Журналист A', [
        'Дайити Руби ',
        ruby.adult_sex_title,
        ', тренер ',
        you.adult_sex_title,
        ', прошу простить. Я передавал персоналу, чтобы тому человеку отказали в визите.',
      ]);
      era.printButton('「Раз отказать не удалось, ничего не поделаешь.」', 1);
      era.printButton(
        '「Как и в слухах: личность с давящим присутствием.」',
        2,
      );
      ret.push(await era.input());
      await you.say_and_wait('Руби знает того человека?');
      await ruby.say_and_wait('Да.');
      await ruby.say_and_wait(
        'Боюсь, он хотел через меня похвастать связью с родом.',
      );
      await you.say_and_wait(
        'Поскольку вес он набрал лишь недавно, отчаянно ищет опору.',
        true,
      );
      await era.printAndWait([
        you.get_colored_name(),
        '  перевела взгляд на поздравительные подношения в стороне: помимо недавнего депутата, букеты прислали самые разные лица.',
      ]);
      await ruby.say_and_wait('Стоячая композиция у входа.');
      await ruby.say_and_wait(
        'У того предприятия ныне, похоже, трудности с финансированием. Надеются на помощь нашего рода.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '  затем взглянула в другую сторону.',
      ]);
      await ruby.say_and_wait(
        'Букет с лилиями в центре — дар человека, ныне стоящего в центре политики.',
      );
      await ruby.say_and_wait(
        'У экземпляра с письмом намерение очевидно. Целясь в меня, желают стать краеугольным камнем будущей силы своего ребёнка.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '  говорила тоном без малейшего волнения, словно о деле, к ней вовсе не относящемся, и сообщала ',
        you.get_colored_name(),
        '  происхождение каждого букета.',
      ]);
      era.printButton(
        '「Можно взять немного, чтобы украсить комнату тренера?」',
        1,
      );
      era.printButton('「Я, верно, несколько не к месту?」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          'Прошу, берите. Если не унесёте — скажите дворецкому.',
        );
      } else {
        await ruby.say_and_wait(
          'Ваш поздравительный дар я уже в полной мере приняла.',
        );
        await ruby.say_and_wait(
          'Первый выход этого тела, что Вы взрастили, извольте вобрать взором до конца.',
        );
      }
      await era.printAndWait('Время пришло, я отправляюсь на Скаковая трассу.');
      await you.say_and_wait('И всё же этот цветок — самый прекрасный.', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        ruby.get_colored_name(),
        '  ещё в подземном коридоре ощущали горячую атмосферу трибун.',
      ]);
      await era.printAndWait(
        'В голосах зрителей многие ждали появления 「блистательного рода」.',
      );
      await era.printAndWait([
        'Давление велико, однако ',
        ruby.get_colored_name(),
        '  являла такую безмятежность, что у ',
        you.get_colored_name(),
        '  напротив родилась лёгкая тревога.',
      ]);
      era.printButton(
        `「Всё-таки ${
          ruby.sex_code === 1 ? ' молодой господин' : 'барышня'
        }, к таким сценам уже привыкли, не так ли?」`,
        1,
      );
      era.printButton('「Вы в порядке?」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 2) {
        await ruby.say_and_wait(
          'Подготовка вполне достаточна, ни малейшего повода для тревоги нет.',
        );
        era.printButton('「Угу, ни капли.」', 1);
        era.printButton('「Тогда не расскажете мне?」', 2);
        ret.push(await era.input());
        if (ret.at(-1) === 2) {
          await ruby.say_and_wait('……');
          await ruby.say_and_wait('Право же, какой Вы.');
          await ruby.say_and_wait(
            'Я признательна за возлагаемые на меня ожидания, однако ощущаю и бремя.',
          );
          await ruby.say_and_wait(
            'Но даже при этом я ни за что не позволю им себя выбить из колеи.',
          );
          await era.printAndWait([
            'Так заявившая ',
            ruby.get_colored_name(),
            ',',
            you.get_colored_name(),
            ' и впрямь: ',
            ruby.sex,
            ' не выдала глазами ни тени колебания.',
          ]);
        }
      }
      await ruby.say_and_wait('Что ж, я отправляюсь.');
      era.printButton('「Счастливого пути.」', 1);
      await era.input();
      await era.printAndWait([
        'Глядя, как ',
        ruby.sex,
        ' в одиночку несёт на себе всё, в этот миг ',
        you.get_colored_name(),
        ' может сказать лишь это.',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'В ожидании часа';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} hoch_rev 报知杯皇冠赛（上色版名字）
     * @param {CharaTalk} oka_sho 樱花赏（上色版名字）
     * @param {CharaTalk} takz_kin 宝冢纪念（上色版名字）
     * @param {CharaTalk} arim_kin 有马纪念（上色版名字）
     */
    const f = async (ruby, you, hoch_rev, oka_sho, takz_kin, arim_kin) => {
      const ret = [];
      await ruby.say_and_wait('Я вернулась.');
      era.printButton('「Потрудилась.」', 1);
      era.printButton('Ого, белые колготки совсем в грязи.', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await ruby.say_and_wait('Благодарю.');
      } else {
        await ruby.say_and_wait('Сверлит взглядом--', true);
      }
      era.println();
      await era.printAndWait(
        'Как ни крути, дебютная скачка вышла такой, что имени Блистательного рода не посрамила.',
      );
      await ruby.say_and_wait('Скоро будет встреча; переоденусь и явлюсь.');
      era.printButton('「Ясно.」', 1);
      era.printButton('「Помочь?」', 2);
      ret.push(await era.input());
      era.drawLine();
      await you.say_as_passer_by_and_wait('Журналист A', [
        'Пусть рановато, но кто-то уже считает Triple Crown коронным путём ',
        ruby.actual_name_with_title,
        '.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Журналист B',
        'По сегодняшней скачке я тоже это почувствовал.',
      );
      await you.say_as_passer_by_and_wait(
        'Журналист B',
        'Тот же блеск, что у вашей матери, и даже сильнее.',
      );
      await you.say_as_passer_by_and_wait('Журналист C', [
        'Да, а после этого хотелось бы увидеть её на ',
        takz_kin,
        ' и ',
        arim_kin,
        ' и им подобных.',
      ]);
      await era.printAndWait('Восторг, ожидание...');
      await ruby.say_and_wait('Благодарю всех.');
      await ruby.say_and_wait(
        'Я непременно явлю вам то свершение, которого вы ждёте.',
      );
      await era.printAndWait([
        'И тут у ',
        you.get_colored_name(),
        ' в голове вспыхивает! Перед стартом дебюта--',
      ]);
      await ruby.used_to_say_and_wait(
        'За ожидания, что на меня возлагают, я весьма признательна, однако ощущаю и бремя.',
      );
      await era.printAndWait([
        'Для ',
        ruby.get_colored_name(),
        ' это обычно и само собой разумеется.',
      ]);
      await era.printAndWait('Но...');
      era.printButton(`「Я ведь тренер Дайити Руби.」`, 1);
      await era.input();
      await era.printAndWait([
        'Судя по тому, что ',
        ruby.get_colored_name(),
        ' по силам взять G1 среди юниоров, Triple Crown для вас лишь пересадка на пути, не так ли?',
      ]);
      await era.printAndWait([
        'Не желая сбивать журналистам пыл, ',
        you.get_colored_name(),
        ' решает об этом промолчать.',
      ]);
      era.drawLine({ content: 'После пресс-конференции' });
      await ruby.say_and_wait(
        'До конца года хочу сосредоточиться на тренировках.',
      );
      await era.printAndWait([
        'Как, став тренером ',
        ruby.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' уже знает.',
      ]);
      await ruby.say_and_wait(
        'Кампания Triple Crown -- то, что [Блистательный род] чтит превыше всего.',
      );
      await era.printAndWait(
        'Чтобы взойти там на вершину, накопленный труд тренировок необходим.',
      );
      await era.printAndWait(
        'Количество перейдёт в качество; разумеется, есть и путь копить опыт скачками.',
      );
      era.printButton(`「Дайити Руби.」`, 1);
      await era.input();
      await ruby.say_and_wait('Я понимаю, что вы хотите сказать.');
      await ruby.say_and_wait(
        'Разумеется, участие в скачках тоже будем рассматривать.',
      );
      await ruby.say_and_wait(
        'Но при нынешнем положении нельзя считать, что тело уже полностью вышло в силу.',
      );
      await ruby.say_and_wait('Потому прошу: курс -- с упором на тренировки.');
      await era.printAndWait('Похоже, обсуждать больше нечего.');
      await era.printAndWait([
        you.get_colored_name(),
        ' и так хочет, чтобы ',
        ruby.get_colored_name(),
        ' и дальше как следует закаляла тело; что сама того же хочет -- лучше и не бывает--',
      ]);
      era.printButton('「Хорошо.」', 1);
      await era.input();
      await ruby.say_and_wait('Глубочайшая благодарность.');
      await era.printAndWait([
        'Как проверку плодов тренировок, ',
        you.get_colored_name(),
        ' и ',
        ruby.get_colored_name(),
        ' выбирают ',
        hoch_rev,
        '——',
        oka_sho,
        ' как пробную -- первую graded-скачку после Нового года.',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_35: (() => {
    const title = 'Высший шедевр великолепия';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} mother 第一红宝石的母亲（剧情 NPC）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, mother, you, callname) => {
      await era.printAndWait([
        'В один из дней сплошных тренировок, почтительно прочитав письмо [Блистательного рода], ',
        you.get_colored_name(),
        ' как раз собирается вместе с ',
        ruby.get_colored_name(),
        ' посетить старую усадьбу дома Дайити.',
      ]);
      await era.printAndWait([
        'Чтобы ',
        ruby.sex,
        ' прониклась доверием, сперва нужно понять, что ',
        ruby.sex,
        ' ставит превыше всего.',
      ]);
      await era.printAndWait(['Однако до того, как вы тронулись...']);
      await ruby.say_and_wait('Прошу прощения, программу внезапно меняем.');
      await era.printAndWait([
        'Так и не узнав, в чём дело, ',
        you.get_colored_name(),
        ' оказывается в номере некоего отеля. ',
        you.get_colored_name(),
        ' переодевается в приготовленный в номере костюм.',
      ]);
      await ruby.say_and_wait(
        'Можно подготовить галстук ещё чуть великолепнее?',
      );
      await you.say_as_passer_by_and_wait('Дворецкий', [
        'Слушаю, ',
        ruby.sex_code === 1 ? ' молодой господин.' : 'барышня.',
        '.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' смерила взглядом с головы до ног ',
        you.get_colored_name(),
        ' и, закрыв глаза, отвернулась.',
      ]);
      era.printButton(`「Руби?」`, 1);
      await era.input();
      await ruby.say_and_wait('Прошу простить, я задержалась со словами.');
      await ruby.say_and_wait(
        'Матушка, услышав, что мой тренер едет в родовой дом, я нарочно поспешила.',
      );
      await you.say_and_wait('Ха-а?', true);
      era.drawLine();
      await era.printAndWait([
        'В скаковом мире ',
        ruby.uma_sex_title,
        ' нет незнающих: оставившая череду великолепных битв ',
        ruby.uma_sex_title,
        '……',
      ]);
      await mother.say_and_wait([
        'Приятно познакомиться, ',
        callname,
        '. Я для Дайити Руби — ',
        ruby.sex_code === 1 ? ' отец.' : 'мать.',
        '.',
      ]);
      await era.printAndWait([
        'Эта ',
        ruby.uma_sex_title,
        ' перед глазами: пугающая красота, а также ',
        ruby.sex,
        ' — облик, аура — точь-в-точь——',
      ]);
      era.printButton('(повзрослевшая Дайити Руби)', 1);
      await era.input();
      await mother.say_and_wait([
        'В аэропорту стало известно, что ',
        callname,
        ' едет, — за внезапность прошу простить.',
      ]);

      era.printButton('「Ничего подобного」', 1);
      await era.input();
      await mother.say_and_wait([
        'Всё это время вы опекали ',
        ruby.sex_code === 1 ? ' сына' : 'дочь',
        '.',
      ]);
      era.printButton(`「Это мне ${ruby.sex} столько заботы оказала.」`, 1);
      await era.input();
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'Батюшка' : 'Матушка',
        ', у вас ведь есть дела и дальше? Я пойду с вами.',
      ]);
      await mother.say_and_wait('М-м~ есть ли……');
      await you.say_and_wait('!', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' оказывается под взглядом матери ',
        ruby.get_colored_name(),
        ' — предел рода Великолепия: взор, что хочет насквозь разглядеть ',
        you.get_colored_name(),
        ' как человека.',
      ]);
      await era.printAndWait('В нём — напор, способный пронзить сердце.');
      await era.printAndWait([
        'В этот миг ',
        you.get_colored_name(),
        ' вспоминает тот день испытания.',
      ]);
      await ruby.used_to_say_and_wait(
        'Верно. Прошу не забывать эту осанку. Если у вас есть цель, на которую вы нацелились, надлежит держать себя сообразно.',
      );
      await ruby.say_and_wait(
        'Лишь так однажды вы станете тем, кем желаете стать.',
        true,
      );
      await era.printAndWait('И ещё — та улыбка.');
      await era.printAndWait([
        'Раз уж ',
        ruby.sex,
        ' вам доверена, то стоя плечом к плечу с ',
        ruby.sex,
        ' надлежит, конечно, расправить грудь и поднять голову.',
      ]);
      await mother.say_and_wait('————');
      await mother.say_and_wait('Вы знаете мой бег, не так ли.');
      era.printButton('Кивнуть', 1);
      await era.input();
      await mother.say_and_wait('Вот как.');
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'Батюшка' : 'Матушка',
        ', есть ещё дело……',
      ]);
      await mother.say_and_wait('Нет, уже всё.');
      await mother.say_and_wait([
        callname,
        ', дальше полагаюсь на ваше суждение.',
      ]);
      await mother.say_and_wait([
        'Прошу не забывать, что за дитя ',
        ruby.sex,
        '.',
      ]);
      await ruby.say_and_wait('————!', true);
      await mother.say_and_wait(
        'Бесконечно жаль, мне пора на вокзал — следующее дело уже ждёт.',
      );
      await mother.say_and_wait(
        'Историю нашего дома прошу не спеша узнать по тем книгам…… и из уст Руби.',
      );
      await mother.say_and_wait([
        callname,
        ', нашего ',
        ruby.sex_code === 1 ? ' мальчика' : 'девочку',
        ' прошу вас взять на попечение.',
      ]);
      await era.printAndWait([
        'Проводив ',
        ruby.get_colored_name(),
        ' — её ',
        ruby.sex_code === 1 ? ' отец' : 'мать',
        ',',
        you.get_colored_name(),
        ' просмотрев множество книг из собрания, вернулся в академию Трасен.',
      ]);
      era.printButton(
        `「У тебя ${ruby.sex_code === 1 ? ' отец' : 'мать'} весьма впечатляет.」`,
        1,
      );
      era.printButton(
        `「У Руби ${ruby.sex_code === 1 ? ' папа' : 'мама'} ещё круче самой Руби.」`,
        2,
      );
      const ret = await era.input();
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'Батюшка' : 'Матушка',
        ' —『кристалл』великолепного рода; и поныне — его символ на виду.',
      ]);
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'Батюшка' : 'Матушка',
        ruby.sex,
        ', к вам...',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('Нет, ничего.');
      await ruby.say_and_wait([
        'Вы только что спросили: 『в ваших глазах ',
        ruby.sex_code === 1 ? ' отец' : 'мать',
        ' — что за ',
        ruby.uma_sex_title,
        ' 』, верно?',
      ]);
      await ruby.say_and_wait('Ответ — самое великолепное.');
      await ruby.say_and_wait(
        'Кто видел записи скачек действующих лет, всякий так подумает.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' — глаза на миг вспыхнули светом.',
      ]);
      await era.printAndWait([
        'Кстати, ',
        ruby.sex,
        ' едва узнала, что предстоит встреча с матерью, сразу велела ',
        you.get_colored_name(),
        ' переодеться.',
      ]);
      era.printButton(
        `「Ты так чтишь ${ruby.sex_code === 1 ? ' отца' : 'мать'}.」`,
        1,
      );
      await era.input();
      await ruby.say_and_wait([
        'Да. Самый профессиональный и блистательный образец на моём пути — ',
        ruby.sex,
        '.',
      ]);
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'Батюшки' : 'Матушки',
        ' великий путь — то, чему я должна следовать ради грядущего процветания рода.',
      ]);
      await era.printAndWait([
        'Почему избран маршрут Triple Crown... ',
        you.get_colored_name(),
        ' уловил у ',
        ruby.get_colored_name(),
        ' намерение, что выходит за историю рода и вовсе не просто.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = 'Поэтому нельзя ослаблять хватку.';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait('Тренировочная площадка');
      await ruby.say_and_wait([callname, ', начнём сызнова.']);
      await era.printAndWait([
        you.get_colored_name(),
        ' от ',
        ruby.get_colored_name(),
        ' узнал: ',
        ruby.sex,
        ' рождена с проблемой ног.',
      ]);
      await era.printAndWait(
        'Точнее: [форма ног с изъяном; пока для скачек помехи нет.]',
      );
      await era.printAndWait([
        'Поэтому поначалу ',
        you.get_colored_name(),
        ' особо не ставили в известность.',
      ]);
      await era.printAndWait([
        'Однако когда ',
        you.get_colored_name(),
        ' спросил — ничего не скрыла.',
      ]);
      await era.printAndWait([
        'При беге это место несёт большую нагрузку, и ',
        you.get_colored_name(),
        ' понял: так просто это не решить.',
      ]);
      era.printButton('「Правда, всё в порядке?」', 1);
      await era.input();
      await ruby.say_and_wait('Разумеется, проблем нет. Да и родители...');
      await ruby.say_and_wait(
        'Родители, и все вокруг, оказали немалую помощь.',
      );
      await era.printAndWait([
        'На миг у ',
        ruby.get_colored_name(),
        ' лицо стало весьма... измождённым.',
      ]);
      era.printButton('「От рождения?」', 1);
      await era.input();
      await ruby.say_and_wait(
        'Да. Когда я родилась, врач объявил, что бегать, возможно, уже не смогу.',
      );
      await ruby.say_and_wait(
        'Но родители ради меня исчерпали все средства и самоотверженно встали к этой беде лицом.',
      );
      era.printButton('「Так вот откуда такая жажда.」', 1);
      await era.input();
      await ruby.say_and_wait('Иначе нельзя, правда?');
      await ruby.say_and_wait([
        '— Ибо как скаковая ',
        ruby.uma_sex_title,
        ' 『великолепного рода』 я родилась и живу этой жизнью.',
      ]);
      await ruby.say_and_wait(
        'В итоге научилась бегать в постановке, оптимизирующей работу ног; и теперь это уже иное.',
      );
      await ruby.say_and_wait(
        'Врач тоже говорит: нынешнее тело выдержит яростные скачки.',
      );
      await ruby.say_and_wait('Если вдруг, один на десять тысяч...');
      era.printButton('「Сейчас сначала сосредоточимся на тренировке.」', 1);
      era.printButton('「Можно взглянуть на твои ноги?」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait(
          'Мм. Пока сама не уверюсь, что проблем нет, сначала закалю тело.',
        );
        await ruby.say_and_wait('Миссия, что надлежит исполнить, уже решена.');
        await ruby.say_and_wait(
          'Я, кажется, слишком разговорилась. Пойду на беговую дорожку.',
        );
        await era.printAndWait('Тренировка благополучно закончилась.');
      } else {
        await ruby.say_and_wait('Мотивы нечисты — похоже, всё же нет.');
        await ruby.say_and_wait(
          'Вы понимаете, что значит делать такое на людях?',
        );
        era.printButton('Присядьте.', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('По крайней мере, к тому стулу…');
        await era.printAndWait([
          you.get_colored_name(),
          ' тщательно осматривает ступни ',
          ruby.get_colored_name(),
          ' — каждый сантиметр.',
        ]);
        await era.printAndWait([
          'Словно не своей волей, ',
          you.get_colored_name(),
          ' оттягивает чулок в одном месте и с 「щёлк」 отпускает.',
        ]);
        await era.printAndWait([
          'И в страхе, и в стыде ',
          ruby.sex_code === 1 ? ' юный господин' : 'барышня',
          ' закусывает нижнюю губу и сверлит взглядом ',
          you.get_colored_name(),
          ', как раз когда ',
          you.get_colored_name(),
          ' уже готовится к разносу.',
        ]);
        await ruby.say_and_wait('Помогите мне надеть туфли.');
        await era.printAndWait([
          'После этого тренировку благополучно довели до конца.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_47_1: (() => {
    const title = 'Новогоднее паломничество';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait('Поздравляю вас с Новым годом.');
      era.printButton('「С Новым годом.」', 1);
      await era.input();
      await ruby.say_and_wait(
        'Благодаря вам, тренер, я благополучно встретила новый год.',
      );
      await ruby.say_and_wait(
        'Дальше — оставить достойный результат и в тех скачках, где матушка побеждала, и в тех, где победы не было…',
      );
      await you.say_and_wait('Выходит, смыть обиду матери.', true);
      await ruby.say_and_wait(
        'Теперь можно твёрдо сказать: тревога за ноги полностью снята.',
      );
      await ruby.say_and_wait(
        'Я хочу выйти на пробный забег к Oka Sho и доказать это вам.',
      );
      await era.printAndWait(
        'Задуманное опередили… впрочем, совпадать с целью подопечной — хорошо.',
      );
      await ruby.say_and_wait('В этом году тоже прошу любить и жаловать.');
      era.printButton('「Оставьте это мне.」', 1);
      await era.input();
      await ruby.say_and_wait('Нм.');
      era.printButton(
        `「Впрочем, Руби ведь ещё пойдёт поздороваться с остальными?」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        'Нетрудно представить: потомку рода, чьё имя гремит в финансовых кругах, в начале года будет некогда.',
      );
      await ruby.say_and_wait('Нет.');
      await ruby.say_and_wait('С членами рода уже всё улажено.');
      await ruby.say_and_wait(
        'Если действительно понадоблюсь, со мной свяжутся.',
      );
      await era.printAndWait('То есть сейчас я совершенно свободна.');
      await ruby.say_and_wait(
        'Тогда я собираюсь заняться самостоятельной тренировкой.',
      );
      await ruby.say_and_wait('Раз поздравления сказаны, я пойду.');
      await era.printAndWait('Подождите—');
      await era.printAndWait([
        'В начале года всё же хочется, чтобы подопечная немного отдохнула, — ',
        you.get_colored_name(),
        ' думает вот о чём…',
      ]);
      era.printButton('「Первая кисть Нового года.» (Скорость+20)', 1);
      era.printButton('「Новогодний ужин уже был?» (Выносливость+20)', 2);
      era.printButton('「Время вечеринки!» (очки навыков+20)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            'Вдруг заговорить о первой кисти — потому что ',
            you.get_colored_name(),
            ' довольно любит обычай некой древней восточной страны клеить весенние парные надписи.',
          ]);
          await ruby.say_and_wait('Неожиданно…');
          await era.printAndWait([
            ruby.get_colored_name(),
            ' пишет изящно и чисто — можно сказать, красиво.',
          ]);
          await era.printAndWait([
            'Но рядом с рукой ',
            you.get_colored_name(),
            ', прошедшей школу государственного каллиграфа страны на миллиард душ, всё же бледнеет.',
          ]);
          await ruby.say_and_wait([callname, ', прошу наставить меня.']);
          await era.printAndWait([
            ruby.uma_sex_title,
            'Врождённый дух упрямства и правда виден во всём.',
          ]);
          await era.printAndWait([
            'Под этим впечатлением ',
            you.get_colored_name(),
            ', решив начать с поправки хвата кисти, сзади обхватывает ',
            ruby.get_colored_name(),
            ' за маленькие руки.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' и ',
            ruby.get_colored_name(),
            ' проводят приятный полдень, полный культурного обмена.',
          ]);
          break;
        case 2:
          await ruby.say_and_wait('……');
          await ruby.say_and_wait(
            'Вечером глава рода даёт пир в усадьбе дома Дайити.',
          );
          await ruby.say_and_wait(
            'Если вы соизволите присутствовать, лучше и быть не может.',
          );
          await ruby.say_and_wait(
            'Прошу не тревожиться: это внутренний ужин Рода великолепия.',
          );
          await ruby.say_and_wait('Пойдёмте поздороваться с матушкой?');
          await era.printAndWait([
            'В отличие от ожиданий ',
            you.get_colored_name(),
            ', банкет вышел лёгким и приятным.',
          ]);
          break;
        case 3:
          await ruby.say_and_wait('Пф, хе-хе.');
          await ruby.say_and_wait('И вдвоём тоже будем устраивать вечеринку?');
          await era.printAndWait([
            'Почему-то ',
            ruby.get_colored_name(),
            ' смеётся очень радостно.',
          ]);
          await ruby.say_and_wait(
            'Хорошо. Жаль только, что в отличие от 『Солнца』, я в этом не сведуща.',
          );
          await ruby.say_and_wait(
            'Потрудитесь тогда дать мне этим насладиться?',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' и ',
            ruby.get_colored_name(),
            ' проводят приятный день.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  hoch_rev_win: (() => {
    const title = 'Ныне час великолепия';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} oka_sho 樱花赏（上色版名字）
     */
    const f = async (ruby, callname, oka_sho) => {
      await ruby.say_and_wait('Наконец-то...');
      await ruby.say_and_wait('……');
      era.drawLine({ content: 'В комнате отдыха' });
      await ruby.say_and_wait('Прошу вас дать оценку сегодняшней скачке.');
      era.printButton('「Для начала — со старта из касс.」', 1);
      await era.input();
      await era.printAndWait('Разбор шёл какое-то время...');
      await ruby.say_and_wait([callname, ', на этом можно остановиться?']);
      await ruby.say_and_wait(
        'Тогда скорректируем план тренировок по итогам разбора.',
      );
      await era.printAndWait([
        'Цель — ',
        oka_sho,
        ',',
        ruby.get_colored_name(),
        ', которую ',
        ruby.sex_code === 1 ? ' отец' : 'мать',
        ' тоже выиграла: первая скачка Тройной тиары.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oka_sho_win: (() => {
    const title = 'Ожидания крепнут';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {PrintedSpan} yush_him 日本橡树大赛（上色版名字）
     */
    const f = async (ruby, yush_him) => {
      await era.printAndWait([
        'После скачки ',
        ruby.get_colored_name(),
        ', хоть и одержала победу огромного значения, лицо всё так же оставалось безмятежным.',
      ]);
      era.printButton('「Поздравляю.」', 1);
      await era.input();
      await ruby.say_and_wait('Спасибо, но до цели ещё далеко.');
      await era.printAndWait([
        yush_him,
        ', вторая скачка пути Тройной тиары. ',
        ruby.get_colored_name(),
        ' — её мать тоже потерпела здесь поражение.',
      ]);
      await era.printAndWait([
        'На дистанциях от средней и длиннее у ',
        ruby.get_colored_name(),
        ' в силе ещё остаётся неизвестное.',
      ]);
      await ruby.say_and_wait('Моя проблема, быть может...');
      await ruby.say_and_wait(
        'Нет. Даже если проблема есть, достаточно быстро её решить.',
      );
      await ruby.say_and_wait('Прошу вас наставлять меня основательно.');
      await era.printAndWait([
        'Так, ради следующей целевой скачки ',
        yush_him,
        ', снова начались дни тренировок.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_19: (() => {
    const title = 'Лишь взгляд вперёд';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} yush_him 日本橡树大赛（上色版名字）
     */
    const f = async (ruby, you, callname, yush_him) => {
      await era.printAndWait([
        'К 2400 метрам ',
        yush_him,
        ',',
        ruby.get_colored_name(),
        ' проходит тренировку на выносливость.',
      ]);
      era.printButton('「Как самочувствие?」', 1);
      await era.input();
      await ruby.say_and_wait('Проблем нет.');
      era.printButton('「Правда всё в порядке?」', 1);
      await era.input();
      await ruby.say_and_wait('М.');
      await ruby.say_and_wait('Попросту нехватка сил.');
      await ruby.say_and_wait('Прошу чаще предлагать тренировки на силу.');
      await ruby.say_and_wait('Тогда я пробегу ещё круг.');
      await you.say_and_wait('Нехватка выносливости...', true);
      await era.printAndWait('Да, и это тоже причина.');
      await era.printAndWait([
        'Однако больше похоже, что ',
        ruby.sex,
        ' упирается в иное, с чем ничего не поделать, — а именно—',
      ]);
      era.printButton('Манера бега.', 1);
      era.printButton('Пригодность.', 2);
      await era.input();
      await era.printAndWait([
        'По мнению ',
        you.get_colored_name(),
        ', 「пригодность」 сама по себе не бывает ни хорошей, ни плохой.',
      ]);
      await era.printAndWait(
        '...Просто в зависимости от выбранного курса она становится барьером.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' целится во многие средние и длинные скачки. Ступив на этот путь, ',
        ruby.sex,
        ' неминуемо встретит множество преград.',
      ]);
      await era.printAndWait(
        'На этом этапе ещё рано судить, остаётся лишь снова и снова тренировать выносливость.',
      );
      await era.printAndWait(
        'Если будут плоды, на их основе составим новый план тренировок.',
      );
      era.drawLine();
      await ruby.print_and_wait('И вот уже после уроков.');
      await ruby.say_and_wait(
        '2400 метров для меня, пожалуй, суровы. Это вне моей пригодности.',
        true,
      );
      await ruby.say_and_wait(
        [callname, ' так и думает. Я тоже это чувствую.'],
        true,
      );
      await ruby.say_and_wait('Не смирюсь...');
      await ruby.say_and_wait(
        [
          'Обязательно брошу вызов ',
          yush_him,
          ', и возьму победу, которой не добилась мать.',
        ],
        true,
      );
      await ruby.say_and_wait(
        'Существование рода складывается именно такими шагами.',
        true,
      );
      await you.say_as_passer_by_and_wait('Дворецкий', [
        ruby.sex_code === 1 ? 'молодой господин' : 'барышня',
        ', я за вами.',
      ]);
      await ruby.say_and_wait('Простите, мне нужно изменить планы.');
      await ruby.say_and_wait(
        'Мне нужна самостоятельная тренировка, остальное оставляю тебе.',
      );
      await you.say_as_passer_by_and_wait(
        'Дворецкий',
        'Понял. Не беспокойтесь о наших делах, сосредоточьтесь на тренировке.',
      );
      await ruby.say_and_wait('М.');
      await ruby.say_and_wait('Надо идти вперёд.');
    };
    f.title = title;
    return f;
  })(),
  yush_him_win: (() => {
    const title = 'Голубиная кровь';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait('Ощущение диссонанса.');
      await ruby.say_and_wait(
        'Никакой тактики, даже момент ловить не пришлось — одной физической мощью вдруг...',
      );
      await ruby.say_and_wait('Мной завладел кто-то, кроме меня самой?');
      await ruby.say_and_wait([callname, ', ты всё-таки...']);
      era.printButton('(Значит, заметила.)', 1);
      era.printButton('「Неплохо, да?」', 2);
      const ret = await era.input();
      await ruby.say_and_wait('Что ты сделал(а) с моим телом?');
      await ruby.say_and_wait('……');
      await ruby.say_and_wait(
        'Нет, это я сказала лишнее. Впредь прошу — поступай, как пожелаешь.',
      );
      await ruby.say_and_wait(
        'Ради рода я в любой миг могу преподнести тебе всё, что есть у меня.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  yush_him_lose: (() => {
    const title = 'Листья дуба широки';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} rose_sta 玫瑰锦标（上色版名字）
     * @param {PrintedSpan} shuk_sho 秋华赏（上色版名字）
     */
    const f = async (ruby, you, callname, rose_sta, shuk_sho) => {
      await ruby.say_and_wait('Так... всё же я...', true);
      await ruby.say_and_wait(
        'Мне очень жаль, что вы увидели меня такой несостоятельной.',
      );
      await ruby.say_and_wait([
        callname,
        ' тоже ради сегодняшнего дня много помогал(а) помимо тренировок.',
      ]);
      await ruby.say_and_wait(
        'Что не смогла отплатить за ваши труды, мне очень стыдно.',
      );
      era.printButton('「Мне тоже жаль...」', 1);
      era.printButton('「На самом деле есть и другой способ отплатить.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('...Э?');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' своим внешним спокойствием, что не выдаёт души, заставляет ',
          you.get_colored_name(),
          ' остро жалеть.',
        ]);
        era.printButton('「В следующий раз... я тебе...」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('...Очень... благодарю.');
        await ruby.say_and_wait([
          'Следующая цель — ',
          shuk_sho,
          ', а до того у меня есть предложение.',
        ]);
        await ruby.say_and_wait(['Хочу бежать её прелюдию — ', rose_sta, '.']);
        await ruby.say_and_wait(
          'Летние сборы тоже тяжелы, но ради главной скачки нужно держать лучшую форму.',
        );
        await era.printAndWait(
          'И правда: промежуточная скачка лучше подведёт форму к большому заезду.',
        );
        era.printButton('「Понял(а).」', 1);
        await era.input();
        await ruby.say_and_wait('Прошу вас.');
        era.printButton('「Тогда жду тебя у входа.」', 1);
        await era.input();
        await ruby.say_and_wait('Да.');
      } else {
        await ruby.say_and_wait(
          'Такие шутки я не желаю слышать во второй раз.',
        );
        era.printButton('「Тебе понравилось бежать?」', 1);
        await era.input();
        await ruby.say_and_wait('Э?');
        era.printButton('「Попробуй получать удовольствие от скачки.」', 1);
        await era.input();
        era.printButton('「Как дать тебе победу — это уже моя забота.」', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' с опущенной головой о чём-то думает, ',
          you.get_colored_name(),
          ' уходит первым(ой).',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = 'Летние сборы (классический год)';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} yush_him 日本橡树大赛（上色版名字）
     * @param {PrintedSpan} shuk_sho 秋华赏（上色版名字）
     */
    const f = async (ruby, you, yush_him, shuk_sho) => {
      await era.printAndWait([
        'На лёгкой трусце ',
        ruby.get_colored_name(),
        ' упала.',
      ]);
      era.printButton('「Ты в порядке!?」', 1);
      await era.input();
      await ruby.say_and_wait('Просто споткнулась о песок, всё в порядке.');
      era.printButton('「Не ушиблась?」', 1);
      await era.input();
      await ruby.say_and_wait('Ничуть.');
      await era.printAndWait('Вроде и правда ничего, но...');
      await era.printAndWait([
        'С начала летних сборов ',
        ruby.get_colored_name(),
        ' день за днём гнет себя.',
      ]);
      await era.printAndWait([
        'Лишь чтобы потом на ',
        shuk_sho,
        ' показать результат.',
      ]);
      await era.printAndWait([
        'Раз уж добрались до моря, ',
        you.get_colored_name(),
        ' думает...',
      ]);
      era.printButton('「Ловить парусников」（сила+10）', 1);
      era.printButton('「Тогда потренируем выносливость」（воля+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('Понять не могу.');
        era.printButton('「Это здешний вид. Великолепный — тебе к лицу.」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          'Выйти из кокона бабочкой... возможно, я этого недостойна.',
        );
        await era.printAndWait([
          'Пока ',
          ruby.get_colored_name(),
          ' ловит парусников, зонтик вместо неё держит ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'В тени улыбнувшаяся парусникам ',
          ruby.teen_sex_title,
          ', наконец чуть стала похожа на то, какой в эти годы бывает ',
          ruby.child_sex_title,
          '.',
        ]);
      } else {
        await ruby.say_and_wait([
          'Это потому, что на ',
          yush_him,
          ' я так несостоятельно бежала, да?',
        ]);
        await era.printAndWait([
          'И правда: ',
          ruby.get_colored_name(),
          ' к средней дистанции приспособлена куда слабее, чем к спринту.',
        ]);
        await era.printAndWait([
          'Скорость — преимущество, и ',
          ruby.sex,
          ' всего уязвимее именно ею.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' продолжает держать упор на выносливость и заставляет ',
          ruby.get_colored_name(),
          ' тяжко тренироваться.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = 'Озарение';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([callname, '.']);
      await ruby.say_and_wait('Ты в моей скорости увидел(а) сияние?');
      era.printButton('「Да.」', 1);
      await era.input();
      await ruby.say_and_wait(
        'Если умело распорядиться этим оружием, и я смогу приблизиться…',
      );
      await ruby.say_and_wait(
        'Если этими ногами удастся явить самый ослепительный блеск…',
      );
      await ruby.say_and_wait(
        'Какой бы путь ни избрали, эта кровь течёт в этом теле.',
      );
      await ruby.say_and_wait(
        'Верила, что лишь королевский путь способен расцвести блеском, — я и сама была не более того.',
      );
      await ruby.say_and_wait(
        'Но вы можете дать мне исполнить миссию вне того пути.',
      );
      await ruby.say_and_wait('Наиболее подобающим мне образом.');
      await ruby.say_and_wait('В этом месяце вы изрядно потрудились.');
      await ruby.say_and_wait(
        'Я вполне сознаю: без вас я не смогу идти вперёд.',
      );
      await ruby.say_and_wait('Сперва должно донести решение до дома.');
      await ruby.say_and_wait('А после — прошу и впредь наставлять меня.');
    };
    f.title = title;
    return f;
  })(),
  rose_sta_win: (() => {
    const title = 'Блистательная смена участи';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} shuk_sho 秋华赏（上色版名字）
     * @param {PrintedSpan} takm_kin 高松宫纪念（上色版名字）
     * @param {PrintedSpan} eliz_cup 伊丽莎白二世女皇杯（上色版名字）
     */
    const f = async (ruby, you, callname, shuk_sho, takm_kin, eliz_cup) => {
      const ret = [];
      await ruby.say_and_wait('——Нм?');
      await ruby.say_and_wait(
        'Правая нога… на миг словно ощущение неладного…',
        true,
      );
      await ruby.say_and_wait(
        'Немного понаблюдаем. Если всё же будет беспокоить, тогда…',
        true,
      );
      await era.printAndWait([
        '——Несколько дней спустя ',
        you.get_colored_name(),
        ' получила от ',
        ruby.get_colored_name(),
        ' доклад: 「вокруг ноги лёгкое ощущение неладного」…',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' сразу отвела ',
        ruby.get_colored_name(),
        ' к своему постоянному врачу.',
      ]);
      await you.say_as_passer_by_and_wait('Врач', [
        ruby.get_colored_name(),
        ': правая нога — острое гнойное заболевание.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Врач',
        'То есть так называемый [целлюлит].',
      );
      await you.say_and_wait('!', true);
      await you.say_as_passer_by_and_wait(
        'Врач',
        'Прошу не тревожиться: случай не тяжёлый.',
      );
      await you.say_as_passer_by_and_wait(
        'Врач',
        'Благо что обратились ещё на стадии ощущения неладного.',
      );
      await you.say_as_passer_by_and_wait('Врач', [
        'К вашей следующей цели ',
        shuk_sho,
        ' уже заживёт.',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait(
        'Решено: намеченные до конца года целевые скачки пока снимаются.',
      );
      await ruby.say_and_wait(
        'Мои ноги с рождения несут изъян. Ничего не поделаешь.',
      );
      await ruby.say_and_wait(
        'К проблемам с ногами, какой бы ни была степень, должно относиться с осторожностью.',
      );
      await ruby.say_and_wait('……');
      await ruby.say_and_wait([callname, '.']);
      await ruby.say_and_wait(
        'Выходить на скачку или нет — все суждения оставляю вам.',
      );
      era.printButton('「Угу.」', 1);
      era.printButton('「Оставь это мне.」', 2);
      ret.push(await era.input());
      await you.say_as_passer_by_and_wait(
        'Врач',
        'Однако так ли уж это можно?',
      );
      await you.say_as_passer_by_and_wait('Врач', [
        shuk_sho,
        ' и ',
        eliz_cup,
        ', это ваша мечта, не так ли?',
      ]);
      await ruby.say_and_wait('…Мечта.');
      await ruby.say_and_wait('Благодарю за заботу, однако…');
      await ruby.say_and_wait('Однако у меня уже есть новая миссия.');
      await you.say_as_passer_by_and_wait(
        'Дворецкий',
        'Прошу прощения, что тревожу посреди беседы.',
      );
      await you.say_as_passer_by_and_wait('Дворецкий', [
        ruby.sex_code === 1 ? 'молодой господин' : 'барышня',
        ', сразу устроить вам встречу?',
      ]);
      await ruby.say_and_wait('Нм, так и поступи.');
      await ruby.say_and_wait(
        'Хоть и раньше срока… но вместе с переменой целевой скачки объявим сегодня.',
      );
      era.drawLine({ content: 'На пресс-конференции' });
      await you.say_as_passer_by_and_wait('Журналист A', [
        'Тренер ',
        you.adult_sex_title,
        ', всё это верно?',
      ]);
      era.printButton('Да, всё верно.', 1);
      await era.input();
      await ruby.say_and_wait(
        'И ещё одно, о чём доложу всем. О следующей целевой скачке.',
      );
      await ruby.say_and_wait(['На весенний ', takm_kin, ' решено выступить.']);
      await ruby.say_and_wait(
        'С сего дня я, Дайити Руби, объявляю о выходе на спринтерские дистанции.',
      );
      await you.say_and_wait('Эээээ?', true);
      era.drawLine();
      await era.printAndWait(
        'Короткая пресс-встреча благополучно завершилась——',
      );
      await ruby.say_and_wait('Сегодня вы хорошо потрудились.');
      era.printButton('「Сегодня и правда было нелегко.」', 1);
      era.printButton('「За такие труды мне будет награда?」', 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await ruby.say_and_wait(
          'Не стоит вашего беспокойства: всё в пределах замысла.',
        );
        await ruby.say_and_wait(
          'Будущий год, вероятно, потребует усердия уже в иной форме.',
        );
        await ruby.say_and_wait([
          callname,
          ', и в будущем году прошу продолжать совершенствоваться.',
        ]);
        await ruby.say_and_wait('Тогда…');
        await ruby.say_and_wait('……');
        era.printButton(`「Руби?」`, 1);
        await era.input();
        await ruby.say_and_wait(
          'Не только в следующем году — и впредь прошу вашей опеки.',
        );
      } else {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('Прошу, закройте глаза.');
        await ruby.say_and_wait('Чмок.', true);
        await era.printAndWait([
          'На самом деле ',
          you.get_colored_name(),
          ' всего лишь случайно закрыл(а) глаза и хотел(а) спросить ',
          ruby.get_colored_name(),
          ', что она собирается делать, — и всё.',
        ]);
        await era.printAndWait([
          'Влажный звук у щеки заставил ',
          you.get_colored_name(),
          ' онеметь: какое-то время даже глаз не открывал(а).',
        ]);
        await era.printAndWait([
          'Когда то душистое, мягкое, влажно-тягучее касание всласть распробовали, ',
          ruby.get_colored_name(),
          ' уже ушла.',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = 'Новогоднее посещение святилища';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} helios 大拓太阳神
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, helios, you, callname) => {
      const ret = [];
      await ruby.say_and_wait('Оказаться в центре внимания — не проблема.');
      await era.printAndWait([
        'В первые дни года ',
        ruby.get_colored_name(),
        ' уже пришла в кабинет тренера к ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' полагал(а), что ',
        ruby.sex,
        ' будет позанятее, но на сердце всё равно тепло.',
      ]);
      await era.printAndWait([
        'После приветствия ',
        ruby.sex,
        ' говорила, как и ожидалось, всё так же непреклонно.',
      ]);
      await ruby.say_and_wait(
        'За это время нам довольно делать то, что должно.',
      );
      await ruby.say_and_wait([callname, ', как вы считаете?']);
      era.printButton('「Овладеть скоростью… пожалуй.」', 1);
      await era.input();
      await era.printAndWait([
        'Сама ',
        ruby.sex,
        ' с рождения обласкана скоростью.',
      ]);
      await era.printAndWait([
        ruby.sex,
        ' после закала ног непременно воссияет и станет самой яркой звездой рода.',
      ]);
      await ruby.say_and_wait('Да. Я больше не обману ваших ожиданий.');
      await era.printAndWait([
        'Снова с самого начала года струна натянута, ',
        you.get_colored_name(),
        ' захотел(а) как-то дать ',
        ruby.get_colored_name(),
        ' чуть расслабиться…',
      ]);
      era.printButton('「Искать новые новогодние блюда」(Выносливость+20)', 1);
      era.printButton(
        '「Помолиться о росте в ближнем святилище」(все параметры+8)',
        2,
      );
      era.printButton('「Входим в party time! Lv2!」(очки навыков+35)', 3);
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await ruby.say_and_wait('Ха-а…');
          await ruby.say_and_wait(
            'Хоть я себя и готовила, смысл и впрямь неясен.',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' и ',
            ruby.get_colored_name(),
            ' провели насыщенный день в кабинете тренера, пробуя всякую стряпню.',
          ]);
          break;
        case 2:
          await ruby.say_and_wait([callname, '……']);
          era.printButton(
            '「Не поймите дурно, мне просто нравится маленькое.」',
            1,
          );
          era.printButton(
            '「Не поймите дурно: я про рост телесных способностей.」',
            2,
          );
          ret.push(await era.input());
          await ruby.say_and_wait('……');
          await ruby.say_and_wait(
            'Потом соберёмся у школьных ворот, я переоденусь.',
          );
          await era.printAndWait(
            'Кимоно плоскогрудым к лицу — похоже, и правда.',
          );
          await era.printAndWait([
            'Но ',
            you.get_colored_name(),
            ' был(а) уверен(а): это ',
            ruby.get_colored_name(),
            ' несёт этот пышный наряд.',
          ]);
          await era.printAndWait([
            'Камелия в волосах красива, но не так трогает, как ',
            ruby.teen_sex_title,
            ' сама.',
          ]);
          await era.printAndWait('На одежде… ипомея.');
          await you.say_and_wait('Любовь, крепко прижаться к тебе', true);
          break;
        case 3:
          await era.printAndWait('Почему именно Lv2?');
          await era.printAndWait([
            'Чтобы не подвести подопечную, ',
            you.get_colored_name(),
            ' специально выспросил(а) у ',
            helios.get_colored_name(),
            ' приёмы вечеринки.',
          ]);
          await ruby.say_and_wait('Слишком шумно.');
          await era.printAndWait([
            'В ответ ',
            ruby.sex_code === 1 ? ' молодой господин' : 'барышня',
            ' с улыбкой выдаёт беспощадную оценку.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  takm_kin_win: (() => {
    const title = 'Господство трёх поколений';
    /** @param {CharaTalk} ruby 第一红宝石 */
    const f = async (ruby) => {
      await ruby.say_and_wait('Победа…');
      await ruby.say_and_wait('Хе-хе…');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' слегка мотнула головой.',
      ]);
      await ruby.say_and_wait(
        'Всем за поддержку — глубокая благодарность. Я исполнила желание рода.',
      );
      await ruby.say_and_wait(
        'В следующий раз на дорожке я преподнесу ещё более прекрасный бег.',
      );
      era.drawLine({ content: 'В подземном тоннеле' });
      await ruby.say_and_wait(
        'До сих пор то, что ты делал(а), будто всё было верно.',
      );
      await ruby.say_and_wait(
        'Хоть ты и человек, в чём-то ты очень сильное существо.',
      );
      await ruby.say_and_wait('Впредь я ещё, возможно, ударюсь о стену.');
      await ruby.say_and_wait('Прошу только: не отпускай мою руку.');
    };
    f.title = title;
    return f;
  })(),
  yasu_kin_win_s: (() => {
    const title = 'Багровый — цвет страсти';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} sprt_sta 短途马锦标（上色版名字）
     */
    const f = async (ruby, you, callname, sprt_sta) => {
      await era.printAndWait([
        'После скачки ',
        ruby.get_colored_name(),
        ' выглядит светлее, чем когда-либо.',
      ]);
      await era.printAndWait([
        'Острый, как лёд, блеск — до сих пор ',
        ruby.sex,
        ' производила именно такое впечатление.',
      ]);
      await era.printAndWait(
        'Но сейчас сияет изнутри наружу, будто свет идёт из плоти и крови.',
      );
      await ruby.say_and_wait(callname);
      await ruby.say_and_wait(
        'Касательно следующей цели я хотела бы внести предложение.',
      );
      await era.printAndWait([
        'Это скачка, что определяет самую быструю скаковую ',
        ruby.uma_sex_title,
        ' ——',
        sprt_sta,
        '.',
      ]);
      await ruby.say_and_wait('Да.');
      await ruby.say_and_wait(
        'Я полагаю, там я смогу коснуться ещё более высокой вершины.',
      );
      await ruby.say_and_wait(
        'Сильные участники и соперники наверняка нацелятся на нас.',
      );
      await ruby.say_and_wait(
        'Но я ощущаю долг, который нельзя оставить без внимания.',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Летний сбор (сеньорский год)';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} miracle 凯斯奇迹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     * @param {PrintedSpan} m_call_r 凯斯奇迹对第一红宝石的称呼
     */
    const f = async (ruby, miracle, you, callname, call_93, m_call_r) => {
      await era.printAndWait([
        'Летний сбор начался. Для бегающих в скачках ',
        ruby.uma_sex_title,
        ' это крайне важный сезон.',
      ]);
      await era.printAndWait([
        'Чтобы не растратить драгоценное время, ',
        you.get_colored_name(),
        ' уже полностью готов.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' составил очень плотное, с высокой нагрузкой меню тренировок и под эту силу подготовил охлаждение и массаж.',
      ]);
      await era.printAndWait([
        'Заранее объяснил ',
        ruby.get_colored_name(),
        ', что делать, так что тренировка вышла пресной, однако——',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' самодовольно любуется весьма заметным плодом тренировок.',
      ]);
      await era.printAndWait([
        'Как тренер ',
        ruby.get_colored_name(),
        ', подобающе исполнив задачу, ',
        you.get_colored_name(),
        ' преисполнен гордости.',
      ]);
      await ruby.say_and_wait(
        'И сегодня благодарю, что Вы всё время были рядом и помогали. Тогда позвольте отлучиться переодеться.',
      );
      await era.printAndWait([
        ruby.sex,
        'Незрелое, ещё зелёное белоснежное тело, словно луна, отражённая в воде, светится безграничным обаянием юности. Это опасный соблазн, от которого можно бросить разум и пасть в грех.',
      ]);
      era.printButton('Отбросить сдержанность и ринуться в эту бездну.', 1, {
        disabled:
          era.get('love:85') < 75 ||
          era.get('cflag:0:性别') !== 1 ||
          era.get('cflag:85:性别') !== 0,
      });
      era.printButton(
        'Даже когда тренировка кончилась, есть ещё то, что я могу сделать.',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' обеими руками сзади обнимает ',
          ruby.get_colored_name(),
          ' за тонкую талию. ',
          ruby.get_colored_name(),
          ' вскрикивает и стыдливо опускает голову.',
        ]);
        await era.printAndWait([
          'Эта застенчивость слишком мила, ',
          you.get_colored_name(),
          ' поворачивает к себе голову, и ',
          ruby.sex,
          ' не сопротивляется: губы ложатся на маленький рот, и ',
          ruby.sex,
          ' замирает.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' вздрагивает и пытается соскочить с ',
          you.get_colored_name(),
          ', но ',
          you.get_colored_name(),
          ' держит крепко, и девчушке не уйти.',
        ]);
        await era.printAndWait([
          'Лёгкий поцелуй разом зажигает в ',
          you.get_colored_name(),
          ' желания, что копились несколько дней.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' правой рукой ещё держит талию ',
          ruby.get_colored_name(),
          ', но уже невольно лезет под купальник, что надела ',
          ruby.sex,
          '; ладонь ползёт к едва округлившейся груди, пока ',
          ruby.sex,
          ' замирает.',
        ]);
        await era.printAndWait([
          'Тут же ',
          you.get_colored_name(),
          ' нащупывает ту изящную грудь и указательным с средним слегка зажимает соски, растирая.',
        ]);
        await ruby.say_and_wait(['! ', callname, '……']);
        await era.printAndWait([
          'После глубокого поцелуя язык ',
          you.get_colored_name(),
          ' медленно оставляет те тонкие вишнёвые губы.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' дышит, краснея милым лицом, смотрит снизу вверх на ',
          you.get_colored_name(),
          '; лишь прозрачная блестящая ниточка ещё соединяет ',
          you.get_colored_name(),
          ' и ',
          ruby.sex,
          '.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' не останавливается; прежде чем ',
          ruby.get_colored_name(),
          ' успевает опомниться, левая рука уже скользит под край купальника, и ',
          ruby.sex,
          ' чувствует пальцы у лона.',
        ]);
        await ruby.say_and_wait(
          'Сейчас нельзя! Если вырвется голос и нас увидят, дело примет дурной оборот!',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' локтем слегка толкает ',
          you.get_colored_name(),
          ' в живот; сила ',
          ruby.uma_sex_title,
          ' такова, что ',
          you.get_colored_name(),
          ' захлёбывается кашлем.',
        ]);
        era.printButton('「А-а-а-а! Больно, сейчас умру!」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' прикидывается невинной жертвой и нарочно вжимается, прижимая ',
          ruby.get_colored_name(),
          ' к груди; пальцы, разумеется, входят ещё глубже.',
        ]);
        await era.printAndWait([
          'Видя, как ',
          ruby.get_colored_name(),
          ' дрожит и больше не сопротивляется, ',
          you.get_colored_name(),
          ' чуть улыбается и уводит ',
          ruby.sex,
          ' в соседнюю рощицу.',
        ]);
        await era.printAndWait([
          'Снова обняв и поцеловав, пробует снять купальник, что носит ',
          ruby.sex,
          '.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' Глаза горят: ни мгновения не упустить, любуясь этим чарующим юным тельцем.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '  повалил ',
          ruby.get_colored_name(),
          '  навзничь, и ',
          ruby.sex,
          ' лежит, пока ладони скользят по белоснежной коже, проходя участок за участком розовеющей нежной плоти.',
        ]);
        await ruby.say_and_wait('Нн…… ах!');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' Обычная строгая мина исчезла без следа — вместо неё безграничная нежность, яркая, как роза.',
        ]);
        await era.printAndWait([
          'Этот волнующий вид заставил ',
          you.get_colored_name(),
          '  потерять голову, и ',
          you.get_colored_name(),
          '  целовал ',
          ruby.sex,
          ' в изящную небольшую грудь и зубами прихватил нежный бутон на конце.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '  закусила губу, терпя возбуждение от ',
          you.get_colored_name(),
          ' .',
        ]);
        await era.printAndWait([
          'И как раз когда ',
          you.get_colored_name(),
          '  посасывал крохотный сосок и уже собирался перейти к финалу, сбоку раздался голос ',
          miracle.get_colored_name(),
          ' .',
        ]);
        await miracle.say_and_wait([m_call_r, ', ты сейчас на тренировке?']);
        await era.printAndWait([
          'Тут ',
          you.get_colored_name(),
          '  и ',
          ruby.get_colored_name(),
          '  чуть души не выпустили, и ',
          you.get_colored_name(),
          '  велел ',
          ruby.get_colored_name(),
          '  срочно найти любой предлог и спровадить ',
          ruby.sex,
          ' прочь.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '  ничего не оставалось, кроме как сказать.',
        ]);
        await ruby.say_and_wait([
          call_93,
          ', я отдыхаю, если что — давай завтра.',
        ]);
        await era.printAndWait([
          'Сказав это, слегка нахмурившись, сверкнула на ',
          you.get_colored_name(),
          '  взглядом.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '  так и застыл на теле ',
          ruby.get_colored_name(),
          ' , не зная, плакать или смеяться, и тихо ждал, пока ',
          miracle.get_colored_name(),
          '  не уйдёт.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_30: (() => {
    const title = 'Летние сборы (сеньор), середина';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait(
        'Сборы уже перевалили за половину, сегодня поблизости пройдёт летний фестиваль.',
      );
      await era.printAndWait([
        'Когда ',
        you.get_colored_name(),
        '  подумал, что ',
        ruby.get_colored_name(),
        '  скорее всего останется в лагере.',
      ]);
      await ruby.say_and_wait([callname, '?']);
      era.printButton('「Я подготовил тебе всё для учёбы, хорошо?」', 1);
      await era.input();
      await ruby.say_and_wait(
        'В лагере тоже есть такое тихое место. И даже стол с освещением уже готовы.',
      );
      await ruby.say_and_wait('Благодарю вас за такую предусмотрительность.');
      await era.printAndWait(
        'Siuuuuu——бах! Издалека донёсся звук фейерверка, фестиваль уже почти заканчивается.',
      );
      await era.printAndWait([
        'Когда ',
        ruby.get_colored_name(),
        '  наконец как будто закончила, ',
        you.get_colored_name(),
        '  произнёс заранее заготовленную фразу.',
      ]);
      era.printButton('Не сходить ли немного прогуляться?', 1);
      await era.input();
      await ruby.say_and_wait('……Поняла.');
      era.drawLine({ content: 'Берег моря' });
      await ruby.say_and_wait('Безмолвие……');
      await era.printAndWait([
        you.get_colored_name(),
        '  и ',
        ruby.get_colored_name(),
        '  стоят на пустом пляже плечом к плечу, глядя на россыпь звёзд. Шелест морского ветра ласкает слух.',
      ]);
      era.printButton('Я слышал, здесь красивые звёзды, поэтому и пришёл.', 1);
      await era.input();
      await ruby.say_and_wait(
        'Да, я тоже нахожу вид прекрасным. Летние созвездия мерцают в ночном небе.',
      );
      await era.printAndWait(
        'То, что светит особенным красным светом, — сердце Скорпиона, Antares.',
      );
      await ruby.say_and_wait('……Ах, так и есть.');
      await ruby.say_and_wait('Огонь Скорпиона');
      await era.printAndWait([
        you.get_colored_name(),
        ' Почудилось, будто сбоку донёсся какой-то звук, но едва ',
        you.get_colored_name(),
        '  собрался взглянуть, ',
        ruby.get_colored_name(),
        '  уже вернула обычное выражение лица.',
      ]);
      era.printButton('「Пора возвращаться?」', 1);
      era.printButton(`「Днём Миракл……」`, 2, {
        disabled:
          era.get('love:85') < 75 ||
          era.get('cflag:0:性别') !== 1 ||
          era.get('cflag:85:性别') !== 0,
      });
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('Да.');
        await ruby.say_and_wait(
          'Ночной ветер изрядно прояснил мне голову. Вернусь и подготовлюсь к завтрашней тренировке.',
        );
        await era.printAndWait([
          'Сказав это, ',
          ruby.get_colored_name(),
          '  развернулась и ушла. Возможно, ',
          ruby.sex,
          ' и вовсе обошлась бы без этой прогулки.',
        ]);
        await era.printAndWait([
          'Когда ',
          you.get_colored_name(),
          '  сам тревожился, не сочла ли ',
          ruby.sex,
          ' эту лишнюю затею помехой —',
        ]);
        await ruby.say_and_wait('Я тоже хочу стать кем-то таким.');
        await era.printAndWait('Эти слова донеслись от её маленькой спины.');
        await era.printAndWait([
          'Чуть-чуть сердца поняли друг друга, и ',
          you.get_colored_name(),
          '  в одиночестве смаковал этой ночью эту радость.',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          '  услышав это, наклонилась, пальцами зашла за задник и сняла туфли…… а затем одним пинком отправила ',
          you.get_colored_name(),
          '  на землю.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' морщит брови: в душе досадно, но поднимает взгляд.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' Крошечная лодыжка нежна и гладка, едва ли больше, чем ладонь ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'В досаде ',
          you.get_colored_name(),
          ' — выбор ',
          you.get_colored_name(),
          ' …',
        ]);
        era.printButton('Легко прикусить зубами.', 1);
        era.printButton('Поцеловать ладонь губами.', 2);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' будто очень щекотлива: ',
          you.get_colored_name(),
          ' ведёт языком всё дальше и, дойдя до того места, где ',
          ruby.sex,
          ' так легка в бёдрах и талии, ',
          ruby.sex,
          ' едва не вскрикивает.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' лукаво складывает пальцы в жест 『тише』, напоминая, — и ',
          ruby.get_colored_name(),
          ' тут же зажимает губы обеими руками.',
        ]);
        await era.printAndWait(
          'Ночной лунный свет нельзя назвать ярким, но чтобы разглядеть ту запретную персиковую рощу, его более чем довольно.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' разводит ноги ',
          ruby.get_colored_name(),
          ' и входит в чарующий вход; с каждым вздохом ',
          ruby.get_colored_name(),
          ' он то раскрывается, то смыкается.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' — низ живота вслед за ',
          you.get_colored_name(),
          ' дюйм за дюймом яростно дрожит; когда тот входит до конца, дрожь расходится по всему телу.',
        ]);
        await era.printAndWait([you.get_colored_name(), ' нежно толкается.']);
        await ruby.say_and_wait('Нн—');
        await era.printAndWait([
          'Вдруг ',
          ruby.get_colored_name(),
          ' зажимает рот, издаёт почти крик, и тело вздымается мостом.',
        ]);
        await era.printAndWait([
          ruby.sex,
          ' — влагалище целиком сжимается и виток за витком обхватывает ствол ',
          you.get_colored_name(),
          '.',
        ]);
        era.printButton('Кончает.', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' к этой минуте уже вся в жару, облита потом.',
        ]);
        await era.printAndWait([
          'Вместе с тем как ',
          you.get_colored_name(),
          ' кончает, у ',
          ruby.get_colored_name(),
          ' из низа тоже выплёскивается прозрачная влага.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' — тело воистину отмечено небесами: с ним ',
          ruby.sex,
          ' без труда вкушает удовольствие близости.',
        ]);
        await era.printAndWait([
          'Даже измотанная до предела, ',
          ruby.sex,
          ' чувствует, как женский канал инстинктивно сводит и пульсирует.',
        ]);
        await era.printAndWait([
          'Ощущение такое, будто несметные тонкие мягкие щупальца разом ласкают у ',
          you.get_colored_name(),
          ' маленького тренера.',
        ]);
        await era.printAndWait([
          'После такой ласки ',
          you.get_colored_name(),
          ' снова встаёт во весь рост.',
        ]);
        era.drawLine();
        await era.printAndWait([
          'Когда последняя близость уже на исходе, ',
          you.get_colored_name(),
          ' уже не смеет оставаться внутри ',
          ruby.get_colored_name(),
          '.',
        ]);
        await era.printAndWait(
          'Это нежное тело не успокоится, пока не вытянет из человека самую душу.',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' — низ живота слегка вздут.',
        ]);
        era.printButton('Нажимает рукой.', 1);
        await era.input();
        await era.printAndWait(
          'Густое семя, полнившее живот, пятнает песок, оставляя кругом полный разгром.',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' : рука, что зажимала рот, давно закинута над головой и бессильно свисает.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' хочет унести ',
          ruby.get_colored_name(),
          ' обратно в лагерь, но ноги без конца дрожат.',
        ]);
        await era.printAndWait('В конце концов оба доползают до комнаты.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = 'Летние сборы окончены (старший год)';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     */
    const f = async (ruby, you, call_93) => {
      await ruby.say_and_wait('Ради миссии нужна решимость отдать себя.');
      era.printButton('「Отдать себя?」', 1);
      await era.input();
      await ruby.say_and_wait([call_93, ' прав: я…']);
      era.printButton('「И вправду это верно?」', 1);
      await era.input();
      await ruby.say_and_wait('Э?');
      era.printButton(
        `「Руби, ты считаешь, что KS Miracle так и должно быть?」`,
        1,
      );
      await era.input();
      await ruby.say_and_wait('!');
      await ruby.say_and_wait('……');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' погружается в раздумья.',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Вечером ',
        ruby.get_colored_name(),
        ', вернувшись в спальню на шаг раньше соседки, бормочет себе под нос.',
      ]);
      await ruby.say_and_wait('Мы… очень похожи…');
      await ruby.say_and_wait(
        'Кровь, 『Miracle』, наделили нас миссией и талантом, что виден всякому.',
      );
      await ruby.say_and_wait('Но есть и разница, и она…');
      await ruby.say_and_wait([call_93, ', твой путь впереди…']);
      await ruby.say_and_wait('С таким шагом будущее лишь…');
      await ruby.say_and_wait([
        call_93,
        ' ',
        ruby.sex,
        'Сама полагаешь, что так и хорошо?',
      ]);
      await you.used_to_say_and_wait('И вправду это верно?');
      await you.used_to_say_and_wait(
        'Ты считаешь, что KS Miracle так и должно быть?',
      );
      await ruby.say_and_wait('Хорошо быть не может.');
      await ruby.say_and_wait('Я… не могу этого допустить…');
      await era.printAndWait('Летние сборы в тревоге подошли к концу.');
    };
    f.title = title;
    return f;
  })(),
  before_sprt_sta_s: (() => {
    const title = 'Так называемое чудо';
    /**
     @param {CharaTalk} ruby 第一红宝石
     @param {CharaTalk} miracle 凯斯奇迹
     @param {CharaTalk} you 玩家
     @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     @param {PrintedSpan} m_call_r 凯斯奇迹对第一红宝石的称呼
     */
    const f = async (ruby, miracle, you, call_93, m_call_r) => {
      await miracle.say_and_wait('……——');
      await ruby.say_and_wait([call_93, '.']);
      await miracle.say_and_wait('……');
      await ruby.say_and_wait([miracle.get_colored_name(), ', одноклассница.']);
      await miracle.say_and_wait('А.');
      await miracle.say_and_wait([m_call_r, '?']);
      await ruby.say_and_wait('Время почти вышло, нам пора.');
      await miracle.say_and_wait('А, уже этот час.');
      await ruby.say_and_wait('……');
      await miracle.say_and_wait(
        'Прости, со мной всё в порядке. Просто много думала.',
      );
      await miracle.say_and_wait(
        'Давай обе пробежим так, чтобы не осталось сожалений.',
      );
      await ruby.say_and_wait('...Да.');
      era.drawLine({ content: 'В тоннеле участниц' });
      await miracle.say_and_wait('...Победить.');
      await miracle.say_and_wait(
        'Быстрее всех... сегодня... посвящу этот бег всем...',
      );
      await ruby.say_and_wait([call_93, '.']);
      await miracle.say_and_wait([m_call_r, '……']);
      await miracle.say_and_wait(
        'Сегодня прошу любезно. Разумеется, без всяких церемоний.',
      );
      await miracle.say_and_wait('Обе — ни шагу назад...');
      await ruby.say_and_wait('Я разобью все твои надежды.');
      await miracle.say_and_wait('!');
      await ruby.say_and_wait('Нынешней тебе я не отдам сияние самой быстрой.');
      await ruby.say_and_wait(
        'То, что ты мне когда-то сказала, я заставлю тебя увидеть.',
      );
      await miracle.say_and_wait([m_call_r, '?']);
      await ruby.say_and_wait('……——');
      await ruby.say_and_wait('Как лидер, позволь мне увести тебя ещё выше.');
      await ruby.say_and_wait(
        'Новый символ «блистательного рода». Смотрите внимательно.',
      );
      era.drawLine({ content: 'В комнате подготовки' });
      await ruby.say_and_wait('Сегодняшнюю скачку — непременно выиграть.');
      await era.printAndWait([
        'Перед забегом ',
        ruby.get_colored_name(),
        ' вдруг обратилась к ',
        you.get_colored_name(),
        ' с таким заявлением.',
      ]);
      await era.printAndWait('Дружба и впрямь слепит.');
    };
    f.title = title;
    return f;
  })(),
  sprt_sta_win_s: (() => {
    const title = 'Будущее...';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} miracle 凯斯奇迹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     * @param {PrintedSpan} m_call_r 凯斯奇迹对第一红宝石的称呼
     * @param {PrintedSpan} swan_sta 天鹅锦标（上色版名字）
     */
    const f = async (
      ruby,
      miracle,
      you,
      callname,
      call_93,
      m_call_r,
      swan_sta,
    ) => {
      await miracle.say_and_wait(
        'Спурт... быстрее всех, раньше всех — к финишу!',
      );
      await miracle.say_and_wait('Ноги... больно, не оттолкнуться...');
      await miracle.say_and_wait('Нельзя! Ради всех я должна взять победу...');
      await ruby.say_and_wait(
        'Не пущу тебя туда. Прежде чем тебя настигнет то отчаяние, что тебя ждёт...',
      );
      await ruby.say_and_wait('Проложу будущее!');
      await miracle.say_and_wait(['Эх, ', m_call_r, '?']);
      era.drawLine({ content: 'Перед забегом' });
      await ruby.used_to_say_and_wait(
        'Поставить всё, чтобы отблагодарить сейчас. Это тоже достойный выбор.',
      );
      await ruby.used_to_say_and_wait('Но для тебя это и вправду лучшее?');
      await ruby.used_to_say_and_wait(
        'Если ты отдашь всё — те люди и правда получат воздаяние?',
      );
      await miracle.used_to_say_and_wait('В такой-то час...');
      await ruby.used_to_say_and_wait(
        'Думать лишь о «сейчас», которое вот-вот упрётся в предел, — такое мне не нравится.',
      );
      await ruby.used_to_say_and_wait(['Я... благодаря ', callname, '.']);
      await ruby.used_to_say_and_wait(
        ' нашла другой путь, новое предназначение и будущее ещё дальше.',
      );
      await ruby.used_to_say_and_wait(
        'Пройти тот путь до конца — вот чем я воздам за дарованное мне.',
      );
      await ruby.used_to_say_and_wait('Моя... любовь.');
      era.drawLine({ content: 'Снова на дорожке' });
      await ruby.say_and_wait('Ха-а—!');
      await miracle.say_and_wait('!');
      await miracle.say_and_wait('Как бежать...');
      await miracle.say_and_wait('Я тоже, ради всех...');
      await you.say_as_passer_by_and_wait('Комментатор', [
        miracle.get_colored_name(),
        ', теряет ход! Сейчас впереди —',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        ruby.get_colored_name(),
        '!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        ruby.get_colored_name(),
        ', какой прекрасный и яростный финишный спурт!',
      ]);
      era.printButton(`「Вперёд, Руби.」`, 1);
      await era.input();
      await ruby.say_and_wait('……——');
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Побеждает ',
        ruby.get_colored_name(),
        '! Явила подавляющую скорость, скакунья «блистательного рода», ',
        ruby.get_colored_name(),
        '!',
      ]);
      era.drawLine({ content: 'В тоннеле участниц' });
      await miracle.say_and_wait(['……', m_call_r, '.']);
      await ruby.say_and_wait([call_93, '.']);
      await miracle.say_and_wait('Поздравляю. Правда, это было блестяще.');
      await miracle.say_and_wait(
        'Знаешь, я и правда думала: даже если сегодня всё закончится — неважно.',
      );
      await miracle.say_and_wait(
        'Я думала, что долго бежать всё равно не смогу, и если есть только сейчас... поставлю всё.',
      );
      await ruby.say_and_wait('……');
      await miracle.say_and_wait('Но.');
      await miracle.say_and_wait(
        'Твой бег был слишком ярким. Я подумала: может, я ещё могу больше.',
      );
      await miracle.say_and_wait(
        'Продолжать скачки, показать всем будущее. Ответить на твою доброту.',
      );
      await ruby.say_and_wait('……!');
      await miracle.say_and_wait('Как же досадно.');
      await miracle.say_and_wait('Но на удивление свежо.');
      await miracle.say_and_wait('Я стану сильнее.');
      await miracle.say_and_wait(
        'Буду готовить тело в этом темпе и начну сначала.',
      );
      await miracle.say_and_wait('Больше себя ломать не буду.');
      await ruby.say_and_wait([call_93, '……']);
      await miracle.say_and_wait(['Наверное, выберу ', swan_sta, '.']);
      await ruby.say_and_wait(['...Я обсужу это с ', callname, '.']);
    };
    f.title = title;
    return f;
  })(),
  before_swan_sta_s: (() => {
    const title = 'Перед Swan Stakes';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} miracle 凯斯奇迹
     * @param {PrintedSpan} m_call_r 凯斯奇迹对第一红宝石的称呼
     * @param {PrintedSpan} swan_sta 天鹅锦标（上色版名字）
     */
    const f = async (ruby, miracle, m_call_r, swan_sta) => {
      await miracle.say_and_wait([m_call_r, '...Ты пришла.']);
      await ruby.say_and_wait('Вы меня назвали, поэтому я поразмыслила.');
      await era.printAndWait([
        swan_sta,
        '...По приглашению ',
        miracle.get_colored_name(),
        ', ',
        ruby.get_colored_name(),
        ' решила участвовать в этом забеге.',
      ]);
      await miracle.say_and_wait(
        'Спасибо. Не думала, что так скоро снова побегу с тобой.',
      );
      await ruby.say_and_wait('...С вашим телом всё в порядке?');
      await miracle.say_and_wait('М-м, уже всё хорошо.');
      await miracle.say_and_wait(
        'Раньше думала, что достаточно быть быстрой, и без конца себя надрывала...',
      );
      await miracle.say_and_wait(
        'Теперь я сменила курс тренировок, чтобы достичь лучшего состояния, какого могу достичь сейчас.',
      );
      await miracle.say_and_wait(
        '— И даже так я уверена: нынешняя я бегу быстрее.',
      );
      await miracle.say_and_wait('Быстрее, чем ты.');
      await ruby.say_and_wait('!');
      await miracle.say_and_wait(
        'Я стала сильнее, как и заявляла. — Прошу, состязайся со мной.',
      );
      await era.printAndWait([
        miracle.get_colored_name(),
        ' улыбнулась. Улыбка очень мягкая, но ',
        ruby.sex,
        ' явно излучает уверенность аурой и осанкой.',
      ]);
      await ruby.say_and_wait('Форма просто отличная.', true);
      await miracle.say_and_wait('Это скорее мои слова. Прошу вас.');
    };
    f.title = title;
    return f;
  })(),
  swan_sta_win_s: (() => {
    const title = 'Искра';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} miracle 凯斯奇迹
     * @param {PrintedSpan} call_93 第一红宝石对凯斯奇迹的称呼
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (ruby, miracle, call_93, mile_cha) => {
      await ruby.say_and_wait(
        'Как и думала, все очень трудные соперницы, и к тому же —',
      );
      await ruby.say_and_wait([
        call_93,
        '...Действительно стала сильнее, чем прежде.',
      ]);
      await ruby.say_and_wait([
        'Чтобы на ',
        mile_cha,
        ' одержать подавляющую победу, мне тоже нужно стать сильнее, чем сейчас.',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('Хм~');
      await era.printAndWait([
        'Глядя, как сбоку, ухватив ',
        miracle.get_colored_name(),
        ', галдит ',
        miracle.get_colored_name(),
        ',',
        ruby.get_colored_name(),
        ' и понимающе улыбается.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_43: (() => {
    const title = 'Тренер 「Рода великолепия」';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        'Отдыхавшая у тренировочного поля ',
        ruby.get_colored_name(),
        ' вдруг обратилась к ',
        you.get_colored_name(),
        '.',
      ]);
      await ruby.say_and_wait(
        'Ваши слова... зачем... долг 『тренера』 — это...',
      );
      era.printButton('「Нет, это 『моя』 миссия.」', 1);
      await era.input();
      await era.printAndWait([
        'Явить самый ослепительный блеск как члену 「великолепного」 рода — вот мечта ',
        ruby.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Осуществить мечты ',
        ruby.uma_sex_title,
        ' — возможно, именно в этом суть работы тренера.',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('Вот как. Я поняла.');
      await era.printAndWait(
        'Улыбка подопечной казалась чуть... многозначительной.',
      );
    };
    f.title = title;
    return f;
  })(),
  mile_cha_win_s: (() => {
    const title = 'Самый ослепительный блеск';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} mother 第一红宝石的母亲（剧情 NPC）
     */
    const f = async (ruby, mother) => {
      await era.printAndWait(
        'На ипподроме нет былой суеты: все с почтением встречают сегодняшнюю победительницу.',
      );
      await era.printAndWait('(хлоп-хлоп-хлоп-хлоп-хлоп...!!)');
      await era.printAndWait(['Все поднялись и славят ', ruby.sex, '.']);
      await ruby.say_and_wait('Все...');
      await era.printAndWait('(хлоп-хлоп-хлоп-хлоп-хлоп...!!)');
      await era.printAndWait('……');
      await mother.say_and_wait('——');
      await ruby.say_and_wait('...! Матушка...', true);
      await ruby.say_and_wait('Матушка тоже аплодирует... признала меня.');
      await ruby.say_and_wait('Наконец-то...');
      era.printButton(`「Поздравляю, Руби.」`, 1);
      await era.input();
      await ruby.say_and_wait('……');
      await era.printAndWait([
        'На миг взгляды пересеклись с ',
        ruby.get_colored_name(),
        ', и ',
        ruby.sex,
        ' сразу обернулась к переполненным трибунам.',
      ]);
      await ruby.say_and_wait('Всем вам огромное спасибо.');
      await ruby.say_and_wait('Своим только что показанным бегом я заявляю.');
      await ruby.say_and_wait(
        'Отныне этими ногами я буду искать ещё больший блеск.',
      );
      await ruby.say_and_wait('Как новый символ Рода великолепия...');
      await ruby.say_and_wait('Вместе со своим тренером.');
      await era.printAndWait(
        'Этот день потом описывали так: родился новый символ Рода великолепия.',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_rose_master: (() => {
    const title = 'Исторический подвиг великолепия';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait('Особняк семьи Дайити');
      await era.printAndWait([
        '「Род великолепия」 — услышав это имя, люди вспоминают некую ',
        ruby.uma_sex_title,
        '……',
      ]);
      await era.printAndWait([
        'Вписавшие в историю блистательные подвиги редчайшие ',
        ruby.uma_sex_title,
        '...',
      ]);
      await era.printAndWait([
        'Унаследовав кровь ',
        ruby.couple_title,
        ', дала ей расцвести ещё пышнее —',
      ]);
      await era.printAndWait([ruby.get_colored_name(), '.']);
      await era.printAndWait([
        ruby.sex,
        ', ныне ставшая символом 「Рода великолепия」 ',
        ruby.uma_sex_title,
        '.',
      ]);
      await ruby.say_and_wait('Прошу прощения, что заставила вас ждать.');
      await ruby.say_and_wait('Все доклады завершены.');
      era.printButton('「Каково мнение вашей семьи?」', 1);
      await era.input();
      await ruby.say_and_wait(
        '『Продолжайте идти вперёд этими ногами』... вместе с тем человеком.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' завершает трёхлетние скачки.',
      ]);
      await era.printAndWait([
        'Чтобы доложить о планах на будущее, ',
        you.get_colored_name(),
        ' и ',
        ruby.get_colored_name(),
        ' приходят в родовой дом великолепного рода.',
      ]);
      await era.printAndWait([
        '「Самое яркое сияние — своими ногами」 — так сказала ',
        ruby.sex,
        ', и эти слова, похоже, приняли.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' смотрит на ',
        you.get_colored_name(),
        ' и клонит голову набок.',
      ]);
      await ruby.say_and_wait('Что вы делаете?');
      era.printButton('「Я смотрю на портрет.」(привязанность+5)', 1);
      era.printButton('「Я смотрю на тебя.」(любовь+2)', 2, {
        disabled: era.get('love:85') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'В первый визит в особняк давление едва не подогнуло колени ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait(
          'Теперь можно рассматривать картины, словно смакуя чай.',
        );
        await era.printAndWait([
          'В конце концов, ',
          you.get_colored_name(),
          ' тоже вносит немалый вклад.',
        ]);
        await ruby.say_and_wait([callname, '……']);
        await ruby.say_and_wait('Позвольте мне заявить ещё раз.');
        await ruby.say_and_wait([
          'За эти три года ',
          you.get_colored_name(),
          ' блестяще справляется с ролью наставника.',
        ]);
        await ruby.say_and_wait(
          'Думаю, стать моим тренером — значит принять бесконечные трудности.',
        );
        await ruby.say_and_wait('Но ты и правда старался и вырос.');
        await ruby.say_and_wait('Отличная работа. Я от души тобой горжусь.');
        era.printButton('「Это мне вас благодарить.」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          'Отныне, как символ 『великолепного рода』, я должна всегда быть сияющей.',
        );
        await ruby.say_and_wait('Тогда обсудим планы на будущее?');
        era.printButton('「……」', 1);
        await era.input();
        await ruby.say_and_wait('Что с вами?');
        era.printButton('「Мне можно?」', 1);
        await era.input();
        await ruby.say_and_wait('!');
        await ruby.say_and_wait('Трудно понять.');
        await ruby.say_and_wait([
          'Мои дела решать должен ',
          callname,
          ', разве нет?',
        ]);
        await ruby.say_and_wait('Тогда прошу скорее. Время ограничено.');
        await ruby.say_and_wait('И ещё……');
        await ruby.say_and_wait(
          'Если рядом с моим портретом не будет тебя, мне будет затруднительно……',
        );
        await era.printAndWait('Впереди ещё много задач. Прошу, не забудь.');
      } else {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('Возьми на руки.');
        await era.printAndWait([
          you.get_colored_name(),
          ' послушно поднимает на руки маленькое тельце ',
          ruby.get_colored_name(),
          '.',
        ]);
        await ruby.say_and_wait('……м.');
        await ruby.say_and_wait('Когда придёт время, снимемся вот так.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_rest_day: (() => {
    const title = 'Элегантная атмосфера не меняется';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        'Даже вдали от скачек изящество ',
        ruby.get_colored_name(),
        ' никуда не девается',
      ]);
      era.printButton(`「Руби, сегодня нет семейных дел?」`, 1);
      await era.input();
      await ruby.say_and_wait('Да, редкий выходной.');
      await ruby.say_and_wait(
        'Ничего не делать и тратить время глупо, поэтому я учусь.',
      );
      await era.printAndWait([
        'Не зря это ',
        ruby.sex,
        '……но ',
        you.get_colored_name(),
        ' чувствует диссонанс.',
      ]);
      await era.printAndWait(
        'Стопка чего-то вроде журналов на столе на учебники никак не похожа.',
      );
      await ruby.say_and_wait('Вы заинтересовались.');
      await era.printAndWait([
        'Затем ',
        ruby.get_colored_name(),
        ' закрывает книгу и подносит обложку к глазам ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('«Клуб жён»');
      await era.printAndWait(
        'На обложке огромными буквами: 「Обязательное чтение, когда готовишься к ребёнку!」',
      );
      await ruby.say_and_wait(
        'Кроме этой, ещё «Друг матери», «Мама и малыш»…… все журналы с советами наготове.',
      );
      await era.printAndWait([ruby.sex, ' выглядит слегка самодовольно.']);
      await era.printAndWait(
        'И на страницах нескольких книг повсюду закладки.',
      );
      await ruby.say_and_wait('Скоро и тебе понадобятся эти знания.');
      await ruby.say_and_wait('Тогда освоить заранее — совсем не плохо?');
      await ruby.say_and_wait(
        'Я отобрала то, что сама считаю важным; лучше начать с этого.',
      );
      era.printButton('……Придётся согласиться.', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  os_wait_station: (() => {
    const title = 'На встречу';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        'У станции ',
        you.get_colored_name(),
        ' с улыбкой приветствует одетую по-граждански ',
        ruby.teen_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'До назначенного ещё минут десять с лишним; похоже, ',
        ruby.get_colored_name(),
        ' уже ждёт довольно давно.',
      ]);
      await era.printAndWait([you.get_colored_name(), ' бегло оглядывает её.']);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' в кофте с круглой горловиной: изящные ключицы открыты щедро и маняще.',
      ]);
      await era.printAndWait(
        'Снизу — длинная юбка, пояс скрыт под блузкой; вся она выглядит спокойной и непринуждённой.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' увидела, как ',
        you.get_colored_name(),
        ' оглядывает её, и провела рукой по волосам у уха.',
      ]);
      await ruby.say_and_wait('Разве странно?');
      era.printButton('「Конечно, очень мило.」', 1);
      era.printButton('「Есть в этом свежая, хорошенькая прелесть.」', 2);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        ruby.get_colored_name(),
        ' привлекли взгляды некоторых прохожих.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' не выносила взглядов в духе 「богач содержит несовершеннолетнюю ',
        ruby.teen_sex_title,
        ' 」, но к счастью ',
        ruby.get_colored_name(),
        ' потянула ',
        you.get_colored_name(),
        ' в вагон.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_station: (() => {
    const title = 'Акатян Хонпо';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await you.say_and_wait('Итак, что же это за место.');
      await ruby.say_and_wait('Да. Это Акатян Хонпо.');
      await era.printAndWait(
        'Вокруг — женщины с чуть округлившимися животами, пары с детьми на руках и прочие.',
      );
      await era.printAndWait([
        'Все они — гости, которым здесь куда уместнее, чем этим двоим.',
      ]);
      await era.printAndWait([
        'Здесь ',
        you.get_colored_name(),
        ' и ',
        ruby.get_colored_name(),
        ' явно смотрятся чужеродно.',
      ]);
      await ruby.say_and_wait(
        'Знания, которые можно почерпнуть из книг, ограниченны.',
      );
      await ruby.say_and_wait('Хочется углубить их непосредственным осмотром.');
      await you.say_as_passer_by_and_wait('Прохожий A', [
        'Эй, это разве не ',
        ruby.get_colored_name(),
        '?',
      ]);
      await you.say_as_passer_by_and_wait(
        'Прохожий B',
        'Правда?.. Почему кто-то из клана Gorgeous здесь?',
      );
      await you.say_as_passer_by_and_wait(
        'Прохожий C',
        'А рядом — тренер, да? Если они вдвоём идут в тот магазин, неужели они в таких отношениях?',
      );
      await era.printAndWait([
        'Что и неудивительно: слишком заметны. Само собой, ',
        you.get_colored_name(),
        ' и подопечная уже раскрыты.',
      ]);
      await ruby.say_and_wait(
        'Просто зайти сюда как обычно и впрямь неуместно. Пожалуйста, помогите мне.',
      );
      era.printButton('Протянула руку.', 1);
      await era.input();
      await era.printAndWait([
        'И вот ',
        ruby.get_colored_name(),
        ' крепко обхватила эту руку.',
      ]);
      await era.printAndWait(
        'Тогда пребывание здесь не будет выглядеть чужеродно.',
      );
      await you.say_as_passer_by_and_wait(
        'Прохожий A',
        'Всё-таки эти двое уже в таких отношениях...',
      );
      await you.say_as_passer_by_and_wait('Прохожий B', [
        'Правда? Тогда неужели у ',
        ruby.get_colored_name(),
        ' живот уже!?',
      ]);
      await you.say_as_passer_by_and_wait(
        'Прохожий C',
        'Так это же преступление!',
      );
      await era.printAndWait([
        'После этого ',
        you.get_colored_name(),
        ' и ',
        ruby.get_colored_name(),
        ' под гомон голосов вокруг ещё какое-то время бродили по магазину для мам и малышей.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_shopping_together: (() => {
    const title = 'Вместе за покупками';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     */
    const f = async (ruby, you) => {
      await era.printAndWait(
        'Вывески магазинов стоят на крышах, люди входят и выходят, словно пчёлы.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' держа ',
        ruby.get_colored_name(),
        ' за руку, шла по шумной улице и раздумывала, вернуться в академию или пойти в отель.',
      ]);
      await era.printAndWait(
        'Сама ответа не находит — значит, решать подопечной.',
      );
      if (era.get('relation:85:0') > 150) {
        era.printButton('「На руки или на спину?」', 1);
        await era.input();
        await ruby.say_and_wait('…На спину.');
        await era.printAndWait([
          you.get_colored_name(),
          ' охотно согласилась.',
        ]);
        await era.printAndWait([
          'Ещё несовершеннолетнюю, миниатюрную ',
          ruby.get_colored_name(),
          ' оказалось легко взять на спину.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' лежала на спине у ',
          you.get_colored_name(),
          ', склонив голову, смотрела на профиль ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait('Не сказала ни слова.');
        await era.printAndWait('Даже выражение лица не изменилось.');
        await era.printAndWait(
          'Только в тех прекрасных глазах — безграничная нежность.',
        );
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' немного затрепетала сердцем, но в итоге решила вернуться в академию.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  os_hot_spring_event: (() => {
    const title = 'Поездка на онсэн';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     * @param {boolean} has_ticket 是否抽到温泉旅行券
     * @param {number} ticket_date 抽到温泉旅行券的时间
     */
    const f = async (ruby, you, callname, has_ticket, ticket_date) => {
      await era.printAndWait([
        'Это был один из дней, когда ',
        you.get_colored_name(),
        ' и ',
        ruby.get_colored_name(),
        ' выиграли уже немало скачек —',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' открыла блокнот свериться с делами, и на пол слетело что-то смутно знакомое.',
      ]);
      await era.printAndWait('Подобрала — купон на поездку на онсэн.');
      if (has_ticket) {
        await ruby.say_and_wait([
          'Это было ',
          ticket_date < 2
            ? ' Едва вступив в старший год'
            : ticket_date < 5
              ? 'Прошлой весной'
              : ticket_date < 9
                ? 'Прошлым летом'
                : ticket_date < 11
                  ? 'Прошлой осенью'
                  : 'В прошлом месяце',
          ', выиграли в той лотерее на торговой улице, да?',
        ]);
        await era.printAndWait([
          'Тогда ',
          you.get_colored_name(),
          ' сказал「подождём, пока я не стану кем-то столь же выдающимся, как ',
          ruby.get_colored_name(),
          ' , и тогда вместе воспользуемся этим билетом.」',
        ]);
        await ruby.say_and_wait(
          'Теперь, раз он снова оказался перед нами, значит, время пришло.',
        );
        await ruby.say_and_wait(
          'Как раз крупных гонок в последнее время нет, не отправиться ли нам в путешествие?',
        );
        era.printButton('「Я ещё не выполнила обещание.」', 1);
        await era.input();
      } else {
        await ruby.say_and_wait([callname, ' всё ещё хранит путёвку в онсэн?']);
        await you.say_and_wait('Ну…… просто совпало.');
        await you.say_and_wait(
          'Как раз крупных гонок в последнее время нет, не отправиться ли нам в путешествие?',
        );
      }
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('Позвольте отлучиться.');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' повернулась и достала телефон.',
      ]);
      await ruby.say_and_wait('Да, это я. Пришлите сейчас же машину в школу.');
      era.printButton(`「Руби???」`, 1);
      await era.input();
      await ruby.say_and_wait('Тогда — следуйте за мной.');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' привела ',
        you.get_colored_name(),
        ' в гостиницу, где можно использовать ту путёвку в онсэн.',
      ]);
      await ruby.say_and_wait(
        'В последнее время Вы всё работаете без отдыха. Я всё это видела.',
      );
      await ruby.say_and_wait(
        'Надеюсь, Вы воспользуетесь случаем, смените настроение и наберётесь сил.',
      );
      await ruby.say_and_wait('Тогда позвольте откланяться.');
      era.printButton('Тебе, что так усердно трудилась, отдых необходим.', 1);
      era.printButton('По-моему, тебе отдых нужен больше.', 2);
      await era.input();
      await ruby.say_and_wait('Фух……');
      await ruby.say_and_wait('В этот раз я тебя послушаюсь.');
      era.drawLine({ content: 'После онсэна' });
      era.printButton('Кстати, почему ты согласилась остаться?', 1);
      await era.input();
      await ruby.say_and_wait('По внезапной прихоти.');
      era.printButton('Правда что ли', 1);
      await era.input();
      await ruby.say_and_wait(
        'Неужели решение, принятое по внезапной прихоти, так уж невероятно?',
      );
      era.printButton('Да.', 1);
      await era.input();
      await ruby.say_and_wait(
        'Тогда я не слишком думала. Но, услышав Ваши слова……',
      );
      await ruby.say_and_wait(
        'Я решила, что лучше остаться и составить Вам компанию, и согласилась…… вот и всё.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' не продолжила и не собиралась продолжать.',
      ]);
      await era.printAndWait([
        'Для ',
        you.get_colored_name(),
        ' этого уже было более чем достаточно.',
      ]);
      era.printButton(`「Спасибо тебе, Руби.」`, 1);
      await era.input();
      await ruby.say_and_wait(
        'Я не думаю, что сделала что-то, достойное Вашей благодарности.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' решил в номере ',
        you.get_colored_name(),
        ' ощутить с ',
        ruby.get_colored_name(),
        ' незаменимую связь……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ...require('#/i18n/ru-RU/kojo/108500-Daiichi-Ruby/edu-85-be-ntr'),
};
