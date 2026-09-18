/**
 * @file 丸善斯基 - 爱慕
 * @author 黑奴一号
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {PrintedSpan} m_call_m 丸善斯基对摩耶重炮的称呼
   * @param {PrintedSpan} m_call_t 丸善斯基对骏川缰绳的称呼
   * @param {string} y_call_m 玩家对丸善斯基的称呼
   */
  async 49(maru, you, callname, m_call_m, m_call_t, y_call_m) {
    await maru.print_and_wait(
      'В последнее время всё будто чего-то не хватает.',
    );
    await maru.print_and_wait([
      maru.get_colored_name(),
      ' В последнее время она не находит себе места: как и всегда смотрит, как растут милые младшие, и ждёт, когда ',
      maru.couple_title,
      ' сможет догнать её.',
    ]);
    await maru.print_and_wait([
      'И вместе с ',
      callname,
      ' она сверяла плоды тренировок, но всё равно какая-то вялость не отпускает.',
    ]);
    await maru.print_and_wait([
      'Это не укрылось от глаз ',
      callname,
      '. Причины она не знает, но до следующей скачки ещё есть время, так что тренеру стоит взглянуть, в чём дело.',
    ]);
    await maru.print_and_wait([
      'Видно, за вечную опеку над младшими ',
      maru.get_colored_name(),
      ' в последнее время не находит себе места — это тихо расползлось в маленьком кругу, который ',
      maru.uma_sex_title,
      ' сколотили сами.',
    ]);
    await maru.print_and_wait([
      'Время шло, и даже ',
      m_call_t,
      ' не раз спрашивала тренера, как там ',
      maru.get_colored_name(),
      '.',
    ]);
    await maru.print_and_wait([
      'И вот однажды в столовой за болтовнёй ',
      m_call_m,
      ' спросила у ',
      maru.get_colored_name(),
      ' про любовь.',
    ]);
    await maru.say_and_wait(['…Вот оно что. Спасибо тебе, ', m_call_m, '.']);
    era.println();
    await maru.print_and_wait([
      maru.get_colored_name(),
      ' наконец осознала своё расположение к тренеру.',
    ]);
    await maru.print_and_wait(['Позвать бы ', callname, ' на свидание']);
    era.drawLine();
    await era.printAndWait([
      'Однажды рано утром, когда ',
      you.get_colored_name(),
      ' заходит в кабинет тренера, открывает обувной шкафчик — и находит бледно-голубой конверт.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' Осторожно берёшь конверт: на ощупь приятный, не заклеен, на сгибе нарочно оставлен узкий зазор.',
    ]);
    await era.printAndWait('Распечатываешь — внутри всего одна строка');
    await era.printAndWait([
      maru.elder_sibling_sex_title,
      'Я на крыше тебя жду~',
    ]);
    await era.printAndWait(
      'Полудень — это с одиннадцати до часа? Ладно, пока спрячь письмо.',
    );
    await era.printAndWait([
      'Ровно в 11:00 ',
      you.get_colored_name(),
      ' поднимается на крышу академии Трейсен.',
    ]);
    await era.printAndWait([
      'Солнце заливает всю крышу, лёгкий ветер нежно играет ',
      you.get_colored_name(),
      ' по волосам.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' начинаешь искать того, кто позвал ',
      you.get_colored_name(),
      ' на крышу. И вдруг дверь на крышу захлопывается.',
    ]);
    era.printButton(
      '「Неужели это то самое паранормальное, про которое говорила Кафе?」',
      1,
    );
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' дрожа, хватаешься за ручку и что есть силы открываешь.',
    ]);
    await era.printAndWait([
      'К удивлению ',
      you.get_colored_name(),
      ' дверь всё-таки открывается.',
    ]);
    await era.printAndWait('Лестница на крышу молчит, как всегда.');
    era.printButton('「Кто это проказничает?」', 1);
    await era.input();
    await era.printAndWait([
      'Захлопнуть дверь за считаные секунды — на такое способна только ',
      maru.uma_sex_title,
      ', да?',
    ]);
    await era.printAndWait([
      'Может, это та застенчивая ',
      maru.uma_sex_title,
      ', что ищет своего тренера и так стесняется?',
    ]);
    await era.printAndWait([
      'Доносится родной запах, и ',
      you.get_colored_name(),
      ' вспоминает лето.',
    ]);
    await era.printAndWait([
      'Хозяйка этого запаха явно где-то рядом, и ',
      you.get_colored_name(),
      ' идёт по этой единственной ниточке.',
    ]);
    await era.printAndWait([
      'Но реальность безжалостна: ',
      you.get_colored_name(),
      ' обшаривает крышу вдоль и поперёк — хозяйки запаха всё нет.',
    ]);
    era.printButton('「Неужели?!」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' поднимаешь взгляд на бак на крыше: там ',
      maru.uma_sex_title,
      ' сидит прямо на баке.',
    ]);
    await era.printAndWait([
      'В белом платье, с мягким лицом смотрит на ',
      maru.uma_sex_title,
      ' внизу, на поле.',
    ]);
    era.printButton(`${y_call_m}?`, 1);
    await era.input();
    await maru.say_and_wait([callname, ', наконец-то нашёл(а) меня.']);
    era.printButton(
      '「Если так закинуть ногу на ногу, из-под юбки трусики видно, знаешь?」',
      1,
    );
    await era.input();
    await maru.say_and_wait('Ай! Извращенец! Похабник! H!');
    await era.printAndWait([
      maru.get_colored_name(),
      ' в панике прикрывает подол и спрыгивает с бака на крышу.',
    ]);
    await maru.say_and_wait([
      'Хотела держаться как настоящая ',
      maru.elder_sibling_sex_title,
      ', да не думала, что ',
      callname,
      ' окажешься таким похабным.',
    ]);
    era.printButton(
      '「Раз погода такая, давай прямо тут устроим обеденное совещание」',
      1,
    );
    await era.input();
    await maru.say_and_wait('Н-н~ идея хорошая, но есть дело поважнее.');
    await maru.say_and_wait([
      '…… ',
      callname,
      ', пойдёшь со мной на свидание?',
    ]);
    era.printButton('「Если на свидании будешь поласковее — тогда я за」', 1);
    await era.input();
    await maru.say_and_wait('Ага! Тогда договорились!');
    await era.printAndWait([
      maru.get_colored_name(),
      ' залившись краской, смотрит на ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait(
      'Этому новому чувству ещё предстоит взойти, как семечку, что закопали в землю.',
    );
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {PrintedSpan} m_call_t 丸善斯基对骏川缰绳的称呼
   */
  async '74-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait([
      callname,
      ', а давай на этот раз свидание в бассейне?',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      ' лежит на диване с мангой и предлагает ',
      you.get_colored_name(),
      ' — ты как раз сидит над планом следующих тренировок.',
    ]);
    await era.printAndWait([
      'С тех пор как на крыше ты сказал(а) «да» на свидание с ',
      maru.get_colored_name(),
      ', вы стали ещё ближе.',
    ]);
    await era.printAndWait([
      'В болтовне между делом и по ходу дневного плана ',
      you.get_colored_name(),
      ' смутно чувствует, что ',
      maru.sex,
      ' стала куда внимательнее к ',
      you.get_colored_name(),
      '.',
    ]);
    era.printButton('「А почему бассейн?」', 1);
    await era.input();
    await maru.say_and_wait([
      'В сёдзё-манге так и пишут: героиня поступила — и вдруг встретила красавчика-тренера, который питает к ней расположение — ',
      maru.sex,
      '.',
    ]);
    await maru.say_and_wait(
      'А дальше однокомандница — барышня из знатного дома — влюблена в тренера, но тренер будто смотрит только на героиню.',
    );
    await maru.say_and_wait(
      'Из сдержанной гордости детской подруги, с которой уже помолвка, знатная барышня бросает герою вызов — решить всё на Satsuki Sho.',
    );
    await maru.say_and_wait(
      'Перед подавляющей мощью знатного дома герой по ободрению тренера начинает спецподготовку в бассейне.',
    );
    await maru.say_and_wait(
      'И без того питающие расположение двое в бассейне попадают в заставляющий сердце колотиться инцидент! В финале целуются посреди воды.',
    );
    await era.printAndWait([
      maru.sex,
      'Выпрямляется на диване и тычет в сёдзё-мангу в руках.',
    ]);
    await maru.say_and_wait([callname, 'Не находишь, это же романтика?']);
    era.printButton('「Звучит довольно неплохо」', 1);
    await era.input();
    await maru.say_and_wait(
      'Вот как~ именно так, так что завтра — свидание в бассейне',
    );
    era.printButton('「Бассейн же рано не откроют?」', 1);
    await era.input();
    await maru.say_and_wait([
      'Потом я переговорю с ',
      m_call_t,
      ' на этот счёт, так что не волнуйся.',
    ]);
    era.printButton(
      `Если свидание затянется, сюда не заявятся ${maru.uma_sex_title}?`,
      1,
    );
    await era.input();
    await maru.say_and_wait([
      'Рано утром ',
      maru.uma_sex_title,
      ' все на утренней пробежке, да и уроков плавания до десяти завтра нет.',
    ]);
    await maru.say_and_wait([callname, 'Есть ещё вопросы?']);
    era.printButton('「Пока нет.」', 1);
    await era.input();
    await maru.say_and_wait([
      'Тогда договорились! Раз уж на свидание с такой нежной старшей ',
      maru.elder_sibling_sex_title,
      ', то ',
      callname,
      ' ночью от возбуждения смотри не зависни без сна♪',
    ]);
    await era.printAndWait([
      maru.get_colored_name(),
      ' потрепала ',
      you.get_colored_name(),
      ' по голове, потом вышла из кабинета тренера, ',
      you.get_colored_name(),
      ' начинает сгорать от предвкушения завтрашнего свидания.',
    ]);
  },
  /**
   * 丸善斯基在水池约了训练员
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {string} y_call_m 玩家对丸善斯基的称呼
   */
  async '74-2'(maru, you, callname, y_call_m) {
    await you.say_and_wait('Вода ещё очень холодная');
    await era.printAndWait([
      you.get_colored_name(),
      ' становишься на одно колено у бортика — вода под пальцами ледяная.',
    ]);
    await era.printAndWait([
      'Шесть утра. Нетерпеливое солнце заливает всё светом, но в утреннем бассейне ни души — только ',
      you.get_colored_name(),
      ' да ещё больше чем подруга, но ещё не возлюбленная ',
      maru.get_colored_name(),
      ' — вы двое.',
    ]);
    await era.printAndWait(
      'Хотя вы и пытаетесь сблизиться, из-за всяких причин чувства всё никак не разгораются.',
    );
    await maru.say_and_wait([callname, 'Смотри сюда⭐']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' переоделась в купальник и помахала ',
      you.get_colored_name(),
      ' рукой, потом разминает руки и ноги.',
    ]);
    await era.printAndWait(
      'Купальник, подчёркивающий изящные изгибы, отбрасывает серебристый контур на лазурную гладь.',
    );
    await maru.say_and_wait('М-м. Такая тишина тоже ничего.');
    await era.printAndWait([
      'Не так давно ',
      maru.get_colored_name(),
      ' позвала ',
      you.get_colored_name(),
      ' на крышу, и вы наконец определили отношения.',
    ]);
    await maru.say_and_wait(
      'Вот и выкроили местечко вдвоём. В такой час Спешал и остальные ещё спят, да?',
    );
    await maru.say_and_wait([callname, '♪ Не спустишься поплавать со мной?']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' из середины бассейна зовёт ',
      you.get_colored_name(),
    ]);
    await era.printAndWait([
      ' Для обычного человека вода ещё такая себе, но для ',
      maru.uma_sex_title,
      ' с температурой чуть выше человеческой она, может, как раз?',
    ]);
    await maru.say_and_wait([callname, '! Не спустишься поплавать со мной?']);
    await era.printAndWait([
      maru.get_colored_name(),
      ' приглашение срывает ',
      you.get_colored_name(),
      ' с мыслей',
    ]);
    era.printButton('「Отсюда смотреть — глаз не оторвать」', 1);
    era.printButton('Я вдруг вспомнил(а), что есть ещё дела', 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait([
        callname,
        'Ну и похотливый же~ впрочем, за прямоту ',
        callname,
        ' я тоже люблю♪',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        ' кинула воздушный поцелуй в сторону ',
        you.get_colored_name(),
        ' и с головой нырнула в воду.',
      ]);
      await era.printAndWait([
        'В прозрачной до дна воде ',
        maru.sex,
        ' её силуэт резво скользит, как рыбка.',
      ]);
      era.printButton(`${y_call_m} и правда здорово плавает`, 1);
      await era.input();
      await era.printAndWait([
        'Едва ',
        maru.sex,
        ' собирается всплыть и идти к следующей цели, как ',
        maru.sex,
        ' её тело само деревенеет',
      ]);
      era.printButton('「Судорога, что ли?」', 1);
      await era.input();
      await era.printAndWait([
        'Ситуация слишком срочная, чтобы думать, ',
        you.get_colored_name(),
        ' стремительно прыгает в бассейн и плывёт к отчаянно барахтающейся, высунувшей голову ',
        maru.sex,
        '.',
      ]);
      era.printButton('「Держись, я уже плыву!」', 1);
      await era.input();
      await era.printAndWait([
        'Хотя ',
        you.get_colored_name(),
        ' плавать тоже не ахти, но ',
        you.get_colored_name(),
        ' всё равно изо всех сил плывёт к ней — ',
        maru.sex,
        '.',
      ]);
      era.printButton('「!?」', 1);
      await era.input();
      await maru.say_and_wait([callname, 'Всё в порядке.']);
      await era.printAndWait(['Похоже, тебя надула ', maru.sex, '.']);
      await maru.say_and_wait('…Прости, я, кажется, хватила лишнего.');
      await era.printAndWait('Шутить так — уже чересчур.');
      await maru.say_and_wait([
        'Мне правда жаль, но ',
        callname,
        ' ты всё-таки спустился(ась), да и с этого ракурса атмосфера ничего, правда?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' выдыхаешь, видя, что ',
        maru.get_colored_name(),
        ' цела. Атмосфера атмосферой, а такая тишина и правда редкость.',
      ]);
      await era.printAndWait(
        'Разволнованная недавней суматохой гладь теперь тоже утихла.',
      );
      era.printButton('「Холодно」', 1);
      await era.input();
      await era.printAndWait([
        'Для ',
        maru.uma_sex_title,
        ' вода как раз, а обычному человеку всё же прохладно.',
      ]);
      await maru.say_and_wait([
        'Тогда ',
        maru.elder_sibling_sex_title,
        ' тебя согреет?',
      ]);
      era.printButton('「Нет уж」', 1);
      await era.input();
      await era.printAndWait([
        maru.get_colored_name(),
        '  без лишних слов обнимает всё ещё дующуюся ',
        you.get_colored_name(),
        ', «на самом деле во всём виновата ',
        maru.get_colored_name(),
        ', да?» — хотя так и думаешь',
      ]);
      await era.printAndWait([
        'Впрочем, стоило почувствовать её тепло, как недовольство исчезает без следа — ',
        maru.sex,
        '.',
      ]);
      await maru.say_and_wait(
        'В такой обстановке, от которой вспыхивают щёки и колотится сердце, разве не собираешься что-нибудь сделать?',
      );
      await era.printAndWait([
        maru.get_colored_name(),
        '  намёк и так уже слишком явный, так что ',
        you.get_colored_name(),
        ' тоже обхватывает её за шею — ',
        maru.sex,
        ' медленно к щеке — ',
        maru.sex,
        '.',
      ]);
      await maru.say_and_wait('Точь-в-точь как в манге♪');
      await era.printAndWait([
        you.get_colored_name(),
        '  насильно заталкиваешь ей язык в рот — ',
        maru.sex,
        ', ',
        maru.sex,
        ' почти не сопротивляется и нежно принимает эту обиду.',
      ]);
      await era.printAndWait(
        'Хотя вода в бассейне по-прежнему очень холодная, вокруг вас тепло, как весной.',
      );
      await maru.say_and_wait([
        'У меня за стенкой есть пустая комната, которой давно не пользовались, ',
        callname,
        '?',
      ]);
      await era.printAndWait([
        'Когда губы наконец расцепились, вы выходите из бассейна, и пока вытираетесь сухими полотенцами, ',
        maru.get_colored_name(),
        '  вдруг обращается к ',
        you.get_colored_name(),
        '  с предложением.',
      ]);
      era.printButton('「Ну тогда прошу любить и жаловать」', 1);
      await era.input();
      await era.printAndWait([
        'Это уж скорее я должна так сказать, ',
        callname,
        ' Давай сегодня вечером перевезёшь вещи♪',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '  начинаешь жить вместе с ',
        maru.get_colored_name(),
        '.',
      ]);
    } else {
      await maru.say_and_wait([callname, 'Ну тебя! Тогда я поплыву одна.']);
      era.drawLine();
      await era.printAndWait('Динь-динь-динь!!!');
      await era.printAndWait([
        you.get_colored_name(),
        '  просыпаешься от будильника — кажется, тебе приснился странный сон',
      ]);
      era.printButton(
        '「Ладно, лучше подготовлю сегодняшний план тренировок」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '  зеваешь, стараясь забыть тот странный сон.',
      ]);
      await maru.say_as_unknown_and_wait(
        'Если всё время колебаться, потом пожалеешь.',
      );
      await era.printAndWait([
        'Другой голос в глубине души обращается к ',
        you.get_colored_name(),
        '.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {PrintedSpan} m_call_t 丸善斯基对骏川缰绳的称呼
   */
  async '89-1'(maru, you, callname, m_call_t) {
    await maru.say_and_wait(
      'Мне нравится та твоя фраза: 「『Как же счастлива Марузенски, что гонится за ветром』.',
    );
    await maru.say_and_wait(
      'Вот ведь досада: старше меня на несколько лет, а ведёшь себя как старшеклассник.',
    );
    await maru.say_and_wait([
      '…Впрочем, именно поэтому ',
      callname,
      ' ещё милее.',
    ]);
    await maru.say_and_wait([
      'Когда мы впервые встретились, я сразу приняла тебя за младше меня на несколько лет ',
      you.younger_sibling_sex_title,
      '.',
    ]);
    await maru.say_and_wait(
      'Вот и прижала тебя к груди по инерции, погладила по голове и отпустила, только когда увидела, как у тебя всё лицо покраснело.',
    );
    await maru.say_and_wait(
      'Неловко вышло, конечно, но извиняться я не собираюсь, хм~',
    );
    await maru.say_and_wait(
      'Когда ты с горящими глазами рассказывал(а) про улыбку, с которой я бегу, мне и правда было очень-очень радостно.',
    );
    await maru.say_and_wait([
      'В тот вечер, когда мы подписали контракт, я позвала ',
      m_call_t,
      ' с собой в ближайший бар отпраздновать.',
    ]);
    await maru.say_and_wait([
      'Выслушав, как я сияя от восторга рассказываю ',
      maru.sex,
      ' твой облик.',
    ]);
    await maru.say_and_wait([
      '『Похоже, тебе попался тренер, с которым вы хорошо совпадаете』, — покачивая бокал, ',
      maru.sex,
      ' хмельно поддакивает.',
    ]);
    await maru.say_and_wait(
      '『Честно говоря, мне куда милее радость ветра, чем слава на скачках.』 Хотя вслух я так и говорю',
    );
    await maru.say_and_wait(
      'но в глубине души всё равно тихо жду, сможешь ли ты догнать мою спину',
    );
    await maru.say_and_wait(
      'На первой тренировке тебя всего колотило от волнения.',
    );
    await maru.say_and_wait(
      'Мало того что в полной тренерской форме, так ещё и за руку со мной поздоровался(ась).',
    );
    await maru.say_and_wait(
      '…Вторая сверху пуговица была застёгнута не на ту петлю.',
    );
    await maru.say_and_wait(
      'А как засуетился(ась), когда я на это указала, пуговицу расстёгивать — и всё лицо красное.',
    );
    await maru.say_and_wait([
      'Совсем как младше меня на несколько лет ',
      you.younger_sibling_sex_title,
      ' стоит передо мной и говорит: « ',
      maru.elder_sibling_sex_title,
      ', я уже взрослый».',
    ]);
    await maru.say_and_wait([
      'Вот такого милого ',
      you.younger_sibling_sex_title,
      ' не погладить по голове для поддержки — вот это была бы потеря.',
    ]);
    await maru.say_and_wait([
      'Ох, я снова по инерции приняла тебя за ',
      you.younger_sibling_sex_title,
      '.',
    ]);
    await maru.say_and_wait('А потом мы брали цель за целью.');
    await maru.say_and_wait(
      'Не успела оглянуться — а ты уже живёшь в комнате рядом со мной.',
    );
    await maru.say_and_wait(
      'Будить тебя каждое утро тоже стало моим ежедневным ритуалом.',
    );
    await maru.say_and_wait(
      'Смотрю: ты мычишь «угу» пару раз и переворачиваешься, собираясь спать дальше.',
    );
    await maru.say_and_wait('『Время вставать』.');
    await maru.say_and_wait(
      'Не слушая твоих протестов, силой отрываю тебя от одеяла.',
    );
    await maru.say_and_wait('А ты, зевая, принимаешься за сегодняшний план.');
    await maru.say_and_wait('Словно ветерок гладит мне сердце.');
    await maru.say_and_wait('Каждый день — хорошая погода.');
    await maru.say_and_wait('И на тренировках то же самое.');
    await maru.say_and_wait('Каждый раз тебя пленяет мой силуэт');
    await maru.say_and_wait(
      'Ты сосредоточенно засекаешь время каждой тренировки и бросаешь вызов пределу за пределом',
    );
    await maru.say_and_wait(
      'А когда я бью прежний рекорд, ты радуешься как ребёнок.',
    );
    await maru.say_and_wait(
      'Эта детская твоя сторона… так и хочется прижать тебя к себе и погладить по голове',
    );
    await maru.say_and_wait('Хотя бывали и моменты, когда ветер стихал');
    await maru.say_and_wait(
      'Когда я травмировалась из-за ошибки на тренировке, и ты под руку вёл(а) меня до медпункта',
    );
    await maru.say_and_wait(
      'А рядом болтал(а) про забавные случаи в академии, чтобы отвлечь меня от боли.',
    );
    await maru.say_and_wait(
      'И скука исчезала без следа — как машины, которые Та оставляет позади.',
    );
    await maru.say_and_wait(
      'Новогодние поздравления, пожелания на Фестивале благодарности фанатам, закаты, что смотрели вместе, рождественское обещание.',
    );
    await maru.say_and_wait(
      'Словно невидимая лента, они накрепко связали меня и тебя.',
    );
    await maru.say_and_wait([
      'Незаметно, ',
      callname,
      ' уже из того, кому нужна была забота, ',
      you.younger_sibling_sex_title,
      ' -кун стал(а) надёжным взрослым.',
    ]);
    await maru.say_and_wait(
      'Эти воспоминания, яркие как самоцвет, я буду беречь всегда.',
    );
    await maru.say_and_wait(
      '…Пора уже взглянуть в глаза тому, что лежит на дне сердца.',
    );
    await maru.say_and_wait([
      'Хоть мне тоже, как ',
      maru.elder_sibling_sex_title,
      ', и знакома эта гордость: я делюсь с младшими модными веяниями и как ',
      maru.elder_sibling_sex_title,
      ' — мудростью.',
    ]);
    await maru.say_and_wait([
      'Но перед самым-самым любимым ',
      callname,
      ' — дамэ!',
    ]);
    await maru.say_and_wait(
      'Мода вечно меняется, а такой милый тренер — один.',
    );
    await maru.say_and_wait([
      'Ну что, пора уже вытащить ',
      callname,
      ' на свидание.',
    ]);
    await maru.say_and_wait([
      'Всё равно, ',
      callname,
      ' любит меня или нет — я люблю тебя всегда.',
    ]);
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {string} y_call_m 玩家对丸善斯基的称呼
   */
  async '89-2'(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      maru.get_colored_name(),
      ' живёте вместе уже какое-то время.',
    ]);
    await era.printAndWait('Встаёте, едите — и вместе в академию.');
    await era.printAndWait(
      'Перед выходом проверяете друг на друге, всё ли в порядке с видом, и вместе едете в академию на машине.',
    );
    await era.printAndWait([
      'Пока ',
      maru.sex,
      ' на занятиях, ',
      you.get_colored_name(),
      ' составляет план послеобеденных тренировок под следующую скачку и, если застрянет, идёт советоваться к более опытным тренерам.',
    ]);
    await era.printAndWait([
      'Крыша уже стала для ',
      you.get_colored_name(),
      ' укромным штабом — вам и так всё ясно без слов, и едва ',
      you.get_colored_name(),
      ' ступает на последнюю ступеньку крыши, в школьной форме ',
      maru.get_colored_name(),
      ' уже там ждёт ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'В ясную погоду вы смотрите вниз на стайки ',
      maru.uma_sex_title,
      ' и болтаете о забавных случаях за день в академии.',
    ]);
    await era.printAndWait(
      'А в затяжной дождь прижимаетесь друг к другу на диване в кабинете тренера.',
    );
    await era.printAndWait([
      'Когда последний луч заката ложится на ',
      maru.get_colored_name(),
      ' её подол, ',
      you.get_colored_name(),
      ' доделывает последний документ; за дверью давно ждёт ',
      maru.sex,
      ', и вы вместе возвращаетесь в квартиру.',
    ]);
    await era.printAndWait([
      'Вечером под шум воды и смех комиков с телевизора ',
      you.get_colored_name(),
      ' выкладывает жаркое по тарелкам.',
    ]);
    await era.printAndWait([
      'После короткого «приятного аппетита» ',
      you.get_colored_name(),
      ' молча слушает, как ',
      maru.sex,
      ' с лёгкой гордостью говорит, что Та ',
      maru.couple_title,
      ' скоро обгонит — ',
      maru.sex,
      ', и отправляет дайкон в рот.',
    ]);
    await era.printAndWait([
      'Пожелав друг другу спокойной ночи, ',
      you.get_colored_name(),
      ' с трудом уговаривает ту, что хотела с ',
      you.get_colored_name(),
      ' засыпать в одной комнате, — ',
      maru.get_colored_name(),
      ' вернуться к себе.',
    ]);
    await era.printAndWait([
      'Перед тем как погасить свет, берёшь сёдзё-мангу, что ',
      maru.get_colored_name(),
      ' посоветовала ',
      you.get_colored_name(),
      ', листает несколько страниц и засыпает.',
    ]);
    await era.printAndWait(
      'Спокойные дни — как белые облака в ясном небе: пока они бесцельно плывут, время тоже тянется медленнее.',
    );
    await maru.say_and_wait([
      callname,
      ', в это воскресенье давай к морю: давно не выбирались на берег.',
    ]);
    await era.printAndWait([
      'Как-то за ужином ',
      maru.sex,
      ' просит ',
      you.get_colored_name(),
      ' съездить к морю.',
    ]);
    era.printButton('「К морю? Давно не были.»', 1);
    await era.input();
    await maru.say_and_wait(
      'В последний раз мы были на море на летних сборах, на пляже у председателя, но в этот раз хочу, чтобы были только ты и я.',
    );
    era.printButton(
      '「В воскресенье всё равно нет дел — тогда выезжаем вместе」',
      1,
    );
    await era.input();
    await maru.say_and_wait('Отлично♪ Тогда и я соберу вещи к морю.');
    era.printButton(
      `(${y_call_m} только в такие моменты и выказывает эту бесхитростную сторону)`,
      1,
    );
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' запихиваешь в рот последний кусок зелени и думаешь.',
    ]);
    era.println();
    await era.printAndWait([
      'Время быстро тает в ожидании ',
      you.get_colored_name(),
      ' и ',
      maru.get_colored_name(),
      ' — и вот уже воскресенье.',
    ]);
    await era.printAndWait([
      'Та мчит во весь опор, и ',
      you.get_colored_name(),
      ' прибывает сюда раньше назначенного.',
    ]);
    await era.printAndWait(
      'Хоть сейчас и не сезон, на этот пляж всё равно съезжается много гостей.',
    );
    await maru.say_and_wait([callname, ', мне в этом как?']);
    await era.printAndWait([
      you.get_colored_name(),
      ' берёшь у ',
      maru.get_colored_name(),
      ' из рук сумку и смотришь на бикини внутри.',
    ]);
    await maru.say_and_wait('Сейчас весь пляж будет смотреть только на меня.');
    await era.printAndWait([
      you.get_colored_name(),
      ' думаешь, как ',
      maru.get_colored_name(),
      ' выглядит в купальнике, и тебя необъяснимо охватывает предвкушение.',
    ]);
    await maru.say_and_wait([callname, ', увидимся на пляже.']);
    await era.printAndWait([
      'У раздевалок ',
      you.get_colored_name(),
      ' ненадолго расстаётся с ',
      maru.get_colored_name(),
      '.',
    ]);
    era.println();
    await maru.say_and_wait(['Та-дам♪ ', callname, ', как тебе этот вид?']);
    // Do not translate this
    era.printWholeImage('姥爷_泳_半身', {
      width: 8,
      offset: 8,
    });
    await era.printAndWait([
      maru.get_colored_name(),
      ' хвастливо смотрит на ',
      you.get_colored_name(),
      '.',
    ]);
    era.printButton('「Непонятно, отчего так бесит」', 1);
    await era.input();
    await maru.say_and_wait([
      callname,
      'хочешь заполучить себе такого классного ',
      maru.sex_code === 1 ? ' парня' : 'девушку',
      ', да♪ Хм-хм.',
    ]);
    await era.printAndWait(
      'Вы нашли местечко поспокойнее и поставили зонт — сегодня погода особенно приятная.',
    );
    await maru.say_and_wait([
      callname,
      'Можешь намазать мне крем от солнца? Он в корзинке.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' достаёшь из корзины крем от солнца, выдавливаешь немного на ладонь и равномерно намазываешь ей спину — ',
      maru.sex,
      '.',
    ]);
    await maru.say_and_wait('Большое спасибо.');
    await era.printAndWait([
      'Уши всё подрагивают в такт музыке, ',
      you.get_colored_name(),
      ' вдруг захотелось подшутить над ней — ',
      maru.sex,
      '.',
    ]);
    era.printButton(
      `Тихонько подкрасться к её уху и крикнуть (пока не повышать связь) — ${maru.sex}.`,
      1,
    );
    era.printButton('…нет, лучше не стоит (повысить связь)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' тихонько подкрадываешься к её уху — ',
        maru.sex,
        '; ещё не подозревая, какая жуть сейчас случится, ',
        maru.sex,
        ' всё ещё недоумевает, почему руки остановились.',
      ]);
      era.printButton('「Ва!」', 1);
      await era.input();
      await maru.say_and_wait('Ай!');
      await era.printAndWait([
        maru.get_colored_name(),
        ' испугавшись, резко вздрогнула всем телом и лишь спустя миг пришла в себя.',
      ]);
      await maru.say_and_wait([callname, '!']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' делает глубокий вдох, пытаясь успокоиться.',
      ]);
      era.printButton(
        `Потому что ${y_call_m} уши выглядели так заманчиво, что захотелось подшутить.`,
        1,
      );
      await era.input();
      await maru.say_and_wait([
        'Хаа~ ',
        callname,
        ', ты и вправду совсем как ребёнок. Ты ещё кому-нибудь такое устраиваешь?',
      ]);
      era.printButton('「Только тебе.»', 1);
      await era.input();
      await maru.say_and_wait(
        'То есть мне выпала честь стать твоей первой жертвой?',
      );
      era.printButton('「А, нет, послушай, дай объясню.»', 1);
      await era.input();
      await maru.say_and_wait(
        'Я тоже дам тебе отведать того испуга, что получила только что!',
      );
      era.printButton('「Уаааааа!」', 1);
      await era.input();
      await era.printAndWait([
        'После этого тебе ещё долго пришлось уговаривать её полностью остыть — ',
        maru.sex,
        '.',
      ]);
    } else {
      await era.printAndWait([
        'Разрываясь между двумя яростными порывами, ',
        you.get_colored_name(),
        ' всё же отказывается от мысли разыграть и сосредоточивается, чтобы сделать ',
        maru.get_colored_name(),
        ' массаж.',
      ]);
      await era.printAndWait('Влажный ветер с моря добрался до суши.');
      await era.printAndWait('Всё не хочется покидать пляж.');
      await maru.say_and_wait(['Ветер стих, ', callname, '.']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' долго смотрит на море.',
      ]);
      await maru.say_and_wait('…. После заката взойдёт и луна.');
      await era.printAndWait(['Вдруг ', maru.sex, ' заговорила.']);
      era.printButton(
        '「И при восходе, и при закате ветер всё равно тихонько танцует.»',
        1,
      );
      await era.input();
      await maru.say_and_wait(['…… ', callname, ', можно ещё чуть ближе?']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' перенесла весь вес тела на ',
        you.get_colored_name(),
        ' руку, ',
        you.get_colored_name(),
        ' крепко сжимает её руку — ',
        maru.sex,
        '.',
      ]);
      await era.printAndWait(
        'Вы молча смотрите, как луна поднимается до середины неба.',
      );
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {CharaTalk} you 玩家
   * @param {string} callname 丸善斯基对玩家的称呼
   * @param {string} y_call_m 玩家对丸善斯基的称呼
   */
  async 99(maru, you, callname, y_call_m) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      maru.get_colored_name(),
      ' прошли через все трудности и наконец подтвердили чувства друг друга.',
    ]);
    await era.printAndWait([
      'От ',
      maru.get_colored_name(),
      ' получили бумаги для госорганов и бережно вписали свои имена в нужные графы.',
    ]);
    await era.printAndWait(
      'Договорившись о дне свадьбы, по обычаю вы временно не можете видеться.',
    );
    await era.printAndWait([
      'Вечером накануне свадьбы ',
      you.get_colored_name(),
      ' всё не может уснуть и просто берёт лежащий у кровати ',
      you.get_colored_name(),
      ' и ',
      maru.sex,
      ' совместный фотоальбом.',
    ]);
    await you.say_and_wait(
      'Это снимок после победы в дебютной скачке, когда праздновали в «Сайзерии»',
      true,
    );
    await era.printAndWait([
      'Плохо умеющая пользоваться телефоном ',
      maru.sex,
      ' больше любит сохранять снимками ',
      you.get_colored_name(),
      ' и ',
      maru.sex,
      ' воспоминания, ',
      you.get_colored_name(),
      ' переворачивает на вторую страницу.',
    ]);
    await you.say_and_wait(
      [
        'Это фото, где ты помогал(а) ',
        maru.sex,
        ' забрать на автосалоне модель Та',
      ],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' поднимаешь голову, бросаешь взгляд на модель Та на шкафу и переходишь на следующую страницу.',
    ]);
    await you.say_and_wait(
      'Это фото из медпункта после неудачной тренировки',
      true,
    );
    await era.printAndWait([
      maru.get_colored_name(),
      ' слушает стоящие рядом ретро-песни и отдыхает, ',
      maru.sex,
      ' её уши отбивают такт музыки.',
    ]);
    await you.say_and_wait(
      [
        'Тогдашняя ',
        maru.sex,
        ' всё ещё не бросила ',
        maru.elder_sibling_sex_title,
        ' замашки?',
      ],
      true,
    );
    await era.printAndWait([
      'С беспричинным раздражением ',
      you.get_colored_name(),
      ' просто резко шуршит страницами и в итоге останавливается на снимке, где ',
      you.get_colored_name(),
      ' и ',
      maru.sex,
      ' вместе снялись на летних сборах.',
    ]);
    await you.say_and_wait(
      [maru.sex, 'Уже тогда она видела во мне довольно близкого человека?'],
      true,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' смотришь на снимок, где ',
      you.get_colored_name(),
      ' насильно ',
      maru.sex,
      ' тащит за руку на совместное фото; растерянный вид ',
      you.get_colored_name(),
      ' и ',
      maru.sex,
      ' её улыбка составляют яркий контраст.',
    ]);
    await you.say_and_wait(
      'Тогда, чтобы избежать странных слухов, пришлось здорово постараться',
      true,
    );
    await era.printAndWait(
      'Вздыхаешь и в хорошем настроении переворачиваешь страницу',
    );
    await era.printAndWait([
      'в зимней одежде ',
      you.get_colored_name(),
      ' и ',
      maru.sex,
      ' на горе неподалёку — совместный снимок',
    ]);
    await you.say_and_wait(
      [
        'тогда ',
        maru.sex,
        ' и ты договорились на следующее Рождество вместе пройтись по берёзовой аллее',
      ],
      true,
    );
    await era.printAndWait([
      'Как раз когда ',
      you.get_colored_name(),
      ' собирается перевернуть страницу.',
    ]);
    await era.printAndWait('тук-тук-тук');
    era.printButton(`${y_call_m}?!`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' открываешь дверь — в повседневной одежде ',
      maru.sex,
      ' стоит в дверях.',
    ]);
    await maru.say_and_wait('В такую прекрасную ночь давай прокатимся');
    era.printButton('「Ага, поехали вместе」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' крепко берёшь за руку ',
      maru.get_colored_name(),
      ' и вместе бежите туда, где стоит Та.',
    ]);
    await maru.say_and_wait([
      callname,
      ', как хорошо, что я тебя встретила, спасибо тебе.',
    ]);
    await era.printAndWait(
      'На тихой ночной трассе снова поднимается влажный природный ветер.',
    );
  },
};
