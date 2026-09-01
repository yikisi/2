/**
 * @file 奇锐骏 - 育成
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  ts_add: (() => {
    const title = 'Горячая дополнительная тренировка';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await acute.say_and_wait('Фу-фу-фу… если только такая нагрузка—');
      await era.printAndWait([
        'Тренировка только что закончилась, но в гимнастической форме ',
        acute.get_colored_name(),
        ' всё ещё выглядит так, будто ей мало.',
      ]);
      await acute.say_and_wait(
        'Если только такая нагрузка, до 『удовлетворения』 ещё очень далеко…',
      );
      await acute.say_and_wait(['Слушай-слушай, ', callname]);
      await era.printAndWait([
        ' Тянет одежду на себе, и с каждым вздохом от неё несёт горячим паром ',
        acute.get_colored_name(),
        '; сверкают яркие глаза—',
      ]);
      await acute.say_and_wait('Можно ещё продолжить? Я-то ещё могу—');
      era.print('…………Почему-то кажется, что в этих словах есть второй смысл.');
      era.printButton('Разрешить', 1);
      era.printButton('Отложить', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'Кивнул и согласился с ',
          acute.get_colored_name(),
          ' просьбой.',
        ]);
        await era.printAndWait(
          'Всё-таки, будучи тренером, как сказать, что сам не тянешь?',
        );
        await era.printAndWait([
          'Под закатным солнцем ',
          you.get_colored_name(),
          ' и фигура Вандер Акют продолжают нестись по полю—',
        ]);
      } else {
        await era.printAndWait([
          '…Почему-то кажется, что ',
          acute.get_colored_name(),
          ' нарочно подначивает, чтобы ты согласился;',
        ]);
        await era.printAndWait([
          'Наотрез отказал ',
          acute.get_colored_name(),
          ' в предложении и велел ',
          acute.get_colored_name(),
          ' пораньше помыться и отдохнуть.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_5: (() => {
    const title =
      'Сверх-ультимативный боевой бог гигантмакса, далее везде · шоколадный муссовый торт';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, minoru, taste, you, callname) => {
      await era.printAndWait([
        'Зима понемногу сходит, всё вокруг оживает; после встречи на крыше с похожей на бабушку ',
        acute.teen_sex_title,
        ' в мгновение ока наступила середина февраля.',
      ]);
      await era.printAndWait([
        'Нынче уже День святого Валентина, и на торговой улице рядом с академией Трейсен многие лавки вывесили 「валентиновскую распродажу」, чтобы продавать праздничные сладости.',
      ]);
      await era.printAndWait([
        'Львиная доля покупателей — разумеется, трейсенские ',
        acute.uma_sex_title,
        ' —хотя ',
        acute.uma_sex_title,
        ' в основном заняты скачками и к любви почти равнодушны. Но купить сладости друзьям в подарок на День святого Валентина — тоже очень даже ничего.',
      ]);
      await era.printAndWait([
        'Конечно, среди них есть и сотрудники академии Трейсен…… но это уже совсем другая история.',
      ]);
      await you.say_and_wait([
        '…Что? Спрашиваешь, зачем я пришёл на торговую улицу?',
      ]);
      await era.printAndWait([
        '—Ну так это же приказ ',
        taste.get_colored_name(),
        ' и ',
        minoru.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Кажется, увидев, что ',
        you.get_colored_name(),
        ' наконец выбрался из недавнего дурного настроения, ',
        minoru.get_colored_name(),
        ' предложила устроить валентиновскую вечеринку специально для сотрудников, чтобы как следует расслабиться.',
      ]);
      await era.printAndWait([
        'А задание забрать с торговой улицы заранее заказанный 「шоколадный муссовый торт」 легло на ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait([
        '…Похоже, меня используют как грузчика. Ну серьёзно, неужели ',
        minoru.get_colored_name(),
        ' меня так не любит?',
      ]);
      await era.printAndWait([
        'Вообще-то забирать 「шоколадный муссовый торт」 должна была ',
        minoru.get_colored_name(),
        '. Но она ',
        minoru.sex,
        ' во что бы то ни стало хотела, чтобы ',
        you.get_colored_name(),
        ' сходил туда лично…… ну и чудеса.',
      ]);
      await era.printAndWait([
        'Впрочем, сейчас уже поздно об этом говорить: раз уж пришёл, остаётся только сделать дело.',
      ]);
      await era.printAndWait([
        'С некоторой обречённостью ',
        you.get_colored_name(),
        ' вздохнул и вошёл в кондитерскую в конце торговой улицы…',
      ]);

      era.drawLine();
      await era.printAndWait([
        '…Это ещё что за коробка от торта ростом со статую Трёх богинь в школьном корпусе?',
      ]);
      await you.say_as_passer_by_and_wait('Продавщица', [
        '…Извините, что заставили ждать, ',
        you.actual_name,
        '; это заказ Хаякава ',
        minoru.adult_sex_title,
        ' для вас: 『сверх-ультимативный боевой бог гигантмакса, усиленная роскошная deluxe-версия · шоколадный муссовый торт』',
      ]);
      await era.printAndWait([
        '…Что, у вас в кондитерской все продавцы скороговорки так тараторят?',
      ]);
      await you.say_and_wait([
        '…Продавщица, вы уверены, что эта коробка, которая сейчас чуть ли не весь магазин забивает, и есть мой шоколадный муссовый торт?',
      ]);
      await you.say_as_passer_by_and_wait('Продавщица', [
        '? Вы 『 ',
        you.actual_name,
        ' 』, верно?',
      ]);
      await era.printAndWait([
        'Да, это правда ',
        you.get_colored_name(),
        ' имя……хотя в этот момент ',
        you.get_colored_name(),
        ' очень не хотел это признавать.',
      ]);
      await you.say_as_passer_by_and_wait('Продавщица', [
        'Тогда всё верно, Хаякава ',
        minoru.adult_sex_title,
        ' заказала для вас 『сверх-ультимативный боевой бог гигантмакса, усиленная роскошная deluxe-версия · шоколадный муссовый торт.』',
      ]);
      await era.printAndWait(['Ладно, теперь уже не отвертеться.']);
      await you.say_and_wait([
        '…Ладно, я отступлю на десять тысяч шагов, на десять тысяч шагов. Будем считать, что этот гигант передо мной и есть мой шоколадный муссовый торт. Но позвольте спросить: как мне его отнести в Трейсен?',
      ]);
      await you.say_as_passer_by_and_wait('Продавщица', [
        '? Вы же из академии Трейсен?',
      ]);
      await era.printAndWait([
        'Продавщица снова смотрит на ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Да, ',
        you.get_colored_name(),
        ' —……здесь нет варианта, чтобы ',
        you.get_colored_name(),
        ' сказал «нет».',
      ]);
      await you.say_as_passer_by_and_wait('Продавщица', [
        'Тогда всё просто—просто взвалить эту коробку на плечо и отнести обратно, разве нет?',
      ]);
      await you.say_and_wait([
        'Не-не-не-не-нет! Да я не смогу, слышите?! Вы меня за кого держите? За Геракла?!',
      ]);
      await you.say_as_passer_by_and_wait('Продавщица', [
        'Но ',
        acute.uma_sex_title,
        ' же смогла бы, правда?',
      ]);
      await you.say_and_wait([
        acute.uma_sex_title,
        ' тоже не смогла бы, слышите!? Не говорите так легко!',
      ]);
      await you.say_as_passer_by_and_wait('Продавщица', [
        'Но Хаякава ',
        minoru.adult_sex_title,
        ' смогла, знаете ли?',
      ]);
      await you.say_and_wait(['Хаякава…']);
      await era.printAndWait(['…………А, вот оно что.']);
      await era.printAndWait([
        'Так это же ',
        minoru.get_colored_name(),
        ', тогда всё сходится.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' вдруг всё встало на свои места, как и должно; поднимаешь голову, ',
        you.get_colored_name(),
        ' вдруг чувствует: в случившемся больше нет ни тоски, ни сомнений.',
      ]);
      await you.say_as_passer_by_and_wait('Продавщица', [
        'Короче, товар сдан — возврату не подлежит; это торт, который Хаякава ',
        minoru.adult_sex_title,
        ' заказала для вас—',
      ]);
      await era.printAndWait([
        'С этими словами продавщица ',
        you.get_colored_name(),
        ' почтительно кланяется.',
      ]);
      await you.say_as_passer_by_and_wait('Продавщица', [
        'Прошу расписаться в получении.',
      ]);

      era.drawLine();
      await you.say_and_wait(['Точка силы, точка опоры, точка приложения…']);
      await you.say_and_wait(['Точка силы, точка опоры, точка приложения…']);
      await era.printAndWait([
        'Идёшь по улице с коробкой в несколько раз больше себя, и если бы это был не реальный мир, ',
        you.get_colored_name(),
        ' точно приняли бы за нового персонажа из Dark Souls.',
      ]);
      await era.printAndWait([
        'Чтобы коробка не завалилась под собственной тяжестью, ',
        you.get_colored_name(),
        ' вынужден нараспев твердить заклинание равновесия.',
      ]);
      await you.say_and_wait(['Точка силы, точка опоры, точка приложения…']);
      await you.say_and_wait(['Точка силы, точка опоры, точка приложения…']);
      await acute.say_and_wait([
        '…Слушай, ',
        callname,
        ', что это ты бормочешь за заклинание?',
      ]);
      await era.printAndWait(['!? ', acute.get_colored_name(), '!?']);
      await era.printAndWait([
        you.get_colored_name(),
        ' крутишь головой — и видишь: ',
        acute.get_colored_name(),
        ' согнувшись стоит рядом с ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait('Вандер Акют? Когда ты подошла?');
      await acute.say_and_wait([
        '…Когда ',
        you.actual_name,
        ' заходил в кондитерскую, я уже шла следом… слушай, ',
        you.actual_name,
        '; что это ты бормочешь за заклинание?',
      ]);
      await era.printAndWait([
        'То есть с самого начала шла следом… тогда уже не отвертеться.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' хотел улыбкой разрядить неловкость, но едва открыл рот, как пот со лба капнул ',
        you.get_colored_name(),
        ' на кончик языка, и от соли ',
        you.get_colored_name(),
        ' уже совсем не до смеха.',
      ]);
      await you.say_and_wait([
        'Это… заклинание, чтобы сохранить самообладание. Так называемая 『мантра спокойствия』—',
      ]);
      await acute.say_and_wait(['『Мантра спокойствия』…']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' задумчиво повторяет эти три слова: 「мантра спокойствия」.',
      ]);
      await era.printAndWait([
        '…Арэ? И никакого подкола? ',
        you.get_colored_name(),
        ' ждал, что подколют?',
      ]);
      await acute.say_and_wait([
        'Так это 『мантра спокойствия』, хорошо. А я уже думала, ',
        callname,
        ' сглазили…',
      ]);
      await you.say_and_wait(['Сглазили?']);
      await acute.say_and_wait([
        'Ага, всё-таки ',
        callname,
        ' вынес из кондитерской штуковину явно ненормального размера, да?',
      ]);
      await era.printAndWait(['О… так ты про это.']);
      await era.printAndWait([
        'Если подумать, со стороны парень с такой огромной коробкой и правда выглядит ненормально.',
      ]);
      await acute.say_and_wait(['Помочь тебе, ', callname, '?']);
      await era.printAndWait([
        'Даже если голос ',
        acute.get_colored_name(),
        ' всё такой же ласковый, тебе, согнувшемуся под громадиной, ',
        you.get_colored_name(),
        ' сейчас совсем не до того, чтобы искать утешение в спокойном лице ',
        acute.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait(['Не надо… таскать тяжести — дело молодых.']);
      await era.printAndWait([
        'Как само собой разумеется, отказался от помощи ',
        acute.get_colored_name(),
        '. ',
        you.get_colored_name(),
        ' всё же хранит крупицу тренерской гордости: как ни крути, хотя бы такую грубую работу, как таскать тяжести, ',
        you.get_colored_name(),
        ' никак не хочет свалить на ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Всё-таки ',
        acute.get_colored_name(),
        ' и так выглядит такой 「хрупкой」; как же можно, чтобы ',
        acute.sex,
        ' приняла оковы гравитации?',
      ]);
      await acute.say_and_wait([
        'Слушай, ',
        callname,
        ', по возрасту я ведь младше тебя, знаешь?',
      ]);
      await era.printAndWait([
        'Не сердится — лишь мягко поправляет; ',
        acute.get_colored_name(),
        ' говорит неспешно, как всегда.',
      ]);
      await era.printAndWait([
        'Затем ',
        acute.sex,
        ' выпрямляется; чуть сбавляет шаг; отступает в тот бок, где ',
        you.get_colored_name(),
        ' её уже не видит.',
      ]);
      await era.printAndWait([
        acute.sex,
        ' Поднимает голову, смотрит на значок шоколадного мусса на громадной коробке и шепчет так, что слышит только сама:',
      ]);
      await acute.say_and_wait([
        '……',
        callname,
        ', так ты любишь шоколадный торт—',
      ]);
      await era.printAndWait([
        'Сказав это, ',
        acute.get_colored_name(),
        ' выдыхает; протягивает правую руку к ',
        you.get_colored_name(),
        ' невидимой задней стороне коробки.',
      ]);
      await era.printAndWait([
        '—кончик вытянутого указательного пальца так и упирается в зад коробки.',
      ]);

      era.drawLine();
      await era.printAndWait([
        'Удивительно: ',
        you.get_colored_name(),
        ' так и не свалился по дороге.',
      ]);
      await era.printAndWait([
        'Сначала ',
        you.get_colored_name(),
        ' думал, что пока тащит гигантский шоколадный мусс, ',
        you.get_colored_name(),
        ' точно рухнет от бессилия. Но во второй половине пути ',
        you.get_colored_name(),
        ' вдруг почувствовал, как сзади стало необычайно легко; и под конец ',
        you.get_colored_name(),
        ' почти бегом добрался до Трейсена.',
      ]);
      await era.printAndWait([
        'Простившись с ',
        acute.get_colored_name(),
        ', хотя почему-то сзади снова потяжелело. Но оставалось всего два-три шага, ',
        you.get_colored_name(),
        ' быстро сдал гигантский шоколадный муссовый торт ',
        minoru.get_colored_name(),
        '.',
      ]);
      await minoru.say_and_wait([
        'Спасибо за работу, ',
        you.actual_name,
        '. На вечеринке тебя только и ждут, заходи—',
      ]);
      await you.say_and_wait('Прости, мне надо сначала отдохнуть.');
      await minoru.say_and_wait(['Э?']);
      await era.printAndWait([
        'Как ни крути, тащить такую коробку так далеко уже полностью вымотало ',
        you.get_colored_name(),
        '; сейчас ',
        you.get_colored_name(),
        ' вместо вечеринки больше всего хочет лечь и выспаться.',
      ]);
      await era.printAndWait([
        'Ещё раз объяснив ',
        minoru.get_colored_name(),
        ' в чём дело, ',
        you.get_colored_name(),
        ' не оглядываясь возвращается в комнату отдыха; сегодня снова был тяжёлый день.',
      ]);
      await era.printAndWait(['…………………']);
      await era.printAndWait(['………………']);
      await era.printAndWait(['…………']);
      await era.printAndWait([
        'Кстати, а зачем эту вечеринку вообще устраивали?',
      ]);
      await era.printAndWait(['Ладно, какая разница.']);

      era.drawLine();
      await era.printAndWait([
        'На следующее утро у двери комнаты отдыха стоит кусок шоколадного муссового торта с надписью 「поздравляю с выходом на работу」.',
      ]);
      await era.printAndWait(['Кто же его оставил? Вот любопытство.']);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'Беспокойство';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        'Июнь. Дебютный заезд ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Трек — небольшое ипподром рядом с Sapporo; как участники ',
        you.get_colored_name(),
        ' и ',
        acute.get_colored_name(),
        ' прибыли на место за день.',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('Беспокойство.');
      await era.printAndWait('Крайнее беспокойство.');
      await era.printAndWait(
        'Если искать сравнение — примерно как обнаружить в кабине Apollo 17, возвращающейся с Луны, внезапно появившийся на полу болт.',
      );
      await era.printAndWait(
        'Ночью не спится: даже просто лёжа на кровати, то и дело слышишь собственное беспокойное сердце.',
      );
      await era.printAndWait('…Честно говоря, получится ли?');
      await era.printAndWait([
        'Твоя подопечная ',
        acute.get_colored_name(),
        ' — правда сможет победить в этом заезде?',
      ]);
      await era.printAndWait('Сжатые ладони сами покрываются потом…');
      await acute.say_and_wait('……');
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait([
        'Оборачиваешься — ',
        acute.get_colored_name(),
        ' стоит у тебя за спиной.',
      ]);
      await era.printAndWait(
        'Инстинктивно прячешь за спину потные руки — вылитый ребёнок, которого поймали на шалости.',
      );
      await acute.say_and_wait(['Всё будет хорошо, ', callname, '.']);
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait('Это улыбка, тёплая, как солнце,');
      await era.printAndWait(
        'но глядя на неё, почему-то чувствуешь безымянную вину.',
      );
      await acute.say_and_wait(['Ты и так очень старался, ', callname, '.']);
      await acute.say_and_wait('Остальное предоставь мне.');
      await era.printAndWait([
        'Хлопнув ',
        you.get_colored_name(),
        ' по плечу, ',
        acute.get_colored_name(),
        ' не оборачивается: её гордая спина идёт к выходу из тоннеля—',
      ]);
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait('Какая гордая спина.');
      await era.printAndWait(
        'Глядя вслед величественной спине, в сердце само поднимается стыд—',
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {string} callname 奇锐骏对玩家的称呼
   */
  async begin_race_win(acute, you, callname) {
    await era.printAndWait('У горизонта тёмные птицы кружат над ипподромом,');
    await era.printAndWait('они повествуют, передают, рассказывают, выражают,');
    await era.printAndWait(
      'несут весть о гордой фигуре — и получают в ответ триумф—',
    );
    await era.printAndWait('Маленький ипподром, зрителей меньше сотни,');
    await era.printAndWait('овации, быть может, не так уж громогласны.');
    await era.printAndWait(
      'Но гордая, окрылённая фигура оставляет в сердце одного человека незабываемый след.',
    );
    await era.printAndWait([
      'На ипподроме ',
      acute.get_colored_name(),
      ' стоит в самом заслуженном центре.',
    ]);
    await era.printAndWait('На этой гордой фигуре — всё та же мягкая улыбка.');
    await era.printAndWait([
      'Под золотым сиянием ',
      acute.sex,
      ' высоко поднимает кулак.',
    ]);
    await era.printAndWait('—Какое сияние.');
    await era.printAndWait([
      'В тот священный миг, глядя прямо, ',
      you.get_colored_name(),
      ' на миг теряет дар речи.',
    ]);
    await era.printAndWait([
      'А пока ты был в прострации, ',
      acute.sex,
      ' уже закончила победный ритуал,',
    ]);
    await era.printAndWait([
      'На цыпочках ',
      acute.get_colored_name(),
      ' так и подходит—',
    ]);
    era.printButton('「——」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '  открыл рот, чтобы поздравить её: ',
      acute.sex,
      ' победила.',
    ]);
    era.printButton('「…а, а—」', 1);
    await era.input();
    await era.printAndWait('Но едва открыл рот — и онемел.');
    await era.printAndWait([
      'А пока ',
      you.get_colored_name(),
      ' корит себя за такую потерю лица, ',
    ]);
    await era.printAndWait(['именно ', acute.sex, ' заговорила первой.']);
    await acute.say_and_wait(['Мфу-фу… ты так устал, ', callname]);
    await era.printAndWait(['——', acute.sex, ' заговорила,']);
    await era.printAndWait([acute.sex, 'первое, что сказала, —']);
    await era.printAndWait([
      'поблагодарить проигравшего ',
      you.get_colored_name(),
      '.',
    ]);
    era.printButton('「————」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '  застыл на месте, вокруг вдруг стало пусто, и лишь то, что заставляет ',
      you.get_colored_name(),
      ' волну чувств хлынуть к сердцу.',
    ]);
    await era.printAndWait('Пальцы не перестают дрожать—');
    await acute.say_and_wait([
      '……',
      callname,
      '? Что случилось? Вдруг стало плохо?',
    ]);
    era.printButton('「Нет, ничего—я в порядке.」', 1);
    await era.input();
    await era.printAndWait([
      'Сдерживая хлынувшие из сердца чувства, придавливая влагу на пальцах и бровях, ',
      you.get_colored_name(),
      ' изо всех сил приводит себя в порядок.',
    ]);
    era.printButton(`「Ничего не случилось—не волнуйся, ${acute.name}.」`, 1);
    await era.input();
    await era.printAndWait([
      'Это последние слова, которые в тот день ',
      you.get_colored_name(),
      ' сказал ',
      acute.get_colored_name(),
      '.',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait([era.get('flag:当前年'), ' год.']);
    await era.printAndWait([
      'Это первый год, когда однажды проигравшего тренера подобрала подопечная ',
      acute.uma_sex_title,
      ' домой.',
    ]);
    await era.printAndWait(
      'И в июне этого года, после обычного дебютного заезда, однажды проигравший тренер принял решение.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' решил дать своей подопечной ',
      acute.uma_sex_title,
    ]);
    await era.printAndWait(' войти в настоящий зал славы—');
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {string} callname 奇锐骏对玩家的称呼
   */
  async begin_race_lose(acute, you, callname) {
    await era.printAndWait(
      'В го есть пословица: 「один ход — и партия другая」,',
    );
    await era.printAndWait('а дальше говорят: 「и вся доска проиграна」.');
    await era.printAndWait(
      'Описать то, что происходит сейчас, этими словами, пожалуй, лучше некуда.',
    );
    await era.printAndWait(
      'Гордое тело пусть полно и прекрасно, но один неверный ход — факт, которому не прекословить.',
    );
    await era.printAndWait(
      'Под фактом, который явило табло, любые оправдания поражения звучат как отговорки.',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      ' медленно уходит с ипподрома, и аплодисменты с овациями сейчас не принадлежат ',
      you.get_colored_name(),
      ' и ',
      acute.get_colored_name(),
      '.',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      'Глядя на ',
      acute.get_colored_name(),
      ' чуть поникшую фигуру, ',
      you.get_colored_name(),
      ' всё хочет что-то сказать—',
    ]);
    await acute.say_and_wait(['Ничего страшного, ', callname]);
    await era.printAndWait('……');
    await era.printAndWait(
      'Ещё не успел открыть рот — и вместо этого слышишь утешение от неё.',
    );
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' совсем не знает, что делать, ',
    ]);
    await era.printAndWait(
      'только чувствуешь холод: от макушки до кончиков пальцев.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' застыл на месте, растерянно, молча смотрит, как ',
      acute.get_colored_name(),
      ' уходит.',
    ]);
    await era.printAndWait('…………………');
    await era.printAndWait('……………');
    await era.printAndWait('………');
    await era.printAndWait(
      'Мгновения недостаточно, чтобы стать радостью тренировок,',
    );
    await era.printAndWait(
      'мир верит только в тот миг, когда решается победа и поражение—',
    );
  },
  ws_47: (() => {
    const title = 'Ставка, любовь и полёт';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     * @param {PrintedSpan} call_301 奇锐骏对骏川缰绳的称呼
     * @param {PrintedSpan} m_call_t 骏川缰绳对秋川弥生的称呼
     * @param {PrintedSpan} y_call_m 玩家对骏川缰绳的称呼
     */
    const f = async (
      acute,
      minoru,
      you,
      callname,
      call_301,
      m_call_t,
      y_call_m,
    ) => {
      await era.printAndWait([
        'Весна уходит, осень приходит — и вдруг уже канун Рождества.',
      ]);
      await era.printAndWait([
        'Зимой, чтобы студенты не простыли, в корпусах жарят батареи на полную. Только жарят слишком уж сильно, так что ',
        you.get_colored_name(),
        ' вынужден снять шарф и пальто и повесить их на вешалку у двери комнаты отдыха сотрудников.',
      ]);
      await era.printAndWait([
        'Хоть и Рождество, скачек в это время тоже хватает. Как тренер академии Трейсен, естественно, можешь только продолжать пахать на посту, а не наслаждаться праздником, как все остальные.',
      ]);
      await era.printAndWait([
        '…Впрочем, слов много. К вечеру время передохнуть между работой всё-таки находится.',
      ]);
      await era.printAndWait([
        'По чьему-то предложению сотрудники в комнате отдыха собрались кружком и достали карты, спрятанные в прослойке ящика. И кабинет тут же наполнился весёлым воздухом.',
      ]);
      await era.printAndWait([
        'Раз уже взрослые — естественно, надо поставить на кон хоть что-то. Но что бы ни ставили, ',
        you.get_colored_name(),
        ' абсолютно уверен: проиграть кому бы то ни было невозможно.',
      ]);
      await you.say_and_wait([
        'Что? Спрашиваешь, почему невозможно проиграть кому угодно ещё?',
      ]);
      await you.say_and_wait([
        'А чего спрашивать? Поправь очки на переносице — сам всё отлично знаешь.',
      ]);
      await era.printAndWait([
        'Это ',
        you.get_colored_name(),
        ' специально к сегодняшней партии ценой подписи договора 「добровольно принимаю любые биологические опыты」 (далее — кабала) одолжил у таинственной лавочницы универсальную оправу со вставленной 「рентген-оправой」. С ней ',
        you.get_colored_name(),
        ' видит все карты соперника насквозь и стоит за столом совершенно непобедимым.',
      ]);
      await era.printAndWait([
        'Конечно, у этих очков есть и мелкие побочные функции; например, в них сквозь одежду видно человека голым. Так что сейчас ',
        you.get_colored_name(),
        ' отчётливо видит небольшую грудь тренера Кирюин—',
      ]);
      await era.printAndWait([
        'Но это всё ерунда! Как женское тело может быть важнее карт?!',
      ]);
      await era.printAndWait([
        'Когда-то Голд Шип за ночь на ипподроме выиграла сто двадцать один миллиард, а ты, ',
        you.actual_name,
        ', среди сотрудников выиграешь 「20000」 ма-монет — не вопрос!',
      ]);
      await era.printAndWait([
        'Сегодня легенда о карточном святом Трейсена прогремит на весь свет!',
      ]);
      await era.printAndWait(['Господа, прошу ждать!']);

      era.drawLine({ content: 'Перед статуей Трёх богинь' });
      await acute.say_and_wait([
        'Так, ',
        you.actual_name,
        '; за что тебя повесили на статуе Трёх богинь на всеобщее обозрение?',
      ]);
      await era.printAndWait([
        'Во внутреннем дворе Трейсена ',
        acute.get_colored_name(),
        ' сидит у пруда и поднимает голову к тебе, в одной рубашке висящему на статуе Трёх богинь ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait([
        '…Что носил рентген-очки, ',
        y_call_m,
        ' заметила.',
      ]);
      await acute.say_and_wait(['Эх～ вот как～']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' говорит мягко, неспешный тон всё такой же ласковый.',
      ]);
      await era.printAndWait(['…На самом деле поначалу всё шло гладко.']);
      await era.printAndWait([
        'С рентген-очками ',
        you.get_colored_name(),
        ' и правда встал за столом непобедимым; после нескольких партий ',
        you.get_colored_name(),
        ' можно сказать, нагреб полный мешок, до цели в 「20000」 ма-монет оставался один шаг.',
      ]);
      await era.printAndWait([
        '—Пока не пришла ',
        minoru.get_colored_name(),
        '.',
      ]);

      era.drawLine({ content: 'Кабинет сотрудников Трейсена' });
      await minoru.used_to_say_and_wait([
        'О… новейшая технология, импорт из Западной Германии 1980-го, рентген-очки, сквозь которые видно…',
      ]);
      await you.used_to_say_and_wait(['Нх!?']);
      await era.printAndWait([
        you.get_colored_name(),
        ' нервно оборачивается и видит: неизвестно когда ',
        minoru.get_colored_name(),
        ' уже стоит у ',
        you.get_colored_name(),
        ' за спиной.',
      ]);
      await minoru.used_to_say_and_wait([
        'Не бойся, я не собираюсь тебя выдавать; ',
        you.actual_name,
        '……',
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        ' говорит холодно и слегка хлопает ',
        you.get_colored_name(),
        ' по плечу; но в тот же миг ',
        you.get_colored_name(),
        ' чувствует невидимую огромную ладонь, которая прижимает ',
        you.get_colored_name(),
        ' к стулу.',
      ]);
      await minoru.used_to_say_and_wait([
        'Я уже всем говорила: в Трейсене в карты играть можно, а вот играть на деньги — нет. Жаль, никто так и не слушал… но теперь хорошо: после этого урока в школе, наверное, уже никто не станет играть на деньги…',
      ]);
      await minoru.used_to_say_and_wait([
        'Впрочем, если пройдёт, что ты столько выиграл, тоже неловко… как раз недавно у ',
        m_call_t,
        ' снова дыра в бюджете, так что—',
        you.actual_name,
        ', сыграешь со мной партию?',
      ]);

      era.drawLine({ content: 'Перед статуей Трёх богинь' });
      await acute.say_and_wait([
        'Мм… мне кажется, ',
        call_301,
        ' хочет, чтобы ',
        callname,
        ' отдал добытое через игру ей…',
      ]);
      await era.printAndWait([
        '…Да, ',
        you.get_colored_name(),
        ' тоже так думает.',
      ]);
      await era.printAndWait([
        'Отдать добытое и сохранить честь — или пусть ',
        minoru.get_colored_name(),
        ' раскроет, что ты жульничал, и потерять и деньги, и честь…… ',
        you.get_colored_name(),
        ' считает, что ещё не спятил до второго варианта.',
      ]);
      await acute.say_and_wait([
        'Тогда почему ',
        you.actual_name,
        ' висит на статуе?',
      ]);
      await era.printAndWait(['Это…']);

      era.drawLine({ content: 'Кабинет сотрудников Трейсена' });
      await era.printAndWait([
        'Когда у ',
        you.get_colored_name(),
        ' осталось 「3000」 ма-монет добычи, ',
        minoru.get_colored_name(),
        ' сама остановилась.',
      ]);
      await minoru.used_to_say_and_wait([
        'Фух… на этом хватит, славная была битва. Спасибо за работу.',
      ]);
      await you.used_to_say_and_wait(['Э? Больше не играем?']);
      await minoru.used_to_say_and_wait([
        'Нет, я всё-таки не демон. Не стану добивать—к тому же эти деньги тебе тоже нужны, правда?',
      ]);
      await era.printAndWait([
        minoru.get_colored_name(),
        ' качает головой, зелёная шляпка качается влево-вправо; ',
        acute.sex,
        ' приставляет указательный палец к губам и улыбается хитро.',
      ]);
      await era.printAndWait([
        '…Кстати, ',
        acute.sex,
        ' откуда знает, что ',
        you.get_colored_name(),
        ' сейчас срочно нужны деньги?',
      ]);
      await minoru.used_to_say_and_wait([
        'Ну, мою сеть не стоит недооценивать.',
      ]);
      await era.printAndWait([
        acute.sex,
        'говорит с улыбкой, будто не хочет объяснять лишнего.',
      ]);
      await minoru.used_to_say_and_wait([
        'Впрочем, к слову. Откуда у тебя эта западногерманская хай-тек штуковина? Кажется, такие рентген-очки давно сняли с производства…',
      ]);
      await you.used_to_say_and_wait([
        'Нет… во-первых, это вовсе не рентген-очки. Это универсальная оправа со вставленной рентген-оправой…',
      ]);
      await minoru.used_to_say_and_wait(['…Рентген-оправа?']);
      await you.used_to_say_and_wait([
        'Да, коротко: вставил эту оправу — и через очки всё становится насквозь. Даже одежда не исключе…',
      ]);
      await era.printAndWait(['………………']);
      await era.printAndWait([
        'Стоп, ',
        you.get_colored_name(),
        ' сейчас что с языка сорвал?',
      ]);
      await minoru.used_to_say_and_wait([
        '…Одежда не исключение, то есть сейчас ты на всех смотришь голыми…… да?',
      ]);
      await you.used_to_say_and_wait(['…………']);
      await era.printAndWait([
        'Чёрная аура накатывает на ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' остро чует: над головой ',
        you.get_colored_name(),
        ' то появляется, то тает иероглиф 「опасно」. Пока невидимая огромная ладонь не прихлопнула ',
        you.get_colored_name(),
        ' окончательно, надо что-то сделать, обязательно что-то сделать.',
      ]);
      await era.printAndWait([
        'Всё-таки извиниться? На коленях извиниться? Сейчас? Прямо здесь?',
      ]);
      await era.printAndWait([
        'Нет, должен быть другой способ, должна быть лучшая формулировка, чтобы разрядить этот кризис…',
      ]);
      await era.printAndWait([
        '—Точно, ',
        you.get_colored_name(),
        ' вспомнил; как можно было забыть такое важное? ',
        minoru.get_colored_name(),
        ' услышит ',
        you.get_colored_name(),
        ' эти слова и точно простит ',
        you.get_colored_name(),
        '.',
      ]);
      await you.used_to_say_and_wait([
        '…Не волнуйся, ',
        y_call_m,
        '; я вовсе не смотрел на тебя голой;',
      ]);
      await you.used_to_say_and_wait([
        'всё-таки я карточный игрок. А карточный игрок смотрит только на карты—',
      ]);
      await you.used_to_say_and_wait(['ааааааааааааа——']);
      await era.printAndWait([
        '…Когда дошло, тело уже стало нунчаками ',
        minoru.get_colored_name(),
        '.',
      ]);

      era.drawLine({ content: 'Перед статуей Трёх богинь' });
      await acute.say_and_wait([
        'Уа… носить очки, чтобы подглядывать за голыми, и говорить, что голые тебе неинтересны; мало того что за это сажают, так ещё и состав особо тяжкий, ',
        callname,
        '.',
      ]);
      await you.say_and_wait(['Ну… хотя по сути так и есть—']);
      await era.printAndWait([
        'И правда, как ни крути, ',
        you.get_colored_name(),
        ' виноват первым; раз так, висеть на статуе Трёх богинь и каяться вроде не на что жаловаться.',
      ]);
      await era.printAndWait(['Впрочем, к слову…']);
      await you.say_and_wait([
        acute.get_colored_name(),
        ', уже так поздно; тебе не надо в общежитие? Комендантский час и всё такое…',
      ]);
      await acute.say_and_wait(['Мм…']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' задирает голову и смотрит в небо. В эту безоблачную ночь под огнями большого города звёзд почти не видно.',
      ]);
      await acute.say_and_wait([
        'Оставить ',
        callname,
        ' одного мне как-то неспокойно…',
      ]);
      await you.say_and_wait(['…Да?']);
      await you.say_and_wait('Я в порядке, ты давай отдыхать', true);
      await era.printAndWait([
        '…Хочется такими словами её утешить: пусть ',
        acute.sex,
        ' успокоится; но почему-то, когда ',
        you.get_colored_name(),
        ' собирается открыть рот, пустота и боль вдруг заполняют горло — и ',
        you.get_colored_name(),
        ' не может выговорить ни слова.',
      ]);
      await era.printAndWait([
        'Вися на статуе Трёх богинь, можешь только сверху смотреть на ',
        acute.get_colored_name(),
        ' одинокую фигуру… почему-то это заставляет ',
        you.get_colored_name(),
        ' чувствовать странное удушье и боль в сердце.',
      ]);
      await you.say_and_wait('…Слушай, Вандер Акют.');
      await acute.say_and_wait(['Мм?']);
      await you.say_and_wait([
        'На каникулы после Нового года… не съездить ли вместе на Окинаву?',
      ]);
      await acute.say_and_wait(['…На Окинаву?']);
      await era.printAndWait([
        acute.sex,
        ' обернулась и смотрит на тебя, висящего на статуе ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait([
        'Ага, на оставшиеся 『3000』 ма-монет — туда и обратно на самолёте, две ночи, одна ночь на месте… мм—должно хватить?',
      ]);
      await acute.say_and_wait(['…Почему ты зовёшь меня, ', callname, '?']);
      await you.say_and_wait([
        'Это… сказать, что на минуту крыша поехала, или что цель была давно… может, с самого начала в эту партию я сел ради ',
        acute.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait([
        'Хотел набрать 『20000』 ма-монет, положить перед ',
        acute.get_colored_name(),
        '; и услышать, как ',
        acute.get_colored_name(),
        ' удивлённо скажет 『о～』 и захлопает в ладоши…',
      ]);
      await you.say_and_wait([
        'Хотел, чтобы ',
        acute.get_colored_name(),
        ' обрадовалась, и хотел, чтобы ',
        acute.get_colored_name(),
        ' похвалила… ха-ха, странно, да?',
      ]);
      await acute.say_and_wait(['……']);
      await acute.say_and_wait(['…Да, что ли?']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' опускает голову: улыбка всё ещё мягкая, но лицо невольно чуть темнеет.',
      ]);
      await era.printAndWait([
        'Лунным светом облита ',
        acute.sex,
        ', и на миг ',
        acute.get_colored_name(),
        ' будто теряет прежнее спокойствие, зато появляется хрупкость юной ',
        acute.teen_sex_title,
        '.',
      ]);
      await you.say_and_wait(['…Прости, я тебя расстроил?']);
      await era.printAndWait([
        you.get_colored_name(),
        ' машинально извиняется, но ',
        acute.get_colored_name(),
        ' лишь слегка качает головой.',
      ]);
      await acute.say_and_wait([
        'Нет, наоборот; мне на самом деле очень радостно.',
      ]);
      await acute.say_and_wait([
        'Но поездка на Окинаву… пожалуй, не стоит. Я с слишком жаркими местами не очень～',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' встаёт, переступает пруд, взбирается на помост и подходит к статуе, то есть к ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait(['…Не любишь слишком жаркое?']);
      await acute.say_and_wait([
        'Ага, самолёты я тоже не очень. Железная птица в небе… очень страшно… так что—',
      ]);
      await acute.say_and_wait([
        callname,
        ', сначала позаботься о себе, хорошо?',
      ]);
      await era.printAndWait([
        'Развязав свой тёмно-коричневый шарф, ',
        acute.get_colored_name(),
        ' вешает его ',
        you.get_colored_name(),
        ' на шею.',
      ]);
      await era.printAndWait([
        'Сложить пополам, перевернуть, обвить, продеть в щель…… шарф быстро завязан.',
      ]);
      await acute.say_and_wait(['Вот так, тогда…']);
      await era.printAndWait([
        acute.get_colored_name(),
        ' рука легла на ',
        you.get_colored_name(),
        ' щёку.',
      ]);
      await era.printAndWait([acute.sex, ' — ладонь такая холодная.']);
      await acute.say_and_wait([
        'В следующий раз так больше не делай, ',
        callname,
        '.',
      ]);
      await era.printAndWait(['………………']);
      await era.printAndWait(['……………']);
      await era.printAndWait(['………']);
      await era.printAndWait(['Странно.']);
      await era.printAndWait(['Почему вдруг не остановить слёзы?']);

      era.drawLine();
      await era.printAndWait(['Когда снова открыл глаза, уже следующее утро.']);
      await era.printAndWait([
        'Лежишь в смятой одежде у окна, за стеклом сыплется белый снег.',
      ]);
      await era.printAndWait(['Встаёшь — и всё как в прострации.']);
      await era.printAndWait([
        'Вчерашнее почему-то мутно; помнишь только, что под конец ',
        you.get_colored_name(),
        ' утонул в тёплом сне.',
      ]);
      await era.printAndWait([
        'Подъём, как всегда умывание, еда, план тренировок, подготовка. Принять у таинственной экспериментаторши с торговой улицы принудительный опыт по кабале и отдать долг за сломанную рентген-оправу в 「3000」 ма-монет.',
      ]);
      await era.printAndWait(['Настроение неожиданно лёгкое.']);
      await era.printAndWait([
        'Потом пересекаешь двор и видишь: ',
        acute.get_colored_name(),
        ' сидит на корточках в дупле сухого дерева.',
      ]);
      await era.printAndWait(['С неба сыплется снег.']);
      await era.printAndWait(['На цыпочках, тихо-тихо,']);
      await era.printAndWait(['подходишь сзади—']);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Новогодние цели';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        'Под Новый год вместе с ',
        acute.get_colored_name(),
        ' сидите в комнате тренера, смотрите телевизор и ждёте наступления года.',
      ]);
      await acute.say_and_wait('Фу-фу-фу～ в котоацу так тепло～');
      await era.printAndWait([
        'Сидя в котоацу, ',
        acute.get_colored_name(),
        ' обрывает белые прожилки с мандарина и говорит рассеянно.',
      ]);
      await acute.say_and_wait([
        'А, кстати. ',
        callname,
        ' ～можно спросить одну вещь?',
      ]);
      era.printButton('「Мм? Что такое?」', 1);
      await era.input();
      await acute.say_and_wait(
        'На самом деле… когда недавно болтала со сверстниками, почувствовала, что не очень умею разговаривать с молодёжью.',
      );
      await acute.say_and_wait(
        'Что нравится, где часто гуляют, какую музыку слушают в последнее время — вот это. Много тем у меня со нынешней молодёжью не сходится.',
      );
      await acute.say_and_wait(
        'Так что… после Нового года хочу в глазах сверстников перемениться до неузнаваемости…',
      );
      await acute.say_and_wait([
        'Поэтому, ',
        callname,
        '. Как, по-твоему, мне лучше поступить?',
      ]);
      era.println();
      era.printButton(
        '「Пойди-ка как следует выучи молодёжную культуру!」(упорство+25)',
        1,
      );
      era.printButton('「А не отложить ли это пока?」(выносливость+20)', 2);
      era.printButton(
        '「Придумай темы поинтереснее, чтобы сверстники за тебя зацепились, и стань среди них первой!」(очки навыков+20)',
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await acute.say_and_wait('Выучить молодёжную культуру… вот оно как.');
          await acute.say_and_wait(
            'Тогда сначала посмотрю в телефоне, что сейчас в моде.',
          );
          await acute.say_and_wait(
            'D.A.N.G.X.I.A.D.E.L.I.U.X.U…… опечатка, удалить—',
          );
          await acute.say_and_wait('А, лишнего стёрла… тогда сначала—');
          await era.printAndWait(
            'Стучит по телефону указательным пальцем и вполголоса читает набираемые буквы.',
          );
          await era.printAndWait('Смотреть издалека — до странности мило.');
          await acute.say_and_wait('D.A.N.G.X.I.A.D.E.L.I.U.X.I.N.G—ввод');
          await acute.say_and_wait('………………');
          await acute.say_and_wait('Мру? Страница почему не двигается?');
          await era.printAndWait([
            'Хотя не очень понятно, как ',
            acute.get_colored_name(),
            ' обращается с телефоном.',
          ]);
          await era.printAndWait(
            'Но со стороны слышно: она, похоже, приняла ввод за кнопку подтверждения.',
          );
          await era.printAndWait([
            'Похоже, 【выучить молодёжную культуру】 для ',
            acute.get_colored_name(),
            ' всё ещё долгий путь—',
          ]);
          break;
        case 2:
          await acute.say_and_wait('Отложить это… да?');
          await acute.say_and_wait(
            'Мм… тоже верно. Раз Новый год — надо как следует отдохнуть.',
          );
          await acute.say_and_wait(['Тогда—на, ', callname, '.']);
          await era.printAndWait([
            'Не спеша ',
            acute.get_colored_name(),
            ' разламывает уже очищенный от прожилок мандарин пополам и протягивает.',
          ]);
          await era.printAndWait('Отламываешь дольку, кладёшь в рот—');
          era.printButton('「——————————————」', 1);
          await era.input();
          await era.printAndWait('Кислота убивает!!!!');
          await era.printAndWait([
            'Рядом, глядя, как у ',
            you.get_colored_name(),
            ' от кислоты перекосило лицо, ',
            acute.get_colored_name(),
            ' невольно смеётся вслух.',
          ]);
          await era.printAndWait(
            'В этом смехе и проходит кислый донельзя Новый год—',
          );
          break;
        case 3:
          await acute.say_and_wait('Стать первой среди сверстников?');
          await era.printAndWait([
            acute.get_colored_name(),
            ' будто не совсем поняла.',
          ]);
          await acute.say_and_wait(
            'Не очень поняла… то есть надо старательно искать темы для разговора?',
          );
          await acute.say_and_wait('Старательно искать темы… темы—');
          await acute.say_and_wait(
            'А, вспомнила. Как готовить новогоднее рагу — если взять это темой, атмосфера точно станет тёплой… э-хе-хе.',
          );
          await era.printAndWait([
            acute.get_colored_name(),
            ' мягко улыбается.',
          ]);
          await era.printAndWait(
            'А в это же время на кухне еда на плите издаёт радостное бульканье—',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = 'День боксёра: сильнейший начала века';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} jordan 东瀛佐敦
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     * @param {PrintedSpan} call_48 奇锐骏对东瀛佐敦的称呼
     * @param {PrintedSpan} j_call_a 东瀛佐敦对奇锐骏的称呼
     */
    const f = async (
      acute,
      jordan,
      minoru,
      taste,
      you,
      callname,
      call_48,
      j_call_a,
    ) => {
      await era.printAndWait([
        'Весна приходит, осень уходит; с тех пор как стал тренером ',
        acute.get_colored_name(),
        ', уже второй год.',
      ]);
      await era.printAndWait(
        'Новогоднее настроение ещё не ушло, а ёлку, которую в конце прошлого года случайно видел на торговой улице, снова увешали новыми украшениями у входа.',
      );
      await era.printAndWait(
        'Издали глядишь на коробки на ёлке, дивясь, к какому это празднику, загибаешь пальцы — и вспоминаешь: через несколько дней День святого Валентина.',
      );
      await era.printAndWait([
        '…Ну, праздник ',
        you.get_colored_name(),
        ' не касается.',
      ]);
      await era.printAndWait([
        'Для ',
        you.get_colored_name(),
        ', живущего за высокими стенами Трейсена, будни — это день за днём безостановочные тренировки с многообещающей новой ',
        acute.uma_sex_title,
        ', так что времени хватать на кисло-сладкую любовь со сверстниками за стеной, естественно, нет.',
      ]);
      await era.printAndWait([
        'Хотя говорят, популярные тренеры иногда на День святого Валентина получают от подопечной ',
        acute.uma_sex_title,
        ' дружеский шоколад…',
      ]);
      await era.printAndWait([
        'Но как ни думай, ',
        acute.get_colored_name(),
        ' не похожа на ту молодёжную ',
        acute.uma_sex_title,
        ', что празднует Валентин—',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('…………');
      era.printButton('「Мм?」', 1);
      await era.input();
      await era.printAndWait([
        'Закупая на торговой улице тренировочные принадлежности, у входа случайно видишь проходящих 「 ',
        acute.get_colored_name(),
        ' 」 и 「 ',
        jordan.get_colored_name(),
        '」.',
      ]);
      await era.printAndWait(
        'Они идут рядом по улице, болтают и смеются — о чём, не разобрать.',
      );
      await era.printAndWait('По направлению, кажется, к 「станции」—');
      await era.printAndWait('…………Может, пойти следом глянуть?');
      await era.printAndWait('Почему-то смутно чуешь: что-то случится.');
      await era.printAndWait(
        'С двумя цзинями уценённой куриной грудки и протеином в руках крадёшься за своей подопечной.',
      );
      await era.printAndWait('……');
      await era.printAndWait([
        '…Кажется? Полицейский на обочине смотрит на ',
        you.get_colored_name(),
        ' как-то не так.',
      ]);
      era.drawLine();
      await jordan.say_and_wait([
        'Вот оно! ',
        j_call_a,
        ' —смотри, вообще не играется!',
      ]);
      await acute.say_and_wait('…『Боксёрский силомер』?');
      await acute.print_and_wait([
        'В игровом центре у станции ',
        acute.get_colored_name(),
        ' и ',
        jordan.get_colored_name(),
        ' вдвоём обступили новый силомер.',
      ]);
      await jordan.say_and_wait([
        'Да, это новинка игрового центра, силомер уровня 『 ',
        acute.uma_sex_title,
        ' 』.',
      ]);
      await jordan.say_and_wait([
        'Если в уровне 『 ',
        acute.uma_sex_title,
        ' 』 набрать высокий счёт — получишь приз—',
      ]);
      await jordan.say_and_wait(
        'А я уже несколько раз била: ни высокого счёта, ни цифра не шевелится—наверное, сломался!',
      );
      await acute.say_and_wait('…『Боксёрский силомер』?');
      await acute.print_and_wait([
        'Трогая себя за щёку, ',
        acute.get_colored_name(),
        ' разглядывает невиданную машину.',
      ]);
      await jordan.say_and_wait(
        'Ну и гадость… я ещё хотела набор для маникюра из призов.',
      );
      await acute.say_and_wait(
        'Ара-ара… вот оно что, поэтому ты так злишься, ум-ум—',
      );
      await acute.say_and_wait([
        call_48,
        ', попробуешь ещё раз? Я рядом посмотрю～',
      ]);
      await jordan.say_and_wait(
        'Без проблем, в этот раз всерьёз. Ты чуть отойди.',
      );
      await jordan.say_and_wait('На старт—');
      await acute.print_and_wait('╲! Бах～! ╱');
      await jordan.say_and_wait(
        '—фух, смотри! Ударила, рейтинг ни с места, явно машина сломана.',
      );
      await acute.say_and_wait('Мм… вот оно как.');
      await era.printAndWait([
        'Стоящая рядом ',
        acute.get_colored_name(),
        ', кажется, кое-что разглядела.',
      ]);
      await acute.say_and_wait([
        'Теперь сделай как я скажу, ещё раз, ',
        call_48,
        '.',
      ]);
      await acute.say_and_wait(
        'Сначала не прячь большой палец в кулак, иначе, как только что, инстинктивно бережёшь ногти и силы не вложишь.',
      );
      await acute.say_and_wait(
        'Дальше стойка: когда бьёшь, противоположную ногу вперёд, потом боком—',
      );
      await jordan.say_and_wait('А, але?… так?');
      await acute.say_and_wait(
        'Да, да… потом колени мягче, локти к рёбрам. При ударе рука и плечо на одной линии, следи за центром внизу, сложи 【золотой прямоугольник】, и потом—',
      );
      await acute.say_and_wait('потом изо всех сил — бей!… попробуешь?');
      await jordan.say_and_wait(['Э? н… так?… правда можно, ', j_call_a, '?']);
      await acute.say_and_wait([
        'Просто поверь, ',
        call_48,
        '. Встанешь в золотой прямоугольник — и получится.',
      ]);
      await jordan.say_and_wait('Н… раз ты так говоришь… на старт—');
      await era.printAndWait('╲!!! Бах～!!! ╱');
      await era.printAndWait('*～динь～*');
      await era.printAndWait('*～поздравляем, вы получили приз～*');
      await jordan.say_and_wait('Э!? Да ладно? Правда выпал приз?');
      await jordan.say_and_wait([
        'Я всего лишь послушала ',
        j_call_a,
        ' и чуть поправила стойку… и в руке до сих пор мурашки—',
      ]);
      await jordan.say_and_wait([j_call_a, ', ты слишком крутая!']);
      await acute.say_and_wait(
        'Хе-хе… может, потому что в боксе у меня е-есть чуточку опыта?',
      );
      await acute.say_and_wait(
        'Когда ещё дралась, меня называли 『Малышка-Акют с правым прямым』, знаешь?',
      );
      await acute.say_and_wait(
        'Ну… хотя после победы над южными O-четырьмя небесными королями потом переименовали в 『легенду』.',
        true,
      );
      await jordan.say_and_wait([
        'Эх～～～～! Тогда если ',
        j_call_a,
        ' сама ударит, призов наберёт ещё больше?',
      ]);
      await acute.say_and_wait('А-ха-ха… это—');
      await acute.print_and_wait(
        '…Честно говоря, пробовать не очень хотелось.',
      );
      await acute.print_and_wait(
        'Всё-таки не дралась уже много лет, давно не в той пиковой форме.',
      );
      await acute.print_and_wait(
        'Проверять этой машиной — какой ни будет результат, скорее всего пожалеешь, что уже не поймать былое ощущение пика?',
      );
      await acute.print_and_wait(
        'Протягивает руку, собираясь отказаться—и как раз видит на стене колонку призов.',
      );
      await acute.say_and_wait(
        'Гурум… третье место, огромный шоколадный муссовый торт?',
        true,
      );
      await acute.say_and_wait(
        ['Кстати, скоро День святого Валентина. ', callname, ' там—'],
        true,
      );
      await acute.say_and_wait('…………');
      await acute.say_and_wait([
        'Н, поняла, тогда попробуем. ',
        call_48,
        ', чуть в сторону, хорошо?',
      ]);
      await acute.print_and_wait([
        'Правая рука, что должна была отмахнуться, сжимается в кулак — и ',
        acute.get_colored_name(),
        ' наполняется решимостью.',
      ]);
      await jordan.say_and_wait('Ура!');
      await acute.say_and_wait(
        'Гурум… хорошенько вспомнить прежнее ощущение.',
        true,
      );
      await acute.say_and_wait(
        'Вспомнить… тот удар в Египте против Oо, когда соперник закрыл ей глаза—',
        true,
      );
      await acute.say_and_wait(
        'Точка опоры, точка приложения… точка опоры, точка приложения—ха!!!',
      );
      await era.printAndWait('╲╲╲!!!!!!!! Бах!!!!!!!! ╱╱╱');
      await acute.print_and_wait([
        'Вместе с ударом ',
        acute.get_colored_name(),
        ' со всех сторон поднимается огромная пыль неизвестно откуда.',
      ]);
      await era.printAndWait('*～динь～*');
      await era.printAndWait(
        '*～сбой, сбой, сбой—немедленно вызовите сотрудника～*',
      );
      await acute.say_and_wait('А… ара? Это я машину сломала…');
      await acute.say_and_wait('Слишком долго не дралась, и правда размякла—');
      await jordan.say_and_wait('………………да ладно.');
      await acute.print_and_wait([
        jordan.get_colored_name(),
        ' таращится на машину, которую одним ударом полностью покорёжило, и глубоко задумывается.',
      ]);
      await acute.print_and_wait(
        'Скоро в подпольном боксёрском мире этого города родится новая легенда—',
      );
      era.drawLine();
      await acute.print_and_wait([
        'Ночью, отказавшись от главного приза игрового зала в 3000 морковных самоцветов, ',
        acute.get_colored_name(),
        ' с огромным шоколадным муссовым тортом приходит в комнату тренера.',
      ]);
      await acute.print_and_wait(
        'Ставит торт на котоацу, прячется в коробке для подарка рядом и нарочно гасит свет.',
      );
      await acute.say_and_wait(
        [
          'По словам ',
          call_48,
          ', вечеринка-сюрприз, которую любит молодёжь… наверное, вот так?',
        ],
        true,
      );
      await acute.say_and_wait(
        [
          'Для этого ещё нарочно надела то, что носит ',
          call_48,
          '… победный костюм? Когда ',
          callname,
          ' вернётся, выскочу, напугаю его…',
        ],
        true,
      );
      await acute.say_and_wait(
        'Э-хе-хе… если подумать, совсем на меня не похоже.',
        true,
      );
      await acute.print_and_wait([
        'Почему сделать ',
        callname,
        ' такой валентиновский сюрприз? Честно говоря ',
        acute.get_colored_name(),
        ' сама не понимает.',
      ]);
      await acute.print_and_wait([
        'Просто когда в списке призов силомера увидела огромный шоколадный муссовый торт, в голове само всплыло, как сделать ',
        callname,
        ' сюрприз.',
      ]);
      await acute.print_and_wait([
        'Ещё помню, как в первый раз на крыше увидела тайком плачущего ',
        callname,
        ' , тогда ещё казалось, ',
        you.sex,
        ' окажется ребёнком, который прячется плакать один, брошенный противоположным полом.',
      ]);
      await acute.print_and_wait([
        'И вот в мгновение ока: с тех пор как стала ',
        callname,
        ' подопечная ',
        acute.uma_sex_title,
        ', уже прошёл целый год.',
      ]);
      await acute.say_and_wait('…Целый год, как же быстро летит время.', true);
      await acute.say_and_wait(
        [
          'Думала, как скаковая ',
          acute.uma_sex_title,
          ' в академии Трейсен будут скучные тренировки… а вышло, ничего так.',
        ],
        true,
      );
      await acute.print_and_wait([
        'Закрывает глаза, и в голове постепенно всплывает ',
        callname,
        ' облик.',
      ]);
      await acute.print_and_wait(
        'Слабый, невезучий, мнительный, и ещё чуть ребячливый.',
      );
      await acute.print_and_wait(
        'Но при этом нежный, добрый, с сильной волей к действию, неожиданно с характером.',
      );
      await acute.print_and_wait('Именно с таким человеком прожила целый год.');
      await acute.print_and_wait('А впереди ещё два года…');
      await acute.print_and_wait(
        'А если следующие два года тоже промелькнут в одно мгновение, как этот общий год?',
      );
      await acute.say_and_wait('…………');
      await acute.print_and_wait(
        'Почему-то, стоит подумать об этом, и раздражение поднимается само.',
      );
      await acute.print_and_wait(
        'Качает головой, говорит себе—「Есть ещё два года, нечего спешить.」',
      );
      await acute.print_and_wait([
        'Подождать, пока ',
        callname,
        ' вернётся—дождаться его и устроить большой сюрприз—',
      ]);
      await acute.say_and_wait('Но—');
      await acute.say_and_wait('——……');
      await acute.say_and_wait('……');
      await acute.print_and_wait('Слова на языке, а выговорить не может.');
      await acute.print_and_wait([
        'Так и не поняв, что это за раздражение, ',
        acute.get_colored_name(),
        ', сворачивается калачиком в тёмном котоацу.',
      ]);
      await acute.print_and_wait('Только сама слышит, как колотится сердце.');
      await acute.print_and_wait('………………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('……');
      await acute.print_and_wait([
        'Сегодня ',
        callname,
        ' вернулся особенно поздно.',
      ]);
      era.drawLine({ content: 'Участок за стенами Трейсена' });
      era.printButton(
        `「Господин полицейский, прошу, поверьте. Я правда только волновался за свою подопечную ${acute.uma_sex_title}, вот и шёл следом тайком; впереди шла ${acute.sex} — вот и всё. Я правда не сталкер-извращенец!」`,
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait('Полицейский', [
        'Брось! Не думай, что я не знаю: нынешние извращенцы к самым горячим скаковым ',
        acute.uma_sex_title,
        ' питают сексуальные фантазии. На людях все твердят, что они тренеры Трейсена. За одну эту неделю я уже поймал восьмерых самозваных тренеров, троих самозваных учителей и одного самозваного доктора медицины — сталкеров-извращенцев.',
      ]);
      era.printButton(
        '「Я с ними правда не одно и то же! У меня нормальная работа и великая мечта—」',
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        'Полицейский',
        'Ну и что? В соседней камере ещё двое говорят, что в канун Нового года на улице будут запускать идеалы в полёт, а по факту — торговцы пиротехникой без лицензии?',
      );
      era.printButton(
        '「Господин полицейский, я правда не—ладно, скажу иначе. Прошу, отпустите, товарищ полицейский, я вам так скажу—у меня в доме Мэдзиро свои люди.」',
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        'Полицейский',
        'А? Угрожать вздумал? Я столько прожил, и ещё никто не смел мне угрожать—так я и не боюсь! У тебя в доме Мэдзиро свои люди, да? Так я тебе скажу: этот участок—дом Мэдзиро и открыл!',
      );
      era.printButton(
        '「…А? Дом Мэдзиро и правда расширил бизнес до участков? Уа, кто угодно, выпустите меня! Меня оговорили!!!」',
        1,
      );
      await era.input();
      era.drawLine();

      await era.printAndWait([
        'Потом ',
        minoru.get_colored_name(),
        ' по патрулю зашла в местный участок, услышала ',
        you.get_colored_name(),
        ' зов о помощи и наконец ',
        you.get_colored_name(),
        ' вытащила.',
      ]);
      await era.printAndWait([
        'Когда услышал, что попал в участок за 「преследование ',
        acute.uma_sex_title,
        ' 」 и сел, ',
        minoru.get_colored_name(),
        ' жёстко косится.',
      ]);
      await era.printAndWait([
        'По дороге назад изо всех сил объяснял ',
        minoru.get_colored_name(),
        ' , что правда не сталкер-извращенец. И в знак искренности пригласил ',
        acute.sex,
        ' к себе в комнату отдыха на ночную закуску.',
      ]);
      await era.printAndWait([
        'В итоге в своей комнате видишь огромный шоколадный муссовый торт и спящую в огромной подарочной коробке в почему-то особо откровенном костюме Санты (победном) ',
        acute.get_colored_name(),
        '.',
      ]);
      await minoru.say_and_wait('………………');
      era.printButton('「………………」', 1);
      await era.input();
      era.printButton('「Сказать, что меня втянули, поверите?」', 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        'Потом под общим наркозом воткнули в сад вверх ногами.',
      );
      await era.printAndWait(
        'И оштрафовали на три месяца зарплаты — тем и кончилось.',
      );
      await era.printAndWait([
        'С тех пор ',
        taste.get_colored_name(),
        ', ',
        minoru.get_colored_name(),
        ', ',
        acute.get_colored_name(),
        ' смотрит на ',
        you.get_colored_name(),
        ' взгляды чуть изменились.',
      ]);
      await era.printAndWait(
        'Надеешься, что в хорошую сторону… ха-ха. (смотрит в небо)',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = 'Новогодний подарок';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        'На третий год под Новый год снова проводишь вместе с ',
        acute.get_colored_name(),
        ' в комнате отдыха.',
      ]);
      await acute.say_and_wait([
        'С Новым годом, ',
        callname,
        ' ～. Я напекла много моти, будешь есть со мной?',
      ]);
      await era.printAndWait([
        'Легко, по привычке выходит из кухни с подносом ',
        acute.get_colored_name(),
        ', выглядит хозяйкой этой комнаты отдыха тренера куда больше, чем ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'А с ',
        acute.get_colored_name(),
        ' составляет яркий контраст ленивый ты, с выходного почти сросшийся с котоацу.',
      ]);
      await era.printAndWait([
        '…Заранее скажем, ',
        you.get_colored_name(),
        ' это не ленится, а полноценно использует своё время отдыха.',
      ]);
      await era.printAndWait([
        'Будни почти целиком забиты тренировками и осмотрами трасс для скачек; даже редкое свободное время отдыха проводишь в основном с ',
        acute.get_colored_name(),
        ' вместе.',
      ]);
      await era.printAndWait([
        'С ',
        acute.get_colored_name(),
        ' вместе проводить время — не то чтобы изнурительная работа… но как ни крути, из-за этого твоё редкое время отдыха тоже съедается, это факт.',
      ]);
      await era.printAndWait([
        'В рабочие дни каждый вечер после тренировки, едва добравшись домой, ты с ног валишься на кровать и спишь, а наутро сразу с ',
        acute.get_colored_name(),
        ' идёте тренироваться, и так день за днём — будто бесконечные тренировки.',
      ]);
      await era.printAndWait(
        'Даже в редкий выходной недели, стоит взглянуть на гору вонючей смены в стиралке и на кашу нескончаемой домашней работы в комнате отдыха, настроение тонет в тень вместе с солнцем, которому осталось висеть в небе всего четыре часа.',
      );
      await era.printAndWait([
        'Честно говоря, если бы не ',
        acute.get_colored_name(),
        ' готовила тебе три раза в день, пожалуй, забыл бы, как есть…',
      ]);
      await acute.say_and_wait([callname, ', открой рот, а～～～']);
      era.printButton('「А— н.」', 1);
      await era.input();
      await era.printAndWait([
        'Откусываешь ',
        acute.get_colored_name(),
        ' протянутое печёное моти, и жаркая сладкая вкусность сразу растекается во рту.',
      ]);
      await acute.say_and_wait([
        'Мм-мм～ хорошо получилось, ',
        callname,
        ' —дальше ешь сам, хорошо?',
      ]);
      await era.printAndWait([
        'С лицом полным нежности ',
        acute.get_colored_name(),
        ' так и протягивает тебе миску с моти и палочками.',
      ]);
      await era.printAndWait(
        'Потом снова встаёт, напевая весёлую песенку, и идёт к балкону—',
      );
      await acute.say_and_wait('Дальше стирка～ стирка～～～');
      await era.printAndWait('………………');
      await era.printAndWait('Откуда-то беспричинное чувство вины?');
      await era.printAndWait([
        'Заставить свою подопечную ',
        acute.uma_sex_title,
        ' убирать, стирать, готовить, а самому лежать в котоацу и зубоскалить…',
      ]);
      await era.printAndWait('…тц, это не пошловато ли?');
      await era.printAndWait('Нет, это слишком пошло.');
      await era.printAndWait('Надо что-то сделать—');
      era.println();
      era.printButton('「Пойти помочь на кухне!」(все параметры+5)', 1);
      era.printButton('「Своё бельё стирай сам!」(очки навыков+35)', 2);
      era.printButton(
        `「Давай разомну ${acute.name} плечи!」(выносливость+30)`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            'Лениться так счастливо, но нельзя в этом увязнуть.',
          );
          await era.printAndWait('—хорошо, решено!');
          await era.printAndWait('Встаёшь, с достоинством идёшь на кухню.');
          await era.printAndWait(
            'По крайней мере ужин в этом году и новогодние закуски приготовишь сам.',
          );
          await era.printAndWait('Тогда сначала разморозить пельмени…');
          await era.printAndWait('………………');
          break;
        case 2:
          await era.printAndWait([
            'Как ни крути, нельзя оставлять ',
            acute.get_colored_name(),
            ' одну на всей домашней работе.',
          ]);
          await era.printAndWait('Встаёшь, с достоинством идёшь к балкону.');
          await acute.say_and_wait('Нюх——');
          await era.printAndWait('…………мм?');
          await era.printAndWait([
            'Неожиданно видишь: ',
            acute.get_colored_name(),
            ' нюхает твою вчерашнюю рубашку.',
          ]);
          era.printButton(`「Э… ${acute.name}?」`, 1);
          await era.input();
          await acute.say_and_wait(['А… это ', callname, ' а～']);
          await era.printAndWait([
            'Как будто так и надо, ',
            acute.get_colored_name(),
            ' снимает с носа рубашку.',
          ]);
          await acute.say_and_wait(['Что-то случилось, ', callname, '?']);
          era.printButton('「Это… с моей рубашкой что-то не так?」', 1);
          await era.input();
          await acute.say_and_wait([
            'А… это. Просто вдруг взяла и понюхала—пахнет мужиком, ',
            callname,
            '.',
          ]);
          era.printButton('「………………」', 1);
          await era.input();
          await era.printAndWait('…………');
          await era.printAndWait([
            'Ты всё же выпроводил ',
            acute.get_colored_name(),
            ' с крыши.',
          ]);
          await era.printAndWait([
            'В стиралке бельё булькает кругами, вспоминаешь, как только что ',
            acute.get_colored_name(),
            ' нюхала рубашку, и почему-то внутри плещет.',
          ]);
          await era.printAndWait('………………');
          await era.printAndWait('Лучше вернуться в комнату чуть позже.');
          break;
        case 3:
          await era.printAndWait([
            'Когда ',
            acute.get_colored_name(),
            ' достирала и вернулась в комнату, ты всё же усадил ',
            acute.get_colored_name(),
            ' в котоацу.',
          ]);
          await acute.say_and_wait(['Гурум? Что такое, ', callname, '?']);
          await era.printAndWait([
            acute.get_colored_name(),
            ' поднимает голову и с непониманием смотрит на тебя, стоящего сейчас у неё за спиной.',
          ]);
          await era.printAndWait([
            'Но именно тогда ',
            you.get_colored_name(),
            ' грешные руки тянутся к ',
            acute.get_colored_name(),
            ' телу—',
          ]);
          await era.printAndWait('—слегка сжимаешь.');
          await acute.say_and_wait('А?❤️');
          await era.printAndWait([
            'Легко мнёшь пальцами, ',
            acute.get_colored_name(),
            ' хвост почти сразу встаёт дыбом.',
          ]);
          await era.printAndWait([
            '…Вот оно что, здесь у ',
            acute.get_colored_name(),
            ' эрогенная зона?',
          ]);
          await acute.say_and_wait(['Э, это❤️… ', callname, '…ты это что?']);
          era.printButton(
            `「Не двигайся, ${acute.name}. Ты столько возилась, давай я разомну и расслаблю.」`,
            1,
          );
          await era.input();
          await acute.say_and_wait('Н-но там… а❤️～');
          await era.printAndWait([
            'Чуть сожмёшь — и умоляющая сладость срывается с ',
            acute.get_colored_name(),
            ' губ.',
          ]);
          await era.printAndWait([
            'Стоит надавить сильнее, ',
            acute.get_colored_name(),
            ' невольно выкрикивает эту односложную фразу.',
          ]);
          await era.printAndWait(
            'Почему-то странное возбуждение и чувство греха.',
          );
          await era.printAndWait([
            'Так, в комнате отдыха на двоих, с ',
            acute.get_colored_name(),
            ' массировал всласть.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title =
      'День боксёра · особо крупная доп. перегрузка, стек, неуязвимость, burning-версия';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} jordan 东瀛佐敦
     * @param {CharaTalk} festa 中山庆典
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     * @param {PrintedSpan} call_19 奇锐骏对爱丽数码的称呼
     * @param {PrintedSpan} call_48 奇锐骏对东瀛佐敦的称呼
     * @param {PrintedSpan} call_49 奇锐骏对中山庆典的称呼
     * @param {PrintedSpan} d_call_a 爱丽数码对奇锐骏的称呼
     * @param {PrintedSpan} j_call_a 东瀛佐敦对奇锐骏的称呼
     * @param {PrintedSpan} callname_49 中山庆典对玩家的称呼
     * @param {PrintedSpan} f_call_a 中山庆典对奇锐骏的称呼
     * @param {PrintedSpan} y_call_m 玩家对骏川缰绳的称呼
     */
    const f = async (
      acute,
      digital,
      jordan,
      festa,
      minoru,
      you,
      callname,
      call_19,
      call_48,
      call_49,
      d_call_a,
      j_call_a,
      callname_49,
      f_call_a,
      y_call_m,
    ) => {
      await era.printAndWait([
        'Весна уходит, осень приходит; в этом году уже третий год с тех пор, как встретился с ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Снег тает, весенняя тень ещё здесь. Загибаешь пальцы, считаешь дни — и День святого Валентина снова на носу.',
      );
      await era.printAndWait([
        'После прошлогоднего краха и запуска идеалов в полёт в этом году ',
        you.get_colored_name(),
        ' и ',
        acute.get_colored_name(),
        ' каждый выросли по-своему.',
      ]);
      await era.printAndWait([
        'Именно поэтому вечером в День святого Валентина, после обычной тренировки. ',
        you.get_colored_name(),
        ' и ',
        acute.get_colored_name(),
        ' привычно приходите в твою комнату отдыха.',
      ]);
      await era.printAndWait(
        'Включаешь свет, садитесь вместе, каждый засовывает нижнюю часть тела в котоацу—',
      );
      era.printButton('「Уа～～～❤️」', 1);
      await era.input();
      await acute.say_and_wait('А-ха-ха～ как тепло❤️.');
      await era.printAndWait([
        'Давно привыкшие к присутствию друг друга ',
        you.get_colored_name(),
        ' и ',
        acute.get_colored_name(),
        ', прижимаются друг к другу, сидят перед котоацу.',
      ]);
      era.printButton(
        '「Только подумаешь, что неделя кончилась и котоацу надо убирать… как-то жалко.」',
        1,
      );
      await era.input();
      await acute.say_and_wait(
        'Фу-фу-фу… всё-таки температура скоро поднимется. Если не убрать котоацу поскорее, вылезет потница, знаешь?',
      );
      era.printButton('「Эх～～～ нельзя убрать чуть позже?」', 1);
      await era.input();
      await acute.say_and_wait([
        'Нельзя, хорошо? Если ',
        callname,
        ' станет овощем от котоацу, я тоже вместе с тобой раскисну～',
      ]);
      era.printButton('「Н… давить собой — это ж жульничество?」', 1);
      await era.input();
      await acute.say_and_wait([
        'Хо-хо-хо… ',
        callname,
        ' о, только не кори меня за подлость—',
      ]);
      era.printButton(
        '「А ведь в прошлом году ты ещё спряталась туда и уснула…」',
        1,
      );
      await era.input();
      await acute.say_and_wait('Ара-ла-ла… я ничего не слышу, хорошо?');
      await era.printAndWait(
        'В сезон, когда зимний снег ещё не стаял, двое только что закончили тренировку и вернулись в комнату отдыха. Так и сидят в котоацу, подшучивают друг над другом и выпускают пот.',
      );
      await acute.say_and_wait('Мм… впрочем, всё-таки сначала надо в ванну.');
      await era.printAndWait([
        'Говоря так, ',
        acute.get_colored_name(),
        ' высвобождается из котоацу и встаёт.',
      ]);
      await acute.say_and_wait([
        'Тогда я сначала пойду греть воду, ',
        callname,
        '. Как нагреется, приходи мыться поскорее, хорошо?',
      ]);
      await era.printAndWait([
        'Очень хочется сказать ',
        acute.get_colored_name(),
        ', что прогресс науки уже избавил людей от отдельной процедуры нагрева воды для ванны.',
      ]);
      await era.printAndWait([
        'Но ',
        acute.get_colored_name(),
        ' всё равно очень любит такие реплики—конечно, ',
        acute.sex,
        ' вроде и не нуждается, чтобы её поправляли.',
      ]);
      era.printButton('「Понял—попутного ветра～」', 1);
      await era.input();
      await acute.say_and_wait('И ещё—шоколад в холодильнике, съешь, хорошо?');
      era.printButton('「Понял-понял～ не волнуйся, я знаю.」', 1);
      await era.input();
      await era.printAndWait(
        'Машешь небрежно в ответ: может, и не изящно, но перед тем, кому доверяешь, всегда вылезает самая ленивая сторона.',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        ' неспешно идёт в ванную, закрывает дверь, доносится щелчок.',
      ]);
      await era.printAndWait(
        'Сидишь перед котоацу, взгляд сам собой скользит к ванной—',
      );
      await era.printAndWait('【щёлк, щёлк—】');
      await era.printAndWait('【хлещь-хлещь～～～～】');
      await era.printAndWait('Шум воды из щели двери…');
      await you.say_and_wait('…………', true);
      era.printButton('(И правда ни капли осторожности.)', 1);
      await era.input();
      await era.printAndWait('Может… глянуть?');
      await era.printAndWait(
        'С трудом вылезаешь из котоацу и ползком вершишь тайное злое дело.',
      );
      await era.printAndWait(
        'Пересекаешь гостиную, ползёшь по коридору перед гостиной, оказываешься у ванной с другой стороны.',
      );
      await era.printAndWait(
        'Капли воды доносятся из щели двери перед тобой. Достаточно слегка толкнуть — и можно издали увидеть сияние горных пиков.',
      );
      await you.say_and_wait(
        'Конечно, это вовсе не поведение извращенца.',
        true,
      );
      await you.say_and_wait(
        [
          'Просто ',
          acute.get_colored_name(),
          ' каждый раз моется по тридцать минут.',
        ],
        true,
      );
      await you.say_and_wait(
        'Если ждать тридцать минут, остаётся только послушно ждать.',
        true,
      );
      await you.say_and_wait(
        [
          'Но если ждать тридцать минут, почему не ждать перед дверью ванной, где ',
          acute.get_colored_name(),
          '?',
        ],
        true,
      );
      await you.say_and_wait(
        'За это время дверь не плотно закрыта, так что если помочь закрыть и нечаянно увидеть, что в ванной, это же вполне разумно～',
        true,
      );
      await you.say_and_wait('О——!', true);
      await era.printAndWait(
        'И видишь в том бессмертном краю: облака и туман стелются.',
      );
      await era.printAndWait(
        'Млечная вода с небес: по двум вершинам, через тихое озеро, в бледную зелень — и впадает в великую реку.',
      );
      await era.printAndWait(
        'Испокон добрые любят горы: белая долина, пики в нефритовой пудре, белый туман и летящие облака; лишь упорный смеет взойти на вершину.',
      );
      await era.printAndWait(
        'Испокон мудрые любят текущую воду: под пепельным шёлком волос течёт Млечный Путь, капля за каплей нефрит становится нектаром. Лишь истинно связанный может отведать.',
      );
      await era.printAndWait(
        'Сей бессмертный пейзаж — лишь для укравшего свет: впрямую уже хорошо, снизу вверх ещё лучше. Разве одним словом «хорошо» обойдёшься?',
      );
      await you.say_and_wait('NICE～～～～!', true);
      era.printButton('(Тогда ближе, ещё ближе…)', 1);
      await era.input();
      await era.printAndWait(
        'Но тут — клац, дверь комнаты отдыха распахнулась—',
      );
      await minoru.say_and_wait([
        you.actual_name,
        'ты здесь? Тут тебе экспресс…',
      ]);
      await era.printAndWait([
        'У входной двери тебя, лежащего ничком перед дверью ванной, ',
        minoru.get_colored_name(),
        ' видит как на ладони.',
      ]);
      await minoru.say_and_wait('………………');
      await era.printAndWait('Хлясь-хлясь-хлясь～');
      await era.printAndWait('Хлясь-хлясь-хлясь～');
      era.printButton('「………………」', 1);
      await era.input();
      await you.say_and_wait(['Подожди, ', y_call_m, ', выслушай.']);
      await you.say_and_wait('Ну это, на самом деле я…');
      await you.say_and_wait('долблю стену, краду—');
      await era.printAndWait('【Хлоп!!!!!】');
      await era.printAndWait(
        'Чистый, хлёсткий звук прокатывается над всем Трейсеном—',
      );
      era.drawLine();
      await era.printAndWait([
        'Через тридцать минут, в халате, ',
        acute.get_colored_name(),
        ' неспешно выходит из ванной.',
      ]);
      await acute.say_and_wait([
        'Ара-ла-ла… ',
        callname,
        ', ты сидел в гостиной и ждал меня тридцать минут? Какой молодец—',
      ]);
      await acute.say_and_wait('Впрочем… этот красный след на правой щеке?');
      era.printButton('「…Комар укусил.」', 1);
      await era.input();
      await acute.say_and_wait('А синяк на носу?');
      era.printButton('「…Большой комар укусил.」', 1);
      await era.input();
      await acute.say_and_wait('А эта буро-красная жидкость на макушке… это?');
      era.printButton('「…Очень большой комар укусил.」', 1);
      await era.input();
      await acute.say_and_wait(
        'О… так в этом сезоне тоже бывают такие большие комары—',
      );
      await era.printAndWait([
        'Задумчиво ',
        acute.get_colored_name(),
        ' так неспешно подходит к холодильнику и достаёт одну вещь.',
      ]);
      await acute.say_and_wait(
        'Тогда… в награду за то, что сегодня тоже слушался, старался и был хорошим мальчиком-тренером. На, это шоколад, который я сделала вчера.',
      );
      era.printButton(
        '「…Прежде чем это говорить, можно сначала одеться?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' и не то чтобы не было охоты оценить халат, просто тебя только что ',
        minoru.get_colored_name(),
        ' запечатала точку 「если ещё раз взглянешь на голое тело — кровь из семи отверстий и тело взорвётся」.',
      ]);
      await era.printAndWait([
        'Ради собственной жизни лучше пусть ',
        acute.get_colored_name(),
        ' поскорее наденет одежду—',
      ]);
      await acute.say_and_wait(
        'Подарок к концу года? Н-нет, сегодня же День святого Валентина? День, когда дарят шоколад друг другу…',
      );
      era.printButton(
        '「Н… почему вдруг как в GalGame сама двигаешь тему? И где это героиня в халате дарит валентиновский шоколад?」',
        1,
      );
      await era.input();
      await acute.say_and_wait(
        'Гуруру? Что такое, шоколад не любишь? Тогда тут ещё набор желе…',
      );
      era.printButton('「Н… не то чтобы не люблю—」', 1);
      await era.input();
      await era.printAndWait('…Чёрт, это уже соблазн, да?');
      await era.printAndWait(
        'Мыться в комнате тренера и ходить перед ним в халате — это уже вполне 「соблазн」, да?',
      );
      await era.printAndWait([
        'Или это 「то самое」? 「То самое」? Я хочу ≠ я согласна и всё такое…',
      ]);
      await era.printAndWait([
        'Чёрт… если бы не минутное помутнение, из-за которого ',
        minoru.get_colored_name(),
        ' закрыла точку, ',
        you.get_colored_name(),
        ' сейчас обязан немедленно обернуться красной формой и призвать бесконечного бога войны…',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait('Ладно, скверные мысли пока хватит.');
      era.printButton(
        '「На самом деле… у меня тоже есть кое-что для тебя.」',
        1,
      );
      await era.input();
      await acute.say_and_wait('Мрум?');
      await you.say_and_wait(
        'В прошлом году на Валентин я тоже получил твой шоколад, правда? Ну, хоть и в слегка пугающей форме…',
      );
      await you.say_and_wait(
        'По-хорошему на Белый день в прошлом году надо было ответить подарком—просто всё не знал, что дарить.',
      );
      await you.say_and_wait(
        'Думал шоколад в ответ… но ты сладкое не любишь. А другое как будто не к празднику…',
      );
      await you.say_and_wait(
        'Поэтому в прошлом году из-за этого, плюс плотный скаковой календарь, ответный подарок отложил…',
      );
      await you.say_and_wait([
        'Так что в этом году заранее приготовил подарок—с праздником, ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Сказав это, ',
        you.get_colored_name(),
        ' достаёт из-за штор букет и дарит ',
        acute.get_colored_name(),
        '.',
      ]);
      await acute.say_and_wait('А…');
      await you.say_and_wait([
        'А-ха-ха… это Джордан посоветовала. Хоть к Валентину не очень в тему… ну как, нравится?',
      ]);
      await acute.say_and_wait('……');
      era.printButton(`「……${acute.name}?」`, 1);
      await era.input();
      await acute.say_and_wait('……');
      await era.printAndWait([
        'Почему-то ',
        acute.get_colored_name(),
        ' с букетом в руках так и застывает на месте.',
      ]);
      await era.printAndWait(
        'Что ни скажи — почти нет ответа; так ждёшь секунд тридцать—',
      );
      await acute.say_and_wait('У… ва… а… аааааа!!!');
      await acute.say_and_wait('Беда, бедааа!!!!');
      await era.printAndWait([
        acute.get_colored_name(),
        ' с букетом так и вылетает из комнаты отдыха.',
      ]);
      await era.printAndWait('…Разумеется, в юкате.');
      era.drawLine({ content: 'Учебный корпус' });
      await acute.say_and_wait([call_48, ', ', call_48, ', бедааа!～']);
      await jordan.say_and_wait([
        'Что такое, ',
        j_call_a,
        ' —уа, ты чего в юкате!?',
      ]);
      era.drawLine({ content: 'Внутренний двор' });
      await acute.say_and_wait([call_49, ', ', call_49, ', бедааа!～']);
      await festa.say_and_wait([
        'Халат?… Этот букет я посоветовал ',
        callname_49,
        ' подарить ',
        f_call_a,
        ' на Валентин… вот оно. Похоже, легендарный боксёр скоро уйдёт на покой—',
      ]);
      era.drawLine({ content: 'Академия Трейсен · коридор' });
      await acute.say_and_wait([call_19, ', ', call_19, ', бедааа!～']);
      await digital.say_and_wait([
        'Э-э-э!? ',
        d_call_a,
        ' в халате носится по коридору!? Хотя это тоже очень мило! Но этот кадр — неужели!?',
      ]);
      era.drawLine({ content: 'Крыша' });
      await era.printAndWait(
        'Таща изувеченное тело, наконец нагоняешь на крыше силуэт в халате.',
      );
      await acute.say_and_wait([
        callname[0],
        '……',
        callname,
        ', я… я… что делать? Я уже не знаю, что делать.',
      ]);
      era.printButton(
        '「Короче… сначала вернёмся в комнату и переоденемся?」',
        1,
      );
      await era.input();
      await acute.say_and_wait(['Э-хе-хе… прости, ', callname, '.']);
      await acute.say_and_wait(
        'Просто когда получила такие красивые цветы, внутри тоже стало тепло… а, а, ааа…',
      );
      era.printButton(
        '「Даже так это не повод носиться по академии в халате…」',
        1,
      );
      await era.input();
      await era.printAndWait('…Фух, впрочем, ещё ничего.');
      await era.printAndWait([
        'Смотришь, какая ',
        acute.sex,
        ' — и понимаешь: дело не в том, что не нравится подарок ',
        you.get_colored_name(),
        ', просто получила то, чего обычно не получает, и немного в шоке.',
      ]);
      await era.printAndWait([
        'Может, из-за скромного впечатления ей мало кто дарит ',
        acute.sex,
        ' цветы?',
      ]);
      await acute.say_and_wait(['Спасибо… ', callname, '.']);
      await acute.say_and_wait(
        'Не думала, что получу такой красивый подарок, я его бережно сохраню.',
      );
      await acute.say_and_wait(
        'Мм… тогда ответ… н, как будто не то. По-хорошему за подарок благодарят, но тут я сначала подарила, а потом получила ответный～',
      );
      await acute.say_and_wait([
        'Н… короче, очень тебе спасибо, ',
        callname,
        '.',
      ]);
      era.printButton('「А-ха-ха… главное, что нравится.」', 1);
      await era.input();
      await era.printAndWait([
        'На крыше ',
        acute.sex,
        ' в халате и ',
        you.get_colored_name(),
        ' с буро-красной жидкостью на макушке благодарят друг друга.',
      ]);
      await era.printAndWait([
        'Без сомнения, это, наверное, самый незабываемый Валентин в жизни ',
        you.get_colored_name(),
        ' — для ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Похоже, рядом с ',
        acute.get_colored_name(),
        ' такие неожиданные сюрпризы случаются часто—',
      ]);
      era.drawLine({ content: 'Подземная допросная' });
      await minoru.say_and_wait('Недавно поступила жалоба от учеников.');
      await minoru.say_and_wait([
        'Говорят, тренер ',
        acute.get_colored_name(),
        ' с букетом сделал ',
        acute.get_colored_name(),
        ' предложение, а потом заставил ',
        acute.get_colored_name(),
        ' в халате носиться по школе в знак любви.',
      ]);
      await minoru.say_and_wait(['Это правда, ', you.actual_name, ' тренер']);
      era.printButton('「………………」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' плоть… уже стала выгоревшим пеплом—',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'Фан-фестиваль';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} princess 川上公主
     * @param {CharaTalk} city 黄金城市
     * @param {CharaTalk} sirius 天狼星象征
     * @param {CharaTalk} muteki 八重无敌
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     * @param {PrintedSpan} call_72 奇锐骏对八重无敌的称呼
     * @param {PrintedSpan} m_call_a 八重无敌对奇锐骏的称呼
     * @param {number} win_count 奇锐骏参赛胜利场次
     */
    const f = async (
      acute,
      princess,
      city,
      sirius,
      muteki,
      you,
      callname,
      call_72,
      m_call_a,
      win_count,
    ) => {
      await era.printAndWait(
        'Фан-фестиваль — спортивный праздник, куда приглашают фанатов погулять в Трейсене.',
      );
      await era.printAndWait([
        'А вид спорта, который на этом празднике берёт ',
        acute.get_colored_name(),
        ', —',
      ]);
      await acute.say_and_wait(
        'На самом деле я раньше тоже играла, знаешь? Мм… если не путаю, стойка вот такая—ум-ум.',
      );
      await era.printAndWait([
        '—Традиционный 「гольф」. И не думал, что ',
        acute.sex,
        ' раньше в него играла.',
      ]);
      await acute.say_and_wait([
        'Гурум… кстати, ',
        callname,
        '. Ворота, в которые мне целиться—где они?',
      ]);
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        ' бьётся об заклад на десять морковных самоцветов: ',
        acute.get_colored_name(),
        ' точно приняла гольф за футбол.',
      ]);
      await era.printAndWait([
        'То есть ',
        acute.get_colored_name(),
        ' и правда в гольф не умеет.',
      ]);
      await era.printAndWait('Итак, после этого…');
      await era.printAndWait('————');
      await acute.say_and_wait(
        'Фу-фу, всё-таки этот вид мне больше к лицу—бокс.',
      );
      await acute.say_and_wait(
        '…Гурум? Если приглядеться, перед словом бокс ещё что-то написано—【фигурный бокс】?',
      );
      era.printButton('「А, гимнастика в боксёрском стиле, да?」', 1);
      await era.input();
      await era.printAndWait(
        'Биться по-настоящему не нужно: достаточно выставить достаточно грозные боксёрские позы, показать 【красоту движения】 и 【выносливость】 — и судьи ставят баллы—',
      );
      await era.printAndWait([
        '…Если подумать, все они идолы- ',
        acute.uma_sex_title,
        ' примерно со ста тысячами фанатов. Если б в Трейсене и правда боксировали, фанаты на месте того и гляди устроили бы побоище.',
      ]);
      await acute.say_and_wait([
        'Ммм… жалко. Ведь ',
        callname,
        ' так любит смотреть, как женщины боксируют—',
      ]);
      await you.say_and_wait([
        'А-ха-ха… ',
        acute.get_colored_name(),
        ', только ни за что не говори этого при Хаякава- ',
        acute.adult_sex_title,
        ', я умру.',
      ]);
      await era.printAndWait([
        '…Поправить: ',
        you.get_colored_name(),
        ' вовсе не стоит на трибуне с подзорной трубой и не смотрит, как толпа в зале лупит друг друга до крови.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' просто любит смотреть, как ',
        acute.uma_sex_title,
        ' рвут друг другу волосы и ногти.',
      ]);
      await era.printAndWait('—И только.');
      await era.printAndWait(
        'Пока ты осваиваешь свою странность, участники фигурного бокса уже начинают—',
      );
      await era.printAndWait('…………');
      await sirius.say_and_wait(
        'Ха, фигурный бокс. Несколько приёмов савата, и хватит.',
      );
      await era.printAndWait([
        'С одной стороны — мастер французского савата 「сават」 ',
        sirius.get_colored_name(),
        '——',
      ]);
      await city.say_and_wait(
        'Когда-то, ради тела и формы, я училась кулаку на далёком Востоке.',
      );
      await city.say_and_wait('1, 2… прямой, прямой, хук!');
      await era.printAndWait([
        'С другой — супер ',
        city.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('А вердикт судей на эту битву дао—');
      await you.say_as_passer_by_and_wait(
        'Судья',
        'Довольно! Обе, можете сойти.',
      );
      await acute.say_and_wait('Обе не в финале? Почему?');
      await you.say_as_passer_by_and_wait(
        'Судья',
        'В ходе 【фигурного бокса】 Сириус-сан добавила удар ногой и чуть не снесла мне очки.',
      );
      await you.say_as_passer_by_and_wait(
        'Судья',
        'А Голд Сити-сан в ходе 【фигурного бокса】 то и дело в паузах смотрела в камеру и ставила POSS, будто насмешливый приём.',
      );
      await city.say_and_wait(
        'Что!—на секунду профессиональная привычка… видно, этот вид тоже не прост.',
      );
      await era.printAndWait('…Привычка какой это профессии?');
      await era.printAndWait(
        'А рядом в это же время раздаётся страшный грохот—',
      );
      await princess.say_and_wait('Ха, ва, ча, а—да!');
      await era.printAndWait('——pi～ke～peng～～～!——');
      await you.say_as_passer_by_and_wait(
        'Судья',
        'Каваками Принцесс дисквалифицирована! В ходе боя взлететь ногой и разнести перила — нельзя, это нарушение!',
      );
      await era.printAndWait('…………');
      await you.say_as_passer_by_and_wait(
        'Фанатка средних лет с заколкой в волосах',
        'Отец её детей, видел?',
      );
      await you.say_as_passer_by_and_wait(
        'Фанат средних лет в больничной пижаме',
        'Видел. Настоящий ФоO-удар без тени, солёный до невозможности.',
      );
      await you.say_as_passer_by_and_wait(
        'Молодой фанат, сосед по рисовой каше',
        'Солёная нога? Насколько солёная?',
      );
      await you.say_as_passer_by_and_wait(
        'Фанат с чёрным дорогим шрамом на шрамном лице',
        [
          'Из дома Китасан ',
          acute.sex_code - 1 ? ' дочь' : 'сын',
          '?… хе, вот это тунбэй-цюань. Ветер кулака аж до машины долетел.',
        ],
      );
      await you.say_as_passer_by_and_wait(
        'Фанат в белом, приехал на машине поглазеть',
        'Машина? Где машина!? Я ж такую здоровую тут оставил!? Новую только взял! Как от неё одно зеркало осталось!?',
      );
      await you.say_as_passer_by_and_wait(
        'Крупный мужчина средних лет с сигаретой в новой машине без зеркала',
        [
          'Ясно: в Трейсене ',
          acute.uma_sex_title,
          ' — у каждой своё мастерство—',
        ],
      );
      await era.printAndWait('…………');
      await era.printAndWait(
        'На площадке фигурного бокса Трейсена, где остаётся только вздохнуть: велик мир и полон чудес,',
      );
      await era.printAndWait('глядя на эти неразгаданные тайны человечества,');
      await era.printAndWait([
        acute.get_colored_name(),
        ' ровно идёт к победам и наконец выходит в финал—',
      ]);
      await era.printAndWait('…………');
      await muteki.say_and_wait([m_call_a, ', прошу наставления.']);
      await muteki.say_and_wait([
        'Сразиться с ',
        acute.uma_sex_title,
        ' легендарного мастера кулака — меня это очень воодушевляет.',
      ]);
      await acute.say_and_wait([
        'О-о-о～ ',
        call_72,
        ', прошу наставления, хорошо? Стойка как всегда сияет～',
      ]);
      await era.printAndWait([
        'Перед почтительно кланяющейся ',
        muteki.get_colored_name(),
        ', ',
        acute.get_colored_name(),
        ' как всегда отвечает рассеянно—',
      ]);
      await era.printAndWait('…Стоп, легендарный мастер кулака? Это что?');
      await muteki.say_and_wait(
        'Тогда… древнее искусство Яэно, прошу научить.',
      );
      await era.printAndWait([
        'Владеющая древним искусством ',
        muteki.get_colored_name(),
        ' кланяется ещё раз.',
      ]);
      await era.printAndWait(
        'Удар почти совершенен, ритм дыхания без щели, даже голая подмышка видна ясно — по всем статьям совершенство.',
      );
      await era.printAndWait([
        'Перед таким врагом ',
        acute.get_colored_name(),
        ' всё так же держится свободно, с запасом.',
      ]);
      await era.printAndWait('Свисток — и обе начинают—');
      await era.printAndWait('…………');
      await muteki.say_and_wait('Н—ха! Хо!');
      await era.printAndWait([
        'Финал открывает стремительный прорыв ',
        muteki.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        'Резкий ветер кулака, яростный натиск — бокс как ливень с бурей.',
      );
      await era.printAndWait(
        'Каждый удар крут и неотразим: почти брошены все схемы, рвёт защиту одной силой и скоростью прямого боя.',
      );
      await you.say_as_passer_by_and_wait(
        'Смуглый детина с косой',
        'ШаоO-цюань!—без сомнения, это ШаоO-цюань!」',
      );
      era.printButton(
        '(Этот черномазый комментатор, похожий на коричневую тыкву, вообще откуда взялся?)',
        1,
      );
      await era.input();
      await muteki.say_and_wait(
        'А!! Одно сердце, без смуты! Лишь бы продержаться до конца! Кто последней устоит на этом ринге — той и победа!!!',
      );
      await era.printAndWait([
        'Один удар, два, три… ',
        muteki.get_colored_name(),
        ' бьёт и бьёт, атака не кончается.',
      ]);
      await era.printAndWait(
        'По здравому смыслу такая крутая атака должна страшно есть силы.',
      );
      await era.printAndWait([
        'Иначе говоря, стоит ',
        acute.get_colored_name(),
        ' продержаться, пока та не выдохнется—',
      ]);
      await you.say_as_passer_by_and_wait('Смуглый детина', 'Нет, бесполезно.');
      era.printButton('「…Э?」', 1);
      await era.input();
      await era.printAndWait([
        'Смуглый детина рядом, будто читает мысли, отрицает мысль ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_as_passer_by_and_wait(
        'Смуглый детина',
        'Слушай ритм дыхания—ни крупицы сбоя!',
      );
      await you.say_and_wait('Нет, кто это вообще слышит!?', true);
      await you.say_as_passer_by_and_wait(
        'Смуглый детина',
        'Верно, этот особый ритм… особое дыхание, которым пользуются монахи СиO.',
      );
      await you.say_as_passer_by_and_wait(
        'Смуглый детина',
        'Чтобы перебить горную болезнь, меняют частоту дыхания — и кислород доходит до каждой мышцы на пределе.',
      );
      await you.say_as_passer_by_and_wait(
        'Смуглый детина',
        'Легенда гласит: сильнейший в дыхании не только возвращает телу молодость. Даже на плато в тысячи метров, под кратной тяжестью, может по желанию выбросить высший, сильнейший удар—',
      );
      await you.say_and_wait('………………………………');
      await you.say_and_wait('SO?');
      await you.say_as_passer_by_and_wait('Смуглый детина', 'Ещё не понял?');
      await era.printAndWait([
        'Смуглый детина смотрит на ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait(
        '…Кто дал ему уверенность, что обычный человек обязан знать все боевые искусства и все термины как азбуку?',
      );
      await you.say_as_passer_by_and_wait('Смуглый детина', [
        'Если частота атаки всего · та · ка · я, то ',
        muteki.get_colored_name(),
        ' с дыхательным методом хоть три дня и три ночи не устанет.',
      ]);
      era.printButton('「…М-хм?」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait('Смуглый детина', [
        '…Нет, три дня и три ночи — лишь предел существа по имени чело☆век—а если это скаковая ',
        acute.uma_sex_title,
        ', продержаться можно только дольше.',
      ]);
      await you.say_as_passer_by_and_wait('Смуглый детина', [
        'Против владеющей древним искусством ',
        acute.uma_sex_title,
        ' ',
        muteki.get_colored_name(),
        ', как легендарному мастеру кулака ',
        acute.get_colored_name(),
        ' отвечать? Как ',
        acute.get_colored_name(),
        ' пробить ',
        muteki.get_colored_name(),
        ' серию ударов дыхательного метода? Ха… какая сцена: сто лет спустя после съезда цигун и кулака на горе ЦзыO — финальная битва… всё интереснее.',
      ]);
      await you.say_and_wait('…………');
      era.printButton('(На ужин ещё успею?)', 1);
      await era.input();
      await era.printAndWait('…………');
      await acute.say_and_wait('Раз… два… три… четыре! (*бьёт)');
      await acute.say_and_wait(
        [
          'Недаром ',
          call_72,
          '… так складно дышит: столько кулаков — и ни капли пота—',
        ],
        true,
      );
      await acute.say_and_wait(
        [
          'Держаться под такой атакой очень тяжело—но как ни крути, я ',
          acute.sex_code - 1 ? ' дочь' : 'сын',
          '!',
        ],
        true,
      );
      await acute.say_and_wait('Два… два… три… четыре! (*бьёт)');
      await era.printAndWait([
        'Даже под серией дыхательных ударов, силой упрямства ',
        acute.get_colored_name(),
        ' в защите всё ещё не уступает!',
      ]);
      await era.printAndWait([
        'А против ',
        acute.get_colored_name(),
        ', ',
        muteki.get_colored_name(),
        ' атака становится всё легче и нервнее—',
      ]);
      await era.printAndWait([
        '…Продолжать — может, дождаться, пока ',
        muteki.get_colored_name(),
        ' откроется, и одним ударом решить?',
      ]);
      await acute.say_and_wait(
        'Н… но тело уже на пределе—если так дальше…',
        true,
      );
      era.printButton(
        `「Давай! ${acute.name}! Мясо уже в кастрюле! Выиграешь — пойдём есть тушёную картошку с мясом!」`,
        1,
      );
      await era.input();
      await acute.say_and_wait(
        [callname, '……', callname, ' болеет за меня—'],
        true,
      );
      await acute.say_and_wait(
        ['Фух—нельзя, чтобы ', callname, ' увидела, как я позорюсь.'],
        true,
      );
      await acute.say_and_wait(
        'Раз дальше не устоять… тогда всё на этот удар…!',
        true,
      );
      await acute.say_and_wait(
        'Уааа!!! Жги кровь до последней секунды. Прими, мой последний удар!!!',
      );
      await era.printAndWait([
        'В этот миг ',
        acute.get_colored_name(),
        ' бросает защиту.',
      ]);
      await era.printAndWait('Нога назад, хвост дрогнул—');
      await era.printAndWait('Всё влито в этот удар!');
      if (win_count >= 5) {
        await era.printAndWait([
          acute.get_colored_name(),
          ', легендарный мастер кулака, ставит всё на непревзойдённый мягкий кулак.',
        ]);
        await era.printAndWait([
          'В то мгновение обходит ',
          muteki.get_colored_name(),
          ' непревзойдённый жёсткий кулак—и входит прямо в набитый мышцами живот!',
        ]);
        await era.printAndWait([
          'Да, ',
          acute.sex,
          ' далеко не так крут, как жёсткий кулак.',
        ]);
        await era.printAndWait([
          'Да, ',
          acute.sex,
          ' далеко не так яростна, как жёсткий кулак.',
        ]);
        await era.printAndWait('Да, этот мягкий удар не может победить.');
        await era.printAndWait(
          'Быть может, мягкий кулак, крепкий как дерево и мягкий как ива, обречён не сиять, как жёсткий.',
        );
        await era.printAndWait('Но этого удара довольно.');
        await era.printAndWait('Чтобы сбить алмазную неуязвимую крутость—');
        await era.printAndWait('хватит этого удара, это · го · до · во.');
        await muteki.say_and_wait('А! Кх—');
        await muteki.say_and_wait('Ды-дыхание!?', true);
        await you.say_as_passer_by_and_wait('Судья', 'Вы-вы-вы—');
        await you.say_as_passer_by_and_wait('Смуглый детина', 'Выбили!');
        await era.printAndWait('Да, люди уже видят.');
        await era.printAndWait([
          'В миг, когда мягкий кулак ',
          acute.get_colored_name(),
          ' попал в живот ',
          muteki.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          muteki.get_colored_name(),
          ' почти идеальное дыхание—уже дало щель!',
        ]);
        await muteki.say_and_wait(
          'Кх… сломать мне дыхание — вот твоя цель?',
          true,
        );
        await muteki.say_and_wait(
          'Целилась в паузу атаки, искала щель вдоха. В миг, когда я вдохнула, мягкий кулак в живот, чтобы сбить ритм—какая страшная наблюдательность.',
          true,
        );
        await muteki.say_and_wait(
          'Легендарный кулачный мастер, легенда эпохи чудес: даже если годы съели былую ярость кулака. Мудрость лет и упрямство несгибаемой вместо этого вынесли тебя в новый предел—',
          true,
        );
        await muteki.say_and_wait(['——', m_call_a, '!'], true);
        await acute.say_and_wait('Хм… не дам тебе отдышаться!');
        await acute.say_and_wait([
          'Смотри, ',
          muteki.get_colored_name(),
          ' -сан—в моём словаре нет слова 『конец』!!!',
        ]);
        await era.printAndWait('Даже если уже не стоит,');
        await era.printAndWait('даже если глаза уже ничего не видят,');
        await era.printAndWait(
          'даже если ноги дрожат, тяжёлые как тысяча цзиней.',
        );
        await era.printAndWait(
          'Но легенда мира боевых искусств—не остановится перед такой малостью!',
        );
        await era.printAndWait([
          'Быть может, достаточно короткого вдоха — и ',
          muteki.get_colored_name(),
          ' снова поймает ритм дыхания.',
        ]);
        await era.printAndWait(
          'Быть может, стоит чуть сбавить атаку — и непобедимый жёсткий кулак снова пойдёт бесконечным натиском.',
        );
        await era.printAndWait([
          'Быть может, новой звезде эпохи—',
          muteki.get_colored_name(),
          ' можно ошибиться сколько угодно. А легенде старой эпохи—',
          acute.get_colored_name(),
          ', стоит ошибиться раз — и падёт.',
        ]);
        await era.printAndWait('—Но что с того?');
        await era.printAndWait('Раз 「ошибёшься раз — и падёшь」, тогда—');
        await era.printAndWait(
          '【до · ста · точ · но · ни · раз · у · не · оши · бить · ся?】',
          {
            color: acute.color,
            fontSize: '2rem',
          },
        );
        await era.printAndWait(
          'Мягкий кулак как ливень груш, мягкий кулак без конца, мягкий кулак упрямой ярости—',
        );
        await acute.say_and_wait('Мой мягкий кулак ещё далеко не кончен!!!!');
        era.drawLine();
        await era.printAndWait(
          'На ринге под закатом стоящая победительница — одна.',
        );
        await you.say_as_passer_by_and_wait(
          'Судья',
          'Довольно, победа решена!',
        );
        await you.say_as_passer_by_and_wait(
          'Судья',
          '83-й всеяподнебесный турнир Трейсена по фигурному боксу, победительница—',
        );
        await you.say_as_passer_by_and_wait('Судья', [
          acute.get_colored_name(),
          '-сан!',
        ]);
        await era.printAndWait([
          'На финальном ринге ',
          acute.get_colored_name(),
          ' с мутными глазами высоко поднимает правый кулак.',
        ]);
        await era.printAndWait(
          'Под рингом гром аплодисментов несёт победительнице славу и крики.',
        );
        await you.say_as_passer_by_and_wait(
          'Смуглый детина',
          'Выиграла, выиграла!!!',
        );
        await you.say_as_passer_by_and_wait(
          'Смуглый детина',
          'Годы летят, кулак легендарного мастера давно не тот, что в былые силы.',
        );
        await you.say_as_passer_by_and_wait('Смуглый детина', [
          'Но ',
          acute.sex,
          ' всё равно победила себя, победила гнёт лет, и абсолютным быстрым мягким кулаком победила непревзойдённый жёсткий кулак!',
        ]);
        await you.say_as_passer_by_and_wait('Смуглый детина', [
          acute.get_colored_name(),
          '! ',
          acute.get_colored_name(),
          '!!! — ',
          acute.sex,
          ' наконец целиком встала на вершину мира боевых искусств!',
        ]);
        await you.say_as_passer_by_and_wait('Смуглый детина', [
          acute.sex,
          ' победила время!!!!!!',
        ]);
        await era.printAndWait('Под сценой возбуждённые зрители обнимаются.');
        await era.printAndWait(
          'Слёзы и волнение наполняют зал. Даже судья украдкой смахивает слезу.',
        );
        await era.printAndWait('В этот миг—воин на ринге.');
        await era.printAndWait(
          'Этот высоко поднятый кулак стал истинной вечной легендой мира боевых искусств.',
        );
        era.drawLine();
        await era.printAndWait([
          'Когда закат, и толпа расходится. Неся на спине обессилевшую ',
          acute.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' и ',
          acute.get_colored_name(),
          ' вдвоём идут домой.',
        ]);
        await acute.say_and_wait('Э-хе-хе… не думала, что выиграю.');
        await era.printAndWait([
          'Висит на спине, хоть тело уже не движется. ',
          acute.get_colored_name(),
          ' всё так же мягко и рассеянно докладывает сегодняшнюю победу.',
        ]);
        era.printButton(
          '「Ха-ха… да, было горячо. Я с тем детиной-тыквой под рингом всерьёз потели.»',
          1,
        );
        await era.input();
        await acute.say_and_wait('Эх～～～ да～?');
        await era.printAndWait([
          'Может, от лишней радости у ',
          acute.get_colored_name(),
          ' редко проскакивает игривый тон.',
        ]);
        await acute.say_and_wait([
          'А я помню—',
          callname,
          ', тебе бокс вроде не очень интересен?',
        ]);
        era.printButton('「Ха-ха… это другое.»', 1);
        await era.input();
        await era.printAndWait([
          'Смеёшься чуть неловко. ',
          you.get_colored_name(),
          ' нарочно косит голову к далёкому закатному солнцу, лишь бы не встретиться глазами с той, что всегда видит насквозь ',
          you.get_colored_name(),
          ' — с ',
          acute.uma_sex_title,
          '.',
        ]);
        era.printButton(
          '「Честно… сначала мне бокс и правда был неинтересен.»',
          1,
        );
        await era.input();
        await acute.say_and_wait('Мм～—раз так говоришь, сейчас передумал?');
        era.printButton('「Да, передумал.»', 1);
        await era.input();
        await era.printAndWait('Признаёшь это без колебаний.');
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          ' должен признать: поначалу к боксёрским боям и правда был предвзятость.',
        ]);
        await era.printAndWait(
          'Всё-таки в голове такие бои, где бьют друг друга, сразу вяжутся со словом 【дикость】.',
        );
        await era.printAndWait(
          'Но эта маленькая скрытая предвзятость после такого трогательного боя давно стала дымом.',
        );
        await era.printAndWait(
          'Эта несгибаемая фигура на ринге, и этот высоко поднятый правый кулак.',
        );
        await era.printAndWait(
          'Трусливому себе, наверное, не забыть до конца жизни.',
        );
        await era.printAndWait('Ведь это было слишком 【сияюще】.');
        await acute.say_and_wait('Мм～ хм～');
        await era.printAndWait([
          'Лежащая на плече ',
          acute.get_colored_name(),
          ' о чём-то думает. Вдруг мурлычет весёлую песенку.',
        ]);
        await acute.say_and_wait(['Слушай, ', callname, '.']);
        await you.say_and_wait(['Что, ', acute.get_colored_name(), '?']);
        await acute.say_and_wait(
          'Я к тому—если… если бы я проиграла. Ты что бы сделал?',
        );
        era.printButton('「…Проиграла?」', 1);
        await era.input();
        await era.printAndWait('Хмуришь брови: вопрос каверзный и странный.');
        await era.printAndWait([acute.get_colored_name(), ' проиграет?']);
        await era.printAndWait('Эта мысль у тебя и секунды не жила.');
        await era.printAndWait(
          'Но раз это вопрос—ответ всё же надо как следует обдумать.',
        );
        era.printButton(
          `「…Даже если проиграешь, ничего страшного. Такое не сломит ${acute.name}.」`,
          1,
        );
        await era.input();
        await acute.say_and_wait('…Ум? Почему?');
        await era.printAndWait([
          acute.get_colored_name(),
          ' спрашивает с интересом—',
          acute.sex,
          ' кажется, особенно любопытна к ответу.',
        ]);
        era.printButton(
          '「Потому что—даже если проиграл. Потом встал, и всё, разве нет?」',
          1,
        );
        await era.input();
        await era.printAndWait([
          'Под закатом пустой двор. Неся на спине ',
          acute.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' останавливается у дупла сухого дерева.',
        ]);
        await era.printAndWait('Да, проиграл. Ну и что?');
        await era.printAndWait('Всего лишь 【этот раз】.');
        await era.printAndWait('【В следующий】 отберёшь — и ладно.');
        await era.printAndWait([
          'Даже если проиграла 【100】 раз, лишь бы 【отнять назад】—',
          acute.sex,
          ' всё равно будет последней победительницей.',
        ]);
        await era.printAndWait('Это очень простая мысль.');
        await era.printAndWait([
          '—И в то же время это то, чему ',
          acute.get_colored_name(),
          ' научила ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Под закатом, как мальчишка, что боится кары за шалость, ',
          you.get_colored_name(),
          ' тихо оборачивается, хочет увидеть 「лицо」 старшей.',
        ]);
        await era.printAndWait([
          'Оборачиваешься — и видишь: ',
          acute.get_colored_name(),
          ' тоже смотрит на тебя.',
        ]);
        await era.printAndWait(
          'Тёмные глаза, в них утренние 「росинки」, блеск жизни—',
        );
        await era.printAndWait('В прострации сердце колотится.');
        await acute.say_and_wait('……');
        await acute.say_and_wait(['…………А, то, ', callname, '.']);
        await acute.say_and_wait('Уже… можно меня спустить?');
        era.printButton('「А—с-сейчас, сейчас спущу—」', 1);
        await era.input();
        await era.printAndWait('Вдруг суета.');
        await era.printAndWait('Как шалун, которого старшие поймали на месте.');
        await era.printAndWait([
          'Приседаешь, носки ',
          acute.get_colored_name(),
          ' чуть касаются земли.',
        ]);
        await era.printAndWait('Гурлурлу—вдруг крутанулась.');
        await era.printAndWait([
          'Оборачиваешься — а ',
          acute.get_colored_name(),
          ' стоит спиной — и лица её не видать. Так и не оборачивается ',
          acute.sex,
          ' к тебе.',
        ]);
        await acute.say_and_wait([
          '…Прости, ',
          callname,
          ', на самом деле я тебе солгала.',
        ]);
        await era.printAndWait('Горячее сердце колотится.');
        await acute.say_and_wait(
          'На самом деле… после боя у меня ещё чуть-чуть сил… до комнаты отдыха дойти, в общем, можно.',
        );
        await era.printAndWait(
          'Закат уже к ночи, а тело горячее, как кипящая лава.',
        );
        await acute.say_and_wait('Так что… то…');
        await era.printAndWait([
          acute.sex,
          ' Оборачивается, прекрасные длинные волосы вслед. Выбеленные пряди трогают, как лунный свет—',
        ]);
        await acute.say_and_wait([
          'Хотя… ты, наверное, уже слышал от меня — или от других ',
          acute.uma_sex_title,
          ' — много раз?',
        ]);
        await era.printAndWait('Алые щёки парят жарким паром.');
        await acute.say_and_wait('Но я всё-таки люблю тебя—тренер-кун.');
        await era.printAndWait(
          'Под закатом гордый вид и гордые слова гуляют по пустому двору.',
        );
        await era.printAndWait([
          acute.get_colored_name(),
          ' лицо давно сплошь в румянце—но ',
          acute.sex,
          ' смотрит твёрдо, не отводя глаз.',
        ]);
        await era.printAndWait('…Странно?');
        await era.printAndWait('Ничуть.');
        await era.printAndWait('Почему?');
        await era.printAndWait([
          'Потому что это та ',
          acute.get_colored_name(),
          '.',
        ]);
        await era.printAndWait('Та мягкая, храбрая и всё же несгибаемая,');
        await era.printAndWait([
          'под спокойной кожей жгущая горячее сердце ',
          acute.get_colored_name(),
          '.',
        ]);
        await you.say_and_wait('……');
        await you.say_and_wait('…………');
        await you.say_and_wait('………………ха-ха.');
        await era.printAndWait('Смеёшься ни с того ни с сего.');
        await era.printAndWait('…Странно?');
        await era.printAndWait('Ничуть.');
        await era.printAndWait('Почему?');
        await era.printAndWait([
          'Потому что это тот тренер, которого знает ',
          acute.get_colored_name(),
          '.',
        ]);
        era.drawLine();
        await era.printAndWait('Под закатом двое молчат.');
        await era.printAndWait('Мелким шагом идут домой (комната тренера).');
        await era.printAndWait('Картошка у плиты наконец готова.');
        await era.printAndWait([
          acute.get_colored_name(),
          ' выкладывает, ',
          you.get_colored_name(),
          ' берёт миски.',
        ]);
        await era.printAndWait('С говядиной, вместе с рисом.');
        await era.printAndWait('Ам-ам, в живот.');
      } else {
        await you.say_as_passer_by_and_wait('Судья', 'Довольно!');
        await you.say_as_passer_by_and_wait(
          'Судья',
          '83-й всеяподнебесный турнир Трейсена по фигурному боксу, победительница—',
        );
        await you.say_as_passer_by_and_wait('Судья', [
          muteki.get_colored_name(),
          '-сан!',
        ]);
        await you.say_as_passer_by_and_wait('Смуглый детина', [
          acute.get_colored_name(),
          '-сан: последний удар прямиком в живот, чтобы сбить ритм ',
          muteki.get_colored_name(),
          ' -сан — поистине чудесный кулак…',
        ]);
        await you.say_as_passer_by_and_wait(
          'Смуглый детина',
          'Жаль, сильнейший мягкий кулак всё же не победил сильнейший жёсткий—',
        );
        await you.say_as_passer_by_and_wait(
          'Смуглый детина',
          'Лет на десять раньше, пока у легендарного мастера ещё не ушла крутость тела. Тот непревзойдённый удар, наверное, кончил бы бой.',
        );
        await you.say_as_passer_by_and_wait(
          'Смуглый детина',
          'Эх… годы. Истинный враг всех мастеров.',
        );
        await era.printAndWait(
          'Под рингом смуглый детина-комментатор роняет слезу.',
        );
        await era.printAndWait('А на ринге—');
        await acute.say_and_wait([
          callname.substring(0, 1),
          '……',
          callname,
          '……',
        ]);
        await era.printAndWait([
          'На ринге, в миг, когда пот встаёт паром, ',
          acute.get_colored_name(),
          ' глаза наполняются слезами.',
        ]);
        await acute.say_and_wait(
          'Уу～～～ я уже… догорела. Стала… белоснежным пеплом—',
        );
        await era.printAndWait([
          'Обессилевшая ',
          acute.get_colored_name(),
          ' бессильно оседает на ринг.',
        ]);
        await era.printAndWait('—А в то же время гром аплодисментов зрителей—');
        await era.printAndWait([
          'Так ',
          acute.get_colored_name(),
          ' под аплодисменты сходит с занавеса.',
        ]);
        await era.printAndWait(
          'Легенда старой эпохи всё же уступает преданию новой——',
        );
        era.drawLine();
        await era.printAndWait([
          'Когда закат, и толпа расходится. Неся на спине обессилевшую ',
          acute.get_colored_name(),
          ', ',
          you.get_colored_name(),
          ' и ',
          acute.get_colored_name(),
          ' вдвоём идут домой.',
        ]);
        await acute.say_and_wait([
          'Н～～ дала ',
          callname,
          ' увидеть себя проигравшей——',
        ]);
        await era.printAndWait([
          'Висит на спине, хоть тело уже не движется. ',
          acute.get_colored_name(),
          ' всё дует губы и не отпускает сегодняшний финал.',
        ]);
        era.printButton(
          '「Ну——тот последний удар видели и я, и зрители. Все за тебя болели.»',
          1,
        );
        await era.input();
        await acute.say_and_wait('Но… проиграла так проиграла.');
        era.printButton('「Ха-ха… да, и правда проиграла.»', 1);
        await era.input();
        await era.printAndWait('Победа и поражение на ринге так беспощадны.');
        await era.printAndWait(
          'Есть победитель — будет и проигравший. Победителю слава, проигравшему — жалкий сход.',
        );
        await era.printAndWait(
          'Тело, форма, удача. Если на ринге не выложиться на сто и не взять победу, даже красивые тренировочные цифры ничего не значат.',
        );
        await era.printAndWait(
          'Мир судит только по результату. Ринг так, скачки так.',
        );
        await era.printAndWait('…Только вот——');
        era.printButton(
          '「Раз сейчас проиграла — в следующем заезде отберёшь.»',
          1,
        );
        await era.input();
        await acute.say_and_wait(['……', callname, '?']);
        era.printButton(
          '「К тому же——даже если сейчас проиграла, в следующей партии отберёшь, и ладно.»',
          1,
        );
        await era.input();
        await era.printAndWait(
          'Пусть мир судит по результату — это не значит, что у каждого только 【один шанс】.',
        );
        await era.printAndWait('Да, проиграл. Ну и что?');
        await era.printAndWait('Всего лишь 【этот раз】.');
        await era.printAndWait('【В следующий】 отберёшь — и ладно.');
        await era.printAndWait([
          'Даже если проиграла 【100】 раз, лишь бы 【отнять назад】——',
          acute.sex,
          ' всё равно будет последней победительницей.',
        ]);
        await era.printAndWait([
          'Подправляешь на спине ',
          acute.get_colored_name(),
          ', до дома (комнаты тренера) осталось несколько шагов.',
        ]);
        await era.printAndWait([
          'Оборачиваешься на ',
          acute.get_colored_name(),
          ' ——и видишь: сейчас ',
          acute.get_colored_name(),
          ' тоже смотрит на ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Только в этот раз взгляд ',
          acute.get_colored_name(),
          ' будто не тот.',
        ]);
        await era.printAndWait('——Как это сказать?');
        await era.printAndWait('Уже не рассеянный, уже не нежный…');
        await era.printAndWait(
          'А мягкость с изумлением, ещё слабее, чем нежность.',
        );
        await era.printAndWait(
          'Тёмные глаза, в них утренние 「росинки」, блеск жизни——',
        );
        await era.printAndWait([
          'Почему-то, глядя на спине на 「впервые увиденную」 「хрупкую ',
          acute.teen_sex_title,
          ' 」, сердце колотится.',
        ]);
        await era.printAndWait(
          'Бьётся, бьётся——пока красная храбрость не встаёт комом в горле.',
        );
        era.printButton('「…Ха-ха.»', 1);
        await era.input();
        await era.printAndWait('Смеёшься невольно.');
        await acute.say_and_wait('…Ты чего смеёшься?');
        era.printButton('「Я смеюсь… я смеюсь над мясом в кастрюле.»', 1);
        await era.input();
        await era.printAndWait([
          'Сказав это, ',
          you.get_colored_name(),
          ' оборачивается: впереди коридор под закатом.',
        ]);
        await acute.say_and_wait('…И что тут смешного.');
        await era.printAndWait([
          'Надув губы, почти как дева, ',
          acute.get_colored_name(),
          ' ложится на плечо.',
        ]);
        era.drawLine();
        await acute.print_and_wait('…На самом деле силы уже вернулись.');
        await acute.print_and_wait([
          'Хотя бы эти несколько шагов, упрямством ',
          acute.uma_sex_title,
          ', пройти легко.',
        ]);
        await acute.print_and_wait('…Но.');
        await acute.print_and_wait('Но…');
        await acute.print_and_wait('Раз осталось так мало шагов.');
        await acute.print_and_wait([
          'Пусть ',
          callname,
          ' ещё немного понесёт… можно же?',
        ]);
        await acute.say_and_wait('………………');
        await acute.say_and_wait('Это в груди… дрожь…', true);
        await acute.say_and_wait(['Всё-таки я к ', callname, '… он——)'], true);
        era.drawLine();
        await acute.print_and_wait('Так солёный фан-фестиваль.');
        await acute.print_and_wait(
          'В вечерней порции тушёной картошки с мясом, что вышла чуть солоноватой,',
        );
        await acute.print_and_wait('опускает занавес——');
      }
    };
    f.title = title;
    return f;
  })(),
  ws_palace_ge: (() => {
    const title = 'Клятва';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait([
        'С ',
        acute.get_colored_name(),
        ' знакомства четвёртый год, март,',
      ]);
      await era.printAndWait(
        'Воздух уже теплее, земля всё ещё сырая и холодная.',
      );
      await era.printAndWait([
        'Третий день, как ',
        acute.get_colored_name(),
        ' вошла в Зал славы.',
      ]);
      await era.printAndWait([
        'И первый день, как ',
        you.get_colored_name(),
        ' и ',
        acute.get_colored_name(),
        ' приехали на Хоккайдо отдыхать.',
      ]);
      era.drawLine({ content: 'Хоккайдо, минсюку' });
      await acute.say_and_wait('Уа～ живого королевского краба вижу впервые——');
      await era.printAndWait([
        'Перед пиром на столе ',
        acute.get_colored_name(),
        ' искренне ахает.',
      ]);
      await era.printAndWait([
        'Хе, хорошо, что ',
        you.get_colored_name(),
        ' заранее готовился.',
      ]);
      await era.printAndWait([
        'Верно: ещё до начала отдыха тренер по имени ',
        you.get_colored_actual_name(),
        ' не спал ночами над буклетом минсюку и выучил наизусть три тысячи знаков «Гид по выживанию и еде Хоккайдо»——',
      ]);
      await you.say_and_wait([
        'Хм-хм～ ',
        acute.get_colored_name(),
        ', знаешь? На самом деле королевский краб — не краб, а рак-отшельник——」',
      ]);
      await acute.say_and_wait('Ум-ум～');
      await you.say_and_wait(
        'А королевский краб, что едят за столом, делится на четыре вида. И мы едим местную ханасаки——',
      );
      await acute.say_and_wait('Гурлу-гурлу～');
      await you.say_and_wait(
        'А уж про ханасаки нельзя не сказать про три способа есть и шесть имён——',
      );
      await acute.say_and_wait('Э-хей——а-ха-ха～');
      era.printButton(`…Слушай, ${acute.name}. Ты меня слушаешь?`, 1);
      await era.input();
      await acute.say_and_wait('Слушаю～');
      await era.printAndWait([
        acute.sex,
        ' говорит это и продолжает возиться с работой в руках——',
      ]);
      await acute.say_and_wait(
        'Ты только что про четыре написания королевского краба, да～',
      );
      await you.say_and_wait('Со · всем · не · то!');
      await era.printAndWait(
        'Не делай из гастрономической справки цитату какой-то жалкой страдалицы, ладно?',
      );
      await acute.say_and_wait(
        'А-ха-ха～ мне просто работа в руках довольно занятная.',
      );
      await era.printAndWait([
        'Глядишь на голос — в руках у ',
        acute.get_colored_name(),
        ' золотые ножницы для краба.',
      ]);
      await era.printAndWait(
        'По краю режет панцирь клешни, потом кольцо по суставу. Так можно держать клешню и при этом есть мясо на полную.',
      );
      await era.printAndWait(
        'В этом минсюку королевского краба обычно подают уже разделанным. Чтобы гость сам разделывал клешни — редкость.',
      );
      await you.say_and_wait('…Не зазнались, что ли?');
      await acute.say_and_wait('Это я сама попросила.');
      await acute.say_and_wait(
        'Вот так понемногу ножницами резать панцирь — вспоминается урок рукоделия на родине…',
      );
      await era.printAndWait(
        'Ясные глаза чуть шире, маленькая рука с ножницами качается. Хруст-хруст, осколки панциря сыплются на стол.',
      );
      await era.printAndWait([
        'Недолго — и прозрачный стержень крабового мяса оказывается в руке ',
        acute.get_colored_name(),
        '.',
      ]);
      await acute.say_and_wait(['Слушай, ', callname, '.']);
      await you.say_and_wait('М?');
      await acute.say_and_wait('На, а～');
      await era.printAndWait([
        'Под матерински нежным голосом стержень крабового мяса уже у лица ',
        you.get_colored_name(),
        '.',
      ]);
      await you.say_and_wait(['Слушай, ', acute.get_colored_name(), '……']);
      await acute.say_and_wait('А～');
      await you.say_and_wait('Тут всё-таки люди вокруг…');
      await acute.say_and_wait('А～');
      await you.say_and_wait('То, своими руками сыт…');
      await acute.say_and_wait('А～');
      await you.say_and_wait('……');
      await era.printAndWait(
        '——Если не откроешь рот, этот стержень упрётся тебе в нос!',
      );
      await era.printAndWait(
        'Открываешь рот к тому огромному, стоячему, глянцево-красному стержню крабового мяса и слегка откусываешь.',
      );
      await era.printAndWait(
        'Плотная плоть, горячий сок, соль, какая бывает только у морских тварей, и та самая дороговизна, за которую и зовут дорогим продуктом——',
      );
      await you.say_and_wait('Н… это и правда вкусно.');
      await you.say_and_wait([
        'Слушай, ',
        acute.get_colored_name(),
        ', ты тоже откуси——',
      ]);
      await acute.say_and_wait('А, подожди～');
      await era.printAndWait(
        'Попробовал хорошую еду и хочешь поделиться тем, что в руке.',
      );
      await era.printAndWait([
        'А рядом ',
        acute.get_colored_name(),
        ' с любопытством ножницами ковыряет следующую клешню.',
      ]);
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait(
        'Глядишь на стержень, который только что запихнули в рот.',
      );
      await acute.say_and_wait('М-хм-хм～ хм-хм-хм～');
      await era.printAndWait(['И глядишь на ', acute.get_colored_name(), '.']);
      await era.printAndWait(
        'Одной рукой снимаешь стержень — и вдруг наполняешься неведомой решимостью.',
      );
      await you.say_and_wait(['Слушай, ', acute.get_colored_name(), '.']);
      await acute.say_and_wait(['Что, ', callname, '?']);
      await you.say_and_wait('Сейчас время еды, да?');
      await acute.say_and_wait('Ага.～');
      await you.say_and_wait('Так вот…');
      await era.printAndWait([
        'Потом рука ложится ей перед грудью, и ',
        acute.sex,
        ' сбивается — обрывается рукоделие, которым была занята ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Тёмные глаза на миг вспыхивают: на эту правую руку, вдруг вошедшую в мир перед грудью, ',
        acute.sex,
        ' явно и засмотрелась.',
      ]);
      await era.printAndWait([
        'А затем вошедшая рука, как змей из Эдема, цепляет челюсть ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('Поворачивает, и глаза встречаются.');
      await era.printAndWait([
        'Может, от этой внезапности ',
        acute.get_colored_name(),
        ' не сопротивляется, только застывает. Белые щёки заливает розовое — не разберёшь, радость это или досада.',
      ]);
      await acute.say_and_wait(['Э-это… ', callname, '…?']);
      await era.printAndWait(
        'Голос будто в сомнении, будто в изумлении: семь частей непонимания, три — радостной странности.',
      );
      await era.printAndWait(
        'Шагнувшие пальцы не отступят; в тонком взгляде горит охота идти дальше.',
      );
      await era.printAndWait(
        'Задача аванпоста уже закрыта, дальше — настоящее.',
      );
      await you.say_and_wait(['Слушай, ', acute.get_colored_name(), '～.']);
      await acute.say_and_wait('Мн❤️…');
      await you.say_and_wait('Сейчас время еды, да?');
      await acute.say_and_wait('…М?');
      await you.say_and_wait('Так вот…');
      await era.printAndWait(
        'Улыбка оттеняет отражение большого (крабового) члена.',
      );
      await era.printAndWait(
        'В горсти — мягкое лицо, в пяди — свирепый зверь——',
      );
      await era.printAndWait('Сейчас, одинокий воин!');
      await you.say_and_wait('Давай нормально ешь крабовый член!!!!');
      await era.printAndWait([
        'Огромное копьё в это мгновение входит в рот ',
        acute.get_colored_name(),
        '.',
      ]);
      await acute.say_and_wait('Гх!?');
      await acute.say_and_wait('Н, м, мру…');
      await acute.say_and_wait('…………');
      await acute.say_and_wait('……❤️');
      await era.printAndWait('——————');
      await era.printAndWait('——Надо сказать,');
      await era.printAndWait('это был отличный пир.');
      era.drawLine();
      await era.printAndWait([
        'Это третий месяц четвёртого года знакомства с ',
        acute.get_colored_name(),
        ',',
      ]);
      await era.printAndWait([
        'третий день, как ',
        acute.get_colored_name(),
        ' вошла в Зал славы.',
      ]);
      await era.printAndWait([
        'На щедрость директора вы приехали отдыхать в минсюку на Хоккайдо.',
      ]);
      await era.printAndWait([
        '…Ну, хотя ',
        you.get_colored_name(),
        ' такая гостиница кажется себе слишком роскошной.',
      ]);
      await era.printAndWait('——Ночь уже глубока.');
      await era.printAndWait('Хотел после онсэна рано уснуть под одеялом.');
      await era.printAndWait('Но ворочаешься и не спится.');
      await era.printAndWait([
        'Открываешь одеяло, смотришь на луну за окном — безымянная тоска поднимается к сердцу ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Оборачиваешься — спокойное спящее лицо ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('Под покровом ночи, на цыпочках,');
      await era.printAndWait('тихо-тихо открываешь дверь.');
      await era.printAndWait('Вступаешь в бескрайнюю глухую ночь.');
      await era.printAndWait('………………');
      await era.printAndWait('Ночь всегда черна.');
      await era.printAndWait('Черна так, что может поглотить всё в человеке.');
      await era.printAndWait(
        'Но бледные звёзды и луна ещё оставляют светлячковый отсвет.',
      );
      await era.printAndWait(
        'Дают направление, чтобы пока выжить, и надежду идти дальше.',
      );
      await era.printAndWait(
        'Мартовская ночь на Хоккайдо со всех сторон всё так же пустынна.',
      );
      await era.printAndWait('Но именно эта пустынность будит.');
      await era.printAndWait('Пир хорош, постель мягкая, отопление полное,');
      await era.printAndWait('но всё это как пышная тень, сон и пузырь.');
      await era.printAndWait('—Да, ты всё ещё слишком слаб.');
      await era.printAndWait('Хочешь вперёд — только ещё 「углубиться」—');
      await acute.say_as_unknown_and_wait(['Ты ещё не спишь, ', callname, '.']);
      await era.printAndWait('Сзади доносится давно знакомый голос.');
      await era.printAndWait('Тело дрожит от холода, но дух от стужи ясен.');
      era.printButton(`「Я думал, ты спишь, ${acute.name}.」`, 1);
      await era.input();
      await acute.say_and_wait('Пока ты не уснул, я всё время не спала.');
      await era.printAndWait(
        'Сзади проходит силуэт: бьющееся сердце с длинными тёмно-серыми волосами.',
      );
      await era.printAndWait([
        acute.sex,
        ' : шаг всегда быстрее, чем у ',
        you.get_colored_name(),
        ', потому ближе к пруду, ближе к луне.',
      ]);
      await acute.say_and_wait('Я думала, ты скажешь мне сегодня за пиром.');
      await you.say_and_wait('……');
      await you.say_and_wait('Ты про… что?');
      await acute.say_and_wait('Про Францию, тренер-сан.');
      await acute.say_and_wait([
        'Ты уже принял приглашение французского скакового ',
        acute.uma_sex_title,
        ' мира ехать учиться в Париж. А через три дня один сядешь на самолёт в Париж, да?',
      ]);
      await you.say_and_wait('……');
      await era.printAndWait([
        acute.sex,
        'говорит, без сомнения, ничем не прикрытый факт.',
      ]);
      await acute.say_and_wait('…Почему не хотел сказать?');
      await era.printAndWait('Тёмно-серая спина произносит холодные слова.');
      await you.say_and_wait('…Я не хотел скрывать, Вандер Акют.');
      await you.say_and_wait('Просто не знал, как сказать.');
      await you.say_and_wait([
        'Если в мире ',
        acute.uma_sex_title,
        ' идти дальше, у нынешнего меня, боюсь, нет настоящего права стоять рядом с тобой.',
      ]);
      await you.say_and_wait(
        'Но я… хочу по-настоящему иметь право стоять рядом.',
      );
      await acute.say_and_wait('Потому… ты едешь в Париж учиться три года?');
      await you.say_and_wait('…Да.');
      await acute.say_and_wait('Потому… ты едешь в Париж учиться три года?');
      await era.printAndWait('В холодном ветру молчаливый ответ.');
      await era.printAndWait(
        'Вынужденная холодность, одинокая безжалостная стойкость.',
      );
      await era.printAndWait('Под луной холодный ветер, лес всё так же шумит.');
      await era.printAndWait('Тёмно-серая спина тихо поднимает голову.');
      await acute.say_and_wait([
        "…Ты знаешь 『Prix de l'Arc de Triomphe』, ",
        callname,
        '?',
      ]);
      await you.say_and_wait('Высший приз французских скачек?');
      await acute.say_and_wait([
        'Ага, тот заезд, куда каждый год наша сторона выбирает 『сильнейшую ',
        acute.uma_sex_title,
        ' 』 одну через море в Париж.',
      ]);
      await acute.say_and_wait('Хотя в этом году шанса, может, уже нет.');
      await acute.say_and_wait('Но если в следующем—');
      await you.say_and_wait('…Ты хочешь сказать?');
      await acute.say_and_wait('Я хочу сказать…');
      await era.printAndWait('Под луной тёмно-серый силуэт оборачивается,');
      await era.printAndWait('под гордой фигурой горит воля идти вперёд.');
      await era.printAndWait(
        'Три части сомнения, семь изумления: будто жалость, будто высшая радость.',
      );
      await era.printAndWait(
        'Это колос Сократа: гремит в ушах и почти нежность благородного.',
      );
      await era.printAndWait([
        'Под луной, среди звёзд серая ',
        acute.teen_sex_title,
        ' — и вот ',
        acute.sex,
        ' даёт свою клятву.',
      ]);
      await acute.say_and_wait('Раз ты едешь в Париж, я тоже поеду следом.');
      await acute.say_and_wait('Дай мне ещё год, тренер.');
      await acute.say_and_wait('Я тебя обязательно догоню.');
      await acute.say_and_wait([callname, '——']);
      era.drawLine();
      await era.printAndWait('История Хоккайдо пока на паузе.');
      await era.printAndWait('А у будущей истории ещё очень, очень долго—');
    };
    f.title = title;
    return f;
  })(),
  ws_palace_ne: (() => {
    const title = 'Начало';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     * @param {PrintedSpan} y_call_m 玩家对骏川缰绳的称呼
     * @param {PrintedSpan} y_call_t 玩家对秋川弥生的称呼
     */
    const f = async (
      acute,
      minoru,
      taste,
      you,
      callname,
      y_call_m,
      y_call_t,
    ) => {
      await era.printAndWait([
        'Четвёртый год знакомства с ',
        acute.get_colored_name(),
        ', март,',
      ]);
      await era.printAndWait(
        'Температура чуть поднялась, но земля всё ещё сырая и холодная.',
      );
      await era.printAndWait([
        'Шестой день после того, как ',
        acute.get_colored_name(),
        ' вошла в зал славы.',
      ]);
      await era.printAndWait([
        'И первый год, как когда-то делившие всё ',
        you.get_colored_name(),
        ' и ',
        acute.get_colored_name(),
        ' вот-вот разойдутся.',
      ]);
      era.drawLine({ content: 'Токио, международный аэропорт' });
      era.printButton('「Досюда достаточно.」', 1);
      await era.input();
      await you.say_and_wait([
        'Спасибо, что проводили, ',
        y_call_t,
        ', ',
        y_call_m,
        '.',
      ]);
      await minoru.say_and_wait('А-ха-ха—столько лет, к чему церемонии.');
      await taste.say_and_wait([
        'Со гласна! ',
        you.actual_name,
        ' тренер давно уже семья нашей академии Трейсен.',
      ]);

      await era.printAndWait([
        'У выхода на посадку ',
        you.get_colored_name(),
        ' с ',
        minoru.get_colored_name(),
        ', ',
        taste.get_colored_name(),
        ' прощаются в последний раз.',
      ]);
      await minoru.say_and_wait(
        'Впрочем… не думала, что ты и правда примешь приглашение Франции.',
      );
      await taste.say_and_wait(
        'Шок! Когда услышала, у меня даже редька от изумления упала на пол.',
      );
      await you.say_and_wait('Ха-ха… может, это и правда не в моём стиле.');
      await era.printAndWait([
        'Потирая затылок, перед ',
        minoru.get_colored_name(),
        ' и ',
        taste.get_colored_name(),
        ' невольно неловко смеёшься.',
      ]);
      await you.say_and_wait('На самом деле… решился только недавно.');
      await you.say_and_wait([
        'За три года тренером ',
        acute.get_colored_name(),
        ' понял, как далеко до по-настоящему отличного тренера.',
      ]);
      await you.say_and_wait(
        'И невозмутимость, и умение точно мерить строгость в плане тренировок',
      );
      await you.say_and_wait(
        'Нынешний я до 『отличного тренера』, боюсь, ещё очень далеко.',
      );
      await minoru.say_and_wait(
        'Потому ты принял приглашение французских скачек и едешь в Париж углубляться?',
      );
      await you.say_and_wait(
        'Да—но как вы знаете того меня. Одним собой смелости бросить дом не хватило бы.',
      );
      await you.say_and_wait([
        'На деле… это ',
        acute.get_colored_name(),
        ' помогла мне решиться.',
      ]);
      await you.say_and_wait([
        'Даже если я такой никудышный и недостойный тренер, ',
        acute.get_colored_name(),
        ' всё равно была крепка: своим трудом и малой удачей вошла в зал славы, правда?',
      ]);
      await you.say_and_wait(
        'Потому я подумал—мне тоже, может, стоит постараться.',
      );
      await you.say_and_wait([
        'Хочу… по-настоящему иметь право как тренер стоять рядом с ',
        acute.get_colored_name(),
        '.',
      ]);
      await minoru.say_and_wait('Вот как…');
      await taste.say_and_wait(
        'Без жа ли! Раз ты так решил, мы, конечно, безоговорочно поддержим.',
      );
      await minoru.say_and_wait([
        'Впрочем… ',
        acute.get_colored_name(),
        ' ',
        acute.sex,
        ' почему сегодня не пришла проводить?',
      ]);
      await you.say_and_wait([
        'Это… про Францию я до сих пор скрываю — не знает ',
        acute.sex,
        '.',
      ]);
      await taste.say_and_wait([
        'Шок!? Ты до сих пор скрываешь от ',
        acute.get_colored_name(),
        '!?',
      ]);
      await you.say_and_wait(['Ха-ха… я оставил ', acute.sex, ' письмо.']);
      await you.say_and_wait(['Честно, сам не знаю, правильно это или нет.']);
      await you.say_and_wait([
        'Просто если и правда проститься — так, чтобы напротив была ',
        acute.sex,
        '… всё-таки лучше одному тайком, как бездомному псу, улизнуть…',
      ]);
      await era.printAndWait('【бон, бон, бон, бон～】');
      await era.printAndWait('【Пассажиры в Париж, внимание～】');
      await era.printAndWait('【Рейс QR5201 начинает посадку～】');
      await you.say_and_wait(['Похоже, время—', y_call_t, ', ', y_call_m, '.']);
      await minoru.say_and_wait(['Счастливого пути, ', you.actual_name, '.']);
      await taste.say_and_wait(
        'Вели кие планы! Выучившись, скорее возвращайся!',
      );
      await you.say_and_wait('Спасибо. Тогда—');
      await you.say_and_wait('Увидимся через три года.');
      await era.printAndWait('………………');
      await era.printAndWait('Скучная очередь, безжизненная проверка билетов.');
      await era.printAndWait('С второго этажа на эскалаторе в зал,');
      await era.printAndWait(
        'всё это не назвать интересным и не стоит упоминать.',
      );
      await era.printAndWait(
        'На миг хочется пить. Привычно суёшь руку в сумку за сушёной редькой.',
      );
      await era.printAndWait([
        'Перерыл всё и вспомнил: ',
        you.get_colored_name(),
        ' выходя из дома еду с собой не берёт.',
      ]);
      await you.say_and_wait('……');
      await you.say_and_wait('…Ха-ха—');
      era.printButton('「Как давно я уже не выезжал один?」', 1);
      await era.input();
      await era.printAndWait('В торопливом потоке нет ответа.');
      await era.printAndWait(
        'Невольно поднимаешь голову. Смотришь назад на выход на посадку.',
      );
      await era.printAndWait(
        'Там бонсай всё тот же, ходят несколько силуэтов.',
      );
      await you.say_and_wait(
        [
          '…Если бы ',
          acute.get_colored_name(),
          ' была там, как было бы хорошо?',
        ],
        true,
      );
      await era.printAndWait('Само приходит в голову,');
      await era.printAndWait('а за ним — мягкая самонасмешка.');
      era.printButton('(Вот уже так… о чём это.)', 1);
      await era.input();
      era.printButton(
        `(${you.actual_name} а, ${you.actual_name}, как ты можешь быть таким трусливым)`,
        1,
      );
      await era.input();
      await era.printAndWait(
        'Горькая самонасмешка тает в небе и тонет в море людей.',
      );
      await era.printAndWait('Соберись духом.');
      await era.printAndWait([
        you.get_colored_name(),
        ' делает 「первый」 шаг—',
      ]);
      era.drawLine();
      await acute.print_and_wait('Под бонсаем, у стекла.');
      await acute.print_and_wait([
        'Одна ',
        acute.child_sex_title,
        ' тихо сидит здесь.',
      ]);
      await acute.print_and_wait([
        'Люди часто говорят: ',
        acute.child_sex_title,
        ' спокойна, мягка, даже старообразна.',
      ]);
      await acute.print_and_wait([
        'На деле ',
        acute.child_sex_title,
        ' вовсе не всегда спокойна и мягка, как говорят.',
      ]);
      await acute.print_and_wait([
        acute.sex,
        ' тоже как все: чувствует давление, боль, невысказанную тоску, раздирающую грудь муку.',
      ]);
      await acute.print_and_wait([
        'Только—',
        acute.sex,
        ' не любит выносить эту тайну людям.',
      ]);
      await acute.print_and_wait([
        acute.sex,
        'больше любит тайком спрятаться одной.',
      ]);
      await acute.print_and_wait('Спрятаться туда, где 「никто не найдёт」.');
      await acute.print_and_wait('Там тихо сесть.');
      await acute.print_and_wait('Как 「в самом начале」—');
      minoru.name = `В зелёной шляпе ${minoru.phy_sex_title}`;
      acute.name = acute.child_sex_title;
      await minoru.say_and_wait([
        ' — не пойдёшь проститься? Ведь уходит ',
        you.sex,
        '.',
      ]);
      await acute.print_and_wait([
        'Рядом добрая ',
        acute.phy_sex_title,
        ' — вот ',
        acute.sex,
        ' и стоит сбоку, выпрямившись.',
      ]);
      await acute.say_and_wait('Нет, не надо… так лучше.');
      await minoru.say_and_wait('Да…');
      await acute.print_and_wait([
        'Смотрит на поток внизу и выхватывает из толпы спину — ',
        you.child_sex_title,
        '.',
      ]);
      await acute.print_and_wait([
        'Почему-то ',
        acute.phy_sex_title,
        ' невольно вздыхает.',
      ]);
      await minoru.say_and_wait('Этот малый — настоящий дурак—');
      await acute.say_and_wait(['Ты про ', callname, '?」']);
      await minoru.say_and_wait(['А кто ещё, если не ', you.sex, '?']);
      await acute.print_and_wait([
        'Сказав это, ',
        acute.phy_sex_title,
        ' дрогнула шляпа: скрытая тайна так и рвётся наружу.',
      ]);
      await acute.say_and_wait('А я разве нет?', true);
      await acute.print_and_wait([
        acute.child_sex_title,
        ' глотает эту фразу, что рванулась из груди.',
      ]);
      await acute.print_and_wait([
        'Всё-таки ',
        you.child_sex_title,
        ' всегда плохо умеет скрывать.',
      ]);
      await acute.print_and_wait('Не привык к сети и нет места в яви.');
      await acute.print_and_wait([
        'Почта туда-сюда, уговоры NOK — всё, дойдя до Трейсена, шло через неё, и ',
        acute.child_sex_title,
        '.',
      ]);
      await acute.print_and_wait(
        '—С самого начала между ними не было никаких тайн.',
      );
      await minoru.say_and_wait('…Ещё успеешь?');
      await acute.print_and_wait([acute.phy_sex_title, 'кажется, волнуется.']);
      await minoru.say_and_wait('Если увидеть в последний раз—');
      await acute.say_and_wait('Не надо.');
      await acute.print_and_wait([
        acute.child_sex_title,
        ' сидит на месте, отрезая начисто.',
      ]);
      await acute.print_and_wait([
        'Беспокойное сердце всё же даёт ',
        acute.sex,
        ' набраться храбрости.',
      ]);
      await acute.print_and_wait([
        'Глядя ей в лицо, ',
        minoru.phy_sex_title,
        ' всегда трусливая ',
        acute.child_sex_title,
        ' наконец выговаривает то, что в груди—',
      ]);
      await acute.say_and_wait('Дураков—здесь ещё один.');
      await acute.print_and_wait([
        'В этот миг идущая в зал славы ',
        acute.child_sex_title,
      ]);
      await acute.print_and_wait(' впервые обретает 「храбрость」.');
      era.drawLine();
      minoru.name = undefined;
      acute.name = undefined;
      await acute.print_and_wait('Летающая железная птица гремит.');
      await acute.print_and_wait(
        'А люди под железным куполом не слышат её прощальной ноты.',
      );
      await acute.print_and_wait([
        'Глядя на облака, ',
        acute.get_colored_name(),
        ' вскрывает письмо в руках.',
      ]);
      await acute.print_and_wait('Внутри — розоватый, чуть жёсткий картон.');
      await acute.print_and_wait('Исписан небрежным почерком.');
      await you.say_and_wait([acute.get_colored_name(), ', почтительно.']);
      await you.say_and_wait(
        'Когда ты читаешь это письмо, я уже должен сидеть в самолёте в Париж.',
      );
      await you.say_and_wait(
        'Прости, что уехал не простившись. Я просто не знал, с каким лицом сказать тебе об уходе.',
      );
      await you.say_and_wait(
        'Как твой тренер мы вместе прошли долгие и занятные три года.',
      );
      await you.say_and_wait(
        'За эти три года мы вместе создали множество воспоминаний.',
      );
      await you.say_and_wait(
        'Трусливый я в это время тоже принимал твою помощь.',
      );
      await you.say_and_wait(
        'Может, от удачи, и непременно от твоих постоянных усилий эти три года наконец ввели нас в зал славы.',
      );
      await you.say_and_wait(
        'Но именно поэтому я понял—мне ещё слишком многому учиться.',
      );
      await you.say_and_wait(
        'Потому я решил принять приглашение Франции. Учиться в более продвинутом скаковом мире за границей.',
      );
      await you.say_and_wait(
        'К сожалению, в эти три года учёбы я больше не смогу быть твоим тренером.',
      );
      await you.say_and_wait(
        'Но если можно—через три года, если ты ещё в скачках. Оставь тогда место своего тренера мне.',
      );
      await you.say_and_wait(
        'Прости мою корысть—но из-за неё эти три года я буду пахать.',
      );
      await you.say_and_wait('Как бы ни было, ты будешь моей целью.');
      await you.say_and_wait(
        'Стараться как тренер, что по-настоящему может стоять рядом с тобой.',
      );
      await you.say_and_wait('На этом — с почтением, будьте здоровы.');
      await you.say_and_wait(['——', you.get_colored_actual_name()]);
      era.drawLine();
      await acute.say_and_wait('……');
      await acute.say_and_wait('Мы—');
      await acute.say_and_wait('—оба, без скидок, большие дураки.');
      await acute.print_and_wait(
        'Под необъятным небом остаётся лишь гордость двоих.',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_leg: (() => {
    const title = 'На коленях Вандер Акют';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {string} callname 奇锐骏对玩家的称呼
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait(
        'Может, плохо отдохнул: сегодня утром всё слипаются глаза.',
      );
      await era.printAndWait('Плохо, скоро тренировка;');
      await era.printAndWait([
        'Как зрелый тренер нельзя, чтобы ',
        you.get_colored_name(),
        ' видел эту ленивую сторону—',
      ]);
      await acute.say_and_wait([callname, '?']);
      await you.say_and_wait('——!?');
      await era.printAndWait('Пока переводишь дух, уже за спиной.');
      era.printButton(`「Ва- ${acute.name}!? Когда подошла?」`, 1);
      await era.input();
      await acute.say_and_wait([
        'Давно уже. Просто ',
        callname,
        ' выглядел таким усталым, так что не мешала～',
      ]);
      await era.printAndWait([
        'Под мягкими словами — беззвучное дыхание; в красном спортивном костюме ',
        acute.teen_sex_title,
        ' садится на ступени у белых лилий.',
      ]);
      await acute.say_and_wait([
        'До тренировки ещё есть время… отдохни, ',
        callname,
      ]);
      await era.printAndWait([
        acute.sex,
        ' хлопает по коленям, райской земле, и правой манит ',
        you.get_colored_name(),
        ' пасть в счастливое место.',
      ]);
      await era.printAndWait([
        '…Сначала ',
        you.get_colored_name(),
        ' отказался.',
      ]);
      await era.printAndWait('Но там и правда так хорошо… ещё пахнет мятой.');
      await era.printAndWait([
        you.get_colored_name(),
        ' Может, нарочно уходит от того взгляда, каким смотрит ',
        acute.sex,
        ' сама,',
      ]);
      await era.printAndWait([
        'но тёплая ладонь уже легла на пряди ',
        you.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Потом тихая песня звучит у уха ',
        you.get_colored_name(),
        ' —',
      ]);
      const buffer = [
        async () => {
          await acute.say_and_wait(
            'Ветер пришёл～ дождь пришёл～ Громовик барабан на спине принёс～',
          );
          await acute.say_and_wait(
            'Ты стучи～ я стучу～ стучим, пока Громовик не согнулся～',
          );
          await acute.say_and_wait(
            'Ты бей～ я бью～ бьём, пока Громовик зубы не оскалил～',
          );
        },
        async () => {
          await acute.say_and_wait('Бо-о-ольшой～ ма-а-аленький～');
          await acute.say_and_wait('Раз два три четыре пять шесть семь～');
          await acute.say_and_wait('Бо-о-ольшой～ ма-а-аленький～');
          await acute.say_and_wait('До ре ми фа соль ля си～');
        },
        async () => {
          await acute.say_and_wait(
            'Хочу скорее сказать, как хочу быть вместе каждый день～',
          );
          await acute.say_and_wait('Разбирать сто тысяч почему～');
          await acute.say_and_wait('Скорее сказать тебе пару больших истин～');
          await acute.say_and_wait('Между друзьями всего дороже дружба～');
          await acute.say_and_wait('Моё сердце лежит у тебя～');
        },
        async () => {
          await acute.say_and_wait(
            'Луна～ в облаках как белый лотос～ плывёт～',
          );
          await acute.say_and_wait('Вечерний ветер несёт весёлые песни～');
        },
      ];
      await get_random_entry(buffer)();
      await era.printAndWait('……………………');
      await era.printAndWait('Это вовсе не такая уж красивая песня,');
      await era.printAndWait('если уж говорить — певица ещё и чуть фальшивит.');
      await era.printAndWait('Но… лежа на коленях и слушая такую песню,');
      await era.printAndWait('всегда чувствуешь искренний покой—');
    };
    f.title = title;
    return f;
  })(),
  crazy_fan_end: (() => {
    const title = 'Луна не взошла';
    /**
     * @param {CharaTalk} acute 奇锐骏
     * @param {CharaTalk} you 玩家
     * @param {string} title 玩家头衔
     */
    const f = async (acute, you, title) => {
      await era.printAndWait(
        'Поражение само по себе не позор: достаточно снова встать.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' твёрдо верит этой сентенции.',
      ]);
      await era.printAndWait([
        'Сплетни, травмы, промахи, слухи — чёрное сидит над ',
        you.get_colored_name(),
        ' и ',
        acute.get_colored_name(),
        '.',
      ]);
      await era.printAndWait([
        'Но даже так ',
        you.get_colored_name(),
        ' всё равно верит: победа в следующем заезде развеет любую тень.',
      ]);
      await era.printAndWait([
        'Потому под вечер ',
        you.get_colored_name(),
        ' уходит из Трейсена на торговую улицу за тренировочными принадлежностями.',
      ]);
      await era.printAndWait([
        'Люди узнали ',
        you.get_colored_name(),
        ', ',
        title,
        ' тренера ',
        you.get_colored_name(),
        ': насмешки, презрение, грязь — без умолку.',
      ]);
      await era.printAndWait([
        'Честно, ',
        you.get_colored_name(),
        ' не хочет с ними связываться, но их злоба всё равно мешает ',
        you.get_colored_name(),
        ' закупкам. Когда ',
        you.get_colored_name(),
        ' выходит из лавки, уже темно.',
      ]);
      await era.printAndWait([
        'Можно было ',
        you.get_colored_name(),
        ' по большой дороге вернуться в Трейсен.',
      ]);
      await era.printAndWait([
        'Можно было ',
        you.get_colored_name(),
        ' не заходить в тот переулок.',
      ]);
      await era.printAndWait('Можно было—');
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');

      await acute.print_and_wait(
        'Когда я добежала, в переулке только нож, белая ткань и лужа крови.',
      );
      await acute.print_and_wait(
        'И коробка от торта в крови, с одной стороны растоптанная.',
      );
      await acute.print_and_wait(
        'Вытекший торт прилип к подошве виновного: от ткани до конца переулка.',
      );
      await acute.print_and_wait(
        'Я по следу торта вышла из переулка и увидела пьяницу в наручниках, которого уже вели в машину.',
      );
      await acute.print_and_wait('…………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('…………');
      await acute.print_and_wait('В ту ночь под неоном торговой улицы.');
      await acute.print_and_wait([
        'Луна ',
        { color: 'red', content: ' не взошла.' },
      ]);
      era.println();
      await era.printAndWait([
        'Месть разъярённых фанатов: ',
        you.get_colored_name(),
        ' встречает конец.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
