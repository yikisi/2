/**
 * @file 爱丽数码 - 育成
 * @author 片手虾好评发售中!
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {number|undefined} japa_dir_rank 日本泥地德比名次
   */
  async race_start(digital, japa_dir_rank) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'уверенная в победе ',
          digital.uma_sex_title,
          ' -тян, напряжённая ',
          digital.uma_sex_title,
          ' -тян, с виду беспечная, а на деле серьёзная ',
          digital.uma_sex_title,
          ' -тян... фух... эй...',
        ]),
      () =>
        digital.say_and_wait([
          'Не-не-не, как ни думай, чтобы такая ',
          digital.uma_sex_title,
          ' как я выходила на скаковое поле — странно, да?',
        ]),
    ];
    if (era.get('mark:19:淫纹') > 0) {
      buffer.push(() =>
        digital.say_and_wait(
          'У Агнес Диджитал скаковой костюм вроде с открытым животом?! Пропала-пропала, прятать? Как прятать? Получится спрятать?',
        ),
      );
    }
    if (japa_dir_rank <= 3) {
      buffer.push(() =>
        digital.say_and_wait(
          'Я как участница пробегу заезд, достойный соперниц.',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  race_end_win: (() => {
    const title = 'Победа в скачке';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     */
    const f = async (digital, you) => {
      await digital.say_and_wait(
        'Кава-ва-ва-ва-ва! Каждый ребёнок сияет самым тоотои светом!',
      );
      await era.printAndWait([
        'После заезда ',
        digital.get_colored_name(),
        ' так бодра, будто и не пробежала большой заезд, и как всегда проявила ',
        digital.sex,
        ' свой пыл.',
      ]);
      await digital.say_and_wait([
        'Вместе с ',
        digital.uma_sex_title,
        ' -тян бежать в заезде... правда так радостно...!',
      ]);
      await digital.say_and_wait(
        'И ещё взяла первое место! Правда приму это с полной благодарностью!',
      );
      era.printButton('「Ты сияешь ярче всех!」', 1);
      era.printButton('「В следующем заезде тоже выкладывайся!」', 2);
      if ((await era.input()) === 1) {
        await digital.say_and_wait([
          'Э? Э-э-это как возможно?! Столько ',
          digital.uma_sex_title,
          ', а я всего лишь будто воздух... и вдруг смотрят на меня?',
        ]);
        await era.printAndWait('Эту застенчивость тоже видали немало.');
        await you.say_and_wait('Ещё бы, ты же моя любимая лошадь!');
        await digital.say_and_wait('У-у-у...');
        await digital.say_and_wait('От похвалы правда трудно успокоиться...');
        await era.printAndWait('И конечно, каждый раз смотреть не надоест.');
      } else {
        await digital.say_and_wait(
          'Хорошо! Чтобы и в следующем заезде держать этот настрой, я стану сильнее! Power!',
        );
        await digital.say_and_wait([
          'Стать сильнее и в ещё более жарком заезде увидеть ещё ярче сияющую ',
          digital.uma_sex_title,
          ' -тян!',
        ]);
        await era.printAndWait('Вот этот настрой! Давай так и продолжим!');
        await digital.say_and_wait('Э! Э! Мм!');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'Призовое место в скачке';
    /** @param {CharaTalk} digital 爱丽数码 */
    const f = async (digital) => {
      await digital.say_and_wait(
        'Ум-ум, вот оно что, ваше сияние всё ещё немного недосягаемо...',
      );
      await era.printAndWait([
        'Не сумевшая победить ',
        digital.get_colored_name(),
        ' после заезда так и не явила сильной потери духа...',
      ]);
      await digital.say_and_wait(
        'У-у... всё-таки мне не следовало появляться здесь как фанатке...',
      );
      await era.printAndWait('Эй-эй-эй.');
      era.printButton(
        `「В этот раз удалось полюбоваться на ${digital.uma_sex_title}?」`,
        1,
      );
      era.printButton(
        `「В следующий раз постараюсь с самого переда полюбоваться на ${digital.couple_title}!」`,
        2,
      );
      if ((await era.input()) === 1) {
        await digital.say_and_wait('Э! Точно! Диджитал, сможешь!');
        await era.printAndWait('Что это значит?');
      } else {
        await digital.say_and_wait([
          'Если буду ещё впереди, то точно смогу...! Увидеть ещё более прекрасных ',
          digital.uma_sex_title,
          ' -тян!',
        ]);
        await era.printAndWait([
          'Словом, ',
          digital.get_colored_name(),
          ' воспряла духом!',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'Make Debut начинается!';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait([
        'М-м, меня слышно? Я ',
        digital.get_colored_name(),
        ', в пору, когда распускаются молодые листья, как дела у всех? Сейчас я стою в круге представления Make Debut, а вокруг меня...',
      ]);
      await digital.say_and_wait([
        'Диджитал... Диджитал... вокруг ',
        digital.uma_sex_title,
        ' -тян... точнее, прямо внутри ',
        digital.uma_sex_title,
        ' -тян!',
      ]);
      await digital.say_and_wait([
        'Сейчас... умру от моэ... ',
        callname,
        '! Видишь?! Вокруг столько ',
        digital.uma_sex_title,
        ' -тян!',
      ]);
      await era.printAndWait([
        'Вижу, вокруг ',
        digital.uma_sex_title,
        ' одни дрожат от напряжения, у других глаза горят, но среди них самая особенная...',
      ]);
      await era.printAndWait([
        'Подперев щёку, почти опасным взглядом любуется всем этим — ',
        digital.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait([
        '*хлюп-хлюп*, я к тому, ',
        digital.couple_title,
        ' ещё куда может зайти?! Детектор тоотои уже зашкалил, а я вдруг смогла затесаться сюда!',
      ]);
      await digital.say_and_wait(
        'Ха~, всё, умру от тоотои... Диджитал... сейчас станет пеплом...',
      );
      await you.say_and_wait('Сейчас ведь заезд!');
      await digital.say_and_wait(
        'Ва! Точно! Сейчас не время возноситься на небеса!',
      );
      await digital.say_and_wait([
        'Сейчас я тоже стою плечом к плечу с ',
        digital.uma_sex_title,
        ' -тян, и нельзя, чтобы моё присутствие бросило тень на ',
        digital.couple_title,
        '!',
      ]);
      await digital.say_and_wait(
        'Я постараюсь! Энергия полна, проверка завершена! Функция тоотои работает на 100%!',
      );
      await digital.say_and_wait([
        'Глаза Диджитал — плёнка, нужно все улыбки и слёзы ',
        digital.uma_sex_title,
        ' -тян отпечатать внутри!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ', с решимостью направилась на скаковое поле.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'Победа в Debut';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} hyac_sta 风信子锦标（上色版名字）
     */
    const f = async (digital, you, callname, hyac_sta) => {
      await era.printAndWait([
        'В Debut, ',
        digital.get_colored_name(),
        ' блестяще взяла первое в этом заезде, и потом...',
      ]);
      await era.printAndWait([
        'Казалось, сейчас ',
        digital.get_colored_name(),
        ' сгорит от священности и, как всегда, ',
        digital.sex,
        ' изливает любовь, но на вид ',
        digital.sex,
        ' вдруг затихла, ',
        digital.sex,
        ' тоже такая бывает...',
      ]);
      await digital.say_and_wait('...это и начало, и вершина...');
      await digital.say_and_wait(
        'Первый вылет из ворот, время, которое не удержать, переплетённые яшмовые ноги...',
      );
      await digital.say_and_wait(
        'Пот во все стороны, мозг пустой от тревоги, но вместе с криками трибун всё сходит на нет — остаётся лишь результат на табло...',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ', и ведь так точно рисует чувства.',
      ]);
      await digital.say_and_wait(
        'Слишком! Слишком трогает! Что ни возьми — слёзы сами, да?! Да?!',
      );
      era.printButton('「Да, первая скачка, Debut — поздравляю.」', 1);
      await era.input();
      await digital.say_and_wait([
        'А-а-а, когда бежала, Диджитал разнесло от чувств других ',
        digital.uma_sex_title,
        ' -тян, я, Диджитал...',
      ]);
      await digital.say_and_wait(
        'Я и правда недооценила Debut! Debut — там все победительницы! Все!',
      );
      await digital.say_and_wait(
        'В таком ворохе чувств кто угодно уйдёт с полной корзиной, да?',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ', правда здорово: и шаг в скачке, и слова после — всё выдаёт, как ',
        digital.sex,
        ' любит скачки.',
      ]);
      await digital.say_and_wait([
        callname,
        ', сегодняшняя скачка — только порог! Дальше ещё куча скачек! И встретишь ещё больше ',
        digital.uma_sex_title,
        ' -тян!',
      ]);
      await you.say_and_wait([
        'Да, впереди ещё много ',
        digital.uma_sex_title,
        ' ждут тебя.',
      ]);
      await digital.say_and_wait(
        'Как же здорово! Я переступила порог рая, правда нечаянно переступила! Всегда думала, что это не моя территория!',
      );
      await digital.say_and_wait([
        'В следующий раз я снова хочу увидеть таких ',
        digital.uma_sex_title,
        ' -тян!',
      ]);
      await you.say_and_wait('Тогда в следующий раз пробежим turf, как?');
      await digital.say_and_wait(
        'Нн? Э, в этот раз dirt, а в следующий сразу turf... прости, я немного зарвалась: так радостно, что из головы всё улетело за девятое небо.',
      );
      await digital.say_and_wait(
        'Я ещё хочу пробежать dirt и ещё раз вдохнуть эту атмосферу!',
      );
      await era.printAndWait([
        'После разговора решаете: следующая скачка — новогодняя ',
        hyac_sta,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_42: (() => {
    const title = ' Просмотр Mile Championship';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (
      digital,
      doto,
      halo,
      you,
      callname,
      call_58,
      call_61,
      mile_cha,
    ) => {
      await era.printAndWait([
        'Хотя ',
        digital.get_colored_name(),
        ' ещё только первый год после Debut: даже если хочет бежать, выбора мало, но для других ',
        digital.uma_sex_title,
        ' сейчас самая горячая пора.',
      ]);
      await era.printAndWait([
        'На этот раз ',
        you.get_colored_name(),
        ' и ',
        digital.get_colored_name(),
        ' пришли смотреть ',
        mile_cha,
        '.',
      ]);
      await era.printAndWait([
        'В этом заезде ',
        digital.get_colored_name(),
        ' яростно станит ',
        digital.uma_sex_title,
        ', одну из них — ',
        halo.get_colored_name(),
        ' тоже бежит.',
      ]);
      await digital.say_and_wait([callname, '! Сюда-сюда!']);
      await era.printAndWait([
        'Занявшая хорошее место ',
        digital.get_colored_name(),
        ' машет ',
        you.get_colored_name(),
        ', и ',
        you.get_colored_name(),
        ' кое-как протискивается внутрь.',
      ]);
      await digital.say_and_wait(['Сейчас начнётся! Это ', call_61, ' о!']);
      await era.printAndWait('И вот...');
      await you.say_as_passer_by_and_wait('Комментатор', [
        'А следом ',
        halo.get_colored_name(),
        '! Снаружи догоняет, ',
        halo.get_colored_name(),
        ' — вторая!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        'А следом ',
        halo.get_colored_name(),
        '! Снаружи догоняет, ',
        halo.get_colored_name(),
        ' — вторая!',
      ]);
      await era.printAndWait([
        'Второе место... для ',
        halo.get_colored_name(),
        ' по недавним результатам очень даже неплохо.',
      ]);
      await halo.say_and_wait(
        'Фанаты мои по всей стране, жаль, что не победила, но...',
      );
      await halo.say_and_wait(
        'Я непременно прорву оковы и дальше пойду по пути sprint и mile — вот он, новый маршрут King! О! Хо-хо-хо!',
      );
      await digital.say_and_wait(
        'Уо-о-о-о... как же, до слёз священно! Выбрать новый путь — сколько для этого храбрости, сколько решимости!',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' рыдает навзрыд от чувств и рассказывает ',
        you.get_colored_name(),
        ' про ',
        halo.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' изначально хотела доказать свой талант и потому держалась Classic ',
        digital.uma_sex_title,
        ', но в этом году ',
        digital.sex,
        ' сменила маршрут и поставила новую цель.',
      ]);
      await digital.say_and_wait(
        'Какой бы ни был маршрут — им можно доказать свою силу!',
      );
      await era.printAndWait([
        'После того как ',
        digital.get_colored_name(),
        ' дебютировала, у ',
        digital.get_colored_name(),
        ' мысли сильно изменились: куда лучше чувствует и трассу, и всё после финиша — уже как гонщица.',
      ]);
      await era.printAndWait([
        'Именно надеясь, что усилия ',
        halo.get_colored_name(),
        ' окупятся, ',
        digital.get_colored_name(),
        ' пришла смотреть гонку вживую; когда у ',
        halo.get_colored_name(),
        ' наконец свет в конце, ',
        digital.sex,
        ' плачет громче всех.',
      ]);
      era.drawLine({ content: 'По дороге назад' });
      await era.printAndWait([
        'У маленькой реки рядом со школой — с опущенной головой бежит по грунту берега ',
        digital.uma_sex_title,
        '.',
      ]);
      await digital.say_and_wait(['Ооо! Это ', call_58, ' ……']);
      await era.printAndWait([
        doto.get_colored_name(),
        ' выглядит подавленной и всё равно тренируется здесь……',
      ]);
      await era.printAndWait([
        'Мм…… ',
        doto.get_colored_name(),
        ' всегда такая была?',
      ]);
      await era.printAndWait([
        doto.get_colored_name(),
        ' недавно с плохими результатами; как тренер ',
        you.get_colored_name(),
        ' хорошо знает: ',
        doto.sex,
        ' ещё не в «настоящем» периоде, но ',
        doto.sex,
        ' сама вроде не замечает.',
      ]);
      await digital.say_and_wait(
        'Настоящий период…… если сам не знаешь — правда больно……',
      );
      await digital.say_and_wait([
        'Раньше я, наверное, видела бы только старания ',
        call_58,
        ', а сейчас я……',
      ]);
      await digital.say_and_wait('Хотя бы знать это — уже спокойнее……');
      await you.say_and_wait([
        'Что, не пойдёшь сказать? ',
        doto.sex,
        ' же рядом.',
      ]);
      await digital.say_and_wait(
        'Э? Эй-эй-эй…… я же просто фанат? Фанат не даёт советы идолу! Менеджер выгонит!',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' очень хочет помочь, но боится перейти черту.',
      ]);
      await digital.say_and_wait(
        'Реалистичный пример: вот видишь плохо идущую лапшичную — и утешаешь хозяина, что «время ещё не пришло»?!',
      );
      await you.say_and_wait(
        'Не-не-не, тут как раз есть основание…… и Диджитал, ты всё ещё только фанат?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' напоминает ',
        digital.get_colored_name(),
        ',',
        digital.get_colored_name(),
        ': уже не только фанат — она гонщица на трассе.',
      ]);
      await digital.say_and_wait([
        'А, мм, ну…… хоть я и дебютировала, но между ',
        call_58,
        ' и мной пропасть не перепрыгнуть……',
      ]);
      await you.say_and_wait([
        'Ты и ',
        digital.sex,
        ', и ',
        digital.couple_title,
        ' — разрыв меньше, чем ты думаешь!',
      ]);
      await you.say_and_wait(
        'Именно ежедневные наблюдения дали тебе увидеть проблему Ното, но из-за этого ты ставишь себя в стороне — будто не часть этого.',
      );
      await era.printAndWait([digital.get_colored_name(), ' опускает голову.']);
      await digital.say_and_wait(
        'Мм-мм…… хоть так, но сейчас ты хочешь, чтобы я пошла к идолу — всё ещё как-то……',
      );
      await digital.say_and_wait('Чувствую, у меня появились страшные мысли……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' в итоге решает помочь ',
        doto.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        digital.sex,
        ' прыгает через перила берега, скользит вниз и оказывается перед Ното — какой выход.',
      ]);
      await digital.say_and_wait([
        'Т-т-т-т-то! ',
        call_58,
        '! Можно чуть сказать?',
      ]);
      await doto.say_and_wait('Эээээ, ч-ч-что?');
      await digital.say_and_wait('Настоящий период, знаешь!');
      await doto.say_and_wait('Эээ? Что это?');
      await digital.say_and_wait('Так называемый настоящий период — это……');
      await era.printAndWait('Смотреть с берега — вроде нормально?');
      await digital.say_and_wait(
        'И ещё время настоящего периода, обычно около……',
      );
      await era.printAndWait('Мм, довольно подробно.');
      await digital.say_and_wait(
        'Да-да, если хочешь тренироваться под настоящий период, следи за шагом……',
      );
      await era.printAndWait(
        'Оо, то, чего даже в экзамене на тренера почти нет.',
      );
      await digital.say_and_wait(
        '……В период до настоящего — тренировки не впустую,',
      );
      await digital.say_and_wait(
        'если сейчас подкачать бёдра — в настоящем периоде рванёшь ростом!',
      );
      await era.printAndWait([
        'Нет, это уже свежие исследования: ',
        you.get_colored_name(),
        ' помнит — недавно в «Ежемесячнике тренера»……',
      ]);
      era.drawLine({ content: 'Когда вернулись в тренировочную' });
      await digital.say_and_wait([
        'Ва-ва-ва-ва! Провалила! Реальная, в глазах ',
        call_58,
        '…… невольно……',
      ]);
      await era.printAndWait([
        'На деле ',
        doto.get_colored_name(),
        ' потом слушала в полутумане, но с берега видно: ',
        digital.sex,
        ' снова ожила.',
      ]);
      await era.printAndWait([digital.get_colored_name(), ' наверняка знает.']);
      await you.say_and_wait([
        'Но Ното ',
        digital.sex,
        ' же сочла, что получила много?',
      ]);
      await era.printAndWait([
        '……',
        digital.get_colored_name(),
        ' только прижимает руки к груди.',
      ]);
      await era.printAndWait([
        'Первый такой разговор с оси-идолом — для ',
        digital.get_colored_name(),
        ' огромное давление.',
      ]);
      await era.printAndWait([
        '……Хотя ',
        digital.get_colored_name(),
        ' с пулемётным темпом речи — не опасный ли ',
        digital.sex,
        ' человек на деле?',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Цели на Новый год';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} daiwa 大和赤骥
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, teio, daiwa, doto, you, callname) => {
      await era.printAndWait([
        'Новый год: ',
        digital.get_colored_name(),
        ' встречает решающий для ',
        digital.uma_sex_title,
        ' Classic Year.',
      ]);
      await era.printAndWait([
        'Хотя ',
        digital.sex,
        ' будто всё ещё горит от того, что к Classic Year ',
        digital.uma_sex_title,
        ' уже можно подойти вживую.',
      ]);
      await digital.say_and_wait(['С Новым годом, ', callname, '!']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' просто поздравила ',
        you.get_colored_name(),
        ' с Новым годом.',
      ]);
      await era.printAndWait(
        'В тренировочную с самого утра — какая старательность.',
      );
      await digital.say_and_wait(
        'Как год прошёл? На CM удалось урвать пару хороших книг?',
      );
      await you.say_and_wait('Э? CM? Книги?');
      await digital.say_and_wait(
        'А…… мм, если нет — забудь, что я сказала, просто бред Диджитал.',
      );
      await digital.say_and_wait(
        'Но! Скачки этого года! Вот тут есть о чём говорить! В Classic Year скачек как звёзд!',
      );
      await era.printAndWait([
        'Действительно, ',
        digital.get_colored_name(),
        ' уже может бежать Classic, выбора куда больше прошлогоднего: большинство G1 открывается только в Classic Year.',
      ]);
      await digital.say_and_wait([
        'А, вспомнила прошлый год: я слишком зарвалась, будто забыла, с чего начинала — быть достойным фанатом ',
        digital.uma_sex_title,
        '?!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' кажется, ',
        digital.sex,
        ' всё ещё тяготится тем разговором с ',
        doto.get_colored_name(),
        ' ……',
      ]);
      era.println();
      await digital.say_and_wait(
        'Так что! В этом году я снова к истоку! Снова стану фанатом! Это принцип!',
      );
      await era.printAndWait([
        'Но пока выхода нет: если ',
        digital.get_colored_name(),
        ' хочет осознать, ещё нужно……',
      ]);
      await digital.say_and_wait([
        callname,
        '! Можешь дать совет! Как станить?',
      ]);
      era.print([you.get_colored_name(), ' выбирает:']);
      era.printButton(
        `Служить ${digital.uma_sex_title} -тян (скорость +10)`,
        1,
      );
      era.printButton('Читать (выносливость +10)', 2);
      era.printButton('Учиться подражанием (очки навыков +20)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait([
            'Как обычно, служить ',
            digital.uma_sex_title,
            ' -тян — разве не здорово?',
          ]);
          await digital.say_and_wait([
            'Ооо! Отличный совет: кстати, в последнее время и в скачках, и в разговорах я всё задевала ',
            digital.uma_sex_title,
            ' -тян……',
          ]);
          await digital.say_and_wait(
            'Поэтому! И правда пора к истоку! Пора один раз очистить святую землю!',
          );
          await era.printAndWait('Очистить?!');
          await era.printAndWait(
            'А это просто прибрать Скаковую трассу, хорошо-хорошо.',
          );
          await era.printAndWait([
            'После уборки первой на траву как раз вышла ',
            daiwa.get_colored_name(),
            ', и глядя, как ',
            daiwa.get_colored_name(),
            ' бодро бежит по траве, ',
            digital.get_colored_name(),
            ' тоже полна настроя.',
          ]);
          break;
        case 2:
          await you.say_and_wait(
            'Тогда как насчёт почитать те книги, что ты говорила, купила?',
          );
          await digital.say_and_wait(
            'Э! Это да…… они хоть и короткие, ещё раз пробежаться не помешает!',
          );
          await digital.say_and_wait([
            'Впитать энергию разных ',
            digital.uma_sex_title,
            ' -тян — так в новом году хватит сил на спринт!',
          ]);
          await era.printAndWait([
            'Так ',
            digital.get_colored_name(),
            ' сегодня ушла в общежитие читать. Снова увидев ',
            digital.get_colored_name(),
            ' с лицом полной погружённости, ',
            you.get_colored_name(),
            ' знает, что ',
            digital.sex,
            ' хорошо отдохнула.',
          ]);
          break;
        case 3:
          await you.say_and_wait([
            'Подражать другим ',
            digital.uma_sex_title,
            ' и с них набрать навыки — как?',
          ]);
          await digital.say_and_wait(
            'Точно! Подражать оси и учить навыки! В этом и есть миссия наша!',
          );
          await digital.say_and_wait('Ооо! О?');
          await era.printAndWait([
            'Пришла на трибуну тренировочного поля, вспоминая, как раньше с трибуны смотрела навыки ',
            digital.uma_sex_title,
            '……',
          ]);
          await digital.say_and_wait('Далее смотрите! Teio Step!');
          await era.printAndWait(
            'Ооо, это тот самый знаменитый Teio Step! Навык, что высоким коленом и большой амплитудой растит шаг!',
          );
          await era.printAndWait('Ооо, кажется, и оригинал явилась.');
          await era.printAndWait([teio.get_colored_name(), '? Когда успела?']);
          await digital.say_and_wait('Ува-ва-ва! Я не хотела обидеть!');
          await era.printAndWait([digital.get_colored_name(), '! Вяну!']);
          await era.printAndWait([
            'Но потом ',
            digital.get_colored_name(),
            ' и правда переняла приём у ',
            teio.get_colored_name(),
            '.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_hyac_sta: (() => {
    const title = 'Hyacinth Stakes начинается!';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} nikk_hai 日经新春杯（上色版名字）
     */
    const f = async (digital, doto, you, callname, nikk_hai) => {
      await era.printAndWait([
        'Недавно в ',
        nikk_hai,
        ', ',
        doto.get_colored_name(),
        ' взяла второе.',
      ]);
      await era.printAndWait([
        'Хотевшая просто поздравить в подземном проходе ',
        doto.get_colored_name(),
        ', ',
        digital.get_colored_name(),
        ', всё ещё мучившаяся от прежнего перехода черты ',
        digital.get_colored_name(),
        ', неожиданно получила благодарность ',
        doto.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Решение, что шло против обычного фаната, начало давать плоды — ',
        digital.get_colored_name(),
        ' уже не понимает.',
      ]);
      await era.printAndWait(
        'Способ решить — гонка; сегодняшняя — та, что запланировали раньше.',
      );
      await era.printAndWait('OP-заезд, даже не G3 — мелочь.');
      await era.printAndWait([
        'В паддоке ',
        digital.get_colored_name(),
        ' впивается взглядом в других ',
        digital.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' — руки как когти пляшут в воздухе, в зрачках полно 「вкусно」……',
      ]);
      era.printButton('「Диджитал, только не прыгай на них.」', 1);
      await era.input();
      await digital.say_and_wait('Нет, раньше тоже не прыгала.');
      await digital.say_and_wait(['Кстати, ', callname, ', как-то странно.']);
      await digital.say_and_wait(
        'Атмосфера очень суровая, а «канон-вкус» тот же……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' видит: на лицах каждой ',
        digital.uma_sex_title,
        ' — готовность; эта эмоция не отпускает ',
        digital.get_colored_name(),
        ', но атмосфера не даёт ',
        digital.get_colored_name(),
        ' высказаться как раньше.',
      ]);
      await digital.say_and_wait([
        'Здесь должно быть нечто чище — почему ',
        digital.uma_sex_title,
        ' «канон»……',
      ]);
      await you.say_and_wait('Хочешь… коснуться?');
      await digital.say_and_wait('Э! Это же непочтительно!');
      await digital.say_and_wait('Но хочу наблюдать ближе, чем раньше……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' всё ещё ставит себя зрителем, но ',
        digital.sex,
        ' смотрит иначе, чем раньше.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hyac_sta_win: (() => {
    const title = 'Победа в Hyacinth Stakes';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} diamond_lord 钻石君主（爱丽数码剧情 NPC）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} nhk_cup NHK英里杯（上色版名字）
     */
    const f = async (digital, diamond_lord, you, callname, nhk_cup) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' красиво финиширует — сказать «без интриги»……',
      ]);
      await digital.say_and_wait('Фу…… ха…… Диджитал я, смогла……');
      await digital.say_and_wait([
        'Пересекла финиш и увидела… блеск ',
        digital.uma_sex_title,
        ' -тян!',
      ]);
      await digital.say_and_wait([
        'Неожиданно! Думала, канон — это решимость бега ',
        digital.uma_sex_title,
        ' -тян……',
      ]);
      await digital.say_and_wait([
        'Но желания, что ',
        digital.uma_sex_title,
        ' -тян вкладывают в гонку, глубже…… если продолжу бегать — пойму, почему ',
        digital.couple_title,
        ' так сияют!',
      ]);
      await digital.say_and_wait('Дальше пушить с принципом «не мешать»!');
      await you.say_as_passer_by_and_wait('???', 'Уууу…… уу……');
      await you.say_as_passer_by_and_wait('???', 'Уаааааа!');
      await digital.print_and_wait([
        'Недалеко — рыдания какой-то ',
        digital.uma_sex_title,
        '.',
      ]);
      await digital.say_and_wait([
        'Та ',
        digital.uma_sex_title,
        '… помню, только что……',
      ]);
      await digital.print_and_wait([
        'Если не ошибаюсь, ',
        digital.sex,
        ' как раз шестая, вне табло.',
      ]);
      await you.say_as_passer_by_and_wait(
        '???',
        'Табло…… даже табло…… как тогда graded……!',
      );
      await digital.print_and_wait([
        'Всегда смотревшая на ',
        digital.uma_sex_title,
        ', ',
        digital.get_colored_name(),
        ' сейчас не смеет смотреть — отворачивается.',
      ]);
      await digital.print_and_wait([
        'В подземном проходе ',
        digital.get_colored_name(),
        ' избегает других ',
        digital.uma_sex_title,
        ' — не прежняя дистанция, а нарочно не смотреть.',
      ]);
      await digital.say_and_wait('……');
      await digital.print_and_wait([
        'И всё же впереди две ',
        digital.uma_sex_title,
        ' — вторая и третья той гонки, ',
        digital.uma_sex_title,
        '.',
      ]);
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' хочет обойти, и……',
      ]);
      const cache = diamond_lord.name;
      diamond_lord.name = `${digital.uma_sex_title}A`;
      await diamond_lord.say_and_wait('Уууу……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        'Нет-нет, ты вторая? Чего плачешь?',
      );
      await diamond_lord.say_and_wait(
        'Ведь, ведь, это была дуэль с тобой, сэмпай…… всегда думала: сразиться и превзойти тебя……',
      );
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        'Так ты же достигла? Ты правда сильна, я уже почти старая кость～',
      );
      await diamond_lord.say_and_wait([
        '……Я всё думала…… стоит только превзойти сэмпай…… и смогу…… но ',
        digital.sex,
        ' правда так сильна…… рукой не достать……',
      ]);
      diamond_lord.name = cache;
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        diamond_lord.get_colored_name(),
        '! Ты старалась! Выложилась!',
      ]);
      await diamond_lord.say_and_wait('Но……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        'Каковы бы ни были наши места — Twinkle Series идёт дальше, она нас не ждёт!',
      );
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        'Ты сильнее меня, и у тебя потенциал: обязательно graded! Обязательно G1!',
        ' Заставь ',
        digital.couple_title,
        ' открыть глаза!',
      ]);
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        'Сцена победителей — пойдём вместе?',
      );
      await digital.print_and_wait([
        digital.uma_sex_title,
        ' B подняла руку, и ',
        digital.sex,
        ' вытерла слёзы подруги.',
      ]);
      await diamond_lord.say_and_wait('!');
      await digital.print_and_wait([
        digital.sex,
        ' шмыгнула носом и резко кивнула.',
      ]);
      await digital.print_and_wait([
        'Глядя, как ',
        digital.couple_title,
        ' уходят, держась за руки, ',
        digital.get_colored_name(),
        ' на этот раз так и не смогла вымолвить ни слова про 「шип попал」.',
      ]);
      era.drawLine();
      await digital.say_and_wait('……');
      await you.say_and_wait('Диджитал, ты в порядке?');
      await digital.say_and_wait('Враньё… не вмешиваться и всё такое…');
      await digital.say_and_wait('Такое просто невозможно.');
      await digital.say_and_wait(
        'Стоит выйти на скачку — и будут победители, будут проигравшие… даже проигрыш священен, все сплошь победители — и как у меня только язык повернулся такое сказать…',
      );
      era.printButton(
        '「Именно связи, что рождаются, когда вы всходите на скаковую дорожку, и делают вас такими священными. Ты же всегда это знала?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        '  в этой скачке, кажется, заглянула в тайну, отчего ',
        digital.uma_sex_title,
        ' священны и отчего велики.',
      ]);
      await era.printAndWait([
        'Но ',
        digital.sex,
        ' вдруг поняла: ',
        digital.sex,
        ' как соперница вышла на дорожку, а сама держала себя зрительницей — и безжалостно забрала чемпионство.',
      ]);
      await era.printAndWait('Это крайне неуважительно.');
      await era.printAndWait([
        'Поэтому ',
        digital.get_colored_name(),
        ', после сцены победителей, когда вернулись в тренировочную…',
      ]);
      await digital.say_and_wait([
        callname,
        ', я хочу поговорить о том, что дальше. Сейчас скажу совсем не в своём духе, можно??',
      ]);
      await you.say_and_wait('Конечно.');
      await digital.say_and_wait(
        'Я считаю: как ни крути, я должна выйти… на G1.',
      );
      await digital.say_and_wait(
        'Такое чувство, что перед всеми вами, кто был на дорожке, я совершила нечто, за что полагается догэдза на раскалённой железной плите',
      );
      await digital.say_and_wait(
        'Раз так — придётся. Выйти, победить G1 и заставить остальных признать: Диджитал сильна.',
      );
      await era.printAndWait([
        'Хотела доказать, доказать, что ',
        digital.sex,
        ' и правда достаточно сильна. Всем, кого обошла ',
        digital.sex,
        ' — ',
        digital.uma_sex_title,
        ' — нужен ответ.',
      ]);
      await digital.say_and_wait([
        'И ещё хочу проверить, как ',
        digital.uma_sex_title,
        ' -тян вообще выходят на G1!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ' вместе наметили следующую скачку на первую половину мая — ',
        nhk_cup,
        '.',
      ]);
      await digital.say_and_wait([
        'Я выйду на скачку, и тогда — ',
        digital.couple_title,
        ' побегут вместе со мной!',
      ]);
      await era.printAndWait([
        'Случайный эпизод, но исход не случаен. Печаль, что живёт в победе и поражении, — толкнула ',
        digital.get_colored_name(),
        '  к будущему.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_nhk_cup: (() => {
    const title = 'Старт NHK Mile Cup!';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     */
    const f = async (digital, you) => {
      await digital.say_and_wait('Ооооооо! И правда, совсем другое дело!');
      await era.printAndWait('G1, скачка при аудитории за сто тысяч…');
      await era.printAndWait(
        'Даже если смотреть часто, ощущение, когда стоишь в паддоке, всё равно совсем свежее.',
      );
      await era.printAndWait(
        'Атмосфера ста тысяч зрителей бьёт под дых, но настоящая бомба — это у бегуний…',
      );
      await digital.say_and_wait(
        'Ч-ч-ч-что это такое! Эта аура, это давление, будто область!',
      );
      await digital.say_and_wait('Капец! Сайко! Можно сказать — священосайко!');
      await you.say_and_wait('Взвинтило, да! Значит, как раз в ударе!');
      await digital.say_and_wait('Уже, уже ничего не соображаю, мозг, уже…');
      await digital.say_and_wait(
        'Красиво, страшно, такое чувство, что разрешение сейчас добьёт 4K, даже стоять тут уже тяжело…',
      );
      await digital.say_and_wait([
        'Но я разгадаю, почему ',
        digital.uma_sex_title,
        ' -тян так священны!',
      ]);
      await digital.say_and_wait(
        'Даже если… я от священности испарюсь в пепел… ха?!',
      );
      await era.printAndWait([
        'Что такое, ',
        digital.get_colored_name(),
        ' вдруг прервалась дрожью.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        '  огляделась и затем…',
      ]);
      await digital.say_and_wait('Будто кто-то смотрит на меня?');
      await era.printAndWait([
        'Что до бегуний, ',
        you.get_colored_name(),
        '  видит ясно: никто не смотрит на ',
        digital.get_colored_name(),
        ' , значит, это тянется с трибун.',
      ]);
      await digital.say_and_wait(
        'Вот как, я тоже… среди тех, кого станю, вижу сон, что меня станят…',
      );
      await digital.say_and_wait('Нельзя больше так легкомысленно!');
      await era.printAndWait([
        'На скачке такого калибра ',
        digital.get_colored_name(),
        '  наверняка вытащит наружу то, на что способна ',
        digital.sex,
        '.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  nhk_cup_win: (() => {
    const title = 'Победа в NHK Mile Cup';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} callname_15 好歌剧对玩家的称呼
     * @param {PrintedSpan} o_call_di 好歌剧对爱丽数码的称呼
     * @param {PrintedSpan} o_call_do 好歌剧对名将怒涛的称呼
     * @param {PrintedSpan} do_call_di 名将怒涛对爱丽数码的称呼
     * @param {PrintedSpan} takz_kin 宝冢纪念（上色版名字）
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      call_15,
      call_58,
      callname_15,
      o_call_di,
      o_call_do,
      do_call_di,
      takz_kin,
      japa_dir,
    ) => {
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Это ',
        digital.get_colored_name(),
        '!',
        digital.get_colored_name(),
        '!',
        digital.sex,
        ' нам показала: хоть трава, хоть грязь — ',
        digital.sex,
        ' всё нипочём!',
      ]);
      await era.printAndWait([
        'Пробившая финиш ',
        digital.get_colored_name(),
        ', даже ноги уже заплетаются.',
      ]);
      await digital.say_and_wait(
        'Ха… фу… хорошо… ни капли энергии не осталось… даже на стан сил нет… выложилась, полностью…!',
      );
      await digital.say_and_wait(
        'А-а-а, солнце… такое яркое… небо… такое… далёкое…',
      );
      await digital.say_and_wait('А… так вот что это…');
      await era.printAndWait('(Бах!)');
      await era.printAndWait([digital.get_colored_name(), ' рухнула!']);
      era.drawLine();
      await era.printAndWait([
        'К счастью, по заключению подоспевшего врача ',
        digital.get_colored_name(),
        ' просто перенапряглась — отдых, и всё.',
      ]);
      await era.printAndWait([
        'На этот раз ',
        digital.get_colored_name(),
        ' вправду выложилась без остатка; не как прежде — в этот раз ',
        digital.get_colored_name(),
        ' несла на себе убеждение бегуньи.',
      ]);
      await era.printAndWait([
        'Потому, выложившись дотла, ',
        digital.get_colored_name(),
        ' в порыве чувств рухнула.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' несёт на спине ',
        digital.get_colored_name(),
        ', возвращается в комнату отдыха, и тут… два знакомых силуэта: ',
        opera.get_colored_name(),
        ' и ',
        doto.get_colored_name(),
        '.',
      ]);
      await opera.say_and_wait([o_call_di, '? Возьми себя в руки!']);
      await you.say_and_wait([
        'Ничего, ',
        digital.sex,
        ' просто отдохнёт — и всё.',
      ]);
      await era.printAndWait([
        'Говоря это, укладывает ',
        digital.get_colored_name(),
        ' на диван в комнате отдыха.',
      ]);
      await era.printAndWait([
        'Вскоре ',
        digital.get_colored_name(),
        ' открывает глаза.',
      ]);
      await digital.say_and_wait('Нн… нн… э?!');
      await digital.say_and_wait([
        call_15,
        ' и ',
        call_58,
        '?! Вы как здесь?!',
      ]);
      await you.say_and_wait([
        digital.couple_title,
        'Очень волновалась за тебя, поэтому тоже пришла в комнату отдыха навестить… точнее, мы с самого начала уже были внутри.',
      ]);
      await digital.say_and_wait('Почему так внезапно?');
      await opera.say_and_wait([
        'Не внезапно! Это ',
        o_call_do,
        ' сказала: есть танцовщица, что кружится на любых сценах; дабы узреть рождение новой актрисы, я и явилась.',
      ]);
      await doto.say_and_wait([
        'Ннн, я так благодарна ',
        do_call_di,
        ' за твои наставления! Поэтому и на эту скачку пришла тебя поддержать!',
      ]);
      await opera.say_and_wait(
        'Ещё до скачки мы всё время скрывали ауру моей Владыки, притворялись случайными зрителями и изучали тебя!',
      );
      await doto.say_and_wait(
        'Боялась, что такая, как я, если заговорит с тобой в паддоке, помешает тебе… поэтому…',
      );
      await digital.say_and_wait(
        'Нет-нет-нет! Как это помешает, скорее честь для меня… так вот откуда было то странное чувство с самого начала.',
      );
      await digital.say_and_wait([
        'И ещё я понемногу поняла, ',
        call_15,
        ' и ',
        call_58,
        ' ах, почему вы такие лучезарные, такие пышные…',
      ]);
      await digital.say_and_wait('Наконец… чуть-чуть… смогла стать ближе…');
      await opera.say_and_wait(
        'Ха-ха-ха! Вот как? Впрочем, моя пышность и впрямь от рождения!',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        ' весьма ценит ',
        digital.get_colored_name(),
        ', а ',
        doto.get_colored_name(),
        ' благодарна ',
        digital.get_colored_name(),
        ' за то, что ',
        digital.sex,
        ' её воодушевила.',
      ]);
      await you.say_and_wait(
        'Вы сюда пришли — наверное, есть ещё что сказать?',
      );
      await era.printAndWait(['Затем ', digital.couple_title, ' объявляет…']);
      await opera.say_and_wait([
        'Я и ',
        o_call_do,
        ' на предстоящем ',
        takz_kin,
        ' дадим первую совместную revue!',
      ]);
      await doto.say_and_wait(
        'Я… я наконец тоже выйду на G1, хотя это всего лишь уголок, на который никто не смотрит…',
      );
      await digital.say_and_wait(
        '! Первая revue — поняла! Теперь никак нельзя не посмотреть!',
      );
      await opera.say_and_wait(
        'Впрочем, и у тебя должен быть свой номер, верно? Покажи нам свой всесторонний талант!',
      );
      await opera.say_and_wait(
        'Ты ещё не побеждала в G1 на грунте; без этого ты не полна, так?',
      );
      await you.say_and_wait([
        'Ближайший подходящий G1 на грунте — во время летнего сбора ',
        japa_dir,
        '.',
      ]);
      await opera.say_and_wait([
        'Как и ожидалось от ',
        callname_15,
        '! Итак, ',
        digital.get_colored_name(),
        ', примешь наше приглашение?',
      ]);
      await digital.say_and_wait('Принимаю!');
      await era.printAndWait([
        'Итак, ',
        digital.couple_title,
        ' заключает уговор: ',
        opera.get_colored_name(),
        ' и ',
        doto.get_colored_name(),
        ' на ',
        takz_kin,
        ' устроят самую грандиозную скачку, а ',
        digital.get_colored_name(),
        ' в ',
        japa_dir,
        ' тоже покажет, что ',
        digital.sex,
        ' — всесторонняя бегунья.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_24: (() => {
    const title = 'Takarazuka Kinen';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, japa_dir) => {
      await era.printAndWait([
        'Этот день — первая дуэль ',
        opera.get_colored_name(),
        ' и ',
        doto.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait(
        'А-а, тот день, которого не избежать, всё-таки пришёл! Мозг уже не остановить!',
      );
      await digital.say_and_wait(
        'Скачка, которую видишь даже во сне! Нет, снам до настоящей скачки всё равно далеко!',
      );
      await digital.say_and_wait(
        'Что, всем телом обвеситься пенлайтами и бежать болеть?!',
      );
      era.printButton('「Не-не, за такое охрана ведь выставит.」', 1);
      await era.input();
      await era.printAndWait([
        'Так и прибыли на ипподром Hanshin: ',
        opera.get_colored_name(),
        ' и ',
        doto.get_colored_name(),
        ' — их яростная дуэль……',
      ]);
      await era.printAndWait(
        'Так и прибыли на ипподром Hanshin: яростная дуэль T.M. Опера О и Мэйсё Дото…',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        ' — силу ',
        you.get_colored_name(),
        ' знает хорошо, но ',
        doto.get_colored_name(),
        ' и вправду смогла зайти так далеко……',
      ]);
      await era.printAndWait([
        'В конце они даже пришли ноздря в ноздрю, ',
        opera.get_colored_name(),
        ' лишь чуть обошла ',
        doto.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'В чём причина: одной лишь настоящей формой пока не объяснить эту перемену сердца……',
      );
      await era.printAndWait([
        'Это из-за ',
        digital.get_colored_name(),
        ', что ',
        digital.sex,
        ' стала такой……?',
      ]);
      await era.printAndWait([
        'Стоит ли сказать, что ',
        digital.get_colored_name(),
        ' и вправду невероятна…… мельком взглянув на ',
        digital.get_colored_name(),
        ', эх, ',
        digital.sex,
        ' всё так же зачарованно мотает головой.',
      ]);
      await digital.say_and_wait('Эвававава……', true);
      await digital.say_and_wait('Уму……', true);
      await digital.say_and_wait('Только что… что это было…… то сияние?', true);
      await digital.say_and_wait(
        'Я даже уже…… только что отпустила саму мысль о «сон»……',
        true,
      );
      await digital.say_and_wait(
        [
          'Потому что это ',
          call_15,
          ' и ',
          call_58,
          '……? Потому что ',
          digital.couple_title,
          ' особенны?',
        ],
        true,
      );
      await era.printAndWait([
        'Так, даже если ',
        digital.get_colored_name(),
        ' всё ещё не поняла истинный смысл, эстафетную палочку всё равно передали ',
        digital.get_colored_name(),
        ', и дальше ',
        digital.get_colored_name(),
        ' выходит на сцену ',
        japa_dir,
        '.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_japa_dir: (() => {
    const title = 'Japan Dirt Derby начинается!';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     */
    const f = async (digital, you, japa_dir) => {
      await digital.say_and_wait(
        [
          'Я ещё не замечала: ',
          digital.uma_sex_title,
          ' -тян — в корне их энергии «сон» наверняка лежит нечто бесценное……',
        ],
        true,
      );
      await digital.say_and_wait(
        'Oi…… ночь…… грунт…… На этой редкой чужой дорожке, на этом особенном ипподроме, быть может, и есть секрет, который я хочу найти……',
        true,
      );
      era.drawLine();
      await digital.say_and_wait([
        '『',
        japa_dir,
        '』, и атмосфера этой скачки какая-то особенная.',
      ]);
      await you.say_and_wait(
        'Скачка JG1…… к таким заездам всегда столько предвзятости.',
      );
      await digital.say_and_wait(
        'И всё же жар этой скачки — как летнее солнце……',
      );
      await digital.say_and_wait(
        'Пусть дорожка, пейзаж, хоть трава, хоть грунт — всё другое, пусть так……',
      );
      await digital.say_and_wait([
        digital.uma_sex_title,
        '-тян — чувства ведь одни и те же?',
      ]);
      await era.printAndWait(
        'Верно, хоть G1, хоть G3, хоть стейкс, хоть опен, хоть трава, хоть грунт, хоть центральные, хоть местные……',
      );
      await you.say_and_wait('Всё одно и то же.');
      await you.say_and_wait(
        'После этой скачки ты пройдёшь все типы заездов и точно поймёшь, почему они одинаковы.',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ', быть может, давно уже всё поняла; ',
        digital.sex,
        ' лишь хочет подтвердить это этой скачкой.',
      ]);
      await digital.say_and_wait([
        'Сейчас! Вместе с грунтовой ',
        digital.uma_sex_title,
        ' -тян с Oi найдём ответ!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  japa_dir_win: (() => {
    const title = 'Победа в Japan Dirt Derby';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      japa_dir,
    ) => {
      await digital.say_and_wait(
        'В этой скачке всё иначе, чем в прежних травяных, и всё же то же самое.',
        true,
      );
      await digital.say_and_wait('Уоооооооо!!!!', true);
      await digital.say_and_wait(
        'Взметнулась пыль…… не разглядеть…… но сияние…… пробивается……',
        true,
      );
      await digital.say_and_wait(
        [
          'Даже на совсем другой дорожке… ',
          digital.couple_title,
          ' всё равно хранит негасимое сияние……',
        ],
        true,
      );
      await digital.say_and_wait(
        ['Нельзя здесь предать ', digital.couple_title, ' и их сердца!!!!'],
        true,
      );
      await digital.say_and_wait('Ха-а-а-а-а-а-а-а!', true);
      era.drawLine();
      await era.printAndWait([
        'Финиш, ',
        digital.get_colored_name(),
        ' и вправду великолепна: на совсем другой дорожке тоже показала такой результат.',
      ]);
      await you.say_and_wait('Каково это?');
      await era.printAndWait([
        digital.get_colored_name(),
        ', с совсем другим, серьёзным лицом, не как прежде.',
      ]);
      await digital.say_and_wait([
        'Диджитал, ',
        digital.get_colored_name(),
        ', я поняла.',
      ]);
      await you.say_and_wait('Мгм.');
      await digital.say_and_wait([
        'С детства меня неотрывно влечёт ',
        digital.uma_sex_title,
        ' -тян: их «сон»……',
      ]);
      await digital.say_and_wait([
        'Я поняла: сегодня, пробежав 『 ',
        japa_dir,
        ' 』, поняла.',
      ]);
      await digital.say_and_wait([digital.uma_sex_title, '-тян, милая.']);
      await digital.say_and_wait([digital.uma_sex_title, '-тян, такая моэ.']);
      await digital.say_and_wait([
        'Итак, ',
        digital.couple_title,
        ', почему так мила? Что в ',
        digital.couple_title,
        ' кажется мне таким великим и так безнадёжно меня притягивает?',
      ]);
      await digital.say_and_wait([
        'Сегодня наконец поняла: мне нравится ',
        digital.couple_title,
        ' в том виде, когда она 『без оглядки бьётся за свою мечту』!',
      ]);
      await era.printAndWait([
        'Топая ногами топ-топ-топ, ',
        digital.get_colored_name(),
        ' ',
        digital.sex,
        ' выражает радость от того, что наконец поняла.',
      ]);
      await digital.say_and_wait(
        'Теперь, когда поняла, так и тянет вернуться в прошлое и отдубасить ту себя, что думала: 『особенные только центральные G1 на траве』!',
      );
      await you.say_and_wait('Ха-ха, прямо-таки классическое впечатление.');
      await digital.say_and_wait([
        'Эй-эй-эй, ты же и так давно знаешь: ',
        digital.uma_sex_title,
        ' -тян всегда были такими.',
      ]);
      await digital.say_and_wait([
        digital.couple_title,
        'По-настоящему есть то, чего хотят, кем хотят стать, и к этому они стремятся изо всех сил.',
      ]);
      await era.printAndWait(
        'Такие, где ни поставь, сияют — а уж когда бегут вместе, тем более?',
      );
      await digital.say_and_wait([
        digital.couple_title,
        'Изо всех сил тянутся друг к другу, помогают друг другу… иногда бьются за одну и ту же победу, но борьбы не боятся и всегда смотрят вперёд.',
      ]);
      await digital.say_and_wait('А когда пыль уляжется — вместе тискаться!');
      await you.say_and_wait('Ну, опять классический сюжет.');
      await digital.say_and_wait(
        'Именно от такого классического сюжета моя душа так содрогается!',
      );
      await digital.say_and_wait(
        'Хоть до дебюта я всё время важничала… но в итоге только сегодня…',
      );
      await digital.say_and_wait('А-ва-ва-ва, ну и…');
      await digital.say_and_wait([
        call_15,
        ' и ',
        call_58,
        ' — тот заезд, если оглянуться сейчас, тоже наконец понятен.',
      ]);
      await era.printAndWait([
        opera.get_colored_name(),
        ' и ',
        doto.get_colored_name(),
        ' — сияние их дуэли на Takarazuka Kinen заставило ',
        digital.get_colored_name(),
        ' завидовать до дрожи.',
      ]);
      await era.printAndWait([
        'А теперь ',
        digital.get_colored_name(),
        ' тоже наконец может коснуться этого света.',
      ]);
      await digital.say_and_wait(
        'Если так пойдёт дальше… нет! Диджитал! Пора сдвигаться с места!',
      );
      await digital.say_and_wait(
        'Если даже я соберусь с духом и с чистым сердцем встану перед стартовыми воротами!',
      );
      await digital.say_and_wait([
        callname,
        '…Я… даже я… смогу стать таким существом?!',
      ]);
      era.printButton('「Конечно, сможешь!」', 1);
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' наконец в этот миг стала настоящей скакуньей.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = 'Начало летних сборов (классический год)';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} japa_dir 日本泥地德比（上色版名字）
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (digital, you, japa_dir, mile_cha) => {
      await era.printAndWait([
        'Летние сборы! Самое важное событие года! Именно сейчас ',
        digital.uma_sex_title,
        ' растут лучше всего! Для тренера ',
        you.get_colored_name(),
        ' это событие, разумеется, особенно важно.',
      ]);
      await era.printAndWait([
        'Тем более нужно подхватить импульс недавнего ',
        japa_dir,
        ' и ринуться к следующему заезду.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' уже видит, какая светлая дорога ждёт ',
        digital.get_colored_name(),
        ', вот только…',
      ]);
      await digital.say_and_wait(
        'Куваа… всё-таки победа ударила в голову: я вот-вот, я вот-вот захотела стать этим священным существом…',
      );
      await era.printAndWait('…А, старт вышел неудачным.');
      await digital.say_and_wait(
        'Как только спадает послевкусие и наступает так называемый режим мудреца, начинаю корить себя за то, какая я…',
      );
      era.printButton(
        '「Постой, Диджитал, ты жалеешь? Жалеешь о своём решении?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'Словно ткнули в больное, ',
        digital.get_colored_name(),
        ' вся выпрямилась.',
      ]);
      await digital.say_and_wait([
        'Просто иногда кажется, что сама себе мешаю… ведь ещё и записалась на ',
        mile_cha,
        '……',
      ]);
      await digital.say_and_wait(
        'Н-но-но-но-но! О заморочках потом! Сейчас надо сначала подумать про Comic!',
      );
      era.printButton('「Comic? А это что?」', 1);
      await era.input();
      await digital.say_and_wait('Э?!');
      await era.printAndWait([
        'Внезапно ',
        you.get_colored_name(),
        ' перебивает, и ',
        digital.get_colored_name(),
        ' замялась.',
      ]);
      await digital.say_and_wait(
        'Короче! Скачка только что закончилась, дай мне сначала расслабиться, а-ха-ха-ха!',
      );
      await era.printAndWait('Нынешние летние сборы немного тревожат…');
    };
    f.title = title;
    return f;
  })(),
  we_47_29: (() => {
    const title = 'Летние сборы (классический год): середина';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} callname_61 圣王光环对玩家的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} mile_cha 爱丽数码对圣王光环的称呼
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      mile_cha,
    ) => {
      await era.printAndWait([
        'На первой неделе летних сборов ',
        digital.get_colored_name(),
        ' тренировки не пропускала, но… всё равно кажется, что ',
        digital.get_colored_name(),
        ' слегка не здесь.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' примерно догадывается: ',
        digital.get_colored_name(),
        ' вроде готовит ещё что-то постороннее, но у ',
        digital.get_colored_name(),
        ' это хобби, так что сказать что-то было неловко.',
      ]);
      era.printButton('「И что же делать…」', 1);
      await era.input();
      await era.printAndWait([
        'Глядя, как ',
        digital.get_colored_name(),
        ' делает силовую, ',
        you.get_colored_name(),
        ' краем глаза замечает ',
        halo.get_colored_name(),
        ': та стоит на пляже и смотрит на море.',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ',',
        digital.get_colored_name(),
        ' и раньше так фанатела от ',
        digital.uma_sex_title,
        ', и тогда на ',
        mile_cha,
        ' ',
        digital.get_colored_name(),
        ' вместе с ',
        you.get_colored_name(),
        ' даже ходила смотреть.',
      ]);
      await era.printAndWait([
        'В последнее время ',
        digital.sex,
        ' и по скаковым результатам стала какой-то... неоднозначной.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' тоже заметила ',
        halo.get_colored_name(),
        ', и как фанатка ',
        digital.sex,
        ' слегка поникла духом.',
      ]);
      await you.say_and_wait(['Может, ', call_61, ' немного подбодрить?']);
      await digital.say_and_wait(
        'Нн... как фанатка подбодрить айдола — тоже дело... хорошо! Решено, сначала отложу рукопись, что сейчас в руках!',
      );
      await you.say_and_wait('Рукопись? Какая рукопись?');
      await digital.say_and_wait('Рукопись додзинси.');
      await you.say_and_wait('Додзинси о чём?');
      await digital.say_and_wait('Да обычный додзинси, вот.');
      await era.printAndWait('Ничего не понятно...');
      await digital.say_and_wait([
        'Я как раз собиралась на ближайшем комикете продавать додзинси про ',
        call_61,
        ', чтобы всем рассказать, какая ',
        call_61,
        ' классная...',
      ]);
      await halo.say_as_unknown_and_wait(
        'Додзинси про King? О таком сама я и не слыхивала.',
      );
      await digital.say_and_wait([
        'А, чтобы сама узнала — это табу, конечно нельзя, чтобы ',
        call_61,
        '... шу-ва! ',
        call_61,
        '?!',
      ]);
      await era.printAndWait('Главная героиня выскочила из додзинси.');
      await digital.say_and_wait(
        'Всё только что — шутка! Просто мои пустые фантазии!',
      );
      await halo.say_and_wait(
        'Впрочем, спасибо, и тебе тоже спасибо, а-ха-ха-ха-ха! Обаяние King тоже первого класса!',
      );
      await halo.say_and_wait([
        'На самом деле я хотела спросить: ',
        h_call_d,
        ', ты ведь собираешься выступить в этом году в 『 ',
        mile_cha,
        ' 』?',
      ]);
      await digital.say_and_wait([
        'Э? Да! Меня так тронула Ваша скачка в прошлом году, что я тоже захотела подойти к Вам как можно ближе... но... почему ',
        call_61,
        ' ты...',
      ]);
      await halo.say_and_wait('Потому что я тоже выступлю.');
      await era.printAndWait([
        halo.get_colored_name(),
        ' тоже стартует в ',
        mile_cha,
        ' и выйдет на одну дорожку с ',
        digital.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait('!');
      await era.printAndWait([
        digital.get_colored_name(),
        ' — на лице вдруг легла тень.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' понимает: за долгую карьеру ',
        halo.get_colored_name(),
        ' уже постепенно сошла с пика в упадок.',
      ]);
      await digital.say_and_wait([
        'Эм, ',
        call_61,
        '...хотя говорить так немного бесстыдно... я буду за тебя болеть.',
      ]);
      await digital.say_and_wait(
        'Эм... даже как соперница, желание станить всё такое же сильное...',
      );
      await era.printAndWait([
        'В такой ситуации ',
        digital.get_colored_name(),
        ' в смятении: выйти на одну дорожку с айдолом — давняя мечта, но что, если айдол напротив уже пошла на спад?',
      ]);
      await you.say_and_wait('Диджитал!');
      await digital.say_and_wait('!');
      await era.printAndWait([
        digital.get_colored_name(),
        ' чуть невинно смотрит на ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait([
        'Диджитал, ты должна понимать: на скаковой дорожке ',
        digital.uma_sex_title,
        '——',
      ]);
      await halo.say_and_wait([
        callname_61,
        ', прости что перебиваю, ',
        h_call_d,
        ', у меня предложение.',
      ]);
      await halo.say_and_wait([
        h_call_d,
        ', когда эти сборы закончатся, давайте устроим скачку.',
      ]);
      await digital.say_and_wait('А?! Уо? С айдолом вместе... не смогу...');
      await you.say_and_wait(['King... очень тебе спасибо.']);
      await halo.say_and_wait([
        'Нет проблем, как первоклассная ',
        digital.uma_sex_title,
        ' естественно должна ответить первоклассным фанатам — а-ха-ха-ха-ха!',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' заметила растерянность ',
        digital.get_colored_name(),
        ', ',
        digital.sex,
        ' пригласила ',
        digital.get_colored_name(),
        ' побегать вместе.',
      ]);
      await era.printAndWait([
        'Итак, в оставшиеся летние сборы ',
        digital.get_colored_name(),
        ' под конец проведёт с ',
        halo.get_colored_name(),
        ' совместную пробную скачку.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = 'Конец летних сборов (классический год)';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} callname_61 圣王光环对玩家的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} takm_kin 高松宫纪念（上色版名字）
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      takm_kin,
    ) => {
      await digital.say_and_wait(
        'Хе-хе... фу... спасибо за дарованную дуэль...',
      );
      await era.printAndWait([
        'В самом конце летних сборов — назначенная дуэль ',
        digital.get_colored_name(),
        ' и ',
        halo.get_colored_name(),
        '...',
      ]);
      await era.printAndWait('Впрочем, выглядит немного... вольно?');
      await halo.say_and_wait([
        'Ха... фу... ',
        h_call_d,
        ', шаги у тебя довольно нерешительные, что случилось?',
      ]);
      await digital.say_and_wait(
        'Я, нет... то ли всё время ловлю флешбанги, то ли задыхаюсь от священности в воздухе...',
      );
      await digital.say_and_wait(
        'Раньше я всегда была со стороны зрителей... ещё и догнать захотела, зазналась...',
      );
      await digital.say_and_wait(
        'Я и сама только недавно обрела решимость 『бежать всерьёз』, обычный человек со дна...',
      );
      await halo.say_and_wait([
        'Ара, выглядит совсем без уверенности. Но неужели только это? ',
        callname_61,
        ',',
        h_call_d,
        ' — по силе ты и так знаешь, верно?',
      ]);
      await you.say_and_wait('Если на нынешнем грунте, Диджитал не проиграет.');
      await era.printAndWait([
        digital.get_colored_name(),
        ' ',
        digital.sex,
        ' всё ещё переживает за нынешнюю ',
        halo.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait([
        call_61,
        '……сейчас……далеко не та, что была……да?……',
      ]);
      await digital.say_and_wait([
        'Этой весной на『 ',
        takm_kin,
        ' 』 — победа, а потом…… плавная поступь, динамика тела: можно сказать, в этом заезде той силы уже не было?……',
      ]);
      await digital.say_and_wait(
        'Я знаю. Потому что каждый раз, держась за ограждение, всем телом тянулась смотреть.',
      );
      await digital.say_and_wait([
        'Как нынешней ',
        call_61,
        ' больно: я ведь тоже дебютировала, так что и я…… кое-что понимаю……',
      ]);
      await era.printAndWait([
        'Ставшая участницей ',
        digital.get_colored_name(),
        ', по сравнению с прежним, касается куда большего — и таких чувств тоже.',
      ]);
      await halo.say_and_wait([
        'Вот почему не было настроения?…… Так вот, хм…… ',
        h_call_d,
        ' ты……',
      ]);
      await halo.say_and_wait('Дура.');
      await digital.say_and_wait('Э?');
      await era.printAndWait([
        'Совсем неожиданные слова застали ',
        digital.get_colored_name(),
        ' врасплох.',
      ]);
      await halo.say_and_wait('Дура. Ещё и большая дура.');
      await halo.say_and_wait(
        'С виду ты меня понимаешь, а на деле ничего не смыслишь.',
      );
      await era.printAndWait('Слова жёсткие, а голос тёплый.');
      await halo.say_and_wait([
        'Так, ',
        h_call_d,
        ', тебе ведь интересна я как ',
        digital.uma_sex_title,
        ', верно?',
      ]);
      await digital.say_and_wait('! Да!');
      await halo.say_and_wait(
        'Вот что: когда сборы кончатся, жалую тебе право тренироваться со мной!',
      );
      await halo.say_and_wait([
        'Покажу, ',
        halo.get_colored_name(),
        ' — какая ',
        digital.uma_sex_title,
        '!',
      ]);
      await digital.say_and_wait('Прошу! Непременно!');
      await digital.say_and_wait([
        'Честь такая, что хвост сам подскакивает! Диджитал и та самая ',
        digital.sex_code - 1 ? ' богиня' : 'божество',
        ' вместе!',
      ]);
      await era.printAndWait([
        'В конце лета ',
        digital.get_colored_name(),
        ' завязала связь с ',
        digital.uma_sex_title,
        ' своей мечты.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_37: (() => {
    const title = 'Условия высшего класса';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} sprt_sta 短途马锦标（上色版名字）
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (digital, halo, call_61, h_call_d, sprt_sta, mile_cha) => {
      await digital.print_and_wait([
        'Пока ',
        digital.get_colored_name(),
        ' идёт к ',
        mile_cha,
        ', ',
        halo.get_colored_name(),
        ' тоже прилагает усилия.',
      ]);
      await digital.print_and_wait([
        sprt_sta,
        ', спринт G1: по идее это конёк ',
        halo.get_colored_name(),
        '……',
      ]);
      await digital.print_and_wait('—— седьмое место');
      await digital.print_and_wait('Даже не попала в призы.');
      await digital.print_and_wait([
        'Вскоре после заезда ',
        digital.get_colored_name(),
        ' подходит к ',
        halo.get_colored_name(),
        '.',
      ]);
      await halo.say_and_wait([
        'Пришла смотреть, ',
        h_call_d,
        ', не лезь ко мне — так хотела сказать, но раз это ты, жалую право остаться со мной.',
      ]);
      await digital.say_and_wait([
        'Эм…… хоть в итоге не дошла, но ',
        call_61,
        ' снова так прекрасна, что я вновь в полном восхищении.',
      ]);
      await digital.say_and_wait(
        'Острый взгляд, исходящее достоинство, роскошный вираж!',
      );
      await halo.say_and_wait('……И только?');
      await digital.say_and_wait('Э?');
      await halo.say_and_wait(
        'Причины считать меня высшего класса — только эти?',
      );
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' сказала ещё многое, но……',
      ]);
      await halo.say_and_wait(
        '……Чтобы стать высшего класса, есть одна вещь важнее всего……',
      );
      await digital.print_and_wait(
        'После заезда на поле почти никого не осталось.',
      );
      await digital.print_and_wait([
        halo.get_colored_name(),
        ', вышла к стартовой черте и приняла стартовую стойку.',
      ]);
      await halo.say_and_wait('Случай редкий: пробежишь со мной?');
      era.drawLine();
      await digital.print_and_wait([
        'Всё-таки только что после заезда: явно видно, как ',
        halo.get_colored_name(),
        ' вымотана.',
      ]);
      await halo.say_and_wait('Ха…… ха…… кх…… хо-хо-хо…… ну и вид, позор.');
      await halo.say_and_wait([
        h_call_d,
        ', какова я сейчас: ни острого взгляда, ни достоинства, ни роскоши — ничего.',
      ]);
      await halo.say_and_wait(
        'Я, у которой не осталось ни единого доказательства высшего класса, — я всё ещё высшего класса?',
      );
      await digital.say_and_wait('Это…… то есть……');
      await halo.say_and_wait('Но даже такая я——');
      await digital.print_and_wait([
        'Тот острый взгляд из заезда снова вспыхнул у нынешней ',
        halo.get_colored_name(),
        '.',
      ]);
      await halo.say_and_wait('Если пробежать ещё раз — что будет?');
      await halo.say_and_wait('Если не выйдет, завтра ещё раз — что тогда?');
      await halo.say_and_wait(
        'Пусть завтра провал, послезавтра ещё раз — и что?',
      );
      await halo.say_and_wait([
        h_call_d,
        '!Глянь: от нынешней меня и правда ничего не осталось?',
      ]);
      await digital.say_and_wait('!');
      await digital.say_and_wait(
        'Есть то, что осталось! Как компас первопроходца, как лёд десяти тысячелетий — не изменится!',
      );
      await halo.say_and_wait(
        '——Несгибаемая одержимость. Сердце, что не покорится, даже если его сломают.',
      );
      await halo.say_and_wait('Только это никто не сможет у меня отнять.');
      await halo.say_and_wait(
        'Именно поэтому я, этот King, навеки первоклассная!',
      );
      await digital.print_and_wait([
        'Пусть сила и угасла, но у ',
        halo.get_colored_name(),
        ' тот дух「первоклассная」, несгибаемая воля ничуть не ослабли.',
      ]);
      await digital.say_and_wait(['О-о-о…… ', call_61, '……!']);
      await digital.print_and_wait([
        'Даже вся в ранах, ',
        halo.get_colored_name(),
        ' всё равно так прекрасна.',
      ]);
      await halo.say_and_wait([
        'Я даю тебе обещание: на『 ',
        mile_cha,
        ' 』 я вернусь в прежнюю форму!',
      ]);
      await halo.say_and_wait(
        'Если пожалеешь меня и не выложишься полностью — это будет слишком невежливо.',
      );
      await digital.say_and_wait(
        'Да, я поняла. Осколок「первоклассная」…… я принимаю.',
      );
      await digital.say_and_wait('Но сейчас позвольте сказать одно……');
      await digital.say_and_wait([
        'Вы и вправду…… ',
        halo.sex_code !== 1 ? ' богиня' : 'божество',
        '……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_mile_cha_c: (() => {
    const title = 'Mile Championship начинается!';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     */
    const f = async (digital, halo, h_call_d) => {
      await era.printAndWait([
        halo.get_colored_name(),
        ',',
        digital.get_colored_name(),
        ' Ещё до дебюта она неотрывно смотрела снизу вверх на ',
        digital.uma_sex_title,
        ', и вот теперь ',
        digital.get_colored_name(),
        ' наконец может встать рядом: ',
        digital.sex,
        ' на одной дорожке.',
      ]);
      await era.printAndWait([
        'На паддоке ',
        halo.get_colored_name(),
        ' стряхнула прежний упадок, аура взмыла — словно вернулась на пик формы.',
      ]);
      await halo.say_and_wait([
        'Ну как, ',
        h_call_d,
        ', сегодняшняя я так сияю, что в глазах рябит?',
      ]);
      await digital.say_and_wait(
        'Да! Ослепительно! Но…… спина всё же не так пряма, как этой весной……',
      );
      await halo.say_and_wait(
        'Аха…… от тебя не утаишь, не думала, что и это заметишь.',
      );
      await halo.say_and_wait([h_call_d, ', насколько сильно ты меня любишь?']);
      await digital.say_and_wait('Ош у меня глубже Марианской впадины!');
      await era.printAndWait([
        halo.get_colored_name(),
        ' и ',
        digital.get_colored_name(),
        ' болтают и смеются, и здесь видно: ',
        digital.couple_title,
        ' точно выдаст скачку, которую словами не описать.',
      ]);
      await digital.say_and_wait(
        'Твои истинные чувства я хочу понять в сегодняшней скачке!',
      );
      await halo.say_and_wait([
        'Настоящую「первоклассная」 постигни всем существом! ',
        h_call_d,
        '!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  mile_cha_win_c: (() => {
    const title = 'Победа в Mile Championship';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} mile_cha 英里冠军赛（上色版名字）
     */
    const f = async (
      digital,
      halo,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      h_call_d,
      mile_cha,
    ) => {
      await digital.print_and_wait([
        'Поднявшаяся с самого дна ',
        halo.get_colored_name(),
        ',',
        digital.get_colored_name(),
        ' до конца видела, как ',
        digital.sex,
        ' ведёт стратегию выживания.',
      ]);
      await halo.say_and_wait([
        'Ну как, ',
        h_call_d,
        '? Пробежав со мной эту важную скачку, поняла?',
      ]);
      await halo.say_and_wait([
        halo.get_colored_name(),
        ' — что за ',
        digital.uma_sex_title,
        '.',
      ]);
      await digital.say_and_wait('Да…… да……');
      await digital.print_and_wait([
        'Та, кого ',
        halo.get_colored_name(),
        ' научила「что такое ',
        digital.uma_sex_title,
        ' 」 — ',
        digital.get_colored_name(),
        ', после победы в ',
        mile_cha,
        ' рыдает навзрыд.',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' одним существованием трогает так, что ',
        digital.sex,
        ' растрогана до глубины души.',
      ]);
      await halo.say_and_wait(
        'Что с тобой? Всё плачешь — так ведь ничего не скажешь.',
      );
      await digital.say_and_wait('Всё тело…… купается в сиянии……');
      await digital.say_and_wait([
        'И тогда я поняла, что значит жить как ',
        digital.uma_sex_title,
        '.',
      ]);
      await digital.say_and_wait(
        'В несгибаемом беге живёт душа! Инстинкт! Готова или нет — всегда нести дух「первоклассная」!',
      );
      await digital.say_and_wait(
        'Прежняя я никак не могла понять, но теперь ясно: достаточно бежать! Даже нытьё — говори на бегу!',
      );
      await digital.say_and_wait([
        'Теперь я ещё сильнее люблю ',
        digital.uma_sex_title,
        '!',
      ]);
      await halo.say_and_wait([
        'Хо-хо, как же ты любишь ',
        digital.uma_sex_title,
        '.',
      ]);
      await halo.say_and_wait([
        h_call_d,
        ', беги ещё и с другими ',
        digital.uma_sex_title,
        ' в скачке! Впитай всё, и тогда……',
      ]);
      await halo.say_and_wait([
        'Стань настоящей универсальной бегуньей! Ведь ты — из тех ',
        digital.uma_sex_title,
        ', кого любишь больше всего!',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' напоследок благословила ',
        digital.get_colored_name(),
        ' и пожелала, чтобы ',
        digital.get_colored_name(),
        ' впредь сходилась ещё с новыми ',
        digital.uma_sex_title,
        ' и стала настоящей「универсальная бегунья」',
      ]);
      era.drawLine({ content: 'Подземный переход' });
      await digital.say_and_wait([
        callname,
        ', о мой товарищ, я от ',
        call_61,
        ' обрела нечто несравненно ценное.',
      ]);
      await digital.say_and_wait([
        'Нужно ещё с большим числом ',
        digital.uma_sex_title,
        ' бежать в заездах, что мне делать...',
      ]);
      await era.printAndWait('Раз так, почему бы не...');
      await era.printAndWait([
        'Вместе с ',
        digital.get_colored_name(),
        ' решили дальше участвовать в ещё большем числе скачек G1.',
      ]);
      await digital.say_and_wait([
        'Да-да, и ещё, а потом я брошу вызов ',
        call_15,
        ' и ',
        call_58,
        '!',
      ]);
      await era.printAndWait([
        'Всегда лишь благоговевшая ',
        digital.get_colored_name(),
        ', теперь наконец набралась смелости бросить вызов прежним кумирам.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = 'Hatsumode';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param opera
     * @param tachyon
     * @param shakur
     * @param falcon
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对玩家的称呼
     * @param {PrintedSpan} t_call_d 爱丽速子对爱丽数码的称呼
     * @param {PrintedSpan} s_call_d 空中神宫对爱丽数码的称呼
     * @param {PrintedSpan} f_call_d 醒目飞鹰对爱丽数码的称呼
     */
    const f = async (
      digital,
      opera,
      tachyon,
      shakur,
      falcon,
      you,
      callname,
      call_15,
      call_61,
      callname_32,
      t_call_d,
      s_call_d,
      f_call_d,
    ) => {
      await digital.say_and_wait(
        'Боги! В этом году обойдусь без мерча, дайте мне соперницу — и всё!',
      );
      await era.printAndWait([
        'Боже! Чтобы ',
        digital.get_colored_name(),
        ' такое произнесла, ',
        digital.sex,
        ' чем-то так завелась?!',
      ]);
      await you.say_and_wait('Диджитал? Почему вдруг об этом?');
      await era.printAndWait([
        digital.get_colored_name(),
        ' рассказала ',
        you.get_colored_name(),
        ', что недавно ',
        opera.get_colored_name(),
        ' прямо указала: ',
        digital.get_colored_name(),
        ' не хватает соперницы.',
      ]);
      await digital.say_and_wait([
        'Н-ну, как ранее говорила ',
        call_15,
        ', причина, почему я ещё недостаточно сильна...',
      ]);
      await era.printAndWait('Соперница.');
      await era.printAndWait([
        digital.get_colored_name(),
        ' не хватает соперницы; как тренер, ',
        you.get_colored_name(),
        ' ясно понимает, сколько сил и воодушевления соперницы дают ',
        digital.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Но ',
        digital.get_colored_name(),
        ' — случай слишком особый: ',
        digital.sex,
        ' обладает той чертой — чистой любовью к ',
        digital.uma_sex_title,
        ', и эта любовь так работает, что ',
        digital.sex,
        ' получает тот же эффект, что и от соперницы.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' правда нужна соперница?',
      ]);
      await digital.say_and_wait(
        'М-м-м, раньше, не желая слишком вмешиваться, даже не то что соперница: Диджитал на скаковом поле почти не общалась с оппонентками, и вот оно, последствие...',
      );
      await era.printAndWait([
        'Впрочем, раз уж случай есть, пусть ',
        digital.get_colored_name(),
        ' с другими ',
        digital.uma_sex_title,
        ' хоть пообщается — тоже хорошо.',
      ]);
      await you.say_and_wait('Тогда пойдём искать соперницу!');
      await era.printAndWait('Так что...');
      era.drawLine();
      await shakur.say_and_wait('А? Соперница? Иди лучше отдыхай.');
      await digital.say_and_wait(
        'Постойте! Как раз однокурсницы, разве не идеально?',
      );
      await shakur.say_and_wait([
        'Вот что, ',
        s_call_d,
        ', за других не скажу, но я, по-моему, не подхожу. Вот так.',
      ]);
      era.drawLine();
      await falcon.say_and_wait(
        'Э? Соперница? Как-то не вяжется с образом айдола~',
      );
      await digital.say_and_wait(
        'Не-не-не, у айдолов же всегда есть такая соперница, и пока сражаетесь, ещё и помогаете друг другу, нет?',
      );
      await falcon.say_and_wait([
        'Ахаха, Эль-тян, кажется, годится лишь в маленькие ',
        digital.uma_sex_title,
        ' -айдолы, для такого не подходит... Впрочем, огромное спасибо ',
        f_call_d,
        ' за приглашение!',
      ]);
      era.drawLine();
      await tachyon.say_and_wait([
        'Хм-хм... соперница... но ',
        t_call_d,
        ' как объект исследования — нет же, это не по моей концепции!',
      ]);
      await digital.say_and_wait('...Вот как.');
      await era.printAndWait([
        'Несколько раз по разным причинам отвергнутая ',
        digital.get_colored_name(),
        ', даже ',
        digital.sex,
        ' слегка развесила уши.',
      ]);
      await tachyon.say_and_wait([
        'Не унывай так, ',
        t_call_d,
        ', и ты тоже, ',
        callname_32,
        ', ты же понимаешь? Кто может стать соперницей ',
        t_call_d,
        '.',
      ]);
      await era.printAndWait([
        ' своим особым взглядом смотрит на ',
        you.get_colored_name(),
        ',',
        tachyon.get_colored_name(),
        ' поднимает подбородок, указывая на ',
        you.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait([
        'Э-э-э! ',
        callname,
        ', ты знаешь? Кто может стать моей соперницей?',
      ]);
      await you.say_and_wait('Так и есть.');
      await digital.say_and_wait('Тогда почему не сказал с самого начала?');
      await era.printAndWait([
        digital.get_colored_name(),
        ' от нетерпения уже почти молотила ',
        you.get_colored_name(),
        ' кулачками.',
      ]);
      await tachyon.say_and_wait([
        'Похоже, у того человека своя оценка, ',
        t_call_d,
        ', дальше начнётся скучный ответ. Пока.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' взглянула на происходящее и тактично удалилась.',
      ]);
      await you.say_and_wait(
        'По факту: с одной стороны, я узнал(а) это, только когда ты начала искать; с другой — мне тоже было что выяснить……',
      );
      await you.say_and_wait('Так что итоговый вывод: твои соперницы — все!');
      await digital.say_and_wait(
        'Все……! То есть DD-коробочный оши тоже можно?! Погоди, это же как тогда……',
      );
      await era.printAndWait([
        'Да, до этого дошло, когда сегодня ',
        digital.get_colored_name(),
        ' искала людей, ',
        digital.get_colored_name(),
        ' искала и сильных на траве, и сильных на грунте ',
        digital.uma_sex_title,
        ', как с самого начала……',
      ]);
      await you.say_and_wait('Выбрать только одну — не получится.');
      await you.say_and_wait(
        'Кого ни выбери, не найдётся бегуньи, которая, как Диджитал, может бежать по двум покрытиям, но если это……',
      );
      await digital.say_and_wait('Все……');
      await you.say_and_wait('Верно.');
      await digital.say_and_wait('Ха-ха-ха-ха, не думала, что снова все.');
      await digital.say_and_wait([
        call_61,
        ' тогда 『с ещё большим числом ',
        digital.uma_sex_title,
        ' бегать вместе』 я точно смогу достичь!',
      ]);
      await digital.say_and_wait(
        'Все в роли соперниц — если так подумать, я ещё та жадина…… Что я могу взять у всех?',
      );
      era.print([you.get_colored_name(), ' решает:']);
      era.printButton('Питание (выносливость +20)', 1);
      era.printButton('Сила дружбы (все параметры +5)', 2);
      era.printButton('Разнообразие (очки навыков +30)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait('Ну, если выбирать — питание');
          await digital.say_and_wait([
            'Точно! ',
            digital.uma_sex_title,
            ' -тян, у каждой свой вкус — и каждый раз они дают мне заряд!',
          ]);
          await digital.say_and_wait(
            'Каждый день свежий паёк! Лучшего топлива не сыскать!',
          );
          await era.printAndWait([
            'И впредь ',
            digital.uma_sex_title,
            ' непременно дадут ',
            digital.get_colored_name(),
            ' ещё больше энергии.',
          ]);
          break;
        case 2:
          await you.say_and_wait('Верно, это дружба! POWER!');
          await digital.say_and_wait([
            'О-хо-хо, стоит каждой ',
            digital.uma_sex_title,
            ' -тян дать мне капельку силы — и я непобедима!',
          ]);
          await digital.say_and_wait(
            'Хм-хм, у-ха-ха-ха, только подумаю — и уже чувствую, как сила распирает всё тело!',
          );
          await era.printAndWait([
            'Это не совсем то же самое, что по ма-монете с каждой, ',
            digital.get_colored_name(),
            ' точно сможет от ',
            digital.uma_sex_title,
            ' получить силу и стать сильнее.',
          ]);
          break;
        case 3:
          await you.say_and_wait('Разнообразие, так ведь!');
          await digital.say_and_wait([
            'Конечно! ',
            digital.uma_sex_title,
            ' -тян, их бег столь разнообразен, что его не удержать в рамках тех стилей, что обычно себе рисуешь!',
          ]);
          await digital.say_and_wait(
            'Как с энциклопедией UMAMO: давай запишем всё!',
          );
          await era.printAndWait([
            'Коллекционер полного комплекта, ',
            digital.get_colored_name(),
            ' в этой игре точно получит навыки!',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'День святого Валентина';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, you, callname) => {
      await era.printAndWait([
        'Рано утром в тренерскую явилась ',
        digital.get_colored_name(),
        ', а с собой у неё — стопка шоколада.',
      ]);
      await era.printAndWait('Почему единица измерения — стопка?!');
      await digital.say_and_wait([
        'Это труд всей души! Я вложила в этот шоколад черты всех ',
        digital.uma_sex_title,
        ', каких только смогла вспомнить!',
      ]);
      await era.printAndWait(
        'Глядя на башню из коробки за коробкой шоколада — неужели каждая конфета внутри другая?!',
      );
      await digital.say_and_wait('Тогда — к обряду!');
      await era.printAndWait('Что, откуда взялся алтарь?!');
      await era.printAndWait([
        digital.get_colored_name(),
        ' разложила весь шоколад перед алтарём, сперва что-то пробормотала, потом ещё странно потёрла руки.',
      ]);
      await digital.say_and_wait(
        'Готово, хватит! Три богини должны были получить мою просьбу.',
      );
      await era.printAndWait(
        'Если молишься Трём богиням, почему не во дворе?!',
      );
      await digital.say_and_wait([
        callname,
        ', а теперь давай съедим вместе, зря тратить нельзя.',
      ]);
      era.printButton('「И это ещё и едят?!」', 1);
      await era.input();
      await digital.say_and_wait(
        'Конечно, достаточно самой мысли, да и выбрасывать еду — тоже кощунство!',
      );
      await digital.say_and_wait('А теперь давай есть и болтать!');
      await digital.say_and_wait([
        'У-у-у, как же мне повезло: есть товарищ, с кем обсуждать ',
        digital.uma_sex_title,
        '……',
      ]);
      await digital.say_and_wait([
        'Давай-давай, ',
        callname,
        ', расскажи, кто твой недавний главный оши среди ',
        digital.uma_sex_title,
        '…… кто это?',
      ]);
      await era.printAndWait('Ещё спрашиваешь?');
      era.printButton('「Ладно, вот тебе шоколад.»', 1);
      await era.input();
      await era.printAndWait('Из холодильника достаёшь шоколад……');
      await digital.say_and_wait('О-о-о, это я.');
      await digital.say_and_wait('Иэээээ? Погоди, это что, шоколад?');
      await digital.say_and_wait([
        'Э-это какая широта любви?! Неужели кто-то хочет пушить такую нишевую ',
        digital.uma_sex_title,
        '?',
      ]);
      await you.say_and_wait([
        'О чём это ты, я же твой ',
        callname,
        '…… И ещё: ты правда считаешь себя такой нишевой……? У оши умамусумэ фанатов вроде не мало?',
      ]);
      await era.printAndWait([
        'От этих слов ',
        digital.get_colored_name(),
        ' вдруг замялась.',
      ]);
      await digital.say_and_wait(
        'Так это… на самом деле у меня как у ума-оши ещё до дебюта фанатов было немало, потому что я и раньше всё время делала… додзинси…',
      );
      await era.printAndWait([
        'Э? Вроде и правда слышал(а), что ',
        digital.get_colored_name(),
        ' ещё до дебюта в каких-то кругах была довольно известна…',
      ]);
      await digital.say_and_wait([
        'Но! ',
        callname,
        ', такой дух — вот он, образец среди отаку! Если с тобой, хоть десять лет, хоть сколько — кажется, Валентин можно проводить вместе!',
      ]);
      await era.printAndWait([
        'Вместе с ',
        digital.get_colored_name(),
        ' в разговорах проводят шумный День святого Валентина.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'Фестиваль благодарности фанатам';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     */
    const f = async (digital, luna, you, callname) => {
      await digital.say_and_wait([
        'Диджитал, праздник ',
        digital.get_colored_name(),
        ' наконец здесь! Ва-ва-ва, глянь на всё вокруг — просто рай для фанатов…',
      ]);
      await era.printAndWait([
        'Фестиваль благодарности фанатам… как следует из названия, это мероприятие, где обладающие качествами идолов скаковые ',
        digital.uma_sex_title,
        ' благодарят болеющих за них фанатов.',
      ]);
      await era.printAndWait(
        'Так говорят, но на деле ощущается и как школьный фестиваль.',
      );
      await era.printAndWait([
        'Но, ',
        digital.get_colored_name(),
        ', в этом году твоя роль — уже не просто фанат!',
      ]);
      await you.say_and_wait(
        'На самом деле, Диджитал, сегодня ты та, кого поддерживают!',
      );
      await digital.say_and_wait('Кья!');
      await digital.say_and_wait('Н-нет-нет, такой человек, как я…');
      await era.printAndWait([
        'С лицом 「невозможно」 ',
        digital.get_colored_name(),
        ', если про прошлое — так оно и было…',
      ]);
      await you.say_and_wait(
        'Ты, что в стольких скачках показывала отличные результаты, пора бы и осознать: хотя ты и говоришь, что фанаты ума-оши ещё с прежних времён… но новых фанатов — немало.',
      );
      await era.printAndWait([
        'Словно попав в больное место, ',
        digital.get_colored_name(),
        ' сдаётся с поднятыми руками — похоже, готова.',
      ]);
      await era.printAndWait([
        'Затем на автограф-сессию является ',
        digital.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Сначала ',
        digital.get_colored_name(),
        ' ещё немного непривычно, но потом ',
        digital.sex,
        '……',
      ]);
      await digital.say_and_wait(
        'Хорошо-хорошо, на сикиси имя как следует подписала!',
      );
      await era.printAndWait(
        'Даже сумела сделать так, чтобы каждый фанат стоял в очереди с улыбкой?!',
      );
      await digital.say_and_wait(
        'Потому что раньше я сама была на стороне оши… так что настроение фанатов, конечно, угадаю.',
      );
      await digital.say_and_wait([
        'И ещё, ',
        callname,
        ', можно я потом оптимизирую эту площадку? Если разрешение дадут — покажу тебе душу Диджитал-организатора!',
      ]);
      await era.printAndWait([
        'Получив разрешение у персонала, ',
        digital.get_colored_name(),
        ' мигом прошлась по всем площадкам и ещё и всевозможные мероприятия оптимизировала на отлично?!',
      ]);
      await era.printAndWait([
        'А потом, когда слух дошёл до ушей ',
        luna.get_colored_name(),
        ', и ',
        digital.sex,
        ' лично привела множество ',
        digital.uma_sex_title,
        ' поблагодарить…',
      ]);
      await digital.say_and_wait(
        'Как так, я стала той, кого ошиают, на целый день?!',
      );
      await era.printAndWait([
        'От восторга упавшая в обморок ',
        digital.get_colored_name(),
        ' наконец закончила сегодняшний подвиг.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_17: (() => {
    const title = 'Просмотр NHK Mile Cup';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {PrintedSpan} nhk_cup NHK英里杯（上色版名字）
     */
    const f = async (digital, nhk_cup) => {
      await era.printAndWait([
        'Вместе с ',
        digital.get_colored_name(),
        ' приходят посмотреть, как в прошлом году ',
        digital.get_colored_name(),
        ' сражалась в ',
        nhk_cup,
        '.',
      ]);
      await era.printAndWait([
        'В последнее время ',
        digital.get_colored_name(),
        ' тоже стала приглядывать за младшими, и среди них та, на кого ',
        digital.sex,
        ' обратила внимание——',
      ]);
      await era.printAndWait([
        'это и та, кто в этом году на ',
        nhk_cup,
        ' взяла победу, — сейчас очень популярная новичок Курофунэ.',
      ]);
      await digital.say_and_wait(
        'Уо-о-о, широкий шаг, длинные прекрасные ноги! Я, я уже!',
      );
      await digital.say_and_wait([
        'Курофунэ, ',
        digital.sex,
        ',',
        digital.sex,
        ' пробежала по той же траве, по которой бегала я!',
      ]);
      await digital.say_and_wait(
        'Чувство… чувство внутри вот-вот прорвётся наружу!',
      );
      await era.printAndWait([
        'Затем ',
        digital.get_colored_name(),
        ' мигом подбегает к ограде…',
      ]);
      await digital.say_and_wait(
        'Курофунэ-сан! Давай! Что бы ни ждало впереди, сэмпаи тебе помогут!',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ', с прошлогоднего ',
        nhk_cup,
        ' многое пережила, ',
      ]);
      await era.printAndWait([
        'За прошедший год снова увидеть, как появляется новое поколение, это продолжение следа копыт — наверняка ',
        digital.get_colored_name(),
        ' переполнена чувствами.',
      ]);
      await era.printAndWait([
        'Вернувшись сюда, ',
        digital.get_colored_name(),
        ' снова начинает представлять Курофунэ…',
      ]);
      era.println();
      await era.printAndWait([
        'Потому что по приспособляемости к разным покрытиям Курофунэ очень похожа на ',
        digital.get_colored_name(),
        ', и от этого ',
        digital.get_colored_name(),
        ' чувствует близость.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' уже из той, кто просто боготворила кумиров, стала сэмпаем, что может заботиться о младших.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_23: (() => {
    const title = 'Вызов героя';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, tenn_sho) => {
      await era.printAndWait([
        'Наконец, ',
        digital.get_colored_name(),
        ' успела до летних сборов поучаствовать во множестве крупных скачек и, верно, уже накопила достаточно опыта.',
      ]);
      await era.printAndWait([
        'Вместе с ',
        digital.get_colored_name(),
        ' вспоминают предыдущие скачки — и снова столько встреч.',
      ]);
      await digital.say_and_wait([
        'Отлично! Теперь самое время! Битва у заставы Хулао! Пора слать ',
        call_15,
        ' и ',
        call_58,
        ' вызов!',
      ]);
      await digital.say_and_wait('Мм…… подожди, какую скачку лучше выбрать?');
      await era.printAndWait([
        'И правда, у ',
        opera.get_colored_name(),
        ' и ',
        doto.get_colored_name(),
        ' с пригодностью к покрытию грунт у обеих слабоват, а по дистанции слабовата миля.',
      ]);
      await era.printAndWait([
        'А у ',
        digital.get_colored_name(),
        ' длинная дистанция тоже слабовата……',
      ]);
      await you.say_and_wait(
        'Если уж бросать вызов, то это, конечно, золотая скачка средней дистанции по траве.',
      );
      await era.printAndWait('Но это……');
      await digital.say_and_wait([
        'Да…… я тоже не хочу затягивать ',
        digital.couple_title,
        ' в грязь у себя под боком…… всё-таки надо сойтись честно и в открытую.',
      ]);
      await era.printAndWait([
        'И с уже не просто самопровозглашённым владыкой ',
        opera.get_colored_name(),
        ' и с идущей по пятам ',
        doto.get_colored_name(),
        ', на скачке золотой дистанции……',
      ]);
      await you.say_and_wait([tenn_sho, ', это самая подходящая скачка.']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' на этой скачке не получит ни капли преимущества.',
      ]);
      await digital.say_and_wait(
        'Да! Вот оно! Токио, трава, 2000 метров — лучше не подобрать!',
      );
      await you.say_and_wait('Правда можно?');
      await digital.say_and_wait('Хоэ? Что ты имеешь в виду?');
      await you.say_and_wait('Будет довольно тяжело, знаешь?');
      await era.printAndWait([
        'Даже ',
        digital.get_colored_name(),
        ' перед таким тоже немного теряет дар речи.',
      ]);
      await digital.say_and_wait(
        '……ах, натура такая: как в игре не ставить минимальную сложность и не надевать мощную экипировку из подарочного DLC……',
      );
      await digital.say_and_wait('И ещё я хочу увидеть самый лучший бег!');
      await digital.say_and_wait('Так что ты ведь составишь мне компанию!');
      await you.say_and_wait('Конечно!');
      await era.printAndWait([digital.get_colored_name(), ' такова и есть.']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Начало летнего сбора (сеньорский год)';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} halo 圣王光环
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} h_call_d 圣王光环对爱丽数码的称呼
     * @param {PrintedSpan} nhk_cup NHK英里杯（上色版名字）
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (
      digital,
      halo,
      you,
      call_15,
      call_58,
      call_61,
      h_call_d,
      nhk_cup,
      tenn_sho,
    ) => {
      await digital.say_and_wait(
        'Мгхх, в этом году, только в этот раз…… времени нет! Надо остановиться!',
      );
      await era.printAndWait([
        'Едва начался летний сбор, как на глаза попалась схватившаяся за голову ',
        digital.get_colored_name(),
        ', как бы сказать, повидав столько раз ',
        digital.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' тоже постепенно понимает: ',
        digital.get_colored_name(),
        ' ',
        digital.sex,
        ' тоже увлекается выпуском додзинси.',
      ]);
      await era.printAndWait([
        digital.sex,
        'То, как ',
        digital.sex,
        ' таскает свои додзинси на фестивали и обращает ими народ, — любовь и впрямь нешуточная.',
      ]);
      await era.printAndWait(
        'К тому же ближайший крупный фестиваль как раз во время летнего сбора.',
      );
      await digital.say_and_wait([
        tenn_sho,
        '! Это лето обойдусь без нового выпуска ',
        call_61,
        ', всё отдаю скачке!',
      ]);
      await era.printAndWait([
        'Похоже, ',
        digital.get_colored_name(),
        ' и впрямь очень дорожит этой схваткой с T.M. Opera O и Meisho Doto, так что за этот летний сбор можно не волноваться.',
      ]);
      await halo.say_and_wait('Ара, тогда я пока этого не увижу.');
      await digital.say_and_wait(['Шуэ! ', call_61, '!']);
      await halo.say_and_wait([
        'Кстати, ',
        h_call_d,
        ', в этом году ты ведь выходишь на ',
        tenn_sho,
        ', да?',
      ]);
      await digital.say_and_wait([
        'Д-да…… в конце концов меня уже ',
        call_61,
        ' закаляла, и тело, и дух…… наконец настало время решительной схватки с ',
        call_15,
        ' ',
        call_58,
        '!',
      ]);
      await halo.say_and_wait([
        'Тогда ',
        tenn_sho,
        ' — схватка троих — нет, четверых.',
      ]);
      await digital.say_and_wait([
        'Э? Есть ещё другие признанные сильными ',
        digital.uma_sex_title,
        ' -тян?',
      ]);
      await halo.say_and_wait(['Нынешний ', nhk_cup, ' ты ведь смотрела?']);
      await digital.say_and_wait([
        'Конечно, ведь я же ',
        digital.get_colored_name(),
        '! Ахахаха…… неужели……',
      ]);
      await era.printAndWait([
        'На деле ',
        you.get_colored_name(),
        ' на днях тоже слышал(а) слухи, а именно……',
      ]);
      await halo.say_and_wait([
        'Kurofune — ',
        digital.sex,
        ' собирается выступить на нынешнем ',
        tenn_sho,
        '.',
      ]);
      await era.printAndWait([
        'Kurofune…… взявшая нынешний NHK ',
        digital.uma_sex_title,
        ', с ужасающим шагом.',
      ]);
      await era.printAndWait([digital.sex, 'Тоже выйдет на эту скачку.']);
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = 'Конец летнего сбора (сеньорский год)';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} call_61 爱丽数码对圣王光环的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      tenn_sho,
    ) => {
      await era.printAndWait([
        'На этом летнем сборе ',
        digital.get_colored_name(),
        ' и впрямь выложилась на славу, ',
        you.get_colored_name(),
        ' ещё ни разу не видел(а) такую серьёзную ',
        digital.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'С сэмпаем ',
        opera.get_colored_name(),
        ' ',
        doto.get_colored_name(),
        ' уговор, схватка с кохаем Kurofune -- два фактора, и сейчас ',
        digital.get_colored_name(),
        ' в форме как никогда!',
      ]);
      await digital.say_and_wait([
        callname,
        ', я это чувствую, это чувство -- будто герой, которого баффанули все! Так я и выйду на ',
        digital.couple_title,
        ' дуэль!',
      ]);
      await you.say_and_wait('Смогу победить?');
      await digital.say_and_wait(
        'Честно -- одна тревога! Те трое: кто ни возьми, уверенности в победе нет...',
      );
      await digital.say_and_wait(
        'Так что всё, что я могу, -- опереться на весь свой пёстрый опыт!',
      );
      await era.printAndWait([
        'Какой бы высокой ни встала стена впереди, ',
        digital.get_colored_name(),
        ' не в смятении.',
      ]);
      await era.printAndWait('Но той ночью...');
      await era.printAndWait(
        'пришла весть, что Kurofune не сможет выйти на скачку.',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' в тот вечер ',
        you.get_colored_name(),
        ' позвала на ночной пляж и там, потупив голову, молчала.',
      ]);
      await era.printAndWait([
        'Спустя долгое время ',
        digital.get_colored_name(),
        ' наконец заговорила --',
      ]);
      await digital.say_and_wait([
        callname,
        '...Скажи, такое и правда бывает?',
      ]);
      await era.printAndWait([
        'Перелом, счёт фанатов, голоса, жребий, уклонение... невыход по любым таким причинам ',
        digital.get_colored_name(),
        ' уже видела.',
      ]);
      await era.printAndWait([
        'Но чтобы слотов на скачку вдруг не хватило -- такого ',
        digital.get_colored_name(),
        ' ещё не встречала.',
      ]);
      await digital.say_and_wait(
        'Потому что это скачка, всегда будут улыбки победы и слёзы поражения.',
      );
      await digital.say_and_wait([
        'Но впереди слёз обязательно есть то, что берёт за душу, и потому ',
        digital.uma_sex_title,
        ' могут снова столкнуться на следующем скаковом поле.',
      ]);
      await digital.say_and_wait(
        '...Но... если даже бежать нельзя, тогда как...',
      );
      await era.printAndWait('Всё подготовила -- и на скачку нельзя.');
      await digital.say_and_wait([
        'Если из-за моего выхода ',
        digital.sex,
        ' лишится мечты...',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' очень подавлена, уже готова отступить.',
      ]);
      await you.say_and_wait([
        'Ты что, хочешь сказать, что сама не пойдёшь на ',
        tenn_sho,
        '?!',
      ]);
      await digital.say_and_wait('То... нет, не так.');
      await digital.say_and_wait([
        'Даже я, даже я -- есть же с ',
        call_15,
        ' и ',
        call_58,
        ' уговор...',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' понимает: ',
        digital.sex,
        ' ничего не изменить.',
      ]);
      await era.printAndWait([
        'Потому что любит ',
        digital.uma_sex_title,
        ', беда той ',
        digital.uma_sex_title,
        ' как водоросли путает ноги, и ',
        digital.sex,
        ' вязнет.',
      ]);
      await era.printAndWait('Но если так и оставить...');
      await you.say_and_wait([
        'Верь, ',
        digital.sex,
        ' справится. И я тоже верю тебе.',
      ]);
      await digital.say_and_wait([
        'Это... это что значит? Верить, что выстоит ',
        digital.sex,
        '……?',
      ]);
      await you.say_and_wait([
        'Kurofune: ',
        digital.sex,
        ' шаг не остановит. ',
        digital.sex,
        ', ещё будет следующий год. А в этом году ',
        tenn_sho,
        ',',
        digital.sex,
        ' и правда не выйти...',
      ]);
      await you.say_and_wait([
        'Но ты думаешь, ',
        digital.sex,
        ' сломается и сразу завершит карьеру?',
      ]);
      await digital.say_and_wait('! То... то точно нет.');
      await era.printAndWait([
        'Сильную ',
        digital.uma_sex_title,
        ' такими ударами не свалить.',
      ]);
      await you.say_and_wait(
        'Выдай свой лучший ответ -- вот лучшая помощь Kurofune.',
      );
      await digital.say_and_wait([
        '……',
        digital.uma_sex_title,
        '-тян, то, за что в муке хватаются напоследок, -- пройдя через тех нескольких, я знаю: это вещь без равных.',
      ]);
      await digital.say_and_wait(
        'Вся печаль, что принесло, даже та горечь, станет силой на завтра! Я поняла! Ведь сама это прожила!',
      );
      await digital.say_and_wait([
        'Поэтому я, я и могу из глубины души сказать: ',
        digital.uma_sex_title,
        ' так прекрасны!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' вскочила и побежала к морю --',
      ]);
      await digital.say_and_wait([
        digital.uma_sex_title,
        ', какую бы муку ни кинули -- несгибаемой волей всё, отшвырну ааааа!!!!!!',
      ]);
      await digital.say_and_wait([
        'И я, и ',
        digital.sex,
        '! Обе точно перешагнём!!!!',
      ]);
      await digital.say_and_wait('...ааа...');
      await era.printAndWait([
        'Выкричавшись, ',
        digital.get_colored_name(),
        ' пришла в себя.',
      ]);
      await you.say_and_wait('Похоже, Диджитал, ты уже нашла ответ.');
      await digital.say_and_wait([
        '...Я, я тоже не могу здесь застрять. Обязательно, обязательно то драгоценное, что взяла у ',
        call_61,
        ', пусть увидит ',
        digital.sex,
        '!',
      ]);
      await digital.say_and_wait([
        'Я, я обязательно выйду на ',
        tenn_sho,
        ', и ещё, ещё! обязательно возьму подавляющую победу!',
      ]);
      await digital.say_and_wait([
        'Пусть ',
        digital.sex,
        ', чтобы в следующем году на этих скачках догнать меня, выложилась до конца!',
      ]);
      await digital.say_and_wait('Обязательно! Обязательно!');
      await digital.say_and_wait([
        'И ещё -- все чувства встреченных ',
        digital.uma_sex_title,
        ' -- выплеснуть до капли!',
      ]);
      await digital.say_and_wait('Вот она, моя ответственность!');
      await era.printAndWait(
        'Нужно победить, и победить крупно -- только так оборвать последнее сожаление Kurofune.',
      );
      await era.printAndWait([
        'Вот ответственность, что ',
        digital.get_colored_name(),
        ' возложила на себя.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = 'Tenno Sho Autumn начинается!';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} doto 名将怒涛
     * @param {PrintedSpan} call_15 爱丽数码对好歌剧的称呼
     * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
     * @param {PrintedSpan} o_call_di 好歌剧对爱丽数码的称呼
     * @param {PrintedSpan} do_call_di 名将怒涛对爱丽数码的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (
      digital,
      opera,
      doto,
      call_15,
      call_58,
      o_call_di,
      do_call_di,
      tenn_sho,
    ) => {
      await era.printAndWait(['Наконец настал день ', tenn_sho, '.']);
      await era.printAndWait([
        'В паддоке ',
        digital.get_colored_name(),
        ' столкнулась с теми двумя знакомыми.',
      ]);
      await digital.say_and_wait([
        'Прошу любить и жаловать! ',
        call_15,
        ',',
        call_58,
        '.',
      ]);
      await doto.say_and_wait([
        'Это мне нужно! Прошу любить и жаловать, ',
        do_call_di,
        '!',
      ]);
      await era.printAndWait([
        'Спустя три года ',
        digital.get_colored_name(),
        ' наконец смогла нормально говорить перед своими оши.',
      ]);
      await opera.say_and_wait(
        'А-ха-ха-ха, вы что, визитки раздаёте? Но я -- владыка, само моё сияние уже говорит всё обо мне! Представляться незачем!',
      );
      await opera.say_and_wait([
        o_call_di,
        ', добро пожаловать на мою коронацию!',
      ]);
      await opera.say_and_wait(
        'Твои усилия я видела, вынуждена признать: ты тоже добралась нам в спину.',
      );
      await opera.say_and_wait([
        'Но сзади -- это сзади! ',
        o_call_di,
        ', на этой траве ты меня ещё не победишь, я -- 『Владыка конца века』, я несусь по средней дистанции по траве!',
      ]);
      await digital.say_and_wait(
        'Верно... как ты и сказала, в голой силе я тебе ещё не ровня...',
      );
      await digital.say_and_wait('Но мой навык, навык на траве и на грунте...');
      await era.printAndWait([
        'Да, в этой скачке по траве двуклинковая ',
        digital.get_colored_name(),
        ', её козырь... ещё чуть подождать -- и станет ясно.',
      ]);
      await era.printAndWait('Кап... кап...');
      await era.printAndWait('Хлясь... хлясь...');
      await era.printAndWait('Сначала лишь капля -- и сразу накрыло всё!');
      await era.printAndWait(['Да, heavy, этот ', tenn_sho, ' -- heavy!']);
      await digital.say_and_wait([
        'Это... ',
        digital.uma_sex_title,
        ' -тян льёт слезами? Нет, это всех встреченных мной ',
        digital.uma_sex_title,
        ' -тян слёзы радости -- дождь в честь моей победы!',
      ]);
      await opera.say_and_wait(
        '...Дождь?... Сразу скажу: я сильна на heavy, владыка приспособлен к любой дорожке!',
      );
      await doto.say_and_wait('А-ва-ва-ва... дождь а-а-а...');
      await era.printAndWait([
        'T.M. Opera O сильна на heavy, но ',
        digital.get_colored_name(),
        ',',
        digital.sex,
        ' не просто сильна на нём!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' буквально бегала по грязи: при таком раскладе...',
      ]);
      await era.printAndWait('Возможен только выигрыш.');
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = 'Победа в Tenno Sho Autumn';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} tenn_sho 秋季天皇赏（上色版名字）
     */
    const f = async (digital, you, callname, tenn_sho) => {
      await era.printAndWait('Тук-тук-тук-тук --');
      await era.printAndWait([
        'Под глухой дробью шагов ',
        digital.uma_sex_title,
        ' всё ближе к трибунам, и тут неожиданно по внешней --',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        digital.get_colored_name(),
        '! Это ',
        digital.get_colored_name(),
        '! В дождь, по растерзанной траве, вынырнула из гущи, взяла лучшую дорожку! И --!',
      ]);
      await you.say_as_passer_by_and_wait('Комментатор', [
        'Финиш! Невероятным бегом покорила ',
        tenn_sho,
        ' -- это -- ',
        digital.get_colored_name(),
        '!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' копила знания, навык и чувства -- и это дало ',
        digital.get_colored_name(),
        ' лучшие условия на этот раз.',
      ]);
      await era.printAndWait([
        digital.sex,
        ' на грязной траве словно дома: и выбор пути, и финишное ускорение -- как тренер ',
        you.get_colored_name(),
        ' тоже не находит ни единого изъяна.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' непреклонно берёт победу.',
      ]);
      era.println();
      await digital.say_and_wait('Хе-хе... кхе-кхе-кхе... а-ха-ха-ха...');
      await digital.say_and_wait('Это... моя победа, да.');
      await you.say_and_wait('Да, это твоя победа, Диджитал.');
      await era.printAndWait([
        digital.get_colored_name(),
        ' повернулась к трибунам.',
      ]);
      await digital.say_and_wait('Уо-о-о-о-о-о-о-о-о-о-о-о-о-о!');
      await you.say_as_passer_by_and_wait(
        'Трибуны',
        'Уо-о-о-о-о-о-о-о-о-о-о-о-о-о!',
      );
      await digital.say_and_wait('Хей-ва-а-а-а-а-а-а-а-а-а-а!');
      await you.say_as_passer_by_and_wait(
        'Трибуны',
        'Хей-ва-а-а-а-а-а-а-а-а-а-а!',
      );
      await digital.say_and_wait('Ии! Хей! О! О-о-о-о-о-о!');
      await you.say_as_passer_by_and_wait(
        'Трибуны',
        'Ии! Хей! О! О-о-о-о-о-о!',
      );
      await era.printAndWait('Ха-ха-ха-ха, горло от крика уже садится.');
      await era.printAndWait([
        'И не обычное скандирование имени — очень в стиле ',
        digital.get_colored_name(),
        ', да?',
      ]);
      await era.printAndWait([
        'С широко раскинутыми руками подбегает к ',
        you.get_colored_name(),
        ' и через перила поднимает ',
        you.get_colored_name(),
        ' на руки.',
      ]);
      await digital.say_and_wait([
        callname,
        '! Неведомое, это неведомый пейзаж!',
      ]);
      await digital.say_and_wait(
        'На сцене чувствовать силу Call! Это ощущение и вправду несравнимо ни с чем!',
      );
      await you.say_and_wait(
        'Да! Это Call, что принадлежит только тебе, Диджитал, единственный Call!',
      );
      await digital.say_and_wait('Kurofune…… я забрала победу у тех двоих……');
      await era.printAndWait([
        'Что бы ни испытывала ',
        digital.sex,
        ' — сожаление или печаль, увидев эту гонку, ',
        digital.sex,
        ', наверняка вздохнёт свободно.',
      ]);
      await digital.say_and_wait(
        'Одной мне бы не удалось — всегда так думала. Поэтому я вкладывала желания в оси……',
      );
      await digital.say_and_wait('Но……');
      era.printButton('「Мой первый оси — это ты!」', 1);
      await era.input();
      await digital.say_and_wait([
        'А-ха-ха-ха, э-хе-хе…… ',
        callname,
        ', сейчас так говорить, ну это…… я, я……',
      ]);
      await digital.say_and_wait([
        'Да-да-дай! Тебе service! Да-да-да, это фан-сервис! ',
        callname,
        ', хочешь волос с моего хвоста?!',
      ]);
      await era.printAndWait([
        'Похоже, ',
        digital.get_colored_name(),
        ' от радости уже начинает нести какую-то бессмыслицу.',
      ]);
      era.printButton('「На подиум, все ждут.」', 1);
      await era.input();
      await digital.say_and_wait('Ооо, какая дерзость — чуть не забыла!');
      await era.printAndWait([
        'Одним махом перетаскивает ',
        you.get_colored_name(),
        ' через перила — ',
        digital.get_colored_name(),
        ' и ',
        you.get_colored_name(),
        ' выходят на подиум.',
      ]);
      era.println();
      await digital.say_and_wait([
        'Сп-сп-сп-спасибо! Я ',
        digital.get_colored_name(),
        '! По сути я просто люблю ',
        digital.uma_sex_title,
        ' -тян……',
      ]);
      await digital.say_and_wait([
        'Я просто гналась за ',
        digital.uma_sex_title,
        ' -тян — за задом…… ой нет, за хвостом — и так добралась сюда……',
      ]);
      await digital.say_and_wait([
        'Понимаете! Это чувство!? Сначала я даже не обычная ',
        digital.uma_sex_title,
        ' -тян, просто фанат!',
      ]);
      await digital.say_and_wait(
        'Но смешаться с этим блеском, в этом канон-пейзаже финишировать самой первой, правда…… бесконечно благодарна……',
      );
      await digital.say_and_wait(
        'Победа — уже не только моя: это кристалл всех, кого я встречала,',
      );
      await digital.say_and_wait([
        'По пути ',
        digital.uma_sex_title,
        ' -тян, фанаты, которых сначала не ждала, и ',
        callname,
        '!',
      ]);
      await digital.say_and_wait('Сегодня победу мне дали все.');
      await digital.say_and_wait('Благодарю…… правда, очень, благодарю……');
      await digital.say_and_wait([
        digital.uma_sex_title,
        '-тян, по сравнению с представлявшейся мне, когда я была фанатом, ',
        digital.uma_sex_title,
        ' -тян…… ярче во сто, в тысячу раз……',
      ]);
      await era.printAndWait([
        'И говоря, ',
        digital.get_colored_name(),
        ' уже начинает представлять участниц скачки.',
      ]);
      await digital.say_and_wait(
        'Видели! Лихая короткая стрижка, колыхание в рывке……',
      );
      await digital.say_and_wait('И сумка, качающаяся с шагом……');
      await digital.say_and_wait(
        'Есть Kurofune, кого сегодня нет: если получится, когда-нибудь обязательно вместе по грунту……',
      );
      era.println();
      await era.printAndWait([
        'Разговорившись, ',
        digital.get_colored_name(),
        ' всё ещё болтает……',
      ]);
      await you.say_as_passer_by_and_wait('сотрудник', [
        digital.get_colored_name(),
        ", тренер, простите, что прерываю на самом подъёме…… Winner's Stage……",
      ]);
      await era.printAndWait([
        'Аааа, склоняешься к ',
        digital.get_colored_name(),
        ' и говоришь несколько слов, ',
        digital.sex,
        ' будто совсем не замечает.',
      ]);
      await era.printAndWait('Придётся тащить силой.');
      await digital.say_and_wait(['Эй-эй-эй, ', callname, '?']);
      await digital.say_and_wait('Стой, хотя бы ещё одну фразу, ещё одну——');
      await digital.say_and_wait([
        digital.uma_sex_title,
        ' — это — так — классно ——!!!!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = 'Рождество';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {CharaTalk} l_call_d 鲁铎象征对爱丽数码的称呼
     */
    const f = async (digital, luna, you, callname, l_call_d) => {
      await era.printAndWait([
        'Трейсен обычно поддерживает свободные занятия на Рождество: для ',
        digital.uma_sex_title,
        ' это тоже особый день.',
      ]);
      await era.printAndWait([
        'Помимо выезда за кампус, чтобы дать некоторым своеобразным ',
        digital.uma_sex_title,
        ' немного света, школа внутри тоже проводит крупное мероприятие.',
      ]);
      await era.printAndWait([
        'С ',
        digital.get_colored_name(),
        ' сноваешь по площадкам, подъедаешь и подпиваешь, играешь во всякие игры, и ещё с ',
        digital.get_colored_name(),
        ' бурно обсуждаешь.',
      ]);
      await era.printAndWait([
        'Вдруг ',
        luna.get_colored_name(),
        ' и компания появляются перед ',
        you.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait('Ува-ва, слишком шумели?');
      await luna.say_and_wait('Не волнуйся — скорее награда.');
      await era.printAndWait([
        'Дальше, ',
        digital.sex,
        ' достаёт из-за спины большую коробку и протягивает ',
        digital.get_colored_name(),
        '……',
      ]);
      await digital.say_and_wait('Это……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' открывает коробку — внутри—',
      ]);
      await era.printAndWait(
        'Стопка цветной бумаги…… густо исписанной всякими…… именами?',
      );
      await digital.say_and_wait('Нет, это, это……! Автографы!');
      await era.printAndWait([
        'Автографы! Вглядевшись — внутри полно знакомых ',
        digital.uma_sex_title,
        ' собственноручных автографов?!',
      ]);
      await digital.say_and_wait(
        'Аааа…… даже по одному сколько ма-монет…… сколько у меня на счету……',
      );
      await luna.say_and_wait([
        'Это благодарность всех, кто за это время получил от ',
        l_call_d,
        ' помощь или поддержку, всех ',
        digital.uma_sex_title,
        ', и как президент ученического совета я тоже очень благодарна тебе за пиар школы……',
      ]);
      await luna.say_and_wait([
        'И, ',
        l_call_d,
        ' твоё хобби…… довольно своеобразно, поэтому я собрала всех, кто любит ',
        l_call_d,
        ', твоих ',
        digital.uma_sex_title,
        ', и приготовила тебе этот подарок.',
      ]);
      await era.printAndWait([
        'Получив такой подарок, ',
        digital.get_colored_name(),
        ' ',
        digital.sex,
        '……',
      ]);
      await digital.say_and_wait(
        'А-ва-а-ва…… неужели это…… «пушащий всегда бывает пушим»……',
      );
      await you.say_as_passer_by_and_wait('Толпа', [
        'С праздником! ',
        digital.get_colored_name(),
      ]);
      await digital.say_and_wait([callname, '!', callname, '! Это……']);
      await era.printAndWait([
        'Сразу «канон-теряет сознание» и опирается на ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Неожиданно поменявшая местами роли ',
        digital.get_colored_name(),
        ', сегодня тоже насладилась радостью быть пушимой.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = (digital) => [
      'Просто обычная ',
      digital.uma_sex_title,
      digital.sex,
    ];
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} dober 目白多伯
     * @param {CharaTalk} kris 吉兆
     * @param {CharaTalk} diamond_lord 钻石君主（爱丽数码剧情 NPC）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_59 爱丽数码对目白多伯的称呼
     * @param {PrintedSpan} do_call_di 目白多伯对爱丽数码的称呼
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      digital,
      dober,
      kris,
      diamond_lord,
      you,
      callname,
      call_59,
      do_call_di,
      arim_kin,
    ) => {
      await era.printAndWait([
        ' В последние дни морозного декабря, хотя ещё жив жар от недавнего ',
        arim_kin,
        ', и став свидетелем ',
        kris.get_colored_name(),
        ' красивого финиша, ',
        digital.get_colored_name(),
        ' всё же сразу ныряет в подготовку CM.',
      ]);
      await era.printAndWait(
        'Даже как хозяйка стола можно войти заранее и обустроиться, но……',
      );
      await era.printAndWait(
        'Всё равно невольно вздыхаешь: одних только хозяев столов всё равно полно.',
      );
      await era.printAndWait([
        'Смотришь, как свирепая длинная змея всё вьётся к выставочному центру, — ещё не скоро ваша очередь.',
      ]);
      await digital.say_and_wait([
        'Хм-хм-хм, ',
        callname,
        ', ты не сидел(а) в обычной очереди зрителей: тогда и перед, и за Tokyo Big Sight — волна, куда морковку не вкинешь!',
      ]);
      await era.printAndWait([
        '……К счастью, ',
        digital.get_colored_name(),
        ' как хозяйка стола может пройти вместе по раннему проходу.',
      ]);
      await era.printAndWait([
        'Видишь, как ',
        digital.get_colored_name(),
        ' несёт особый большой рюкзак с кучей крючков, на котором всякие мелкие фигурки, брелоки……',
      ]);
      await era.printAndWait('Говорят, внутри ещё стопка свитков……');
      era.printButton('「Э, Диджитал, это же не всё ты одна сделала?」', 1);
      await era.input();
      await era.printAndWait([
        'Шур-шур, когда ',
        digital.get_colored_name(),
        ' поворачивается, металлы на куче брелоков сталкиваются, издавая резкий звон.',
      ]);
      await digital.say_and_wait([
        'Мм…… ',
        callname,
        ', ты удивлён(а) моему объёму работы? На деле тут немало репринтов — то есть прежние работы Диджитал.',
      ]);
      await era.printAndWait('Раньше, раньше……');
      await digital.say_and_wait([
        'С дебюта объём работ у меня, Диджитал, сильно упал: на ивентах обычно одна-две тонкие книжки, и ещё бывают пропуски……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' поворачивается и смотрит на огромный Tokyo Big Sight.',
      ]);
      await digital.say_and_wait([
        'Может…… потом вернусь к нормальной скорости.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' понимает слова ',
        digital.get_colored_name(),
        ' и понимает ',
        digital.get_colored_name(),
        ', почему так…… подавлена……?',
      ]);
      await era.printAndWait([
        'Смотря на ',
        digital.get_colored_name(),
        ' чуть безжизненный от раннего подъёма взгляд, ',
        you.get_colored_name(),
        ' вспоминает……',
      ]);
      await era.printAndWait('То была грунтовая гонка, шёл дождь.');
      await era.printAndWait([
        'Холодный ветер с мелким дождём яростно забивается в плащ ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Наверное, ',
        digital.get_colored_name(),
        ' тоже было холодно.',
      ]);
      await era.printAndWait([
        'На трассе ',
        digital.get_colored_name(),
        ', вся в грязи: изначально цвета макарон скаковой костюм чуть посерел.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' не видит результатов на табло, ',
        you.get_colored_name(),
        ' видит только ',
        digital.get_colored_name(),
        ', которая подняла голову и смотрит на табло.',
      ]);
      era.drawLine();
      await era.printAndWait([
        'Очередь на деле не такая длинная, как казалось, — не заметил(а), как уже вошли в зал.',
      ]);
      await era.printAndWait([
        'Трудно протискиваясь в ',
        digital.uma_sex_title,
        ' зону, внутри несколько хозяев столов, что обустраиваются, видят ',
        digital.get_colored_name(),
        ' и издали машут ',
        digital.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' похоже, здесь весьма известна.',
      ]);
      await digital.say_and_wait('Оооо?');
      await era.printAndWait([
        'Нм? Проследив за взглядом ',
        digital.get_colored_name(),
        ', видишь слегка грузную от обилия одежды, в маске и кепке…… ',
        digital.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Хотя кепка самая обычная, по чуть приподнятой форме в целом понятно, что это ',
        digital.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'И вообще все примерно знают, что ',
        digital.sex,
        ' — это……',
      ]);
      await digital.say_and_wait([
        'До…… ',
        { color: dober.color, content: ' Сиромэ-сэнсэй', fontWeight: 'bold' },
        '! В этот раз у тебя тоже новые выпуски?! Спасибо за три штуки!',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' подошла к Добер…… эм, к стенду ',
        {
          color: dober.color,
          content: ' Сиромэ-сэнсэй',
          fontWeight: 'bold',
        },
        ' и сразу забронировала три экземпляра.',
      ]);
      await era.printAndWait([
        'А Добер…… ладно, ',
        {
          color: dober.color,
          content: ' Добер-сэнсэй',
          fontWeight: 'bold',
        },
        ' тоже воровато окинула взглядом стороны и, убедившись, что остальные (сознательно) отводят глаза……',
      ]);
      await era.printAndWait([
        'тихо достала из рюкзака изящно упакованную вещицу и протянула взволнованной ',
        digital.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('После всевозможных обменов вот-вот настанет……');
      await era.printAndWait('официальное открытие CM!');
      await era.printAndWait(
        'Сколько ни смотри, всё равно вырывается вздох: людей слишком много, а Земля слишком мала.',
      );
      await you.say_as_unknown_and_wait('Ооооооо!');
      await era.printAndWait(
        'От входных ворот несутся душевные вопли толпы: люди с самого переда несутся прямиком в самые горячие зоны, а у стенда вежливо сбавляют шаг, протягивают купюры и забирают драгоценные трофеи.',
      );
      await era.printAndWait(
        'Спереди по-прежнему хлыщет толпа, а следом на место прибывает……',
      );
      await diamond_lord.say_as_unknown_and_wait([
        'Ээй! ',
        do_call_di,
        '! Я пришла!',
      ]);
      await era.printAndWait([
        'Вдалеке из толпы выскочила рыжая ',
        digital.uma_sex_title,
        ' и за счёт ',
        digital.uma_sex_title,
        ' скорости сразу оказалась перед ',
        digital.get_colored_name(),
        '.',
      ]);
      await digital.say_and_wait(['Как обычно, вот новые выпуски, держи~']);
      await era.printAndWait([
        'Принявшая новые выпуски ',
        digital.uma_sex_title,
        ' ускакала мелкими прыжками: первый покупатель, но дальше……',
      ]);
      era.printButton(
        '「Диджитал…… хотя о твоей известности я и так немного слышала……」',
        1,
      );
      await era.input();
      await era.printAndWait(
        'Вот-вот…… вот-вот не справиться: то достаёт свёрнутые постеры из сумки, то пересчитывает принятую наличку……',
      );
      await era.printAndWait(
        'Не спрашивайте, почему нет электронной оплаты: с момента входа телефон тихо лежит в кармане и больше не издаёт ни звука.',
      );
      await era.printAndWait([
        'После долгой непрерывной суеты наконец можно выставить табличку 「Распродано」.',
      ]);
      era.println();
      await era.printAndWait([
        'Как раз в разговоре с ',
        digital.get_colored_name(),
        ' о том, не заглянуть ли в официальный павильон URA, когда ',
        {
          color: dober.color,
          content: ' Добер-сэнсэй',
          fontWeight: 'bold',
        },
        ' подошла попрощаться.',
      ]);
      await dober.say_and_wait([
        do_call_di,
        ', хотя я хотела пригласить тебя пройтись по павильонам, очень жаль, но мне пора прощаться. Желаю тебе создавать ещё более прекрасные работы.',
      ]);
      await digital.say_and_wait(
        'Эээ, спасибо за всё! Я буду творить из последних сил!',
      );
      await digital.say_and_wait(
        'После дебюта я подрасслабилась с работами, но не волнуйся, после этого я вернусь в ритм!',
      );
      await dober.say_and_wait(['!']);
      await era.printAndWait([
        'Сквозь маску, даже только по глазам, видно, как у ',
        dober.get_colored_name(),
        ' резко меняются чувства.',
      ]);
      await era.printAndWait([
        digital.sex,
        'Сжала кулак и сняла маскировочные кепку и маску.',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' застыла, ',
        digital.sex,
        ' не понимает, почему ',
        dober.get_colored_name(),
        ' вдруг так разозлилась.',
      ]);
      await digital.say_and_wait(['Си…… ', call_59, '……?']);
      await era.printAndWait([
        dober.get_colored_name(),
        ' вынула из сумки ',
        digital.get_colored_name(),
        ' додзинси и положила обратно на стенд ',
        digital.get_colored_name(),
        '.',
      ]);
      await dober.say_and_wait([
        'Эту я как раз хотела посмотреть дома, извини.',
      ]);
      await era.printAndWait([
        dober.get_colored_name(),
        ' ушла не оглядываясь и даже не взглянула на то, как ',
        digital.get_colored_name(),
        ' пыталась её удержать.',
      ]);
      await digital.say_and_wait(['……']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' опустила голову, глядя на то самое додзинси, которое сама так изящно упаковала.',
      ]);
      await diamond_lord.say_as_unknown_and_wait(['Эм…… ', do_call_di, '?']);

      await era.printAndWait([
        'Это та самая рыжая ',
        digital.uma_sex_title,
        ',',
        digital.sex,
        ', что первой примчалась к стенду, тоже с огромным пакетом трофеев: похоже, тоже зашла поздороваться.',
      ]);
      await digital.say_and_wait([
        'Прости, что пришлось увидеть такое, ',
        diamond_lord.get_colored_name(),
        '. Я……',
      ]);
      await digital.say_and_wait([
        'Хочу спросить: для фаната желать ещё больше работ сэнсэй — разве это не…… нормально?',
      ]);
      await diamond_lord.say_and_wait('Да…… но……');
      await era.printAndWait([
        'По имени ',
        diamond_lord.get_colored_name(),
        ' — ',
        digital.uma_sex_title,
        ' ',
        digital.sex,
        '…… просто села на землю, стала рыться в том огромном рюкзаке и вынула из него толстую книгу.',
      ]);
      await era.printAndWait(
        'А как раскрыла, оказалось: это додзинси в толстой защитной обложке.',
      );
      await diamond_lord.say_and_wait(
        'Это додзинси, которое ты выпустила в первый год после дебюта……',
      );
      await diamond_lord.say_and_wait(
        'Тогда я ещё не была твоей фанаткой; эту я перекупила дорого у другого человека……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' поджимает губы и молчит.',
      ]);
      await diamond_lord.say_and_wait([
        'Даже купила по бешеным деньгам, но это та книжка, за которую, по-моему, заплатила правильнее всего, ',
        do_call_di,
        ' знаешь, почему?',
      ]);
      await diamond_lord.say_and_wait([
        'В этой нарисованы скачки совсем зелёной ',
        digital.uma_sex_title,
        '; кроме неизменной любви к ',
        digital.uma_sex_title,
        ', внутри есть ещё нечто иное.',
      ]);
      await diamond_lord.say_and_wait(
        'И ещё: я стала твоей фанаткой на той скачке, где бежала с тобой... а после ходила на каждую твою скачку.',
      );
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        ' Снова, как сокровище, заворачивает додзинси в толстую обложку, кладёт в рюкзак, затем ',
        digital.sex,
        ' взваливает рюкзак и уходит.',
      ]);
      era.drawLine();
      await era.printAndWait([
        digital.get_colored_name(),
        ' заворожённо смотрит, как снаружи косплеер знаменитой ',
        digital.uma_sex_title,
        ' танцует.',
      ]);
      await era.printAndWait([
        digital.couple_title,
        'Кто-то с накладными ушами — обычная ',
        digital.phy_sex_title,
        ', а кто-то надел косплей-уши прямо поверх своих — ',
        digital.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([
        'Глядя, как ',
        digital.couple_title,
        ' порхает в танце, ',
        digital.get_colored_name(),
        '……',
      ]);
      await digital.say_and_wait([callname, ', почему?']);
      era.printButton('「Про Добер спрашиваешь или про Монарха?」', 1);
      await era.input();
      await digital.say_and_wait('...Про обеих.');
      era.printButton(
        `「Диджитал, ты же та, кто умеет нестись по ипподрому, Скаковая ${digital.uma_sex_title}, да?`,
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' на этом вопросе ни к селу ни к городу замолкает на секунду и качает головой.',
      ]);
      await you.say_and_wait([
        'Хочу поблагодарить Добер и Монарха. Это ',
        digital.couple_title,
        ' заставила меня, ',
        callname,
        ', вспомнить.',
      ]);
      era.println();
      await era.printAndWait([
        'Та извращенка на дорожке, что сверлит взглядом других ',
        digital.uma_sex_title,
        ' — ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        'Если бы ты не была Скаковая ',
        digital.uma_sex_title,
        ', тогда кем была бы та Диджитал, которую видим я и твои фанаты?',
      ]);
      await digital.say_and_wait([
        'Та Диджитал... просто ещё не признала, как всё обстоит на самом деле...',
      ]);
      era.println();
      await era.printAndWait([
        'Даже когда впереди финишная прямая, всё та же ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        'Стоит ступить на ипподром — и ты уже Скаковая ',
        digital.uma_sex_title,
        ', ты уже та, за кого болеют фанаты!',
      ]);
      await digital.say_and_wait(['Стоит... ступить на ипподром?']);
      await you.say_and_wait([
        'Верно! Ты же сама фанатка — тебе ли не знать! Каждая ',
        digital.uma_sex_title,
        ' на ипподроме, как бы ни выступила, именно такова!',
      ]);
      era.println();
      await era.printAndWait([
        'Та, что прёт вперёд даже по грязи, ',
        digital.get_colored_name(),
        '……',
      ]);
      era.printButton(
        '「Ты давно уже стала той, кого фанаты несут на руках!」',
        1,
      );
      await era.input();
      await digital.say_and_wait('!');
      await era.printAndWait([
        digital.get_colored_name(),
        ' слышит это и вздрагивает всем телом.',
      ]);
      era.printButton('「Фан-сервис, поняла?!」', 1);
      await era.input();
      await digital.say_and_wait('Поняла!');
      era.println();
      await era.printAndWait([
        digital.get_colored_name(),
        ', честное слово...',
      ]);
      await digital.say_and_wait([
        'Уооооооо, нельзя же обмануть ожидания фанатов... ахахаха...',
      ]);
      era.println();
      await era.printAndWait([digital.uma_sex_title, 'Ах.']);
      await digital.say_and_wait('Ладно, ещё чуть-чуть постараюсь.');
      await era.printAndWait(
        'Брови опущены, взгляд мутный, ещё и на слезах — даже горькая улыбка, если угодно.',
      );
      await era.printAndWait(
        'Но такая улыбка наверняка выжмет слёзы у фанатов от умиления...',
      );
      await era.printAndWait('Ах, ничего не видно...');
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = 'Странница мира';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} opera 好歌剧
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} halo 圣王光环
     */
    const f = async (digital, opera, tachyon, doto, halo) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' всё ещё принимает вызовы и готовится к заграничной экспедиции.',
      ]);
      await digital.print_and_wait([
        'Не только ради побед, но и чтобы вместе с товарищами встретить ещё больше ',
        digital.uma_sex_title,
        '.',
      ]);
      await digital.print_and_wait(
        'На мало кому известном рейсе, чтобы заранее всё осмотреть...',
      );
      await digital.print_and_wait('Перед самым вылетом...');
      await digital.print_and_wait('Ох-хо, сколько знакомых пришло.');
      await digital.print_and_wait([
        halo.get_colored_name(),
        '、',
        opera.get_colored_name(),
        '、',
        doto.get_colored_name(),
        '、',
        tachyon.get_colored_name(),
        '...И Курофунэ тоже?',
      ]);
      await digital.print_and_wait(
        'Так это же просто на время, привыкнуть к загранице, скорее даже поездка?',
      );
      await digital.print_and_wait('И столько людей пришли прощаться?');
      await digital.print_and_wait([
        digital.get_colored_name(),
        ', ты и вправду невероятна.',
      ]);
      await digital.say_and_wait([
        'Но я уже не могу ждать! Встречи на чужбине — вместе с товарищами хочу встретить ',
        digital.uma_sex_title,
        ' со всего мира!',
      ]);
      await digital.print_and_wait([
        'Странница мира, ',
        digital.get_colored_name(),
        ', и сейчас всё ещё бежит.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
