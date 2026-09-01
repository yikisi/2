/**
 * @file 曼城茶座 - 爱慕
 * @author Necroz
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   */
  async 49(coffee, you) {
    await coffee.print_and_wait([
      'Однажды ночью ',
      coffee.get_colored_name(),
      ' видит необычный сон.',
    ]);
    await coffee.print_and_wait([
      'Во сне она… будто с ',
      you.get_colored_actual_name(),
      ' делает вещи, о которых вслух стыдно…',
    ]);
    await coffee.print_and_wait([
      'Не вспоминай сама, ',
      coffee.get_colored_name(),
      ' заливается краской, руки скользят по чуть ноющему низу живота и лезут под пижаму.',
    ]);
    if (you.sex_code === 1) {
      await coffee.say_and_wait('Тренер… господин…');
    } else {
      await coffee.say_and_wait('Тренер… госпожа…');
    }
    if (coffee.sex_code === 0) {
      await coffee.print_and_wait(
        'Шепчет имя из сна, средний и указательный кружат по клитору; уже стоящие соски в фантазии мнёт большая рука, они краснеют и пухнут.',
      );
      await coffee.print_and_wait([
        'Под тяжёлым дыханием ',
        coffee.get_colored_name(),
        ' кончает.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {string} callname 曼城茶座对玩家的称呼
   */
  async '74-1'(coffee, you, callname) {
    await coffee.print_and_wait([
      'Как-то после полудня ',
      coffee.get_colored_name(),
      ' падает от тренировочной усталости, её уносят отдыхать в общежитие.',
    ]);
    await coffee.print_and_wait([
      'В пустой комнате ',
      coffee.get_colored_name(),
      ' вдруг чувствует одиночество.',
    ]);
    await coffee.say_and_wait(['Если бы ', callname, ' сейчас был(а) рядом…']);
    await coffee.print_and_wait([
      'То ли от слабости после падения, то ли от того, что одна, — мысли прямее обычного срываются с губ ',
      coffee.get_colored_name(),
      ' и висят в пустом общежитии.',
    ]);
    await coffee.print_and_wait('С каких пор так страшно быть одной…');
    await coffee.print_and_wait([
      'Слова нет, но ',
      coffee.get_colored_name(),
      ' смутно чует: с ',
      you.get_colored_actual_name(),
      ' уже не совсем как обычно.',
    ]);
    era.println();
    era.printButton(
      `「Так хочу увидеть тебя, ${callname}…」(поднять отношения)`,
      1,
    );
    era.printButton('「Просто показалось…」(пока не поднимать)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await coffee.print_and_wait([
        'Закрывает глаза, просит сон снять эту путаницу и одиночество, но лицо ',
        you.get_colored_actual_name(),
        ' как призрак лезет в темноту перед веками.',
      ]);
      await coffee.print_and_wait([
        'Не спится, не тихо. Если вдуматься: с тех пор как встретила ',
        you.get_colored_actual_name(),
        ', сердце ни на миг не свободно.',
      ]);
      await coffee.say_and_wait(['Я влюбилась в ', callname, '…?']);
      await coffee.print_and_wait([
        'С этими словами, будто мысль пробилась, тепло из груди заливает ',
        coffee.get_colored_name(),
        ' всего.',
      ]);
      await coffee.print_and_wait([
        'С той первой встречи, когда рядом оказался ',
        you.sex,
        ', каждое слово, что сказал ',
        you.sex,
        ', каждый час рядом сейчас звучат иначе.',
      ]);
      if (era.get('cflag:25:育成回合计时') < 96) {
        await coffee.print_and_wait(
          'Пока это ещё только ей одной, но эта уже ясная любовь когда-нибудь расцветёт.',
        );
        await coffee.print_and_wait('Когда-нибудь…');
        await era.printAndWait([
          '(',
          coffee.get_colored_name(),
          ' эту любовь, наверное, отложит до старшей ступени…)',
        ]);
      } else {
        await coffee.print_and_wait('Цветок раскрылся…');
      }
    } else {
      await coffee.print_and_wait('Просто бред от слабости…');
      await coffee.print_and_wait([
        'Заставляет себя не думать, ',
        coffee.get_colored_name(),
        ' медленно уходит в сон.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {string} callname 曼城茶座对玩家的称呼
   */
  async '74-2'(coffee, you, callname) {
    await coffee.say_and_wait([callname, ', сегодня вечером свободен(на)…?']);
    await era.printAndWait([
      'Как-то ',
      coffee.get_colored_name(),
      ' редкость — сама зовёт ',
      you.get_colored_name(),
      '.',
    ]);
    era.println();
    era.printButton('「Да, свободен(на). Что хочешь?」(поднять отношения)', 1);
    era.printButton(
      '「Прости, сегодня вечером как-то…」(пока не поднимать)',
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        'Услышав да, ',
        coffee.get_colored_name(),
        ' медлит мгновение.',
      ]);
      await coffee.say_and_wait([
        'Есть место… хочу, чтобы ',
        callname,
        ' посмотрел(а) вместе…',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Как потерянный ребёнок, тебя за руку тащит вдруг ожившая ',
        coffee.get_colored_name(),
        ' через переулки и улицы — и перед глазами невзрачная лавка.',
      ]);
      await era.printAndWait(
        'За пожелтевшим стеклом — винтажная посуда и всякая утварь.',
      );
      era.printButton('「Даже кофейная посуда… комиссионка.」', 1);
      await era.input();
      await coffee.say_and_wait('Мм… я случайно нашла. Забавное место…');
      await era.printAndWait([
        'За ',
        coffee.get_colored_name(),
        ' входишь: лавка без продавца, самообслуживание, внутри чисто — видно, кто-то метёт регулярно.',
      ]);
      await coffee.say_and_wait('Сюда редко кто заходит… я иногда заглядываю.');
      await era.printAndWait([
        'И правда в точку для ',
        coffee.get_colored_name(),
        ' вкуса: странные чашки, кофейник в стиле рококо. ',
        you.get_colored_name(),
        ' Легко представить, как в пустой полдень эта черноволосая ',
        coffee.teen_sex_title,
        ' одна бродит между полками, то берёт в руки, то склоняется и смотрит. Солнце сквозь стекло заливает лавку сказочным золотом.',
      ]);
      await coffee.say_and_wait([
        '…А вот так, вдвоём с ',
        callname,
        ', в первый раз…',
      ]);
      await era.printAndWait([
        'Незаметно ',
        coffee.get_colored_name(),
        ' уже вплотную к ',
        you.get_colored_name(),
        ': румяное тонкое лицо занимает почти весь взгляд.',
      ]);
      await coffee.say_and_wait(['…', callname, ', я——']);
      await you.say_as_passer_by_and_wait('Фанат A', [
        'А, правда ',
        coffee.get_colored_name(),
        '! Заходи скорее!',
      ]);
      await you.say_as_passer_by_and_wait(
        'Фанат B',
        'Вау, так близко! Свидание?',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        ' речь рвёт чужой голос. Оборачиваешься: двое фанатов узнали ',
        coffee.get_colored_name(),
        ' и вошли. Их крик тянет прохожих — ещё набегут…',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' тоже застыла, лицом к двери, стоит столбом.',
      ]);
      await you.say_as_passer_by_and_wait('Фанат A', 'Какая красная!');
      await you.say_as_passer_by_and_wait('Фанат B', [
        'Так вот какое лицо, когда ',
        coffee.teen_sex_title,
        ' в любви!',
      ]);
      era.printButton('「Вы двое! Сейчас личное время, прошу——」', 1);
      await era.input();
      await era.printAndWait([
        'Не даёт ',
        you.get_colored_name(),
        ' договорить: ',
        coffee.get_colored_name(),
        ' резко хватает руку ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton('「А?! Ч-что, Кафе?」', 1);
      await era.input();
      await coffee.say_and_wait('…');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' не отвечает ',
        you.get_colored_name(),
        ', игнорирует фанатов в лавке и за дверью — ',
        coffee.sex,
        ' их не слушает и силой тащит ',
        you.get_colored_name(),
        ' наружу.',
      ]);
      await era.printAndWait([
        'И снова ',
        you.get_colored_name(),
        ' как потерянный ребёнок бежит за ',
        coffee.get_colored_name(),
        '.',
      ]);
      era.drawLine();
      await era.printAndWait('В конце — переулок у края торговой улицы.');
      await era.printAndWait(
        'Большинство лавок только днём, так что кроме дальних идзакая почти никого.',
      );
      era.printButton('「Что случилось, Кафе…」', 1);
      await era.input();
      await era.printAndWait([
        'Отдышавшись после бега за руку, видишь: ',
        coffee.get_colored_name(),
        ' уже какое-то время молчит, голову вниз.',
      ]);
      await coffee.say_and_wait('…Всё ты виноват(а)…');
      await era.printAndWait('Спустя миг — голос чуть дрожит.');
      await coffee.say_and_wait('Я же незаметная… никто не смотрит…');
      await coffee.say_and_wait('Но я встретила тебя.');
      await coffee.say_and_wait('Не помню с каких пор — сердце тянет к тебе.');
      await coffee.say_and_wait('Моё «я» ты заполнил(а) собой, стало тесно.');
      era.println();
      await coffee.say_and_wait('Я раньше и одна была в порядке.');
      await coffee.say_and_wait('Потому что есть друг.');
      era.println();
      await coffee.say_and_wait('Потом пришёл ты.');
      await coffee.say_and_wait(
        'Одиночество, которое терпелось, стало ядом в сердце.',
      );
      era.println();
      await coffee.say_and_wait(
        'И даже пространство, куда я набралась смелости привести тебя двоих… отобрали…',
      );
      await coffee.say_and_wait('Я… что мне делать…');
      await era.printAndWait(
        'Всё, что с дня, когда поняла любовь, прятала, сейчас выплёскивается.',
      );
      await era.printAndWait([
        'Не только влюблённость в ',
        you.get_colored_actual_name(),
        ', ещё злость и растерянность от того, что мир впервые влезает в неё.',
      ]);
      await era.printAndWait('Беспомощные слёзы капают из углов глаз.');
      await era.printAndWait([
        'Глядя на такую ',
        coffee.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' подходит.',
      ]);
      era.printButton('「Кафе.」', 1);
      await era.input();
      await coffee.say_and_wait('…Мм?');
      await era.printAndWait([
        'С красными уголками глаз ',
        coffee.get_colored_name(),
        ' поднимает лицо к ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton(
        '「Сейчас здесь только я и Кафе… больше не убежишь?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'От этих слов ',
        coffee.get_colored_name(),
        ' невольно оглядывается, тут же ловит себя и снова смотрит на ',
        you.get_colored_name(),
        ', кивает.',
      ]);
      era.printButton(
        '「Так ты всё это время так думала… что не заметил(а) — и правда моя вина.」',
        1,
      );
      await era.input();
      await coffee.say_and_wait('А… а…!?');
      await era.printAndWait([
        'Кажется, только сейчас дошло, что она сама сболтнула. Тайна вылезла из неё же, и ',
        coffee.get_colored_name(),
        ' может только с 「лицом, какое бывает, когда ',
        coffee.teen_sex_title,
        ' в любви」, смотреть снизу на ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}, можно задать тебе несколько вопросов.」`,
        1,
      );
      await era.input();
      await coffee.say_and_wait('…Хорошо.');
      era.printButton('「Скажи, с тобой рядом весело?」', 1);
      await era.input();
      await coffee.say_and_wait('…Мм.');
      era.printButton('「А с тобой рядом счастливо?」', 1);
      await era.input();
      await coffee.say_and_wait('…Счастливо.');
      await era.printAndWait([
        'Под конец, будто собравшись, ',
        you.get_colored_name(),
        ' глубоко вдыхает.',
      ]);
      era.println();
      era.printButton(
        '「…Может, я зазнаюсь. С самого начала опирался(ась) на твою помощь」',
        1,
      );
      era.printButton('「И потом во всяких бедах тоже…」', 2);
      era.printButton('「Но можно ли такому, как я, быть с тобой?」', 3);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' лицо ещё будто во сне, но по цвету в нём ответ уже есть——',
      ]);
      await era.printAndWait('Вдруг.');
      era.printButton('「Ва?!」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' колени бьёт что-то — падаешь на них.',
      ]);
      await coffee.say_and_wait('Ай?!');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' спину тоже бьёт — и она валится вперёд.',
      ]);
      await era.printAndWait('Так две тени скрещиваются.');
      await era.printAndWait([
        you.get_colored_name(),
        '&',
        coffee.get_colored_name(),
        ' 「…мм…!?」',
      ]);
      await era.printAndWait('Губы на губах.');
      await era.printAndWait([
        'Секунд через десять ',
        coffee.get_colored_name(),
        ' отрывает лицо от застывшей ',
        you.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait([
        '…Проказы друга, ну и… но это и мой ответ, ',
        callname,
        '…',
      ]);
      await era.printAndWait([
        'Нить со губ ',
        you.get_colored_name(),
        ' смахивает горячим пальцем.',
      ]);
      await coffee.say_and_wait('Немного зазнаюсь… и такое ещё говорит…');
      await era.printAndWait([
        'Тихо ворчит и ',
        coffee.get_colored_name(),
        ' прижимается к твоей груди.',
      ]);
      await coffee.say_and_wait('Да. Ты.');
      await coffee.say_and_wait('Меня, которой хватало самой себя.');
      await coffee.say_and_wait('Довёл(а) до такого безумия.');
      era.println();
      await coffee.say_and_wait(
        'Теперь… даже если скажешь «бегу»… я не позволю…',
      );
      await era.printAndWait([
        'Говорит и ',
        coffee.get_colored_name(),
        ' сильно сжимает одежду ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton('「…Я не убегу.」', 1);
      await era.input();
      await era.printAndWait([
        'После той встречи, когда появилась ',
        coffee.sex,
        ', пути назад уже нет.',
      ]);
      await coffee.say_and_wait('Тогда… прошу любить и жаловать.');
      await era.printAndWait('Пустой переулок.');
      await era.printAndWait('Сейчас сюда никто не войдёт — только вам двоим.');
      await coffee.say_and_wait('…Чтобы никто не унёс… поставить метку…?');
      era.printButton('「Какую метку?」', 1);
      await era.input();
      await coffee.say_and_wait('…Вот так…');
      await era.printAndWait('На этот раз не чья-то проказа — ваша воля.');
      await era.printAndWait('Руки за шею, лицо медленно ближе.');
      await coffee.say_and_wait('…Больше никому не отдам…');
      await era.printAndWait('Целует сладко, будто жуёт.');
      await era.printAndWait('Ещё десятки секунд этой неги.');
    } else {
      await era.printAndWait([
        'Глядя на чуть расстроенную ',
        coffee.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' тоже остаётся только уговориться с ней — пусть ждёт ',
        coffee.sex,
        ': «в следующий раз обязательно».',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {CharaTalk} you 玩家
   * @param {string} callname 曼城茶座对玩家的称呼
   */
  async 89(coffee, you, callname) {
    await era.printAndWait([
      'Как-то ',
      you.get_colored_name(),
      ' и ',
      coffee.get_colored_name(),
      ' как всегда в комнате тренера по будням.',
    ]);
    await era.printAndWait([
      'Вдруг в нос бьёт кофе. ',
      coffee.get_colored_name(),
      ' уже рядом и садится к тебе на колени.',
    ]);
    era.printButton('「Что такое?」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      ' будто копит слова, молчит, тычется лицом в грудь ',
      you.get_colored_name(),
      ', белая ахоге щекочет шею.',
    ]);
    await era.printAndWait([
      'Так проходит время, ',
      coffee.get_colored_name(),
      ' вдруг будто её ткнули — едва не подскакивает в объятиях ',
      you.get_colored_name(),
      ', поднимает голову и смотрит прямо на ',
      you.get_colored_name(),
      '.',
    ]);
    await coffee.say_and_wait([
      callname,
      ', нет, ',
      you.get_colored_actual_name(),
      '… выйдешь за меня замуж?',
    ]);
    era.printButton('「Нет.」(поднять отношения)', 1);
    era.printButton('「Нам… ещё рано.」(пока не поднимать)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        'Прямой отказ заставляет ',
        coffee.get_colored_name(),
        ' на коленях замереть.',
      ]);
      await era.printAndWait([
        'Не глядя на реакцию ',
        coffee.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' быстро открывает ящик под рукой и достаёт давно спрятанное.',
      ]);
      era.printButton('「Это я должен(на) сделать предложение.」', 1);
      await era.input();
      await era.printAndWait([
        'Открываешь коробочку и показываешь ',
        coffee.get_colored_name(),
        '.',
      ]);
      era.printButton(
        `「${coffee.actual_name_with_title}, ты выйдешь за меня?」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        'Кольцо горит в свете, ',
        you.get_colored_name(),
        ' ждёт ответа ',
        coffee.get_colored_name(),
        '.',
      ]);
      await coffee.say_and_wait('…Ну и вредный же ты.');
      await era.printAndWait([
        '«Бах» — ',
        coffee.get_colored_name(),
        ' опрокидывает ',
        you.get_colored_name(),
        ' вместе со стулом на пол.',
      ]);
      await era.printAndWait([
        'Не даёт ',
        you.get_colored_name(),
        ' опомниться: ',
        coffee.get_colored_name(),
        ' наклоняется и довольно сильно кусает губы ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Кровь мешается со слюной, во рту сладкая ржавчина.',
      );
      await coffee.say_and_wait(
        '…Что ещё за «это я должен(на) сделать предложение»… Красивым себя возомнил(а)?',
      );
      await era.printAndWait([
        'После этого сладко-кровавого поцелуя ',
        coffee.get_colored_name(),
        ' не останавливается: засучивает рукав ',
        you.get_colored_name(),
        ' и оставляет укус на руке.',
      ]);
      await era.printAndWait([
        'Потом шея, ключицы — ',
        coffee.get_colored_name(),
        ' сосёт и ставит красные метки.',
      ]);
      await era.printAndWait([
        'Прижатый ',
        coffee.get_colored_name(),
        ' под собой, ',
        you.get_colored_name(),
        ' молчит, глаза закрыты, даёт ',
        coffee.get_colored_name(),
        ' выплеснуться.',
      ]);
      await coffee.say_and_wait(
        'Ты моя вещь… твоё место… дальше я тебя как следует научу…',
      );
      era.printButton('「…Жду с нетерпением.」', 1);
      await era.input();
      await era.printAndWait(
        'Бесполезное рядом кольцо отражает вас двоих — этот особый обет.',
      );
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' отказал(а) ',
        coffee.get_colored_name(),
        ' и сразу осторожно смотрит ей в лицо: вдруг ',
        coffee.sex,
        ' помрачнеет, вдруг ляжет тень оттого, что ',
        coffee.sex,
        ' услышала отказ от ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Но против ожидания ',
        you.get_colored_name(),
        ' оказывается, ',
        coffee.get_colored_name(),
        ' не выглядит ни разочарованной, ни павшей.',
      ]);
      await coffee.say_and_wait([
        'Я верю ',
        you.get_colored_actual_name(),
        '… дождусь дня, когда будешь готов(а).',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} coffee 曼城茶座
   * @param {string} callname 曼城茶座对玩家的称呼
   */
  async 99(coffee, callname) {
    await coffee.say_and_wait('Тот человек…');
    await coffee.print_and_wait([
      'Как-то после тренировки ',
      coffee.get_colored_name(),
      ' возвращается в комнату тренера за забытым.',
    ]);
    await coffee.print_and_wait([
      'Уже к двери — а за ней голос, и говорит незнакомая ',
      coffee.phy_sex_title,
      '.',
    ]);
    await coffee.print_and_wait([
      'Прикладывает ухо к двери, и ',
      coffee.uma_sex_title,
      ' Её слух такую обычную дверь не считает преградой.',
    ]);
    await coffee.say_and_wait([
      'Незнакомая ',
      coffee.phy_sex_title,
      ' сидит рядом с ',
      callname,
      ' и спокойно болтает…',
    ]);
    await coffee.print_and_wait('——Моё забирают.');
    await coffee.print_and_wait(
      'Давит порыв ворваться с допросом, дышит глубже и слушает дальше, плевать, как это выглядит, если кто пройдёт.',
    );
    era.drawLine();
    await coffee.say_and_wait([
      'В итоге всего лишь младшая ',
      callname,
      '… да ещё и моя фанатка…',
    ]);
    await coffee.print_and_wait([
      'Пятнадцать минут как stalker за дверью — ',
      coffee.get_colored_name(),
      ' наконец выдыхает и тут же стыдится, что так переборщила.',
    ]);
    await coffee.print_and_wait('Уже уходить — по макушке стук.');
    await coffee.say_and_wait(
      '…Что ещё за «чувства слишком тяжёлые», не стукай вдруг…',
    );
    await coffee.print_and_wait([
      '——Но стоит подумать, что ',
      callname,
      ' однажды может уйти…',
    ]);
    await coffee.print_and_wait('Сердце будто сжали, в груди ноет.');
    await coffee.print_and_wait('Только подумать — и уже так…');
    await coffee.say_and_wait([
      'Уж не ',
      coffee.sex_code === 1 ? 'яндере-парень' : 'яндере-девушка',
      ' ли я…',
    ]);
  },
};
