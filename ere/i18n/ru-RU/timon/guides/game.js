/**
 * @file 新手教学
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
   * @param {CharaTalk} you 玩家
   * @param {boolean} new_save 是否是新存档
   */
  async game_start(minoru, you, new_save) {
    await era.printAndWait([
      you.get_colored_name(),
      ' приходит в академию, где ему предстоит работать. У самых ворот, с головы до ног в изумрудных тонах, ждёт ',
      minoru.sex_code === 1 ? 'подтянутый мужчина' : 'красивая женщина',
      '.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' узнаёт: ',
      minoru.sex,
      ' — из тех, кто вёл последнее собеседование.',
    ]);
    era.println();
    if (!new_save) {
      await minoru.say_as_unknown_and_wait('Здравствуйте, новый…');
      era.println();

      await era.printAndWait([
        'Встретившись взглядом, ',
        minoru.phy_sex_title,
        ' на миг замялся(ась) перед ',
        you.get_colored_name(),
        ', но быстро пришёл(шла) в себя.',
      ]);
    } else {
      await era.printAndWait([
        'Встретившись взглядом, ',
        minoru.phy_sex_title,
        ' смотрит на ',
        you.get_colored_name(),
        ' и тут же расплывается в сияющей улыбке.',
      ]);
    }
    era.println();

    await minoru.say_as_unknown_and_wait([
      'Здравствуйте, новый тренер ',
      you.adult_sex_title,
      '.',
    ]);
    await minoru.say_as_unknown_and_wait(
      'Я секретарь директора, Хаякава Тадзуна.',
    );
    await minoru.say_and_wait('Добро пожаловать в академию Трейсен.');
    await minoru.say_and_wait(
      'Чтобы вы быстрее освоились, я буду давать советы и помогать.',
    );

    if (!new_save) {
      era.println();

      await era.printAndWait([minoru.sex, ' щурится и продолжает.']);
      era.println();

      await minoru.say_and_wait(
        'Впрочем, при вашем опыте вы наверняка будете как рыба в воде.',
      );
    }
    era.drawLine();
    await minoru.say_and_wait([
      'Как тренеру, вам, разумеется, нужно найти себе напарницу — ',
      minoru.uma_sex_title,
      '.',
    ]);
    await minoru.say_and_wait(
      'Как раз в Трейсене появилось немало многообещающих новичков.',
    );
    await minoru.say_and_wait('Что ж, сходим вместе на тренировочное поле?');
  },
  /**
   * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
   * @param {CharaTalk} you 玩家
   */
  async recruit(minoru, you) {
    await era.printAndWait([
      'У тренировочного поля ',
      minoru.get_colored_name(),
      ' останавливается.',
    ]);
    await minoru.say_and_wait(
      'Центральная академия Трейсен каждый год принимает около двух тысяч учениц. Почти все они — элита, прошедшая через множество испытаний с мечтой подняться на вершину.',
    );
    await minoru.say_and_wait(
      'Но выходит порой не так, как хочется: жестокая конкуренция, травмы… а иногда просто невезение.',
    );
    await era.printAndWait([minoru.get_colored_name(), ' тихо вздыхает.']);
    await minoru.say_and_wait([
      'По самым разным причинам до открытых скачек (OP) благополучно добирается меньше десятой части ',
      minoru.uma_sex_title,
      '.',
    ]);
    await era.printAndWait([
      minoru.get_colored_name(),
      ' поворачивается к ',
      you.get_colored_name(),
      ', и лицо у неё становится серьёзным.',
    ]);
    await minoru.say_and_wait([
      'Как тренер, вы не можете выйти на дорожку вместо ',
      minoru.uma_sex_title,
      '.',
    ]);
    await minoru.say_and_wait(
      'Поэтому за пределами трассы вы обязаны поддерживать свою подопечную изо всех сил.',
    );
    await minoru.say_and_wait([
      'И в заботе о теле и духе, и в тренировках к скачкам — ',
      minoru.couple_title,
      ' на пути к мечте нужен взрослый по имени «тренер»: его наставление и его помощь.',
    ]);
    await minoru.say_and_wait(
      'Так что, пожалуйста, ясно осознайте ту ответственность, что ляжет на вас.',
    );
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' поправляет галстук-бабочку, показывая свою решимость.',
    ]);
    await minoru.say_and_wait('Прекрасно.');
    await era.printAndWait([
      minoru.get_colored_name(),
      ' кивает и ведёт ',
      you.get_colored_name(),
      ' к ученицам на тренировочном поле.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {boolean} has_recruit
   */
  async recruit_end(minoru, you, has_recruit) {
    era.drawLine();
    if (has_recruit) {
      await era.printAndWait([
        'Набор прошёл гладко, и ',
        you.get_colored_name(),
        ' вместе с новой напарницей подходит к ',
        minoru.get_colored_name(),
        '.',
      ]);
      await minoru.say_and_wait([
        'Тренер ',
        you.adult_sex_title,
        ' уже нашёл(нашла) подопечную. Что ж…',
      ]);
      await era.printAndWait([minoru.get_colored_name(), ' слегка кланяется.']);
      await minoru.say_and_wait(
        'Хаякава заранее желает вам и вашей подопечной трёх лет удачи и попутного ветра.',
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' не нашёл(нашла) подходящую подопечную и возвращается один(одна) к ',
        minoru.get_colored_name(),
        '.',
      ]);
      await minoru.say_and_wait([
        'Тренер ',
        you.adult_sex_title,
        ', удалось найти напарницу?',
      ]);
      era.printButton('«Подходящих уже разобрали.»', 1);
      era.printButton(
        '«Стыдно признаться, но я, похоже, никого не заинтересовал(а).»',
        2,
      );
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' нарочито разводит руками, изображая крайнее огорчение.',
        ]);
        await era.printAndWait(
          'Сколько тут правды, а сколько притворства — может, и неважно.',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' смущённо разводит руками, изображая крайнее огорчение.',
        ]);
      }
      era.println();

      await minoru.say_and_wait('Вот как…');
      await minoru.say_and_wait(
        'Что ж, загляните попозже — может, и найдётся подходящая ученица.',
      );
      await minoru.say_and_wait(
        'А если кто-то уже на примете, можно попросить директора.',
      );
      await era.printAndWait('Вы ушли с тренировочного поля.');
    }
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_train(minoru, you) {
    await minoru.say_and_wait(
      'После набора партнёрши можно вести её на тренировочное поле и проводить тренировки.',
    );
    await minoru.say_and_wait(
      'Тренировки делятся примерно на пять направлений: скорость, выносливость, сила, воля и интеллект.',
    );
    await minoru.say_and_wait(
      'Базовые характеристики подопечной растут в основном от тренировок, хотя бывают и другие пути.',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      ' хлопает в ладоши, давая ',
      you.get_colored_name(),
      ' знак собраться.',
    ]);
    await minoru.say_and_wait(
      '…Тренировки тратят силы и энергию. Если заставлять тренироваться в усталости — можно получить травму.',
    );
    await minoru.say_and_wait('…На это особенно обратите внимание.');
    await era.printAndWait([
      'Говоря это, ',
      minoru.get_colored_name(),
      ' на миг выдаёт горечь, но быстро берёт себя в руки и выдавливает улыбку.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_register(minoru, you) {
    await minoru.say_and_wait(
      'Это таблица ближайших скачек — пожалуйста, ознакомьтесь.',
    );
    await minoru.say_and_wait(
      'Чтобы записать подопечную, достаточно выбрать нужную скачку.',
    );
    await minoru.say_and_wait(
      'Длина и покрытие трасс разные — выбирайте по пригодности партнёрши.',
    );
    await minoru.say_and_wait(
      'Участие тоже тратит силы и энергию, а после скачки на время наступает усталость.',
    );
    await minoru.say_and_wait(
      '…Бывали дрянные тренеры, которые, не глядя на состояние, гнали подопечную в тяжёлую серию…',
    );
    await minoru.say_and_wait([
      'Так не только не выигрывают — ещё и калечат. Тренер-',
      you.adult_sex_title,
      ', по возможности так не поступайте.',
    ]);
    await minoru.say_and_wait(
      'Кроме того, если перед скачкой случилось непредвиденное — травма или конфликт расписания — отступить тоже вариант.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_trainer_office(minoru, you) {
    await era.printAndWait([
      minoru.get_colored_name(),
      ' ведёт ',
      you.get_colored_name(),
      ' в кабинет — внутри коллеги.',
    ]);
    era.println();
    await minoru.say_and_wait(
      'Здесь вы обычно ведёте дела; другие тренеры тоже часто заглядывают.',
    );
    await minoru.say_and_wait('Постарайтесь ладить с коллегами.');
  },
  /**
   * @param {CharaTalk} minoru
   * @param {PrintedSpan} call_305
   */
  async school_clinic(minoru, call_305) {
    await minoru.say_and_wait([
      'Это медпункт академии. Школьный врач ',
      call_305,
      ' здесь… «появляется». Да, именно появляется.',
    ]);
    era.println();
    await era.printAndWait([
      minoru.sex,
      ' смущённо трёт щёку — неужели ',
      call_305,
      ' проблемный человек?',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_god(minoru, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      minoru.get_colored_name(),
      ' подходят к фонтану со статуями трёх богинь-умамусумэ: вода журча льётся из кувшинов у них на плечах.',
    ]);
    era.println();

    await minoru.say_and_wait(
      'Вы наверняка видели эти статуи ещё на стажировке.',
    );
    await minoru.say_and_wait('Время идёт, и вера потихоньку слабеет.');
    await minoru.say_and_wait('Но для нас они существуют по-настоящему…');
    await minoru.say_and_wait('…Три богини… должны быть настоящими.');
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      ' тихо бормочет что-то ещё, но вдруг налетает ветер — и слова ',
      minoru.sex,
      ' тают в воздухе.',
    ]);
    era.println();

    await minoru.say_and_wait(
      'В общем, если будет тяжело на душе, приходите сюда помолиться.',
    );
    await minoru.say_and_wait(
      'Говорят, в марте молитва здесь имеет особую силу.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_atrium(minoru, you) {
    await minoru.say_and_wait(
      'Это внутренний двор — многие ученики и учителя приходят сюда отдохнуть.',
    );
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      ' показывает в угол двора, ',
      you.get_colored_name(),
      ' смотрит туда и видит дупло сухого дерева — ствол такой, что не обхватить, высотой по пояс.',
    ]);
    era.println();

    await minoru.say_and_wait(
      'А кто пал духом, тот нарочно приходит покричать в это дупло, чтобы выпустить пар.',
    );
    await minoru.say_and_wait([
      'Так что, тренер ',
      you.adult_sex_title,
      ', если услышите поблизости крики — не пугайтесь.',
    ]);
  },
  /** @param {CharaTalk} minoru */
  async school_rooftop(minoru) {
    await minoru.say_and_wait(
      'В фильмах и сериалах ученики вечно на крыше: то бэнто едят, то тайные совещания.',
    );
    await minoru.say_and_wait(
      'На деле эта «достопримечательность» слишком популярна — на крыше Трейсена побыть наедине почти невозможно, хе-хе.',
    );
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   * @param {PrintedSpan} chairman
   */
  async school_chairman(minoru, you, chairman) {
    await minoru.say_and_wait([
      'Это кабинет председателя. Если нужно — обычно здесь найдёте ',
      chairman,
      '.',
    ]);
    await minoru.say_and_wait([
      'Хорошие отношения с председателем могут помочь тренеру-',
      you.adult_sex_title,
      ' с продвижением.',
    ]);
    era.println();

    await era.printAndWait([
      minoru.get_colored_name(),
      ' подмигивает ',
      you.get_colored_name(),
      '.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async school_visitors(minoru, you) {
    await minoru.say_and_wait(
      'Когда приходят гости извне, школа устраивает встречи в этих комнатах.',
    );
    await minoru.say_and_wait([
      'И к тренеру-',
      you.adult_sex_title,
      ' наверняка наведаются журналисты.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async out(minoru, you) {
    await minoru.say_and_wait([
      'Выйдя из ворот Трейсена, можно пойти к речке, на торговую улицу, в святилище или к вокзалу… подробности тренер-',
      you.adult_sex_title,
      ' пусть исследует сам(а).',
    ]);
    await minoru.say_and_wait(
      'Когда не занята делами школы, я обычно у ворот. Если что — ищите меня здесь.',
    );
    await minoru.say_and_wait(
      '…Но не делайте этого, когда вышли вместе с подопечной.',
    );
    await era.printAndWait([
      minoru.get_colored_name(),
      ' машет ',
      you.get_colored_name(),
      ' и уходит к воротам.',
    ]);
  },
  /**
   * @param {CharaTalk} minoru
   * @param {CharaTalk} you
   */
  async office_sex(minoru, you) {
    await minoru.say_and_wait('Ах, вот какая, оказывается, просьба…');
    await era.printAndWait([
      minoru.get_colored_name(),
      ' — взгляд как клинок вонзается в ',
      you.get_colored_name(),
      ' — в пылающие щёки…',
    ]);
  },
};
