/**
 * @file 奇锐骏 - 爱慕
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

module.exports = {
  async '49-before'(acute) {
    await era.printAndWait([
      'В последнее время, неизвестно почему, ',
      acute.get_colored_name(),
      ' часто сидит в дупле сухого дерева во внутреннем дворе.',
    ]);
    await era.printAndWait([
      'Несколько дней назад ты украдкой пошёл(шла) следом и смотрел(а) издалека: ',
      acute.sex,
      ' будто о чём-то думала в дупле.',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait([
      'Если хочешь лучше узнать ',
      acute.get_colored_name(),
      ', сходи посмотреть дупло сухого дерева во дворе?',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async 49(acute, you) {
    await era.printAndWait(
      'В перерыве тренировки ты один(а) пришёл(шла) во внутренний двор.',
    );
    await era.printAndWait([
      'Увидел(а) дупло, где иногда сидит ',
      acute.get_colored_name(),
      ', и невольно пошёл(шла) туда.',
    ]);
    await era.printAndWait(
      'Наклонился(ась), заглянул(а) ближе — а внутри неожиданно тесно.',
    );
    await era.printAndWait(
      'Не поймёшь, концы ветвей это или корни: чёрные следы, неровная поверхность, между ними мелькают чёрные муравьи. Сидеть внутри, ясно, было бы несладко.',
    );
    await era.printAndWait([
      'Почему тогда ',
      acute.get_colored_name(),
      ', сидя внутри, так себе находит покой?',
    ]);
    await era.printAndWait('Думал(а) так и сяк — и всё равно не взять в толк.');
    await era.printAndWait('Вздохнул(а)「ха」 и уж собирался(ась) встать——');
    await you.say_and_wait('Хуа!?');
    await era.printAndWait(
      'Вдруг ноги будто толкнула огромная сила. Небо и земля перевернулись. Тебя кувырком「вбросило」 в дупло——',
    );
    await era.printAndWait('Что происходит!?');
    await era.printAndWait(
      'Едва хотел(а) закричать от этой непонятки — и в перевёрнутом небе всплыло до боли знакомое лицо.',
    );
    era.printButton(`「${acute.name}!」`, 1);
    await era.input();
    await era.printAndWait([
      'Сомнение, что рвалось криком, при виде ',
      acute.get_colored_name(),
      ' с детски-возбуждённым лицом стало удивлением.',
    ]);
    await era.printAndWait(
      'А следом это удивление снова стало новым вопросом.',
    );
    era.printButton(`「${acute.name}?」`, 1);
    await era.input();
    await era.printAndWait('Это был второй крик.');
    await era.printAndWait(
      'Не как первая растерянность и не как удивление в первом крике: в этом — больше недоумения.',
    );
    await era.printAndWait([
      'До сих пор ',
      you.get_colored_name(),
      ' никогда не видел(а) такого детски-возбуждённого лица у ',
      acute.get_colored_name(),
      '.',
    ]);
    await era.printAndWait('А сейчас вдруг увидел(а).');
    await era.printAndWait([
      'От этого ',
      you.get_colored_name(),
      ' невольно и обрадовался(ась), и ещё сильнее изумился(ась)——',
    ]);
    await era.printAndWait([
      'Детски-радостная ',
      acute.get_colored_name(),
      ' перед глазами — та, которую ',
      you.get_colored_name(),
      ' знает: всегда кроткая ',
      acute.get_colored_name(),
      '?',
    ]);
    await era.printAndWait([
      'А ',
      acute.get_colored_name(),
      ' перед глазами будто услышала, что у ',
      you.get_colored_name(),
      ' в сердце такое недоумение. Услышав ',
      you.get_colored_name(),
      ' второй крик, ',
      acute.sex,
      ' — лицо сменилось: первая радость стёрлась, и она почему-то замерла.',
    ]);
    await era.printAndWait([
      acute.sex,
      ' замерла, ',
      you.get_colored_name(),
      ' растерянно замер(ла) тоже, и так ',
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' замерли вместе.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' лежит в дупле вверх ногами, за ноги, а ',
      acute.sex,
      ' держит ',
      you.get_colored_name(),
      ' за ноги и всем телом накрывает дупло.',
    ]);
    await era.printAndWait([
      acute.sex,
      ' Склонив голову, сквозь груди, что закрывают середину, смотрит на ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' запрокинув голову, изо всех сил сквозь груди в середине смотрит — ',
      acute.sex,
      '.',
    ]);
    await era.printAndWait('……');
    await era.printAndWait([
      'Спустя добрую паузу ',
      acute.get_colored_name(),
      ' будто что-то поняла: покраснела до ушей.',
    ]);
    await era.printAndWait('………');
    await era.printAndWait([
      'Наконец тебя выпустили из борцовского приёма ',
      acute.get_colored_name(),
      ' — и видишь, как ',
      acute.get_colored_name(),
      ' в панике извиняется.',
    ]);
    await era.printAndWait([
      'Выходит, ',
      acute.get_colored_name(),
      ' как всегда пришла во двор сесть в дупло отдохнуть и нечаянно увидела твою спину, когда ты нагнулся(ась) к дуплу.',
    ]);
    await era.printAndWait([
      'Потом, непонятно отчего,「интерес взыграл」. Подхватила за ноги и вжала ',
      you.get_colored_name(),
      ' в дупло.',
    ]);
    await you.say_and_wait('……');
    await acute.say_and_wait('……');
    await era.printAndWait([
      'Оба молчите, не знаете что сказать, и видишь: у ',
      acute.get_colored_name(),
      ' красные щёки так и не сошли. Взгляд мечется, будто прячет что-то несказанное.',
    ]);
    await era.printAndWait('……Что за мысли?');
    await era.printAndWait([
      'Честно говоря, ',
      you.get_colored_name(),
      ' не очень выговорит. ',
      acute.get_colored_name(),
      ' кажется, тоже: стыдно, не решается сказать.',
    ]);
    await era.printAndWait([
      'Вы молча не смотрите друг другу в лица и вместе отворачиваетесь.',
    ]);
    await era.printAndWait(
      'Смотришь на дупло, что сначала казалось тесным, в сердце и жалость, и желание невольно разбить эту неловкую тишину — открываешь рот——',
    );
    await you.say_and_wait('……Большое же.');
    await acute.say_and_wait('……М——');
    await era.printAndWait(
      'Неизвестно, о чём вы так молча договорились, — согласно киваете——',
    );
  },
  async '74-before'(acute) {
    await era.printAndWait([
      'В последнее время с ',
      acute.get_colored_name(),
      ' вы проводите вместе всё больше времени.',
    ]);
    await era.printAndWait([
      'Даже врозь в голове всё крутится — ',
      acute.sex,
      '.',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait([
      'Может, с ',
      acute.get_colored_name(),
      ' можно шагнуть ещё дальше?',
    ]);
    await era.printAndWait([
      '……Если решишься, позови ',
      acute.get_colored_name(),
      ' на свидание к станции.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {string} callname 奇锐骏对玩家的称呼
   */
  async 74(acute, you, callname) {
    await era.printAndWait([
      'С ',
      acute.get_colored_name(),
      ' вы на свидании перед станцией……',
    ]);
    await acute.say_and_wait([
      'Эм…… ',
      you.actual_name,
      ' -кун. Почему обязательно на станцию?',
    ]);
    await era.printAndWait('М…… хороший вопрос.');
    await era.printAndWait([
      'С точки зрения ',
      you.get_colored_name(),
      ', если вы с ',
      acute.get_colored_name(),
      ' вдвоём ушли куда-то без всех — куда ни пойди, это уже свидание, нет?',
    ]);
    await era.printAndWait(
      'И всё же свиданием считается только если пришли на станцию?',
    );
    await era.printAndWait('Если это не чья-то божественная злая шутка, ');
    await era.printAndWait('тогда, выходит……');
    era.println();

    era.printButton(`Признаться ${acute.name} в любви. (поднять отношения)`, 1);
    era.printButton('……Может, тебе показалось. (пока не поднимать)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        '……Зачем так упирать на「свидание」 — ещё спрашивать?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' любишь ',
        acute.get_colored_name(),
        ', поэтому под предлогом свидания хочешь признаться — ',
        acute.sex,
        '.',
      ]);
      await era.printAndWait('——Кроме этого, разве есть другая причина?');
      await era.printAndWait([
        'Да, ',
        you.get_colored_name(),
        ' любит ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Это не какая-то страшная тайна, а только факт, который ты раз за разом узнавал(а) в каждом ударе сердца.',
      );
      await era.printAndWait(
        'Пот на тренировочном поле — готовность одолеть любую трудность.',
      );
      await era.printAndWait(
        'Мягкость — даже в усталости улыбкой встретить всё, успокоив сердце.',
      );
      await era.printAndWait('Сколько дней и ночей вы провели вместе,');
      await era.printAndWait('сколько раз вместе хрустели сушёной редькой.');
      await era.printAndWait(
        'Живёте под одним огромным небом — и ни разу не было досуга взглянуть на звёзды.',
      );
      await era.printAndWait(
        'Потому что касание кончиков пальцев, может, и есть сон, выкованный чудом.',
      );
      await era.printAndWait(
        'Небо вдруг пролилось дождём, капли стучат по навесу станции.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' и ',
        acute.get_colored_name(),
        ' сидите вместе, кап-кап, сердце слева колотится.',
      ]);
      await you.say_and_wait(
        ['Да, соберись, ', you.actual_name, ', соберись.'],
        true,
      );
      await era.printAndWait([
        'Как ',
        acute.get_colored_name(),
        ' — трудиться, быть смелым, не ломаться.',
      ]);
      await era.printAndWait(
        'Сердце слева колотится, кап-кап, кончики пальцев тихо ползут ближе.',
      );
      await you.say_and_wait(
        [
          'Да, смотри — ',
          acute.sex,
          ' же, ',
          you.actual_name,
          ', смотри — ',
          acute.sex,
          ' же.',
        ],
        true,
      );
      await era.printAndWait([
        'В капели ',
        acute.get_colored_name(),
        ' подняла голову.',
      ]);
      await era.printAndWait([
        acute.sex,
        ' — взгляд как всегда уходит в даль, неизвестно куда.',
      ]);
      await you.say_and_wait(
        ['Скажи — ', acute.sex, ' же, скажи — ', acute.sex, ' же.'],
        true,
      );
      await era.printAndWait([
        'Да, скажи — ',
        acute.sex,
        ' же, ',
        you.actual_name,
        '.',
      ]);
      await era.printAndWait([
        'Скажи ',
        acute.get_colored_name(),
        ', как сильно любишь — ',
        acute.sex,
        '.',
      ]);
      await era.printAndWait(
        'Губы чуть дрожат, слова, что рвутся наружу, стынут в горле алмазной крошкой и перекрывают путь.',
      );
      await you.say_and_wait(
        ['Скажи — ', acute.sex, ' же, скажи — ', acute.sex, ' же.'],
        true,
      );
      era.printButton('「Я, я…… ты мн——」', 1);
      await era.input();
      await acute.say_and_wait('Ты мне нравишься, тренер.');
      await you.say_and_wait('……Э?');
      await acute.say_and_wait('——————');
      await era.printAndWait(
        'Воздух в миг, когда падает капля, застыл вместе с этим мгновением.',
      );
      await era.printAndWait([
        'В ушах отдаётся голос, которого ',
        you.get_colored_name(),
        ' не должен(на) был(а) слышать.',
      ]);
      await era.printAndWait([
        'Всегда смотревшая вперёд ',
        acute.get_colored_name(),
        ', неизвестно когда ',
        acute.sex,
        ' свернула взгляд и смотрит на ничем не приметного ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('Так не должно быть…… так не должно, правда?');
      await era.printAndWait([
        'Такая, как ',
        acute.get_colored_name(),
        ', крепкая, смелая ',
        acute.phy_sex_title,
        ', как она может……',
      ]);
      await acute.say_and_wait([
        'Ты мне и правда нравишься, ',
        you.actual_name,
        ' -кун.',
      ]);
      await era.printAndWait([
        'На этот раз ',
        acute.sex,
        ' — голос уже не тихий.',
      ]);
      await era.printAndWait([
        'Мягкий и твёрдый взгляд вместе со стыдливым румянцем смотрит на ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton('「Я, я……」', 1);
      await era.input();
      await acute.say_and_wait([
        'Не спеши, ',
        callname,
        '. Говори потихоньку～',
      ]);
      era.printButton(`「Я тоже—— я тоже люблю тебя, ${acute.name}!」`, 1);
      await era.input();
      await era.printAndWait('————————');
      await era.printAndWait('Это было ясное после полудня.');
      await era.printAndWait('Под дождём — не сильным и не слабым.');
      await era.printAndWait(
        'Двое прятались от дождя под маленьким навесом станции,',
      );
      await era.printAndWait('тихо, сами не заметив, тянулись друг к другу……');
      await era.printAndWait('……………………');
      await era.printAndWait([
        '【С ',
        acute.get_colored_name(),
        ' вы стали парой!】',
      ]);
    } else {
      await era.printAndWait([
        'Чтобы встречаться со своей подопечной ',
        acute.uma_sex_title,
        ', разве нужен повод?',
      ]);
      await era.printAndWait([
        'Хочется быть с ',
        acute.get_colored_name(),
        ', с ',
        acute.get_colored_name(),
        ' вместе — радостно, вот и весь повод.',
      ]);
      await era.printAndWait('Тряхнул(а) головой и смахнул(а) лишнюю тревогу.');
      await era.printAndWait('………………');
      await era.printAndWait([
        'С ',
        acute.get_colored_name(),
        ' перед станцией вы провели радостное время.',
      ]);
    }
    return ret;
  },
  async '89-before'(acute, you) {
    await era.printAndWait([
      'Любовь с ',
      acute.get_colored_name(),
      ' — и правда огромное счастье.',
    ]);
    await era.printAndWait([
      'Но ',
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' каждый раз обнимаетесь только там, где вас никто не увидит.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' Всё кажется, что в этой тайком-прячущейся возне есть что-то неладное.',
    ]);
    await era.printAndWait([
      'Хотя едва эти тревоги выскажешь ',
      acute.get_colored_name(),
      ', ',
      acute.sex,
      ' всегда с улыбкой говорит',
    ]);
    await acute.used_to_say_and_wait(
      'Ничего, даже так, как сейчас, я уже очень счастлива.',
    );
    await era.printAndWait([
      'Но прятаться, будто это тайная связь, — разве это честно по отношению к ',
      acute.get_colored_name(),
      '?',
    ]);
    await era.printAndWait([
      '……Может, ',
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' сможете открыть эту любовь.',
    ]);
    await era.printAndWait(
      'Открыть эту любовь перед всеми в Трейсен, пожалуй, потребует【воли как у стали】.',
    );
    await era.printAndWait(
      'Но если в сердце уже нет смуты и ты решил(а) сделать этот шаг——',
    );
    await era.printAndWait([
      'Тогда с ',
      acute.get_colored_name(),
      ' идите на свидание во внутренний двор.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} tama 玉藻十字
   * @param {CharaTalk} you 玩家
   * @param {string} callname 奇锐骏对玩家的称呼
   */
  async 89(acute, tama, you, callname) {
    tama.name = `Некая кансайская ${tama.uma_sex_title}`;
    await era.printAndWait([
      ' В оживлённом дворе терпеть взгляды других ',
      acute.uma_sex_title,
      ' и встречаться — нужна огромная сила воли……',
    ]);
    await acute.say_and_wait('А…… здесь свидание? Я не против～');
    await era.printAndWait([
      acute.get_colored_name(),
      ' кажется, вовсе не заботит взгляды вокруг ',
      acute.uma_sex_title,
      '……',
    ]);
    await era.printAndWait([
      'А шага по-настоящему не хватает смелости сделать ',
      you.get_colored_name(),
      ' самому(ой).',
    ]);
    await era.printAndWait([
      '——Чувствуешь ',
      acute.get_colored_name(),
      ' — взгляд полный ожидания.',
    ]);
    await era.printAndWait('………………');
    await you.say_and_wait('Ну сколько ещё тебе быть трусом?');
    await era.printAndWait('В полузабытьи в сердце мелькнула такая фраза.');
    await era.printAndWait('В одно мгновение тело пронзил импульс——');
    await acute.say_and_wait(['Что такое, ', callname, '……н!']);
    await era.printAndWait([
      'Не успела ',
      acute.get_colored_name(),
      ' спросить, как ',
      you.get_colored_name(),
      ' уже обнял(а) ',
      acute.get_colored_name(),
      '.',
    ]);
    await era.printAndWait('Губы к губам, сладкое дыхание проникает в сердце.');
    await era.printAndWait(
      'Один напорист, другой медлит, потом врата сбиты. Потом яростный обмен——',
    );
    await era.printAndWait('…………');
    await you.say_as_passer_by_and_wait(
      'Репостчик',
      'А, смотри-смотри, во дворе целуются.',
    );
    await you.say_as_passer_by_and_wait(
      'Юзер Красной лошадки',
      'Ого, правда что ли!? Снимай скорее, сначала в блог～',
    );
    await tama.say_and_wait([
      'Ну и слащавая парочка, да ещё наша ',
      acute.uma_sex_title,
      ', вот теперь крышка.',
    ]);
    await era.printAndWait('…………');
    await acute.say_and_wait([
      'Нн～～～ха…… ',
      callname.substring(0, 1),
      ', ',
      callname,
      '——',
    ]);
    await era.printAndWait([
      'В объятиях ',
      acute.get_colored_name(),
      ', щёки горят, взгляд мутный, смотрит на тебя.',
    ]);
    await era.printAndWait('Не отказ и не согласие — скорее и туда, и сюда……');
    await era.printAndWait(
      'Зачем ты это сделал(а)? Чем кончится такая смелость?',
    );
    await era.printAndWait('Всё это — как угодно.');
    await era.printAndWait('Хотя бы сейчас…… сейчас.');
    await era.printAndWait('Сейчас счастлив(а) — этого довольно, да?');
  },
  async '99-before'(acute, you) {
    await era.printAndWait(
      '【Не жалей парчи с золотой нитью, жалей юные годы,】',
    );
    await era.printAndWait(
      '【Цветок расцвёл — ломай, пока можно; не жди, пока нечего ломать.】',
    );
    await era.printAndWait('………………');
    await era.printAndWait([
      'С ',
      acute.get_colored_name(),
      ' вы любите друг друга уже немало дней.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' каждый день встаёте в один час, едите в один час, тренируетесь в один час, бежите в один час.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' всегда бережёте друг друга, ',
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' всегда неразлучны.',
    ]);
    await era.printAndWait([
      'Без сомнения, ',
      you.get_colored_name(),
      ' любит ',
      acute.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' думает: ',
      acute.get_colored_name(),
      ' тоже любит ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'Именно поэтому ',
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' можете вместе проходить каждую мелочь тренировок и жизни.',
    ]);
    await era.printAndWait(
      '——Но разве такая жизнь и правда будет длиться всегда?',
    );
    await era.printAndWait('………………');
    await era.printAndWait('Годы мчатся со временем, воля уходит с днями,');
    await era.printAndWait('Три года всегда тихо утекают.');
    await era.printAndWait([
      'Пусть это всего лишь трёхлетний золотой сон, дни любви с ',
      acute.get_colored_name(),
      ' — самое счастливое время в жизни ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait(
      'Но если не хочешь отпускать это счастье и хочешь жечь жаркое серое пламя любви до конца жизни.',
    );
    await era.printAndWait([
      '——Тогда с ',
      acute.get_colored_name(),
      ' заключи【уговор вернуться】и【клятву прийти вновь】.',
    ]);
    await era.printAndWait([
      'Когда всё будет готово, ',
      acute.sex,
      ' будет ждать на крыше ',
      you.get_colored_name(),
      '.',
    ]);
  },
  async '99-notify'(acute, you) {
    await era.printAndWait([
      'Когда всё будет готово, ',
      acute.sex,
      ' будет ждать на крыше ',
      you.get_colored_name(),
      '.',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {string} callname 奇锐骏对玩家的称呼
   */
  async 99(acute, you, callname) {
    await era.printAndWait(
      'На краю неба громыхнуло, железная птица оставила оранжевый инверсионный след.',
    );
    await era.printAndWait(
      'Ослепительное сияние сумерек вот-вот спадёт, а за ним — чёрная, тускло светящая лунная ночь.',
    );
    await era.printAndWait([
      'На крыше ',
      acute.get_colored_name(),
      ' стоит спиной к ',
      you.get_colored_name(),
      ' и смотрит на облака у края неба.',
    ]);
    await era.printAndWait([
      'Как тогда, когда ',
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' встретились впервые, как тогда, когда ',
      acute.get_colored_name(),
      ' на крыше подобрал(а) бездомную ',
      you.get_colored_name(),
      ' — на этой крыше снова только ',
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' вдвоём.',
    ]);
    await era.printAndWait([
      '— А в этот раз ',
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' стоите наоборот.',
    ]);
    await era.printAndWait([
      'Тихо закрываешь дверь на крышу, глушишь дрожь в груди, ',
      you.get_colored_name(),
      ' медленно подходит.',
    ]);
    await era.printAndWait([
      'Встаёшь у неё за спиной. Поднимает голову ',
      acute.sex,
      ' — и ты следом; ',
      acute.sex,
      ' и ты смотрите на рыжие облака у края неба.',
    ]);
    await era.printAndWait(['И, передразнивая ', acute.sex, ', говоришь —']);
    era.printButton('「Ай-я-я」', 1);
    await era.input();
    era.printButton('「Если всё вздыхать — удача сбежит——」', 1);
    await era.input();
    await acute.say_and_wait('——');
    await era.printAndWait('Тревожные слова тают в небе, ветер их крошит.');
    await era.printAndWait([
      'Как ',
      you.get_colored_name(),
      ', которую знает ',
      acute.get_colored_name(),
      ', ',
      acute.sex,
      ' — без лишней тревоги.',
    ]);
    await era.printAndWait([
      'Только ',
      acute.sex,
      ' медленно поворачивается, встаёт на цыпочки; под спокойным лицом в тёмных глазах — стеклянные капли.',
    ]);
    await acute.say_and_wait(['Ты пришёл(шла), ', callname, '.']);
    era.printButton(`「Я пришёл(шла), Вандер Акют.」`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      ' здороваетесь; в этом спокойствии уже слишком много.',
    ]);
    await era.printAndWait([
      'Но ',
      acute.sex,
      ' не раскрывает объятия, и ',
      you.get_colored_name(),
      ' тоже нет.',
    ]);
    await era.printAndWait(
      'Это ведь не объятие простой благодарности, а жаркая жажда обладать.',
    );
    await era.printAndWait(
      'На цыпочках чистый нос трётся о щетину на подбородке; вишнёвый след всасывается в бело-алую шею.',
    );
    await era.printAndWait([
      'Качающиеся уши скользят у рта ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait(
      'Розовая плоть шевелится, жаждет проглотить тёмно-серое——',
    );
  },
  async '99-end'(acute, callname) {
    await era.printAndWait([
      'После обмена жаркой жидкостью, не дожидаясь, пока ещё бьёт тайный родник, ',
      acute.get_colored_name(),
      ' надевает белую ткань, что укрывала низ.',
    ]);
    await era.printAndWait(
      'В лунном свете клеймо на низе живота мерцает розовым.',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      ' Говорят, это новый тренд Трейсен: ',
      acute.uma_sex_title,
      ' с таким клеймом на теле принадлежит хозяину клейма.',
    ]);
    await era.printAndWait('А сейчас клейму не хватает последнего шага.');
    await acute.say_and_wait(['……Эй, ', callname, '?']);
    await era.printAndWait(
      'Зажав в зубах свою длинную юбку, показывает чистое брюхо и невнятно просит желаемого.',
    );
    await era.printAndWait(
      'Открытая грудь выставляет спелые красные ягоды; обеими руками поднимает серебряное кольцо, как подношение.',
    );
    await era.printAndWait(
      'То как дичь, что молит о пощаде, то как домашний зверь, что признаёт хозяина. Серебряные капли у глаз не сдержать волнения.',
    );
    await era.printAndWait([
      'Принимаешь изящное серебряное кольцо и своими руками смыкаешь его на шее ',
      acute.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'Потом довольная ',
      acute.get_colored_name(),
      ' с улыбкой садится на корточки.',
    ]);
    await era.printAndWait(
      'Высовывает алый язык и служит злому зверю-хозяину.',
    );
  },
};
