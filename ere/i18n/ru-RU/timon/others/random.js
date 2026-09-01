/**
 * @file 随机小事件
 * @author イーウィヤ
 * @author 雞雞
 * @author 幽白書
 * @author KUN
 * @author Mr.E.
 * @author 念来过倒要你
 * @author 牛蛙煲
 */
const {
  add,
  clear,
  drawLine,
  get,
  getLineCount,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  println,
  waitAnyKey,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = {
  god_coin: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} _ 无意义参数，但必须留着
     * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
     * @param {number|undefined} god 随机女神的ID（抽中随机女神的好感的情况），如果所有女神都已经受肉这里会是 undefined
     */
    const f = async (_, dice, god) => {
      await printAndWait('Подбросить монетку и загадать желание…');
      if (dice < 0.4 && god) {
        await printAndWait(
          'Это… галлюцинация? Голос, от которого почему-то теплее и доверчивее…',
        );
        const color = get_chara_color(god);
        switch (god) {
          case 340:
            await printAndWait('Страстный, красный голос…', {
              color,
            });
            break;
          case 341:
            await printAndWait('Принимающий, синий голос…', {
              color,
            });
            break;
          case 342:
            await printAndWait('Строгий, жёлтый голос…', {
              color,
            });
        }
      } else if (dice < 0.7) {
        await printAndWait('А… это, может, сработает…?');
        await printAndWait(
          'Хотя… вроде ничего не пришло в голову, но если вдуматься — будто что-то понял(а)…',
        );
      } else if (dice < 0.9) {
        await printAndWait('Как и ожидалось, ничего не произошло…');
      } else {
        await printAndWait('Поднял(а) — и их стало две!');
      }
    };
    f.title = 'Колодец желаний под статуями трёх богинь';
    return f;
  })(),
  all_round_meek: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} meek 快乐米可
     */
    const f = async (meek) => {
      await printAndWait(
        'Вдруг откуда-то прилетает страница с налётом веков!?',
      );
      await printAndWait('…поймал(а).');
      await printAndWait(
        'Почему на одной странице сразу спринт, миля, средняя и длинная — эй——',
      );
      await meek.say_and_wait('А, это… можно вернуть…');
      await printAndWait([
        'Пока вы в шоке, вас окликает ',
        meek.get_colored_name(),
        '.',
      ]);
      await printAndWait(
        '…будто заглянул(а) в чужое сокровище — с нечистой совестью отдаёте назад.',
      );
      println();
      await printAndWait(
        '…а, так это же страница из секретного трактата семьи Кирюин!?',
      );
      await printAndWait(
        'Вспоминаете гораздо позже и зло хлопаете себя по ладони.',
      );
    };
    f.title = 'Мик, которая умеет всего понемногу';
    return f;
  })(),
  experiment: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} ss 周日宁静（确切来说是茶座的「朋友」）
     * @param {CharaTalk} coffee 曼城茶座
     * @param {boolean} is_endu_med 是否是耐力药
     */
    const f = async (you, ss, coffee, is_endu_med) => {
      await you.say_and_wait('Есть кто…');
      println();
      await printAndWait('Не слышал(а), чтобы этот класс ещё кто-то занял…');
      await printAndWait([
        'Внезапный ливень, внезапный гром — будто прогнали, ',
        you.get_colored_name(),
        ' оказывается в этой маленькой сокровищнице.',
      ]);
      println();
      await you.say_and_wait('Наверное, взять одно?');
      println();
      await printAndWait('Флакон винного зелья на ремне');
      await printAndWait('и потрёпанная кукла чёрного кота');
      println();
      you.say('Что выбрать…', true);
      printButton('Снадобье (выносливость +? или силы +50)', 1);
      printButton('Кукла (интеллект+8, очки навыков+?)', 2);
      const ret = await input();
      if (ret === 1) {
        if (is_endu_med) {
          await printAndWait('Как же горько——');
        } else {
          await printAndWait('Как же остро——');
        }
      } else {
        await ss.say_as_unknown_and_wait('Ёси-ёси-ёси-ёси——');
        await coffee.say_as_unknown_and_wait('Мм…?');
        await printAndWait([
          'Будто за окном мелькнула тень ',
          coffee.uma_sex_title,
          '? Да быть не может～ это же не первый этаж.',
        ]);
      }
      return [ret];
    };
    f.title = 'Вылазка в заброшенный кабинет естествознания';
    return f;
  })(),
  shadow_minoru: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} taiki 大树快车
     * @param {CharaTalk} you 玩家
     * @param {boolean} know_minoru 是否知道骏川缰绳的真实身份
     */
    const f = async (minoru, taiki, you, know_minoru) => {
      if (know_minoru) {
        await printAndWait([
          you.get_colored_name(),
          ' издали видит, как два зелёных силуэта всё растут в поле зрения: оказывается, это ',
          taiki.get_colored_name(),
          ', которую невесть почему гонит ',
          minoru.get_colored_name(),
          '… Вот уж кто в форме, несмотря на годы!',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' издали видит, как два зелёных силуэта всё растут в поле зрения: оказывается, это ',
          taiki.get_colored_name(),
          ', которую невесть почему гонит ',
          minoru.get_colored_name(),
          '… Кстати, а как это человек догоняет ',
          taiki.uma_sex_title,
          ' по скорости?',
        ]);
      }
      printButton('«Помедленнее! Не покалечьтесь!»', 1);
      await input();
      await printAndWait([
        'Бегущая впереди ',
        taiki.get_colored_name(),
        ' понемногу сбавляет ход, а зелёная секретарша торопливо благодарит ',
        you.get_colored_name(),
        '. Ещё одно доброе дело!',
      ]);
    };
    f.title = 'Зелёный призрак';
    return f;
  })(),
  chairman_annoyance1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川弥生/北方风味
     */
    const f = async (taste) => {
      await printAndWait([
        'Председатель академии ',
        taste.get_colored_actual_name(),
        ' в тоске — точнее, из-за денег: бюджет Трейсена снова превышен——!!',
      ]);
      await printAndWait(
        'Сейчас эта рыжая коротышка дрожит под выговором зелёного секретаря… но как решать неразрешимую дыру в финансах?',
      );
      printButton(
        '«Резать расходы, первым снизить себе зарплату!» (долг+40, очки навыков воспитываемых умамусумэ+10)',
        1,
      );
      printButton('«Это не в моей зоне…»', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait('Кажется, случилось хорошее!');
        await printAndWait('…но этот месяц — на лапше!');
      } else {
        await printAndWait('Вроде ничего особенного.');
      }
      return [ret];
    };
    f.title = '%TEEN% на посту директора: забота первая';
    return f;
  })(),
  chairman_annoyance2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川弥生/北方风味
     */
    const f = async (taste) => {
      await printAndWait([
        'У председателя ',
        taste.get_colored_actual_name(),
        ' пропала кошка! Из-за пропажи кошки председатель в унынии, и эффективность работы Трейсена сильно падает!',
      ]);
      printButton(
        '«Мобилизовать всех, найти котёнка!» (энергия-50, расположение+40～60)',
        1,
      );
      printButton('«И что?»', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          'Найдя котёнка, ',
          taste.get_colored_name(),
          ' очень рада, и Трейсен снова в норме!',
        ]);
      } else {
        await printAndWait(
          'Вроде ничего особенного… а чем председатель обычно занимается?',
        );
      }
      return [ret];
    };
    f.title = '%TEEN% на посту директора: забота вторая';
    return f;
  })(),
  av_meteor: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} vega 爱慕织姬
     * @param {CharaTalk} you 玩家
     * @param {boolean} good_event 选择预兆是发生好事还是坏事
     * */
    const f = async (vega, you, good_event) => {
      await printAndWait([
        'Одной ночью ',
        you.get_colored_name(),
        ' у сухого дупла видит ',
        vega.get_colored_name(),
        ', смотрящую в небо.',
      ]);
      await printAndWait(
        'По линии взгляда боковым зрением ловите, как едва проскальзывает метеор.',
      );
      printButton(
        '«Это наверняка какое-то знамение!» (боевой настрой подопечной +1 или −1)',
        1,
      );
      printButton('«Обычное дело.» (стабильность+1)', 2);
      const ret = await input();
      if (ret === 1) {
        if (good_event) {
          await printAndWait('Кажется, случилось хорошее!');
        } else {
          await printAndWait('Плохо…');
        }
      } else {
        await printAndWait('Кажется, случилось что-то заурядное!');
      }
      return [ret];
    };
    f.title = 'Наблюдение кометы';
    return f;
  })(),
  custom: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     */
    const f = async (you) => {
      await printAndWait([
        'Как-то днём ',
        you.get_colored_name(),
        ' в мобильной игре «Сияющая отличница», за которую недавно взялся, снова ловит маловероятный провал тренировки… Привыкнуть — и всё.',
      ]);
      printButton(
        '«…Да ни к чему тут не привыкнешь!» (ма-монеты −50, силы подопечной +15%)',
        1,
        {
          disabled: get('flag:当前马币') < 50,
        },
      );
      printButton('«Привыкнуть — и всё!»', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' пускает в ход взрослую магию — донат!',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' удерживается от того, чтобы расшибить телефон об пол…',
        ]);
      }
      return [ret];
    };
    f.title = 'Привычка — вторая натура';
    return f;
  })(),
  mr_naked_apron: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        'Проснувшись утром, обнаруживает, что ',
        chara.get_colored_name(),
        ' в постели уже нет.',
      ]);
      await printAndWait([
        'Умывшись и одевшись, находит на кухне ',
        chara.sex,
        ': похоже, готовит завтрак, вот только…',
      ]);
      await printAndWait([
        'Совершенно голая, в одном фартуке, старательно готовит завтрак — и ',
        chara.get_colored_name(),
        ', покачивая милой попой у плиты, выглядит просто —',
      ]);
      printButton('(Проклятье, больше не могу!)', 1);
      printButton('(Посчитать простые числа и успокоиться…)', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          you.get_colored_name(),
          ' давит порыв и по-человечески здоровается с ',
          chara.get_colored_name(),
          '.',
        ]);
      }
      return ret;
    };
    f.title = 'Голый фартук наутро';
    return f;
  })(),
  mr_blowjob: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        'Проснувшись утром, ',
        you.get_colored_name(),
        ' чувствует внизу что-то странное.',
      ]);
      await printAndWait([
        'Открыв глаза, видит перед собой ',
        chara.get_colored_name(),
        ': голая, она ртом обхватила то, что у ',
        you.get_colored_name(),
        ', — ',
        you.sex_code === 0 ? 'клитор' : 'член',
        ', — и картина эта донельзя похабная.',
      ]);
      const skill = get(`abl:${chara.id}:口交技巧`);
      await printAndWait([
        chara.get_colored_name(),
        ' ',
        get(`talent:${chara.id}:饮精成瘾`) > 0 ||
        get(`talent:${chara.id}:淫口`) > 0
          ? 'жадно'
          : skill > 2
            ? 'умело'
            : 'неумело',
        ' и старательно ',
        you.sex_code === 0 ? 'вылизывает клитор' : 'заглатывает член',
        ',',
        you.get_colored_name(),
        ' и сам невольно прижимает ладонью голову ',
        chara.get_colored_name(),
        ', требуя ещё больше удовольствия.',
      ]);
      printButton('(Проклятье, больше не могу!)', 1);
      printButton('(Сейчас будет…!)', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          'От утреннего минета, что делает ',
          chara.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' быстро доходит до пика, и ',
          you.sex_code === 0 ? 'смазка' : 'сперма',
          ' целиком выплёскивается в вишнёвый ротик ',
          chara.get_colored_name(),
          '.',
        ]);
        await chara.say_and_wait(['Полон рот… вкуса ', callname, '…']);
        await printAndWait('Желание нашло выход, и новый день начался…');
      }
      return ret;
    };
    f.title = 'Утренний минет наутро';
    return f;
  })(),
  ts_sex: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      await printAndWait([
        'После дня тренировок ',
        chara.get_colored_name(),
        ' выглядит странно…',
      ]);
      await printAndWait(
        'Щёки горят; между бёдер стекает непонятная жидкость, смешиваясь с потом, — похабный запах.',
      );
      printButton('«Это тоже обязанность тренера…»', 1);
      printButton('«Сначала в медпункт!»', 2);
      const ret = await input();
      return [ret];
    };
    f.title = 'После тренировки: всплеск похоти';
    return f;
  })(),
  drug_notice: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {number} effect 效果 0-训练X手buff，1-健康茶，2-母乳药剂，3-性欲上升
     */
    const f = async (tachyon, you, effect) => {
      await printAndWait(
        [
          '【Объявление академии: препарат, который только что по ошибке рассыпала на поле ',
          tachyon.get_colored_name(),
          ', до сих пор не опознан. Тренеров просят без нужды не проводить тренировки на поле.】',
        ],
        { fontSize: '1.5rem' },
      );
      let ask_tachyon = false;
      while (true) {
        printButton('(Ничего же не случится, правда?) (случайный эффект)', 1);
        printButton('Раз предупредили — обойдёмся… (эффект отменяется)', 2);
        if (!ask_tachyon && get('cflag:32:招募状态') === 1) {
          printButton('«Тахион… ах ты!»', 3);
        }
        switch (await input()) {
          case 1:
            switch (effect) {
              case 0:
                await printAndWait('Тренировки у команды пошли легче…');
                break;
              case 1:
                await printAndWait(
                  'Похудение у команды на этой неделе пойдёт лучше…',
                );
                break;
              case 2:
                await printAndWait('У всей команды начало течь молоко…');
                break;
              case 3:
                await printAndWait('У команды поднялось влечение…');
            }
            return [1];
          case 2:
            return [2];
          case 3:
            await printAndWait([
              'Под нажимом ',
              you.get_colored_name(),
              ' — ',
              tachyon.get_colored_name(),
              ' признаётся, какой примерно эффект даёт то, что ',
              tachyon.sex,
              ' рассыпала, —',
            ]);
            switch (effect) {
              case 0:
                await tachyon.say_and_wait(
                  'Если просто — снадобье, от которого легче сосредоточиться на тренировке…',
                );
                break;
              case 1:
                await tachyon.say_and_wait(
                  'Если просто — снадобье, от которого быстро сгорают калории…',
                );
                break;
              case 2:
                await tachyon.say_and_wait(
                  'Если просто — снадобье, от которого у умамусумэ начинает течь молоко…',
                );
                break;
              case 3:
                await tachyon.say_and_wait(
                  'Если просто — снадобье, которое слегка приглушает рассудок…',
                );
            }
            ask_tachyon = true;
        }
      }
    };
    f.title = 'Объявление академии · рассыпанный препарат';
    return f;
  })(),
  gs_carrot: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} gs 黄金船
     */
    const f = async (gs) => {
      await printAndWait([
        'В школе вас останавливает странная седая ',
        gs.uma_sex_title,
        '.',
      ]);
      await gs.say_and_wait(
        'Хи! Эй, тренер! Не хочешь с малюткой Золотым Кораблём на берег рвать репу!',
      );
      await printAndWait([
        'А, это проблемный ребёнок ',
        gs.get_colored_name(),
        '… да и какая репа на берегу?',
      ]);
      printButton('«Хочешь рвать — рви!» (ма-монеты+20)', 1);
      printButton('«Что-то подозрительно…» (силы+100)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          'Из песка выкопали репу с радужным сиянием, будто драгоценный камень?!',
        );
      } else {
        await printAndWait(
          'Обычная репа… стоп, на берегу это вообще «обычно»!? В общем, к обеду.',
        );
      }
      return [ret];
    };
    f.title = 'Бес, что дёргает морковку';
    return f;
  })(),
  trainer_race: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} aoi 桐生院葵
     */
    const f = async (you, aoi) => {
      await printAndWait([
        'По дороге в Трейсен плакат с ветром шлёпается ',
        you.get_colored_name(),
        ' на лицо.',
      ]);
      await printAndWait([
        'Сняв плакат: соревнование только для тренеров — ',
        get_random_entry(['спринт', 'плавание', 'восхождение']),
        '; даже без уверенности в теле на месте будет официальная поддержка. Участвовать?',
      ]);
      printButton(
        '(Попробовать — не отвалится кусок?) (силы и энергия-25%, возможен приз)',
        1,
      );
      printButton('(Зашиваюсь, откуда время——!)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          'После странного иглоукалывания вы неожиданно побеждаете! И получаете приз от организаторов!',
        );
        await printAndWait(
          'Но так гладко, что по спине холодок… будто вы — подопытный…',
        );
      } else {
        await printAndWait([
          'Потом слышите: ',
          aoi.get_colored_name(),
          ' победила без поддержки.',
        ]);
        await printAndWait('Всё-таки этот человек силён как демон…');
      }
      return [ret];
    };
    f.title = 'Плакат, что треплется на ветру';
    return f;
  })(),
  bankruptcy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     */
    const f = async (you) => {
      await printAndWait([
        'Бездельничал и работал спустя рукава? Или удача попросту не на стороне ',
        you.get_colored_name(),
        '? Так или иначе, ',
        you.get_colored_name(),
        ' довёл цифры на банковском счету до нуля!',
      ]);
      await printAndWait([
        'Как ни печально, остаётся только просить того, за кого отвечаешь, — а это ',
        get('flag:角色性别') === 1 ? 'ума-парень' : 'умамусумэ',
        ', — раскошелиться… или всё-таки нет?',
      ]);
      printButton('«Как же так…»', 1);
      await input();
    };
    f.title = 'Банкротство';
    return f;
  })(),
  reject: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     */
    const f = async (you) => {
      await printAndWait('Почему-то, гуляя по кампусу, ловите шёпоты.');
      await printAndWait([
        you.get_colored_name(),
        ' копает — и оказывается, что незаметно вас считают бессердечным ',
        you.sex_code === 1 ? 'подонком' : 'подлянкой',
        '?!',
      ]);
      printButton('«Я не! Не делал(а)!»', 1);
      await input();
    };
    f.title = 'Клевета, всё это клевета!';
    return f;
  })(),
  work_over: (() => {
    /** @author 雞雞 */
    const f = async () => {
      await printAndWait(
        'Работа тренера хорошо оплачивается, но лёгкой её не назовёшь.',
      );
      await printAndWait([
        'Кроме тренировок скаковых, за которых ты отвечаешь, — а это ',
        get('flag:角色性别') === 1 ? 'ума-парень' : 'умамусумэ',
        ', — есть ещё дела академии, пресс-конференции, управление финансами, исследовательские отчёты и прочие тяжкие обязанности.',
      ]);
      println();
      await printAndWait(
        'И сегодня — снова день на энергетиках и ночёвка под рабочим столом.',
      );
      printButton('«Пол жёсткий…»', 1);
      await input();
    };
    f.title = 'Превратности судьбы · переработка';
    return f;
  })(),
  sick: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     */
    const f = async (you) => {
      await printAndWait([
        you.get_colored_name(),
        ' просыпается с тяжёлой головой, сонливостью — в общем, всё тело не своё.',
      ]);
      printButton('«Да пошло оно, прорвёмся!»', 1);
      printButton('«Позвонить, отпроситься, к врачу…»', 2);
      return [await input()];
    };
    f.title = 'Превратности судьбы · болезнь';
    return f;
  })(),
  fishing: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} sky 青云天空
     * @param {CharaTalk} you 玩家
     */
    const f = async (sky, you) => {
      sky.name = 'В соломенной шляпе седая ' + sky.uma_sex_title;
      await printAndWait([
        you.get_colored_name(),
        ' с удочкой у реки встречает ',
        sky.uma_sex_title,
        '.',
      ]);
      await printAndWait([
        sky.sex,
        ' не оборачивается, спиной к ',
        you.get_colored_name(),
        '.',
      ]);
      println();
      await sky.say_and_wait(
        'Мяу-ха-ха, надо же, какое совпадение. Встретились — значит, судьба; выбирай что-нибудь и забирай~',
      );
      println();
      await printAndWait([
        you.get_colored_name(),
        ' смотрит: рядом лежат потрёпанная удочка и блесна.',
      ]);
      printButton('Взять удочку (улов за раз удваивается)', 1);
      printButton('Взять блесну (20 белых факторов)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' берёт удочку — и будто по волшебству, ',
          you.get_colored_name(),
          ' — сегодня удача страшная: рыбы вдвое больше обычного!',
        ]);
      } else {
        await printAndWait('Мм? Обтекаемость этой наживки…');
        await printAndWait([
          'В этот миг ',
          you.get_colored_name(),
          ' озаряет!',
        ]);
      }
      return [ret];
    };
    f.title = 'Наука рыбной ловли';
    return f;
  })(),
  ts_shower: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     * @param {boolean} want_sex 角色是否同意性爱
     */
    const f = async (chara, you, want_sex) => {
      const ret = [];
      await printAndWait(['Мм? ', chara.get_colored_name(), ' ещё нет?']);
      await printAndWait('Как раз — пока нет, душ!');
      println();
      await printAndWait([
        'Открыв дверь, видите голую ',
        chara.get_colored_name(),
        '…',
      ]);
      printButton('«О, вместе искупаемся?»', 1);
      printButton('«Извините, что помешал(а)!»', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        if (want_sex) {
          await printAndWait('Она с интересом соглашается.');
          await printAndWait('Вы трёте друг другу спины.');
          await printAndWait([
            'После душа ',
            chara.sex,
            ' смотрит на ',
            you.get_colored_name(),
            ' ещё не насытившись…',
          ]);
        } else {
          await chara.say_and_wait('Идиот, о чём ты думаешь!');
          await printAndWait([you.get_colored_name(), ' выгоняют…']);
        }
      } else {
        await you.say_and_wait('Извините, что помешал(а)!');
        await printAndWait([you.get_colored_name(), ' кричит и выбегает.']);
        await printAndWait([
          'Скоро ',
          chara.get_colored_name(),
          ' выходит после душа, краснея.',
        ]);
      }
      return ret;
    };
    f.title = 'В душевой';
    return f;
  })(),
  sr_strange_lunch: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        'Настало время обеда, и ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ' не сговариваясь приходят на крышу.',
      ]);
      await printAndWait([
        'Непонятно почему, но сегодня коробочка с обедом, которую принесла ',
        chara.get_colored_name(),
        ', особенно щедрая',
      ]);
      println();
      await chara.say_and_wait([callname, ', попробуй, как оно на вкус.']);
      await chara.say_and_wait('Это, между прочим, моё коронное~');
      println();
      await printAndWait([
        you.get_colored_name(),
        ' берёт коробку и без всяких опасений хватается за приборы.',
      ]);
      await printAndWait([
        'После нескольких блаженных кусков тело начинает понемногу гореть…',
      ]);
      println();
      await printAndWait([
        you.get_colored_name(),
        ' с некоторым недоумением поворачивается к сидящей рядом ',
        chara.get_colored_name(),
        ' — и видит, что та тоже вся раскраснелась.',
      ]);
      await printAndWait([
        'И как раз когда ',
        you.get_colored_name(),
        ' собирается что-то спросить, слова обрывает силой прижавшийся поцелуй.',
      ]);
      println();
      await printAndWait([
        'Когда губы наконец расходятся, между ними тянется длинная серебристая нить.',
      ]);
      printButton('«Теперь уж придётся…»', 1);
      printButton('«Я порядочный человек! Стальная воля, активируйся!»', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          'Пусть даже это крыша, ',
          you.get_colored_name(),
          ' и ',
          chara.get_colored_name(),
          ' всё сильнее тянутся друг к другу.',
        ]);
        await printAndWait([
          'Но, вспомнив, что обеденный перерыв ещё идёт, ',
          you.get_colored_name(),
          ' больше ни о чём не думает и хватается за плечи ',
          chara.get_colored_name(),
          '…',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' резко мотает головой, возвращая себе твёрдость духа, и тут же убирает коробку с обедом.',
        ]);
        await printAndWait([
          'Прямо на глазах у ',
          chara.get_colored_name(),
          ' поднимается и уходит с крыши, будто спасаясь бегством…',
        ]);
      }
      return ret;
    };
    f.title = 'Странный обед';
    return f;
  })(),
  breakfast: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara 喝玩家奶的角色
     * @param {CharaTalk} you 玩家
     */
    const f = async (chara, you) => {
      await printAndWait([
        'Войдя в кабинет тренера, ',
        you.get_colored_name(),
        ' видит ',
        chara.get_colored_name(),
        ': завтрак съеден, пьёт молоко.',
      ]);
      await printAndWait('Упаковка этого молока… будто знакомая…');
      await printAndWait([
        'И взгляд ',
        chara.get_colored_name(),
        ' почему-то странный…',
      ]);
      await printAndWait('…наверное, показалось.');
    };
    f.title = '«Завтрак»';
    return f;
  })(),
  or_riverside_walk: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        'Проведя какое-то время в праздности на берегу реки, ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ' отправляются обратно.',
      ]);
      await printAndWait('Мягкий ветер обдувает лица обоих — до чего хорошо.');
      printButton('«Пора возвращаться,»', 1);
      printButton('«времени уже немало.»', 2);
      await input();
      await printAndWait([
        'Пока ',
        you.get_colored_name(),
        ' говорит, идущая рядом ',
        chara.get_colored_name(),
        ' украдкой переводит на него взгляд и молча прижимается плечом.',
      ]);
      println();
      await printAndWait(
        'Вы неспешно идёте вместе, и людей по дороге почти нет.',
      );
      await chara.say_and_wait('Как тихо…');
      await printAndWait([
        'Будто что-то почувствовав, ',
        chara.get_colored_name(),
        ' замедляет шаг.',
      ]);
      println();
      await printAndWait([
        'Заметив, что идущая рядом ',
        chara.get_colored_name(),
        ' остановилась, ',
        you.get_colored_name(),
        ' тоже останавливается и оборачивается.',
      ]);
      printButton('«Что такое?»', 1);
      await input();
      await chara.say_and_wait('Можно… ненадолго закрыть глаза?');
      await printAndWait([
        'Услышав эту непонятную просьбу, ',
        you.get_colored_name(),
        ' слегка теряется, но глаза всё же закрывает.',
      ]);
      println();
      await printAndWait(
        'У самого уха шумит ветер: прохладный, но с примесью тёплого дуновения.',
      );
      await printAndWait([
        'Даже не открывая глаз, ',
        you.get_colored_name(),
        ' догадывается, что произошло.',
      ]);
      await printAndWait(
        'Руки обвивают его, а на лице остаётся тёплая влажная точка.',
      );
      println();
      await chara.say_and_wait('…Ну всё, пойдём обратно.');
      await printAndWait([
        'Когда глаза открываются снова, ',
        chara.get_colored_name(),
        ' уже тихо стоит перед ',
        you.get_colored_name(),
        '.',
      ]);
      await printAndWait(
        'Щёки ещё чуть розовые, но она улыбается и отступает на два шага.',
      );
      printButton('«Пойдём.» (симпатия +10)', 1);
      printButton('«А может… можно вернуться и попозже…» (влюблённость +1)', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' берёт ',
          you.get_colored_name(),
          ' за тёплую руку и спокойно шагает рядом.',
        ]);
        await you.say_and_wait(
          'И всё-таки — что это было за прикосновение…',
          true,
        );
      } else {
        await chara.say_and_wait('Попозже…');
        await chara.say_and_wait('То есть…');
        await printAndWait([
          'В ответ на раскрасневшуюся ',
          chara.get_colored_name(),
          ',',
          you.get_colored_name(),
          ' только улыбается.',
        ]);
        await printAndWait([
          'Сегодня, пожалуй, стоит погулять с ',
          chara.get_colored_name(),
          ' ещё немного.',
        ]);
      }
      return ret;
    };
    f.title = 'Часы на речной набережной';
    return f;
  })(),
  os_is_movie_right: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        'Хотели просто побродить по торговой улице с ',
        chara.get_colored_name(),
        ', но наткнулись на неожиданную афишу.',
      ]);
      println();
      await you.say_as_passer_by_and_wait('Афиша', [
        'Новая картина, безупречно показывающая путь роста скаковой ',
        chara.uma_sex_title,
        '!',
      ]);
      println();
      await printAndWait([
        'Хоть про неё и не слышали, ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ' из чистого любопытства всё же покупают билеты и заходят.',
      ]);
      await printAndWait(
        'Устроившись в зале, вы с некоторым предвкушением ждёте, когда погаснет свет и начнётся история.',
      );
      await printAndWait(
        'Картинка на экране и правда под стать новой ленте, а вот путь роста оказывается неожиданным.',
      );
      println();
      await you.say_as_passer_by_and_wait(
        'Актриса',
        'Тренер, это всё благодаря тебе…',
      );
      await you.say_as_passer_by_and_wait(
        'Актриса',
        'Всё оттого, что был тренер, — только поэтому я сейчас…',
      );
      println();
      await printAndWait([
        'Кадры на экране слегка преувеличены, и ',
        you.get_colored_name(),
        ' начинает казаться, что тут что-то не так.',
      ]);
      await printAndWait('И это вправду называется ростом?');
      println();
      await printAndWait([
        'Почуяв неладное, ',
        you.get_colored_name(),
        ' уже собирается повернуться к ',
        chara.get_colored_name(),
        ' и сказать, что остаток можно и не смотреть.',
      ]);
      println();
      await chara.say_and_wait('…');
      println();
      await printAndWait('Сверху на руке разливается тепло.');
      await printAndWait([
        'Сидящая рядом ',
        chara.get_colored_name(),
        ' тихонько сжимает руку ',
        you.get_colored_name(),
        '.',
      ]);
      println();
      await chara.say_and_wait('…Уходим?');
      println();
      await printAndWait([
        'В темноте зала особенно ясно видно только лицо ',
        chara.get_colored_name(),
        '.',
      ]);
      await printAndWait([
        'Обе ладони ложатся на руку ',
        you.get_colored_name(),
        ', и она легонько прислоняется к его плечу.',
      ]);
      println();
      await printAndWait(
        'Экран для обоих уже неважен: взгляды намертво сцепились друг с другом.',
      );
      await printAndWait(
        'Слабый свет с экрана падает на лица, преломляясь в глазах.',
      );
      println();
      await chara.say_and_wait([callname, '…']);
      await chara.say_and_wait('Я…');
      await you.say_as_passer_by_and_wait('Актриса', 'Ты мне нравишься!');
      println();
      await printAndWait(
        'Фильм выходит на кульминацию и обрывает то, к чему шли эти двое.',
      );
      await printAndWait([
        'Голос ложится между ',
        you.get_colored_name(),
        ' и ',
        chara.get_colored_name(),
        ', и во взглядах появляется капелька неловкости.',
      ]);
      printButton(
        '«Всё-таки… давай успокоимся» (боевой настрой растёт, симпатия +10)',
        1,
      );
      printButton(
        '«Пойдём… выйдем вместе» (боевой настрой сильно растёт, влюблённость +1)',
        2,
      );
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait(
          'Фильм понемногу идёт к концу, и свет в зале зажигается как раз вовремя.',
        );
        await printAndWait([
          'Яркий свет падает на смущённое лицо ',
          you.get_colored_name(),
          ', и ',
          you.get_colored_name(),
          ' тоже слегка покашливает.',
        ]);
        println();
        await chara.say_and_wait('…Угу.');
        println();
        await printAndWait([
          'Всё ещё прижатая ладонь перехватывает руку ',
          you.get_colored_name(),
          ', и она встаёт вместе с ним.',
        ]);
        await printAndWait([
          'Пусть и с лёгким сожалением, но послушно поднимается и идёт следом за ',
          you.get_colored_name(),
          '.',
        ]);
      } else {
        await printAndWait([
          'Даже на самой громкой сцене фильма ',
          you.get_colored_name(),
          ' всё-таки различает в общем шуме один голос.',
        ]);
        await printAndWait([
          'Выкрикнувшая это под настроение ',
          chara.get_colored_name(),
          ' замирает и тут же сама собой вжимается в кресло.',
        ]);
        await printAndWait([
          'А вот у ',
          you.get_colored_name(),
          ' лицо, наоборот, смягчается, и он медленно подаётся вперёд.',
        ]);
        await printAndWait([
          'Губы соприкасаются, и всё удивление и стыд ',
          chara.get_colored_name(),
          ' остаются внутри, уступив место счастью.',
        ]);
        println();
        await printAndWait([
          you.get_colored_name(),
          ' берёт ',
          chara.get_colored_name(),
          ' за руку, и они тихонько уходят из зала.',
        ]);
        await printAndWait([
          'Ведя за собой залитую румянцем ',
          chara.get_colored_name(),
          ', смотрит на гостиницу впереди — и вот ',
          chara.sex,
          ' уже идёт внутрь, приобнятая за плечи…',
        ]);
      }
      return ret;
    };
    f.title = 'Тот ли это фильм?';
    return f;
  })(),
  privacy_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan|false} money 如果卖出能得到的货款
     */
    const f = async (you, money) => {
      await printAndWait([
        'Сегодня, встав, ',
        you.get_colored_name(),
        ' видит сообщение на личный счёт: хотят выкупить весь будущий товар.',
      ]);
      printButton('(Может, у кого-то странный фетиш… главное — деньги)', 1);
      printButton('(Ещё и на указанный адрес… подозрительно, лучше нет)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' получает перевод.']);
        await printAndWait(
          'Собеседник пишет, что в следующий раз адрес доставки тот же, и просит связаться в первую очередь с НИМ, когда товар появится.',
        );
        if (money) {
          await printAndWait(['Получено ', money, ' ма-монет за товар…']);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' считает речь подозрительной, да и адрес недалеко от Трейсена.',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' вежливо отказывает, но собеседник, похоже, не сдаётся: если товар всё-таки будет, пусть свяжутся с НИМ — выкупит дороже.',
        ]);
      }
      return [ret];
    };
    f.title = 'Безопасность личных данных (часть первая?)';
    return f;
  })(),
  privacy_2_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 买奶的角色
     */
    const f = async (you, chara) => {
      await printAndWait([
        'В тренировочной ',
        chara.get_colored_name(),
        ' сидит в телефоне и, увидев ',
        you.get_colored_name(),
        ', тут же его убирает — будто прячется от ',
        you.get_colored_name(),
        '.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' телефон тоже вздрагивает: пришло сообщение.',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' шевелит носом и говорит, что от ',
        you.get_colored_name(),
        ' пахнет чем-то незнакомым.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' не придаёт этому значения: всё-таки ',
        chara.uma_sex_title,
        ' очень чутки.',
      ]);
      await printAndWait('…');
      await printAndWait([
        'И, само собой, не замечает, как у ',
        chara.get_colored_name(),
        ' там, куда ',
        you.get_colored_name(),
        ' не смотрит, взгляд делается странным.',
      ]);
    };
    f.title = 'Безопасность личных данных (часть вторая?!)';
    return f;
  })(),
  privacy_2_2: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan|false} money 如果卖出能得到的货款
     */
    const f = async (you, money) => {
      await printAndWait([
        'Снова пишут, прося ',
        you.get_colored_name(),
        ' отдать товар ЕМУ.',
      ]);
      await printAndWait(
        'ОН, похоже, большой любитель такого рода вещей: пишет крайне настойчиво, будто собирается что-то с ними делать.',
      );
      printButton('(Денег мало… всё-таки сделать?)', 1);
      printButton('(…подозрительно, лучше нет)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          'Без денег — никуда; кто теперь упрёкнёт ',
          you.get_colored_name(),
          '.',
        ]);
        await printAndWait([
          'Скрывая, ',
          you.get_colored_name(),
          ' всё же соглашается.',
        ]);
        if (money) {
          await printAndWait(['Получено ', money, ' ма-монет за товар…']);
        }
      } else {
        await printAndWait(
          'Такой близкий адрес плюс такой тон — точно подозрительно; игнор.',
        );
        await printAndWait([
          'Так думая, ',
          you.get_colored_name(),
          ' кидает в чёрный список.',
        ]);
      }
      return [ret];
    };
    f.title = 'Безопасность личных данных (часть вторая!?)';
    return f;
  })(),
  privacy_3: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 买奶的角色
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (you, chara, callname) => {
      const ret = [];
      await printAndWait([
        'После тренировки ',
        chara.get_colored_name(),
        ' спрашивает ',
        you.get_colored_name(),
        ', свободен ли он: хочет сходить с ',
        you.get_colored_name(),
        ' в одно место.',
      ]);
      printButton('«Как раз ничего не запланировано, идём вместе.»', 1);
      printButton('«Пожалуй, обойдусь: поздно уже»', 2);
      ret.push(await input());
      if (ret.at(-1) === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' шагает всё легче, вот только ',
          you.get_colored_name(),
          ' чем дальше смотрит, тем знакомее ему кажется дорога.',
        ]);
        await printAndWait(
          'Да это же тот самый адрес доставки того покупателя!',
        );
        await chara.say_and_wait([
          callname,
          ' совсем не бережёт личные данные: вроде бы ничего не раскрыл, а вот IP-то оказался внутри академии~',
        ]);
        await chara.say_and_wait([
          'Но ничего страшного, я уже всё за ',
          callname,
          ' уладила: похоже, тут кое-кто хотел сделать с ',
          callname,
          ' что-то нехорошее.',
        ]);
        await chara.say_and_wait([
          'Но чтобы ',
          callname,
          ' усвоил урок, пусть тело запомнит это как следует —',
        ]);
        await chara.say_and_wait('— мы ведь с тобой одно целое.');
        await printAndWait('…');
        printButton(
          `Обнять как следует — пусть ${chara.sex} почувствует благодарность. (симпатия +25)`,
          1,
        );
        printButton(
          `Забрать её с собой: пусть ${chara.sex} примет благодарность дома.`,
          2,
        );
        ret.push(await input());
      } else if (get('talent:0:泌乳') === 3 || get('flag:惩戒力度') === 3) {
        await printAndWait('На запястье ложится мягкая, но неотвратимая сила.');
        await printAndWait([
          you.get_colored_name(),
          ' — ',
          chara.get_colored_name(),
          ' разворачивается, тащит тебя в ещё не запертую комнату тренера и захлопывает дверь.',
        ]);
        if (get('flag:惩戒力度') === 3) {
          await chara.say_and_wait([
            'Ты уже ',
            chara.uma_sex_title,
            ' — собственность.',
          ]);
          await chara.say_and_wait(
            'И ещё думаешь, что это тело в твоём распоряжении?',
          );
          await chara.say_and_wait(
            'Похоже, придётся напомнить тебе твоё место.',
          );
          await chara.say_and_wait(
            'Чего смотришь? Одежда сама себя не снимет!',
          );
          await printAndWait([
            'Под этим непонятным взглядом ',
            you.get_colored_name(),
            ' понемногу снимает с себя одежду.',
          ]);
          await printAndWait(
            'Сначала значок, что отмечает тренера, в конце — бельё, последнее, что ещё было личным.',
          );
          await chara.say_and_wait('И всё? После такой ошибки……');
          await printAndWait([
            chara.get_colored_name(),
            ' не договаривает — тело беременной шлюхи уже всё поняло.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            ' отбрасываешь одежду в сторону и в самой правильной догэдза выставляешь промежность напоказ без единого прикрытия.',
          ]);
          await printAndWait('Всё тело горит……');
          await printAndWait([
            'Потому что тебя отчитала ',
            chara.uma_sex_title,
            '-сама……',
          ]);
          await printAndWait(
            'Или ты с самого начала ждал(а) такого обращения — поэтому и натворил(а)?',
          );
          await printAndWait(
            'Голова и тело горят, думать больше не получается.',
          );
          await printAndWait('Теперь остаётся только извиняться телом.');
          await printAndWait('Даже навязанные лошадиные уши прижаты к земле.');
        } else {
          await chara.say_and_wait([
            callname,
            ' каждый день тоже мучаешься телом, да? Я понимаю～',
          ]);
          await chara.say_and_wait(
            'Ну вот, стоило только сказать — и я бы помогла.',
          );
          await printAndWait([
            you.get_colored_name(),
            ' чувствуешь, как ',
            chara.get_colored_name(),
            ' уже торопливо сдирает с себя одежду.',
          ]);
          await chara.say_and_wait(
            'Каждый раз самой справляться — заморочно, да…… Ничего, с этим уже покончено. Сегодня, нет, и дальше……',
          );
          await chara.say_and_wait('Я буду хорошенько помогать тебе с этим.');
          await chara.say_and_wait(
            'Не бережёшь приватность в сети — так открыто вешаешь ссылку на продажу лосьона.',
          );
          await chara.say_and_wait(
            'Это же прямой намёк, что тренер сексуально голоден?',
          );
          await chara.say_and_wait('Можно уже расслабить тело, хорошо?');
          await printAndWait([
            'Хотя ',
            you.get_colored_name(),
            ' ещё пытается что-то оправдать, но возбуждённая ',
            chara.uma_sex_title,
            ' явно не станет слушать ',
            you.get_colored_name(),
            ' больше ни слова.',
          ]);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          ': его уводит ',
          chara.get_colored_name(),
          ' — в общежитие тренеров.',
        ]);
        await chara.say_and_wait([
          callname,
          ' ведь тяжело: приходится ещё и подработку заводить, чтобы прожить.',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' опускает уши: похоже, кое-что о «частной жизни» ',
          you.get_colored_name(),
          ' ей известно.',
        ]);
        await chara.say_and_wait(
          'Если будет трудно — обязательно скажи мне, я всегда буду на твоей стороне!',
        );
        await chara.say_and_wait([
          '.',
          callname,
          ' в сети кто-то выслеживал — похоже, кто-то искал неприятностей.',
        ]);
        await chara.say_and_wait('Но не волнуйся, я уже всё уладила~');
        await chara.say_and_wait('Если будет трудно — обязательно скажи мне!');
        await printAndWait([
          chara.get_colored_name(),
          ' обнимает ',
          you.get_colored_name(),
          '.',
        ]);
        if (get('cflag:0:身高') - get(`cflag:${chara.id}:身高`) > 20) {
          await printAndWait([
            'Язык при случае проходится и по шее ',
            you.get_colored_name(),
            ', отчего ',
            you.get_colored_name(),
            ' становится щекотно.',
          ]);
        } else {
          await printAndWait([
            chara.get_colored_name(),
            ' глубоко вдыхает у самой шеи ',
            you.get_colored_name(),
            ' — будто это и есть плата за то, что ',
            chara.sex,
            ' уладила для ',
            you.get_colored_name(),
            ' это дело.',
          ]);
        }
        await chara.say_and_wait([
          callname,
          ', до следующей недели, отдыхай как следует!',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' так и провожает ',
          you.get_colored_name(),
          ' до дверей общежития и прощается с ',
          you.get_colored_name(),
          '.',
        ]);
      }
      return ret;
    };
    f.title = 'Безопасность личных данных (часть третья?)';
    return f;
  })(),
  strange_day: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 卷入事件的担当，可能是爱丽速子
     * @param {CharaTalk|false} tachyon 爱丽速子，如果 chara 是爱丽速子则是 false
     * @param {CharaTalk|false} minoru 骏川缰绳/丰收时刻，如果 chara 是骏川缰绳/丰收时刻则是 false
     * @param {CharaTalk|false} doto 名将怒涛，如果 chara 是名将怒涛则是 false
     * @param {CharaTalk|false} maya 摩耶重炮，如果 chara 是摩耶重炮则是 false
     * @param {CharaTalk|false} sky 青云天空，如果 chara 是青云天空则是 false
     */
    const f = async (you, chara, tachyon, minoru, doto, maya, sky) => {
      await printAndWait([
        'Утром ',
        you.get_colored_name(),
        ' чувствует, что что-то не так, но всё же намерен встретить прекрасный день.',
      ]);
      await you.say_and_wait('(ง •̀_•́)ง');
      await printAndWait([
        you.get_colored_name(),
        ' не придаёт этому значения и, умывшись, выходит из дома.',
      ]);
      println();
      if (minoru) {
        await minoru.say_and_wait('Y(^_^)Y');
        await printAndWait([
          minoru.sex,
          ' как всегда встречает у ворот каждого входящего.',
        ]);
        println();
      }
      await you.say_and_wait('…?', true);
      await you.say_and_wait('눈_눈');
      await printAndWait([
        you.get_colored_name(),
        ' чувствует какую-то странность, но выразить её не может.',
      ]);
      println();
      if (doto) {
        await doto.say_and_wait('(๑•́ωก̀๑)');
        await printAndWait([doto.sex, 'Опять плачет, что ли?']);
        println();
      }
      if (maya) {
        await maya.say_and_wait('(～0～)');
        await printAndWait('Это дитятко снова полночи не спало, не иначе.');
        println();
      }
      if (sky) {
        await sky.say_and_wait('<(*ΦωΦ*)>');
        await printAndWait('…И что это за выражения лиц.');
        println();
      }
      await you.say_and_wait('…!', true);
      await you.say_and_wait('(#ﾟДﾟ)');
      await printAndWait([
        you.get_colored_name(),
        ' наконец замечает: за всю дорогу он не услышал ни одной фразы — вместо этого в голове всплывают смайлики.',
      ]);
      await you.say_and_wait('…', true);
      await you.say_and_wait('(#`皿´)');
      println();
      if (tachyon) {
        await printAndWait(
          'В голове всплывает некая особа, что днями напролёт ходит в лабораторном халате.',
        );
        await you.say_and_wait('(‡▼益▼)');
        await printAndWait([
          'Опять опыты — и ставит их ',
          tachyon.sex,
          ', ясное дело… ',
          you.get_colored_name(),
          ' собирается пойти и разыскать ту, кто всё это устроил, — а это ',
          tachyon.sex,
          '.',
        ]);
        println();
        await chara.say_and_wait('(｢･ω･)｢эй');
        printButton('«(｢･ω･)｢эй»', 1);
        printButton('«ヾ(＾。^*)»', 2);
        await input();
        await chara.say_and_wait('( •᷄ὤ•᷅)？');
        await printAndWait([
          'Похоже, так и не поняла, что ',
          you.get_colored_name(),
          ' делает.',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' протягивает руку ',
          chara.get_colored_name(),
          '.',
        ]);
        await chara.say_and_wait('(⁄ ⁄•⁄ω⁄•⁄ ⁄)');
        printButton(
          `Пытается объяснить — пусть ${chara.sex} поймёт, что сейчас происходит.`,
          1,
        );
        await input();
        await you.say_and_wait('(´ﾟωﾟ｀)');
        await you.say_and_wait('⁽⁽◝( •௰• )◜⁾⁾');
        await you.say_and_wait('₍₍◞( •௰• )◟₎₎');
        await printAndWait('Некоторое время машет руками и приплясывает.');
        await you.say_and_wait('╮（╯＿╰）╭');
        println();
        await chara.say_and_wait('【•】_【•】');
        await chara.say_and_wait('(ノ=Д=)ノ┻━┻');
        println();
        await printAndWait([
          'Спустя какое-то время ',
          chara.sex,
          ' наконец понимает, о чём речь, и идёт вместе с ',
          you.get_colored_name(),
          '.',
        ]);
        drawLine();
        await printAndWait([
          'Скоро на месте: вот и лаборатория — ',
          tachyon.sex,
          ' тут и работает.',
        ]);
        await tachyon.say_and_wait('(¦3[▓▓]');
        await you.say_and_wait('(ノಠ∩ಠ)ノ彡(o°o)');
        await tachyon.say_and_wait('Σ(っ °Д °;)っ');
        await chara.say_and_wait('(ಡωಡ)');
        drawLine({ content: 'Объясняет довольно долго' });
        await tachyon.say_and_wait('(//▽//)');
        await tachyon.say_and_wait('～(￣▽￣～)～');
        await printAndWait([
          'Напоследок ',
          you.get_colored_name(),
          ' просят записать ощущения и выдают противоядие и возмещение.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' вспоминает про свою любимую скаковую, что днями напролёт ставит опыты.',
        ]);
        await you.say_and_wait('(๑•ี_เ•ี๑)');
        drawLine();
        await printAndWait([
          you.get_colored_name(),
          ' по знакомой дороге находит лабораторию — ',
          chara.sex,
          ' там и обитает.',
        ]);
        await chara.say_and_wait('⊙▽⊙');
        await you.say_and_wait('⊙▽⊙');
        await chara.say_and_wait('Σ(っ °Д °;)っ');
        await printAndWait('«Ума-ТВ» торжественно выходит в эфир!');
        await chara.say_as_unknown_and_wait('ау(∩∀°╭ау∀∀ау∀∀°)ауау');
        drawLine({ content: '(спасибо мастеру Тому за озвучку)' });
        await chara.say_and_wait('≥﹏≤');
        await you.say_and_wait('≥﹏≤');
      }
    };
    f.title = 'Странный день';
    return f;
  })(),
  strange_day2: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 卷入事件的角色，不会是爱丽速子
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {PrintedSpan} callname 角色对你的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对你的称呼
     * @param {string[]} med_list 药水列表，是 名称 × 数量 的形式
     */
    const f = async (you, chara, tachyon, callname, callname_32, med_list) => {
      await printAndWait([
        you.get_colored_name(),
        ' встаёт как обычно и снова замечает, что с телом что-то не так.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' оглядывается по сторонам: ничего не изменилось.',
      ]);
      await printAndWait('Только……… руки чешутся, хочется что-нибудь сделать…');
      let flag_a = true,
        horse_hair = false,
        flag_b = true,
        b_line;
      const check_times_in_a = new Array(6).fill(0),
        check_times_in_b = new Array(2).fill(true);
      const cur_line = getLineCount();
      while (flag_a) {
        printInColRows(
          [
            { content: 'Так что же обследовать?', type: 'text' },
            { config: { width: 8 }, type: 'divider' },
          ],
          [
            {
              config: { width: 3 },
              content: '▓▓▓▓▓',
              type: 'text',
            },
            {
              accelerator: 1,
              config: { align: 'center', showAcc: false, width: 2 },
              content: 'ОКНО',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '▓▓▓▓▓',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '▓', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: 'КРО',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '▓',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '▓', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: 'ВА',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '▓',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '▓', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: 'ТЬ',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '▓',
              type: 'text',
            },
          ],
          [
            { config: { width: 6 }, content: '▓', type: 'text' },
            {
              accelerator: 3,
              config: { align: 'right', showAcc: false, width: 1 },
              content: 'ТУМБА',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '▓',
              type: 'text',
            },
          ],
          [
            { config: { width: 1 }, content: '▓', type: 'text' },
            {
              accelerator: 4,
              config: { width: 1, showAcc: false },
              content: 'ЗЕРКАЛО',
              type: 'button',
            },
            {
              config: { align: 'right', width: 6 },
              content: '▓',
              type: 'text',
            },
          ],
          [
            { config: { width: 7 }, content: '▓', type: 'text' },
            {
              accelerator: 5,
              config: { align: 'right', showAcc: false, width: 1 },
              content: 'САНУЗЕЛ',
              type: 'button',
            },
          ],
          [
            { config: { width: 3 }, content: '▓▓▓▓', type: 'text' },
            {
              accelerator: 6,
              config: { align: 'center', showAcc: false, width: 2 },
              content: 'ДВЕРЬ',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '▓▓▓▓',
              type: 'text',
            },
          ],
          [{ config: { width: 8 }, type: 'divider' }],
        );
        switch (await input()) {
          case 1:
            switch (++check_times_in_a[0]) {
              case 1:
                await printAndWait([
                  you.get_colored_name(),
                  ' открывает окно.',
                ]);
                await printAndWait('На улице поют птицы и распускаются цветы.');
                await printAndWait([
                  'Такому тренеру, как ',
                  you.get_colored_name(),
                  '… следовало бы весь день проспать дома.',
                ]);
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  ' закрывает окно, отрезая уличные звуки.',
                ]);
                await printAndWait([
                  'Жаль только, что ',
                  you.get_colored_name(),
                  ' ещё нужно работать и отдыхать пока нельзя.',
                ]);
                break;
              default:
                await printAndWait('Интересно открывать и закрывать окно?');
            }
            break;
          case 2:
            switch (++check_times_in_a[1]) {
              case 1:
                await printAndWait('Это большая и очень мягкая кровать.');
                await printAndWait('…Но зачем было покупать двуспальную?');
                break;
              case 2:
                await printAndWait('…И почему тут лежит конский волос?');
                await printAndWait([you.get_colored_name(), ' принюхивается.']);
                await printAndWait('…Знакомый запах.');
                await printAndWait('Получено: 【конский волос】.');
                horse_hair = true;
                break;
              default:
                await printAndWait([
                  'Большая и удобная кровать… и удобно на ней, боюсь, не одному ',
                  you.get_colored_name(),
                  '.',
                ]);
            }
            break;
          case 3:
            switch (++check_times_in_a[2]) {
              case 1:
                await printAndWait(
                  'Это прикроватная тумба, на ней стоят драгоценные фотографии.',
                );
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  ' перерывает всё сверху донизу и не находит ничего.',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  ' будто слышит, как кто-то спрашивает:',
                ]);
                await you.say_as_unknown_and_wait(
                  '…Зачем перерывать собственный дом?',
                );
                await printAndWait('…Хорошо бы, если это только кажется.');
                break;
              case 3:
                await printAndWait([
                  you.get_colored_name(),
                  ' всё внимательно осматривает… и находит в углу 10 ма-монет.',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  ' уходит вполне довольный.',
                ]);
                await printAndWait('Получено 10 ма-монет.');
                // FLAGNAME:16 = 当前马币
                add('flag:16', 10);
                break;
              default:
                await printAndWait('Всего одна драгоценная фотография.');
            }
            break;
          case 4:
            switch (++check_times_in_a[3]) {
              case 1:
                await printAndWait([
                  'Это ',
                  you.get_colored_name(),
                  ': ничем не примечательное лицо, простенький значок, скромная одежда.',
                ]);
                break;
              case 2:
                await printAndWait(
                  'Это тренер с красивым лицом, в изящной одежде, со сверкающим значком.',
                );
                await printAndWait('…Хорош ведь, правда?');
                break;
              case 3:
                await printAndWait([
                  'Человеку в зеркале похвалить уже решительно нечего, и он молча смотрит на ',
                  you.get_colored_name(),
                  '.',
                ]);
                await printAndWait('…Не кажется ли, что что-то не так?');
                await printAndWait('Моргнул — и всё как обычно.');
                break;
              case 4:
                // 被卷入者是曼城茶座、小林历奇和周日宁静的情况，会发生超自然事件
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait([
                    you.get_colored_name(),
                    ' улыбается зеркалу.',
                  ]);
                  await printAndWait([
                    'Человек в зеркале тоже вдруг начинает улыбаться ',
                    you.get_colored_name(),
                    '…',
                  ]);
                  await printAndWait(
                    '…Вот только слишком широко: разрез дошёл до самых ушей.',
                  );
                  await printAndWait([
                    you.sex,
                    ' берётся руками за раму и начинает давить.',
                  ]);
                  await printAndWait([
                    you.get_colored_name(),
                    '…Так испугался, что не шевельнёшься?',
                  ]);
                  await printAndWait([
                    you.sex,
                    ' — лицо всё больше и больше, вот-вот упрётся в глаза.',
                  ]);
                  await printAndWait([
                    '…Пока ',
                    you.sex,
                    ' не разглядел лицо ',
                    you.get_colored_name(),
                    ' как следует.',
                  ]);
                  await printAndWait(['…', you.sex, ' сбежал.']);
                  await printAndWait('Теперь в зеркале пусто.');
                  await printAndWait([you.get_colored_name(), ' зевает.']);
                } else {
                  await printAndWait(['Это ', you.get_colored_name(), '.']);
                }
                break;
              default:
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait(
                    'В зеркале нет ничего… и неизвестно, когда оно вернётся.',
                  );
                  await printAndWait([
                    you.get_colored_name(),
                    ' ведь ещё хотел привести себя в порядок.',
                  ]);
                } else {
                  await printAndWait(['.', you.get_colored_name(), '.']);
                }
            }
            break;
          case 5:
            flag_b = true;
            await printAndWait([
              you.get_colored_name(),
              ' толкает дверь и заходит в санузел.',
            ]);
            b_line = getLineCount();
            while (flag_b) {
              printInColRows(
                [
                  {
                    content: [
                      you.get_colored_name(),
                      ' оглядывает всё вокруг: с чего бы начать?',
                    ],
                    type: 'text',
                  },
                  { config: { width: 6 }, type: 'divider' },
                ],
                [
                  { config: { width: 3 }, content: '▓▓▓▓', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '▓▓▓▓',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 1 }, content: '▓', type: 'text' },
                  {
                    accelerator: 1,
                    config: { width: 2, showAcc: false },
                    content: 'УНИТАЗ',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '▓',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '▓', type: 'text' },
                  {
                    accelerator: 2,
                    config: { align: 'right', width: 2, showAcc: false },
                    content: 'ВАННА',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 1 },
                    content: '▓',
                    type: 'text',
                  },
                ],
                [
                  {
                    accelerator: 3,
                    config: { width: 3, showAcc: false },
                    content: 'КОМНАТА',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '▓',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '▓▓▓▓', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '▓▓▓▓',
                    type: 'text',
                  },
                ],
                [{ config: { width: 6 }, type: 'divider' }],
              );
              switch (await input()) {
                case 1:
                  if (check_times_in_b[0]) {
                    await printAndWait([
                      you.get_colored_name(),
                      ' чувствует, что кто-то на него смотрит… оглядывается — никого.',
                    ]);
                    print('Чувствуется позыв. Сходить?');
                    printButton('Сходить', 1);
                    printButton('Не надо', 2);
                    if ((await input()) === 1) {
                      await printAndWait([
                        '…Или показалось? ',
                        you.get_colored_name(),
                        ' чудится, что унитаз говорит.',
                      ]);
                      await printAndWait('Нет');
                      await printAndWait('…');
                      await printAndWait([
                        you.get_colored_name(),
                        ' смутно слышит, как тот произносит:',
                      ]);
                      await you.say_as_unknown_and_wait(
                        'У-у-у… я теперь нечистый…',
                      );
                      await you.say_and_wait('…', true);
                      check_times_in_b[0] = false;
                    }
                  } else {
                    await printAndWait(
                      'Унитаз, кажется, плачет… надо будет потом перед ним извиниться.',
                    );
                  }
                  break;
                case 2:
                  if (check_times_in_b[1]) {
                    await printAndWait('Это ванна, в ней очень хорошо.');
                    check_times_in_b[1] = false;
                  } else {
                    await printAndWait([
                      you.get_colored_name(),
                      ' будто смутно слышит:',
                    ]);
                    await you.say_as_unknown_and_wait(
                      'Не обследуй меня, я тут просто чтобы санузел не пустовал.',
                    );
                    await printAndWait('…И правда до чего чудно.');
                  }
                  break;
                case 3:
                  flag_b = false;
              }
              await clear(getLineCount() - b_line);
            }
            break;
          case 6:
            flag_a = false;
        }
        await clear(getLineCount() - cur_line);
      }
      drawLine();
      await printAndWait(
        'Толкает входную дверь; непонятно почему, сегодня из дома выходится особенно поздно.',
      );
      await printAndWait('Глянул на время — уже почти опаздывает.');
      if (horse_hair) {
        await printAndWait([
          you.get_colored_name(),
          ' смотрит на входную дверь и раздумывает, не сменить ли её.',
        ]);
        await you.say_as_passer_by_and_wait('Дверь', 'Не моё дело.');
        await you.say_and_wait('…Теперь уже даже не притворяемся?', true);
      }
      println();
      await printAndWait([you.get_colored_name(), ' выходит на улицу.']);
      await printAndWait([
        you.get_colored_name(),
        ' понимает, что его снова опоила ',
        tachyon.get_colored_name(),
        '.',
      ]);
      await printAndWait('И какой эффект на этот раз?');
      print(
        [
          { content: ' ', isDivider: true },
          '▤▤▤▤▤▤▤▤▤▤▤▤',
          { isBr: 2 },
          'ТЫ',
          { isBlank: 8 },
          'ХЛЕБ',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: 2 },
          { isBlank: 6 },
          '♣',
          { isBlank: 6 },
          '♣',
          { isBlank: 6 },
          '♣',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        you.get_colored_name(),
        ' сталкивается с ',
        chara.get_colored_name(),
        ', которая давно уже всё подстроила!',
      ]);
      print('Расстояние совсем небольшое. Что делать?');
      printButton('Бежать', 1);
      printButton('Держаться спокойно', 2);
      await input();
      await printAndWait([
        '……',
        chara.sex,
        ' уже взяла ',
        you.get_colored_name(),
        ' на прицел — что ни делай, всё без толку!',
      ]);
      print(
        [
          { content: ' ', isDivider: true },
          '▤▤▤▤▤▤▤▤▤▤▤▤',
          { isBr: 2 },
          'ТЫ',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: true },
          { isBlank: 4 },
          'ХЛЕБ',
          { isBr: true },
          { isBlank: 6 },
          '♣',
          { isBlank: 6 },
          '♣',
          { isBlank: 6 },
          '♣',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        chara.sex,
        ' налетает на ',
        you.get_colored_name(),
        '.',
      ]);
      await chara.say_and_wait(['Прости, ', callname, '! Я нечаянно!']);
      await chara.say_and_wait('Я опаздываю, вот и бежала так быстро.');
      await chara.say_and_wait(
        'Так вкусно пахнет, прямо сейчас бы… нет-нет, потерпи ещё немного…',
        true,
      );
      await printAndWait('На словах-то так, а тело не двигается с места.');
      await you.say_and_wait('Ничего, будь просто поосторожнее.');
      await printAndWait([
        you.get_colored_name(),
        ' смотрит на ту, что уже принюхивается к запаху ',
        you.get_colored_name(),
        ', — на ',
        chara.uma_sex_title,
        ', — и в душе просыпается вредность.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' рассказывает ей, как есть: ',
        chara.sex,
        ' узнаёт, что происходит на самом деле.',
      ]);
      await printAndWait([chara.sex, ' заливается краской.']);
      await chara.say_and_wait('…');
      await chara.say_and_wait('То есть если я сейчас захочу…?', true);
      await chara.say_and_wait('…Ой, опаздываю, я побежала…');
      await printAndWait([chara.sex, ' убегает, не оборачиваясь.']);
      await you.say_and_wait('До чего же милая.');
      if (horse_hair) {
        await you.say_as_passer_by_and_wait(
          'Конский волос',
          'И правда милая — хорошо бы, чтобы ты и дальше так думал.',
        );
        await you.say_and_wait('???');
      }
      drawLine();
      await printAndWait([
        you.get_colored_name(),
        ' приходит в лабораторию ',
        tachyon.get_colored_name(),
        '.',
      ]);
      if (get('cflag:32:招募状态') === 1) {
        await printAndWait([
          tachyon.sex,
          'Сидит спиной, на… белом пластиковом стуле?',
        ]);
        await tachyon.say_and_wait('Тебе не стоило приходить.');
        await you.say_and_wait(
          'Чем ты меня опять напоила? Живо давай противоядие.',
        );
        await tachyon.say_and_wait('И сколько раз мы за это время дрались?');
        await you.say_and_wait('…');
        await tachyon.say_and_wait('Хочешь — подойди и возьми сама.');
        await you.say_and_wait('Ещё раз пошутишь так — останешься без обеда.');
        await printAndWait([
          tachyon.get_colored_name(),
          ' со скоростью света падает на колени.',
        ]);
        await printAndWait([
          tachyon.sex,
          ' обхватывает ',
          you.get_colored_name(),
          ' за бедро и втайне на что-то надеется.',
        ]);
        await tachyon.say_and_wait(['У-у-у, не надо, ', callname_32, '.']);
        await printAndWait([
          you.get_colored_name(),
          ' идёт к противоядию и ненароком поддевает ногой — а внизу ',
          tachyon.sex,
          '.',
        ]);
        await printAndWait([tachyon.sex, ' внутренне торжествует.']);
        await tachyon.say_and_wait('Больно же, у-у.');
        await printAndWait([
          '……',
          you.get_colored_name(),
          ' решает, что противоядие выпить всё-таки придётся.',
        ]);
        await printAndWait([
          'Выпито залпом, мир снова становится тихим, и ',
          you.get_colored_name(),
          ' больше не тянет обследовать всё вокруг.',
        ]);
        await tachyon.say_and_wait('…Выпил? …И мне тоже бутылочку.');
        await printAndWait([
          'Глядя на то, как ',
          tachyon.sex,
          ' стоит с донельзя разочарованным лицом, ',
          you.get_colored_name(),
          ' твёрдо решает перезапустить «Ума-ТВ».',
        ]);
        await you.say_and_wait('…');
        await tachyon.say_and_wait('Э? ⊙▽⊙');
        await tachyon.say_as_unknown_and_wait('ау(∩∀°╭ау∀∀ау∀∀°)ауау');
        drawLine({ content: '(спасибо мастеру Тому за озвучку)' });
      } else {
        await printAndWait([
          tachyon.sex,
          ' сидит на стуле — будто уже знала, что ',
          you.get_colored_name(),
          '…',
        ]);
        await printAndWait('Воздух на какое-то время даже затихает.');
        await you.say_and_wait('Молчишь и строишь из себя мастера?');
        await tachyon.say_and_wait('А разве нужно что-то говорить?', true);
        await you.say_and_wait('?');
        await tachyon.say_and_wait('Судя по этому лицу, вышло удачно.', true);
        await tachyon.say_and_wait(
          'Это моя последняя разработка — зелье «одно тело, одно сердце».',
          true,
        );
        await tachyon.say_and_wait(
          'Эффект неплохой. Ты сначала не бей, вот, держи — это противоядие.',
        );
        await printAndWait([
          tachyon.sex,
          ' показывает на бланк рядом и на пузырёк подле него.',
        ]);
        await printAndWait([
          'Выпито залпом, мир снова становится тихим, и ',
          you.get_colored_name(),
          ' больше не тянет обследовать всё вокруг.',
        ]);
        await printAndWait(
          'И всё-таки чем дольше об этом думаешь, тем сильнее злишься.',
        );
        println();
        print('Получено несколько довольно дорогих зелий:');
        for (const med of med_list) {
          print(`· ${med}`);
        }
        await waitAnyKey();
      }
    };
    f.title = 'Странный день 2';
    return f;
  })(),
  wind_welcome: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {boolean} race_week 是否本周有比赛且有未受肉三女神
     */
    const f = async (you, race_week) => {
      await printAndWait([
        you.get_colored_name(),
        ' чувствует лёгкий ветер сбоку — с запахом травы площадки.',
      ]);
      printButton('«Сегодня отличная погода» (настрой подопечной+1)', 1);
      if (race_week) {
        printButton(
          '«Пусть и сегодняшние скачки пройдут гладко» (??? расположение+50)',
          2,
        );
      }
      return [await input()];
    };
    f.title = 'Визит ветра';
    return f;
  })(),
  we_are_one: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      await printAndWait([
        'Вернувшись в комнату тренера, ',
        chara.get_colored_name(),
        ' поднимается с дивана с банным полотенцем на голове и улыбается, глядя на ',
        you.get_colored_name(),
        '.',
      ]);
      println();
      await chara.say_and_wait([
        'Сегодня я тоже здорово выступила, да, ',
        callname,
        ' — может, меня～ хорошенько наградишь?',
      ]);
      printButton(
        '「Сегодня ты правда потрудилась, отдохни как следует, давай прогуляемся!」',
        1,
      );
      print('(настрой-1, расположение+50)');
      printButton('「Тогда чего ты хочешь в награду?」', 2);
      const ret = [await input()];
      if (ret[0] === 2) {
        await printAndWait([
          'По привычке поддразнил(а) встречным вопросом — и получил(а) ответ, которого не ждал(а).',
        ]);
        println();
        await chara.say_and_wait([
          'Хочу стать ',
          callname,
          ' 『невестой』, как тебе?」',
        ]);
        println();
        await printAndWait([
          'Умамусумэ перед тобой ухмыляется и, говоря это, снова кладёт руку ',
          you.get_colored_name(),
          ' к телу ',
          chara.sex,
          '.',
        ]);
        println();
        await chara.say_and_wait([
          'Мы же одно сердце и одно тело, верно? Сейчас у нас наверняка одно и то же на уме, да? Как бы ',
          you.get_colored_name(),
          ' ни говорил(а), я уже не могу больше терпеть!!!',
        ]);
        println();
        await printAndWait([
          'Хвостом она запирает дверь, подхватывает ',
          you.get_colored_name(),
          ' и валит на диван сбоку.',
        ]);
        println();
        await chara.say_and_wait([
          'Сорви с меня «фату» и обращайся со мной как с женой～',
        ]);
        println();
        await printAndWait([
          'Пока ',
          you.get_colored_name(),
          ' осознаёт, что происходит, уже поздно что-либо менять.',
        ]);
        println();
        printButton('「Остынь, нам ещё есть чем заняться……」', 1);
        printButton(
          'Грубо срываешь банное полотенце, что служило фатой, — пора дать ей понять, кто в постели хозяин!',
          2,
        );
        ret.push(await input());
        if (ret[1] === 1) {
          await printAndWait([
            'Услышав, как ',
            you.get_colored_name(),
            ' отказывает, умамусумэ, что всё ещё держит ',
            you.get_colored_name(),
            ', по-прежнему улыбается той же улыбкой.',
          ]);
          await chara.say_and_wait(
            'Не хочешь? Значит, нашей связи ещё мало. Поняла: надо делать и делать, пока не станем одним сердцем и одним телом — тогда всё будет хорошо?',
          );
        }
      }
      return ret;
    };
    f.title = '「」сердце「」тело';
    return f;
  })(),
  chocolate: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {number} max_lover 空中神宫、创升、梦之旅中爱慕值最高者
     * @param {number} max_love 空中神宫、创升、梦之旅中最高的爱慕值，如果都没招募则是-1
     */
    const f = async (you, max_lover, max_love) => {
      await printAndWait('День святого Валентина, жаль — без выходного.');
      await printAndWait(
        'Работа тренера иногда требует осторожности с «заинтересованными»; в ленте лошадиного твиттера полно кислого запаха влюблённости.',
      );
      printButton(
        '«Пустой шум; сегодня снова гореть за подопечную» (силы и энергия+50)',
        1,
      );
      printButton('«Всё равно скучно — запостить в твиттер ради атмосферы»', 2);
      const ret = await input();
      if (ret === 2) {
        if (max_love === -1) {
          await printAndWait([
            '«Открыл холодильник — самое романтичное всё-таки эспрессо»',
          ]);
          await printAndWait('На скорую руку пост с альта.');
        } else if (max_love < 60) {
          await printAndWait(
            '«Опять день вкалывать. Что? Уже Валентин? Хотел заказать шоколад — список контактов пуст!»',
          );
          await printAndWait('На скорую руку пост с альта.');
          println();
          await printAndWait(
            'Назавтра анонимная посылка: изящная плитка шоколада',
          );
          println();
          await printAndWait('Странно… кто прислал…');
        } else {
          await printAndWait(
            '«Хонмей-шоколад N-й год как блуждает; в конбини купил палочку покки со вкусом аодзиру для самоподдержки»',
          );
          await printAndWait('На скорую руку пост с альта.');
          println();
          switch (max_lover) {
            case 36:
              // 空中神宫的场合
              await printAndWait(
                'Назавтра анонимная посылка: шоколад — изящный, маленький',
              );
              break;
            case 80:
              // 创升的场合
              await printAndWait(
                'Назавтра анонимная посылка: шоколад — будто значок-бейдж',
              );
              break;
            case 119:
              // 梦之旅的场合
              await printAndWait(
                'Назавтра анонимная посылка: шоколад — очень роскошный',
              );
          }
          println();
          await printAndWait(['Странно… кто прислал…']);
        }
      }
      return [ret];
    };
    f.title = 'Шоколад!';
    return f;
  })(),
  sakura_regret: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara 角色
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (chara, callname) => {
      await printAndWait([
        'Ночью в постели ',
        chara.get_colored_name(),
        ' прячется под одеялом',
      ]);
      println();
      await chara.say_and_wait([
        callname,
        ', почему… не хочешь принять мою любовь…',
      ]);
      println();
      await chara.say_and_wait([
        'Ведь все эти прекрасные воспоминания мы создавали вместе…',
      ]);
      println();
      await chara.say_and_wait(['Как же… одиноко…']);
      println();
      await printAndWait([
        'Там, где ',
        chara.sex,
        ' не видит, подушка тихо мокнет.',
      ]);
      println();
    };
    f.title = 'Сожаление сакуры';
    return f;
  })(),
  nice_weekend: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara 爱丽数码或目白多伯
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        chara.get_colored_name(),
        ' зовёт ',
        you.get_colored_name(),
        ' на выходные поработать в мастерской — там, где ',
        chara.sex,
        ' и трудится: дедлайн додзинси уже на носу',
      ]);
      printButton(
        'Чтобы это не било по тренировкам, так тоже надо (согласиться)',
        1,
      );
      printButton(
        'Выходные — это выходные, никаких сверхурочных! (отказать)',
        2,
      );
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait(
          'У офисного работника ненависть к дедлайнам въелась в кости; а тренеру помочь подопечной — прямая обязанность!',
        );
        await printAndWait(
          'Наконец, когда воскресенье уже подходило к концу, вы закончили эту книгу.',
        );
        const love = get(`love:${chara.id}`),
          relation = get(`relation:${chara.id}:0`);
        if (love >= 50 && love * (get('flag:极端行为限制') || 1) >= relation) {
          await printAndWait([
            you.get_colored_name(),
            ' не помнит, когда именно уснул, — помнит только, что подопечная усадила ',
            you.get_colored_name(),
            ' за работу. Может, ',
            you.get_colored_name(),
            ' попросту не силён в таких вещах, а может, ',
            you.get_colored_name(),
            ' просто слишком устал. Так или иначе, когда ',
            you.get_colored_name(),
            ' проснулся, было уже раннее утро понедельника, и по всему телу разливалась ломота от перетруждения.',
          ]);
          println();
          await printAndWait([
            'Вдруг ',
            you.get_colored_name(),
            ' чувствует, что тело словно куда тяжелее обычного',
          ]);
          println();
          printButton(
            'Слишком устал? Тогда лучше отдыхать дальше (не смотреть, что не так)',
            1,
          );
          printButton(
            'Затекло, что ли? Стоит немного размяться (посмотреть, что не так)',
            2,
          );
          ret.push(await input());
          if (ret.at(-1) === 1) {
            await printAndWait([
              you.get_colored_name(),
              ' в полудрёме просыпается в мастерской ',
              chara.get_colored_name(),
              '; та уже приготовила для ',
              you.get_colored_name(),
              ' ужин, но ',
              you.get_colored_name(),
              ' всё равно чувствует нехватку боевого настроя…',
            ]);
          } else {
            await printAndWait([
              you.get_colored_name(),
              ' разминает тело и обнаруживает, что это ',
              chara.get_colored_name(),
              ' лежит рядом с ',
              you.get_colored_name(),
              '.',
            ]);
            await printAndWait([
              'г о л а я  л е ж и т  р я д о м  с ',
              you.get_colored_name(),
              ' — в о т  т а к',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' хотел было что-то сказать, но услышал слова, от которых в глазах потемнело, а поясницу свело',
            ]);
            await chara.say_and_wait([
              callname,
              ' уже проснулся? Тогда начнём второй заход❤️~',
            ]);
          }
        } else {
          if (love >= 50) {
            await printAndWait([
              'Книга — про сладкие будни тренера и ',
              chara.uma_sex_title,
              ', и её приняли на ура! Вот только почему-то лицо тренера немного… похоже на ',
              you.get_colored_name(),
              '? (ма-монеты +150)',
            ]);
          }
          if (relation >= 550) {
            await printAndWait([
              'После окончания продаж ',
              chara.get_colored_name(),
              ' хочет угостить ',
              you.get_colored_name(),
              ' десертом в благодарность ',
              you.get_colored_name(),
              '. (получено [эспрессо] ×5)',
            ]);
          }
        }
      }
      return ret;
    };
    f.title = 'Весёлые выходные начинаются!';
    return f;
  })(),
  kamen_rider: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {boolean} no_ero_item 是否没有性玩具
     */
    const f = async (you, no_ero_item) => {
      const ret = [];
      await printAndWait([
        'Проходя по торговой улице, замечаешь, что один магазинчик проводит акцию:',
      ]);
      await printAndWait(['«Наряжаемся в камен-райдеров и дарим тепло~»']);
      await printAndWait([
        'Хозяин объясняет: это затеяли, чтобы порадовать детишек, вот только костюмов хватает, а рук — нет.',
      ]);
      await printAndWait([
        'Они надеются, что так жизнь детей станет чуть богаче.',
      ]);
      await printAndWait([
        'Если поучаствовать, можно ещё и примерить подходящий костюм камен-райдера.',
      ]);
      printButton('«Время ещё есть, поучаствую.»', 1);
      printButton('«Ладно, ладно, шумные затеи не по мне.»', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          'Хозяин благодарит ',
          you.get_colored_name(),
          ' за старание, отводит ',
          you.get_colored_name(),
          ' в примерочную и предлагает ',
          you.get_colored_name(),
          ' самому выбрать себе костюм —',
        ]);
        printButton('«Морковный герой!» (репутация +15)', 1);
        printButton(
          '«Волшебница (в исполнении человека в маске)!» (ма-монеты +25)',
          2,
        );
        printButton(
          '«??? Какой-то странный реквизит» (репутация +20, боевой настрой части подопечных +1)',
          3,
          { disabled: no_ero_item },
        );
        ret.push(await input());
        switch (ret[1]) {
          case 1:
            await printAndWait([
              'Приняли на ура! Кажется, среди зрителей мелькнули и знакомые студентки?!',
            ]);
            break;
          case 2:
            await printAndWait([
              'Приняли на ура! Вот только костюм этот надевается с трудом…',
            ]);
            break;
          case 3:
            await printAndWait([
              'Обтягивающий костюм и несколько странных лоскутов надеваются с помощью продавца, а тот лоскут, что похож на трусы, оказывается, просто закрывает лицо?!',
            ]);
            await printAndWait([
              'Как талисман магазина работает отлично, но всё время кажется, что при этом что-то потеряно…',
            ]);
        }
      }
      return ret;
    };
    f.title = 'Камен-райдер (?)';
    return f;
  })(),
  big_sale: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you 玩家
     * @param {string} uma 马娘 or 马郎
     * @param {boolean} disabled 并无担当在育成中，或持有马币少于10
     */
    const f = async (you, uma, disabled) => {
      await printAndWait('По дороге — торговая улица…');
      await printAndWait('Что-то не так?');
      await you.say_as_passer_by_and_wait(
        'Хозяин овощного',
        'Смотрите-смотрите! Свежие фрукты и овощи — супер-распродажа!',
      );
      await printAndWait([you.get_colored_name(), ' с интересом подходит.']);
      await printAndWait(
        'На прилавке полно фруктов и овощей — свежие, качество отличное.',
      );
      await you.say_as_passer_by_and_wait(
        'Хозяин овощного',
        'Дешево и сердито, как насчёт купить?',
      );
      printButton(
        `Купить морковь (ма-монеты-10, скорость воспитываемых ${uma}+20)`,
        1,
        {
          disabled,
        },
      );
      printButton(
        `Купить чеснок (ма-монеты-10, выносливость воспитываемых ${uma}+20)`,
        2,
        { disabled },
      );
      printButton(
        `Купить картошку (ма-монеты-10, сила воспитываемых ${uma}+20)`,
        3,
        { disabled },
      );
      printButton(
        `Купить перец (ма-монеты-10, воля воспитываемых ${uma}+20)`,
        4,
        { disabled },
      );
      printButton(
        `Купить клубнику (ма-монеты-10, интеллект воспитываемых ${uma}+20)`,
        5,
        { disabled },
      );
      printButton('Пусто в кармане, прощайте', 6);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            you.get_colored_name(),
            ' решает купить свежей моркови по аппетиту растущей ',
            uma,
            '.',
          ]);
          await printAndWait([
            'С трудом дотащив мешок в академию, ',
            you.get_colored_name(),
            ' готовит для подопечной ',
            uma,
            ' морковный гамбург и сок — символ скорости.',
          ]);
          await printAndWait('Хвалят!');
          break;
        case 2:
          await printAndWait([
            you.get_colored_name(),
            ' решает купить свежего чеснока по аппетиту растущей ',
            uma,
            '.',
          ]);
          await printAndWait([
            'С трудом дотащив мешок в академию, ',
            you.get_colored_name(),
            ' готовит для подопечной ',
            uma,
            ' огромную миску чесночной рамэн — выносливость нереальная.',
          ]);
          await printAndWait('Хвалят!');
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            ' решает купить свежего картофеля по аппетиту растущей ',
            uma,
            '.',
          ]);
          await printAndWait([
            'С трудом дотащив мешок в академию, ',
            you.get_colored_name(),
            ' готовит для подопечной ',
            uma,
            ' пюре с рисом — полная мощь.',
          ]);
          await printAndWait('Хвалят!');
          break;
        case 4:
          await printAndWait([
            you.get_colored_name(),
            ' решает купить свежего перца по аппетиту растущей ',
            uma,
            '.',
          ]);
          await printAndWait([
            'Принеся перец в академию, ',
            you.get_colored_name(),
            ' готовит для подопечной ',
            uma,
            ' устрашающе острый мапо-тофу.',
          ]);
          await printAndWait('Хвалят!');
          break;
        case 5:
          await printAndWait([
            you.get_colored_name(),
            ' решает купить свежей клубники по аппетиту растущей ',
            uma,
            '.',
          ]);
          await printAndWait([
            'С трудом дотащив мешок в академию, ',
            you.get_colored_name(),
            ' готовит для подопечной ',
            uma,
            ' клубничное мороженое — «сразу видно, умное».',
          ]);
          await printAndWait('Хвалят!');
          break;
        case 6:
          if (!disabled) {
            await printAndWait([
              you.get_colored_name(),
              'Жаль, сейчас не нужно.',
            ]);
          } else {
            await printAndWait([' качает головой и уходит.']);
            await printAndWait([
              you.get_colored_name(),
              ' качает головой и уходит.',
            ]);
          }
      }
      return [ret];
    };
    f.title = 'Большая распродажа на торговой улице';
    return f;
  })(),
  justice: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} minoru 骏川缰绳
     * @param {PrintedSpan} call_301 一般角色对骏川缰绳的称呼
     */
    const f = async (you, chara, minoru, call_301) => {
      chara.name =
        chara.sex_code === 1 ? 'Странный ума-парень' : 'Странная умамусумэ';
      await printAndWait([
        you.get_colored_name(),
        'Идёшь по улице — и вдруг видишь впереди тренера, которого преследует ',
        chara.uma_sex_title,
        '.',
      ]);
      await printAndWait([
        'У тренера, похоже, уже кончаются силы, и бегущая позади ',
        chara.uma_sex_title,
        ' вот-вот его нагонит.',
      ]);
      await printAndWait([
        'Тут тренер замечает ',
        you.get_colored_name(),
        ' и, будто вспыхнув надеждой, бежит к ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Незнакомый тренер',
        'Умоляю, помогите мне, я не хочу обратно в то место… в тот подвал…',
      );
      await printAndWait([
        you.get_colored_name(),
        'Глядя на дошедшего до полного отчаяния незнакомого тренера и на быстро приближающуюся ',
        chara.uma_sex_title,
        ' с покрасневшими глазами, выбираешь:',
      ]);
      printButton('Помочь незнакомому тренеру', 1);
      printButton(`Помочь ${chara.name}`, 2);
      printButton('Сделать вид, что ничего не видел', 3);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            'Что тут произошло, неизвестно, но по принципу коллегиальной взаимовыручки ',
            you.get_colored_name(),
            ' с некоторым колебанием кивает.',
          ]);
          await chara.say_and_wait(
            'Вернёте мне моего тренера? Мне… нужно ещё кое-что ему сказать…',
          );
          await printAndWait([
            you.get_colored_name(),
            'Глядя на источающую опасность ',
            chara.uma_sex_title,
            ', украдкой сглатывает.',
          ]);
          await you.say_and_wait([
            'Э-э, всякое противоречие можно обсудить и решить спокойно, иначе я ведь позвоню ',
            call_301,
            '.',
          ]);
          await printAndWait([
            'Хотя ',
            you.get_colored_name(),
            ' и трясётся всем телом, ',
            you.get_colored_name(),
            ' бессознательно делает самый верный выбор — вытаскивает на свет ',
            minoru.get_colored_name(),
            '.',
          ]);
          await printAndWait([
            'И правда, ',
            you.get_colored_name(),
            ' видит, как стоящая перед ним ',
            chara.uma_sex_title,
            ' начинает колебаться.',
          ]);
          await chara.say_and_wait(
            'Тренер… тебе не сбежать. В следующий раз таких хороших коллег ты уже не встретишь…',
          );
          await printAndWait([
            'У стоящей впереди ',
            chara.uma_sex_title,
            ' взгляд такой острый, что, кажется, насквозь пронзит ',
            you.get_colored_name(),
            ', — будто она видит сквозь тело ',
            you.get_colored_name(),
            ' того тренера, что стоит у ',
            you.get_colored_name(),
            ' за спиной.',
          ]);
          await printAndWait([
            'А потом ',
            chara.sex,
            ' и вовсе разворачивается и уходит.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            'Вместе с тренером за спиной одновременно переводит дух.',
          ]);
          await you.say_as_passer_by_and_wait(
            'Незнакомый тренер',
            'Огромное вам спасибо, вот моя маленькая благодарность, примите, пожалуйста…',
          );
          await printAndWait([
            'Незнакомый тренер достаёт свой кошелёк и суёт его в руки ',
            you.get_colored_name(),
            ', а потом, не дожидаясь, пока ',
            you.get_colored_name(),
            ' опомнится, торопливо уходит прочь.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            'Хотелось было спросить, что случилось, но, похоже, случая уже не будет.',
          ]);
          println();
          await printAndWait('Получено 100 ма-монет!');
          break;
        case 2:
          await chara.say_and_wait(
            'Вернёте мне моего тренера? Мне… нужно ещё кое-что ему сказать…',
          );
          await printAndWait([
            you.get_colored_name(),
            'Глядя на источающую опасность ',
            chara.uma_sex_title,
            ', решительно не находит в себе желания ей перечить.',
          ]);
          await you.say_and_wait('Не буду вам мешать, я, пожалуй, пойду.');
          await printAndWait([
            'С этими словами ',
            you.get_colored_name(),
            ' тихонько отходит вбок, открывая стоящего позади незнакомого тренера.',
          ]);
          await printAndWait([
            'Странно ведущая себя ',
            chara.uma_sex_title,
            ' тут же хватает незнакомого тренера за руку и довольно жёстко тянет к себе.',
          ]);
          await chara.say_and_wait(
            'Посмел втихаря сбежать… С таким непослушным тренером придётся как следует «позаботиться»…',
          );
          await printAndWait([
            you.get_colored_name(),
            'Не смея вздохнуть, смотрит, как ',
            chara.uma_sex_title,
            ', будто ласкаясь, трётся щекой о руку тренера и утаскивает его прочь.',
          ]);
          await printAndWait([
            'Вдруг та ',
            chara.uma_sex_title,
            ', будто что-то вспомнив, достаёт какую-то вещь и бросает её ',
            you.get_colored_name(),
            '.',
          ]);
          await printAndWait([you.get_colored_name(), 'Суматошно ловит.']);
          await chara.say_and_wait(
            'Господин добрый тренер, только не обделяйте вниманием свою подопечную, хорошо? Хе-хе…',
          );
          await printAndWait([
            you.get_colored_name(),
            'Провожает взглядом две фигуры, что понемногу исчезают вдали, и всё никак не придёт в себя.',
          ]);
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            'Смелости взглянуть в лицо этой до жути странной сцене решительно нет, и потому суматошно достаёт телефон, делает вид, что говорит по нему, и тихонько ускользает.',
          ]);
          await printAndWait([
            'Только когда странная ',
            chara.uma_sex_title,
            ' и незнакомый тренер исчезают из виду у ',
            you.get_colored_name(),
            ', ',
            you.get_colored_name(),
            ' понемногу расслабляется.',
          ]);
          await printAndWait([
            'Хотя ',
            you.get_colored_name(),
            ' понимает: не помогать ни той, ни другой стороне — по сути всё равно что помочь странной ',
            chara.uma_sex_title,
            '.',
          ]);
          await printAndWait([
            'Но ',
            you.get_colored_name(),
            ' весь день думает об этом — и, кажется, оттого голова даже яснее обычного.',
          ]);
      }
      if (get('exp:0:监禁次数') === 0) {
        await printAndWait([
          'Позже ',
          you.get_colored_name(),
          ' невольно ловит себя на мысли: а не совершит ли он такую же ошибку и не придёт ли к такому же концу?',
        ]);
      }
      return [ret];
    };
    f.title = 'Не пройти мимо';
    return f;
  })(),
};
