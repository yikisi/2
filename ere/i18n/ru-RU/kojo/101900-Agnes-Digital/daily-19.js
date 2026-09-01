/**
 * @file 爱丽数码 - 日常
 * @author 片手虾好评发售中!
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  good_morning(digital, callname) {
    if (Math.random() < 0.5) {
      digital.say([
        'Хай! ',
        digital.name,
        ' на сцену! Чтобы отыскать самую священную во вселенной ',
        digital.uma_sex_title,
        ' силу!',
      ]);
    } else {
      digital.say([
        'Уфуфу, ',
        callname,
        '! Сегодня тоже пойдём копить силу стана!',
      ]);
    }
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   * @param {PrintedSpan} call_13 爱丽数码对目白麦昆的称呼
   */
  select(digital, callname, call_13) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say([
          'Да! Что бы ни случилось, станить на полную! ',
          callname,
          '!',
        ]),
      () => digital.say('Уфуфу, так священно, я уже не выдерживаю...'),
      () => digital.say('Трава! Грязь! Всё это моя Скаковая трасса!'),
    );
    if (era.get('relation:19:0') > 375) {
      buffer.push(() =>
        digital.say([
          callname,
          '! Как же повезло станить с тобой ',
          digital.uma_sex_title,
          ' -тян, правда так здорово!',
        ]),
      );
    }
    switch (era.get('mark:19:欢愉')) {
      case 1:
        buffer.push(() =>
          digital.say(
            'Ахахаха... э? Спрашиваешь, почему у меня ноги трясутся? Всё нормально, всё нормально! Диджитал-тан в полном порядке, честно!',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            'Гхэ-хэ-хэ-хэ, всё ещё спрашиваешь почему, ',
            callname,
            ' ты же должна знать лучше всех... хлюп...',
          ]),
        );
    }
    switch (era.get('mark:19:同心')) {
      case 1:
        buffer.push(() =>
          digital.say([
            'Едины телом и душой... ',
            call_13,
            ' то прекрасное будущее, что описывалось... кажется, я потихоньку начинаю понимать...',
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('Замок Медзиро, пойдём? Пойдём же!'));
    }
    switch (era.get('mark:19:苦痛')) {
      case 1:
        buffer.push(() =>
          digital.say([
            'Э, ээ, это же ',
            callname,
            ' а... сегодня что-то случилось?',
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say(
            'Уууу... ик! Н-нет-нет-нет, всё в порядке, всё в порядке!',
          ),
        );
    }
    switch (era.get('mark:19:羞耻')) {
      case 1:
        buffer.push(() =>
          digital.say(
            'Ну это... даже мне, Диджитал, при таком становится немного стыдно.',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('Ияя, такое ощущение, что это уже слишком, нет?!'),
        );
    }
    switch (era.get('mark:19:反抗')) {
      case 1:
        buffer.push(() =>
          digital.say(['Нн? ', callname, ' а, э, ты чего-то хотела?']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            'Ээ, ',
            callname,
            ' ты... что это ты в последнее время какая-то не очень товарищеская стала?',
          ]),
        );
    }
    switch (era.get('mark:19:淫纹')) {
      case 1:
        buffer.push(() =>
          digital.say(
            'Глядишь — на себе появилось что-то родное и вместе с тем щекотливое... можно в материал... да?',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('Назвать это ярко-крутым... и правда эволюционирует?!'),
        );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async office_study(digital) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say_and_wait(
          `Э? Спрашиваешь, почему я так шарю за всё, что связано с ${digital.uma_sex_title} -тян? Как фанатка, иначе и быть не может!`,
        ),
      () =>
        digital.say_and_wait(
          'На самом деле, чтобы попасть в академию Трейсен, я тогда во многом очень старалась, так что... с учёбой у меня и правда больших проблем нет. Прозвучало немного хвастливо.',
        ),
      () =>
        digital.say_and_wait(
          `Я вот думаю, некоторых ${digital.uma_sex_title} -тян же из-за плохой учёбы тащат на допзанятия? Как же мне помочь ${
            digital.couple_title
          } а...`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async talk(digital) {
    if (era.get('base:19:体力') < era.get('maxbase:19:体力') / 3) {
      if (Math.random() < 0.5) {
        await digital.say_and_wait(`Ха... выгорела, сил нет... застанила...`);
      } else {
        await digital.say_and_wait(
          `В таком состоянии я недостойна своей ${digital.uma_sex_title} -тян...`,
        );
      }
    } else {
      const buffer = [];

      switch (era.get('cflag:19:干劲')) {
        case -2:
          buffer.push(
            () =>
              digital.say_and_wait(
                'Уооо, моэ-силы не хватает, мне нужно срочно восполнить энергию...',
              ),
            () =>
              digital.say_and_wait(
                `В таком виде меня точно не должны увидеть те, кто меня станит...`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              digital.say_and_wait(
                'А... что-то совсем не идёт, моэ-силы не хватает, что ли',
              ),
            () =>
              digital.say_and_wait(
                `Айя, я тут как раз думала про ${digital.uma_sex_title}...`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => digital.say_and_wait(`Хсс... фух... ещё, ещё моэ-моэ силы!`),
            () =>
              digital.say_and_wait(
                `Ещё чуть-чуть не хватает, всё мало, мне нужно впитать ещё больше ${digital.uma_sex_title} моэ-моэ силы!`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              digital.say_and_wait(
                `Самочувствие огонь! Пойдём вместе черпать ${digital.uma_sex_title} моэ-моэ силу и копить добродетель!`,
              ),
            () =>
              digital.say_and_wait(
                `Любовь, именно любовь к ${digital.uma_sex_title} -тян даёт мне такую силу!`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              digital.say_and_wait(
                `Ваааа! И тут, и там повсюду ${digital.uma_sex_title} -тян! Такое чувство, что сейчас я всё смогу!`,
              ),
            () => digital.say_and_wait(`Хая! Моэ-сила уже пробила небеса!`),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async office_gift(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait([
        'Выбрать такой подарок — как и ожидалось от ',
        callname,
        '!',
      ]);
    } else {
      const items = [
        'Автограф Добер-сенсей',
        'Фотоальбом Каррен-тян',
        'Билет на рукопожатие Кондор-ко',
        'Плюш Майя-тян',
        'Чайная чашка как у семьи Медзиро',
        'Кружка с образом Такион и Кафе ',
        digital.uma_sex_title + ' модель кроссовок',
        digital.uma_sex_title + 'Лимитированный коллабный мерч',
        digital.uma_sex_title + 'Подписной альбом с ушками и чулками',
      ];
      const gift = get_random_entry(items);
      await digital.say_and_wait([
        'Ваа, это же ',
        gift,
        '! Я как следует впитаю из этого ',
        digital.uma_sex_title,
        ' моэ-моэ силу!',
      ]);
    }
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async office_cook(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `Готовить, вкладывая любовь к своей ${digital.uma_sex_title}... вот уж не думала, что у тренера тоже есть такой принцип. Я тоже так научусь!`,
        ),
      () =>
        digital.say_and_wait(
          `Ну я же постоянно с мамой и папой на пикники хожу, так что не смотри что я такая — готовить я немного умею, честно`,
        ),
      () =>
        digital.say_and_wait(
          `${digital.uma_sex_title}-тян, их незрелые чувства не решаются сказать напрямую, поэтому вкладывают в бэнто и дарят! Это же так священно!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async office_rest(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `Фух... слушаю милую ${digital.uma_sex_title} -тян целебный ASMR, кажется, сейчас всего меня расплавит...`,
        ),
      () =>
        digital.say_and_wait(
          `вот так бесцельно болтать с тобой про ${digital.uma_sex_title} — и правда здорово.`,
        ),
    ];
    if (era.get(`relation:${this.id}:0`) > 375) {
      buffer.push(() =>
        digital.say_and_wait(
          `хочешь на колени? нет-нет-нет, мои тощие ноги под голову — всё равно будет неудобно... да и стыдно ещё...`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async office_game(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait(
        `не сыграть ли вот в это "${digital.uma_sex_title} всезвёздный бой"? персонажа возьму рандомом, я же DD!`,
      );
    } else {
      await digital.say_and_wait([
        'эхе! ',
        callname,
        ', как ни крути, в эту игру я всё-таки немного уверена.',
      ]);
    }
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async s_a_tree_hollow(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `тебя, кому вечно ${digital.uma_sex_title} изливали жестокость скачек, тяготы тренировок, любовные дрязги! почему я ревную к какому-то дуплу?!`,
        ),
      () =>
        digital.say_and_wait(
          `н-н, скажи, почему на трассе есть и победители, и проигравшие... ${digital.uma_sex_title}, если бы все были победительницами...`,
        ),
      () =>
        digital.say_and_wait(
          `моей решимости ещё мало, не только как сопернице, но и как ${digital.uma_sex_title}...`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async s_a_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `...что-то много ${digital.uma_sex_title} на нас смотрят, так и хочется куда-нибудь спрятаться...`,
        ),
      () =>
        digital.say_and_wait(
          `этот большой бант? будто с детства его ношу... э? говоришь, слишком заметно? ия, и правда проблема.`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          ' а, тебе не кажется, что я слишком хлопотная... вечно таскаю тебя по саппорт-ивентам туда-сюда... э? нет?',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async s_r_lunch(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'э? ',
          callname,
          ' так ты скрытый мастер? такая точность внешнего вида, даже я не могу не ахнуть!',
        ]),
      () =>
        digital.say_and_wait(
          `н-н, такая милая ${digital.uma_sex_title}, как рот открыть...`,
        ),
      () =>
        digital.say_and_wait([
          'гляди! ',
          callname,
          ', этот дизайн — плод моей души! не подать ли на патент, ухе!',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   * @param {PrintedSpan} call_20 爱丽数码对青云天空的称呼
   */
  async o_r_fishing(digital, callname, call_20) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'увя, это... это ',
          call_20,
          ', мне, может, лучше туда не ходить...',
        ]),
      () =>
        digital.say_and_wait([
          'о-о-о, клюнуло, клюнуло, если бы пикник — можно было бы зажарить, ',
          callname,
          '!',
        ]),
      () =>
        digital.say_and_wait(
          `не дуйся! победы и поражения — дело обычное, герой, попробуй снова... воздух, как шанс не выбить из гачи!`,
        ),
    ];
    await get_random_entry(buffer);
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   * @param {PrintedSpan} call_8 爱丽数码对伏特加的称呼
   * @param {PrintedSpan} call_9 爱丽数码对大和赤骥的称呼
   * @param {PrintedSpan} call_46 爱丽数码对醒目飞鹰的称呼
   * @param {PrintedSpan} call_58 爱丽数码对名将怒涛的称呼
   */
  async o_r_walking(digital, callname, call_8, call_9, call_46, call_58) {
    const buffer = [
      () =>
        digital.say_and_wait([
          call_46,
          ', это ',
          call_46,
          ' а! я обязана туда пройти!',
        ]),
      () =>
        digital.say_and_wait([
          'нашла ',
          call_9,
          ' и ',
          call_8,
          '!',
          digital.couple_title,
          ' там чем занимаются~!',
        ]),
      () =>
        digital.say_and_wait([
          'ва! ',
          call_58,
          ' упала, надо помочь встать... встала! уо, какая старательная...',
        ]),
      async () => {
        await era.printAndWait([
          'прогулка у реки для ',
          digital.get_colored_name(),
          ' — настоящее паломничество,',
        ]);
        await era.printAndWait(
          `потому что в каждом углу можно встретить ${digital.uma_sex_title},`,
        );
        await era.printAndWait(
          `маленькую ${digital.uma_sex_title} айдол, что репетирует пение, и малышку-трудягу, что осваивает грунт.`,
        );
        await era.printAndWait(
          `к счастью, в этот раз ${digital.sex} не потеряла душу от священности.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} call_46 爱丽数码对醒目飞鹰的称呼
   */
  async o_s_arcade(digital, call_46) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'уо-о-о, вышла новая песня ',
          call_46,
          '! хорошо, что перчатки взяла!',
        ]),
      () =>
        digital.say_and_wait(
          `поймала-поймала! вот он, лимитированный плюш в скаковом наряде!`,
        ),
      () =>
        digital.say_and_wait(
          `набрала очков на приз! можно обменять на ту лимитированную фигурку!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} call_32 爱丽数码对爱丽速子的称呼
   */
  async o_s_drawing(digital, call_32) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'вытянула морковку! отнесу ',
          call_32,
          ', пусть ',
          digital.sex,
          ' хоть чуть наладит своё питание, так тело себе сгубит! нельзя-нельзя!',
        ]),
      () => digital.say_and_wait(`ку-ку-ку, фу-фу-фу, вытянула, вот оно!`),
      () =>
        digital.say_and_wait(
          `салфетки... как и думала, одиночная крутка почти не даёт дроп.`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async o_s_ktv(digital, callname) {
    const buffer = [
      () => digital.say_and_wait(`сегодня богиня победы целует только меня...`),
      () =>
        digital.say_and_wait(
          `сцена победителей — не только награда победившей ${digital.uma_sex_title}, но и награда нам, фанатам!`,
        ),
      () =>
        digital.say_and_wait([
          'мм-хай э-хай! о—хай—! ',
          callname,
          '! ты лайтстиком медленно машешь!',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital 爱丽数码 */
  async o_s_movie(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `слишком священно! режиссёр в теме! у ${digital.uma_sex_title} священные черты показаны до капли!`,
        ),
      () =>
        digital.say_and_wait(
          `уо-о-о-о, как трогает, эта досада, эта борьба — точь-в-точь как у ${digital.uma_sex_title} в реальности!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  o_c_pray: (() => {
    const title = 'копить добродетель... это собирать удачу?';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_98 爱丽数码对小林历奇的称呼
     */
    const f = async (digital, you, callname, call_98) => {
      await era.printAndWait([
        'после двух хлопков перед храмом ',
        you.get_colored_name(),
        ' и ',
        digital.get_colored_name(),
        ' складывают ладони в молитве',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' естественно возносит молитву о здоровье своей ',
        digital.uma_sex_title,
        ', но ',
        digital.get_colored_name(),
        ' о чём же помолится?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' бросает взгляд на ',
        digital.get_colored_name(),
        ', видит, ',
        digital.sex,
        ' ещё не открыла глаза, ручки трёт, ушки торчком, бормочет про себя — разве у обычных людей бывает такая набожность?',
      ]);
      await era.printAndWait([
        'немного спустя ',
        digital.sex,
        ' оборачивается и серьёзно говорит:',
      ]);
      await digital.say_and_wait([
        'Чтобы боги хранили всех ',
        digital.uma_sex_title,
        ', я должна молиться изо всех сил, с самой полной искренностью',
      ]);
      await digital.say_and_wait(
        'Пусть это и на грани яви и вымысла, зато я снова трезво смотрю на себя — и заодно карму подкопить можно!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' в изумлении всё же считает, что ',
        digital.sex,
        ' говорит очень по делу, поэтому ',
        you.get_colored_name(),
        ' тоже отбрасывает праздные мысли и хочет помолиться ещё раз.',
      ]);
      if (Math.random() < 0.5) {
        await era.printAndWait([
          'Потихоньку ',
          you.get_colored_name(),
          ' чувствует, как в мыслях протекают три чистых родника, ',
          you.get_colored_name(),
          ' в изумлении открывает глаза: это ветерок прошёл по листьям, по святилищу — и у ',
          you.get_colored_name(),
          ' на душе становится тихо.',
        ]);
        await digital.say_and_wait([
          'Потому что это то самое особенно чудотворное святилище, что ',
          call_98,
          ' порекомендовала, так что я только что всё не решалась даже пикнуть~',
        ]);
        await era.printAndWait('Это и вправду существует?');
        await era.printAndWait([
          you.get_colored_name(),
          ' замечает, что рядом ',
          digital.get_colored_name(),
          ' тоже погружена в это состояние.',
        ]);
        await digital.say_and_wait('Это благословение Трёх богинь!');
        await era.printAndWait([
          'Хотя ',
          you.get_colored_name(),
          ' очень хочет съязвить: чего это в святилище молишься, а благословляют Три богини — но раз уж эффект хотя бы на душе есть, ладно.',
        ]);
      } else {
        await era.printAndWait([
          'Собирает дух в точку между глаз, думает, как молиться искренне, — но сам способ уже с изъяном: похоже, ',
          you.get_colored_name(),
          ' пока ещё не умеет отсекать праздные мысли.',
        ]);
        await digital.say_and_wait(
          'Ничего, я-то тренировалась не один день, пока до такого дошла, товарищ, тебе ещё практиковаться и практиковаться!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' невольно гадает, какой от этого навыка практический толк: неужели на скачках так удобнее собирать внимание?',
        ]);
        await era.printAndWait([
          'Впрочем, ',
          you.get_colored_name(),
          ' заодно понимает: иногда и вправду стоит потренировать спокойствие ума — похоже, получится только в следующий раз.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} digital 爱丽数码 */
  async o_s_restaurant(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `Люблю морковку — еду, которую так обожают ${digital.uma_sex_title} -тян, то ли потому что люблю ${digital.uma_sex_title} -тян, то ли потому что я сама ${digital.uma_sex_title}...`,
        ),
      () =>
        digital.say_and_wait(
          `Пафе♪ пафе♪ дынное пафе♪ мёд♪ мёд♪ супергустой мёд♪ и ещё клубничный дайфуку♪ Подражать своим оши — будто удачу несёт!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
   */
  async o_s_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'Аха-ха-ха, ',
          callname,
          ', как только гуляем вместе, я наоборот не могу выбрать, куда лучше...',
        ]),
      () =>
        digital.say_and_wait(
          `Э? Мне выбирать место? Вечно кажется, что я всё равно выберу что-то про ${digital.uma_sex_title}...`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          '! Давай ещё разок туда на паломничество по святыням!',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital 爱丽数码
   * @param {PrintedSpan} call_25 爱丽数码对曼城茶座的称呼
   * @param {PrintedSpan} call_33 爱丽数码对爱慕织姬的称呼
   */
  async o_s_shopping(digital, call_25, call_33) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'Унуну! Эта кофейная кружка как у ',
          call_25,
          ', та чашка чая Медзиро — как мне выбирать?! Конечно, забираю всё!',
        ]),
      () =>
        digital.say_and_wait([
          call_33,
          ' рекламирует эту сушилку? Это... как-то... нет, надо брать!',
        ]),
      () =>
        digital.say_and_wait(
          `Э? Спрашиваешь, зачем мерч в трёх экземплярах? Ну конечно: один юзать, один коллекционировать, один для проповеди!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  big_fish: (() => {
    const title = 'Выудили крупную рыбу, но выглядит она не слишком дружелюбно';
    /**
     * @param {CharaTalk} digital 爱丽数码
     * @param {CharaTalk} spe 特别周
     * @param {CharaTalk} sky 青云天空
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 爱丽数码对玩家的称呼
     * @param {PrintedSpan} call_20 爱丽数码对青云天空的称呼
     * @param {PrintedSpan} callname_20 青云天空对玩家的称呼
     * @param {PrintedSpan} s_call_s 青云天空对特别周的称呼
     * @param {PrintedSpan} s_call_d 青云天空对爱丽数码的称呼
     */
    const f = async (
      digital,
      spe,
      sky,
      you,
      callname,
      call_20,
      callname_20,
      s_call_s,
      s_call_d,
    ) => {
      const ret = [];
      await era.printAndWait(
        `На речку порыбачить — выбор немалого числа ${digital.uma_sex_title} на досуге,`,
      );
      await era.printAndWait([
        'но у ',
        you.get_colored_name(),
        ' подопечная ',
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        ' немного не такая: чем самой ловить, ',
        digital.sex,
        ' больше любит смотреть, как ловят другие,',
      ]);
      await era.printAndWait(
        `Нет... скорее, больше любит смотреть, как ${digital.uma_sex_title}.`,
      );
      await era.printAndWait(
        `Так что чтобы ${digital.sex} села на низкий стульчик, взяла удочку и у реки тихо ждала, пока клюнет, — уже редкость.`,
      );
      await digital.say_and_wait(
        `Вот оно что... так вот какова рыбалка: вроде досуг, а почему так выматывает...`,
      );
      await digital.say_and_wait(
        `А другие ${digital.uma_sex_title} во время рыбалки — о чём они вообще думают...`,
      );
      await you.say_and_wait(
        `${digital.couple_title}Скорее просто наслаждаются самой рыбалкой, нет? Глянь вокруг?`,
      );
      await digital.say_and_wait('Э?');
      await era.printAndWait([
        digital.get_colored_name(),
        ' оглядывается — и на том берегу как раз тоже ',
        digital.uma_sex_title,
        ' рыбачит.',
      ]);
      await era.printAndWait(`Скорее не рыбалка, а сон.`);
      await digital.say_and_wait(
        `Точно, я чувствую: ${digital.sex} сейчас в состоянии предельного расслабления,`,
      );
      await digital.say_and_wait(
        `Уваа, эта удящая ${digital.uma_sex_title} лежит в бесконечной тишине: даже если рыба клюнет, ${
          digital.sex
        } ни на йоту не шелохнётся...`,
      );
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([
          'Ой-ой, не думала, что ',
          callname_20,
          ' сегодня в настроении пойти на рыбалку с ',
          s_call_d,
          ', йо-хо-хо, и это не со мной... бу-бу',
        ]);
        await era.printAndWait([
          'Сзади доносится знакомый голос — это же ',
          sky.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' поднимает маленькие ладошки, трёт глаза и делает жалобный вид.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' не может не признать: у ',
          sky.get_colored_name(),
          ' такая игра особенно сильна; если бы ',
          you.get_colored_name(),
          ' уже не знал(а), насколько ',
          digital.sex,
          ' хитра и многоходова, то ',
          you.get_colored_name(),
          ' и вправду попался(ась) бы.',
        ]);
        await digital.say_and_wait('Ва-ва-ва! Я не нарочно, я сейчас же уйду!');
        await era.printAndWait([
          digital.get_colored_name(),
          ' в панике машет руками, пытаясь встать.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' невозмутимо подходит к ',
          sky.get_colored_name(),
          ' сбоку и украдкой сильно щипает ',
          sky.get_colored_name(),
          ' за спину — на ощупь довольно мягко.',
        ]);
        await sky.say_and_wait('Эй! Я просто шутила, просто шутка~');
      } else {
        await sky.say_and_wait([
          'Оя-оя, это же ',
          s_call_d,
          ' а, и не с берега смотришь, как другие ',
          digital.uma_sex_title,
          ' ловят рыбу?',
        ]);
        await sky.say_and_wait([
          'И ещё… ',
          s_call_d,
          ' тренер- ',
          you.adult_sex_title,
          ', знаменитый тип~',
        ]);
        await era.printAndWait([
          'Сзади донёсся ленивый голос, и ',
          you.get_colored_name(),
          ' его слегка узнаёт.',
        ]);
        await digital.say_and_wait([call_20, '?!']);
        await era.printAndWait([
          'От испуга ',
          digital.get_colored_name(),
          ' роняет удочку из рук, брызги воды обдают с ног до головы.',
        ]);
        await sky.say_and_wait(
          'О? Даже удочку уронила — Sky ведь рассердится!',
        );
        await digital.say_and_wait([
          'Не-не-не, это я виновата, я виновата! Не стоило идти сюда и с ',
          digital.uma_sex_title,
          ' -тян вместе удить…',
        ]);
      }
      await sky.say_and_wait([
        'Тогда, ',
        s_call_d,
        ', не научить ли тебя лично, э-хе!',
      ]);
      await digital.say_and_wait('Ии!');
      await era.printAndWait([
        'Не прошло и пары секунд, как ',
        sky.get_colored_name(),
        ' мигом хватает пытающуюся сбежать ',
        digital.get_colored_name(),
        ',',
        digital.get_colored_name(),
        ' будто под окаменением, тело замерло.',
      ]);
      await sky.say_and_wait('Гхэ-хэ!');
      await era.printAndWait([
        'Уголки губ ползут вверх, и ',
        sky.get_colored_name(),
        ' своими и без того крохотными руками берёт ещё более миниатюрную ',
        digital.get_colored_name(),
        ' за левую руку.',
      ]);
      await digital.say_and_wait('Аба-аба…');
      await sky.say_and_wait('Ну же, ну же, садись на табуретку~');
      await era.printAndWait([
        ' рывком ',
        digital.get_colored_name(),
        ' стащила к табуретке и положила руки на плечи — ',
        digital.sex,
        ' вздрагивает…',
      ]);
      await era.printAndWait([
        'И тогда ',
        digital.get_colored_name(),
        ' будто под заклинанием размягчения, как плед, оседает на табуретке.',
      ]);
      await sky.say_and_wait('На, держи удочку, поплавок подвинь вон туда…');
      await digital.say_and_wait('Аба-аба…');
      await era.printAndWait([
        'Кажется, душа ',
        digital.get_colored_name(),
        ' давно стала пеплом и улетела с ветром.',
      ]);
      era.drawLine({ content: 'Спустя какое-то время' });
      await digital.say_and_wait('……!');
      await digital.say_and_wait('Уэ-э… всё, я больше не могу…');
      await era.printAndWait([
        'Обессиленно распластавшаяся на земле ',
        digital.get_colored_name(),
        ' — видно, ',
        digital.sex,
        ' сегодня уже точно не вытянет.',
      ]);
      await sky.say_and_wait('А-ха, какая занятная личность');
      await era.printAndWait([
        'В отличие от ',
        digital.get_colored_name(),
        ', ',
        sky.get_colored_name(),
        ' пышет энергией — это что, новый вид высасывания семени?',
      ]);
      era.println();
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([callname_20, ' йо!']);
        await era.printAndWait([
          sky.get_colored_name(),
          ' поворачивается к ',
          you.get_colored_name(),
          ' — только что хохотала, и вмиг лицо стихает, только смотрит на ',
          you.get_colored_name(),
          '.',
        ]);
        await sky.say_and_wait([
          'Ну как? И ты, и ',
          digital.sex,
          ' — будто совсем меня бросаете~',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' ',
          digital.sex,
          'Просто хочешь выведать, да?',
        ]);
        await sky.say_and_wait([
          'Оя-оя, ',
          callname_20,
          ' тоже умеет ревновать? Ревновать бы мне.',
        ]);
        era.printButton('Компромисс (Сэйун Скай привязанность +40)', 1);
        era.printButton('К делу (Агнес Диджитал привязанность +40)', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait(
            'Ладно-ладно, раз так — в следующий раз я пойду с тобой на рыбалку.',
          );
          await era.printAndWait('Пока что отмахнулся — потом разберёмся.');
          await sky.say_and_wait(
            'Э-хе, тогда ещё и снаряжение мне обнови~ зарплата тренера небось немаленькая?',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' кладёт руку на макушку, высовывает нежно-розовый язычок, и ',
            you.get_colored_name(),
            ' невольно вспоминает один мем.',
          ]);
          await era.printAndWait(
            'Размял поясницу, про себя прикинул баланс каратов в телефоне: обновить снаряжение вроде можно… да?',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' без церемоний берёт табуретку и садится рядом с ',
            you.get_colored_name(),
            ' и прислоняется к плечу ',
            you.get_colored_name(),
            '.',
          ]);
          await era.printAndWait(
            'Краем глаза: бирюзовые пряди чуть влажны от пота, на гладкой шее ещё капельки, как роса.',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' берёт телефон и листает, товары скользят с пальцев ',
            sky.get_colored_name(),
            ', и, завидев цифры, ',
            you.get_colored_name(),
            ' внезапно чует: дело плохо.',
          ]);
          await you.say_and_wait('Нет, стой, стой, подожди.');
          await sky.say_and_wait('Э? Так это же твои слова~');
          await era.printAndWait(
            'Смотришь на цены: это уже не просто премиум, почти флагманские ценники.',
          );
          await era.printAndWait(
            'Зарплата тренера не маленькая, но такое просто так не купишь.',
          );
          await sky.say_and_wait(
            'Ладно-ладно, шутку отпустили — болтовня на этом всё!',
          );
          await era.printAndWait([
            'Убирает телефон, ',
            sky.get_colored_name(),
            ' похоже, переходит к делу.',
          ]);
          await sky.say_and_wait([
            'Для ',
            s_call_d,
            ' найдём причину бежать! О-о-о!',
          ]);
          await era.printAndWait([
            'Звучало довольно серьёзно, но в устах ',
            sky.get_colored_name(),
            ' это и правда крик совсем без напора……',
          ]);
          await era.printAndWait([
            'Бросаешь взгляд на ',
            digital.get_colored_name(),
            ',',
            digital.sex,
            '. Выглядит, будто ещё не пришла в себя.',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ' шуткой доносит, что сейчас у ',
            you.get_colored_name(),
            ' полно срочных дел…… удочка, возможно, тоже.',
          ]);
          await era.printAndWait([
            'В следующий раз ',
            digital.sex,
            ' получит подарок; а эту удочку лучше не дарить……',
          ]);
        } else {
          await you.say_and_wait('К делу. Я тебя понимаю');
          await era.printAndWait([
            'В конце концов, ',
            sky.get_colored_name(),
            ' всегда держит план, где ',
            digital.sex,
            ' в центре.',
          ]);
          await era.printAndWait([
            'Разворот, ',
            sky.get_colored_name(),
            ' лицом к закату, спиной к тебе.',
          ]);
          await sky.say_and_wait(['Помнишь ', s_call_s, ', да?']);
          await you.say_and_wait(
            'Ну и формулировка. Это ещё как — помнишь или нет?',
          );
          await era.printAndWait(
            'Та самая история, да? Забыла, что делать, какая цель, как к ней идти.',
          );
          await sky.say_and_wait([
            s_call_s,
            ' нашла место, где ',
            digital.sex,
            ' дома, в тепле.',
          ]);
          await era.printAndWait([
            'История гремела, отличный учебный материал; к счастью, ',
            spe.get_colored_name(),
            ' сама не в обиде.',
          ]);
          await era.printAndWait(
            'Само восхищение не станет вечной целью пути вперёд.',
          );
          await era.printAndWait([
            digital.get_colored_name(),
            ' ',
            digital.sex,
            'Скоро станет ясно: ',
            digital.sex,
            ' будет сильнее прочих, ',
            digital.sex,
            ' разобьёт мечты тех, кем раньше восхищалась.',
          ]);
          await you.say_and_wait([
            'Я сделаю так, что ',
            digital.sex,
            ' найдёт своё. Лишь ',
            digital.sex,
            ' обретёт свой пантеон.',
          ]);
          await sky.say_and_wait('Всё-таки это мой тренер!');
          await you.say_and_wait('Угу.');
        }
      } else {
        await sky.say_and_wait([s_call_d, ' — тренер—']);
        await era.printAndWait([
          sky.get_colored_name(),
          ' поворачивает голову к ',
          you.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          'Коварна и хитра — так мир…… по крайней мере ',
          digital.sex,
          ' слышит от одноклассниц, что ',
          digital.sex,
          ' именно такая.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' хотя и не слишком близко знает ',
          sky.get_colored_name(),
          ', но ',
          digital.sex,
          ' уже на слуху…… ради гонки любые средства…… да?',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ', должно быть, с ',
          digital.sex,
          ' в гонках не конфликтует, так чего ',
          digital.sex,
          ' хочет здесь?',
        ]);
        era.printButton('Сначала поговорить (симпатия +40)', 1);
        era.printButton('Поскорее увести Диджитал (любовь +5)', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait('Сэйун Скай…… я тебя знаю.');
          await sky.say_and_wait('Мя-ха-ха, похоже, слава у меня ещё та~');
          await era.printAndWait([
            'Закидывает руки за голову, ',
            sky.get_colored_name(),
            ' похоже, ещё и гордится своей славой.',
          ]);
          await you.say_and_wait(
            'Сядем, поговорим. Думаю, насчёт Диджитал у тебя есть мысли.',
          );
          await sky.say_and_wait('Ой-ой, я вам не HOMO, я скорее тип BG~');
          await era.printAndWait('Сводит тему в сторону. Обычный приём.');
          await you.say_and_wait('……');
          await sky.say_and_wait(
            'Правда хочешь услышать всерьёз? Sky, может, и удивит тебя чистотой мыслей?',
          );
          await era.printAndWait([
            'Кидаешь взгляд на ',
            digital.get_colored_name(),
            ',',
            digital.sex,
            ': всё ещё лежит на берегу, блаженно отключившись от святости.',
          ]);
          await you.say_and_wait([
            'Диджитал ',
            digital.sex,
            ' всё ещё слишком чиста и наивна, ещё не знает атмосферы скачек, где бьются за каждую пядь.',
          ]);
          await sky.say_and_wait([
            'Верно, как ',
            s_call_s,
            ' одно время, так и ',
            s_call_d,
            ' ',
            digital.sex,
            ' не хватает причины выйти на поле боя.',
          ]);
          await era.printAndWait([
            'Выйти на поле боя…… причина для скачек, ',
            digital.get_colored_name(),
            ' раньше всё твердила, что это ',
            digital.uma_sex_title,
            ',',
            digital.sex,
            '……хотела лишь вблизи наблюдать ',
            digital.uma_sex_title,
            ' в беге, по крайней мере пока что так.',
          ]);
          await you.say_and_wait([
            digital.sex,
            'Обязательно найдём. Я и ',
            digital.sex,
            ' вместе отыщем ту причину.',
          ]);
          await era.printAndWait([
            'До того как ',
            you.get_colored_name(),
            ' произнесла эти слова, ',
            sky.get_colored_name(),
            ' всё это время смотрела глубоким взглядом на ',
            you.get_colored_name(),
            ', а услышав их, ',
            digital.sex,
            ' рассмеялась.',
          ]);
          await sky.say_and_wait('Ахах, какой занятный ответ!');
          await era.printAndWait([
            'Возможно, ',
            you.get_colored_name(),
            ' попала в точку, и ',
            digital.sex,
            ' осталась довольна, а возможно, ',
            digital.sex,
            ' сочла, что дальше говорить незачем.',
          ]);
          await sky.say_and_wait(
            'Ну, я вам не мешаю? Мне, Скай, ещё рыбку ловить надо.',
          );
          await era.printAndWait([
            'Солнце, сыпавшее слишком много жара, уже из белого стало красным и оставило ',
            you.get_colored_name(),
            ' и ',
            digital.get_colored_name(),
            ' на илистом берегу реки.',
          ]);
          await era.printAndWait('Пора вести Агнес Диджитал обратно...');
          await you.say_and_wait('Только как нести...', true);
        } else {
          await you.say_and_wait(
            'Сэйун Скай, я бы ещё поговорила с тобой, но...',
          );
          await you.say_and_wait([
            'Похоже, Агнес Диджитал так сразу не проснётся, да и поздно уже, ',
            digital.sex,
            ' пойдёт со мной обратно.',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ' смотрела на ',
            you.get_colored_name(),
            ', а потом зевнула.',
          ]);
          await sky.say_and_wait(
            'И то верно. Жаль только, что рыбку так и не поймали.',
          );
          await era.printAndWait([
            'На слова прощания ',
            digital.sex,
            ' лишь молчала, но едва пришла пора взвалить на спину ',
            digital.get_colored_name(),
            ', ',
            you.get_colored_name(),
            ' почувствовала, как у уха повеяло дыханием...',
          ]);
          await sky.say_and_wait([
            'Найди причину, чтобы ',
            digital.sex,
            ' выходила на скачки...',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' закрыла глаза и смогла лишь сказать спасибо.',
          ]);
          era.println();
          await era.printAndWait([
            digital.get_colored_name(),
            ' была необычайно миниатюрна, но ',
            you.get_colored_name(),
            ' обнаружила это, лишь когда ',
            digital.sex,
            ' оказалась на спине: ',
            digital.sex,
            ' весила ещё меньше, чем казалось.',
          ]);
          await era.printAndWait([
            'Мягкое тело, дыхание... так такое и правда бывает? Тёплое дыхание на шее ',
            you.get_colored_name(),
            ', отчего ',
            you.get_colored_name(),
            ' чувствует лёгкую щекотку.',
          ]);
          await era.printAndWait([
            'Когда вернулись, ',
            digital.get_colored_name(),
            ' принялась усердно извиняться перед ',
            you.get_colored_name(),
            '.',
          ]);
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
