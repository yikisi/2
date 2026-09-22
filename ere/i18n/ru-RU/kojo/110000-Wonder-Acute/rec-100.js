/**
 * @file 奇锐骏 - 招募
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} acute
   * @param {CharaTalk} you
   * @param {{ct:CharaTalk,cl:PrintedSpan}} nn
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tannhauser
   * @param {{ct:CharaTalk,cl:PrintedSpan}} mcqueen
   * @param {{ct:CharaTalk,cl:PrintedSpan}} gs
   * @param {{ct:CharaTalk,cl:PrintedSpan}} ardan
   * @param {{ct:CharaTalk,cl:PrintedSpan}} halo
   * @param {{ct:CharaTalk,cl:PrintedSpan}} oguri
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tama
   * @param {{ct:CharaTalk,cl:PrintedSpan}} grass
   * @param {{ct:CharaTalk,cl:PrintedSpan}} tachyon
   * @param {{ct:CharaTalk,cl:PrintedSpan}} coffee
   */
  async rec_start(
    acute,
    you,
    {
      nn,
      tannhauser,
      mcqueen,
      gs,
      ardan,
      halo,
      oguri,
      tama,
      grass,
      tachyon,
      coffee,
    },
  ) {
    await you.say_and_wait(
      '…Перед моим домом два дерева: одно — унаби, другое — тоже унаби.',
      true,
    );
    await you.say_and_wait(
      'Прости: цитата не затем, чтобы примазаться к литератору.',
      true,
    );
    await you.say_and_wait(
      'Просто хотелось что-то сказать… или как раз нечего.',
      true,
    );
    await you.say_and_wait('Работа сожрала уверенность тренера?', true);
    await you.say_and_wait(
      'Или череда забегов без передышки передавила?',
      true,
    );
    await you.say_and_wait(
      [
        'Или к скаковой ',
        acute.uma_sex_title,
        ', в которую вложил(а) настоящее, так и не решил(а), какую держать дистанцию — и ранил(а) обоих?',
      ],
      true,
    );
    await you.say_and_wait('Может, всё сразу… может, ничего.', true);
    era.drawLine();
    if (nn) {
      await nn.ct.used_to_say_and_wait(
        'Ладно-ладно. Ты обычный человек, устать — нормально.',
      );
    }
    if (tannhauser) {
      await tannhauser.ct.used_to_say_and_wait([
        'Ничего, ',
        tannhauser.cl,
        ' ～ подберись～',
      ]);
    }
    if (mcqueen) {
      await mcqueen.ct.used_to_say_and_wait([
        'Ну… в общем, не выпить ли с нами чаю, ',
        mcqueen.cl,
        '?',
      ]);
    }
    if (gs) {
      await gs.ct.used_to_say_and_wait(['О, ', gs.cl, ' ～ рамен, ах ты пёс?']);
    }
    if (ardan) {
      await ardan.ct.used_to_say_and_wait([
        'Ничего, ',
        ardan.cl,
        '! Лишь бы сила семьи Мэдзиро —',
      ]);
    }
    if (halo) {
      await halo.ct.used_to_say_and_wait([
        'О— хо-хо! Плевать на взгляды смертных. Твой дар и стать всегда признаю я, ',
        halo.ct.name,
        '!',
      ]);
    }
    if (oguri) {
      await oguri.ct.used_to_say_and_wait(['……', oguri.cl, ', есть охота.']);
    }
    if (tama) {
      await tama.ct.used_to_say_and_wait([
        'На, ',
        tama.cl,
        '. Это окономияки, тебе и ',
        tama.cl,
        ' по порции — съешь и взбодрись.',
      ]);
    }
    if (grass) {
      await grass.ct.used_to_say_and_wait([
        'Фу-фу～ какая милая, ',
        grass.cl,
        '～',
      ]);
    }
    if (tachyon) {
      await tachyon.ct.used_to_say_and_wait([
        'Ох, ',
        tachyon.cl,
        '! Раз так гложет — отведать зелье, от которого всё забудется? Бесплатно～',
      ]);
    }
    if (coffee) {
      await coffee.ct.used_to_say_and_wait([
        '…Если так и дальше, ',
        coffee.cl,
        '… тебя убьют, знаешь?',
      ]);
    }
    era.drawLine();
    await era.printAndWait('На крышу, сигарету…');
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} taste 秋川弥生/北方风味
   * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
   * @param {CharaTalk} you 玩家
   */
  async rec_rooftop(acute, taste, minoru, you) {
    await era.printAndWait(
      'Сумерки, крыша: машинально хочется закурить, чтобы на миг всё забыть.',
    );
    await era.printAndWait('Тянешься в карман.');
    await era.printAndWait('— Пусто.');
    era.drawLine();
    await era.printAndWait('Под закатом самолёт чертит оранжевую прямую.');
    await era.printAndWait(
      'Облокачиваешься на перила, смотришь в небо: никогда не было так свободно — и так тесно.',
    );
    await era.printAndWait([
      'Тогда, когда долг был сто двадцать один миллиард, ',
      taste.get_colored_name(),
      ' приютила ',
      you.get_colored_name(),
      ', дала ',
      you.get_colored_name(),
      ' быть тренером и как-то пролезть через ад выплат, заткнуть эту дыру.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' думает: и сейчас, может, ',
      taste.get_colored_name(),
      ' всё ещё верит ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      'Кроме ',
      taste.get_colored_name(),
      ' есть ещё ',
      minoru.get_colored_name(),
      ' и прочие подопечные ',
      acute.uma_sex_title,
      '……',
      you.get_colored_name(),
      ' думает: ',
      acute.couple_title,
      ' всё ещё ждёт от ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait('А это ожидание — разве не груз?');
    await era.printAndWait([
      'В конце концов ',
      you.get_colored_name(),
      ' тоже всего лишь 【смертный】.',
    ]);
    await era.printAndWait(
      'Тот, кто не тянет всё сразу, кому не следовало нести столько надежд, кто просто дерётся в миру и, будь можно, отступил бы — самый обычный 【смертный】?',
    );
    await you.say_and_wait('……………………');
    await you.say_and_wait('…………');
    await you.say_and_wait('……');
    await you.say_and_wait('Так хочется… убежать.', true);
    era.printButton('「Эх… (вздох)」', 1);
    await era.input();
    await acute.say_as_unknown_and_wait(
      'Ох-ох… вечно вздыхать — удача убежит, знаешь?',
    );
    await era.printAndWait([
      'И тут перед ',
      you.get_colored_name(),
      ' является та, что одного света с закатом, ',
      acute.uma_sex_title,
      '.',
    ]);
    await era.printAndWait([
      'Крыша Трейсена, остаток заката. ',
      you.get_colored_name(),
      ' оборачивается на голос: всегда мягко улыбающаяся ',
      acute.uma_sex_title,
      ' встаёт перед ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait(
      `${acute.sex} — и нет на ней того сияния из комиксов, что бывает только там; но поза, какую держит ${acute.sex}, всё равно незабываема.`,
    );
    await era.printAndWait(
      `Потому что ${acute.sex} — слишком к месту в этом закате.`,
    );
    await acute.say_as_unknown_and_wait(
      'Ох-ох… не делай такое обиженное лицо.',
    );
    await acute.say_as_unknown_and_wait(
      'Меня зовут Вандер Акют… н— мы вроде первый раз видимся?',
    );
    await acute.say_and_wait(
      'Прости, вдруг заговорить — не напугала? Такое лицо, будто сейчас заплачешь, стало тревожно.',
    );
    await acute.say_and_wait(
      'Школьные хулиганы? Травля на работе? Или просто голод?',
    );
    await acute.say_and_wait(
      'Если голод… на, это хрустящая сушёная редька～ не стесняйся, бери руками～',
    );
    await era.printAndWait(
      `Всё так же мягко улыбается, одного цвета с закатом, ${acute.sex} достаёт из-за спины стеклянную плошку, полную сушёной редьки.`,
    );
    await era.printAndWait(
      'Не угодливость, не заискивание и не фанатский пиар —',
    );
    await era.printAndWait([
      'а дистанция в самый раз: не близко, не далеко — и ',
      acute.sex,
      ' протягивает плошку, подносит редьку к ',
      you.get_colored_name(),
      '.',
    ]);
    await era.printAndWait(
      `И будто не своей волей: ${you.name} тоже тянет правую.`,
    );
    await era.printAndWait('Хрусть, хрусть, хрусть, хрусть—');
    await era.printAndWait(
      'Горчит чуть, а на зубах неожиданно свежо и хрустит.',
    );
    await era.printAndWait('Живот вроде не пустой… а всё равно —');
    await era.printAndWait('не хочется останавливаться.');
    await era.printAndWait(
      'Сначала кончиками — самый сухой край сверху, к зубам.',
    );
    await era.printAndWait('Потом щипком за середину — целиком в рот.');
    await era.printAndWait('Под конец сразу несколько пластин.');
    await era.printAndWait('Чем больше ешь, тем голоднее.');
    await era.printAndWait('Чем голоднее — тем непонятно откуда прохладнее.');
    await era.printAndWait([
      'Редьку в плошке в один миг ',
      you.get_colored_name(),
      ' проглатывает всю — и в живот.',
    ]);
    await acute.say_and_wait('Ох-ох… какая жадная еда～');
    await era.printAndWait(
      'На всегда мягком спокойном лице прибавляется улыбка.',
    );
    await acute.say_and_wait('Ну как, вкусно?');
    era.printButton('「…А, н.」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' молча киваешь и глотаешь желание извиниться за целую банку сушёной редьки.',
    ]);
    await acute.say_and_wait('Если вкусно — хорошо～ тогда садись.');
    await era.printAndWait([
      'Звать ',
      acute.get_colored_name(),
      ' — ',
      acute.teen_sex_title,
      ' садится к стене крыши лицом в закат.',
    ]);
    await era.printAndWait(
      `${acute.sex}Садясь, легко хлопает ладонью по пустому месту рядом.`,
    );
    await acute.say_and_wait('Когда тяжело, одной сидеть плохо～');
    await acute.say_and_wait(
      'Времени ещё полно, да? Что ни есть — можно медленно～',
    );
    era.drawLine();
    await era.printAndWait('В тот день, до заката.');
    await era.printAndWait([
      you.get_colored_name(),
      ' и сияющая с закатом ',
      acute.teen_sex_title,
      ' — та, кто потом станет подопечной ',
      you.get_colored_name(),
      ' — ',
      acute.teen_sex_title,
      ' ',
      acute.get_colored_name(),
      '.',
    ]);
    await era.printAndWait('Наговорили много-много —');
    era.println();
    await era.printAndWait([
      ' стал(а) тренером ',
      acute.get_colored_name(),
      '!',
    ]);
  },
};
