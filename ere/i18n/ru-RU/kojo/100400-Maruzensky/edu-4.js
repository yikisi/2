/**
 * @file 丸善斯基 - 育成
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} train 训练的基础属性（已经过 i18n 翻译）
   */
  get_ts_content(maru, train) {
    era.print([
      maru.get_colored_name(),
      ' — ',
      train,
      ' тренировка прошла гладко',
    ]);
  },
  ts_add: (() => {
    const title = 'Дополнительная самостоятельная тренировка';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Когда ${maru.name} закончила тренировку.`);
      await maru.say_and_wait(`Халоу? ${callname}, есть время потом?`);
      await maru.say_and_wait('В такую погоду бегать, наверное, очень весело?');
      await maru.say_and_wait(
        'Брызги из-под ног, размытый дождём взгляд… в такие минуты будто чувствуешь совсем особенный ветер.',
      );
      await maru.say_and_wait(
        'Я же сегодня так огненно бежала! Просто так закончить тренировку было бы жалко♪',
      );
      await maru.say_and_wait(`Бегать под дождём тоже приятно♪`);
      await maru.say_and_wait(`Такой дождь — почти как утреннее купание.`);
      await maru.say_and_wait('Хотя сейчас правильнее сказать «вечернее»…?');
      await maru.say_and_wait('Тело ещё горячее-прегорячее.');
      await maru.say_and_wait(
        `Может, сейчас как раз я могу себя показать? ${callname} а ты как думаешь?`,
      );
      era.printButton('「Хорошо, тогда бежим.»', 1);
      era.printButton('「Лучше пока не бегать!»', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Вот так! Сегодня пробегу всю ночь. Хо-хо, небо тоже будто радуется.`,
        );
        await maru.say_and_wait(`Тогда в путь — навстречу миру ветра.`);
        await era.printAndWait(
          'Так дополнительная тренировка и продолжалась под дождём.',
        );
      } else {
        await maru.say_and_wait('Ара, какая жалость.');
        await maru.say_and_wait('Редкий же шанс…!');
        await maru.say_and_wait(
          'Но ничего не поделаешь. Беречь силы тоже важно…!',
        );
        await maru.say_and_wait(
          'Да и если тренер простудится — вот будет морока.',
        );
        await maru.say_and_wait(
          'Торговаться, конечно, нехорошо, но прокатись со мной под дождём — только мы вдвоём♪',
        );
        era.println();
        await era.printAndWait(
          `Поездка под дождём вымотала вас обоих, но ${maru.name} явно наслаждалась.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = 'Береги себя!';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`Н-н, кажется, ногу подвернула`);
      await era.printAndWait(
        `${maru.name}На предыдущей тренировке неосторожно подвернула лодыжку`,
      );
      await maru.say_and_wait(
        `Ничего страшного♪ Такая мелочь заживёт в два счёта.`,
      );
      era.println();
      era.printButton('「Даже мелкую травму надо как следует отлечить!»', 1);
      era.printButton('「В этом и молодость — возвращаемся к тренировке!»', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Ok♪ ${callname} Так обо мне печёшься — значит, я тебе небезразлична?`,
        );
        await maru.say_and_wait(
          `Но травмироваться совсем не в стиле ${
            maru.elder_sibling_sex_title
          }, так ещё и Спе ${maru.couple_title}……`,
        );
        era.printButton('「Нет, ничего подобного!»', 1);
        await era.input();
        await maru.say_and_wait(
          `М-м… верно, ${
            maru.elder_sibling_sex_title
          } я уже как следует раскаялась, после хорошего отдыха обязательно снова покажу ${
            maru.elder_sibling_sex_title
          } стиль!`,
        );
        await era.printAndWait(`${maru.name}Послушно отдыхала в медпункте`);
      } else if (fail_again) {
        await maru.say_and_wait(`Ара, ${callname} ну и речь у тебя♪`);
        await maru.say_and_wait('Можешь ещё меня похвалить.');
        era.printButton(
          `「${
            maru.name
          }, прекрасная и сильная скаковая ${maru.uma_sex_title}, крутая и яркая, как алое пламя, ${
            maru.elder_sibling_sex_title
          }!»`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          'Ара, от таких слов даже неловко♪ Ну, с отдыхом почти покончено — возвращаемся к тренировке!',
        );
        era.printButton('「Вот этот настрой!»', 1);
        await era.input();
        await maru.say_and_wait('Больно!');
        await era.printAndWait(
          'На тренировке рана снова обострилась, пришлось вернуться в палату.',
        );
      } else {
        await maru.say_and_wait('Раз, два, три, четыре — легко♪');
        await maru.say_and_wait(
          'Пять, шесть, семь, восемь — вообще никаких проблем♪',
        );
        await maru.say_and_wait(`${you.name}, как я прыгаю?`);

        era.printButton('「…Так сияешь!»', 1);
        await era.input();
        await maru.say_and_wait(
          'Хо-хо♪ Так и покажу младшим этот крутой и яркий стиль!',
        );

        era.printButton(`「${maru.name}, ${maru.name}!」`, 1);
        await era.input();
        await era.printAndWait(
          `Чудесным образом ${maru.name} восстановила форму и снова вернулась к тренировкам.`,
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
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`Нх, больно`);
      await era.printAndWait(
        `${maru.name}На предыдущей тренировке неосторожно подвернула лодыжку`,
      );
      await maru.say_and_wait(`Даже мне уже предел`);
      await maru.say_and_wait(
        'Но до следующей скачки уже недалеко… надо скорее взять себя в руки!',
      );
      era.println();

      era.printButton('「Не спеши, лечись спокойно.»', 1);
      era.printButton('「Иногда нужно и крутое средство!»', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Вот как? А мне казалось, немного отдохну — и уже на ногах!`,
        );
        era.printButton('「Если рана обострится, будет плохо.»', 1);
        await era.input();
        await maru.say_and_wait(
          '…Поняла. Раз уж лечиться — так до полного восстановления!',
        );
        await maru.say_and_wait(
          'Тогда, чтобы взбодриться, схожу за итальянским сыром.',
        );
        era.printButton('「А, смотри на ногу, не травмируйся снова.»', 1);
        await era.input();
        await maru.say_and_wait(
          `Ара, ${callname}, какая нежность. Если бы это была не ${
            maru.elder_sibling_sex_title
          } я, а младшие — их бы мигом покорили~`,
        );

        era.printButton(`「${maru.name} опять шутишь.»`, 1);
        await era.input();
        await maru.say_and_wait('Хм-хм♪');
        await era.printAndWait(
          `Пока ${maru.name} полностью не восстановится, тренировки придётся на время отложить`,
        );
      } else {
        await era.printAndWait(
          `До скачки уже близко, ${maru.name} снова получила тяжёлую травму, и если хочется поскорее встать, остаётся только пойти на крайние меры`,
        );
        await era.printAndWait(
          `${you.name}  Подумав ещё раз, решаешь дать более крутое средство`,
        );
        era.printButton(
          '「Если держать настроение бодрым, рана заживёт чуть быстрее, так что выдюжи силой воли!」',
          1,
        );
        await era.input();
        await maru.say_and_wait(
          'Как я и думала: если нужно расслабиться — в центр, за самой свежей модой',
        );
        if (fail_again) {
          await era.printAndWait(
            `Итак, ${you.name} по модным журналам выбирает трендовую одежду сезона и ведёт ${maru.name} в универмаг.`,
          );
          await era.printAndWait(
            `Хоть и будний день, народу всё равно полно, ${you.name} осторожничает на каждом шагу, чтобы никто случайно не задел ${maru.name} травмированную ногу.`,
          );
          await era.printAndWait(`В универмаге у вас обоих рябит в глазах.`);
          await maru.say_and_wait(
            `Э? О нынешних трендах я даже не слышала, неужели ${
              maru.elder_sibling_sex_title
            } я уже out?`,
          );
          era.printButton(
            `「Под ударом авангардной моды у ${maru.name} портится настроение, и эффект восстановления сильно падает」`,
            1,
          );
          await era.input();
        } else {
          await era.printAndWait(
            `${you.name}  Под началом ${maru.name} петляешь за рулём Та и приезжаешь в CD-магазин с налётом старины.`,
          );
          await maru.say_and_wait(
            'Хоть снаружи магазин выглядит скромно, музыка внутри вполне себе в тренде♪',
          );
          await era.printAndWait(
            `${you.name}Наобум берёт диск и не уверена, не ту ли песню без конца слушала в старшей школе.`,
          );
          await maru.say_and_wait(
            'Хо-хо~ и правда классная песня♪ Так и тянет пуститься в пляс.',
          );
          era.printButton(
            `(Лишь бы ${maru.sex} была рада — тоже неплохо, да?)`,
            1,
          );
          await era.input();
          await era.printAndWait(
            `Не то от музыки, у ${maru.name} рана тоже заживает быстрее.`,
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = 'Начало скачки';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`В подземном тоннеле`);
      await maru.say_and_wait(
        `И сегодняшней скачкой пусть младшие увидят мою крутую спину`,
      );
      era.printButton(`「${maru.name} удачи」`, 1);
      await era.input();
      await maru.say_and_wait(`Хо-хо, спасибо, ${callname} !`);
      await maru.say_and_wait(
        `Смотри, не влюбись в ${maru.elder_sibling_sex_title} со спины~`,
      );
      await era.printAndWait(
        `${you.name}  Провожаешь взглядом ${maru.name} на дорожку`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'Победа в скачках';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      await maru.say_and_wait(
        `victory!victory! Победа, тренер♪ Первое место и правда другое, внутри всё кипит, никак не унять`,
      );
      await maru.say_and_wait(`Тренер, ты видел(а), как я бежала?`);
      era.printButton(`「Ты лучшая!」`, 1);
      era.printButton(`「Ещё есть куда расти!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `Да-да♪ Сегодня пойдём в кафе: лимонный чай и тирамису.`,
        );
        await maru.say_and_wait(
          `Тренер ведь тоже пойдёт с нами, правда? Хо-хо♪`,
        );
      } else {
        await maru.say_and_wait(`Ого, тренер, какой прямой!`);
        await maru.say_and_wait(`Но и мне нельзя вот так почивать на лаврах!`);
        await era.printAndWait(
          ` ${maru.name}  Залпом ${maru.sex} осушает её любимый напиток с кокосовым желе!`,
        );
        await maru.say_and_wait(
          `— Пха! Как освежило! Ладно, дальше тоже выложусь на полную!`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'Призовое место';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      await maru.say_and_wait(
        `Хотела взять первое для младших, что пришли на скачку, но мне ещё не хватает силы…`,
      );
      era.printButton(`「Ты пробежала совсем не плохо!」`, 1);
      era.printButton(`「В следующий раз бери первое!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`Хо-хо, тренер меня утешает, да? Спасибо.`);
        await maru.say_and_wait(
          `Впрочем… ох, ещё и заставила тренера за меня волноваться, ${maru.elder_sibling_sex_title} я такая бесполезная.`,
        );
        await maru.say_and_wait(
          'Ладно, в следующий раз обязательно покажу всем стать суперкара и вчистую возьму первое!',
        );
      } else {
        await maru.say_and_wait('Да, вечно вздыхать — это не в моём духе.');
        await maru.say_and_wait(
          `В следующий раз младшие обязательно увидят, ${maru.elder_sibling_sex_title} как я выкладываюсь по-настоящему!`,
        );
        await maru.say_and_wait('Давай прокатимся к морю вместе с Та-тян♪');
        await era.printAndWait(
          `Потом ты вместе с ${maru.name} катаешься к морю, пока ${maru.sex} не накатается всласть, и только тогда едете домой.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = 'Поражение в скачках';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      await maru.say_and_wait('Горько…');
      await maru.say_and_wait(
        `Прости… тренер. Не смогла показать тебе, какая я крутая…`,
      );
      era.printButton(`「Жду тебя в следующий раз!」`, 1);
      era.printButton(`「Вешать нос бесполезно!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`…У тебя такое доброе сердце, тренер.`);
        await maru.say_and_wait(
          `…Ладно, тогда надо скорее вернуться к тренировкам! В следующий раз обязательно покажу тебе свою крутую сторону!`,
        );
      } else {
        await maru.say_and_wait(
          '…И то правда. От понурости быстрее не побегу.',
        );
        await maru.say_and_wait(
          'Так что дальше раскисать нельзя. Буду как Та-тян: хоть помялась — сразу в ремонт!',
        );
        await maru.say_and_wait(
          'Ладно! На этом мой ремонт окончен. Надо скорее заправиться и как следует рвануть!',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = 'Пролог · появление Марузенски';
    // 从丸善斯基登场开始 风数值为1 最终结局与风数值 例：TE=20 GE = 17-19 其余均为NE
    // 尽管竞争将造成极大的损耗，但你不想去看看那里的风景吗？
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`На лужайке`);
      await maru.say_and_wait(`${callname}, а дальше куда вместе прогуляемся?`);
      await era.printAndWait(
        `Рядом с ${you.name} садится ${maru.uma_sex_title} и заговаривает с ${you.name} .`,
      );
      era.printButton(
        '「Прости, мне ещё вернуться в кабинет и разобрать бумаги.」',
        1,
      );
      await era.input();
      await era.printAndWait(`Небо окрашено закатом в золото.`);
      await maru.say_and_wait(
        `Сдаюсь: вижу, как ${callname} так старается, ${maru.elder_sibling_sex_title} я тоже хочу пробежать ещё круг♪`,
      );
      await era.printAndWait(
        `Вплотную к ${you.name}  сидевшая ${maru.uma_sex_title} попив воды, встаёт, и волнистые длинные волосы под последними лучами заката пылают, как пламя.`,
      );
      await you.say_and_wait(`Не переусердствуй.`);
      await maru.say_and_wait(`Поняла♪`);
      await era.printAndWait(
        `Получив у ${you.name}  разрешение, ${maru.sex}  снова возвращается к стартовой черте.`,
      );
      await era.printAndWait(
        `С выстрелом стартового пистолета пламя снова вспыхивает на травяной дорожке.`,
      );
      await era.printAndWait(
        `Хозяйка пламени тоже озаряется искренней улыбкой — от сильного ветра, что бьёт в лицо на бегу.`,
      );
      era.drawLine();
      await era.printAndWait(
        `Вернувшись в кабинет тренера, ${you.name}, пока не погасла последняя полоска света, ставит принесённую папку на прежнее место.`,
      );
      await era.printAndWait(
        `Сначала собираешься разобрать у ${maru.name} данные забега, ${you.name}, но сейчас тебя отвлекает письмо.`,
      );
      await you.say_and_wait(`Что это?`, true);
      await era.printAndWait(
        `Конверт, совершенно чужой этому месту, полный юношеского духа.`,
      );
      await era.printAndWait(
        `Почтовый индекс не указан, адрес — твой кабинет, получатель аккуратно вписан: ${you.actual_name}, только в самом конце — отправитель.`,
      );
      await you.say_and_wait(`${maru.name}?`, true);
      await era.printAndWait(`С головой, полной вопросов, вскрываешь конверт.`);
      await maru.say_and_wait(
        `Та-дам! Раз уж читаешь это письмо, ${callname}, не кажется, что так круто?`,
      );
      await maru.say_and_wait(
        `Сначала хотела внезапно кинуть смс, когда ты как раз вернёшься в кабинет тренера, но кнопки никак не поддаются, я уже вся извелась ><`,
      );
      await maru.say_and_wait(
        `В итоге пришлось сдаться и написать письмо… но! ${
          maru.sex_code !== 1 ? ' красотка' : 'красавчик'
        } Я вдруг поняла: передавать чувства письмами вроде тоже входит в моду! Ну конечно, ${
          maru.sex_code !== 1 ? ' красотка' : 'красавчик'
        }, я всегда была лидером тренда, сымнида♪`,
      );
      await maru.say_and_wait(
        `Вот так, с наскока, и написала, но что, собственно, лучше сделать?`,
      );
      await maru.say_and_wait(
        `— Хм, если думать как в манге, крыша вроде отличный вариант?`,
      );
      await maru.say_and_wait(
        `Так что сегодня в 7:30 вечера встречаемся на крыше! Ну что, ${callname}, до встречи!`,
      );
      await era.printAndWait(
        `Достаёшь письмо из конверта, разворачиваешь, ${you.name} и так, стоя, читает.`,
      );
      await you.say_and_wait(`Как модно.`, true);
      await you.say_and_wait(
        `Всё-таки ближайшие три года будем бок о бок с утра до ночи. Когда встретимся, надо узнать друг друга получше.`,
        true,
      );
      era.printButton(`「К тому же」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `Случайная ${maru.uma_sex_title}`,
        ` Э? Марузен ${maru.sex_code !== 1 ? ' -семпай' : '-семпай'} и правда согласилась взять такого человека тренером на три года?`,
      );
      await you.say_as_passer_by_and_wait(
        `Случайный тренер`,
        `По сути, ${you.actual_name} всего лишь тот, на кого эта чудовищная ${maru.name} положила глаз по капризу — везунчик и только. Вот уж кому повезло.`,
      );
      await you.say_and_wait(
        `Везунчик, на которого чудовище по капризу положила глаз?`,
      );
      await era.printAndWait(
        `Как они и сказали, среди тренеров, что пытались заполучить ${maru.name} в подопечные, хватает элиты с отличными результатами за карьеру.`,
      );
      await era.printAndWait(
        `По сравнению с ними даже при самом оптимистичном взгляде у тебя разрыв в опыте. То, что ${maru.name} положила на тебя глаз, — просто к месту задела струну.`,
      );
      await era.printAndWait(`А в следующий раз тебе ещё так повезёт?`);
      await era.printAndWait(
        `Заставляешь себя снова переключить внимание на работу.`,
      );
      await era.printAndWait(
        `Бросаешь взгляд на телефон: на экране блокировки 6:05.`,
      );
      await you.say_and_wait(`Дальше надо стараться ещё больше.`);
      await era.printAndWait(
        `Убрав конверт в ящик, ${you.actual_name} снова сбегаешь в работу.`,
      );
      era.drawLine();
      await era.printAndWait(`Пора уже выходить.`);
      await era.printAndWait(
        `От кабинета тренера до крыши учебного корпуса — минут десять. Из вежливости выйти минут на десять раньше — в самый раз.`,
      );
      await era.printAndWait(`А на экране блокировки сейчас ровно 7:00.`);
      era.printButton(`「В путь!」`, 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `Ночной ветер мягче дневного; если прислушаться, в нос забирается тонкая сладкая нотка.`,
      );
      await you.say_and_wait(`Похоже, завтра тоже будет хорошая погода.`);
      await maru.say_and_wait(
        `Да, хотелось бы, чтобы каждый день был таким же ясным, как сегодня.`,
      );
      await you.say_and_wait(`Да. Э?`);
      await era.printAndWait(
        `Только собравшись поддакнуть, понимаешь: знакомый голос донёсся сзади.`,
      );
      await era.printAndWait(
        `Чтобы заговорить с ней, спешишь обернуться — но сзади никого — ${maru.sex}.`,
      );
      await maru.say_and_wait(`Так вот ты какой, ${callname} какой же милый.`);
      await era.printAndWait(`И вдруг тебя обнимают.`);
      await you.say_and_wait(`!!!`);
      await era.printAndWait(`Ночь под шалостями ветерка ещё тише.`);
      await era.printAndWait(
        `Тебя обняли сзади, но дальше не заходят — так и стоят на месте.`,
      );
      await maru.say_and_wait(
        `Прости, просто увидела ${callname} и не сдержалась.`,
      );
      await era.printAndWait(
        `Руки, что сзади легко обнимали ${you.name}, сходят с талии.`,
      );
      await era.printAndWait(
        `Вырвавшись, ${you.name} снова оборачивается и смотрит на эту ${maru.teen_sex_title}.`,
      );
      await era.printAndWait(
        `Не огненно-красный силуэт на травяном поле — в лунном свете молча стоит ${maru.name} и, глядя на ${you.name}, улыбается.`,
      );
      era.printButton(`「…… ${maru.name} 」`, 1);
      await era.input();
      await era.printAndWait(`Хочется заговорить, но не знаешь, что сказать.`);
      await era.printAndWait(
        `Остаётся лишь молча смотреть друг другу в глаза.`,
      );
      await era.printAndWait(`…Почему-то страшно.`);
      await era.printAndWait(`Как танцевать вместе с пламенем?`);
      await era.printAndWait(
        `Как сделать так, чтобы ${maru.name} смотрела на меня?`,
      );
      era.printButton(`「……」`, 1);
      await era.input();
      await maru.say_and_wait(
        `^_^ На самом деле не нужно так нервничать. Говори как обычно.`,
      );
      await era.printAndWait(
        `От твоей чрезмерной напряжённости ${maru.sex} рассмеялась.`,
      );
      await maru.say_and_wait(
        `Хотя заботиться о чужих чувствах — это хорошо, но если свои так и не высказать честно...`,
      );
      await maru.say_and_wait(
        `Даже захочешь поговорить — выйдет с трудом. Так что правильный настрой: не парься ни о чём!`,
      );
      await era.printAndWait(`Кажется, она уловила то, что у тебя на сердце.`);
      await you.say_and_wait(
        `И правда: там стоит твоя напарница на ближайшие три года — ${maru.actual_name_with_title}.`,
      );
      await era.printAndWait(
        `— Эти ясные бирюзовые глаза придают смелости, и ты говоришь, не задумываясь.`,
      );
      await maru.say_and_wait(
        `Вот так-то лучше. Именно ${maru.sex_code !== 1 ? ' красотка' : 'красавчик'} я.`,
      );
      await you.say_and_wait(`${maru.name} — глаза такие красивые.`);
      await you.say_and_wait(
        `Наверняка немало тех, кого эти глаза заворожили.`,
      );
      await you.say_and_wait(
        `Да и тех, кто влюбляется в ${maru.name} за то, что вот так подбадривает других, тоже немало.`,
      );
      await maru.say_and_wait(
        `Хм — да ты речистее, чем я думала. Вот так, как семпай, наставлять растерянных ${maru.uma_sex_title} и людей — разве не самое обычное дело♪`,
      );
      await maru.say_and_wait(
        `Тем более это ты, ${callname}, мой будущий напарник.`,
      );
      await maru.say_and_wait(
        `Мм — и дальше надо наслаждаться в том же ритме.`,
      );
      await maru.say_and_wait(
        `Тогда ещё раз: ${maru.name}, как напарница и подопечная ${maru.uma_sex_title} на ближайшие три года, прошу любить и жаловать♪`,
      );
      era.printButton(`「Прошу любить и жаловать, ${maru.name} 」`, 1);
      await era.input();
      await era.printAndWait(
        `В полной мере ощутив нежную кожу и скрытую в ней силу, ${you.actual_name} крепко сжимаешь эти руки.`,
      );
      await era.printAndWait(
        `Первая официальная встреча ${you.name} и ${maru.name} после заключения контракта на этом закончилась.`,
      );
      //风属性为1
    };
    f.title = title;
    return f;
  })(),
  ws_5: (() => {
    const title = (maru) => `Подарок от ${maru.elder_sibling_sex_title}.`;
    /**
     * 丸善斯基邀请玩家开车兜风
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Кабинет тренера`);
      era.println();
      await era.printAndWait(`Тук-тук-тук`);
      await maru.say_and_wait(`Халоу, ${callname}!`);
      await era.printAndWait(
        `С горой шоколада в руках ${maru.name} заходит к ${you.name} в кабинет тренера.`,
      );
      era.printButton(`「Нужна помощь?»`, 1);
      await era.input();
      await era.printAndWait(
        `Аж ${you.name} сомневается, не показалось ли: ${maru.name} входит в кабинет тренера с горой шоколада в руках.`,
      );
      await maru.say_and_wait(
        `Младшие горячее, чем я думала, — ну прямо не пережить.`,
      );
      await maru.say_and_wait(
        `Говорят спасибо Марузен-семпай за помощь на каждый день и впихивают весь этот шоколад — а, сюда можно?`,
      );
      era.printButton(`「Младшие очень любят ${you.name} 」`, 1);
      await era.input();
      await era.printAndWait(
        `Ты сдвигаешь сладости и мангу со столика на пол и забираешь часть шоколада из рук ${maru.name}.`,
      );
      await maru.say_and_wait(`Сдаюсь — ожидания младших такие тяжёлые.`);
      await era.printAndWait(
        `Выбравшись из-под грозящей рухнуть шоколадной башни, ${maru.name} садится на диван с чуть растерянной улыбкой.`,
      );
      await maru.say_and_wait(`${callname},3q♪`);
      await you.say_and_wait(
        `В качестве награды расскажешь мне ещё про милых младших?`,
      );
      await era.printAndWait(
        `${you.name} тоже садишься на диван и смотришь прямо в глаза ${maru.name}.`,
      );
      await maru.say_and_wait(
        `Мм — раз ты просишь, ${callname}. А, кстати, в прошлый раз была одна очень подавленная девчонка.`,
      );
      await maru.say_and_wait(
        `— Хотя всего лишь проиграла отборочные и в слезах прибежала ко мне излить душу. Я внимательно выслушала её рассказ — ${
          maru.sex
        } и просто поделилась тем, что поняла сама на бегу, но ${
          maru.sex
        } слушала очень внимательно.`,
      );
      await maru.say_and_wait(
        `По тонким местам даже высказывала свои мысли, исписала целую страницу заметок — и благодаря этому я тоже немало взяла.`,
      );
      await maru.say_and_wait(
        `Перед уходом торжественно поблагодарила, и потом, слышала, благополучно заключила контракт с тренером♪`,
      );
      await maru.say_and_wait(`Каждый раз, когда вспоминаю, так это люблю⭐`);
      await you.say_and_wait(`И правда, отличный опыт.`);
      await maru.say_and_wait(`^_^ Я тоже так думаю`);
      await maru.say_and_wait(`Кстати, ${callname}, шоколад тебе дарили?`);
      await era.printAndWait(
        `${maru.name}Она бросает взгляд на ${you.name} письменный стол.`,
      );
      await you.say_and_wait(
        `К сожалению, когда я ещё был(а) в команде, ${maru.uma_sex_title} дарили мне шоколад, но стоило уйти и работать независимым тренером — даже шоколад из вежливости не видать.`,
      );
      await maru.say_and_wait(`Вот так вот, жаль.`);
      await maru.say_and_wait(`…М-м`);
      await maru.say_and_wait(`Раз так, пойдём вместе выбирать шоколад♪`);
      await era.printAndWait(
        ` словно внезапно осенила отличная идея. ${maru.name}, ты резко вскидываешь уши и сияющими глазами смотришь на ${you.name}.`,
      );
      await maru.say_and_wait(`Пока глазом моргнёшь — уже выходим!`);
      await you.say_and_wait(`Лучше не надо.`, true);
      await era.printAndWait(
        ` хоть и хочется так сказать, но, глядя, как ${maru.name} так серьёзно прикидываешь магазины. ${you.name} Подумав, ты всё-таки закрывает рот.`,
      );
      await you.say_and_wait(
        `Если просто так выйти — вроде ничего страшного.`,
        true,
      );
      era.drawLine();
      await maru.say_and_wait(`Сегодня ты тоже в ударе. Та!`);
      era.printButton(`「Та? Очень приятно познакомиться с ${you.name}!」`, 1);
      await era.input();
      await maru.say_and_wait(`, тогда ${callname} садись на пассажирское.`);
      await maru.say_and_wait(
        `, Та тоже будет рада встретить ${callname} такого нового друга.`,
      );
      await you.say_and_wait(`Как-то волнительно.`, true);
      await maru.say_and_wait(`Хе-хе, похоже, Та тоже очень рада♪`);
      await maru.say_and_wait("Готов(а)? Let's go!");
      await you.say_and_wait(`Э? Так это и есть спортка-ка-ка-ар, а-а-а-а-а.`);
      era.drawLine();
      await maru.say_and_wait(
        `, фух— после такого отрыва впервые за долгое время уже слегка не вывожу! ${callname}, ты тоже это чувствуешь…? ${
          callname
        }?`,
      );
      era.printButton(
        '「Так здесь не Эдем? Трём богиням очень приятно познакомиться」',
        1,
      );
      await era.input();
      await era.printAndWait(
        ` начисто теряешь даже смелость ответить и, поджав хвост, драпаешь — та ещё ${you.name} точь-в-точь как ${maru.uma_sex_title} морковка, которую гонят.`,
      );
      await maru.say_and_wait(
        `, м-м, не слишком ли крутые ощущения? ${callname} У тебя вид человека, которому жить надоело.`,
      );
      await era.printAndWait(
        `, оставленная на месте, ${maru.name} одна бормочет себе под нос.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_24: (() => {
    const title = 'Обычный день после тренировки';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(
        `На сегодня тренировка на этом, спасибо за работу.`,
      );
      await maru.say_and_wait(`${callname}И тебе спасибо за работу.`);
      await era.printAndWait(
        `${maru.name} берёшь из рук ${you.name} полотенце, слегка вытирает пот со лба и протягивает ${you.name}.`,
      );
      await you.say_and_wait(
        `Если и дальше идти в таком темпе, на Asahi Hai тоже будут шансы на победу.`,
      );
      await maru.say_and_wait(
        `Интересно, какое зрелище будет на скачке уровня G1? Как жду~`,
      );
      await you.say_and_wait(`${maru.name}Тебе весело бежать?`);
      await era.printAndWait(
        ` ещё раз отжимаешь полотенце, достаёшь из рюкзака рядом запасное и тщательно вытираешь ${maru.uma_sex_title} длинные волосы, растрёпанные после бега.`,
      );
      await maru.say_and_wait(
        `Если растрёпанные волосы не закрепить заколкой, в беге они бьют по глазам — ещё и больно. Слегка заигралась, и вот.`,
      );
      await maru.say_and_wait(
        `, всё-таки лучше сменить причёску и освежить настроение, как ${callname} думаешь?`,
      );
      await you.say_and_wait(`Я тоже так думаю.`);
      await you.say_and_wait(
        `Если собрать волосы в длинный хвост и крепко закрепить, бегу это не помешает.`,
      );
      await you.say_and_wait(
        `, к тому же так все увидят ${maru.name} другую сторону — тоже неплохой выбор.`,
      );
      await maru.say_and_wait(
        `, м-м— как же всё-таки лучше? Хотя ${callname} совет тоже неплох, но `,
      );
      await maru.say_and_wait(`Ай, больно.`);
      await you.say_and_wait(`Прости, тут волосы спутались.`);
      await maru.say_and_wait(`3q.`);
      await maru.say_and_wait(
        `Сегодня давай вместе с Та насладимся морским ветром и сменим настроение♪`,
      );
      await maru.say_and_wait(`${callname}, проводишь меня до ворот?`);
      era.printButton(`「Пойдём вместе」`, 1);
      await era.input();
      await era.printAndWait(
        `\n${you.name} и ты ${maru.name} вместе идёте по сумеречной тропинке.`,
      );
      await you.say_and_wait(
        `, кстати ${maru.name}, одной жить в квартире и ходить на учёбу — не слишком ли неудобно.`,
      );
      await era.printAndWait(
        ` в отличие от других, живущих в общежитии, ${maru.uma_sex_title} — ${maru.name} всегда живёт в квартире за пределами академии.`,
      );
      await era.printAndWait(
        `, из любопытства к этой особенности, у ${you.name} ты обращается за ${maru.name} ответом.`,
      );
      await maru.say_and_wait(
        `По сравнению с комендантским часом в академии я за её пределами, пожалуй, ещё свободнее.`,
      );
      await maru.say_and_wait(
        `Впрочем, каждый день вставать раньше других студентов — тоже часть цены этой свободы.`,
      );
      await you.say_and_wait(
        `, при случае так хочется пожить у ${maru.name} в квартире какое-то время… Интересно, ${maru.name} как тебе такое?`,
      );
      await maru.say_and_wait(
        `, чего? Если это ты ${callname}, глядишь, будет весьма занятно.`,
      );
      await maru.say_and_wait(
        `${callname}Не забудь свои слова. Отыграешь назад — из игры так просто не выходят, всё равно придётся ответить.`,
      );
      era.printButton(`「Само собой.」`, 1);
      await era.input();
      await maru.say_and_wait(`Хо-хо~ Я тоже очень жду.`);
      await era.printAndWait(
        `Пока болтаете, незаметно оказываетесь у ворот академии.`,
      );
      await maru.say_and_wait(
        `, время с тобой ${callname} вместе всегда такое короткое.`,
      );
      await you.say_and_wait(
        ` именно потому, что коротко, это счастливое время и бережёшь вдвойне. ${maru.name} Для тебя это тоже неплохой спомен, правда?`,
      );
      await maru.say_and_wait(`Приятное вышло воспоминание, до завтра, 3166~`);
      await era.printAndWait(
        `Под рёв заведённого двигателя, ${maru.name} скрывается из виду за край зрения.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'Перед дебютной скачкой · Начало всего';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, callname) => {
      await era.printAndWait(`В подземном тоннеле`);
      await maru.say_and_wait(
        `Немного ещё волнуюсь, но сейчас уже совсем расслабилась.`,
      );
      era.printButton(
        `「Так и покажу кохаям ${maru.name} с самой крутой стороны!」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `Ага, ${callname}, тоже хорошенько смотри, какая ${maru.name} крутая.`,
      );
      await maru.say_and_wait(
        `И мало того что за спиной меня всё время поддерживают кохаи — ещё и ветер, что на всём скаку рвёт пределы!`,
      );
      await maru.say_and_wait(`И от этих слов тело уже само заводится!`);
      await maru.say_and_wait(
        `Скоро моя очередь, так что, ${callname}, увидимся!`,
      );
      era.printButton(`「Желаю боевой удачи」`, 1);
      await era.input();
      await era.printAndWait(
        `Кивнув, ${maru.name} направляется на скаковое поле.`,
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'После дебютной скачки · Ветер в путь';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Хоть это всего лишь дебютная скачка в год новичка, но люди, пришедшие посмотреть, как ${maru.name}  впервые выходит на дорожку, забили весь ипподром до отказа.`,
      );
      await you.say_and_wait(
        `Если подумать, популярность у ${maru.name}  и впрямь страшная.`,
      );
      await era.printAndWait(
        `Благодаря тому, как она изо дня в день помогает кохаям, большую часть пришедших как раз и составляют те, кому она помогала.`,
      );
      await era.printAndWait(
        `Сидя в гуще лошадиной толпы, ${you.name} чувствует, как давит ощущение, что тебе здесь не место.`,
      );
      await you.say_and_wait(
        `Пока ладони не взмокли, лучше найти местечко посвободнее и смотреть оттуда.`,
      );
      await you.say_as_passer_by_and_wait(
        `Комментатор`,
        `А далее — звезда, на которую все смотрят, с подавляющей силой и популярностью ${maru.name}, и кто знает, какую красоту она нам сейчас покажет!`,
      );
      await you.say_and_wait(`Плохо дело.`);
      await era.printAndWait(
        `Под звонкую раскачку комментатора, будто капля воды в кипящее масло, крики едва не сносят ипподром.`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} A`,
        `Марузен- ${maru.sex_code !== 1 ? ' семпай' : 'семпай'}, давай!`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} B`,
        `Дайте ещё раз взглянуть на крутой бег семпая!`,
      );
      await era.printAndWait(`Ооооо!`);
      await era.printAndWait(`Ликование зрителей гремит по всему ипподрому.`);
      await you.say_and_wait(
        `Все такие возбуждённые — и правда из-за ${maru.name}?`,
      );
      await era.printAndWait(
        `Вместе с толпой ${you.name} сквозь щели между лошадиными ушами ищет силуэт по имени ${maru.name}.`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `А, прости.`);
      await era.printAndWait(
        `Хоть задели нечаянно, удар такой, что ты едва не вскрикиваешь от боли.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Прости огромно… не рассчитала силу, не задело?`,
      );
      await you.say_and_wait(`Нет, всё в порядке.`);
      await era.printAndWait(
        `Раз это вышло нечаянно, нет смысла за это цепляться, и ${you.name} так и прощает.`,
      );
      await you.say_and_wait(`Ты пришла смотреть, как ${maru.name} бежит?`);
      await era.printAndWait(
        `Едва слова слетели с языка — и уже горько жалеешь о своём вопросе.`,
      );
      await you.say_and_wait(`Ты пришла смотреть, как ${maru.name} бежит?`);
      await era.printAndWait(
        `Ну это же и так ясно: не смотреть на ${maru.name}, так зачем вообще явились? Что, глядеть, как морковка на ножках бегает по полю?`,
      );
      await era.printAndWait(
        `Хотя морковку на ножках увидеть тоже было бы занятно.`,
      );
      await you.say_and_wait(
        `Вы тоже пришли смотреть, как морковка на ножках бегает по земле?`,
      );
      await era.printAndWait(
        `Ой. Нечаянно смешались мысли в голове и то, что нужно было сказать.`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `Пф.`);
      await you.say_and_wait(
        `Как и следовало ожидать, тебя подняли на смех.`,
        true,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Этот тренер ${you.adult_sex_title} ещё занятнее, чем я думала.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Немного понятно, почему Марузен-семпай выбрала тебя.`,
      );
      await you.say_and_wait(`Э?`);
      await you.say_and_wait(`Меня уже так знают?`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Да что там: на следующий день после вашего контракта с Марузен-семпай весь Трейсен уже знал.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Всем было любопытно, что за человек такой тренер у ${maru.name}.`,
      );
      await era.printAndWait(`Недаром по дороге столько любопытных взглядов.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Как тренер Марузен-семпай ${maru.adult_sex_title}, удачи на дальнейшем пути! Я тоже всегда буду поддерживать тебя и Марузен-семпай!`,
      );
      await era.printAndWait(
        `Эта ${maru.uma_sex_title} выглядит очень довольной.`,
      );
      await era.printAndWait(
        `Пока все снова смотрят на ${maru.name}, ${you.name} украдкой уходит со своего места.`,
      );
      era.drawLine();
      await era.printAndWait(
        `По сравнению с востоком, откуда в лицо видно, как бежит ${maru.name}, западные места, откуда виден лишь затылок, выглядят куда пустее.`,
      );
      await era.printAndWait(
        `Не говоря уже о том, что немало ${maru.uma_sex_title} предпочтут стоять в толпе, чем сидеть на своих местах.`,
      );
      await era.printAndWait(
        `Так что ${maru.uma_sex_title} — такие простодушные создания.`,
      );
      await era.printAndWait(
        `Но именно поэтому мне и нравятся такие, как ${maru.sex}.`,
      );
      await era.printAndWait(
        `На трибунах вспыхнул рёв: празднуя, что ${maru.name} выиграла первый заезд, ${maru.uma_sex_title} ликующе визжат.`,
      );
      era.printButton(`「Пора уже идти встречать ${maru.name} 」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname} ♪, ты же видел(а) моё блестящее выступление только что?`,
      );
      era.printButton(`「Даже круче, чем я себе представлял(а)!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `Ага, тогда я пойду готовиться к сцене победителей, ${callname} , хорошенько смотри на ${maru.elder_sibling_sex_title} меня⭐`,
      );
      await era.printAndWait(
        `На сцене победителей ${maru.name} сияла ярче обычного: будто найденный самородок наконец явил свой истинный блеск.`,
      );
      await era.printAndWait(
        `Впрочем, разве не в этом и состоит работа тренера?`,
      );
      era.drawLine({ content: 'После сцены победителей' });
      await maru.say_and_wait(
        `Фух~ я здорово вспотела, но зато прежние танцевальные тренировки очень выручили⭐`,
      );
      era.printButton(`Недаром ${maru.elder_sibling_sex_title} -сама`, 1);
      await era.input();
      await maru.say_and_wait(
        `Ого, ${callname} сегодня ещё слаще обычного на язык: неужели с другими детьми тоже так себя ведёшь?`,
      );
      era.printButton(
        `Если уж на то пошло, только ${maru.name} у меня одна ${maru.elder_sibling_sex_title}, другим так не скажешь, правда?`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `Хо-хо-хо, слыша, как ${callname} так говорит, мне и самой всё радостнее, хм — может, сегодня вечером устроим вечеринку с Тэйо и остальными!`,
      );
      era.printButton(`「${maru.name} выглядит ещё восторженнее обычного」`, 1);
      await era.input();
      await you.say_and_wait(
        `Как пламя пронеслась по всему полю ${maru.name} — как же круто.`,
      );
      await maru.say_and_wait(
        `Слышать, как мой тренер ${callname} так говорит, и вправду спокойно на душе.`,
      );
      await maru.say_and_wait(
        `Но прежде чем хвалить дальше — какая следующая цель?`,
      );
      era.printButton(`「Как насчёт Asahi Hai?」`, 1);
      await era.input();
      await maru.say_and_wait(`Asahi Hai?`);
      await maru.say_and_wait(
        `Если получится соперничать с более сильными ${maru.uma_sex_title}, возможно, откроется ещё более прекрасный вид, ${callname}, этому ответу я ставлю полный балл.`,
      );
      await maru.say_and_wait(`Тогда вперёд — к Asahi Hai!`);
      await era.printAndWait(
        `${you.name} и ${maru.name} определили следующую цель.`,
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_lose: (() => {
    const title = 'После дебютной скачки · снова за работу';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await maru.say_and_wait(`Ах, проиграла…`);
      await era.printAndWait(
        `То ли случайность, то ли недотренированность, но ${maru.name} проиграла дебютную скачку.`,
      );
      era.printButton(`Пойдём, устроим разбор полётов.`, 1);
      await era.input();
      await maru.say_and_wait(`Ага! В следующий раз я точно побежу!`);
      await era.printAndWait(
        `${you.name} и ${maru.name} определили следующую цель.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_30: (() => {
    const title = 'Дети трёх богинь';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} emperor 皇帝（鲁铎象征）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = 'Император';
      await era.printAndWait(`Внутренний двор, у статуй трёх богинь`);
      await era.printAndWait(
        `Вдали от поля и учебного корпуса, что шумят целый день, это святыня, куда ${maru.uma_sex_title} вверяют сердца.`,
      );
      await era.printAndWait(
        `Здесь почитают статуи трёх богинь: Darley Arabian, Godolphin Arabian и Byerley Arabian.`,
      );
      await era.printAndWait(
        `Чистая вода стекает из кувшинов в руках богинь и впадает в пруд.`,
      );
      await era.printAndWait(`А здесь вновь появился новый гость.`);
      await emperor.say_and_wait(`……`);
      await era.printAndWait(`Император смотрит на статуи трёх богинь.`);
      await emperor.say_and_wait(`Ещё не пришла?`, true);
      await era.printAndWait(
        `Хотя она частным образом пригласила недавно приглянувшуюся ${maru.uma_sex_title} прийти, но отношение той всё ещё уклончиво.`,
      );
      await era.printAndWait(
        `Страх перед гнётом Императора? Что ж, такая трусливая ${maru.uma_sex_title} не стоит того, чтобы доверить ей спину.`,
      );
      await era.printAndWait(`Живи свободно в Эдеме, что создали мы.`);
      await emperor.say_and_wait(`Что ж, пора уже и возвращаться`);
      await era.printAndWait(
        `Речь Императора оборвали шаги, направлявшиеся во внутренний двор.`,
      );
      era.drawLine();
      era.printButton(`「Э-э, я, кажется, не туда.»`, 1);
      await era.input();
      await era.printAndWait(
        `Не знаешь, как продолжить разговор, и теряешься; до слуха доносится лишь шум воды, что стекает из кувшинов в руках статуй богинь и брызгами бьётся о пруд.`,
      );
      await era.printAndWait(
        `К счастью, Император вовсе не обратил внимания на приход ${you.name}, а смотрит на статуи богинь.`,
      );
      era.printButton(`「Пронесло, пронесло」`, 1);
      await era.input();
      await you.say_and_wait(`Кстати говоря.`);
      await era.printAndWait(
        `Давным-давно, в детстве, когда ты в одиночку приходил(а) в святилище, будто уже переживал(а) нечто такое.`,
      );
      await era.printAndWait(
        `Смотришь на статуи трёх богинь, отсекаешь окружающие звуки и погружаешься в воспоминания.`,
      );
      await era.printAndWait(
        `Играли с друзьями в прятки: чтобы уйти от водящего, ты нарочно спрятался(ась) в глухом углу.`,
      );
      await era.printAndWait(`А пока ждал(а), так нечаянно и уснул(а).`);
      await era.printAndWait(`Вот так и повстречал(а) трёх богинь.`);
      await era.printAndWait(
        `Красивые алые длинные волосы напоминают пылающее пламя, нежная ${
          maru.sex
        } пыталась успокоить растерянного ${you.name}`,
      );
      await era.printAndWait(
        ` Хотя слов того утешения уже не помнит, само нежное ощущение, словно надпись в невыцветающем альбоме, ${you.name}  хранит в памяти.`,
      );
      await emperor.say_and_wait(
        `— Поэтому мне не нужны ни признание, ни одобрение. Истинный монарх — тот, кто идёт впереди войска.`,
      );
      await era.printAndWait(
        `Шумный гомон прерывает мысли у ${you.name}, а онемение в ногах тянет сознание у ${you.name} обратно в реальность.`,
      );
      await you.say_and_wait(`Ха~ах.`);
      await era.printAndWait(
        `Невольно зеваешь, смакуя это тёплое послевкусие, и переводишь взгляд со статуи богини на другую сторону двора.`,
      );
      await era.printAndWait(
        `Кажется, нарочно держатся в стороне от ${you.name}  и о чём-то переговариваются.`,
      );
      await you.say_and_wait(`Пожалуй, пора вернуться.`, true);
      await maru.say_and_wait(
        `${callname}? Младшие принесли немного моркови, как раз на сегодня.`,
      );
      await era.printAndWait(
        `${maru.name}  преграждает ближайший путь из двора, да ещё.`,
      );
      await emperor.say_and_wait(`${maru.name}, рада, что с тобой всё хорошо.`);
      await maru.say_and_wait(`Рудольф сегодня тоже выглядит полной сил.`);
      await maru.say_and_wait(
        `Младшие прислали мне немного моркови, попробуй и ты.`,
      );
      await emperor.say_and_wait(`Не стоит.`);
      await maru.say_and_wait(`Да? Как жаль.`);
      await emperor.say_and_wait(
        `Можно потом попросить тебя принести немного?`,
      );
      await maru.say_and_wait(`Конечно можно!`);
      await maru.say_and_wait(
        `Ради ${maru.uma_sex_title} счастья изо всех сил старается Рудольф — по-моему, это здорово.`,
      );
      await maru.say_and_wait(
        `Как претендент прошла весь путь и оставила на скаковом поле славное имя императора.`,
      );
      await maru.say_and_wait(
        `Вот так раз за разом разбивать пророчества, что ни одной ${maru.uma_sex_title} такое не под силу, — для жизни это тоже счастье, верно?`,
      );
      await emperor.say_and_wait(`Тогда ${maru.name} счастлива?`);
      await maru.say_and_wait(
        `Если уж про счастье — разве не счастье вот так оставлять на скаковом поле надежду, за которой погонятся милые младшие?`,
      );
      await maru.say_and_wait(
        `Свободно бегать по траве, слушать тревоги младших и давать советы — по-моему, неплохой выбор, правда?`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title} ожидания — штука куда тяжелее, чем кажется.`,
      );
      await emperor.say_and_wait(
        `Если по пути лопнуть розовый пузырь — ещё ничего, но если всё время видеть розовые сны.`,
      );
      await emperor.say_and_wait(
        `Когда-нибудь встретишь то, с чем сама не справишься.`,
      );
      await emperor.say_and_wait(
        `Когда этот час настанет, ${maru.name}, я жду, какой путь ты изберёшь и как перешагнёшь эту преграду.`,
      );
      await era.printAndWait(
        `С колокольным звоном стало ясно: вот-вот начнётся послеобеденная тренировка. ${maru.name}  думает и всё же молчит.`,
      );
      await emperor.say_and_wait(
        `Хотелось бы ещё поговорить, но в кабинете всё ещё лежит незаконченная работа. Прошу прощения.`,
      );
      await era.printAndWait(`С этими словами император покидает двор.`);
      await maru.say_and_wait(`…И всё же я это знаю.`);
      await maru.say_and_wait(`…Прости, ${callname}, я кое-что вспомнила.`);
      await era.printAndWait(`${maru.name}  с мрачным лицом покидает двор.`);
      await you.say_and_wait(`Так никто и не остался?`);
      await you.say_and_wait(
        `${maru.name}, похоже, что-то на уме. Надо при случае поговорить.`,
      );
      await era.printAndWait(`${you.name}  покидаешь двор.`);
      await era.printAndWait(
        `И вот путники с разными мыслями идут каждый к своей цели.`,
      );
      await era.printAndWait(`Три богини молча приняли всё.`);
    };
    f.title = title;
    return f;
  })(),
  ws_34: (() => {
    const title = 'Подарок';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `Однажды, когда ${you.name} разбирает бумаги в кабинете.`,
      );
      await era.printAndWait(`Тук-тук-тук`);
      era.printButton(`「Войдите」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Извините за беспокойство.`,
      );
      await era.printAndWait(
        `С поворотом дверной ручки похожая на ученицу старшей школы ${maru.uma_sex_title} входит.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Добрый день, тренер ${you.adult_sex_title}.`,
      );
      era.printButton(`「Добрый день」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Я — одна из самых обычных, каких полно в академии Трейсен, ${maru.uma_sex_title}.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Хочу, как Марузен-семпай, идти от победы к победе на скаковом поле. Прошу любить и жаловать.`,
      );
      era.printButton(`「Прошу любить и жаловать」`, 1);
      await era.input();
      await era.printAndWait(`Вы пожимаете друг другу руки.\n`);
      era.printButton(
        `У меня есть кофе… нет, лучше не стоит. Чёрный чай или кокосовый сок — что больше нравится?`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Большое спасибо, но я пришла только передать подарок.`,
      );
      await era.printAndWait(`${maru.sex}Достаёт из кармана маленькую коробку`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Для таких обычных, как мы, ${maru.uma_sex_title}, удостоиться внимания тренера и взять G3 за карьеру — уже огромное достижение.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Все лишь изо всех сил бьются ради того, чтобы попасть в призы.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `И всё же тех, кто способен попасть в призы, ${maru.uma_sex_title} тоже можно пересчитать по пальцам, большая часть Скаковая ${maru.uma_sex_title} после победы в дебюте так и заканчивают трёхлетнюю карьеру, не выиграв больше ни разу.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Некоторые даже к выпуску так и не встречают тренера, готового заключить эксклюзивный контракт`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Марузен-семпай об этом не думает — она просто всегда подбадривает нас идти вперёд.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Когда мы сталкиваемся с проблемами, она рядом и подсказывает.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Поэтому мы всегда очень благодарны Марузен-семпай.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Вот мы с подругами вместе и сделали этот подарок, хотим отдать его Марузен-семпай.`,
      );
      era.printButton(
        `「Думаю, ${maru.name} будет очень рада. Спасибо ${you.name} 」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `Принимаешь из рук со сцены маленькую коробочку с бантом.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Спасибо, ${you.name}, тренер- ${you.adult_sex_title}.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `На следующих отборочных обязательно нужно всех поразить!`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Прощай, ${maru.name}, тренер- ${you.adult_sex_title}!`,
      );
      await era.printAndWait(
        `Поклонившись, ${maru.sex} быстрым шагом идёт к подругам, что выглядывают из дверного проёма`,
      );
      await you.say_and_wait(
        `Надеешься, что ${maru.sex} потом тоже встретит подходящего тренера`,
        true,
      );
      await era.printAndWait(
        `Тихо закрыв дверь, ${you.name} открывает коробочку.`,
      );
      await era.printAndWait(`Внутри лежит браслет из хрусталя.`);
      await you.say_and_wait(
        `Как ${maru.name} вернётся, своими руками отдашь это — ${maru.sex}.`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  we_39: (() => {
    const title = 'Хэллоуин';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Заархивировав последние данные, ${you.name} делает долгий выдох.`,
      );
      era.printButton(`「Наконец-то всё.»`, 1);
      await era.input();
      await era.printAndWait(
        `Разминаешь почти онемевшие ноги: зимние ночи длиннее летних.`,
      );
      await you.say_and_wait(`Выйти прогуляться`, true);
      await era.printAndWait(
        `Работа сделана — и от этого ${you.name} идёт легче.`,
      );
      await era.printAndWait(
        `Выходишь из кабинета: холл академии украшен тыквами-фонарями и фиолетовыми лентами — словно таинственный замок.`,
      );
      await you.say_and_wait(`Кстати, какой сегодня день?`, true);
      await you.say_as_passer_by_and_wait(
        `Бойкие ${maru.uma_sex_title} хором`,
        `Сладость или гадость!`,
      );
      await era.printAndWait(
        `Наряженные призраками, оборотнями и вампирами ${maru.uma_sex_title} облепили тебя!`,
      );
      await you.say_and_wait(`Ува!`);
      await era.printAndWait(
        `Спрятавшиеся за углом ${maru.uma_sex_title} внезапно напугали, и ${
          you.actual_name
        } падаешь на землю.`,
      );
      await you.say_as_passer_by_and_wait(
        `Бойкие ${maru.uma_sex_title} хором`,
        `Проделка удалась на славу!`,
      );
      await era.printAndWait(
        `Напугав прохожего, ${maru.uma_sex_title} с хохотом убегают, и на месте остаёшься только ты — ${
          you.actual_name
        }.`,
      );
      await you.say_and_wait(`Так нарядились… это какой праздник?`);
      await era.printAndWait(
        `Пытаясь собраться с мыслями, ${you.name} хлопает пыль с задницы и встаёт.`,
      );
      await you.say_and_wait(`Выглянуть за ворота академии`);
      await era.printAndWait(`Решив так, ${you.name} покидает холл.`);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `Наряженные мумиями ${maru.uma_sex_title} хором`,
        `Сладость или гадость!`,
      );
      await era.printAndWait(
        `Словно подражая западному Хэллоуину, трейсенские ${maru.uma_sex_title} тоже ходят по торговой улице и стучат в каждую дверь.`,
      );
      await era.printAndWait(
        `Хозяева лавок тоже угощают заранее припасёнными конфетами.`,
      );
      await you.say_and_wait(`Так сегодня Рождество?`);
      await era.printAndWait(
        `Глядя на вход с огромной вывеской — летучая мышь и тыква-фонарь, ${you.name} погружается в раздумья.`,
      );
      await maru.say_and_wait(`HAPPY HALLOWEEN!`);
      await era.printAndWait(`У входа тебя окликают.`);
      await you.say_and_wait(`${maru.name}?`);
      await maru.say_and_wait(`${callname} Счастливого Хэллоуина♪.`);
      await era.printAndWait(
        `В тёмно-фиолетовом ведьминском косплее ${maru.name} с улыбкой смотрит на ${you.name}.`,
      );
      await you.say_and_wait(
        `Вот не думал(а) встретить здесь ${maru.name}, весело тебе?`,
      );
      await era.printAndWait(
        `Дёргающиеся уши и живой, как у проказливой феи, хвост говорят сами за себя.`,
      );
      await maru.say_and_wait(
        `Очень нравится такое. Если ${callname} тоже поиграет вместе, будет ещё милее♪.`,
      );
      await you.say_and_wait(`М-м…`);
      await era.printAndWait(
        `Наряженные разной нечистью ${maru.uma_sex_title} все ещё несовершеннолетние ${
          maru.teen_sex_title
        }, и взрослому в такое ввязываться всё же…`,
      );
      await you.say_and_wait(`Скорее, огромная честь.`);
      await era.printAndWait(
        `Вот так сбросить накопившееся напряжение и с головой нырнуть в это море веселья.`,
      );
      await maru.say_and_wait(`Хо-хо♪ Тогда договорились?`);
      await you.say_and_wait(`По рукам.`);
      await you.say_and_wait(`Будем считать, что это отдых.`, true);
      await you.say_as_passer_by_and_wait(
        `Наряженная личем ${maru.uma_sex_title}`,
        ` Семпай! Мы тут уже не справляемся!`,
      );
      await era.printAndWait(
        `Прилавок с конфетами, кажется, обступили ${maru.uma_sex_title} так, что яблоку негде упасть.`,
      );
      await maru.say_and_wait(`Эм, тогда я побегу.`);
      era.printButton(`「Я тоже помогу」`, 1);
      await era.input();
      await era.printAndWait(
        `Раздав три мешка конфет, вы оба без сил растекаетесь по дивану в кабинете тренера.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_41: (() => {
    const title = (maru) => `Тренер и подопечная ${maru.uma_sex_title}`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(` Это один из ноябрьских дней.`);
      await era.printAndWait(
        `${you.name}Просматривая кассету прошлогоднего Asahi Hai, ты думаешь, как взять оттуда приёмы, чтобы помочь ${maru.name} поднять свою силу.`,
      );
      await you.say_and_wait(`Что и говорить — Super Car.`);
      await era.printAndWait(
        `Ноги, рождённые для бега, огромная сила, спрятанная под изящным телом.`,
      );
      await you.say_and_wait(`Похоже, и без меня она запросто победит.`);
      await era.printAndWait(
        `Ты жмёшь паузу и делаешь маленький глоток кофе: холодная горечь медленно растекается во рту.`,
      );
      era.println();
      await era.printAndWait(`Скрип.`);
      await maru.say_and_wait(`Халоу! ${callname}, я вошла.`);
      await you.say_and_wait(
        `Похоже, настроение отличное. Случилось что-то хорошее?`,
      );
      await maru.say_and_wait(`Хех, ${callname} тоже видишь?`);
      await maru.say_and_wait(
        `На сегодняшних отборочных та младшая, за которой я присматривала, наконец перешагнула барьер и тоже познала радость бега, знаешь?\n`,
      );
      await you.say_and_wait(
        `Раз уж ${maru.name} так говорит, мне тоже захотелось взглянуть на ту младшую, на которую ${maru.name} возлагает надежды.\n`,
      );
      await maru.say_and_wait(
        `Да-да? Младшие вот так — бац — и выросли вмиг! Меня саму аж подбросило.`,
      );
      await maru.say_and_wait(
        `Глядишь, в какой-то день младшие меня запросто обгонят и вот так оставят далеко позади. Давление — Александр, давление — Александр.\n`,
      );
      era.printButton(`「И дальше в тренировках надо выкладываться!»`, 1);
      await era.input();
      await maru.say_and_wait(
        `Точно, ${
          maru.sex_code !== 1 ? ' красотка' : 'красавчик'
        }, и мне дальше тоже нужна спартанская тренировка!`,
      );
      era.println();
      await maru.say_and_wait(`Кстати.`);
      await era.printAndWait(
        `${maru.name}Словно что-то пришло на ум, она легонько хлопает в ладоши.\n`,
      );
      await maru.say_and_wait(
        `Кстати, ${callname}, после тренировки махнём прокатиться?`,
      );
      await maru.say_and_wait(
        `В отличие от других сезонов, осенний ветер всегда дарит такое лёгкое, бодрое чувство.`,
      );
      await maru.say_and_wait(
        `Впрочем, если просто на словах рассказывать, ${callname} всё равно не прочувствуешь, наверное. Поэтому я думаю, ${callname} так, телом, будет лучше.`,
      );
      era.printButton(
        `Раз уж ${maru.name} так говорит, мне тоже захотелось прочувствовать осенний ветер.`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `Как же жду, каков осенний ветер, о котором говорит ${maru.name}?`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `Фух, только когда тебя обдаст ветром, по-настоящему понимаешь: всё остальное — суета сует.`,
      );
      era.printButton(`「${maru.name} можно чуть помедленнее?»`, 1);
      await era.input();
      await era.printAndWait(
        `По сравнению с первым разом на пассажирском, когда тебя едва не скрутило от страха, теперь ${you.name} понемногу привыкает к такой скорости.`,
      );
      await you.say_and_wait(`Человек живучее, чем кажется.`, true);
      await you.say_and_wait(
        `В потоке воздуха на огромной скорости — только рёв ветра да пейзаж, стремительно улетающий назад.`,
        true,
      );
      await era.printAndWait(
        `Не как летом, когда в воздухе ещё тянется шлейф жары, и не как зимой, когда в воздухе крошатся осколки холода.`,
      );
      await era.printAndWait(`В осеннем ветре — сильное чувство освобождения.`);
      await era.printAndWait(
        `Словно в школьные годы: последняя работа сдана, ручка отложена, выдох.`,
      );
      await era.printAndWait(
        `Или как после долгой муки, когда в один день это наконец кончается.`,
      );
      await era.printAndWait(
        `Начиная с обдуваемых ветром щёк, затем по волоску за волоском, через мозг, к которому они крепятся, — и наконец в самое сердце.`,
      );
      await era.printAndWait(
        `Лишняя волна кайфа — так и хочется выплеснуть её без оглядки.`,
      );
      await you.say_and_wait(`${maru.name}, может, я.`);
      await maru.say_and_wait(`Скоро уже море.`);
      await era.printAndWait(
        `Слова, готовые сорваться с губ, так и тают в тишину.`,
      );
      await you.say_and_wait(`…Да.`);
      era.drawLine();
      await era.printAndWait(
        `Сойдя с пассажирского сиденья у ${maru.name}, ${you.name} напряжённо вглядывается вдаль — в поле зрения лишь фигурки с кунжутное зёрнышко.`,
      );
      await era.printAndWait(
        `Возможно, ${maru.uma_sex_title} как раса от природы наделена таким преимуществом — или же ты судишь по следам, которые море ещё не смыло.`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `В этом пространстве глубокой синевы ${maru.name} смотрит на ходящие волны —`,
      );
      await era.printAndWait(`И потом на лице проступает тоска.`);
      await you.say_and_wait(`${maru.name}?`);
      await maru.say_and_wait(`Э?`);
      await maru.say_and_wait(
        `Вот так с ${callname} в выходной вместе смотреть на море — в первый раз.`,
      );
      await era.printAndWait(
        `Влажный морской ветер бьёт в лицо, глаза едва получается держать открытыми.`,
      );
      await maru.say_and_wait(`Ого, не думала, что сегодня ветер такой лютый.`);
      await you.say_and_wait(`Вот как.`);
      await you.say_and_wait(
        `Так вот он какой, морской ветер: чуть горьковатый, солёный.`,
      );
      await maru.say_and_wait(
        `М-м, в ветре ещё чуть тянет рыбой — и это же маяк для тех, кто живёт морем.`,
      );
      await maru.say_and_wait(`Они по этому особому запаху и ищут еду.`);
      await maru.say_and_wait(
        `Так что, с этой стороны, этот запах для них, глядишь, и есть линия жизни.`,
      );
      await you.say_and_wait(
        `${maru.name}Вечно ты такая нежная старшая ${maru.elder_sibling_sex_title} же.`,
      );
      await maru.say_and_wait(`Ой, только ты, ${callname}, так не говори♪`);
      await maru.say_and_wait(
        `Когда ${callname} так говорит, мне как ${maru.elder_sibling_sex_title} даже немного неловко.`,
      );
      await era.printAndWait(
        `Когда ты, ${you.name}, хвалит ${maru.name}, на лице появляется редкое милое выражение.`,
      );
      await you.say_and_wait(
        `Спасибо Трём богиням за этот дар — уже больше не влезет.`,
        true,
      );
      await era.printAndWait(
        `Так, не сдерживаясь, ты подчистую «съедаешь» милый вид ${maru.name}.`,
      );
      await era.printAndWait(
        `По сравнению с карьерой тренера длиной в десятки лет короткие три года мимолётны, как пена.`,
      );
      await era.printAndWait(
        `Значит, первую встреченную за карьеру ${maru.uma_sex_title} можно взять как объект для практики?`,
      );
      await era.printAndWait(
        `Нет, как тренеры мы заведомо недостаточно сильны и, скорее всего, разочаруем поставивших на нас ${maru.uma_sex_title}.`,
      );
      await era.printAndWait(`И всё равно мы выбираем заключить контракт.`);
      await era.printAndWait(
        `Потому что ${maru.uma_sex_title} нуждаются в нём.`,
      );
      await era.printAndWait(
        `Именно поэтому для тренера важнее всего преданное сердце`,
      );
      await era.printAndWait(
        `«Даже ценой позора и крушения имени тренер обязан сиять вместе с подопечной.» Этим преданным сердцем искупай всё уродливое и все пробелы в тренировках.`,
      );
      await maru.say_and_wait(`Пора уже идти домой ужинать, ${callname} ——`);
      await era.printAndWait(`Луна уже взошла.`);
    };
    f.title = title;
    return f;
  })(),
  before_asah_sta: (() => {
    const title = 'Перед Asahi Hai · пятая передача';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Комната подготовки`);
      await maru.say_and_wait(`Хм-хм-хм~`);
      await era.printAndWait(
        `${maru.name}В хорошем настроении осматривает победный костюм в комнате подготовки.`,
      );
      await you.say_and_wait(`${maru.name}, как там подготовка?`);
      await maru.say_and_wait(`Ах, это ${callname}.`);
      await maru.say_and_wait(
        `Как видишь, сейчас я на полных лошадиных силах.`,
      );
      era.printButton(`「И дальше тоже хорошенько наслаждайся скачкой!»`, 1);
      await era.input();
      await you.say_and_wait(
        `Всё-таки мне всегда хотелось увидеть, как навстречу будущему бежит ${maru.name} — такой крутой вид.`,
      );
      await maru.say_and_wait(`М-м, ${callname} смотри же внимательно.`);
      await maru.say_and_wait(
        `Вид того, как по скаковому полю бежит ${maru.name}.`,
      );
      await maru.say_and_wait(`Ну, я пошла.`);
      era.printButton(`「${maru.name} давай!»`, 1);
      await era.input();
      await era.printAndWait(
        `Подготовившись, ${maru.name} выходит на скаковое поле.`,
      );
      await you.say_and_wait(
        `Дальше с трибуны болей — ${maru.sex} давай`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  asah_sta_win: (() => {
    const title = 'После Asahi Hai · Fever Boom';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(`Ипподром Hanshin\n`);
      await era.printAndWait(
        `Пронзительный воздух бьёт тебе в лёгкие, холод взбадривает мозг, и мысль становится ещё яснее.`,
      );
      await you.say_and_wait(` ${maru.name}, только выиграй.`);
      await you.say_and_wait(`…нет, если это ${maru.name} — тогда да.`);
      await you.say_and_wait(
        `Чем победа, куда радостнее чувствовать бег вместе с ${maru.uma_sex_title}.`,
        true,
      );
      await era.printAndWait(
        `${you.name} пристально вглядываешься в миг старта скачки.`,
      );
      era.drawLine({ content: 'На другом конце трибуны' });
      await era.printAndWait(
        `крепко сжав так нелегко доставшийся билет, ${maru.uma_sex_title} пристально смотрит на силуэт ${maru.name}.`,
      );
      await era.printAndWait(`Однако,`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Значит, смысл моего существования — это…`,
      );
      await era.printAndWait(
        `Невольно, на автомате сравниваю себя — и ${maru.sex}.`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `А! Нечаянно сказала вслух то, что лежало на дне души.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Но почему же так болит сердце?`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Между мной и тобой такая дистанция, что даже изо всех сил до тебя не дотянуться.`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `Почему…`);
      await era.printAndWait(
        `В досаде закусывает губу и сминает крепко сжатый билет в шарик.`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Почему я не вижу надежды в твоих шагах`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Нет! О чём это я.`,
      );
      await era.printAndWait(
        `Кажется, что-то драгоценное раскололось и уже не вернуть — ${maru.uma_sex_title} снова смотрит на силуэт ${maru.name}.`,
      );
    };
    f.title = title;
    return f;
  })(),
  asah_sta_5: (() => {
    const title = 'После Asahi Hai · волнующее чувство';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name} занимает призовое место.`);
      await maru.say_and_wait(
        `Хэй! ${callname}, видел(а), ${
          maru.sex_code !== 1 ? ' красотка' : 'красавчик'
        } мой крутой вид?`,
      );
      era.printButton(`Хорошая работа.`, 1);
      await era.input();
      era.printButton(`Финиш в призах на скачках G1 — уже очень круто.`, 1);
      await era.input();
      await maru.say_and_wait(
        `Бегущие ${maru.uma_sex_title} горят боевым духом и хотят победить, ${maru.elder_sibling_sex_title} я малость под таким давлением.`,
      );
      await you.say_and_wait(
        ` ${maru.name} явно же получаешь от этого удовольствие.`,
      );
      await maru.say_and_wait(
        `Всё-таки это скачки уровня G1, соперницы на ступень сильнее обычного.`,
      );
      await maru.say_and_wait(
        `И радость с травяной дорожки тоже на уровень выше, чем раньше♪`,
      );
      await you.say_and_wait(`Куда теперь пойдём это отметить?`);
      await maru.say_and_wait(
        `Ну, если так, ${maru.sex_code !== 1 ? ' красотка' : 'красавчик'}Я знаю одну очень популярную кондитерскую.`,
      );
      era.drawLine({ content: 'На другом конце трибун' });
      await era.printAndWait(
        `крепко сжимая так трудно доставшийся скаковой билет, ${maru.uma_sex_title} неотрывно смотрит на силуэт ${maru.name}.`,
      );
      await era.printAndWait(`Однако, `);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Так каков смысл моего существования…`,
      );
      await era.printAndWait(
        `нечаянно, подсознательно сравнивает себя с ней — ${maru.sex}.`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Ах! Нечаянно высказала вслух то, что было на дне сердца.`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Но почему тогда так болит сердце?`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Расстояние между мной и тобой такое, что даже изо всех сил я не дотянуться.`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `Почему…`);
      await era.printAndWait(
        `С досадой закусывает губу и скатывает крепко сжатый в руке скаковой билет в шарик.`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Почему я не могу увидеть надежду в твоих шагах`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Нет! О чём это я.`,
      );
      await era.printAndWait(
        `Кажется, будто что-то драгоценное раскололось и уже не вернуть — ${maru.uma_sex_title} снова смотрит на силуэт ${maru.name}.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = 'Воспоминания о Рождестве и стуке сердца';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`Merry Christmas!`);
      await era.printAndWait(
        `Одетая в толстую одежду ${maru.name} появляется в кабинете тренера.`,
      );
      era.printButton(
        `「С Рождеством! Если хочешь согреться, здесь стоят кото и мандарины.」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `Ты трёшь усталые глаза и, пользуясь случаем поговорить с ${maru.name}, немного даёшь голове отдохнуть.`,
      );
      await maru.say_and_wait(
        `На улице холоднее, чем казалось, — просто невыносимо.`,
      );
      await era.printAndWait(
        `Отдавшись мягкому дивану, ${maru.name} осторожно снимает кожуру с мандарина и кладёт мякоть в рот.`,
      );
      await you.say_and_wait(
        `Сегодня уже минус 1°, по прогнозу вечером ещё пойдёт снег.`,
      );
      await era.printAndWait(
        `«Снег пойдёт?» — бормочет ${maru.name} и снимает кожуру ещё с одного мандарина.`,
      );
      await era.printAndWait(
        `На миг в кабинете тренера будто снова воцаряется тишина, и лишь шуршание перелистываемых страниц разносится по кабинету.`,
      );
      await era.printAndWait(
        `Глубоко зарывшаяся в объятия дивана и снова раскрывшая свежий модный журнал ${maru.name} в кольце льющего оранжевый свет обогревателя расплывается в довольной улыбке.`,
      );
      era.drawLine();
      await you.say_and_wait(`Вот и последняя.`, true);
      await era.printAndWait(
        `Ты раскладываешь бумаги по папке и разминаешь затёкшие ноги.`,
      );
      await maru.say_and_wait(
        `${callname}Спасибо за работу, что следующее в расписании?`,
      );
      await era.printAndWait(
        `Мгновенно собравшая расслабленные мышцы и вернувшаяся к обычному виду ${maru.name} смотрит на вставшего ${you.name}.`,
      );
      await you.say_and_wait(`Планы?`);
      await era.printAndWait(
        `В прошлые Рождества всегда в одиночку за конспектами в кабинете тренера ${you.name}.`,
      );
      await you.say_and_wait(`М-м — и правда, `);
      await maru.say_and_wait(`Пойдём вместе отпраздновать?`);
      await you.say_and_wait(`Отдохнуть в кабинете тренера`, true);
      await era.printAndWait(
        `Ты смотришь на полную ожидания ${maru.name}, ${you.name} и насильно проглатывает вторую половину фразы.`,
      );
      await maru.say_and_wait(`Выходим прямо сейчас!`);
      await era.printAndWait(
        `По пылкому приглашению ${maru.name} вы вдвоём приходите к согласию.`,
      );
      era.drawLine();
      await era.printAndWait(`В дрожащем рёве мотора Та заводится.`);
      await era.printAndWait(
        `Чёрное-чёрное небо, и то и дело налетающие порывы ледяного ветра безжалостно жнут живые души на своём пути.`,
      );
      await you.say_and_wait(`Апчхи!`);
      await era.printAndWait(
        `Резкий ветер пролезает в щели между одеждой и кожей,.`,
      );
      await you.say_and_wait(`Как холодно, а ведь скоро ещё и снег пойдёт.`);
      await era.printAndWait(
        `Ты невольно приходишь в отчаяние от предстоящего маршрута.`,
      );
      await maru.say_and_wait(
        `— Кстати, тренер ${
          maru.couple_title
        } растёт быстрее, чем я ожидала. Глядя, как стараются кохай, даже ${maru.elder_sibling_sex_title} я тоже немного завелась.`,
      );
      await era.printAndWait(
        `Ты думаешь, что надо найти предлог обнять ${maru.uma_sex_title} и согреться, ёжишься и терпишь холод.`,
      );
      await you.say_and_wait(`Надо было выйти со шарфом.`, true);
      await maru.say_and_wait(
        `…В универмаге как раз делают рождественский ужин при свечах, пойдём попробуем?`,
      );
      await era.printAndWait(
        `В завывании ледяного ветра слова ${maru.name} кажутся такими далёкими, будто с края неба.`,
      );
      await you.say_and_wait(`Как холодно.`, true);
      await maru.say_and_wait(`…Впрочем, я всё же считаю, а, мы на месте!`);
      await era.printAndWait(`Универмаг уже недалеко.`);
      era.drawLine();
      await era.printAndWait([
        maru.get_colored_name(),
        '/ ',
        you.get_colored_name(),
        '「',
        { content: ' За ', color: maru.color },
        'здоровье!»',
      ]);
      await era.printAndWait(
        `В той самой недорогой закусочной, о которой говорила ${maru.name}, вы вдвоём поднимаете бокалы, празднуя наступление праздника.`,
      );
      await maru.say_and_wait(
        `Хотя сейчас ещё нельзя пить… но сок тоже ничего так♪`,
      );
      era.printButton(`「Скоро ${maru.name} тоже можно будет пить.»`, 1);
      await era.input();
      await maru.say_and_wait(
        `Когда тот день настанет, ${callname} составишь мне компанию — и пить будем до утра.`,
      );
      await era.printAndWait(
        `С заоконного неба падает одна снежинка, а за ней на землю ступают уже бессчётные.`,
      );
      await you.say_and_wait(
        `Чтобы тот день настал, и в следующих тренировках нельзя расслабляться!`,
      );
      await era.printAndWait(
        `Холодные и прекрасные, они словно духи природы — по своей воле падают с небес поиграть в мире людей.`,
      );
      await maru.say_and_wait(`Снег пошёл, так мило.`);
      await era.printAndWait(
        `Кажется, что-то вспомнив, ${maru.name} задумчиво смотрит на снежинки за окном.`,
      );
      await you.say_and_wait(`${maru.name}Любишь снег?`);
      await era.printAndWait(
        `Покачивая давно опустевший стакан, ${maru.teen_sex_title} будто унеслась мыслями в далёкое прошлое.`,
      );
      await maru.say_and_wait(`…А! Прости, я немножко отвлеклась.`);
      await era.printAndWait(
        `Будто только сейчас заметила ${you.name} рядом, в панике отвечая ${you.name} — ${maru.name} выдала милую оплошность.`,
      );
      era.printButton(`「Нет, ничего」`, 1);
      era.printButton(`「${maru.name} любишь снег?»`, 2, { disabled: true });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `Снова задавать тот же вопрос ${maru.name} тоже будет неловко.`,
        );
        await era.printAndWait(`${you.name}Решаешь свернуть на другую тему.`);
        await era.printAndWait(
          `Так, в этой тёплой атмосфере, ужин подошёл к концу.`,
        );
      } else {
        await maru.say_and_wait(`Мм? Снежинки?`);
        await era.printAndWait(
          `Кажется, немного помолчала, но ${maru.name} всё же сказала.`,
        );
        await maru.say_and_wait(`На самом деле очень даже, знаешь?`);
        await maru.say_and_wait(
          `Скорее даже хочу утром отдёрнуть шторы и сразу увидеть, как снежинки ложатся на стекло!`,
        );
        await you.say_and_wait(`Почему такое тоскливое лицо?`);
        await maru.say_and_wait(`${callname}А ты разве нет?`);
        await era.printAndWait(
          `Вопрос она не приняла — вместо этого бросила встречный.`,
        );
        await maru.say_and_wait(
          `Ты хмуришься — будто исследователь, тщетно ищущий ответ.`,
        );
        await era.printAndWait(
          `Снова перехватив ритм, ${maru.name} расплылась в игривой улыбке.`,
        );
        await maru.say_and_wait(
          `Впрочем, ответ на самом деле простой, знаешь?`,
        );
        await you.say_and_wait(`И какой же ответ?`);
        await maru.say_and_wait(`Не·ска·жу· ${you.name} ⭐`);
        await you.say_and_wait(
          `Нет, из-за слишком нетерпеливых слов ${maru.sex} насторожилась?`,
          true,
        );
        await you.say_and_wait(`Придётся поискать другой случай.`, true);
        await era.printAndWait(
          `Потом вы ещё немного поговорили о тренировках — и на этом приятный ужин подошёл к концу.`,
        );
      }
      era.drawLine({ content: 'У входа в общежитие тренеров' });
      await maru.say_and_wait(`886 (пока-пока)!`);
      await maru.say_and_wait(
        `Ой, чуть не забыла! ${callname}, это для ${you.name}.`,
      );
      await era.printAndWait(
        `Достаёт из забитого под завязку заднего сиденья подарочную коробку с изящным бантом.`,
      );
      await you.say_and_wait(`${maru.name}Это что?`);
      await maru.say_and_wait(`А теперь правда до завтра!`);
      await era.printAndWait([
        you.get_colored_name(),
        ' слова потонули в рёве мотора, и тебе остаётся лишь сжимать коробку и смотреть, как Та становится всё меньше и меньше.',
      ]);
      await you.say_and_wait(`В общем, сначала домой.`);
      await era.printAndWait(
        `Осторожно несёшь коробку — знак внимания ${maru.name}, и медленно возвращаешься в комнату.`,
      );
      await era.printAndWait(
        `Срываешь золотистую ленту, осторожно открываешь крышку — будто снова ребёнок, которому старшие дарят подарок.`,
      );
      await era.printAndWait(`Изящно сработанный шарф, а также `);
      await maru.say_and_wait(
        `Прости, хотела подарить ${callname} что-нибудь получше, но сейчас только эта марка. Надеюсь, ${
          callname
        } не против. С Рождеством!`,
      );
      await era.printAndWait(
        `Тонкий изящный почерк будто говорит с тобой напрямую.`,
      );
      await you.say_and_wait(`3q, ${maru.name}.`);
      await era.printAndWait(
        `Неизвестно, когда ${you.name} тоже этому поддался(ась).`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = 'Новогодние мысли';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Время пролетело — и вот уже снова новый год.`);
      await era.printAndWait(
        `Пережитые вместе с ${maru.name} радости и горечи теперь стали прекрасными воспоминаниями.`,
      );
      await era.printAndWait(
        `Пусть сегодня официальный выходной, бездельничать в общежитии тренеров слишком тоскливо.`,
      );
      await era.printAndWait(
        `Думаешь: 「просто прогуляюсь」, — а ноги сами несут обратно в Трейсен.`,
      );
      await you.say_and_wait(
        `Раз уж пришёл, почему бы не заглянуть в тренировочную`,
      );
      await era.printAndWait(`Решив так, ${you.name} идёт в тренировочную.`);
      era.drawLine({ content: 'Тренировочная' });
      await era.printAndWait(
        `В обычные дни тренировочная неотступно отдаёт раздражением: 「опять на работу」.`,
      );
      await era.printAndWait(
        `Но когда в выходной возвращаешься сюда с мыслью 「просто взгляну」.`,
      );
      await era.printAndWait(
        `С ${maru.name} вы обсуждали план тренировок, вместе ели вкусный торт и, прижавшись на диване, неотрывно смотрели видеокассеты скачек категории G.`,
      );
      await era.printAndWait(`Всё это — будто было вчера.`);
      await you.say_and_wait(`Как же быстро летит время.`);
      await era.printAndWait(
        `Смотришь на привычную тренировочную — и ловишь ощущение, будто здесь чужой.`,
      );
      await you.say_and_wait(`Слишком устал(а)?`);
      await you.say_and_wait(
        `Ладно! Теперь на крышу — подышать и прояснить голову`,
        true,
      );
      await you.say_and_wait(
        `…Интересно, где сейчас ${maru.name}. Наверное, шумит там вовсю.`,
      );
      await era.printAndWait(
        `Тихо закрываешь дверь тренировочной и идёшь на крышу сменить настроение.`,
      );
      era.drawLine({ content: 'Крыша' });
      await era.printAndWait(
        `Многие ${maru.uma_sex_title} решают встретить Новый год с подругами или со своим тренером и за каникулы стряхнуть с себя прошлогодние тревоги.`,
      );
      await era.printAndWait(
        `Академия, что прежде шумела и галдела, сейчас открыла тихую сторону.`,
      );
      await era.printAndWait(
        `Смотришь с крыши вниз — вся академия Трейсен как на ладони`,
      );
      await you.say_and_wait(
        `В такой момент во весь голос крикнуть «Я стану мужчиной Тройной короны для ${maru.uma_sex_title} » — вот это было бы в тему`,
        true,
      );
      await you.say_and_wait(
        `Хотя здесь никого нет, всё равно слишком стыдно`,
        true,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `「Я стану достойным ${maru.name} как ${you.phy_sex_title}!!!」`,
        {
          align: 'center',
          color: you.color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await era.printAndWait(
        `Сбрасываешь и роль тренера, и взрослую сдержанность — и с таким напором орёшь, что сам(а) себя пугаешь этим голосом.`,
      );
      await era.printAndWait(
        `Возбуждение от нарушенного табу бросает в краску ${you.name}  — лицо пылает.`,
      );
      await you.say_and_wait(`Как же легко.`);
      await you.say_and_wait(
        `Пока никто не заметил крышу, лучше поскорее уйти.\n`,
      );
      await maru.say_and_wait(`Ой? ${callname}?`);
      await era.printAndWait(`Дикая ${maru.name} появилась!`);
      await you.say_and_wait(`Э-э-э? ${maru.name} Как ты здесь?`, true);
      await you.say_and_wait(`Ха-ха, всё, жизнь кончена`, true);
      await you.say_and_wait(
        `Найти необитаемый остров и доживать там остаток дней.`,
        true,
      );
      era.printButton(`「Прости, ${you.name}, я не на того.」`, 1);
      await era.input();
      era.printButton(`「Сейчас я всего лишь самый обычный тренер.»`, 1);
      await era.input();
      await maru.say_and_wait(
        `…Ара, этот, эм… самый обычный тренер ${you.adult_sex_title}.`,
      );
      await maru.say_and_wait(
        `Кричал(а) ты только что с таким напором — я ещё на лестнице слышала этот полный пыла голос.`,
      );
      await maru.say_and_wait(`Юность и впрямь прекрасна.`);
      await maru.say_and_wait(
        `Но такие слова всё же стоит сказать при том, к кому они относятся, верно?`,
      );
      await maru.say_and_wait(
        `Будь это мой тренер — глядишь, выложил(а) бы это со всей душой.`,
      );
      await era.printAndWait(
        `От жгучего стыда всего обдаёт жаром ${you.name}  — ноги подкашиваются, едва не падает.`,
      );
      await you.say_and_wait(`Мне очень жаль.`, true);

      await era.printAndWait(`${maru.name}Лишь тихо смотришь в небо.`);
      era.printButton(
        `…Не сходить ко Спэ, ${maru.couple_title}, вместе погулять?`,
        1,
      );
      era.printButton(`「Расскажи мне, ${you.name}, что думает?」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `${maru.name}В хорошем настроении напевает ностальгическую мелодию.`,
      );
      await you.say_and_wait(`Что, одиноко стало?`, true);
      era.printButton(`「Зачем в такую стужу специально идти на крышу?」`, 1);
      era.printButton(`「${you.name} о чём ты, в конце концов, думает?」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `Желая узнать, что она и правда думает, ${you.name}  тут же облокачивается на перила рядом с ней и заговаривает`,
      );
      await maru.say_and_wait(
        `В прошлом году ещё со Спэ, ${
          maru.couple_title
        }, вместе устраивали новогоднюю вечеринку, а в этом году сказала что-то вроде «иди уже к своему тренеру» и вытолкала меня`,
      );
      era.printButton(
        `Спэ ${maru.couple_title} на самом деле очень заботится о ${you.name}, знает`,
        1,
      );
      await era.input();
      await era.printAndWait(`От ${maru.name} веет густым сладким ароматом,`);
      await you.say_and_wait(
        `Это шампунь? Почему сегодня так сладко пахнет`,
        true,
      );
      await maru.say_and_wait(
        `${callname}Тоже так думаешь, ${maru.couple_title}? Ты ведь росток, полный надежды`,
      );
      await maru.say_and_wait(
        `Когда-нибудь пробьёшься сквозь ветер и дождь и станешь исполинским деревом`,
      );
      await era.printAndWait(
        `В сравнении с ${maru.name} полными надежды словами, ${maru.sex} смотрит в небо, и весь вид полон дум.`,
      );
      era.printButton(
        `「${maru.name} не хочешь стать исполинским деревом?」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `Если уж выбирать, я скорее стала бы нежным ветром, чем деревом.`,
      );
      era.printButton(`「Ветер?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}Разве не замечаешь ветер, что свободно гуляет в небе`,
      );
      await maru.say_and_wait(
        `Если бы я стала ветром, что гладит небо, я, быть может, смогла бы, когда младшие мучаются,`,
      );
      await maru.say_and_wait(
        `когда до успеха не хватает чуть-чуть, когда вздыхают, — дать ${maru.couple_title} ободрение`,
      );
      await you.say_and_wait(
        `${maru.name}Ты и сейчас уже отлично справляешься.`,
      );
      await you.say_and_wait(`А сейчас просто наслаждайся новогодней радостью`);
      await maru.say_and_wait(`Эм, так дальше я на себя не похожа.`);
      await maru.say_and_wait(`${callname}Есть какие-нибудь планы?`);
      era.printButton(
        '「Тогда сегодня потренируемся на траве」(скорость +20)',
        1,
      );
      era.printButton(
        '「Пойдём по магазинам и сметём все невзгоды」(энергия +200)',
        2,
      );
      era.printButton(
        '「Сегодня просто отдохнём в кабинете тренера」(очки навыков +100)',
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait(
            'Угу, промчимся по траве — и все заботы станут облаками!',
          );
          await maru.say_and_wait(
            `Не зря ${callname}, так понимаешь моё сердце.`,
          );
          await era.printAndWait(`${maru.name}Кажется, снова воспряла духом`);
          await maru.say_and_wait('OK! Тогда выходим прямо сейчас');
          await era.printAndWait(
            `Вы весь день тренировались на траве, а потом устроили маленькое празднование в кабинете тренера`,
          );
          break;
        case 2:
          await maru.say_and_wait(
            `Что? ${callname}, это ты хочешь со ${maru.elder_sibling_sex_title} мной на свидание?`,
          );
          await maru.say_and_wait(
            'Ну и нетерпение. Надо как следует продумать маршрут свидания',
          );
          await maru.say_and_wait('Тогда поедем на Та');
          era.printButton(
            `「Раз уж это свидание, давай лучше пойдём пешком」`,
            1,
          );
          await era.input();
          await maru.say_and_wait(`Н-ну—`);
          era.printButton(
            `「Раз уж мы пара, вместе идти пешком будет атмосфернее」`,
            1,
          );
          await era.input();
          await maru.say_and_wait(`Раз уж ${callname} так просит`);
          await maru.say_and_wait(
            `И на прогулке иногда ловишь совсем другие ощущения⭐`,
          );
          await era.printAndWait(`Тогда выходим прямо сейчас`);
          await era.printAndWait(
            `Когда вы вернулись в кабинет тренера, оба без сил повалились на диван`,
          );
          break;
        case 3:
          await maru.say_and_wait(
            `И то верно, в такой холод лучше сидеть в тёплом кабинете`,
          );
          era.printButton(
            `「Достану снеки и мандарины, что лежат в кабинете」`,
            1,
          );
          await era.input();
          await maru.say_and_wait(`Хо-хо, тогда я почищу мандарины.`);
          await era.printAndWait(
            `Так вы и провели этот день у котацу в тёплой атмосфере.`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = 'На стыке зимы и весны';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Тренировочное поле`);
      await era.printAndWait(
        `Скаковая ${maru.uma_sex_title} здесь обливаются потом, стремясь к желанному будущему.`,
      );
      await era.printAndWait(
        `После боевого крещения на Asahi Hai ${you.name} устремили взгляд на предварительные скачки перед Satsuki Sho — Spring Stakes.`,
      );
      await maru.say_and_wait(
        `Как и планировали, после третьего поворота — пора спуртовать!`,
      );
      await maru.say_and_wait(`Вот так, залпом газ в пол!`);
      await era.printAndWait(
        `Для взявших тактику фронта скаковых ${maru.uma_sex_title}, в отличие от ${maru.uma_sex_title} других стилей, большая часть внимания уходит на старт и середину.`,
      );
      await era.printAndWait(
        `Видимо, чтобы закрепить преимущество, добытое на старте и в середине, и так выиграть.`,
      );
      await era.printAndWait(
        `В скачке несколько фронтраннеров с одной стратегией часто ведут смертный бой на старте и в середине.`,
      );
      await era.printAndWait(
        `Так они задают скачке высокий темп и сбивают ритм ${maru.uma_sex_title} с тактикой прорыва и догона.`,
      );
      await era.printAndWait(
        `А вот ещё не упомянутые преследователи — пока фронтраннеры в борьбе не держат скорость на финише — разом выплёскивают прибережённые силы и вырываются вперёд.`,
      );
      await era.printAndWait(`Богомол ловит цикаду, а сзади — иволга?`);
      await era.printAndWait(
        `Но ${maru.name} бежит впереди не из стратегии, а потому что`,
      );
      await you.say_and_wait(
        `Недаром её называют чудовищной ${maru.uma_sex_title}`,
        true,
      );
      await era.printAndWait(
        ` Наслаждаясь бегом, она незаметно обрела скорость, недоступную простым смертным.`,
      );
      era.printButton(`「Молодец, давай немного отдохнём.」`, 1);
      await era.input();
      await maru.say_and_wait(`Ха… ха-а… фу~`);
      await era.printAndWait(`Трава вокруг разметана, будто прошёл тайфун.`);
      await maru.say_and_wait(`Большое спасибо♪`);
      await era.printAndWait(
        `Взяв у ${you.name} протянутое полотенце, ${maru.name} вытирает пот со лба. Запах ванили с мокрых длинных волос заползает в ${you.name} нос.`,
      );
      await era.printAndWait(
        `Быть может, именно такая искренняя удовлетворённость после бега — это и есть ${maru.name} настоящий облик.`,
      );
      era.printButton(`「Какой ностальгический аромат.」`, 1);
      await era.input();
      await era.printAndWait(
        `Помогая ${maru.name} вытереть мокрые волосы полотенцем, ищешь тему для разговора.`,
      );
      await maru.say_and_wait(`${callname}Тебе так интересен запах?`);
      await you.say_and_wait(`Ага, приятный запах тела.`);
      await maru.say_and_wait(
        `Хо-хо~ Похоже на запах тела, но это на самом деле духи.`,
      );
      await maru.say_and_wait(`Хотя я выбрала их, чтобы сменить настроение.`);
      await maru.say_and_wait(`Но судя по реакции ${callname} видно.`);
      await maru.say_and_wait(`Кажется, они очень нравятся.`);
      await maru.say_and_wait(
        `Ну, как видишь, ${maru.elder_sibling_sex_title} я тоже всегда на острие моды.`,
      );
      await era.printAndWait(
        `${maru.sex} настроение, кажется, стало ещё лучше.`,
      );
      await you.say_and_wait(
        `Н-ну, в модных штуках я не очень разбираюсь, но ${maru.name} всегда была обворожительной.`,
      );
      await maru.say_and_wait(
        `Даже если ${callname} так говорит — награды всё равно не будет, ясно?`,
      );
      era.printButton(`「Правда не надо」`, 1);
      era.printButton(`「У меня уже есть прекрасные воспоминания」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`Э-э—`);
        await maru.say_and_wait(
          `${callname}Когда ты так говоришь, это даже слегка мило~`,
        );
        await era.printAndWait(
          `${maru.name}Легонько гладит ${you.name} по голове.`,
        );
        await maru.say_and_wait(
          `Хм-хм-хм~ Всё-таки такой ${callname} самый милый♪`,
        );
      } else {
        await maru.say_and_wait(`Э-э—`);
        await era.printAndWait(
          `${maru.name}С недоумением смотрит на ${you.name}.`,
        );
        await maru.say_and_wait(
          `Тренер… ${callname} так говорить — это уже подло.`,
        );
        await maru.say_and_wait(
          `…… ${callname} Другим детям тоже такое говоришь?`,
        );
        await era.printAndWait(
          `Словно её что-то сильно озаботило, ${maru.name} пристально смотрит на ${you.name} в упор.`,
        );
        await maru.say_and_wait(
          `Если ${callname} станет такой распутной, ${maru.elder_sibling_sex_title} я тоже расстроюсь, ясно?`,
        );
        await you.say_and_wait(`Прости, больше этого точно не повторится.`);
        await maru.say_and_wait(
          `Ха-а, как бы там ни было, только другим детям так не говори, ладно? Хорошо, что на этот раз объектом была я. Нет, даже если это я — тоже не надо.`,
        );
      }
      await you.say_and_wait(`Кстати, ${maru.name}.`);
      await you.say_and_wait(
        `Немного с бухты-барахты, но меня давно мучает один вопрос.`,
      );
      await maru.say_and_wait(
        `Ох, ${callname}, тоже бывают моменты, когда спрашиваешь у ${maru.elder_sibling_sex_title} совета?`,
      );
      await maru.say_and_wait(
        `Не волнуйся, я как следует всё, что знаю, расскажу ${you.name}.`,
      );
      await era.printAndWait(
        `${you.name}Выжав влагу из полотенца, которым вытирала пот, сложила его и убрала в сумку.`,
      );
      await you.say_and_wait(
        `${maru.name}Меня ведь младшие всегда так тепло принимают, вот я и думаю.`,
      );
      await you.say_and_wait(
        `Может быть — я говорю «может быть» — ${maru.name}, ${you.name}`,
      );
      await you.say_and_wait(`${maru.name}, каково желание?`);
      await maru.say_and_wait(
        `Н-да — словно садовник в цветнике: кладу семена в почву, заросшую сорняками.`,
      );
      await maru.say_and_wait(
        `Поливаю, рыхлю, потом удобряю — и жду, что бы ни менялось снаружи.`,
      );
      await maru.say_and_wait(
        `Бывает, налетит шторм, при рыхлении попадётся на редкость упрямый сорняк, но потом смотришь, как цветы своей упрямой силой пробиваются из земли.`,
      );
      await maru.say_and_wait(
        `Смотришь, как прекрасные цветы наконец раскрываются, и сквозь смесь чувств катятся слёзы радости — вот, думаю, в этом и смысл моего существования.`,
      );
      await you.say_and_wait(
        `Так что ${maru.name} всё это время тихо и упорно трудится.`,
      );
      await maru.say_and_wait(
        `Конечно, вот так вести за собой ещё наивных младших и ждать, когда ${
          maru.couple_title
        } расцветёт и принесёт плоды.`,
      );
      await maru.say_and_wait(`Все труды будут вознаграждены по заслугам.`);
      await era.printAndWait(
        `Без волнения ${maru.name} спокойно рассказала о своей мечте.`,
      );
      await you.say_and_wait(`…как красиво, ${maru.name}.`);
      await you.say_and_wait(
        `Большое спасибо, и впредь прошу приглядывать за мной.`,
      );
      await maru.say_and_wait(
        `С моей стороны тоже — прошу приглядывать за мной.`,
      );
      await era.printAndWait(
        `Хотя зимний холод ещё не отступил, ${maru.name} улыбкой согрела ${you.name}, и стало тепло.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = 'День святого Валентина';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, falcon, minoru, you, callname) => {
      await era.printAndWait(
        `Когда из тренерской квартиры, где живёшь, приходишь в Трейсен, замечаешь: воздух сегодня слаще обычного.`,
      );
      await era.printAndWait(
        `Смотришь, как студенты Трейсена с самого утра — не как обычно полумёртвые — сбиваются парами и возбуждённо обсуждают лица тех, кому несут подарки.`,
      );
      await era.printAndWait(
        `И только тогда понимаешь: снова День святого Валентина.`,
      );
      await era.printAndWait(
        `Хотя и думаешь, как быть, если какая-нибудь ${maru.uma_sex_title} принесёт шоколад, — но у дверей кабинета так никто и не появился поздороваться.`,
      );
      await you.say_and_wait(
        `Пусть все эти счастливчики взорвутся, пусть святой огонь ордена FFF спалит ${you.name} дотла.`,
        true,
      );
      await era.printAndWait(
        `Клянёшь всё на свете и при этом бежишь без цели, будто спасаясь от тягучей сладости в воздухе.`,
      );
      await era.printAndWait(`И тут на полной скорости врезаешься в кого-то.`);
      era.printButton(`「Извини」`, 1);
      await era.input();
      await era.printAndWait(
        `Столкновение было лёгким, но этот запах до странного знаком.`,
      );
      await maru.say_and_wait(`Халоу, ${callname}?`);
      await you.say_and_wait(`${maru.name}?`);
      await era.printAndWait(
        `Смотришь на ту, что стоит перед тобой, — ${maru.teen_sex_title} и огромный пакет шоколада, ${you.name} невольно погружается в раздумья.`,
      );
      await you.say_and_wait(`В этом году тоже столько?`);
      await maru.say_and_wait(
        `Младшие, что поступили в прошлом году, да ещё только что выпустившиеся из Трейсена ${maru.uma_sex_title}, и вот незаметно столько накопилось.`,
      );
      await era.printAndWait(
        `Так дело не пойдёт. Даже если есть этот шоколад на завтрак, обед и ужин вдвоём… нет, одному точно не съесть.`,
      );
      await you.say_and_wait(
        `И взять нельзя, и не взять нельзя — вот и ступор.`,
      );
      await era.printAndWait(`Есть способ как-то разобрать весь этот шоколад?`);
      await you.say_and_wait(
        `Ну, подарим шоколад фанатам, которые всё это время поддерживали.`,
      );
      await you.say_and_wait(`Если столько — на фан-подарки более чем хватит!`);
      await maru.say_and_wait(`Вот только где площадку взять?`);
      await era.printAndWait(`По-моему, `);
      era.printButton(
        `「Арендовать студию и временно сделать её площадкой!」`,
        1,
      );
      era.printButton(
        `「Да просто устроить уличное выступление на торговой улице!」`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`Звучит неплохо, тогда так и сделаем.`);
        await era.printAndWait(
          `${you.name}Известному режиссёру, с которым уже были на связи, задаёшь вопрос, нет ли на примете зала, — вскоре приходит ответ.`,
        );
        await era.printAndWait(
          `В ума-твиттере объявили, что вечером пройдёт встреча с фанатами, — и сразу куча репостов.`,
        );
        await era.printAndWait(
          `О том, что встреча с фанатами прошла идеально, можно не говорить: многие даже без шоколада рвались к ${maru.name} за рукопожатием.`,
        );
        await era.printAndWait(
          `Смотришь, как ${maru.name} три часа простояла с улыбкой — и это вселило в ${you.name} глубокое почтение к слову «идол».`,
        );
        await era.printAndWait(
          `На следующий день в журнале мод вышел заголовок «${maru.name} — тренд».`,
        );
      } else {
        await maru.say_and_wait(
          `Уличное выступление? Похоже на штуки, которые выкидывает компания Фалкон.`,
        );
        await maru.say_and_wait(`Может, даже будет неожиданно весело!`);
        await era.printAndWait(
          `Спрашиваешь у ${falcon.name}, как устроить внезапный концерт и как быстро удрать, когда ${
            minoru.name
          } пустится в погоню.`,
        );
        await era.printAndWait(
          `В ума-твиттере объявили, что вечером на торговой улице будет внезапный концерт, — и сразу куча репостов.`,
        );
        await era.printAndWait(
          `О том, что встреча с фанатами прошла идеально, можно не говорить: многие даже без шоколада рвались к ${maru.name} за рукопожатием.`,
        );
        await era.printAndWait(
          `Смотришь, как ${maru.name} три часа простояла с улыбкой — и это вселило в ${you.name} глубокое почтение к слову «идол».`,
        );
        await era.printAndWait(
          `Потом радушные лавочники бесплатно надарили кучу бытовых мелочей.`,
        );
      }
      await you.say_and_wait(`Наконец-то всё кончилось.`);
      await era.printAndWait(
        `Ответив по одному всем пылким фанатам, на сцене в полном беспорядке остались только ${you.name} вдвоём.`,
      );
      await you.say_and_wait(`Спасибо за труд. Правда, спасибо за труд.`);
      await era.printAndWait(
        `${you.name}С абсолютным почтением смотришь на ${maru.name}.`,
      );
      await era.printAndWait(
        `В лучах заката она словно неприкосновенное божество.`,
      );
      await maru.say_and_wait(
        `Большое спасибо Вам за поддержку идол-деятельности, ${maru.name}, впредь тоже прошу поддержки — а, это ${
          callname
        }.`,
      );
      await era.printAndWait(`На миг не знаешь, что ответить.`);
      await maru.say_and_wait(`Кстати, вот ещё это♪`);
      await era.printAndWait(
        `${maru.name}Достаёт из-за кулис красиво упакованную коробку шоколада.`,
      );
      await maru.say_and_wait(`С Днём святого Валентина, ${callname} ♪`);
      await era.printAndWait(`${you.name}Принимаешь от ${maru.name} шоколад.`);
      await maru.say_and_wait(
        `И впредь прошу идти вперёд вместе с ${maru.name}, ${callname} ♪`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_7: (() => {
    const title = 'Идол';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(`Тренировочная`);
      await era.printAndWait(`До Spring Stakes ещё две недели.`);
      await era.printAndWait(
        `Доделав последний документ, ${you.name} опускает ручку и делает долгий выдох.`,
      );
      await you.say_and_wait(`Наконец всё готово.`);
      await you.say_and_wait(`Но.`);
      await era.printAndWait(`Вопрос, который не отпускал уже давно.`);
      await era.printAndWait(
        `Его намертво давишь, нет, попросту не хочешь вспоминать.`,
      );
      await you.say_and_wait(`${maru.name}.`);
      await era.printAndWait(`Садовник.`);
      await you.say_and_wait(
        `Всегда привык(ла) встречать проблемы с позиции сильного.`,
      );
      await era.printAndWait(
        `Хочешь в роли наставника своим опытом как можно больше помочь тем милым маленьким ${maru.uma_sex_title}.`,
      );
      await you.say_and_wait(`Но путь садовника — мир не такой уж идеальный.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Извините за беспокойство.`,
      );
      await era.printAndWait(`Худенькая ${maru.uma_sex_title} входит.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Эм, скажите, Марузен-семпай здесь?`,
      );
      await you.say_and_wait(
        `${maru.name}Отошла по делам, ${you.name} сначала посиди здесь и немного отдохни.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Вот как… а, большое спасибо!`,
      );
      await era.printAndWait(
        `${you.name}Ставишь банку морковного сока на столик у дивана.`,
      );
      await era.printAndWait(
        `${you.name}Открываешь недосмотренную запись того, как ${maru.name} выступает на Asahi Hai.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Э, это же Марузен-семпай!`,
      );
      await you.say_and_wait(`${you.name}Тоже любишь смотреть записи?`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Ага! Крупный план финиша Марузен-семпай я пересматривала раз пять-шесть!`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Даже больше: если скопировать манеру хода Марузен-семпай, глядишь, и я спокойно возьму G3!`,
      );
      await you.say_and_wait(`…Вот оно как?`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Э… угу. Я рано вышла на полный режим, так что ещё в средней школе как скаковая ${maru.uma_sex_title} уже выходила на скачки.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Но хотя прошло три года, кроме победы в дебюте лучший результат — лишь пятое место в G3.`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}Держит банку морковного сока и смотрит на оранжевую жидкость внутри.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Хотя сил вложила полно, роста почти не было.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Только повторяла и повторяла одно и то же и так в тумане и прожила.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Я и думала: может, дело в моём методе.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Но лишь чуть покрутила это в голове и так и отложила.`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Может, я просто не гожусь в скаковые ${maru.uma_sex_title}, пора искать выход в другую сторону.`,
      );
      await era.printAndWait(
        `Договорив, ${maru.uma_sex_title} молча смотрит на завоёванные ${you.name} и ${maru.name} трофеи.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `Скаковая ${maru.uma_sex_title} мир — не тот добрый мир, где за труд всегда есть награда.`,
      );
      await era.printAndWait(`И всё же.`);
      era.printButton(`「Настанет день, когда труд воздастся」`, 1);
      era.printButton(`「Может, рано уйти — тоже благо」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`Настанет день, когда труд воздастся.`);
      } else {
        await you.say_and_wait(`Может, рано уйти — тоже благо.`);
      }
      await era.printAndWait(
        `Мысли спутались; наверное, эта ${maru.uma_sex_title} тоже так думает.`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `…Спасибо.`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `А, прости, я засиделась; раз Марузен-семпай так и не пришла, я тогда пойду.`,
      );
      await era.printAndWait(
        `Выбросив пустую банку в урну, ${maru.uma_sex_title} прощается с ${you.name}.`,
      );
      await you.say_and_wait(`Желаю ${you.name} победной удачи.`);
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `Угу, пока.`);
      await era.printAndWait(
        `С горькой улыбкой ${maru.uma_sex_title} тихо закрывает дверь тренировочной.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_9: (() => {
    const title = 'Неделя зала славы (наследование факторов)';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Актовый зал\n`);
      await era.printAndWait(
        `Неделя зала славы — один из важнейших праздников Трейсена.`,
      );
      await era.printAndWait(
        `В этот день многие прославленные ${maru.uma_sex_title} приходят в Трейсен с речами.`,
      );
      await era.printAndWait(
        `А этот опыт семпаев для только что дебютировавших / недавно дебютировавших ${maru.uma_sex_title} бесценен.`,
      );
      await era.printAndWait(
        `Из-за важности ${you.name} и ${maru.name} рано пришли в актовый зал ждать начала выступления.`,
      );
      await maru.say_and_wait(
        `Если сразиться с семпаями на скаковом поле, может выйти неожиданно весело♪`,
      );
      await era.printAndWait(
        `Глядя на стоящих на сцене легендарных ${maru.uma_sex_title}, ${maru.name} смотрит с предвкушением.`,
      );
      await era.printAndWait(
        `А ${you.name} рядом быстро ловит ключевые слова и заносит их в компьютер.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Легендарная ${maru.uma_sex_title} A`,
        `…Все знают, что этот мир создан Тремя богинями…`,
      );
      await era.printAndWait(
        `Выступающая на сцене легендарная ${maru.uma_sex_title} вдруг заговорила о Трёх богинях.`,
      );
      await maru.say_and_wait(`Кстати, ${callname} знаешь?`);
      await era.printAndWait(
        `Сидящая рядом ${maru.name} переводит взгляд на ${you.name}.`,
      );
      await maru.say_and_wait(
        `Говорят, если помолиться статуям Трёх богинь во внутреннем дворе, можно получить благословение из другого мира.`,
      );
      await maru.say_and_wait(`И даже случается непостижимая сила.`);
      await era.printAndWait(
        `Вокруг гремит овация, выступавшая ${maru.uma_sex_title} сходит со сцены, и мероприятие переходит к следующему этапу.`,
      );
      await era.printAndWait(
        `Пользуясь паузой, ${you.name} поворачивается к ${maru.name}.`,
      );
      await era.printAndWait(
        `Переодевшаяся в юбилейный наряд ${maru.sex} как раз ждёт ${you.name} ответа.`,
      );
      era.printButton(
        `「Я жду момента, когда ${maru.name} взойдёт на сцену.»`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `Что? ${callname} у тебя такое высокое мнение обо мне?`,
      );
      era.printButton(
        `Такая нежная и зрелая ${maru.elder_sibling_sex_title} встречается довольно редко.`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`Дальше без усердной тренировки никак!`);
      await you.say_and_wait(`Давай выкладываться вместе!`);
      await era.printAndWait(
        `Вернувшись в тренерскую, ${you.name} сидите вместе и смотрите видеокассеты до глубокой ночи.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_sprg_sta: (() => {
    const title = 'Перед Spring Stakes · Огненная орхидея';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Комната подготовки`);
      await era.printAndWait(
        `Spring Stakes как прелюдия к Satsuki Sho — место, где многие ${maru.uma_sex_title} выкладываются на полную.`,
      );
      await era.printAndWait(`Однако в этот момент.`);
      await you.say_as_passer_by_and_wait(
        `Сотрудник`,
        `Уже трижды проверили: включая ${maru.name}, всего лишь пять Скаковая ${maru.uma_sex_title}.`,
      );
      await you.say_and_wait(`А… спасибо.`);
      await era.printAndWait(
        `Для ${maru.name} степень удовольствия на скаковом поле прямо пропорциональна уровню скачек и участвующим ${maru.uma_sex_title}.`,
      );
      await era.printAndWait(
        `Иными словами, чем выше уровень скачек, тем выше число и качество участвующих ${maru.uma_sex_title}, и ${maru.name} тем сильнее наслаждается.`,
      );
      await era.printAndWait(
        `Если бы только этим всё и ограничивалось — ещё ладно.`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `А, я знаю: победа в этой скачке непременно за ${maru.name}.`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}B`,
        `Ещё есть о чём думать? Если не ${maru.name} победит, я никак не представлю, как кто-то ещё справится с ней — ${
          maru.sex
        }.`,
      );
      await you.say_as_passer_by_and_wait(
        `Участвующие Скаковая ${maru.uma_sex_title} A`,
        `Уже без разницы: дальше всё равно ${maru.name} победит, так что лучше сберегу силы для следующих скачек.`,
      );
      await you.say_as_passer_by_and_wait(
        `Участвующие Скаковая ${maru.uma_sex_title} A`,
        `В конце концов, такого монстра никто не победит.`,
      );
      await maru.say_and_wait(`${callname} , я уже готова`);
      await era.printAndWait(
        `Неуместный голос прерывает ${you.name} воспоминания.`,
      );
      await you.say_and_wait(
        `М-м, в этот раз тоже как следует наслажусь скачкой.`,
      );
      await maru.say_and_wait(
        `Да, но говорят, в этот раз число участников едва дотягивает до минимума.`,
      );
      await maru.say_and_wait(`Вот бы все участники были чуть активнее.`);
      await era.printAndWait(
        `Похоже, у ${maru.name} настроение не очень, и уши тоже поникли.`,
      );
      era.printButton(
        `${maru.name}, давай как следует покажем зрителям в зале плоды наших тренировок`,
        1,
      );
      era.printButton(
        `Если увидят, как бежит ${maru.name}, я верю, ${maru.couple_title} непременно передумает`,
        2,
      );
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `М-м, ${callname} смотри как следует моё выступление с трибун!`,
        );
        await maru.say_and_wait(
          `Как следует запечатлей этот огненно-красный силуэт в сердце!`,
        );
      } else {
        await maru.say_and_wait(`……`);
        await you.say_and_wait(
          `Пусть ${maru.name} спиной снова зажжёт надежду в тех, кто немного скис`,
        );
        await you.say_and_wait(`Как на наших обычных тренировках.`);
        await maru.say_and_wait(`Верно!`);
        await era.printAndWait(
          `${maru.name}Поникшие уши снова встали торчком.`,
        );
      }
      await era.printAndWait(
        `Хотелось ещё сказать, но в комнату подготовки уже донёсся звук, как сотрудники настраивают микрофоны.`,
      );
      await maru.say_and_wait(`Пора мне выходить, ${callname} Увидимся!`);
      await you.say_and_wait(`Почему вдруг кольнуло беспокойство`, true);
      await era.printAndWait(
        `${you.name}Глубоко запрятав это беспокойство, смотришь, как любимая уходит на скаковое поле.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sprg_sta_win: (() => {
    const title = 'После Spring Stakes · Начало растерянности';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Никаких неожиданностей: ${maru.name} разгромила всех.`,
      );
      await era.printAndWait(
        `Потому что ${maru.uma_sex_title} того же поколения одна за другой уклонялись от скачки.`,
      );
      await era.printAndWait(
        `Среди соперниц ${maru.uma_sex_title} даже лучшая выиграла лишь какой-то безвестный G3.`,
      );
      await era.printAndWait(
        `Разве от этой победы и впрямь чувствуется радость?`,
      );
      await you.say_as_passer_by_and_wait(
        `Комментатор`,
        ` ${maru.name} ! ${maru.name} финишировала!`,
      );
      await you.say_as_passer_by_and_wait(
        `Комментатор`,
        `Огромный отрыв! Это ${maru.name} — подавляющая победа!`,
      );
      await maru.say_and_wait(`……`);
      maru.print(`Разве от этой победы и впрямь чувствуется радость?`);
      await you.say_and_wait(`${maru.name}?`);
      await you.say_as_passer_by_and_wait(
        `Фанат A`,
        `${maru.name}! ${maru.name}!`,
      );
      await you.say_as_passer_by_and_wait(
        `Фанат B`,
        `Я так и знал(а): это ${maru.name} победила!`,
      );
      await you.say_as_passer_by_and_wait(
        `Фанат A`,
        `Не зря зовут Super Car эту ${maru.uma_sex_title}! Я всё-таки не ошибся!`,
      );
      maru.print(`Что-то я устала.`);
      await you.say_as_passer_by_and_wait(
        `Фанат A`,
        `Так и давай: подавляющей силой сметай всех слабаков!`,
      );
      maru.print(
        `И в комнате подготовки, когда переодевалась в победный костюм, — тоже.`,
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${maru.uma_sex_title} A`,
        `Всё равно не выиграть, к чему тогда так надрываться.`,
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${maru.uma_sex_title} A`,
        `Так называемая традиция ${maru.uma_sex_title} как идолов бега давно должна уступить стримерам.`,
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${maru.uma_sex_title} A`,
        `Проще пойти за модой, уйти в стримеры и на этом завершить карьеру.`,
      );
      maru.print(
        `После выступления проходишь мимо шепчущихся ${maru.uma_sex_title}.`,
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${maru.uma_sex_title} B`,
        `Скаковая ${maru.uma_sex_title} — эта профессия всё равно лишь охотничьи угодья для одарённых.`,
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${maru.uma_sex_title} B`,
        `Для обычных вроде нас скачка — лишь раз за разом становиться посмешищем на подпевках. Тошно.`,
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${maru.uma_sex_title} B`,
        `Вот потому тех, кто на траве ещё чувствует радость, понять невозможно.`,
      );
      await you.say_as_passer_by_and_wait(
        `Скаковая ${maru.uma_sex_title} B`,
        `Фуаа, а ведь я тогда ещё мечтала стать скаковой ${maru.uma_sex_title}, а сейчас даже вспоминать стыдно.`,
      );
      era.drawLine();
      await you.say_and_wait(` ${maru.name}?`);
      await era.printAndWait(
        ` ${maru.name} с абсолютным преимуществом уверенно продолжила победную серию.`,
      );
      await era.printAndWait(
        `Хоть это всего лишь разведка перед Satsuki Sho, но и в самом Satsuki Sho, скорее всего, проблем не будет.`,
      );
      await era.printAndWait(`Так думая, ты открываешь дверь.`);
      await maru.say_and_wait(`А, ${callname}, ты за мной?`);
      await era.printAndWait(` ${maru.name} выглядит почти как всегда.`);
      await maru.say_and_wait(
        ` ${maru.elder_sibling_sex_title}, как я выступила?`,
      );
      era.printButton(`「…Может быть」`, 1); //be1
      era.printButton(`「…… ${maru.name}.」`, 2);
      era.print(
        '【Внимание: выбирай осторожно, иначе всё станет необратимо!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`Что?`);
        era.printButton(`А, прости, я на секунду отвлёкся(лась).`, 1);
        await era.input();
        await you.say_and_wait(
          `Как и ожидалось от ${maru.elder_sibling_sex_title}, очень здорово!`,
        );
        await maru.say_and_wait(`Угу, я тоже так думаю.`);
        await maru.say_and_wait(`М-м — а куда теперь лучше пойти поесть?`);
        await maru.say_and_wait(`${callname}Есть что посоветовать?`);
        await you.say_and_wait(`Давай заглянем в Saizeriya, там вкусно.`);
        await maru.say_and_wait(`Ага! Тогда пойдём попробуем вместе.`);
      } else {
        await maru.say_and_wait(`Оя, ${callname}, что такое?`);
        await you.say_and_wait(`Завтра вечером ты свободна?`);
        await you.say_and_wait(
          `Хочу кое-что сказать. Давай поговорим на крыше.`,
        );
        await maru.say_and_wait(`А здесь нельзя поговорить?`);
        await you.say_and_wait(`Прости, позволь мне один раз настоять. Прошу.`);
        await maru.say_and_wait(`Э? ${callname}?`);
        await you.say_and_wait(`Прошу.`);
        await era.printAndWait(`${you.name} низко опускает голову.`);
        await maru.say_and_wait(`И даже до такого…`, true);
        await maru.say_and_wait(`Раз уж ${callname} так говорит.`);
        await maru.say_and_wait(`Я поняла.`);
        await era.printAndWait(
          ` ${maru.name} смотрит на тебя с несколько тревожным лицом.`,
        );
        await you.say_and_wait(
          `Тогда завтра вечером в 9 встречаемся на школьной крыше.`,
        );
        await era.printAndWait(
          `Спина уже взмокла от пота. Хоть ты и ждал(а) худшего, получить у ${maru.name} согласие всё же заставило ${you.name} выдохнуть с облегчением.`,
        );
        await maru.say_and_wait(
          `${maru.elder_sibling_sex_title}Я сделала что-то, от чего ${callname} пострадал(а)?`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_12: (() => {
    const title = 'Фестиваль благодарности фанатам';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Фестиваль благодарности фанатам — праздник, который проводят, чтобы поблагодарить фанатов, всегда поддерживающих ${maru.uma_sex_title} на скаковом поле.`,
      );
      await era.printAndWait(
        `В этот день Трейсен открывает ворота, и учащиеся Трейсена выступают на главной сцене по плану студсовета и на нескольких побочных.`,
      );
      await era.printAndWait(
        `Как Скаковая ${maru.uma_sex_title} продвигающиеся по пути ${maru.uma_sex_title}, часто получают ещё больше внимания.`,
      );
      await era.printAndWait(`Танцевальный зал\n`);
      await maru.say_and_wait('Раз, два, три, четыре — легко♪');
      await maru.say_and_wait(
        'Пять, шесть, семь, восемь — вообще без проблем♪',
      );
      await era.printAndWait(
        `${you.name}Смотришь, как ${maru.name} проводит последнюю репетицию.`,
      );
      await maru.say_and_wait(`${callname}${you.name}Ну как, нравится?`);
      era.printButton(`「Ностальгическая песня」`, 1);
      await era.input();
      await era.printAndWait(
        `В ушах звучит андеграунд начала века: яростная дробь барабанов, бодрый ритм, и в такт шагает ${maru.name}.`,
      );
      await era.printAndWait(
        `В забытьи будто возвращаешься в студенческие годы — когда после занятий собирались по двое-трое и обсуждали свежие сборники CD.`,
      );
      await maru.say_and_wait(
        `${callname}Это же сейчас самая модная поп-песня, знаешь? Так за временем не угнаться.`,
      );
      await maru.say_and_wait(`Пора мне выходить.`);
      await maru.say_and_wait(
        `${callname}Смотри из зала и хорошенько наслаждайся.`,
      );
      await era.printAndWait(`Часть гостей очень любит такую ретро-музыку.`);
      await era.printAndWait(
        `${maru.name}Она уводит эту часть гостей в мираж прошлого.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sister_annoyance: (() => {
    const title = (maru) => `${maru.elder_sibling_sex_title} — тревоги`;
    /**
     * 训练员鼓励丸善斯基，丸善斯基在训练员相信自己的时候重整旗鼓
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Крыша`);
      era.println();
      await era.printAndWait(
        `Разобрав бумаги, которые нужно было закрыть сегодня, ты выходишь на крышу.`,
      );
      await era.printAndWait(
        `После скачки ${maru.name} выглядит странновато, и в разговоре тоже слегка витает в облаках.`,
      );
      await era.printAndWait(
        `Хотя это может быть и иллюзия, ты хочешь как друг глубже понять её проблему — ${maru.sex}.`,
      );
      await you.say_and_wait(
        `Если получится закрыть всё разом — лучше и не придумать.`,
      );
      await era.printAndWait(
        `Веришь, что ${maru.name} хватит сил легко пережить любую неудачу.\n`,
      );
      await you.say_as_passer_by_and_wait(
        `Врач`,
        `${maru.name}Повреждена часть кости голени.`,
      );
      await you.say_as_passer_by_and_wait(
        `Врач`,
        `Если продолжать, ходьба и бег могут оказаться ограничены.`,
      );
      await you.say_as_passer_by_and_wait(
        `Врач`,
        `Лучше прекратить тренировки и как следует отдохнуть какое-то время.`,
      );
      await you.say_and_wait(`Понятно.`);
      await era.printAndWait(
        `Ты убираешь справку в портфель и уже собираешься уйти, когда тебя окликают.`,
      );
      await you.say_as_passer_by_and_wait(
        `Врач`,
        `Ты тренер ${maru.name}, да?`,
      );
      await you.say_and_wait(`Да.`);
      await you.say_as_passer_by_and_wait(
        `Врач`,
        `${maru.name} — ноги хрупче, чем казалось.`,
      );
      await you.say_as_passer_by_and_wait(
        `Врач`,
        `Может, поэтому ты уже давно плохо спишь.`,
      );
      await you.say_and_wait(`Да.`);
      await you.say_as_passer_by_and_wait(
        `Врач`,
        `Как тренеру столь заметной Скаковая ${maru.uma_sex_title}, давление куда больше, чем кажется.`,
      );
      await you.say_as_passer_by_and_wait(`Врач`, 'Берегите себя.');
      await you.say_and_wait(`…Спасибо.`);
      await maru.say_and_wait(`${callname}?`);
      await era.printAndWait(
        `Мысли прерывает ${maru.name} — её слова, а до условленного времени ещё свободно минут десять.`,
      );
      await you.say_and_wait(`Э? А, я тоже как раз только пришла.`);
      await era.printAndWait(
        `В белом платье ${maru.uma_sex_title} появляется на крыше.`,
      );
      await maru.say_and_wait(` ${callname} куда нетерпеливее, чем я думала.`);
      await you.say_and_wait(
        `Да. Сегодня хорошая погода, поэтому и хотелось провести время с ${maru.name} вместе.`,
      );
      await you.say_and_wait(
        `И если приглядеться, ${maru.name} сегодня ещё красивее обычного. И, кажется, пахнет жасмином.`,
      );
      await maru.say_and_wait(
        `Всё-таки ${callname} так редко зовёт лично — нельзя же выйти, не принарядившись.`,
      );
      await you.say_and_wait(
        `Раз так, то невежливо выходит уже с моей стороны.`,
      );
      await era.printAndWait(
        `Не зная, с чего начать, ты замолкаешь, и в итоге ${maru.name} первой поднимает тему.`,
      );
      await maru.say_and_wait(
        ` ${callname} всегда такой старательный вид, ${maru.sex_code !== 1 ? ' красотка' : 'красавчик'}Я так растрогана.`,
      );
      await maru.say_and_wait(
        `Всё это время я думала, как дать ${callname} расслабиться, и не думала, что ${callname} сам(а) это предложит.`,
      );
      await maru.say_and_wait(
        `На самом деле не нужно всё время держать нервы натянутыми, побольше положись на ${maru.elder_sibling_sex_title}  меня.`,
      );
      await era.printAndWait(
        `Ободрённые ${maru.name} нервы тоже понемногу отпускают.`,
      );
      await you.say_and_wait(
        `Ясно. И дальше тоже прошу ${maru.name} ${maru.elder_sibling_sex_title}  опекать меня.`,
      );
      await you.say_and_wait(`Ну что ж, пора к делу.`);
      await era.printAndWait(
        `Голова, что от чрезмерного напряжения была совсем пустой, понемногу собирает мысли.`,
      );
      await you.say_and_wait(`Позволь мне узнать тебя получше.`);
      await maru.say_and_wait(
        `Разве мы с ${callname}  не всё время вместе? С чего это вдруг?`,
      );
      await you.say_and_wait(`Нет, не так.`);
      await era.printAndWait(
        `Ты решительно качаешь головой и смотришь ей прямо в глаза — ${maru.sex}.`,
      );
      await you.say_and_wait(
        `Хотя я и знаю, что лезть в чужие тайны — нехорошо.`,
      );
      await you.say_and_wait(
        `Но когда я отдыхал(а) в кабинете, случайно увидел(а) ${maru.name} в унынии.`,
      );
      await you.say_and_wait(
        `Мне было тяжело, будто камень давил на сердце, и только тогда я понял(а), что ${maru.name} знаю ещё слишком мало.`,
      );
      await you.say_and_wait(`Так что это не просьба, а заявление.`);
      era.printButton(`「Я хочу узнать побольше про ${maru.name} 」`, 1);
      await era.input();
      await era.printAndWait(
        `Ты видишь, как у ${maru.name} зрачки вдруг расширяются, быстро моргает, хочет ускользнуть от твоего взгляда, но сразу берёт себя в руки.`,
      );
      await maru.say_and_wait(
        `Не ответить с той же серьёзностью никак нельзя.`,
      );
      await maru.say_and_wait(` ${callname}  что хочешь узнать?`);
      await you.say_and_wait(
        `Я хочу знать, почему ${maru.name} в последнее время такая подавленная.`,
      );
      await you.say_and_wait(
        `Уже не чувствуешь радости? Или потому, что ощутила, как у бегущих Скаковая ${maru.uma_sex_title} на сердцах желание всё бросить?`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `${maru.name}погружается в сомнения, ${maru.sex}  думает, говорить ли мне свои настоящие мысли.`,
      );
      await maru.say_and_wait(`…Прости.`);
      await era.printAndWait(`${maru.name} голос кажется совсем подавленным.`);
      era.printButton(`「Нет, это мне стоило извиниться.」`, 1);
      await era.input();
      await you.say_and_wait(
        `На самом деле извиняться должен(на) я: я слишком спешил(а).`,
      );
      await you.say_and_wait(
        `Я буду ждать того дня, когда ты сам(а) придёшь и всё мне выскажешь.`,
      );
      await you.say_and_wait(
        `Так что расправь плечи, ты самая прекрасная ${maru.uma_sex_title}.`,
      );
      await maru.say_and_wait(`3q, ${callname}.`);
      await era.printAndWait(`${maru.name} возвращается к прежнему состоянию.`);
      await maru.say_and_wait(`Вот что значит надёжный взрослый.`);
      await maru.say_and_wait(
        `Сейчас такое чувство, будто того, о ком я всегда заботилась, ${you.sex_code !== 1 ? ' младшая сестра' : 'младший брат'} вдруг предлагает заботиться обо мне.`,
      );
      await maru.say_and_wait(
        `Как ${maru.elder_sibling_sex_title} мне и правда смешанные чувства—`,
      );
      await era.printAndWait(
        `${maru.name}Будто смотрит на того, с кем выросла, ${you.sex_code !== 1 ? ' младшая сестра' : 'младший брат'} — такой ласковый взгляд.`,
      );
      await maru.say_and_wait(`Ну что, договорились—`);
      await maru.say_and_wait(
        `Что бы ни случилось, всё обсуждай с ${maru.elder_sibling_sex_title}  мной, хорошо?`,
      );
      era.printButton(
        `「Что бы ни случилось, я всё проясню с ${maru.name}.」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `Всё-таки как надёжная ${maru.elder_sibling_sex_title}, какую бы проблему ни встретила, легко решишь, да?`,
      );
      await maru.say_and_wait(`Тогда так и решили.`);
      await you.say_and_wait(`И с моей стороны тоже.`);
      await maru.say_and_wait(
        `Кстати, сегодня погода славная, давай прокатимся на Та—`,
      );
      await you.say_and_wait(`Давай.`);
      await you.say_and_wait(`А ничего не забыл(а)?`, true);
      await era.printAndWait(
        `Вы в смехе и разговорах идёте к Та. А следом крик ужаса разносится по всему Трейсену.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_16: (() => {
    const title = (maru) => `Добрый вечер, это ${maru.name} ~`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, minoru, you, callname) => {
      await era.printAndWait(`Квартира.`);
      await you.say_and_wait(`Дальнейший план тренировок пока на этом`, true);
      await era.printAndWait(
        `Под мягким светом ламп ${you.name} сидит за компьютером и разбирает дела, накопившиеся за выходные. В отличие от дневного Трейсена, где повсюду звонкие бодрые крики, ночное общежитие тренеров кажется особенно тихим.`,
      );
      await you.say_and_wait(`Уже почти двенадцать?`, true);
      await era.printAndWait(
        `Отправив последний файл председателю, ${you.name} трёт усталые глаза и пластом падает на диван.`,
      );
      await you.say_and_wait(`Пойду приму душ и хорошенько высплюсь.`, true);
      await era.printAndWait(
        `Плотно смыкаешь глаза, словно так можно переварить всю усталость дня. Затем глубоко втягиваешь полную грудь воздуха и выгоняешь из тела всю дневную раздражённость.`,
      );
      await era.printAndWait(`бзз-бзз-бзз`);
      await you.say_and_wait(
        `В такой час и спам-звонков быть не должно, да?`,
        true,
      );
      await era.printAndWait(
        `Тело ни за что не хочет шевелиться, но инстинкт офисного раба всё равно заставляет открыть телефон.`,
      );
      await you.say_and_wait(`${maru.name}?`);
      await era.printAndWait(
        `Хотя и недоумеваешь, почему твоя подопечная ${maru.uma_sex_title} звонит глубокой ночью, всё равно берёшь трубку без колебаний.`,
      );
      await maru.say_and_wait(
        `Хай~ ${callname}, сегодня вечером погода ну просто супер~`,
      );
      await you.say_and_wait(
        `У меня тут, кроме привычных пейзажей, ничего особенного`,
      );
      await you.say_and_wait(`И ещё,`);
      await era.printAndWait(
        `Глубоко втягиваешь полную грудь воздуха, чтобы случайно не выплеснуть ещё не выгнанную раздражённость.`,
      );
      era.printButton(
        `「Если засиживаться допоздна, кожа сморщится, живо марш спать!」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `Ну не вынести уже, ><! ${callname} Только и сыплешь этими «Александр»-словами, так дальше одна дорога — 3166.`,
      );
      await era.printAndWait(
        `Глядя на текстовый смайл в телефоне, целых десять секунд роешься в памяти, пока не вспоминаешь, как им пользоваться.`,
      );
      await you.say_and_wait(`Кстати, ${maru.name} с чего вдруг звонок?`);
      await maru.say_and_wait(
        `Проснулась, а обратно уже не уснуть, так что решила просто заскочить к ${callname}.`,
      );
      await you.say_and_wait(`Вот как?`);
      await era.printAndWait(
        `Кажется, прозвучало что-то нешуточное, но ты всё равно продолжаешь слушать.`,
      );
      await maru.say_and_wait(
        `Сначала, когда не спалось, было совсем «жить незачем», но глядя на луну за окном, настроение стало будто диван в теме урвала, особенно эта струйка ночной прохлады, когда проезжала мимо Трейсена, — прямо душа в пляс⭐`,
      );
      era.printButton(`「Неужели—」`, 1);
      await era.input();
      await era.printAndWait(
        `Не успеваешь переодеться в форму тренера — дверь временного жилья уже открывается.`,
      );
      await maru.say_and_wait(`Добрый вечер, ${callname} `);
      await you.say_and_wait(` Э?`);
      await era.printAndWait(
        `и всё же ${maru.sex} — в её улыбке видишь своё изумлённое лицо`,
      );
      await maru.say_and_wait(` ${callname}?`);
      era.drawLine();
      await era.printAndWait(
        `После порции нотаций ${maru.name} чинно сидит на диване в позе сэйдза.`,
      );
      await maru.say_and_wait(`Большое спасибо♪`);
      await era.printAndWait(
        `Затем вместе с внезапно нагрянувшей гостьей убираешь хлам со стола и протягиваешь растворимый чай — ${maru.sex}.`,
      );
      await era.printAndWait(
        `Глядя, как маленькими глоточками тянет чай ${maru.name}. Не удерживаешься и вздыхаешь.`,
      );
      await era.printAndWait(
        `Так поздно отпускать её одну домой тоже опасно, но и просто так оставлять студентку на ночь нельзя — ${maru.sex}.`,
      );
      await you.say_and_wait(`И что теперь делать?`, true);
      await maru.say_and_wait(`Слушай, ${callname}?`);
      await era.printAndWait(
        `${maru.name} в ожидании ответа. Здесь всё-таки лучше\n`,
      );
      era.printButton(`Пусть ${maru.sex} останется сегодня на ночь`, 1);
      era.printButton(`「Настоять и проводить её домой — ${maru.sex}」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`${callname}Выглядишь неважно.`);
        await you.say_and_wait(
          `Только что над планом тренировок на следующую неделю — что бы ещё улучшить, — оттого и вид такой.`,
          true,
        );
        await maru.say_and_wait(`${callname} Спасибо за труды.`);
        await era.printAndWait(
          `Тебя ${maru.name} привычно гладит по голове: поначалу сопротивление было яростным, но со временем осталось только промычать пару раз — последний оплот тренерского достоинства.`,
        );
        await maru.say_and_wait(`Прости, больше так не буду.`);
        await era.printAndWait(
          `В отличие от прежних вежливо-отмазочных, в этом извинении больше вины за то, что заставила тебя волноваться.`,
        );
        await era.printAndWait(
          `Смотришь: ${maru.sex} такая жалкая — сердце всё равно не каменеет, так что снова вздыхаешь.`,
        );
        await you.say_and_wait(
          `Так поздно отпускать неспокойно, оставайся сегодня ночевать здесь.`,
        );
        await era.printAndWait(
          `Что там папарацци, завтрашние заголовки скандалов, ${
            minoru.name
          } холодный взгляд, выговор и зарплата за месяц — всё уже неважно.`,
        );
        await you.say_and_wait(`Спи на моей кровати, я переночую на диване.`);
        await maru.say_and_wait(`Мм— как-то жалко получается.`);
        await you.say_and_wait(
          `У ночной главной виновницы запросов хоть отбавляй!`,
        );
        await maru.say_and_wait(`О-чень ви-но-ва-та!`);
        await you.say_and_wait(`Не надо такими загадочными формулировками.`);
        await era.printAndWait(
          `Словно любовная комедия, которая бывает только в galgame, случилась в реальности — вроде бы радоваться надо.`,
        );
        await era.printAndWait(
          `Но стоит подумать, что уже во всеоружии папарацци сняли, как ты глубокой ночью впускаешь ${maru.name} в дверь, назавтра выходит заголовок, и вот уже ${
            minoru.name
          } смотрит холодным взглядом — и самое главное, зарплата улетает.`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`${you.name}Проводишь весьма мучительную ночь.`);
      } else {
        await you.say_and_wait(
          `…… ${maru.name}, я всё-таки отведу тебя домой.`,
        );
        await maru.say_and_wait(`Э? Правда?`);
        await era.printAndWait(
          `После яростной перепалки ты всё-таки уговариваешь ${maru.name} вернуться в квартиру, где она живёт.`,
        );
        await era.printAndWait(
          `И невдомёк тебе: ${maru.sex} как раз этого и ждала.`,
        );
        await maru.say_and_wait(
          `Уже так поздно, ${
            callname
          } лучше останься ночевать у меня: папарацци здесь, как ни странно, полно.`,
        );
        await maru.say_and_wait(
          `Звук нашей перепалки их, небось, уже всех разбудил?`,
        );
        await era.printAndWait(
          `Здешний ${callname}, ты же не хочешь завтра красоваться в заголовках светской хроники?`,
        );
        await era.printAndWait(`Вдруг понимаешь: вот он, настоящий капкан.`);
        await maru.say_and_wait(`Тогда, ${callname}. Спокойной ночи!`);
        await era.printAndWait(
          `Укрываешься ${maru.name} — её запасным пледом — и проводишь ночь на диване.`,
        );
        await era.printAndWait(
          `На следующий день твоя дуэль умов с папарацци, учуявшими запах сенсации, — уже совсем другое приключение.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = 'Перед Satsuki Sho · ещё раз';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Перед скачкой · на пресс-конференции`);
      await you.say_as_passer_by_and_wait(
        `Журналист A`,
        `Большая честь взять интервью у ${maru.actual_name_with_title}.`,
      );
      await you.say_as_passer_by_and_wait(
        `Журналист A`,
        `Скажите, ваша цель и на этот раз — победа в Satsuki Sho?`,
      );
      await maru.say_and_wait(
        `Да, так мы решили после разговора с моим тренером.`,
      );
      await you.say_as_passer_by_and_wait(
        `Журналист B`,
        `Извините, что перебиваю: слышал, на прошлых Spring Stakes заявились Скаковая ${maru.uma_sex_title} всего пятеро, едва прошедших минимальный допуск.`,
      );
      await you.say_as_passer_by_and_wait(
        `Журналист B`,
        `Можно ли считать, что Скаковая ${maru.uma_sex_title} решили, что не справятся с ${maru.name}, поэтому дружно уклонились от скачки?`,
      );
      await maru.say_and_wait(
        `Вопросы по Spring Stakes — к моему тренеру, здесь я комментировать не буду.`,
      );
      await you.say_as_passer_by_and_wait(
        `Журналист C`,
        `Моя очередь. Скажите, вас называют Super Car — дальше вы идёте на Derby с целью взять Тройную корону без поражений?`,
      );
      await maru.say_and_wait(`Пока цель намечена такая.`);
      await you.say_as_passer_by_and_wait(
        `Журналист C`,
        `Понятно, большое спасибо.`,
      );
      await maru.say_and_wait(`Что вы, не стоит.`);
      era.drawLine({ content: 'После пресс-конференции' });
      await era.printAndWait(`Комната подготовки\n`);
      await you.say_and_wait(
        `${maru.name}Готова? Дальше твоя очередь выходить.`,
      );
      await maru.say_and_wait(`Уже готова.`);
      await you.say_and_wait(`Как всегда, беги свободно, как сама захочешь.`);
      await maru.say_and_wait(
        `Хе-хе, в этот раз ${callname}, точно попадёшься на крючок моего бега.`,
      );
      await maru.say_and_wait(`Как же жду, когда этот миг настанет—`);
      await maru.say_and_wait(`А, почти пора выходить. Тогда до встречи!`);
      await you.say_and_wait(`Пусть всё пройдёт гладко.`, true);
      await maru.say_and_wait(`Мгм.`);
      await era.printAndWait(`${maru.name}направилась на скаковое поле.`);
      await you.say_and_wait(
        `…… ${maru.name}, я всё время буду смотреть на тебя.`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = 'После Satsuki Sho · бег, прекрасный как пламя';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Сцена победительницы\n`);
      await era.printAndWait(
        `Персонал хлопочет, чтобы аппаратура сцены победительницы работала как надо.`,
      );
      await you.say_as_passer_by_and_wait(
        `Сотрудник A`,
        `Сцена победительницы вот-вот начнётся, последняя настройка!`,
      );
      await you.say_as_passer_by_and_wait(
        `Сотрудник B`,
        `Ещё раз проверяю позиции криоджетов! Разумеется, это ${maru.name} победит.`,
      );
      await you.say_as_passer_by_and_wait(
        `Сотрудник B`,
        `Ещё с дебютной скачки ${maru.sex} у меня на радаре.`,
      );
      await you.say_as_passer_by_and_wait(
        `Сотрудник C`,
        `Свет ещё левее! А я слежу с Hopeful Stakes.`,
      );
      await you.say_as_passer_by_and_wait(
        `Сотрудник C`,
        `Хотя слухи ходили: есть очень круто бегающая ${maru.uma_sex_title}, но пока не увидишь вживую — не поймёшь.`,
      );
      await you.say_as_passer_by_and_wait(
        `Сотрудник B`,
        `Всё готово! Победительницей следующего Tokyo Yushun точно снова будет ${maru.sex} !`,
      );
      await you.say_as_passer_by_and_wait(
        `Сотрудник A`,
        `Всем внимание! По местам! Приготовиться!`,
      );
      await era.printAndWait(`Как и ожидалось, ${maru.name} одержала победу.`);
      await era.printAndWait(
        `И в миг финишного рывка, и в номере в центре сцены победительницы — пленившая столько фанатов ${maru.name}.`,
      );
      await era.printAndWait(`С довольной улыбкой вернулась в комнату отдыха.`);
      era.printButton(`「Спасибо за работу, выступление было блестящим.»`, 1);
      await era.input();
      await era.printAndWait(
        `Осторожно снимаешь с ${maru.name} сапоги и от щиколоток до бёдер бережно дозируешь силу массажа.`,
      );
      await you.say_and_wait(
        `Что и говорить — первая скачка королевского пути. И пресс-конференция, и сама скачка, и сцена победительницы — не чета Asahi Hai, где бежала раньше, хоть тот тоже G1.`,
      );
      await you.say_and_wait(
        `Дальше будут скачки ещё грандиознее, ${maru.name} ——`,
      );
      await era.printAndWait(
        `Минут пять массажа: пальцы мягко давят на внутреннюю сторону бёдер, ты поглядываешь, как ${maru.name} реагирует, и продолжаешь разговор.`,
      );
      await maru.say_and_wait(
        `М~ спасибо, ${callname} за такую заботу. Не то чтобы я едва шевелюсь от усталости: ${maru.elder_sibling_sex_title} я сыта — и душой, и телом.`,
      );
      await era.printAndWait(
        `Улыбаясь, ${maru.name} то и дело выдаёт тихие вздохи.`,
      );
      await maru.say_and_wait(
        `Вот так пусть ещё больше ${maru.uma_sex_title} увидят мою спину, ${maru.couple_title} наверняка тоже станет мечтать бежать по скаковому полю.`,
      );
      await maru.say_and_wait(
        `А потом в упорных тренировках понемногу откроют радость бега.`,
      );
      await maru.say_and_wait(
        `И тогда я буду рада смотреть, как младшие тянутся за моей спиной и стараются.`,
      );
      await era.printAndWait(
        ` ${maru.name} глаза, от слабой боли и лёгкого онемения ещё ярче, смотрят тебе прямо в глаза.`,
      );
      await you.say_and_wait(
        `М, до Tokyo Yushun через месяц надо подтянуть выносливость.`,
      );
      await maru.say_and_wait(`М— так где бы теперь отпраздновать?`);
      await era.printAndWait(
        `Когда массаж кончился, так и не насытившись, ${maru.name} сидя на месте, испускает довольный вздох.`,
      );
      await maru.say_and_wait(
        `Ресторан высокого класса? Или демократичную Сайзерию? Или`,
      );
      era.printButton(`「Давай просто отметим в кабинете тренера!」`, 1);
      await era.input();
      await you.say_and_wait(
        `Дозакажем пиццу и напитки и позовём младших отметить вместе.`,
      );
      await maru.say_and_wait(
        `По словам ${callname}, уже предвкушаю вечернюю вечеринку♪`,
      );
      await era.printAndWait(
        `Надев сапоги и заново ловя ощущение ходьбы, ${maru.teen_sex_title} предвкушает грядущее торжество.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_5: (() => {
    const title = 'После Satsuki Sho · Старт со смены передачи';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Комната ожидания\n`);
      await maru.say_and_wait(`Хай! ${callname} !`);
      await era.printAndWait(
        `Спустившаяся со сцены победителей ${maru.name} вернулась в комнату ожидания`,
      );
      await you.say_and_wait(`Как ощущения?`);
      await era.printAndWait(
        `Аккуратно снимаешь с ${maru.name} её сапоги и с лодыжек до самых бёдер осторожно регулируешь силу массажа.`,
      );
      await maru.say_and_wait(
        `Обожаю это чувство! Не зря это Satsuki Sho классической Тройной короны: на борьбу за корону съехались ${maru.uma_sex_title} — сильнейшие хоть отбавляй.`,
      );
      await maru.say_and_wait(
        `А впереди Derby со скачкой ещё масштабнее, ${maru.elder_sibling_sex_title} уже чуть-чуть в состоянии «жить незачем».`,
      );
      await era.printAndWait(
        `Минут через пять массажа всеми пальцами слегка надавливаешь на внутреннюю сторону бёдер и, следя за ${maru.name} её реакцией, продолжаешь разговор.`,
      );
      await you.say_and_wait(`С таким настроем и берись за Derby!`);
      await maru.say_and_wait(`Точно! Вот оно, это чувство!`);
      await era.printAndWait(
        `После массажа ${you.name} аккуратно надевает на ${maru.name} сапоги, и та встаёт и с подъёмом решает, какая цель дальше.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_17: (() => {
    const title = 'Мечта';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      const ret = [];
      await era.printAndWait(`Кабинет тренера`);
      era.println();
      await era.printAndWait(
        `С глубокими кругами под глазами и неотвязным кофе ${you.name} снова и снова просматривает бумаги в руках.`,
      );
      await you.say_and_wait(`Если с нынешней формой идти на Derby`);
      await era.printAndWait(`На какую характеристику сделать упор дальше?`);
      era.printButton(`「Выносливость и упорство!」`, 1);
      era.printButton(`「Скорость и сила!」`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await you.say_and_wait(
          `На летних сборах как раз подтянуть выносливость, которой всё время пренебрегали.`,
        );
      } else {
        await you.say_and_wait(`Всё-таки скорость и сила чуть лучше.`);
      }
      await you.say_and_wait(`Апчхи!`);
      await era.printAndWait(
        `Чихание сбивает сосредоточенность, и ${you.name} берёт салфетку справа и бросает её в полную урну.`,
      );
      await you.say_and_wait(`Сначала доделать этот документ.`, true);
      await era.printAndWait(
        `Телу так холодно, будто тебя всего зарыли в лёд, и зрение плывёт.`,
      );
      await era.printAndWait(
        `Казалось, молодому телу неделька бессонных ночей нипочём, — а оно сдалось первым.`,
      );
      await you.say_and_wait(
        `Проклятое тело. Лекарство от простуды, где лекарство от простуды?`,
      );
      await era.printAndWait(
        `Открываешь ящик, вытаскиваешь бумажную коробку с надписью «жаропонижающее» — а внутри давно пусто.`,
      );
      await you.say_and_wait(`…Вот как? Тогда хотя бы пока мозг ещё работает.`);
      await era.printAndWait(`Хуже уже некуда, а на душе вдруг легче.`);
      await era.printAndWait(
        `Налив из кулера стакан тёплой воды и осушив его залпом, ${you.name} снова садится на место.`,
      );
      await you.say_and_wait(`Надо ускориться.`);
      await era.printAndWait(
        `Зубы от холода сами собой стучат друг о друга, выдавая вереницу 「клац-клац-клац」, и глотать тоже тяжело.`,
      );
      await era.printAndWait(
        `Лишь ради 「поскорее закончить эту работу」, 「здесь ещё нельзя падать」 ${you.name} стискивает зубы и держится.`,
      );
      await you.say_and_wait(`Готово!`);
      await era.printAndWait(
        `Ударив по последней клавише, сознание, расслабившееся от радости, что всё готово, наконец не выдерживает. Перед глазами всё идёт кругом: похоже, предел уже здесь.`,
      );
      await era.printAndWait(`И тогда ${you.name}, удовлетворённо падает.`);
      await maru.say_and_wait(`${callname}, я за соевым соусом♪ ${callname}?`);
      await era.printAndWait(
        `Перед тем как сознание гаснет, ${you.name} слышит ${maru.name} голос.`,
      );
      era.drawLine();
      await era.printAndWait(
        `Смотри же на меня как следует — как семпай Скаковая ${maru.uma_sex_title} карьеры.`,
      );
      await era.printAndWait(
        `Гляди же на меня как следует — и так навсегда останешься позади меня.`,
      );
      await era.printAndWait(
        `Благослови же меня как следует: теперь очередь ${you.name} мне аплодировать.`,
      );
      await you.say_and_wait(`Вот как.`);
      await era.printAndWait(
        `Наверное, из глубины души какой-то безвестной ${maru.uma_sex_title} случайно вырвался голос.`,
      );
      await maru.say_and_wait(`${callname}?`);
      await era.printAndWait(`Кажется, кто-то зовёт ${you.name}.`);
      await maru.say_and_wait(`${callname}!`);
      await era.printAndWait(`Тебя зовут всё громче и громче.`);
      await era.printAndWait(
        `Пора просыпаться. Утешаешь себя, которому так не хочется просыпаться.`,
      );
      await era.printAndWait(`И тогда ${you.name} неохотно открывает глаза.`);
      await maru.say_and_wait(`, наконец-то не спишь? ${callname}.`);
      await you.say_and_wait(`Где это?`);
      await era.printAndWait(
        `Оглядываешь всё вокруг: кажется, это то место, где ${you.name} живёт.`,
      );
      await maru.say_and_wait(`Подожди немного.`);
      await era.printAndWait(
        `${maru.name}Заходит на кухню и выносит пиалу каши.`,
      );
      await maru.say_and_wait(
        `Уже какое-то время как готова; если ещё горячая — скажи мне.`,
      );
      await era.printAndWait(
        `Тёплую жидкость вливают в рот ${you.name}, и помутившийся разум лишь по инстинкту решает, что это тебе на пользу.`,
      );
      era.printButton(`「Спасибо.」`, 1);
      era.printButton(`「Не надо, я сам(а).」`, 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await era.printAndWait(
          `Силуэт перед глазами будто затянут мутной дымкой, ${you.name} едва различает, как ${maru.sex} двигается.`,
        );
        await era.printAndWait(`Раз так, лучше просто закрыть глаза.`);
        await era.printAndWait(
          `Решившись, ${you.name} закрывает глаза и подстраивается под чужие движения.`,
        );
        await era.printAndWait(
          `С каждым стуком ложки о фарфоровую миску в рот снова втекает тёплая жидкость.`,
        );
        await era.printAndWait(
          `Тёплое касание и уверенные, точные движения. А главное — это щемяще-родное чувство. Незаметно оно будто сливается с лицом матери.`,
        );
      } else {
        await you.say_and_wait(`Не надо, я сам(а).`);
        await era.printAndWait(
          `Едва собираешься вот так сесть — но более сильные руки тебя удерживают.`,
        );
        await maru.say_and_wait(
          `Сейчас не время геройствовать: больному место в постели — лежать и отдыхать.`,
        );
        await you.say_and_wait(`${maru.name}……`);
        await era.printAndWait(
          `Последние силы кончаются, и приходится лечь. С трудом глотаешь то, что кладут в рот.`,
        );
      }
      await you.say_and_wait(`…Так тепло.`);
      await era.printAndWait(
        `Родной запах заставляет ${you.name} закрыть глаза и провалиться в тяжёлый сон.`,
      );
      await era.printAndWait(
        `Тело, что всё бежало от страха, наконец обретает покой.`,
      );
      era.drawLine();
      await you.say_and_wait(`…Когда это?`);
      await era.printAndWait(
        `Открываешь глаза и уже собираешься подняться — и видишь, что сидевшая на стуле ${maru.teen_sex_title} уснула, уткнувшись в кровать.`,
      );
      await era.printAndWait(
        `Стараешься без дрожи отогнуть уголок занавески, и полоска света ложится на лицо ${you.name}. Рассвело.`,
      );
      await maru.say_and_wait(`М-м. Так вот какой сейчас тренд?`);
      await era.printAndWait(
        `К счастью, от лёгкой дрожи, с которой ты садишься, ${
          maru.sex
        } лишь бессознательно меняет позу, и ровное дыхание не сбивается.`,
      );
      await you.say_and_wait(
        `Так и сиди, пока ${maru.sex} не проснётся.`,
        true,
      );
      await era.printAndWait(
        `Решив так, ${you.name} закрывает глаза и ждёт утра.`,
      );

      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = (maru) => `Перед Japanese Derby · ${maru.name}`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        ` Раз ${maru.name} захотела испытать иное чувство на более крупной сцене, и вы решаете бежать Japanese Derby.`,
      );
      await era.printAndWait(`В кабинете тренера`);
      await maru.say_and_wait(
        `Не зря это Derby: вышедшие ${maru.uma_sex_title} все очень сильные.`,
      );
      await era.printAndWait(
        `Вторая из классической Тройной короны, Tokyo Yushun (Japanese Derby), слывёт скачкой, которую берёт лишь самая везучая ${maru.uma_sex_title} — так говорят.`,
      );
      await era.printAndWait(
        `Даже сильные ${maru.uma_sex_title} на этой ступени проваливаются сплошь и рядом, но для ${
          maru.name
        }.`,
      );
      await era.printAndWait(
        `${maru.name}Выступление ничем не отличается от обычного.`,
      );
      await era.printAndWait(
        `Может, потому и пришла — просто насладиться скачкой.`,
      );
      await maru.say_and_wait(
        `${callname}, а дальше хорошенько смотри на меня.`,
      );
      await era.printAndWait(
        `${maru.name}Закончив сборы, направляется в подземный переход.`,
      );
      await you.say_and_wait(`Мне тоже пора на трибуну.`);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = 'После Japanese Derby · Начало выбора';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Без всяких неожиданностей ${maru.name} красиво берёт победу в Derby.`,
      );
      await era.printAndWait(
        `Когда ${maru.sex} пересекает финиш, с трибун обрушивается гром оваций.`,
      );
      await era.printAndWait(`Комната отдыха\n`);
      await maru.say_and_wait(
        `Фух~ не зря это самые заметные скачки классической Тройной короны.`,
      );
      await maru.say_and_wait(
        `На Derby вышли скаковые ${maru.uma_sex_title} — и каждая из них скаковая ${maru.uma_sex_title} элита.`,
      );
      era.printButton(
        `「Хотя в Derby дорожка была самой внешней, но даже при таком раскладе.」`,
        1,
      );
      await era.input();
      era.printButton(
        `「Ещё и так красиво выигравшая Derby ${maru.name} — вот кто круче всех.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `Да ладно, не такая уж я крутая⭐ Просто как всегда… нет, ну разве что чуточку быстрее, чем раньше.`,
      );
      await maru.say_and_wait(
        `Скачки грандиознее Derby, пожалуй, остались разве что —`,
      );
      era.printButton(`「Может, на Prix de l'Arc de Triomphe?」`, 1);
      era.printButton(`「Всё-таки Arima Kinen?」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`Э? Prix de l'Arc de Triomphe?`);
        await maru.say_and_wait(
          `Я в восторге! И правда, с ${callname} вместе каждый раз одни сюрпризы~`,
        );
        await maru.say_and_wait(
          `Если Prix de l'Arc de Triomphe — там, глядишь, встретятся мировые скаковые ${maru.uma_sex_title} .`,
        );
        await maru.say_and_wait(`М-м — и что же делать?`);
        era.printButton(`Как лучше?`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`Верно? Всё-таки Arima Kinen.`);
        era.printButton(
          `「Я тоже жду, что ${maru.name} повеселится на Arima Kinen.」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}Тогда смотри внимательно.`);
      }
      await maru.say_and_wait(`А, нам почти пора на Winner's Stage.`);
      await maru.say_and_wait(
        `С ${callname} вместе время всегда летит так быстро.`,
      );
      await you.say_and_wait(
        `И на сцене это чувство нужно донести до фанатов, что всегда поддерживали ${maru.name} !`,
      );
      await maru.say_and_wait(
        `Ага. Надо, чтобы фанаты, что всегда меня поддерживали, как следует на меня посмотрели.`,
      );
      await maru.say_and_wait(`Пора выходить.`);
      await era.printAndWait(` ${maru.name} вышла из комнаты отдыха.`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `Закрыв дверь комнаты отдыха, в комнате остаёшься только ты.`,
      );
      await you.say_and_wait(`Пора, пожалуй, решиться.`, true);
      await era.printAndWait(`И как раз когда собираешься уходить.`);
      await era.printAndWait(`Тук-тук-тук`);
      await era.printAndWait(
        `Ну вот, опять какая-то новая мода в голову пришла?`,
      );
      await era.printAndWait(
        `С кривой усмешкой открываешь дверь комнаты отдыха.`,
      );
      await you.say_and_wait(`Марузен—`);
      await era.printAndWait(`У двери оставлена записка.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Марузен-семпай, у меня к тебе несколько вопросов. Если можно, не встретимся ли завтра вечером в пустом классе?`,
      );
      await era.printAndWait(`Ты решаешь`);
      era.printButton(`「Рассказать ${maru.name} 」`, 1); //NE
      era.printButton(`「Вместо ${maru.name} пойти」`, 2);
      era.print(
        '【Внимание: выбирай осторожно, иначе всё станет необратимо!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`Голова побаливает… это для ${maru.name}.`);
        await you.say_and_wait(
          `Хочется, конечно, сходить посмотреть своими глазами, но лучше, если этим займётся ${maru.sex}, верно?`,
        );
        await era.printAndWait(
          `Когда ${maru.name} вернулась, о записке от тебя узнала ${maru.sex}.`,
        );
      } else {
        await era.printAndWait(
          `Оглядевшись и никого не найдя, ты поднимаешь записку и кладёшь её в карман.`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(
          `Зачем поднимать эту записку, неясно даже тебе. И всё же—`,
        );
        await era.printAndWait(`Кажется, если сейчас так упустишь.`);
        await era.printAndWait(`Я могу что-то потерять.`);
        await you.say_and_wait(`…Прости, ${maru.name}.`);
        await you.say_and_wait(`Так или иначе, мне нужно туда сходить.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  toky_yus_lose: (() => {
    const title = 'После Japanese Derby · начало выбора';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Без всяких неожиданностей ${maru.name} красиво одержала победу в Derby.`,
      );
      await era.printAndWait(
        `Когда ${maru.sex} пересекла финиш, с трибун обрушился гром оваций.`,
      );
      await era.printAndWait(`Комната отдыха\n`);
      await maru.say_and_wait(
        `Фух~ не зря это самые зрелищные скачки классической Тройной короны.`,
      );
      await maru.say_and_wait(
        `Участвовавшие в Derby скаковые ${maru.uma_sex_title} все до одной — элита среди скаковых ${maru.uma_sex_title}, да.`,
      );
      await maru.say_and_wait(
        `Скачки ещё грандиознее Derby, пожалуй, остаются разве что`,
      );
      era.printButton(`「Не отправиться ли на Prix de l'Arc de Triomphe?」`, 1);
      era.printButton(`「Всё-таки Arima Kinen!」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`Ээ? Prix de l'Arc de Triomphe?`);
        await maru.say_and_wait(
          `Всё, я пала! И правда, с ${callname} вместе каждый раз — сплошные сюрпризы~`,
        );
        await maru.say_and_wait(
          `Если Prix de l'Arc de Triomphe — там, глядишь, встретишь мирового класса скаковых ${maru.uma_sex_title}.`,
        );
        await maru.say_and_wait(`М-м— что же делать?`);
        era.printButton(`Как же лучше?`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`Верно? Всё-таки Arima Kinen.`);
        era.printButton(
          `「Я тоже жду, что ${maru.name} повеселится на Arima Kinen.」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}Ну, смотри тогда внимательно.`);
      }
      await maru.say_and_wait(`А, пора уже на сцену победителя.`);
      await maru.say_and_wait(`С ${callname} время всегда так быстро летит.`);
      await you.say_and_wait(
        `И на сцене тоже пусть это чувство ощутят фанаты, что всегда болеют за ${maru.name}!`,
      );
      await maru.say_and_wait(
        `Ага. Надо, чтобы фанаты, что всегда меня поддерживали, как следует на меня посмотрели.`,
      );
      await maru.say_and_wait(`Пора выходить.`);
      await era.printAndWait(` ${maru.name} вышла из комнаты отдыха.`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `Закрыв дверь комнаты отдыха, в комнате остаёшься только ты.`,
      );
      await you.say_and_wait(`Пора, пожалуй, решиться.`, true);
      await era.printAndWait(`И как раз когда собираешься уходить.`);
      await era.printAndWait(`Тук-тук-тук`);
      await era.printAndWait(
        `Ну вот, опять какая-то новая мода в голову пришла?`,
      );
      await era.printAndWait(
        `С кривой усмешкой открываешь дверь комнаты отдыха.`,
      );
      await you.say_and_wait(`Марузен—`);
      await era.printAndWait(`У двери оставлена записка.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Марузен-семпай, у меня к тебе несколько вопросов. Если можно, не встретимся ли через две недели в пустом классе?`,
      );
      await era.printAndWait(`Ты решаешь`);
      era.printButton(`「Рассказать ${maru.name} 」`, 1); //NE
      era.printButton(`「Вместо ${maru.name} пойти」`, 2);
      era.print(
        '【Внимание: выбирай осторожно, иначе всё станет необратимо!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`Голова побаливает… это для ${maru.name}.`);
        await you.say_and_wait(
          `Хочется, конечно, сходить посмотреть своими глазами, но лучше, если этим займётся ${maru.sex}, верно?`,
        );
        await era.printAndWait(
          `Когда ${maru.name} вернулась, о записке от тебя узнала ${maru.sex}.`,
        );
      } else {
        await era.printAndWait(
          `Оглядевшись и не найдя никого, ты поднимаешь записку и кладёшь её в карман.`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(
          `Зачем было поднимать эту записку — неясно даже тебе. И всё же—`,
        );
        await era.printAndWait(`Просто кажется: если так и упустить.`);
        await era.printAndWait(`Я могу что-то потерять.`);
        await you.say_and_wait(`…прости, ${maru.name}.`);
        await you.say_and_wait(`Как бы то ни было, мне нужно туда сходить.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  girls_blue_1: (() => {
    const title = (maru) => `${maru.teen_sex_title}Меланхолия`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Пустой класс`);
      await era.printAndWait(
        `тайком от ${maru.name}, ты направляешься к месту, назначенному на той записке.`,
      );
      await era.printAndWait(
        `Опоздав к условленному времени минут на 5, ты толкаешь дверь класса.`,
      );
      await era.printAndWait(
        `Хотя это пустой класс, которым не пользовались много лет.`,
      );
      await era.printAndWait(
        `В воздухе, однако, нет той спёртости, что представлялась.`,
      );
      await era.printAndWait(`Возможно, потому что только что прошёл дождь.`);
      await era.printAndWait(
        `Тонкая дымка всё ещё стелется над далёким Тренировочным полем.`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Наконец-то пришла? Марузен-сем—`,
      );
      await era.printAndWait(
        `Тебе открывается силуэт той, что когда-то благодарила тебя с трибун.`,
      );
      await you.say_and_wait(`Прости, ${maru.name} не сможет прийти — дела.`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `…как же так, это наверняка`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}Пристально сверлит тебя взглядом—`,
      );
      await era.printAndWait(
        `Странно, но это больше похоже не на злость, а будто она чего-то ищет.`,
      );
      await you.say_and_wait(`Прости.`, true);
      await era.printAndWait(
        `В конечном счёте от начала и до конца это моя вина: я совершила это ради собственных желаний.`,
      );
      await you.say_and_wait(
        `Успокойся, я тоже только что узнал(а), ${maru.name}. Недавно я поднял(а) записку—\n`,
      );
      await maru.say_and_wait(
        `Что бы ни случилось, всё обсуждай с ${maru.elder_sibling_sex_title} мной, хорошо?`,
      );
      await era.printAndWait(
        `В голове само собой всплывает ваша с ${maru.name} клятва.`,
      );
      await era.printAndWait(`Так её и терзало отвращение к себе.`);
      await you.say_and_wait(
        `Потом она смятенно сказала мне, что есть ещё одна ${maru.uma_sex_title}, которая с ней договорилась встретиться на крыше — ${maru.sex}.`,
      );
      await you.say_and_wait(`Так что прости.`);
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `Неизвестно, что она сделает дальше. Хоть и хочется сбежать, но если позволить ей так просто уйти и рассказать — ${maru.sex} так просто уйти и рассказать ${maru.name} —`,
      );
      await era.printAndWait(`Так любопытство и затягивает тебя вглубь тьмы.`);
      await you.say_and_wait(`Остаётся только стиснуть зубы и продолжать.`);
      await era.printAndWait(
        `Хотя сначала бурные чувства едва не захлёстывают, когда дело доходит до самого оргазма, внутри, напротив, становится спокойно.`,
      );
      await you.say_and_wait(
        `Прости, это я сам(а) попросил(а). Как ${maru.name} тренер я должен(на) решить тревоги подопечной.`,
      );
      await you.say_and_wait(
        `Хотя я и не сравнюсь с ${maru.name}, но как тренер —.`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Позвольте спросить, как вы смотрите на ${maru.name}?`,
      );
      await you.say_and_wait(`Э?`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `Позвольте спросить, какое у вас впечатление о ${maru.name}?`,
      );
      await era.printAndWait(`В груди тихо поднимается чувство.`);
      await era.printAndWait(
        `К сердцу подступает беспокойное, гнетущее раскаяние.`,
      );
      await you.say_and_wait(`Я считаю`);
      era.printButton(
        `「С точки зрения надёжности, того, что ей можно доверять」`,
        1,
      );
      era.printButton(
        `「С точки зрения нежности, того, что ей можно довериться」`,
        2,
      );
      era.printButton(`「С точки зрения отношений между семпаем и кохаем」`, 3);
      era.print(
        '【Внимание: выбирай осторожно, иначе всё станет необратимо!】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait(`Я считаю, что Марузен-семпай — надёжная—`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Прости, мне нужен не этот ответ.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `В благодарность за прошлую помощь я не расскажу Марузен-семпай, тренер ${you.adult_sex_title}.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}Слегка поклонившись, она покидает пустой класс, и здесь снова остаёшься только ты.`,
          );
          break;
        case 2:
          await you.say_and_wait(`Я считаю, что Марузен-семпай очень нежная—`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Прости, мне нужен не этот ответ.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `В благодарность за прошлую помощь я не расскажу Марузен-семпай, тренер ${you.adult_sex_title}.`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}Слегка поклонившись, она покидает пустой класс, и здесь снова остаёшься только ты.`,
          );
          break;
        case 3:
          await era.printAndWait(
            `Надёжность, нежность — боюсь, всё это лишь личина, которую ${maru.name} показывает мне.`,
          );
          await era.printAndWait(
            `Если смотреть с точки зрения ${maru.uma_sex_title}, нет, это кумир, которого хочет ${
              maru.sex
            }, по имени ${maru.name}.`,
          );
          await you.say_and_wait(
            `Я считаю, что ${maru.name} — кумир, который очень заботится о младших и по возможности им помогает.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Почему — кумир?`,
          );
          await you.say_and_wait(
            `${maru.name}Жаждать суметь обогнать её спину — ${
              maru.sex
            } — ${maru.sex} хочет, чтобы младшие, увидев её бег, вспыхнули юной силой — ${
              maru.sex
            }.`,
          );
          await you.say_and_wait(
            `Дотянуться до её спины — ${maru.sex}, превзойти её — ${maru.sex}, на скаковом поле разгромить её — ${
              maru.sex
            }, и ещё, напоследок — свободно наслаждаться свежим воздухом.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `…Да, Марузен-семпай именно такая.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Раз ты тренер Марузен-семпай, да ещё раньше выручал(а) меня на скаковом поле, я думаю,`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `может, вдруг, тебе сказать будет лучше, чем Марузен-семпай?`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}Встала у окна, правой рукой держась за раму; взгляд блуждает между лужайкой и двором — будто ловит ответ и будто от чего-то бежит.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Я… собираюсь отказаться стать Скаковой ${maru.uma_sex_title}.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Давно я знала, что не гожусь в Скаковые ${maru.uma_sex_title}.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Но ${maru.name} меня подбодрила, и именно из-за этой поддержки я держалась до сих пор.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Но Скаковая ${maru.uma_sex_title} — не сказочное место, где достаточно стараться, чтобы добиться успеха.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Не говоря уже о G1 — даже G2 для меня непреодолимая пропасть: как ни старайся, среди соперниц всегда найдётся та, кто сильнее и талантливее тебя.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Глядя, как первая в центре подиума победительниц купается в цветах и хвале, мы, проигравшие, без зачётного финиша обесцениваем свои старания.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `И в ясный день, и под дождём — вставала раньше всех, трудилась почти до потери сознания, и всё равно проигрывала.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Иногда — чуть-чуть, совсем чуть-чуть — к когда-то подбодрившей меня Марузен-семпай поднимается тёмное чувство: хочется схватить её за воротник — ${
              maru.sex
            } и вот так ${maru.sex} прижать к земле и в голос спросить: ${maru.sex}.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Если бы тогда ты меня не подбодрила, может, я бы и не дотянула до сегодня — вся в шрамах.`,
          );
          await era.printAndWait(
            `Словно желая выплеснуть давнюю тоску, ${maru.uma_sex_title} в лихорадочном возбуждении выплеснула всю горечь, что копилась в груди.`,
          );
          await era.printAndWait(
            `Ночь черна как тушь — почти не разглядеть её лица — ${maru.sex}, но белая луна, словно зеркало, высвечивает её слёзы, как жемчуг по нефритовому блюду, — кап-кап — ${
              maru.sex
            }.`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `Прости, я слишком вспылила. Спасибо, что выслушал(а). Тогда — пока, тренер.`,
          );
          await era.printAndWait(
            `С этими словами не сдержавшая чувств ${maru.uma_sex_title} вышла из пустого класса.`,
          );
          await you.say_and_wait(`Тебя тоже.`);
          await era.printAndWait(`${you.name} Долго молчишь в раздумье.`);
      }
      await maru.used_to_say_and_wait(
        `Если ${callname} столкнёшься с тревогой — скажи ${maru.elder_sibling_sex_title} мне всё начистоту, хорошо?`,
      );
      await era.printAndWait(
        `Словно донеслось издалека — и словно всё ещё бродит в этой пустой аудитории.`,
      );
      await era.printAndWait(
        `И ${you.name} не может смахнуть эту тревогу в груди.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  girls_blue_2: (() => {
    const title = (maru) => `${maru.teen_sex_title}тоска`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.uma_sex_title}Как обычная Скаковая ${maru.uma_sex_title} завершает карьеру.`,
      );
      await era.printAndWait(
        `Может, потому что слова наконец отпустили, а может, чтобы поблагодарить фанатов, что поддерживали её досюда, ${maru.sex} надевает победный костюм собственного дизайна — тот, в котором собиралась стоять в центре подиума победительниц после победы в G1—`,
      );
      await era.printAndWait(
        `Хотя когда-то гордая ${maru.sex} собиралась после победы в G1 эффектно выйти в победном костюме собственного дизайна, `,
      );
      await era.printAndWait(
        `потом согласилась на победу в G2, а после со слезами — на простой зачётный финиш. Может, из-за этого опыта сейчас ${maru.sex} прекрасна, как комета`,
      );
      await era.printAndWait(
        `Как один из тех, кто в курсе, ты тоже на этом прощальном выступлении.`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `Спасибо всем!`,
      );
      await era.printAndWait(
        `Со слезами на глазах ${maru.uma_sex_title} с улыбкой смотрит на фанатов, пришедших на выступление—`,
      );
      await era.printAndWait(
        `Почему-то будто краем глаза за чем-то следит — и будто нарочно это игнорирует.`,
      );
      await era.printAndWait(`Эта неприятная несостыковка.`);
      await era.printAndWait(
        `${you.name} смотришь туда, куда ${maru.uma_sex_title} нарочно не смотрит—`,
      );
      await era.printAndWait(`Там молча смотрит на выступление ${maru.name}.`);
      await era.printAndWait(`Стоит ли в такой момент ${maru.sex} заговорить?`);
      era.printButton(`Как ни крути, надо чувствовать обстановку.`, 1);
      era.printButton(`…Нет`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `Подходить с разговором сейчас — совсем не чувствовать момент.`,
        );
        await era.printAndWait(`И ты тихо уходишь отсюда.`);
      } else {
        await you.say_and_wait(`Прости, дай пройти.`);
        await era.printAndWait(
          `Расталкивая толпу вокруг, ${you.name} подходит к ${maru.name}.`,
        );
        await you.say_and_wait(`…… ${maru.name}.`);
        await era.printAndWait(
          `Хотя вопрос, который с самого начала хотелось задать ей, в решительный миг вдруг не находится слов — ${maru.sex}.`,
        );
        await maru.say_and_wait(`Э?`);
        await era.printAndWait(
          `${maru.name}смотрит на тебя с недоверчивым видом.`,
        );
        await maru.say_and_wait(
          `${you.actual_name}Как это… прости, сейчас у меня каша в голове.`,
        );
        await era.printAndWait(
          `Тон легче, чем раньше, но эта режущая натужность — и ${you.name} чувствует горечь.`,
        );
        era.printButton(`…… ${maru.name}.`, 1);
        era.printButton(`У меня вопрос, хочу спросить`, 2);
        if ((await era.input()) === 1) {
          await maru.say_and_wait(`${callname}, можно одолжить твоё плечо?`);
          await era.printAndWait(
            `${you.name} Молча даёт плечо, и ${maru.name} крепко обнимает твою руку.`,
          );
          await era.printAndWait(
            `За смехом и голосами — сброшенные наконец оковы и пришедшая следом растерянность, а вы двое лишь молча смотрите на всё, что происходит.`,
          );
        } else {
          await you.say_and_wait(`Подожди, ${maru.name}.`);
          await maru.say_and_wait(`Прости, ${callname}.`);
          await maru.say_and_wait(
            `Здесь слишком шумно, боюсь, я не расслышу твой вопрос.`,
          );
          await maru.say_and_wait(
            `Если есть вопрос, можно потом, когда вернёмся?`,
          );
          await era.printAndWait(
            `${maru.name} словно в самом центре бури, не слышит твоего вопроса.`,
          );
          await era.printAndWait(
            `Случайно встречаешься взглядом с торопливо уходящей ${maru.name}, видишь потерянный взгляд — и не знаешь, что делать, только провожаешь её глазами.`,
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_radi_shi: (() => {
    const title = 'До Radio Nikkei Sho · Ради кого бежать';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`В кабинете тренера`);
      await era.printAndWait(
        `После Derby ${maru.name} всю страсть и любовь к младшим полностью перенесла на тебя`,
      );
      await era.printAndWait(
        `Благодаря этому твой желудок страдал ещё сильнее`,
      );
      await you.say_and_wait(
        `С трудом удалось уговорить ${maru.name} принять участие в этой скачке`,
        true,
      );
      await era.printAndWait(
        `Когда ты осторожно обратился(ась) к ${
          maru.name
        } с предложением выступить в Tanabata Sho. Молча поставив напиток с кокосовым желе в кабинете тренера, закрыла дверь и ушла — ${
          maru.sex
        } заставила твою совесть приняться допрашивать тебя.`,
      );
      await era.printAndWait(
        `Лишь после множества безрезультатных звонков ты наконец получил(а) от ${maru.name} согласие.`,
      );
      await era.printAndWait(
        `Смотришь, как ${maru.name} перед зеркалом во весь рост приводит себя в порядок.`,
      );
      await you.say_and_wait(
        `Сейчас ${maru.sex} тоже, верно, колеблется; если перенесёт ещё один лёгкий удар, ${
          maru.sex
        } её идеал, пожалуй, пошатнётся`,
        true,
      );
      await you.say_and_wait(
        `Мне и правда стоит… нет, точно, точно — это лучший способ`,
        true,
      );
      await maru.say_and_wait(`Какая ностальгическая одежда… нет, ничего`);
      await era.printAndWait(
        `${maru.name}Надела слегка тесный победный костюм.`,
      );
      await maru.say_and_wait(
        `А дальше непременно принесу победу дорогому ${callname} ♪`,
      );
      await era.printAndWait(
        `Уже всё равно, какие мысли, ${maru.name} направилась на скаковое поле.`,
      );
    };
    f.title = title;
    return f;
  })(),
  radi_shi_win: (() => {
    const title = 'После Radio Nikkei Sho · Путь растерянности';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('Комната отдыха');
      era.println();
      await you.say_and_wait(`Ты хорошо потрудилась, ${maru.name}.`);
      await era.printAndWait(
        `Хотя в середине дистанции её едва не настигла группа, но ${maru.name} без потерь одержала победу в скачке.`,
      );
      await you.say_and_wait(
        `Это совсем не похоже на обычную ${maru.elder_sibling_sex_title} видом ${maru.sex}.`,
        true,
      );
      await you.say_and_wait(
        `Наверное, и сейчас ещё тонет в тени сомнений.`,
        true,
      );
      await maru.say_and_wait(` ${callname} !`);
      await era.printAndWait(
        `В миг, когда заметила тебя, ${maru.name} расцвела открытой улыбкой.`,
      );
      await era.printAndWait(
        `Однако то тусклое выражение глубоко врезалось тебе в память.`,
      );
      await maru.say_and_wait(`Можно меня ещё похвалить?`);
      era.printButton(
        `Молодец, как прекрасная и сильная ${maru.elder_sibling_sex_title} , в этот раз ты выступила великолепно!`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `Хм-хм~ Это же само собой, скорее уж странно было бы проиграть?`,
      );
      era.printButton(`「Как бедро?」`, 1);
      await era.input();
      await maru.say_and_wait(`Намного лучше, чем казалось.`);
      era.printButton(`「Как бедро?」`, 1);
      await era.input();
      await maru.say_and_wait(`……`);
      era.printButton(
        `Как твой тренер, я не стану безучастно смотреть, как любимая лошадь под нарастающим давлением в итоге безрадостно уйдёт со сцены.`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `Как и та прежняя ${maru.uma_sex_title} точно так же.`,
      );
      await you.say_and_wait(`Прости меня, извини.`);
      await era.printAndWait(
        `После сцены победителя ${you.name} решает отказаться от осеннего Kikuka Sho и вместо этого готовиться к Arima Kinen.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = 'Летние сборы';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Пляж`);
      await era.printAndWait(`Хотя это и частный пляж председателя.`);
      await era.printAndWait(`Но воздух несёт ощущение прохлады.`);
      await era.printAndWait(`Может, потому что рядом море,`);
      await era.printAndWait(
        `Морской ветер вместе с далёким шумом набегающих и отступающих волн несёт влажный запах.`,
      );
      await era.printAndWait(
        `Слезши с Та, ${maru.name} с чувством удовлетворения слегка щурит глаза, наслаждаясь атмосферой отпуска —`,
      );
      await you.say_and_wait(`Кстати, почему не поехали школьным автобусом.`);
      await era.printAndWait(
        `По требованию ${maru.name}, очень настойчивому, ${you.name} вы с помощью Та добрались до частного пляжа председателя.`,
      );
      await maru.say_and_wait(
        `Раз уж добрались до такого красивого пляжа, ехать вот так автобусом вместе с младшими было бы жаль, правда.`,
      );
      await you.say_and_wait(
        `Ха? ${maru.name}, ${you.name}, ты же тоже знает, что летние сборы — короткий путь быстро поднять показатели, правда?`,
      );
      await you.say_and_wait(`Так что давай чуть серьёзнее обычного.`);
      await maru.say_and_wait(
        `Ну что ж. Раз уж ${callname} так говорит, тогда ${maru.elder_sibling_sex_title} я тоже не могу не стать чуть серьёзнее⭐`,
      );
      era.printButton(`「Разве это не очевидно?」`, 1);
      await era.input();
      await era.printAndWait(
        `Хотя ${you.name} тоже ждёт моря, солнечных ванн и купальников, которые будут всюду.`,
      );
      await you.say_and_wait(
        `Тогда дальше давай как следует наслаждаться юностью.`,
      );
      await era.printAndWait(`Для некоторых вернее идти по ощущениям тела.`);
      await era.printAndWait(`Так что лучше не вмешиваться.`);
      await maru.say_and_wait(
        `Когда вот так чувствуешь ласку морского ветра, настроение будто взмывает за облака, сымнида.`,
      );
      await you.say_and_wait(
        `Раз уж вернулась даже такая древняя крылатая фраза, похоже, ${maru.name} и правда в хорошем настроении.`,
        true,
      );
      await maru.say_and_wait(`Хо-хо~ ${callname} ну и милашка♪`);
      await era.printAndWait(
        `Откуда ни возьмись подошедшая ${maru.name} неотрывно смотрит на ${you.name} в упор.`,
      );
      await maru.say_and_wait(`Как ни хвали — никаких плюшек не будет~`);
      await era.printAndWait(
        ` заранее угадал(а), что ${you.name} собиралась сказать, ${maru.name} и та хитро улыбнулась.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = 'Фестиваль';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`Как же людно.`);
      await era.printAndWait(
        ` и ${maru.name} договорились вместе сходить на якобы грандиозный фестиваль, но ${you.name} долго ждала у входа и так и не увидела ${
          maru.sex
        } тебя.`,
      );
      await era.printAndWait(
        ` подумал(а): 「Наверное, заблудилась в толпе」, как раз когда ${you.name} стоял(а) с пустой головой и смотрел(а), как толпа стекается на украшенный фонарями фестиваль, и, прищурившись, зевнул(а).`,
      );
      await you.say_and_wait(`Как же людно.`);
      await era.printAndWait(
        `Совсем не то, что ожидалось — не горстка лотков. Туристы и прилавки стекались со всех сторон и тянулись от одного конца улицы до другого.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Эй, парень, что столбом стоишь, не отведаешь свежих фруктов?`,
      );
      await you.say_and_wait(`Э?`);
      await era.printAndWait(
        `Поток людей подхватил, и незаметно ты оказался(лась) перед фруктовым лотком.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Судя по виду, на фестивале в первый раз?`,
      );
      await era.printAndWait(
        `Видимо, из-за хорошей выручки настроение поднялось, и дядька заговорил без умолку.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Да и понятно: этот фестиваль всё-таки входит в список тех, что туристу нельзя пропустить.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Весь городок стоит у этого красивого пляжа, так что отдыхающих сюда едет немало.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Раньше это была заурядная деревня, куда ещё и добраться было непросто, но стоило здешнему пляжу прославиться — туристов стало больше.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `А потом проложили железную дорогу, народ сюда р-раз — и хлынул, и вырос нынешний городок.`,
      );
      await you.say_and_wait(`Эм? Можно спросить,`);
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        ` О. Вот память у меня. Кстати, ${you.name} ты здесь потому, что заблудился(ась)?`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Ещё бы: у этого фестиваля четыре одинаковых входа. Я в искусстве не смыслю, но каждый год забавно смотреть, как люди договариваются встретиться у входа и потом не могут друг друга найти.`,
      );
      await era.printAndWait(
        `Дядька явно вошёл во вкус: местный, гордый своим городком, гремел на всю улицу, рассказывая.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Кстати, если хочешь пройти весь фестиваль, иди отсюда прямо — увидишь местное представление.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Сегодня вечером в толпе у торжества, глядишь, ещё и кассу сделаю, ха-ха-ха.`,
      );
      await era.printAndWait(
        `Договорив, брызжущий слюной дядька наконец замолчал.`,
      );
      await maru.say_as_passer_by_and_wait(`Телефон`, `Вжжж`);
      await era.printAndWait(
        `В кармане завибрировал телефон. Сейчас, когда почти все ушли на представление, кто звонит — и так ясно.`,
      );
      await maru.say_and_wait(`${callname}${you.name}Где ты?`);
      await era.printAndWait(
        `В кармане завибрировал телефон. Сейчас, когда почти все ушли на представление, кто звонит — и так ясно.`,
      );
      await maru.say_and_wait(
        `, уф… Я же так готовилась, по фото на телефоне примчалась к входу, а так и не увидела ${
          callname
        } даже следа.`,
      );
      await maru.say_and_wait(
        `, я-то думала, что не упущу из виду ${callname}, но смотрю и направо, и налево — не сыскать ${
          callname
        } ни следа, ${maru.elder_sibling_sex_title} мне уже чуть-чуть жить не хочется ><.`,
      );
      await era.printAndWait(
        ` перепутал(а) вход? Нет, может, ${you.name} тоже перепутал(а)?`,
      );
      era.printButton(`「Простите, что беспокою.」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `М? Хочешь узнать, как отличить входы?`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Ещё бы, каждый год об этом спрашивают.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `В обычный день их легко отличить, а как людей понабежит — всё сливается.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `${you.name}Пусть твой друг от входа дойдёт до пятого лотка: там волонтёры, они направят.`,
      );
      await era.printAndWait(
        ` Дядька на ходу, как ни в чём не бывало, достал карту и ткнул в неё: ${you.name} смотри.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Продавец`,
        `Если на представление, иди этой дорогой — ещё успеешь.`,
      );
      await era.printAndWait(
        `Слишком радушный, даже странноватый, но добрый дядька.`,
      );
      await era.printAndWait(
        ` поблагодарил(а) его, для ${you.name} повторил(а) всё слово в слово ${maru.name} и поспешил(а) туда.`,
      );
      era.drawLine();
      await era.printAndWait(
        `Скорее сюда, скорее сюда: недалеко великий помост.`,
      );
      await era.printAndWait(
        `Забудьте эти тревоги, кружитесь в этом жарком танце.`,
      );
      await era.printAndWait(
        ` Пусть растворится в этом великом торжестве. Вот так вместе со мной молитесь, чтобы оно ${maru.sex} никогда не кончалось.`,
      );
      await era.printAndWait(
        `С радостью, где сплелись слёзы и пот, с растерянностью и болью — отпустите наконец.`,
      );
      await era.printAndWait(
        ` словно блестящий песок на пляже, ${you.name} ваша радость и избавление навеки останутся в истории.\n`,
      );
      await you.say_and_wait(`Наконец-то на месте.`);
      await era.printAndWait(
        `Зрители всё прибывали: кто стоя, кто сидя, с напитками или камерами смотрели на яркое представление на сцене.`,
      );
      await era.printAndWait(
        `Выдохи людей словно сплетают тонкую сеть, дети с визгом носятся по толпе от возбуждения.`,
      );
      await you.say_and_wait(`Народу же полно.`);
      await era.printAndWait(
        `Ты и без того довольно внимательно смотришь под ноги, но всё равно несколько раз чуть не теряешь равновесие от носящихся как угорелые детей.`,
      );
      await you.say_and_wait(
        `Жарко, но сейчас главное — найти ${maru.name} ——`,
      );
      await era.printAndWait(
        `Хотя ты и хочешь, чтобы ${
          maru.sex
        } получила твои координаты, но в такой толпе даже сигнал телефона то и дело обрывается.`,
      );
      await maru.say_and_wait(`${callname}!`);
      await era.printAndWait(
        `Ночь опускается, огни сцены загораются один за другим, и гости обращают внимание на сцену —`,
      );
      await era.printAndWait(
        `кроме тебя, глядящего на ${maru.name}, ${you.name} и, поймав взгляд ${you.name}, махая рукой, трусцой подбегает ${maru.name}.`,
      );
      era.printButton(`「Как же хорошо, что вижу ${maru.name} 」`, 1);
      await era.input();
      await era.printAndWait(
        `Словно камень упал с души, ${you.name} делает долгий выдох.`,
      );
      await maru.say_and_wait(
        `Наконец-то нашла ${you.name}, ${maru.elder_sibling_sex_title} я тоже выдохнула с облегчением.`,
      );
      await you.say_and_wait(
        `Прости, мне тоже хотелось поскорее встретиться с ${maru.name}, но —`,
      );
      await maru.say_and_wait(
        `Нн~ вместо извинений, ${
          callname
        } лучше посмотри со мной выступление — вот это и будет компенсацией делом.`,
      );
      await you.say_and_wait(
        `…До конца выступления я не отойду от ${maru.name}.`,
      );
      await you.say_and_wait(
        `Поэтому позволь мне вместе с ${you.name} создать это прекрасное воспоминание. Очень прошу!`,
      );
      await maru.say_and_wait(`Ого, это что, новый способ признаться?`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}Я тоже чуть~чуть затрепетала.`,
      );
      await maru.say_and_wait(
        `Раз так, ${callname}, уже не отходи от меня, хорошо?`,
      );
      await era.printAndWait(
        `Приглашённая выступить ${maru.uma_sex_title} в переливающемся наряде легко впорхнула на сцену, и весь свет разом собрался на ней — ${
          maru.sex
        } в этот миг ${maru.sex} словно стала самым ярким существом на этом пляже.`,
      );
      await you.say_and_wait(`${maru.name}?`);
      await era.printAndWait(
        `${
          maru.sex
        } движения плавны и прекрасны — невольно вспоминаются всё ещё яростно бегущие неподалёку волны, а тихо возникший в ритме этнический аккомпанемент возносит эту одетую в тёмно-синее ${maru.uma_sex_title} в духа, что тихо вышла из морских глубин на сушу и легко кружится в танце.`,
      );
      await you.say_and_wait(`${maru.name}!`);
      await maru.say_and_wait(`Нн? ${callname}, что такое?`);
      await era.printAndWait(
        `Испуганная слегка повышенным голосом ${you.name}, ${maru.teen_sex_title} смотрит вопросительным взглядом на ${you.name}.`,
      );
      await era.printAndWait(`${you.name} решение:`);
      era.printButton(
        `「${maru.name}, прошу, поведай мне, ${you.name}, боль и печаль」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `На сцене ${maru.teen_sex_title} выкладывается до конца, и катящийся пот собирается в накатывающие одна за другой волны.`,
      );
      await era.printAndWait(
        `Зрители с ожиданием в глазах неотрывно смотрят на сияющего на сцене идола.`,
      );
      await era.printAndWait(
        `А с начала и до конца ${maru.name} хранит ту тревожную тишину.`,
      );
      await you.say_and_wait(`Похоже, сейчас как раз решающий момент.`, true);
      await you.say_and_wait(
        `Нужно во что бы то ни стало сохранять терпение.`,
        true,
      );
      await era.printAndWait(
        `На подмостках ${maru.teen_sex_title} каждым вращением, каждым прыжком накрепко хватает зрителей за сердца.`,
      );
      await era.printAndWait(`Зрители затаив дыхание ждут того самого мига.`);
      await maru.say_and_wait(
        `Как и думала, от ${callname} всё-таки не утаишь?`,
      );
      await era.printAndWait(
        `Вдруг, словно гром среди ясного неба, зрители взрываются бурными аплодисментами и криками.`,
      );
      await era.printAndWait(
        `Сняв маску улыбки, ${maru.name} смотрит с печалью и облегчением освобождения на ${you.name}.`,
      );
      await era.printAndWait(
        `Даже эта боль уже ушла, и с онемением, от которого почти валит с ног, ${maru.teen_sex_title} ловит на языке солёный привкус — то ли пот, то ли слёзы.`,
      );
      await maru.say_and_wait(
        `…Может, поговорим в другом месте, ${you.actual_name}?`,
      );
      await era.printAndWait(
        `Бесчисленные гости, которых манит чарующий аромат плодов, вливаются в это торжество; ночь лишь сейчас входит в кульминацию.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = 'Выбор';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `После тренировки ${you.name} получает записку от ${maru.name}.`,
      );
      await maru.say_and_wait(
        `${callname}, зайди в ближайшее святилище, мне нужно поговорить с ${you.name}.`,
      );
      await era.printAndWait(
        `Неужели классическая сцена признания? Собрав вещи, ${you.name} быстро отправляется.`,
      );
      await era.printAndWait(
        `Против потока тех, кто жаждет веселья и забвения, ${you.name} вдвоём, словно на прогулке, приходите к ближайшему святилищу.`,
      );
      await era.printAndWait(
        `Отголоски веселья ещё не рассеялись, взгляды гостей стекаются к сцене в центре городка,`,
      );
      await era.printAndWait(
        `если говорить об уединении, места глуше тоже есть,`,
      );
      await era.printAndWait(
        `но здесь не страшно от чрезмерной тишины и не тревожно от чрезмерного шума.`,
      );
      await maru.say_and_wait(`Три богини, прошу, выслушайте меня.`);
      await era.printAndWait(
        `В тон звону ма-монет, брошенных в ящик для подношений, звучит молитва ${maru.name}.`,
      );
      era.printButton(`「Опустить ма-монеты」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}Подражая ${maru.name} в движениях, закрываешь глаза и молишься Трём богиням.`,
      );
      era.printButton(`「Три богини, прошу, направьте страждущих」`, 1);
      era.printButton(
        `「Три богини, прошу, направьте тех, кто в растерянности」`,
        2,
      );
      await era.input();
      await era.printAndWait(
        `Загадав желание, ${you.name} смотрит на стоящую рядом ${maru.teen_sex_title}.`,
      );
      await era.printAndWait(
        `${maru.sex}Не сводит глаз с ящика для пожертвований — нет, ${
          maru.sex
        } смотрит в неизвестную, далёкую даль.`,
      );
      await you.say_and_wait(`${maru.name}Плачет?`, true);
      await maru.say_as_passer_by_and_wait(
        `Жрица`,
        `Очень жаль, сегодня талисманы на любовь уже закончились.`,
      );
      await era.printAndWait(
        `Чуть погодя жрица, потирая глаза и зевая, неспешно появляется из толпы, что смотрела представление.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Жрица`,
        `…Если можно, прошу вас обоих взять это.`,
      );
      await era.printAndWait(
        `Словно что-то поняв, жрица достаёт талисман из кармашка, зашитого в длинный рукав.`,
      );
      await you.say_and_wait(`Большое спасибо.`);
      await maru.say_as_passer_by_and_wait(
        `Жрица`,
        `Слова благодарности — прекрасной богине.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Жрица`,
        `Слова благословения — милосердной богине.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Жрица`,
        `Слова избавления — любящей богине.`,
      );
      await you.say_and_wait(`Избавление?`, true);
      await maru.say_and_wait(`Благословение… Три богини, спасибо.`, true);
      await maru.say_as_passer_by_and_wait(
        `Жрица`,
        `Три богини, даруйте этому миру добро и надежду.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Жрица`,
        `Милые люди, да пребудут Три богини с ${you.name} и с ней.`,
      );
      await era.printAndWait(
        `Жрица, произнося слова благословения, протягивает талисман ${you.name} и ей.`,
      );
      await era.printAndWait(
        `В отличие от ${you.name}, что сразу берёт талисман из рук жрицы и кланяется в ответ, ${maru.name} взяв талисман, кладёт его в сумочку, что носит с собой.`,
      );
      await era.printAndWait(`Затем —`);
      await maru.say_and_wait(`Всё же от ${callname} не утаишь.`);
      await era.printAndWait(
        `Словно уловив перемену в воздухе, жрица указывает правой рукой на тихую боковую тропинку и уходит.`,
      );
      await era.printAndWait(
        `Чёткий цок-цок гэта о землю становится всё тише; мало-помалу здесь остаются лишь доносящиеся издалека барабаны да крики и овации зрителей.`,
      );
      await you.say_and_wait(
        `Теперь здесь только мы двое. Дальше этих слов, кроме Трёх богинь, никто не услышит.`,
      );
      await era.printAndWait(
        `${you.name}Смотришь на ${maru.name} лицо, а та, наконец избавившись от терзавшего её, слегка вздрагивает.`,
      );
      await maru.say_and_wait(
        `С чего бы начать. На самом деле в тот вечер я тоже была там.`,
      );
      await you.say_and_wait(`Что?!`);
      await era.printAndWait(
        `${you.name}По спине пробегает холодок, ноги дрожат, хочется развернуться и бежать, но остатки рассудка твердят: человеку не убежать от ${maru.uma_sex_title}.`,
      );
      await era.printAndWait(
        `Тем более — лучшая среди ${maru.uma_sex_title}, ${maru.name}.`,
      );
      await maru.say_and_wait(
        `Как ${you.name} и думал(а), в тот день у ${
          callname
        } было странное выражение, и взгляд то и дело сам собой падал на часы.`,
      );
      await maru.say_and_wait(`И тогда сработала эта противная интуиция.`);
      await era.printAndWait(
        `${maru.name}Надевает ту невиданную для ${you.name} маску и без единого выражения на лице рассказывает.`,
      );
      await maru.say_and_wait(
        `После ужина я вроде как вернулась в квартиру, но на деле лишь на время оставила Та на ближайшей парковке и бегом, своими ногами, вернулась в Трейсен.`,
      );
      await era.printAndWait(
        `Предатель, скотина, грешник — в голове невольно всплывает уговор с ${maru.name}.`,
      );
      await you.say_and_wait(
        `С каким лицом мне глядеть на неё — ${maru.sex}?`,
        true,
      );
      await era.printAndWait(
        `Стоит подумать об этом — в голове пусто, губы сами сжимаются, в желудке всё переворачивается — подкатывает тошнота.`,
      );
      await maru.say_and_wait(
        `Хоть у ${
          callname
        } чутьё против слежки остро, но как ни крути, насторожившаяся ${maru.uma_sex_title} не упустит даже самый тихий звук.`,
      );
      await maru.say_and_wait(
        `Я ещё издали увидела, как ${
          callname
        } с паникой на лице входит в учебный корпус, и на первом этаже я терпеливо ждала, пока раздадутся голоса, чтобы сразу вычислить место.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`${you.name}открываешь рот — ничего не выходит.`);
      await era.printAndWait(
        `Каждая секунда как год: хочется бежать, но ноги словно налиты свинцом и намертво прикованы к месту.`,
      );
      await maru.say_and_wait(
        `Ведь если бы ${
          callname
        } не согласился(ась) пойти со мной на храмовый праздник, я собиралась так и прикидываться дурочкой, пока всё не кончится.`,
      );
      await era.printAndWait(
        `Слова звучат легко, но без единой улыбки ${maru.name} неотрывно смотрит на ${you.name}.`,
      );
      await maru.say_and_wait(
        `Но раз уж ${callname} уже принял(а) решение, я тоже должна ответить должным уважением.`,
      );
      await maru.say_and_wait(
        `Тогда, ${callname}, теперь очередь ${you.name}.`,
      );
      await era.printAndWait(
        `Страх, доставшийся людям от древности, заставляет ${you.name} включить мозг на полную, ${you.name} решение таково.`,
      );
      era.printButton('「Я не отступлю」', 1);
      era.printButton('「Прости」', 2);
      era.print(
        [
          '【Предупреждение: если выбрать этот вариант, отношения с ',
          maru.get_colored_name(),
          ' будет невозможно восстановить!】',
        ],
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name}Не колеблясь смотришь ${maru.name} в глаза.`,
        );
        await maru.say_and_wait(
          `${you.actual_name}, тебе лучше дать мне ответ, которым я останусь довольна.`,
        );
        await era.printAndWait(
          `${maru.name}Лошадиные уши медленно закладываются назад, и в голосе появляется раздражение.`,
        );
        await you.say_and_wait(`Один неверный шаг — и внизу бездна.`);
        await era.printAndWait(
          `Насильно унимаешь колотящееся всё сильнее сердце; спокойствие такое, будто это уже не ты.`,
        );
        await era.printAndWait(
          `Хотя даже себе не вполне ясно, почему отказ сорвался сам собой.`,
        );
        await era.printAndWait(
          `Но ${you.name} знает: сейчас ни в коем случае нельзя уступать, ${you.name} здесь не для того, чтобы играть с ${maru.name} в дочки-матери, ${you.name} нужно явить эту волю.`,
        );
        await era.printAndWait(
          `Вернёмся к делу. Что так задевает ${maru.name}? Что ещё, кроме нарушенной клятвы, заставляет ${
            maru.sex
          } страдать?`,
        );
        await you.say_and_wait(
          `Я здесь, чтобы стащить ${you.name} с пьедестала идола, ${maru.name}.`,
        );
        await era.printAndWait(
          `${maru.name}Намеренно или нет, выпускает немного своей области, ${you.name} ощущает тот страх, что на скаковом поле ${maru.uma_sex_title} знают слишком хорошо.`,
        );
        await you.say_and_wait(
          `Что такое идол? Тот, кого боготворят, на кого возлагают судьбы. Говоришь, будто бежишь вперёд, чтобы другие смотрели тебе в спину и шли за тобой, но на деле ${you.name} так высокомерен(на).`,
        );
        await you.say_and_wait(
          `${you.name}Ты и правда выдержишь ту неподъёмную тяжесть надежд, что возложили на тебя бессчётные люди?`,
        );
        await you.say_and_wait(`Даже я знаю: на свете нет людей без изъяна.`);
        await you.say_and_wait(
          `Человек обязательно ошибётся, обязательно сделает что-то не так.`,
        );
        await you.say_and_wait(
          `Ошибок не избежать; лишь после горя и боли начинаешь по-настоящему дорожить.`,
        );
        await you.say_and_wait(`Но ${you.name}`);
        await you.say_and_wait(
          ` Хотя ты и как отзывчивая ${maru.elder_sibling_sex_title} помогаешь попавшим в беду ${maru.uma_sex_title}.`,
        );
        await you.say_and_wait(
          `Но ты не позаботился(ась) о последствиях и совершенно не заметил(а), что ${maru.uma_sex_title} сделали из ${you.name} тихую гавань, чтобы прятаться от любых проблем.`,
        );
        await you.say_and_wait(
          `И вот так на тебя ${maru.uma_sex_title} самовольно возложили надежды — и так же самовольно сочли, что ты предал(а), и ${maru.uma_sex_title} возненавидели.`,
        );
        await you.say_and_wait(
          `Хотя те ${maru.uma_sex_title} во всеуслышание твердят, что смотрят на спину ${you.name} как на идола, а на деле ${you.name} боготворят как бога.`,
        );
        await you.say_and_wait(
          `Хотя ${you.name} не делал(а) этого нарочно и никогда так не думал(а), но трагедия родилась именно так.`,
        );
        await you.say_and_wait(
          `Так что сойди с этого пьедестала. Я прошу не ради себя: я вижу машину в ад в один конец и удерживаю ${you.name}.`,
        );
        await era.printAndWait(
          `Совершенно не считаясь с тем, что думает ${maru.name}, ты одним духом выплёскиваешь всё, что копилось и давило внутри.\n`,
        );
        await maru.say_and_wait(
          `Тогда где же ${you.name} решение? Людей, что находят проблему, на свете полно; всегда не хватает тех, кто делает шаг дальше и её решает.`,
        );
        await maru.say_and_wait(
          `И потом, в конце концов это же ${you.name} однобокий рассказ, нет?`,
        );
        await maru.say_and_wait(
          `Откуда знать, что это не ${you.name} выдумал(а) от страха?`,
        );
        era.printButton(
          `Как и я иду на риск вызвать неприязнь ${maru.name}, так и ${you.name} должен(на) знать, зачем и ради кого идёт на этот риск!`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `Как раз собирается продолжить ${maru.name}, но ${you.name} перебивает словами.`,
        );
        await you.say_and_wait(
          `У меня нет такого опыта — чтобы младшие возлагали столько надежд и ожиданий, — но я знаю: ${maru.name} из любви помогает ${
            maru.couple_title
          }.`,
        );
        await you.say_and_wait(
          `Вот оно — то, ради чего можно разлететься в прах и сгинуть навеки, лишь бы помочь ${
            maru.couple_title
          } — то, что зовётся любовью!`,
        );
        await you.say_and_wait(
          `Поэтому я не стану мешать ${maru.name} идти своей дорогой.`,
        );
        await era.printAndWait(
          `Это ${you.name} впервые встаёт лицом к лицу с областью, но в груди невыразимые тепло и пыл заставляют ${you.name} смотреть ей в глаза — ${
            maru.sex
          }.`,
        );
        await you.say_and_wait(
          `Печаль внутри, растерянность перед будущим — можно мне взять хоть немного на себя?`,
        );
        await you.say_and_wait(
          `Идти одному во тьме, где руки не видно, — хорошо бы, чтобы впереди горела лампа и освещала путь.`,
        );
        await you.say_and_wait(
          `Доверь это мне. Как тренер я лишь так себе, но как лампа я справлюсь, я уверен(а).`,
        );
        await you.say_and_wait(
          `Я буду шаг за шагом, понемногу, умирать за других.`,
        );
        await era.printAndWait(
          `Затем ${you.name} смотрит, как ${maru.sex} её напор постепенно тает, становится всё меньше.`,
        );
        await era.printAndWait(
          `Наконец ${maru.name} будто коря себя, вздыхает.`,
        );
      } else {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `Тянется так долго, будто прошёл целый год, ${you.name} ловит на себе взгляд ${maru.name} — тот самый, каким рассматривают преступника. Наконец ${
            maru.sex
          } отводит взгляд.`,
        );
        await maru.say_and_wait(`Ну что ж, и впредь прошу любить и жаловать♪`);
        await era.printAndWait(
          `как ни в чём не бывало, ${maru.sex} с улыбкой протянула к ${you.name} руку.`,
        );
        await you.say_and_wait(`Прошу любить и жаловать`);
        await era.printAndWait(
          `Хотя ${maru.sex} всё ещё с тем же мягким тоном, но ${you.name} знает—`,
        );
        await era.printAndWait(
          `что-то тёплое вместе с собственной душой ушло во тьму\n`,
        );
        await era.printAndWait(`И тогда это наконец закончилось.`);
        await era.printAndWait(`Осталась лишь тишина.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = 'Конец летних сборов';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      maru.print(`Сборы пролетели ещё быстрее, чем я думала.`);
      maru.print(
        `Глядя, как Спешал ${maru.couple_title} на пляже пылают духом юности и отчаянно бегут.`,
      );
      maru.print(
        `Совсем другое чувство, чем когда глубокой ночью идёшь одна смотреть, как прибывает и спадает прилив.`,
      );
      await maru.say_and_wait(`…… ${callname}.`);
      maru.print(
        `Как ни странно, я не слишком разозлилась на ${callname} за предательство.`,
      );
      maru.print(`Как будто… да, словно.`);
      era.drawLine();
      await maru.say_and_wait(`Сборы пролетели быстрее, чем я думала.`);
      era.printButton(`「Ага.»`, 1);
      await era.input();
      await you.say_and_wait(
        `Когда всерьёз включаешься, времени всегда не хватает.`,
      );
      await maru.say_and_wait(`Но время ведь не повернуть вспять?`);
      await you.say_and_wait(
        `Зато у нас остались счастливые воспоминания, верно?`,
      );
      await maru.say_and_wait(
        `Хе-хе, так и есть. Со Спешал ${maru.couple_title} вчерашняя прощальная вечеринка, раньше — с ${callname} вместе плескались у берега, ещё раньше — с ${callname} вместе проведённый праздник в городке.`,
      );
      await maru.say_and_wait(
        `Если так посчитать, на самом деле время прошло очень насыщенно.`,
      );
      await maru.say_and_wait(
        `Так хочется вернуться в начало августа и начать сначала~`,
      );
      era.printButton(`「Наверное, время закрепилось смыслом?»`, 1);
      await era.input();
      await you.say_and_wait(
        `Ведь раз придали смысл, в итоге это что-то принесло, да?`,
      );
      await maru.say_and_wait(`Хе-хе, какая занятная мысль.`);
      await maru.say_and_wait(
        `Раз так, ${callname} не хочешь вместе со мной насладиться последними летними сборами?`,
      );
      await you.say_and_wait(`?`);
      await era.printAndWait(
        `Вскоре, сидя на пассажирском сиденье, ${you.name} начал(а) бояться поездок на машине.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_33: (() => {
    const title = 'Вода и песок';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `К счастью, за это время ${maru.name} не забросила обычные тренировки.`,
      );
      await era.printAndWait(`С этим утешением на душе стало чуть легче.`);
      await era.printAndWait(
        `Ты отводишь взгляд от работы, встаёшь и зеваешь.`,
      );
      await era.printAndWait(
        `Пляж словно затянут таинственной вуалью, неподалёку ${maru.uma_sex_title} воодушевлённо бегают кругами по пляжу, делая физподготовку.`,
      );
      await you.say_and_wait(`Уже так поздно.`);
      await era.printAndWait(
        `После того фестиваля между тобой и ${maru.name} отношения стали словно ещё на шаг ближе.`,
      );
      await era.printAndWait(
        `словно наконец получил(а) позволение войти к ней в самую глубину души — ${maru.sex}.`,
      );
      await you.say_and_wait(`${maru.name}.`);
      await era.printAndWait(
        `Как бы то ни было, нужно как следует поговорить с ней — и, быть может, эта возможность только одна — ${maru.sex}.`,
      );
      await era.printAndWait(`Поэтому ты решаешь`);
      era.printButton(`「Искать ${maru.name} 」`, 1);
      era.printButton(`「Искать ${maru.name} 」`, 2);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `Закатные лучи льются на пляж, золотой свет переплетается с мелким песком, словно весь берег покрыли позолотой.`,
      );
      await era.printAndWait(
        `Непонятно почему, но тревога понемногу схлынула.`,
      );
      await era.printAndWait(
        `Покалывание от трения пальцев ног о песок быстро перешло в наслаждение, и настроение тоже взлетело.`,
      );
      await era.printAndWait(
        `Силуэт неподалёку на границе оранжевого и тёмно-синего — это та, о ком ${maru.uma_sex_title} говорили тебе, ${maru.name}, да?`,
      );
      await era.printAndWait(
        `Силуэт, на который ты смотришь, кажется, тоже заметил твоё появление. И тогда—`,
      );
      await era.printAndWait(`Голос бесшумно растаял в прибое.`);
      await era.printAndWait(
        `Волны тихо плещутся о берег: прилив и отлив, будто рассказывают историю дня.`,
      );
      era.drawLine();
      await maru.say_and_wait(`${callname}!Здесь вода прохладная!`);
      await era.printAndWait(`${maru.name}радостно машет рукой.`);
      await you.say_and_wait(`${maru.name}.`);
      await era.printAndWait(
        `Ты со смешанными чувствами смотришь на ${maru.name}, затем снимаешь обувь и босиком идёшь к морю.`,
      );
      await era.printAndWait(
        `Холод ты замечаешь не сразу: первым делом чувствуешь едва уловимое сопротивление.`,
      );
      await era.printAndWait(
        `Но по мере того как ты сознательно идёшь дальше, этот дискомфорт понемногу сходит.`,
      );
      era.printButton(`「Как ощущается лето?»`, 1);
      era.printButton(`「А море на ощупь — very cool?»`, 2);
      await era.input();
      await maru.say_and_wait(
        `Не только тело стало прохладнее — даже это пылающее сердце вдруг сильно успокоилось.`,
      );
      await you.say_and_wait(
        `Глядя, как ${maru.name} весело резвится, невольно ждёшь, когда наступит завтра.`,
      );
      await maru.say_and_wait(
        `Завтра, наверное, тоже будет ясный погожий день.`,
      );
      await era.printAndWait(
        `${maru.teen_sex_title}Переводишь взгляд на пляж, на ${maru.uma_sex_title}, что и вечером всё ещё тренируются.`,
      );
      await you.say_and_wait(
        `Быть может, только потеряв что-то и ворочаясь в муках, до мозга костей осознаёшь, как надменно раньше растрачивал(а) всё.`,
      );
      await maru.say_and_wait(
        `…Только так, пройдя через боль и растерянность, нечто, выстраданное до крови, начинает излучать настоящий свет.`,
      );
      await maru.say_and_wait(
        `С того мига, когда растерянность и боль стали решимостью, я всё жду, когда наступит тот день.`,
      );
      await era.printAndWait(
        `Сказав это, вы оба замолкаете. Затем слово берёшь ты`,
      );
      await you.say_and_wait(`${maru.name}, ты меня выслушаешь?`);
      await maru.say_and_wait(
        `Меня уже ${callname}  стащил(а) с трона богини, и на этот раз ${callname}  уж не хочет ли заняться чем-то пошлым?`,
      );
      await era.printAndWait(
        `Глядя на слегка дрожащую от страха (?) ${maru.name}. Невольно краснеешь из-за своих недавних чересчур пылких слов`,
      );
      era.printButton(
        `「Кхм-кхм, на самом деле мне нужно тебе кое-что сказать.»`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `Чтобы сохранить достоинство тренера (да осталось ли оно ещё после всего этого), ты принимаешь подобающий вид`,
      );
      era.printButton(`「Позволь мне снова увидеть эту сияющую спину!»`, 1);
      era.printButton(
        `「Во что бы то ни стало, пусть эта спина, этот ветер снова пронесутся мимо»`,
        2,
      );
      await era.input();
      await maru.say_and_wait(
        `! Ээ? Даже если ${callname}  так просит, всё равно`,
      );
      await you.say_and_wait(
        `Нет, я знаю. Нет, не только я. Знаю: и те, кого я знаю, и те, кого не знаю, — все ждут того мига.`,
      );
      await maru.say_and_wait(`Даже если ${callname}  так говорит`);
      era.printButton(`「А потом увидел(а) ${maru.name}?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `Разве фантазию, что усилия непременно принесут успех, реальность не разбивает снова и снова?`,
      );
      await you.say_and_wait(
        `Нет. Не конечный результат: люди бегут от боли и лишь в самый последний миг понимают, что в погоне за мечтой самое ценное — смысл.`,
      );
      await you.say_and_wait(
        `И даже тогда: вместо того чтобы ненавидеть себя такого, лишь пройдя растерянность и боль, измученные люди обращают взгляд на то, что мир зовёт прекрасным.`,
      );
      await you.say_and_wait(
        ` И вот так ждут, жаждут, молятся о миге, когда их растерянность наконец прояснится.`,
      );
      await you.say_and_wait(
        ` И затем — миг, когда осознаёшь красоту; миг, когда тебя целиком пленяет эта ослепительная красота.`,
      );
      await you.say_and_wait(` Даже если жизнь полна страданий.`);
      await you.say_and_wait(` Даже если неизведанное бросает в суету.`);
      await you.say_and_wait(
        ` Даже если сердце глубоко сдавлено тем, что эту боль нельзя высказать другим.`,
      );
      era.printButton(`「Я тоже хочу увидеть эту прекрасную спину.»`, 1);
      await era.input();
      await you.say_and_wait(
        ` А если посмотреть с другой стороны — это самый сильный ветер (поддержка), что перерождает человека.`,
      );
      await you.say_and_wait(
        `Обязательно, обязательно вспомнят это, гонясь за той прекрасной спиной!`,
      );
      await you.say_and_wait(`Поэтому прошу: помоги мне.`);
      await era.printAndWait(`Так ты смотришь ей прямо в глаза — ${maru.sex}.`);
      await maru.say_and_wait(
        ` ${callname} И что же ты собираешься мне велеть?`,
      );
      await you.say_and_wait(
        `Прямо на травяном поле академии я покажу тебе самое незабываемое зрелище.`,
      );
      await maru.say_and_wait(`Я так жду, знаешь?`);
      await era.printAndWait(
        `С улыбкой, словно у цветка, только что раскрывшегося весной, ${maru.name} ждёт, когда настанет тот миг.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_34: (() => {
    const title = 'Пояс безветрия';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} emperor 皇帝（鲁铎象征）
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, emperor, you) => {
      emperor.name = 'Император';
      await era.printAndWait(`Ты рассеянно смотришь на черновик в руке.`);
      await you.say_and_wait(
        `Нет, так не развязать тот узел в сердце, что ${maru.sex} несёт.`,
        true,
      );
      await era.printAndWait(
        `Комкаешь черновик перед собой и небрежно отбрасываешь в сторону.`,
      );
      await era.printAndWait(
        `Ком летит по параболе и сталкивается с другими комами.`,
      );
      await era.printAndWait(
        `Желание сбежать и досада от того, что не получается, так и растекаются`,
      );
      await era.printAndWait(`Тук-тук-тук.`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `Прошу прощения, это ${you.actual_name_with_title}?`,
      );
      era.printButton(`「Да, в чём дело?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `А, тренер ${you.adult_sex_title}, мм. Президент просила передать тренеру ${
          you.adult_sex_title
        } одно сообщение.`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `『У меня есть ответ, который ты ищешь.』`,
      );
      await you.say_and_wait(`…Понятно. Выхожу сейчас же.`);
      await you.say_and_wait(
        `С каких пор… нет, неужели смотрела со стороны с самого начала?`,
        true,
      );
      era.drawLine();
      await era.printAndWait(`Ты идёшь следом за ${maru.uma_sex_title}.`);
      await you.say_and_wait(`Как много уже прознала Символи Рудольф?`, true);
      await era.printAndWait(`Беспричинное раздражение захватывает тебя.`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}`,
        `Извините за беспокойство. `,
      );
      await era.printAndWait(
        `В сопровождении ${maru.uma_sex_title} ты приходишь ночью в кабинет студенческого совета.`,
      );
      await era.printAndWait(`eclipse first,the rest nowhere.`);
      await era.printAndWait(
        `Огромная табличка и целиком поглощённый бумагами Император вызывают у тебя холодный пот.`,
      );
      await emperor.say_and_wait(`Пришёл(а)?`);
      await era.printAndWait(
        `Словно только что заметив тебя, Император отрывается от дел и смотрит на тебя со спокойной улыбкой.`,
      );
      await emperor.say_and_wait(`Как тебе сегодняшняя луна?`);
      await you.say_and_wait(
        `Сегодняшняя луна мало чем отличается от вчерашней. И ещё: ваше величество Император, мы снова встретились.`,
      );
      await era.printAndWait(
        `Нельзя, чтобы ${maru.sex}  разозлилась, иначе последствия будут страшными.`,
      );
      await era.printAndWait(
        `Нельзя слишком льстить, иначе ${maru.sex}  потеряет интерес.`,
      );
      await emperor.say_and_wait(
        `Встретить столь выдающегося тренера — и мне, президенту студсовета Трейсен, большая честь.`,
      );
      await you.say_and_wait(
        `Когда собеседник являет великодушие, лучше не отказываться.`,
        true,
      );
      await emperor.say_and_wait(`И ещё`);
      await era.printAndWait(
        `Словно не давая этому ответу ни да ни нет, Император сразу задаёт второй вопрос.`,
      );
      await emperor.say_and_wait(
        `Как, по-твоему, должны складываться отношения тренера и ${maru.uma_sex_title}? Тренер ${maru.name}.`,
      );
      await era.printAndWait(
        `Последнее обращение нарочно произнесено с нажимом — должно быть, подсказка.`,
      );
      await you.say_and_wait(
        `По-моему, ${maru.uma_sex_title} и тренер должны поддерживать друг друга.`,
      );
      await emperor.say_and_wait(`…А дальше?`);
      await era.printAndWait(`Император смотрит на тебя с насмешкой на лице.`);
      await you.say_and_wait(`Ну, вроде бега в три ноги`);
      await emperor.say_and_wait(
        `Если бы этим всё и ограничивалось. Почему тогда ты в нынешнем положении?`,
      );
      await emperor.say_and_wait(
        `Как тренер, то есть как лидер ${maru.uma_sex_title}.`,
      );
      await emperor.say_and_wait(
        `Это — прокладывать путь там, где его нет, с уже пройденной дороги выходить на новую, вести других к неведомым землям.`,
      );
      await emperor.say_and_wait(
        `Это — когда ${maru.uma_sex_title} стоит перед растерянностью и тревогой за будущее, умело направлять видение и уверенность ${maru.uma_sex_title}.`,
      );
      await emperor.say_and_wait(`И что из этого ты уже сделал(а)?`);
      await you.say_and_wait(`……`);
      await you.say_and_wait(
        `Император говорит о лидерстве, нужном тренеру.`,
        true,
      );
      await you.say_and_wait(
        `А здесь ${maru.sex} хочет с меня доказательство, что я гожусь в тренеры к ${maru.name}.`,
        true,
      );
      await you.say_and_wait(`Тогда`, true);
      await you.say_and_wait(
        `…Куда я иду — туда же, куда и ${maru.sex} идёт. Я сажусь на корабль, условие — быть матросом.`,
      );
      await you.say_and_wait(
        `Каждый миг я слежу, иду ли к своей цели, каждый миг знаю: подстраиваться под капитана я соглашаюсь по своей воле — это мой выбор.`,
      );
      await you.say_and_wait(
        `Это выбор, сделанный мной на своих условиях, на своём месте, по своей воле.`,
      );
      await you.say_and_wait(
        `Лишняя ноша, риск, что тебя не поймут, одиночество, которое терпишь в одиночку.`,
      );
      await you.say_and_wait(
        `…В каком-то смысле это жертва, которую я приношу идеалу.`,
      );
      await you.say_and_wait(`Но разве путь к идеалу бывает без цены.`);

      await you.say_and_wait(
        `Так что не столько я подчиняюсь приказам капитана, сколько собственному выбору.`,
      );
      await emperor.say_and_wait(
        `Подчинение — в конце концов всего лишь красивое слово для покорности.`,
      );
      await emperor.say_and_wait(
        `Всего лишь ложь, что в панике выхватили наугад?`,
      );
      await you.say_and_wait(
        `…Ваше величество, вы ведь слышали о таком существе, как вьюн?`,
      );
      await emperor.say_and_wait(
        `Обычное существо на рисовых полях и в прудах, и что?`,
      );
      await you.say_and_wait(
        `Тогда император, должно быть, знает, что вьюна очень трудно поймать.`,
      );
      await you.say_and_wait(
        `На дне рисового поля скользит туда-сюда, поймать трудно: даже если повезёт коснуться — сразу выскользнет из рук.`,
      );
      await you.say_and_wait(
        `Мы, что всё время ускользаем, чем отличаемся от хитрого вьюна?`,
      );
      await you.say_and_wait(
        `Скользить мимо долга, который должно нести, — разве так жить счастливее, чем принять боль?`,
      );
      await you.say_and_wait(`Корень покорности — слабость.`);
      await you.say_and_wait(
        `Тот, кто привык к поражению, принял поражение и в конце концов к нему приспособился, умеет лишь проигрывать: не умеет мечтать и даже не смеет мечтать, что мог бы победить, — неудачник.`,
      );
      await you.say_and_wait(
        `…А тот, кто идёт от поражения к следующему поражению, успеха не добудет.`,
      );
      await you.say_and_wait(
        `Голым рождаешься в крике и голым уйдёшь с криком; если не сделать ничего, что оставит след в этом мире, и уйти вот так, с сожалением, — как-то жаль.`,
      );
      await you.say_and_wait(`Поэтому подчиняюсь решению.`);
      await you.say_and_wait(
        `…Раз путь тренера уже выбран, место, где от меня больше всего толка, — конечно, Трейсен.`,
      );
      await you.say_and_wait(
        `Хотя я не могу утверждать, что путь вперёд и то, чего хочет ${maru.name}, полностью одно и то же,`,
      );
      await you.say_and_wait(
        `Но я не сомневаюсь: ${maru.name} доверяет мне, и эта любовь достаточно надёжна, поэтому я меняю сомнение на дело.`,
      );
      await emperor.say_and_wait(`…Как командир — скажем так, едва на зачёт.`);
      await emperor.say_and_wait(
        `Мировоззрение ещё детское, ценности — не больше чем посредственность.`,
      );
      await emperor.say_and_wait(
        `Единственное, что дотягивает до черты, — лишь твёрдое видение.`,
      );
      await emperor.say_and_wait(`…Впрочем, не в этом сегодняшняя суть.`);
      await era.printAndWait(
        `Император смотрит на тебя в маске по имени «улыбка».`,
      );
      await emperor.say_and_wait(`Ты любишь кино?`);
      await era.printAndWait(
        `Император вдруг задаёт такой вопрос, и ты немного недоумеваешь.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `Пока ты думаешь, как ответить прилично, император продолжает, не дожидаясь.`,
      );
      await emperor.say_and_wait(
        `Представим такую сцену: двое тренеров случайно выбрали один и тот же вестерн и видят кадр: шериф и ковбой сходятся в дуэли, после выстрела один мёртв, другой жив, а у двух зрителей лица совсем разные —`,
      );
      await era.printAndWait(
        `Император нарочно тянет последнюю фразу и ждёт твоего ответа.`,
      );
      await you.say_and_wait(
        `Они, верно, вжились в разных героев фильма и делят с ними радость и горе.`,
      );
      await emperor.say_and_wait(
        `Хотя погиб благородный офицер, что гнался за ковбоем, а выжил преступник в розыске?`,
      );
      await you.say_and_wait(
        `…Боюсь, тренер, что вжился в преступника, чтобы не испортить себе эстетическое наслаждение, в подсознании стёр все изъяны.`,
      );
      await you.say_and_wait(
        `…А другой не принимает преступника в роли героя, поэтому изъяны ковбоя для него невыносимы.`,
      );
      await emperor.say_and_wait(
        `Блестящий разбор. Ты ещё лучше, чем я думала.`,
      );
      await era.printAndWait(`Император хлопает в ладоши.`);
      await emperor.say_and_wait(
        `Тогда насколько ты знаешь настоящую  ${maru.name}?`,
      );
      await emperor.say_and_wait(
        `Откуда ты знаешь, что сам(а) не тот «зритель», что вжился в ковбоя?`,
      );
      await emperor.say_and_wait(`Спасибо за труд.`);
      await era.printAndWait(
        `Император встаёт и смотрит вдаль на Тренировочное поле.`,
      );
      await era.printAndWait(
        `На траве изо всех сил тренируются ${maru.uma_sex_title} — крики разносятся на весь Трейсен.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_37: (() => {
    const title = 'Мысли';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`Хе-хе~ разве это уже не отношения любовников?`);
      await era.printAndWait(
        `В болтовне в шутку зашла мысль пожить у ${maru.name} какое-то время — и та неожиданно легко согласилась.`,
      );
      await era.printAndWait(
        `Тащит тебя по магазинам выбирать подходящие вещи, и под конец добра столько, что даже в Та не влезает.`,
      );
      await era.printAndWait(
        `С ${maru.name} посоветовались и решили всё это отправить службой доставки.`,
      );
      await era.printAndWait(
        `Раз делите стол и крышу, узы между вами всё крепче.`,
      );
      await you.say_and_wait(
        `Пора. Сейчас нужно, чтобы ${maru.name} сделала этот шаг.`,
        true,
      );
      await era.printAndWait(
        `Из страха перед провалом смотришь, как удобный шанс ускользает из рук.`,
      );
      await era.printAndWait(
        `Хочется стремиться к чему-то — и не хватает духа протянуть руку.`,
      );
      await you.say_and_wait(
        `…Не столько подталкивать ${maru.name}, сколько самому(ой) сделать этот шаг.`,
        true,
      );
      await era.printAndWait(
        `Ты проверяешь купленную мебель и думаешь, как действовать.`,
      );
      era.drawLine({ content: 'После ужина' });
      era.printButton(`「Завтра вместе полюбуемся осенью?」`, 1);
      await era.input();
      await era.printAndWait(
        `ты собираешься в самый удачный момент рассказать ${maru.name} о планах на следующую неделю.`,
      );
      await maru.say_and_wait(`Кстати, и правда пора любоваться осенью.`);
      await maru.say_and_wait(
        `Тогда давай завтра вместе выберемся на прогулку?`,
      );
      await era.printAndWait(
        `${maru.name} откладывает палочки, складывает ладони и с улыбкой смотрит на тебя.`,
      );
      await you.say_and_wait(`Отлично!`, true);
      await you.say_and_wait(
        `Хорошо, люди же говорят: осень искусств, осень чтения?`,
      );
      await you.say_and_wait(
        `Летняя жара и зимний холод рядом не стоят: такая свежая осень — лучшее время, чтобы излить художественные чувства.`,
      );
      await you.say_and_wait(
        `К тому же я тоже хочу этой осенью оставить с ${maru.name} прекрасные воспоминания.`,
      );
      await maru.say_and_wait(
        `Ого, ${callname} ты и правда так обо мне печёшься?`,
      );
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? 'красотка' : 'красавчик'}я тоже хочу с ${callname} оставить прекрасные воспоминания…`,
      );
      await maru.say_and_wait(`Хо-хо~ я уже предвкушаю завтрашнюю программу♪`);
      await era.printAndWait(`${maru.name} выглядит в отличном настроении.`);
      era.drawLine({ content: 'На следующее утро' });
      await maru.say_and_wait(` ${callname}? уже на ногах?`);
      await era.printAndWait(
        `ты трёшь ещё не проснувшиеся глаза и с трудом поднимаешься.`,
      );
      era.printButton(`「Чуть раньше оговорённого подъёма」`, 1);
      await era.input();
      await era.printAndWait(
        `рано утром ты слышишь ${maru.name} — давно не слышанный бодрый голос, и это наполняет тебя надеждой на то, что впереди.`,
      );
      await maru.say_and_wait(
        `Кстати, недавно вроде проходит художественная выставка, давай сделаем её нашей первой остановкой.`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `уже почти полдень, ${callname} не хочешь отведать бэнто, которое я приготовила?`,
      );
      era.drawLine();
      await you.say_and_wait(`Хватать игрушки клешнёй — та ещё задачка.`);
      await era.printAndWait(
        `обнимая ${maru.name} игрушку, ${maru.teen_sex_title} сияет счастливой улыбкой.`,
      );
      await you.say_and_wait(`Хватит.`);
      era.drawLine();
      await era.printAndWait(`Последней остановкой становится крыша академии.`);
      await maru.say_and_wait(`Ветер тоже умеет взрослеть, да?`);
      await era.printAndWait(
        `вслед за ${maru.name} ты окидываешь взглядом всю академию: золотые листья гинкго кружатся с ветром по всему небу.`,
      );
      await maru.say_and_wait(
        `Новорождённый ветер всегда беззаботно летит к небу.`,
      );
      await maru.say_and_wait(
        `однако, когда ${maru.sex} прикоснулась к печали опавших листьев, ${maru.sex} её шаги стали тяжёлыми.`,
      );
      await maru.say_and_wait(
        `${maru.sex} тоже хочет, чтобы те опавшие листья почувствовали свободу неба, поэтому нежно обнимает их, желая унести вместе в беззаботное небо.`,
      );
      await maru.say_and_wait(
        `Но земля, что держит опавшие листья, в конце концов побеждает объятия ветра, и на пути к небу листья ломают крылья.`,
      );
      await maru.say_and_wait(
        `В конце концов опавшие листья всё же возвращаются к земле.`,
      );
      await era.printAndWait(
        `ты начинаешь входить в её святилище — ${maru.teen_sex_title}.`,
      );
      await you.say_and_wait(
        `Даже так опавшие листья под водительством ветра всё равно делают свой выбор.`,
      );
      await you.say_and_wait(
        `Нет ничего, что лучше этого пути явило бы жизненную силу опавших листьев.`,
      );
      era.printButton(`「${maru.name}…у меня есть что тебе сказать.」`, 1);
      await era.input();
      await maru.say_and_wait(`Хм?`);
      await era.printAndWait(
        `отблески заката ложатся на ${maru.name} длинные волосы, окутывая ${maru.sex} слоем золотого сияния.`,
      );
      era.printButton(`「Жди следующую неделю как следует!」`, 1);
      era.printButton(`тогда пусть ${maru.sex} сама увидит.`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `тогда я как следует буду ждать, ${callname} какой сюрприз мне преподнесёт.`,
        );
        await era.printAndWait(`смутно что-то уловив, ${maru.name} моргает.`);
      } else {
        await you.say_and_wait(`Дальше я тебя точно ошарашу!`, true);
        await era.printAndWait(
          `${you.name} выдыхаешь с облегчением и ждёшь следующую неделю.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_38: (() => {
    const title = 'Безветрие';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, minoru, taste, you, callname) => {
      maru.print(`Пора бы уже закончить.`);
      maru.print(
        `Если бег не приносит радости, сколько ни старайся — не ответишь на один вопрос.`,
      );
      maru.print(`Зачем мне терпеть эту боль?`);
      maru.print(
        `Поэтому просто буду смотреть, как младшие блистают на скаковом поле!`,
      );
      maru.print(`А уж в этом нынешняя я особенно хороша!`);
      await maru.say_and_wait(`……`);
      maru.print(`Но почему в груди всё равно пусто?`);
      maru.print(
        `Словно какой-то ответ, который мне нужно найти, всё ещё ждёт меня?`,
      );
      await maru.say_and_wait(`Ответ?`);
      maru.print(
        `Ладно, проехали. Приведу мысли в порядок и пойду к дорогому ${callname} !`,
      );
      maru.print(
        `какую бы дорогу я ни выбрала дальше, ${callname} всё равно будет нежно меня подбадривать.`,
      );
      maru.print(`кстати, ${callname} вроде хочет подарить мне подарок.`);
      await maru.say_and_wait(
        `я жду с полным предвкушением, ясно? ${callname}?`,
      );
      era.drawLine({ content: 'Кабинет председателя' });
      await era.printAndWait(
        `При помощи Императора и всегда поддерживавших ${maru.name} тех ${maru.uma_sex_title}, к сегодняшнему дню удалось собрать 90% подписей.`,
      );
      await era.printAndWait(
        `Тихо стучишь в дверь кабинета председателя и, услышав «войдите», распахиваешь дверь.`,
      );
      await taste.say_and_wait(
        `Вопрос! Этот тренер занял ночное Тренировочное поле — что собирается делать?`,
      );
      await era.printAndWait(
        `После короткого приветствия ты сразу, без обиняков, излагаешь свой замысел.`,
      );
      await you.say_and_wait(
        `Я хочу, чтобы моя подопечная ${maru.uma_sex_title}${maru.name} снова зажгла надежду.`,
      );
      await taste.say_and_wait(
        `Удивление! Почему непременно нужно Тренировочное поле Трейсена?`,
      );
      await you.say_and_wait(
        `На этом Тренировочном поле проливали пот бесчисленные ${maru.uma_sex_title}. Видеть, как ${maru.uma_sex_title} бьются изо всех сил, — именно то, чего хотела ${maru.name}.`,
      );
      await you.say_and_wait(
        `Это собранное мной у всех ${maru.uma_sex_title} совместное прошение.`,
      );
      await era.printAndWait(
        `Ты наклоняешься и протягиваешь густо исписанный подписями лист той, что стоит перед тобой — ${maru.teen_sex_title}.`,
      );
      await era.printAndWait(
        `Собеседница внимательно проверяет каждую подпись; котёнок на её макушке кружит вокруг тебя: мяу~ мяу~ — ${maru.teen_sex_title}.`,
      );
      await era.printAndWait(
        `Хотя ${maru.teen_sex_title} вынуждена вставать на цыпочки, чтобы встретиться с тобой взглядом, но ты сейчас не смеешь даже дышать, ожидая окончательного приговора.`,
      );
      await taste.say_and_wait(
        `Трогательно! Трейсенские ${maru.uma_sex_title} сплотились даже крепче, чем я себе представляла.`,
      );
      await taste.say_and_wait(`Этот тренер.`);
      era.printButton(`「Да!»`, 1);
      await era.input();
      await taste.say_and_wait(
        `Согласие! В этом мероприятии я тоже хочу участвовать!`,
      );
      await era.printAndWait(
        `${maru.teen_sex_title}Берёт перьевую ручку и старательно выводит на бумаге имя с северным колоритом, после чего возвращает тебе.`,
      );
      era.printButton(`「Председатель, спасибо тебе!»`, 1);
      await era.input();
      await era.printAndWait(
        `Улыбающаяся ${maru.teen_sex_title} раскрывает веер с надписью «Радость!», а рядом ${
          minoru.name
        } смотрит со смешанным чувством тревоги и радости на ${taste.name} и ${you.name}.`,
      );
      await era.printAndWait(
        `Осторожно убрав бумагу, ты покидаешь кабинет председателя.`,
      );
      era.drawLine();
      maru.print(
        ` ${callname} говорит, что хочет пойти со мной на торговую улицу, и достаёт заранее приготовленные купоны.`,
      );
      maru.print(
        `Речи и поступки и впрямь подозрительны, но когда ${callname} предлагает свидание по своей воле — такая редкость.`,
      );
      maru.print(`Даже в роли наживки это слишком щедро.`);
      maru.print(
        `С улыбкой приняв этот подарок, вместе с ${callname} в «Сайзерии» на скорую руку пообедав, вместе посмотрели фильм.`,
      );
      maru.print(
        `Может, потому что будний день. На этот сеанс зрителей неожиданно мало, так что билеты рядом друг с другом достались без труда.`,
      );
      maru.print(
        `Похоже, это вдохновляющий фильм о том, как ${maru.uma_sex_title} от хрупкости медленно идёт к зрелости. Смотря, как ${maru.uma_sex_title} сквозь бессчётные невзгоды всё равно стискивает зубы и идёт вперёд, и невольно хочется ${maru.sex} поаплодировать.`,
      );
      await you.say_and_wait(
        `Сколько ни смотри на такие сцены, внутри сами собой поднимаются тепло и сила.`,
      );
      maru.print(`Глубоко разделяю.`);
      maru.print(
        `После фильма вместе пошли испытать стоящий неподалёку, говорят, самый сложный автомат с игрушками — и, как и следовало ожидать, проиграли.`,
      );
      maru.print(
        `Сначала меня собирались утешить — ${callname} но в итоге азарт взял верх, и игрушку уже нельзя было не вытащить.`,
      );
      maru.print(
        `Та, кого утешали, в итоге сама стала утешать — в этом тоже свой вкус судьбы.`,
      );
      era.printButton(`「Сегодня вечером вместе заглянем в Трейсен?»`, 1);
      await era.input();
      maru.print(
        `За едой в дорогом ресторане универмага так говорит ${callname}.`,
      );
      await maru.say_and_wait(
        `Ох, ${callname} наконец-то раскроешь мне этот подарок?`,
      );
      await you.say_and_wait(
        `Да что там, я уже так разволновалась, что вилку не удержать.`,
      );
      await maru.say_and_wait(`Настолько волнуешься?`);
      await you.say_and_wait(
        `Да, подарок именно такого масштаба — он точно врежется тебе в память.`,
      );
      maru.print(
        ` ${callname} серьёзно отвечает на мою шутку, и я невольно начинаю ждать с нетерпением.`,
      );
      await maru.say_and_wait(`Тогда дальше надо как следует насладиться!`);
      maru.print(
        `Хотя до законного возраста для выпивки ещё год, но в такой мере ещё ok, правда?`,
      );
      maru.print(
        `Из-за выпитого так и болтаем по дороге, и я составляю компанию ${callname} медленно направляясь к Трейсен.`,
      );
      maru.print(
        `За разговором тема вдруг свернула к той уже завершившей карьеру ${maru.uma_sex_title}, и сердце вдруг кольнуло.`,
      );
      await you.say_and_wait(
        `Кстати, та, что раньше ушла на покой, ${maru.uma_sex_title} теперь старается стать тренером.`,
      );
      await maru.say_and_wait(`Стремиться стать тренером — тоже дорога.`);
      maru.print(`Похоже, ${maru.sex} наконец нащупала свою цель.`);
      maru.print(`…Сердце вдруг кольнуло.`);
      await you.say_and_wait(
        `Может, кому-то от природы не дано какое-то поприще, но если заново осмыслить свои ресурсы и пойти в другую сторону, кто знает — там может ждать большой сюрприз!`,
      );
      maru.print(`Не знаю, что лучше сказать, и потому молчу.`);
      maru.print(
        `До академии Трейсен ещё одна улица, а до меня уже доносится смех — словно там проходит какое-то мероприятие.`,
      );
      maru.print(`Странно, обычный Трейсен разве такой шумный?`);
      maru.print(`Это то, что ${callname} приготовил(а) в подарок.`);
      maru.print(`Ну вот, какой огромный крюк мы сделали.`);
      await maru.say_and_wait(`Пойдём посмотрим вместе?`);
      maru.print(`Так и тащу за собой ${callname} и бегу к Трейсен.`);
      maru.print(`Так радостно бежать — даже ностальгия берёт.`);
      maru.print(
        `Следуя направлению амплитуды звука, вы неспешно идёте туда, где находится Тренировочное поле.`,
      );
      maru.print(
        `Как на праздничном фестивале, тренеры и ${maru.uma_sex_title} болтают — то проливают пот на травяном поле, то переговариваются и ликуют на трибунах.`,
      );
      maru.print(
        `Директриса и Хаякава ${
          maru.adult_sex_title
        } замечают ваше появление: первая раскрывает бумажный веер с надписью 「Радость! Восторг!」, вторая встречает вас улыбкой; к слову, котёнок на голове директрисы довольно помахивает хвостом.`,
      );
      maru.print(`У каждого на лице — довольная улыбка.`);
      maru.print(`Словно все наслаждаются праздником.`);
      await maru.say_and_wait(`Как же ностальгично.`);
      maru.print(`Мой мир когда-то был полон красок.`);
      maru.print(
        `Ярко-красный суперкар, что я увидела в детстве: его крутой облик тогда глубоко меня заворожил.`,
      );
      maru.print(
        `Я слышала его шёпот: казалось, он, как и я, жаждал свободно мчаться.`,
      );
      maru.print(
        `И тогда маленькая я тайком поклялась: когда придёт пора покупать машину, обязательно выберу именно его.`,
      );
      maru.print(
        `Чтобы встретить день, когда мы зазвучим в унисон, я смотрела на фото в каталоге и усердно оттачивала вождение.`,
      );
      maru.print(
        `В тот день, когда получила права, сама приняла их в свои руки.`,
      );
      maru.print(
        `Нереальное чувство, будто во сне: я снова и снова проверяла, что это явь.`,
      );
      maru.print(
        `Всё кисло-сладкое, пережитое на тренировках: помимо добытой радости, тихо подкрадывались и колебания, и растерянность.`,
      );
      maru.print(
        `Может, такая я и была в самом счастливом состоянии? Нет, хотя каждый нынешний день тоже проходит очень весело.`,
      );
      maru.print(
        `Важнее почестей после победы — делиться новостями перед скачкой, бег, в котором пот льётся на траву, частое дыхание, что толкает ноги взорваться ещё большей силой.`,
      );
      maru.print(
        `Пока не достигнешь того мира — о котором знают лишь Три богини.`,
      );
      maru.print(
        `Если все смогут почувствовать радость бега, мой идеальный мир будет уже недалёк.`,
      );
      maru.print(
        `Однако идеал и реальность, быть может, всегда будут в противоречии.`,
      );
      maru.print(
        `Многие ${maru.uma_sex_title} ещё до того, как почувствовать эту радость, оказываются схвачены за одежду слоями терний, что держат шаг.`,
      );
      maru.print(
        `Кричат и молятся, чтобы кто-нибудь помог ${maru.couple_title}.`,
      );
      maru.print(
        `Однако единственный способ — чтобы ${maru.couple_title} сама это осознала и смогла вырваться.`,
      );
      maru.print(
        `Молятся, молятся, чтобы ${maru.couple_title} смогла простить бесталанную себя и сбросить эту тяжёлую ношу (день и ночь проклиная собственное бессилие).`,
      );
      maru.print(
        `И тогда невыразимая печаль стала печалью двух цветов: чёрного и белого.`,
      );
      maru.print(
        `В моём мире она молча стоит — словно немая стена, серый призрак.`,
      );
      maru.print(`Как призрак, отдаётся эхом, блуждает, взывает.`);
      maru.print(
        `И ради охваченных растерянностью ${maru.uma_sex_title}, и ради самой себя.`,
      );
      maru.print(
        `Восхищение младших, ветер, что чувствовала на траве, тоскливое былое.`,
      );
      maru.print(
        `Однако без конца утопать в воспоминаниях прошлого и выжимать удовольствие по имени сожаление — это неправильно.`,
      );
      maru.print(`Поэтому я решила попробовать идти вперёд, в будущее.`);
      maru.print(`Правильна ли выбранная мной дорога — сама не знаю.`);
      maru.print(
        `…Может, может быть, правильнее было ждать шанса в колыбельной прошлого.`,
      );
      maru.print(
        `Такая я: подготовки мало, а решимость — всего лишь плод порыва.`,
      );
      maru.print(
        `Быть может, на какой-нибудь глухой тропе и встретятся хлопоты от того, что заглохнешь.`,
      );
      maru.print(`Что же может всё это искупить?\n`);
      maru.print(`Смысл — вот ответ, который я нашла`);
      maru.print(
        `『В какой-то миг будущего я что-то сделала』, этого смысла довольно, чтобы искупить те страшные вещи, что ещё могут меня постичь.`,
      );
      maru.print(
        `Смотреть не со своей точки зрения: ведь люди всегда были лишь транспортом, что несёт время куда-то дальше.`,
      );
      maru.print(`Мир, ты так прекрасен.`);
      maru.print(
        `Иду не ради своей жажды и не ради других: я смотрю глазами ветра на ${maru.uma_sex_title}.`,
      );
      maru.print(
        `Я хочу стать лёгким ветром; нет: я (лёгкий ветер) высекла свой смысл во времени.`,
      );
      maru.print(`Каким бы ни был финал, ветер навсегда со мной.`);
      maru.print(`Надо скорее вернуться к тренеру.`);
      await maru.say_and_wait(`Нужно, чтобы тренер увидел меня преображённой♪`);
      maru.print(`Так правда хорошо?`);
      await maru.say_and_wait(
        `Я не хочу предавать своё сердце, так что… этого уже довольно.`,
      );
      await maru.say_and_wait(
        `Надо и бороться, изо всех последних сил попробовать ещё раз — на этот раз лишь ради ветра, что веет в сердце.`,
      );
      maru.print(`В этом и есть твоя эстетика?`);
      await era.printAndWait(
        `Вздыхающая ${maru.name} на том исчезает, а новое «я» вновь взбалтывает воздух вокруг.`,
      );
      await era.printAndWait(
        `Словно нежный ветер, хочет поскорее оказаться рядом с тем, у кого такая тёплая улыбка.`,
      );
      await era.printAndWait(`В тот день родился нежный ветер.`);
      era.drawLine();
      await era.printAndWait(
        `Ты в тревоге ждёшь, как отреагирует ${maru.name}.`,
      );
      await era.printAndWait(
        `Печаль? Боль? Облегчение? Бедным словам не описать, о чём думает ${maru.teen_sex_title}.`,
      );
      await era.printAndWait(
        `Время — то след от ползущей улитки, то инверсионный след самолёта.`,
      );
      await era.printAndWait(
        `Однако сейчас остаётся лишь ждать. Так ты говоришь страху в своём сердце.`,
      );
      await era.printAndWait(
        `Шестерни судьбы не останавливаются в миг ошибки: важнее всего, что делать дальше уже после неё.`,
      );
      await era.printAndWait(
        `Именно потому, что получен урок, который будет тихо ныть всегда, приходит более глубокое понимание мира.`,
      );
      await era.printAndWait(
        `Если это ${maru.name} , то наверняка подумала бы о чём-то подобном.`,
      );
      await era.printAndWait(
        `Вот так привести всё в порядок и встретить то, что будет дальше.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_40: (() => {
    const title = 'Хэллоуин';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Я просыпаюсь в морской пучине, и перед глазами нет ничего, кроме тьмы.`,
      );
      await era.printAndWait(
        `Как ни странно, всё ещё можно свободно дышать, всё ещё чувствуется биение сердца.`,
      );
      await era.printAndWait(`Где выход? Что мне делать? Я что, умираю?`);
      await era.printAndWait(
        `Такие вопросы бродят в голове и едва не поглощают сознание.`,
      );
      await era.printAndWait(`Однако от манжеты доносится ледяное трение.`);
      await era.printAndWait(
        `Словно силой толкая меня вперёд, ветер уносит меня из морской пучины в небо.`,
      );
      era.printButton(`「Мх, опять кошмар.」`, 1);
      await era.input();
      await era.printAndWait(
        `Вырвавшись из кошмара, я только тогда замечаю, что спина уже насквозь мокрая.`,
      );
      await you.say_and_wait(`Почему?`, true);
      await era.printAndWait(
        `Утреннее солнце сквозь занавески ложится на подушку, и в этом свете даже пыль, которую обычно не замечаешь, начинает сверкать.`,
      );
      await you.say_and_wait(
        `Чёрный океан, ветер, что невесть когда подул, чьё-то присутствие.`,
        true,
      );
      await era.printAndWait(
        `Ты силишься вспомнить прежние разрозненные обрывки; где-то внутри уже кажется, что это важно, и со дна души поднимается необъяснимая тревога.`,
      );
      await you.say_and_wait(
        `В следующий раз такие B-фильмы лучше не смотреть.`,
        true,
      );
      await era.printAndWait(
        `Вдруг становится смешно, что ты так всерьёз воспринимаешь эту странность; покачав головой, ты собираешься одеться.`,
      );
      await maru.say_and_wait(`Тук-тук-тук.`);
      await era.printAndWait(`Из-за двери доносится стук.`);
      if (era.get('love:4') >= 75) {
        await maru.say_and_wait(`Халоу~ ${callname}, уже встал(а)?`);
        await you.say_and_wait(`Сейчас подойду.`);
        await you.say_and_wait(`Уже привык(ла) ночевать у ${maru.name}?`, true);
        await era.printAndWait(
          `Сложив одеяло и одевшись, ты принимаешься за утренние сборы.`,
        );
      } else {
        await maru.say_and_wait(`Халоу~ ${callname} доброе утро?`);
        await era.printAndWait(
          `${maru.name}Как обычно, ты приходишь в кабинет тренера.`,
        );
      }
      await era.printAndWait(`Начинается новый день.`);
      era.drawLine();
      await era.printAndWait(
        `Ты убираешь последний документ в папку — на сегодня расписание можно считать закрытым.`,
      );
      await maru.say_and_wait(`Спасибо за работу.`);
      await era.printAndWait(`Сидящая рядом ${maru.name} ставит кофе на стол.`);
      await you.say_and_wait(`Большое спасибо.`);
      await era.printAndWait(
        `Не какой-то дорогой бренд — обычный растворимый кофе, какой продают в магазинах.`,
      );
      await era.printAndWait(
        `Хотя раньше доводилось пробовать и кофе получше, и даже чай, так и не привык(ла).`,
      );
      await era.printAndWait(
        `В итоге остаётся утешать себя тем, что кофе из конбини — сокровище, дарованное человечеству Тремя богинями.`,
      );
      await maru.say_and_wait(`${callname}Какие планы на вечер?`);
      await era.printAndWait(`Потягиваясь, ${maru.name} встаёт с дивана.`);
      await you.say_and_wait(`Планы?`);
      await era.printAndWait(
        `Ты быстро прокручиваешь в голове список — вроде ничего не упустил(а).`,
      );
      await you.say_and_wait(
        `Дальше, пожалуй, подготовим тренировку на выносливость?`,
      );
      await era.printAndWait(
        `Для скачек на длинные дистанции выносливость тоже очень важна.`,
      );
      await maru.say_and_wait(
        `Нет сил больше. Тренировки на выносливость и правда важны, но ${callname}, ты ничего не забыл(а)?`,
      );
      await you.say_and_wait(`……?`);
      await maru.say_and_wait(
        `Про то, как в прошлом году мы договорились вместе пойти на хэллоуинский парад, ${callname}, ещё помнишь?`,
      );
      await era.printAndWait(
        `Глядя на растерянн(ого/ую) ${you.name}, ${maru.name} в конце концов всё-таки повторяет.`,
      );
      await you.say_and_wait(`Вроде действительно говорил(а) об этом.`, true);
      await era.printAndWait(
        `Открываешь заметки в телефоне, немного листаешь вниз и находишь: в прошлый Хэллоуин вечером ты это записал(а).`,
      );
      await you.say_and_wait(`Ну и дырявая же у меня память.`);
      await era.printAndWait(
        `Потому что случилось кое-что поважнее, и дела с низким приоритетом на время отошли в сторону?`,
      );
      await maru.say_and_wait(`${callname}?`);
      await you.say_and_wait(`Пойдём вместе.`);
      await era.printAndWait(
        `${you.name}Ты осторожно берёшь ${maru.name} за правую руку и, ведя за собой, выходишь из кабинета тренера.`,
      );
      await maru.say_and_wait(
        `Ну вот так и засветимся на хэллоуинском сборище♪`,
      );
      await era.printAndWait(
        `${maru.name}Звонкий смех скользит вдоль трепещущих на ветру прядей и доносит радость до кабинета тренера.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = 'Рождество';
    /**
     * 结局分支：姐姐的烦恼+少女的忧郁全部触发，风值=15->GE，15>风值>=10->TE
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Уже декабрь, ${you.name} кладёт ручку и смотрит на снежинки за окном.`,
      );
      await era.printAndWait(
        `В Трейсен в эту пору каждый год особенно холодно.`,
      );
      await era.printAndWait(
        `${you.name}Ты качаешь головой и как раз собираешься снова сосредоточиться на бумагах.`,
      );
      await maru.say_and_wait(`Хм-хм-хм♪`);
      await maru.say_and_wait(`Халоу———— ${callname}.`);
      await era.printAndWait(
        `С поворотом дверной ручки та, от которой ${you.name} без ума, ${maru.teen_sex_title} открывает дверь.`,
      );
      await maru.say_and_wait(
        `${callname}Даже в праздник не расслабляешься, ${
          maru.sex_code !== 1 ? ' красотка' : 'красавчик'
        }, обожаю таких старательных♪`,
      );
      await era.printAndWait(
        `Испугавшись внезапно вломившейся ${maru.name}, роняешь ручку на пол и, поспешно подобрав её, ${you.name} ворчливо огрызается.`,
      );
      era.printButton(
        `「${maru.name} собираешься пригласить меня на свидание?」`,
        1,
      );
      await era.input();
      await era.printAndWait(`Однако ${maru.name} выглядит ещё счастливее.`);
      await maru.say_and_wait(
        `Хо-хо~ выходит, ${callname} так сильно хочешь на свидание со мной? Ара♪ ${
          maru.sex_code !== 1 ? ' красотка' : 'красавчик'
        }, моё обаяние и правда поразительно⭐`,
      );
      await maru.say_and_wait(
        `Раз уж ${callname} пригласил(а) меня, тогда выходим прямо сейчас!`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `А ведь вот так с ${callname} гулять по пешеходной дорожке — тоже неплохо.`,
      );
      era.printButton(`「А-а… как сияет」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}С переодевшейся в зимнее ${maru.name} ты идёшь по улице, и без того прекрасная ${
          maru.sex
        } после тщательно выбранного наряда своим особым обаянием накрепко хватает ${you.name} за сердце.`,
      );
      await era.printAndWait(
        `Турист А: Это же ${maru.name}, да? Я по телевизору видел, как ${maru.sex} бежит.`,
      );
      await era.printAndWait(
        `Турист Б: Это ${maru.name}! Я фанат ${you.name}! Обязательно дайте мне автограф!`,
      );
      await maru.say_and_wait(`Вот это да, я уже настолько знаменита?`);
      await era.printAndWait(
        `Нехорошо — кажется, всё больше людей замечают, что ${maru.sex} пришла.`,
      );
      await era.printAndWait(
        `${maru.name} обаяние, кажется, втянуло даже посторонних,`,
      );
      era.printButton(`(Не дам вам помешать нашему времени с ${maru.name})`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}Крепко сжимаешь ${maru.name} за постепенно теплеющую ладошку и ускоряешь шаг, пытаясь оторваться от фанатов`,
      );
      await maru.say_and_wait(`…Хе-хе♪`);
      await era.printAndWait(
        `Вы наконец отрываетесь от фанатов, что шли по пятам, и только тогда замечаете, что оказались в парке в центре города`,
      );
      await era.printAndWait(
        `В отличие от запыхавшегося ${you.name}, как скаковая ${maru.uma_sex_title}, ${
          maru.sex
        } кажется, даже не сбила ритм дыхания.`,
      );
      await era.printAndWait(
        `—— По сравнению с обычными тренировками это даже не закуска.`,
      );
      await you.say_and_wait(`Фух… фух… хаа, вроде оторвались`, true);
      await maru.say_and_wait(`${callname}, здесь так тихо.`);
      await era.printAndWait(
        `Переплетённые LED-гирлянды обвивают деревья по обе стороны дороги и бесконечно тянутся от вас вперёд.`,
      );
      await era.printAndWait(
        `Огни освещают рождественскую ночь и дарят декабрьскому ветру каплю тепла и света.`,
      );
      era.printButton(`「Да, здесь и правда отличное место для свидания」`, 1);
      await era.input();
      await maru.say_and_wait(
        `В канун Рождества, тренер- ${you.adult_sex_title} ♪… Не хочешь разделить с самым любимым человеком медленно текущее время?`,
      );
      await you.say_and_wait(
        `Раз разговор зашёл так далеко, не шагнуть вперёд было бы совсем невежливо!`,
      );
      await maru.say_and_wait(`Хм-хм~ Так что, ${callname}, какой ответ?`);
      era.printButton(
        `${maru.actual_name_with_title}, прошу, пойдём на свидание!`,
        1,
      );
      await era.input();

      await maru.say_and_wait(
        `Ара~ ${callname}, какая смелость. Я бы и сама с ходу согласилась, но——`,
      );
      await era.printAndWait(
        `После этой пробежки у ${you.name} волосы совсем растрепались`,
      );
      await maru.say_and_wait(
        `${callname} вид такой милый. Прежде чем на свидание, давай сначала причешем волосы`,
      );
      era.printButton(`「Ах, хорошо」」`, 1);
      await era.input();

      await era.printAndWait(
        `Не успеваешь ${you.name} ответить, как ${maru.name} уже достала расчёску из своей сумки`,
      );
      await maru.say_and_wait(`${callname}Наклони голову`);
      await era.printAndWait(
        `${you.name}Послушно, как хочет ${maru.name}, опускаешь голову.`,
      );
      await maru.say_and_wait(
        `М-м… у ${you.name} волосы суховаты, ${callname} нелегко же тебе пришлось.`,
      );
      await era.printAndWait(
        `${maru.sex}Сдерживая нажим, нежно расчёсывает ${
          you.name
        } по волосам, и этот тёплый ностальгический запах возвращает ${
          you.name
        } в детство — к запаху солнца на траве.`,
      );
      await maru.say_and_wait(
        `…Так, пожалуй, хватит♪ Тогда, ${callname}, сегодня на свидании прошу любить и жаловать.`,
      );
      era.printButton(`「С моей стороны тоже прошу любить и жаловать」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} Крепко сжимаешь ${maru.name} за левую руку и не спеша наслаждаешься коротким сладким мгновением.`,
      );
      await maru.say_and_wait(
        `Кстати, здесь, кажется, самое популярное место для пар на этой неделе.`,
      );
      era.printButton(`「Недаром по пути одни парочки」`, 1);
      await era.input();

      await maru.say_and_wait(
        `Хе-хе♪ В следующее Рождество давай тоже придём сюда смотреть пейзаж.`,
      );
      await maru.say_and_wait(
        `${callname}, тогда пейзаж будет ещё прекраснее, чем сейчас.`,
      );
      await era.printAndWait(
        `Декабрьский холодный ветер словно стал свидетелем того, как ${you.name} и ${maru.name} стали ближе.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = 'Перед Arima Kinen · Самая грандиозная сцена';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Arima Kinen — самые грандиозные скачки в Японии, и множество скаковых ${maru.uma_sex_title} получают право выйти на старт по итогам голосования.`,
      );
      await era.printAndWait(
        `Прозванная 「Super Car」 и столь популярная ${maru.name} естественно тоже получила допуск.`,
      );
      era.drawLine({ content: 'В комнате подготовки' });
      await maru.say_and_wait(
        `${callname}, теперь пусть младшие хорошенько смотрят мне в спину`,
      );
      era.printButton(`「М-м」`, 1);
      await era.input();
      await era.printAndWait(
        `После того как ${maru.name} вышла из тени, вы начали тренировки, целясь в главную сцену страны — Arima Kinen.`,
      );
      await era.printAndWait(
        `Как одна из немногих, кто уже в классический год овладел зоной, ${maru.uma_sex_title}, на скачках только для классического года, возможно, и выиграла бы за явным преимуществом, но на Arima Kinen, где сильных соперников как туч,`,
      );
      await you.say_and_wait(`Лишь бы ${maru.name} была рада — и ладно.`, true);
      await era.printAndWait(
        `Так думаешь и, в последний раз убедившись, что ничего не упущено.`,
      );
      await era.printAndWait(`На губах — влажное касание.`);
      await maru.say_and_wait(`Раз так — газ в пол`);
      await maru.say_and_wait(`Что ж, ${callname} я поехала.`);
      await era.printAndWait(
        `Неся то, что есть только у ${maru.name} — уникальную живость, ${maru.sex} вышла на скаковое поле.`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = 'После Arima Kinen · Сияние надежды';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Пробившись сквозь тернии на Arima Kinen и одолев множество сильных соперниц, ${maru.name} одержала победу в Arima Kinen`,
      );
      await you.say_as_passer_by_and_wait(
        `Журналист A`,
        `Поздравляю ${maru.actual_name_with_title} с победой в Arima Kinen, борьба выдалась жаркой.`,
      );
      await maru.say_and_wait(
        `Ага, все участницы — силачи до одной, вот благодаря этому я и пробежала от души`,
      );
      await you.say_as_passer_by_and_wait(
        `Журналист A`,
        ` ${maru.name} какие впечатления?`,
      );
      await maru.say_and_wait(
        `Вот бы ещё больше ${maru.uma_sex_title} увидели мою спину и захотели меня догнать`,
      );
      await you.say_as_passer_by_and_wait(
        `Журналист A`,
        `Какая грандиозная мечта.`,
      );
      await maru.say_and_wait(` ${callname} тут`);
      await era.printAndWait(
        ` ${maru.name} увидев твоё появление, вытащила тебя к журналистам.」`,
      );
      await you.say_as_passer_by_and_wait(
        `Журналист A`,
        `Скажите, тренер ${you.adult_sex_title}, насчёт ${maru.name} какие слова благодарности за победу?`,
      );
      era.printButton(
        `「Не в победе дело — лишь бы ${maru.name} была рада — вот что главное」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        ` ${callname} Ну и речь~ Впрочем, без поддержки от ${callname} я бы, пожалуй, и не победила.`,
      );
      await you.say_as_passer_by_and_wait(
        `Журналист A`,
        `Какие трогательные узы. Спасибо обоим, что согласились на интервью.`,
      );
      await maru.say_and_wait(
        `Давай сегодня где-нибудь как следует наемся и отметим`,
      );
      await you.say_and_wait(
        `И всё-таки улыбающаяся ${maru.name} — лучше всех`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = 'После Arima Kinen · Самая большая сцена!';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(`Комната ожидания\n`);
      await you.say_and_wait(`Как ощущения?`);
      await maru.say_and_wait(
        `Бежавшие вместе скаковые ${maru.uma_sex_title} все метили в сильнейших скаковых ${maru.uma_sex_title} как в цель, ${maru.uma_sex_title}, и пробежать с ${maru.couple_title} тоже было в радость.`,
      );
      await you.say_and_wait(`Довольна?`);
      await maru.say_and_wait(
        `Ась? Крупнее этих скачек разве что Prix de l'Arc de Triomphe. Мне нравится такое чувство, знаешь?`,
      );
      await you.say_and_wait(
        `Как закончится старший год, следующим летом махнём во Францию на скачку?`,
      );
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? 'Красотка' : 'Красавчик'}Я тоже так думаю.`,
      );
      await maru.say_and_wait(`И дальше давай стараться вместе!`);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = 'Новогоднее моление';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Чтобы встретить Новый год, ${you.name} и ${maru.name} вместе идёте на новогоднее моление.`,
      );
      await era.printAndWait(
        `На самом деле не ради традиции — просто хочется выпросить удачи.`,
      );
      await maru.say_and_wait(
        `Новый год всё-таки в святилище молиться, да? Так больше новогоднего настроения~!`,
      );
      await maru.say_and_wait(
        `План года кладут весной — поднесём трём богиням целый год пота и стараний!`,
      );
      era.printButton(`「Какая следующая цель?»`, 1);
      await era.input();
      await maru.say_and_wait(
        `Хо-хо~ Моя цель — и в этом году набежать на кучу интересных скачек!`,
      );
      await maru.say_and_wait(
        `И чтобы все гнались за моей спиной, я буду ещё~ ярче прежнего блистать!`,
      );
      era.printButton(`「Я как следует помогу ${you.name}!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}Какая надёжная~ ${maru.elder_sibling_sex_title}. Я обожаю такое чувство, знаешь?`,
      );
      await era.printAndWait(`Кстати, куда дальше направлять усилия?`);
      era.println();
      era.printButton(`「Базовый контроль здоровья!》(энергия+600)`, 1);
      era.printButton(
        `「Наверное, сбалансированные тренировки по всем фронтам!》(все характеристики+10)`,
        2,
      );
      era.printButton(
        `「Наверное, шлифовать свои сильные стороны!》(очки навыков+100)`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait(
            'Как говорится, 『обитель меняет дух, пища меняет тело』, следить за здоровьем и правда важно.',
          );
          await maru.say_and_wait(
            'Решено! Следующая цель — следить за здоровьем!',
          );
          await maru.say_and_wait('Ладно, давай скорее зайдём!');
          break;
        case 2:
          await maru.say_and_wait(
            'Вот оно что! Если тренироваться ровно по всем фронтам, поднимемся ещё на ступеньку!',
          );
          await maru.say_and_wait(
            'Окей, оставь на меня! На тренировках я тоже буду следить за этим!',
          );
          await maru.say_and_wait('Ну, раз решили — давай скорее зайдём!');
          break;
        case 3:
          await maru.say_and_wait(
            'Если про мои сильные стороны — это всё-таки вождение, да?',
          );
          await maru.say_and_wait(
            'Как бы не так~ Я шучу! Шлифовать навыки бега, да?',
          );
          await maru.say_and_wait(
            'OK! На тренировках я тоже буду за этим следить.',
          );
          await maru.say_and_wait(
            'Н-да, малость задержались, давай скорее зайдём!',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'День святого Валентина';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`На, это для ${callname} порция.`);
      await era.printAndWait(
        `По совету ${you.name} в этот День святого Валентина ${you.name} вы вдвоём решили устроить вечеринку в кабинете тренера.`,
      );
      era.printButton(`「Спасибо」`, 1);
      await era.input();
      await era.printAndWait(
        `Осторожно развязываешь декоративную ленту и открываешь шоколадную коробку в форме сумочки.`,
      );
      await era.printAndWait(
        `Тюльпановый бокал, полный жидкого шоколада, прослойка из крема, сверху — густой слой клубничного соуса, а в украшение — вишня, лист мяты и шелковица.`,
      );
      await era.printAndWait(
        `Чёрный бант на чаше бокала смотрится на едва уловимом розовом фоне.`,
      );
      await maru.say_and_wait(
        `До сих пор она искала, ради чего бежать, — и теперь у бега появился ещё один смысл.`,
      );
      await maru.say_and_wait(
        `И дальше тоже всегда поддерживай меня, хорошо, ${callname}`,
      );
      era.printButton(
        `「Тогда я с благодарностью принимаю. Спасибо, ${you.name}${maru.name} 」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `А, точно! Я слышала от Спешал, ${maru.couple_title} что в универмаге есть магазин, где на Валентинов день, если вы оба пара, можно сделать фото на отметку и получить скидку: шестьдесят процентов от цены.`,
      );
      await era.printAndWait(`${callname}Интересно?`);
      era.printButton(`「Без проблем」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}Вместе с ${maru.name} приходите в универмаг и, поискав какое-то время, находите тот самый магазин.`,
      );
      await era.printAndWait(
        `Видимо, модное место для фото на этой неделе: у входа длинная очередь, и по виду сплошь пары.`,
      );
      await maru.say_and_wait(
        `Как много народу, Спешал, ${maru.couple_title} всё-таки не ошиблась, это наверняка тот самый.`,
      );
      await era.printAndWait(`Тогда и мы встанем в очередь.`);
      await era.printAndWait(
        `${maru.name}Она берёт под руку ${you.name} и вы смешиваетесь с парами.`,
      );
      await era.printAndWait(
        `Официант: вы двое хотите взять парный набор по акции?`,
      );
      await era.printAndWait(
        `Официант: но из-за слухов о скидке понаехало много охотников за дешёвкой, и настоящие пары, которые правда хотят этот набор, наоборот, не могут его купить.`,
      );
      await era.printAndWait(
        `Официант: нам тоже голова болит. Но в итоге хозяин придумал отличный ход.`,
      );
      await era.printAndWait(
        `Официант: ну-ка, покажите романтический поцелуй.`,
      );
      era.printButton(`「k……kiss?!」`, 1);
      await era.input();

      await era.printAndWait(
        `Официант: поцелуй же — это романтика, нет? И чувства к партнёру выражает, и охотники за дешёвкой, как слышат, что надо целоваться, сразу разбегаются.`,
      );
      await era.printAndWait(
        `Официант: если вы пара, стесняться нечего, правда?`,
      );
      await era.printAndWait(
        `Острый взгляд официанта давит на ${you.name}. Тебе всё тяжелее, и ${you.name} смотрит на ${
          maru.name
        }, хотя ${maru.sex} делает вид, что спокойна, но яростно мечущийся хвост всё равно выдаёт ${maru.sex}.`,
      );
      era.printButton(`「Другого выхода нет」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}?`);
      await era.printAndWait(
        `${you.name}обнимаешь ${maru.name} за талию, гладишь её по лицу и, собравшись с духом, целуешь — ${
          maru.sex
        }.`,
      );
      await era.printAndWait(
        `Сначала пробуешь лёгкий поцелуй, а как атмосфера накаляется, ${you.name} ускоряется, и жаркая любовь в конце сгущается в глубокий, тяжёлый поцелуй.`,
      );
      await era.printAndWait(
        `${maru.sex} её губы словно источают яблочный аромат и манят ${
          you.name
        } запустить ей язык в рот и тщательно исследовать каждый миллиметр — ${maru.sex}.`,
      );
      await era.printAndWait(
        `Всякий раз, когда ${you.name} хочет коснуться её языка — ${maru.sex}, ${
          maru.sex
        } смущённо отступает — и этот вид ещё сильнее распаляет ${you.name} вожделение.`,
      );
      await era.printAndWait(
        `Нельзя продолжать, но ${you.name} не может остановить движения.`,
      );
      await era.printAndWait(
        `Когда от яростного стимула в голове белеет пустота, ${you.name} хочет только сделать этот миг вечным, ${you.name} чувствует счастье.`,
      );
      await maru.say_and_wait(`…… ${callname}`);
      await era.printAndWait(
        ` Официант: уа-а, какой жаркий поцелуй. Тогда скорее проходите, сзади уже не терпится.`,
      );
      await era.printAndWait(
        `Не до тех, кто сзади, ${you.name} мягко держит её лицо, будто единственное сокровище на свете — ${
          maru.sex
        }.`,
      );
      await era.printAndWait(
        `${maru.sex} её щёки совсем покраснели; яростное сердцебиение через близость двух тел доходит до ${
          you.name
        } тела.`,
      );
      await era.printAndWait(
        `${you.name}берёшь её за руку и идёшь к свободному столику — ${maru.sex}.`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `Вы молча едите один на двоих парфе; дрожащие руки выдают, что хозяину неспокойно.`,
      );
      await era.printAndWait(
        `Как теперь извиняться — ${
          maru.sex
        } Не оборвёт ли из-за этого со мной связь? Страх и радость сражаются в ${you.name} голове, и в конце остаётся `,
      );
      era.printButton(
        `「${maru.name} Нравится ли я ей — неважно, но я люблю ${maru.sex} 」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `После долгой пытки парфе наконец кончается. Вы молча выходите из магазина, идёте по улице, проходите вдоль набережной и в конце возвращаетесь в кабинет тренера.`,
      );
      await maru.say_and_wait(`Слушай, ${callname}.`);
      await era.printAndWait(
        `Вдруг останавливается ${maru.name} и обнимает ${you.name}.`,
      );
      await era.printAndWait(
        `Влажное ощущение на губах расходится кругами, словно рябь.`,
      );
      await maru.say_and_wait(`И дальше тоже прошу любить и жаловать❤`);
      await era.printAndWait(
        `Опомнившись после первого изумления, ${you.name} смотрит, как изо всех сил сохраняет взрослую невозмутимость ${maru.name}.`,
      );
      await era.printAndWait(
        `Тебе такой вид ${maru.name} кажется смешным, и всё же такая ${maru.sex} до того мила, что словно шёлк из переплетённых нитей тихо ложится на сердце.`,
      );
      era.printButton(`「Чувства какие сложные.»`, 1);
      await era.input();
      await era.printAndWait(
        `Под светом звёзд и неоновых огней ваши руки крепко сжимают друг друга.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_9: (() => {
    const title = 'Пылающий';
    /**
     * 皇帝与丸善斯基见面，想让丸善斯基看到不同的风景
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} emperor 皇帝（鲁铎象征）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = 'Император';
      await era.printAndWait(
        `Долгая зима наконец прошла, и весенний ветер снова овевает Трейсен.`,
      );
      await era.printAndWait(
        `Вы, что после боли и растерянности снова бежите в выбранную вами сторону, —`,
      );
      await era.printAndWait(`и долгожданная Симболи Рудольф.`);
      await emperor.say_and_wait(`Наконец-то этот момент настал.`);
      await era.printAndWait(
        `Лёгкой походкой Император выходит на Тренировочное поле.`,
      );
      await emperor.say_and_wait(`Похоже, в том споре в итоге победила я.`);
      await emperor.say_and_wait(
        `Каково это — выбраться из самой глубины ада? ${maru.name}.`,
      );
      await era.printAndWait(
        `Игнорируя всё вокруг, Император направляется прямиком к ${maru.name}.`,
      );
      await maru.say_and_wait(
        `Хоть время выдалось тяжёлым, я всё же распробовала кайф от упорного труда.`,
      );
      await emperor.say_and_wait(`О? Адское пламя так и не сожгло тебя дотла?`);
      await maru.say_and_wait(`Путь сквозь ад ближе всего к Эдему♪`);
      await emperor.say_and_wait(`…Я и правда жду этого всё сильнее.`);
      await maru.say_and_wait(`Можно принять это за похвалу? 3q`);
      await emperor.say_and_wait(`…3q? Thank you хе-хе.`);
      await emperor.say_and_wait(
        `К делу. Раз уж ты готова стать кумиром ${maru.uma_sex_title}, то, надо думать, готова быть разорванной в клочья.`,
      );
      await emperor.say_and_wait(`Ты поступаешь так из любви?`);
      await maru.say_and_wait(
        `Я не могу утверждать, что всё, что делаю, непременно правильно, но в одном я уверена`,
      );
      await maru.say_and_wait(
        `Каждый день, что я борюсь ради этого, я счастлива⭐`,
      );
      await emperor.say_and_wait(
        `Раз ты уже нашла свою дорогу — тогда увидимся, когда придёт время.`,
      );
      await era.printAndWait(
        `Сказав это, Император покидает Тренировочное поле.`,
      );
      era.printButton(`「Наконец-то схватка с Императором?」`, 1);
      await era.input();
      await maru.say_and_wait(
        `Схватка с президентом совета — может, и впрямь выйдет очень занятно.`,
      );
      await maru.say_and_wait(
        `На этой самой грандиозной сцене меня, глядишь, ждёт восторг, от которого зубы задрожат.`,
      );
      await maru.say_and_wait(`Давай вместе стараться, ${callname} ♪`);
      await era.printAndWait(`Поэтому следующая цель уже решена.`);
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = 'Перед Osaka Hai · Ласковый ветер';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Противостояние с Императором вот-вот начнётся на Osaka Hai`,
      );
      await era.printAndWait(
        `СМИ раздули это как схватку царского пути и пути гегемона.`,
      );
      await era.printAndWait(
        `Внимание к Osaka Hai уже далеко превзошло прошлогодний Arima Kinen.`,
      );
      await era.printAndWait(
        `Трибуны забиты фанатами этой легендарной скачки — даже проходы под завязку.`,
      );
      era.drawLine({ content: 'В комнате подготовки' });
      await maru.say_and_wait(`Хм-хм-хм~`);
      await era.printAndWait(
        `В такой напряжённый момент ${maru.name} всё равно совершенно спокойна.`,
      );
      era.printButton(
        `「${maru.name}, в этот раз я точно пробегу с огромным удовольствием」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `Ничто так не заводит ${maru.name} перед скачкой, как появление Императора.`,
      );
      await maru.say_and_wait(`Что ж, всё готово, OK.`);
      await maru.say_and_wait(
        `Пора насладиться ещё более грандиозной скачкой.`,
      );
      await era.printAndWait(
        `Собираясь помочь ${maru.name} открыть дверь, ${you.name} натыкается на такую же тонкую ладонь`,
      );
      await era.printAndWait(
        `С губ доносится влажное дыхание, мягкие языки сплетаются и, не в силах оторваться, всё же расходятся.`,
      );
      await maru.say_and_wait(`Чуть не забыла самое важное.`);
      await maru.say_and_wait(`${callname}Смотри на меня, ясно?`);
      await era.printAndWait(`${maru.name}направляется на скаковое поле`);
    };
    f.title = title;
    return f;
  })(),
  sank_hai_win: (() => {
    const title = 'После Osaka Hai · Ветер сметает остатки туч';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} emperor 皇帝（鲁铎象征）
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, emperor, you) => {
      emperor.name = 'Император';
      await maru.say_and_wait(`Ха-а, ха-а, ха-а.`);
      await maru.say_and_wait(`Победила?`, true);
      await era.printAndWait(
        `Противостояние с Императором на этом закончилось: ${maru.name} победила.`,
      );
      await you.say_and_wait(
        `Какая потрясающая скачка: холодный пот потёк, сама не заметила.`,
      );
      await era.printAndWait(
        `Среди несущейся гущи найти самое верное место — и на рывке по праву оказаться впереди—.`,
      );
      await era.printAndWait(
        `Но ещё чуть-чуть — и она обогнала бы ${maru.name}.`,
      );
      await era.printAndWait(`…И всё же,`);
      await maru.say_and_wait(
        `Что это — восторг или страх? Ты первая ${maru.uma_sex_title}, кто сумела наступить на тень монстра, Рудольф-тян♪`,
      );
      await era.printAndWait(
        `Кажется, наконец встретив того, кто сумел догнать её шаг — ${maru.sex} — её шаг, довольно улыбается ${maru.name}.`,
      );
      era.drawLine();
      await emperor.say_and_wait(`…Как хорошо.`);
      await era.printAndWait(
        `Император неотрывно смотрит на ваши удаляющиеся спины, ${maru.sex} облизывает зубы, и дикая радость поднимается сама собой.`,
      );
      await era.printAndWait(
        `Неоконченных дел у Императора слишком много, так что ей всё ещё нужно доказать себя — доказать, что ${maru.sex} единственная в своём роде: не только непобедима в своём поколении, но способна сокрушить былую славу и придавить грядущий блеск.`,
      );
      era.println();
      await emperor.say_and_wait(
        `Марузен, лучше бы тебе и вправду до конца пронести свою идею.`,
      );
      await emperor.say_and_wait(
        `И ещё — не мни себя царским путём. Первопроходец должен лишь страдать: ты велика — так пади и стань лестницей вверх для тех, кто придёт следом.`,
      );
      await emperor.say_and_wait(
        `Ради будущего японской скаковой ${maru.uma_sex_title} — ради ещё более сильного императора.`,
      );
      await era.printAndWait(
        `Для этого… Император вскидывает голову и смотрит сверху вниз на ${maru.name}.`,
      );
      era.println();
      await emperor.say_and_wait(
        `Скинь воспитанность, сорви обёртку цивилизации! Любыми средствами — низость так низость, грубость так грубость, лучше вообще не стесняйся в средствах!!!`,
      );
      await emperor.say_and_wait(
        `Как бы ни было некрасиво — и это позволено. Приготовься ко всему… и на Tenno Sho Autumn встреть месть Нас (императора).\n`,
      );
      await era.printAndWait(
        `Сказав это, благодушный Император лёгкой походкой покидает скаковое поле.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sank_hai_lose: (() => {
    const title = 'После Osaka Hai · Густая зелень';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      await maru.say_and_wait(`И всё-таки проиграла Рудольф-тян, ууу—`);
      await era.printAndWait(
        `Но ${maru.name} вовсе не так подавлена, как можно было вообразить.`,
      );
      era.printButton(`Пойдём, устроим разбор и заново обсудим матч-реванш`, 1);
      await era.input();
      await era.printAndWait(`Противостояние с Императором на время окончено.`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'Фестиваль благодарности фанатам';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Сегодня фестиваль благодарности фанатам — день, когда ${maru.uma_sex_title} выступают, благодаря фанатов за поддержку.`,
      );
      await era.printAndWait(
        `По всей академии Трейсен идут подготовленные ${maru.uma_sex_title} мероприятия.`,
      );
      await era.printAndWait(
        `Вырвавшись на редкий досуг, ${you.name} тоже ходит повсюду и как следует сбрасывает накопившееся напряжение.`,
      );
      await era.printAndWait(
        `${maru.name}, как подопечная ${
          you.name
        } — ${maru.uma_sex_title}, сейчас смотрит выступления младших.`,
      );
      await era.printAndWait(
        `Услышав шаги подошедшего, машинально оборачивается к ${you.name} и дарит нежную улыбку.`,
      );
      await maru.say_and_wait(
        `${callname}Тоже пришёл(а) посмотреть выступления ${maru.uma_sex_title}?`,
      );
      era.printButton(`「Кивок」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}Остановившись рядом с ${
          maru.name
        }, смотришь, как на сцене ${maru.uma_sex_title} изо всех сил показывают себя с лучшей стороны.`,
      );
      await maru.say_and_wait(
        `Младшие все такие энергичные, ${callname} ты тоже так думаешь?`,
      );
      era.printButton(
        `「${maru.couple_title} Всё потому, что они равняются на ${maru.name} и хотят обогнать её спину — вот почему так отчаянно стараются — ${
          maru.sex
        }」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `Ара♪ ${callname}, каждый раз умеешь меня удивить.`,
      );
      await maru.say_and_wait(
        `Тогда, ${callname}, хочешь посмотреть, как я выступлю на сцене?`,
      );
      await era.printAndWait(
        `${maru.name}её хвост незаметно обвивается вокруг бедра у ${you.name}, к счастью, зрителей вокруг захватила атмосфера сцены, и этот маленький жест никто не заметил.`,
      );
      await era.printAndWait(
        `${maru.name}Словно нащупав у ${you.name} слабое место, ещё бесстыднее прижимается всем телом к ${you.name} — к руке.`,
      );
      era.printButton(`「${maru.name} 」`, 1);
      await era.input();
      await era.printAndWait(
        `Боясь, что дурные слухи о вас двоих повредят ${
          maru.sex
        } — её будущему — да ещё ${you.name} грозит увольнение, ${you.name} мгновенно деревенеет.`,
      );
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? 'тре·нер·-тян' : 'тре·нер·-кун'}♪`,
      );
      await era.printAndWait(
        `${you.name}Кажется, будто все взгляды вокруг смотрят на ${you.name}, ${you.name}, и во рту пересыхает.`,
      );
      await maru.say_and_wait(
        `${
          callname
        } такая реакция тоже очень милая. Жаль, конечно, но мне почти пора на сцену. Только не отводи от меня взгляд.`,
      );
      await era.printAndWait(
        `Когда ты приходишь в себя, ${maru.sex} уже стоит на сцене.`,
      );
      await era.printAndWait(
        `${you.name}Ты спешно одалживаешь у соседних зрителей светящуюся палочку и начинаешь размахивать ею вместе с волной фанатов.`,
      );
      await maru.say_and_wait(
        `Наслаждающаяся ветром, догоняющая ветер Скаковая ${maru.uma_sex_title}, ${
          maru.name
        }, и сейчас я подарю фанатам и младшим свою песню.`,
      );
      await era.printAndWait(
        `Звезда сегодняшнего дня, что поёт песни былых лет,`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_yasu_kin_s: (() => {
    const title = 'Перед Yasuda Kinen · Полная жизни';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.name}Гонясь за ветром свободы, прибыла на Tokyo Racecourse`,
      );
      await maru.say_and_wait(`Сегодня я в прекрасной форме.`);
      await era.printAndWait(
        `Разгладив на ${maru.name} топорщащиеся складки одежды, видишь: суперкар готов.`,
      );
      await maru.say_and_wait(
        `Младшие тоже хотят догнать мою спину и обойти меня.`,
      );
      await era.printAndWait(
        `Сильнее, чем победа в скачке, ${maru.name} хочет, чтобы дорогие младшие превзошли её саму и славу прежней эпохи`,
      );
      await maru.say_and_wait(`Вот и я сейчас тоже загорелась.`);
      await maru.say_and_wait(`И как обычно, ${callname}.`);
      await era.printAndWait(
        `Ты мягко обнимаешь ${maru.name} за тонкую талию, и вы тонете в этом счастливом миге.`,
      );
      await maru.say_and_wait(`${callname}, и всё время смотри мне в спину.`);
      await maru.say_and_wait(
        `Если будешь смотреть на других ${maru.uma_sex_title}, то даже ${
          maru.elder_sibling_sex_title
        } я буду ревновать.`,
      );
      era.printButton(`「Я всё время буду смотреть на тебя」`, 1);
      await era.input();
      await maru.say_and_wait(`Тогда в последний раз♪`);
      await era.printAndWait(
        `После нежного расставания ${maru.name}  идёт на скаковое поле.`,
      );
    };
    f.title = title;
    return f;
  })(),
  yasu_kin_win_s: (() => {
    const title = 'После Yasuda Kinen · Скачка, от которой хочется бежать';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('В комнате подготовки');
      await maru.say_and_wait(
        ` ${callname}, разглядел(а) мою великолепную спину?`,
      );
      await era.printAndWait(
        `На Yasuda Kinen младшие ${maru.uma_sex_title} вдохновились ${maru.name} — её спиной — и рванули вперёд, взяв целью ${maru.sex} , несутся всё дальше и дальше`,
      );
      await maru.say_and_wait(
        `Младшие тоже стали такими сильными, может, однажды и ${maru.elder_sibling_sex_title} меня обойдут — и буду грызть платок, сверля ревнивым взглядом на ${maru.couple_title} на пьедестале.`,
      );
      await maru.say_and_wait(
        `Чтобы утешить ${maru.elder_sibling_sex_title} моё раненое сердце, ${callname}  сегодня спи со мной`,
      );
      await you.say_and_wait(
        `Но кроме того, ${maru.name}  кажется, по-настоящему наслаждается радостью бега.`,
      );
      await maru.say_and_wait(
        `Эй, так ты ещё и тему сменил(а), ${callname} твоё отношение ко мне тоже стало таким холодным.`,
      );
      await maru.say_and_wait(
        `Я что, уже потеряла шарм? Если так пойдёт, ${maru.elder_sibling_sex_title}  будет брошена бессердечным.`,
      );
      await maru.say_and_wait(
        ` ${maru.elder_sibling_sex_title} Какая я жалкая`,
      );
      await era.printAndWait(
        ` ${maru.name} теперь и сама научилась к тебе ласкаться.`,
      );
      await you.say_and_wait(`В такой момент и надо`, true);
      await era.printAndWait(
        `Правой рукой мягко обнимаешь ${maru.name}  за талию, впечатываешь глубокий поцелуй, а левой рукой гладишь чувствительное местечко у уха`,
      );
      await era.printAndWait(
        `Словно котёнок, надышавшийся кошачьей мятой, ${maru.name} теперь совсем расслабилась.`,
      );
      await maru.say_and_wait(
        `Когда вернёмся, дам тебе отведать ${maru.elder_sibling_sex_title}  бэнто с любовью♪`,
      );
      await era.printAndWait(
        ` ${you.name} вспоминаешь сладкий аромат мягкого сыра и политого мёдом хлеба и ${maru.name}  — улыбку под ясным небом.`,
      );
      era.printButton(`「${maru.name}  готовка всегда на высоте」`, 1);
      await era.input();
      await era.printAndWait(
        `Словно что-то вспомнив, с лукавой улыбкой ${maru.name}  слегка покачивает хвостом.`,
      );
      await maru.say_and_wait(`${callname} и дальше будь моим дегустатором.`);
      await you.say_and_wait(
        `Кстати, завтра хочу попробовать китайскую кухню.`,
      );
      await maru.say_and_wait(`Хо-хо♪ ${callname}  жди — увидишь.`);
      era.drawLine();
      await era.printAndWait(
        `К вечеру ${maru.name}  выносит из кухни готовую жареную капусту со свининой, и ещё не успеваешь взяться за палочки, как аппетитный запах нетерпеливо лезет в нос и вытягивает голод прямо из желудка.`,
      );
      await era.printAndWait(
        `Берёшь палочки, зажимаешь кусок свинины — нежный, словно тофу. Кладёшь в рот, и пропитанная овощным соком свинина взрывается вкусом: хоть язык проглоти.`,
      );
      await maru.say_and_wait(`Ну как, вкусно?`);
      await era.printAndWait(
        `Глядя, как с аппетитом уплетаешь, ${you.name}, ${maru.name}  расплылась в довольной улыбке.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Начало летних сборов';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Летние сборы третьего года теперь официально начались. С настроением совсем не таким, как в прошлом году, ${you.name} и ${maru.name} вместе идёте к пляжу.`,
      );
      await maru.say_and_wait(
        `Хо-хо♪ в этом году я снова всех оставила позади, ${callname}.`,
      );
      await era.printAndWait(
        `Любимая умамусумэ рядом с тобой по-прежнему любит примчаться раньше других ${maru.uma_sex_title} и первой добраться до пляжа.`,
      );
      await you.say_and_wait(`${maru.name}Похоже, настроение отличное`);
      await maru.say_and_wait(
        `Ара, так это же само собой: в этом году надо наверстать всю молодость, которую в прошлом так и не удалось как следует вкусить.`,
      );
      await era.printAndWait(
        `${maru.name}Кажется, она приготовила чёрный купальник, и ${
          maru.sex
        } — её фигура в нём кажется ещё более обворожительной.`,
      );
      await you.say_and_wait(
        `Обычно ${maru.name} всегда любила поспать подольше, а сегодня наоборот ${maru.sex} пришла тебя будить.`,
      );
      await maru.say_and_wait(
        `Короче, сейчас самое время как следует насладиться сборами! Но сначала важнее намазаться кремом от загара, да?`,
      );
      await maru.say_and_wait(
        `${callname}Можно попросить ${
          you.name
        } намазать меня кремом от загара? Лето в этом году жарче, чем я думала.`,
      );
      era.printButton(`「Сейчас подойду」`, 1);
      await era.input();
      await era.printAndWait(`Летние сборы начались в такой лёгкой атмосфере.`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_30: (() => {
    const title = 'Праздник';
    /**
     * 第三年庙会 应该以更轻松的感觉，漫步在小镇之中
     * 故地重游，心绪万千
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `В прошлом году в это же время впервые довелось ощутить тепло этого городка. И здесь же свернула траектория судьбы.`,
      );
      await era.printAndWait(
        `Юное «я» и время, что тихо утекало меж пальцев, стали следами пройденного пути.`,
      );
      await era.printAndWait(
        `Глядя на городок, куда приходишь снова, в груди поднимаются чувства сложнее, чем при первом визите.`,
      );
      await era.printAndWait(
        `Перепутанный вход, из-за которого пришлось заново определять, где ты, карта от доброго хозяина лавки, пышное праздничное представление.`,
      );
      await era.printAndWait(
        `Идя с потоком людей к месту из памяти, прошлое медленно всплывает тонкой струйкой.`,
      );
      await maru.say_and_wait(`${callname}.`);
      await era.printAndWait(`У входа стоит знакомый силуэт.`);
      era.printButton(`「Прости, что заставила ${you.name} ждать.」`, 1);
      await era.input();
      await maru.say_and_wait(`Я тоже только что на месте.`);
      await maru.say_and_wait(
        `Ловля золотых рыбок, яблоки в карамели, амулет на любовь — и напоследок выступление на сцене. В этот раз надо насладиться по полной, иначе незачем было идти!`,
      );
      era.printButton(`「Пойдём вместе」`, 1);
      await era.input();
      await era.printAndWait(`Вы крепко сжали друг другу руки.`);
      await maru.say_and_wait(`И дальше вот так всегда будь рядом, хорошо?`);
      await era.printAndWait(
        ` ${maru.name}Глянула на ${you.name} одним взглядом.`,
      );
      await era.printAndWait(
        `${you.name}От просто держаться за руки она перешла к тому, чтобы чуть настойчивее тянуть тебя вперёд.`,
      );
      await era.printAndWait(
        `Вместо ожидаемых жалоб ${you.name} просто чувствует, как с ладони всё сильнее давит, словно тебя зажало в тиски.`,
      );
      await era.printAndWait(
        `Почувствовав боль, ${you.name} инстинктивно смотрит на источник боли, а ${maru.name} лукаво улыбается.`,
      );
      await era.printAndWait(
        `Взрослая степенность отброшена напрочь — дурачитесь, как дети.`,
      );
      await era.printAndWait(
        `Понимая, что так точно проиграешь, ${you.name}, прибавляет шаг.`,
      );
      await era.printAndWait(
        ` ${maru.name} из глаз читается: 「Хочешь с действующей Скаковая ${maru.uma_sex_title} наперегонки, ${you.name} ещё лет сто рано」, и потому с нарочитой лёгкостью отпускает ${you.name}  руку и готовится изящным шагом обойти ${you.name}.`,
      );
      await era.printAndWait(
        `— Но ${you.name} мягко обнимает её за талию и смотрит прямо на неё взглядом, полным любви — ${maru.sex}.`,
      );
      await maru.say_and_wait(`Э? Тренер… ${callname}, рядом ещё люди.`);
      await era.printAndWait(
        `Окружающие, хоть и заметили, как ${you.name} ведёте себя близко, но приняли это за флирт влюблённой парочки; изредка находились туристы, узнававшие вас обоих, и, смекнув, что к чему, ускоряли шаг и уходили.`,
      );
      await era.printAndWait(
        `На миг вокруг остались только ${you.name} вдвоём.`,
      );
      await maru.say_and_wait(
        `Ну надо же, прямо как история, сбежавшая из сёдзё-манги, ${callname} уже не тот малыш 16-17 лет в пубертате, да?`,
      );
      await era.printAndWait(
        `Оказавшись в этой двусмысленной атмосфере в невыгодном положении, ${maru.name} пытается вернуть себе инициативу.`,
      );
      era.printButton(`「А что такого в том, чтобы быть ребёнком?」`, 1);
      await era.input();
      await era.printAndWait(
        `И тогда ${you.name} легко чмокает её в лоб и смотрит на неё с неописуемым упоением — самодовольно, будто урвал игрушку — ${maru.sex}.`,
      );
      await maru.say_and_wait(
        `— Да уж, раз уж ${callname} такое говоришь, значит, уже готов(а) ко всему.`,
      );
      await era.printAndWait(
        `Урвав своё и уже собираясь отступить, ${you.name} вдруг теряет равновесие, и рука, обнимавшая ${maru.name}, тоже слабеет.`,
      );
      await era.printAndWait(
        `А следом чувствуешь сладкое дыхание у левого уха и ток, что разбегается по всему телу.`,
      );
      await maru.say_and_wait(`——`);
      await era.printAndWait(
        `Хоть это всё та же привычная интонация, но ${you.name} слышит в ней нотку досады и торжества.`,
      );
      await era.printAndWait(
        ` ${maru.name} пальцы скользят по ${you.name} груди, длинные ногти ровно настолько точны, что не царапают кожу, и ${you.name} слегка дрожит от страха и возбуждения.`,
      );
      era.printButton(
        `「Дальше же ещё вечер фейерверков? Если не поторопиться,」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `「Ещё мало», ${maru.name} пальцы всё не прекращают движения.`,
      );
      era.printButton(
        `「Я хочу загладить прошлогоднее сожаление и вместе с ${maru.name} разделить эти прекрасные воспоминания!」`,
        1,
      );
      await era.input();
      await era.printAndWait(` ${maru.name}Наконец прекращает идти дальше.`);
      await maru.say_and_wait(
        `— Прости, старшая сестра тоже немного потеряла контроль.`,
      );
      await era.printAndWait(
        `В голосе ни капли раскаяния, зато на лице — удовлетворение, какое бывает только после скачки, которой насладилась в полной мере.`,
      );
      await maru.say_and_wait(
        `Стоит подумать о воспоминаниях, которые мы с ${callname} ещё создадим вместе, и о ещё более сильном удовлетворении сверх того — не слишком ли старшая сестра жадна?`,
      );
      await maru.say_and_wait(
        `М-м, негатив — это NG! Каждую следующую минуту и секунду не оставлять ярких воспоминаний — позорно транжирить жизнь!`,
      );
      await era.printAndWait(
        `Праздничная музыка с фестиваля, подхваченная ветром, доносится до ${you.name} ушей.`,
      );
      await era.printAndWait(
        `Алые цветы, распускающиеся в небе, возвещают начало финала фестиваля.`,
      );
      await era.printAndWait(`Затем ${maru.name} берёт ${you.name} под руку.`);
      await era.printAndWait(`Следом вы вдвоём ускоряете шаг.`);
      await era.printAndWait(
        `И наконец ${you.name} с ${maru.name} наслаждаетесь этой присущей только влюблённым, непередаваемой атмосферой.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = 'Конец летних сборов · Незабываемый пир';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Нынешние летние сборы прошли очень насыщенно.`);
      await era.printAndWait(
        `Кроме пляжного волейбола, разбивания арбузов и прочего повседневного спорта, выслушивать заботы младших ${maru.uma_sex_title} и точно давать советы — тоже часть удовольствия.`,
      );
      await era.printAndWait(
        `В последний день летних сборов вы пошли на вечеринку в общежитии.`,
      );
      await era.printAndWait(
        `Спешал Уик, Кинг Халоу с благоговением слушают, как ${maru.name} рассказывает о своём опыте за эти два года, а Грасс Вандер бросает ${maru.name} вызов.`,
      );
      await era.printAndWait(
        `Лишь под глубокую ночь все, вполне довольные, расходятся.`,
      );
      await you.say_and_wait(
        `Летние сборы тоже скоро кончатся, дальше — осенний Tenno Sho, да?`,
        true,
      );
      await you.say_and_wait(
        `Если сравнивать со скачкой, всё-таки ${maru.name} улыбается лучше всего.`,
        true,
      );
      era.printButton(
        `「Хорошо! Вернёмся в Трейсен — и там тоже выложимся на полную.」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `Пробормотав это себе под нос, открываешь дверь, `,
      );
      await you.say_and_wait(`Странно, дверь не заперта?`);
      await maru.say_and_wait(` ${callname} ♪`);
      await era.printAndWait(
        `Из-за двери появляется ${maru.name} и бросается на тебя.`,
      );
      await maru.say_and_wait(`Сегодня-то вместе поспим?`);
      await you.say_and_wait(`На сборах вместе спать — это всё-таки…`);
      await maru.say_and_wait(
        `С председателем ${maru.adult_sex_title} уже поговорила, да.`,
      );
      await era.printAndWait([
        maru.get_colored_name(),
        ' , похоже, пока ',
        you.get_colored_name(),
        ' не в курсе, заключила с председателем какую-то договорённость.',
      ]);
      await maru.say_and_wait(
        `Председатель тоже хочет, чтобы мы как следует насладились юностью, так что ${callname} `,
      );
      await era.printAndWait(`${maru.name} С пылающим лицом смотрит на тебя.`);
      era.printButton(`「Давай」`, 1);
      era.printButton(`「Лучше не надо」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`Дальше прошу любить и жаловать♪`);
      } else {
        await maru.say_and_wait(
          `Что? ${callname}, перед такой прекрасной ${maru.teen_sex_title} даже интереса нет — ${
            maru.elder_sibling_sex_title
          } мне и вправду придётся усомниться в собственном очаровании.`,
        );
        await era.printAndWait(
          `С обвисшими ушами ${maru.name} так резко контрастирует с привычным видом, что в тебе просыпается садистский порыв.`,
        );
        await era.printAndWait(`Насильно подавленная похоть снова поднялась.`);
        await maru.say_and_wait(
          `Ну что ж, дальше прошу любить и жаловать, ${callname} ♪`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_40: (() => {
    const title = 'Сладость или гадость!';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`${callname}, вставай!`);
      await era.printAndWait(`Кажется, у уха раздался знакомый голос.`);
      era.printButton(`「М-м, ещё чуть-чуть посплю」`, 1);
      await era.input();
      await maru.say_and_wait(`Уже почти девять!`);
      era.printButton(`「Какие девять? Мм!»`, 1);
      await era.input();
      await era.printAndWait(
        `Внезапно поняв, что сейчас будет, ${you.name} мгновенно вскочил(а) с кровати и впопыхах натянул(а) одежду.`,
      );
      await you.say_and_wait(
        `Сейчас влетит нотация от Тадзуны ${you.adult_sex_title}.`,
      );
      await maru.say_and_wait(`Хо-хо~`);
      await era.printAndWait(
        `Глядя, как ${you.name} впопыхах поднимается с кровати, ${maru.name} тихонько улыбнулась.`,
      );
      await you.say_and_wait(`Почему будильник не сработал? Э?`);
      await era.printAndWait(`На телефоне семь — до работы ещё час.`);
      await you.say_and_wait(`${maru.name}!`);
      await maru.say_and_wait(`Сладость или гадость!`);
      await you.say_and_wait(`М-м — Хэллоуин — это не первое апреля!`);
      await maru.say_and_wait(`Я хочу, чтобы ${callname} дал(а) мне конфетку~`);
      await you.say_and_wait(`Потом вместе заглянем в магазин сладостей.`);
      await era.printAndWait(`Неизвестно когда ваши губы снова сомкнулись.`);
      await maru.say_and_wait(`Н-н — тогда вот этим пока чуть потерпи♪`);
      await era.printAndWait(
        `Поставившая вам обоим завтрак на стол ${maru.name} озарилась милой улыбкой.`,
      );
      era.drawLine({ content: 'Кабинет тренера' });
      await you.say_and_wait(`Это последняя.`);
      await maru.say_and_wait(`Спасибо за работу!`);
      await era.printAndWait(
        `Ждавшая рядом ${maru.name} умело убрала документы в папку.`,
      );
      await you.say_and_wait(`А дальше.`);
      await maru.say_and_wait(`А дальше?`);
      await you.say_and_wait(`Кажется… нужно сделать что-то важное?`);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? 'Тре·нер·чан' : 'Тре·нер·кун'}?`,
      );
      await era.printAndWait(
        `Заметив, как уши прижались назад у ${maru.name}, ${you.name} невольно мороз пошёл по коже.`,
      );
      await you.say_and_wait(`Думай скорее, что забыл(а)? А, точно!`, true);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? 'Тре·нер·чан' : 'Тре·нер·кун'}?`,
      );
      await era.printAndWait(
        `${maru.name} говорила всё тяжелее, а выражение лица ничуть не менялось.`,
      );
      await you.say_and_wait(`Пойдём вместе в магазин сладостей?`);
      await era.printAndWait(`От спокойного тона стало страшно даже тебе.`);
      await maru.say_and_wait(
        `Да уж. Ох~ ${maru.elder_sibling_sex_title} чуть было не забыла. И правда, только благодаря ${callname} ♪`,
      );
      await era.printAndWait(
        `Давящее ощущение только что исчезло, будто ничего и не было. Кстати, ${
          maru.sex
        } когда так свободно стала управлять своей аурой?`,
      );
      await maru.say_and_wait(`Выходим вместе?`);
      await you.say_and_wait(`Но перед выходом есть ещё одно дело.`);
      await maru.say_and_wait(`Мм?`);
      await era.printAndWait(`Губы сомкнулись.`);
      await maru.say_and_wait(`М-м — ха, э-э-э?`);
      await era.printAndWait(`Глубокий поцелуй на пятнадцать секунд.`);
      await you.say_and_wait(`Счастливого Хэллоуина! Сладость или гадость!`);
      await maru.say_and_wait(`Э? ${callname}, я·пе·ре·ду·ма·ла!`);
      await era.printAndWait(
        `Сильнее мягкого касания ${you.name}  больше занимало то, что вот-вот скажет ${maru.name}.`,
      );
      await maru.say_and_wait(`Сегодня вечером не дам ${you.name} уснуть❤`);
      await era.printAndWait(
        `Силы будто разом ушли из тела, и ты обмяк(ла) в объятиях ${maru.name}.`,
      );
      await maru.say_and_wait(
        `Хо-хо-хо — сейчас ещё не время слабеть в ногах, ${callname}.`,
      );
      await era.printAndWait(
        `Неизвестно когда увлажнившиеся уголки глаз тебе ${maru.name} легко стёрла.`,
      );
      await maru.say_and_wait(
        `Вечером тоже прошу любить и жаловать, ${callname} ♪`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = 'Перед Tenno Sho Autumn · Сон Эдема';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Вторая дуэль с Императором вот-вот начнётся.`);
      await era.printAndWait(
        `Как вторая дуэль ${maru.name} с Императором станет для зрителей небывалым зрелищем.`,
      );
      era.drawLine({ content: 'В комнате подготовки' });
      era.printButton(`「Покажи мне свою лучшую спину」`, 1);
      await era.input();
      await maru.say_and_wait(
        `Выйти на одну дорожку с малышкой Рудольф — без сомнения лучшая сцена♪`,
      );
      era.printButton(`「Есть уверенность в успехе?」`, 1);
      await era.input();
      await you.say_and_wait(
        `Бросать вызов прославленным ${maru.uma_sex_title} и с ними общаться, соперничать и решать, кто сильнее — ${
          maru.sex
        }.`,
      );
      await you.say_and_wait(`Есть ли уверенность в успехе?`);
      await era.printAndWait(`${maru.name}Помолчав немного, даёт ответ.`);
      await maru.say_and_wait(
        `${callname}О тех, кто бежит по скаковому полю, ${maru.uma_sex_title} как ты думаешь?`,
      );
      await you.say_and_wait(
        `Чтобы победить на скаковом поле, за этим стоят пот и труд.`,
      );
      await you.say_and_wait(`Но.`);
      await maru.say_and_wait(
        `Да, лишь одна ${maru.uma_sex_title} может победить.`,
      );
      await era.printAndWait(
        `Перед глазами снова встаёт кабинет студенческого совета и то изречение в самом центре.`,
      );
      await you.say_and_wait(`Одна впереди — тьма скакунов немеет.`);
      await maru.say_and_wait(
        `Когда увидела в первый раз, долго думала и так и не поняла, как это толковать.`,
      );
      await maru.say_and_wait(
        `Тех, кто молча трудится, ${maru.uma_sex_title}, только из-за поражения весь труд отрицают.`,
      );
      await maru.say_and_wait(
        `Если лишь одна ${maru.uma_sex_title} может победить, то у остальных ${maru.uma_sex_title} весь труд впустую?`,
      );
      await maru.say_and_wait(
        `Если исход заранее обречён на провал, не разумнее ли с самого начала сдаться и свернуть в другую сторону?`,
      );
      await maru.say_and_wait(
        `— Но бежать — это ${maru.uma_sex_title} натура, верно?`,
      );
      await maru.say_and_wait(
        `Перед стартом — напряжённое ожидание выстрела стартового пистолета.`,
      );
      await maru.say_and_wait(
        `В беге в одиночку встречаешь неведомый мир, но страшно не так, как казалось.`,
      );
      await maru.say_and_wait(`На рывке сзади накатывает топот за топотом.`);
      await maru.say_and_wait(
        `Хочется обогнать силуэт впереди, хочется бежать быстрее, хочется шагнуть дальше, чем ${maru.sex}.`,
      );
      await maru.say_and_wait(
        `Сам миг, когда пересекаешь финиш, уже не так важен.`,
      );
      await maru.say_and_wait(
        `С такой мыслью добиться успеха — и тогда младшие, когда впереди не видно дороги, пойдут по этому пути.`,
      );
      await maru.say_and_wait(
        `По дороге, которая доказала, что по ней можно идти, с мыслью: а вдруг получится.`,
      );
      await maru.say_and_wait(
        `Поэтому мой ответ — что бы ни вышло, у этого приключения есть причина, ради которой его стоит предпринять.`,
      );
      await era.printAndWait(`Раздаётся объявление: скачка вот-вот начнётся.`);
      await maru.say_and_wait(`Прости, ненароком наговорила лишнего.`);
      await era.printAndWait(`Немного смущённая ${maru.name} краснеет.`);
      await era.printAndWait(
        `С тех пор как ты взял(а) в подопечные ${maru.name}, пережито столько событий.`,
      );
      await era.printAndWait(
        `И слёзы, и смех, и скорбь, и радость, и доверие, и предательство.`,
      );
      await era.printAndWait(`Всё это уже пройдено.`);
      await era.printAndWait(`Для ${maru.name} —`);
      era.printButton(`「Поехали вместе.»`, 1);
      await era.input();
      era.printButton(`「Давай напишем свою собственную историю.»`, 1);
      await era.input();
      await maru.say_and_wait(`…хе-хе♪`);
      await era.printAndWait(`${maru.name}улыбается.`);
      await maru.say_and_wait(
        `Что бы дальше ни случилось. Ты всегда будешь рядом, хорошо?`,
      );
      await maru.say_and_wait(
        `И в смехе, и в слезах. Всё встретим вместе, хорошо?`,
      );
      await era.printAndWait(
        `Пожалуй, у ${you.name} в памяти это самая прекрасная улыбка.`,
      );
      await era.printAndWait(`${maru.name} идёт на скаковое поле.`);
      await era.printAndWait(`Неподалёку император уже ждёт претендентку.`);
      await era.printAndWait(
        `${you.name} молишься, чтобы у ${maru.name} была победа.`,
      );
      await era.printAndWait(`Время течёт здесь.`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = 'После Tenno Sho Autumn · Золотая осень, золотая мечта';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} darley 达利阿拉伯
     * @param {CharaTalk} godolphin 高多芬柏布
     * @param {CharaTalk} byerley 拜耶尔土耳其
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, darley, godolphin, byerley, you, callname) => {
      darley.name = 'Мудрая богиня';
      godolphin.name = 'Нежная богиня';
      byerley.name = 'Строгая богиня';
      await maru.say_and_wait(`Ха-а, ха-а, ха-а.`);
      await maru.say_and_wait(`Ещё чуть-чуть.`);
      await era.printAndWait(`На последнем повороте ускоряется одним рывком.`);
      await era.printAndWait(
        `В этот миг ипподром становится ареной между ними двоими.`,
      );
      await era.printAndWait(`Ещё 10 длин, 8 длин, 6 длин.`);
      await era.printAndWait(`До финиша меньше 15 м.`);
      await era.printAndWait(`Гром сзади всё ближе.`);
      await maru.say_and_wait(
        `Значит, в конце всё-таки не хватило чуть-чуть?`,
        true,
      );
      await era.printAndWait(
        `Накопленное преимущество тает так же быстро, как снег под пламенем.`,
      );
      await era.printAndWait(`Миг последнего рывка.`);
      await era.printAndWait(`Император догоняет ${maru.name} со спины.`);
      await era.printAndWait(`Но ${maru.name} делает решающий шаг.`);
      await era.printAndWait(`Император: не думала, что так выйдет. Забавно.`);
      await you.say_as_passer_by_and_wait(
        `Комментатор`,
        `И победительница — ${maru.name} !`,
      );
      await maru.say_and_wait(`Уже победила.`);
      await maru.say_and_wait(`…Почему так устала.`);
      era.drawLine();
      maru.print(
        `Когда снова открывает глаза, будто просыпается от долгого сна. Перед глазами — туманный, таинственный луг.`,
      );
      maru.print(
        `Солнце сквозь редкие облака сыплется тонкими нитями и окрашивает бесконечную зелень в тёплый, мягкий золотой свет.`,
      );
      maru.print(
        `Пробует сесть — и чувствует, как каждая клетка тела полна жизни.`,
      );
      maru.print(
        `Так и встаёт. Оглядывается: под синим небом и белыми облаками бескрайний луг, вправленный в землю, как огромный нефрит, веет мягкой, таинственной дымкой.`,
      );
      maru.print(
        `Ветер гладит траву, волны зелени катятся, как морской прибой, и несут свежий запах травы.`,
      );
      await maru.say_and_wait(`Где это?`);
      maru.print(
        `Никто не ответил, но в сердце я совершенно уверена: есть место, где мне дадут ответ.`,
      );
      await maru.say_and_wait(`Как всегда — полный газ!`);
      await maru.say_and_wait(`Три!`);
      await era.printAndWait(`Верх держу прямым, плечи расслабленно опускаю.`);
      await maru.say_and_wait(`Два!`);
      await era.printAndWait(`Всю силу вливаю в ноги.`);
      await maru.say_and_wait(`Раз!`);
      await era.printAndWait(
        `Делаю глубокий вдох и ловлю свежий запах травы, разлитый в воздухе.`,
      );
      await era.printAndWait(
        `Затем, в поисках ответа, ${maru.name} мчится в объятиях травы.`,
      );
      era.drawLine();
      await era.printAndWait(` ${maru.name} оказывается на золотой равнине.`);
      await era.printAndWait(
        `То — родная сердцу ${maru.uma_sex_title} колыбель души.`,
      );
      await maru.say_and_wait(`Где это?`);
      await godolphin.say_and_wait(`Наконец-то ты пришла, нежное дитя.`);
      await era.printAndWait(
        `Перед ней внезапно возникает богиня, что сердцем нежности и заботы принимает всё сущее.`,
      );
      await darley.say_and_wait(`Мы видели все тяготы твоего пути.`);
      await era.printAndWait(
        `Следом появляется богиня, что с уважением благословляет врождённую индивидуальность каждой Скаковая ${maru.uma_sex_title} — спокойная и приветливая.`,
      );
      await byerley.say_and_wait(
        `Сила, что черпается из стремления наделить время смыслом`,
      );
      await byerley.say_and_wait(
        `Для смертной это, пожалуй, тоже своего рода явление мощи.`,
      );
      await era.printAndWait(
        `Появляется суровая и могучая богиня, твёрдо верящая: лишь сила прокладывает путь в будущее.`,
      );
      await maru.say_and_wait(`Почему я здесь?`);
      await byerley.say_and_wait(
        `…Это арена, куда все постигшие свой удел ${maru.uma_sex_title} приходят, когда талант раскрыт до предела.`,
      );
      await godolphin.say_and_wait(
        `И ещё — нежный край, куда после яркой жизни все ${maru.uma_sex_title} приходят напоследок.`,
      );
      await darley.say_and_wait(
        `О достигшая Эдема Скаковая ${maru.uma_sex_title} !`,
      );
      await darley.say_and_wait(
        `Ты должна понимать: мир, что мы создали, из-за вечного противостояния разных идеалов несёт немало скорби и боли.`,
      );
      await darley.say_and_wait(
        `Но оно же гарантирует, что в этом мире всегда будут иные, равные по силе пути.`,
      );
      await godolphin.say_and_wait(
        `И для тех непризнанных, «несвоевременных» мечт есть даль, к которой можно вечно стремиться.`,
      );
      await godolphin.say_and_wait(
        `Какую бы веру ты ни держала в сердце, в этом мире всегда найдётся пристанище для самой его глубины.`,
      );
      await byerley.say_and_wait(
        `Людям и ${maru.uma_sex_title} нужно долго учиться вести борьбу мирно и с почтением.`,
      );
      await byerley.say_and_wait(
        `В конце любой борьбы рождается смысл, и этот смысл искупит заплативших за победу ${maru.uma_sex_title}.`,
      );
      await darley.say_and_wait(
        ` ${maru.name}, как и у тысяч достигших Эдема ${maru.uma_sex_title} , хочешь ли ты о чём-то спросить?`,
      );
      await maru.say_and_wait(`Спросить?`);
      maru.print(`На миг вопросов слишком много — слова застревают в горле.`);
      maru.print(`Но…`);
      await maru.say_and_wait(`Не нужно.`);
      await maru.say_and_wait(`В пути главное — пейзаж у дороги.`);
      await maru.say_and_wait(
        `Знай я с самого начала ответ на финише — у пейзажа у дороги не осталось бы смысла.`,
      );
      await maru.say_and_wait(
        `Если уж на то пошло — мудрее задать вопрос, когда эта приятная поездка кончится и мы встретимся снова?`,
      );
      await darley.say_and_wait(
        `Мирское тебе дороже истины? Занятный путь ты выбрала.`,
      );
      await godolphin.say_and_wait(
        `Хотя дальше дорога будет ещё тяжелее, чем сейчас.`,
      );
      await byerley.say_and_wait(
        `Любую преграду возьмёшь, верно? Ты этого достойна.`,
      );
      await darley.say_and_wait(
        `Пусть дальше тебе сопутствует попутный ветер.`,
      );
      await era.printAndWait(
        `Мягкий ветер легко поднимает ${maru.name} и несёт вперёд, набирая скорость к далёкому миру.`,
      );
      await era.printAndWait(
        `В миг, прежде чем сознание угаснет, ${maru.name} глубоко запечатлевает в сердце эту золотую родину.`,
      );
      era.drawLine();
      era.printButton(`「${maru.name}?」`, 1);
      await era.input();
      await era.printAndWait(
        `Назвать ли это счастьем в беде? С конца скачки всё ещё в забытьи ${maru.name}, на сцене победителя всё равно доносит свой танец до сердца каждого, кто её поддерживает.`,
      );
      await era.printAndWait(
        `Как тренер ты заявляешь, что сейчас ${maru.name} нужна передышка, и отклоняешь все встречи и интервью; убедившись, что ${maru.name} в неподвижности, которой нынешняя наука не объяснит, ты осторожно берёшь на спину ${maru.name}, садишься за руль Та — и ${maru.sex} оказывается в квартире, где живёт.`,
      );
      era.printButton(`「С позволения.」`, 1);
      await era.input();
      await era.printAndWait(
        `Припарковав Та на ближайшей стоянке, ты осторожно берёшь на руки ${maru.name}.`,
      );
      await era.printAndWait(
        `Ты укладываешь её на кровать — ${maru.sex} садишься рядом с ней — ${maru.sex}.`,
      );
      await you.say_and_wait(
        `Только бы ничего не случилось, ${maru.name}.`,
        true,
      );
      await era.printAndWait(
        `Выложившись до конца, ты молишься, чтобы твой сон стал выкупом за ${maru.name} пробуждение.`,
      );
      await era.printAndWait(`И коротаешь время в тревоге.`);
      await era.printAndWait(`Минута, час, ночь — без слов.`);
      await maru.say_and_wait(`М-м.`);
      await era.printAndWait(
        `И лишь когда солнце сквозь облака роняет пятна света на ${maru.name} тело.`,
      );
      await maru.say_and_wait(`Где это?`);
      await era.printAndWait(
        `Проснувшаяся ${maru.teen_sex_title} недоумённо смотрит на знакомый потолок, затем взгляд замирает на этой чужой и вместе родной фигуре.`,
      );
      await maru.say_and_wait(`${callname}?`);
      await era.printAndWait(
        `Кажется, усталость за сутки напролёт окончательно свалила ${you.name} с ног, и ${you.name} невольно засыпает.`,
      );
      await maru.say_and_wait(
        `С такого ракурса ${callname} и правда красавчик♪`,
      );
      await maru.say_and_wait(`Сколько ни смотри — не надоест♪`);
      await maru.say_and_wait(
        `……Тебе было нелегко на всём этом пути, ${callname}.`,
      );
      await maru.say_and_wait(`Что бы ни случилось, мы будем вместе, хорошо?`);
      await era.printAndWait(` ${maru.name} крепко обнимает ${you.name}.`);
      await era.printAndWait(`Три богини нежно смотрят на детей.`);
      await darley.say_and_wait(
        `……Добрый ребёнок, твоё желание непременно сбудется.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_43: (() => {
    const title = 'Нежный ветер';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      maru.print(`Неожиданно ранний подъём.`);
      maru.print(
        `Растёрла сонные глаза, но сколько ни ворочалась — заснуть так и не вышло.`,
      );
      maru.print(`От этой тоски проще было просто встать.`);
      maru.print(`Растёрла заспанные глаза и открыла окно.`);
      maru.print(`Свежий воздух заглянул в эту квартиру`);
      maru.print(
        `Золотистые листья снаружи тоже покинули объятия материнского дерева и, ведомые золотым ветром, заглянули сюда.`,
      );
      await maru.say_and_wait(`Халоу!`);
      maru.print(`Улыбнулась маленькому гостю, встречая его`);
      maru.print(
        `Приняв приглашение хозяйки, маленький гость спокойно опустился на письменный стол`,
      );
      await maru.say_and_wait(
        `……Кстати, сейчас в моде закладки из опавших листьев`,
      );
      maru.print(`Осторожно промыла лист и расплющила его словарём`);
      maru.print(`Свежий воздух заглянул в эту квартиру`);
      await maru.say_and_wait(
        `Дальше остаётся только терпеливо ждать солнца`,
        true,
      );
      maru.print(
        `Утренний туман ещё не рассеялся, луна всё ещё висит в небе, звёзды россыпью.`,
      );
      await maru.say_and_wait(`Скоро зима`, true);
      maru.print(
        `Листья прорастают весной, буйно растут летом, увядают осенью и в конце концов возвращаются в объятия зимы`,
      );
      await maru.say_and_wait(`Я тоже старалась расцвести?`, true);
      maru.print(
        `Внезапный порыв ветра едва давал открыть глаза: золотистые листья неохотно покидали объятия ветвей и следовали за пылким ветром в последний путь.`,
      );
      maru.print(
        `Подобно ручью, несчётное множество листьев под водительством ветра весело вливалось в океан земли.`,
      );
      await maru.say_and_wait(
        `Как же жду, докуда доберутся милые младшие. Мм, стоит подумать — и сразу тяжесть на плечах.`,
      );
      maru.print(`Словно говорила листьям, а словно — себе.`);
      await maru.say_and_wait(`Жду дня, когда младшие меня превзойдут`, true);
      maru.print(
        `До дня, когда младшие догонят этот силуэт, ${maru.name} будет всё ждать.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = 'Рождество';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait([
        'Чтобы исполнить заключённый с ',
        maru.get_colored_name(),
        ' уговор, ',
        you.get_colored_name(),
        ' доделывает последнюю работу и спешит к условленному месту.',
      ]);
      await era.printAndWait(
        `Подойдя к условленной аллее дзельквы, ${you.name} глядит на телефон: до назначенного времени ещё тридцать минут.`,
      );
      era.printButton(`「Времени, кажется, ещё полно」`, 1);
      await era.input();
      await era.printAndWait(`Успокоившись, ${you.name} сбавляет спешный шаг.`);
      await era.printAndWait(
        `В прошлом году с ${maru.name} в слепой панике спасались от кольца фанатов и случайно нашли эту тропинку.`,
      );
      await era.printAndWait(
        `Тогда ${
          maru.sex
        } казалась такой счастливой… нет, не как прежде на скаковом поле — то была иная радость.`,
      );
      await era.printAndWait(
        `Будто нарочно сбавила шаг, чтобы вместе с тобой насладиться бегом, — и у тебя в голове стало пусто.`,
      );
      await era.printAndWait(
        `И ещё тот поцелуй на Валентинов день, близость на фестивале благодарности фанатам…`,
      );
      await era.printAndWait(
        `Прошлые воспоминания медленно поднимались, точно дымящийся очаг`,
      );
      await era.printAndWait(`На самом деле…`);
      await maru.say_and_wait(`Бу!`);
      await era.printAndWait(
        `Будто чтобы нагнать страху на ${you.name}, ${maru.name} слева от ${you.name} из-за дзельквы вдруг выскочила, и та красная фигура на белом снегу сияла особенно ярко.`,
      );
      era.printButton(`「Уааааа」`, 1);
      await era.input();
      await era.printAndWait(
        `Перед внезапно выскочившей в поле зрения ${maru.teen_sex_title}(?), ${you.name} и вправду вздрогнул(а) от испуга.`,
      );
      await maru.say_and_wait(`Халоу♪ ${callname}`);
      era.printButton(
        `「${maru.name} Так внезапно выскакивать — слишком страшно」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `В прошлом году с ${maru.name} договорились встретиться на этой аллее дзельквы, да кто ж знал, что ${
          maru.sex
        } такая живая.`,
      );
      await era.printAndWait(
        `Хоть и привыкла держаться как зрелая ${maru.elder_sibling_sex_title}, но перед ${you.name} тоже стала показывать другую свою сторону — ${maru.sex}.`,
      );
      await maru.say_and_wait(
        `Хотя я ещё и сама не сдержалась: пришла на час раньше, стало скучно — вот и нашло.`,
      );
      await maru.say_and_wait(`Но ${callname} в таком испуге просто прелесть♪`);
      era.printButton(`「${maru.name}!!!」`, 1);
      await era.input();
      await maru.say_and_wait(`Хо-хо♪ ${callname} лови меня.`);
      era.printButton(`「Не убегай!」`, 1);
      await era.input();
      await era.printAndWait(
        `Вы гоняетесь как дети и на миг возвращаетесь в беззаботное детство.`,
      );
      era.printButton(`「Как же весело」`, 1);
      await era.input();
      await era.printAndWait(
        `К счастью, на тропинке мало прохожих, и все — такие же пары, как вы`,
      );
      await era.printAndWait(
        `${maru.name}Оставим это, но ${
          you.name
        } уже нет детской прыти: только тяжело дышит, держится за ствол и смотрит на неё — ${maru.sex}.`,
      );
      await maru.say_and_wait(`Хм-хм♪ Эта игра за мной.`);
      await maru.say_and_wait(
        `Как победительница, ${callname} примет одно моё условие.`,
      );
      era.printButton(`「Погоди, мы об этом договаривались?」`, 1);
      await era.input();

      await maru.say_and_wait(`Давай сегодня вечером сходим на свидание.`);
      await maru.say_and_wait(
        `Такая модная, как я, ${maru.teen_sex_title} на свидание — шанс, какой выпадает раз в тысячу лет.`,
      );
      await maru.say_and_wait(`Не знаю, ${callname}, как тебе такое?`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}Как раз собираешься ответить — и живот предательски урчит.`,
      );
      await maru.say_and_wait(
        `Хе-хе, ${callname}, похоже, есть захотелось. Тогда сначала перекусим и только потом выедем.`,
      );
      await era.printAndWait(
        `${you.name}Снова садишься на пассажирское сиденье. Привычное ощущение наполняет ${you.name} полным спокойствием.`,
      );
      await era.printAndWait(
        `${maru.sex}Она вставляет ключ и заводит двигатель. Низкий рёв мотора разносится по тихому парку.`,
      );
      await era.printAndWait(
        `Вы вместе съели в «Сайзерии» чуть более сытный ужин.`,
      );
      await era.printAndWait(
        `По сравнению с тем, как молча жуёшь в одиночестве, в компании ${maru.name} еда кажется ещё вкуснее.`,
      );
      await maru.say_and_wait(`OK, я подожду в Та, ${you.name}.`);
      await era.printAndWait(
        `${you.name}Пусть ${maru.name} сначала вернётся в Та и подождёт, а ты идёшь к кассе рассчитаться.`,
      );
      await era.printAndWait(
        `Снова ревёт двигатель — и вы отправляетесь к последней цели на сегодня.`,
      );
      await era.printAndWait(
        `${you.name}Умело включаешь музыку на панели салона и откидываешься на сиденье, наслаждаясь ею.`,
      );
      await era.printAndWait(
        `Когда светофор переключается, Та взбирается на склон.`,
      );
      await era.printAndWait(
        `Выехав на трассу, спорткар разгоняется без остановки. Фонари по обочинам стремительно летят назад, и ${you.name} словно проваливается в тоннель времени.`,
      );
      await era.printAndWait(
        `Пережив первую волну дискомфорта, ${you.name} понемногу привыкает к скорости ${maru.name}.`,
      );
      await era.printAndWait(
        `Музыка манит ${you.name} бежать от времени, дыхание толкает ${you.name} отпустить время.`,
      );
      await era.printAndWait(
        `${you.name}Ты поворачиваешь голову и смотришь на ${maru.name}, и как раз ловишь миг, когда ${maru.sex} отводит взгляд.`,
      );
      await era.printAndWait(
        `После этого, кроме мягкой музыки из динамиков, сюда нисходит тишина.`,
      );
      await maru.say_and_wait(`${callname}, мы уже на вершине.`);
      await era.printAndWait(
        `Это самая высокая гора в окрестностях города. С вершины вниз взглядом охватываешь весь город.`,
      );
      await era.printAndWait(
        `Холодный воздух уносит остатки тепла из лёгких и подстёгивает частое биение сердца.`,
      );
      await era.printAndWait(
        `${you.name}Ты смотришь на ту, что рядом, — ${
          maru.sex
        }, и её спокойные, светлые глаза сияют, глядя на город, погружённый в праздник.`,
      );
      era.printButton(`「${you.name} глаза и правда прекрасны»`, 1);
      await era.input();
      await maru.say_and_wait(
        `Хе-хе♪ ${callname}, хочешь пофлиртовать со мной?`,
      );
      await maru.say_and_wait(
        `Ого, в мои-то годы меня ещё дразнит молодежь. Похоже, шарм никуда не делся.`,
      );
      await era.printAndWait(
        `${maru.name}Она отводит взгляд и снова смотрит на ${you.name}.`,
      );
      await maru.say_and_wait(
        `Говорят, глаза — зеркало души. Так в глазах ${callname}, какая же я?`,
      );
      await you.say_and_wait(`Немного грустные, нежные и прекрасные глаза`);
      await maru.say_and_wait(
        `${callname}О чём это ты задумался, раз сказал такое?`,
      );
      await you.say_and_wait(`Эти нежные глаза всегда следят за младшими`);
      await you.say_and_wait(
        `Хотя и грустно, что счастливое время не длится вечно»`,
      );
      await you.say_and_wait(
        `Но радостно от веры, что младшие принесут ещё более яркий свет`,
      );
      await you.say_and_wait(`Как летнее небо без единого облачка`);
      await maru.say_and_wait(
        `${callname}Ты меня не слишком хвалишь? Да и сейчас зима.`,
      );
      await you.say_and_wait(
        `Никто не станет преуменьшать силу этой нежности: в конце концов, это и есть любовь.`,
      );
      await you.say_and_wait(
        `Только нежная любовь способна исцелить раны в сердцах людей.`,
      );
      await you.say_and_wait(
        `Пламя детей, что в ответ на эту любовь изо всех сил бегут за её спиной, даже зимой греет так же, как летом`,
      );
      await maru.say_and_wait(
        `Если смотреть вслед этим детям, то и завтра будет тёплый ясный день.`,
      );
      await maru.say_and_wait(`Как же хорошо, что я встретила ${callname} ♪`);
      await maru.say_and_wait(
        `…… ${callname}, можно мне один раз побыть капризной?`,
      );
      era.printButton(`「Если это желание ${you.name} — говори»`, 1);
      await era.input();
      await maru.say_and_wait(`Можно поцеловать меня?`);
      await era.printAndWait(
        `${you.name}Ты обнимаешь ${maru.name} за талию и легонько перебираешь кончики волос.`,
      );
      await era.printAndWait(
        `Поцелуй длится 10 секунд — и всё же это одно из незабываемых воспоминаний всей жизни.`,
      );
      await era.printAndWait(
        `Затем вы отрываетесь друг от друга, и у ${maru.name} по щекам медленно скатываются слёзы.`,
      );
      await maru.say_and_wait(`${callname}, я люблю ${you.name}.`);
      era.printButton(`「Я тоже люблю ${you.name} 」`, 1);
      await era.input();
      await era.printAndWait(
        `Когда часы бьют двенадцать, вы под залпами фейерверка крепко обнимаете друг друга.`,
      );
    };
    f.title = title;
    return f;
  })(),
  current_trend: (() => {
    const title = 'Уличный законодатель моды';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Это случилось однажды во внутреннем дворе——`);
      await maru.say_and_wait(
        `${callname}, мне нужно посоветоваться с ${you.name}, ${you.name}, сейчас удобно?`,
      );
      era.printButton('「Что случилось?」', 1);
      await era.input();
      await maru.say_and_wait(
        `Тут такое… Младшие позвали нас за покупками в модный квартал. ${you.name} тоже знает это чувство — быть на самом острие моды?`,
      );
      await maru.say_and_wait(
        `…Но ты же знаешь, мода меняется очень быстро. Я, конечно, стараюсь учить всё самое новое и модное, но когда разговариваю с младшими, то и дело будто не находим общий язык.`,
      );
      await maru.say_and_wait(
        `А потом становится очень неловко. Так что, чтобы никого не подвести, ${you.name}, поможет мне что-нибудь придумать?`,
      );
      era.printButton(
        '「Давай устроим спецтренировку вкуса!」(скорость+10)',
        1,
      );
      era.printButton(`「Верь в себя!」(сила+10)`, 1);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Вот оно что — пойти проверить самые модные тренды прямо сейчас!`,
        );
        await maru.say_and_wait(
          `Тогда, ${callname}, можно попросить ${you.name} пойти со мной проверить тренды?`,
        );
        era.printButton('「Конечно можно!」', 1);
        await era.input();
        await era.printAndWait(
          `И вот ${you.name} и ${maru.name} вместе добираетесь до города.`,
        );
        await maru.say_and_wait(
          `Не будем тянуть — сначала проверим тренды на этой улице. Вон тот CD-магазин, может, там и поймаем самое свежее♪`,
        );
        await era.printAndWait(
          `${maru.name}Указывает на CD-магазин с налётом эпохи, но найти там самые свежие тренды всё-таки немного…`,
        );
        await maru.say_and_wait(`${callname}, тебе нехорошо?`);
        await era.printAndWait(
          `Хоть в душе так и хочется съязвить, ${you.name} всё равно молча идёт с ней исследовать модный (двадцать лет назад) CD-магазин — ${
            maru.sex
          }.`,
        );
        await era.printAndWait(
          `Спустя какое-то время ${you.name} и ${maru.name} обходите все магазины на этой улице.`,
        );
        await maru.say_and_wait(
          `Гнаться за самым свежим трендом так сложно. Мама же говорила, что стоит ухватить секрет — и всё будет в порядке…`,
        );
        era.printButton(
          `「Не попробовать рассказать то, чему мама учила ${you.name}?」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          `Рассказать младшим… Вот оно что, тоже рабочий способ. Гнаться за модой — одно, а продвигать её самой наверняка куда веселее!`,
        );
        await maru.say_and_wait(
          `Тогда завтра продвину тренды среди младших, ${callname}, спасибо, ${you.name} ⭐`,
        );
        await era.printAndWait(
          `На следующий день ${maru.name} восторженно говорит ${you.name}, что младшие приняли ${
            maru.sex
          } её новый тренд.`,
        );
      } else {
        await maru.say_and_wait(`Верить в свой вкус…?`);
        await maru.say_and_wait(
          `Может, я стала малодушной. Мяться и тревожиться — совсем на меня не похоже.`,
        );
        await maru.say_and_wait(
          `К тому же все знают мой вкус. Я — лучше всех разбирающаяся в трендах, во что бы то ни стало бегущая на острие эпохи Скаковая ${maru.uma_sex_title}.`,
        );
        await maru.say_and_wait(
          `Хорошо! Я всласть наслажусь прогулкой с младшими!`,
        );
        await era.printAndWait(
          `Позже ${you.name} спрашивает у ${maru.name} о прошлой прогулке, и ${
            maru.sex
          } похоже, немало обменялась с младшими сведениями о трендах.`,
        );
        await era.printAndWait(
          `Вот она какая — с уникальным вкусом, полная очарования ${maru.name}.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  feel_speed: (() => {
    const title = 'Прокатиться на суперкаре';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Однажды ${you.name} собирается выйти за школьные ворота прогуляться и вдруг видит —`,
      );
      await era.printAndWait(
        `В хорошем настроении ${maru.name} идёт в сторону выхода из школы.`,
      );
      era.println();

      await maru.say_and_wait(
        `Ара, это ${callname}? Сегодня такая славная погода, так не прокатиться ли со мной?`,
      );
      era.printButton('「Хорошо.」', 1);
      await era.input();
      await maru.say_and_wait(
        `Нет причин отказываться от приглашения ${
          maru.name
        } , и вы вместе идёте к красному спорткару, который пока стоит за школой.`,
      );
      await maru.say_and_wait('Ну что, поехали!');
      await era.printAndWait(
        `Когда огненно-красный суперкар заводится, ${you.name} внезапно чувствует волну озноба — наверное, показалось. ${you.name} пытается себя успокоить.`,
      );
      era.println();
      await era.printAndWait(`Десять секунд спустя`);
      era.printButton('「Не слишком ли быстро мы несёмся!»', 1);
      await era.input();
      await maru.say_and_wait('Такая скорость — ещё ничего!');
      await maru.say_and_wait(
        'Скоро выедем на трассу! Сейчас покажу, на что способна по-настоящему!',
      );
      await maru.say_and_wait(
        'Та ускоряется! Та уходит в занос! Та несётся ещё быстрее!!!',
      );
      await maru.say_and_wait('Хуо! От такого чувства просто не оторваться♪');
      await maru.say_and_wait(
        `Э? ${era.get('callname:0:-1')}! ${you.name} что случилось?`,
      );
      await maru.say_and_wait('Хуо! От такого чувства просто не оторваться♪');
      await maru.say_and_wait('Эй? Эй?');
      await maru.say_and_wait(
        `${you.name} Ты в порядке? Это я слишком разогналась?`,
      );
      era.printButton('「Давай дальше — до самого предела!」(скорость+10)', 1);
      era.printButton('「Можно немного передохнуть?」(интеллект+10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Раз уж ${callname} так говорит, ${
            maru.elder_sibling_sex_title
          } мне пора взяться всерьёз!`,
        );
        await maru.say_and_wait('Давай вместе пробьём предел!');
        await maru.say_and_wait('Давай! Быстрее звука!');
        await maru.say_and_wait(
          `Пока я вместе с ${you.name}, мы доберёмся куда угодно!`,
        );
        era.println();
        await maru.say_and_wait('Так это и есть — стать ветром?');
        await era.printAndWait(
          `${you.name} в последний миг, прежде чем сознание провалится во тьму, слышишь, как Марузен упоённо бормочет себе под нос.`,
        );
      } else {
        await maru.say_and_wait(`Поняла, не надо себя мучить!`);
        era.println();
        await maru.say_and_wait(`Поедем до ближайшей зоны отдыха!`);
        await era.printAndWait(
          `И вот ${maru.name} останавливает машину на зоне отдыха.`,
        );
        era.println();
        await maru.say_and_wait(`Ты в порядке, тренер?`);
        await maru.say_and_wait(`Сейчас сбегаю за питьём.`);
        await era.printAndWait(
          `${maru.name}Вскоре приносит две бутылки ледяного питья.`,
        );
        await maru.say_and_wait(`${callname}, ${you.name} Сейчас полегче?`);
        await era.printAndWait(
          `Выпив напиток, ${maru.name} постепенно отпускает головокружение.`,
        );
        await maru.say_and_wait(
          `Давай так полежишь у ${maru.elder_sibling_sex_title} на бёдрах.`,
        );
        await era.printAndWait(
          `${maru.name}Нежно укладывает ${you.name} головой себе на бёдра.`,
        );
        await era.printAndWait(
          `${maru.sex} касается пальцами ${you.name} по коже, оставляя лёгкую прохладу.`,
        );
        await maru.say_and_wait(
          `Это и есть то самое 『подушка на коленях』? Я тоже впервые так делаю. Если неудобно — обязательно скажи ${
            maru.elder_sibling_sex_title
          } об этом.`,
        );
        await era.printAndWait(
          `Свойственный женщине аромат дразнит мозг, ${you.name} невольно погружается в плывущие фантазии.`,
        );
        await maru.say_and_wait(
          `О Три богини, молю ${you.name}, пусть хоть на миг я растворюсь в этом. В последнее мгновение, пока сознание не тает, ${you.name} молится.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  favourite_things: (() => {
    const title = 'Марузенски болтает о 「любимом」';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Сегодня ${maru.name} даёт интервью.`);
      await you.say_as_passer_by_and_wait(
        'Репортёр',
        `Тогда давайте поговорим о вашем победном костюме. Что в этом победном костюме вам нравится больше всего?`,
      );
      await maru.say_and_wait(
        `Пылающий красный — мой самый любимый, поэтому и Та-чан красная♪`,
      );
      await you.say_as_passer_by_and_wait('Репортёр', `Та-чан?`);
      era.printButton(
        `Это прозвище, которое ${maru.name} дала своей любимой машине.`,
        1,
      );
      await maru.say_and_wait(`А, прости, слишком увлеклась♪`);
      await maru.say_and_wait(
        `Вообще-то в детстве меня водили на автосалон, и я увидела ярко-красную суперкару — от её крутого вида глаз было не оторвать.`,
      );
      await maru.say_and_wait(
        `Тогда я поклялась: когда буду брать машину, куплю именно такую. А потом смотрела фото в каталоге, представляла себя за рулём и всё упорнее трудилась.`,
      );
      await maru.say_and_wait(
        `И теперь эта мечта сбылась: каждый день гоняю на Та♪`,
      );
      await era.printAndWait(`Интервью идёт гладко…`);
      await you.say_as_passer_by_and_wait(
        'Репортёр',
        `Большое спасибо. И напоследок разрешите сделать снимок`,
      );
      await maru.say_and_wait(
        `Поняла! Постараюсь показать всё своё очарование.`,
      );
      await maru.say_and_wait(
        `Точно! Кто знает меня лучше всех — это ${callname}, да?`,
      );
      await maru.say_and_wait(
        `${you.name}Как думаешь, какую мою сторону сегодня лучше показать на съёмке?`,
      );
      era.printButton('「Скорость, которой нет равных」(сила +20)', 1);
      era.printButton(
        '「Улыбка, которой всегда всё по плечу」(выносливость +20)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Вот как. Ну да, я всего ярче в те миги, когда наслаждаюсь бегом.`,
        );
        await maru.say_and_wait(`Раз так, давайте сразу снимем меня на Та`);
        await era.printAndWait(
          `А потом, утащив в поездку и репортёра, ${maru.name} сияет лицом.`,
        );
      } else {
        await maru.say_and_wait(
          `М-м, тоже верно. В любом деле главное — чтобы было весело.`,
        );
        era.printButton('「Я очень жду」', 1);
        await era.input();
        await maru.say_and_wait(
          `Оставь на мне! Я обязательно оправдаю ожидания ${you.name} и улыбнусь супермило!`,
        );
        await era.printAndWait(
          `Репортёр: Отлично! Получились потрясающие кадры!`,
        );
        await era.printAndWait(
          `Несколько дней спустя, когда вместе с ${maru.name} просматриваете репортаж с интервью.`,
        );
        await maru.say_and_wait(
          `Какая чудесная улыбка вышла♪ И здесь… ещё и имя ${you.name} упоминают.`,
        );
        await maru.say_and_wait(
          `М-м… 『Впечатляющая улыбка, рождённая узами с тренером』 — вот как написано!`,
        );
        era.printButton('「Даже как-то неловко」', 1);
        await era.input();
        await maru.say_and_wait(
          `Нет ничего такого. Если бы не поддержка ${you.name}, у меня бы и не было такой милой улыбки`,
        );
        await era.printAndWait(
          `И на фото, и вживую ${you.name} чувствует ${maru.name} сияющую улыбку.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  beautiful_winner: (() => {
    const title = 'Крутой и яркий секрет победы!';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, rice, you) => {
      await era.printAndWait(
        `Однажды ${you.name} и ${maru.name} поднимаетесь на крышу поесть и провести обеденное совещание —`,
      );
      await era.printAndWait(`Слышится слабый плач.`);
      await maru.say_and_wait(`А? — Это что за голос?`);
      await maru.say_and_wait(`Что ты здесь делаешь, Райс Шауэр?`);
      await rice.say_and_wait('Райс Шауэр… Райс Шауэр — бесполезный ребёнок.');
      await rice.say_and_wait(
        'Ведь так старались позвать Райс Шауэр вместе поиграть в полицию и воров.',
      );
      await rice.say_and_wait(
        'Только Райс Шауэр ещё не поймали… Друзья меня прикрывали и все попались, что же Райс Шауэр делать…',
      );
      await era.printAndWait(
        `Выслушав Райс Шауэр, ${maru.name} и ${you.name} вместе смотрите вниз и видите: в центре двора что-то вроде тюрьмы.`,
      );
      await era.printAndWait(
        `${you.name}Смотришь на ${maru.name}, ${maru.sex}, кажется, идея уже есть.`,
      );
      await maru.say_and_wait(`Тогда научу ${you.name} секрету победы♪?`);
      await maru.say_and_wait(
        `План А — победить силой, план Б — победить умом. ${you.name}, какой кажется лучше?`,
      );
      await rice.say_and_wait('Райс Шауэр… Райс Шауэр тоже не знает,');
      await era.printAndWait(
        `Взгляд Райс Шауэр выхватывает ${you.name} и, будто увидев спасителя, смотрит на ${you.name}.`,
      );
      await era.printAndWait(`${maru.name}словно ждёт от ${you.name} ответа`);
      era.printButton(
        '「План A: победа за счёт выносливости」(выносливость+10)',
        1,
      );
      era.printButton('「План B: победа за счёт ума」(интеллект+10)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`OK! Тогда берём план A!`);
        await maru.say_and_wait(
          `Райс Шауэр, ${you.name} хорошо умеет терпеть, правда? Тогда ${you.name} подойдёт так, чтобы противник заметил ${
            you.name
          }, а затем ${you.name} вместе с ней будет держать относительно стабильную дистанцию: когда у противника кончатся силы, тому придётся остановиться — ${
            maru.sex
          }.`,
        );
        await rice.say_and_wait('В-вот такое… Райс Шауэр сможет?');
        await maru.say_and_wait(
          `Обязательно сможет! Райс такая серьёзная и старательная, воли полно, да ещё и младшая, которой я горжусь!`,
        );
        await maru.say_and_wait(`Точно всё получится♪`);
        await rice.say_and_wait(
          `Раз это обещание Марузен- ${
            maru.elder_sibling_sex_title
          }, Ра-Райс Шауэр… э-эм, по-попробует…!`,
        );
        await maru.say_and_wait(
          `Хе-хе♪, благодаря ${you.name} я тоже придумала тренировку на выносливость`,
        );
        await era.printAndWait(
          `Недолго спустя ${you.name} и ${maru.name} видите маленькую фигурку Райс Шауэр: ей удалось спасти подругу.`,
        );
      } else {
        await maru.say_and_wait(`OK! Тогда берём план B!`);
        await maru.say_and_wait(
          `Проще говоря, заманить противника в запутанное место — например, к учебному корпусу — и на развилке сбросить его с хвоста!`,
        );
        await rice.say_and_wait('Ра-Райс Шауэр, такое сможет…!');
        await rice.say_and_wait(
          'Сможет! Райс Шауэр ведь хорошо думает, правда?',
        );
        await era.printAndWait(
          `${maru.name} говорит это и крепко сжимает руку Райс Шауэр.`,
        );
        await maru.say_and_wait(
          `Если спокойно всё обдумать, у Райс Шауэр точно всё получится! Хорошо?`,
        );
        await rice.say_and_wait('Нн … Райс Шауэр… попробует…!');
        await maru.say_and_wait(
          `…Хе-хе, раз уж так сказала младшей, как ${
            maru.elder_sibling_sex_title
          } мне тоже нужно сделать всё как следует.`,
        );
        await era.printAndWait(
          `Недолго спустя ${you.name} и ${maru.name} видите маленькую фигурку Райс Шауэр: ей удалось спасти подругу.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  memory: (() => {
    const title = 'Доброе утро, Марузенски';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      maru.print(
        `Прямые солнечные лучи бьют в лицо — она неохотно просыпается.`,
      );
      maru.print(`Вчера вечером перегуляла и теперь разбита?`);
      await maru.say_and_wait(`У-у—`);
      await era.printAndWait(
        `${maru.name} открывает глаза, всё ещё в кровати.`,
      );
      await maru.say_and_wait(`Фуаа—`);
      await maru.say_and_wait(
        `Не хочет подниматься с кровати — так и тянет руку, шаря в поисках будильника.`,
      );
      maru.print(
        `Как ни странно, жуткий будильник — в обычные дни, едва проспишь, будто ${
          callname
        } сверлит прямым взглядом, — сейчас тих, словно морковка, что председатель растит в академии.`,
      );
      maru.print(`…Не то. Как ни подумай, это странно, да?`);
      maru.print(`Всё-таки вчера переборщила с силой и нечаянно сломала?`);
      maru.print(`Или же—`);
      await maru.say_and_wait(`Сегодня выходной?`, true);
      maru.print(
        `Получив такую новость, она с довольным видом так и засыпает — нет!`,
      );
      maru.print(
        `А если будильник сломался? Сегодня… какой сегодня день недели?`,
      );
      maru.print(`Если опоздает, и ${callname} это заметит…`);
      await maru.say_and_wait(`Ну и пресс!`, true);
      maru.print(
        `Вот так и садится: тело, ещё не отошедшее ото сна, простреливает волнами онемения.`,
      );
      await maru.say_and_wait(`Ха—а.`);
      maru.print(`Тело реагирует само.`);
      await era.printAndWait(
        `${maru.name} с встрёпанными волосами шарит в поисках куда-то девшихся тапочек и с нечётким зрением слезает с кровати.`,
      );
      era.drawLine();
      maru.print(
        `Полусонную её ледяная вода наконец живьём выдирает из эдема Трёх богинь.`,
      );
      maru.print(
        `Чуть просушив волосы феном, заворачивает ещё капающие пряди в полотенце и выходит из ванной.`,
      );
      maru.print(`Глоть-глоть, хаа~`);
      maru.print(
        `Осушив залпом целую бутылку кофейного молока, она и сама оживляется♪`,
      );
      await maru.say_and_wait(`Что делать дальше?`);
      maru.print(`Сегодня выходной — младшие наверняка тоже развлекаются.`);
      maru.print(`Трейсен в выходной слегка пустынный.`);
      await maru.say_and_wait(`${callname}——`);
      maru.print(`В груди тихо поднимается какое-то чувство.`);
      maru.print(
        `Незнакомая и в то же время до странности родная сладость накрывает сердце.`,
      );
      maru.print(
        `Даже если ${callname} исчезнет из этого мира, я, пожалуй, не забуду этот трепет.`,
      );
      await maru.say_and_wait(`Тогда сегодня — в кабинет тренера.`);
      await era.printAndWait(
        `Если это тот, кто и комплексует, и рвётся быть первым сильнее всех, — ${callname}.`,
      );
      await era.printAndWait(
        `Сейчас, небось, сидит в кабинете тренера, мучается из-за следующей скачки и потягивает крепкий горький кофе.`,
      );
      await maru.say_and_wait(
        `Тогда нельзя не вытащить эту растерянную ${
          maru.sex
        } из этой мучительной тревоги.`,
      );
      await era.printAndWait(`${maru.name} подходит к двери кабинета тренера.`);
      await era.printAndWait(
        `В духе недавно подхваченного тренда 「внезапно распахнуть дверь и напугать」, она толкает дверь и громко объявляет о своём приходе.`,
      );
      await era.printAndWait(
        `Смотрит, как ${
          callname
        } с растерянным лицом суетится в поисках пульта, который от недавнего испуга нечаянно улетел под диван.`,
      );
      await era.printAndWait(
        `${maru.name}Вспоминает фото из сумочки — совместный кадр с ${
          callname
        } в караоке; милые ямочки перепившего ${
          callname
        } она на кровати пересматривала несчётное число раз.`,
      );
      await era.printAndWait(`Наверное, дело в солнечной погоде.`);
      await era.printAndWait(
        `${maru.name}Выглядит совсем как сверкающая морковка, что только что напилась воды.`,
      );
      await era.printAndWait(
        `Завтра ${maru.sex} тоже, как всегда, с этим особенным чувством будет подбадривать всех.`,
      );
      await era.printAndWait(
        `С этой мечтой о будущем ${maru.name} встречает новый день.`,
      );
    };
    f.title = title;
    return f;
  })(),
  teacher_sister: (() => {
    const title = 'Наставь меня, учитель Марузенски!';
    /**
     * 训练员面对想要学习的东西提不起兴趣，丸善斯基对其进行指导
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Утро одного из выходных.`);
      await era.printAndWait(
        `${you.name} лежишь плашмя на рабочем столе и ничего не хочешь делать.`,
      );
      await era.printAndWait(
        `С тех пор как удалось поступить в Трейсен, вся студенческая мотивация почему-то разом испарилась.`,
      );
      await era.printAndWait(
        `Хотя в общении с ${maru.name} постепенно возвращается прежнее ощущение, но эта натужность всё равно немного гложет.`,
      );
      await you.say_and_wait(
        `В обычные дни и так тяжело — сегодня просто как следует отдохни.`,
      );
      await maru.say_and_wait(` ${callname}, я зашла♪`);
      await era.printAndWait(
        `Как раз когда собираешься сачковать под этим предлогом, ${maru.name} распахивает дверь и входит.`,
      );
      await era.printAndWait(
        `Совпадение это или нет, ${maru.name} выглядит в отличном настроении.`,
      );
      await maru.say_and_wait(
        `Тогда придётся прочесть лекцию ${callname} как следует.`,
      );
      await you.say_and_wait(
        `Может, если посоветоваться с ${maru.name}, глядишь, откроется новый взгляд.`,
        true,
      );
      await era.printAndWait(
        `С мыслью «а вдруг сработает» ${you.name} идёт к ${maru.name} и выговариваешь то, что накипело.`,
      );
      await maru.say_and_wait(`М-м — так вот оно что.`);
      await era.printAndWait(
        ` ${maru.name}С лёгкой улыбкой вытаскивает из угла маленькую доску.`,
      );
      await maru.say_and_wait(
        `Тогда позволь старшей сестре поделиться своим взглядом.`,
      );
      await era.printAndWait(` ${maru.name}Слева на доске рисует чиби-себя.`);
      await maru.say_and_wait(
        `Бывает же: смотришь на то, чего потом пожалеешь, если не сделаешь, — и всё равно никак не поднимается задор?`,
      );
      await era.printAndWait(
        `Справа обводит кружком то, что гложет: уроки, места и танцы.`,
      );
      await maru.say_and_wait(
        `Знаешь, что это важно, а не сделаешь — и с близкими поднимаются тревога и страх.`,
      );
      await era.printAndWait(
        `${maru.sex}Пока объясняет, заботливо дорисовывает человечку тучи.`,
      );
      await maru.say_and_wait(
        `Живёшь в сожалении и раздражении — и вроде так тоже можно держаться?!`,
      );
      await era.printAndWait(
        `Под обоими чиби-человечек начинает извиняться перед тренером.`,
      );
      await maru.say_and_wait(
        `И в следующий раз, стоит лишь изобразить сожаление, — окружающие ничего не скажут, и все остаются в удобном равновесии.`,
      );
      await era.printAndWait(
        `Соединяет три рисунка стрелками подряд — и рождается цикл.`,
      );
      await maru.say_and_wait(` ${callname}Ну как, как тебе?`);
      era.printButton(`А само дело так и не решается, верно?`, 1);
      await era.input();
      await you.say_and_wait(
        `С того, как дело начинает портиться, до того, как окружающие давят на ${you.name}, изображает сожаление, окружающие бессильно опускают руки — и в этом цикле не решается лишь само дело, верно?`,
      );
      await you.say_and_wait(
        `Топливо, которому следовало разжечь мотивацию, уничтожает тот, кто принимает позу сожаления, — и дело катится ещё хуже.`,
      );
      await you.say_and_wait(
        `И чем хуже дело, тем этот цикл сожаления не только сам себя кормит, но ещё и крепчает.`,
      );
      await era.printAndWait(
        `Подумав минут восемь, ${you.name} нерешительно даёт ответ.`,
      );
      await maru.say_and_wait(
        `Верно. Этот цикл сам по себе не решает дело — только чувство, что дело решено. Для того, кто в нём крутится, это как студент, который прекрасно знает, что на следующей неделе экзамен, а всё равно собирается, пока время ещё есть, сбежать в игровой зал.`,
      );
      await maru.say_and_wait(
        `По сути это просто бояться боли и глушить её обезболивающим.`,
      );
      await maru.say_and_wait(`Поэтому нам нужно найти мотив действовать.`);
      await era.printAndWait(
        `Похоже, ответ верный: улыбка, словно цветок, расцветает у неё на лице — ${maru.sex}.`,
      );
      await maru.say_and_wait(
        `Чтобы уточнить число π до седьмого знака после запятой, человеческой цивилизации в целом понадобилось не меньше двух тысяч лет.`,
      );
      await maru.say_and_wait(`Чтобы узнать иррациональные числа — тысячу.`);
      await maru.say_and_wait(
        `Уравнения с двумя неизвестными, тригонометрия, логарифмы, факториалы — всё это учёные свершения, к которым человечество приходило тысячелетиями общего поиска.`,
      );
      await era.printAndWait(
        `Стирает прежнее стеркой и рисует огромную хрустальную морковку.`,
      );
      await maru.say_and_wait(
        `Свободно владеть всем этим после каких-то восьми лет учёбы — достижение, которое можно назвать шикарным.`,
      );
      await maru.say_and_wait(
        `Некоторым хватает ума и удачи: места и чужие похвалы становятся топливом и помогают ${maru.sex} быстрее это освоить.`,
      );
      await era.printAndWait(
        `Чиби буром быстро добирается до хрустальной морковки.`,
      );
      await you.say_and_wait(
        `А если я долго-долго разбираюсь и всё равно не понимаю — что тогда?`,
      );
      await maru.say_and_wait(`Ну и что с того?`);
      await era.printAndWait(` ${maru.name}моргает.`);
      await maru.say_and_wait(
        `${callname} цель — забрать это наследие цивилизации по полной: сколько ни уйдёт времени, выучил в итоге — уже огромный куш.`,
      );
      await you.say_and_wait(
        `Но если попадётся формула, которой не понять, — как быть?`,
      );
      await maru.say_and_wait(
        `Лучший способ — прочесть связанные с ней знания и историю и проследить, как это достижение мысли в своё время вымыли из потока истории.`,
      );
      await era.printAndWait(
        `Чиби на доске листает знания о минералах и спрашивает у опытного семпая.`,
      );
      await maru.say_and_wait(
        `Так не только снижается порог понимания — куда важнее, что верное чувство истории поможет ${you.name} смыть с ${you.name} ложную оценку, рождённую искажённым образом общества.`,
      );
      await maru.say_and_wait(
        `Ведь у отсутствия мотивации корень всегда один: неверно оценили цену.`,
      );
      await era.printAndWait(`Хрустальная морковка вспыхивает блеском.`);
      await maru.say_and_wait(
        `Вокруг того, что в истории важно и ценно, сами собой вырастают огромные индустрия и среда.`,
      );
      await era.printAndWait(
        `Чиби обступают алтарь богинь и кладут на него хрустальную морковку.`,
      );
      await maru.say_and_wait(
        `А эта огромная индустрия и среда сами поручаются за цену этих знаний и дают тем, кто их знает, и шанс, и щедрую награду.`,
      );
      await era.printAndWait(`В финале три богини дарят чиби гору моркови.`);
      await maru.say_and_wait(`Так что учёба — шанс с огромной прибылью.`);
      await you.say_and_wait(`Вот оно что. Спасибо, ${maru.name} учитель!`);
      await maru.say_and_wait(
        `Ой~ ${callname} Ну что ты, какая вежливость. Если я смогла помочь ${callname}, ${maru.elder_sibling_sex_title} — то счастливее всех как раз я.`,
      );
      await era.printAndWait(
        ` потому что помог(ла) ${you.name} искренне радостным ${maru.name} Кажется, вокруг всплывает радуга.`,
      );
      await era.printAndWait(`Вы провели этот день не зря.`);
    };
    f.title = title;
    return f;
  })(),
  find_love: (() => {
    const title = 'С Марузенски в сумерках на берегу моря смотрите закат';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`Как-то раз, после тренировки.`);
      era.printButton(
        '「Отлично, сегодняшний план тренировок выполнен целиком, хорошая работа.」',
        1,
      );
      await maru.say_and_wait(
        `Хо-хо, чувствуется дыхание ветра и аромат травы, я тоже вся в ударе♪`,
      );
      await era.printAndWait(
        `${maru.name} потягиваешься, и идеальные изгибы тела ${you.name} глубоко врезаются в память.`,
      );
      await maru.say_and_wait(
        ` Фух — после тренировки тоже немного устала, ${
          callname
        }, можно с ${maru.elder_sibling_sex_title} сходить со мной в кафе?`,
      );
      era.printButton('「Конечно」', 1);
      await era.printAndWait(
        ` как джентльмен (пусть и извращенец) не можешь отказать зрелой леди, и вы вдвоём приходите ${maru.name} к любимому кафе.`,
      );
      await era.printAndWait(
        `Пройдя под шелестящей сенью, нарезанной закатным светом, через заросший травой двор на второй этаж, только тогда находишь вход в кафе.`,
      );
      await era.printAndWait(
        `Хозяин, кажется, неулыбчивый старик: в свете сквозь жалюзи он кажется ещё горбатее, годы нанесли ему необратимый урон, но большие руки по-прежнему ловки и сильны.`,
      );
      await era.printAndWait(
        `${maru.name} уверенно подходит сделать заказ, после нескольких фраз болтовни сворачивает тему и представляет ${you.name}.`,
      );
      await era.printAndWait(
        ` хозяин бросает работу и пристально оглядывает ${you.name} с ног до головы, ${you.name} твоё тело невольно выпрямляется.`,
      );
      await era.printAndWait(
        ` старик кивает, будто одобрил ${you.name} и протягивает слегка потрёпанное, но всё ещё чистое меню ${you.name}.`,
      );
      await era.printAndWait(
        ` как раз когда ${you.name} обдумывает, что заказать, ${maru.name} обращаешься к ${you.name}.`,
      );
      await maru.say_and_wait(`${callname}В такое заведение в первый раз, да?`);
      await maru.say_and_wait(
        `Хозяин, конечно, со странностями, но человек хороший! О мастерстве и говорить нечего, прийти сюда и не попробовать фруктовый сандей — это уже слишком жалко♪`,
      );
      era.printButton('「Мне, пожалуйста, фруктовый сандей」', 1);
      await era.printAndWait(
        `Старый граммофон играет джаз прошлого века и на фоне заката создаёт прекрасную атмосферу, будто время переплелось.`,
      );
      era.printButton(
        '「(Время здесь будто течёт медленнее, чем где-либо ещё)」',
        1,
      );
      await maru.say_and_wait(`${callname}, фруктовый сандей уже готов.`);
      await era.printAndWait(
        `${maru.name} слова возвращают ${you.name} к реальности: на деревянной тарелке изящный сандей, в нём две ложки.`,
      );
      era.printButton('(Хозяин специально так положил?)', 1);
      await maru.say_and_wait(`${callname}, давай я покормлю ${you.name}?`);
      await era.printAndWait(
        `Косой свет ложится на ${maru.name} спину и скрывает ${
          maru.sex
        } её лицо, а уши без умолку подрагивают, будто выдавая ${maru.sex} внутреннее беспокойство.`,
      );
      await era.printAndWait(`${maru.name} ждёт ${you.name} ответа.`);
      era.printButton('(Молча открываешь рот)(интеллект+20)', 1);
      era.printButton(
        '「Очень жаль, мне ещё нужно заняться работой」(характер+20)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${maru.name} подносит полную ложку сандея в ${you.name} рот. Холод на миг захватывает всё сознание, следом приходят мягкость и плотность.`,
        );
        await era.printAndWait(
          ` как раз когда ${you.name} собирается похвалить, терпкое и сладкое разливается во ${you.name} рту, заполняя его целиком.`,
        );
        await maru.say_and_wait(`${callname}, как на вкус?`);
        era.printButton('「Очень вкусно」', 1);
        await era.input();
        await maru.say_and_wait(
          ` Правда?! Тогда ${you.name} тоже покорми меня?`,
        );
        await maru.say_and_wait(`А~н`);
        await era.printAndWait(
          `${maru.name} торопит ${you.name} действие, и уши дрожат ещё сильнее.`,
        );
        era.printButton('「Деваться некуда!」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name} стараешься унять волнение в груди, вычерпываешь из сандея большую ложку и дрожа кладёшь ей в маленький ротик, похожий на вишенку — ${maru.sex}.`,
        );
        await era.printAndWait(
          `${maru.sex}Те яркие, ровные, покрытые эмалью зубы будто тоже хранят каплю нежности.`,
        );
        await maru.say_and_wait(
          ` на вкус и правда здорово⭐ ${callname}, теперь моя очередь покормить ${you.name} ♪`,
        );
        await era.printAndWait(
          ` с чуть впавшими уголками губ ${maru.sex}, и едва проступает улыбка.`,
        );
        await era.printAndWait(
          `После этого ${you.name} и ${maru.sex} молча, ${you.name} ложка за ложкой скармливаете друг другу сандей со своих ложек.`,
        );
        await era.printAndWait(
          `Лёгкую печаль заката, кажется, смывает ${maru.sex} силуэт.`,
        );
        await maru.say_and_wait(
          `Прокатимся вместе к морю? Та, кажется, тоже не терпится♪`,
        );
        await era.printAndWait(
          `${maru.sex} смотрит ожидающим взглядом на ${you.name}.`,
        );
        era.printButton('「Поехали」', 1);
        await era.input();
        await era.printAndWait(
          ` Хо-хо♪ я так и знала, что ${callname} так скажет.`,
        );
        await maru.say_and_wait(`Тогда выезжаем прямо сейчас!`);
        await era.printAndWait(
          `Молчаливый хозяин без слов убрал еду и напитки и пристально оглядывает ${you.name}`,
        );
        await era.printAndWait(
          ` Лишь спустя какое-то время кивнул ${you.name}, словно одобряя ${you.name}.`,
        );
        await maru.say_and_wait(`${callname}, пора выезжать!`);
        await era.printAndWait(
          `${maru.name}У двери тихо подгоняет ${you.name}.`,
        );
        await era.printAndWait(
          `${you.name}Достаёшь из кошелька ма-монеты, чтобы заплатить, — хозяин слегка качает головой и снова протирает бокал.`,
        );
        era.printButton('「…спасибо」', 1);
        await era.input();
        await era.printAndWait(`Затем ${you.name} как раз собирается уйти,`);
        await era.printAndWait(
          `Хозяин: гость, хорошенько проведи время с ${you.name} подружкой.`,
        );
        await era.printAndWait(
          `Густой бархатный голос донёсся слева от ${you.name}, ${you.name} в изумлении оборачивается и видит, как хозяин строго, с едва уловимой улыбкой смотрит на ${you.name}.`,
        );
        await era.printAndWait(
          `Хозяин: лавка тоже закрывается. Гость, у вас ещё какое-то дело?`,
        );
        await era.printAndWait(
          `И тогда ${you.name} не оглядываясь уходит отсюда к двери, где стоит ${maru.name}.`,
        );
        await maru.say_and_wait(
          `${callname}, чего так долго, я выведу ${you.name} наружу: без своего человека тут легко заблудиться!`,
        );
        await era.printAndWait(
          `После череды поворотов выскочить из гудящей толпы торговой улицы и впрямь ${you.name} сильно удивило. Не прошло много времени, как сели в Та, ${you.name} принимается болтать с ${maru.name}.`,
        );
        await maru.say_and_wait(
          `Хм-хм♪ ${maru.elder_sibling_sex_title} вкус у меня отличный, да? Это же заведение по маминой рекомендации!`,
        );
        era.printButton('「Тот хозяин на вид довольно пожилой」', 1);
        await era.input();
        await maru.say_and_wait(
          `Он уже тридцать лет держит эту лавку, я ещё маленькой с родителями сюда приходила пить кофе и есть сладости.`,
        );
        await maru.say_and_wait(
          `Хозяин выглядит суровым, но на деле он хороший человек!`,
        );
        await era.printAndWait(
          `Так, вопрос за ответом, после выезда на горную трассу поток машин постепенно редеет`,
        );
        await maru.say_and_wait(
          `И правда, вот так кататься вместе с тренером и Та — так приятно, под яростный бит настроение словно сразу взлетает!`,
        );
        await era.printAndWait(
          `${maru.name} уши в такт яростному ритму отбивают долю, ${you.name} словно слегка не поспевает — ${maru.sex} уже в другом ритме.`,
        );
        await era.printAndWait(
          `После яростного ритма, который будто целый век спустя наконец стих, когда Та съехала с трассы, ${you.name} наконец выдыхает с облегчением.`,
        );
        await maru.say_and_wait(
          `Хо-хо♪ Ветер по лицу — аж дух захватывает, и Та тоже рада♪`,
        );
        await maru.say_and_wait(`…… ${callname}, ${you.name} В порядке?`);
        await era.printAndWait(
          `${maru.name}Сбавила скорость, ${you.name} душа наконец вернулась от Трёх богинь в своё тело`,
        );
        await maru.say_and_wait(
          `Прости, не подумала о самочувствии тренера, как ${maru.elder_sibling_sex_title} я и вправду промахнулась.`,
        );
        await era.printAndWait(
          `${maru.name} обе уши повисли, и сложный взгляд — вина и беспокойство — устремился на ${you.name}`,
        );
        era.printButton(
          '「Ничего подобного, мне тоже радостно чувствовать дыхание ветра」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `${maru.name} уши тут же снова встали и задрожали в такт shoreline из магнитолы`,
        );
        await maru.say_and_wait(
          `Тренер такой нежный человек, даже ${maru.elder_sibling_sex_title} я чувствую, что влюбиться в ${you.name} было правильным решением♪`,
        );
        await maru.say_and_wait(
          `Впрочем, ${callname} каждый день отвечать за столько детей — тело выдерживает?`,
        );
        era.printButton('「Качаешь головой」', 1);
        await era.input();
        await maru.say_and_wait(
          `Ага-ага, так лучше всего, тренер — и правда тяжёлая профессия.`,
        );
        await maru.say_and_wait(
          `Но когда смотришь, как дети понемногу сбрасывают зелёную шелуху, взрослеют и гонятся за мечтой, меня тоже охватывает какое-то невыразимое умиление и радость.`,
        );
        await maru.say_and_wait(
          `Может, тренер и ${maru.uma_sex_title} — это те же отношения, что у мастера и ученика.`,
        );
        await maru.say_and_wait(
          `Смотришь, как дети от чуждости и оглядки при первой встрече приходят к близости и доверию, а потом, когда трёхлетняя цель завершается.`,
        );
        await maru.say_and_wait(
          `Тренер как мастер и ${maru.uma_sex_title} как ученик накопили очень глубокие узы, и эти узы стали силой, что творит чудеса, а затем двое идут к ещё большей цели.`,
        );
        era.printButton(
          `「Как тренер, от души желаю своей ${maru.uma_sex_title} попутного ветра на пути к цели」`,
          1,
        );
        await era.input();
        era.printButton('「А шаг дальше этого — уже милость Трёх богинь」', 1);
        await era.input();
        await maru.say_and_wait(
          `Хо-хо♪ Тренер дал мне такой занятный ответ, как ${maru.uma_sex_title} я тоже хочу за эти три года вместе с ${callname} накопить ещё больше прекрасных воспоминаний.`,
        );
        await maru.say_and_wait(
          `Тогда и дальше прошу любить и жаловать, ${you.sex_code !== 1 ? ' тре·не·р·тян' : 'тре·не·р·кун'}♪`,
        );
        await era.printAndWait(
          `Небо на востоке солнце окрасило в оранжево-красное, но над головой всё ещё глубокая синева; там, где солнце сходится со звёздами, этот перелив цвета — глаз не оторвать`,
        );
        await era.printAndWait(`${you.name}Не удерживаешься и зеваешь.`);
        await maru.say_and_wait(
          `Если тренеру сонно, можно немного вздремнуть на пассажирском сиденье, у моря я и Та разбудим ${you.name}.`,
        );
        await era.printAndWait(
          `И без того измотанное тело, услышав успокаивающие слова, с облегчением закрывает глаза, наслаждаясь мягким касанием ветра и едва уловимым ароматом, что идёт от Марузен`,
        );
        await era.printAndWait(
          `И без того измотанное тело, услышав успокаивающие слова, с облегчением закрывает глаза, наслаждаясь мягким касанием ветра и едва уловимым ароматом, что идёт от Марузен`,
        );
        era.println();
        era.println();
        era.println();
        await era.printAndWait(`Десять минут спустя`);
        await maru.say_and_wait(`Приехали, ${callname} просыпайся.`);
        await era.printAndWait(
          `Потирая ещё не проснувшиеся глаза, машинально довольно зеваешь, ${you.name} пытаясь быстро прийти в себя от ощущения обморока`,
        );
        await era.printAndWait(
          `Волны дробятся о рифы в шелестящую пену; дары моря на приливе — морские звёзды и ракушки — на отливе снова беззвучно исчезают.`,
        );
        await era.printAndWait(
          `Луна в окружении сияющих звёзд постепенно всходит всё выше.`,
        );
        await era.printAndWait(
          `В этот миг море среди шума волн кажется ещё тише.`,
        );
        await era.printAndWait(
          `Вы вдвоём закрываете дверцы и идёте к пляжу; море показывает влюблённым свою нежную сторону.`,
        );
        await era.printAndWait(
          `Как тихо, ${callname}, ты тоже так думаешь, правда?`,
        );
        await maru.say_and_wait(
          `Как тихо, ${callname}, ты тоже так думаешь, правда?`,
        );
        await era.printAndWait(
          `${maru.name}Она снимает туфли на каблуках и босиком идёт в волны.`,
        );
        await maru.say_and_wait(`${callname}Ты тоже почувствуй поцелуй моря.`);
        await era.printAndWait(
          `${you.name}По приглашению ${maru.name} ты тоже снимаешь обувь и медленно идёшь к волнам`,
        );
        await era.printAndWait(
          `Море взбивает пену за пеной; эти волны, как дети, шаловливо набегают на берег, нежно гладят мягкий песок и с сожалением отступают.`,
        );
        await era.printAndWait(
          `Под вечными ласками на песке прочерчиваются серебряные кромки берега, и в лунном свете кажется, будто море оправлено в сияющую серебряную рамку.`,
        );
        await era.printAndWait(`Природа — лучший художник. `);
        await era.printAndWait(
          `${maru.name}Левой рукой она поднимает подол юбки и естественно полуоборачивается к ${you.name}. Лунный свет — ${
            maru.sex
          } окутана неприкосновенной священной мантией, брызги волн о камни поднимают дымку и приносят томный соблазн, а несмолкающие волны словно говорят о волнении в сердце девушки.`,
        );
        await era.printAndWait(
          `Возможно, даже ${
            maru.sex
          } сама не замечает, как под невидимой кистью природы становится главной героиней этой картины в серебряной раме.`,
        );
        await maru.say_and_wait(`Луна так красива, ${callname}.`);
        era.printButton('「Ветер тоже такой нежный」', 1);
        await era.input();
        await maru.say_and_wait(`Хо-хо♪ ${callname}, ну и мастер говорить.`);
        await era.printAndWait(
          `Пока вы говорите, ${you.name} нежно обнимает ${maru.name} за талию, хотя ${
            maru.sex
          } вздрагивает, будто от тока, но ${you.name} не встречает сопротивления.`,
        );
        await maru.say_and_wait(
          `${callname}Не думаешь, чем обернётся, если внезапно обнять леди без спроса?`,
        );
        await era.printAndWait(
          `В тех бирюзовых глазах таится притяжение, и когда ${maru.sex} смотрит на ${you.name}, ${you.name} уже почти не может отвести взгляд, но это вовсе не давит.`,
        );
        await era.printAndWait(
          `Словно переменчивая чаровница ветра, ${maru.sex} — свет неба, звуки, запах моря или земли.`,
        );
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait(`${you.name} губы приносят нежное ощущение.`);
        await maru.say_and_wait(
          `Ну правда, ${
            callname
          }, совсем не откровенный. Если в такой момент не проявить инициативу, это выводит из себя.`,
        );
        await era.printAndWait(
          `От первых робких касаний — к всё более быстрому ритму, и в финале — глубокий поцелуй. Лишь когда ${you.name} начинает задыхаться, она с неохотой отстраняется.`,
        );
        await era.printAndWait(
          `Между вашими губами тянется серебряная ниточка — ${
            maru.sex
          } с бесконечно любящим и нежным выражением смотрит на ${you.name}.`,
        );
        await era.printAndWait(
          `${you.name} инстинктивно крепко обнимаешь её — ${maru.sex}, и ${
            maru.sex
          } так же нежно гладит ${you.name} по щеке в ответ.`,
        );
        await era.printAndWait(
          `В прохладной морской воде только это тепло, словно от маяка, держится ещё долго.`,
        );
      } else {
        era.printButton('「Очень жаль, мне ещё нужно заняться работой」', 1);
        await era.input();
        await maru.say_and_wait(
          `Ах, раз так, тогда скорее иди занимайся, ${callname}, только хорошо поработав, получишь финальную награду.`,
        );
        await era.printAndWait(
          `${you.name}Молча берёшь портфель и, не оглядываясь, уходишь из кафе, но вскоре теряешься в петляющих переулках.`,
        );
        await era.printAndWait(
          `В конце концов на попутке доброго дядьки ${you.name} едва успевает вернуться в общежитие до закрытия ворот.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  dream: (() => {
    const title = 'Сон оленя';
    /**
     * 比喻虚幻迷离、得失无常，以及稀里糊涂、犹如做梦的状况。
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      maru.print(
        `Проснувшись, обнаруживаешь, что лежишь на траве; вокруг цветочное поле, от травы рядом с тобой оно тянется до самого края горизонта.`,
      );
      maru.print(
        `В обычный день, возможно, гулял(а) бы среди цветов с лёгким сердцем.`,
      );
      maru.print(`Но почему-то желание найти выход берёт верх.`);
      await maru.say_and_wait(`Но в какую сторону лучше отправиться?`);
      era.printButton(`「Заросли роз, густо покрытые шипами」`, 1);
      era.printButton(`「Высокий лабиринт из кустов」`, 2);
      if ((await era.input()) === 1) {
        maru.print(`Всё, что я делаю, — чтобы причинить тебе боль?`);
        maru.print(
          `В миг, когда раздвигаешь шипы, у самого уха будто раздаётся вздох.`,
        );
        maru.print(
          `Чем дальше идёшь, тем гуще шипы впереди и тем больше сил нужно, чтобы их раздвинуть.`,
        );
        maru.print(`А путь позади, неизвестно когда, уже перекрыт.`);
        await maru.say_and_wait(`Назад пути нет.`);
        maru.print(`Тело, будто чувствуя опасность, слегка дрожит.`);
        maru.print(
          `Будь это обычный человек или чуть более слабая ${maru.uma_sex_title}, возможно, заблудился бы в этой клетке, где не видно и лучика солнца.`,
        );
        maru.print(
          `Постепенно руки почти не слушаются; капли пота катятся по коже на землю, и кусты впитывают их.`,
        );
        maru.print(`И всё же, куда ни глянь, выхода будто нет.`);
        await you.say_as_passer_by_and_wait(
          `Розы`,
          `Даже так не собираешься сдаваться?`,
        );
        maru.print(`Из кустов доносится перешёптывание.`);
        await maru.say_and_wait(
          `Мир снаружи ещё богаче и прекраснее, чем ты думаешь, знаешь? Если в таком месте зацепит край одежды — не слишком ли жалко?`,
        );
        await you.say_as_passer_by_and_wait(
          `Розы`,
          `Вот как, мы поняли. Раз ты в безвыходном положении — вот почему смотришь на это с оптимизмом.`,
        );
        maru.print(`Перешёптывание становится всё громче.`);
        await you.say_as_passer_by_and_wait(
          `Голос иллюзии`,
          `Сил уже нет, сил у тебя уже нет.`,
        );
        await you.say_as_passer_by_and_wait(
          `Голос иллюзии`,
          `Твоё дыхание ты изо всех сил сдерживаешь, но я уже это чую, знаешь?`,
        );
        await you.say_as_passer_by_and_wait(
          `Голос фантома`,
          `Эта спешка, это беспокойство — совсем не похожи на твой тон, знаешь?`,
        );
        await you.say_as_passer_by_and_wait(
          `Голос фантома`,
          `На самом деле ты вовсе не так уж простила того тренера, как себе воображаешь?`,
        );
        await you.say_as_passer_by_and_wait(
          `Голос фантома`,
          `Пусть сознанием ты это на время придавила силой — семечко сомнения уже в земле, знаешь?`,
        );
        await you.say_as_passer_by_and_wait(
          `Голос фантома`,
          `Так что простить его ты, выходит, и не`,
        );
        await maru.say_and_wait(`А-а… я знаю.`);
        await maru.say_and_wait(
          `${callname} предал меня, и это и правда сильно ранило.`,
        );
        await maru.say_and_wait(
          `Впрочем, даже такого ${callname}, я всё равно люблю его.`,
        );
        await you.say_as_passer_by_and_wait(
          `Голос фантома`,
          `Почему? Почему? Любовь — всего лишь иллюзия, которая рано или поздно рассыплется.`,
        );
        await maru.say_and_wait(`Любовь вовсе не такая поверхностная штука!`);
        await maru.say_and_wait(
          `Если у влюблённых есть только пенистая, быстротечная страсть, они будут до дрожи бояться дня, когда с разлукой всё исчезнет, — и счастья в этом нет.`,
        );
        await maru.say_and_wait(
          `И этот страх рано или поздно задавит сладость счастливых дней.`,
        );
        await maru.say_and_wait(
          `Я очень боюсь: боль от того, что однажды потеряю ${callname}, вот так меня и раздавит.`,
        );
        await maru.say_and_wait(`Впрочем, я верю в ${callname}.`);
        await you.say_as_passer_by_and_wait(
          `Голос фантома`,
          `Он же тебя уже предавал, знаешь?`,
        );
        await maru.say_and_wait(
          `Я же не могу отчаяться только потому, что так говорит разум?`,
        );
        await maru.say_and_wait(
          `Даже если все люди на свете в один голос скажут, что это невозможно, я не отчаюсь.`,
        );
        await maru.say_and_wait(
          `Именно потому, что человек не может предсказать своё будущее, возможно что угодно, знаешь?`,
        );
        await you.say_as_passer_by_and_wait(
          `Голос фантома`,
          `И эта оптимистичность даже тебя саму защитить не может?`,
        );
        await maru.say_and_wait(
          `А последние десять с лишним лет разве не прошли вот так, благополучно?`,
        );
        await you.say_as_passer_by_and_wait(`Голос фантома`, `Э?`);
        maru.print(
          `В глухой, казалось, стене из шипов мелькнула щель, и улучившая момент ${maru.name} вот так вырывается из клетки.`,
        );
        maru.print(
          `Когда та земля шипов остаётся позади, силы понемногу возвращаются.`,
        );
        await you.say_as_passer_by_and_wait(
          `Голос фантома`,
          `…Потому что жизнь — это сумма возможностей?`,
        );
        maru.print(
          `Фантом, обдумывая эти слова, рассеивается в миг прозрения.`,
        );
      } else {
        era.drawLine();
        maru.print(`Неизвестно, сколько прошло времени, а выхода всё нет.`);
        maru.print(
          `Хоть по правилу левой руки, хоть просто снести стены — итог один.`,
        );
        maru.print(
          `Хуже того: по прежнему следу обратно к исходной точке — а там тоже сплошное продолжение стены.`,
        );
        await maru.say_and_wait(`М-м— вот это уже задачка.`);
        maru.print(
          `Остаётся пока отступить на крохотную пустошь, которую условно назовём центром.`,
        );
        maru.print(
          `Пустошью её зовут потому, что ветер там яростный: ни травинки под таким шквалом не выжить.`,
        );
        maru.print(`Странность в том, что этот шквал швыряет прямо на стены.`);
        maru.print(
          `До сих пор удавалось в последний миг ускользнуть в сторону — иначе размазало бы в лепёшку.`,
        );
        maru.print(
          `Но все способы, какие только можно было испробовать, уже испробованы.`,
        );
        await maru.say_and_wait(`Если отбросить все варианты, тогда.`);
        await era.printAndWait(`${maru.name} входит в ту пустошь.`);
        await era.printAndWait(
          `Хотя рёв ветра таков, что едва ${maru.sex} не опрокидывается, но ${
            maru.sex
          } всё же стоит твёрдо.`,
        );
        await era.printAndWait(`И затем.`);
        await era.printAndWait(`И, взяв силу ветра, срывается на те стены.`);
        await era.printAndWait(
          `И стены перед этой мощью трескаются мало-помалу.`,
        );
        await era.printAndWait(`Новая дорога раскрывается перед глазами.`);
      }
      await maru.say_and_wait(
        `По пути было немало трудностей, но все их удалось благополучно пройти.`,
      );
      await maru.say_and_wait(`И что же теперь ждёт впереди?`);
      await maru.say_and_wait(
        `Отбросив позади серые тени прошлого, вот так идёт по ковру из живых цветов.`,
      );
      await maru.say_and_wait(`…Интуиция мне подсказывает.`);
      era.printButton(
        `「Несись без остановки туда, куда смотришь в миг пробуждения」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`На старт!`);
      maru.print(
        `Когда раздаётся стартовый пистолет, ${maru.name} срывается к финишу, который сама себе наметила.`,
      );
      maru.print(
        `Прекрасные цветы стремительно отлетают назад; мало-помалу собственный облик уже не удержать.`,
      );
      maru.print(`Словно пёстрая лента, они постепенно сливаются воедино.`);
      maru.print(
        `Дыхание больше не мешает: всё быстрее, всё быстрее — так, будто вот-вот растворюсь в цветочном поле.`,
      );
      await maru.say_and_wait(`…Раз так.`);
      era.printButton(`「Так и продолжай ускоряться!」`, 1);
      await era.input();
      await maru.say_and_wait(
        `Смотри, на что способна ${maru.name} по-настоящему!`,
      );
      await era.printAndWait(`В ушах ревёт мотор. Не ошибёшься: это голос Та.`);
      maru.print(`Словно Та одолжила мне свою силу.`);
      maru.print(`Вот так… так и правда хорошо?`);
      maru.print(`Нет. Так — хорошо.`);
      maru.print(
        `С тем же трепетом, что тогда, в детстве, при первом взгляде на Countach.`,
      );
      maru.print(`За горизонтом — тот сияющий свет.`);
      maru.print(`Это и есть финиш, да? Финиш уже виден.`);
      await maru.say_and_wait(`Почему-то даже немного грустно.`);
      maru.print(`Когда взойдёт солнце, это смутное ощущение растает.`);
      maru.print(`Может, на этом сон и кончается.`);
      await maru.say_and_wait(`Эх, это на меня совсем не похоже.`);
      maru.print(
        `В мире нет пира, который не кончается, и эти сладкие воспоминания, боюсь, заснут навсегда.`,
      );
      maru.print(`И в яви тоже живи счастливо, хорошо? Мы так договорились.`);
      maru.print(`Доброе утро, ${maru.name}.`);
      await era.printAndWait(`${maru.name}Открываешь глаза.`);
      await era.printAndWait(
        `Тёплый солнечный свет нежно гладит ${maru.sex} её длинные волосы.`,
      );
      await era.printAndWait(
        `Всё ещё смакуя тот отзвук, ${maru.name} садится.`,
      );
      await era.printAndWait(`Начинается новый день.`);
    };
    f.title = title;
    return f;
  })(),
  fall_heaven: (() => {
    const title = 'GOOD END · Путник, забредший в рай';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} darley 达利阿拉伯
     * @param {CharaTalk} godolphin 高多芬柏布
     * @param {CharaTalk} byerley 拜耶尔土耳其
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (
      maru,
      taste,
      darley,
      godolphin,
      byerley,
      you,
      callname,
    ) => {
      darley.name = 'Нежная богиня';
      godolphin.name = 'Мудрая богиня';
      byerley.name = 'Строгая богиня';
      await era.printAndWait(`Самый обычный выходной.`);
      await era.printAndWait(
        `Смяла Императора и красиво взяла вторую победу подряд.`,
      );
      await era.printAndWait([
        'Вместе с ',
        maru.get_colored_name(),
        ' эти три года, что вы провели бок о бок, наверное, останутся днями, которые невозможно забыть.',
      ]);
      await era.printAndWait([
        'Пока прощаешься с ',
        maru.get_colored_name(),
        '.',
      ]);
      await taste.say_and_wait(`Поздрав! ляем с победой в URA!`);
      await era.printAndWait([
        'Крошечная директриса тащит кубок почти ',
        maru.sex,
        ' вполовину её роста и вручает его ',
        maru.get_colored_name(),
        ' в руки.',
      ]);
      await maru.say_and_wait(`Большое спасибо!`);
      await era.printAndWait([
        maru.get_colored_name(),
        ' принимает кубок, смотрит в камеры и отвечает на вопросы давно ждущих журналистов.',
      ]);
      await maru.say_as_passer_by_and_wait('Журналист A', [
        maru.actual_name_with_title,
        ', скажи, что чувствуешь, когда кубок у тебя в руках?',
      ]);
      await maru.say_and_wait(
        'Обычно, наверное, надо быть в полном восторге? Всё-таки такие большие скачки.',
      );
      await maru.say_and_wait(
        'Но в ту самую секунду, когда кубок оказался у меня, на душе было очень тихо.',
      );
      await maru.say_as_passer_by_and_wait(
        'Журналист A',
        'Можешь поподробнее рассказать зрителям у экранов?',
      );
      await maru.say_and_wait([
        'Да — ',
        maru.uma_sex_title,
        ' там, где никто не видит, проливают пот ради первого места, и этот задор, с которым они бьются на скаковом поле, дал мне чувство: 『ах, вот зачем я вышла на скачку』. Хо-хо~',
      ]);
      await maru.say_as_passer_by_and_wait('Журналист A', [
        maru.actual_name_with_title,
        ' так глубоко понимаешь ',
        maru.uma_sex_title,
        '.',
      ]);
      await maru.say_and_wait([
        'Да! Перед скачками я всегда болтаю с участвующими ',
        maru.uma_sex_title,
        '. И слышу столько всего интересного~',
      ]);
      await maru.say_as_passer_by_and_wait(
        'Журналист A',
        'Можешь рассказать зрителям у экранов?',
      );
      await maru.say_and_wait([
        'Мм, взять хотя бы недавнюю скачку: одна ',
        maru.uma_sex_title,
        ' ——',
      ]);
      await maru.say_and_wait([
        '— и под конец ',
        maru.sex,
        ' всё жаловалась, что её тренер — деревянная башка.',
      ]);
      await maru.say_as_passer_by_and_wait(
        'Журналист A',
        'Очень занятно, большое спасибо.',
      );
      await era.printAndWait(
        'Журналист ещё не успел отойти в сторону, как другой уже нетерпеливо выскочил вперёд.',
      );
      await maru.say_as_passer_by_and_wait('Журналист B', [
        'Простите, ',
        maru.actual_name_with_title,
        ' какова твоя следующая цель?',
      ]);
      await maru.say_and_wait('Нн, довольно трудный вопрос —');
      await maru.say_and_wait('Мы с тренером решили взять паузу.');
      await maru.say_as_passer_by_and_wait(
        'Журналист B',
        'Скорее всего, хочет провести медовый месяц со своим тренером. Такого я насмотрелась.',
        true,
      );
      await maru.say_as_passer_by_and_wait(
        'Журналист B',
        'Это тендинит сгибателя?',
      );
      await maru.say_and_wait(
        'Да, перед финалом ходила к врачу; хоть и лёгкая степень, но продолжать всё равно было рискованно.',
      );
      await maru.say_and_wait([
        'Хотя тренер- ',
        you.adult_sex_title,
        ' настаивал(а), чтобы я отдыхала, но я всё равно хотела дойти до конца… к счастью, победили — было жарко, но обошлось, и это всё благодаря ',
        callname,
        ' ⭐',
      ]);
      await maru.say_as_passer_by_and_wait(
        'Журналист B',
        [
          callname,
          '? Как и ожидалось, у победивших ',
          maru.uma_sex_title,
          ' в конце всегда один и тот же финал.',
        ],
        true,
      );
      await maru.say_as_passer_by_and_wait(
        'Журналист B',
        'Твой тренер наверняка очень старался за кулисами. Можешь рассказать нам и про тренера?',
      );
      await maru.say_and_wait(
        'Столь хороший шанс — пусть лучше тренер сам расскажет!',
      );
      await era.printAndWait([
        'Смотришь со стороны, и ',
        you.get_colored_name(),
        ' под действием ',
        maru.get_colored_name(),
        ' оказываешься рядом.',
      ]);
      era.printButton('「Э? Я?»', 1);
      await era.input();
      await era.printAndWait([
        'Перед целой кучей внезапно возбуждённых журналистов и всякой профессиональной съёмочной техникой, совсем без подготовки, ',
        you.get_colored_name(),
        ' роняет холодную каплю пота.',
      ]);
      await maru.say_and_wait([
        'Тренер- ',
        you.adult_sex_title,
        ' не стесняйся, тоже скажи, что чувствуешь!',
      ]);
      era.printButton(
        `В-в-вообще огромное спасибо Трейсен за доверие ко мне, подопечная ${maru.uma_sex_title} изо всех сил шла навстречу…`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait('Фотограф', 'Смотрите сюда!');
      await era.printAndWait(
        'Сжимая в руках три года смеха и слёз, опускаешь занавес.',
      );
      era.drawLine();
      await era.printAndWait([
        'Пока прощаешься с ',
        maru.get_colored_name(),
        ', ',
        you.get_colored_name(),
        ' сидит в кабинете тренера.',
      ]);
      await era.printAndWait(
        'Кубки в комнате коллекции стоят якорем: три прожитых года — вовсе не сон.',
      );
      await era.printAndWait(
        'Только цель вдруг пропала — и будто сразу стало спокойно.',
      );
      await era.printAndWait('Голова тяжёлая, веки слипаются.');
      await you.say_and_wait([
        maru.get_colored_name(),
        ' Пока не вернётся, можно вот так чуть вздремнуть.',
      ]);
      await era.printAndWait([
        'Словно найдя подходящий предлог, с чистой совестью закрываешь глаза ',
        you.get_colored_name(),
        ' и вот так проваливается в сон.',
      ]);
      await era.printAndWait([
        'Когда снова просыпаешься, ',
        you.get_colored_name(),
        ' оказывается на бескрайнем лугу.',
      ]);
      await era.printAndWait([
        'Когда болтаешь с ',
        maru.get_colored_name(),
        ', ',
        maru.sex,
        ' полушутя говорит: 「Я бывала в Эдеме」.',
      ]);
      await era.printAndWait([
        'Судя по этой красоте, какой на земле не бывает, ',
        maru.sex,
        ' говорит, скорее всего, правду.',
      ]);
      await you.say_and_wait('Куда идти дальше?');
      await era.printAndWait([
        'И ещё одна насущная проблема: ',
        you.get_colored_name(),
        ' не ',
        maru.uma_sex_title,
        '.',
      ]);
      await era.printAndWait([maru.get_colored_name(), ' способов почти нет.']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' скоро вернётся, времени выбирать почти не осталось.',
      ]);
      await you.say_and_wait('Придётся выдвигаться.');
      await era.printAndWait(
        'Чем дольше мешкать, тем хуже; выбрать хоть что-то лучше, чем не выбрать ничего.',
      );
      await era.printAndWait([
        'Припоминая ',
        maru.get_colored_name(),
        ' и смутные ориентиры, о которых она говорила, ',
        you.get_colored_name(),
        ' отправляется туда.',
      ]);
      era.println();
      await era.printAndWait([
        'Непонятно, сколько уже идёшь; время в этом пути тоже расплылось. К счастью, здесь не чувствуешь ни голода, ни жажды, и у ',
        you.get_colored_name(),
        ' на душе чуть легче.',
      ]);
      await era.printAndWait(
        'Однообразный луг, даль, до которой, кажется, никогда не дойти.',
      );
      await era.printAndWait([
        maru.get_colored_name(),
        ' тот золотой луг, о котором она говорила…',
      ]);
      await you.say_and_wait('Он правда есть?');
      await era.printAndWait('Тот прекрасный мир.');
      await maru.say_as_unknown_and_wait([maru.sex, 'Вон же он?']);
      await you.say_and_wait([maru.get_colored_name(), '!?']);
      await era.printAndWait([
        'Та, что недалеко, — явно ',
        maru.get_colored_name(),
        '!',
      ]);
      await you.say_and_wait('Так ты здесь!!');
      await era.printAndWait([
        'В порыве радости ',
        you.get_colored_name(),
        ' бросается к тому призраку.',
      ]);
      await you.say_and_wait('Э?');
      await era.printAndWait([
        'Но руки в объятии проходят сквозь ',
        maru.sex,
        ' её тело.',
      ]);
      await maru.say_and_wait('……');
      await era.printAndWait('Призрак молча идёт куда-то.');
      await you.say_and_wait('?');
      await era.printAndWait(
        'Сначала просто медленно шагает, потом всё быстрее — и в конце уже бежит.',
      );
      await you.say_and_wait('Подожди!');
      await era.printAndWait([
        'Будто явился лишь затем, чтобы вести ',
        you.get_colored_name(),
        ', а когда выдыхается и садится отдышаться — замирает неподалёку.',
      ]);
      await era.printAndWait([
        'Когда бежишь изо всех сил, всегда не хватает чуть-чуть, чтобы коснуться её — ',
        maru.sex,
        '.',
      ]);
      await era.printAndWait([
        'Что делать? Как снова коснуться её — ',
        maru.sex,
        '?',
      ]);
      await era.printAndWait([
        'Не смириться. Хочется догнать её — ',
        maru.sex,
        '.',
      ]);
      await era.printAndWait([
        'Хочется обогнать её — ',
        maru.sex,
        ', хочется увидеть её мир — ',
        maru.sex,
        '.',
      ]);
      await you.say_and_wait(
        'Наверняка там красиво! Иначе не шла бы так упрямо вперёд.',
      );
      await you.say_and_wait(
        'Хочется иметь, хочется захватить, хочется увидеть тот прекрасный мир.',
      );
      await era.printAndWait(
        'Смутно будто касаешься тех оков, что всё время тебя держали.',
      );
      await era.printAndWait(
        'Если бежать дальше, можно загнать себя насмерть.',
      );
      await you.say_and_wait(
        'Я долго думал(а) — с того дня, как заключили контракт, и до мига, когда кончилась URA.',
      );
      await you.say_and_wait(
        'Чего я на самом деле хотел(а) — это миг красоты.',
      );
      await you.say_and_wait(
        'Миг, когда чувство взлетает на пик, — ради этого мига я и жил(а) до сих пор.',
      );
      await you.say_and_wait(
        'Разве не этот миг — единственный шанс, что дали мне Три богини?',
      );
      await you.say_and_wait('Значит, ответ был ясен с самого начала.');
      await era.printAndWait([
        'Не слушая, как тело стонет, ',
        you.get_colored_name(),
        ' снова ускоряется вперёд.',
      ]);
      await era.printAndWait(
        '…И до той зари впереди — всё та же недосягаемая, как сон, дистанция.',
      );
      await era.printAndWait([
        'Между человеком и ',
        maru.uma_sex_title,
        ' — пропасть, которую не перейти.',
      ]);
      await you.say_and_wait('Уаааааа!', true);
      await era.printAndWait(
        'Выжимаешь последнюю каплю сил и прыгаешь изо всех сил.',
      );
      await era.printAndWait(
        'Даже призрак, кажется, не ждал этого последнего рывка и не успевает среагировать.',
      );
      await era.printAndWait([
        'В итоге ',
        you.get_colored_name(),
        '  касается той фигуры.',
      ]);
      await you.say_and_wait('Я смог(ла)!', true);
      await era.printAndWait('И едва уловимое касание тут же тает.');
      await era.printAndWait([
        'Выжав последнюю каплю сил,  ',
        you.get_colored_name(),
        ', только и может смотреть на призрак, замерший неподалёку.',
      ]);
      await you.say_and_wait(
        [maru.get_colored_name(), ', я наконец понял(а), каково тебе!'],
        true,
      );
      await era.printAndWait(
        'На пределе внезапно падаешь — похоже, уже перелом.',
      );
      await era.printAndWait(
        'От тяжёлого дыхания лёгкие режет, будто ножом по мясу.',
      );
      await era.printAndWait([
        'За такую цену ',
        you.get_colored_name(),
        ' что же получил(а)?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' сердце уже захвачено той красотой, слёзы текут сами.',
      ]);
      await you.say_and_wait('Я умираю?', true);
      await era.printAndWait([
        'Призрак больше не идёт к цели, как раньше, — наоборот, идёт к ',
        you.get_colored_name(),
        ' и подходит.',
      ]);
      await era.printAndWait([
        'Словно даруя увядающему последнюю заботу, бережно кладёт ',
        you.get_colored_name(),
        '  на колени.',
      ]);
      await you.say_and_wait([maru.get_colored_name(), '.'], true);
      await era.printAndWait(
        'Павшие листья возвращаются к корням; тот, кого видишь, — не тот, о ком думаешь, но озеро сердца накрывает первый лепесток ранней весны, кружащийся на ветру, и весь шум стихает.',
      );
      await you.say_and_wait(
        'Это дар, принесённый ради встречи с тобой.',
        true,
      );
      await you.say_and_wait('Я… я больше не буду бежать.', true);
      await era.printAndWait('Слёзы всё наворачиваются и застилают взгляд.');
      await you.say_and_wait('Ты… тебе больше никогда не будет одиноко.', true);
      await era.printAndWait([
        'Последний кадр застывает на увиденном вместе с ',
        maru.get_colored_name(),
        '  море.',
      ]);
      await era.printAndWait(
        'Море гладко, как зеркало, и отражает дымку былого.',
      );
      era.drawLine();
      await you.say_and_wait('Где это?');
      await era.printAndWait(
        'Когда ты снова приходишь в себя, перед глазами — золотой луг.',
      );
      await era.printAndWait([
        'Как и говорила ',
        maru.get_colored_name(),
        ' — та самая колыбель всего человечества.',
      ]);
      await godolphin.say_and_wait('Плакать больше не нужно.');
      await godolphin.say_and_wait('В этом раю печали больше не будет.');
      await era.printAndWait([
        'Богиня принятия Годольфин Барб смотрит с лаской на ',
        you.get_colored_name(),
        '.',
      ]);
      await godolphin.say_and_wait('Ты уже доказал(а) нам свою храбрость.');
      await godolphin.say_and_wait(
        'Пока мы не встретимся снова, пройди этот путь, следуя собственным желаниям.',
      );
      await era.printAndWait([
        'Богиня храбрости Дарли Арабиан ободряет полным надежды взглядом ',
        you.get_colored_name(),
        '.',
      ]);
      await darley.say_and_wait([
        'Человеческим телом, выложившись до предела, тебе лишь удалось коснуться края ',
        maru.uma_sex_title,
        '.',
      ]);
      await darley.say_and_wait(
        'Слово «сила» тебе чуждо. Всё это время ты лишь прятался(ась) трусом в бумажном замке из лжи и тешил(а) себя мыслью, будто он несокрушим.',
      );
      await darley.say_and_wait(
        '…И всё же в последний миг ты глубоко покаялся(ась) перед нами. То, что ты перестал(а) бежать и выложился(ась) до конца в последнем рывке, — доказательство покаяния.',
      );
      await era.printAndWait([
        'Богиня силы и мощи Байерли Тёрк смотрит со вздохом на ',
        you.get_colored_name(),
        '.',
      ]);
      era.printButton('「Три богини!?」', 1);
      await era.input();
      await byerley.say_and_wait(
        'Как видишь, мы и есть богини, что создали и хранят этот Эдем.',
      );
      await byerley.say_and_wait([
        'Обычных людей, приходящих в смертный час, не счесть; не ',
        maru.uma_sex_title,
        ', а живым телом сюда явился(ась), пожалуй, только ты.',
      ]);
      await darley.say_and_wait('Есть ли у тебя желание?');
      await darley.say_and_wait(
        'Если это не затронет ход человеческого общества, мы можем его исполнить.',
      );
      await era.printAndWait('Желание?');
      await era.printAndWait(
        'Вкушая все тяготы пройденного пути, ты находишь ответ:',
      );
      era.printButton(
        `「Прошу, верните меня в реальный мир, к ${maru.name} 」`,
        1,
      );
      await era.input();
      await byerley.say_and_wait(
        'Стоит загадать желание — и в тот же миг ты вернёшься в человеческий мир. Или твоё желание именно таково?',
      );
      era.printButton(
        `「Досточтимые богини, как видите, таково моё желание.」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        'Красота, к которой я стремлюсь, — это удача, по меркам обычных людей ни хорошая, ни плохая: она вспыхивает на миг лишь после огромной цены.',
      );
      await you.say_and_wait(
        'Если сравнить — словно обменять пот и время на лотерейный билет на художественную выставку.',
      );
      await you.say_and_wait(
        'Чтобы попасть на эту выставку, нужно вытянуть именно этот билет.',
      );
      await you.say_and_wait(
        'Но любое желание — даже пожелание себе удачи — сильно обесценит ту красоту, к которой я стремлюсь.',
      );
      await you.say_and_wait(
        'Итог желания лишь отдалит меня от цели: это не более чем порождение пустоты.',
      );
      await darley.say_and_wait('…Раз решение принято, позволь провести тебя.');
      await godolphin.say_and_wait(
        'Милое дитя, надеюсь, когда проживёшь жизнь и снова придёшь сюда, тебе будет дарован покой.',
      );
      await byerley.say_and_wait(
        '…Мышь слаба, но хрупко лишь тело; храбрость в слабом теле не знает телесных границ — и это трогает.',
      );
      await byerley.say_and_wait('Пожалуй, я тебя недооценила.');
      await era.printAndWait([
        you.get_colored_name(),
        ' Тело постепенно отрывается от земли и под взглядами трёх богинь поднимается всё выше, всё быстрее — до мига, когда сознание обрывается: тот золотой луг.',
      ]);
      await era.printAndWait([
        '…а ещё являющаяся фантомом ',
        maru.sex,
        ' машет ',
        you.get_colored_name(),
        '  на прощание.',
      ]);
      era.drawLine();
      await maru.say_and_wait([callname, '?']);
      await era.printAndWait(
        'Кажется, прошло очень много времени — и будто не прошло вовсе.',
      );
      await era.printAndWait([
        'Кажется, в глазах ',
        maru.get_colored_name(),
        '  ты словно просто слишком вымотался(ась) и уснул(а).',
      ]);
      era.printButton(`「Я вернулся(ась), ${maru.name}.」`, 1);
      await era.input();
      await era.printAndWait([
        'Словно фантом из сна, ',
        maru.get_colored_name(),
        '  улыбается.',
      ]);
      await maru.say_and_wait('С возвращением.');
    };
    f.title = title;
    return f;
  })(),
  async fall_heaven_end() {
    await era.printAndWait(`Thank you for your playing!`);
  },
  gentle_wind: (() => {
    const title = 'TRUE END Нежный ветер овевает весь мир';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Вместе с ${maru.name} ты провёл(а) незабываемые три года и завоевал(а) кубок URA`,
      );
      await era.printAndWait(
        `Дальше предстоит бросить вызов совершенно новой Twinkle Series`,
      );
      await era.printAndWait(`Но перед этим.`);
      await you.say_and_wait(`Дальше — увидеться с ${maru.name}?`);
      await you.say_and_wait(`Как-то волнительно.`);
      era.drawLine({ content: 'Крыша' });
      await era.printAndWait(`Ты распахиваешь дверь на крышу.`);
      await you.say_and_wait(`Похоже, ${maru.name} здесь нет?`);
      await era.printAndWait(`Лишь лёгкий ветер — на крыше больше никого.`);
      await maru.say_and_wait(`Угадай, кто я?`);
      await era.printAndWait(
        `${you.name} взгляд закрывают две ладони, и знакомый запах сразу даёт ${you.name} понять, кто подошёл.`,
      );
      await you.say_and_wait(`${maru.name}`);
      await era.printAndWait(
        `Казалось, сейчас сорвётся взволнованный крик, но голос настолько ровный, что ты и сам(а) себе не веришь.`,
      );
      await maru.say_and_wait(`Не зря ${callname} — сразу угадал(а), кто я.`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}Мне ещё никогда так сильно никто не нравился♪`,
      );
      await maru.say_and_wait(`Это и есть то, что называют любовью?♪`);
      era.printButton(
        `「${maru.name} Мне есть что сказать ${you.name}, поэтому」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `Хе-хе~ ${callname}, хочешь понежиться к ${maru.elder_sibling_sex_title}?`,
      );
      await maru.say_and_wait(`Какое бы зло ни было…`);
      era.printButton(`「Прошу, живи со мной вечно」`, 1);
      await era.input();
      await era.printAndWait(
        `На лице ${maru.name} застыло выражение полного недоверия, и ${
          you.name
        } протягивает кольцо — символ клятвы — ${maru.sex}.`,
      );
      era.printButton(
        `「На самом деле мне важнее не идеал и не скачки, а ${you.name} 」`,
        1,
      );
      await era.input();
      era.printButton(`「Поэтому прими же мою любовь」`, 1);
      await era.input();
      await maru.say_and_wait(
        `Теперь, если не ответить на эту любовь тем же, мне будет стыдно показаться Трём богиням.`,
      );
      await maru.say_and_wait(
        `${callname}, и не только в скачках — прошу опеки и в дальнейшей жизни.`,
      );
      era.printButton(`「И я тоже — прошу и дальше быть рядом」`, 1);
      await era.input();

      await era.printAndWait(
        `Каков на вкус поцелуй клятвы? Солёный? Или с ноткой сладости? Сейчас всё это меркнет перед пьянящей ${maru.teen_sex_title} — куда важнее.`,
      );
      await era.printAndWait(
        `${you.name}С ${maru.name} судьба, пройдя сквозь все хитросплетения, наконец получила свой дар.`,
      );
      await era.printAndWait(
        `${maru.name} бег подарил скаковым ${maru.uma_sex_title} смелость и надежду.`,
      );
      await era.printAndWait(
        `Скаковая ${maru.uma_sex_title} и впредь будут гнаться за ${
          maru.name
        } спиной и однажды превзойдут ${maru.sex}.`,
      );
      await maru.say_and_wait(
        `Победа не главное: чтобы как можно больше ${maru.uma_sex_title} ощутили, что надежда есть, — вот мой идеал♪`,
      );
      await maru.say_and_wait(
        `В последующие дни с края луга молча смотреть на скаковых ${maru.uma_sex_title} и вести ${
          maru.couple_title
        } в Эдем — вот моя новая миссия.`,
      );
      await maru.say_and_wait(
        `Но сейчас сладко жить вместе с ${
          callname
        } — вот самый счастливый TRUE END♪`,
      );
      await era.printAndWait(
        `Направляя в пору растерянности ${maru.name} — ${
          you.name
        } и направляя растерянных ${maru.uma_sex_title} — ${
          maru.name
        } в конце концов станут нежным ветром, что веет в мире скаковых ${maru.uma_sex_title}.`,
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async gentle_wind_end(maru, callname) {
    await era.printAndWait(
      `Так история двоих пока что приходит к концу. Поздравляем, поздравляем.`,
    );
    await era.printAndWait(`Посмотреть подсказку?`);
    era.printButton(`Да`, 1);
    era.printButton(`Нет`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `Чтобы получить GOOD END, нужно победить во всех скачках карьеры.`,
      );
      await era.printAndWait(
        `Выборы в ивентах праздников на концовку не влияют.`,
      );
      await era.printAndWait(
        `По сюжету обрати внимание на выборы второго года; сейв имеет смысл начать с 3-й недели января второго года, ивент: «На стыке зимы и весны».`,
      );
      await era.printAndWait(
        `Если условия GE выполнены, после рождественского ивента очисти список команды и снова выбери ${maru.name}: сработает диалог, появятся особые реплики.`,
      );
      await era.printAndWait(
        `Кроме того, на первой неделе третьего года сначала выбери новогоднее посещение, а потом отправляйся в храм — суммарная выгода от коу выше.`,
      );
      await era.printAndWait(`И напоследок — скорее достичь GE.`);
    } else {
      await maru.say_as_unknown_and_wait(
        `Хочешь всё разведать сам? Похоже, в тебе дремлет божество гайдов, ${callname} вперёд!`,
      );
    }
  },
  ne_happiness_day: (() => {
    const title = 'NORMAL END · Спокойные будни';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `Что было дальше — неизвестно, но ${maru.name} так ничего и не изменилось.`,
      );
      await era.printAndWait(
        `После этого каждый шаг по составленному плану был пройден на совесть и подошёл к концу.`,
      );
      await era.printAndWait(`Вскоре после этого —`);
      await era.printAndWait(`Аэропорт`);
      era.println();
      await maru.say_and_wait(
        `${you.actual_name}, досюда провожать достаточно.`,
      );
      await you.say_and_wait(`Как доберёшься до Парижа, напиши мне, хорошо?`);
      await maru.say_and_wait(
        `Хо-хо~ Конечно. Всего два месяца путешествия, но наконец-то можно будет взглянуть на Эйфелеву башню.`,
      );
      await maru.say_and_wait(
        `${you.actual_name}И ещё: пока меня нет, не подкатывай к другим умамусумэ, ясно?`,
      );
      await you.say_and_wait(`Аха-ха-ха`);
      await maru.say_and_wait(`Ах ты…`);
      await era.printAndWait(`Она крепко щёлкает тебя указательным по лбу.`);
      await you.say_and_wait(`Больно!`);
      await maru.say_and_wait(`Так тебе и надо — вечно от тебя одни волнения.`);
      await maru.say_and_wait(`Ну что, мне пора.`);
      await you.say_and_wait(`Счастливого пути!`);
      await maru.say_and_wait(
        `${you.actual_name}И когда будешь возвращаться — тоже счастливого пути!`,
      );
      await era.printAndWait(`Почему-то ${maru.name} выглядит одиноко.`);
      await maru.say_and_wait(`${you.actual_name}…Нет, ничего.`);
      await maru.say_and_wait(`Пора уже выходить.`);
      await era.printAndWait(`Смотришь, как ${maru.name} тает в толпе.`);
      era.drawLine();
      await era.printAndWait(
        `Как подопечная, с которой три года шли рука об руку: расположение взаимно, но ближе так и не стали.`,
      );
      await era.printAndWait(`Чего же всё-таки не хватило?`);
      await era.printAndWait(
        `Впрочем, такой спокойный финал — тоже ведь счастье.`,
      );
      await you.say_and_wait(`Какая сегодня хорошая погода.`, true);
      await era.printAndWait(
        `${you.name} щурится и смотрит, как самолёт рассекает тонкие облака и тянет за собой тонкую белую нить.`,
      );
      await era.printAndWait(
        `Когда-то ${you.name} тоже в такую погоду смотрел(а) на ${maru.name} : она, прислонившись к перилам крыши, щурится и тихонько напевает, — туда, куда уносится её песня.`,
      );
      await era.printAndWait(
        `Это, наверное, инверсионный след, думаешь про себя.`,
      );
      await era.printAndWait(`И этот день тоже прошёл так мирно.`);
      await era.printAndWait(
        `Надеешься, что ${maru.name} тоже каждый день проводит так — без хворей и бед.`,
      );
      await era.printAndWait(
        `Кстати, до поступления новых умамусумэ уже недалеко. Нужно скорее отыскать новые самородки.`,
      );
      await era.printAndWait(
        `— как в те мрачные дни, когда ${maru.name} тоже никогда не сдавалась.`,
      );
      await era.printAndWait(
        `Это уже не вернуть. В последний раз глядишь в ту сторону, куда она ушла, и уходишь, не оглядываясь.`,
      );
    };
    f.title = title;
    return f;
  })(),
  girls_dream: (() => {
    const title = 'NORMAL END · Будущее мечты';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `Три года ${you.name} и ${maru.name} бежали к одной цели и затем взяли победу на скачках URA.`,
      );
      await era.printAndWait(`После этого——`);
      await maru.say_as_passer_by_and_wait(
        `Прохожая ${maru.uma_sex_title} A`,
        `${maru.name}${
          maru.sex_code !== 1 ? '-семпай' : '-семпай'
        }, в этот раз на GIII я правда победила по методу, которому ${you.name} научил(а)!`,
      );
      await maru.say_as_passer_by_and_wait(
        `Прохожая ${maru.uma_sex_title} B`,
        `Так вот как это решается? Не зря Марузен ${
          maru.sex_code !== 1 ? ' -семпай' : '-семпай'
        }`,
      );
      await maru.say_as_passer_by_and_wait(
        `Прохожая ${maru.uma_sex_title} C`,
        `Благодаря Марузен ${
          maru.sex_code !== 1 ? ' -семпай' : '-семпай'
        } и её приёмам теперь я и с тренером ${you.adult_sex_title} тоже отлично лажу.`,
      );
      await maru.say_and_wait(`Как хорошо, что удалось помочь младшим!`);
      await era.printAndWait(
        `И сегодня ${maru.name} снова даёт советы младшим.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Прохожая ${maru.uma_sex_title} A`,
        `${maru.name}${
          maru.sex_code !== 1 ? '-семпай' : '-семпай'
        }, тренер ${you.adult_sex_title} здесь!`,
      );
      await era.printAndWait(
        `Окружённая другими ${maru.uma_sex_title} в плотном кольце, ${
          maru.name
        } замечает ${you.name} рядом.`,
      );
      await maru.say_and_wait(`${callname}!`);
      await era.printAndWait(
        `${maru.name} всей пышной грудью наваливается на ${you.name} — на самое плечо.`,
      );
      await maru.say_as_passer_by_and_wait(
        `Прохожая ${maru.uma_sex_title} B`,
        `Уваа, это что?`,
      );
      await maru.say_as_passer_by_and_wait(
        `Прохожая ${maru.uma_sex_title} C`,
        `Марузен ${maru.sex_code !== 1 ? ' -семпай' : '-семпай'} и ${
          maru.sex
        } с тренером сегодня тоже такие милые.`,
      );
      era.printButton(`「Прости за опоздание」`, 1);
      await era.input();
      await maru.say_and_wait(
        `Ага, уже два часа как не видела ${
          callname
        }, ${maru.elder_sibling_sex_title} мне правда так одиноко~`,
      );
      await maru.say_and_wait(
        `Тогда в качестве компенсации давай сегодня днём сходим на свидание♪`,
      );
      era.printButton(
        `「Честно, я тоже, так~ давно не видел(а) ${maru.name} — вот и забеспокоился(ась)」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `${callname}Ну конечно, всё время думал(а) обо мне. Тогда, как обычно —`,
      );
      await era.printAndWait(
        `Вы вдвоём крепко обнимаетесь на Тренировочном поле.`,
      );
      await maru.say_and_wait(`Всё-таки больше всего люблю ${callname} ⭐`);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async girls_dream_end(maru, callname) {
    await era.printAndWait(`Посмотреть подсказку?`);
    era.printButton(`Да`, 1);
    era.printButton(`Нет`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `Чтобы взять GOOD END, нужно победить во всех скачках карьеры.`,
      );
      await era.printAndWait(
        `Выборы в праздничных событиях на концовку не влияют.`,
      );
      await era.printAndWait(
        `По сюжету обрати внимание на выборы второго года; сейв можно начать с 3-й недели января 2-го года, событие: На стыке зимы и весны.`,
      );
      await era.printAndWait(
        `Если условия TE/GE уже выполнены, после рождественского события очисти список команды и снова выбери ${maru.name} — сработает диалог, появятся особые реплики.`,
      );
      await era.printAndWait(
        `Кроме того, на первой неделе третьего года сначала выбери новогодний молебен, а потом — выход в храм: суммарная выгода выше.`,
      );
      await era.printAndWait(`И в конце — удачи скорее взять GE.`);
    } else {
      await maru.say_as_unknown_and_wait(
        `Хочешь всё пройти своими силами? Похоже, в тебе потенциал бога гайдов, ${callname} давай!`,
      );
    }
  },
  be_Self_contempt: (() => {
    const title = 'BAD END · Дерево глушит землю';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(`Кабинет тренера`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}, я пойду, до завтра!`);
      await era.printAndWait(`${maru.name} уходит из кабинета тренера.`);
      await era.printAndWait(
        `Смеркается. Будний день, ничем не отличный от вчерашнего: синий свет на стыке заката и ночи льётся в кабинет тренера.`,
      );
      await era.printAndWait(
        `${you.name} сидишь неподвижно на знакомом сиденье в кабинете тренера.`,
      );
      await era.printAndWait(
        `Не ради дополнительной тренировки и не чтобы составлять план.`,
      );
      await you.say_and_wait(`Может, мне лучше на этом уйти.`);
      await era.printAndWait(
        `Не потому, что у ${maru.name} не хватает способностей. Напротив, она блестяще выполняла каждый план и даже, опираясь на собственный опыт, направляла тебя.`,
      );
      await era.printAndWait(`Настоящая проблема в том, что `);
      era.println();
      await you.say_and_wait(
        `${maru.name}этот самородок высочайшего качества должен обтачивать более искусный мастер.`,
      );
      await you.say_and_wait(`Мне не хватает способностей. Вот и всё.`);
      await you.say_and_wait(
        `Ради ${maru.name} я больше не могу притворяться: нужно найти случай и во всём ей признаться.`,
        true,
      );
      await era.printAndWait(
        `Ты нежно гладишь ту снятую на берегу моря совместную фотографию с ${maru.name}, затем рвёшь её пополам, складываешь обрывки вместе и снова рвёшь пополам.`,
      );
      await you.say_and_wait(
        `Лучший самородок должен шлифовать лучший мастер. Я поступаю правильно.`,
      );
      await era.printAndWait(
        `И с каменным лицом рвёшь до тех пор, пока делить уже некуда.`,
      );
      await era.printAndWait(
        `Осторожно, тщательно — чтобы ни одна крохотная крупица не выскользнула из ладони.`,
      );
      await era.printAndWait(
        `Открываешь окно и, не давая себе времени одуматься, с силой швыряешь обрывки в небо.`,
      );
      await era.printAndWait(
        `Смотришь, как эти клочки, что хотели взлететь в небо, в конце концов бессильно падают на землю, — и твоё сердце уходит вслед за ними.`,
      );
      await you.say_and_wait(
        `Пора уже с ${maru.name} во всём признаться.`,
        true,
      );
      await era.printAndWait(
        `Ты покидаешь кабинет тренера — место, где когда-то лились слёзы и пот.`,
      );
      await era.printAndWait(`И с силой захлопываешь дверь.`);
      era.setToBottom();
      await era.printAndWait(`— стикер, приклеенный к письменному столу`);
      await era.printAndWait(
        `С подопечной ${maru.uma_sex_title} ${maru.name} встреча на крыше.`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `После дебютной скачки с ${maru.name} отпраздновать в забронированном ресторане.`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `Когда закончится Satsuki Sho, у ${maru.name} поучиться вождению и готовке (прим.: ${maru.name} готовит очень вкусно!).`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `Спасибо, что была рядом всё это время. Это я не выдержал(а) давления. Прости.`,
      );
      await era.printAndWait(
        `Вскоре ты в одностороннем порядке подаёшь председателю заявление об уходе.`,
      );
      await era.printAndWait(
        `С тех пор из той земли, лишённой питания, больше не выглядывал ни один новый росток.`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_broken_tears: (() => {
    const title = 'BAD END · Письмо Марузенски';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      maru.say(
        ` ${callname}, когда ты увидишь это письмо, я, наверное, уже буду на рейсе в Париж.`,
      );
      maru.say(`Прости, что уехала, не попрощавшись.`);
      maru.say(
        `Честно говоря, дни с ${callname} после нашей встречи — каждый был счастливым.`,
      );
      maru.say(`Так что я вовсе не виню ${callname}.`);
      maru.say(
        `Просто мне чуть не по силам смотреть на дорогу впереди, и я не знаю, как быть.`,
      );
      maru.say(
        `Я уже попросила у председателя три месяца академического отпуска и за это время собираюсь поездить по Франции, чтобы перевести дух.`,
      );
      maru.say(
        `Может, за это время я и пойму, как быть с ${callname} и с младшими♪`,
      );
      maru.say(
        `…Как ${callname} и думал(а): я всего лишь трусливая умамусумэ, которая удирает, поджав хвост.`,
      );
      maru.say(`…Сколько ни думаю, боюсь, другой дороги просто нет.`);
      maru.say(
        `Хотя бросать здешних младших всё-таки совестно… нет, своими силами они меня точно обгонят!`,
      );
      maru.say(
        `Я от всего сердца верю: они станут ещё смелее и ещё усерднее понесутся к более высокой вершине.`,
      );
      maru.say(
        `А, слишком уж пессимистично выходит. Так не ведёт себя ${
          maru.elder_sibling_sex_title
        }.`,
      );
      maru.say(
        `Когда доберусь до Франции, пришлю фото и видео здешних мест и нравов.`,
      );
      maru.say(
        `И тогда, как раньше, попрошу ${callname} выложить это в Ма-твиттер, ладно?`,
      );
      maru.say(`Младшие тогда тоже очень удивятся!`);
      await maru.print_and_wait(`Вот так и договорились!`);
      era.setToBottom();
      maru.say(`Прости.`);
      await era.printAndWait(
        `Последняя строка письма размокла от слёз, и расползшиеся чернила уже не разобрать.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `Но ${maru.name} уже не вернётся. ${you.name} в душе понимает это лучше всех.`,
      );
      await era.printAndWait(`Ничего не поделаешь.`);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = 'Дождливый день (расставание)';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      //节拍1 行动：丸善斯基提示到站了 反应：接过了玩家手中的行李箱 价值负荷正或负？亲密/孤独(-)
      await era.printAndWait(`Аэропорт`);
      await maru.say_and_wait(`Досюда достаточно.`);
      await era.printAndWait(
        `${maru.name} принимает у ${you.name} крепко сжатый чемодан.`,
      );
      //节拍2 行动：玩家对丸善斯基即将离开表示不舍 反应：丸善斯基安慰训练员 亲密/孤独(-)
      await you.say_and_wait(`Как доберёшься до Парижа, напиши мне.`);
      await maru.say_and_wait(
        `Не надо так переживать⭐ Я просто ненадолго еду попутешествовать в Париж.`,
      );
      //节拍3 行动：丸善斯基摸了摸头 反应：玩家害怕失去 失/得(-)
      await era.printAndWait(
        `${maru.name} улыбаясь, гладит ${you.name} по голове.`,
      );
      await era.printAndWait(
        `Прикосновение нежнее, чем когда-либо, ${you.name} всё равно чувствует страх.`,
      );
      await you.say_and_wait(
        `«В пути осторожнее»… как ни старайся, не выговорить`,
        true,
      );
      //节拍4 行动：丸善斯基鼓励训练员 反应：玩家笑着接受了这份鼓励 失/得(+)
      await maru.say_and_wait(
        `Даже в чужой стране нить между нами не оборвётся.`,
      );
      await maru.say_and_wait(
        `Так что будь смелее, мой самый любимый ${callname}.`,
      );
      await you.say_and_wait(
        `…Да, я чувствую, как это тепло поднимается в груди.`,
      );
      //节拍5 行动：丸善斯基准备离开 反应：玩家目送丸善斯基离开 失/得(-)
      await you.say_and_wait(`Что ж, пора выходить—`);
      await maru.say_and_wait(`—Да, теперь время прощаться.`);
      await era.printAndWait(`Сжатые руки расцепляются.`);
      await era.printAndWait(
        `${you.name} смотришь, как ${maru.name} с чемоданом собирается уйти.`,
      );
      //节拍5 行动：玩家紧紧抱住了丸善斯基 反应：丸善斯基准备挣脱 亲密/孤独(--)
      await you.say_and_wait(`${maru.name}!`);
      await era.printAndWait(`${you.name} действуешь.`);
      await maru.say_and_wait(`!`);
      await era.printAndWait(
        `${you.name} крепко обняла ${
          maru.sex
        }, окружающие пассажиры невольно останавливаются и смотрят на вас.`,
      );
      await maru.say_and_wait(`${you.actual_name}, отпусти меня.`);
      await era.printAndWait(
        `не слышанный прежде ${maru.name} встревоженный голос.`,
      );
      //节拍6 行动：玩家追击 反应：丸善斯基沉默流泪 失/得(-)
      await you.say_and_wait(
        `Так и хорошо, дай мне ещё раз почувствовать твоё тепло.`,
      );
      await you.say_and_wait(`Я всё равно не могу себя убедить.`);
      await you.say_and_wait(
        `Тот ветер, тот нежный ветер, вот-вот исчезнет у меня на глазах.`,
      );
      await maru.say_and_wait(`——${callname}`);
      await era.printAndWait(
        ` изо всех сил сдерживающая печаль ${maru.teen_sex_title}.`,
      );
      //节拍7 行动：丸善斯基反过来紧紧抱住了玩家 反应：玩家感受到了丸善斯基的孤独 失/得(++)
      await era.printAndWait(`А затем——`);
      await you.say_and_wait(`${maru.name}`, true);
      await era.printAndWait(`крепко обняла ${you.name}`);
      await maru.say_and_wait(` Я тоже боюсь, боюсь потерять ${callname}`);
      await maru.say_and_wait(
        ` Боль ли, горе ли — больше не хочу нести это в одиночку.`,
      );
      await maru.say_and_wait(
        `вместе с тобой, вместе чувствовать касание ветра, вместе встречать рассвет`,
      );
      await maru.say_and_wait(
        `Нее, ${callname}, давай вот так вместе уйдём, прочь из этого горестного места.`,
      );
      //节拍7 行动：玩家坚决拒绝 反应:更大的悲伤 亲密/孤独(---)
      await you.say_and_wait(`Прости`);
      await era.printAndWait(`${you.name} сердце кровью обливается`);
      await you.say_and_wait(
        `За грех, что я совершил(а), я искуплюсь прямо сейчас.`,
      );
      await era.printAndWait(
        `смотришь прямо на ${maru.name}, чьё лицо искажено горем, и продолжаешь.`,
      );
      await you.say_and_wait(
        `Если вот так сбежать, то как тренер я уже мертв(а).`,
      );
      await you.say_and_wait(
        `Потеряешь статус тренера — и как тренер воспитать ${maru.uma_sex_title} — этот идеал тоже перестанет существовать.`,
      );
      await you.say_and_wait(`Потеряв идеал, я лишь паду ещё глубже в ад.`);
      await you.say_and_wait(`Поэтому уходи, уходи прочь от меня.`);
      //节拍8 行动：两人接吻 反应:发誓一定会再次见面 亲密/孤独(++++) 失/得(++)
      await era.printAndWait(
        `${you.name} в ответ гладишь ${maru.name} по мягким волосам, чувствуя ${
          maru.sex
        } её сердцебиение.`,
      );
      await you.say_and_wait(`Поэтому, ${maru.name} ————`);
      await era.printAndWait(
        `язык с лёгким привкусом железа силой проникает к ${you.name} в рот.`,
      );
      await era.printAndWait(
        `После короткого касания снова, не в силах оторваться, разделяетесь.`,
      );
      await maru.say_and_wait(`Я так просто не сдамся, так что, ${callname}`);
      await era.printAndWait([
        maru.get_colored_name(),
        ' / ',
        you.get_colored_name(),
        '「',
        {
          content: ' Где бы мы ни были, ',
          color: maru.color,
        },
        'наши сердца всегда вместе.»',
      ]);
      await maru.say_and_wait(`Тогда — ещё раз.`);
      await era.printAndWait(`Без слов наслаждаешься мимолётным счастьем.`);
      await era.printAndWait(`——пока вас двоих не разлучат`);
    };
    f.title = title;
    return f;
  })(),
};
