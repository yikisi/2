/**
 * @file 曼城茶座 - 招募
 * @author Necroz
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async rec_start(coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' замечаешь черноволосую ',
      coffee.uma_sex_title,
      '.',
    ]);
    await era.printAndWait([
      'Но едва ',
      you.get_colored_name(),
      ' пытается подойти — а следа нет, словно ',
      coffee.sex,
      ' растаяла; будто ',
      coffee.sex,
      ' никогда здесь и не стояла.',
    ]);
    await you.say_and_wait('Глаза сбились? Ладно, пойду отдохну.', true);
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async goto_playground(coffee, you) {
    await era.printAndWait(
      'Беда не ходит одна. Когда не везёт — всегда так, правда?',
    );
    await era.printAndWait([
      'Рано утром на Тренировочное поле за подопечной ',
      coffee.uma_sex_title,
      ' — ',
      you.get_colored_name(),
      ' как водится, никого. Плетётся в общежитие и сразу в сон. Просыпается — телефона нет, хоть обшарь все карманы.',
    ]);
    await era.printAndWait('Что ж, идти за телефоном. А что ещё.');
    await era.printAndWait([
      'К Тренировочному полю приходишь уже в полной темноте: ',
      you.get_colored_name(),
      ' думает, поиска ждать долго — а на траве неподалёку мелькают мелкие яркие точки.',
    ]);
    await era.printAndWait([
      'Будто тебя ведут——',
      you.get_colored_name(),
      ' с этим странным чувством подходит и находит: это ',
      you.get_colored_name(),
      ' потерянный телефон.',
    ]);
    era.printButton('「Удача… вроде как есть?」', 1);
    await era.input();
    await era.printAndWait('шух————');
    await era.printAndWait([
      'Не успеваешь ',
      you.get_colored_name(),
      ' порадоваться — что-то с ветром проносится у ',
      you.get_colored_name(),
      ' плеча. Оглядывается: в холодном свете луны ',
      you.get_colored_name(),
      ' не видит ничего.',
    ]);
    era.printButton('「Это…」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' чувствуешь, как холод ползёт от конечностей к туловищу; где прошёл — там деревенеет. ',
      you.get_colored_name(),
      ' хочет шагнуть — руки и ноги как будто сковало, тело как ржавая машина. Твердит себе не накручивать, а в голову сами лезут трейсенские байки про призраков, и ',
      you.get_colored_name(),
      ' становится по-настоящему страшно.',
    ]);
    await coffee.say_as_unknown_and_wait('Тот…');
    await era.printAndWait([
      'Голос сзади рвёт эту пелену. В миг вернув тело, ',
      you.get_colored_name(),
      ' жадно хватает воздух. Сквозь страх убежать оборачивается: позади, ещё задыхаясь, будто только что остановилась после пробежки, ',
      coffee.uma_sex_title,
      ' смотрит на ',
      you.get_colored_name(),
      '.',
    ]);
    await coffee.say_as_unknown_and_wait(
      'Я видела, ты тут уже давно стоишь, и испугалась — не случилось ли чего…',
    );
    await era.printAndWait([
      'Давно стоишь? ',
      you.get_colored_name(),
      ' по лунному свету смотрит на часы: минутная стрелка ушла больше чем на четверть круга — неужели уже почти двадцать минут?',
    ]);
    await coffee.say_and_wait([
      'Тебя первой заметила подруга… Мы бежали вместе, и только когда ',
      coffee.sex,
      ' вдруг свернула — я тебя увидела…',
    ]);
    await era.printAndWait([
      'Как ни крути, это ',
      coffee.sex,
      ' и её друг выручили ',
      you.get_colored_name(),
      '. Поблагодарив, ',
      you.get_colored_name(),
      ' называет себя и зачем пришёл(ла) и спрашивает, где друг: пусть и ',
      coffee.sex,
      ' услышит спасибо.',
    ]);
    await coffee.say_as_unknown_and_wait('Друг? Так он же рядом с тобой…?');
    await era.printAndWait([
      'Перед тобой — до пояса чёрные прямые волосы, тонкая ',
      coffee.uma_sex_title,
      ' бросает взгляд на пустое место у ',
      you.get_colored_name(),
      ' плеча, клонит голову — и только тогда ',
      you.get_colored_name(),
      ' замечает: ',
      coffee.sex,
      ' взгляд с самого начала как будто впился в тебя. От этого осмотра ',
      you.get_colored_name(),
      ' становится не по себе.',
    ]);
    await era.printAndWait([
      'У черноволосой ',
      coffee.uma_sex_title,
      ' белая ахоге чуть качается в такт дыханию — так дышит ',
      coffee.sex,
      ', и настроение ',
      you.get_colored_name(),
      ' качается следом.',
    ]);
    await era.printAndWait([
      'В таком месте ещё шутить — странная ',
      coffee.uma_sex_title,
      '.',
    ]);
    await era.printAndWait([
      '…Точно шутка? После того, что сам(а) пережил(а), ',
      you.get_colored_name(),
      ' невольно отступает от этой пустоты на пару шагов.',
    ]);
    era.printButton('「…Простите, это шутка?」', 1);
    await era.input();
    await coffee.say_as_unknown_and_wait([
      '…Вовсе не шутка… И ещё, тренер ',
      you.adult_sex_title,
      '…',
    ]);
    await era.printAndWait([
      coffee.uma_sex_title,
      ' медленно подходит к ',
      you.get_colored_name(),
      '. Только тогда ',
      you.get_colored_name(),
      ' наконец разглядывает, какая ',
      coffee.sex,
      ' с лица: среди ',
      coffee.uma_sex_title,
      ' её тоже назовут красавицей — тонкие черты; кожа белая, почти без крови; чёрные пряди со лба режут это лицо пополам. И сильнее всего в память ',
      you.get_colored_name(),
      ' врезается то, как смотрит ',
      coffee.sex,
      ' тускло-жёлтыми глазами.',
    ]);
    await coffee.say_as_unknown_and_wait(
      'Уходи со мной сейчас же. За тобой уже что-то следило. Только что…',
    );
    await era.printAndWait([
      coffee.teen_sex_title,
      ' шёпот на внезапном ночном ветру входит в ',
      you.get_colored_name(),
      ' уши; из тьмы рядом доносится смешок. Даже когда потом ',
      you.get_colored_name(),
      ' вместе с этой ',
      coffee.uma_sex_title,
      ' благополучно уходите с Тренировочного поля, эта ночь уже врезалась ',
      you.get_colored_name(),
      ' в память.',
    ]);
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   */
  async rec_again(coffee, you) {
    await era.printAndWait([
      'Прошло ещё несколько дней после той ночи. Чёрные волосы и слова той ',
      coffee.uma_sex_title,
      ' с Тренировочного поля всё крутятся у ',
      you.get_colored_name(),
      ' в голове. И только когда начались отборочные, ',
      you.get_colored_name(),
      ' впервые видит в списке имя, которое носит ',
      coffee.sex,
      ': ',
      coffee.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'Спешишь — а ',
      coffee.get_colored_name(),
      ' отборочные уже кончились. Сам(а) не видел(а), но имя в первых строках табло и так говорит о том, какая ',
      coffee.sex,
      ' сильная.',
    ]);
    await era.printAndWait([
      'Протискиваешься сквозь толпу. В зоне отдыха после скачки ',
      you.get_colored_name(),
      ' замечает: вон ',
      coffee.sex,
      '.',
    ]);
    era.print([you.get_colored_name(), ' — что делать?']);
    era.printButton('Подойти (попытаться набрать)', 1);
    era.printButton('Пожалуй, обойдусь (отказаться от набора)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        'Та ночь ещё держит ',
        you.get_colored_name(),
        ' страхом, но любопытство сильнее: ',
        you.get_colored_name(),
        ' подходит.',
      ]);
      await era.printAndWait([
        coffee.sex,
        ' прячется среди однокурсниц-',
        coffee.uma_sex_title,
        ' и тренеров, пришедших набирать. Финиш отборочных в первых рядах — а ',
        coffee.sex,
        ' как будто никому и не нужна.',
      ]);
      era.printButton(
        `「Здравствуй, ${coffee.name}-сан, на отборочных ты здорово выступила, поздравляю.」`,
        1,
      );
      await era.input();
      await coffee.say_and_wait([
        '…Большое спасибо. Тренер той ночи ',
        you.adult_sex_title,
        '…',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' тоже узнаёт ',
        you.get_colored_name(),
        ', но что ',
        you.get_colored_name(),
        ' заговорил(а) — будто удивляет: она тупо кивает.',
      ]);
      era.printButton('「Может, не моё дело… но к тебе никто не подошёл?」', 1);
      await era.input();
      await coffee.say_and_wait('…Пока нет.');
      await era.printAndWait('И оба замолкают.');
      await era.printAndWait([
        you.get_colored_name(),
        ' вспоминаешь, что только что смотрел(а) про ',
        coffee.get_colored_name(),
        ':',
      ]);
      await era.printAndWait([
        'От других ',
        coffee.uma_sex_title,
        ' и тренеров, которым ',
        coffee.sex,
        ' когда-то была интересна, известно: ',
        coffee.get_colored_name(),
        ' говорит странности — про людей и дела, которых никто не знает. Не раз видели, как ',
        coffee.sex,
        ' словно за кем-то бежит. Один опытный тренер пробовал сойтись — но ',
        coffee.sex,
        ' на контакт не пошла: по сведённым бровям, с которыми он уходил, вышло плохо. Так ',
        coffee.get_colored_name(),
        ' навесили ярлык проблемного ребёнка — ту, за кого тренеры браться не хотят.',
      ]);
      await era.printAndWait([
        'Но ',
        you.get_colored_name(),
        ' так не думает. Вспоминая ту ночь и то, как ',
        coffee.sex,
        ' говорит про 【друга】, — тут явно что-то ещё.',
      ]);
      await era.printAndWait('Лучше сменить тему.');
      era.printButton('「За ту ночь правда спасибо. Без тебя, боюсь…」', 1);
      await era.input();
      await era.printAndWait([
        'Той ночью в темноте ',
        you.get_colored_name(),
        ' этого не заметил(а), но ',
        coffee.get_colored_name(),
        ' благодарность принимает плохо. ',
        you.get_colored_name(),
        ' прямое спасибо заставляет ',
        coffee.get_colored_name(),
        ' замереть: ритм хвоста сбивается. Лишь спустя паузу она отвечает ',
        you.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait(
        'Просто так вышло… И ещё: лучше ко мне не подходи…',
      );
      await era.printAndWait([
        'Не подходи — ',
        coffee.sex,
        ' так сказала. Почему?',
      ]);
      await era.printAndWait([
        'Теперь ',
        you.get_colored_name(),
        ' замирает: фразы, что копил(а) для разговора, от этого отталкивающего ответа так и остаются в горле.',
      ]);
      await era.printAndWait([
        'Не успевает ',
        you.get_colored_name(),
        ' вопрос сорваться — ',
        coffee.get_colored_name(),
        ' бросает «прости» и боком уходит из толпы.',
      ]);
      await era.printAndWait([
        'Глядя, как ',
        coffee.sex,
        ' уходит одна, ',
        you.get_colored_name(),
        ' вопрос сам складывается в вздох.',
      ]);
      era.printButton(`(Что это за ${coffee.uma_sex_title}…)`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' немного чувствуешь, сколько в Трейсене весит ярлык «проблемный ребёнок».',
      ]);
      await era.printAndWait([
        'Когда ',
        coffee.get_colored_name(),
        ' уходит, ',
        you.get_colored_name(),
        ' уже не до отборочных. С парой годных ',
        coffee.uma_sex_title,
        ' разговор никуда не идёт — и ты раньше других уходишь из Трейсена.',
      ]);
    } else {
      await era.printAndWait([
        'Та ночь — кошмар на всю жизнь ',
        you.get_colored_name(),
        '. Страх всё же останавливает ',
        you.get_colored_name(),
        ': поворачивает и уходит.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async rec_final(coffee, you, callname) {
    await era.printAndWait([
      'Под закатом ',
      you.get_colored_name(),
      ' один(на) плетётся домой, голова набита сегодняшней тоской, и потому ',
      you.get_colored_name(),
      ' замечает только сейчас: стоило свернуть за угол — и мир рядом уже другой.',
    ]);
    era.printButton('「Что-то не так…」', 1);
    await era.input();
    await era.printAndWait(
      'Закат сзади желтее обычного; знакомый вид в этой позолоте как старое кино, фальшивый. Тень у ног——',
    );
    await era.printAndWait('Нет. Тени нет!');
    await era.printAndWait([
      'На лбу сразу холодный пот. ',
      you.get_colored_name(),
      ' ковыляет к ограде у дороги и прислоняется спиной — ноги уже мягкие.',
    ]);
    await era.printAndWait(
      'По сторонам вроде всё то же: дальние силуэты, Трейсен. Если рвануть туда изо всех сил…',
    );
    await era.printAndWait([
      'Подумал(а) — сделал(а). ',
      you.get_colored_name(),
      ' срывает и бежит к Трейсену.',
    ]);
    await era.printAndWait([
      'Только не так красиво, как ',
      you.get_colored_name(),
      ' надеялся(ась). Спасибо хоть байкам: увидев третий одинаковый щит, ',
      you.get_colored_name(),
      ' принимает — тебя водят стены — и возвращается к той же стенке.',
    ]);
    await era.printAndWait(
      'Закат всё ниже, вокруг всё чуже. Из давно закрытой лавки шепот; из урны лезут чёрные волосы; дальний Трейсен в густеющей мгле плывёт и кривится.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' чувствуешь: ещё немного — и не выдержишь.',
    ]);
    await coffee.say_and_wait('Тренер… слы… голос?');
    await era.printAndWait(['Это ', coffee.get_colored_name(), '.']);
    await era.printAndWait([
      'Хоть и виделись всего дважды — ',
      coffee.sex,
      ' и ты, — голос рваный, но ',
      you.get_colored_name(),
      ' точно помнит голос ',
      coffee.sex,
      ' — низкий, чуть хриплый, ',
      coffee.sex,
      ' Где?',
    ]);
    await era.printAndWait([
      'Как за соломинку, ',
      you.get_colored_name(),
      ' поднимает голову и ищет.',
    ]);
    await coffee.say_and_wait([
      'Тренер ',
      you.adult_sex_title,
      ', ты уже… в другом мире, я через… друга смог… связа…',
    ]);
    era.printButton('「Другой мир… я уже умер(ла)?」', 1);
    await era.input();
    await coffee.say_and_wait([
      'Нет… время… до заката ещё есть… тренер ',
      you.adult_sex_title,
      ', напрямую помочь не могу… спокойно… морок путает, они тоже не могут напрямую… найди как ответить — и тогда…',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' голос тает, но ',
      you.get_colored_name(),
      ' снова собирается.',
    ]);
    await era.printAndWait([
      'Цепляясь за ясность, как можешь глушишь жуть вокруг. ',
      you.get_colored_name(),
      ' думает, с чего всё пошло — тень.',
    ]);
    await era.printAndWait([
      'Да. Тень. Это единственное, что случилось с ',
      you.get_colored_name(),
      '.',
      you.get_colored_name(),
      ' поднимает руку: в щелях пальцев тень есть, складки одежды по свету чёткие. Пропала только та, что стелется от ног, тень всего тела.',
    ]);
    await era.printAndWait('Или — «тень» в смысле духа, души?');
    await era.printAndWait([
      'Слова ',
      coffee.get_colored_name(),
      ' про «другой мир»: может, ты в клетке, что слепила нечисть, а пропажа тени — знак, что тебя держат.',
    ]);
    await era.printAndWait('Нить есть. Дальше — как вырваться. Времени…');
    await era.printAndWait('Вдали закат почти касается горизонта. Минут пять.');
    await era.printAndWait([
      'Сердце колотит так, что слышно всем телом, адреналин наконец по крови. ',
      you.get_colored_name(),
      ' глубоко вдыхает и закрывает глаза.',
    ]);
    await era.printAndWait(
      'Если тень есть только при свете — когда тень духа пропала, не закрыть ли окна души.',
    );
    await era.printAndWait([
      'По памяти ',
      you.get_colored_name(),
      ' с закрытыми глазами быстро идёт к Трейсену.',
    ]);
    await era.printAndWait([
      'Мужской ор, женский крик, детский плач, старческий стон — всё свито в верёвку и лезет в ',
      you.get_colored_name(),
      ' уши. ',
      you.get_colored_name(),
      ' чувствует злобу этого места.',
    ]);
    await era.printAndWait([
      'Давишь охоту открыть глаза ради мнимой безопасности и ',
      you.get_colored_name(),
      ' прибавляет шаг.',
    ]);
    await era.printAndWait([
      'Выходит неожиданно гладко: эта жуть и правда не может сделать с ',
      you.get_colored_name(),
      ' ничего напрямую.',
    ]);
    await era.printAndWait([
      'В ухе что-то трещит — и тишина. ',
      you.get_colored_name(),
      ' открывает глаза. Уже ночь; прохожие косятся на того странного, кто в их глазах просто стоял у дороги и смотрел в пустоту.',
    ]);
    await era.printAndWait('Смотришь вниз: тень честно лежит у ног.');
    await era.printAndWait('Похоже, кончилось.');
    await coffee.say_and_wait([
      'Добро пожаловать, тренер ',
      you.adult_sex_title,
      '…',
    ]);
    await era.printAndWait([coffee.get_colored_name(), ' голос сзади.']);
    await era.printAndWait([
      'Оборачиваешься — ',
      coffee.sex,
      ': в руке треснувший оберег, шагах в двух от ',
      you.get_colored_name(),
      ' она смотрит, как ',
      you.get_colored_name(),
      '.',
    ]);
    era.printButton('「Опять ты вытащила…」', 1);
    await era.input();
    await era.printAndWait([coffee.get_colored_name(), ' качает головой.']);
    await coffee.say_and_wait([
      'Пожалуйста, так не говори. Это ты своей волей нашёл(ла) дорогу назад, тренер… Скорее, я перед тобой, тренер, ',
      you.adult_sex_title,
      ' тоже виновата, что ты снова попал(а) в беду…',
    ]);
    await coffee.say_and_wait([
      'Тренер ',
      you.adult_sex_title,
      ', для них ты желаннее, чем я думала… Я решила, что тогда ночью это я их привела, но… если бы заметила раньше, сегодняшнего, может, и не было…',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' понимаешь, что ',
      coffee.get_colored_name(),
      ' имела в виду: ',
      coffee.sex,
      ' винила себя и не хотела тянуть других — потому и сказала ',
      you.get_colored_name(),
      ' не подходить ближе — ',
      coffee.sex,
      ' берегла других. Хороший ребёнок…',
    ]);
    era.printButton('「Значит, такое ещё будет… да?」', 1);
    await era.input();
    await coffee.say_and_wait('Может быть…');
    await coffee.say_and_wait(
      'Но, но! Я и дальше буду помогать. Так что, пожалуйста, не…',
    );
    await era.printAndWait([
      'Будто боясь, что ',
      you.get_colored_name(),
      ' испугается, ',
      coffee.get_colored_name(),
      ' торопливо договаривает.',
    ]);
    await era.printAndWait([
      'Смотришь на вдруг заторопившуюся ',
      coffee.uma_sex_title,
      ', ',
      you.get_colored_name(),
      ' в груди на удивление мало страха за завтра. Эта удача развязала ',
      you.get_colored_name(),
      ' смелость? Или к ',
      coffee.get_colored_name(),
      ' и к тому, о ком говорит ',
      coffee.sex,
      ', — к 「другу」, — странная уверенность?',
    ]);
    await era.printAndWait([
      'Так или иначе, ',
      you.get_colored_name(),
      ' приходит одна мысль. Перед тобой ',
      coffee.teen_sex_title,
      ' — ей ты и выкладываешь.',
    ]);
    era.printButton(
      '「Раз принял(а) твою помощь, должен(на) отдать равноценно…」',
      1,
    );
    era.printButton(
      '「Я буду твоим тренером. Как смотришь? Не смотри что с виду — в тренировке я кое-что умею.」',
      2,
    );
    await era.input();
    await era.printAndWait([
      'Услышав этот нежданный набор, ',
      coffee.get_colored_name(),
      ' широко раскрывает глаза, потом будто что-то понимает и смотрит в пустой угол. Молчит. Потом ',
      coffee.teen_sex_title,
      ' отвечает.',
    ]);
    await coffee.say_and_wait([
      'Тогда, тренер ',
      you.adult_sex_title,
      '… ты поможешь мне догнать того ребёнка? Догнать моего… друга?',
    ]);
    await era.printAndWait([
      'Друг. ',
      you.get_colored_name(),
      ' снова слышит это слово от ',
      coffee.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'После этой нечисти ',
      you.get_colored_name(),
      ' не примет, будто ',
      coffee.sex,
      ' выдумала его. Тем более из уст ',
      coffee.sex,
      ' ясно: друг дважды вытащил ',
      you.get_colored_name(),
      ' из беды — ',
      you.get_colored_name(),
      ' он есть.',
    ]);
    await era.printAndWait('Тогда ответ простой.');
    era.printButton(
      `「Давай попробуем…! Друг ли, или другая сильная ${coffee.uma_sex_title} — я поведу тебя выше!」`,
      1,
    );
    await era.input();
    await coffee.say_and_wait([
      '…Хорошо! Тогда прошу любить и жаловать, ',
      callname,
      '!',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      ' протягивает ',
      you.get_colored_name(),
      ' руку — ',
      coffee.sex,
      ' впервые на глазах ',
      you.get_colored_name(),
      ' улыбается, и тускло-жёлтые зрачки наливаются светом.',
    ]);
    await era.printAndWait('тук——');
    await era.printAndWait([
      'Когда ',
      you.get_colored_name(),
      ' тоже протягивает руку и ',
      coffee.get_colored_name(),
      ' сжимаете ладони, что-то не сильно и не слабо хлопает ',
      you.get_colored_name(),
      ' по плечу — ',
      you.get_colored_name(),
      ' едва не спотыкается.',
    ]);
    await era.printAndWait('——Прошу тебя.');
    await era.printAndWait([
      'Хотя ',
      you.get_colored_name(),
      ' не слышит ничьего голоса, чувство такое.',
    ]);
    await era.printAndWait([
      'Это и есть друг? ',
      you.get_colored_name(),
      ' оглядывается — силуэта всё нет.',
    ]);
    await era.printAndWait([
      'Похоже, впереди странные дни — и ',
      coffee.sex,
      ' будет рядом.',
    ]);
  },
};
