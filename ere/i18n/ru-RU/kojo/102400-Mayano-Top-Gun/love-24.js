/**
 * @file 摩耶重炮 - 爱慕
 * @author 黑奴二号
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {string} callname 摩耶重炮对玩家的称呼
   */
  async 24(maya, callname) {
    await maya.say_and_wait('Maya с детства так тянулась к небу.');
    await maya.say_and_wait(
      'Когда Maya была крошкой, папа однажды поднял меня в небо.',
    );
    await maya.say_and_wait('Тот вид Maya, пожалуй, не забудет вовек.');
    await maya.say_and_wait(
      '『Когда вырастешь, увидишь пейзаж ещё красивее』 — так говорил папа.',
    );
    await maya.say_and_wait('А потом Maya попала в Трейсен.');
    await maya.say_and_wait(
      'А на скачках — получится ли снова почувствовать то же самое?',
    );
    await maya.say_and_wait(`Так Maya и ${callname} встретились.`);
    await maya.say_and_wait(
      'Столько всего нового попробовала, столько новых чувств узнала.',
    );
    await maya.say_and_wait('Поэтому…');
    await maya.say_and_wait(
      'Пока Maya не вырастет, всё время будь рядом, хорошо?',
    );
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {string} callname 摩耶重炮对玩家的称呼
   */
  async 49(maya, callname) {
    await maya.print_and_wait(
      `Однажды ${maya.name} откуда-то раздобыла таинственную книгу`,
    );
    await maya.say_and_wait(
      `Это та самая легендарная книга, что только взрослым? Если прочесть — Maya тоже станет взрослой?`,
    );
    await maya.say_and_wait(`Это…`);
    await maya.say_and_wait(`ауаааа…`);
    await maya.say_and_wait(
      `К… как и думала, для Maya такое ещё слишком рано!`,
    );
    await maya.print_and_wait(
      `Хотя на середине бросила — слишком возбуждающе, — содержимое всё равно произвело на ${maya.name} глубокое впечатление.`,
    );
    await maya.say_and_wait(`Но если это с ${callname} …?`);
    await maya.print_and_wait(
      `${maya.name} — гений, чему угодно научится вмиг — и кому-то очень скоро придётся прочувствовать это на себе.`,
    );
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} luna 鲁铎象征
   * @param {CharaTalk} ag 气槽
   * @param {CharaTalk} you 玩家
   * @param {string} callname 摩耶重炮对玩家的称呼
   * @param {PrintedSpan} callname_18 气槽对玩家的称呼
   * @param {PrintedSpan} m_call_k 摩耶重炮对富士奇石的称呼
   * @param {PrintedSpan} m_call_a 摩耶重炮对气槽的称呼
   */
  async 74(maya, luna, ag, you, callname, callname_18, m_call_k, m_call_a) {
    await era.printAndWait([
      'Как-то раз ',
      you.get_colored_name(),
      ' и ',
      maya.get_colored_name(),
      ' вместе вызвали в кабинет студсовета, и тогда…',
    ]);
    await maya.say_and_wait('Ваах! Это Maya выбрали гостьей на показ мод!?');
    await luna.say_and_wait(
      `Да, это тоже одна из рекламных акций академии. Спросили публику, какой победный костюм хотят увидеть —`,
    );
    await ag.say_and_wait(
      `А свадебный победный костюм с 『Кубка прекрасной мечты』 взял первое место… ты хозяйка этого костюма, вот и решили тебя побеспокоить.`,
    );
    await maya.say_and_wait(
      'Ваа! Maya тоже обожала тот наряд~! А? Точно! Тогда —',
    );
    await ag.say_and_wait(
      `…Конечно, я тоже участвую. Ведь я тоже обладающая свадебным нарядом ${ag.uma_sex_title}.`,
    );
    await ag.say_and_wait(
      `Ещё… в этой затее есть важный пункт: по подиуму тебя ведёт спутник.`,
    );
    await luna.say_and_wait(
      `Можно открытый набор, можно назначить. До срока решает сама гостья.`,
    );
    await maya.say_and_wait('Спутник… открытый набор или назначить? Но Maya…');
    era.printButton('「Как хочешь выбрать?」', 1);
    await era.input();
    await maya.say_and_wait(`…… ${callname} а ты как думаешь?`);
    await maya.say_and_wait([
      'Е-если открытый набор — фанаты наверняка обрадуются! Но попросить умеющего вести ',
      m_call_k,
      ' вроде тоже неплохо?',
    ]);
    await maya.say_and_wait(
      'Только… если бы кто-то сказал мне 『Назначь меня!』… тогда я…',
    );
    era.printButton('「М?」', 1);
    await era.input();
    await maya.say_and_wait('…Ну вот~!! Почему ты никак не поймёшь~!?');
    await maya.say_and_wait(
      'Ничего, ничего…! Ра~з так — Maya сама составит план операции!',
    );
    await era.printAndWait([
      maya.get_colored_name(),
      ' вроде как начала составлять какой-то план операции. ',
      you.get_colored_name(),
      ' решает пока побыть зрителем…',
    ]);
    await era.printAndWait(
      `Младшая Скаковая ${maya.uma_sex_title}「Топ Ган-семпай! Ты уже выбрала спутника? Всем очень любопытно!」`,
    );
    await maya.say_and_wait(
      'Спасибо~! Надо скорее найти добровольца~~! …(косится).',
    );
    await era.printAndWait(
      'Фанат「Жду событие! Если объявите набор спутника — я точно запишусь!」',
    );
    await maya.say_and_wait(
      'Maya такая популярная☆ Если никто сам не вызовется — так и быть, откроем набор~? …(косится).',
    );
    era.drawLine();
    await era.printAndWait(
      `Но прошло уже несколько дней, а ${maya.sex} всё никак не выбирала спутника. Пока ${you.name} думал(а), что же это такое…`,
    );
    await ag.say_and_wait(
      `Прошу прощения. Я пришла узнать твоё мнение… ты ведь понимаешь, о чём я?`,
    );
    era.printButton('「Про спутника, да?」', 1);
    await era.input();
    await ag.say_and_wait(
      `Я понимаю твои сомнения, но дальше ждать нельзя. Дай ответ поскорее —`,
    );
    await maya.say_as_unknown_and_wait([
      'Погоди~~! ',
      callname,
      ', это ещё что!?',
    ]);
    era.printButton('「!?」', 1);
    await era.input();
    await maya.say_and_wait([
      '『Ответить поскорее』 про 『спутника』…!? Ты будешь спутником ',
      m_call_a,
      ' !?',
    ]);
    era.printButton('「А?」', 1);
    await era.input();
    await maya.say_and_wait(
      'Maya… Maya тоже всё ждала, что ты сам вызовешься~!!',
    );
    era.printButton('「Что!?」', 1);
    await era.input();
    await maya.say_and_wait(
      `Ведь партнёр Maya — это ${callname} же! А чем самой тебя назначать, Maya куда счастливее, если ты сам вызовешься…`,
    );
    await maya.say_and_wait([
      'Поэтому Maya всё ждала, когда ты сам скажешь, а тут ',
      m_call_a,
      ' тебя назначила!',
    ]);
    await ag.say_and_wait(`Подожди! О чём ты? Мой спутник уже давно выбран.`);
    await maya.say_and_wait(
      'А!? …То-тогда твой 『ответ』 про 『спутника』 — это…?',
    );
    era.printButton('「Нас торопят подать заявку на спутника」', 1);
    await era.input();
    await maya.say_and_wait('…А~~! Так Maya всё перепутала!? Ура~~!');
    await maya.say_and_wait(
      'Хе… хе-хе… ошиблась, прости. Я уже думала, 『операция «сама не позову»』 провалилась —',
    );
    era.printButton('「『операция «сама не позову»』?」', 1);
    await era.input();
    await maya.say_and_wait('…Ой, влипла!');
    await maya.say_and_wait(
      'Уу~~ да! Maya хотела показать, какая она популярная, чтобы тебе стало неспокойно и ты сам сказал, что пойдёшь с ней!',
    );
    await maya.say_and_wait(
      'Maya хочет, чтобы тренер считал меня самой особенной, чтобы для тебя я была самой важной…',
    );
    era.printButton('「Дашь мне ещё один шанс?」', 1);
    await era.input();
    await maya.say_and_wait('…Ну… ну ладно… если только разок… можно.');
    era.println();

    era.printButton(
      `「Ты, конечно, самый важный для меня человек」(повысить отношения)`,
      1,
    );
    era.printButton(
      `「Позволь мне идти с тобой спутником」(пока не повышать)`,
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait(
        '…П-правда? Maya самая особенная? Самая важная, самая сверкающая?',
      );
      era.printButton('「Да!」', 1);
      await era.input();
      await maya.say_and_wait(
        'Эх-хе-хе……! Хоть операция и провалилась, Maya всё равно узнала твои чувства — итогом вполне довольна!',
      );
      await maya.say_and_wait(
        'Но~~ морально приготовься, окей? В тот день Maya заставит тебя сказать ещё~ более невозможные слова☆',
      );
      era.printButton('「Ещё более невозможные слова……!?」', 1);
      await era.input();
      await ag.say_and_wait([
        'Эх…… тогда я от имени ',
        callname_18,
        ' подам заявку. Только из-за тех «невозможных слов» неприятностей не натвори.',
      ]);
    } else {
      await maya.say_and_wait('……Хорошо! Эх-хе-хе, Maya так рада.');
      await ag.say_and_wait([
        'Тогда я от имени ',
        callname_18,
        ' подам заявку. Эх…… только в день мероприятия неприятностей не натвори.',
      ]);
      era.drawLine();
      await maya.say_and_wait(
        'Мм~~! Наконец-то настоящий выход~ Наряд тоже готов! Осталось только……',
      );
      era.printButton('「Осталась моральная подготовка」', 1);
      await era.input();
      await maya.say_and_wait(
        'Так-то оно так, только сердце колотится без остановки! Кажется, полной готовности не будет никогда~~ Но……',
      );
      await maya.say_and_wait(
        'Это значит, Maya вот настолько счастлива!…… На подиуме надо выложиться на полную.',
      );
      await era.printAndWait(
        `${you.name} и ${maya.name} набравшись духа, шагают на подиум.`,
      );
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} rice 米浴
   * @param {CharaTalk} you 玩家
   * @param {string} callname 摩耶重炮对玩家的称呼
   * @param {PrintedSpan} call_30 摩耶重炮对米浴的称呼
   * @param {string} self_call_30 米浴的自称
   * @param {PrintedSpan} r_call_m 米浴对摩耶重炮的称呼
   */
  async 89(maya, rice, you, callname, call_30, self_call_30, r_call_m) {
    await era.printAndWait(
      `${you.name} и ${maya.name} приглашены на какое-то мероприятие. Во всяком случае, так сказано — а само мероприятие……`,
    );
    await maya.say_and_wait(
      'Солнце просто слепит! Какой денёк для свадебного мероприятия☆ Maya обязательно сделает его супер-успешным~!',
    );
    era.printButton('「У тебя столько задора」', 1);
    await era.input();
    await maya.say_and_wait(
      'Потому что Maya выбрали моделью! Так хочется скорее надеть свадебное платье и притянуть все взгляды —',
    );
    await maya.say_and_wait(
      '— Э? Странно? Там оглядывается по сторонам разве не……',
    );
    await maya.say_and_wait([
      'Точно, это ',
      call_30,
      '! Ура~! Ты что, пришла посмотреть это мероприятие?',
    ]);
    await rice.say_and_wait(
      `Ах…… д-да…… Ведь свадебная церемония дарит столько счастья…… ${self_call_30} так давно этого ждала.`,
    );
    await rice.say_and_wait(`Поэтому тренировку закончила пораньше —`);
    await rice.say_and_wait(
      `Ауаа! Т-только что загремело-загрохотало,…… д-дождь!?`,
    );
    await era.printAndWait(
      `В этот момент внезапно пошёл дождь. ${you.name} сначала решил(а), что это всего лишь короткий ливень, но……`,
    );
    await era.printAndWait(
      'Съёмочный сотрудник「Плохо — всё никак не разведётся? Провести-то можно, только гостей почти нет…… Может, пока свернём мероприятие……」',
    );
    await maya.say_and_wait('Ннг~~~~~');
    await rice.say_and_wait(
      `П-прости…… прости! Что пошёл дождь — точно ${self_call_30} её вина, прости!`,
    );
    await rice.say_and_wait(
      `Всё из-за того, что ${self_call_30} прибежала сюда……!`,
    );
    era.printButton('「Это не твоя вина」', 1);
    await era.input();
    await maya.say_and_wait(
      'Вот именно! Да и мероприятие не отменили. Дождём не скрыть сияние Maya!',
    );
    await maya.say_and_wait(
      'Нет! Надо сказать — дождь заставит Maya сиять ещё ярче! Вы двое смотрите оттуда☆',
    );
    await maya.say_and_wait(
      'Динь-дон —♪ Всех заставила ждать☆ Пусть шествие Maya откроет мероприятие~!',
    );
    await era.printAndWait(
      'Женщина-фанатка「Маяно такая милая~! Ннг…… если б погода была чуть лучше……!」',
    );
    await maya.say_and_wait(
      'Дождинки — тоже украшения на Maya♪ Смотрите! Сверкает-блестит~☆',
    );
    await era.printAndWait(
      'Мужчина-фанат「……!! И правда! Под вспышками камер дождинки стали как пайетки……!」',
    );
    await maya.say_and_wait(
      'Правда♪ Но дальше будет ещё зрелищнее!……3……2……1 —',
    );
    await maya.say_and_wait('Солнце вышло —☆');
    await era.printAndWait('Фанаты「Вааааа~~~!!」');
    await rice.say_and_wait([
      r_call_m,
      `, ты такая молодец……! У всех улыбки на лицах…… словно ты всех заколдовала……!`,
    ]);
    await maya.say_and_wait(
      'Хе-хе, спасибо☆ Папа когда-то учил Maya различать виды облаков и угадывать, когда разведётся~',
    );
    await maya.say_and_wait(
      'Всё-таки папа Maya — пилот, который парит в небе! Хм-хм!',
    );
    era.printButton('「Поэтому ты и смогла сыграть на дожде?」', 1);
    await era.input();
    await maya.say_and_wait(
      'То~чно! Но на самом деле ни погода, ни программа не важны. Главное —',
    );
    await maya.say_and_wait('Maya станет солнцем для всех!');
    await maya.say_and_wait(
      'Когда Maya надевала это платье, в сердце поклялась. Осветить всех своим сиянием, чтобы они тоже засверкали.',
    );
    await maya.say_and_wait(
      `Потому что именно такой Maya больше всего хочет быть — зрелая ${maya.phy_sex_title}!`,
    );
    await rice.say_and_wait([
      '……!…… Э-это, ',
      r_call_m,
      ' и все вокруг сверкаете.',
    ]);
    await rice.say_and_wait(
      `Глядя на вас, ${self_call_30} её сердце тоже засияло, и она поняла, что надо ещё сильнее. Так что…… спасибо тебе!`,
    );
    await maya.say_and_wait(
      'Мероприятие было таким весёлым~! Но-о, дальше как раз — главный номер Maya! Шоу фейерверков!',
    );
    await maya.say_and_wait(
      '……На самом деле хотела в том самом сверкающем наряде вместе смотреть фейерверк. Только дождь его испачкал.',
    );
    await maya.say_and_wait(
      `План захвата ${callname} придётся оставить до следующего раза☆`,
    );
    era.println();

    era.printButton(
      '「В чём бы ты ни была, Маяно сияет ярче всех」(повысить отношения)',
      1,
    );
    era.printButton(
      '「Чтобы в следующий раз снова стать моделью, давай стараться дальше!」(пока не повышать)',
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await maya.say_and_wait('……!!');
      await maya.say_and_wait(
        'Ма-Maya…… захватили…… Maya сделали предложение~~!',
      );
      era.printButton('「Я ещё не делал(а) предложение!?」', 1);
      await era.input();
      await maya.say_and_wait(
        'Не стесняйся~! Ты же про то, что мы всегда будем бежать плечом к плечу, да?',
      );
      await maya.say_and_wait(
        'Теперь солнце тренера навечно Maya☆ Maya не проиграет~!',
      );
      await era.printAndWait([
        maya.get_colored_name(),
        ' так говорит и расцветает восторженной улыбкой.',
      ]);
      await maya.say_and_wait(
        'Йе-йе~☆ Спасибо всем за поддержку! Maya так счастлива~!',
      );
      await maya.say_and_wait(
        `Maya клянётся: и дальше вместе с ${callname} будет дарить всем сияние!`,
      );
      await maya.say_and_wait(`, правда! ${callname}♪`);
      era.printButton('「!…… Конечно, я тоже клянусь!」', 1);
      await era.input();
      await era.printAndWait('Услышав клятвы двоих, вся площадка ликует.');
    } else {
      await maya.say_and_wait(
        'Ладно! Не то что в следующий раз — и через раз Maya снова станет моделью. Maya будет всё лучше и лучше подходить этому наряду, и тогда —',
      );
      era.printButton('「И тогда?」', 1);
      await era.input();
      await maya.say_and_wait(
        'Тог— тогда…… когда Maya станет подходить этому наряду,…… э-это…… навсегда…… с Maya…… то есть —',
      );
      await maya.say_and_wait(
        'Ах!? — Ва-ваа! Фейерверк! С-смотри-смотри, тренер!',
      );
      await maya.say_and_wait(
        '……Дальше — п-посмотрели фейерверк, домой! Да и есть хочется…… э-это……',
      );
      await maya.say_and_wait(
        '……Слушай! Когда-нибудь Maya обязательно наберётся храбрости и договорит те слова.',
      );
      await maya.say_and_wait('……жди Maya!');
    }
    return ret;
  },
};
