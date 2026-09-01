/**
 * @file 鲁铎象征 - 招募
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_start(luna, you) {
    await era.printAndWait(
      `${you.name} Почесал затылок, постоял над лужей в ванной и развёл руками.`,
    );
    await era.printAndWait(
      ` с самого утра остался без ванной — вся техника полегла. ${you.name} Понимал: хоть тресни, они всё равно не станут слушаться.`,
    );
    era.printButton('「Тогда уж лучше на работу.」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} Лихо захлопнул дверь, подхватил рюкзак и пошёл в Трейсен.`,
    );
    era.println();

    await era.printAndWait(
      ` встречал очередной новый семестр. ${you.name} Думал: как ни крути, Трейсену давно пора вылезти из прошлогодней хандры.`,
    );
    await era.printAndWait('Новый семестр, новые надежды, новые истории.');
    await era.printAndWait(
      ` на станции, в ожидании поезда, ${you.name} не глядя взял газету со стойки на платформе: там красовалась бравая умамусумэ и четыре огромных иероглифа:`,
    );
    await era.printAndWait('Симболи Рудольф!');
    await era.printAndWait(
      `${you.name} свистнул, засунул газету под мышку и вскочил в вагон.`,
    );
    await era.printAndWait(
      '— Что та самая Симболи Рудольф вот-вот дебютирует, уже намертво засело у всех на языке.',
    );
    await era.printAndWait(
      'На работе, в свободный час — где только люди сходятся, все гудят об одном, аж искры летят.',
    );
    await era.printAndWait(
      '???「Председатель студенческого совета, [Император] Симболи Рудольф!」',
    );
    await era.printAndWait(
      '???「Интересно, кому выпадет стать тренером того Императора?」',
    );
    await era.printAndWait(
      ` и вправду нуждается в тренере?»${luna.sex} и вправду нуждается в тренере?»`,
    );
    await era.printAndWait(
      '???「Это же лучшее творение рода Симболи, звезда, на которую пялятся все ещё до дебюта. Ха, вот так шишка!」',
    );
    await era.printAndWait(
      ` всякий раз, заслышав такое, ${you.name} в груди распирало от гордости. Словно громкое имя того Императора и ${you.name} имеют самое прямое отношение.`,
    );
    await era.printAndWait(
      ` и правда ${you.name} служил в доме Симболи. Если точнее — какое-то время был там помощником тренера.`,
    );
    await era.printAndWait(
      ` хоть и только хвостом ходил за большими людьми, на подхвате, без единого шанса прославиться, но за те дни ${you.name} сумел сойтись со всеми маленькими умамусумэ дома Симболи.`,
    );
    await era.printAndWait(
      ` Одна девочка по имени Луна так и вовсе с ${you.name} не разлей вода.`,
    );
    await era.printAndWait(
      ` давно уже не показывался в доме Симболи, но из-за этой страницы в резюме и ${you.name}, и члены рода Симболи в Трейсене питают друг к другу нешуточную теплоту.`,
    );
    if (era.get('flag:当前声望') < 500) {
      await era.printAndWait(
        ` стоило вспомнить те дни —${you.name} как сразу светлело на душе. Хоть бы однажды ${you.name} тоже встал плечом к плечу с такой сильной умамусумэ и пробил себе имя в Центре.`,
      );
    } else {
      await era.printAndWait(
        ` бросил ворошить ту странную пору, ${you.name} выдохнул в небо — выпустил тревогу, прятавшуюся под гордостью. Новый семестр начался, ${you.name} и в этом цикле подопечная неминуемо схватится с Симболи Рудольф — дальше, того и гляди, везде будут рогатки. Лишь бы даже после ударов она шла вперёд спокойно.`,
      );
    }
    era.println();

    await era.printAndWait(
      ` вошёл в академию, ${you.name} и видит: народу почти нет — точнее, ворота наглухо закрыты.`,
    );
    await era.printAndWait(
      `${you.name} понял, что пришёл рановато… пожалуй, чересчур. Зря не остался бодаться с ванной.`,
    );
    await era.printAndWait(
      ` решил: раз уж выпало время, почему бы не пройтись. ${you.name} Перелез через ограду и спрыгнул во двор.`,
    );
    await era.printAndWait('В академии стояла тишина.');
    await era.printAndWait(
      `${you.name} с любопытством задрал голову и огляделся. В обычный день в такой час в учебный корпус едва ли кто сунется, а в часы пик Трейсен всегда гудит как улей.`,
    );
    await era.printAndWait(
      ` почуял неладное: ${you.name} словно донёсся чей-то плач.`,
    );
    await era.printAndWait(
      ` невесть отчего ${you.name} передёрнуло так, как не передёргивало никогда.`,
    );
    await era.printAndWait(`${you.name} тело само дёрнулось вперёд.`);
    await era.printAndWait('Словно что-то в душе толкало тебя с места.');
    await you.say_and_wait('Если сейчас не поспешить!', true);
    await you.say_and_wait('Если сейчас же не найти ту девочку!', true);
    await era.printAndWait(
      `${you.name} рванул в глухой угол и только задыхаясь сообразил: это частная тренировочная.`,
    );
    await era.printAndWait('Плевать уже —!');
    await era.printAndWait(
      `${you.name} ворвался, толкнув чуть приоткрытую дверь.`,
    );
    era.println();
    await era.printAndWait(
      `, умамусумэ, сжалась в комок и лежала на полу. ${luna.sex} Голову стиснула руками — будто её пронзило лютой болью.`,
    );
    await era.printAndWait(
      `${you.name} хотел спросить — но ноги приросли к полу, будто их гвоздями прибили.`,
    );
    await era.printAndWait(
      ` и впрямь, это Симболи Рудольф —${you.name} открыл рот — в горле пересохло.`,
    );
    await era.printAndWait(
      ` под тяжестью громкого имени и славы, ${
        luna.sex
      } всё ещё лишь в самом расцвете ${luna.teen_sex_title}.`,
    );
    await era.printAndWait(
      ` в то же время ${you.name} пошатнулся до основания.`,
    );
    await era.printAndWait(
      'Никто бы не поверил, что тот несравненный 「Император」 —',
    );
    await era.printAndWait(
      'тот Симболи, о котором судачат, будто без единой щели —',
    );
    await era.printAndWait(
      'тот, чьё желание — чтобы все умамусумэ могли бежать в 「Эдеме」 —',
    );
    await era.printAndWait(
      ` в безлюдном углу ревёт и блюёт. Но ещё сильнее ${you.name} выбило из колеи то, что…`,
    );
    era.printButton('「Ты —」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} решил, что точно спятил. Но ${you.name} знал: этого ребёнка он не забудет никогда.`,
    );
    await era.printAndWait(
      '—— Та взъерошенная девчонка, что щерила зубы и рвалась в бой, как маленький лев.',
    );
    await era.printAndWait(
      '—— Та, что ни за что не гнула шею и с важным видом таскала тебя и в горы, и за море.',
    );
    await era.printAndWait(
      '—— Та властная и всё равно милая, что клялась: тебя не забудет вовек.',
    );
    await era.printAndWait(`${you.name} носит в душе имя — ${luna.sex}.`);
    await era.printAndWait(
      `${you.name} никогда не забудет, кто такая ${luna.sex}.`,
    );
    era.printButton('「Луна!」', 1);
    await era.input();

    await era.printAndWait(
      `Ослабевшая ${luna.teen_sex_title} поднимает голову и смотрит на тебя.`,
    );
    await luna.say_and_wait(`……${you.actual_name}……?`);
    await era.printAndWait(
      `Сказав это, ${luna.sex} больше не держится и, пошатнувшись, валится на землю.`,
    );
    await era.printAndWait(
      `${you.name} с скоростью, которой не верит даже себе, бросается к ней, и вот в объятиях ${luna.sex}.`,
    );
    await luna.say_and_wait('Это правда ты…');
    await era.printAndWait(`С этими словами ${luna.sex} никнет и засыпает.`);

    era.drawLine();
    await era.printAndWait(
      `Симболи Рудольф — пока её так не звали, ${luna.teen_sex_title} звалась Луной.`,
    );
    await era.printAndWait(
      `${luna.sex} Обожала бегать, обожала сладкое, обожала бездельничать целыми днями.`,
    );
    await era.printAndWait(
      `Пока семья ещё не возлагала надежд, ${luna.sex} была лишь головной болью и баловнем дома Симболи — их маленьким наследником.`,
    );
    await era.printAndWait(
      'Но годы шли — и абсолютная сила Луны, острота, от которой перехватывало дух, привела дом Симболи в бурный восторг.',
    );
    await era.printAndWait(
      `${luna.sex} Вот какая мощь. Хватит, чтобы насытить любые желания.`,
    );
    await era.printAndWait(
      'Луна помнит: с какого-то дня её жизнь переломилась.',
    );
    await era.printAndWait(
      `${luna.sex} Больше не Луна. С этих пор ${luna.sex} — Симболи Рудольф.`,
    );
    await era.printAndWait(
      'Но как человеку вдруг, на пустом месте, стать кем-то другим?',
    );
    await era.printAndWait(
      `Луна мучилась день и ночь — пока однажды ${luna.sex}——`,
    );
    era.printButton('「Луна… Луна…!」', 1);
    await era.input();

    await era.printAndWait(
      `Будто наконец услышала, как зовёт ${you.name} — и Луна медленно приходит в себя.`,
    );
    await era.printAndWait(
      `${luna.sex} Горько усмехается: сама, что ли, сломалась? С какой стати ей слышать голос ${
        you.actual_name_with_title
      }.`,
    );
    await era.printAndWait(
      `${you.sex} Это Трейсен. Но с тех пор она твёрдо решила никого не втягивать, тем более ${you.sex}.`,
    );
    await era.printAndWait(`Но тут ${luna.sex} остро чует: это не сон.`);
    era.drawLine();
    era.printButton('「Луна, это правда ты?」', 1);
    era.printButton('「Луна, так ты и есть Симболи Рудольф?!」', 2);
    await era.input();
    await era.printAndWait(
      `Глядя на Луну в объятиях, ${you.name} невольно спрашивает.`,
    );
    await luna.say_and_wait('Ты наконец-то со мной.');
    await era.printAndWait(
      `Луна, будто приняв судьбу, горько улыбается. И ${luna.sex} плачет от счастья.`,
    );
    await luna.say_and_wait(
      'Приди ты хоть немного раньше — я бы и не… Уходи. И никому ни слова о сегодняшнем. Император не смеет быть слабым.',
    );
    await era.printAndWait(
      `${you.name} не дослушав Луну, ${luna.sex} выгоняет тебя прочь.`,
    );
    await era.printAndWait(
      `${you.name} ясно видит: ${luna.sex} тоже узнаёт тебя.`,
    );
  },
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_end(luna, you) {
    await era.printAndWait(
      `Следующие несколько дней ${you.name} не находит себе места.`,
    );
    await era.printAndWait(
      `Луна не хочет тебя видеть — значит, не пойдёшь смотреть, жива ли ${luna.sex}.`,
    );
    await era.printAndWait(
      `С давних пор ${you.name} не смеет перечить. Что ${luna.sex} вздумает — закон. Даже выросши, даже став тренером, едва ${luna.sex} откроет рот — и ты сделаешь всё, даже не пикнув.`,
    );
    await era.printAndWait(
      `${you.name} Среди этой тревоги вдруг в тренерскую врывается член студенческого совета — сияет, пышет нетерпением.`,
    );
    await era.printAndWait(
      `${luna.sex} Ищет ${you.name}. Точнее, ${luna.sex} принесла тебе письмо.`,
    );
    await era.printAndWait(
      'Член совета「Это прямое именное назначение от главы студенческого совета, Симболи Рудольф.」',
    );
    await era.printAndWait(
      `${luna.sex} Сияет так, что аж трясёт, и суёт письмо прямо в руки ${you.name}.`,
    );
    await era.printAndWait(
      `${you.name} с неловкой улыбкой принимает эту «горячую картошку».`,
    );
    await era.printAndWait(
      `Поручение закрыто — член совета уносится как ветер. ${you.name} отшучивается и сваливает пораньше.`,
    );
    await era.printAndWait(
      `Потом ${you.name} что есть духу мчится домой, куда несколько дней не ступала нога, и наглухо запирает дверь.`,
    );
    await era.printAndWait(
      `${you.name} врывается в самую дальнюю ванную и насмерть зажимает дверь спиной.`,
    );
    await era.printAndWait(
      `${you.name} чует, как дрожат руки; еле совладав с собой, дрожащими пальцами сдирает конверт,`,
    );
    await era.printAndWait(
      `${you.name} вынимает лист — на белоснежной бумаге резко выступают всего два больших знака:`,
    );
    await era.printAndWait('「Спаси меня」', {
      align: 'center',
      color: luna.color,
      fontSize: '3rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait(
      `${you.name} бессильно сидит на полу: ванную вовремя не убрали, ${you.name} только что купленные штаны уже насквозь промокли от стоячей воды.`,
    );
    await era.printAndWait(
      `${you.name} понимает, ${you.name} права отказаться нет.`,
    );
    await era.printAndWait(
      `${you.name} неясно, что же произошло с Симболи Рудольф — Луной.`,
    );
    await era.printAndWait(
      `${you.name} и понимает: просьбу Луны она не отвергнет никогда.`,
    );
    await era.printAndWait('Какой бы ад ни ждал вас впереди.');

    era.drawLine();
    await era.printAndWait([
      'Контракт с ',
      luna.get_colored_actual_name(),
      ' заключён.',
    ]);
  },
};
