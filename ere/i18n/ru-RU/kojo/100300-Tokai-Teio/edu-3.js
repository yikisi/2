/**
 * @file 东海帝王 - 育成
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ...require('#/i18n/ru-RU/kojo/100300-Tokai-Teio/edu-3-hurt'),
  ...require('#/i18n/ru-RU/kojo/100300-Tokai-Teio/edu-3-give-up'),
  async train_fail(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('А! Нн…');
      await era.printAndWait(
        `Звонкий, чуть капризный голос от боли ломается в визг, бьёт ${you.name} по ушам и в грудь, ${you.name} в два прыжка оказывается рядом: ${teio.sex} дрожит — осторожно успокаиваешь её, осматриваешь тело и легонько мнёшь ушиб.`,
      );
    } else {
      await teio.say_and_wait('Ии—');
      await era.printAndWait([
        'За длинным вскриком ',
        you.get_colored_name(),
        ' подопечная неловко падает. ',
        you.get_colored_name(),
        ' сразу бежит смотреть, что случилось.',
      ]);
    }
  },
  async train_fail_intel(teio, you) {
    await teio.say_and_wait(
      'Похоже, легенде Тэйо… придётся здесь чуть передохнуть…',
    );
    await era.printAndWait([
      teio.get_colored_name(),
      ' лежит мордой в стол — учиться уже не тянет.',
    ]);
    await you.say_and_wait(
      'Некоторые вещи не обманешь: не умеет — значит не умеет.',
      true,
    );
  },
  race_end_win: (() => {
    const title = 'Победа в скачке';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} возбуждённо сходишь с трибуны встречать Тэйо — она вернулась с победой.`,
      );
      await era.printAndWait(
        `${teio.sex} тоже сияет, красная от радости, несётся к ${you.name} и бьёт с ${
          you.name
        } ладонь. Вы вместе как следует смакуете победу.`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'В пятёрке';
    /** @param {CharaTalk} teio 东海帝王 */
    const f = async (teio) => {
      await era.printAndWait('Жаль, но и так неплохо.');
      await era.printAndWait(
        `${teio.name} смотришь, как чуть обиженная Тэйо шаркает с поля, — лицо хотело быть строгим, а само ползёт в улыбку.`,
      );
      await era.printAndWait(
        `Старалась. Надо как следует утешить — ${teio.sex} заслужила.`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = 'Поражение в скачке';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait(
          `${you.name} смотришь, как своя подопечная плетётся растрёпанная и опустошённая, — сердце кровью.`,
        );
        await era.printAndWait('Чёрт, ещё шаг… если б не нога…');
        await era.printAndWait(`Даже комментатор на трибуне жалеет вас.`);
        await era.printAndWait(
          `${you.name} молча встречаешь Тэйо и держишь — ${teio.sex}.`,
        );
        await era.printAndWait(
          `${teio.sex} чуть вздрагивает и снова ставит ноги. Боль? Или не хочет показаться слабой перед ${you.name} ?`,
        );
        await era.printAndWait(
          `${you.name} не знаешь и не хочешь разбирать. Так, подпирая друг друга, вы уходите с поля…`,
        );
      } else {
        await era.printAndWait(`${you.name} хмуришься: как так?`);
        await era.printAndWait(
          `Красное место на табло режет глаза и ни на секунду не отпускает ${you.name} : проигрыш настоящий.`,
        );
        await era.printAndWait(
          `${you.name} смотришь: чумазая, уши и хвост висят, плетётся к ${
            you.name
          } — подопечная ${teio.uma_sex_title}, внутри полная каша.`,
        );
        await teio.say_and_wait(`……`);
        era.printButton(
          '「Ничего. Выпрямись. Ещё поднажмём — успех нас ждёт.」',
          1,
        );
        era.printButton(
          '「В этот раз… надо честно разобрать. Тэйо, так больше нельзя.」',
          2,
        );
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'Тэйо, в путь!';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `Говорят, Три богини кладут конскую душу в младенца, и ${teio.couple_title} получают тело, которому нет равных на дорожке.`,
      );
      await era.printAndWait(
        `А способности, что ${teio.couple_title} несут на скачку, обычно делят на такие бега:`,
      );
      era.println();
      await era.printAndWait(
        'Сначала «лидер». После старта рвёт дистанцию скоростью и взрывом. Минус: на длинной легко сдувается, а из-за шага и темпа травмы обычно тяжелее, чем у других стилей.',
      );
      await era.printAndWait(
        `Говорят, одна рыже-оранжевая, что бежит как обтекаемый снаряд, ${teio.uma_sex_title} как раз в этом сильна.`,
      );
      era.println();
      await era.printAndWait(
        `Вторая — «преследователь». После старта не рвёт сразу, а сидит на хвосте у лидера за счёт выносливости и скорости и в момент сдувания обходит. Минус: момент обхода ловить трудно, выносливость и взрыв нужны высокие; из-за мгновенного ускорения чаще страдают стопа и голень, а поза разгона требует гибкости от ${teio.uma_sex_title} самой.`,
      );
      era.println();
      await era.printAndWait(
        `Ещё есть «саси». После старта сидит в середине пелотона, волей держится за лидером и преследователем и в свой миг взрывом и скоростью убивает всех врасплох. Минус: надо уметь терпеть, момент читается опытом, взрыв нужен огромный. Говорят, серая из глуши ${teio.uma_sex_title} как раз этим славится.`,
      );
      era.println();
      await era.printAndWait(
        `Последняя — «финишёр». После старта прячется в хвосте, самоконтролем и выносливостью копит удар и в свой миг взрывом обходит тех, кто впереди. Минус: такой обход часто не проходит, и у ${teio.uma_sex_title} самой самоконтроль должен быть железный. В кругах ходят слухи о маленькой, что бежит как молния, — ${teio.uma_sex_title} из лучших.`,
      );
      era.println();
      await era.printAndWait(
        `${you.name} смотришь, как ${
          teio.name
        } впервые бежит по-настоящему, сверяешь с тренировками: ${
          teio.sex
        } бежит так, и ты набрасываешь план. Под кожей икры плотные и сильные, в разгонах гибкость хорошая, момент усилия чует будто носом — гениальный преследователь ${teio.uma_sex_title}.`,
      );
      await teio.say_and_wait('Тренер? Ну как!');
      await era.printAndWait(
        `${teio.sex} семенит ногами и к ${you.name} подходит. ${you.name} кивает — ${teio.sex} слушает, ты выкладываешь, что только что увидел(а), и как будете тренироваться.`,
      );
      era.println();
      await teio.say_and_wait('Нн… давай как скажешь!');
      era.println();
      await era.printAndWait(
        `${you.name} смотришь вниз: ${teio.sex} стоит — ноги сами бросаются в глаза, невольно приседаешь, ладони быстро накрывают их.`,
      );
      era.println();
      await teio.say_and_wait('Э— э!');
      era.println();
      await era.printAndWait(
        `Пальцы гладят самые важные ноги — ноги ${teio.uma_sex_title}, и всё приходит через ладонь — техника тренера. Так и есть, факт. ${
          you.name
        } подопечная зовёт этот бег 「степ Тэйо」: ${
          teio.sex
        } выжимает из своего устройства ног максимум, но шанс и риск рядом: ${
          teio.sex
        } легко ловит травму в ногах, особенно если так и дальше бежать…`,
      );
      era.println();
      await teio.say_and_wait('Тренер? Что-то не так?');
      await era.printAndWait(
        `${
          you.name
        } как раз думаешь, и этот сладкий голос дёргает назад. Чуть красная, голову склонила к ${
          you.name
        } — ${teio.uma_sex_title}, ${you.name} вдруг не знает, с чего начать.`,
      );
      era.printButton('「…Ничего. Тело у тебя крутое.」', 1);
      await era.input();
      await teio.say_and_wait(
        'Нн? Мм… ну и ладно. Тогда, тренер, мы заключаем договор: беги со мной до самого конца!',
      );
      era.println();
      await era.printAndWait(
        `Ветер — и ${teio.sex} щурится, хихикает и протягивает руку. ${you.name} тоже протягивает руку — ${teio.sex} сцепляет мизинец, крючок на договор.`,
      );
      await era.printAndWait(
        `А насчёт ног… ${
          you.name
        } думает: может, на карьеру и не ляжет. У ${teio.uma_sex_title} такое часто. Если холить и строить тренировку умно, хотя бы ${
          teio.sex
        } пронесёт без поломок, пока бегает.`,
      );
      await era.printAndWait(
        `Если сейчас силой ломать привычку… ${teio.sex} может не послушаться, выйдет наоборот, и вдруг такой талант не даст результат… обоим хуже.`,
      );
      await era.printAndWait(`В конце ${you.name} всё же молчит.`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Новогодние цели';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        'Тренер, тренер～ сегодня у нашей пары первый Новый год!',
      );
      era.println();

      await era.printAndWait(
        `${you.name} смотришь, как Тэйо в домашнем скачет по комнате, — глаз дёргается.`,
      );
      await era.printAndWait(
        'Энергии выше крыши… это я себе бурю на шею посадил(а)?',
      );
      era.println();

      await teio.say_and_wait('Эй-эй! Тренер чего вялый, давай играть!');
      era.println();

      era.printButton('「Давай есть, сначала поедим」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} ставишь на стол кастрюлю рагу — и ${teio.sex} только слышит «есть» — и уже сидит ровно, заодно раскладывает ${you.name} приборы.`,
      );
      await era.printAndWait(
        `Вы вместе весело едите новогодний ужин. В этой теплоте ${
          you.name
        } невольно чует: ${teio.sex} рядом — как маленький дом.`,
      );
      era.println();

      await teio.say_and_wait(
        'Тренер, моё новогоднее желание то же, что я говорила! Тройная корона без поражений — я стану легендарной Тэйо!',
      );
      era.println();

      await era.printAndWait(
        `${teio.teen_sex_title} ещё чуть по-детски говорит, но слышно: ${
          teio.sex
        } говорит всерьёз.`,
      );
      era.println();

      era.print(`${you.name}——`);
      era.printButton('「Верно, держи этот запал!」(Воля+20)', 1);
      era.printButton('「Ага, вместе попрём к победе!」(Выносливость+20)', 2);
      era.printButton(
        '「Нн… под такую цель, похоже, надо чуть перестроить」(очки навыков+20)',
        3,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  waka_sta_win: (() => {
    const title = 'На тройную корону!';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('Красиво.');
      await era.printAndWait(`${you.name} внутри себе аплодируешь.`);
      await era.printAndWait(
        `Одна в отрыве, взрыв в разгоне, тело в идеальной позе — вот она, гениальная ${teio.uma_sex_title}.`,
      );
      await era.printAndWait(
        'Только дебютировала — и уже так. Потенциал огромный, впереди многое.',
      );
      await era.printAndWait(
        `${you.name} сходишь с трибуны, ждёшь подопечную у выхода. Как следует похвалить: ${teio.sex} заслужила. А может, ещё и наградить — ${teio.sex}?`,
      );
      era.println();

      await teio.say_and_wait('Тренер.');
      era.println();

      era.printButton('「Хей, здорово вышло.」', 1);
      await era.input();

      await era.printAndWait(
        ` ${you.name} хлопаешь по плечу: ${
          teio.sex
        } стоит — рука остаётся, мнёшь ровно так, как надо: пусть ${teio.teen_sex_title} отдохнёт от усталости в теле.`,
      );
      await era.printAndWait(
        `${teio.sex} — румянец ещё не сошёл, вся в огне смотрит на ${you.name}.`,
      );
      era.println();

      await teio.say_and_wait('Я… решила!');
      era.println();

      era.printButton('「Что?」', 1);
      await era.input();

      await teio.say_and_wait(
        'Первая цель — дальше без поражений и взять тройную корону!',
      );
      await era.printAndWait(
        `${teio.teen_sex_title} так пылко говорит, что у ${
          you.name
        } ползёт улыбка: то ли телячий задор, то ли ${
          teio.sex
        } ещё не чует, что такое спорт? Впрочем, что плохого в том, что молодая хочет большего?`,
      );
      era.println();

      await you.say_and_wait(
        `Цель жёсткая… знаешь, сколько известных ${teio.uma_sex_title} хотели того же, и сейчас полно гениев, ${
          teio.couple_title
        } все этого хотят, а доходят единицы.`,
      );
      await you.say_and_wait(
        'Но раз я твой тренер — буду вести тебя так, чтобы ты добралась.',
      );

      await era.printAndWait(
        `${teio.teen_sex_title} моргает — боевой дух ни на грамм не сел.`,
      );
      await teio.say_and_wait('Я сделаю так, чтобы этот сон стал явью!');
      era.printButton(`Тогда давай вместе.`, 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  sa_47_5: (() => {
    const title = 'Так что там с одеждой!';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        'Опять ясный день без облака — погода в Трейсене и правда хороша.',
      );
      await era.printAndWait(
        `${you.name} идёшь по внутреннему двору и ловишь раннюю весну.`,
      );
      await era.printAndWait(
        `Только сегодня здесь ${you.name} гуляет не один.`,
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait('Что-то неловко.');
      await era.printAndWait(
        `${
          you.name
        } краем глаза ловишь маленькую ${teio.uma_sex_title} рядом: белая кожа на виду, под домашним розовая бретелька белья… нет, слишком бьёт. Смотреть дальше — уже не по-тренерски.`,
      );
      await era.printAndWait(
        `Плюс ${teio.sex} в этом детском, как цветной пляжный комплект, — и ${you.name} ещё вина добавляется.`,
      );
      await era.printAndWait(
        `Такая милая ${teio.uma_sex_title} — и это та, с кем ${you.name} подписал(а) договор подопечной…`,
      );
      era.println();

      await teio.say_and_wait('Тренер?');
      era.println();

      era.printButton('「Что?」', 1);
      await era.input();
      await era.printAndWait(
        `Звонкий голос ${teio.teen_sex_title} — и ${
          you.name
        } мигом чистит голову, ставит лицо как ни в чём не бывало.`,
      );
      await era.printAndWait('И смотришь ровно, прямо в дорогу впереди.');
      era.println();

      await teio.say_and_wait('Ты… что думаешь про мою домашнюю?');
      era.println();

      era.print(`${you.name} сразу отвечаешь—`);
      era.printButton('「Мм… довольно по-детски」(Энергия+150)', 1);
      era.printButton('「Мило…」(Скорость+20)', 2);
      era.printButton('「Очень круто, Тэйо!」(Сила+20)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await teio.say_and_wait('Нн～ я уже не ребёнок!');
          era.println();

          await era.printAndWait(
            `${teio.sex} надувает губы, чуть дуется — и от этого ещё милее.`,
          );
          await era.printAndWait(
            ` ${you.name} и ${teio.sex} молча идёте ещё кусок.`,
          );
          break;
        case 2:
          await teio.say_and_wait('Э!');
          era.println();

          await era.printAndWait(
            ` ${you.name} подопечная пищит, лицо будто краснеет, ${you.name} тоже уже неловко смотреть; ${teio.sex} молчит, и вы так идёте дальше.`,
          );
          break;
        case 3:
          await teio.say_and_wait(
            `Ещё бы! ${you.name} всё-таки понимает, какая великая Тэйо крутая!`,
          );
          await era.printAndWait(
            `${teio.sex} явно рада. ${you.name} тоже невольно улыбается — ${teio.sex} рядом, идёте ещё немного.`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_12: (() => {
    const title = 'Пресс-конференция';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `Вас обсели свет и микрофоны; перед камерами на вас смотрят с любопытством и голодом. ${
          you.name
        } смотрит на малышку ${teio.uma_sex_title}, ${
          teio.sex
        } явно не в своей тарелке — непобедимая великая Тэйо тоже умеет робеть.`,
      );
      await era.printAndWait(
        `Чуть-чуть, ${you.name} легко касается её руки — унять бы тревогу. Но вот чего не ждёт: ${teio.sex} перехватывает в ответ. Держит ${teio.sex} крепко, и ${teio.sex} не отпускает ${you.name}; влажная маленькая ладонь так и чувствуется, ${you.name} секунду тупит, хочет вынуть — и решает иначе. ${you.name} чуть сильнее сжимает её руку, унимая дрожь; так и держит, пока ${teio.sex} не выдохнет и пока не стихнет ${teio.sex}.`,
      );
      era.println();
      await era.printAndWait(
        `Перед камерами и вопросами ${you.name} вывозит выше себя: ответы ровные и с искрой. С подачи ${you.name} Тэйо тоже потихоньку отпускает, ${teio.sex} уже без зажима, весело рассказывает про себя — особенно про мечту.`,
      );
      await era.printAndWait(
        `${you.name} и при всех обещаешь помочь: пусть ${teio.sex} сделает мечту явью.`,
      );
      await era.printAndWait('Пресс-конференция закрывается под аплодисменты.');
    };
    f.title = title;
    return f;
  })(),
  sats_sho_5: (() => {
    const title = 'The First';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('Вот это номер.');
      await era.printAndWait(`${you.name} сам хлопаешь и орёшь браво.`);
      await era.printAndWait(
        `Скачки такого уровня — ${teio.uma_sex_title}${teio.teen_sex_title} на поле, пот и молодость в беге — берёт за живое. А ${
          you.name
        } подопечная — лучшее, что здесь есть.`,
      );
      await era.printAndWait('Первый шаг, с места в карьер.');
      await era.printAndWait(
        `Пора купить медовый напиток — пусть ${teio.sex} выпьет. Так ${
          you.name
        } думает, бежит к тележке и обратно вниз — смотреть выступление своей ${teio.uma_sex_title}.`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_5: (() => {
    const title = 'The Second';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `Для ${you.name} это самые крупные скачки, где подопечная уже бежала.`,
      );
      await era.printAndWait(
        `Но ${you.name} в этот раз смотрит не на результат, что показала ${teio.sex}, а на то, как ступает ${teio.sex} — на ноги.`,
      );
      await era.printAndWait('Точнее — лодыжка в сапоге и выше, до колена.');
      await era.printAndWait('Есть проблема.');
      await era.printAndWait(
        'С самого старта видно, и в спурте, и в ускорении: движение чуть уезжает.',
      );
      await era.printAndWait(
        'Любая сила стоит на кости: что-то с хрящом колена или с берцовой.',
      );
      era.println();

      await era.printAndWait(
        `Скачки кончились, ${you.name} встречает подопечную, коротко поздравляет, а потом заводит об этом разговор — пусть ${teio.sex} знает. И мягко намекаешь: виной, похоже, тот самый бег, на который ${teio.sex} всегда опиралась, её коронный.`,
      );
      await era.printAndWait(`Но ${teio.sex} отвечает сразу и жёстко.`);
      era.println();

      await teio.say_and_wait('Ничего страшного.');
      era.printButton('「Ты что несёшь!」', 1);
      await era.input();

      await teio.say_and_wait(
        'Да всё нормально! Просто в последнее время вымоталась… отдохну — и пройдёт.',
      );
      era.println();

      era.printButton('「Но…」', 1);
      await era.input();

      await teio.say_and_wait(
        'Наша мечта… ещё не явь! Я хочу бежать дальше, по-своему, ты же обещал помочь.',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}, поднимает глаза: чистые, и в них заноза, смотрит на ${
          you.name
        }, ${you.name} открывает рот — и тишина.`,
      );
      await era.printAndWait(
        `Пусть ${teio.sex} делает по-своему… ничего же страшного, сдаётся голос в голове, да и ${you.name} тоже этого хочет: чтобы ${teio.sex} бежала дальше и брала места, так?`,
      );
      await era.printAndWait(`${you.name} выдыхаешь — и на этом всё.`);
    };
    f.title = title;
    return f;
  })(),
  or_47_25: (() => {
    const title = 'Зверёк по расписанию';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('Уа.');
      era.println();
      await era.printAndWait(
        `${you.name} медленно, ровно гладишь ту, что лежит на ${
          you.name
        } бедре, вся сжалась в комок, подопечная ${teio.uma_sex_title}.`,
      );
      await era.printAndWait(
        `С тех пор как ${you.name} один раз сделал ей массаж, распробовала ${teio.sex} это дело — и вошла во вкус: ${teio.sex} не только просит ${you.name} расчесать шерсть (ещё туда-сюда), но и тайком прёт в ${you.name} кабинет, работает ${you.name} или нет — обязательно трётся об ${you.name} и требует, чтобы ${you.name} снял усталость с тела — устала ведь ${teio.sex}.`,
      );
      await era.printAndWait(
        `${you.name} рассеянно чешешь ей подбородок — ${teio.sex} довольно урчит, ${teio.sex} щурится.`,
      );
      await you.say_and_wait('Ты что, кошка', true);
      await era.printAndWait(
        `${you.name} невольно бурчишь про себя: на ногах ${teio.teen_sex_title} и правда сделала из ${
          you.name
        } себе гнездо.`,
      );
      era.println();

      era.print(
        `${you.name} прикидываешь, как теперь быть с ней — чего хочет ${teio.sex} —`,
      );
      era.printButton(
        'Медленно, от корня, гладишь вниз до самого кончика хвоста(очки навыков+30, энергия+50～100, симпатия+5)',
        1,
      );
      era.printButton(
        `Устал… сами не заметили, как ${you.name} и ${teio.sex} заснули.(выносливость&воля+20)`,
        2,
      );
      if (era.get('love:3') >= 50) {
        era.printButton('Злая шутка (скорость&сила&интеллект+20, любовь+1)', 3);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name} складываешь пальцы в ладонь и ровно, от головы до хвоста, гладишь шерсть: в руке мягко, и у ${you.name} тоже добреет.`,
          );
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' заводится на злое: сначала чешешь ей за ушами и у самого хвоста, с внутренней стороны (голая кожа, откуда хвост); дрожит ',
            teio.sex,
            ' всем телом — маленькая ',
            teio.uma_sex_title,
            ' не выдерживает, и ',
            you.get_colored_name(),
            ' меняет приём: массажем разминает её сверху донизу, и обмякает ',
            teio.sex,
            ' — обмякает всё тело…',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = 'Not the end';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('Короткий финал уже близко.');
      await era.printAndWait(
        `${
          you.name
        } стоишь на трибуне, перебираешь этот год: ${teio.teen_sex_title} дошла сюда не без ${
          you.name
        }, а ${you.name} тоже влечёт стойкость и упрямство — ${teio.sex}, и ты идёшь помочь — ${
          teio.sex
        }.`,
      );
      await era.printAndWait('Успех уже перед носом.');
      await era.printAndWait(
        `Стоит взять эти скачки — и ${teio.name} ещё на шаг к своей конечной цели. По тому, как ${teio.sex} бежит сейчас — хоть ${you.name} как тренер не должен открывать шампанское заранее — почти в кармане.`,
      );
      await era.printAndWait(
        `В голове даже всплывает, как ${you.name} и ${teio.sex} становятся легендой, имена в зале славы…`,
      );
      await era.printAndWait('Стоп.');
      era.println();
      await era.printAndWait(`Комментатор「 ${teio.name} — что с ней —」`);
      era.println();
      await era.printAndWait('Не то!');
      await era.printAndWait(
        `${you.name} вцепляешься в перила и рвёшься вперёд, на поле ловишь свою ${
          you.name
        } — ${teio.uma_sex_title}. Есть: в голове пелотона. И что это ${teio.sex} делает?!`,
      );
      await era.printAndWait(
        `${you.name} видишь: Тэйо совсем кривым телом валится наружу —`,
      );
      era.println();
      await era.printAndWait('Комментатор「— потеря темпа —」');
      era.println();
      await era.printAndWait(
        `До финиша уже рукой, но ${
          you.name
        } уже плевать на место: срывается вниз к подопечной, охрана держит потерявшего голову ${
          you.name
        }, ${you.name} смотрит — ${
          teio.sex
        } даже через дистанцию читается: боль и злость на лице ${teio.teen_sex_title}…`,
      );
      era.println();
      era.printButton('「Тэйо!」', 1);
      await era.input();
      await era.printAndWait(
        `После скачек ${you.name} ни секунды не теряет, подхватывает её на руки, и вот ${teio.sex} уже обратно в Трейсене, в медпункте.`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_famous_in_famous: (() => {
    const title = 'Знаменитость среди знаменитостей';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await you.say_and_wait('Готова?');
      era.println();

      await teio.say_and_wait('Нн.');
      era.println();

      await era.printAndWait(
        'Уши в шапку, хвост в штаны, очки и маска — замаскировались.',
      );
      await era.printAndWait(
        `${you.name} тоже напяливаешь серое, воротник стоймя, бейсболка, ок.`,
      );
      await era.printAndWait(
        `Как два кривых агента прячете себя и выходите в город.`,
      );
      await era.printAndWait(
        `— После Triple Crown ${teio.name} всё известнее, и ${
          you.name
        } известность тоже всплыла. Без маскировки в людных местах вас сейчас же облепят фанаты, ничего не сделать.`,
      );
      await era.printAndWait(
        'Так что такая подготовка обязательна. Но к любому случаю не подстелешься, например —',
      );
      era.println();

      await era.printAndWait(
        `Колёса по асфальту орёт визг прямо в ${you.name} уши.`,
      );
      await era.printAndWait(`${you.name} оборачиваешься — время будто сечет.`);
      await era.printAndWait(
        'Ребёнок упал на дорогу; из-за роста водитель его не видел, и когда тот рванул тормоз — уже поздно.',
      );
      await era.printAndWait(`Но у ${you.name} сбоку вдруг взрывается ветер.`);
      await era.printAndWait(
        `Ту, что ${
          you.name
        } держал с внутренней стороны, ${teio.actual_name_with_title} в миг даёт силу и срывается.`,
      );
      await era.printAndWait(
        'Водитель откидывается, жмёт тормоз до конца и в отчаянии зажмуривается.',
      );
      await era.printAndWait('И случается чудо.');
      await era.printAndWait(
        'Вжух — как фокус: ребёнка на дороге нет, водитель проскакивает живым. Открывает глаза и ещё не понял, что было.',
      );
      era.println();

      await teio.say_and_wait(
        'Дальше держись родителей, не бегай куда попало, ладно?',
      );
      era.println();

      await era.printAndWait(
        `Ребёнок「Хорошо… спасибо, ${teio.uma_sex_title}${
          teio.elder_sibling_sex_title
        }?」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}${teio.elder_sibling_sex_title}?!`,
      );
      era.println();

      await era.printAndWait(
        `${teio.name} только тут понимает: шапку сдуло ветром, хвост выбился от рывка, ${you.name} спешно ${teio.sex} маскируешь, поздно.`,
      );
      era.println();

      await era.printAndWait(`Прохожий A「Это ${teio.name}!」`);
      era.println();

      await era.printAndWait('Прохожий B「Ва, легендарная великая Тэйо!」');
      era.println();

      await era.printAndWait(
        `Прохожий C「Видели Это ${teio.sex} только что шагом Тэйо спасла того ребёнка!」`,
      );
      era.println();

      await era.printAndWait(
        `Крики волна за волной, народ прёт к вам. Вы уже не знаете куда руки. Но ${
          you.name
        } смотрит на Тэйо: ${teio.teen_sex_title} краснеет лицом, но явного отвращения нет — слава, видно, всегда радует людей, или ${teio.uma_sex_title} тоже.`,
      );
      await era.printAndWait(
        `Потом ${you.name} замечает: ухом повела ${teio.sex} — развернула его под углом, и ${you.name} тоже слышит голоса.`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}A「Нн, как стильно! Я тоже хочу стать такой ${teio.uma_sex_title}!」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}B「Слышала, тренер у неё сильный. Наверное, тот самый, с кем ${
          teio.sex
        } сейчас рядом и есть. Смотри, вон ${teio.sex}.」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}C「Правда? Мне бы такого личного тренера! Пусть это будет ${
          you.sex
        } — прямо сейчас найду, пусть ${you.sex} и подпишет со мной договор!」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}D「${you.sex} и собой хорош, и стать что надо, так хочется…」`,
      );
      era.println();

      await era.printAndWait(
        `Э… вот этого комплимента не ждал. Но ${you.name} и берёт.`,
      );
      await era.printAndWait(
        `Вот только ${you.name} уже не до второй половины фразы: ${you.name} видит, как подопечная смотрит на тебя с таким смаком.`,
      );
      era.println();

      await you.say_and_wait(
        `Плохо… ${teio.sex} когда она такому научилась`,
        true,
      );
      await era.printAndWait(
        `${you.name} внутри орёт «плохо», но ${teio.sex} уже в два шага у ${you.name}, хватает ${you.name} за руку и говорит`,
      );
      era.println();

      await teio.say_and_wait(
        `Простите, нам ещё надо, спасибо за тепло и поддержку, увидимся на скачках. Тре~нер~, с Тэйо- ${teio.adult_sex_title} пойдём?`,
      );
      era.println();

      era.print(`${you.name} и смешно и плакать, остаётся ответить —`);
      era.printButton(
        '「Служить непобедимой великой Тэйо — мой долг」(интеллект+30)',
        1,
      );
      era.printButton(
        `「Изо всех сил, моя ${teio.adult_sex_title} 」(три случайные характеристики+15)`,
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  ws_95_5: (() => {
    const title = 'Отказаться';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await you.say_and_wait('Тэйо, нам надо серьёзно это обсудить');
      era.println();

      await era.printAndWait(
        `${you.name} в руках бумаги от врача и то, что собрал сам: всё без исключения про ноги Токай Тэйо сейчас.`,
      );
      await era.printAndWait(
        `Если не залечь… боюсь, добежит ${teio.sex} следующие скачки — и ноги останутся болью на всю жизнь.`,
      );
      era.println();

      await you.say_and_wait(
        `Тэйо, строение твоих ног даже среди ${teio.uma_sex_title} особое, от него твой бег, но этот 『шаг Тэйо』 на деле жрёт твоё тело.`,
      );
      await you.say_and_wait(
        'Потеря темпа в прошлых скачках, травма позапрошлых — только предвестники. Самые важные для тебя ноги… могут сдохнуть совсем',
      );
      era.printButton(
        '「Врач и я сходимся… тебе временно уйти со скачек и полежать.」',
        1,
      );
      await era.input();
      await you.say_and_wait(
        'За это время вытянем тебя как только можно. Со школой уже переговорили, это тебе на всю жизнь в плюс.',
      );

      await era.printAndWait(
        `${you.name} смотришь: губы сжаты, голова вниз, внутри рвёт, но стискиваешь зубы — это чтобы ${teio.sex} была цела, ${you.name} твердит себе.`,
      );
      era.println();
      await teio.say_and_wait('Нет…');
      era.println();
      await era.printAndWait(
        `Тонкий, но твёрдый голос, ${you.name} выдыхает: так и думал.`,
      );
      era.println();
      await era.printAndWait(
        `В миг ${teio.teen_sex_title} уже поднимает голову, ${
          you.name
        } видит, как в уголках собирается влага, и ${
          teio.sex
        } и без того сапфировые глаза ещё чище.`,
      );
      era.println();
      await teio.say_and_wait(
        'Я не могу сдать Tenno Sho весной… это всё равно что самой плюнуть на мечту про три короны! Тогда все эти бои… ради чего?',
      );
      era.println();
      await teio.say_and_wait(
        'И ещё: такое тело с рождения — разве не доказательство, что я им возьму мечту бежать? Другого конца я не признаю… я не хочу прятаться от скачек!',
      );
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}Упрямый взгляд встречает твой; в её зрачках ты видишь своё отражение — таким видит тебя ${
          teio.sex
        }. Самый близкий ей человек — и тот теперь предал: так думает ${teio.sex}, и слово тут одно — 「предательство」. Так и стоит ${teio.sex}……${
          you.name
        } смотрит на своё отражение — противно.`,
      );
      era.println();
      await teio.say_and_wait('Это единственная просьба в жизни… прошу');
      era.println();
      await era.printAndWait(`${you.name} решаешь —`);
      era.printButton(`「Как тренер требую: следующие скачки сдаёшь.」`, 1);
      era.print(
        '【Если выбрать это, Токай Тэйо принудительно пропустит Tenno Sho (Spring)】',
        {
          offset: 1,
          width: 23,
        },
      );
      era.printButton(
        `「Ты моя подопечная-умамусумэ, я и дальше поведу твою мечту.」`,
        2,
      );
      era.print(
        `【Если выбрать это, травма ног Тэйо станет необратимой. Готов(а) ли ты к тому, что и ты, и ${teio.sex} вместе рухнете на дно и будете тащить друг друга вверх?】`,
        { offset: 1, width: 23, color: buff_colors[3] },
      );
      let ret = await era.input();
      if (ret === 2) {
        era.print(
          `【Внимание: если выбрать это, травма ног Тэйо станет необратимой. Готов(а) ли ты к тому, что и ты, и ${teio.sex} вместе рухнете на дно и будете тащить друг друга вверх?】`,
          { color: buff_colors[3] },
        );
        era.printButton('Ладно, не надо', 1);
        era.printButton('Готов!', 2);
        ret = await era.input();
      }
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}В глазах слёзы, но в итоге ${
            you.name
          } придавил, и ${teio.sex} молча уходит. Закат светит в спину, и длинную тень тянет за собой ${
            teio.sex
          }.`,
        );
      } else {
        await era.printAndWait(
          `${teio.teen_sex_title}Сквозь слёзы смеётся, держит ${
            you.name
          } руку, тепло печёт место касания. ${
            you.name
          } брови в замок: прав ты или нет — сам не знает.`,
        );
        await era.printAndWait(
          `Но тренер — это профессия ради мечты ${teio.uma_sex_title} … так?`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_95_25: (() => {
    const title = 'Весенняя Тэйо';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await you.say_and_wait('Как хорошо…');
      era.println();
      await era.printAndWait(
        `Тренировка только кончилась, ${
          you.name
        } с подопечной лениво идёте к общежитию. И тут ${teio.uma_sex_title}${teio.adult_sex_title} мотает головой: после гонки волосы рассыпались, несколько капель пота летят, и по телу будто пар.`,
      );
      await teio.say_and_wait('Нн? Тренер? Ты что сказал?');
      era.println();

      await era.printAndWait(
        `${you.name} вдруг ловишь себя: засмотрелся(лась) — а ведь это ${teio.sex}, и ты ещё выдал(а), что в голове; спешно крутишь.`,
      );
      era.println();

      era.printButton(
        '「Я про то, что последние результаты у тебя просто огонь.」',
        1,
      );
      await era.input();

      await teio.say_and_wait('Нн～ хм? Правда только это?');
      era.println();

      await era.printAndWait(
        `${you.name} отворачиваешься, не отвечаешь, и тихо поднимаешь воротник — спрятать налитое лицо.`,
      );
      era.println();

      await era.printAndWait(
        `Малышка ${teio.uma_sex_title} косится на ${
          you.name
        }, улыбается в губы — и вдруг тяжелеет лицом.`,
      );
      era.println();

      await teio.say_and_wait('Тренер… наш путь ещё не кончен.');
      era.println();

      await era.printAndWait(
        `Внезапный вопрос тянет ${you.name} обернуться: хотел(а) отшутиться, но так серьёзна ${teio.sex}, такое лицо — и слова пропадают.`,
      );
      await teio.say_and_wait(
        'Мои прошлые места, нынешняя слава, будущая цель — всё с тобой. Так что давай дальше, вместе.',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}Без единой фальши к ${you.name} выкладывает это.`,
      );
      era.println();

      era.printButton('「Конечно」', 1);
      await era.input();

      await era.printAndWait(`Вместе идёте к цели —`);
    };
    f.title = title;
    return f;
  })(),
  os_lets_go_together: (() => {
    const title = 'Пойдём вместе!';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('Мёд🎶～');
      era.println();

      await era.printAndWait(
        `В жёлтом платье малышка ${teio.uma_sex_title} навстречу солнцу скачет впереди, сбрасывает лишнюю искру, но, может, чтобы не бросать ${
          you.name
        }, ${teio.sex} так и не уходит из ${you.name} поля зрения.`,
      );
      await era.printAndWait(
        `Смотришь, какая ${teio.sex} живая и свободная, и ${you.name} сам(а) улыбается и попадает в шаг — в тот, каким идёт ${teio.sex}.`,
      );
      await era.printAndWait(
        'Скоро искусственный ручей: на туристов тропа не похожа —',
      );
      await era.printAndWait(
        `${you.name} только подумал, а сандалии подопечной уже на камнях в воде. И вот ${teio.sex} тянет руку к ${you.name}.`,
      );
      era.println();

      await teio.say_and_wait('Давай вместе, тренер!');
      await era.printAndWait(`${you.name} решаешь —`);
      era.printButton('Кивнуть(выносливость+15)', 1);
      era.printButton('「Нет, лучше по правилам」(воля+15)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} тоже протягиваешь руку, берёшь её ладонь — и ${teio.sex} с силой не по росту тащит ${you.name} — вдвоём по воде, приятно.`,
        );
        await era.printAndWait(
          '—Ещё бы охрана не поймала и не прочитала мораль.',
        );
      } else {
        await era.printAndWait(
          `Малышка ${teio.uma_sex_title} чуть дуется, но всё же пятится к ${
            you.name
          } и с ${you.name} уже по нормальной дороге, плечом к плечу.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_dance_or_kongfu: (() => {
    const title = 'Танец… боевое? Так можно качать шаг Тэйо?';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `Деревянный твёрдый пол навощён, в этой плоскости, где отражаются люди, ${teio.uma_sex_title} в доги качает подъём ноги и силу.`,
      );
      era.println();

      await you.say_and_wait('Стой, переведи дух, вроде хватит.');
      era.println();

      await era.printAndWait(
        `${you.name} откручиваешь крышку — физраствор ты смешал(а) в верной доле — и подаёшь ей. Бутылку принимает ${teio.sex}, и ${teio.sex} пьёт маленькими глотками, ровным темпом.`,
      );
      era.println();

      await you.say_and_wait('А… вышло даже сильнее, чем думала', true);
      era.println();

      await era.printAndWait(
        `${you.name} подопечная неизвестно что смотрела и вдруг ${you.name} говорит: хочу кунфу, вложить приёмы в бег, особенно шаг низа, и этим наточить свой шаг Тэйо.`,
      );
      era.println();

      await era.printAndWait(
        `${you.name} не переспоришь — в споре ${teio.sex} сильнее, остаётся: пусть ${teio.sex} попробует. И, кто б думал, ещё и прёт.`,
      );
      era.println();

      await teio.say_and_wait('Тренер, ну как?');
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' смотришь на хихикающую подопечную и так —',
      ]);
      era.printButton('Как чувствуется(сила&воля+20, очки навыков+15)', 1);
      era.printButton(
        'Сначала путь(скорость+30, очки навыков+15, энергия+200)',
        2,
      );
      era.printButton(
        `Холодный разбор(скорость+15, выносливость+20, интеллект+30, очки навыков+30)`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait('Я думаю, сначала ха— вот так, потом тоа—');
          break;
        case 2:
          await you.say_and_wait(
            'Танец и есть бой… то есть путь до самого края!',
          );
          break;
        case 3:
          await you.say_and_wait(
            'Этим можно ловить координацию тела, нн, попробовать смещать центр и выжать миг ускорения на бросок к ленте?',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_honey_power: (() => {
    const title = 'Сила мёда';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `Всё чудится: когда рядом ${teio.sex}, на выходе всегда что-то случается, ${you.name} думает так и смотрит, как рядом держит ${you.name} за руку подопечная.`,
      );
      await era.printAndWait(
        `Или даже тащит ${you.name} — так точнее. Иногда ${
          you.name
        } сам диву даётся, как при работающей голове поспевает за прыгающей ${teio.uma_sex_title}${teio.teen_sex_title}, может, ${
          you.name
        } за время вместе сам нахватался шага Тэйо.`,
      );
      await era.printAndWait('Вместе многое перетекает само… хоть вкус.');
      era.println();

      await era.printAndWait(
        `${you.name} подопечная тащит ${you.name} под скамейку и залпом пьёт особый медовый напиток, что четверть часа назад взяли у привычной тележки.`,
      );
      await era.printAndWait(
        `Густое уходит ей в горло — глотает ${teio.sex}, по шее скользит тонкая дуга. Солнцем облита ${teio.sex} сбоку, розово-белая кожа ещё плотнее, и каждая мелочь мышц на глотке лезет наружу…`,
      );
      await era.printAndWait(
        `Когда брали, ${you.name} ничего такого не думал, сейчас во рту сухо, самому бы чего глотнуть.`,
      );
      era.println();

      await teio.say_and_wait('Тренер?');
      era.println();

      await era.printAndWait(`${you.name} спешно откликаешься.`);
      era.println();

      await teio.say_and_wait(
        `Тренер? Кажется, ${you.name} тоже пить хочет, взять чего?`,
      );
      await era.printAndWait(
        `${teio.sex}Хихикает и поднимает полстакана медового к ${you.name} лицу, будто зовёт ${you.name}.`,
      );

      await era.printAndWait(`${you.name} —`);
      era.printButton('Купить ещё стакан(интеллект+20, привязанность+5)', 1);
      era.printButton(
        '「Я больше по пустому чаю без сахара…」(выносливость&воля+15)',
        2,
      );
      if (era.get('love:3') > 50) {
        era.printButton(
          `Берёшь стакан у неё из рук — тот, что держала ${teio.sex}, через трубочку допиваешь и отдаёшь обратно: пусть допивает ${teio.sex} (скорость&сила+15, энергия+150, влечение+1)`,
          3,
        );
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name} улыбаясь гладишь её по голове и отворачиваешься купить себе; ${
              teio.sex
            } остаётся ждать. Поднимаешь медовый к губам, а на пальцах ещё держится запах волос — волос ${teio.uma_sex_title}, и он мешается со сладким мёдом — и пьянит…`,
          );
          break;
        case 2:
          await era.printAndWait(
            `${you.name} неловко откашливаешься и мягко отшиваешь приглашение подопечной, а ${teio.sex} щурится — будто смеётся ещё веселее.`,
          );
          break;
        case 3:
          await teio.say_and_wait('///////');
          era.println();

          await era.printAndWait(
            `${you.name} невольно затеваешь проказу: ${teio.sex} держит стакан — ты забираешь, залпом отхлёбываешь по-крупному и как ни в чём не бывало суёшь обратно зависшей — ${teio.sex} — в руки.`,
          );
          era.println();

          await teio.say_and_wait('Нннмм—');
          era.println();

          await era.printAndWait('…Кажется, это уже перебор.');
          await era.printAndWait(
            `Потом десять минут извиняешься на совесть, и уже красная до корней ${teio.sex} наконец перестаёт это ннн, встаёт и приваливается к ${you.name} сбоку.`,
          );
          await era.printAndWait(
            `Прежде чем идти дальше, ${you.name} замечает: ${teio.sex} будто нарочно обходит ${you.name} взглядом и осторожно ещё тянет трубочкой несколько глотков…`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sr_wing_and_sky: (() => {
    const title = 'С крыльями за спиной — коснуться синего неба';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await you.say_and_wait('Крыша, а. Давненько.', true);
      await era.printAndWait(`${you.name} с коробкой еды выходишь за дверь.`);
      await era.printAndWait(
        `Дверь уже настежь. Перед тобой, ${you.name} — твоя, ${you.name}, любимая лошадь, ${teio.name}.`,
      );
      era.println();

      await teio.say_and_wait(
        `Всё-таки здесь лучше всего～ на высоте так свободно.`,
      );
      era.println();

      await you.say_and_wait('Раз тебе радостно — и ладно.');
      era.println();

      await era.printAndWait(
        `С этими словами, ${you.name} ставит коробку с едой и начинает раскладывать. ${you.name}, твоя подопечная снова невесть с чего загорелась и тащит ${you.name} на крышу устраивать какое-то чаепитие на двоих, ${you.name} остаётся прихватить сладости, заварить фруктовый чай и пойти следом — ${teio.sex} ведёт.`,
      );
      era.println();

      await teio.say_and_wait('Я вот что—');
      era.println();

      await era.printAndWait(
        `Лёгкий ветер, ${
          you.name
        } поднимает голову и видит, как ${teio.uma_sex_title} срывает шаг, чуть вскидывает руки, крутится — взгляд встречается с ${
          you.name
        } и говорит`,
      );
      era.println();

      await teio.say_and_wait(
        'Тренер, ты же знаешь: моя мечта — взобраться на самый верх. Теперь нашими руками призрачная мысль понемногу стала лестницей в явь и несёт нас выше. Дальше…',
      );
      era.println();

      era.print(`${you.name} отвечаешь—`);
      era.printButton(
        '「Я всегда буду твоей опорой」(скорость&выносливость&интеллект+20, силы+200, любовь+1)',
        1,
      );
      era.printButton(
        '「Пусть получится. Когда мечта сбудется, давай снова соберёмся здесь」(скорость+15, сила&воля+20, симпатия+5)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title} кланяется и дарит ${you.name} сияющую улыбку.`,
        );
      } else {
        await teio.say_and_wait('Опять уговор, запомни～');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_the_days_together: (() => {
    const title = 'Дни пути вместе с тобой';
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `В центре школы — фонтан, наверху сидят скульптуры трёх богинь. Каждый день несметные ${teio.uma_sex_title} или люди здесь в тишине молятся и загадывают желания.`,
      );
      await era.printAndWait(
        `${you.name} смотришь на лицо наверху — чем-то напоминает твою подопечную, пальцы нащупывают кошелёк в кармане: загадать желание?…`,
      );
      era.println();

      await teio.say_and_wait('Тренер!');
      era.println();

      await era.printAndWait(
        `${you.name} оборачиваешься и машешь подопечной, ${teio.sex} же скачет сюда и ни на кого не глядя хватает ${you.name} за руку.`,
      );
      await era.printAndWait(
        `${you.name} смотришь на неё — ${teio.sex} — и что тут скажешь, лицом правда похожа.`,
      );
      era.println();

      await teio.say_and_wait(
        'Хм-хм～ рядом со мной — и думаешь о другом ребёнке?',
      );
      era.println();

      await era.printAndWait(
        `— Да это не ребёнок! ${you.name} так и рвётся сказать, но видит лицо подопечной — и благоразумно замолкает.`,
      );
      era.println();

      await teio.say_and_wait(
        `Пф… тогда маленькое наказание для ${you.name} — ветреный учитель, ${you.name} только что хотел(а) загадать желание, да? Какое?`,
      );
      era.println();

      era.printButton(
        '「И дальше прошу любить и жаловать」(симпатия+10, все параметры+5)',
        1,
      );
      if (era.get('love:3') > 90) {
        era.printButton(
          '「Я хочу… нет, я навсегда останусь рядом」(любовь+1, настрой↑, два случайных параметра+10)',
          2,
        );
      }
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('Это вообще не желание… это ещё что.');
        era.println();

        await era.printAndWait(
          `Но ${you.name} и правда ещё не знает, чего желать.`,
        );
      } else {
        await teio.say_and_wait('…Прощаю. Только чтобы больше так не было.');
        era.println();

        await era.printAndWait(
          `Красная до ушей малышка ${teio.uma_sex_title} отпускает ${you.name} за руку.`,
        );
        await era.printAndWait(
          `Спустя какое-то время, когда ${teio.name} уходит, ${you.name} возвращается сюда, ухмыляется, ссыпает в воду все монеты из кошелька, складывает ладони и впервые по-настоящему загадывает желание.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_uma_shopping: (() => {
    const title = (teio) => `${teio.uma_sex_title}… шопинг до крови!`;
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      await era.printAndWait('С женщиной по магазинам — тяжело.');
      await era.printAndWait('С женщиной в торговый центр — измотает.');
      await era.printAndWait(
        `С ${teio.uma_sex_title} за покупками — выматывает в хлам.`,
      );
      await era.printAndWait(
        `К несчастью, ${you.name} сейчас как раз на третьей ступени.`,
      );
      await era.printAndWait(
        `Толкаешь тележку — по скорости с ней не тягаться, ${teio.sex} просто другой лиги. Сверяешь список с полками. Даже так — своего рода досуг.`,
      );
      await era.printAndWait(
        `Только вот, ${you.name} глядит: тележка в миг забита неизвестно откуда взявшимся барахлом, в ушах не смолкает свист рассекаемого воздуха, и невольно вздыхает.`,
      );
      era.println();
      await teio.say_and_wait(
        'Тренер, живее! Ещё куча покупок, я одна столько не утащу, помоги укладывать! Не придёшь — всё разберут!',
      );
      await era.printAndWait(
        ` ${you.name} задираешь голову, вопишь к небесам, сдаёшься судьбе и гонишь ноги к голосу—`,
      );
      era.printButton(
        'Отчаянно держаться ритма Тэйо(скорость&сила&воля+20, силы+200, симпатия+10)',
        1,
      );
      era.printButton(
        'По заранее намеченному маршруту прийти на точку раньше, ждать Тэйо, сложить товар и на новый круг(выносливость+20, интеллект+30, симпатия+5)',
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
};
