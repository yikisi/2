/**
 * @file 摩耶重炮 - 育成
 * @author 黑奴二号
 */
const era = require('#/era-electron');

module.exports = {
  ts_add: (() => {
    const title = 'Дополнительная самостоятельная тренировка';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} call_17 摩耶重炮对鲁铎象征的称呼
     * @param {PrintedSpan} t_call_l 东海帝王对鲁铎象征的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     */
    const f = async (
      maya,
      teio,
      you,
      callname,
      call_3,
      call_17,
      t_call_l,
      t_call_m,
    ) => {
      await maya.say_and_wait(
        'Слушай-ка! Тренировка тоже уже кончилась～ не сходить ли со мной в одно клёвое местечко?',
      );
      era.printButton('「И что за местечко?」', 1);
      await era.input();
      await maya.say_and_wait(
        'Скажу-скажу! Есть одно место, откуда видно очень сверкающий ночной вид —',
      );
      await teio.say_and_wait(['Хэй-йо, хэй-йо… ээ? Это ', t_call_m, ' ～!']);
      await maya.say_and_wait(['А, это ', call_3, '! Hi!']);
      await teio.say_and_wait(
        'Я как раз тебя искала! Хотела сказать: сегодня могу вернуться попозже!',
      );
      await maya.say_and_wait([
        'Я☆ аж задерживается — похоже, есть прогресс～! ',
        call_3,
        ' уже взрослая～!',
      ]);
      await teio.say_and_wait([
        'Ага! Только что посмотрела ',
        t_call_l,
        ' на скачках — и сразу захотелось самой побегать!',
      ]);
      await teio.say_and_wait([
        'Если в стиле ',
        t_call_m,
        ' …наверное, это очень сверкает?',
      ]);
      await maya.say_and_wait([
        'Вах…! Понимаю-понимаю! ',
        call_17,
        ' как несётся — и правда так круто выглядит!',
      ]);
      await maya.say_and_wait('Мм～～ кажется, я уже завелась…');
      await maya.say_and_wait([
        callname,
        ', лучше не смотреть на ночной вид! Я сейчас хочу сверкать!',
      ]);
      era.printButton('「Я с тобой!」', 1);
      era.printButton('「Отдых тоже очень важен」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait(['Хе-хе, как и ожидалось от ', callname, '!']);
        await teio.say_and_wait(
          'Тогда давай вместе пробежимся бок о бок! Так мне тоже легче завести боевой дух!',
        );
        await maya.say_and_wait('Без проблем! Take off☆');
        await era.printAndWait([
          maya.get_colored_name(),
          ' выложилась на полную в дополнительной тренировке.',
        ]);
      } else {
        await maya.say_and_wait(
          'Ага! Оно и верно! Как с кожей: только отдохнёшь — и появится блеск, да?',
        );
        await maya.say_and_wait(
          'Поняла! Тогда пусть сверкающий ночной вид подзарядит мой блеск♪',
        );
        await teio.say_and_wait('Тогда я побежала! Вернусь до отбоя～～!');
        await era.printAndWait([
          'Итак, ',
          you.get_colored_name(),
          ' и ',
          maya.get_colored_name(),
          ' вместе любовались ночным видом, чтобы ',
          maya.sex,
          ' хорошенько отдохнула телом',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = 'Береги тело!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (maya, you, callname, fail_again) => {
      await era.printAndWait([
        'Маяно Топ Ган во время тренировки получила травму, ',
        you.get_colored_name(),
        ' в спешке взял(а) с собой, и ',
        maya.sex,
        ' оказалась в медпункте.',
      ]);
      await maya.say_and_wait(
        'А～ больно! Теперь, похоже, тренироваться нельзя～',
      );
      era.printButton('「Смирно отдыхай…!」', 1);
      await era.input();
      await maya.say_and_wait('Мм… можно, конечно…');
      await maya.say_and_wait([
        'Если ',
        callname,
        ' будет за мной ухаживать, я, глядишь, ещё бодрее стану♪',
      ]);
      era.printButton('「Ясно」', 1);
      era.printButton('「Ты всё ещё ребёнок」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('Я☆ как хорошо～!');
        await maya.say_and_wait(
          'Тогда-тогда, сначала измерь мне температуру лбом…',
        );
        era.printButton('「Температуру? Ты же травмировалась?」', 1);
        await era.input();
        await maya.say_and_wait(
          'Неважно, неважно! Ощущением, как сердце разгоняется, пусть бо-бо «вжии!» раз — и улетит —',
        );
        await maya.say_and_wait('Ауу!!!! С-странно? Вроде и правда… больно.');
        await era.printAndWait([
          'Тебе в панике пришлось ухаживать за зарвавшейся Маяно Топ Ган, и в итоге ',
          maya.sex,
          ' смирно отдыхала…',
        ]);
        era.println();
      } else if (fail_again) {
        await maya.say_and_wait(
          'Ээ!? Вовсе нет! Это же способ «взрослой» ластиться～!',
        );
        await maya.say_and_wait(
          'Странно, в книге же прямо писали, что этим приёмом можно «пронзить сердце с одного удара☆»…',
        );
        await maya.say_and_wait(
          'Поняла! Это потому что у меня нет температуры! Если бы я горела, точно получилось бы как в книге —',
        );
        era.printButton('「Смир-но, от-ды-хай!」', 1);
        await era.input();
        await maya.say_and_wait('Уу… лаадно～～');
        await era.printAndWait([
          'Хотя ',
          maya.get_colored_name(),
          ' всем была недовольна, но в итоге всё-таки вышло, что ',
          maya.sex,
          ' смирно отдыхала…',
        ]);
      } else {
        await maya.say_and_wait([
          '…Неужели это не подходит ',
          callname,
          ' по вкусу?',
        ]);
        await maya.say_and_wait([
          'Тогда-тогда, ',
          callname,
          '! Что мне сделать, чтобы у тебя «ёкнуло»～?',
        ]);
        era.printButton('「Больше всего меня радует, когда ты здорова」', 1);
        await era.input();
        await maya.say_and_wait(
          'Здорова…? Если я поправлюсь — тебе будет радостно?',
        );
        await maya.say_and_wait('Хе-хе, хе-хе-хе… хе-хе-хе-хе-хе!');
        await maya.say_and_wait('Поняла! Я хорошенько отдохну и поправлюсь～!');
        await maya.say_and_wait(
          'А потом, а потом! Тогда снова потренируемся вместе☆',
        );
        await era.printAndWait(
          'Как и поклялась себе, Маяно Топ Ган хорошенько отдохнула… и здоровая продолжила тренировки!',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = 'Никакого героизма!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (maya, you, callname, fail_again) => {
      await maya.say_and_wait('Хе-хе, налажала～');
      await maya.say_and_wait([
        'Но ',
        callname,
        ' и правда перегибает～ это же совсем не страшная травма!',
      ]);
      await maya.say_and_wait(
        'Ладно, скорее обратно на тренировку! Я уже взрослая, такая царапина — ерунда —',
      );
      await maya.say_and_wait('…Больно～～!!');
      era.printButton('「Ты в порядке!?」', 1);
      await era.input();
      await maya.say_and_wait(
        'Я в порядке… даже если больно, говорить, что не больно — вот это по-взрослому.',
      );
      await maya.say_and_wait('Поэтому я и не скажу, что больно!');
      await maya.say_and_wait('Как у малышей — слабо… я так не хочу～～!');
      era.printButton('「Тогда и веди себя как «взрослая»」', 1);
      era.printButton('「Это вовсе не слабо!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait(
          'Вести себя как взрослая…? Это про то, чтобы смирно отдыхать?',
        );
        await maya.say_and_wait(
          'Вот оно что… Так тоже считается 『взрослой』.',
        );
        await maya.say_and_wait(
          '…Поняла! Maya хоть и не больно, но будет как взрослая — послушно отдохнёт.',
        );
        await maya.say_and_wait('Хоть вооб… вообще не больно…');
        await era.printAndWait(
          'Так в итоге удалось уговорить Маяно Топ Ган отдохнуть.',
        );
        era.println();
      } else if (fail_again) {
        await maya.say_and_wait([callname, '…Но…']);
        era.printButton(
          '「Упрямиться и ухудшить травму — вот это не круто」',
          1,
        );
        await era.input();
        await maya.say_and_wait('А! Точно!');
        await maya.say_and_wait(
          '…Н-но ничего! Просто чуть-чуть больно, такая царапина не ухудшится—',
        );
        await maya.say_and_wait('Ннх～～!! Больно————!!');
        await era.printAndWait(
          'Она упрямо делала вид, что всё в порядке, травма ухудшилась — и пришлось отдыхать несколько дней…',
        );
      } else {
        await maya.say_and_wait(
          '…Слушай, если честно, там, где травма, — супер больно.',
        );
        await maya.say_and_wait([
          'Но-но, я хочу всерьёз с ',
          callname,
          '  тренироваться…!',
        ]);
        era.printButton('「Отдохни как следует, потом снова выложишься」', 1);
        await era.input();
        await maya.say_and_wait('…Ага!');
        await era.printAndWait(
          'На восстановление ушло немало времени… но в итоге она поправилась.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start_low_sta: (() => {
    const title = 'Перед скачками';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        'Перед скачками заходишь в комнату отдыха и видишь… ',
        maya.get_colored_name(),
        '  словно прокручивает скачки у себя в голове.',
      ]);
      await maya.say_and_wait(
        'А если спереди кто-то окажется — 『вжух!』 и прорыв…',
      );
      era.printButton('(…Какая потрясающая концентрация)', 1);
      await era.input();
      await maya.say_and_wait(['…Э!? ', callname, '!?']);
      await maya.say_and_wait(
        'Ауаа, испугалась! Совсем не заметила! Как так!?',
      );
      era.printButton('「Ты только что была очень сосредоточена」', 1);
      await era.input();
      await maya.say_and_wait(
        'Хе-хе, да! У Maya с тех пор сердце так и колотится.',
      );
      await maya.say_and_wait(['Но… теперь очередь ', callname, ' !']);
      await maya.say_and_wait(
        'Я заставлю тебя без ума смотреть, как я несусь♪',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'Победа в скачках!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait(
        'Victory☆ Победившая Маяно Топ Ган с триумфом возвращается!',
      );
      era.printButton('「Поздравляю!」', 1);
      await era.input();
      await maya.say_and_wait(
        'Хе-хе! Понравилось?? Выступление Maya заставило сердце забиться??',
      );
      era.printButton('「Конечно」', 1);
      era.printButton('「Ещё недостаточно」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('Ва☆ Здорово, здорово!');
        await maya.say_and_wait(
          'Но Maya поняла♪ Мы можем трепетать ещё сильнее!',
        );
        await maya.say_and_wait('По-это-му! К следующим скачкам… готовься☆');
      } else {
        await maya.say_and_wait('……!!');
        await maya.say_and_wait([
          'Кья☆ ',
          callname,
          '  это просто супер! У Maya те же мысли～!',
        ]);
        await maya.say_and_wait(
          'Слушай-слушай! Последняя прямая… доска финиша так сияла!',
        );
        await maya.say_and_wait(
          'Но… после финиша это сияние и трепет пропали…',
        );
        await maya.say_and_wait(
          'И тогда я поняла! Maya может трепетать ещё сильнее!',
        );
        await maya.say_and_wait([
          'По-это-му! ',
          callname,
          ', я ещё заставлю тебя трепетать ещё～сильнее♪',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'Призовое место';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait([
        'А, ',
        callname,
        ', ты наконец-то здесь! Скачки кончились, пойдём скорее～!',
      ]);
      await maya.say_and_wait(
        'А ещё а ещё, хочу вместе с тобой съесть лимитированные сладости с ипподрома♪',
      );
      era.printButton('「Сначала разберём скачки…」', 1);
      await era.input();
      await maya.say_and_wait(
        'Э? В этот раз правда проиграла, но в следующий раз выиграю же??',
      );
      await maya.say_and_wait(
        'Я уже точно знаю, насколько все сильны, и как занимать позицию на дорожке♪ Ничего-ничего!',
      );
      era.printButton('「Жду не дождусь」', 1);
      era.printButton('「…Тогда потренируемся!」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait(
          'Положись на меня☆ Maya выступит так, что превзойдёт твои ожидания! Ведь—',
        );
        await maya.say_and_wait(
          '—превзойти ожидания в хорошую сторону — вот что такое зрелая женщина…',
        );
        await maya.say_and_wait('Так в книге написано♪');
        await maya.say_and_wait([
          'В следующий раз победю и заставлю ',
          callname,
          '  меня слушать! Обязательно!',
        ]);
      } else {
        await maya.say_and_wait([
          'Мм～ раз уж ',
          callname,
          '  так говорит, я постараюсь…',
        ]);
        await maya.say_and_wait([callname, '  не слишком ли волнуешься??']);
        era.printButton('「Потому что хочу, чтобы ты взяла первое」', 1);
        await era.input();
        await maya.say_and_wait('…Э? То есть это ради Maya?');
        await maya.say_and_wait('Кья☆ Меня так любят!');
        await maya.say_and_wait('Поняла! Maya постарается♪');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = 'Поражение в скачках';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait('А～ проиграла～ А я думала, выиграю.');
      era.printButton('「Потому что другие тоже сильные」', 1);
      await era.input();
      await maya.say_and_wait('…Другие?');
      await maya.say_and_wait(
        'ЧП! Нельзя-нельзя, такие слова сейчас нельзя～～!!',
      );
      await maya.say_and_wait([
        'Хочу, чтобы ',
        callname,
        '  смотрел(а) только на Maya!',
      ]);
      await maya.say_and_wait(
        'Слушай-слушай! Даже если так говоришь, ты всё равно LOVE☆ Маяно Топ Ган… правда!? Правда!!',
      );
      era.printButton('「Конечно!」', 1);
      era.printButton(
        '「…Возможно, это зависит от того, как ты себя покажешь」',
        2,
      );
      if ((await era.input()) === 1) {
        await maya.say_and_wait('Фух… Пронесло…');
        await maya.say_and_wait(
          '…Ну то есть в следующих скачках я возьму первое.',
        );
        await maya.say_and_wait('Так что… болеть за меня!');
        await maya.say_and_wait(
          'Я обязательно… точно заставлю тебя считать, что Maya круче остальных!',
        );
      } else {
        await maya.say_and_wait(['Хмф～! ', callname, '  злючка!']);
        await maya.say_and_wait(
          'Окей! В следующей скачке я обязательно пробегу супер-круто!',
        );
        await maya.say_and_wait(
          'Я тебе покажу, что Maya — классная женщина, милее всех!',
        );
        await maya.say_and_wait('Отбить чужую любовь — это по мне!!');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = 'В следующий раз не проиграю!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait([
        'Опять проиграла… что делать, ',
        callname,
        '…Ma, Maya…',
      ]);
      era.printButton('「Маяно Топ Ган…」', 1);
      await era.input();
      await maya.say_and_wait('—Супе～р возбуждена～～!!');
      era.printButton('「Э!?」', 1);
      await era.input();
      await maya.say_and_wait('Не знаю, как сказать, будто двигатель завели!');
      await maya.say_and_wait(
        'Думала, что смогу — и не смогла! Сердце Maya колотится, будто сейчас взорвётся!',
      );
      await maya.say_and_wait(
        'Точно! Давай вот так『шу—!』 рванём на тренировку!?',
      );
      era.printButton('「Сначала успокойся」', 1);
      era.printButton('「Пойдём тренироваться!」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('Ээ────────!?');
        await maya.say_and_wait(
          'Двигатель уже прогрет, можно взлетать в любой момент!?',
        );
        era.printButton('「Экстренный взлёт — причина сваливания!」', 1);
        await era.input();
        await maya.say_and_wait('Ууу! Точно! Так Maya упадёт…!');
        await maya.say_and_wait(
          'Фух-фух! Сначала надо как следует починить двигатель… да!',
        );
        await era.printAndWait([
          'После этого, ',
          you.get_colored_name(),
          ' и ',
          maya.get_colored_name(),
          ' вместе готовились к следующей скачке.',
        ]);
      } else {
        await maya.say_and_wait(['Йа☆ не зря ', callname, '! Обожаю тебя!']);
        await maya.say_and_wait('Хорошо! Maya сейчас выложится по-настоящему!');
        await maya.say_and_wait([
          'Я покажу высший пилотаж, ',
          callname,
          ', смотри не упади… ясно♪',
        ]);
        await era.printAndWait([
          'Как сама себе и пообещала, ',
          maya.get_colored_name(),
          ' выложилась на тренировках по полной… и стала ещё искуснее!',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_16: (() => {
    const title = 'Я хочу сверкать!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        'Это случилось в один из дней, когда шли тренировки к дебютной скачке—',
      );
      await maya.say_and_wait([callname, '☆Я пробежала три круга по грунту!']);
      era.printButton('「Молодец!」', 1);
      await era.input();
      await maya.say_and_wait('Хе-хе～♪ Maya ещё не устала～!');
      await maya.say_and_wait('Эй-эй, что дальше тренируем?');
      await maya.say_and_wait(
        'Судя по прежнему меню, дальше тренировка полегче?',
      );
      await era.printAndWait([
        '—Как ',
        maya.sex,
        ' и сказала, в этот раз тренировку построили в основном на мягком грунте.',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' — её тело ещё растёт. ',
        you.get_colored_name(),
        ' сперва не хотелось слишком нагружать её ноги — ',
        maya.sex,
        '…',
      ]);
      era.printButton('「Хочешь ещё чуть-чуть поднажать?」', 1);
      await era.input();
      await maya.say_and_wait('Нет! Одного『чуть-чуть』мало!');
      await maya.say_and_wait('Ведь я собираюсь бежать в Twinkle Series!');
      await maya.say_and_wait(
        'Так волнительно, полно всего, что хочется узнать, и все на дорожке такие яркие…',
      );
      await maya.say_and_wait(
        'Если уж бежать в Twinkle Series, сначала хочу стать ещё быстрее!',
      );
      await maya.say_and_wait('Хе-хе, и, ещё, а～');
      await maya.say_and_wait([
        callname,
        ' тоже думаешь, что Maya ещё может『больше』, да?',
      ]);
      era.printButton('「Ну ещё бы!」', 1);
      await era.input();
      await maya.say_and_wait('Йе, я угадала～☆');
      await era.printAndWait([
        'И тогда, ',
        you.get_colored_name(),
        ' не меняя основной курс, дал(а) ',
        maya.sex,
        ' опробовать разные тренировки—',
      ]);
      await maya.say_and_wait('…Изучение скачек. Изучение… да?!');
      await maya.say_and_wait(
        'Аха-ха♪ Будто спринтом несусь по лестнице во взрослые☆',
      );
      era.printButton('「Это тоже тренировка」', 1);
      await era.input();
      await maya.say_and_wait('Да-да-да, знаю☆ И в этом Maya сильна!');
      await maya.say_and_wait('…Хм?');
      await maya.say_and_wait('Ээ, видео уже кончилось? Прошло всего полчаса?');
      await maya.say_and_wait(
        'А, поняла! Это такая операция, чтобы дразнить аппетит～',
      );
      await maya.say_and_wait(
        'В, о, т… взрослый приём «отпусти, чтобы поймать»☆… йа☆',
      );
      await era.printAndWait('И всё же—');
      await maya.say_and_wait([
        'А, ',
        callname,
        '. Это видео больше смотреть не надо!',
      ]);
      await maya.say_and_wait(
        'После входа в третий поворот девушка под первым номером『шу—!』раньше вырвется вперёд, да?',
      );
      era.printButton('「Правда?」', 1);
      await era.input();
      await maya.say_and_wait(
        'Ага, я просто знаю. Можешь проверить, права я или нет.',
      );
      await era.printAndWait([
        'Когда ',
        maya.sex,
        ' так подгоняет, ',
        you.get_colored_name(),
        ' перематывает видео и проверяет…',
      ]);
      await maya.say_and_wait('Видишь～☆ Как Maya и сказала～!');
      await maya.say_and_wait('Хе-хе, тогда следующее! Следующее!!');
      await era.printAndWait([
        maya.sex,
        'На этом запале все скаковые видео, что ',
        you.get_colored_name(),
        ' приготовил(а), досмотрели…',
      ]);
      await maya.say_and_wait(['Ээ? ', callname, '. Неужели уже всё?']);
      era.printButton('「…Давай другую тренировку」', 1);
      await era.input();
      await maya.say_and_wait(
        'А! Вот как～! Продолжать тренировку я тоже очень даже за☆',
      );
      await era.printAndWait(
        '—И вот для тренировки сердца и лёгких дальше идёте в бассейн.',
      );
      await maya.say_and_wait(
        'То есть надо замерить, сколько Maya проплывёт без вдоха, да!',
      );
      await maya.say_and_wait(
        'Кстати спросить! Примерно сколько проплыть, чтобы ты похвалил(а): Maya выступила просто супер?',
      );
      await era.printAndWait(
        '…Если обычно тренироваться, примерно 75 метров проплывёт. Тогда в первый раз…100 метров в самый раз.',
      );
      await era.printAndWait([
        'Впрочем, была Скаковая ',
        maya.uma_sex_title,
        ' проплыла 300 метров. Раз уж пришли сюда на тест —',
      ]);
      era.printButton('「Тогда попробуем целиться в 300 метров」', 1);
      await era.input();
      await maya.say_and_wait('I copy! Тогда я плыву!');
      await maya.say_and_wait('Эх…');
      await maya.say_and_wait(
        'Вот чёрт~ почему~!? Только половину проплыла и уже никак~!',
      );
      await era.printAndWait(
        'Впрочем, половина — 150 метров тоже крутой рекорд. Если потом по чуть-чуть продолжать тренироваться, рано или поздно проплывёт 300 метров…',
      );
      await maya.say_and_wait('Ннг~ ещё раз!');
      await maya.say_and_wait('В этот раз точно проплыву 300 метров☆');
      era.printButton('「Это же всего второй раз!?」', 1);
      await era.input();
      await maya.say_and_wait('Ага, уже второй.');
      await maya.say_and_wait(
        'И ещё, секрет, как выкладываться, что ли? К середине заплыва Maya уже поняла☆',
      );
      await maya.say_and_wait('Хе-хе♪ Скорее пробовать!');
      await maya.say_and_wait('А!!');
      await maya.say_and_wait([
        callname,
        '! Если Maya справится, дай ещё новое задание! Понятно♪',
      ]);
      await maya.say_and_wait('Хи-хи☆ Ты copy?');
      await era.printAndWait([
        '…Итак, чтобы выполнить её просьбу — ',
        maya.sex,
        ', ',
        you.get_colored_name(),
        '  насмерть ломает голову.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'Навстречу дебюту';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        'Наконец настал день дебюта ',
        maya.get_colored_name(),
        '!',
      ]);
      await maya.say_and_wait([
        'Смотри-смотри! ',
        callname,
        '! Сегодня Maya не в спортивке!',
      ]);
      await maya.say_and_wait('Знаешь почему~?');
      era.printButton('「Потому что дебют!」', 1);
      await era.input();
      await maya.say_and_wait(
        'Динь-дон, динь-дон, правильно! Держи мизинчик и мою печать «первое место»!',
      );
      await maya.say_and_wait([
        'Так что… ',
        callname,
        '! Глаз с Maya не своди, ясно.',
      ]);
      await maya.say_and_wait(
        'Глаза пошире — смотри, как Maya засверкает в Twinkle Series♪',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'Прошу продлить полёт!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        'Хотя дебют ',
        maya.get_colored_name(),
        ' вот так успешно закончился —',
      ]);
      await maya.say_and_wait('Ннг… э…?');
      await maya.say_and_wait('М-м-м…?');
      await era.printAndWait([
        'Уже какое-то время ',
        maya.get_colored_name(),
        ' выглядит как-то не так…',
      ]);
      era.printButton('「Что случилось?」', 1);
      await era.input();
      await maya.say_and_wait('М-м… да ничего такого. Просто… закончилось же!');
      await maya.say_and_wait([
        'Слушай-слушай, ',
        callname,
        '! Дебют правда вот так и закончился?',
      ]);
      await maya.say_and_wait('Ты ничего от Maya не скрываешь?');
      await era.printAndWait([
        '…Даже если ',
        maya.sex,
        ' так говорит, дебют каждый переживает только раз.',
      ]);
      await maya.say_and_wait('Э…?');
      await era.printAndWait([
        '…Однако ',
        maya.get_colored_name(),
        ' ни капли не выглядит довольной.',
      ]);
      era.printButton('「Давай ещё на скачки」', 1);
      await era.input();
      await maya.say_and_wait('М-м…');
      await maya.say_and_wait('…Ага, так и сделаем.');
      await maya.say_and_wait(
        'Всё-таки наконец получилось дебютировать. Наконец добралась сюда.',
      );
      await maya.say_and_wait('Twinkle Series…');
      await maya.say_and_wait(
        '…Должны же это быть скачки, от которых захватывает и в которых сверкаешь.',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_date: (() => {
    const title = 'Пойдём на свидание';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        'Прошло несколько месяцев после дебюта. Как раз когда все тренировались как обычно —',
      );
      await maya.say_and_wait('……');
      await maya.say_and_wait('…А.');
      era.printButton('「Что такое?」', 1);
      await era.input();
      await maya.say_and_wait(['Вах!? ', callname, '!?']);
      await maya.say_and_wait('Ничего, ничего! То есть ничего не случилось…');
      await maya.say_and_wait('…Эх.');
      await era.printAndWait('— На словах «ничего», а вздохнула так глубоко.');
      era.printButton('「Пойдём развеемся」', 1);
      await era.input();
      await maya.say_and_wait('Развеяться… это свидание?');
      era.printButton('「Ага」', 1);
      await era.input();
      await maya.say_and_wait('Правда!?');
      await maya.say_and_wait([
        'Супер! Тогда минуту на сборы! С ',
        callname,
        ' на свидание, свидание☆',
      ]);
      await maya.say_and_wait([
        'Хе-хе, ',
        callname,
        ' какое взрослое свидание мне устроит~♪',
      ]);
      await era.printAndWait([
        '…Так и решили выйти развеяться. Говоря о местах, где ',
        maya.sex,
        ' будет счастлива —',
      ]);
      await maya.say_and_wait(
        'Свидание в конце всё равно должно быть там, где Maya сверкает сильнее всего!',
      );
      await era.printAndWait('— Ну да, только туда.');
      await era.printAndWait('(Вааааааа—!!)');
      await maya.say_and_wait('Здесь…');
      era.printButton('「Это место, где ты сверкаешь сильнее всего」', 1);
      await era.input();
      await maya.say_and_wait('…………');
      await maya.say_and_wait(['…… ', callname, ' всё ещё так думаешь?']);
      await maya.say_and_wait(
        '«На самом деле это не совсем как я думала». Если Maya сейчас такое скажет… ты разозлишься?',
      );
      era.printButton('「Почему ты вдруг это говоришь?」', 1);
      await era.input();
      await maya.say_and_wait('М-м…………');
      await maya.say_and_wait(
        '……Maya вот всё думала: выйдешь на скачку — и обязательно поймаешь этот огонь.',
      );
      await maya.say_and_wait([
        'Скачущие на дорожке ',
        maya.child_sex_title,
        ' все такие яркие, правда?',
      ]);
      await maya.say_and_wait(
        'Поэтому хоть дебют, хоть другие скачки — я всегда так ждала.',
      );
      await maya.say_and_wait(
        'Но когда реально вышла скакать, оказалось…… как-то не то.',
      );
      await maya.say_and_wait('……А, так вот оно что. Как-то даже скучновато.');
      await maya.say_and_wait(
        'Я вообще-то знаю, что так говорить нельзя. Но……',
      );
      await maya.say_and_wait('…………Мне просто скучно.');
      era.printButton('「Вот как」', 1);
      await era.input();
      await maya.say_and_wait('…………Н-н.');
      await maya.say_and_wait('………………');
      era.printButton('「Да это же отличная новость!」', 1);
      await era.input();
      await maya.say_and_wait('Э……?');
      await era.printAndWait([
        'Потому что в Twinkle Series ',
        maya.sex,
        ' ощутила лишь уровень дебютной скачки.',
      ]);
      await era.printAndWait([
        'Просто такого уровня мало для ',
        maya.get_colored_name(),
        ' — вот и всё. Раз так — целимся выше.',
      ]);
      await era.printAndWait([
        'Впереди ещё куча шансов схлестнуться с сильными — и скачки, которых ',
        maya.sex,
        ' не знает.',
      ]);
      await era.printAndWait([
        'Так что если ',
        maya.sex,
        ' сейчас мучается от 「скуки」 —',
      ]);
      era.printButton('「Пусть дальше станет ещё интереснее!」', 1);
      await era.input();
      await maya.say_and_wait('……Интереснее?');
      await maya.say_and_wait('Правда…… получится? Потому что я уже —');
      era.printButton('「Я постараюсь, чтобы ты засверкала」', 1);
      await era.input();
      await maya.say_and_wait(['…… ', callname, '.']);
      await era.printAndWait([
        maya.get_colored_name(),
        '  непременно есть ',
        maya.sex,
        ' свой, неповторимый способ сиять.',
      ]);
      await era.printAndWait([
        'Раз уж повезло стать тренером по контракту такой талантливой, как ',
        maya.get_colored_name(),
        ' Скаковая ',
        maya.uma_sex_title,
        ' —',
      ]);
      await era.printAndWait([
        '— ',
        maya.sex,
        ' подготовить сцену, где вспыхнет талант, найти её путь роста. Вот оно, дело тренера — ',
        maya.sex,
        '.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Новогодние цели';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_5 摩耶重炮对富士奇石的称呼
     */
    const f = async (maya, you, callname, call_5) => {
      await era.printAndWait([
        'С этого года вы выходите на Classic. Вы договорились встретиться, чтобы наметить цели на новый год —',
      ]);
      await maya.say_and_wait('…………');
      await maya.say_and_wait([callname, ', и правда надо ставить цели?']);
      era.printButton('「Не хочешь?」', 1);
      await era.input();
      await maya.say_and_wait('……Н-н.');
      await maya.say_and_wait(
        'Цели же ставят, когда думаешь: «Я буду стараться!» или «Я точно сделаю!» — нет?',
      );
      await maya.say_and_wait(
        'Поэтому по дороге сюда Maya всё думала. Думала, что будет после перехода в Classic.',
      );
      era.printButton('「Maya」', 1);
      await era.input();
      await maya.say_and_wait([
        'Но со мной в одних скачках те, кто дебютировал в тот же год, что и Maya, — Скаковая ',
        maya.uma_sex_title,
        ', да?',
      ]);
      await maya.say_and_wait('……Так это же то же самое, что раньше.');
      await maya.say_and_wait('А вдруг мне снова станет скучно……');
      era.printButton('「А цели помимо скачек?」', 1);
      await era.input();
      await maya.say_and_wait('……Э?');
      await maya.say_and_wait('Не про скачки…… тоже можно?');
      era.printButton('「Можно, это же цели на 『Новый год』」', 1);
      await era.input();
      await maya.say_and_wait('!');
      await maya.say_and_wait('Т-тогда! Maya хочет часто ходить на свидания!');
      await maya.say_and_wait([
        'Хочу, чтобы ',
        callname,
        '  научил(а) меня куче взрослых вещей!',
      ]);
      era.printButton('「Ясно было, что ты это скажешь」', 1);
      await era.input();
      await maya.say_and_wait([
        'Н-н, хе-хе! Это же ',
        callname,
        '  сказал(а), что можно всё☆',
      ]);
      await maya.say_and_wait(
        'Хорошо, решено! Моя цель — «часто ходить на свидания»!',
      );
      await maya.say_and_wait(['Ахах, я так люблю ', callname, ' ♪']);
      await era.printAndWait([
        '…… ',
        maya.get_colored_name(),
        ' совсем не та, что минуту назад: на лице улыбка.',
      ]);
      await era.printAndWait([
        'Такой опыт — смотреть иначе — ',
        maya.sex,
        ' точно поможет. И это тоже ради дня, когда сердце вдруг ёкнет.',
      ]);
      await era.printAndWait('Так что сейчас —');
      era.printButton('「Пойдём на свидание прямо сейчас!」', 1);
      await era.input();
      await maya.say_and_wait('Ва……! Правда!?');
      era.printButton('「Исполним твоё желание!」', 1);
      await era.input();
      await maya.say_and_wait('Супер—! Пошли-пошли!');
      await maya.say_and_wait([
        'Хе-хе! Новогоднее свидание, свидание☆ ',
        callname,
        ', куда пойдём♪',
      ]);
      era.printButton(
        '「Свидание на новогодней распродаже」(выносливость+20)',
        1,
      );
      era.printButton('「Свидание за новогодним столом」(энергия+400)', 2);
      era.printButton('「Свидание в храме на Новый год」(очки навыков+40)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maya.say_and_wait('Ва, я за!!');
          await maya.say_and_wait(
            'Тогда быстрее~♪ Пойдём вместе за фукубукуро☆',
          );
          await maya.say_and_wait([
            'Хе-хе~♪ Сегодня с ',
            callname,
            '  свидание до ночи☆',
          ]);
          await era.printAndWait([
            maya.sex,
            'Стоит начать шататься по магазинам — и правда загуляете до ночи —',
          ]);
          await maya.say_and_wait([
            'Ях☆ скажу ',
            call_5,
            ' : «Сегодня не вернусь»☆',
          ]);
          await era.printAndWait([
            '…… ',
            you.get_colored_name(),
            '  как и следовало, остановил(а) ',
            maya.sex,
            ', а потом проводил(а) ',
            maya.get_colored_name(),
            ' до общежития.',
          ]);
          break;
        case 2:
          await maya.say_and_wait('Осечи-свидание…? Свидание… через осечи…?');
          await maya.say_and_wait([
            'Ладно, тоже можно! Лишь бы с ',
            callname,
            ' вместе, что ни делай — будет весело♪',
          ]);
          await maya.say_and_wait('…………');
          await maya.say_and_wait(
            'Для Maya тут не слишком по-взрослому…? Всё нормально?',
          );
          await you.say_as_passer_by_and_wait(
            'Хозяйка ресторана японской кухни',
            'Ой-ой, какая милая гостья пожаловала. Добро пожаловать, хо-хо.',
          );
          await maya.say_and_wait('У-уя!?');
          await era.printAndWait([
            'Так ',
            you.get_colored_name(),
            ' вместе с напряжённой ',
            maya.get_colored_name(),
            ' насладились осечи-свиданием.',
          ]);
          break;
        case 3:
          await maya.say_and_wait([
            'Ах, ',
            callname,
            ' такой вкус♪ Прямо новогоднее настроение☆',
          ]);
          await maya.say_and_wait('Иду на посадку♪');
          await maya.say_and_wait([
            'Ну так, ну так? ',
            callname,
            ' какое желание загадаешь?',
          ]);
          era.printButton('「Секрет」', 1);
          await era.input();
          await maya.say_and_wait('Ээ, хитро-хитро. Скажи Maya!');
          await era.printAndWait([
            you.get_colored_name(),
            ' от всего сердца молил(а), чтобы ',
            maya.get_colored_name(),
            ' потом смогла осуществить то, о чём мечтала ',
            maya.sex,
            ' по-настоящему.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_3: (() => {
    const title = 'Захват цели';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} callname_3 东海帝王对玩家的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} l_call_t 鲁铎象征对东海帝王的称呼
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      maya,
      teio,
      brian,
      luna,
      you,
      callname,
      call_3,
      call_16,
      callname_3,
      t_call_m,
      l_call_t,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await era.printAndWait('Наконец настал сезон весенних Classic.');
      await era.printAndWait([
        '…Маршрут Triple Crown, маршрут Triple Tiara. Как провести период, который Скаковая ',
        maya.uma_sex_title,
        ' и тренер встречают лишь раз в жизни, — крайне важен—',
      ]);
      await maya.say_and_wait(['…… ', callname, '.Опять смотришь эти данные~']);
      await maya.say_and_wait('Не пора ли уже побыть с Maya?');
      await era.printAndWait([
        'Просто ',
        you.get_colored_name(),
        ' и ',
        maya.sex,
        ' уже условились: особенно выбирая забеги, ',
        you.get_colored_name(),
        ' нужно всё тщательно взвесить.',
      ]);
      await era.printAndWait([
        'Надо, чтобы ',
        maya.sex,
        ' выходила на забеги, где ',
        maya.sex,
        ' заинтересуется и где есть соперницы, и получала самые разные шансы—',
      ]);
      await era.printAndWait('(тук-тук)');
      await maya.say_and_wait('Мм? Кто бы это…');
      await teio.say_and_wait(['Хай! ', t_call_m, '!']);
      await maya.say_and_wait([
        'А! Это ',
        call_3,
        ' ♪Что такое, что такое? Ты пришла поиграть?',
      ]);
      await era.printAndWait([
        teio.get_colored_name(),
        ' так преклоняется перед президентом студсовета ',
        luna.get_colored_actual_name(),
        ' — Скаковая ',
        maya.uma_sex_title,
        ', а ещё соседка ',
        maya.get_colored_name(),
        ' по комнате.',
      ]);
      await teio.say_and_wait(
        'Н-ну, вроде! На самом деле президент дала мне видео.',
      );
      await luna.used_to_say_and_wait([
        l_call_t,
        ', если ты мной восхищаешься, не смотри только на меня — глянь и вокруг.',
      ]);
      await luna.used_to_say_and_wait([
        'Например — ',
        brian.get_colored_name(),
        ' и её манера бега',
      ]);
      await teio.say_and_wait([
        maya.sex,
        'Вот так сказала. Но одной смотреть скучно, правда?',
      ]);
      era.printButton('(…Нарита Брайан)', 1);
      await era.input();
      await era.printAndWait([
        brian.get_colored_name(),
        '── ',
        maya.sex,
        ' обладает подавляющей силой, Скаковая ',
        maya.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        maya.sex,
        'среди Classic… знаменитая тем, что взяла весь маршрут Triple Crown, 「Triple Crown Скаковая ',
        maya.uma_sex_title,
        ' 」.',
      ]);
      await era.printAndWait([
        maya.sex,
        'На поколение старше, чем ',
        maya.get_colored_name(),
        ', шанс встретиться в официальных скачках ещё невелик, но если впереди вызов Classic —',
      ]);
      era.printButton('「Стоит сперва глянуть」', 1);
      await era.input();
      await teio.say_and_wait([
        'О, неплохо~! ',
        callname_3,
        ' тоже вроде интересно, а?',
      ]);
      await maya.say_and_wait([
        'Э!? ',
        callname,
        '!? Maya же говорила — никаких измен!?',
      ]);
      await teio.say_and_wait([
        'А-ха-ха, да ничего! ',
        t_call_m,
        ' тоже любопытно — давайте все вместе посмотрим!',
      ]);
      await era.printAndWait([
        'Так ',
        you.get_colored_name(),
        ' и ',
        maya.couple_title,
        ' вместе смотрели ',
        brian.get_colored_name(),
        ' — запись скачки…',
      ]);
      era.drawLine();
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Лидирует ',
        brian.get_colored_name(),
        '! Полностью оторвалась!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Ноги и правда мощные! Точно монстр! Давит весь забег!! Прессинг остальных Скаковая ',
        maya.uma_sex_title,
        ', финиш—!!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        '— После четвёртого поворота снова ',
        maya.sex,
        '! Одним рывком по внешней обходит всех!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Сможет кто-нибудь догнать ',
        brian.get_colored_name(),
        '!? Огромный отрыв, огромный отрыв, финиш!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        maya.sex,
        'Осталась только эта дорога!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Вот это скачка, достойная звания Triple Crown, Скаковая ',
        maya.uma_sex_title,
        '! ',
        brian.get_colored_name(),
        ', выступила великолепно!',
      ]);
      await you.say_as_passer_by_and_wait('Ведущий', [
        'Комментаторская! Комментаторская! Сейчас в эфире ',
        brian.get_colored_name(),
        '  спортсменка!',
      ]);
      await you.say_as_passer_by_and_wait(
        'Ведущий',
        'И в этот раз тоже красивая победа! Ещё до старта ты уже знала, что победа твоя—',
      );
      await brian.say_and_wait('Тебе так кажется?');
      await you.say_as_passer_by_and_wait('Ведущий', [
        'Н-ну конечно! Всё-таки это ',
        brian.get_colored_name(),
        '  спортсменка!',
      ]);
      await brian.say_and_wait('……Хмф.');
      await brian.say_and_wait('Даже если знаешь — какая разница?');
      await brian.say_and_wait('Я бегу лишь затем, чтобы удовлетворить себя.');
      await brian.say_and_wait([
        'На дорожку выходят одни жаждущие победы Скаковая ',
        maya.uma_sex_title,
        '.',
      ]);
      await brian.say_and_wait([
        'Именно поэтому я и сокрушаю ',
        maya.couple_title,
        '. Чтобы утолить свой голод.',
      ]);
      await brian.say_and_wait('— И следующий забег тоже.');
      era.drawLine();
      await you.say_as_passer_by_and_wait('Вдвоём', '……');
      await era.printAndWait([
        '— На пути к Тройной короне Скаковая ',
        maya.uma_sex_title,
        ' у каждого G1-забега своя поговорка.',
      ]);
      await era.printAndWait([
        '「',
        sats_sho,
        ' 」— самая быстрая Скаковая ',
        maya.uma_sex_title,
        ' побеждает. 「',
        toky_yus,
        ' 」— самая везучая Скаковая ',
        maya.uma_sex_title,
        ' побеждает. 「',
        kiku_sho,
        ' 」— самая сильная Скаковая ',
        maya.uma_sex_title,
        ' побеждает.',
      ]);
      await era.printAndWait([
        'Но увиденное в этот раз ',
        brian.get_colored_name(),
        '  выступление 「запредельной силой」 превзошло все эти поговорки… ',
        maya.sex,
        ' вот настолько сильна.',
      ]);
      await maya.say_and_wait(['……………… ', callname, '.']);
      era.printButton('「Что-то не так?」', 1);
      await era.input();
      await maya.say_and_wait('Ничего, просто хотела тебя позвать!');
      await era.printAndWait([
        maya.get_colored_name(),
        '  сказала это и снова уставилась в телевизор.',
      ]);
      await era.printAndWait([
        '— Если на классике этого года ',
        brian.get_colored_name(),
        '  найдёт себе равную, тогда всё может сложиться иначе.',
      ]);
      era.drawLine({ content: 'На следующий день' });
      await you.say_as_passer_by_and_wait('Телевизор', [
        'Что за мощная Скаковая ',
        maya.uma_sex_title,
        '!── ',
        brian.get_colored_name(),
        ', уже взяла первую корону!!',
      ]);
      await maya.say_and_wait([
        '…… ',
        callname,
        ', ты всё ещё смотришь ',
        call_16,
        '  забег?',
      ]);
      await maya.say_and_wait([
        'Уже с ',
        call_3,
        '  договорились вернуть на следующей неделе, не обязательно смотреть прямо сейчас?',
      ]);
      era.printButton('「И то верно」', 1);
      await era.input();
      await maya.say_and_wait('Ннн……!!');
      await era.printAndWait([
        '— Но ',
        you.get_colored_name(),
        '  никак не может отвести взгляд.',
      ]);
      await era.printAndWait([
        'Если бы у ',
        maya.get_colored_name(),
        '  сейчас была соперница столь же сильная, как ',
        maya.sex,
        '…',
      ]);
      await era.printAndWait('(— шлёп)');
      await maya.say_and_wait([
        'Ненавижу—! Ненавижу-ненавижу-ненавижу-ненавижу—!! ',
        callname,
        ', смотри сюда, на меня!',
      ]);
      era.printButton('「Э?」', 1);
      await era.input();
      await maya.say_and_wait('Мне сейчас очень обидно!');
      await maya.say_and_wait([
        'Потому что ',
        callname,
        '  сейчас в таком азарте, да?',
      ]);
      await maya.say_and_wait([
        'Ненавижу, когда ты так себя ведёшь! Потому что ты мой ',
        callname,
        '!',
      ]);
      await maya.say_and_wait([
        'Чем ',
        call_16,
        '  выступление, я хочу, чтобы тебя заводило моё!',
      ]);
      era.printButton('「Маяно Топ Ган……」', 1);
      await era.input();
      await maya.say_and_wait([call_16, '  и правда очень сильная!']);
      await maya.say_and_wait([
        'И вместе с ней бежать в одном забеге — это заводит и заставляет сиять! Я тоже это знаю — ',
        maya.sex,
        '.',
      ]);
      await maya.say_and_wait('До дебюта я думала так же.');
      await maya.say_and_wait(
        '……Но я уже дебютировала! Узнала ещё больше и больше!',
      );
      await maya.say_and_wait([
        'А сейчас я! Могу стать сильнее, сильнее настолько, что『вжух—!』обгоню ',
        call_16,
        '!',
      ]);
      era.printButton('(……『обогнать』.)', 1);
      await era.input();
      await era.printAndWait(
        '……Верно, даже если сейчас нельзя сразиться напрямую.',
      );
      await era.printAndWait([
        'Взять целью догнать её — ',
        maya.sex,
        ' — для ',
        maya.get_colored_name(),
        '  это, пожалуй, станет отличным стимулом.',
      ]);
      await maya.say_and_wait([
        'Я говорю серьёзно! Я очень скоро обгоню ',
        call_16,
        ' !',
      ]);
      await maya.say_and_wait(
        'А когда обгоню, ты будешь смотреть только на меня и хвалить:『Как заводит!』?',
      );
      await maya.say_and_wait(
        'Скажешь мне『ты так сияешь』,『Маяно Топ Ган — самая лучшая』?',
      );
      era.printButton('「Конечно!」', 1);
      await era.input();
      await maya.say_and_wait('Тогда решено!!');
      await maya.say_and_wait(
        'Я очень серьёзно! Сдержи слово, ясно! Возьми в голову! Приём, как понял!?',
      );
      await era.printAndWait([
        '…… ',
        maya.sex,
        ' Невесть откуда преисполнившись задором, и—',
      ]);
      await era.printAndWait([
        'Именно в этот день ',
        maya.sex,
        ' обрела в сердце цель под именем「',
        brian.get_colored_name(),
        ' 』.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = 'Летний сбор (классический год)';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        'С сегодняшнего дня начинается 「летний сбор」 — сейчас развернётся усиленная тренировка, чтобы поднять силу.',
      );
      await maya.say_and_wait('Вау……☆ какой милый красный домик～!');
      await maya.say_and_wait([
        'Мы с ',
        callname,
        '  вот здесь и проведём взрослое лето, да?!',
      ]);
      era.printButton('「Это 『летний сбор』, и его проводят все вместе」', 1);
      await era.input();
      await maya.say_and_wait('Хмпф—! Знаю я, знаю!');
      await maya.say_and_wait(
        'Хмпф! Только сейчас ты ещё можешь считать Maya ребёнком!',
      );
      await era.printAndWait([
        'Итак, ',
        you.get_colored_name(),
        ' и ',
        maya.get_colored_name(),
        '  начали летний сбор.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = 'Код: горение!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      maya,
      brian,
      you,
      callname,
      call_16,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await era.printAndWait(
        'С сегодняшнего дня начинается 「летний сбор」 — сейчас развернётся усиленная тренировка, чтобы поднять силу.',
      );
      await era.printAndWait('И вот наступила первая неделя летнего сбора.');
      await era.printAndWait([
        'Среди соблазнов моря, зелёных гор, фестивалей и всего прочего, ',
        maya.get_colored_name(),
        ' ',
        maya.sex,
        ' ──',
      ]);
      await maya.say_and_wait('Ха-а…… ха-а…… фух……☆');
      await maya.say_and_wait('Хе-хе, Maya и правда уже стала быстрее?');
      await maya.say_and_wait([
        'Тогда Maya будет самой быстрой Скаковой ',
        maya.uma_sex_title,
        ' этого года! Нет, самой быстрой Скаковой ',
        maya.uma_sex_title,
        ' на свете?',
      ]);
      era.printButton('「Не слишком ли это громко?」', 1);
      await era.input();
      await maya.say_and_wait('Да ничего! Maya просто так сказала!');
      await maya.say_and_wait([
        'И ещё Maya обязательно заставит ',
        callname,
        '  сказать 『Маяно Топ Ган сияет ярче всех』!',
      ]);
      await maya.say_and_wait(
        'Ещё ярче, чем та, кого Maya видела в тот день —',
      );
      await maya.say_and_wait(['── ', call_16, '.']);
      era.printButton(`「Брайан…」`, 1);
      await era.input();
      await maya.say_and_wait([
        'А, яда-яда! Запрещаю ',
        callname,
        '  произносить это имя!',
      ]);
      await maya.say_and_wait(
        '……Честное слово, ни на миг нельзя расслабляться!',
      );
      await maya.say_and_wait([
        'А～ чего это Maya всё ещё в классиках. Как только выйду в сеньоры, сразу с ',
        call_16,
        ' ──',
      ]);
      await maya.say_and_wait('А!!');
      await maya.say_and_wait([
        callname,
        '. Какие скачки ещё остались на маршруте Тройной короны?',
      ]);
      await era.printAndWait([
        '— Маршрут Тройной короны. Путь, которым ',
        brian.get_colored_name(),
        '  стала 「трижды коронованной Скаковой ',
        maya.uma_sex_title,
        ' 」.',
      ]);
      await era.printAndWait([
        'Теперь весенние ',
        sats_sho,
        ' и ',
        toky_yus,
        ' уже позади, и последняя скачка маршрута Тройной короны……',
      ]);
      era.printButton('「Ещё остался 『Kikuka Sho』」', 1);
      await era.input();
      await maya.say_and_wait('Нет проблем☆ то есть это следующая цель, да!');
      await maya.say_and_wait([
        'Maya выдаст забег ещё горячее, чем у ',
        call_16,
        '  тогда!',
      ]);
      era.printButton('「Ну и боевой дух у тебя」', 1);
      await era.input();
      await maya.say_and_wait('Хи-хи☆ правда?');
      await maya.say_and_wait(
        'Но такой задорной Maya ты тоже не против～? Правда♪',
      );
      await era.printAndWait([
        'Так и порешили: новая цель — 「',
        kiku_sho,
        ' 」—!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = 'Фестиваль';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} sunday 美丽周日
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_55 摩耶重炮对美丽周日的称呼
     * @param {PrintedSpan} call_60 摩耶重炮对优秀素质的称呼
     * @param {PrintedSpan} s_call_m 美丽周日对摩耶重炮的称呼
     * @param {PrintedSpan} s_call_n 美丽周日对优秀素质的称呼
     * @param {PrintedSpan} n_call_s 优秀素质对美丽周日的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (
      maya,
      sunday,
      nature,
      you,
      callname,
      call_55,
      call_60,
      s_call_m,
      s_call_n,
      n_call_s,
      kiku_sho,
    ) => {
      await era.printAndWait('Это случилось на летнем сборе —');
      await maya.say_and_wait([
        'А, ',
        callname,
        '! у тебя сегодня вечер свободен?',
      ]);
      await maya.say_and_wait('На самом деле……');
      await sunday.say_and_wait(['А, это ', s_call_m, ' ☆']);
      await maya.say_and_wait(['Вау, это же ', call_55, '! Hello-hello☆']);
      await sunday.say_and_wait([
        'Hello-hello & Marvelous☆ а-ха-ха, ',
        s_call_m,
        ' ★',
      ]);
      await era.printAndWait([
        maya.sex,
        'Это ',
        sunday.get_colored_name(),
        '.',
      ]);
      await sunday.say_and_wait([
        'Пойдём сегодня вечером на фестиваль☆ я ещё позвала ',
        s_call_n,
        ', ',
        nature.sex,
        ' тоже придёт★',
      ]);
      await nature.say_and_wait([
        'Стоп. Эй, неуправляемая ',
        maya.child_sex_title,
        ' Погодите. Меня же только 『пригласили』, верно?',
      ]);
      await sunday.say_and_wait([
        'Не думай о таких мелочах～☆ так что, ',
        s_call_m,
        ', во сколько встречаемся?',
      ]);
      await maya.say_and_wait('А, точно! Насчёт этого……');
      await maya.say_and_wait([
        'Maya в этот раз пас! Сегодня вечером хочу с ',
        callname,
        '  устроить секретную спецтренировку!',
      ]);
      await sunday.say_and_wait('Ээээ————!?');
      await nature.say_and_wait('Ох……?');
      era.printButton('「Мы такое обещали?」', 1);
      await era.input();
      await maya.say_and_wait('Ага, Maya как раз собиралась тебе сказать!');
      await maya.say_and_wait([
        'Вот так-то, ',
        call_55,
        ' и ',
        call_60,
        '  идите на фестиваль и веселитесь!',
      ]);
      await maya.say_and_wait(['Ну что, ', callname, '. Пойдём♪']);
      await nature.say_and_wait([
        'Ох……? Сияющая ',
        maya.child_sex_title,
        ' и правда без ума от ',
        callname,
        ' ～',
      ]);
      await sunday.say_and_wait('…………');
      await nature.say_and_wait(['Эй, алло～? ', n_call_s, '  ты слушаешь?']);
      await sunday.say_and_wait([n_call_s, '────!']);
      await nature.say_and_wait('Ай!?');
      await sunday.say_and_wait([
        s_call_m,
        ' Это так красиво☆ Я узнала красоту, какой у меня не было★',
      ]);
      await nature.say_and_wait('Ч-что…?');
      await sunday.say_and_wait([
        s_call_n,
        '! Нам тоже нельзя отставать! Спецподготовка не хуже, чем у ',
        s_call_m,
        ' !',
      ]);
      await sunday.say_and_wait(
        'Бить железо, пока горячо — вот это Marvelous☆ Ладно, пошли!!',
      );
      await nature.say_and_wait('Ч-что~~!? Подожди, не тяни меня—!!');
      era.drawLine();
      await maya.say_and_wait('Ха… фу…');
      await maya.say_and_wait([
        'Ладно, три подхода готовы! ',
        callname,
        ', чем займёмся дальше?',
      ]);
      await era.printAndWait('(Фью…)');
      await maya.say_and_wait('М? Это сейчас было—');
      await era.printAndWait('(Бум… трещ-трещ…)');
      await maya.say_and_wait(['Вау! Фейерверк! ', callname, ', фейерверк!!']);
      await maya.say_and_wait(
        'Аха-ха, какие большие. Не думала, что даже отсюда видно.',
      );
      await maya.say_and_wait(
        'Хе-хе. Интересно, насколько красиво было бы смотреть на площадке?',
      );
      era.printButton('「Тебе всё-таки хочется на фестиваль?」', 1);
      await era.input();
      await maya.say_and_wait('…Нг~ ничего!');
      await maya.say_and_wait('Фестиваль можно и потом посетить.');
      await maya.say_and_wait([
        'Вот выиграю 『',
        kiku_sho,
        ' 』, накрепко схвачу ',
        callname,
        ' за сердце — и тогда пойду!',
      ]);
      era.printButton('「Ты уже схватила моё сердце」(сила+20)', 1);
      era.printButton(
        '「Тогда тебе ещё как следует постараться」(характер+20)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('Э, правда? Но…');
        await maya.say_and_wait('Ещё недостаточно крепко! Maya так думает!');
        await maya.say_and_wait([
          'Maya сделает так, что ',
          callname,
          ' влюбится по уши и без меня уже не сможет!',
        ]);
        await maya.say_and_wait([
          'Хи-хи, ',
          callname,
          ', приготовься морально♪',
        ]);
        await era.printAndWait([
          '— С этими словами ',
          maya.get_colored_name(),
          ' снова побежала по пляжу.',
        ]);
      } else {
        await maya.say_and_wait('Хе-хе. Для меня это вообще ерунда♪');
        await maya.say_and_wait('Я же ещё расту! Справлюсь в два счёта!');
        await maya.say_and_wait([
          'Я возьму победы в 『',
          kiku_sho,
          ' 』 и в других скачках и заставлю ',
          callname,
          ' влюбиться в меня!',
        ]);
        await maya.say_and_wait([
          'Когда я с ',
          callname,
          ' снова встретим лето, на берегу обязательно дай мне взрослую награду…',
        ]);
        await era.printAndWait('(Фью… бум————!!)');
        await maya.say_and_wait('Э, э-э~!? Почему выстрелили именно сейчас~!?');
        await maya.say_and_wait(
          'Фейерверк, ты большой-большой-большой дурак—! Чувствуй атмосферу!',
        );
        await era.printAndWait('(Бум————!!)');
        await maya.say_and_wait(
          'Нг~ только что атмосфера была такая классная~! Ну вот~!!',
        );
        await era.printAndWait([
          maya.get_colored_name(),
          ' то и дело прыгала вверх-вниз, злясь на фейерверк…',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = 'Конец летних сборов (классический год)';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait('Летние сборы кончились в мгновение ока.');
      await era.printAndWait([
        maya.get_colored_name(),
        ' тоже изрядно постаралась—',
      ]);
      await you.say_as_passer_by_and_wait(
        'Водитель автобуса',
        'Так, прибыли в академию Трейсен.',
      );
      await maya.say_and_wait('Фу… фу…');
      era.printButton('「Maya, мы уже приехали」', 1);
      await era.input();
      await maya.say_and_wait(['Э…? ', callname, '…Фу.']);
      await maya.say_and_wait('Фуаа… ничего. Я знаю…');
      await maya.say_and_wait('Фу… фу…');
      await era.printAndWait([
        '…… ',
        maya.sex,
        ' Этим летом очень старалась, ',
        you.get_colored_name(),
        ' решил(а) пусть ',
        maya.sex,
        ' ещё немного поспит.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = 'Навстречу Kikuka Sho';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     */
    const f = async (maya, you, callname, kiku_sho) => {
      await maya.say_and_wait([
        'Доброе утро, ',
        callname,
        '! Готов(а) любоваться идеальным полётом?',
      ]);
      await maya.say_and_wait([
        'Ведь сегодня 『',
        kiku_sho,
        ' 』! Это не тренировка, а официальные скачки☆',
      ]);
      era.printButton('「Покажи плоды всех своих стараний!」', 1);
      await era.input();
      await maya.say_and_wait('I copy!');
      await maya.say_and_wait(
        'На траве останется лишь след бега Maya — быстрее, чем рассеивается дым☆',
      );
      await maya.say_and_wait([callname, ' взгляд и сердце! Я всё украду♪']);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = 'Пока не собираюсь приземляться';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} etsuko 乙名史记者/乙名史悦子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} kiku_sho 菊花赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      etsuko,
      you,
      callname,
      call_16,
      kiku_sho,
      arim_kin,
    ) => {
      await maya.say_and_wait(
        'Радар поймал сигнал! Цель захвачена! До цели осталось 3, 2, 1…!',
      );
      await maya.say_and_wait([
        callname,
        ', ты это видел(а)~? Как Maya выступила~☆',
      ]);
      era.printButton('「Ты отлично пробежала」', 1);
      await era.input();
      await maya.say_and_wait(
        'Эх-хе-хе~☆ Правда-правда! Maya и есть тот самый центр внимания♪',
      );
      await etsuko.say_and_wait([
        '…… ',
        maya.get_colored_name(),
        ' ! ',
        maya.get_colored_name(),
        ' !',
      ]);
      await etsuko.say_and_wait(
        'Я из 『Сияющего ежемесячника』, Отна Фуми. Можно взять у тебя впечатления после скачки?',
      );
      await maya.say_and_wait(
        'Вау! Меня будут интервьюировать~!? Можно~☆ Я на всё отвечу!',
      );
      await etsuko.say_and_wait('Спасибо. Тогда сразу—');
      await etsuko.say_and_wait([
        'После множества проб ты вышла на этот 『',
        kiku_sho,
        ' 』. Твоё выступление словно заявляет, что тебе лучше всего подходит длинная дистанция…',
      ]);
      await maya.say_and_wait('Мм?');
      await etsuko.say_and_wait(
        'Ах, прости. Сейчас подумаю, как бы это сказать.',
      );
      await etsuko.say_and_wait([
        maya.get_colored_name(),
        ' на классике настоящей целью, конечно же, было 『',
        kiku_sho,
        ' 』──',
      ]);
      await maya.say_and_wait(
        'Мм? Можешь не перефразировать. Maya и так поняла.',
      );
      await maya.say_and_wait('Просто я хотела сказать 『почему же』.');
      await maya.say_and_wait([
        'Я просто хотела выйти на 『',
        kiku_sho,
        ' 』, поэтому и стартовала. К тому же это скачка, где ',
        call_16,
        ' уже бегала.',
      ]);
      await etsuko.say_and_wait([
        '…… ',
        call_16,
        '?Это та ',
        maya.get_colored_name(),
        '?',
      ]);
      await maya.say_and_wait([
        'Ага, точно! Репортёр ',
        etsuko.adult_sex_title,
        ', я тебя спрошу! Моё выступление завело сильнее, чем ',
        call_16,
        '? Было?',
      ]);
      await etsuko.say_and_wait('Ох… вот это да.');
      await etsuko.say_and_wait([
        'Ты бросаешь вызов ',
        brian.get_colored_name(),
        ', да?! Вот это…!',
      ]);
      await etsuko.say_and_wait([
        'Тогда спрошу напрямик. ',
        maya.get_colored_name(),
        ' тоже выйдет в этом году на 『',
        arim_kin,
        ' 』?',
      ]);
      await maya.say_and_wait(['『', arim_kin, ' 』? Maya?']);
      await etsuko.say_and_wait([
        'Ага, потому что 『Тройная корона Скаковая ',
        maya.uma_sex_title,
        ' 』 ',
        brian.get_colored_name(),
        ' тоже выйдет на Arima в этом году.',
      ]);
      await etsuko.say_and_wait('Раз так, нужна очная дуэль, верно?');
      await era.printAndWait([
        '「',
        arim_kin,
        ' 」…это скачка, которую проводят в конце каждого года. И сцена, которая честно показывает Скаковая ',
        maya.uma_sex_title,
        ' фанатскую поддержку и нынешнюю силу.',
      ]);
      await era.printAndWait([
        'Кроме 「Тройная корона Скаковая ',
        maya.uma_sex_title,
        ' 」',
        brian.get_colored_name(),
        ', ещё вроде 「Героиня」 ',
        amazon.get_colored_name(),
        ' и другие знаменитые Скаковая ',
        maya.uma_sex_title,
        ' похоже, уже заявили, что выйдут.',
      ]);
      await maya.say_and_wait('Ага-ага, я выйду!');
      era.printButton('(Ответила слишком сходу!)', 1);
      await era.input();
      await etsuko.say_and_wait([
        'Хе-хе. Кто вспыхнет ярче — суперзвезда или новая звезда. Как же ждать в этом году ',
        arim_kin,
        '.',
      ]);
      era.drawLine();
      await maya.say_and_wait([
        'Ха-ха♪ Следующая скачка — 『',
        arim_kin,
        ' 』! ',
        callname,
        ', давай выложимся☆',
      ]);
      era.printButton('「Точно выходишь на 『Arima Kinen』?」', 1);
      await era.input();
      await maya.say_and_wait([
        'Ага. Там я смогу напрямую с ',
        call_16,
        ' посоревноваться, да?',
      ]);
      await maya.say_and_wait(
        'Хи-хи, я так долго этого ждала! Теперь наконец докажу!',
      );
      await maya.say_and_wait([
        'Докажу, что Maya заводит тебя сильнее, чем ',
        call_16,
        ' ♪',
      ]);
      await era.printAndWait([
        'И вот цель, которую ',
        maya.sex,
        ' назвала этой весной, наконец оказалась на расстоянии вытянутой руки…!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = 'Навстречу Arima Kinen';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} b_call_a 成田白仁对菱亚马逊的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (maya, amazon, brian, callname, b_call_a, arim_kin) => {
      await maya.say_and_wait([
        'Вот он, наконец-то вот он, 『',
        arim_kin,
        ' 』～!!',
      ]);
      await maya.say_and_wait([
        'Хм-хм, ',
        callname,
        '. Смотри внимательно. На этой скачке Maya —',
      ]);
      await maya.say_and_wait('Нх! Эти двое, только не…');
      await amazon.say_and_wait(
        'Ха! Не думала, что в этом году снова с тобой схлестнусь… шею уже намылила и ждёшь?',
      );
      await brian.say_and_wait('……');
      await brian.say_and_wait([
        'Хех… что ты хочешь сказать, я совершенно не понимаю, ',
        b_call_a,
        '.',
      ]);
      await amazon.say_and_wait(
        'А!? Это я тебе сейчас за прошлогоднее 『готовься сдаться』—',
      );
      await brian.say_and_wait('Эх… я не просила объяснять замысел.');
      await brian.say_and_wait('Ты и так должна знать. Хочешь задеть меня —');
      await brian.say_and_wait(
        'Не языком, а тем, что покажешь на скачках. Выложи настоящую силу и победи меня.',
      );
      await amazon.say_and_wait('…Ох.');
      await amazon.say_and_wait([
        'Тогда на этой 『',
        arim_kin,
        ' 』 устроим дуэль один на один.',
      ]);
      await brian.say_and_wait('Хм… взгляд ничего.');
      await era.printAndWait([
        '—Перед взглядом ',
        maya.get_colored_name(),
        ' стоят 「Тройная корона Скаковая ',
        maya.uma_sex_title,
        ' 」',
        brian.get_colored_name(),
        ' и 「Героиня」 ',
        amazon.get_colored_name(),
        ' — эти двое.',
      ]);
      await maya.say_and_wait('…………');
      era.printButton('「Маяно Топ Ган?」', 1);
      await era.input();
      await maya.say_and_wait('Ах!');
      await maya.say_and_wait([
        'Прости-прости, ',
        callname,
        '! Я сейчас как будто зависла!',
      ]);
      era.printButton('「С такого ракурса в них особая мощь」', 1);
      await era.input();
      await maya.say_and_wait(
        'Ах, яда-яда! Так нельзя говорить! Maya не проиграет!',
      );
      await maya.say_and_wait(
        'Поэтому на скачке смотри только на Maya, всё время! Понял?',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = 'Баки полны';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      you,
      callname,
      call_16,
      a_call_m,
      arim_kin,
      hans_dai,
    ) => {
      await you.say_as_passer_by_and_wait('Диктор', [
        '—Великолепно! Просто великолепно! Чемпионке этого года 『',
        arim_kin,
        ' 』 — аплодисменты!!',
      ]);
      await era.printAndWait('(Уаааа────────!!)');
      await you.say_as_passer_by_and_wait('Зритель A', [
        'Кстати, ',
        maya.get_colored_name(),
        ' и правда крутая. Ещё и обыграла ',
        brian.get_colored_name(),
        '……',
      ]);
      await you.say_as_passer_by_and_wait('Зритель B', 'Мм… правда. Но…');
      await you.say_as_passer_by_and_wait('Зритель B', [
        brian.get_colored_name(),
        ' Здесь проиграть просто не могут. Ты тоже так думаешь?',
      ]);
      await you.say_as_passer_by_and_wait('Зритель A', [
        'М-м, я тоже так думаю… Верю, что ',
        brian.get_colored_name(),
        '  победит в следующий раз.',
      ]);
      await maya.say_and_wait('Ха-а… фу…! Фу… ха-а…!');
      await amazon.say_and_wait([
        'С-слушай, ',
        a_call_m,
        ', ты в порядке? Лицо какое-то нездоровое…',
      ]);
      era.printButton('「…Маяно Топ Ган!」', 1);
      await era.input();
      await amazon.say_and_wait([
        'Слава богу — ',
        maya.sex,
        ' силы, кажется, на исходе; лучше поскорее дать ей отдохнуть — ',
        maya.sex,
        '.',
      ]);
      await maya.say_and_wait('…Я в порядке. Важнее другое…!');
      await maya.say_and_wait('Maya так весело пробежалась!!');
      await amazon.say_and_wait('— Чего!?');
      await brian.say_and_wait('……');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        'Сотрудник',
        'Э, тогда следующий вопрос. Кто хочет спросить — руку вверх—',
      );
      await maya.say_and_wait('…Я! У Maya вопрос!!');
      await you.say_as_passer_by_and_wait('Сотрудник', [
        'Хорошо, тогда пожалуйста… ',
        maya.get_colored_name(),
        ' гонщица!?',
      ]);
      await era.printAndWait('(Шум голосов…)');
      await maya.say_and_wait([
        'Скажи, ',
        call_16,
        '! В какой скачке ты дальше?!',
      ]);
      await maya.say_and_wait(['Хочу ещё раз пробежать с ', call_16, ' !']);
      await maya.say_and_wait(
        'Пока не добежала до финиша, я не знала, чем всё кончится и что мне делать, так волновалась…',
      );
      await maya.say_and_wait('И завелась так, что просто жуть!');
      await you.say_as_passer_by_and_wait('Сотрудник', [
        'Э-это… ',
        maya.get_colored_name(),
        ' гонщица. Простите, сейчас вопросы задают журналисты…',
      ]);
      await maya.say_and_wait('Не-а! Я уже почти доспросила, подождите!');
      await maya.say_and_wait(
        'Эй-эй, давай ещё разок сразимся! Maya тебя снова обыграет!',
      );
      await maya.say_and_wait([
        'Ну пожалуйста, пожалуйста! ',
        call_16,
        ' тоже ещё не натешилась!?',
      ]);
      await brian.say_and_wait('…Хм.');
      await you.say_as_passer_by_and_wait('Журналист A', [
        'Т-ты! Прекрати уже! ',
        brian.get_colored_name(),
        ' гонщица тоже—',
      ]);
      await brian.say_and_wait(['……『', hans_dai, ' 』.']);
      await maya.say_and_wait('!');
      await brian.say_and_wait(
        'Я на твой вопрос ответила. Ведущий, следующего.',
      );
      await you.say_as_passer_by_and_wait(
        'Сотрудник',
        'Э, а… хорошо! Тогда следующий—',
      );
      await amazon.say_and_wait(['Ого~ ', a_call_m, ' ну и шоу устроила.']);
      await amazon.say_and_wait([
        'Сама в пекло полезла. То ли потому, что ',
        maya.sex,
        ' ещё птенец, или—',
      ]);
      era.printButton('「Потому что ' + maya.sex + 'хватает духу」', 1);
      await era.input();
      await amazon.say_and_wait([
        'Ха-ха. Ты ',
        maya.sex,
        ' очень высоко ставишь.',
      ]);
      await amazon.say_and_wait('Неплохо. Я вас двоих запомню.');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────!!']);
      await maya.say_and_wait([
        'Слушай-слушай, Maya! Дальше хочу на 『',
        hans_dai,
        ' 』!',
      ]);
      era.printButton('「Я так и знал(а)」', 1);
      await era.input();
      await maya.say_and_wait(
        'Э, откуда ты знаешь? Телепатия!? Или у нас красная нить судьбы!?',
      );
      era.printButton('「Потому что ты вся на взводе」', 1);
      await era.input();
      await maya.say_and_wait('!');
      await maya.say_and_wait([
        'Хе-хе. Даже такое знаешь — вот поэтому ты и ',
        callname,
        '.',
      ]);
      await maya.say_and_wait([
        'Ладно, на 『',
        hans_dai,
        ' 』 я вчистую обыграю ',
        call_16,
        ' о☆',
      ]);
      await maya.say_and_wait(
        'Раз уж лететь в болтанку — так напролом, в лоб! Так Maya и летает!',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = 'Дозаправка';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      you,
      callname,
      call_16,
      a_call_m,
      arim_kin,
      hans_dai,
    ) => {
      await you.say_as_passer_by_and_wait('Комментатор', [
        '— Браво! Великолепно! Аплодисменты чемпионке 『',
        arim_kin,
        ' 』 этого года!!',
      ]);
      await era.printAndWait('(Уаааааа————————!!)');
      await you.say_as_passer_by_and_wait('Зритель A', [
        'Честно, не думалось, что ',
        maya.get_colored_name(),
        ' такая крутая. На миг казалось, что ',
        maya.sex,
        ' обгонит ',
        brian.get_colored_name(),
        '.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Зритель B',
        'Хо-хо, раз ты так думаешь — глазомер тебе ещё тренировать и тренировать. Вот что такое 『разница в классе』.',
      );
      await you.say_as_passer_by_and_wait('Зритель B', [
        'Впрочем, ',
        maya.sex,
        ' и правда сильная. Если через год на ',
        arim_kin,
        ' …может, и будет шанс.',
      ]);
      await maya.say_and_wait('Ха-а… фу…! Фу… ха-а…!');
      await amazon.say_and_wait([
        'С-слушай, ',
        a_call_m,
        ', ты в порядке? Лицо какое-то нездоровое…',
      ]);
      era.printButton('「…Маяно Топ Ган!」', 1);
      await era.input();
      await amazon.say_and_wait([
        'Слава богу, ',
        maya.sex,
        ' её силы, кажется, на исходе, лучше поскорее дать ',
        maya.sex,
        ' отдохнуть…',
      ]);
      await maya.say_and_wait('……Я в порядке. Важнее другое……!');
      await maya.say_and_wait('Maya так весело бежала!!');
      await amazon.say_and_wait('—А!?');
      await brian.say_and_wait('……');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        'Сотрудник',
        'Э-э, тогда следующий вопрос. Кто хочет спросить — поднимите руку—',
      );
      await maya.say_and_wait('……Я! У меня вопрос!!');
      await you.say_as_passer_by_and_wait('Сотрудник', [
        'Хорошо, тогда прошу… ',
        maya.get_colored_name(),
        ' гонщица!?',
      ]);
      await era.printAndWait('(Гул голосов……)');
      await maya.say_and_wait([
        'Можно спросить, ',
        call_16,
        '! В какой скачке ты выступишь дальше!?',
      ]);
      await maya.say_and_wait(['Я хочу ещё раз с ', call_16, ' пробежать!']);
      await maya.say_and_wait(
        'До финиша я не знала, чем всё кончится и что мне делать, я так нервничала……',
      );
      await maya.say_and_wait('И восторг — просто не унять!');
      await brian.say_and_wait('—Хм. Ведущий, следующий вопрос……');
      await maya.say_and_wait('А, подожди! Это нечестно! Не убегай!!');
      await brian.say_and_wait('……О?');
      await brian.say_and_wait('Что ты сейчас сказала? Что я от тебя сбегаю?');
      await maya.say_and_wait('Ага, точно! Ты хочешь сбежать от вызова Maya!');
      await maya.say_and_wait('Ты же такая сильная и такая сияющая!');
      await maya.say_and_wait(
        'Просто боишься, что в следующий раз, если снова сойдёшься со мной, можешь проиграть, да?',
      );
      await you.say_as_passer_by_and_wait('Репортёр A', [
        'Э-это… ',
        maya.get_colored_name(),
        ' гонщица? Тебя только что обошла ',
        maya.sex,
        ' ──',
      ]);
      await maya.say_and_wait('Но в следующий раз я выиграю!');
      await maya.say_and_wait(
        'Maya наконец почувствовала, что может сверкать, и этим я не удовлетворюсь!!',
      );
      await brian.say_and_wait('……');
      await you.say_as_passer_by_and_wait(
        'Репортёр B',
        'Я-я вот что…… в следующий раз будет слишком сложно, разница в силе же очевидна—',
      );
      await brian.say_and_wait(['……『', hans_dai, ' 』.']);
      await maya.say_and_wait('!');
      await brian.say_and_wait(
        'Я ответила на твой вопрос. Ведущий, следующий.',
      );
      await you.say_as_passer_by_and_wait(
        'Сотрудник',
        'Э, а…… хорошо! Тогда следующий—',
      );
      await amazon.say_and_wait([
        'О~ ',
        a_call_m,
        ' закрутил(а) всё так занятно.',
      ]);
      await amazon.say_and_wait([
        'Так опрометчиво бросить вызов. Это потому, что ',
        maya.sex,
        ' — желторотый телёнок, или же—',
      ]);
      era.printButton('「Потому что ' + maya.sex + 'хватает духу」', 1);
      await era.input();
      await amazon.say_and_wait([
        'Ха-ха. В твоих глазах ',
        maya.sex,
        ' стоит очень высоко.',
      ]);
      await amazon.say_and_wait('Неплохо. Я запомню вас двоих.');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────!!']);
      await maya.say_and_wait([
        'Слушай-слушай, Maya! Дальше хочу выйти на『',
        hans_dai,
        ' 』!',
      ]);
      era.printButton('「Я так и знал(а)」', 1);
      await era.input();
      await maya.say_and_wait(
        'Э, откуда ты знаешь? Телепатия!? Или у нас красная нить судьбы!?',
      );
      era.printButton('「Потому что ты так завелась」', 1);
      await era.input();
      await maya.say_and_wait('!');
      await maya.say_and_wait([
        'Хе-хе. Даже такое знаешь, точно ',
        callname,
        '.',
      ]);
      await maya.say_and_wait([
        'Так, на『',
        hans_dai,
        ' 』 я полностью обыграю ',
        call_16,
        ' о☆',
      ]);
      await maya.say_and_wait(
        'Раз уж лететь в турбулентность — прорываться честно в лоб! Вот так Maya летает!',
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = 'Новогоднее посещение святилища';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     */
    const f = async (maya, you, callname, call_16) => {
      await era.printAndWait([
        'Судьбоносный третий год. ',
        maya.get_colored_name(),
        ' в этом году бросит вызов сеньор-классу.',
      ]);
      era.printButton('「Сеньор-класс」', 1);
      await era.input();
      await era.printAndWait('—Этот год точно станет решающим.');
      await maya.say_and_wait([
        'Хе-хе♪ ',
        callname,
        ', не делай такое серьёзное лицо~♪',
      ]);
      await maya.say_and_wait(
        'Мы же наконец пришли на свидание в святилище? Улыбайся☆',
      );
      era.printButton('「Ну и беззаботная же ты」', 1);
      await era.input();
      await maya.say_and_wait('А-ха-ха, потому что мне весело!');
      await maya.say_and_wait('Хм-хм. А Maya уже решила цель на этот год♪');
      await maya.say_and_wait([
        'Я обязательно превзойду такую, как ',
        maya.sex,
        '……превзойду выложившуюся на полную ',
        call_16,
        '!',
      ]);
      await maya.say_and_wait('Я думала очень-очень много, но для меня—');
      await maya.say_and_wait(
        '—это то, чего я сейчас хочу добиться больше всего!',
      );
      era.printButton('「У тебя точно получится」', 1);
      await era.input();
      await maya.say_and_wait('Хи-хи……Maya тоже так думает♪');
      await era.printAndWait([
        '── ',
        you.get_colored_name(),
        ' смотрит, как ',
        maya.sex,
        ' улыбается, и снова приходит эта мысль.',
      ]);
      era.println();
      era.printButton(
        '(Пусть ' +
          maya.sex +
          'всегда будет здорова и полна сил) (энергия +300)',
        1,
      );
      era.printButton(
        '(Пусть ' +
          maya.sex +
          'многому научится и вырастет крепкой) (все параметры +10)',
        2,
      );
      era.printButton(
        '(Пусть ' + maya.sex + 'станет настоящей взрослой) (очки навыков +70)',
        3,
      );
      const ret = await era.input();
      await maya.say_and_wait(['М? ', callname, ', ты что-то сказал(а)?']);
      era.printButton('「Я только что помолился(ась)」', 1);
      await era.input();
      switch (ret) {
        case 1:
          await maya.say_and_wait(
            'Э!? Нечестно, так нечестно! Помолился(ась) первым, один(а)!',
          );
          await maya.say_and_wait([
            ', ну честное слово, сначала! ',
            callname,
            ' Надо молиться вместе со мной!',
          ]);
          await maya.say_and_wait('А как помолимся, продолжим свидание♪ ясно☆');
          await era.printAndWait([
            'А на обратном пути после новогоднего молебна вы устроили свидание у лотков и отправились домой.',
          ]);
          break;
        case 2:
          await maya.say_and_wait('Ха-ха, у тебя опять такое лицо.');
          era.printButton('「…Какое такое лицо?」', 1);
          await era.input();
          await maya.say_and_wait('Хе-хе, ну вот…');
          await maya.say_and_wait(
            'Лицо в духе «что я могу сделать для Маяно Топ Ган». И ещё лицо «я буду беречь Маяно Топ Ган»!',
          );
          await maya.say_and_wait(
            'Стоит увидеть такое лицо — и я заряжаюсь в сто раз♪',
          );
          await maya.say_and_wait(
            'Хо-хо, ладно! Пошли на первую новогоднюю тренировку☆',
          );
          await era.printAndWait([
            'И вот в этот день ',
            you.get_colored_name(),
            ' вместе с ',
            maya.get_colored_name(),
            ' проводит первую новогоднюю тренировку.',
          ]);
          break;
        case 3:
          await maya.say_and_wait([
            ', хо-хо-хо… ',
            callname,
            ', зелёный, ты ещё слишком зелёный!',
          ]);
          await maya.say_and_wait([
            'Maya-то станет выдающейся зрелой ',
            maya.phy_sex_title,
            ' ~☆',
          ]);
          era.printButton('「И чем они отличаются?」', 1);
          await era.input();
          await maya.say_and_wait([
            'Совсем другое~! Не могу~!! Разница между «взрослым» и «зрелая ',
            maya.phy_sex_title,
            ' » как раз в…',
          ]);
          await maya.say_and_wait('…в чём же разница.');
          era.printButton('「Так ты и вправду не знаешь…」', 1);
          await era.input();
          await maya.say_and_wait(
            'Ауаа!? Вовсе нет, вовсе нет!! Они правда разные~!!',
          );
          await era.printAndWait([
            'Несколько дней спустя ',
            you.get_colored_name(),
            ' в библиотеке видит ',
            maya.get_colored_name(),
            ', впившуюся взглядом в словарь.',
          ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  os_95_2: (() => {
    const title = 'Испытать удачу в лотерее!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {number} dice 抽奖结果
     */
    const f = async (maya, you, callname, call_3, call_16, dice) => {
      await era.printAndWait([
        'Однажды вечером, когда вы проходили по торговой улице—',
      ]);
      await maya.say_and_wait([
        'Эй-эй, ',
        callname,
        '. Там вроде какое-то мероприятие!',
      ]);
      await you.say_as_passer_by_and_wait(
        'сотрудник торговой улицы',
        'Сюда-сюда, сейчас новогодний суперрозыгрыш~! Главный приз — «путёвка в онсэн»!',
      );
      await you.say_as_passer_by_and_wait(
        'сотрудник торговой улицы',
        'Первый приз — «премиальный бургер с морковной котлетой», второй — «корзина моркови», третий — «одна морковка»!',
      );
      await you.say_as_passer_by_and_wait(
        'сотрудник торговой улицы',
        'Эй, вы двое! На обратном пути со свидания не хотите проверить любовь двоих?',
      );
      await maya.say_and_wait('Йа☆ хочу-хочу♪');
      era.printButton('「Сразу же решила」', 1);
      await era.input();
      await maya.say_and_wait('Потому что это же так весело! И, ещё, эм…');
      await maya.say_and_wait(
        'Мы так любим друг друга, точно вытянем главный приз! Правда же, правда♪',
      );
      await era.printAndWait(
        '…только вот удача и любовь вроде не особо связаны.',
      );
      await era.printAndWait([
        'Не устояв перед напором ',
        maya.get_colored_name(),
        ', ты покупаешь что-то на торговой улице и готовишься крутить лотерею.',
      ]);
      await maya.say_and_wait([
        callname,
        '! У нас лотерейный билет! Шанс только один!',
      ]);
      await maya.say_and_wait(
        'Нн~ пожалуйста-пожалуйста, пусть будет главный приз…!',
      );
      await era.printAndWait([
        'Вы вдвоём, молясь, вместе берётесь за ручку и крутите лотерейный барабан.',
      ]);
      await era.printAndWait('И результат—');
      switch (dice) {
        case 0:
          await you.say_as_passer_by_and_wait(
            'сотрудник торговой улицы',
            'Боже! Поздравляем————!! Вытянули главный приз «путёвка в онсэн»~~~~!!',
          );
          await era.printAndWait('Получена 【путёвка в онсэн】.');
          await maya.say_and_wait('Супер~~!! Миссия выполнена~!');
          era.printButton('「Отлично!」', 1);
          await era.input();
          await maya.say_and_wait('Ага! Тогда сразу Take off к онсэну☆');
          era.printButton('Ещё ничего не готово!?」', 1);
          await era.input();
          await maya.say_and_wait('Э~? Сборы~?');
          await era.printAndWait(
            'Если выехать прямо сейчас, дело не только в багаже.',
          );
          await era.printAndWait(
            'Нужно сначала утрясти ближайшие скачки и тренировки, и уже потом—',
          );
          era.printButton('「Это тоже для твоего блага」', 1);
          await era.input();
          await maya.say_and_wait('Для моего блага?');
          era.printButton('「Потому что я хочу воплотить твою цель」', 1);
          await era.input();
          await maya.say_and_wait('А—');
          await maya.say_and_wait('Хм-хм. Maya уже решила цель на этот год♪');
          await maya.say_and_wait([
            'Я обязательно превзойду ',
            maya.sex,
            '…превзойду выкладывающуюся на полную ',
            call_16,
            '!',
          ]);
          await maya.say_and_wait(['…спасибо тебе. ', callname, '.']);
          await maya.say_and_wait(
            'Ладно, решено! Тогда поедем, когда Maya достигнет своей цели!',
          );
          await maya.say_and_wait('Тогда ты согласишься поехать со мной?');
          era.printButton('「Конечно!»', 1);
          await era.input();
          await maya.say_and_wait('Хе-хе, супер! Тогда так и решили!');
          await maya.say_and_wait(
            'И тогда надо будет вовсю расслабиться и вовсю насладиться!',
          );
          await era.printAndWait([
            'Вы вдвоём с нетерпением ждёте дня, когда воспользуетесь путёвкой в онсэн.',
          ]);
          break;
        case 1:
          await you.say_as_passer_by_and_wait(
            'сотрудник торговой улицы',
            'Поздравляем с первым призом~! Приз — «премиальный морковный гамбург»!',
          );
          await era.printAndWait('Получен 【премиальный морковный гамбург】.');
          await maya.say_and_wait('Ва! Первый приз! Круто!!');
          await maya.say_and_wait('А, это не путёвка в онсэн~!!');
          era.printButton('「Но это же первый приз!»', 1);
          await era.input();
          await maya.say_and_wait([
            'Но-но~ Maya хотела с ',
            callname,
            ' отправиться в любовный вояж…',
          ]);
          await maya.say_and_wait([
            'Ннн… гамбургом сердце ',
            callname,
            ' не завоюешь.',
          ]);
          era.printButton('「……Точно?」', 1);
          await era.input();
          await maya.say_and_wait('Ээ? Разве нет?');
          era.printButton('「На самом деле я очень хочу есть!」', 1);
          await era.input();
          await maya.say_and_wait(
            'Правда!? Тогда-тогда, Maya отдаст тебе свой гамбург!',
          );
          await maya.say_and_wait(
            '……Хе-хе, ну как? Maya стала ещё больше нравиться?',
          );
          era.printButton('「Вроде да!」', 1);
          await era.input();
          await maya.say_and_wait('Ура!');
          await you.say_as_passer_by_and_wait(
            'Работник торговой улицы',
            'Ха-ха, вы так хорошо ладите! Ладно, тогда я подарю вам ещё один гамбург! Ешьте вместе!',
          );
          await maya.say_and_wait('Ваа!! Спасибо, дяденька!');
          await maya.say_and_wait(
            'Хе-хе, он сказал, что мы так хорошо ладим～! Такое чувство, что мы ещё сильнее влюбились♪',
          );
          await era.printAndWait([
            'В тот вечер ',
            you.get_colored_name(),
            ' и ',
            maya.get_colored_name(),
            ' вместе съели отборный морковный гамбург.',
          ]);
          break;
        case 2:
        case 3:
        case 4:
          await you.say_as_passer_by_and_wait(
            'Работник торговой улицы',
            'Второй приз～!! Приз —『корзина моркови』!',
          );
          await era.printAndWait('Получено:【корзина моркови】.');
          await maya.say_and_wait('Ваа!? Моркови полно-полно～!?');
          await you.say_as_passer_by_and_wait(
            'Работник торговой улицы',
            'Ага! Забирайте всю морковь из этой корзины!',
          );
          await era.printAndWait(
            '— Там, куда указал работник торговой улицы, стояла большая корзина, битком набитая морковью.',
          );
          await maya.say_and_wait('……Maya столько доест?');
          era.printButton('「Я тоже помогу」', 1);
          await era.input();
          await maya.say_and_wait([
            'Ээ! Правда!? Тогда с ',
            callname,
            ' вместе──',
          ]);
          await maya.say_and_wait('……А!? У Maya появилась идея!');
          await maya.say_and_wait([
            'Слушай-ка, ',
            callname,
            '. Можно поставить эту морковь у тебя в комнате?',
          ]);
          await maya.say_and_wait([
            'Maya живёт с ',
            call_3,
            ' в одной комнате, она слишком маленькая — может не влезть! Так что можно!?',
          ]);
          era.printButton('「Ну можно……」', 1);
          await era.input();
          await maya.say_and_wait('Ура!');
          await maya.say_and_wait(
            'Тогда с завтрашнего дня Maya будет приходить к тебе в комнату и наготовит кучу морковных блюд♪',
          );
          era.printButton('「Ээ!?」', 1);
          await era.input();
          await maya.say_and_wait(
            'Хе-хе, своими блюдами Maya покорит твоё сердце～♪',
          );
          await era.printAndWait([
            '— С того дня ',
            maya.get_colored_name(),
            ' всё чаще вламывалась в комнату ',
            you.get_colored_name(),
            '……',
          ]);
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          await you.say_as_passer_by_and_wait(
            'Работник торговой улицы',
            'Третий приз～! Приз —『одна морковка』!',
          );
          await era.printAndWait('Получено:【одна морковка】.');
          await maya.say_and_wait('Ээ～!? Да не может быть!');
          await maya.say_and_wait(
            'Дяденька, ты просто перепутал главный приз с другим, да? Правда～?',
          );
          await you.say_as_passer_by_and_wait(
            'Работник торговой улицы',
            'М-м…… это точно третий приз.',
          );
          await maya.say_and_wait([
            'Уу! План поездки с ',
            callname,
            ' на горячие источники……',
          ]);
          await maya.say_and_wait('И всего одна морковка……');
          era.printButton('「Как цвет твоих волос — такой бодрый」', 1);
          await era.input();
          await maya.say_and_wait('……!');
          await maya.say_and_wait([
            'Ха-ха, ',
            callname,
            ', ты и правда всегда думаешь только о Maya～!',
          ]);
          await maya.say_and_wait(
            'Назвать цвет морковки цветом моих волос. Такое сразу в голову не придёт!',
          );
          await maya.say_and_wait('……Хе-хе-хе♪');
          await era.printAndWait([
            maya.get_colored_name(),
            ' расцвела сияющей улыбкой.',
          ]);
          break;
        case 9:
          await you.say_as_passer_by_and_wait(
            'Работник торговой улицы',
            'Как жаль, не повезло! Приз за участие —『туалетная бумага』～',
          );
          await era.printAndWait('Получено:【туалетная бумага】.');
          await maya.say_and_wait('Ээ────!?');
          await maya.say_and_wait(
            'Maya думала, что точно выиграет! Потому что, потому что～!',
          );
          await maya.say_and_wait([
            'У Maya с ',
            callname,
            ' же такая любовь, правда?',
          ]);
          await era.printAndWait([
            'Ещё раз: удача и любовь никак не связаны. ',
            you.get_colored_name(),
            ' успокоил(а) капризничающую ',
            maya.get_colored_name(),
            ' и вернулись в академию……',
          ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_4: (() => {
    const title = 'Сияние юности';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} nature 优秀素质
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} callname_12 菱亚马逊对玩家的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} n_call_a 优秀素质对菱亚马逊的称呼
     * @param {boolean} join_arim_kin_c 摩耶重炮是否参与了经典年有马纪念
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      nature,
      you,
      callname,
      call_12,
      t_call_m,
      callname_12,
      a_call_m,
      n_call_a,
      join_arim_kin_c,
      arim_kin,
    ) => {
      await era.printAndWait([
        'Наступила весна старшего года. В последнее время ',
        maya.get_colored_name(),
        ' тренируется так──',
      ]);
      await maya.say_and_wait([
        callname,
        '! Три круга по трассе — слишком скучно!',
      ]);
      await maya.say_and_wait('Maya теперь надо пробежать тридцать кругов!');
      era.printButton('「Для ног это слишком большая нагрузка」', 1);
      await era.input();
      await maya.say_and_wait(
        'Ээ──!? Тогда-тогда, скорее придумай, что тренировать дальше.',
      );
      await maya.say_and_wait([
        'Maya же знает: ',
        callname,
        ' обязательно осчастливит Maya!',
      ]);
      await maya.say_and_wait(
        'А. Вчерашний список заданий — Maya уже умеет всё оттуда! Так что лучше то, чего там нет☆',
      );
      await era.printAndWait([
        '……И вот так ',
        you.get_colored_name(),
        ' каждый день засыпали просьбами о новой тренировке.',
      ]);
      await era.printAndWait([
        'Но ',
        maya.get_colored_name(),
        ' уже поставила себе цель и хочет её добиться. Чтобы ',
        maya.sex,
        ' достигла цели — долг тренера──',
      ]);
      await maya.say_and_wait([
        'Доброе утро, ',
        callname,
        '! Сегодня тоже постараемся!',
      ]);
      await maya.say_and_wait([
        'Ой, ',
        callname,
        '. У тебя лицо такое бледное……',
      ]);
      await maya.say_and_wait(['А, ', callname, '!?']);
      await era.printAndWait('(……бух)');
      await amazon.say_and_wait('……Ох, вот это было близко.');
      await amazon.say_and_wait('Тебя чуть не свалило.');
      era.printButton('「Это ты меня подхватила……?」', 1);
      await era.input();
      await amazon.say_and_wait('Ха-ха, не стоит благодарностей. Пустяки.');
      await amazon.say_and_wait(
        'Только круги под глазами такие тёмные…… Похоже, совсем не спалось.',
      );
      await amazon.say_and_wait(['Слушай, ', a_call_m, '!']);
      await maya.say_and_wait('А, ауаа……');
      await amazon.say_and_wait([a_call_m, '! Не бойся там, отвечай!']);
      await maya.say_and_wait('Д-да!!');
      await amazon.say_and_wait([
        '……Ну, ладно. Тогда, ',
        callname_12,
        ', отдыхай здесь.',
      ]);
      await amazon.say_and_wait('Об этой я позабочусь.');
      era.printButton('「Ээ!?」', 1);
      await era.input();
      await amazon.say_and_wait([
        'Ха-ха, не паникуй так. Не то чтобы ',
        maya.sex,
        ' пойдёт мне на обед.',
      ]);
      if (join_arim_kin_c) {
        await amazon.say_and_wait([
          'То объявление войны на『',
          arim_kin,
          ' 』…… честно, меня впечатлило.',
        ]);
      }
      await amazon.say_and_wait('Так что дай и мне вам помочь.');
      await amazon.say_and_wait(
        'И я не хочу, чтобы такую перспективную девчонку кто-то забирал себе.',
      );
      await maya.say_and_wait(['Ээ—!? ', call_12, '……!?']);
      await maya.say_and_wait([
        'Ауаа……!? П-прости. В сердце у меня только ',
        callname,
        '……!',
      ]);
      await amazon.say_and_wait(
        '……Слушай, ты можешь поспокойнее? Это всего лишь предложение. Главное —『хочешь ли ты стать сильнее』.',
      );
      await amazon.say_and_wait([
        'Ну как, ',
        callname_12,
        '. Пусть ',
        maya.sex,
        ' пока побудет у меня?',
      ]);
      await era.printAndWait([
        '—「Героиня」',
        amazon.get_colored_name(),
        ' — ',
        maya.sex,
        ' на прошлогоднем и нынешнем 「',
        arim_kin,
        ' 」 составляла ',
        brian.get_colored_name(),
        ' достойную конкуренцию.',
      ]);
      await era.printAndWait([
        'Если думать о ',
        maya.get_colored_name(),
        ', то ',
        you.get_colored_name(),
        ' лучше не гнуть свою линию: к тому, что скажет ',
        maya.sex,
        ', тоже стоит прислушаться……!',
      ]);
      era.printButton('「Тогда прошу тебя!」', 1);
      await era.input();
      await amazon.say_and_wait(
        'Вот, так-то лучше! Начинается тренировка по методу Хиси!',
      );
      era.drawLine();
      await amazon.say_and_wait([
        'Итак, ',
        a_call_m,
        '. Бегай без остановки и не дай мне схватить хвост.',
      ]);
      await maya.say_and_wait(
        'Ээ, так это же『догонялки за хвост』? Я в садике в такое играла……',
      );
      await maya.say_and_wait(
        'Это правда считается тренировкой?…… Похоже, просто игра?',
      );
      await amazon.say_and_wait('О, какая невозмутимость. Тогда начинаем.');
      await maya.say_and_wait('Нн, ннн……');
      await amazon.say_and_wait(
        'Эй-эй, что такое? Тебя уже больше десяти раз поймали!',
      );
      await maya.say_and_wait([
        'Это всё ',
        call_12,
        ' слишком жульничает! Сразу больше водящих!',
      ]);
      await teio.say_and_wait(['Хо-хо! Теперь я ловлю ', t_call_m, '!']);
      await nature.say_and_wait('Ого, кажется, им очень весело……');
      await nature.say_and_wait([
        'Слушай, ',
        n_call_a,
        '. Помощи вроде той, что сейчас, хватит?',
      ]);
      await amazon.say_and_wait([
        'Ага, так отлично! Спасибо!…… Тогда, ',
        a_call_m,
        '.',
      ]);
      await amazon.say_and_wait(
        'Проще говоря, твоя слабость — нехватка чутья.',
      );
      await maya.say_and_wait('……Чутья?');
      await maya.say_and_wait(
        'Чутьё — это же когда всё знаешь? Так я уже знаю, и правила, и как убегать.',
      );
      await maya.say_and_wait([
        'Но ',
        call_12,
        ' сразу меняет число водящих и правила! Это подло—',
      ]);
      await amazon.say_and_wait(
        'Да уж, я же про чутьё…… Нет, точнее — ты даже не собираешься чуять.',
      );
      await maya.say_and_wait('……Ээ?');
      await amazon.say_and_wait(
        'По моим наблюдениям, у тебя и талант отменный, и тренер.',
      );
      await amazon.say_and_wait(
        'Ты, наверное, и правда всё можешь. Поэтому взрослые вокруг тебя так много в тебя вкладывают.',
      );
      await amazon.say_and_wait('Вот только ты слишком зависишь от других.');
      await amazon.say_and_wait(
        'И сейчас тоже: как только поняла…… нет, как только решила, что поняла……',
      );
      await amazon.say_and_wait(
        '『перестаёшь пытаться понять то, чего не понимаешь』…… Это ты сама себе такую привычку вырастила.',
      );
      await amazon.say_and_wait(
        'Я не в『догонялки за хвост』играю. Это тренировка к скачкам.',
      );
      await amazon.say_and_wait(
        'Шевели мозгами. На настоящих скачках на тебя будут охотиться сразу несколько соперниц. И стратегия по ходу тоже сменится.',
      );
      await amazon.say_and_wait(
        'И что ты тогда будешь делать? Наверняка станешь гибко уходить по ситуации…… Я не ошибаюсь?',
      );
      await maya.say_and_wait('……Нн.');
      await amazon.say_and_wait('……Кстати, насчёт сегодняшнего утра.');
      await amazon.say_and_wait([
        'Ты заметила, что ',
        callname_12,
        ' ради тебя перегнул(а) палку?',
      ]);
      await maya.say_and_wait('……!');
      await amazon.say_and_wait(
        'У тебя редкий талант — так доведи его до предела.',
      );
      await amazon.say_and_wait([
        'Или хочешь быть ребёнком, который ревёт『Я больше не бегу!』и сводит ',
        callname_12,
        ' с ума?',
      ]);
      await maya.say_and_wait('Нн~~! Я так не буду!!');
      await maya.say_and_wait('Я стану взрослой женщиной! И плакать не буду!');
      await maya.say_and_wait([
        call_12,
        '! Ещё раз!! В этот раз меня точно не поймают!',
      ]);
      await amazon.say_and_wait('Ха-ха, вот это дух. Тогда начинаем!!');
      await maya.say_and_wait('Хм—! Ещё раз! Я уже 『поняла』, вот!!');
      await amazon.say_and_wait(
        'О! Отлично, вот так! Запоминай телом, не головой!',
      );
      await era.printAndWait([
        '—Под ярким заревом заката стайка ',
        maya.teen_sex_title,
        ' обливается потом и без устали бежит по дорожке.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'Валентинов день';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} yukino 雪之美人
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_29 摩耶重炮对雪之美人的称呼
     * @param {PrintedSpan} y_call_m 雪之美人对摩耶重炮的称呼
     */
    const f = async (maya, yukino, you, callname, call_29, y_call_m) => {
      await era.printAndWait([
        'В обеденный перерыв, когда ',
        you.get_colored_name(),
        ' идёт по территории школы—',
      ]);
      await maya.say_and_wait([
        'М-м～♪ ',
        call_29,
        ' шоколад такой вкусный～♪',
      ]);
      await yukino.say_and_wait([
        'Хе-хе. ',
        y_call_m,
        ' шоколад от тебя тоже обалденный～',
      ]);
      await yukino.say_and_wait(
        'И обёртка такая шикарная, вся сверкает! Откуда такое?!',
      );
      await maya.say_and_wait([
        'Хм-хм-хм…… потому что я взрослая ',
        maya.phy_sex_title,
        '! Сразу нахожу магазины, что сейчас в моде☆',
      ]);
      await yukino.say_and_wait([
        'Вау……! Это 『городская ',
        maya.child_sex_title,
        ' 』!!',
      ]);
      await maya.say_and_wait(
        'Н-гм! Когда на шопинге замешкаешься — оставь это мне!',
      );
      await maya.say_and_wait(['……А! Это ', callname, '! Hello☆']);
      await maya.say_and_wait(
        'Хи-хи, уже не терпится получить мой шоколад? Ужас, ну что с тобой поделать♪',
      );
      await maya.say_and_wait([
        call_29,
        ', ну я пошла—! Дальше — вз-рос-лое вре-мя☆',
      ]);
      await yukino.say_and_wait(
        'В-взрослые…… взрослое время!? Ч-ч-что вы собираетесь делать～!?',
      );
      await era.printAndWait([
        'Вроде бы ничего такого и не будет…… однако ',
        you.get_colored_name(),
        ' ещё не успевает развеять ',
        yukino.get_colored_name(),
        ' недоразумение, как тебя тут же ',
        maya.get_colored_name(),
        ' утаскивает прочь……',
      ]);
      await maya.say_and_wait('На, держи! Это шоколад, который я тебе дарю.');
      await maya.say_and_wait('Хе-хе, открывай, открывай☆');
      await era.printAndWait([
        'Пока ',
        maya.sex,
        ' смотрит с нетерпением, ',
        you.get_colored_name(),
        ' открывает коробочку, что ',
        maya.sex,
        ' приготовила для ',
        you.get_colored_name(),
        '. Внутри—',
      ]);
      await era.printAndWait(
        '……столько, что диву даёшься, как это влезло: шоколад, набитый до самых краёв.',
      );
      await maya.say_and_wait(
        'Со звёздочками я купила в универмаге. А с сердечками — в фирменном магазине на станции!',
      );
      era.printButton('「Ты купила так много」', 1);
      await era.input();
      await maya.say_and_wait(
        'Хе-хе, ради сегодняшнего дня я одна обежала кучу магазинов!',
      );
      await maya.say_and_wait('По-это-му……');
      await maya.say_and_wait(
        'Я столько шоколада тебе надарила — так что теперь своди меня на свидание в ответ♪',
      );
      era.drawLine();
      await era.printAndWait([
        'А потом в этот день по желанию ',
        maya.get_colored_name(),
        ' вы вдвоём отправляетесь в шоколадную лавку.',
      ]);
      await era.printAndWait(
        '……шоколадные капкейки с таким домашним, скромным видом.',
      );
      await era.printAndWait(
        'Хотя у нескольких шоколад вылез за край формочки, каждый сделан очень тщательно—',
      );
      era.printButton('「Выглядит очень вкусно」', 1);
      await era.input();
      await maya.say_and_wait('Вау……!');
      await maya.say_and_wait([
        'Хе-хе…… ',
        callname,
        '. Когда доешь — скажи то же самое☆',
      ]);
      await maya.say_and_wait([
        'Хи-хи, ведь это особенный ',
        maya.name,
        ' кекс, такого снаружи не купить!',
      ]);
      await maya.say_and_wait('……Правда особенный.');
      await era.printAndWait([
        you.get_colored_name(),
        ' ешь слегка сладкие шоколадные капкейки и так проводишь этот день.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_hans_dai: (() => {
    const title = 'Навстречу Hanshin Daishoten';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     */
    const f = async (maya, brian, you, callname, call_16, hans_dai) => {
      await era.printAndWait(['И вот настал день 「', hans_dai, ' 」.']);
      await maya.say_and_wait(['……Пойдём, ', callname, '.']);
      await maya.say_and_wait('Я уже готова! Двигатель заправлен до полного!');
      era.printButton('「Удачи на скачках」', 1);
      await era.input();
      await maya.say_and_wait('Ага!');
      era.drawLine();
      await brian.say_and_wait('…………');
      await maya.say_and_wait(['Мх! ', call_16, '.']);
      await brian.say_and_wait('……Ты всё-таки пришла.');
      await maya.say_and_wait('Ага, я пришла.');
      await maya.say_and_wait('Хи-хи, я послушный ребёнок и обещания держу.');
      await brian.say_and_wait('……Ты что, ребёнок.');
      await maya.say_and_wait([
        'Ээ!? ',
        call_16,
        ' это слишком!! Как можно такое говорить!',
      ]);
      await brian.say_and_wait('……Сама себя ребёнком выставляешь. Хм……');
      await brian.say_and_wait('……Я пошла.');
      await maya.say_and_wait('А, подожди!!');
      await brian.say_and_wait('……Эх, ещё что-то?');
      await maya.say_and_wait('Ага! Есть!');
      await maya.say_and_wait('Сегодня выкладывайся на полную!');
      await maya.say_and_wait([
        'И не смей сдавать. Я хочу победить выложившуюся на полную ',
        call_16,
        '.',
      ]);
      await maya.say_and_wait('Потому что только так я сама засияю.');
      await brian.say_and_wait('……На полную?');
      await brian.say_and_wait('……Не смеши меня.');
      await maya.say_and_wait('А! Это уже слишком! Я же серьёзно говорю—!');
    };
    f.title = title;
    return f;
  })(),
  hans_dai_win: (() => {
    const title = 'Штурвал всё ещё в руках';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      hans_dai,
      tenn_spr,
    ) => {
      await maya.say_and_wait('Ха-а…… ха-а……!');
      await era.printAndWait('(Ваааааааа—!!)');
      await maya.say_and_wait('Хи-хи, я победила! Победа наша～☆');
      await maya.say_and_wait('Хе-хе, теперь-то—');
      await brian.say_and_wait('……');
      await brian.say_and_wait('…Всё ещё мало?');
      await maya.say_and_wait('…………');
      await maya.say_and_wait('…Э?');
      await maya.say_and_wait('…………');
      era.drawLine();
      await amazon.say_and_wait([
        a_call_m,
        '! Вот это забег! Финишная прямая — огонь!',
      ]);
      await maya.say_and_wait([
        '…Э, ',
        call_12,
        '? Неужели ты здесь ради моей скачки?',
      ]);
      await amazon.say_and_wait(
        'Ага! Всё-таки у вас двоих такой редкий решающий день, так что я пришла тебя подбодрить—',
      );
      await maya.say_and_wait('Тогда скажи мне, пожалуйста.');
      await maya.say_and_wait([
        call_16,
        ' На какую скачку дальше? ',
        call_12,
        ' Ты же знаешь?',
      ]);
      await amazon.say_and_wait('!');
      await amazon.say_and_wait('Ну что с тобой поделать. Всё ещё мало?');
      await maya.say_and_wait('Ага. Потому что…');
      await maya.say_and_wait([
        'Вон та так и не почувствовала досады. Если уж говорить, кажется, ',
        maya.sex,
        ' очень грустит.',
      ]);
      await maya.say_and_wait([
        '…Мне это не нравится. Редкий шанс, что ',
        maya.sex,
        ' вышла на поединок—',
      ]);
      await maya.say_and_wait([
        'Maya хочет сверкать ещё ярче, так ярко, чтобы ',
        maya.sex,
        ' почувствовала досаду.',
      ]);
      await amazon.say_and_wait('…Вот как.');
      await amazon.say_and_wait([
        'Ха, глядя на тебя, вспоминаю, как в первый раз ',
        maya.sex,
        ' оказалась передо мной. Хоть скачка уже кончилась, а ',
        maya.sex,
        ' всё равно смотрела так, будто мало.',
      ]);
      await amazon.say_and_wait([
        'Тогда я тебе скажу. Интуиция подсказывает: 『',
        tenn_spr,
        ' 』.',
      ]);
      await amazon.say_and_wait(
        'Ей как раз подавай сцену, где сходятся сильнейшие.',
      );
      await amazon.say_and_wait([
        'Сама ',
        maya.sex,
        ' эту 『',
        hans_dai,
        ' 』 изначально видела лишь дорогой на пути к 『',
        tenn_spr,
        ' 』.',
      ]);
      await era.printAndWait([
        '──「',
        tenn_spr,
        ' 」.Это скачка с долгой историей, вершина длинных дистанций.',
      ]);
      await maya.say_and_wait(['…… ', callname, '.']);
      era.printButton(`「Ага, давай выйдем на 『Tenno Sho Spring』」`, 1);
      await era.input();
      await maya.say_and_wait('I copy!');
      await amazon.say_and_wait('Хех… эти двое и правда впечатляют.');
      await amazon.say_and_wait(
        'Ладно, помогать так помогать до конца! Я тоже к вам!',
      );
      await amazon.say_and_wait([
        call_12,
        ', сегодня как вернёмся — я тебя как следует прогоню! Готовься!',
      ]);
      await maya.say_and_wait('Хи-хи, конечно без проблем☆');
      await era.printAndWait([
        'Итак, следующей целью стало 「',
        tenn_spr,
        ' 」!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hans_dai_lose: (() => {
    const title = 'Сразу растёт';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      hans_dai,
      tenn_spr,
    ) => {
      await maya.say_and_wait('Ха-а… ха-а…!');
      await maya.say_and_wait('Ннх… ещё же совсем чуть-чуть…!!');
      await era.printAndWait('(Уа-а-а-а-а-а-а——!!)');
      await brian.say_and_wait('Хм…');
      await brian.say_and_wait('…И это всё?');
      await maya.say_and_wait('Да ну~~! Это что за лицо~!');
      await maya.say_and_wait('Как будто Maya вообще не в счёт~!!');
      await maya.say_and_wait('Ннн… но—');
      era.drawLine();
      await maya.say_and_wait('…Я вернулась!!');
      era.printButton('「С возвращением」', 1);
      await era.input();
      await amazon.say_and_wait('О, уже вернулась?');
      await maya.say_and_wait(['Э-э!? Почему ', call_12, ' здесь!?']);
      await amazon.say_and_wait('Что значит почему, я пришла тебя подбодрить…');
      await maya.say_and_wait('Вот как! Тогда самое то!');
      await maya.say_and_wait(
        'Натренируй Maya как следует! Хоть прямо сегодня!',
      );
      await amazon.say_and_wait('Чего!? Ты бы ещё учла, удобно ли мне—');
      await maya.say_and_wait(
        'Не-а! Потому что Maya хочет стать сильнее! Maya знает, что может ещё сильнее!',
      );
      await maya.say_and_wait([
        'Потому что мне так досадно — ',
        maya.sex,
        ' снова зажгла меня до дрожи!',
      ]);
      await maya.say_and_wait([call_16, ' всё ещё сверкает!']);
      await maya.say_and_wait(
        'Не хочу вот так продолжать проигрывать! Не хочу сама сказать 『Конец』!!',
      );
      era.printButton('「И я тебя прошу!」', 1);
      await era.input();
      await amazon.say_and_wait('Эх… ну и парочка своевольных типов.');
      await amazon.say_and_wait(
        '…Впрочем, в поединке как раз и нужна такая страсть.',
      );
      await amazon.say_and_wait(
        'Ладно, раз помогать — так до конца! Я тоже к вам!',
      );
      await amazon.say_and_wait([
        a_call_m,
        ', я тебя ещё как прогоню! Готовься!',
      ]);
      await maya.say_and_wait('Ага! Спасибо!');
      await amazon.say_and_wait(
        'Вот это ответ! Держи так и дальше, не расслабляйся!',
      );
      await amazon.say_and_wait(
        'Всегда выкладывайся на полную! Кто думает о будущем и не может как следует вмазать кулаком — ничем не лучше тех, кто с самого старта сдаётся под белым флагом!',
      );
      await maya.say_and_wait('Есть!');
      await amazon.say_and_wait([
        'Хех! Тогда давай соберём боевой совет на следующий раз. Так что, ',
        a_call_m,
        '.',
      ]);
      await amazon.say_and_wait([
        'Следующий раз ',
        maya.sex,
        ' выйдет против нас уже на 『',
        tenn_spr,
        ' 』.',
      ]);
      await maya.say_and_wait(['『', tenn_spr, ' 』……!']);
      await era.printAndWait([
        '──「',
        tenn_spr,
        ' 」.Это скачка с долгой историей, вершина длинных дистанций.',
      ]);
      await amazon.say_and_wait(
        'Ей как раз подавай сцену, где сходятся сильнейшие.',
      );
      await amazon.say_and_wait([
        'Сама ',
        maya.sex,
        ' эту 『',
        hans_dai,
        ' 』 изначально видела лишь дорогой на пути к 『',
        tenn_spr,
        ' 』.',
      ]);
      await maya.say_and_wait(['…Поняла. Тогда, ', callname, '.']);
      era.printButton(`「Ага, давай выйдем на 『Tenno Sho Spring』」`, 1);
      await era.input();
      await maya.say_and_wait('I copy!');
      await era.printAndWait(['Тогда следующая цель —「', tenn_spr, ' 」!']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'Фан-фестиваль';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} oguri 小栗帽
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} city 黄金城市
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     */
    const f = async (
      maya,
      oguri,
      amazon,
      city,
      falcon,
      you,
      callname,
      call_12,
    ) => {
      await era.printAndWait([
        'Фан-фестиваль. Это праздник, куда приглашают обычно поддерживающих Скаковая ',
        maya.uma_sex_title,
        ' фанатов.',
      ]);
      await era.printAndWait(
        'Гвоздь программы весеннего фан-фестиваля — спортивные состязания и прочее—',
      );
      await maya.say_and_wait(
        'Ха-ха, какая атмосфера~☆ Эй-эй, следующий номер — две тысячи метров по грунту~!',
      );
      await amazon.say_and_wait('……Э, ты же участвуешь! Давай, беги уже!');
      await maya.say_and_wait([
        'Ээ~!? Не-не! Я же сейчас с ',
        callname,
        ' на свидании~!',
      ]);
      era.printButton('「Счастливо!」', 1);
      await era.input();
      await maya.say_and_wait(['Ээ, даже ', callname, ' тоже так!?']);
      era.drawLine();
      await maya.say_and_wait([
        'Ну вот…… ',
        call_12,
        '  какая ты злая~ Редкое же свидание……',
      ]);
      await amazon.say_and_wait(
        '……Сил нет. Сегодня и правда фестиваль, но ты не заиграйся слишком.',
      );
      await amazon.say_and_wait('Ты что, забыла? Хорошенько посмотри вокруг.');
      await amazon.say_and_wait('И слушай сердцем.');
      await maya.say_and_wait('……Вокруг……?');
      await city.say_and_wait('……Хе. Сейчас покажу вам свою силу.');
      await oguri.say_and_wait('Мм…… неплохо.');
      await falcon.say_and_wait(
        'Мм~ все смотрят на Эль☆ А~ так и заберу все взгляды себе♪',
      );
      await amazon.say_and_wait('……Ну как?');
      await maya.say_and_wait('……Я с ними вроде редко бегала.');
      await amazon.say_and_wait(
        'Верно. Много соперниц, с которыми ты редко сходилась, сейчас в одном месте.',
      );
      await amazon.say_and_wait(
        'Эта скачка и правда не официальная. Но именно поэтому—',
      );
      await amazon.say_and_wait(
        'можно сойтись лицом к лицу с теми, кого обычно не встретишь.',
      );
      await amazon.say_and_wait(
        'Какая бы ни была скачка, шанс сразиться с ними на одной дорожке бывает раз в жизни.',
      );
      await amazon.say_and_wait(
        'Поэтому каждую скачку надо без оглядки…… по-настоящему наслаждаться.',
      );
      await maya.say_and_wait('……Без оглядки, наслаждаться.');
      await amazon.say_and_wait(
        'Да. Так что в этой скачке ты тоже ещё вырастешь! И тогда—',
      );
      await maya.say_and_wait('……Вырасту!? Взрослой!?');
      await maya.say_and_wait([
        'I copy☆ Сегодня я ',
        call_12,
        ' оставлю позади и первой приду к финишу!',
      ]);
      await amazon.say_and_wait('Эй!? Ты не слишком зазналась!?');
      await era.printAndWait('И вот стартовали две тысячи метров по грунту—');
      era.drawLine();
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maya 摩耶重炮
   * @param {CharaTalk} amazon 菱亚马逊
   * @param {CharaTalk} falcon 醒目飞鹰
   * @param {CharaTalk} you 玩家
   * @param {string} callname 摩耶重炮对玩家的称呼
   * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
   * @param {PrintedSpan} callname_12 菱亚马逊对玩家的称呼
   * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
   * @param {number} rank 摩耶重炮的模拟赛名次
   */
  async ws_95_14_end(
    maya,
    amazon,
    falcon,
    you,
    callname,
    call_12,
    callname_12,
    a_call_m,
    rank,
  ) {
    if (rank === 1) {
      await maya.say_and_wait([callname, '————! Я взяла первое——☆']);
      era.printButton('「Вот это да!」', 1);
      await era.input();
      await maya.say_and_wait('Хе-хе…… похвали ещё немножко☆');
      await amazon.say_and_wait([
        '……Вот так перспективная ',
        maya.child_sex_title,
        '. Не думала, что обойдёт не только меня, но и тех……',
      ]);
      await maya.say_and_wait([
        'Хи-хи. ',
        call_12,
        ', спасибо, что дала мне всерьёз выйти на эту скачку!',
      ]);
      await maya.say_and_wait('Мне было так весело бежать! Так…… волнующе.');
      await maya.say_and_wait(
        'Я подумала о том, что выйдет только в этой скачке, и продумала кучу тактик.',
      );
      await maya.say_and_wait(
        '—В этой скачке я уже показала весь свой самый яркий бег.',
      );
      await amazon.say_and_wait('Нх……! Ты всё это по ходу придумала?');
      await amazon.say_and_wait([
        'Эта ',
        maya.child_sex_title,
        ' и правда безгранично перспективна……!',
      ]);
      await era.printAndWait([
        'Маяно Топ Ган шаг за шагом уверенно становится сильнее, ',
        you.get_colored_name(),
        ' провёл(а) день, благодаря которому ',
        you.get_colored_name(),
        ' это воочию прочувствовал(а).',
      ]);
    } else {
      await maya.say_and_wait(['Ннн…… ', callname, '……']);
      await amazon.say_and_wait([
        'Ха-ха-ха! ',
        a_call_m,
        '! Ну и вдребезги же ты проиграла.',
      ]);
      await amazon.say_and_wait(
        'Но это и шанс. Хорошенько засмотрись в лицо победительницы и обрати эту досаду в силу.',
      );
      await amazon.say_and_wait('Я тоже так становилась сильнее…… хе-хе.');
      await maya.say_and_wait('Нннн…… чтобы стать сильнее…… чтобы вырасти……!');
      await falcon.say_and_wait('Все~~! Спасибо вам~~☆');
      await you.say_as_passer_by_and_wait('Зрители', 'Уоооооо!! Эль——!!');
      await maya.say_and_wait(
        'Уа~~ Яда-яда-яда! Досадно-досадно, как же досадно~!!',
      );
      await maya.say_and_wait([
        'Я тоже хочу стоять там и ловить овации от ',
        callname,
        ' ~!',
      ]);
      await amazon.say_and_wait([
        'Эх…… у тебя и правда в голове одни мысли о ',
        callname_12,
        '.',
      ]);
      await maya.say_and_wait([
        'Уу…… потому что я хочу, чтобы ',
        callname,
        ' увидела, какая я стала взрослой.',
      ]);
      era.printButton('「Я уже в полной мере чувствую, как ты растёшь」', 1);
      await era.input();
      await maya.say_and_wait(['…… ', callname, '.']);
      await maya.say_and_wait(
        'Нх…… я ещё раз выйду~! В следующий раз точно выиграю!',
      );
      await amazon.say_and_wait(
        'Я же сказала — шанс только один! ……Ну сколько можно!',
      );
      await era.printAndWait([
        'После этого ',
        you.get_colored_name(),
        ' и ',
        amazon.get_colored_name(),
        ' вместе скрутили разоравшуюся ',
        maya.get_colored_name(),
        '.',
      ]);
    }
  },
  before_tenn_spr: (() => {
    const title = 'Навстречу весеннему Tenno Sho';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} t_call_a 东海帝王对菱亚马逊的称呼
     * @param {PrintedSpan} t_call_b 东海帝王对成田白仁的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} callname_12 菱亚马逊对玩家的称呼
     * @param {PrintedSpan} hans_dai 阪神大赏典（上色版名字）
     * @param {PrintedSpan} tenn_spr 春季天皇赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      you,
      callname,
      call_3,
      t_call_a,
      t_call_b,
      t_call_m,
      callname_12,
      hans_dai,
      tenn_spr,
      arim_kin,
    ) => {
      await era.printAndWait(['И вот настал день 「', tenn_spr, ' 」—']);
      await teio.say_and_wait(['Хай♪ ', t_call_m, '!']);
      await maya.say_and_wait([
        'Ва, это ',
        call_3,
        '! Ты пришла за меня поболеть?',
      ]);
      await teio.say_and_wait([
        'М-м, ',
        t_call_a,
        ' тоже сказала, что ',
        maya.sex,
        ' как закончит дела — сразу примчится!',
      ]);
      await teio.say_and_wait(
        'Эхе-хе, все, кажется, очень ждут! Твоих скачек!',
      );
      await teio.say_and_wait('Смотри-смотри, вот это!');
      await you.say_as_passer_by_and_wait('Новости', [
        '『',
        tenn_spr,
        ' — дуэль двух сильнейших!?』『',
        brian.get_colored_name(),
        ' и ',
        maya.get_colored_name(),
        ', кто победит!』',
      ]);
      await you.say_as_passer_by_and_wait('Новости', [
        '『После ',
        hans_dai,
        ' в жаркой схватке настал ',
        tenn_spr,
        '!』『Засияет суперзвезда ',
        brian.get_colored_name(),
        ' или новая звезда ',
        maya.get_colored_name(),
        ' !』',
      ]);
      await maya.say_and_wait('……!');
      await teio.say_and_wait('Хи-хи, ну как? Уже нервничаешь?');
      await maya.say_and_wait('………………хо-хо-хо.');
      await maya.say_and_wait(
        'Я как будто из-за такого испугаюсь! Уже а~ возбуждение прёт!',
      );
      await teio.say_and_wait([
        'Вау~! ',
        t_call_m,
        ' и правда такой крутой~! Я в полном восторге~!',
      ]);
      await maya.say_and_wait('Ха-ха-ха! Дай пудинг — и я прощу тебя☆');
      await maya.say_and_wait([
        'Хи-хи. Тогда, ',
        callname,
        ', я пошла вперёд!',
      ]);
      era.printButton('「Сегодня ни за что нельзя проигрывать」', 1);
      await era.input();
      await maya.say_and_wait('Ага, я не проиграю!');
      await maya.say_and_wait('В этот раз я точно вчистую обыграю Брайан!');
      await maya.say_and_wait(['Так что ', callname, ' тоже хорошенько жди!']);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' провожаешь взглядом ',
        maya.get_colored_name(),
        ' после выхода —',
      ]);
      await era.printAndWait('(тук-тук)');
      await teio.say_and_wait(['Э, ', t_call_a, '? ', t_call_m, ' уже ушла.']);
      await amazon.say_and_wait('……Эй, вы то видео видели?');
      await teio.say_and_wait([
        'Э, ты про ',
        t_call_b,
        ' новость? Ту я показывала ',
        t_call_m,
        ' ……',
      ]);
      await amazon.say_and_wait('Нет, его только что показали.');
      await amazon.say_and_wait([
        '……Короче, ',
        callname_12,
        ', ты сначала глянь.',
      ]);
      await era.printAndWait([
        '…… ',
        you.get_colored_name(),
        ' на полученном телефоне крутят новость.',
      ]);
      await you.say_as_passer_by_and_wait('Репортёр', [
        brian.get_colored_name(),
        'Спортсменка, это правда!? После 『',
        tenn_spr,
        ' 』──',
      ]);
      await brian.say_and_wait([
        'Да, я подстрою подготовку под 『',
        arim_kin,
        ' 』.',
      ]);
      await you.say_as_passer_by_and_wait('Репортёр', [
        'Н-но…… ',
        arim_kin,
        ' — это же зимние скачки!? Не слишком ли рано решать уже сейчас —',
      ]);
      await brian.say_and_wait('── Нет, не рано.');
      await brian.say_and_wait(
        'Мне нужно кое-что проверить, и на это нужно время.',
      );
      await brian.say_and_wait([
        '── Я должна проверить: я, ',
        brian.get_colored_name(),
        ', как далеко смогу забежать……!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = 'Срочная ситуация';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      arim_kin,
    ) => {
      await maya.say_and_wait('Ха-а…… ха-а……! ……Есть!');
      await maya.say_and_wait(['Теперь смогу…… заставить ', call_16, '……!']);
      await brian.say_and_wait('── Почему?');
      await brian.say_and_wait('Хм……! Всё ещё только на этом уровне……!');
      await maya.say_and_wait('……Ну вот, будто меня совсем не замечает.');
      era.drawLine();
      await maya.say_and_wait([call_16, ' куда же смотрит……']);
      era.printButton('……Э?', 1);
      await era.input();
      await maya.say_and_wait(['…… ', call_16, ' куда же смотрит……?']);
      await maya.say_and_wait([
        '…… ',
        callname,
        ', слушай. Я хочу тебя кое о чём попросить.',
      ]);
      await maya.say_and_wait([
        'Хоть ещё раз — хочу как можно скорее снова бежать против ',
        call_16,
        '.',
      ]);
      era.printButton('「Ты же в этот раз выиграла」', 1);
      await era.input();
      await maya.say_and_wait(
        'Ага, надо бежать ещё раз…… хотя я не понимаю почему.',
      );
      await maya.say_and_wait(
        'И в этот раз такое предчувствие, что надо спешить……',
      );
      await amazon.say_and_wait([
        'Нх! ',
        a_call_m,
        '……Это из-за этих скачек ты так думаешь?',
      ]);
      await maya.say_and_wait('……Т-так и есть.');
      await amazon.say_and_wait('Вот как. Тогда тем более нельзя это бросать.');
      await amazon.say_and_wait([
        '──『',
        arim_kin,
        ' 』 точно будет последней.',
      ]);
      era.printButton('「……Последней?」', 1);
      await era.input();
      await amazon.say_and_wait([
        'Да, она собирается сделать ',
        arim_kin,
        ' 『последними скачками』 и завершить карьеру.',
      ]);
      await amazon.say_and_wait('Хм…… слишком рано для занавеса……!');
      await maya.say_and_wait([call_12, '!?']);
      await maya.say_and_wait('……Почему? Так странно.');
      await maya.say_and_wait([
        'Как это может быть последним…… ',
        call_16,
        ' сегодня же тоже была сильной?',
      ]);
      await maya.say_and_wait('И оно уже кончается. Яда…… я так не согласна!');
      await maya.say_and_wait([
        'Потому что даже выиграв скачку, я всё равно не чувствую, что уже обошла ',
        call_16,
        ' !',
      ]);
      await maya.say_and_wait([
        'Не только про саму себя — Maya тоже хочет, чтобы ',
        maya.sex,
        ' завелась от моей силы!',
      ]);
      era.printButton('「Ты хочешь, чтобы ' + brian.sex + ' завелась?»', 1);
      await era.input();
      await maya.say_and_wait(
        '……нн, так и есть. Потому что мне так нестерпимо.',
      );
      await maya.say_and_wait([
        'Сверкающая на треке Скаковая ',
        maya.uma_sex_title,
        ', — это та, кто заводит сердца и соперниц на одной скачке, и зрителей, всех до единого.',
      ]);
      await maya.say_and_wait([
        'Поэтому Maya тоже хочет стать той, из-за кого ',
        maya.sex,
        ' заведётся……!',
      ]);
      await maya.say_and_wait(['Слушай, ', callname, '. Вот что……']);
      await maya.say_and_wait([
        call_12,
        ' ведь только что говорили, что Arima Kinen — ',
        call_16,
        ' последняя скачка?',
      ]);
      await maya.say_and_wait([
        'Поэтому Maya хочет, чтобы ты к 『',
        arim_kin,
        ' 』 натренировал(а) меня до идеала.',
      ]);
      era.printButton('「Ясно」', 1);
      await era.input();
      await maya.say_and_wait('……Спасибо. Хе-хе, Maya уже не терпится.');
      await era.printAndWait([
        '— Если целиться и в 「',
        arim_kin,
        ' 』 как цель, и при этом сойтись с сильными соперницами, каких хочет ',
        maya.sex,
        '…… и в этом ключе выстроить план стартов на G1—',
      ]);
      await era.printAndWait(
        'Летом и осенью надо выйти хотя бы на одну скачку. Либо средне-длинная ближе к Arima, либо средняя G1.',
      );
      era.printButton('「『Takarazuka Kinen』,『Tenno Sho (Autumn)』……」', 1);
      await era.input();
      await maya.say_and_wait(
        'Ясно, Maya поедет. Я выйду на скачки…… и на максималке стану сильной.',
      );
      await maya.say_and_wait('— Я чувствую: иначе нельзя.');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_lose: (() => {
    const title = 'Экстренная ситуация';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_12 摩耶重炮对菱亚马逊的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      arim_kin,
    ) => {
      await maya.say_and_wait('Ха-а…… ха-а……!……нн!');
      await maya.say_and_wait([call_16, '……и правда…… так быстро……!!']);
      await brian.say_and_wait('— Почему?');
      await brian.say_and_wait('Почему…… всё ещё не получается……!');
      await maya.say_and_wait('……Ну вот, будто Maya вообще не в счёт.');
      era.drawLine();
      await maya.say_and_wait([call_16, ' куда это глаза……']);
      era.printButton('……Э?', 1);
      await era.input();
      await maya.say_and_wait(['…… ', call_16, ' куда это глаза, а……?']);
      await maya.say_and_wait([
        '…… ',
        callname,
        ', слушай. Я хочу тебя об одном попросить.',
      ]);
      await maya.say_and_wait([
        'Ещё разочек — и хватит, хочу как можно скорее схватиться с ',
        call_16,
        ' в скачке.',
      ]);
      era.printButton(
        '「Так ты ещё собираешься бросить вызов' + brian.sex + ', да」',
        1,
      );
      await era.input();
      await maya.say_and_wait(
        'Ага, надо ещё раз сразиться…… хотя я и сама не понимаю, почему.',
      );
      await maya.say_and_wait(
        'И в этот раз такое предчувствие — надо спешить……',
      );
      await amazon.say_and_wait([
        'Нн! ',
        a_call_m,
        '……это из-за этой скачки ты так думаешь?',
      ]);
      await maya.say_and_wait('……д-да.');
      await amazon.say_and_wait('Вот как. Тогда тем более нельзя это бросать.');
      await amazon.say_and_wait([
        '──『',
        arim_kin,
        ' 』 точно будет последней, да.',
      ]);
      era.printButton('「……Последней?」', 1);
      await era.input();
      await amazon.say_and_wait([
        'Ага, она собирается превратить ',
        arim_kin,
        ' в 『последнюю скачку』 и закончить карьеру.',
      ]);
      await amazon.say_and_wait('Хмф…… слишком рано для занавеса……!');
      await maya.say_and_wait([call_12, '!?']);
      await maya.say_and_wait('……Почему? Это же странно.');
      await maya.say_and_wait([
        'Какая нафиг последняя…… ',
        call_16,
        ' сегодня тоже была такой сильной?',
      ]);
      await maya.say_and_wait([maya.sex, ' опять так завела Maya, да?']);
      await maya.say_and_wait('А оно уже кончается. Яда…… я так не согласна!');
      await maya.say_and_wait([
        'Maya не собирается вечно быть слабее, чем ',
        maya.sex,
        '!',
      ]);
      era.printButton('「……Хочешь выиграть?」', 1);
      await era.input();
      await maya.say_and_wait('Я хочу выиграть.');
      await maya.say_and_wait([
        '……и не только Maya — в этот раз надо, чтобы ',
        brian.sex,
        ' тоже завелась до дрожи.',
      ]);
      await maya.say_and_wait([
        'Сверкающая на треке Скаковая ',
        maya.uma_sex_title,
        ', — это та, кто заводит сердца и соперниц на одной скачке, и зрителей, всех до единого.',
      ]);
      await maya.say_and_wait([
        'Поэтому Maya тоже хочет стать той, из-за кого ',
        maya.sex,
        ' заведётся……!',
      ]);
      await maya.say_and_wait(['Слушай, ', callname, '. Вот что……']);
      await maya.say_and_wait([
        call_12,
        ' ведь только что говорили, что Arima Kinen — ',
        call_16,
        ' последняя скачка?',
      ]);
      await maya.say_and_wait([
        'Поэтому Maya хочет, чтобы ты к 『',
        arim_kin,
        ' 』 натренировал(а) меня до идеала.',
      ]);
      era.printButton('「Ясно」', 1);
      await era.input();
      await maya.say_and_wait('……Спасибо. Хе-хе, Maya уже не терпится.');
      await era.printAndWait([
        '— Если целиться и в 「',
        arim_kin,
        ' 』 как цель, и при этом сойтись с сильными соперницами, каких хочет ',
        maya.sex,
        '…… и в этом ключе выстроить план стартов на G1—',
      ]);
      await era.printAndWait(
        'Летом и осенью надо выйти хотя бы на одну скачку. Либо средне-длинная ближе к Arima, либо средняя G1.',
      );
      era.printButton('「『Takarazuka Kinen』,『Tenno Sho (Autumn)』……」', 1);
      await era.input();
      await maya.say_and_wait(
        'Ясно, Maya поедет. Я выйду на скачки…… и на максималке стану сильной.',
      );
      await maya.say_and_wait('—Чувствую, что иначе нельзя.');
    };
    f.title = title;
    return f;
  })(),
  ws_95_20: (() => {
    const title = 'Навстречу закату';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} t_call_a 东海帝王对菱亚马逊的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      callname,
      t_call_a,
      t_call_m,
      a_call_m,
      takz_kin,
      tenn_sho,
      arim_kin,
    ) => {
      await brian.print_and_wait([
        'Сначала просто я и ',
        brian.elder_sibling_sex_title,
        ' — кто быстрее.',
      ]);
      await brian.print_and_wait([
        'Самая обычная гонка — ',
        brian.siblings_sex_title,
        ' наперегонки… и правда совершенно обычная.',
      ]);
      await brian.print_and_wait([
        'Но я изо всех сил гналась за ',
        brian.elder_sibling_sex_title,
        ' — за её спиной, точно зверь, скачущий от радости.',
      ]);
      await brian.print_and_wait(
        'Сдвинуть ноги, втянуть воздух в лёгкие. Потом снова сдвинуть ноги—',
      );
      await brian.print_and_wait('Это и есть моё дыхание.');
      await brian.print_and_wait(
        '—Вскоре спина, за которой я гналась, исчезла.',
      );
      await brian.print_and_wait('Я осталась одна.');
      await brian.print_and_wait(
        'Даже став совсем одна, я всё равно помнила своё дыхание.',
      );
      await brian.print_and_wait(
        'И ещё поняла одно. Что дыхание разжигает во мне жажду.',
      );
      await brian.print_and_wait(
        'Поняла: чем яростнее дышу, тем суше горло, и сытости нет.',
      );
      await brian.print_and_wait('Но остановить дыхание нельзя.');
      await brian.print_and_wait(
        'Даже когда дыхание начинает причинять боль, это всё равно чтобы жить.',
      );
      await brian.print_and_wait('Но если… если это тело—');
      await brian.print_and_wait('однажды откажется от моего дыхания—');
      await brian.print_and_wait('…наверное, вот тогда.');
      await brian.print_and_wait('Хух… хух…!');
      await brian.print_and_wait('Хм… я… не проиграю!');
      era.drawLine();
      await amazon.say_and_wait('Эта… ещё бежит, надо же.');
      await amazon.say_and_wait([
        'Хм… ',
        arim_kin,
        '  — это не только ',
        a_call_m,
        ' . Я тоже тебя обязательно догоню…!',
      ]);
      await teio.say_and_wait([
        'Ладно-ладно, ',
        t_call_a,
        '  пока в сторону, ',
        t_call_m,
        '  — следующая гонка 『',
        takz_kin,
        ' 』, верно? Тогда хорошенько отдохни.',
      ]);
      await teio.say_and_wait(['Эй, ', t_call_m, '? Ты слышишь?']);
      await maya.say_and_wait('…Ясно.');
      await amazon.say_and_wait(['…… ', a_call_m, '?']);
      await maya.say_and_wait('Но это же неправда… как такое возможно…');
      await maya.say_and_wait('Потому что так не может быть…!');
      await amazon.say_and_wait([a_call_m, '!?']);
      await maya.say_and_wait('Хаа… хаа… хаа…');
      era.printButton(`「……Maya」`, 1);
      await era.input();
      await maya.say_and_wait([callname, '.']);
      era.printButton('「Ты что-то поняла?」', 1);
      await era.input();
      await maya.say_and_wait('……');
      await maya.say_and_wait('Я кое-что поняла.');
      await maya.say_and_wait('То солнце хоть и яркое — но это закат.');
      await maya.say_and_wait(
        'Если не поспешить — сядет. Сядет туда, куда никто не достанет.',
      );
      await maya.say_and_wait([
        'Я ведь ещё даже не бежала плечом к плечу — ',
        maya.sex,
        ' и я…!',
      ]);
      era.printButton(`「Ты про Брайан?」`, 1);
      await era.input();
      await maya.say_and_wait(['……………… ', callname, '  тоже это видишь, да.']);
      await maya.say_and_wait('Я вспоминаю то, что было.');
      await maya.say_and_wait('—Тому человеку тоже хотелось взыграть.');
      await maya.say_and_wait([
        maya.sex,
        'Просто хотелось бежать изо всех сил и сказать 『Как же весело』.',
      ]);
      await maya.say_and_wait([
        'Поэтому ',
        maya.sex,
        ' и не переставала биться, и ',
        maya.sex,
        ' верила, что однажды сможет сказать эти слова.',
      ]);
      await maya.say_and_wait(
        '—Даже когда тело уже не отвечает на желание сверкать, всё равно держится.',
      );
      await maya.say_and_wait([
        '…… ',
        callname,
        '! Я не хочу вот так сдаться.',
      ]);
      await maya.say_and_wait([
        'Если тот человек и правда считает 『',
        arim_kin,
        ' 』 последним боем!',
      ]);
      await maya.say_and_wait([
        'В тот день я выйду как 『Маяно Топ Ган』, и ',
        maya.sex,
        ' останется позади, а потом ',
        maya.sex,
        ' увидит, как я хвастаюсь!',
      ]);
      await maya.say_and_wait([
        'Пусть ',
        maya.sex,
        ' услышит: 『У Maya полная сила сильнее твоей, правда?』.',
      ]);
      await maya.say_and_wait('『Maya тебя зажгла, да?』!');
      era.printButton('「Вот это настрой!」', 1);
      await era.input();
      await maya.say_and_wait('Да! Я обязательно это сделаю!');
      await maya.say_and_wait([
        'На 『',
        takz_kin,
        ' 』 я стану сильнее, на 『',
        tenn_sho,
        ' 』 — быстрее.',
      ]);
      await maya.say_and_wait(['А на 『', arim_kin, ' 』—']);
      await maya.say_and_wait(['—Если ', maya.sex, ' останется позади…']);
      await maya.say_and_wait([
        'И тогда, ',
        callname,
        '  смотри только на меня и похвали так: 『Ты сияешь ярче всех』.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = 'Навстречу Takarazuka Kinen';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     */
    const f = async (maya, amazon, brian, call_16, a_call_m, takz_kin) => {
      await era.printAndWait([
        'Настал день 「',
        takz_kin,
        ' 」. А в этот раз—',
      ]);
      await maya.say_and_wait(['…… ', call_16, '  не выйдет на старт.']);
      await maya.say_and_wait(
        'Ахаха☆ Обалденный шанс! На старт выйду только я!',
      );
      await maya.say_and_wait(
        'Поэтому я не проиграю. —Сделаю то, что нужно сделать сейчас.',
      );
      era.printButton('「Стань ещё сильнее!」', 1);
      await era.input();
      await maya.say_and_wait('I copy☆ Слушаюсь и мигом вырасту♪');
      era.drawLine();
      await era.printAndWait('(Уааааа—!!)');
      await amazon.say_and_wait('О, ты пришёл(а).');
      await brian.say_and_wait('…Хм, отказывать было не за что.');
      await brian.say_and_wait('Значит, дело есть. Тащить меня так далеко.');
      await brian.say_and_wait(
        'Если это ерунда, я больше с тобой разговаривать не стану.',
      );
      await amazon.say_and_wait(
        'Короче, сначала успокойся. Интуиция у тебя острая, уже должно было дойти?',
      );
      await amazon.say_and_wait([
        'На нынешнем 『',
        takz_kin,
        ' 』 『',
        a_call_m,
        ' 』 выйдет на старт.',
      ]);
      await brian.say_and_wait('…Ну и что.');
      await amazon.say_and_wait('Хм, не прикидывайся, будто тебе всё равно.');
      await amazon.say_and_wait([
        'Ты чего-то от неё хочешь — ',
        maya.sex,
        ' нечто, что тебя освободит.',
      ]);
      await brian.say_and_wait('…Ты давно это видишь?');
      await amazon.say_and_wait('Я за твоей спиной гоняюсь уже несколько лет.');
      await amazon.say_and_wait(
        'Хотя так до конца и не поняла, чего ты на самом деле хочешь.',
      );
      await amazon.say_and_wait(
        'Но по крайней мере разглядела: ты что-то терпишь.',
      );
      await amazon.say_and_wait('И что дальше так — никакого смысла.');
      await brian.say_and_wait('Хм, поэтому ты и повесил(а) надежду на ту?');
      await brian.say_and_wait([
        'Ты вроде особенно печёшься о ней — ',
        maya.sex,
        ' да ещё и растишь её — ',
        maya.sex,
        '.',
      ]);
      await amazon.say_and_wait('О, так ты давно знаешь?');
      await brian.say_and_wait([
        'Ведь у неё эта неотступная, бесячая манера бега — ну вылитый кое-кто — ',
        maya.sex,
        '.',
      ]);
      await amazon.say_and_wait([
        'Ха-ха, да — ',
        maya.sex,
        ' на тебя похожа — обе жадные.',
      ]);
      await brian.say_and_wait('…Хм.');
      await amazon.say_and_wait([
        'Заодно уж скажу — ',
        maya.sex,
        ' ещё будет расти.',
      ]);
      await amazon.say_and_wait([
        'Тебе, что ноешь 『это конец』, ',
        maya.sex,
        ' точно отвесит здоровенную пощёчину.',
      ]);
      await amazon.say_and_wait('А когда тебя так разбудят —');
      await amazon.say_and_wait('тогда уже я тебя побью.');
      await brian.say_and_wait(
        '…Хм, Амазон-сан тоже сгладилась. Ещё и врагу помогает, надо же.',
      );
      await amazon.say_and_wait('Ты о чём. Не враги, а соперницы?');
      await brian.say_and_wait('…Хе.');
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = 'В кокпит';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, amazon, brian, callname) => {
      await era.printAndWait('(уааааа—!!)');
      await brian.say_and_wait('……');
      await amazon.say_and_wait('Ну как?');
      await brian.say_and_wait('…Ничего особенного.');
      await brian.say_and_wait('Дело сделано, я обратно в академию.');
      await amazon.say_and_wait('Тренироваться пойдёшь?');
      await brian.say_and_wait('…Задолбало.');
      era.drawLine();
      await maya.say_and_wait(['Ха-а… ха-а… фу. ', callname, ', каково?']);
      await maya.say_and_wait(
        'Я правда выросла? На всём газу, что сейчас могу выжать.',
      );
      era.printButton('「Ты выросла!」', 1);
      await era.input();
      await maya.say_and_wait('Хе-хе, ура♪ Ну конечно, Maya же такая крутая☆');
      await maya.say_and_wait(
        'Хо-хо. Не выношу я это унылое пилотирование, которое сносит чужим потоком♪',
      );
      await maya.say_and_wait('Так! Следующая цель уже захвачена! Цель —');
      era.printButton(`「『Tenno Sho Autumn』!」`, 1);
      await era.input();
      await maya.say_and_wait('I copy☆');
      await maya.say_and_wait('Так, в следующий раз тоже на полном газу♪');
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Летние сборы (старший год)';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, callname) => {
      await era.printAndWait(
        'С сегодняшнего дня 「летние сборы」 снова стартуют!',
      );
      await maya.say_and_wait([
        callname,
        ', с возвращением♪ Добро пожаловать на курорт Maya~☆',
      ]);
      await maya.say_and_wait('В этом году тоже вдвоём проведём горячее лето☆');
      era.printButton('「Жаркое лето проводим все вместе」', 1);
      await era.input();
      await maya.say_and_wait('Хм—! Опять это~!');
      await maya.say_and_wait('Но в этом году, кажется —');
      await maya.say_and_wait(
        'и правда будет самым жарким летом из всех. Хи-хи☆',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = 'Летние сборы (старший год) окончены';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, brian, you, callname) => {
      await maya.say_and_wait(
        'Фу… 『летние сборы』 сегодня наконец кончились…',
      );
      await maya.say_and_wait(
        'Хи-хи… Maya тоже тренировалась с двигателем на полную, по-серьёзному…',
      );
      await maya.say_and_wait(
        'Поэтому в автобусе обратно… я… чуть-чуть посплю…',
      );
      await maya.say_and_wait('Как приедем… встану…');
      await maya.say_and_wait('Фу… фу…');
      await era.printAndWait([
        '…И вот ',
        you.get_colored_name(),
        ' в этом году снова дал(а) ',
        maya.sex,
        ' как следует отдохнуть в автобусе.',
      ]);
      era.drawLine();
      await maya.say_and_wait('М-м… уже академия…? Фуаа… м.');
      await maya.say_and_wait(
        'Хи-хи. В автобусе выспалась на славу. Так что и доп. тренировку одолею… ещё…',
      );
      era.printButton('「Ты всё ещё сонная」', 1);
      await era.input();
      await maya.say_and_wait('Нгу… вовсе нет…… а?');
      await brian.say_and_wait('Фу… фу…… ещё нет…!');
      await brian.say_and_wait('Я… ещё могу…!');
      await maya.say_and_wait(['……! ', callname, ', это сейчас —']);
      era.printButton(`「Это Брайан」`, 1);
      await era.input();
      await maya.say_and_wait('М-м… ну да…');
      await maya.say_and_wait(['…… ', maya.sex, ' Так сияет. Аж глаза режет.']);
      await maya.say_and_wait('Ещё ярче, чем раньше…');
      await maya.say_and_wait([
        '…… ',
        callname,
        '. Я всё равно хочу начать тренировку прямо сейчас. Можно?',
      ]);
      await era.printAndWait([
        'И тогда ',
        maya.sex,
        ', немного потерев глаза, побежала на Тренировочное поле.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = 'Навстречу Tenno Sho Autumn';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} amazon 菱亚马逊
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} t_call_a 东海帝王对菱亚马逊的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} a_call_m 菱亚马逊对摩耶重炮的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      amazon,
      callname,
      call_3,
      t_call_a,
      t_call_m,
      a_call_m,
      tenn_sho,
      arim_kin,
    ) => {
      await era.printAndWait([
        '— Наконец настал「',
        tenn_sho,
        ' 」. Когда эта скачка будет позади, ',
        maya.get_colored_name(),
        ' будет…',
      ]);
      await maya.say_and_wait(['…я выхожу! ', callname, '!']);
      await maya.say_and_wait([
        'Я выиграю эту скачку и стану сильнее! Обязательно… выступлю в『',
        arim_kin,
        ' 』!!',
      ]);
      era.printButton('「Попутного ветра!」', 1);
      await era.input();
      await maya.say_and_wait('Ага!');
      await teio.say_and_wait('А, а-а… прости!');
      await maya.say_and_wait(['Вау, ', call_3, '!?']);
      await teio.say_and_wait('Точно! Правильно!');
      await teio.say_and_wait([
        'Я передам весточку ',
        t_call_m,
        '! Заказчица — ',
        t_call_a,
        '!',
      ]);
      await teio.say_and_wait([
        { color: amazon.color, content: '『' },
        a_call_m,
        { color: amazon.color, content: '! С весны ты моя —』' },
        '…дальше пропускаем~',
      ]);
      era.printButton('「Так можно!?」', 1);
      await era.input();
      await teio.say_and_wait('Можно-можно! Главное — последний кусок!');
      await teio.say_and_wait([
        {
          color: amazon.color,
          content:
            '『Я тоже жду скачки с тобой, когда ты станешь сильнее. С сегодняшнего дня — я твой соперник.』',
        },
      ]);
      await teio.say_and_wait([
        maya.sex,
        'Вот так и сказала! Я понимаю её чувства. Потому что я тоже очень хочу с тобой сразиться! — ',
        maya.sex,
        '.',
      ]);
      await teio.say_and_wait([
        'Так что не проиграй! Побеждай, ',
        t_call_m,
        '!',
      ]);
      await teio.say_and_wait('Забери вершину и пусть все тебя догоняют!');
      await maya.say_and_wait(
        'А-ха-ха, это меня просят уйти в отрыв, чтобы все догоняли?',
      );
      await teio.say_and_wait([
        'Ой-ой. Неужели ',
        t_call_m,
        ' умеет только догонять?',
      ]);
      await maya.say_and_wait(['Хо-хо~ вовсе нет☆ правда, ', callname, '!']);
      era.printButton(`「Maya всё что угодно может」`, 1);
      await era.input();
      await maya.say_and_wait('Хе-хе! Точно☆');
      await maya.say_and_wait(
        'Хо-хо. Так что какой забег у Maya получится — вам двоим ни за что нельзя пропустить♪',
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = 'Дорожка в небо';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} luna 鲁铎象征
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     * @param {PrintedSpan} b_call_l 成田白仁对鲁铎象征的称呼
     * @param {PrintedSpan} l_call_b 鲁铎象征对成田白仁的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      maya,
      teio,
      brian,
      luna,
      callname,
      t_call_m,
      b_call_l,
      l_call_b,
      arim_kin,
    ) => {
      await era.printAndWait('(Уааааааа————!!)');
      await maya.say_and_wait([callname, '! Maya взяла первое! Первое!']);
      era.printButton('「Ты здорово постаралась!」', 1);
      await era.input();
      await maya.say_and_wait(
        'Ага! Maya очень старалась! Но я могу ещё сильнее!',
      );
      await maya.say_and_wait('Хе-хе, потому что—');
      await teio.say_and_wait([
        'О-о! ',
        t_call_m,
        ' так крута! Дальше —『',
        arim_kin,
        ' 』!',
      ]);
      await era.printAndWait('(Уааааааа————!!)');
      await maya.say_and_wait(
        'Все наверняка тоже думают, что Maya может сиять ещё ярче♪',
      );
      era.drawLine({ content: 'Несколько дней спустя' });
      await maya.say_and_wait('Фух… фух… н, снова лучшее время!');
      await maya.say_and_wait(['Теперь и『', arim_kin, ' 』 тоже—']);
      await maya.say_and_wait('…а.');
      await luna.say_and_wait([
        '…… ',
        l_call_b,
        ', всё, что ты сказала, — правда?',
      ]);
      await luna.say_and_wait(['Ты в『', arim_kin, ' 』──']);
      await brian.say_and_wait([
        b_call_l,
        ', болтать про будущее бессмысленно.',
      ]);
      await brian.say_and_wait(
        'Я тебя попросила побегать со мной парой, верно?',
      );
      await luna.say_and_wait('Это… так.');
      await brian.say_and_wait('…Когда мне увянуть — решу я сама.');
      await brian.say_and_wait(
        'Если хочешь со мной это обсудить — стой в стороне и смотри.',
      );
      await brian.say_and_wait('…Тогда победу заберёт лишь уходящая прочь я.');
      await luna.say_and_wait('Эй, эй!');
      await luna.say_and_wait('…Идёт напролом, только своей дорогой. Но—');
      await luna.say_and_wait('Не думай, что всех ты за собой оставишь!');
      await maya.say_and_wait(['…… ', maya.sex, ' Опять сверкает.']);
      await maya.say_and_wait([
        'Чем дольше смотрю, тем обиднее. Почему ',
        maya.sex,
        ' всё ещё может сверкать.',
      ]);
      await maya.say_and_wait('Та ведь уже — вот-вот должна закатиться.');
      era.printButton('「…Потому что закат светит красным」', 1);
      await era.input();
      await maya.say_and_wait('…э?');
      await era.printAndWait(
        'Вечернее солнце куда краснее, чем утром и в полдень.',
      );
      await era.printAndWait(
        'Перед тем как закат спадёт и скроется, та вспышка сияния хватает людские сердца.',
      );
      era.printButton('「Только не проиграй тому свету」', 1);
      await era.input();
      await maya.say_and_wait('…ага.');
      await maya.say_and_wait(
        'Если проиграть тому свету, я чувствую, что уже всю жизнь не смогу победить.',
      );
      await maya.say_and_wait([
        'Я выложусь полностью. На『',
        arim_kin,
        ' 』──',
      ]);
      await maya.say_and_wait('Выложиться полностью… и обойти ту!!');
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = 'Рождество';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (maya, you, callname, arim_kin) => {
      await era.printAndWait([
        'Однажды незадолго до「',
        arim_kin,
        ' 」, ',
        maya.get_colored_name(),
        ' вытащила ',
        you.get_colored_name(),
        ' наружу.',
      ]);
      await maya.say_and_wait([callname, ', быстрее-быстрее☆']);
      await maya.say_and_wait('Смотри-смотри☆ тут снеговик, а там ещё и ёлка♪');
      era.printButton('「Тебе очень радостно」', 1);
      await era.input();
      await maya.say_and_wait(
        'Нм♪ Потому что сегодня же день особого свидания!',
      );
      await maya.say_and_wait('Сегодня… канун Рождества для влюблённых☆');
      era.printButton('「Ещё же не вечер」', 1);
      await era.input();
      await era.printAndWait('Да и сегодня—');
      await maya.say_and_wait('Хи-хи, знаю я~');
      await maya.say_and_wait(
        'Сегодня это ни『день Рождества』, и вечер ещё не настал… но.',
      );
      await maya.say_and_wait('Вот я и хотела сказать『забронировать』!');
      era.printButton('「Забронировать?」', 1);
      await era.input();
      await maya.say_and_wait(
        'Точно! Я вообще-то хотела свидание в канун Рождества… но на тот день уже важные планы, да?',
      );
      await maya.say_and_wait(['Так что… ', callname, '!']);
      await maya.say_and_wait([
        'Сфоткай меня☆ на ',
        callname,
        ' телефон сними!',
      ]);
      era.printButton('「На мой?」', 1);
      await era.input();
      await maya.say_and_wait('Нм! Наготове? Момент затвора не упусти!');
      await maya.say_and_wait('Три, два, один…');
      await era.printAndWait('(щёлк)');
      await maya.say_and_wait('Ахаха, я получилась милой~? Эту фотку береги.');
      await maya.say_and_wait(
        'В канун Рождества я встану в ту позу — это тебе подарок!',
      );
      await era.printAndWait([
        'Услышав, как ',
        maya.sex,
        ' так сказала, ',
        you.get_colored_name(),
        ' ещё раз смотрит на фото—',
      ]);
      await era.printAndWait([
        'На фото ',
        maya.get_colored_name(),
        ' улыбается и изо всех сил машет рукой.',
      ]);
      await maya.say_and_wait([
        'Хе-хе☆ На ',
        arim_kin,
        ' я возьму только первое!',
      ]);
      await maya.say_and_wait([
        'В это『Рождество』 я подарю самого сияющего себя ',
        callname,
        '!',
      ]);
      await maya.say_and_wait([
        'Поэтому, ',
        callname,
        ' оставь мне канун Рождества!',
      ]);
      await maya.say_and_wait(['—оставь мне『', arim_kin, ' 』!!']);
      await era.printAndWait([
        '—Увидев, как ',
        maya.sex,
        ' так провозгласила, ',
        you.get_colored_name(),
        ' ещё сильнее ждёт в этом году「',
        arim_kin,
        ' 』.',
      ]);
      await era.printAndWait([
        '…На фото ',
        maya.get_colored_name(),
        ' кидает в объектив воздушный поцелуй.',
      ]);
      await maya.say_and_wait([
        'Хи-хи, в этот канун Рождества… хорошенько жди『',
        arim_kin,
        ' 』концерт после скачки.',
      ]);
      await maya.say_and_wait(
        'Я точно буду главной вокалисткой и только тебе пошлю『чмок』☆',
      );
      era.printButton('「Э!?」', 1);
      await era.input();
      await maya.say_and_wait(
        'Хе-хе, спокойно-спокойно~☆ Я никому не дам заметить!',
      );
      await maya.say_and_wait('Хи-хи… совсем по-взрослому, да?');
      era.printButton('「Эй!」', 1);
      await era.input();
      await maya.say_and_wait(
        'Э~ ну и что☆ Я украдкой сделаю, когда сцена погаснет!',
      );
      await maya.say_and_wait([
        'По-то-му~☆ На『',
        arim_kin,
        ' 』концерте ни в коем случае не отводи взгляд от меня, главной вокалистки♪',
      ]);
      await maya.say_and_wait([
        'Или… ',
        callname,
        ' хочешь, чтобы я дала『чмок』уже после сцены~?',
      ]);
      await maya.say_and_wait('…Так тоже можно. Хе-хе☆');
      await era.printAndWait([
        '…Выслушав ',
        maya.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' решает строго проследить, чтобы ',
        maya.sex,
        ' не меняла танцевальные движения самовольно.',
      ]);
      await era.printAndWait(['Но в этом году「', arim_kin, ' 」──']);
      await era.printAndWait([
        maya.get_colored_name(),
        ' точно возьмёт первое… и будет главной вокалисткой.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = 'Навстречу Arima Kinen';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} b_call_m 成田白仁对摩耶重炮的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (maya, brian, callname, call_16, b_call_m, arim_kin) => {
      await maya.say_and_wait(['『', arim_kin, ' 』, и я снова здесь.']);
      await maya.say_and_wait([
        'Хе-хе, ',
        callname,
        '. По сравнению с прошлым годом я выросла?',
      ]);
      era.printButton('「Очень выросла」', 1);
      await era.input();
      await maya.say_and_wait('Хо-хо… да? Вот так, вот так☆');
      await maya.say_and_wait('Но кое-что всё-таки не изменилось.');
      await maya.say_and_wait(
        'Я всё так же хочу сверкать! Прямо здесь, в Twinkle Series!!',
      );
      await maya.say_and_wait([
        'Так что ',
        callname,
        ', смотри на меня до самого конца☆',
      ]);
      await maya.say_and_wait('Смотри, как я сверкаю ярче всех♪');
      era.drawLine();
      await maya.say_and_wait(['А, это ', call_16, '! Привет☆']);
      await brian.say_and_wait(['…Это ', b_call_m, '.']);
      await maya.say_and_wait('Э☆ Ты помнишь моё имя!? Вау! Как здорово!!');
      await brian.say_and_wait(
        'Хм… столько скачек с тобой, хочешь не хочешь — запомнишь.',
      );
      await maya.say_and_wait(
        'Хе-хе, вот как. Тогда сегодня сосредоточься на скачке со мной.',
      );
      await maya.say_and_wait(
        'Я тебя так встряхну радостью, что забудешь тоску и боль!',
      );
      await maya.say_and_wait('Я заберу всё твоё внимание себе!');
      await brian.say_and_wait('……!');
      await maya.say_and_wait('Хи-хи. Я всё отлично схватываю!');
      await maya.say_and_wait([
        'Но всё равно есть вещи, которых я не понимаю. Потому что ',
        call_16,
        ' всегда так сияет.',
      ]);
      await maya.say_and_wait(['Поэтому я обыграю ', call_16, '.']);
      await maya.say_and_wait([
        'Я выложусь ещё сильнее, чем ',
        call_16,
        ' — и засияю.',
      ]);
      await maya.say_and_wait('И тогда обязательно заставлю тебя трепетать!');
      await brian.say_and_wait('…Хм.');
      await brian.say_and_wait(
        'Отлично, выкладывайся на полную. Я тебя разнесу.',
      );
      await maya.say_and_wait('Хм-хм☆ Maya вернёт тебе эти слова♪');
      await maya.say_and_wait('Потому что Maya не может проиграть!');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = 'Последний выход';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} brian 成田白仁
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_16 摩耶重炮对成田白仁的称呼
     * @param {PrintedSpan} l_call_b 鲁铎象征对成田白仁的称呼
     */
    const f = async (maya, brian, luna, you, callname, call_16, l_call_b) => {
      await you.say_as_passer_by_and_wait('Зрители', [
        {
          color: maya.color,
          content: 'Топ, Ган! Топ, Ган! Топ, Ган! Топ, Ган!',
        },
      ]);
      await maya.say_and_wait('……Выиграла.');
      await maya.say_and_wait(['…Я выиграла. Я одолела ', call_16, '.']);
      await maya.say_and_wait([callname, '! Я… я…!']);
      era.printButton(`「Maya, ты такая крутая」`, 1);
      await era.input();
      await maya.say_and_wait('Нн… нн…!');
      await maya.say_and_wait('Maya крутая, да? Сияет, да?');
      era.printButton('「Ты всегда сияла ярче всех」', 1);
      await era.input();
      await maya.say_and_wait(['Ва~~~~!! ', callname, ' ～!!']);
      era.drawLine();
      await brian.say_and_wait('…Ха… ха-ха, я всё ещё задыхаюсь.');
      await brian.say_and_wait(
        'Я полностью проиграла. Выложилась на полную… и всё равно проиграла. Но… ощущение неплохое.',
      );
      await brian.say_and_wait('Хм, это и есть—');
      await luna.say_and_wait(['── ', call_16, '!']);
      await luna.say_and_wait('…Правда всё в порядке?');
      await brian.say_and_wait('…А, точно. Ещё вот это осталось.');
      await brian.say_and_wait('— моя «церемония ухода».');
      await luna.say_and_wait('Непоколебимо… твоё решение не изменилось?');
      await luna.say_and_wait(
        '…Журналисты уже собрались. Это твоя церемония, так дай мне хотя бы устроить её с размахом.',
      );
      await brian.say_and_wait('…Спасибо.');
      await you.say_as_passer_by_and_wait('Сотрудник', [
        '…… ',
        brian.get_colored_name(),
        ', церемония начнётся через пять минут.',
      ]);
      await brian.say_and_wait('Нн… поняла.');
      await brian.say_and_wait(
        '— Хорошо, что когда я остановилась, то стояла на скачках. На этой траве, а не в академии.',
      );
      await you.say_as_passer_by_and_wait('Зритель А', [
        'Не может быть!? ',
        brian.get_colored_name(),
        '! Покажи ещё больше легенд!!',
      ]);
      await you.say_as_passer_by_and_wait(
        'Зритель Б',
        'Прошу, не уходи на покой!',
      );
      await brian.say_and_wait(
        'Эх… чего вы грустите. Вы ещё увидите следующую мечту.',
      );
      await brian.say_and_wait('— в той девочке.');
      await you.say_as_passer_by_and_wait('Ведущий', [
        'Итак, ',
        brian.get_colored_name(),
        ' — сейчас начнётся её церемония ухода—',
      ]);
      await maya.say_and_wait('Стоять—!');
      await maya.say_and_wait([
        'Maya ни за что не согласна! ',
        call_16,
        ' — её церемонию ухода отменить!!',
      ]);
      await you.say_as_passer_by_and_wait('Ведущий', 'Э!? Н-но…');
      await maya.say_and_wait(
        'Никаких но! Maya это ненавидит! Поэтому нельзя!',
      );
      await brian.say_and_wait('…Эй.');
      await brian.say_and_wait(
        'Выскочить вот так — чересчур капризно. Ты ведь сегодняшняя победительница.',
      );
      await brian.say_and_wait(
        'Подумай о своём влиянии. Малышке баловаться — так в другое место—',
      );
      await maya.say_and_wait('Maya и есть малышка!!');
      await maya.say_and_wait([
        'Потому что потом я буду скакать с ',
        call_16,
        ' ещё много раз и стану взрослой Скаковая ',
        maya.uma_sex_title,
        '!',
      ]);
      await maya.say_and_wait(
        'Поэтому Maya может такое говорить! И капризничать тоже можно! Потому что я ещё малышка!',
      );
      await maya.say_and_wait([
        'Maya ещё не набегалась с ',
        call_16,
        ' досыта! Пообещай мне следующий заезд!',
      ]);
      await brian.say_and_wait('Ч… что!?');
      await brian.say_and_wait('Это слишком натянуто! Ну правда, сегодня моя—');
      await maya.say_and_wait('Это вовсе не твоя церемония ухода!!');
      await brian.say_and_wait('Эй!!');
      await you.say_as_passer_by_and_wait('Зритель В', 'Пф… ха-ха!');
      await you.say_as_passer_by_and_wait('Зритель Г', [
        'Да, да! ',
        brian.get_colored_name(),
        ', не уходи на покой! Скачи с чемпионкой!',
      ]);
      await you.say_as_passer_by_and_wait('Зритель Д', [
        'Тебе бросили вызов, а ты удираешь — ',
        brian.get_colored_name(),
        ' так не поступит!',
      ]);
      await brian.say_and_wait('Эй, вы-то чего подпеваете…');
      await maya.say_and_wait(['А-ха-ха, все так хорошо знают ', call_16, '!']);
      await maya.say_and_wait([
        'Но Maya знает ещё больше. Ведь сегодняшняя ',
        call_16,
        ' ──',
      ]);
      await maya.say_and_wait(
        '— очень хочешь ещё раз проскакать с Maya, да? Хочешь, чтобы снова стало ещё горячее, да?',
      );
      await brian.say_and_wait('……!');
      await maya.say_and_wait([
        'Хе-хе. Поэтому Maya исполнит ',
        call_16,
        ' её желание!',
      ]);
      await maya.say_and_wait(
        'Потому что если всё время скакать с теми, кто сверкает, Maya станет ещё более сияющей взрослой!',
      );
      await brian.say_and_wait('…Это ещё что.');
      await brian.say_and_wait(
        'Чтобы удовлетворить свой каприз, ты велишь мне бежать дальше.',
      );
      await maya.say_and_wait('Ага!');
      await brian.say_and_wait('…Невыносимо. Ребёнок, за которого страшно.');
      await maya.say_and_wait('Я очень скоро стану взрослой☆');
      await brian.say_and_wait('Я не это имела в виду…');
      await luna.say_and_wait(['Хе-хе… сдавайся уже, ', l_call_b, '.']);
      await luna.say_and_wait(
        'Никто из присутствующих не хочет, чтобы ты завершила карьеру.',
      );
      await luna.say_and_wait('— и ты сама.');
      await luna.say_and_wait('Ещё не поздно сменить это на другую церемонию.');
      await maya.say_and_wait(
        'Точно, тогда! Сменим на церемонию объявления войны Maya!',
      );
      await brian.say_and_wait(
        'Эй!? Если так сменить, звездой церемонии станешь ты—',
      );
      await maya.say_and_wait('Хм, и что такого! Правда, президент?');
      await luna.say_and_wait(
        'М-м, можно. Церемония, которая сильнее разогреет атмосферу, журналисты тоже примут.',
      );
      await maya.say_and_wait('I copy☆');
      await brian.say_and_wait('…И правда ребёнок.');
      await maya.say_and_wait(
        'Аха-ха☆ Именно поэтому все ждут, какой Maya будет, когда вырастет, да? Захватывает, правда?',
      );
      await brian.say_and_wait('…Да.');
      await brian.say_and_wait('Жду так, что аж нестерпимо.');
    };
    f.title = title;
    return f;
  })(),
  sa_adv_game: (() => {
    const title = 'Захватывающая☆ игра на смелость Маяно Топ Ган!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} t_call_m 东海帝王对摩耶重炮的称呼
     */
    const f = async (maya, teio, you, callname, call_3, t_call_m) => {
      await era.printAndWait([
        'После отбоя кампус замер без единого звука. Когда ',
        you.get_colored_name(),
        ' по дороге в комнату тренера за забытой вещью—',
      ]);
      await maya.say_and_wait(['А! Это ', callname, '! Вот так совпадение♪']);
      era.printButton('「Что вы делаете здесь так поздно?」', 1);
      await era.input();
      await maya.say_and_wait('Мы-ы～ пришли смотреть призраков☆');
      await maya.say_and_wait(
        'Смотрели по ТВ передачу про привидения, и там зашла речь, что в академии тоже бывают мистические случаи—',
      );
      await teio.say_and_wait([
        'К-как ни крути, это враньё, но ',
        t_call_m,
        ' не верит…',
      ]);
      era.printButton('「Уже отбой, возвращайтесь」', 1);
      await era.input();
      await teio.say_and_wait(
        'Д-да-да-да-да!? Мы уже обошли все места, что хотели, мне хватит!',
      );
      await maya.say_and_wait(
        'Э～!? Тогда ещё одно место～! Maya хочет в комнату тренера!',
      );
      await maya.say_and_wait([
        'Давным-давно жила-была одна Скаковая ',
        maya.uma_sex_title,
        ' за день до доставки победного костюма погибла в аварии…',
      ]);
      await maya.say_and_wait([
        maya.sex,
        'Её призрак по ночам является в комнату тренера и скорбно спрашивает『Где мой победный костюм…』!',
      ]);
      await teio.say_and_wait('Ий────!?');
      await teio.say_and_wait('Ва, э… э-это точно выдумка!');
      await maya.say_and_wait([
        'Э, ещё неизвестно! ',
        callname,
        ', ну отведи нас～!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' так и не переспорил(а) упрямую Маяно Топ Ган, и вы втроём отправились в комнату тренера.',
      ]);
      await maya.say_and_wait('Эй～ призрак～! Где ты～?');
      await teio.say_and_wait([
        'Не надо звать её — ',
        maya.sex,
        '! А вдруг и правда явится～!',
      ]);
      await era.printAndWait(
        'Призрак, что бродит здесь за победным костюмом, который так ни разу и не надела…',
      );

      era.printButton('「Тот призрак наверняка сожалеет」(сила +20)', 1);
      era.printButton('「Позади Маяно Топ Ган и остальных…」(упорство +20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Вы сказали, что тот призрак наверняка хотел надеть победный костюм и нестись по скаковой дорожке—',
        ]);
        await maya.say_and_wait([
          'Да — ',
          maya.sex,
          ' наверняка любила бегать…',
        ]);
        await maya.say_and_wait([
          'Если бы я была ',
          maya.sex,
          ', тоже примчалась бы сюда от одиночества и сожаления!',
        ]);
        era.printButton(
          '「Так хочется восполнить ' + maya.sex + ' её сожаление」',
          1,
        );
        await era.input();
        await maya.say_and_wait('М-м…');
        await maya.say_and_wait('Точно! Maya пробежит и за призрака тоже!');
        await maya.say_and_wait(
          'Ради призрака, которому не довелось выйти на скачки, Maya заявится на кучу гонок и выдаст классные результаты♪',
        );
        await era.printAndWait('(клац-клац)');
        await teio.say_and_wait('Ий!? Окно вдруг зашумело!!');
        era.printButton(
          '「' + maya.sex + 'может, хочет нас поблагодарить」',
          1,
        );
        await era.input();
        await teio.say_and_wait(
          'Ууу～! Не-е-ет, пошли уже обратно～! А если вселится～!!',
        );
        await maya.say_and_wait('А? Дружить с призраком — вот это весело♪');
        await maya.say_and_wait('Правда, призрак☆');
        await maya.say_and_wait('Ладно! Призрак, Maya будет стараться!');
        await era.printAndWait([
          maya.get_colored_name(),
          ' легко бежала, будто в спину дул попутный ветер.',
        ]);
      } else {
        await teio.say_and_wait('Йаааа!! Призрак～～～～～!!');
        await teio.say_and_wait('Вааааа!! Спа～си～те～!!');
        era.printButton('「Догоняем!」', 1);
        await era.input();
        await maya.say_and_wait('Л-ладно!');
        await era.printAndWait([
          'Вы бросились догонять ',
          teio.get_colored_name(),
          ', но вконец потеряли её из виду.',
        ]);
        await maya.say_and_wait([
          call_3,
          ' ',
          maya.sex,
          'На самом деле боится призраков…',
        ]);
        era.printButton('「' + maya.sex + 'куда убежала?」', 1);
        await era.input();
        await maya.say_and_wait(
          'М-м… через тёмные страшные места точно не пойдёт, да?',
        );
        await maya.say_and_wait('Тогда ответ простой! Пошли!');
        await era.printAndWait([
          you.get_colored_name(),
          ' следом за знающей, каким путём ушла ',
          teio.get_colored_name(),
          ', — за ',
          maya.get_colored_name(),
          ' —',
        ]);
        await maya.say_and_wait(['Ура! Нашла тебя, ', call_3, '!!']);
        await teio.say_and_wait('……………………');
        era.printButton('「Прости, что напугал(а) тебя」', 1);
        await era.input();
        await era.printAndWait([
          'Забрав с собой почему-то притихшую ',
          teio.get_colored_name(),
          ', вы втроём отправились назад.',
        ]);
        era.drawLine();
        await maya.say_and_wait(['Фуаа～ ', callname, ', доброе утро～']);
        await maya.say_and_wait(
          'В итоге вчера так и не встретили призрака～ Ну и скука.',
        );
        await teio.say_and_wait(
          'И хорошо, что не встретили! Честное слово, я за тебя волновалась!?',
        );
        await teio.say_and_wait(
          'Ты так и не вернулась в комнату, и по телефону не дозвониться!',
        );
        await maya.say_and_wait([
          'Э? ',
          call_3,
          ', ты же с нами вместе возвращалась, да?',
        ]);
        await teio.say_and_wait('Э? Я вернулась одна.');
        await maya.say_and_wait([
          '…тогда вчера рядом с нами ',
          call_3,
          ' — это—',
        ]);
        await you.say_as_passer_by_and_wait('Двое', 'Э～～～～～!?');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_star_wish: (() => {
    const title = 'Загадать желание звёздам';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} sunday 美丽周日
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_55 摩耶重炮对美丽周日的称呼
     */
    const f = async (maya, sunday, you, callname, call_55) => {
      await era.printAndWait([
        'Вместе с ',
        you.get_colored_name(),
        ' по дороге домой, ',
        maya.sex,
        ' сказала, что хочет куда-то сходить, и вы пришли сюда…',
      ]);
      era.printButton('「Ты что-то забыла в учебном корпусе?」', 1);
      await era.input();
      await maya.say_and_wait([
        'Нет! Слушай-слушай, я сегодня от ',
        call_55,
        ' услышала такой крутой слух～!',
      ]);
      await sunday.used_to_say_and_wait(
        'Под сиянием звёзд двое на крыше, у которых затрепещет сердце, обретут счастье',
      );
      await maya.say_and_wait('Йа☆ какая романтика, как прекрасно!');
      await maya.say_and_wait(
        'Правда? Правда? Точно будет весело, ну пойдём вместе!',
      );
      era.printButton('「Ну что с тобой поделать」', 1);
      await era.input();
      await maya.say_and_wait(['Ура! Теперь вместе с ', callname, '…хе-хе!']);
      await maya.say_and_wait(
        'А, точно! Вот что: если нас по пути кто-то заметит — провал!',
      );
      await maya.say_and_wait('Copy есть?');
      era.printButton('「Copy!」', 1);
      await era.input();
      await maya.say_and_wait('Отлично! Тогда включаю стелс-режим…Take off☆');
      await maya.say_and_wait(
        '— Ведущий борт всем звеньям! Следов вражеских машин нет… конец связи!',
      );
      await maya.say_and_wait(
        'Хе-хе! Тогда можно 『вжух—!』 рвануть на крышу…',
      );
      await era.printAndWait('(топ-топ…топ-топ…!)');
      await maya.say_and_wait(['……!! ', callname, ', это сейчас было…']);
      era.printButton('「Это шаги」', 1);
      await era.input();
      await maya.say_and_wait('И ещё… они сюда идут!? Ч-что делать!');
      era.printButton('「Спрячемся и подождём, пока уйдут」(интеллект+20)', 1);
      era.printButton('「Спринт на крышу!」(скорость+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('Х-хорошо! Тогда в том классе—');
        await era.printAndWait('(…та-та-та…та-та…)');
        await maya.say_and_wait('…хе-хе, как в прятки, уже аж захватывает♪');
        era.printButton('「Потише!」', 1);
        await era.input();
        await maya.say_and_wait(
          'Ауаа! Так нельзя так нельзя! Надо потише, ш-ш…',
        );
        await maya.say_and_wait(
          ['Хо-хо… ', callname, ' — ресницы чуть завитые, какие милые♪'],
          true,
        );
        await maya.say_and_wait('И кажется… ещё… круче, чем обычно…', true);
        await maya.say_and_wait('…фува…фуваа.', true);
        era.printButton('「Маяно Топ Ган?」', 1);
        await era.input();
        await maya.say_and_wait('…а～～всё, не могу——!!');
        await sunday.say_and_wait([
          'Ва☆ как напугала! ',
          maya.get_colored_name(),
          ' тоже что-то забыла в классе??',
        ]);
        await maya.say_and_wait(['Ч-что? ', call_55, '!?']);
        era.printButton('「Нас нашли, да」', 1);
        await era.input();
        await maya.say_and_wait(
          'А——!! Точно! От напряжения совсем забыла～～!',
        );
        await sunday.say_and_wait(
          'Вот как! Ты применил(а) то волшебство?? Но-но…',
        );
        await sunday.say_and_wait(
          'Если сердце бум-бум колотится — уже красиво☆ правда★',
        );
        await maya.say_and_wait('Нн……может, и правда. Даже без волшебства…');
        era.printButton('「В каком смысле?」', 1);
        await era.input();
        await maya.say_and_wait(
          'Ауаа!! Ничего, вообще ничего! Раз уж провал, давай скорее назад!!',
        );
        await era.printAndWait([
          'По настоянию Маяно Топ Ган, ',
          you.get_colored_name(),
          ' так и не поняв истинный смысл волшебства, уходит обратно…',
        ]);
      } else {
        await maya.say_and_wait('Вот как! Лишь бы удрать и не попасться!');
        await maya.say_and_wait(['Тогда ', callname, '! Руку давай.']);
        era.printButton('「Э?」', 1);
        await era.input();
        await maya.say_and_wait(
          'Потому что я бегаю быстрее! Давай-давай, скорее, быстрее!',
        );
        await era.printAndWait([
          'Подгоняемая приближающимися шагами, ',
          maya.get_colored_name(),
          ' взяла ',
          you.get_colored_name(),
          ' за руку—',
        ]);
        await maya.say_and_wait([callname, ', давай-давай! Ещё чуть-чуть—!']);
        await maya.say_and_wait(['На месте!! Супер, ', callname, '!']);
        era.printButton('「К-как хорошо…」', 1);
        await era.input();
        await maya.say_and_wait('И под конец тут смотреть на звёзды…');
        await maya.say_and_wait(['Ва…! ', callname, ', небо! Смотри в небо!!']);
        await maya.say_and_wait(
          'Какая красота, суперкрасота! Ночное небо оказывается такое яркое!?',
        );
        era.printButton('「Наши старания окупились!」', 1);
        await era.input();
        await maya.say_and_wait(
          'Вот как… точно! Звёзды такие красивые, может, тоже потому что мы старались!',
        );
        await maya.say_and_wait('…так! Тогда пора обратно!');
        era.printButton('「Уже уходим?」', 1);
        await era.input();
        await era.printAndWait(
          'Если верить слуху, надо, чтобы 「на крыше под сиянием звёзд сердце затрепетало」…',
        );
        await maya.say_and_wait('Ага! Уходим! Потому что я только что поняла.');
        await maya.say_and_wait('Даже если ничего не делать, мы…');
        await maya.say_and_wait(
          'К-короче! Вот так вот! Так что пойдём поскорее, ладно?',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' с улыбкой смотришь на смущённую ',
          maya.get_colored_name(),
          '…под сиянием звёздного неба вы вместе пошли обратно.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sweet_present: (() => {
    const title = 'Дарю тебе сладкие чувства♪';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} hishi 菱曙
     * @param {CharaTalk} flower 西野花
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_28 摩耶重炮对菱曙的称呼
     * @param {PrintedSpan} call_51 摩耶重炮对西野花的称呼
     */
    const f = async (maya, hishi, flower, you, callname, call_28, call_51) => {
      await era.printAndWait([
        'Когда ',
        you.get_colored_name(),
        ' проходит мимо столовой──',
      ]);
      await maya.say_and_wait(
        'Сегодня будем старательно делать сладости～♪ Прошу вас обеих, научите меня!',
      );
      await flower.say_and_wait(
        'Хорошо……♪ Как наставница, я выложусь на полную.',
      );
      await hishi.say_and_wait(
        'Я тоже отлично пеку сладости～ Давайте сделаем большие и вкусные～♪',
      );
      era.printButton('「Делаете сладости в столовой?」', 1);
      await era.input();
      await maya.say_and_wait(['А, это ', callname, ' ～!']);
      await maya.say_and_wait([
        'Знаешь, я хотела сделать сладости, чтобы поблагодарить ',
        callname,
        ' за повседневные наставления!',
      ]);
      await maya.say_and_wait([
        'Я сказала тёте с кухни, ',
        maya.sex,
        ' сказала, что можно пользоваться этой кухней♪',
      ]);
      await maya.say_and_wait([
        'Если испечь вкусный торт, можно тронуть сердце ',
        callname,
        ' ──',
      ]);
      era.printButton('「Моё сердце?」', 1);
      await era.input();
      await maya.say_and_wait([
        'Н-ничего! Если не против, просто смотри, как я готовлю, ',
        callname,
        ' ♪',
      ]);
      await flower.say_and_wait('Дальше кладём сахар и размешиваем……');
      await maya.say_and_wait('Мгм～♪');
      await era.printAndWait([
        maya.get_colored_name(),
        ' с непривычной готовкой явно буксует, но выглядит очень счастливой.',
      ]);
      era.printButton(`「Давай, Maya!」(выносливость+20)`, 1);
      era.printButton('「Я тоже помогу」(интеллект+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Глядя, как ',
          maya.sex,
          ' старается изо всех сил, ',
          you.get_colored_name(),
          ' невольно ',
          maya.sex,
          ' подбадриваешь.',
        ]);
        await era.printAndWait(
          '──И в тот же миг от голода живот громко заурчал.',
        );
        await hishi.say_and_wait(
          'А-ха-ха♪ Скоро будет готово, так что подожди ещё чуть-чуть～',
        );
        await flower.say_and_wait(
          'Слушай, тут есть маршмеллоу, что только что налепили в свободную минутку…… хочешь одну?',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' с благодарностью принимаешь маршмеллоу, которые сделали ',
          flower.get_colored_name(),
          ' и ',
          hishi.get_colored_name(),
          '.',
        ]);
        era.printButton('「Как вкусно! Это мой любимый вкус!」', 1);
        await era.input();
        await flower.say_and_wait(
          'П-правда? Как хорошо…… тебе пришлось по вкусу.',
        );
        await maya.say_and_wait('Хмф!!');
        await maya.say_and_wait(
          'Вкусно…… любимый вкус…… это же как раз то, что я хотела услышать!',
          true,
        );
        await maya.say_and_wait('Раз так……', true);
        await maya.say_and_wait([
          call_51,
          ', ',
          call_28,
          '!Я буду печь торт сама!',
        ]);
        await hishi.say_and_wait('Ээ? У тебя получится～?');
        await maya.say_and_wait([
          'Вообще без проблем! Я же лучше всех знаю, что любит ',
          callname,
          ' !',
        ]);
        await maya.say_and_wait(
          [
            'Чтобы обойти ',
            maya.couple_title,
            ' двоих, я точно сама сделаю ещё круче!',
          ],
          true,
        );
        await maya.say_and_wait('У-уууу～');
        await era.printAndWait([
          maya.get_colored_name(),
          ' хоть и доделала торт, но цвет и форма — словами не описать……',
        ]);
        await maya.say_and_wait([
          'Зато вкус должен тебе зайти! Я смотрела на то, что любит ',
          callname,
          ' !',
        ]);
        await maya.say_and_wait(
          'И ещё я добавила полным-полно любви…… ты не будешь есть?',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' решаешься и отправляешь в рот торт, который испекла ',
          maya.get_colored_name(),
          ' ──',
        ]);
        era.printButton('「О-очень вкусно!」', 1);
        await era.input();
        await maya.say_and_wait('Правда!?');
        await maya.say_and_wait([
          'Правда-правда вкусно!? Это тот вкус, что любит ',
          callname,
          ' !?',
        ]);
        era.printButton(`「Ага, Maya, у тебя рука что надо!」`, 1);
        await era.input();
        await maya.say_and_wait('Ва～♪ Здорово, обалдеть～～～～～!!');
        await era.printAndWait([
          'Похвалённая за стряпню ',
          maya.get_colored_name(),
          ', после этого была в отличном настроении и, сияя улыбкой, закончила тренировку.',
        ]);
      } else {
        await era.printAndWait([
          'Глядя на ',
          maya.couple_title,
          ' у плиты, даже ',
          you.get_colored_name(),
          ' сам(а) хочет готовить. ',
          you.get_colored_name(),
          ' так и говорит ',
          maya.couple_title,
          ' ──',
        ]);
        await flower.say_and_wait(
          'Э, если интересно, давай вместе? Я могу подсказать порядок……!',
        );
        await maya.say_and_wait([
          'Стой-стой! ',
          callname,
          ' , смотри, как я готовлю～!',
        ]);
        era.printButton('「Я тоже хочу сказать тебе спасибо」', 1);
        await era.input();
        await maya.say_and_wait([callname, '……!']);
        await maya.say_and_wait('I copy☆ Если так, я только за♪');
        await hishi.say_and_wait(
          'Когда все дружно и с любовью готовят～ сладости становятся ещё вкуснее♪',
        );
        await era.printAndWait(
          'После изрядных стараний торт всё-таки получился, только чуть подгорел……',
        );
        await maya.say_and_wait(['Ва～! ', callname, ' дарит мне торт～♪']);
        await maya.say_and_wait('Ам-ам…… амх!');
        await maya.say_and_wait(
          'Е-есть чуток горечи, но это же взрослый вкус♪',
        );
        era.printButton('「Это просто подгорело! Можешь не есть, ничего!」', 1);
        await era.input();
        await maya.say_and_wait('Не-е-ет～!');
        await maya.say_and_wait([
          'Я не оставлю ни крошки и слопаю все чувства ',
          callname,
          ' !',
        ]);
        await maya.say_and_wait([
          'Так что ',
          callname,
          ', ты тоже ешь торт, который сделала я.',
        ]);
        await maya.say_and_wait('На～♪');
        await maya.say_and_wait('Хе-хе~! Моя благодарность до тебя дошла?');
        era.printButton('「Конечно!»', 1);
        await era.input();
        await maya.say_and_wait('Ура~♪');
        await flower.say_and_wait(
          'Т-так близко… Смотрю сбоку — и краснею, сердце колотится!',
        );
        await hishi.say_and_wait('Супер, супер. Поздравляем, поздравляем~♪');
        await era.printAndWait([
          'С помощью двоих друзей ',
          maya.get_colored_name(),
          ' отлично справилась со сладостями.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_dokidoki_live: (() => {
    const title = 'Стрим Маяно Топ Ган: сердце колотится☆!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} sunday 美丽周日
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_3 摩耶重炮对东海帝王的称呼
     * @param {PrintedSpan} call_55 摩耶重炮对美丽周日的称呼
     */
    const f = async (maya, sunday, you, callname, call_3, call_55) => {
      await era.printAndWait([
        'Вместе с ',
        you.get_colored_name(),
        ' по дороге домой после прогулки —',
      ]);
      await maya.say_and_wait(['Эй-эй! ', callname, ', ты смотришь стримы?']);
      era.printButton('「С чего вдруг такой вопрос?」', 1);
      await era.input();
      await maya.say_and_wait('Слушай, Maya тоже начала стримить!');
      await maya.say_and_wait([
        'Я танцую под хиты~ или вместе с ',
        call_3,
        ' играю в игры~',
      ]);
      await maya.say_and_wait('И ещё кучу всего весёлого!');
      await maya.say_and_wait([
        callname,
        ' тоже посмотри! Ну пожалуйста? Пожалуйста?',
      ]);
      era.printButton('「Хорошо」', 1);
      await era.input();
      await era.printAndWait([
        'По горячей просьбе ',
        maya.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' пообещал(а) смотреть, как ',
        maya.sex,
        ' проведёт следующий стрим.',
      ]);
      era.drawLine({ content: 'Несколько дней спустя' });
      await era.printAndWait([
        you.get_colored_name(),
        ' открыл(а) стрим-канал ',
        maya.get_colored_name(),
        ' —',
      ]);
      await maya.say_and_wait('Посадка в ваши сердца☆ Канал Maya стартует~♪');
      await maya.say_and_wait([
        'Сегодняшняя гостья — моя подруга, ',
        call_55,
        '!',
      ]);
      await sunday.say_and_wait('Хеллоу☆ У всех всё красиво?');
      await you.say_as_passer_by_and_wait(
        'Зритель A',
        'Maya, мы тебя заждались~!!',
      );
      await you.say_as_passer_by_and_wait(
        'Зритель B',
        'Не очень понятно, зато Marvelous☆',
      );
      await maya.say_and_wait(
        'Спасибо за комментарии~! Maya вас тоже заждалась♪',
      );
      await sunday.say_and_wait('Сегодня мы вдвоём нагрянем в красивые места☆');
      await maya.say_and_wait(
        'Поехали~! Большой челлендж: бешеная крутилка на кофейных чашках!',
      );
      await sunday.say_and_wait('Аха-ха-ха-ха~☆ Крутит-вертит, как красиво★');
      await maya.say_and_wait([
        'Дальше — игровой зал! Я перебью ',
        call_3,
        ' по очкам!',
      ]);
      await sunday.say_and_wait('Йей☆ Супервысокий счёт, как красиво★');
      await era.printAndWait(
        'Потом они вдвоём носились по куче мест и заряжали зрителей смехом своей неуёмной игрой.',
      );
      await era.printAndWait(
        'Солнечная открытость и обаяние, которое тянет к себе всех —',
      );
      await era.printAndWait([
        'Посмотрев стрим, ',
        you.get_colored_name(),
        ' словно снова осознал(а) обаяние ',
        maya.get_colored_name(),
        '.',
      ]);
      await maya.say_and_wait('А, пора прощаться. Вам было весело смотреть?');
      await era.printAndWait([
        'Услышав, как ',
        maya.get_colored_name(),
        ' бросила вопрос, ',
        you.get_colored_name(),
        ' уже отправил(а) комментарий, не успев опомниться.',
      ]);
      era.printButton(
        '「Мне тоже было очень весело!」(выносливость и сила +10)',
        1,
      );
      era.printButton(
        '「Я всегда буду тебя поддерживать. Удачи на скачках!」(упорство +20)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('Хе-хе, спасибо!');
        await maya.say_and_wait(
          'Получилось донести волнение и колотящееся сердце тебе по ту сторону экрана♪',
        );
        await maya.say_and_wait(
          'От ваших комментариев Maya тоже очень-очень рада☆',
        );
        await era.printAndWait([
          'Сказавшая это с улыбкой ',
          maya.get_colored_name(),
          ' сверкала особенно ярко.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' решил(а) — чтобы и дальше видеть эту улыбку, ',
          you.get_colored_name(),
          ' будет той опорой, в которой нуждается ',
          maya.sex,
          '.',
        ]);
      } else {
        await maya.say_and_wait([
          'Конечно! Maya не просто милая ',
          maya.phy_sex_title,
          ' ♪',
        ]);
        await maya.say_and_wait([
          'На скачках я покажу тебе, что у взрослой ',
          maya.phy_sex_title,
          ' бывает много лиц!',
        ]);
        await maya.say_and_wait(
          'И-та-к☆ И на скачках, и на стриме — болеть за меня♪',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' отлично знает обаяние ',
          maya.get_colored_name(),
          ' как гонщицы.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' хочет, чтобы зрители, которым лишь по стримам знакомо, кто такая ',
          maya.sex,
          ', тоже увидели, как ',
          maya.sex,
          ' сияет на скачках.',
        ]);
      }
      era.drawLine();
      await maya.say_and_wait([
        'Вау~! ',
        callname,
        ', ты смотрел(а) вчерашний стрим?',
      ]);
      era.printButton('「Я ещё и комментарий оставил(а)」', 1);
      await era.input();
      await maya.say_and_wait('Ээ~!? Неужели это вот этот~!?');
      await era.printAndWait([
        maya.get_colored_name(),
        ' указала на комментарий — его точно оставил(а) ',
        you.get_colored_name(),
        '.',
      ]);
      await maya.say_and_wait('Эй-эй, Maya угадала?');
      era.printButton('「Вот это да! Как ты узнала?」', 1);
      await era.input();
      await maya.say_and_wait([
        'Этот комментарий как будто ',
        callname,
        ' рядом: от него на душе тихо и тепло!',
      ]);
      await maya.say_and_wait(
        'Хотя мы всё время вместе, мог(ла) бы сказать напрямую~♪',
      );
      await era.printAndWait([
        'Слова словами, а ',
        maya.get_colored_name(),
        ' всё равно светилась от радости.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_excited_live: (() => {
    const title = 'Восторженный☆стрим Маяно Топ Ган!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        'Вместе с ',
        maya.get_colored_name(),
        ' после прогулки, по дороге домой вместе—',
      ]);
      await maya.say_and_wait([
        'Кстати, ',
        callname,
        '!Мы же раньше говорили про стримы?',
      ]);
      await maya.say_and_wait(
        'После этого зрителей всё прибывало, и теперь канал Maya суперпопулярный♪',
      );
      await era.printAndWait('Ты смотришь архив стрима в телефоне, и правда—');
      await you.say_as_passer_by_and_wait(
        'Зритель A',
        'Maya всегда такая милая!',
      );
      await you.say_as_passer_by_and_wait(
        'Зритель B',
        'Я больше всех люблю Maya☆',
      );
      await era.printAndWait('Ты видишь кучу восторженных комментариев.');
      await maya.say_and_wait('Вот видишь? Популярность Maya взмывает ввысь☆');
      await maya.say_and_wait(
        'А ещё-ещё! В следующем стриме Maya хочет показать всем себя совсем другую!',
      );
      await maya.say_and_wait([
        '…Впрочем, что бы такого сделать～? ',
        callname,
        ', есть у тебя хорошая идея?',
      ]);
      era.printButton('「А что, если показать всем, как ты занимаешься?」', 1);
      await era.input();
      await maya.say_and_wait([
        'Вот оно! ',
        callname,
        '  голова, как всегда, быстро работает!',
      ]);
      await maya.say_and_wait(
        'Стоит всем увидеть серьёзную Maya — и они точно полюбят меня ещё больше!',
      );
      await maya.say_and_wait([
        'Так,что☆ можно попросить автора идеи, ',
        callname,
        '  поснимать～?',
      ]);
      await maya.say_and_wait(
        'Если стрим наберёт кучу популярности, на выступления Maya на скачках тоже обратят внимание～',
      );

      era.printButton('「Ясно. Тогда снимем, как ты поёшь!」(скорость+20)', 1);
      era.printButton('「Ясно. Тогда снимем, как ты бежишь!」(упорство+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('Ага! Сейчас же Take off к сцене☆');
        era.drawLine();
        await maya.say_and_wait(
          'Приземляемся в сердцах у всех☆ Канал Maya стартует～♪',
        );
        await you.say_as_passer_by_and_wait('Зритель C', 'Уоооооооо!!');
        await you.say_as_passer_by_and_wait(
          'Зритель D',
          'Maya сегодня тоже полна энергии～☆',
        );
        await you.say_as_passer_by_and_wait('Зритель E', 'Это где～?');
        await maya.say_and_wait('Хе-хе♪ Спасибо всем за комментарии!');
        await maya.say_and_wait(
          'Сегодня я покажу всем, как репетирую концерт!',
        );
        await maya.say_and_wait([
          'А снимает вот кто! Надёжный партнёр, которому Maya спокойно доверяет, ',
          callname,
          '!',
        ]);
        await maya.say_and_wait([
          you.sex,
          'Помогает Maya тренироваться и ещё хвалит♪',
        ]);
        await you.say_as_passer_by_and_wait('Зритель F', 'Так жду концерт～');
        await you.say_as_passer_by_and_wait(
          'Зритель G',
          'Я тоже хочу быть тренером!!',
        );
        await you.say_as_passer_by_and_wait('Зритель H', 'Так завидую.');
        await maya.say_and_wait(
          'Ой, ну вы даёте～♪ Тогда концерт Maya начинается!',
        );
        await maya.say_and_wait('Раз,два☆свер,кай☆тя,же☆сек,си☆');
        await maya.say_and_wait('И в конце — мило завершить!');
        await you.say_as_passer_by_and_wait(
          'Зритель I',
          'Та～ка～я～ми～ла～я～!!',
        );
        await you.say_as_passer_by_and_wait(
          'Зритель J',
          'И песня, и танец супер!',
        );
        await maya.say_and_wait('И правда… неплохо, да♪');
        await maya.say_and_wait(
          "Если Maya победит в скачках, все увидят живую Maya на Winner's Stage☆",
        );
        await maya.say_and_wait('Так что все болейте за меня!');
      } else {
        await maya.say_and_wait('Ага! Сейчас же Take off к полю☆');
        era.drawLine();
        await maya.say_and_wait(
          'Приземляемся в сердцах у всех☆ Канал Maya стартует～♪',
        );
        await you.say_as_passer_by_and_wait('Зритель C', 'Яхуууу!!');
        await you.say_as_passer_by_and_wait('Зритель D', 'Принимаем посадку☆');
        await you.say_as_passer_by_and_wait(
          'Зритель E',
          'Это что, спортивка!?',
        );
        await maya.say_and_wait('Хе-хе～♪ Спасибо всем за комментарии!');
        await maya.say_and_wait('Сегодня я покажу всем, как Maya тренируется!');
        await maya.say_and_wait([
          'А снимает вот кто! Надёжный партнёр, которому Maya спокойно доверяет, ',
          callname,
          '!',
        ]);
        await maya.say_and_wait([
          you.sex,
          'Помогает Maya тренироваться и ещё хвалит♪',
        ]);
        await you.say_as_passer_by_and_wait(
          'Зритель F',
          'Удачи на тренировке～',
        );
        await you.say_as_passer_by_and_wait(
          'Зритель G',
          'Я тоже партнёр Maya!',
        );
        await you.say_as_passer_by_and_wait('Зритель H', 'Тренер, меняемся.?');
        await maya.say_and_wait('Ой, ну вы даёте～♪ Тогда пора тренироваться!');
        await maya.say_and_wait('Фух… фух…!');
        await maya.say_and_wait('Финиш! Народ, как Maya пробежала?');
        await you.say_as_passer_by_and_wait('Зритель I', 'Супербыстро!');
        await you.say_as_passer_by_and_wait('Зритель J', 'Реально круто!');
        await maya.say_and_wait('И правда… неплохо, да♪');
        await maya.say_and_wait(
          'Раз так, сегодня вовсю покажу вам крутую сторону Maya!',
        );
        await maya.say_and_wait('Никому нельзя моргать♪');
        await era.printAndWait([
          'Поскольку и сама она пышет задором, ',
          you.get_colored_name(),
          ' ловит момент, и ',
          maya.sex,
          ' тренируется больше обычного.',
        ]);
      }
      era.drawLine({ content: 'На следующий день' });
      await maya.say_and_wait('Ва～! Зрителей снова больше♪');
      await maya.say_and_wait('И комментариев тоже больше, чем когда-либо!');
      era.printButton(`「Здорово, Maya!」`, 1);
      await era.input();
      await maya.say_and_wait([
        '♪ ',
        callname,
        ' тоже сияет улыбкой, так что и мне радостно♪',
      ]);
      await maya.say_and_wait('Так! Стану ещё популярнее!');
      await era.printAndWait([
        'Набирающая всё больше популярности ',
        maya.get_colored_name(),
        ' всё глубже уходит в стримы.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_kirakira_kessin: (() => {
    const title = 'Сияющая☆решимость Маяно Топ Ган!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        'Начавшая стримить ',
        maya.get_colored_name(),
        ' благодаря врождённому обаянию стала известной стримершей.',
      ]);
      await era.printAndWait([
        'Но почему-то ',
        maya.sex,
        ' будто больше не стримит. И сегодня опять весь день на улице—',
      ]);
      era.printButton('「……Ты больше не стримишь?」', 1);
      await era.input();
      await maya.say_and_wait('Ну это…… мне уже надоело! Гулять веселее!');
      await maya.say_and_wait(
        'Когда все хвалят — приятно, но мне кажется, уже хватит!',
      );
      era.printButton('「Ты же так радовалась стримам」', 1);
      await era.input();
      await maya.say_and_wait('Ла-ладно уже! Хватит про стримы!');
      await maya.say_and_wait(
        'Мне ещё надо купить журнал, который сегодня поступил в продажу, пора идти!',
      );
      await era.printAndWait([
        maya.get_colored_name(),
        ' безапелляционно обрывает тему и уходит, даже не обернувшись.',
      ]);
      era.printButton('「Но всё-таки это так не даёт покоя……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' открываешь её архив стримов — вдруг найдётся зацепка— ',
        maya.sex,
        '.',
      ]);
      era.printButton('「Гадких комментариев в мой адрес стало больше……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' раньше помогал(а) ',
        maya.sex,
        ' со съёмкой, и с тех пор всё больше завистливых к ',
        you.get_colored_name(),
        ' комментариев.',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' наверное, начиталась тех комментариев и поэтому приуныла.',
      ]);
      era.printButton(`「Надо поговорить с Maya……」`, 1);
      await era.input();
      await era.printAndWait([
        maya.sex,
        'Мест, куда она могла пойти, полно, ',
        you.get_colored_name(),
        ' решает искать одно за другим.',
      ]);
      await maya.say_and_wait(['Вах, ', callname, '!?']);
      era.printButton('「Наконец-то нашёл(а) тебя……!」', 1);
      await era.input();
      await maya.say_and_wait('Неужели…… ты всё это время меня искал(а)?');
      era.printButton('「Потому что я уже знаю, почему ты не стримишь」', 1);
      await era.input();
      await maya.say_and_wait(
        'Н-не надо больше об этом. Причина — как я только что сказала……',
      );
      era.printButton(
        '「Спасибо, что обо мне беспокоишься」(скорость и выносливость +10)',
        1,
      );
      era.printButton(
        '「Я совершенно не принимаю критику в комментариях близко к сердцу」(сила +20)',
        2,
      );
      era.printButton('「Бросать стримы слишком жалко」(интеллект +20)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' говоришь ей — ',
            maya.sex,
            ' ',
            you.get_colored_name(),
            ' , что видел(а) направленные против ',
            you.get_colored_name(),
            ' критические комментарии, и благодарит её за нежность и заботу — ',
            maya.sex,
            '.',
          ]);
          await maya.say_and_wait('Н-нет же! Мне правда уже надоело!');
          await maya.say_and_wait(
            'Когда перестала стримить, только тогда поняла: по-настоящему сиять мне — на скачках!',
          );
          await maya.say_and_wait([
            'И дальше я буду рядом с ',
            callname,
            ', выступлю на куче скачек и выдам крутой результат—',
          ]);
          await maya.say_and_wait(
            'Чтобы в меня влюбилось ещё больше народу, чем сейчас～!',
          );
          era.printButton(`「Maya……」`, 1);
          await era.input();
          await maya.say_and_wait('Н-ну тебя～! Не делай такое лицо!');
          await maya.say_and_wait([
            'Лишь бы с ',
            callname,
            ' вместе — и что ни делай, всё в радость!',
          ]);
          await era.printAndWait([
            'Услышав слова ',
            maya.get_colored_name(),
            ', ',
            you.get_colored_name(),
            ' молча кивает.',
          ]);
          await era.printAndWait([
            'Потому что ',
            you.get_colored_name(),
            ' понимает: незачем нарочно разоблачать, как ',
            maya.sex,
            ' солгала во благо ради ',
            you.get_colored_name(),
            '.',
          ]);
          await era.printAndWait([
            'Зато ',
            you.get_colored_name(),
            ' как тренер исполнит её желание и поможет ей засиять — ',
            maya.sex,
            ' — ',
            maya.sex,
            '.',
          ]);
          era.printButton('「Я обязательно сделаю тебя счастливой!」', 1);
          await era.input();
          await maya.say_and_wait('Ээ!?');
          await maya.say_and_wait([
            callname,
            '!Только что это были за слова……!?',
          ]);
          era.printButton(
            '「Я сделаю из тебя самую сияющую Скаковая ' +
              maya.uma_sex_title +
              '!」',
            1,
          );
          await era.input();
          await maya.say_and_wait('А…… да ну, так вот что ты имел(а) в виду.');
          await maya.say_and_wait('Тогда и я поклянусь!');
          await maya.say_and_wait([
            'Я обязательно стану ещё ярче звёзд — ',
            era.get('cflag:24:性别') === 1 ? ' джентльменом' : 'леди',
            '!',
          ]);
          await maya.say_and_wait(['──вместе с ', callname, ' ☆']);
          break;
        case 2:
          await era.printAndWait([
            'Поэтому хочется, чтобы ',
            maya.sex,
            ' стримила как раньше, — ',
            you.get_colored_name(),
            ' так и говорит ей это — ',
            maya.sex,
            '.',
          ]);
          await maya.say_and_wait('Maya это очень задело!');
          await maya.say_and_wait([
            'Мне так обидно! И так нестерпимо! ',
            callname,
            '  ведь ты всегда так стараешься!',
          ]);
          await maya.say_and_wait([
            ' и на тренировках, и на съёмках, ',
            callname,
            '  всегда помогаешь Maya—',
          ]);
          await maya.say_and_wait(
            'Но всё из-за моей ошибки…… Хотя это всё из-за меня……',
          );
          await maya.say_and_wait([
            callname,
            '  Ты большой дурак! Ну поругай Maya уже～～～～～!!',
          ]);
          await maya.say_and_wait('……уу.');
          era.printButton('「Прости, правда」', 1);
          await era.input();
          await maya.say_and_wait('уу-уу～ вот именно это……');
          await maya.say_and_wait([
            'Хотя Maya очень нравится, как ',
            callname,
            '  добр к людям, но когда добрее некуда — пусть это будет только к Maya!',
          ]);
          await maya.say_and_wait(
            'На комменты вроде «мешаешь» и «вали уже» можно злиться сколько угодно, это нормально!',
          );
          era.printButton('「Мешаю я или нет — пусть решат скачки」', 1);
          await era.input();
          await maya.say_and_wait([callname, '……']);
          await maya.say_and_wait('……Не могу больше! Ну что с тобой поделать!');
          await maya.say_and_wait([
            'Нет проблем. Ради доброго ',
            callname,
            ', Maya обязательно победит!',
          ]);
          await maya.say_and_wait('А потом всем покажу!');
          await era.printAndWait([
            you.get_colored_name(),
            '  кивнула, подняла взгляд к ночному небу, и звёзды по всему небосводу сверкали, словно предвещая ваше будущее.',
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            '  видел(а) критику в адрес ',
            you.get_colored_name(),
            ', но бросать стрим из-за этого — слишком жалко.',
          ]);
          await era.printAndWait([
            '「Все же смотрят твои стримы и радуются」, ',
            you.get_colored_name(),
            ' сказал(а) ',
            maya.sex,
            ' это—',
          ]);
          await maya.say_and_wait([
            'Это так, но Maya ненавидит, когда про ',
            callname,
            '  говорят гадости……',
          ]);
          era.printButton(
            '「Если донесёшь, что чувствуешь сейчас, тебя обязательно поймут」',
            1,
          );
          await era.input();
          await maya.say_and_wait('……Понятно. Maya ещё раз всем скажет.');
          await maya.say_and_wait(
            'Эм…… всем привет, давно не виделись. Добро пожаловать на канал Maya.',
          );
          await you.say_as_passer_by_and_wait(
            'Зритель A',
            'Maya!?Это она сама!?',
          );
          await you.say_as_passer_by_and_wait(
            'Зритель B',
            'Без тебя так одиноко!',
          );
          await you.say_as_passer_by_and_wait(
            'Зритель C',
            'Ты какая-то вялая.',
          );
          await maya.say_and_wait(
            'Хе-хе, простите. Сегодня Maya хочет вам кое-что сказать—',
          );
          await era.printAndWait([
            'На этих словах, ',
            maya.get_colored_name(),
            '  опустила голову — ',
            maya.sex,
            ' наверное, мучается, как это сказать.',
          ]);
          era.printButton(`(Maya, давай……!)`, 1);
          await era.input();
          await maya.say_and_wait(
            '……На стримах Maya было весело. И что вы смотрите — тоже очень радостно.',
          );
          await maya.say_and_wait([
            'Но, когда Maya видит эти гадкие комменты про ',
            callname,
            ', Maya очень обидно.',
          ]);
          await maya.say_and_wait([
            'Потому что Maya и ',
            callname,
            ' оба всё это время стараемся, думая 『надо выиграть～!』…',
          ]);
          await maya.say_and_wait(
            'Maya хочет, чтобы все за нас болели, но вам, может, не нравится…… Maya, которая не дурачится?',
          );
          await you.say_as_passer_by_and_wait('Зритель D', 'Супер нравится!!');
          await you.say_as_passer_by_and_wait(
            'Зритель E',
            'Maya, правда прости.',
          );
          await you.say_as_passer_by_and_wait(
            'Зритель F',
            'Малость перегнули……',
          );
          await maya.say_and_wait(
            'Как хорошо…… Но канал Maya пока прощается со всеми.',
          );
          era.printButton('「Ээ!?」', 1);
          await era.input();
          await maya.say_and_wait(
            'На перерыве Maya бегала и поняла! Ярче всего Maya сверкает на скачках.',
          );
          await maya.say_and_wait(
            'Будет немного одиноко…… но Maya хочет, чтобы все увидели её ещё круче!',
          );
          await you.say_as_passer_by_and_wait('Зритель G', 'Правда прощаемся?');
          await you.say_as_passer_by_and_wait('Зритель H', 'Это так тяжело……');
          await maya.say_and_wait('Все……');
          await you.say_as_passer_by_and_wait(
            'Зритель I',
            'Я буду болеть за Maya.',
          );
          await you.say_as_passer_by_and_wait('Зритель J', 'И я!');
          await you.say_as_passer_by_and_wait(
            'Зритель K',
            'Maya, я приду смотреть!',
          );
          await maya.say_and_wait(
            'Ага! На скачках всегда увидимся! Maya тоже будет ждать всех на дорожке!',
          );
          await era.printAndWait(
            'На пробной скачке, что прошла потом, фанатов на трибунах было больше обычного.',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_taisecu_hito: (() => {
    const title = 'Дорогой человек Маяно Топ Ган!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} fuji 富士奇石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} f_call_m 富士奇石对摩耶重炮的称呼
     */
    const f = async (maya, fuji, you, callname, f_call_m) => {
      await era.printAndWait([
        you.get_colored_name(),
        '  проводил(а) ',
        maya.get_colored_name(),
        ', с которой ходил(а) гулять, обратно к общежитию.',
      ]);
      await maya.say_and_wait([
        'Хе-хе! Сегодня тоже было супер весело! С ',
        callname,
        '  ……св-свидание♪',
      ]);
      era.printButton('「Главное, что было весело」', 1);
      await era.input();
      await maya.say_and_wait(
        'Точно! Заходи в комнату Maya～! Как в сериалах, сначала вместе чайку—',
      );
      await fuji.say_and_wait(
        'Ой-ой-ой, как староста общежития я не могу на это закрыть глаза.',
      );
      await maya.say_and_wait('А! Папа нас поймал～');
      era.printButton('「Папа……?」', 1);
      await era.input();
      await maya.say_and_wait(
        'Ну то самое! В сериалах же часто у порога на папу натыкаются?',
      );
      await fuji.say_and_wait(
        'Ха-ха-ха, папа～ главу общежития и правда можно считать приёмными родителями.',
      );
      await maya.say_and_wait(
        'Тогда… папа, знакомься! Этот человек — мой важный человек☆',
      );
      await fuji.say_and_wait([
        'Что? У мое ',
        era.get('cflag:24:性别') === 1 ? ' го сына' : 'й дочери',
        ' важный человек～? Правда?',
      ]);
      era.printButton('「Ну это…」(скорость+20)', 1);
      era.printButton(
        '「…на самом деле у меня есть другой важный человек」(упорство+20)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait([
          'Йя☆ ',
          callname,
          '  да ещё и стесняется! Так мило!',
        ]);
        await fuji.say_and_wait(
          'Хо-хо, шутки на этом хватит. У вас и правда прекрасные отношения.',
        );
        await fuji.say_and_wait([
          f_call_m,
          '  Такая энергия — тоже из-за этого?',
        ]);
        await maya.say_and_wait('Хе-хе! Мы же друг другу будущее пообещали～♪');
        era.printButton('Скорее, контракт подписали」', 1);
        await era.input();
        await maya.say_and_wait([
          'Хм～! ',
          callname,
          '  ну вот, сейчас надо сказать『угу』… так ведь?',
        ]);
        await fuji.say_and_wait([
          'Ха-ха-ха, вот оно что. ',
          f_call_m,
          '  и правда так.',
        ]);
        await fuji.say_and_wait([
          'Впредь ',
          f_call_m,
          '  тоже прошу взять на попечение.',
        ]);
        await fuji.say_and_wait(
          '…шучу. Вышло совсем как у настоящего отца, да? Хо-хо.',
        );
        await fuji.say_and_wait([
          'Тогда я пойду. Скоро ужин, ',
          f_call_m,
          '  тоже пойдём вместе.',
        ]);
        await maya.say_and_wait('Да!… а, перед тем как идти.');
        await maya.say_and_wait([
          callname,
          ', тебя похвалили! Теперь и на официальном знакомстве всё будет в порядке☆',
        ]);
        era.printButton('「Официальное знакомство…?」', 1);
        await era.input();
        await maya.say_and_wait('Тогда я пошла! До завтра～♪');
        await era.printAndWait([
          '…в общем, от мысли, что и дальше с ',
          maya.get_colored_name(),
          '  будешь вместе выкладываться, ',
          you.get_colored_name(),
          '  преисполнился(ась) рвения.',
        ]);
      } else {
        await maya.say_and_wait('Эээээ～～～!?');
        await maya.say_and_wait(
          'Это что значит!? Почему Maya не знает! Что это вообще такое—!?',
        );
        await fuji.say_and_wait(
          'Вот оно что. Ты, гляжу, тоже умеешь играть～?',
        );
        await maya.say_and_wait('Н-неправда… ты с Maya только играл(а)…!?');
        era.printButton('「Я шучу」', 1);
        await era.input();
        await maya.say_and_wait('…э? Шутка?');
        await fuji.say_and_wait('Ха-ха-ха-ха! Ага. На этом подколки хватит.');
        await maya.say_and_wait('Э!? Вы двое только что дразнили Maya!?');
        await maya.say_and_wait(
          'Хм! Жестоко, слишком жестоко! Maya только что правда было очень грустно～!',
        );
        era.printButton('「Прости-прости」', 1);
        await era.input();
        await maya.say_and_wait('Хм—! Что ни говори, Maya тебя не простит!');
        await fuji.say_and_wait([
          'Ой-ой, ',
          maya.sex,
          ' и правда тебя очень любит. Я и сам не вынесу, если из-за этого у вас испортятся чувства…',
        ]);
        await fuji.say_and_wait([
          'Точно! ',
          f_call_m,
          ', ты знаешь, что в столовой сейчас фестиваль тортов?',
        ]);
        await maya.say_and_wait(
          '…знаю? Maya очень хотела пойти, но билеты не урвать…',
        );
        await fuji.say_and_wait(
          'У меня как раз в комнате лишние два билета. Как? Сходите вдвоём выпить чай в знак примирения.',
        );
        await maya.say_and_wait([
          'Ва～～!! Хочу-хочу! Maya хочет с ',
          callname,
          '  пойти!',
        ]);
        await fuji.say_and_wait(
          'Вот и славно. Билеты на ближайшем столе у входа, иди возьми.',
        );
        await maya.say_and_wait('Да♪');
        await fuji.say_and_wait('Фух… так, наконец уладили.');
        era.printButton('「Спасибо тебе…」', 1);
        await era.input();
        await fuji.say_and_wait(
          'Не стоит, это мне. На самом деле я давно хотел тебя поблагодарить.',
        );
        await fuji.say_and_wait([
          'Всё-таки у ',
          f_call_m,
          ' ',
          maya.sex,
          ' любопытства хоть отбавляй… так что во многом заставляет волноваться.',
        ]);
        await maya.say_and_wait([
          callname,
          '! Быстрее-быстрее～! А то столовая закроется!',
        ]);
        await fuji.say_and_wait('Хо-хо. Обязательно повеселитесь.');
        await era.printAndWait(
          'Потом вы вдвоём попили чаю… и благополучно помирились.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_race_lesson: (() => {
    const title = 'Лекция Maya по скачкам☆';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} urara 春乌拉拉
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_52 摩耶重炮对春乌拉拉的称呼
     * @param {PrintedSpan} callname_52 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} u_call_m 春乌拉拉对摩耶重炮的称呼
     */
    const f = async (maya, urara, callname, call_52, callname_52, u_call_m) => {
      await era.printAndWait([
        'Вместе с ',
        maya.get_colored_name(),
        '  вы досмотрели пробные скачки и по дороге обратно—',
      ]);
      await urara.say_and_wait([
        'А, это ',
        u_call_m,
        '  и ',
        callname_52,
        ' ～! Вы что, пришли болеть за меня!?',
      ]);
      await maya.say_and_wait(['Угу! ', call_52, '  так старалась～☆']);
      await urara.say_and_wait('Хе-хе, спасибо～!');
      await urara.say_and_wait(
        'Сегодня тоже бежать было очень весело! Хоть я и последняя, я добежала совершенно довольная♪',
      );
      await maya.say_and_wait([
        'Вот как～ ',
        call_52,
        '  такая молодец～! Maya как проиграет — сразу дуется☆',
      ]);
      await urara.say_and_wait(
        'Мне всегда весело! Потому что бегать я люблю больше всего!',
      );
      await urara.say_and_wait([
        'Но… победить так сложно! ',
        u_call_m,
        '  как тебе удаётся выигрывать скачки?',
      ]);
      await maya.say_and_wait('Я?');
      await urara.say_and_wait('Угу! Ты же всегда так быстро бежишь～?');
      await urara.say_and_wait([
        'Если бы Урара тоже стала как ',
        u_call_m,
        ' , то, глядишь, и выиграла бы!',
      ]);
      era.printButton('「Не потренироваться вместе?」', 1);
      await era.input();
      await maya.say_and_wait('Отличная идея☆');
      await maya.say_and_wait([
        call_52,
        ',позанимаемся вместе и в следующий раз обязательно победим!!',
      ]);
      await maya.say_and_wait([
        'Maya и ',
        callname,
        ' — лекция по скачкам~☆ ученица — ',
        call_52,
        ' -сан♪',
      ]);
      await urara.say_and_wait('Здесь! Я Урара!');
      await maya.say_and_wait([
        'Тогда сразу начнём~! Сначала спрошу у ',
        callname,
        ' ☆',
      ]);
      await maya.say_and_wait([call_52, ' что сейчас нужнее всего!?']);
      era.println();
      era.printButton(
        '「Нарастить выносливость, чтобы не выдохнуться!」(выносливость+20)',
        1,
      );
      era.printButton('「Освоить приём, как обходить соперниц!」(сила+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait([
          'Динь-дон динь-дон☆ ',
          callname,
          '  всё-таки молодец♪',
        ]);
        await maya.say_and_wait(['…гм! Эм, ', call_52, ' -сан!']);
        await maya.say_and_wait(
          'Начистоту☆ в прошлых скачках ты на половине дистанции уже выдохлась, да!?',
        );
        await urara.say_and_wait(
          'Ага! Бежать было очень весело, но я почти свалилась~',
        );
        await maya.say_and_wait(
          'Если бы выносливости было больше, добежала бы куда легче~☆',
        );
        await urara.say_and_wait(['Точно! ', u_call_m, '  какая умница~♪']);
        await maya.say_and_wait(
          'Пу-пу! Maya сегодня учитель, так что зовите меня 『Маяно Топ Ган-сэнсэй』!',
        );
        await urara.say_and_wait([
          'Да, ',
          maya.get_colored_name(),
          ' -сэнсэй!',
        ]);
        await era.printAndWait([
          'Так, под руководством ',
          maya.get_colored_name(),
          ', ',
          urara.get_colored_name(),
          ' потренировалась—',
        ]);
      } else {
        await maya.say_and_wait(
          'Йа~☆ это же взаимопонимание!? Maya тоже думала о том же~♪',
        );
        await maya.say_and_wait([
          call_52,
          ',спрошу тебя: как ты обычно бежишь?',
        ]);
        await urara.say_and_wait('Обычно? Я всегда выкладываюсь на полную!');
        await maya.say_and_wait(
          'М-м, вот как… Тогда есть что-то, что тебя парит?',
        );
        await urara.say_and_wait(
          'Мм~ мне трудно вырваться вперёд~ как только кажется, что врежусь в кого-то, я сразу паникую!',
        );
        await maya.say_and_wait('О-о, вот оно что~!');
        await maya.say_and_wait(
          'Тогда на следующих скачках беги и смотри только вперёд!',
        );
        await maya.say_and_wait(
          'Будешь смотреть вперёд — и настанет момент, когда впереди никого нет—',
        );
        await maya.say_and_wait('И тогда несись прямо вперёд☆');
        await urara.say_and_wait('Поняла! Я попробую♪');
      }
      era.drawLine({ content: 'На следующий день' });
      await urara.say_and_wait('Слушай, слушай! Я обогнала одного человека!');
      await maya.say_and_wait('Вау, супер~! Обогнала одного человека—');
      await maya.say_and_wait('Одного человека!?');
      await urara.say_and_wait(
        'Хе-хе~! Вот так буду обгонять по одной и в конце возьму первое~♪',
      );
      await maya.say_and_wait(
        'Если всё время обгонять других, когда-нибудь будешь первой! Обязательно возьми первое~!!',
      );
      await urara.say_and_wait('О~!!');
      await era.printAndWait([
        'Наставления для ',
        urara.get_colored_name(),
        ', похоже, положительно сказались и на ',
        maya.get_colored_name(),
        '.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_model_secret: (() => {
    const title = 'Секрет зрелой модели!';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} yukino 雪之美人
     * @param {CharaTalk} city 黄金城市
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     * @param {PrintedSpan} call_29 摩耶重炮对雪之美人的称呼
     * @param {PrintedSpan} call_40 摩耶重炮对黄金城市的称呼
     * @param {PrintedSpan} y_call_c 雪之美人对黄金城市的称呼
     * @param {PrintedSpan} c_call_m 黄金城市对摩耶重炮的称呼
     * @param {PrintedSpan} c_call_y 黄金城市对雪之美人的称呼
     */
    const f = async (
      maya,
      yukino,
      city,
      you,
      callname,
      call_29,
      call_40,
      y_call_c,
      c_call_m,
      c_call_y,
    ) => {
      await era.printAndWait([
        you.get_colored_name(),
        '  попросил(а) Маяно Топ Ган помочь ',
        you.get_colored_name(),
        ' вместе разобрать бумаги—',
      ]);
      await maya.say_and_wait(['А! Это журнал с ', call_40, '!']);
      await maya.say_and_wait([
        call_40,
        '  и правда такая красивая~♪ даже в очень откровенном наряде смотрится супер!',
      ]);
      await maya.say_and_wait('…точно! Maya придумала отличную идею~!');
      await era.printAndWait(['Разобрав бумаги, вы идёте по улице—']);
      await city.say_and_wait(['О, это ', c_call_m, '.']);
      await yukino.say_and_wait('Привет~!');
      await maya.say_and_wait([
        'Это ',
        call_29,
        ' и ',
        call_40,
        ' ~! Как раз вовремя☆',
      ]);
      await maya.say_and_wait([
        'Слушай-ка~! ',
        call_40,
        ' ты же читательская модель?',
      ]);
      await maya.say_and_wait([
        call_40,
        '  знает много зрелых моделей, крутой взрослый человек—',
      ]);
      await maya.say_and_wait([
        'Расскажи мне секрет, как стать зрелой ',
        maya.phy_sex_title,
        ' ~♪',
      ]);
      await city.say_and_wait([
        '『Зрелая ',
        maya.phy_sex_title,
        ' 』… тебе это и правда нравится.',
      ]);
      await yukino.say_and_wait(['З-зрелая ', maya.phy_sex_title, '!? Вау…!']);
      await yukino.say_and_wait([
        '…н-но если в этом секрет 『городская ',
        maya.child_sex_title,
        ' 』… расскажи и мне!',
      ]);
      await city.say_and_wait(['Э… даже ', c_call_y, ' так говорит?']);
      await city.say_and_wait(
        '…ну можно. Только это моё личное мнение, не обессудь.',
      );
      await city.say_and_wait(
        'Когда я работаю читательской моделью, для меня важны две вещи.',
      );
      await city.say_and_wait('Первое — 『форма』.');
      await city.say_and_wait(
        'Всегда держать пик формы и показывать себя с лучшей стороны.',
      );
      await maya.say_and_wait(
        'С лучшей стороны… как круто!! И дальше, и дальше!?',
      );
      await city.say_and_wait('Дальше — 『быстрота』.');
      await city.say_and_wait('Ловить текущие тренды и быть на острие моды.');
      await yukino.say_and_wait('О-очень полезно~!');
      await maya.say_and_wait([
        call_40,
        '  всегда так сверкает именно из-за этих двух пунктов~!',
      ]);
      await maya.say_and_wait(
        'Если Maya возьмётся за учёбу, может, станет ещё на шаг ближе к взрослой♪',
      );
      era.println();
      era.printButton('「Держать форму и правда важно」(выносливость+20)', 1);
      era.printButton('「Держать скорость и правда важно」(скорость+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('Да-да~♪ Форма~!');
        await maya.say_and_wait('Форма…… качать тело…… м! Maya поняла!');
        await maya.say_and_wait([
          'Нужно поднять выносливость! Правда!? ',
          callname,
          ' ♪',
        ]);
        era.printButton('「Э?」', 1);
        await era.input();
        await maya.say_and_wait(
          'Ладно, пошли-пошли! Смотри, как Maya взрослеет♪',
        );
        await city.say_and_wait('Речь не об этом…… ладно, проехали.');
        await city.say_and_wait([
          'Будем считать, что ',
          maya.sex,
          ' хочет стать взрослой по-своему.',
        ]);
        await yukino.say_and_wait([
          'К-круто……! Я тоже скорее хочу стать как ',
          call_40,
          ' ~',
        ]);
        await era.printAndWait([
          'Непрерывно тренируясь ради лучшей формы, ',
          maya.get_colored_name(),
          ' изрядно прибавила в выносливости.',
        ]);
      } else {
        await maya.say_and_wait('Да-да~♪ Держать скорость~!');
        await maya.say_and_wait('Скорость…… точно!');
        await maya.say_and_wait(
          'Учитель вроде говорил, что «челночный бег очень полезен»~!',
        );
        era.printButton('「Ну да, так и есть……」', 1);
        await era.input();
        await maya.say_and_wait([
          'Решено♪ Раз ',
          callname,
          ' тоже это подтверждает, так что ошибки быть не может!',
        ]);
        await maya.say_and_wait('Take off на поле☆ Я пробегу быстрее всех♪');
        await yukino.say_and_wait([
          y_call_c,
          '……эм, потому что я тоже хочу стать «городской ',
          maya.child_sex_title,
          ' 』……!',
        ]);
        await city.say_and_wait(
          'М, не обращай на меня внимания…… давай, налегай.',
        );
        await yukino.say_and_wait('Так точно! Ладно, я постараюсь~!');
        await era.printAndWait([
          'Челночный бег ради скорости, кажется, стал для ',
          maya.get_colored_name(),
          ' отличной тренировкой.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_maya_reading: (() => {
    const title = 'Учёбу оставь Маяно Топ Ган☆';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        'Время встречи уже настало, ',
        maya.get_colored_name(),
        ' всё ещё нет……',
      ]);
      await maya.say_and_wait('Hello-hello~! Я тебя не заставила ждать~!?');
      era.printButton('「Нет, я только что на месте」', 1);
      await era.input();
      await maya.say_and_wait('Ва-ва☆ Это сейчас было как свидание!? Кья~~~!');
      await maya.say_and_wait([
        'Я не про это! ',
        callname,
        ', прости! Одноклассники тормознули~',
      ]);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        'Скаковая ' + maya.uma_sex_title + 'A',
        'Эх, завтра уже экзамены~',
      );
      await you.say_as_passer_by_and_wait(
        'Скаковая ' + maya.uma_sex_title + 'B',
        'Тоска~ просто прогулять, что ли?',
      );
      await maya.say_and_wait(
        'Понимаю-понимаю! Maya тоже ненавидит экзамены~!!',
      );
      await maya.say_and_wait(
        'Пишешь в один миг, а спать и играть нельзя! Ну вот же, остаётся только рисовать~!!',
      );
      await you.say_as_passer_by_and_wait(
        'Скаковая ' + maya.uma_sex_title + 'A',
        [maya.get_colored_name(), ', эй, ты~!'],
      );
      await you.say_as_passer_by_and_wait(
        'Скаковая ' + maya.uma_sex_title + 'B',
        'Завидно~ на следующем экзамене ты тоже всё «схвачешь»?',
      );
      await maya.say_and_wait('Ну вроде~');
      await you.say_as_passer_by_and_wait(
        'Скаковая ' + maya.uma_sex_title + 'A',
        ['Кстати, ', maya.get_colored_name(), '! Скажи, что может попасться!'],
      );
      await you.say_as_passer_by_and_wait(
        'Скаковая ' + maya.uma_sex_title + 'B',
        'Ну пожалуйста~! Как помощь подруге! Ладно?',
      );
      await maya.say_and_wait('I copy☆ Всё на плечах великой Маяно Топ Ган♪');
      era.drawLine();
      await maya.say_and_wait([
        'В общем так, я учила ',
        maya.couple_title,
        ' тому, что умею! ',
        maya.couple_title,
        ' были в восторге!',
      ]);
      await maya.say_and_wait([
        maya.couple_title,
        'Ещё и «в следующий раз тоже помоги»! хе-хе, популярной ',
        maya.phy_sex_title,
        ' ещё и тяжко~♪',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        ' казалась очень довольной, но как ',
        maya.sex,
        ' её тренер, ',
        you.get_colored_name(),
        ' немного беспокоится, не станет ли это ',
        maya.sex,
        ' её нагрузкой……',
      ]);
      era.printButton(
        '「А что, если и тебе просить что-то взамен?」(сила&упорство+10)',
        1,
      );
      era.printButton('「Когда не хочется — отказывай」(интеллект+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Это не просто учить других: если ещё и получать благодарность, можно снизить её нагрузку — ',
          maya.sex,
          ' её нагрузку, поэтому ',
          you.get_colored_name(),
          '  предлагает—',
        ]);
        await maya.say_and_wait('А!! Maya совсем забыла!');
        await maya.say_and_wait('Что-то взамен~♪ Чего бы попросить~?');
        await maya.say_and_wait([
          '……Точно! Пусть ',
          maya.couple_title,
          ' поиграют с Maya!',
        ]);
        await maya.say_and_wait(
          'На время экзаменов все учат, никто не играет с Maya~',
        );
        era.printButton(
          '「Благодаря тому, что ты учила ' +
            maya.sex +
            ', ' +
            maya.sex +
            ' теперь свободны」',
          1,
        );
        await era.input();
        await maya.say_and_wait([
          'Ага-ага! Завтра спрошу у ',
          maya.couple_title,
          ' ♪',
        ]);
        era.drawLine();
        await you.say_as_passer_by_and_wait(
          'Скаковая ' + maya.uma_sex_title + 'A',
          'Ответный подарок тебе?',
        );
        await maya.say_and_wait('Да! Хочу, чтобы вы поиграли с Maya♪');
        await maya.say_and_wait(
          'В последнее время все только и твердят про экзамены, никто не играет~',
        );
        await you.say_as_passer_by_and_wait(
          'Скаковая ' + maya.uma_sex_title + 'B',
          [
            ' Ты про 『',
            maya.get_colored_name(),
            ' лагерь новобранцев』… то есть все вместе веселимся на полную, пока не выдохнемся, да?',
          ],
        );
        await you.say_as_passer_by_and_wait(
          'Скаковая ' + maya.uma_sex_title + 'A',
          'Неплохо. Я как раз хотела расслабиться!',
        );
        await you.say_as_passer_by_and_wait(
          'Скаковая ' + maya.uma_sex_title + 'B',
          ['Я тоже! Давай, ', maya.get_colored_name(), ' лагерь новобранцев♪'],
        );
        await maya.say_and_wait('Супер~~~~~! Веселимся на полную!!');
        await era.printAndWait([
          'Несколько дней спустя доигравшая до комендантского часа ',
          maya.get_colored_name(),
          ' вернулась с бодрым видом,',
        ]);
      } else {
        await maya.say_and_wait(['Ну вот! ', callname, ' вечно переживаешь~♪']);
        await maya.say_and_wait(
          'Maya так рада, что на неё рассчитывают, и все счастливы, что разобрались!',
        );
        await maya.say_and_wait('Правда же? Сплошные плюсы♪');
        era.printButton('「Тогда хочу, чтобы ты тоже меня порадовала」', 1);
        await era.input();
        await maya.say_and_wait(
          'Без проблем, без проблем! Какое угодно желание — говори♪',
        );
        await era.printAndWait([
          'Получив обещание, ',
          you.get_colored_name(),
          ' нагрузил(а) ',
          maya.get_colored_name(),
          ' интенсивными тренировками.',
        ]);
        await maya.say_and_wait('Ва~! Так Maya совсем не рада——————!');
        era.drawLine();
        await maya.say_and_wait(['Ууу~! ', callname, ' злючка…']);
        await you.say_as_passer_by_and_wait(
          'Скаковая ' + maya.uma_sex_title + 'A',
          ['А-ха-ха, ты молодец, ', maya.get_colored_name(), '!'],
        );
        await you.say_as_passer_by_and_wait(
          'Скаковая ' + maya.uma_sex_title + 'B',
          [
            'Этот тренер ещё как умеет~! Так знает, как с ',
            maya.get_colored_name(),
            ' ладить.',
          ],
        );
        await maya.say_and_wait(['Да-да! ', callname, ' вообще крутой♪']);
        await you.say_as_passer_by_and_wait(
          'Скаковая ' + maya.uma_sex_title + 'A',
          '…так ты дуешься или всё-таки рада?',
        );
        await maya.say_and_wait('П-потому что девичье сердце такое сложное~!');
        await era.printAndWait([
          'После горького урока ',
          maya.get_colored_name(),
          ' будто стала чуть умнее как ',
          maya.phy_sex_title,
          '.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_maya_takeoff: (() => {
    const title = 'Маяно Топ Ган · Взлёт🌟';
    /**
     * @param {CharaTalk} maya 摩耶重炮
     * @param {CharaTalk} you 玩家
     * @param {string} callname 摩耶重炮对玩家的称呼
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        maya.get_colored_name(),
        ' наконец получила скаковой костюм.',
      ]);
      await era.printAndWait([
        'Потому что ',
        maya.sex,
        ' сказала ',
        you.get_colored_name(),
        ' 「дизайн откроем, только когда привезут!」, так что это ',
        you.get_colored_name(),
        ' видит впервые.',
      ]);
      await maya.say_and_wait('Та-дам——☆');
      await maya.say_and_wait([
        'Смотри-смотри, ',
        callname,
        '! Супер красиво, да~♪',
      ]);
      era.printButton('「Я думал(а), будет воздушнее…」', 1);
      await era.input();
      await maya.say_and_wait('М-м, Maya тоже долго ломала голову над этим~');
      await maya.say_and_wait(
        'Но по-моему, так тоже сексуально и Maya очень идёт! Как тебе?',
      );
      era.printButton('「По-моему, очень круто, здорово」', 1);
      await era.input();
      await maya.say_and_wait('Супер~!!');
      await maya.say_and_wait('Папа с мамой Maya тоже хвалили эскиз костюма~♪');
      await maya.say_and_wait(
        'Говорили: 『прямо как папа в молодости, очень круто』!',
      );
      era.printButton('「Я помню, твой папа работает…」', 1);
      await era.input();
      await maya.say_and_wait('Ага! Он пилот, парит в небе☆');
      await maya.say_and_wait(
        'Maya когда-то летала на маленьком джете, который вёл папа~♪',
      );
      await maya.say_and_wait(
        'Небо такое огромное, а город, где мы живём, далеко и крошечный!',
      );
      await maya.say_and_wait(
        'Maya обожает ощущение, когда 『вжух——!』 носишься над бескрайним пейзажем~♪',
      );
      await maya.say_and_wait(
        'Лететь по небу — как нестись по скаковой дорожке! И волнение, и адреналин♪',
      );
      await maya.say_and_wait('Поэтому скаковой костюм Maya такой☆');
      await maya.say_and_wait(
        'Когда несёшься по дорожке, будто летишь по свободному радостному небу~!',
      );
      era.println();
      era.printButton('「Взлетай ко многим скачкам!」(скорость+20)', 1);
      era.printButton('「Наконец понял(а) твои истоки」(выносливость+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('Ага-ага! Обязательно~!');
        await maya.say_and_wait(
          'Полёт Maya покажет всем зрителям красивый пейзаж♪',
        );
        await maya.say_and_wait([
          callname,
          ' тоже смотри не опоздай и не пропусти посадку!',
        ]);
        era.printButton('「Я очень жду」', 1);
        await era.input();
        await maya.say_and_wait(['Спасибо, ', callname, '!']);
        await maya.say_and_wait(
          'Maya станет ещё быстрее, так что смотри на неё не отрываясь♪',
        );
        await maya.say_and_wait('Приём?');
        era.printButton('「Принял(а)!」', 1);
        await era.input();
        await maya.say_and_wait('Хе-хе~♪ Это наше с тобой обещание!');
        await maya.say_and_wait(
          'OKSmile☆LuckyPeace! Маяно Топ Ган выходит————♪',
        );
        await era.printAndWait([
          'Надев скаковой костюм, ',
          maya.get_colored_name(),
          ' будто сильнее захотела победы.',
        ]);
      } else {
        await maya.say_and_wait('Правда, правда?');
        await maya.say_and_wait([callname, ' всё лучше понимает Maya~♪']);
        await maya.say_and_wait(
          'Когда-нибудь поймёт даже лучше папы с мамой… йя~☆',
        );
        era.printButton(
          '「Раз уж так, ты уже показывала костюм папе с мамой?」',
          1,
        );
        await era.input();
        await maya.say_and_wait('Э? Нет, ещё нет!');
        await maya.say_and_wait([
          'Maya давно решила: первым увидит ',
          callname,
          ' ♪',
        ]);
        await maya.say_and_wait('…Точно! Я скину фотку папе с мамой!');
        await maya.say_and_wait([callname, '  тоже давай в кадр! Хорошо?']);
        era.printButton('「Можно?」', 1);
        await era.input();
        await maya.say_and_wait('Ну конечно, вообще никаких проблем!');
        await maya.say_and_wait([
          'Папа с мамой тоже говорят, очень хотят взглянуть на ',
          callname,
          ' ～!',
        ]);
        await maya.say_and_wait('Давай, ещё ближе~! Приготовиться…взлёт☆');
        await maya.say_and_wait('Хе-хе, снялось супер♪ Отправляю!');
        await maya.say_and_wait('А! Папа с мамой прислали сообщение! М-м…');
        await maya.say_and_wait(
          'А-ха-ха♪ Они говорят, ты с виду очень хороший человек!',
        );
        await maya.say_and_wait([
          'И ещё сказали『',
          maya.get_colored_name(),
          '  — просим присмотреть』! Теперь ты официально признанн(ый/ая) родителями ',
          callname,
          ' ☆',
        ]);
        await era.printAndWait([
          'Хоть и немного неловко, но ',
          you.get_colored_name(),
          '  снова твёрдо решает и дальше быть ',
          maya.sex,
          ' её опорой.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
